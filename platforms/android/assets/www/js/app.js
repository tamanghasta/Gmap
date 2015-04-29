/**
 * Created by hasta on 29/04/15.
 */
// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    /* ---------------------------------- Local Variables ---------------------------------- */


    /* --------------------------------- Event Registration -------------------------------- */
    // $('.search-key').on('keyup', findByName);
//    $('.help-btn').on('click', function() {
//        alert("Employee Directory v3.4");
//    });
    document.addEventListener('deviceready', function () {

        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
                    message,    // message
                    null,       // callback
                    "Workshop", // title
                    'OK'        // buttonName
                );
            };
        }
    }, false);

    /* ---------------------------------- Local Functions ---------------------------------- */



}());