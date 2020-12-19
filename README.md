# Azure-Form-Recognizer-API-Integration

## API DOCUMENTATION
The Azure Form Recognizer extracts information from forms and images into structured data. The serviceds implemented are: 
*	Analyze Layout
*	Analyze Receipt

### Analyze Layout
Extracts text and table structure from documents using optical character recognition (OCR). An API POST request is sent to the cognitive service with the layout passed in the request.body as a URL of type .json, .pdf, .jpg, .png  which returns a json of the requested document. 
#### HTTP POST REQUEST SAMPLE FOR LAYOUT
POST http://104.131.161.205:3001/layout \
##### REQUEST.HEADERS
Content-Type: application/json \
Ocp-Apim-Subscription-Key: •••••••••••••••••••••••••••••••• \
##### REQUEST.BODY.SOURCE 
{
   **"source": "https://campustecnologicoalgeciras.es/wp-content/uploads/2017/07/OoPdfFormExample.pdf"**
} 
#### POST http://104.131.161.205:3001/layout 
This end point requires the user to pass a **req.body.source** of raw of type **JSON** in postman as a URL similar to the above example shown in bold. \
The **request.headers** are passed in the application parameters and is optional. \
A status 200 OK response message is returned with several response.headers out of which we need the response field -> apim-request-id. \
Sample response is shown below: \
**apim-request-id: 4dcedb9a-3017-41a0-910a-07d8bfe15317** \
This apim-request-id is passed as params request parameter to the GET method to receive the response.json form of the document.
#### GET http://104.131.161.205:3001/layout/:id

Sample GET method Example with json response : **http://104.131.161.205:3001/layout/4dcedb9a-3017-41a0-910a-07d8bfe15317**
### Analyze Receipt
Detects and extracts data from receipts using optical character recognition (OCR) and our receipt model, enabling you to easily extract structured data from receipts such as merchant name, merchant phone number, transaction date, transaction total, and more. An API POST request is sent to the cognitive service with the receipt passed in the request.body as a URL of type .json, .pdf, .jpg, .png  which returns a json of the requested document. 
#### HTTP POST REQUEST SAMPLE FOR RECEIPT
POST http://104.131.161.205:3001/receipt \
##### REQUEST HEADERS
Content-Type: application/json \
Ocp-Apim-Subscription-Key: •••••••••••••••••••••••••••••••• \
##### REQUEST BODY
{
  **"source": "https://www.howtogeek.com/wp-content/uploads/2017/03/img_58b76ccb8d9c3.png"**
} 
#### POST http://104.131.161.205:3001/receipt
This end point requires the user to pass a **req.body.source** of raw of type **JSON** in postman as a URL similar to the above example shown in bold. \
The **request.headers** are passed in the application parameters and is optional. \
A status 200 OK response message is returned with several response.headers out of which we need the response field -> apim-request-id. \
Sample response is shown below: \
**apim-request-id: 9c9a3a11-a719-4a42-8e1d-2e8b1a28fd15** \
This apim-request-id is passed as params request parameter to the GET method to receive the response.json form of the receipt.

#### GET http://104.131.161.205:3001/receipt/:id

Sample GET method Example with json response : **http://104.131.161.205:3001/receipt/9c9a3a11-a719-4a42-8e1d-2e8b1a28fd15**


