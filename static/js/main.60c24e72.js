/*! For license information please see main.60c24e72.js.LICENSE.txt */
!(function () {
  var e = {
      635: function (e, t) {
        "use strict";
        var n =
          /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
      },
      463: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = n(296);
        function i(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var o = new Set(),
          s = {};
        function l(e, t) {
          u(e, t), u(e + "Capture", t);
        }
        function u(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) o.add(t[e]);
        }
        var c = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          f = Object.prototype.hasOwnProperty,
          d =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function v(e, t, n, r, a, i, o) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = r),
            (this.attributeNamespace = a),
            (this.mustUseProperty = n),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = i),
            (this.removeEmptyString = o);
        }
        var m = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            m[e] = new v(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new v(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            m[e] = new v(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            m[e] = new v(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            m[e] = new v(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            m[e] = new v(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var y = /[\-:]([a-z])/g;
        function g(e) {
          return e[1].toUpperCase();
        }
        function b(e, t, n, r) {
          var a = m.hasOwnProperty(t) ? m[t] : null;
          (null !== a
            ? 0 !== a.type
            : r ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, n, r) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, n, r) {
                  if (null !== n && 0 === n.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !r &&
                        (null !== n
                          ? !n.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, n, r)
              )
                return !0;
              if (r) return !1;
              if (null !== n)
                switch (n.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, n, a, r) && (n = null),
            r || null === a
              ? (function (e) {
                  return (
                    !!f.call(h, e) ||
                    (!f.call(p, e) &&
                      (d.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
              : a.mustUseProperty
              ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
              : ((t = a.attributeName),
                (r = a.attributeNamespace),
                null === n
                  ? e.removeAttribute(t)
                  : ((n =
                      3 === (a = a.type) || (4 === a && !0 === n)
                        ? ""
                        : "" + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, g);
            m[t] = new v(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(y, g);
              m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(y, g);
            m[t] = new v(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new v(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          x = Symbol.for("react.element"),
          k = Symbol.for("react.portal"),
          S = Symbol.for("react.fragment"),
          E = Symbol.for("react.strict_mode"),
          C = Symbol.for("react.profiler"),
          P = Symbol.for("react.provider"),
          T = Symbol.for("react.context"),
          j = Symbol.for("react.forward_ref"),
          _ = Symbol.for("react.suspense"),
          N = Symbol.for("react.suspense_list"),
          O = Symbol.for("react.memo"),
          L = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var A = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var M = Symbol.iterator;
        function R(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (M && e[M]) || e["@@iterator"])
            ? e
            : null;
        }
        var D,
          V = Object.assign;
        function I(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (n) {
              var t = n.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var F = !1;
        function z(e, t) {
          if (!e || F) return "";
          F = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var r = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  r = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                r = u;
              }
              e();
            }
          } catch (u) {
            if (u && r && "string" === typeof u.stack) {
              for (
                var a = u.stack.split("\n"),
                  i = r.stack.split("\n"),
                  o = a.length - 1,
                  s = i.length - 1;
                1 <= o && 0 <= s && a[o] !== i[s];

              )
                s--;
              for (; 1 <= o && 0 <= s; o--, s--)
                if (a[o] !== i[s]) {
                  if (1 !== o || 1 !== s)
                    do {
                      if ((o--, 0 > --s || a[o] !== i[s])) {
                        var l = "\n" + a[o].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            l.includes("<anonymous>") &&
                            (l = l.replace("<anonymous>", e.displayName)),
                          l
                        );
                      }
                    } while (1 <= o && 0 <= s);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? I(e) : "";
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return I(e.type);
            case 16:
              return I("Lazy");
            case 13:
              return I("Suspense");
            case 19:
              return I("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = z(e.type, !1));
            case 11:
              return (e = z(e.type.render, !1));
            case 1:
              return (e = z(e.type, !0));
            default:
              return "";
          }
        }
        function B(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case S:
              return "Fragment";
            case k:
              return "Portal";
            case C:
              return "Profiler";
            case E:
              return "StrictMode";
            case _:
              return "Suspense";
            case N:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case T:
                return (e.displayName || "Context") + ".Consumer";
              case P:
                return (e._context.displayName || "Context") + ".Provider";
              case j:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case O:
                return null !== (t = e.displayName || null)
                  ? t
                  : B(e.type) || "Memo";
              case L:
                (t = e._payload), (e = e._init);
                try {
                  return B(e(t));
                } catch (n) {}
            }
          return null;
        }
        function W(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return B(t);
            case 8:
              return t === E ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function H(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function Q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof n &&
                "function" === typeof n.get &&
                "function" === typeof n.set
              ) {
                var a = n.get,
                  i = n.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return a.call(this);
                    },
                    set: function (e) {
                      (r = "" + e), i.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: n.enumerable }),
                  {
                    getValue: function () {
                      return r;
                    },
                    setValue: function (e) {
                      r = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function Y(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = $(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function G(e, t) {
          var n = t.checked;
          return V({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked,
          });
        }
        function X(e, t) {
          var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
          (n = H(null != t.value ? t.value : n)),
            (e._wrapperState = {
              initialChecked: r,
              initialValue: n,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function K(e, t) {
          null != (t = t.checked) && b(e, "checked", t, !1);
        }
        function Z(e, t) {
          K(e, t);
          var n = H(t.value),
            r = t.type;
          if (null != n)
            "number" === r
              ? ((0 === n && "" === e.value) || e.value != n) &&
                (e.value = "" + n)
              : e.value !== "" + n && (e.value = "" + n);
          else if ("submit" === r || "reset" === r)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, n)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, H(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function J(e, t, n) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (
              !(
                ("submit" !== r && "reset" !== r) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              n || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (n = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== n && (e.name = n);
        }
        function ee(e, t, n) {
          ("number" === t && q(e.ownerDocument) === e) ||
            (null == n
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
        }
        var te = Array.isArray;
        function ne(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
            for (n = 0; n < e.length; n++)
              (a = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== a && (e[n].selected = a),
                a && r && (e[n].defaultSelected = !0);
          } else {
            for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
              if (e[a].value === n)
                return (
                  (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
                );
              null !== t || e[a].disabled || (t = e[a]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function re(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
          return V({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function ae(e, t) {
          var n = t.value;
          if (null == n) {
            if (((n = t.children), (t = t.defaultValue), null != n)) {
              if (null != t) throw Error(i(92));
              if (te(n)) {
                if (1 < n.length) throw Error(i(93));
                n = n[0];
              }
              t = n;
            }
            null == t && (t = ""), (n = t);
          }
          e._wrapperState = { initialValue: H(n) };
        }
        function ie(e, t) {
          var n = H(t.value),
            r = H(t.defaultValue);
          null != n &&
            ((n = "" + n) !== e.value && (e.value = n),
            null == t.defaultValue &&
              e.defaultValue !== n &&
              (e.defaultValue = n)),
            null != r && (e.defaultValue = "" + r);
        }
        function oe(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function le(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var ue,
          ce,
          fe =
            ((ce = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, n, r) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function de(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ["Webkit", "ms", "Moz", "O"];
        function ve(e, t, n) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : n ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function me(e, t) {
          for (var n in ((e = e.style), t))
            if (t.hasOwnProperty(n)) {
              var r = 0 === n.indexOf("--"),
                a = ve(n, t[n], r);
              "float" === n && (n = "cssFloat"),
                r ? e.setProperty(n, a) : (e[n] = a);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ye = V(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ge(e, t) {
          if (t) {
            if (
              ye[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(i(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(i(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(i(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(i(62));
          }
        }
        function be(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var we = null;
        function xe(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Se = null,
          Ee = null;
        function Ce(e) {
          if ((e = ba(e))) {
            if ("function" !== typeof ke) throw Error(i(280));
            var t = e.stateNode;
            t && ((t = xa(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Pe(e) {
          Se ? (Ee ? Ee.push(e) : (Ee = [e])) : (Se = e);
        }
        function Te() {
          if (Se) {
            var e = Se,
              t = Ee;
            if (((Ee = Se = null), Ce(e), t))
              for (e = 0; e < t.length; e++) Ce(t[e]);
          }
        }
        function je(e, t) {
          return e(t);
        }
        function _e() {}
        var Ne = !1;
        function Oe(e, t, n) {
          if (Ne) return e(t, n);
          Ne = !0;
          try {
            return je(e, t, n);
          } finally {
            (Ne = !1), (null !== Se || null !== Ee) && (_e(), Te());
          }
        }
        function Le(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var r = xa(n);
          if (null === r) return null;
          n = r[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (r = !r.disabled) ||
                (r = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !r);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
          return n;
        }
        var Ae = !1;
        if (c)
          try {
            var Me = {};
            Object.defineProperty(Me, "passive", {
              get: function () {
                Ae = !0;
              },
            }),
              window.addEventListener("test", Me, Me),
              window.removeEventListener("test", Me, Me);
          } catch (ce) {
            Ae = !1;
          }
        function Re(e, t, n, r, a, i, o, s, l) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(n, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var De = !1,
          Ve = null,
          Ie = !1,
          Fe = null,
          ze = {
            onError: function (e) {
              (De = !0), (Ve = e);
            },
          };
        function Ue(e, t, n, r, a, i, o, s, l) {
          (De = !1), (Ve = null), Re.apply(ze, arguments);
        }
        function Be(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function We(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function He(e) {
          if (Be(e) !== e) throw Error(i(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Be(e))) throw Error(i(188));
                return t !== e ? null : e;
              }
              for (var n = e, r = t; ; ) {
                var a = n.return;
                if (null === a) break;
                var o = a.alternate;
                if (null === o) {
                  if (null !== (r = a.return)) {
                    n = r;
                    continue;
                  }
                  break;
                }
                if (a.child === o.child) {
                  for (o = a.child; o; ) {
                    if (o === n) return He(a), e;
                    if (o === r) return He(a), t;
                    o = o.sibling;
                  }
                  throw Error(i(188));
                }
                if (n.return !== r.return) (n = a), (r = o);
                else {
                  for (var s = !1, l = a.child; l; ) {
                    if (l === n) {
                      (s = !0), (n = a), (r = o);
                      break;
                    }
                    if (l === r) {
                      (s = !0), (r = a), (n = o);
                      break;
                    }
                    l = l.sibling;
                  }
                  if (!s) {
                    for (l = o.child; l; ) {
                      if (l === n) {
                        (s = !0), (n = o), (r = a);
                        break;
                      }
                      if (l === r) {
                        (s = !0), (r = o), (n = a);
                        break;
                      }
                      l = l.sibling;
                    }
                    if (!s) throw Error(i(189));
                  }
                }
                if (n.alternate !== r) throw Error(i(190));
              }
              if (3 !== n.tag) throw Error(i(188));
              return n.stateNode.current === n ? e : t;
            })(e))
            ? Qe(e)
            : null;
        }
        function Qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = Qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ye = a.unstable_scheduleCallback,
          qe = a.unstable_cancelCallback,
          Ge = a.unstable_shouldYield,
          Xe = a.unstable_requestPaint,
          Ke = a.unstable_now,
          Ze = a.unstable_getCurrentPriorityLevel,
          Je = a.unstable_ImmediatePriority,
          et = a.unstable_UserBlockingPriority,
          tt = a.unstable_NormalPriority,
          nt = a.unstable_LowPriority,
          rt = a.unstable_IdlePriority,
          at = null,
          it = null;
        var ot = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((st(e) / lt) | 0)) | 0;
              },
          st = Math.log,
          lt = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function ft(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function dt(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes,
            o = 268435455 & n;
          if (0 !== o) {
            var s = o & ~a;
            0 !== s ? (r = ft(s)) : 0 !== (i &= o) && (r = ft(i));
          } else 0 !== (o = n & ~a) ? (r = ft(o)) : 0 !== i && (r = ft(i));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 === (t & a) &&
            ((a = r & -r) >= (i = t & -t) || (16 === a && 0 !== (4194240 & i)))
          )
            return t;
          if ((0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - ot(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function vt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function mt(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function yt(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - ot(t))] = n);
        }
        function gt(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - ot(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var bt = 0;
        function wt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var xt,
          kt,
          St,
          Et,
          Ct,
          Pt = !1,
          Tt = [],
          jt = null,
          _t = null,
          Nt = null,
          Ot = new Map(),
          Lt = new Map(),
          At = [],
          Mt =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Rt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              jt = null;
              break;
            case "dragenter":
            case "dragleave":
              _t = null;
              break;
            case "mouseover":
            case "mouseout":
              Nt = null;
              break;
            case "pointerover":
            case "pointerout":
              Ot.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Lt.delete(t.pointerId);
          }
        }
        function Dt(e, t, n, r, a, i) {
          return null === e || e.nativeEvent !== i
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: i,
                targetContainers: [a],
              }),
              null !== t && null !== (t = ba(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== a && -1 === t.indexOf(a) && t.push(a),
              e);
        }
        function Vt(e) {
          var t = ga(e.target);
          if (null !== t) {
            var n = Be(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = We(n)))
                  return (
                    (e.blockedOn = t),
                    void Ct(e.priority, function () {
                      St(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function It(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n)
              return null !== (t = ba(n)) && kt(t), (e.blockedOn = n), !1;
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, n) {
          It(e) && n.delete(t);
        }
        function zt() {
          (Pt = !1),
            null !== jt && It(jt) && (jt = null),
            null !== _t && It(_t) && (_t = null),
            null !== Nt && It(Nt) && (Nt = null),
            Ot.forEach(Ft),
            Lt.forEach(Ft);
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Pt ||
              ((Pt = !0),
              a.unstable_scheduleCallback(a.unstable_NormalPriority, zt)));
        }
        function Bt(e) {
          function t(t) {
            return Ut(t, e);
          }
          if (0 < Tt.length) {
            Ut(Tt[0], e);
            for (var n = 1; n < Tt.length; n++) {
              var r = Tt[n];
              r.blockedOn === e && (r.blockedOn = null);
            }
          }
          for (
            null !== jt && Ut(jt, e),
              null !== _t && Ut(_t, e),
              null !== Nt && Ut(Nt, e),
              Ot.forEach(t),
              Lt.forEach(t),
              n = 0;
            n < At.length;
            n++
          )
            (r = At[n]).blockedOn === e && (r.blockedOn = null);
          for (; 0 < At.length && null === (n = At[0]).blockedOn; )
            Vt(n), null === n.blockedOn && At.shift();
        }
        var Wt = w.ReactCurrentBatchConfig,
          Ht = !0;
        function $t(e, t, n, r) {
          var a = bt,
            i = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 1), Yt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = i);
          }
        }
        function Qt(e, t, n, r) {
          var a = bt,
            i = Wt.transition;
          Wt.transition = null;
          try {
            (bt = 4), Yt(e, t, n, r);
          } finally {
            (bt = a), (Wt.transition = i);
          }
        }
        function Yt(e, t, n, r) {
          if (Ht) {
            var a = Gt(e, t, n, r);
            if (null === a) Hr(e, t, r, qt, n), Rt(e, r);
            else if (
              (function (e, t, n, r, a) {
                switch (t) {
                  case "focusin":
                    return (jt = Dt(jt, e, t, n, r, a)), !0;
                  case "dragenter":
                    return (_t = Dt(_t, e, t, n, r, a)), !0;
                  case "mouseover":
                    return (Nt = Dt(Nt, e, t, n, r, a)), !0;
                  case "pointerover":
                    var i = a.pointerId;
                    return Ot.set(i, Dt(Ot.get(i) || null, e, t, n, r, a)), !0;
                  case "gotpointercapture":
                    return (
                      (i = a.pointerId),
                      Lt.set(i, Dt(Lt.get(i) || null, e, t, n, r, a)),
                      !0
                    );
                }
                return !1;
              })(a, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Rt(e, r), 4 & t && -1 < Mt.indexOf(e))) {
              for (; null !== a; ) {
                var i = ba(a);
                if (
                  (null !== i && xt(i),
                  null === (i = Gt(e, t, n, r)) && Hr(e, t, r, qt, n),
                  i === a)
                )
                  break;
                a = i;
              }
              null !== a && r.stopPropagation();
            } else Hr(e, t, r, null, n);
          }
        }
        var qt = null;
        function Gt(e, t, n, r) {
          if (((qt = null), null !== (e = ga((e = xe(r))))))
            if (null === (t = Be(e))) e = null;
            else if (13 === (n = t.tag)) {
              if (null !== (e = We(t))) return e;
              e = null;
            } else if (3 === n) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (qt = e), null;
        }
        function Xt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch (Ze()) {
                case Je:
                  return 1;
                case et:
                  return 4;
                case tt:
                case nt:
                  return 16;
                case rt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Kt = null,
          Zt = null,
          Jt = null;
        function en() {
          if (Jt) return Jt;
          var e,
            t,
            n = Zt,
            r = n.length,
            a = "value" in Kt ? Kt.value : Kt.textContent,
            i = a.length;
          for (e = 0; e < r && n[e] === a[e]; e++);
          var o = r - e;
          for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
          return (Jt = a.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tn(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function nn() {
          return !0;
        }
        function rn() {
          return !1;
        }
        function an(e) {
          function t(t, n, r, a, i) {
            for (var o in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = a),
            (this.target = i),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
            return (
              (this.isDefaultPrevented = (
                null != a.defaultPrevented
                  ? a.defaultPrevented
                  : !1 === a.returnValue
              )
                ? nn
                : rn),
              (this.isPropagationStopped = rn),
              this
            );
          }
          return (
            V(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = nn));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = nn));
              },
              persist: function () {},
              isPersistent: nn,
            }),
            t
          );
        }
        var on,
          sn,
          ln,
          un = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          cn = an(un),
          fn = V({}, un, { view: 0, detail: 0 }),
          dn = an(fn),
          pn = V({}, fn, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((on = e.screenX - ln.screenX),
                        (sn = e.screenY - ln.screenY))
                      : (sn = on = 0),
                    (ln = e)),
                  on);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : sn;
            },
          }),
          hn = an(pn),
          vn = an(V({}, pn, { dataTransfer: 0 })),
          mn = an(V({}, fn, { relatedTarget: 0 })),
          yn = an(
            V({}, un, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          gn = V({}, un, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          bn = an(gn),
          wn = an(V({}, un, { data: 0 })),
          xn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          Sn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function En(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = Sn[e]) && !!t[e];
        }
        function Cn() {
          return En;
        }
        var Pn = V({}, fn, {
            key: function (e) {
              if (e.key) {
                var t = xn[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = tn(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cn,
            charCode: function (e) {
              return "keypress" === e.type ? tn(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? tn(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Tn = an(Pn),
          jn = an(
            V({}, pn, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          _n = an(
            V({}, fn, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cn,
            })
          ),
          Nn = an(
            V({}, un, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          On = V({}, pn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Ln = an(On),
          An = [9, 13, 27, 32],
          Mn = c && "CompositionEvent" in window,
          Rn = null;
        c && "documentMode" in document && (Rn = document.documentMode);
        var Dn = c && "TextEvent" in window && !Rn,
          Vn = c && (!Mn || (Rn && 8 < Rn && 11 >= Rn)),
          In = String.fromCharCode(32),
          Fn = !1;
        function zn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== An.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Un(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Bn = !1;
        var Wn = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!Wn[e.type] : "textarea" === t;
        }
        function $n(e, t, n, r) {
          Pe(r),
            0 < (t = Qr(t, "onChange")).length &&
              ((n = new cn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t }));
        }
        var Qn = null,
          Yn = null;
        function qn(e) {
          Ir(e, 0);
        }
        function Gn(e) {
          if (Y(wa(e))) return e;
        }
        function Xn(e, t) {
          if ("change" === e) return t;
        }
        var Kn = !1;
        if (c) {
          var Zn;
          if (c) {
            var Jn = "oninput" in document;
            if (!Jn) {
              var er = document.createElement("div");
              er.setAttribute("oninput", "return;"),
                (Jn = "function" === typeof er.oninput);
            }
            Zn = Jn;
          } else Zn = !1;
          Kn = Zn && (!document.documentMode || 9 < document.documentMode);
        }
        function tr() {
          Qn && (Qn.detachEvent("onpropertychange", nr), (Yn = Qn = null));
        }
        function nr(e) {
          if ("value" === e.propertyName && Gn(Yn)) {
            var t = [];
            $n(t, Yn, e, xe(e)), Oe(qn, t);
          }
        }
        function rr(e, t, n) {
          "focusin" === e
            ? (tr(), (Yn = n), (Qn = t).attachEvent("onpropertychange", nr))
            : "focusout" === e && tr();
        }
        function ar(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Gn(Yn);
        }
        function ir(e, t) {
          if ("click" === e) return Gn(t);
        }
        function or(e, t) {
          if ("input" === e || "change" === e) return Gn(t);
        }
        var sr =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function lr(e, t) {
          if (sr(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!f.call(t, a) || !sr(e[a], t[a])) return !1;
          }
          return !0;
        }
        function ur(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cr(e, t) {
          var n,
            r = ur(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = ur(r);
          }
        }
        function fr(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? fr(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function dr() {
          for (var e = window, t = q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var n = "string" === typeof t.contentWindow.location.href;
            } catch (r) {
              n = !1;
            }
            if (!n) break;
            t = q((e = t.contentWindow).document);
          }
          return t;
        }
        function pr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function hr(e) {
          var t = dr(),
            n = e.focusedElem,
            r = e.selectionRange;
          if (
            t !== n &&
            n &&
            n.ownerDocument &&
            fr(n.ownerDocument.documentElement, n)
          ) {
            if (null !== r && pr(n))
              if (
                ((t = r.start),
                void 0 === (e = r.end) && (e = t),
                "selectionStart" in n)
              )
                (n.selectionStart = t),
                  (n.selectionEnd = Math.min(e, n.value.length));
              else if (
                (e =
                  ((t = n.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var a = n.textContent.length,
                  i = Math.min(r.start, a);
                (r = void 0 === r.end ? i : Math.min(r.end, a)),
                  !e.extend && i > r && ((a = r), (r = i), (i = a)),
                  (a = cr(n, i));
                var o = cr(n, r);
                a &&
                  o &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== a.node ||
                    e.anchorOffset !== a.offset ||
                    e.focusNode !== o.node ||
                    e.focusOffset !== o.offset) &&
                  ((t = t.createRange()).setStart(a.node, a.offset),
                  e.removeAllRanges(),
                  i > r
                    ? (e.addRange(t), e.extend(o.node, o.offset))
                    : (t.setEnd(o.node, o.offset), e.addRange(t)));
              }
            for (t = [], e = n; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof n.focus && n.focus(), n = 0;
              n < t.length;
              n++
            )
              ((e = t[n]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var vr = c && "documentMode" in document && 11 >= document.documentMode,
          mr = null,
          yr = null,
          gr = null,
          br = !1;
        function wr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
              ? n
              : n.ownerDocument;
          br ||
            null == mr ||
            mr !== q(r) ||
            ("selectionStart" in (r = mr) && pr(r)
              ? (r = { start: r.selectionStart, end: r.selectionEnd })
              : (r = {
                  anchorNode: (r = (
                    (r.ownerDocument && r.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
                }),
            (gr && lr(gr, r)) ||
              ((gr = r),
              0 < (r = Qr(yr, "onSelect")).length &&
                ((t = new cn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))));
        }
        function xr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var kr = {
            animationend: xr("Animation", "AnimationEnd"),
            animationiteration: xr("Animation", "AnimationIteration"),
            animationstart: xr("Animation", "AnimationStart"),
            transitionend: xr("Transition", "TransitionEnd"),
          },
          Sr = {},
          Er = {};
        function Cr(e) {
          if (Sr[e]) return Sr[e];
          if (!kr[e]) return e;
          var t,
            n = kr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in Er) return (Sr[e] = n[t]);
          return e;
        }
        c &&
          ((Er = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete kr.animationend.animation,
            delete kr.animationiteration.animation,
            delete kr.animationstart.animation),
          "TransitionEvent" in window || delete kr.transitionend.transition);
        var Pr = Cr("animationend"),
          Tr = Cr("animationiteration"),
          jr = Cr("animationstart"),
          _r = Cr("transitionend"),
          Nr = new Map(),
          Or =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function Lr(e, t) {
          Nr.set(e, t), l(t, [e]);
        }
        for (var Ar = 0; Ar < Or.length; Ar++) {
          var Mr = Or[Ar];
          Lr(Mr.toLowerCase(), "on" + (Mr[0].toUpperCase() + Mr.slice(1)));
        }
        Lr(Pr, "onAnimationEnd"),
          Lr(Tr, "onAnimationIteration"),
          Lr(jr, "onAnimationStart"),
          Lr("dblclick", "onDoubleClick"),
          Lr("focusin", "onFocus"),
          Lr("focusout", "onBlur"),
          Lr(_r, "onTransitionEnd"),
          u("onMouseEnter", ["mouseout", "mouseover"]),
          u("onMouseLeave", ["mouseout", "mouseover"]),
          u("onPointerEnter", ["pointerout", "pointerover"]),
          u("onPointerLeave", ["pointerout", "pointerover"]),
          l(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          l(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          l("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          l(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          l(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var Rr =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Dr = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(Rr)
          );
        function Vr(e, t, n) {
          var r = e.type || "unknown-event";
          (e.currentTarget = n),
            (function (e, t, n, r, a, o, s, l, u) {
              if ((Ue.apply(this, arguments), De)) {
                if (!De) throw Error(i(198));
                var c = Ve;
                (De = !1), (Ve = null), Ie || ((Ie = !0), (Fe = c));
              }
            })(r, t, void 0, e),
            (e.currentTarget = null);
        }
        function Ir(e, t) {
          t = 0 !== (4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              a = r.event;
            r = r.listeners;
            e: {
              var i = void 0;
              if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                  var s = r[o],
                    l = s.instance,
                    u = s.currentTarget;
                  if (((s = s.listener), l !== i && a.isPropagationStopped()))
                    break e;
                  Vr(a, s, u), (i = l);
                }
              else
                for (o = 0; o < r.length; o++) {
                  if (
                    ((l = (s = r[o]).instance),
                    (u = s.currentTarget),
                    (s = s.listener),
                    l !== i && a.isPropagationStopped())
                  )
                    break e;
                  Vr(a, s, u), (i = l);
                }
            }
          }
          if (Ie) throw ((e = Fe), (Ie = !1), (Fe = null), e);
        }
        function Fr(e, t) {
          var n = t[va];
          void 0 === n && (n = t[va] = new Set());
          var r = e + "__bubble";
          n.has(r) || (Wr(t, e, 2, !1), n.add(r));
        }
        function zr(e, t, n) {
          var r = 0;
          t && (r |= 4), Wr(n, e, r, t);
        }
        var Ur = "_reactListening" + Math.random().toString(36).slice(2);
        function Br(e) {
          if (!e[Ur]) {
            (e[Ur] = !0),
              o.forEach(function (t) {
                "selectionchange" !== t &&
                  (Dr.has(t) || zr(t, !1, e), zr(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Ur] || ((t[Ur] = !0), zr("selectionchange", !1, t));
          }
        }
        function Wr(e, t, n, r) {
          switch (Xt(t)) {
            case 1:
              var a = $t;
              break;
            case 4:
              a = Qt;
              break;
            default:
              a = Yt;
          }
          (n = a.bind(null, t, n, e)),
            (a = void 0),
            !Ae ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (a = !0),
            r
              ? void 0 !== a
                ? e.addEventListener(t, n, { capture: !0, passive: a })
                : e.addEventListener(t, n, !0)
              : void 0 !== a
              ? e.addEventListener(t, n, { passive: a })
              : e.addEventListener(t, n, !1);
        }
        function Hr(e, t, n, r, a) {
          var i = r;
          if (0 === (1 & t) && 0 === (2 & t) && null !== r)
            e: for (;;) {
              if (null === r) return;
              var o = r.tag;
              if (3 === o || 4 === o) {
                var s = r.stateNode.containerInfo;
                if (s === a || (8 === s.nodeType && s.parentNode === a)) break;
                if (4 === o)
                  for (o = r.return; null !== o; ) {
                    var l = o.tag;
                    if (
                      (3 === l || 4 === l) &&
                      ((l = o.stateNode.containerInfo) === a ||
                        (8 === l.nodeType && l.parentNode === a))
                    )
                      return;
                    o = o.return;
                  }
                for (; null !== s; ) {
                  if (null === (o = ga(s))) return;
                  if (5 === (l = o.tag) || 6 === l) {
                    r = i = o;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              r = r.return;
            }
          Oe(function () {
            var r = i,
              a = xe(n),
              o = [];
            e: {
              var s = Nr.get(e);
              if (void 0 !== s) {
                var l = cn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === tn(n)) break e;
                  case "keydown":
                  case "keyup":
                    l = Tn;
                    break;
                  case "focusin":
                    (u = "focus"), (l = mn);
                    break;
                  case "focusout":
                    (u = "blur"), (l = mn);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    l = mn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    l = hn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    l = vn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    l = _n;
                    break;
                  case Pr:
                  case Tr:
                  case jr:
                    l = yn;
                    break;
                  case _r:
                    l = Nn;
                    break;
                  case "scroll":
                    l = dn;
                    break;
                  case "wheel":
                    l = Ln;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    l = bn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    l = jn;
                }
                var c = 0 !== (4 & t),
                  f = !c && "scroll" === e,
                  d = c ? (null !== s ? s + "Capture" : null) : s;
                c = [];
                for (var p, h = r; null !== h; ) {
                  var v = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== v &&
                      ((p = v),
                      null !== d &&
                        null != (v = Le(h, d)) &&
                        c.push($r(h, v, p))),
                    f)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length &&
                  ((s = new l(s, u, null, n, a)),
                  o.push({ event: s, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((l = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  n === we ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!ga(u) && !u[ha])) &&
                  (l || s) &&
                  ((s =
                    a.window === a
                      ? a
                      : (s = a.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  l
                    ? ((l = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? ga(u)
                          : null) &&
                        (u !== (f = Be(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((l = null), (u = r)),
                  l !== u))
              ) {
                if (
                  ((c = hn),
                  (v = "onMouseLeave"),
                  (d = "onMouseEnter"),
                  (h = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((c = jn),
                    (v = "onPointerLeave"),
                    (d = "onPointerEnter"),
                    (h = "pointer")),
                  (f = null == l ? s : wa(l)),
                  (p = null == u ? s : wa(u)),
                  ((s = new c(v, h + "leave", l, n, a)).target = f),
                  (s.relatedTarget = p),
                  (v = null),
                  ga(a) === r &&
                    (((c = new c(d, h + "enter", u, n, a)).target = p),
                    (c.relatedTarget = f),
                    (v = c)),
                  (f = v),
                  l && u)
                )
                  e: {
                    for (d = u, h = 0, p = c = l; p; p = Yr(p)) h++;
                    for (p = 0, v = d; v; v = Yr(v)) p++;
                    for (; 0 < h - p; ) (c = Yr(c)), h--;
                    for (; 0 < p - h; ) (d = Yr(d)), p--;
                    for (; h--; ) {
                      if (c === d || (null !== d && c === d.alternate)) break e;
                      (c = Yr(c)), (d = Yr(d));
                    }
                    c = null;
                  }
                else c = null;
                null !== l && qr(o, s, l, c, !1),
                  null !== u && null !== f && qr(o, f, u, c, !0);
              }
              if (
                "select" ===
                  (l =
                    (s = r ? wa(r) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === l && "file" === s.type)
              )
                var m = Xn;
              else if (Hn(s))
                if (Kn) m = or;
                else {
                  m = ar;
                  var y = rr;
                }
              else
                (l = s.nodeName) &&
                  "input" === l.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (m = ir);
              switch (
                (m && (m = m(e, r))
                  ? $n(o, m, n, a)
                  : (y && y(e, s, r),
                    "focusout" === e &&
                      (y = s._wrapperState) &&
                      y.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (y = r ? wa(r) : window),
                e)
              ) {
                case "focusin":
                  (Hn(y) || "true" === y.contentEditable) &&
                    ((mr = y), (yr = r), (gr = null));
                  break;
                case "focusout":
                  gr = yr = mr = null;
                  break;
                case "mousedown":
                  br = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (br = !1), wr(o, n, a);
                  break;
                case "selectionchange":
                  if (vr) break;
                case "keydown":
                case "keyup":
                  wr(o, n, a);
              }
              var g;
              if (Mn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var b = "onCompositionStart";
                      break e;
                    case "compositionend":
                      b = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      b = "onCompositionUpdate";
                      break e;
                  }
                  b = void 0;
                }
              else
                Bn
                  ? zn(e, n) && (b = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (b = "onCompositionStart");
              b &&
                (Vn &&
                  "ko" !== n.locale &&
                  (Bn || "onCompositionStart" !== b
                    ? "onCompositionEnd" === b && Bn && (g = en())
                    : ((Zt = "value" in (Kt = a) ? Kt.value : Kt.textContent),
                      (Bn = !0))),
                0 < (y = Qr(r, b)).length &&
                  ((b = new wn(b, e, null, n, a)),
                  o.push({ event: b, listeners: y }),
                  g ? (b.data = g) : null !== (g = Un(n)) && (b.data = g))),
                (g = Dn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Un(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Fn = !0), In);
                        case "textInput":
                          return (e = t.data) === In && Fn ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Bn)
                        return "compositionend" === e || (!Mn && zn(e, t))
                          ? ((e = en()), (Jt = Zt = Kt = null), (Bn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Vn && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (r = Qr(r, "onBeforeInput")).length &&
                  ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                  o.push({ event: a, listeners: r }),
                  (a.data = g));
            }
            Ir(o, t);
          });
        }
        function $r(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function Qr(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var a = e,
              i = a.stateNode;
            5 === a.tag &&
              null !== i &&
              ((a = i),
              null != (i = Le(e, n)) && r.unshift($r(e, i, a)),
              null != (i = Le(e, t)) && r.push($r(e, i, a))),
              (e = e.return);
          }
          return r;
        }
        function Yr(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function qr(e, t, n, r, a) {
          for (var i = t._reactName, o = []; null !== n && n !== r; ) {
            var s = n,
              l = s.alternate,
              u = s.stateNode;
            if (null !== l && l === r) break;
            5 === s.tag &&
              null !== u &&
              ((s = u),
              a
                ? null != (l = Le(n, i)) && o.unshift($r(n, l, s))
                : a || (null != (l = Le(n, i)) && o.push($r(n, l, s)))),
              (n = n.return);
          }
          0 !== o.length && e.push({ event: t, listeners: o });
        }
        var Gr = /\r\n?/g,
          Xr = /\u0000|\uFFFD/g;
        function Kr(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gr, "\n")
            .replace(Xr, "");
        }
        function Zr(e, t, n) {
          if (((t = Kr(t)), Kr(e) !== t && n)) throw Error(i(425));
        }
        function Jr() {}
        var ea = null,
          ta = null;
        function na(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var ra = "function" === typeof setTimeout ? setTimeout : void 0,
          aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ia = "function" === typeof Promise ? Promise : void 0,
          oa =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ia
              ? function (e) {
                  return ia.resolve(null).then(e).catch(sa);
                }
              : ra;
        function sa(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function la(e, t) {
          var n = t,
            r = 0;
          do {
            var a = n.nextSibling;
            if ((e.removeChild(n), a && 8 === a.nodeType))
              if ("/$" === (n = a.data)) {
                if (0 === r) return e.removeChild(a), void Bt(t);
                r--;
              } else ("$" !== n && "$?" !== n && "$!" !== n) || r++;
            n = a;
          } while (n);
          Bt(t);
        }
        function ua(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function ca(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("$" === n || "$!" === n || "$?" === n) {
                if (0 === t) return e;
                t--;
              } else "/$" === n && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fa = Math.random().toString(36).slice(2),
          da = "__reactFiber$" + fa,
          pa = "__reactProps$" + fa,
          ha = "__reactContainer$" + fa,
          va = "__reactEvents$" + fa,
          ma = "__reactListeners$" + fa,
          ya = "__reactHandles$" + fa;
        function ga(e) {
          var t = e[da];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[ha] || n[da])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = ca(e); null !== e; ) {
                  if ((n = e[da])) return n;
                  e = ca(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function ba(e) {
          return !(e = e[da] || e[ha]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wa(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(i(33));
        }
        function xa(e) {
          return e[pa] || null;
        }
        var ka = [],
          Sa = -1;
        function Ea(e) {
          return { current: e };
        }
        function Ca(e) {
          0 > Sa || ((e.current = ka[Sa]), (ka[Sa] = null), Sa--);
        }
        function Pa(e, t) {
          Sa++, (ka[Sa] = e.current), (e.current = t);
        }
        var Ta = {},
          ja = Ea(Ta),
          _a = Ea(!1),
          Na = Ta;
        function Oa(e, t) {
          var n = e.type.contextTypes;
          if (!n) return Ta;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            i = {};
          for (a in n) i[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            i
          );
        }
        function La(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Aa() {
          Ca(_a), Ca(ja);
        }
        function Ma(e, t, n) {
          if (ja.current !== Ta) throw Error(i(168));
          Pa(ja, t), Pa(_a, n);
        }
        function Ra(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t)) throw Error(i(108, W(e) || "Unknown", a));
          return V({}, n, r);
        }
        function Da(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              Ta),
            (Na = ja.current),
            Pa(ja, e),
            Pa(_a, _a.current),
            !0
          );
        }
        function Va(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(i(169));
          n
            ? ((e = Ra(e, t, Na)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              Ca(_a),
              Ca(ja),
              Pa(ja, e))
            : Ca(_a),
            Pa(_a, n);
        }
        var Ia = null,
          Fa = !1,
          za = !1;
        function Ua(e) {
          null === Ia ? (Ia = [e]) : Ia.push(e);
        }
        function Ba() {
          if (!za && null !== Ia) {
            za = !0;
            var e = 0,
              t = bt;
            try {
              var n = Ia;
              for (bt = 1; e < n.length; e++) {
                var r = n[e];
                do {
                  r = r(!0);
                } while (null !== r);
              }
              (Ia = null), (Fa = !1);
            } catch (a) {
              throw (null !== Ia && (Ia = Ia.slice(e + 1)), Ye(Je, Ba), a);
            } finally {
              (bt = t), (za = !1);
            }
          }
          return null;
        }
        var Wa = [],
          Ha = 0,
          $a = null,
          Qa = 0,
          Ya = [],
          qa = 0,
          Ga = null,
          Xa = 1,
          Ka = "";
        function Za(e, t) {
          (Wa[Ha++] = Qa), (Wa[Ha++] = $a), ($a = e), (Qa = t);
        }
        function Ja(e, t, n) {
          (Ya[qa++] = Xa), (Ya[qa++] = Ka), (Ya[qa++] = Ga), (Ga = e);
          var r = Xa;
          e = Ka;
          var a = 32 - ot(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var i = 32 - ot(t) + a;
          if (30 < i) {
            var o = a - (a % 5);
            (i = (r & ((1 << o) - 1)).toString(32)),
              (r >>= o),
              (a -= o),
              (Xa = (1 << (32 - ot(t) + a)) | (n << a) | r),
              (Ka = i + e);
          } else (Xa = (1 << i) | (n << a) | r), (Ka = e);
        }
        function ei(e) {
          null !== e.return && (Za(e, 1), Ja(e, 1, 0));
        }
        function ti(e) {
          for (; e === $a; )
            ($a = Wa[--Ha]), (Wa[Ha] = null), (Qa = Wa[--Ha]), (Wa[Ha] = null);
          for (; e === Ga; )
            (Ga = Ya[--qa]),
              (Ya[qa] = null),
              (Ka = Ya[--qa]),
              (Ya[qa] = null),
              (Xa = Ya[--qa]),
              (Ya[qa] = null);
        }
        var ni = null,
          ri = null,
          ai = !1,
          ii = null;
        function oi(e, t) {
          var n = Lu(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function si(e, t) {
          switch (e.tag) {
            case 5:
              var n = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (ni = e), (ri = ua(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (ni = e), (ri = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((n = null !== Ga ? { id: Xa, overflow: Ka } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: n,
                  retryLane: 1073741824,
                }),
                ((n = Lu(18, null, null, 0)).stateNode = t),
                (n.return = e),
                (e.child = n),
                (ni = e),
                (ri = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function li(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ui(e) {
          if (ai) {
            var t = ri;
            if (t) {
              var n = t;
              if (!si(e, t)) {
                if (li(e)) throw Error(i(418));
                t = ua(n.nextSibling);
                var r = ni;
                t && si(e, t)
                  ? oi(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e));
              }
            } else {
              if (li(e)) throw Error(i(418));
              (e.flags = (-4097 & e.flags) | 2), (ai = !1), (ni = e);
            }
          }
        }
        function ci(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          ni = e;
        }
        function fi(e) {
          if (e !== ni) return !1;
          if (!ai) return ci(e), (ai = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !na(e.type, e.memoizedProps)),
            t && (t = ri))
          ) {
            if (li(e)) throw (di(), Error(i(418)));
            for (; t; ) oi(e, t), (t = ua(t.nextSibling));
          }
          if ((ci(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(i(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var n = e.data;
                  if ("/$" === n) {
                    if (0 === t) {
                      ri = ua(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
                }
                e = e.nextSibling;
              }
              ri = null;
            }
          } else ri = ni ? ua(e.stateNode.nextSibling) : null;
          return !0;
        }
        function di() {
          for (var e = ri; e; ) e = ua(e.nextSibling);
        }
        function pi() {
          (ri = ni = null), (ai = !1);
        }
        function hi(e) {
          null === ii ? (ii = [e]) : ii.push(e);
        }
        var vi = w.ReactCurrentBatchConfig;
        function mi(e, t) {
          if (e && e.defaultProps) {
            for (var n in ((t = V({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
            return t;
          }
          return t;
        }
        var yi = Ea(null),
          gi = null,
          bi = null,
          wi = null;
        function xi() {
          wi = bi = gi = null;
        }
        function ki(e) {
          var t = yi.current;
          Ca(yi), (e._currentValue = t);
        }
        function Si(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Ei(e, t) {
          (gi = e),
            (wi = bi = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (ws = !0), (e.firstContext = null));
        }
        function Ci(e) {
          var t = e._currentValue;
          if (wi !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === bi)
            ) {
              if (null === gi) throw Error(i(308));
              (bi = e), (gi.dependencies = { lanes: 0, firstContext: e });
            } else bi = bi.next = e;
          return t;
        }
        var Pi = null;
        function Ti(e) {
          null === Pi ? (Pi = [e]) : Pi.push(e);
        }
        function ji(e, t, n, r) {
          var a = t.interleaved;
          return (
            null === a
              ? ((n.next = n), Ti(t))
              : ((n.next = a.next), (a.next = n)),
            (t.interleaved = n),
            _i(e, r)
          );
        }
        function _i(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        var Ni = !1;
        function Oi(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function Li(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ai(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function Mi(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 0 !== (2 & _l))) {
            var a = r.pending;
            return (
              null === a ? (t.next = t) : ((t.next = a.next), (a.next = t)),
              (r.pending = t),
              _i(e, n)
            );
          }
          return (
            null === (a = r.interleaved)
              ? ((t.next = t), Ti(r))
              : ((t.next = a.next), (a.next = t)),
            (r.interleaved = t),
            _i(e, n)
          );
        }
        function Ri(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & n))
          ) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        function Di(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              i = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var o = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
              } while (null !== n);
              null === i ? (a = i = t) : (i = i.next = t);
            } else a = i = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: a,
                lastBaseUpdate: i,
                shared: r.shared,
                effects: r.effects,
              }),
              void (e.updateQueue = n)
            );
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function Vi(e, t, n, r) {
          var a = e.updateQueue;
          Ni = !1;
          var i = a.firstBaseUpdate,
            o = a.lastBaseUpdate,
            s = a.shared.pending;
          if (null !== s) {
            a.shared.pending = null;
            var l = s,
              u = l.next;
            (l.next = null), null === o ? (i = u) : (o.next = u), (o = l);
            var c = e.alternate;
            null !== c &&
              (s = (c = c.updateQueue).lastBaseUpdate) !== o &&
              (null === s ? (c.firstBaseUpdate = u) : (s.next = u),
              (c.lastBaseUpdate = l));
          }
          if (null !== i) {
            var f = a.baseState;
            for (o = 0, c = u = l = null, s = i; ; ) {
              var d = s.lane,
                p = s.eventTime;
              if ((r & d) === d) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    v = s;
                  switch (((d = t), (p = n), v.tag)) {
                    case 1:
                      if ("function" === typeof (h = v.payload)) {
                        f = h.call(p, f, d);
                        break e;
                      }
                      f = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (d =
                            "function" === typeof (h = v.payload)
                              ? h.call(p, f, d)
                              : h) ||
                        void 0 === d
                      )
                        break e;
                      f = V({}, f, d);
                      break e;
                    case 2:
                      Ni = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (d = a.effects) ? (a.effects = [s]) : d.push(s));
              } else
                (p = {
                  eventTime: p,
                  lane: d,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (l = f)) : (c = c.next = p),
                  (o |= d);
              if (null === (s = s.next)) {
                if (null === (s = a.shared.pending)) break;
                (s = (d = s).next),
                  (d.next = null),
                  (a.lastBaseUpdate = d),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === c && (l = f),
              (a.baseState = l),
              (a.firstBaseUpdate = u),
              (a.lastBaseUpdate = c),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do {
                (o |= a.lane), (a = a.next);
              } while (a !== t);
            } else null === i && (a.shared.lanes = 0);
            (Vl |= o), (e.lanes = o), (e.memoizedState = f);
          }
        }
        function Ii(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" !== typeof a))
                  throw Error(i(191, a));
                a.call(r);
              }
            }
        }
        var Fi = new r.Component().refs;
        function zi(e, t, n, r) {
          (n =
            null === (n = n(r, (t = e.memoizedState))) || void 0 === n
              ? t
              : V({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var Ui = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Be(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              a = nu(e),
              i = Ai(r, a);
            (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Mi(e, i, a)) && (ru(t, e, a, r), Ri(t, e, a));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = tu(),
              a = nu(e),
              i = Ai(r, a);
            (i.tag = 1),
              (i.payload = t),
              void 0 !== n && null !== n && (i.callback = n),
              null !== (t = Mi(e, i, a)) && (ru(t, e, a, r), Ri(t, e, a));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = tu(),
              r = nu(e),
              a = Ai(n, r);
            (a.tag = 2),
              void 0 !== t && null !== t && (a.callback = t),
              null !== (t = Mi(e, a, r)) && (ru(t, e, r, n), Ri(t, e, r));
          },
        };
        function Bi(e, t, n, r, a, i, o) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, i, o)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !lr(n, r) ||
                !lr(a, i);
        }
        function Wi(e, t, n) {
          var r = !1,
            a = Ta,
            i = t.contextType;
          return (
            "object" === typeof i && null !== i
              ? (i = Ci(i))
              : ((a = La(t) ? Na : ja.current),
                (i = (r = null !== (r = t.contextTypes) && void 0 !== r)
                  ? Oa(e, a)
                  : Ta)),
            (t = new t(n, i)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Ui),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = i)),
            t
          );
        }
        function Hi(e, t, n, r) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && Ui.enqueueReplaceState(t, t.state, null);
        }
        function $i(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = Fi), Oi(e);
          var i = t.contextType;
          "object" === typeof i && null !== i
            ? (a.context = Ci(i))
            : ((i = La(t) ? Na : ja.current), (a.context = Oa(e, i))),
            (a.state = e.memoizedState),
            "function" === typeof (i = t.getDerivedStateFromProps) &&
              (zi(e, t, i, n), (a.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof a.getSnapshotBeforeUpdate ||
              ("function" !== typeof a.UNSAFE_componentWillMount &&
                "function" !== typeof a.componentWillMount) ||
              ((t = a.state),
              "function" === typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" === typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && Ui.enqueueReplaceState(a, a.state, null),
              Vi(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" === typeof a.componentDidMount && (e.flags |= 4194308);
        }
        function Qi(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(i(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(i(147, e));
              var a = r,
                o = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (e) {
                    var t = a.refs;
                    t === Fi && (t = a.refs = {}),
                      null === e ? delete t[o] : (t[o] = e);
                  }),
                  (t._stringRef = o),
                  t);
            }
            if ("string" !== typeof e) throw Error(i(284));
            if (!n._owner) throw Error(i(290, e));
          }
          return e;
        }
        function Yi(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function qi(e) {
          return (0, e._init)(e._payload);
        }
        function Gi(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = Mu(e, t)).index = 0), (e.sibling = null), e;
          }
          function o(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 2), n)
                    : r
                  : ((t.flags |= 2), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function l(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Iu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function u(e, t, n, r) {
            var i = n.type;
            return i === S
              ? f(e, t, n.props.children, r, n.key)
              : null !== t &&
                (t.elementType === i ||
                  ("object" === typeof i &&
                    null !== i &&
                    i.$$typeof === L &&
                    qi(i) === t.type))
              ? (((r = a(t, n.props)).ref = Qi(e, t, n)), (r.return = e), r)
              : (((r = Ru(n.type, n.key, n.props, null, e.mode, r)).ref = Qi(
                  e,
                  t,
                  n
                )),
                (r.return = e),
                r);
          }
          function c(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Fu(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function f(e, t, n, r, i) {
            return null === t || 7 !== t.tag
              ? (((t = Du(n, e.mode, r, i)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function d(e, t, n) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Iu("" + t, e.mode, n)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case x:
                  return (
                    ((n = Ru(t.type, t.key, t.props, null, e.mode, n)).ref = Qi(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case k:
                  return ((t = Fu(t, e.mode, n)).return = e), t;
                case L:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (te(t) || R(t))
                return ((t = Du(t, e.mode, n, null)).return = e), t;
              Yi(e, t);
            }
            return null;
          }
          function p(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return null !== a ? null : l(e, t, "" + n, r);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case x:
                  return n.key === a ? u(e, t, n, r) : null;
                case k:
                  return n.key === a ? c(e, t, n, r) : null;
                case L:
                  return p(e, t, (a = n._init)(n._payload), r);
              }
              if (te(n) || R(n)) return null !== a ? null : f(e, t, n, r, null);
              Yi(e, n);
            }
            return null;
          }
          function h(e, t, n, r, a) {
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return l(t, (e = e.get(n) || null), "" + r, a);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case x:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case L:
                  return h(e, t, n, (0, r._init)(r._payload), a);
              }
              if (te(r) || R(r))
                return f(t, (e = e.get(n) || null), r, a, null);
              Yi(t, r);
            }
            return null;
          }
          function v(a, i, s, l) {
            for (
              var u = null, c = null, f = i, v = (i = 0), m = null;
              null !== f && v < s.length;
              v++
            ) {
              f.index > v ? ((m = f), (f = null)) : (m = f.sibling);
              var y = p(a, f, s[v], l);
              if (null === y) {
                null === f && (f = m);
                break;
              }
              e && f && null === y.alternate && t(a, f),
                (i = o(y, i, v)),
                null === c ? (u = y) : (c.sibling = y),
                (c = y),
                (f = m);
            }
            if (v === s.length) return n(a, f), ai && Za(a, v), u;
            if (null === f) {
              for (; v < s.length; v++)
                null !== (f = d(a, s[v], l)) &&
                  ((i = o(f, i, v)),
                  null === c ? (u = f) : (c.sibling = f),
                  (c = f));
              return ai && Za(a, v), u;
            }
            for (f = r(a, f); v < s.length; v++)
              null !== (m = h(f, a, v, s[v], l)) &&
                (e &&
                  null !== m.alternate &&
                  f.delete(null === m.key ? v : m.key),
                (i = o(m, i, v)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                f.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Za(a, v),
              u
            );
          }
          function m(a, s, l, u) {
            var c = R(l);
            if ("function" !== typeof c) throw Error(i(150));
            if (null == (l = c.call(l))) throw Error(i(151));
            for (
              var f = (c = null), v = s, m = (s = 0), y = null, g = l.next();
              null !== v && !g.done;
              m++, g = l.next()
            ) {
              v.index > m ? ((y = v), (v = null)) : (y = v.sibling);
              var b = p(a, v, g.value, u);
              if (null === b) {
                null === v && (v = y);
                break;
              }
              e && v && null === b.alternate && t(a, v),
                (s = o(b, s, m)),
                null === f ? (c = b) : (f.sibling = b),
                (f = b),
                (v = y);
            }
            if (g.done) return n(a, v), ai && Za(a, m), c;
            if (null === v) {
              for (; !g.done; m++, g = l.next())
                null !== (g = d(a, g.value, u)) &&
                  ((s = o(g, s, m)),
                  null === f ? (c = g) : (f.sibling = g),
                  (f = g));
              return ai && Za(a, m), c;
            }
            for (v = r(a, v); !g.done; m++, g = l.next())
              null !== (g = h(v, a, m, g.value, u)) &&
                (e &&
                  null !== g.alternate &&
                  v.delete(null === g.key ? m : g.key),
                (s = o(g, s, m)),
                null === f ? (c = g) : (f.sibling = g),
                (f = g));
            return (
              e &&
                v.forEach(function (e) {
                  return t(a, e);
                }),
              ai && Za(a, m),
              c
            );
          }
          return function e(r, i, o, l) {
            if (
              ("object" === typeof o &&
                null !== o &&
                o.type === S &&
                null === o.key &&
                (o = o.props.children),
              "object" === typeof o && null !== o)
            ) {
              switch (o.$$typeof) {
                case x:
                  e: {
                    for (var u = o.key, c = i; null !== c; ) {
                      if (c.key === u) {
                        if ((u = o.type) === S) {
                          if (7 === c.tag) {
                            n(r, c.sibling),
                              ((i = a(c, o.props.children)).return = r),
                              (r = i);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ("object" === typeof u &&
                            null !== u &&
                            u.$$typeof === L &&
                            qi(u) === c.type)
                        ) {
                          n(r, c.sibling),
                            ((i = a(c, o.props)).ref = Qi(r, c, o)),
                            (i.return = r),
                            (r = i);
                          break e;
                        }
                        n(r, c);
                        break;
                      }
                      t(r, c), (c = c.sibling);
                    }
                    o.type === S
                      ? (((i = Du(o.props.children, r.mode, l, o.key)).return =
                          r),
                        (r = i))
                      : (((l = Ru(
                          o.type,
                          o.key,
                          o.props,
                          null,
                          r.mode,
                          l
                        )).ref = Qi(r, i, o)),
                        (l.return = r),
                        (r = l));
                  }
                  return s(r);
                case k:
                  e: {
                    for (c = o.key; null !== i; ) {
                      if (i.key === c) {
                        if (
                          4 === i.tag &&
                          i.stateNode.containerInfo === o.containerInfo &&
                          i.stateNode.implementation === o.implementation
                        ) {
                          n(r, i.sibling),
                            ((i = a(i, o.children || [])).return = r),
                            (r = i);
                          break e;
                        }
                        n(r, i);
                        break;
                      }
                      t(r, i), (i = i.sibling);
                    }
                    ((i = Fu(o, r.mode, l)).return = r), (r = i);
                  }
                  return s(r);
                case L:
                  return e(r, i, (c = o._init)(o._payload), l);
              }
              if (te(o)) return v(r, i, o, l);
              if (R(o)) return m(r, i, o, l);
              Yi(r, o);
            }
            return ("string" === typeof o && "" !== o) || "number" === typeof o
              ? ((o = "" + o),
                null !== i && 6 === i.tag
                  ? (n(r, i.sibling), ((i = a(i, o)).return = r), (r = i))
                  : (n(r, i), ((i = Iu(o, r.mode, l)).return = r), (r = i)),
                s(r))
              : n(r, i);
          };
        }
        var Xi = Gi(!0),
          Ki = Gi(!1),
          Zi = {},
          Ji = Ea(Zi),
          eo = Ea(Zi),
          to = Ea(Zi);
        function no(e) {
          if (e === Zi) throw Error(i(174));
          return e;
        }
        function ro(e, t) {
          switch ((Pa(to, t), Pa(eo, e), Pa(Ji, Zi), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
              break;
            default:
              t = le(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          Ca(Ji), Pa(Ji, t);
        }
        function ao() {
          Ca(Ji), Ca(eo), Ca(to);
        }
        function io(e) {
          no(to.current);
          var t = no(Ji.current),
            n = le(t, e.type);
          t !== n && (Pa(eo, e), Pa(Ji, n));
        }
        function oo(e) {
          eo.current === e && (Ca(Ji), Ca(eo));
        }
        var so = Ea(0);
        function lo(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (
                null !== n &&
                (null === (n = n.dehydrated) ||
                  "$?" === n.data ||
                  "$!" === n.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var uo = [];
        function co() {
          for (var e = 0; e < uo.length; e++)
            uo[e]._workInProgressVersionPrimary = null;
          uo.length = 0;
        }
        var fo = w.ReactCurrentDispatcher,
          po = w.ReactCurrentBatchConfig,
          ho = 0,
          vo = null,
          mo = null,
          yo = null,
          go = !1,
          bo = !1,
          wo = 0,
          xo = 0;
        function ko() {
          throw Error(i(321));
        }
        function So(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!sr(e[n], t[n])) return !1;
          return !0;
        }
        function Eo(e, t, n, r, a, o) {
          if (
            ((ho = o),
            (vo = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fo.current = null === e || null === e.memoizedState ? ss : ls),
            (e = n(r, a)),
            bo)
          ) {
            o = 0;
            do {
              if (((bo = !1), (wo = 0), 25 <= o)) throw Error(i(301));
              (o += 1),
                (yo = mo = null),
                (t.updateQueue = null),
                (fo.current = us),
                (e = n(r, a));
            } while (bo);
          }
          if (
            ((fo.current = os),
            (t = null !== mo && null !== mo.next),
            (ho = 0),
            (yo = mo = vo = null),
            (go = !1),
            t)
          )
            throw Error(i(300));
          return e;
        }
        function Co() {
          var e = 0 !== wo;
          return (wo = 0), e;
        }
        function Po() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === yo ? (vo.memoizedState = yo = e) : (yo = yo.next = e), yo
          );
        }
        function To() {
          if (null === mo) {
            var e = vo.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mo.next;
          var t = null === yo ? vo.memoizedState : yo.next;
          if (null !== t) (yo = t), (mo = e);
          else {
            if (null === e) throw Error(i(310));
            (e = {
              memoizedState: (mo = e).memoizedState,
              baseState: mo.baseState,
              baseQueue: mo.baseQueue,
              queue: mo.queue,
              next: null,
            }),
              null === yo ? (vo.memoizedState = yo = e) : (yo = yo.next = e);
          }
          return yo;
        }
        function jo(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function _o(e) {
          var t = To(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = mo,
            a = r.baseQueue,
            o = n.pending;
          if (null !== o) {
            if (null !== a) {
              var s = a.next;
              (a.next = o.next), (o.next = s);
            }
            (r.baseQueue = a = o), (n.pending = null);
          }
          if (null !== a) {
            (o = a.next), (r = r.baseState);
            var l = (s = null),
              u = null,
              c = o;
            do {
              var f = c.lane;
              if ((ho & f) === f)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (r = c.hasEagerState ? c.eagerState : e(r, c.action));
              else {
                var d = {
                  lane: f,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((l = u = d), (s = r)) : (u = u.next = d),
                  (vo.lanes |= f),
                  (Vl |= f);
              }
              c = c.next;
            } while (null !== c && c !== o);
            null === u ? (s = r) : (u.next = l),
              sr(r, t.memoizedState) || (ws = !0),
              (t.memoizedState = r),
              (t.baseState = s),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do {
              (o = a.lane), (vo.lanes |= o), (Vl |= o), (a = a.next);
            } while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function No(e) {
          var t = To(),
            n = t.queue;
          if (null === n) throw Error(i(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            o = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var s = (a = a.next);
            do {
              (o = e(o, s.action)), (s = s.next);
            } while (s !== a);
            sr(o, t.memoizedState) || (ws = !0),
              (t.memoizedState = o),
              null === t.baseQueue && (t.baseState = o),
              (n.lastRenderedState = o);
          }
          return [o, r];
        }
        function Oo() {}
        function Lo(e, t) {
          var n = vo,
            r = To(),
            a = t(),
            o = !sr(r.memoizedState, a);
          if (
            (o && ((r.memoizedState = a), (ws = !0)),
            (r = r.queue),
            Ho(Ro.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              o ||
              (null !== yo && 1 & yo.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              Fo(9, Mo.bind(null, n, r, a, t), void 0, null),
              null === Nl)
            )
              throw Error(i(349));
            0 !== (30 & ho) || Ao(n, t, a);
          }
          return a;
        }
        function Ao(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function Mo(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), Do(t) && Vo(e);
        }
        function Ro(e, t, n) {
          return n(function () {
            Do(t) && Vo(e);
          });
        }
        function Do(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !sr(e, n);
          } catch (r) {
            return !0;
          }
        }
        function Vo(e) {
          var t = _i(e, 1);
          null !== t && ru(t, e, 1, -1);
        }
        function Io(e) {
          var t = Po();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: jo,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = ns.bind(null, vo, e)),
            [t.memoizedState, e]
          );
        }
        function Fo(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = vo.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (vo.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function zo() {
          return To().memoizedState;
        }
        function Uo(e, t, n, r) {
          var a = Po();
          (vo.flags |= e),
            (a.memoizedState = Fo(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function Bo(e, t, n, r) {
          var a = To();
          r = void 0 === r ? null : r;
          var i = void 0;
          if (null !== mo) {
            var o = mo.memoizedState;
            if (((i = o.destroy), null !== r && So(r, o.deps)))
              return void (a.memoizedState = Fo(t, n, i, r));
          }
          (vo.flags |= e), (a.memoizedState = Fo(1 | t, n, i, r));
        }
        function Wo(e, t) {
          return Uo(8390656, 8, e, t);
        }
        function Ho(e, t) {
          return Bo(2048, 8, e, t);
        }
        function $o(e, t) {
          return Bo(4, 2, e, t);
        }
        function Qo(e, t) {
          return Bo(4, 4, e, t);
        }
        function Yo(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function qo(e, t, n) {
          return (
            (n = null !== n && void 0 !== n ? n.concat([e]) : null),
            Bo(4, 4, Yo.bind(null, t, e), n)
          );
        }
        function Go() {}
        function Xo(e, t) {
          var n = To();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ko(e, t) {
          var n = To();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && So(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function Zo(e, t, n) {
          return 0 === (21 & ho)
            ? (e.baseState && ((e.baseState = !1), (ws = !0)),
              (e.memoizedState = n))
            : (sr(n, t) ||
                ((n = vt()), (vo.lanes |= n), (Vl |= n), (e.baseState = !0)),
              t);
        }
        function Jo(e, t) {
          var n = bt;
          (bt = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = po.transition;
          po.transition = {};
          try {
            e(!1), t();
          } finally {
            (bt = n), (po.transition = r);
          }
        }
        function es() {
          return To().memoizedState;
        }
        function ts(e, t, n) {
          var r = nu(e);
          if (
            ((n = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            rs(e))
          )
            as(t, n);
          else if (null !== (n = ji(e, t, n, r))) {
            ru(n, e, r, tu()), is(n, t, r);
          }
        }
        function ns(e, t, n) {
          var r = nu(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rs(e)) as(t, a);
          else {
            var i = e.alternate;
            if (
              0 === e.lanes &&
              (null === i || 0 === i.lanes) &&
              null !== (i = t.lastRenderedReducer)
            )
              try {
                var o = t.lastRenderedState,
                  s = i(o, n);
                if (((a.hasEagerState = !0), (a.eagerState = s), sr(s, o))) {
                  var l = t.interleaved;
                  return (
                    null === l
                      ? ((a.next = a), Ti(t))
                      : ((a.next = l.next), (l.next = a)),
                    void (t.interleaved = a)
                  );
                }
              } catch (u) {}
            null !== (n = ji(e, t, a, r)) &&
              (ru(n, e, r, (a = tu())), is(n, t, r));
          }
        }
        function rs(e) {
          var t = e.alternate;
          return e === vo || (null !== t && t === vo);
        }
        function as(e, t) {
          bo = go = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function is(e, t, n) {
          if (0 !== (4194240 & n)) {
            var r = t.lanes;
            (n |= r &= e.pendingLanes), (t.lanes = n), gt(e, n);
          }
        }
        var os = {
            readContext: Ci,
            useCallback: ko,
            useContext: ko,
            useEffect: ko,
            useImperativeHandle: ko,
            useInsertionEffect: ko,
            useLayoutEffect: ko,
            useMemo: ko,
            useReducer: ko,
            useRef: ko,
            useState: ko,
            useDebugValue: ko,
            useDeferredValue: ko,
            useTransition: ko,
            useMutableSource: ko,
            useSyncExternalStore: ko,
            useId: ko,
            unstable_isNewReconciler: !1,
          },
          ss = {
            readContext: Ci,
            useCallback: function (e, t) {
              return (Po().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ci,
            useEffect: Wo,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null !== n && void 0 !== n ? n.concat([e]) : null),
                Uo(4194308, 4, Yo.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return Uo(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Uo(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = Po();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = Po();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = ts.bind(null, vo, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Po().memoizedState = e);
            },
            useState: Io,
            useDebugValue: Go,
            useDeferredValue: function (e) {
              return (Po().memoizedState = e);
            },
            useTransition: function () {
              var e = Io(!1),
                t = e[0];
              return (
                (e = Jo.bind(null, e[1])), (Po().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = vo,
                a = Po();
              if (ai) {
                if (void 0 === n) throw Error(i(407));
                n = n();
              } else {
                if (((n = t()), null === Nl)) throw Error(i(349));
                0 !== (30 & ho) || Ao(r, t, n);
              }
              a.memoizedState = n;
              var o = { value: n, getSnapshot: t };
              return (
                (a.queue = o),
                Wo(Ro.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                Fo(9, Mo.bind(null, r, o, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = Po(),
                t = Nl.identifierPrefix;
              if (ai) {
                var n = Ka;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (Xa & ~(1 << (32 - ot(Xa) - 1))).toString(32) + n)),
                  0 < (n = wo++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = xo++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          ls = {
            readContext: Ci,
            useCallback: Xo,
            useContext: Ci,
            useEffect: Ho,
            useImperativeHandle: qo,
            useInsertionEffect: $o,
            useLayoutEffect: Qo,
            useMemo: Ko,
            useReducer: _o,
            useRef: zo,
            useState: function () {
              return _o(jo);
            },
            useDebugValue: Go,
            useDeferredValue: function (e) {
              return Zo(To(), mo.memoizedState, e);
            },
            useTransition: function () {
              return [_o(jo)[0], To().memoizedState];
            },
            useMutableSource: Oo,
            useSyncExternalStore: Lo,
            useId: es,
            unstable_isNewReconciler: !1,
          },
          us = {
            readContext: Ci,
            useCallback: Xo,
            useContext: Ci,
            useEffect: Ho,
            useImperativeHandle: qo,
            useInsertionEffect: $o,
            useLayoutEffect: Qo,
            useMemo: Ko,
            useReducer: No,
            useRef: zo,
            useState: function () {
              return No(jo);
            },
            useDebugValue: Go,
            useDeferredValue: function (e) {
              var t = To();
              return null === mo
                ? (t.memoizedState = e)
                : Zo(t, mo.memoizedState, e);
            },
            useTransition: function () {
              return [No(jo)[0], To().memoizedState];
            },
            useMutableSource: Oo,
            useSyncExternalStore: Lo,
            useId: es,
            unstable_isNewReconciler: !1,
          };
        function cs(e, t) {
          try {
            var n = "",
              r = t;
            do {
              (n += U(r)), (r = r.return);
            } while (r);
            var a = n;
          } catch (i) {
            a = "\nError generating stack: " + i.message + "\n" + i.stack;
          }
          return { value: e, source: t, stack: a, digest: null };
        }
        function fs(e, t, n) {
          return {
            value: e,
            source: null,
            stack: null != n ? n : null,
            digest: null != t ? t : null,
          };
        }
        function ds(e, t) {
          try {
            console.error(t.value);
          } catch (n) {
            setTimeout(function () {
              throw n;
            });
          }
        }
        var ps = "function" === typeof WeakMap ? WeakMap : Map;
        function hs(e, t, n) {
          ((n = Ai(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              $l || (($l = !0), (Ql = r)), ds(0, t);
            }),
            n
          );
        }
        function vs(e, t, n) {
          (n = Ai(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" === typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                ds(0, t);
              });
          }
          var i = e.stateNode;
          return (
            null !== i &&
              "function" === typeof i.componentDidCatch &&
              (n.callback = function () {
                ds(0, t),
                  "function" !== typeof r &&
                    (null === Yl ? (Yl = new Set([this])) : Yl.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            n
          );
        }
        function ms(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new ps();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = Pu.bind(null, e, t, n)), t.then(e, e));
        }
        function ys(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function gs(e, t, n, r, a) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = Ai(-1, 1)).tag = 2), Mi(n, t, 1))),
                  (n.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = a), e);
        }
        var bs = w.ReactCurrentOwner,
          ws = !1;
        function xs(e, t, n, r) {
          t.child = null === e ? Ki(t, null, n, r) : Xi(t, e.child, n, r);
        }
        function ks(e, t, n, r, a) {
          n = n.render;
          var i = t.ref;
          return (
            Ei(t, a),
            (r = Eo(e, t, n, r, i, a)),
            (n = Co()),
            null === e || ws
              ? (ai && n && ei(t), (t.flags |= 1), xs(e, t, r, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $s(e, t, a))
          );
        }
        function Ss(e, t, n, r, a) {
          if (null === e) {
            var i = n.type;
            return "function" !== typeof i ||
              Au(i) ||
              void 0 !== i.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = Ru(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = i), Es(e, t, i, r, a));
          }
          if (((i = e.child), 0 === (e.lanes & a))) {
            var o = i.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : lr)(o, r) &&
              e.ref === t.ref
            )
              return $s(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = Mu(i, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Es(e, t, n, r, a) {
          if (null !== e) {
            var i = e.memoizedProps;
            if (lr(i, r) && e.ref === t.ref) {
              if (((ws = !1), (t.pendingProps = r = i), 0 === (e.lanes & a)))
                return (t.lanes = e.lanes), $s(e, t, a);
              0 !== (131072 & e.flags) && (ws = !0);
            }
          }
          return Ts(e, t, n, r, a);
        }
        function Cs(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            i = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                Pa(Ml, Al),
                (Al |= n);
            else {
              if (0 === (1073741824 & n))
                return (
                  (e = null !== i ? i.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null,
                  }),
                  (t.updateQueue = null),
                  Pa(Ml, Al),
                  (Al |= e),
                  null
                );
              (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
              }),
                (r = null !== i ? i.baseLanes : n),
                Pa(Ml, Al),
                (Al |= r);
            }
          else
            null !== i
              ? ((r = i.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              Pa(Ml, Al),
              (Al |= r);
          return xs(e, t, a, n), t.child;
        }
        function Ps(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ts(e, t, n, r, a) {
          var i = La(n) ? Na : ja.current;
          return (
            (i = Oa(t, i)),
            Ei(t, a),
            (n = Eo(e, t, n, r, i, a)),
            (r = Co()),
            null === e || ws
              ? (ai && r && ei(t), (t.flags |= 1), xs(e, t, n, a), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~a),
                $s(e, t, a))
          );
        }
        function js(e, t, n, r, a) {
          if (La(n)) {
            var i = !0;
            Da(t);
          } else i = !1;
          if ((Ei(t, a), null === t.stateNode))
            Hs(e, t), Wi(t, n, r), $i(t, n, r, a), (r = !0);
          else if (null === e) {
            var o = t.stateNode,
              s = t.memoizedProps;
            o.props = s;
            var l = o.context,
              u = n.contextType;
            "object" === typeof u && null !== u
              ? (u = Ci(u))
              : (u = Oa(t, (u = La(n) ? Na : ja.current)));
            var c = n.getDerivedStateFromProps,
              f =
                "function" === typeof c ||
                "function" === typeof o.getSnapshotBeforeUpdate;
            f ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== r || l !== u) && Hi(t, o, r, u)),
              (Ni = !1);
            var d = t.memoizedState;
            (o.state = d),
              Vi(t, r, o, a),
              (l = t.memoizedState),
              s !== r || d !== l || _a.current || Ni
                ? ("function" === typeof c &&
                    (zi(t, n, c, r), (l = t.memoizedState)),
                  (s = Ni || Bi(t, n, s, r, d, l, u))
                    ? (f ||
                        ("function" !== typeof o.UNSAFE_componentWillMount &&
                          "function" !== typeof o.componentWillMount) ||
                        ("function" === typeof o.componentWillMount &&
                          o.componentWillMount(),
                        "function" === typeof o.UNSAFE_componentWillMount &&
                          o.UNSAFE_componentWillMount()),
                      "function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof o.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = l)),
                  (o.props = r),
                  (o.state = l),
                  (o.context = u),
                  (r = s))
                : ("function" === typeof o.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (o = t.stateNode),
              Li(e, t),
              (s = t.memoizedProps),
              (u = t.type === t.elementType ? s : mi(t.type, s)),
              (o.props = u),
              (f = t.pendingProps),
              (d = o.context),
              "object" === typeof (l = n.contextType) && null !== l
                ? (l = Ci(l))
                : (l = Oa(t, (l = La(n) ? Na : ja.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" === typeof p ||
              "function" === typeof o.getSnapshotBeforeUpdate) ||
              ("function" !== typeof o.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof o.componentWillReceiveProps) ||
              ((s !== f || d !== l) && Hi(t, o, r, l)),
              (Ni = !1),
              (d = t.memoizedState),
              (o.state = d),
              Vi(t, r, o, a);
            var h = t.memoizedState;
            s !== f || d !== h || _a.current || Ni
              ? ("function" === typeof p &&
                  (zi(t, n, p, r), (h = t.memoizedState)),
                (u = Ni || Bi(t, n, u, r, d, h, l) || !1)
                  ? (c ||
                      ("function" !== typeof o.UNSAFE_componentWillUpdate &&
                        "function" !== typeof o.componentWillUpdate) ||
                      ("function" === typeof o.componentWillUpdate &&
                        o.componentWillUpdate(r, h, l),
                      "function" === typeof o.UNSAFE_componentWillUpdate &&
                        o.UNSAFE_componentWillUpdate(r, h, l)),
                    "function" === typeof o.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof o.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof o.componentDidUpdate ||
                      (s === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof o.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (o.props = r),
                (o.state = h),
                (o.context = l),
                (r = u))
              : ("function" !== typeof o.componentDidUpdate ||
                  (s === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof o.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return _s(e, t, n, r, i, a);
        }
        function _s(e, t, n, r, a, i) {
          Ps(e, t);
          var o = 0 !== (128 & t.flags);
          if (!r && !o) return a && Va(t, n, !1), $s(e, t, i);
          (r = t.stateNode), (bs.current = t);
          var s =
            o && "function" !== typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && o
              ? ((t.child = Xi(t, e.child, null, i)),
                (t.child = Xi(t, null, s, i)))
              : xs(e, t, s, i),
            (t.memoizedState = r.state),
            a && Va(t, n, !0),
            t.child
          );
        }
        function Ns(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Ma(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Ma(0, t.context, !1),
            ro(e, t.containerInfo);
        }
        function Os(e, t, n, r, a) {
          return pi(), hi(a), (t.flags |= 256), xs(e, t, n, r), t.child;
        }
        var Ls,
          As,
          Ms,
          Rs,
          Ds = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Vs(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Is(e, t, n) {
          var r,
            a = t.pendingProps,
            o = so.current,
            s = !1,
            l = 0 !== (128 & t.flags);
          if (
            ((r = l) ||
              (r = (null === e || null !== e.memoizedState) && 0 !== (2 & o)),
            r
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (o |= 1),
            Pa(so, 1 & o),
            null === e)
          )
            return (
              ui(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((l = a.children),
                  (e = a.fallback),
                  s
                    ? ((a = t.mode),
                      (s = t.child),
                      (l = { mode: "hidden", children: l }),
                      0 === (1 & a) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = l))
                        : (s = Vu(l, a, 0, null)),
                      (e = Du(e, a, n, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = Vs(n)),
                      (t.memoizedState = Ds),
                      e)
                    : Fs(t, l))
            );
          if (null !== (o = e.memoizedState) && null !== (r = o.dehydrated))
            return (function (e, t, n, r, a, o, s) {
              if (n)
                return 256 & t.flags
                  ? ((t.flags &= -257), zs(e, t, s, (r = fs(Error(i(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((o = r.fallback),
                    (a = t.mode),
                    (r = Vu(
                      { mode: "visible", children: r.children },
                      a,
                      0,
                      null
                    )),
                    ((o = Du(o, a, s, null)).flags |= 2),
                    (r.return = t),
                    (o.return = t),
                    (r.sibling = o),
                    (t.child = r),
                    0 !== (1 & t.mode) && Xi(t, e.child, null, s),
                    (t.child.memoizedState = Vs(s)),
                    (t.memoizedState = Ds),
                    o);
              if (0 === (1 & t.mode)) return zs(e, t, s, null);
              if ("$!" === a.data) {
                if ((r = a.nextSibling && a.nextSibling.dataset))
                  var l = r.dgst;
                return (
                  (r = l), zs(e, t, s, (r = fs((o = Error(i(419))), r, void 0)))
                );
              }
              if (((l = 0 !== (s & e.childLanes)), ws || l)) {
                if (null !== (r = Nl)) {
                  switch (s & -s) {
                    case 4:
                      a = 2;
                      break;
                    case 16:
                      a = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      a = 32;
                      break;
                    case 536870912:
                      a = 268435456;
                      break;
                    default:
                      a = 0;
                  }
                  0 !== (a = 0 !== (a & (r.suspendedLanes | s)) ? 0 : a) &&
                    a !== o.retryLane &&
                    ((o.retryLane = a), _i(e, a), ru(r, e, a, -1));
                }
                return mu(), zs(e, t, s, (r = fs(Error(i(421)))));
              }
              return "$?" === a.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = ju.bind(null, e)),
                  (a._reactRetry = t),
                  null)
                : ((e = o.treeContext),
                  (ri = ua(a.nextSibling)),
                  (ni = t),
                  (ai = !0),
                  (ii = null),
                  null !== e &&
                    ((Ya[qa++] = Xa),
                    (Ya[qa++] = Ka),
                    (Ya[qa++] = Ga),
                    (Xa = e.id),
                    (Ka = e.overflow),
                    (Ga = t)),
                  (t = Fs(t, r.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, l, a, r, o, n);
          if (s) {
            (s = a.fallback), (l = t.mode), (r = (o = e.child).sibling);
            var u = { mode: "hidden", children: a.children };
            return (
              0 === (1 & l) && t.child !== o
                ? (((a = t.child).childLanes = 0),
                  (a.pendingProps = u),
                  (t.deletions = null))
                : ((a = Mu(o, u)).subtreeFlags = 14680064 & o.subtreeFlags),
              null !== r
                ? (s = Mu(r, s))
                : ((s = Du(s, l, n, null)).flags |= 2),
              (s.return = t),
              (a.return = t),
              (a.sibling = s),
              (t.child = a),
              (a = s),
              (s = t.child),
              (l =
                null === (l = e.child.memoizedState)
                  ? Vs(n)
                  : {
                      baseLanes: l.baseLanes | n,
                      cachePool: null,
                      transitions: l.transitions,
                    }),
              (s.memoizedState = l),
              (s.childLanes = e.childLanes & ~n),
              (t.memoizedState = Ds),
              a
            );
          }
          return (
            (e = (s = e.child).sibling),
            (a = Mu(s, { mode: "visible", children: a.children })),
            0 === (1 & t.mode) && (a.lanes = n),
            (a.return = t),
            (a.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = a),
            (t.memoizedState = null),
            a
          );
        }
        function Fs(e, t) {
          return (
            ((t = Vu(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function zs(e, t, n, r) {
          return (
            null !== r && hi(r),
            Xi(t, e.child, null, n),
            ((e = Fs(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Us(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), Si(e.return, t, n);
        }
        function Bs(e, t, n, r, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = a));
        }
        function Ws(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            i = r.tail;
          if ((xs(e, t, r.children, n), 0 !== (2 & (r = so.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Us(e, n, t);
                else if (19 === e.tag) Us(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((Pa(so, r), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (n = t.child, a = null; null !== n; )
                  null !== (e = n.alternate) && null === lo(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  Bs(t, !1, a, n, i);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === lo(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                Bs(t, !0, n, null, i);
                break;
              case "together":
                Bs(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Hs(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function $s(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Vl |= t.lanes),
            0 === (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Mu((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Mu(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        function Qs(e, t) {
          if (!ai)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function Ys(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        function qs(e, t, n) {
          var r = t.pendingProps;
          switch ((ti(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Ys(t), null;
            case 1:
            case 17:
              return La(t.type) && Aa(), Ys(t), null;
            case 3:
              return (
                (r = t.stateNode),
                ao(),
                Ca(_a),
                Ca(ja),
                co(),
                r.pendingContext &&
                  ((r.context = r.pendingContext), (r.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fi(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== ii && (su(ii), (ii = null)))),
                As(e, t),
                Ys(t),
                null
              );
            case 5:
              oo(t);
              var a = no(to.current);
              if (((n = t.type), null !== e && null != t.stateNode))
                Ms(e, t, n, r, a),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!r) {
                  if (null === t.stateNode) throw Error(i(166));
                  return Ys(t), null;
                }
                if (((e = no(Ji.current)), fi(t))) {
                  (r = t.stateNode), (n = t.type);
                  var o = t.memoizedProps;
                  switch (
                    ((r[da] = t), (r[pa] = o), (e = 0 !== (1 & t.mode)), n)
                  ) {
                    case "dialog":
                      Fr("cancel", r), Fr("close", r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Fr("load", r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Rr.length; a++) Fr(Rr[a], r);
                      break;
                    case "source":
                      Fr("error", r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Fr("error", r), Fr("load", r);
                      break;
                    case "details":
                      Fr("toggle", r);
                      break;
                    case "input":
                      X(r, o), Fr("invalid", r);
                      break;
                    case "select":
                      (r._wrapperState = { wasMultiple: !!o.multiple }),
                        Fr("invalid", r);
                      break;
                    case "textarea":
                      ae(r, o), Fr("invalid", r);
                  }
                  for (var l in (ge(n, o), (a = null), o))
                    if (o.hasOwnProperty(l)) {
                      var u = o[l];
                      "children" === l
                        ? "string" === typeof u
                          ? r.textContent !== u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (a = ["children", u]))
                          : "number" === typeof u &&
                            r.textContent !== "" + u &&
                            (!0 !== o.suppressHydrationWarning &&
                              Zr(r.textContent, u, e),
                            (a = ["children", "" + u]))
                        : s.hasOwnProperty(l) &&
                          null != u &&
                          "onScroll" === l &&
                          Fr("scroll", r);
                    }
                  switch (n) {
                    case "input":
                      Q(r), J(r, o, !0);
                      break;
                    case "textarea":
                      Q(r), oe(r);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof o.onClick && (r.onclick = Jr);
                  }
                  (r = a), (t.updateQueue = r), null !== r && (t.flags |= 4);
                } else {
                  (l = 9 === a.nodeType ? a : a.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(n)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === n
                        ? (((e = l.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof r.is
                        ? (e = l.createElement(n, { is: r.is }))
                        : ((e = l.createElement(n)),
                          "select" === n &&
                            ((l = e),
                            r.multiple
                              ? (l.multiple = !0)
                              : r.size && (l.size = r.size)))
                      : (e = l.createElementNS(e, n)),
                    (e[da] = t),
                    (e[pa] = r),
                    Ls(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((l = be(n, r)), n)) {
                      case "dialog":
                        Fr("cancel", e), Fr("close", e), (a = r);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        Fr("load", e), (a = r);
                        break;
                      case "video":
                      case "audio":
                        for (a = 0; a < Rr.length; a++) Fr(Rr[a], e);
                        a = r;
                        break;
                      case "source":
                        Fr("error", e), (a = r);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        Fr("error", e), Fr("load", e), (a = r);
                        break;
                      case "details":
                        Fr("toggle", e), (a = r);
                        break;
                      case "input":
                        X(e, r), (a = G(e, r)), Fr("invalid", e);
                        break;
                      case "option":
                      default:
                        a = r;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!r.multiple }),
                          (a = V({}, r, { value: void 0 })),
                          Fr("invalid", e);
                        break;
                      case "textarea":
                        ae(e, r), (a = re(e, r)), Fr("invalid", e);
                    }
                    for (o in (ge(n, a), (u = a)))
                      if (u.hasOwnProperty(o)) {
                        var c = u[o];
                        "style" === o
                          ? me(e, c)
                          : "dangerouslySetInnerHTML" === o
                          ? null != (c = c ? c.__html : void 0) && fe(e, c)
                          : "children" === o
                          ? "string" === typeof c
                            ? ("textarea" !== n || "" !== c) && de(e, c)
                            : "number" === typeof c && de(e, "" + c)
                          : "suppressContentEditableWarning" !== o &&
                            "suppressHydrationWarning" !== o &&
                            "autoFocus" !== o &&
                            (s.hasOwnProperty(o)
                              ? null != c && "onScroll" === o && Fr("scroll", e)
                              : null != c && b(e, o, c, l));
                      }
                    switch (n) {
                      case "input":
                        Q(e), J(e, r, !1);
                        break;
                      case "textarea":
                        Q(e), oe(e);
                        break;
                      case "option":
                        null != r.value &&
                          e.setAttribute("value", "" + H(r.value));
                        break;
                      case "select":
                        (e.multiple = !!r.multiple),
                          null != (o = r.value)
                            ? ne(e, !!r.multiple, o, !1)
                            : null != r.defaultValue &&
                              ne(e, !!r.multiple, r.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof a.onClick && (e.onclick = Jr);
                    }
                    switch (n) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        r = !!r.autoFocus;
                        break e;
                      case "img":
                        r = !0;
                        break e;
                      default:
                        r = !1;
                    }
                  }
                  r && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Ys(t), null;
            case 6:
              if (e && null != t.stateNode) Rs(e, t, e.memoizedProps, r);
              else {
                if ("string" !== typeof r && null === t.stateNode)
                  throw Error(i(166));
                if (((n = no(to.current)), no(Ji.current), fi(t))) {
                  if (
                    ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[da] = t),
                    (o = r.nodeValue !== n) && null !== (e = ni))
                  )
                    switch (e.tag) {
                      case 3:
                        Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                    }
                  o && (t.flags |= 4);
                } else
                  ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(
                    r
                  ))[da] = t),
                    (t.stateNode = r);
              }
              return Ys(t), null;
            case 13:
              if (
                (Ca(so),
                (r = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (
                  ai &&
                  null !== ri &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags)
                )
                  di(), pi(), (t.flags |= 98560), (o = !1);
                else if (((o = fi(t)), null !== r && null !== r.dehydrated)) {
                  if (null === e) {
                    if (!o) throw Error(i(318));
                    if (
                      !(o =
                        null !== (o = t.memoizedState) ? o.dehydrated : null)
                    )
                      throw Error(i(317));
                    o[da] = t;
                  } else
                    pi(),
                      0 === (128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4);
                  Ys(t), (o = !1);
                } else null !== ii && (su(ii), (ii = null)), (o = !0);
                if (!o) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r) !==
                    (null !== e && null !== e.memoizedState) &&
                    r &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & so.current)
                        ? 0 === Rl && (Rl = 3)
                        : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Ys(t),
                  null);
            case 4:
              return (
                ao(),
                As(e, t),
                null === e && Br(t.stateNode.containerInfo),
                Ys(t),
                null
              );
            case 10:
              return ki(t.type._context), Ys(t), null;
            case 19:
              if ((Ca(so), null === (o = t.memoizedState))) return Ys(t), null;
              if (((r = 0 !== (128 & t.flags)), null === (l = o.rendering)))
                if (r) Qs(o, !1);
                else {
                  if (0 !== Rl || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (l = lo(e))) {
                        for (
                          t.flags |= 128,
                            Qs(o, !1),
                            null !== (r = l.updateQueue) &&
                              ((t.updateQueue = r), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child;
                          null !== n;

                        )
                          (e = r),
                            ((o = n).flags &= 14680066),
                            null === (l = o.alternate)
                              ? ((o.childLanes = 0),
                                (o.lanes = e),
                                (o.child = null),
                                (o.subtreeFlags = 0),
                                (o.memoizedProps = null),
                                (o.memoizedState = null),
                                (o.updateQueue = null),
                                (o.dependencies = null),
                                (o.stateNode = null))
                              : ((o.childLanes = l.childLanes),
                                (o.lanes = l.lanes),
                                (o.child = l.child),
                                (o.subtreeFlags = 0),
                                (o.deletions = null),
                                (o.memoizedProps = l.memoizedProps),
                                (o.memoizedState = l.memoizedState),
                                (o.updateQueue = l.updateQueue),
                                (o.type = l.type),
                                (e = l.dependencies),
                                (o.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (n = n.sibling);
                        return Pa(so, (1 & so.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== o.tail &&
                    Ke() > Wl &&
                    ((t.flags |= 128),
                    (r = !0),
                    Qs(o, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!r)
                  if (null !== (e = lo(l))) {
                    if (
                      ((t.flags |= 128),
                      (r = !0),
                      null !== (n = e.updateQueue) &&
                        ((t.updateQueue = n), (t.flags |= 4)),
                      Qs(o, !0),
                      null === o.tail &&
                        "hidden" === o.tailMode &&
                        !l.alternate &&
                        !ai)
                    )
                      return Ys(t), null;
                  } else
                    2 * Ke() - o.renderingStartTime > Wl &&
                      1073741824 !== n &&
                      ((t.flags |= 128),
                      (r = !0),
                      Qs(o, !1),
                      (t.lanes = 4194304));
                o.isBackwards
                  ? ((l.sibling = t.child), (t.child = l))
                  : (null !== (n = o.last) ? (n.sibling = l) : (t.child = l),
                    (o.last = l));
              }
              return null !== o.tail
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = Ke()),
                  (t.sibling = null),
                  (n = so.current),
                  Pa(so, r ? (1 & n) | 2 : 1 & n),
                  t)
                : (Ys(t), null);
            case 22:
            case 23:
              return (
                du(),
                (r = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== r &&
                  (t.flags |= 8192),
                r && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & Al) &&
                    (Ys(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Ys(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(i(156, t.tag));
        }
        function Gs(e, t) {
          switch ((ti(t), t.tag)) {
            case 1:
              return (
                La(t.type) && Aa(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                ao(),
                Ca(_a),
                Ca(ja),
                co(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return oo(t), null;
            case 13:
              if (
                (Ca(so),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(i(340));
                pi();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return Ca(so), null;
            case 4:
              return ao(), null;
            case 10:
              return ki(t.type._context), null;
            case 22:
            case 23:
              return du(), null;
            default:
              return null;
          }
        }
        (Ls = function (e, t) {
          for (var n = t.child; null !== n; ) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
              (n.child.return = n), (n = n.child);
              continue;
            }
            if (n === t) break;
            for (; null === n.sibling; ) {
              if (null === n.return || n.return === t) return;
              n = n.return;
            }
            (n.sibling.return = n.return), (n = n.sibling);
          }
        }),
          (As = function () {}),
          (Ms = function (e, t, n, r) {
            var a = e.memoizedProps;
            if (a !== r) {
              (e = t.stateNode), no(Ji.current);
              var i,
                o = null;
              switch (n) {
                case "input":
                  (a = G(e, a)), (r = G(e, r)), (o = []);
                  break;
                case "select":
                  (a = V({}, a, { value: void 0 })),
                    (r = V({}, r, { value: void 0 })),
                    (o = []);
                  break;
                case "textarea":
                  (a = re(e, a)), (r = re(e, r)), (o = []);
                  break;
                default:
                  "function" !== typeof a.onClick &&
                    "function" === typeof r.onClick &&
                    (e.onclick = Jr);
              }
              for (c in (ge(n, r), (n = null), a))
                if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && null != a[c])
                  if ("style" === c) {
                    var l = a[c];
                    for (i in l)
                      l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== c &&
                      "children" !== c &&
                      "suppressContentEditableWarning" !== c &&
                      "suppressHydrationWarning" !== c &&
                      "autoFocus" !== c &&
                      (s.hasOwnProperty(c)
                        ? o || (o = [])
                        : (o = o || []).push(c, null));
              for (c in r) {
                var u = r[c];
                if (
                  ((l = null != a ? a[c] : void 0),
                  r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                )
                  if ("style" === c)
                    if (l) {
                      for (i in l)
                        !l.hasOwnProperty(i) ||
                          (u && u.hasOwnProperty(i)) ||
                          (n || (n = {}), (n[i] = ""));
                      for (i in u)
                        u.hasOwnProperty(i) &&
                          l[i] !== u[i] &&
                          (n || (n = {}), (n[i] = u[i]));
                    } else n || (o || (o = []), o.push(c, n)), (n = u);
                  else
                    "dangerouslySetInnerHTML" === c
                      ? ((u = u ? u.__html : void 0),
                        (l = l ? l.__html : void 0),
                        null != u && l !== u && (o = o || []).push(c, u))
                      : "children" === c
                      ? ("string" !== typeof u && "number" !== typeof u) ||
                        (o = o || []).push(c, "" + u)
                      : "suppressContentEditableWarning" !== c &&
                        "suppressHydrationWarning" !== c &&
                        (s.hasOwnProperty(c)
                          ? (null != u && "onScroll" === c && Fr("scroll", e),
                            o || l === u || (o = []))
                          : (o = o || []).push(c, u));
              }
              n && (o = o || []).push("style", n);
              var c = o;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Rs = function (e, t, n, r) {
            n !== r && (t.flags |= 4);
          });
        var Xs = !1,
          Ks = !1,
          Zs = "function" === typeof WeakSet ? WeakSet : Set,
          Js = null;
        function el(e, t) {
          var n = e.ref;
          if (null !== n)
            if ("function" === typeof n)
              try {
                n(null);
              } catch (r) {
                Cu(e, t, r);
              }
            else n.current = null;
        }
        function tl(e, t, n) {
          try {
            n();
          } catch (r) {
            Cu(e, t, r);
          }
        }
        var nl = !1;
        function rl(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var i = a.destroy;
                (a.destroy = void 0), void 0 !== i && tl(t, n, i);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function al(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function il(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            e.tag, (e = n), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function ol(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), ol(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[da],
              delete t[pa],
              delete t[va],
              delete t[ma],
              delete t[ya]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function sl(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ll(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || sl(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function ul(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode),
              t
                ? 8 === n.nodeType
                  ? n.parentNode.insertBefore(e, t)
                  : n.insertBefore(e, t)
                : (8 === n.nodeType
                    ? (t = n.parentNode).insertBefore(e, n)
                    : (t = n).appendChild(e),
                  (null !== (n = n._reactRootContainer) && void 0 !== n) ||
                    null !== t.onclick ||
                    (t.onclick = Jr));
          else if (4 !== r && null !== (e = e.child))
            for (ul(e, t, n), e = e.sibling; null !== e; )
              ul(e, t, n), (e = e.sibling);
        }
        function cl(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
          else if (4 !== r && null !== (e = e.child))
            for (cl(e, t, n), e = e.sibling; null !== e; )
              cl(e, t, n), (e = e.sibling);
        }
        var fl = null,
          dl = !1;
        function pl(e, t, n) {
          for (n = n.child; null !== n; ) hl(e, t, n), (n = n.sibling);
        }
        function hl(e, t, n) {
          if (it && "function" === typeof it.onCommitFiberUnmount)
            try {
              it.onCommitFiberUnmount(at, n);
            } catch (s) {}
          switch (n.tag) {
            case 5:
              Ks || el(n, t);
            case 6:
              var r = fl,
                a = dl;
              (fl = null),
                pl(e, t, n),
                (dl = a),
                null !== (fl = r) &&
                  (dl
                    ? ((e = fl),
                      (n = n.stateNode),
                      8 === e.nodeType
                        ? e.parentNode.removeChild(n)
                        : e.removeChild(n))
                    : fl.removeChild(n.stateNode));
              break;
            case 18:
              null !== fl &&
                (dl
                  ? ((e = fl),
                    (n = n.stateNode),
                    8 === e.nodeType
                      ? la(e.parentNode, n)
                      : 1 === e.nodeType && la(e, n),
                    Bt(e))
                  : la(fl, n.stateNode));
              break;
            case 4:
              (r = fl),
                (a = dl),
                (fl = n.stateNode.containerInfo),
                (dl = !0),
                pl(e, t, n),
                (fl = r),
                (dl = a);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (
                !Ks &&
                null !== (r = n.updateQueue) &&
                null !== (r = r.lastEffect)
              ) {
                a = r = r.next;
                do {
                  var i = a,
                    o = i.destroy;
                  (i = i.tag),
                    void 0 !== o &&
                      (0 !== (2 & i) || 0 !== (4 & i)) &&
                      tl(n, t, o),
                    (a = a.next);
                } while (a !== r);
              }
              pl(e, t, n);
              break;
            case 1:
              if (
                !Ks &&
                (el(n, t),
                "function" === typeof (r = n.stateNode).componentWillUnmount)
              )
                try {
                  (r.props = n.memoizedProps),
                    (r.state = n.memoizedState),
                    r.componentWillUnmount();
                } catch (s) {
                  Cu(n, t, s);
                }
              pl(e, t, n);
              break;
            case 21:
              pl(e, t, n);
              break;
            case 22:
              1 & n.mode
                ? ((Ks = (r = Ks) || null !== n.memoizedState),
                  pl(e, t, n),
                  (Ks = r))
                : pl(e, t, n);
              break;
            default:
              pl(e, t, n);
          }
        }
        function vl(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new Zs()),
              t.forEach(function (t) {
                var r = _u.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function ml(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var r = 0; r < n.length; r++) {
              var a = n[r];
              try {
                var o = e,
                  s = t,
                  l = s;
                e: for (; null !== l; ) {
                  switch (l.tag) {
                    case 5:
                      (fl = l.stateNode), (dl = !1);
                      break e;
                    case 3:
                    case 4:
                      (fl = l.stateNode.containerInfo), (dl = !0);
                      break e;
                  }
                  l = l.return;
                }
                if (null === fl) throw Error(i(160));
                hl(o, s, a), (fl = null), (dl = !1);
                var u = a.alternate;
                null !== u && (u.return = null), (a.return = null);
              } catch (c) {
                Cu(a, t, c);
              }
            }
          if (12854 & t.subtreeFlags)
            for (t = t.child; null !== t; ) yl(t, e), (t = t.sibling);
        }
        function yl(e, t) {
          var n = e.alternate,
            r = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ml(t, e), gl(e), 4 & r)) {
                try {
                  rl(3, e, e.return), al(3, e);
                } catch (m) {
                  Cu(e, e.return, m);
                }
                try {
                  rl(5, e, e.return);
                } catch (m) {
                  Cu(e, e.return, m);
                }
              }
              break;
            case 1:
              ml(t, e), gl(e), 512 & r && null !== n && el(n, n.return);
              break;
            case 5:
              if (
                (ml(t, e),
                gl(e),
                512 & r && null !== n && el(n, n.return),
                32 & e.flags)
              ) {
                var a = e.stateNode;
                try {
                  de(a, "");
                } catch (m) {
                  Cu(e, e.return, m);
                }
              }
              if (4 & r && null != (a = e.stateNode)) {
                var o = e.memoizedProps,
                  s = null !== n ? n.memoizedProps : o,
                  l = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    "input" === l &&
                      "radio" === o.type &&
                      null != o.name &&
                      K(a, o),
                      be(l, s);
                    var c = be(l, o);
                    for (s = 0; s < u.length; s += 2) {
                      var f = u[s],
                        d = u[s + 1];
                      "style" === f
                        ? me(a, d)
                        : "dangerouslySetInnerHTML" === f
                        ? fe(a, d)
                        : "children" === f
                        ? de(a, d)
                        : b(a, f, d, c);
                    }
                    switch (l) {
                      case "input":
                        Z(a, o);
                        break;
                      case "textarea":
                        ie(a, o);
                        break;
                      case "select":
                        var p = a._wrapperState.wasMultiple;
                        a._wrapperState.wasMultiple = !!o.multiple;
                        var h = o.value;
                        null != h
                          ? ne(a, !!o.multiple, h, !1)
                          : p !== !!o.multiple &&
                            (null != o.defaultValue
                              ? ne(a, !!o.multiple, o.defaultValue, !0)
                              : ne(a, !!o.multiple, o.multiple ? [] : "", !1));
                    }
                    a[pa] = o;
                  } catch (m) {
                    Cu(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((ml(t, e), gl(e), 4 & r)) {
                if (null === e.stateNode) throw Error(i(162));
                (a = e.stateNode), (o = e.memoizedProps);
                try {
                  a.nodeValue = o;
                } catch (m) {
                  Cu(e, e.return, m);
                }
              }
              break;
            case 3:
              if (
                (ml(t, e),
                gl(e),
                4 & r && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Bt(t.containerInfo);
                } catch (m) {
                  Cu(e, e.return, m);
                }
              break;
            case 4:
            default:
              ml(t, e), gl(e);
              break;
            case 13:
              ml(t, e),
                gl(e),
                8192 & (a = e.child).flags &&
                  ((o = null !== a.memoizedState),
                  (a.stateNode.isHidden = o),
                  !o ||
                    (null !== a.alternate &&
                      null !== a.alternate.memoizedState) ||
                    (Bl = Ke())),
                4 & r && vl(e);
              break;
            case 22:
              if (
                ((f = null !== n && null !== n.memoizedState),
                1 & e.mode
                  ? ((Ks = (c = Ks) || f), ml(t, e), (Ks = c))
                  : ml(t, e),
                gl(e),
                8192 & r)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !f && 0 !== (1 & e.mode))
                )
                  for (Js = e, f = e.child; null !== f; ) {
                    for (d = Js = f; null !== Js; ) {
                      switch (((h = (p = Js).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          rl(4, p, p.return);
                          break;
                        case 1:
                          el(p, p.return);
                          var v = p.stateNode;
                          if ("function" === typeof v.componentWillUnmount) {
                            (r = p), (n = p.return);
                            try {
                              (t = r),
                                (v.props = t.memoizedProps),
                                (v.state = t.memoizedState),
                                v.componentWillUnmount();
                            } catch (m) {
                              Cu(r, n, m);
                            }
                          }
                          break;
                        case 5:
                          el(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            kl(d);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Js = h)) : kl(d);
                    }
                    f = f.sibling;
                  }
                e: for (f = null, d = e; ; ) {
                  if (5 === d.tag) {
                    if (null === f) {
                      f = d;
                      try {
                        (a = d.stateNode),
                          c
                            ? "function" === typeof (o = a.style).setProperty
                              ? o.setProperty("display", "none", "important")
                              : (o.display = "none")
                            : ((l = d.stateNode),
                              (s =
                                void 0 !== (u = d.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty("display")
                                  ? u.display
                                  : null),
                              (l.style.display = ve("display", s)));
                      } catch (m) {
                        Cu(e, e.return, m);
                      }
                    }
                  } else if (6 === d.tag) {
                    if (null === f)
                      try {
                        d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                      } catch (m) {
                        Cu(e, e.return, m);
                      }
                  } else if (
                    ((22 !== d.tag && 23 !== d.tag) ||
                      null === d.memoizedState ||
                      d === e) &&
                    null !== d.child
                  ) {
                    (d.child.return = d), (d = d.child);
                    continue;
                  }
                  if (d === e) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === e) break e;
                    f === d && (f = null), (d = d.return);
                  }
                  f === d && (f = null),
                    (d.sibling.return = d.return),
                    (d = d.sibling);
                }
              }
              break;
            case 19:
              ml(t, e), gl(e), 4 & r && vl(e);
            case 21:
          }
        }
        function gl(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var n = e.return; null !== n; ) {
                  if (sl(n)) {
                    var r = n;
                    break e;
                  }
                  n = n.return;
                }
                throw Error(i(160));
              }
              switch (r.tag) {
                case 5:
                  var a = r.stateNode;
                  32 & r.flags && (de(a, ""), (r.flags &= -33)),
                    cl(e, ll(e), a);
                  break;
                case 3:
                case 4:
                  var o = r.stateNode.containerInfo;
                  ul(e, ll(e), o);
                  break;
                default:
                  throw Error(i(161));
              }
            } catch (s) {
              Cu(e, e.return, s);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function bl(e, t, n) {
          (Js = e), wl(e, t, n);
        }
        function wl(e, t, n) {
          for (var r = 0 !== (1 & e.mode); null !== Js; ) {
            var a = Js,
              i = a.child;
            if (22 === a.tag && r) {
              var o = null !== a.memoizedState || Xs;
              if (!o) {
                var s = a.alternate,
                  l = (null !== s && null !== s.memoizedState) || Ks;
                s = Xs;
                var u = Ks;
                if (((Xs = o), (Ks = l) && !u))
                  for (Js = a; null !== Js; )
                    (l = (o = Js).child),
                      22 === o.tag && null !== o.memoizedState
                        ? Sl(a)
                        : null !== l
                        ? ((l.return = o), (Js = l))
                        : Sl(a);
                for (; null !== i; ) (Js = i), wl(i, t, n), (i = i.sibling);
                (Js = a), (Xs = s), (Ks = u);
              }
              xl(e);
            } else
              0 !== (8772 & a.subtreeFlags) && null !== i
                ? ((i.return = a), (Js = i))
                : xl(e);
          }
        }
        function xl(e) {
          for (; null !== Js; ) {
            var t = Js;
            if (0 !== (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ks || al(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !Ks)
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : mi(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var o = t.updateQueue;
                      null !== o && Ii(t, o, r);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              n = t.child.stateNode;
                          }
                        Ii(t, s, n);
                      }
                      break;
                    case 5:
                      var l = t.stateNode;
                      if (null === n && 4 & t.flags) {
                        n = l;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            u.autoFocus && n.focus();
                            break;
                          case "img":
                            u.src && (n.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var f = c.memoizedState;
                          if (null !== f) {
                            var d = f.dehydrated;
                            null !== d && Bt(d);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(i(163));
                  }
                Ks || (512 & t.flags && il(t));
              } catch (p) {
                Cu(t, t.return, p);
              }
            }
            if (t === e) {
              Js = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (Js = n);
              break;
            }
            Js = t.return;
          }
        }
        function kl(e) {
          for (; null !== Js; ) {
            var t = Js;
            if (t === e) {
              Js = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (Js = n);
              break;
            }
            Js = t.return;
          }
        }
        function Sl(e) {
          for (; null !== Js; ) {
            var t = Js;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    al(4, t);
                  } catch (l) {
                    Cu(t, n, l);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" === typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (l) {
                      Cu(t, a, l);
                    }
                  }
                  var i = t.return;
                  try {
                    il(t);
                  } catch (l) {
                    Cu(t, i, l);
                  }
                  break;
                case 5:
                  var o = t.return;
                  try {
                    il(t);
                  } catch (l) {
                    Cu(t, o, l);
                  }
              }
            } catch (l) {
              Cu(t, t.return, l);
            }
            if (t === e) {
              Js = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Js = s);
              break;
            }
            Js = t.return;
          }
        }
        var El,
          Cl = Math.ceil,
          Pl = w.ReactCurrentDispatcher,
          Tl = w.ReactCurrentOwner,
          jl = w.ReactCurrentBatchConfig,
          _l = 0,
          Nl = null,
          Ol = null,
          Ll = 0,
          Al = 0,
          Ml = Ea(0),
          Rl = 0,
          Dl = null,
          Vl = 0,
          Il = 0,
          Fl = 0,
          zl = null,
          Ul = null,
          Bl = 0,
          Wl = 1 / 0,
          Hl = null,
          $l = !1,
          Ql = null,
          Yl = null,
          ql = !1,
          Gl = null,
          Xl = 0,
          Kl = 0,
          Zl = null,
          Jl = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & _l) ? Ke() : -1 !== Jl ? Jl : (Jl = Ke());
        }
        function nu(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & _l) && 0 !== Ll
            ? Ll & -Ll
            : null !== vi.transition
            ? (0 === eu && (eu = vt()), eu)
            : 0 !== (e = bt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Xt(e.type));
        }
        function ru(e, t, n, r) {
          if (50 < Kl) throw ((Kl = 0), (Zl = null), Error(i(185)));
          yt(e, n, r),
            (0 !== (2 & _l) && e === Nl) ||
              (e === Nl && (0 === (2 & _l) && (Il |= n), 4 === Rl && lu(e, Ll)),
              au(e, r),
              1 === n &&
                0 === _l &&
                0 === (1 & t.mode) &&
                ((Wl = Ke() + 500), Fa && Ba()));
        }
        function au(e, t) {
          var n = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                i = e.pendingLanes;
              0 < i;

            ) {
              var o = 31 - ot(i),
                s = 1 << o,
                l = a[o];
              -1 === l
                ? (0 !== (s & n) && 0 === (s & r)) || (a[o] = pt(s, t))
                : l <= t && (e.expiredLanes |= s),
                (i &= ~s);
            }
          })(e, t);
          var r = dt(e, e === Nl ? Ll : 0);
          if (0 === r)
            null !== n && qe(n),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = r & -r), e.callbackPriority !== t)) {
            if ((null != n && qe(n), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Fa = !0), Ua(e);
                  })(uu.bind(null, e))
                : Ua(uu.bind(null, e)),
                oa(function () {
                  0 === (6 & _l) && Ba();
                }),
                (n = null);
            else {
              switch (wt(r)) {
                case 1:
                  n = Je;
                  break;
                case 4:
                  n = et;
                  break;
                case 16:
                default:
                  n = tt;
                  break;
                case 536870912:
                  n = rt;
              }
              n = Nu(n, iu.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = n);
          }
        }
        function iu(e, t) {
          if (((Jl = -1), (eu = 0), 0 !== (6 & _l))) throw Error(i(327));
          var n = e.callbackNode;
          if (Su() && e.callbackNode !== n) return null;
          var r = dt(e, e === Nl ? Ll : 0);
          if (0 === r) return null;
          if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = yu(e, r);
          else {
            t = r;
            var a = _l;
            _l |= 2;
            var o = vu();
            for (
              (Nl === e && Ll === t) ||
              ((Hl = null), (Wl = Ke() + 500), pu(e, t));
              ;

            )
              try {
                bu();
                break;
              } catch (l) {
                hu(e, l);
              }
            xi(),
              (Pl.current = o),
              (_l = a),
              null !== Ol ? (t = 0) : ((Nl = null), (Ll = 0), (t = Rl));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = ht(e)) && ((r = a), (t = ou(e, a))),
              1 === t)
            )
              throw ((n = Dl), pu(e, 0), lu(e, r), au(e, Ke()), n);
            if (6 === t) lu(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 === (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              i = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!sr(i(), a)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = yu(e, r)) &&
                    0 !== (o = ht(e)) &&
                    ((r = o), (t = ou(e, o))),
                  1 === t))
              )
                throw ((n = Dl), pu(e, 0), lu(e, r), au(e, Ke()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 2:
                case 5:
                  ku(e, Ul, Hl);
                  break;
                case 3:
                  if (
                    (lu(e, r),
                    (130023424 & r) === r && 10 < (t = Bl + 500 - Ke()))
                  ) {
                    if (0 !== dt(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = ra(ku.bind(null, e, Ul, Hl), t);
                    break;
                  }
                  ku(e, Ul, Hl);
                  break;
                case 4:
                  if ((lu(e, r), (4194240 & r) === r)) break;
                  for (t = e.eventTimes, a = -1; 0 < r; ) {
                    var s = 31 - ot(r);
                    (o = 1 << s), (s = t[s]) > a && (a = s), (r &= ~o);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = Ke() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * Cl(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = ra(ku.bind(null, e, Ul, Hl), r);
                    break;
                  }
                  ku(e, Ul, Hl);
                  break;
                default:
                  throw Error(i(329));
              }
            }
          }
          return au(e, Ke()), e.callbackNode === n ? iu.bind(null, e) : null;
        }
        function ou(e, t) {
          var n = zl;
          return (
            e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
            2 !== (e = yu(e, t)) && ((t = Ul), (Ul = n), null !== t && su(t)),
            e
          );
        }
        function su(e) {
          null === Ul ? (Ul = e) : Ul.push.apply(Ul, e);
        }
        function lu(e, t) {
          for (
            t &= ~Fl,
              t &= ~Il,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - ot(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function uu(e) {
          if (0 !== (6 & _l)) throw Error(i(327));
          Su();
          var t = dt(e, 0);
          if (0 === (1 & t)) return au(e, Ke()), null;
          var n = yu(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = ht(e);
            0 !== r && ((t = r), (n = ou(e, r)));
          }
          if (1 === n) throw ((n = Dl), pu(e, 0), lu(e, t), au(e, Ke()), n);
          if (6 === n) throw Error(i(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ku(e, Ul, Hl),
            au(e, Ke()),
            null
          );
        }
        function cu(e, t) {
          var n = _l;
          _l |= 1;
          try {
            return e(t);
          } finally {
            0 === (_l = n) && ((Wl = Ke() + 500), Fa && Ba());
          }
        }
        function fu(e) {
          null !== Gl && 0 === Gl.tag && 0 === (6 & _l) && Su();
          var t = _l;
          _l |= 1;
          var n = jl.transition,
            r = bt;
          try {
            if (((jl.transition = null), (bt = 1), e)) return e();
          } finally {
            (bt = r), (jl.transition = n), 0 === (6 & (_l = t)) && Ba();
          }
        }
        function du() {
          (Al = Ml.current), Ca(Ml);
        }
        function pu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((-1 !== n && ((e.timeoutHandle = -1), aa(n)), null !== Ol))
            for (n = Ol.return; null !== n; ) {
              var r = n;
              switch ((ti(r), r.tag)) {
                case 1:
                  null !== (r = r.type.childContextTypes) &&
                    void 0 !== r &&
                    Aa();
                  break;
                case 3:
                  ao(), Ca(_a), Ca(ja), co();
                  break;
                case 5:
                  oo(r);
                  break;
                case 4:
                  ao();
                  break;
                case 13:
                case 19:
                  Ca(so);
                  break;
                case 10:
                  ki(r.type._context);
                  break;
                case 22:
                case 23:
                  du();
              }
              n = n.return;
            }
          if (
            ((Nl = e),
            (Ol = e = Mu(e.current, null)),
            (Ll = Al = t),
            (Rl = 0),
            (Dl = null),
            (Fl = Il = Vl = 0),
            (Ul = zl = null),
            null !== Pi)
          ) {
            for (t = 0; t < Pi.length; t++)
              if (null !== (r = (n = Pi[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  i = n.pending;
                if (null !== i) {
                  var o = i.next;
                  (i.next = a), (r.next = o);
                }
                n.pending = r;
              }
            Pi = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var n = Ol;
            try {
              if ((xi(), (fo.current = os), go)) {
                for (var r = vo.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                go = !1;
              }
              if (
                ((ho = 0),
                (yo = mo = vo = null),
                (bo = !1),
                (wo = 0),
                (Tl.current = null),
                null === n || null === n.return)
              ) {
                (Rl = 1), (Dl = t), (Ol = null);
                break;
              }
              e: {
                var o = e,
                  s = n.return,
                  l = n,
                  u = t;
                if (
                  ((t = Ll),
                  (l.flags |= 32768),
                  null !== u &&
                    "object" === typeof u &&
                    "function" === typeof u.then)
                ) {
                  var c = u,
                    f = l,
                    d = f.tag;
                  if (0 === (1 & f.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = f.alternate;
                    p
                      ? ((f.updateQueue = p.updateQueue),
                        (f.memoizedState = p.memoizedState),
                        (f.lanes = p.lanes))
                      : ((f.updateQueue = null), (f.memoizedState = null));
                  }
                  var h = ys(s);
                  if (null !== h) {
                    (h.flags &= -257),
                      gs(h, s, l, 0, t),
                      1 & h.mode && ms(o, c, t),
                      (u = c);
                    var v = (t = h).updateQueue;
                    if (null === v) {
                      var m = new Set();
                      m.add(u), (t.updateQueue = m);
                    } else v.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ms(o, c, t), mu();
                    break e;
                  }
                  u = Error(i(426));
                } else if (ai && 1 & l.mode) {
                  var y = ys(s);
                  if (null !== y) {
                    0 === (65536 & y.flags) && (y.flags |= 256),
                      gs(y, s, l, 0, t),
                      hi(cs(u, l));
                    break e;
                  }
                }
                (o = u = cs(u, l)),
                  4 !== Rl && (Rl = 2),
                  null === zl ? (zl = [o]) : zl.push(o),
                  (o = s);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536),
                        (t &= -t),
                        (o.lanes |= t),
                        Di(o, hs(0, u, t));
                      break e;
                    case 1:
                      l = u;
                      var g = o.type,
                        b = o.stateNode;
                      if (
                        0 === (128 & o.flags) &&
                        ("function" === typeof g.getDerivedStateFromError ||
                          (null !== b &&
                            "function" === typeof b.componentDidCatch &&
                            (null === Yl || !Yl.has(b))))
                      ) {
                        (o.flags |= 65536),
                          (t &= -t),
                          (o.lanes |= t),
                          Di(o, vs(o, l, t));
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              xu(n);
            } catch (w) {
              (t = w), Ol === n && null !== n && (Ol = n = n.return);
              continue;
            }
            break;
          }
        }
        function vu() {
          var e = Pl.current;
          return (Pl.current = os), null === e ? os : e;
        }
        function mu() {
          (0 !== Rl && 3 !== Rl && 2 !== Rl) || (Rl = 4),
            null === Nl ||
              (0 === (268435455 & Vl) && 0 === (268435455 & Il)) ||
              lu(Nl, Ll);
        }
        function yu(e, t) {
          var n = _l;
          _l |= 2;
          var r = vu();
          for ((Nl === e && Ll === t) || ((Hl = null), pu(e, t)); ; )
            try {
              gu();
              break;
            } catch (a) {
              hu(e, a);
            }
          if ((xi(), (_l = n), (Pl.current = r), null !== Ol))
            throw Error(i(261));
          return (Nl = null), (Ll = 0), Rl;
        }
        function gu() {
          for (; null !== Ol; ) wu(Ol);
        }
        function bu() {
          for (; null !== Ol && !Ge(); ) wu(Ol);
        }
        function wu(e) {
          var t = El(e.alternate, e, Al);
          (e.memoizedProps = e.pendingProps),
            null === t ? xu(e) : (Ol = t),
            (Tl.current = null);
        }
        function xu(e) {
          var t = e;
          do {
            var n = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (n = qs(n, t, Al))) return void (Ol = n);
            } else {
              if (null !== (n = Gs(n, t)))
                return (n.flags &= 32767), void (Ol = n);
              if (null === e) return (Rl = 6), void (Ol = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Ol = t);
            Ol = t = e;
          } while (null !== t);
          0 === Rl && (Rl = 5);
        }
        function ku(e, t, n) {
          var r = bt,
            a = jl.transition;
          try {
            (jl.transition = null),
              (bt = 1),
              (function (e, t, n, r) {
                do {
                  Su();
                } while (null !== Gl);
                if (0 !== (6 & _l)) throw Error(i(327));
                n = e.finishedWork;
                var a = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(i(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var o = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var n = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var r = e.eventTimes;
                    for (e = e.expirationTimes; 0 < n; ) {
                      var a = 31 - ot(n),
                        i = 1 << a;
                      (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
                    }
                  })(e, o),
                  e === Nl && ((Ol = Nl = null), (Ll = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    ql ||
                    ((ql = !0),
                    Nu(tt, function () {
                      return Su(), null;
                    })),
                  (o = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || o)
                ) {
                  (o = jl.transition), (jl.transition = null);
                  var s = bt;
                  bt = 1;
                  var l = _l;
                  (_l |= 4),
                    (Tl.current = null),
                    (function (e, t) {
                      if (((ea = Ht), pr((e = dr())))) {
                        if ("selectionStart" in e)
                          var n = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var r =
                              (n =
                                ((n = e.ownerDocument) && n.defaultView) ||
                                window).getSelection && n.getSelection();
                            if (r && 0 !== r.rangeCount) {
                              n = r.anchorNode;
                              var a = r.anchorOffset,
                                o = r.focusNode;
                              r = r.focusOffset;
                              try {
                                n.nodeType, o.nodeType;
                              } catch (x) {
                                n = null;
                                break e;
                              }
                              var s = 0,
                                l = -1,
                                u = -1,
                                c = 0,
                                f = 0,
                                d = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  d !== n ||
                                    (0 !== a && 3 !== d.nodeType) ||
                                    (l = s + a),
                                    d !== o ||
                                      (0 !== r && 3 !== d.nodeType) ||
                                      (u = s + r),
                                    3 === d.nodeType &&
                                      (s += d.nodeValue.length),
                                    null !== (h = d.firstChild);

                                )
                                  (p = d), (d = h);
                                for (;;) {
                                  if (d === e) break t;
                                  if (
                                    (p === n && ++c === a && (l = s),
                                    p === o && ++f === r && (u = s),
                                    null !== (h = d.nextSibling))
                                  )
                                    break;
                                  p = (d = p).parentNode;
                                }
                                d = h;
                              }
                              n =
                                -1 === l || -1 === u
                                  ? null
                                  : { start: l, end: u };
                            } else n = null;
                          }
                        n = n || { start: 0, end: 0 };
                      } else n = null;
                      for (
                        ta = { focusedElem: e, selectionRange: n },
                          Ht = !1,
                          Js = t;
                        null !== Js;

                      )
                        if (
                          ((e = (t = Js).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Js = e);
                        else
                          for (; null !== Js; ) {
                            t = Js;
                            try {
                              var v = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== v) {
                                      var m = v.memoizedProps,
                                        y = v.memoizedState,
                                        g = t.stateNode,
                                        b = g.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? m
                                            : mi(t.type, m),
                                          y
                                        );
                                      g.__reactInternalSnapshotBeforeUpdate = b;
                                    }
                                    break;
                                  case 3:
                                    var w = t.stateNode.containerInfo;
                                    1 === w.nodeType
                                      ? (w.textContent = "")
                                      : 9 === w.nodeType &&
                                        w.documentElement &&
                                        w.removeChild(w.documentElement);
                                    break;
                                  default:
                                    throw Error(i(163));
                                }
                            } catch (x) {
                              Cu(t, t.return, x);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Js = e);
                              break;
                            }
                            Js = t.return;
                          }
                      (v = nl), (nl = !1);
                    })(e, n),
                    yl(n, e),
                    hr(ta),
                    (Ht = !!ea),
                    (ta = ea = null),
                    (e.current = n),
                    bl(n, e, a),
                    Xe(),
                    (_l = l),
                    (bt = s),
                    (jl.transition = o);
                } else e.current = n;
                if (
                  (ql && ((ql = !1), (Gl = e), (Xl = a)),
                  (o = e.pendingLanes),
                  0 === o && (Yl = null),
                  (function (e) {
                    if (it && "function" === typeof it.onCommitFiberRoot)
                      try {
                        it.onCommitFiberRoot(
                          at,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  au(e, Ke()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    (a = t[n]),
                      r(a.value, { componentStack: a.stack, digest: a.digest });
                if ($l) throw (($l = !1), (e = Ql), (Ql = null), e);
                0 !== (1 & Xl) && 0 !== e.tag && Su(),
                  (o = e.pendingLanes),
                  0 !== (1 & o)
                    ? e === Zl
                      ? Kl++
                      : ((Kl = 0), (Zl = e))
                    : (Kl = 0),
                  Ba();
              })(e, t, n, r);
          } finally {
            (jl.transition = a), (bt = r);
          }
          return null;
        }
        function Su() {
          if (null !== Gl) {
            var e = wt(Xl),
              t = jl.transition,
              n = bt;
            try {
              if (((jl.transition = null), (bt = 16 > e ? 16 : e), null === Gl))
                var r = !1;
              else {
                if (((e = Gl), (Gl = null), (Xl = 0), 0 !== (6 & _l)))
                  throw Error(i(331));
                var a = _l;
                for (_l |= 4, Js = e.current; null !== Js; ) {
                  var o = Js,
                    s = o.child;
                  if (0 !== (16 & Js.flags)) {
                    var l = o.deletions;
                    if (null !== l) {
                      for (var u = 0; u < l.length; u++) {
                        var c = l[u];
                        for (Js = c; null !== Js; ) {
                          var f = Js;
                          switch (f.tag) {
                            case 0:
                            case 11:
                            case 15:
                              rl(8, f, o);
                          }
                          var d = f.child;
                          if (null !== d) (d.return = f), (Js = d);
                          else
                            for (; null !== Js; ) {
                              var p = (f = Js).sibling,
                                h = f.return;
                              if ((ol(f), f === c)) {
                                Js = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Js = p);
                                break;
                              }
                              Js = h;
                            }
                        }
                      }
                      var v = o.alternate;
                      if (null !== v) {
                        var m = v.child;
                        if (null !== m) {
                          v.child = null;
                          do {
                            var y = m.sibling;
                            (m.sibling = null), (m = y);
                          } while (null !== m);
                        }
                      }
                      Js = o;
                    }
                  }
                  if (0 !== (2064 & o.subtreeFlags) && null !== s)
                    (s.return = o), (Js = s);
                  else
                    e: for (; null !== Js; ) {
                      if (0 !== (2048 & (o = Js).flags))
                        switch (o.tag) {
                          case 0:
                          case 11:
                          case 15:
                            rl(9, o, o.return);
                        }
                      var g = o.sibling;
                      if (null !== g) {
                        (g.return = o.return), (Js = g);
                        break e;
                      }
                      Js = o.return;
                    }
                }
                var b = e.current;
                for (Js = b; null !== Js; ) {
                  var w = (s = Js).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== w)
                    (w.return = s), (Js = w);
                  else
                    e: for (s = b; null !== Js; ) {
                      if (0 !== (2048 & (l = Js).flags))
                        try {
                          switch (l.tag) {
                            case 0:
                            case 11:
                            case 15:
                              al(9, l);
                          }
                        } catch (k) {
                          Cu(l, l.return, k);
                        }
                      if (l === s) {
                        Js = null;
                        break e;
                      }
                      var x = l.sibling;
                      if (null !== x) {
                        (x.return = l.return), (Js = x);
                        break e;
                      }
                      Js = l.return;
                    }
                }
                if (
                  ((_l = a),
                  Ba(),
                  it && "function" === typeof it.onPostCommitFiberRoot)
                )
                  try {
                    it.onPostCommitFiberRoot(at, e);
                  } catch (k) {}
                r = !0;
              }
              return r;
            } finally {
              (bt = n), (jl.transition = t);
            }
          }
          return !1;
        }
        function Eu(e, t, n) {
          (e = Mi(e, (t = hs(0, (t = cs(n, t)), 1)), 1)),
            (t = tu()),
            null !== e && (yt(e, 1, t), au(e, t));
        }
        function Cu(e, t, n) {
          if (3 === e.tag) Eu(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Eu(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof r.componentDidCatch &&
                    (null === Yl || !Yl.has(r)))
                ) {
                  (t = Mi(t, (e = vs(t, (e = cs(n, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (yt(t, 1, e), au(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Pu(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & n),
            Nl === e &&
              (Ll & n) === n &&
              (4 === Rl ||
              (3 === Rl && (130023424 & Ll) === Ll && 500 > Ke() - Bl)
                ? pu(e, 0)
                : (Fl |= n)),
            au(e, t);
        }
        function Tu(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var n = tu();
          null !== (e = _i(e, t)) && (yt(e, t, n), au(e, n));
        }
        function ju(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), Tu(e, n);
        }
        function _u(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(i(314));
          }
          null !== r && r.delete(t), Tu(e, n);
        }
        function Nu(e, t) {
          return Ye(e, t);
        }
        function Ou(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Lu(e, t, n, r) {
          return new Ou(e, t, n, r);
        }
        function Au(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Mu(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Lu(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function Ru(e, t, n, r, a, o) {
          var s = 2;
          if (((r = e), "function" === typeof e)) Au(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case S:
                return Du(n.children, a, o, t);
              case E:
                (s = 8), (a |= 8);
                break;
              case C:
                return (
                  ((e = Lu(12, n, t, 2 | a)).elementType = C), (e.lanes = o), e
                );
              case _:
                return (
                  ((e = Lu(13, n, t, a)).elementType = _), (e.lanes = o), e
                );
              case N:
                return (
                  ((e = Lu(19, n, t, a)).elementType = N), (e.lanes = o), e
                );
              case A:
                return Vu(n, a, o, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case P:
                      s = 10;
                      break e;
                    case T:
                      s = 9;
                      break e;
                    case j:
                      s = 11;
                      break e;
                    case O:
                      s = 14;
                      break e;
                    case L:
                      (s = 16), (r = null);
                      break e;
                  }
                throw Error(i(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = Lu(s, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = o),
            t
          );
        }
        function Du(e, t, n, r) {
          return ((e = Lu(7, e, r, t)).lanes = n), e;
        }
        function Vu(e, t, n, r) {
          return (
            ((e = Lu(22, e, r, t)).elementType = A),
            (e.lanes = n),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Iu(e, t, n) {
          return ((e = Lu(6, e, null, t)).lanes = n), e;
        }
        function Fu(e, t, n) {
          return (
            ((t = Lu(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function zu(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Uu(e, t, n, r, a, i, o, s, l) {
          return (
            (e = new zu(e, t, n, s, l)),
            1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
            (i = Lu(3, null, null, t)),
            (e.current = i),
            (i.stateNode = e),
            (i.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            Oi(i),
            e
          );
        }
        function Bu(e) {
          if (!e) return Ta;
          e: {
            if (Be((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(i(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (La(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(i(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (La(n)) return Ra(e, n, t);
          }
          return t;
        }
        function Wu(e, t, n, r, a, i, o, s, l) {
          return (
            ((e = Uu(n, r, !0, e, 0, i, 0, s, l)).context = Bu(null)),
            (n = e.current),
            ((i = Ai((r = tu()), (a = nu(n)))).callback =
              void 0 !== t && null !== t ? t : null),
            Mi(n, i, a),
            (e.current.lanes = a),
            yt(e, a, r),
            au(e, r),
            e
          );
        }
        function Hu(e, t, n, r) {
          var a = t.current,
            i = tu(),
            o = nu(a);
          return (
            (n = Bu(n)),
            null === t.context ? (t.context = n) : (t.pendingContext = n),
            ((t = Ai(i, o)).payload = { element: e }),
            null !== (r = void 0 === r ? null : r) && (t.callback = r),
            null !== (e = Mi(a, t, o)) && (ru(e, a, o, i), Ri(e, a, o)),
            o
          );
        }
        function $u(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function Yu(e, t) {
          Qu(e, t), (e = e.alternate) && Qu(e, t);
        }
        El = function (e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || _a.current) ws = !0;
            else {
              if (0 === (e.lanes & n) && 0 === (128 & t.flags))
                return (
                  (ws = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        Ns(t), pi();
                        break;
                      case 5:
                        io(t);
                        break;
                      case 1:
                        La(t.type) && Da(t);
                        break;
                      case 4:
                        ro(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var r = t.type._context,
                          a = t.memoizedProps.value;
                        Pa(yi, r._currentValue), (r._currentValue = a);
                        break;
                      case 13:
                        if (null !== (r = t.memoizedState))
                          return null !== r.dehydrated
                            ? (Pa(so, 1 & so.current), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                            ? Is(e, t, n)
                            : (Pa(so, 1 & so.current),
                              null !== (e = $s(e, t, n)) ? e.sibling : null);
                        Pa(so, 1 & so.current);
                        break;
                      case 19:
                        if (
                          ((r = 0 !== (n & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (r) return Ws(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (a = t.memoizedState) &&
                            ((a.rendering = null),
                            (a.tail = null),
                            (a.lastEffect = null)),
                          Pa(so, so.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cs(e, t, n);
                    }
                    return $s(e, t, n);
                  })(e, t, n)
                );
              ws = 0 !== (131072 & e.flags);
            }
          else (ws = !1), ai && 0 !== (1048576 & t.flags) && Ja(t, Qa, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var r = t.type;
              Hs(e, t), (e = t.pendingProps);
              var a = Oa(t, ja.current);
              Ei(t, n), (a = Eo(null, t, r, e, a, n));
              var o = Co();
              return (
                (t.flags |= 1),
                "object" === typeof a &&
                null !== a &&
                "function" === typeof a.render &&
                void 0 === a.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    La(r) ? ((o = !0), Da(t)) : (o = !1),
                    (t.memoizedState =
                      null !== a.state && void 0 !== a.state ? a.state : null),
                    Oi(t),
                    (a.updater = Ui),
                    (t.stateNode = a),
                    (a._reactInternals = t),
                    $i(t, r, e, n),
                    (t = _s(null, t, r, !0, o, n)))
                  : ((t.tag = 0),
                    ai && o && ei(t),
                    xs(null, t, a, n),
                    (t = t.child)),
                t
              );
            case 16:
              r = t.elementType;
              e: {
                switch (
                  (Hs(e, t),
                  (e = t.pendingProps),
                  (r = (a = r._init)(r._payload)),
                  (t.type = r),
                  (a = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return Au(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === j) return 11;
                        if (e === O) return 14;
                      }
                      return 2;
                    })(r)),
                  (e = mi(r, e)),
                  a)
                ) {
                  case 0:
                    t = Ts(null, t, r, e, n);
                    break e;
                  case 1:
                    t = js(null, t, r, e, n);
                    break e;
                  case 11:
                    t = ks(null, t, r, e, n);
                    break e;
                  case 14:
                    t = Ss(null, t, r, mi(r.type, e), n);
                    break e;
                }
                throw Error(i(306, r, ""));
              }
              return t;
            case 0:
              return (
                (r = t.type),
                (a = t.pendingProps),
                Ts(e, t, r, (a = t.elementType === r ? a : mi(r, a)), n)
              );
            case 1:
              return (
                (r = t.type),
                (a = t.pendingProps),
                js(e, t, r, (a = t.elementType === r ? a : mi(r, a)), n)
              );
            case 3:
              e: {
                if ((Ns(t), null === e)) throw Error(i(387));
                (r = t.pendingProps),
                  (a = (o = t.memoizedState).element),
                  Li(e, t),
                  Vi(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), o.isDehydrated)) {
                  if (
                    ((o = {
                      element: r,
                      isDehydrated: !1,
                      cache: s.cache,
                      pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = o),
                    (t.memoizedState = o),
                    256 & t.flags)
                  ) {
                    t = Os(e, t, r, n, (a = cs(Error(i(423)), t)));
                    break e;
                  }
                  if (r !== a) {
                    t = Os(e, t, r, n, (a = cs(Error(i(424)), t)));
                    break e;
                  }
                  for (
                    ri = ua(t.stateNode.containerInfo.firstChild),
                      ni = t,
                      ai = !0,
                      ii = null,
                      n = Ki(t, null, r, n),
                      t.child = n;
                    n;

                  )
                    (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                } else {
                  if ((pi(), r === a)) {
                    t = $s(e, t, n);
                    break e;
                  }
                  xs(e, t, r, n);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                io(t),
                null === e && ui(t),
                (r = t.type),
                (a = t.pendingProps),
                (o = null !== e ? e.memoizedProps : null),
                (s = a.children),
                na(r, a)
                  ? (s = null)
                  : null !== o && na(r, o) && (t.flags |= 32),
                Ps(e, t),
                xs(e, t, s, n),
                t.child
              );
            case 6:
              return null === e && ui(t), null;
            case 13:
              return Is(e, t, n);
            case 4:
              return (
                ro(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                null === e ? (t.child = Xi(t, null, r, n)) : xs(e, t, r, n),
                t.child
              );
            case 11:
              return (
                (r = t.type),
                (a = t.pendingProps),
                ks(e, t, r, (a = t.elementType === r ? a : mi(r, a)), n)
              );
            case 7:
              return xs(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
              return xs(e, t, t.pendingProps.children, n), t.child;
            case 10:
              e: {
                if (
                  ((r = t.type._context),
                  (a = t.pendingProps),
                  (o = t.memoizedProps),
                  (s = a.value),
                  Pa(yi, r._currentValue),
                  (r._currentValue = s),
                  null !== o)
                )
                  if (sr(o.value, s)) {
                    if (o.children === a.children && !_a.current) {
                      t = $s(e, t, n);
                      break e;
                    }
                  } else
                    for (
                      null !== (o = t.child) && (o.return = t);
                      null !== o;

                    ) {
                      var l = o.dependencies;
                      if (null !== l) {
                        s = o.child;
                        for (var u = l.firstContext; null !== u; ) {
                          if (u.context === r) {
                            if (1 === o.tag) {
                              (u = Ai(-1, n & -n)).tag = 2;
                              var c = o.updateQueue;
                              if (null !== c) {
                                var f = (c = c.shared).pending;
                                null === f
                                  ? (u.next = u)
                                  : ((u.next = f.next), (f.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (o.lanes |= n),
                              null !== (u = o.alternate) && (u.lanes |= n),
                              Si(o.return, n, t),
                              (l.lanes |= n);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === o.tag)
                        s = o.type === t.type ? null : o.child;
                      else if (18 === o.tag) {
                        if (null === (s = o.return)) throw Error(i(341));
                        (s.lanes |= n),
                          null !== (l = s.alternate) && (l.lanes |= n),
                          Si(s, n, t),
                          (s = o.sibling);
                      } else s = o.child;
                      if (null !== s) s.return = o;
                      else
                        for (s = o; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (o = s.sibling)) {
                            (o.return = s.return), (s = o);
                            break;
                          }
                          s = s.return;
                        }
                      o = s;
                    }
                xs(e, t, a.children, n), (t = t.child);
              }
              return t;
            case 9:
              return (
                (a = t.type),
                (r = t.pendingProps.children),
                Ei(t, n),
                (r = r((a = Ci(a)))),
                (t.flags |= 1),
                xs(e, t, r, n),
                t.child
              );
            case 14:
              return (
                (a = mi((r = t.type), t.pendingProps)),
                Ss(e, t, r, (a = mi(r.type, a)), n)
              );
            case 15:
              return Es(e, t, t.type, t.pendingProps, n);
            case 17:
              return (
                (r = t.type),
                (a = t.pendingProps),
                (a = t.elementType === r ? a : mi(r, a)),
                Hs(e, t),
                (t.tag = 1),
                La(r) ? ((e = !0), Da(t)) : (e = !1),
                Ei(t, n),
                Wi(t, r, a),
                $i(t, r, a, n),
                _s(null, t, r, !0, e, n)
              );
            case 19:
              return Ws(e, t, n);
            case 22:
              return Cs(e, t, n);
          }
          throw Error(i(156, t.tag));
        };
        var qu =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Gu(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          this._internalRoot = e;
        }
        function Ku(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Zu(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Ju() {}
        function ec(e, t, n, r, a) {
          var i = n._reactRootContainer;
          if (i) {
            var o = i;
            if ("function" === typeof a) {
              var s = a;
              a = function () {
                var e = $u(o);
                s.call(e);
              };
            }
            Hu(t, o, e, a);
          } else
            o = (function (e, t, n, r, a) {
              if (a) {
                if ("function" === typeof r) {
                  var i = r;
                  r = function () {
                    var e = $u(o);
                    i.call(e);
                  };
                }
                var o = Wu(t, r, e, 0, null, !1, 0, "", Ju);
                return (
                  (e._reactRootContainer = o),
                  (e[ha] = o.current),
                  Br(8 === e.nodeType ? e.parentNode : e),
                  fu(),
                  o
                );
              }
              for (; (a = e.lastChild); ) e.removeChild(a);
              if ("function" === typeof r) {
                var s = r;
                r = function () {
                  var e = $u(l);
                  s.call(e);
                };
              }
              var l = Uu(e, 0, !1, null, 0, !1, 0, "", Ju);
              return (
                (e._reactRootContainer = l),
                (e[ha] = l.current),
                Br(8 === e.nodeType ? e.parentNode : e),
                fu(function () {
                  Hu(t, l, n, r);
                }),
                l
              );
            })(n, t, e, a, r);
          return $u(o);
        }
        (Xu.prototype.render = Gu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(i(409));
            Hu(e, t, null, null);
          }),
          (Xu.prototype.unmount = Gu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                fu(function () {
                  Hu(null, e, null, null);
                }),
                  (t[ha] = null);
              }
            }),
          (Xu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = Et();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < At.length && 0 !== t && t < At[n].priority;
                n++
              );
              At.splice(n, 0, e), 0 === n && Vt(e);
            }
          }),
          (xt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = ft(t.pendingLanes);
                  0 !== n &&
                    (gt(t, 1 | n),
                    au(t, Ke()),
                    0 === (6 & _l) && ((Wl = Ke() + 500), Ba()));
                }
                break;
              case 13:
                fu(function () {
                  var t = _i(e, 1);
                  if (null !== t) {
                    var n = tu();
                    ru(t, e, 1, n);
                  }
                }),
                  Yu(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = _i(e, 134217728);
              if (null !== t) ru(t, e, 134217728, tu());
              Yu(e, 134217728);
            }
          }),
          (St = function (e) {
            if (13 === e.tag) {
              var t = nu(e),
                n = _i(e, t);
              if (null !== n) ru(n, e, t, tu());
              Yu(e, t);
            }
          }),
          (Et = function () {
            return bt;
          }),
          (Ct = function (e, t) {
            var n = bt;
            try {
              return (bt = e), t();
            } finally {
              bt = n;
            }
          }),
          (ke = function (e, t, n) {
            switch (t) {
              case "input":
                if ((Z(e, n), (t = n.name), "radio" === n.type && null != t)) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                      var a = xa(r);
                      if (!a) throw Error(i(90));
                      Y(r), Z(r, a);
                    }
                  }
                }
                break;
              case "textarea":
                ie(e, n);
                break;
              case "select":
                null != (t = n.value) && ne(e, !!n.multiple, t, !1);
            }
          }),
          (je = cu),
          (_e = fu);
        var tc = {
            usingClientEntryPoint: !1,
            Events: [ba, wa, xa, Pe, Te, cu],
          },
          nc = {
            findFiberByHostInstance: ga,
            bundleType: 0,
            version: "18.2.0",
            rendererPackageName: "react-dom",
          },
          rc = {
            bundleType: nc.bundleType,
            version: nc.version,
            rendererPackageName: nc.rendererPackageName,
            rendererConfig: nc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: w.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              nc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!ac.isDisabled && ac.supportsFiber)
            try {
              (at = ac.inject(rc)), (it = ac);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!Ku(t)) throw Error(i(200));
            return (function (e, t, n) {
              var r =
                3 < arguments.length && void 0 !== arguments[3]
                  ? arguments[3]
                  : null;
              return {
                $$typeof: k,
                key: null == r ? null : "" + r,
                children: e,
                containerInfo: t,
                implementation: n,
              };
            })(e, t, null, n);
          }),
          (t.createRoot = function (e, t) {
            if (!Ku(e)) throw Error(i(299));
            var n = !1,
              r = "",
              a = qu;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (a = t.onRecoverableError)),
              (t = Uu(e, 1, !1, null, 0, n, 0, r, a)),
              (e[ha] = t.current),
              Br(8 === e.nodeType ? e.parentNode : e),
              new Gu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(i(188));
              throw ((e = Object.keys(e).join(",")), Error(i(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return fu(e);
          }),
          (t.hydrate = function (e, t, n) {
            if (!Zu(t)) throw Error(i(200));
            return ec(null, e, t, !0, n);
          }),
          (t.hydrateRoot = function (e, t, n) {
            if (!Ku(e)) throw Error(i(405));
            var r = (null != n && n.hydratedSources) || null,
              a = !1,
              o = "",
              s = qu;
            if (
              (null !== n &&
                void 0 !== n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (o = n.identifierPrefix),
                void 0 !== n.onRecoverableError && (s = n.onRecoverableError)),
              (t = Wu(t, null, e, 1, null != n ? n : null, a, 0, o, s)),
              (e[ha] = t.current),
              Br(e),
              r)
            )
              for (e = 0; e < r.length; e++)
                (a = (a = (n = r[e])._getVersion)(n._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [n, a])
                    : t.mutableSourceEagerHydrationData.push(n, a);
            return new Xu(t);
          }),
          (t.render = function (e, t, n) {
            if (!Zu(t)) throw Error(i(200));
            return ec(null, e, t, !1, n);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Zu(e)) throw Error(i(40));
            return (
              !!e._reactRootContainer &&
              (fu(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[ha] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
            if (!Zu(n)) throw Error(i(200));
            if (null == e || void 0 === e._reactInternals) throw Error(i(38));
            return ec(e, t, n, !1, r);
          }),
          (t.version = "18.2.0-next-9e3b772b8-20220608");
      },
      250: function (e, t, n) {
        "use strict";
        var r = n(164);
        (t.createRoot = r.createRoot), (t.hydrateRoot = r.hydrateRoot);
      },
      164: function (e, t, n) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = n(463));
      },
      374: function (e, t, n) {
        "use strict";
        var r = n(791),
          a = Symbol.for("react.element"),
          i = Symbol.for("react.fragment"),
          o = Object.prototype.hasOwnProperty,
          s =
            r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          l = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, n) {
          var r,
            i = {},
            u = null,
            c = null;
          for (r in (void 0 !== n && (u = "" + n),
          void 0 !== t.key && (u = "" + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            o.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
          if (e && e.defaultProps)
            for (r in (t = e.defaultProps)) void 0 === i[r] && (i[r] = t[r]);
          return {
            $$typeof: a,
            type: e,
            key: u,
            ref: c,
            props: i,
            _owner: s.current,
          };
        }
        (t.Fragment = i), (t.jsx = u), (t.jsxs = u);
      },
      117: function (e, t) {
        "use strict";
        var n = Symbol.for("react.element"),
          r = Symbol.for("react.portal"),
          a = Symbol.for("react.fragment"),
          i = Symbol.for("react.strict_mode"),
          o = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          l = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          v = Object.assign,
          m = {};
        function y(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        function g() {}
        function b(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = m),
            (this.updater = n || h);
        }
        (y.prototype.isReactComponent = {}),
          (y.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (y.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (g.prototype = y.prototype);
        var w = (b.prototype = new g());
        (w.constructor = b), v(w, y.prototype), (w.isPureReactComponent = !0);
        var x = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          S = { current: null },
          E = { key: !0, ref: !0, __self: !0, __source: !0 };
        function C(e, t, r) {
          var a,
            i = {},
            o = null,
            s = null;
          if (null != t)
            for (a in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (o = "" + t.key),
            t))
              k.call(t, a) && !E.hasOwnProperty(a) && (i[a] = t[a]);
          var l = arguments.length - 2;
          if (1 === l) i.children = r;
          else if (1 < l) {
            for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
            i.children = u;
          }
          if (e && e.defaultProps)
            for (a in (l = e.defaultProps)) void 0 === i[a] && (i[a] = l[a]);
          return {
            $$typeof: n,
            type: e,
            key: o,
            ref: s,
            props: i,
            _owner: S.current,
          };
        }
        function P(e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }
        var T = /\/+/g;
        function j(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function _(e, t, a, i, o) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var l = !1;
          if (null === e) l = !0;
          else
            switch (s) {
              case "string":
              case "number":
                l = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case n:
                  case r:
                    l = !0;
                }
            }
          if (l)
            return (
              (o = o((l = e))),
              (e = "" === i ? "." + j(l, 0) : i),
              x(o)
                ? ((a = ""),
                  null != e && (a = e.replace(T, "$&/") + "/"),
                  _(o, t, a, "", function (e) {
                    return e;
                  }))
                : null != o &&
                  (P(o) &&
                    (o = (function (e, t) {
                      return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      o,
                      a +
                        (!o.key || (l && l.key === o.key)
                          ? ""
                          : ("" + o.key).replace(T, "$&/") + "/") +
                        e
                    )),
                  t.push(o)),
              1
            );
          if (((l = 0), (i = "" === i ? "." : i + ":"), x(e)))
            for (var u = 0; u < e.length; u++) {
              var c = i + j((s = e[u]), u);
              l += _(s, t, a, c, o);
            }
          else if (
            ((c = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof c)
          )
            for (e = c.call(e), u = 0; !(s = e.next()).done; )
              l += _((s = s.value), t, a, (c = i + j(s, u++)), o);
          else if ("object" === s)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return l;
        }
        function N(e, t, n) {
          if (null == e) return e;
          var r = [],
            a = 0;
          return (
            _(e, r, "", "", function (e) {
              return t.call(n, e, a++);
            }),
            r
          );
        }
        function O(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var L = { current: null },
          A = { transition: null },
          M = {
            ReactCurrentDispatcher: L,
            ReactCurrentBatchConfig: A,
            ReactCurrentOwner: S,
          };
        (t.Children = {
          map: N,
          forEach: function (e, t, n) {
            N(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              N(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              N(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!P(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = y),
          (t.Fragment = a),
          (t.Profiler = o),
          (t.PureComponent = b),
          (t.StrictMode = i),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
          (t.cloneElement = function (e, t, r) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var a = v({}, e.props),
              i = e.key,
              o = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((o = t.ref), (s = S.current)),
                void 0 !== t.key && (i = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var l = e.type.defaultProps;
              for (u in t)
                k.call(t, u) &&
                  !E.hasOwnProperty(u) &&
                  (a[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) a.children = r;
            else if (1 < u) {
              l = Array(u);
              for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
              a.children = l;
            }
            return {
              $$typeof: n,
              type: e.type,
              key: i,
              ref: o,
              props: a,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: l,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = C),
          (t.createFactory = function (e) {
            var t = C.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = P),
          (t.lazy = function (e) {
            return {
              $$typeof: d,
              _payload: { _status: -1, _result: e },
              _init: O,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: f, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = A.transition;
            A.transition = {};
            try {
              e();
            } finally {
              A.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return L.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return L.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return L.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return L.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return L.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return L.current.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return L.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return L.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return L.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, n) {
            return L.current.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return L.current.useRef(e);
          }),
          (t.useState = function (e) {
            return L.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return L.current.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return L.current.useTransition();
          }),
          (t.version = "18.2.0");
      },
      791: function (e, t, n) {
        "use strict";
        e.exports = n(117);
      },
      184: function (e, t, n) {
        "use strict";
        e.exports = n(374);
      },
      813: function (e, t) {
        "use strict";
        function n(e, t) {
          var n = e.length;
          e.push(t);
          e: for (; 0 < n; ) {
            var r = (n - 1) >>> 1,
              a = e[r];
            if (!(0 < i(a, t))) break e;
            (e[r] = t), (e[n] = a), (n = r);
          }
        }
        function r(e) {
          return 0 === e.length ? null : e[0];
        }
        function a(e) {
          if (0 === e.length) return null;
          var t = e[0],
            n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length, o = a >>> 1; r < o; ) {
              var s = 2 * (r + 1) - 1,
                l = e[s],
                u = s + 1,
                c = e[u];
              if (0 > i(l, n))
                u < a && 0 > i(c, l)
                  ? ((e[r] = c), (e[u] = n), (r = u))
                  : ((e[r] = l), (e[s] = n), (r = s));
              else {
                if (!(u < a && 0 > i(c, n))) break e;
                (e[r] = c), (e[u] = n), (r = u);
              }
            }
          }
          return t;
        }
        function i(e, t) {
          var n = e.sortIndex - t.sortIndex;
          return 0 !== n ? n : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var o = performance;
          t.unstable_now = function () {
            return o.now();
          };
        } else {
          var s = Date,
            l = s.now();
          t.unstable_now = function () {
            return s.now() - l;
          };
        }
        var u = [],
          c = [],
          f = 1,
          d = null,
          p = 3,
          h = !1,
          v = !1,
          m = !1,
          y = "function" === typeof setTimeout ? setTimeout : null,
          g = "function" === typeof clearTimeout ? clearTimeout : null,
          b = "undefined" !== typeof setImmediate ? setImmediate : null;
        function w(e) {
          for (var t = r(c); null !== t; ) {
            if (null === t.callback) a(c);
            else {
              if (!(t.startTime <= e)) break;
              a(c), (t.sortIndex = t.expirationTime), n(u, t);
            }
            t = r(c);
          }
        }
        function x(e) {
          if (((m = !1), w(e), !v))
            if (null !== r(u)) (v = !0), A(k);
            else {
              var t = r(c);
              null !== t && M(x, t.startTime - e);
            }
        }
        function k(e, n) {
          (v = !1), m && ((m = !1), g(P), (P = -1)), (h = !0);
          var i = p;
          try {
            for (
              w(n), d = r(u);
              null !== d && (!(d.expirationTime > n) || (e && !_()));

            ) {
              var o = d.callback;
              if ("function" === typeof o) {
                (d.callback = null), (p = d.priorityLevel);
                var s = o(d.expirationTime <= n);
                (n = t.unstable_now()),
                  "function" === typeof s
                    ? (d.callback = s)
                    : d === r(u) && a(u),
                  w(n);
              } else a(u);
              d = r(u);
            }
            if (null !== d) var l = !0;
            else {
              var f = r(c);
              null !== f && M(x, f.startTime - n), (l = !1);
            }
            return l;
          } finally {
            (d = null), (p = i), (h = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var S,
          E = !1,
          C = null,
          P = -1,
          T = 5,
          j = -1;
        function _() {
          return !(t.unstable_now() - j < T);
        }
        function N() {
          if (null !== C) {
            var e = t.unstable_now();
            j = e;
            var n = !0;
            try {
              n = C(!0, e);
            } finally {
              n ? S() : ((E = !1), (C = null));
            }
          } else E = !1;
        }
        if ("function" === typeof b)
          S = function () {
            b(N);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var O = new MessageChannel(),
            L = O.port2;
          (O.port1.onmessage = N),
            (S = function () {
              L.postMessage(null);
            });
        } else
          S = function () {
            y(N, 0);
          };
        function A(e) {
          (C = e), E || ((E = !0), S());
        }
        function M(e, n) {
          P = y(function () {
            e(t.unstable_now());
          }, n);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            v || h || ((v = !0), A(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (T = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return r(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var n = p;
            p = t;
            try {
              return e();
            } finally {
              p = n;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var n = p;
            p = e;
            try {
              return t();
            } finally {
              p = n;
            }
          }),
          (t.unstable_scheduleCallback = function (e, a, i) {
            var o = t.unstable_now();
            switch (
              ("object" === typeof i && null !== i
                ? (i = "number" === typeof (i = i.delay) && 0 < i ? o + i : o)
                : (i = o),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: f++,
                callback: a,
                priorityLevel: e,
                startTime: i,
                expirationTime: (s = i + s),
                sortIndex: -1,
              }),
              i > o
                ? ((e.sortIndex = i),
                  n(c, e),
                  null === r(u) &&
                    e === r(c) &&
                    (m ? (g(P), (P = -1)) : (m = !0), M(x, i - o)))
                : ((e.sortIndex = s), n(u, e), v || h || ((v = !0), A(k))),
              e
            );
          }),
          (t.unstable_shouldYield = _),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var n = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = n;
              }
            };
          });
      },
      296: function (e, t, n) {
        "use strict";
        e.exports = n(813);
      },
      165: function (e, t, n) {
        var r;
        "undefined" != typeof self && self,
          (e.exports =
            ((r = n(791)),
            (function () {
              var e = {
                  7403: function (e, t, n) {
                    "use strict";
                    n.d(t, {
                      default: function () {
                        return P;
                      },
                    });
                    var r = n(4087),
                      a = n.n(r),
                      i = function (e) {
                        return new RegExp(/<[a-z][\s\S]*>/i).test(e);
                      },
                      o = function (e) {
                        var t = document.createElement("div");
                        return (t.innerHTML = e), t.childNodes;
                      },
                      s = function (e, t) {
                        return Math.floor(Math.random() * (t - e + 1)) + e;
                      },
                      l = "TYPE_CHARACTER",
                      u = "REMOVE_CHARACTER",
                      c = "REMOVE_ALL",
                      f = "REMOVE_LAST_VISIBLE_NODE",
                      d = "PAUSE_FOR",
                      p = "CALL_FUNCTION",
                      h = "ADD_HTML_TAG_ELEMENT",
                      v = "CHANGE_DELETE_SPEED",
                      m = "CHANGE_DELAY",
                      y = "CHANGE_CURSOR",
                      g = "PASTE_STRING",
                      b = "HTML_TAG";
                    function w(e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t &&
                          (r = r.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(
                              e,
                              t
                            ).enumerable;
                          })),
                          n.push.apply(n, r);
                      }
                      return n;
                    }
                    function x(e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? w(Object(n), !0).forEach(function (t) {
                              C(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(
                              e,
                              Object.getOwnPropertyDescriptors(n)
                            )
                          : w(Object(n)).forEach(function (t) {
                              Object.defineProperty(
                                e,
                                t,
                                Object.getOwnPropertyDescriptor(n, t)
                              );
                            });
                      }
                      return e;
                    }
                    function k(e) {
                      return (
                        (function (e) {
                          if (Array.isArray(e)) return S(e);
                        })(e) ||
                        (function (e) {
                          if (
                            ("undefined" != typeof Symbol &&
                              null != e[Symbol.iterator]) ||
                            null != e["@@iterator"]
                          )
                            return Array.from(e);
                        })(e) ||
                        (function (e, t) {
                          if (e) {
                            if ("string" == typeof e) return S(e, t);
                            var n = Object.prototype.toString
                              .call(e)
                              .slice(8, -1);
                            return (
                              "Object" === n &&
                                e.constructor &&
                                (n = e.constructor.name),
                              "Map" === n || "Set" === n
                                ? Array.from(e)
                                : "Arguments" === n ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    n
                                  )
                                ? S(e, t)
                                : void 0
                            );
                          }
                        })(e) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })()
                      );
                    }
                    function S(e, t) {
                      (null == t || t > e.length) && (t = e.length);
                      for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                      return r;
                    }
                    function E(e, t) {
                      for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1),
                          (r.configurable = !0),
                          "value" in r && (r.writable = !0),
                          Object.defineProperty(e, r.key, r);
                      }
                    }
                    function C(e, t, n) {
                      return (
                        t in e
                          ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                            })
                          : (e[t] = n),
                        e
                      );
                    }
                    var P = (function () {
                      function e(t, n) {
                        var w = this;
                        if (
                          ((function (e, t) {
                            if (!(e instanceof t))
                              throw new TypeError(
                                "Cannot call a class as a function"
                              );
                          })(this, e),
                          C(this, "state", {
                            cursorAnimation: null,
                            lastFrameTime: null,
                            pauseUntil: null,
                            eventQueue: [],
                            eventLoop: null,
                            eventLoopPaused: !1,
                            reverseCalledEvents: [],
                            calledEvents: [],
                            visibleNodes: [],
                            initialOptions: null,
                            elements: {
                              container: null,
                              wrapper: document.createElement("span"),
                              cursor: document.createElement("span"),
                            },
                          }),
                          C(this, "options", {
                            strings: null,
                            cursor: "|",
                            delay: "natural",
                            pauseFor: 1500,
                            deleteSpeed: "natural",
                            loop: !1,
                            autoStart: !1,
                            devMode: !1,
                            skipAddStyles: !1,
                            wrapperClassName: "Typewriter__wrapper",
                            cursorClassName: "Typewriter__cursor",
                            stringSplitter: null,
                            onCreateTextNode: null,
                            onRemoveNode: null,
                          }),
                          C(this, "setupWrapperElement", function () {
                            w.state.elements.container &&
                              ((w.state.elements.wrapper.className =
                                w.options.wrapperClassName),
                              (w.state.elements.cursor.className =
                                w.options.cursorClassName),
                              (w.state.elements.cursor.innerHTML =
                                w.options.cursor),
                              (w.state.elements.container.innerHTML = ""),
                              w.state.elements.container.appendChild(
                                w.state.elements.wrapper
                              ),
                              w.state.elements.container.appendChild(
                                w.state.elements.cursor
                              ));
                          }),
                          C(this, "start", function () {
                            return (
                              (w.state.eventLoopPaused = !1),
                              w.runEventLoop(),
                              w
                            );
                          }),
                          C(this, "pause", function () {
                            return (w.state.eventLoopPaused = !0), w;
                          }),
                          C(this, "stop", function () {
                            return (
                              w.state.eventLoop &&
                                ((0, r.cancel)(w.state.eventLoop),
                                (w.state.eventLoop = null)),
                              w
                            );
                          }),
                          C(this, "pauseFor", function (e) {
                            return w.addEventToQueue(d, { ms: e }), w;
                          }),
                          C(this, "typeOutAllStrings", function () {
                            return "string" == typeof w.options.strings
                              ? (w
                                  .typeString(w.options.strings)
                                  .pauseFor(w.options.pauseFor),
                                w)
                              : (w.options.strings.forEach(function (e) {
                                  w.typeString(e)
                                    .pauseFor(w.options.pauseFor)
                                    .deleteAll(w.options.deleteSpeed);
                                }),
                                w);
                          }),
                          C(this, "typeString", function (e) {
                            var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : null;
                            if (i(e)) return w.typeOutHTMLString(e, t);
                            if (e) {
                              var n = (w.options || {}).stringSplitter,
                                r = "function" == typeof n ? n(e) : e.split("");
                              w.typeCharacters(r, t);
                            }
                            return w;
                          }),
                          C(this, "pasteString", function (e) {
                            var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : null;
                            return i(e)
                              ? w.typeOutHTMLString(e, t, !0)
                              : (e &&
                                  w.addEventToQueue(g, {
                                    character: e,
                                    node: t,
                                  }),
                                w);
                          }),
                          C(this, "typeOutHTMLString", function (e) {
                            var t =
                                arguments.length > 1 && void 0 !== arguments[1]
                                  ? arguments[1]
                                  : null,
                              n = arguments.length > 2 ? arguments[2] : void 0,
                              r = o(e);
                            if (r.length > 0)
                              for (var a = 0; a < r.length; a++) {
                                var i = r[a],
                                  s = i.innerHTML;
                                i && 3 !== i.nodeType
                                  ? ((i.innerHTML = ""),
                                    w.addEventToQueue(h, {
                                      node: i,
                                      parentNode: t,
                                    }),
                                    n
                                      ? w.pasteString(s, i)
                                      : w.typeString(s, i))
                                  : i.textContent &&
                                    (n
                                      ? w.pasteString(i.textContent, t)
                                      : w.typeString(i.textContent, t));
                              }
                            return w;
                          }),
                          C(this, "deleteAll", function () {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : "natural";
                            return w.addEventToQueue(c, { speed: e }), w;
                          }),
                          C(this, "changeDeleteSpeed", function (e) {
                            if (!e)
                              throw new Error("Must provide new delete speed");
                            return w.addEventToQueue(v, { speed: e }), w;
                          }),
                          C(this, "changeDelay", function (e) {
                            if (!e) throw new Error("Must provide new delay");
                            return w.addEventToQueue(m, { delay: e }), w;
                          }),
                          C(this, "changeCursor", function (e) {
                            if (!e) throw new Error("Must provide new cursor");
                            return w.addEventToQueue(y, { cursor: e }), w;
                          }),
                          C(this, "deleteChars", function (e) {
                            if (!e)
                              throw new Error(
                                "Must provide amount of characters to delete"
                              );
                            for (var t = 0; t < e; t++) w.addEventToQueue(u);
                            return w;
                          }),
                          C(this, "callFunction", function (e, t) {
                            if (!e || "function" != typeof e)
                              throw new Error("Callbak must be a function");
                            return (
                              w.addEventToQueue(p, { cb: e, thisArg: t }), w
                            );
                          }),
                          C(this, "typeCharacters", function (e) {
                            var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : null;
                            if (!e || !Array.isArray(e))
                              throw new Error("Characters must be an array");
                            return (
                              e.forEach(function (e) {
                                w.addEventToQueue(l, { character: e, node: t });
                              }),
                              w
                            );
                          }),
                          C(this, "removeCharacters", function (e) {
                            if (!e || !Array.isArray(e))
                              throw new Error("Characters must be an array");
                            return (
                              e.forEach(function () {
                                w.addEventToQueue(u);
                              }),
                              w
                            );
                          }),
                          C(this, "addEventToQueue", function (e, t) {
                            var n =
                              arguments.length > 2 &&
                              void 0 !== arguments[2] &&
                              arguments[2];
                            return w.addEventToStateProperty(
                              e,
                              t,
                              n,
                              "eventQueue"
                            );
                          }),
                          C(this, "addReverseCalledEvent", function (e, t) {
                            var n =
                              arguments.length > 2 &&
                              void 0 !== arguments[2] &&
                              arguments[2];
                            return w.options.loop
                              ? w.addEventToStateProperty(
                                  e,
                                  t,
                                  n,
                                  "reverseCalledEvents"
                                )
                              : w;
                          }),
                          C(this, "addEventToStateProperty", function (e, t) {
                            var n =
                                arguments.length > 2 &&
                                void 0 !== arguments[2] &&
                                arguments[2],
                              r = arguments.length > 3 ? arguments[3] : void 0,
                              a = { eventName: e, eventArgs: t || {} };
                            return (
                              (w.state[r] = n
                                ? [a].concat(k(w.state[r]))
                                : [].concat(k(w.state[r]), [a])),
                              w
                            );
                          }),
                          C(this, "runEventLoop", function () {
                            w.state.lastFrameTime ||
                              (w.state.lastFrameTime = Date.now());
                            var e = Date.now(),
                              t = e - w.state.lastFrameTime;
                            if (!w.state.eventQueue.length) {
                              if (!w.options.loop) return;
                              (w.state.eventQueue = k(w.state.calledEvents)),
                                (w.state.calledEvents = []),
                                (w.options = x({}, w.state.initialOptions));
                            }
                            if (
                              ((w.state.eventLoop = a()(w.runEventLoop)),
                              !w.state.eventLoopPaused)
                            ) {
                              if (w.state.pauseUntil) {
                                if (e < w.state.pauseUntil) return;
                                w.state.pauseUntil = null;
                              }
                              var n,
                                r = k(w.state.eventQueue),
                                i = r.shift();
                              if (
                                !(
                                  t <=
                                  (n =
                                    i.eventName === f || i.eventName === u
                                      ? "natural" === w.options.deleteSpeed
                                        ? s(40, 80)
                                        : w.options.deleteSpeed
                                      : "natural" === w.options.delay
                                      ? s(120, 160)
                                      : w.options.delay)
                                )
                              ) {
                                var o = i.eventName,
                                  S = i.eventArgs;
                                switch (
                                  (w.logInDevMode({
                                    currentEvent: i,
                                    state: w.state,
                                    delay: n,
                                  }),
                                  o)
                                ) {
                                  case g:
                                  case l:
                                    var E = S.character,
                                      C = S.node,
                                      P = document.createTextNode(E),
                                      T = P;
                                    w.options.onCreateTextNode &&
                                      "function" ==
                                        typeof w.options.onCreateTextNode &&
                                      (T = w.options.onCreateTextNode(E, P)),
                                      T &&
                                        (C
                                          ? C.appendChild(T)
                                          : w.state.elements.wrapper.appendChild(
                                              T
                                            )),
                                      (w.state.visibleNodes = [].concat(
                                        k(w.state.visibleNodes),
                                        [
                                          {
                                            type: "TEXT_NODE",
                                            character: E,
                                            node: T,
                                          },
                                        ]
                                      ));
                                    break;
                                  case u:
                                    r.unshift({
                                      eventName: f,
                                      eventArgs: { removingCharacterNode: !0 },
                                    });
                                    break;
                                  case d:
                                    var j = i.eventArgs.ms;
                                    w.state.pauseUntil =
                                      Date.now() + parseInt(j);
                                    break;
                                  case p:
                                    var _ = i.eventArgs,
                                      N = _.cb,
                                      O = _.thisArg;
                                    N.call(O, { elements: w.state.elements });
                                    break;
                                  case h:
                                    var L = i.eventArgs,
                                      A = L.node,
                                      M = L.parentNode;
                                    M
                                      ? M.appendChild(A)
                                      : w.state.elements.wrapper.appendChild(A),
                                      (w.state.visibleNodes = [].concat(
                                        k(w.state.visibleNodes),
                                        [
                                          {
                                            type: b,
                                            node: A,
                                            parentNode:
                                              M || w.state.elements.wrapper,
                                          },
                                        ]
                                      ));
                                    break;
                                  case c:
                                    var R = w.state.visibleNodes,
                                      D = S.speed,
                                      V = [];
                                    D &&
                                      V.push({
                                        eventName: v,
                                        eventArgs: { speed: D, temp: !0 },
                                      });
                                    for (var I = 0, F = R.length; I < F; I++)
                                      V.push({
                                        eventName: f,
                                        eventArgs: {
                                          removingCharacterNode: !1,
                                        },
                                      });
                                    D &&
                                      V.push({
                                        eventName: v,
                                        eventArgs: {
                                          speed: w.options.deleteSpeed,
                                          temp: !0,
                                        },
                                      }),
                                      r.unshift.apply(r, V);
                                    break;
                                  case f:
                                    var z = i.eventArgs.removingCharacterNode;
                                    if (w.state.visibleNodes.length) {
                                      var U = w.state.visibleNodes.pop(),
                                        B = U.type,
                                        W = U.node,
                                        H = U.character;
                                      w.options.onRemoveNode &&
                                        "function" ==
                                          typeof w.options.onRemoveNode &&
                                        w.options.onRemoveNode({
                                          node: W,
                                          character: H,
                                        }),
                                        W && W.parentNode.removeChild(W),
                                        B === b &&
                                          z &&
                                          r.unshift({
                                            eventName: f,
                                            eventArgs: {},
                                          });
                                    }
                                    break;
                                  case v:
                                    w.options.deleteSpeed = i.eventArgs.speed;
                                    break;
                                  case m:
                                    w.options.delay = i.eventArgs.delay;
                                    break;
                                  case y:
                                    (w.options.cursor = i.eventArgs.cursor),
                                      (w.state.elements.cursor.innerHTML =
                                        i.eventArgs.cursor);
                                }
                                w.options.loop &&
                                  (i.eventName === f ||
                                    (i.eventArgs && i.eventArgs.temp) ||
                                    (w.state.calledEvents = [].concat(
                                      k(w.state.calledEvents),
                                      [i]
                                    ))),
                                  (w.state.eventQueue = r),
                                  (w.state.lastFrameTime = e);
                              }
                            }
                          }),
                          t)
                        )
                          if ("string" == typeof t) {
                            var S = document.querySelector(t);
                            if (!S)
                              throw new Error(
                                "Could not find container element"
                              );
                            this.state.elements.container = S;
                          } else this.state.elements.container = t;
                        n && (this.options = x(x({}, this.options), n)),
                          (this.state.initialOptions = x({}, this.options)),
                          this.init();
                      }
                      var t, n;
                      return (
                        (t = e),
                        (n = [
                          {
                            key: "init",
                            value: function () {
                              var e, t;
                              this.setupWrapperElement(),
                                this.addEventToQueue(
                                  y,
                                  { cursor: this.options.cursor },
                                  !0
                                ),
                                this.addEventToQueue(c, null, !0),
                                !window ||
                                  window.___TYPEWRITER_JS_STYLES_ADDED___ ||
                                  this.options.skipAddStyles ||
                                  ((e =
                                    ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}"),
                                  (t =
                                    document.createElement(
                                      "style"
                                    )).appendChild(document.createTextNode(e)),
                                  document.head.appendChild(t),
                                  (window.___TYPEWRITER_JS_STYLES_ADDED___ =
                                    !0)),
                                !0 === this.options.autoStart &&
                                  this.options.strings &&
                                  this.typeOutAllStrings().start();
                            },
                          },
                          {
                            key: "logInDevMode",
                            value: function (e) {
                              this.options.devMode && console.log(e);
                            },
                          },
                        ]) && E(t.prototype, n),
                        Object.defineProperty(t, "prototype", { writable: !1 }),
                        e
                      );
                    })();
                  },
                  8552: function (e, t, n) {
                    var r = n(852)(n(5639), "DataView");
                    e.exports = r;
                  },
                  1989: function (e, t, n) {
                    var r = n(1789),
                      a = n(401),
                      i = n(7667),
                      o = n(1327),
                      s = n(1866);
                    function l(e) {
                      var t = -1,
                        n = null == e ? 0 : e.length;
                      for (this.clear(); ++t < n; ) {
                        var r = e[t];
                        this.set(r[0], r[1]);
                      }
                    }
                    (l.prototype.clear = r),
                      (l.prototype.delete = a),
                      (l.prototype.get = i),
                      (l.prototype.has = o),
                      (l.prototype.set = s),
                      (e.exports = l);
                  },
                  8407: function (e, t, n) {
                    var r = n(7040),
                      a = n(4125),
                      i = n(2117),
                      o = n(7518),
                      s = n(4705);
                    function l(e) {
                      var t = -1,
                        n = null == e ? 0 : e.length;
                      for (this.clear(); ++t < n; ) {
                        var r = e[t];
                        this.set(r[0], r[1]);
                      }
                    }
                    (l.prototype.clear = r),
                      (l.prototype.delete = a),
                      (l.prototype.get = i),
                      (l.prototype.has = o),
                      (l.prototype.set = s),
                      (e.exports = l);
                  },
                  7071: function (e, t, n) {
                    var r = n(852)(n(5639), "Map");
                    e.exports = r;
                  },
                  3369: function (e, t, n) {
                    var r = n(4785),
                      a = n(1285),
                      i = n(6e3),
                      o = n(9916),
                      s = n(5265);
                    function l(e) {
                      var t = -1,
                        n = null == e ? 0 : e.length;
                      for (this.clear(); ++t < n; ) {
                        var r = e[t];
                        this.set(r[0], r[1]);
                      }
                    }
                    (l.prototype.clear = r),
                      (l.prototype.delete = a),
                      (l.prototype.get = i),
                      (l.prototype.has = o),
                      (l.prototype.set = s),
                      (e.exports = l);
                  },
                  3818: function (e, t, n) {
                    var r = n(852)(n(5639), "Promise");
                    e.exports = r;
                  },
                  8525: function (e, t, n) {
                    var r = n(852)(n(5639), "Set");
                    e.exports = r;
                  },
                  8668: function (e, t, n) {
                    var r = n(3369),
                      a = n(619),
                      i = n(2385);
                    function o(e) {
                      var t = -1,
                        n = null == e ? 0 : e.length;
                      for (this.__data__ = new r(); ++t < n; ) this.add(e[t]);
                    }
                    (o.prototype.add = o.prototype.push = a),
                      (o.prototype.has = i),
                      (e.exports = o);
                  },
                  6384: function (e, t, n) {
                    var r = n(8407),
                      a = n(7465),
                      i = n(3779),
                      o = n(7599),
                      s = n(4758),
                      l = n(4309);
                    function u(e) {
                      var t = (this.__data__ = new r(e));
                      this.size = t.size;
                    }
                    (u.prototype.clear = a),
                      (u.prototype.delete = i),
                      (u.prototype.get = o),
                      (u.prototype.has = s),
                      (u.prototype.set = l),
                      (e.exports = u);
                  },
                  2705: function (e, t, n) {
                    var r = n(5639).Symbol;
                    e.exports = r;
                  },
                  1149: function (e, t, n) {
                    var r = n(5639).Uint8Array;
                    e.exports = r;
                  },
                  577: function (e, t, n) {
                    var r = n(852)(n(5639), "WeakMap");
                    e.exports = r;
                  },
                  4963: function (e) {
                    e.exports = function (e, t) {
                      for (
                        var n = -1, r = null == e ? 0 : e.length, a = 0, i = [];
                        ++n < r;

                      ) {
                        var o = e[n];
                        t(o, n, e) && (i[a++] = o);
                      }
                      return i;
                    };
                  },
                  4636: function (e, t, n) {
                    var r = n(2545),
                      a = n(5694),
                      i = n(1469),
                      o = n(4144),
                      s = n(5776),
                      l = n(6719),
                      u = Object.prototype.hasOwnProperty;
                    e.exports = function (e, t) {
                      var n = i(e),
                        c = !n && a(e),
                        f = !n && !c && o(e),
                        d = !n && !c && !f && l(e),
                        p = n || c || f || d,
                        h = p ? r(e.length, String) : [],
                        v = h.length;
                      for (var m in e)
                        (!t && !u.call(e, m)) ||
                          (p &&
                            ("length" == m ||
                              (f && ("offset" == m || "parent" == m)) ||
                              (d &&
                                ("buffer" == m ||
                                  "byteLength" == m ||
                                  "byteOffset" == m)) ||
                              s(m, v))) ||
                          h.push(m);
                      return h;
                    };
                  },
                  2488: function (e) {
                    e.exports = function (e, t) {
                      for (var n = -1, r = t.length, a = e.length; ++n < r; )
                        e[a + n] = t[n];
                      return e;
                    };
                  },
                  2908: function (e) {
                    e.exports = function (e, t) {
                      for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
                        if (t(e[n], n, e)) return !0;
                      return !1;
                    };
                  },
                  8470: function (e, t, n) {
                    var r = n(7813);
                    e.exports = function (e, t) {
                      for (var n = e.length; n--; ) if (r(e[n][0], t)) return n;
                      return -1;
                    };
                  },
                  8866: function (e, t, n) {
                    var r = n(2488),
                      a = n(1469);
                    e.exports = function (e, t, n) {
                      var i = t(e);
                      return a(e) ? i : r(i, n(e));
                    };
                  },
                  4239: function (e, t, n) {
                    var r = n(2705),
                      a = n(9607),
                      i = n(2333),
                      o = r ? r.toStringTag : void 0;
                    e.exports = function (e) {
                      return null == e
                        ? void 0 === e
                          ? "[object Undefined]"
                          : "[object Null]"
                        : o && o in Object(e)
                        ? a(e)
                        : i(e);
                    };
                  },
                  9454: function (e, t, n) {
                    var r = n(4239),
                      a = n(7005);
                    e.exports = function (e) {
                      return a(e) && "[object Arguments]" == r(e);
                    };
                  },
                  939: function (e, t, n) {
                    var r = n(2492),
                      a = n(7005);
                    e.exports = function e(t, n, i, o, s) {
                      return (
                        t === n ||
                        (null == t || null == n || (!a(t) && !a(n))
                          ? t != t && n != n
                          : r(t, n, i, o, e, s))
                      );
                    };
                  },
                  2492: function (e, t, n) {
                    var r = n(6384),
                      a = n(7114),
                      i = n(8351),
                      o = n(6096),
                      s = n(4160),
                      l = n(1469),
                      u = n(4144),
                      c = n(6719),
                      f = "[object Arguments]",
                      d = "[object Array]",
                      p = "[object Object]",
                      h = Object.prototype.hasOwnProperty;
                    e.exports = function (e, t, n, v, m, y) {
                      var g = l(e),
                        b = l(t),
                        w = g ? d : s(e),
                        x = b ? d : s(t),
                        k = (w = w == f ? p : w) == p,
                        S = (x = x == f ? p : x) == p,
                        E = w == x;
                      if (E && u(e)) {
                        if (!u(t)) return !1;
                        (g = !0), (k = !1);
                      }
                      if (E && !k)
                        return (
                          y || (y = new r()),
                          g || c(e)
                            ? a(e, t, n, v, m, y)
                            : i(e, t, w, n, v, m, y)
                        );
                      if (!(1 & n)) {
                        var C = k && h.call(e, "__wrapped__"),
                          P = S && h.call(t, "__wrapped__");
                        if (C || P) {
                          var T = C ? e.value() : e,
                            j = P ? t.value() : t;
                          return y || (y = new r()), m(T, j, n, v, y);
                        }
                      }
                      return !!E && (y || (y = new r()), o(e, t, n, v, m, y));
                    };
                  },
                  8458: function (e, t, n) {
                    var r = n(3560),
                      a = n(5346),
                      i = n(3218),
                      o = n(346),
                      s = /^\[object .+?Constructor\]$/,
                      l = Function.prototype,
                      u = Object.prototype,
                      c = l.toString,
                      f = u.hasOwnProperty,
                      d = RegExp(
                        "^" +
                          c
                            .call(f)
                            .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                            .replace(
                              /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                              "$1.*?"
                            ) +
                          "$"
                      );
                    e.exports = function (e) {
                      return !(!i(e) || a(e)) && (r(e) ? d : s).test(o(e));
                    };
                  },
                  8749: function (e, t, n) {
                    var r = n(4239),
                      a = n(1780),
                      i = n(7005),
                      o = {};
                    (o["[object Float32Array]"] =
                      o["[object Float64Array]"] =
                      o["[object Int8Array]"] =
                      o["[object Int16Array]"] =
                      o["[object Int32Array]"] =
                      o["[object Uint8Array]"] =
                      o["[object Uint8ClampedArray]"] =
                      o["[object Uint16Array]"] =
                      o["[object Uint32Array]"] =
                        !0),
                      (o["[object Arguments]"] =
                        o["[object Array]"] =
                        o["[object ArrayBuffer]"] =
                        o["[object Boolean]"] =
                        o["[object DataView]"] =
                        o["[object Date]"] =
                        o["[object Error]"] =
                        o["[object Function]"] =
                        o["[object Map]"] =
                        o["[object Number]"] =
                        o["[object Object]"] =
                        o["[object RegExp]"] =
                        o["[object Set]"] =
                        o["[object String]"] =
                        o["[object WeakMap]"] =
                          !1),
                      (e.exports = function (e) {
                        return i(e) && a(e.length) && !!o[r(e)];
                      });
                  },
                  280: function (e, t, n) {
                    var r = n(5726),
                      a = n(6916),
                      i = Object.prototype.hasOwnProperty;
                    e.exports = function (e) {
                      if (!r(e)) return a(e);
                      var t = [];
                      for (var n in Object(e))
                        i.call(e, n) && "constructor" != n && t.push(n);
                      return t;
                    };
                  },
                  2545: function (e) {
                    e.exports = function (e, t) {
                      for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                      return r;
                    };
                  },
                  1717: function (e) {
                    e.exports = function (e) {
                      return function (t) {
                        return e(t);
                      };
                    };
                  },
                  4757: function (e) {
                    e.exports = function (e, t) {
                      return e.has(t);
                    };
                  },
                  4429: function (e, t, n) {
                    var r = n(5639)["__core-js_shared__"];
                    e.exports = r;
                  },
                  7114: function (e, t, n) {
                    var r = n(8668),
                      a = n(2908),
                      i = n(4757);
                    e.exports = function (e, t, n, o, s, l) {
                      var u = 1 & n,
                        c = e.length,
                        f = t.length;
                      if (c != f && !(u && f > c)) return !1;
                      var d = l.get(e),
                        p = l.get(t);
                      if (d && p) return d == t && p == e;
                      var h = -1,
                        v = !0,
                        m = 2 & n ? new r() : void 0;
                      for (l.set(e, t), l.set(t, e); ++h < c; ) {
                        var y = e[h],
                          g = t[h];
                        if (o)
                          var b = u ? o(g, y, h, t, e, l) : o(y, g, h, e, t, l);
                        if (void 0 !== b) {
                          if (b) continue;
                          v = !1;
                          break;
                        }
                        if (m) {
                          if (
                            !a(t, function (e, t) {
                              if (!i(m, t) && (y === e || s(y, e, n, o, l)))
                                return m.push(t);
                            })
                          ) {
                            v = !1;
                            break;
                          }
                        } else if (y !== g && !s(y, g, n, o, l)) {
                          v = !1;
                          break;
                        }
                      }
                      return l.delete(e), l.delete(t), v;
                    };
                  },
                  8351: function (e, t, n) {
                    var r = n(2705),
                      a = n(1149),
                      i = n(7813),
                      o = n(7114),
                      s = n(8776),
                      l = n(1814),
                      u = r ? r.prototype : void 0,
                      c = u ? u.valueOf : void 0;
                    e.exports = function (e, t, n, r, u, f, d) {
                      switch (n) {
                        case "[object DataView]":
                          if (
                            e.byteLength != t.byteLength ||
                            e.byteOffset != t.byteOffset
                          )
                            return !1;
                          (e = e.buffer), (t = t.buffer);
                        case "[object ArrayBuffer]":
                          return !(
                            e.byteLength != t.byteLength ||
                            !f(new a(e), new a(t))
                          );
                        case "[object Boolean]":
                        case "[object Date]":
                        case "[object Number]":
                          return i(+e, +t);
                        case "[object Error]":
                          return e.name == t.name && e.message == t.message;
                        case "[object RegExp]":
                        case "[object String]":
                          return e == t + "";
                        case "[object Map]":
                          var p = s;
                        case "[object Set]":
                          var h = 1 & r;
                          if ((p || (p = l), e.size != t.size && !h)) return !1;
                          var v = d.get(e);
                          if (v) return v == t;
                          (r |= 2), d.set(e, t);
                          var m = o(p(e), p(t), r, u, f, d);
                          return d.delete(e), m;
                        case "[object Symbol]":
                          if (c) return c.call(e) == c.call(t);
                      }
                      return !1;
                    };
                  },
                  6096: function (e, t, n) {
                    var r = n(8234),
                      a = Object.prototype.hasOwnProperty;
                    e.exports = function (e, t, n, i, o, s) {
                      var l = 1 & n,
                        u = r(e),
                        c = u.length;
                      if (c != r(t).length && !l) return !1;
                      for (var f = c; f--; ) {
                        var d = u[f];
                        if (!(l ? d in t : a.call(t, d))) return !1;
                      }
                      var p = s.get(e),
                        h = s.get(t);
                      if (p && h) return p == t && h == e;
                      var v = !0;
                      s.set(e, t), s.set(t, e);
                      for (var m = l; ++f < c; ) {
                        var y = e[(d = u[f])],
                          g = t[d];
                        if (i)
                          var b = l ? i(g, y, d, t, e, s) : i(y, g, d, e, t, s);
                        if (!(void 0 === b ? y === g || o(y, g, n, i, s) : b)) {
                          v = !1;
                          break;
                        }
                        m || (m = "constructor" == d);
                      }
                      if (v && !m) {
                        var w = e.constructor,
                          x = t.constructor;
                        w == x ||
                          !("constructor" in e) ||
                          !("constructor" in t) ||
                          ("function" == typeof w &&
                            w instanceof w &&
                            "function" == typeof x &&
                            x instanceof x) ||
                          (v = !1);
                      }
                      return s.delete(e), s.delete(t), v;
                    };
                  },
                  1957: function (e, t, n) {
                    var r =
                      "object" == typeof n.g &&
                      n.g &&
                      n.g.Object === Object &&
                      n.g;
                    e.exports = r;
                  },
                  8234: function (e, t, n) {
                    var r = n(8866),
                      a = n(9551),
                      i = n(3674);
                    e.exports = function (e) {
                      return r(e, i, a);
                    };
                  },
                  5050: function (e, t, n) {
                    var r = n(7019);
                    e.exports = function (e, t) {
                      var n = e.__data__;
                      return r(t)
                        ? n["string" == typeof t ? "string" : "hash"]
                        : n.map;
                    };
                  },
                  852: function (e, t, n) {
                    var r = n(8458),
                      a = n(7801);
                    e.exports = function (e, t) {
                      var n = a(e, t);
                      return r(n) ? n : void 0;
                    };
                  },
                  9607: function (e, t, n) {
                    var r = n(2705),
                      a = Object.prototype,
                      i = a.hasOwnProperty,
                      o = a.toString,
                      s = r ? r.toStringTag : void 0;
                    e.exports = function (e) {
                      var t = i.call(e, s),
                        n = e[s];
                      try {
                        e[s] = void 0;
                        var r = !0;
                      } catch (e) {}
                      var a = o.call(e);
                      return r && (t ? (e[s] = n) : delete e[s]), a;
                    };
                  },
                  9551: function (e, t, n) {
                    var r = n(4963),
                      a = n(479),
                      i = Object.prototype.propertyIsEnumerable,
                      o = Object.getOwnPropertySymbols,
                      s = o
                        ? function (e) {
                            return null == e
                              ? []
                              : ((e = Object(e)),
                                r(o(e), function (t) {
                                  return i.call(e, t);
                                }));
                          }
                        : a;
                    e.exports = s;
                  },
                  4160: function (e, t, n) {
                    var r = n(8552),
                      a = n(7071),
                      i = n(3818),
                      o = n(8525),
                      s = n(577),
                      l = n(4239),
                      u = n(346),
                      c = "[object Map]",
                      f = "[object Promise]",
                      d = "[object Set]",
                      p = "[object WeakMap]",
                      h = "[object DataView]",
                      v = u(r),
                      m = u(a),
                      y = u(i),
                      g = u(o),
                      b = u(s),
                      w = l;
                    ((r && w(new r(new ArrayBuffer(1))) != h) ||
                      (a && w(new a()) != c) ||
                      (i && w(i.resolve()) != f) ||
                      (o && w(new o()) != d) ||
                      (s && w(new s()) != p)) &&
                      (w = function (e) {
                        var t = l(e),
                          n = "[object Object]" == t ? e.constructor : void 0,
                          r = n ? u(n) : "";
                        if (r)
                          switch (r) {
                            case v:
                              return h;
                            case m:
                              return c;
                            case y:
                              return f;
                            case g:
                              return d;
                            case b:
                              return p;
                          }
                        return t;
                      }),
                      (e.exports = w);
                  },
                  7801: function (e) {
                    e.exports = function (e, t) {
                      return null == e ? void 0 : e[t];
                    };
                  },
                  1789: function (e, t, n) {
                    var r = n(4536);
                    e.exports = function () {
                      (this.__data__ = r ? r(null) : {}), (this.size = 0);
                    };
                  },
                  401: function (e) {
                    e.exports = function (e) {
                      var t = this.has(e) && delete this.__data__[e];
                      return (this.size -= t ? 1 : 0), t;
                    };
                  },
                  7667: function (e, t, n) {
                    var r = n(4536),
                      a = Object.prototype.hasOwnProperty;
                    e.exports = function (e) {
                      var t = this.__data__;
                      if (r) {
                        var n = t[e];
                        return "__lodash_hash_undefined__" === n ? void 0 : n;
                      }
                      return a.call(t, e) ? t[e] : void 0;
                    };
                  },
                  1327: function (e, t, n) {
                    var r = n(4536),
                      a = Object.prototype.hasOwnProperty;
                    e.exports = function (e) {
                      var t = this.__data__;
                      return r ? void 0 !== t[e] : a.call(t, e);
                    };
                  },
                  1866: function (e, t, n) {
                    var r = n(4536);
                    e.exports = function (e, t) {
                      var n = this.__data__;
                      return (
                        (this.size += this.has(e) ? 0 : 1),
                        (n[e] =
                          r && void 0 === t ? "__lodash_hash_undefined__" : t),
                        this
                      );
                    };
                  },
                  5776: function (e) {
                    var t = /^(?:0|[1-9]\d*)$/;
                    e.exports = function (e, n) {
                      var r = typeof e;
                      return (
                        !!(n = null == n ? 9007199254740991 : n) &&
                        ("number" == r || ("symbol" != r && t.test(e))) &&
                        e > -1 &&
                        e % 1 == 0 &&
                        e < n
                      );
                    };
                  },
                  7019: function (e) {
                    e.exports = function (e) {
                      var t = typeof e;
                      return "string" == t ||
                        "number" == t ||
                        "symbol" == t ||
                        "boolean" == t
                        ? "__proto__" !== e
                        : null === e;
                    };
                  },
                  5346: function (e, t, n) {
                    var r,
                      a = n(4429),
                      i = (r = /[^.]+$/.exec(
                        (a && a.keys && a.keys.IE_PROTO) || ""
                      ))
                        ? "Symbol(src)_1." + r
                        : "";
                    e.exports = function (e) {
                      return !!i && i in e;
                    };
                  },
                  5726: function (e) {
                    var t = Object.prototype;
                    e.exports = function (e) {
                      var n = e && e.constructor;
                      return (
                        e === (("function" == typeof n && n.prototype) || t)
                      );
                    };
                  },
                  7040: function (e) {
                    e.exports = function () {
                      (this.__data__ = []), (this.size = 0);
                    };
                  },
                  4125: function (e, t, n) {
                    var r = n(8470),
                      a = Array.prototype.splice;
                    e.exports = function (e) {
                      var t = this.__data__,
                        n = r(t, e);
                      return !(
                        n < 0 ||
                        (n == t.length - 1 ? t.pop() : a.call(t, n, 1),
                        --this.size,
                        0)
                      );
                    };
                  },
                  2117: function (e, t, n) {
                    var r = n(8470);
                    e.exports = function (e) {
                      var t = this.__data__,
                        n = r(t, e);
                      return n < 0 ? void 0 : t[n][1];
                    };
                  },
                  7518: function (e, t, n) {
                    var r = n(8470);
                    e.exports = function (e) {
                      return r(this.__data__, e) > -1;
                    };
                  },
                  4705: function (e, t, n) {
                    var r = n(8470);
                    e.exports = function (e, t) {
                      var n = this.__data__,
                        a = r(n, e);
                      return (
                        a < 0 ? (++this.size, n.push([e, t])) : (n[a][1] = t),
                        this
                      );
                    };
                  },
                  4785: function (e, t, n) {
                    var r = n(1989),
                      a = n(8407),
                      i = n(7071);
                    e.exports = function () {
                      (this.size = 0),
                        (this.__data__ = {
                          hash: new r(),
                          map: new (i || a)(),
                          string: new r(),
                        });
                    };
                  },
                  1285: function (e, t, n) {
                    var r = n(5050);
                    e.exports = function (e) {
                      var t = r(this, e).delete(e);
                      return (this.size -= t ? 1 : 0), t;
                    };
                  },
                  6e3: function (e, t, n) {
                    var r = n(5050);
                    e.exports = function (e) {
                      return r(this, e).get(e);
                    };
                  },
                  9916: function (e, t, n) {
                    var r = n(5050);
                    e.exports = function (e) {
                      return r(this, e).has(e);
                    };
                  },
                  5265: function (e, t, n) {
                    var r = n(5050);
                    e.exports = function (e, t) {
                      var n = r(this, e),
                        a = n.size;
                      return (
                        n.set(e, t), (this.size += n.size == a ? 0 : 1), this
                      );
                    };
                  },
                  8776: function (e) {
                    e.exports = function (e) {
                      var t = -1,
                        n = Array(e.size);
                      return (
                        e.forEach(function (e, r) {
                          n[++t] = [r, e];
                        }),
                        n
                      );
                    };
                  },
                  4536: function (e, t, n) {
                    var r = n(852)(Object, "create");
                    e.exports = r;
                  },
                  6916: function (e, t, n) {
                    var r = n(5569)(Object.keys, Object);
                    e.exports = r;
                  },
                  1167: function (e, t, n) {
                    e = n.nmd(e);
                    var r = n(1957),
                      a = t && !t.nodeType && t,
                      i = a && e && !e.nodeType && e,
                      o = i && i.exports === a && r.process,
                      s = (function () {
                        try {
                          return (
                            (i && i.require && i.require("util").types) ||
                            (o && o.binding && o.binding("util"))
                          );
                        } catch (e) {}
                      })();
                    e.exports = s;
                  },
                  2333: function (e) {
                    var t = Object.prototype.toString;
                    e.exports = function (e) {
                      return t.call(e);
                    };
                  },
                  5569: function (e) {
                    e.exports = function (e, t) {
                      return function (n) {
                        return e(t(n));
                      };
                    };
                  },
                  5639: function (e, t, n) {
                    var r = n(1957),
                      a =
                        "object" == typeof self &&
                        self &&
                        self.Object === Object &&
                        self,
                      i = r || a || Function("return this")();
                    e.exports = i;
                  },
                  619: function (e) {
                    e.exports = function (e) {
                      return (
                        this.__data__.set(e, "__lodash_hash_undefined__"), this
                      );
                    };
                  },
                  2385: function (e) {
                    e.exports = function (e) {
                      return this.__data__.has(e);
                    };
                  },
                  1814: function (e) {
                    e.exports = function (e) {
                      var t = -1,
                        n = Array(e.size);
                      return (
                        e.forEach(function (e) {
                          n[++t] = e;
                        }),
                        n
                      );
                    };
                  },
                  7465: function (e, t, n) {
                    var r = n(8407);
                    e.exports = function () {
                      (this.__data__ = new r()), (this.size = 0);
                    };
                  },
                  3779: function (e) {
                    e.exports = function (e) {
                      var t = this.__data__,
                        n = t.delete(e);
                      return (this.size = t.size), n;
                    };
                  },
                  7599: function (e) {
                    e.exports = function (e) {
                      return this.__data__.get(e);
                    };
                  },
                  4758: function (e) {
                    e.exports = function (e) {
                      return this.__data__.has(e);
                    };
                  },
                  4309: function (e, t, n) {
                    var r = n(8407),
                      a = n(7071),
                      i = n(3369);
                    e.exports = function (e, t) {
                      var n = this.__data__;
                      if (n instanceof r) {
                        var o = n.__data__;
                        if (!a || o.length < 199)
                          return o.push([e, t]), (this.size = ++n.size), this;
                        n = this.__data__ = new i(o);
                      }
                      return n.set(e, t), (this.size = n.size), this;
                    };
                  },
                  346: function (e) {
                    var t = Function.prototype.toString;
                    e.exports = function (e) {
                      if (null != e) {
                        try {
                          return t.call(e);
                        } catch (e) {}
                        try {
                          return e + "";
                        } catch (e) {}
                      }
                      return "";
                    };
                  },
                  7813: function (e) {
                    e.exports = function (e, t) {
                      return e === t || (e != e && t != t);
                    };
                  },
                  5694: function (e, t, n) {
                    var r = n(9454),
                      a = n(7005),
                      i = Object.prototype,
                      o = i.hasOwnProperty,
                      s = i.propertyIsEnumerable,
                      l = r(
                        (function () {
                          return arguments;
                        })()
                      )
                        ? r
                        : function (e) {
                            return (
                              a(e) &&
                              o.call(e, "callee") &&
                              !s.call(e, "callee")
                            );
                          };
                    e.exports = l;
                  },
                  1469: function (e) {
                    var t = Array.isArray;
                    e.exports = t;
                  },
                  8612: function (e, t, n) {
                    var r = n(3560),
                      a = n(1780);
                    e.exports = function (e) {
                      return null != e && a(e.length) && !r(e);
                    };
                  },
                  4144: function (e, t, n) {
                    e = n.nmd(e);
                    var r = n(5639),
                      a = n(5062),
                      i = t && !t.nodeType && t,
                      o = i && e && !e.nodeType && e,
                      s = o && o.exports === i ? r.Buffer : void 0,
                      l = (s ? s.isBuffer : void 0) || a;
                    e.exports = l;
                  },
                  8446: function (e, t, n) {
                    var r = n(939);
                    e.exports = function (e, t) {
                      return r(e, t);
                    };
                  },
                  3560: function (e, t, n) {
                    var r = n(4239),
                      a = n(3218);
                    e.exports = function (e) {
                      if (!a(e)) return !1;
                      var t = r(e);
                      return (
                        "[object Function]" == t ||
                        "[object GeneratorFunction]" == t ||
                        "[object AsyncFunction]" == t ||
                        "[object Proxy]" == t
                      );
                    };
                  },
                  1780: function (e) {
                    e.exports = function (e) {
                      return (
                        "number" == typeof e &&
                        e > -1 &&
                        e % 1 == 0 &&
                        e <= 9007199254740991
                      );
                    };
                  },
                  3218: function (e) {
                    e.exports = function (e) {
                      var t = typeof e;
                      return null != e && ("object" == t || "function" == t);
                    };
                  },
                  7005: function (e) {
                    e.exports = function (e) {
                      return null != e && "object" == typeof e;
                    };
                  },
                  6719: function (e, t, n) {
                    var r = n(8749),
                      a = n(1717),
                      i = n(1167),
                      o = i && i.isTypedArray,
                      s = o ? a(o) : r;
                    e.exports = s;
                  },
                  3674: function (e, t, n) {
                    var r = n(4636),
                      a = n(280),
                      i = n(8612);
                    e.exports = function (e) {
                      return i(e) ? r(e) : a(e);
                    };
                  },
                  479: function (e) {
                    e.exports = function () {
                      return [];
                    };
                  },
                  5062: function (e) {
                    e.exports = function () {
                      return !1;
                    };
                  },
                  75: function (e) {
                    (function () {
                      var t, n, r, a, i, o;
                      "undefined" != typeof performance &&
                      null !== performance &&
                      performance.now
                        ? (e.exports = function () {
                            return performance.now();
                          })
                        : "undefined" != typeof process &&
                          null !== process &&
                          process.hrtime
                        ? ((e.exports = function () {
                            return (t() - i) / 1e6;
                          }),
                          (n = process.hrtime),
                          (a = (t = function () {
                            var e;
                            return 1e9 * (e = n())[0] + e[1];
                          })()),
                          (o = 1e9 * process.uptime()),
                          (i = a - o))
                        : Date.now
                        ? ((e.exports = function () {
                            return Date.now() - r;
                          }),
                          (r = Date.now()))
                        : ((e.exports = function () {
                            return new Date().getTime() - r;
                          }),
                          (r = new Date().getTime()));
                    }).call(this);
                  },
                  4087: function (e, t, n) {
                    for (
                      var r = n(75),
                        a = "undefined" == typeof window ? n.g : window,
                        i = ["moz", "webkit"],
                        o = "AnimationFrame",
                        s = a["request" + o],
                        l = a["cancel" + o] || a["cancelRequest" + o],
                        u = 0;
                      !s && u < i.length;
                      u++
                    )
                      (s = a[i[u] + "Request" + o]),
                        (l =
                          a[i[u] + "Cancel" + o] ||
                          a[i[u] + "CancelRequest" + o]);
                    if (!s || !l) {
                      var c = 0,
                        f = 0,
                        d = [];
                      (s = function (e) {
                        if (0 === d.length) {
                          var t = r(),
                            n = Math.max(0, 16.666666666666668 - (t - c));
                          (c = n + t),
                            setTimeout(function () {
                              var e = d.slice(0);
                              d.length = 0;
                              for (var t = 0; t < e.length; t++)
                                if (!e[t].cancelled)
                                  try {
                                    e[t].callback(c);
                                  } catch (e) {
                                    setTimeout(function () {
                                      throw e;
                                    }, 0);
                                  }
                            }, Math.round(n));
                        }
                        return (
                          d.push({ handle: ++f, callback: e, cancelled: !1 }), f
                        );
                      }),
                        (l = function (e) {
                          for (var t = 0; t < d.length; t++)
                            d[t].handle === e && (d[t].cancelled = !0);
                        });
                    }
                    (e.exports = function (e) {
                      return s.call(a, e);
                    }),
                      (e.exports.cancel = function () {
                        l.apply(a, arguments);
                      }),
                      (e.exports.polyfill = function (e) {
                        e || (e = a),
                          (e.requestAnimationFrame = s),
                          (e.cancelAnimationFrame = l);
                      });
                  },
                  8156: function (e) {
                    "use strict";
                    e.exports = r;
                  },
                },
                t = {};
              function n(r) {
                var a = t[r];
                if (void 0 !== a) return a.exports;
                var i = (t[r] = { id: r, loaded: !1, exports: {} });
                return (
                  e[r].call(i.exports, i, i.exports, n),
                  (i.loaded = !0),
                  i.exports
                );
              }
              (n.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return n.d(t, { a: t }), t;
              }),
                (n.d = function (e, t) {
                  for (var r in t)
                    n.o(t, r) &&
                      !n.o(e, r) &&
                      Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r],
                      });
                }),
                (n.g = (function () {
                  if ("object" == typeof globalThis) return globalThis;
                  try {
                    return this || new Function("return this")();
                  } catch (r) {
                    if ("object" == typeof window) return window;
                  }
                })()),
                (n.o = function (e, t) {
                  return Object.prototype.hasOwnProperty.call(e, t);
                }),
                (n.nmd = function (e) {
                  return (e.paths = []), e.children || (e.children = []), e;
                });
              var a = {};
              return (
                (function () {
                  "use strict";
                  n.d(a, {
                    default: function () {
                      return m;
                    },
                  });
                  var e = n(8156),
                    t = n.n(e),
                    r = n(7403),
                    i = n(8446),
                    o = n.n(i);
                  function s(e) {
                    return (
                      (s =
                        "function" == typeof Symbol &&
                        "symbol" == typeof Symbol.iterator
                          ? function (e) {
                              return typeof e;
                            }
                          : function (e) {
                              return e &&
                                "function" == typeof Symbol &&
                                e.constructor === Symbol &&
                                e !== Symbol.prototype
                                ? "symbol"
                                : typeof e;
                            }),
                      s(e)
                    );
                  }
                  function l(e, t) {
                    if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function");
                  }
                  function u(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                    }
                  }
                  function c(e, t) {
                    return (
                      (c = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, t) {
                            return (e.__proto__ = t), e;
                          }),
                      c(e, t)
                    );
                  }
                  function f(e, t) {
                    if (t && ("object" === s(t) || "function" == typeof t))
                      return t;
                    if (void 0 !== t)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined"
                      );
                    return d(e);
                  }
                  function d(e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  }
                  function p(e) {
                    return (
                      (p = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                            return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                      p(e)
                    );
                  }
                  function h(e, t, n) {
                    return (
                      t in e
                        ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (e[t] = n),
                      e
                    );
                  }
                  var v = (function (e) {
                    !(function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw new TypeError(
                          "Super expression must either be null or a function"
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        Object.defineProperty(e, "prototype", { writable: !1 }),
                        t && c(e, t);
                    })(m, e);
                    var n,
                      a,
                      i,
                      s,
                      v =
                        ((i = m),
                        (s = (function () {
                          if (
                            "undefined" == typeof Reflect ||
                            !Reflect.construct
                          )
                            return !1;
                          if (Reflect.construct.sham) return !1;
                          if ("function" == typeof Proxy) return !0;
                          try {
                            return (
                              Boolean.prototype.valueOf.call(
                                Reflect.construct(Boolean, [], function () {})
                              ),
                              !0
                            );
                          } catch (e) {
                            return !1;
                          }
                        })()),
                        function () {
                          var e,
                            t = p(i);
                          if (s) {
                            var n = p(this).constructor;
                            e = Reflect.construct(t, arguments, n);
                          } else e = t.apply(this, arguments);
                          return f(this, e);
                        });
                    function m() {
                      var e;
                      l(this, m);
                      for (
                        var t = arguments.length, n = new Array(t), r = 0;
                        r < t;
                        r++
                      )
                        n[r] = arguments[r];
                      return (
                        h(d((e = v.call.apply(v, [this].concat(n)))), "state", {
                          instance: null,
                        }),
                        e
                      );
                    }
                    return (
                      (n = m),
                      (a = [
                        {
                          key: "componentDidMount",
                          value: function () {
                            var e = this,
                              t = new r.default(
                                this.typewriter,
                                this.props.options
                              );
                            this.setState({ instance: t }, function () {
                              var n = e.props.onInit;
                              n && n(t);
                            });
                          },
                        },
                        {
                          key: "componentDidUpdate",
                          value: function (e) {
                            o()(this.props.options, e.options) ||
                              this.setState({
                                instance: new r.default(
                                  this.typewriter,
                                  this.props.options
                                ),
                              });
                          },
                        },
                        {
                          key: "componentWillUnmount",
                          value: function () {
                            this.state.instance && this.state.instance.stop();
                          },
                        },
                        {
                          key: "render",
                          value: function () {
                            var e = this,
                              n = this.props.component;
                            return t().createElement(n, {
                              ref: function (t) {
                                return (e.typewriter = t);
                              },
                              className: "Typewriter",
                              "data-testid": "typewriter-wrapper",
                            });
                          },
                        },
                      ]) && u(n.prototype, a),
                      Object.defineProperty(n, "prototype", { writable: !1 }),
                      m
                    );
                  })(e.Component);
                  v.defaultProps = { component: "div" };
                  var m = v;
                })(),
                a.default
              );
            })()));
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return n.d(t, { a: t }), t;
  }),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      n.t = function (r, a) {
        if ((1 & a && (r = this(r)), 8 & a)) return r;
        if ("object" === typeof r && r) {
          if (4 & a && r.__esModule) return r;
          if (16 & a && "function" === typeof r.then) return r;
        }
        var i = Object.create(null);
        n.r(i);
        var o = {};
        e = e || [null, t({}), t([]), t(t)];
        for (
          var s = 2 & a && r;
          "object" == typeof s && !~e.indexOf(s);
          s = t(s)
        )
          Object.getOwnPropertyNames(s).forEach(function (e) {
            o[e] = function () {
              return r[e];
            };
          });
        return (
          (o.default = function () {
            return r;
          }),
          n.d(i, o),
          i
        );
      };
    })(),
    (n.d = function (e, t) {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.p = "/"),
    (function () {
      "use strict";
      var e,
        t = n(791),
        r = n.t(t, 2),
        a = n(250);
      function i(e) {
        if (Array.isArray(e)) return e;
      }
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function s(e, t) {
        if (e) {
          if ("string" === typeof e) return o(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? o(e, t)
              : void 0
          );
        }
      }
      function l() {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      function u(e, t) {
        return (
          i(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                a,
                i,
                o,
                s = [],
                l = !0,
                u = !1;
              try {
                if (((i = (n = n.call(e)).next), 0 === t)) {
                  if (Object(n) !== n) return;
                  l = !1;
                } else
                  for (
                    ;
                    !(l = (r = i.call(n)).done) &&
                    (s.push(r.value), s.length !== t);
                    l = !0
                  );
              } catch (c) {
                (u = !0), (a = c);
              } finally {
                try {
                  if (
                    !l &&
                    null != n.return &&
                    ((o = n.return()), Object(o) !== o)
                  )
                    return;
                } finally {
                  if (u) throw a;
                }
              }
              return s;
            }
          })(e, t) ||
          s(e, t) ||
          l()
        );
      }
      function c(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      function f(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return o(e);
          })(e) ||
          c(e) ||
          s(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function d(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function p(e) {
        return (
          (p =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          p(e)
        );
      }
      function h(e) {
        var t = (function (e, t) {
          if ("object" !== p(e) || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" !== p(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === p(t) ? t : String(t);
      }
      function v(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, h(r.key), r);
        }
      }
      function m(e, t, n) {
        return (
          t && v(e.prototype, t),
          n && v(e, n),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          e
        );
      }
      function y(e, t) {
        return (
          (y = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          y(e, t)
        );
      }
      function g(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && y(e, t);
      }
      function b(e) {
        return (
          (b = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          b(e)
        );
      }
      function w() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function x(e, t) {
        if (t && ("object" === p(t) || "function" === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return e;
        })(e);
      }
      function k(e) {
        var t = w();
        return function () {
          var n,
            r = b(e);
          if (t) {
            var a = b(this).constructor;
            n = Reflect.construct(r, arguments, a);
          } else n = r.apply(this, arguments);
          return x(this, n);
        };
      }
      function S(e, t, n) {
        return (
          (S = w()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var a = new (Function.bind.apply(e, r))();
                return n && y(a, n.prototype), a;
              }),
          S.apply(null, arguments)
        );
      }
      function E(e) {
        var t = "function" === typeof Map ? new Map() : void 0;
        return (
          (E = function (e) {
            if (
              null === e ||
              ((n = e),
              -1 === Function.toString.call(n).indexOf("[native code]"))
            )
              return e;
            var n;
            if ("function" !== typeof e)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if ("undefined" !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return S(e, arguments, b(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              y(r, e)
            );
          }),
          E(e)
        );
      }
      function C() {
        return (
          (C = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          C.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var P,
        T = "popstate";
      function j(e, t) {
        if (!1 === e || null === e || "undefined" === typeof e)
          throw new Error(t);
      }
      function _(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function N(e, t, n, r) {
        return (
          void 0 === n && (n = null),
          C(
            {
              pathname: "string" === typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" === typeof t ? L(t) : t,
            {
              state: n,
              key: (t && t.key) || r || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function O(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          i = e.hash,
          o = void 0 === i ? "" : i;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          o && "#" !== o && (n += "#" === o.charAt(0) ? o : "#" + o),
          n
        );
      }
      function L(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      function A(t, n, r, a) {
        void 0 === a && (a = {});
        var i = a,
          o = i.window,
          s = void 0 === o ? document.defaultView : o,
          l = i.v5Compat,
          u = void 0 !== l && l,
          c = s.history,
          f = e.Pop,
          d = null,
          p = h();
        function h() {
          return (c.state || { idx: null }).idx;
        }
        function v() {
          f = e.Pop;
          var t = h(),
            n = null == t ? null : t - p;
          (p = t), d && d({ action: f, location: y.location, delta: n });
        }
        function m(e) {
          var t =
              "null" !== s.location.origin
                ? s.location.origin
                : s.location.href,
            n = "string" === typeof e ? e : O(e);
          return (
            j(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                n
            ),
            new URL(n, t)
          );
        }
        null == p && ((p = 0), c.replaceState(C({}, c.state, { idx: p }), ""));
        var y = {
          get action() {
            return f;
          },
          get location() {
            return t(s, c);
          },
          listen: function (e) {
            if (d)
              throw new Error("A history only accepts one active listener");
            return (
              s.addEventListener(T, v),
              (d = e),
              function () {
                s.removeEventListener(T, v), (d = null);
              }
            );
          },
          createHref: function (e) {
            return n(s, e);
          },
          createURL: m,
          encodeLocation: function (e) {
            var t = m(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (t, n) {
            f = e.Push;
            var a = N(y.location, t, n);
            r && r(a, t);
            var i = _(a, (p = h() + 1)),
              o = y.createHref(a);
            try {
              c.pushState(i, "", o);
            } catch (l) {
              s.location.assign(o);
            }
            u && d && d({ action: f, location: y.location, delta: 1 });
          },
          replace: function (t, n) {
            f = e.Replace;
            var a = N(y.location, t, n);
            r && r(a, t);
            var i = _(a, (p = h())),
              o = y.createHref(a);
            c.replaceState(i, "", o),
              u && d && d({ action: f, location: y.location, delta: 0 });
          },
          go: function (e) {
            return c.go(e);
          },
        };
        return y;
      }
      function M(e, t, n) {
        void 0 === n && (n = "/");
        var r = q(("string" === typeof t ? L(t) : t).pathname || "/", n);
        if (null == r) return null;
        var a = R(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var n =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, n) {
                      return e === t[n];
                    });
                  return n ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(a);
        for (var i = null, o = 0; null == i && o < a.length; ++o)
          i = $(a[o], Y(r));
        return i;
      }
      function R(e, t, n, r) {
        void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = "");
        var a = function (e, a, i) {
          var o = {
            relativePath: void 0 === i ? e.path || "" : i,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          o.relativePath.startsWith("/") &&
            (j(
              o.relativePath.startsWith(r),
              'Absolute route path "' +
                o.relativePath +
                '" nested under path "' +
                r +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (o.relativePath = o.relativePath.slice(r.length)));
          var s = J([r, o.relativePath]),
            l = n.concat(o);
          e.children &&
            e.children.length > 0 &&
            (j(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                s +
                '".'
            ),
            R(e.children, t, l, s)),
            (null != e.path || e.index) &&
              t.push({ path: s, score: H(s, e.index), routesMeta: l });
        };
        return (
          e.forEach(function (e, t) {
            var n;
            if ("" !== e.path && null != (n = e.path) && n.includes("?")) {
              var r,
                i = (function (e, t) {
                  var n =
                    ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                    e["@@iterator"];
                  if (!n) {
                    if (
                      Array.isArray(e) ||
                      (n = s(e)) ||
                      (t && e && "number" === typeof e.length)
                    ) {
                      n && (e = n);
                      var r = 0,
                        a = function () {};
                      return {
                        s: a,
                        n: function () {
                          return r >= e.length
                            ? { done: !0 }
                            : { done: !1, value: e[r++] };
                        },
                        e: function (e) {
                          throw e;
                        },
                        f: a,
                      };
                    }
                    throw new TypeError(
                      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  }
                  var i,
                    o = !0,
                    l = !1;
                  return {
                    s: function () {
                      n = n.call(e);
                    },
                    n: function () {
                      var e = n.next();
                      return (o = e.done), e;
                    },
                    e: function (e) {
                      (l = !0), (i = e);
                    },
                    f: function () {
                      try {
                        o || null == n.return || n.return();
                      } finally {
                        if (l) throw i;
                      }
                    },
                  };
                })(D(e.path));
              try {
                for (i.s(); !(r = i.n()).done; ) {
                  var o = r.value;
                  a(e, t, o);
                }
              } catch (l) {
                i.e(l);
              } finally {
                i.f();
              }
            } else a(e, t);
          }),
          t
        );
      }
      function D(e) {
        var t = e.split("/");
        if (0 === t.length) return [];
        var n,
          r = i((n = t)) || c(n) || s(n) || l(),
          a = r[0],
          o = r.slice(1),
          u = a.endsWith("?"),
          d = a.replace(/\?$/, "");
        if (0 === o.length) return u ? [d, ""] : [d];
        var p = D(o.join("/")),
          h = [];
        return (
          h.push.apply(
            h,
            f(
              p.map(function (e) {
                return "" === e ? d : [d, e].join("/");
              })
            )
          ),
          u && h.push.apply(h, f(p)),
          h.map(function (t) {
            return e.startsWith("/") && "" === t ? "/" : t;
          })
        );
      }
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(P || (P = {}));
      var V = /^:\w+$/,
        I = 3,
        F = 2,
        z = 1,
        U = 10,
        B = -2,
        W = function (e) {
          return "*" === e;
        };
      function H(e, t) {
        var n = e.split("/"),
          r = n.length;
        return (
          n.some(W) && (r += B),
          t && (r += F),
          n
            .filter(function (e) {
              return !W(e);
            })
            .reduce(function (e, t) {
              return e + (V.test(t) ? I : "" === t ? z : U);
            }, r)
        );
      }
      function $(e, t) {
        for (
          var n = e.routesMeta, r = {}, a = "/", i = [], o = 0;
          o < n.length;
          ++o
        ) {
          var s = n[o],
            l = o === n.length - 1,
            u = "/" === a ? t : t.slice(a.length) || "/",
            c = Q(
              { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
              u
            );
          if (!c) return null;
          Object.assign(r, c.params);
          var f = s.route;
          i.push({
            params: r,
            pathname: J([a, c.pathname]),
            pathnameBase: ee(J([a, c.pathnameBase])),
            route: f,
          }),
            "/" !== c.pathnameBase && (a = J([a, c.pathnameBase]));
        }
        return i;
      }
      function Q(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var n = (function (e, t, n) {
            void 0 === t && (t = !1);
            void 0 === n && (n = !0);
            G(
              "*" === e || !e.endsWith("*") || e.endsWith("/*"),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, "/*") +
                '".'
            );
            var r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/\/:(\w+)/g, function (e, t) {
                    return r.push(t), "/([^\\/]+)";
                  });
            e.endsWith("*")
              ? (r.push("*"),
                (a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : n
              ? (a += "\\/*$")
              : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
            var i = new RegExp(a, t ? void 0 : "i");
            return [i, r];
          })(e.path, e.caseSensitive, e.end),
          r = u(n, 2),
          a = r[0],
          i = r[1],
          o = t.match(a);
        if (!o) return null;
        var s = o[0],
          l = s.replace(/(.)\/+$/, "$1"),
          c = o.slice(1);
        return {
          params: i.reduce(function (e, t, n) {
            if ("*" === t) {
              var r = c[n] || "";
              l = s.slice(0, s.length - r.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (n) {
                  return (
                    G(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        n +
                        ")."
                    ),
                    e
                  );
                }
              })(c[n] || "", t)),
              e
            );
          }, {}),
          pathname: s,
          pathnameBase: l,
          pattern: e,
        };
      }
      function Y(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            G(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function q(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var n = t.endsWith("/") ? t.length - 1 : t.length,
          r = e.charAt(n);
        return r && "/" !== r ? null : e.slice(n) || "/";
      }
      function G(e, t) {
        if (!e) {
          "undefined" !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (n) {}
        }
      }
      function X(e, t, n, r) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(r) +
          "].  Please separate it out to the `to." +
          n +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function K(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function Z(e, t, n, r) {
        var a;
        void 0 === r && (r = !1),
          "string" === typeof e
            ? (a = L(e))
            : (j(
                !(a = C({}, e)).pathname || !a.pathname.includes("?"),
                X("?", "pathname", "search", a)
              ),
              j(
                !a.pathname || !a.pathname.includes("#"),
                X("#", "pathname", "hash", a)
              ),
              j(
                !a.search || !a.search.includes("#"),
                X("#", "search", "hash", a)
              ));
        var i,
          o = "" === e || "" === a.pathname,
          s = o ? "/" : a.pathname;
        if (r || null == s) i = n;
        else {
          var l = t.length - 1;
          if (s.startsWith("..")) {
            for (var u = s.split("/"); ".." === u[0]; ) u.shift(), (l -= 1);
            a.pathname = u.join("/");
          }
          i = l >= 0 ? t[l] : "/";
        }
        var c = (function (e, t) {
            void 0 === t && (t = "/");
            var n = "string" === typeof e ? L(e) : e,
              r = n.pathname,
              a = n.search,
              i = void 0 === a ? "" : a,
              o = n.hash,
              s = void 0 === o ? "" : o,
              l = r
                ? r.startsWith("/")
                  ? r
                  : (function (e, t) {
                      var n = t.replace(/\/+$/, "").split("/");
                      return (
                        e.split("/").forEach(function (e) {
                          ".." === e
                            ? n.length > 1 && n.pop()
                            : "." !== e && n.push(e);
                        }),
                        n.length > 1 ? n.join("/") : "/"
                      );
                    })(r, t)
                : t;
            return { pathname: l, search: te(i), hash: ne(s) };
          })(a, i),
          f = s && "/" !== s && s.endsWith("/"),
          d = (o || "." === s) && n.endsWith("/");
        return c.pathname.endsWith("/") || (!f && !d) || (c.pathname += "/"), c;
      }
      var J = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        ee = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        te = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        ne = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        },
        re = (function (e) {
          g(n, e);
          var t = k(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return m(n);
        })(E(Error));
      function ae(e) {
        return (
          null != e &&
          "number" === typeof e.status &&
          "string" === typeof e.statusText &&
          "boolean" === typeof e.internal &&
          "data" in e
        );
      }
      var ie = ["post", "put", "patch", "delete"],
        oe = (new Set(ie), ["get"].concat(ie));
      new Set(oe),
        new Set([301, 302, 303, 307, 308]),
        new Set([307, 308]),
        "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          window.document.createElement;
      Symbol("deferred");
      function se() {
        return (
          (se = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          se.apply(this, arguments)
        );
      }
      var le =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              },
        ue = t.useState,
        ce = t.useEffect,
        fe = t.useLayoutEffect,
        de = t.useDebugValue;
      function pe(e) {
        var t = e.getSnapshot,
          n = e.value;
        try {
          var r = t();
          return !le(n, r);
        } catch (a) {
          return !0;
        }
      }
      "undefined" === typeof window ||
        "undefined" === typeof window.document ||
        window.document.createElement,
        r.useSyncExternalStore;
      var he = t.createContext(null);
      var ve = t.createContext(null);
      var me = t.createContext(null);
      var ye = t.createContext(null);
      var ge = t.createContext(null);
      var be = t.createContext({ outlet: null, matches: [] });
      var we = t.createContext(null);
      function xe() {
        return null != t.useContext(ge);
      }
      function ke() {
        return xe() || j(!1), t.useContext(ge).location;
      }
      function Se() {
        xe() || j(!1);
        var e = t.useContext(ye),
          n = e.basename,
          r = e.navigator,
          a = t.useContext(be).matches,
          i = ke().pathname,
          o = JSON.stringify(
            K(a).map(function (e) {
              return e.pathnameBase;
            })
          ),
          s = t.useRef(!1);
        return (
          t.useEffect(function () {
            s.current = !0;
          }),
          t.useCallback(
            function (e, t) {
              if ((void 0 === t && (t = {}), s.current))
                if ("number" !== typeof e) {
                  var a = Z(e, JSON.parse(o), i, "path" === t.relative);
                  "/" !== n &&
                    (a.pathname = "/" === a.pathname ? n : J([n, a.pathname])),
                    (t.replace ? r.replace : r.push)(a, t.state, t);
                } else r.go(e);
            },
            [n, r, o, i]
          )
        );
      }
      function Ee(e, n) {
        var r = (void 0 === n ? {} : n).relative,
          a = t.useContext(be).matches,
          i = ke().pathname,
          o = JSON.stringify(
            K(a).map(function (e) {
              return e.pathnameBase;
            })
          );
        return t.useMemo(
          function () {
            return Z(e, JSON.parse(o), i, "path" === r);
          },
          [e, o, i, r]
        );
      }
      function Ce() {
        var e = (function () {
            var e,
              n = t.useContext(we),
              r = Oe(Te.UseRouteError),
              a = Le(Te.UseRouteError);
            if (n) return n;
            return null == (e = r.errors) ? void 0 : e[a];
          })(),
          n = ae(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          a = "rgba(200,200,200, 0.5)",
          i = { padding: "0.5rem", backgroundColor: a };
        return t.createElement(
          t.Fragment,
          null,
          t.createElement("h2", null, "Unexpected Application Error!"),
          t.createElement("h3", { style: { fontStyle: "italic" } }, n),
          r ? t.createElement("pre", { style: i }, r) : null,
          null
        );
      }
      var Pe,
        Te,
        je = (function (e) {
          g(r, e);
          var n = k(r);
          function r(e) {
            var t;
            return (
              d(this, r),
              ((t = n.call(this, e)).state = {
                location: e.location,
                error: e.error,
              }),
              t
            );
          }
          return (
            m(
              r,
              [
                {
                  key: "componentDidCatch",
                  value: function (e, t) {
                    console.error(
                      "React Router caught the following error during render",
                      e,
                      t
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return this.state.error
                      ? t.createElement(
                          be.Provider,
                          { value: this.props.routeContext },
                          t.createElement(we.Provider, {
                            value: this.state.error,
                            children: this.props.component,
                          })
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: "getDerivedStateFromError",
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: "getDerivedStateFromProps",
                  value: function (e, t) {
                    return t.location !== e.location
                      ? { error: e.error, location: e.location }
                      : { error: e.error || t.error, location: t.location };
                  },
                },
              ]
            ),
            r
          );
        })(t.Component);
      function _e(e) {
        var n = e.routeContext,
          r = e.match,
          a = e.children,
          i = t.useContext(he);
        return (
          i &&
            i.static &&
            i.staticContext &&
            r.route.errorElement &&
            (i.staticContext._deepestRenderedBoundaryId = r.route.id),
          t.createElement(be.Provider, { value: n }, a)
        );
      }
      function Ne(e, n, r) {
        if ((void 0 === n && (n = []), null == e)) {
          if (null == r || !r.errors) return null;
          e = r.matches;
        }
        var a = e,
          i = null == r ? void 0 : r.errors;
        if (null != i) {
          var o = a.findIndex(function (e) {
            return e.route.id && (null == i ? void 0 : i[e.route.id]);
          });
          o >= 0 || j(!1), (a = a.slice(0, Math.min(a.length, o + 1)));
        }
        return a.reduceRight(function (e, o, s) {
          var l = o.route.id ? (null == i ? void 0 : i[o.route.id]) : null,
            u = r ? o.route.errorElement || t.createElement(Ce, null) : null,
            c = n.concat(a.slice(0, s + 1)),
            f = function () {
              return t.createElement(
                _e,
                { match: o, routeContext: { outlet: e, matches: c } },
                l ? u : void 0 !== o.route.element ? o.route.element : e
              );
            };
          return r && (o.route.errorElement || 0 === s)
            ? t.createElement(je, {
                location: r.location,
                component: u,
                error: l,
                children: f(),
                routeContext: { outlet: null, matches: c },
              })
            : f();
        }, null);
      }
      function Oe(e) {
        var n = t.useContext(ve);
        return n || j(!1), n;
      }
      function Le(e) {
        var n = (function (e) {
            var n = t.useContext(be);
            return n || j(!1), n;
          })(),
          r = n.matches[n.matches.length - 1];
        return r.route.id || j(!1), r.route.id;
      }
      !(function (e) {
        (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator");
      })(Pe || (Pe = {})),
        (function (e) {
          (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator");
        })(Te || (Te = {}));
      var Ae;
      function Me(e) {
        var n = e.to,
          r = e.replace,
          a = e.state,
          i = e.relative;
        xe() || j(!1);
        var o = t.useContext(ve),
          s = Se();
        return (
          t.useEffect(function () {
            (o && "idle" !== o.navigation.state) ||
              s(n, { replace: r, state: a, relative: i });
          }),
          null
        );
      }
      function Re(e) {
        j(!1);
      }
      function De(n) {
        var r = n.basename,
          a = void 0 === r ? "/" : r,
          i = n.children,
          o = void 0 === i ? null : i,
          s = n.location,
          l = n.navigationType,
          u = void 0 === l ? e.Pop : l,
          c = n.navigator,
          f = n.static,
          d = void 0 !== f && f;
        xe() && j(!1);
        var p = a.replace(/^\/*/, "/"),
          h = t.useMemo(
            function () {
              return { basename: p, navigator: c, static: d };
            },
            [p, c, d]
          );
        "string" === typeof s && (s = L(s));
        var v = s,
          m = v.pathname,
          y = void 0 === m ? "/" : m,
          g = v.search,
          b = void 0 === g ? "" : g,
          w = v.hash,
          x = void 0 === w ? "" : w,
          k = v.state,
          S = void 0 === k ? null : k,
          E = v.key,
          C = void 0 === E ? "default" : E,
          P = t.useMemo(
            function () {
              var e = q(y, p);
              return null == e
                ? null
                : { pathname: e, search: b, hash: x, state: S, key: C };
            },
            [p, y, b, x, S, C]
          );
        return null == P
          ? null
          : t.createElement(
              ye.Provider,
              { value: h },
              t.createElement(ge.Provider, {
                children: o,
                value: { location: P, navigationType: u },
              })
            );
      }
      function Ve(n) {
        var r = n.children,
          a = n.location,
          i = t.useContext(he);
        return (function (n, r) {
          xe() || j(!1);
          var a,
            i = t.useContext(ye).navigator,
            o = t.useContext(ve),
            s = t.useContext(be).matches,
            l = s[s.length - 1],
            u = l ? l.params : {},
            c = (l && l.pathname, l ? l.pathnameBase : "/"),
            f = (l && l.route, ke());
          if (r) {
            var d,
              p = "string" === typeof r ? L(r) : r;
            "/" === c ||
              (null == (d = p.pathname) ? void 0 : d.startsWith(c)) ||
              j(!1),
              (a = p);
          } else a = f;
          var h = a.pathname || "/",
            v = M(n, { pathname: "/" === c ? h : h.slice(c.length) || "/" }),
            m = Ne(
              v &&
                v.map(function (e) {
                  return Object.assign({}, e, {
                    params: Object.assign({}, u, e.params),
                    pathname: J([
                      c,
                      i.encodeLocation
                        ? i.encodeLocation(e.pathname).pathname
                        : e.pathname,
                    ]),
                    pathnameBase:
                      "/" === e.pathnameBase
                        ? c
                        : J([
                            c,
                            i.encodeLocation
                              ? i.encodeLocation(e.pathnameBase).pathname
                              : e.pathnameBase,
                          ]),
                  });
                }),
              s,
              o || void 0
            );
          return r && m
            ? t.createElement(
                ge.Provider,
                {
                  value: {
                    location: se(
                      {
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default",
                      },
                      a
                    ),
                    navigationType: e.Pop,
                  },
                },
                m
              )
            : m;
        })(i && !r ? i.router.routes : Fe(r), a);
      }
      !(function (e) {
        (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error");
      })(Ae || (Ae = {}));
      var Ie = new Promise(function () {});
      t.Component;
      function Fe(e, n) {
        void 0 === n && (n = []);
        var r = [];
        return (
          t.Children.forEach(e, function (e, a) {
            if (t.isValidElement(e))
              if (e.type !== t.Fragment) {
                e.type !== Re && j(!1),
                  e.props.index && e.props.children && j(!1);
                var i = [].concat(f(n), [a]),
                  o = {
                    id: e.props.id || i.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    hasErrorBoundary: null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                  };
                e.props.children && (o.children = Fe(e.props.children, i)),
                  r.push(o);
              } else r.push.apply(r, Fe(e.props.children, n));
          }),
          r
        );
      }
      var ze = n(184);
      function Ue(e, t, n) {
        return (
          (t = h(t)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function Be(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function We(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? Be(Object(n), !0).forEach(function (t) {
                Ue(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : Be(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      var He = (0, t.createContext)({
          transformPagePoint: function (e) {
            return e;
          },
          isStatic: !1,
          reducedMotion: "never",
        }),
        $e = (0, t.createContext)({});
      var Qe = (0, t.createContext)(null),
        Ye = "undefined" !== typeof document,
        qe = Ye ? t.useLayoutEffect : t.useEffect,
        Ge = (0, t.createContext)({ strict: !1 });
      function Xe(e, n, r, a) {
        var i = (0, t.useContext)($e).visualElement,
          o = (0, t.useContext)(Ge),
          s = (0, t.useContext)(Qe),
          l = (0, t.useContext)(He).reducedMotion,
          u = (0, t.useRef)();
        (a = a || o.renderer),
          !u.current &&
            a &&
            (u.current = a(e, {
              visualState: n,
              parent: i,
              props: r,
              presenceContext: s,
              blockInitialAnimation: !!s && !1 === s.initial,
              reducedMotionConfig: l,
            }));
        var c = u.current;
        return (
          (0, t.useInsertionEffect)(function () {
            c && c.update(r, s);
          }),
          qe(function () {
            c && c.render();
          }),
          (0, t.useEffect)(function () {
            c && c.updateFeatures();
          }),
          (window.HandoffAppearAnimations ? qe : t.useEffect)(function () {
            c && c.animationState && c.animationState.animateChanges();
          }),
          c
        );
      }
      function Ke(e) {
        return (
          "object" === typeof e &&
          Object.prototype.hasOwnProperty.call(e, "current")
        );
      }
      function Ze(e) {
        return "string" === typeof e || Array.isArray(e);
      }
      function Je(e) {
        return "object" === typeof e && "function" === typeof e.start;
      }
      var et = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        tt = ["initial"].concat(et);
      function nt(e) {
        return (
          Je(e.animate) ||
          tt.some(function (t) {
            return Ze(e[t]);
          })
        );
      }
      function rt(e) {
        return Boolean(nt(e) || e.variants);
      }
      function at(e) {
        var n = (function (e, t) {
            if (nt(e)) {
              var n = e.initial,
                r = e.animate;
              return {
                initial: !1 === n || Ze(n) ? n : void 0,
                animate: Ze(r) ? r : void 0,
              };
            }
            return !1 !== e.inherit ? t : {};
          })(e, (0, t.useContext)($e)),
          r = n.initial,
          a = n.animate;
        return (0, t.useMemo)(
          function () {
            return { initial: r, animate: a };
          },
          [it(r), it(a)]
        );
      }
      function it(e) {
        return Array.isArray(e) ? e.join(" ") : e;
      }
      var ot = {
          animation: [
            "animate",
            "exit",
            "variants",
            "whileHover",
            "whileTap",
            "whileFocus",
            "whileDrag",
            "whileInView",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        st = {},
        lt = function (e) {
          st[e] = {
            isEnabled: function (t) {
              return ot[e].some(function (e) {
                return !!t[e];
              });
            },
          };
        };
      for (var ut in ot) lt(ut);
      function ct(e) {
        var n = (0, t.useRef)(null);
        return null === n.current && (n.current = e()), n.current;
      }
      var ft = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
        dt = 1;
      var pt = (0, t.createContext)({}),
        ht = (0, t.createContext)({}),
        vt = Symbol.for("motionComponentSymbol");
      function mt(e) {
        var n = e.preloadedFeatures,
          r = e.createVisualElement,
          a = e.useRender,
          i = e.useVisualState,
          o = e.Component;
        n &&
          (function (e) {
            for (var t in e) st[t] = We(We({}, st[t]), e[t]);
          })(n);
        var s = (0, t.forwardRef)(function (e, s) {
          var l,
            u = We(
              We(We({}, (0, t.useContext)(He)), e),
              {},
              { layoutId: yt(e) }
            ),
            c = u.isStatic,
            f = at(e),
            d = c
              ? void 0
              : ct(function () {
                  if (ft.hasEverUpdated) return dt++;
                }),
            p = i(e, c);
          if (!c && Ye) {
            f.visualElement = Xe(o, p, u, r);
            var h = (0, t.useContext)(ht),
              v = (0, t.useContext)(Ge).strict;
            f.visualElement &&
              (l = f.visualElement.loadFeatures(u, v, n, d, h));
          }
          return t.createElement(
            $e.Provider,
            { value: f },
            l && f.visualElement
              ? t.createElement(l, We({ visualElement: f.visualElement }, u))
              : null,
            a(
              o,
              e,
              d,
              (function (e, n, r) {
                return (0, t.useCallback)(
                  function (t) {
                    t && e.mount && e.mount(t),
                      n && (t ? n.mount(t) : n.unmount()),
                      r &&
                        ("function" === typeof r
                          ? r(t)
                          : Ke(r) && (r.current = t));
                  },
                  [n]
                );
              })(p, f.visualElement, s),
              p,
              c,
              f.visualElement
            )
          );
        });
        return (s[vt] = o), s;
      }
      function yt(e) {
        var n = e.layoutId,
          r = (0, t.useContext)(pt).id;
        return r && void 0 !== n ? r + "-" + n : n;
      }
      function gt(e) {
        function t(t) {
          return mt(
            e(
              t,
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {}
            )
          );
        }
        if ("undefined" === typeof Proxy) return t;
        var n = new Map();
        return new Proxy(t, {
          get: function (e, r) {
            return n.has(r) || n.set(r, t(r)), n.get(r);
          },
        });
      }
      var bt = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function wt(e) {
        return (
          "string" === typeof e &&
          !e.includes("-") &&
          !!(bt.indexOf(e) > -1 || /[A-Z]/.test(e))
        );
      }
      var xt = {};
      var kt = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        St = new Set(kt);
      function Et(e, t) {
        var n = t.layout,
          r = t.layoutId;
        return (
          St.has(e) ||
          e.startsWith("origin") ||
          ((n || void 0 !== r) && (!!xt[e] || "opacity" === e))
        );
      }
      var Ct = function (e) {
          return Boolean(e && e.getVelocity);
        },
        Pt = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        Tt = kt.length;
      var jt = function (e) {
          return function (t) {
            return "string" === typeof t && t.startsWith(e);
          };
        },
        _t = jt("--"),
        Nt = jt("var(--"),
        Ot = function (e, t) {
          return t && "number" === typeof e ? t.transform(e) : e;
        },
        Lt = function (e, t, n) {
          return Math.min(Math.max(n, e), t);
        },
        At = {
          test: function (e) {
            return "number" === typeof e;
          },
          parse: parseFloat,
          transform: function (e) {
            return e;
          },
        },
        Mt = We(
          We({}, At),
          {},
          {
            transform: function (e) {
              return Lt(0, 1, e);
            },
          }
        ),
        Rt = We(We({}, At), {}, { default: 1 }),
        Dt = function (e) {
          return Math.round(1e5 * e) / 1e5;
        },
        Vt = /(-)?([\d]*\.?[\d])+/g,
        It =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        Ft =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function zt(e) {
        return "string" === typeof e;
      }
      var Ut = function (e) {
          return {
            test: function (t) {
              return zt(t) && t.endsWith(e) && 1 === t.split(" ").length;
            },
            parse: parseFloat,
            transform: function (t) {
              return "".concat(t).concat(e);
            },
          };
        },
        Bt = Ut("deg"),
        Wt = Ut("%"),
        Ht = Ut("px"),
        $t = Ut("vh"),
        Qt = Ut("vw"),
        Yt = We(
          We({}, Wt),
          {},
          {
            parse: function (e) {
              return Wt.parse(e) / 100;
            },
            transform: function (e) {
              return Wt.transform(100 * e);
            },
          }
        ),
        qt = We(We({}, At), {}, { transform: Math.round }),
        Gt = {
          borderWidth: Ht,
          borderTopWidth: Ht,
          borderRightWidth: Ht,
          borderBottomWidth: Ht,
          borderLeftWidth: Ht,
          borderRadius: Ht,
          radius: Ht,
          borderTopLeftRadius: Ht,
          borderTopRightRadius: Ht,
          borderBottomRightRadius: Ht,
          borderBottomLeftRadius: Ht,
          width: Ht,
          maxWidth: Ht,
          height: Ht,
          maxHeight: Ht,
          size: Ht,
          top: Ht,
          right: Ht,
          bottom: Ht,
          left: Ht,
          padding: Ht,
          paddingTop: Ht,
          paddingRight: Ht,
          paddingBottom: Ht,
          paddingLeft: Ht,
          margin: Ht,
          marginTop: Ht,
          marginRight: Ht,
          marginBottom: Ht,
          marginLeft: Ht,
          rotate: Bt,
          rotateX: Bt,
          rotateY: Bt,
          rotateZ: Bt,
          scale: Rt,
          scaleX: Rt,
          scaleY: Rt,
          scaleZ: Rt,
          skew: Bt,
          skewX: Bt,
          skewY: Bt,
          distance: Ht,
          translateX: Ht,
          translateY: Ht,
          translateZ: Ht,
          x: Ht,
          y: Ht,
          z: Ht,
          perspective: Ht,
          transformPerspective: Ht,
          opacity: Mt,
          originX: Yt,
          originY: Yt,
          originZ: Ht,
          zIndex: qt,
          fillOpacity: Mt,
          strokeOpacity: Mt,
          numOctaves: qt,
        };
      function Xt(e, t, n, r) {
        var a = e.style,
          i = e.vars,
          o = e.transform,
          s = e.transformOrigin,
          l = !1,
          u = !1,
          c = !0;
        for (var f in t) {
          var d = t[f];
          if (_t(f)) i[f] = d;
          else {
            var p = Gt[f],
              h = Ot(d, p);
            if (St.has(f)) {
              if (((l = !0), (o[f] = h), !c)) continue;
              d !== (p.default || 0) && (c = !1);
            } else f.startsWith("origin") ? ((u = !0), (s[f] = h)) : (a[f] = h);
          }
        }
        if (
          (t.transform ||
            (l || r
              ? (a.transform = (function (e, t, n, r) {
                  for (
                    var a = t.enableHardwareAcceleration,
                      i = void 0 === a || a,
                      o = t.allowTransformNone,
                      s = void 0 === o || o,
                      l = "",
                      u = 0;
                    u < Tt;
                    u++
                  ) {
                    var c = kt[u];
                    if (void 0 !== e[c]) {
                      var f = Pt[c] || c;
                      l += "".concat(f, "(").concat(e[c], ") ");
                    }
                  }
                  return (
                    i && !e.z && (l += "translateZ(0)"),
                    (l = l.trim()),
                    r ? (l = r(e, n ? "" : l)) : s && n && (l = "none"),
                    l
                  );
                })(e.transform, n, c, r))
              : a.transform && (a.transform = "none")),
          u)
        ) {
          var v = s.originX,
            m = void 0 === v ? "50%" : v,
            y = s.originY,
            g = void 0 === y ? "50%" : y,
            b = s.originZ,
            w = void 0 === b ? 0 : b;
          a.transformOrigin = "".concat(m, " ").concat(g, " ").concat(w);
        }
      }
      var Kt = function () {
        return { style: {}, transform: {}, transformOrigin: {}, vars: {} };
      };
      function Zt(e, t, n) {
        for (var r in t) Ct(t[r]) || Et(r, n) || (e[r] = t[r]);
      }
      function Jt(e, n, r) {
        var a = {};
        return (
          Zt(a, e.style || {}, e),
          Object.assign(
            a,
            (function (e, n, r) {
              var a = e.transformTemplate;
              return (0, t.useMemo)(
                function () {
                  var e = Kt();
                  return (
                    Xt(e, n, { enableHardwareAcceleration: !r }, a),
                    Object.assign({}, e.vars, e.style)
                  );
                },
                [n]
              );
            })(e, n, r)
          ),
          e.transformValues ? e.transformValues(a) : a
        );
      }
      function en(e, t, n) {
        var r = {},
          a = Jt(e, t, n);
        return (
          e.drag &&
            !1 !== e.dragListener &&
            ((r.draggable = !1),
            (a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none"),
            (a.touchAction =
              !0 === e.drag
                ? "none"
                : "pan-".concat("x" === e.drag ? "y" : "x"))),
          void 0 === e.tabIndex &&
            (e.onTap || e.onTapStart || e.whileTap) &&
            (r.tabIndex = 0),
          (r.style = a),
          r
        );
      }
      var tn = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function nn(e) {
        return (
          e.startsWith("while") ||
          (e.startsWith("drag") && "draggable" !== e) ||
          e.startsWith("layout") ||
          e.startsWith("onTap") ||
          e.startsWith("onPan") ||
          tn.has(e)
        );
      }
      var rn,
        an = function (e) {
          return !nn(e);
        };
      try {
        (rn = require("@emotion/is-prop-valid").default) &&
          (an = function (e) {
            return e.startsWith("on") ? !nn(e) : rn(e);
          });
      } catch (Au) {}
      function on(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function sn(e, t, n) {
        return "string" === typeof e ? e : Ht.transform(t + n * e);
      }
      var ln = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        un = { offset: "strokeDashoffset", array: "strokeDasharray" };
      var cn = [
        "attrX",
        "attrY",
        "originX",
        "originY",
        "pathLength",
        "pathSpacing",
        "pathOffset",
      ];
      function fn(e, t, n, r, a) {
        var i = t.attrX,
          o = t.attrY,
          s = t.originX,
          l = t.originY,
          u = t.pathLength,
          c = t.pathSpacing,
          f = void 0 === c ? 1 : c,
          d = t.pathOffset,
          p = void 0 === d ? 0 : d;
        if ((Xt(e, on(t, cn), n, a), r))
          e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        else {
          (e.attrs = e.style), (e.style = {});
          var h = e.attrs,
            v = e.style,
            m = e.dimensions;
          h.transform && (m && (v.transform = h.transform), delete h.transform),
            m &&
              (void 0 !== s || void 0 !== l || v.transform) &&
              (v.transformOrigin = (function (e, t, n) {
                var r = sn(t, e.x, e.width),
                  a = sn(n, e.y, e.height);
                return "".concat(r, " ").concat(a);
              })(m, void 0 !== s ? s : 0.5, void 0 !== l ? l : 0.5)),
            void 0 !== i && (h.x = i),
            void 0 !== o && (h.y = o),
            void 0 !== u &&
              (function (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : 1,
                  r =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  a =
                    !(arguments.length > 4 && void 0 !== arguments[4]) ||
                    arguments[4];
                e.pathLength = 1;
                var i = a ? ln : un;
                e[i.offset] = Ht.transform(-r);
                var o = Ht.transform(t),
                  s = Ht.transform(n);
                e[i.array] = "".concat(o, " ").concat(s);
              })(h, u, f, p, !1);
        }
      }
      var dn = function () {
          return We(We({}, Kt()), {}, { attrs: {} });
        },
        pn = function (e) {
          return "string" === typeof e && "svg" === e.toLowerCase();
        };
      function hn(e, n, r, a) {
        var i = (0, t.useMemo)(
          function () {
            var t = dn();
            return (
              fn(
                t,
                n,
                { enableHardwareAcceleration: !1 },
                pn(a),
                e.transformTemplate
              ),
              We(We({}, t.attrs), {}, { style: We({}, t.style) })
            );
          },
          [n]
        );
        if (e.style) {
          var o = {};
          Zt(o, e.style, e), (i.style = We(We({}, o), i.style));
        }
        return i;
      }
      function vn() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return function (n, r, a, i, o, s) {
          var l = o.latestValues,
            u = (wt(n) ? hn : en)(r, l, s, n),
            c = (function (e, t, n) {
              var r = {};
              for (var a in e)
                ("values" === a && "object" === typeof e.values) ||
                  ((an(a) ||
                    (!0 === n && nn(a)) ||
                    (!t && !nn(a)) ||
                    (e.draggable && a.startsWith("onDrag"))) &&
                    (r[a] = e[a]));
              return r;
            })(r, "string" === typeof n, e),
            f = We(We(We({}, c), u), {}, { ref: i }),
            d = r.children,
            p = (0, t.useMemo)(
              function () {
                return Ct(d) ? d.get() : d;
              },
              [d]
            );
          return (
            a && (f["data-projection-id"] = a),
            (0, t.createElement)(n, We(We({}, f), {}, { children: p }))
          );
        };
      }
      var mn = function (e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      };
      function yn(e, t, n, r) {
        var a = t.style,
          i = t.vars;
        for (var o in (Object.assign(e.style, a, r && r.getProjectionStyles(n)),
        i))
          e.style.setProperty(o, i[o]);
      }
      var gn = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
      function bn(e, t, n, r) {
        for (var a in (yn(e, t, void 0, r), t.attrs))
          e.setAttribute(gn.has(a) ? a : mn(a), t.attrs[a]);
      }
      function wn(e, t) {
        var n = e.style,
          r = {};
        for (var a in n)
          (Ct(n[a]) || (t.style && Ct(t.style[a])) || Et(a, e)) &&
            (r[a] = n[a]);
        return r;
      }
      function xn(e, t) {
        var n = wn(e, t);
        for (var r in e) {
          if (Ct(e[r]) || Ct(t[r]))
            n["x" === r || "y" === r ? "attr" + r.toUpperCase() : r] = e[r];
        }
        return n;
      }
      function kn(e, t, n) {
        var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
          a =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
        return (
          "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)),
          "string" === typeof t && (t = e.variants && e.variants[t]),
          "function" === typeof t && (t = t(void 0 !== n ? n : e.custom, r, a)),
          t
        );
      }
      var Sn = function (e) {
          return Array.isArray(e);
        },
        En = function (e) {
          return Boolean(e && "object" === typeof e && e.mix && e.toValue);
        },
        Cn = function (e) {
          return Sn(e) ? e[e.length - 1] || 0 : e;
        };
      function Pn(e) {
        var t = Ct(e) ? e.get() : e;
        return En(t) ? t.toValue() : t;
      }
      var Tn = ["transitionEnd", "transition"];
      var jn = function (e) {
        return function (n, r) {
          var a = (0, t.useContext)($e),
            i = (0, t.useContext)(Qe),
            o = function () {
              return (function (e, t, n, r) {
                var a = e.scrapeMotionValuesFromProps,
                  i = e.createRenderState,
                  o = e.onMount,
                  s = { latestValues: _n(t, n, r, a), renderState: i() };
                return (
                  o &&
                    (s.mount = function (e) {
                      return o(t, e, s);
                    }),
                  s
                );
              })(e, n, a, i);
            };
          return r ? o() : ct(o);
        };
      };
      function _n(e, t, n, r) {
        var a = {},
          i = r(e, {});
        for (var o in i) a[o] = Pn(i[o]);
        var s = e.initial,
          l = e.animate,
          u = nt(e),
          c = rt(e);
        t &&
          c &&
          !u &&
          !1 !== e.inherit &&
          (void 0 === s && (s = t.initial), void 0 === l && (l = t.animate));
        var f = !!n && !1 === n.initial,
          d = (f = f || !1 === s) ? l : s;
        d &&
          "boolean" !== typeof d &&
          !Je(d) &&
          (Array.isArray(d) ? d : [d]).forEach(function (t) {
            var n = kn(e, t);
            if (n) {
              var r = n.transitionEnd,
                i = (n.transition, on(n, Tn));
              for (var o in i) {
                var s = i[o];
                if (Array.isArray(s)) s = s[f ? s.length - 1 : 0];
                null !== s && (a[o] = s);
              }
              for (var l in r) a[l] = r[l];
            }
          });
        return a;
      }
      var Nn = {
          useVisualState: jn({
            scrapeMotionValuesFromProps: xn,
            createRenderState: dn,
            onMount: function (e, t, n) {
              var r = n.renderState,
                a = n.latestValues;
              try {
                r.dimensions =
                  "function" === typeof t.getBBox
                    ? t.getBBox()
                    : t.getBoundingClientRect();
              } catch (i) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              fn(
                r,
                a,
                { enableHardwareAcceleration: !1 },
                pn(t.tagName),
                e.transformTemplate
              ),
                bn(t, r);
            },
          }),
        },
        On = {
          useVisualState: jn({
            scrapeMotionValuesFromProps: wn,
            createRenderState: Kt,
          }),
        };
      function Ln(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3]
            ? arguments[3]
            : { passive: !0 };
        return (
          e.addEventListener(t, n, r),
          function () {
            return e.removeEventListener(t, n);
          }
        );
      }
      var An = function (e) {
        return "mouse" === e.pointerType
          ? "number" !== typeof e.button || e.button <= 0
          : !1 !== e.isPrimary;
      };
      function Mn(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "page";
        return { point: { x: e[t + "X"], y: e[t + "Y"] } };
      }
      var Rn = function (e) {
        return function (t) {
          return An(t) && e(t, Mn(t));
        };
      };
      function Dn(e, t, n, r) {
        return Ln(e, t, Rn(n), r);
      }
      var Vn = function (e, t) {
          return function (n) {
            return t(e(n));
          };
        },
        In = function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce(Vn);
        };
      function Fn(e) {
        var t = null;
        return function () {
          return (
            null === t &&
            ((t = e),
            function () {
              t = null;
            })
          );
        };
      }
      var zn = Fn("dragHorizontal"),
        Un = Fn("dragVertical");
      function Bn(e) {
        var t = !1;
        if ("y" === e) t = Un();
        else if ("x" === e) t = zn();
        else {
          var n = zn(),
            r = Un();
          n && r
            ? (t = function () {
                n(), r();
              })
            : (n && n(), r && r());
        }
        return t;
      }
      function Wn() {
        var e = Bn(!0);
        return !e || (e(), !1);
      }
      var Hn = (function () {
        function e(t) {
          d(this, e), (this.isMounted = !1), (this.node = t);
        }
        return m(e, [{ key: "update", value: function () {} }]), e;
      })();
      function $n(e, t) {
        var n = "pointer" + (t ? "enter" : "leave"),
          r = "onHover" + (t ? "Start" : "End");
        return Dn(
          e.current,
          n,
          function (n, a) {
            if ("touch" !== n.type && !Wn()) {
              var i = e.getProps();
              e.animationState &&
                i.whileHover &&
                e.animationState.setActive("whileHover", t),
                i[r] && i[r](n, a);
            }
          },
          { passive: !e.getProps()[r] }
        );
      }
      var Qn = (function (e) {
          g(n, e);
          var t = k(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return (
            m(n, [
              {
                key: "mount",
                value: function () {
                  this.unmount = In($n(this.node, !0), $n(this.node, !1));
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(Hn),
        Yn = (function (e) {
          g(n, e);
          var t = k(n);
          function n() {
            var e;
            return (
              d(this, n), ((e = t.apply(this, arguments)).isActive = !1), e
            );
          }
          return (
            m(n, [
              {
                key: "onFocus",
                value: function () {
                  var e = !1;
                  try {
                    e = this.node.current.matches(":focus-visible");
                  } catch (t) {
                    e = !0;
                  }
                  e &&
                    this.node.animationState &&
                    (this.node.animationState.setActive("whileFocus", !0),
                    (this.isActive = !0));
                },
              },
              {
                key: "onBlur",
                value: function () {
                  this.isActive &&
                    this.node.animationState &&
                    (this.node.animationState.setActive("whileFocus", !1),
                    (this.isActive = !1));
                },
              },
              {
                key: "mount",
                value: function () {
                  var e = this;
                  this.unmount = In(
                    Ln(this.node.current, "focus", function () {
                      return e.onFocus();
                    }),
                    Ln(this.node.current, "blur", function () {
                      return e.onBlur();
                    })
                  );
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(Hn),
        qn = function e(t, n) {
          return !!n && (t === n || e(t, n.parentElement));
        },
        Gn = function (e) {
          return e;
        };
      function Xn(e, t) {
        if (t) {
          var n = new PointerEvent("pointer" + e);
          t(n, Mn(n));
        }
      }
      var Kn = (function (e) {
          g(n, e);
          var t = k(n);
          function n() {
            var e;
            return (
              d(this, n),
              ((e = t.apply(this, arguments)).removeStartListeners = Gn),
              (e.removeEndListeners = Gn),
              (e.removeAccessibleListeners = Gn),
              (e.startPointerPress = function (t, n) {
                if ((e.removeEndListeners(), !e.isPressing)) {
                  var r = e.node.getProps(),
                    a = Dn(
                      window,
                      "pointerup",
                      function (t, n) {
                        if (e.checkPressEnd()) {
                          var r = e.node.getProps(),
                            a = r.onTap,
                            i = r.onTapCancel;
                          qn(e.node.current, t.target)
                            ? a && a(t, n)
                            : i && i(t, n);
                        }
                      },
                      { passive: !(r.onTap || r.onPointerUp) }
                    ),
                    i = Dn(
                      window,
                      "pointercancel",
                      function (t, n) {
                        return e.cancelPress(t, n);
                      },
                      { passive: !(r.onTapCancel || r.onPointerCancel) }
                    );
                  (e.removeEndListeners = In(a, i)), e.startPress(t, n);
                }
              }),
              (e.startAccessiblePress = function () {
                var t = Ln(e.node.current, "keydown", function (t) {
                    if ("Enter" === t.key && !e.isPressing) {
                      e.removeEndListeners(),
                        (e.removeEndListeners = Ln(
                          e.node.current,
                          "keyup",
                          function (t) {
                            "Enter" === t.key &&
                              e.checkPressEnd() &&
                              Xn("up", e.node.getProps().onTap);
                          }
                        )),
                        Xn("down", function (t, n) {
                          e.startPress(t, n);
                        });
                    }
                  }),
                  n = Ln(e.node.current, "blur", function () {
                    e.isPressing &&
                      Xn("cancel", function (t, n) {
                        return e.cancelPress(t, n);
                      });
                  });
                e.removeAccessibleListeners = In(t, n);
              }),
              e
            );
          }
          return (
            m(n, [
              {
                key: "startPress",
                value: function (e, t) {
                  this.isPressing = !0;
                  var n = this.node.getProps(),
                    r = n.onTapStart;
                  n.whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !0),
                    r && r(e, t);
                },
              },
              {
                key: "checkPressEnd",
                value: function () {
                  return (
                    this.removeEndListeners(),
                    (this.isPressing = !1),
                    this.node.getProps().whileTap &&
                      this.node.animationState &&
                      this.node.animationState.setActive("whileTap", !1),
                    !Wn()
                  );
                },
              },
              {
                key: "cancelPress",
                value: function (e, t) {
                  if (this.checkPressEnd()) {
                    var n = this.node.getProps().onTapCancel;
                    n && n(e, t);
                  }
                },
              },
              {
                key: "mount",
                value: function () {
                  var e = this.node.getProps(),
                    t = Dn(
                      this.node.current,
                      "pointerdown",
                      this.startPointerPress,
                      { passive: !(e.onTapStart || e.onPointerStart) }
                    ),
                    n = Ln(
                      this.node.current,
                      "focus",
                      this.startAccessiblePress
                    );
                  this.removeStartListeners = In(t, n);
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.removeStartListeners(),
                    this.removeEndListeners(),
                    this.removeAccessibleListeners();
                },
              },
            ]),
            n
          );
        })(Hn),
        Zn = ["root"],
        Jn = new WeakMap(),
        er = new WeakMap(),
        tr = function (e) {
          var t = Jn.get(e.target);
          t && t(e);
        },
        nr = function (e) {
          e.forEach(tr);
        };
      function rr(e, t, n) {
        var r = (function (e) {
          var t = e.root,
            n = on(e, Zn),
            r = t || document;
          er.has(r) || er.set(r, {});
          var a = er.get(r),
            i = JSON.stringify(n);
          return (
            a[i] || (a[i] = new IntersectionObserver(nr, We({ root: t }, n))),
            a[i]
          );
        })(t);
        return (
          Jn.set(e, n),
          r.observe(e),
          function () {
            Jn.delete(e), r.unobserve(e);
          }
        );
      }
      var ar = { some: 0, all: 1 },
        ir = (function (e) {
          g(n, e);
          var t = k(n);
          function n() {
            var e;
            return (
              d(this, n),
              ((e = t.apply(this, arguments)).hasEnteredView = !1),
              (e.isInView = !1),
              e
            );
          }
          return (
            m(n, [
              {
                key: "startObserver",
                value: function () {
                  var e = this;
                  this.unmount();
                  var t = this.node.getProps().viewport,
                    n = void 0 === t ? {} : t,
                    r = n.root,
                    a = n.margin,
                    i = n.amount,
                    o = void 0 === i ? "some" : i,
                    s = n.once,
                    l = {
                      root: r ? r.current : void 0,
                      rootMargin: a,
                      threshold: "number" === typeof o ? o : ar[o],
                    };
                  return rr(this.node.current, l, function (t) {
                    var n = t.isIntersecting;
                    if (
                      e.isInView !== n &&
                      ((e.isInView = n), !s || n || !e.hasEnteredView)
                    ) {
                      n && (e.hasEnteredView = !0),
                        e.node.animationState &&
                          e.node.animationState.setActive("whileInView", n);
                      var r = e.node.getProps(),
                        a = r.onViewportEnter,
                        i = r.onViewportLeave,
                        o = n ? a : i;
                      o && o(t);
                    }
                  });
                },
              },
              {
                key: "mount",
                value: function () {
                  this.startObserver();
                },
              },
              {
                key: "update",
                value: function () {
                  if ("undefined" !== typeof IntersectionObserver) {
                    var e = this.node,
                      t = e.props,
                      n = e.prevProps,
                      r = ["amount", "margin", "root"].some(
                        (function (e) {
                          var t = e.viewport,
                            n = void 0 === t ? {} : t,
                            r =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {},
                            a = r.viewport,
                            i = void 0 === a ? {} : a;
                          return function (e) {
                            return n[e] !== i[e];
                          };
                        })(t, n)
                      );
                    r && this.startObserver();
                  }
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(Hn);
      var or = {
        inView: { Feature: ir },
        tap: { Feature: Kn },
        focus: { Feature: Yn },
        hover: { Feature: Qn },
      };
      function sr(e, t) {
        if (!Array.isArray(t)) return !1;
        var n = t.length;
        if (n !== e.length) return !1;
        for (var r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
        return !0;
      }
      var lr = function (e) {
          return /^\-?\d*\.?\d+$/.test(e);
        },
        ur = function (e) {
          return /^0[^.\s]+$/.test(e);
        },
        cr = { delta: 0, timestamp: 0 },
        fr = (1 / 60) * 1e3,
        dr =
          "undefined" !== typeof performance
            ? function () {
                return performance.now();
              }
            : function () {
                return Date.now();
              },
        pr =
          "undefined" !== typeof window
            ? function (e) {
                return window.requestAnimationFrame(e);
              }
            : function (e) {
                return setTimeout(function () {
                  return e(dr());
                }, fr);
              };
      var hr = !0,
        vr = !1,
        mr = !1,
        yr = ["read", "update", "preRender", "render", "postRender"],
        gr = yr.reduce(function (e, t) {
          return (
            (e[t] = (function (e) {
              var t = [],
                n = [],
                r = 0,
                a = !1,
                i = !1,
                o = new WeakSet(),
                s = {
                  schedule: function (e) {
                    var i =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2] &&
                        a,
                      s = i ? t : n;
                    return (
                      arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1] &&
                        o.add(e),
                      -1 === s.indexOf(e) &&
                        (s.push(e), i && a && (r = t.length)),
                      e
                    );
                  },
                  cancel: function (e) {
                    var t = n.indexOf(e);
                    -1 !== t && n.splice(t, 1), o.delete(e);
                  },
                  process: function (l) {
                    if (a) i = !0;
                    else {
                      a = !0;
                      var u = [n, t];
                      if (((t = u[0]), ((n = u[1]).length = 0), (r = t.length)))
                        for (var c = 0; c < r; c++) {
                          var f = t[c];
                          f(l), o.has(f) && (s.schedule(f), e());
                        }
                      (a = !1), i && ((i = !1), s.process(l));
                    }
                  },
                };
              return s;
            })(function () {
              return (vr = !0);
            })),
            e
          );
        }, {}),
        br = yr.reduce(function (e, t) {
          var n = gr[t];
          return (
            (e[t] = function (e) {
              var t =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1],
                r =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2];
              return vr || Er(), n.schedule(e, t, r);
            }),
            e
          );
        }, {}),
        wr = yr.reduce(function (e, t) {
          return (e[t] = gr[t].cancel), e;
        }, {}),
        xr = yr.reduce(function (e, t) {
          return (
            (e[t] = function () {
              return gr[t].process(cr);
            }),
            e
          );
        }, {}),
        kr = function (e) {
          return gr[e].process(cr);
        },
        Sr = function e(t) {
          (vr = !1),
            (cr.delta = hr ? fr : Math.max(Math.min(t - cr.timestamp, 40), 1)),
            (cr.timestamp = t),
            (mr = !0),
            yr.forEach(kr),
            (mr = !1),
            vr && ((hr = !1), pr(e));
        },
        Er = function () {
          (vr = !0), (hr = !0), mr || pr(Sr);
        };
      function Cr(e, t) {
        -1 === e.indexOf(t) && e.push(t);
      }
      function Pr(e, t) {
        var n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      var Tr = (function () {
        function e() {
          d(this, e), (this.subscriptions = []);
        }
        return (
          m(e, [
            {
              key: "add",
              value: function (e) {
                var t = this;
                return (
                  Cr(this.subscriptions, e),
                  function () {
                    return Pr(t.subscriptions, e);
                  }
                );
              },
            },
            {
              key: "notify",
              value: function (e, t, n) {
                var r = this.subscriptions.length;
                if (r)
                  if (1 === r) this.subscriptions[0](e, t, n);
                  else
                    for (var a = 0; a < r; a++) {
                      var i = this.subscriptions[a];
                      i && i(e, t, n);
                    }
              },
            },
            {
              key: "getSize",
              value: function () {
                return this.subscriptions.length;
              },
            },
            {
              key: "clear",
              value: function () {
                this.subscriptions.length = 0;
              },
            },
          ]),
          e
        );
      })();
      function jr(e, t) {
        return t ? e * (1e3 / t) : 0;
      }
      var _r = function (e) {
          return !isNaN(parseFloat(e));
        },
        Nr = (function () {
          function e(t) {
            var n = this,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            d(this, e),
              (this.version = "10.0.1"),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.canTrackVelocity = !1),
              (this.events = {}),
              (this.updateAndNotify = function (e) {
                var t =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1];
                (n.prev = n.current), (n.current = e);
                var r = cr.delta,
                  a = cr.timestamp;
                n.lastUpdated !== a &&
                  ((n.timeDelta = r),
                  (n.lastUpdated = a),
                  br.postRender(n.scheduleVelocityCheck)),
                  n.prev !== n.current &&
                    n.events.change &&
                    n.events.change.notify(n.current),
                  n.events.velocityChange &&
                    n.events.velocityChange.notify(n.getVelocity()),
                  t &&
                    n.events.renderRequest &&
                    n.events.renderRequest.notify(n.current);
              }),
              (this.scheduleVelocityCheck = function () {
                return br.postRender(n.velocityCheck);
              }),
              (this.velocityCheck = function (e) {
                e.timestamp !== n.lastUpdated &&
                  ((n.prev = n.current),
                  n.events.velocityChange &&
                    n.events.velocityChange.notify(n.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity = _r(this.current)),
              (this.owner = r.owner);
          }
          return (
            m(e, [
              {
                key: "onChange",
                value: function (e) {
                  return this.on("change", e);
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  var n = this;
                  this.events[e] || (this.events[e] = new Tr());
                  var r = this.events[e].add(t);
                  return "change" === e
                    ? function () {
                        r(),
                          br.read(function () {
                            n.events.change.getSize() || n.stop();
                          });
                      }
                    : r;
                },
              },
              {
                key: "clearListeners",
                value: function () {
                  for (var e in this.events) this.events[e].clear();
                },
              },
              {
                key: "attach",
                value: function (e, t) {
                  (this.passiveEffect = e), (this.stopPassiveEffect = t);
                },
              },
              {
                key: "set",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  t && this.passiveEffect
                    ? this.passiveEffect(e, this.updateAndNotify)
                    : this.updateAndNotify(e, t);
                },
              },
              {
                key: "setWithVelocity",
                value: function (e, t, n) {
                  this.set(t), (this.prev = e), (this.timeDelta = n);
                },
              },
              {
                key: "jump",
                value: function (e) {
                  this.updateAndNotify(e),
                    (this.prev = e),
                    this.stop(),
                    this.stopPassiveEffect && this.stopPassiveEffect();
                },
              },
              {
                key: "get",
                value: function () {
                  return this.current;
                },
              },
              {
                key: "getPrevious",
                value: function () {
                  return this.prev;
                },
              },
              {
                key: "getVelocity",
                value: function () {
                  return this.canTrackVelocity
                    ? jr(
                        parseFloat(this.current) - parseFloat(this.prev),
                        this.timeDelta
                      )
                    : 0;
                },
              },
              {
                key: "start",
                value: function (e) {
                  var t = this;
                  return (
                    this.stop(),
                    new Promise(function (n) {
                      (t.hasAnimated = !0),
                        (t.animation = e(n) || null),
                        t.events.animationStart &&
                          t.events.animationStart.notify();
                    }).then(function () {
                      t.events.animationComplete &&
                        t.events.animationComplete.notify(),
                        t.clearAnimation();
                    })
                  );
                },
              },
              {
                key: "stop",
                value: function () {
                  this.animation &&
                    (this.animation.stop(),
                    this.events.animationCancel &&
                      this.events.animationCancel.notify()),
                    this.clearAnimation();
                },
              },
              {
                key: "isAnimating",
                value: function () {
                  return !!this.animation;
                },
              },
              {
                key: "clearAnimation",
                value: function () {
                  this.animation = null;
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.clearListeners(),
                    this.stop(),
                    this.stopPassiveEffect && this.stopPassiveEffect();
                },
              },
            ]),
            e
          );
        })();
      function Or(e, t) {
        return new Nr(e, t);
      }
      var Lr = function (e, t) {
          return function (n) {
            return Boolean(
              (zt(n) && Ft.test(n) && n.startsWith(e)) ||
                (t && Object.prototype.hasOwnProperty.call(n, t))
            );
          };
        },
        Ar = function (e, t, n) {
          return function (r) {
            var a;
            if (!zt(r)) return r;
            var i = u(r.match(Vt), 4),
              o = i[0],
              s = i[1],
              l = i[2],
              c = i[3];
            return (
              Ue((a = {}), e, parseFloat(o)),
              Ue(a, t, parseFloat(s)),
              Ue(a, n, parseFloat(l)),
              Ue(a, "alpha", void 0 !== c ? parseFloat(c) : 1),
              a
            );
          };
        },
        Mr = We(
          We({}, At),
          {},
          {
            transform: function (e) {
              return Math.round(
                (function (e) {
                  return Lt(0, 255, e);
                })(e)
              );
            },
          }
        ),
        Rr = {
          test: Lr("rgb", "red"),
          parse: Ar("red", "green", "blue"),
          transform: function (e) {
            var t = e.red,
              n = e.green,
              r = e.blue,
              a = e.alpha,
              i = void 0 === a ? 1 : a;
            return (
              "rgba(" +
              Mr.transform(t) +
              ", " +
              Mr.transform(n) +
              ", " +
              Mr.transform(r) +
              ", " +
              Dt(Mt.transform(i)) +
              ")"
            );
          },
        };
      var Dr = {
          test: Lr("#"),
          parse: function (e) {
            var t = "",
              n = "",
              r = "",
              a = "";
            return (
              e.length > 5
                ? ((t = e.substring(1, 3)),
                  (n = e.substring(3, 5)),
                  (r = e.substring(5, 7)),
                  (a = e.substring(7, 9)))
                : ((t = e.substring(1, 2)),
                  (n = e.substring(2, 3)),
                  (r = e.substring(3, 4)),
                  (a = e.substring(4, 5)),
                  (t += t),
                  (n += n),
                  (r += r),
                  (a += a)),
              {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(r, 16),
                alpha: a ? parseInt(a, 16) / 255 : 1,
              }
            );
          },
          transform: Rr.transform,
        },
        Vr = {
          test: Lr("hsl", "hue"),
          parse: Ar("hue", "saturation", "lightness"),
          transform: function (e) {
            var t = e.hue,
              n = e.saturation,
              r = e.lightness,
              a = e.alpha,
              i = void 0 === a ? 1 : a;
            return (
              "hsla(" +
              Math.round(t) +
              ", " +
              Wt.transform(Dt(n)) +
              ", " +
              Wt.transform(Dt(r)) +
              ", " +
              Dt(Mt.transform(i)) +
              ")"
            );
          },
        },
        Ir = {
          test: function (e) {
            return Rr.test(e) || Dr.test(e) || Vr.test(e);
          },
          parse: function (e) {
            return Rr.test(e)
              ? Rr.parse(e)
              : Vr.test(e)
              ? Vr.parse(e)
              : Dr.parse(e);
          },
          transform: function (e) {
            return zt(e)
              ? e
              : e.hasOwnProperty("red")
              ? Rr.transform(e)
              : Vr.transform(e);
          },
        },
        Fr = "${c}",
        zr = "${n}";
      function Ur(e) {
        "number" === typeof e && (e = "".concat(e));
        var t = [],
          n = 0,
          r = 0,
          a = e.match(It);
        a &&
          ((n = a.length),
          (e = e.replace(It, Fr)),
          t.push.apply(t, f(a.map(Ir.parse))));
        var i = e.match(Vt);
        return (
          i &&
            ((r = i.length),
            (e = e.replace(Vt, zr)),
            t.push.apply(t, f(i.map(At.parse)))),
          { values: t, numColors: n, numNumbers: r, tokenised: e }
        );
      }
      function Br(e) {
        return Ur(e).values;
      }
      function Wr(e) {
        var t = Ur(e),
          n = t.values,
          r = t.numColors,
          a = t.tokenised,
          i = n.length;
        return function (e) {
          for (var t = a, n = 0; n < i; n++)
            t = t.replace(
              n < r ? Fr : zr,
              n < r ? Ir.transform(e[n]) : Dt(e[n])
            );
          return t;
        };
      }
      var Hr = function (e) {
        return "number" === typeof e ? 0 : e;
      };
      var $r = {
          test: function (e) {
            var t, n;
            return (
              isNaN(e) &&
              zt(e) &&
              ((null === (t = e.match(Vt)) || void 0 === t
                ? void 0
                : t.length) || 0) +
                ((null === (n = e.match(It)) || void 0 === n
                  ? void 0
                  : n.length) || 0) >
                0
            );
          },
          parse: Br,
          createTransformer: Wr,
          getAnimatableNone: function (e) {
            var t = Br(e);
            return Wr(e)(t.map(Hr));
          },
        },
        Qr = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function Yr(e) {
        var t = u(e.slice(0, -1).split("("), 2),
          n = t[0],
          r = t[1];
        if ("drop-shadow" === n) return e;
        var a = u(r.match(Vt) || [], 1)[0];
        if (!a) return e;
        var i = r.replace(a, ""),
          o = Qr.has(n) ? 1 : 0;
        return a !== r && (o *= 100), n + "(" + o + i + ")";
      }
      var qr = /([a-z-]*)\(.*?\)/g,
        Gr = We(
          We({}, $r),
          {},
          {
            getAnimatableNone: function (e) {
              var t = e.match(qr);
              return t ? t.map(Yr).join(" ") : e;
            },
          }
        ),
        Xr = We(
          We({}, Gt),
          {},
          {
            color: Ir,
            backgroundColor: Ir,
            outlineColor: Ir,
            fill: Ir,
            stroke: Ir,
            borderColor: Ir,
            borderTopColor: Ir,
            borderRightColor: Ir,
            borderBottomColor: Ir,
            borderLeftColor: Ir,
            filter: Gr,
            WebkitFilter: Gr,
          }
        ),
        Kr = function (e) {
          return Xr[e];
        };
      function Zr(e, t) {
        var n = Kr(e);
        return (
          n !== Gr && (n = $r),
          n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
        );
      }
      var Jr = function (e) {
          return function (t) {
            return t.test(e);
          };
        },
        ea = [
          At,
          Ht,
          Wt,
          Bt,
          Qt,
          $t,
          {
            test: function (e) {
              return "auto" === e;
            },
            parse: function (e) {
              return e;
            },
          },
        ],
        ta = function (e) {
          return ea.find(Jr(e));
        },
        na = [].concat(f(ea), [Ir, $r]),
        ra = function (e) {
          return na.find(Jr(e));
        };
      function aa(e, t, n) {
        var r = e.getProps();
        return kn(
          r,
          t,
          void 0 !== n ? n : r.custom,
          (function (e) {
            var t = {};
            return (
              e.values.forEach(function (e, n) {
                return (t[n] = e.get());
              }),
              t
            );
          })(e),
          (function (e) {
            var t = {};
            return (
              e.values.forEach(function (e, n) {
                return (t[n] = e.getVelocity());
              }),
              t
            );
          })(e)
        );
      }
      var ia = ["transitionEnd", "transition"];
      function oa(e, t, n) {
        e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Or(n));
      }
      function sa(e, t) {
        var n = aa(e, t),
          r = n ? e.makeTargetAnimatable(n, !1) : {},
          a = r.transitionEnd,
          i = void 0 === a ? {} : a,
          o = (r.transition, on(r, ia));
        for (var s in (o = We(We({}, o), i))) {
          oa(e, s, Cn(o[s]));
        }
      }
      function la(e, t) {
        if (t) return (t[e] || t.default || t).from;
      }
      function ua(e) {
        return Boolean(Ct(e) && e.add);
      }
      var ca = "data-" + mn("framerAppearId"),
        fa = Gn,
        da = Gn;
      var pa = function (e) {
          return 1e3 * e;
        },
        ha = { current: !1 },
        va = function (e) {
          return function (t) {
            return t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2;
          };
        },
        ma = function (e) {
          return function (t) {
            return 1 - e(1 - t);
          };
        },
        ya = function (e) {
          return e * e;
        },
        ga = ma(ya),
        ba = va(ya),
        wa = function (e, t, n) {
          return -n * e + n * t + e;
        };
      function xa(e, t, n) {
        return (
          n < 0 && (n += 1),
          n > 1 && (n -= 1),
          n < 1 / 6
            ? e + 6 * (t - e) * n
            : n < 0.5
            ? t
            : n < 2 / 3
            ? e + (t - e) * (2 / 3 - n) * 6
            : e
        );
      }
      var ka = function (e, t, n) {
          var r = e * e;
          return Math.sqrt(Math.max(0, n * (t * t - r) + r));
        },
        Sa = [Dr, Rr, Vr],
        Ea = function (e) {
          return Sa.find(function (t) {
            return t.test(e);
          });
        };
      function Ca(e) {
        var t = Ea(e);
        da(
          Boolean(t),
          "'".concat(
            e,
            "' is not an animatable color. Use the equivalent color code instead."
          )
        );
        var n = t.parse(e);
        return (
          t === Vr &&
            (n = (function (e) {
              var t = e.hue,
                n = e.saturation,
                r = e.lightness,
                a = e.alpha;
              (t /= 360), (r /= 100);
              var i = 0,
                o = 0,
                s = 0;
              if ((n /= 100)) {
                var l = r < 0.5 ? r * (1 + n) : r + n - r * n,
                  u = 2 * r - l;
                (i = xa(u, l, t + 1 / 3)),
                  (o = xa(u, l, t)),
                  (s = xa(u, l, t - 1 / 3));
              } else i = o = s = r;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * s),
                alpha: a,
              };
            })(n)),
          n
        );
      }
      var Pa = function (e, t) {
        var n = Ca(e),
          r = Ca(t),
          a = We({}, n);
        return function (e) {
          return (
            (a.red = ka(n.red, r.red, e)),
            (a.green = ka(n.green, r.green, e)),
            (a.blue = ka(n.blue, r.blue, e)),
            (a.alpha = wa(n.alpha, r.alpha, e)),
            Rr.transform(a)
          );
        };
      };
      function Ta(e, t) {
        return "number" === typeof e
          ? function (n) {
              return wa(e, t, n);
            }
          : Ir.test(e)
          ? Pa(e, t)
          : Na(e, t);
      }
      var ja = function (e, t) {
          var n = f(e),
            r = n.length,
            a = e.map(function (e, n) {
              return Ta(e, t[n]);
            });
          return function (e) {
            for (var t = 0; t < r; t++) n[t] = a[t](e);
            return n;
          };
        },
        _a = function (e, t) {
          var n = We(We({}, e), t),
            r = {};
          for (var a in n)
            void 0 !== e[a] && void 0 !== t[a] && (r[a] = Ta(e[a], t[a]));
          return function (e) {
            for (var t in r) n[t] = r[t](e);
            return n;
          };
        },
        Na = function (e, t) {
          var n = $r.createTransformer(t),
            r = Ur(e),
            a = Ur(t);
          return r.numColors === a.numColors && r.numNumbers >= a.numNumbers
            ? In(ja(r.values, a.values), n)
            : (fa(
                !0,
                "Complex values '"
                  .concat(e, "' and '")
                  .concat(
                    t,
                    "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition."
                  )
              ),
              function (n) {
                return "".concat(n > 0 ? t : e);
              });
        },
        Oa = function (e, t, n) {
          var r = t - e;
          return 0 === r ? 1 : (n - e) / r;
        },
        La = function (e, t) {
          return function (n) {
            return wa(e, t, n);
          };
        };
      function Aa(e, t, n) {
        for (
          var r,
            a = [],
            i =
              n ||
              ("number" === typeof (r = e[0])
                ? La
                : "string" === typeof r
                ? Ir.test(r)
                  ? Pa
                  : Na
                : Array.isArray(r)
                ? ja
                : "object" === typeof r
                ? _a
                : La),
            o = e.length - 1,
            s = 0;
          s < o;
          s++
        ) {
          var l = i(e[s], e[s + 1]);
          if (t) {
            var u = Array.isArray(t) ? t[s] : t;
            l = In(u, l);
          }
          a.push(l);
        }
        return a;
      }
      function Ma(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.clamp,
          a = void 0 === r || r,
          i = n.ease,
          o = n.mixer,
          s = e.length;
        da(
          s === t.length,
          "Both input and output ranges must be the same length"
        ),
          da(
            !i || !Array.isArray(i) || i.length === s - 1,
            "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."
          ),
          e[0] > e[s - 1] && ((e = f(e).reverse()), (t = f(t).reverse()));
        var l = Aa(t, i, o),
          u = l.length,
          c = function (t) {
            var n = 0;
            if (u > 1) for (; n < e.length - 2 && !(t < e[n + 1]); n++);
            var r = Oa(e[n], e[n + 1], t);
            return l[n](r);
          };
        return a
          ? function (t) {
              return c(Lt(e[0], e[s - 1], t));
            }
          : c;
      }
      function Ra(e) {
        var t = [0];
        return (
          (function (e, t) {
            for (var n = e[e.length - 1], r = 1; r <= t; r++) {
              var a = Oa(0, t, r);
              e.push(wa(n, 1, a));
            }
          })(t, e.length - 1),
          t
        );
      }
      var Da = function (e, t, n) {
          return (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;
        },
        Va = 1e-7,
        Ia = 12;
      function Fa(e, t, n, r) {
        if (e === t && n === r) return Gn;
        var a = function (t) {
          return (function (e, t, n, r, a) {
            var i,
              o,
              s = 0;
            do {
              (i = Da((o = t + (n - t) / 2), r, a) - e) > 0 ? (n = o) : (t = o);
            } while (Math.abs(i) > Va && ++s < Ia);
            return o;
          })(t, 0, 1, e, n);
        };
        return function (e) {
          return 0 === e || 1 === e ? e : Da(a(e), t, r);
        };
      }
      var za = function (e) {
          return 1 - Math.sin(Math.acos(e));
        },
        Ua = ma(za),
        Ba = va(Ua),
        Wa = Fa(0.33, 1.53, 0.69, 0.99),
        Ha = ma(Wa),
        $a = va(Ha),
        Qa = {
          linear: Gn,
          easeIn: ya,
          easeInOut: ba,
          easeOut: ga,
          circIn: za,
          circInOut: Ba,
          circOut: Ua,
          backIn: Ha,
          backInOut: $a,
          backOut: Wa,
          anticipate: function (e) {
            return (e *= 2) < 1
              ? 0.5 * Ha(e)
              : 0.5 * (2 - Math.pow(2, -10 * (e - 1)));
          },
        },
        Ya = function (e) {
          if (Array.isArray(e)) {
            da(
              4 === e.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            var t = u(e, 4);
            return Fa(t[0], t[1], t[2], t[3]);
          }
          return "string" === typeof e
            ? (da(void 0 !== Qa[e], "Invalid easing type '".concat(e, "'")),
              Qa[e])
            : e;
        },
        qa = function (e) {
          return Array.isArray(e) && "number" !== typeof e[0];
        };
      function Ga(e) {
        var t = e.keyframes,
          n = e.ease,
          r = void 0 === n ? ba : n,
          a = e.times,
          i = e.duration,
          o = void 0 === i ? 300 : i;
        t = f(t);
        var s = qa(r) ? r.map(Ya) : Ya(r),
          l = { done: !1, value: t[0] },
          u = (function (e, t) {
            return e.map(function (e) {
              return e * t;
            });
          })(a && a.length === t.length ? a : Ra(t), o);
        function c() {
          return Ma(u, t, {
            ease: Array.isArray(s)
              ? s
              : ((e = t),
                (n = s),
                e
                  .map(function () {
                    return n || ba;
                  })
                  .splice(0, e.length - 1)),
          });
          var e, n;
        }
        var d = c();
        return {
          next: function (e) {
            return (l.value = d(e)), (l.done = e >= o), l;
          },
          flipTarget: function () {
            t.reverse(), (d = c());
          },
        };
      }
      var Xa = 0.001,
        Ka = 0.01,
        Za = 10,
        Ja = 0.05,
        ei = 1;
      function ti(e) {
        var t,
          n,
          r = e.duration,
          a = void 0 === r ? 800 : r,
          i = e.bounce,
          o = void 0 === i ? 0.25 : i,
          s = e.velocity,
          l = void 0 === s ? 0 : s,
          u = e.mass,
          c = void 0 === u ? 1 : u;
        fa(a <= 1e3 * Za, "Spring duration must be 10 seconds or less");
        var f = 1 - o;
        (f = Lt(Ja, ei, f)),
          (a = Lt(Ka, Za, a / 1e3)),
          f < 1
            ? ((t = function (e) {
                var t = e * f,
                  n = t * a,
                  r = t - l,
                  i = ri(e, f),
                  o = Math.exp(-n);
                return Xa - (r / i) * o;
              }),
              (n = function (e) {
                var n = e * f * a,
                  r = n * l + l,
                  i = Math.pow(f, 2) * Math.pow(e, 2) * a,
                  o = Math.exp(-n),
                  s = ri(Math.pow(e, 2), f);
                return ((-t(e) + Xa > 0 ? -1 : 1) * ((r - i) * o)) / s;
              }))
            : ((t = function (e) {
                return Math.exp(-e * a) * ((e - l) * a + 1) - Xa;
              }),
              (n = function (e) {
                return Math.exp(-e * a) * (a * a * (l - e));
              }));
        var d = (function (e, t, n) {
          for (var r = n, a = 1; a < ni; a++) r -= e(r) / t(r);
          return r;
        })(t, n, 5 / a);
        if (((a *= 1e3), isNaN(d)))
          return { stiffness: 100, damping: 10, duration: a };
        var p = Math.pow(d, 2) * c;
        return { stiffness: p, damping: 2 * f * Math.sqrt(c * p), duration: a };
      }
      var ni = 12;
      function ri(e, t) {
        return e * Math.sqrt(1 - t * t);
      }
      var ai = ["keyframes", "restDelta", "restSpeed"],
        ii = ["duration", "bounce"],
        oi = ["stiffness", "damping", "mass"];
      function si(e, t) {
        return t.some(function (t) {
          return void 0 !== e[t];
        });
      }
      var li = 5;
      function ui(e) {
        var t = e.keyframes,
          n = e.restDelta,
          r = e.restSpeed,
          a = on(e, ai),
          i = t[0],
          o = t[t.length - 1],
          s = { done: !1, value: i },
          l = (function (e) {
            var t = We(
              {
                velocity: 0,
                stiffness: 100,
                damping: 10,
                mass: 1,
                isResolvedFromDuration: !1,
              },
              e
            );
            if (!si(e, oi) && si(e, ii)) {
              var n = ti(e);
              (t = We(
                We(We({}, t), n),
                {},
                { velocity: 0, mass: 1 }
              )).isResolvedFromDuration = !0;
            }
            return t;
          })(a),
          u = l.stiffness,
          c = l.damping,
          f = l.mass,
          d = l.velocity,
          p = l.duration,
          h = l.isResolvedFromDuration,
          v = ci,
          m = d ? -d / 1e3 : 0,
          y = c / (2 * Math.sqrt(u * f));
        function g() {
          var e = o - i,
            t = Math.sqrt(u / f) / 1e3,
            a = Math.abs(e) < 5;
          if ((r || (r = a ? 0.01 : 2), n || (n = a ? 0.005 : 0.5), y < 1)) {
            var s = ri(t, y);
            v = function (n) {
              var r = Math.exp(-y * t * n);
              return (
                o -
                r *
                  (((m + y * t * e) / s) * Math.sin(s * n) +
                    e * Math.cos(s * n))
              );
            };
          } else if (1 === y)
            v = function (n) {
              return o - Math.exp(-t * n) * (e + (m + t * e) * n);
            };
          else {
            var l = t * Math.sqrt(y * y - 1);
            v = function (n) {
              var r = Math.exp(-y * t * n),
                a = Math.min(l * n, 300);
              return (
                o -
                (r * ((m + y * t * e) * Math.sinh(a) + l * e * Math.cosh(a))) /
                  l
              );
            };
          }
        }
        return (
          g(),
          {
            next: function (e) {
              var t = v(e);
              if (h) s.done = e >= p;
              else {
                var a = m;
                if (0 !== e)
                  if (y < 1) {
                    var i = Math.max(0, e - li);
                    a = jr(t - v(i), e - i);
                  } else a = 0;
                var l = Math.abs(a) <= r,
                  u = Math.abs(o - t) <= n;
                s.done = l && u;
              }
              return (s.value = s.done ? o : t), s;
            },
            flipTarget: function () {
              m = -m;
              var e = [o, i];
              (i = e[0]), (o = e[1]), g();
            },
          }
        );
      }
      ui.needsInterpolation = function (e, t) {
        return "string" === typeof e || "string" === typeof t;
      };
      var ci = function (e) {
        return 0;
      };
      var fi = [
          "duration",
          "driver",
          "elapsed",
          "repeat",
          "repeatType",
          "repeatDelay",
          "keyframes",
          "autoplay",
          "onPlay",
          "onStop",
          "onComplete",
          "onRepeat",
          "onUpdate",
          "type",
        ],
        di = {
          decay: function (e) {
            var t = e.keyframes,
              n = void 0 === t ? [0] : t,
              r = e.velocity,
              a = void 0 === r ? 0 : r,
              i = e.power,
              o = void 0 === i ? 0.8 : i,
              s = e.timeConstant,
              l = void 0 === s ? 350 : s,
              u = e.restDelta,
              c = void 0 === u ? 0.5 : u,
              f = e.modifyTarget,
              d = n[0],
              p = { done: !1, value: d },
              h = o * a,
              v = d + h,
              m = void 0 === f ? v : f(v);
            return (
              m !== v && (h = m - d),
              {
                next: function (e) {
                  var t = -h * Math.exp(-e / l);
                  return (
                    (p.done = !(t > c || t < -c)),
                    (p.value = p.done ? m : m + t),
                    p
                  );
                },
                flipTarget: function () {},
              }
            );
          },
          keyframes: Ga,
          tween: Ga,
          spring: ui,
        };
      function pi(e, t) {
        return (
          e -
          t -
          (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0)
        );
      }
      var hi = function (e) {
        var t = function (t) {
          var n = t.delta;
          return e(n);
        };
        return {
          start: function () {
            return br.update(t, !0);
          },
          stop: function () {
            return wr.update(t);
          },
        };
      };
      function vi(e) {
        var t,
          n,
          r = e.duration,
          a = e.driver,
          i = void 0 === a ? hi : a,
          o = e.elapsed,
          s = void 0 === o ? 0 : o,
          l = e.repeat,
          u = void 0 === l ? 0 : l,
          c = e.repeatType,
          f = void 0 === c ? "loop" : c,
          d = e.repeatDelay,
          p = void 0 === d ? 0 : d,
          h = e.keyframes,
          v = e.autoplay,
          m = void 0 === v || v,
          y = e.onPlay,
          g = e.onStop,
          b = e.onComplete,
          w = e.onRepeat,
          x = e.onUpdate,
          k = e.type,
          S = void 0 === k ? "keyframes" : k,
          E = on(e, fi),
          C = s,
          P = 0,
          T = r,
          j = !1,
          _ = !0,
          N = di[h.length > 2 ? "keyframes" : S] || Ga,
          O = h[0],
          L = h[h.length - 1],
          A = { done: !1, value: O },
          M = N.needsInterpolation;
        M &&
          M(O, L) &&
          ((n = Ma([0, 100], [O, L], { clamp: !1 })), (h = [0, 100]));
        var R = N(We(We({}, E), {}, { duration: r, keyframes: h }));
        function D() {
          P++,
            "reverse" === f
              ? (s = (function (e) {
                  var t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                    n =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 0;
                  return arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    !arguments[3]
                    ? t - (e - t) + n
                    : pi(t + -e, t, n);
                })(s, T, p, (_ = P % 2 === 0)))
              : ((s = pi(s, T, p)), "mirror" === f && R.flipTarget()),
            (j = !1),
            w && w();
        }
        function V(e) {
          _ || (e = -e),
            (s += e),
            j ||
              ((A = R.next(Math.max(0, s))),
              n && (A.value = n(A.value)),
              (j = _ ? A.done : s <= 0)),
            x && x(A.value),
            j &&
              (0 === P && (T = void 0 !== T ? T : s),
              P < u
                ? (function (e, t, n, r) {
                    return r ? e >= t + n : e <= -n;
                  })(s, T, p, _) && D()
                : (t && t.stop(), b && b()));
        }
        return (
          m && (y && y(), (t = i(V)).start()),
          {
            stop: function () {
              g && g(), t && t.stop();
            },
            set currentTime(e) {
              (s = C), V(e);
            },
            sample: function (e) {
              if (
                ((s = C),
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1])
              )
                return V(e), A;
              var t = r && "number" === typeof r ? Math.max(0.5 * r, 50) : 50,
                n = 0;
              for (V(0); n <= e; ) {
                var a = e - n;
                V(Math.min(a, t)), (n += t);
              }
              return A;
            },
          }
        );
      }
      var mi = function (e) {
          var t = u(e, 4),
            n = t[0],
            r = t[1],
            a = t[2],
            i = t[3];
          return "cubic-bezier("
            .concat(n, ", ")
            .concat(r, ", ")
            .concat(a, ", ")
            .concat(i, ")");
        },
        yi = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: mi([0, 0.65, 0.55, 1]),
          circOut: mi([0.55, 0, 1, 0.45]),
          backIn: mi([0.31, 0.01, 0.66, -0.59]),
          backOut: mi([0.33, 1.53, 0.69, 0.99]),
        };
      function gi(e) {
        if (e) return Array.isArray(e) ? mi(e) : yi[e];
      }
      var bi = {
          waapi: function () {
            return Object.hasOwnProperty.call(Element.prototype, "animate");
          },
        },
        wi = {},
        xi = {},
        ki = function (e) {
          xi[e] = function () {
            return void 0 === wi[e] && (wi[e] = bi[e]()), wi[e];
          };
        };
      for (var Si in bi) ki(Si);
      var Ei = ["onUpdate", "onComplete"],
        Ci = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        Pi = 10,
        Ti = function (e, t) {
          return (
            "spring" === t.type ||
            "backgroundColor" === e ||
            !(
              !(n = t.ease) ||
              Array.isArray(n) ||
              ("string" === typeof n && yi[n])
            )
          );
          var n;
        };
      function ji(e, t, n) {
        n.onUpdate;
        var r = n.onComplete,
          a = on(n, Ei);
        if (
          !(
            xi.waapi() &&
            Ci.has(t) &&
            !a.repeatDelay &&
            "mirror" !== a.repeatType &&
            0 !== a.damping
          )
        )
          return !1;
        var i = a.keyframes,
          o = a.duration,
          s = void 0 === o ? 300 : o,
          l = a.elapsed,
          u = void 0 === l ? 0 : l,
          c = a.ease;
        if (Ti(t, a)) {
          for (
            var f = vi(We(We({}, a), {}, { repeat: 0, elapsed: 0 })),
              d = { done: !1, value: i[0] },
              p = [],
              h = 0;
            !d.done && h < 2e4;

          )
            (d = f.sample(h, !0)), p.push(d.value), (h += Pi);
          (i = p), (s = h - Pi), (c = "linear");
        }
        var v = (function (e, t, n) {
          var r,
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            i = a.delay,
            o = void 0 === i ? 0 : i,
            s = a.duration,
            l = a.repeat,
            u = void 0 === l ? 0 : l,
            c = a.repeatType,
            f = void 0 === c ? "loop" : c,
            d = a.ease,
            p = a.times;
          return e.animate((Ue((r = {}), t, n), Ue(r, "offset", p), r), {
            delay: o,
            duration: s,
            easing: gi(d),
            fill: "both",
            iterations: u + 1,
            direction: "reverse" === f ? "alternate" : "normal",
          });
        })(
          e.owner.current,
          t,
          i,
          We(We({}, a), {}, { delay: -u, duration: s, ease: c })
        );
        return (
          (v.onfinish = function () {
            e.set(
              (function (e, t) {
                var n = t.repeat,
                  r = t.repeatType;
                return e[
                  n && "loop" !== (void 0 === r ? "loop" : r) && n % 2 === 1
                    ? 0
                    : e.length - 1
                ];
              })(i, a)
            ),
              br.update(function () {
                return v.cancel();
              }),
              r && r();
          }),
          {
            get currentTime() {
              return v.currentTime || 0;
            },
            set currentTime(e) {
              v.currentTime = e;
            },
            stop: function () {
              var t = v.currentTime;
              if (t) {
                var n = vi(We(We({}, a), {}, { autoplay: !1 }));
                e.setWithVelocity(
                  n.sample(t - Pi).value,
                  n.sample(t).value,
                  Pi
                );
              }
              br.update(function () {
                return v.cancel();
              });
            },
          }
        );
      }
      function _i(e, t) {
        var n = performance.now(),
          r = function r(a) {
            var i = a.timestamp - n;
            i >= t && (wr.read(r), e(i - t));
          };
        return (
          br.read(r, !0),
          function () {
            return wr.read(r);
          }
        );
      }
      function Ni(e) {
        var t = e.keyframes,
          n = e.elapsed,
          r = e.onUpdate,
          a = e.onComplete,
          i = function () {
            r && r(t[t.length - 1]), a && a();
          };
        return n ? { stop: _i(i, -n) } : i();
      }
      var Oi = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        Li = { type: "keyframes", duration: 0.8 },
        Ai = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        Mi = function (e, t) {
          var n = t.keyframes;
          return n.length > 2
            ? Li
            : St.has(e)
            ? e.startsWith("scale")
              ? {
                  type: "spring",
                  stiffness: 550,
                  damping: 0 === n[1] ? 2 * Math.sqrt(550) : 30,
                  restSpeed: 10,
                }
              : Oi
            : Ai;
        },
        Ri = function (e, t) {
          return (
            "zIndex" !== e &&
            (!("number" !== typeof t && !Array.isArray(t)) ||
              !("string" !== typeof t || !$r.test(t) || t.startsWith("url(")))
          );
        },
        Di = [
          "when",
          "delay",
          "delayChildren",
          "staggerChildren",
          "staggerDirection",
          "repeat",
          "repeatType",
          "repeatDelay",
          "from",
          "elapsed",
        ];
      function Vi(e) {
        return (
          0 === e ||
          ("string" === typeof e &&
            0 === parseFloat(e) &&
            -1 === e.indexOf(" "))
        );
      }
      function Ii(e) {
        return "number" === typeof e ? 0 : Zr("", e);
      }
      function Fi(e, t) {
        return e[t] || e.default || e;
      }
      var zi = function (e, t, n) {
          var r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          return function (a) {
            var i = Fi(r, e) || {},
              o = i.delay || r.delay || 0,
              s = r.elapsed,
              l = void 0 === s ? 0 : s;
            l -= pa(o);
            var u = (function (e, t, n, r) {
                var a = Ri(t, n),
                  i = void 0 !== r.from ? r.from : e.get();
                return (
                  "none" === i && a && "string" === typeof n
                    ? (i = Zr(t, n))
                    : Vi(i) && "string" === typeof n
                    ? (i = Ii(n))
                    : !Array.isArray(n) &&
                      Vi(n) &&
                      "string" === typeof i &&
                      (n = Ii(i)),
                  Array.isArray(n) ? (null === n[0] && (n[0] = i), n) : [i, n]
                );
              })(t, e, n, i),
              c = u[0],
              f = u[u.length - 1],
              d = Ri(e, c),
              p = Ri(e, f);
            fa(
              d === p,
              "You are trying to animate "
                .concat(e, ' from "')
                .concat(c, '" to "')
                .concat(f, '". ')
                .concat(
                  c,
                  " is not an animatable value - to enable this animation set "
                )
                .concat(c, " to a value animatable to ")
                .concat(f, " via the `style` property.")
            );
            var h = We(
              We({ keyframes: u, velocity: t.getVelocity() }, i),
              {},
              {
                elapsed: l,
                onUpdate: function (e) {
                  t.set(e), i.onUpdate && i.onUpdate(e);
                },
                onComplete: function () {
                  a(), i.onComplete && i.onComplete();
                },
              }
            );
            if (!d || !p || ha.current || !1 === i.type) return Ni(h);
            if ("inertia" === i.type)
              return (function (e) {
                var t,
                  n = e.keyframes,
                  r = e.velocity,
                  a = void 0 === r ? 0 : r,
                  i = e.min,
                  o = e.max,
                  s = e.power,
                  l = void 0 === s ? 0.8 : s,
                  u = e.timeConstant,
                  c = void 0 === u ? 750 : u,
                  f = e.bounceStiffness,
                  d = void 0 === f ? 500 : f,
                  p = e.bounceDamping,
                  h = void 0 === p ? 10 : p,
                  v = e.restDelta,
                  m = void 0 === v ? 1 : v,
                  y = e.modifyTarget,
                  g = e.driver,
                  b = e.onUpdate,
                  w = e.onComplete,
                  x = e.onStop,
                  k = n[0];
                function S(e) {
                  return (void 0 !== i && e < i) || (void 0 !== o && e > o);
                }
                function E(e) {
                  return void 0 === i
                    ? o
                    : void 0 === o || Math.abs(i - e) < Math.abs(o - e)
                    ? i
                    : o;
                }
                function C(e) {
                  t && t.stop(),
                    (t = vi(
                      We(
                        We({ keyframes: [0, 1], velocity: 0 }, e),
                        {},
                        {
                          driver: g,
                          onUpdate: function (t) {
                            b && b(t), e.onUpdate && e.onUpdate(t);
                          },
                          onComplete: w,
                          onStop: x,
                        }
                      )
                    ));
                }
                function P(e) {
                  C(
                    We(
                      {
                        type: "spring",
                        stiffness: d,
                        damping: h,
                        restDelta: m,
                      },
                      e
                    )
                  );
                }
                if (S(k)) P({ velocity: a, keyframes: [k, E(k)] });
                else {
                  var T = l * a + k;
                  "undefined" !== typeof y && (T = y(T));
                  var j,
                    _,
                    N = E(T),
                    O = N === i ? -1 : 1;
                  C({
                    type: "decay",
                    keyframes: [k, 0],
                    velocity: a,
                    timeConstant: c,
                    power: l,
                    restDelta: m,
                    modifyTarget: y,
                    onUpdate: S(T)
                      ? function (e) {
                          (j = _),
                            (_ = e),
                            (a = jr(e - j, cr.delta)),
                            ((1 === O && e > N) || (-1 === O && e < N)) &&
                              P({ keyframes: [e, N], velocity: a });
                        }
                      : void 0,
                  });
                }
                return {
                  stop: function () {
                    return t && t.stop();
                  },
                };
              })(h);
            if (
              ((function (e) {
                e.when,
                  e.delay,
                  e.delayChildren,
                  e.staggerChildren,
                  e.staggerDirection,
                  e.repeat,
                  e.repeatType,
                  e.repeatDelay,
                  e.from,
                  e.elapsed;
                var t = on(e, Di);
                return !!Object.keys(t).length;
              })(i) || (h = We(We({}, h), Mi(e, h))),
              h.duration && (h.duration = pa(h.duration)),
              h.repeatDelay && (h.repeatDelay = pa(h.repeatDelay)),
              t.owner &&
                t.owner.current instanceof HTMLElement &&
                !t.owner.getProps().onUpdate)
            ) {
              var v = ji(t, e, h);
              if (v) return v;
            }
            return vi(h);
          };
        },
        Ui = ["transition", "transitionEnd"];
      function Bi(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = aa(e, t, n.custom),
          a = (r || {}).transition,
          i = void 0 === a ? e.getDefaultTransition() || {} : a;
        n.transitionOverride && (i = n.transitionOverride);
        var o = r
            ? function () {
                return Wi(e, r, n);
              }
            : function () {
                return Promise.resolve();
              },
          s =
            e.variantChildren && e.variantChildren.size
              ? function () {
                  var r =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                    a = i,
                    o = a.delayChildren,
                    s = void 0 === o ? 0 : o,
                    l = a.staggerChildren,
                    u = a.staggerDirection;
                  return (function (e, t) {
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : 0,
                      r =
                        arguments.length > 3 && void 0 !== arguments[3]
                          ? arguments[3]
                          : 0,
                      a =
                        arguments.length > 4 && void 0 !== arguments[4]
                          ? arguments[4]
                          : 1,
                      i = arguments.length > 5 ? arguments[5] : void 0,
                      o = [],
                      s = (e.variantChildren.size - 1) * r,
                      l =
                        1 === a
                          ? function () {
                              return (
                                (arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0) * r
                              );
                            }
                          : function () {
                              return (
                                s -
                                (arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : 0) *
                                  r
                              );
                            };
                    return (
                      Array.from(e.variantChildren)
                        .sort(Hi)
                        .forEach(function (e, r) {
                          e.notify("AnimationStart", t),
                            o.push(
                              Bi(
                                e,
                                t,
                                We(We({}, i), {}, { delay: n + l(r) })
                              ).then(function () {
                                return e.notify("AnimationComplete", t);
                              })
                            );
                        }),
                      Promise.all(o)
                    );
                  })(e, t, s + r, l, u, n);
                }
              : function () {
                  return Promise.resolve();
                },
          l = i.when;
        if (l) {
          var c = u("beforeChildren" === l ? [o, s] : [s, o], 2),
            f = c[0],
            d = c[1];
          return f().then(d);
        }
        return Promise.all([o(), s(n.delay)]);
      }
      function Wi(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.delay,
          a = void 0 === r ? 0 : r,
          i = n.transitionOverride,
          o = n.type,
          s = e.makeTargetAnimatable(t),
          l = s.transition,
          u = void 0 === l ? e.getDefaultTransition() : l,
          c = s.transitionEnd,
          f = on(s, Ui),
          d = e.getValue("willChange");
        i && (u = i);
        var p = [],
          h = o && e.animationState && e.animationState.getState()[o],
          v = function (t) {
            var n = e.getValue(t),
              r = f[t];
            if (
              !n ||
              void 0 === r ||
              (h &&
                (function (e, t) {
                  var n = e.protectedKeys,
                    r = e.needsAnimating,
                    a = n.hasOwnProperty(t) && !0 !== r[t];
                  return (r[t] = !1), a;
                })(h, t))
            )
              return "continue";
            var i = We({ delay: a, elapsed: 0 }, u);
            if (window.HandoffAppearAnimations && !n.hasAnimated) {
              var o = e.getProps()[ca];
              o && (i.elapsed = window.HandoffAppearAnimations(o, t, n, br));
            }
            var s = n.start(
              zi(t, n, r, e.shouldReduceMotion && St.has(t) ? { type: !1 } : i)
            );
            ua(d) &&
              (d.add(t),
              (s = s.then(function () {
                return d.remove(t);
              }))),
              p.push(s);
          };
        for (var m in f) v(m);
        return Promise.all(p).then(function () {
          c && sa(e, c);
        });
      }
      function Hi(e, t) {
        return e.sortNodePosition(t);
      }
      var $i = ["transition", "transitionEnd"],
        Qi = f(et).reverse(),
        Yi = et.length;
      function qi(e) {
        return function (t) {
          return Promise.all(
            t.map(function (t) {
              var n = t.animation,
                r = t.options;
              return (function (e, t) {
                var n,
                  r =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                if ((e.notify("AnimationStart", t), Array.isArray(t))) {
                  var a = t.map(function (t) {
                    return Bi(e, t, r);
                  });
                  n = Promise.all(a);
                } else if ("string" === typeof t) n = Bi(e, t, r);
                else {
                  var i = "function" === typeof t ? aa(e, t, r.custom) : t;
                  n = Wi(e, i, r);
                }
                return n.then(function () {
                  return e.notify("AnimationComplete", t);
                });
              })(e, n, r);
            })
          );
        };
      }
      function Gi(e) {
        var t = qi(e),
          n = {
            animate: Xi(!0),
            whileInView: Xi(),
            whileHover: Xi(),
            whileTap: Xi(),
            whileDrag: Xi(),
            whileFocus: Xi(),
            exit: Xi(),
          },
          r = !0,
          a = function (t, n) {
            var r = aa(e, n);
            if (r) {
              r.transition;
              var a = r.transitionEnd,
                i = on(r, $i);
              t = We(We(We({}, t), i), a);
            }
            return t;
          };
        function i(i, o) {
          for (
            var s = e.getProps(),
              l = e.getVariantContext(!0) || {},
              u = [],
              c = new Set(),
              d = {},
              p = 1 / 0,
              h = function () {
                var t = Qi[v],
                  h = n[t],
                  m = void 0 !== s[t] ? s[t] : l[t],
                  y = Ze(m),
                  g = t === o ? h.isActive : null;
                !1 === g && (p = v);
                var b = m === l[t] && m !== s[t] && y;
                if (
                  (b && r && e.manuallyAnimateOnMount && (b = !1),
                  (h.protectedKeys = We({}, d)),
                  (!h.isActive && null === g) ||
                    (!m && !h.prevProp) ||
                    Je(m) ||
                    "boolean" === typeof m)
                )
                  return "continue";
                var w = (function (e, t) {
                    if ("string" === typeof t) return t !== e;
                    if (Array.isArray(t)) return !sr(t, e);
                    return !1;
                  })(h.prevProp, m),
                  x = w || (t === o && h.isActive && !b && y) || (v > p && y),
                  k = Array.isArray(m) ? m : [m],
                  S = k.reduce(a, {});
                !1 === g && (S = {});
                var E = h.prevResolvedValues,
                  C = void 0 === E ? {} : E,
                  P = We(We({}, C), S),
                  T = function (e) {
                    (x = !0), c.delete(e), (h.needsAnimating[e] = !0);
                  };
                for (var j in P) {
                  var _ = S[j],
                    N = C[j];
                  d.hasOwnProperty(j) ||
                    (_ !== N
                      ? Sn(_) && Sn(N)
                        ? !sr(_, N) || w
                          ? T(j)
                          : (h.protectedKeys[j] = !0)
                        : void 0 !== _
                        ? T(j)
                        : c.add(j)
                      : void 0 !== _ && c.has(j)
                      ? T(j)
                      : (h.protectedKeys[j] = !0));
                }
                (h.prevProp = m),
                  (h.prevResolvedValues = S),
                  h.isActive && (d = We(We({}, d), S)),
                  r && e.blockInitialAnimation && (x = !1),
                  x &&
                    !b &&
                    u.push.apply(
                      u,
                      f(
                        k.map(function (e) {
                          return { animation: e, options: We({ type: t }, i) };
                        })
                      )
                    );
              },
              v = 0;
            v < Yi;
            v++
          )
            h();
          if (c.size) {
            var m = {};
            c.forEach(function (t) {
              var n = e.getBaseTarget(t);
              void 0 !== n && (m[t] = n);
            }),
              u.push({ animation: m });
          }
          var y = Boolean(u.length);
          return (
            r && !1 === s.initial && !e.manuallyAnimateOnMount && (y = !1),
            (r = !1),
            y ? t(u) : Promise.resolve()
          );
        }
        return {
          animateChanges: i,
          setActive: function (t, r, a) {
            var o;
            if (n[t].isActive === r) return Promise.resolve();
            null === (o = e.variantChildren) ||
              void 0 === o ||
              o.forEach(function (e) {
                var n;
                return null === (n = e.animationState) || void 0 === n
                  ? void 0
                  : n.setActive(t, r);
              }),
              (n[t].isActive = r);
            var s = i(a, t);
            for (var l in n) n[l].protectedKeys = {};
            return s;
          },
          setAnimateFunction: function (n) {
            t = n(e);
          },
          getState: function () {
            return n;
          },
        };
      }
      function Xi() {
        return {
          isActive:
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      var Ki = (function (e) {
          g(n, e);
          var t = k(n);
          function n(e) {
            var r;
            return (
              d(this, n),
              (r = t.call(this, e)),
              e.animationState || (e.animationState = Gi(e)),
              r
            );
          }
          return (
            m(n, [
              {
                key: "updateAnimationControlsSubscription",
                value: function () {
                  var e = this.node.getProps().animate;
                  this.unmount(),
                    Je(e) && (this.unmount = e.subscribe(this.node));
                },
              },
              {
                key: "mount",
                value: function () {
                  this.updateAnimationControlsSubscription();
                },
              },
              {
                key: "update",
                value: function () {
                  this.node.getProps().animate !==
                    (this.node.prevProps || {}).animate &&
                    this.updateAnimationControlsSubscription();
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(Hn),
        Zi = 0,
        Ji = (function (e) {
          g(n, e);
          var t = k(n);
          function n() {
            var e;
            return d(this, n), ((e = t.apply(this, arguments)).id = Zi++), e;
          }
          return (
            m(n, [
              {
                key: "update",
                value: function () {
                  var e = this;
                  if (this.node.presenceContext) {
                    var t = this.node.presenceContext,
                      n = t.isPresent,
                      r = t.onExitComplete,
                      a = t.custom,
                      i = (this.node.prevPresenceContext || {}).isPresent;
                    if (this.node.animationState && n !== i) {
                      var o = this.node.animationState.setActive("exit", !n, {
                        custom:
                          null !== a && void 0 !== a
                            ? a
                            : this.node.getProps().custom,
                      });
                      r &&
                        !n &&
                        o.then(function () {
                          return r(e.id);
                        });
                    }
                  }
                },
              },
              {
                key: "mount",
                value: function () {
                  var e = (this.node.presenceContext || {}).register;
                  e && (this.unmount = e(this.id));
                },
              },
              { key: "unmount", value: function () {} },
            ]),
            n
          );
        })(Hn),
        eo = { animation: { Feature: Ki }, exit: { Feature: Ji } },
        to = function (e, t) {
          return Math.abs(e - t);
        };
      var no = (function () {
        function e(t, n) {
          var r = this,
            a = (
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {}
            ).transformPagePoint;
          if (
            (d(this, e),
            (this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = function () {
              if (r.lastMoveEvent && r.lastMoveEventInfo) {
                var e = io(r.lastMoveEventInfo, r.history),
                  t = null !== r.startEvent,
                  n =
                    (function (e, t) {
                      var n = to(e.x, t.x),
                        r = to(e.y, t.y);
                      return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2));
                    })(e.offset, { x: 0, y: 0 }) >= 3;
                if (t || n) {
                  var a = e.point,
                    i = cr.timestamp;
                  r.history.push(We(We({}, a), {}, { timestamp: i }));
                  var o = r.handlers,
                    s = o.onStart,
                    l = o.onMove;
                  t ||
                    (s && s(r.lastMoveEvent, e),
                    (r.startEvent = r.lastMoveEvent)),
                    l && l(r.lastMoveEvent, e);
                }
              }
            }),
            (this.handlePointerMove = function (e, t) {
              (r.lastMoveEvent = e),
                (r.lastMoveEventInfo = ro(t, r.transformPagePoint)),
                br.update(r.updatePoint, !0);
            }),
            (this.handlePointerUp = function (e, t) {
              if ((r.end(), r.lastMoveEvent && r.lastMoveEventInfo)) {
                var n = r.handlers,
                  a = n.onEnd,
                  i = n.onSessionEnd,
                  o = io(
                    "pointercancel" === e.type
                      ? r.lastMoveEventInfo
                      : ro(t, r.transformPagePoint),
                    r.history
                  );
                r.startEvent && a && a(e, o), i && i(e, o);
              }
            }),
            An(t))
          ) {
            (this.handlers = n), (this.transformPagePoint = a);
            var i = ro(Mn(t), this.transformPagePoint),
              o = i.point,
              s = cr.timestamp;
            this.history = [We(We({}, o), {}, { timestamp: s })];
            var l = n.onSessionStart;
            l && l(t, io(i, this.history)),
              (this.removeListeners = In(
                Dn(window, "pointermove", this.handlePointerMove),
                Dn(window, "pointerup", this.handlePointerUp),
                Dn(window, "pointercancel", this.handlePointerUp)
              ));
          }
        }
        return (
          m(e, [
            {
              key: "updateHandlers",
              value: function (e) {
                this.handlers = e;
              },
            },
            {
              key: "end",
              value: function () {
                this.removeListeners && this.removeListeners(),
                  wr.update(this.updatePoint);
              },
            },
          ]),
          e
        );
      })();
      function ro(e, t) {
        return t ? { point: t(e.point) } : e;
      }
      function ao(e, t) {
        return { x: e.x - t.x, y: e.y - t.y };
      }
      function io(e, t) {
        var n = e.point;
        return {
          point: n,
          delta: ao(n, so(t)),
          offset: ao(n, oo(t)),
          velocity: lo(t, 0.1),
        };
      }
      function oo(e) {
        return e[0];
      }
      function so(e) {
        return e[e.length - 1];
      }
      function lo(e, t) {
        if (e.length < 2) return { x: 0, y: 0 };
        for (
          var n = e.length - 1, r = null, a = so(e);
          n >= 0 && ((r = e[n]), !(a.timestamp - r.timestamp > pa(t)));

        )
          n--;
        if (!r) return { x: 0, y: 0 };
        var i = (a.timestamp - r.timestamp) / 1e3;
        if (0 === i) return { x: 0, y: 0 };
        var o = { x: (a.x - r.x) / i, y: (a.y - r.y) / i };
        return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
      }
      function uo(e) {
        return e.max - e.min;
      }
      function co(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 0.01;
        return Math.abs(e - t) <= n;
      }
      function fo(e, t, n) {
        var r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
        (e.origin = r),
          (e.originPoint = wa(t.min, t.max, e.origin)),
          (e.scale = uo(n) / uo(t)),
          (co(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
          (e.translate = wa(n.min, n.max, e.origin) - e.originPoint),
          (co(e.translate) || isNaN(e.translate)) && (e.translate = 0);
      }
      function po(e, t, n, r) {
        fo(e.x, t.x, n.x, r ? r.originX : void 0),
          fo(e.y, t.y, n.y, r ? r.originY : void 0);
      }
      function ho(e, t, n) {
        (e.min = n.min + t.min), (e.max = e.min + uo(t));
      }
      function vo(e, t, n) {
        (e.min = t.min - n.min), (e.max = e.min + uo(t));
      }
      function mo(e, t, n) {
        vo(e.x, t.x, n.x), vo(e.y, t.y, n.y);
      }
      function yo(e, t, n) {
        return {
          min: void 0 !== t ? e.min + t : void 0,
          max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0,
        };
      }
      function go(e, t) {
        var n = t.min - e.min,
          r = t.max - e.max;
        if (t.max - t.min < e.max - e.min) {
          var a = [r, n];
          (n = a[0]), (r = a[1]);
        }
        return { min: n, max: r };
      }
      var bo = 0.35;
      function wo(e, t, n) {
        return { min: xo(e, t), max: xo(e, n) };
      }
      function xo(e, t) {
        return "number" === typeof e ? e : e[t] || 0;
      }
      var ko = function () {
          return {
            x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
            y: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
          };
        },
        So = function () {
          return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
        };
      function Eo(e) {
        return [e("x"), e("y")];
      }
      function Co(e) {
        var t = e.top;
        return {
          x: { min: e.left, max: e.right },
          y: { min: t, max: e.bottom },
        };
      }
      function Po(e) {
        return void 0 === e || 1 === e;
      }
      function To(e) {
        var t = e.scale,
          n = e.scaleX,
          r = e.scaleY;
        return !Po(t) || !Po(n) || !Po(r);
      }
      function jo(e) {
        return To(e) || _o(e) || e.z || e.rotate || e.rotateX || e.rotateY;
      }
      function _o(e) {
        return No(e.x) || No(e.y);
      }
      function No(e) {
        return e && "0%" !== e;
      }
      function Oo(e, t, n) {
        return n + t * (e - n);
      }
      function Lo(e, t, n, r, a) {
        return void 0 !== a && (e = Oo(e, a, r)), Oo(e, n, r) + t;
      }
      function Ao(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
          r = arguments.length > 3 ? arguments[3] : void 0,
          a = arguments.length > 4 ? arguments[4] : void 0;
        (e.min = Lo(e.min, t, n, r, a)), (e.max = Lo(e.max, t, n, r, a));
      }
      function Mo(e, t) {
        var n = t.x,
          r = t.y;
        Ao(e.x, n.translate, n.scale, n.originPoint),
          Ao(e.y, r.translate, r.scale, r.originPoint);
      }
      function Ro(e) {
        return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
          ? e
          : 1;
      }
      function Do(e, t) {
        (e.min = e.min + t), (e.max = e.max + t);
      }
      function Vo(e, t, n) {
        var r = u(n, 3),
          a = r[0],
          i = r[1],
          o = r[2],
          s = void 0 !== t[o] ? t[o] : 0.5,
          l = wa(e.min, e.max, s);
        Ao(e, t[a], t[i], l, t.scale);
      }
      var Io = ["x", "scaleX", "originX"],
        Fo = ["y", "scaleY", "originY"];
      function zo(e, t) {
        Vo(e.x, t, Io), Vo(e.y, t, Fo);
      }
      function Uo(e, t) {
        return Co(
          (function (e, t) {
            if (!t) return e;
            var n = t({ x: e.left, y: e.top }),
              r = t({ x: e.right, y: e.bottom });
            return { top: n.y, left: n.x, bottom: r.y, right: r.x };
          })(e.getBoundingClientRect(), t)
        );
      }
      var Bo = new WeakMap(),
        Wo = (function () {
          function e(t) {
            d(this, e),
              (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = So()),
              (this.visualElement = t);
          }
          return (
            m(e, [
              {
                key: "start",
                value: function (e) {
                  var t = this,
                    n = (
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {}
                    ).snapToCursor,
                    r = void 0 !== n && n,
                    a = this.visualElement.presenceContext;
                  if (!a || !1 !== a.isPresent) {
                    this.panSession = new no(
                      e,
                      {
                        onSessionStart: function (e) {
                          t.stopAnimation(),
                            r && t.snapToCursor(Mn(e, "page").point);
                        },
                        onStart: function (e, n) {
                          var r = t.getProps(),
                            a = r.drag,
                            i = r.dragPropagation,
                            o = r.onDragStart;
                          if (
                            !a ||
                            i ||
                            (t.openGlobalLock && t.openGlobalLock(),
                            (t.openGlobalLock = Bn(a)),
                            t.openGlobalLock)
                          ) {
                            (t.isDragging = !0),
                              (t.currentDirection = null),
                              t.resolveConstraints(),
                              t.visualElement.projection &&
                                ((t.visualElement.projection.isAnimationBlocked =
                                  !0),
                                (t.visualElement.projection.target = void 0)),
                              Eo(function (e) {
                                var n = t.getAxisMotionValue(e).get() || 0;
                                if (Wt.test(n)) {
                                  var r = t.visualElement.projection;
                                  if (r && r.layout) {
                                    var a = r.layout.layoutBox[e];
                                    if (a) n = uo(a) * (parseFloat(n) / 100);
                                  }
                                }
                                t.originPoint[e] = n;
                              }),
                              o && o(e, n);
                            var s = t.visualElement.animationState;
                            s && s.setActive("whileDrag", !0);
                          }
                        },
                        onMove: function (e, n) {
                          var r = t.getProps(),
                            a = r.dragPropagation,
                            i = r.dragDirectionLock,
                            o = r.onDirectionLock,
                            s = r.onDrag;
                          if (a || t.openGlobalLock) {
                            var l = n.offset;
                            if (i && null === t.currentDirection)
                              return (
                                (t.currentDirection = (function (e) {
                                  var t =
                                      arguments.length > 1 &&
                                      void 0 !== arguments[1]
                                        ? arguments[1]
                                        : 10,
                                    n = null;
                                  Math.abs(e.y) > t
                                    ? (n = "y")
                                    : Math.abs(e.x) > t && (n = "x");
                                  return n;
                                })(l)),
                                void (
                                  null !== t.currentDirection &&
                                  o &&
                                  o(t.currentDirection)
                                )
                              );
                            t.updateAxis("x", n.point, l),
                              t.updateAxis("y", n.point, l),
                              t.visualElement.render(),
                              s && s(e, n);
                          }
                        },
                        onSessionEnd: function (e, n) {
                          return t.stop(e, n);
                        },
                      },
                      {
                        transformPagePoint:
                          this.visualElement.getTransformPagePoint(),
                      }
                    );
                  }
                },
              },
              {
                key: "stop",
                value: function (e, t) {
                  var n = this.isDragging;
                  if ((this.cancel(), n)) {
                    var r = t.velocity;
                    this.startAnimation(r);
                    var a = this.getProps().onDragEnd;
                    a && a(e, t);
                  }
                },
              },
              {
                key: "cancel",
                value: function () {
                  this.isDragging = !1;
                  var e = this.visualElement,
                    t = e.projection,
                    n = e.animationState;
                  t && (t.isAnimationBlocked = !1),
                    this.panSession && this.panSession.end(),
                    (this.panSession = void 0),
                    !this.getProps().dragPropagation &&
                      this.openGlobalLock &&
                      (this.openGlobalLock(), (this.openGlobalLock = null)),
                    n && n.setActive("whileDrag", !1);
                },
              },
              {
                key: "updateAxis",
                value: function (e, t, n) {
                  var r = this.getProps().drag;
                  if (n && Ho(e, r, this.currentDirection)) {
                    var a = this.getAxisMotionValue(e),
                      i = this.originPoint[e] + n[e];
                    this.constraints &&
                      this.constraints[e] &&
                      (i = (function (e, t, n) {
                        var r = t.min,
                          a = t.max;
                        return (
                          void 0 !== r && e < r
                            ? (e = n ? wa(r, e, n.min) : Math.max(e, r))
                            : void 0 !== a &&
                              e > a &&
                              (e = n ? wa(a, e, n.max) : Math.min(e, a)),
                          e
                        );
                      })(i, this.constraints[e], this.elastic[e])),
                      a.set(i);
                  }
                },
              },
              {
                key: "resolveConstraints",
                value: function () {
                  var e = this,
                    t = this.getProps(),
                    n = t.dragConstraints,
                    r = t.dragElastic,
                    a = (this.visualElement.projection || {}).layout,
                    i = this.constraints;
                  n && Ke(n)
                    ? this.constraints ||
                      (this.constraints = this.resolveRefConstraints())
                    : (this.constraints =
                        !(!n || !a) &&
                        (function (e, t) {
                          var n = t.top,
                            r = t.left,
                            a = t.bottom,
                            i = t.right;
                          return { x: yo(e.x, r, i), y: yo(e.y, n, a) };
                        })(a.layoutBox, n)),
                    (this.elastic = (function () {
                      var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : bo;
                      return (
                        !1 === e ? (e = 0) : !0 === e && (e = bo),
                        { x: wo(e, "left", "right"), y: wo(e, "top", "bottom") }
                      );
                    })(r)),
                    i !== this.constraints &&
                      a &&
                      this.constraints &&
                      !this.hasMutatedConstraints &&
                      Eo(function (t) {
                        e.getAxisMotionValue(t) &&
                          (e.constraints[t] = (function (e, t) {
                            var n = {};
                            return (
                              void 0 !== t.min && (n.min = t.min - e.min),
                              void 0 !== t.max && (n.max = t.max - e.min),
                              n
                            );
                          })(a.layoutBox[t], e.constraints[t]));
                      });
                },
              },
              {
                key: "resolveRefConstraints",
                value: function () {
                  var e = this.getProps(),
                    t = e.dragConstraints,
                    n = e.onMeasureDragConstraints;
                  if (!t || !Ke(t)) return !1;
                  var r = t.current;
                  da(
                    null !== r,
                    "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
                  );
                  var a = this.visualElement.projection;
                  if (!a || !a.layout) return !1;
                  var i = (function (e, t, n) {
                      var r = Uo(e, n),
                        a = t.scroll;
                      return a && (Do(r.x, a.offset.x), Do(r.y, a.offset.y)), r;
                    })(r, a.root, this.visualElement.getTransformPagePoint()),
                    o = (function (e, t) {
                      return { x: go(e.x, t.x), y: go(e.y, t.y) };
                    })(a.layout.layoutBox, i);
                  if (n) {
                    var s = n(
                      (function (e) {
                        var t = e.x,
                          n = e.y;
                        return {
                          top: n.min,
                          right: t.max,
                          bottom: n.max,
                          left: t.min,
                        };
                      })(o)
                    );
                    (this.hasMutatedConstraints = !!s), s && (o = Co(s));
                  }
                  return o;
                },
              },
              {
                key: "startAnimation",
                value: function (e) {
                  var t = this,
                    n = this.getProps(),
                    r = n.drag,
                    a = n.dragMomentum,
                    i = n.dragElastic,
                    o = n.dragTransition,
                    s = n.dragSnapToOrigin,
                    l = n.onDragTransitionEnd,
                    u = this.constraints || {},
                    c = Eo(function (n) {
                      if (Ho(n, r, t.currentDirection)) {
                        var l = (u && u[n]) || {};
                        s && (l = { min: 0, max: 0 });
                        var c = i ? 200 : 1e6,
                          f = i ? 40 : 1e7,
                          d = We(
                            We(
                              {
                                type: "inertia",
                                velocity: a ? e[n] : 0,
                                bounceStiffness: c,
                                bounceDamping: f,
                                timeConstant: 750,
                                restDelta: 1,
                                restSpeed: 10,
                              },
                              o
                            ),
                            l
                          );
                        return t.startAxisValueAnimation(n, d);
                      }
                    });
                  return Promise.all(c).then(l);
                },
              },
              {
                key: "startAxisValueAnimation",
                value: function (e, t) {
                  var n = this.getAxisMotionValue(e);
                  return n.start(zi(e, n, 0, t));
                },
              },
              {
                key: "stopAnimation",
                value: function () {
                  var e = this;
                  Eo(function (t) {
                    return e.getAxisMotionValue(t).stop();
                  });
                },
              },
              {
                key: "getAxisMotionValue",
                value: function (e) {
                  var t = "_drag" + e.toUpperCase(),
                    n = this.visualElement.getProps(),
                    r = n[t];
                  return (
                    r ||
                    this.visualElement.getValue(
                      e,
                      (n.initial ? n.initial[e] : void 0) || 0
                    )
                  );
                },
              },
              {
                key: "snapToCursor",
                value: function (e) {
                  var t = this;
                  Eo(function (n) {
                    if (Ho(n, t.getProps().drag, t.currentDirection)) {
                      var r = t.visualElement.projection,
                        a = t.getAxisMotionValue(n);
                      if (r && r.layout) {
                        var i = r.layout.layoutBox[n],
                          o = i.min,
                          s = i.max;
                        a.set(e[n] - wa(o, s, 0.5));
                      }
                    }
                  });
                },
              },
              {
                key: "scalePositionWithinConstraints",
                value: function () {
                  var e = this;
                  if (this.visualElement.current) {
                    var t = this.getProps(),
                      n = t.drag,
                      r = t.dragConstraints,
                      a = this.visualElement.projection;
                    if (Ke(r) && a && this.constraints) {
                      this.stopAnimation();
                      var i = { x: 0, y: 0 };
                      Eo(function (t) {
                        var n = e.getAxisMotionValue(t);
                        if (n) {
                          var r = n.get();
                          i[t] = (function (e, t) {
                            var n = 0.5,
                              r = uo(e),
                              a = uo(t);
                            return (
                              a > r
                                ? (n = Oa(t.min, t.max - r, e.min))
                                : r > a && (n = Oa(e.min, e.max - a, t.min)),
                              Lt(0, 1, n)
                            );
                          })({ min: r, max: r }, e.constraints[t]);
                        }
                      });
                      var o = this.visualElement.getProps().transformTemplate;
                      (this.visualElement.current.style.transform = o
                        ? o({}, "")
                        : "none"),
                        a.root && a.root.updateScroll(),
                        a.updateLayout(),
                        this.resolveConstraints(),
                        Eo(function (t) {
                          if (Ho(t, n, null)) {
                            var r = e.getAxisMotionValue(t),
                              a = e.constraints[t],
                              o = a.min,
                              s = a.max;
                            r.set(wa(o, s, i[t]));
                          }
                        });
                    }
                  }
                },
              },
              {
                key: "addListeners",
                value: function () {
                  var e = this;
                  if (this.visualElement.current) {
                    Bo.set(this.visualElement, this);
                    var t = Dn(
                        this.visualElement.current,
                        "pointerdown",
                        function (t) {
                          var n = e.getProps(),
                            r = n.drag,
                            a = n.dragListener;
                          r && (void 0 === a || a) && e.start(t);
                        }
                      ),
                      n = function () {
                        Ke(e.getProps().dragConstraints) &&
                          (e.constraints = e.resolveRefConstraints());
                      },
                      r = this.visualElement.projection,
                      a = r.addEventListener("measure", n);
                    r &&
                      !r.layout &&
                      (r.root && r.root.updateScroll(), r.updateLayout()),
                      n();
                    var i = Ln(window, "resize", function () {
                        return e.scalePositionWithinConstraints();
                      }),
                      o = r.addEventListener("didUpdate", function (t) {
                        var n = t.delta,
                          r = t.hasLayoutChanged;
                        e.isDragging &&
                          r &&
                          (Eo(function (t) {
                            var r = e.getAxisMotionValue(t);
                            r &&
                              ((e.originPoint[t] += n[t].translate),
                              r.set(r.get() + n[t].translate));
                          }),
                          e.visualElement.render());
                      });
                    return function () {
                      i(), t(), a(), o && o();
                    };
                  }
                },
              },
              {
                key: "getProps",
                value: function () {
                  var e = this.visualElement.getProps(),
                    t = e.drag,
                    n = void 0 !== t && t,
                    r = e.dragDirectionLock,
                    a = void 0 !== r && r,
                    i = e.dragPropagation,
                    o = void 0 !== i && i,
                    s = e.dragConstraints,
                    l = void 0 !== s && s,
                    u = e.dragElastic,
                    c = void 0 === u ? bo : u,
                    f = e.dragMomentum,
                    d = void 0 === f || f;
                  return We(
                    We({}, e),
                    {},
                    {
                      drag: n,
                      dragDirectionLock: a,
                      dragPropagation: o,
                      dragConstraints: l,
                      dragElastic: c,
                      dragMomentum: d,
                    }
                  );
                },
              },
            ]),
            e
          );
        })();
      function Ho(e, t, n) {
        return (!0 === t || t === e) && (null === n || n === e);
      }
      var $o = (function (e) {
          g(n, e);
          var t = k(n);
          function n(e) {
            var r;
            return (
              d(this, n),
              ((r = t.call(this, e)).removeGroupControls = Gn),
              (r.removeListeners = Gn),
              (r.controls = new Wo(e)),
              r
            );
          }
          return (
            m(n, [
              {
                key: "mount",
                value: function () {
                  var e = this.node.getProps().dragControls;
                  e && (this.removeGroupControls = e.subscribe(this.controls)),
                    (this.removeListeners = this.controls.addListeners() || Gn);
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.removeGroupControls(), this.removeListeners();
                },
              },
            ]),
            n
          );
        })(Hn),
        Qo = (function (e) {
          g(n, e);
          var t = k(n);
          function n() {
            var e;
            return (
              d(this, n),
              ((e = t.apply(this, arguments)).removePointerDownListener = Gn),
              e
            );
          }
          return (
            m(n, [
              {
                key: "onPointerDown",
                value: function (e) {
                  this.session = new no(e, this.createPanHandlers(), {
                    transformPagePoint: this.node.getTransformPagePoint(),
                  });
                },
              },
              {
                key: "createPanHandlers",
                value: function () {
                  var e = this,
                    t = this.node.getProps(),
                    n = t.onPanSessionStart,
                    r = t.onPanStart,
                    a = t.onPan,
                    i = t.onPanEnd;
                  return {
                    onSessionStart: n,
                    onStart: r,
                    onMove: a,
                    onEnd: function (t, n) {
                      delete e.session, i && i(t, n);
                    },
                  };
                },
              },
              {
                key: "mount",
                value: function () {
                  var e = this;
                  this.removePointerDownListener = Dn(
                    this.node.current,
                    "pointerdown",
                    function (t) {
                      return e.onPointerDown(t);
                    }
                  );
                },
              },
              {
                key: "update",
                value: function () {
                  this.session &&
                    this.session.updateHandlers(this.createPanHandlers());
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.removePointerDownListener(),
                    this.session && this.session.end();
                },
              },
            ]),
            n
          );
        })(Hn);
      function Yo(e, t) {
        return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
      }
      var qo = {
        correct: function (e, t) {
          if (!t.target) return e;
          if ("string" === typeof e) {
            if (!Ht.test(e)) return e;
            e = parseFloat(e);
          }
          var n = Yo(e, t.target.x),
            r = Yo(e, t.target.y);
          return "".concat(n, "% ").concat(r, "%");
        },
      };
      var Go = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      var Xo = 4;
      function Ko(e, t) {
        var n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        da(
          n <= Xo,
          'Max CSS variable fallback depth detected in property "'.concat(
            e,
            '". This may indicate a circular fallback dependency.'
          )
        );
        var r = (function (e) {
            var t = Go.exec(e);
            if (!t) return [,];
            var n = u(t, 3);
            return [n[1], n[2]];
          })(e),
          a = u(r, 2),
          i = a[0],
          o = a[1];
        if (i) {
          var s = window.getComputedStyle(t).getPropertyValue(i);
          return s ? s.trim() : Nt(o) ? Ko(o, t, n + 1) : o;
        }
      }
      function Zo(e, t, n) {
        var r = Object.assign(
            {},
            ((function (e) {
              if (null == e) throw new TypeError("Cannot destructure " + e);
            })(t),
            t)
          ),
          a = e.current;
        if (!(a instanceof Element)) return { target: r, transitionEnd: n };
        for (var i in (n && (n = We({}, n)),
        e.values.forEach(function (e) {
          var t = e.get();
          if (Nt(t)) {
            var n = Ko(t, a);
            n && e.set(n);
          }
        }),
        r)) {
          var o = r[i];
          if (Nt(o)) {
            var s = Ko(o, a);
            s && ((r[i] = s), n && void 0 === n[i] && (n[i] = o));
          }
        }
        return { target: r, transitionEnd: n };
      }
      var Jo = "_$css",
        es = {
          correct: function (e, t) {
            var n = t.treeScale,
              r = t.projectionDelta,
              a = e,
              i = e.includes("var("),
              o = [];
            i &&
              (e = e.replace(Go, function (e) {
                return o.push(e), Jo;
              }));
            var s = $r.parse(e);
            if (s.length > 5) return a;
            var l = $r.createTransformer(e),
              u = "number" !== typeof s[0] ? 1 : 0,
              c = r.x.scale * n.x,
              f = r.y.scale * n.y;
            (s[0 + u] /= c), (s[1 + u] /= f);
            var d = wa(c, f, 0.5);
            "number" === typeof s[2 + u] && (s[2 + u] /= d),
              "number" === typeof s[3 + u] && (s[3 + u] /= d);
            var p = l(s);
            if (i) {
              var h = 0;
              p = p.replace(Jo, function () {
                var e = o[h];
                return h++, e;
              });
            }
            return p;
          },
        },
        ts = (function (e) {
          g(n, e);
          var t = k(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return (
            m(n, [
              {
                key: "componentDidMount",
                value: function () {
                  var e,
                    t = this,
                    n = this.props,
                    r = n.visualElement,
                    a = n.layoutGroup,
                    i = n.switchLayoutGroup,
                    o = n.layoutId,
                    s = r.projection;
                  (e = rs),
                    Object.assign(xt, e),
                    s &&
                      (a.group && a.group.add(s),
                      i && i.register && o && i.register(s),
                      s.root.didUpdate(),
                      s.addEventListener("animationComplete", function () {
                        t.safeToRemove();
                      }),
                      s.setOptions(
                        We(
                          We({}, s.options),
                          {},
                          {
                            onExitComplete: function () {
                              return t.safeToRemove();
                            },
                          }
                        )
                      )),
                    (ft.hasEverUpdated = !0);
                },
              },
              {
                key: "getSnapshotBeforeUpdate",
                value: function (e) {
                  var t = this,
                    n = this.props,
                    r = n.layoutDependency,
                    a = n.visualElement,
                    i = n.drag,
                    o = n.isPresent,
                    s = a.projection;
                  return s
                    ? ((s.isPresent = o),
                      i || e.layoutDependency !== r || void 0 === r
                        ? s.willUpdate()
                        : this.safeToRemove(),
                      e.isPresent !== o &&
                        (o
                          ? s.promote()
                          : s.relegate() ||
                            br.postRender(function () {
                              var e = s.getStack();
                              (e && e.members.length) || t.safeToRemove();
                            })),
                      null)
                    : null;
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  var e = this.props.visualElement.projection;
                  e &&
                    (e.root.didUpdate(),
                    !e.currentAnimation && e.isLead() && this.safeToRemove());
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  var e = this.props,
                    t = e.visualElement,
                    n = e.layoutGroup,
                    r = e.switchLayoutGroup,
                    a = t.projection;
                  a &&
                    (a.scheduleCheckAfterUnmount(),
                    n && n.group && n.group.remove(a),
                    r && r.deregister && r.deregister(a));
                },
              },
              {
                key: "safeToRemove",
                value: function () {
                  var e = this.props.safeToRemove;
                  e && e();
                },
              },
              {
                key: "render",
                value: function () {
                  return null;
                },
              },
            ]),
            n
          );
        })(t.Component);
      function ns(e) {
        var n = (function () {
            var e = (0, t.useContext)(Qe);
            if (null === e) return [!0, null];
            var n = e.isPresent,
              r = e.onExitComplete,
              a = e.register,
              i = (0, t.useId)();
            return (
              (0, t.useEffect)(function () {
                return a(i);
              }, []),
              !n && r
                ? [
                    !1,
                    function () {
                      return r && r(i);
                    },
                  ]
                : [!0]
            );
          })(),
          r = u(n, 2),
          a = r[0],
          i = r[1],
          o = (0, t.useContext)(pt);
        return t.createElement(
          ts,
          We(
            We({}, e),
            {},
            {
              layoutGroup: o,
              switchLayoutGroup: (0, t.useContext)(ht),
              isPresent: a,
              safeToRemove: i,
            }
          )
        );
      }
      var rs = {
        borderRadius: We(
          We({}, qo),
          {},
          {
            applyTo: [
              "borderTopLeftRadius",
              "borderTopRightRadius",
              "borderBottomLeftRadius",
              "borderBottomRightRadius",
            ],
          }
        ),
        borderTopLeftRadius: qo,
        borderTopRightRadius: qo,
        borderBottomLeftRadius: qo,
        borderBottomRightRadius: qo,
        boxShadow: es,
      };
      var as = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        is = as.length,
        os = function (e) {
          return "string" === typeof e ? parseFloat(e) : e;
        },
        ss = function (e) {
          return "number" === typeof e || Ht.test(e);
        };
      function ls(e, t) {
        return void 0 !== e[t] ? e[t] : e.borderRadius;
      }
      var us = fs(0, 0.5, Ua),
        cs = fs(0.5, 0.95, Gn);
      function fs(e, t, n) {
        return function (r) {
          return r < e ? 0 : r > t ? 1 : n(Oa(e, t, r));
        };
      }
      function ds(e, t) {
        (e.min = t.min), (e.max = t.max);
      }
      function ps(e, t) {
        ds(e.x, t.x), ds(e.y, t.y);
      }
      function hs(e, t, n, r, a) {
        return (
          (e = Oo((e -= t), 1 / n, r)), void 0 !== a && (e = Oo(e, 1 / a, r)), e
        );
      }
      function vs(e, t, n, r, a) {
        var i = u(n, 3),
          o = i[0],
          s = i[1],
          l = i[2];
        !(function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 0.5,
            a = arguments.length > 4 ? arguments[4] : void 0,
            i =
              arguments.length > 5 && void 0 !== arguments[5]
                ? arguments[5]
                : e,
            o =
              arguments.length > 6 && void 0 !== arguments[6]
                ? arguments[6]
                : e;
          if (
            (Wt.test(t) &&
              ((t = parseFloat(t)), (t = wa(o.min, o.max, t / 100) - o.min)),
            "number" === typeof t)
          ) {
            var s = wa(i.min, i.max, r);
            e === i && (s -= t),
              (e.min = hs(e.min, t, n, s, a)),
              (e.max = hs(e.max, t, n, s, a));
          }
        })(e, t[o], t[s], t[l], t.scale, r, a);
      }
      var ms = ["x", "scaleX", "originX"],
        ys = ["y", "scaleY", "originY"];
      function gs(e, t, n, r) {
        vs(e.x, t, ms, n ? n.x : void 0, r ? r.x : void 0),
          vs(e.y, t, ys, n ? n.y : void 0, r ? r.y : void 0);
      }
      function bs(e) {
        return 0 === e.translate && 1 === e.scale;
      }
      function ws(e) {
        return bs(e.x) && bs(e.y);
      }
      function xs(e, t) {
        return (
          e.x.min === t.x.min &&
          e.x.max === t.x.max &&
          e.y.min === t.y.min &&
          e.y.max === t.y.max
        );
      }
      function ks(e) {
        return uo(e.x) / uo(e.y);
      }
      var Ss = (function () {
        function e() {
          d(this, e), (this.members = []);
        }
        return (
          m(e, [
            {
              key: "add",
              value: function (e) {
                Cr(this.members, e), e.scheduleRender();
              },
            },
            {
              key: "remove",
              value: function (e) {
                if (
                  (Pr(this.members, e),
                  e === this.prevLead && (this.prevLead = void 0),
                  e === this.lead)
                ) {
                  var t = this.members[this.members.length - 1];
                  t && this.promote(t);
                }
              },
            },
            {
              key: "relegate",
              value: function (e) {
                var t,
                  n = this.members.findIndex(function (t) {
                    return e === t;
                  });
                if (0 === n) return !1;
                for (var r = n; r >= 0; r--) {
                  var a = this.members[r];
                  if (!1 !== a.isPresent) {
                    t = a;
                    break;
                  }
                }
                return !!t && (this.promote(t), !0);
              },
            },
            {
              key: "promote",
              value: function (e, t) {
                var n = this.lead;
                e !== n &&
                  ((this.prevLead = n),
                  (this.lead = e),
                  e.show(),
                  n &&
                    (n.instance && n.scheduleRender(),
                    e.scheduleRender(),
                    (e.resumeFrom = n),
                    t && (e.resumeFrom.preserveOpacity = !0),
                    n.snapshot &&
                      ((e.snapshot = n.snapshot),
                      (e.snapshot.latestValues =
                        n.animationValues || n.latestValues)),
                    e.root && e.root.isUpdating && (e.isLayoutDirty = !0),
                    !1 === e.options.crossfade && n.hide()));
              },
            },
            {
              key: "exitAnimationComplete",
              value: function () {
                this.members.forEach(function (e) {
                  var t = e.options,
                    n = e.resumingFrom;
                  t.onExitComplete && t.onExitComplete(),
                    n && n.options.onExitComplete && n.options.onExitComplete();
                });
              },
            },
            {
              key: "scheduleRender",
              value: function () {
                this.members.forEach(function (e) {
                  e.instance && e.scheduleRender(!1);
                });
              },
            },
            {
              key: "removeLeadSnapshot",
              value: function () {
                this.lead &&
                  this.lead.snapshot &&
                  (this.lead.snapshot = void 0);
              },
            },
          ]),
          e
        );
      })();
      function Es(e, t, n) {
        var r = "",
          a = e.x.translate / t.x,
          i = e.y.translate / t.y;
        if (
          ((a || i) &&
            (r = "translate3d(".concat(a, "px, ").concat(i, "px, 0) ")),
          (1 === t.x && 1 === t.y) ||
            (r += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")),
          n)
        ) {
          var o = n.rotate,
            s = n.rotateX,
            l = n.rotateY;
          o && (r += "rotate(".concat(o, "deg) ")),
            s && (r += "rotateX(".concat(s, "deg) ")),
            l && (r += "rotateY(".concat(l, "deg) "));
        }
        var u = e.x.scale * t.x,
          c = e.y.scale * t.y;
        return (
          (1 === u && 1 === c) ||
            (r += "scale(".concat(u, ", ").concat(c, ")")),
          r || "none"
        );
      }
      var Cs = function (e, t) {
          return e.depth - t.depth;
        },
        Ps = (function () {
          function e() {
            d(this, e), (this.children = []), (this.isDirty = !1);
          }
          return (
            m(e, [
              {
                key: "add",
                value: function (e) {
                  Cr(this.children, e), (this.isDirty = !0);
                },
              },
              {
                key: "remove",
                value: function (e) {
                  Pr(this.children, e), (this.isDirty = !0);
                },
              },
              {
                key: "forEach",
                value: function (e) {
                  this.isDirty && this.children.sort(Cs),
                    (this.isDirty = !1),
                    this.children.forEach(e);
                },
              },
            ]),
            e
          );
        })();
      var Ts = ["", "X", "Y", "Z"],
        js = 1e3,
        _s = 0,
        Ns = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function Os(e) {
        var t = e.attachResizeListener,
          n = e.defaultParent,
          r = e.measureScroll,
          a = e.checkIsScrollRoot,
          i = e.resetTransform;
        return (function () {
          function e(t) {
            var r = this,
              a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null === n || void 0 === n
                  ? void 0
                  : n();
            d(this, e),
              (this.id = _s++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function () {
                r.isUpdating && ((r.isUpdating = !1), r.clearAllSnapshots());
              }),
              (this.updateProjection = function () {
                var e;
                (Ns.totalNodes =
                  Ns.resolvedTargetDeltas =
                  Ns.recalculatedProjection =
                    0),
                  r.nodes.forEach(Ms),
                  r.nodes.forEach(zs),
                  r.nodes.forEach(Us),
                  r.nodes.forEach(Rs),
                  (e = Ns),
                  window.MotionDebug && window.MotionDebug.record(e);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.elementId = t),
              (this.latestValues = a),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [].concat(f(i.path), [i]) : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (var o = 0; o < this.path.length; o++)
              this.path[o].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Ps());
          }
          return (
            m(e, [
              {
                key: "addEventListener",
                value: function (e, t) {
                  return (
                    this.eventHandlers.has(e) ||
                      this.eventHandlers.set(e, new Tr()),
                    this.eventHandlers.get(e).add(t)
                  );
                },
              },
              {
                key: "notifyListeners",
                value: function (e) {
                  for (
                    var t = this.eventHandlers.get(e),
                      n = arguments.length,
                      r = new Array(n > 1 ? n - 1 : 0),
                      a = 1;
                    a < n;
                    a++
                  )
                    r[a - 1] = arguments[a];
                  t && t.notify.apply(t, r);
                },
              },
              {
                key: "hasListeners",
                value: function (e) {
                  return this.eventHandlers.has(e);
                },
              },
              {
                key: "registerPotentialNode",
                value: function (e, t) {
                  this.potentialNodes.set(e, t);
                },
              },
              {
                key: "mount",
                value: function (e) {
                  var n = this,
                    r =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1];
                  if (!this.instance) {
                    (this.isSVG =
                      e instanceof SVGElement && "svg" !== e.tagName),
                      (this.instance = e);
                    var a = this.options,
                      i = a.layoutId,
                      o = a.layout,
                      s = a.visualElement;
                    if (
                      (s && !s.current && s.mount(e),
                      this.root.nodes.add(this),
                      this.parent && this.parent.children.add(this),
                      this.elementId &&
                        this.root.potentialNodes.delete(this.elementId),
                      r && (o || i) && (this.isLayoutDirty = !0),
                      t)
                    ) {
                      var l,
                        u = function () {
                          return (n.root.updateBlockedByResize = !1);
                        };
                      t(e, function () {
                        (n.root.updateBlockedByResize = !0),
                          l && l(),
                          (l = _i(u, 250)),
                          ft.hasAnimatedSinceResize &&
                            ((ft.hasAnimatedSinceResize = !1),
                            n.nodes.forEach(Fs));
                      });
                    }
                    i && this.root.registerSharedNode(i, this),
                      !1 !== this.options.animate &&
                        s &&
                        (i || o) &&
                        this.addEventListener("didUpdate", function (e) {
                          var t = e.delta,
                            r = e.hasLayoutChanged,
                            a = e.hasRelativeTargetChanged,
                            i = e.layout;
                          if (n.isTreeAnimationBlocked())
                            return (
                              (n.target = void 0),
                              void (n.relativeTarget = void 0)
                            );
                          var o =
                              n.options.transition ||
                              s.getDefaultTransition() ||
                              Ys,
                            l = s.getProps(),
                            u = l.onLayoutAnimationStart,
                            c = l.onLayoutAnimationComplete,
                            f = !n.targetLayout || !xs(n.targetLayout, i) || a,
                            d = !r && a;
                          if (
                            n.options.layoutRoot ||
                            (n.resumeFrom && n.resumeFrom.instance) ||
                            d ||
                            (r && (f || !n.currentAnimation))
                          ) {
                            n.resumeFrom &&
                              ((n.resumingFrom = n.resumeFrom),
                              (n.resumingFrom.resumingFrom = void 0)),
                              n.setAnimationOrigin(t, d);
                            var p = We(
                              We({}, Fi(o, "layout")),
                              {},
                              { onPlay: u, onComplete: c }
                            );
                            (s.shouldReduceMotion || n.options.layoutRoot) &&
                              ((p.delay = 0), (p.type = !1)),
                              n.startAnimation(p);
                          } else r || 0 !== n.animationProgress || Fs(n), n.isLead() && n.options.onExitComplete && n.options.onExitComplete();
                          n.targetLayout = i;
                        });
                  }
                },
              },
              {
                key: "unmount",
                value: function () {
                  this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this);
                  var e = this.getStack();
                  e && e.remove(this),
                    this.parent && this.parent.children.delete(this),
                    (this.instance = void 0),
                    wr.preRender(this.updateProjection);
                },
              },
              {
                key: "blockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !0;
                },
              },
              {
                key: "unblockUpdate",
                value: function () {
                  this.updateManuallyBlocked = !1;
                },
              },
              {
                key: "isUpdateBlocked",
                value: function () {
                  return (
                    this.updateManuallyBlocked || this.updateBlockedByResize
                  );
                },
              },
              {
                key: "isTreeAnimationBlocked",
                value: function () {
                  return (
                    this.isAnimationBlocked ||
                    (this.parent && this.parent.isTreeAnimationBlocked()) ||
                    !1
                  );
                },
              },
              {
                key: "startUpdate",
                value: function () {
                  this.isUpdateBlocked() ||
                    ((this.isUpdating = !0),
                    this.nodes && this.nodes.forEach(Bs),
                    this.animationId++);
                },
              },
              {
                key: "getTransformTemplate",
                value: function () {
                  var e = this.options.visualElement;
                  return e && e.getProps().transformTemplate;
                },
              },
              {
                key: "willUpdate",
                value: function () {
                  var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  if (this.root.isUpdateBlocked())
                    this.options.onExitComplete &&
                      this.options.onExitComplete();
                  else if (
                    (!this.root.isUpdating && this.root.startUpdate(),
                    !this.isLayoutDirty)
                  ) {
                    this.isLayoutDirty = !0;
                    for (var t = 0; t < this.path.length; t++) {
                      var n = this.path[t];
                      (n.shouldResetTransform = !0),
                        n.updateScroll("snapshot"),
                        n.options.layoutRoot && n.willUpdate(!1);
                    }
                    var r = this.options,
                      a = r.layoutId,
                      i = r.layout;
                    if (void 0 !== a || i) {
                      var o = this.getTransformTemplate();
                      (this.prevTransformTemplateValue = o
                        ? o(this.latestValues, "")
                        : void 0),
                        this.updateSnapshot(),
                        e && this.notifyListeners("willUpdate");
                    }
                  }
                },
              },
              {
                key: "didUpdate",
                value: function () {
                  if (this.isUpdateBlocked())
                    return (
                      this.unblockUpdate(),
                      this.clearAllSnapshots(),
                      void this.nodes.forEach(Vs)
                    );
                  this.isUpdating &&
                    ((this.isUpdating = !1),
                    this.potentialNodes.size &&
                      (this.potentialNodes.forEach(qs),
                      this.potentialNodes.clear()),
                    this.nodes.forEach(Is),
                    this.nodes.forEach(Ls),
                    this.nodes.forEach(As),
                    this.clearAllSnapshots(),
                    xr.update(),
                    xr.preRender(),
                    xr.render());
                },
              },
              {
                key: "clearAllSnapshots",
                value: function () {
                  this.nodes.forEach(Ds), this.sharedNodes.forEach(Ws);
                },
              },
              {
                key: "scheduleUpdateProjection",
                value: function () {
                  br.preRender(this.updateProjection, !1, !0);
                },
              },
              {
                key: "scheduleCheckAfterUnmount",
                value: function () {
                  var e = this;
                  br.postRender(function () {
                    e.isLayoutDirty
                      ? e.root.didUpdate()
                      : e.root.checkUpdateFailed();
                  });
                },
              },
              {
                key: "updateSnapshot",
                value: function () {
                  !this.snapshot &&
                    this.instance &&
                    (this.snapshot = this.measure());
                },
              },
              {
                key: "updateLayout",
                value: function () {
                  if (
                    this.instance &&
                    (this.updateScroll(),
                    (this.options.alwaysMeasureLayout && this.isLead()) ||
                      this.isLayoutDirty)
                  ) {
                    if (this.resumeFrom && !this.resumeFrom.instance)
                      for (var e = 0; e < this.path.length; e++) {
                        this.path[e].updateScroll();
                      }
                    var t = this.layout;
                    (this.layout = this.measure(!1)),
                      (this.layoutCorrected = So()),
                      (this.isLayoutDirty = !1),
                      (this.projectionDelta = void 0),
                      this.notifyListeners("measure", this.layout.layoutBox);
                    var n = this.options.visualElement;
                    n &&
                      n.notify(
                        "LayoutMeasure",
                        this.layout.layoutBox,
                        t ? t.layoutBox : void 0
                      );
                  }
                },
              },
              {
                key: "updateScroll",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "measure",
                    t = Boolean(this.options.layoutScroll && this.instance);
                  this.scroll &&
                    this.scroll.animationId === this.root.animationId &&
                    this.scroll.phase === e &&
                    (t = !1),
                    t &&
                      (this.scroll = {
                        animationId: this.root.animationId,
                        phase: e,
                        isRoot: a(this.instance),
                        offset: r(this.instance),
                      });
                },
              },
              {
                key: "resetTransform",
                value: function () {
                  if (i) {
                    var e = this.isLayoutDirty || this.shouldResetTransform,
                      t = this.projectionDelta && !ws(this.projectionDelta),
                      n = this.getTransformTemplate(),
                      r = n ? n(this.latestValues, "") : void 0,
                      a = r !== this.prevTransformTemplateValue;
                    e &&
                      (t || jo(this.latestValues) || a) &&
                      (i(this.instance, r),
                      (this.shouldResetTransform = !1),
                      this.scheduleRender());
                  }
                },
              },
              {
                key: "measure",
                value: function () {
                  var e,
                    t =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0],
                    n = this.measurePageBox(),
                    r = this.removeElementScroll(n);
                  return (
                    t && (r = this.removeTransform(r)),
                    Gs((e = r).x),
                    Gs(e.y),
                    {
                      animationId: this.root.animationId,
                      measuredBox: n,
                      layoutBox: r,
                      latestValues: {},
                      source: this.id,
                    }
                  );
                },
              },
              {
                key: "measurePageBox",
                value: function () {
                  var e = this.options.visualElement;
                  if (!e) return So();
                  var t = e.measureViewportBox(),
                    n = this.root.scroll;
                  return n && (Do(t.x, n.offset.x), Do(t.y, n.offset.y)), t;
                },
              },
              {
                key: "removeElementScroll",
                value: function (e) {
                  var t = So();
                  ps(t, e);
                  for (var n = 0; n < this.path.length; n++) {
                    var r = this.path[n],
                      a = r.scroll,
                      i = r.options;
                    if (r !== this.root && a && i.layoutScroll) {
                      if (a.isRoot) {
                        ps(t, e);
                        var o = this.root.scroll;
                        o && (Do(t.x, -o.offset.x), Do(t.y, -o.offset.y));
                      }
                      Do(t.x, a.offset.x), Do(t.y, a.offset.y);
                    }
                  }
                  return t;
                },
              },
              {
                key: "applyTransform",
                value: function (e) {
                  var t =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    n = So();
                  ps(n, e);
                  for (var r = 0; r < this.path.length; r++) {
                    var a = this.path[r];
                    !t &&
                      a.options.layoutScroll &&
                      a.scroll &&
                      a !== a.root &&
                      zo(n, { x: -a.scroll.offset.x, y: -a.scroll.offset.y }),
                      jo(a.latestValues) && zo(n, a.latestValues);
                  }
                  return jo(this.latestValues) && zo(n, this.latestValues), n;
                },
              },
              {
                key: "removeTransform",
                value: function (e) {
                  var t = So();
                  ps(t, e);
                  for (var n = 0; n < this.path.length; n++) {
                    var r = this.path[n];
                    if (r.instance && jo(r.latestValues)) {
                      To(r.latestValues) && r.updateSnapshot();
                      var a = So();
                      ps(a, r.measurePageBox()),
                        gs(
                          t,
                          r.latestValues,
                          r.snapshot ? r.snapshot.layoutBox : void 0,
                          a
                        );
                    }
                  }
                  return jo(this.latestValues) && gs(t, this.latestValues), t;
                },
              },
              {
                key: "setTargetDelta",
                value: function (e) {
                  (this.targetDelta = e),
                    this.root.scheduleUpdateProjection(),
                    (this.isProjectionDirty = !0);
                },
              },
              {
                key: "setOptions",
                value: function (e) {
                  this.options = We(
                    We(We({}, this.options), e),
                    {},
                    { crossfade: void 0 === e.crossfade || e.crossfade }
                  );
                },
              },
              {
                key: "clearMeasurements",
                value: function () {
                  (this.scroll = void 0),
                    (this.layout = void 0),
                    (this.snapshot = void 0),
                    (this.prevTransformTemplateValue = void 0),
                    (this.targetDelta = void 0),
                    (this.target = void 0),
                    (this.isLayoutDirty = !1);
                },
              },
              {
                key: "resolveTargetDelta",
                value: function () {
                  var e,
                    t = this.getLead();
                  if (
                    (this.isProjectionDirty ||
                      (this.isProjectionDirty = t.isProjectionDirty),
                    this.isTransformDirty ||
                      (this.isTransformDirty = t.isTransformDirty),
                    this.isSharedProjectionDirty ||
                      (this.isSharedProjectionDirty =
                        t.isSharedProjectionDirty),
                    !!(
                      ((Boolean(this.resumingFrom) || this !== t) &&
                        this.isSharedProjectionDirty) ||
                      this.isProjectionDirty ||
                      (null === (e = this.parent) || void 0 === e
                        ? void 0
                        : e.isProjectionDirty) ||
                      this.attemptToResolveRelativeTarget
                    ))
                  ) {
                    var n = this.options,
                      r = n.layout,
                      a = n.layoutId;
                    if (this.layout && (r || a)) {
                      if (!this.targetDelta && !this.relativeTarget) {
                        var i = this.getClosestProjectingParent();
                        i && i.layout
                          ? ((this.relativeParent = i),
                            (this.relativeTarget = So()),
                            (this.relativeTargetOrigin = So()),
                            mo(
                              this.relativeTargetOrigin,
                              this.layout.layoutBox,
                              i.layout.layoutBox
                            ),
                            ps(this.relativeTarget, this.relativeTargetOrigin))
                          : (this.relativeParent = this.relativeTarget =
                              void 0);
                      }
                      if (this.relativeTarget || this.targetDelta) {
                        var o, s, l;
                        if (
                          (this.target ||
                            ((this.target = So()),
                            (this.targetWithTransforms = So())),
                          this.relativeTarget &&
                          this.relativeTargetOrigin &&
                          this.relativeParent &&
                          this.relativeParent.target
                            ? ((o = this.target),
                              (s = this.relativeTarget),
                              (l = this.relativeParent.target),
                              ho(o.x, s.x, l.x),
                              ho(o.y, s.y, l.y))
                            : this.targetDelta
                            ? (Boolean(this.resumingFrom)
                                ? (this.target = this.applyTransform(
                                    this.layout.layoutBox
                                  ))
                                : ps(this.target, this.layout.layoutBox),
                              Mo(this.target, this.targetDelta))
                            : ps(this.target, this.layout.layoutBox),
                          this.attemptToResolveRelativeTarget)
                        ) {
                          this.attemptToResolveRelativeTarget = !1;
                          var u = this.getClosestProjectingParent();
                          u &&
                          Boolean(u.resumingFrom) ===
                            Boolean(this.resumingFrom) &&
                          !u.options.layoutScroll &&
                          u.target
                            ? ((this.relativeParent = u),
                              (this.relativeTarget = So()),
                              (this.relativeTargetOrigin = So()),
                              mo(
                                this.relativeTargetOrigin,
                                this.target,
                                u.target
                              ),
                              ps(
                                this.relativeTarget,
                                this.relativeTargetOrigin
                              ))
                            : (this.relativeParent = this.relativeTarget =
                                void 0);
                        }
                        Ns.resolvedTargetDeltas++;
                      }
                    }
                  }
                },
              },
              {
                key: "getClosestProjectingParent",
                value: function () {
                  if (
                    this.parent &&
                    !To(this.parent.latestValues) &&
                    !_o(this.parent.latestValues)
                  )
                    return this.parent.isProjecting()
                      ? this.parent
                      : this.parent.getClosestProjectingParent();
                },
              },
              {
                key: "isProjecting",
                value: function () {
                  return Boolean(
                    (this.relativeTarget ||
                      this.targetDelta ||
                      this.options.layoutRoot) &&
                      this.layout
                  );
                },
              },
              {
                key: "calcProjection",
                value: function () {
                  var e,
                    t = this.getLead(),
                    n = Boolean(this.resumingFrom) || this !== t,
                    r = !0;
                  if (
                    ((this.isProjectionDirty ||
                      (null === (e = this.parent) || void 0 === e
                        ? void 0
                        : e.isProjectionDirty)) &&
                      (r = !1),
                    n &&
                      (this.isSharedProjectionDirty || this.isTransformDirty) &&
                      (r = !1),
                    !r)
                  ) {
                    var a = this.options,
                      i = a.layout,
                      o = a.layoutId;
                    if (
                      ((this.isTreeAnimating = Boolean(
                        (this.parent && this.parent.isTreeAnimating) ||
                          this.currentAnimation ||
                          this.pendingAnimation
                      )),
                      this.isTreeAnimating ||
                        (this.targetDelta = this.relativeTarget = void 0),
                      this.layout && (i || o))
                    ) {
                      ps(this.layoutCorrected, this.layout.layoutBox),
                        (function (e, t, n) {
                          var r =
                              arguments.length > 3 &&
                              void 0 !== arguments[3] &&
                              arguments[3],
                            a = n.length;
                          if (a) {
                            var i, o;
                            t.x = t.y = 1;
                            for (var s = 0; s < a; s++) {
                              o = (i = n[s]).projectionDelta;
                              var l = i.instance;
                              (l &&
                                l.style &&
                                "contents" === l.style.display) ||
                                (r &&
                                  i.options.layoutScroll &&
                                  i.scroll &&
                                  i !== i.root &&
                                  zo(e, {
                                    x: -i.scroll.offset.x,
                                    y: -i.scroll.offset.y,
                                  }),
                                o &&
                                  ((t.x *= o.x.scale),
                                  (t.y *= o.y.scale),
                                  Mo(e, o)),
                                r &&
                                  jo(i.latestValues) &&
                                  zo(e, i.latestValues));
                            }
                            (t.x = Ro(t.x)), (t.y = Ro(t.y));
                          }
                        })(this.layoutCorrected, this.treeScale, this.path, n);
                      var s = t.target;
                      if (s) {
                        this.projectionDelta ||
                          ((this.projectionDelta = ko()),
                          (this.projectionDeltaWithTransform = ko()));
                        var l = this.treeScale.x,
                          u = this.treeScale.y,
                          c = this.projectionTransform;
                        po(
                          this.projectionDelta,
                          this.layoutCorrected,
                          s,
                          this.latestValues
                        ),
                          (this.projectionTransform = Es(
                            this.projectionDelta,
                            this.treeScale
                          )),
                          (this.projectionTransform === c &&
                            this.treeScale.x === l &&
                            this.treeScale.y === u) ||
                            ((this.hasProjected = !0),
                            this.scheduleRender(),
                            this.notifyListeners("projectionUpdate", s)),
                          Ns.recalculatedProjection++;
                      }
                    }
                  }
                },
              },
              {
                key: "hide",
                value: function () {
                  this.isVisible = !1;
                },
              },
              {
                key: "show",
                value: function () {
                  this.isVisible = !0;
                },
              },
              {
                key: "scheduleRender",
                value: function () {
                  var e =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0];
                  if (
                    (this.options.scheduleRender &&
                      this.options.scheduleRender(),
                    e)
                  ) {
                    var t = this.getStack();
                    t && t.scheduleRender();
                  }
                  this.resumingFrom &&
                    !this.resumingFrom.instance &&
                    (this.resumingFrom = void 0);
                },
              },
              {
                key: "setAnimationOrigin",
                value: function (e) {
                  var t = this,
                    n =
                      arguments.length > 1 &&
                      void 0 !== arguments[1] &&
                      arguments[1],
                    r = this.snapshot,
                    a = r ? r.latestValues : {},
                    i = We({}, this.latestValues),
                    o = ko();
                  (this.relativeParent &&
                    this.relativeParent.options.layoutRoot) ||
                    (this.relativeTarget = this.relativeTargetOrigin = void 0),
                    (this.attemptToResolveRelativeTarget = !n);
                  var s,
                    l = So(),
                    u =
                      (r ? r.source : void 0) !==
                      (this.layout ? this.layout.source : void 0),
                    c = this.getStack(),
                    f = !c || c.members.length <= 1,
                    d = Boolean(
                      u &&
                        !f &&
                        !0 === this.options.crossfade &&
                        !this.path.some(Qs)
                    );
                  (this.animationProgress = 0),
                    (this.mixTargetDelta = function (n) {
                      var r,
                        c,
                        p,
                        h,
                        v = n / 1e3;
                      Hs(o.x, e.x, v),
                        Hs(o.y, e.y, v),
                        t.setTargetDelta(o),
                        t.relativeTarget &&
                          t.relativeTargetOrigin &&
                          t.layout &&
                          t.relativeParent &&
                          t.relativeParent.layout &&
                          (mo(
                            l,
                            t.layout.layoutBox,
                            t.relativeParent.layout.layoutBox
                          ),
                          (r = t.relativeTarget),
                          (c = t.relativeTargetOrigin),
                          (p = l),
                          (h = v),
                          $s(r.x, c.x, p.x, h),
                          $s(r.y, c.y, p.y, h),
                          s &&
                            xs(t.relativeTarget, s) &&
                            (t.isProjectionDirty = !1),
                          s || (s = So()),
                          ps(s, t.relativeTarget)),
                        u &&
                          ((t.animationValues = i),
                          (function (e, t, n, r, a, i) {
                            a
                              ? ((e.opacity = wa(
                                  0,
                                  void 0 !== n.opacity ? n.opacity : 1,
                                  us(r)
                                )),
                                (e.opacityExit = wa(
                                  void 0 !== t.opacity ? t.opacity : 1,
                                  0,
                                  cs(r)
                                )))
                              : i &&
                                (e.opacity = wa(
                                  void 0 !== t.opacity ? t.opacity : 1,
                                  void 0 !== n.opacity ? n.opacity : 1,
                                  r
                                ));
                            for (var o = 0; o < is; o++) {
                              var s = "border".concat(as[o], "Radius"),
                                l = ls(t, s),
                                u = ls(n, s);
                              (void 0 === l && void 0 === u) ||
                                (l || (l = 0),
                                u || (u = 0),
                                0 === l || 0 === u || ss(l) === ss(u)
                                  ? ((e[s] = Math.max(wa(os(l), os(u), r), 0)),
                                    (Wt.test(u) || Wt.test(l)) && (e[s] += "%"))
                                  : (e[s] = u));
                            }
                            (t.rotate || n.rotate) &&
                              (e.rotate = wa(t.rotate || 0, n.rotate || 0, r));
                          })(i, a, t.latestValues, v, d, f)),
                        t.root.scheduleUpdateProjection(),
                        t.scheduleRender(),
                        (t.animationProgress = v);
                    }),
                    this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
                },
              },
              {
                key: "startAnimation",
                value: function (e) {
                  var t = this;
                  this.notifyListeners("animationStart"),
                    this.currentAnimation && this.currentAnimation.stop(),
                    this.resumingFrom &&
                      this.resumingFrom.currentAnimation &&
                      this.resumingFrom.currentAnimation.stop(),
                    this.pendingAnimation &&
                      (wr.update(this.pendingAnimation),
                      (this.pendingAnimation = void 0)),
                    (this.pendingAnimation = br.update(function () {
                      (ft.hasAnimatedSinceResize = !0),
                        (t.currentAnimation = (function (e, t) {
                          var n =
                              arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {},
                            r = Ct(e) ? e : Or(e);
                          return (
                            r.start(zi("", r, t, n)),
                            {
                              stop: function () {
                                return r.stop();
                              },
                              isAnimating: function () {
                                return r.isAnimating();
                              },
                            }
                          );
                        })(
                          0,
                          js,
                          We(
                            We({}, e),
                            {},
                            {
                              onUpdate: function (n) {
                                t.mixTargetDelta(n),
                                  e.onUpdate && e.onUpdate(n);
                              },
                              onComplete: function () {
                                e.onComplete && e.onComplete(),
                                  t.completeAnimation();
                              },
                            }
                          )
                        )),
                        t.resumingFrom &&
                          (t.resumingFrom.currentAnimation =
                            t.currentAnimation),
                        (t.pendingAnimation = void 0);
                    }));
                },
              },
              {
                key: "completeAnimation",
                value: function () {
                  this.resumingFrom &&
                    ((this.resumingFrom.currentAnimation = void 0),
                    (this.resumingFrom.preserveOpacity = void 0));
                  var e = this.getStack();
                  e && e.exitAnimationComplete(),
                    (this.resumingFrom =
                      this.currentAnimation =
                      this.animationValues =
                        void 0),
                    this.notifyListeners("animationComplete");
                },
              },
              {
                key: "finishAnimation",
                value: function () {
                  this.currentAnimation &&
                    (this.mixTargetDelta && this.mixTargetDelta(js),
                    this.currentAnimation.stop()),
                    this.completeAnimation();
                },
              },
              {
                key: "applyTransformsToTarget",
                value: function () {
                  var e = this.getLead(),
                    t = e.targetWithTransforms,
                    n = e.target,
                    r = e.layout,
                    a = e.latestValues;
                  if (t && n && r) {
                    if (
                      this !== e &&
                      this.layout &&
                      r &&
                      Xs(
                        this.options.animationType,
                        this.layout.layoutBox,
                        r.layoutBox
                      )
                    ) {
                      n = this.target || So();
                      var i = uo(this.layout.layoutBox.x);
                      (n.x.min = e.target.x.min), (n.x.max = n.x.min + i);
                      var o = uo(this.layout.layoutBox.y);
                      (n.y.min = e.target.y.min), (n.y.max = n.y.min + o);
                    }
                    ps(t, n),
                      zo(t, a),
                      po(
                        this.projectionDeltaWithTransform,
                        this.layoutCorrected,
                        t,
                        a
                      );
                  }
                },
              },
              {
                key: "registerSharedNode",
                value: function (e, t) {
                  this.sharedNodes.has(e) || this.sharedNodes.set(e, new Ss()),
                    this.sharedNodes.get(e).add(t);
                  var n = t.options.initialPromotionConfig;
                  t.promote({
                    transition: n ? n.transition : void 0,
                    preserveFollowOpacity:
                      n && n.shouldPreserveFollowOpacity
                        ? n.shouldPreserveFollowOpacity(t)
                        : void 0,
                  });
                },
              },
              {
                key: "isLead",
                value: function () {
                  var e = this.getStack();
                  return !e || e.lead === this;
                },
              },
              {
                key: "getLead",
                value: function () {
                  var e;
                  return (
                    (this.options.layoutId &&
                      (null === (e = this.getStack()) || void 0 === e
                        ? void 0
                        : e.lead)) ||
                    this
                  );
                },
              },
              {
                key: "getPrevLead",
                value: function () {
                  var e;
                  return this.options.layoutId
                    ? null === (e = this.getStack()) || void 0 === e
                      ? void 0
                      : e.prevLead
                    : void 0;
                },
              },
              {
                key: "getStack",
                value: function () {
                  var e = this.options.layoutId;
                  if (e) return this.root.sharedNodes.get(e);
                },
              },
              {
                key: "promote",
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t = e.needsReset,
                    n = e.transition,
                    r = e.preserveFollowOpacity,
                    a = this.getStack();
                  a && a.promote(this, r),
                    t &&
                      ((this.projectionDelta = void 0), (this.needsReset = !0)),
                    n && this.setOptions({ transition: n });
                },
              },
              {
                key: "relegate",
                value: function () {
                  var e = this.getStack();
                  return !!e && e.relegate(this);
                },
              },
              {
                key: "resetRotation",
                value: function () {
                  var e = this.options.visualElement;
                  if (e) {
                    var t = !1,
                      n = e.latestValues;
                    if (
                      ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) &&
                        (t = !0),
                      t)
                    ) {
                      for (var r = {}, a = 0; a < Ts.length; a++) {
                        var i = "rotate" + Ts[a];
                        n[i] && ((r[i] = n[i]), e.setStaticValue(i, 0));
                      }
                      for (var o in (e.render(), r)) e.setStaticValue(o, r[o]);
                      e.scheduleRender();
                    }
                  }
                },
              },
              {
                key: "getProjectionStyles",
                value: function () {
                  var e,
                    t,
                    n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    r = {};
                  if (!this.instance || this.isSVG) return r;
                  if (!this.isVisible) return { visibility: "hidden" };
                  r.visibility = "";
                  var a = this.getTransformTemplate();
                  if (this.needsReset)
                    return (
                      (this.needsReset = !1),
                      (r.opacity = ""),
                      (r.pointerEvents = Pn(n.pointerEvents) || ""),
                      (r.transform = a ? a(this.latestValues, "") : "none"),
                      r
                    );
                  var i = this.getLead();
                  if (!this.projectionDelta || !this.layout || !i.target) {
                    var o = {};
                    return (
                      this.options.layoutId &&
                        ((o.opacity =
                          void 0 !== this.latestValues.opacity
                            ? this.latestValues.opacity
                            : 1),
                        (o.pointerEvents = Pn(n.pointerEvents) || "")),
                      this.hasProjected &&
                        !jo(this.latestValues) &&
                        ((o.transform = a ? a({}, "") : "none"),
                        (this.hasProjected = !1)),
                      o
                    );
                  }
                  var s = i.animationValues || i.latestValues;
                  this.applyTransformsToTarget(),
                    (r.transform = Es(
                      this.projectionDeltaWithTransform,
                      this.treeScale,
                      s
                    )),
                    a && (r.transform = a(s, r.transform));
                  var l = this.projectionDelta,
                    u = l.x,
                    c = l.y;
                  for (var f in ((r.transformOrigin = ""
                    .concat(100 * u.origin, "% ")
                    .concat(100 * c.origin, "% 0")),
                  i.animationValues
                    ? (r.opacity =
                        i === this
                          ? null !==
                              (t =
                                null !== (e = s.opacity) && void 0 !== e
                                  ? e
                                  : this.latestValues.opacity) && void 0 !== t
                            ? t
                            : 1
                          : this.preserveOpacity
                          ? this.latestValues.opacity
                          : s.opacityExit)
                    : (r.opacity =
                        i === this
                          ? void 0 !== s.opacity
                            ? s.opacity
                            : ""
                          : void 0 !== s.opacityExit
                          ? s.opacityExit
                          : 0),
                  xt))
                    if (void 0 !== s[f]) {
                      var d = xt[f],
                        p = d.correct,
                        h = d.applyTo,
                        v = "none" === r.transform ? s[f] : p(s[f], i);
                      if (h)
                        for (var m = h.length, y = 0; y < m; y++) r[h[y]] = v;
                      else r[f] = v;
                    }
                  return (
                    this.options.layoutId &&
                      (r.pointerEvents =
                        i === this ? Pn(n.pointerEvents) || "" : "none"),
                    r
                  );
                },
              },
              {
                key: "clearSnapshot",
                value: function () {
                  this.resumeFrom = this.snapshot = void 0;
                },
              },
              {
                key: "resetTree",
                value: function () {
                  this.root.nodes.forEach(function (e) {
                    var t;
                    return null === (t = e.currentAnimation) || void 0 === t
                      ? void 0
                      : t.stop();
                  }),
                    this.root.nodes.forEach(Vs),
                    this.root.sharedNodes.clear();
                },
              },
            ]),
            e
          );
        })();
      }
      function Ls(e) {
        e.updateLayout();
      }
      function As(e) {
        var t,
          n =
            (null === (t = e.resumeFrom) || void 0 === t
              ? void 0
              : t.snapshot) || e.snapshot;
        if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
          var r = e.layout,
            a = r.layoutBox,
            i = r.measuredBox,
            o = e.options.animationType,
            s = n.source !== e.layout.source;
          "size" === o
            ? Eo(function (e) {
                var t = s ? n.measuredBox[e] : n.layoutBox[e],
                  r = uo(t);
                (t.min = a[e].min), (t.max = t.min + r);
              })
            : Xs(o, n.layoutBox, a) &&
              Eo(function (e) {
                var t = s ? n.measuredBox[e] : n.layoutBox[e],
                  r = uo(a[e]);
                t.max = t.min + r;
              });
          var l = ko();
          po(l, a, n.layoutBox);
          var u = ko();
          s
            ? po(u, e.applyTransform(i, !0), n.measuredBox)
            : po(u, a, n.layoutBox);
          var c = !ws(l),
            f = !1;
          if (!e.resumeFrom) {
            var d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
              var p = d.snapshot,
                h = d.layout;
              if (p && h) {
                var v = So();
                mo(v, n.layoutBox, p.layoutBox);
                var m = So();
                mo(m, a, h.layoutBox),
                  xs(v, m) || (f = !0),
                  d.options.layoutRoot &&
                    ((e.relativeTarget = m),
                    (e.relativeTargetOrigin = v),
                    (e.relativeParent = d));
              }
            }
          }
          e.notifyListeners("didUpdate", {
            layout: a,
            snapshot: n,
            delta: u,
            layoutDelta: l,
            hasLayoutChanged: c,
            hasRelativeTargetChanged: f,
          });
        } else if (e.isLead()) {
          var y = e.options.onExitComplete;
          y && y();
        }
        e.options.transition = void 0;
      }
      function Ms(e) {
        Ns.totalNodes++,
          e.parent &&
            (e.isProjecting() ||
              (e.isProjectionDirty = e.parent.isProjectionDirty),
            e.isSharedProjectionDirty ||
              (e.isSharedProjectionDirty = Boolean(
                e.isProjectionDirty ||
                  e.parent.isProjectionDirty ||
                  e.parent.isSharedProjectionDirty
              )),
            e.isTransformDirty ||
              (e.isTransformDirty = e.parent.isTransformDirty));
      }
      function Rs(e) {
        e.isProjectionDirty =
          e.isSharedProjectionDirty =
          e.isTransformDirty =
            !1;
      }
      function Ds(e) {
        e.clearSnapshot();
      }
      function Vs(e) {
        e.clearMeasurements();
      }
      function Is(e) {
        var t = e.options.visualElement;
        t &&
          t.getProps().onBeforeLayoutMeasure &&
          t.notify("BeforeLayoutMeasure"),
          e.resetTransform();
      }
      function Fs(e) {
        e.finishAnimation(),
          (e.targetDelta = e.relativeTarget = e.target = void 0);
      }
      function zs(e) {
        e.resolveTargetDelta();
      }
      function Us(e) {
        e.calcProjection();
      }
      function Bs(e) {
        e.resetRotation();
      }
      function Ws(e) {
        e.removeLeadSnapshot();
      }
      function Hs(e, t, n) {
        (e.translate = wa(t.translate, 0, n)),
          (e.scale = wa(t.scale, 1, n)),
          (e.origin = t.origin),
          (e.originPoint = t.originPoint);
      }
      function $s(e, t, n, r) {
        (e.min = wa(t.min, n.min, r)), (e.max = wa(t.max, n.max, r));
      }
      function Qs(e) {
        return e.animationValues && void 0 !== e.animationValues.opacityExit;
      }
      var Ys = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function qs(e, t) {
        for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
          if (Boolean(e.path[r].instance)) {
            n = e.path[r];
            break;
          }
        var a = (n && n !== e.root ? n.instance : document).querySelector(
          '[data-projection-id="'.concat(t, '"]')
        );
        a && e.mount(a, !0);
      }
      function Gs(e) {
        (e.min = Math.round(e.min)), (e.max = Math.round(e.max));
      }
      function Xs(e, t, n) {
        return (
          "position" === e ||
          ("preserve-aspect" === e && !co(ks(t), ks(n), 0.2))
        );
      }
      var Ks = Os({
          attachResizeListener: function (e, t) {
            return Ln(e, "resize", t);
          },
          measureScroll: function () {
            return {
              x:
                document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop,
            };
          },
          checkIsScrollRoot: function () {
            return !0;
          },
        }),
        Zs = { current: void 0 },
        Js = Os({
          measureScroll: function (e) {
            return { x: e.scrollLeft, y: e.scrollTop };
          },
          defaultParent: function () {
            if (!Zs.current) {
              var e = new Ks(0, {});
              e.mount(window),
                e.setOptions({ layoutScroll: !0 }),
                (Zs.current = e);
            }
            return Zs.current;
          },
          resetTransform: function (e, t) {
            e.style.transform = void 0 !== t ? t : "none";
          },
          checkIsScrollRoot: function (e) {
            return Boolean("fixed" === window.getComputedStyle(e).position);
          },
        }),
        el = {
          pan: { Feature: Qo },
          drag: { Feature: $o, ProjectionNode: Js, MeasureLayout: ns },
        },
        tl = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
        ]),
        nl = function (e) {
          return tl.has(e);
        },
        rl = function (e) {
          return Object.keys(e).some(nl);
        },
        al = function (e) {
          return e === At || e === Ht;
        },
        il = function (e, t) {
          return parseFloat(e.split(", ")[t]);
        },
        ol = function (e, t) {
          return function (n, r) {
            var a = r.transform;
            if ("none" === a || !a) return 0;
            var i = a.match(/^matrix3d\((.+)\)$/);
            if (i) return il(i[1], t);
            var o = a.match(/^matrix\((.+)\)$/);
            return o ? il(o[1], e) : 0;
          };
        },
        sl = new Set(["x", "y", "z"]),
        ll = kt.filter(function (e) {
          return !sl.has(e);
        });
      var ul = {
          width: function (e, t) {
            var n = e.x,
              r = t.paddingLeft,
              a = void 0 === r ? "0" : r,
              i = t.paddingRight,
              o = void 0 === i ? "0" : i;
            return n.max - n.min - parseFloat(a) - parseFloat(o);
          },
          height: function (e, t) {
            var n = e.y,
              r = t.paddingTop,
              a = void 0 === r ? "0" : r,
              i = t.paddingBottom,
              o = void 0 === i ? "0" : i;
            return n.max - n.min - parseFloat(a) - parseFloat(o);
          },
          top: function (e, t) {
            var n = t.top;
            return parseFloat(n);
          },
          left: function (e, t) {
            var n = t.left;
            return parseFloat(n);
          },
          bottom: function (e, t) {
            var n = e.y,
              r = t.top;
            return parseFloat(r) + (n.max - n.min);
          },
          right: function (e, t) {
            var n = e.x,
              r = t.left;
            return parseFloat(r) + (n.max - n.min);
          },
          x: ol(4, 13),
          y: ol(5, 14),
        },
        cl = function (e, t, n) {
          var r = t.measureViewportBox(),
            a = t.current,
            i = getComputedStyle(a),
            o = i.display,
            s = {};
          "none" === o && t.setStaticValue("display", e.display || "block"),
            n.forEach(function (e) {
              s[e] = ul[e](r, i);
            }),
            t.render();
          var l = t.measureViewportBox();
          return (
            n.forEach(function (n) {
              var r = t.getValue(n);
              r && r.jump(s[n]), (e[n] = ul[n](l, i));
            }),
            e
          );
        },
        fl = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {};
          (t = We({}, t)), (r = We({}, r));
          var a = Object.keys(t).filter(nl),
            i = [],
            o = !1,
            s = [];
          if (
            (a.forEach(function (a) {
              var l = e.getValue(a);
              if (e.hasValue(a)) {
                var u,
                  c = n[a],
                  f = ta(c),
                  d = t[a];
                if (Sn(d)) {
                  var p = d.length,
                    h = null === d[0] ? 1 : 0;
                  (c = d[h]), (f = ta(c));
                  for (var v = h; v < p; v++)
                    u
                      ? da(
                          ta(d[v]) === u,
                          "All keyframes must be of the same type"
                        )
                      : ((u = ta(d[v])),
                        da(
                          u === f || (al(f) && al(u)),
                          "Keyframes must be of the same dimension as the current value"
                        ));
                } else u = ta(d);
                if (f !== u)
                  if (al(f) && al(u)) {
                    var m = l.get();
                    "string" === typeof m && l.set(parseFloat(m)),
                      "string" === typeof d
                        ? (t[a] = parseFloat(d))
                        : Array.isArray(d) &&
                          u === Ht &&
                          (t[a] = d.map(parseFloat));
                  } else
                    (null === f || void 0 === f ? void 0 : f.transform) &&
                    (null === u || void 0 === u ? void 0 : u.transform) &&
                    (0 === c || 0 === d)
                      ? 0 === c
                        ? l.set(u.transform(c))
                        : (t[a] = f.transform(d))
                      : (o ||
                          ((i = (function (e) {
                            var t = [];
                            return (
                              ll.forEach(function (n) {
                                var r = e.getValue(n);
                                void 0 !== r &&
                                  (t.push([n, r.get()]),
                                  r.set(n.startsWith("scale") ? 1 : 0));
                              }),
                              t.length && e.render(),
                              t
                            );
                          })(e)),
                          (o = !0)),
                        s.push(a),
                        (r[a] = void 0 !== r[a] ? r[a] : t[a]),
                        l.jump(d));
              }
            }),
            s.length)
          ) {
            var l = s.indexOf("height") >= 0 ? window.pageYOffset : null,
              c = cl(t, e, s);
            return (
              i.length &&
                i.forEach(function (t) {
                  var n = u(t, 2),
                    r = n[0],
                    a = n[1];
                  e.getValue(r).set(a);
                }),
              e.render(),
              Ye && null !== l && window.scrollTo({ top: l }),
              { target: c, transitionEnd: r }
            );
          }
          return { target: t, transitionEnd: r };
        };
      var dl = function (e, t, n, r) {
          var a = Zo(e, t, r);
          return (function (e, t, n, r) {
            return rl(t) ? fl(e, t, n, r) : { target: t, transitionEnd: r };
          })(e, (t = a.target), n, (r = a.transitionEnd));
        },
        pl = { current: null },
        hl = { current: !1 };
      var vl = ["willChange"],
        ml = ["children"],
        yl = Object.keys(st),
        gl = yl.length,
        bl = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        wl = tt.length,
        xl = (function () {
          function e(t) {
            var n = this,
              r = t.parent,
              a = t.props,
              i = t.presenceContext,
              o = t.reducedMotionConfig,
              s = t.visualState,
              l =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {};
            d(this, e),
              (this.current = null),
              (this.children = new Set()),
              (this.isVariantNode = !1),
              (this.isControllingVariants = !1),
              (this.shouldReduceMotion = null),
              (this.values = new Map()),
              (this.features = {}),
              (this.valueSubscriptions = new Map()),
              (this.prevMotionValues = {}),
              (this.events = {}),
              (this.propEventSubscriptions = {}),
              (this.notifyUpdate = function () {
                return n.notify("Update", n.latestValues);
              }),
              (this.render = function () {
                n.current &&
                  (n.triggerBuild(),
                  n.renderInstance(
                    n.current,
                    n.renderState,
                    n.props.style,
                    n.projection
                  ));
              }),
              (this.scheduleRender = function () {
                return br.render(n.render, !1, !0);
              });
            var u = s.latestValues,
              c = s.renderState;
            (this.latestValues = u),
              (this.baseTarget = We({}, u)),
              (this.initialValues = a.initial ? We({}, u) : {}),
              (this.renderState = c),
              (this.parent = r),
              (this.props = a),
              (this.presenceContext = i),
              (this.depth = r ? r.depth + 1 : 0),
              (this.reducedMotionConfig = o),
              (this.options = l),
              (this.isControllingVariants = nt(a)),
              (this.isVariantNode = rt(a)),
              this.isVariantNode && (this.variantChildren = new Set()),
              (this.manuallyAnimateOnMount = Boolean(r && r.current));
            var f = this.scrapeMotionValuesFromProps(a, {}),
              p = f.willChange,
              h = on(f, vl);
            for (var v in h) {
              var m = h[v];
              void 0 !== u[v] && Ct(m) && (m.set(u[v], !1), ua(p) && p.add(v));
            }
          }
          return (
            m(e, [
              {
                key: "scrapeMotionValuesFromProps",
                value: function (e, t) {
                  return {};
                },
              },
              {
                key: "mount",
                value: function (e) {
                  var t = this;
                  (this.current = e),
                    this.projection && this.projection.mount(e),
                    this.parent &&
                      this.isVariantNode &&
                      !this.isControllingVariants &&
                      (this.removeFromVariantTree =
                        this.parent.addVariantChild(this)),
                    this.values.forEach(function (e, n) {
                      return t.bindToMotionValue(n, e);
                    }),
                    hl.current ||
                      (function () {
                        if (((hl.current = !0), Ye))
                          if (window.matchMedia) {
                            var e = window.matchMedia(
                                "(prefers-reduced-motion)"
                              ),
                              t = function () {
                                return (pl.current = e.matches);
                              };
                            e.addListener(t), t();
                          } else pl.current = !1;
                      })(),
                    (this.shouldReduceMotion =
                      "never" !== this.reducedMotionConfig &&
                      ("always" === this.reducedMotionConfig || pl.current)),
                    this.parent && this.parent.children.add(this),
                    this.update(this.props, this.presenceContext);
                },
              },
              {
                key: "unmount",
                value: function () {
                  for (var e in (this.projection && this.projection.unmount(),
                  wr.update(this.notifyUpdate),
                  wr.render(this.render),
                  this.valueSubscriptions.forEach(function (e) {
                    return e();
                  }),
                  this.removeFromVariantTree && this.removeFromVariantTree(),
                  this.parent && this.parent.children.delete(this),
                  this.events))
                    this.events[e].clear();
                  for (var t in this.features) this.features[t].unmount();
                  this.current = null;
                },
              },
              {
                key: "bindToMotionValue",
                value: function (e, t) {
                  var n = this,
                    r = St.has(e),
                    a = t.on("change", function (t) {
                      (n.latestValues[e] = t),
                        n.props.onUpdate && br.update(n.notifyUpdate, !1, !0),
                        r &&
                          n.projection &&
                          (n.projection.isTransformDirty = !0);
                    }),
                    i = t.on("renderRequest", this.scheduleRender);
                  this.valueSubscriptions.set(e, function () {
                    a(), i();
                  });
                },
              },
              {
                key: "sortNodePosition",
                value: function (e) {
                  return this.current &&
                    this.sortInstanceNodePosition &&
                    this.type === e.type
                    ? this.sortInstanceNodePosition(this.current, e.current)
                    : 0;
                },
              },
              {
                key: "loadFeatures",
                value: function (e, t, n, r, a) {
                  for (
                    var i, o, s = this, l = (e.children, on(e, ml)), u = 0;
                    u < gl;
                    u++
                  ) {
                    var c = yl[u],
                      f = st[c],
                      d = f.isEnabled,
                      p = f.Feature,
                      h = f.ProjectionNode,
                      v = f.MeasureLayout;
                    h && (i = h),
                      d(l) &&
                        (!this.features[c] &&
                          p &&
                          (this.features[c] = new p(this)),
                        v && (o = v));
                  }
                  if (!this.projection && i) {
                    this.projection = new i(
                      r,
                      this.latestValues,
                      this.parent && this.parent.projection
                    );
                    var m = l.layoutId,
                      y = l.layout,
                      g = l.drag,
                      b = l.dragConstraints,
                      w = l.layoutScroll,
                      x = l.layoutRoot;
                    this.projection.setOptions({
                      layoutId: m,
                      layout: y,
                      alwaysMeasureLayout: Boolean(g) || (b && Ke(b)),
                      visualElement: this,
                      scheduleRender: function () {
                        return s.scheduleRender();
                      },
                      animationType: "string" === typeof y ? y : "both",
                      initialPromotionConfig: a,
                      layoutScroll: w,
                      layoutRoot: x,
                    });
                  }
                  return o;
                },
              },
              {
                key: "updateFeatures",
                value: function () {
                  for (var e in this.features) {
                    var t = this.features[e];
                    t.isMounted
                      ? t.update(this.props, this.prevProps)
                      : (t.mount(), (t.isMounted = !0));
                  }
                },
              },
              {
                key: "triggerBuild",
                value: function () {
                  this.build(
                    this.renderState,
                    this.latestValues,
                    this.options,
                    this.props
                  );
                },
              },
              {
                key: "measureViewportBox",
                value: function () {
                  return this.current
                    ? this.measureInstanceViewportBox(this.current, this.props)
                    : So();
                },
              },
              {
                key: "getStaticValue",
                value: function (e) {
                  return this.latestValues[e];
                },
              },
              {
                key: "setStaticValue",
                value: function (e, t) {
                  this.latestValues[e] = t;
                },
              },
              {
                key: "makeTargetAnimatable",
                value: function (e) {
                  var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  return this.makeTargetAnimatableFromInstance(
                    e,
                    this.props,
                    t
                  );
                },
              },
              {
                key: "update",
                value: function (e, t) {
                  (e.transformTemplate || this.props.transformTemplate) &&
                    this.scheduleRender(),
                    (this.prevProps = this.props),
                    (this.props = e),
                    (this.prevPresenceContext = this.presenceContext),
                    (this.presenceContext = t);
                  for (var n = 0; n < bl.length; n++) {
                    var r = bl[n];
                    this.propEventSubscriptions[r] &&
                      (this.propEventSubscriptions[r](),
                      delete this.propEventSubscriptions[r]);
                    var a = e["on" + r];
                    a && (this.propEventSubscriptions[r] = this.on(r, a));
                  }
                  (this.prevMotionValues = (function (e, t, n) {
                    var r = t.willChange;
                    for (var a in t) {
                      var i = t[a],
                        o = n[a];
                      if (Ct(i)) e.addValue(a, i), ua(r) && r.add(a);
                      else if (Ct(o))
                        e.addValue(a, Or(i, { owner: e })),
                          ua(r) && r.remove(a);
                      else if (o !== i)
                        if (e.hasValue(a)) {
                          var s = e.getValue(a);
                          !s.hasAnimated && s.set(i);
                        } else {
                          var l = e.getStaticValue(a);
                          e.addValue(a, Or(void 0 !== l ? l : i, { owner: e }));
                        }
                    }
                    for (var u in n) void 0 === t[u] && e.removeValue(u);
                    return t;
                  })(
                    this,
                    this.scrapeMotionValuesFromProps(e, this.prevProps),
                    this.prevMotionValues
                  )),
                    this.handleChildMotionValue &&
                      this.handleChildMotionValue();
                },
              },
              {
                key: "getProps",
                value: function () {
                  return this.props;
                },
              },
              {
                key: "getVariant",
                value: function (e) {
                  return this.props.variants ? this.props.variants[e] : void 0;
                },
              },
              {
                key: "getDefaultTransition",
                value: function () {
                  return this.props.transition;
                },
              },
              {
                key: "getTransformPagePoint",
                value: function () {
                  return this.props.transformPagePoint;
                },
              },
              {
                key: "getClosestVariantNode",
                value: function () {
                  return this.isVariantNode
                    ? this
                    : this.parent
                    ? this.parent.getClosestVariantNode()
                    : void 0;
                },
              },
              {
                key: "getVariantContext",
                value: function () {
                  if (
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0]
                  )
                    return this.parent
                      ? this.parent.getVariantContext()
                      : void 0;
                  if (!this.isControllingVariants) {
                    var e =
                      (this.parent && this.parent.getVariantContext()) || {};
                    return (
                      void 0 !== this.props.initial &&
                        (e.initial = this.props.initial),
                      e
                    );
                  }
                  for (var t = {}, n = 0; n < wl; n++) {
                    var r = tt[n],
                      a = this.props[r];
                    (Ze(a) || !1 === a) && (t[r] = a);
                  }
                  return t;
                },
              },
              {
                key: "addVariantChild",
                value: function (e) {
                  var t = this.getClosestVariantNode();
                  if (t)
                    return (
                      t.variantChildren && t.variantChildren.add(e),
                      function () {
                        return t.variantChildren.delete(e);
                      }
                    );
                },
              },
              {
                key: "addValue",
                value: function (e, t) {
                  t !== this.values.get(e) &&
                    (this.removeValue(e), this.bindToMotionValue(e, t)),
                    this.values.set(e, t),
                    (this.latestValues[e] = t.get());
                },
              },
              {
                key: "removeValue",
                value: function (e) {
                  this.values.delete(e);
                  var t = this.valueSubscriptions.get(e);
                  t && (t(), this.valueSubscriptions.delete(e)),
                    delete this.latestValues[e],
                    this.removeValueFromRenderState(e, this.renderState);
                },
              },
              {
                key: "hasValue",
                value: function (e) {
                  return this.values.has(e);
                },
              },
              {
                key: "getValue",
                value: function (e, t) {
                  if (this.props.values && this.props.values[e])
                    return this.props.values[e];
                  var n = this.values.get(e);
                  return (
                    void 0 === n &&
                      void 0 !== t &&
                      ((n = Or(t, { owner: this })), this.addValue(e, n)),
                    n
                  );
                },
              },
              {
                key: "readValue",
                value: function (e) {
                  return void 0 === this.latestValues[e] && this.current
                    ? this.readValueFromInstance(this.current, e, this.options)
                    : this.latestValues[e];
                },
              },
              {
                key: "setBaseTarget",
                value: function (e, t) {
                  this.baseTarget[e] = t;
                },
              },
              {
                key: "getBaseTarget",
                value: function (e) {
                  var t,
                    n = this.props.initial,
                    r =
                      "string" === typeof n || "object" === typeof n
                        ? null === (t = kn(this.props, n)) || void 0 === t
                          ? void 0
                          : t[e]
                        : void 0;
                  if (n && void 0 !== r) return r;
                  var a = this.getBaseTargetFromProps(this.props, e);
                  return void 0 === a || Ct(a)
                    ? void 0 !== this.initialValues[e] && void 0 === r
                      ? void 0
                      : this.baseTarget[e]
                    : a;
                },
              },
              {
                key: "on",
                value: function (e, t) {
                  return (
                    this.events[e] || (this.events[e] = new Tr()),
                    this.events[e].add(t)
                  );
                },
              },
              {
                key: "notify",
                value: function (e) {
                  if (this.events[e]) {
                    for (
                      var t,
                        n = arguments.length,
                        r = new Array(n > 1 ? n - 1 : 0),
                        a = 1;
                      a < n;
                      a++
                    )
                      r[a - 1] = arguments[a];
                    (t = this.events[e]).notify.apply(t, r);
                  }
                },
              },
            ]),
            e
          );
        })(),
        kl = ["transition", "transitionEnd"],
        Sl = (function (e) {
          g(n, e);
          var t = k(n);
          function n() {
            return d(this, n), t.apply(this, arguments);
          }
          return (
            m(n, [
              {
                key: "sortInstanceNodePosition",
                value: function (e, t) {
                  return 2 & e.compareDocumentPosition(t) ? 1 : -1;
                },
              },
              {
                key: "getBaseTargetFromProps",
                value: function (e, t) {
                  return e.style ? e.style[t] : void 0;
                },
              },
              {
                key: "removeValueFromRenderState",
                value: function (e, t) {
                  var n = t.vars,
                    r = t.style;
                  delete n[e], delete r[e];
                },
              },
              {
                key: "makeTargetAnimatableFromInstance",
                value: function (e, t, n) {
                  var r = e.transition,
                    a = e.transitionEnd,
                    i = on(e, kl),
                    o = t.transformValues,
                    s = (function (e, t, n) {
                      var r = {};
                      for (var a in e) {
                        var i = la(a, t);
                        if (void 0 !== i) r[a] = i;
                        else {
                          var o = n.getValue(a);
                          o && (r[a] = o.get());
                        }
                      }
                      return r;
                    })(i, r || {}, this);
                  if (
                    (o && (a && (a = o(a)), i && (i = o(i)), s && (s = o(s))),
                    n)
                  ) {
                    !(function (e, t, n) {
                      var r,
                        a,
                        i = Object.keys(t).filter(function (t) {
                          return !e.hasValue(t);
                        }),
                        o = i.length;
                      if (o)
                        for (var s = 0; s < o; s++) {
                          var l = i[s],
                            u = t[l],
                            c = null;
                          Array.isArray(u) && (c = u[0]),
                            null === c &&
                              (c =
                                null !==
                                  (a =
                                    null !== (r = n[l]) && void 0 !== r
                                      ? r
                                      : e.readValue(l)) && void 0 !== a
                                  ? a
                                  : t[l]),
                            void 0 !== c &&
                              null !== c &&
                              ("string" === typeof c && (lr(c) || ur(c))
                                ? (c = parseFloat(c))
                                : !ra(c) && $r.test(u) && (c = Zr(l, u)),
                              e.addValue(l, Or(c, { owner: e })),
                              void 0 === n[l] && (n[l] = c),
                              null !== c && e.setBaseTarget(l, c));
                        }
                    })(this, i, s);
                    var l = dl(this, i, s, a);
                    (a = l.transitionEnd), (i = l.target);
                  }
                  return We({ transition: r, transitionEnd: a }, i);
                },
              },
            ]),
            n
          );
        })(xl);
      var El = (function (e) {
        g(n, e);
        var t = k(n);
        function n() {
          return d(this, n), t.apply(this, arguments);
        }
        return (
          m(n, [
            {
              key: "readValueFromInstance",
              value: function (e, t) {
                if (St.has(t)) {
                  var n = Kr(t);
                  return (n && n.default) || 0;
                }
                var r,
                  a = ((r = e), window.getComputedStyle(r)),
                  i = (_t(t) ? a.getPropertyValue(t) : a[t]) || 0;
                return "string" === typeof i ? i.trim() : i;
              },
            },
            {
              key: "measureInstanceViewportBox",
              value: function (e, t) {
                return Uo(e, t.transformPagePoint);
              },
            },
            {
              key: "build",
              value: function (e, t, n, r) {
                Xt(e, t, n, r.transformTemplate);
              },
            },
            {
              key: "scrapeMotionValuesFromProps",
              value: function (e, t) {
                return wn(e, t);
              },
            },
            {
              key: "handleChildMotionValue",
              value: function () {
                var e = this;
                this.childSubscription &&
                  (this.childSubscription(), delete this.childSubscription);
                var t = this.props.children;
                Ct(t) &&
                  (this.childSubscription = t.on("change", function (t) {
                    e.current && (e.current.textContent = "".concat(t));
                  }));
              },
            },
            {
              key: "renderInstance",
              value: function (e, t, n, r) {
                yn(e, t, n, r);
              },
            },
          ]),
          n
        );
      })(Sl);
      function Cl() {
        return (
          (Cl =
            "undefined" !== typeof Reflect && Reflect.get
              ? Reflect.get.bind()
              : function (e, t, n) {
                  var r = (function (e, t) {
                    for (
                      ;
                      !Object.prototype.hasOwnProperty.call(e, t) &&
                      null !== (e = b(e));

                    );
                    return e;
                  })(e, t);
                  if (r) {
                    var a = Object.getOwnPropertyDescriptor(r, t);
                    return a.get
                      ? a.get.call(arguments.length < 3 ? e : n)
                      : a.value;
                  }
                }),
          Cl.apply(this, arguments)
        );
      }
      var Pl = (function (e) {
          g(n, e);
          var t = k(n);
          function n() {
            var e;
            return (
              d(this, n), ((e = t.apply(this, arguments)).isSVGTag = !1), e
            );
          }
          return (
            m(n, [
              {
                key: "getBaseTargetFromProps",
                value: function (e, t) {
                  return e[t];
                },
              },
              {
                key: "readValueFromInstance",
                value: function (e, t) {
                  if (St.has(t)) {
                    var n = Kr(t);
                    return (n && n.default) || 0;
                  }
                  return (t = gn.has(t) ? t : mn(t)), e.getAttribute(t);
                },
              },
              {
                key: "measureInstanceViewportBox",
                value: function () {
                  return So();
                },
              },
              {
                key: "scrapeMotionValuesFromProps",
                value: function (e, t) {
                  return xn(e, t);
                },
              },
              {
                key: "build",
                value: function (e, t, n, r) {
                  fn(e, t, n, this.isSVGTag, r.transformTemplate);
                },
              },
              {
                key: "renderInstance",
                value: function (e, t, n, r) {
                  bn(e, t, 0, r);
                },
              },
              {
                key: "mount",
                value: function (e) {
                  (this.isSVGTag = pn(e.tagName)),
                    Cl(b(n.prototype), "mount", this).call(this, e);
                },
              },
            ]),
            n
          );
        })(Sl),
        Tl = function (e, t) {
          return wt(e)
            ? new Pl(t, { enableHardwareAcceleration: !1 })
            : new El(t, { enableHardwareAcceleration: !0 });
        },
        jl = { layout: { ProjectionNode: Js, MeasureLayout: ns } },
        _l = We(We(We(We({}, eo), or), el), jl),
        Nl = gt(function (e, t) {
          return (function (e, t, n, r) {
            var a = t.forwardMotionProps,
              i = void 0 !== a && a;
            return We(
              We({}, wt(e) ? Nn : On),
              {},
              {
                preloadedFeatures: n,
                useRender: vn(i),
                createVisualElement: r,
                Component: e,
              }
            );
          })(e, t, _l, Tl);
        });
      function Ol() {
        return (
          (Ol = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Ol.apply(this, arguments)
        );
      }
      function Ll(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var Al = [
          "onClick",
          "relative",
          "reloadDocument",
          "replace",
          "state",
          "target",
          "to",
          "preventScrollReset",
        ],
        Ml = [
          "aria-current",
          "caseSensitive",
          "className",
          "end",
          "style",
          "to",
          "children",
        ];
      function Rl(e) {
        var n,
          r = e.basename,
          a = e.children,
          i = e.window,
          o = t.useRef();
        null == o.current &&
          (o.current =
            (void 0 === (n = { window: i, v5Compat: !0 }) && (n = {}),
            A(
              function (e, t) {
                var n = e.location;
                return N(
                  "",
                  { pathname: n.pathname, search: n.search, hash: n.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                );
              },
              function (e, t) {
                return "string" === typeof t ? t : O(t);
              },
              null,
              n
            )));
        var s = o.current,
          l = u(t.useState({ action: s.action, location: s.location }), 2),
          c = l[0],
          f = l[1];
        return (
          t.useLayoutEffect(
            function () {
              return s.listen(f);
            },
            [s]
          ),
          t.createElement(De, {
            basename: r,
            children: a,
            location: c.location,
            navigationType: c.action,
            navigator: s,
          })
        );
      }
      var Dl =
          "undefined" !== typeof window &&
          "undefined" !== typeof window.document &&
          "undefined" !== typeof window.document.createElement,
        Vl = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Il = t.forwardRef(function (e, n) {
          var r,
            a = e.onClick,
            i = e.relative,
            o = e.reloadDocument,
            s = e.replace,
            l = e.state,
            u = e.target,
            c = e.to,
            f = e.preventScrollReset,
            d = Ll(e, Al),
            p = t.useContext(ye).basename,
            h = !1;
          if ("string" === typeof c && Vl.test(c) && ((r = c), Dl)) {
            var v = new URL(window.location.href),
              m = c.startsWith("//") ? new URL(v.protocol + c) : new URL(c),
              y = q(m.pathname, p);
            m.origin === v.origin && null != y
              ? (c = y + m.search + m.hash)
              : (h = !0);
          }
          var g = (function (e, n) {
              var r = (void 0 === n ? {} : n).relative;
              xe() || j(!1);
              var a = t.useContext(ye),
                i = a.basename,
                o = a.navigator,
                s = Ee(e, { relative: r }),
                l = s.hash,
                u = s.pathname,
                c = s.search,
                f = u;
              return (
                "/" !== i && (f = "/" === u ? i : J([i, u])),
                o.createHref({ pathname: f, search: c, hash: l })
              );
            })(c, { relative: i }),
            b = (function (e, n) {
              var r = void 0 === n ? {} : n,
                a = r.target,
                i = r.replace,
                o = r.state,
                s = r.preventScrollReset,
                l = r.relative,
                u = Se(),
                c = ke(),
                f = Ee(e, { relative: l });
              return t.useCallback(
                function (t) {
                  if (
                    (function (e, t) {
                      return (
                        0 === e.button &&
                        (!t || "_self" === t) &&
                        !(function (e) {
                          return !!(
                            e.metaKey ||
                            e.altKey ||
                            e.ctrlKey ||
                            e.shiftKey
                          );
                        })(e)
                      );
                    })(t, a)
                  ) {
                    t.preventDefault();
                    var n = void 0 !== i ? i : O(c) === O(f);
                    u(e, {
                      replace: n,
                      state: o,
                      preventScrollReset: s,
                      relative: l,
                    });
                  }
                },
                [c, u, f, i, o, a, e, s, l]
              );
            })(c, {
              replace: s,
              state: l,
              target: u,
              preventScrollReset: f,
              relative: i,
            });
          return t.createElement(
            "a",
            Ol({}, d, {
              href: r || g,
              onClick:
                h || o
                  ? a
                  : function (e) {
                      a && a(e), e.defaultPrevented || b(e);
                    },
              ref: n,
              target: u,
            })
          );
        });
      var Fl = t.forwardRef(function (e, n) {
        var r = e["aria-current"],
          a = void 0 === r ? "page" : r,
          i = e.caseSensitive,
          o = void 0 !== i && i,
          s = e.className,
          l = void 0 === s ? "" : s,
          u = e.end,
          c = void 0 !== u && u,
          f = e.style,
          d = e.to,
          p = e.children,
          h = Ll(e, Ml),
          v = Ee(d, { relative: h.relative }),
          m = ke(),
          y = t.useContext(ve),
          g = t.useContext(ye).navigator,
          b = g.encodeLocation ? g.encodeLocation(v).pathname : v.pathname,
          w = m.pathname,
          x =
            y && y.navigation && y.navigation.location
              ? y.navigation.location.pathname
              : null;
        o ||
          ((w = w.toLowerCase()),
          (x = x ? x.toLowerCase() : null),
          (b = b.toLowerCase()));
        var k,
          S = w === b || (!c && w.startsWith(b) && "/" === w.charAt(b.length)),
          E =
            null != x &&
            (x === b || (!c && x.startsWith(b) && "/" === x.charAt(b.length))),
          C = S ? a : void 0;
        k =
          "function" === typeof l
            ? l({ isActive: S, isPending: E })
            : [l, S ? "active" : null, E ? "pending" : null]
                .filter(Boolean)
                .join(" ");
        var P = "function" === typeof f ? f({ isActive: S, isPending: E }) : f;
        return t.createElement(
          Il,
          Ol({}, h, {
            "aria-current": C,
            className: k,
            ref: n,
            style: P,
            to: d,
          }),
          "function" === typeof p ? p({ isActive: S, isPending: E }) : p
        );
      });
      var zl, Ul;
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmitImpl = "useSubmitImpl"),
          (e.UseFetcher = "useFetcher");
      })(zl || (zl = {})),
        (function (e) {
          (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(Ul || (Ul = {}));
      var Bl = n.p + "static/media/logo.56a46cec389a2907637c.png",
        Wl = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        Hl = t.createContext && t.createContext(Wl),
        $l = function () {
          return (
            ($l =
              Object.assign ||
              function (e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                  for (var a in (t = arguments[n]))
                    Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
              }),
            $l.apply(this, arguments)
          );
        },
        Ql = function (e, t) {
          var n = {};
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) &&
              t.indexOf(r) < 0 &&
              (n[r] = e[r]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++)
              t.indexOf(r[a]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, r[a]) &&
                (n[r[a]] = e[r[a]]);
          }
          return n;
        };
      function Yl(e) {
        return (
          e &&
          e.map(function (e, n) {
            return t.createElement(e.tag, $l({ key: n }, e.attr), Yl(e.child));
          })
        );
      }
      function ql(e) {
        return function (n) {
          return t.createElement(
            Gl,
            $l({ attr: $l({}, e.attr) }, n),
            Yl(e.child)
          );
        };
      }
      function Gl(e) {
        var n = function (n) {
          var r,
            a = e.attr,
            i = e.size,
            o = e.title,
            s = Ql(e, ["attr", "size", "title"]),
            l = i || n.size || "1em";
          return (
            n.className && (r = n.className),
            e.className && (r = (r ? r + " " : "") + e.className),
            t.createElement(
              "svg",
              $l(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                n.attr,
                a,
                s,
                {
                  className: r,
                  style: $l(
                    $l({ color: e.color || n.color }, n.style),
                    e.style
                  ),
                  height: l,
                  width: l,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              o && t.createElement("title", null, o),
              e.children
            )
          );
        };
        return void 0 !== Hl
          ? t.createElement(Hl.Consumer, null, function (e) {
              return n(e);
            })
          : n(Wl);
      }
      function Xl(e) {
        return ql({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            {
              tag: "g",
              attr: { id: "Light" },
              child: [
                {
                  tag: "g",
                  attr: {},
                  child: [
                    {
                      tag: "path",
                      attr: {
                        d: "M12,18.09A6.09,6.09,0,1,1,18.09,12,6.1,6.1,0,0,1,12,18.09ZM12,6.91A5.09,5.09,0,1,0,17.09,12,5.1,5.1,0,0,0,12,6.91Z",
                      },
                    },
                    {
                      tag: "path",
                      attr: {
                        d: "M11.5,2.568v1.6a.5.5,0,1,0,1,0v-1.6a.5.5,0,1,0-1,0Z",
                      },
                    },
                    {
                      tag: "path",
                      attr: {
                        d: "M12.5,21.432v-1.6a.5.5,0,0,0-1,0v1.6a.5.5,0,1,0,1,0Z",
                      },
                    },
                    {
                      tag: "path",
                      attr: {
                        d: "M21.432,11.5h-1.6a.5.5,0,0,0,0,1h1.6a.5.5,0,1,0,0-1Z",
                      },
                    },
                    {
                      tag: "path",
                      attr: {
                        d: "M2.568,12.5h1.6a.5.5,0,1,0,0-1h-1.6a.5.5,0,1,0,0,1Z",
                      },
                    },
                    {
                      tag: "path",
                      attr: {
                        d: "M18.316,4.977l-.992.992-.141.141a.514.514,0,0,0-.146.353.508.508,0,0,0,.146.354.5.5,0,0,0,.354.146.515.515,0,0,0,.353-.146l.992-.992.141-.141a.515.515,0,0,0,.147-.354.508.508,0,0,0-.147-.353.5.5,0,0,0-.353-.147.522.522,0,0,0-.354.147Z",
                      },
                    },
                    {
                      tag: "path",
                      attr: {
                        d: "M5.684,19.023l.992-.992.141-.141a.514.514,0,0,0,.146-.353.508.508,0,0,0-.146-.354.5.5,0,0,0-.354-.146.515.515,0,0,0-.353.146l-.992.992-.141.141a.515.515,0,0,0-.147.354.508.508,0,0,0,.147.353.5.5,0,0,0,.353.147.522.522,0,0,0,.354-.147Z",
                      },
                    },
                    {
                      tag: "path",
                      attr: {
                        d: "M19.023,18.316l-.992-.992-.141-.141a.514.514,0,0,0-.353-.146.508.508,0,0,0-.354.146.5.5,0,0,0-.146.354.515.515,0,0,0,.146.353l.992.992.141.141a.515.515,0,0,0,.354.147.508.508,0,0,0,.353-.147.5.5,0,0,0,.147-.353.522.522,0,0,0-.147-.354Z",
                      },
                    },
                    {
                      tag: "path",
                      attr: {
                        d: "M4.977,5.684l.992.992.141.141a.514.514,0,0,0,.353.146.508.508,0,0,0,.354-.146.5.5,0,0,0,.146-.354.515.515,0,0,0-.146-.353l-.992-.992-.141-.141A.515.515,0,0,0,5.33,4.83a.508.508,0,0,0-.353.147.5.5,0,0,0-.147.353.522.522,0,0,0,.147.354Z",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        })(e);
      }
      function Kl(e) {
        return ql({
          tag: "svg",
          attr: { viewBox: "0 0 24 24" },
          child: [
            { tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" } },
            {
              tag: "path",
              attr: {
                d: "M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z",
              },
            },
          ],
        })(e);
      }
      var Zl = function () {
        var e = u((0, t.useState)(!1), 2),
          n = e[0],
          r = e[1];
        return (
          (0, t.useEffect)(
            function () {
              var e = n
                ? {
                    "--bg-color": "#ffffff",
                    "--bg2-color": "#232f3e19",
                    "--hl-color": "#48a3c6",
                    "--hl2-color": "#ea5b5c",
                    "--text-color": "#000000",
                    "--secondary-text-color": "#252222",
                    "--grey": "#000000",
                    "--hover-text-color": "#000000",
                  }
                : {
                    "--bg-color": "#131a22",
                    "--bg2-color": "#232f3e19",
                    "--hl-color": "#48a3c6",
                    "--hl2-color": "#ea5b5c",
                    "--text-color": "#f3f3f3",
                    "--secondary-text-color": "#999999",
                    "--grey": "#9f9f9f76",
                    "--hover-text-color": "white",
                  };
              for (var t in e) {
                var r = e[t];
                document.documentElement.style.setProperty(t, r);
              }
            },
            [n]
          ),
          (0, ze.jsx)("button", {
            className: "toggleMode",
            onClick: function () {
              r(!n);
            },
            children: n
              ? (0, ze.jsx)(Kl, { className: "toggleIcon" })
              : (0, ze.jsx)(Xl, { className: "toggleIcon" }),
          })
        );
      };
      var Jl = n.p + "static/media/open.e6bd41ec79183186fdb132e92b58c1de.svg";
      var eu = n.p + "static/media/close.a591c5268e7cbcfeb569c6afea5745fc.svg",
        tu = function () {
          var e = u((0, t.useState)(!1), 2),
            n = e[0],
            r = e[1];
          return (0, ze.jsxs)(ze.Fragment, {
            children: [
              (0, ze.jsx)("button", {
                className: "dropdown-toggle",
                onClick: function () {
                  return r(!n);
                },
                children: n
                  ? (0, ze.jsx)("img", {
                      className: "closeMenu",
                      src: eu,
                      alt: "Close",
                    })
                  : (0, ze.jsx)("img", {
                      className: "openMenu",
                      src: Jl,
                      alt: "Open",
                    }),
              }),
              (0, ze.jsxs)("nav", {
                className: "links ".concat(n ? "open" : "closed"),
                children: [
                  (0, ze.jsx)(Nl.div, {
                    initial: { x: -100, opacity: 0 },
                    animate: { x: 0, opacity: 1 },
                    transition: { delay: 2.4, duration: 0.5, type: "spring" },
                    children: (0, ze.jsx)(Fl, {
                      to: "/",
                      onClick: function () {
                        return r(!1);
                      },
                      children: "Home",
                    }),
                  }),
                  (0, ze.jsx)(Nl.div, {
                    initial: { x: -100, opacity: 0 },
                    animate: { x: 0, opacity: 1 },
                    transition: { delay: 2.3, duration: 0.5, type: "spring" },
                    children: (0, ze.jsx)(Fl, {
                      to: "/portfolio",
                      onClick: function () {
                        return r(!1);
                      },
                      children: "Portfolio",
                    }),
                  }),
                  (0, ze.jsx)(Nl.div, {
                    initial: { x: -100, opacity: 0 },
                    animate: { x: 0, opacity: 1 },
                    transition: { delay: 2.2, duration: 0.5, type: "spring" },
                    children: (0, ze.jsx)(Fl, {
                      to: "/contact",
                      onClick: function () {
                        return r(!1);
                      },
                      children: "Contact",
                    }),
                  }),
                  (0, ze.jsx)(Nl.div, {
                    initial: { x: -100, opacity: 0 },
                    animate: { x: 0, opacity: 1 },
                    transition: { delay: 2.2, duration: 0.5, type: "spring" },
                    children: (0, ze.jsx)(Fl, {
                      to: "/resume",
                      onClick: function () {
                        return r(!1);
                      },
                      children: "Resume",
                    }),
                  }),
                  (0, ze.jsx)(Nl.div, {
                    initial: { x: -100, opacity: 0 },
                    animate: { x: 0, opacity: 1 },
                    transition: { delay: 2.1, duration: 0.5, type: "spring" },
                    children: (0, ze.jsx)(Zl, {}),
                  }),
                ],
              }),
            ],
          });
        },
        nu = function () {
          return (0, ze.jsxs)("header", {
            className: "header container",
            children: [
              (0, ze.jsx)(Fl, {
                to: "/",
                children: (0, ze.jsx)(Nl.div, {
                  initial: { x: -100, opacity: 0 },
                  animate: { x: 0, opacity: 1 },
                  transition: { delay: 2, duration: 0.5, type: "spring" },
                  children: (0, ze.jsx)(Nl.img, {
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.9 },
                    className: "logo",
                    src: Bl,
                    alt: "Michael Yeates' Logo",
                  }),
                }),
              }),
              (0, ze.jsx)(tu, {}),
            ],
          });
        },
        ru = n(165),
        au = n.n(ru),
        iu =
          (n.p,
          function () {
            var e = {
              icon: {
                textDecoration: "none",
                fontSize: "22px",
                padding: "10px",
                transition: "0.2s ease-in",
              },
            };
            return (0, ze.jsxs)("div", {
              className: "socialIcons",
              style: e.socialIcons,
              children: [
                (0, ze.jsx)("a", {
                  className: "icon",
                  style: e.icon,
                  href: "https://github.com/chauhanmahavir",
                  children: (0, ze.jsx)(Nl.i, {
                    initial: { y: 100, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                    transition: { delay: 1.8, duration: 0.5, type: "spring" },
                    className: "fa-brands fa-github",
                    "aria-hidden": "true",
                    title: "Mahaveer Chauhan's GitHub Profile",
                  }),
                }),
                (0, ze.jsx)("a", {
                  className: "icon",
                  style: e.icon,
                  href: "https://www.linkedin.com/in/chauhan-mahaveer/",
                  children: (0, ze.jsx)(Nl.i, {
                    initial: { y1: 100, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                    transition: { delay: 1.7, duration: 0.5, type: "spring" },
                    className: "fa-brands fa-linkedin",
                    "aria-hidden": "true",
                    title: "Mahaveer Chauhan's LinkedIn Profile",
                  }),
                }),
                (0, ze.jsx)("a", {
                  className: "icon",
                  style: e.icon,
                  href: "https://www.instagram.com/chauhan__mahaveer/",
                  children: (0, ze.jsx)(Nl.i, {
                    initial: { y: 100, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                    transition: { delay: 1.6, duration: 0.5, type: "spring" },
                    className: "fa-brands fa-instagram",
                    "aria-hidden": "true",
                    title: "Mahaveer Chauhan's Instagram Profile",
                  }),
                }),
              ],
            });
          }),
        ou = function (e) {
          var t = e.name,
            n = {
              landingImage: {
                position: "absolute",
                bottom: "0",
                opacity: "0.3",
                mixBlendMode: "lighten",
                height: "80%",
              },
              textContainer: {
                display: "flex",
                flexDirection: "column",
                letterSpacing: "1px",
                textAlign: "center",
                zIndex: "1",
                color: "#fff",
                textShadow: "1px 1px 3px #000",
              },
              name: {
                color: "var(--text-color)",
                fontWeight: "700",
                marginTop: "-100px",
                paddingBottom: "28px",
              },
            };
          return (0, ze.jsxs)(ze.Fragment, {
            children: [
              (0, ze.jsxs)("div", {
                className: "textContainer",
                style: n.textContainer,
                children: [
                  (0, ze.jsx)(Nl.h1, {
                    className: "name",
                    style: n.name,
                    initial: { scale: 0.5, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    transition: { delay: 0, duration: 1, type: "spring" },
                    children: t,
                  }),
                  (0, ze.jsx)(Nl.div, {
                    className: "description",
                    initial: { y: -100, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                    transition: { duration: 0.4, type: "spring" },
                    children: (0, ze.jsx)(au(), {
                      className: "description",
                      options: { cursor: "" },
                      onInit: function (e) {
                        e.changeDelay(50)
                          .typeString("AI/ML and IoT Developer")
                          .start();
                      },
                    }),
                  }),
                ],
              }),
              (0, ze.jsx)(Nl.div, {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 1, ease: "easeInOut" },
                children: (0, ze.jsx)(iu, {}),
              }),
            ],
          });
        };
      function su() {
        return (
          Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            },
          su.apply(this, arguments)
        );
      }
      var lu = new Map(),
        uu = new WeakMap(),
        cu = 0,
        fu = void 0;
      function du(e) {
        return Object.keys(e)
          .sort()
          .filter(function (t) {
            return void 0 !== e[t];
          })
          .map(function (t) {
            return "".concat(t, "_").concat(
              "root" === t
                ? (function (e) {
                    return e
                      ? (uu.has(e) || ((cu += 1), uu.set(e, cu.toString())),
                        uu.get(e))
                      : "0";
                  })(e.root)
                : e[t]
            );
          })
          .toString();
      }
      function pu(e, t) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : fu;
        if (
          "undefined" === typeof window.IntersectionObserver &&
          void 0 !== r
        ) {
          var a = e.getBoundingClientRect();
          return (
            t(r, {
              isIntersecting: r,
              target: e,
              intersectionRatio:
                "number" === typeof n.threshold ? n.threshold : 0,
              time: 0,
              boundingClientRect: a,
              intersectionRect: a,
              rootBounds: a,
            }),
            function () {}
          );
        }
        var i = (function (e) {
            var t = du(e),
              n = lu.get(t);
            if (!n) {
              var r,
                a = new Map(),
                i = new IntersectionObserver(function (t) {
                  t.forEach(function (t) {
                    var n,
                      i =
                        t.isIntersecting &&
                        r.some(function (e) {
                          return t.intersectionRatio >= e;
                        });
                    e.trackVisibility &&
                      "undefined" === typeof t.isVisible &&
                      (t.isVisible = i),
                      null == (n = a.get(t.target)) ||
                        n.forEach(function (e) {
                          e(i, t);
                        });
                  });
                }, e);
              (r =
                i.thresholds ||
                (Array.isArray(e.threshold)
                  ? e.threshold
                  : [e.threshold || 0])),
                (n = { id: t, observer: i, elements: a }),
                lu.set(t, n);
            }
            return n;
          })(n),
          o = i.id,
          s = i.observer,
          l = i.elements,
          u = l.get(e) || [];
        return (
          l.has(e) || l.set(e, u),
          u.push(t),
          s.observe(e),
          function () {
            u.splice(u.indexOf(t), 1),
              0 === u.length && (l.delete(e), s.unobserve(e)),
              0 === l.size && (s.disconnect(), lu.delete(o));
          }
        );
      }
      var hu = [
        "children",
        "as",
        "triggerOnce",
        "threshold",
        "root",
        "rootMargin",
        "onChange",
        "skip",
        "trackVisibility",
        "delay",
        "initialInView",
        "fallbackInView",
      ];
      function vu(e) {
        return "function" !== typeof e.children;
      }
      t.Component;
      function mu() {
        var e,
          n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = n.threshold,
          a = n.delay,
          i = n.trackVisibility,
          o = n.rootMargin,
          s = n.root,
          l = n.triggerOnce,
          c = n.skip,
          f = n.initialInView,
          d = n.fallbackInView,
          p = n.onChange,
          h = u(t.useState(null), 2),
          v = h[0],
          m = h[1],
          y = t.useRef(),
          g = u(t.useState({ inView: !!f, entry: void 0 }), 2),
          b = g[0],
          w = g[1];
        (y.current = p),
          t.useEffect(
            function () {
              var e;
              if (!c && v)
                return (
                  (e = pu(
                    v,
                    function (t, n) {
                      w({ inView: t, entry: n }),
                        y.current && y.current(t, n),
                        n.isIntersecting && l && e && (e(), (e = void 0));
                    },
                    {
                      root: s,
                      rootMargin: o,
                      threshold: r,
                      trackVisibility: i,
                      delay: a,
                    },
                    d
                  )),
                  function () {
                    e && e();
                  }
                );
            },
            [Array.isArray(r) ? r.toString() : r, v, s, o, l, c, i, d, a]
          );
        var x = null == (e = b.entry) ? void 0 : e.target,
          k = t.useRef();
        v ||
          !x ||
          l ||
          c ||
          k.current === x ||
          ((k.current = x), w({ inView: !!f, entry: void 0 }));
        var S = [m, b.inView, b.entry];
        return (S.ref = S[0]), (S.inView = S[1]), (S.entry = S[2]), S;
      }
      function yu(e) {
        return ql({
          tag: "svg",
          attr: {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          },
          child: [
            { tag: "line", attr: { x1: "7", y1: "17", x2: "17", y2: "7" } },
            { tag: "polyline", attr: { points: "7 7 17 7 17 17" } },
          ],
        })(e);
      }
      var gu = function (e) {
          var t = e.name,
            n = e.color;
          return (0, ze.jsxs)(Nl.button, {
            className: "btn",
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.99 },
            style: { backgroundColor: n },
            children: [
              (0, ze.jsx)("p", { children: t }),
              (0, ze.jsx)("div", {
                children: (0, ze.jsx)(yu, { className: "arrow-icon" }),
              }),
            ],
          });
        },
        bu =
          (n.p,
          function (e) {
            e.name;
            var t = u(mu({ threshold: 0.4, triggerOnce: !0 }), 2),
              n = t[0],
              r = t[1],
              a = {
                initial: { opacity: 0 },
                animate: { opacity: 1, transition: { staggerChildren: 0.3 } },
              },
              i = {
                initial: { y: 20, opacity: 0 },
                animate: { y: 0, opacity: 1 },
              };
            return (0, ze.jsx)("section", {
              className: "about",
              children: (0, ze.jsx)("div", {
                className: "aboutContainer container",
                children: (0, ze.jsx)("div", {
                  className: "row",
                  children: (0, ze.jsx)("div", {
                    className: "personalInfo col-12",
                    children: (0, ze.jsxs)(Nl.div, {
                      className: "contentContainer",
                      variants: a,
                      ref: n,
                      children: [
                        (0, ze.jsx)(Nl.h4, {
                          variants: i,
                          children:
                            "Nice to meet you! \ud83d\udc4b\ud83c\udffb",
                        }),
                        (0, ze.jsx)(Nl.h5, {
                          variants: i,
                          children:
                            "I'm a AI/ML and IoT Developer at Azoca Technologies.",
                        }),
                        (0, ze.jsxs)(Nl.div, {
                          className: "contentDescription",
                          variants: a,
                          initial: "initial",
                          animate: r ? "animate" : "initial",
                          children: [
                            (0, ze.jsx)(Nl.p, {
                              variants: i,
                              children:
                                "I'm a passionate & proactive human with strong expertise & experience of 3+ years in Machine/Deep Learning, Computer Vision, Natural Language Processing, and Hardware Programming.",
                            }),
                            (0, ze.jsx)("br", {}),
                            (0, ze.jsxs)(Nl.p, {
                              variants: i,
                              children: [
                                "Here, I don my",
                                " ",
                                (0, ze.jsxs)("span", {
                                  style: { color: "var(--hl-color)" },
                                  children: [" ", "problem-solving", " "],
                                }),
                                "cape and dive headfirst into real-world challenges, all while relentlessly pursuing a",
                                " ",
                                (0, ze.jsxs)("span", {
                                  style: { color: "var(--hl-color)" },
                                  children: [
                                    " ",
                                    "Digital and Technology Solutions",
                                  ],
                                }),
                                " ",
                                "degree from the University of Roehampton. So here I am, juggling bits of binary and real-life conundrums, all while crafting my own success story.",
                              ],
                            }),
                            (0, ze.jsx)("br", {}),
                            (0, ze.jsx)(Nl.p, {
                              variants: i,
                              children:
                                "Life is a kaleidoscope of experiences, far beyond the confines of work. When code isn't my focus, I'm conquering cycling routes, feeling the wind on spirited runs, and fueling my love for Formula One. Amid serene moments, I transform into a film aficionado, seeking films that kindle inspiration and provoke thought.",
                            }),
                          ],
                        }),
                        (0, ze.jsx)(Fl, {
                          to: "/portfolio",
                          children: (0, ze.jsx)(gu, { name: "View Portfolio" }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            });
          }),
        wu = function (e) {
          var t = e.name;
          return (0, ze.jsxs)(ze.Fragment, {
            children: [
              (0, ze.jsx)("main", {
                className: "landing container",
                style: {
                  height: "calc(100% - 93px)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                children: (0, ze.jsx)(ou, { name: t }),
              }),
              (0, ze.jsx)(bu, {}),
            ],
          });
        },
        xu = function () {
          new Date().getFullYear();
          var e = u((0, t.useState)({ stars: null, forks: null }), 2),
            n = (e[0], e[1]);
          (0, t.useEffect)(function () {
            fetch("https://api.github.com/repos/mdyeates/my-portfolio")
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                var t = e.stargazers_count,
                  r = e.forks_count;
                n({ stars: t, forks: r });
              })
              .catch(function (e) {
                return console.error(e);
              });
          }, []);
          return (0, ze.jsx)("footer", { children: (0, ze.jsx)(iu, {}) });
        },
        ku = function (e) {
          var t = e.title,
            n = e.description;
          return (0, ze.jsxs)(ze.Fragment, {
            children: [
              (0, ze.jsx)(Nl.p, {
                className: "pageDescription",
                initial: { y: -100, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { duration: 0.8, ease: "easeInOut" },
                children: n,
              }),
              (0, ze.jsx)(Nl.h3, {
                className: "pageTitle",
                initial: { y: -100, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                transition: { duration: 0.5, ease: "easeInOut" },
                children: t,
              }),
            ],
          });
        };
      var Su = function (e) {
          var t = e.title,
            n = (e.image, e.color),
            r = e.id,
            a = u(mu({ threshold: 0.5, triggerOnce: !0 }), 2),
            i = a[0],
            o = a[1];
          return (0, ze.jsx)(
            Il,
            {
              to: "/portfolio/".concat(t.toLowerCase()),
              className: "projectLink col-12 col-lg-6",
              children: (0, ze.jsx)(Nl.div, {
                ref: i,
                className: "",
                variants: {
                  hidden: { y: "10vw", opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                },
                initial: "hidden",
                animate: o ? "visible" : "hidden",
                transition: { duration: 0.4, ease: "easeInOut" },
                children: (0, ze.jsx)("div", {
                  style: { backgroundColor: n },
                  className:
                    "projectCard d-flex align-items-center justify-content-center p-5",
                  onClick: function () {},
                  children: (0, ze.jsxs)("div", {
                    className:
                      "textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5",
                    children: [
                      (0, ze.jsx)("h3", {
                        className: "projectTitle",
                        children: t,
                      }),
                      (0, ze.jsxs)("span", {
                        className: "viewWork",
                        children: ["View Work ", (0, ze.jsx)(yu, {})],
                      }),
                    ],
                  }),
                }),
              }),
            },
            r
          );
        },
        Eu = JSON.parse(
          '[{"title":"Gym Application","description":"AI Gym Application","body":"AI based Gym Application \ud83c\udfcb\ufe0f is developed on mediapipe library. Which capture the camera feed to the used and it will detect whether the user is performing the exercise correctly or not \ud83d\udcaa. \\nIt also shows the minimum angle that needs to be done between joints while performing exercise.","technologies":["Python","Computer Vision","Mediapipe","Numpy"],"github":"https://github.com/chauhanmahavir/Gym-Application/","bgcolor":"var(--hl2-color)","id":"1"},{"title":"Liveness Detection","description":"Live User","technologies":["Python","Computer Vision","Mediapipe","Numpy"],"body":"Liveness Detection \ud83d\udc68 is the project to detect the whether the user is live or not. It will also detect whether the user is showing any person image or not. \\nTo successfully perform liveness user need to perform belowe tasks: \\n\u2022 3x Times Eye Blink \\n\u2022 3x Times Move Iris to Left \\n\u2022 3x Times Move Iris to Right \\n The Camera feed also shows the mash of the face landmarks which detects 478 points on the face.","github":"https://github.com/chauhanmahavir/Liveness-Detection","bgcolor":"var(--hl-color)","id":"2"},{"title":"Hand Detection","description":"hand Detection on Kinect","technologies":["Python","Computer Vision","Mediapipe","PyKinect","Numpy"],"body":"Hand detection is the project to detect the hand and it will recognize the all joints of the hand. It is capturing the video feed from the kinect via PyKinect library and it is transfering this feed to the mediapipe library to detect the hand and it will detect joints as well. \\nWe can use the application to control games and PC using hand gestures. The algorithm is enough to process 60 frames per second.","github":"https://github.com/chauhanmahavir/Hand-Detection-On-Kinect","bgcolor":"#6c4bf4","id":"3"},{"title":"Invisibile","description":"Invisibility With OpenCV","technologies":["Python","Computer Vision","Numpy"],"body":"This application is developer using computer vision. Basically, It will detect the color that needs to transperent. It will replace that color region with the original background. \\n This is just fun project. I got these idea from the Harry Potter \ud83e\uddd9 Invisible clock.","github":"https://github.com/chauhanmahavir/Invisibility-With-OpenCV","bgcolor":"#f85781","id":"4"},{"title":"Lane Detection","description":"Lane Detectiong using Computer Vision","body":"This project aims to detect the road lane using computer vision. First of all it will detect the white middle and right line of the road and it will create the region of interest according to detection. \\n This project can be extended to object detection, vehicle detection, and Lane changing for autonomous driving cars. \ud83d\ude98","technologies":["Python","Computer Vision","Numpy"],"github":"https://github.com/chauhanmahavir/Lane-Detection/","bgcolor":"#e47911","id":"5"},{"title":"Self Driving Car on GTA V","description":"Autonomous Driving car on GTA V","technologies":["Python","Computer Vision","Numpy","Tensorflow","Deep Learning","Machine Learning"],"body":"This project is developed using deep learning model. This project is divided into four parts as below: \\n\u2022 Create Dataset - In this part user need to create their own dataset to train the model. \\n\u2022 Preprocess Dataset - Out dataset is not processed so we need to process the dataset and we are also creating some dummy images to increase the datasets and store all images along with the key binding into npy file for the training. \\n\u2022 Train Dataset - For the training, We have modified the alexnet architecture to train the model. \\n\u2022 Test Dataset - We tested our model with on the GTA V.","github":"https://github.com/chauhanmahavir/Self-Driving-Car-on-GTAV","bgcolor":"#3e67ff","id":"6"},{"title":"TTC Delayed Bus Analysis","description":"TTC Delayed Bus Analysis","technologies":["Python","Computer Vision","Numpy","Tensorflow","Deep Learning","Machine Learning"],"body":"The TTC (Toronto Transit Commission) is the public transportation provider in Toronto, Canada, responsible for operating buses, streetcars, and subways throughout the city. As with any transportation system, delays can impact the service\u2019s efficiency and passengers\u2019 satisfaction. An analysis report has been prepared and presented to understand better the frequency and causes of delays on TTC buses. It provides a comprehensive overview of the uncertainties that occurred during a specific period and the factors contributing to them. It also includes delay prediction for the year 2023. By identifying the causes of delays, the TTC can develop strategies to minimize them and improve the overall quality of its bus service.","github":"https://github.com/chauhanmahavir/Toronto-Transit-Commission-TTC-Delayed-Bus-Analysis","bgcolor":"var(--hl2-color)","id":"7"},{"title":"Flight Fare Prediction","description":"Flight Fare Prediction","technologies":["Python","Computer Vision","Numpy","Tensorflow","Deep Learning","Machine Learning"],"body":"The objective of the study is to analyse the flight booking dataset obtained from \u201cEase My Trip\u201d website and to conduct various statistical hypothesis tests in order to get meaningful information from it. The \'Linear Regression\' statistical algorithm would be used to train the dataset and predict a continuous target variable. \'Easemytrip\' is an internet platform for booking flight tickets, and hence a platform that potential passengers use to buy tickets. A thorough study of the data will aid in the discovery of valuable insights that will be of enormous value to passengers.","github":"https://github.com/chauhanmahavir/Flight-Fare-Prediction","bgcolor":"var(--hl-color)","id":"8"},{"title":"Spam Email Classification Using Semi-Supervised Learning","description":"Spam Email Classification Using Semi-Supervised Learning","technologies":["Python","Computer Vision","Numpy","Tensorflow","Deep Learning","Machine Learning"],"body":"This project is developed using semi supervised learning. The dataset contains the email body and label. I have used Self Training Classifier with Support vector Machine and Naive Bayes to develop the semi supervised learning algorithm","github":"https://github.com/chauhanmahavir/Spam-Email-Classification-Using-Semi-Supervised-Learning","bgcolor":"#6c4bf4","id":"9"},{"title":"Cost Prediction for Logistic Company","description":"Cost Prediction for Logistic Company using Regression and ANN","technologies":["Python","Computer Vision","Numpy","Tensorflow","Deep Learning","Machine Learning"],"body":"As businesses increasingly rely on efficient and timely delivery of goods, logistics companies seek ways to optimize their delivery networks. They require accurate predictions of the costs associated with delivering packages across their network to achieve this. In this scenario, a logistics company has shared a dataset of network-wide deliveries and their corresponding trip costs. The task at hand is to build a model that can accurately predict the cost of deliveries, enabling the company to optimize its network and improve its overall efficiency.\\n Cost Prediction for Logistic Company Using Regression - https://github.com/chauhanmahavir/Cost-Prediction-for-Logistic-Company \\n Cost Prediction for Logistic Company Using Neural Network - https://github.com/chauhanmahavir/Cost-Prediction-for-Logistic-Company-Using-Neural-Network","github":"https://github.com/chauhanmahavir/Cost-Prediction-for-Logistic-Company-Using-Neural-Network","bgcolor":"#f85781","id":"10"}]'
        ),
        Cu = function () {
          return Eu.map(function (e) {
            return (0,
            ze.jsx)(Su, { title: e.title, image: e.image, color: e.bgcolor }, e.id);
          });
        },
        Pu = function () {
          var e = ke();
          return (
            (0, t.useEffect)(
              function () {
                window.scrollTo(0, 0);
              },
              [e]
            ),
            (0, ze.jsx)(ze.Fragment, {
              children: (0, ze.jsxs)("main", {
                className: "portfolio container",
                children: [
                  (0, ze.jsx)(ku, {
                    title: "Portfolio",
                    description: "View my work",
                  }),
                  (0, ze.jsx)("div", {
                    className: "row",
                    children: (0, ze.jsx)(Cu, {}),
                  }),
                ],
              }),
            })
          );
        },
        Tu = function () {
          return (0, ze.jsxs)("main", {
            className: "error",
            children: [
              (0, ze.jsx)(ku, {
                title: "404 Page Not Found",
                description: "Uh oh!",
              }),
              (0, ze.jsx)("div", {
                className: "error-description",
                children: (0, ze.jsx)("div", {
                  className: "row",
                  children: (0, ze.jsxs)("div", {
                    className: "col",
                    children: [
                      (0, ze.jsx)("p", {
                        children:
                          "Sorry, the page you are looking for does not exist.",
                      }),
                      (0, ze.jsx)("p", {
                        children:
                          "Please double-check the URL or navigate to another section of the site.",
                      }),
                      (0, ze.jsx)(Il, {
                        to: "/",
                        className: "home",
                        children: (0, ze.jsx)(gu, { name: "Return to Home" }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        ju = function () {
          var e = ke();
          (0, t.useEffect)(
            function () {
              window.scrollTo(0, 0);
            },
            [e]
          );
          var n = (function () {
              var e = t.useContext(be).matches,
                n = e[e.length - 1];
              return n ? n.params : {};
            })().projectTitle,
            r = Eu.find(function (e) {
              return e.title.toLowerCase() === n;
            });
          return r
            ? (0, ze.jsxs)("main", {
                className: "container portfolio",
                children: [
                  (0, ze.jsx)(ku, {
                    title: r.title,
                    description: r.description,
                  }),
                  (0, ze.jsx)("div", {
                    className: "projectDetails",
                    children: (0, ze.jsx)("div", {
                      className: "row",
                      children: (0, ze.jsxs)("div", {
                        className: "col-12  projectBodyContainer",
                        children: [
                          (0, ze.jsx)("div", {
                            className: "tech",
                            children: r.technologies.map(function (e, t) {
                              return (0,
                              ze.jsx)(Nl.span, { className: "technology", initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.5, delay: 0.1 * t, ease: "easeInOut" }, children: e + " " }, t);
                            }),
                          }),
                          (0, ze.jsx)("div", {
                            className: "projectBody",
                            children: r.body.split("\n").map(function (e, t) {
                              return (0,
                              ze.jsx)(Nl.p, { className: "paragraph", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay: 0.3 * t, ease: "easeInOut" }, children: e }, t);
                            }),
                          }),
                          (0, ze.jsxs)(Nl.div, {
                            style: { display: "flex", gap: "10px" },
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: {
                              duration: 0.5,
                              delay: 0.3 * r.body.split("\n").length,
                            },
                            children: [
                              (0, ze.jsx)("a", {
                                href: r.github,
                                children: (0, ze.jsx)(gu, {
                                  name: "View Code",
                                }),
                              }),
                              (0, ze.jsx)(Il, {
                                to: "/portfolio",
                                children: (0, ze.jsx)(gu, {
                                  name: "Go Back",
                                  color: "var(--hl2-color)",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              })
            : (0, ze.jsx)(Tu, {});
        },
        _u =
          (n.p,
          function (e) {
            var t = e.brand;
            return (0, ze.jsxs)("section", {
              className: "resume container",
              children: [
                (0, ze.jsx)(ku, {
                  title: "Resume",
                  description: "Uncover my expertise",
                }),
                (0, ze.jsx)("p", { className: "brand", children: t }),
                (0, ze.jsx)(Fl, {
                  to: "https://github.com/chauhanmahavir/chauhanmahavir.github.io/blob/main/Resume.pdf",
                  children: (0, ze.jsx)(gu, { name: "Resume" }),
                }),
              ],
            });
          }),
        Nu =
          (n(635),
          function (e) {
            var t = e.name,
              n = e.email,
              r = e.location,
              a = u(mu({ threshold: 0, triggerOnce: !0 }), 2),
              i = a[0],
              o = a[1];
            return (0, ze.jsx)(Nl.div, {
              className: "contactInfo",
              ref: i,
              initial: { y: "10vw", opacity: 0 },
              animate: o ? { y: 0, opacity: 1 } : { y: "10vw", opacity: 0 },
              transition: { duration: 0.4, ease: "easeInOut" },
              children: (0, ze.jsx)("div", {
                className: "w",
                children: (0, ze.jsxs)("ul", {
                  className: "listInfo",
                  children: [
                    (0, ze.jsx)("li", {
                      children: (0, ze.jsxs)("div", {
                        className: "personalContactInfo",
                        children: [
                          (0, ze.jsxs)("span", {
                            className: "infoIcon",
                            children: [
                              (0, ze.jsx)("i", {
                                className: "icon fa-solid fa-user",
                              }),
                              " ",
                            ],
                          }),
                          (0, ze.jsxs)("div", {
                            className: "mediaWrap",
                            children: [
                              (0, ze.jsx)("h6", {
                                className: "infoType",
                                children: "Name",
                              }),
                              (0, ze.jsx)("span", {
                                className: "infoValue",
                                children: t,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, ze.jsx)("li", {
                      children: (0, ze.jsxs)("div", {
                        className: "personalContactInfo",
                        children: [
                          (0, ze.jsxs)("span", {
                            className: "infoIcon",
                            children: [
                              (0, ze.jsx)("i", {
                                className: "icon fa-solid fa-location-pin ",
                              }),
                              " ",
                            ],
                          }),
                          (0, ze.jsxs)("div", {
                            className: "mediaWrap",
                            children: [
                              (0, ze.jsx)("h6", {
                                className: "infoType",
                                children: "Location",
                              }),
                              (0, ze.jsx)("span", {
                                className: "infoValue",
                                children: r,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, ze.jsx)("li", {
                      children: (0, ze.jsxs)("div", {
                        className: "personalContactInfo",
                        children: [
                          (0, ze.jsxs)("span", {
                            className: "infoIcon",
                            children: [
                              (0, ze.jsx)("i", {
                                className: "icon fa-solid fa-envelope ",
                              }),
                              " ",
                            ],
                          }),
                          (0, ze.jsxs)("div", {
                            className: "mediaWrap",
                            children: [
                              (0, ze.jsx)("h6", {
                                className: "infoType",
                                children: "Email",
                              }),
                              (0, ze.jsx)("span", {
                                className: "infoValue",
                                children: (0, ze.jsx)("a", {
                                  href: "mailto:".concat(n),
                                  children: n,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            });
          }),
        Ou = function (e) {
          var t = e.name,
            n = e.email,
            r = e.location;
          return (0, ze.jsx)(ze.Fragment, {
            children: (0, ze.jsxs)("main", {
              className: "contact container",
              children: [
                (0, ze.jsx)(ku, {
                  title: "Contact",
                  description: "Get in touch",
                }),
                (0, ze.jsx)("div", {
                  className: "contactWrap container",
                  children: (0, ze.jsx)("div", {
                    className: "row",
                    children: (0, ze.jsx)("div", {
                      className: "col-12",
                      children: (0, ze.jsx)(Nu, {
                        name: t,
                        location: r,
                        email: n,
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        };
      var Lu = function () {
        var e = {
            name: "Mahaveer Chauhan",
            location: "Toronto, Canada",
            email: "mahaveerp.chauhan@gmail.com",
            brand:
              "An independent, workaholic, and self-motivated learner with proven ability and experience in developing Machine Learning, IoT, and Data Science projects. Possess the ability and curiosity to get insights from data. Having impeccable knowledge for initiating applications with the whole data science life cycle. Always create easily understandable algorithms for complex problems with a great outcome.",
          },
          n = ke(),
          r = u((0, t.useState)(!0), 2),
          a = (r[0], r[1]),
          i = u((0, t.useState)(), 2),
          o = i[0],
          s = i[1];
        return (
          (0, t.useEffect)(
            function () {
              "/" !== n.pathname && a(!1), o || s(document.title);
              var e = function () {
                document.hidden
                  ? (document.title =
                      "\ud83d\udc4b\ud83c\udffb Git pulling you back in!")
                  : (document.title = o);
              };
              return (
                window.addEventListener("visibilitychange", e),
                function () {
                  return window.removeEventListener("visibilitychange", e);
                }
              );
            },
            [n, o]
          ),
          (0, ze.jsxs)(ze.Fragment, {
            children: [
              (0, ze.jsx)(nu, {}),
              (0, ze.jsxs)(
                Ve,
                {
                  location: n,
                  children: [
                    (0, ze.jsx)(Re, {
                      path: "/",
                      element: (0, ze.jsx)(wu, {
                        name: e.name,
                        tagline: e.tagline,
                      }),
                    }),
                    (0, ze.jsx)(Re, {
                      path: "/portfolio",
                      element: (0, ze.jsx)(Pu, {}),
                    }),
                    (0, ze.jsx)(Re, {
                      path: "/resume",
                      element: (0, ze.jsx)(_u, { brand: e.brand }),
                    }),
                    (0, ze.jsx)(Re, {
                      path: "/contact",
                      element: (0, ze.jsx)(Ou, {
                        name: e.name,
                        location: e.location,
                        email: e.email,
                      }),
                    }),
                    (0, ze.jsx)(Re, {
                      path: "/page-not-found",
                      element: (0, ze.jsx)(Tu, {}),
                    }),
                    (0, ze.jsx)(Re, {
                      path: "/portfolio/:projectTitle",
                      element: (0, ze.jsx)(ju, {}),
                    }),
                    (0, ze.jsx)(Re, {
                      path: "*",
                      element: (0, ze.jsx)(Me, { to: "/page-not-found" }),
                    }),
                  ],
                },
                n.pathname
              ),
              (0, ze.jsx)(xu, {}),
            ],
          })
        );
      };
      a.createRoot(document.getElementById("root")).render(
        (0, ze.jsx)(t.StrictMode, {
          children: (0, ze.jsx)(Rl, { children: (0, ze.jsx)(Lu, {}) }),
        })
      );
    })();
})();
//# sourceMappingURL=main.60c24e72.js.map
