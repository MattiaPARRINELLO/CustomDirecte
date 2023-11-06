/**
 * Minified by jsDelivr using Terser v5.15.0.
 * Original file: /npm/darkreader@4.9.58/darkreader.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(((e = "undefined" != typeof globalThis ? globalThis : e || self).DarkReader = {}));
})(this, function (e) {
  "use strict";
  var t,
    r = function () {
      return (
        (r =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++) for (var a in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
            return e;
          }),
        r.apply(this, arguments)
      );
    };

  function n(e, t, r, n) {
    return new (r || (r = Promise))(function (a, o) {
      function i(e) {
        try {
          c(n.next(e));
        } catch (e) {
          o(e);
        }
      }

      function u(e) {
        try {
          c(n.throw(e));
        } catch (e) {
          o(e);
        }
      }

      function c(e) {
        var t;
        e.done
          ? a(e.value)
          : ((t = e.value),
            t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                })).then(i, u);
      }
      c((n = n.apply(e, t || [])).next());
    });
  }

  function a(e, t) {
    var r,
      n,
      a,
      o,
      i = {
        label: 0,
        sent: function () {
          if (1 & a[0]) throw a[1];
          return a[1];
        },
        trys: [],
        ops: [],
      };
    return (
      (o = {
        next: u(0),
        throw: u(1),
        return: u(2),
      }),
      "function" == typeof Symbol &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );

    function u(o) {
      return function (u) {
        return (function (o) {
          if (r) throw new TypeError("Generator is already executing.");
          for (; i; )
            try {
              if (((r = 1), n && (a = 2 & o[0] ? n.return : o[0] ? n.throw || ((a = n.return) && a.call(n), 0) : n.next) && !(a = a.call(n, o[1])).done)) return a;
              switch (((n = 0), a && (o = [2 & o[0], a.value]), o[0])) {
                case 0:
                case 1:
                  a = o;
                  break;
                case 4:
                  return (
                    i.label++,
                    {
                      value: o[1],
                      done: !1,
                    }
                  );
                case 5:
                  i.label++, (n = o[1]), (o = [0]);
                  continue;
                case 7:
                  (o = i.ops.pop()), i.trys.pop();
                  continue;
                default:
                  if (!((a = i.trys), (a = a.length > 0 && a[a.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
                    i = 0;
                    continue;
                  }
                  if (3 === o[0] && (!a || (o[1] > a[0] && o[1] < a[3]))) {
                    i.label = o[1];
                    break;
                  }
                  if (6 === o[0] && i.label < a[1]) {
                    (i.label = a[1]), (a = o);
                    break;
                  }
                  if (a && i.label < a[2]) {
                    (i.label = a[2]), i.ops.push(o);
                    break;
                  }
                  a[2] && i.ops.pop(), i.trys.pop();
                  continue;
              }
              o = t.call(e, i);
            } catch (e) {
              (o = [6, e]), (n = 0);
            } finally {
              r = a = 0;
            }
          if (5 & o[0]) throw o[1];
          return {
            value: o[0] ? o[1] : void 0,
            done: !0,
          };
        })([o, u]);
      };
    }
  }

  function o(e) {
    var t = "function" == typeof Symbol && Symbol.iterator,
      r = t && e[t],
      n = 0;
    if (r) return r.call(e);
    if (e && "number" == typeof e.length)
      return {
        next: function () {
          return (
            e && n >= e.length && (e = void 0),
            {
              value: e && e[n++],
              done: !e,
            }
          );
        },
      };
    throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }

  function i(e, t) {
    var r = "function" == typeof Symbol && e[Symbol.iterator];
    if (!r) return e;
    var n,
      a,
      o = r.call(e),
      i = [];
    try {
      for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; ) i.push(n.value);
    } catch (e) {
      a = {
        error: e,
      };
    } finally {
      try {
        n && !n.done && (r = o.return) && r.call(o);
      } finally {
        if (a) throw a.error;
      }
    }
    return i;
  }

  function u(e, t, r) {
    if (r || 2 === arguments.length) for (var n, a = 0, o = t.length; a < o; a++) (!n && a in t) || (n || (n = Array.prototype.slice.call(t, 0, a)), (n[a] = t[a]));
    return e.concat(n || Array.prototype.slice.call(t));
  }
  !(function (e) {
    (e.UI_GET_DATA = "ui-get-data"),
      (e.UI_SUBSCRIBE_TO_CHANGES = "ui-subscribe-to-changes"),
      (e.UI_UNSUBSCRIBE_FROM_CHANGES = "ui-unsubscribe-from-changes"),
      (e.UI_CHANGE_SETTINGS = "ui-change-settings"),
      (e.UI_SET_THEME = "ui-set-theme"),
      (e.UI_SET_SHORTCUT = "ui-set-shortcut"),
      (e.UI_TOGGLE_ACTIVE_TAB = "ui-toggle-active-tab"),
      (e.UI_MARK_NEWS_AS_READ = "ui-mark-news-as-read"),
      (e.UI_MARK_NEWS_AS_DISPLAYED = "ui-mark-news-as-displayed"),
      (e.UI_LOAD_CONFIG = "ui-load-config"),
      (e.UI_APPLY_DEV_DYNAMIC_THEME_FIXES = "ui-apply-dev-dynamic-theme-fixes"),
      (e.UI_RESET_DEV_DYNAMIC_THEME_FIXES = "ui-reset-dev-dynamic-theme-fixes"),
      (e.UI_APPLY_DEV_INVERSION_FIXES = "ui-apply-dev-inversion-fixes"),
      (e.UI_RESET_DEV_INVERSION_FIXES = "ui-reset-dev-inversion-fixes"),
      (e.UI_APPLY_DEV_STATIC_THEMES = "ui-apply-dev-static-themes"),
      (e.UI_RESET_DEV_STATIC_THEMES = "ui-reset-dev-static-themes"),
      (e.UI_SAVE_FILE = "ui-save-file"),
      (e.UI_REQUEST_EXPORT_CSS = "ui-request-export-css"),
      (e.UI_COLOR_SCHEME_CHANGE = "ui-color-scheme-change"),
      (e.BG_CHANGES = "bg-changes"),
      (e.BG_ADD_CSS_FILTER = "bg-add-css-filter"),
      (e.BG_ADD_STATIC_THEME = "bg-add-static-theme"),
      (e.BG_ADD_SVG_FILTER = "bg-add-svg-filter"),
      (e.BG_ADD_DYNAMIC_THEME = "bg-add-dynamic-theme"),
      (e.BG_EXPORT_CSS = "bg-export-css"),
      (e.BG_UNSUPPORTED_SENDER = "bg-unsupported-sender"),
      (e.BG_CLEAN_UP = "bg-clean-up"),
      (e.BG_RELOAD = "bg-reload"),
      (e.BG_FETCH_RESPONSE = "bg-fetch-response"),
      (e.BG_UI_UPDATE = "bg-ui-update"),
      (e.BG_CSS_UPDATE = "bg-css-update"),
      (e.CS_COLOR_SCHEME_CHANGE = "cs-color-scheme-change"),
      (e.CS_FRAME_CONNECT = "cs-frame-connect"),
      (e.CS_FRAME_FORGET = "cs-frame-forget"),
      (e.CS_FRAME_FREEZE = "cs-frame-freeze"),
      (e.CS_FRAME_RESUME = "cs-frame-resume"),
      (e.CS_EXPORT_CSS_RESPONSE = "cs-export-css-response"),
      (e.CS_FETCH = "cs-fetch"),
      (e.CS_DARK_THEME_DETECTED = "cs-dark-theme-detected"),
      (e.CS_DARK_THEME_NOT_DETECTED = "cs-dark-theme-not-detected"),
      (e.CS_LOG = "cs-log");
  })(t || (t = {}));
  var c = "undefined" != typeof navigator,
    s = c
      ? navigator.userAgentData && Array.isArray(navigator.userAgentData.brands)
        ? navigator.userAgentData.brands
            .map(function (e) {
              return "".concat(e.brand.toLowerCase(), " ").concat(e.version);
            })
            .join(" ")
        : navigator.userAgent.toLowerCase()
      : "some useragent",
    l = c ? (navigator.userAgentData && "string" == typeof navigator.userAgentData.platform ? navigator.userAgentData.platform.toLowerCase() : navigator.platform.toLowerCase()) : "some platform",
    d = s.includes("chrome") || s.includes("chromium"),
    f = s.includes("thunderbird"),
    h = s.includes("firefox") || s.includes("librewolf") || f;
  s.includes("vivaldi"), s.includes("yabrowser"), s.includes("opr") || s.includes("opera"), s.includes("edg");
  var p = s.includes("safari") && !d,
    v = l.startsWith("win"),
    m = l.startsWith("mac");
  c && navigator.userAgentData ? navigator.userAgentData.mobile : s.includes("mobile");
  var g,
    b = "function" == typeof ShadowRoot,
    y = "function" == typeof MediaQueryList && "function" == typeof MediaQueryList.prototype.addEventListener;
  (g = s.match(/chrom(?:e|ium)(?:\/| )([^ ]+)/)) && g[1] && g[1],
    (function () {
      var e = s.match(/(?:firefox|librewolf)(?:\/| )([^ ]+)/);
      e && e[1] && e[1];
    })();
  var S = (function () {
      try {
        return document.querySelector(":defined"), !0;
      } catch (e) {
        return !1;
      }
    })(),
    _ = (function () {
      if ("undefined" == typeof document) return !1;
      var e = document.createElement("div");
      return e.setAttribute("style", "color-scheme: dark"), e.style && "dark" === e.style.colorScheme;
    })();

  function k(e, t, r) {
    return n(this, void 0, void 0, function () {
      var n;
      return a(this, function (a) {
        switch (a.label) {
          case 0:
            return [
              4,
              fetch(e, {
                cache: "force-cache",
                credentials: "omit",
                referrer: r,
              }),
            ];
          case 1:
            if (((n = a.sent()), h && "text/css" === t && e.startsWith("moz-extension://") && e.endsWith(".css"))) return [2, n];
            if (t && !n.headers.get("Content-Type").startsWith(t)) throw new Error("Mime type mismatch when loading ".concat(e));
            if (!n.ok) throw new Error("Unable to load ".concat(e, " ").concat(n.status, " ").concat(n.statusText));
            return [2, n];
        }
      });
    });
  }

  function w(e, t) {
    return n(this, void 0, void 0, function () {
      return a(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, k(e, t)];
          case 1:
            return [4, E(r.sent())];
          case 2:
            return [2, r.sent()];
        }
      });
    });
  }

  function E(e) {
    return n(this, void 0, void 0, function () {
      var t;
      return a(this, function (r) {
        switch (r.label) {
          case 0:
            return [4, e.blob()];
          case 1:
            return (
              (t = r.sent()),
              [
                4,
                new Promise(function (e) {
                  var r = new FileReader();
                  (r.onloadend = function () {
                    return e(r.result);
                  }),
                    r.readAsDataURL(t);
                }),
              ]
            );
          case 2:
            return [2, r.sent()];
        }
      });
    });
  }
  var C = function (e) {
      return n(void 0, void 0, void 0, function () {
        return a(this, function (t) {
          return [2, Promise.reject(new Error(["Embedded Dark Reader cannot access a cross-origin resource", e, "Overview your URLs and CORS policies or use", "`DarkReader.setFetchMethod(fetch: (url) => Promise<Response>))`.", "See if using `DarkReader.setFetchMethod(window.fetch)`", "before `DarkReader.enable()` works."].join(" ")))];
        });
      });
    },
    x = C;

  function T(e) {
    return n(this, void 0, void 0, function () {
      return a(this, function (t) {
        switch (t.label) {
          case 0:
            return [4, x(e)];
          case 1:
            return [2, t.sent()];
        }
      });
    });
  }
  window.chrome || (window.chrome = {}), chrome.runtime || (chrome.runtime = {});
  var R,
    V,
    A = new Set();

  function M() {
    for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
    return n(this, void 0, void 0, function () {
      var r, n, o, i, u, c, s;
      return a(this, function (a) {
        switch (a.label) {
          case 0:
            if (!e[0] || e[0].type !== t.CS_FETCH) return [3, 8];
            (r = e[0].id), (a.label = 1);
          case 1:
            return a.trys.push([1, 7, , 8]), (n = e[0].data), (o = n.url), (i = n.responseType), [4, T(o)];
          case 2:
            return (u = a.sent()), "data-url" !== i ? [3, 4] : [4, E(u)];
          case 3:
            return (c = a.sent()), [3, 6];
          case 4:
            return [4, u.text()];
          case 5:
            (c = a.sent()), (a.label = 6);
          case 6:
            return (
              A.forEach(function (e) {
                return e({
                  type: t.BG_FETCH_RESPONSE,
                  data: c,
                  error: null,
                  id: r,
                });
              }),
              [3, 8]
            );
          case 7:
            return (
              (s = a.sent()),
              console.warn(s),
              A.forEach(function (e) {
                return e({
                  type: t.BG_FETCH_RESPONSE,
                  data: null,
                  error: s,
                  id: r,
                });
              }),
              [3, 8]
            );
          case 8:
            return [2];
        }
      });
    });
  }

  function L(e) {
    A.add(e);
  }
  if ("function" == typeof chrome.runtime.sendMessage) {
    var O = chrome.runtime.sendMessage;
    chrome.runtime.sendMessage = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      M.apply(void 0, u([], i(e), !1)), O.apply(chrome.runtime, e);
    };
  } else chrome.runtime.sendMessage = M;
  if ((chrome.runtime.onMessage || (chrome.runtime.onMessage = {}), "function" == typeof chrome.runtime.onMessage.addListener)) {
    var D = chrome.runtime.onMessage.addListener;
    chrome.runtime.onMessage.addListener = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      L(e[0]), D.apply(chrome.runtime.onMessage, e);
    };
  } else
    chrome.runtime.onMessage.addListener = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return L(e[0]);
    };
  !(function (e) {
    (e.cssFilter = "cssFilter"), (e.svgFilter = "svgFilter"), (e.staticTheme = "staticTheme"), (e.dynamicTheme = "dynamicTheme");
  })(R || (R = {})),
    (function (e) {
      (e.NONE = ""), (e.TIME = "time"), (e.SYSTEM = "system"), (e.LOCATION = "location");
    })(V || (V = {}));
  var P = {
      background: "#181a1b",
      text: "#e8e6e3",
    },
    I = {
      background: "#dcdad7",
      text: "#181a1b",
    },
    N = {
      mode: 1,
      brightness: 100,
      contrast: 100,
      grayscale: 0,
      sepia: 0,
      useFont: !1,
      fontFamily: m ? "Helvetica Neue" : v ? "Segoe UI" : "Open Sans",
      textStroke: 0,
      engine: R.dynamicTheme,
      stylesheet: "",
      darkSchemeBackgroundColor: P.background,
      darkSchemeTextColor: P.text,
      lightSchemeBackgroundColor: I.background,
      lightSchemeTextColor: I.text,
      scrollbarColor: m ? "" : "auto",
      selectionColor: "auto",
      styleSystemControls: !_,
      lightColorScheme: "Default",
      darkColorScheme: "Default",
      immediateModify: !1,
    };

  function F(e, t) {
    var r, n;
    if (
      (function (e) {
        return null != e.length;
      })(e)
    )
      for (var a = 0, i = e.length; a < i; a++) t(e[a]);
    else
      try {
        for (var u = o(e), c = u.next(); !c.done; c = u.next()) {
          t(c.value);
        }
      } catch (e) {
        r = {
          error: e,
        };
      } finally {
        try {
          c && !c.done && (n = u.return) && n.call(u);
        } finally {
          if (r) throw r.error;
        }
      }
  }

  function j(e, t) {
    F(t, function (t) {
      return e.push(t);
    });
  }

  function B(e) {
    var t,
      r = !1,
      n = null;
    return Object.assign(
      function () {
        for (var a = [], o = 0; o < arguments.length; o++) a[o] = arguments[o];
        (t = a),
          n
            ? (r = !0)
            : (e.apply(void 0, u([], i(t), !1)),
              (n = requestAnimationFrame(function () {
                (n = null), r && (e.apply(void 0, u([], i(t), !1)), (r = !1));
              })));
      },
      {
        cancel: function () {
          cancelAnimationFrame(n), (r = !1), (n = null);
        },
      }
    );
  }

  function q(e) {
    var t = 0;
    return e.seconds && (t += 1e3 * e.seconds), e.minutes && (t += 60 * e.minutes * 1e3), e.hours && (t += 60 * e.hours * 60 * 1e3), e.days && (t += 24 * e.days * 60 * 60 * 1e3), t;
  }

  function U(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }

  function W(e, t, r) {
    void 0 === r && (r = Function.prototype);
    var n = q({
        seconds: 2,
      }),
      a = q({
        seconds: 10,
      }),
      o = e.previousSibling,
      i = e.parentNode;
    if (!i) throw new Error("Unable to watch for node position: parent element not found");
    if ("prev-sibling" === t && !o) throw new Error("Unable to watch for node position: there is no previous sibling");
    var u = 0,
      c = null,
      s = null,
      l = B(function () {
        if (!s) {
          u++;
          var f = Date.now();
          if (null == c) c = f;
          else if (u >= 10) {
            if (f - c < a)
              return void (s = setTimeout(function () {
                (c = null), (u = 0), (s = null), l();
              }, n));
            (c = f), (u = 1);
          }
          if ("parent" === t && o && o.parentNode !== i) h();
          else {
            if ("prev-sibling" === t) {
              if (null == o.parentNode) return void h();
              o.parentNode !== i && p(o.parentNode);
            }
            i.insertBefore(e, o ? o.nextSibling : i.firstChild), d.takeRecords(), r && r();
          }
        }
      }),
      d = new MutationObserver(function () {
        (("parent" === t && e.parentNode !== i) || ("prev-sibling" === t && e.previousSibling !== o)) && l();
      }),
      f = function () {
        d.observe(i, {
          childList: !0,
        });
      },
      h = function () {
        clearTimeout(s), d.disconnect(), l.cancel();
      },
      p = function (e) {
        (i = e), h(), f();
      };
    return (
      f(),
      {
        run: f,
        stop: h,
        skip: function () {
          d.takeRecords();
        },
      }
    );
  }

  function G(e, t) {
    if (null != e)
      for (
        var r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: function (e) {
              return null == e.shadowRoot ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
            },
          }),
          n = e.shadowRoot ? r.currentNode : r.nextNode();
        null != n;
        n = r.nextNode()
      )
        n.classList.contains("surfingkeys_hints_host") || (t(n), G(n.shadowRoot, t));
  }
  V.NONE;
  var H = function () {
    return "complete" === document.readyState || "interactive" === document.readyState;
  };
  var $ = new Set();

  function z(e) {
    H() ? e() : $.add(e);
  }

  function Q(e) {
    $.delete(e);
  }

  function K() {
    return "complete" === document.readyState;
  }
  var Y = new Set();

  function X(e) {
    K() ? e() : Y.add(e);
  }
  if (!H()) {
    var Z = function () {
      H() &&
        ($.forEach(function (e) {
          return e();
        }),
        $.clear(),
        K() &&
          (document.removeEventListener("readystatechange", Z),
          Y.forEach(function (e) {
            return e();
          }),
          Y.clear()));
    };
    document.addEventListener("readystatechange", Z);
  }
  var J,
    ee = new Map(),
    te = new WeakMap();

  function re(e, t) {
    var r, n, a;
    if (ee.has(e)) (r = ee.get(e)), (n = te.get(r));
    else {
      var o = !1,
        i = !1;
      (r = new MutationObserver(function (t) {
        if (
          (function (e) {
            if (e.length > 1e3) return !0;
            for (var t = 0, r = 0; r < e.length; r++) if ((t += e[r].addedNodes.length) > 1e3) return !0;
            return !1;
          })(t)
        )
          !o || H()
            ? n.forEach(function (t) {
                return (0, t.onHugeMutations)(e);
              })
            : i ||
              (z(
                (a = function () {
                  return n.forEach(function (t) {
                    return (0, t.onHugeMutations)(e);
                  });
                })
              ),
              (i = !0)),
            (o = !0);
        else {
          var r = (function (e) {
            var t = new Set(),
              r = new Set(),
              n = new Set();
            e.forEach(function (e) {
              F(e.addedNodes, function (e) {
                e instanceof Element && e.isConnected && t.add(e);
              }),
                F(e.removedNodes, function (e) {
                  e instanceof Element && (e.isConnected ? (n.add(e), t.delete(e)) : r.add(e));
                });
            });
            var a = [],
              o = [];
            return (
              t.forEach(function (e) {
                t.has(e.parentElement) && a.push(e);
              }),
              r.forEach(function (e) {
                r.has(e.parentElement) && o.push(e);
              }),
              a.forEach(function (e) {
                return t.delete(e);
              }),
              o.forEach(function (e) {
                return r.delete(e);
              }),
              {
                additions: t,
                moves: n,
                deletions: r,
              }
            );
          })(t);
          n.forEach(function (e) {
            return (0, e.onMinorMutations)(r);
          });
        }
      })),
        r.observe(e, {
          childList: !0,
          subtree: !0,
        }),
        ee.set(e, r),
        (n = new Set()),
        te.set(r, n);
    }
    return (
      n.add(t),
      {
        disconnect: function () {
          n.delete(t), a && Q(a), 0 === n.size && (r.disconnect(), te.delete(r), ee.delete(e));
        },
      }
    );
  }
  var ne = new Map();

  function ae(e) {
    return J || (J = document.createElement("a")), (J.href = e), J.href;
  }

  function oe(e, t) {
    void 0 === t && (t = null);
    var r = "".concat(e).concat(t ? ";".concat(t) : "");
    if (ne.has(r)) return ne.get(r);
    if (t) {
      var n = new URL(e, ae(t));
      return ne.set(r, n), n;
    }
    var a = new URL(ae(e));
    return ne.set(e, a), a;
  }

  function ie(e, t) {
    if (t.match(/^data\\?\:/)) return t;
    if (/^\/\//.test(t)) return "".concat(location.protocol).concat(t);
    var r = oe(e);
    return oe(t, r.href).href;
  }

  function ue(e, t, r) {
    F(e, function (e) {
      if (e.selectorText) t(e);
      else if (e.href)
        try {
          ue(e.styleSheet.cssRules, t, r);
        } catch (e) {
          r && r();
        }
      else if (e.media) {
        var n = Array.from(e.media),
          a = n.some(function (e) {
            return e.startsWith("screen") || e.startsWith("all") || e.startsWith("(");
          }),
          o = n.some(function (e) {
            return e.startsWith("print") || e.startsWith("speech");
          });
        (!a && o) || ue(e.cssRules, t, r);
      } else e.conditionText && CSS.supports(e.conditionText) && ue(e.cssRules, t, r);
    });
  }
  var ce = ["background", "border", "border-color", "border-bottom", "border-left", "border-right", "border-top", "outline", "outline-color"],
    se = p
      ? ce.map(function (e) {
          return [e, new RegExp("".concat(e, ":\\s*(.*?)\\s*;"))];
        })
      : null;

  function le(e, t) {
    F(e, function (r) {
      var n = e.getPropertyValue(r).trim();
      n && t(r, n);
    });
    var r = e.cssText;
    r.includes("var(") &&
      (p
        ? se.forEach(function (e) {
            var n = i(e, 2),
              a = n[0],
              o = n[1],
              u = r.match(o);
            if (u && u[1]) {
              var c = u[1].trim();
              t(a, c);
            }
          })
        : ce.forEach(function (r) {
            var n = e.getPropertyValue(r);
            n && n.includes("var(") && t(r, n);
          }));
  }
  var de = /url\((('.*?')|(".*?")|([^\)]*?))\)/g,
    fe = /@import\s*(url\()?(('.+?')|(".+?")|([^\)]*?))\)? ?(screen)?;?/gi;

  function he(e) {
    return e
      .trim()
      .replace(/[\n\r\\]+/g, "")
      .replace(/^url\((.*)\)$/, "$1")
      .trim()
      .replace(/^"(.*)"$/, "$1")
      .replace(/^'(.*)'$/, "$1")
      .replace(/(?:\\(.))/g, "$1");
  }

  function pe(e) {
    var t = oe(e);
    return "".concat(t.origin).concat(t.pathname.replace(/\?.*$/, "").replace(/(\/)([^\/]+)$/i, "$1"));
  }
  var ve = /\/\*[\s\S]*?\*\//g;
  var me = /@font-face\s*{[^}]*}/g;

  function ge(e) {
    for (var t, r = [], n = [], a = 0, o = e.length; a < o; a++) {
      var c = e[a];
      if (c && " " !== c) {
        if (ye.has(c)) {
          for (var s = ye.get(c); n.length; ) {
            var l = ye.get(n[0]);
            if (!l) break;
            if (!s.lessOrEqualThan(l)) break;
            r.push(n.shift());
          }
          n.unshift(c);
        } else !t || ye.has(t) ? r.push(c) : (r[r.length - 1] += c);
        t = c;
      }
    }
    r.push.apply(r, u([], i(n), !1));
    var d = [];
    for (a = 0, o = r.length; a < o; a++) {
      if ((s = ye.get(r[a]))) {
        var f = d.splice(0, 2);
        d.push(s.exec(f[1], f[0]));
      } else d.unshift(parseFloat(r[a]));
    }
    return d[0];
  }
  var be = (function () {
      function e(e, t) {
        (this.precendce = e), (this.execMethod = t);
      }
      return (
        (e.prototype.exec = function (e, t) {
          return this.execMethod(e, t);
        }),
        (e.prototype.lessOrEqualThan = function (e) {
          return this.precendce <= e.precendce;
        }),
        e
      );
    })(),
    ye = new Map([
      [
        "+",
        new be(1, function (e, t) {
          return e + t;
        }),
      ],
      [
        "-",
        new be(1, function (e, t) {
          return e - t;
        }),
      ],
      [
        "*",
        new be(2, function (e, t) {
          return e * t;
        }),
      ],
      [
        "/",
        new be(2, function (e, t) {
          return e / t;
        }),
      ],
    ]);

  function Se(e, t, r) {
    void 0 === r && (r = 0);
    for (var n, a = []; (n = e.exec(t)); ) a.push(n[r]);
    return a;
  }

  function _e(e, t) {
    void 0 === t && (t = 0);
    for (var r = e.length, n = 0, a = -1, o = t; o < r; o++)
      if (0 === n) {
        if ((i = e.indexOf("(", o)) < 0) break;
        (a = i), n++, (o = i);
      } else {
        var i,
          u = e.indexOf(")", o);
        if (u < 0) break;
        if ((i = e.indexOf("(", o)) < 0 || u < i) {
          if (0 === --n)
            return {
              start: a,
              end: u + 1,
            };
          o = u;
        } else n++, (o = i);
      }
    return null;
  }
  var ke = new Map(),
    we = new Map();

  function Ee(e) {
    if (((e = e.trim()), we.has(e))) return we.get(e);
    e.includes("calc(") &&
      (e = (function (e) {
        var t = 0,
          r = function (t, r, n) {
            e = e.substring(0, t) + n + e.substring(r);
          };
        for (; -1 !== (t = e.indexOf("calc(")); ) {
          var n = _e(e, t);
          if (!n) break;
          var a = e.slice(n.start + 1, n.end - 1),
            o = a.includes("%");
          a = a.split("%").join("");
          var i = Math.round(ge(a));
          r(n.start - 4, n.end, i + (o ? "%" : ""));
        }
        return e;
      })(e));
    var t = (function (e) {
      var t = e.trim().toLowerCase();
      if (t.match(Ae))
        return (
          (r = i(Oe(t, De, Pe), 4)),
          (n = r[0]),
          (a = r[1]),
          (o = r[2]),
          (u = r[3]),
          {
            r: n,
            g: a,
            b: o,
            a: void 0 === u ? 1 : u,
          }
        );
      var r, n, a, o, u;
      if (t.match(Me))
        return (function (e) {
          var t = i(Oe(e, Ie, Ne), 4),
            r = t[0],
            n = t[1],
            a = t[2],
            o = t[3];
          return xe({
            h: r,
            s: n,
            l: a,
            a: void 0 === o ? 1 : o,
          });
        })(t);
      if (t.match(Le))
        return (function (e) {
          var t = e.substring(1);
          switch (t.length) {
            case 3:
            case 4:
              var r = i(
                [0, 1, 2].map(function (e) {
                  return parseInt("".concat(t[e]).concat(t[e]), 16);
                }),
                3
              );
              return {
                r: r[0],
                g: r[1],
                b: r[2],
                a: 3 === t.length ? 1 : parseInt("".concat(t[3]).concat(t[3]), 16) / 255,
              };
            case 6:
            case 8:
              var n = i(
                [0, 2, 4].map(function (e) {
                  return parseInt(t.substring(e, e + 2), 16);
                }),
                3
              );
              return {
                r: n[0],
                g: n[1],
                b: n[2],
                a: 6 === t.length ? 1 : parseInt(t.substring(6, 8), 16) / 255,
              };
          }
          return null;
        })(t);
      if (Fe.has(t))
        return (function (e) {
          var t = Fe.get(e);
          return {
            r: (t >> 16) & 255,
            g: (t >> 8) & 255,
            b: (t >> 0) & 255,
            a: 1,
          };
        })(t);
      if (je.has(t))
        return (function (e) {
          var t = je.get(e);
          return {
            r: (t >> 16) & 255,
            g: (t >> 8) & 255,
            b: (t >> 0) & 255,
            a: 1,
          };
        })(t);
      if ("transparent" === e)
        return {
          r: 0,
          g: 0,
          b: 0,
          a: 0,
        };
      return null;
    })(e);
    return t && we.set(e, t), t;
  }

  function Ce(e) {
    if (ke.has(e)) return ke.get(e);
    var t = Ee(e);
    if (!t) return null;
    var r = Te(t);
    return ke.set(e, r), r;
  }

  function xe(e) {
    var t = e.h,
      r = e.s,
      n = e.l,
      a = e.a,
      o = void 0 === a ? 1 : a;
    if (0 === r) {
      var u = i(
          [n, n, n].map(function (e) {
            return Math.round(255 * e);
          }),
          3
        ),
        c = u[0],
        s = u[1];
      return {
        r: c,
        g: u[2],
        b: s,
        a: o,
      };
    }
    var l = (1 - Math.abs(2 * n - 1)) * r,
      d = l * (1 - Math.abs(((t / 60) % 2) - 1)),
      f = n - l / 2,
      h = i(
        (t < 60 ? [l, d, 0] : t < 120 ? [d, l, 0] : t < 180 ? [0, l, d] : t < 240 ? [0, d, l] : t < 300 ? [d, 0, l] : [l, 0, d]).map(function (e) {
          return Math.round(255 * (e + f));
        }),
        3
      );
    return {
      r: h[0],
      g: h[1],
      b: h[2],
      a: o,
    };
  }

  function Te(e) {
    var t = e.r,
      r = e.g,
      n = e.b,
      a = e.a,
      o = void 0 === a ? 1 : a,
      i = t / 255,
      u = r / 255,
      c = n / 255,
      s = Math.max(i, u, c),
      l = Math.min(i, u, c),
      d = s - l,
      f = (s + l) / 2;
    if (0 === d)
      return {
        h: 0,
        s: 0,
        l: f,
        a: o,
      };
    var h = 60 * (s === i ? ((u - c) / d) % 6 : s === u ? (c - i) / d + 2 : (i - u) / d + 4);
    return (
      h < 0 && (h += 360),
      {
        h: h,
        s: d / (1 - Math.abs(2 * f - 1)),
        l: f,
        a: o,
      }
    );
  }

  function Re(e, t) {
    void 0 === t && (t = 0);
    var r = e.toFixed(t);
    if (0 === t) return r;
    var n = r.indexOf(".");
    if (n >= 0) {
      var a = r.match(/0+$/);
      if (a) return a.index === n + 1 ? r.substring(0, n) : r.substring(0, a.index);
    }
    return r;
  }

  function Ve(e) {
    var t = e.h,
      r = e.s,
      n = e.l,
      a = e.a;
    return null != a && a < 1
      ? "hsla("
          .concat(Re(t), ", ")
          .concat(Re(100 * r), "%, ")
          .concat(Re(100 * n), "%, ")
          .concat(Re(a, 2), ")")
      : "hsl("
          .concat(Re(t), ", ")
          .concat(Re(100 * r), "%, ")
          .concat(Re(100 * n), "%)");
  }
  var Ae = /^rgba?\([^\(\)]+\)$/,
    Me = /^hsla?\([^\(\)]+\)$/,
    Le = /^#[0-9a-f]+$/i;

  function Oe(e, t, r) {
    var n = (function (e) {
        var t = [],
          r = 0,
          n = !1,
          a = e.indexOf("(");
        e = e.substring(a + 1, e.length - 1);
        for (var o = 0; o < e.length; o++) {
          var i = e[o];
          (i >= "0" && i <= "9") || "." === i || "+" === i || "-" === i ? (n = !0) : !n || (" " !== i && "," !== i) ? n || (r = o + 1) : (t.push(e.substring(r, o)), (n = !1), (r = o + 1));
        }
        return n && t.push(e.substring(r, e.length)), t;
      })(e),
      a = Object.entries(r);
    return n
      .map(function (e) {
        return e.trim();
      })
      .map(function (e, r) {
        var n,
          o = a.find(function (t) {
            var r = i(t, 1)[0];
            return e.endsWith(r);
          });
        return (n = o ? (parseFloat(e.substring(0, e.length - o[0].length)) / o[1]) * t[r] : parseFloat(e)), t[r] > 1 ? Math.round(n) : n;
      });
  }
  var De = [255, 255, 255, 1],
    Pe = {
      "%": 100,
    };
  var Ie = [360, 1, 1, 1],
    Ne = {
      "%": 100,
      deg: 360,
      rad: 2 * Math.PI,
      turn: 1,
    };
  var Fe = new Map(
      Object.entries({
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgrey: 11119017,
        darkgreen: 25600,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        grey: 8421504,
        green: 32768,
        greenyellow: 11403055,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgrey: 13882323,
        lightgreen: 9498256,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074,
      })
    ),
    je = new Map(
      Object.entries({
        ActiveBorder: 3906044,
        ActiveCaption: 0,
        AppWorkspace: 11184810,
        Background: 6513614,
        ButtonFace: 16777215,
        ButtonHighlight: 15329769,
        ButtonShadow: 10461343,
        ButtonText: 0,
        CaptionText: 0,
        GrayText: 8355711,
        Highlight: 11720703,
        HighlightText: 0,
        InactiveBorder: 16777215,
        InactiveCaption: 16777215,
        InactiveCaptionText: 0,
        InfoBackground: 16514245,
        InfoText: 0,
        Menu: 16185078,
        MenuText: 16777215,
        Scrollbar: 11184810,
        ThreeDDarkShadow: 0,
        ThreeDFace: 12632256,
        ThreeDHighlight: 16777215,
        ThreeDLightShadow: 16777215,
        ThreeDShadow: 0,
        Window: 15527148,
        WindowFrame: 11184810,
        WindowText: 0,
        "-webkit-focus-ring-color": 15046400,
      }).map(function (e) {
        var t = i(e, 2),
          r = t[0],
          n = t[1];
        return [r.toLowerCase(), n];
      })
    );

  function Be(e, t, r) {
    return (0.2126 * e + 0.7152 * t + 0.0722 * r) / 255;
  }

  function qe(e, t, r, n, a) {
    return ((e - t) * (a - n)) / (r - t) + n;
  }

  function Ue(e, t, r) {
    return Math.min(r, Math.max(t, e));
  }

  function We(e, t) {
    for (var r = [], n = 0, a = e.length; n < a; n++) {
      r[n] = [];
      for (var o = 0, i = t[0].length; o < i; o++) {
        for (var u = 0, c = 0, s = e[0].length; c < s; c++) u += e[n][c] * t[c][o];
        r[n][o] = u;
      }
    }
    return r;
  }

  function Ge(e) {
    var t = He.identity();
    return 0 !== e.sepia && (t = We(t, He.sepia(e.sepia / 100))), 0 !== e.grayscale && (t = We(t, He.grayscale(e.grayscale / 100))), 100 !== e.contrast && (t = We(t, He.contrast(e.contrast / 100))), 100 !== e.brightness && (t = We(t, He.brightness(e.brightness / 100))), 1 === e.mode && (t = We(t, He.invertNHue())), t;
  }
  var He = {
    identity: function () {
      return [
        [1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1],
      ];
    },
    invertNHue: function () {
      return [
        [0.333, -0.667, -0.667, 0, 1],
        [-0.667, 0.333, -0.667, 0, 1],
        [-0.667, -0.667, 0.333, 0, 1],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1],
      ];
    },
    brightness: function (e) {
      return [
        [e, 0, 0, 0, 0],
        [0, e, 0, 0, 0],
        [0, 0, e, 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1],
      ];
    },
    contrast: function (e) {
      var t = (1 - e) / 2;
      return [
        [e, 0, 0, 0, t],
        [0, e, 0, 0, t],
        [0, 0, e, 0, t],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1],
      ];
    },
    sepia: function (e) {
      return [
        [0.393 + 0.607 * (1 - e), 0.769 - 0.769 * (1 - e), 0.189 - 0.189 * (1 - e), 0, 0],
        [0.349 - 0.349 * (1 - e), 0.686 + 0.314 * (1 - e), 0.168 - 0.168 * (1 - e), 0, 0],
        [0.272 - 0.272 * (1 - e), 0.534 - 0.534 * (1 - e), 0.131 + 0.869 * (1 - e), 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1],
      ];
    },
    grayscale: function (e) {
      return [
        [0.2126 + 0.7874 * (1 - e), 0.7152 - 0.7152 * (1 - e), 0.0722 - 0.0722 * (1 - e), 0, 0],
        [0.2126 - 0.2126 * (1 - e), 0.7152 + 0.2848 * (1 - e), 0.0722 - 0.0722 * (1 - e), 0, 0],
        [0.2126 - 0.2126 * (1 - e), 0.7152 - 0.7152 * (1 - e), 0.0722 + 0.9278 * (1 - e), 0, 0],
        [0, 0, 0, 1, 0],
        [0, 0, 0, 0, 1],
      ];
    },
  };

  function $e(e) {
    return e[1 === e.mode ? "darkSchemeBackgroundColor" : "lightSchemeBackgroundColor"];
  }

  function ze(e) {
    return e[1 === e.mode ? "darkSchemeTextColor" : "lightSchemeTextColor"];
  }
  var Qe = new Map();
  var Ke = ["r", "g", "b", "a"],
    Ye = ["mode", "brightness", "contrast", "grayscale", "sepia", "darkSchemeBackgroundColor", "darkSchemeTextColor", "lightSchemeBackgroundColor", "lightSchemeTextColor"];

  function Xe(e, t, r, n, a) {
    var o;
    Qe.has(r) ? (o = Qe.get(r)) : ((o = new Map()), Qe.set(r, o));
    var u = (function (e, t) {
      var r = "";
      return (
        Ke.forEach(function (t) {
          r += "".concat(e[t], ";");
        }),
        Ye.forEach(function (e) {
          r += "".concat(t[e], ";");
        }),
        r
      );
    })(e, t);
    if (o.has(u)) return o.get(u);
    var c = xe(r(Te(e), null == n ? null : Ce(n), null == a ? null : Ce(a))),
      s = c.r,
      l = c.g,
      d = c.b,
      f = c.a,
      h = i(
        (function (e, t) {
          var r = i(e, 3),
            n = We(t, [[r[0] / 255], [r[1] / 255], [r[2] / 255], [1], [1]]);
          return [0, 1, 2].map(function (e) {
            return Ue(Math.round(255 * n[e][0]), 0, 255);
          });
        })([s, l, d], Ge(t)),
        3
      ),
      p = h[0],
      v = h[1],
      m = h[2],
      g =
        1 === f
          ? (function (e) {
              var t = e.r,
                r = e.g,
                n = e.b,
                a = e.a;
              return "#".concat(
                (null != a && a < 1 ? [t, r, n, Math.round(255 * a)] : [t, r, n])
                  .map(function (e) {
                    return "".concat(e < 16 ? "0" : "").concat(e.toString(16));
                  })
                  .join("")
              );
            })({
              r: p,
              g: v,
              b: m,
            })
          : (function (e) {
              var t = e.r,
                r = e.g,
                n = e.b,
                a = e.a;
              return null != a && a < 1 ? "rgba(".concat(Re(t), ", ").concat(Re(r), ", ").concat(Re(n), ", ").concat(Re(a, 2), ")") : "rgb(".concat(Re(t), ", ").concat(Re(r), ", ").concat(Re(n), ")");
            })({
              r: p,
              g: v,
              b: m,
              a: f,
            });
    return o.set(u, g), g;
  }

  function Ze(e) {
    return e;
  }

  function Je(e, t) {
    var r = $e(t);
    return Xe(e, t, et, ze(t), r);
  }

  function et(e, t, r) {
    var n,
      a = e.h,
      o = e.s,
      i = e.l,
      u = e.a,
      c = i < 0.5;
    c ? (n = i < 0.2 || o < 0.12) : (n = o < 0.24 || (i > 0.8 && a > 200 && a < 280));
    var s = a,
      l = i;
    return (
      n && (c ? ((s = t.h), (l = t.s)) : ((s = r.h), (l = r.s))),
      {
        h: s,
        s: l,
        l: qe(i, 0, 1, t.l, r.l),
        a: u,
      }
    );
  }

  function tt(e, t) {
    var r = e.h,
      n = e.s,
      a = e.l,
      o = e.a,
      i = n < 0.12 || (a > 0.8 && r > 200 && r < 280);
    if (a < 0.5) {
      var u = qe(a, 0, 0.5, 0, 0.4);
      return i
        ? {
            h: t.h,
            s: t.s,
            l: u,
            a: o,
          }
        : {
            h: r,
            s: n,
            l: u,
            a: o,
          };
    }
    var c = qe(a, 0.5, 1, 0.4, t.l);
    if (i)
      return {
        h: t.h,
        s: t.s,
        l: c,
        a: o,
      };
    var s = r;
    r > 60 && r < 180 && (s = r > 120 ? qe(r, 120, 180, 135, 180) : qe(r, 60, 120, 60, 105));
    return (
      s > 40 && s < 80 && (c *= 0.75),
      {
        h: s,
        s: n,
        l: c,
        a: o,
      }
    );
  }

  function rt(e, t) {
    if (0 === t.mode) return Je(e, t);
    var n = $e(t);
    return Xe(
      e,
      r(r({}, t), {
        mode: 0,
      }),
      tt,
      n
    );
  }
  var nt,
    at = 0.55;

  function ot(e) {
    return qe(e, 205, 245, 205, 220);
  }

  function it(e, t) {
    var r = e.h,
      n = e.s,
      a = e.l,
      o = e.a,
      i = a < 0.2 || n < 0.24,
      u = !i && r > 205 && r < 245;
    if (a > 0.5) {
      var c = qe(a, 0.5, 1, at, t.l);
      if (i)
        return {
          h: t.h,
          s: t.s,
          l: c,
          a: o,
        };
      var s = r;
      return (
        u && (s = ot(r)),
        {
          h: s,
          s: n,
          l: c,
          a: o,
        }
      );
    }
    if (i)
      return {
        h: t.h,
        s: t.s,
        l: qe(a, 0, 0.5, t.l, at),
        a: o,
      };
    var l,
      d = r;
    return (
      u ? ((d = ot(r)), (l = qe(a, 0, 0.5, t.l, Math.min(1, 0.6000000000000001)))) : (l = qe(a, 0, 0.5, t.l, at)),
      {
        h: d,
        s: n,
        l: l,
        a: o,
      }
    );
  }

  function ut(e, t) {
    if (0 === t.mode) return Je(e, t);
    var n = ze(t);
    return Xe(
      e,
      r(r({}, t), {
        mode: 0,
      }),
      it,
      n
    );
  }

  function ct(e, t, r) {
    var n = e.h,
      a = e.s,
      o = e.l,
      i = e.a,
      u = n,
      c = a;
    return (
      (o < 0.2 || a < 0.24) && (o < 0.5 ? ((u = t.h), (c = t.s)) : ((u = r.h), (c = r.s))),
      {
        h: u,
        s: c,
        l: qe(o, 0, 1, 0.5, 0.2),
        a: i,
      }
    );
  }

  function st(e, t) {
    if (0 === t.mode) return Je(e, t);
    var n = ze(t),
      a = $e(t);
    return Xe(
      e,
      r(r({}, t), {
        mode: 0,
      }),
      ct,
      n,
      a
    );
  }

  function lt(e, t) {
    return rt(e, t);
  }

  function dt(e) {
    var t = [];
    return e.mode === nt.dark && t.push("invert(100%) hue-rotate(180deg)"), 100 !== e.brightness && t.push("brightness(".concat(e.brightness, "%)")), 100 !== e.contrast && t.push("contrast(".concat(e.contrast, "%)")), 0 !== e.grayscale && t.push("grayscale(".concat(e.grayscale, "%)")), 0 !== e.sepia && t.push("sepia(".concat(e.sepia, "%)")), 0 === t.length ? null : t.join(" ");
  }
  !(function (e) {
    (e[(e.light = 0)] = "light"), (e[(e.dark = 1)] = "dark");
  })(nt || (nt = {}));
  var ft = 0,
    ht = new Map(),
    pt = new Map();

  function vt(e) {
    return n(this, void 0, void 0, function () {
      return a(this, function (r) {
        return [
          2,
          new Promise(function (r, n) {
            var a = ++ft;
            ht.set(a, r),
              pt.set(a, n),
              chrome.runtime.sendMessage({
                type: t.CS_FETCH,
                data: e,
                id: a,
              });
          }),
        ];
      });
    });
  }
  chrome.runtime.onMessage.addListener(function (e) {
    var r = e.type,
      n = e.data,
      a = e.error,
      o = e.id;
    if (r === t.BG_FETCH_RESPONSE) {
      var i = ht.get(o),
        u = pt.get(o);
      ht.delete(o), pt.delete(o), a ? u && u(a) : i && i(n);
    }
  });
  var mt = new ((function () {
    function e() {
      (this.queue = []), (this.timerId = null), (this.frameDuration = 1e3 / 60);
    }
    return (
      (e.prototype.addToQueue = function (e) {
        this.queue.push(e), this.startQueue();
      }),
      (e.prototype.stopQueue = function () {
        null !== this.timerId && (cancelAnimationFrame(this.timerId), (this.timerId = null)), (this.queue = []);
      }),
      (e.prototype.startQueue = function () {
        var e = this;
        this.timerId ||
          (this.timerId = requestAnimationFrame(function () {
            e.timerId = null;
            for (var t, r = Date.now(); (t = e.queue.shift()); )
              if ((t(), Date.now() - r >= e.frameDuration)) {
                e.startQueue();
                break;
              }
          }));
      }),
      e
    );
  })())();

  function gt(e) {
    return n(this, void 0, void 0, function () {
      var t = this;
      return a(this, function (o) {
        return [
          2,
          new Promise(function (o, i) {
            return n(t, void 0, void 0, function () {
              var t, n, u, c;
              return a(this, function (a) {
                switch (a.label) {
                  case 0:
                    return e.startsWith("data:") ? ((t = e), [3, 4]) : [3, 1];
                  case 1:
                    return a.trys.push([1, 3, , 4]), [4, bt(e)];
                  case 2:
                    return (t = a.sent()), [3, 4];
                  case 3:
                    return (n = a.sent()), i(n), [2];
                  case 4:
                    return a.trys.push([4, 6, , 7]), [4, yt(t)];
                  case 5:
                    return (
                      (u = a.sent()),
                      mt.addToQueue(function () {
                        o(
                          r(
                            {
                              src: e,
                              dataURL: t,
                              width: u.naturalWidth,
                              height: u.naturalHeight,
                            },
                            (function (e) {
                              St || ((t = kt), (r = kt), ((St = document.createElement("canvas")).width = t), (St.height = r), ((_t = St.getContext("2d")).imageSmoothingEnabled = !1));
                              var t, r;
                              var n = e.naturalWidth,
                                a = e.naturalHeight;
                              if (0 === a || 0 === n) return "logWarn(Image is empty ".concat(e.currentSrc, ")"), null;
                              if (n * a * 4 > wt)
                                return {
                                  isDark: !1,
                                  isLight: !1,
                                  isTransparent: !1,
                                  isLarge: !1,
                                  isTooLarge: !0,
                                };
                              var o = n * a,
                                i = Math.min(1, Math.sqrt(kt / o)),
                                u = Math.ceil(n * i),
                                c = Math.ceil(a * i);
                              _t.clearRect(0, 0, u, c), _t.drawImage(e, 0, 0, n, a, 0, 0, u, c);
                              var s,
                                l,
                                d,
                                f,
                                h,
                                p,
                                v,
                                m = _t.getImageData(0, 0, u, c).data,
                                g = 0.05,
                                b = 0.4,
                                y = 0.7,
                                S = 0,
                                _ = 0,
                                k = 0;
                              for (d = 0; d < c; d++) for (l = 0; l < u; l++) (f = m[(s = 4 * (d * u + l)) + 0]), (h = m[s + 1]), (p = m[s + 2]), m[s + 3] / 255 < g ? S++ : ((v = Be(f, h, p)) < b && _++, v > y && k++);
                              var w = u * c,
                                E = w - S;
                              return {
                                isDark: _ / E >= 0.7,
                                isLight: k / E >= 0.7,
                                isTransparent: S / w >= 0.1,
                                isLarge: o >= 48e4,
                                isTooLarge: !1,
                              };
                            })(u)
                          )
                        );
                      }),
                      [3, 7]
                    );
                  case 6:
                    return (c = a.sent()), i(c), [3, 7];
                  case 7:
                    return [2];
                }
              });
            });
          }),
        ];
      });
    });
  }

  function bt(e) {
    return n(this, void 0, void 0, function () {
      return a(this, function (t) {
        switch (t.label) {
          case 0:
            return new URL(e).origin !== location.origin ? [3, 2] : [4, w(e)];
          case 1:
          case 3:
            return [2, t.sent()];
          case 2:
            return [
              4,
              vt({
                url: e,
                responseType: "data-url",
              }),
            ];
        }
      });
    });
  }

  function yt(e) {
    return n(this, void 0, void 0, function () {
      return a(this, function (t) {
        return [
          2,
          new Promise(function (t, r) {
            var n = new Image();
            (n.onload = function () {
              return t(n);
            }),
              (n.onerror = function () {
                return r("Unable to load image ".concat(e));
              }),
              (n.src = e);
          }),
        ];
      });
    });
  }
  var St,
    _t,
    kt = 1024;
  var wt = 5242880;

  function Et(e, t) {
    var r = e.dataURL,
      n = e.width,
      a = e.height,
      o = Ge(t)
        .slice(0, 4)
        .map(function (e) {
          return e
            .map(function (e) {
              return e.toFixed(3);
            })
            .join(" ");
        })
        .join(" "),
      i = [
        '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'.concat(n, '" height="').concat(a, '">'),
        "<defs>",
        '<filter id="darkreader-image-filter">',
        '<feColorMatrix type="matrix" values="'.concat(o, '" />'),
        "</filter>",
        "</defs>",
        '<image width="'.concat(n, '" height="').concat(a, '" filter="url(#darkreader-image-filter)" xlink:href="').concat(r, '" />'),
        "</svg>",
      ].join("");
    return "data:image/svg+xml;base64,".concat(btoa(i));
  }

  function Ct() {
    mt && mt.stopQueue(), (St = null), (_t = null);
  }
  var xt = "gradient".length,
    Tt = "conic-",
    Rt = Tt.length,
    Vt = "radial-",
    At = "linear-";

  function Mt(e, t) {
    return Boolean(e && e.getPropertyPriority(t));
  }

  function Lt(e, t, r, n, a, o) {
    if (e.startsWith("--")) {
      var i = (function (e, t, r, n, a, o) {
        return e.getModifierForVariable({
          varName: t,
          sourceValue: r,
          rule: n,
          ignoredImgSelectors: a,
          isCancelled: o,
        });
      })(n, e, t, r, a, o);
      if (i)
        return {
          property: e,
          value: i,
          important: Mt(r.style, e),
          sourceValue: t,
        };
    } else if (t.includes("var(")) {
      i = (function (e, t, r) {
        return e.getModifierForVarDependant(t, r);
      })(n, e, t);
      if (i)
        return {
          property: e,
          value: i,
          important: Mt(r.style, e),
          sourceValue: t,
        };
    } else {
      if ("color-scheme" === e) return null;
      if ((e.includes("color") && "-webkit-print-color-adjust" !== e) || "fill" === e || "stroke" === e || "stop-color" === e) {
        i = (function (e, t, r) {
          if (Nt.has(t.toLowerCase())) return t;
          var n = Ee(t);
          if (!n) return null;
          if (e.includes("background"))
            return (r.style.webkitMaskImage && "none" !== r.style.webkitMaskImage) || (r.style.webkitMask && !r.style.webkitMask.startsWith("none")) || (r.style.mask && "none" !== r.style.mask) || (r.style.getPropertyValue("mask-image") && "none" !== r.style.getPropertyValue("mask-image"))
              ? function (e) {
                  return ut(n, e);
                }
              : function (e) {
                  return rt(n, e);
                };
          if (e.includes("border") || e.includes("outline"))
            return function (e) {
              return st(n, e);
            };
          return function (e) {
            return ut(n, e);
          };
        })(e, t, r);
        if (i)
          return {
            property: e,
            value: i,
            important: Mt(r.style, e),
            sourceValue: t,
          };
      } else if ("background-image" === e || "list-style-image" === e) {
        if ((i = Bt(t, r, a, o)))
          return {
            property: e,
            value: i,
            important: Mt(r.style, e),
            sourceValue: t,
          };
      } else if (e.includes("shadow")) {
        i = (function (e) {
          var t = qt(e);
          if (!t) return null;
          return function (e) {
            return t(e).result;
          };
        })(t);
        if (i)
          return {
            property: e,
            value: i,
            important: Mt(r.style, e),
            sourceValue: t,
          };
      }
    }
    return null;
  }

  function Ot() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return e.filter(Boolean).join(", ");
  }

  function Dt(e, t, n) {
    var a = [];
    t ||
      (a.push("html {"),
      a.push(
        "    background-color: ".concat(
          rt(
            {
              r: 255,
              g: 255,
              b: 255,
            },
            e
          ),
          " !important;"
        )
      ),
      a.push("}")),
      _ && (a.push("html {"), a.push("    color-scheme: ".concat(1 === e.mode ? "dark" : "dark light", " !important;")), a.push("}"));
    var o = Ot(t ? "" : "html, body", n ? "input, textarea, select, button, dialog" : "");
    return (
      o &&
        (a.push("".concat(o, " {")),
        a.push(
          "    background-color: ".concat(
            rt(
              {
                r: 255,
                g: 255,
                b: 255,
              },
              e
            ),
            ";"
          )
        ),
        a.push("}")),
      a.push("".concat(Ot("html, body", n ? "input, textarea, select, button" : ""), " {")),
      a.push(
        "    border-color: ".concat(
          st(
            {
              r: 76,
              g: 76,
              b: 76,
            },
            e
          ),
          ";"
        )
      ),
      a.push(
        "    color: ".concat(
          ut(
            {
              r: 0,
              g: 0,
              b: 0,
            },
            e
          ),
          ";"
        )
      ),
      a.push("}"),
      a.push("a {"),
      a.push(
        "    color: ".concat(
          ut(
            {
              r: 0,
              g: 64,
              b: 255,
            },
            e
          ),
          ";"
        )
      ),
      a.push("}"),
      a.push("table {"),
      a.push(
        "    border-color: ".concat(
          st(
            {
              r: 128,
              g: 128,
              b: 128,
            },
            e
          ),
          ";"
        )
      ),
      a.push("}"),
      a.push("::placeholder {"),
      a.push(
        "    color: ".concat(
          ut(
            {
              r: 169,
              g: 169,
              b: 169,
            },
            e
          ),
          ";"
        )
      ),
      a.push("}"),
      a.push("input:-webkit-autofill,"),
      a.push("textarea:-webkit-autofill,"),
      a.push("select:-webkit-autofill {"),
      a.push(
        "    background-color: ".concat(
          rt(
            {
              r: 250,
              g: 255,
              b: 189,
            },
            e
          ),
          " !important;"
        )
      ),
      a.push(
        "    color: ".concat(
          ut(
            {
              r: 0,
              g: 0,
              b: 0,
            },
            e
          ),
          " !important;"
        )
      ),
      a.push("}"),
      e.scrollbarColor &&
        a.push(
          (function (e) {
            var t,
              n,
              a,
              o,
              i,
              u,
              c = [];
            if ("auto" === e.scrollbarColor)
              (t = rt(
                {
                  r: 241,
                  g: 241,
                  b: 241,
                },
                e
              )),
                (n = ut(
                  {
                    r: 96,
                    g: 96,
                    b: 96,
                  },
                  e
                )),
                (a = rt(
                  {
                    r: 176,
                    g: 176,
                    b: 176,
                  },
                  e
                )),
                (o = rt(
                  {
                    r: 144,
                    g: 144,
                    b: 144,
                  },
                  e
                )),
                (i = rt(
                  {
                    r: 96,
                    g: 96,
                    b: 96,
                  },
                  e
                )),
                (u = rt(
                  {
                    r: 255,
                    g: 255,
                    b: 255,
                  },
                  e
                ));
            else {
              var s = Te(Ee(e.scrollbarColor)),
                l = s.l > 0.5,
                d = function (e) {
                  return r(r({}, s), {
                    l: Ue(s.l + e, 0, 1),
                  });
                },
                f = function (e) {
                  return r(r({}, s), {
                    l: Ue(s.l - e, 0, 1),
                  });
                };
              (t = Ve(f(0.4))), (n = Ve(l ? f(0.4) : d(0.4))), (a = Ve(s)), (o = Ve(d(0.1))), (i = Ve(d(0.2)));
            }
            c.push("::-webkit-scrollbar {"),
              c.push("    background-color: ".concat(t, ";")),
              c.push("    color: ".concat(n, ";")),
              c.push("}"),
              c.push("::-webkit-scrollbar-thumb {"),
              c.push("    background-color: ".concat(a, ";")),
              c.push("}"),
              c.push("::-webkit-scrollbar-thumb:hover {"),
              c.push("    background-color: ".concat(o, ";")),
              c.push("}"),
              c.push("::-webkit-scrollbar-thumb:active {"),
              c.push("    background-color: ".concat(i, ";")),
              c.push("}"),
              c.push("::-webkit-scrollbar-corner {"),
              c.push("    background-color: ".concat(u, ";")),
              c.push("}"),
              h && (c.push("* {"), c.push("    scrollbar-color: ".concat(a, " ").concat(t, ";")), c.push("}"));
            return c.join("\n");
          })(e)
        ),
      e.selectionColor &&
        a.push(
          (function (e) {
            var t = [],
              r = Pt(e),
              n = r.backgroundColorSelection,
              a = r.foregroundColorSelection;
            return (
              ["::selection", "::-moz-selection"].forEach(function (e) {
                t.push("".concat(e, " {")), t.push("    background-color: ".concat(n, " !important;")), t.push("    color: ".concat(a, " !important;")), t.push("}");
              }),
              t.join("\n")
            );
          })(e)
        ),
      a.join("\n")
    );
  }

  function Pt(e) {
    var t, n;
    if ("auto" === e.selectionColor)
      (t = rt(
        {
          r: 0,
          g: 96,
          b: 212,
        },
        r(r({}, e), {
          grayscale: 0,
        })
      )),
        (n = ut(
          {
            r: 255,
            g: 255,
            b: 255,
          },
          r(r({}, e), {
            grayscale: 0,
          })
        ));
    else {
      var a = Te(Ee(e.selectionColor));
      (t = e.selectionColor), (n = a.l < 0.5 ? "#FFF" : "#000");
    }
    return {
      backgroundColorSelection: t,
      foregroundColorSelection: n,
    };
  }

  function It(e, t) {
    var r = t.strict,
      n = [],
      a = ["microsoft.com", "docs.microsoft.com"].includes(location.hostname);
    return (
      n.push("html, body, ".concat(r ? "body :not(iframe)".concat(a ? ':not(div[style^="position:absolute;top:0;left:-"]' : "") : "body > :not(iframe)", " {")),
      n.push(
        "    background-color: ".concat(
          rt(
            {
              r: 255,
              g: 255,
              b: 255,
            },
            e
          ),
          " !important;"
        )
      ),
      n.push(
        "    border-color: ".concat(
          st(
            {
              r: 64,
              g: 64,
              b: 64,
            },
            e
          ),
          " !important;"
        )
      ),
      n.push(
        "    color: ".concat(
          ut(
            {
              r: 0,
              g: 0,
              b: 0,
            },
            e
          ),
          " !important;"
        )
      ),
      n.push("}"),
      n.join("\n")
    );
  }
  var Nt = new Set(["inherit", "transparent", "initial", "currentcolor", "none", "unset"]);
  var Ft = new Map(),
    jt = new Map();

  function Bt(e, t, o, i) {
    var u,
      c,
      s = this;
    try {
      var l = (function (e) {
          for (
            var t = [],
              r = 0,
              n = Tt.length,
              a = function () {
                var a;
                if (
                  ([At, Vt, Tt].find(function (t) {
                    if (r - t.length >= 0 && e.substring(r - t.length, r) === t) return "repeating" === e.slice(r - t.length - 10, r - t.length - 1) ? ((a = "repeating-".concat(t, "gradient")), !0) : "-webkit" === e.slice(r - t.length - 8, r - t.length - 1) ? ((a = "-webkit-".concat(t, "gradient")), !0) : ((a = "".concat(t, "gradient")), !0);
                  }),
                  !a)
                )
                  return "break";
                var o = _e(e, r + xt),
                  i = o.start,
                  u = o.end,
                  c = e.substring(i + 1, u - 1);
                (n = u + 1 + Rt),
                  t.push({
                    typeGradient: a,
                    match: c,
                    offset: a.length + 2,
                    index: r - a.length + xt,
                    hasComma: !0,
                  });
              };
            -1 !== (r = e.indexOf("gradient", n)) && "break" !== a();

          );
          return t.length && (t[t.length - 1].hasComma = !1), t;
        })(e),
        d = Se(de, e);
      if (0 === d.length && 0 === l.length) return e;
      var f = l
          .map(function (e) {
            return r(
              {
                type: "gradient",
              },
              e
            );
          })
          .concat(
            ((u = d),
            (c = 0),
            u.map(function (t) {
              var r = e.indexOf(t, c);
              return (
                (c = r + t.length),
                {
                  match: t,
                  index: r,
                }
              );
            })).map(function (e) {
              return r(
                {
                  type: "url",
                  offset: 0,
                },
                e
              );
            })
          )
          .sort(function (e, t) {
            return e.index > t.index ? 1 : -1;
          }),
        h = function (e, t) {
          var n,
            a = e.isDark,
            o = e.isLight,
            i = e.isTransparent,
            u = e.isLarge,
            c = e.isTooLarge,
            s = e.width;
          if (c) n = 'url("'.concat(e.src, '")');
          else if (a && i && 1 === t.mode && !u && s > 2) {
            "Inverting dark image ".concat(e.src);
            var l = Et(
              e,
              r(r({}, t), {
                sepia: Ue(t.sepia + 10, 0, 100),
              })
            );
            n = 'url("'.concat(l, '")');
          } else if (o && !i && 1 === t.mode)
            if (u) n = "none";
            else {
              "Dimming light image ".concat(e.src);
              var d = Et(e, t);
              n = 'url("'.concat(d, '")');
            }
          else if (0 === t.mode && o && !u) {
            "Applying filter to image ".concat(e.src);
            var f = Et(
              e,
              r(r({}, t), {
                brightness: Ue(t.brightness - 10, 5, 200),
                sepia: Ue(t.sepia + 10, 0, 100),
              })
            );
            n = 'url("'.concat(f, '")');
          } else n = null;
          return n;
        },
        p = [],
        v = 0,
        m = !1;
      return (
        f.forEach(function (r, u) {
          var c = r.type,
            l = r.match,
            d = r.index,
            g = r.typeGradient,
            b = r.hasComma,
            y = r.offset,
            S = d,
            _ = v,
            k = S + l.length + y;
          (v = k),
            _ !== S &&
              (m
                ? p.push(function () {
                    var t = e.substring(_, S);
                    return "," === t[0] && (t = t.substring(1)), t;
                  })
                : p.push(function () {
                    return e.substring(_, S);
                  })),
            (m = b || !1),
            "url" === c
              ? p.push(
                  (function (e) {
                    var r;
                    if (
                      (function (e, t) {
                        if (!e || 0 === t.length) return !1;
                        if (
                          t.some(function (e) {
                            return "*" === e;
                          })
                        )
                          return !0;
                        for (
                          var r = e.split(/,\s*/g),
                            n = function (e) {
                              var n = t[e];
                              if (
                                r.some(function (e) {
                                  return e === n;
                                })
                              )
                                return {
                                  value: !0,
                                };
                            },
                            a = 0;
                          a < t.length;
                          a++
                        ) {
                          var o = n(a);
                          if ("object" == typeof o) return o.value;
                        }
                        return !1;
                      })(t.selectorText, o)
                    )
                      return null;
                    var u = he(e),
                      c = 0 === u.length,
                      l = t.parentStyleSheet,
                      d = l && l.href ? pe(l.href) : (null === (r = l.ownerNode) || void 0 === r ? void 0 : r.baseURI) || location.origin;
                    u = ie(d, u);
                    var f = 'url("'.concat(u, '")');
                    return function (e) {
                      return n(s, void 0, void 0, function () {
                        var t, r;
                        return a(this, function (n) {
                          switch (n.label) {
                            case 0:
                              return c ? [2, "url('')"] : Ft.has(u) ? ((t = Ft.get(u)), [3, 7]) : [3, 1];
                            case 1:
                              return (
                                n.trys.push([1, 6, , 7]),
                                jt.has(u)
                                  ? ((r = jt.get(u)),
                                    [
                                      4,
                                      new Promise(function (e) {
                                        return r.push(e);
                                      }),
                                    ])
                                  : [3, 3]
                              );
                            case 2:
                              return (t = n.sent()) ? [3, 5] : [2, null];
                            case 3:
                              return jt.set(u, []), [4, gt(u)];
                            case 4:
                              (t = n.sent()),
                                Ft.set(u, t),
                                jt.get(u).forEach(function (e) {
                                  return e(t);
                                }),
                                jt.delete(u),
                                (n.label = 5);
                            case 5:
                              return i() ? [2, null] : [3, 7];
                            case 6:
                              return (
                                n.sent(),
                                jt.has(u) &&
                                  (jt.get(u).forEach(function (e) {
                                    return e(null);
                                  }),
                                  jt.delete(u)),
                                [2, f]
                              );
                            case 7:
                              return [2, h(t, e) || f];
                          }
                        });
                      });
                    };
                  })(l)
                )
              : "gradient" === c &&
                p.push(
                  (function (e) {
                    var t = e.typeGradient,
                      r = e.match,
                      n = e.hasComma,
                      a = /^(from|color-stop|to)\(([^\(\)]*?,\s*)?(.*?)\)$/,
                      o = Se(/([^\(\),]+(\([^\(\)]*(\([^\(\)]*\)*[^\(\)]*)?\))?([^\(\), ]|( (?!calc)))*),?/g, r, 1).map(function (e) {
                        var t = Ee((e = e.trim()));
                        if (t)
                          return function (e) {
                            return lt(t, e);
                          };
                        var r = e.lastIndexOf(" ");
                        if ((t = Ee(e.substring(0, r))))
                          return function (n) {
                            return "".concat(lt(t, n), " ").concat(e.substring(r + 1));
                          };
                        var n = e.match(a);
                        return n && (t = Ee(n[3]))
                          ? function (e) {
                              return ""
                                .concat(n[1], "(")
                                .concat(n[2] ? "".concat(n[2], ", ") : "")
                                .concat(lt(t, e), ")");
                            }
                          : function () {
                              return e;
                            };
                      });
                    return function (e) {
                      return ""
                        .concat(t, "(")
                        .concat(
                          o
                            .map(function (t) {
                              return t(e);
                            })
                            .join(", "),
                          ")"
                        )
                        .concat(n ? ", " : "");
                    };
                  })({
                    match: l,
                    index: d,
                    typeGradient: g,
                    hasComma: b,
                    offset: y,
                  })
                ),
            u === f.length - 1 &&
              p.push(function () {
                return e.substring(k);
              });
        }),
        function (e) {
          var t = p.filter(Boolean).map(function (t) {
            return t(e);
          });
          if (
            t.some(function (e) {
              return e instanceof Promise;
            })
          )
            return Promise.all(t).then(function (e) {
              return e.filter(Boolean).join("");
            });
          var r = t.join("");
          return r.endsWith(", initial") ? r.slice(0, -9) : r;
        }
      );
    } catch (e) {
      return null;
    }
  }

  function qt(e) {
    try {
      var t = 0,
        r = Se(/(^|\s)(?!calc)([a-z]+\(.+?\)|#[0-9a-f]+|[a-z]+)(.*?(inset|outset)?($|,))/gi, e, 2),
        n = 0,
        a = r.map(function (a, o) {
          var i = t,
            u = e.indexOf(a, t),
            c = u + a.length;
          t = c;
          var s = Ee(a);
          return s
            ? function (t) {
                return ""
                  .concat(e.substring(i, u))
                  .concat(
                    (function (e, t) {
                      return rt(e, t);
                    })(s, t)
                  )
                  .concat(o === r.length - 1 ? e.substring(c) : "");
              }
            : (n++,
              function () {
                return e.substring(i, c);
              });
        });
      return function (e) {
        var t = a
          .map(function (t) {
            return t(e);
          })
          .join("");
        return {
          matchesLength: r.length,
          unparseableMatchesLength: n,
          result: t,
        };
      };
    } catch (e) {
      return null;
    }
  }

  function Ut() {
    Qe.clear(), Ft.clear(), Ct(), jt.clear();
  }
  var Wt = new ((function () {
    function e() {
      (this.varTypes = new Map()), (this.rulesQueue = []), (this.definedVars = new Set()), (this.varRefs = new Map()), (this.unknownColorVars = new Set()), (this.unknownBgVars = new Set()), (this.undefinedVars = new Set()), (this.initialVarTypes = new Map()), (this.changedTypeVars = new Set()), (this.typeChangeSubscriptions = new Map()), (this.unstableVarValues = new Map());
    }
    return (
      (e.prototype.clear = function () {
        this.varTypes.clear(), this.rulesQueue.splice(0), this.definedVars.clear(), this.varRefs.clear(), this.unknownColorVars.clear(), this.unknownBgVars.clear(), this.undefinedVars.clear(), this.initialVarTypes.clear(), this.changedTypeVars.clear(), this.typeChangeSubscriptions.clear(), this.unstableVarValues.clear();
      }),
      (e.prototype.isVarType = function (e, t) {
        return this.varTypes.has(e) && (this.varTypes.get(e) & t) > 0;
      }),
      (e.prototype.addRulesForMatching = function (e) {
        this.rulesQueue.push(e);
      }),
      (e.prototype.matchVariablesAndDependants = function () {
        var e = this;
        this.changedTypeVars.clear(),
          (this.initialVarTypes = new Map(this.varTypes)),
          this.collectRootVariables(),
          this.collectVariablesAndVarDep(this.rulesQueue),
          this.rulesQueue.splice(0),
          this.collectRootVarDependants(),
          this.varRefs.forEach(function (t, r) {
            t.forEach(function (t) {
              e.varTypes.has(r) && e.resolveVariableType(t, e.varTypes.get(r));
            });
          }),
          this.unknownColorVars.forEach(function (t) {
            e.unknownBgVars.has(t) ? (e.unknownColorVars.delete(t), e.unknownBgVars.delete(t), e.resolveVariableType(t, 1)) : e.isVarType(t, 7) ? e.unknownColorVars.delete(t) : e.undefinedVars.add(t);
          }),
          this.unknownBgVars.forEach(function (t) {
            null !=
            e.findVarRef(t, function (t) {
              return e.unknownColorVars.has(t) || e.isVarType(t, 6);
            })
              ? e.itarateVarRefs(t, function (t) {
                  e.resolveVariableType(t, 1);
                })
              : e.isVarType(t, 9)
              ? e.unknownBgVars.delete(t)
              : e.undefinedVars.add(t);
          }),
          this.changedTypeVars.forEach(function (t) {
            e.typeChangeSubscriptions.has(t) &&
              e.typeChangeSubscriptions.get(t).forEach(function (e) {
                e();
              });
          }),
          this.changedTypeVars.clear();
      }),
      (e.prototype.getModifierForVariable = function (e) {
        var t = this;
        return function (r) {
          var n = e.varName,
            a = e.sourceValue,
            o = e.rule,
            i = e.ignoredImgSelectors,
            u = e.isCancelled,
            c = function () {
              var e = [],
                c = function (o, i, u) {
                  if (t.isVarType(n, o)) {
                    var c,
                      s = i(n);
                    if (Jt(a))
                      if (er(a)) {
                        var l = ur(a, t.unstableVarValues);
                        l || (l = 1 === o ? "#ffffff" : "#000000"), (c = u(l, r));
                      } else
                        c = zt(
                          a,
                          function (e) {
                            return i(e);
                          },
                          function (e) {
                            return u(e, r);
                          }
                        );
                    else c = u(a, r);
                    e.push({
                      property: s,
                      value: c,
                    });
                  }
                };
              if ((c(1, Qt, ar), c(2, Kt, or), c(4, Yt, ir), t.isVarType(n, 8))) {
                var s = Xt(n),
                  l = a;
                Jt(a) &&
                  (l = zt(
                    a,
                    function (e) {
                      return Qt(e);
                    },
                    function (e) {
                      return ar(e, r);
                    }
                  ));
                var d = Bt(l, o, i, u);
                (l = "function" == typeof d ? d(r) : d),
                  e.push({
                    property: s,
                    value: l,
                  });
              }
              return e;
            },
            s = new Set();
          return {
            declarations: c(),
            onTypeChange: {
              addListener: function (e) {
                var r = function () {
                  var t = c();
                  e(t);
                };
                s.add(r), t.subscribeForVarTypeChange(n, r);
              },
              removeListeners: function () {
                s.forEach(function (e) {
                  t.unsubscribeFromVariableTypeChanges(n, e);
                });
              },
            },
          };
        };
      }),
      (e.prototype.getModifierForVarDependant = function (e, t) {
        var r = this;
        if (t.match(/^\s*(rgb|hsl)a?\(/)) {
          var n = e.startsWith("background"),
            a = tr(e);
          return function (e) {
            var o = ur(t, r.unstableVarValues);
            return o || (o = n ? "#ffffff" : "#000000"), (n ? ar : a ? or : ir)(o, e);
          };
        }
        return "background-color" === e
          ? function (e) {
              return zt(
                t,
                function (e) {
                  return Qt(e);
                },
                function (t) {
                  return ar(t, e);
                }
              );
            }
          : tr(e)
          ? function (e) {
              return zt(
                t,
                function (e) {
                  return Kt(e);
                },
                function (t) {
                  return or(t, e);
                }
              );
            }
          : "background" === e || "background-image" === e || "box-shadow" === e
          ? function (n) {
              var a = new Set(),
                o = function () {
                  var o = zt(
                    t,
                    function (e) {
                      return r.isVarType(e, 1) ? Qt(e) : r.isVarType(e, 8) ? Xt(e) : (a.add(e), e);
                    },
                    function (e) {
                      return ar(e, n);
                    }
                  );
                  if ("box-shadow" === e) {
                    var i = qt(o)(n);
                    if (i.unparseableMatchesLength !== i.matchesLength) return i.result;
                  }
                  return o;
                },
                i = o();
              return a.size > 0
                ? new Promise(function (e) {
                    var t = a.values().next().value,
                      n = function () {
                        r.unsubscribeFromVariableTypeChanges(t, n);
                        var a = o();
                        e(a);
                      };
                    r.subscribeForVarTypeChange(t, n);
                  })
                : i;
            }
          : e.startsWith("border") || e.startsWith("outline")
          ? function (e) {
              return zt(
                t,
                function (e) {
                  return Yt(e);
                },
                function (t) {
                  return ir(t, e);
                }
              );
            }
          : null;
      }),
      (e.prototype.subscribeForVarTypeChange = function (e, t) {
        this.typeChangeSubscriptions.has(e) || this.typeChangeSubscriptions.set(e, new Set());
        var r = this.typeChangeSubscriptions.get(e);
        r.has(t) || r.add(t);
      }),
      (e.prototype.unsubscribeFromVariableTypeChanges = function (e, t) {
        this.typeChangeSubscriptions.has(e) && this.typeChangeSubscriptions.get(e).delete(t);
      }),
      (e.prototype.collectVariablesAndVarDep = function (e) {
        var t = this;
        e.forEach(function (e) {
          ue(e, function (e) {
            e.style &&
              le(e.style, function (e, r) {
                Zt(e) && t.inspectVariable(e, r), Jt(r) && t.inspectVarDependant(e, r);
              });
          });
        });
      }),
      (e.prototype.collectRootVariables = function () {
        var e = this;
        le(document.documentElement.style, function (t, r) {
          Zt(t) && e.inspectVariable(t, r);
        });
      }),
      (e.prototype.inspectVariable = function (e, t) {
        (this.unstableVarValues.set(e, t), Jt(t) && er(t) && (this.unknownColorVars.add(e), this.definedVars.add(e)), this.definedVars.has(e)) || (this.definedVars.add(e), Ee(t) ? this.unknownColorVars.add(e) : (t.includes("url(") || t.includes("linear-gradient(") || t.includes("radial-gradient(")) && this.resolveVariableType(e, 8));
      }),
      (e.prototype.resolveVariableType = function (e, t) {
        var r = this.initialVarTypes.get(e) || 0,
          n = (this.varTypes.get(e) || 0) | t;
        this.varTypes.set(e, n), (n !== r || this.undefinedVars.has(e)) && (this.changedTypeVars.add(e), this.undefinedVars.delete(e)), this.unknownColorVars.delete(e), this.unknownBgVars.delete(e);
      }),
      (e.prototype.collectRootVarDependants = function () {
        var e = this;
        le(document.documentElement.style, function (t, r) {
          Jt(r) && e.inspectVarDependant(t, r);
        });
      }),
      (e.prototype.inspectVarDependant = function (e, t) {
        var r = this;
        Zt(e)
          ? this.iterateVarDeps(t, function (t) {
              r.varRefs.has(e) || r.varRefs.set(e, new Set()), r.varRefs.get(e).add(t);
            })
          : "background-color" === e || "box-shadow" === e
          ? this.iterateVarDeps(t, function (e) {
              return r.resolveVariableType(e, 1);
            })
          : tr(e)
          ? this.iterateVarDeps(t, function (e) {
              return r.resolveVariableType(e, 2);
            })
          : e.startsWith("border") || e.startsWith("outline")
          ? this.iterateVarDeps(t, function (e) {
              return r.resolveVariableType(e, 4);
            })
          : ("background" !== e && "background-image" !== e) ||
            this.iterateVarDeps(t, function (e) {
              if (!r.isVarType(e, 9)) {
                var t =
                  null !=
                  r.findVarRef(e, function (e) {
                    return r.unknownColorVars.has(e) || r.isVarType(e, 6);
                  });
                r.itarateVarRefs(e, function (e) {
                  t ? r.resolveVariableType(e, 1) : r.unknownBgVars.add(e);
                });
              }
            });
      }),
      (e.prototype.iterateVarDeps = function (e, t) {
        var r = new Set();
        !(function (e, t) {
          zt(e, function (e) {
            return t(e), e;
          });
        })(e, function (e) {
          return r.add(e);
        }),
          r.forEach(function (e) {
            return t(e);
          });
      }),
      (e.prototype.findVarRef = function (e, t, r) {
        var n, a;
        if ((void 0 === r && (r = new Set()), r.has(e))) return null;
        if ((r.add(e), t(e))) return e;
        var i = this.varRefs.get(e);
        if (!i || 0 === i.size) return null;
        try {
          for (var u = o(i), c = u.next(); !c.done; c = u.next()) {
            var s = c.value,
              l = this.findVarRef(s, t, r);
            if (l) return l;
          }
        } catch (e) {
          n = {
            error: e,
          };
        } finally {
          try {
            c && !c.done && (a = u.return) && a.call(u);
          } finally {
            if (n) throw n.error;
          }
        }
        return null;
      }),
      (e.prototype.itarateVarRefs = function (e, t) {
        this.findVarRef(e, function (e) {
          return t(e), !1;
        });
      }),
      (e.prototype.setOnRootVariableChange = function (e) {
        this.onRootVariableDefined = e;
      }),
      (e.prototype.putRootVars = function (e, t) {
        var r,
          n,
          a = this,
          u = e.sheet;
        u.cssRules.length > 0 && u.deleteRule(0);
        var c = new Map();
        le(document.documentElement.style, function (e, r) {
          Zt(e) && (a.isVarType(e, 1) && c.set(Qt(e), ar(r, t)), a.isVarType(e, 2) && c.set(Kt(e), or(r, t)), a.isVarType(e, 4) && c.set(Yt(e), ir(r, t)), a.subscribeForVarTypeChange(e, a.onRootVariableDefined));
        });
        var s = [];
        s.push(":root {");
        try {
          for (var l = o(c), d = l.next(); !d.done; d = l.next()) {
            var f = i(d.value, 2),
              h = f[0],
              p = f[1];
            s.push("    ".concat(h, ": ").concat(p, ";"));
          }
        } catch (e) {
          r = {
            error: e,
          };
        } finally {
          try {
            d && !d.done && (n = l.return) && n.call(l);
          } finally {
            if (r) throw r.error;
          }
        }
        s.push("}");
        var v = s.join("\n");
        u.insertRule(v);
      }),
      e
    );
  })())();

  function Gt(e, t) {
    void 0 === t && (t = 0);
    var r = e.indexOf("var(", t);
    if (r >= 0) {
      var n = _e(e, r + 3);
      return n
        ? {
            start: r,
            end: n.end,
          }
        : null;
    }
  }

  function Ht(e, t) {
    var r = (function (e) {
        for (var t, r = [], n = 0; (t = Gt(e, n)); ) {
          var a = t.start,
            o = t.end;
          r.push({
            start: a,
            end: o,
            value: e.substring(a, o),
          }),
            (n = t.end + 1);
        }
        return r;
      })(e),
      n = r.length;
    if (0 === n) return e;
    var a = e.length,
      o = r.map(function (e) {
        return t(e.value);
      }),
      i = [];
    i.push(e.substring(0, r[0].start));
    for (var u = 0; u < n; u++) {
      i.push(o[u]);
      var c = r[u].end,
        s = u < n - 1 ? r[u + 1].start : a;
      i.push(e.substring(c, s));
    }
    return i.join("");
  }

  function $t(e) {
    var t,
      r,
      n = e.indexOf(",");
    return (
      n >= 0 ? ((t = e.substring(4, n).trim()), (r = e.substring(n + 1, e.length - 1).trim())) : ((t = e.substring(4, e.length - 1).trim()), (r = "")),
      {
        name: t,
        fallback: r,
      }
    );
  }

  function zt(e, t, r) {
    return Ht(e, function (e) {
      var n,
        a = $t(e),
        o = a.name,
        i = a.fallback,
        u = t(o);
      return i ? ((n = Jt(i) ? zt(i, t, r) : r ? r(i) : i), "var(".concat(u, ", ").concat(n, ")")) : "var(".concat(u, ")");
    });
  }

  function Qt(e) {
    return "--darkreader-bg".concat(e);
  }

  function Kt(e) {
    return "--darkreader-text".concat(e);
  }

  function Yt(e) {
    return "--darkreader-border".concat(e);
  }

  function Xt(e) {
    return "--darkreader-bgimg".concat(e);
  }

  function Zt(e) {
    return e.startsWith("--");
  }

  function Jt(e) {
    return e.includes("var(");
  }

  function er(e) {
    return e.match(/^\s*(rgb|hsl)a?\(/);
  }

  function tr(e) {
    return "color" === e || "caret-color" === e || "-webkit-text-fill-color" === e;
  }
  var rr = /^\d{1,3}, ?\d{1,3}, ?\d{1,3}$/;

  function nr(e, t, r) {
    var n = (function (e) {
        if (rr.test(e)) {
          var t = e.split(","),
            r = "rgb(";
          return (
            t.forEach(function (e) {
              r += "".concat(e.trim(), ", ");
            }),
            (r = r.substring(0, r.length - 2)),
            {
              isRaw: !0,
              color: (r += ")"),
            }
          );
        }
        return {
          isRaw: !1,
          color: e,
        };
      })(e),
      a = n.isRaw,
      o = n.color,
      i = Ee(o);
    if (i) {
      var u = r(i, t);
      if (a) {
        var c = Ee(u);
        return c ? "".concat(c.r, ", ").concat(c.g, ", ").concat(c.b) : u;
      }
      return u;
    }
    return o;
  }

  function ar(e, t) {
    return nr(e, t, rt);
  }

  function or(e, t) {
    return nr(e, t, ut);
  }

  function ir(e, t) {
    return nr(e, t, st);
  }

  function ur(e, t, r) {
    void 0 === r && (r = new Set());
    var n = !1,
      a = Ht(e, function (e) {
        var a = $t(e),
          o = a.name,
          i = a.fallback;
        if (r.has(o)) return (n = !0), null;
        r.add(o);
        var u = t.get(o) || i,
          c = null;
        return u && (c = Jt(u) ? ur(u, t, r) : u), c || ((n = !0), null);
      });
    return n ? null : a;
  }
  var cr = {
      "background-color": {
        customProp: "--darkreader-inline-bgcolor",
        cssProp: "background-color",
        dataAttr: "data-darkreader-inline-bgcolor",
      },
      "background-image": {
        customProp: "--darkreader-inline-bgimage",
        cssProp: "background-image",
        dataAttr: "data-darkreader-inline-bgimage",
      },
      "border-color": {
        customProp: "--darkreader-inline-border",
        cssProp: "border-color",
        dataAttr: "data-darkreader-inline-border",
      },
      "border-bottom-color": {
        customProp: "--darkreader-inline-border-bottom",
        cssProp: "border-bottom-color",
        dataAttr: "data-darkreader-inline-border-bottom",
      },
      "border-left-color": {
        customProp: "--darkreader-inline-border-left",
        cssProp: "border-left-color",
        dataAttr: "data-darkreader-inline-border-left",
      },
      "border-right-color": {
        customProp: "--darkreader-inline-border-right",
        cssProp: "border-right-color",
        dataAttr: "data-darkreader-inline-border-right",
      },
      "border-top-color": {
        customProp: "--darkreader-inline-border-top",
        cssProp: "border-top-color",
        dataAttr: "data-darkreader-inline-border-top",
      },
      "box-shadow": {
        customProp: "--darkreader-inline-boxshadow",
        cssProp: "box-shadow",
        dataAttr: "data-darkreader-inline-boxshadow",
      },
      color: {
        customProp: "--darkreader-inline-color",
        cssProp: "color",
        dataAttr: "data-darkreader-inline-color",
      },
      fill: {
        customProp: "--darkreader-inline-fill",
        cssProp: "fill",
        dataAttr: "data-darkreader-inline-fill",
      },
      stroke: {
        customProp: "--darkreader-inline-stroke",
        cssProp: "stroke",
        dataAttr: "data-darkreader-inline-stroke",
      },
      "outline-color": {
        customProp: "--darkreader-inline-outline",
        cssProp: "outline-color",
        dataAttr: "data-darkreader-inline-outline",
      },
      "stop-color": {
        customProp: "--darkreader-inline-stopcolor",
        cssProp: "stop-color",
        dataAttr: "data-darkreader-inline-stopcolor",
      },
    },
    sr = Object.values(cr),
    lr = {};
  sr.forEach(function (e) {
    var t = e.cssProp,
      r = e.customProp;
    return (lr[r] = t);
  });
  var dr = ["style", "fill", "stop-color", "stroke", "bgcolor", "color"],
    fr = dr
      .map(function (e) {
        return "[".concat(e, "]");
      })
      .join(", ");

  function hr() {
    return sr
      .map(function (e) {
        var t = e.dataAttr,
          r = e.customProp,
          n = e.cssProp;
        return ["[".concat(t, "] {"), "  ".concat(n, ": var(").concat(r, ") !important;"), "}"].join("\n");
      })
      .join("\n");
  }
  var pr = new Map(),
    vr = new Map();

  function mr(e, t, r) {
    pr.has(e) && (pr.get(e).disconnect(), vr.get(e).disconnect());
    var n = new WeakSet();

    function a(e) {
      (function (e) {
        var t = [];
        return e instanceof Element && e.matches(fr) && t.push(e), (e instanceof Element || (b && e instanceof ShadowRoot) || e instanceof Document) && j(t, e.querySelectorAll(fr)), t;
      })(e).forEach(function (e) {
        n.has(e) || (n.add(e), t(e));
      }),
        G(e, function (a) {
          n.has(e) || (n.add(e), r(a.shadowRoot), mr(a.shadowRoot, t, r));
        });
    }
    var o = re(e, {
      onMinorMutations: function (e) {
        e.additions.forEach(function (e) {
          return a(e);
        });
      },
      onHugeMutations: function () {
        a(e);
      },
    });
    pr.set(e, o);
    var c = 0,
      s = null,
      l = q({
        seconds: 10,
      }),
      d = q({
        seconds: 2,
      }),
      f = [],
      h = null,
      p = B(function (e) {
        e.forEach(function (e) {
          dr.includes(e.attributeName) && t(e.target);
        });
      }),
      v = new MutationObserver(function (e) {
        if (h) f.push.apply(f, u([], i(e), !1));
        else {
          c++;
          var t = Date.now();
          if (null == s) s = t;
          else if (c >= 50) {
            if (t - s < l)
              return (
                (h = setTimeout(function () {
                  (s = null), (c = 0), (h = null);
                  var e = f;
                  (f = []), p(e);
                }, d)),
                void f.push.apply(f, u([], i(e), !1))
              );
            (s = t), (c = 1);
          }
          p(e);
        }
      });
    v.observe(e, {
      attributes: !0,
      attributeFilter: dr.concat(
        sr.map(function (e) {
          return e.dataAttr;
        })
      ),
      subtree: !0,
    }),
      vr.set(e, v);
  }
  var gr = new WeakMap(),
    br = ["brightness", "contrast", "grayscale", "sepia", "mode"];

  function yr(e, t) {
    return dr
      .map(function (t) {
        return "".concat(t, '="').concat(e.getAttribute(t), '"');
      })
      .concat(
        br.map(function (e) {
          return "".concat(e, '="').concat(t[e], '"');
        })
      )
      .join(" ");
  }

  function Sr(e, t, r, n) {
    if (yr(e, t) !== gr.get(e)) {
      var a = new Set(Object.keys(cr));
      if (
        r.length > 0 &&
        (function (e, t) {
          for (var r = 0, n = t.length; r < n; r++) {
            var a = t[r];
            if (e.matches(a)) return !0;
          }
          return !1;
        })(e, r)
      )
        a.forEach(function (t) {
          e.removeAttribute(cr[t].dataAttr);
        });
      else {
        if (e.hasAttribute("bgcolor")) ((u = e.getAttribute("bgcolor")).match(/^[0-9a-f]{3}$/i) || u.match(/^[0-9a-f]{6}$/i)) && (u = "#".concat(u)), c("background-color", "background-color", u);
        if (e.hasAttribute("color") && "mask-icon" !== e.rel) ((u = e.getAttribute("color")).match(/^[0-9a-f]{3}$/i) || u.match(/^[0-9a-f]{6}$/i)) && (u = "#".concat(u)), c("color", "color", u);
        if (e instanceof SVGElement) {
          if (e.hasAttribute("fill")) {
            var o = e.getAttribute("fill");
            if ("none" !== o)
              if (e instanceof SVGTextElement) c("fill", "color", o);
              else {
                var i = function () {
                  var t = e.getBoundingClientRect(),
                    r = t.width,
                    n = t.height;
                  c("fill", r > 32 || n > 32 ? "background-color" : "color", o);
                };
                K() ? i() : X(i);
              }
          }
          e.hasAttribute("stop-color") && c("stop-color", "background-color", e.getAttribute("stop-color"));
        }
        if (e.hasAttribute("stroke")) {
          var u = e.getAttribute("stroke");
          c("stroke", e instanceof SVGLineElement || e instanceof SVGTextElement ? "border-color" : "color", u);
        }
        e.style &&
          le(e.style, function (t, r) {
            if ("background-image" !== t || !r.includes("url"))
              if (cr.hasOwnProperty(t) || (t.startsWith("--") && !lr[t])) c(t, t, r);
              else {
                var n = lr[t];
                if (n && !e.style.getPropertyValue(n) && !e.hasAttribute(n)) {
                  if ("background-color" === n && e.hasAttribute("bgcolor")) return;
                  e.style.setProperty(t, "");
                }
              }
          }),
          e.style && e instanceof SVGTextElement && e.style.fill && c("fill", "color", e.style.getPropertyValue("fill")),
          F(a, function (t) {
            e.removeAttribute(cr[t].dataAttr);
          }),
          gr.set(e, yr(e, t));
      }
    }

    function c(r, o, i) {
      var u = r.startsWith("--"),
        c = u ? {} : cr[r],
        s = c.customProp,
        l = c.dataAttr,
        d = Lt(
          o,
          i,
          {
            style: e.style,
          },
          Wt,
          n,
          null
        );
      if (d) {
        var f = d.value;
        if (("function" == typeof f && (f = f(t)), u && "object" == typeof f))
          f.declarations.forEach(function (t) {
            var r = t.property,
              n = t.value;
            !(n instanceof Promise) && e.style.setProperty(r, n);
          });
        else e.style.setProperty(s, f), e.hasAttribute(l) || e.setAttribute(l, ""), a.delete(r);
      }
    }
  }
  var _r = "theme-color",
    kr = 'meta[name="'.concat(_r, '"]'),
    wr = null,
    Er = null;

  function Cr(e, t) {
    var r = Ee((wr = wr || e.content));
    r && (e.content = rt(r, t));
  }
  var xr = ["mode", "brightness", "contrast", "grayscale", "sepia", "darkSchemeBackgroundColor", "darkSchemeTextColor", "lightSchemeBackgroundColor", "lightSchemeTextColor"];
  var Tr = (function () {
    var e = [],
      t = null;

    function r() {
      for (var r; (r = e.shift()); ) r();
      t = null;
    }
    return {
      add: function (n) {
        e.push(n), t || (t = requestAnimationFrame(r));
      },
      cancel: function () {
        e.splice(0), cancelAnimationFrame(t), (t = null);
      },
    };
  })();

  function Rr() {
    var e = 0,
      t = new Set(),
      r = new Map(),
      n = new Set(),
      a = null,
      o = !1,
      c = !1;
    return {
      modifySheet: function (s) {
        var l = s.sourceCSSRules,
          d = s.theme,
          f = s.ignoreImageAnalysis,
          h = s.force,
          p = s.prepareSheet,
          v = s.isAsyncCancelled,
          m = 0 === r.size,
          g = new Set(r.keys()),
          b = (function (e) {
            var t = "";
            return (
              xr.forEach(function (r) {
                t += "".concat(r, ":").concat(e[r], ";");
              }),
              t
            );
          })(d),
          y = b !== a;
        o && (c = !0);
        var S = [];
        if (
          (ue(
            l,
            function (e) {
              var n = e.cssText,
                a = !1;
              if ((g.delete(n), e.parentRule instanceof CSSMediaRule && (n += ";".concat(e.parentRule.media.mediaText)), t.has(n) || (t.add(n), (a = !0)), a)) {
                m = !0;
                var o = [];
                e.style &&
                  le(e.style, function (t, r) {
                    var n = Lt(t, r, e, Wt, f, v);
                    n && o.push(n);
                  });
                var i = null;
                if (o.length > 0) {
                  var u = e.parentRule;
                  (i = {
                    selector: e.selectorText,
                    declarations: o,
                    parentRule: u,
                  }),
                    S.push(i);
                }
                r.set(n, i);
              } else S.push(r.get(n));
            },
            function () {
              o = !0;
            }
          ),
          g.forEach(function (e) {
            t.delete(e), r.delete(e);
          }),
          (a = b),
          h || m || y)
        ) {
          e++;
          var _ = new Map(),
            k = new Map(),
            w = 0,
            E = 0,
            C = {
              rule: null,
              rules: [],
              isGroup: !0,
            },
            x = new WeakMap();
          n.forEach(function (e) {
            return e();
          }),
            n.clear(),
            S.filter(function (e) {
              return e;
            }).forEach(function (t) {
              var r = t.selector,
                a = t.declarations,
                o = V(t.parentRule),
                c = {
                  selector: r,
                  declarations: [],
                  isGroup: !1,
                },
                s = c.declarations;

              function l(t, r, n, a) {
                var o = ++w,
                  i = {
                    property: t,
                    value: null,
                    important: n,
                    asyncKey: o,
                    sourceValue: a,
                  };
                s.push(i);
                var u = e;
                r.then(function (t) {
                  t &&
                    !v() &&
                    u === e &&
                    ((i.value = t),
                    Tr.add(function () {
                      v() ||
                        u !== e ||
                        (function (e) {
                          var t = _.get(e),
                            r = t.rule,
                            n = t.target,
                            a = t.index;
                          n.deleteRule(a), R(n, a, r), _.delete(e);
                        })(o);
                    }));
                });
              }

              function f(t, r, a, o) {
                var c = r,
                  d = c.declarations,
                  f = c.onTypeChange,
                  h = ++E,
                  p = e,
                  m = s.length,
                  g = [];
                if (0 === d.length) {
                  var b = {
                    property: t,
                    value: o,
                    important: a,
                    sourceValue: o,
                    varKey: h,
                  };
                  s.push(b), (g = [b]);
                }
                d.forEach(function (e) {
                  if (e.value instanceof Promise) l(e.property, e.value, a, o);
                  else {
                    var t = {
                      property: e.property,
                      value: e.value,
                      important: a,
                      sourceValue: o,
                      varKey: h,
                    };
                    s.push(t), g.push(t);
                  }
                }),
                  f.addListener(function (t) {
                    if (!v() && p === e) {
                      var r = t.map(function (e) {
                          return {
                            property: e.property,
                            value: e.value,
                            important: a,
                            sourceValue: o,
                            varKey: h,
                          };
                        }),
                        n = s.indexOf(g[0], m);
                      s.splice.apply(s, u([n, g.length], i(r), !1)),
                        (g = r),
                        (function (e) {
                          var t = k.get(e),
                            r = t.rule,
                            n = t.target,
                            a = t.index;
                          n.deleteRule(a), R(n, a, r);
                        })(h);
                    }
                  }),
                  n.add(function () {
                    return f.removeListeners();
                  });
              }
              o.rules.push(c),
                a.forEach(function (e) {
                  var t = e.property,
                    r = e.value,
                    n = e.important,
                    a = e.sourceValue;
                  if ("function" == typeof r) {
                    var o = r(d);
                    o instanceof Promise
                      ? l(t, o, n, a)
                      : t.startsWith("--")
                      ? f(t, o, n, a)
                      : s.push({
                          property: t,
                          value: o,
                          important: n,
                          sourceValue: a,
                        });
                  } else
                    s.push({
                      property: t,
                      value: r,
                      important: n,
                      sourceValue: a,
                    });
                });
            });
          var T = p();
          !(function e(t, r, n) {
            t.rules.forEach(function (t) {
              if (t.isGroup) {
                var a = (function (e, t) {
                  var r = e.rule;
                  if (r instanceof CSSMediaRule) {
                    var n = r.media,
                      a = t.cssRules.length;
                    return t.insertRule("@media ".concat(n.mediaText, " {}"), a), t.cssRules[a];
                  }
                  return t;
                })(t, r);
                e(t, a, n);
              } else n(t, r);
            });
          })(C, T, function (e, t) {
            var r = t.cssRules.length;
            e.declarations.forEach(function (n) {
              var a = n.asyncKey,
                o = n.varKey;
              null != a &&
                _.set(a, {
                  rule: e,
                  target: t,
                  index: r,
                }),
                null != o &&
                  k.set(o, {
                    rule: e,
                    target: t,
                    index: r,
                  });
            }),
              R(t, r, e);
          });
        }

        function R(e, t, r) {
          var n = r.selector,
            a = r.declarations,
            o = "";
          a.forEach(function (e) {
            var t, r, n, a, i;
            o += "".concat(
              ((r = (t = e).property),
              (n = t.value),
              (a = t.important),
              (i = t.sourceValue),
              ""
                .concat(r, ": ")
                .concat(null == n ? i : n)
                .concat(a ? " !important" : "", ";")),
              " "
            );
          });
          var i = "".concat(n, " { ").concat(o, " }");
          e.insertRule(i, t);
        }

        function V(e) {
          if (null == e) return C;
          if (x.has(e)) return x.get(e);
          var t = {
            rule: e,
            rules: [],
            isGroup: !0,
          };
          return x.set(e, t), V(e.parentRule).rules.push(t), t;
        }
      },
      shouldRebuildStyle: function () {
        return o && !c;
      },
    };
  }

  function Vr(e) {
    return (
      (e instanceof HTMLStyleElement ||
        e instanceof SVGStyleElement ||
        (e instanceof HTMLLinkElement &&
          e.rel &&
          e.rel.toLowerCase().includes("stylesheet") &&
          e.href &&
          !e.disabled &&
          (!h || !e.href.startsWith("moz-extension://")) &&
          !(function (e) {
            if (!e.href) return !1;
            try {
              return "fonts.googleapis.com" === new URL(e.href).hostname;
            } catch (t) {
              return "Couldn't construct ".concat(e.href, " as URL"), !1;
            }
          })(e))) &&
      !e.classList.contains("darkreader") &&
      "print" !== e.media.toLowerCase() &&
      !e.classList.contains("stylus")
    );
  }

  function Ar(e, t, r) {
    return (
      void 0 === t && (t = []),
      void 0 === r && (r = !0),
      Vr(e)
        ? t.push(e)
        : (e instanceof Element || (b && e instanceof ShadowRoot) || e === document) &&
          (F(e.querySelectorAll('style, link[rel*="stylesheet" i]:not([disabled])'), function (e) {
            return Ar(e, t, !1);
          }),
          r &&
            G(e, function (e) {
              return Ar(e.shadowRoot, t, !1);
            })),
      t
    );
  }
  var Mr = new WeakSet(),
    Lr = new WeakSet(),
    Or = !1;
  document.addEventListener("__darkreader__inlineScriptsAllowed", function () {
    Or = !0;
  });
  var Dr = 0,
    Pr = new Map();

  function Ir(e, t) {
    for (var r = t.update, o = t.loadingStart, u = t.loadingEnd, c = [], s = e; (s = s.nextElementSibling) && s.matches(".darkreader"); ) c.push(s);
    var l =
        c.find(function (e) {
          return e.matches(".darkreader--cors") && !Lr.has(e);
        }) || null,
      d =
        c.find(function (e) {
          return e.matches(".darkreader--sync") && !Mr.has(e);
        }) || null,
      f = null,
      h = null,
      v = !1,
      m = !0,
      g = Rr(),
      b = new MutationObserver(function () {
        r();
      }),
      y = {
        attributes: !0,
        childList: !0,
        subtree: !0,
        characterData: !0,
      };

    function S() {
      return e instanceof HTMLStyleElement && e.textContent.trim().match(fe);
    }

    function _(e, t) {
      var r = !1;
      if (e) {
        var n = void 0;
        e: for (var a = 0, o = e.length; a < o; a++)
          if ((n = e[a]).href) {
            if (!t) {
              r = !0;
              break e;
            }
            if (n.href.startsWith("http") && !n.href.startsWith(location.origin)) {
              r = !0;
              break e;
            }
          }
      }
      return r;
    }

    function k() {
      if (l) return l.sheet.cssRules;
      if (S()) return null;
      var t = A();
      return (e instanceof HTMLLinkElement &&
        !(function (e) {
          if (e.startsWith("data:")) return !0;
          var t = oe(e);
          return t.protocol === location.protocol && t.hostname === location.hostname && t.port === location.port && t.pathname === location.pathname;
        })(e.href) &&
        _(t, !1)) ||
        _(t, !0)
        ? null
        : t;
    }

    function w() {
      l ? (e.nextSibling !== l && e.parentNode.insertBefore(l, e.nextSibling), l.nextSibling !== d && e.parentNode.insertBefore(d, l.nextSibling)) : e.nextSibling !== d && e.parentNode.insertBefore(d, e.nextSibling);
    }
    var E = !1,
      C = !1,
      x = ++Dr;

    function T() {
      return n(this, void 0, void 0, function () {
        var t, r, n, o, u, c, s;
        return a(this, function (a) {
          switch (a.label) {
            case 0:
              if (!(e instanceof HTMLLinkElement)) return [3, 7];
              if (((n = i(V(), 2)), (o = n[0]), (u = n[1]), !((!o && !u && !p) || (p && !e.sheet) || ((d = u), d && d.message && d.message.includes("loading"))))) return [3, 5];
              a.label = 1;
            case 1:
              return a.trys.push([1, 3, , 4]), [4, Nr(e, x)];
            case 2:
              return a.sent(), [3, 4];
            case 3:
              return a.sent(), (C = !0), [3, 4];
            case 4:
              if (v) return [2, null];
              (s = i(V(), 2)), (o = s[0]), (u = s[1]), (a.label = 5);
            case 5:
              return o && !_(o, !1) ? [2, o] : [4, Fr(e.href)];
            case 6:
              return (t = a.sent()), (r = pe(e.href)), v ? [2, null] : [3, 8];
            case 7:
              if (!S()) return [2, null];
              (t = e.textContent.trim()), (r = pe(location.href)), (a.label = 8);
            case 8:
              if (!t) return [3, 13];
              a.label = 9;
            case 9:
              return a.trys.push([9, 11, , 12]), [4, jr(t, r)];
            case 10:
              return (
                (c = a.sent()),
                (l = (function (e, t) {
                  if (!t) return null;
                  var r = document.createElement("style");
                  return r.classList.add("darkreader"), r.classList.add("darkreader--cors"), (r.media = "screen"), (r.textContent = t), e.parentNode.insertBefore(r, e.nextSibling), (r.sheet.disabled = !0), Lr.add(r), r;
                })(e, c)),
                [3, 12]
              );
            case 11:
              return a.sent(), [3, 12];
            case 12:
              if (l) return (f = W(l, "prev-sibling")), [2, l.sheet.cssRules];
              a.label = 13;
            case 13:
              return [2, null];
          }
          var d;
        });
      });
    }
    var R = !1;

    function V() {
      try {
        return null == e.sheet ? [null, null] : [e.sheet.cssRules, null];
      } catch (e) {
        return [null, e];
      }
    }

    function A() {
      var e = i(V(), 2),
        t = e[0];
      return e[1] ? null : t;
    }

    function M() {
      e.addEventListener("__darkreader__updateSheet", N),
        (Or && e.sheet) ||
          (function () {
            (L = D()), P();
            var t = function () {
              D() !== L && ((L = D()), r()), Or && e.sheet ? P() : (O = requestAnimationFrame(t));
            };
            t();
          })();
    }
    var L = null,
      O = null;

    function D() {
      var e = A();
      return e ? e.length : null;
    }

    function P() {
      cancelAnimationFrame(O);
    }
    var I = !1;

    function N() {
      function e() {
        (I = !1), v || r();
      }
      (Or = !0), P(), I || ((I = !0), "function" == typeof queueMicrotask ? queueMicrotask(e) : requestAnimationFrame(e));
    }

    function F() {
      e.removeEventListener("__darkreader__updateSheet", N), P();
    }

    function j() {
      b.disconnect(), (v = !0), f && f.stop(), h && h.stop(), F();
    }
    var B = 0;
    return {
      details: function (e) {
        var t = k();
        return t
          ? {
              rules: t,
            }
          : (e.secondRound ||
              E ||
              C ||
              ((E = !0),
              o(),
              T()
                .then(function (e) {
                  (E = !1), u(), e && r();
                })
                .catch(function (e) {
                  (E = !1), u();
                })),
            null);
      },
      render: function (t, n) {
        var a = k();

        function o() {
          return (
            d || ((d = e instanceof SVGStyleElement ? document.createElementNS("http://www.w3.org/2000/svg", "style") : document.createElement("style")).classList.add("darkreader"), d.classList.add("darkreader--sync"), (d.media = "screen"), e.title && (d.title = e.title), Mr.add(d)),
            h && h.stop(),
            w(),
            null == d.sheet && (d.textContent = ""),
            (function (e) {
              for (var t = e.cssRules.length - 1; t >= 0; t--) e.deleteRule(t);
            })(d.sheet),
            h
              ? h.run()
              : (h = W(d, "prev-sibling", function () {
                  (R = !0), i();
                })),
            d.sheet
          );
        }

        function i() {
          var e = R;
          (R = !1),
            g.modifySheet({
              prepareSheet: o,
              sourceCSSRules: a,
              theme: t,
              ignoreImageAnalysis: n,
              force: e,
              isAsyncCancelled: function () {
                return v;
              },
            }),
            (m = 0 === d.sheet.cssRules.length),
            g.shouldRebuildStyle() &&
              X(function () {
                return r();
              });
        }
        a && ((v = !1), i());
      },
      pause: j,
      destroy: function () {
        if ((j(), U(l), U(d), u(), Pr.has(x))) {
          var e = Pr.get(x);
          Pr.delete(x), e && e();
        }
      },
      watch: function () {
        b.observe(e, y), e instanceof HTMLStyleElement && M();
      },
      restore: function () {
        d && (++B > 10 || (w(), f && f.skip(), h && h.skip(), m || ((R = !0), r())));
      },
    };
  }

  function Nr(e, t) {
    return n(this, void 0, void 0, function () {
      return a(this, function (r) {
        return [
          2,
          new Promise(function (r, n) {
            var a = function () {
                e.removeEventListener("load", o), e.removeEventListener("error", i), Pr.delete(t);
              },
              o = function () {
                a(), r();
              },
              i = function () {
                a(), n("Linkelement ".concat(t, " couldn't be loaded. ").concat(e.href));
              };
            Pr.set(t, function () {
              a(), n();
            }),
              e.addEventListener("load", o),
              e.addEventListener("error", i),
              e.href || i();
          }),
        ];
      });
    });
  }

  function Fr(e) {
    return n(this, void 0, void 0, function () {
      return a(this, function (t) {
        switch (t.label) {
          case 0:
            return e.startsWith("data:") ? [4, fetch(e)] : [3, 3];
          case 1:
            return [4, t.sent().text()];
          case 2:
          case 4:
            return [2, t.sent()];
          case 3:
            return [
              4,
              vt({
                url: e,
                responseType: "text",
                mimeType: "text/css",
                origin: window.location.origin,
              }),
            ];
        }
      });
    });
  }

  function jr(e, t, r) {
    return (
      void 0 === r && (r = new Map()),
      n(this, void 0, void 0, function () {
        var n, i, u, c, s, l, d, f, h, p;
        return a(this, function (a) {
          switch (a.label) {
            case 0:
              (e = (function (e, t) {
                return e.replace(de, function (e) {
                  var r = he(e);
                  try {
                    return "url('".concat(ie(t, r), "')");
                  } catch (t) {
                    return e;
                  }
                });
              })(
                (e = (function (e) {
                  return e.replace(me, "");
                })((e = e.replace(ve, "")))),
                t
              )),
                (n = Se(fe, e)),
                (a.label = 1);
            case 1:
              a.trys.push([1, 10, 11, 12]), (i = o(n)), (u = i.next()), (a.label = 2);
            case 2:
              return u.done
                ? [3, 9]
                : ((c = u.value),
                  (s = he(
                    c
                      .substring(7)
                      .trim()
                      .replace(/;$/, "")
                      .replace(/screen$/, "")
                  )),
                  (l = ie(t, s)),
                  (d = void 0),
                  r.has(l) ? ((d = r.get(l)), [3, 7]) : [3, 3]);
            case 3:
              return a.trys.push([3, 6, , 7]), [4, Fr(l)];
            case 4:
              return (d = a.sent()), r.set(l, d), [4, jr(d, pe(l), r)];
            case 5:
              return (d = a.sent()), [3, 7];
            case 6:
              return a.sent(), (d = ""), [3, 7];
            case 7:
              (e = e.split(c).join(d)), (a.label = 8);
            case 8:
              return (u = i.next()), [3, 2];
            case 9:
              return [3, 12];
            case 10:
              return (
                (f = a.sent()),
                (h = {
                  error: f,
                }),
                [3, 12]
              );
            case 11:
              try {
                u && !u.done && (p = i.return) && p.call(i);
              } finally {
                if (h) throw h.error;
              }
              return [7];
            case 12:
              return [2, (e = e.trim())];
          }
        });
      })
    );
  }
  var Br,
    qr,
    Ur = [],
    Wr = new Map();

  function Gr(e) {
    S &&
      F(e.querySelectorAll(":not(:defined)"), function (e) {
        var t = e.tagName.toLowerCase();
        if (!t.includes("-")) {
          var r = e.getAttribute("is");
          if (!r) return;
          t = r;
        }
        Wr.has(t) ||
          (Wr.set(t, new Set()),
          (function (e) {
            return n(this, void 0, void 0, function () {
              return a(this, function (t) {
                return [
                  2,
                  new Promise(function (t) {
                    if (window.customElements && "function" == typeof customElements.whenDefined)
                      customElements.whenDefined(e).then(function () {
                        return t();
                      });
                    else if (Hr)
                      $r.set(e, t),
                        document.dispatchEvent(
                          new CustomEvent("__darkreader__addUndefinedResolver", {
                            detail: {
                              tag: e,
                            },
                          })
                        );
                    else {
                      var r = function () {
                        var n = Wr.get(e);
                        n && n.size > 0 && (n.values().next().value.matches(":defined") ? t() : requestAnimationFrame(r));
                      };
                      requestAnimationFrame(r);
                    }
                  }),
                ];
              });
            });
          })(t).then(function () {
            if (qr) {
              var e = Wr.get(t);
              Wr.delete(t), qr(Array.from(e));
            }
          })),
          Wr.get(t).add(e);
      });
  }
  var Hr = !1;
  document.addEventListener("__darkreader__inlineScriptsAllowed", function () {
    Hr = !0;
  });
  var $r = new Map();

  function zr(e) {
    ((Hr = !0), $r.has(e.detail.tag)) && $r.get(e.detail.tag)();
  }

  function Qr(e, t, r) {
    Kr();
    var n = new Set(e),
      a = new WeakMap(),
      o = new WeakMap();

    function i(e) {
      a.set(e, e.previousElementSibling), o.set(e, e.nextElementSibling);
    }

    function u(e) {
      var r = e.createdStyles,
        u = e.removedStyles,
        c = e.movedStyles;
      r.forEach(function (e) {
        return i(e);
      }),
        c.forEach(function (e) {
          return i(e);
        }),
        u.forEach(function (e) {
          return (t = e), a.delete(t), void o.delete(t);
          var t;
        }),
        r.forEach(function (e) {
          return n.add(e);
        }),
        u.forEach(function (e) {
          return n.delete(e);
        }),
        r.size + u.size + c.size > 0 &&
          t({
            created: Array.from(r),
            removed: Array.from(u),
            moved: Array.from(c),
            updated: [],
          });
    }

    function c(e) {
      var t = e.additions,
        r = e.moves,
        n = e.deletions,
        a = new Set(),
        o = new Set(),
        i = new Set();
      t.forEach(function (e) {
        return Ar(e).forEach(function (e) {
          return a.add(e);
        });
      }),
        n.forEach(function (e) {
          return Ar(e).forEach(function (e) {
            return o.add(e);
          });
        }),
        r.forEach(function (e) {
          return Ar(e).forEach(function (e) {
            return i.add(e);
          });
        }),
        u({
          createdStyles: a,
          removedStyles: o,
          movedStyles: i,
        }),
        t.forEach(function (e) {
          G(e, f), Gr(e);
        });
    }

    function s(e) {
      var t = new Set(Ar(e)),
        r = new Set(),
        i = new Set(),
        c = new Set();
      t.forEach(function (e) {
        n.has(e) || r.add(e);
      }),
        n.forEach(function (e) {
          t.has(e) || i.add(e);
        }),
        t.forEach(function (e) {
          var t;
          r.has(e) || i.has(e) || ((t = e).previousElementSibling === a.get(t) && t.nextElementSibling === o.get(t)) || c.add(e);
        }),
        u({
          createdStyles: r,
          removedStyles: i,
          movedStyles: c,
        }),
        G(e, f),
        Gr(e);
    }

    function l(e) {
      var r = new Set(),
        n = new Set();
      e.forEach(function (e) {
        var t = e.target;
        t.isConnected && (Vr(t) ? r.add(t) : t instanceof HTMLLinkElement && t.disabled && n.add(t));
      }),
        r.size + n.size > 0 &&
          t({
            updated: Array.from(r),
            created: [],
            removed: Array.from(n),
            moved: [],
          });
    }

    function d(e) {
      var t = re(e, {
          onMinorMutations: c,
          onHugeMutations: s,
        }),
        r = new MutationObserver(l);
      r.observe(e, {
        attributes: !0,
        attributeFilter: ["rel", "disabled", "media", "href"],
        subtree: !0,
      }),
        Ur.push(t, r),
        Br.add(e);
    }

    function f(e) {
      var t = e.shadowRoot;
      null == t || Br.has(t) || (d(t), r(t));
    }
    e.forEach(i),
      d(document),
      G(document.documentElement, f),
      (qr = function (e) {
        var r = [];
        e.forEach(function (e) {
          return j(r, Ar(e.shadowRoot));
        }),
          t({
            created: r,
            updated: [],
            removed: [],
            moved: [],
          }),
          e.forEach(function (e) {
            var t = e.shadowRoot;
            null != t && (f(e), G(t, f), Gr(t));
          });
      }),
      document.addEventListener("__darkreader__isDefined", zr),
      Gr(document);
  }

  function Kr() {
    Ur.forEach(function (e) {
      return e.disconnect();
    }),
      Ur.splice(0, Ur.length),
      (Br = new WeakSet()),
      (qr = null),
      Wr.clear(),
      document.removeEventListener("__darkreader__isDefined", zr);
  }
  var Yr = new WeakMap(),
    Xr = new WeakSet();

  function Zr(e) {
    var t = !1;
    return {
      render: function (r, n) {
        e.adoptedStyleSheets.forEach(function (a) {
          if (!Xr.has(a)) {
            var o = a.rules,
              c = new CSSStyleSheet();
            Rr().modifySheet({
              prepareSheet: function () {
                for (var t = c.cssRules.length - 1; t >= 0; t--) c.deleteRule(t);
                return (
                  (function (t, r) {
                    var n = u([], i(e.adoptedStyleSheets), !1),
                      a = n.indexOf(t),
                      o = n.indexOf(r);
                    a !== o - 1 && (o >= 0 && n.splice(o, 1), n.splice(a + 1, 0, r), (e.adoptedStyleSheets = n));
                  })(a, c),
                  Yr.set(a, c),
                  Xr.add(c),
                  c
                );
              },
              sourceCSSRules: o,
              theme: r,
              ignoreImageAnalysis: n,
              force: !1,
              isAsyncCancelled: function () {
                return t;
              },
            });
          }
        });
      },
      destroy: function () {
        t = !0;
        var r = u([], i(e.adoptedStyleSheets), !1);
        e.adoptedStyleSheets.forEach(function (e) {
          if (Xr.has(e)) {
            var t = r.indexOf(e);
            t >= 0 && r.splice(t, 1), Yr.delete(e), Xr.delete(e);
          }
        }),
          (e.adoptedStyleSheets = r);
      },
    };
  }

  function Jr(e) {
    document.dispatchEvent(new CustomEvent("__darkreader__inlineScriptsAllowed"));
    var t = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "addRule"),
      r = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "insertRule"),
      n = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "deleteRule"),
      a = Object.getOwnPropertyDescriptor(CSSStyleSheet.prototype, "removeRule"),
      o = e ? Object.getOwnPropertyDescriptor(Document.prototype, "styleSheets") : null,
      c = ["baidu.com", "baike.baidu.com", "ditu.baidu.com", "map.baidu.com", "maps.baidu.com", "haokan.baidu.com", "pan.baidu.com", "passport.baidu.com", "tieba.baidu.com", "www.baidu.com"].includes(location.hostname),
      s = c ? Object.getOwnPropertyDescriptor(Element.prototype, "getElementsByTagName") : null,
      l = function () {
        Object.defineProperty(CSSStyleSheet.prototype, "addRule", t),
          Object.defineProperty(CSSStyleSheet.prototype, "insertRule", r),
          Object.defineProperty(CSSStyleSheet.prototype, "deleteRule", n),
          Object.defineProperty(CSSStyleSheet.prototype, "removeRule", a),
          document.removeEventListener("__darkreader__cleanUp", l),
          document.removeEventListener("__darkreader__addUndefinedResolver", d),
          e && Object.defineProperty(Document.prototype, "styleSheets", o),
          c && Object.defineProperty(Element.prototype, "getElementsByTagName", s);
      },
      d = function (e) {
        customElements.whenDefined(e.detail.tag).then(function () {
          document.dispatchEvent(
            new CustomEvent("__darkreader__isDefined", {
              detail: {
                tag: e.detail.tag,
              },
            })
          );
        });
      };
    document.addEventListener("__darkreader__cleanUp", l), document.addEventListener("__darkreader__addUndefinedResolver", d);
    var f = new Event("__darkreader__updateSheet");
    Object.defineProperty(
      CSSStyleSheet.prototype,
      "addRule",
      Object.assign({}, t, {
        value: function (e, r, n) {
          return t.value.call(this, e, r, n), this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(f), -1;
        },
      })
    ),
      Object.defineProperty(
        CSSStyleSheet.prototype,
        "insertRule",
        Object.assign({}, r, {
          value: function (e, t) {
            var n = r.value.call(this, e, t);
            return this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(f), n;
          },
        })
      ),
      Object.defineProperty(
        CSSStyleSheet.prototype,
        "deleteRule",
        Object.assign({}, n, {
          value: function (e) {
            n.value.call(this, e), this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(f);
          },
        })
      ),
      Object.defineProperty(
        CSSStyleSheet.prototype,
        "removeRule",
        Object.assign({}, a, {
          value: function (e) {
            a.value.call(this, e), this.ownerNode && !this.ownerNode.classList.contains("darkreader") && this.ownerNode.dispatchEvent(f);
          },
        })
      ),
      e &&
        Object.defineProperty(
          Document.prototype,
          "styleSheets",
          Object.assign({}, o, {
            get: function () {
              var e = this,
                t = function () {
                  var t = u([], i(o.get.call(e)), !1).filter(function (e) {
                    return !e.ownerNode.classList.contains("darkreader");
                  });
                  return (
                    (t.item = function (e) {
                      return t[e];
                    }),
                    Object.setPrototypeOf(t, StyleSheetList.prototype)
                  );
                },
                r = t();
              return new Proxy(r, {
                get: function (e, r) {
                  return t()[r];
                },
              });
            },
          })
        ),
      c &&
        Object.defineProperty(
          Element.prototype,
          "getElementsByTagName",
          Object.assign({}, s, {
            value: function (e) {
              var t = this;
              if ("style" !== e) return s.value.call(this, e);
              var r = function () {
                  var r = s.value.call(t, e);
                  return Object.setPrototypeOf(
                    u([], i(r), !1).filter(function (e) {
                      return !e.classList.contains("darkreader");
                    }),
                    NodeList.prototype
                  );
                },
                n = r();
              return new Proxy(n, {
                get: function (e, t) {
                  return r()[Number(t) || t];
                },
              });
            },
          })
        );
  }
  var en = (function () {
      if ("randomUUID" in crypto) {
        var e = crypto.randomUUID();
        return e.substring(0, 8) + e.substring(9, 13) + e.substring(14, 18) + e.substring(19, 23) + e.substring(24);
      }
      return Array.from(crypto.getRandomValues(new Uint8Array(16)))
        .map(function (e) {
          return ((t = e) < 16 ? "0" : "") + t.toString(16);
          var t;
        })
        .join("");
    })(),
    tn = new Map(),
    rn = [],
    nn = null,
    an = null,
    on = null,
    un = null,
    cn = null;

  function sn(e, t) {
    void 0 === t && (t = document.head || document);
    var r = t.querySelector(".".concat(e));
    return r || ((r = document.createElement("style")).classList.add("darkreader"), r.classList.add(e), (r.media = "screen"), (r.textContent = "")), r;
  }
  var ln = new Map();

  function dn(e, t) {
    ln.has(t) && ln.get(t).stop(), ln.set(t, W(e, "parent"));
  }

  function fn() {
    var e = sn("darkreader--fallback", document);
    (e.textContent = It(nn, {
      strict: !0,
    })),
      document.head.insertBefore(e, document.head.firstChild),
      dn(e, "fallback");
    var t = sn("darkreader--user-agent");
    (t.textContent = Dt(nn, on, nn.styleSystemControls)), document.head.insertBefore(t, e.nextSibling), dn(t, "user-agent");
    var n,
      a,
      o = sn("darkreader--text");
    nn.useFont || nn.textStroke > 0
      ? (o.textContent =
          ((n = nn),
          (a = []).push('*:not(pre, pre *, code, .far, .fa, .glyphicon, [class*="vjs-"], .fab, .fa-github, .fas, .material-icons, .icofont, .typcn, mu, [class*="mu-"], .glyphicon, .icon) {'),
          n.useFont && n.fontFamily && a.push("  font-family: ".concat(n.fontFamily, " !important;")),
          n.textStroke > 0 && (a.push("  -webkit-text-stroke: ".concat(n.textStroke, "px !important;")), a.push("  text-stroke: ".concat(n.textStroke, "px !important;"))),
          a.push("}"),
          a.join("\n")))
      : (o.textContent = ""),
      document.head.insertBefore(o, e.nextSibling),
      dn(o, "text");
    var i = sn("darkreader--invert");
    an && Array.isArray(an.invert) && an.invert.length > 0
      ? (i.textContent = [
          "".concat(an.invert.join(", "), " {"),
          "    filter: ".concat(
            dt(
              r(r({}, nn), {
                contrast: 0 === nn.mode ? nn.contrast : Ue(nn.contrast - 10, 0, 100),
              })
            ),
            " !important;"
          ),
          "}",
        ].join("\n"))
      : (i.textContent = ""),
      document.head.insertBefore(i, o.nextSibling),
      dn(i, "invert");
    var u = sn("darkreader--inline");
    (u.textContent = hr()), document.head.insertBefore(u, i.nextSibling), dn(u, "inline");
    var c = sn("darkreader--override");
    (c.textContent = an && an.css ? vn(an.css) : ""), document.head.appendChild(c), dn(c, "override");
    var s = sn("darkreader--variables"),
      l = Pt(nn),
      d = nn.darkSchemeBackgroundColor,
      f = nn.darkSchemeTextColor,
      h = nn.lightSchemeBackgroundColor,
      p = nn.lightSchemeTextColor,
      v = nn.mode,
      m = 0 === v ? h : d,
      g = 0 === v ? p : f;
    (m = rt(Ee(m), nn)),
      (g = ut(Ee(g), nn)),
      (s.textContent = [":root {", "   --darkreader-neutral-background: ".concat(m, ";"), "   --darkreader-neutral-text: ".concat(g, ";"), "   --darkreader-selection-background: ".concat(l.backgroundColorSelection, ";"), "   --darkreader-selection-text: ".concat(l.foregroundColorSelection, ";"), "}"].join("\n")),
      document.head.insertBefore(s, u.nextSibling),
      dn(s, "variables");
    var b = sn("darkreader--root-vars");
    document.head.insertBefore(b, s.nextSibling);
    var y = !(an && an.disableStyleSheetsProxy),
      S = (function (e, t) {
        void 0 === t && (t = document.head || document);
        var r = t.querySelector(".".concat(e));
        return r || ((r = document.createElement("script")).classList.add("darkreader"), r.classList.add(e)), r;
      })("darkreader--proxy");
    S.append("(".concat(Jr, ")(").concat(y, ")")), document.head.insertBefore(S, b.nextSibling), S.remove();
  }
  var hn = new Set();

  function pn(e) {
    var t = sn("darkreader--inline", e);
    (t.textContent = hr()), e.insertBefore(t, e.firstChild);
    var n = sn("darkreader--override", e);
    (n.textContent = an && an.css ? vn(an.css) : ""), e.insertBefore(n, t.nextSibling);
    var a = sn("darkreader--invert", e);
    an && Array.isArray(an.invert) && an.invert.length > 0
      ? (a.textContent = [
          "".concat(an.invert.join(", "), " {"),
          "    filter: ".concat(
            dt(
              r(r({}, nn), {
                contrast: 0 === nn.mode ? nn.contrast : Ue(nn.contrast - 10, 0, 100),
              })
            ),
            " !important;"
          ),
          "}",
        ].join("\n"))
      : (a.textContent = ""),
      e.insertBefore(a, n.nextSibling),
      hn.add(e);
  }

  function vn(e) {
    return e.replace(/\${(.+?)}/g, function (e, t) {
      var r = Ee(t);
      return r ? Xe(r, nn, Ze) : t;
    });
  }

  function mn() {
    var e = document.querySelector(".darkreader--fallback");
    e && (e.textContent = "");
  }
  var gn = 0,
    bn = new Set();

  function yn(e) {
    var t = ++gn;
    var r = Ir(e, {
      update: function () {
        var e = r.details({
          secondRound: !0,
        });
        e && (Wt.addRulesForMatching(e.rules), Wt.matchVariablesAndDependants(), r.render(nn, un));
      },
      loadingStart: function () {
        if (!H() || !xn) {
          bn.add(t), "Current amount of styles loading: ".concat(bn.size);
          var e = document.querySelector(".darkreader--fallback");
          e.textContent ||
            (e.textContent = It(nn, {
              strict: !1,
            }));
        }
      },
      loadingEnd: function () {
        bn.delete(t), "Removed loadingStyle ".concat(t, ", now awaiting: ").concat(bn.size), 0 === bn.size && H() && mn();
      },
    });
    return tn.set(e, r), r;
  }

  function Sn(e) {
    var t = tn.get(e);
    t && (t.destroy(), tn.delete(e));
  }
  var _n = B(function (e) {
      tn.forEach(function (e) {
        return e.render(nn, un);
      }),
        rn.forEach(function (e) {
          return e.render(nn, un);
        }),
        e && e();
    }),
    kn = function () {
      _n.cancel();
    };

  function wn() {
    0 !== bn.size || mn();
  }
  var En,
    Cn = null,
    xn = !document.hidden;

  function Tn() {
    document.removeEventListener("visibilitychange", Cn), (Cn = null);
  }

  function Rn() {
    function e() {
      var e, t;
      !(function () {
        kn();
        var e = Ar(document)
          .filter(function (e) {
            return !tn.has(e);
          })
          .map(function (e) {
            return yn(e);
          });
        e
          .map(function (e) {
            return e.details({
              secondRound: !1,
            });
          })
          .filter(function (e) {
            return e && e.rules.length > 0;
          })
          .forEach(function (e) {
            Wt.addRulesForMatching(e.rules);
          }),
          Wt.matchVariablesAndDependants(),
          Wt.setOnRootVariableChange(function () {
            Wt.putRootVars(document.head.querySelector(".darkreader--root-vars"), nn);
          }),
          Wt.putRootVars(document.head.querySelector(".darkreader--root-vars"), nn),
          tn.forEach(function (e) {
            return e.render(nn, un);
          }),
          0 === bn.size && mn(),
          e.forEach(function (e) {
            return e.watch();
          });
        var t = (function (e) {
          for (var t = [], r = 0, n = e.length; r < n; r++) t.push(e[r]);
          return t;
        })(document.querySelectorAll(fr));
        G(document.documentElement, function (e) {
          pn(e.shadowRoot);
          var r = e.shadowRoot.querySelectorAll(fr);
          r.length > 0 && j(t, r);
        }),
          t.forEach(function (e) {
            return Sr(e, nn, cn, un);
          }),
          Vn(document);
      })(),
        Qr(
          Array.from(tn.keys()),
          function (e) {
            var t = e.created,
              r = e.updated,
              n = e.removed,
              a = e.moved,
              o = n,
              i = t
                .concat(r)
                .concat(a)
                .filter(function (e) {
                  return !tn.has(e);
                }),
              u = a.filter(function (e) {
                return tn.has(e);
              });
            o.forEach(function (e) {
              return Sn(e);
            });
            var c = i.map(function (e) {
              return yn(e);
            });
            c
              .map(function (e) {
                return e.details({
                  secondRound: !1,
                });
              })
              .filter(function (e) {
                return e && e.rules.length > 0;
              })
              .forEach(function (e) {
                Wt.addRulesForMatching(e.rules);
              }),
              Wt.matchVariablesAndDependants(),
              c.forEach(function (e) {
                return e.render(nn, un);
              }),
              c.forEach(function (e) {
                return e.watch();
              }),
              u.forEach(function (e) {
                return tn.get(e).restore();
              });
          },
          function (e) {
            pn(e), Vn(e);
          }
        ),
        (e = function (e) {
          Sr(e, nn, cn, un), e === document.documentElement && (e.getAttribute("style") || "").includes("--") && (Wt.matchVariablesAndDependants(), Wt.putRootVars(document.head.querySelector(".darkreader--root-vars"), nn));
        }),
        (t = function (e) {
          pn(e);
          var t = e.querySelectorAll(fr);
          t.length > 0 &&
            F(t, function (e) {
              return Sr(e, nn, cn, un);
            });
        }),
        mr(document, e, t),
        G(document.documentElement, function (r) {
          mr(r.shadowRoot, e, t);
        }),
        z(wn);
    }
    var t, r, n, a;
    fn(),
      document.hidden && !nn.immediateModify
        ? ((t = e),
          (r = Boolean(Cn)),
          (Cn = function () {
            document.hidden || (Tn(), t(), (xn = !0));
          }),
          r || document.addEventListener("visibilitychange", Cn))
        : e(),
      (n = nn),
      (a = document.querySelector(kr))
        ? Cr(a, n)
        : (Er && Er.disconnect(),
          (Er = new MutationObserver(function (e) {
            e: for (var t = 0; t < e.length; t++)
              for (var r = e[t].addedNodes, a = 0; a < r.length; a++) {
                var o = r[a];
                if (o instanceof HTMLMetaElement && o.name === _r) {
                  Er.disconnect(), (Er = null), Cr(o, n);
                  break e;
                }
              }
          })).observe(document.head, {
            childList: !0,
          }));
  }

  function Vn(e) {
    try {
      if (Array.isArray(e.adoptedStyleSheets) && e.adoptedStyleSheets.length > 0) {
        var t = Zr(e);
        rn.push(t), t.render(nn, un);
      }
    } catch (e) {}
  }

  function An() {
    tn.forEach(function (e) {
      return e.pause();
    }),
      F(ln.values(), function (e) {
        return e.stop();
      }),
      ln.clear(),
      Kr(),
      pr.forEach(function (e) {
        return e.disconnect();
      }),
      vr.forEach(function (e) {
        return e.disconnect();
      }),
      pr.clear(),
      vr.clear(),
      Q(wn),
      Y.clear();
  }

  function Mn() {
    if (document.querySelector('meta[name="darkreader-lock"]')) return !0;
    var e,
      t = document.querySelector('meta[name="darkreader"]');
    return t
      ? t.content !== en
      : (((e = document.createElement("meta")).name = "darkreader"),
        (e.content = en),
        document.head.appendChild(e),
        (En = new MutationObserver(function () {
          document.querySelector('meta[name="darkreader-lock"]') && (En.disconnect(), On());
        })).observe(document.head, {
          childList: !0,
          subtree: !0,
        }),
        !1);
  }

  function Ln(e, t, r) {
    if (
      ((nn = e),
      (an = t) ? ((un = Array.isArray(an.ignoreImageAnalysis) ? an.ignoreImageAnalysis : []), (cn = Array.isArray(an.ignoreInlineStyle) ? an.ignoreInlineStyle : [])) : ((un = []), (cn = [])),
      nn.immediateModify &&
        (H = function () {
          return !0;
        }),
      (on = r),
      document.head)
    ) {
      if (Mn()) return;
      document.documentElement.setAttribute("data-darkreader-mode", "dynamic"), document.documentElement.setAttribute("data-darkreader-scheme", nn.mode ? "dark" : "dimmed"), Rn();
    } else {
      if (!h) {
        var n = sn("darkreader--fallback");
        document.documentElement.appendChild(n),
          (n.textContent = It(nn, {
            strict: !0,
          }));
      }
      var a = new MutationObserver(function () {
        if (document.head) {
          if ((a.disconnect(), Mn())) return void On();
          Rn();
        }
      });
      a.observe(document, {
        childList: !0,
        subtree: !0,
      });
    }
  }

  function On() {
    document.documentElement.removeAttribute("data-darkreader-mode"),
      document.documentElement.removeAttribute("data-darkreader-scheme"),
      Wt.clear(),
      ne.clear(),
      Tn(),
      kn(),
      An(),
      Ut(),
      ke.clear(),
      we.clear(),
      U(document.querySelector(".darkreader--fallback")),
      document.head &&
        (!(function () {
          Er && (Er.disconnect(), (Er = null));
          var e = document.querySelector(kr);
          e && wr && (e.content = wr);
        })(),
        U(document.head.querySelector(".darkreader--user-agent")),
        U(document.head.querySelector(".darkreader--text")),
        U(document.head.querySelector(".darkreader--invert")),
        U(document.head.querySelector(".darkreader--inline")),
        U(document.head.querySelector(".darkreader--override")),
        U(document.head.querySelector(".darkreader--variables")),
        U(document.head.querySelector(".darkreader--root-vars")),
        U(document.head.querySelector('meta[name="darkreader"]')),
        document.dispatchEvent(new CustomEvent("__darkreader__cleanUp")),
        U(document.head.querySelector(".darkreader--proxy"))),
      hn.forEach(function (e) {
        U(e.querySelector(".darkreader--inline")), U(e.querySelector(".darkreader--override"));
      }),
      hn.clear(),
      F(tn.keys(), function (e) {
        return Sn(e);
      }),
      bn.clear(),
      Pr.clear(),
      F(document.querySelectorAll(".darkreader"), U),
      rn.forEach(function (e) {
        e.destroy();
      }),
      rn.splice(0),
      En && En.disconnect();
  }
  var Dn = /url\(\"(blob\:.*?)\"\)/g;

  function Pn(e) {
    return n(this, void 0, void 0, function () {
      var t, r;
      return a(this, function (n) {
        switch (n.label) {
          case 0:
            return (
              (t = []),
              Se(Dn, e, 1).forEach(function (e) {
                var r = w(e);
                t.push(r);
              }),
              [4, Promise.all(t)]
            );
          case 1:
            return (
              (r = n.sent()),
              [
                2,
                e.replace(Dn, function () {
                  return 'url("'.concat(r.shift(), '")');
                }),
              ]
            );
        }
      });
    });
  }

  function In() {
    return n(this, void 0, void 0, function () {
      function e(e, r) {
        var n = document.querySelector(e);
        n && n.textContent && (t.push("/* ".concat(r, " */")), t.push(n.textContent), t.push(""));
      }
      var t, r, n, o, i;
      return a(this, function (a) {
        switch (a.label) {
          case 0:
            return (
              (t = [
                '/*\n                        _______\n                       /       \\\n                      .==.    .==.\n                     ((  ))==((  ))\n                    / "=="    "=="\\\n                   /____|| || ||___\\\n       ________     ____    ________  ___    ___\n       |  ___  \\   /    \\   |  ___  \\ |  |  /  /\n       |  |  \\  \\ /  /\\  \\  |  |  \\  \\|  |_/  /\n       |  |   )  /  /__\\  \\ |  |__/  /|  ___  \\\n       |  |__/  /  ______  \\|  ____  \\|  |  \\  \\\n_______|_______/__/ ____ \\__\\__|___\\__\\__|___\\__\\____\n|  ___  \\ |  ____/ /    \\   |  ___  \\ |  ____|  ___  \\\n|  |  \\  \\|  |___ /  /\\  \\  |  |  \\  \\|  |___|  |  \\  \\\n|  |__/  /|  ____/  /__\\  \\ |  |   )  |  ____|  |__/  /\n|  ____  \\|  |__/  ______  \\|  |__/  /|  |___|  ____  \\\n|__|   \\__\\____/__/      \\__\\_______/ |______|__|   \\__\\\n                https://darkreader.org\n*/\n\n/*! Dark reader generated CSS | Licensed under MIT https://github.com/darkreader/darkreader/blob/main/LICENSE */\n',
              ]),
              e(".darkreader--fallback", "Fallback Style"),
              e(".darkreader--user-agent", "User-Agent Style"),
              e(".darkreader--text", "Text Style"),
              e(".darkreader--invert", "Invert Style"),
              e(".darkreader--variables", "Variables Style"),
              (r = []),
              document.querySelectorAll(".darkreader--sync").forEach(function (e) {
                F(e.sheet.cssRules, function (e) {
                  e && e.cssText && r.push(e.cssText);
                });
              }),
              r.length
                ? ((n = (function (e) {
                    function t(e) {
                      return e.replace(/^\s+/, "");
                    }

                    function r(e) {
                      return 0 === e ? "" : " ".repeat(4 * e);
                    }
                    if (e.length < 5e4) for (var n = /[^{}]+{\s*}/; n.test(e); ) e = e.replace(n, "");
                    for (
                      var a = e
                          .replace(/\s{2,}/g, " ")
                          .replace(/\{/g, "{\n")
                          .replace(/\}/g, "\n}\n")
                          .replace(/\;(?![^\(|\"]*(\)|\"))/g, ";\n")
                          .replace(/\,(?![^\(|\"]*(\)|\"))/g, ",\n")
                          .replace(/\n\s*\n/g, "\n")
                          .split("\n"),
                        o = 0,
                        i = [],
                        u = 0,
                        c = a.length;
                      u < c;
                      u++
                    ) {
                      var s = "".concat(a[u], "\n");
                      s.includes("{") ? i.push(r(o++) + t(s)) : s.includes("}") ? i.push(r(--o) + t(s)) : i.push(r(o) + t(s));
                    }
                    return i.join("").trim();
                  })(r.join("\n"))),
                  t.push("/* Modified CSS */"),
                  (i = (o = t).push),
                  [4, Pn(n)])
                : [3, 2]
            );
          case 1:
            i.apply(o, [a.sent()]), t.push(""), (a.label = 2);
          case 2:
            return e(".darkreader--override", "Override Style"), [2, t.join("\n")];
        }
      });
    });
  }
  var Nn = !1,
    Fn = (function () {
      try {
        return window.self !== window.top;
      } catch (e) {
        return console.warn(e), !0;
      }
    })();

  function jn(e, t) {
    void 0 === e && (e = {}), void 0 === t && (t = null);
    var n = r(r({}, N), e);
    if (n.engine !== R.dynamicTheme) throw new Error("Theme engine is not supported.");
    Ln(n, t, Fn), (Nn = !0);
  }

  function Bn() {
    On(), (Nn = !1);
  }
  var qn = matchMedia("(prefers-color-scheme: dark)"),
    Un = {
      themeOptions: null,
      fixes: null,
    };

  function Wn() {
    qn.matches ? jn(Un.themeOptions, Un.fixes) : Bn();
  }
  var Gn = function (e) {
    x = e || C;
  };
  (e.auto = function (e, t) {
    void 0 === e && (e = {}),
      void 0 === t && (t = null),
      e
        ? ((Un = {
            themeOptions: e,
            fixes: t,
          }),
          Wn(),
          y ? qn.addEventListener("change", Wn) : qn.addListener(Wn))
        : (y ? qn.removeEventListener("change", Wn) : qn.removeListener(Wn), Bn());
  }),
    (e.disable = Bn),
    (e.enable = jn),
    (e.exportGeneratedCSS = function () {
      return n(this, void 0, void 0, function () {
        return a(this, function (e) {
          switch (e.label) {
            case 0:
              return [4, In()];
            case 1:
              return [2, e.sent()];
          }
        });
      });
    }),
    (e.isEnabled = function () {
      return Nn;
    }),
    (e.setFetchMethod = Gn),
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
});
//# sourceMappingURL=/sm/4377abaf3b88f52af0bf84c492d3b422908537e18a85eca05a6cb79c885a60b9.map

addEventListener("load", () => {
  document.documentElement.getAttribute("theme") == "dark" ? DarkReader.enable() : DarkReader.disable();

  window.addEventListener("message", (e) => {
    if (e.data == "DarkReader-enable") {
      DarkReader.enable();
    } else if (e.data == "DarkReader-desable") {
      DarkReader.disable();
    }
  });
});
