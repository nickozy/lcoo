/*! For license information please see main.js.LICENSE.txt */
(() => {
  "use strict";
  var t = {
    d: (e, i) => {
      for (var n in i)
        t.o(i, n) &&
          !t.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: i[n] });
    },
  };
  (t.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t) {
      if ("object" == typeof window) return window;
    }
  })()),
    (t.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (t.r = (t) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    });
  var e = {};
  function i(t) {
    return (
      (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      i(t)
    );
  }
  function n(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function s(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  function o(t, e, i) {
    return e && s(t.prototype, e), i && s(t, i), t;
  }
  function r(t, e, i) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = i),
      t
    );
  }
  function l(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
          var i = [],
            n = !0,
            s = !1,
            o = void 0;
          try {
            for (
              var r, l = t[Symbol.iterator]();
              !(n = (r = l.next()).done) &&
              (i.push(r.value), !e || i.length !== e);
              n = !0
            );
          } catch (t) {
            (s = !0), (o = t);
          } finally {
            try {
              n || null == l.return || l.return();
            } finally {
              if (s) throw o;
            }
          }
          return i;
        }
      })(t, e) ||
      a(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function a(t, e) {
    if (t) {
      if ("string" == typeof t) return c(t, e);
      var i = Object.prototype.toString.call(t).slice(8, -1);
      return (
        "Object" === i && t.constructor && (i = t.constructor.name),
        "Map" === i || "Set" === i
          ? Array.from(t)
          : "Arguments" === i ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
          ? c(t, e)
          : void 0
      );
    }
  }
  function c(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
    return n;
  }
  t.r(e),
    t.d(e, {
      Filter: () => ne,
      Load: () => y,
      Map: () => re,
      Nav: () => ie,
      Scroll: () => Ot,
      Scrollbar: () => te,
      Video: () => se,
      Videomain: () => oe,
    });
  var h = (function () {
      function t(e) {
        n(this, t),
          (this.mAttr = "data-" + e.dataName),
          (this.mCaptureEvents = ["mouseenter", "mouseleave"]),
          (this.el = e.el);
      }
      return (
        o(t, [
          {
            key: "mInit",
            value: function (t) {
              var e = this;
              (this.modules = t),
                (this.mCheckEventTarget = this.mCheckEventTarget.bind(this)),
                this.events &&
                  Object.keys(this.events).forEach(function (t) {
                    return e.mAddEvent(t);
                  });
            },
          },
          {
            key: "mUpdate",
            value: function (t) {
              this.modules = t;
            },
          },
          {
            key: "mDestroy",
            value: function () {
              var t = this;
              this.events &&
                Object.keys(this.events).forEach(function (e) {
                  return t.mRemoveEvent(e);
                });
            },
          },
          {
            key: "mAddEvent",
            value: function (t) {
              var e = !!this.mCaptureEvents.includes(t);
              this.el.addEventListener(t, this.mCheckEventTarget, e);
            },
          },
          {
            key: "mRemoveEvent",
            value: function (t) {
              var e = !!this.mCaptureEvents.includes(t);
              this.el.removeEventListener(t, this.mCheckEventTarget, e);
            },
          },
          {
            key: "mCheckEventTarget",
            value: function (t) {
              var e = this.events[t.type];
              if ("string" == typeof e) this[e](t);
              else {
                var i = "[" + this.mAttr + "]",
                  n = t.target;
                if (this.mCaptureEvents.includes(t.type))
                  n.matches(i) && this.mCallEventMethod(t, e, n);
                else
                  for (
                    ;
                    n &&
                    n !== document &&
                    (!n.matches(i) ||
                      "undefined" == this.mCallEventMethod(t, e, n));

                  )
                    n = n.parentNode;
              }
            },
          },
          {
            key: "mCallEventMethod",
            value: function (t, e, i) {
              var n = i.getAttribute(this.mAttr);
              if (e.hasOwnProperty(n)) {
                var s = e[n];
                t.hasOwnProperty("currentTarget") ||
                  Object.defineProperty(t, "currentTarget", { value: i }),
                  t.hasOwnProperty("curTarget") ||
                    Object.defineProperty(t, "curTarget", { value: i }),
                  this[s](t);
              }
            },
          },
          {
            key: "$",
            value: function (t, e) {
              var n,
                s = [t.indexOf("."), t.indexOf("#"), t.indexOf("[")].filter(
                  function (t) {
                    return -1 != t;
                  }
                ),
                o = !1,
                r = t,
                l = "",
                h = this.el;
              return (
                s.length &&
                  ((o = Math.min.apply(
                    Math,
                    (function (t) {
                      if (Array.isArray(t)) return c(t);
                    })((n = s)) ||
                      (function (t) {
                        if (
                          "undefined" != typeof Symbol &&
                          Symbol.iterator in Object(t)
                        )
                          return Array.from(t);
                      })(n) ||
                      a(n) ||
                      (function () {
                        throw new TypeError(
                          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                        );
                      })()
                  )),
                  (r = t.slice(0, o)),
                  (l = t.slice(o))),
                "object" == i(e) && (h = e),
                h.querySelectorAll("[" + this.mAttr + "=" + r + "]" + l)
              );
            },
          },
          {
            key: "parent",
            value: function (t, e) {
              for (
                var i = "[" + this.mAttr + "=" + t + "]", n = e.parentNode;
                n && n !== document;

              ) {
                if (n.matches(i)) return n;
                n = n.parentNode;
              }
            },
          },
          {
            key: "getData",
            value: function (t, e) {
              return (e || this.el).getAttribute(this.mAttr + "-" + t);
            },
          },
          {
            key: "setData",
            value: function (t, e, i) {
              return (i || this.el).setAttribute(this.mAttr + "-" + t, e);
            },
          },
          {
            key: "call",
            value: function (t, e, i, n) {
              var s = this;
              e && !i && ((i = e), (e = !1)),
                this.modules[i] &&
                  (n
                    ? this.modules[i][n] && this.modules[i][n][t](e)
                    : Object.keys(this.modules[i]).forEach(function (n) {
                        s.modules[i][n][t](e);
                      }));
            },
          },
          {
            key: "on",
            value: function (t, e, i, n) {
              var s = this;
              this.modules[e] &&
                (n
                  ? this.modules[e][n].el.addEventListener(t, function (t) {
                      return i(t);
                    })
                  : Object.keys(this.modules[e]).forEach(function (n) {
                      s.modules[e][n].el.addEventListener(t, function (t) {
                        return i(t);
                      });
                    }));
            },
          },
          { key: "init", value: function () {} },
          { key: "destroy", value: function () {} },
        ]),
        t
      );
    })(),
    u = (function () {
      function t(e) {
        n(this, t),
          this.app,
          (this.modules = e.modules),
          (this.currentModules = {}),
          (this.activeModules = {}),
          (this.newModules = {}),
          (this.moduleId = 0);
      }
      return (
        o(t, [
          {
            key: "init",
            value: function (t, e) {
              var i = this,
                n = (e || document).querySelectorAll("*");
              t && !this.app && (this.app = t),
                (this.activeModules.app = { app: this.app }),
                n.forEach(function (t) {
                  Array.from(t.attributes).forEach(function (n) {
                    if (n.name.startsWith("data-module")) {
                      var s = !1,
                        o = n.name.split("-").splice(2),
                        r = i.toCamel(o);
                      if (
                        (i.modules[r]
                          ? (s = !0)
                          : i.modules[i.toUpper(r)] &&
                            ((r = i.toUpper(r)), (s = !0)),
                        s)
                      ) {
                        var l = { el: t, name: r, dataName: o.join("-") },
                          a = new i.modules[r](l),
                          c = n.value;
                        c ||
                          (i.moduleId++,
                          (c = "m" + i.moduleId),
                          t.setAttribute(n.name, c)),
                          i.addActiveModule(r, c, a);
                        var h = r + "-" + c;
                        e ? (i.newModules[h] = a) : (i.currentModules[h] = a);
                      }
                    }
                  });
                }),
                Object.entries(this.currentModules).forEach(function (t) {
                  var n = l(t, 2),
                    s = n[0],
                    o = n[1];
                  if (e) {
                    var r = s.split("-"),
                      a = r.shift(),
                      c = r.pop();
                    i.addActiveModule(a, c, o);
                  } else i.initModule(o);
                });
            },
          },
          {
            key: "initModule",
            value: function (t) {
              t.mInit(this.activeModules), t.init();
            },
          },
          {
            key: "addActiveModule",
            value: function (t, e, i) {
              this.activeModules[t]
                ? Object.assign(this.activeModules[t], r({}, e, i))
                : (this.activeModules[t] = r({}, e, i));
            },
          },
          {
            key: "update",
            value: function (t) {
              var e = this;
              this.init(this.app, t),
                Object.entries(this.currentModules).forEach(function (t) {
                  var i = l(t, 2);
                  i[0], i[1].mUpdate(e.activeModules);
                }),
                Object.entries(this.newModules).forEach(function (t) {
                  var i = l(t, 2),
                    n = (i[0], i[1]);
                  e.initModule(n);
                }),
                Object.assign(this.currentModules, this.newModules);
            },
          },
          {
            key: "destroy",
            value: function (t) {
              t ? this.destroyScope(t) : this.destroyModules();
            },
          },
          {
            key: "destroyScope",
            value: function (t) {
              var e = this;
              t.querySelectorAll("*").forEach(function (t) {
                Array.from(t.attributes).forEach(function (t) {
                  if (t.name.startsWith("data-module")) {
                    var i = t.value,
                      n = t.name.split("-").splice(2),
                      s = e.toCamel(n) + "-" + i,
                      o = !1;
                    e.currentModules[s]
                      ? (o = !0)
                      : e.currentModules[e.toUpper(s)] &&
                        ((s = e.toUpper(s)), (o = !0)),
                      o &&
                        (e.destroyModule(e.currentModules[s]),
                        delete e.currentModules[s]);
                  }
                });
              }),
                (this.activeModules = {}),
                (this.newModules = {});
            },
          },
          {
            key: "destroyModules",
            value: function () {
              var t = this;
              Object.entries(this.currentModules).forEach(function (e) {
                var i = l(e, 2),
                  n = (i[0], i[1]);
                t.destroyModule(n);
              }),
                (this.currentModules = []);
            },
          },
          {
            key: "destroyModule",
            value: function (t) {
              t.mDestroy(), t.destroy();
            },
          },
          {
            key: "toCamel",
            value: function (t) {
              var e = this;
              return t.reduce(function (t, i) {
                return t + e.toUpper(i);
              });
            },
          },
          {
            key: "toUpper",
            value: function (t) {
              return t.charAt(0).toUpperCase() + t.slice(1);
            },
          },
        ]),
        t
      );
    })();
  const d = u;
  function f(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  function p(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
    return n;
  }
  var m = (function () {
    function t(e) {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        (this.defaults = {
          name: "load",
          loadingClass: "is-loading",
          loadedClass: "is-loaded",
          readyClass: "is-ready",
          transitionsPrefix: "is-",
          transitionsHistory: !0,
          enterDelay: 0,
          exitDelay: 0,
          loadedDelay: 0,
          isLoaded: !1,
          isEntered: !1,
          isUrl: !1,
          transitionContainer: null,
          popstateIgnore: !1,
        }),
        Object.assign(this, this.defaults, e),
        (this.options = e),
        (this.namespace = "modular"),
        (this.html = document.documentElement),
        (this.href = window.location.href),
        (this.container = "data-" + this.name + "-container"),
        (this.subContainer = !1),
        (this.prevTransition = null),
        (this.loadAttributes = ["src", "srcset", "style", "href"]),
        (this.isInserted = !1),
        (this.isLoading = !1),
        (this.enterTimeout = !1),
        (this.controller = new AbortController()),
        (this.classContainer = this.html),
        (this.isChrome = -1 != navigator.userAgent.indexOf("Chrome")),
        this.init();
    }
    var e, i;
    return (
      (e = t),
      (i = [
        {
          key: "init",
          value: function () {
            var t = this;
            window.addEventListener(
              "popstate",
              function (e) {
                return t.checkState(e);
              },
              !1
            ),
              this.html.addEventListener(
                "click",
                function (e) {
                  return t.checkClick(e);
                },
                !1
              ),
              this.loadEls(document);
          },
        },
        {
          key: "checkClick",
          value: function (t) {
            if (!t.ctrlKey && !t.metaKey)
              for (var e = t.target; e && e !== document; ) {
                if (e.matches("a") && null == e.getAttribute("download")) {
                  var i = e.getAttribute("href");
                  i.startsWith("#") ||
                    i.startsWith("mailto:") ||
                    i.startsWith("tel:") ||
                    (t.preventDefault(), this.reset(), this.getClickOptions(e));
                  break;
                }
                e = e.parentNode;
              }
          },
        },
        {
          key: "checkState",
          value: function () {
            ("string" == typeof this.popstateIgnore &&
              window.location.href.indexOf(this.popstateIgnore) > -1) ||
              (this.reset(), this.getStateOptions());
          },
        },
        {
          key: "reset",
          value: function () {
            this.isLoading &&
              (this.controller.abort(),
              (this.isLoading = !1),
              (this.controller = new AbortController())),
              window.clearTimeout(this.enterTimeout),
              this.isInserted && this.removeContainer(),
              (this.classContainer = this.html),
              Object.assign(this, this.defaults, this.options);
          },
        },
        {
          key: "getClickOptions",
          value: function (t) {
            (this.transition = t.getAttribute("data-" + this.name)),
              (this.isUrl = t.getAttribute("data-" + this.name + "-url"));
            var e = t.getAttribute("href");
            "_blank" != t.getAttribute("target")
              ? "false" != this.transition
                ? this.setOptions(e, !0)
                : (window.location = e)
              : window.open(e, "_blank");
          },
        },
        {
          key: "getStateOptions",
          value: function () {
            this.transitionsHistory
              ? (this.transition = history.state)
              : (this.transition = !1);
            var t = window.location.href;
            this.setOptions(t);
          },
        },
        {
          key: "goTo",
          value: function (t, e, i) {
            this.reset(),
              (this.transition = e),
              (this.isUrl = i),
              this.setOptions(t, !0);
          },
        },
        {
          key: "setOptions",
          value: function (t, e) {
            var i,
              n = "[" + this.container + "]";
            this.transition &&
              "true" != this.transition &&
              ((this.transitionContainer =
                "[" + this.container + '="' + this.transition + '"]'),
              (this.loadingClass =
                this.transitions[this.transition].loadingClass ||
                this.loadingClass),
              (this.loadedClass =
                this.transitions[this.transition].loadedClass ||
                this.loadedClass),
              (this.readyClass =
                this.transitions[this.transition].readyClass ||
                this.readyClass),
              (this.transitionsPrefix =
                this.transitions[this.transition].transitionsPrefix ||
                this.transitionsPrefix),
              (this.enterDelay =
                this.transitions[this.transition].enterDelay ||
                this.enterDelay),
              (this.exitDelay =
                this.transitions[this.transition].exitDelay || this.exitDelay),
              (this.loadedDelay =
                this.transitions[this.transition].loadedDelay ||
                this.loadedDelay),
              (i = document.querySelector(this.transitionContainer))),
              i
                ? ((n = this.transitionContainer),
                  (this.oldContainer = i),
                  (this.classContainer = this.oldContainer.parentNode),
                  this.subContainer ||
                    history.replaceState(this.transition, null, this.href),
                  (this.subContainer = !0))
                : ((this.oldContainer = document.querySelector(n)),
                  this.subContainer &&
                    history.replaceState(this.prevTransition, null, this.href),
                  (this.subContainer = !1)),
              (this.href = t),
              (this.parentContainer = this.oldContainer.parentNode),
              "" === this.isUrl ||
              (null != this.isUrl && "false" != this.isUrl && 0 != this.isUrl)
                ? history.pushState(this.transition, null, t)
                : (this.oldContainer.classList.add("is-old"),
                  this.setLoading(),
                  this.startEnterDelay(),
                  this.loadHref(t, n, e));
          },
        },
        {
          key: "setLoading",
          value: function () {
            this.classContainer.classList.remove(
              this.loadedClass,
              this.readyClass
            ),
              this.classContainer.classList.add(this.loadingClass),
              this.classContainer.classList.remove(
                this.transitionsPrefix + this.prevTransition
              ),
              this.transition &&
                this.classContainer.classList.add(
                  this.transitionsPrefix + this.transition
                ),
              this.subContainer || (this.prevTransition = this.transition);
            var t = new Event(this.namespace + "loading");
            window.dispatchEvent(t);
          },
        },
        {
          key: "startEnterDelay",
          value: function () {
            var t = this;
            this.enterTimeout = window.setTimeout(function () {
              (t.isEntered = !0), t.isLoaded && t.transitionContainers();
            }, this.enterDelay);
          },
        },
        {
          key: "loadHref",
          value: function (t, e, i) {
            var n = this;
            this.isLoading = !0;
            var s = this.controller.signal;
            fetch(t, { signal: s })
              .then(function (t) {
                return t.text();
              })
              .then(function (s) {
                i && history.pushState(n.transition, null, t);
                var o = new DOMParser();
                (n.data = o.parseFromString(s, "text/html")),
                  (n.newContainer = n.data.querySelector(e)),
                  n.newContainer.classList.add("is-new"),
                  (n.parentNewContainer = n.newContainer.parentNode),
                  n.hideContainer(),
                  n.parentContainer.insertBefore(
                    n.newContainer,
                    n.oldContainer
                  ),
                  (n.isInserted = !0),
                  n.setSvgs(),
                  (n.isLoaded = !0),
                  n.isEntered && n.transitionContainers(),
                  n.loadEls(n.newContainer),
                  (n.isLoading = !1);
              })
              .catch(function (e) {
                window.location = t;
              });
          },
        },
        {
          key: "transitionContainers",
          value: function () {
            var t = this;
            this.setAttributes(),
              this.showContainer(),
              this.setLoaded(),
              setTimeout(function () {
                t.removeContainer(), t.setReady();
              }, this.exitDelay);
          },
        },
        {
          key: "setSvgs",
          value: function () {
            if (this.isChrome) {
              var t = this.newContainer.querySelectorAll("use");
              t.length &&
                t.forEach(function (t) {
                  var e = t.getAttribute("xlink:href");
                  if (e)
                    t.parentNode.innerHTML =
                      '<use xlink:href="' + e + '"></use>';
                  else {
                    var i = t.getAttribute("href");
                    i &&
                      (t.parentNode.innerHTML = '<use href="' + i + '"></use>');
                  }
                });
            }
          },
        },
        {
          key: "setAttributes",
          value: function () {
            var t,
              e,
              i = this,
              n = this.data.getElementsByTagName("title")[0],
              s = this.data.head.querySelector('meta[name="description"]'),
              o = document.head.querySelector('meta[name="description"]');
            this.subContainer
              ? ((e = this.parentNewContainer),
                (t = document.querySelector(
                  this.transitionContainer
                ).parentNode))
              : ((e = this.data.querySelector("html")),
                (t = document.querySelector("html")));
            var r = Object.assign({}, e.dataset);
            n && (document.title = n.innerText),
              o && s && o.setAttribute("content", s.getAttribute("content")),
              r &&
                Object.entries(r).forEach(function (e) {
                  var n,
                    s,
                    o =
                      ((s = 2),
                      (function (t) {
                        if (Array.isArray(t)) return t;
                      })((n = e)) ||
                        (function (t, e) {
                          var i =
                            null == t
                              ? null
                              : ("undefined" != typeof Symbol &&
                                  t[Symbol.iterator]) ||
                                t["@@iterator"];
                          if (null != i) {
                            var n,
                              s,
                              o = [],
                              r = !0,
                              l = !1;
                            try {
                              for (
                                i = i.call(t);
                                !(r = (n = i.next()).done) &&
                                (o.push(n.value), !e || o.length !== e);
                                r = !0
                              );
                            } catch (t) {
                              (l = !0), (s = t);
                            } finally {
                              try {
                                r || null == i.return || i.return();
                              } finally {
                                if (l) throw s;
                              }
                            }
                            return o;
                          }
                        })(n, s) ||
                        (function (t, e) {
                          if (t) {
                            if ("string" == typeof t) return p(t, e);
                            var i = Object.prototype.toString
                              .call(t)
                              .slice(8, -1);
                            return (
                              "Object" === i &&
                                t.constructor &&
                                (i = t.constructor.name),
                              "Map" === i || "Set" === i
                                ? Array.from(t)
                                : "Arguments" === i ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    i
                                  )
                                ? p(t, e)
                                : void 0
                            );
                          }
                        })(n, s) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })()),
                    r = o[0],
                    l = o[1];
                  t.setAttribute("data-" + i.toDash(r), l);
                });
          },
        },
        {
          key: "toDash",
          value: function (t) {
            return t
              .split(/(?=[A-Z])/)
              .join("-")
              .toLowerCase();
          },
        },
        {
          key: "hideContainer",
          value: function () {
            (this.newContainer.style.visibility = "hidden"),
              (this.newContainer.style.height = 0),
              (this.newContainer.style.overflow = "hidden");
          },
        },
        {
          key: "showContainer",
          value: function () {
            (this.newContainer.style.visibility = ""),
              (this.newContainer.style.height = ""),
              (this.newContainer.style.overflow = "");
          },
        },
        {
          key: "loadEls",
          value: function (t) {
            var e = this,
              i = [];
            this.loadAttributes.forEach(function (n) {
              var s = "data-" + e.name + "-" + n,
                o = t.querySelectorAll("[" + s + "]");
              o.length &&
                o.forEach(function (t) {
                  var e = t.getAttribute(s);
                  if ((t.setAttribute(n, e), "src" == n || "srcset" == n)) {
                    var o = new Promise(function (e) {
                      t.onload = function () {
                        return e(t);
                      };
                    });
                    i.push(o);
                  }
                });
            }),
              Promise.all(i).then(function (t) {
                var i = new Event(e.namespace + "images");
                window.dispatchEvent(i);
              });
          },
        },
        {
          key: "setLoaded",
          value: function () {
            var t = this;
            this.classContainer.classList.remove(this.loadingClass),
              setTimeout(function () {
                t.classContainer.classList.add(t.loadedClass);
              }, this.loadedDelay);
            var e = new Event(this.namespace + "loaded");
            window.dispatchEvent(e);
          },
        },
        {
          key: "removeContainer",
          value: function () {
            this.parentContainer.removeChild(this.oldContainer),
              this.newContainer.classList.remove("is-new"),
              (this.isInserted = !1);
          },
        },
        {
          key: "setReady",
          value: function () {
            this.classContainer.classList.add(this.readyClass);
            var t = new Event(this.namespace + "ready");
            window.dispatchEvent(t);
          },
        },
        {
          key: "on",
          value: function (t, e) {
            var i = this;
            window.addEventListener(
              this.namespace + t,
              function () {
                switch (t) {
                  case "loading":
                    return e(i.transition, i.oldContainer);
                  case "loaded":
                    return e(i.transition, i.oldContainer, i.newContainer);
                  case "ready":
                    return e(i.transition, i.newContainer);
                  default:
                    return e();
                }
              },
              !1
            );
          },
        },
      ]) && f(e.prototype, i),
      t
    );
  })();
  const v = m,
    y = class extends h {
      constructor(t) {
        super(t);
      }
      init() {
        new v({ enterDelay: 300, transitions: { customTransition: {} } }).on(
          "loaded",
          (t, e, i) => {
            this.call("destroy", e, "app"),
              document.body.classList.remove("menu-open"),
              this.call("update", i, "app");
          }
        );
      }
    },
    b = (t) => ({
      url: t.src,
      width: t.naturalWidth,
      height: t.naturalHeight,
      ratio: t.naturalWidth / t.naturalHeight,
    }),
    g = [];
  function w(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function S(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  function k(t, e, i) {
    return e && S(t.prototype, e), i && S(t, i), t;
  }
  function E(t, e, i) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = i),
      t
    );
  }
  function T(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e &&
        (n = n.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        i.push.apply(i, n);
    }
    return i;
  }
  function x(t) {
    for (var e = 1; e < arguments.length; e++) {
      var i = null != arguments[e] ? arguments[e] : {};
      e % 2
        ? T(Object(i), !0).forEach(function (e) {
            E(t, e, i[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
        : T(Object(i)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
          });
    }
    return t;
  }
  function A(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      e && L(t, e);
  }
  function C(t) {
    return (
      (C = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      C(t)
    );
  }
  function L(t, e) {
    return (
      (L =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        }),
      L(t, e)
    );
  }
  function O(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function M(t) {
    var e = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Date.prototype.toString.call(
            Reflect.construct(Date, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var i,
        n = C(t);
      if (e) {
        var s = C(this).constructor;
        i = Reflect.construct(n, arguments, s);
      } else i = n.apply(this, arguments);
      return (function (t, e) {
        return !e || ("object" != typeof e && "function" != typeof e)
          ? O(t)
          : e;
      })(this, i);
    };
  }
  function Y(t, e, i) {
    return (
      (Y =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, i) {
              var n = (function (t, e) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(t, e) &&
                  null !== (t = C(t));

                );
                return t;
              })(t, e);
              if (n) {
                var s = Object.getOwnPropertyDescriptor(n, e);
                return s.get ? s.get.call(i) : s.value;
              }
            }),
      Y(t, e, i || t)
    );
  }
  function W(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
          var i = [],
            n = !0,
            s = !1,
            o = void 0;
          try {
            for (
              var r, l = t[Symbol.iterator]();
              !(n = (r = l.next()).done) &&
              (i.push(r.value), !e || i.length !== e);
              n = !0
            );
          } catch (t) {
            (s = !0), (o = t);
          } finally {
            try {
              n || null == l.return || l.return();
            } finally {
              if (s) throw o;
            }
          }
          return i;
        }
      })(t, e) ||
      X(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function X(t, e) {
    if (t) {
      if ("string" == typeof t) return D(t, e);
      var i = Object.prototype.toString.call(t).slice(8, -1);
      return (
        "Object" === i && t.constructor && (i = t.constructor.name),
        "Map" === i || "Set" === i
          ? Array.from(t)
          : "Arguments" === i ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
          ? D(t, e)
          : void 0
      );
    }
  }
  function D(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
    return n;
  }
  var H = {
      el: document,
      name: "scroll",
      offset: [0, 0],
      repeat: !1,
      smooth: !1,
      initPosition: { x: 0, y: 0 },
      direction: "vertical",
      gestureDirection: "vertical",
      reloadOnContextChange: !1,
      lerp: 0.1,
      class: "is-inview",
      scrollbarContainer: !1,
      scrollbarClass: "c-scrollbar",
      scrollingClass: "has-scroll-scrolling",
      draggingClass: "has-scroll-dragging",
      smoothClass: "has-scroll-smooth",
      initClass: "has-scroll-init",
      getSpeed: !1,
      getDirection: !1,
      scrollFromAnywhere: !1,
      multiplier: 1,
      firefoxMultiplier: 50,
      touchMultiplier: 2,
      resetNativeScroll: !0,
      tablet: {
        smooth: !1,
        direction: "vertical",
        gestureDirection: "vertical",
        breakpoint: 1024,
      },
      smartphone: {
        smooth: !1,
        direction: "vertical",
        gestureDirection: "vertical",
      },
    },
    R = (function () {
      function t() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        w(this, t),
          Object.assign(this, H, e),
          (this.smartphone = H.smartphone),
          e.smartphone && Object.assign(this.smartphone, e.smartphone),
          (this.tablet = H.tablet),
          e.tablet && Object.assign(this.tablet, e.tablet),
          (this.namespace = "locomotive"),
          (this.html = document.documentElement),
          (this.windowHeight = window.innerHeight),
          (this.windowWidth = window.innerWidth),
          (this.windowMiddle = {
            x: this.windowWidth / 2,
            y: this.windowHeight / 2,
          }),
          (this.els = {}),
          (this.currentElements = {}),
          (this.listeners = {}),
          (this.hasScrollTicking = !1),
          (this.hasCallEventSet = !1),
          (this.checkScroll = this.checkScroll.bind(this)),
          (this.checkResize = this.checkResize.bind(this)),
          (this.checkEvent = this.checkEvent.bind(this)),
          (this.instance = {
            scroll: { x: 0, y: 0 },
            limit: { x: this.html.offsetWidth, y: this.html.offsetHeight },
            currentElements: this.currentElements,
          }),
          this.isMobile
            ? this.isTablet
              ? (this.context = "tablet")
              : (this.context = "smartphone")
            : (this.context = "desktop"),
          this.isMobile && (this.direction = this[this.context].direction),
          "horizontal" === this.direction
            ? (this.directionAxis = "x")
            : (this.directionAxis = "y"),
          this.getDirection && (this.instance.direction = null),
          this.getDirection && (this.instance.speed = 0),
          this.html.classList.add(this.initClass),
          window.addEventListener("resize", this.checkResize, !1);
      }
      return (
        k(t, [
          {
            key: "init",
            value: function () {
              this.initEvents();
            },
          },
          {
            key: "checkScroll",
            value: function () {
              this.dispatchScroll();
            },
          },
          {
            key: "checkResize",
            value: function () {
              var t = this;
              this.resizeTick ||
                ((this.resizeTick = !0),
                requestAnimationFrame(function () {
                  t.resize(), (t.resizeTick = !1);
                }));
            },
          },
          { key: "resize", value: function () {} },
          {
            key: "checkContext",
            value: function () {
              if (this.reloadOnContextChange) {
                (this.isMobile =
                  /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  ) ||
                  ("MacIntel" === navigator.platform &&
                    navigator.maxTouchPoints > 1) ||
                  this.windowWidth < this.tablet.breakpoint),
                  (this.isTablet =
                    this.isMobile &&
                    this.windowWidth >= this.tablet.breakpoint);
                var t = this.context;
                this.isMobile
                  ? this.isTablet
                    ? (this.context = "tablet")
                    : (this.context = "smartphone")
                  : (this.context = "desktop"),
                  t != this.context &&
                    ("desktop" == t ? this.smooth : this[t].smooth) !=
                      ("desktop" == this.context
                        ? this.smooth
                        : this[this.context].smooth) &&
                    window.location.reload();
              }
            },
          },
          {
            key: "initEvents",
            value: function () {
              var t = this;
              (this.scrollToEls = this.el.querySelectorAll(
                "[data-".concat(this.name, "-to]")
              )),
                (this.setScrollTo = this.setScrollTo.bind(this)),
                this.scrollToEls.forEach(function (e) {
                  e.addEventListener("click", t.setScrollTo, !1);
                });
            },
          },
          {
            key: "setScrollTo",
            value: function (t) {
              t.preventDefault(),
                this.scrollTo(
                  t.currentTarget.getAttribute(
                    "data-".concat(this.name, "-href")
                  ) || t.currentTarget.getAttribute("href"),
                  {
                    offset: t.currentTarget.getAttribute(
                      "data-".concat(this.name, "-offset")
                    ),
                  }
                );
            },
          },
          { key: "addElements", value: function () {} },
          {
            key: "detectElements",
            value: function (t) {
              var e = this,
                i = this.instance.scroll.y,
                n = i + this.windowHeight,
                s = this.instance.scroll.x,
                o = s + this.windowWidth;
              Object.entries(this.els).forEach(function (r) {
                var l = W(r, 2),
                  a = l[0],
                  c = l[1];
                if (
                  (!c ||
                    (c.inView && !t) ||
                    ("horizontal" === e.direction
                      ? o >= c.left && s < c.right && e.setInView(c, a)
                      : n >= c.top && i < c.bottom && e.setInView(c, a)),
                  c && c.inView)
                )
                  if ("horizontal" === e.direction) {
                    var h = c.right - c.left;
                    (c.progress =
                      (e.instance.scroll.x - (c.left - e.windowWidth)) /
                      (h + e.windowWidth)),
                      (o < c.left || s > c.right) && e.setOutOfView(c, a);
                  } else {
                    var u = c.bottom - c.top;
                    (c.progress =
                      (e.instance.scroll.y - (c.top - e.windowHeight)) /
                      (u + e.windowHeight)),
                      (n < c.top || i > c.bottom) && e.setOutOfView(c, a);
                  }
              }),
                (this.hasScrollTicking = !1);
            },
          },
          {
            key: "setInView",
            value: function (t, e) {
              (this.els[e].inView = !0),
                t.el.classList.add(t.class),
                (this.currentElements[e] = t),
                t.call &&
                  this.hasCallEventSet &&
                  (this.dispatchCall(t, "enter"),
                  t.repeat || (this.els[e].call = !1));
            },
          },
          {
            key: "setOutOfView",
            value: function (t, e) {
              var i = this;
              (this.els[e].inView = !1),
                Object.keys(this.currentElements).forEach(function (t) {
                  t === e && delete i.currentElements[t];
                }),
                t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                t.repeat && t.el.classList.remove(t.class);
            },
          },
          {
            key: "dispatchCall",
            value: function (t, e) {
              (this.callWay = e),
                (this.callValue = t.call.split(",").map(function (t) {
                  return t.trim();
                })),
                (this.callObj = t),
                1 == this.callValue.length &&
                  (this.callValue = this.callValue[0]);
              var i = new Event(this.namespace + "call");
              this.el.dispatchEvent(i);
            },
          },
          {
            key: "dispatchScroll",
            value: function () {
              var t = new Event(this.namespace + "scroll");
              this.el.dispatchEvent(t);
            },
          },
          {
            key: "setEvents",
            value: function (t, e) {
              this.listeners[t] || (this.listeners[t] = []);
              var i = this.listeners[t];
              i.push(e),
                1 === i.length &&
                  this.el.addEventListener(
                    this.namespace + t,
                    this.checkEvent,
                    !1
                  ),
                "call" === t &&
                  ((this.hasCallEventSet = !0), this.detectElements(!0));
            },
          },
          {
            key: "unsetEvents",
            value: function (t, e) {
              if (this.listeners[t]) {
                var i = this.listeners[t],
                  n = i.indexOf(e);
                n < 0 ||
                  (i.splice(n, 1),
                  0 === i.index &&
                    this.el.removeEventListener(
                      this.namespace + t,
                      this.checkEvent,
                      !1
                    ));
              }
            },
          },
          {
            key: "checkEvent",
            value: function (t) {
              var e = this,
                i = t.type.replace(this.namespace, ""),
                n = this.listeners[i];
              n &&
                0 !== n.length &&
                n.forEach(function (t) {
                  switch (i) {
                    case "scroll":
                      return t(e.instance);
                    case "call":
                      return t(e.callValue, e.callWay, e.callObj);
                    default:
                      return t();
                  }
                });
            },
          },
          { key: "startScroll", value: function () {} },
          { key: "stopScroll", value: function () {} },
          {
            key: "setScroll",
            value: function (t, e) {
              this.instance.scroll = { x: 0, y: 0 };
            },
          },
          {
            key: "destroy",
            value: function () {
              var t = this;
              window.removeEventListener("resize", this.checkResize, !1),
                Object.keys(this.listeners).forEach(function (e) {
                  t.el.removeEventListener(t.namespace + e, t.checkEvent, !1);
                }),
                (this.listeners = {}),
                this.scrollToEls.forEach(function (e) {
                  e.removeEventListener("click", t.setScrollTo, !1);
                }),
                this.html.classList.remove(this.initClass);
            },
          },
        ]),
        t
      );
    })(),
    j =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof window
        ? window
        : void 0 !== t.g
        ? t.g
        : "undefined" != typeof self
        ? self
        : {};
  function P(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var I = P(function (t, e) {
      t.exports = {
        polyfill: function () {
          var t = window,
            e = document;
          if (
            !("scrollBehavior" in e.documentElement.style) ||
            !0 === t.__forceSmoothScrollPolyfill__
          ) {
            var i,
              n = t.HTMLElement || t.Element,
              s = 468,
              o = {
                scroll: t.scroll || t.scrollTo,
                scrollBy: t.scrollBy,
                elementScroll: n.prototype.scroll || a,
                scrollIntoView: n.prototype.scrollIntoView,
              },
              r =
                t.performance && t.performance.now
                  ? t.performance.now.bind(t.performance)
                  : Date.now,
              l =
                ((i = t.navigator.userAgent),
                new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(i)
                  ? 1
                  : 0);
            (t.scroll = t.scrollTo =
              function () {
                void 0 !== arguments[0] &&
                  (!0 !== c(arguments[0])
                    ? p.call(
                        t,
                        e.body,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : t.scrollX || t.pageXOffset,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : t.scrollY || t.pageYOffset
                      )
                    : o.scroll.call(
                        t,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : t.scrollX || t.pageXOffset,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : t.scrollY || t.pageYOffset
                      ));
              }),
              (t.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (c(arguments[0])
                    ? o.scrollBy.call(
                        t,
                        void 0 !== arguments[0].left
                          ? arguments[0].left
                          : "object" != typeof arguments[0]
                          ? arguments[0]
                          : 0,
                        void 0 !== arguments[0].top
                          ? arguments[0].top
                          : void 0 !== arguments[1]
                          ? arguments[1]
                          : 0
                      )
                    : p.call(
                        t,
                        e.body,
                        ~~arguments[0].left + (t.scrollX || t.pageXOffset),
                        ~~arguments[0].top + (t.scrollY || t.pageYOffset)
                      ));
              }),
              (n.prototype.scroll = n.prototype.scrollTo =
                function () {
                  if (void 0 !== arguments[0])
                    if (!0 !== c(arguments[0])) {
                      var t = arguments[0].left,
                        e = arguments[0].top;
                      p.call(
                        this,
                        this,
                        void 0 === t ? this.scrollLeft : ~~t,
                        void 0 === e ? this.scrollTop : ~~e
                      );
                    } else {
                      if (
                        "number" == typeof arguments[0] &&
                        void 0 === arguments[1]
                      )
                        throw new SyntaxError("Value could not be converted");
                      o.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left
                          : "object" != typeof arguments[0]
                          ? ~~arguments[0]
                          : this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top
                          : void 0 !== arguments[1]
                          ? ~~arguments[1]
                          : this.scrollTop
                      );
                    }
                }),
              (n.prototype.scrollBy = function () {
                void 0 !== arguments[0] &&
                  (!0 !== c(arguments[0])
                    ? this.scroll({
                        left: ~~arguments[0].left + this.scrollLeft,
                        top: ~~arguments[0].top + this.scrollTop,
                        behavior: arguments[0].behavior,
                      })
                    : o.elementScroll.call(
                        this,
                        void 0 !== arguments[0].left
                          ? ~~arguments[0].left + this.scrollLeft
                          : ~~arguments[0] + this.scrollLeft,
                        void 0 !== arguments[0].top
                          ? ~~arguments[0].top + this.scrollTop
                          : ~~arguments[1] + this.scrollTop
                      ));
              }),
              (n.prototype.scrollIntoView = function () {
                if (!0 !== c(arguments[0])) {
                  var i = (function (t) {
                      for (; t !== e.body && !1 === d(t); )
                        t = t.parentNode || t.host;
                      return t;
                    })(this),
                    n = i.getBoundingClientRect(),
                    s = this.getBoundingClientRect();
                  i !== e.body
                    ? (p.call(
                        this,
                        i,
                        i.scrollLeft + s.left - n.left,
                        i.scrollTop + s.top - n.top
                      ),
                      "fixed" !== t.getComputedStyle(i).position &&
                        t.scrollBy({
                          left: n.left,
                          top: n.top,
                          behavior: "smooth",
                        }))
                    : t.scrollBy({
                        left: s.left,
                        top: s.top,
                        behavior: "smooth",
                      });
                } else
                  o.scrollIntoView.call(
                    this,
                    void 0 === arguments[0] || arguments[0]
                  );
              });
          }
          function a(t, e) {
            (this.scrollLeft = t), (this.scrollTop = e);
          }
          function c(t) {
            if (
              null === t ||
              "object" != typeof t ||
              void 0 === t.behavior ||
              "auto" === t.behavior ||
              "instant" === t.behavior
            )
              return !0;
            if ("object" == typeof t && "smooth" === t.behavior) return !1;
            throw new TypeError(
              "behavior member of ScrollOptions " +
                t.behavior +
                " is not a valid value for enumeration ScrollBehavior."
            );
          }
          function h(t, e) {
            return "Y" === e
              ? t.clientHeight + l < t.scrollHeight
              : "X" === e
              ? t.clientWidth + l < t.scrollWidth
              : void 0;
          }
          function u(e, i) {
            var n = t.getComputedStyle(e, null)["overflow" + i];
            return "auto" === n || "scroll" === n;
          }
          function d(t) {
            var e = h(t, "Y") && u(t, "Y"),
              i = h(t, "X") && u(t, "X");
            return e || i;
          }
          function f(e) {
            var i,
              n,
              o,
              l,
              a = (r() - e.startTime) / s;
            (l = a = a > 1 ? 1 : a),
              (i = 0.5 * (1 - Math.cos(Math.PI * l))),
              (n = e.startX + (e.x - e.startX) * i),
              (o = e.startY + (e.y - e.startY) * i),
              e.method.call(e.scrollable, n, o),
              (n === e.x && o === e.y) || t.requestAnimationFrame(f.bind(t, e));
          }
          function p(i, n, s) {
            var l,
              c,
              h,
              u,
              d = r();
            i === e.body
              ? ((l = t),
                (c = t.scrollX || t.pageXOffset),
                (h = t.scrollY || t.pageYOffset),
                (u = o.scroll))
              : ((l = i), (c = i.scrollLeft), (h = i.scrollTop), (u = a)),
              f({
                scrollable: l,
                method: u,
                startTime: d,
                startX: c,
                startY: h,
                x: n,
                y: s,
              });
          }
        },
      };
    }),
    B =
      (I.polyfill,
      (function (t) {
        A(i, t);
        var e = M(i);
        function i() {
          var t,
            n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
          return (
            w(this, i),
            (t = e.call(this, n)).resetNativeScroll &&
              (history.scrollRestoration &&
                (history.scrollRestoration = "manual"),
              window.scrollTo(0, 0)),
            window.addEventListener("scroll", t.checkScroll, !1),
            void 0 === window.smoothscrollPolyfill &&
              ((window.smoothscrollPolyfill = I),
              window.smoothscrollPolyfill.polyfill()),
            t
          );
        }
        return (
          k(i, [
            {
              key: "init",
              value: function () {
                (this.instance.scroll.y = window.pageYOffset),
                  this.addElements(),
                  this.detectElements(),
                  Y(C(i.prototype), "init", this).call(this);
              },
            },
            {
              key: "checkScroll",
              value: function () {
                var t = this;
                Y(C(i.prototype), "checkScroll", this).call(this),
                  this.getDirection && this.addDirection(),
                  this.getSpeed &&
                    (this.addSpeed(), (this.speedTs = Date.now())),
                  (this.instance.scroll.y = window.pageYOffset),
                  Object.entries(this.els).length &&
                    (this.hasScrollTicking ||
                      (requestAnimationFrame(function () {
                        t.detectElements();
                      }),
                      (this.hasScrollTicking = !0)));
              },
            },
            {
              key: "addDirection",
              value: function () {
                window.pageYOffset > this.instance.scroll.y
                  ? "down" !== this.instance.direction &&
                    (this.instance.direction = "down")
                  : window.pageYOffset < this.instance.scroll.y &&
                    "up" !== this.instance.direction &&
                    (this.instance.direction = "up");
              },
            },
            {
              key: "addSpeed",
              value: function () {
                window.pageYOffset != this.instance.scroll.y
                  ? (this.instance.speed =
                      (window.pageYOffset - this.instance.scroll.y) /
                      Math.max(1, Date.now() - this.speedTs))
                  : (this.instance.speed = 0);
              },
            },
            {
              key: "resize",
              value: function () {
                Object.entries(this.els).length &&
                  ((this.windowHeight = window.innerHeight),
                  this.updateElements());
              },
            },
            {
              key: "addElements",
              value: function () {
                var t = this;
                (this.els = {}),
                  this.el
                    .querySelectorAll("[data-" + this.name + "]")
                    .forEach(function (e, i) {
                      e.getBoundingClientRect();
                      var n,
                        s,
                        o,
                        r = e.dataset[t.name + "Class"] || t.class,
                        l =
                          "string" == typeof e.dataset[t.name + "Id"]
                            ? e.dataset[t.name + "Id"]
                            : i,
                        a =
                          "string" == typeof e.dataset[t.name + "Offset"]
                            ? e.dataset[t.name + "Offset"].split(",")
                            : t.offset,
                        c = e.dataset[t.name + "Repeat"],
                        h = e.dataset[t.name + "Call"],
                        u = e.dataset[t.name + "Target"],
                        d = (o =
                          void 0 !== u
                            ? document.querySelector("".concat(u))
                            : e).getBoundingClientRect();
                      (n = d.top + t.instance.scroll.y),
                        (s = d.left + t.instance.scroll.x);
                      var f = n + o.offsetHeight,
                        p = s + o.offsetWidth;
                      c = "false" != c && (null != c || t.repeat);
                      var m = t.getRelativeOffset(a),
                        v = {
                          el: e,
                          targetEl: o,
                          id: l,
                          class: r,
                          top: (n += m[0]),
                          bottom: (f -= m[1]),
                          left: s,
                          right: p,
                          offset: a,
                          progress: 0,
                          repeat: c,
                          inView: !1,
                          call: h,
                        };
                      (t.els[l] = v),
                        e.classList.contains(r) && t.setInView(t.els[l], l);
                    });
              },
            },
            {
              key: "updateElements",
              value: function () {
                var t = this;
                Object.entries(this.els).forEach(function (e) {
                  var i = W(e, 2),
                    n = i[0],
                    s = i[1],
                    o =
                      s.targetEl.getBoundingClientRect().top +
                      t.instance.scroll.y,
                    r = o + s.targetEl.offsetHeight,
                    l = t.getRelativeOffset(s.offset);
                  (t.els[n].top = o + l[0]), (t.els[n].bottom = r - l[1]);
                }),
                  (this.hasScrollTicking = !1);
              },
            },
            {
              key: "getRelativeOffset",
              value: function (t) {
                var e = [0, 0];
                if (t)
                  for (var i = 0; i < t.length; i++)
                    "string" == typeof t[i]
                      ? t[i].includes("%")
                        ? (e[i] = parseInt(
                            (t[i].replace("%", "") * this.windowHeight) / 100
                          ))
                        : (e[i] = parseInt(t[i]))
                      : (e[i] = t[i]);
                return e;
              },
            },
            {
              key: "scrollTo",
              value: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  i = parseInt(e.offset) || 0,
                  n = !!e.callback && e.callback;
                if ("string" == typeof t) {
                  if ("top" === t) t = this.html;
                  else if ("bottom" === t)
                    t = this.html.offsetHeight - window.innerHeight;
                  else if (!(t = document.querySelector(t))) return;
                } else if ("number" == typeof t) t = parseInt(t);
                else if (!t || !t.tagName)
                  return void console.warn("`target` parameter is not valid");
                i =
                  "number" != typeof t
                    ? t.getBoundingClientRect().top + i + this.instance.scroll.y
                    : t + i;
                var s = function () {
                  return parseInt(window.pageYOffset) === parseInt(i);
                };
                if (n) {
                  if (s()) return void n();
                  window.addEventListener("scroll", function t() {
                    s() && (window.removeEventListener("scroll", t), n());
                  });
                }
                window.scrollTo({
                  top: i,
                  behavior: 0 === e.duration ? "auto" : "smooth",
                });
              },
            },
            {
              key: "update",
              value: function () {
                this.addElements(), this.detectElements();
              },
            },
            {
              key: "destroy",
              value: function () {
                Y(C(i.prototype), "destroy", this).call(this),
                  window.removeEventListener("scroll", this.checkScroll, !1);
              },
            },
          ]),
          i
        );
      })(R)),
    _ = Object.getOwnPropertySymbols,
    N = Object.prototype.hasOwnProperty,
    z = Object.prototype.propertyIsEnumerable,
    q = (function () {
      try {
        if (!Object.assign) return !1;
        var t = new String("abc");
        if (((t[5] = "de"), "5" === Object.getOwnPropertyNames(t)[0]))
          return !1;
        for (var e = {}, i = 0; i < 10; i++)
          e["_" + String.fromCharCode(i)] = i;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(e)
            .map(function (t) {
              return e[t];
            })
            .join("")
        )
          return !1;
        var n = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (t) {
            n[t] = t;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        );
      } catch (t) {
        return !1;
      }
    })()
      ? Object.assign
      : function (t, e) {
          for (
            var i,
              n,
              s = (function (t) {
                if (null == t)
                  throw new TypeError(
                    "Object.assign cannot be called with null or undefined"
                  );
                return Object(t);
              })(t),
              o = 1;
            o < arguments.length;
            o++
          ) {
            for (var r in (i = Object(arguments[o])))
              N.call(i, r) && (s[r] = i[r]);
            if (_) {
              n = _(i);
              for (var l = 0; l < n.length; l++)
                z.call(i, n[l]) && (s[n[l]] = i[n[l]]);
            }
          }
          return s;
        };
  function V() {}
  V.prototype = {
    on: function (t, e, i) {
      var n = this.e || (this.e = {});
      return (n[t] || (n[t] = [])).push({ fn: e, ctx: i }), this;
    },
    once: function (t, e, i) {
      var n = this;
      function s() {
        n.off(t, s), e.apply(i, arguments);
      }
      return (s._ = e), this.on(t, s, i);
    },
    emit: function (t) {
      for (
        var e = [].slice.call(arguments, 1),
          i = ((this.e || (this.e = {}))[t] || []).slice(),
          n = 0,
          s = i.length;
        n < s;
        n++
      )
        i[n].fn.apply(i[n].ctx, e);
      return this;
    },
    off: function (t, e) {
      var i = this.e || (this.e = {}),
        n = i[t],
        s = [];
      if (n && e)
        for (var o = 0, r = n.length; o < r; o++)
          n[o].fn !== e && n[o].fn._ !== e && s.push(n[o]);
      return s.length ? (i[t] = s) : delete i[t], this;
    },
  };
  var F = V,
    U = P(function (t, e) {
      (function () {
        (null !== e ? e : this).Lethargy = (function () {
          function t(t, e, i, n) {
            (this.stability = null != t ? Math.abs(t) : 8),
              (this.sensitivity = null != e ? 1 + Math.abs(e) : 100),
              (this.tolerance = null != i ? 1 + Math.abs(i) : 1.1),
              (this.delay = null != n ? n : 150),
              (this.lastUpDeltas = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : t >= e;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this)),
              (this.lastDownDeltas = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : t >= e;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this)),
              (this.deltasTimestamp = function () {
                var t, e, i;
                for (
                  i = [], t = 1, e = 2 * this.stability;
                  1 <= e ? t <= e : t >= e;
                  1 <= e ? t++ : t--
                )
                  i.push(null);
                return i;
              }.call(this));
          }
          return (
            (t.prototype.check = function (t) {
              var e;
              return (
                null != (t = t.originalEvent || t).wheelDelta
                  ? (e = t.wheelDelta)
                  : null != t.deltaY
                  ? (e = -40 * t.deltaY)
                  : (null == t.detail && 0 !== t.detail) ||
                    (e = -40 * t.detail),
                this.deltasTimestamp.push(Date.now()),
                this.deltasTimestamp.shift(),
                e > 0
                  ? (this.lastUpDeltas.push(e),
                    this.lastUpDeltas.shift(),
                    this.isInertia(1))
                  : (this.lastDownDeltas.push(e),
                    this.lastDownDeltas.shift(),
                    this.isInertia(-1))
              );
            }),
            (t.prototype.isInertia = function (t) {
              var e, i, n, s, o, r, l;
              return null ===
                (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0]
                ? t
                : !(
                    this.deltasTimestamp[2 * this.stability - 2] + this.delay >
                      Date.now() && e[0] === e[2 * this.stability - 1]
                  ) &&
                    ((n = e.slice(0, this.stability)),
                    (i = e.slice(this.stability, 2 * this.stability)),
                    (l = n.reduce(function (t, e) {
                      return t + e;
                    })),
                    (o = i.reduce(function (t, e) {
                      return t + e;
                    })),
                    (r = l / n.length),
                    (s = o / i.length),
                    Math.abs(r) < Math.abs(s * this.tolerance) &&
                      this.sensitivity < Math.abs(s) &&
                      t);
            }),
            (t.prototype.showLastUpDeltas = function () {
              return this.lastUpDeltas;
            }),
            (t.prototype.showLastDownDeltas = function () {
              return this.lastDownDeltas;
            }),
            t
          );
        })();
      }).call(j);
    }),
    K = "onwheel" in document,
    Z = "onmousewheel" in document,
    G =
      "ontouchstart" in window ||
      window.TouchEvent ||
      (window.DocumentTouch && document instanceof DocumentTouch),
    J = navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
    Q = !!window.navigator.msPointerEnabled,
    tt = "onkeydown" in document,
    et = navigator.userAgent.indexOf("Firefox") > -1,
    it = Object.prototype.toString,
    nt = Object.prototype.hasOwnProperty,
    st = function (t) {
      if (!t) return console.warn("bindAll requires at least one argument.");
      var e = Array.prototype.slice.call(arguments, 1);
      if (0 === e.length)
        for (var i in t)
          nt.call(t, i) &&
            "function" == typeof t[i] &&
            "[object Function]" == it.call(t[i]) &&
            e.push(i);
      for (var n = 0; n < e.length; n++) {
        var s = e[n];
        t[s] = ot(t[s], t);
      }
    };
  function ot(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  var rt = U.Lethargy,
    lt = "virtualscroll",
    at = ct;
  function ct(t) {
    st(
      this,
      "_onWheel",
      "_onMouseWheel",
      "_onTouchStart",
      "_onTouchMove",
      "_onKeyDown"
    ),
      (this.el = window),
      t && t.el && ((this.el = t.el), delete t.el),
      (this.options = q(
        {
          mouseMultiplier: 1,
          touchMultiplier: 2,
          firefoxMultiplier: 15,
          keyStep: 120,
          preventTouch: !1,
          unpreventTouchClass: "vs-touchmove-allowed",
          limitInertia: !1,
          useKeyboard: !0,
          useTouch: !0,
        },
        t
      )),
      this.options.limitInertia && (this._lethargy = new rt()),
      (this._emitter = new F()),
      (this._event = { y: 0, x: 0, deltaX: 0, deltaY: 0 }),
      (this.touchStartX = null),
      (this.touchStartY = null),
      (this.bodyTouchAction = null),
      void 0 !== this.options.passive &&
        (this.listenerOptions = { passive: this.options.passive });
  }
  function ht(t, e, i) {
    return (1 - i) * t + i * e;
  }
  function ut(t) {
    var e = {};
    if (window.getComputedStyle) {
      var i = getComputedStyle(t),
        n = i.transform || i.webkitTransform || i.mozTransform,
        s = n.match(/^matrix3d\((.+)\)$/);
      return (
        s
          ? ((e.x = s ? parseFloat(s[1].split(", ")[12]) : 0),
            (e.y = s ? parseFloat(s[1].split(", ")[13]) : 0))
          : ((s = n.match(/^matrix\((.+)\)$/)),
            (e.x = s ? parseFloat(s[1].split(", ")[4]) : 0),
            (e.y = s ? parseFloat(s[1].split(", ")[5]) : 0)),
        e
      );
    }
  }
  function dt(t) {
    for (var e = []; t && t !== document; t = t.parentNode) e.push(t);
    return e;
  }
  (ct.prototype._notify = function (t) {
    var e = this._event;
    (e.x += e.deltaX),
      (e.y += e.deltaY),
      this._emitter.emit(lt, {
        x: e.x,
        y: e.y,
        deltaX: e.deltaX,
        deltaY: e.deltaY,
        originalEvent: t,
      });
  }),
    (ct.prototype._onWheel = function (t) {
      var e = this.options;
      if (!this._lethargy || !1 !== this._lethargy.check(t)) {
        var i = this._event;
        (i.deltaX = t.wheelDeltaX || -1 * t.deltaX),
          (i.deltaY = t.wheelDeltaY || -1 * t.deltaY),
          et &&
            1 == t.deltaMode &&
            ((i.deltaX *= e.firefoxMultiplier),
            (i.deltaY *= e.firefoxMultiplier)),
          (i.deltaX *= e.mouseMultiplier),
          (i.deltaY *= e.mouseMultiplier),
          this._notify(t);
      }
    }),
    (ct.prototype._onMouseWheel = function (t) {
      if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
        var e = this._event;
        (e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0),
          (e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta),
          this._notify(t);
      }
    }),
    (ct.prototype._onTouchStart = function (t) {
      var e = t.targetTouches ? t.targetTouches[0] : t;
      (this.touchStartX = e.pageX), (this.touchStartY = e.pageY);
    }),
    (ct.prototype._onTouchMove = function (t) {
      var e = this.options;
      e.preventTouch &&
        !t.target.classList.contains(e.unpreventTouchClass) &&
        t.preventDefault();
      var i = this._event,
        n = t.targetTouches ? t.targetTouches[0] : t;
      (i.deltaX = (n.pageX - this.touchStartX) * e.touchMultiplier),
        (i.deltaY = (n.pageY - this.touchStartY) * e.touchMultiplier),
        (this.touchStartX = n.pageX),
        (this.touchStartY = n.pageY),
        this._notify(t);
    }),
    (ct.prototype._onKeyDown = function (t) {
      var e = this._event;
      e.deltaX = e.deltaY = 0;
      var i = window.innerHeight - 40;
      switch (t.keyCode) {
        case 37:
        case 38:
          e.deltaY = this.options.keyStep;
          break;
        case 39:
        case 40:
          e.deltaY = -this.options.keyStep;
          break;
        case t.shiftKey:
          e.deltaY = i;
          break;
        case 32:
          e.deltaY = -i;
          break;
        default:
          return;
      }
      this._notify(t);
    }),
    (ct.prototype._bind = function () {
      K &&
        this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
        Z &&
          this.el.addEventListener(
            "mousewheel",
            this._onMouseWheel,
            this.listenerOptions
          ),
        G &&
          this.options.useTouch &&
          (this.el.addEventListener(
            "touchstart",
            this._onTouchStart,
            this.listenerOptions
          ),
          this.el.addEventListener(
            "touchmove",
            this._onTouchMove,
            this.listenerOptions
          )),
        Q &&
          J &&
          ((this.bodyTouchAction = document.body.style.msTouchAction),
          (document.body.style.msTouchAction = "none"),
          this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
        tt &&
          this.options.useKeyboard &&
          document.addEventListener("keydown", this._onKeyDown);
    }),
    (ct.prototype._unbind = function () {
      K && this.el.removeEventListener("wheel", this._onWheel),
        Z && this.el.removeEventListener("mousewheel", this._onMouseWheel),
        G &&
          (this.el.removeEventListener("touchstart", this._onTouchStart),
          this.el.removeEventListener("touchmove", this._onTouchMove)),
        Q &&
          J &&
          ((document.body.style.msTouchAction = this.bodyTouchAction),
          this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0),
          this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
        tt &&
          this.options.useKeyboard &&
          document.removeEventListener("keydown", this._onKeyDown);
    }),
    (ct.prototype.on = function (t, e) {
      this._emitter.on(lt, t, e);
      var i = this._emitter.e;
      i && i[lt] && 1 === i[lt].length && this._bind();
    }),
    (ct.prototype.off = function (t, e) {
      this._emitter.off(lt, t, e);
      var i = this._emitter.e;
      (!i[lt] || i[lt].length <= 0) && this._unbind();
    }),
    (ct.prototype.reset = function () {
      var t = this._event;
      (t.x = 0), (t.y = 0);
    }),
    (ct.prototype.destroy = function () {
      this._emitter.off(), this._unbind();
    });
  var ft = 4,
    pt = 0.001,
    mt = 1e-7,
    vt = 10,
    yt = 11,
    bt = 1 / (yt - 1),
    gt = "function" == typeof Float32Array;
  function wt(t, e) {
    return 1 - 3 * e + 3 * t;
  }
  function St(t, e) {
    return 3 * e - 6 * t;
  }
  function kt(t) {
    return 3 * t;
  }
  function Et(t, e, i) {
    return ((wt(e, i) * t + St(e, i)) * t + kt(e)) * t;
  }
  function Tt(t, e, i) {
    return 3 * wt(e, i) * t * t + 2 * St(e, i) * t + kt(e);
  }
  function xt(t) {
    return t;
  }
  var At = function (t, e, i, n) {
      if (!(0 <= t && t <= 1 && 0 <= i && i <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      if (t === e && i === n) return xt;
      for (
        var s = gt ? new Float32Array(yt) : new Array(yt), o = 0;
        o < yt;
        ++o
      )
        s[o] = Et(o * bt, t, i);
      return function (o) {
        return 0 === o
          ? 0
          : 1 === o
          ? 1
          : Et(
              (function (e) {
                for (var n = 0, o = 1, r = yt - 1; o !== r && s[o] <= e; ++o)
                  n += bt;
                --o;
                var l = n + ((e - s[o]) / (s[o + 1] - s[o])) * bt,
                  a = Tt(l, t, i);
                return a >= pt
                  ? (function (t, e, i, n) {
                      for (var s = 0; s < ft; ++s) {
                        var o = Tt(e, i, n);
                        if (0 === o) return e;
                        e -= (Et(e, i, n) - t) / o;
                      }
                      return e;
                    })(e, l, t, i)
                  : 0 === a
                  ? l
                  : (function (t, e, i, n, s) {
                      var o,
                        r,
                        l = 0;
                      do {
                        (o = Et((r = e + (i - e) / 2), n, s) - t) > 0
                          ? (i = r)
                          : (e = r);
                      } while (Math.abs(o) > mt && ++l < vt);
                      return r;
                    })(e, n, n + bt, t, i);
              })(o),
              e,
              n
            );
      };
    },
    Ct = (function (t) {
      A(i, t);
      var e = M(i);
      function i() {
        var t,
          n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          w(this, i),
          history.scrollRestoration && (history.scrollRestoration = "manual"),
          window.scrollTo(0, 0),
          (t = e.call(this, n)).inertia && (t.lerp = 0.1 * t.inertia),
          (t.isScrolling = !1),
          (t.isDraggingScrollbar = !1),
          (t.isTicking = !1),
          (t.hasScrollTicking = !1),
          (t.parallaxElements = {}),
          (t.stop = !1),
          (t.scrollbarContainer = n.scrollbarContainer),
          (t.checkKey = t.checkKey.bind(O(t))),
          window.addEventListener("keydown", t.checkKey, !1),
          t
        );
      }
      return (
        k(i, [
          {
            key: "init",
            value: function () {
              var t = this;
              this.html.classList.add(this.smoothClass),
                this.html.setAttribute(
                  "data-".concat(this.name, "-direction"),
                  this.direction
                ),
                (this.instance = x(
                  {
                    delta: { x: this.initPosition.x, y: this.initPosition.y },
                    scroll: { x: this.initPosition.x, y: this.initPosition.y },
                  },
                  this.instance
                )),
                (this.vs = new at({
                  el: this.scrollFromAnywhere ? document : this.el,
                  mouseMultiplier:
                    navigator.platform.indexOf("Win") > -1 ? 1 : 0.4,
                  firefoxMultiplier: this.firefoxMultiplier,
                  touchMultiplier: this.touchMultiplier,
                  useKeyboard: !1,
                  passive: !0,
                })),
                this.vs.on(function (e) {
                  t.stop ||
                    t.isDraggingScrollbar ||
                    requestAnimationFrame(function () {
                      t.updateDelta(e), t.isScrolling || t.startScrolling();
                    });
                }),
                this.setScrollLimit(),
                this.initScrollBar(),
                this.addSections(),
                this.addElements(),
                this.checkScroll(!0),
                this.transformElements(!0, !0),
                Y(C(i.prototype), "init", this).call(this);
            },
          },
          {
            key: "setScrollLimit",
            value: function () {
              if (
                ((this.instance.limit.y =
                  this.el.offsetHeight - this.windowHeight),
                "horizontal" === this.direction)
              ) {
                for (var t = 0, e = this.el.children, i = 0; i < e.length; i++)
                  t += e[i].offsetWidth;
                this.instance.limit.x = t - this.windowWidth;
              }
            },
          },
          {
            key: "startScrolling",
            value: function () {
              (this.startScrollTs = Date.now()),
                (this.isScrolling = !0),
                this.checkScroll(),
                this.html.classList.add(this.scrollingClass);
            },
          },
          {
            key: "stopScrolling",
            value: function () {
              cancelAnimationFrame(this.checkScrollRaf),
                (this.startScrollTs = void 0),
                this.scrollToRaf &&
                  (cancelAnimationFrame(this.scrollToRaf),
                  (this.scrollToRaf = null)),
                (this.isScrolling = !1),
                (this.instance.scroll.y = Math.round(this.instance.scroll.y)),
                this.html.classList.remove(this.scrollingClass);
            },
          },
          {
            key: "checkKey",
            value: function (t) {
              var e = this;
              if (this.stop)
                9 == t.keyCode &&
                  requestAnimationFrame(function () {
                    (e.html.scrollTop = 0),
                      (document.body.scrollTop = 0),
                      (e.html.scrollLeft = 0),
                      (document.body.scrollLeft = 0);
                  });
              else {
                switch (t.keyCode) {
                  case 9:
                    requestAnimationFrame(function () {
                      (e.html.scrollTop = 0),
                        (document.body.scrollTop = 0),
                        (e.html.scrollLeft = 0),
                        (document.body.scrollLeft = 0),
                        e.scrollTo(document.activeElement, {
                          offset: -window.innerHeight / 2,
                        });
                    });
                    break;
                  case 38:
                    this.isActiveElementScrollSensitive() &&
                      (this.instance.delta[this.directionAxis] -= 240);
                    break;
                  case 40:
                    this.isActiveElementScrollSensitive() &&
                      (this.instance.delta[this.directionAxis] += 240);
                    break;
                  case 33:
                    this.instance.delta[this.directionAxis] -=
                      window.innerHeight;
                    break;
                  case 34:
                    this.instance.delta[this.directionAxis] +=
                      window.innerHeight;
                    break;
                  case 36:
                    this.instance.delta[this.directionAxis] -=
                      this.instance.limit[this.directionAxis];
                    break;
                  case 35:
                    this.instance.delta[this.directionAxis] +=
                      this.instance.limit[this.directionAxis];
                    break;
                  case 32:
                    this.isActiveElementScrollSensitive() &&
                      (t.shiftKey
                        ? (this.instance.delta[this.directionAxis] -=
                            window.innerHeight)
                        : (this.instance.delta[this.directionAxis] +=
                            window.innerHeight));
                    break;
                  default:
                    return;
                }
                this.instance.delta[this.directionAxis] < 0 &&
                  (this.instance.delta[this.directionAxis] = 0),
                  this.instance.delta[this.directionAxis] >
                    this.instance.limit[this.directionAxis] &&
                    (this.instance.delta[this.directionAxis] =
                      this.instance.limit[this.directionAxis]),
                  this.stopScrolling(),
                  (this.isScrolling = !0),
                  this.checkScroll(),
                  this.html.classList.add(this.scrollingClass);
              }
            },
          },
          {
            key: "isActiveElementScrollSensitive",
            value: function () {
              return !(
                document.activeElement instanceof HTMLInputElement ||
                document.activeElement instanceof HTMLTextAreaElement ||
                document.activeElement instanceof HTMLButtonElement ||
                document.activeElement instanceof HTMLSelectElement
              );
            },
          },
          {
            key: "checkScroll",
            value: function () {
              var t = this,
                e =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
              if (e || this.isScrolling || this.isDraggingScrollbar) {
                this.hasScrollTicking ||
                  ((this.checkScrollRaf = requestAnimationFrame(function () {
                    return t.checkScroll();
                  })),
                  (this.hasScrollTicking = !0)),
                  this.updateScroll();
                var n = Math.abs(
                    this.instance.delta[this.directionAxis] -
                      this.instance.scroll[this.directionAxis]
                  ),
                  s = Date.now() - this.startScrollTs;
                if (
                  (!this.animatingScroll &&
                    s > 100 &&
                    ((n < 0.5 &&
                      0 != this.instance.delta[this.directionAxis]) ||
                      (n < 0.5 &&
                        0 == this.instance.delta[this.directionAxis])) &&
                    this.stopScrolling(),
                  Object.entries(this.sections).forEach(function (i) {
                    var n = W(i, 2),
                      s = (n[0], n[1]);
                    s.persistent ||
                    (t.instance.scroll[t.directionAxis] >
                      s.offset[t.directionAxis] &&
                      t.instance.scroll[t.directionAxis] <
                        s.limit[t.directionAxis])
                      ? ("horizontal" === t.direction
                          ? t.transform(
                              s.el,
                              -t.instance.scroll[t.directionAxis],
                              0
                            )
                          : t.transform(
                              s.el,
                              0,
                              -t.instance.scroll[t.directionAxis]
                            ),
                        s.inView ||
                          ((s.inView = !0),
                          (s.el.style.opacity = 1),
                          (s.el.style.pointerEvents = "all"),
                          s.el.setAttribute(
                            "data-".concat(t.name, "-section-inview"),
                            ""
                          )))
                      : ((s.inView || e) &&
                          ((s.inView = !1),
                          (s.el.style.opacity = 0),
                          (s.el.style.pointerEvents = "none"),
                          s.el.removeAttribute(
                            "data-".concat(t.name, "-section-inview")
                          )),
                        t.transform(s.el, 0, 0));
                  }),
                  this.getDirection && this.addDirection(),
                  this.getSpeed &&
                    (this.addSpeed(), (this.speedTs = Date.now())),
                  this.detectElements(),
                  this.transformElements(),
                  this.hasScrollbar)
                ) {
                  var o =
                    (this.instance.scroll[this.directionAxis] /
                      this.instance.limit[this.directionAxis]) *
                    this.scrollBarLimit[this.directionAxis];
                  "horizontal" === this.direction
                    ? this.transform(this.scrollbarThumb, o, 0)
                    : this.transform(this.scrollbarThumb, 0, o);
                }
                Y(C(i.prototype), "checkScroll", this).call(this),
                  (this.hasScrollTicking = !1);
              }
            },
          },
          {
            key: "resize",
            value: function () {
              (this.windowHeight = window.innerHeight),
                (this.windowWidth = window.innerWidth),
                this.checkContext(),
                (this.windowMiddle = {
                  x: this.windowWidth / 2,
                  y: this.windowHeight / 2,
                }),
                this.update();
            },
          },
          {
            key: "updateDelta",
            value: function (t) {
              var e,
                i =
                  this[this.context] && this[this.context].gestureDirection
                    ? this[this.context].gestureDirection
                    : this.gestureDirection;
              (e =
                "both" === i
                  ? t.deltaX + t.deltaY
                  : "vertical" === i
                  ? t.deltaY
                  : "horizontal" === i
                  ? t.deltaX
                  : t.deltaY),
                (this.instance.delta[this.directionAxis] -=
                  e * this.multiplier),
                this.instance.delta[this.directionAxis] < 0 &&
                  (this.instance.delta[this.directionAxis] = 0),
                this.instance.delta[this.directionAxis] >
                  this.instance.limit[this.directionAxis] &&
                  (this.instance.delta[this.directionAxis] =
                    this.instance.limit[this.directionAxis]);
            },
          },
          {
            key: "updateScroll",
            value: function (t) {
              this.isScrolling || this.isDraggingScrollbar
                ? (this.instance.scroll[this.directionAxis] = ht(
                    this.instance.scroll[this.directionAxis],
                    this.instance.delta[this.directionAxis],
                    this.lerp
                  ))
                : this.instance.scroll[this.directionAxis] >
                  this.instance.limit[this.directionAxis]
                ? this.setScroll(
                    this.instance.scroll[this.directionAxis],
                    this.instance.limit[this.directionAxis]
                  )
                : this.instance.scroll.y < 0
                ? this.setScroll(this.instance.scroll[this.directionAxis], 0)
                : this.setScroll(
                    this.instance.scroll[this.directionAxis],
                    this.instance.delta[this.directionAxis]
                  );
            },
          },
          {
            key: "addDirection",
            value: function () {
              this.instance.delta.y > this.instance.scroll.y
                ? "down" !== this.instance.direction &&
                  (this.instance.direction = "down")
                : this.instance.delta.y < this.instance.scroll.y &&
                  "up" !== this.instance.direction &&
                  (this.instance.direction = "up"),
                this.instance.delta.x > this.instance.scroll.x
                  ? "right" !== this.instance.direction &&
                    (this.instance.direction = "right")
                  : this.instance.delta.x < this.instance.scroll.x &&
                    "left" !== this.instance.direction &&
                    (this.instance.direction = "left");
            },
          },
          {
            key: "addSpeed",
            value: function () {
              this.instance.delta[this.directionAxis] !=
              this.instance.scroll[this.directionAxis]
                ? (this.instance.speed =
                    (this.instance.delta[this.directionAxis] -
                      this.instance.scroll[this.directionAxis]) /
                    Math.max(1, Date.now() - this.speedTs))
                : (this.instance.speed = 0);
            },
          },
          {
            key: "initScrollBar",
            value: function () {
              if (
                ((this.scrollbar = document.createElement("span")),
                (this.scrollbarThumb = document.createElement("span")),
                this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                this.scrollbarThumb.classList.add(
                  "".concat(this.scrollbarClass, "_thumb")
                ),
                this.scrollbar.append(this.scrollbarThumb),
                this.scrollbarContainer
                  ? this.scrollbarContainer.append(this.scrollbar)
                  : document.body.append(this.scrollbar),
                (this.getScrollBar = this.getScrollBar.bind(this)),
                (this.releaseScrollBar = this.releaseScrollBar.bind(this)),
                (this.moveScrollBar = this.moveScrollBar.bind(this)),
                this.scrollbarThumb.addEventListener(
                  "mousedown",
                  this.getScrollBar
                ),
                window.addEventListener("mouseup", this.releaseScrollBar),
                window.addEventListener("mousemove", this.moveScrollBar),
                (this.hasScrollbar = !1),
                "horizontal" == this.direction)
              ) {
                if (
                  this.instance.limit.x + this.windowWidth <=
                  this.windowWidth
                )
                  return;
              } else if (
                this.instance.limit.y + this.windowHeight <=
                this.windowHeight
              )
                return;
              (this.hasScrollbar = !0),
                (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                (this.scrollbarHeight = this.scrollbarBCR.height),
                (this.scrollbarWidth = this.scrollbarBCR.width),
                "horizontal" === this.direction
                  ? (this.scrollbarThumb.style.width = "".concat(
                      (this.scrollbarWidth * this.scrollbarWidth) /
                        (this.instance.limit.x + this.scrollbarWidth),
                      "px"
                    ))
                  : (this.scrollbarThumb.style.height = "".concat(
                      (this.scrollbarHeight * this.scrollbarHeight) /
                        (this.instance.limit.y + this.scrollbarHeight),
                      "px"
                    )),
                (this.scrollbarThumbBCR =
                  this.scrollbarThumb.getBoundingClientRect()),
                (this.scrollBarLimit = {
                  x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                  y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                });
            },
          },
          {
            key: "reinitScrollBar",
            value: function () {
              if (((this.hasScrollbar = !1), "horizontal" == this.direction)) {
                if (
                  this.instance.limit.x + this.windowWidth <=
                  this.windowWidth
                )
                  return;
              } else if (
                this.instance.limit.y + this.windowHeight <=
                this.windowHeight
              )
                return;
              (this.hasScrollbar = !0),
                (this.scrollbarBCR = this.scrollbar.getBoundingClientRect()),
                (this.scrollbarHeight = this.scrollbarBCR.height),
                (this.scrollbarWidth = this.scrollbarBCR.width),
                "horizontal" === this.direction
                  ? (this.scrollbarThumb.style.width = "".concat(
                      (this.scrollbarWidth * this.scrollbarWidth) /
                        (this.instance.limit.x + this.scrollbarWidth),
                      "px"
                    ))
                  : (this.scrollbarThumb.style.height = "".concat(
                      (this.scrollbarHeight * this.scrollbarHeight) /
                        (this.instance.limit.y + this.scrollbarHeight),
                      "px"
                    )),
                (this.scrollbarThumbBCR =
                  this.scrollbarThumb.getBoundingClientRect()),
                (this.scrollBarLimit = {
                  x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                  y: this.scrollbarHeight - this.scrollbarThumbBCR.height,
                });
            },
          },
          {
            key: "destroyScrollBar",
            value: function () {
              this.scrollbarThumb.removeEventListener(
                "mousedown",
                this.getScrollBar
              ),
                window.removeEventListener("mouseup", this.releaseScrollBar),
                window.removeEventListener("mousemove", this.moveScrollBar),
                this.scrollbar.remove();
            },
          },
          {
            key: "getScrollBar",
            value: function (t) {
              (this.isDraggingScrollbar = !0),
                this.checkScroll(),
                this.html.classList.remove(this.scrollingClass),
                this.html.classList.add(this.draggingClass);
            },
          },
          {
            key: "releaseScrollBar",
            value: function (t) {
              (this.isDraggingScrollbar = !1),
                this.isScrolling &&
                  this.html.classList.add(this.scrollingClass),
                this.html.classList.remove(this.draggingClass);
            },
          },
          {
            key: "moveScrollBar",
            value: function (t) {
              var e = this;
              this.isDraggingScrollbar &&
                requestAnimationFrame(function () {
                  var i =
                      (((100 * (t.clientX - e.scrollbarBCR.left)) /
                        e.scrollbarWidth) *
                        e.instance.limit.x) /
                      100,
                    n =
                      (((100 * (t.clientY - e.scrollbarBCR.top)) /
                        e.scrollbarHeight) *
                        e.instance.limit.y) /
                      100;
                  n > 0 && n < e.instance.limit.y && (e.instance.delta.y = n),
                    i > 0 && i < e.instance.limit.x && (e.instance.delta.x = i);
                });
            },
          },
          {
            key: "addElements",
            value: function () {
              var t = this;
              (this.els = {}),
                (this.parallaxElements = {}),
                this.el
                  .querySelectorAll("[data-".concat(this.name, "]"))
                  .forEach(function (e, i) {
                    var n,
                      s,
                      o,
                      r = dt(e),
                      l = Object.entries(t.sections)
                        .map(function (t) {
                          var e = W(t, 2);
                          return e[0], e[1];
                        })
                        .find(function (t) {
                          return r.includes(t.el);
                        }),
                      a = e.dataset[t.name + "Class"] || t.class,
                      c =
                        "string" == typeof e.dataset[t.name + "Id"]
                          ? e.dataset[t.name + "Id"]
                          : "el" + i,
                      h = e.dataset[t.name + "Repeat"],
                      u = e.dataset[t.name + "Call"],
                      d = e.dataset[t.name + "Position"],
                      f = e.dataset[t.name + "Delay"],
                      p = e.dataset[t.name + "Direction"],
                      m = "string" == typeof e.dataset[t.name + "Sticky"],
                      v =
                        !!e.dataset[t.name + "Speed"] &&
                        parseFloat(e.dataset[t.name + "Speed"]) / 10,
                      y =
                        "string" == typeof e.dataset[t.name + "Offset"]
                          ? e.dataset[t.name + "Offset"].split(",")
                          : t.offset,
                      b = e.dataset[t.name + "Target"],
                      g = (o =
                        void 0 !== b
                          ? document.querySelector("".concat(b))
                          : e).getBoundingClientRect();
                    null === l || l.inView
                      ? ((n = g.top + t.instance.scroll.y - ut(o).y),
                        (s = g.left + t.instance.scroll.x - ut(o).x))
                      : ((n = g.top - ut(l.el).y - ut(o).y),
                        (s = g.left - ut(l.el).x - ut(o).x));
                    var w = n + o.offsetHeight,
                      S = s + o.offsetWidth,
                      k = { x: (S - s) / 2 + s, y: (w - n) / 2 + n };
                    if (m) {
                      var E = e.getBoundingClientRect(),
                        T = E.top,
                        x = E.left,
                        A = { x: x - s, y: T - n };
                      (n += window.innerHeight),
                        (s += window.innerWidth),
                        (w =
                          T +
                          o.offsetHeight -
                          e.offsetHeight -
                          A[t.directionAxis]),
                        (k = {
                          x:
                            ((S =
                              x +
                              o.offsetWidth -
                              e.offsetWidth -
                              A[t.directionAxis]) -
                              s) /
                              2 +
                            s,
                          y: (w - n) / 2 + n,
                        });
                    }
                    h = "false" != h && (null != h || t.repeat);
                    var C = [0, 0];
                    if (y)
                      if ("horizontal" === t.direction) {
                        for (var L = 0; L < y.length; L++)
                          "string" == typeof y[L]
                            ? y[L].includes("%")
                              ? (C[L] = parseInt(
                                  (y[L].replace("%", "") * t.windowWidth) / 100
                                ))
                              : (C[L] = parseInt(y[L]))
                            : (C[L] = y[L]);
                        (s += C[0]), (S -= C[1]);
                      } else {
                        for (L = 0; L < y.length; L++)
                          "string" == typeof y[L]
                            ? y[L].includes("%")
                              ? (C[L] = parseInt(
                                  (y[L].replace("%", "") * t.windowHeight) / 100
                                ))
                              : (C[L] = parseInt(y[L]))
                            : (C[L] = y[L]);
                        (n += C[0]), (w -= C[1]);
                      }
                    var O = {
                      el: e,
                      id: c,
                      class: a,
                      section: l,
                      top: n,
                      middle: k,
                      bottom: w,
                      left: s,
                      right: S,
                      offset: y,
                      progress: 0,
                      repeat: h,
                      inView: !1,
                      call: u,
                      speed: v,
                      delay: f,
                      position: d,
                      target: o,
                      direction: p,
                      sticky: m,
                    };
                    (t.els[c] = O),
                      e.classList.contains(a) && t.setInView(t.els[c], c),
                      (!1 !== v || m) && (t.parallaxElements[c] = O);
                  });
            },
          },
          {
            key: "addSections",
            value: function () {
              var t = this;
              this.sections = {};
              var e = this.el.querySelectorAll(
                "[data-".concat(this.name, "-section]")
              );
              0 === e.length && (e = [this.el]),
                e.forEach(function (e, i) {
                  var n =
                      "string" == typeof e.dataset[t.name + "Id"]
                        ? e.dataset[t.name + "Id"]
                        : "section" + i,
                    s = e.getBoundingClientRect(),
                    o = {
                      x: s.left - 1.5 * window.innerWidth - ut(e).x,
                      y: s.top - 1.5 * window.innerHeight - ut(e).y,
                    },
                    r = {
                      x: o.x + s.width + 2 * window.innerWidth,
                      y: o.y + s.height + 2 * window.innerHeight,
                    },
                    l = "string" == typeof e.dataset[t.name + "Persistent"];
                  e.setAttribute("data-scroll-section-id", n);
                  var a = {
                    el: e,
                    offset: o,
                    limit: r,
                    inView: !1,
                    persistent: l,
                    id: n,
                  };
                  t.sections[n] = a;
                });
            },
          },
          {
            key: "transform",
            value: function (t, e, i, n) {
              var s;
              if (n) {
                var o = ut(t),
                  r = ht(o.x, e, n),
                  l = ht(o.y, i, n);
                s = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                  .concat(r, ",")
                  .concat(l, ",0,1)");
              } else
                s = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,"
                  .concat(e, ",")
                  .concat(i, ",0,1)");
              (t.style.webkitTransform = s),
                (t.style.msTransform = s),
                (t.style.transform = s);
            },
          },
          {
            key: "transformElements",
            value: function (t) {
              var e = this,
                i =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                n = this.instance.scroll.x + this.windowWidth,
                s = this.instance.scroll.y + this.windowHeight,
                o = {
                  x: this.instance.scroll.x + this.windowMiddle.x,
                  y: this.instance.scroll.y + this.windowMiddle.y,
                };
              Object.entries(this.parallaxElements).forEach(function (r) {
                var l = W(r, 2),
                  a = (l[0], l[1]),
                  c = !1;
                if ((t && (c = 0), a.inView || i))
                  switch (a.position) {
                    case "top":
                    case "left":
                      c = e.instance.scroll[e.directionAxis] * -a.speed;
                      break;
                    case "elementTop":
                      c = (s - a.top) * -a.speed;
                      break;
                    case "bottom":
                      c =
                        (e.instance.limit[e.directionAxis] -
                          s +
                          e.windowHeight) *
                        a.speed;
                      break;
                    case "elementLeft":
                      c = (n - a.left) * -a.speed;
                      break;
                    case "right":
                      c =
                        (e.instance.limit[e.directionAxis] -
                          n +
                          e.windowHeight) *
                        a.speed;
                      break;
                    default:
                      c =
                        (o[e.directionAxis] - a.middle[e.directionAxis]) *
                        -a.speed;
                  }
                a.sticky &&
                  (c = a.inView
                    ? "horizontal" === e.direction
                      ? e.instance.scroll.x - a.left + window.innerWidth
                      : e.instance.scroll.y - a.top + window.innerHeight
                    : "horizontal" === e.direction
                    ? e.instance.scroll.x < a.left - window.innerWidth &&
                      e.instance.scroll.x < a.left - window.innerWidth / 2
                      ? 0
                      : e.instance.scroll.x > a.right &&
                        e.instance.scroll.x > a.right + 100 &&
                        a.right - a.left + window.innerWidth
                    : e.instance.scroll.y < a.top - window.innerHeight &&
                      e.instance.scroll.y < a.top - window.innerHeight / 2
                    ? 0
                    : e.instance.scroll.y > a.bottom &&
                      e.instance.scroll.y > a.bottom + 100 &&
                      a.bottom - a.top + window.innerHeight),
                  !1 !== c &&
                    ("horizontal" === a.direction ||
                    ("horizontal" === e.direction && "vertical" !== a.direction)
                      ? e.transform(a.el, c, 0, !t && a.delay)
                      : e.transform(a.el, 0, c, !t && a.delay));
              });
            },
          },
          {
            key: "scrollTo",
            value: function (t) {
              var e,
                i = this,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                s = parseInt(n.offset) || 0,
                o = isNaN(parseInt(n.duration)) ? 1e3 : parseInt(n.duration),
                r = n.easing || [0.25, 0, 0.35, 1],
                l = !!n.disableLerp,
                a = !!n.callback && n.callback;
              if (
                ((r = At.apply(
                  void 0,
                  (function (t) {
                    if (Array.isArray(t)) return D(t);
                  })((e = r)) ||
                    (function (t) {
                      if (
                        "undefined" != typeof Symbol &&
                        Symbol.iterator in Object(t)
                      )
                        return Array.from(t);
                    })(e) ||
                    X(e) ||
                    (function () {
                      throw new TypeError(
                        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    })()
                )),
                "string" == typeof t)
              ) {
                if ("top" === t) t = 0;
                else if ("bottom" === t) t = this.instance.limit.y;
                else if ("left" === t) t = 0;
                else if ("right" === t) t = this.instance.limit.x;
                else if (!(t = document.querySelector(t))) return;
              } else if ("number" == typeof t) t = parseInt(t);
              else if (!t || !t.tagName)
                return void console.warn("`target` parameter is not valid");
              if ("number" != typeof t) {
                if (!dt(t).includes(this.el)) return;
                var c,
                  h = t.getBoundingClientRect(),
                  u = h.top,
                  d = h.left,
                  f = dt(t).find(function (t) {
                    return Object.entries(i.sections)
                      .map(function (t) {
                        var e = W(t, 2);
                        return e[0], e[1];
                      })
                      .find(function (e) {
                        return e.el == t;
                      });
                  });
                (c = f
                  ? ut(f)[this.directionAxis]
                  : -this.instance.scroll[this.directionAxis]),
                  (s = "horizontal" === this.direction ? d + s - c : u + s - c);
              } else s = t + s;
              var p = parseFloat(this.instance.delta[this.directionAxis]),
                m =
                  Math.max(
                    0,
                    Math.min(s, this.instance.limit[this.directionAxis])
                  ) - p,
                v = function (t) {
                  l
                    ? "horizontal" === i.direction
                      ? i.setScroll(p + m * t, i.instance.delta.y)
                      : i.setScroll(i.instance.delta.x, p + m * t)
                    : (i.instance.delta[i.directionAxis] = p + m * t);
                };
              (this.animatingScroll = !0),
                this.stopScrolling(),
                this.startScrolling();
              var y = Date.now();
              !(function t() {
                var e = (Date.now() - y) / o;
                e > 1
                  ? (v(1),
                    (i.animatingScroll = !1),
                    0 == o && i.update(),
                    a && a())
                  : ((i.scrollToRaf = requestAnimationFrame(t)), v(r(e)));
              })();
            },
          },
          {
            key: "update",
            value: function () {
              this.setScrollLimit(),
                this.addSections(),
                this.addElements(),
                this.detectElements(),
                this.updateScroll(),
                this.transformElements(!0),
                this.reinitScrollBar(),
                this.checkScroll(!0);
            },
          },
          {
            key: "startScroll",
            value: function () {
              this.stop = !1;
            },
          },
          {
            key: "stopScroll",
            value: function () {
              this.stop = !0;
            },
          },
          {
            key: "setScroll",
            value: function (t, e) {
              this.instance = x(
                x({}, this.instance),
                {},
                { scroll: { x: t, y: e }, delta: { x: t, y: e }, speed: 0 }
              );
            },
          },
          {
            key: "destroy",
            value: function () {
              Y(C(i.prototype), "destroy", this).call(this),
                this.stopScrolling(),
                this.html.classList.remove(this.smoothClass),
                this.vs.destroy(),
                this.destroyScrollBar(),
                window.removeEventListener("keydown", this.checkKey, !1);
            },
          },
        ]),
        i
      );
    })(R);
  const Lt = (function () {
      function t() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        w(this, t),
          (this.options = e),
          Object.assign(this, H, e),
          (this.smartphone = H.smartphone),
          e.smartphone && Object.assign(this.smartphone, e.smartphone),
          (this.tablet = H.tablet),
          e.tablet && Object.assign(this.tablet, e.tablet),
          this.smooth ||
            "horizontal" != this.direction ||
            console.warn(
              "🚨 `smooth:false` & `horizontal` direction are not yet compatible"
            ),
          this.tablet.smooth ||
            "horizontal" != this.tablet.direction ||
            console.warn(
              "🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"
            ),
          this.smartphone.smooth ||
            "horizontal" != this.smartphone.direction ||
            console.warn(
              "🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"
            ),
          this.init();
      }
      return (
        k(t, [
          {
            key: "init",
            value: function () {
              if (
                ((this.options.isMobile =
                  /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                    navigator.userAgent
                  ) ||
                  ("MacIntel" === navigator.platform &&
                    navigator.maxTouchPoints > 1) ||
                  window.innerWidth < this.tablet.breakpoint),
                (this.options.isTablet =
                  this.options.isMobile &&
                  window.innerWidth >= this.tablet.breakpoint),
                (this.smooth && !this.options.isMobile) ||
                (this.tablet.smooth && this.options.isTablet) ||
                (this.smartphone.smooth &&
                  this.options.isMobile &&
                  !this.options.isTablet)
                  ? (this.scroll = new Ct(this.options))
                  : (this.scroll = new B(this.options)),
                this.scroll.init(),
                window.location.hash)
              ) {
                var t = window.location.hash.slice(
                    1,
                    window.location.hash.length
                  ),
                  e = document.getElementById(t);
                e && this.scroll.scrollTo(e);
              }
            },
          },
          {
            key: "update",
            value: function () {
              this.scroll.update();
            },
          },
          {
            key: "start",
            value: function () {
              this.scroll.startScroll();
            },
          },
          {
            key: "stop",
            value: function () {
              this.scroll.stopScroll();
            },
          },
          {
            key: "scrollTo",
            value: function (t, e) {
              this.scroll.scrollTo(t, e);
            },
          },
          {
            key: "setScroll",
            value: function (t, e) {
              this.scroll.setScroll(t, e);
            },
          },
          {
            key: "on",
            value: function (t, e) {
              this.scroll.setEvents(t, e);
            },
          },
          {
            key: "off",
            value: function (t, e) {
              this.scroll.unsetEvents(t, e);
            },
          },
          {
            key: "destroy",
            value: function () {
              this.scroll.destroy();
            },
          },
        ]),
        t
      );
    })(),
    Ot = class extends h {
      constructor(t) {
        super(t);
      }
      init() {
        (this.scroll = new Lt({ el: this.el, getDirection: !0, smooth: !0 })),
          this.scroll.on("call", (t, e, i, n) => {
            this.call(t[0], { way: e, obj: i }, t[1], t[2]);
          }),
          this.scroll.on("scroll", (t) => {}),
          this.scroll.on("scroll", function (t) {
            document.documentElement.setAttribute(
              "data-direction",
              t.direction
            );
          });
      }
      lazyLoad(t) {
        (async (t, e, i) => {
          let n = e || t.dataset.src,
            s = g.find((t) => t.url === n);
          if (!s) {
            if (
              ((s = await ((t, e = {}) =>
                new Promise((i, n) => {
                  const s = new Image();
                  e.crossOrigin && (s.crossOrigin = e.crossOrigin);
                  const o = () => {
                    i({ element: s, ...b(s) });
                  };
                  s.decode
                    ? ((s.src = t),
                      s
                        .decode()
                        .then(o)
                        .catch((t) => {
                          n(t);
                        }))
                    : ((s.onload = o),
                      (s.onerror = (t) => {
                        n(t);
                      }),
                      (s.src = t));
                }))(n)),
              !s.url)
            )
              return;
            g.push(s);
          }
          t.src !== n &&
            ("IMG" === t.tagName
              ? (t.src = s.url)
              : (t.style.backgroundImage = `url(${s.url})`),
            requestAnimationFrame(() => {
              let e = t.closest(".c-lazy");
              e &&
                (e.classList.add("-lazy-loaded"),
                (e.style.backgroundImage = "")),
                t.classList.add("-lazy-loaded"),
                i?.();
            }));
        })(t.obj.el, null, () => {});
      }
      destroy() {
        this.scroll.destroy();
      }
    };
  function Mt(t) {
    return getComputedStyle(t);
  }
  function Yt(t, e) {
    for (var i in e) {
      var n = e[i];
      "number" == typeof n && (n += "px"), (t.style[i] = n);
    }
    return t;
  }
  function Wt(t) {
    var e = document.createElement("div");
    return (e.className = t), e;
  }
  var Xt =
    "undefined" != typeof Element &&
    (Element.prototype.matches ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector);
  function Dt(t, e) {
    if (!Xt) throw new Error("No element matching method supported");
    return Xt.call(t, e);
  }
  function Ht(t) {
    t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
  }
  function Rt(t, e) {
    return Array.prototype.filter.call(t.children, function (t) {
      return Dt(t, e);
    });
  }
  var jt = {
      main: "ps",
      rtl: "ps__rtl",
      element: {
        thumb: function (t) {
          return "ps__thumb-" + t;
        },
        rail: function (t) {
          return "ps__rail-" + t;
        },
        consuming: "ps__child--consume",
      },
      state: {
        focus: "ps--focus",
        clicking: "ps--clicking",
        active: function (t) {
          return "ps--active-" + t;
        },
        scrolling: function (t) {
          return "ps--scrolling-" + t;
        },
      },
    },
    Pt = { x: null, y: null };
  function It(t, e) {
    var i = t.element.classList,
      n = jt.state.scrolling(e);
    i.contains(n) ? clearTimeout(Pt[e]) : i.add(n);
  }
  function Bt(t, e) {
    Pt[e] = setTimeout(function () {
      return t.isAlive && t.element.classList.remove(jt.state.scrolling(e));
    }, t.settings.scrollingThreshold);
  }
  var _t = function (t) {
      (this.element = t), (this.handlers = {});
    },
    Nt = { isEmpty: { configurable: !0 } };
  (_t.prototype.bind = function (t, e) {
    void 0 === this.handlers[t] && (this.handlers[t] = []),
      this.handlers[t].push(e),
      this.element.addEventListener(t, e, !1);
  }),
    (_t.prototype.unbind = function (t, e) {
      var i = this;
      this.handlers[t] = this.handlers[t].filter(function (n) {
        return (
          !(!e || n === e) || (i.element.removeEventListener(t, n, !1), !1)
        );
      });
    }),
    (_t.prototype.unbindAll = function () {
      for (var t in this.handlers) this.unbind(t);
    }),
    (Nt.isEmpty.get = function () {
      var t = this;
      return Object.keys(this.handlers).every(function (e) {
        return 0 === t.handlers[e].length;
      });
    }),
    Object.defineProperties(_t.prototype, Nt);
  var zt = function () {
    this.eventElements = [];
  };
  function qt(t) {
    if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
    var e = document.createEvent("CustomEvent");
    return e.initCustomEvent(t, !1, !1, void 0), e;
  }
  function Vt(t, e, i, n, s) {
    var o;
    if ((void 0 === n && (n = !0), void 0 === s && (s = !1), "top" === e))
      o = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
    else {
      if ("left" !== e) throw new Error("A proper axis should be provided");
      o = [
        "contentWidth",
        "containerWidth",
        "scrollLeft",
        "x",
        "left",
        "right",
      ];
    }
    !(function (t, e, i, n, s) {
      var o = i[0],
        r = i[1],
        l = i[2],
        a = i[3],
        c = i[4],
        h = i[5];
      void 0 === n && (n = !0), void 0 === s && (s = !1);
      var u = t.element;
      (t.reach[a] = null),
        u[l] < 1 && (t.reach[a] = "start"),
        u[l] > t[o] - t[r] - 1 && (t.reach[a] = "end"),
        e &&
          (u.dispatchEvent(qt("ps-scroll-" + a)),
          e < 0
            ? u.dispatchEvent(qt("ps-scroll-" + c))
            : e > 0 && u.dispatchEvent(qt("ps-scroll-" + h)),
          n &&
            (function (t, e) {
              It(t, e), Bt(t, e);
            })(t, a)),
        t.reach[a] &&
          (e || s) &&
          u.dispatchEvent(qt("ps-" + a + "-reach-" + t.reach[a]));
    })(t, i, o, n, s);
  }
  function Ft(t) {
    return parseInt(t, 10) || 0;
  }
  (zt.prototype.eventElement = function (t) {
    var e = this.eventElements.filter(function (e) {
      return e.element === t;
    })[0];
    return e || ((e = new _t(t)), this.eventElements.push(e)), e;
  }),
    (zt.prototype.bind = function (t, e, i) {
      this.eventElement(t).bind(e, i);
    }),
    (zt.prototype.unbind = function (t, e, i) {
      var n = this.eventElement(t);
      n.unbind(e, i),
        n.isEmpty &&
          this.eventElements.splice(this.eventElements.indexOf(n), 1);
    }),
    (zt.prototype.unbindAll = function () {
      this.eventElements.forEach(function (t) {
        return t.unbindAll();
      }),
        (this.eventElements = []);
    }),
    (zt.prototype.once = function (t, e, i) {
      var n = this.eventElement(t),
        s = function (t) {
          n.unbind(e, s), i(t);
        };
      n.bind(e, s);
    });
  var Ut = {
    isWebKit:
      "undefined" != typeof document &&
      "WebkitAppearance" in document.documentElement.style,
    supportsTouch:
      "undefined" != typeof window &&
      ("ontouchstart" in window ||
        ("maxTouchPoints" in window.navigator &&
          window.navigator.maxTouchPoints > 0) ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
    supportsIePointer:
      "undefined" != typeof navigator && navigator.msMaxTouchPoints,
    isChrome:
      "undefined" != typeof navigator &&
      /Chrome/i.test(navigator && navigator.userAgent),
  };
  function Kt(t) {
    var e = t.element,
      i = Math.floor(e.scrollTop),
      n = e.getBoundingClientRect();
    (t.containerWidth = Math.round(n.width)),
      (t.containerHeight = Math.round(n.height)),
      (t.contentWidth = e.scrollWidth),
      (t.contentHeight = e.scrollHeight),
      e.contains(t.scrollbarXRail) ||
        (Rt(e, jt.element.rail("x")).forEach(function (t) {
          return Ht(t);
        }),
        e.appendChild(t.scrollbarXRail)),
      e.contains(t.scrollbarYRail) ||
        (Rt(e, jt.element.rail("y")).forEach(function (t) {
          return Ht(t);
        }),
        e.appendChild(t.scrollbarYRail)),
      !t.settings.suppressScrollX &&
      t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth
        ? ((t.scrollbarXActive = !0),
          (t.railXWidth = t.containerWidth - t.railXMarginWidth),
          (t.railXRatio = t.containerWidth / t.railXWidth),
          (t.scrollbarXWidth = $t(
            t,
            Ft((t.railXWidth * t.containerWidth) / t.contentWidth)
          )),
          (t.scrollbarXLeft = Ft(
            ((t.negativeScrollAdjustment + e.scrollLeft) *
              (t.railXWidth - t.scrollbarXWidth)) /
              (t.contentWidth - t.containerWidth)
          )))
        : (t.scrollbarXActive = !1),
      !t.settings.suppressScrollY &&
      t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight
        ? ((t.scrollbarYActive = !0),
          (t.railYHeight = t.containerHeight - t.railYMarginHeight),
          (t.railYRatio = t.containerHeight / t.railYHeight),
          (t.scrollbarYHeight = $t(
            t,
            Ft((t.railYHeight * t.containerHeight) / t.contentHeight)
          )),
          (t.scrollbarYTop = Ft(
            (i * (t.railYHeight - t.scrollbarYHeight)) /
              (t.contentHeight - t.containerHeight)
          )))
        : (t.scrollbarYActive = !1),
      t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth &&
        (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
      t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight &&
        (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
      (function (t, e) {
        var i = { width: e.railXWidth },
          n = Math.floor(t.scrollTop);
        e.isRtl
          ? (i.left =
              e.negativeScrollAdjustment +
              t.scrollLeft +
              e.containerWidth -
              e.contentWidth)
          : (i.left = t.scrollLeft),
          e.isScrollbarXUsingBottom
            ? (i.bottom = e.scrollbarXBottom - n)
            : (i.top = e.scrollbarXTop + n),
          Yt(e.scrollbarXRail, i);
        var s = { top: n, height: e.railYHeight };
        e.isScrollbarYUsingRight
          ? e.isRtl
            ? (s.right =
                e.contentWidth -
                (e.negativeScrollAdjustment + t.scrollLeft) -
                e.scrollbarYRight -
                e.scrollbarYOuterWidth -
                9)
            : (s.right = e.scrollbarYRight - t.scrollLeft)
          : e.isRtl
          ? (s.left =
              e.negativeScrollAdjustment +
              t.scrollLeft +
              2 * e.containerWidth -
              e.contentWidth -
              e.scrollbarYLeft -
              e.scrollbarYOuterWidth)
          : (s.left = e.scrollbarYLeft + t.scrollLeft),
          Yt(e.scrollbarYRail, s),
          Yt(e.scrollbarX, {
            left: e.scrollbarXLeft,
            width: e.scrollbarXWidth - e.railBorderXWidth,
          }),
          Yt(e.scrollbarY, {
            top: e.scrollbarYTop,
            height: e.scrollbarYHeight - e.railBorderYWidth,
          });
      })(e, t),
      t.scrollbarXActive
        ? e.classList.add(jt.state.active("x"))
        : (e.classList.remove(jt.state.active("x")),
          (t.scrollbarXWidth = 0),
          (t.scrollbarXLeft = 0),
          (e.scrollLeft = !0 === t.isRtl ? t.contentWidth : 0)),
      t.scrollbarYActive
        ? e.classList.add(jt.state.active("y"))
        : (e.classList.remove(jt.state.active("y")),
          (t.scrollbarYHeight = 0),
          (t.scrollbarYTop = 0),
          (e.scrollTop = 0));
  }
  function $t(t, e) {
    return (
      t.settings.minScrollbarLength &&
        (e = Math.max(e, t.settings.minScrollbarLength)),
      t.settings.maxScrollbarLength &&
        (e = Math.min(e, t.settings.maxScrollbarLength)),
      e
    );
  }
  function Zt(t, e) {
    var i = e[0],
      n = e[1],
      s = e[2],
      o = e[3],
      r = e[4],
      l = e[5],
      a = e[6],
      c = e[7],
      h = e[8],
      u = t.element,
      d = null,
      f = null,
      p = null;
    function m(e) {
      e.touches && e.touches[0] && (e[s] = e.touches[0].pageY),
        (u[a] = d + p * (e[s] - f)),
        It(t, c),
        Kt(t),
        e.stopPropagation(),
        e.type.startsWith("touch") &&
          e.changedTouches.length > 1 &&
          e.preventDefault();
    }
    function v() {
      Bt(t, c),
        t[h].classList.remove(jt.state.clicking),
        t.event.unbind(t.ownerDocument, "mousemove", m);
    }
    function y(e, r) {
      (d = u[a]),
        r && e.touches && (e[s] = e.touches[0].pageY),
        (f = e[s]),
        (p = (t[n] - t[i]) / (t[o] - t[l])),
        r
          ? t.event.bind(t.ownerDocument, "touchmove", m)
          : (t.event.bind(t.ownerDocument, "mousemove", m),
            t.event.once(t.ownerDocument, "mouseup", v),
            e.preventDefault()),
        t[h].classList.add(jt.state.clicking),
        e.stopPropagation();
    }
    t.event.bind(t[r], "mousedown", function (t) {
      y(t);
    }),
      t.event.bind(t[r], "touchstart", function (t) {
        y(t, !0);
      });
  }
  var Gt = {
      "click-rail": function (t) {
        t.element,
          t.event.bind(t.scrollbarY, "mousedown", function (t) {
            return t.stopPropagation();
          }),
          t.event.bind(t.scrollbarYRail, "mousedown", function (e) {
            var i =
              e.pageY -
                window.pageYOffset -
                t.scrollbarYRail.getBoundingClientRect().top >
              t.scrollbarYTop
                ? 1
                : -1;
            (t.element.scrollTop += i * t.containerHeight),
              Kt(t),
              e.stopPropagation();
          }),
          t.event.bind(t.scrollbarX, "mousedown", function (t) {
            return t.stopPropagation();
          }),
          t.event.bind(t.scrollbarXRail, "mousedown", function (e) {
            var i =
              e.pageX -
                window.pageXOffset -
                t.scrollbarXRail.getBoundingClientRect().left >
              t.scrollbarXLeft
                ? 1
                : -1;
            (t.element.scrollLeft += i * t.containerWidth),
              Kt(t),
              e.stopPropagation();
          });
      },
      "drag-thumb": function (t) {
        Zt(t, [
          "containerWidth",
          "contentWidth",
          "pageX",
          "railXWidth",
          "scrollbarX",
          "scrollbarXWidth",
          "scrollLeft",
          "x",
          "scrollbarXRail",
        ]),
          Zt(t, [
            "containerHeight",
            "contentHeight",
            "pageY",
            "railYHeight",
            "scrollbarY",
            "scrollbarYHeight",
            "scrollTop",
            "y",
            "scrollbarYRail",
          ]);
      },
      keyboard: function (t) {
        var e = t.element;
        t.event.bind(t.ownerDocument, "keydown", function (i) {
          if (
            !(
              (i.isDefaultPrevented && i.isDefaultPrevented()) ||
              i.defaultPrevented
            ) &&
            (Dt(e, ":hover") ||
              Dt(t.scrollbarX, ":focus") ||
              Dt(t.scrollbarY, ":focus"))
          ) {
            var n,
              s = document.activeElement
                ? document.activeElement
                : t.ownerDocument.activeElement;
            if (s) {
              if ("IFRAME" === s.tagName) s = s.contentDocument.activeElement;
              else for (; s.shadowRoot; ) s = s.shadowRoot.activeElement;
              if (
                Dt((n = s), "input,[contenteditable]") ||
                Dt(n, "select,[contenteditable]") ||
                Dt(n, "textarea,[contenteditable]") ||
                Dt(n, "button,[contenteditable]")
              )
                return;
            }
            var o = 0,
              r = 0;
            switch (i.which) {
              case 37:
                o = i.metaKey
                  ? -t.contentWidth
                  : i.altKey
                  ? -t.containerWidth
                  : -30;
                break;
              case 38:
                r = i.metaKey
                  ? t.contentHeight
                  : i.altKey
                  ? t.containerHeight
                  : 30;
                break;
              case 39:
                o = i.metaKey
                  ? t.contentWidth
                  : i.altKey
                  ? t.containerWidth
                  : 30;
                break;
              case 40:
                r = i.metaKey
                  ? -t.contentHeight
                  : i.altKey
                  ? -t.containerHeight
                  : -30;
                break;
              case 32:
                r = i.shiftKey ? t.containerHeight : -t.containerHeight;
                break;
              case 33:
                r = t.containerHeight;
                break;
              case 34:
                r = -t.containerHeight;
                break;
              case 36:
                r = t.contentHeight;
                break;
              case 35:
                r = -t.contentHeight;
                break;
              default:
                return;
            }
            (t.settings.suppressScrollX && 0 !== o) ||
              (t.settings.suppressScrollY && 0 !== r) ||
              ((e.scrollTop -= r),
              (e.scrollLeft += o),
              Kt(t),
              (function (i, n) {
                var s = Math.floor(e.scrollTop);
                if (0 === i) {
                  if (!t.scrollbarYActive) return !1;
                  if (
                    (0 === s && n > 0) ||
                    (s >= t.contentHeight - t.containerHeight && n < 0)
                  )
                    return !t.settings.wheelPropagation;
                }
                var o = e.scrollLeft;
                if (0 === n) {
                  if (!t.scrollbarXActive) return !1;
                  if (
                    (0 === o && i < 0) ||
                    (o >= t.contentWidth - t.containerWidth && i > 0)
                  )
                    return !t.settings.wheelPropagation;
                }
                return !0;
              })(o, r) && i.preventDefault());
          }
        });
      },
      wheel: function (t) {
        var e = t.element;
        function i(i) {
          var n = (function (t) {
              var e = t.deltaX,
                i = -1 * t.deltaY;
              return (
                (void 0 !== e && void 0 !== i) ||
                  ((e = (-1 * t.wheelDeltaX) / 6), (i = t.wheelDeltaY / 6)),
                t.deltaMode && 1 === t.deltaMode && ((e *= 10), (i *= 10)),
                e != e && i != i && ((e = 0), (i = t.wheelDelta)),
                t.shiftKey ? [-i, -e] : [e, i]
              );
            })(i),
            s = n[0],
            o = n[1];
          if (
            !(function (t, i, n) {
              if (!Ut.isWebKit && e.querySelector("select:focus")) return !0;
              if (!e.contains(t)) return !1;
              for (var s = t; s && s !== e; ) {
                if (s.classList.contains(jt.element.consuming)) return !0;
                var o = Mt(s);
                if (n && o.overflowY.match(/(scroll|auto)/)) {
                  var r = s.scrollHeight - s.clientHeight;
                  if (
                    r > 0 &&
                    ((s.scrollTop > 0 && n < 0) || (s.scrollTop < r && n > 0))
                  )
                    return !0;
                }
                if (i && o.overflowX.match(/(scroll|auto)/)) {
                  var l = s.scrollWidth - s.clientWidth;
                  if (
                    l > 0 &&
                    ((s.scrollLeft > 0 && i < 0) || (s.scrollLeft < l && i > 0))
                  )
                    return !0;
                }
                s = s.parentNode;
              }
              return !1;
            })(i.target, s, o)
          ) {
            var r = !1;
            t.settings.useBothWheelAxes
              ? t.scrollbarYActive && !t.scrollbarXActive
                ? (o
                    ? (e.scrollTop -= o * t.settings.wheelSpeed)
                    : (e.scrollTop += s * t.settings.wheelSpeed),
                  (r = !0))
                : t.scrollbarXActive &&
                  !t.scrollbarYActive &&
                  (s
                    ? (e.scrollLeft += s * t.settings.wheelSpeed)
                    : (e.scrollLeft -= o * t.settings.wheelSpeed),
                  (r = !0))
              : ((e.scrollTop -= o * t.settings.wheelSpeed),
                (e.scrollLeft += s * t.settings.wheelSpeed)),
              Kt(t),
              (r =
                r ||
                (function (i, n) {
                  var s = Math.floor(e.scrollTop),
                    o = 0 === e.scrollTop,
                    r = s + e.offsetHeight === e.scrollHeight,
                    l = 0 === e.scrollLeft,
                    a = e.scrollLeft + e.offsetWidth === e.scrollWidth;
                  return (
                    !(Math.abs(n) > Math.abs(i) ? o || r : l || a) ||
                    !t.settings.wheelPropagation
                  );
                })(s, o)),
              r && !i.ctrlKey && (i.stopPropagation(), i.preventDefault());
          }
        }
        void 0 !== window.onwheel
          ? t.event.bind(e, "wheel", i)
          : void 0 !== window.onmousewheel && t.event.bind(e, "mousewheel", i);
      },
      touch: function (t) {
        if (Ut.supportsTouch || Ut.supportsIePointer) {
          var e = t.element,
            i = {},
            n = 0,
            s = {},
            o = null;
          Ut.supportsTouch
            ? (t.event.bind(e, "touchstart", c),
              t.event.bind(e, "touchmove", h),
              t.event.bind(e, "touchend", u))
            : Ut.supportsIePointer &&
              (window.PointerEvent
                ? (t.event.bind(e, "pointerdown", c),
                  t.event.bind(e, "pointermove", h),
                  t.event.bind(e, "pointerup", u))
                : window.MSPointerEvent &&
                  (t.event.bind(e, "MSPointerDown", c),
                  t.event.bind(e, "MSPointerMove", h),
                  t.event.bind(e, "MSPointerUp", u)));
        }
        function r(i, n) {
          (e.scrollTop -= n), (e.scrollLeft -= i), Kt(t);
        }
        function l(t) {
          return t.targetTouches ? t.targetTouches[0] : t;
        }
        function a(t) {
          return !(
            (t.pointerType && "pen" === t.pointerType && 0 === t.buttons) ||
            ((!t.targetTouches || 1 !== t.targetTouches.length) &&
              (!t.pointerType ||
                "mouse" === t.pointerType ||
                t.pointerType === t.MSPOINTER_TYPE_MOUSE))
          );
        }
        function c(t) {
          if (a(t)) {
            var e = l(t);
            (i.pageX = e.pageX),
              (i.pageY = e.pageY),
              (n = new Date().getTime()),
              null !== o && clearInterval(o);
          }
        }
        function h(o) {
          if (a(o)) {
            var c = l(o),
              h = { pageX: c.pageX, pageY: c.pageY },
              u = h.pageX - i.pageX,
              d = h.pageY - i.pageY;
            if (
              (function (t, i, n) {
                if (!e.contains(t)) return !1;
                for (var s = t; s && s !== e; ) {
                  if (s.classList.contains(jt.element.consuming)) return !0;
                  var o = Mt(s);
                  if (n && o.overflowY.match(/(scroll|auto)/)) {
                    var r = s.scrollHeight - s.clientHeight;
                    if (
                      r > 0 &&
                      ((s.scrollTop > 0 && n < 0) || (s.scrollTop < r && n > 0))
                    )
                      return !0;
                  }
                  if (i && o.overflowX.match(/(scroll|auto)/)) {
                    var l = s.scrollWidth - s.clientWidth;
                    if (
                      l > 0 &&
                      ((s.scrollLeft > 0 && i < 0) ||
                        (s.scrollLeft < l && i > 0))
                    )
                      return !0;
                  }
                  s = s.parentNode;
                }
                return !1;
              })(o.target, u, d)
            )
              return;
            r(u, d), (i = h);
            var f = new Date().getTime(),
              p = f - n;
            p > 0 && ((s.x = u / p), (s.y = d / p), (n = f)),
              (function (i, n) {
                var s = Math.floor(e.scrollTop),
                  o = e.scrollLeft,
                  r = Math.abs(i),
                  l = Math.abs(n);
                if (l > r) {
                  if (
                    (n < 0 && s === t.contentHeight - t.containerHeight) ||
                    (n > 0 && 0 === s)
                  )
                    return 0 === window.scrollY && n > 0 && Ut.isChrome;
                } else if (
                  r > l &&
                  ((i < 0 && o === t.contentWidth - t.containerWidth) ||
                    (i > 0 && 0 === o))
                )
                  return !0;
                return !0;
              })(u, d) && o.preventDefault();
          }
        }
        function u() {
          t.settings.swipeEasing &&
            (clearInterval(o),
            (o = setInterval(function () {
              t.isInitialized
                ? clearInterval(o)
                : s.x || s.y
                ? Math.abs(s.x) < 0.01 && Math.abs(s.y) < 0.01
                  ? clearInterval(o)
                  : t.element
                  ? (r(30 * s.x, 30 * s.y), (s.x *= 0.8), (s.y *= 0.8))
                  : clearInterval(o)
                : clearInterval(o);
            }, 10)));
        }
      },
    },
    Jt = function (t, e) {
      var i = this;
      if (
        (void 0 === e && (e = {}),
        "string" == typeof t && (t = document.querySelector(t)),
        !t || !t.nodeName)
      )
        throw new Error(
          "no element is specified to initialize PerfectScrollbar"
        );
      for (var n in ((this.element = t),
      t.classList.add(jt.main),
      (this.settings = {
        handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
        maxScrollbarLength: null,
        minScrollbarLength: null,
        scrollingThreshold: 1e3,
        scrollXMarginOffset: 0,
        scrollYMarginOffset: 0,
        suppressScrollX: !1,
        suppressScrollY: !1,
        swipeEasing: !0,
        useBothWheelAxes: !1,
        wheelPropagation: !0,
        wheelSpeed: 1,
      }),
      e))
        this.settings[n] = e[n];
      (this.containerWidth = null),
        (this.containerHeight = null),
        (this.contentWidth = null),
        (this.contentHeight = null);
      var s,
        o,
        r = function () {
          return t.classList.add(jt.state.focus);
        },
        l = function () {
          return t.classList.remove(jt.state.focus);
        };
      (this.isRtl = "rtl" === Mt(t).direction),
        !0 === this.isRtl && t.classList.add(jt.rtl),
        (this.isNegativeScroll =
          ((o = t.scrollLeft),
          (t.scrollLeft = -1),
          (s = t.scrollLeft < 0),
          (t.scrollLeft = o),
          s)),
        (this.negativeScrollAdjustment = this.isNegativeScroll
          ? t.scrollWidth - t.clientWidth
          : 0),
        (this.event = new zt()),
        (this.ownerDocument = t.ownerDocument || document),
        (this.scrollbarXRail = Wt(jt.element.rail("x"))),
        t.appendChild(this.scrollbarXRail),
        (this.scrollbarX = Wt(jt.element.thumb("x"))),
        this.scrollbarXRail.appendChild(this.scrollbarX),
        this.scrollbarX.setAttribute("tabindex", 0),
        this.event.bind(this.scrollbarX, "focus", r),
        this.event.bind(this.scrollbarX, "blur", l),
        (this.scrollbarXActive = null),
        (this.scrollbarXWidth = null),
        (this.scrollbarXLeft = null);
      var a = Mt(this.scrollbarXRail);
      (this.scrollbarXBottom = parseInt(a.bottom, 10)),
        isNaN(this.scrollbarXBottom)
          ? ((this.isScrollbarXUsingBottom = !1),
            (this.scrollbarXTop = Ft(a.top)))
          : (this.isScrollbarXUsingBottom = !0),
        (this.railBorderXWidth =
          Ft(a.borderLeftWidth) + Ft(a.borderRightWidth)),
        Yt(this.scrollbarXRail, { display: "block" }),
        (this.railXMarginWidth = Ft(a.marginLeft) + Ft(a.marginRight)),
        Yt(this.scrollbarXRail, { display: "" }),
        (this.railXWidth = null),
        (this.railXRatio = null),
        (this.scrollbarYRail = Wt(jt.element.rail("y"))),
        t.appendChild(this.scrollbarYRail),
        (this.scrollbarY = Wt(jt.element.thumb("y"))),
        this.scrollbarYRail.appendChild(this.scrollbarY),
        this.scrollbarY.setAttribute("tabindex", 0),
        this.event.bind(this.scrollbarY, "focus", r),
        this.event.bind(this.scrollbarY, "blur", l),
        (this.scrollbarYActive = null),
        (this.scrollbarYHeight = null),
        (this.scrollbarYTop = null);
      var c = Mt(this.scrollbarYRail);
      (this.scrollbarYRight = parseInt(c.right, 10)),
        isNaN(this.scrollbarYRight)
          ? ((this.isScrollbarYUsingRight = !1),
            (this.scrollbarYLeft = Ft(c.left)))
          : (this.isScrollbarYUsingRight = !0),
        (this.scrollbarYOuterWidth = this.isRtl
          ? (function (t) {
              var e = Mt(t);
              return (
                Ft(e.width) +
                Ft(e.paddingLeft) +
                Ft(e.paddingRight) +
                Ft(e.borderLeftWidth) +
                Ft(e.borderRightWidth)
              );
            })(this.scrollbarY)
          : null),
        (this.railBorderYWidth =
          Ft(c.borderTopWidth) + Ft(c.borderBottomWidth)),
        Yt(this.scrollbarYRail, { display: "block" }),
        (this.railYMarginHeight = Ft(c.marginTop) + Ft(c.marginBottom)),
        Yt(this.scrollbarYRail, { display: "" }),
        (this.railYHeight = null),
        (this.railYRatio = null),
        (this.reach = {
          x:
            t.scrollLeft <= 0
              ? "start"
              : t.scrollLeft >= this.contentWidth - this.containerWidth
              ? "end"
              : null,
          y:
            t.scrollTop <= 0
              ? "start"
              : t.scrollTop >= this.contentHeight - this.containerHeight
              ? "end"
              : null,
        }),
        (this.isAlive = !0),
        this.settings.handlers.forEach(function (t) {
          return Gt[t](i);
        }),
        (this.lastScrollTop = Math.floor(t.scrollTop)),
        (this.lastScrollLeft = t.scrollLeft),
        this.event.bind(this.element, "scroll", function (t) {
          return i.onScroll(t);
        }),
        Kt(this);
    };
  (Jt.prototype.update = function () {
    this.isAlive &&
      ((this.negativeScrollAdjustment = this.isNegativeScroll
        ? this.element.scrollWidth - this.element.clientWidth
        : 0),
      Yt(this.scrollbarXRail, { display: "block" }),
      Yt(this.scrollbarYRail, { display: "block" }),
      (this.railXMarginWidth =
        Ft(Mt(this.scrollbarXRail).marginLeft) +
        Ft(Mt(this.scrollbarXRail).marginRight)),
      (this.railYMarginHeight =
        Ft(Mt(this.scrollbarYRail).marginTop) +
        Ft(Mt(this.scrollbarYRail).marginBottom)),
      Yt(this.scrollbarXRail, { display: "none" }),
      Yt(this.scrollbarYRail, { display: "none" }),
      Kt(this),
      Vt(this, "top", 0, !1, !0),
      Vt(this, "left", 0, !1, !0),
      Yt(this.scrollbarXRail, { display: "" }),
      Yt(this.scrollbarYRail, { display: "" }));
  }),
    (Jt.prototype.onScroll = function (t) {
      this.isAlive &&
        (Kt(this),
        Vt(this, "top", this.element.scrollTop - this.lastScrollTop),
        Vt(this, "left", this.element.scrollLeft - this.lastScrollLeft),
        (this.lastScrollTop = Math.floor(this.element.scrollTop)),
        (this.lastScrollLeft = this.element.scrollLeft));
    }),
    (Jt.prototype.destroy = function () {
      this.isAlive &&
        (this.event.unbindAll(),
        Ht(this.scrollbarX),
        Ht(this.scrollbarY),
        Ht(this.scrollbarXRail),
        Ht(this.scrollbarYRail),
        this.removePsClasses(),
        (this.element = null),
        (this.scrollbarX = null),
        (this.scrollbarY = null),
        (this.scrollbarXRail = null),
        (this.scrollbarYRail = null),
        (this.isAlive = !1));
    }),
    (Jt.prototype.removePsClasses = function () {
      this.element.className = this.element.className
        .split(" ")
        .filter(function (t) {
          return !t.match(/^ps([-_].+|)$/);
        })
        .join(" ");
    });
  const Qt = Jt,
    te = class extends h {
      constructor(t) {
        super(t),
          (this.events = {
            click: { header: "updateScroll", open: "openScroll" },
          });
      }
      init() {
        this.scrollbar = new Qt(this.el, {
          wheelSpeed: 1,
          wheelPropagation: !0,
          minScrollbarLength: 20,
        });
      }
      updateScroll() {
        (document.querySelector(".is-store-locator").scrollTop = 0),
          document
            .querySelector(".store-locator__filter")
            .classList.remove("is-open");
      }
      openScroll() {
        document
          .querySelector(".store-locator__filter")
          .classList.toggle("is-open");
      }
    },
    ee = document.body,
    ie = class extends h {
      constructor(t) {
        super(t),
          (this.events = {
            click: { toggle: "toggleNavMob" },
            mouseenter: { open: "openNav", close: "closeNav" },
          });
      }
      openNav() {
        ee.classList.contains("menu-open")
          ? ee.classList.remove("menu-open")
          : ee.classList.add("menu-open");
      }
      closeNav() {
        ee.classList.remove("menu-open");
      }
      toggleNavMob() {
        ee.classList.toggle("menu-open");
      }
    },
    ne = class extends h {
      constructor(t) {
        super(t);
      }
      init() {
        console.log("true"),
          setTimeout(() => {
            FsAttributes.cmsfilter.destroy(), FsAttributes.cmsfilter.init();
          }, 50);
      }
    },
    se = class extends h {
      constructor(t) {
        super(t), (this.events = { click: { toggle: "toggle" } });
      }
      toggle() {
        this.el.classList.toggle("play");
        let t = document.getElementsByTagName("video")[0];
        t.muted = 0 == t.muted;
      }
    },
    oe = class extends h {
      constructor(t) {
        super(t);
      }
      init() {
        const t = this.el;
        window.innerWidth > 767
          ? t.setAttribute(
              "src",
              "https://files.starterapp.co/api/v1/buckets/breadhead/objects/download?preview=true&prefix=ZHViX2NhbXBhaWduLWRlc2t0b3AubXA0&version_id=null"
            )
          : t.setAttribute(
              "src",
              "https://files.starterapp.co/api/v1/buckets/breadhead/objects/download?preview=true&prefix=Tk8gTE9HT19EVUJfQ2FtcGFpZ25fdGVhc2VyX21vYmlsZV8zMDAwLm1wNA==&version_id=null"
            );
      }
    },
    re = class extends h {
      constructor(t) {
        super(t);
      }
      init() {
        setTimeout(() => {
          var t,
            e = {},
            i = {};
          const n = [...document.querySelectorAll(".collection-item")].reduce(
            (t, e) => {
              const i = e.dataset.city,
                n = e.innerText,
                s = e.dataset.url,
                o = [
                  parseFloat(e.dataset.latitude),
                  parseFloat(e.dataset.longitude),
                ],
                r = t.find((t) => t.cityName === i);
              return (
                r
                  ? r.shops.push({ coordinates: o, name: n, url: s })
                  : t.push({
                      cityName: i,
                      shops: [{ coordinates: o, name: n, url: s }],
                    }),
                t
              );
            },
            []
          );
          console.log(n),
            ymaps.ready(function () {
              t = new ymaps.Map("map", {
                center: [55.75222, 37.61556],
                zoom: 11,
                controls: ["zoomControl"],
              });
              for (var s = 0; s < n.length; s++) {
                for (
                  var o = new ymaps.GeoObjectCollection(), r = 0;
                  r < n[s].shops.length;
                  r++
                ) {
                  var l = n[s].shops[r],
                    a = new ymaps.Placemark(
                      l.coordinates,
                      {
                        hintContent: l.name,
                        balloonContent: l.name,
                        url: l.url,
                      },
                      {
                        iconLayout: "default#imageWithContent",
                        iconImageHref:
                          "https://uploads-ssl.webflow.com/641020650b8f973d572415c3/644290833ed23269a4a42bec_Map%20Pin.svg",
                        iconImageSize: [56, 56],
                        iconImageOffset: [-24, -24],
                        iconContentOffset: [15, 15],
                      }
                    );
                  i[s] || (i[s] = {}), (i[s][r] = a), o.add(a);
                }
                (e[s] = o), t.geoObjects.add(o);
              }
              t.geoObjects.events.add("click", function (t) {
                t.preventDefault();
                var e = t.get("target");
                console.log(e.properties.get("url"));
              });
            }),
            $(".open-map").click(function () {
              var e = $(this).attr("data-coord");
              (e = JSON.parse(e)),
                t.setZoom(16, { smooth: !0, centering: !0 }),
                t.panTo(e);
            });
        }, 50);
      }
    },
    le = document.documentElement;
  document.documentElement.style.setProperty("--vh", `${window.innerHeight}px`);
  const ae = new d({ modules: e });
  function ce() {
    ae.init(ae),
      le.classList.add("is-loaded"),
      le.classList.add("is-ready"),
      le.classList.remove("is-loading");
  }
  window.onload = (t) => {
    const e = document.getElementById("main-css");
    e
      ? e.isLoaded
        ? ce()
        : e.addEventListener("load", (t) => {
            ce();
          })
      : console.warn('The "main-css" stylesheet not found');
  };
})();
