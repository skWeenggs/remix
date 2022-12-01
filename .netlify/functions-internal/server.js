var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react9 = require("@remix-run/react");

// app/footer/footer.jsx
var import_react2 = require("react");

// app/assets/weenggs.png
var weenggs_default = "/build/_assets/weenggs-EN6VADC5.png";

// app/footer/footer.jsx
var import_react3 = require("@remix-run/react"), import_jsx_runtime = require("react/jsx-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
  class: "bg-[#444] h:full lg:text-left",
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      class: "container m-auto p-10 ",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        class: "grid lg:grid-cols-3  lg:max-w-[1140px] m-auto ",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            class: " lg:max-w-[350px]",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.NavLink, {
                to: "/",
                id: "scrollToTop",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                  class: "mb-6 custom-logo bg-transparent",
                  width: "200",
                  height: "50",
                  src: weenggs_default,
                  alt: "Weenggs Technology"
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                class: "list-none mb-0 w-[270px]",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    class: "text-white mb-5 text-base  letter-spacing: 0.025em",
                    children: "We craft some artistic yet powerful iOS & Android applications for you."
                  })
                })
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            class: " lg:max-w-[350px]",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                class: "uppercase text-base font-bold text-[16px] mb-2.5 text-white",
                children: "CONTACT US"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                class: "list-none text-base mb-0",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    class: "flex text-white",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                        class: "m-1 flex",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                          class: "fa fa-skype"
                        })
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Link, {
                        to: "#",
                        class: "ml-3 mb-4",
                        children: "weenggs"
                      })
                    ]
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    class: "flex text-white",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                        class: "m-1 flex",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                          class: "fa fa-envelope"
                        })
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Link, {
                        to: "mailto:info@weenggs.com",
                        class: "ml-3 mb-4",
                        children: "hr@weenggs.com"
                      })
                    ]
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    class: "flex text-white",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                        class: "m-1 flex",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                          class: "fa fa-phone"
                        })
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Link, {
                        to: "tel:+919428616132",
                        class: "ml-4 mb-4",
                        children: "91 9428616132"
                      })
                    ]
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    class: "flex text-white",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                        class: "m-1 flex",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                          class: "fa fa-location-arrow"
                        })
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react3.Link, {
                        to: "/contact",
                        class: "ml-4 mb-4",
                        children: [
                          "221 Avalon, Katargam,",
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                          "Surat \u2013 395004,",
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                          "GJ, India"
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            class: " lg:max-w-[350px]",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                class: "uppercase font-bold mb-2.5 text-[16px] text-base text-white",
                children: "NAVIGATE"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                class: "list-none text-base text-white",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                    class: "mb-4 lg:w-[300px] ",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.NavLink, {
                      class: "w-full inline-block",
                      to: "/",
                      children: "Home"
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                    class: "mb-4",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.NavLink, {
                      class: "w-full inline-block",
                      to: "/about",
                      id: "scrollToTop",
                      children: "About us"
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                    class: "mb-4",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.NavLink, {
                      class: "w-full inline-block",
                      to: "/portfolio",
                      id: "scrollToTop",
                      children: "Portfolio"
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                    class: "mb-4",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.NavLink, {
                      class: "w-full inline-block",
                      to: "/careers",
                      id: "scrollToTop",
                      children: "Carrers"
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                    class: "mb-4",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.NavLink, {
                      class: "w-full inline-block",
                      to: "/contact",
                      id: "scrollToTop",
                      children: "Contact"
                    })
                  })
                ]
              })
            ]
          })
        ]
      })
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      class: "text-white bg-[#666]  text-center p-2.5 text-[13px]",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        class: "max-w-[1140px] m-auto",
        children: [
          "\xA9 Copyright ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Link, {
            to: "/",
            children: "weenggs.com"
          }),
          ". All Right Reserved.",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.Link, {
            class: "",
            to: "https://tailwind-elements.com/"
          })
        ]
      })
    })
  ]
}), footer_default = Footer;

// app/header/header.js
var import_react4 = require("react"), import_react5 = require("@headlessui/react"), import_react_collapsed = __toESM(require("react-collapsed")), import_react6 = require("@remix-run/react"), import_jsx_runtime = require("react/jsx-runtime"), Header = () => {
  let activeStyle = {
    textDecoration: "underline",
    color: "red"
  }, [isOpen, setIsOpen] = (0, import_react4.useState)(!1), { getCollapseProps, getToggleProps, isExpanded } = (0, import_react_collapsed.default)(), [active, setActive] = (0, import_react4.useState)("");
  (0, import_react4.useEffect)(() => {
    console.log(location.pathname), localStorage.setItem("path", location.pathname), setActive(localStorage.getItem("path"));
  }, []);
  let scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: " sticky top-0 bg-white drop-shadow shadow-blue-600  z-50",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
        className: " bg-white-800 ",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: " mx-auto md:py-5 py-0 px-0 lg:px-10 md:px-5 w-auto z-40",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex px-5  md:pl-5 pl:5 items-center justify-between md:h-13 py-4 md:p-0",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex items-center w-full  ",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "flex-shrink-0 w-1/5 ",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.Link, {
                          to: "/",
                          onClick: scrollToTop,
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                            width: "200",
                            height: "50",
                            src: "https://www.weenggs.com/wp-content/uploads/2019/01/WeEnggWeb-1.png",
                            className: "custom-logo",
                            alt: "Weenggs Technology"
                          })
                        })
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "hidden lg:block w-4/5 m-auto lg:px-5",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "justify-end flex items-baseline space-x-2 ",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.NavLink, {
                            to: "/",
                            onClick: scrollToTop,
                            style: ({ isActive }) => isActive ? activeStyle : void 0,
                            className: "text-black hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium",
                            children: "Home"
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                            className: "group relative inline-block",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                                className: "inline-flex items-center text-black-300  px-3 py-2 rounded-md text-sm font-medium cursor-default",
                                children: "Services"
                              }),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                                className: "absolute hidden pt-1 bg-white text-gray-700 group-hover:block w-max",
                                style: { border: "1px gray double" },
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                                    className: "",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.NavLink, {
                                      style: ({ isActive }) => isActive ? activeStyle : void 0,
                                      className: "whitespace-no-wrap block rounded-t  py-2 px-4 text-xs hover:text-red-500 ",
                                      to: "/service/iphone-app-development/",
                                      children: "IPHONE APP DEVELOPMENT"
                                    })
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {}),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                                    className: "",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.NavLink, {
                                      style: ({ isActive }) => isActive ? activeStyle : void 0,
                                      className: "whitespace-no-wrap block  py-2 px-4 hover:text-red-500 text-xs",
                                      to: "/service/android-app-development/",
                                      children: "ANDROID APP DEVELOPMENT"
                                    })
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {}),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                                    className: "",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.NavLink, {
                                      style: ({ isActive }) => isActive ? activeStyle : void 0,
                                      className: "whitespace-no-wrap block  py-2 px-4 hover:text-red-500 text-xs",
                                      to: "/service/custom-web-development/",
                                      children: "CUSTOM WEB DEVELOPMENT"
                                    })
                                  }),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {}),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                                    className: "",
                                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.NavLink, {
                                      style: ({ isActive }) => isActive ? activeStyle : void 0,
                                      className: "whitespace-no-wrap block  py-2 px-4 hover:text-red-500 text-xs",
                                      to: "/service/desktop-app-development/",
                                      children: "DESKTOP APP DEVELOPMENT"
                                    })
                                  })
                                ]
                              })
                            ]
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.NavLink, {
                            style: ({ isActive }) => isActive ? activeStyle : void 0,
                            to: "/about",
                            onClick: scrollToTop,
                            className: active && active == "/about/" ? "text-red-600 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium" : "text-black hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium",
                            children: "AboutUs"
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.NavLink, {
                            style: ({ isActive }) => isActive ? activeStyle : void 0,
                            to: "/portfolio",
                            onClick: scrollToTop,
                            className: "text-black hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium",
                            children: "Portfolio"
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.NavLink, {
                            style: ({ isActive }) => isActive ? activeStyle : void 0,
                            to: "/contact",
                            onClick: scrollToTop,
                            className: "text-black hover:text-red-500 px-3 py-2 rounded-md text-sm font-medium",
                            children: "Contact"
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                            className: "text-white hover:bg-gray-700  bg-black  rounded-md text-sm font-medium",
                            onClick: scrollToTop,
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.NavLink, {
                              style: ({ isActive }) => isActive ? activeStyle : void 0,
                              className: "w-full inline-block px-5 py-4",
                              to: "/request-a-quote",
                              children: "Request a Quote"
                            })
                          })
                        ]
                      })
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "-mr-2 flex lg:hidden",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                    onClick: () => setIsOpen(!isOpen),
                    type: "button",
                    className: "bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white",
                    "aria-controls": "mobile-menu",
                    "aria-expanded": "false",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                        className: "sr-only",
                        children: "Open main menu"
                      }),
                      isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
                        className: "block h-6 w-6",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M6 18L18 6M6 6l12 12"
                        })
                      }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
                        className: "block h-6 w-6",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        "aria-hidden": "true",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: "2",
                          d: "M4 6h16M4 12h16M4 18h16"
                        })
                      })
                    ]
                  })
                })
              ]
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react5.Transition, {
            show: isOpen,
            enter: "transition ease-out duration-100 transform",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "transition ease-in duration-75 transform",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
            children: (ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "lg:hidden z-40 h-screen max-w-full",
              id: "mobile-menu",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                ref,
                className: "px-2 pt-2 pb-3 text-center space-y-1 sm:px-3 ",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.NavLink, {
                    style: ({ isActive }) => isActive ? activeStyle : void 0,
                    to: "/",
                    className: "hover:bg-black-700 text-black  block px-3 py-2 rounded-md text-sm font-medium hover:text-red-500",
                    onClick: () => {
                      setIsOpen(!isOpen);
                    },
                    children: "Home"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    clLinkssName: "  ",
                    ...getToggleProps(),
                    children: isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex justify-between",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "w-full p-2 ml-10 text-sm font-medium cursor-default",
                              children: "Services"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                              className: "fa fa-minus text-red-500 p-3"
                            })
                          ]
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {})
                      ]
                    }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex justify-between",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              className: "w-full p-2 ml-10 text-sm font-medium cursor-default",
                              children: "Services"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                              className: "fa fa-plus p-3"
                            })
                          ]
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {})
                      ]
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    ...getCollapseProps(),
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      class: " rounded",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                          className: "list-none bg-gray-200 p-3 mb-2",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.NavLink, {
                            style: ({ isActive }) => isActive ? activeStyle : void 0,
                            className: "whitespace-no-wrap block rounded-t hover:text-red-500 py-2 px-4 text-xs",
                            to: "/service/iphone-app-development/",
                            onClick: () => {
                              setIsOpen(!isOpen);
                            },
                            children: "IPHONE APP DEVELOPMENT"
                          })
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {}),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                          className: "list-none bg-gray-200 p-3 mb-2",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.NavLink, {
                            style: ({ isActive }) => isActive ? activeStyle : void 0,
                            className: "whitespace-no-wrap block hover:text-red-500 py-2 px-4 text-xs ",
                            to: "/service/android-app-development/",
                            onClick: () => {
                              setIsOpen(!isOpen);
                            },
                            children: "ANDROID APP DEVELOPMENT"
                          })
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {}),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                          className: "list-none bg-gray-200 p-3 mb-2",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.NavLink, {
                            style: ({ isActive }) => isActive ? activeStyle : void 0,
                            className: "whitespace-no-wrap block hover:text-red-500 py-2 px-4 text-xs",
                            to: "/service/custom-web-development/",
                            onClick: () => {
                              setIsOpen(!isOpen);
                            },
                            children: "CUSTOM WEB DEVELOPMENT"
                          })
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {}),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                          className: "list-none  bg-gray-200 p-3 mb-2",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.NavLink, {
                            style: ({ isActive }) => isActive ? activeStyle : void 0,
                            className: "whitespace-no-wrap block hover:text-red-500 py-2 px-4 text-xs",
                            to: "/service/desktop-app-development/",
                            onClick: () => {
                              setIsOpen(!isOpen);
                            },
                            children: "DESKTOP APP DEVELOPMENT"
                          })
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {})
                      ]
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.NavLink, {
                    style: ({ isActive }) => isActive ? activeStyle : void 0,
                    to: "/about",
                    className: "hover:bg-black-700 text-black  block px-3 py-2 rounded-md text-sm font-medium hover:text-red-500",
                    onClick: () => {
                      setIsOpen(!isOpen);
                    },
                    children: "AboutUs"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.NavLink, {
                    style: ({ isActive }) => isActive ? activeStyle : void 0,
                    to: "/portfolio",
                    className: "hover:bg-black-700 text-black  block px-3 py-2 rounded-md text-sm font-medium hover:text-red-500",
                    onClick: () => {
                      setIsOpen(!isOpen);
                    },
                    children: "Portfolio"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.NavLink, {
                    style: ({ isActive }) => isActive ? activeStyle : void 0,
                    to: "/contact",
                    className: "hover:bg-black-700 text-black  block px-3 py-2 rounded-md text-sm font-medium hover:text-red-500",
                    onClick: () => {
                      setIsOpen(!isOpen);
                    },
                    children: "Contact"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {}),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    className: active && active == "/request-a-quote/" ? "text-red-500 hover:bg-gray-700 bg-black  w-full rounded-md text-sm font-medium " : "text-white hover:bg-gray-700  bg-black w-full rounded-md text-sm font-medium",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react6.NavLink, {
                      style: ({ isActive }) => isActive ? activeStyle : void 0,
                      className: "whitespace-no-wrap block hover:text-red-500 py-2 px-4 text-xs",
                      to: "/request-a-quote",
                      children: "Request a Quote"
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {})
                ]
              })
            })
          })
        ]
      })
    })
  });
}, header_default = Header;

// app/header/navbar.jsx
var import_react7 = require("react"), import_jsx_runtime = require("react/jsx-runtime"), Navbar = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
  className: "bg-red-700 hidden md:block flex-1 p-1",
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "w-full flex text-sm ",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "py-1 text-white w-5/6 flex pl-16 items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
            className: "mk-svg-icon h-4 w-4 mr-3 fill-[#fff]",
            "data-name": "mk-moon-phone-3",
            "data-cacheid": "icon-5c499b606d7ee",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
              d: "M457.153 103.648c53.267 30.284 54.847 62.709 54.849 85.349v3.397c0 5.182-4.469 9.418-9.928 9.418h-120.146c-5.459 0-9.928-4.236-9.928-9.418v-11.453c0-28.605-27.355-33.175-42.449-35.605-15.096-2.426-52.617-4.777-73.48-4.777h-.14300000000000002c-20.862 0-58.387 2.35-73.48 4.777-15.093 2.427-42.449 6.998-42.449 35.605v11.453c0 5.182-4.469 9.418-9.926 9.418h-120.146c-5.457 0-9.926-4.236-9.926-9.418v-3.397c0-22.64 1.58-55.065 54.847-85.349 63.35-36.01 153.929-39.648 201.08-39.648l.077.078.066-.078c47.152 0 137.732 3.634 201.082 39.648zm-201.152 88.352c-28.374 0-87.443 2.126-117.456 38.519-30.022 36.383-105.09 217.481-38.147 217.481h311.201c66.945 0-8.125-181.098-38.137-217.481-30.018-36.393-89.1-38.519-117.461-38.519zm-.001 192c-35.346 0-64-28.653-64-64s28.654-64 64-64c35.347 0 64 28.653 64 64s-28.653 64-64 64z"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
            href: "tel:+919904076120",
            children: "+91 9904076120"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
            className: "mk-svg-icon h-4 w-4  ml-5 mr-2 fill-[#fff] ",
            "data-name": "mk-moon-envelop",
            "data-cacheid": "icon-5c499b6092230",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
              d: "M480 64h-448c-17.6 0-32 14.4-32 32v320c0 17.6 14.4 32 32 32h448c17.6 0 32-14.4 32-32v-320c0-17.6-14.4-32-32-32zm-32 64v23l-192 113.143-192-113.143v-23h384zm-384 256v-177.286l192 113.143 192-113.143v177.286h-384z"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
            href: "mailto:hr@weenggs.com",
            children: "hr@weenggs.com"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "py-1 text-[#fff] w-1/5 lg:px-5 flex justify-center lg:justify-center items-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
            className: "mx-2 flex hover:opacity-70",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
              href: "https://www.facebook.com/Weenggs",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                className: "fa fa-facebook-f"
              })
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
            className: "mx-2 flex hover:opacity-75",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
              href: "skype:weenggs?chat",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                className: "fa fa-skype"
              })
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
            className: "mx-2 flex hover:opacity-75",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
              href: "https://www.linkedin.com/company/weenggs-technology",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                className: "fa fa-linkedin-square"
              })
            })
          })
        ]
      })
    ]
  })
}), navbar_default = Navbar;

// app/chatbot/ChatBoot.jsx
var import_react8 = require("react");

// app/content/Checks.js
function isBlank(txt) {
  return txt.length <= 0;
}
function isLength(txt) {
  return txt.length <= 0 && txt.length >= 15;
}
function isMassageLength(txt) {
  return txt.length < 5 && txt.length > 0 ? !0 : txt.length > 5 && txt.length > 50;
}
function validateEmail(email) {
  return !email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}
function isMobile(contact) {
  return contact.length <= 12 && contact.length >= 10 ? !1 : (contact.length > 13, !0);
}
function isValid(contact) {
  console.log(contact);
}

// app/chatbot/ChatBoot.jsx
var import_jsx_runtime = require("react/jsx-runtime"), ChatBoot = () => {
  let [state, setState] = (0, import_react8.useState)(!0), handleChange = () => {
    setState(!state);
  }, [name, setName] = (0, import_react8.useState)(""), [email, setEmail] = (0, import_react8.useState)(""), [contact, setContact] = (0, import_react8.useState)(""), [massage, setMassage] = (0, import_react8.useState)(""), [loader6, setLoader] = (0, import_react8.useState)(!1);
  var error;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children: state ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: "bg-[#b92b2f] fixed block right-0 top-[30%] hover:cursor-pointer h-[40%] max-w-[9%] rounded-r-lg scale-[-1] z-50",
      onClick: handleChange,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        className: " text-white font-solid  mt-4 md:m-2 ",
        style: { writingMode: "vertical-rl", display: "table-caption" },
        children: " send massage"
      })
    }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      className: "z-50 h-[500px]  max-w-[320px] bottom-0 right-0 fixed inline-grid",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "bg-[#b92b2f] ",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "w-full grid justify-end",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                onClick: handleChange,
                className: "m-2 flex w-fit justify-end p-2  hover:text-white opacity-0.89  hover:bg-black-500/100 ",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                  class: "fa fa-close"
                })
              })
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "p-5 text-sm  text-white ",
              children: "Please fill out the form below and we will get back to you as soon as possible."
            })
          ]
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: " overflow-auto bg-white p-5",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
            class: "w-full max-w-sm p-5 bg-[#fafafa] border-l-4 border-red-500 rounded",
            onSubmit: async (e) => {
              e.preventDefault(), error = !1, setLoader(!0), isBlank(name.trim()) ? (error = "true", document.getElementById("name-error").innerHTML = "Name should not be empty") : isLength(name) ? (error = !0, document.getElementById("name-error").innerHTML = "Name should be 1 to 15 char") : document.getElementById("name-error").innerHTML = "", isBlank(email.trim()) ? (error = !0, document.getElementById("email-error").innerHTML = "Email should not be blank") : validateEmail(email) ? (error = !0, document.getElementById("email-error").innerHTML = "Please enter valid email", console.log(email)) : document.getElementById("email-error").innerHTML = "", isBlank(massage.trim()) ? (error = "true", document.getElementById("massage-error").innerHTML = "massage shouldn't empty") : isMassageLength(massage) ? (error = "true", document.getElementById("massage-error").innerHTML = "massage should be min-5 to 49 char") : document.getElementById("massage-error").innerHTML = "", isBlank(contact.trim()) ? (error = !0, document.getElementById("contact-error").innerHTML = "Contact no should not be empty") : isValid(contact) ? (error = !0, document.getElementById("contact-error").innerHTML = "Enter valid mobile no") : isMobile(contact) ? (error = !0, document.getElementById("contact-error").innerHTML = "Contact range should be 10 digit") : document.getElementById("contact-error").innerHTML = "", error ? setLoader(!1) : (setLoader(!0), console.log({
                name,
                contact,
                email,
                massage
              }), setTimeout(() => {
                setLoader(!1);
              }, 1e3));
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                class: "relative z-0 mb-6 w-full group text-xs ",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                    type: "text",
                    class: "block py-2.5 px-0 w-full outline-1 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
                    placeholder: " ",
                    name,
                    onChange: (e) => {
                      setName(e.target.value);
                    }
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                    for: "name",
                    class: "absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                    children: "* Name"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    style: { color: "red" },
                    id: "name-error",
                    class: "error"
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                class: "relative z-0 mb-6 w-full group text-xs",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                    type: "number",
                    onInput: (e) => {
                      e.target.value.length > e.target.maxLength && (e.target.value = e.target.value.slice(0, e.target.maxLength));
                    },
                    maxLength: "12",
                    onWheel: (e) => e.target.blur(),
                    class: "block py-2.5 px-0 w-full outline-1 text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
                    placeholder: " ",
                    name: contact,
                    onChange: (e) => {
                      setContact(e.target.value);
                    }
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                    for: "name",
                    class: "absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                    children: " Phone"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    style: { color: "red" },
                    id: "contact-error",
                    class: "error "
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                class: "relative z-0 mb-6 w-full group text-xs",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                    type: "Email",
                    class: "block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
                    placeholder: " ",
                    name: email,
                    onChange: (e) => {
                      setEmail(e.target.value);
                    }
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                    for: "email",
                    class: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                    children: "* Email"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    style: { color: "red" },
                    id: "email-error",
                    class: "error"
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                class: "relative z-0 mb-6 w-full group text-xs",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
                    type: "text",
                    class: "block py-2.5 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer",
                    placeholder: " ",
                    name: massage,
                    onChange: (e) => {
                      setMassage(e.target.value);
                    }
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                    for: "subject",
                    class: "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",
                    children: "* Massage"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    style: { color: "red" },
                    id: "massage-error",
                    class: "error"
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                class: "md:flex md:items-center",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
                  type: "submit",
                  class: "inline-block px-6 py-2.5 w-full bg-red-600 text-white font-medium text-sm  uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out",
                  children: [
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                      class: "fa fa-paper-plane rotate-45 m-2 "
                    }),
                    " Submit"
                  ]
                })
              })
            ]
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "text-center bg-[#e5e5e5] z-50",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
            class: " hover:bg-white text-xs w-full m-auto  my-1 rounded-full justify-center ",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
              href: "https://www.tawk.to/?utm_source=tawk-messenger&utm_medium=link&utm_campaign=referral&utm_term=5858baa75191003fde7bc865",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                  src: "https://embed.tawk.to/_s/v4/assets/images/Tawky_16x16.svg",
                  className: "w-5 m-2 inline"
                }),
                "add free live chat to your site"
              ]
            })
          })
        })
      ]
    })
  });
}, ChatBoot_default = ChatBoot;

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-RJOMXK7F.css";

// app/root.jsx
var import_jsx_runtime = require("react/jsx-runtime");
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react9.Meta, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react9.Links, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
            href: "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
            rel: "stylesheet"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
            src: "https://cdn.tailwindcss.com",
            defer: !0
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
            href: "https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700;900&display=swap",
            rel: "stylesheet"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
            crossOrigin: !0
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
            href: "https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700;900&display=swap",
            rel: "stylesheet"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("link", {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(navbar_default, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(header_default, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatBoot_default, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react9.Outlet, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react9.ScrollRestoration, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react9.Scripts, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react9.LiveReload, {}),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(footer_default, {})
        ]
      })
    ]
  });
}

// app/routes/service/android-app-development.jsx
var android_app_development_exports = {};
__export(android_app_development_exports, {
  default: () => Posts,
  loader: () => loader
});
var import_node = require("@remix-run/node"), import_react11 = require("@remix-run/react");

// app/routes/service/index.jsx
var service_exports = {};
__export(service_exports, {
  default: () => service_default
});
var import_react10 = require("react"), import_jsx_runtime = require("react/jsx-runtime"), index = (props) => {
  var _a;
  return (0, import_react10.useEffect)(() => {
    document.title = "android-app-development | Weenggs Technology";
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        class: "h-full w-full  bg-no-repeat bg-center bg-cover bg-portfolio",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          class: "bg-[#060606] opacity-90 z-0 flex",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
            class: "lg:h-[320px]  lg:max-w-[990px] block m-auto",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              class: "lg:h-[320px] m-auto flex text-center flex-col justify-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                  class: "text-2xl pt-10 lg:text-5xl md:text-5xl  text-center  text-[#ffffff] z-30",
                  children: props.heading
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  class: "text-center mb-10  font-md text-sm lg:text-sm  text-[#cbcaca]  m-5",
                  style: { letterSpacing: "2px" },
                  children: (_a = props.description) == null ? void 0 : _a.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    children: item
                  }))
                })
              ]
            })
          })
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        class: "bg-[#fff] opacity-90 z-0 lg:py-10 p-10 flex",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          class: "lg:h-[320px] my-10 lg:max-w-[990px] block m-auto",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            class: "lg:h-[320px] m-auto flex text-center 	font-weight: 400; flex-col justify-center",
            children: props.postdata.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              class: "text-center my-5 font-weight: 500 font-md text-sm   m-5",
              children: [
                item,
                " "
              ]
            }))
          })
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        class: "bg-[#f4f4f4] p-10",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          class: "lg:max-w-[1140px] block m-auto",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            class: "w-full md:flex lg:flex text-xl ",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                class: "lg:pt-20  lg:w-3/6 md:w-3/6  w-full",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                    class: "text-[#999999] text-sm 	font-weight: 400 uppercase ",
                    children: props.apptype
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                    class: "text-[#bf1e2e] text-md md:text-4xl  mb-5",
                    children: props.servicetype
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                    class: "py-5 text-[#595959]",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        class: "mb-10 font-md text-sm font-weight: 400 text-[#595959] ",
                        children: props.sdesc
                      }),
                      props.data.map((item, index2) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                          class: "flex",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                              class: "fa m-1 text-[#23a455]",
                              children: "\uF087"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              class: "ml-2",
                              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                                class: "mb-2 text-base",
                                children: item.head
                              })
                            })
                          ]
                        })
                      }))
                    ]
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                class: "lg:py-20   lg:w-3/6 md:w-3/6 ",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                  class: "md:w-[500px] md:h-[500px] w-[222px] h-[323px] animate-pulse",
                  src: props.image,
                  alt: "image"
                })
              })
            ]
          })
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        class: "bg-[#fff] p-10",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          class: "lg:max-w-[1140px] block m-auto",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            class: "w-full md:flex lg:flex text-xl ",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                class: "lg:pt-20  lg:w-3/6 md:w-3/6  w-full",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                    class: "text-[#999999] text-sm 	font-weight: 400 ",
                    children: "WHY CHOOSE WEENGGS FOR YOUR"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                    class: "text-[#bf1e2e] text-md md:text-4xl  mb-5",
                    children: props.application
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                    class: "py-5 text-[#595959]  text-sm	font-weight: 400 ",
                    children: props.data1.map((item, index2) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                      class: "flex",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                          class: item.logo
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                          class: "ml-2",
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                            class: "mb-2 text-base",
                            children: item.head
                          })
                        })
                      ]
                    }, index2))
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                class: "lg:py-20   lg:w-3/6 md:w-3/6 ",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                  class: "md:w-[500px]  md:h-[500px] w-[222px] h-[323px] animate-pulse",
                  src: props.appimg,
                  alt: "image"
                })
              })
            ]
          })
        })
      })
    ]
  });
}, service_default = index;

// app/routes/service/android-app-development.jsx
var import_jsx_runtime = require("react/jsx-runtime"), loader = async () => (0, import_node.json)({
  heading: "Android App Development",
  description: [
    "Top-Notch Android App Development Company in India",
    "We build intuitive Android Apps for ultimate user engagement"
  ],
  postdata: [
    "The rapid growth and easy availability of smartphones and tablets have drastically changed consumers behaviour thus leading to a paradigm shift in business practices. Google\u2019s operating system \u2013 Android has been a key contributor to this revolution. With more than 2 billion monthly active Android users, it boasts a whopping 80% of all smartphone sales and 70% of tablet OS market share! In order to keep up the mobile now generation, companies need a mobile strategy that engages customers using Android.",
    " With years of experience in the industry and a deep understanding of the latest technology, Weenggs has perfected the art creating an innovative and elegant Android application for startups and enterprise organizations.",
    "We listen to you and only when we completely understand your needs we start our building process. Our full-stack Android developers are proficient with the majority of native and hybrid programming languages. As a result, we offer you user-friendly and cost-effective Android solutions with excellent UX that ensure maximum user engagement and the highest ROI. We don\u2019t just build apps, we deliver perfection."
  ],
  apptype: "ANDROID APP",
  servicetype: "DEVELOPMENT SERVICES",
  sdesc: " A lot goes into the creation of an android application. Our proficient Android app development team can create an exceptional app from simple to complex functionalities.",
  image: "https://www.weenggs.com/wp-content/uploads/2019/02/a_one.png",
  data: [
    {
      icon: "&#xf087;",
      head: "Custom Android App Development"
    },
    {
      icon: "&#xf087;",
      head: "Native  Android  App Development"
    },
    {
      icon: "&#xf087;",
      head: " Android  App Upgrade"
    },
    {
      icon: "&#xf087;",
      head: "Hybrid  Android  App Development"
    },
    {
      icon: "&#xf087;",
      head: " Android App UI/UX Designing"
    },
    {
      icon: "&#xf087;",
      head: " Android  App Testing/Portability"
    },
    {
      icon: "&#xf087;",
      head: " Android  App Development Consulting"
    }
  ],
  application: "Android APPLICATION DEVELOPMENT?",
  appimg: "https://www.weenggs.com/wp-content/uploads/2019/02/a_two-1024x910.png",
  data1: [
    {
      logo: "fa fa-trophy m-1 text-[#595959]",
      head: "Industry and Domain Expertise"
    },
    {
      logo: "fa fa-window-maximize m-1  text-[#595959]",
      head: "End-To-End User Experience"
    },
    {
      logo: "fa fa-desktop m-1 text-[#595959]",
      head: "Powerful, Robust & Responsive Design"
    },
    {
      logo: "fa fa-paint-brush m-1 text-[#595959]",
      head: "Enhanced Visual Appeal"
    },
    {
      logo: "fa fa-file-code-o m-1 text-[#595959]",
      head: "Third-Party API Integrations"
    },
    {
      logo: "fa fa-lock m-1 text-[#595959]",
      head: "Safe and Secure"
    },
    {
      logo: "fa fa-cloud-upload m-1 text-[#595959]",
      head: "Application Upgrade and Maintenance"
    },
    {
      logo: "fa fa-check-square m-1 text-[#595959]",
      head: "Proven Methodologies"
    },
    {
      logo: "fa fa-gear m-1 text-[#595959]",
      head: "Technology Savvy"
    },
    {
      logo: "fa fa-calendar-check-o m-1 text-[#595959]",
      head: "On-time Delivery"
    },
    {
      logo: "fa fa-money  m-1 text-[#595959]",
      head: "Value For Money"
    },
    {
      logo: "fa fa-comments  m-1 text-[#595959]",
      head: "24/7 Online Support"
    }
  ]
});
function Posts() {
  let { heading, description, postdata, apptype, servicetype, sdesc, image, data: data3, application, appimg, data1: data12 } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(service_default, {
      heading,
      description,
      postdata,
      apptype,
      servicetype,
      sdesc,
      image,
      data: data3,
      application,
      appimg,
      data1: data12
    })
  });
}

// app/routes/service/desktop-app-development.jsx
var desktop_app_development_exports = {};
__export(desktop_app_development_exports, {
  default: () => Posts2,
  loader: () => loader2
});
var import_node2 = require("@remix-run/node"), import_react12 = require("@remix-run/react");
var import_jsx_runtime = require("react/jsx-runtime"), loader2 = async () => (0, import_node2.json)({
  heading: "Desktop App Development",
  description: [
    "Leading Desktop Application Development Company in India",
    "We build modern desktop applications to help enrich business and improve productivity"
  ],
  postdata: [
    "Desktop apps are the next big thing that you need to maintain and upgrade your business and yield benefits from day to day processes. We at Weenggs provide you with the perfect custom desktop applications that will not only enhance your customer appeal but also help streamline various processes within a business, improving efficiency and effectiveness.",
    " We have the technical and project management expertise needed to successfully execute and complete projects. We are known for delivering high-end custom solutions that are easily accessible on various platforms including  Windows 8, 8.1 or 10.",
    "Using modern technology and only after a wide study and research our certified coders start developing an easy-to-use and highly secure Rich Desktop Applications (RDA) and Rich Internet Desktop Applications (RIDAs) just for you."
  ],
  apptype: "Desktop Application",
  servicetype: "DEVELOPMENT PROCESS",
  sdesc: "Tailored to your company\u2019s needs and requirements, the only aim of our applications is to help your business succeed.",
  image: "https://www.weenggs.com/wp-content/uploads/2019/02/kisspng-computer-programming-software-developer-software-e-internet-computer-technology-5a6acebec12a92.3136952715169491827912.png",
  data: [
    {
      icon: "&#xf087;",
      head: "Custom Desktop App Development"
    },
    {
      icon: "&#xf087;",
      head: "Native Desktop App Development"
    },
    {
      icon: "&#xf087;",
      head: "Hybrid Desktop App Development"
    },
    {
      icon: "&#xf087;",
      head: "Desktop App Upgrade"
    },
    {
      icon: "&#xf087;",
      head: "Desktop App UI/UX Designing"
    },
    {
      icon: "&#xf087;",
      head: "Desktop App Testing/Portability"
    },
    {
      icon: "&#xf087;",
      head: "Desktop App Development Consulting"
    }
  ],
  application: "IPHONE APPLICATION DEVELOPMENT?",
  appimg: "https://www.weenggs.com/wp-content/uploads/2019/02/main.png",
  data1: [
    {
      logo: "fa fa-trophy m-1 text-[#595959]",
      head: "Industry and Domain Expertise"
    },
    {
      logo: "fa fa-window-maximize m-1  text-[#595959]",
      head: "End-To-End User Experience"
    },
    {
      logo: "fa fa-desktop m-1 text-[#595959]",
      head: "Powerful, Robust & Responsive Design"
    },
    {
      logo: "fa fa-paint-brush m-1 text-[#595959]",
      head: "Enhanced Visual Appeal"
    },
    {
      logo: "fa fa-file-code-o m-1 text-[#595959]",
      head: "Third-Party API Integrations"
    },
    {
      logo: "fa fa-lock m-1 text-[#595959]",
      head: "Safe and Secure"
    },
    {
      logo: "fa fa-cloud-upload m-1 text-[#595959]",
      head: "Application Upgrade and Maintenance"
    },
    {
      logo: "fa fa-check-square m-1 text-[#595959]",
      head: "Proven Methodologies"
    },
    {
      logo: "fa fa-gear m-1 text-[#595959]",
      head: "Technology Savvy"
    },
    {
      logo: "fa fa-calendar-check-o m-1 text-[#595959]",
      head: "On-time Delivery"
    },
    {
      logo: "fa fa-money  m-1 text-[#595959]",
      head: "Value For Money"
    },
    {
      logo: "fa fa-comments  m-1 text-[#595959]",
      head: "24/7 Online Support"
    }
  ]
});
function Posts2() {
  let { heading, description, postdata, apptype, servicetype, sdesc, image, data: data3, application, appimg, data1: data12 } = (0, import_react12.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(service_default, {
      heading,
      description,
      postdata,
      apptype,
      servicetype,
      sdesc,
      image,
      data: data3,
      application,
      appimg,
      data1: data12
    })
  });
}

// app/routes/service/custom-web-development.jsx
var custom_web_development_exports = {};
__export(custom_web_development_exports, {
  default: () => Posts3,
  loader: () => loader3
});
var import_node3 = require("@remix-run/node"), import_react13 = require("@remix-run/react");
var import_jsx_runtime = require("react/jsx-runtime"), loader3 = async () => (0, import_node3.json)({
  heading: "Custom Web Development",
  description: [
    "Best Web Application Development Company in India",
    "Using innovation, technology and a little bit of creativity, we build custom Web Applications just for you!"
  ],
  postdata: [
    "The fast growth of technology and rising user expectations have imposed an indisputable need for brands to deliver digital experiences that are intuitive and engaging. This means brands have to be accessible everywhere, in real-time and on both desktop and mobile devices.",
    "At Weenggs, we build web applications for your that are clean, clear and customized to create a lasting impression. Our experienced team of web developers are known to design and develop powerful business channels which connect with your target audience.",
    "Using rich aesthetics and out-of-the-box design concepts, we will craft a unique application for you that is more than just a pretty face. Designed to perfection, your responsive web app will perform flawlessly across all devices, will enhance user experience and help convert visitors into assured clients!"
  ],
  apptype: "WEB APPLICATION",
  servicetype: "DEVELOPMENT PROCESS",
  sdesc: "We do not just code web apps, we create powerful communication channels for you to drive online growth and deliver the results you care about.",
  image: "https://www.weenggs.com/wp-content/uploads/2019/02/web_pap_one.png",
  data: [
    {
      icon: "&#xf087;",
      head: "Custom Desktop App Development"
    },
    {
      icon: "&#xf087;",
      head: "Web App Upgrade"
    },
    {
      icon: "&#xf087;",
      head: "Web App UI/UX Designing"
    },
    {
      icon: "&#xf087;",
      head: "Web App Testing/Portability"
    },
    {
      icon: "&#xf087;",
      head: "Web App Development Consulting"
    }
  ],
  application: "Why Choose Weenggs for your Custom Application Development?",
  appimg: "https://www.weenggs.com/wp-content/uploads/2015/03/imac-606765_1280-1024x680.jpg",
  data1: [
    {
      logo: "fa fa-trophy m-1 text-[#595959]",
      head: "Industry and Domain Expertise"
    },
    {
      logo: "fa fa-window-maximize m-1  text-[#595959]",
      head: "End-To-End User Experience"
    },
    {
      logo: "fa fa-desktop m-1 text-[#595959]",
      head: "Powerful, Robust & Responsive Design"
    },
    {
      logo: "fa fa-paint-brush m-1 text-[#595959]",
      head: "Enhanced Visual Appeal"
    },
    {
      logo: "fa fa-file-code-o m-1 text-[#595959]",
      head: "Third-Party API Integrations"
    },
    {
      logo: "fa fa-lock m-1 text-[#595959]",
      head: "Safe and Secure"
    },
    {
      logo: "fa fa-cloud-upload m-1 text-[#595959]",
      head: "Application Upgrade and Maintenance"
    },
    {
      logo: "fa fa-check-square m-1 text-[#595959]",
      head: "Proven Methodologies"
    },
    {
      logo: "fa fa-gear m-1 text-[#595959]",
      head: "Technology Savvy"
    },
    {
      logo: "fa fa-calendar-check-o m-1 text-[#595959]",
      head: "On-time Delivery"
    },
    {
      logo: "fa fa-money  m-1 text-[#595959]",
      head: "Value For Money"
    },
    {
      logo: "fa fa-comments  m-1 text-[#595959]",
      head: "24/7 Online Support"
    }
  ]
});
function Posts3() {
  let { heading, description, postdata, apptype, servicetype, sdesc, image, data: data3, application, appimg, data1: data12 } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(service_default, {
      heading,
      description,
      postdata,
      apptype,
      servicetype,
      sdesc,
      image,
      data: data3,
      application,
      appimg,
      data1: data12
    })
  });
}

// app/routes/service/iphone-app-development.jsx
var iphone_app_development_exports = {};
__export(iphone_app_development_exports, {
  default: () => Posts4,
  loader: () => loader4
});
var import_node4 = require("@remix-run/node"), import_react14 = require("@remix-run/react");
var import_jsx_runtime = require("react/jsx-runtime"), loader4 = async () => (0, import_node4.json)({
  heading: "iPhone App Development",
  description: [
    "Best iPhone App Development Company in India",
    "We Build Robust, scalable, interactive iPhone Apps For You"
  ],
  postdata: [
    "There\u2019s no denying that Apple\u2019s iOS is one of the most advanced platforms for mobile apps and with more than 2 million iOS applications in Apple\u2019s App Store, it\u2019s quite in demand as well.",
    " We at Weenggs know all about building high-performance and feature-rich iPhone apps that offer a delightful user experience. Our team of technically savvy iOS developers take your raw ideas, brew it with expert codes and create a user-friendly UI & UX design, with flexible layouts and easy navigation. We serve you an iPhone app that is the perfect concoction of innovation, aesthetics and is on par with the requirements of the stringent quality focussed Apple App Store."
  ],
  apptype: "IPHONE APP",
  servicetype: "DEVELOPMENT SERVICES",
  sdesc: "Our iOS application development team develops your apps with high-quality UI in a wide spectrum of iOS application development.",
  image: "https://www.weenggs.com/wp-content/uploads/2019/01/Massive-Dynamic-1-1.png",
  data: [
    {
      icon: "&#xf087;",
      head: "Custom iPhone App Development"
    },
    {
      icon: "&#xf087;",
      head: "Native iPhone App Development"
    },
    {
      icon: "&#xf087;",
      head: "iPhone App Upgrade"
    },
    {
      icon: "&#xf087;",
      head: "Hybrid iPhone App Development"
    },
    {
      icon: "&#xf087;",
      head: "iPhone App UI/UX Designing"
    },
    {
      icon: "&#xf087;",
      head: "iPhone App Testing/Portability"
    },
    {
      icon: "&#xf087;",
      head: "iPhone App Development Consulting"
    }
  ],
  application: "iPHONE APPLICATION DEVELOPMENT?",
  appimg: "https://www.weenggs.com/wp-content/uploads/2019/02/kisspng-mobile-app-development-application-software-ios-an-creative-mobile-phone-model-5a71a3e4e61282.5503164515173969649424-806x1024.png",
  data1: [
    {
      logo: "fa fa-trophy m-1 text-[#595959]",
      head: "Industry and Domain Expertise"
    },
    {
      logo: "fa fa-window-maximize m-1  text-[#595959]",
      head: "End-To-End User Experience"
    },
    {
      logo: "fa fa-desktop m-1 text-[#595959]",
      head: "Powerful, Robust & Responsive Design"
    },
    {
      logo: "fa fa-paint-brush m-1 text-[#595959]",
      head: "Enhanced Visual Appeal"
    },
    {
      logo: "fa fa-file-code-o m-1 text-[#595959]",
      head: "Third-Party API Integrations"
    },
    {
      logo: "fa fa-lock m-1 text-[#595959]",
      head: "Safe and Secure"
    },
    {
      logo: "fa fa-cloud-upload m-1 text-[#595959]",
      head: "Application Upgrade and Maintenance"
    },
    {
      logo: "fa fa-check-square m-1 text-[#595959]",
      head: "Proven Methodologies"
    },
    {
      logo: "fa fa-gear m-1 text-[#595959]",
      head: "Technology Savvy"
    },
    {
      logo: "fa fa-calendar-check-o m-1 text-[#595959]",
      head: "On-time Delivery"
    },
    {
      logo: "fa fa-money  m-1 text-[#595959]",
      head: "Value For Money"
    },
    {
      logo: "fa fa-comments  m-1 text-[#595959]",
      head: "24/7 Online Support"
    }
  ]
});
function Posts4() {
  let { heading, description, postdata, apptype, servicetype, sdesc, image, data: data3, application, appimg, data1: data12 } = (0, import_react14.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(service_default, {
      heading,
      description,
      postdata,
      apptype,
      servicetype,
      sdesc,
      image,
      data: data3,
      application,
      appimg,
      data1: data12
    })
  });
}

// app/routes/request-a-quote.jsx
var request_a_quote_exports = {};
__export(request_a_quote_exports, {
  default: () => request_a_quote_default
});
var import_react15 = require("react");
var import_jsx_runtime = require("react/jsx-runtime"), RequestQuote = () => {
  let [name, setName] = (0, import_react15.useState)(""), [email, setEmail] = (0, import_react15.useState)(""), [subject, setSubject] = (0, import_react15.useState)(""), [massage, setMassage] = (0, import_react15.useState)(""), [loader6, setLoader] = (0, import_react15.useState)(!1);
  var error;
  let handleSubmit = async (e) => {
    if (e.preventDefault(), error = !1, setLoader(!0), isBlank(name.trim()) ? (error = "true", document.getElementById("name-error").innerHTML = "Name should not be empty") : isLength(name) ? (error = !0, document.getElementById("name-error").innerHTML = "Name should be 1 to 15 char") : document.getElementById("name-error").innerHTML = "", isBlank(email.trim()) ? (error = !0, document.getElementById("email-error").innerHTML = "Email should not be blank") : validateEmail(email) ? (error = !0, document.getElementById("email-error").innerHTML = "Please enter valid email", console.log(email)) : document.getElementById("email-error").innerHTML = "", error)
      setLoader(!1), document.getElementById("m-error").innerHTML = "One or more fields have an error. Please check and try again.";
    else {
      document.getElementById("m-error").innerHTML = "", setLoader(!0);
      let data3 = {
        name,
        email,
        subject,
        massage
      };
      setTimeout(async () => {
        setLoader(!1);
      }, 2e3), console.log(data3);
    }
  }, Loader = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    class: "flex items-center justify-center  px-10  min-w-screen",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
      class: "flex space-x-2 animate-pulse",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          class: "w-3 h-3 bg-gray-500 rounded-full"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          class: "w-3 h-3 bg-gray-500 rounded-full"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          class: "w-3 h-3 bg-gray-500 rounded-full"
        })
      ]
    })
  });
  return (0, import_react15.useEffect)(() => {
    document.title = "Request-a-quote | Weenggs Technology";
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        class: "h-full w-full  bg-no-repeat bg-center bg-cover bg-portfolio",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          class: "flex md:bg-[#060606] opacity-80",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
            class: "lg:h-[320px]  lg:max-w-[990px] block m-auto",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              class: "lg:h-[320px] m-auto flex text-center flex-col justify-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                  class: "text-2xl pt-10 lg:text-5xl md:text-5xl  text-center font-bold text-[#ffffff] z-30",
                  children: "Request a Quote"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  class: "text-center mb-10 font-sm text-xs  uppercase text-[#191919]  m-5",
                  style: { letterSpacing: "5px" },
                  children: "FILL THE FORM BELOW"
                })
              ]
            })
          })
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "bg-[#fff]",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          className: "lg:max-w-[1120px] contents",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "w-full  my-20",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "lg:pt-10 md:w-full flex flex-col lg:max-w-[1140px] lg:items-center",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
                class: "w-full contents text-sm",
                method: "post",
                onSubmit: handleSubmit,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    class: " text-start flex flex-col lg:w-3/6 md:items-center mb-2 px-10",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        class: "text-start  md:w-2/3 pb-2",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                          class: "flex text-start text-gray-500 text-sm  md:text-right mb-1 md:mb-0 pr-4",
                          children: "Your Name (required)"
                        })
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        class: "md:w-2/3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                            class: " appearance-none border border-gray-200 rounded w-full text-sm p-2.5 leading-8   focus:outline-none focus:bg-white focus:border-blue-500 focus:border-2",
                            id: "name",
                            type: "text",
                            name,
                            onChange: (e) => {
                              setName(e.target.value);
                            }
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            style: { color: "red" },
                            id: "name-error",
                            class: "error"
                          })
                        ]
                      })
                    ]
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    class: "text-start flex flex-col lg:w-3/6 md:items-center mb-2 px-10",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        class: "text-start  md:w-2/3 pb-2",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                          class: "flex text-start text-sm  text-gray-500  md:text-right mb-1 md:mb-0 pr-4",
                          children: "Your Email (required)"
                        })
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        class: "md:w-2/3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                            class: " appearance-none border border-gray-200 rounded w-full text-sm p-2.5 leading-8 focus:outline-none focus:bg-white focus:border-blue-500 focus:border-2",
                            id: "email",
                            type: "text",
                            name: email,
                            onChange: (e) => {
                              setEmail(e.target.value);
                            }
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                            style: { color: "red" },
                            id: "email-error",
                            class: "error"
                          })
                        ]
                      })
                    ]
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    class: "text-start flex flex-col lg:w-3/6 md:items-center mb-2 px-10",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        class: "text-start  md:w-2/3 pb-2",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                          class: "text-start flex text-sm  text-gray-500  md:text-right mb-1 md:mb-0 pr-4",
                          children: "Subject"
                        })
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        class: "md:w-2/3",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                          class: " appearance-none border border-gray-200 rounded block text-sm  w-full p-2.5  leading-8 focus:outline-none focus:bg-white focus:border-blue-500 focus:border-2",
                          id: "subject",
                          type: "text",
                          name: subject,
                          onChange: (e) => {
                            setSubject(e.target.value);
                          }
                        })
                      })
                    ]
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    class: "text-start flex flex-col lg:w-3/6 md:items-center mb-2 px-10",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        class: "text-start  md:w-2/3 pb-2",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
                          class: "block text-gray-500 text-sm  md:text-start mb-1 md:mb-0 pr-4",
                          children: "Your Massage"
                        })
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        class: "md:w-2/3",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
                          id: "message",
                          rows: "4",
                          class: "block p-2.5 w-full text-sm leading-8 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:border-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                          name: massage,
                          onChange: (e) => {
                            setMassage(e.target.value);
                          }
                        })
                      })
                    ]
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    class: "text-start  flex flex-col lg:w-3/6 md:items-center mb-2 px-10",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      class: "md:w-2/3 flex",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                          class: "shadow bg-red-500 hover:bg-white hover:text-black border-2 hover:border-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full",
                          type: "submit",
                          children: "SEND"
                        }),
                        loader6 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, {}) : ""
                      ]
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    class: "text-start flex flex-col lg:w-3/6 md:items-center mb-2 px-10",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      class: "error  fit-content text-sm ",
                      style: { color: "red" },
                      id: "m-error"
                    })
                  })
                ]
              })
            })
          })
        })
      })
    ]
  });
}, request_a_quote_default = RequestQuote;

// app/routes/portfolio.jsx
var portfolio_exports = {};
__export(portfolio_exports, {
  default: () => Posts5,
  loader: () => loader5
});
var import_react16 = require("react"), import_node5 = require("@remix-run/node"), import_react17 = require("@remix-run/react"), import_jsx_runtime = require("react/jsx-runtime"), loader5 = () => (0, import_node5.json)({
  arr: [
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/07/contractor1-1-1024x756-1024x756.png",
      heading: "Contractor Foreman",
      mark: "Rated #1 in 2019 by DailyReporter.com\u2026",
      desc: [
        "Contractor Foreman is the most affordable all-in-one project management software for your COMPUTER, PHONE, and TABLET. Stop wasting time and money using overpriced apps. Backed by a 100 day guarantee."
      ],
      appstore: "https://itunes.apple.com/us/app/contractor-foreman-all-in-one-for-contractors/id1239787613?ls=1&mt=8",
      playstore: "https://play.google.com/store/apps/details?id=com.contractorforeman"
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/07/YuVie_1-1024x756-1024x756.png",
      heading: "YuVie Promote",
      desc: [
        "Branded Videos Made Easy, Create & Share to Any Platform, Track your stats in Real Time."
      ],
      skills: ["iOS", "Android", "Java", "PHP", "ffmpeg", "MySql", " Video Editing"],
      appstore: "https://apps.apple.com/ie/app/yuvie-promote/id1388366438",
      playstore: "https://play.google.com/store/apps/details?id=com.lee.yuviepromote"
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/12/Illustrated-Notes-1024x756.jpg",
      heading: "\u56F3\u89E3\u30CE\u30FC\u30C8 \u2013 Illustrated note",
      mark: "Rated #1 in 2019 by DailyReporter.com\u2026",
      desc: [
        "Illustrated card app that makes you and your opponent\u2019s head clearer. The illustrations can be complicated at first glance. Even if you don\u2019t understand the language, you can understand it with a diagram. That is the power of \u201Cillustration\u201D. This is an understanding, thinking, and communication support tool that can be easily illustrated even by those who are not used to it and can be communicated to the other party. You can easily complete an illustrated sheet by simply selecting a suitable card from the 8 basic illustrated cards and applying it to the diagram. The illustrated card can be used more effectively if you use it together with the \u201CDesire\u201D and clarify the needs (needs) of yourself (your company) and others (other companies)."
      ],
      playstore: "https://play.google.com/store/apps/details?id=jp.co.mikle.ideanotes"
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2020/02/genielens-1024x756.png",
      heading: "Genielens",
      mark: "",
      desc: [
        "Genielens is a social photo sharing and photo manipulating app.",
        "*Photo manipulation & sharing involves transforming or altering a photo using various methods and techniques to achieve desired results.",
        "*With GenieLens members can upload a photo, add effects and edit the background and foreground.",
        "Available Features: Post photos \u2013 crop, add filters, text and editing effects, Manipulate background and foreground photos, Social photo sharing \u2013 search members, Hashtags & Photos, Select and upload hundreds of stock images, Add a location tag to your Image, Post photo public or private, Like and comment photos, Post images with Hashtags, Follow members"
      ],
      appstore: "https://apps.apple.com/in/app/mefgi-login/id895752150",
      playstore: "https://play.google.com/store/apps/details?id=com.mefgi.login"
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/07/MEFGI-Login-1024x756-1024x756.png",
      heading: "Marwadi University App",
      desc: [
        "In this application, MEFGI wants to simplify the load a student can have in their college life like library, time table, examination etc. Any student can login with their user id and password and access their personal work regarding college stuff.",
        "Parents who are so much worried about their ward\u2019s track record and study material. They can easily log in to the application and find all the details about what is college providing to the student for the study and facility.",
        "Timetable, Notices, Attendance, E-Content, Leave Gate Passes, Placement, Transportation, Library and Academic."
      ],
      appstore: "https://apps.apple.com/in/app/mefgi-login/id895752150",
      playstore: "https://play.google.com/store/apps/details?id=com.mefgi.login"
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/08/Worx\u2122SR-1024x756.png",
      heading: "Worx\u2122SR",
      desc: [
        "Worx\u2122SR is kind of Service on Demand Application, Like Uber and many Service on demands Application. but It is developed to serve Service Providers and Customers with One Application. So User still can use Application as Employer, or as Service Providers as well.",
        "It is easy to use Worx\u2122SR for those users who are acquainted with FACEBOOK, TWITTER, LINKEDIN Apps."
      ],
      appstore: "https://apps.apple.com/in/app/mefgi-login/id895752150",
      playstore: "https://play.google.com/store/apps/details?id=com.mefgi.login"
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/08/Mid-Trade-My-College-Town-1024x756.png",
      heading: "My CollegeTown",
      desc: [
        "MyCollegeTown helps college students find local deals, subleases, and items for sale within trusted campus communities.",
        "For students, we have more CollegeTown specials and happy hours available than ever before, with new ones available every week. Our Campus Trading Posts offer a convenient way for students to buy, sell, and trade with classmates. And our Student Subleases tool lets students find a place to live or offer a room to rent. Our app can save students thousands of dollars each year if used properly."
      ],
      skills: ["Swift", "Android", "Java"],
      appstore: "https://apps.apple.com/us/app/midtrade-everything-college/id1196137099",
      playstore: "https://play.google.com/store/apps/details?id=com.midtrade"
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/07/Blueberry-POS-1024x756-1024x756.png",
      heading: "Blueberry POS",
      desc: [
        "Blueberry POS is the free POS (point-of-sale) app for your retail store that works with your existing Square or Sumup account and is a great tool for merchants of cafes, bars, restaurants, coffee shops, beauty salons, kiosks, food trucks, car wash or individual businesses."
      ],
      sHead: "Selling with Blueberry POS is Easy!",
      type: "1",
      sell: [
        "Add a business by logging in to your existing Square or Sumup account.",
        "Import store items or add new products to the Cart",
        "Review order, apply discounts, and checkout.",
        "Checkout \u2013 use cash, credit, debit, or split a payment."
      ],
      appstore: "https://apps.apple.com/us/app/blueberry-pos/id1448333603",
      playstore: "https://play.google.com/store/apps/details?id=com.vidioo.blueberrypos"
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/08/ProLongPro-1024x756.png",
      heading: "ProlongPro",
      desc: [
        "ProlongPro Thunderbolt Battery Repair System App. Requires Thunderbolt Battery Repair System hardware and valid software license key to use."
      ],
      sell: [],
      appstore: "",
      playstore: "https://play.google.com/store/apps/details?id=com.prolong.pro"
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/08/Stopmotion-Lunnis-1024x756.png",
      heading: "StopMotion Lunnis",
      desc: [
        "It\u2019s here the new app \u201CLunnis and \u2026 action!\u201D! Where children will be the directors of their own animated films. Using any device camera children will be immersed in the stopmotion technique, capturing frame by frame their own animations. In addition to photographs, they can make videos and so record their own stories. They can also edit all the material you\u2019ve recorded with the editor that offers the app.",
        "Have fun while \u201Cyou ride your movie\u201D! imagination to power and \u2026 action!"
      ],
      skills: [],
      sell: [],
      appstore: "https://apps.apple.com/by/app/stopmotion-lunnis/id1382414570",
      playstore: "https://play.google.com/store/apps/details?id=com.paramotion.stopmotion"
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/07/Tailgate-Trucks-1024x756-1024x756.png",
      heading: "Tailgate Trucks",
      desc: [
        "Ever wish you had a pickup truck?  Tailgate is a premier mobile application and platform that connects people who need a pickup to pickup truck owners.  Tailate is fast, easy and way better than renting a truck or hitting up your neighbor to borrow their pickup!"
      ],
      skills: ["Swift", "Android", "Java", "PHP", "MySql", "Google-Map", "PayPal Payments", "Stripe Payments"],
      sell: [],
      appstore: "https://apps.apple.com/by/app/stopmotion-lunnis/id1382414570",
      playstore: "https://play.google.com/store/apps/details?id=com.paramotion.stopmotion"
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/07/Gigl-1024x756-1024x756.png",
      heading: "Gigl",
      desc: [
        "Gigl is a free mobile app that allows you to get help both easily and conveniently for your gigs and allows you to make the extra money you seek by completing others\u2019 gigs."
      ],
      skills: ["Swift", "Android", "Java", "PHP", "MySql", "Google-Map", "PayPal Payments", "Stripe Payments"],
      sell: [],
      appstore: "https://apps.apple.com/us/app/gigl/id1372641500",
      playstore: "https://play.google.com/store/apps/details?id=com.gigl"
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/08/Red-Centre-Art-Trails-1024x756.png",
      heading: "Red Centre Art Trails",
      desc: [
        "Red Centre Art Trails app consolidates the region\u2019s art attractions and events into an easy-to-use app so that you can discover and experience the full richness of art in the Red Centre.",
        "Once you immerse yourself in the magic of Central Australia and connect with the land, people, culture and history \u2013 the experience will never leave you.",
        "Go exploring, your art adventure awaits you."
      ],
      skills: [],
      sell: [],
      appstore: "https://apps.apple.com/us/app/id1036679052?ls=1",
      playstore: "https://play.google.com/store/apps/details?id=au.com.redcentreart"
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/08/Smart-Council-1024x756.png",
      heading: "Smart Council",
      desc: [
        "Smart Council is a suite of digital engagement tools for the management of Councils, Shires and Community Service Providers.",
        "Create mobile forms in minutes that are visually friendly and support numerous languages. Replace paper-based forms and see results immediately.",
        "Choose from over 12 basic form-styles \u2013 or use our online form builder to create visually friendly forms to suit your unique needs!"
      ],
      skills: [],
      sHead: "",
      sell: [],
      appstore: "https://apps.apple.com/us/app/smart-council/id1219867659?ls=1",
      playstore: ""
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/08/Community-Safety-1024x756.png",
      heading: "Community Safety",
      desc: [
        "Smart Council is a suite of digital engagement tools for the management of Councils, Shires and Community Service Providers."
      ],
      skills: [],
      sHead: "Community Safety App features the following six key forms:",
      type: 1,
      sell: [
        "Pickups & Dropoffs form",
        "People in Conflict form",
        "Car Incident form",
        "Person at Risk form",
        "Fire Incident form",
        "Property Damage form"
      ],
      appstore: "https://apps.apple.com/us/app/id1219866963",
      playstore: ""
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/08/Waste-Management-1024x756.png",
      heading: "Waste Management",
      desc: [
        "Smart Council\u2019s Waste Management App helps users send through critical reporting to support a range of Waste Management functions."
      ],
      skills: [],
      sHead: "Version 1 features the following six key forms:",
      type: 1,
      sell: [
        "Public Drop Bays (Audit)",
        "Council Landfill Compound (Audit)",
        "CHousehold Bins (Audit)",
        "Rubbish Collection Equipment (Audit)",
        "Public Space & Litter (Audit)"
      ],
      appstore: "https://apps.apple.com/us/app/id1219866963",
      playstore: ""
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/08/Emu-Run-Experience-1024x756.png",
      heading: "Emu Run Experience",
      desc: [
        "The Emu Run companion app includes short commentaries about 30 key locations on the route between Alice Springs, Uluru and Kings Canyon and has been translated into multiple languages.",
        "\u201CWe\u2019ve included lots of good yarns in there \u2013 and lots of interesting facts and figures. When the user passes a GPS trigger, the app kicks into action.\u201D",
        "The app also includes an \u2018Armchair Mode\u2019, which allows the user to browse the stories or look back over the recently visited site-points at their own pace."
      ],
      skills: [],
      sHead: "",
      sell: [],
      appstore: "",
      playstore: "https://play.google.com/store/apps/details?id=com.emu.run.app"
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/08/Anthwerrke-Emily-Gap-Experience-1024x756.png",
      heading: "Anthwerrke (Emily Gap) Experience",
      desc: [
        "Anthwerrke, the Arrernte name for Emily Gap, is a traditional site of major importance. It is part of the storyline for the Yeperenye, Utnerrengatye and the Ntyarlke caterpillars which are ancestral beings for the Mparntwe (Alice Springs) area.",
        "Arrernte people conceived in Alice Springs consider themselves direct descendants of these Caterpillar ancestors.",
        "Join Traditional Owners on an extended interactive journey of this special place."
      ],
      skills: [],
      sHead: "",
      sell: [],
      appstore: "",
      playstore: "https://play.google.com/store/apps/details?id=au.com.anthwerrke.emilygap.experience"
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/08/Balnhdhurr-\u2013-A-Lasting-Impression-1024x756.png",
      heading: "Balnhdhurr \u2013 A Lasting Impression",
      desc: [
        "In the far Eastern corner of Arnhem Land sits Yirrkala Print Space, where, for over twenty years, the craft of printmaking has prospered.",
        "Balnhdhurr \u2013 A Lasting Impression celebrates this space with works from 50 artists, providing a privileged insight into the nuanced art of the Yolngu people of Northeast Arnhem Land.",
        "The exhibition title, Balnhdhurr, translates to mean a mark made as a sign for people to follow. It describes a situation where one group goes ahead but wants to leave a message for those following behind. An impression is scratched into the ground with a sign directing the future viewer to follow the right path."
      ],
      skills: [],
      sHead: "",
      sell: [],
      appstore: "",
      playstore: "https://play.google.com/store/apps/details?id=com.sat.balnhdhurr"
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/08/Quote-Print-Cloud-1024x756.png",
      heading: "Quote & Print Cloud",
      desc: [
        "We are Quote & Print",
        "Quote & Print is your ideal ERP software supplier, we are the oldest and the largest ERP software company in Australasia. Our software enhancements your business by collecting and organising information, using it for production with less errors and delivering higher quality.",
        "Since 1981 Quote & Print have been providing the leading edge & affordable Print ERP solutions for all types of Printers:- Sheet Fed, Digital, Labels, Continuous, Large Format, Universities, Promotional, Print Brokers, Govt. Printing Presses etc."
      ],
      skills: [],
      sHead: "",
      sell: [],
      appstore: "https://apps.apple.com/us/app/quote-print-cloud/id1332944352?ls=1",
      playstore: "https://play.google.com/store/apps/details?id=com.quoteandprint&hl=ca"
    },
    {
      img: "https://www.weenggs.com/wp-content/uploads/2019/08/talk-1024x756.png",
      heading: "Friendship Talk",
      desc: [
        "Swipe & Connect!",
        "Talk allows you to meet someone new at the turn of each swipe.",
        "You can easily explore new cultures and people from all over the world."
      ],
      skills: [],
      sHead: "",
      type: "-",
      sell: [
        "Meet new people from all over the world through live video calls (using 3G, 4G, Wi-Fi)",
        "Select the region and gender of your choice and start building new conversations",
        "Enhance your chat experience with facial recognition stickers and costume effects.",
        "Add new people to your friend list and spark conversations",
        "Send and receive messages/video calls with existing friends"
      ],
      appstore: "",
      playstore: "https://play.google.com/store/apps/details?id=com.friendship.talk"
    }
  ]
});
function Posts5() {
  let { arr } = (0, import_react17.useLoaderData)();
  return (0, import_react16.useEffect)(() => {
    document.title = "portfolio | Weenggs Technology";
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "h-full w-full  bg-no-repeat bg-center bg-cover bg-portfolio",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "bg-[#060606] opacity-90 z-0 flex",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
            className: "lg:h-[320px]  lg:max-w-[990px] block m-auto",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "lg:h-[320px] m-auto flex text-center flex-col justify-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                  className: "text-2xl pt-10 lg:text-5xl md:text-5xl  text-center font-bold text-[#ffffff] z-30",
                  children: "Portfolio"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "text-center mb-10 font-sm lg:text-xs  uppercase text-[#a5a5a5]  m-5",
                  style: { letterSpacing: "5px" },
                  children: "OUR BEST WORK"
                })
              ]
            })
          })
        })
      }),
      arr.map((item, index2) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
          children: index2 % 2 == 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "bg-[#fff]",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
                className: "lg:max-w-[1140px] block m-auto",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "w-full md:flex lg:flex ",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "lg:pt-20 py-10  lg:w-3/6 md:w-3/6 lg:hover:scale-75 transition duration-300 ",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                        src: item.img,
                        alt: ""
                      })
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "lg:pt-20  lg:w-3/6 md:w-3/6 py-10  w-full",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                          className: "text-[#5a64f1] m-5 text-5xl font-bold mb-5",
                          children: item.heading
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                          className: "m-5",
                          children: [
                            (_a = item.desc) == null ? void 0 : _a.map((task, index3) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
                                className: "text-sm my-5  m-5 text-gray-500",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                    className: "text-md text-gray-700",
                                    children: item == null ? void 0 : item.mark
                                  }),
                                  " ",
                                  task
                                ]
                              })
                            }, index3)),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "text-sm my-5 p-5 text-gray-500",
                              children: [
                                ((_b = item.skills) == null ? void 0 : _b.length) > 0 ? "Skills:" : "",
                                (_c = item.skills) == null ? void 0 : _c.map((skill, index3) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                  className: "text-sm  text-gray-500",
                                  children: skill + ","
                                }, index3))
                              ]
                            }),
                            ((_d = item.sell) == null ? void 0 : _d.length) > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              className: "text-md my-5  m-5 text-gray-500",
                              children: item.sHead
                            }) : "",
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
                              children: (_e = item.sell) == null ? void 0 : _e.map((sel, index3) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                className: "text-md ml-10  text-gray-500",
                                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                                  type: item.type,
                                  className: "text-sm  text-gray-500",
                                  children: sel
                                })
                              }, index3))
                            }),
                            item.appstore && item.playstore ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
                              className: "text-md my-5  m-5 text-gray-500",
                              children: [
                                "Available on",
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                                  className: "text-[#5050f1]",
                                  href: item.appstore,
                                  children: "App Store"
                                }),
                                " and ",
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                                  className: "text-[#5050f1]",
                                  href: item.playstore,
                                  children: "Play store."
                                })
                              ]
                            }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
                              className: "text-md my-5  m-5 text-gray-500",
                              children: [
                                "Available on",
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                                  className: "text-[#5050f1]",
                                  href: "https://play.google.com/store/apps/details?id=jp.co.mikle.ideanotes",
                                  children: "Play store."
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              })
            })
          }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "bg-[#fff]",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
                className: "lg:max-w-[1140px] block m-auto",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "w-full md:flex lg:flex ",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "lg:pt-20  lg:w-3/6 md:w-3/6 py-10  w-full",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                          className: "text-[#5a64f1] m-5 text-5xl font-bold mb-5",
                          children: item.heading
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                          className: "m-5",
                          children: [
                            (_f = item.desc) == null ? void 0 : _f.map((task, index3) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                              children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
                                className: "text-sm   m-5 text-gray-500",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                    className: "text-md text-gray-700",
                                    children: item == null ? void 0 : item.mark
                                  }),
                                  " ",
                                  task
                                ]
                              })
                            }, index3)),
                            ((_g = item.sell) == null ? void 0 : _g.length) > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              className: "text-md my-5  m-5 text-gray-500",
                              children: item.sHead
                            }) : "",
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
                              children: (_h = item.sell) == null ? void 0 : _h.map((sel, index3) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                className: "text-md ml-10  text-gray-500",
                                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
                                  className: "text-sm  text-gray-500",
                                  children: sel
                                })
                              }, index3))
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "text-sm my-5 p-5 text-gray-500",
                              children: [
                                ((_i = item.skills) == null ? void 0 : _i.length) > 0 ? "Skills:" : "",
                                (_j = item.skills) == null ? void 0 : _j.map((skill, index3) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                                  className: "text-sm  text-gray-500",
                                  children: skill + ","
                                }, index3))
                              ]
                            }),
                            item.appstore && item.playstore ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
                              className: "text-md my-5  m-5 text-gray-500",
                              children: [
                                "Available on",
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                                  className: "text-[#5050f1]",
                                  href: item.appstore,
                                  children: "App Store"
                                }),
                                " and ",
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                                  className: "text-[#5050f1]",
                                  href: item.playstore,
                                  children: "Play store."
                                })
                              ]
                            }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
                              className: "text-md my-5  m-5 text-gray-500",
                              children: [
                                "Available on",
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                                  className: "text-[#5050f1]",
                                  href: "https://play.google.com/store/apps/details?id=jp.co.mikle.ideanotes",
                                  children: "Play store."
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "lg:pt-20 py-10 lg:w-3/6 md:w-3/6  ",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                        className: "animate-pulse",
                        src: item.img,
                        alt: ""
                      })
                    })
                  ]
                })
              })
            })
          })
        });
      })
    ]
  });
}

// app/routes/careers.jsx
var careers_exports = {};
__export(careers_exports, {
  default: () => careers_default
});
var import_react18 = require("react");

// app/content/carreier.ts
var carrier = [
  {
    brand: " Fullstack Devloper",
    desc: " Fullstack developer having great command over debugging and troubleshooting skills. "
  },
  {
    brand: "PHP Developer",
    desc: " If you are good at core PHP and have extra ordinary skills for handling large projects \u2013 you seems to be a good fit. Be ready to take the challenges. "
  },
  {
    brand: "Javascript / jQuery Developer",
    desc: "Anyone with strong understanding of Javascript is always welcome without the limitation of any specific framework. "
  },
  {
    brand: " Project Manager",
    desc: "If you are capable of handling the giant product to extreme level, you are welcome to prove yourself with the help of dedicated team. "
  }
];

// app/routes/careers.jsx
var import_react_accessible_accordion = require("react-accessible-accordion");
var import_jsx_runtime = require("react/jsx-runtime"), Careers = () => {
  (0, import_react18.useEffect)(() => {
    document.title = "Careers | Weenggs Technology";
  }, []);
  let [ind, setInd] = (0, import_react18.useState)(), handlechange = (e, index2) => {
    e.preventDefault(), setExpend(!isexpended), setInd(index2), console.log(index2);
  }, [isexpended, setExpend] = (0, import_react18.useState)(!0);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "h-full w-full  bg-no-repeat bg-center bg-cover ",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "bg-[#060606] opacity-90 z-0 flex",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
            className: "lg:h-[320px]  lg:w-[990px] block m-auto",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "lg:h-[320px] m-auto flex text-center flex-col justify-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                  className: "text-2xl pt-10 lg:text-5xl md:text-5xl  text-center  text-[#ffffff] z-30",
                  children: "Careers"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "text-center mb-10 font-md lg:text-xm   text-gray-500  m-5",
                  style: { letterSpacing: "5px" },
                  children: "OUR CULTURE"
                })
              ]
            })
          })
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "bg-[#fff]",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "lg:max-w-[1140px] block m-auto",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "w-full md:flex lg:flex ",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "lg:pt-20  lg:w-3/6 md:w-3/6 py-5 md:py-20  w-full",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                      className: "text-[#000] m-5 text:text-2xl lg:text-4xl  mb-5",
                      children: "We use unique, custom-built tools to give us the edge"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                      className: "py-5 m-5",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
                        className: "m-auto text-sm text-gray-400",
                        children: [
                          "If you are good at something and want to check your skills, feel free to apply for your favorite position on",
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                          " ",
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                            href: "#",
                            className: "text-blue-500",
                            children: " hr@weenggs.com"
                          }),
                          "  "
                        ]
                      })
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "lg:pt-20 py-5 md:py-20 p-10  lg:w-3/6 md:w-3/6 ",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_accessible_accordion.Accordion, {
                    allowMultipleExpanded: !1,
                    className: "w-full",
                    children: carrier.map((item, index2) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "m-5 border-2",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_accessible_accordion.AccordionItem, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_accessible_accordion.AccordionItemHeading, {
                            onClick: (e) => {
                              handlechange(e, index2);
                            },
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_accessible_accordion.AccordionItemButton, {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                                  className: "flex m-3 justify-between ",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                                      className: "",
                                      children: item.brand
                                    }),
                                    ind == index2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                                      className: "fa fa-caret-up text-green-400 mr-2"
                                    }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                                      className: "fa fa-caret-right mr-2"
                                    })
                                  ]
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", {})
                              ]
                            })
                          }),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_accessible_accordion.AccordionItemPanel, {
                            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "m-auto p-2 text-sm text-gray-400",
                              children: item.desc
                            })
                          })
                        ]
                      })
                    }, index2))
                  })
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "bg-blue-100 border-l-4 mb-4 border-[#659bbc] text-[#659bbc]  p-4",
              role: "alert",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-[16px] text-[#659bbc]",
                  children: "Remember"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-sm",
                  children: "Work from office is the first preference but developer can still apply for WFH position as well. Previous work record and document verification is required while interviewing."
                })
              ]
            })
          ]
        })
      })
    ]
  });
}, careers_default = Careers;

// app/routes/contact.jsx
var contact_exports = {};
__export(contact_exports, {
  default: () => contact_default
});
var import_react19 = require("react"), import_google_maps_react = require("google-maps-react");

// app/content/contact.ts
var dataContact = [
  {
    ref: "skype:weenggs",
    logo: "fa fa-skype text-white w-auto text-xl p-2",
    css: "bg-[#28c9ff] w-10 m-auto transition duration-500 ease-in-out transform hover:-translate-y-1  hover:scale-110  rounded-lg"
  },
  {
    ref: "https://www.facebook.com/Weenggs",
    logo: "fa fa-facebook-f text-white text-xl w-auto  p-2",
    css: "bg-[#2b34e5] w-10 m-auto font-medium  transition duration-500 ease-in-out transform hover:-translate-y-1  hover:scale-110  rounded-lg"
  },
  {
    ref: "https://www.linkedin.com/company/weenggs-technology",
    logo: "fa fa-linkedin-square text-white text-xl w-auto p-2",
    css: "bg-[#1d8aaf] w-10 m-auto font-medium  transition duration-500 ease-in-out transform hover:-translate-y-1  hover:scale-110  rounded-lg"
  },
  {
    ref: "https://api.whatsapp.com/send?phone=919904076120&text=Hey+there..",
    logo: "fa fa-whatsapp text-white text-xl w-auto m-auto  p-2",
    css: "bg-[#3fee50] w-10 m-auto font-medium  transition duration-500 ease-in-out transform hover:-translate-y-1  hover:scale-110  rounded-lg"
  }
];

// app/routes/contact.jsx
var import_jsx_runtime = require("react/jsx-runtime"), Contact = () => ((0, import_react19.useEffect)(() => {
  document.title = "Contact | Weenggs Technology";
}, []), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: "h-full w-full bg-no-repeat bg-center bg-cover bg-[url('https://www.weenggs.com/wp-content/uploads/2019/08/contact-us_1.png')]",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "z-0 flex",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          className: "lg:h-[320px]  lg:w-[990px] block m-auto",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "lg:h-[320px] m-auto flex text-center flex-col justify-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                className: "text-2xl pt-10 lg:text-5xl md:text-5xl  text-center font-bold text-[#ffffff] z-30",
                children: "Contact Us"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "text-center mb-10 font-medium lg:text-xl text-[#ffffff] text-lg m-5",
                children: "connect with us"
              })
            ]
          })
        })
      })
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      className: "bg-[#fff]",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        className: "lg:max-w-[1140px] block m-auto",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "w-full md:flex lg:flex p-10",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "lg:py-20 mx-10 lg:w-3/6 md:w-3/6 m-10 w-auto",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                  className: "uppercase text-xs pb-10",
                  style: { letterSpacing: "7px" },
                  children: "Contact"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                  className: "font-medium text-5xl text-[#0e0d0d]",
                  children: "For any inquiries please email us at"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "text-green-400 py-10 font-bold",
                  children: "hr [at] weenggs.com"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "flex lg:grid-cols-4 ",
                  children: dataContact.map((item, ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    className: item.css,
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                      class: item.logo
                    })
                  }, ind))
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "lg:py-20   lg:w-3/6 md:w-3/6 ",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                class: "mapouter",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  class: "gmap_canvas",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
                    style: {
                      border: 0,
                      width: "100% ",
                      height: 400
                    },
                    class: "gmap_iframe",
                    width: "100%",
                    frameborder: "0",
                    scrolling: "no",
                    marginheight: "0",
                    marginwidth: "0",
                    src: "https://maps.google.com/maps?width=600&height=400&hl=en&q=weenggs&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  })
                })
              })
            })
          ]
        })
      })
    })
  ]
})), contact_default = Contact;

// app/routes/about.jsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default
});
var import_react20 = require("react");

// app/content/about.ts
var data = [
  {
    logo: "fa fa-user-circle ",
    head: "Hear what our clients have to say about us",
    desc: " Nothing makes us happier than hearing how happy you are with us!",
    path: "",
    btn: " Client Testimonials"
  },
  {
    logo: "fa fa-paint-brush",
    head: "Latest additions to our Portfolio",
    desc: "We\u2019ve helped various companies to achieve great results.",
    path: "/portfolio",
    btn: "Our Works"
  },
  {
    logo: "fa fa-code",
    head: "Know what we do best",
    desc: " We are masters of using modern technology to develop digital solutions for you!",
    path: "/service/desktop-app-development/",
    btn: "Our services"
  }
], data1 = [
  {
    name: "Vision",
    desc: "To become a trusted global high-quality solution provider"
  },
  {
    name: "Mission",
    desc: "Our mission is to deliver market-defining high-quality solutions for mobile apps and software that create value and reliable competitive advantage for our clients around the world."
  },
  {
    name: "OUR SKILLS",
    desc: "iPhone App Development, Android App Development, Web App Development, PHP, C#, Swift, Kotlin, Java, HTML5, CSS3, Desktop Software, UI/UX Design"
  }
];

// app/routes/about.jsx
var import_jsx_runtime = require("react/jsx-runtime"), About = () => ((0, import_react20.useEffect)(() => {
  document.title = "About | Weenggs Technology";
}, []), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      class: "h-full w-full  bg-no-repeat bg-center bg-cover bg-portfolio ",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        class: "md:bg-[#060606] opacity-90 z-0 flex",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          class: "lg:h-[320px]  lg:max-w-[990px] block m-auto",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            class: "lg:h-[320px] m-auto flex text-center flex-col justify-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                class: "text-1xl pt-10 lg:text-5xl md:text-5xl  text-center font-weight: 400 text-[#ffffff] z-30",
                children: "About Us"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                class: "text-center mb-10 font-sm lg:text-xs  uppercase text-[#a5a5a5]  m-5",
                style: { letterSpacing: "5px" },
                children: "WE + ENNGGS"
              })
            ]
          })
        })
      })
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      class: "bg-[#f7f7f7]",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        class: "lg:max-w-[1140px] block m-auto",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          class: "w-full md:flex lg:flex  p-5",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              class: "lg:pt-20  lg:w-3/6 md:w-3/6 py-10  w-full",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                  class: "text-[black] m-5 text-center lg:text-5xl text-2xl font-weight: 400 mb-5",
                  children: "Who are Weenggs?"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                  class: "py-5 text-sm m-5 ",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
                      class: "m-auto text-md text-gray-500",
                      children: "The word Weenggs is a portmanteau- it is derived from combining We and Engineers and is pronounced as Wings!"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
                      class: "m-auto text-md my-5 text-gray-500",
                      children: "We + Engineers = Weenggs"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
                      class: "m-auto text-md my-5 text-gray-500",
                      children: "We Engineers, are flying high with the wings of modern technology!"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
                      class: "m-auto text-md my-5 text-gray-500",
                      children: "Weenggs is a problem-solving company with almost a decade of experience in crunching clever codes, crafting intricate web and mobile applications and creating beautiful designs."
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
                      class: "m-auto text-md my-5 text-gray-500",
                      children: "We love modern technology and pride ourselves in using the latest technology and clever strategies to provide ridiculously awesome digital solutions \u2014 and deliver exceptional results, every time!"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
                      class: "m-auto text-md my-5 text-gray-500",
                      children: "Our team of techno geeks are up-to-date in providing top notch service to all our clients. Always a step ahead of the market trades, we keep upgrading our skills and services with the latest tools and technology. Anything new, we got it covered!"
                    })
                  ]
                })
              ]
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              class: "lg:pt-20  m-auto py-10  md:w-2/6 animate-pulse border-black border-[1px] md:rounded-full",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                src: "https://www.weenggs.com/wp-content/uploads/2019/07/about-us_2-1024x683.png",
                alt: ""
              })
            })
          ]
        })
      })
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      class: "h-full w-full  bg-no-repeat bg-center ",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        class: "bg-[#fff] opacity-90 z-0 flex",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          class: "lg:max-w-[990px] block m-auto",
          children: data1.map((item, ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            class: "m-auto flex text-center flex-col justify-center",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                class: "text-2xl pt-10 md:text-3xl  text-center font-weight:400 text-[#000] z-30",
                children: item.name
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                class: "text-center mb-10  text-sm   text-[#a5a5a5]-400  m-10",
                children: [
                  item.desc,
                  " "
                ]
              })
            ]
          }, ind))
        })
      })
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      class: "bg-[#f8f9fa]",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
        class: " lg:max-w-[990px] block m-auto",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          class: "lg:pt-10 pt-10 h-full ",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            class: "container  m-auto my-5",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              class: "grid lg:grid-cols-3  lg:max-w-[990px] m-auto ",
              children: data.map((item, ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                class: ` lg:max-w-[300px] bg-white h-auto p-[20px] mb-20 transition duration-500 ease-in-out transform 
                            hover:-translate-y-1 hover:scale-75  rounded-lg  `,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    class: "flex justify-center border-gray-300 w-20 text-center m-auto  border-[1px] rounded-[60%] bg-green-200",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                      class: item.logo,
                      style: { fontSize: "40px" },
                      children: " "
                    })
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                    class: "text-center p-5 font-medium ",
                    children: item.head
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    class: "text-[#999999] p-5 text-sm lg:text-md text-center",
                    children: item.desc
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                    class: "bg-red-700 mt-10  hrover:bg-green m-auto flex font-semibold text-white text-sm align-center uppercase py-3 px-6 rounded-full",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
                      href: item.path && item.path,
                      children: [
                        " ",
                        item.btn,
                        "  "
                      ]
                    })
                  })
                ]
              }, ind))
            })
          })
        })
      })
    })
  ]
})), about_default = About;

// app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
var import_react23 = require("react");

// app/content/frame.ts
var frame = [
  {
    name: "Mobile Application",
    logo: "https://www.weenggs.com/wp-content/uploads/2019/01/service_icon_2-1.png",
    desc: " Turning your ideas into working applications, we create mind-blowing Android and iOS mobile apps that are robust, offer easy navigation and drive results. Our 100+ personal and enterprise level applications are used in more than 20 countries around the world."
  },
  {
    name: "WEB DESIGNING",
    logo: "https://www.weenggs.com/wp-content/uploads/2019/01/service_icon_3-1.png",
    desc: " We are the one of the most effective Web Design Companies Powerful web design that will out-perform your strongest competitors. Color scheme, layout, sitemap, and style. We will bring your brand to life with a one of a kind masterpiece, built just for you."
  },
  {
    name: "WEB DEVELOPMENT",
    logo: "https://www.weenggs.com/wp-content/uploads/2019/01/service_icon_4-1.png",
    desc: "Offering excellent user-experience, we code some artistic, professional, and easy-to-use websites, that help turn your visitors into loyal customers. We can develop, design or even redesign your existing website for you. We offer website maintenance and SEO services as well."
  }
], brands = [
  {
    heading: "We Are Industry Veterans",
    desc: "With almost a decade worth of experience on the table, we know exactly what we\u2019re doing"
  },
  {
    heading: "We Listen To You",
    desc: "No matter what happens but listening and understanding your needs is priority No. 1"
  },
  {
    heading: "We Follow Proven Processes",
    desc: "Following strategic and proven processes, we deliver high-quality work, everytime!"
  },
  {
    heading: "We Are On Top Of The Game",
    desc: "Not bragging but we are pretty good at what we do"
  },
  {
    heading: "We Are Always There For You",
    desc: "Whatever you need, we are a phone call, email, text away"
  }
];
var datasubject = [
  {
    subject: "Android",
    marks: "60%"
  },
  {
    subject: "Ios App",
    marks: "95%"
  },
  {
    subject: "html 5",
    marks: "99%"
  },
  {
    subject: "Php",
    marks: "91%"
  },
  {
    subject: "Sql",
    marks: "95%"
  },
  {
    subject: "Sass",
    marks: "91%"
  }
], details = [
  {
    title: "  Tushar has help me make my app even better with his suggestions. His team has provided more than I expected and can not say enough good things about them. I had 67 proposals but selected Weenggs Technology because they had done cell phone apps in the past. He was not the cheapest nor the most expensive.",
    image: "//www.weenggs.com/wp-content/uploads/2019/07/placeholder-profile-150x150.png",
    name: "William M.",
    link: "CEO at hoaviol.com"
  },
  {
    title: " Tushar worked closely with me on this very complex Project, Working with him was an excellent experience. I needed some changes during the project, which he accepted and was very flexible to these adaptions. It was very pleasant to work with him. Communication was excellent and I would definitely work with him again.",
    image: "//www.weenggs.com/wp-content/uploads/2019/07/image-1-150x150.png",
    name: "Arash M.",
    link: "MBA Executive Candidate at AGSM, UNSW"
  },
  {
    title: "A great team of developers with excellent communication and attention to detail. Very glad I worked with Hitesh & team Weenggs and will do so with other apps. ",
    image: "//www.weenggs.com/wp-content/uploads/2019/07/steve-150x150.png",
    name: "Steaven G.",
    link: "CEO, ContractorForeman.com"
  },
  {
    title: "Tushar and his team are professional, courteous, and expert programmers. Our team at Midtrade are quite happy with their work!",
    image: "//www.weenggs.com/wp-content/uploads/2019/07/andy-bonn-150x150.png",
    name: "Andy B.",
    link: "CEO of MidTrade Inc"
  }
], client = [
  "https://www.weenggs.com/wp-content/uploads/2019/07/mu-logo-2-1.png",
  "https://www.weenggs.com/wp-content/uploads/2019/07/vidioowhite-1.png",
  "https://www.weenggs.com/wp-content/uploads/2019/08/Mid-Trade.png",
  "https://www.weenggs.com/wp-content/uploads/2019/08/worx-sr.png",
  "https://www.weenggs.com/wp-content/uploads/2019/07/contractor-1.png",
  "https://www.weenggs.com/wp-content/uploads/2019/07/spenifex-1.png",
  "https://www.weenggs.com/wp-content/uploads/2019/07/Prolong-pro.png"
];

// app/assets/onetwo.png
var onetwo_default = "/build/_assets/onetwo-5A2P6UAD.png";

// app/assets/tech.png
var tech_default = "/build/_assets/tech-H72BTXPA.png";

// app/routes/index.jsx
var import_carousel = __toESM(require("nuka-carousel/lib/carousel"));

// app/ImageViewer/index.jsx
var import_react21 = require("react"), import_jsx_runtime = require("react/jsx-runtime"), Slider = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {}), ImageViewer_default = Slider;

// app/ProgressLine/Progress.jsx
var import_react22 = require("react");
var import_jsx_runtime = require("react/jsx-runtime"), ProgressLine = ({
  label,
  backgroundColor = "#e5e5e5",
  borderRadius = "10px",
  visualParts = [
    {
      percentage: "0%",
      color: "white"
    }
  ]
}) => {
  let [widths, setWidths] = (0, import_react22.useState)(
    visualParts.map(() => 0)
  );
  return (0, import_react22.useEffect)(() => {
    requestAnimationFrame(() => {
      setWidths(
        visualParts.map((item) => item.percentage)
      );
    });
  }, [visualParts]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "text-sm text-gray-500",
        children: label
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "progressVisualFull",
        style: {
          backgroundColor,
          borderRadius
        },
        children: visualParts.map((item, index2) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            style: {
              width: widths[index2],
              height: "20px",
              alignItems: "center",
              borderRadius: "10px",
              backgroundColor: item.color
            },
            className: "progressVisualPart",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className: "flex text-sm float-right text-white mr-2",
              children: `${item.percentage}`
            })
          }, index2)
        }))
      })
    ]
  });
}, Progress_default = ProgressLine;

// app/routes/index.jsx
var import_jsx_runtime = require("react/jsx-runtime"), Index = () => {
  let [currentImage, setCurrentImage] = (0, import_react23.useState)(0), [isViewerOpen, setIsViewerOpen] = (0, import_react23.useState)(!1), openImageViewer = (0, import_react23.useCallback)((index2) => {
    setCurrentImage(index2), setIsViewerOpen(!0);
  }, []), closeImageViewer = () => {
    setCurrentImage(0), setIsViewerOpen(!1);
  };
  return (0, import_react23.useEffect)(() => {
    document.title = "Weenggs Technology";
  }, []), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "h-screen w-full bg-no-repeat bg-center m-auto bg-cover bg-[url('https://www.weenggs.com/wp-content/uploads/2019/08/bg.jpg')]",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "bg-[#7f818b] opacity-80  flex",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
            className: "h-[100vh] justify-center items-center lg:h-[100vh] p-4 lg:w-[1140px] flex m-auto",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: " text-center flex-col justify-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                  className: "text-2xl font-sans lg:text-4xl md:text-4xl mb-10  text-center  text-[#ffffff]",
                  children: "The epicenter where latest technology meets creativity!"
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "text-center mb-10 font-medium lg:text-xl text-sm text-[#e9e5e5] text-md ",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      children: "A team of professionals that help you nurture & grow your business!"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      children: "Design & Develop Stunning Websites"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      children: "Code some Kick-ass Mobile Applications"
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      children: "Provide 24/7 Customer Service"
                    })
                  ]
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  className: "bg-red-700  hrover:bg-green m-auto flex font:semibold text-sm text-white align-center uppercase py-3 px-6 rounded-full",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                    href: "/request-a-quote",
                    children: "LET'S GET STARTED"
                  })
                })
              ]
            })
          })
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "bg-[#f8f9fa]",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          className: " py-20  lg:max-w-[1140px] p-10 block m-auto",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-center text-[15px] font-weight: 700; text-[#999] ",
                children: "YOUR NOT-SO-AVERAGE"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                className: "text-sm  md:text-4xl mb-10 text-center  text-[#b52332]",
                children: "MOBILE APPS AND WEBSITE DEVELOPERS"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "text-center mb-10  lg:text-sm text-[#595959] text-sm m-5",
                children: "Inspired by art and technology, we integrate designs and smart development to create some of the most user-centric websites and mobile applications. We are all about bringing your unique ideas to life and delivering success."
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "container  m-auto my-5",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "grid lg:grid-cols-3 w-auto  m-auto ",
                  children: frame.map((list, index2) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: `lg:w-[300px] md:my-5 bg-white h-auto m-[10px] p-[10px] mb-0 transition duration-500 ease-in-out transform 
				  hover:-translate-y-1 hover:scale-110  rounded-lg  `,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "flex justify-center  animate-bounce",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                          className: "mb-4 text-center m-auto flex",
                          width: "80",
                          height: "80",
                          src: list.logo,
                          alt: "Weenggs Technology"
                        })
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                        className: "text-center p-5 text-md uppercase",
                        children: list.name
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                        className: "text-[#999999] text-sm text-center hover:animate-pulse",
                        children: [
                          list.desc,
                          " "
                        ]
                      })
                    ]
                  }, index2))
                })
              })
            ]
          })
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "bg-[#bf1e2e]",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          className: "lg:max-w-[1140px] p-10 block m-auto",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "py-20",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-center text-[16px] text-[#e5e2e2] ",
                children: "THE PERFECT BLEND OF"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                className: "  text-[15px] md:text-3xl mb-10 text-center  text-[#fff]",
                children: "CREATIVE-PROWESS, TECHNOLOGY AND EXTRAORDINARY SERVICE!"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "text-center mb-10  text-sm text-[#fff]  ",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "leading-7  text-[#d3d3d3]",
                  children: "We are a team of experienced strategists, designers, developers and project managers. With get shit done attitude, we can accomplish any challenge out there Our in-depth understanding of futuristic technology is what brought us together and it\u2019s what keeps us moving forward. Leaving the extra-mile way behind, we happen to offer exceptional services to all our clients, including web development, mobile app development, UX design and more."
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "text-center ",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                  className: "bg-[#fff] md:mt-10 font-semibold text-center tracking-[1px] py-3 px-6 rounded-full text-xs text-red-600 capitalize",
                  children: "TELL US WHAT YOU NEED AND WE WILL MAKE THE MAGIC HAPPEN!"
                })
              })
            ]
          })
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "bg-[#fff]",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          className: "lg:max-w-[1140px] pt-[100px] block m-auto",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "w-full md:flex lg:flex ",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "lg:pt-20  lg:w-3/6 md:w-3/6 px-4 w-full",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                    className: "text-[#999] text-sm font-bold ",
                    children: "REASONS WHY TOP BRANDS"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                    className: "text-[#bf1e2e] lg:text-4xl md:text-2xl font-bold mb-5",
                    children: "CHOOSE US!"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
                    className: "py-5",
                    children: brands.map((listdata, index2) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
                      className: "flex p-1",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
                          className: "fa m-1",
                          children: "\uF087"
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "ml-1",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                              className: "mb-2 text-base",
                              children: listdata.heading
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className: "m-auto text-gray-500 text-sm",
                              children: listdata.desc
                            })
                          ]
                        })
                      ]
                    }, index2))
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "lg:pt-20  pt-5 px-5 lg:w-3/6 md:w-3/6 ",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                  className: "animate-pulse",
                  src: onetwo_default,
                  alt: "logo"
                })
              })
            ]
          })
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "bg-[#fff]",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          className: "lg:pb-20 lg:max-w-[1140px] block m-auto",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "w-full md:flex lg:flex ",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "lg:py-20 p-10 lg:w-3/6 md:w-3/6  w-full",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                    className: "text-[#999] text-sm  ",
                    children: "TECHNOLOGIES WE ARE VERY SAVVY"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                    className: "text-[#bf1e2e] lg:font-weight:600; lg:text-4xl md:text-2xl mb-5 ",
                    children: "WITH OUR SKILLS"
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "py-5",
                    children: datasubject && datasubject.map((data3, ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress_default, {
                      label: data3.subject,
                      visualParts: [
                        {
                          percentage: data3.marks,
                          color: "#bf1e2e"
                        }
                      ]
                    }, ind))
                  })
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "lg:pt-36 hidden md:block text-center py-20 lg:full md:w-3/6 ",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                  className: "lg:hover:translate-y-10 transition duration-300 ",
                  src: tech_default,
                  alt: "logo"
                })
              })
            ]
          })
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "bg-[#f8f9fa]",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          className: " lg:max-w-[1140px] block m-auto",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "py-[100px] h-full ",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-center  text-[#999] ",
                children: "OUR"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                className: "text-2xl lg:text-4xl md:text-4xl mb-10 text-center  text-[#b52332]",
                children: "TESTIMONIALS"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "container  m-auto my-5",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "flex flex-col w-full p-5  ",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_carousel.default, {
                    autoplay: !0,
                    className: "slider-container  ",
                    children: details.map((items, ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                      className: "grid grid-cols-1  p-5  w-full  bg-[#fff] h-auto  rounded-lg ",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className: "text-[#595959] text-sm mb-5  h-[150px] overflow-x-auto ",
                          children: items.title
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                          className: "flex w-fit ",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                              className: "mx-4 m-auto rounded-full mr-2",
                              width: "80",
                              height: "80",
                              src: items.image,
                              alt: "Weenggs Technology"
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                              className: "text-sm text-[#4169e2] m-auto p-2",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                                  className: "",
                                  children: items.name
                                }),
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                                  href: "https://hoaviol.com",
                                  className: "flex-wrap",
                                  children: items.link
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }, ind))
                  })
                })
              })
            ]
          })
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "bg-[#fff]",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          className: "lg:max-w-[1140px] justify-center block m-auto md:my-[100px] ",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "lg:pt-30 pt-30 p-10 h-full ",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-center  text-[#999] ",
                children: "OUR"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
                className: "text-2xl lg:text-4xl md:text-4xl text-center  text-[#b52332]",
                children: "CLIENTS"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "text-center text-sm text-[#999] ",
                children: "Some of the many clients we've helped achieve great results"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "container my-5 m-auto",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "flex flex-col w-full h-fit",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "slider-container max-w[1140px] ",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_carousel.default, {
                      wrapAround: !0,
                      autoplay: !0,
                      cellAlign: "center",
                      children: client && client.map((citem, ind) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className: "h-auto   m-auto ",
                        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                          className: " m-auto",
                          src: citem,
                          alt: "img-not-found"
                        })
                      }, ind))
                    })
                  })
                })
              })
            ]
          })
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageViewer_default, {})
    ]
  });
}, routes_default = Index;

// app/routes/$.jsx
var __exports = {};
__export(__exports, {
  default: () => __default
});
var import_react24 = require("react"), import_jsx_runtime = require("react/jsx-runtime"), PageNotFound = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
    className: "grid place-items-center overflow-hidden relative w-full top-[20%]",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
        width: "192px",
        height: "192px",
        viewBox: "0 0 487 397",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
            id: "#664500ff",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                fill: "#664500",
                opacity: "1.00",
                d: " M 125.15 16.12 C 139.13 11.83 151.30 2.40 166.01 0.58 C 176.81 0.61 187.74 5.55 194.81 13.78 C 203.66 24.74 215.51 32.70 224.31 43.69 C 232.08 52.09 240.03 61.91 240.02 73.97 C 241.69 89.97 224.88 103.68 209.54 100.58 C 203.06 99.10 196.73 95.70 192.99 90.05 C 185.59 77.32 174.40 67.31 163.12 58.07 C 144.68 65.62 126.24 73.18 107.86 80.87 C 100.75 83.90 92.73 86.61 85.07 83.93 C 73.09 80.99 64.52 68.51 66.13 56.29 C 67.28 46.99 73.56 38.94 81.80 34.71 C 95.95 27.83 111.01 23.03 125.15 16.12 Z"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                fill: "#664500",
                opacity: "1.00",
                d: " M 151.40 70.30 C 166.72 67.43 182.20 81.51 180.97 97.02 C 181.92 113.39 163.55 127.28 148.09 121.87 C 136.32 119.13 127.83 106.95 128.99 94.97 C 129.14 82.71 139.33 71.86 151.40 70.30 Z"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                fill: "#664500",
                opacity: "1.00",
                d: " M 331.41 102.42 C 340.97 101.23 350.90 99.67 360.01 103.96 C 368.87 107.61 373.82 117.03 375.20 126.09 C 375.43 137.92 367.33 149.80 355.58 152.68 C 345.76 155.08 335.24 153.39 325.63 156.77 C 332.93 171.61 321.16 190.13 305.44 192.57 C 288.63 195.70 272.83 179.62 274.63 162.90 C 266.12 164.59 257.50 164.79 248.93 166.06 C 234.44 168.24 218.39 158.26 217.12 142.99 C 214.88 129.44 224.92 115.49 238.53 113.49 C 269.64 110.95 300.65 108.19 331.41 102.42 Z"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
                fill: "#664500",
                opacity: "1.00",
                d: " M 140.43 166.34 C 146.61 164.73 152.95 166.75 159.00 168.05 C 189.43 176.46 219.41 186.43 249.25 196.74 C 274.22 205.21 298.65 215.24 323.84 223.06 C 361.41 236.24 399.59 247.46 437.52 259.49 C 447.44 262.27 455.19 271.13 456.81 281.29 C 459.37 293.92 450.03 306.50 438.17 310.15 C 432.39 311.63 426.23 311.15 420.55 309.41 C 357.03 290.05 293.76 269.74 231.59 246.37 C 202.47 237.07 173.77 226.18 144.08 218.91 C 130.71 218.41 118.43 206.70 118.95 193.02 C 118.09 180.33 128.10 168.58 140.43 166.34 Z"
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
            id: "#ffcc4dff",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
              fill: "#ffcc4d",
              opacity: "1.00",
              d: " M 194.81 13.78 C 199.89 12.75 205.11 12.91 210.22 13.65 C 227.55 15.29 244.99 16.80 261.92 21.11 C 292.14 29.18 323.13 35.69 351.35 49.65 C 367.30 58.37 380.20 71.41 394.16 82.83 C 419.59 107.89 445.00 133.52 463.91 164.07 C 473.34 180.93 478.81 199.81 481.10 218.94 C 484.48 230.59 485.51 242.64 487.00 254.63 L 487.00 259.37 C 485.54 280.73 479.33 302.57 464.98 318.97 C 454.04 332.59 437.62 340.12 421.35 345.31 C 395.78 351.94 373.99 367.56 350.07 378.11 C 328.69 388.21 305.58 393.99 282.20 397.00 L 248.80 397.00 C 231.67 394.90 214.64 391.41 198.78 384.40 C 212.52 388.32 228.37 379.56 231.68 365.53 C 234.56 355.19 230.66 344.45 223.21 337.10 C 253.20 337.72 283.07 333.81 312.99 332.14 C 326.63 331.41 338.48 318.82 337.54 305.00 C 338.11 288.79 321.63 275.95 305.99 278.76 C 254.74 284.50 203.17 283.44 151.80 286.62 C 150.23 270.61 146.28 254.84 140.22 239.93 C 137.53 233.18 133.48 226.62 127.13 222.77 C 116.14 215.27 99.79 218.38 91.99 229.02 C 85.84 236.79 84.80 248.04 88.95 256.96 C 92.64 264.84 96.28 273.12 96.70 281.92 C 95.58 288.07 90.61 292.52 88.25 298.17 C 74.65 281.23 63.32 262.48 48.23 246.76 C 27.95 224.47 6.57 200.71 0.00 170.36 L 0.00 155.72 C 2.98 141.51 3.92 126.78 9.08 113.09 C 11.49 105.67 15.86 99.14 19.00 92.03 C 25.27 76.60 36.27 63.59 48.30 52.30 C 66.46 36.41 87.47 22.73 111.22 17.17 C 115.77 15.98 120.49 16.10 125.15 16.12 C 111.01 23.03 95.95 27.83 81.80 34.71 C 73.56 38.94 67.28 46.99 66.13 56.29 C 64.52 68.51 73.09 80.99 85.07 83.93 C 92.73 86.61 100.75 83.90 107.86 80.87 C 126.24 73.18 144.68 65.62 163.12 58.07 C 174.40 67.31 185.59 77.32 192.99 90.05 C 196.73 95.70 203.06 99.10 209.54 100.58 C 224.88 103.68 241.69 89.97 240.02 73.97 C 240.03 61.91 232.08 52.09 224.31 43.69 C 215.51 32.70 203.66 24.74 194.81 13.78 M 151.40 70.30 C 139.33 71.86 129.14 82.71 128.99 94.97 C 127.83 106.95 136.32 119.13 148.09 121.87 C 163.55 127.28 181.92 113.39 180.97 97.02 C 182.20 81.51 166.72 67.43 151.40 70.30 M 331.41 102.42 C 300.65 108.19 269.64 110.95 238.53 113.49 C 224.92 115.49 214.88 129.44 217.12 142.99 C 218.39 158.26 234.44 168.24 248.93 166.06 C 257.50 164.79 266.12 164.59 274.63 162.90 C 272.83 179.62 288.63 195.70 305.44 192.57 C 321.16 190.13 332.93 171.61 325.63 156.77 C 335.24 153.39 345.76 155.08 355.58 152.68 C 367.33 149.80 375.43 137.92 375.20 126.09 C 373.82 117.03 368.87 107.61 360.01 103.96 C 350.90 99.67 340.97 101.23 331.41 102.42 M 140.43 166.34 C 128.10 168.58 118.09 180.33 118.95 193.02 C 118.43 206.70 130.71 218.41 144.08 218.91 C 173.77 226.18 202.47 237.07 231.59 246.37 C 293.76 269.74 357.03 290.05 420.55 309.41 C 426.23 311.15 432.39 311.63 438.17 310.15 C 450.03 306.50 459.37 293.92 456.81 281.29 C 455.19 271.13 447.44 262.27 437.52 259.49 C 399.59 247.46 361.41 236.24 323.84 223.06 C 298.65 215.24 274.22 205.21 249.25 196.74 C 219.41 186.43 189.43 176.46 159.00 168.05 C 152.95 166.75 146.61 164.73 140.43 166.34 Z"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
            id: "#f5900cff",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
              fill: "#f5900c",
              opacity: "1.00",
              d: " M 91.99 229.02 C 99.79 218.38 116.14 215.27 127.13 222.77 C 133.48 226.62 137.53 233.18 140.22 239.93 C 146.28 254.84 150.23 270.61 151.80 286.62 C 203.17 283.44 254.74 284.50 305.99 278.76 C 321.63 275.95 338.11 288.79 337.54 305.00 C 338.48 318.82 326.63 331.41 312.99 332.14 C 283.07 333.81 253.20 337.72 223.21 337.10 C 230.66 344.45 234.56 355.19 231.68 365.53 C 228.37 379.56 212.52 388.32 198.78 384.40 C 188.67 380.30 179.92 373.37 171.19 366.91 C 163.15 372.96 152.16 375.12 142.69 371.30 C 134.77 367.82 127.87 362.34 119.77 359.20 C 112.70 356.40 105.56 353.31 99.91 348.09 C 86.79 335.57 82.49 315.17 88.25 298.17 C 90.61 292.52 95.58 288.07 96.70 281.92 C 96.28 273.12 92.64 264.84 88.95 256.96 C 84.80 248.04 85.84 236.79 91.99 229.02 Z"
            })
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
        className: "my-8 text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#355acb] to-[#2bcc69] animate-rainbow font-semibold",
        children: "404 Error"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
        className: "text-3xl dark:text-zinc-300",
        children: "Sorry, it doesn't exist."
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
        href: "/",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
          className: "dark:bg-[#161923] bg-zinc-200 hover:bg-zinc-300 hover:dark:bg-[#1e212e] transition-colors rounded-xl p-3",
          children: "Go back to homepage"
        })
      })
    ]
  })
}), __default = PageNotFound;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "579c1388", entry: { module: "/build/entry.client-RA7GNJAQ.js", imports: ["/build/_shared/chunk-V64AHJNU.js", "/build/_shared/chunk-CGICKG2D.js", "/build/_shared/chunk-JWP4XJYM.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TMEZ7BJD.js", imports: ["/build/_shared/chunk-ZL4Q5B4T.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-53EYVVLL.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-MOXZYTIP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/careers": { id: "routes/careers", parentId: "root", path: "careers", index: void 0, caseSensitive: void 0, module: "/build/routes/careers-VN4TWPZH.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-J5UKNSBY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-R6N7A3UV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/portfolio": { id: "routes/portfolio", parentId: "root", path: "portfolio", index: void 0, caseSensitive: void 0, module: "/build/routes/portfolio-Q7M67J5R.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/request-a-quote": { id: "routes/request-a-quote", parentId: "root", path: "request-a-quote", index: void 0, caseSensitive: void 0, module: "/build/routes/request-a-quote-HC5XWRSI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/service/android-app-development": { id: "routes/service/android-app-development", parentId: "root", path: "service/android-app-development", index: void 0, caseSensitive: void 0, module: "/build/routes/service/android-app-development-DWYES6XR.js", imports: ["/build/_shared/chunk-RXSRA6UE.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/service/custom-web-development": { id: "routes/service/custom-web-development", parentId: "root", path: "service/custom-web-development", index: void 0, caseSensitive: void 0, module: "/build/routes/service/custom-web-development-QDVCN6PR.js", imports: ["/build/_shared/chunk-RXSRA6UE.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/service/desktop-app-development": { id: "routes/service/desktop-app-development", parentId: "root", path: "service/desktop-app-development", index: void 0, caseSensitive: void 0, module: "/build/routes/service/desktop-app-development-2UC6N7CX.js", imports: ["/build/_shared/chunk-RXSRA6UE.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/service/index": { id: "routes/service/index", parentId: "root", path: "service", index: !0, caseSensitive: void 0, module: "/build/routes/service/index-7JK4NZ47.js", imports: ["/build/_shared/chunk-RXSRA6UE.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/service/iphone-app-development": { id: "routes/service/iphone-app-development", parentId: "root", path: "service/iphone-app-development", index: void 0, caseSensitive: void 0, module: "/build/routes/service/iphone-app-development-GVOG6L2N.js", imports: ["/build/_shared/chunk-RXSRA6UE.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-579C1388.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/service/android-app-development": {
    id: "routes/service/android-app-development",
    parentId: "root",
    path: "service/android-app-development",
    index: void 0,
    caseSensitive: void 0,
    module: android_app_development_exports
  },
  "routes/service/desktop-app-development": {
    id: "routes/service/desktop-app-development",
    parentId: "root",
    path: "service/desktop-app-development",
    index: void 0,
    caseSensitive: void 0,
    module: desktop_app_development_exports
  },
  "routes/service/custom-web-development": {
    id: "routes/service/custom-web-development",
    parentId: "root",
    path: "service/custom-web-development",
    index: void 0,
    caseSensitive: void 0,
    module: custom_web_development_exports
  },
  "routes/service/iphone-app-development": {
    id: "routes/service/iphone-app-development",
    parentId: "root",
    path: "service/iphone-app-development",
    index: void 0,
    caseSensitive: void 0,
    module: iphone_app_development_exports
  },
  "routes/request-a-quote": {
    id: "routes/request-a-quote",
    parentId: "root",
    path: "request-a-quote",
    index: void 0,
    caseSensitive: void 0,
    module: request_a_quote_exports
  },
  "routes/service/index": {
    id: "routes/service/index",
    parentId: "root",
    path: "service",
    index: !0,
    caseSensitive: void 0,
    module: service_exports
  },
  "routes/portfolio": {
    id: "routes/portfolio",
    parentId: "root",
    path: "portfolio",
    index: void 0,
    caseSensitive: void 0,
    module: portfolio_exports
  },
  "routes/careers": {
    id: "routes/careers",
    parentId: "root",
    path: "careers",
    index: void 0,
    caseSensitive: void 0,
    module: careers_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
