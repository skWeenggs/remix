import {
  useLoaderData
} from "/build/_shared/chunk-ADNCORLJ.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-MLBUYSNZ.js";

// app/routes/portfolio.jsx
var import_react = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Posts() {
  const { arr } = useLoaderData();
  (0, import_react.useEffect)(() => {
    document.title = "portfolio | Weenggs Technology";
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "h-full w-full  bg-no-repeat bg-center bg-cover bg-portfolio",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "bg-[#060606] opacity-90 z-0 flex",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
            className: "lg:h-[320px]  lg:max-w-[990px] block m-auto",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "lg:h-[320px] m-auto flex text-center flex-col justify-center",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                  className: "text-2xl pt-10 lg:text-5xl md:text-5xl  text-center font-bold text-[#ffffff] z-30",
                  children: "Portfolio"
                }, void 0, false, {
                  fileName: "app/routes/portfolio.jsx",
                  lineNumber: 349,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "text-center mb-10 font-sm lg:text-xs  uppercase text-[#a5a5a5]  m-5",
                  style: { letterSpacing: "5px" },
                  children: "OUR BEST WORK"
                }, void 0, false, {
                  fileName: "app/routes/portfolio.jsx",
                  lineNumber: 350,
                  columnNumber: 21
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/routes/portfolio.jsx",
              lineNumber: 348,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: "app/routes/portfolio.jsx",
            lineNumber: 347,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: "app/routes/portfolio.jsx",
          lineNumber: 346,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: "app/routes/portfolio.jsx",
        lineNumber: 345,
        columnNumber: 13
      }, this),
      arr.map((item, index) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
          children: index % 2 == 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "bg-[#fff]",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
                className: "lg:max-w-[1140px] block m-auto",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "w-full md:flex lg:flex ",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "lg:pt-20 py-10  lg:w-3/6 md:w-3/6 lg:hover:scale-75 transition duration-300 ",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                        src: item.img,
                        alt: ""
                      }, void 0, false, {
                        fileName: "app/routes/portfolio.jsx",
                        lineNumber: 372,
                        columnNumber: 29
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/portfolio.jsx",
                      lineNumber: 370,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "lg:pt-20  lg:w-3/6 md:w-3/6 py-10  w-full",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                          className: "text-[#5a64f1] m-5 text-5xl font-bold mb-5",
                          children: item.heading
                        }, void 0, false, {
                          fileName: "app/routes/portfolio.jsx",
                          lineNumber: 375,
                          columnNumber: 29
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                          className: "m-5",
                          children: [
                            (_a = item.desc) == null ? void 0 : _a.map((task, index2) => {
                              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                                  className: "text-sm my-5  m-5 text-gray-500",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                      className: "text-md text-gray-700",
                                      children: item == null ? void 0 : item.mark
                                    }, void 0, false, {
                                      fileName: "app/routes/portfolio.jsx",
                                      lineNumber: 382,
                                      columnNumber: 89
                                    }, this),
                                    " ",
                                    task
                                  ]
                                }, void 0, true, {
                                  fileName: "app/routes/portfolio.jsx",
                                  lineNumber: 382,
                                  columnNumber: 41
                                }, this)
                              }, index2, false, {
                                fileName: "app/routes/portfolio.jsx",
                                lineNumber: 381,
                                columnNumber: 37
                              }, this);
                            }),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              className: "text-sm my-5 p-5 text-gray-500",
                              children: [
                                ((_b = item.skills) == null ? void 0 : _b.length) > 0 ? "Skills:" : "",
                                (_c = item.skills) == null ? void 0 : _c.map((skill, index2) => {
                                  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    className: "text-sm  text-gray-500",
                                    children: skill + ","
                                  }, index2, false, {
                                    fileName: "app/routes/portfolio.jsx",
                                    lineNumber: 390,
                                    columnNumber: 41
                                  }, this);
                                })
                              ]
                            }, void 0, true, {
                              fileName: "app/routes/portfolio.jsx",
                              lineNumber: 386,
                              columnNumber: 33
                            }, this),
                            ((_d = item.sell) == null ? void 0 : _d.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                              className: "text-md my-5  m-5 text-gray-500",
                              children: item.sHead
                            }, void 0, false, {
                              fileName: "app/routes/portfolio.jsx",
                              lineNumber: 397,
                              columnNumber: 54
                            }, this) : "",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
                              children: (_e = item.sell) == null ? void 0 : _e.map((sel, index2) => {
                                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                  className: "text-md ml-10  text-gray-500",
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                    type: item.type,
                                    className: "text-sm  text-gray-500",
                                    children: sel
                                  }, void 0, false, {
                                    fileName: "app/routes/portfolio.jsx",
                                    lineNumber: 402,
                                    columnNumber: 49
                                  }, this)
                                }, index2, false, {
                                  fileName: "app/routes/portfolio.jsx",
                                  lineNumber: 401,
                                  columnNumber: 45
                                }, this);
                              })
                            }, void 0, false, {
                              fileName: "app/routes/portfolio.jsx",
                              lineNumber: 398,
                              columnNumber: 33
                            }, this),
                            item.appstore && item.playstore ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                              className: "text-md my-5  m-5 text-gray-500",
                              children: [
                                "Available on",
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                                  className: "text-[#5050f1]",
                                  href: item.appstore,
                                  children: "App Store"
                                }, void 0, false, {
                                  fileName: "app/routes/portfolio.jsx",
                                  lineNumber: 410,
                                  columnNumber: 33
                                }, this),
                                " and ",
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                                  className: "text-[#5050f1]",
                                  href: item.playstore,
                                  children: "Play store."
                                }, void 0, false, {
                                  fileName: "app/routes/portfolio.jsx",
                                  lineNumber: 410,
                                  columnNumber: 102
                                }, this)
                              ]
                            }, void 0, true, {
                              fileName: "app/routes/portfolio.jsx",
                              lineNumber: 409,
                              columnNumber: 29
                            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                              className: "text-md my-5  m-5 text-gray-500",
                              children: [
                                "Available on",
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                                  className: "text-[#5050f1]",
                                  href: "https://play.google.com/store/apps/details?id=jp.co.mikle.ideanotes",
                                  children: "Play store."
                                }, void 0, false, {
                                  fileName: "app/routes/portfolio.jsx",
                                  lineNumber: 414,
                                  columnNumber: 33
                                }, this)
                              ]
                            }, void 0, true, {
                              fileName: "app/routes/portfolio.jsx",
                              lineNumber: 413,
                              columnNumber: 29
                            }, this)
                          ]
                        }, void 0, true, {
                          fileName: "app/routes/portfolio.jsx",
                          lineNumber: 377,
                          columnNumber: 25
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/portfolio.jsx",
                      lineNumber: 374,
                      columnNumber: 25
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/portfolio.jsx",
                  lineNumber: 369,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: "app/routes/portfolio.jsx",
                lineNumber: 368,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: "app/routes/portfolio.jsx",
              lineNumber: 367,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: "app/routes/portfolio.jsx",
            lineNumber: 366,
            columnNumber: 21
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "bg-[#fff]",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
                className: "lg:max-w-[1140px] block m-auto",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "w-full md:flex lg:flex ",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "lg:pt-20  lg:w-3/6 md:w-3/6 py-10  w-full",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                          className: "text-[#5a64f1] m-5 text-5xl font-bold mb-5",
                          children: item.heading
                        }, void 0, false, {
                          fileName: "app/routes/portfolio.jsx",
                          lineNumber: 431,
                          columnNumber: 25
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
                          className: "m-5",
                          children: [
                            (_f = item.desc) == null ? void 0 : _f.map((task, index2) => {
                              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                                  className: "text-sm   m-5 text-gray-500",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                      className: "text-md text-gray-700",
                                      children: item == null ? void 0 : item.mark
                                    }, void 0, false, {
                                      fileName: "app/routes/portfolio.jsx",
                                      lineNumber: 437,
                                      columnNumber: 85
                                    }, this),
                                    " ",
                                    task
                                  ]
                                }, void 0, true, {
                                  fileName: "app/routes/portfolio.jsx",
                                  lineNumber: 437,
                                  columnNumber: 41
                                }, this)
                              }, index2, false, {
                                fileName: "app/routes/portfolio.jsx",
                                lineNumber: 436,
                                columnNumber: 37
                              }, this);
                            }),
                            ((_g = item.sell) == null ? void 0 : _g.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                              className: "text-md my-5  m-5 text-gray-500",
                              children: item.sHead
                            }, void 0, false, {
                              fileName: "app/routes/portfolio.jsx",
                              lineNumber: 442,
                              columnNumber: 58
                            }, this) : "",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ol", {
                              children: (_h = item.sell) == null ? void 0 : _h.map((sel, index2) => {
                                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                  className: "text-md ml-10  text-gray-500",
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
                                    className: "text-sm  text-gray-500",
                                    children: sel
                                  }, void 0, false, {
                                    fileName: "app/routes/portfolio.jsx",
                                    lineNumber: 447,
                                    columnNumber: 49
                                  }, this)
                                }, index2, false, {
                                  fileName: "app/routes/portfolio.jsx",
                                  lineNumber: 446,
                                  columnNumber: 45
                                }, this);
                              })
                            }, void 0, false, {
                              fileName: "app/routes/portfolio.jsx",
                              lineNumber: 443,
                              columnNumber: 33
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              className: "text-sm my-5 p-5 text-gray-500",
                              children: [
                                ((_i = item.skills) == null ? void 0 : _i.length) > 0 ? "Skills:" : "",
                                (_j = item.skills) == null ? void 0 : _j.map((skill, index2) => {
                                  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                    className: "text-sm  text-gray-500",
                                    children: skill + ","
                                  }, index2, false, {
                                    fileName: "app/routes/portfolio.jsx",
                                    lineNumber: 459,
                                    columnNumber: 34
                                  }, this);
                                })
                              ]
                            }, void 0, true, {
                              fileName: "app/routes/portfolio.jsx",
                              lineNumber: 455,
                              columnNumber: 29
                            }, this),
                            item.appstore && item.playstore ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                              className: "text-md my-5  m-5 text-gray-500",
                              children: [
                                "Available on",
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                                  className: "text-[#5050f1]",
                                  href: item.appstore,
                                  children: "App Store"
                                }, void 0, false, {
                                  fileName: "app/routes/portfolio.jsx",
                                  lineNumber: 467,
                                  columnNumber: 33
                                }, this),
                                " and ",
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                                  className: "text-[#5050f1]",
                                  href: item.playstore,
                                  children: "Play store."
                                }, void 0, false, {
                                  fileName: "app/routes/portfolio.jsx",
                                  lineNumber: 467,
                                  columnNumber: 102
                                }, this)
                              ]
                            }, void 0, true, {
                              fileName: "app/routes/portfolio.jsx",
                              lineNumber: 466,
                              columnNumber: 29
                            }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                              className: "text-md my-5  m-5 text-gray-500",
                              children: [
                                "Available on",
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
                                  className: "text-[#5050f1]",
                                  href: "https://play.google.com/store/apps/details?id=jp.co.mikle.ideanotes",
                                  children: "Play store."
                                }, void 0, false, {
                                  fileName: "app/routes/portfolio.jsx",
                                  lineNumber: 471,
                                  columnNumber: 33
                                }, this)
                              ]
                            }, void 0, true, {
                              fileName: "app/routes/portfolio.jsx",
                              lineNumber: 470,
                              columnNumber: 29
                            }, this)
                          ]
                        }, void 0, true, {
                          fileName: "app/routes/portfolio.jsx",
                          lineNumber: 433,
                          columnNumber: 25
                        }, this)
                      ]
                    }, void 0, true, {
                      fileName: "app/routes/portfolio.jsx",
                      lineNumber: 429,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "lg:pt-20 py-10 lg:w-3/6 md:w-3/6  ",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                        className: "animate-pulse",
                        src: item.img,
                        alt: ""
                      }, void 0, false, {
                        fileName: "app/routes/portfolio.jsx",
                        lineNumber: 477,
                        columnNumber: 29
                      }, this)
                    }, void 0, false, {
                      fileName: "app/routes/portfolio.jsx",
                      lineNumber: 476,
                      columnNumber: 25
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/routes/portfolio.jsx",
                  lineNumber: 428,
                  columnNumber: 25
                }, this)
              }, void 0, false, {
                fileName: "app/routes/portfolio.jsx",
                lineNumber: 427,
                columnNumber: 25
              }, this)
            }, void 0, false, {
              fileName: "app/routes/portfolio.jsx",
              lineNumber: 426,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: "app/routes/portfolio.jsx",
            lineNumber: 425,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: "app/routes/portfolio.jsx",
          lineNumber: 364,
          columnNumber: 17
        }, this);
      })
    ]
  }, void 0, true, {
    fileName: "app/routes/portfolio.jsx",
    lineNumber: 343,
    columnNumber: 9
  }, this);
}
export {
  Posts as default
};
//# sourceMappingURL=/build/routes/portfolio-R6RJ7NOY.js.map
