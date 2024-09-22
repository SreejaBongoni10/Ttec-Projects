function setCustomFromEmail(executionContext) {
    var formContext = executionContext.getFormContext();
    
    // Set the 'From' field to your personal email address
    var fromField = formContext.getAttribute("from");
    if (fromField) {
        var defaultEmail = [{
            id: null,  // Since the email is not stored in Dynamics, we leave the ID as null
            name: "youremail@example.com",  // Replace with your own email address
            entityType: "systemuser"  // Use 'systemuser' even though the email is hardcoded
        }];
        
        fromField.setValue(defaultEmail);
    }
}
