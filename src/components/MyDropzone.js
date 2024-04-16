import React, { useCallback, useMemo, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import * as styles from '../assets/style.js'
import axios from 'axios';
import { InboxOutlined } from '@ant-design/icons';

// 定制文件校验器
// const maxLength = 10;
// function nameLengthValidator(file) {
//   if (file.name.length > maxLength) {
//     return {
//       code: "name-too-large",
//       message: `Name is larger than ${maxLength} characters`
//     };
//   }

//   return null
// }


function MyDropzone() {
  // 定义状态管理器
  const [files, setFiles] = useState([]);
  // 自定义的回调函数
  const onDrop = useCallback((acceptedFiles) => {
    // 更新文件状态
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })))

    // 处理上传接收文件
    const formData = new FormData();

    acceptedFiles.forEach((file) => {
      formData.append('file', file);
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result
        // console.log(file)
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })

    // 使用 Axios 发送 FormData 到服务器
    axios.post('http://127.0.0.1:8000/image/upload/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then(response => {
      console.log('upload files successfully:', response);
    }).catch(error => {
      console.error('failed to upload files:', error);
    });


  }, [])


  // 创建一个Dropzone对象
  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    isDragActive
  } = useDropzone({
    onDrop,                             // 成功接收文件的处理器
    // validator: nameLengthValidator,      // 文件格式校验器
    maxFiles: 3,                        // 限制最大可上传文件数量
    accept: {                           // 限制可接收文件类型
      'image/*': [],                    // 接受所有图片格式
      'video/*': [],                    // 接受所有视频格式
      // 'image/png': ['.png'],
      // 'image/jpeg': ['.jpeg', '.png'],
      // 'text/html': ['.html', '.htm'],
    }
  });

  // 定义预览框样式
  const thumbs = files.map(file => (
    <div style={styles.thumb} key={file.name}>
      <div style={styles.thumbInner}>
        <img
          src={file.preview}
          style={styles.img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
          alt='预览图片'
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  // 自定义上传框样式对象
  const style = useMemo(() => ({
    ...styles.baseStyle,
    ...(isFocused ? styles.focusedStyle : {}),
    ...(isDragAccept ? styles.acceptStyle : {}),
    ...(isDragReject ? styles.rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);


  // 处理接收的文件
  const acceptedFileItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  // 处理拒绝的文件
  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map(e => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));



  return (
    <section className="container">
      <div {...getRootProps({ style, className: 'dropzone' })}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <input {...getInputProps()} />
        {/* {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        } */}
        {isDragAccept && <p>All files will be accepted</p>}
        {isDragReject && (<p>Some files will be rejected</p>)}
        {!isDragActive && (<p>Drop some files here ...</p>)}
        <em>(3 files are the maximum number of files you can drop here)</em>
      </div>
      <aside>
        <h4>Accepted files</h4>
        <ul>{acceptedFileItems}</ul>
        <h4>Rejected files</h4>
        <ul>{fileRejectionItems}</ul>
      </aside>
      <aside style={styles.thumbsContainer}>
        {thumbs}
      </aside>
    </section>

  )
}

export default MyDropzone;
