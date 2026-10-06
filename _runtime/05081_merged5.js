// _runtime/05081_merged5.js
let closure_4;

function optional() {
  const f90139 = () => {
    let obj = {
      match(arg0) {
        let obj3;
        const obj = {};
        if (undefined === arg0) {
          const arr = closure_2_7(closure_1_0);
          const item = arr.forEach((item) => {
            obj[item] = undefined;
          });
          obj3 = { matched: true, selections: obj };
          const obj2 = { matched: true, selections: obj };
        } else {
          obj3 = {
            matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
              obj[arg0] = arg1;
            }),
            selections: obj,
          };
        }
        return obj3;
      },
      getSelectionKeys() {
        return closure_2_7(closure_1_0);
      },
      matcherType: "optional",
    };
    return obj;
  };
  const obj = { [closure_2_1]: f90139 };
  const obj2 = {
    optional,
    and(arg0) {
      return closure_2_12(closure_0, arg0);
    },
    or(arg0) {
      return closure_2_13(closure_0, arg0);
    },
    select(arg0) {
      let tmp3;
      if (undefined === arg0) {
        tmp3 = closure_2_14(closure_0);
      } else {
        tmp3 = closure_2_14(arg0, closure_0);
      }
      return tmp3;
    },
  };
  return Object.assign(obj, obj2);
}
const f90142 = () => {
  let obj = {
    match(arg0) {
      const obj = { matched: Boolean(closure_1_0(arg0)) };
      return obj;
    },
  };
  return obj;
};
function startsWith(arg0) {
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  closure_0 = arg0;
  const f136857 = (str) => {
    let startsWithResult = typeof str === "string";
    if (typeof str === "string") {
      startsWithResult = str.startsWith(f136857);
    }
    return startsWithResult;
  };
  const obj = { [closure_2_1]: f90142 };
  const tmp = closure_2_12(closure_0, obj);
  closure_0 = tmp;
  const obj2 = {
    optional,
    and(arg0) {
      return closure_2_12(closure_0, arg0);
    },
    or(arg0) {
      return closure_2_13(closure_0, arg0);
    },
    select(arg0) {
      let tmp3;
      if (undefined === arg0) {
        tmp3 = closure_2_14(closure_0);
      } else {
        tmp3 = closure_2_14(arg0, closure_0);
      }
      return tmp3;
    },
  };
  const obj3 = { startsWith, endsWith, minLength, maxLength, includes, regex };
  return Object.assign(Object.assign(tmp, obj2), obj3);
}
function endsWith(arg0) {
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  closure_0 = arg0;
  const f136858 = (str) => {
    let endsWithResult = typeof str === "string";
    if (typeof str === "string") {
      endsWithResult = str.endsWith(f136858);
    }
    return endsWithResult;
  };
  const obj = { [closure_2_1]: f90142 };
  const tmp = closure_2_12(closure_0, obj);
  closure_0 = tmp;
  const obj2 = {
    optional,
    and(arg0) {
      return closure_2_12(closure_0, arg0);
    },
    or(arg0) {
      return closure_2_13(closure_0, arg0);
    },
    select(arg0) {
      let tmp3;
      if (undefined === arg0) {
        tmp3 = closure_2_14(closure_0);
      } else {
        tmp3 = closure_2_14(arg0, closure_0);
      }
      return tmp3;
    },
  };
  const obj3 = { startsWith, endsWith, minLength, maxLength, includes, regex };
  return Object.assign(Object.assign(tmp, obj2), obj3);
}
function minLength(minItems) {
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  closure_0 = minItems;
  const f151070 = (str) => {
    let tmp = typeof str === "string";
    if (typeof str === "string") {
      tmp = str.length >= f151070;
    }
    return tmp;
  };
  const obj = { [closure_2_1]: f90142 };
  let tmp = closure_2_12(closure_0, obj);
  closure_0 = tmp;
  const obj2 = {
    optional,
    and(arg0) {
      return closure_2_12(closure_0, arg0);
    },
    or(arg0) {
      return closure_2_13(closure_0, arg0);
    },
    select(arg0) {
      let tmp3;
      if (undefined === arg0) {
        tmp3 = closure_2_14(closure_0);
      } else {
        tmp3 = closure_2_14(arg0, closure_0);
      }
      return tmp3;
    },
  };
  const obj3 = { startsWith, endsWith, minLength, maxLength, includes, regex };
  return Object.assign(Object.assign(tmp, obj2), obj3);
}
function maxLength(maxItems) {
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  closure_0 = maxItems;
  const f151071 = (str) => {
    let tmp = typeof str === "string";
    if (typeof str === "string") {
      tmp = str.length <= f151071;
    }
    return tmp;
  };
  const obj = { [closure_2_1]: f90142 };
  let tmp = closure_2_12(closure_0, obj);
  closure_0 = tmp;
  const obj2 = {
    optional,
    and(arg0) {
      return closure_2_12(closure_0, arg0);
    },
    or(arg0) {
      return closure_2_13(closure_0, arg0);
    },
    select(arg0) {
      let tmp3;
      if (undefined === arg0) {
        tmp3 = closure_2_14(closure_0);
      } else {
        tmp3 = closure_2_14(arg0, closure_0);
      }
      return tmp3;
    },
  };
  const obj3 = { startsWith, endsWith, minLength, maxLength, includes, regex };
  return Object.assign(Object.assign(tmp, obj2), obj3);
}
function includes(arg0) {
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  closure_0 = arg0;
  let f136859 = (str) => {
    let hasItem = typeof str === "string";
    if (typeof str === "string") {
      hasItem = str.includes(f136859);
    }
    return hasItem;
  };
  let obj = { [closure_2_1]: f90142 };
  let tmp = closure_2_12(closure_0, obj);
  closure_0 = tmp;
  let obj2 = {
    optional,
    and(arg0) {
      return closure_2_12(closure_0, arg0);
    },
    or(arg0) {
      return closure_2_13(closure_0, arg0);
    },
    select(arg0) {
      let tmp3;
      if (undefined === arg0) {
        tmp3 = closure_2_14(closure_0);
      } else {
        tmp3 = closure_2_14(arg0, closure_0);
      }
      return tmp3;
    },
  };
  let obj3 = { startsWith, endsWith, minLength, maxLength, includes, regex };
  return Object.assign(Object.assign(tmp, obj2), obj3);
}
function regex(arg0) {
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  let f136860 = (str) => {
    let BooleanResult = typeof str === "string";
    if (typeof str === "string") {
      const _Boolean = Boolean;
      BooleanResult = Boolean(str.match(f136860));
    }
    return BooleanResult;
  };
  let obj = { [closure_2_1]: f90142 };
  let tmp = closure_2_12(closure_1_0, obj);
  closure_0 = tmp;
  let obj2 = {
    optional,
    and(arg0) {
      return closure_2_12(closure_0, arg0);
    },
    or(arg0) {
      return closure_2_13(closure_0, arg0);
    },
    select(arg0) {
      let tmp3;
      if (undefined === arg0) {
        tmp3 = closure_2_14(closure_0);
      } else {
        tmp3 = closure_2_14(arg0, closure_0);
      }
      return tmp3;
    },
  };
  let obj3 = { startsWith, endsWith, minLength, maxLength, includes, regex };
  return Object.assign(Object.assign(tmp, obj2), obj3);
}
function between(arg0, arg1) {
  let tmp;
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  if (typeof closure_2_15 === "function") {
    let closure_1 = arg1;
    const f90156 = (num) => {
      let tmp = typeof num === "number";
      if (typeof num === "number") {
        tmp = f90156 <= num;
      }
      if (tmp) {
        tmp = closure_1_1 >= num;
      }
      return tmp;
    };
    const obj = {};
    obj[closure_2_1] = f90142;
    const tmpResult = tmp(tmp2, obj);
    const _Object = Object;
    closure_0 = tmpResult;
    const _Object2 = Object;
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    const obj3 = { between, lt, gt, lte, gte, int, finite, positive, negative };
    return Object.assign(Object.assign(tmpResult, obj2), obj3);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function lt(arg0) {
  let tmp;
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  if (typeof closure_2_16 === "function") {
    const f90157 = (num) => {
      let tmp = typeof num === "number";
      if (typeof num === "number") {
        tmp = num < f90157;
      }
      return tmp;
    };
    const obj = {};
    obj[closure_2_1] = f90142;
    const tmpResult = tmp(tmp2, obj);
    const _Object = Object;
    closure_0 = tmpResult;
    const _Object2 = Object;
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    const obj3 = { between, lt, gt, lte, gte, int, finite, positive, negative };
    return Object.assign(Object.assign(tmpResult, obj2), obj3);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function gt(arg0) {
  let tmp;
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  if (typeof closure_2_17 === "function") {
    const f90158 = (num) => {
      let tmp = typeof num === "number";
      if (typeof num === "number") {
        tmp = num > f90158;
      }
      return tmp;
    };
    const obj = {};
    obj[closure_2_1] = f90142;
    const tmpResult = tmp(tmp2, obj);
    const _Object = Object;
    closure_0 = tmpResult;
    const _Object2 = Object;
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    const obj3 = { between, lt, gt, lte, gte, int, finite, positive, negative };
    return Object.assign(Object.assign(tmpResult, obj2), obj3);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function lte(arg0) {
  let tmp;
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  if (typeof closure_2_18 === "function") {
    const f90159 = (num) => {
      let tmp = typeof num === "number";
      if (typeof num === "number") {
        tmp = num <= f90159;
      }
      return tmp;
    };
    const obj = {};
    obj[closure_2_1] = f90142;
    const tmpResult = tmp(tmp2, obj);
    const _Object = Object;
    closure_0 = tmpResult;
    const _Object2 = Object;
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    const obj3 = { between, lt, gt, lte, gte, int, finite, positive, negative };
    return Object.assign(Object.assign(tmpResult, obj2), obj3);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function gte(arg0) {
  let tmp;
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  if (typeof closure_2_19 === "function") {
    const f90160 = (num) => {
      let tmp = typeof num === "number";
      if (typeof num === "number") {
        tmp = num >= f90160;
      }
      return tmp;
    };
    const obj = {};
    obj[closure_2_1] = f90142;
    const tmpResult = tmp(tmp2, obj);
    const _Object = Object;
    closure_0 = tmpResult;
    const _Object2 = Object;
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    const obj3 = { between, lt, gt, lte, gte, int, finite, positive, negative };
    return Object.assign(Object.assign(tmpResult, obj2), obj3);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function int() {
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  const f901612 = (num) => {
    let isIntegerResult = typeof num === "number";
    if (typeof num === "number") {
      const _Number = Number;
      isIntegerResult = Number.isInteger(num);
    }
    return isIntegerResult;
  };
  if (typeof closure_2_20 === "function") {
    const f90161 = f901612;
    const obj = {};
    obj[closure_2_1] = f90142;
    const tmpResult = tmp(tmp2, obj);
    const _Object = Object;
    closure_0 = tmpResult;
    const _Object2 = Object;
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    const obj3 = { between, lt, gt, lte, gte, int, finite, positive, negative };
    return Object.assign(Object.assign(tmpResult, obj2), obj3);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function finite() {
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  const f901622 = (num) => {
    let isFiniteResult = typeof num === "number";
    if (typeof num === "number") {
      const _Number = Number;
      isFiniteResult = Number.isFinite(num);
    }
    return isFiniteResult;
  };
  if (typeof closure_2_21 === "function") {
    const f90162 = f901622;
    const obj = {};
    obj[closure_2_1] = f90142;
    const tmpResult = tmp(tmp2, obj);
    const _Object = Object;
    closure_0 = tmpResult;
    const _Object2 = Object;
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    const obj3 = { between, lt, gt, lte, gte, int, finite, positive, negative };
    return Object.assign(Object.assign(tmpResult, obj2), obj3);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
function positive() {
  let tmp;
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  const f901632 = (num) => {
    let tmp = typeof num === "number";
    if (typeof num === "number") {
      tmp = num > 0;
    }
    return tmp;
  };
  if (typeof closure_2_22 === "function") {
    let f90163 = f901632;
    let obj = {};
    obj[closure_2_1] = f90142;
    let tmpResult = tmp(tmp2, obj);
    let tmp5 = globalThis;
    let _Object = Object;
    closure_0 = tmpResult;
    let _Object2 = Object;
    let obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    let obj3 = { between, lt, gt, lte, gte, int, finite, positive, negative };
    return Object.assign(Object.assign(tmpResult, obj2), obj3);
  } else {
    let str = "Trying to call a non-function";
    throw new TypeError("Trying to call a non-function");
  }
}
function negative() {
  let tmp;
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  const f901642 = (num) => {
    let tmp = typeof num === "number";
    if (typeof num === "number") {
      tmp = num < 0;
    }
    return tmp;
  };
  if (typeof closure_2_23 === "function") {
    let f90164 = f901642;
    let obj = {};
    obj[closure_2_1] = f90142;
    let tmpResult = tmp(tmp2, obj);
    let tmp5 = globalThis;
    let _Object = Object;
    closure_0 = tmpResult;
    let _Object2 = Object;
    let obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    let obj3 = { between, lt, gt, lte, gte, int, finite, positive, negative };
    return Object.assign(Object.assign(tmpResult, obj2), obj3);
  } else {
    let str = "Trying to call a non-function";
    throw new TypeError("Trying to call a non-function");
  }
}
const between2 = function between(arg0, arg1) {
  let tmp;
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  if (typeof closure_2_24 === "function") {
    let closure_1 = arg1;
    const f90174 = (arg0) => {
      let tmp = typeof arg0 === "bigint";
      if (typeof arg0 === "bigint") {
        tmp = f90174 <= arg0;
      }
      if (tmp) {
        tmp = closure_1_1 >= arg0;
      }
      return tmp;
    };
    const obj = {};
    obj[closure_2_1] = f90142;
    const tmpResult = tmp(tmp2, obj);
    const _Object = Object;
    closure_0 = tmpResult;
    const _Object2 = Object;
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    const obj3 = {
      between: between2,
      lt: lt2,
      gt: gt2,
      lte: lte2,
      gte: gte2,
      positive: positive2,
      negative: negative2,
    };
    return Object.assign(Object.assign(tmpResult, obj2), obj3);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const lt2 = function lt(arg0) {
  let tmp;
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  if (typeof closure_2_25 === "function") {
    const f90175 = (arg0) => {
      let tmp = typeof arg0 === "bigint";
      if (typeof arg0 === "bigint") {
        tmp = arg0 < f90175;
      }
      return tmp;
    };
    const obj = {};
    obj[closure_2_1] = f90142;
    const tmpResult = tmp(tmp2, obj);
    const _Object = Object;
    closure_0 = tmpResult;
    const _Object2 = Object;
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    const obj3 = {
      between: between2,
      lt: lt2,
      gt: gt2,
      lte: lte2,
      gte: gte2,
      positive: positive2,
      negative: negative2,
    };
    return Object.assign(Object.assign(tmpResult, obj2), obj3);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const gt2 = function gt(arg0) {
  let tmp;
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  if (typeof closure_2_26 === "function") {
    const f90176 = (arg0) => {
      let tmp = typeof arg0 === "bigint";
      if (typeof arg0 === "bigint") {
        tmp = arg0 > f90176;
      }
      return tmp;
    };
    const obj = {};
    obj[closure_2_1] = f90142;
    const tmpResult = tmp(tmp2, obj);
    const _Object = Object;
    closure_0 = tmpResult;
    const _Object2 = Object;
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    const obj3 = {
      between: between2,
      lt: lt2,
      gt: gt2,
      lte: lte2,
      gte: gte2,
      positive: positive2,
      negative: negative2,
    };
    return Object.assign(Object.assign(tmpResult, obj2), obj3);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const lte2 = function lte(arg0) {
  let tmp;
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  if (typeof closure_2_27 === "function") {
    const f90177 = (arg0) => {
      let tmp = typeof arg0 === "bigint";
      if (typeof arg0 === "bigint") {
        tmp = arg0 <= f90177;
      }
      return tmp;
    };
    const obj = {};
    obj[closure_2_1] = f90142;
    const tmpResult = tmp(tmp2, obj);
    const _Object = Object;
    closure_0 = tmpResult;
    const _Object2 = Object;
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    const obj3 = {
      between: between2,
      lt: lt2,
      gt: gt2,
      lte: lte2,
      gte: gte2,
      positive: positive2,
      negative: negative2,
    };
    return Object.assign(Object.assign(tmpResult, obj2), obj3);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const gte2 = function gte(arg0) {
  let tmp;
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  if (typeof closure_2_28 === "function") {
    const f90178 = (arg0) => {
      let tmp = typeof arg0 === "bigint";
      if (typeof arg0 === "bigint") {
        tmp = arg0 >= f90178;
      }
      return tmp;
    };
    const obj = {};
    obj[closure_2_1] = f90142;
    const tmpResult = tmp(tmp2, obj);
    const _Object = Object;
    closure_0 = tmpResult;
    const _Object2 = Object;
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    const obj3 = {
      between: between2,
      lt: lt2,
      gt: gt2,
      lte: lte2,
      gte: gte2,
      positive: positive2,
      negative: negative2,
    };
    return Object.assign(Object.assign(tmpResult, obj2), obj3);
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const positive2 = function positive() {
  let tmp;
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  const f901792 = (arg0) => {
    let tmp = typeof arg0 === "bigint";
    if (typeof arg0 === "bigint") {
      tmp = arg0 > 0;
    }
    return tmp;
  };
  if (typeof closure_2_29 === "function") {
    let f90179 = f901792;
    let obj = {};
    obj[closure_2_1] = f90142;
    let tmpResult = tmp(tmp2, obj);
    let tmp5 = globalThis;
    let _Object = Object;
    closure_0 = tmpResult;
    let _Object2 = Object;
    let obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    let obj3 = { between: between2, lt: lt2, gt: gt2, lte: lte2, gte: gte2, positive: positive2, negative: negative2 };
    return Object.assign(Object.assign(tmpResult, obj2), obj3);
  } else {
    let str = "Trying to call a non-function";
    throw new TypeError("Trying to call a non-function");
  }
};
const negative2 = function negative() {
  let tmp;
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  const f901802 = (arg0) => {
    let tmp = typeof arg0 === "bigint";
    if (typeof arg0 === "bigint") {
      tmp = arg0 < 0;
    }
    return tmp;
  };
  if (typeof closure_2_30 === "function") {
    let f90180 = f901802;
    let obj = {};
    obj[closure_2_1] = f90142;
    let tmpResult = tmp(tmp2, obj);
    let tmp5 = globalThis;
    let _Object = Object;
    closure_0 = tmpResult;
    let _Object2 = Object;
    let obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    let obj3 = { between: between2, lt: lt2, gt: gt2, lte: lte2, gte: gte2, positive: positive2, negative: negative2 };
    return Object.assign(Object.assign(tmpResult, obj2), obj3);
  } else {
    let str = "Trying to call a non-function";
    throw new TypeError("Trying to call a non-function");
  }
};
function t(iterable, arg1) {
  let arr = iterable;
  let prop = typeof Symbol !== "undefined";
  if (typeof Symbol !== "undefined") {
    const _Symbol = Symbol;
    prop = iterable[Symbol.iterator];
  }
  if (!prop) {
    prop = iterable[Symbol.iterator];
  }
  if (prop) {
    const iter = prop.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = prop;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if (typeof iterable === "string") {
          const _Array4 = Array;
          const self3 = this;
          const self4 = this;
          const array = new Array(length2);
          let num5 = 0;
          tmp2 = array;
          if (0 < iterable.length) {
            do {
              array[num5] = iterable[num5];
              num5 = num5 + 1;
              tmp2 = array;
            } while (num5 < iterable.length);
          }
        } else {
          const _Object = Object;
          const callResult = toString.call(iterable);
          const substr = callResult.slice(8, -1);
          let name = substr;
          const tmp4 = "Object" === substr && iterable.constructor;
          if (tmp4) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                const _Array2 = Array;
                const self = this;
                const self2 = this;
                const array2 = new Array(length);
                let num3 = 0;
                arr = array2;
                if (0 < iterable.length) {
                  do {
                    array2[num3] = iterable[num3];
                    num3 = num3 + 1;
                    arr = array2;
                  } while (num3 < iterable.length);
                }
              }
            }
            tmp2 = arr;
          }
          const _Array3 = Array;
          arr = Array.from(iterable);
        }
      }
      tmp = tmp2;
      if (!tmp) {
        const tmp12 = arg1;
        if (tmp12) {
          if (iterable) {
            tmp = tmp2;
          }
        }
        const _TypeError = TypeError;
        const self5 = this;
        const self6 = this;
        const typeError = new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
        );
        throw typeError;
      }
    }
    if (tmp) {
      arr = tmp;
    }
    let closure_1 = 0;
    return () => {
      let obj;
      if (closure_1 >= arr.length) {
        obj = { done: true };
      } else {
        obj = { done: false, value: tmp[+closure_1] };
        closure_1 = tmp3 + 1;
      }
      return obj;
    };
  }
}
const isMatching = function s() {
  const slice = [].slice;
  const callResult = slice.call(arguments);
  if (1 === callResult.length) {
    closure_0 = callResult[0];
    return (arg0) => fn5(closure_0, arg0, () => {});
  } else if (2 === callResult.length) {
    return fn5(callResult[0], callResult[1], () => {});
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error(
      "isMatching wasn't given the right number of arguments: expected 1 or 2, received " + callResult.length + ".",
    );
    throw error;
  }
};
const fn2 = function p() {
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const slice = [].slice;
  closure_0 = slice.call(arguments);
  let obj = {
    [closure_1]: () => {
      let obj = {
        match(arg0) {
          closure_0 = arg0;
          const obj = {};
          function r(arg0, arg1) {
            obj[arg0] = arg1;
          }
          const obj2 = { matched: closure_1_0.every((item) => closure_2_6(item, closure_0, r)), selections: obj };
          return obj2;
        },
        getSelectionKeys() {
          if (typeof closure_2_8 === "function") {
            closure_0 = fn6;
            return closure_1_0.reduce((arr, item) => arr.concat(closure_0(item)), []);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        },
        matcherType: "and",
      };
      return obj;
    },
  };
  let obj2 = {
    optional,
    and(arg0) {
      return closure_2_12(closure_0, arg0);
    },
    or(arg0) {
      return closure_2_13(closure_0, arg0);
    },
    select(arg0) {
      let tmp3;
      if (undefined === arg0) {
        tmp3 = closure_2_14(closure_0);
      } else {
        tmp3 = closure_2_14(arg0, closure_0);
      }
      return tmp3;
    },
  };
  return Object.assign(obj, obj2);
};
const fn3 = function y() {
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const slice = [].slice;
  closure_0 = slice.call(arguments);
  let obj = {
    [closure_1]: () => {
      let obj = {
        match(arg0) {
          closure_0 = arg0;
          const obj = {};
          function r(arg0, arg1) {
            obj[arg0] = arg1;
          }
          if (typeof closure_2_8 === "function") {
            closure_0 = fn6;
            const reduced = closure_1_0.reduce((arr, item) => arr.concat(closure_0(item)), []);
            const item = reduced.forEach((item) => {
              obj[item] = undefined;
            });
            const obj2 = { matched: closure_1_0.some((item) => closure_2_6(item, closure_0, r)), selections: obj };
            return obj2;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        },
        getSelectionKeys() {
          if (typeof closure_2_8 === "function") {
            closure_0 = fn6;
            return closure_1_0.reduce((arr, item) => arr.concat(closure_0(item)), []);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        },
        matcherType: "or",
      };
      return obj;
    },
  };
  let obj2 = {
    optional,
    and(arg0) {
      return closure_2_12(closure_0, arg0);
    },
    or(arg0) {
      return closure_2_13(closure_0, arg0);
    },
    select(arg0) {
      let tmp3;
      if (undefined === arg0) {
        tmp3 = closure_2_14(closure_0);
      } else {
        tmp3 = closure_2_14(arg0, closure_0);
      }
      return tmp3;
    },
  };
  return Object.assign(obj, obj2);
};
const fn4 = function b() {
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const slice = [].slice;
  const callResult = slice.call(arguments);
  let first;
  if (typeof callResult[0] === "string") {
    first = callResult[0];
  }
  if (2 === callResult.length) {
    let first1 = callResult[1];
  } else if (typeof callResult[0] !== "string") {
    first1 = callResult[0];
  }
  const obj = {
    [closure_1]: () => ({
      match(arg0) {
        let tmp = first;
        if (null == first) {
          tmp = closure_2_3;
        }
        const selections = { [tmp]: arg0 };
        const matched =
          undefined === first1 ||
          fn5(tmp2, arg0, (arg0, arg1) => {
            selections[arg0] = arg1;
          });
        return { matched, selections };
      },
      getSelectionKeys() {
        let items1;
        let tmp = first;
        if (null == first) {
          tmp = closure_2_3;
        }
        const items = [tmp];
        const concat = items.concat;
        if (undefined === first1) {
          items1 = [];
        } else {
          items1 = fn6(tmp2);
        }
        return concat(items1);
      },
    }),
  };
  const obj2 = {
    optional,
    and(arg0) {
      return closure_2_12(closure_0, arg0);
    },
    or(arg0) {
      return closure_2_13(closure_0, arg0);
    },
    select(arg0) {
      let tmp3;
      if (undefined === arg0) {
        tmp3 = closure_2_14(closure_0);
      } else {
        tmp3 = closure_2_14(arg0, closure_0);
      }
      return tmp3;
    },
  };
  return Object.assign(obj, obj2);
};
const forResult = Symbol.for("@ts-pattern/matcher");
const map = forResult;
let closure_2 = Symbol.for("@ts-pattern/isVariadic");
let c3 = "@ts-pattern/anonymous-select-key";
function i(arg0) {}
function o(arg0) {}
const fn5 = function n(obj, obj2, arg2) {
  let items3;
  let matched;
  let selections;
  let tmp3;
  const t = obj;
  let closure_1 = obj2;
  closure_2 = arg2;
  if (typeof items3 === "function") {
    const tmp = obj && obj[closure_1];
    if (tmp) {
      const str2 = obj[closure_1]();
      const match = str2.match(obj2);
      ({ matched, selections } = match);
      const tmp26 = matched && selections;
      if (tmp26) {
        const _Object3 = Object;
        const keys = Object.keys(selections);
        const item = keys.forEach((item) => closure_2(item, selections[item]));
      }
      return matched;
    } else if (typeof closure_4 === "function") {
      let tmp5 = obj;
      const _Boolean = Boolean;
      if (obj) {
        tmp5 = typeof obj === "object";
      }
      if (_Boolean(tmp5)) {
        if (typeof tmp3 === "function") {
          let tmp6 = obj2;
          const _Boolean2 = Boolean;
          if (obj2) {
            tmp6 = typeof obj2 === "object";
          }
          if (_Boolean2(tmp6)) {
            const _Array = Array;
            if (Array.isArray(obj)) {
              const _Array2 = Array;
              if (Array.isArray(obj2)) {
                const items = [];
                const items1 = [];
                const items2 = [];
                const tmp8 = t(obj.keys());
                let iter = tmp8();
                if (!iter.done) {
                  while (typeof items3 === "function") {
                    let tmp11 = tmp9;
                    if (tmp11) {
                      tmp11 = tmp9[closure_1];
                    }
                    if (tmp11) {
                      if (tmp9[closure_2]) {
                        let arr = items2.push(tmp9);
                        let iter2 = tmp8();
                        iter = iter2;
                      }
                    }
                    if (items2.length) {
                      let arr2 = items1.push(tmp9);
                    } else {
                      let arr3 = items.push(tmp9);
                    }
                  }
                  throw new TypeError("Trying to call a non-function");
                }
                if (items2.length) {
                  if (items2.length > 1) {
                    const _Error = Error;
                    const self = this;
                    const self2 = this;
                    const error = new Error(
                      "Pattern error: Using `...P.array(...)` several times in a single pattern is not allowed.",
                    );
                    throw error;
                  } else if (obj2.length < items.length + items1.length) {
                    return false;
                  } else {
                    closure_4 = obj2.slice(0, items.length);
                    if (0 === items1.length) {
                      items3 = [];
                    } else {
                      items3 = obj2.slice(-items1.length);
                    }
                    let num2 = Infinity;
                    const slice = obj2.slice;
                    const length = items.length;
                    if (0 !== items1.length) {
                      num2 = -items1.length;
                    }
                    const substr = slice(length, num2);
                    let tmp19 =
                      items.every((item, index) => fn5(item, closure_4[index], closure_2)) &&
                      items1.every((item, index) => fn5(item, items3[index], closure_2));
                    if (tmp19) {
                      tmp19 = 0 === items2.length || fn5(items2[0], substr, arg2);
                      const tmp20 = 0 === items2.length || fn5(items2[0], substr, arg2);
                    }
                    return tmp19;
                  }
                } else {
                  const tmp17 =
                    obj.length === obj2.length && obj.every((item, index) => fn5(item, obj2[index], closure_2));
                  return tmp17;
                }
              } else {
                return false;
              }
            } else {
              const _Object2 = Object;
              const keys1 = Object.keys(obj);
              return keys1.every((item) => {
                let tmp3 = item in obj2;
                if (!tmp3) {
                  if (typeof o === "function") {
                    tmp3 = tmp && tmp[map] && "optional" === tmp[map]().matcherType;
                    const tmp5 = tmp && tmp[map] && "optional" === tmp[map]().matcherType;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                if (tmp3) {
                  tmp3 = fn5(tmp, obj2[item], closure_2);
                }
                return tmp3;
              });
            }
          } else {
            return false;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        const _Object = Object;
        return Object.is(obj2, obj);
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const fn6 = function n(obj) {
  if (typeof i === "function") {
    let items;
    let tmp3 = obj;
    const _Boolean = Boolean;
    if (obj) {
      tmp3 = typeof obj === "object";
    }
    if (_Boolean(tmp3)) {
      if (typeof o === "function") {
        let reduced;
        const tmp5 = obj && obj[map];
        if (tmp5) {
          const tmp10 = obj[map]();
          const getSelectionKeys = tmp10.getSelectionKeys;
          let callResult;
          if (null != getSelectionKeys) {
            callResult = getSelectionKeys.call(tmp10);
          }
          if (null == callResult) {
            callResult = [];
          }
          reduced = callResult;
        } else {
          const _Array = Array;
          if (Array.isArray(obj)) {
            if (typeof f === "function") {
              closure_0 = fn6;
              reduced = obj.reduce((arr, item) => arr.concat(closure_0(item)), []);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            const _Object = Object;
            const values = Object.values(obj);
            if (typeof f === "function") {
              closure_0 = fn6;
              reduced = values.reduce((arr, item) => arr.concat(closure_0(item)), []);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
        }
        items = reduced;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      items = [];
    }
    return items;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
function f(arg0, arg1) {}
function g(arg0, arg1) {}
function m(arg0, arg1) {}
const f34029 = (arg0) => true;
let obj = { [forResult]: f90142 };
let obj2 = {
  optional,
  and(arg0) {
    return closure_2_12(closure_0, arg0);
  },
  or(arg0) {
    return closure_2_13(closure_0, arg0);
  },
  select(arg0) {
    let tmp3;
    if (undefined === arg0) {
      tmp3 = closure_2_14(closure_0);
    } else {
      tmp3 = closure_2_14(arg0, closure_0);
    }
    return tmp3;
  },
};
const merged = Object.assign(obj, obj2);
function S(str) {
  return typeof str === "string";
}
let obj3 = { [forResult]: f90142 };
const obj4 = {
  optional,
  and(arg0) {
    return closure_2_12(closure_0, arg0);
  },
  or(arg0) {
    return closure_2_13(closure_0, arg0);
  },
  select(arg0) {
    let tmp3;
    if (undefined === arg0) {
      tmp3 = closure_2_14(closure_0);
    } else {
      tmp3 = closure_2_14(arg0, closure_0);
    }
    return tmp3;
  },
};
const obj5 = { startsWith, endsWith, minLength, maxLength, includes, regex };
class B {
  constructor(arg0, arg1) {
    const f90142 = () => {
      let obj = {
        match(arg0) {
          const obj = { matched: Boolean(closure_1_0(arg0)) };
          return obj;
        },
      };
      return obj;
    };
    closure_0 = arg0;
    let closure_1 = arg1;
    const f90156 = (num) => {
      let tmp = typeof num === "number";
      if (typeof num === "number") {
        tmp = f90156 <= num;
      }
      if (tmp) {
        tmp = closure_1_1 >= num;
      }
      return tmp;
    };
    return { [closure_1_1]: f90142 };
  }
}
class I {
  constructor(arg0) {
    const f90142 = () => {
      let obj = {
        match(arg0) {
          const obj = { matched: Boolean(closure_1_0(arg0)) };
          return obj;
        },
      };
      return obj;
    };
    closure_0 = arg0;
    const f90157 = (num) => {
      let tmp = typeof num === "number";
      if (typeof num === "number") {
        tmp = num < f90157;
      }
      return tmp;
    };
    return { [closure_1_1]: f90142 };
  }
}
class E {
  constructor(arg0) {
    const f90142 = () => {
      let obj = {
        match(arg0) {
          const obj = { matched: Boolean(closure_1_0(arg0)) };
          return obj;
        },
      };
      return obj;
    };
    closure_0 = arg0;
    const f90158 = (num) => {
      let tmp = typeof num === "number";
      if (typeof num === "number") {
        tmp = num > f90158;
      }
      return tmp;
    };
    return { [closure_1_1]: f90142 };
  }
}
class K {
  constructor(arg0) {
    const f90142 = () => {
      let obj = {
        match(arg0) {
          const obj = { matched: Boolean(closure_1_0(arg0)) };
          return obj;
        },
      };
      return obj;
    };
    closure_0 = arg0;
    const f90159 = (num) => {
      let tmp = typeof num === "number";
      if (typeof num === "number") {
        tmp = num <= f90159;
      }
      return tmp;
    };
    return { [closure_1_1]: f90142 };
  }
}
class T {
  constructor(arg0) {
    const f90142 = () => {
      let obj = {
        match(arg0) {
          const obj = { matched: Boolean(closure_1_0(arg0)) };
          return obj;
        },
      };
      return obj;
    };
    closure_0 = arg0;
    const f90160 = (num) => {
      let tmp = typeof num === "number";
      if (typeof num === "number") {
        tmp = num >= f90160;
      }
      return tmp;
    };
    return { [closure_1_1]: f90142 };
  }
}
const fn7 = function k() {
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  const f901612 = (num) => {
    let isIntegerResult = typeof num === "number";
    if (typeof num === "number") {
      const _Number = Number;
      isIntegerResult = Number.isInteger(num);
    }
    return isIntegerResult;
  };
  const f90161 = f901612;
  return { [closure_1_1]: f90142 };
};
class P {
  constructor() {
    const f90142 = () => {
      let obj = {
        match(arg0) {
          const obj = { matched: Boolean(closure_1_0(arg0)) };
          return obj;
        },
      };
      return obj;
    };
    const f901622 = (num) => {
      let isFiniteResult = typeof num === "number";
      if (typeof num === "number") {
        const _Number = Number;
        isFiniteResult = Number.isFinite(num);
      }
      return isFiniteResult;
    };
    const f90162 = f901622;
    return { [closure_1_1]: f90142 };
  }
}
const fn8 = function _() {
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  const f901632 = (num) => {
    let tmp = typeof num === "number";
    if (typeof num === "number") {
      tmp = num > 0;
    }
    return tmp;
  };
  const f90163 = f901632;
  return { [closure_1_1]: f90142 };
};
class M {
  constructor() {
    const f90142 = () => {
      let obj = {
        match(arg0) {
          const obj = { matched: Boolean(closure_1_0(arg0)) };
          return obj;
        },
      };
      return obj;
    };
    const f901642 = (num) => {
      let tmp = typeof num === "number";
      if (typeof num === "number") {
        tmp = num < 0;
      }
      return tmp;
    };
    const f90164 = f901642;
    return { [closure_1_1]: f90142 };
  }
}
function w(num) {
  return typeof num === "number";
}
let obj6 = { [forResult]: f90142 };
const assign2 = Object.assign;
const obj7 = {
  optional,
  and(arg0) {
    return closure_2_12(closure_0, arg0);
  },
  or(arg0) {
    return closure_2_13(closure_0, arg0);
  },
  select(arg0) {
    let tmp3;
    if (undefined === arg0) {
      tmp3 = closure_2_14(closure_0);
    } else {
      tmp3 = closure_2_14(arg0, closure_0);
    }
    return tmp3;
  },
};
const obj8 = assign(Object.assign(obj3, obj4), obj5);
const obj9 = { between, lt, gt, lte, gte, int, finite, positive, negative };
class N {
  constructor(arg0, arg1) {
    const f90142 = () => {
      let obj = {
        match(arg0) {
          const obj = { matched: Boolean(closure_1_0(arg0)) };
          return obj;
        },
      };
      return obj;
    };
    closure_0 = arg0;
    let closure_1 = arg1;
    const f90174 = (arg0) => {
      let tmp = typeof arg0 === "bigint";
      if (typeof arg0 === "bigint") {
        tmp = f90174 <= arg0;
      }
      if (tmp) {
        tmp = closure_1_1 >= arg0;
      }
      return tmp;
    };
    return { [closure_1_1]: f90142 };
  }
}
const fn9 = function z(arg0) {
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  closure_0 = arg0;
  const f90175 = (arg0) => {
    let tmp = typeof arg0 === "bigint";
    if (typeof arg0 === "bigint") {
      tmp = arg0 < f90175;
    }
    return tmp;
  };
  return { [closure_1_1]: f90142 };
};
class L {
  constructor(arg0) {
    const f90142 = () => {
      let obj = {
        match(arg0) {
          const obj = { matched: Boolean(closure_1_0(arg0)) };
          return obj;
        },
      };
      return obj;
    };
    closure_0 = arg0;
    const f90176 = (arg0) => {
      let tmp = typeof arg0 === "bigint";
      if (typeof arg0 === "bigint") {
        tmp = arg0 > f90176;
      }
      return tmp;
    };
    return { [closure_1_1]: f90142 };
  }
}
class R {
  constructor(arg0) {
    const f90142 = () => {
      let obj = {
        match(arg0) {
          const obj = { matched: Boolean(closure_1_0(arg0)) };
          return obj;
        },
      };
      return obj;
    };
    closure_0 = arg0;
    const f90177 = (arg0) => {
      let tmp = typeof arg0 === "bigint";
      if (typeof arg0 === "bigint") {
        tmp = arg0 <= f90177;
      }
      return tmp;
    };
    return { [closure_1_1]: f90142 };
  }
}
class U {
  constructor(arg0) {
    const f90142 = () => {
      let obj = {
        match(arg0) {
          const obj = { matched: Boolean(closure_1_0(arg0)) };
          return obj;
        },
      };
      return obj;
    };
    closure_0 = arg0;
    const f90178 = (arg0) => {
      let tmp = typeof arg0 === "bigint";
      if (typeof arg0 === "bigint") {
        tmp = arg0 >= f90178;
      }
      return tmp;
    };
    return { [closure_1_1]: f90142 };
  }
}
class C {
  constructor() {
    const f90142 = () => {
      let obj = {
        match(arg0) {
          const obj = { matched: Boolean(closure_1_0(arg0)) };
          return obj;
        },
      };
      return obj;
    };
    const f901792 = (arg0) => {
      let tmp = typeof arg0 === "bigint";
      if (typeof arg0 === "bigint") {
        tmp = arg0 > 0;
      }
      return tmp;
    };
    const f90179 = f901792;
    return { [closure_1_1]: f90142 };
  }
}
class F {
  constructor() {
    const f90142 = () => {
      let obj = {
        match(arg0) {
          const obj = { matched: Boolean(closure_1_0(arg0)) };
          return obj;
        },
      };
      return obj;
    };
    const f901802 = (arg0) => {
      let tmp = typeof arg0 === "bigint";
      if (typeof arg0 === "bigint") {
        tmp = arg0 < 0;
      }
      return tmp;
    };
    const f90180 = f901802;
    return { [closure_1_1]: f90142 };
  }
}
function j(arg0) {
  return typeof arg0 === "bigint";
}
const f34046 = (flag) => typeof flag === "boolean";
const obj10 = { [forResult]: f90142 };
const obj11 = {
  optional,
  and(arg0) {
    return closure_2_12(closure_0, arg0);
  },
  or(arg0) {
    return closure_2_13(closure_0, arg0);
  },
  select(arg0) {
    let tmp3;
    if (undefined === arg0) {
      tmp3 = closure_2_14(closure_0);
    } else {
      tmp3 = closure_2_14(arg0, closure_0);
    }
    return tmp3;
  },
};
const obj13 = { [forResult]: f90142 };
const assign2Result = assign2(Object.assign(obj6, obj7), obj9);
const obj12 = { between: between2, lt: lt2, gt: gt2, lte: lte2, gte: gte2, positive: positive2, negative: negative2 };
const obj14 = {
  optional,
  and(arg0) {
    return closure_2_12(closure_0, arg0);
  },
  or(arg0) {
    return closure_2_13(closure_0, arg0);
  },
  select(arg0) {
    let tmp3;
    if (undefined === arg0) {
      tmp3 = closure_2_14(closure_0);
    } else {
      tmp3 = closure_2_14(arg0, closure_0);
    }
    return tmp3;
  },
};
const merged1 = Object.assign(Object.assign(obj10, obj11), obj12);
const f34047 = (arg0) => typeof arg0 === "symbol";
const obj15 = { [forResult]: f90142 };
const obj16 = {
  optional,
  and(arg0) {
    return closure_2_12(closure_0, arg0);
  },
  or(arg0) {
    return closure_2_13(closure_0, arg0);
  },
  select(arg0) {
    let tmp3;
    if (undefined === arg0) {
      tmp3 = closure_2_14(closure_0);
    } else {
      tmp3 = closure_2_14(arg0, closure_0);
    }
    return tmp3;
  },
};
const merged2 = Object.assign(obj13, obj14);
const f34048 = (arg0) => null == arg0;
const obj17 = { [forResult]: f90142 };
const obj34 = {
  optional,
  and(arg0) {
    return closure_2_12(closure_0, arg0);
  },
  or(arg0) {
    return closure_2_13(closure_0, arg0);
  },
  select(arg0) {
    let tmp3;
    if (undefined === arg0) {
      tmp3 = closure_2_14(closure_0);
    } else {
      tmp3 = closure_2_14(arg0, closure_0);
    }
    return tmp3;
  },
};
const merged3 = Object.assign(obj15, obj16);
const merged4 = Object.assign(obj17, obj34);
const merged5 = Object.assign({
  matcher: null,
  optional: null,
  array: null,
  set: null,
  map: null,
  intersection: null,
  union: null,
  not: null,
  when: null,
  select: null,
  any: null,
  _: null,
  string: null,
  between: null,
  lt: null,
  gt: null,
  lte: null,
  gte: null,
  int: null,
  finite: null,
  positive: null,
  negative: null,
  number: null,
  betweenBigInt: null,
  ltBigInt: null,
  gtBigInt: null,
  lteBigInt: null,
  gteBigInt: null,
  positiveBigInt: null,
  negativeBigInt: null,
  bigint: null,
  boolean: null,
  symbol: null,
  nullish: null,
  instanceOf: null,
  shape: null,
});
merged5[0] = forResult;
merged5[1] = function v(arg0) {
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90139 = () => {
    let obj = {
      match(arg0) {
        let obj3;
        const obj = {};
        if (undefined === arg0) {
          const arr = closure_2_7(closure_1_0);
          const item = arr.forEach((item) => {
            obj[item] = undefined;
          });
          obj3 = { matched: true, selections: obj };
          const obj2 = { matched: true, selections: obj };
        } else {
          obj3 = {
            matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
              obj[arg0] = arg1;
            }),
            selections: obj,
          };
        }
        return obj3;
      },
      getSelectionKeys() {
        return closure_2_7(closure_1_0);
      },
      matcherType: "optional",
    };
    return obj;
  };
  closure_0 = arg0;
  const obj = { [closure_1]: f90139 };
  const obj2 = {
    optional,
    and(arg0) {
      return closure_2_12(closure_0, arg0);
    },
    or(arg0) {
      return closure_2_13(closure_0, arg0);
    },
    select(arg0) {
      let tmp3;
      if (undefined === arg0) {
        tmp3 = closure_2_14(closure_0);
      } else {
        tmp3 = closure_2_14(arg0, closure_0);
      }
      return tmp3;
    },
  };
  return Object.assign(obj, obj2);
};
merged5[2] = function array() {
  function optional() {
    function optional() {
      const f90139 = () => {
        let obj = {
          match(arg0) {
            let obj3;
            const obj = {};
            if (undefined === arg0) {
              const arr = closure_2_7(closure_1_0);
              const item = arr.forEach((item) => {
                obj[item] = undefined;
              });
              obj3 = { matched: true, selections: obj };
              const obj2 = { matched: true, selections: obj };
            } else {
              obj3 = {
                matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                  obj[arg0] = arg1;
                }),
                selections: obj,
              };
            }
            return obj3;
          },
          getSelectionKeys() {
            return closure_2_7(closure_1_0);
          },
          matcherType: "optional",
        };
        return obj;
      };
      const obj = { [closure_2_1]: f90139 };
      const obj2 = {
        optional,
        and(arg0) {
          return closure_2_12(closure_0, arg0);
        },
        or(arg0) {
          return closure_2_13(closure_0, arg0);
        },
        select(arg0) {
          let tmp3;
          if (undefined === arg0) {
            tmp3 = closure_2_14(closure_0);
          } else {
            tmp3 = closure_2_14(arg0, closure_0);
          }
          return tmp3;
        },
      };
      return Object.assign(obj, obj2);
    }
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const f136847 = () => {
      const fn = function t() {
        return globalThis.regeneratorRuntime.wrap((next) => {
          next = next.next;
          next.prev = next;
          while (0 !== next) {
            return next.stop();
          }
          next.next = 2;
          obj = {};
          obj[closure_3_2] = true;
          return Object.assign(fn, obj);
        }, fn);
      };
      return globalThis.regeneratorRuntime.mark(fn)();
    };
    let obj = { [closure_2_1]: f90139 };
    let obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    let merged = Object.assign(obj, obj2);
    let obj3 = { [Symbol.iterator]: f136847 };
    let obj4 = { optional, select };
    return Object.assign(Object.assign(merged, obj3), obj4);
  }
  function select(arg0) {
    let tmp3;
    const f136847 = () => {
      const fn = function t() {
        return globalThis.regeneratorRuntime.wrap((next) => {
          next = next.next;
          next.prev = next;
          while (0 !== next) {
            return next.stop();
          }
          next.next = 2;
          obj = {};
          obj[closure_3_2] = true;
          return Object.assign(fn, obj);
        }, fn);
      };
      return globalThis.regeneratorRuntime.mark(fn)();
    };
    if (undefined === arg0) {
      tmp3 = closure_2_14(closure_1_0);
    } else {
      tmp3 = closure_2_14(arg0, closure_1_0);
    }
    let closure_0 = tmp3;
    let obj = { [Symbol.iterator]: f136847 };
    let obj2 = { optional, select };
    return Object.assign(Object.assign(tmp3, obj), obj2);
  }
  const f136847 = () => {
    const fn = function t() {
      return globalThis.regeneratorRuntime.wrap((next) => {
        next = next.next;
        next.prev = next;
        while (0 !== next) {
          return next.stop();
        }
        next.next = 2;
        obj = {};
        obj[closure_3_2] = true;
        return Object.assign(fn, obj);
      }, fn);
    };
    return globalThis.regeneratorRuntime.mark(fn)();
  };
  const slice = [].slice;
  closure_0 = slice.call(arguments);
  let obj = {
    [closure_1]: () => {
      let obj = {
        match(arr) {
          if (Array.isArray(arr)) {
            if (0 === closure_1_0.length) {
              return { matched: true };
            } else {
              const first = tmp[0];
              const obj2 = {};
              if (0 === arr.length) {
                arr = fn6(first);
                const item = arr.forEach((item) => {
                  obj2[item] = [];
                });
                return { matched: true, selections: obj2 };
              } else {
                function u(arg0, arg1) {
                  const items = obj2[arg0] || [];
                  const items1 = [arg1];
                  obj2[arg0] = items.concat(items1);
                }
                const obj = { matched: arr.every((item) => closure_2_6(first, item, u)), selections: obj2 };
                return obj;
              }
            }
          } else {
            return { matched: false };
          }
        },
        getSelectionKeys() {
          let items;
          if (0 === closure_1_0.length) {
            items = [];
          } else {
            items = fn6(tmp[0]);
          }
          return items;
        },
      };
      return obj;
    },
  };
  let obj2 = { [Symbol.iterator]: f136847 };
  const obj3 = { optional, select };
  return Object.assign(Object.assign(obj, obj2), obj3);
};
merged5[3] = function set() {
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const slice = [].slice;
  closure_0 = slice.call(arguments);
  let obj = {
    [closure_1]: () => {
      let obj = {
        match(size) {
          if (size instanceof Set) {
            const obj = {};
            if (0 === size.size) {
              return { matched: true, selections: obj };
            } else if (0 === closure_1_0.length) {
              return { matched: true };
            } else if (typeof closure_2_10 === "function") {
              const tmp5 = closure_0(size);
              let iter = tmp5();
              let flag = true;
              if (!iter.done) {
                flag = false;
                while (fn5(tmp2, iter.value, tmp)) {
                  let iter2 = tmp5();
                  iter = iter2;
                  flag = true;
                  if (iter2.done) {
                    break;
                  }
                }
              }
              return { matched: flag, selections: obj };
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            return { matched: false };
          }
        },
        getSelectionKeys() {
          let items;
          if (0 === closure_1_0.length) {
            items = [];
          } else {
            items = fn6(tmp[0]);
          }
          return items;
        },
      };
      return obj;
    },
  };
  const obj2 = {
    optional,
    and(arg0) {
      return closure_2_12(closure_0, arg0);
    },
    or(arg0) {
      return closure_2_13(closure_0, arg0);
    },
    select(arg0) {
      let tmp3;
      if (undefined === arg0) {
        tmp3 = closure_2_14(closure_0);
      } else {
        tmp3 = closure_2_14(arg0, closure_0);
      }
      return tmp3;
    },
  };
  return Object.assign(obj, obj2);
};
merged5[4] = function map() {
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const slice = [].slice;
  closure_0 = slice.call(arguments);
  let obj = {
    [closure_1]: () => {
      let obj = {
        match(size) {
          if (size instanceof Map) {
            const obj = {};
            if (0 === size.size) {
              return { matched: true, selections: obj };
            } else {
              const fn = function u(arg0, arg1) {
                const items = obj[arg0] || [];
                const items1 = [arg1];
                obj[arg0] = items.concat(items1);
              };
              if (0 === closure_1_0.length) {
                return { matched: true };
              } else if (1 === closure_1_0.length) {
                let str1;
                const _Error = Error;
                if (null != closure_1_0[0]) {
                  str1 = str.toString();
                }
                const self = this;
                const self2 = this;
                const _Error1 = new _Error(
                  "`P.map` wasn't given enough arguments. Expected (key, value), received " + str1,
                );
                throw _Error1;
              } else if (typeof closure_2_11 === "function") {
                const tmp2 = closure_0(size.entries());
                let iter = tmp2();
                let flag = true;
                if (!iter.done) {
                  while (true) {
                    let value = iter.value;
                    let tmp4 = fn5(tmp9, value[0], fn) && fn5(tmp10, value[1], fn);
                    flag = false;
                    if (!tmp4) {
                      break;
                    } else {
                      let iter2 = tmp2();
                      iter = iter2;
                      flag = true;
                      if (iter2.done) {
                        break;
                      }
                    }
                  }
                }
                return { matched: flag, selections: obj };
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
          } else {
            return { matched: false };
          }
        },
        getSelectionKeys() {
          let items;
          if (0 === closure_1_0.length) {
            items = [];
          } else {
            const items1 = [];
            const concat = items1.concat;
            const tmp3 = fn6(closure_1_0[0]);
            items = concat(tmp3, fn6(closure_1_0[1]));
          }
          return items;
        },
      };
      return obj;
    },
  };
  const obj2 = {
    optional,
    and(arg0) {
      return closure_2_12(closure_0, arg0);
    },
    or(arg0) {
      return closure_2_13(closure_0, arg0);
    },
    select(arg0) {
      let tmp3;
      if (undefined === arg0) {
        tmp3 = closure_2_14(closure_0);
      } else {
        tmp3 = closure_2_14(arg0, closure_0);
      }
      return tmp3;
    },
  };
  return Object.assign(obj, obj2);
};
merged5[5] = fn2;
merged5[6] = fn3;
merged5[7] = function not(arg0) {
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  closure_0 = arg0;
  let obj = {
    [closure_1]: () => {
      let obj = {
        match(arg0) {
          const obj = {
            matched: !fn5(closure_1_0, arg0, () => {}),
          };
          return obj;
        },
        getSelectionKeys() {
          return [];
        },
        matcherType: "not",
      };
      return obj;
    },
  };
  const obj2 = {
    optional,
    and(arg0) {
      return closure_2_12(closure_0, arg0);
    },
    or(arg0) {
      return closure_2_13(closure_0, arg0);
    },
    select(arg0) {
      let tmp3;
      if (undefined === arg0) {
        tmp3 = closure_2_14(closure_0);
      } else {
        tmp3 = closure_2_14(arg0, closure_0);
      }
      return tmp3;
    },
  };
  return Object.assign(obj, obj2);
};
merged5[8] = function d(arg0) {
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  closure_0 = arg0;
  return { [closure_1_1]: f90142 };
};
merged5[9] = fn4;
merged5[10] = merged;
merged5[11] = merged;
merged5[12] = obj8;
merged5[13] = B;
merged5[14] = I;
merged5[15] = E;
merged5[16] = K;
merged5[17] = T;
merged5[18] = fn7;
merged5[19] = P;
merged5[20] = fn8;
merged5[21] = M;
merged5[22] = assign2Result;
merged5[23] = N;
merged5[24] = fn9;
merged5[25] = L;
merged5[26] = R;
merged5[27] = U;
merged5[28] = C;
merged5[29] = F;
merged5[30] = merged1;
merged5[31] = merged2;
merged5[32] = merged3;
merged5[33] = merged4;
merged5[34] = function instanceOf(Value) {
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  closure_0 = Value;
  const f136869 = (arg0) => arg0 instanceof f136869;
  const obj = { [closure_1]: f90142 };
  const obj2 = {
    optional,
    and(arg0) {
      return closure_2_12(closure_0, arg0);
    },
    or(arg0) {
      return closure_2_13(closure_0, arg0);
    },
    select(arg0) {
      let tmp3;
      if (undefined === arg0) {
        tmp3 = closure_2_14(closure_0);
      } else {
        tmp3 = closure_2_14(arg0, closure_0);
      }
      return tmp3;
    },
  };
  return Object.assign(obj, obj2);
};
merged5[35] = function shape(size) {
  function optional() {
    const f90139 = () => {
      let obj = {
        match(arg0) {
          let obj3;
          const obj = {};
          if (undefined === arg0) {
            const arr = closure_2_7(closure_1_0);
            const item = arr.forEach((item) => {
              obj[item] = undefined;
            });
            obj3 = { matched: true, selections: obj };
            const obj2 = { matched: true, selections: obj };
          } else {
            obj3 = {
              matched: closure_2_6(closure_1_0, arg0, function r(arg0, arg1) {
                obj[arg0] = arg1;
              }),
              selections: obj,
            };
          }
          return obj3;
        },
        getSelectionKeys() {
          return closure_2_7(closure_1_0);
        },
        matcherType: "optional",
      };
      return obj;
    };
    const obj = { [closure_2_1]: f90139 };
    const obj2 = {
      optional,
      and(arg0) {
        return closure_2_12(closure_0, arg0);
      },
      or(arg0) {
        return closure_2_13(closure_0, arg0);
      },
      select(arg0) {
        let tmp3;
        if (undefined === arg0) {
          tmp3 = closure_2_14(closure_0);
        } else {
          tmp3 = closure_2_14(arg0, closure_0);
        }
        return tmp3;
      },
    };
    return Object.assign(obj, obj2);
  }
  const f90142 = () => {
    let obj = {
      match(arg0) {
        const obj = { matched: Boolean(closure_1_0(arg0)) };
        return obj;
      },
    };
    return obj;
  };
  closure_0 = fn(size);
  const obj = { [closure_1]: f90142 };
  const obj2 = {
    optional,
    and(arg0) {
      return closure_2_12(closure_0, arg0);
    },
    or(arg0) {
      return closure_2_13(closure_0, arg0);
    },
    select(arg0) {
      let tmp3;
      if (undefined === arg0) {
        tmp3 = closure_2_14(closure_0);
      } else {
        tmp3 = closure_2_14(arg0, closure_0);
      }
      return tmp3;
    },
  };
  return Object.assign(obj, obj2);
};
let closure_31 = { matched: false, value: "a" };
class n {
  constructor(arg0, arg1) {}
}
const prototype = n.prototype;
prototype.with = function () {
  let tmp6;
  const self = this;
  const slice = [].slice;
  const callResult = slice.call(arguments);
  if (self.state.matched) {
    return self;
  } else {
    const items = [callResult[0]];
    if (3 === callResult.length) {
      let tmp2;
      if (typeof callResult[1] === "function") {
        items.push(callResult[0]);
        tmp2 = callResult[1];
      }
      let c1 = false;
      const obj = {};
      function s(arg0, arg1) {
        c1 = true;
        obj[arg0] = arg1;
      }
      if (items.some((item) => closure_2_6(item, self.input, s))) {
        let input;
        if (tmp2) {
          const _Boolean = Boolean;
          const input2 = self.input;
          Object.create(n.prototype);
          return { input: input2, state: tmp6 };
        }
        const tmp7 = c1;
        if (tmp7) {
          let tmp8 = obj;
          if (c3 in obj) {
            tmp8 = obj[c3];
          }
          input = tmp8;
        } else {
          input = self.input;
        }
        tmp6 = { matched: true, value: tmp(input, self.input) };
        const obj6 = { matched: true, value: tmp(input, self.input) };
      }
      tmp6 = closure_31;
    }
    if (callResult.length > 2) {
      const push = items.push;
      push.apply(items, callResult.slice(1, callResult.length - 1));
    }
  }
};
prototype.when = function (fn, fn2) {
  const self = this;
  if (this.state.matched) {
    return self;
  } else {
    let tmp4;
    const _Boolean = Boolean;
    const input = self.input;
    if (Boolean(fn(self.input))) {
      tmp4 = { matched: true, value: fn2(self.input, self.input) };
      const obj = { matched: true, value: fn2(self.input, self.input) };
    } else {
      tmp4 = closure_31;
    }
    Object.create(n.prototype);
    return { input, state: tmp4 };
  }
};
prototype.otherwise = function (fn) {
  let value;
  const self = this;
  if (this.state.matched) {
    value = self.state.value;
  } else {
    value = fn(self.input);
  }
  return value;
};
prototype.exhaustive = function () {
  return this.run();
};
prototype.run = function () {
  const self = this;
  if (this.state.matched) {
    return self.state.value;
  } else {
    let input;
    try {
      const _JSON = JSON;
      input = JSON.stringify(self.input);
    } catch (err) {
      input = self.input;
    }
    const _Error = Error;
    const self2 = this;
    const self3 = this;
    const error = new Error("Pattern matching error: no pattern matches value " + input);
    throw error;
  }
};
prototype.returnType = function () {
  return this;
};
const P_export = merged5;
const match_export = (input) => {
  if (typeof n === "function") {
    return { input, state: tmp };
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};

export { P_export as P };
export const Pattern = merged5;
export { isMatching };
export { match_export as match };
