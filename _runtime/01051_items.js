// _runtime/01051_items.js
const require = arg1;
let dependencyMap = arg6;
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
let items = [800, 1800];
function whenReady(arg0) {

}
arg5.TTFBThresholds = items;
arg5.onTTFB = (arg0) => {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let fn;
  dependencyMap = undefined;
  const metric = fn(1041).initMetric("TTFB");
  fn = metric;
  const obj2 = fn(1041);
  dependencyMap = fn(1044).bindReporter(arg0, metric, items, obj.reportAllChanges);
  if (typeof whenReady !== "function") {
    HermesBuiltin.throwTypeError();
  }
  fn = (arg0) => {
    const navigationEntry = fn(1040).getNavigationEntry();
    if (navigationEntry) {
      const _Math = Math;
      fn.value = Math.max(navigationEntry.responseStart - fn(1039).getActivationStart(), 0);
      items = [navigationEntry];
      fn.entries = items;
      dependencyMap(true);
      const tmpResult = fn(1039);
    }
  };
  const _document = tmp(1036).WINDOW.document;
  let prerendering;
  if (_document != null) {
    prerendering = _document.prerendering;
  }
  if (prerendering) {
    tmp(1035).whenActivated(() => {
      if (typeof closure_1_3 !== "function") {
        HermesBuiltin.throwTypeError();
      }
      const callback = tmp;
      const _document = callback(closure_1_1[0]).WINDOW.document;
      let prerendering;
      if (_document != null) {
        prerendering = _document.prerendering;
      }
      if (prerendering) {
        tmp2(tmp3[1]).whenActivated(() => {
          if (typeof closure_1_3 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          const callback = tmp;
          const _document = callback(closure_1_1[0]).WINDOW.document;
          let prerendering;
          if (_document != null) {
            prerendering = _document.prerendering;
          }
          if (prerendering) {
            tmp2(tmp3[1]).whenActivated(() => {
              if (typeof closure_1_3 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              const callback = tmp;
              const _document = callback(closure_1_1[0]).WINDOW.document;
              let prerendering;
              if (_document != null) {
                prerendering = _document.prerendering;
              }
              if (prerendering) {
                tmp2(tmp3[1]).whenActivated(() => {
                  if (typeof closure_1_3 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  const callback = tmp;
                  const _document = callback(closure_1_1[0]).WINDOW.document;
                  let prerendering;
                  if (_document != null) {
                    prerendering = _document.prerendering;
                  }
                  if (prerendering) {
                    tmp2(tmp3[1]).whenActivated(() => { ... });
                    const tmp2Result = tmp2(tmp3[1]);
                  } else {
                    const _document2 = tmp2(tmp3[0]).WINDOW.document;
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
                });
                const tmp2Result = tmp2(tmp3[1]);
              } else {
                const _document2 = tmp2(tmp3[0]).WINDOW.document;
                let readyState;
                if (_document2 != null) {
                  readyState = _document2.readyState;
                }
                if ("complete" !== readyState) {
                  const listener = globalThis.addEventListener("load", () => {
                    if (typeof closure_1_3 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    closure_0 = tmp;
                    let _document = closure_1_0(closure_1_1[0]).WINDOW.document;
                    let prerendering;
                    if (_document != null) {
                      prerendering = _document.prerendering;
                    }
                    if (prerendering) {
                      tmp2(tmp3[1]).whenActivated(() => { ... });
                      let tmp2Result = tmp2(tmp3[1]);
                    } else {
                      let _document2 = tmp2(tmp3[0]).WINDOW.document;
                      let readyState;
                      if (_document2 != null) {
                        readyState = _document2.readyState;
                      }
                      if ("complete" !== readyState) {
                        let listener = globalThis.addEventListener("load", () => { ... }, true);
                      } else {
                        let _setTimeout = setTimeout;
                        let timerId = setTimeout(tmp);
                      }
                    }
                  }, true);
                } else {
                  const _setTimeout = setTimeout;
                  const timerId = setTimeout(tmp);
                }
              }
            });
            const tmp2Result = tmp2(tmp3[1]);
          } else {
            const _document2 = tmp2(tmp3[0]).WINDOW.document;
            let readyState;
            if (_document2 != null) {
              readyState = _document2.readyState;
            }
            if ("complete" !== readyState) {
              const listener = globalThis.addEventListener("load", () => {
                if (typeof closure_1_3 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                closure_0 = tmp;
                let _document = closure_1_0(closure_1_1[0]).WINDOW.document;
                let prerendering;
                if (_document != null) {
                  prerendering = _document.prerendering;
                }
                if (prerendering) {
                  tmp2(tmp3[1]).whenActivated(() => {
                    if (typeof closure_1_3 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    const callback = tmp;
                    const _document = callback(closure_1_1[0]).WINDOW.document;
                    let prerendering;
                    if (_document != null) {
                      prerendering = _document.prerendering;
                    }
                    if (prerendering) {
                      tmp2(tmp3[1]).whenActivated(() => { ... });
                      const tmp2Result = tmp2(tmp3[1]);
                    } else {
                      const _document2 = tmp2(tmp3[0]).WINDOW.document;
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
                  });
                  let tmp2Result = tmp2(tmp3[1]);
                } else {
                  let _document2 = tmp2(tmp3[0]).WINDOW.document;
                  let readyState;
                  if (_document2 != null) {
                    readyState = _document2.readyState;
                  }
                  if ("complete" !== readyState) {
                    let listener = globalThis.addEventListener("load", () => {
                      if (typeof closure_1_3 !== "function") {
                        HermesBuiltin.throwTypeError();
                      }
                      closure_0 = tmp;
                      let _document = closure_1_0(closure_1_1[0]).WINDOW.document;
                      let prerendering;
                      if (_document != null) {
                        prerendering = _document.prerendering;
                      }
                      if (prerendering) {
                        tmp2(tmp3[1]).whenActivated(() => { ... });
                        let tmp2Result = tmp2(tmp3[1]);
                      } else {
                        let _document2 = tmp2(tmp3[0]).WINDOW.document;
                        let readyState;
                        if (_document2 != null) {
                          readyState = _document2.readyState;
                        }
                        if ("complete" !== readyState) {
                          let listener = globalThis.addEventListener("load", () => { ... }, true);
                        } else {
                          let _setTimeout = setTimeout;
                          let timerId = setTimeout(tmp);
                        }
                      }
                    }, true);
                  } else {
                    let _setTimeout = setTimeout;
                    let timerId = setTimeout(tmp);
                  }
                }
              }, true);
            } else {
              const _setTimeout = setTimeout;
              const timerId = setTimeout(tmp);
            }
          }
        });
        const tmp2Result = tmp2(tmp3[1]);
      } else {
        const _document2 = tmp2(tmp3[0]).WINDOW.document;
        let readyState;
        if (_document2 != null) {
          readyState = _document2.readyState;
        }
        if ("complete" !== readyState) {
          const listener = globalThis.addEventListener("load", () => {
            if (typeof closure_1_3 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            closure_0 = tmp;
            let _document = closure_1_0(closure_1_1[0]).WINDOW.document;
            let prerendering;
            if (_document != null) {
              prerendering = _document.prerendering;
            }
            if (prerendering) {
              tmp2(tmp3[1]).whenActivated(() => {
                if (typeof closure_1_3 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                const callback = tmp;
                const _document = callback(closure_1_1[0]).WINDOW.document;
                let prerendering;
                if (_document != null) {
                  prerendering = _document.prerendering;
                }
                if (prerendering) {
                  tmp2(tmp3[1]).whenActivated(() => {
                    if (typeof closure_1_3 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    const callback = tmp;
                    const _document = callback(closure_1_1[0]).WINDOW.document;
                    let prerendering;
                    if (_document != null) {
                      prerendering = _document.prerendering;
                    }
                    if (prerendering) {
                      tmp2(tmp3[1]).whenActivated(() => { ... });
                      const tmp2Result = tmp2(tmp3[1]);
                    } else {
                      const _document2 = tmp2(tmp3[0]).WINDOW.document;
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
                  });
                  const tmp2Result = tmp2(tmp3[1]);
                } else {
                  const _document2 = tmp2(tmp3[0]).WINDOW.document;
                  let readyState;
                  if (_document2 != null) {
                    readyState = _document2.readyState;
                  }
                  if ("complete" !== readyState) {
                    const listener = globalThis.addEventListener("load", () => {
                      if (typeof closure_1_3 !== "function") {
                        HermesBuiltin.throwTypeError();
                      }
                      closure_0 = tmp;
                      let _document = closure_1_0(closure_1_1[0]).WINDOW.document;
                      let prerendering;
                      if (_document != null) {
                        prerendering = _document.prerendering;
                      }
                      if (prerendering) {
                        tmp2(tmp3[1]).whenActivated(() => { ... });
                        let tmp2Result = tmp2(tmp3[1]);
                      } else {
                        let _document2 = tmp2(tmp3[0]).WINDOW.document;
                        let readyState;
                        if (_document2 != null) {
                          readyState = _document2.readyState;
                        }
                        if ("complete" !== readyState) {
                          let listener = globalThis.addEventListener("load", () => { ... }, true);
                        } else {
                          let _setTimeout = setTimeout;
                          let timerId = setTimeout(tmp);
                        }
                      }
                    }, true);
                  } else {
                    const _setTimeout = setTimeout;
                    const timerId = setTimeout(tmp);
                  }
                }
              });
              let tmp2Result = tmp2(tmp3[1]);
            } else {
              let _document2 = tmp2(tmp3[0]).WINDOW.document;
              let readyState;
              if (_document2 != null) {
                readyState = _document2.readyState;
              }
              if ("complete" !== readyState) {
                let listener = globalThis.addEventListener("load", () => {
                  if (typeof closure_1_3 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  closure_0 = tmp;
                  let _document = closure_1_0(closure_1_1[0]).WINDOW.document;
                  let prerendering;
                  if (_document != null) {
                    prerendering = _document.prerendering;
                  }
                  if (prerendering) {
                    tmp2(tmp3[1]).whenActivated(() => {
                      if (typeof closure_1_3 !== "function") {
                        HermesBuiltin.throwTypeError();
                      }
                      const callback = tmp;
                      const _document = callback(closure_1_1[0]).WINDOW.document;
                      let prerendering;
                      if (_document != null) {
                        prerendering = _document.prerendering;
                      }
                      if (prerendering) {
                        tmp2(tmp3[1]).whenActivated(() => { ... });
                        const tmp2Result = tmp2(tmp3[1]);
                      } else {
                        const _document2 = tmp2(tmp3[0]).WINDOW.document;
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
                    });
                    let tmp2Result = tmp2(tmp3[1]);
                  } else {
                    let _document2 = tmp2(tmp3[0]).WINDOW.document;
                    let readyState;
                    if (_document2 != null) {
                      readyState = _document2.readyState;
                    }
                    if ("complete" !== readyState) {
                      let listener = globalThis.addEventListener("load", () => {
                        if (typeof closure_1_3 !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        closure_0 = tmp;
                        let _document = closure_1_0(closure_1_1[0]).WINDOW.document;
                        let prerendering;
                        if (_document != null) {
                          prerendering = _document.prerendering;
                        }
                        if (prerendering) {
                          tmp2(tmp3[1]).whenActivated(() => { ... });
                          let tmp2Result = tmp2(tmp3[1]);
                        } else {
                          let _document2 = tmp2(tmp3[0]).WINDOW.document;
                          let readyState;
                          if (_document2 != null) {
                            readyState = _document2.readyState;
                          }
                          if ("complete" !== readyState) {
                            let listener = globalThis.addEventListener("load", () => { ... }, true);
                          } else {
                            let _setTimeout = setTimeout;
                            let timerId = setTimeout(tmp);
                          }
                        }
                      }, true);
                    } else {
                      let _setTimeout = setTimeout;
                      let timerId = setTimeout(tmp);
                    }
                  }
                }, true);
              } else {
                let _setTimeout = setTimeout;
                let timerId = setTimeout(tmp);
              }
            }
          }, true);
        } else {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(tmp);
        }
      }
    });
    let tmpResult = tmp(1035);
  } else {
    const _document2 = tmp(1036).WINDOW.document;
    let readyState;
    if (_document2 != null) {
      readyState = _document2.readyState;
    }
    if ("complete" !== readyState) {
      const listener = globalThis.addEventListener("load", () => {
        if (typeof closure_1_3 !== "function") {
          HermesBuiltin.throwTypeError();
        }
        closure_0 = tmp;
        let _document = closure_1_0(closure_1_1[0]).WINDOW.document;
        let prerendering;
        if (_document != null) {
          prerendering = _document.prerendering;
        }
        if (prerendering) {
          tmp2(tmp3[1]).whenActivated(() => {
            if (typeof closure_1_3 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            const callback = tmp;
            const _document = callback(closure_1_1[0]).WINDOW.document;
            let prerendering;
            if (_document != null) {
              prerendering = _document.prerendering;
            }
            if (prerendering) {
              tmp2(tmp3[1]).whenActivated(() => {
                if (typeof closure_1_3 !== "function") {
                  HermesBuiltin.throwTypeError();
                }
                const callback = tmp;
                const _document = callback(closure_1_1[0]).WINDOW.document;
                let prerendering;
                if (_document != null) {
                  prerendering = _document.prerendering;
                }
                if (prerendering) {
                  tmp2(tmp3[1]).whenActivated(() => {
                    if (typeof closure_1_3 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    const callback = tmp;
                    const _document = callback(closure_1_1[0]).WINDOW.document;
                    let prerendering;
                    if (_document != null) {
                      prerendering = _document.prerendering;
                    }
                    if (prerendering) {
                      tmp2(tmp3[1]).whenActivated(() => { ... });
                      const tmp2Result = tmp2(tmp3[1]);
                    } else {
                      const _document2 = tmp2(tmp3[0]).WINDOW.document;
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
                  });
                  const tmp2Result = tmp2(tmp3[1]);
                } else {
                  const _document2 = tmp2(tmp3[0]).WINDOW.document;
                  let readyState;
                  if (_document2 != null) {
                    readyState = _document2.readyState;
                  }
                  if ("complete" !== readyState) {
                    const listener = globalThis.addEventListener("load", () => {
                      if (typeof closure_1_3 !== "function") {
                        HermesBuiltin.throwTypeError();
                      }
                      closure_0 = tmp;
                      let _document = closure_1_0(closure_1_1[0]).WINDOW.document;
                      let prerendering;
                      if (_document != null) {
                        prerendering = _document.prerendering;
                      }
                      if (prerendering) {
                        tmp2(tmp3[1]).whenActivated(() => { ... });
                        let tmp2Result = tmp2(tmp3[1]);
                      } else {
                        let _document2 = tmp2(tmp3[0]).WINDOW.document;
                        let readyState;
                        if (_document2 != null) {
                          readyState = _document2.readyState;
                        }
                        if ("complete" !== readyState) {
                          let listener = globalThis.addEventListener("load", () => { ... }, true);
                        } else {
                          let _setTimeout = setTimeout;
                          let timerId = setTimeout(tmp);
                        }
                      }
                    }, true);
                  } else {
                    const _setTimeout = setTimeout;
                    const timerId = setTimeout(tmp);
                  }
                }
              });
              const tmp2Result = tmp2(tmp3[1]);
            } else {
              const _document2 = tmp2(tmp3[0]).WINDOW.document;
              let readyState;
              if (_document2 != null) {
                readyState = _document2.readyState;
              }
              if ("complete" !== readyState) {
                const listener = globalThis.addEventListener("load", () => {
                  if (typeof closure_1_3 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  closure_0 = tmp;
                  let _document = closure_1_0(closure_1_1[0]).WINDOW.document;
                  let prerendering;
                  if (_document != null) {
                    prerendering = _document.prerendering;
                  }
                  if (prerendering) {
                    tmp2(tmp3[1]).whenActivated(() => {
                      if (typeof closure_1_3 !== "function") {
                        HermesBuiltin.throwTypeError();
                      }
                      const callback = tmp;
                      const _document = callback(closure_1_1[0]).WINDOW.document;
                      let prerendering;
                      if (_document != null) {
                        prerendering = _document.prerendering;
                      }
                      if (prerendering) {
                        tmp2(tmp3[1]).whenActivated(() => { ... });
                        const tmp2Result = tmp2(tmp3[1]);
                      } else {
                        const _document2 = tmp2(tmp3[0]).WINDOW.document;
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
                    });
                    let tmp2Result = tmp2(tmp3[1]);
                  } else {
                    let _document2 = tmp2(tmp3[0]).WINDOW.document;
                    let readyState;
                    if (_document2 != null) {
                      readyState = _document2.readyState;
                    }
                    if ("complete" !== readyState) {
                      let listener = globalThis.addEventListener("load", () => {
                        if (typeof closure_1_3 !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        closure_0 = tmp;
                        let _document = closure_1_0(closure_1_1[0]).WINDOW.document;
                        let prerendering;
                        if (_document != null) {
                          prerendering = _document.prerendering;
                        }
                        if (prerendering) {
                          tmp2(tmp3[1]).whenActivated(() => { ... });
                          let tmp2Result = tmp2(tmp3[1]);
                        } else {
                          let _document2 = tmp2(tmp3[0]).WINDOW.document;
                          let readyState;
                          if (_document2 != null) {
                            readyState = _document2.readyState;
                          }
                          if ("complete" !== readyState) {
                            let listener = globalThis.addEventListener("load", () => { ... }, true);
                          } else {
                            let _setTimeout = setTimeout;
                            let timerId = setTimeout(tmp);
                          }
                        }
                      }, true);
                    } else {
                      let _setTimeout = setTimeout;
                      let timerId = setTimeout(tmp);
                    }
                  }
                }, true);
              } else {
                const _setTimeout = setTimeout;
                const timerId = setTimeout(tmp);
              }
            }
          });
          let tmp2Result = tmp2(tmp3[1]);
        } else {
          let _document2 = tmp2(tmp3[0]).WINDOW.document;
          let readyState;
          if (_document2 != null) {
            readyState = _document2.readyState;
          }
          if ("complete" !== readyState) {
            let listener = globalThis.addEventListener("load", () => {
              if (typeof closure_1_3 !== "function") {
                HermesBuiltin.throwTypeError();
              }
              closure_0 = tmp;
              let _document = closure_1_0(closure_1_1[0]).WINDOW.document;
              let prerendering;
              if (_document != null) {
                prerendering = _document.prerendering;
              }
              if (prerendering) {
                tmp2(tmp3[1]).whenActivated(() => {
                  if (typeof closure_1_3 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  const callback = tmp;
                  const _document = callback(closure_1_1[0]).WINDOW.document;
                  let prerendering;
                  if (_document != null) {
                    prerendering = _document.prerendering;
                  }
                  if (prerendering) {
                    tmp2(tmp3[1]).whenActivated(() => {
                      if (typeof closure_1_3 !== "function") {
                        HermesBuiltin.throwTypeError();
                      }
                      const callback = tmp;
                      const _document = callback(closure_1_1[0]).WINDOW.document;
                      let prerendering;
                      if (_document != null) {
                        prerendering = _document.prerendering;
                      }
                      if (prerendering) {
                        tmp2(tmp3[1]).whenActivated(() => { ... });
                        const tmp2Result = tmp2(tmp3[1]);
                      } else {
                        const _document2 = tmp2(tmp3[0]).WINDOW.document;
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
                    });
                    const tmp2Result = tmp2(tmp3[1]);
                  } else {
                    const _document2 = tmp2(tmp3[0]).WINDOW.document;
                    let readyState;
                    if (_document2 != null) {
                      readyState = _document2.readyState;
                    }
                    if ("complete" !== readyState) {
                      const listener = globalThis.addEventListener("load", () => {
                        if (typeof closure_1_3 !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        closure_0 = tmp;
                        let _document = closure_1_0(closure_1_1[0]).WINDOW.document;
                        let prerendering;
                        if (_document != null) {
                          prerendering = _document.prerendering;
                        }
                        if (prerendering) {
                          tmp2(tmp3[1]).whenActivated(() => { ... });
                          let tmp2Result = tmp2(tmp3[1]);
                        } else {
                          let _document2 = tmp2(tmp3[0]).WINDOW.document;
                          let readyState;
                          if (_document2 != null) {
                            readyState = _document2.readyState;
                          }
                          if ("complete" !== readyState) {
                            let listener = globalThis.addEventListener("load", () => { ... }, true);
                          } else {
                            let _setTimeout = setTimeout;
                            let timerId = setTimeout(tmp);
                          }
                        }
                      }, true);
                    } else {
                      const _setTimeout = setTimeout;
                      const timerId = setTimeout(tmp);
                    }
                  }
                });
                let tmp2Result = tmp2(tmp3[1]);
              } else {
                let _document2 = tmp2(tmp3[0]).WINDOW.document;
                let readyState;
                if (_document2 != null) {
                  readyState = _document2.readyState;
                }
                if ("complete" !== readyState) {
                  let listener = globalThis.addEventListener("load", () => {
                    if (typeof closure_1_3 !== "function") {
                      HermesBuiltin.throwTypeError();
                    }
                    closure_0 = tmp;
                    let _document = closure_1_0(closure_1_1[0]).WINDOW.document;
                    let prerendering;
                    if (_document != null) {
                      prerendering = _document.prerendering;
                    }
                    if (prerendering) {
                      tmp2(tmp3[1]).whenActivated(() => {
                        if (typeof closure_1_3 !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        const callback = tmp;
                        const _document = callback(closure_1_1[0]).WINDOW.document;
                        let prerendering;
                        if (_document != null) {
                          prerendering = _document.prerendering;
                        }
                        if (prerendering) {
                          tmp2(tmp3[1]).whenActivated(() => { ... });
                          const tmp2Result = tmp2(tmp3[1]);
                        } else {
                          const _document2 = tmp2(tmp3[0]).WINDOW.document;
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
                      });
                      let tmp2Result = tmp2(tmp3[1]);
                    } else {
                      let _document2 = tmp2(tmp3[0]).WINDOW.document;
                      let readyState;
                      if (_document2 != null) {
                        readyState = _document2.readyState;
                      }
                      if ("complete" !== readyState) {
                        let listener = globalThis.addEventListener("load", () => {
                          if (typeof closure_1_3 !== "function") {
                            HermesBuiltin.throwTypeError();
                          }
                          closure_0 = tmp;
                          let _document = closure_1_0(closure_1_1[0]).WINDOW.document;
                          let prerendering;
                          if (_document != null) {
                            prerendering = _document.prerendering;
                          }
                          if (prerendering) {
                            tmp2(tmp3[1]).whenActivated(() => { ... });
                            let tmp2Result = tmp2(tmp3[1]);
                          } else {
                            let _document2 = tmp2(tmp3[0]).WINDOW.document;
                            let readyState;
                            if (_document2 != null) {
                              readyState = _document2.readyState;
                            }
                            if ("complete" !== readyState) {
                              let listener = globalThis.addEventListener("load", () => { ... }, true);
                            } else {
                              let _setTimeout = setTimeout;
                              let timerId = setTimeout(tmp);
                            }
                          }
                        }, true);
                      } else {
                        let _setTimeout = setTimeout;
                        let timerId = setTimeout(tmp);
                      }
                    }
                  }, true);
                } else {
                  let _setTimeout = setTimeout;
                  let timerId = setTimeout(tmp);
                }
              }
            }, true);
          } else {
            let _setTimeout = setTimeout;
            let timerId = setTimeout(tmp);
          }
        }
      }, true);
    } else {
      const _setTimeout = setTimeout;
      const timerId = setTimeout(fn);
    }
  }
};