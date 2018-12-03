document.addEventListener('DOMContentLoaded', function () {
    M.FloatingActionButton.init(document.querySelectorAll('.fixed-action-btn'));
    M.TapTarget.init(document.querySelector('.tap-target')).open()
});
