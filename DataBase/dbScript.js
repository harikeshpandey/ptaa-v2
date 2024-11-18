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
        const formData = {
            'entry.686190506': document.getElementById('id').value, // also update karna entry.686190506 whatever you get after getting from page source of google form same for all
            'entry.firstName': document.getElementById('fname').value,
            'entry.middleName': document.getElementById('mname').value,
            'entry.lastName': document.getElementById('lname').value,
            'entry.batch': document.getElementById('batch').value,
            'entry.branch': document.getElementById('branch').value,
            'entry.gender': document.querySelector('input[name="gender"]:checked')?.value,
            'entry.address1': document.getElementById('address1').value,
            'entry.address2': document.getElementById('address2').value,
            'entry.city': document.getElementById('city').value,
            'entry.state': document.getElementById('state').value,
            'entry.country': document.getElementById('country').value,
            'entry.pincode': document.getElementById('Pincode').value,
            'entry.email': document.getElementById('email').value,
            'entry.linkedin': document.getElementById('linkedin').value,
            'entry.facebook': document.getElementById('facebook').value,
            'entry.landline': document.getElementById('landline').value,
            'entry.mobile': document.getElementById('phn_number').value,
            'entry.organization': document.getElementById('org').value,
            'entry.designation': document.getElementById('designation').value,
            'entry.officeNumber': document.getElementById('off_number').value,
            'entry.profession': document.getElementById('profession').value,
            'entry.expertise': document.getElementById('expertise').value
        };

        const googleFormUrl = 'Link Here For Google Form'; // Put google form link here
        // Submit the form
        const response = await fetch(googleFormUrl, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData).toString()
        });

        // Show success message
        statusDiv.innerHTML = 'Form submitted successfully!';
        statusDiv.className = 'submit-status success';
        
        // Reset all forms
        document.querySelectorAll('form').forEach(form => form.reset());

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

// Add form validation
document.querySelectorAll('input[required]').forEach(input => {
    input.addEventListener('invalid', function(e) {
        e.preventDefault();
        this.classList.add('invalid');
    });

    input.addEventListener('input', function() {
        if (this.validity.valid) {
            this.classList.remove('invalid');
        }
    });
});