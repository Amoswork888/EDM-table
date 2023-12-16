javascript:(function() {

    let bodyElement = document.querySelector('body');
    let mainTable = document.querySelector('table');
    let subTables = document.querySelectorAll('table table');
    let images = document.querySelectorAll('img');
    let imgMaxWidth = 0; /*建立變數存放最大的圖片尺寸，以利設定為 table 寬度*/

    /*設定 body*/
    const bodyAttributes = {
        'leftmargin': '0',
        'topmargin': '0',
        'marginwidth': '0',
        'marginheight': '0',
    };
    /* Object.assign(bodyElement, bodyAttributes); */
    Object.keys(bodyAttributes).forEach(attr => {
        bodyElement.setAttribute(attr, bodyAttributes[attr]);
    });


    /*遍歷所有圖片，抓取尺寸並設定到 img 及 td*/
    images.forEach(function(images) {
        const tdParent = images.closest('td');
        const imgWidth = images.width;
        const imgHeight = images.height;
        /*比較所有圖片尺寸，抓出最寬的圖片尺寸給表格使用*/
        if (imgWidth > imgMaxWidth) {
            imgMaxWidth = imgWidth;
        }

        const imgAttributes = {
            'width': imgWidth,
            'height': imgHeight,
            'style': 'vertical-align: top; display: block; margin: 0; padding: 0; border: none;',
        };
        /*
        Object.keys(imgAttributes).forEach(attr => {
            images.setAttribute(attr, imgAttributes[attr]);
        }); */
        Object.assign(images, imgAttributes);

        if (tdParent) {
            const tdAttributes = {
                'width': imgWidth,
                'height': imgHeight,
                'border': '0',
                'align': 'center',
                'style': `width: ${imgWidth}px; height: ${imgHeight}px; padding: 0;`,
            };
            /*
            Object.keys(tdAttributes).forEach(attr => {
                tdParent.setAttribute(attr, tdAttributes[attr]);
            }); */
            Object.assign(tdParent, tdAttributes);
        }
    });

    /* 設定主表格屬性 */
    const mainTableAttributes = {
        'width': imgMaxWidth,
        'align': 'center',
        'cellpadding': '0',
        'cellspacing': '0',
        'border': '0',
        'style': 'width: 100%; max-width: ' + imgMaxWidth + 'px; margin:20px auto; text-align: center; background-color: #ffffff;',
    };
    
    Object.keys(mainTableAttributes).forEach(attr => {
        mainTable.setAttribute(attr, mainTableAttributes[attr]);
    });
    /* Object.assign(mainTable, mainTableAttributes); */

    const subTablesAttributes = {
        'align': 'center',
        'cellpadding': '0',
        'cellspacing': '0',
        'border': '0',
        'style': `width: 100%; max-width: ${imgMaxWidth}px; text-align: center;background-color: #ffffff;`,
    };

    /* 設定子表格屬性 */
    subTables.forEach(subTable => {
        Object.keys(subTablesAttributes).forEach(attr => {
            subTable.setAttribute(attr, subTablesAttributes[attr]);
        });
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
