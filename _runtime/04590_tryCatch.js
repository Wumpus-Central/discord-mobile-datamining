// === Module 4590: tryCatch ===

// Module 4590 (tryCatch)
let tmp = globalThis;
if (!globalThis) {
  const _Function = Function;
  tmp = Function("return this")();
}
function tryCatch(call) {
  try {
    obj = arg2;
    call = call.call;
    if (typeof call === "unknown") {
      let callResult = call(obj);
    } else {
      callResult = call(arg1, obj);
    }
    obj = { type: "normal", arg: null };
    obj[1] = callResult;
  } catch (tmp4) {
    obj = { type: "throw", arg: null };
    obj[1] = tmp4;
    return obj;
  }
}
class Generator {
  constructor() {
    return;
  }
}
class GeneratorFunction {
  constructor() {
    return;
  }
}
class GeneratorFunctionPrototype {
  constructor() {
    return;
  }
}
class AsyncIterator {
  constructor(arg0) {
    closure_0 = global;
    this._invoke = function enqueue(arg0, arg1) {
      closure_0 = arg0;
      let nextPromise = arg1;
      if (nextPromise) {
        function callInvokeWithMethodAndArg() {
          return new Promise((arg0, arg1) => {
            closure_0 = arg0;
            closure_1 = arg1;
            const tmp = closure_1_10(closure_1_0[closure_0], closure_1_0, closure_1);
            if ("throw" !== tmp.type) {
              iter = tmp.arg;
              let value = iter.value;
              if (value) {
                if (typeof value === "object") {
                  let call = closure_1_0.call;
                  if (typeof call === "unknown") {
                    let callResult = tmp8("__await");
                  } else {
                    callResult = call(value, "__await");
                  }
                  if (callResult) {
                    let resolved = Promise.resolve(value.__await);
                    resolved.then((arg0) => {
                      const tmp2 = closure_1_10(lib.next, lib, arg0);
                      if ("throw" !== tmp2.type) {
                        iter = tmp2.arg;
                        const value = iter.value;
                        if (value) {
                          if (typeof value === "object") {
                            const call = lib.call;
                            if (typeof call === "unknown") {
                              let callResult = tmp9("__await");
                            } else {
                              callResult = call(value, "__await");
                            }
                            if (callResult) {
                              const resolved = Promise.resolve(value.__await);
                              resolved.then((arg0) => {
                                const tmp2 = closure_1_10(lib.next, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = lib.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        const resolved = Promise.resolve(value.__await);
                                        resolved.then(() => { ... }, () => { ... });
                                      }
                                      tmp9 = lib;
                                    }
                                  }
                                  const resolved1 = Promise.resolve(value);
                                  resolved1.then(() => { ... }, () => { ... });
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              }, (arg0) => {
                                const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = lib.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        const resolved = Promise.resolve(value.__await);
                                        resolved.then(() => { ... }, () => { ... });
                                      }
                                      tmp9 = lib;
                                    }
                                  }
                                  const resolved1 = Promise.resolve(value);
                                  resolved1.then(() => { ... }, () => { ... });
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              });
                            }
                            tmp9 = lib;
                          }
                        }
                        const resolved1 = Promise.resolve(value);
                        resolved1.then((value) => {
                          iter.value = value;
                          lib(iter);
                        }, (arg0) => {
                          const tmp2 = closure_1_10(lib.throw, lib, arg0);
                          if ("throw" !== tmp2.type) {
                            iter = tmp2.arg;
                            let fn = iter.value;
                            if (fn) {
                              if (typeof fn === "object") {
                                const call = lib.call;
                                if (typeof call === "unknown") {
                                  let callResult = tmp9("__await");
                                } else {
                                  callResult = call(fn, "__await");
                                }
                                tmp9 = lib;
                              }
                              const resolved = Promise.resolve(fn.__await);
                              fn = () => { ... };
                              nextPromise = resolved.then(() => { ... }, fn);
                            }
                            const resolved1 = Promise.resolve(fn);
                            nextPromise = resolved1.then(() => { ... }, () => { ... });
                          } else {
                            closure_1(tmp2.arg);
                          }
                        });
                      } else {
                        closure_1(tmp2.arg);
                      }
                    }, (arg0) => {
                      const tmp2 = closure_1_10(lib.throw, lib, arg0);
                      if ("throw" !== tmp2.type) {
                        iter = tmp2.arg;
                        const value = iter.value;
                        if (value) {
                          if (typeof value === "object") {
                            const call = lib.call;
                            if (typeof call === "unknown") {
                              let callResult = tmp9("__await");
                            } else {
                              callResult = call(value, "__await");
                            }
                            if (callResult) {
                              const resolved = Promise.resolve(value.__await);
                              resolved.then((arg0) => {
                                const tmp2 = closure_1_10(lib.next, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = lib.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        const resolved = Promise.resolve(value.__await);
                                        resolved.then(() => { ... }, () => { ... });
                                      }
                                      tmp9 = lib;
                                    }
                                  }
                                  const resolved1 = Promise.resolve(value);
                                  resolved1.then(() => { ... }, () => { ... });
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              }, (arg0) => {
                                const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = lib.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        const resolved = Promise.resolve(value.__await);
                                        resolved.then(() => { ... }, () => { ... });
                                      }
                                      tmp9 = lib;
                                    }
                                  }
                                  const resolved1 = Promise.resolve(value);
                                  resolved1.then(() => { ... }, () => { ... });
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              });
                            }
                            tmp9 = lib;
                          }
                        }
                        const resolved1 = Promise.resolve(value);
                        resolved1.then((value) => {
                          iter.value = value;
                          lib(iter);
                        }, (arg0) => {
                          const tmp2 = closure_1_10(lib.throw, lib, arg0);
                          if ("throw" !== tmp2.type) {
                            iter = tmp2.arg;
                            let fn = iter.value;
                            if (fn) {
                              if (typeof fn === "object") {
                                const call = lib.call;
                                if (typeof call === "unknown") {
                                  let callResult = tmp9("__await");
                                } else {
                                  callResult = call(fn, "__await");
                                }
                                tmp9 = lib;
                              }
                              const resolved = Promise.resolve(fn.__await);
                              fn = () => { ... };
                              nextPromise = resolved.then(() => { ... }, fn);
                            }
                            const resolved1 = Promise.resolve(fn);
                            nextPromise = resolved1.then(() => { ... }, () => { ... });
                          } else {
                            closure_1(tmp2.arg);
                          }
                        });
                      } else {
                        closure_1(tmp2.arg);
                      }
                    });
                  }
                  tmp8 = closure_1_0;
                }
              }
              let resolved1 = Promise.resolve(value);
              resolved1.then((value) => {
                iter.value = value;
                lib(iter);
              }, (arg0) => {
                const tmp2 = closure_1_10(lib.throw, lib, arg0);
                if ("throw" !== tmp2.type) {
                  iter = tmp2.arg;
                  let fn = iter.value;
                  if (fn) {
                    if (typeof fn === "object") {
                      const call = lib.call;
                      if (typeof call === "unknown") {
                        let callResult = tmp9("__await");
                      } else {
                        callResult = call(fn, "__await");
                      }
                      tmp9 = lib;
                    }
                    const resolved = Promise.resolve(fn.__await);
                    fn = (arg0) => {
                      const tmp2 = closure_1_10(lib.throw, lib, arg0);
                      if ("throw" !== tmp2.type) {
                        iter = tmp2.arg;
                        const value = iter.value;
                        if (value) {
                          if (typeof value === "object") {
                            const call = lib.call;
                            if (typeof call === "unknown") {
                              let callResult = tmp9("__await");
                            } else {
                              callResult = call(value, "__await");
                            }
                            if (callResult) {
                              const resolved = Promise.resolve(value.__await);
                              resolved.then(() => { ... }, () => { ... });
                            }
                            tmp9 = lib;
                          }
                        }
                        const resolved1 = Promise.resolve(value);
                        resolved1.then(() => { ... }, () => { ... });
                      } else {
                        closure_1(tmp2.arg);
                      }
                    };
                    nextPromise = resolved.then((arg0) => {
                      const tmp2 = closure_1_10(lib.next, lib, arg0);
                      if ("throw" !== tmp2.type) {
                        iter = tmp2.arg;
                        const value = iter.value;
                        if (value) {
                          if (typeof value === "object") {
                            const call = lib.call;
                            if (typeof call === "unknown") {
                              let callResult = tmp9("__await");
                            } else {
                              callResult = call(value, "__await");
                            }
                            if (callResult) {
                              const resolved = Promise.resolve(value.__await);
                              resolved.then(() => { ... }, () => { ... });
                            }
                            tmp9 = lib;
                          }
                        }
                        const resolved1 = Promise.resolve(value);
                        resolved1.then(() => { ... }, () => { ... });
                      } else {
                        closure_1(tmp2.arg);
                      }
                    }, fn);
                  }
                  const resolved1 = Promise.resolve(fn);
                  nextPromise = resolved1.then((value) => {
                    iter.value = value;
                    lib(iter);
                  }, (arg0) => {
                    const tmp2 = closure_1_10(lib.throw, lib, arg0);
                    if ("throw" !== tmp2.type) {
                      iter = tmp2.arg;
                      let fn = iter.value;
                      if (fn) {
                        if (typeof fn === "object") {
                          const call = lib.call;
                          if (typeof call === "unknown") {
                            let callResult = tmp9("__await");
                          } else {
                            callResult = call(fn, "__await");
                          }
                          tmp9 = lib;
                        }
                        const resolved = Promise.resolve(fn.__await);
                        fn = () => { ... };
                        nextPromise = resolved.then(() => { ... }, fn);
                      }
                      const resolved1 = Promise.resolve(fn);
                      nextPromise = resolved1.then(() => { ... }, () => { ... });
                    } else {
                      closure_1(tmp2.arg);
                    }
                  });
                } else {
                  closure_1(tmp2.arg);
                }
              });
            } else {
              arg1(tmp.arg);
            }
          });
        }
        nextPromise = nextPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
      } else {
        nextPromise = new Promise((arg0, arg1) => {
          closure_0 = arg0;
          closure_1 = arg1;
          const tmp = closure_1_10(closure_1_0[closure_0], closure_1_0, closure_1);
          if ("throw" !== tmp.type) {
            iter = tmp.arg;
            let value = iter.value;
            if (value) {
              if (typeof value === "object") {
                let call = closure_1_0.call;
                if (typeof call === "unknown") {
                  let callResult = tmp8("__await");
                } else {
                  callResult = call(value, "__await");
                }
                if (callResult) {
                  let resolved = Promise.resolve(value.__await);
                  resolved.then((arg0) => {
                    const tmp2 = closure_1_10(lib.next, lib, arg0);
                    if ("throw" !== tmp2.type) {
                      iter = tmp2.arg;
                      const value = iter.value;
                      if (value) {
                        if (typeof value === "object") {
                          const call = lib.call;
                          if (typeof call === "unknown") {
                            let callResult = tmp9("__await");
                          } else {
                            callResult = call(value, "__await");
                          }
                          if (callResult) {
                            const resolved = Promise.resolve(value.__await);
                            resolved.then((arg0) => {
                              const tmp2 = closure_1_10(lib.next, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                const value = iter.value;
                                if (value) {
                                  if (typeof value === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(value, "__await");
                                    }
                                    if (callResult) {
                                      const resolved = Promise.resolve(value.__await);
                                      resolved.then((arg0) => {
                                        const tmp2 = closure_1_10(lib.next, lib, arg0);
                                        if ("throw" !== tmp2.type) {
                                          iter = tmp2.arg;
                                          const value = iter.value;
                                          if (value) {
                                            if (typeof value === "object") {
                                              const call = lib.call;
                                              if (typeof call === "unknown") {
                                                let callResult = tmp9("__await");
                                              } else {
                                                callResult = call(value, "__await");
                                              }
                                              if (callResult) {
                                                const resolved = Promise.resolve(value.__await);
                                                resolved.then(() => { ... }, () => { ... });
                                              }
                                              tmp9 = lib;
                                            }
                                          }
                                          const resolved1 = Promise.resolve(value);
                                          resolved1.then(() => { ... }, () => { ... });
                                        } else {
                                          closure_1(tmp2.arg);
                                        }
                                      }, (arg0) => {
                                        const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                        if ("throw" !== tmp2.type) {
                                          iter = tmp2.arg;
                                          const value = iter.value;
                                          if (value) {
                                            if (typeof value === "object") {
                                              const call = lib.call;
                                              if (typeof call === "unknown") {
                                                let callResult = tmp9("__await");
                                              } else {
                                                callResult = call(value, "__await");
                                              }
                                              if (callResult) {
                                                const resolved = Promise.resolve(value.__await);
                                                resolved.then(() => { ... }, () => { ... });
                                              }
                                              tmp9 = lib;
                                            }
                                          }
                                          const resolved1 = Promise.resolve(value);
                                          resolved1.then(() => { ... }, () => { ... });
                                        } else {
                                          closure_1(tmp2.arg);
                                        }
                                      });
                                    }
                                    tmp9 = lib;
                                  }
                                }
                                const resolved1 = Promise.resolve(value);
                                resolved1.then((value) => {
                                  iter.value = value;
                                  lib(iter);
                                }, (arg0) => {
                                  const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                  if ("throw" !== tmp2.type) {
                                    iter = tmp2.arg;
                                    let fn = iter.value;
                                    if (fn) {
                                      if (typeof fn === "object") {
                                        const call = lib.call;
                                        if (typeof call === "unknown") {
                                          let callResult = tmp9("__await");
                                        } else {
                                          callResult = call(fn, "__await");
                                        }
                                        tmp9 = lib;
                                      }
                                      const resolved = Promise.resolve(fn.__await);
                                      fn = () => { ... };
                                      nextPromise = resolved.then(() => { ... }, fn);
                                    }
                                    const resolved1 = Promise.resolve(fn);
                                    nextPromise = resolved1.then(() => { ... }, () => { ... });
                                  } else {
                                    closure_1(tmp2.arg);
                                  }
                                });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            }, (arg0) => {
                              const tmp2 = closure_1_10(lib.throw, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                const value = iter.value;
                                if (value) {
                                  if (typeof value === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(value, "__await");
                                    }
                                    if (callResult) {
                                      const resolved = Promise.resolve(value.__await);
                                      resolved.then((arg0) => {
                                        const tmp2 = closure_1_10(lib.next, lib, arg0);
                                        if ("throw" !== tmp2.type) {
                                          iter = tmp2.arg;
                                          const value = iter.value;
                                          if (value) {
                                            if (typeof value === "object") {
                                              const call = lib.call;
                                              if (typeof call === "unknown") {
                                                let callResult = tmp9("__await");
                                              } else {
                                                callResult = call(value, "__await");
                                              }
                                              if (callResult) {
                                                const resolved = Promise.resolve(value.__await);
                                                resolved.then(() => { ... }, () => { ... });
                                              }
                                              tmp9 = lib;
                                            }
                                          }
                                          const resolved1 = Promise.resolve(value);
                                          resolved1.then(() => { ... }, () => { ... });
                                        } else {
                                          closure_1(tmp2.arg);
                                        }
                                      }, (arg0) => {
                                        const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                        if ("throw" !== tmp2.type) {
                                          iter = tmp2.arg;
                                          const value = iter.value;
                                          if (value) {
                                            if (typeof value === "object") {
                                              const call = lib.call;
                                              if (typeof call === "unknown") {
                                                let callResult = tmp9("__await");
                                              } else {
                                                callResult = call(value, "__await");
                                              }
                                              if (callResult) {
                                                const resolved = Promise.resolve(value.__await);
                                                resolved.then(() => { ... }, () => { ... });
                                              }
                                              tmp9 = lib;
                                            }
                                          }
                                          const resolved1 = Promise.resolve(value);
                                          resolved1.then(() => { ... }, () => { ... });
                                        } else {
                                          closure_1(tmp2.arg);
                                        }
                                      });
                                    }
                                    tmp9 = lib;
                                  }
                                }
                                const resolved1 = Promise.resolve(value);
                                resolved1.then((value) => {
                                  iter.value = value;
                                  lib(iter);
                                }, (arg0) => {
                                  const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                  if ("throw" !== tmp2.type) {
                                    iter = tmp2.arg;
                                    let fn = iter.value;
                                    if (fn) {
                                      if (typeof fn === "object") {
                                        const call = lib.call;
                                        if (typeof call === "unknown") {
                                          let callResult = tmp9("__await");
                                        } else {
                                          callResult = call(fn, "__await");
                                        }
                                        tmp9 = lib;
                                      }
                                      const resolved = Promise.resolve(fn.__await);
                                      fn = () => { ... };
                                      nextPromise = resolved.then(() => { ... }, fn);
                                    }
                                    const resolved1 = Promise.resolve(fn);
                                    nextPromise = resolved1.then(() => { ... }, () => { ... });
                                  } else {
                                    closure_1(tmp2.arg);
                                  }
                                });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            });
                          }
                          tmp9 = lib;
                        }
                      }
                      const resolved1 = Promise.resolve(value);
                      resolved1.then((value) => {
                        iter.value = value;
                        lib(iter);
                      }, (arg0) => {
                        const tmp2 = closure_1_10(lib.throw, lib, arg0);
                        if ("throw" !== tmp2.type) {
                          iter = tmp2.arg;
                          let fn = iter.value;
                          if (fn) {
                            if (typeof fn === "object") {
                              const call = lib.call;
                              if (typeof call === "unknown") {
                                let callResult = tmp9("__await");
                              } else {
                                callResult = call(fn, "__await");
                              }
                              tmp9 = lib;
                            }
                            const resolved = Promise.resolve(fn.__await);
                            fn = (arg0) => {
                              const tmp2 = closure_1_10(lib.throw, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                const value = iter.value;
                                if (value) {
                                  if (typeof value === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(value, "__await");
                                    }
                                    if (callResult) {
                                      const resolved = Promise.resolve(value.__await);
                                      resolved.then(() => { ... }, () => { ... });
                                    }
                                    tmp9 = lib;
                                  }
                                }
                                const resolved1 = Promise.resolve(value);
                                resolved1.then(() => { ... }, () => { ... });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            };
                            nextPromise = resolved.then((arg0) => {
                              const tmp2 = closure_1_10(lib.next, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                const value = iter.value;
                                if (value) {
                                  if (typeof value === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(value, "__await");
                                    }
                                    if (callResult) {
                                      const resolved = Promise.resolve(value.__await);
                                      resolved.then(() => { ... }, () => { ... });
                                    }
                                    tmp9 = lib;
                                  }
                                }
                                const resolved1 = Promise.resolve(value);
                                resolved1.then(() => { ... }, () => { ... });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            }, fn);
                          }
                          const resolved1 = Promise.resolve(fn);
                          nextPromise = resolved1.then((value) => {
                            iter.value = value;
                            lib(iter);
                          }, (arg0) => {
                            const tmp2 = closure_1_10(lib.throw, lib, arg0);
                            if ("throw" !== tmp2.type) {
                              iter = tmp2.arg;
                              let fn = iter.value;
                              if (fn) {
                                if (typeof fn === "object") {
                                  const call = lib.call;
                                  if (typeof call === "unknown") {
                                    let callResult = tmp9("__await");
                                  } else {
                                    callResult = call(fn, "__await");
                                  }
                                  tmp9 = lib;
                                }
                                const resolved = Promise.resolve(fn.__await);
                                fn = () => { ... };
                                nextPromise = resolved.then(() => { ... }, fn);
                              }
                              const resolved1 = Promise.resolve(fn);
                              nextPromise = resolved1.then(() => { ... }, () => { ... });
                            } else {
                              closure_1(tmp2.arg);
                            }
                          });
                        } else {
                          closure_1(tmp2.arg);
                        }
                      });
                    } else {
                      closure_1(tmp2.arg);
                    }
                  }, (arg0) => {
                    const tmp2 = closure_1_10(lib.throw, lib, arg0);
                    if ("throw" !== tmp2.type) {
                      iter = tmp2.arg;
                      const value = iter.value;
                      if (value) {
                        if (typeof value === "object") {
                          const call = lib.call;
                          if (typeof call === "unknown") {
                            let callResult = tmp9("__await");
                          } else {
                            callResult = call(value, "__await");
                          }
                          if (callResult) {
                            const resolved = Promise.resolve(value.__await);
                            resolved.then((arg0) => {
                              const tmp2 = closure_1_10(lib.next, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                const value = iter.value;
                                if (value) {
                                  if (typeof value === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(value, "__await");
                                    }
                                    if (callResult) {
                                      const resolved = Promise.resolve(value.__await);
                                      resolved.then((arg0) => {
                                        const tmp2 = closure_1_10(lib.next, lib, arg0);
                                        if ("throw" !== tmp2.type) {
                                          iter = tmp2.arg;
                                          const value = iter.value;
                                          if (value) {
                                            if (typeof value === "object") {
                                              const call = lib.call;
                                              if (typeof call === "unknown") {
                                                let callResult = tmp9("__await");
                                              } else {
                                                callResult = call(value, "__await");
                                              }
                                              if (callResult) {
                                                const resolved = Promise.resolve(value.__await);
                                                resolved.then(() => { ... }, () => { ... });
                                              }
                                              tmp9 = lib;
                                            }
                                          }
                                          const resolved1 = Promise.resolve(value);
                                          resolved1.then(() => { ... }, () => { ... });
                                        } else {
                                          closure_1(tmp2.arg);
                                        }
                                      }, (arg0) => {
                                        const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                        if ("throw" !== tmp2.type) {
                                          iter = tmp2.arg;
                                          const value = iter.value;
                                          if (value) {
                                            if (typeof value === "object") {
                                              const call = lib.call;
                                              if (typeof call === "unknown") {
                                                let callResult = tmp9("__await");
                                              } else {
                                                callResult = call(value, "__await");
                                              }
                                              if (callResult) {
                                                const resolved = Promise.resolve(value.__await);
                                                resolved.then(() => { ... }, () => { ... });
                                              }
                                              tmp9 = lib;
                                            }
                                          }
                                          const resolved1 = Promise.resolve(value);
                                          resolved1.then(() => { ... }, () => { ... });
                                        } else {
                                          closure_1(tmp2.arg);
                                        }
                                      });
                                    }
                                    tmp9 = lib;
                                  }
                                }
                                const resolved1 = Promise.resolve(value);
                                resolved1.then((value) => {
                                  iter.value = value;
                                  lib(iter);
                                }, (arg0) => {
                                  const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                  if ("throw" !== tmp2.type) {
                                    iter = tmp2.arg;
                                    let fn = iter.value;
                                    if (fn) {
                                      if (typeof fn === "object") {
                                        const call = lib.call;
                                        if (typeof call === "unknown") {
                                          let callResult = tmp9("__await");
                                        } else {
                                          callResult = call(fn, "__await");
                                        }
                                        tmp9 = lib;
                                      }
                                      const resolved = Promise.resolve(fn.__await);
                                      fn = () => { ... };
                                      nextPromise = resolved.then(() => { ... }, fn);
                                    }
                                    const resolved1 = Promise.resolve(fn);
                                    nextPromise = resolved1.then(() => { ... }, () => { ... });
                                  } else {
                                    closure_1(tmp2.arg);
                                  }
                                });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            }, (arg0) => {
                              const tmp2 = closure_1_10(lib.throw, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                const value = iter.value;
                                if (value) {
                                  if (typeof value === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(value, "__await");
                                    }
                                    if (callResult) {
                                      const resolved = Promise.resolve(value.__await);
                                      resolved.then((arg0) => {
                                        const tmp2 = closure_1_10(lib.next, lib, arg0);
                                        if ("throw" !== tmp2.type) {
                                          iter = tmp2.arg;
                                          const value = iter.value;
                                          if (value) {
                                            if (typeof value === "object") {
                                              const call = lib.call;
                                              if (typeof call === "unknown") {
                                                let callResult = tmp9("__await");
                                              } else {
                                                callResult = call(value, "__await");
                                              }
                                              if (callResult) {
                                                const resolved = Promise.resolve(value.__await);
                                                resolved.then(() => { ... }, () => { ... });
                                              }
                                              tmp9 = lib;
                                            }
                                          }
                                          const resolved1 = Promise.resolve(value);
                                          resolved1.then(() => { ... }, () => { ... });
                                        } else {
                                          closure_1(tmp2.arg);
                                        }
                                      }, (arg0) => {
                                        const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                        if ("throw" !== tmp2.type) {
                                          iter = tmp2.arg;
                                          const value = iter.value;
                                          if (value) {
                                            if (typeof value === "object") {
                                              const call = lib.call;
                                              if (typeof call === "unknown") {
                                                let callResult = tmp9("__await");
                                              } else {
                                                callResult = call(value, "__await");
                                              }
                                              if (callResult) {
                                                const resolved = Promise.resolve(value.__await);
                                                resolved.then(() => { ... }, () => { ... });
                                              }
                                              tmp9 = lib;
                                            }
                                          }
                                          const resolved1 = Promise.resolve(value);
                                          resolved1.then(() => { ... }, () => { ... });
                                        } else {
                                          closure_1(tmp2.arg);
                                        }
                                      });
                                    }
                                    tmp9 = lib;
                                  }
                                }
                                const resolved1 = Promise.resolve(value);
                                resolved1.then((value) => {
                                  iter.value = value;
                                  lib(iter);
                                }, (arg0) => {
                                  const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                  if ("throw" !== tmp2.type) {
                                    iter = tmp2.arg;
                                    let fn = iter.value;
                                    if (fn) {
                                      if (typeof fn === "object") {
                                        const call = lib.call;
                                        if (typeof call === "unknown") {
                                          let callResult = tmp9("__await");
                                        } else {
                                          callResult = call(fn, "__await");
                                        }
                                        tmp9 = lib;
                                      }
                                      const resolved = Promise.resolve(fn.__await);
                                      fn = () => { ... };
                                      nextPromise = resolved.then(() => { ... }, fn);
                                    }
                                    const resolved1 = Promise.resolve(fn);
                                    nextPromise = resolved1.then(() => { ... }, () => { ... });
                                  } else {
                                    closure_1(tmp2.arg);
                                  }
                                });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            });
                          }
                          tmp9 = lib;
                        }
                      }
                      const resolved1 = Promise.resolve(value);
                      resolved1.then((value) => {
                        iter.value = value;
                        lib(iter);
                      }, (arg0) => {
                        const tmp2 = closure_1_10(lib.throw, lib, arg0);
                        if ("throw" !== tmp2.type) {
                          iter = tmp2.arg;
                          let fn = iter.value;
                          if (fn) {
                            if (typeof fn === "object") {
                              const call = lib.call;
                              if (typeof call === "unknown") {
                                let callResult = tmp9("__await");
                              } else {
                                callResult = call(fn, "__await");
                              }
                              tmp9 = lib;
                            }
                            const resolved = Promise.resolve(fn.__await);
                            fn = (arg0) => {
                              const tmp2 = closure_1_10(lib.throw, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                const value = iter.value;
                                if (value) {
                                  if (typeof value === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(value, "__await");
                                    }
                                    if (callResult) {
                                      const resolved = Promise.resolve(value.__await);
                                      resolved.then(() => { ... }, () => { ... });
                                    }
                                    tmp9 = lib;
                                  }
                                }
                                const resolved1 = Promise.resolve(value);
                                resolved1.then(() => { ... }, () => { ... });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            };
                            nextPromise = resolved.then((arg0) => {
                              const tmp2 = closure_1_10(lib.next, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                const value = iter.value;
                                if (value) {
                                  if (typeof value === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(value, "__await");
                                    }
                                    if (callResult) {
                                      const resolved = Promise.resolve(value.__await);
                                      resolved.then(() => { ... }, () => { ... });
                                    }
                                    tmp9 = lib;
                                  }
                                }
                                const resolved1 = Promise.resolve(value);
                                resolved1.then(() => { ... }, () => { ... });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            }, fn);
                          }
                          const resolved1 = Promise.resolve(fn);
                          nextPromise = resolved1.then((value) => {
                            iter.value = value;
                            lib(iter);
                          }, (arg0) => {
                            const tmp2 = closure_1_10(lib.throw, lib, arg0);
                            if ("throw" !== tmp2.type) {
                              iter = tmp2.arg;
                              let fn = iter.value;
                              if (fn) {
                                if (typeof fn === "object") {
                                  const call = lib.call;
                                  if (typeof call === "unknown") {
                                    let callResult = tmp9("__await");
                                  } else {
                                    callResult = call(fn, "__await");
                                  }
                                  tmp9 = lib;
                                }
                                const resolved = Promise.resolve(fn.__await);
                                fn = () => { ... };
                                nextPromise = resolved.then(() => { ... }, fn);
                              }
                              const resolved1 = Promise.resolve(fn);
                              nextPromise = resolved1.then(() => { ... }, () => { ... });
                            } else {
                              closure_1(tmp2.arg);
                            }
                          });
                        } else {
                          closure_1(tmp2.arg);
                        }
                      });
                    } else {
                      closure_1(tmp2.arg);
                    }
                  });
                }
                tmp8 = closure_1_0;
              }
            }
            let resolved1 = Promise.resolve(value);
            resolved1.then((value) => {
              iter.value = value;
              lib(iter);
            }, (arg0) => {
              const tmp2 = closure_1_10(lib.throw, lib, arg0);
              if ("throw" !== tmp2.type) {
                iter = tmp2.arg;
                let fn = iter.value;
                if (fn) {
                  if (typeof fn === "object") {
                    const call = lib.call;
                    if (typeof call === "unknown") {
                      let callResult = tmp9("__await");
                    } else {
                      callResult = call(fn, "__await");
                    }
                    tmp9 = lib;
                  }
                  const resolved = Promise.resolve(fn.__await);
                  fn = (arg0) => {
                    const tmp2 = closure_1_10(lib.throw, lib, arg0);
                    if ("throw" !== tmp2.type) {
                      iter = tmp2.arg;
                      const value = iter.value;
                      if (value) {
                        if (typeof value === "object") {
                          const call = lib.call;
                          if (typeof call === "unknown") {
                            let callResult = tmp9("__await");
                          } else {
                            callResult = call(value, "__await");
                          }
                          if (callResult) {
                            const resolved = Promise.resolve(value.__await);
                            resolved.then((arg0) => {
                              const tmp2 = closure_1_10(lib.next, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                const value = iter.value;
                                if (value) {
                                  if (typeof value === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(value, "__await");
                                    }
                                    if (callResult) {
                                      const resolved = Promise.resolve(value.__await);
                                      resolved.then(() => { ... }, () => { ... });
                                    }
                                    tmp9 = lib;
                                  }
                                }
                                const resolved1 = Promise.resolve(value);
                                resolved1.then(() => { ... }, () => { ... });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            }, (arg0) => {
                              const tmp2 = closure_1_10(lib.throw, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                const value = iter.value;
                                if (value) {
                                  if (typeof value === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(value, "__await");
                                    }
                                    if (callResult) {
                                      const resolved = Promise.resolve(value.__await);
                                      resolved.then(() => { ... }, () => { ... });
                                    }
                                    tmp9 = lib;
                                  }
                                }
                                const resolved1 = Promise.resolve(value);
                                resolved1.then(() => { ... }, () => { ... });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            });
                          }
                          tmp9 = lib;
                        }
                      }
                      const resolved1 = Promise.resolve(value);
                      resolved1.then((value) => {
                        iter.value = value;
                        lib(iter);
                      }, (arg0) => {
                        const tmp2 = closure_1_10(lib.throw, lib, arg0);
                        if ("throw" !== tmp2.type) {
                          iter = tmp2.arg;
                          let fn = iter.value;
                          if (fn) {
                            if (typeof fn === "object") {
                              const call = lib.call;
                              if (typeof call === "unknown") {
                                let callResult = tmp9("__await");
                              } else {
                                callResult = call(fn, "__await");
                              }
                              tmp9 = lib;
                            }
                            const resolved = Promise.resolve(fn.__await);
                            fn = () => { ... };
                            nextPromise = resolved.then(() => { ... }, fn);
                          }
                          const resolved1 = Promise.resolve(fn);
                          nextPromise = resolved1.then(() => { ... }, () => { ... });
                        } else {
                          closure_1(tmp2.arg);
                        }
                      });
                    } else {
                      closure_1(tmp2.arg);
                    }
                  };
                  nextPromise = resolved.then((arg0) => {
                    const tmp2 = closure_1_10(lib.next, lib, arg0);
                    if ("throw" !== tmp2.type) {
                      iter = tmp2.arg;
                      const value = iter.value;
                      if (value) {
                        if (typeof value === "object") {
                          const call = lib.call;
                          if (typeof call === "unknown") {
                            let callResult = tmp9("__await");
                          } else {
                            callResult = call(value, "__await");
                          }
                          if (callResult) {
                            const resolved = Promise.resolve(value.__await);
                            resolved.then((arg0) => {
                              const tmp2 = closure_1_10(lib.next, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                const value = iter.value;
                                if (value) {
                                  if (typeof value === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(value, "__await");
                                    }
                                    if (callResult) {
                                      const resolved = Promise.resolve(value.__await);
                                      resolved.then(() => { ... }, () => { ... });
                                    }
                                    tmp9 = lib;
                                  }
                                }
                                const resolved1 = Promise.resolve(value);
                                resolved1.then(() => { ... }, () => { ... });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            }, (arg0) => {
                              const tmp2 = closure_1_10(lib.throw, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                const value = iter.value;
                                if (value) {
                                  if (typeof value === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(value, "__await");
                                    }
                                    if (callResult) {
                                      const resolved = Promise.resolve(value.__await);
                                      resolved.then(() => { ... }, () => { ... });
                                    }
                                    tmp9 = lib;
                                  }
                                }
                                const resolved1 = Promise.resolve(value);
                                resolved1.then(() => { ... }, () => { ... });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            });
                          }
                          tmp9 = lib;
                        }
                      }
                      const resolved1 = Promise.resolve(value);
                      resolved1.then((value) => {
                        iter.value = value;
                        lib(iter);
                      }, (arg0) => {
                        const tmp2 = closure_1_10(lib.throw, lib, arg0);
                        if ("throw" !== tmp2.type) {
                          iter = tmp2.arg;
                          let fn = iter.value;
                          if (fn) {
                            if (typeof fn === "object") {
                              const call = lib.call;
                              if (typeof call === "unknown") {
                                let callResult = tmp9("__await");
                              } else {
                                callResult = call(fn, "__await");
                              }
                              tmp9 = lib;
                            }
                            const resolved = Promise.resolve(fn.__await);
                            fn = () => { ... };
                            nextPromise = resolved.then(() => { ... }, fn);
                          }
                          const resolved1 = Promise.resolve(fn);
                          nextPromise = resolved1.then(() => { ... }, () => { ... });
                        } else {
                          closure_1(tmp2.arg);
                        }
                      });
                    } else {
                      closure_1(tmp2.arg);
                    }
                  }, fn);
                }
                const resolved1 = Promise.resolve(fn);
                nextPromise = resolved1.then((value) => {
                  iter.value = value;
                  lib(iter);
                }, (arg0) => {
                  const tmp2 = closure_1_10(lib.throw, lib, arg0);
                  if ("throw" !== tmp2.type) {
                    iter = tmp2.arg;
                    let fn = iter.value;
                    if (fn) {
                      if (typeof fn === "object") {
                        const call = lib.call;
                        if (typeof call === "unknown") {
                          let callResult = tmp9("__await");
                        } else {
                          callResult = call(fn, "__await");
                        }
                        tmp9 = lib;
                      }
                      const resolved = Promise.resolve(fn.__await);
                      fn = (arg0) => {
                        const tmp2 = closure_1_10(lib.throw, lib, arg0);
                        if ("throw" !== tmp2.type) {
                          iter = tmp2.arg;
                          const value = iter.value;
                          if (value) {
                            if (typeof value === "object") {
                              const call = lib.call;
                              if (typeof call === "unknown") {
                                let callResult = tmp9("__await");
                              } else {
                                callResult = call(value, "__await");
                              }
                              if (callResult) {
                                const resolved = Promise.resolve(value.__await);
                                resolved.then(() => { ... }, () => { ... });
                              }
                              tmp9 = lib;
                            }
                          }
                          const resolved1 = Promise.resolve(value);
                          resolved1.then(() => { ... }, () => { ... });
                        } else {
                          closure_1(tmp2.arg);
                        }
                      };
                      nextPromise = resolved.then((arg0) => {
                        const tmp2 = closure_1_10(lib.next, lib, arg0);
                        if ("throw" !== tmp2.type) {
                          iter = tmp2.arg;
                          const value = iter.value;
                          if (value) {
                            if (typeof value === "object") {
                              const call = lib.call;
                              if (typeof call === "unknown") {
                                let callResult = tmp9("__await");
                              } else {
                                callResult = call(value, "__await");
                              }
                              if (callResult) {
                                const resolved = Promise.resolve(value.__await);
                                resolved.then(() => { ... }, () => { ... });
                              }
                              tmp9 = lib;
                            }
                          }
                          const resolved1 = Promise.resolve(value);
                          resolved1.then(() => { ... }, () => { ... });
                        } else {
                          closure_1(tmp2.arg);
                        }
                      }, fn);
                    }
                    const resolved1 = Promise.resolve(fn);
                    nextPromise = resolved1.then((value) => {
                      iter.value = value;
                      lib(iter);
                    }, (arg0) => {
                      const tmp2 = closure_1_10(lib.throw, lib, arg0);
                      if ("throw" !== tmp2.type) {
                        iter = tmp2.arg;
                        let fn = iter.value;
                        if (fn) {
                          if (typeof fn === "object") {
                            const call = lib.call;
                            if (typeof call === "unknown") {
                              let callResult = tmp9("__await");
                            } else {
                              callResult = call(fn, "__await");
                            }
                            tmp9 = lib;
                          }
                          const resolved = Promise.resolve(fn.__await);
                          fn = () => { ... };
                          nextPromise = resolved.then(() => { ... }, fn);
                        }
                        const resolved1 = Promise.resolve(fn);
                        nextPromise = resolved1.then(() => { ... }, () => { ... });
                      } else {
                        closure_1(tmp2.arg);
                      }
                    });
                  } else {
                    closure_1(tmp2.arg);
                  }
                });
              } else {
                closure_1(tmp2.arg);
              }
            });
          } else {
            arg1(tmp.arg);
          }
        });
      }
      return nextPromise;
    };
    return;
  }
}
function maybeInvokeDelegate(iterator, method) {
  if (iterator.iterator[method.method] === undefined) {
    method.delegate = null;
    if ("throw" === method.method) {
      if (iterator.iterator.return) {
        method.method = "return";
        method.arg = undefined;
        maybeInvokeDelegate(iterator, method);
        if ("throw" === method.method) {
          return closure_8;
        }
      }
      method.method = "throw";
      const _TypeError2 = TypeError;
      const typeError = new TypeError("The iterator does not provide a 'throw' method");
      method.arg = typeError;
    }
    return closure_8;
  } else {
    const tmp24 = tryCatch(tmp, iterator.iterator, method.arg);
    if ("throw" === tmp24.type) {
      method.method = "throw";
      method.arg = tmp24.arg;
      method.delegate = null;
      return closure_8;
    } else {
      if (tmp24.arg) {
        let tmp9 = iter;
        if (iter.done) {
          method[iterator.resultName] = iter.value;
          method.next = iterator.nextLoc;
          if ("return" !== method.method) {
            method.method = "next";
            method.arg = undefined;
          }
          method.delegate = null;
          tmp9 = closure_8;
        }
        let tmp8 = tmp9;
      } else {
        method.method = "throw";
        const _TypeError = TypeError;
        const typeError1 = new TypeError("iterator result is not an object");
        method.arg = typeError1;
        method.delegate = null;
        tmp8 = closure_8;
      }
      return tmp8;
    }
  }
}
function pushTryEntry(tryLoc) {
  obj = { tryLoc: tryLoc[0] };
  if (1 in tryLoc) {
    obj.catchLoc = tryLoc[1];
  }
  if (2 in tryLoc) {
    obj.finallyLoc = tryLoc[2];
    obj.afterLoc = tryLoc[3];
  }
  const tryEntries = this.tryEntries;
  tryEntries.push(obj);
}
function resetTryEntry(completion) {
  const tmp3 = completion.completion || {};
  tmp3.type = "normal";
  delete tmp[tmp2];
  completion.completion = tmp3;
}
class Context {
  constructor(arg0) {
    items = [];
    items[0] = { tryLoc: "root" };
    this.tryEntries = items;
    item = global.forEach(pushTryEntry, this);
    resetResult = this.reset(true);
    return;
  }
}
function doneResult() {
  return { value: "HermesInternal", done: null };
}
const hasOwnProperty = prototype.hasOwnProperty;
let items2 = hasOwnProperty;
let tmp2 = typeof Symbol === "function" ? Symbol : {};
let c1 = tmp3;
let next = tmp5;
const regeneratorRuntime = tmp.regeneratorRuntime;
let closure_3 = regeneratorRuntime;
if (regeneratorRuntime) {
  if (typeof module === "object") {
    module.exports = regeneratorRuntime;
  }
} else {
  let tmp6 = typeof module === "object" ? module.exports : {};
  tmp.regeneratorRuntime = tmp6;
  closure_3 = tmp6;
  tmp6.wrap = function wrap(arg0, arg1, arg2, arg3) {
    let tmp = arg1;
    if (!arg1) {
      tmp = Generator;
    }
    let items = arg3;
    obj = Object.create(tmp.prototype);
    if (!arg3) {
      items = [];
    }
    obj = Object.create(Context.prototype);
    const items1 = [{ tryLoc: "root" }];
    obj.tryEntries = items1;
    const item = items.forEach(pushTryEntry, obj);
    obj.reset(true);
    closure_0 = arg0;
    closure_1 = arg2;
    closure_3 = closure_4;
    obj._invoke = function invoke(method, arg1) {
      if (closure_3 === closure_1_6) {
        const _Error = Error;
        error = new Error("Generator is already running");
        throw error;
      } else if (tmp === closure_1_7) {
        if ("throw" === method) {
          throw arg1;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        obj.method = method;
        obj.arg = arg1;
        while (true) {
          iter = obj;
          let delegate = obj.delegate;
          if (delegate) {
            let tmp2 = closure_1_15;
            let tmp3 = closure_1_15(delegate, iter);
            if (tmp3) {
              let tmp15 = closure_1_8;
              if (tmp3 === closure_1_8) {
                continue;
              } else {
                return tmp3;
              }
            }
          }
          if ("next" === iter.method) {
            let arg = iter.arg;
            iter._sent = arg;
            iter.sent = arg;
          } else if ("throw" === iter.method) {
            let tmp5 = closure_3;
            let tmp6 = closure_1_4;
            if (closure_3 === closure_1_4) {
              break;
            } else {
              let dispatchExceptionResult = iter.dispatchException(iter.arg);
            }
          } else if ("return" === iter.method) {
            let abruptResult = iter.abrupt("return", iter.arg);
          }
          let tmp9 = closure_1_6;
          closure_3 = closure_1_6;
          let tmp10 = closure_1_10;
          let tmp11 = iter;
          let tmp12 = c1;
          let tmp13 = closure_1_10(iter, c1, iter);
          if ("normal" === tmp13.type) {
            closure_3 = iter.done ? closure_1_7 : closure_1_5;
            let tmp14 = closure_1_8;
            if (tmp13.arg === closure_1_8) {
              continue;
            } else {
              obj = { value: null, done: null };
              obj[0] = tmp13.arg;
              obj[1] = iter.done;
              return obj;
            }
          } else {
            if ("throw" !== tmp13.type) {
              continue;
            } else {
              let tmp25 = closure_1_7;
              closure_3 = closure_1_7;
              iter.method = "throw";
              iter.arg = tmp13.arg;
              continue;
            }
            continue;
          }
          continue;
        }
        closure_3 = closure_1_7;
        throw iter.arg;
      }
    };
    return obj;
  };
  class Generator {
    constructor() {
      return;
    }
  }
  class GeneratorFunction {
    constructor() {
      return;
    }
  }
  class GeneratorFunctionPrototype {
    constructor() {
      return;
    }
  }
  class AsyncIterator {
    constructor(arg0) {
      closure_0 = global;
      this._invoke = function enqueue(arg0, arg1) {
        closure_0 = arg0;
        let nextPromise = arg1;
        if (nextPromise) {
          function callInvokeWithMethodAndArg() {
            return new Promise((arg0, arg1) => {
              closure_0 = arg0;
              closure_1 = arg1;
              const tmp = closure_1_10(closure_1_0[closure_0], closure_1_0, closure_1);
              if ("throw" !== tmp.type) {
                iter = tmp.arg;
                let value = iter.value;
                if (value) {
                  if (typeof value === "object") {
                    let call = closure_1_0.call;
                    if (typeof call === "unknown") {
                      let callResult = tmp8("__await");
                    } else {
                      callResult = call(value, "__await");
                    }
                    if (callResult) {
                      let resolved = Promise.resolve(value.__await);
                      resolved.then((arg0) => {
                        const tmp2 = closure_1_10(lib.next, lib, arg0);
                        if ("throw" !== tmp2.type) {
                          iter = tmp2.arg;
                          const value = iter.value;
                          if (value) {
                            if (typeof value === "object") {
                              const call = lib.call;
                              if (typeof call === "unknown") {
                                let callResult = tmp9("__await");
                              } else {
                                callResult = call(value, "__await");
                              }
                              if (callResult) {
                                const resolved = Promise.resolve(value.__await);
                                resolved.then((arg0) => {
                                  const tmp2 = closure_1_10(lib.next, lib, arg0);
                                  if ("throw" !== tmp2.type) {
                                    iter = tmp2.arg;
                                    const value = iter.value;
                                    if (value) {
                                      if (typeof value === "object") {
                                        const call = lib.call;
                                        if (typeof call === "unknown") {
                                          let callResult = tmp9("__await");
                                        } else {
                                          callResult = call(value, "__await");
                                        }
                                        if (callResult) {
                                          const resolved = Promise.resolve(value.__await);
                                          resolved.then(() => { ... }, () => { ... });
                                        }
                                        tmp9 = lib;
                                      }
                                    }
                                    const resolved1 = Promise.resolve(value);
                                    resolved1.then(() => { ... }, () => { ... });
                                  } else {
                                    closure_1(tmp2.arg);
                                  }
                                }, (arg0) => {
                                  const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                  if ("throw" !== tmp2.type) {
                                    iter = tmp2.arg;
                                    const value = iter.value;
                                    if (value) {
                                      if (typeof value === "object") {
                                        const call = lib.call;
                                        if (typeof call === "unknown") {
                                          let callResult = tmp9("__await");
                                        } else {
                                          callResult = call(value, "__await");
                                        }
                                        if (callResult) {
                                          const resolved = Promise.resolve(value.__await);
                                          resolved.then(() => { ... }, () => { ... });
                                        }
                                        tmp9 = lib;
                                      }
                                    }
                                    const resolved1 = Promise.resolve(value);
                                    resolved1.then(() => { ... }, () => { ... });
                                  } else {
                                    closure_1(tmp2.arg);
                                  }
                                });
                              }
                              tmp9 = lib;
                            }
                          }
                          const resolved1 = Promise.resolve(value);
                          resolved1.then((value) => {
                            iter.value = value;
                            lib(iter);
                          }, (arg0) => {
                            const tmp2 = closure_1_10(lib.throw, lib, arg0);
                            if ("throw" !== tmp2.type) {
                              iter = tmp2.arg;
                              let fn = iter.value;
                              if (fn) {
                                if (typeof fn === "object") {
                                  const call = lib.call;
                                  if (typeof call === "unknown") {
                                    let callResult = tmp9("__await");
                                  } else {
                                    callResult = call(fn, "__await");
                                  }
                                  tmp9 = lib;
                                }
                                const resolved = Promise.resolve(fn.__await);
                                fn = () => { ... };
                                nextPromise = resolved.then(() => { ... }, fn);
                              }
                              const resolved1 = Promise.resolve(fn);
                              nextPromise = resolved1.then(() => { ... }, () => { ... });
                            } else {
                              closure_1(tmp2.arg);
                            }
                          });
                        } else {
                          closure_1(tmp2.arg);
                        }
                      }, (arg0) => {
                        const tmp2 = closure_1_10(lib.throw, lib, arg0);
                        if ("throw" !== tmp2.type) {
                          iter = tmp2.arg;
                          const value = iter.value;
                          if (value) {
                            if (typeof value === "object") {
                              const call = lib.call;
                              if (typeof call === "unknown") {
                                let callResult = tmp9("__await");
                              } else {
                                callResult = call(value, "__await");
                              }
                              if (callResult) {
                                const resolved = Promise.resolve(value.__await);
                                resolved.then((arg0) => {
                                  const tmp2 = closure_1_10(lib.next, lib, arg0);
                                  if ("throw" !== tmp2.type) {
                                    iter = tmp2.arg;
                                    const value = iter.value;
                                    if (value) {
                                      if (typeof value === "object") {
                                        const call = lib.call;
                                        if (typeof call === "unknown") {
                                          let callResult = tmp9("__await");
                                        } else {
                                          callResult = call(value, "__await");
                                        }
                                        if (callResult) {
                                          const resolved = Promise.resolve(value.__await);
                                          resolved.then(() => { ... }, () => { ... });
                                        }
                                        tmp9 = lib;
                                      }
                                    }
                                    const resolved1 = Promise.resolve(value);
                                    resolved1.then(() => { ... }, () => { ... });
                                  } else {
                                    closure_1(tmp2.arg);
                                  }
                                }, (arg0) => {
                                  const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                  if ("throw" !== tmp2.type) {
                                    iter = tmp2.arg;
                                    const value = iter.value;
                                    if (value) {
                                      if (typeof value === "object") {
                                        const call = lib.call;
                                        if (typeof call === "unknown") {
                                          let callResult = tmp9("__await");
                                        } else {
                                          callResult = call(value, "__await");
                                        }
                                        if (callResult) {
                                          const resolved = Promise.resolve(value.__await);
                                          resolved.then(() => { ... }, () => { ... });
                                        }
                                        tmp9 = lib;
                                      }
                                    }
                                    const resolved1 = Promise.resolve(value);
                                    resolved1.then(() => { ... }, () => { ... });
                                  } else {
                                    closure_1(tmp2.arg);
                                  }
                                });
                              }
                              tmp9 = lib;
                            }
                          }
                          const resolved1 = Promise.resolve(value);
                          resolved1.then((value) => {
                            iter.value = value;
                            lib(iter);
                          }, (arg0) => {
                            const tmp2 = closure_1_10(lib.throw, lib, arg0);
                            if ("throw" !== tmp2.type) {
                              iter = tmp2.arg;
                              let fn = iter.value;
                              if (fn) {
                                if (typeof fn === "object") {
                                  const call = lib.call;
                                  if (typeof call === "unknown") {
                                    let callResult = tmp9("__await");
                                  } else {
                                    callResult = call(fn, "__await");
                                  }
                                  tmp9 = lib;
                                }
                                const resolved = Promise.resolve(fn.__await);
                                fn = () => { ... };
                                nextPromise = resolved.then(() => { ... }, fn);
                              }
                              const resolved1 = Promise.resolve(fn);
                              nextPromise = resolved1.then(() => { ... }, () => { ... });
                            } else {
                              closure_1(tmp2.arg);
                            }
                          });
                        } else {
                          closure_1(tmp2.arg);
                        }
                      });
                    }
                    tmp8 = closure_1_0;
                  }
                }
                let resolved1 = Promise.resolve(value);
                resolved1.then((value) => {
                  iter.value = value;
                  lib(iter);
                }, (arg0) => {
                  const tmp2 = closure_1_10(lib.throw, lib, arg0);
                  if ("throw" !== tmp2.type) {
                    iter = tmp2.arg;
                    let fn = iter.value;
                    if (fn) {
                      if (typeof fn === "object") {
                        const call = lib.call;
                        if (typeof call === "unknown") {
                          let callResult = tmp9("__await");
                        } else {
                          callResult = call(fn, "__await");
                        }
                        tmp9 = lib;
                      }
                      const resolved = Promise.resolve(fn.__await);
                      fn = (arg0) => {
                        const tmp2 = closure_1_10(lib.throw, lib, arg0);
                        if ("throw" !== tmp2.type) {
                          iter = tmp2.arg;
                          const value = iter.value;
                          if (value) {
                            if (typeof value === "object") {
                              const call = lib.call;
                              if (typeof call === "unknown") {
                                let callResult = tmp9("__await");
                              } else {
                                callResult = call(value, "__await");
                              }
                              if (callResult) {
                                const resolved = Promise.resolve(value.__await);
                                resolved.then(() => { ... }, () => { ... });
                              }
                              tmp9 = lib;
                            }
                          }
                          const resolved1 = Promise.resolve(value);
                          resolved1.then(() => { ... }, () => { ... });
                        } else {
                          closure_1(tmp2.arg);
                        }
                      };
                      nextPromise = resolved.then((arg0) => {
                        const tmp2 = closure_1_10(lib.next, lib, arg0);
                        if ("throw" !== tmp2.type) {
                          iter = tmp2.arg;
                          const value = iter.value;
                          if (value) {
                            if (typeof value === "object") {
                              const call = lib.call;
                              if (typeof call === "unknown") {
                                let callResult = tmp9("__await");
                              } else {
                                callResult = call(value, "__await");
                              }
                              if (callResult) {
                                const resolved = Promise.resolve(value.__await);
                                resolved.then(() => { ... }, () => { ... });
                              }
                              tmp9 = lib;
                            }
                          }
                          const resolved1 = Promise.resolve(value);
                          resolved1.then(() => { ... }, () => { ... });
                        } else {
                          closure_1(tmp2.arg);
                        }
                      }, fn);
                    }
                    const resolved1 = Promise.resolve(fn);
                    nextPromise = resolved1.then((value) => {
                      iter.value = value;
                      lib(iter);
                    }, (arg0) => {
                      const tmp2 = closure_1_10(lib.throw, lib, arg0);
                      if ("throw" !== tmp2.type) {
                        iter = tmp2.arg;
                        let fn = iter.value;
                        if (fn) {
                          if (typeof fn === "object") {
                            const call = lib.call;
                            if (typeof call === "unknown") {
                              let callResult = tmp9("__await");
                            } else {
                              callResult = call(fn, "__await");
                            }
                            tmp9 = lib;
                          }
                          const resolved = Promise.resolve(fn.__await);
                          fn = () => { ... };
                          nextPromise = resolved.then(() => { ... }, fn);
                        }
                        const resolved1 = Promise.resolve(fn);
                        nextPromise = resolved1.then(() => { ... }, () => { ... });
                      } else {
                        closure_1(tmp2.arg);
                      }
                    });
                  } else {
                    closure_1(tmp2.arg);
                  }
                });
              } else {
                arg1(tmp.arg);
              }
            });
          }
          nextPromise = nextPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
        } else {
          nextPromise = new Promise((arg0, arg1) => {
            closure_0 = arg0;
            closure_1 = arg1;
            const tmp = closure_1_10(closure_1_0[closure_0], closure_1_0, closure_1);
            if ("throw" !== tmp.type) {
              iter = tmp.arg;
              let value = iter.value;
              if (value) {
                if (typeof value === "object") {
                  let call = closure_1_0.call;
                  if (typeof call === "unknown") {
                    let callResult = tmp8("__await");
                  } else {
                    callResult = call(value, "__await");
                  }
                  if (callResult) {
                    let resolved = Promise.resolve(value.__await);
                    resolved.then((arg0) => {
                      const tmp2 = closure_1_10(lib.next, lib, arg0);
                      if ("throw" !== tmp2.type) {
                        iter = tmp2.arg;
                        const value = iter.value;
                        if (value) {
                          if (typeof value === "object") {
                            const call = lib.call;
                            if (typeof call === "unknown") {
                              let callResult = tmp9("__await");
                            } else {
                              callResult = call(value, "__await");
                            }
                            if (callResult) {
                              const resolved = Promise.resolve(value.__await);
                              resolved.then((arg0) => {
                                const tmp2 = closure_1_10(lib.next, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = lib.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        const resolved = Promise.resolve(value.__await);
                                        resolved.then((arg0) => {
                                          const tmp2 = closure_1_10(lib.next, lib, arg0);
                                          if ("throw" !== tmp2.type) {
                                            iter = tmp2.arg;
                                            const value = iter.value;
                                            if (value) {
                                              if (typeof value === "object") {
                                                const call = lib.call;
                                                if (typeof call === "unknown") {
                                                  let callResult = tmp9("__await");
                                                } else {
                                                  callResult = call(value, "__await");
                                                }
                                                if (callResult) {
                                                  const resolved = Promise.resolve(value.__await);
                                                  resolved.then(() => { ... }, () => { ... });
                                                }
                                                tmp9 = lib;
                                              }
                                            }
                                            const resolved1 = Promise.resolve(value);
                                            resolved1.then(() => { ... }, () => { ... });
                                          } else {
                                            closure_1(tmp2.arg);
                                          }
                                        }, (arg0) => {
                                          const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                          if ("throw" !== tmp2.type) {
                                            iter = tmp2.arg;
                                            const value = iter.value;
                                            if (value) {
                                              if (typeof value === "object") {
                                                const call = lib.call;
                                                if (typeof call === "unknown") {
                                                  let callResult = tmp9("__await");
                                                } else {
                                                  callResult = call(value, "__await");
                                                }
                                                if (callResult) {
                                                  const resolved = Promise.resolve(value.__await);
                                                  resolved.then(() => { ... }, () => { ... });
                                                }
                                                tmp9 = lib;
                                              }
                                            }
                                            const resolved1 = Promise.resolve(value);
                                            resolved1.then(() => { ... }, () => { ... });
                                          } else {
                                            closure_1(tmp2.arg);
                                          }
                                        });
                                      }
                                      tmp9 = lib;
                                    }
                                  }
                                  const resolved1 = Promise.resolve(value);
                                  resolved1.then((value) => {
                                    iter.value = value;
                                    lib(iter);
                                  }, (arg0) => {
                                    const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      let fn = iter.value;
                                      if (fn) {
                                        if (typeof fn === "object") {
                                          const call = lib.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(fn, "__await");
                                          }
                                          tmp9 = lib;
                                        }
                                        const resolved = Promise.resolve(fn.__await);
                                        fn = () => { ... };
                                        nextPromise = resolved.then(() => { ... }, fn);
                                      }
                                      const resolved1 = Promise.resolve(fn);
                                      nextPromise = resolved1.then(() => { ... }, () => { ... });
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  });
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              }, (arg0) => {
                                const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = lib.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        const resolved = Promise.resolve(value.__await);
                                        resolved.then((arg0) => {
                                          const tmp2 = closure_1_10(lib.next, lib, arg0);
                                          if ("throw" !== tmp2.type) {
                                            iter = tmp2.arg;
                                            const value = iter.value;
                                            if (value) {
                                              if (typeof value === "object") {
                                                const call = lib.call;
                                                if (typeof call === "unknown") {
                                                  let callResult = tmp9("__await");
                                                } else {
                                                  callResult = call(value, "__await");
                                                }
                                                if (callResult) {
                                                  const resolved = Promise.resolve(value.__await);
                                                  resolved.then(() => { ... }, () => { ... });
                                                }
                                                tmp9 = lib;
                                              }
                                            }
                                            const resolved1 = Promise.resolve(value);
                                            resolved1.then(() => { ... }, () => { ... });
                                          } else {
                                            closure_1(tmp2.arg);
                                          }
                                        }, (arg0) => {
                                          const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                          if ("throw" !== tmp2.type) {
                                            iter = tmp2.arg;
                                            const value = iter.value;
                                            if (value) {
                                              if (typeof value === "object") {
                                                const call = lib.call;
                                                if (typeof call === "unknown") {
                                                  let callResult = tmp9("__await");
                                                } else {
                                                  callResult = call(value, "__await");
                                                }
                                                if (callResult) {
                                                  const resolved = Promise.resolve(value.__await);
                                                  resolved.then(() => { ... }, () => { ... });
                                                }
                                                tmp9 = lib;
                                              }
                                            }
                                            const resolved1 = Promise.resolve(value);
                                            resolved1.then(() => { ... }, () => { ... });
                                          } else {
                                            closure_1(tmp2.arg);
                                          }
                                        });
                                      }
                                      tmp9 = lib;
                                    }
                                  }
                                  const resolved1 = Promise.resolve(value);
                                  resolved1.then((value) => {
                                    iter.value = value;
                                    lib(iter);
                                  }, (arg0) => {
                                    const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      let fn = iter.value;
                                      if (fn) {
                                        if (typeof fn === "object") {
                                          const call = lib.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(fn, "__await");
                                          }
                                          tmp9 = lib;
                                        }
                                        const resolved = Promise.resolve(fn.__await);
                                        fn = () => { ... };
                                        nextPromise = resolved.then(() => { ... }, fn);
                                      }
                                      const resolved1 = Promise.resolve(fn);
                                      nextPromise = resolved1.then(() => { ... }, () => { ... });
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  });
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              });
                            }
                            tmp9 = lib;
                          }
                        }
                        const resolved1 = Promise.resolve(value);
                        resolved1.then((value) => {
                          iter.value = value;
                          lib(iter);
                        }, (arg0) => {
                          const tmp2 = closure_1_10(lib.throw, lib, arg0);
                          if ("throw" !== tmp2.type) {
                            iter = tmp2.arg;
                            let fn = iter.value;
                            if (fn) {
                              if (typeof fn === "object") {
                                const call = lib.call;
                                if (typeof call === "unknown") {
                                  let callResult = tmp9("__await");
                                } else {
                                  callResult = call(fn, "__await");
                                }
                                tmp9 = lib;
                              }
                              const resolved = Promise.resolve(fn.__await);
                              fn = (arg0) => {
                                const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = lib.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        const resolved = Promise.resolve(value.__await);
                                        resolved.then(() => { ... }, () => { ... });
                                      }
                                      tmp9 = lib;
                                    }
                                  }
                                  const resolved1 = Promise.resolve(value);
                                  resolved1.then(() => { ... }, () => { ... });
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              };
                              nextPromise = resolved.then((arg0) => {
                                const tmp2 = closure_1_10(lib.next, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = lib.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        const resolved = Promise.resolve(value.__await);
                                        resolved.then(() => { ... }, () => { ... });
                                      }
                                      tmp9 = lib;
                                    }
                                  }
                                  const resolved1 = Promise.resolve(value);
                                  resolved1.then(() => { ... }, () => { ... });
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              }, fn);
                            }
                            const resolved1 = Promise.resolve(fn);
                            nextPromise = resolved1.then((value) => {
                              iter.value = value;
                              lib(iter);
                            }, (arg0) => {
                              const tmp2 = closure_1_10(lib.throw, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                let fn = iter.value;
                                if (fn) {
                                  if (typeof fn === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(fn, "__await");
                                    }
                                    tmp9 = lib;
                                  }
                                  const resolved = Promise.resolve(fn.__await);
                                  fn = () => { ... };
                                  nextPromise = resolved.then(() => { ... }, fn);
                                }
                                const resolved1 = Promise.resolve(fn);
                                nextPromise = resolved1.then(() => { ... }, () => { ... });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            });
                          } else {
                            closure_1(tmp2.arg);
                          }
                        });
                      } else {
                        closure_1(tmp2.arg);
                      }
                    }, (arg0) => {
                      const tmp2 = closure_1_10(lib.throw, lib, arg0);
                      if ("throw" !== tmp2.type) {
                        iter = tmp2.arg;
                        const value = iter.value;
                        if (value) {
                          if (typeof value === "object") {
                            const call = lib.call;
                            if (typeof call === "unknown") {
                              let callResult = tmp9("__await");
                            } else {
                              callResult = call(value, "__await");
                            }
                            if (callResult) {
                              const resolved = Promise.resolve(value.__await);
                              resolved.then((arg0) => {
                                const tmp2 = closure_1_10(lib.next, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = lib.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        const resolved = Promise.resolve(value.__await);
                                        resolved.then((arg0) => {
                                          const tmp2 = closure_1_10(lib.next, lib, arg0);
                                          if ("throw" !== tmp2.type) {
                                            iter = tmp2.arg;
                                            const value = iter.value;
                                            if (value) {
                                              if (typeof value === "object") {
                                                const call = lib.call;
                                                if (typeof call === "unknown") {
                                                  let callResult = tmp9("__await");
                                                } else {
                                                  callResult = call(value, "__await");
                                                }
                                                if (callResult) {
                                                  const resolved = Promise.resolve(value.__await);
                                                  resolved.then(() => { ... }, () => { ... });
                                                }
                                                tmp9 = lib;
                                              }
                                            }
                                            const resolved1 = Promise.resolve(value);
                                            resolved1.then(() => { ... }, () => { ... });
                                          } else {
                                            closure_1(tmp2.arg);
                                          }
                                        }, (arg0) => {
                                          const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                          if ("throw" !== tmp2.type) {
                                            iter = tmp2.arg;
                                            const value = iter.value;
                                            if (value) {
                                              if (typeof value === "object") {
                                                const call = lib.call;
                                                if (typeof call === "unknown") {
                                                  let callResult = tmp9("__await");
                                                } else {
                                                  callResult = call(value, "__await");
                                                }
                                                if (callResult) {
                                                  const resolved = Promise.resolve(value.__await);
                                                  resolved.then(() => { ... }, () => { ... });
                                                }
                                                tmp9 = lib;
                                              }
                                            }
                                            const resolved1 = Promise.resolve(value);
                                            resolved1.then(() => { ... }, () => { ... });
                                          } else {
                                            closure_1(tmp2.arg);
                                          }
                                        });
                                      }
                                      tmp9 = lib;
                                    }
                                  }
                                  const resolved1 = Promise.resolve(value);
                                  resolved1.then((value) => {
                                    iter.value = value;
                                    lib(iter);
                                  }, (arg0) => {
                                    const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      let fn = iter.value;
                                      if (fn) {
                                        if (typeof fn === "object") {
                                          const call = lib.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(fn, "__await");
                                          }
                                          tmp9 = lib;
                                        }
                                        const resolved = Promise.resolve(fn.__await);
                                        fn = () => { ... };
                                        nextPromise = resolved.then(() => { ... }, fn);
                                      }
                                      const resolved1 = Promise.resolve(fn);
                                      nextPromise = resolved1.then(() => { ... }, () => { ... });
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  });
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              }, (arg0) => {
                                const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = lib.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        const resolved = Promise.resolve(value.__await);
                                        resolved.then((arg0) => {
                                          const tmp2 = closure_1_10(lib.next, lib, arg0);
                                          if ("throw" !== tmp2.type) {
                                            iter = tmp2.arg;
                                            const value = iter.value;
                                            if (value) {
                                              if (typeof value === "object") {
                                                const call = lib.call;
                                                if (typeof call === "unknown") {
                                                  let callResult = tmp9("__await");
                                                } else {
                                                  callResult = call(value, "__await");
                                                }
                                                if (callResult) {
                                                  const resolved = Promise.resolve(value.__await);
                                                  resolved.then(() => { ... }, () => { ... });
                                                }
                                                tmp9 = lib;
                                              }
                                            }
                                            const resolved1 = Promise.resolve(value);
                                            resolved1.then(() => { ... }, () => { ... });
                                          } else {
                                            closure_1(tmp2.arg);
                                          }
                                        }, (arg0) => {
                                          const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                          if ("throw" !== tmp2.type) {
                                            iter = tmp2.arg;
                                            const value = iter.value;
                                            if (value) {
                                              if (typeof value === "object") {
                                                const call = lib.call;
                                                if (typeof call === "unknown") {
                                                  let callResult = tmp9("__await");
                                                } else {
                                                  callResult = call(value, "__await");
                                                }
                                                if (callResult) {
                                                  const resolved = Promise.resolve(value.__await);
                                                  resolved.then(() => { ... }, () => { ... });
                                                }
                                                tmp9 = lib;
                                              }
                                            }
                                            const resolved1 = Promise.resolve(value);
                                            resolved1.then(() => { ... }, () => { ... });
                                          } else {
                                            closure_1(tmp2.arg);
                                          }
                                        });
                                      }
                                      tmp9 = lib;
                                    }
                                  }
                                  const resolved1 = Promise.resolve(value);
                                  resolved1.then((value) => {
                                    iter.value = value;
                                    lib(iter);
                                  }, (arg0) => {
                                    const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      let fn = iter.value;
                                      if (fn) {
                                        if (typeof fn === "object") {
                                          const call = lib.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(fn, "__await");
                                          }
                                          tmp9 = lib;
                                        }
                                        const resolved = Promise.resolve(fn.__await);
                                        fn = () => { ... };
                                        nextPromise = resolved.then(() => { ... }, fn);
                                      }
                                      const resolved1 = Promise.resolve(fn);
                                      nextPromise = resolved1.then(() => { ... }, () => { ... });
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  });
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              });
                            }
                            tmp9 = lib;
                          }
                        }
                        const resolved1 = Promise.resolve(value);
                        resolved1.then((value) => {
                          iter.value = value;
                          lib(iter);
                        }, (arg0) => {
                          const tmp2 = closure_1_10(lib.throw, lib, arg0);
                          if ("throw" !== tmp2.type) {
                            iter = tmp2.arg;
                            let fn = iter.value;
                            if (fn) {
                              if (typeof fn === "object") {
                                const call = lib.call;
                                if (typeof call === "unknown") {
                                  let callResult = tmp9("__await");
                                } else {
                                  callResult = call(fn, "__await");
                                }
                                tmp9 = lib;
                              }
                              const resolved = Promise.resolve(fn.__await);
                              fn = (arg0) => {
                                const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = lib.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        const resolved = Promise.resolve(value.__await);
                                        resolved.then(() => { ... }, () => { ... });
                                      }
                                      tmp9 = lib;
                                    }
                                  }
                                  const resolved1 = Promise.resolve(value);
                                  resolved1.then(() => { ... }, () => { ... });
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              };
                              nextPromise = resolved.then((arg0) => {
                                const tmp2 = closure_1_10(lib.next, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = lib.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        const resolved = Promise.resolve(value.__await);
                                        resolved.then(() => { ... }, () => { ... });
                                      }
                                      tmp9 = lib;
                                    }
                                  }
                                  const resolved1 = Promise.resolve(value);
                                  resolved1.then(() => { ... }, () => { ... });
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              }, fn);
                            }
                            const resolved1 = Promise.resolve(fn);
                            nextPromise = resolved1.then((value) => {
                              iter.value = value;
                              lib(iter);
                            }, (arg0) => {
                              const tmp2 = closure_1_10(lib.throw, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                let fn = iter.value;
                                if (fn) {
                                  if (typeof fn === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(fn, "__await");
                                    }
                                    tmp9 = lib;
                                  }
                                  const resolved = Promise.resolve(fn.__await);
                                  fn = () => { ... };
                                  nextPromise = resolved.then(() => { ... }, fn);
                                }
                                const resolved1 = Promise.resolve(fn);
                                nextPromise = resolved1.then(() => { ... }, () => { ... });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            });
                          } else {
                            closure_1(tmp2.arg);
                          }
                        });
                      } else {
                        closure_1(tmp2.arg);
                      }
                    });
                  }
                  tmp8 = closure_1_0;
                }
              }
              let resolved1 = Promise.resolve(value);
              resolved1.then((value) => {
                iter.value = value;
                lib(iter);
              }, (arg0) => {
                const tmp2 = closure_1_10(lib.throw, lib, arg0);
                if ("throw" !== tmp2.type) {
                  iter = tmp2.arg;
                  let fn = iter.value;
                  if (fn) {
                    if (typeof fn === "object") {
                      const call = lib.call;
                      if (typeof call === "unknown") {
                        let callResult = tmp9("__await");
                      } else {
                        callResult = call(fn, "__await");
                      }
                      tmp9 = lib;
                    }
                    const resolved = Promise.resolve(fn.__await);
                    fn = (arg0) => {
                      const tmp2 = closure_1_10(lib.throw, lib, arg0);
                      if ("throw" !== tmp2.type) {
                        iter = tmp2.arg;
                        const value = iter.value;
                        if (value) {
                          if (typeof value === "object") {
                            const call = lib.call;
                            if (typeof call === "unknown") {
                              let callResult = tmp9("__await");
                            } else {
                              callResult = call(value, "__await");
                            }
                            if (callResult) {
                              const resolved = Promise.resolve(value.__await);
                              resolved.then((arg0) => {
                                const tmp2 = closure_1_10(lib.next, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = lib.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        const resolved = Promise.resolve(value.__await);
                                        resolved.then(() => { ... }, () => { ... });
                                      }
                                      tmp9 = lib;
                                    }
                                  }
                                  const resolved1 = Promise.resolve(value);
                                  resolved1.then(() => { ... }, () => { ... });
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              }, (arg0) => {
                                const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = lib.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        const resolved = Promise.resolve(value.__await);
                                        resolved.then(() => { ... }, () => { ... });
                                      }
                                      tmp9 = lib;
                                    }
                                  }
                                  const resolved1 = Promise.resolve(value);
                                  resolved1.then(() => { ... }, () => { ... });
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              });
                            }
                            tmp9 = lib;
                          }
                        }
                        const resolved1 = Promise.resolve(value);
                        resolved1.then((value) => {
                          iter.value = value;
                          lib(iter);
                        }, (arg0) => {
                          const tmp2 = closure_1_10(lib.throw, lib, arg0);
                          if ("throw" !== tmp2.type) {
                            iter = tmp2.arg;
                            let fn = iter.value;
                            if (fn) {
                              if (typeof fn === "object") {
                                const call = lib.call;
                                if (typeof call === "unknown") {
                                  let callResult = tmp9("__await");
                                } else {
                                  callResult = call(fn, "__await");
                                }
                                tmp9 = lib;
                              }
                              const resolved = Promise.resolve(fn.__await);
                              fn = () => { ... };
                              nextPromise = resolved.then(() => { ... }, fn);
                            }
                            const resolved1 = Promise.resolve(fn);
                            nextPromise = resolved1.then(() => { ... }, () => { ... });
                          } else {
                            closure_1(tmp2.arg);
                          }
                        });
                      } else {
                        closure_1(tmp2.arg);
                      }
                    };
                    nextPromise = resolved.then((arg0) => {
                      const tmp2 = closure_1_10(lib.next, lib, arg0);
                      if ("throw" !== tmp2.type) {
                        iter = tmp2.arg;
                        const value = iter.value;
                        if (value) {
                          if (typeof value === "object") {
                            const call = lib.call;
                            if (typeof call === "unknown") {
                              let callResult = tmp9("__await");
                            } else {
                              callResult = call(value, "__await");
                            }
                            if (callResult) {
                              const resolved = Promise.resolve(value.__await);
                              resolved.then((arg0) => {
                                const tmp2 = closure_1_10(lib.next, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = lib.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        const resolved = Promise.resolve(value.__await);
                                        resolved.then(() => { ... }, () => { ... });
                                      }
                                      tmp9 = lib;
                                    }
                                  }
                                  const resolved1 = Promise.resolve(value);
                                  resolved1.then(() => { ... }, () => { ... });
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              }, (arg0) => {
                                const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  const value = iter.value;
                                  if (value) {
                                    if (typeof value === "object") {
                                      const call = lib.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(value, "__await");
                                      }
                                      if (callResult) {
                                        const resolved = Promise.resolve(value.__await);
                                        resolved.then(() => { ... }, () => { ... });
                                      }
                                      tmp9 = lib;
                                    }
                                  }
                                  const resolved1 = Promise.resolve(value);
                                  resolved1.then(() => { ... }, () => { ... });
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              });
                            }
                            tmp9 = lib;
                          }
                        }
                        const resolved1 = Promise.resolve(value);
                        resolved1.then((value) => {
                          iter.value = value;
                          lib(iter);
                        }, (arg0) => {
                          const tmp2 = closure_1_10(lib.throw, lib, arg0);
                          if ("throw" !== tmp2.type) {
                            iter = tmp2.arg;
                            let fn = iter.value;
                            if (fn) {
                              if (typeof fn === "object") {
                                const call = lib.call;
                                if (typeof call === "unknown") {
                                  let callResult = tmp9("__await");
                                } else {
                                  callResult = call(fn, "__await");
                                }
                                tmp9 = lib;
                              }
                              const resolved = Promise.resolve(fn.__await);
                              fn = () => { ... };
                              nextPromise = resolved.then(() => { ... }, fn);
                            }
                            const resolved1 = Promise.resolve(fn);
                            nextPromise = resolved1.then(() => { ... }, () => { ... });
                          } else {
                            closure_1(tmp2.arg);
                          }
                        });
                      } else {
                        closure_1(tmp2.arg);
                      }
                    }, fn);
                  }
                  const resolved1 = Promise.resolve(fn);
                  nextPromise = resolved1.then((value) => {
                    iter.value = value;
                    lib(iter);
                  }, (arg0) => {
                    const tmp2 = closure_1_10(lib.throw, lib, arg0);
                    if ("throw" !== tmp2.type) {
                      iter = tmp2.arg;
                      let fn = iter.value;
                      if (fn) {
                        if (typeof fn === "object") {
                          const call = lib.call;
                          if (typeof call === "unknown") {
                            let callResult = tmp9("__await");
                          } else {
                            callResult = call(fn, "__await");
                          }
                          tmp9 = lib;
                        }
                        const resolved = Promise.resolve(fn.__await);
                        fn = (arg0) => {
                          const tmp2 = closure_1_10(lib.throw, lib, arg0);
                          if ("throw" !== tmp2.type) {
                            iter = tmp2.arg;
                            const value = iter.value;
                            if (value) {
                              if (typeof value === "object") {
                                const call = lib.call;
                                if (typeof call === "unknown") {
                                  let callResult = tmp9("__await");
                                } else {
                                  callResult = call(value, "__await");
                                }
                                if (callResult) {
                                  const resolved = Promise.resolve(value.__await);
                                  resolved.then(() => { ... }, () => { ... });
                                }
                                tmp9 = lib;
                              }
                            }
                            const resolved1 = Promise.resolve(value);
                            resolved1.then(() => { ... }, () => { ... });
                          } else {
                            closure_1(tmp2.arg);
                          }
                        };
                        nextPromise = resolved.then((arg0) => {
                          const tmp2 = closure_1_10(lib.next, lib, arg0);
                          if ("throw" !== tmp2.type) {
                            iter = tmp2.arg;
                            const value = iter.value;
                            if (value) {
                              if (typeof value === "object") {
                                const call = lib.call;
                                if (typeof call === "unknown") {
                                  let callResult = tmp9("__await");
                                } else {
                                  callResult = call(value, "__await");
                                }
                                if (callResult) {
                                  const resolved = Promise.resolve(value.__await);
                                  resolved.then(() => { ... }, () => { ... });
                                }
                                tmp9 = lib;
                              }
                            }
                            const resolved1 = Promise.resolve(value);
                            resolved1.then(() => { ... }, () => { ... });
                          } else {
                            closure_1(tmp2.arg);
                          }
                        }, fn);
                      }
                      const resolved1 = Promise.resolve(fn);
                      nextPromise = resolved1.then((value) => {
                        iter.value = value;
                        lib(iter);
                      }, (arg0) => {
                        const tmp2 = closure_1_10(lib.throw, lib, arg0);
                        if ("throw" !== tmp2.type) {
                          iter = tmp2.arg;
                          let fn = iter.value;
                          if (fn) {
                            if (typeof fn === "object") {
                              const call = lib.call;
                              if (typeof call === "unknown") {
                                let callResult = tmp9("__await");
                              } else {
                                callResult = call(fn, "__await");
                              }
                              tmp9 = lib;
                            }
                            const resolved = Promise.resolve(fn.__await);
                            fn = () => { ... };
                            nextPromise = resolved.then(() => { ... }, fn);
                          }
                          const resolved1 = Promise.resolve(fn);
                          nextPromise = resolved1.then(() => { ... }, () => { ... });
                        } else {
                          closure_1(tmp2.arg);
                        }
                      });
                    } else {
                      closure_1(tmp2.arg);
                    }
                  });
                } else {
                  closure_1(tmp2.arg);
                }
              });
            } else {
              arg1(tmp.arg);
            }
          });
        }
        return nextPromise;
      };
      return;
    }
  }
  let closure_8 = {};
  let obj = {};
  obj[tmp3] = function() {
    return this;
  };
  let _Object = Object;
  class Context {
    constructor(arg0) {
      items = [];
      items[0] = { tryLoc: "root" };
      this.tryEntries = items;
      item = global.forEach(pushTryEntry, this);
      resetResult = this.reset(true);
      return;
    }
  }
  if (!tmp7) {
    let tmp13 = tmp7;
    if (tmp7) {
      tmp13 = tmp7 !== prototype;
    }
    if (!tmp13) {
      if (tmp13) {
        obj = tmp7;
      }
      const _Object2 = Object;
      function values(next) {
        closure_0 = next;
        if (next) {
          if (next[c1]) {
            const call = tmp2.call;
            return typeof call === "unknown" ? tmp2() : call(next);
          } else if (typeof next.next === "function") {
            return next;
          } else {
            const _isNaN = isNaN;
            if (!isNaN(next.length)) {
              c1 = -1;
              next = function next() {
                let arr;
                const sum = sum1 + 1;
                sum1 = sum;
                if (sum < next.length) {
                  while (true) {
                    let tmp2 = next;
                    let call = next.call;
                    arr = next;
                    let tmp3 = sum1;
                    if (typeof call === "unknown" ? tmp2(tmp3) : call(arr, tmp3)) {
                      break;
                    } else {
                      let tmp4 = sum1;
                      sum1 = sum1 + 1;
                    }
                  }
                  next.value = arr[sum1];
                  next.done = false;
                  return next;
                }
                next.value = undefined;
                next.done = true;
                return next;
              };
              next.next = next;
              return next;
            }
          }
        }
        return { next: closure_19 };
      }
      obj = Object.create(obj);
      Generator.prototype = obj;
      class Generator {
        constructor() {
          return;
        }
      }
      class GeneratorFunction {
        constructor() {
          return;
        }
      }
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      class GeneratorFunctionPrototype {
        constructor() {
          return;
        }
      }
      class AsyncIterator {
        constructor(arg0) {
          closure_0 = global;
          this._invoke = function enqueue(arg0, arg1) {
            closure_0 = arg0;
            let nextPromise = arg1;
            if (nextPromise) {
              function callInvokeWithMethodAndArg() {
                return new Promise((arg0, arg1) => {
                  closure_0 = arg0;
                  closure_1 = arg1;
                  const tmp = closure_1_10(closure_1_0[closure_0], closure_1_0, closure_1);
                  if ("throw" !== tmp.type) {
                    iter = tmp.arg;
                    let value = iter.value;
                    if (value) {
                      if (typeof value === "object") {
                        let call = closure_1_0.call;
                        if (typeof call === "unknown") {
                          let callResult = tmp8("__await");
                        } else {
                          callResult = call(value, "__await");
                        }
                        if (callResult) {
                          let resolved = Promise.resolve(value.__await);
                          resolved.then((arg0) => {
                            const tmp2 = closure_1_10(lib.next, lib, arg0);
                            if ("throw" !== tmp2.type) {
                              iter = tmp2.arg;
                              const value = iter.value;
                              if (value) {
                                if (typeof value === "object") {
                                  const call = lib.call;
                                  if (typeof call === "unknown") {
                                    let callResult = tmp9("__await");
                                  } else {
                                    callResult = call(value, "__await");
                                  }
                                  if (callResult) {
                                    const resolved = Promise.resolve(value.__await);
                                    resolved.then((arg0) => {
                                      const tmp2 = closure_1_10(lib.next, lib, arg0);
                                      if ("throw" !== tmp2.type) {
                                        iter = tmp2.arg;
                                        const value = iter.value;
                                        if (value) {
                                          if (typeof value === "object") {
                                            const call = lib.call;
                                            if (typeof call === "unknown") {
                                              let callResult = tmp9("__await");
                                            } else {
                                              callResult = call(value, "__await");
                                            }
                                            if (callResult) {
                                              const resolved = Promise.resolve(value.__await);
                                              resolved.then(() => { ... }, () => { ... });
                                            }
                                            tmp9 = lib;
                                          }
                                        }
                                        const resolved1 = Promise.resolve(value);
                                        resolved1.then(() => { ... }, () => { ... });
                                      } else {
                                        closure_1(tmp2.arg);
                                      }
                                    }, (arg0) => {
                                      const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                      if ("throw" !== tmp2.type) {
                                        iter = tmp2.arg;
                                        const value = iter.value;
                                        if (value) {
                                          if (typeof value === "object") {
                                            const call = lib.call;
                                            if (typeof call === "unknown") {
                                              let callResult = tmp9("__await");
                                            } else {
                                              callResult = call(value, "__await");
                                            }
                                            if (callResult) {
                                              const resolved = Promise.resolve(value.__await);
                                              resolved.then(() => { ... }, () => { ... });
                                            }
                                            tmp9 = lib;
                                          }
                                        }
                                        const resolved1 = Promise.resolve(value);
                                        resolved1.then(() => { ... }, () => { ... });
                                      } else {
                                        closure_1(tmp2.arg);
                                      }
                                    });
                                  }
                                  tmp9 = lib;
                                }
                              }
                              const resolved1 = Promise.resolve(value);
                              resolved1.then((value) => {
                                iter.value = value;
                                lib(iter);
                              }, (arg0) => {
                                const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  let fn = iter.value;
                                  if (fn) {
                                    if (typeof fn === "object") {
                                      const call = lib.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(fn, "__await");
                                      }
                                      tmp9 = lib;
                                    }
                                    const resolved = Promise.resolve(fn.__await);
                                    fn = () => { ... };
                                    nextPromise = resolved.then(() => { ... }, fn);
                                  }
                                  const resolved1 = Promise.resolve(fn);
                                  nextPromise = resolved1.then(() => { ... }, () => { ... });
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              });
                            } else {
                              closure_1(tmp2.arg);
                            }
                          }, (arg0) => {
                            const tmp2 = closure_1_10(lib.throw, lib, arg0);
                            if ("throw" !== tmp2.type) {
                              iter = tmp2.arg;
                              const value = iter.value;
                              if (value) {
                                if (typeof value === "object") {
                                  const call = lib.call;
                                  if (typeof call === "unknown") {
                                    let callResult = tmp9("__await");
                                  } else {
                                    callResult = call(value, "__await");
                                  }
                                  if (callResult) {
                                    const resolved = Promise.resolve(value.__await);
                                    resolved.then((arg0) => {
                                      const tmp2 = closure_1_10(lib.next, lib, arg0);
                                      if ("throw" !== tmp2.type) {
                                        iter = tmp2.arg;
                                        const value = iter.value;
                                        if (value) {
                                          if (typeof value === "object") {
                                            const call = lib.call;
                                            if (typeof call === "unknown") {
                                              let callResult = tmp9("__await");
                                            } else {
                                              callResult = call(value, "__await");
                                            }
                                            if (callResult) {
                                              const resolved = Promise.resolve(value.__await);
                                              resolved.then(() => { ... }, () => { ... });
                                            }
                                            tmp9 = lib;
                                          }
                                        }
                                        const resolved1 = Promise.resolve(value);
                                        resolved1.then(() => { ... }, () => { ... });
                                      } else {
                                        closure_1(tmp2.arg);
                                      }
                                    }, (arg0) => {
                                      const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                      if ("throw" !== tmp2.type) {
                                        iter = tmp2.arg;
                                        const value = iter.value;
                                        if (value) {
                                          if (typeof value === "object") {
                                            const call = lib.call;
                                            if (typeof call === "unknown") {
                                              let callResult = tmp9("__await");
                                            } else {
                                              callResult = call(value, "__await");
                                            }
                                            if (callResult) {
                                              const resolved = Promise.resolve(value.__await);
                                              resolved.then(() => { ... }, () => { ... });
                                            }
                                            tmp9 = lib;
                                          }
                                        }
                                        const resolved1 = Promise.resolve(value);
                                        resolved1.then(() => { ... }, () => { ... });
                                      } else {
                                        closure_1(tmp2.arg);
                                      }
                                    });
                                  }
                                  tmp9 = lib;
                                }
                              }
                              const resolved1 = Promise.resolve(value);
                              resolved1.then((value) => {
                                iter.value = value;
                                lib(iter);
                              }, (arg0) => {
                                const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                if ("throw" !== tmp2.type) {
                                  iter = tmp2.arg;
                                  let fn = iter.value;
                                  if (fn) {
                                    if (typeof fn === "object") {
                                      const call = lib.call;
                                      if (typeof call === "unknown") {
                                        let callResult = tmp9("__await");
                                      } else {
                                        callResult = call(fn, "__await");
                                      }
                                      tmp9 = lib;
                                    }
                                    const resolved = Promise.resolve(fn.__await);
                                    fn = () => { ... };
                                    nextPromise = resolved.then(() => { ... }, fn);
                                  }
                                  const resolved1 = Promise.resolve(fn);
                                  nextPromise = resolved1.then(() => { ... }, () => { ... });
                                } else {
                                  closure_1(tmp2.arg);
                                }
                              });
                            } else {
                              closure_1(tmp2.arg);
                            }
                          });
                        }
                        tmp8 = closure_1_0;
                      }
                    }
                    let resolved1 = Promise.resolve(value);
                    resolved1.then((value) => {
                      iter.value = value;
                      lib(iter);
                    }, (arg0) => {
                      const tmp2 = closure_1_10(lib.throw, lib, arg0);
                      if ("throw" !== tmp2.type) {
                        iter = tmp2.arg;
                        let fn = iter.value;
                        if (fn) {
                          if (typeof fn === "object") {
                            const call = lib.call;
                            if (typeof call === "unknown") {
                              let callResult = tmp9("__await");
                            } else {
                              callResult = call(fn, "__await");
                            }
                            tmp9 = lib;
                          }
                          const resolved = Promise.resolve(fn.__await);
                          fn = (arg0) => {
                            const tmp2 = closure_1_10(lib.throw, lib, arg0);
                            if ("throw" !== tmp2.type) {
                              iter = tmp2.arg;
                              const value = iter.value;
                              if (value) {
                                if (typeof value === "object") {
                                  const call = lib.call;
                                  if (typeof call === "unknown") {
                                    let callResult = tmp9("__await");
                                  } else {
                                    callResult = call(value, "__await");
                                  }
                                  if (callResult) {
                                    const resolved = Promise.resolve(value.__await);
                                    resolved.then(() => { ... }, () => { ... });
                                  }
                                  tmp9 = lib;
                                }
                              }
                              const resolved1 = Promise.resolve(value);
                              resolved1.then(() => { ... }, () => { ... });
                            } else {
                              closure_1(tmp2.arg);
                            }
                          };
                          nextPromise = resolved.then((arg0) => {
                            const tmp2 = closure_1_10(lib.next, lib, arg0);
                            if ("throw" !== tmp2.type) {
                              iter = tmp2.arg;
                              const value = iter.value;
                              if (value) {
                                if (typeof value === "object") {
                                  const call = lib.call;
                                  if (typeof call === "unknown") {
                                    let callResult = tmp9("__await");
                                  } else {
                                    callResult = call(value, "__await");
                                  }
                                  if (callResult) {
                                    const resolved = Promise.resolve(value.__await);
                                    resolved.then(() => { ... }, () => { ... });
                                  }
                                  tmp9 = lib;
                                }
                              }
                              const resolved1 = Promise.resolve(value);
                              resolved1.then(() => { ... }, () => { ... });
                            } else {
                              closure_1(tmp2.arg);
                            }
                          }, fn);
                        }
                        const resolved1 = Promise.resolve(fn);
                        nextPromise = resolved1.then((value) => {
                          iter.value = value;
                          lib(iter);
                        }, (arg0) => {
                          const tmp2 = closure_1_10(lib.throw, lib, arg0);
                          if ("throw" !== tmp2.type) {
                            iter = tmp2.arg;
                            let fn = iter.value;
                            if (fn) {
                              if (typeof fn === "object") {
                                const call = lib.call;
                                if (typeof call === "unknown") {
                                  let callResult = tmp9("__await");
                                } else {
                                  callResult = call(fn, "__await");
                                }
                                tmp9 = lib;
                              }
                              const resolved = Promise.resolve(fn.__await);
                              fn = () => { ... };
                              nextPromise = resolved.then(() => { ... }, fn);
                            }
                            const resolved1 = Promise.resolve(fn);
                            nextPromise = resolved1.then(() => { ... }, () => { ... });
                          } else {
                            closure_1(tmp2.arg);
                          }
                        });
                      } else {
                        closure_1(tmp2.arg);
                      }
                    });
                  } else {
                    arg1(tmp.arg);
                  }
                });
              }
              nextPromise = nextPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
            } else {
              nextPromise = new Promise((arg0, arg1) => {
                closure_0 = arg0;
                closure_1 = arg1;
                const tmp = closure_1_10(closure_1_0[closure_0], closure_1_0, closure_1);
                if ("throw" !== tmp.type) {
                  iter = tmp.arg;
                  let value = iter.value;
                  if (value) {
                    if (typeof value === "object") {
                      let call = closure_1_0.call;
                      if (typeof call === "unknown") {
                        let callResult = tmp8("__await");
                      } else {
                        callResult = call(value, "__await");
                      }
                      if (callResult) {
                        let resolved = Promise.resolve(value.__await);
                        resolved.then((arg0) => {
                          const tmp2 = closure_1_10(lib.next, lib, arg0);
                          if ("throw" !== tmp2.type) {
                            iter = tmp2.arg;
                            const value = iter.value;
                            if (value) {
                              if (typeof value === "object") {
                                const call = lib.call;
                                if (typeof call === "unknown") {
                                  let callResult = tmp9("__await");
                                } else {
                                  callResult = call(value, "__await");
                                }
                                if (callResult) {
                                  const resolved = Promise.resolve(value.__await);
                                  resolved.then((arg0) => {
                                    const tmp2 = closure_1_10(lib.next, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      const value = iter.value;
                                      if (value) {
                                        if (typeof value === "object") {
                                          const call = lib.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(value, "__await");
                                          }
                                          if (callResult) {
                                            const resolved = Promise.resolve(value.__await);
                                            resolved.then((arg0) => {
                                              const tmp2 = closure_1_10(lib.next, lib, arg0);
                                              if ("throw" !== tmp2.type) {
                                                iter = tmp2.arg;
                                                const value = iter.value;
                                                if (value) {
                                                  if (typeof value === "object") {
                                                    const call = lib.call;
                                                    if (typeof call === "unknown") {
                                                      let callResult = tmp9("__await");
                                                    } else {
                                                      callResult = call(value, "__await");
                                                    }
                                                    if (callResult) {
                                                      const resolved = Promise.resolve(value.__await);
                                                      resolved.then(() => { ... }, () => { ... });
                                                    }
                                                    tmp9 = lib;
                                                  }
                                                }
                                                const resolved1 = Promise.resolve(value);
                                                resolved1.then(() => { ... }, () => { ... });
                                              } else {
                                                closure_1(tmp2.arg);
                                              }
                                            }, (arg0) => {
                                              const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                              if ("throw" !== tmp2.type) {
                                                iter = tmp2.arg;
                                                const value = iter.value;
                                                if (value) {
                                                  if (typeof value === "object") {
                                                    const call = lib.call;
                                                    if (typeof call === "unknown") {
                                                      let callResult = tmp9("__await");
                                                    } else {
                                                      callResult = call(value, "__await");
                                                    }
                                                    if (callResult) {
                                                      const resolved = Promise.resolve(value.__await);
                                                      resolved.then(() => { ... }, () => { ... });
                                                    }
                                                    tmp9 = lib;
                                                  }
                                                }
                                                const resolved1 = Promise.resolve(value);
                                                resolved1.then(() => { ... }, () => { ... });
                                              } else {
                                                closure_1(tmp2.arg);
                                              }
                                            });
                                          }
                                          tmp9 = lib;
                                        }
                                      }
                                      const resolved1 = Promise.resolve(value);
                                      resolved1.then((value) => {
                                        iter.value = value;
                                        lib(iter);
                                      }, (arg0) => {
                                        const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                        if ("throw" !== tmp2.type) {
                                          iter = tmp2.arg;
                                          let fn = iter.value;
                                          if (fn) {
                                            if (typeof fn === "object") {
                                              const call = lib.call;
                                              if (typeof call === "unknown") {
                                                let callResult = tmp9("__await");
                                              } else {
                                                callResult = call(fn, "__await");
                                              }
                                              tmp9 = lib;
                                            }
                                            const resolved = Promise.resolve(fn.__await);
                                            fn = () => { ... };
                                            nextPromise = resolved.then(() => { ... }, fn);
                                          }
                                          const resolved1 = Promise.resolve(fn);
                                          nextPromise = resolved1.then(() => { ... }, () => { ... });
                                        } else {
                                          closure_1(tmp2.arg);
                                        }
                                      });
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  }, (arg0) => {
                                    const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      const value = iter.value;
                                      if (value) {
                                        if (typeof value === "object") {
                                          const call = lib.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(value, "__await");
                                          }
                                          if (callResult) {
                                            const resolved = Promise.resolve(value.__await);
                                            resolved.then((arg0) => {
                                              const tmp2 = closure_1_10(lib.next, lib, arg0);
                                              if ("throw" !== tmp2.type) {
                                                iter = tmp2.arg;
                                                const value = iter.value;
                                                if (value) {
                                                  if (typeof value === "object") {
                                                    const call = lib.call;
                                                    if (typeof call === "unknown") {
                                                      let callResult = tmp9("__await");
                                                    } else {
                                                      callResult = call(value, "__await");
                                                    }
                                                    if (callResult) {
                                                      const resolved = Promise.resolve(value.__await);
                                                      resolved.then(() => { ... }, () => { ... });
                                                    }
                                                    tmp9 = lib;
                                                  }
                                                }
                                                const resolved1 = Promise.resolve(value);
                                                resolved1.then(() => { ... }, () => { ... });
                                              } else {
                                                closure_1(tmp2.arg);
                                              }
                                            }, (arg0) => {
                                              const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                              if ("throw" !== tmp2.type) {
                                                iter = tmp2.arg;
                                                const value = iter.value;
                                                if (value) {
                                                  if (typeof value === "object") {
                                                    const call = lib.call;
                                                    if (typeof call === "unknown") {
                                                      let callResult = tmp9("__await");
                                                    } else {
                                                      callResult = call(value, "__await");
                                                    }
                                                    if (callResult) {
                                                      const resolved = Promise.resolve(value.__await);
                                                      resolved.then(() => { ... }, () => { ... });
                                                    }
                                                    tmp9 = lib;
                                                  }
                                                }
                                                const resolved1 = Promise.resolve(value);
                                                resolved1.then(() => { ... }, () => { ... });
                                              } else {
                                                closure_1(tmp2.arg);
                                              }
                                            });
                                          }
                                          tmp9 = lib;
                                        }
                                      }
                                      const resolved1 = Promise.resolve(value);
                                      resolved1.then((value) => {
                                        iter.value = value;
                                        lib(iter);
                                      }, (arg0) => {
                                        const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                        if ("throw" !== tmp2.type) {
                                          iter = tmp2.arg;
                                          let fn = iter.value;
                                          if (fn) {
                                            if (typeof fn === "object") {
                                              const call = lib.call;
                                              if (typeof call === "unknown") {
                                                let callResult = tmp9("__await");
                                              } else {
                                                callResult = call(fn, "__await");
                                              }
                                              tmp9 = lib;
                                            }
                                            const resolved = Promise.resolve(fn.__await);
                                            fn = () => { ... };
                                            nextPromise = resolved.then(() => { ... }, fn);
                                          }
                                          const resolved1 = Promise.resolve(fn);
                                          nextPromise = resolved1.then(() => { ... }, () => { ... });
                                        } else {
                                          closure_1(tmp2.arg);
                                        }
                                      });
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  });
                                }
                                tmp9 = lib;
                              }
                            }
                            const resolved1 = Promise.resolve(value);
                            resolved1.then((value) => {
                              iter.value = value;
                              lib(iter);
                            }, (arg0) => {
                              const tmp2 = closure_1_10(lib.throw, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                let fn = iter.value;
                                if (fn) {
                                  if (typeof fn === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(fn, "__await");
                                    }
                                    tmp9 = lib;
                                  }
                                  const resolved = Promise.resolve(fn.__await);
                                  fn = (arg0) => {
                                    const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      const value = iter.value;
                                      if (value) {
                                        if (typeof value === "object") {
                                          const call = lib.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(value, "__await");
                                          }
                                          if (callResult) {
                                            const resolved = Promise.resolve(value.__await);
                                            resolved.then(() => { ... }, () => { ... });
                                          }
                                          tmp9 = lib;
                                        }
                                      }
                                      const resolved1 = Promise.resolve(value);
                                      resolved1.then(() => { ... }, () => { ... });
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  };
                                  nextPromise = resolved.then((arg0) => {
                                    const tmp2 = closure_1_10(lib.next, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      const value = iter.value;
                                      if (value) {
                                        if (typeof value === "object") {
                                          const call = lib.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(value, "__await");
                                          }
                                          if (callResult) {
                                            const resolved = Promise.resolve(value.__await);
                                            resolved.then(() => { ... }, () => { ... });
                                          }
                                          tmp9 = lib;
                                        }
                                      }
                                      const resolved1 = Promise.resolve(value);
                                      resolved1.then(() => { ... }, () => { ... });
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  }, fn);
                                }
                                const resolved1 = Promise.resolve(fn);
                                nextPromise = resolved1.then((value) => {
                                  iter.value = value;
                                  lib(iter);
                                }, (arg0) => {
                                  const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                  if ("throw" !== tmp2.type) {
                                    iter = tmp2.arg;
                                    let fn = iter.value;
                                    if (fn) {
                                      if (typeof fn === "object") {
                                        const call = lib.call;
                                        if (typeof call === "unknown") {
                                          let callResult = tmp9("__await");
                                        } else {
                                          callResult = call(fn, "__await");
                                        }
                                        tmp9 = lib;
                                      }
                                      const resolved = Promise.resolve(fn.__await);
                                      fn = () => { ... };
                                      nextPromise = resolved.then(() => { ... }, fn);
                                    }
                                    const resolved1 = Promise.resolve(fn);
                                    nextPromise = resolved1.then(() => { ... }, () => { ... });
                                  } else {
                                    closure_1(tmp2.arg);
                                  }
                                });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            });
                          } else {
                            closure_1(tmp2.arg);
                          }
                        }, (arg0) => {
                          const tmp2 = closure_1_10(lib.throw, lib, arg0);
                          if ("throw" !== tmp2.type) {
                            iter = tmp2.arg;
                            const value = iter.value;
                            if (value) {
                              if (typeof value === "object") {
                                const call = lib.call;
                                if (typeof call === "unknown") {
                                  let callResult = tmp9("__await");
                                } else {
                                  callResult = call(value, "__await");
                                }
                                if (callResult) {
                                  const resolved = Promise.resolve(value.__await);
                                  resolved.then((arg0) => {
                                    const tmp2 = closure_1_10(lib.next, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      const value = iter.value;
                                      if (value) {
                                        if (typeof value === "object") {
                                          const call = lib.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(value, "__await");
                                          }
                                          if (callResult) {
                                            const resolved = Promise.resolve(value.__await);
                                            resolved.then((arg0) => {
                                              const tmp2 = closure_1_10(lib.next, lib, arg0);
                                              if ("throw" !== tmp2.type) {
                                                iter = tmp2.arg;
                                                const value = iter.value;
                                                if (value) {
                                                  if (typeof value === "object") {
                                                    const call = lib.call;
                                                    if (typeof call === "unknown") {
                                                      let callResult = tmp9("__await");
                                                    } else {
                                                      callResult = call(value, "__await");
                                                    }
                                                    if (callResult) {
                                                      const resolved = Promise.resolve(value.__await);
                                                      resolved.then(() => { ... }, () => { ... });
                                                    }
                                                    tmp9 = lib;
                                                  }
                                                }
                                                const resolved1 = Promise.resolve(value);
                                                resolved1.then(() => { ... }, () => { ... });
                                              } else {
                                                closure_1(tmp2.arg);
                                              }
                                            }, (arg0) => {
                                              const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                              if ("throw" !== tmp2.type) {
                                                iter = tmp2.arg;
                                                const value = iter.value;
                                                if (value) {
                                                  if (typeof value === "object") {
                                                    const call = lib.call;
                                                    if (typeof call === "unknown") {
                                                      let callResult = tmp9("__await");
                                                    } else {
                                                      callResult = call(value, "__await");
                                                    }
                                                    if (callResult) {
                                                      const resolved = Promise.resolve(value.__await);
                                                      resolved.then(() => { ... }, () => { ... });
                                                    }
                                                    tmp9 = lib;
                                                  }
                                                }
                                                const resolved1 = Promise.resolve(value);
                                                resolved1.then(() => { ... }, () => { ... });
                                              } else {
                                                closure_1(tmp2.arg);
                                              }
                                            });
                                          }
                                          tmp9 = lib;
                                        }
                                      }
                                      const resolved1 = Promise.resolve(value);
                                      resolved1.then((value) => {
                                        iter.value = value;
                                        lib(iter);
                                      }, (arg0) => {
                                        const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                        if ("throw" !== tmp2.type) {
                                          iter = tmp2.arg;
                                          let fn = iter.value;
                                          if (fn) {
                                            if (typeof fn === "object") {
                                              const call = lib.call;
                                              if (typeof call === "unknown") {
                                                let callResult = tmp9("__await");
                                              } else {
                                                callResult = call(fn, "__await");
                                              }
                                              tmp9 = lib;
                                            }
                                            const resolved = Promise.resolve(fn.__await);
                                            fn = () => { ... };
                                            nextPromise = resolved.then(() => { ... }, fn);
                                          }
                                          const resolved1 = Promise.resolve(fn);
                                          nextPromise = resolved1.then(() => { ... }, () => { ... });
                                        } else {
                                          closure_1(tmp2.arg);
                                        }
                                      });
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  }, (arg0) => {
                                    const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      const value = iter.value;
                                      if (value) {
                                        if (typeof value === "object") {
                                          const call = lib.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(value, "__await");
                                          }
                                          if (callResult) {
                                            const resolved = Promise.resolve(value.__await);
                                            resolved.then((arg0) => {
                                              const tmp2 = closure_1_10(lib.next, lib, arg0);
                                              if ("throw" !== tmp2.type) {
                                                iter = tmp2.arg;
                                                const value = iter.value;
                                                if (value) {
                                                  if (typeof value === "object") {
                                                    const call = lib.call;
                                                    if (typeof call === "unknown") {
                                                      let callResult = tmp9("__await");
                                                    } else {
                                                      callResult = call(value, "__await");
                                                    }
                                                    if (callResult) {
                                                      const resolved = Promise.resolve(value.__await);
                                                      resolved.then(() => { ... }, () => { ... });
                                                    }
                                                    tmp9 = lib;
                                                  }
                                                }
                                                const resolved1 = Promise.resolve(value);
                                                resolved1.then(() => { ... }, () => { ... });
                                              } else {
                                                closure_1(tmp2.arg);
                                              }
                                            }, (arg0) => {
                                              const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                              if ("throw" !== tmp2.type) {
                                                iter = tmp2.arg;
                                                const value = iter.value;
                                                if (value) {
                                                  if (typeof value === "object") {
                                                    const call = lib.call;
                                                    if (typeof call === "unknown") {
                                                      let callResult = tmp9("__await");
                                                    } else {
                                                      callResult = call(value, "__await");
                                                    }
                                                    if (callResult) {
                                                      const resolved = Promise.resolve(value.__await);
                                                      resolved.then(() => { ... }, () => { ... });
                                                    }
                                                    tmp9 = lib;
                                                  }
                                                }
                                                const resolved1 = Promise.resolve(value);
                                                resolved1.then(() => { ... }, () => { ... });
                                              } else {
                                                closure_1(tmp2.arg);
                                              }
                                            });
                                          }
                                          tmp9 = lib;
                                        }
                                      }
                                      const resolved1 = Promise.resolve(value);
                                      resolved1.then((value) => {
                                        iter.value = value;
                                        lib(iter);
                                      }, (arg0) => {
                                        const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                        if ("throw" !== tmp2.type) {
                                          iter = tmp2.arg;
                                          let fn = iter.value;
                                          if (fn) {
                                            if (typeof fn === "object") {
                                              const call = lib.call;
                                              if (typeof call === "unknown") {
                                                let callResult = tmp9("__await");
                                              } else {
                                                callResult = call(fn, "__await");
                                              }
                                              tmp9 = lib;
                                            }
                                            const resolved = Promise.resolve(fn.__await);
                                            fn = () => { ... };
                                            nextPromise = resolved.then(() => { ... }, fn);
                                          }
                                          const resolved1 = Promise.resolve(fn);
                                          nextPromise = resolved1.then(() => { ... }, () => { ... });
                                        } else {
                                          closure_1(tmp2.arg);
                                        }
                                      });
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  });
                                }
                                tmp9 = lib;
                              }
                            }
                            const resolved1 = Promise.resolve(value);
                            resolved1.then((value) => {
                              iter.value = value;
                              lib(iter);
                            }, (arg0) => {
                              const tmp2 = closure_1_10(lib.throw, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                let fn = iter.value;
                                if (fn) {
                                  if (typeof fn === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(fn, "__await");
                                    }
                                    tmp9 = lib;
                                  }
                                  const resolved = Promise.resolve(fn.__await);
                                  fn = (arg0) => {
                                    const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      const value = iter.value;
                                      if (value) {
                                        if (typeof value === "object") {
                                          const call = lib.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(value, "__await");
                                          }
                                          if (callResult) {
                                            const resolved = Promise.resolve(value.__await);
                                            resolved.then(() => { ... }, () => { ... });
                                          }
                                          tmp9 = lib;
                                        }
                                      }
                                      const resolved1 = Promise.resolve(value);
                                      resolved1.then(() => { ... }, () => { ... });
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  };
                                  nextPromise = resolved.then((arg0) => {
                                    const tmp2 = closure_1_10(lib.next, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      const value = iter.value;
                                      if (value) {
                                        if (typeof value === "object") {
                                          const call = lib.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(value, "__await");
                                          }
                                          if (callResult) {
                                            const resolved = Promise.resolve(value.__await);
                                            resolved.then(() => { ... }, () => { ... });
                                          }
                                          tmp9 = lib;
                                        }
                                      }
                                      const resolved1 = Promise.resolve(value);
                                      resolved1.then(() => { ... }, () => { ... });
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  }, fn);
                                }
                                const resolved1 = Promise.resolve(fn);
                                nextPromise = resolved1.then((value) => {
                                  iter.value = value;
                                  lib(iter);
                                }, (arg0) => {
                                  const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                  if ("throw" !== tmp2.type) {
                                    iter = tmp2.arg;
                                    let fn = iter.value;
                                    if (fn) {
                                      if (typeof fn === "object") {
                                        const call = lib.call;
                                        if (typeof call === "unknown") {
                                          let callResult = tmp9("__await");
                                        } else {
                                          callResult = call(fn, "__await");
                                        }
                                        tmp9 = lib;
                                      }
                                      const resolved = Promise.resolve(fn.__await);
                                      fn = () => { ... };
                                      nextPromise = resolved.then(() => { ... }, fn);
                                    }
                                    const resolved1 = Promise.resolve(fn);
                                    nextPromise = resolved1.then(() => { ... }, () => { ... });
                                  } else {
                                    closure_1(tmp2.arg);
                                  }
                                });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            });
                          } else {
                            closure_1(tmp2.arg);
                          }
                        });
                      }
                      tmp8 = closure_1_0;
                    }
                  }
                  let resolved1 = Promise.resolve(value);
                  resolved1.then((value) => {
                    iter.value = value;
                    lib(iter);
                  }, (arg0) => {
                    const tmp2 = closure_1_10(lib.throw, lib, arg0);
                    if ("throw" !== tmp2.type) {
                      iter = tmp2.arg;
                      let fn = iter.value;
                      if (fn) {
                        if (typeof fn === "object") {
                          const call = lib.call;
                          if (typeof call === "unknown") {
                            let callResult = tmp9("__await");
                          } else {
                            callResult = call(fn, "__await");
                          }
                          tmp9 = lib;
                        }
                        const resolved = Promise.resolve(fn.__await);
                        fn = (arg0) => {
                          const tmp2 = closure_1_10(lib.throw, lib, arg0);
                          if ("throw" !== tmp2.type) {
                            iter = tmp2.arg;
                            const value = iter.value;
                            if (value) {
                              if (typeof value === "object") {
                                const call = lib.call;
                                if (typeof call === "unknown") {
                                  let callResult = tmp9("__await");
                                } else {
                                  callResult = call(value, "__await");
                                }
                                if (callResult) {
                                  const resolved = Promise.resolve(value.__await);
                                  resolved.then((arg0) => {
                                    const tmp2 = closure_1_10(lib.next, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      const value = iter.value;
                                      if (value) {
                                        if (typeof value === "object") {
                                          const call = lib.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(value, "__await");
                                          }
                                          if (callResult) {
                                            const resolved = Promise.resolve(value.__await);
                                            resolved.then(() => { ... }, () => { ... });
                                          }
                                          tmp9 = lib;
                                        }
                                      }
                                      const resolved1 = Promise.resolve(value);
                                      resolved1.then(() => { ... }, () => { ... });
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  }, (arg0) => {
                                    const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      const value = iter.value;
                                      if (value) {
                                        if (typeof value === "object") {
                                          const call = lib.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(value, "__await");
                                          }
                                          if (callResult) {
                                            const resolved = Promise.resolve(value.__await);
                                            resolved.then(() => { ... }, () => { ... });
                                          }
                                          tmp9 = lib;
                                        }
                                      }
                                      const resolved1 = Promise.resolve(value);
                                      resolved1.then(() => { ... }, () => { ... });
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  });
                                }
                                tmp9 = lib;
                              }
                            }
                            const resolved1 = Promise.resolve(value);
                            resolved1.then((value) => {
                              iter.value = value;
                              lib(iter);
                            }, (arg0) => {
                              const tmp2 = closure_1_10(lib.throw, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                let fn = iter.value;
                                if (fn) {
                                  if (typeof fn === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(fn, "__await");
                                    }
                                    tmp9 = lib;
                                  }
                                  const resolved = Promise.resolve(fn.__await);
                                  fn = () => { ... };
                                  nextPromise = resolved.then(() => { ... }, fn);
                                }
                                const resolved1 = Promise.resolve(fn);
                                nextPromise = resolved1.then(() => { ... }, () => { ... });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            });
                          } else {
                            closure_1(tmp2.arg);
                          }
                        };
                        nextPromise = resolved.then((arg0) => {
                          const tmp2 = closure_1_10(lib.next, lib, arg0);
                          if ("throw" !== tmp2.type) {
                            iter = tmp2.arg;
                            const value = iter.value;
                            if (value) {
                              if (typeof value === "object") {
                                const call = lib.call;
                                if (typeof call === "unknown") {
                                  let callResult = tmp9("__await");
                                } else {
                                  callResult = call(value, "__await");
                                }
                                if (callResult) {
                                  const resolved = Promise.resolve(value.__await);
                                  resolved.then((arg0) => {
                                    const tmp2 = closure_1_10(lib.next, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      const value = iter.value;
                                      if (value) {
                                        if (typeof value === "object") {
                                          const call = lib.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(value, "__await");
                                          }
                                          if (callResult) {
                                            const resolved = Promise.resolve(value.__await);
                                            resolved.then(() => { ... }, () => { ... });
                                          }
                                          tmp9 = lib;
                                        }
                                      }
                                      const resolved1 = Promise.resolve(value);
                                      resolved1.then(() => { ... }, () => { ... });
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  }, (arg0) => {
                                    const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                    if ("throw" !== tmp2.type) {
                                      iter = tmp2.arg;
                                      const value = iter.value;
                                      if (value) {
                                        if (typeof value === "object") {
                                          const call = lib.call;
                                          if (typeof call === "unknown") {
                                            let callResult = tmp9("__await");
                                          } else {
                                            callResult = call(value, "__await");
                                          }
                                          if (callResult) {
                                            const resolved = Promise.resolve(value.__await);
                                            resolved.then(() => { ... }, () => { ... });
                                          }
                                          tmp9 = lib;
                                        }
                                      }
                                      const resolved1 = Promise.resolve(value);
                                      resolved1.then(() => { ... }, () => { ... });
                                    } else {
                                      closure_1(tmp2.arg);
                                    }
                                  });
                                }
                                tmp9 = lib;
                              }
                            }
                            const resolved1 = Promise.resolve(value);
                            resolved1.then((value) => {
                              iter.value = value;
                              lib(iter);
                            }, (arg0) => {
                              const tmp2 = closure_1_10(lib.throw, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                let fn = iter.value;
                                if (fn) {
                                  if (typeof fn === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(fn, "__await");
                                    }
                                    tmp9 = lib;
                                  }
                                  const resolved = Promise.resolve(fn.__await);
                                  fn = () => { ... };
                                  nextPromise = resolved.then(() => { ... }, fn);
                                }
                                const resolved1 = Promise.resolve(fn);
                                nextPromise = resolved1.then(() => { ... }, () => { ... });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            });
                          } else {
                            closure_1(tmp2.arg);
                          }
                        }, fn);
                      }
                      const resolved1 = Promise.resolve(fn);
                      nextPromise = resolved1.then((value) => {
                        iter.value = value;
                        lib(iter);
                      }, (arg0) => {
                        const tmp2 = closure_1_10(lib.throw, lib, arg0);
                        if ("throw" !== tmp2.type) {
                          iter = tmp2.arg;
                          let fn = iter.value;
                          if (fn) {
                            if (typeof fn === "object") {
                              const call = lib.call;
                              if (typeof call === "unknown") {
                                let callResult = tmp9("__await");
                              } else {
                                callResult = call(fn, "__await");
                              }
                              tmp9 = lib;
                            }
                            const resolved = Promise.resolve(fn.__await);
                            fn = (arg0) => {
                              const tmp2 = closure_1_10(lib.throw, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                const value = iter.value;
                                if (value) {
                                  if (typeof value === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(value, "__await");
                                    }
                                    if (callResult) {
                                      const resolved = Promise.resolve(value.__await);
                                      resolved.then(() => { ... }, () => { ... });
                                    }
                                    tmp9 = lib;
                                  }
                                }
                                const resolved1 = Promise.resolve(value);
                                resolved1.then(() => { ... }, () => { ... });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            };
                            nextPromise = resolved.then((arg0) => {
                              const tmp2 = closure_1_10(lib.next, lib, arg0);
                              if ("throw" !== tmp2.type) {
                                iter = tmp2.arg;
                                const value = iter.value;
                                if (value) {
                                  if (typeof value === "object") {
                                    const call = lib.call;
                                    if (typeof call === "unknown") {
                                      let callResult = tmp9("__await");
                                    } else {
                                      callResult = call(value, "__await");
                                    }
                                    if (callResult) {
                                      const resolved = Promise.resolve(value.__await);
                                      resolved.then(() => { ... }, () => { ... });
                                    }
                                    tmp9 = lib;
                                  }
                                }
                                const resolved1 = Promise.resolve(value);
                                resolved1.then(() => { ... }, () => { ... });
                              } else {
                                closure_1(tmp2.arg);
                              }
                            }, fn);
                          }
                          const resolved1 = Promise.resolve(fn);
                          nextPromise = resolved1.then((value) => {
                            iter.value = value;
                            lib(iter);
                          }, (arg0) => {
                            const tmp2 = closure_1_10(lib.throw, lib, arg0);
                            if ("throw" !== tmp2.type) {
                              iter = tmp2.arg;
                              let fn = iter.value;
                              if (fn) {
                                if (typeof fn === "object") {
                                  const call = lib.call;
                                  if (typeof call === "unknown") {
                                    let callResult = tmp9("__await");
                                  } else {
                                    callResult = call(fn, "__await");
                                  }
                                  tmp9 = lib;
                                }
                                const resolved = Promise.resolve(fn.__await);
                                fn = () => { ... };
                                nextPromise = resolved.then(() => { ... }, fn);
                              }
                              const resolved1 = Promise.resolve(fn);
                              nextPromise = resolved1.then(() => { ... }, () => { ... });
                            } else {
                              closure_1(tmp2.arg);
                            }
                          });
                        } else {
                          closure_1(tmp2.arg);
                        }
                      });
                    } else {
                      closure_1(tmp2.arg);
                    }
                  });
                } else {
                  arg1(tmp.arg);
                }
              });
            }
            return nextPromise;
          };
          return;
        }
      }
      GeneratorFunctionPrototype[tmp5] = "GeneratorFunction";
      tmp6.isGeneratorFunction = (fn) => {
        let constructor = typeof fn === "function";
        if (typeof fn === "function") {
          constructor = fn.constructor;
        }
        let tmp = constructor;
        if (tmp) {
          let tmp3 = constructor === GeneratorFunction;
          if (!tmp3) {
            tmp3 = "GeneratorFunction" === (constructor.displayName || constructor.name);
            const tmp4 = constructor.displayName || constructor.name;
          }
          tmp = tmp3;
        }
        return tmp;
      };
      tmp6.mark = (arg0) => {
        if (Object.setPrototypeOf) {
          const _Object = Object;
          Object.setPrototypeOf(arg0, GeneratorFunctionPrototype);
        } else {
          arg0.__proto__ = GeneratorFunctionPrototype;
          if (!(next in arg0)) {
            arg0[tmp2] = "GeneratorFunction";
          }
        }
        arg0.prototype = Object.create(obj);
        return arg0;
      };
      tmp6.awrap = (__await) => ({ __await });
      class Context {
        constructor(arg0) {
          items = [];
          items[0] = { tryLoc: "root" };
          this.tryEntries = items;
          item = global.forEach(pushTryEntry, this);
          resetResult = this.reset(true);
          return;
        }
      }
      let items = ["next", "throw", "return"];
      let item = items.forEach((arg0) => {
        closure_0 = arg0;
        closure_0[arg0] = function(arg0) {
          return this._invoke(closure_0, arg0);
        };
      });
      AsyncIterator.prototype[tmp4] = function() {
        return this;
      };
      tmp6.AsyncIterator = AsyncIterator;
      tmp6.async = (arg0, fn) => {
        if (!fn) {
          let tmp3 = Generator;
        } else {
          tmp3 = fn;
        }
        let items = arg3;
        obj = Object.create(tmp3.prototype);
        if (!arg3) {
          items = [];
        }
        obj = Object.create(Context.prototype);
        const items1 = [{ tryLoc: "root" }];
        obj.tryEntries = items1;
        const item = items.forEach(pushTryEntry, obj);
        obj.reset(true);
        let iter = arg0;
        c1 = arg2;
        const generatorFunction = closure_4;
        obj._invoke = function invoke(method, arg1) {
          if (closure_3 === closure_1_6) {
            const _Error = Error;
            error = new Error("Generator is already running");
            throw error;
          } else if (tmp === closure_1_7) {
            if ("throw" === method) {
              throw arg1;
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            obj.method = method;
            obj.arg = arg1;
            while (true) {
              iter = obj;
              let delegate = obj.delegate;
              if (delegate) {
                let tmp2 = closure_1_15;
                let tmp3 = closure_1_15(delegate, iter);
                if (tmp3) {
                  let tmp15 = closure_1_8;
                  if (tmp3 === closure_1_8) {
                    continue;
                  } else {
                    return tmp3;
                  }
                }
              }
              if ("next" === iter.method) {
                let arg = iter.arg;
                iter._sent = arg;
                iter.sent = arg;
              } else if ("throw" === iter.method) {
                let tmp5 = closure_3;
                let tmp6 = closure_1_4;
                if (closure_3 === closure_1_4) {
                  break;
                } else {
                  let dispatchExceptionResult = iter.dispatchException(iter.arg);
                }
              } else if ("return" === iter.method) {
                let abruptResult = iter.abrupt("return", iter.arg);
              }
              let tmp9 = closure_1_6;
              closure_3 = closure_1_6;
              let tmp10 = closure_1_10;
              let tmp11 = iter;
              let tmp12 = c1;
              let tmp13 = closure_1_10(iter, c1, iter);
              if ("normal" === tmp13.type) {
                closure_3 = iter.done ? closure_1_7 : closure_1_5;
                let tmp14 = closure_1_8;
                if (tmp13.arg === closure_1_8) {
                  continue;
                } else {
                  obj = { value: null, done: null };
                  obj[0] = tmp13.arg;
                  obj[1] = iter.done;
                  return obj;
                }
              } else {
                if ("throw" !== tmp13.type) {
                  continue;
                } else {
                  let tmp25 = closure_1_7;
                  closure_3 = closure_1_7;
                  iter.method = "throw";
                  iter.arg = tmp13.arg;
                  continue;
                }
                continue;
              }
              continue;
            }
            closure_3 = closure_1_7;
            throw iter.arg;
          }
        };
        iter = Object.create(AsyncIterator.prototype);
        iter = obj;
        c1 = undefined;
        iter._invoke = function enqueue(arg0, arg1) {
          closure_0 = arg0;
          let nextPromise = arg1;
          if (nextPromise) {
            function callInvokeWithMethodAndArg() {
              return new Promise((arg0, arg1) => {
                closure_0 = arg0;
                closure_1 = arg1;
                const tmp = closure_1_10(closure_1_0[closure_0], closure_1_0, closure_1);
                if ("throw" !== tmp.type) {
                  iter = tmp.arg;
                  let value = iter.value;
                  if (value) {
                    if (typeof value === "object") {
                      let call = closure_1_0.call;
                      if (typeof call === "unknown") {
                        let callResult = tmp8("__await");
                      } else {
                        callResult = call(value, "__await");
                      }
                      if (callResult) {
                        let resolved = Promise.resolve(value.__await);
                        resolved.then((arg0) => {
                          const tmp2 = closure_1_10(lib.next, lib, arg0);
                          if ("throw" !== tmp2.type) {
                            iter = tmp2.arg;
                            const value = iter.value;
                            if (value) {
                              if (typeof value === "object") {
                                const call = lib.call;
                                if (typeof call === "unknown") {
                                  let callResult = tmp9("__await");
                                } else {
                                  callResult = call(value, "__await");
                                }
                                if (callResult) {
                                  const resolved = Promise.resolve(value.__await);
                                  resolved.then(() => { ... }, () => { ... });
                                }
                                tmp9 = lib;
                              }
                            }
                            const resolved1 = Promise.resolve(value);
                            resolved1.then(() => { ... }, () => { ... });
                          } else {
                            closure_1(tmp2.arg);
                          }
                        }, (arg0) => {
                          const tmp2 = closure_1_10(lib.throw, lib, arg0);
                          if ("throw" !== tmp2.type) {
                            iter = tmp2.arg;
                            const value = iter.value;
                            if (value) {
                              if (typeof value === "object") {
                                const call = lib.call;
                                if (typeof call === "unknown") {
                                  let callResult = tmp9("__await");
                                } else {
                                  callResult = call(value, "__await");
                                }
                                if (callResult) {
                                  const resolved = Promise.resolve(value.__await);
                                  resolved.then(() => { ... }, () => { ... });
                                }
                                tmp9 = lib;
                              }
                            }
                            const resolved1 = Promise.resolve(value);
                            resolved1.then(() => { ... }, () => { ... });
                          } else {
                            closure_1(tmp2.arg);
                          }
                        });
                      }
                      tmp8 = closure_1_0;
                    }
                  }
                  let resolved1 = Promise.resolve(value);
                  resolved1.then((value) => {
                    iter.value = value;
                    lib(iter);
                  }, (arg0) => {
                    const tmp2 = closure_1_10(lib.throw, lib, arg0);
                    if ("throw" !== tmp2.type) {
                      iter = tmp2.arg;
                      let fn = iter.value;
                      if (fn) {
                        if (typeof fn === "object") {
                          const call = lib.call;
                          if (typeof call === "unknown") {
                            let callResult = tmp9("__await");
                          } else {
                            callResult = call(fn, "__await");
                          }
                          tmp9 = lib;
                        }
                        const resolved = Promise.resolve(fn.__await);
                        fn = () => { ... };
                        nextPromise = resolved.then(() => { ... }, fn);
                      }
                      const resolved1 = Promise.resolve(fn);
                      nextPromise = resolved1.then(() => { ... }, () => { ... });
                    } else {
                      closure_1(tmp2.arg);
                    }
                  });
                } else {
                  arg1(tmp.arg);
                }
              });
            }
            nextPromise = nextPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg);
          } else {
            nextPromise = new Promise((arg0, arg1) => {
              closure_0 = arg0;
              closure_1 = arg1;
              const tmp = closure_1_10(closure_1_0[closure_0], closure_1_0, closure_1);
              if ("throw" !== tmp.type) {
                iter = tmp.arg;
                let value = iter.value;
                if (value) {
                  if (typeof value === "object") {
                    let call = closure_1_0.call;
                    if (typeof call === "unknown") {
                      let callResult = tmp8("__await");
                    } else {
                      callResult = call(value, "__await");
                    }
                    if (callResult) {
                      let resolved = Promise.resolve(value.__await);
                      resolved.then((arg0) => {
                        const tmp2 = closure_1_10(lib.next, lib, arg0);
                        if ("throw" !== tmp2.type) {
                          iter = tmp2.arg;
                          const value = iter.value;
                          if (value) {
                            if (typeof value === "object") {
                              const call = lib.call;
                              if (typeof call === "unknown") {
                                let callResult = tmp9("__await");
                              } else {
                                callResult = call(value, "__await");
                              }
                              if (callResult) {
                                const resolved = Promise.resolve(value.__await);
                                resolved.then((arg0) => {
                                  const tmp2 = closure_1_10(lib.next, lib, arg0);
                                  if ("throw" !== tmp2.type) {
                                    iter = tmp2.arg;
                                    const value = iter.value;
                                    if (value) {
                                      if (typeof value === "object") {
                                        const call = lib.call;
                                        if (typeof call === "unknown") {
                                          let callResult = tmp9("__await");
                                        } else {
                                          callResult = call(value, "__await");
                                        }
                                        if (callResult) {
                                          const resolved = Promise.resolve(value.__await);
                                          resolved.then(() => { ... }, () => { ... });
                                        }
                                        tmp9 = lib;
                                      }
                                    }
                                    const resolved1 = Promise.resolve(value);
                                    resolved1.then(() => { ... }, () => { ... });
                                  } else {
                                    closure_1(tmp2.arg);
                                  }
                                }, (arg0) => {
                                  const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                  if ("throw" !== tmp2.type) {
                                    iter = tmp2.arg;
                                    const value = iter.value;
                                    if (value) {
                                      if (typeof value === "object") {
                                        const call = lib.call;
                                        if (typeof call === "unknown") {
                                          let callResult = tmp9("__await");
                                        } else {
                                          callResult = call(value, "__await");
                                        }
                                        if (callResult) {
                                          const resolved = Promise.resolve(value.__await);
                                          resolved.then(() => { ... }, () => { ... });
                                        }
                                        tmp9 = lib;
                                      }
                                    }
                                    const resolved1 = Promise.resolve(value);
                                    resolved1.then(() => { ... }, () => { ... });
                                  } else {
                                    closure_1(tmp2.arg);
                                  }
                                });
                              }
                              tmp9 = lib;
                            }
                          }
                          const resolved1 = Promise.resolve(value);
                          resolved1.then((value) => {
                            iter.value = value;
                            lib(iter);
                          }, (arg0) => {
                            const tmp2 = closure_1_10(lib.throw, lib, arg0);
                            if ("throw" !== tmp2.type) {
                              iter = tmp2.arg;
                              let fn = iter.value;
                              if (fn) {
                                if (typeof fn === "object") {
                                  const call = lib.call;
                                  if (typeof call === "unknown") {
                                    let callResult = tmp9("__await");
                                  } else {
                                    callResult = call(fn, "__await");
                                  }
                                  tmp9 = lib;
                                }
                                const resolved = Promise.resolve(fn.__await);
                                fn = () => { ... };
                                nextPromise = resolved.then(() => { ... }, fn);
                              }
                              const resolved1 = Promise.resolve(fn);
                              nextPromise = resolved1.then(() => { ... }, () => { ... });
                            } else {
                              closure_1(tmp2.arg);
                            }
                          });
                        } else {
                          closure_1(tmp2.arg);
                        }
                      }, (arg0) => {
                        const tmp2 = closure_1_10(lib.throw, lib, arg0);
                        if ("throw" !== tmp2.type) {
                          iter = tmp2.arg;
                          const value = iter.value;
                          if (value) {
                            if (typeof value === "object") {
                              const call = lib.call;
                              if (typeof call === "unknown") {
                                let callResult = tmp9("__await");
                              } else {
                                callResult = call(value, "__await");
                              }
                              if (callResult) {
                                const resolved = Promise.resolve(value.__await);
                                resolved.then((arg0) => {
                                  const tmp2 = closure_1_10(lib.next, lib, arg0);
                                  if ("throw" !== tmp2.type) {
                                    iter = tmp2.arg;
                                    const value = iter.value;
                                    if (value) {
                                      if (typeof value === "object") {
                                        const call = lib.call;
                                        if (typeof call === "unknown") {
                                          let callResult = tmp9("__await");
                                        } else {
                                          callResult = call(value, "__await");
                                        }
                                        if (callResult) {
                                          const resolved = Promise.resolve(value.__await);
                                          resolved.then(() => { ... }, () => { ... });
                                        }
                                        tmp9 = lib;
                                      }
                                    }
                                    const resolved1 = Promise.resolve(value);
                                    resolved1.then(() => { ... }, () => { ... });
                                  } else {
                                    closure_1(tmp2.arg);
                                  }
                                }, (arg0) => {
                                  const tmp2 = closure_1_10(lib.throw, lib, arg0);
                                  if ("throw" !== tmp2.type) {
                                    iter = tmp2.arg;
                                    const value = iter.value;
                                    if (value) {
                                      if (typeof value === "object") {
                                        const call = lib.call;
                                        if (typeof call === "unknown") {
                                          let callResult = tmp9("__await");
                                        } else {
                                          callResult = call(value, "__await");
                                        }
                                        if (callResult) {
                                          const resolved = Promise.resolve(value.__await);
                                          resolved.then(() => { ... }, () => { ... });
                                        }
                                        tmp9 = lib;
                                      }
                                    }
                                    const resolved1 = Promise.resolve(value);
                                    resolved1.then(() => { ... }, () => { ... });
                                  } else {
                                    closure_1(tmp2.arg);
                                  }
                                });
                              }
                              tmp9 = lib;
                            }
                          }
                          const resolved1 = Promise.resolve(value);
                          resolved1.then((value) => {
                            iter.value = value;
                            lib(iter);
                          }, (arg0) => {
                            const tmp2 = closure_1_10(lib.throw, lib, arg0);
                            if ("throw" !== tmp2.type) {
                              iter = tmp2.arg;
                              let fn = iter.value;
                              if (fn) {
                                if (typeof fn === "object") {
                                  const call = lib.call;
                                  if (typeof call === "unknown") {
                                    let callResult = tmp9("__await");
                                  } else {
                                    callResult = call(fn, "__await");
                                  }
                                  tmp9 = lib;
                                }
                                const resolved = Promise.resolve(fn.__await);
                                fn = () => { ... };
                                nextPromise = resolved.then(() => { ... }, fn);
                              }
                              const resolved1 = Promise.resolve(fn);
                              nextPromise = resolved1.then(() => { ... }, () => { ... });
                            } else {
                              closure_1(tmp2.arg);
                            }
                          });
                        } else {
                          closure_1(tmp2.arg);
                        }
                      });
                    }
                    tmp8 = closure_1_0;
                  }
                }
                let resolved1 = Promise.resolve(value);
                resolved1.then((value) => {
                  iter.value = value;
                  lib(iter);
                }, (arg0) => {
                  const tmp2 = closure_1_10(lib.throw, lib, arg0);
                  if ("throw" !== tmp2.type) {
                    iter = tmp2.arg;
                    let fn = iter.value;
                    if (fn) {
                      if (typeof fn === "object") {
                        const call = lib.call;
                        if (typeof call === "unknown") {
                          let callResult = tmp9("__await");
                        } else {
                          callResult = call(fn, "__await");
                        }
                        tmp9 = lib;
                      }
                      const resolved = Promise.resolve(fn.__await);
                      fn = (arg0) => {
                        const tmp2 = closure_1_10(lib.throw, lib, arg0);
                        if ("throw" !== tmp2.type) {
                          iter = tmp2.arg;
                          const value = iter.value;
                          if (value) {
                            if (typeof value === "object") {
                              const call = lib.call;
                              if (typeof call === "unknown") {
                                let callResult = tmp9("__await");
                              } else {
                                callResult = call(value, "__await");
                              }
                              if (callResult) {
                                const resolved = Promise.resolve(value.__await);
                                resolved.then(() => { ... }, () => { ... });
                              }
                              tmp9 = lib;
                            }
                          }
                          const resolved1 = Promise.resolve(value);
                          resolved1.then(() => { ... }, () => { ... });
                        } else {
                          closure_1(tmp2.arg);
                        }
                      };
                      nextPromise = resolved.then((arg0) => {
                        const tmp2 = closure_1_10(lib.next, lib, arg0);
                        if ("throw" !== tmp2.type) {
                          iter = tmp2.arg;
                          const value = iter.value;
                          if (value) {
                            if (typeof value === "object") {
                              const call = lib.call;
                              if (typeof call === "unknown") {
                                let callResult = tmp9("__await");
                              } else {
                                callResult = call(value, "__await");
                              }
                              if (callResult) {
                                const resolved = Promise.resolve(value.__await);
                                resolved.then(() => { ... }, () => { ... });
                              }
                              tmp9 = lib;
                            }
                          }
                          const resolved1 = Promise.resolve(value);
                          resolved1.then(() => { ... }, () => { ... });
                        } else {
                          closure_1(tmp2.arg);
                        }
                      }, fn);
                    }
                    const resolved1 = Promise.resolve(fn);
                    nextPromise = resolved1.then((value) => {
                      iter.value = value;
                      lib(iter);
                    }, (arg0) => {
                      const tmp2 = closure_1_10(lib.throw, lib, arg0);
                      if ("throw" !== tmp2.type) {
                        iter = tmp2.arg;
                        let fn = iter.value;
                        if (fn) {
                          if (typeof fn === "object") {
                            const call = lib.call;
                            if (typeof call === "unknown") {
                              let callResult = tmp9("__await");
                            } else {
                              callResult = call(fn, "__await");
                            }
                            tmp9 = lib;
                          }
                          const resolved = Promise.resolve(fn.__await);
                          fn = () => { ... };
                          nextPromise = resolved.then(() => { ... }, fn);
                        }
                        const resolved1 = Promise.resolve(fn);
                        nextPromise = resolved1.then(() => { ... }, () => { ... });
                      } else {
                        closure_1(tmp2.arg);
                      }
                    });
                  } else {
                    closure_1(tmp2.arg);
                  }
                });
              } else {
                arg1(tmp.arg);
              }
            });
          }
          return nextPromise;
        };
        let nextPromise = iter;
        if (!generatorFunction.isGeneratorFunction(fn)) {
          nextPromise = iter.next().then((done) => {
            if (done.done) {
              let nextResult = done.value;
            } else {
              nextResult = iter.next();
            }
            return nextResult;
          });
          let nextResult = iter.next();
        }
        return nextPromise;
      };
      items2 = obj;
      let items1 = ["next", "throw", "return"];
      const item1 = items1.forEach((arg0) => {
        closure_0 = arg0;
        closure_0[arg0] = function(arg0) {
          return this._invoke(closure_0, arg0);
        };
      });
      obj[tmp5] = "Generator";
      obj[tmp3] = function() {
        return this;
      };
      obj.toString = () => "[object Generator]";
      tmp6.keys = (obj) => {
        closure_0 = obj;
        const items = [];
        for (const key10004 in arg0) {
          let tmp2 = key10004;
          let arr = items.push(key10004);
          continue;
        }
        const reversed = items.reverse();
        next = function next() {
          if (items.length) {
            let arr = items;
            arr = items.pop();
            next.value = arr;
            next.done = false;
            return next;
          }
          next.done = true;
          return next;
        };
        return next;
      };
      tmp6.values = values;
      obj = { constructor: null, reset: null, stop: null, dispatchException: null, abrupt: null, complete: null, finish: null, catch: null, delegateYield: null };
      obj[0] = Context;
      obj[1] = function reset(arg0) {
        obj = { prev: 0, next: 0, _sent: undefined, sent: undefined, done: false, delegate: null, method: "next", arg: undefined };
        const tryEntries = obj.tryEntries;
        const item = tryEntries.forEach(resetTryEntry);
        if (!arg0) {
          for (const key10018 in obj) {
            let tmp8 = key10018;
            let tmp7 = "t" === key10018.charAt(0);
            if (!tmp7) {
              if (tmp7) {
                let _isNaN = isNaN;
                tmp7 = !isNaN(+key10018.slice(1));
              }
              if (!tmp7) {
                continue;
              } else {
                obj[key10018] = undefined;
                continue;
              }
              continue;
            } else {
              let tmp4 = items2;
              let call = items2.call;
              if (typeof call === "unknown") {
                let callResult = tmp4(key10018);
              } else {
                callResult = call(obj, key10018);
              }
              let tmp6 = callResult;
            }
          }
        }
      };
      obj[2] = function stop() {
        this.done = true;
        const completion = this.tryEntries[0].completion;
        if ("throw" === completion.type) {
          throw completion.arg;
        } else {
          return tmp.rval;
        }
      };
      obj[3] = function dispatchException(arg0) {
        const self = this;
        if (this.done) {
          throw arg0;
        } else {
          let diff = self.tryEntries.length - 1;
          if (0 <= diff) {
            const completion = tmp2.completion;
            while ("root" !== self.tryEntries[diff].tryLoc) {
              if (tmp2.tryLoc <= self.prev) {
                let tmp11 = items2;
                let call2 = items2.call;
                let tmp4 = typeof call2 === "unknown" ? tmp11("catchLoc") : call2(tmp2, "catchLoc");
                let call = tmp11.call;
                let tmp5 = typeof call === "unknown" ? tmp11("finallyLoc") : call(tmp2, "finallyLoc");
                if (tmp4) {
                  if (tmp5) {
                    if (self.prev < tmp2.catchLoc) {
                      let str8 = "throw";
                      completion.type = "throw";
                      completion.arg = arg0;
                      self.next = tmp2.catchLoc;
                      let str9 = "next";
                      self.method = "next";
                      self.arg = undefined;
                      let flag3 = true;
                      return true;
                    } else if (self.prev < tmp2.finallyLoc) {
                      let str7 = "throw";
                      completion.type = "throw";
                      completion.arg = arg0;
                      self.next = tmp2.finallyLoc;
                      let flag2 = false;
                      return false;
                    }
                  }
                }
                if (tmp4) {
                  if (self.prev < tmp2.catchLoc) {
                    let str5 = "throw";
                    completion.type = "throw";
                    completion.arg = arg0;
                    self.next = tmp2.catchLoc;
                    let str6 = "next";
                    self.method = "next";
                    self.arg = undefined;
                    let flag = true;
                    return true;
                  }
                } else if (tmp5) {
                  if (self.prev < tmp2.finallyLoc) {
                    let str12 = "throw";
                    completion.type = "throw";
                    completion.arg = arg0;
                    self.next = tmp2.finallyLoc;
                    let flag5 = false;
                    return false;
                  }
                } else {
                  let tmp6 = globalThis;
                  let _Error = Error;
                  let tmp7 = new.target;
                  let str4 = "try statement without catch or finally";
                  let tmp8 = new.target;
                  error = new Error("try statement without catch or finally");
                  let tmp10 = error;
                  throw error;
                }
              }
              diff = diff - 1;
            }
            completion.type = "throw";
            completion.arg = arg0;
            self.next = "end";
            return false;
          }
        }
      };
      obj[4] = function abrupt(type, arg1) {
        const self = this;
        let diff = this.tryEntries.length - 1;
        let tmp2;
        if (0 <= diff) {
          while (true) {
            let tmp3 = self.tryEntries[diff];
            let tmp4 = diff;
            if (tmp3.tryLoc <= self.prev) {
              let tmp5 = items2;
              let call = items2.call;
              if (typeof call === "unknown" ? tmp5("finallyLoc") : call(tmp3, "finallyLoc")) {
                tmp2 = tmp3;
                if (self.prev < tmp3.finallyLoc) {
                  break;
                }
              }
              break;
            }
            diff = diff - 1;
            if (0 > diff) {
              break;
            }
          }
        }
        let tmp6 = tmp2;
        if (tmp2) {
          let tmp7 = "break" === type;
          if (!tmp7) {
            tmp7 = "continue" === type;
          }
          tmp6 = tmp7;
        }
        if (tmp6) {
          tmp6 = tmp2.tryLoc <= arg1;
        }
        if (tmp6) {
          tmp6 = arg1 <= tmp2.finallyLoc;
        }
        if (tmp6) {
          tmp2 = null;
        }
        const tmp8 = tmp2 ? tmp2.completion : {};
        tmp8.type = type;
        tmp8.arg = arg1;
        if (tmp2) {
          self.method = "next";
          self.next = tmp2.finallyLoc;
          let completeResult = closure_8;
        } else {
          completeResult = self.complete(tmp8);
        }
        return completeResult;
      };
      obj[5] = function complete(type, next) {
        if ("throw" === type.type) {
          throw type.arg;
        } else {
          const self = this;
          if ("break" !== type.type) {
            if ("continue" !== type.type) {
              if ("return" === type.type) {
                const arg = type.arg;
                self.arg = arg;
                self.rval = arg;
                self.method = "return";
                self.next = "end";
              } else {
                if (tmp2) {
                  self.next = next;
                }
                tmp2 = "normal" === type.type && next;
              }
            }
            return closure_8;
          }
          self.next = type.arg;
        }
      };
      obj[6] = function finish(arg0) {
        const self = this;
        let diff = this.tryEntries.length - 1;
        if (0 <= diff) {
          while (self.tryEntries[diff].finallyLoc !== arg0) {
            diff = diff - 1;
          }
          self.complete(self.tryEntries[diff].completion, self.tryEntries[diff].afterLoc);
          const tmp7 = self.tryEntries[diff].completion || {};
          tmp7.type = "normal";
          delete tmp[tmp2];
          self.tryEntries[diff].completion = tmp7;
          return closure_8;
        }
      };
      obj[7] = function catch(arg0) {
        let diff = this.tryEntries.length - 1;
        if (0 <= diff) {
          while (this.tryEntries[diff].tryLoc !== arg0) {
            diff = diff - 1;
          }
          let completion = tmp4.completion;
          let arg;
          if ("throw" === completion.type) {
            completion = tmp4.completion;
            if (!completion) {
              completion = {};
            }
            completion.type = "normal";
            delete tmp[tmp2];
            tmp4.completion = completion;
            arg = completion.arg;
          }
          return arg;
        }
        error = new Error("illegal catch attempt");
        throw error;
      };
      obj[8] = function delegateYield(next, resultName, nextLoc) {
        closure_0 = next;
        if (!next) {
          obj = { next: null };
          obj[0] = closure_19;
          let tmp3 = obj;
        } else if (next[c1]) {
          let call = tmp2.call;
          typeof call === "unknown" ? tmp2() : call(next);
        } else {
          tmp3 = next;
          if (typeof next.next !== "function") {
            const _isNaN = isNaN;
            if (!isNaN(next.length)) {
              c1 = -1;
              next = function next() {
                let arr;
                const sum = sum1 + 1;
                sum1 = sum;
                if (sum < next.length) {
                  while (true) {
                    let tmp2 = next;
                    let call = next.call;
                    arr = next;
                    let tmp3 = sum1;
                    if (typeof call === "unknown" ? tmp2(tmp3) : call(arr, tmp3)) {
                      break;
                    } else {
                      let tmp4 = sum1;
                      sum1 = sum1 + 1;
                    }
                  }
                  next.value = arr[sum1];
                  next.done = false;
                  return next;
                }
                next.value = undefined;
                next.done = true;
                return next;
              };
              next.next = next;
              tmp3 = next;
            }
          }
        }
        this.delegate = { iterator: tmp3, resultName, nextLoc };
        if ("next" === this.method) {
          tmp6.arg = undefined;
        }
        return closure_8;
      };
      Context.prototype = obj;
    } else {
      let call2 = hasOwnProperty.call;
      typeof call2 === "unknown" ? hasOwnProperty(tmp3) : call2(tmp7, tmp3);
    }
  } else {
    items2 = [];
    if (items2[tmp3]) {
      let call = tmp9.call;
      typeof call === "unknown" ? tmp9() : call(items2);
    } else {
      let tmp10 = items2;
      if (typeof items2.next === "function") {
        tmp7(tmp7(tmp10));
      } else {
        let _isNaN = isNaN;
        if (!isNaN(items2.length)) {
          c1 = -1;
          next = function next() {
            let arr;
            const sum = sum1 + 1;
            sum1 = sum;
            if (sum < next.length) {
              while (true) {
                let tmp2 = next;
                let call = next.call;
                arr = next;
                let tmp3 = sum1;
                if (typeof call === "unknown" ? tmp2(tmp3) : call(arr, tmp3)) {
                  break;
                } else {
                  let tmp4 = sum1;
                  sum1 = sum1 + 1;
                }
              }
              next.value = arr[sum1];
              next.done = false;
              return next;
            }
            next.value = undefined;
            next.done = true;
            return next;
          };
          next.next = next;
          class Generator {
            constructor() {
              return;
            }
          }
        }
      }
      const obj1 = { next: null };
      obj1[0] = doneResult;
      tmp10 = obj1;
    }
  }
}