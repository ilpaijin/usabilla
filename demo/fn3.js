(function() {
    var d = window.parent.document;

    function e(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent("on" + b, c)
    }
    window.usabilla_live = window.usabilla_live || {};
    window.usabilla_live.onEvent = e;
    window.usabilla_live.stopEvent = function(a, b, c) {
        a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent("on" + b, c)
    };
    window.usabilla_live.triggerEvent = function(a, b) {
        if (d.createEventObject) a.fireEvent("on" + b, d.createEventObject());
        else {
            var c = d.createEvent("HTMLEvents");
            c.initEvent(b, !0, !0);
            a.dispatchEvent(c)
        }
    };
    window.usabilla_live.onParentLoad = function(a) {
        "complete" == window.parent.document.readyState ? setTimeout(a, 0) : e(window.parent, "load", a)
    };
})();