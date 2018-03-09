if(window.location.href.indexOf('https://app.cyfe.com/login') > -1) {
    document.addEventListener('DOMContentLoaded', function() {
        $(document).ready(function() {
            const settings = require('electron').remote.require('electron-settings');
            if (!settings.get('user_email')) {
                alert("No email address configured, unable to automatically login");
                return;
            }
            if (!settings.get('user_pass')) {
                alert("No password configured, unable to automatically login");
                return;
            }
            $('#email').val(settings.get('user_email'));
            $('#password').val(settings.get('user_pass'));
            $('[name="form_validate_login_submit"]').trigger('click');
        });
    });
}
