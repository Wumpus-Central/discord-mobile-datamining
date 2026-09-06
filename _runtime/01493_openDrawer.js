// _runtime/01493_openDrawer.js
import nanoid from "01492_nanoid.js";
import TabActions from "01494_TabActions.js";

const DrawerActions = {};
let merged = Object.assign(TabActions.TabActions);
DrawerActions.openDrawer = function openDrawer() {
  return { type: "OPEN_DRAWER" };
};
DrawerActions.closeDrawer = function closeDrawer() {
  return { type: "CLOSE_DRAWER" };
};
DrawerActions.toggleDrawer = function toggleDrawer() {
  return { type: "TOGGLE_DRAWER" };
};

export { DrawerActions };
export const DrawerRouter = function DrawerRouter(defaultStatus) {
  let str = defaultStatus.defaultStatus;
  if (str === undefined) {
    str = "closed";
  }
  let merged = Object.assign(defaultStatus, Object.assign({ defaultStatus: 0 }));
  let obj = str(1495);
  const SwitchRouterResult = obj.SwitchRouter(merged);
  dependencyMap = SwitchRouterResult;
  function isDrawerInHistory(arg0) {}
  function addDrawerToHistory(arg0) {}
  function removeDrawerFromHistory(arg0) {}
  function closeDrawer(history) {
    str = "open";
    if ("open" === str) {
      if (typeof addDrawerToHistory === "function") {
        if (typeof isDrawerInHistory === "function") {
          const history2 = history.history;
          let someResult;
          if (history2 != null) {
            someResult = history2.some((type) => "drawer" === type.type);
          }
          let tmp16 = history;
          if (!Boolean(someResult)) {
            let obj = {};
            const merged = Object.assign(history);
            const items = [];
            if (tmp) {
              str = "closed";
            }
            obj = { type: "drawer", status: str };
            items[HermesBuiltin.arraySpread(history.history, 0)] = obj;
            obj.history = items;
            tmp16 = obj;
            const arraySpreadResult = HermesBuiltin.arraySpread(history.history, 0);
          }
          let tmp7 = tmp16;
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
        if (history != null) {
          someResult1 = history.some((type) => "drawer" === type.type);
        }
        tmp7 = history;
        if (Boolean(someResult1)) {
          obj = {};
          const merged1 = Object.assign(history);
          history = history.history;
          obj.history = history.filter((type) => "drawer" !== type.type);
          tmp7 = obj;
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
    return tmp7;
  }
  obj = {};
  let merged1 = Object.assign(SwitchRouterResult);
  obj.type = "drawer";
  obj.getInitialState = function getInitialState(routeNames) {
    let obj = {};
    obj = {
      routeNames: routeNames.routeNames,
      routeParamList: routeNames.routeParamList,
      routeGetIdList: routeNames.routeGetIdList,
    };
    const merged = Object.assign(_undefined.getInitialState(obj));
    obj.default = str;
    obj.stale = false;
    obj.type = "drawer";
    obj.key = "drawer-" + nanoid.nanoid();
    return obj;
  };
  obj.getRehydratedState = function getRehydratedState(stale, arg1) {
    if (false === stale.stale) {
      return stale;
    } else {
      let obj = {};
      obj = { routeNames: tmp, routeParamList: tmp2, routeGetIdList: tmp3 };
      const merged = Object.assign(_undefined.getRehydratedState(stale, obj));
      obj.default = str;
      obj.type = "drawer";
      const _HermesInternal = HermesInternal;
      obj.key = "drawer-" + nanoid.nanoid();
      if (typeof isDrawerInHistory === "function") {
        let history = stale.history;
        let someResult;
        if (history != null) {
          someResult = history.some((type) => "drawer" === type.type);
        }
        let tmp6 = obj;
        if (Boolean(someResult)) {
          if (typeof removeDrawerFromHistory === "function") {
            if (typeof tmp28 === "function") {
              const history2 = obj.history;
              let someResult1;
              if (history2 != null) {
                someResult1 = history2.some((type) => "drawer" === type.type);
              }
              let tmp9 = obj;
              if (Boolean(someResult1)) {
                obj = {};
                const merged1 = Object.assign(obj);
                history = obj.history;
                obj.history = history.filter((type) => "drawer" !== type.type);
                tmp9 = obj;
              }
              if (typeof addDrawerToHistory === "function") {
                if (typeof tmp28 === "function") {
                  const history3 = tmp9.history;
                  let someResult2;
                  if (history3 != null) {
                    someResult2 = history3.some((type) => "drawer" === type.type);
                  }
                  let tmp15 = tmp9;
                  if (!Boolean(someResult2)) {
                    const obj1 = {};
                    const merged2 = Object.assign(tmp9);
                    const items = [];
                    str = "open";
                    if ("open" === tmp24) {
                      str = "closed";
                    }
                    const obj2 = { type: "drawer", status: str };
                    items[HermesBuiltin.arraySpread(tmp9.history, 0)] = obj2;
                    obj1.history = items;
                    tmp15 = obj1;
                    const arraySpreadResult = HermesBuiltin.arraySpread(tmp9.history, 0);
                  }
                  tmp6 = tmp15;
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
        return tmp6;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      tmp24 = str;
    }
  };
  obj.getStateForRouteFocus = function getStateForRouteFocus(arg0, arg1) {
    return closeDrawer(_undefined.getStateForRouteFocus(arg0, arg1));
  };
  obj.getStateForAction = function getStateForAction(history, type, arg2) {
    type = type.type;
    if ("OPEN_DRAWER" === type) {
      let str2 = "open";
      if ("open" === str) {
        if (typeof removeDrawerFromHistory === "function") {
          if (typeof isDrawerInHistory === "function") {
            const history7 = history.history;
            let someResult;
            if (history7 != null) {
              someResult = history7.some((type) => "drawer" === type.type);
            }
            let tmp57 = history;
            if (Boolean(someResult)) {
              let obj = {};
              const merged = Object.assign(history);
              history = history.history;
              obj.history = history.filter((type) => "drawer" !== type.type);
              tmp57 = obj;
            }
            let tmp46 = tmp57;
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
          if (history6 != null) {
            someResult1 = history6.some((type) => "drawer" === type.type);
          }
          tmp46 = history;
          if (!Boolean(someResult1)) {
            obj = {};
            const merged1 = Object.assign(history);
            const items = [];
            let arraySpreadResult = HermesBuiltin.arraySpread(history.history, 0);
            if (tmp40) {
              str2 = "closed";
            }
            const obj1 = { type: "drawer", status: str2 };
            items[arraySpreadResult] = obj1;
            obj.history = items;
            tmp46 = obj;
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      return tmp46;
    } else if ("CLOSE_DRAWER" === type) {
      return closeDrawer(history);
    } else if ("TOGGLE_DRAWER" === type) {
      if (typeof isDrawerInHistory === "function") {
        const history3 = history.history;
        let someResult2;
        if (history3 != null) {
          someResult2 = history3.some((type) => "drawer" === type.type);
        }
        if (Boolean(someResult2)) {
          if (typeof removeDrawerFromHistory === "function") {
            if (typeof tmp19 === "function") {
              const history5 = history.history;
              let someResult3;
              if (history5 != null) {
                someResult3 = history5.some((type) => "drawer" === type.type);
              }
              let tmp34 = history;
              if (Boolean(someResult3)) {
                const obj2 = {};
                const merged2 = Object.assign(history);
                const history1 = history.history;
                obj2.history = history1.filter((type) => "drawer" !== type.type);
                tmp34 = obj2;
              }
              let tmp25 = tmp34;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else if (typeof addDrawerToHistory === "function") {
          if (typeof tmp19 === "function") {
            const history4 = history.history;
            let someResult4;
            if (history4 != null) {
              someResult4 = history4.some((type) => "drawer" === type.type);
            }
            tmp25 = history;
            if (!Boolean(someResult4)) {
              const obj3 = {};
              const merged3 = Object.assign(history);
              const items1 = [];
              str = "open";
              arraySpreadResult = HermesBuiltin.arraySpread(history.history, 0);
              if ("open" === str) {
                str = "closed";
              }
              const obj4 = { type: "drawer", status: str };
              items1[arraySpreadResult] = obj4;
              obj3.history = items1;
              tmp25 = obj3;
            }
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        return tmp25;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      if ("JUMP_TO" !== type) {
        if ("NAVIGATE" !== type) {
          if ("NAVIGATE_DEPRECATED" !== type) {
            if ("GO_BACK" === type) {
              if (typeof isDrawerInHistory === "function") {
                history = history.history;
                let someResult5;
                if (history != null) {
                  someResult5 = history.some((type) => "drawer" === type.type);
                }
                if (Boolean(someResult5)) {
                  if (typeof removeDrawerFromHistory === "function") {
                    if (typeof tmp2 === "function") {
                      let history2 = history.history;
                      let someResult6;
                      if (history2 != null) {
                        someResult6 = history2.some((type) => "drawer" === type.type);
                      }
                      let tmp10 = history;
                      if (Boolean(someResult6)) {
                        obj = {};
                        const merged4 = Object.assign(history);
                        history2 = history.history;
                        obj.history = history2.filter((type) => "drawer" !== type.type);
                        tmp10 = obj;
                      }
                      let stateForAction = tmp10;
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
      let tmp17 = stateForAction1;
      if (null != stateForAction1) {
        tmp17 = stateForAction1;
        if (false === stateForAction1.stale) {
          tmp17 = stateForAction1;
          if (stateForAction1.index !== history.index) {
            tmp17 = closeDrawer(stateForAction1);
          }
        }
      }
      return tmp17;
    }
  };
  obj.actionCreators = isDrawerInHistory;
  return obj;
};
