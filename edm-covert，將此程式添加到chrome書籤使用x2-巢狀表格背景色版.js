javascript:(function() {

    let bodyElement = document.querySelector('body');
    let tableElement = document.querySelector('table');
    let subTableElement = document.querySelectorAll('table table');
    let imgElements = document.querySelectorAll('img');
    let aLinks = document.querySelectorAll('a');
    let footAs = document.querySelectorAll('tfoot a');
    let imgMaxWidth = 0; /*建立變數存放最大的圖片尺寸，以利設定為 table 寬度*/


    /* 將RGBA顏色轉換為16進位碼 */
    function rgbaToHex(red, green, blue, alpha) {
        function componentToHex(component) {
            var hex = component.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };

        var hexRed = componentToHex(red);
        var hexGreen = componentToHex(green);
        var hexBlue = componentToHex(blue);
        var hexAlpha = componentToHex(Math.round(alpha * 255));

        return '#' + hexRed + hexGreen + hexBlue;
    };

    /*遍歷所有超連結，設定行高*/
    aLinks.forEach(function(aLink) {
        aLink.style.lineHeight = '1';
    });
    
    /*遍歷所有tfoot中的超連結，設定行高*/
    footAs.forEach(function(footA) {
        footA.style.lineHeight = '20px';
    });

    /*遍歷所有圖片，抓取尺寸並設定到 img 及 td*/
    imgElements.forEach(function(imgElement) {
        let tdParent = imgElement.closest('td');
        let imgWidth = imgElement.width / 2;
        let imgHeight = imgElement.height / 2;
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
        
        /* 創建Canvas元素 */
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');

        /* 設置Canvas的尺寸與圖片相同 */
        canvas.width = imgWidth;
        canvas.height = imgHeight;

        /* 將圖片繪製到Canvas上 */
        context.drawImage(imgElement, 0, 0, imgWidth, imgHeight);

        /* 指定座標位置 (x1, y1) */
        const x1 = 200;
        const y1 = 2;

        /* 獲取指定坐標位置的顏色 */
        let pixel = context.getImageData(x1, y1, 1, 1).data;

        /* pixel是一個包含RGBA值的陣列 */
        const red = pixel[0];
        const green = pixel[1];
        const blue = pixel[2];
        const alpha = pixel[3] / 255; /* 正規化 alpha 值 */

        /* 轉換為16進位碼 */
        const hexColor = rgbaToHex(red, green, blue);

        if (tdParent) {
            tdParent.setAttribute('width', imgWidth);
            tdParent.setAttribute('height', imgHeight);
            tdParent.setAttribute('border', '0');
            tdParent.setAttribute('align', 'center');
            tdParent.setAttribute('bgColor', hexColor);
            tdParent.style.width = imgWidth + 'px';
            tdParent.style.height = imgHeight + 'px';
            tdParent.style.padding = '0';
            tdParent.style.backgroundColor = hexColor;
        };
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
    tableElement.style.borderCollapse = 'collapse';
    tableElement.style.borderSpacing = '0';
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
        subTable.style.borderCollapse = 'collapse';
        subTable.style.borderSpacing = '0';
    });

    /* 等待100毫秒後複製表格 */
    const delayTime = 100;
    setTimeout(function() {
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

            alert('已複製 Table 元素到剪貼簿');
        } else {
            alert('未找到 Table 元素');
        }
    }, delayTime);

})();
