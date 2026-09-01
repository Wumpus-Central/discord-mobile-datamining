// _runtime/01545_forResult1.js
const forResult = Symbol.for("react.transitional.element");
let c0 = forResult;
const forResult1 = Symbol.for("react.portal");
const forResult2 = Symbol.for("react.fragment");
const forResult3 = Symbol.for("react.strict_mode");
const forResult4 = Symbol.for("react.profiler");
const forResult5 = Symbol.for("react.consumer");
const forResult6 = Symbol.for("react.context");
const forResult7 = Symbol.for("react.forward_ref");
const forResult8 = Symbol.for("react.suspense");
const forResult9 = Symbol.for("react.suspense_list");
const forResult10 = Symbol.for("react.memo");
const forResult11 = Symbol.for("react.lazy");
let closure_12 = Symbol.for("react.view_transition");
let closure_13 = Symbol.for("react.client.reference");
arg5.ContextConsumer = forResult5;
arg5.ContextProvider = forResult6;
arg5.Element = forResult;
arg5.ForwardRef = forResult7;
arg5.Fragment = forResult2;
arg5.Lazy = forResult11;
arg5.Memo = forResult10;
arg5.Portal = forResult1;
arg5.Profiler = forResult4;
arg5.StrictMode = forResult3;
arg5.Suspense = forResult8;
arg5.SuspenseList = forResult9;
arg5.isContextConsumer = (obj) => {
  let tmp;
  if (typeof obj === "object") {
    if (null !== obj) {
      const $$typeof2 = obj.$$typeof;
      if (closure_0 === $$typeof2) {
        const type = obj.type;
        tmp = type;
        if (forResult2 !== type) {
          tmp = type;
          if (forResult4 !== type) {
            tmp = type;
            if (forResult3 !== type) {
              tmp = type;
              if (forResult8 !== type) {
                tmp = type;
                if (forResult9 !== type) {
                  tmp = type;
                  if (closure_12 !== type) {
                    let $$typeof = type;
                    if (type) {
                      $$typeof = type.$$typeof;
                    }
                    if (forResult6 !== $$typeof) {
                      if (forResult7 !== $$typeof) {
                        if (forResult11 !== $$typeof) {
                          if (forResult10 !== $$typeof) {
                            tmp = $$typeof2;
                          }
                        }
                      }
                    }
                    tmp = $$typeof;
                  }
                }
              }
            }
          }
        }
      } else if (forResult1 === $$typeof2) {
        tmp = $$typeof2;
      }
    }
  }
  return tmp === forResult5;
};
arg5.isContextProvider = (obj) => {
  let tmp;
  if (typeof obj === "object") {
    if (null !== obj) {
      const $$typeof2 = obj.$$typeof;
      if (closure_0 === $$typeof2) {
        const type = obj.type;
        tmp = type;
        if (forResult2 !== type) {
          tmp = type;
          if (forResult4 !== type) {
            tmp = type;
            if (forResult3 !== type) {
              tmp = type;
              if (forResult8 !== type) {
                tmp = type;
                if (forResult9 !== type) {
                  tmp = type;
                  if (closure_12 !== type) {
                    let $$typeof = type;
                    if (type) {
                      $$typeof = type.$$typeof;
                    }
                    if (forResult6 !== $$typeof) {
                      if (forResult7 !== $$typeof) {
                        if (forResult11 !== $$typeof) {
                          if (forResult10 !== $$typeof) {
                            tmp = $$typeof2;
                          }
                        }
                      }
                    }
                    tmp = $$typeof;
                  }
                }
              }
            }
          }
        }
      } else if (forResult1 === $$typeof2) {
        tmp = $$typeof2;
      }
    }
  }
  return tmp === forResult6;
};
arg5.isElement = (obj) => {
  let tmp = typeof obj === "object";
  if (typeof obj === "object") {
    tmp = null !== obj;
  }
  if (tmp) {
    tmp = obj.$$typeof === closure_0;
  }
  return tmp;
};
arg5.isForwardRef = (obj) => {
  let tmp;
  if (typeof obj === "object") {
    if (null !== obj) {
      const $$typeof2 = obj.$$typeof;
      if (closure_0 === $$typeof2) {
        const type = obj.type;
        tmp = type;
        if (forResult2 !== type) {
          tmp = type;
          if (forResult4 !== type) {
            tmp = type;
            if (forResult3 !== type) {
              tmp = type;
              if (forResult8 !== type) {
                tmp = type;
                if (forResult9 !== type) {
                  tmp = type;
                  if (closure_12 !== type) {
                    let $$typeof = type;
                    if (type) {
                      $$typeof = type.$$typeof;
                    }
                    if (forResult6 !== $$typeof) {
                      if (forResult7 !== $$typeof) {
                        if (forResult11 !== $$typeof) {
                          if (forResult10 !== $$typeof) {
                            tmp = $$typeof2;
                          }
                        }
                      }
                    }
                    tmp = $$typeof;
                  }
                }
              }
            }
          }
        }
      } else if (forResult1 === $$typeof2) {
        tmp = $$typeof2;
      }
    }
  }
  return tmp === forResult7;
};
arg5.isFragment = (obj) => {
  let tmp;
  if (typeof obj === "object") {
    if (null !== obj) {
      const $$typeof2 = obj.$$typeof;
      if (closure_0 === $$typeof2) {
        const type = obj.type;
        tmp = type;
        if (forResult2 !== type) {
          tmp = type;
          if (forResult4 !== type) {
            tmp = type;
            if (forResult3 !== type) {
              tmp = type;
              if (forResult8 !== type) {
                tmp = type;
                if (forResult9 !== type) {
                  tmp = type;
                  if (closure_12 !== type) {
                    let $$typeof = type;
                    if (type) {
                      $$typeof = type.$$typeof;
                    }
                    if (forResult6 !== $$typeof) {
                      if (forResult7 !== $$typeof) {
                        if (forResult11 !== $$typeof) {
                          if (forResult10 !== $$typeof) {
                            tmp = $$typeof2;
                          }
                        }
                      }
                    }
                    tmp = $$typeof;
                  }
                }
              }
            }
          }
        }
      } else if (forResult1 === $$typeof2) {
        tmp = $$typeof2;
      }
    }
  }
  return tmp === forResult2;
};
arg5.isLazy = (obj) => {
  let tmp;
  if (typeof obj === "object") {
    if (null !== obj) {
      const $$typeof2 = obj.$$typeof;
      if (closure_0 === $$typeof2) {
        const type = obj.type;
        tmp = type;
        if (forResult2 !== type) {
          tmp = type;
          if (forResult4 !== type) {
            tmp = type;
            if (forResult3 !== type) {
              tmp = type;
              if (forResult8 !== type) {
                tmp = type;
                if (forResult9 !== type) {
                  tmp = type;
                  if (closure_12 !== type) {
                    let $$typeof = type;
                    if (type) {
                      $$typeof = type.$$typeof;
                    }
                    if (forResult6 !== $$typeof) {
                      if (forResult7 !== $$typeof) {
                        if (forResult11 !== $$typeof) {
                          if (forResult10 !== $$typeof) {
                            tmp = $$typeof2;
                          }
                        }
                      }
                    }
                    tmp = $$typeof;
                  }
                }
              }
            }
          }
        }
      } else if (forResult1 === $$typeof2) {
        tmp = $$typeof2;
      }
    }
  }
  return tmp === forResult11;
};
arg5.isMemo = (obj) => {
  let tmp;
  if (typeof obj === "object") {
    if (null !== obj) {
      const $$typeof2 = obj.$$typeof;
      if (closure_0 === $$typeof2) {
        const type = obj.type;
        tmp = type;
        if (forResult2 !== type) {
          tmp = type;
          if (forResult4 !== type) {
            tmp = type;
            if (forResult3 !== type) {
              tmp = type;
              if (forResult8 !== type) {
                tmp = type;
                if (forResult9 !== type) {
                  tmp = type;
                  if (closure_12 !== type) {
                    let $$typeof = type;
                    if (type) {
                      $$typeof = type.$$typeof;
                    }
                    if (forResult6 !== $$typeof) {
                      if (forResult7 !== $$typeof) {
                        if (forResult11 !== $$typeof) {
                          if (forResult10 !== $$typeof) {
                            tmp = $$typeof2;
                          }
                        }
                      }
                    }
                    tmp = $$typeof;
                  }
                }
              }
            }
          }
        }
      } else if (forResult1 === $$typeof2) {
        tmp = $$typeof2;
      }
    }
  }
  return tmp === forResult10;
};
arg5.isPortal = (obj) => {
  let tmp;
  if (typeof obj === "object") {
    if (null !== obj) {
      const $$typeof2 = obj.$$typeof;
      if (closure_0 === $$typeof2) {
        const type = obj.type;
        tmp = type;
        if (forResult2 !== type) {
          tmp = type;
          if (forResult4 !== type) {
            tmp = type;
            if (forResult3 !== type) {
              tmp = type;
              if (forResult8 !== type) {
                tmp = type;
                if (forResult9 !== type) {
                  tmp = type;
                  if (closure_12 !== type) {
                    let $$typeof = type;
                    if (type) {
                      $$typeof = type.$$typeof;
                    }
                    if (forResult6 !== $$typeof) {
                      if (forResult7 !== $$typeof) {
                        if (forResult11 !== $$typeof) {
                          if (forResult10 !== $$typeof) {
                            tmp = $$typeof2;
                          }
                        }
                      }
                    }
                    tmp = $$typeof;
                  }
                }
              }
            }
          }
        }
      } else if (forResult1 === $$typeof2) {
        tmp = $$typeof2;
      }
    }
  }
  return tmp === forResult1;
};
arg5.isProfiler = (obj) => {
  let tmp;
  if (typeof obj === "object") {
    if (null !== obj) {
      const $$typeof2 = obj.$$typeof;
      if (closure_0 === $$typeof2) {
        const type = obj.type;
        tmp = type;
        if (forResult2 !== type) {
          tmp = type;
          if (forResult4 !== type) {
            tmp = type;
            if (forResult3 !== type) {
              tmp = type;
              if (forResult8 !== type) {
                tmp = type;
                if (forResult9 !== type) {
                  tmp = type;
                  if (closure_12 !== type) {
                    let $$typeof = type;
                    if (type) {
                      $$typeof = type.$$typeof;
                    }
                    if (forResult6 !== $$typeof) {
                      if (forResult7 !== $$typeof) {
                        if (forResult11 !== $$typeof) {
                          if (forResult10 !== $$typeof) {
                            tmp = $$typeof2;
                          }
                        }
                      }
                    }
                    tmp = $$typeof;
                  }
                }
              }
            }
          }
        }
      } else if (forResult1 === $$typeof2) {
        tmp = $$typeof2;
      }
    }
  }
  return tmp === forResult4;
};
arg5.isStrictMode = (obj) => {
  let tmp;
  if (typeof obj === "object") {
    if (null !== obj) {
      const $$typeof2 = obj.$$typeof;
      if (closure_0 === $$typeof2) {
        const type = obj.type;
        tmp = type;
        if (forResult2 !== type) {
          tmp = type;
          if (forResult4 !== type) {
            tmp = type;
            if (forResult3 !== type) {
              tmp = type;
              if (forResult8 !== type) {
                tmp = type;
                if (forResult9 !== type) {
                  tmp = type;
                  if (closure_12 !== type) {
                    let $$typeof = type;
                    if (type) {
                      $$typeof = type.$$typeof;
                    }
                    if (forResult6 !== $$typeof) {
                      if (forResult7 !== $$typeof) {
                        if (forResult11 !== $$typeof) {
                          if (forResult10 !== $$typeof) {
                            tmp = $$typeof2;
                          }
                        }
                      }
                    }
                    tmp = $$typeof;
                  }
                }
              }
            }
          }
        }
      } else if (forResult1 === $$typeof2) {
        tmp = $$typeof2;
      }
    }
  }
  return tmp === forResult3;
};
arg5.isSuspense = (obj) => {
  let tmp;
  if (typeof obj === "object") {
    if (null !== obj) {
      const $$typeof2 = obj.$$typeof;
      if (closure_0 === $$typeof2) {
        const type = obj.type;
        tmp = type;
        if (forResult2 !== type) {
          tmp = type;
          if (forResult4 !== type) {
            tmp = type;
            if (forResult3 !== type) {
              tmp = type;
              if (forResult8 !== type) {
                tmp = type;
                if (forResult9 !== type) {
                  tmp = type;
                  if (closure_12 !== type) {
                    let $$typeof = type;
                    if (type) {
                      $$typeof = type.$$typeof;
                    }
                    if (forResult6 !== $$typeof) {
                      if (forResult7 !== $$typeof) {
                        if (forResult11 !== $$typeof) {
                          if (forResult10 !== $$typeof) {
                            tmp = $$typeof2;
                          }
                        }
                      }
                    }
                    tmp = $$typeof;
                  }
                }
              }
            }
          }
        }
      } else if (forResult1 === $$typeof2) {
        tmp = $$typeof2;
      }
    }
  }
  return tmp === forResult8;
};
arg5.isSuspenseList = (obj) => {
  let tmp;
  if (typeof obj === "object") {
    if (null !== obj) {
      const $$typeof2 = obj.$$typeof;
      if (closure_0 === $$typeof2) {
        const type = obj.type;
        tmp = type;
        if (forResult2 !== type) {
          tmp = type;
          if (forResult4 !== type) {
            tmp = type;
            if (forResult3 !== type) {
              tmp = type;
              if (forResult8 !== type) {
                tmp = type;
                if (forResult9 !== type) {
                  tmp = type;
                  if (closure_12 !== type) {
                    let $$typeof = type;
                    if (type) {
                      $$typeof = type.$$typeof;
                    }
                    if (forResult6 !== $$typeof) {
                      if (forResult7 !== $$typeof) {
                        if (forResult11 !== $$typeof) {
                          if (forResult10 !== $$typeof) {
                            tmp = $$typeof2;
                          }
                        }
                      }
                    }
                    tmp = $$typeof;
                  }
                }
              }
            }
          }
        }
      } else if (forResult1 === $$typeof2) {
        tmp = $$typeof2;
      }
    }
  }
  return tmp === forResult9;
};
arg5.isValidElementType = (str) => {
  let tmp = typeof str === "string";
  if (typeof str !== "string") {
    tmp = typeof str === "function";
  }
  if (!tmp) {
    tmp = str === forResult2;
  }
  if (!tmp) {
    tmp = str === forResult4;
  }
  if (!tmp) {
    tmp = str === forResult3;
  }
  if (!tmp) {
    tmp = str === forResult8;
  }
  if (!tmp) {
    tmp = str === forResult9;
  }
  if (!tmp) {
    let tmp7 = typeof str === "object";
    if (typeof str === "object") {
      tmp7 = null !== str;
    }
    if (tmp7) {
      let tmp9 = str.$$typeof === forResult11;
      if (!tmp9) {
        tmp9 = str.$$typeof === forResult10;
      }
      if (!tmp9) {
        tmp9 = str.$$typeof === forResult6;
      }
      if (!tmp9) {
        tmp9 = str.$$typeof === forResult5;
      }
      if (!tmp9) {
        tmp9 = str.$$typeof === forResult7;
      }
      if (!tmp9) {
        tmp9 = str.$$typeof === closure_13;
      }
      if (!tmp9) {
        tmp9 = undefined !== str.getModuleId;
      }
      tmp7 = tmp9;
    }
    tmp = tmp7;
  }
  return tmp;
};
arg5.typeOf = function typeOf(obj) {
  if (typeof obj === "object") {
    if (null !== obj) {
      const $$typeof = obj.$$typeof;
      if (closure_0 === $$typeof) {
        const type = obj.type;
        if (forResult2 !== type) {
          if (forResult4 !== type) {
            if (forResult3 !== type) {
              if (forResult8 !== type) {
                if (forResult9 !== type) {
                  if (closure_12 !== type) {
                    let $$typeof2 = type;
                    if (type) {
                      $$typeof2 = type.$$typeof;
                    }
                    if (forResult6 !== $$typeof2) {
                      if (forResult7 !== $$typeof2) {
                        if (forResult11 !== $$typeof2) {
                          if (forResult10 !== $$typeof2) {
                            if (forResult5 !== $$typeof2) {
                              return $$typeof;
                            }
                          }
                        }
                      }
                    }
                    return $$typeof2;
                  }
                }
              }
            }
          }
        }
        return type;
      } else if (forResult1 === $$typeof) {
        return $$typeof;
      }
    }
  }
};
