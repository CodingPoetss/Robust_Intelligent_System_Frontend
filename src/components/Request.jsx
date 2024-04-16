
const App = () => {

    const download = () => {
        fetch("https://t.incopat.com/download/download", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
                "content-type": "application/json",
                "sec-ch-ua": "\"Microsoft Edge\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
                "cookie": "OptanonAlertBoxClosed=2024-04-09T11:31:01.186Z; sajssdk_2015_cross_new_user=1; loginLocal=zh; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%228617822848511%22%2C%22first_id%22%3A%2218ec2a069068ce-0fd330f3d983208-4c657b58-1327104-18ec2a06907b1d%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%2218ec2a069068ce-0fd330f3d983208-4c657b58-1327104-18ec2a06907b1d%22%7D; remember-me=ODYxNzgyMjg0ODUxMToxNzEzODcyMjM4NDg3OjUxZDE2YWNkNmM3OWJmM2ViYmQ0ZmJhNzQ3OTQ5Zjg3; SESSION=OWE2ODRmNjctMzc1Yy00MjYxLTg1M2EtZjY0YmExNmNkY2Rj; OptanonConsent=isGpcEnabled=0&datestamp=Tue+Apr+09+2024+20%3A00%3A41+GMT%2B0800+(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&version=202308.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=010d047f-1a89-414e-9bbd-4e681e6d2a7d&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1&geolocation=CN%3BBJ&AwaitingReconsent=false; tempSession=OWE2ODRmNjctMzc1Yy00MjYxLTg1M2EtZjY0YmExNmNkY2Rj; JSESSIONID=9A7F4294EACD1D1F08C110F23228D1F9",
                "Referer": "https://t.incopat.com/downloadTemp/toDownloadPage",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": "{\"source\":\"download\",\"jumpR\":\"\",\"formerQuery\":\"((ALL=(人工智能)) AND (TIAB=(人工智能) OR FULL=(人工智能) OR DISCLOSURE=(人工智能))) AND (AD=[20100101 to 20221231])\",\"downloadQuery\":\"\",\"database\":\"all\",\"basc\":\"false\",\"sortFld\":\"PD\",\"secondBasc\":\"false\",\"secondSortFld\":\"\",\"page\":\"1\",\"rows\":\"100\",\"startRow\":\"0\",\"pncTypeCountry\":\"\",\"filter\":\"\",\"filterTag\":\"\",\"filterForDiv\":\"\",\"id_filter\":\"\",\"fields\":\"PN,PD,AN,AD,TI-CN,TI-EN,AP-OR,CLIPIMG,ABO,AB-TS,IPC\",\"facetFields\":\"PT\",\"iFFields\":\"\",\"downloadFields\":\"TI-CN,TI-EN,AB-CN,AB-EN,AP-OR,PN,PD,AN,AD,PT,PAT,PNC,PNLINK\",\"downRangeType\":\"range\",\"downRangeData\":\"201-300\",\"pdfDownloadNameType\":\"\",\"pdfDownloadMethodType\":\"\",\"downRangeData4Id\":\"\",\"downRangeData4Tio\":\"\",\"fileType\":\"EXCEL\",\"fileName\":\"\",\"highlight\":\"人工智能 ; 21E3CF\",\"oriHighLight\":\"人工智能 ; 21E3CF\",\"highlight_bank\":\"\",\"highlight_advanced\":\"人工智能 ; 21E3CF\",\"formerPnc\":\"((DB=(CN)) AND PT=(1 OR 4))\",\"checkData\":\"zhcn,1,4,,CN_1,CN_4\",\"selectShow\":\"graphic\",\"emails\":\"\",\"folderFlag\":\"\",\"fromFlag\":\"\",\"importSource\":\"manual\",\"libId\":\"\",\"folderId\":\"\",\"nodeid\":\"\",\"nodePath\":\"\",\"quoteId\":\"\",\"codeFormula\":\"\",\"searchHistoryIds\":\"\",\"saveHistory\":\"false\",\"accessLog\":\"advancedSearch\",\"mergeCongeners\":\"0\",\"forDelFilter_mergeType\":\"\",\"statisticfields\":\"\",\"applicationTimeSequence\":\"PD_ASC\",\"kinFirstpatentSequence\":\"TIME_PNC\",\"kinTimeSequence\":\"PD_ASC\",\"dualApplicationTypeSequence\":\"1\",\"dualApplicationTimeSequence\":\"PD_ASC\",\"kinCountrySequence\":\"CN,US,JP,KR,DE\",\"dwpiSequence\":\"FTYPE-DWPI\",\"rQueryPn\":\"\",\"perExcelSize\":\"\",\"listFields\":\"\",\"patents\":\"\",\"semanticRetrun\":\"\",\"hxxgdList\":\"\",\"hxxgdList1\":\"\",\"patentFamilys\":\"\",\"searchType\":\"0\",\"downloadDesc\":false,\"downloadMerge\":false,\"containHighLight\":false,\"selectedSortField\":\"PD_DESC\",\"downloadIDS\":false}",
            "method": "POST"
        })
            .then((res) => {
                console.log(res.json())
            })
            .catch(err => {
                console.log(err)
            })
            ;
    };

    const downloadFileEncrypt = () => {

        fetch("https://t.incopat.com/download/downloadFileEncrypt", {
            "headers": {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
                "cache-control": "max-age=0",
                "content-type": "application/x-www-form-urlencoded",
                "sec-ch-ua": "\"Microsoft Edge\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "upgrade-insecure-requests": "1",
                "cookie": "loginEntrance=null; OptanonAlertBoxClosed=2024-04-09T11:31:01.186Z; sajssdk_2015_cross_new_user=1; loginLocal=zh; sensorsdata2015jssdkcross=%7B%22distinct_id%22%3A%228617822848511%22%2C%22first_id%22%3A%2218ec2a069068ce-0fd330f3d983208-4c657b58-1327104-18ec2a06907b1d%22%2C%22props%22%3A%7B%22%24latest_traffic_source_type%22%3A%22%E7%9B%B4%E6%8E%A5%E6%B5%81%E9%87%8F%22%2C%22%24latest_search_keyword%22%3A%22%E6%9C%AA%E5%8F%96%E5%88%B0%E5%80%BC_%E7%9B%B4%E6%8E%A5%E6%89%93%E5%BC%80%22%2C%22%24latest_referrer%22%3A%22%22%7D%2C%22%24device_id%22%3A%2218ec2a069068ce-0fd330f3d983208-4c657b58-1327104-18ec2a06907b1d%22%7D; remember-me=ODYxNzgyMjg0ODUxMToxNzEzODcyMjM4NDg3OjUxZDE2YWNkNmM3OWJmM2ViYmQ0ZmJhNzQ3OTQ5Zjg3; SESSION=OWE2ODRmNjctMzc1Yy00MjYxLTg1M2EtZjY0YmExNmNkY2Rj; tempSession=OWE2ODRmNjctMzc1Yy00MjYxLTg1M2EtZjY0YmExNmNkY2Rj; advancedSearch%3A8617822848511=%5B%7B%22no%22%3A1%2C%22selectOperator%22%3Anull%2C%22belong%22%3A%22numbers%22%7D%2C%7B%22no%22%3A1%2C%22selectOperator%22%3Anull%2C%22belong%22%3A%22dates%22%7D%5D; OptanonConsent=isGpcEnabled=0&datestamp=Tue+Apr+09+2024+20%3A00%3A41+GMT%2B0800+(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&version=202308.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=010d047f-1a89-414e-9bbd-4e681e6d2a7d&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0003%3A1%2CC0002%3A1&geolocation=CN%3BBJ&AwaitingReconsent=false; JSESSIONID=CF1E7519301319AC2B9571436FD59B22",
                "Referer": "https://t.incopat.com/downloadTemp/toDownloadPage",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": "_json_att=&path=edje5C%252BOS%252Fw6IH4sEo7sG%252FOIWGJ2%252F%252Fs2L8fxJ4Mtg4V%252FR8yBokY0%252FZM%252FKf6jxR91p0J0YT0BN2SE%250APba0m%252BM1dUAE%252BtuBzSCJie%252B%252BZIF5bKiSqoHCy4iL0yQ1fVJWrdBX",
            "method": "POST"
        }).then((res) => {
            console.log(res.json())
        })
            .catch(err => {
                console.log(err)
            })
            ;

    }

    const isDownload = () => {
        fetch("https://t.incopat.com/download/isDownload", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
                "content-type": "application/json",
                "sec-ch-ua": "\"Microsoft Edge\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"Windows\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest"
            },
            "referrer": "https://t.incopat.com/downloadTemp/toDownloadPage",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"source\":\"download\",\"jumpR\":\"\",\"formerQuery\":\"((ALL=(人工智能)) AND (TIAB=(人工智能) OR FULL=(人工智能) OR DISCLOSURE=(人工智能))) AND (AD=[20100101 to 20221231])\",\"downloadQuery\":\"\",\"database\":\"all\",\"basc\":\"false\",\"sortFld\":\"PD\",\"secondBasc\":\"false\",\"secondSortFld\":\"\",\"page\":\"1\",\"rows\":\"100\",\"startRow\":\"0\",\"pncTypeCountry\":\"\",\"filter\":\"\",\"filterTag\":\"\",\"filterForDiv\":\"\",\"id_filter\":\"\",\"fields\":\"PN,PD,AN,AD,TI-CN,TI-EN,AP-OR,CLIPIMG,ABO,AB-TS,IPC\",\"facetFields\":\"PT\",\"iFFields\":\"\",\"downloadFields\":\"TI-CN,TI-EN,AB-CN,AB-EN,AP-OR,PN,PD,AN,AD,PT,PAT,PNC,PNLINK\",\"downRangeType\":\"range\",\"downRangeData\":\"201-300\",\"pdfDownloadNameType\":\"\",\"pdfDownloadMethodType\":\"\",\"downRangeData4Id\":\"\",\"downRangeData4Tio\":\"\",\"fileType\":\"EXCEL\",\"fileName\":\"\",\"highlight\":\"人工智能 ; 21E3CF\",\"oriHighLight\":\"人工智能 ; 21E3CF\",\"highlight_bank\":\"\",\"highlight_advanced\":\"人工智能 ; 21E3CF\",\"formerPnc\":\"((DB=(CN)) AND PT=(1 OR 4))\",\"checkData\":\"zhcn,1,4,,CN_1,CN_4\",\"selectShow\":\"graphic\",\"emails\":\"\",\"folderFlag\":\"\",\"fromFlag\":\"\",\"importSource\":\"manual\",\"libId\":\"\",\"folderId\":\"\",\"nodeid\":\"\",\"nodePath\":\"\",\"quoteId\":\"\",\"codeFormula\":\"\",\"searchHistoryIds\":\"\",\"saveHistory\":\"false\",\"accessLog\":\"advancedSearch\",\"mergeCongeners\":\"0\",\"forDelFilter_mergeType\":\"\",\"statisticfields\":\"\",\"applicationTimeSequence\":\"PD_ASC\",\"kinFirstpatentSequence\":\"TIME_PNC\",\"kinTimeSequence\":\"PD_ASC\",\"dualApplicationTypeSequence\":\"1\",\"dualApplicationTimeSequence\":\"PD_ASC\",\"kinCountrySequence\":\"CN,US,JP,KR,DE\",\"dwpiSequence\":\"FTYPE-DWPI\",\"rQueryPn\":\"\",\"perExcelSize\":\"\",\"listFields\":\"\",\"patents\":\"\",\"semanticRetrun\":\"\",\"hxxgdList\":\"\",\"hxxgdList1\":\"\",\"patentFamilys\":\"\",\"searchType\":\"0\",\"downloadDesc\":false,\"downloadMerge\":false,\"containHighLight\":false,\"selectedSortField\":\"PD_DESC\",\"downloadIDS\":false}",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        }).then((res) => {
            console.log(res.json())
        })
            .catch(err => {
                console.log(err)
            })
            ;
    }
    return (
        <>
            <button onClick={downloadFileEncrypt}>downloadFileEncrypt</button>
            <button onClick={download}>download</button>
            <button onClick={isDownload}>isDownload</button>
        </>
    );

};
export default App;