const ExcelJs = require('exceljs')


const exportToExcel = async (data, name) => {
    const workbook = new ExcelJs.Workbook();

    workbook.creator = 'Me';
    workbook.lastModifiedBy = 'Her';
    workbook.created = new Date(Date.now());
    workbook.modified = new Date();
    workbook.lastPrinted = new Date(Date.now());


    const worksheet = workbook.addWorksheet(name);

    worksheet.columns = [
        { header: 'Product Name', key: 'productName', width: 30 },
    ]

    //add rows
    data.forEach(item => {
        worksheet.addRow(item);
    });

    //save excel file
    await workbook.xlsx.writeFile('/output/orders.xlsx');
    console.log("file created successfully.");
}

//example to call 
const data = await 