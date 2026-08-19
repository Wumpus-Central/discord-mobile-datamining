// discord_common/js/packages/http-utils/stringifyErrors.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";

function stringifyErrors(message) {
  closure_0 = message;
  let str2 = "";
  if (null != message) {
    if (typeof message === "string") {
      str2 = message;
    } else if (null == message) {
      const _Array = Array;
      if (Array.isArray(message)) {
        const reduced = message.reduce((acc, item, index) => {
          if (typeof closure_0 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          closure_0 = item;
          let str2 = "";
          if (null != item) {
            if (typeof item === "string") {
              str2 = item;
            } else if (null == item) {
              const _Array = Array;
              if (Array.isArray(item)) {
                const reduced = item.reduce((acc, item, index) => {
                  if (typeof closure_0 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  closure_0 = item;
                  let str2 = "";
                  if (null != item) {
                    if (typeof item === "string") {
                      str2 = item;
                    } else if (null == item) {
                      const _Array = Array;
                      if (Array.isArray(item)) {
                        const reduced = item.reduce((acc, item, index) => {
                          if (typeof closure_0 !== "function") {
                            HermesBuiltin.throwTypeError();
                          }
                          closure_0 = item;
                          let str2 = "";
                          if (null != item) {
                            if (typeof item === "string") {
                              str2 = item;
                            } else if (null == item) {
                              const _Array = Array;
                              if (Array.isArray(item)) {
                                const reduced = item.reduce((acc, item, index) => {
                                  if (typeof closure_0 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  closure_0 = item;
                                  let str2 = "";
                                  if (null != item) {
                                    if (typeof item === "string") {
                                      str2 = item;
                                    } else if (null == item) {
                                      const _Array = Array;
                                      if (Array.isArray(item)) {
                                        const reduced = item.reduce(() => { ... }, []);
                                        let str = reduced.join(", ");
                                      } else if (typeof item === "object") {
                                        const _Object = Object;
                                        const keys = Object.keys(item);
                                        const reduced1 = keys.reduce(() => { ... }, []);
                                        str = reduced1.join(", ");
                                      }
                                    }
                                  }
                                  return acc.concat(str2);
                                }, []);
                                let str = reduced.join(", ");
                              } else if (typeof item === "object") {
                                const _Object = Object;
                                const keys = Object.keys(item);
                                const reduced1 = keys.reduce((acc, item, index) => {
                                  arr = arr[item];
                                  if (typeof closure_1_0 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  let str = "";
                                  if (null != arr) {
                                    if (typeof arr === "string") {
                                      str = arr;
                                    } else if (null == arr) {
                                      let _Array = Array;
                                      if (Array.isArray(arr)) {
                                        let reduced = arr.reduce(() => { ... }, []);
                                        let str2 = reduced.join(", ");
                                      } else if (typeof arr === "object") {
                                        let _Object = Object;
                                        let keys = Object.keys(arr);
                                        let reduced1 = keys.reduce(() => { ... }, []);
                                        str2 = reduced1.join(", ");
                                      }
                                    }
                                  }
                                  let combined = acc;
                                  if (str) {
                                    let _HermesInternal = HermesInternal;
                                    combined = acc.concat("" + str + " (" + item + ")");
                                  }
                                  return combined;
                                }, []);
                                str = reduced1.join(", ");
                              }
                            }
                          }
                          return acc.concat(str2);
                        }, []);
                        let str = reduced.join(", ");
                      } else if (typeof item === "object") {
                        const _Object = Object;
                        const keys = Object.keys(item);
                        const reduced1 = keys.reduce((acc, item, index) => {
                          arr = arr[item];
                          if (typeof closure_1_0 !== "function") {
                            HermesBuiltin.throwTypeError();
                          }
                          let str = "";
                          if (null != arr) {
                            if (typeof arr === "string") {
                              str = arr;
                            } else if (null == arr) {
                              let _Array = Array;
                              if (Array.isArray(arr)) {
                                let reduced = arr.reduce((acc, item, index) => {
                                  if (typeof closure_0 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  closure_0 = item;
                                  let str2 = "";
                                  if (null != item) {
                                    if (typeof item === "string") {
                                      str2 = item;
                                    } else if (null == item) {
                                      const _Array = Array;
                                      if (Array.isArray(item)) {
                                        const reduced = item.reduce(() => { ... }, []);
                                        let str = reduced.join(", ");
                                      } else if (typeof item === "object") {
                                        const _Object = Object;
                                        const keys = Object.keys(item);
                                        const reduced1 = keys.reduce(() => { ... }, []);
                                        str = reduced1.join(", ");
                                      }
                                    }
                                  }
                                  return acc.concat(str2);
                                }, []);
                                let str2 = reduced.join(", ");
                              } else if (typeof arr === "object") {
                                let _Object = Object;
                                let keys = Object.keys(arr);
                                let reduced1 = keys.reduce((acc, item, index) => {
                                  arr = arr[item];
                                  if (typeof closure_1_0 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  let str = "";
                                  if (null != arr) {
                                    if (typeof arr === "string") {
                                      str = arr;
                                    } else if (null == arr) {
                                      let _Array = Array;
                                      if (Array.isArray(arr)) {
                                        let reduced = arr.reduce(() => { ... }, []);
                                        let str2 = reduced.join(", ");
                                      } else if (typeof arr === "object") {
                                        let _Object = Object;
                                        let keys = Object.keys(arr);
                                        let reduced1 = keys.reduce(() => { ... }, []);
                                        str2 = reduced1.join(", ");
                                      }
                                    }
                                  }
                                  let combined = acc;
                                  if (str) {
                                    let _HermesInternal = HermesInternal;
                                    combined = acc.concat("" + str + " (" + item + ")");
                                  }
                                  return combined;
                                }, []);
                                str2 = reduced1.join(", ");
                              }
                            }
                          }
                          let combined = acc;
                          if (str) {
                            let _HermesInternal = HermesInternal;
                            combined = acc.concat("" + str + " (" + item + ")");
                          }
                          return combined;
                        }, []);
                        str = reduced1.join(", ");
                      }
                    }
                  }
                  return acc.concat(str2);
                }, []);
                let str = reduced.join(", ");
              } else if (typeof item === "object") {
                const _Object = Object;
                const keys = Object.keys(item);
                const reduced1 = keys.reduce((acc, item, index) => {
                  arr = arr[item];
                  if (typeof closure_1_0 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  let str = "";
                  if (null != arr) {
                    if (typeof arr === "string") {
                      str = arr;
                    } else if (null == arr) {
                      let _Array = Array;
                      if (Array.isArray(arr)) {
                        let reduced = arr.reduce((acc, item, index) => {
                          if (typeof closure_0 !== "function") {
                            HermesBuiltin.throwTypeError();
                          }
                          closure_0 = item;
                          let str2 = "";
                          if (null != item) {
                            if (typeof item === "string") {
                              str2 = item;
                            } else if (null == item) {
                              const _Array = Array;
                              if (Array.isArray(item)) {
                                const reduced = item.reduce((acc, item, index) => {
                                  if (typeof closure_0 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  closure_0 = item;
                                  let str2 = "";
                                  if (null != item) {
                                    if (typeof item === "string") {
                                      str2 = item;
                                    } else if (null == item) {
                                      const _Array = Array;
                                      if (Array.isArray(item)) {
                                        const reduced = item.reduce(() => { ... }, []);
                                        let str = reduced.join(", ");
                                      } else if (typeof item === "object") {
                                        const _Object = Object;
                                        const keys = Object.keys(item);
                                        const reduced1 = keys.reduce(() => { ... }, []);
                                        str = reduced1.join(", ");
                                      }
                                    }
                                  }
                                  return acc.concat(str2);
                                }, []);
                                let str = reduced.join(", ");
                              } else if (typeof item === "object") {
                                const _Object = Object;
                                const keys = Object.keys(item);
                                const reduced1 = keys.reduce((acc, item, index) => {
                                  arr = arr[item];
                                  if (typeof closure_1_0 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  let str = "";
                                  if (null != arr) {
                                    if (typeof arr === "string") {
                                      str = arr;
                                    } else if (null == arr) {
                                      let _Array = Array;
                                      if (Array.isArray(arr)) {
                                        let reduced = arr.reduce(() => { ... }, []);
                                        let str2 = reduced.join(", ");
                                      } else if (typeof arr === "object") {
                                        let _Object = Object;
                                        let keys = Object.keys(arr);
                                        let reduced1 = keys.reduce(() => { ... }, []);
                                        str2 = reduced1.join(", ");
                                      }
                                    }
                                  }
                                  let combined = acc;
                                  if (str) {
                                    let _HermesInternal = HermesInternal;
                                    combined = acc.concat("" + str + " (" + item + ")");
                                  }
                                  return combined;
                                }, []);
                                str = reduced1.join(", ");
                              }
                            }
                          }
                          return acc.concat(str2);
                        }, []);
                        let str2 = reduced.join(", ");
                      } else if (typeof arr === "object") {
                        let _Object = Object;
                        let keys = Object.keys(arr);
                        let reduced1 = keys.reduce((acc, item, index) => {
                          arr = arr[item];
                          if (typeof closure_1_0 !== "function") {
                            HermesBuiltin.throwTypeError();
                          }
                          let str = "";
                          if (null != arr) {
                            if (typeof arr === "string") {
                              str = arr;
                            } else if (null == arr) {
                              let _Array = Array;
                              if (Array.isArray(arr)) {
                                let reduced = arr.reduce((acc, item, index) => {
                                  if (typeof closure_0 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  closure_0 = item;
                                  let str2 = "";
                                  if (null != item) {
                                    if (typeof item === "string") {
                                      str2 = item;
                                    } else if (null == item) {
                                      const _Array = Array;
                                      if (Array.isArray(item)) {
                                        const reduced = item.reduce(() => { ... }, []);
                                        let str = reduced.join(", ");
                                      } else if (typeof item === "object") {
                                        const _Object = Object;
                                        const keys = Object.keys(item);
                                        const reduced1 = keys.reduce(() => { ... }, []);
                                        str = reduced1.join(", ");
                                      }
                                    }
                                  }
                                  return acc.concat(str2);
                                }, []);
                                let str2 = reduced.join(", ");
                              } else if (typeof arr === "object") {
                                let _Object = Object;
                                let keys = Object.keys(arr);
                                let reduced1 = keys.reduce((acc, item, index) => {
                                  arr = arr[item];
                                  if (typeof closure_1_0 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  let str = "";
                                  if (null != arr) {
                                    if (typeof arr === "string") {
                                      str = arr;
                                    } else if (null == arr) {
                                      let _Array = Array;
                                      if (Array.isArray(arr)) {
                                        let reduced = arr.reduce(() => { ... }, []);
                                        let str2 = reduced.join(", ");
                                      } else if (typeof arr === "object") {
                                        let _Object = Object;
                                        let keys = Object.keys(arr);
                                        let reduced1 = keys.reduce(() => { ... }, []);
                                        str2 = reduced1.join(", ");
                                      }
                                    }
                                  }
                                  let combined = acc;
                                  if (str) {
                                    let _HermesInternal = HermesInternal;
                                    combined = acc.concat("" + str + " (" + item + ")");
                                  }
                                  return combined;
                                }, []);
                                str2 = reduced1.join(", ");
                              }
                            }
                          }
                          let combined = acc;
                          if (str) {
                            let _HermesInternal = HermesInternal;
                            combined = acc.concat("" + str + " (" + item + ")");
                          }
                          return combined;
                        }, []);
                        str2 = reduced1.join(", ");
                      }
                    }
                  }
                  let combined = acc;
                  if (str) {
                    let _HermesInternal = HermesInternal;
                    combined = acc.concat("" + str + " (" + item + ")");
                  }
                  return combined;
                }, []);
                str = reduced1.join(", ");
              }
            }
          }
          return acc.concat(str2);
        }, []);
        let str = reduced.join(", ");
      } else if (typeof message === "object") {
        const _Object = Object;
        const keys = Object.keys(message);
        const reduced1 = keys.reduce((acc, item, index) => {
          arr = arr[item];
          if (typeof closure_1_0 !== "function") {
            HermesBuiltin.throwTypeError();
          }
          let str = "";
          if (null != arr) {
            if (typeof arr === "string") {
              str = arr;
            } else if (null == arr) {
              let _Array = Array;
              if (Array.isArray(arr)) {
                let reduced = arr.reduce((acc, item, index) => {
                  if (typeof closure_0 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  closure_0 = item;
                  let str2 = "";
                  if (null != item) {
                    if (typeof item === "string") {
                      str2 = item;
                    } else if (null == item) {
                      const _Array = Array;
                      if (Array.isArray(item)) {
                        const reduced = item.reduce((acc, item, index) => {
                          if (typeof closure_0 !== "function") {
                            HermesBuiltin.throwTypeError();
                          }
                          closure_0 = item;
                          let str2 = "";
                          if (null != item) {
                            if (typeof item === "string") {
                              str2 = item;
                            } else if (null == item) {
                              const _Array = Array;
                              if (Array.isArray(item)) {
                                const reduced = item.reduce((acc, item, index) => {
                                  if (typeof closure_0 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  closure_0 = item;
                                  let str2 = "";
                                  if (null != item) {
                                    if (typeof item === "string") {
                                      str2 = item;
                                    } else if (null == item) {
                                      const _Array = Array;
                                      if (Array.isArray(item)) {
                                        const reduced = item.reduce(() => { ... }, []);
                                        let str = reduced.join(", ");
                                      } else if (typeof item === "object") {
                                        const _Object = Object;
                                        const keys = Object.keys(item);
                                        const reduced1 = keys.reduce(() => { ... }, []);
                                        str = reduced1.join(", ");
                                      }
                                    }
                                  }
                                  return acc.concat(str2);
                                }, []);
                                let str = reduced.join(", ");
                              } else if (typeof item === "object") {
                                const _Object = Object;
                                const keys = Object.keys(item);
                                const reduced1 = keys.reduce((acc, item, index) => {
                                  arr = arr[item];
                                  if (typeof closure_1_0 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  let str = "";
                                  if (null != arr) {
                                    if (typeof arr === "string") {
                                      str = arr;
                                    } else if (null == arr) {
                                      let _Array = Array;
                                      if (Array.isArray(arr)) {
                                        let reduced = arr.reduce(() => { ... }, []);
                                        let str2 = reduced.join(", ");
                                      } else if (typeof arr === "object") {
                                        let _Object = Object;
                                        let keys = Object.keys(arr);
                                        let reduced1 = keys.reduce(() => { ... }, []);
                                        str2 = reduced1.join(", ");
                                      }
                                    }
                                  }
                                  let combined = acc;
                                  if (str) {
                                    let _HermesInternal = HermesInternal;
                                    combined = acc.concat("" + str + " (" + item + ")");
                                  }
                                  return combined;
                                }, []);
                                str = reduced1.join(", ");
                              }
                            }
                          }
                          return acc.concat(str2);
                        }, []);
                        let str = reduced.join(", ");
                      } else if (typeof item === "object") {
                        const _Object = Object;
                        const keys = Object.keys(item);
                        const reduced1 = keys.reduce((acc, item, index) => {
                          arr = arr[item];
                          if (typeof closure_1_0 !== "function") {
                            HermesBuiltin.throwTypeError();
                          }
                          let str = "";
                          if (null != arr) {
                            if (typeof arr === "string") {
                              str = arr;
                            } else if (null == arr) {
                              let _Array = Array;
                              if (Array.isArray(arr)) {
                                let reduced = arr.reduce((acc, item, index) => {
                                  if (typeof closure_0 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  closure_0 = item;
                                  let str2 = "";
                                  if (null != item) {
                                    if (typeof item === "string") {
                                      str2 = item;
                                    } else if (null == item) {
                                      const _Array = Array;
                                      if (Array.isArray(item)) {
                                        const reduced = item.reduce(() => { ... }, []);
                                        let str = reduced.join(", ");
                                      } else if (typeof item === "object") {
                                        const _Object = Object;
                                        const keys = Object.keys(item);
                                        const reduced1 = keys.reduce(() => { ... }, []);
                                        str = reduced1.join(", ");
                                      }
                                    }
                                  }
                                  return acc.concat(str2);
                                }, []);
                                let str2 = reduced.join(", ");
                              } else if (typeof arr === "object") {
                                let _Object = Object;
                                let keys = Object.keys(arr);
                                let reduced1 = keys.reduce((acc, item, index) => {
                                  arr = arr[item];
                                  if (typeof closure_1_0 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  let str = "";
                                  if (null != arr) {
                                    if (typeof arr === "string") {
                                      str = arr;
                                    } else if (null == arr) {
                                      let _Array = Array;
                                      if (Array.isArray(arr)) {
                                        let reduced = arr.reduce(() => { ... }, []);
                                        let str2 = reduced.join(", ");
                                      } else if (typeof arr === "object") {
                                        let _Object = Object;
                                        let keys = Object.keys(arr);
                                        let reduced1 = keys.reduce(() => { ... }, []);
                                        str2 = reduced1.join(", ");
                                      }
                                    }
                                  }
                                  let combined = acc;
                                  if (str) {
                                    let _HermesInternal = HermesInternal;
                                    combined = acc.concat("" + str + " (" + item + ")");
                                  }
                                  return combined;
                                }, []);
                                str2 = reduced1.join(", ");
                              }
                            }
                          }
                          let combined = acc;
                          if (str) {
                            let _HermesInternal = HermesInternal;
                            combined = acc.concat("" + str + " (" + item + ")");
                          }
                          return combined;
                        }, []);
                        str = reduced1.join(", ");
                      }
                    }
                  }
                  return acc.concat(str2);
                }, []);
                let str2 = reduced.join(", ");
              } else if (typeof arr === "object") {
                let _Object = Object;
                let keys = Object.keys(arr);
                let reduced1 = keys.reduce((acc, item, index) => {
                  arr = arr[item];
                  if (typeof closure_1_0 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  let str = "";
                  if (null != arr) {
                    if (typeof arr === "string") {
                      str = arr;
                    } else if (null == arr) {
                      let _Array = Array;
                      if (Array.isArray(arr)) {
                        let reduced = arr.reduce((acc, item, index) => {
                          if (typeof closure_0 !== "function") {
                            HermesBuiltin.throwTypeError();
                          }
                          closure_0 = item;
                          let str2 = "";
                          if (null != item) {
                            if (typeof item === "string") {
                              str2 = item;
                            } else if (null == item) {
                              const _Array = Array;
                              if (Array.isArray(item)) {
                                const reduced = item.reduce((acc, item, index) => {
                                  if (typeof closure_0 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  closure_0 = item;
                                  let str2 = "";
                                  if (null != item) {
                                    if (typeof item === "string") {
                                      str2 = item;
                                    } else if (null == item) {
                                      const _Array = Array;
                                      if (Array.isArray(item)) {
                                        const reduced = item.reduce(() => { ... }, []);
                                        let str = reduced.join(", ");
                                      } else if (typeof item === "object") {
                                        const _Object = Object;
                                        const keys = Object.keys(item);
                                        const reduced1 = keys.reduce(() => { ... }, []);
                                        str = reduced1.join(", ");
                                      }
                                    }
                                  }
                                  return acc.concat(str2);
                                }, []);
                                let str = reduced.join(", ");
                              } else if (typeof item === "object") {
                                const _Object = Object;
                                const keys = Object.keys(item);
                                const reduced1 = keys.reduce((acc, item, index) => {
                                  arr = arr[item];
                                  if (typeof closure_1_0 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  let str = "";
                                  if (null != arr) {
                                    if (typeof arr === "string") {
                                      str = arr;
                                    } else if (null == arr) {
                                      let _Array = Array;
                                      if (Array.isArray(arr)) {
                                        let reduced = arr.reduce(() => { ... }, []);
                                        let str2 = reduced.join(", ");
                                      } else if (typeof arr === "object") {
                                        let _Object = Object;
                                        let keys = Object.keys(arr);
                                        let reduced1 = keys.reduce(() => { ... }, []);
                                        str2 = reduced1.join(", ");
                                      }
                                    }
                                  }
                                  let combined = acc;
                                  if (str) {
                                    let _HermesInternal = HermesInternal;
                                    combined = acc.concat("" + str + " (" + item + ")");
                                  }
                                  return combined;
                                }, []);
                                str = reduced1.join(", ");
                              }
                            }
                          }
                          return acc.concat(str2);
                        }, []);
                        let str2 = reduced.join(", ");
                      } else if (typeof arr === "object") {
                        let _Object = Object;
                        let keys = Object.keys(arr);
                        let reduced1 = keys.reduce((acc, item, index) => {
                          arr = arr[item];
                          if (typeof closure_1_0 !== "function") {
                            HermesBuiltin.throwTypeError();
                          }
                          let str = "";
                          if (null != arr) {
                            if (typeof arr === "string") {
                              str = arr;
                            } else if (null == arr) {
                              let _Array = Array;
                              if (Array.isArray(arr)) {
                                let reduced = arr.reduce((acc, item, index) => {
                                  if (typeof closure_0 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  closure_0 = item;
                                  let str2 = "";
                                  if (null != item) {
                                    if (typeof item === "string") {
                                      str2 = item;
                                    } else if (null == item) {
                                      const _Array = Array;
                                      if (Array.isArray(item)) {
                                        const reduced = item.reduce(() => { ... }, []);
                                        let str = reduced.join(", ");
                                      } else if (typeof item === "object") {
                                        const _Object = Object;
                                        const keys = Object.keys(item);
                                        const reduced1 = keys.reduce(() => { ... }, []);
                                        str = reduced1.join(", ");
                                      }
                                    }
                                  }
                                  return acc.concat(str2);
                                }, []);
                                let str2 = reduced.join(", ");
                              } else if (typeof arr === "object") {
                                let _Object = Object;
                                let keys = Object.keys(arr);
                                let reduced1 = keys.reduce((acc, item, index) => {
                                  arr = arr[item];
                                  if (typeof closure_1_0 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  let str = "";
                                  if (null != arr) {
                                    if (typeof arr === "string") {
                                      str = arr;
                                    } else if (null == arr) {
                                      let _Array = Array;
                                      if (Array.isArray(arr)) {
                                        let reduced = arr.reduce(() => { ... }, []);
                                        let str2 = reduced.join(", ");
                                      } else if (typeof arr === "object") {
                                        let _Object = Object;
                                        let keys = Object.keys(arr);
                                        let reduced1 = keys.reduce(() => { ... }, []);
                                        str2 = reduced1.join(", ");
                                      }
                                    }
                                  }
                                  let combined = acc;
                                  if (str) {
                                    let _HermesInternal = HermesInternal;
                                    combined = acc.concat("" + str + " (" + item + ")");
                                  }
                                  return combined;
                                }, []);
                                str2 = reduced1.join(", ");
                              }
                            }
                          }
                          let combined = acc;
                          if (str) {
                            let _HermesInternal = HermesInternal;
                            combined = acc.concat("" + str + " (" + item + ")");
                          }
                          return combined;
                        }, []);
                        str2 = reduced1.join(", ");
                      }
                    }
                  }
                  let combined = acc;
                  if (str) {
                    let _HermesInternal = HermesInternal;
                    combined = acc.concat("" + str + " (" + item + ")");
                  }
                  return combined;
                }, []);
                str2 = reduced1.join(", ");
              }
            }
          }
          let combined = acc;
          if (str) {
            let _HermesInternal = HermesInternal;
            combined = acc.concat("" + str + " (" + item + ")");
          }
          return combined;
        }, []);
        str = reduced1.join(", ");
      }
    }
  }
  return str2;
}
const result = obj132.fileFinishedImporting("../discord_common/js/packages/http-utils/stringifyErrors.tsx");

export { stringifyErrors };