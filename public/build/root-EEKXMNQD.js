import {
  require_react_dom
} from "/build/_shared/chunk-WMFE6TZ5.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-ADNCORLJ.js";
import {
  isBlank,
  isLength,
  isMassageLength,
  isMobile,
  isValid,
  validateEmail
} from "/build/_shared/chunk-DZO7EO6M.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-MLBUYSNZ.js";

// app/footer/footer.jsx
var import_react = __toESM(require_react());

// app/assets/weenggs.png
var weenggs_default = "/build/_assets/weenggs-EN6VADC5.png";

// app/footer/footer.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Footer = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "bg-[#444] h:full lg:text-left",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "container m-auto p-10 ",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "grid lg:grid-cols-3  lg:max-w-[1140px] m-auto ",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: " lg:max-w-[350px]",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                  to: "/",
                  id: "scrollToTop",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    className: "mb-6 custom-logo bg-transparent",
                    width: "200",
                    height: "50",
                    src: weenggs_default,
                    alt: "Weenggs Technology"
                  }, void 0, false, {
                    fileName: "app/footer/footer.jsx",
                    lineNumber: 11,
                    columnNumber: 10
                  }, this)
                }, void 0, false, {
                  fileName: "app/footer/footer.jsx",
                  lineNumber: 10,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                  className: "list-none mb-0 w-[270px]",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "text-white mb-5 text-base  letter-spacing: 0.025em",
                      children: "We craft some artistic yet powerful iOS & Android applications for you."
                    }, void 0, false, {
                      fileName: "app/footer/footer.jsx",
                      lineNumber: 16,
                      columnNumber: 15
                    }, this)
                  }, void 0, false, {
                    fileName: "app/footer/footer.jsx",
                    lineNumber: 15,
                    columnNumber: 13
                  }, this)
                }, void 0, false, {
                  fileName: "app/footer/footer.jsx",
                  lineNumber: 14,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/footer/footer.jsx",
              lineNumber: 9,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: " lg:max-w-[350px]",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                  className: "uppercase text-base font-bold text-[16px] mb-2.5 text-white",
                  children: "CONTACT US"
                }, void 0, false, {
                  fileName: "app/footer/footer.jsx",
                  lineNumber: 25,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                  className: "list-none text-base mb-0",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex text-white",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          className: "m-1 flex",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                            className: "fa fa-skype"
                          }, void 0, false, {
                            fileName: "app/footer/footer.jsx",
                            lineNumber: 30,
                            columnNumber: 17
                          }, this)
                        }, void 0, false, {
                          fileName: "app/footer/footer.jsx",
                          lineNumber: 29,
                          columnNumber: 13
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                          to: "#",
                          className: "ml-3 mb-4",
                          children: "weenggs"
                        }, void 0, false, {
                          fileName: "app/footer/footer.jsx",
                          lineNumber: 32,
                          columnNumber: 13
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/footer/footer.jsx",
                      lineNumber: 28,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex text-white",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          className: "m-1 flex",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                            className: "fa fa-envelope"
                          }, void 0, false, {
                            fileName: "app/footer/footer.jsx",
                            lineNumber: 36,
                            columnNumber: 13
                          }, this)
                        }, void 0, false, {
                          fileName: "app/footer/footer.jsx",
                          lineNumber: 35,
                          columnNumber: 13
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                          to: "mailto:info@weenggs.com",
                          className: "ml-3 mb-4",
                          children: "hr@weenggs.com"
                        }, void 0, false, {
                          fileName: "app/footer/footer.jsx",
                          lineNumber: 38,
                          columnNumber: 13
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/footer/footer.jsx",
                      lineNumber: 34,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex text-white",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          className: "m-1 flex",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                            className: "fa fa-phone"
                          }, void 0, false, {
                            fileName: "app/footer/footer.jsx",
                            lineNumber: 43,
                            columnNumber: 13
                          }, this)
                        }, void 0, false, {
                          fileName: "app/footer/footer.jsx",
                          lineNumber: 42,
                          columnNumber: 13
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                          to: "tel:+919428616132",
                          className: "ml-4 mb-4",
                          children: "91 9428616132"
                        }, void 0, false, {
                          fileName: "app/footer/footer.jsx",
                          lineNumber: 45,
                          columnNumber: 13
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/footer/footer.jsx",
                      lineNumber: 41,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex text-white",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          className: "m-1 flex",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                            className: "fa fa-location-arrow"
                          }, void 0, false, {
                            fileName: "app/footer/footer.jsx",
                            lineNumber: 49,
                            columnNumber: 13
                          }, this)
                        }, void 0, false, {
                          fileName: "app/footer/footer.jsx",
                          lineNumber: 48,
                          columnNumber: 13
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                          to: "/contact",
                          className: "ml-4 mb-4",
                          children: [
                            "221 Avalon, Katargam,",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                              fileName: "app/footer/footer.jsx",
                              lineNumber: 51,
                              columnNumber: 78
                            }, this),
                            "Surat \u2013 395004,",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                              fileName: "app/footer/footer.jsx",
                              lineNumber: 52,
                              columnNumber: 32
                            }, this),
                            "GJ, India"
                          ]
                        }, void 0, true, {
                          fileName: "app/footer/footer.jsx",
                          lineNumber: 51,
                          columnNumber: 13
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/footer/footer.jsx",
                      lineNumber: 47,
                      columnNumber: 13
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/footer/footer.jsx",
                  lineNumber: 27,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/footer/footer.jsx",
              lineNumber: 24,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: " lg:max-w-[350px]",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                  className: "uppercase font-bold mb-2.5 text-[16px] text-base text-white",
                  children: "NAVIGATE"
                }, void 0, false, {
                  fileName: "app/footer/footer.jsx",
                  lineNumber: 62,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                  className: "list-none text-base text-white",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      className: "mb-4 lg:w-[300px] ",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                        className: "w-full inline-block",
                        to: "/",
                        children: "Home"
                      }, void 0, false, {
                        fileName: "app/footer/footer.jsx",
                        lineNumber: 66,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/footer/footer.jsx",
                      lineNumber: 65,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      className: "mb-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                        className: "w-full inline-block",
                        to: "/about",
                        id: "scrollToTop",
                        children: "About us"
                      }, void 0, false, {
                        fileName: "app/footer/footer.jsx",
                        lineNumber: 70,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/footer/footer.jsx",
                      lineNumber: 69,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      className: "mb-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                        className: "w-full inline-block",
                        to: "/portfolio",
                        id: "scrollToTop",
                        children: "Portfolio"
                      }, void 0, false, {
                        fileName: "app/footer/footer.jsx",
                        lineNumber: 73,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/footer/footer.jsx",
                      lineNumber: 72,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      className: "mb-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                        className: "w-full inline-block",
                        to: "/careers",
                        id: "scrollToTop",
                        children: "Carrers"
                      }, void 0, false, {
                        fileName: "app/footer/footer.jsx",
                        lineNumber: 76,
                        columnNumber: 13
                      }, this)
                    }, void 0, false, {
                      fileName: "app/footer/footer.jsx",
                      lineNumber: 75,
                      columnNumber: 13
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                      className: "mb-4",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                        className: "w-full inline-block",
                        to: "/contact",
                        id: "scrollToTop",
                        children: "Contact"
                      }, void 0, false, {
                        fileName: "app/footer/footer.jsx",
                        lineNumber: 79,
                        columnNumber: 13
                      }, this)
                    }, void 0, false, {
                      fileName: "app/footer/footer.jsx",
                      lineNumber: 78,
                      columnNumber: 13
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/footer/footer.jsx",
                  lineNumber: 64,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/footer/footer.jsx",
              lineNumber: 61,
              columnNumber: 9
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/footer/footer.jsx",
          lineNumber: 8,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/footer/footer.jsx",
        lineNumber: 7,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "text-white bg-[#666]  text-center p-2.5 text-[13px]",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
          className: "max-w-[1140px] m-auto",
          children: [
            "\xA9 Copyright ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
              to: "/",
              children: "weenggs.com"
            }, void 0, false, {
              fileName: "app/footer/footer.jsx",
              lineNumber: 90,
              columnNumber: 25
            }, this),
            ". All Right Reserved.",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
              className: "",
              to: "https://tailwind-elements.com/"
            }, void 0, false, {
              fileName: "app/footer/footer.jsx",
              lineNumber: 91,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/footer/footer.jsx",
          lineNumber: 89,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/footer/footer.jsx",
        lineNumber: 88,
        columnNumber: 5
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/footer/footer.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
};
var footer_default = Footer;

// app/header/header.js
var import_react14 = __toESM(require_react());

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var import_react3 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/ssr.js
var e = typeof window == "undefined" || typeof document == "undefined";

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var s = e ? import_react3.useEffect : import_react3.useLayoutEffect;

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var import_react4 = __toESM(require_react(), 1);
function s2(e4) {
  let r5 = (0, import_react4.useRef)(e4);
  return s(() => {
    r5.current = e4;
  }, [e4]), r5;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t2(e4) {
  typeof queueMicrotask == "function" ? queueMicrotask(e4) : Promise.resolve().then(e4).catch((o6) => setTimeout(() => {
    throw o6;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function m() {
  let n2 = [], i3 = [], r5 = { enqueue(e4) {
    i3.push(e4);
  }, addEventListener(e4, t5, a3, o6) {
    return e4.addEventListener(t5, a3, o6), r5.add(() => e4.removeEventListener(t5, a3, o6));
  }, requestAnimationFrame(...e4) {
    let t5 = requestAnimationFrame(...e4);
    return r5.add(() => cancelAnimationFrame(t5));
  }, nextFrame(...e4) {
    return r5.requestAnimationFrame(() => r5.requestAnimationFrame(...e4));
  }, setTimeout(...e4) {
    let t5 = setTimeout(...e4);
    return r5.add(() => clearTimeout(t5));
  }, microTask(...e4) {
    let t5 = { current: true };
    return t2(() => {
      t5.current && e4[0]();
    }), r5.add(() => {
      t5.current = false;
    });
  }, add(e4) {
    return n2.push(e4), () => {
      let t5 = n2.indexOf(e4);
      if (t5 >= 0) {
        let [a3] = n2.splice(t5, 1);
        a3();
      }
    };
  }, dispose() {
    for (let e4 of n2.splice(0))
      e4();
  }, async workQueue() {
    for (let e4 of i3.splice(0))
      await e4();
  } };
  return r5;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e4] = (0, import_react5.useState)(m);
  return (0, import_react5.useEffect)(() => () => e4.dispose(), [e4]), e4;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var import_react6 = __toESM(require_react(), 1);
var o2 = function(t5) {
  let e4 = s2(t5);
  return import_react6.default.useCallback((...r5) => e4.current(...r5), [e4]);
};

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var import_react7 = __toESM(require_react(), 1);
var r = { serverHandoffComplete: false };
function a2() {
  let [e4, f5] = (0, import_react7.useState)(r.serverHandoffComplete);
  return (0, import_react7.useEffect)(() => {
    e4 !== true && f5(true);
  }, [e4]), (0, import_react7.useEffect)(() => {
    r.serverHandoffComplete === false && (r.serverHandoffComplete = true);
  }, []), e4;
}

// node_modules/@headlessui/react/dist/utils/match.js
function u(r5, n2, ...a3) {
  if (r5 in n2) {
    let e4 = n2[r5];
    return typeof e4 == "function" ? e4(...a3) : e4;
  }
  let t5 = new Error(`Tried to handle "${r5}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e4) => `"${e4}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t5, u), t5;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var import_react8 = __toESM(require_react(), 1);
var u2 = Symbol();
function y(...t5) {
  let n2 = (0, import_react8.useRef)(t5);
  (0, import_react8.useEffect)(() => {
    n2.current = t5;
  }, [t5]);
  let c5 = o2((e4) => {
    for (let o6 of n2.current)
      o6 != null && (typeof o6 == "function" ? o6(e4) : o6.current = e4);
  });
  return t5.every((e4) => e4 == null || (e4 == null ? void 0 : e4[u2])) ? void 0 : c5;
}

// node_modules/@headlessui/react/dist/utils/render.js
var import_react9 = __toESM(require_react(), 1);
var S = ((a3) => (a3[a3.None = 0] = "None", a3[a3.RenderStrategy = 1] = "RenderStrategy", a3[a3.Static = 2] = "Static", a3))(S || {});
var j = ((e4) => (e4[e4.Unmount = 0] = "Unmount", e4[e4.Hidden = 1] = "Hidden", e4))(j || {});
function $({ ourProps: r5, theirProps: t5, slot: e4, defaultTag: a3, features: o6, visible: n2 = true, name: l5 }) {
  let s6 = T(t5, r5);
  if (n2)
    return p2(s6, e4, a3, l5);
  let u4 = o6 != null ? o6 : 0;
  if (u4 & 2) {
    let { static: i3 = false, ...d3 } = s6;
    if (i3)
      return p2(d3, e4, a3, l5);
  }
  if (u4 & 1) {
    let { unmount: i3 = true, ...d3 } = s6;
    return u(i3 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return p2({ ...d3, hidden: true, style: { display: "none" } }, e4, a3, l5);
    } });
  }
  return p2(s6, e4, a3, l5);
}
function p2(r5, t5 = {}, e4, a3) {
  let { as: o6 = e4, children: n2, refName: l5 = "ref", ...s6 } = m2(r5, ["unmount", "static"]), u4 = r5.ref !== void 0 ? { [l5]: r5.ref } : {}, i3 = typeof n2 == "function" ? n2(t5) : n2;
  s6.className && typeof s6.className == "function" && (s6.className = s6.className(t5));
  let d3 = {};
  if (t5) {
    let f5 = false, y3 = [];
    for (let [h2, g2] of Object.entries(t5))
      typeof g2 == "boolean" && (f5 = true), g2 === true && y3.push(h2);
    f5 && (d3["data-headlessui-state"] = y3.join(" "));
  }
  if (o6 === import_react9.Fragment && Object.keys(F(s6)).length > 0) {
    if (!(0, import_react9.isValidElement)(i3) || Array.isArray(i3) && i3.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a3} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s6).map((f5) => `  - ${f5}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((f5) => `  - ${f5}`).join(`
`)].join(`
`));
    return (0, import_react9.cloneElement)(i3, Object.assign({}, T(i3.props, F(m2(s6, ["ref"]))), d3, u4, w(i3.ref, u4.ref)));
  }
  return (0, import_react9.createElement)(o6, Object.assign({}, m2(s6, ["ref"]), o6 !== import_react9.Fragment && u4, o6 !== import_react9.Fragment && d3), i3);
}
function w(...r5) {
  return { ref: r5.every((t5) => t5 == null) ? void 0 : (t5) => {
    for (let e4 of r5)
      e4 != null && (typeof e4 == "function" ? e4(t5) : e4.current = t5);
  } };
}
function T(...r5) {
  var a3;
  if (r5.length === 0)
    return {};
  if (r5.length === 1)
    return r5[0];
  let t5 = {}, e4 = {};
  for (let o6 of r5)
    for (let n2 in o6)
      n2.startsWith("on") && typeof o6[n2] == "function" ? ((a3 = e4[n2]) != null || (e4[n2] = []), e4[n2].push(o6[n2])) : t5[n2] = o6[n2];
  if (t5.disabled || t5["aria-disabled"])
    return Object.assign(t5, Object.fromEntries(Object.keys(e4).map((o6) => [o6, void 0])));
  for (let o6 in e4)
    Object.assign(t5, { [o6](n2, ...l5) {
      let s6 = e4[o6];
      for (let u4 of s6) {
        if ((n2 instanceof Event || (n2 == null ? void 0 : n2.nativeEvent) instanceof Event) && n2.defaultPrevented)
          return;
        u4(n2, ...l5);
      }
    } });
  return t5;
}
function C(r5) {
  var t5;
  return Object.assign((0, import_react9.forwardRef)(r5), { displayName: (t5 = r5.displayName) != null ? t5 : r5.name });
}
function F(r5) {
  let t5 = Object.assign({}, r5);
  for (let e4 in t5)
    t5[e4] === void 0 && delete t5[e4];
  return t5;
}
function m2(r5, t5 = []) {
  let e4 = Object.assign({}, r5);
  for (let a3 of t5)
    a3 in e4 && delete e4[a3];
  return e4;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
var import_react10 = __toESM(require_react(), 1);
var o4 = (0, import_react10.createContext)(null);
o4.displayName = "OpenClosedContext";
var p3 = ((e4) => (e4[e4.Open = 0] = "Open", e4[e4.Closed = 1] = "Closed", e4))(p3 || {});
function s4() {
  return (0, import_react10.useContext)(o4);
}
function C2({ value: t5, children: n2 }) {
  return import_react10.default.createElement(o4.Provider, { value: t5 }, n2);
}

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
var import_react11 = __toESM(require_react(), 1);
function f2() {
  let e4 = (0, import_react11.useRef)(false);
  return s(() => (e4.current = true, () => {
    e4.current = false;
  }), []), e4;
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
var import_react12 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/once.js
function l3(r5) {
  let e4 = { called: false };
  return (...t5) => {
    if (!e4.called)
      return e4.called = true, r5(...t5);
  };
}

// node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function f3(t5, ...e4) {
  t5 && e4.length > 0 && t5.classList.add(...e4);
}
function v(t5, ...e4) {
  t5 && e4.length > 0 && t5.classList.remove(...e4);
}
var T2 = ((n2) => (n2.Ended = "ended", n2.Cancelled = "cancelled", n2))(T2 || {});
function c2(t5, e4) {
  let n2 = m();
  if (!t5)
    return n2.dispose;
  let { transitionDuration: d3, transitionDelay: o6 } = getComputedStyle(t5), [s6, u4] = [d3, o6].map((i3) => {
    let [a3 = 0] = i3.split(",").filter(Boolean).map((r5) => r5.includes("ms") ? parseFloat(r5) : parseFloat(r5) * 1e3).sort((r5, l5) => l5 - r5);
    return a3;
  });
  if (s6 + u4 !== 0) {
    let i3 = [];
    i3.push(n2.addEventListener(t5, "transitionrun", (a3) => {
      a3.target === a3.currentTarget && (i3.splice(0).forEach((r5) => r5()), i3.push(n2.addEventListener(t5, "transitionend", (r5) => {
        r5.target === r5.currentTarget && (e4("ended"), i3.splice(0).forEach((l5) => l5()));
      }), n2.addEventListener(t5, "transitioncancel", (r5) => {
        r5.target === r5.currentTarget && (e4("cancelled"), i3.splice(0).forEach((l5) => l5()));
      })));
    }));
  } else
    e4("ended");
  return n2.add(() => e4("cancelled")), n2.dispose;
}
function C3(t5, e4, n2, d3) {
  let o6 = n2 ? "enter" : "leave", s6 = m(), u4 = d3 !== void 0 ? l3(d3) : () => {
  };
  o6 === "enter" && (t5.removeAttribute("hidden"), t5.style.display = "");
  let m4 = u(o6, { enter: () => e4.enter, leave: () => e4.leave }), i3 = u(o6, { enter: () => e4.enterTo, leave: () => e4.leaveTo }), a3 = u(o6, { enter: () => e4.enterFrom, leave: () => e4.leaveFrom });
  return v(t5, ...e4.enter, ...e4.enterTo, ...e4.enterFrom, ...e4.leave, ...e4.leaveFrom, ...e4.leaveTo, ...e4.entered), f3(t5, ...m4, ...a3), s6.nextFrame(() => {
    v(t5, ...a3), f3(t5, ...i3), c2(t5, (r5) => (r5 === "ended" && (v(t5, ...m4), f3(t5, ...e4.entered)), u4(r5)));
  }), s6.dispose;
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
function I({ container: o6, direction: t5, classes: s6, onStart: a3, onStop: u4 }) {
  let c5 = f2(), d3 = p(), r5 = s2(t5);
  s(() => {
    let e4 = m();
    d3.add(e4.dispose);
    let n2 = o6.current;
    if (!!n2 && r5.current !== "idle" && !!c5.current)
      return e4.dispose(), a3.current(r5.current), e4.add(C3(n2, s6.current, r5.current === "enter", (l5) => {
        e4.dispose(), u(l5, { [T2.Ended]() {
          u4.current(r5.current);
        }, [T2.Cancelled]: () => {
        } });
      })), e4.dispose;
  }, [t5]);
}

// node_modules/@headlessui/react/dist/components/transitions/transition.js
function x2(r5 = "") {
  return r5.split(" ").filter((e4) => e4.trim().length > 1);
}
var F2 = (0, import_react12.createContext)(null);
F2.displayName = "TransitionContext";
var ve = ((s6) => (s6.Visible = "visible", s6.Hidden = "hidden", s6))(ve || {});
function Ce() {
  let r5 = (0, import_react12.useContext)(F2);
  if (r5 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return r5;
}
function ge() {
  let r5 = (0, import_react12.useContext)(M);
  if (r5 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return r5;
}
var M = (0, import_react12.createContext)(null);
M.displayName = "NestingContext";
function I2(r5) {
  return "children" in r5 ? I2(r5.children) : r5.current.filter(({ el: e4 }) => e4.current !== null).filter(({ state: e4 }) => e4 === "visible").length > 0;
}
function ee(r5, e4) {
  let s6 = s2(r5), n2 = (0, import_react12.useRef)([]), m4 = f2(), D = p(), b3 = o2((l5, i3 = j.Hidden) => {
    let t5 = n2.current.findIndex(({ el: o6 }) => o6 === l5);
    t5 !== -1 && (u(i3, { [j.Unmount]() {
      n2.current.splice(t5, 1);
    }, [j.Hidden]() {
      n2.current[t5].state = "hidden";
    } }), D.microTask(() => {
      var o6;
      !I2(n2) && m4.current && ((o6 = s6.current) == null || o6.call(s6));
    }));
  }), E3 = o2((l5) => {
    let i3 = n2.current.find(({ el: t5 }) => t5 === l5);
    return i3 ? i3.state !== "visible" && (i3.state = "visible") : n2.current.push({ el: l5, state: "visible" }), () => b3(l5, j.Unmount);
  }), S2 = (0, import_react12.useRef)([]), u4 = (0, import_react12.useRef)(Promise.resolve()), p5 = (0, import_react12.useRef)({ enter: [], leave: [], idle: [] }), d3 = o2((l5, i3, t5) => {
    S2.current.splice(0), e4 && (e4.chains.current[i3] = e4.chains.current[i3].filter(([o6]) => o6 !== l5)), e4 == null || e4.chains.current[i3].push([l5, new Promise((o6) => {
      S2.current.push(o6);
    })]), e4 == null || e4.chains.current[i3].push([l5, new Promise((o6) => {
      Promise.all(p5.current[i3].map(([f5, a3]) => a3)).then(() => o6());
    })]), i3 === "enter" ? u4.current = u4.current.then(() => e4 == null ? void 0 : e4.wait.current).then(() => t5(i3)) : t5(i3);
  }), h2 = o2((l5, i3, t5) => {
    Promise.all(p5.current[i3].splice(0).map(([o6, f5]) => f5)).then(() => {
      var o6;
      (o6 = S2.current.shift()) == null || o6();
    }).then(() => t5(i3));
  });
  return (0, import_react12.useMemo)(() => ({ children: n2, register: E3, unregister: b3, onStart: d3, onStop: h2, wait: u4, chains: p5 }), [E3, b3, n2, d3, h2, p5, u4]);
}
function be() {
}
var Ee = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function te(r5) {
  var s6;
  let e4 = {};
  for (let n2 of Ee)
    e4[n2] = (s6 = r5[n2]) != null ? s6 : be;
  return e4;
}
function Se(r5) {
  let e4 = (0, import_react12.useRef)(te(r5));
  return (0, import_react12.useEffect)(() => {
    e4.current = te(r5);
  }, [r5]), e4;
}
var xe = "div";
var ne = S.RenderStrategy;
var re = C(function(e4, s6) {
  let { beforeEnter: n2, afterEnter: m4, beforeLeave: D, afterLeave: b3, enter: E3, enterFrom: S2, enterTo: u4, entered: p5, leave: d3, leaveFrom: h2, leaveTo: l5, ...i3 } = e4, t5 = (0, import_react12.useRef)(null), o6 = y(t5, s6), f5 = i3.unmount ? j.Unmount : j.Hidden, { show: a3, appear: P2, initial: ie } = Ce(), [v3, _] = (0, import_react12.useState)(a3 ? "visible" : "hidden"), z = ge(), { register: N, unregister: V } = z, j2 = (0, import_react12.useRef)(null);
  (0, import_react12.useEffect)(() => N(t5), [N, t5]), (0, import_react12.useEffect)(() => {
    if (f5 === j.Hidden && !!t5.current) {
      if (a3 && v3 !== "visible") {
        _("visible");
        return;
      }
      return u(v3, { ["hidden"]: () => V(t5), ["visible"]: () => N(t5) });
    }
  }, [v3, t5, N, V, a3, f5]);
  let oe = s2({ enter: x2(E3), enterFrom: x2(S2), enterTo: x2(u4), entered: x2(p5), leave: x2(d3), leaveFrom: x2(h2), leaveTo: x2(l5) }), L = Se({ beforeEnter: n2, afterEnter: m4, beforeLeave: D, afterLeave: b3 }), U = a2();
  (0, import_react12.useEffect)(() => {
    if (U && v3 === "visible" && t5.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [t5, v3, U]);
  let k = ie && !P2, se = (() => !U || k || j2.current === a3 ? "idle" : a3 ? "enter" : "leave")(), le = o2((C5) => u(C5, { enter: () => L.current.beforeEnter(), leave: () => L.current.beforeLeave(), idle: () => {
  } })), ae = o2((C5) => u(C5, { enter: () => L.current.afterEnter(), leave: () => L.current.afterLeave(), idle: () => {
  } })), w2 = ee(() => {
    _("hidden"), V(t5);
  }, z);
  I({ container: t5, classes: oe, direction: se, onStart: s2((C5) => {
    w2.onStart(t5, C5, le);
  }), onStop: s2((C5) => {
    w2.onStop(t5, C5, ae), C5 === "leave" && !I2(w2) && (_("hidden"), V(t5));
  }) }), (0, import_react12.useEffect)(() => {
    !k || (f5 === j.Hidden ? j2.current = null : j2.current = a3);
  }, [a3, k, v3]);
  let ue = i3, de = { ref: o6 };
  return import_react12.default.createElement(M.Provider, { value: w2 }, import_react12.default.createElement(C2, { value: u(v3, { ["visible"]: p3.Open, ["hidden"]: p3.Closed }) }, $({ ourProps: de, theirProps: ue, defaultTag: xe, features: ne, visible: v3 === "visible", name: "Transition.Child" })));
});
var q = C(function(e4, s6) {
  let { show: n2, appear: m4 = false, unmount: D, ...b3 } = e4, E3 = (0, import_react12.useRef)(null), S2 = y(E3, s6);
  a2();
  let u4 = s4();
  if (n2 === void 0 && u4 !== null && (n2 = u(u4, { [p3.Open]: true, [p3.Closed]: false })), ![true, false].includes(n2))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [p5, d3] = (0, import_react12.useState)(n2 ? "visible" : "hidden"), h2 = ee(() => {
    d3("hidden");
  }), [l5, i3] = (0, import_react12.useState)(true), t5 = (0, import_react12.useRef)([n2]);
  s(() => {
    l5 !== false && t5.current[t5.current.length - 1] !== n2 && (t5.current.push(n2), i3(false));
  }, [t5, n2]);
  let o6 = (0, import_react12.useMemo)(() => ({ show: n2, appear: m4, initial: l5 }), [n2, m4, l5]);
  (0, import_react12.useEffect)(() => {
    if (n2)
      d3("visible");
    else if (!I2(h2))
      d3("hidden");
    else {
      let a3 = E3.current;
      if (!a3)
        return;
      let P2 = a3.getBoundingClientRect();
      P2.x === 0 && P2.y === 0 && P2.width === 0 && P2.height === 0 && d3("hidden");
    }
  }, [n2, h2]);
  let f5 = { unmount: D };
  return import_react12.default.createElement(M.Provider, { value: h2 }, import_react12.default.createElement(F2.Provider, { value: o6 }, $({ ourProps: { ...f5, as: import_react12.Fragment, children: import_react12.default.createElement(re, { ref: S2, ...f5, ...b3 }) }, theirProps: {}, defaultTag: import_react12.Fragment, features: ne, visible: p5 === "visible", name: "Transition" })));
});
var Pe = C(function(e4, s6) {
  let n2 = (0, import_react12.useContext)(F2) !== null, m4 = s4() !== null;
  return import_react12.default.createElement(import_react12.default.Fragment, null, !n2 && m4 ? import_react12.default.createElement(q, { ref: s6, ...e4 }) : import_react12.default.createElement(re, { ref: s6, ...e4 }));
});
var We = Object.assign(q, { Child: Pe, Root: q });

// node_modules/react-collapsed/dist/react-collapsed.esm.js
var e3 = __toESM(require_react());
var import_react13 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/tiny-warning/dist/tiny-warning.esm.js
var isProduction = false;
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }
    var text = "Warning: " + message;
    if (typeof console !== "undefined") {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x4) {
    }
  }
}
var tiny_warning_esm_default = warning;

// node_modules/react-collapsed/dist/react-collapsed.esm.js
function u3() {
  return u3 = Object.assign || function(e4) {
    for (var n2 = 1; n2 < arguments.length; n2++) {
      var t5 = arguments[n2];
      for (var o6 in t5)
        Object.prototype.hasOwnProperty.call(t5, o6) && (e4[o6] = t5[o6]);
    }
    return e4;
  }, u3.apply(this, arguments);
}
function c4(e4, n2) {
  if (null == e4)
    return {};
  var t5, o6, r5 = {}, i3 = Object.keys(e4);
  for (o6 = 0; o6 < i3.length; o6++)
    n2.indexOf(t5 = i3[o6]) >= 0 || (r5[t5] = e4[t5]);
  return r5;
}
var d2 = function() {
};
function s5(e4) {
  return null != e4 && e4.current ? e4.current.scrollHeight : (tiny_warning_esm_default(true, "useCollapse was not able to find a ref to the collapse element via `getCollapseProps`. Ensure that the element exposes its `ref` prop. If it exposes the ref prop under a different name (like `innerRef`), use the `refKey` property to change it. Example:\n\n{...getCollapseProps({refKey: 'innerRef'})}"), "auto");
}
var f4 = function() {
  var e4 = arguments;
  return function() {
    var n2 = arguments;
    return [].slice.call(e4).forEach(function(e5) {
      return e5 && e5.apply(void 0, [].slice.call(n2));
    });
  };
};
function p4(e4, n2) {
  if (null != e4)
    if ("function" == typeof e4)
      e4(n2);
    else
      try {
        e4.current = n2;
      } catch (t5) {
        throw new Error('Cannot assign value "' + n2 + '" to ref "' + e4 + '"');
      }
}
var h = "undefined" != typeof window ? import_react13.useLayoutEffect : import_react13.useEffect;
var v2 = false;
var g = 0;
var m3 = function() {
  return ++g;
};
var x3 = e3.useId;
var y2 = ["duration", "easing", "collapseStyles", "expandStyles", "onExpandStart", "onExpandEnd", "onCollapseStart", "onCollapseEnd", "isExpanded", "defaultExpanded", "hasDisabledAnimation"];
var E2 = ["disabled", "onClick"];
var b2 = ["style", "onTransitionEnd", "refKey"];
function C4(e4) {
  var i3, g2, C5 = void 0 === e4 ? {} : e4, w2 = C5.duration, S2 = C5.easing, k = void 0 === S2 ? "cubic-bezier(0.4, 0, 0.2, 1)" : S2, A = C5.collapseStyles, O = void 0 === A ? {} : A, P2 = C5.expandStyles, T4 = void 0 === P2 ? {} : P2, q2 = C5.onExpandStart, D = void 0 === q2 ? d2 : q2, F3 = C5.onExpandEnd, K2 = void 0 === F3 ? d2 : F3, j2 = C5.onCollapseStart, I3 = void 0 === j2 ? d2 : j2, N = C5.onCollapseEnd, z = void 0 === N ? d2 : N, H2 = C5.isExpanded, M2 = C5.defaultExpanded, R = void 0 !== M2 && M2, B2 = C5.hasDisabledAnimation, V = void 0 !== B2 && B2, _ = c4(C5, y2), G2 = function(e5, i4) {
    var l5 = (0, import_react13.useState)(i4 || false), u4 = l5[0], c5 = l5[1], d3 = (0, import_react13.useRef)(null != e5), s6 = d3.current ? e5 : u4, f5 = (0, import_react13.useCallback)(function(e6) {
      d3.current || c5(e6);
    }, []);
    return (0, import_react13.useEffect)(function() {
      tiny_warning_esm_default(!(d3.current && null == e5), "useCollapse is changing from controlled to uncontrolled. useCollapse should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop."), tiny_warning_esm_default(!(!d3.current && null != e5), "useCollapse is changing from uncontrolled to controlled. useCollapse should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled collapse for the lifetime of the component. Check the `isExpanded` prop.");
    }, [e5]), [s6, f5];
  }(H2, R), J2 = G2[0], L = G2[1], Q2 = void 0 !== x3 ? x3() : function(e5) {
    var t5 = v2 ? m3() : null, o6 = (0, import_react13.useState)(t5), i4 = o6[0], l5 = o6[1];
    return h(function() {
      null === i4 && l5(m3());
    }, []), (0, import_react13.useEffect)(function() {
      false === v2 && (v2 = true);
    }, []), null != i4 ? String(i4) : void 0;
  }(), U = (0, import_react13.useRef)(null);
  i3 = U, g2 = function(e5) {
  }, g2 = function(e5) {
    if (null != e5 && e5.current) {
      var n2 = window.getComputedStyle(e5.current), t5 = n2.paddingTop, o6 = n2.paddingBottom;
      tiny_warning_esm_default(!(t5 && "0px" !== t5 || o6 && "0px" !== o6), "react-collapsed: Padding applied to the collapse element will cause the animation to break and not perform as expected. To fix, apply equivalent padding to the direct descendent of the collapse element.");
    }
  }, (0, import_react13.useEffect)(function() {
    g2(i3);
  }, [i3]);
  var W, X, Y, Z = (_.collapsedHeight || 0) + "px", $2 = { display: "0px" === Z ? "none" : "block", height: Z, overflow: "hidden" }, ee2 = (0, import_react13.useState)(J2 ? {} : $2), ne2 = ee2[0], te2 = ee2[1], oe = function(e5) {
    (0, import_react_dom.flushSync)(function() {
      te2(e5);
    });
  }, re2 = function(e5) {
    oe(function(n2) {
      return u3({}, n2, e5);
    });
  };
  function ie(e5) {
    if (V)
      return {};
    var n2 = w2 || function(e6) {
      if (!e6 || "string" == typeof e6)
        return 0;
      var n3 = e6 / 36;
      return Math.round(10 * (4 + 15 * Math.pow(n3, 0.25) + n3 / 5));
    }(e5);
    return { transition: "height " + n2 + "ms " + k };
  }
  W = function() {
    J2 ? requestAnimationFrame(function() {
      D(), re2(u3({}, T4, { willChange: "height", display: "block", overflow: "hidden" })), requestAnimationFrame(function() {
        var e5 = s5(U);
        re2(u3({}, ie(e5), { height: e5 }));
      });
    }) : requestAnimationFrame(function() {
      I3();
      var e5 = s5(U);
      re2(u3({}, O, ie(e5), { willChange: "height", height: e5 })), requestAnimationFrame(function() {
        re2({ height: Z, overflow: "hidden" });
      });
    });
  }, X = [J2, Z], Y = (0, import_react13.useRef)(true), (0, import_react13.useEffect)(function() {
    if (!Y.current)
      return W();
    Y.current = false;
  }, X);
  var le = function(e5) {
    if (e5.target === U.current && "height" === e5.propertyName)
      if (J2) {
        var n2 = s5(U);
        n2 === ne2.height ? oe({}) : re2({ height: n2 }), K2();
      } else
        ne2.height === Z && (oe($2), z());
  };
  return { getToggleProps: function(e5) {
    var n2 = void 0 === e5 ? {} : e5, t5 = n2.disabled, o6 = void 0 !== t5 && t5, r5 = n2.onClick, i4 = void 0 === r5 ? d2 : r5, l5 = c4(n2, E2);
    return u3({ type: "button", role: "button", id: "react-collapsed-toggle-" + Q2, "aria-controls": "react-collapsed-panel-" + Q2, "aria-expanded": J2, tabIndex: 0, disabled: o6 }, l5, { onClick: o6 ? d2 : f4(i4, function() {
      return L(function(e6) {
        return !e6;
      });
    }) });
  }, getCollapseProps: function(e5) {
    var n2, t5 = void 0 === e5 ? {} : e5, o6 = t5.style, r5 = void 0 === o6 ? {} : o6, i4 = t5.onTransitionEnd, l5 = void 0 === i4 ? d2 : i4, a3 = t5.refKey, s6 = void 0 === a3 ? "ref" : a3, h2 = c4(t5, b2);
    return u3({ id: "react-collapsed-panel-" + Q2, "aria-hidden": !J2 }, h2, ((n2 = {})[s6] = function() {
      var e6 = [].slice.call(arguments);
      return e6.every(function(e7) {
        return null == e7;
      }) ? null : function(n3) {
        e6.forEach(function(e7) {
          p4(e7, n3);
        });
      };
    }(U, h2[s6]), n2.onTransitionEnd = f4(le, l5), n2.style = u3({ boxSizing: "border-box" }, r5, ne2), n2));
  }, isExpanded: J2, setExpanded: L };
}

// app/header/header.js
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Header = () => {
  const activeStyle = {
    textDecoration: "underline",
    color: "red"
  };
  const [isOpen, setIsOpen] = (0, import_react14.useState)(false);
  const { getCollapseProps, getToggleProps, isExpanded } = C4();
  const [active, setActive] = (0, import_react14.useState)("");
  (0, import_react14.useEffect)(() => {
    console.log(location.pathname);
    localStorage.setItem("path", location.pathname);
    setActive(localStorage.getItem("path"));
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: " sticky top-0 bg-white drop-shadow shadow-blue-600  z-50",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
        className: " bg-white-800 ",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: " mx-auto md:py-5 py-0 px-0 lg:px-10 md:px-5 w-auto z-40",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex px-5  md:pl-5 pl:5 items-center justify-between md:h-13 py-4 md:p-0",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex items-center w-full  ",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex-shrink-0 w-1/5 ",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                          to: "/",
                          onClick: scrollToTop,
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                            width: "200",
                            height: "50",
                            src: "https://www.weenggs.com/wp-content/uploads/2019/01/WeEnggWeb-1.png",
                            className: "custom-logo",
                            alt: "Weenggs Technology"
                          }, void 0, false, {
                            fileName: "app/header/header.js",
                            lineNumber: 41,
                            columnNumber: 21
                          }, this)
                        }, void 0, false, {
                          fileName: "app/header/header.js",
                          lineNumber: 40,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/header/header.js",
                        lineNumber: 39,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/header/header.js",
                      lineNumber: 38,
                      columnNumber: 17
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "hidden lg:block w-4/5 m-auto lg:px-5",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "justify-end flex items-baseline space-x-2 ",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                            to: "/",
                            onClick: scrollToTop,
                            style: ({ isActive }) => isActive ? activeStyle : void 0,
                            className: "text-black hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium",
                            children: "Home"
                          }, void 0, false, {
                            fileName: "app/header/header.js",
                            lineNumber: 47,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                            className: "group relative inline-block",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                                className: "inline-flex items-center text-black-300  px-3 py-2 rounded-md text-sm font-medium cursor-default",
                                children: "Services"
                              }, void 0, false, {
                                fileName: "app/header/header.js",
                                lineNumber: 59,
                                columnNumber: 21
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                                className: "absolute hidden pt-1 bg-white text-gray-700 group-hover:block w-max",
                                style: { border: "1px gray double" },
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                    className: "",
                                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                                      style: ({ isActive }) => isActive ? activeStyle : void 0,
                                      className: "whitespace-no-wrap block rounded-t  py-2 px-4 text-xs hover:text-red-500 ",
                                      to: "/service/iphone-app-development/",
                                      children: "IPHONE APP DEVELOPMENT"
                                    }, void 0, false, {
                                      fileName: "app/header/header.js",
                                      lineNumber: 62,
                                      columnNumber: 25
                                    }, this)
                                  }, void 0, false, {
                                    fileName: "app/header/header.js",
                                    lineNumber: 61,
                                    columnNumber: 23
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
                                    fileName: "app/header/header.js",
                                    lineNumber: 66,
                                    columnNumber: 23
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                    className: "",
                                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                                      style: ({ isActive }) => isActive ? activeStyle : void 0,
                                      className: "whitespace-no-wrap block  py-2 px-4 hover:text-red-500 text-xs",
                                      to: "/service/android-app-development/",
                                      children: "ANDROID APP DEVELOPMENT"
                                    }, void 0, false, {
                                      fileName: "app/header/header.js",
                                      lineNumber: 67,
                                      columnNumber: 40
                                    }, this)
                                  }, void 0, false, {
                                    fileName: "app/header/header.js",
                                    lineNumber: 67,
                                    columnNumber: 23
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
                                    fileName: "app/header/header.js",
                                    lineNumber: 70,
                                    columnNumber: 23
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                    className: "",
                                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                                      style: ({ isActive }) => isActive ? activeStyle : void 0,
                                      className: "whitespace-no-wrap block  py-2 px-4 hover:text-red-500 text-xs",
                                      to: "/service/custom-web-development/",
                                      children: "CUSTOM WEB DEVELOPMENT"
                                    }, void 0, false, {
                                      fileName: "app/header/header.js",
                                      lineNumber: 71,
                                      columnNumber: 40
                                    }, this)
                                  }, void 0, false, {
                                    fileName: "app/header/header.js",
                                    lineNumber: 71,
                                    columnNumber: 23
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
                                    fileName: "app/header/header.js",
                                    lineNumber: 75,
                                    columnNumber: 23
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                    className: "",
                                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                                      style: ({ isActive }) => isActive ? activeStyle : void 0,
                                      className: "whitespace-no-wrap block  py-2 px-4 hover:text-red-500 text-xs",
                                      to: "/service/desktop-app-development/",
                                      children: "DESKTOP APP DEVELOPMENT"
                                    }, void 0, false, {
                                      fileName: "app/header/header.js",
                                      lineNumber: 76,
                                      columnNumber: 40
                                    }, this)
                                  }, void 0, false, {
                                    fileName: "app/header/header.js",
                                    lineNumber: 76,
                                    columnNumber: 23
                                  }, this)
                                ]
                              }, void 0, true, {
                                fileName: "app/header/header.js",
                                lineNumber: 60,
                                columnNumber: 21
                              }, this)
                            ]
                          }, void 0, true, {
                            fileName: "app/header/header.js",
                            lineNumber: 58,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                            style: ({ isActive }) => isActive ? activeStyle : void 0,
                            to: "/about",
                            onClick: scrollToTop,
                            className: active && active == "/about/" ? "text-red-600 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium" : "text-black hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium",
                            children: "AboutUs"
                          }, void 0, false, {
                            fileName: "app/header/header.js",
                            lineNumber: 81,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                            style: ({ isActive }) => isActive ? activeStyle : void 0,
                            to: "/portfolio",
                            onClick: scrollToTop,
                            className: "text-black hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium",
                            children: "Portfolio"
                          }, void 0, false, {
                            fileName: "app/header/header.js",
                            lineNumber: 92,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                            style: ({ isActive }) => isActive ? activeStyle : void 0,
                            to: "/contact",
                            onClick: scrollToTop,
                            className: "text-black hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium",
                            children: "Contact"
                          }, void 0, false, {
                            fileName: "app/header/header.js",
                            lineNumber: 103,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                            className: "text-white hover:bg-gray-700  bg-black  rounded-md text-sm font-medium",
                            onClick: scrollToTop,
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                              style: ({ isActive }) => isActive ? activeStyle : void 0,
                              className: "w-full inline-block px-5 py-4",
                              to: "/request-a-quote",
                              children: "Request a Quote"
                            }, void 0, false, {
                              fileName: "app/header/header.js",
                              lineNumber: 117,
                              columnNumber: 23
                            }, this)
                          }, void 0, false, {
                            fileName: "app/header/header.js",
                            lineNumber: 114,
                            columnNumber: 21
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/header/header.js",
                        lineNumber: 46,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/header/header.js",
                      lineNumber: 45,
                      columnNumber: 17
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/header/header.js",
                  lineNumber: 37,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "-mr-2 flex lg:hidden",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    onClick: () => setIsOpen(!isOpen),
                    type: "button",
                    className: "bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                    "aria-controls": "mobile-menu",
                    "aria-expanded": "false",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "sr-only",
                        children: "Open main menu"
                      }, void 0, false, {
                        fileName: "app/header/header.js",
                        lineNumber: 134,
                        columnNumber: 19
                      }, this),
                      !isOpen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                        className: "block h-6 w-6",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M4 6h16M4 12h16M4 18h16"
                        }, void 0, false, {
                          fileName: "app/header/header.js",
                          lineNumber: 144,
                          columnNumber: 23
                        }, this)
                      }, void 0, false, {
                        fileName: "app/header/header.js",
                        lineNumber: 136,
                        columnNumber: 21
                      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
                        className: "block h-6 w-6",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M6 18L18 6M6 6l12 12"
                        }, void 0, false, {
                          fileName: "app/header/header.js",
                          lineNumber: 160,
                          columnNumber: 23
                        }, this)
                      }, void 0, false, {
                        fileName: "app/header/header.js",
                        lineNumber: 152,
                        columnNumber: 21
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/header/header.js",
                    lineNumber: 127,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/header/header.js",
                  lineNumber: 126,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/header/header.js",
              lineNumber: 36,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/header/header.js",
            lineNumber: 35,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(We, {
            show: isOpen,
            enter: "transition ease-out duration-100 transform",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "transition ease-in duration-75 transform",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: (ref) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "lg:hidden z-40 h-screen max-w-full",
              id: "mobile-menu",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                ref,
                className: "px-2 pt-2 pb-3 text-center space-y-1 sm:px-3 ",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                    style: ({ isActive }) => isActive ? activeStyle : void 0,
                    to: "/",
                    className: "hover:bg-black-700 text-black  block px-3 py-2 rounded-md text-sm font-medium hover:text-red-500",
                    onClick: () => {
                      setIsOpen(!isOpen);
                    },
                    children: "Home"
                  }, void 0, false, {
                    fileName: "app/header/header.js",
                    lineNumber: 185,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
                    fileName: "app/header/header.js",
                    lineNumber: 194,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    clLinkssName: "  ",
                    ...getToggleProps(),
                    children: isExpanded ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex justify-between",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              className: "w-full p-2 ml-10 text-sm font-medium cursor-default",
                              children: "Services"
                            }, void 0, false, {
                              fileName: "app/header/header.js",
                              lineNumber: 199,
                              columnNumber: 21
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                              className: "fa fa-minus text-red-500 p-3"
                            }, void 0, false, {
                              fileName: "app/header/header.js",
                              lineNumber: 202,
                              columnNumber: 21
                            }, this)
                          ]
                        }, void 0, true, {
                          fileName: "app/header/header.js",
                          lineNumber: 198,
                          columnNumber: 21
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
                          fileName: "app/header/header.js",
                          lineNumber: 204,
                          columnNumber: 19
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/header/header.js",
                      lineNumber: 197,
                      columnNumber: 21
                    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "flex justify-between",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              className: "w-full p-2 ml-10 text-sm font-medium cursor-default",
                              children: "Services"
                            }, void 0, false, {
                              fileName: "app/header/header.js",
                              lineNumber: 209,
                              columnNumber: 27
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                              className: "fa fa-plus p-3"
                            }, void 0, false, {
                              fileName: "app/header/header.js",
                              lineNumber: 212,
                              columnNumber: 27
                            }, this)
                          ]
                        }, void 0, true, {
                          fileName: "app/header/header.js",
                          lineNumber: 208,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
                          fileName: "app/header/header.js",
                          lineNumber: 215,
                          columnNumber: 25
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/header/header.js",
                      lineNumber: 207,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: "app/header/header.js",
                    lineNumber: 195,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    ...getCollapseProps(),
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      class: " rounded",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          className: "list-none bg-gray-200 p-3 mb-2",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                            style: ({ isActive }) => isActive ? activeStyle : void 0,
                            className: "whitespace-no-wrap block rounded-t hover:text-red-500 py-2 px-4 text-xs",
                            to: "/service/iphone-app-development/",
                            onClick: () => {
                              setIsOpen(!isOpen);
                            },
                            children: "IPHONE APP DEVELOPMENT"
                          }, void 0, false, {
                            fileName: "app/header/header.js",
                            lineNumber: 222,
                            columnNumber: 71
                          }, this)
                        }, void 0, false, {
                          fileName: "app/header/header.js",
                          lineNumber: 222,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
                          fileName: "app/header/header.js",
                          lineNumber: 226,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          className: "list-none bg-gray-200 p-3 mb-2",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                            style: ({ isActive }) => isActive ? activeStyle : void 0,
                            className: "whitespace-no-wrap block hover:text-red-500 py-2 px-4 text-xs ",
                            to: "/service/android-app-development/",
                            onClick: () => {
                              setIsOpen(!isOpen);
                            },
                            children: "ANDROID APP DEVELOPMENT"
                          }, void 0, false, {
                            fileName: "app/header/header.js",
                            lineNumber: 227,
                            columnNumber: 70
                          }, this)
                        }, void 0, false, {
                          fileName: "app/header/header.js",
                          lineNumber: 227,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
                          fileName: "app/header/header.js",
                          lineNumber: 230,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          className: "list-none bg-gray-200 p-3 mb-2",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                            style: ({ isActive }) => isActive ? activeStyle : void 0,
                            className: "whitespace-no-wrap block hover:text-red-500 py-2 px-4 text-xs",
                            to: "/service/custom-web-development/",
                            onClick: () => {
                              setIsOpen(!isOpen);
                            },
                            children: "CUSTOM WEB DEVELOPMENT"
                          }, void 0, false, {
                            fileName: "app/header/header.js",
                            lineNumber: 231,
                            columnNumber: 70
                          }, this)
                        }, void 0, false, {
                          fileName: "app/header/header.js",
                          lineNumber: 231,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
                          fileName: "app/header/header.js",
                          lineNumber: 234,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                          className: "list-none  bg-gray-200 p-3 mb-2",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                            style: ({ isActive }) => isActive ? activeStyle : void 0,
                            className: "whitespace-no-wrap block hover:text-red-500 py-2 px-4 text-xs",
                            to: "/service/desktop-app-development/",
                            onClick: () => {
                              setIsOpen(!isOpen);
                            },
                            children: "DESKTOP APP DEVELOPMENT"
                          }, void 0, false, {
                            fileName: "app/header/header.js",
                            lineNumber: 235,
                            columnNumber: 71
                          }, this)
                        }, void 0, false, {
                          fileName: "app/header/header.js",
                          lineNumber: 235,
                          columnNumber: 23
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
                          fileName: "app/header/header.js",
                          lineNumber: 238,
                          columnNumber: 23
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/header/header.js",
                      lineNumber: 221,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: "app/header/header.js",
                    lineNumber: 220,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                    style: ({ isActive }) => isActive ? activeStyle : void 0,
                    to: "/about",
                    className: "hover:bg-black-700 text-black  block px-3 py-2 rounded-md text-sm font-medium hover:text-red-500",
                    onClick: () => {
                      setIsOpen(!isOpen);
                    },
                    children: "AboutUs"
                  }, void 0, false, {
                    fileName: "app/header/header.js",
                    lineNumber: 243,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
                    fileName: "app/header/header.js",
                    lineNumber: 252,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                    style: ({ isActive }) => isActive ? activeStyle : void 0,
                    to: "/portfolio",
                    className: "hover:bg-black-700 text-black  block px-3 py-2 rounded-md text-sm font-medium hover:text-red-500",
                    onClick: () => {
                      setIsOpen(!isOpen);
                    },
                    children: "Portfolio"
                  }, void 0, false, {
                    fileName: "app/header/header.js",
                    lineNumber: 253,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
                    fileName: "app/header/header.js",
                    lineNumber: 264,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                    style: ({ isActive }) => isActive ? activeStyle : void 0,
                    to: "/contact",
                    className: "hover:bg-black-700 text-black  block px-3 py-2 rounded-md text-sm font-medium hover:text-red-500",
                    onClick: () => {
                      setIsOpen(!isOpen);
                    },
                    children: "Contact"
                  }, void 0, false, {
                    fileName: "app/header/header.js",
                    lineNumber: 265,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
                    fileName: "app/header/header.js",
                    lineNumber: 276,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                    className: active && active == "/request-a-quote/" ? "text-red-500 hover:bg-gray-700 bg-black  w-full rounded-md text-sm font-medium " : "text-white hover:bg-gray-700  bg-black w-full rounded-md text-sm font-medium",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, {
                      style: ({ isActive }) => isActive ? activeStyle : void 0,
                      className: "whitespace-no-wrap block hover:text-red-500 py-2 px-4 text-xs",
                      to: "/request-a-quote",
                      children: "Request a Quote"
                    }, void 0, false, {
                      fileName: "app/header/header.js",
                      lineNumber: 280,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: "app/header/header.js",
                    lineNumber: 277,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("hr", {}, void 0, false, {
                    fileName: "app/header/header.js",
                    lineNumber: 285,
                    columnNumber: 19
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/header/header.js",
                lineNumber: 184,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: "app/header/header.js",
              lineNumber: 183,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: "app/header/header.js",
            lineNumber: 173,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/header/header.js",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/header/header.js",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/header/header.js",
    lineNumber: 31,
    columnNumber: 7
  }, this);
};
var header_default = Header;

// app/header/navbar.jsx
var import_react17 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Navbar = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "bg-red-700 hidden md:block flex-1 p-1",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "w-full flex text-sm ",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "py-1 text-white w-5/6 flex pl-16 items-center",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
              className: "mk-svg-icon h-4 w-4 mr-3 fill-[#fff]",
              "data-name": "mk-moon-phone-3",
              "data-cacheid": "icon-5c499b606d7ee",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 512 512",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                d: "M457.153 103.648c53.267 30.284 54.847 62.709 54.849 85.349v3.397c0 5.182-4.469 9.418-9.928 9.418h-120.146c-5.459 0-9.928-4.236-9.928-9.418v-11.453c0-28.605-27.355-33.175-42.449-35.605-15.096-2.426-52.617-4.777-73.48-4.777h-.14300000000000002c-20.862 0-58.387 2.35-73.48 4.777-15.093 2.427-42.449 6.998-42.449 35.605v11.453c0 5.182-4.469 9.418-9.926 9.418h-120.146c-5.457 0-9.926-4.236-9.926-9.418v-3.397c0-22.64 1.58-55.065 54.847-85.349 63.35-36.01 153.929-39.648 201.08-39.648l.077.078.066-.078c47.152 0 137.732 3.634 201.082 39.648zm-201.152 88.352c-28.374 0-87.443 2.126-117.456 38.519-30.022 36.383-105.09 217.481-38.147 217.481h311.201c66.945 0-8.125-181.098-38.137-217.481-30.018-36.393-89.1-38.519-117.461-38.519zm-.001 192c-35.346 0-64-28.653-64-64s28.654-64 64-64c35.347 0 64 28.653 64 64s-28.653 64-64 64z"
              }, void 0, false, {
                fileName: "app/header/navbar.jsx",
                lineNumber: 7,
                columnNumber: 185
              }, this)
            }, void 0, false, {
              fileName: "app/header/navbar.jsx",
              lineNumber: 7,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: "tel:+919904076120",
              children: "+91 9904076120"
            }, void 0, false, {
              fileName: "app/header/navbar.jsx",
              lineNumber: 8,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
              className: "mk-svg-icon h-4 w-4  ml-5 mr-2 fill-[#fff] ",
              "data-name": "mk-moon-envelop",
              "data-cacheid": "icon-5c499b6092230",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 512 512",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                d: "M480 64h-448c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h448c17.6 0 32-14.4 32-32v-320c0-17.6-14.4-32-32-32zm-32 64v23l-192 113.143-192-113.143v-23h384zm-384 256v-177.286l192 113.143 192-113.143v177.286h-384z"
              }, void 0, false, {
                fileName: "app/header/navbar.jsx",
                lineNumber: 9,
                columnNumber: 190
              }, this)
            }, void 0, false, {
              fileName: "app/header/navbar.jsx",
              lineNumber: 9,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: "mailto:hr@weenggs.com",
              children: "hr@weenggs.com"
            }, void 0, false, {
              fileName: "app/header/navbar.jsx",
              lineNumber: 10,
              columnNumber: 9
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/header/navbar.jsx",
          lineNumber: 6,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "py-1 text-[#fff] w-1/5 lg:px-5 flex justify-center lg:justify-center items-center",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
              className: "mx-2 flex hover:opacity-70",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                href: "https://www.facebook.com/Weenggs",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                  className: "fa fa-facebook-f"
                }, void 0, false, {
                  fileName: "app/header/navbar.jsx",
                  lineNumber: 16,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: "app/header/navbar.jsx",
                lineNumber: 15,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/header/navbar.jsx",
              lineNumber: 14,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
              className: "mx-2 flex hover:opacity-75",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                href: "skype:weenggs?chat",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                  className: "fa fa-skype"
                }, void 0, false, {
                  fileName: "app/header/navbar.jsx",
                  lineNumber: 21,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/header/navbar.jsx",
                lineNumber: 20,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/header/navbar.jsx",
              lineNumber: 19,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
              className: "mx-2 flex hover:opacity-75",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                href: "https://www.linkedin.com/company/weenggs-technology",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                  className: "fa fa-linkedin-square"
                }, void 0, false, {
                  fileName: "app/header/navbar.jsx",
                  lineNumber: 26,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/header/navbar.jsx",
                lineNumber: 25,
                columnNumber: 9
              }, this)
            }, void 0, false, {
              fileName: "app/header/navbar.jsx",
              lineNumber: 24,
              columnNumber: 9
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/header/navbar.jsx",
          lineNumber: 13,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/header/navbar.jsx",
      lineNumber: 5,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/header/navbar.jsx",
    lineNumber: 4,
    columnNumber: 9
  }, this);
};
var navbar_default = Navbar;

// app/chatbot/ChatBoot.jsx
var import_react18 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ChatBoot = () => {
  const [state, setState] = (0, import_react18.useState)(true);
  const handleChange = () => {
    setState(!state);
  };
  const [name, setName] = (0, import_react18.useState)("");
  const [email, setEmail] = (0, import_react18.useState)("");
  const [contact, setContact] = (0, import_react18.useState)("");
  const [massage, setMassage] = (0, import_react18.useState)("");
  const [loader, setLoader] = (0, import_react18.useState)(false);
  var error;
  const handleSubmit = async (e4) => {
    e4.preventDefault();
    error = false;
    setLoader(true);
    if (isBlank(name.trim())) {
      error = "true";
      document.getElementById("name-error").innerHTML = "Name should not be empty";
    } else if (isLength(name)) {
      error = true;
      document.getElementById("name-error").innerHTML = "Name should be 1 to 15 char";
    } else {
      document.getElementById("name-error").innerHTML = "";
    }
    if (isBlank(email.trim())) {
      error = true;
      document.getElementById("email-error").innerHTML = "Email should not be blank";
    } else if (validateEmail(email)) {
      error = true;
      document.getElementById("email-error").innerHTML = "Please enter valid email";
      console.log(email);
    } else {
      document.getElementById("email-error").innerHTML = "";
    }
    if (isBlank(massage.trim())) {
      error = "true";
      document.getElementById("massage-error").innerHTML = "massage shouldn't empty";
    } else if (isMassageLength(massage)) {
      error = "true";
      document.getElementById("massage-error").innerHTML = "massage should be min-5 to 49 char";
    } else {
      document.getElementById("massage-error").innerHTML = "";
    }
    if (isBlank(contact.trim())) {
      error = true;
      document.getElementById("contact-error").innerHTML = "Contact no should not be empty";
    } else if (isValid(contact)) {
      error = true;
      document.getElementById("contact-error").innerHTML = "Enter valid mobile no";
    } else if (isMobile(contact)) {
      error = true;
      document.getElementById("contact-error").innerHTML = "Contact range should be 10 digit";
    } else {
      document.getElementById("contact-error").innerHTML = "";
    }
    if (error) {
      setLoader(false);
    } else {
      setLoader(true);
      const data = {
        name,
        contact,
        email,
        massage
      };
      console.log(data);
      setTimeout(() => {
        setLoader(false);
      }, 1e3);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: state ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "bg-[#b92b2f] fixed block right-0 top-[30%] hover:cursor-pointer h-[40%] max-w-[9%] rounded-r-lg scale-[-1] z-50",
      onClick: handleChange,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
        className: " text-white font-solid  mt-4 md:m-2 ",
        style: { "writingMode": "vertical-rl", display: "table-caption" },
        children: " send massage"
      }, void 0, false, {
        fileName: "app/chatbot/ChatBoot.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/chatbot/ChatBoot.jsx",
      lineNumber: 93,
      columnNumber: 7
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "z-50 h-[500px]  max-w-[320px] bottom-0 right-0 fixed inline-grid",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "bg-[#b92b2f] ",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "w-full grid justify-end",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                onClick: handleChange,
                className: "m-2 flex w-fit justify-end p-2  hover:text-white opacity-0.89  hover:bg-black-500/100 ",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                  className: "fa fa-close"
                }, void 0, false, {
                  fileName: "app/chatbot/ChatBoot.jsx",
                  lineNumber: 102,
                  columnNumber: 14
                }, this)
              }, void 0, false, {
                fileName: "app/chatbot/ChatBoot.jsx",
                lineNumber: 101,
                columnNumber: 10
              }, this)
            }, void 0, false, {
              fileName: "app/chatbot/ChatBoot.jsx",
              lineNumber: 100,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "p-5 text-sm  text-white ",
              children: "Please fill out the form below and we will get back to you as soon as possible."
            }, void 0, false, {
              fileName: "app/chatbot/ChatBoot.jsx",
              lineNumber: 105,
              columnNumber: 9
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/chatbot/ChatBoot.jsx",
          lineNumber: 99,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: " overflow-auto bg-white p-5",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
            className: "w-full max-w-sm p-5 bg-[#fafafa] border-l-4 border-red-500 rounded",
            onSubmit: handleSubmit,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "relative z-0 mb-6 w-full group text-xs ",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "text",
                    class: "block py-2.5 px-0 w-full outline-1 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
                    placeholder: " ",
                    name,
                    onChange: (e4) => {
                      setName(e4.target.value);
                    }
                  }, void 0, false, {
                    fileName: "app/chatbot/ChatBoot.jsx",
                    lineNumber: 113,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    for: "name",
                    class: "absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                    children: "* Name"
                  }, void 0, false, {
                    fileName: "app/chatbot/ChatBoot.jsx",
                    lineNumber: 114,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    style: { color: "red" },
                    id: "name-error",
                    class: "error"
                  }, void 0, false, {
                    fileName: "app/chatbot/ChatBoot.jsx",
                    lineNumber: 115,
                    columnNumber: 21
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/chatbot/ChatBoot.jsx",
                lineNumber: 112,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "relative z-0 mb-6 w-full group text-xs",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "number",
                    onInput: (e4) => {
                      if (e4.target.value.length > e4.target.maxLength)
                        e4.target.value = e4.target.value.slice(0, e4.target.maxLength);
                    },
                    maxLength: "12",
                    onWheel: (e4) => e4.target.blur(),
                    className: "block py-2.5 px-0 w-full outline-1 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
                    placeholder: " ",
                    name: contact,
                    onChange: (e4) => {
                      setContact(e4.target.value);
                    }
                  }, void 0, false, {
                    fileName: "app/chatbot/ChatBoot.jsx",
                    lineNumber: 119,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    for: "name",
                    className: "absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                    children: " Phone"
                  }, void 0, false, {
                    fileName: "app/chatbot/ChatBoot.jsx",
                    lineNumber: 126,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    style: { color: "red" },
                    id: "contact-error",
                    class: "error "
                  }, void 0, false, {
                    fileName: "app/chatbot/ChatBoot.jsx",
                    lineNumber: 127,
                    columnNumber: 21
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/chatbot/ChatBoot.jsx",
                lineNumber: 118,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "relative z-0 mb-6 w-full group text-xs",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                    type: "Email",
                    className: "block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
                    placeholder: " ",
                    name: email,
                    onChange: (e4) => {
                      setEmail(e4.target.value);
                    }
                  }, void 0, false, {
                    fileName: "app/chatbot/ChatBoot.jsx",
                    lineNumber: 131,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    for: "email",
                    className: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                    children: "* Email"
                  }, void 0, false, {
                    fileName: "app/chatbot/ChatBoot.jsx",
                    lineNumber: 132,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    style: { color: "red" },
                    id: "email-error",
                    className: "error"
                  }, void 0, false, {
                    fileName: "app/chatbot/ChatBoot.jsx",
                    lineNumber: 133,
                    columnNumber: 21
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/chatbot/ChatBoot.jsx",
                lineNumber: 130,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "relative z-0 mb-6 w-full group text-xs",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                    type: "text",
                    className: "block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
                    placeholder: " ",
                    name: massage,
                    onChange: (e4) => {
                      setMassage(e4.target.value);
                    }
                  }, void 0, false, {
                    fileName: "app/chatbot/ChatBoot.jsx",
                    lineNumber: 137,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                    for: "subject",
                    className: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                    children: "* Massage"
                  }, void 0, false, {
                    fileName: "app/chatbot/ChatBoot.jsx",
                    lineNumber: 138,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    style: { color: "red" },
                    id: "massage-error",
                    className: "error"
                  }, void 0, false, {
                    fileName: "app/chatbot/ChatBoot.jsx",
                    lineNumber: 139,
                    columnNumber: 21
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/chatbot/ChatBoot.jsx",
                lineNumber: 136,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "md:flex md:items-center",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                  type: "submit",
                  className: "inline-block px-6 py-2.5 w-full bg-red-600 text-white font-medium text-sm  uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out",
                  children: [
                    " ",
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                      className: "fa fa-paper-plane rotate-45 m-2 "
                    }, void 0, false, {
                      fileName: "app/chatbot/ChatBoot.jsx",
                      lineNumber: 144,
                      columnNumber: 324
                    }, this),
                    " Submit"
                  ]
                }, void 0, true, {
                  fileName: "app/chatbot/ChatBoot.jsx",
                  lineNumber: 144,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: "app/chatbot/ChatBoot.jsx",
                lineNumber: 142,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/chatbot/ChatBoot.jsx",
            lineNumber: 110,
            columnNumber: 10
          }, this)
        }, void 0, false, {
          fileName: "app/chatbot/ChatBoot.jsx",
          lineNumber: 109,
          columnNumber: 10
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "text-center bg-[#e5e5e5] z-50",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
            className: " hover:bg-white text-xs w-full m-auto  my-1 rounded-full justify-center ",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
              href: "https://www.tawk.to/?utm_source=tawk-messenger&utm_medium=link&utm_campaign=referral&utm_term=5858baa75191003fde7bc865",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                  src: "https://embed.tawk.to/_s/v4/assets/images/Tawky_16x16.svg",
                  className: "w-5 m-2 inline"
                }, void 0, false, {
                  fileName: "app/chatbot/ChatBoot.jsx",
                  lineNumber: 153,
                  columnNumber: 13
                }, this),
                "add free live chat to your site"
              ]
            }, void 0, true, {
              fileName: "app/chatbot/ChatBoot.jsx",
              lineNumber: 151,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: "app/chatbot/ChatBoot.jsx",
            lineNumber: 150,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/chatbot/ChatBoot.jsx",
          lineNumber: 149,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/chatbot/ChatBoot.jsx",
      lineNumber: 98,
      columnNumber: 6
    }, this)
  }, void 0, false, {
    fileName: "app/chatbot/ChatBoot.jsx",
    lineNumber: 90,
    columnNumber: 6
  }, this);
};
var ChatBoot_default = ChatBoot;

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-UGABCAWA.css";

// app/root.jsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 22,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 23,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
            href: "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
            rel: "stylesheet"
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 25,
            columnNumber: 10
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
            src: "https://cdn.tailwindcss.com",
            defer: true
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
            href: "https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700;900&display=swap",
            rel: "stylesheet"
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 27,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
            href: "https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700;900&display=swap",
            rel: "stylesheet"
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 31,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("link", {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          }, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 34,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 21,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(navbar_default, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 39,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(header_default, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 40,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChatBoot_default, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 41,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 42,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 43,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 44,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 45,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(footer_default, {}, void 0, false, {
            fileName: "app/root.jsx",
            lineNumber: 46,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.jsx",
        lineNumber: 37,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-EEKXMNQD.js.map
