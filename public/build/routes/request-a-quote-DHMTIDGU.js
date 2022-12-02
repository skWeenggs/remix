import {
  isBlank,
  isLength,
  validateEmail
} from "/build/_shared/chunk-DZO7EO6M.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-MLBUYSNZ.js";

// app/routes/request-a-quote.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var RequestQuote = () => {
  const [name, setName] = (0, import_react.useState)("");
  const [email, setEmail] = (0, import_react.useState)("");
  const [subject, setSubject] = (0, import_react.useState)("");
  const [massage, setMassage] = (0, import_react.useState)("");
  const [loader, setLoader] = (0, import_react.useState)(false);
  var error;
  const handleSubmit = async (e) => {
    e.preventDefault();
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
    if (error) {
      setLoader(false);
      document.getElementById("m-error").innerHTML = "One or more fields have an error. Please check and try again.";
    } else {
      document.getElementById("m-error").innerHTML = "";
      setLoader(true);
      const data = {
        name,
        email,
        subject,
        massage
      };
      setTimeout(async () => {
        setLoader(false);
      }, 2e3);
      console.log(data);
    }
  };
  const Loader = () => {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      class: "flex items-center justify-center  px-10  min-w-screen",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        class: "flex space-x-2 animate-pulse",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            class: "w-3 h-3 bg-gray-500 rounded-full"
          }, void 0, false, {
            fileName: "app/routes/request-a-quote.jsx",
            lineNumber: 66,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            class: "w-3 h-3 bg-gray-500 rounded-full"
          }, void 0, false, {
            fileName: "app/routes/request-a-quote.jsx",
            lineNumber: 67,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            class: "w-3 h-3 bg-gray-500 rounded-full"
          }, void 0, false, {
            fileName: "app/routes/request-a-quote.jsx",
            lineNumber: 68,
            columnNumber: 17
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/routes/request-a-quote.jsx",
        lineNumber: 65,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: "app/routes/request-a-quote.jsx",
      lineNumber: 63,
      columnNumber: 13
    }, this);
  };
  (0, import_react.useEffect)(() => {
    document.title = "Request-a-quote | Weenggs Technology";
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        class: "h-full w-full  bg-no-repeat bg-center bg-cover bg-portfolio",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          class: "flex md:bg-[#060606] opacity-80",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
            class: "lg:h-[320px]  lg:max-w-[990px] block m-auto",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              class: "lg:h-[320px] m-auto flex text-center flex-col justify-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                  class: "text-2xl pt-10 lg:text-5xl md:text-5xl  text-center font-bold text-[#ffffff] z-30",
                  children: "Request a Quote"
                }, void 0, false, {
                  fileName: "app/routes/request-a-quote.jsx",
                  lineNumber: 82,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  class: "text-center mb-10 font-sm text-xs  uppercase text-[#191919]  m-5",
                  style: { letterSpacing: "5px" },
                  children: "FILL THE FORM BELOW"
                }, void 0, false, {
                  fileName: "app/routes/request-a-quote.jsx",
                  lineNumber: 83,
                  columnNumber: 21
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/request-a-quote.jsx",
              lineNumber: 81,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: "app/routes/request-a-quote.jsx",
            lineNumber: 80,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: "app/routes/request-a-quote.jsx",
          lineNumber: 79,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: "app/routes/request-a-quote.jsx",
        lineNumber: 78,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-[#fff]",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
          className: "lg:max-w-[1120px] contents",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "w-full  my-20",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "lg:pt-10 md:w-full flex flex-col lg:max-w-[1140px] lg:items-center",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
                class: "w-full contents text-sm",
                method: "post",
                onSubmit: handleSubmit,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    class: " text-start flex flex-col lg:w-3/6 md:items-center mb-2 px-10",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        class: "text-start  md:w-2/3 pb-2",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                          class: "flex text-start text-gray-500 text-sm  md:text-right mb-1 md:mb-0 pr-4",
                          children: "Your Name (required)"
                        }, void 0, false, {
                          fileName: "app/routes/request-a-quote.jsx",
                          lineNumber: 102,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/request-a-quote.jsx",
                        lineNumber: 101,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        class: "md:w-2/3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                            class: " appearance-none border border-gray-200 rounded w-full text-sm p-2.5 leading-8   focus:outline-none focus:bg-white focus:border-blue-500 focus:border-2",
                            id: "name",
                            type: "text",
                            name,
                            onChange: (e) => {
                              setName(e.target.value);
                            }
                          }, void 0, false, {
                            fileName: "app/routes/request-a-quote.jsx",
                            lineNumber: 107,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            style: { color: "red" },
                            id: "name-error",
                            class: "error"
                          }, void 0, false, {
                            fileName: "app/routes/request-a-quote.jsx",
                            lineNumber: 108,
                            columnNumber: 21
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/request-a-quote.jsx",
                        lineNumber: 106,
                        columnNumber: 21
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/request-a-quote.jsx",
                    lineNumber: 100,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    class: "text-start flex flex-col lg:w-3/6 md:items-center mb-2 px-10",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        class: "text-start  md:w-2/3 pb-2",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                          class: "flex text-start text-sm  text-gray-500  md:text-right mb-1 md:mb-0 pr-4",
                          children: "Your Email (required)"
                        }, void 0, false, {
                          fileName: "app/routes/request-a-quote.jsx",
                          lineNumber: 113,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/request-a-quote.jsx",
                        lineNumber: 112,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        class: "md:w-2/3",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                            class: " appearance-none border border-gray-200 rounded w-full text-sm p-2.5 leading-8 focus:outline-none focus:bg-white focus:border-blue-500 focus:border-2",
                            id: "email",
                            type: "text",
                            name: email,
                            onChange: (e) => {
                              setEmail(e.target.value);
                            }
                          }, void 0, false, {
                            fileName: "app/routes/request-a-quote.jsx",
                            lineNumber: 118,
                            columnNumber: 21
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            style: { color: "red" },
                            id: "email-error",
                            class: "error"
                          }, void 0, false, {
                            fileName: "app/routes/request-a-quote.jsx",
                            lineNumber: 119,
                            columnNumber: 21
                          }, this)
                        ]
                      }, void 0, true, {
                        fileName: "app/routes/request-a-quote.jsx",
                        lineNumber: 117,
                        columnNumber: 21
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/request-a-quote.jsx",
                    lineNumber: 111,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    class: "text-start flex flex-col lg:w-3/6 md:items-center mb-2 px-10",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        class: "text-start  md:w-2/3 pb-2",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                          class: "text-start flex text-sm  text-gray-500  md:text-right mb-1 md:mb-0 pr-4",
                          children: "Subject"
                        }, void 0, false, {
                          fileName: "app/routes/request-a-quote.jsx",
                          lineNumber: 124,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/request-a-quote.jsx",
                        lineNumber: 123,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        class: "md:w-2/3",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                          class: " appearance-none border border-gray-200 rounded block text-sm  w-full p-2.5  leading-8 focus:outline-none focus:bg-white focus:border-blue-500 focus:border-2",
                          id: "subject",
                          type: "text",
                          name: subject,
                          onChange: (e) => {
                            setSubject(e.target.value);
                          }
                        }, void 0, false, {
                          fileName: "app/routes/request-a-quote.jsx",
                          lineNumber: 129,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/request-a-quote.jsx",
                        lineNumber: 128,
                        columnNumber: 21
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/request-a-quote.jsx",
                    lineNumber: 122,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    class: "text-start flex flex-col lg:w-3/6 md:items-center mb-2 px-10",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        class: "text-start  md:w-2/3 pb-2",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
                          class: "block text-gray-500 text-sm  md:text-start mb-1 md:mb-0 pr-4",
                          children: "Your Massage"
                        }, void 0, false, {
                          fileName: "app/routes/request-a-quote.jsx",
                          lineNumber: 134,
                          columnNumber: 21
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/request-a-quote.jsx",
                        lineNumber: 133,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        class: "md:w-2/3",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
                          id: "message",
                          rows: "4",
                          class: "block p-2.5 w-full text-sm leading-8 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 focus:border-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                          name: massage,
                          onChange: (e) => {
                            setMassage(e.target.value);
                          }
                        }, void 0, false, {
                          fileName: "app/routes/request-a-quote.jsx",
                          lineNumber: 139,
                          columnNumber: 25
                        }, this)
                      }, void 0, false, {
                        fileName: "app/routes/request-a-quote.jsx",
                        lineNumber: 138,
                        columnNumber: 21
                      }, this)
                    ]
                  }, void 0, true, {
                    fileName: "app/routes/request-a-quote.jsx",
                    lineNumber: 132,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    class: "text-start  flex flex-col lg:w-3/6 md:items-center mb-2 px-10",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      class: "md:w-2/3 flex",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                          class: "shadow bg-red-500 hover:bg-white hover:text-black border-2 hover:border-red-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full",
                          type: "submit",
                          children: "SEND"
                        }, void 0, false, {
                          fileName: "app/routes/request-a-quote.jsx",
                          lineNumber: 144,
                          columnNumber: 21
                        }, this),
                        loader ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Loader, {}, void 0, false, {
                          fileName: "app/routes/request-a-quote.jsx",
                          lineNumber: 147,
                          columnNumber: 29
                        }, this) : ""
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/request-a-quote.jsx",
                      lineNumber: 143,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/request-a-quote.jsx",
                    lineNumber: 142,
                    columnNumber: 17
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    class: "text-start flex flex-col lg:w-3/6 md:items-center mb-2 px-10",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      class: "error  fit-content text-sm ",
                      style: { color: "red" },
                      id: "m-error"
                    }, void 0, false, {
                      fileName: "app/routes/request-a-quote.jsx",
                      lineNumber: 152,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/routes/request-a-quote.jsx",
                    lineNumber: 150,
                    columnNumber: 17
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/routes/request-a-quote.jsx",
                lineNumber: 99,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/routes/request-a-quote.jsx",
              lineNumber: 97,
              columnNumber: 12
            }, this)
          }, void 0, false, {
            fileName: "app/routes/request-a-quote.jsx",
            lineNumber: 95,
            columnNumber: 12
          }, this)
        }, void 0, false, {
          fileName: "app/routes/request-a-quote.jsx",
          lineNumber: 94,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/routes/request-a-quote.jsx",
        lineNumber: 93,
        columnNumber: 9
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/routes/request-a-quote.jsx",
    lineNumber: 77,
    columnNumber: 9
  }, this);
};
var request_a_quote_default = RequestQuote;
export {
  request_a_quote_default as default
};
//# sourceMappingURL=/build/routes/request-a-quote-DHMTIDGU.js.map
