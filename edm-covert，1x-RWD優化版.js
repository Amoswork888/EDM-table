javascript:(function() {

    const mainTable = document.querySelector('table');
    const subTables = document.querySelectorAll('table table');
    const images = document.querySelectorAll('img');

    const mainTableAttributes = {
        'width': '600',
        'align': 'center',
        'cellpadding': '0',
        'cellspacing': '0',
        'border': '0',
        'style': '  width: 100%;\
                    max-width: 600px;\
                    background-color: #ffffff;',
    };
    Object.keys(mainTableAttributes).forEach(attr => {
        mainTable.setAttribute(attr, mainTableAttributes[attr]);
    });

    const tableAttributes = {
        'align': 'center',
        'cellpadding': '0',
        'cellspacing': '0',
        'border': '0',
        'style':   'width: 100%;\
                    max-width: 600px;\
                    background-color: #ffffff;',
    };
    subTables.forEach(subTable => {
        Object.keys(tableAttributes).forEach(attr => {
            subTable.setAttribute(attr, tableAttributes[attr]);
        });
    });

    images.forEach(function(imgElement) {
        const tdParent = imgElement.closest('td');
        const imgWidth = imgElement.width;
        const imgHeight = imgElement.height;

        const imgAttributes = {
            'width': imgWidth,
            'height': imgHeight,
            'style': '  display: block;\
                        width: 100%;\
                        height: auto;\
                        margin: 0;\
                        padding: 0;\
                        border: none;\
                        vertical-align: top;',
        };

        Object.keys(imgAttributes).forEach(attr => {
            imgElement.setAttribute(attr, imgAttributes[attr]);
        });

        if (tdParent) {
            const tdAttributes = {
                'width': imgWidth,
                'height': imgHeight,
                'border': '0',
                'style': `  width: ${imgWidth}px;
                            height: ${imgHeight}px;
                            padding: 0;`,
            };

            Object.keys(tdAttributes).forEach(attr => {
                tdParent.setAttribute(attr, tdAttributes[attr]);
            });
        }
    });
})();
