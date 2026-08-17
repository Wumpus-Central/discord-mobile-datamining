// discord_common/js/packages/http-utils/stringifyErrors.tsx
import set from "set" /* 2 */;

function stringifyErrors(str) {
  closure_0 = str;
  str = "";
  let str2 = "";
  if (null != str) {
    if (typeof str === "string") {
      str2 = str;
    } else {
      if (null == str) {
        const _Array = Array;
        if (Array.isArray(str)) {
          const reduced = str.reduce((arr, str) => {
            if (typeof closure_0 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            closure_0 = str;
            str = "";
            let str2 = "";
            if (null != str) {
              if (typeof str === "string") {
                str2 = str;
              } else {
                if (null == str) {
                  const _Array = Array;
                  if (Array.isArray(str)) {
                    const reduced = str.reduce((arr, str) => {
                      if (typeof closure_0 !== "function") {
                        HermesBuiltin.throwTypeError();
                      }
                      closure_0 = str;
                      str = "";
                      let str2 = "";
                      if (null != str) {
                        if (typeof str === "string") {
                          str2 = str;
                        } else {
                          if (null == str) {
                            const _Array = Array;
                            if (Array.isArray(str)) {
                              const reduced = str.reduce((arr, str) => {
                                if (typeof closure_0 !== "function") {
                                  HermesBuiltin.throwTypeError();
                                }
                                closure_0 = str;
                                str = "";
                                let str2 = "";
                                if (null != str) {
                                  if (typeof str === "string") {
                                    str2 = str;
                                  } else {
                                    if (null == str) {
                                      const _Array = Array;
                                      if (Array.isArray(str)) {
                                        const reduced = str.reduce((arr, str) => {
                                          if (typeof closure_0 !== "function") {
                                            HermesBuiltin.throwTypeError();
                                          }
                                          closure_0 = str;
                                          str = "";
                                          let str2 = "";
                                          if (null != str) {
                                            if (typeof str === "string") {
                                              str2 = str;
                                            } else {
                                              if (null == str) {
                                                const _Array = Array;
                                                if (Array.isArray(str)) {
                                                  const reduced = str.reduce(() => { ... }, []);
                                                  str = reduced.join(", ");
                                                } else if (typeof str === "object") {
                                                  const _Object = Object;
                                                  const keys = Object.keys(str);
                                                  const reduced1 = keys.reduce(() => { ... }, []);
                                                  str = reduced1.join(", ");
                                                }
                                              }
                                              str = str.message;
                                            }
                                          }
                                          return arr.concat(str2);
                                        }, []);
                                        str = reduced.join(", ");
                                      } else if (typeof str === "object") {
                                        const _Object = Object;
                                        const keys = Object.keys(str);
                                        const reduced1 = keys.reduce((arr) => {
                                          arr = arr[arg1];
                                          if (typeof closure_1_0 !== "function") {
                                            HermesBuiltin.throwTypeError();
                                          }
                                          let str = "";
                                          if (null != arr) {
                                            if (typeof arr === "string") {
                                              str = arr;
                                            } else {
                                              if (null == arr) {
                                                let _Array = Array;
                                                if (Array.isArray(arr)) {
                                                  let reduced = arr.reduce(() => { ... }, []);
                                                  let str2 = reduced.join(", ");
                                                } else {
                                                  str2 = "";
                                                  if (typeof arr === "object") {
                                                    let _Object = Object;
                                                    let keys = Object.keys(arr);
                                                    let reduced1 = keys.reduce(() => { ... }, []);
                                                    str2 = reduced1.join(", ");
                                                  }
                                                }
                                              }
                                              str2 = arr.message;
                                            }
                                          }
                                          let combined = arr;
                                          if (str) {
                                            let _HermesInternal = HermesInternal;
                                            combined = arr.concat("" + str + " (" + arg1 + ")");
                                          }
                                          return combined;
                                        }, []);
                                        str = reduced1.join(", ");
                                      }
                                    }
                                    str = str.message;
                                  }
                                }
                                return arr.concat(str2);
                              }, []);
                              str = reduced.join(", ");
                            } else if (typeof str === "object") {
                              const _Object = Object;
                              const keys = Object.keys(str);
                              const reduced1 = keys.reduce((arr) => {
                                arr = arr[arg1];
                                if (typeof closure_1_0 !== "function") {
                                  HermesBuiltin.throwTypeError();
                                }
                                let str = "";
                                if (null != arr) {
                                  if (typeof arr === "string") {
                                    str = arr;
                                  } else {
                                    if (null == arr) {
                                      let _Array = Array;
                                      if (Array.isArray(arr)) {
                                        let reduced = arr.reduce((arr, str) => {
                                          if (typeof closure_0 !== "function") {
                                            HermesBuiltin.throwTypeError();
                                          }
                                          closure_0 = str;
                                          str = "";
                                          let str2 = "";
                                          if (null != str) {
                                            if (typeof str === "string") {
                                              str2 = str;
                                            } else {
                                              if (null == str) {
                                                const _Array = Array;
                                                if (Array.isArray(str)) {
                                                  const reduced = str.reduce(() => { ... }, []);
                                                  str = reduced.join(", ");
                                                } else if (typeof str === "object") {
                                                  const _Object = Object;
                                                  const keys = Object.keys(str);
                                                  const reduced1 = keys.reduce(() => { ... }, []);
                                                  str = reduced1.join(", ");
                                                }
                                              }
                                              str = str.message;
                                            }
                                          }
                                          return arr.concat(str2);
                                        }, []);
                                        let str2 = reduced.join(", ");
                                      } else {
                                        str2 = "";
                                        if (typeof arr === "object") {
                                          let _Object = Object;
                                          let keys = Object.keys(arr);
                                          let reduced1 = keys.reduce((arr) => {
                                            arr = arr[arg1];
                                            if (typeof closure_1_0 !== "function") {
                                              HermesBuiltin.throwTypeError();
                                            }
                                            let str = "";
                                            if (null != arr) {
                                              if (typeof arr === "string") {
                                                str = arr;
                                              } else {
                                                if (null == arr) {
                                                  let _Array = Array;
                                                  if (Array.isArray(arr)) {
                                                    let reduced = arr.reduce(() => { ... }, []);
                                                    let str2 = reduced.join(", ");
                                                  } else {
                                                    str2 = "";
                                                    if (typeof arr === "object") {
                                                      let _Object = Object;
                                                      let keys = Object.keys(arr);
                                                      let reduced1 = keys.reduce(() => { ... }, []);
                                                      str2 = reduced1.join(", ");
                                                    }
                                                  }
                                                }
                                                str2 = arr.message;
                                              }
                                            }
                                            let combined = arr;
                                            if (str) {
                                              let _HermesInternal = HermesInternal;
                                              combined = arr.concat("" + str + " (" + arg1 + ")");
                                            }
                                            return combined;
                                          }, []);
                                          str2 = reduced1.join(", ");
                                        }
                                      }
                                    }
                                    str2 = arr.message;
                                  }
                                }
                                let combined = arr;
                                if (str) {
                                  let _HermesInternal = HermesInternal;
                                  combined = arr.concat("" + str + " (" + arg1 + ")");
                                }
                                return combined;
                              }, []);
                              str = reduced1.join(", ");
                            }
                          }
                          str = str.message;
                        }
                      }
                      return arr.concat(str2);
                    }, []);
                    str = reduced.join(", ");
                  } else if (typeof str === "object") {
                    const _Object = Object;
                    const keys = Object.keys(str);
                    const reduced1 = keys.reduce((arr) => {
                      arr = arr[arg1];
                      if (typeof closure_1_0 !== "function") {
                        HermesBuiltin.throwTypeError();
                      }
                      let str = "";
                      if (null != arr) {
                        if (typeof arr === "string") {
                          str = arr;
                        } else {
                          if (null == arr) {
                            let _Array = Array;
                            if (Array.isArray(arr)) {
                              let reduced = arr.reduce((arr, str) => {
                                if (typeof closure_0 !== "function") {
                                  HermesBuiltin.throwTypeError();
                                }
                                closure_0 = str;
                                str = "";
                                let str2 = "";
                                if (null != str) {
                                  if (typeof str === "string") {
                                    str2 = str;
                                  } else {
                                    if (null == str) {
                                      const _Array = Array;
                                      if (Array.isArray(str)) {
                                        const reduced = str.reduce((arr, str) => {
                                          if (typeof closure_0 !== "function") {
                                            HermesBuiltin.throwTypeError();
                                          }
                                          closure_0 = str;
                                          str = "";
                                          let str2 = "";
                                          if (null != str) {
                                            if (typeof str === "string") {
                                              str2 = str;
                                            } else {
                                              if (null == str) {
                                                const _Array = Array;
                                                if (Array.isArray(str)) {
                                                  const reduced = str.reduce(() => { ... }, []);
                                                  str = reduced.join(", ");
                                                } else if (typeof str === "object") {
                                                  const _Object = Object;
                                                  const keys = Object.keys(str);
                                                  const reduced1 = keys.reduce(() => { ... }, []);
                                                  str = reduced1.join(", ");
                                                }
                                              }
                                              str = str.message;
                                            }
                                          }
                                          return arr.concat(str2);
                                        }, []);
                                        str = reduced.join(", ");
                                      } else if (typeof str === "object") {
                                        const _Object = Object;
                                        const keys = Object.keys(str);
                                        const reduced1 = keys.reduce((arr) => {
                                          arr = arr[arg1];
                                          if (typeof closure_1_0 !== "function") {
                                            HermesBuiltin.throwTypeError();
                                          }
                                          let str = "";
                                          if (null != arr) {
                                            if (typeof arr === "string") {
                                              str = arr;
                                            } else {
                                              if (null == arr) {
                                                let _Array = Array;
                                                if (Array.isArray(arr)) {
                                                  let reduced = arr.reduce(() => { ... }, []);
                                                  let str2 = reduced.join(", ");
                                                } else {
                                                  str2 = "";
                                                  if (typeof arr === "object") {
                                                    let _Object = Object;
                                                    let keys = Object.keys(arr);
                                                    let reduced1 = keys.reduce(() => { ... }, []);
                                                    str2 = reduced1.join(", ");
                                                  }
                                                }
                                              }
                                              str2 = arr.message;
                                            }
                                          }
                                          let combined = arr;
                                          if (str) {
                                            let _HermesInternal = HermesInternal;
                                            combined = arr.concat("" + str + " (" + arg1 + ")");
                                          }
                                          return combined;
                                        }, []);
                                        str = reduced1.join(", ");
                                      }
                                    }
                                    str = str.message;
                                  }
                                }
                                return arr.concat(str2);
                              }, []);
                              let str2 = reduced.join(", ");
                            } else {
                              str2 = "";
                              if (typeof arr === "object") {
                                let _Object = Object;
                                let keys = Object.keys(arr);
                                let reduced1 = keys.reduce((arr) => {
                                  arr = arr[arg1];
                                  if (typeof closure_1_0 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  let str = "";
                                  if (null != arr) {
                                    if (typeof arr === "string") {
                                      str = arr;
                                    } else {
                                      if (null == arr) {
                                        let _Array = Array;
                                        if (Array.isArray(arr)) {
                                          let reduced = arr.reduce((arr, str) => {
                                            if (typeof closure_0 !== "function") {
                                              HermesBuiltin.throwTypeError();
                                            }
                                            closure_0 = str;
                                            str = "";
                                            let str2 = "";
                                            if (null != str) {
                                              if (typeof str === "string") {
                                                str2 = str;
                                              } else {
                                                if (null == str) {
                                                  const _Array = Array;
                                                  if (Array.isArray(str)) {
                                                    const reduced = str.reduce(() => { ... }, []);
                                                    str = reduced.join(", ");
                                                  } else if (typeof str === "object") {
                                                    const _Object = Object;
                                                    const keys = Object.keys(str);
                                                    const reduced1 = keys.reduce(() => { ... }, []);
                                                    str = reduced1.join(", ");
                                                  }
                                                }
                                                str = str.message;
                                              }
                                            }
                                            return arr.concat(str2);
                                          }, []);
                                          let str2 = reduced.join(", ");
                                        } else {
                                          str2 = "";
                                          if (typeof arr === "object") {
                                            let _Object = Object;
                                            let keys = Object.keys(arr);
                                            let reduced1 = keys.reduce((arr) => {
                                              arr = arr[arg1];
                                              if (typeof closure_1_0 !== "function") {
                                                HermesBuiltin.throwTypeError();
                                              }
                                              let str = "";
                                              if (null != arr) {
                                                if (typeof arr === "string") {
                                                  str = arr;
                                                } else {
                                                  if (null == arr) {
                                                    let _Array = Array;
                                                    if (Array.isArray(arr)) {
                                                      let reduced = arr.reduce(() => { ... }, []);
                                                      let str2 = reduced.join(", ");
                                                    } else {
                                                      str2 = "";
                                                      if (typeof arr === "object") {
                                                        let _Object = Object;
                                                        let keys = Object.keys(arr);
                                                        let reduced1 = keys.reduce(() => { ... }, []);
                                                        str2 = reduced1.join(", ");
                                                      }
                                                    }
                                                  }
                                                  str2 = arr.message;
                                                }
                                              }
                                              let combined = arr;
                                              if (str) {
                                                let _HermesInternal = HermesInternal;
                                                combined = arr.concat("" + str + " (" + arg1 + ")");
                                              }
                                              return combined;
                                            }, []);
                                            str2 = reduced1.join(", ");
                                          }
                                        }
                                      }
                                      str2 = arr.message;
                                    }
                                  }
                                  let combined = arr;
                                  if (str) {
                                    let _HermesInternal = HermesInternal;
                                    combined = arr.concat("" + str + " (" + arg1 + ")");
                                  }
                                  return combined;
                                }, []);
                                str2 = reduced1.join(", ");
                              }
                            }
                          }
                          str2 = arr.message;
                        }
                      }
                      let combined = arr;
                      if (str) {
                        let _HermesInternal = HermesInternal;
                        combined = arr.concat("" + str + " (" + arg1 + ")");
                      }
                      return combined;
                    }, []);
                    str = reduced1.join(", ");
                  }
                }
                str = str.message;
              }
            }
            return arr.concat(str2);
          }, []);
          str = reduced.join(", ");
        } else if (typeof str === "object") {
          const _Object = Object;
          const keys = Object.keys(str);
          const reduced1 = keys.reduce((arr) => {
            arr = arr[arg1];
            if (typeof closure_1_0 !== "function") {
              HermesBuiltin.throwTypeError();
            }
            let str = "";
            if (null != arr) {
              if (typeof arr === "string") {
                str = arr;
              } else {
                if (null == arr) {
                  let _Array = Array;
                  if (Array.isArray(arr)) {
                    let reduced = arr.reduce((arr, str) => {
                      if (typeof closure_0 !== "function") {
                        HermesBuiltin.throwTypeError();
                      }
                      closure_0 = str;
                      str = "";
                      let str2 = "";
                      if (null != str) {
                        if (typeof str === "string") {
                          str2 = str;
                        } else {
                          if (null == str) {
                            const _Array = Array;
                            if (Array.isArray(str)) {
                              const reduced = str.reduce((arr, str) => {
                                if (typeof closure_0 !== "function") {
                                  HermesBuiltin.throwTypeError();
                                }
                                closure_0 = str;
                                str = "";
                                let str2 = "";
                                if (null != str) {
                                  if (typeof str === "string") {
                                    str2 = str;
                                  } else {
                                    if (null == str) {
                                      const _Array = Array;
                                      if (Array.isArray(str)) {
                                        const reduced = str.reduce((arr, str) => {
                                          if (typeof closure_0 !== "function") {
                                            HermesBuiltin.throwTypeError();
                                          }
                                          closure_0 = str;
                                          str = "";
                                          let str2 = "";
                                          if (null != str) {
                                            if (typeof str === "string") {
                                              str2 = str;
                                            } else {
                                              if (null == str) {
                                                const _Array = Array;
                                                if (Array.isArray(str)) {
                                                  const reduced = str.reduce(() => { ... }, []);
                                                  str = reduced.join(", ");
                                                } else if (typeof str === "object") {
                                                  const _Object = Object;
                                                  const keys = Object.keys(str);
                                                  const reduced1 = keys.reduce(() => { ... }, []);
                                                  str = reduced1.join(", ");
                                                }
                                              }
                                              str = str.message;
                                            }
                                          }
                                          return arr.concat(str2);
                                        }, []);
                                        str = reduced.join(", ");
                                      } else if (typeof str === "object") {
                                        const _Object = Object;
                                        const keys = Object.keys(str);
                                        const reduced1 = keys.reduce((arr) => {
                                          arr = arr[arg1];
                                          if (typeof closure_1_0 !== "function") {
                                            HermesBuiltin.throwTypeError();
                                          }
                                          let str = "";
                                          if (null != arr) {
                                            if (typeof arr === "string") {
                                              str = arr;
                                            } else {
                                              if (null == arr) {
                                                let _Array = Array;
                                                if (Array.isArray(arr)) {
                                                  let reduced = arr.reduce(() => { ... }, []);
                                                  let str2 = reduced.join(", ");
                                                } else {
                                                  str2 = "";
                                                  if (typeof arr === "object") {
                                                    let _Object = Object;
                                                    let keys = Object.keys(arr);
                                                    let reduced1 = keys.reduce(() => { ... }, []);
                                                    str2 = reduced1.join(", ");
                                                  }
                                                }
                                              }
                                              str2 = arr.message;
                                            }
                                          }
                                          let combined = arr;
                                          if (str) {
                                            let _HermesInternal = HermesInternal;
                                            combined = arr.concat("" + str + " (" + arg1 + ")");
                                          }
                                          return combined;
                                        }, []);
                                        str = reduced1.join(", ");
                                      }
                                    }
                                    str = str.message;
                                  }
                                }
                                return arr.concat(str2);
                              }, []);
                              str = reduced.join(", ");
                            } else if (typeof str === "object") {
                              const _Object = Object;
                              const keys = Object.keys(str);
                              const reduced1 = keys.reduce((arr) => {
                                arr = arr[arg1];
                                if (typeof closure_1_0 !== "function") {
                                  HermesBuiltin.throwTypeError();
                                }
                                let str = "";
                                if (null != arr) {
                                  if (typeof arr === "string") {
                                    str = arr;
                                  } else {
                                    if (null == arr) {
                                      let _Array = Array;
                                      if (Array.isArray(arr)) {
                                        let reduced = arr.reduce((arr, str) => {
                                          if (typeof closure_0 !== "function") {
                                            HermesBuiltin.throwTypeError();
                                          }
                                          closure_0 = str;
                                          str = "";
                                          let str2 = "";
                                          if (null != str) {
                                            if (typeof str === "string") {
                                              str2 = str;
                                            } else {
                                              if (null == str) {
                                                const _Array = Array;
                                                if (Array.isArray(str)) {
                                                  const reduced = str.reduce(() => { ... }, []);
                                                  str = reduced.join(", ");
                                                } else if (typeof str === "object") {
                                                  const _Object = Object;
                                                  const keys = Object.keys(str);
                                                  const reduced1 = keys.reduce(() => { ... }, []);
                                                  str = reduced1.join(", ");
                                                }
                                              }
                                              str = str.message;
                                            }
                                          }
                                          return arr.concat(str2);
                                        }, []);
                                        let str2 = reduced.join(", ");
                                      } else {
                                        str2 = "";
                                        if (typeof arr === "object") {
                                          let _Object = Object;
                                          let keys = Object.keys(arr);
                                          let reduced1 = keys.reduce((arr) => {
                                            arr = arr[arg1];
                                            if (typeof closure_1_0 !== "function") {
                                              HermesBuiltin.throwTypeError();
                                            }
                                            let str = "";
                                            if (null != arr) {
                                              if (typeof arr === "string") {
                                                str = arr;
                                              } else {
                                                if (null == arr) {
                                                  let _Array = Array;
                                                  if (Array.isArray(arr)) {
                                                    let reduced = arr.reduce(() => { ... }, []);
                                                    let str2 = reduced.join(", ");
                                                  } else {
                                                    str2 = "";
                                                    if (typeof arr === "object") {
                                                      let _Object = Object;
                                                      let keys = Object.keys(arr);
                                                      let reduced1 = keys.reduce(() => { ... }, []);
                                                      str2 = reduced1.join(", ");
                                                    }
                                                  }
                                                }
                                                str2 = arr.message;
                                              }
                                            }
                                            let combined = arr;
                                            if (str) {
                                              let _HermesInternal = HermesInternal;
                                              combined = arr.concat("" + str + " (" + arg1 + ")");
                                            }
                                            return combined;
                                          }, []);
                                          str2 = reduced1.join(", ");
                                        }
                                      }
                                    }
                                    str2 = arr.message;
                                  }
                                }
                                let combined = arr;
                                if (str) {
                                  let _HermesInternal = HermesInternal;
                                  combined = arr.concat("" + str + " (" + arg1 + ")");
                                }
                                return combined;
                              }, []);
                              str = reduced1.join(", ");
                            }
                          }
                          str = str.message;
                        }
                      }
                      return arr.concat(str2);
                    }, []);
                    let str2 = reduced.join(", ");
                  } else {
                    str2 = "";
                    if (typeof arr === "object") {
                      let _Object = Object;
                      let keys = Object.keys(arr);
                      let reduced1 = keys.reduce((arr) => {
                        arr = arr[arg1];
                        if (typeof closure_1_0 !== "function") {
                          HermesBuiltin.throwTypeError();
                        }
                        let str = "";
                        if (null != arr) {
                          if (typeof arr === "string") {
                            str = arr;
                          } else {
                            if (null == arr) {
                              let _Array = Array;
                              if (Array.isArray(arr)) {
                                let reduced = arr.reduce((arr, str) => {
                                  if (typeof closure_0 !== "function") {
                                    HermesBuiltin.throwTypeError();
                                  }
                                  closure_0 = str;
                                  str = "";
                                  let str2 = "";
                                  if (null != str) {
                                    if (typeof str === "string") {
                                      str2 = str;
                                    } else {
                                      if (null == str) {
                                        const _Array = Array;
                                        if (Array.isArray(str)) {
                                          const reduced = str.reduce((arr, str) => {
                                            if (typeof closure_0 !== "function") {
                                              HermesBuiltin.throwTypeError();
                                            }
                                            closure_0 = str;
                                            str = "";
                                            let str2 = "";
                                            if (null != str) {
                                              if (typeof str === "string") {
                                                str2 = str;
                                              } else {
                                                if (null == str) {
                                                  const _Array = Array;
                                                  if (Array.isArray(str)) {
                                                    const reduced = str.reduce(() => { ... }, []);
                                                    str = reduced.join(", ");
                                                  } else if (typeof str === "object") {
                                                    const _Object = Object;
                                                    const keys = Object.keys(str);
                                                    const reduced1 = keys.reduce(() => { ... }, []);
                                                    str = reduced1.join(", ");
                                                  }
                                                }
                                                str = str.message;
                                              }
                                            }
                                            return arr.concat(str2);
                                          }, []);
                                          str = reduced.join(", ");
                                        } else if (typeof str === "object") {
                                          const _Object = Object;
                                          const keys = Object.keys(str);
                                          const reduced1 = keys.reduce((arr) => {
                                            arr = arr[arg1];
                                            if (typeof closure_1_0 !== "function") {
                                              HermesBuiltin.throwTypeError();
                                            }
                                            let str = "";
                                            if (null != arr) {
                                              if (typeof arr === "string") {
                                                str = arr;
                                              } else {
                                                if (null == arr) {
                                                  let _Array = Array;
                                                  if (Array.isArray(arr)) {
                                                    let reduced = arr.reduce(() => { ... }, []);
                                                    let str2 = reduced.join(", ");
                                                  } else {
                                                    str2 = "";
                                                    if (typeof arr === "object") {
                                                      let _Object = Object;
                                                      let keys = Object.keys(arr);
                                                      let reduced1 = keys.reduce(() => { ... }, []);
                                                      str2 = reduced1.join(", ");
                                                    }
                                                  }
                                                }
                                                str2 = arr.message;
                                              }
                                            }
                                            let combined = arr;
                                            if (str) {
                                              let _HermesInternal = HermesInternal;
                                              combined = arr.concat("" + str + " (" + arg1 + ")");
                                            }
                                            return combined;
                                          }, []);
                                          str = reduced1.join(", ");
                                        }
                                      }
                                      str = str.message;
                                    }
                                  }
                                  return arr.concat(str2);
                                }, []);
                                let str2 = reduced.join(", ");
                              } else {
                                str2 = "";
                                if (typeof arr === "object") {
                                  let _Object = Object;
                                  let keys = Object.keys(arr);
                                  let reduced1 = keys.reduce((arr) => {
                                    arr = arr[arg1];
                                    if (typeof closure_1_0 !== "function") {
                                      HermesBuiltin.throwTypeError();
                                    }
                                    let str = "";
                                    if (null != arr) {
                                      if (typeof arr === "string") {
                                        str = arr;
                                      } else {
                                        if (null == arr) {
                                          let _Array = Array;
                                          if (Array.isArray(arr)) {
                                            let reduced = arr.reduce((arr, str) => {
                                              if (typeof closure_0 !== "function") {
                                                HermesBuiltin.throwTypeError();
                                              }
                                              closure_0 = str;
                                              str = "";
                                              let str2 = "";
                                              if (null != str) {
                                                if (typeof str === "string") {
                                                  str2 = str;
                                                } else {
                                                  if (null == str) {
                                                    const _Array = Array;
                                                    if (Array.isArray(str)) {
                                                      const reduced = str.reduce(() => { ... }, []);
                                                      str = reduced.join(", ");
                                                    } else if (typeof str === "object") {
                                                      const _Object = Object;
                                                      const keys = Object.keys(str);
                                                      const reduced1 = keys.reduce(() => { ... }, []);
                                                      str = reduced1.join(", ");
                                                    }
                                                  }
                                                  str = str.message;
                                                }
                                              }
                                              return arr.concat(str2);
                                            }, []);
                                            let str2 = reduced.join(", ");
                                          } else {
                                            str2 = "";
                                            if (typeof arr === "object") {
                                              let _Object = Object;
                                              let keys = Object.keys(arr);
                                              let reduced1 = keys.reduce((arr) => {
                                                arr = arr[arg1];
                                                if (typeof closure_1_0 !== "function") {
                                                  HermesBuiltin.throwTypeError();
                                                }
                                                let str = "";
                                                if (null != arr) {
                                                  if (typeof arr === "string") {
                                                    str = arr;
                                                  } else {
                                                    if (null == arr) {
                                                      let _Array = Array;
                                                      if (Array.isArray(arr)) {
                                                        let reduced = arr.reduce(() => { ... }, []);
                                                        let str2 = reduced.join(", ");
                                                      } else {
                                                        str2 = "";
                                                        if (typeof arr === "object") {
                                                          let _Object = Object;
                                                          let keys = Object.keys(arr);
                                                          let reduced1 = keys.reduce(() => { ... }, []);
                                                          str2 = reduced1.join(", ");
                                                        }
                                                      }
                                                    }
                                                    str2 = arr.message;
                                                  }
                                                }
                                                let combined = arr;
                                                if (str) {
                                                  let _HermesInternal = HermesInternal;
                                                  combined = arr.concat("" + str + " (" + arg1 + ")");
                                                }
                                                return combined;
                                              }, []);
                                              str2 = reduced1.join(", ");
                                            }
                                          }
                                        }
                                        str2 = arr.message;
                                      }
                                    }
                                    let combined = arr;
                                    if (str) {
                                      let _HermesInternal = HermesInternal;
                                      combined = arr.concat("" + str + " (" + arg1 + ")");
                                    }
                                    return combined;
                                  }, []);
                                  str2 = reduced1.join(", ");
                                }
                              }
                            }
                            str2 = arr.message;
                          }
                        }
                        let combined = arr;
                        if (str) {
                          let _HermesInternal = HermesInternal;
                          combined = arr.concat("" + str + " (" + arg1 + ")");
                        }
                        return combined;
                      }, []);
                      str2 = reduced1.join(", ");
                    }
                  }
                }
                str2 = arr.message;
              }
            }
            let combined = arr;
            if (str) {
              let _HermesInternal = HermesInternal;
              combined = arr.concat("" + str + " (" + arg1 + ")");
            }
            return combined;
          }, []);
          str = reduced1.join(", ");
        }
      }
      str = str.message;
    }
  }
  return str2;
}
const result = set.fileFinishedImporting("../discord_common/js/packages/http-utils/stringifyErrors.tsx");

export { stringifyErrors };