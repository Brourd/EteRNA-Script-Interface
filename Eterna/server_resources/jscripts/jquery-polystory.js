// Generated by CoffeeScript 1.3.3
(function() {
  var JQUERY_HANDLER_COUNTER;

  JQUERY_HANDLER_COUNTER = 0;

  $.fn.exists = function() {
    return (this.length != null) && this.length !== 0;
  };

  $.fn.is_visible = function() {
    var el;
    if (el = this[0]) {
      return el.offsetWidth * el.offsetHeight > 0;
    } else {
      return false;
    }
  };

  $.fn.set_builder = function(builder) {
    return jQuery.data(this[0], "builder", builder);
  };

  $.fn.get_builder = function() {
    return jQuery.data(this[0], "builder");
  };

  $.fn.bind_window_event = function(ev, cb) {
    var ie_ver, key_event,
      _this = this;
    if (!cb) {
      return;
    }
    if (!(this.handler_unique_id_ != null)) {
      this.handler_unique_id_ = JQUERY_HANDLER_COUNTER;
      JQUERY_HANDLER_COUNTER++;
    }
    ev = ev.toLowerCase();
    key_event = (ev === "keydown") || (ev === "keypress") || (ev === "keyup");
    ev = ev + "." + this.handler_unique_id_;
    ie_ver = Utils.get_IE_version();
    if (key_event || ((ie_ver != null) && ie_ver <= 7)) {
      return $("body").bind(ev, function() {
        if (_this.is_visible()) {
          return cb.apply(_this, arguments);
        }
      });
    } else {
      return $(window).bind(ev, function() {
        if (_this.is_visible()) {
          return cb.apply(_this, arguments);
        }
      });
    }
  };

  $.fn.unbind_window_event = function(ev, cb) {
    var ie_ver, key_event;
    ev = ev.toLowerCase();
    key_event = (ev === "keydown") || (ev === "keypress") || (ev === "keyup");
    ev = ev + "." + this.handler_unique_id_;
    ie_ver = Utils.get_IE_version();
    if (key_event || ((ie_ver != null) && ie_ver <= 7)) {
      return $("body").unbind(ev);
    } else {
      return $(window).unbind(ev);
    }
  };

}).call(this);
