javascript:(function() {

    let tableElement = document.querySelector('table');
    let subTableElement = document.querySelectorAll('table table');
    let imgElements = document.querySelectorAll('img');

    tableElement.setAttribute('width', '600');
    tableElement.setAttribute('align', 'center');
    tableElement.setAttribute('cellpadding', '0');
    tableElement.setAttribute('cellspacing', '0');
    tableElement.setAttribute('border', '0');
    tableElement.style.backgroundColor = '#ffffff';
    tableElement.style.width = '100%';
    tableElement.style.maxWidth = '600px';

    subTableElement.forEach(function(subTable) {
        subTable.setAttribute('align', 'center');
        subTable.setAttribute('cellpadding', '0');
        subTable.setAttribute('cellspacing', '0');
        subTable.setAttribute('border', '0');
        subTable.setAttribute('border', '0');
        subTable.style.backgroundColor = '#ffffff';
        subTable.style.width = '100%';
        subTable.style.maxWidth = '600px';
    });

    imgElements.forEach(function(imgElement) {
        let tdParent = imgElement.closest('td');
        let imgWidth = imgElement.width;
        let imgHeight = imgElement.height;

        imgElement.setAttribute('width', imgWidth);
        imgElement.setAttribute('height', imgHeight);
        imgElement.style.verticalAlign = 'top';
        imgElement.style.display = 'block';
        imgElement.style.margin = '0';
        imgElement.style.padding = '0';
        imgElement.style.border = 'none';

        if (tdParent) {

            tdParent.setAttribute('width', imgWidth);
            tdParent.setAttribute('height', imgHeight);
            tdParent.setAttribute('border', '0');
            tdParent.style.width = imgWidth + 'px';
            tdParent.style.height = imgHeight + 'px';
            tdParent.style.padding = '0';
        }
    });
})();
