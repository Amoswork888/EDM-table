javascript:(function() {

    let bodyElement = document.querySelector('body');
    let tableElement = document.querySelector('table');
    let subTableElement = document.querySelectorAll('table table');
    let imgElements = document.querySelectorAll('img');
    let imgMaxWidth = 0; /*建立變數存放最大的圖片尺寸，以利設定為 table 寬度*/


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
        imgElement.style.width = '100%';
        imgElement.style.height = 'auto';
        imgElement.style.margin = '0';
        imgElement.style.padding = '0';
        imgElement.style.border = 'none';

        if (tdParent) {
            tdParent.setAttribute('align', 'center');
            tdParent.setAttribute('border', '0');
            tdParent.style.padding = '0';
        }
    });

    bodyElement.setAttribute('leftmargin', '0');
    bodyElement.setAttribute('topmargin', '0');
    bodyElement.setAttribute('marginwidth', '0');
    bodyElement.setAttribute('marginheight', '0');

    tableElement.setAttribute('width', '600');
    tableElement.setAttribute('align', 'center');
    tableElement.setAttribute('cellpadding', '0');
    tableElement.setAttribute('cellspacing', '0');
    tableElement.setAttribute('border', '0');
    tableElement.style.backgroundColor = '#ffffff';
    tableElement.style.width = '100%';
    tableElement.style.maxWidth = imgMaxWidth + 'px';
    tableElement.style.margin = '20px auto';
    tableElement.style.textAlign = 'center';

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
})();
