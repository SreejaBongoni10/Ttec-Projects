function setDefaultFromAddress(executionContext) {
    var formContext = executionContext.getFormContext();

    // Check if the form is a new record (FormType 1 means new form)
    if (formContext.ui.getFormType() === 1) {
        var fromField = formContext.getAttribute("from");

        // Only set the default if the field is currently empty
        if (fromField && fromField.getValue() === null) {
            var defaultEmail = [{
                id: "685932888",  // Replace with the actual GUID of the queue or user
                name: "ecmarketing@pbfenergy.com",  // Display name for the email
                entityType: "queue"  // Use "queue" or "systemuser" based on the email association
            }];

            fromField.setValue(defaultEmail);
        }
    }
}
