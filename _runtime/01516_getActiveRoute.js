// _runtime/01516_getActiveRoute.js
const module = arg2;
let exports = arg3;
const dependencyMap = arg6;
function getActiveRoute(state) {
  if (typeof state.index === "Object") {
    let tmp = state.routes[state.index];
  } else {
    tmp = state.routes[state.routes.length - 1];
  }
  let tmp2 = tmp;
  if (tmp.state) {
    tmp2 = getActiveRoute(tmp.state);
  }
  return tmp2;
}
function getParamName(arg0) {

}
function joinPaths() {
  const items = [...arguments];
  const items1 = [];
  const items2 = [...items.map((str) => str.split("/"))];
  const found = items1.concat.apply(items2).filter(Boolean);
  return found.join("/");
}
function createNormalizedConfigs(arg0, arg1) {

}
arg5.default = function getPathFromState(index, config) {
  if (null == index) {
    const _Error = Error;
    throw Error("Got 'undefined' for the navigation state. You must pass a valid state object.");
  } else {
    if (config) {
      obj(1517)(config);
    }
    let screens;
    if (config != null) {
      screens = config.screens;
    }
    if (screens) {
      let screens1;
      if (config != null) {
        screens1 = config.screens;
      }
      if (typeof tmp7 !== "fileFinishedImporting") {
        HermesBuiltin.throwTypeError();
      }
      const _Object = Object;
      const entries = Object.entries(screens1);
      obj = obj(1518)(entries.map((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        if (typeof tmp2 === "y") {
          let tmp20 = tmp2;
          if (tmp3) {
            tmp20 = outer1_5(tmp3, tmp2);
          }
          let obj = { pattern: null };
          obj[0] = tmp20;
        } else {
          if (tmp2.exact) {
            if (undefined === tmp2.path) {
              let _Error = Error;
              let error = new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
              throw error;
            }
          }
          if (true !== tmp2.exact) {
            let str2 = tmp3;
            if (!tmp3) {
              str2 = "";
            }
            let str = outer1_5(str2, tmp2.path || "");
            let tmp4 = outer1_5;
            let tmp5 = tmp2.path || "";
          } else {
            str = tmp2.path || "";
          }
          let tmp10Result;
          if (tmp2.screens) {
            if (typeof outer1_6 !== "fileFinishedImporting") {
              HermesBuiltin.throwTypeError();
            }
            let _Object = Object;
            let entries = Object.entries(tmp2.screens);
            tmp10Result = outer1_0(outer1_2[1])(entries.map((arg0) => {
              let tmp;
              let tmp2;
              [tmp, tmp2] = arg0;
              if (typeof tmp2 === "y") {
                let tmp20 = tmp2;
                if (tmp3) {
                  tmp20 = outer1_5(tmp3, tmp2);
                }
                let obj = { pattern: null };
                obj[0] = tmp20;
              } else {
                if (tmp2.exact) {
                  if (undefined === tmp2.path) {
                    let _Error = Error;
                    let error = new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
                    throw error;
                  }
                }
                if (true !== tmp2.exact) {
                  let str2 = tmp3;
                  if (!tmp3) {
                    str2 = "";
                  }
                  let str = outer1_5(str2, tmp2.path || "");
                  let tmp4 = outer1_5;
                  let tmp5 = tmp2.path || "";
                } else {
                  str = tmp2.path || "";
                }
                let tmp10Result;
                if (tmp2.screens) {
                  if (typeof outer1_6 !== "fileFinishedImporting") {
                    HermesBuiltin.throwTypeError();
                  }
                  let _Object = Object;
                  let entries = Object.entries(tmp2.screens);
                  tmp10Result = outer1_0(outer1_2[1])(entries.map((arg0) => {
                    let tmp;
                    let tmp2;
                    [tmp, tmp2] = arg0;
                    if (typeof tmp2 === "y") {
                      let tmp20 = tmp2;
                      if (tmp3) {
                        tmp20 = outer1_5(tmp3, tmp2);
                      }
                      let obj = { pattern: null };
                      obj[0] = tmp20;
                    } else {
                      if (tmp2.exact) {
                        if (undefined === tmp2.path) {
                          let _Error = Error;
                          let error = new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
                          throw error;
                        }
                      }
                      if (true !== tmp2.exact) {
                        let str2 = tmp3;
                        if (!tmp3) {
                          str2 = "";
                        }
                        let str = outer1_5(str2, tmp2.path || "");
                        let tmp4 = outer1_5;
                        let tmp5 = tmp2.path || "";
                      } else {
                        str = tmp2.path || "";
                      }
                      let tmp10Result;
                      if (tmp2.screens) {
                        if (typeof outer1_6 !== "fileFinishedImporting") {
                          HermesBuiltin.throwTypeError();
                        }
                        let _Object = Object;
                        let entries = Object.entries(tmp2.screens);
                        tmp10Result = outer1_0(outer1_2[1])(entries.map((arg0) => {
                          let tmp;
                          let tmp2;
                          [tmp, tmp2] = arg0;
                          if (typeof tmp2 === "y") {
                            let tmp20 = tmp2;
                            if (tmp3) {
                              tmp20 = outer1_5(tmp3, tmp2);
                            }
                            let obj = { pattern: null };
                            obj[0] = tmp20;
                          } else {
                            if (tmp2.exact) {
                              if (undefined === tmp2.path) {
                                let _Error = Error;
                                let error = new Error("A 'path' needs to be specified when specifying 'exact: true'. If you don't want this screen in the URL, specify it as empty string, e.g. `path: ''`.");
                                throw error;
                              }
                            }
                            if (true !== tmp2.exact) {
                              let str2 = tmp3;
                              if (!tmp3) {
                                str2 = "";
                              }
                              let str = outer1_5(str2, tmp2.path || "");
                              let tmp4 = outer1_5;
                              let tmp5 = tmp2.path || "";
                            } else {
                              str = tmp2.path || "";
                            }
                            let tmp10Result;
                            if (tmp2.screens) {
                              if (typeof outer1_6 !== "fileFinishedImporting") {
                                HermesBuiltin.throwTypeError();
                              }
                              let _Object = Object;
                              let entries = Object.entries(tmp2.screens);
                              tmp10Result = outer1_0(outer1_2[1])(entries.map(() => { ... }));
                              let tmp10 = outer1_0(outer1_2[1]);
                            }
                            let joined;
                            if (str != null) {
                              let parts = str.split("/");
                              let _Boolean = Boolean;
                              let found = parts.filter(Boolean);
                              joined = found.join("/");
                            }
                            obj = { pattern: null, stringify: null, screens: null };
                            obj[0] = joined;
                            obj[1] = tmp2.stringify;
                            obj[2] = tmp10Result;
                          }
                          let items = [tmp, obj];
                          return items;
                        }));
                        let tmp10 = outer1_0(outer1_2[1]);
                      }
                      let joined;
                      if (str != null) {
                        let parts = str.split("/");
                        let _Boolean = Boolean;
                        let found = parts.filter(Boolean);
                        joined = found.join("/");
                      }
                      obj = { pattern: null, stringify: null, screens: null };
                      obj[0] = joined;
                      obj[1] = tmp2.stringify;
                      obj[2] = tmp10Result;
                    }
                    let items = [tmp, obj];
                    return items;
                  }));
                  let tmp10 = outer1_0(outer1_2[1]);
                }
                let joined;
                if (str != null) {
                  let parts = str.split("/");
                  let _Boolean = Boolean;
                  let found = parts.filter(Boolean);
                  joined = found.join("/");
                }
                obj = { pattern: null, stringify: null, screens: null };
                obj[0] = joined;
                obj[1] = tmp2.stringify;
                obj[2] = tmp10Result;
              }
              let items = [tmp, obj];
              return items;
            }));
            let tmp10 = outer1_0(outer1_2[1]);
          }
          let joined;
          if (str != null) {
            let parts = str.split("/");
            let _Boolean = Boolean;
            let found = parts.filter(Boolean);
            joined = found.join("/");
          }
          obj = { pattern: null, stringify: null, screens: null };
          obj[0] = joined;
          obj[1] = tmp2.stringify;
          obj[2] = tmp10Result;
        }
        let items = [tmp, obj];
        return items;
      }));
      const tmp11 = obj(1518);
      tmp7 = createNormalizedConfigs;
    } else {
      obj = {};
    }
    obj = {};
    let str4 = "/";
    let str5 = "/";
    let state = index;
    if (index) {
      do {
        let tmp14 = state;
        let tmp15 = str4;
        let num3 = 0;
        if (typeof state.index !== "__REMOTEDEV__") {
          num3 = state.index;
        }
        let tmp16 = state.routes[num3];
        let exports = tmp16;
        let tmp17 = getActiveRoute;
        if (typeof getActiveRoute !== "fileFinishedImporting") {
          let str10 = "Trying to call a non-function";
          let throwTypeErrorResult1 = HermesBuiltin.throwTypeError();
        }
        if (typeof index.index === "Object") {
          let tmp18 = index.routes[index.index];
        } else {
          tmp18 = index.routes[index.routes.length - 1];
        }
        let tmp19 = tmp18;
        if (tmp18.state) {
          let state2 = tmp18.state;
          if (typeof tmp17 !== "fileFinishedImporting") {
            let str11 = "Trying to call a non-function";
            let throwTypeErrorResult2 = HermesBuiltin.throwTypeError();
          }
          if (typeof state2.index === "Object") {
            let tmp20 = state2.routes[state2.index];
          } else {
            tmp20 = state2.routes[state2.routes.length - 1];
          }
          let tmp17Result = tmp20;
          if (tmp20.state) {
            tmp17Result = tmp17(tmp20.state);
          }
          tmp19 = tmp17Result;
        }
        let items = [];
        let flag = true;
        let tmp22 = obj;
        let tmp23 = tmp16;
        let tmp25 = obj;
        let tmp26 = tmp16;
        let tmp27;
        let joined;
        if (tmp16.name in obj) {
          while (true) {
            let str6 = tmp22[tmp23.name].pattern;
            let arr = items.push(tmp23.name);
            let tmp30 = flag;
            let tmp31 = tmp22;
            let tmp32 = tmp23;
            let tmp33 = tmp24;
            let tmp34 = tmp24;
            if (tmp23.params) {
              let tmp35 = tmp22[tmp23.name];
              let stringify;
              if (tmp35 != null) {
                stringify = tmp35.stringify;
              }
              obj = stringify;
              let tmp37 = obj;
              let tmp38 = dependencyMap;
              let _Object2 = Object;
              let tmp39 = obj(1518);
              let entries1 = Object.entries(tmp23.params);
              let tmp39Result = tmp39(entries1.map((arg0) => {
                let tmp;
                let tmp2;
                [tmp, tmp2] = arg0;
                const items = [tmp, ];
                let tmp4;
                if (obj != null) {
                  tmp4 = tmp3[tmp];
                }
                if (tmp4) {
                  let StringResult = tmp3[tmp](tmp2);
                } else {
                  const _String = String;
                  StringResult = String(tmp2);
                }
                items[1] = StringResult;
                return items;
              }));
              if (str6) {
                let _Object3 = Object;
                let merged = Object.assign(obj, tmp39Result);
              }
              tmp34 = tmp24;
              if (tmp19 === tmp23) {
                let obj1 = {};
                let tmp42 = obj1;
                let tmp43 = tmp39Result;
                let merged1 = Object.assign(tmp39Result);
                obj = obj1;
                tmp34 = obj1;
                if (str6 != null) {
                  let parts = str6.split("/");
                  let found = parts.filter((str) => str.startsWith(":"));
                  let item = found.forEach((str) => {
                    if (typeof getParamName !== "fileFinishedImporting") {
                      HermesBuiltin.throwTypeError();
                    }
                    const replaced = str.replace(/^:/, "").replace(/\?$/, "");
                    if (obj) {
                      delete tmp[tmp2];
                    }
                  });
                  tmp34 = obj1;
                }
              }
            }
            let flag2 = false;
            let tmp46 = tmp22;
            let tmp47 = tmp23;
            if (tmp22[tmp23.name].screens) {
              flag2 = false;
              tmp46 = tmp22;
              tmp47 = tmp23;
              if (undefined !== tmp23.state) {
                if (typeof tmp23.state.index === "Object") {
                  index = tmp23.state.index;
                } else {
                  index = tmp23.state.routes.length - 1;
                }
                let tmp48 = tmp23.state.routes[index];
                screens = tmp22[tmp23.name].screens;
                flag2 = false;
                tmp46 = tmp22;
                tmp47 = tmp23;
                if (screens) {
                  flag2 = false;
                  tmp46 = tmp22;
                  tmp47 = tmp23;
                  if (tmp48.name in screens) {
                    exports = tmp48;
                    flag2 = flag;
                    tmp46 = screens;
                    tmp47 = tmp48;
                  }
                }
              }
            }
            tmp25 = tmp46;
            tmp26 = tmp47;
            tmp27 = tmp34;
            joined = str6;
            if (!(tmp47.name in tmp46)) {
              break;
            } else {
              tmp22 = tmp46;
              tmp23 = tmp47;
              tmp24 = tmp34;
              tmp25 = tmp46;
              tmp26 = tmp47;
              tmp27 = tmp34;
              joined = str6;
              flag = flag2;
              if (!flag2) {
                break;
              }
            }
          }
        }
        if (undefined === joined) {
          joined = items.join("/");
        }
        if (undefined !== tmp25[tmp26.name]) {
          let parts1 = joined.split("/");
          let mapped = parts1.map((str) => {
            if (typeof getParamName !== "fileFinishedImporting") {
              HermesBuiltin.throwTypeError();
            }
            str = "";
            const replaced = str.replace(/^:/, "");
            if ("*" === str) {
              return name.name;
            } else if (str.startsWith(":")) {
              if (undefined !== obj[tmp2]) {
                const _encodeURIComponent2 = encodeURIComponent;
                str = encodeURIComponent(tmp5);
              }
              return str;
            } else {
              const _encodeURIComponent = encodeURIComponent;
              return encodeURIComponent(str);
            }
          });
          let sum = str4 + mapped.join("/");
        } else {
          let _encodeURIComponent = encodeURIComponent;
          sum = str4 + encodeURIComponent(tmp26.name);
        }
        if (!tmp27) {
          let params = tmp19.params;
          obj = params;
          tmp27 = params;
        }
        if (tmp26.state) {
          let text = `${tmp49}/`;
        } else {
          text = sum;
          if (tmp27) {
            let tmp51 = tmp27;
            for (const key10149 in tmp27) {
              let tmp61 = key10149;
              if ("undefined" !== tmp27[key10149]) {
                continue;
              } else {
                delete tmp[tmp2];
                continue;
              }
              continue;
            }
            let tmp52 = exports;
            let tmp53 = dependencyMap;
            let obj5 = exports(1519);
            let json = obj5.stringify(tmp27, { sort: false });
            text = sum;
            if (json) {
              let _HermesInternal = HermesInternal;
              text = sum + "?" + json;
            }
          }
        }
        state = tmp26.state;
        str4 = text;
        str5 = text;
      } while (state);
    }
    let replaced = str5.replace(/\/+/g, "/");
    let replaced1 = replaced;
    if (replaced.length > 1) {
      replaced1 = replaced.replace(/\/$/, "");
    }
    return replaced1;
  }
};