const UnexpectedError = {
    statusCode : 500,
    statusType : 'error',
    statusMessage : 'Internal Server Error'
};
const ResponseOK = {
    statusCode : 200,
    statusType : 'success',
    statusMessage : 'Sucess'
};
const ResourceCreated = {
    statusCode : 201,
    statusType : 'success',
    statusMessage : 'Resource created successfully'
};
const MissingFields = {
    statusCode : 400,
    statusType : 'Bad Gateway',
    statusMessage : 'All fields are required'
};
const tmr = {
     statusCode : 429,
     statusType : 'too much requests',
     statusMessage : 'Request limit exceeded'
}