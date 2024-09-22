function setDefaultSender(executionContext) {
    var formContext = executionContext.getFormContext();
    
    // Define the default sender email
    var defaultSenderEmail = [{
        id: "685932888",  // Replace with the actual GUID of the queue
        name: "abc@gmail.com",  // Display name for the email
        entityType: "queue"  // Use "queue" or "systemuser" based on the email association
    }];
    
    // Set the default value for the 'From' field
    formContext.getAttribute("from").setValue(defaultSenderEmail);
}
