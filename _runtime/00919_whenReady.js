// === Module 919: whenReady ===

// Module 919 (whenReady)
import _mod907 from "module_907" /* 907 */;
import _mod908 from "module_908" /* 908 */;

require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let items = [800, 1800];
function whenReady(arg0) {

}

export const TTFBThresholds = items;
export const onTTFB = (tmpResult) => {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let metric;
  metric = metric(909).initMetric("TTFB");
  const obj2 = metric(909);
  dependencyMap = metric(912).bindReporter(tmpResult, metric, items, obj.reportAllChanges);
  if (typeof whenReady === "function") {
    const fn = () => {
      const navigationEntry = _mod908.getNavigationEntry();
      if (navigationEntry) {
        const _Math = Math;
        metric.value = Math.max(navigationEntry.responseStart - _mod907.getActivationStart(), 0);
        items = [navigationEntry];
        metric.entries = items;
        closure_1(true);
        const tmpResult = _mod907;
      }
    };
    closure_129_0 = fn;
    const _document = tmp(904).WINDOW.document;
    let prerendering;
    if (_document != null) {
      prerendering = _document.prerendering;
    }
    if (prerendering) {
      tmpResult = tmp(903);
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
                              closure_2_0(closure_2_1[1]).whenActivated(() => { ... });
                              const tmp2Result = closure_2_0(closure_2_1[1]);
                            } else {
                              const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                              let readyState;
                              if (_document2 != null) {
                                readyState = _document2.readyState;
                              }
                              if ("complete" !== readyState) {
                                const listener = globalThis.addEventListener("load", () => { ... }, true);
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
                                closure_2_0(closure_2_1[1]).whenActivated(() => { ... });
                                let tmp2Result = closure_2_0(closure_2_1[1]);
                              } else {
                                let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                let readyState;
                                if (_document2 != null) {
                                  readyState = _document2.readyState;
                                }
                                if ("complete" !== readyState) {
                                  let listener = globalThis.addEventListener("load", () => { ... }, true);
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
                                closure_2_0(closure_2_1[1]).whenActivated(() => { ... });
                                const tmp2Result = closure_2_0(closure_2_1[1]);
                              } else {
                                const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                let readyState;
                                if (_document2 != null) {
                                  readyState = _document2.readyState;
                                }
                                if ("complete" !== readyState) {
                                  const listener = globalThis.addEventListener("load", () => { ... }, true);
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
                                  closure_2_0(closure_2_1[1]).whenActivated(() => { ... });
                                  let tmp2Result = closure_2_0(closure_2_1[1]);
                                } else {
                                  let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                  let readyState;
                                  if (_document2 != null) {
                                    readyState = _document2.readyState;
                                  }
                                  if ("complete" !== readyState) {
                                    let listener = globalThis.addEventListener("load", () => { ... }, true);
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
                                closure_2_0(closure_2_1[1]).whenActivated(() => { ... });
                                const tmp2Result = closure_2_0(closure_2_1[1]);
                              } else {
                                const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                let readyState;
                                if (_document2 != null) {
                                  readyState = _document2.readyState;
                                }
                                if ("complete" !== readyState) {
                                  const listener = globalThis.addEventListener("load", () => { ... }, true);
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
                                  closure_2_0(closure_2_1[1]).whenActivated(() => { ... });
                                  let tmp2Result = closure_2_0(closure_2_1[1]);
                                } else {
                                  let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                  let readyState;
                                  if (_document2 != null) {
                                    readyState = _document2.readyState;
                                  }
                                  if ("complete" !== readyState) {
                                    let listener = globalThis.addEventListener("load", () => { ... }, true);
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
                                  closure_2_0(closure_2_1[1]).whenActivated(() => { ... });
                                  const tmp2Result = closure_2_0(closure_2_1[1]);
                                } else {
                                  const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                  let readyState;
                                  if (_document2 != null) {
                                    readyState = _document2.readyState;
                                  }
                                  if ("complete" !== readyState) {
                                    const listener = globalThis.addEventListener("load", () => { ... }, true);
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
                                    closure_2_0(closure_2_1[1]).whenActivated(() => { ... });
                                    let tmp2Result = closure_2_0(closure_2_1[1]);
                                  } else {
                                    let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                    let readyState;
                                    if (_document2 != null) {
                                      readyState = _document2.readyState;
                                    }
                                    if ("complete" !== readyState) {
                                      let listener = globalThis.addEventListener("load", () => { ... }, true);
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
      const _document2 = tmp(904).WINDOW.document;
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
                                closure_2_0(closure_2_1[1]).whenActivated(() => { ... });
                                const tmp2Result = closure_2_0(closure_2_1[1]);
                              } else {
                                const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                let readyState;
                                if (_document2 != null) {
                                  readyState = _document2.readyState;
                                }
                                if ("complete" !== readyState) {
                                  const listener = globalThis.addEventListener("load", () => { ... }, true);
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
                                  closure_2_0(closure_2_1[1]).whenActivated(() => { ... });
                                  let tmp2Result = closure_2_0(closure_2_1[1]);
                                } else {
                                  let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                  let readyState;
                                  if (_document2 != null) {
                                    readyState = _document2.readyState;
                                  }
                                  if ("complete" !== readyState) {
                                    let listener = globalThis.addEventListener("load", () => { ... }, true);
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
                                  closure_2_0(closure_2_1[1]).whenActivated(() => { ... });
                                  const tmp2Result = closure_2_0(closure_2_1[1]);
                                } else {
                                  const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                  let readyState;
                                  if (_document2 != null) {
                                    readyState = _document2.readyState;
                                  }
                                  if ("complete" !== readyState) {
                                    const listener = globalThis.addEventListener("load", () => { ... }, true);
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
                                    closure_2_0(closure_2_1[1]).whenActivated(() => { ... });
                                    let tmp2Result = closure_2_0(closure_2_1[1]);
                                  } else {
                                    let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                    let readyState;
                                    if (_document2 != null) {
                                      readyState = _document2.readyState;
                                    }
                                    if ("complete" !== readyState) {
                                      let listener = globalThis.addEventListener("load", () => { ... }, true);
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
                                  closure_2_0(closure_2_1[1]).whenActivated(() => { ... });
                                  const tmp2Result = closure_2_0(closure_2_1[1]);
                                } else {
                                  const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                  let readyState;
                                  if (_document2 != null) {
                                    readyState = _document2.readyState;
                                  }
                                  if ("complete" !== readyState) {
                                    const listener = globalThis.addEventListener("load", () => { ... }, true);
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
                                    closure_2_0(closure_2_1[1]).whenActivated(() => { ... });
                                    let tmp2Result = closure_2_0(closure_2_1[1]);
                                  } else {
                                    let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                    let readyState;
                                    if (_document2 != null) {
                                      readyState = _document2.readyState;
                                    }
                                    if ("complete" !== readyState) {
                                      let listener = globalThis.addEventListener("load", () => { ... }, true);
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
                                    closure_2_0(closure_2_1[1]).whenActivated(() => { ... });
                                    const tmp2Result = closure_2_0(closure_2_1[1]);
                                  } else {
                                    const _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                    let readyState;
                                    if (_document2 != null) {
                                      readyState = _document2.readyState;
                                    }
                                    if ("complete" !== readyState) {
                                      const listener = globalThis.addEventListener("load", () => { ... }, true);
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
                                      closure_2_0(closure_2_1[1]).whenActivated(() => { ... });
                                      let tmp2Result = closure_2_0(closure_2_1[1]);
                                    } else {
                                      let _document2 = closure_2_0(closure_2_1[0]).WINDOW.document;
                                      let readyState;
                                      if (_document2 != null) {
                                        readyState = _document2.readyState;
                                      }
                                      if ("complete" !== readyState) {
                                        let listener = globalThis.addEventListener("load", () => { ... }, true);
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
  const obj3 = metric(912);
};