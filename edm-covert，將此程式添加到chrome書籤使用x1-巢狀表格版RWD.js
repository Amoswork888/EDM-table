javascript:(function() {

    let tableElement = document.querySelector('table');
    let subTableElement = document.querySelectorAll('td table');
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
        let tdParent = subTable.closest('td');

        subTable.setAttribute('align', 'center');
        subTable.setAttribute('cellpadding', '0');
        subTable.setAttribute('cellspacing', '0');
        subTable.setAttribute('border', '0');
        subTable.style.backgroundColor = '#ffffff';
        subTable.style.width = '100%';
        subTable.style.maxWidth = '600px';

        if (tdParent) {
            let subTableWidth = subTable.offsetWidth;
            console.log(subTableWidth);

            tdParent.setAttribute('width', subTableWidth);
            tdParent.setAttribute('border', '0');
        }
    });

    imgElements.forEach(function(imgElement) {
        let tdParent = imgElement.closest('td');

        imgElement.style.verticalAlign = 'top';
        imgElement.style.display = 'block';
        imgElement.style.width = '100%';
        imgElement.style.height = 'auto';
        imgElement.style.margin = '0';
        imgElement.style.padding = '0';
        imgElement.style.border = 'none';

        if (tdParent) {
            let imgWidth = imgElement.width;

            tdParent.setAttribute('width', imgWidth);
            tdParent.setAttribute('border', '0');
            tdParent.style.width = imgWidth + 'px';
            tdParent.style.padding = '0';
        }
    });
})();
