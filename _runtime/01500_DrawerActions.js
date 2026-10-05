// === Module 1500: DrawerActions ===

// Module 1500 (DrawerActions)
import nanoid from "nanoid" /* 1499 */;
import TabActions from "TabActions" /* 1501 */;

let dependencyMap;

const DrawerActions = {
  openDrawer() {
    return { type: "OPEN_DRAWER" };
  },
  closeDrawer() {
    return { type: "CLOSE_DRAWER" };
  },
  toggleDrawer() {
    return { type: "TOGGLE_DRAWER" };
  }
};
let merged = Object.assign(TabActions.TabActions);

export { DrawerActions };
export const DrawerRouter = function DrawerRouter(defaultStatus) {
  let _undefined;
  let str = defaultStatus.defaultStatus;
  if (str === undefined) {
    str = "closed";
  }
  let merged = Object.assign(defaultStatus, Object.assign({ defaultStatus: 0 }));
  let obj = str(1502);
  const SwitchRouterResult = obj.SwitchRouter(merged);
  dependencyMap = SwitchRouterResult;
  function isDrawerInHistory(arg0) {

  }
  function addDrawerToHistory(arg0) {

  }
  function removeDrawerFromHistory(arg0) {

  }
  function closeDrawer(history) {
    let history1;
    let items;
    let tmp8;
    str = "open";
    if ("open" === str) {
      if (typeof addDrawerToHistory === "function") {
        if (typeof isDrawerInHistory === "function") {
          const history2 = history.history;
          let someResult;
          const _Boolean2 = Boolean;
          if (history2 != null) {
            someResult = history2.some((type) => "drawer" === type.type);
          }
          let tmp17 = history;
          if (!_Boolean2(someResult)) {
            const obj2 = { history: items };
            const merged = Object.assign(history);
            items = [];
            const arraySpreadResult = HermesBuiltin.arraySpread(items, history.history, 0);
            if ("open" === str) {
              str = "closed";
            }
            const obj3 = { type: "drawer", status: str };
            items[arraySpreadResult] = obj3;
            tmp17 = obj2;
          }
          tmp8 = tmp17;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else if (typeof removeDrawerFromHistory === "function") {
      if (typeof isDrawerInHistory === "function") {
        history = history.history;
        let someResult1;
        const _Boolean = Boolean;
        if (history != null) {
          someResult1 = history.some((type) => "drawer" === type.type);
        }
        tmp8 = history;
        if (_Boolean(someResult1)) {
          const obj = { history: history1.filter((type) => "drawer" !== type.type) };
          const merged1 = Object.assign(history);
          history1 = history.history;
          tmp8 = obj;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    return tmp8;
  }
  let obj2 = {
    type: "drawer",
    getInitialState(routeNames) {
      let obj3;
      const obj = { default: str, stale: false, type: "drawer", key: "drawer-" + obj3.nanoid() };
      const obj2 = { routeNames: routeNames.routeNames, routeParamList: routeNames.routeParamList, routeGetIdList: routeNames.routeGetIdList };
      const merged = Object.assign(_undefined.getInitialState(obj2));
      obj3 = nanoid;
      return obj;
    },
    getRehydratedState(stale, arg1) {
      let history1;
      let items;
      let obj6;
      if (false === stale.stale) {
        return stale;
      } else {
        const obj2 = { default: str, type: "drawer", key: "drawer-" + obj6.nanoid() };
        const obj3 = { routeNames: tmp2, routeParamList: tmp3, routeGetIdList: tmp4 };
        const merged = Object.assign(_undefined.getRehydratedState(stale, obj3));
        const _HermesInternal = HermesInternal;
        obj6 = nanoid;
        const tmp25 = str;
        if (typeof isDrawerInHistory === "function") {
          const history = stale.history;
          let someResult;
          const _Boolean = Boolean;
          if (history != null) {
            someResult = history.some((type) => "drawer" === type.type);
          }
          let tmp7 = obj2;
          if (_Boolean(someResult)) {
            if (typeof removeDrawerFromHistory === "function") {
              if (typeof isDrawerInHistory === "function") {
                const history2 = obj2.history;
                let someResult1;
                const _Boolean2 = Boolean;
                if (history2 != null) {
                  someResult1 = history2.some((type) => "drawer" === type.type);
                }
                let tmp10 = obj2;
                if (_Boolean2(someResult1)) {
                  const obj = { history: history1.filter((type) => "drawer" !== type.type) };
                  const merged1 = Object.assign(obj2);
                  history1 = obj2.history;
                  tmp10 = obj;
                }
                if (typeof addDrawerToHistory === "function") {
                  if (typeof isDrawerInHistory === "function") {
                    const history3 = tmp10.history;
                    let someResult2;
                    const _Boolean3 = Boolean;
                    if (history3 != null) {
                      someResult2 = history3.some((type) => "drawer" === type.type);
                    }
                    let tmp16 = tmp10;
                    if (!_Boolean3(someResult2)) {
                      const obj4 = { history: items };
                      const merged2 = Object.assign(tmp10);
                      items = [];
                      str = "open";
                      const arraySpreadResult = HermesBuiltin.arraySpread(items, tmp10.history, 0);
                      if ("open" === tmp25) {
                        str = "closed";
                      }
                      const obj5 = { type: "drawer", status: str };
                      items[arraySpreadResult] = obj5;
                      tmp16 = obj4;
                    }
                    tmp7 = tmp16;
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          return tmp7;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
    },
    getStateForRouteFocus(arg0, arg1) {
      return closeDrawer(_undefined.getStateForRouteFocus(arg0, arg1));
    },
    getStateForAction(history, type, arg2) {
      let history1;
      let history8;
      let history9;
      let items;
      let items1;
      type = type.type;
      if ("OPEN_DRAWER" === type) {
        let tmp47;
        let str2 = "open";
        if ("open" === str) {
          if (typeof removeDrawerFromHistory === "function") {
            if (typeof isDrawerInHistory === "function") {
              const history7 = history.history;
              let someResult;
              const _Boolean7 = Boolean;
              if (history7 != null) {
                someResult = history7.some((type) => "drawer" === type.type);
              }
              let tmp58 = history;
              if (_Boolean7(someResult)) {
                const obj2 = { history: history1.filter((type) => "drawer" !== type.type) };
                const merged = Object.assign(history);
                history1 = history.history;
                tmp58 = obj2;
              }
              tmp47 = tmp58;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else if (typeof addDrawerToHistory === "function") {
          if (typeof isDrawerInHistory === "function") {
            const history6 = history.history;
            let someResult1;
            const _Boolean6 = Boolean;
            if (history6 != null) {
              someResult1 = history6.some((type) => "drawer" === type.type);
            }
            tmp47 = history;
            if (!_Boolean6(someResult1)) {
              const obj3 = { history: items };
              const merged1 = Object.assign(history);
              items = [];
              const arraySpreadResult = HermesBuiltin.arraySpread(items, history.history, 0);
              if ("open" === str) {
                str2 = "closed";
              }
              const obj4 = { type: "drawer", status: str2 };
              items[arraySpreadResult] = obj4;
              tmp47 = obj3;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        return tmp47;
      } else if ("CLOSE_DRAWER" === type) {
        return closeDrawer(history);
      } else if ("TOGGLE_DRAWER" === type) {
        if (typeof isDrawerInHistory === "function") {
          let tmp26;
          const history3 = history.history;
          let someResult2;
          const _Boolean3 = Boolean;
          if (history3 != null) {
            someResult2 = history3.some((type) => "drawer" === type.type);
          }
          if (_Boolean3(someResult2)) {
            if (typeof removeDrawerFromHistory === "function") {
              if (typeof isDrawerInHistory === "function") {
                const history5 = history.history;
                let someResult3;
                const _Boolean5 = Boolean;
                if (history5 != null) {
                  someResult3 = history5.some((type) => "drawer" === type.type);
                }
                let tmp35 = history;
                if (_Boolean5(someResult3)) {
                  const obj5 = { history: history8.filter((type) => "drawer" !== type.type) };
                  const merged2 = Object.assign(history);
                  history8 = history.history;
                  tmp35 = obj5;
                }
                tmp26 = tmp35;
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else if (typeof addDrawerToHistory === "function") {
            if (typeof isDrawerInHistory === "function") {
              const history4 = history.history;
              let someResult4;
              const _Boolean4 = Boolean;
              if (history4 != null) {
                someResult4 = history4.some((type) => "drawer" === type.type);
              }
              tmp26 = history;
              if (!_Boolean4(someResult4)) {
                const obj6 = { history: items1 };
                const merged3 = Object.assign(history);
                items1 = [];
                str = "open";
                const arraySpreadResult2 = HermesBuiltin.arraySpread(items1, history.history, 0);
                if ("open" === str) {
                  str = "closed";
                }
                const obj7 = { type: "drawer", status: str };
                items1[arraySpreadResult2] = obj7;
                tmp26 = obj6;
              }
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          return tmp26;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        if ("JUMP_TO" !== type) {
          if ("NAVIGATE" !== type) {
            if ("NAVIGATE_DEPRECATED" !== type) {
              if ("GO_BACK" === type) {
                if (typeof isDrawerInHistory === "function") {
                  let stateForAction;
                  history = history.history;
                  let someResult5;
                  const _Boolean = Boolean;
                  if (history != null) {
                    someResult5 = history.some((type) => "drawer" === type.type);
                  }
                  if (_Boolean(someResult5)) {
                    if (typeof removeDrawerFromHistory === "function") {
                      if (typeof tmp3 === "function") {
                        const history2 = history.history;
                        let someResult6;
                        const _Boolean2 = Boolean;
                        if (history2 != null) {
                          someResult6 = history2.some((type) => "drawer" === type.type);
                        }
                        let tmp11 = history;
                        if (_Boolean2(someResult6)) {
                          const obj = { history: history9.filter((type) => "drawer" !== type.type) };
                          const merged4 = Object.assign(history);
                          history9 = history.history;
                          tmp11 = obj;
                        }
                        stateForAction = tmp11;
                      } else {
                        throw new TypeError("Trying to call a non-function");
                      }
                    } else {
                      throw new TypeError("Trying to call a non-function");
                    }
                  } else {
                    stateForAction = _undefined.getStateForAction(history, type, arg2);
                  }
                  return stateForAction;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              } else {
                return _undefined.getStateForAction(history, type, arg2);
              }
            }
          }
        }
        const stateForAction1 = _undefined.getStateForAction(history, type, arg2);
        let tmp18 = stateForAction1;
        if (null != stateForAction1) {
          tmp18 = stateForAction1;
          if (false === stateForAction1.stale) {
            tmp18 = stateForAction1;
            if (stateForAction1.index !== history.index) {
              tmp18 = closeDrawer(stateForAction1);
            }
          }
        }
        return tmp18;
      }
    },
    actionCreators: isDrawerInHistory
  };
  let merged1 = Object.assign(SwitchRouterResult);
  return obj2;
};