// _runtime/00928_whenReady.js
import _mod916 from "metro/00916__.js";
import _mod917 from "metro/00917__.js";

require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let items = [800, 1800];
function whenReady(arg0) {

}

export const TTFBThresholds = items;
export (tmpResult) => {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let metric;
  metric = metric(918).initMetric("TTFB");
  const obj2 = metric(918);
  dependencyMap = metric(921).bindReporter(tmpResult, metric, items, obj.reportAllChanges);
  if (typeof whenReady === "function") {
    const fn = () => {
      const navigationEntry = _mod917.getNavigationEntry();
      if (navigationEntry) {
        const _Math = Math;
        metric.value = Math.max(navigationEntry.responseStart - _mod916.getActivationStart(), 0);
        items = [navigationEntry];
        metric.entries = items;
        closure_1(true);
        const tmpResult = _mod916;
      }
    };
    closure_129_0 = fn;
    const _document = tmp(913).WINDOW.document;
    let prerendering;
    if (_document != null) {
      prerendering = _document.prerendering;
    }
    if (prerendering) {
      tmpResult = tmp(912);
      tmpResult.whenActivated(() => {
        if (typeof closure_2_3 === "function") {
          closure_0 = tmp;
          const _document = closure_2_0(closure_2_1[0]).WINDOW.document;
          let prerendering;
          if (_document != null) {
            prerendering = _document.prerendering;
          }
          if (prerendering) {
            closure_2_0(closure_2_1[1]).whenActivated(() => {
              if (typeof closure_2_3 === "function") {
                closure_0 = tmp;
                const _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                let prerendering;
                if (_document != null) {
                  prerendering = _document.prerendering;
                }
                if (prerendering) {
                  closure_2_0(closure_2_1[1]).whenActivated(() => {
                    if (typeof closure_2_3 === "function") {
                      closure_0 = tmp;
                      const _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                      let prerendering;
                      if (_document != null) {
                        prerendering = _document.prerendering;
                      }
                      if (prerendering) {
                        closure_2_0(closure_2_1[1]).whenActivated(() => {
                          if (typeof closure_2_3 === "function") {
                            closure_0 = tmp;
                            const _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                            let prerendering;
                            if (_document != null) {
                              prerendering = _document.prerendering;
                            }
                            if (prerendering) {
                              closure_2_0(closure_2_1[1]).whenActivated(/* F88572 */ function() { ... });
                              const tmp2Result = closure_2_0(closure_2_1[1]);
                            } else {
                              const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                              let readyState;
                              if (_document2 != null) {
                                readyState = _document2.readyState;
                              }
                              if ("complete" !== readyState) {
                                const listener = globalThis.addEventListener("load", /* F88573 */ function() { ... }, true);
                              } else {
                                const _setTimeout = setTimeout;
                                const timerId = setTimeout(tmp);
                              }
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        });
                        const tmp2Result = closure_2_0(closure_2_1[1]);
                      } else {
                        const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                        let readyState;
                        if (_document2 != null) {
                          readyState = _document2.readyState;
                        }
                        if ("complete" !== readyState) {
                          const listener = globalThis.addEventListener("load", () => {
                            if (typeof closure_2_3 === "function") {
                              closure_0 = closure_1_0;
                              let _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                              let prerendering;
                              if (_document != null) {
                                prerendering = _document.prerendering;
                              }
                              if (prerendering) {
                                closure_2_0(closure_2_1[1]).whenActivated(/* F88572 */ function() { ... });
                                let tmp2Result = closure_2_0(closure_2_1[1]);
                              } else {
                                let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                let readyState;
                                if (_document2 != null) {
                                  readyState = _document2.readyState;
                                }
                                if ("complete" !== readyState) {
                                  let listener = globalThis.addEventListener("load", /* F88573 */ function() { ... }, true);
                                } else {
                                  let _setTimeout = setTimeout;
                                  let timerId = setTimeout(closure_1_0);
                                }
                              }
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          }, true);
                        } else {
                          const _setTimeout = setTimeout;
                          const timerId = setTimeout(tmp);
                        }
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  });
                  const tmp2Result = closure_2_0(closure_2_1[1]);
                } else {
                  const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                  let readyState;
                  if (_document2 != null) {
                    readyState = _document2.readyState;
                  }
                  if ("complete" !== readyState) {
                    const listener = globalThis.addEventListener("load", () => {
                      if (typeof closure_2_3 === "function") {
                        closure_0 = closure_1_0;
                        let _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                        let prerendering;
                        if (_document != null) {
                          prerendering = _document.prerendering;
                        }
                        if (prerendering) {
                          closure_2_0(closure_2_1[1]).whenActivated(() => {
                            if (typeof closure_2_3 === "function") {
                              closure_0 = tmp;
                              const _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                              let prerendering;
                              if (_document != null) {
                                prerendering = _document.prerendering;
                              }
                              if (prerendering) {
                                closure_2_0(closure_2_1[1]).whenActivated(/* F88572 */ function() { ... });
                                const tmp2Result = closure_2_0(closure_2_1[1]);
                              } else {
                                const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                let readyState;
                                if (_document2 != null) {
                                  readyState = _document2.readyState;
                                }
                                if ("complete" !== readyState) {
                                  const listener = globalThis.addEventListener("load", /* F88573 */ function() { ... }, true);
                                } else {
                                  const _setTimeout = setTimeout;
                                  const timerId = setTimeout(tmp);
                                }
                              }
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          });
                          let tmp2Result = closure_2_0(closure_2_1[1]);
                        } else {
                          let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                          let readyState;
                          if (_document2 != null) {
                            readyState = _document2.readyState;
                          }
                          if ("complete" !== readyState) {
                            let listener = globalThis.addEventListener("load", () => {
                              if (typeof closure_2_3 === "function") {
                                closure_0 = closure_1_0;
                                let _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                                let prerendering;
                                if (_document != null) {
                                  prerendering = _document.prerendering;
                                }
                                if (prerendering) {
                                  closure_2_0(closure_2_1[1]).whenActivated(/* F88572 */ function() { ... });
                                  let tmp2Result = closure_2_0(closure_2_1[1]);
                                } else {
                                  let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                  let readyState;
                                  if (_document2 != null) {
                                    readyState = _document2.readyState;
                                  }
                                  if ("complete" !== readyState) {
                                    let listener = globalThis.addEventListener("load", /* F88573 */ function() { ... }, true);
                                  } else {
                                    let _setTimeout = setTimeout;
                                    let timerId = setTimeout(closure_1_0);
                                  }
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            }, true);
                          } else {
                            let _setTimeout = setTimeout;
                            let timerId = setTimeout(closure_1_0);
                          }
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }, true);
                  } else {
                    const _setTimeout = setTimeout;
                    const timerId = setTimeout(tmp);
                  }
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            });
            const tmp2Result = closure_2_0(closure_2_1[1]);
          } else {
            const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
            let readyState;
            if (_document2 != null) {
              readyState = _document2.readyState;
            }
            if ("complete" !== readyState) {
              const listener = globalThis.addEventListener("load", () => {
                if (typeof closure_2_3 === "function") {
                  closure_0 = closure_1_0;
                  let _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                  let prerendering;
                  if (_document != null) {
                    prerendering = _document.prerendering;
                  }
                  if (prerendering) {
                    closure_2_0(closure_2_1[1]).whenActivated(() => {
                      if (typeof closure_2_3 === "function") {
                        closure_0 = tmp;
                        const _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                        let prerendering;
                        if (_document != null) {
                          prerendering = _document.prerendering;
                        }
                        if (prerendering) {
                          closure_2_0(closure_2_1[1]).whenActivated(() => {
                            if (typeof closure_2_3 === "function") {
                              closure_0 = tmp;
                              const _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                              let prerendering;
                              if (_document != null) {
                                prerendering = _document.prerendering;
                              }
                              if (prerendering) {
                                closure_2_0(closure_2_1[1]).whenActivated(/* F88572 */ function() { ... });
                                const tmp2Result = closure_2_0(closure_2_1[1]);
                              } else {
                                const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                let readyState;
                                if (_document2 != null) {
                                  readyState = _document2.readyState;
                                }
                                if ("complete" !== readyState) {
                                  const listener = globalThis.addEventListener("load", /* F88573 */ function() { ... }, true);
                                } else {
                                  const _setTimeout = setTimeout;
                                  const timerId = setTimeout(tmp);
                                }
                              }
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          });
                          const tmp2Result = closure_2_0(closure_2_1[1]);
                        } else {
                          const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                          let readyState;
                          if (_document2 != null) {
                            readyState = _document2.readyState;
                          }
                          if ("complete" !== readyState) {
                            const listener = globalThis.addEventListener("load", () => {
                              if (typeof closure_2_3 === "function") {
                                closure_0 = closure_1_0;
                                let _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                                let prerendering;
                                if (_document != null) {
                                  prerendering = _document.prerendering;
                                }
                                if (prerendering) {
                                  closure_2_0(closure_2_1[1]).whenActivated(/* F88572 */ function() { ... });
                                  let tmp2Result = closure_2_0(closure_2_1[1]);
                                } else {
                                  let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                  let readyState;
                                  if (_document2 != null) {
                                    readyState = _document2.readyState;
                                  }
                                  if ("complete" !== readyState) {
                                    let listener = globalThis.addEventListener("load", /* F88573 */ function() { ... }, true);
                                  } else {
                                    let _setTimeout = setTimeout;
                                    let timerId = setTimeout(closure_1_0);
                                  }
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            }, true);
                          } else {
                            const _setTimeout = setTimeout;
                            const timerId = setTimeout(tmp);
                          }
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    });
                    let tmp2Result = closure_2_0(closure_2_1[1]);
                  } else {
                    let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                    let readyState;
                    if (_document2 != null) {
                      readyState = _document2.readyState;
                    }
                    if ("complete" !== readyState) {
                      let listener = globalThis.addEventListener("load", () => {
                        if (typeof closure_2_3 === "function") {
                          closure_0 = closure_1_0;
                          let _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                          let prerendering;
                          if (_document != null) {
                            prerendering = _document.prerendering;
                          }
                          if (prerendering) {
                            closure_2_0(closure_2_1[1]).whenActivated(() => {
                              if (typeof closure_2_3 === "function") {
                                closure_0 = tmp;
                                const _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                                let prerendering;
                                if (_document != null) {
                                  prerendering = _document.prerendering;
                                }
                                if (prerendering) {
                                  closure_2_0(closure_2_1[1]).whenActivated(/* F88572 */ function() { ... });
                                  const tmp2Result = closure_2_0(closure_2_1[1]);
                                } else {
                                  const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                  let readyState;
                                  if (_document2 != null) {
                                    readyState = _document2.readyState;
                                  }
                                  if ("complete" !== readyState) {
                                    const listener = globalThis.addEventListener("load", /* F88573 */ function() { ... }, true);
                                  } else {
                                    const _setTimeout = setTimeout;
                                    const timerId = setTimeout(tmp);
                                  }
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            });
                            let tmp2Result = closure_2_0(closure_2_1[1]);
                          } else {
                            let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                            let readyState;
                            if (_document2 != null) {
                              readyState = _document2.readyState;
                            }
                            if ("complete" !== readyState) {
                              let listener = globalThis.addEventListener("load", () => {
                                if (typeof closure_2_3 === "function") {
                                  closure_0 = closure_1_0;
                                  let _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                                  let prerendering;
                                  if (_document != null) {
                                    prerendering = _document.prerendering;
                                  }
                                  if (prerendering) {
                                    closure_2_0(closure_2_1[1]).whenActivated(/* F88572 */ function() { ... });
                                    let tmp2Result = closure_2_0(closure_2_1[1]);
                                  } else {
                                    let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                    let readyState;
                                    if (_document2 != null) {
                                      readyState = _document2.readyState;
                                    }
                                    if ("complete" !== readyState) {
                                      let listener = globalThis.addEventListener("load", /* F88573 */ function() { ... }, true);
                                    } else {
                                      let _setTimeout = setTimeout;
                                      let timerId = setTimeout(closure_1_0);
                                    }
                                  }
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              }, true);
                            } else {
                              let _setTimeout = setTimeout;
                              let timerId = setTimeout(closure_1_0);
                            }
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      }, true);
                    } else {
                      let _setTimeout = setTimeout;
                      let timerId = setTimeout(closure_1_0);
                    }
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }, true);
            } else {
              const _setTimeout = setTimeout;
              const timerId = setTimeout(tmp);
            }
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      });
    } else {
      const _document2 = tmp(913).WINDOW.document;
      let readyState;
      if (_document2 != null) {
        readyState = _document2.readyState;
      }
      if ("complete" !== readyState) {
        const listener = globalThis.addEventListener("load", () => {
          if (typeof closure_2_3 === "function") {
            closure_0 = closure_1_0;
            let _document = closure_2_0(closure_2_1[0]).WINDOW.document;
            let prerendering;
            if (_document != null) {
              prerendering = _document.prerendering;
            }
            if (prerendering) {
              closure_2_0(closure_2_1[1]).whenActivated(() => {
                if (typeof closure_2_3 === "function") {
                  closure_0 = tmp;
                  const _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                  let prerendering;
                  if (_document != null) {
                    prerendering = _document.prerendering;
                  }
                  if (prerendering) {
                    closure_2_0(closure_2_1[1]).whenActivated(() => {
                      if (typeof closure_2_3 === "function") {
                        closure_0 = tmp;
                        const _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                        let prerendering;
                        if (_document != null) {
                          prerendering = _document.prerendering;
                        }
                        if (prerendering) {
                          closure_2_0(closure_2_1[1]).whenActivated(() => {
                            if (typeof closure_2_3 === "function") {
                              closure_0 = tmp;
                              const _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                              let prerendering;
                              if (_document != null) {
                                prerendering = _document.prerendering;
                              }
                              if (prerendering) {
                                closure_2_0(closure_2_1[1]).whenActivated(/* F88572 */ function() { ... });
                                const tmp2Result = closure_2_0(closure_2_1[1]);
                              } else {
                                const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                let readyState;
                                if (_document2 != null) {
                                  readyState = _document2.readyState;
                                }
                                if ("complete" !== readyState) {
                                  const listener = globalThis.addEventListener("load", /* F88573 */ function() { ... }, true);
                                } else {
                                  const _setTimeout = setTimeout;
                                  const timerId = setTimeout(tmp);
                                }
                              }
                            } else {
                              throw new TypeError("Trying to call a non-function");
                            }
                          });
                          const tmp2Result = closure_2_0(closure_2_1[1]);
                        } else {
                          const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                          let readyState;
                          if (_document2 != null) {
                            readyState = _document2.readyState;
                          }
                          if ("complete" !== readyState) {
                            const listener = globalThis.addEventListener("load", () => {
                              if (typeof closure_2_3 === "function") {
                                closure_0 = closure_1_0;
                                let _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                                let prerendering;
                                if (_document != null) {
                                  prerendering = _document.prerendering;
                                }
                                if (prerendering) {
                                  closure_2_0(closure_2_1[1]).whenActivated(/* F88572 */ function() { ... });
                                  let tmp2Result = closure_2_0(closure_2_1[1]);
                                } else {
                                  let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                  let readyState;
                                  if (_document2 != null) {
                                    readyState = _document2.readyState;
                                  }
                                  if ("complete" !== readyState) {
                                    let listener = globalThis.addEventListener("load", /* F88573 */ function() { ... }, true);
                                  } else {
                                    let _setTimeout = setTimeout;
                                    let timerId = setTimeout(closure_1_0);
                                  }
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            }, true);
                          } else {
                            const _setTimeout = setTimeout;
                            const timerId = setTimeout(tmp);
                          }
                        }
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    });
                    const tmp2Result = closure_2_0(closure_2_1[1]);
                  } else {
                    const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                    let readyState;
                    if (_document2 != null) {
                      readyState = _document2.readyState;
                    }
                    if ("complete" !== readyState) {
                      const listener = globalThis.addEventListener("load", () => {
                        if (typeof closure_2_3 === "function") {
                          closure_0 = closure_1_0;
                          let _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                          let prerendering;
                          if (_document != null) {
                            prerendering = _document.prerendering;
                          }
                          if (prerendering) {
                            closure_2_0(closure_2_1[1]).whenActivated(() => {
                              if (typeof closure_2_3 === "function") {
                                closure_0 = tmp;
                                const _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                                let prerendering;
                                if (_document != null) {
                                  prerendering = _document.prerendering;
                                }
                                if (prerendering) {
                                  closure_2_0(closure_2_1[1]).whenActivated(/* F88572 */ function() { ... });
                                  const tmp2Result = closure_2_0(closure_2_1[1]);
                                } else {
                                  const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                  let readyState;
                                  if (_document2 != null) {
                                    readyState = _document2.readyState;
                                  }
                                  if ("complete" !== readyState) {
                                    const listener = globalThis.addEventListener("load", /* F88573 */ function() { ... }, true);
                                  } else {
                                    const _setTimeout = setTimeout;
                                    const timerId = setTimeout(tmp);
                                  }
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            });
                            let tmp2Result = closure_2_0(closure_2_1[1]);
                          } else {
                            let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                            let readyState;
                            if (_document2 != null) {
                              readyState = _document2.readyState;
                            }
                            if ("complete" !== readyState) {
                              let listener = globalThis.addEventListener("load", () => {
                                if (typeof closure_2_3 === "function") {
                                  closure_0 = closure_1_0;
                                  let _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                                  let prerendering;
                                  if (_document != null) {
                                    prerendering = _document.prerendering;
                                  }
                                  if (prerendering) {
                                    closure_2_0(closure_2_1[1]).whenActivated(/* F88572 */ function() { ... });
                                    let tmp2Result = closure_2_0(closure_2_1[1]);
                                  } else {
                                    let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                    let readyState;
                                    if (_document2 != null) {
                                      readyState = _document2.readyState;
                                    }
                                    if ("complete" !== readyState) {
                                      let listener = globalThis.addEventListener("load", /* F88573 */ function() { ... }, true);
                                    } else {
                                      let _setTimeout = setTimeout;
                                      let timerId = setTimeout(closure_1_0);
                                    }
                                  }
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              }, true);
                            } else {
                              let _setTimeout = setTimeout;
                              let timerId = setTimeout(closure_1_0);
                            }
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      }, true);
                    } else {
                      const _setTimeout = setTimeout;
                      const timerId = setTimeout(tmp);
                    }
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              });
              let tmp2Result = closure_2_0(closure_2_1[1]);
            } else {
              let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
              let readyState;
              if (_document2 != null) {
                readyState = _document2.readyState;
              }
              if ("complete" !== readyState) {
                let listener = globalThis.addEventListener("load", () => {
                  if (typeof closure_2_3 === "function") {
                    closure_0 = closure_1_0;
                    let _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                    let prerendering;
                    if (_document != null) {
                      prerendering = _document.prerendering;
                    }
                    if (prerendering) {
                      closure_2_0(closure_2_1[1]).whenActivated(() => {
                        if (typeof closure_2_3 === "function") {
                          closure_0 = tmp;
                          const _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                          let prerendering;
                          if (_document != null) {
                            prerendering = _document.prerendering;
                          }
                          if (prerendering) {
                            closure_2_0(closure_2_1[1]).whenActivated(() => {
                              if (typeof closure_2_3 === "function") {
                                closure_0 = tmp;
                                const _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                                let prerendering;
                                if (_document != null) {
                                  prerendering = _document.prerendering;
                                }
                                if (prerendering) {
                                  closure_2_0(closure_2_1[1]).whenActivated(/* F88572 */ function() { ... });
                                  const tmp2Result = closure_2_0(closure_2_1[1]);
                                } else {
                                  const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                  let readyState;
                                  if (_document2 != null) {
                                    readyState = _document2.readyState;
                                  }
                                  if ("complete" !== readyState) {
                                    const listener = globalThis.addEventListener("load", /* F88573 */ function() { ... }, true);
                                  } else {
                                    const _setTimeout = setTimeout;
                                    const timerId = setTimeout(tmp);
                                  }
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            });
                            const tmp2Result = closure_2_0(closure_2_1[1]);
                          } else {
                            const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                            let readyState;
                            if (_document2 != null) {
                              readyState = _document2.readyState;
                            }
                            if ("complete" !== readyState) {
                              const listener = globalThis.addEventListener("load", () => {
                                if (typeof closure_2_3 === "function") {
                                  closure_0 = closure_1_0;
                                  let _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                                  let prerendering;
                                  if (_document != null) {
                                    prerendering = _document.prerendering;
                                  }
                                  if (prerendering) {
                                    closure_2_0(closure_2_1[1]).whenActivated(/* F88572 */ function() { ... });
                                    let tmp2Result = closure_2_0(closure_2_1[1]);
                                  } else {
                                    let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                    let readyState;
                                    if (_document2 != null) {
                                      readyState = _document2.readyState;
                                    }
                                    if ("complete" !== readyState) {
                                      let listener = globalThis.addEventListener("load", /* F88573 */ function() { ... }, true);
                                    } else {
                                      let _setTimeout = setTimeout;
                                      let timerId = setTimeout(closure_1_0);
                                    }
                                  }
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              }, true);
                            } else {
                              const _setTimeout = setTimeout;
                              const timerId = setTimeout(tmp);
                            }
                          }
                        } else {
                          throw new TypeError("Trying to call a non-function");
                        }
                      });
                      let tmp2Result = closure_2_0(closure_2_1[1]);
                    } else {
                      let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                      let readyState;
                      if (_document2 != null) {
                        readyState = _document2.readyState;
                      }
                      if ("complete" !== readyState) {
                        let listener = globalThis.addEventListener("load", () => {
                          if (typeof closure_2_3 === "function") {
                            closure_0 = closure_1_0;
                            let _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                            let prerendering;
                            if (_document != null) {
                              prerendering = _document.prerendering;
                            }
                            if (prerendering) {
                              closure_2_0(closure_2_1[1]).whenActivated(() => {
                                if (typeof closure_2_3 === "function") {
                                  closure_0 = tmp;
                                  const _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                                  let prerendering;
                                  if (_document != null) {
                                    prerendering = _document.prerendering;
                                  }
                                  if (prerendering) {
                                    closure_2_0(closure_2_1[1]).whenActivated(/* F88572 */ function() { ... });
                                    const tmp2Result = closure_2_0(closure_2_1[1]);
                                  } else {
                                    const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                    let readyState;
                                    if (_document2 != null) {
                                      readyState = _document2.readyState;
                                    }
                                    if ("complete" !== readyState) {
                                      const listener = globalThis.addEventListener("load", /* F88573 */ function() { ... }, true);
                                    } else {
                                      const _setTimeout = setTimeout;
                                      const timerId = setTimeout(tmp);
                                    }
                                  }
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              });
                              let tmp2Result = closure_2_0(closure_2_1[1]);
                            } else {
                              let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                              let readyState;
                              if (_document2 != null) {
                                readyState = _document2.readyState;
                              }
                              if ("complete" !== readyState) {
                                let listener = globalThis.addEventListener("load", () => {
                                  if (typeof closure_2_3 === "function") {
                                    closure_0 = closure_1_0;
                                    let _document = closure_2_0(closure_2_1[0]).WINDOW.document;
                                    let prerendering;
                                    if (_document != null) {
                                      prerendering = _document.prerendering;
                                    }
                                    if (prerendering) {
                                      closure_2_0(closure_2_1[1]).whenActivated(/* F88572 */ function() { ... });
                                      let tmp2Result = closure_2_0(closure_2_1[1]);
                                    } else {
                                      let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                      let readyState;
                                      if (_document2 != null) {
                                        readyState = _document2.readyState;
                                      }
                                      if ("complete" !== readyState) {
                                        let listener = globalThis.addEventListener("load", /* F88573 */ function() { ... }, true);
                                      } else {
                                        let _setTimeout = setTimeout;
                                        let timerId = setTimeout(closure_1_0);
                                      }
                                    }
                                  } else {
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                }, true);
                              } else {
                                let _setTimeout = setTimeout;
                                let timerId = setTimeout(closure_1_0);
                              }
                            }
                          } else {
                            throw new TypeError("Trying to call a non-function");
                          }
                        }, true);
                      } else {
                        let _setTimeout = setTimeout;
                        let timerId = setTimeout(closure_1_0);
                      }
                    }
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }, true);
              } else {
                let _setTimeout = setTimeout;
                let timerId = setTimeout(closure_1_0);
              }
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }, true);
      } else {
        const _setTimeout = setTimeout;
        const timerId = setTimeout(fn);
      }
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  const obj3 = metric(921);
}