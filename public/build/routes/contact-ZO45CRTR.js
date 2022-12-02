import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-MLBUYSNZ.js";

// app/routes/contact.jsx
var import_react = __toESM(require_react());

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
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Contact = () => {
  (0, import_react.useEffect)(() => {
    document.title = "Contact | Weenggs Technology";
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-full w-full bg-no-repeat bg-center bg-cover bg-[url('https://www.weenggs.com/wp-content/uploads/2019/08/contact-us_1.png')]",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "z-0 flex",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
            className: "lg:h-[320px]  lg:w-[990px] block m-auto",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "lg:h-[320px] m-auto flex text-center flex-col justify-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                  className: "text-2xl pt-10 lg:text-5xl md:text-5xl  text-center font-bold text-[#ffffff] z-30",
                  children: "Contact Us"
                }, void 0, false, {
                  fileName: "app/routes/contact.jsx",
                  lineNumber: 15,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "text-center mb-10 font-medium lg:text-xl text-[#ffffff] text-lg m-5",
                  children: "connect with us"
                }, void 0, false, {
                  fileName: "app/routes/contact.jsx",
                  lineNumber: 16,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/contact.jsx",
              lineNumber: 14,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/routes/contact.jsx",
            lineNumber: 13,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: "app/routes/contact.jsx",
          lineNumber: 12,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/routes/contact.jsx",
        lineNumber: 11,
        columnNumber: 6
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-[#fff]",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
          className: "lg:max-w-[1140px] block m-auto",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "w-full md:flex lg:flex p-10",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "lg:py-20 mx-10 lg:w-3/6 md:w-3/6 m-10 w-auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                    className: "uppercase text-xs pb-10",
                    style: { letterSpacing: "7px" },
                    children: "Contact"
                  }, void 0, false, {
                    fileName: "app/routes/contact.jsx",
                    lineNumber: 30,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                    className: "font-medium text-5xl text-[#0e0d0d]",
                    children: "For any inquiries please email us at"
                  }, void 0, false, {
                    fileName: "app/routes/contact.jsx",
                    lineNumber: 31,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    className: "text-green-400 py-10 font-bold",
                    children: "hr [at] weenggs.com"
                  }, void 0, false, {
                    fileName: "app/routes/contact.jsx",
                    lineNumber: 32,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex lg:grid-cols-4 ",
                    children: dataContact.map((item, ind) => {
                      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                        className: item.css,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                          class: item.logo
                        }, void 0, false, {
                          fileName: "app/routes/contact.jsx",
                          lineNumber: 38,
                          columnNumber: 28
                        }, this)
                      }, ind, false, {
                        fileName: "app/routes/contact.jsx",
                        lineNumber: 37,
                        columnNumber: 28
                      }, this);
                    })
                  }, void 0, false, {
                    fileName: "app/routes/contact.jsx",
                    lineNumber: 33,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/contact.jsx",
                lineNumber: 29,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "lg:py-20   lg:w-3/6 md:w-3/6 ",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  class: "mapouter",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    class: "gmap_canvas",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", {
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
                    }, void 0, false, {
                      fileName: "app/routes/contact.jsx",
                      lineNumber: 46,
                      columnNumber: 15
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/contact.jsx",
                    lineNumber: 45,
                    columnNumber: 35
                  }, this)
                }, void 0, false, {
                  fileName: "app/routes/contact.jsx",
                  lineNumber: 45,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/routes/contact.jsx",
                lineNumber: 43,
                columnNumber: 9
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/routes/contact.jsx",
            lineNumber: 28,
            columnNumber: 8
          }, this)
        }, void 0, false, {
          fileName: "app/routes/contact.jsx",
          lineNumber: 27,
          columnNumber: 7
        }, this)
      }, void 0, false, {
        fileName: "app/routes/contact.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/contact.jsx",
    lineNumber: 10,
    columnNumber: 4
  }, this);
};
var contact_default = Contact;
export {
  contact_default as default
};
//# sourceMappingURL=/build/routes/contact-ZO45CRTR.js.map
