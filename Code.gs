function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('forms.html').setTitle("Search Page");
}

function trackExamination(x){
  //var y = "Step8-12198901240890";
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet =  spreadsheet.getSheetByName('Received Sheets');
  var numRows = sheet.getLastRow();
  data = sheet.getRange(1,1,numRows,7).getValues();
  Logger.log(data[0][3]+data[0][5]);
  var result = "NotFound";
  for(var nn=data.length-1;nn>0;nn--){
    var papermobile = data[nn][3]+data[nn][5]; 
    Logger.log(papermobile);
    if(papermobile==x){
      result = data[nn][6];
     break;
    }
  }
  if(result == "Received"){
    return "We have successfully received your solved response sheet.";
  }
  else if(result == "ReSubmit"){
    return "Please re-send your solved response sheet in better picture resolution.";}
  else if(result == "StartEvaluation"){
    return "We have printed your response sheet and sent it for evaluation.";}
  else if(result == "EndEvaluation"){
    return "We have successfully evaluated your response sheet. We'll send the scanned sheet to you shortly.";}
  else if(result == "Sent"){
    return "We have successfully sent your evaluated response sheet to your registered email id.";}
  else{    return "We have successfully received your solved response sheet.";}
    return "Not Found. Please enter your registered mobile number.";
}