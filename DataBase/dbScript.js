document.getElementById('alumniForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submitBtn');
    const statusDiv = document.getElementById('submitStatus');
    
    // Disable submit button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Submitting... <span class="loading"></span>';
    statusDiv.innerHTML = '';

    try {
        // Collect form data
        const formData = new FormData();
        
        // Mapping form fields to Google Form entry fields
        const fieldMapping = {
            'id': 'entry.1098127830',
            'fname': 'entry.1286708401',
            'mname': 'entry.1188318800',
            'lname': 'entry.1353692994',
            'batch': 'entry.1601390016',
            'branch': 'entry.1775995771',
            'gender': 'entry.801614107',
            'address1': 'entry.942593849',
            'address2': 'entry.1193456953',
            'city': 'entry.1023433258',
            'state': 'entry.1065299633',
            'country': 'entry.637734272',
            'Pincode': 'entry.959112493',
            'email': 'entry.1995705557',
            'linkedin': 'entry.2036726104',
            'facebook': 'entry.1011874038',
            'landline': 'entry.1094420000',
            'phn_number': 'entry.280658330',
            'org': 'entry.590726749',
            'designation': 'entry.1950901750',
            'off_number': 'entry.842363583',
            'profession': 'entry.276729101',
            'expertise': 'entry.1954270882'
        };

        // Add form data to FormData object
        Object.keys(fieldMapping).forEach(fieldId => {
            const element = document.getElementById(fieldId);
            
            // Special handling for radio buttons
            if (fieldId === 'gender') {
                const selectedGender = document.querySelector('input[name="gender"]:checked');
                console.log(selectedGender);
                if (selectedGender) {
                    formData.append(fieldMapping[fieldId], selectedGender.value);
                }
            } else if (element) {
                formData.append(fieldMapping[fieldId], element.value);
            }
        });

        const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSf-hy_mqToM47uWBCZY1l9Nez6ayUbWOgt_juDZGfIhNDKesQ/formResponse';
        
        // Submit the form
        const response = await fetch(googleFormUrl, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        });

        // Show success message
        statusDiv.innerHTML = 'Form submitted successfully!';
        statusDiv.className = 'submit-status success';
        
        // Reset the form
        document.getElementById('alumniForm').reset();

    } catch (error) {
        console.error('Submission error:', error);
        statusDiv.innerHTML = 'Error submitting form. Please try again.';
        statusDiv.className = 'submit-status error';
    } finally {
        // Reset button state
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Submit Record';
    }
});