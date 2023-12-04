javascript:(function() {

    let bodyElement = document.querySelector('body');
    let tableElement = document.querySelector('table');
    let subTableElement = document.querySelectorAll('table table');
    let imgElements = document.querySelectorAll('img');
    let imgMaxWidth = 0; /*建立變數存放最大的圖片尺寸，以利設定為 table 寬度*/

    /*遍歷所有圖片，抓取尺寸並設定到 img 及 td*/
    imgElements.forEach(function(imgElement) {
        let tdParent = imgElement.closest('td');
        let imgWidth = imgElement.width;
        let imgHeight = imgElement.height;
        /*比較所有圖片尺寸，抓出最寬的圖片尺寸給表格使用*/
        if (imgWidth > imgMaxWidth) {
            imgMaxWidth = imgWidth;
        }

        imgElement.setAttribute('width', imgWidth);
        imgElement.setAttribute('height', imgHeight);
        imgElement.setAttribute('align', 'center');
        imgElement.style.verticalAlign = 'top';
        imgElement.style.display = 'block';
        imgElement.style.margin = '0';
        imgElement.style.padding = '0';
        imgElement.style.border = 'none';

        if (tdParent) {
            tdParent.setAttribute('width', imgWidth);
            tdParent.setAttribute('height', imgHeight);
            tdParent.setAttribute('border', '0');
            tdParent.setAttribute('align', 'center');
            tdParent.style.width = imgWidth + 'px';
            tdParent.style.height = imgHeight + 'px';
            tdParent.style.padding = '0';
        }
    });

    /*設定 body*/
    bodyElement.setAttribute('leftmargin', '0');
    bodyElement.setAttribute('topmargin', '0');
    bodyElement.setAttribute('marginwidth', '0');
    bodyElement.setAttribute('marginheight', '0');

    /*設定主 table*/
    tableElement.setAttribute('width', imgMaxWidth);
    tableElement.setAttribute('align', 'center');
    tableElement.setAttribute('cellpadding', '0');
    tableElement.setAttribute('cellspacing', '0');
    tableElement.setAttribute('border', '0');
    tableElement.style.backgroundColor = '#ffffff';
    tableElement.style.width = '100%';
    tableElement.style.maxWidth = imgMaxWidth + 'px';
    tableElement.style.margin = '20px auto';
    tableElement.style.textAlign = 'center';
    /*設定巢狀 table */
    subTableElement.forEach(function(subTable) {
        subTable.setAttribute('align', 'center');
        subTable.setAttribute('cellpadding', '0');
        subTable.setAttribute('cellspacing', '0');
        subTable.setAttribute('border', '0');
        subTable.style.backgroundColor = '#ffffff';
        subTable.style.width = '100%';
        subTable.style.maxWidth = imgMaxWidth + 'px';
        subTable.style.textAlign = 'center';
    });
    

    /*找到table元素*/
    let tableToCopy = document.querySelector('table');

    /* 確認是否找到table元素 */
    if (tableToCopy) {
        /* 複製table及其子代的原始碼 */
        let tableHtml = tableToCopy.outerHTML;
        /* 建立一個textarea元素，並將複製的HTML放入其中 */
        let textarea = document.createElement('textarea');
        textarea.value = tableHtml;
        /* 將textarea元素添加到body中 */
        document.body.appendChild(textarea);
        /* 選中textarea中的內容 */
        textarea.select();
        /* 執行複製到剪貼簿的命令 */
        document.execCommand('copy');
        /* 移除textarea元素 */
        document.body.removeChild(textarea);

        alert('已複製table元素到剪貼簿');
    } else {
        alert('未找到table元素');
    }
    
})();
