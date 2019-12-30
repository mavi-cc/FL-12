const minEmailLen = 5;
const minPassLen = 6;

let email = prompt('Enter your email')

if (email) {
    if (email.length >= minEmailLen) {
        if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
            let pass = prompt('Enter password:');
            if (pass) {
                if (email === 'user@gmail.com' && pass === 'UserPass' ||
                    email === 'admin@gmail.com' && pass === 'AdminPass') {
                    let passConfirm = confirm('Do you want to change your password?');

                    if (passConfirm) {
                        let pass = prompt('Enter old password.');
                        if (pass) {
                            if (email === 'user@gmail.com' && pass === 'UserPass' ||
                                email === 'admin@gmail.com' && pass === 'AdminPass') {
                                let newPass1 = prompt('Enter new password:');
                                if (newPass1.length >= minPassLen) {
                                    let newPass2 = prompt('Enter new password again.');
                                    if (newPass1 === newPass2) {
                                        alert('You have successfully changed your password.');
                                    } else {
                                        alert('You wrote the wrong password.');
                                    }
                                } else {
                                    alert('It\'s too short password. Sorry.');
                                }
                            } else {
                                alert('Wrong password.')
                            }
                        } else {
                            alert('Canceled.')
                        }
                    } else {
                        alert('You have failed the change.')
                    }
                } else {
                    alert('I don\'t know you')
                }

            } else {
                alert('Canceled.')
            }
        }
    } else {
        alert('I don\'t know any emails having name length less than 5 symbols.');
    }
} else {
    alert('Canceled.')
}