// discord_common/js/packages/http-utils/stringifyErrors.tsx
import size from "../../../../_runtime/metro/00002__.js";

function stringifyErrors(message) {
  closure_0 = message;
  let str = "";
  let str2 = "";
  if (null != message) {
    if (typeof message === "string") {
      str2 = message;
    } else if (null == message) {
      const _Array = Array;
      if (Array.isArray(message)) {
        const reduced = message.reduce((acc, message) => {
          if (typeof closure_0 === "function") {
            closure_0 = message;
            let str = "";
            let str2 = "";
            if (null != message) {
              if (typeof message === "string") {
                str2 = message;
              } else if (null == message) {
                const _Array = Array;
                if (Array.isArray(message)) {
                  const reduced = message.reduce((acc, message) => {
                    if (typeof closure_0 === "function") {
                      closure_0 = message;
                      let str = "";
                      let str2 = "";
                      if (null != message) {
                        if (typeof message === "string") {
                          str2 = message;
                        } else if (null == message) {
                          const _Array = Array;
                          if (Array.isArray(message)) {
                            const reduced = message.reduce((acc, message) => {
                              if (typeof closure_0 === "function") {
                                closure_0 = message;
                                let str = "";
                                let str2 = "";
                                if (null != message) {
                                  if (typeof message === "string") {
                                    str2 = message;
                                  } else if (null == message) {
                                    const _Array = Array;
                                    if (Array.isArray(message)) {
                                      const reduced = message.reduce((acc, message) => {
                                        if (typeof closure_0 === "function") {
                                          closure_0 = message;
                                          let str = "";
                                          let str2 = "";
                                          if (null != message) {
                                            if (typeof message === "string") {
                                              str2 = message;
                                            } else if (null == message) {
                                              const _Array = Array;
                                              if (Array.isArray(message)) {
                                                const reduced = message.reduce(() => { ... }, []);
                                                str = reduced.join(", ");
                                              } else if (typeof message === "object") {
                                                const _Object = Object;
                                                const keys = Object.keys(message);
                                                const reduced1 = keys.reduce(() => { ... }, []);
                                                str = reduced1.join(", ");
                                              }
                                            }
                                          }
                                          return tmp(str2);
                                        } else {
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                      }, []);
                                      str = reduced.join(", ");
                                    } else if (typeof message === "object") {
                                      const _Object = Object;
                                      const keys = Object.keys(message);
                                      const reduced1 = keys.reduce((arr, item) => {
                                        arr = closure_1_0[item];
                                        if (typeof closure_2_0 === "function") {
                                          let str2 = "";
                                          if (null != arr) {
                                            if (typeof arr === "string") {
                                              str2 = arr;
                                            } else if (null == arr) {
                                              let _Array = Array;
                                              if (Array.isArray(arr)) {
                                                let reduced = arr.reduce(() => { ... }, []);
                                                let str3 = reduced.join(", ");
                                              } else {
                                                str3 = "";
                                                if (typeof arr === "object") {
                                                  let _Object = Object;
                                                  let keys = Object.keys(arr);
                                                  let reduced1 = keys.reduce(() => { ... }, []);
                                                  str3 = reduced1.join(", ");
                                                }
                                              }
                                            }
                                          }
                                          let combined = arr;
                                          if (str2) {
                                            let _HermesInternal = HermesInternal;
                                            combined = arr.concat("" + str2 + " (" + item + ")");
                                          }
                                          return combined;
                                        } else {
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                      }, []);
                                      str = reduced1.join(", ");
                                    }
                                  }
                                }
                                return tmp(str2);
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            }, []);
                            str = reduced.join(", ");
                          } else if (typeof message === "object") {
                            const _Object = Object;
                            const keys = Object.keys(message);
                            const reduced1 = keys.reduce((arr, item) => {
                              arr = closure_1_0[item];
                              if (typeof closure_2_0 === "function") {
                                let str2 = "";
                                if (null != arr) {
                                  if (typeof arr === "string") {
                                    str2 = arr;
                                  } else if (null == arr) {
                                    let _Array = Array;
                                    if (Array.isArray(arr)) {
                                      let reduced = arr.reduce((acc, message) => {
                                        if (typeof closure_0 === "function") {
                                          closure_0 = message;
                                          let str = "";
                                          let str2 = "";
                                          if (null != message) {
                                            if (typeof message === "string") {
                                              str2 = message;
                                            } else if (null == message) {
                                              const _Array = Array;
                                              if (Array.isArray(message)) {
                                                const reduced = message.reduce(() => { ... }, []);
                                                str = reduced.join(", ");
                                              } else if (typeof message === "object") {
                                                const _Object = Object;
                                                const keys = Object.keys(message);
                                                const reduced1 = keys.reduce(() => { ... }, []);
                                                str = reduced1.join(", ");
                                              }
                                            }
                                          }
                                          return tmp(str2);
                                        } else {
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                      }, []);
                                      let str3 = reduced.join(", ");
                                    } else {
                                      str3 = "";
                                      if (typeof arr === "object") {
                                        let _Object = Object;
                                        let keys = Object.keys(arr);
                                        let reduced1 = keys.reduce((arr, item) => {
                                          arr = closure_1_0[item];
                                          if (typeof closure_2_0 === "function") {
                                            let str2 = "";
                                            if (null != arr) {
                                              if (typeof arr === "string") {
                                                str2 = arr;
                                              } else if (null == arr) {
                                                let _Array = Array;
                                                if (Array.isArray(arr)) {
                                                  let reduced = arr.reduce(() => { ... }, []);
                                                  let str3 = reduced.join(", ");
                                                } else {
                                                  str3 = "";
                                                  if (typeof arr === "object") {
                                                    let _Object = Object;
                                                    let keys = Object.keys(arr);
                                                    let reduced1 = keys.reduce(() => { ... }, []);
                                                    str3 = reduced1.join(", ");
                                                  }
                                                }
                                              }
                                            }
                                            let combined = arr;
                                            if (str2) {
                                              let _HermesInternal = HermesInternal;
                                              combined = arr.concat("" + str2 + " (" + item + ")");
                                            }
                                            return combined;
                                          } else {
                                            throw new TypeError("Trying to call a non-function");
                                          }
                                        }, []);
                                        str3 = reduced1.join(", ");
                                      }
                                    }
                                  }
                                }
                                let combined = arr;
                                if (str2) {
                                  let _HermesInternal = HermesInternal;
                                  combined = arr.concat("" + str2 + " (" + item + ")");
                                }
                                return combined;
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            }, []);
                            str = reduced1.join(", ");
                          }
                        }
                      }
                      return tmp(str2);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }, []);
                  str = reduced.join(", ");
                } else if (typeof message === "object") {
                  const _Object = Object;
                  const keys = Object.keys(message);
                  const reduced1 = keys.reduce((arr, item) => {
                    arr = closure_1_0[item];
                    if (typeof closure_2_0 === "function") {
                      let str2 = "";
                      if (null != arr) {
                        if (typeof arr === "string") {
                          str2 = arr;
                        } else if (null == arr) {
                          let _Array = Array;
                          if (Array.isArray(arr)) {
                            let reduced = arr.reduce((acc, message) => {
                              if (typeof closure_0 === "function") {
                                closure_0 = message;
                                let str = "";
                                let str2 = "";
                                if (null != message) {
                                  if (typeof message === "string") {
                                    str2 = message;
                                  } else if (null == message) {
                                    const _Array = Array;
                                    if (Array.isArray(message)) {
                                      const reduced = message.reduce((acc, message) => {
                                        if (typeof closure_0 === "function") {
                                          closure_0 = message;
                                          let str = "";
                                          let str2 = "";
                                          if (null != message) {
                                            if (typeof message === "string") {
                                              str2 = message;
                                            } else if (null == message) {
                                              const _Array = Array;
                                              if (Array.isArray(message)) {
                                                const reduced = message.reduce(() => { ... }, []);
                                                str = reduced.join(", ");
                                              } else if (typeof message === "object") {
                                                const _Object = Object;
                                                const keys = Object.keys(message);
                                                const reduced1 = keys.reduce(() => { ... }, []);
                                                str = reduced1.join(", ");
                                              }
                                            }
                                          }
                                          return tmp(str2);
                                        } else {
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                      }, []);
                                      str = reduced.join(", ");
                                    } else if (typeof message === "object") {
                                      const _Object = Object;
                                      const keys = Object.keys(message);
                                      const reduced1 = keys.reduce((arr, item) => {
                                        arr = closure_1_0[item];
                                        if (typeof closure_2_0 === "function") {
                                          let str2 = "";
                                          if (null != arr) {
                                            if (typeof arr === "string") {
                                              str2 = arr;
                                            } else if (null == arr) {
                                              let _Array = Array;
                                              if (Array.isArray(arr)) {
                                                let reduced = arr.reduce(() => { ... }, []);
                                                let str3 = reduced.join(", ");
                                              } else {
                                                str3 = "";
                                                if (typeof arr === "object") {
                                                  let _Object = Object;
                                                  let keys = Object.keys(arr);
                                                  let reduced1 = keys.reduce(() => { ... }, []);
                                                  str3 = reduced1.join(", ");
                                                }
                                              }
                                            }
                                          }
                                          let combined = arr;
                                          if (str2) {
                                            let _HermesInternal = HermesInternal;
                                            combined = arr.concat("" + str2 + " (" + item + ")");
                                          }
                                          return combined;
                                        } else {
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                      }, []);
                                      str = reduced1.join(", ");
                                    }
                                  }
                                }
                                return tmp(str2);
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            }, []);
                            let str3 = reduced.join(", ");
                          } else {
                            str3 = "";
                            if (typeof arr === "object") {
                              let _Object = Object;
                              let keys = Object.keys(arr);
                              let reduced1 = keys.reduce((arr, item) => {
                                arr = closure_1_0[item];
                                if (typeof closure_2_0 === "function") {
                                  let str2 = "";
                                  if (null != arr) {
                                    if (typeof arr === "string") {
                                      str2 = arr;
                                    } else if (null == arr) {
                                      let _Array = Array;
                                      if (Array.isArray(arr)) {
                                        let reduced = arr.reduce((acc, message) => {
                                          if (typeof closure_0 === "function") {
                                            closure_0 = message;
                                            let str = "";
                                            let str2 = "";
                                            if (null != message) {
                                              if (typeof message === "string") {
                                                str2 = message;
                                              } else if (null == message) {
                                                const _Array = Array;
                                                if (Array.isArray(message)) {
                                                  const reduced = message.reduce(() => { ... }, []);
                                                  str = reduced.join(", ");
                                                } else if (typeof message === "object") {
                                                  const _Object = Object;
                                                  const keys = Object.keys(message);
                                                  const reduced1 = keys.reduce(() => { ... }, []);
                                                  str = reduced1.join(", ");
                                                }
                                              }
                                            }
                                            return tmp(str2);
                                          } else {
                                            throw new TypeError("Trying to call a non-function");
                                          }
                                        }, []);
                                        let str3 = reduced.join(", ");
                                      } else {
                                        str3 = "";
                                        if (typeof arr === "object") {
                                          let _Object = Object;
                                          let keys = Object.keys(arr);
                                          let reduced1 = keys.reduce((arr, item) => {
                                            arr = closure_1_0[item];
                                            if (typeof closure_2_0 === "function") {
                                              let str2 = "";
                                              if (null != arr) {
                                                if (typeof arr === "string") {
                                                  str2 = arr;
                                                } else if (null == arr) {
                                                  let _Array = Array;
                                                  if (Array.isArray(arr)) {
                                                    let reduced = arr.reduce(() => { ... }, []);
                                                    let str3 = reduced.join(", ");
                                                  } else {
                                                    str3 = "";
                                                    if (typeof arr === "object") {
                                                      let _Object = Object;
                                                      let keys = Object.keys(arr);
                                                      let reduced1 = keys.reduce(() => { ... }, []);
                                                      str3 = reduced1.join(", ");
                                                    }
                                                  }
                                                }
                                              }
                                              let combined = arr;
                                              if (str2) {
                                                let _HermesInternal = HermesInternal;
                                                combined = arr.concat("" + str2 + " (" + item + ")");
                                              }
                                              return combined;
                                            } else {
                                              throw new TypeError("Trying to call a non-function");
                                            }
                                          }, []);
                                          str3 = reduced1.join(", ");
                                        }
                                      }
                                    }
                                  }
                                  let combined = arr;
                                  if (str2) {
                                    let _HermesInternal = HermesInternal;
                                    combined = arr.concat("" + str2 + " (" + item + ")");
                                  }
                                  return combined;
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              }, []);
                              str3 = reduced1.join(", ");
                            }
                          }
                        }
                      }
                      let combined = arr;
                      if (str2) {
                        let _HermesInternal = HermesInternal;
                        combined = arr.concat("" + str2 + " (" + item + ")");
                      }
                      return combined;
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }, []);
                  str = reduced1.join(", ");
                }
              }
            }
            return tmp(str2);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }, []);
        str = reduced.join(", ");
      } else if (typeof message === "object") {
        const _Object = Object;
        const keys = Object.keys(message);
        const reduced1 = keys.reduce((arr, item) => {
          arr = closure_1_0[item];
          if (typeof closure_2_0 === "function") {
            let str2 = "";
            if (null != arr) {
              if (typeof arr === "string") {
                str2 = arr;
              } else if (null == arr) {
                let _Array = Array;
                if (Array.isArray(arr)) {
                  let reduced = arr.reduce((acc, message) => {
                    if (typeof closure_0 === "function") {
                      closure_0 = message;
                      let str = "";
                      let str2 = "";
                      if (null != message) {
                        if (typeof message === "string") {
                          str2 = message;
                        } else if (null == message) {
                          const _Array = Array;
                          if (Array.isArray(message)) {
                            const reduced = message.reduce((acc, message) => {
                              if (typeof closure_0 === "function") {
                                closure_0 = message;
                                let str = "";
                                let str2 = "";
                                if (null != message) {
                                  if (typeof message === "string") {
                                    str2 = message;
                                  } else if (null == message) {
                                    const _Array = Array;
                                    if (Array.isArray(message)) {
                                      const reduced = message.reduce((acc, message) => {
                                        if (typeof closure_0 === "function") {
                                          closure_0 = message;
                                          let str = "";
                                          let str2 = "";
                                          if (null != message) {
                                            if (typeof message === "string") {
                                              str2 = message;
                                            } else if (null == message) {
                                              const _Array = Array;
                                              if (Array.isArray(message)) {
                                                const reduced = message.reduce(() => { ... }, []);
                                                str = reduced.join(", ");
                                              } else if (typeof message === "object") {
                                                const _Object = Object;
                                                const keys = Object.keys(message);
                                                const reduced1 = keys.reduce(() => { ... }, []);
                                                str = reduced1.join(", ");
                                              }
                                            }
                                          }
                                          return tmp(str2);
                                        } else {
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                      }, []);
                                      str = reduced.join(", ");
                                    } else if (typeof message === "object") {
                                      const _Object = Object;
                                      const keys = Object.keys(message);
                                      const reduced1 = keys.reduce((arr, item) => {
                                        arr = closure_1_0[item];
                                        if (typeof closure_2_0 === "function") {
                                          let str2 = "";
                                          if (null != arr) {
                                            if (typeof arr === "string") {
                                              str2 = arr;
                                            } else if (null == arr) {
                                              let _Array = Array;
                                              if (Array.isArray(arr)) {
                                                let reduced = arr.reduce(() => { ... }, []);
                                                let str3 = reduced.join(", ");
                                              } else {
                                                str3 = "";
                                                if (typeof arr === "object") {
                                                  let _Object = Object;
                                                  let keys = Object.keys(arr);
                                                  let reduced1 = keys.reduce(() => { ... }, []);
                                                  str3 = reduced1.join(", ");
                                                }
                                              }
                                            }
                                          }
                                          let combined = arr;
                                          if (str2) {
                                            let _HermesInternal = HermesInternal;
                                            combined = arr.concat("" + str2 + " (" + item + ")");
                                          }
                                          return combined;
                                        } else {
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                      }, []);
                                      str = reduced1.join(", ");
                                    }
                                  }
                                }
                                return tmp(str2);
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            }, []);
                            str = reduced.join(", ");
                          } else if (typeof message === "object") {
                            const _Object = Object;
                            const keys = Object.keys(message);
                            const reduced1 = keys.reduce((arr, item) => {
                              arr = closure_1_0[item];
                              if (typeof closure_2_0 === "function") {
                                let str2 = "";
                                if (null != arr) {
                                  if (typeof arr === "string") {
                                    str2 = arr;
                                  } else if (null == arr) {
                                    let _Array = Array;
                                    if (Array.isArray(arr)) {
                                      let reduced = arr.reduce((acc, message) => {
                                        if (typeof closure_0 === "function") {
                                          closure_0 = message;
                                          let str = "";
                                          let str2 = "";
                                          if (null != message) {
                                            if (typeof message === "string") {
                                              str2 = message;
                                            } else if (null == message) {
                                              const _Array = Array;
                                              if (Array.isArray(message)) {
                                                const reduced = message.reduce(() => { ... }, []);
                                                str = reduced.join(", ");
                                              } else if (typeof message === "object") {
                                                const _Object = Object;
                                                const keys = Object.keys(message);
                                                const reduced1 = keys.reduce(() => { ... }, []);
                                                str = reduced1.join(", ");
                                              }
                                            }
                                          }
                                          return tmp(str2);
                                        } else {
                                          throw new TypeError("Trying to call a non-function");
                                        }
                                      }, []);
                                      let str3 = reduced.join(", ");
                                    } else {
                                      str3 = "";
                                      if (typeof arr === "object") {
                                        let _Object = Object;
                                        let keys = Object.keys(arr);
                                        let reduced1 = keys.reduce((arr, item) => {
                                          arr = closure_1_0[item];
                                          if (typeof closure_2_0 === "function") {
                                            let str2 = "";
                                            if (null != arr) {
                                              if (typeof arr === "string") {
                                                str2 = arr;
                                              } else if (null == arr) {
                                                let _Array = Array;
                                                if (Array.isArray(arr)) {
                                                  let reduced = arr.reduce(() => { ... }, []);
                                                  let str3 = reduced.join(", ");
                                                } else {
                                                  str3 = "";
                                                  if (typeof arr === "object") {
                                                    let _Object = Object;
                                                    let keys = Object.keys(arr);
                                                    let reduced1 = keys.reduce(() => { ... }, []);
                                                    str3 = reduced1.join(", ");
                                                  }
                                                }
                                              }
                                            }
                                            let combined = arr;
                                            if (str2) {
                                              let _HermesInternal = HermesInternal;
                                              combined = arr.concat("" + str2 + " (" + item + ")");
                                            }
                                            return combined;
                                          } else {
                                            throw new TypeError("Trying to call a non-function");
                                          }
                                        }, []);
                                        str3 = reduced1.join(", ");
                                      }
                                    }
                                  }
                                }
                                let combined = arr;
                                if (str2) {
                                  let _HermesInternal = HermesInternal;
                                  combined = arr.concat("" + str2 + " (" + item + ")");
                                }
                                return combined;
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            }, []);
                            str = reduced1.join(", ");
                          }
                        }
                      }
                      return tmp(str2);
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  }, []);
                  let str3 = reduced.join(", ");
                } else {
                  str3 = "";
                  if (typeof arr === "object") {
                    let _Object = Object;
                    let keys = Object.keys(arr);
                    let reduced1 = keys.reduce((arr, item) => {
                      arr = closure_1_0[item];
                      if (typeof closure_2_0 === "function") {
                        let str2 = "";
                        if (null != arr) {
                          if (typeof arr === "string") {
                            str2 = arr;
                          } else if (null == arr) {
                            let _Array = Array;
                            if (Array.isArray(arr)) {
                              let reduced = arr.reduce((acc, message) => {
                                if (typeof closure_0 === "function") {
                                  closure_0 = message;
                                  let str = "";
                                  let str2 = "";
                                  if (null != message) {
                                    if (typeof message === "string") {
                                      str2 = message;
                                    } else if (null == message) {
                                      const _Array = Array;
                                      if (Array.isArray(message)) {
                                        const reduced = message.reduce((acc, message) => {
                                          if (typeof closure_0 === "function") {
                                            closure_0 = message;
                                            let str = "";
                                            let str2 = "";
                                            if (null != message) {
                                              if (typeof message === "string") {
                                                str2 = message;
                                              } else if (null == message) {
                                                const _Array = Array;
                                                if (Array.isArray(message)) {
                                                  const reduced = message.reduce(() => { ... }, []);
                                                  str = reduced.join(", ");
                                                } else if (typeof message === "object") {
                                                  const _Object = Object;
                                                  const keys = Object.keys(message);
                                                  const reduced1 = keys.reduce(() => { ... }, []);
                                                  str = reduced1.join(", ");
                                                }
                                              }
                                            }
                                            return tmp(str2);
                                          } else {
                                            throw new TypeError("Trying to call a non-function");
                                          }
                                        }, []);
                                        str = reduced.join(", ");
                                      } else if (typeof message === "object") {
                                        const _Object = Object;
                                        const keys = Object.keys(message);
                                        const reduced1 = keys.reduce((arr, item) => {
                                          arr = closure_1_0[item];
                                          if (typeof closure_2_0 === "function") {
                                            let str2 = "";
                                            if (null != arr) {
                                              if (typeof arr === "string") {
                                                str2 = arr;
                                              } else if (null == arr) {
                                                let _Array = Array;
                                                if (Array.isArray(arr)) {
                                                  let reduced = arr.reduce(() => { ... }, []);
                                                  let str3 = reduced.join(", ");
                                                } else {
                                                  str3 = "";
                                                  if (typeof arr === "object") {
                                                    let _Object = Object;
                                                    let keys = Object.keys(arr);
                                                    let reduced1 = keys.reduce(() => { ... }, []);
                                                    str3 = reduced1.join(", ");
                                                  }
                                                }
                                              }
                                            }
                                            let combined = arr;
                                            if (str2) {
                                              let _HermesInternal = HermesInternal;
                                              combined = arr.concat("" + str2 + " (" + item + ")");
                                            }
                                            return combined;
                                          } else {
                                            throw new TypeError("Trying to call a non-function");
                                          }
                                        }, []);
                                        str = reduced1.join(", ");
                                      }
                                    }
                                  }
                                  return tmp(str2);
                                } else {
                                  throw new TypeError("Trying to call a non-function");
                                }
                              }, []);
                              let str3 = reduced.join(", ");
                            } else {
                              str3 = "";
                              if (typeof arr === "object") {
                                let _Object = Object;
                                let keys = Object.keys(arr);
                                let reduced1 = keys.reduce((arr, item) => {
                                  arr = closure_1_0[item];
                                  if (typeof closure_2_0 === "function") {
                                    let str2 = "";
                                    if (null != arr) {
                                      if (typeof arr === "string") {
                                        str2 = arr;
                                      } else if (null == arr) {
                                        let _Array = Array;
                                        if (Array.isArray(arr)) {
                                          let reduced = arr.reduce((acc, message) => {
                                            if (typeof closure_0 === "function") {
                                              closure_0 = message;
                                              let str = "";
                                              let str2 = "";
                                              if (null != message) {
                                                if (typeof message === "string") {
                                                  str2 = message;
                                                } else if (null == message) {
                                                  const _Array = Array;
                                                  if (Array.isArray(message)) {
                                                    const reduced = message.reduce(() => { ... }, []);
                                                    str = reduced.join(", ");
                                                  } else if (typeof message === "object") {
                                                    const _Object = Object;
                                                    const keys = Object.keys(message);
                                                    const reduced1 = keys.reduce(() => { ... }, []);
                                                    str = reduced1.join(", ");
                                                  }
                                                }
                                              }
                                              return tmp(str2);
                                            } else {
                                              throw new TypeError("Trying to call a non-function");
                                            }
                                          }, []);
                                          let str3 = reduced.join(", ");
                                        } else {
                                          str3 = "";
                                          if (typeof arr === "object") {
                                            let _Object = Object;
                                            let keys = Object.keys(arr);
                                            let reduced1 = keys.reduce((arr, item) => {
                                              arr = closure_1_0[item];
                                              if (typeof closure_2_0 === "function") {
                                                let str2 = "";
                                                if (null != arr) {
                                                  if (typeof arr === "string") {
                                                    str2 = arr;
                                                  } else if (null == arr) {
                                                    let _Array = Array;
                                                    if (Array.isArray(arr)) {
                                                      let reduced = arr.reduce(() => { ... }, []);
                                                      let str3 = reduced.join(", ");
                                                    } else {
                                                      str3 = "";
                                                      if (typeof arr === "object") {
                                                        let _Object = Object;
                                                        let keys = Object.keys(arr);
                                                        let reduced1 = keys.reduce(() => { ... }, []);
                                                        str3 = reduced1.join(", ");
                                                      }
                                                    }
                                                  }
                                                }
                                                let combined = arr;
                                                if (str2) {
                                                  let _HermesInternal = HermesInternal;
                                                  combined = arr.concat("" + str2 + " (" + item + ")");
                                                }
                                                return combined;
                                              } else {
                                                throw new TypeError("Trying to call a non-function");
                                              }
                                            }, []);
                                            str3 = reduced1.join(", ");
                                          }
                                        }
                                      }
                                    }
                                    let combined = arr;
                                    if (str2) {
                                      let _HermesInternal = HermesInternal;
                                      combined = arr.concat("" + str2 + " (" + item + ")");
                                    }
                                    return combined;
                                  } else {
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                }, []);
                                str3 = reduced1.join(", ");
                              }
                            }
                          }
                        }
                        let combined = arr;
                        if (str2) {
                          let _HermesInternal = HermesInternal;
                          combined = arr.concat("" + str2 + " (" + item + ")");
                        }
                        return combined;
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    }, []);
                    str3 = reduced1.join(", ");
                  }
                }
              }
            }
            let combined = arr;
            if (str2) {
              let _HermesInternal = HermesInternal;
              combined = arr.concat("" + str2 + " (" + item + ")");
            }
            return combined;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }, []);
        str = reduced1.join(", ");
      }
    }
  }
  return str2;
}
const result = size.fileFinishedImporting("../discord_common/js/packages/http-utils/stringifyErrors.tsx");

export { stringifyErrors };