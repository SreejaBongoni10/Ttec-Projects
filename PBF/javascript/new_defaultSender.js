function setDefaultSender(executionContext) {
    var formContext = executionContext.getFormContext();
    
    // Define the default sender email
    var defaultSenderEmail = "ecmarketing@pbfenergy.com";
    
    // Set the default value for the 'From' field
    formContext.getAttribute("from").setValue([{
        "emailaddress": defaultSenderEmail
    }]);
}
