/*! (C) Cookie Banner v1.2.2 - MIT License - http://cookiebanner.eu/ */
!(function (e) {
  "use strict";
  function t(e, t) {
    var i = !1,
      o = !0,
      n = e.document,
      s = n.documentElement,
      r = n.addEventListener ? "addEventListener" : "attachEvent",
      a = n.addEventListener ? "removeEventListener" : "detachEvent",
      c = n.addEventListener ? "" : "on",
      l = function (o) {
        ("readystatechange" == o.type && "complete" != n.readyState) ||
          (("load" == o.type ? e : n)[a](c + o.type, l, !1),
          !i && (i = !0) && t.call(e, o.type || o));
      },
      p = function () {
        try {
          s.doScroll("left");
        } catch (e) {
          return void setTimeout(p, 50);
        }
        l("poll");
      };
    if ("complete" == n.readyState) t.call(e, "lazy");
    else {
      if (n.createEventObject && s.doScroll) {
        try {
          o = !e.frameElement;
        } catch (e) {}
        o && p();
      }
      n[r](c + "DOMContentLoaded", l, !1),
        n[r](c + "readystatechange", l, !1),
        e[r](c + "load", l, !1);
    }
  }
  var i = e,
    o = i.document,
    n = "cbinstance",
    s = {
      get: function (e) {
        return (
          decodeURIComponent(
            o.cookie.replace(
              new RegExp(
                "(?:(?:^|.*;)\\s*" +
                  encodeURIComponent(e).replace(/[-.+*]/g, "\\$&") +
                  "\\s*\\=\\s*([^;]*).*$)|^.*$"
              ),
              "$1"
            )
          ) || null
        );
      },
      set: function (e, t, i, n, s, r) {
        if (!e || /^(?:expires|max-age|path|domain|secure)$/i.test(e))
          return !1;
        var a = "";
        if (i)
          switch (i.constructor) {
            case Number:
              a =
                i === 1 / 0
                  ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT"
                  : "; max-age=" + i;
              break;
            case String:
              a = "; expires=" + i;
              break;
            case Date:
              a = "; expires=" + i.toUTCString();
          }
        return (
          (o.cookie =
            encodeURIComponent(e) +
            "=" +
            encodeURIComponent(t) +
            a +
            (s ? "; domain=" + s : "") +
            (n ? "; path=" + n : "") +
            (r ? "; secure" : "")),
          !0
        );
      },
      has: function (e) {
        return new RegExp(
          "(?:^|;\\s*)" +
            encodeURIComponent(e).replace(/[-.+*]/g, "\\$&") +
            "\\s*\\="
        ).test(o.cookie);
      },
      remove: function (e, t, i) {
        return (
          !(!e || !this.has(e)) &&
          ((o.cookie =
            encodeURIComponent(e) +
            "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" +
            (i ? "; domain=" + i : "") +
            (t ? "; path=" + t : "")),
          !0)
        );
      },
    },
    r = {
      merge: function () {
        var e,
          t = {},
          i = 0,
          o = arguments.length;
        if (0 === o) return t;
        for (; i < o; i++)
          for (e in arguments[i])
            Object.prototype.hasOwnProperty.call(arguments[i], e) &&
              (t[e] = arguments[i][e]);
        return t;
      },
      str2bool: function (e) {
        switch (((e = String(e)), e.toLowerCase())) {
          case "false":
          case "no":
          case "0":
          case "":
            return !1;
          default:
            return !0;
        }
      },
      fade_in: function (e) {
        e.style.opacity < 1 &&
          ((e.style.opacity = (parseFloat(e.style.opacity) + 0.05).toFixed(2)),
          i.setTimeout(function () {
            r.fade_in(e);
          }, 50));
      },
      get_data_attribs: function (e) {
        var t = {};
        if (Object.prototype.hasOwnProperty.call(e, "dataset")) t = e.dataset;
        else {
          var i,
            o = e.attributes;
          for (i in o)
            if (Object.prototype.hasOwnProperty.call(o, i)) {
              var n = o[i];
              if (/^data-/.test(n.name)) {
                var s = r.camelize(n.name.substr(5));
                t[s] = n.value;
              }
            }
        }
        return t;
      },
      normalize_keys: function (e) {
        var t = {};
        for (var i in e)
          if (Object.prototype.hasOwnProperty.call(e, i)) {
            var o = r.camelize(i);
            t[o] = e[o] ? e[o] : e[i];
          }
        return t;
      },
      camelize: function (e) {
        for (var t = "-", i = e.indexOf(t); i !== -1; ) {
          var o = i === e.length - 1,
            n = o ? "" : e[i + 1],
            s = n.toUpperCase(),
            r = o ? t : t + n;
          (e = e.replace(r, s)), (i = e.indexOf(t));
        }
        return e;
      },
      find_script_by_id: function (e) {
        for (
          var t = o.getElementsByTagName("script"), i = 0, n = t.length;
          i < n;
          i++
        )
          if (e === t[i].id) return t[i];
        return null;
      },
    },
    a = r.find_script_by_id("cookiebanner"),
    c = (e.Cookiebanner = function (e) {
      this.init(e);
    });
  (c.prototype = {
    cookiejar: s,
    init: function (t) {
      (this.inserted = !1), (this.closed = !1);
      var i =
          "We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.",
        o = "Learn more";
      if (
        ((this.default_options = {
          cookie: "cookiebanner-accepted",
          closeText: "Ok",
          closeStyle:
            "margin-left:25px;display: flex;align-items: center;color:black;height:100%;background-color:white;padding:10px;float:right",
          closePrecedes: !0,
          cookiePath: "/",
          cookieDomain: null,
          cookieSecure: !1,
          debug: !1,
          expires: 1 / 0,
          zindex: 255,
          mask: !1,
          maskOpacity: 0.5,
          maskBackground: "#000",
          height: "auto",
          minHeight: "21px",
          bg: "#000",
          fg: "#ddd",
          link: "#aaa",
          position: "bottom",
          message: i,
          linkmsg: o,
          moreinfo: "http://aboutcookies.org",
          moreinfoTarget: "_blank",
          moreinfoRel: "noopener noreferrer",
          moreinfoDecoration: "none",
          moreinfoFontWeight: "normal",
          moreinfoFontSize: null,
          effect: null,
          fontSize: "14px",
          fontFamily: "arial, sans-serif",
          instance: n,
          textAlign: "center",
          acceptOnScroll: !1,
          acceptOnClick: !1,
          acceptOnTimeout: null,
          acceptOnFirstVisit: !1,
        }),
        (this.options = this.default_options),
        (this.script_el = a),
        this.script_el)
      ) {
        var s = r.get_data_attribs(this.script_el);
        this.options = r.merge(this.options, s);
      }
      t &&
        ((t = r.normalize_keys(t)), (this.options = r.merge(this.options, t))),
        (n = this.options.instance),
        (this.options.zindex = parseInt(this.options.zindex, 10)),
        (this.options.mask = r.str2bool(this.options.mask)),
        (this.options.closePrecedes = r.str2bool(this.options.closePrecedes)),
        "string" == typeof this.options.expires &&
          "function" == typeof e[this.options.expires] &&
          (this.options.expires = e[this.options.expires]),
        "function" == typeof this.options.expires &&
          (this.options.expires = this.options.expires()),
        this.script_el && this.run();
    },
    log: function () {
      "undefined" != typeof console && console.log.apply(console, arguments);
    },
    run: function () {
      if (!this.agreed()) {
        var e = this;
        t(i, function () {
          e.insert();
        });
      }
    },
    build_viewport_mask: function () {
      var e = null;
      if (!0 === this.options.mask) {
        var t = this.options.maskOpacity,
          i = this.options.maskBackground,
          n =
            '<div id="cookiebanner-mask" style="position:fixed;top:0;left:0;width:100%;height:100%;background:' +
            i +
            ";zoom:1;filter:alpha(opacity=" +
            100 * t +
            ");opacity:" +
            t +
            ";z-index:" +
            this.options.zindex +
            ';"></div>',
          s = o.createElement("div");
        (s.innerHTML = n), (e = s.firstChild);
      }
      return e;
    },
    agree: function () {
      return (
        this.cookiejar.set(
          this.options.cookie,
          1,
          this.options.expires,
          this.options.cookiePath,
          "" !== this.options.cookieDomain ? this.options.cookieDomain : "",
          !!this.options.cookieSecure
        ),
        !0
      );
    },
    agreed: function () {
      return this.cookiejar.has(this.options.cookie);
    },
    close: function () {
      return (
        this.inserted &&
          (this.closed ||
            (this.element && this.element.parentNode.removeChild(this.element),
            this.element_mask &&
              this.element_mask.parentNode.removeChild(this.element_mask),
            (this.closed = !0))),
        this.closed
      );
    },
    agree_and_close: function () {
      return this.options.debug || this.agree(), this.close();
    },
    cleanup: function () {
      return this.close(), this.unload();
    },
    unload: function () {
      return (
        this.script_el && this.script_el.parentNode.removeChild(this.script_el),
        (e[n] = void 0),
        !0
      );
    },
    insert: function () {
      function e(e, t, i) {
        var o = e.addEventListener ? "addEventListener" : "attachEvent",
          n = e.addEventListener ? "" : "on";
        e[o](n + t, i, !1);
      }
      this.element_mask = this.build_viewport_mask();
      var t = this.options.zindex;
      this.element_mask && (t += 1);
      var i = o.createElement("div");
      (i.className = "cookiebanner"),
        (i.style.display = "flex"),
        (i.style.alignItems = "center"),
        (i.style.position = "fixed"),
        (i.style.left = 0),
        (i.style.right = 0),
        (i.style.height = this.options.height),
        (i.style.minHeight = this.options.minHeight),
        (i.style.zIndex = t),
        (i.style.background = this.options.bg),
        (i.style.color = this.options.fg),
        (i.style.lineHeight = i.style.minHeight),
        (i.style.padding = "25px"),
        (i.style.fontFamily = this.options.fontFamily),
        (i.style.fontSize = this.options.fontSize),
        (i.style.textAlign = this.options.textAlign),
        "top" === this.options.position
          ? (i.style.top = 0)
          : (i.style.bottom = 0);
      var s =
          '<div class="cookiebanner-close" style="' +
          this.options.closeStyle +
          '">' +
          this.options.closeText +
          "</div>",
        n =
          "<span>" +
          this.options.message +
          (this.options.linkmsg ? " <a>" + this.options.linkmsg + "</a>" : "") +
          "</span>";

      this.options.closePrecedes
        ? (i.innerHTML = n + s)
        : (i.innerHTML = s + n),
        (this.element = i);
      var a = i.getElementsByTagName("a")[0];
      (a.href = this.options.moreinfo),
        (a.target = this.options.moreinfoTarget),
        this.options.moreinfoRel &&
          "" !== this.options.moreinfoRel &&
          (a.rel = this.options.moreinfoRel),
        (a.style.textDecoration = this.options.moreinfoDecoration),
        (a.style.color = this.options.link),
        (a.style.fontWeight = this.options.moreinfoFontWeight),
        "" !== this.options.moreinfoFontSize &&
          (a.style.fontSize = this.options.moreinfoFontSize);
      var c = i.getElementsByTagName("div")[0];
      c.style.cursor = "pointer";
      var l = this;
      e(c, "click", function () {
        l.agree_and_close();
      }),
        this.element_mask &&
          (e(this.element_mask, "click", function () {
            l.agree_and_close();
          }),
          o.body.appendChild(this.element_mask)),
        this.options.acceptOnScroll &&
          e(window, "scroll", function () {
            l.agree_and_close();
          }),
        this.options.acceptOnClick &&
          e(window, "click", function () {
            l.agree_and_close();
          }),
        this.options.acceptOnTimeout &&
          !isNaN(parseFloat(this.options.acceptOnTimeout)) &&
          isFinite(this.options.acceptOnTimeout) &&
          setTimeout(function () {
            l.agree_and_close();
          }, this.options.acceptOnTimeout),
        this.options.acceptOnFirstVisit && l.agree(),
        o.body.appendChild(this.element),
        (this.inserted = !0),
        "fade" === this.options.effect
          ? ((this.element.style.opacity = 0), r.fade_in(this.element))
          : (this.element.style.opacity = 1);
    },
  }),
    a && (e[n] || (e[n] = new c()));
})(window);
