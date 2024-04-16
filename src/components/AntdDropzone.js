import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import axios from 'axios';

// const fileListdemo = [
//     {
//         uid: '0',
//         name: 'xxx.png',
//         status: 'uploading',
//         percent: 33,
//     },
//     {
//         uid: '-1',
//         name: 'yyy.png',
//         status: 'done',
//         url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//         thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
//     },
//     {
//         uid: '-2',
//         name: 'zzz.png',
//         status: 'error',
//     },
// ];


const App = () => {
    const [fileList, setFileList] = useState([])
    const { Dragger } = Upload;

    const updateFileList = (file, update) => {
        setFileList((prevList) => {
            return prevList.map((item) => {
                if (item.uid === file.uid) {
                    return { ...item, ...update };
                }
                return item;
            });
        });
    };


    const props = {
        name: 'file',
        filename: 'file',
        multiple: true,
        action: 'http://127.0.0.1:8000/image/upload/',
        method: 'post',
        maxCount: 1,
        // accept: 'image/*',
        // defaultFileList: fileList,
        listType: "picture",
        data: { a: 1, b: 2 },
        headers: {
            Authorization: '$prefix $token',
        },
        // 文件信息状态改变时的回调函数
        onChange(info) {
            const { status } = info.file;
            let newFileList = [...info.fileList];

            console.log("调用回调函数！！")
            console.log('Status:', status)
            if (status === 'uploading') {
                console.log('uploading', info.file, info.fileList);
            }
            if (status === 'done') {
                console.log("调用成功回调函数！！")
                message.success('done', `${info.file.name} file uploaded successfully.`);

            } else if (status === 'error') {
                message.error('error', `${info.file.name} file upload failed.`);
            }

            // 1. Limit the number of uploaded files
            // Only to show two recent uploaded files, and old ones will be replaced by the new
            newFileList = newFileList.slice(-3);

            // 2. Read from response and show file link
            newFileList = newFileList.map((file) => {
                if (file.response) {
                    // Component will show file.url as link
                    file.url = file.response.url;
                }
                return file;
            });

            // 更新 fileList 来反映每个文件的最新状态和进度
            newFileList = newFileList.map(file => ({
                ...file,
                percent: file.percent || 0, // 确保 percent 属性存在，如果不存在则默认为 0
            }));

            setFileList(newFileList);
        },
        onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
        },
        onRemove: (file) => {
            setFileList((currentFileList) => {
                return currentFileList.filter((item) => item.uid !== file.uid);
            });
        },
        // previewFile(file) {
        //     console.log('Your upload file:', file);
        //     // Your process logic. Here we just mock to the same file
        //     return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        //         method: 'POST',
        //         body: file,
        //     })
        //         .then((res) => res.json())
        //         .then(({ thumbnail }) => thumbnail);
        // },
        onStart(file) {
            console.log('onStart', file, file.name);
        },
        onSuccess(response, file) {
            console.log('onSuccess', response, file.name);
            updateFileList(file, { status: 'done', response });
        },
        onError(err) {
            console.log('onError', err);
        },
        onProgress({ percent }, file) {
            console.log('onProgress', `${percent}%`, file.name);
            updateFileList(file, { percent });
        },
        customRequest({
            action,
            data,
            file,
            filename,
            headers,
            onError,
            onProgress,
            onSuccess,
            withCredentials,
        }) {
            // EXAMPLE: post form-data with 'axios'
            // eslint-disable-next-line no-undef
            const formData = new FormData();
            if (data) {
                Object.keys(data).forEach(key => {
                    formData.append(key, data[key]);
                });
            }
            formData.append(filename, file);

            axios
                .post(action, formData, {
                    withCredentials,
                    headers,
                    onUploadProgress: (event) => {
                        // 加载进度条，并在onProgress中更新
                        const percent = Math.round((event.loaded / event.total) * 100);
                        onProgress({ percent }, file);
                    },
                })
                .then(({ data: response }) => {
                    onSuccess(response, file);
                })
                .catch((error) => {
                    onError(error);
                    updateFileList(file, { status: 'error', error });
                });

            return {
                abort() {
                    console.log('upload progress is aborted.');
                },
            };
        },

    };



    return (
        <Dragger {...props} fileList={fileList}>
            <p className="ant-upload-drag-icon"> {/* 调整图标大小 */}
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">点击或者拖拽上传</p>
            <p className="ant-upload-hint">
                支持单文件或者多文件上传。请勿上传敏感数据！
            </p>
        </Dragger>
    );
}
export default App;