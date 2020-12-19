# Azure-Form-Recognizer-API-Integration

API DOCUMENTATION
The Azure Form Recognizer extracts information from forms and images into structured data. The options implemented are: 
*•	Analyze Layout
*•	Analyze Receipt

Analyze Layout
Extracts text and table structure from documents using optical character recognition (OCR). An API POST request is sent to the cognitive service with the layout passed in the request. Body as a URL of type .json, .pdf, .jpg, .png  which returns a json of the requested document. 
HTTP POST REQUEST SAMPLE
POST https://104.131.161.205:3001/layout
Host: recogform1.cognitiveservices.azure.com
Path: /formrecognizer/v2.0/layout/analyze
Content-Type: application/json
Ocp-Apim-Subscription-Key: ••••••••••••••••••••••••••••••••
{
  "source": "https://campustecnologicoalgeciras.es/wp-content/uploads/2017/07/OoPdfFormExample.pdf"
}
POST https://104.131.161.205:3001/layout
This end point requires the user to pass a req.body.source of raw of type JSON in postman URL similar to the above example shown in red. 
A status 200 OK response message is returned with several headers out of which we need the field apim-request-id. Sample response is shown below:
apim-request-id: 4dcedb9a-3017-41a0-910a-07d8bfe15317
We need to pass this apim-request-id as id params parameter to the GET method to receive the json form of the document.
GET https://104.131.161.205:3001/layout/:id

Sample GET method with json response : https://104.131.161.205:3001/layout/4dcedb9a-3017-41a0-910a-07d8bfe15317
Analyze Receipt
Detects and extracts data from receipts using optical character recognition (OCR) and our receipt model, enabling you to easily extract structured data from receipts such as merchant name, merchant phone number, transaction date, transaction total, and more. An API POST request is sent to the cognitive service with the receipt passed in the request. Body as a URL of type .json, .pdf, .jpg, .png  which returns a json of the requested document. 
HTTP POST REQUEST SAMPLE
POST https://104.131.161.205:3001/layout
Host: recogform1.cognitiveservices.azure.com
Path: /formrecognizer/v2.0/layout/analyze
Content-Type: application/json
Ocp-Apim-Subscription-Key: ••••••••••••••••••••••••••••••••
{
  "source": "https://www.howtogeek.com/wp-content/uploads/2017/03/img_58b76ccb8d9c3.png"
}
POST https://104.131.161.205:3001/receipt
This end point requires the user to pass a req.body.source of raw of type JSON in postman URL similar to the above example shown in red. 
A status 200 OK response message is returned with several headers out of which we need the field apim-request-id. Sample response is shown below:
apim-request-id: 9c9a3a11-a719-4a42-8e1d-2e8b1a28fd15
We need to pass this apim-request-id as id params parameter to the GET method to receive the json form of the document.
GET https://104.131.161.205:3001/receipt/:id

Sample GET method with json response : https://104.131.161.205:3001/receipt/9c9a3a11-a719-4a42-8e1d-2e8b1a28fd15


