function validateForm() {
    var nameInput = document.querySelector('input[type="text"]');
    var commentsInput = document.querySelector('textarea');
    var maleRadio = document.getElementById('male');
    var femaleRadio = document.getElementById('female');

   
    if (nameInput.value.trim() === '' || commentsInput.value.trim() === '') {
        alert('All fields are compulsory');
        
        
        if (nameInput.value.trim() === '') {
            nameInput.focus();
        } else {
            commentsInput.focus();
        }

        return false;
    }

    
    if (!maleRadio.checked && !femaleRadio.checked) {
        alert('All fields are compulsory');
        maleRadio.focus(); 
        return false;
    }

    return true;
}
