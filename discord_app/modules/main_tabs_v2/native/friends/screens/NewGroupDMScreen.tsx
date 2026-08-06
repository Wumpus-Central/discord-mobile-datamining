// discord_app/modules/main_tabs_v2/native/friends/screens/NewGroupDMScreen.tsx
import _slicedToArray from "_slicedToArray";
import performQuery from "performQuery";
import getGroupDMRecipientLimit from "getGroupDMRecipientLimit";
import get_ActivityIndicator from "ACTION_SHEET_HEIGHT_HALF";
import ensureGuildLoaded from "ensureGuildLoaded";
import closure_9 from "performQuery";
import createRTCConnection from "createRTCConnection";
import mergeGuildAvatar from "mergeGuildAvatar";
import { UserRowModes } from "UserRowModes";
import ME from "ME";
import jsxProd from "dispatcher";
import createCacheKey from "createCacheKey";

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_6;
let error;
let map1;
const require = arg1;
function handleOneRecipientInDM() {
  const self = this;
  const apply = _handleOneRecipientInDM.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleOneRecipientInDM() {
  const self = this;
  const tmp = callback2((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    return (function*(arg0, arg1) {
      const table = tmp2;
      const obj5 = callback(outer1_2[13]);
      const obj1 = { recipientIds: null, location: "New Group DM", onBeforeTransition: null };
      obj1[0] = [];
      obj1[2] = callback;
      callback = yield obj5.openPrivateChannel(obj1);
      const obj2 = callback(table[13]);
      callback = yield obj2.addRecipients(callback, closure_0, undefined);
      return arg1;
    })();
  });
  const _handleOneRecipientInDM = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleInviteUsers() {
  const self = this;
  const tmp = callback2((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    const iter = (function*(arg0) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "T", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const callback = tmp2;
              let _slicedToArray = tmp5;
              let arr;
              let dependencyMap;
              if (arr === undefined) {
                const _Array = Array;
                arr = Array.from(outer1_9.getSelectedUsers());
              }
              _slicedToArray = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "PX_8", done: "Array" };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                let obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                if (null != lib) {
                  if (store.getChannelId() !== lib.id) {
                    if (lib.isDM()) {
                      if (1 === arr.length) {
                        c5 = 3;
                        c6 = 1;
                        let obj2 = { value: null, done: false };
                        obj2[0] = callback2(arr, dependencyMap);
                        return obj2;
                      }
                    }
                    const obj13 = arr(4295);
                    c5 = 2;
                    c6 = 1;
                    let obj3 = { value: null, done: false };
                    obj3[0] = obj13.addRecipients(lib.id, arr, undefined, dependencyMap);
                    return obj3;
                  }
                }
                if (null != lib) {
                  if (store.getChannelId() === lib.id) {
                    if (lib.isDM()) {
                      let obj10 = lib(4494);
                      obj10.showGuardCallAlert(callback(function*() {
                        if (dependencyMap === 2) {
                          dependencyMap = 3;
                          HermesBuiltin.throwTypeError();
                        } else if (tmp3 === 3) {
                          if (arg0 === 1) {
                            throw arg1;
                          } else if (arg0 === 2) {
                            let obj = { value: null, done: true };
                            obj[0] = arg1;
                            return obj;
                          } else {
                            return { value: "T", done: null };
                          }
                        } else {
                          try {
                            dependencyMap = 2;
                            if (0 === v0) {
                              if (arg0 === 1) {
                                dependencyMap = 3;
                                throw arg1;
                              } else if (arg0 === 2) {
                                dependencyMap = 3;
                                obj = { value: null, done: true };
                                obj[0] = arg1;
                                return obj;
                              } else {
                                let closure_0 = tmp4;
                                if (1 === v0.length) {
                                  v0 = 2;
                                  dependencyMap = 1;
                                  const obj1 = { value: null, done: false };
                                  obj1[0] = outer1_20(tmp33, dependencyMap);
                                  return obj1;
                                } else {
                                  let obj5 = v0(4295);
                                  v0 = 1;
                                  dependencyMap = 1;
                                  let obj2 = { value: null, done: false };
                                  obj2[0] = obj5.addRecipients(outer1_0.id, tmp33, undefined, dependencyMap);
                                  return obj2;
                                }
                              }
                            } else {
                              if (1 === tmp4) {
                                if (arg0 === 1) {
                                  dependencyMap = 3;
                                  throw arg1;
                                } else if (arg0 === 2) {
                                  dependencyMap = 3;
                                  const obj3 = { value: null, done: true };
                                  obj3[0] = arg1;
                                  return obj3;
                                }
                              } else if (2 === tmp4) {
                                if (arg0 === 1) {
                                  dependencyMap = 3;
                                  throw arg1;
                                } else if (arg0 === 2) {
                                  dependencyMap = 3;
                                  const obj4 = { value: null, done: true };
                                  obj4[0] = arg1;
                                  return obj4;
                                }
                              } else if (arg0 === 1) {
                                dependencyMap = 3;
                                throw arg1;
                              } else if (arg0 === 2) {
                                dependencyMap = 3;
                                obj = { value: null, done: true };
                                obj[0] = arg1;
                                return obj;
                              } else {
                                const tmp8 = v0(9161);
                                const call = tmp8.call;
                                if (typeof call === "unknown") {
                                  tmp8(false, true);
                                } else {
                                  call(tmp9, false, true);
                                }
                                v0(10893)(_slicedToArray);
                                dependencyMap = 3;
                                tmp9 = _slicedToArray;
                              }
                              _slicedToArray = arg1;
                              obj2 = outer1_0(4494);
                              v0 = 3;
                              dependencyMap = 1;
                              obj5 = { value: null, done: false };
                              obj5[0] = obj2.monkeyPatchCall();
                              return obj5;
                            }
                          } catch (tmp26) {
                            dependencyMap = tmp;
                            throw tmp26;
                          }
                        }
                      }));
                    } else if (lib.isGroupDM()) {
                      let obj8 = arr(4295);
                      c5 = 5;
                      c6 = 1;
                      let obj4 = { value: null, done: false };
                      obj4[0] = obj8.addRecipients(lib.id, arr, undefined, dependencyMap);
                      return obj4;
                    }
                  }
                }
                let obj5 = arr(4295);
                obj5 = { recipientIds: null, location: "New Group DM", onBeforeTransition: null };
                obj5[0] = arr;
                obj5[2] = dependencyMap;
                c5 = 4;
                c6 = 1;
                const obj6 = { value: null, done: false };
                obj6[0] = obj5.openPrivateChannel(obj5);
                return obj6;
              }
            } else {
              if (2 === tmp5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c6 = 3;
                  const obj7 = { value: null, done: true };
                  obj7[0] = arg1;
                  return obj7;
                }
              } else {
                if (3 === tmp5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    obj8 = { value: null, done: true };
                    obj8[0] = arg1;
                    return obj8;
                  }
                } else if (4 === tmp5) {
                  if (arg0 === 1) {
                    c6 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c6 = 3;
                    const obj9 = { value: null, done: true };
                    obj9[0] = arg1;
                    return obj9;
                  } else {
                    _slicedToArray = arg1;
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  _slicedToArray = arg1;
                  obj = arr(9161);
                  obj.ring(_slicedToArray, arr, "gdm_invite");
                }
                c6 = 3;
                obj10 = { value: null, done: true };
                obj10[0] = arg1;
                return obj10;
              }
              _slicedToArray = arg1;
            }
            arr(4253).hideActionSheet(closure_16);
            c6 = 3;
            const obj12 = arr(4253);
          }
        } catch (tmp77) {
          c6 = tmp;
          throw tmp77;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _handleInviteUsers = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ ActivityIndicator: closure_6, View: error } = get_ActivityIndicator);
({ InstantInviteSources: map1, AnalyticEvents: closure_14, AnalyticsSections: closure_15, NEW_GROUP_DM_POPOUT_ID: closure_16 } = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
createCacheKey = { button: null, container: null, instantInviteView: null, nameInputContainer: null, nameInput: null };
createCacheKey = { color: require("Themes").colors.INTERACTIVE_TEXT_ACTIVE };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: "100%", display: "flex" };
createCacheKey[2] = { flexShrink: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj1 = { flexShrink: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[3] = { paddingHorizontal: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
let obj2 = { paddingHorizontal: 16, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[4] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, marginBottom: 8, height: 40, width: "100%" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, marginBottom: 8, height: 40, width: "100%" };
let result = require("noop").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/NewGroupDMScreen.tsx");

export default function NewGroupDMScreen(navigation) {
  let c15;
  let c16;
  let importDefault;
  let locationPage;
  navigation = navigation.navigation;
  let _require = navigation;
  const params = navigation.route.params;
  ({ channelId: importDefault, locationPage } = params);
  let flag = params.allowNameEdit;
  if (flag === undefined) {
    flag = false;
  }
  let callback;
  let stateFromStores;
  let stateFromStores1;
  let first;
  let closure_7;
  let first1;
  let closure_9;
  let first2;
  let memo;
  let UserRowModes;
  let c13;
  callback = undefined;
  c15 = undefined;
  c16 = undefined;
  const tmp = createCacheKey();
  callback = tmp;
  let obj = _require(locationPage[18]);
  let items = [first1];
  stateFromStores = obj.useStateFromStores(items, () => first1.getChannel(closure_1));
  let obj2 = _require(locationPage[18]);
  const items1 = [memo];
  stateFromStores1 = obj2.useStateFromStores(items1, () => memo.getCurrentUser());
  let obj3 = stateFromStores1;
  let tmp6 = callback(stateFromStores1.useState([]), 2);
  first = tmp6[0];
  closure_7 = tmp6[1];
  const tmp7 = callback(stateFromStores1.useState(false), 2);
  first1 = tmp7[0];
  closure_9 = tmp7[1];
  const tmp9 = callback(stateFromStores1.useState(""), 2);
  first2 = tmp9[0];
  const items2 = [stateFromStores];
  memo = stateFromStores1.useMemo(() => {
    let recipients;
    if (stateFromStores != null) {
      recipients = stateFromStores.recipients;
    }
    if (recipients == null) {
      recipients = [];
    }
    return recipients;
  }, items2);
  let num = memo.length;
  if (num == null) {
    num = 0;
  }
  const sum = first.length + (num + 1);
  UserRowModes = sum;
  const tmp13 = sum > importDefault(locationPage[19])(stateFromStores);
  c13 = tmp13;
  const items3 = [locationPage];
  const effect = obj3.useEffect(() => {
    let obj = outer1_1(locationPage[20]);
    obj = { type: _undefined.DM_INVITE, location: obj };
    obj = { page: locationPage };
    obj.track(callback.OPEN_POPOUT, obj);
  }, items3);
  const items4 = [stateFromStores, navigation, memo, first, first2];
  callback = obj3.useCallback(stateFromStores(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "T", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp3;
            let closure_0 = tmp7;
            closure_0 = undefined;
            outer1_9(true);
            let c3 = 1;
            const items = [];
            HermesBuiltin.arraySpread(outer1_11, HermesBuiltin.arraySpread(outer1_6, 0));
            c4 = 2;
            c5 = 1;
            let obj1 = { value: null, done: false };
            obj1[0] = (function handleInviteUsers(c4, items, arg2) {
              const self = this;
              const apply = closure_22.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(c4, items, () => {
              parent = parent.getParent();
              return parent.goBack();
            });
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          let obj4 = outer1_1(outer1_2[21]);
          const obj2 = { key: "GROUP_DM_ADD_ERROR", content: null };
          const intl = outer1_0(outer1_2[22]).intl;
          obj2[1] = intl.string(outer1_0(outer1_2[22]).t["N/9OFy"]);
          obj4.open(obj2);
          callback(false);
          c5 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = undefined;
          return obj3;
        } else {
          if (2 === tmp7) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj4 = { value: null, done: true };
              obj4[0] = arg1;
              return obj4;
            } else {
              closure_0 = arg1;
              c3 = 0;
              let tmp10 = null == c4;
              if (tmp10) {
                tmp10 = null != closure_0;
              }
              if (tmp10) {
                tmp10 = "" !== createRTCConnection;
              }
              if (tmp10) {
                obj1 = outer1_1(outer1_2[13]);
                c4 = 3;
                c5 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = obj1.setName(closure_0, createRTCConnection);
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c5 = 3;
          return { value: "T", done: null };
        }
      } catch (tmp37) {
        let closure_2 = tmp37;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp37;
        } else {
          c4 = tmp;
        }
      }
    }
  }), items4);
  const items5 = [stateFromStores, first1, navigation, sum, tmp13, memo, first, callback, tmp];
  const layoutEffect = obj3.useLayoutEffect(() => {
    let obj = stateFromStores;
    let isGroupDMResult;
    if (stateFromStores != null) {
      isGroupDMResult = obj.isGroupDM();
    }
    let intl = options(locationPage[22]).intl;
    let string = intl.string;
    let t = options(locationPage[22]).t;
    if (isGroupDMResult) {
      let stringResult = string(t["LR+Ptf"]);
    } else {
      stringResult = string(t["3hF1W4"]);
    }
    options = stringResult;
    if (obj != null) {
      obj.isGroupDM();
    }
    const intl2 = options(locationPage[22]).intl;
    obj = { numMembers: c12, maxMemberLimit: null };
    obj[1] = outer1_1(locationPage[19])(obj);
    const formatToPlainStringResult = intl2.formatToPlainString(options(locationPage[22]).t.YUhnoy, obj);
    let closure_1 = formatToPlainStringResult;
    obj = {
      title: "" + stringResult + " (" + formatToPlainStringResult + ")",
      headerTitle(arg0) {
        if (arg0 == null) {
          HermesBuiltin.throwTypeError();
        } else {
          const merged = Object.assign(arg0, undefined);
          const obj = {};
          const merged1 = Object.assign(merged);
          obj.title = stringResult;
          obj.subtitle = closure_1;
          let str = "mobile-text-heading-primary";
          if (outer1_13) {
            str = "text-feedback-critical";
          }
          obj.color = str;
          return outer2_17(stringResult(locationPage[23]).GenericHeaderTitle, obj);
        }
      },
      headerRight(arg0) {
        if (outer1_8) {
          let obj = { color: null, size: "small" };
          obj[0] = outer1_3.button.color;
          let result = outer2_17(first, obj);
        } else {
          obj = outer1_4;
          let isGroupDMResult;
          if (outer1_4 != null) {
            isGroupDMResult = obj.isGroupDM();
          }
          const getRenderHeaderTextButton = stringResult(locationPage[23]).getRenderHeaderTextButton;
          const intl = stringResult(locationPage[22]).intl;
          const string = intl.string;
          const t = stringResult(locationPage[22]).t;
          if (isGroupDMResult) {
            stringResult = string(t.OYkgVk);
            obj = {};
            const renderHeaderTextButton = getRenderHeaderTextButton(stringResult, stateFromStores(function*() {
              yield outer1_14();
              return arg1;
            }));
            const merged = Object.assign(arg0);
            let tmp25 = outer1_13;
            if (!outer1_13) {
              let isGroupDMResult1;
              if (obj != null) {
                isGroupDMResult1 = obj.isGroupDM();
              }
              if (isGroupDMResult1) {
                isGroupDMResult1 = outer1_6.length <= 0;
              }
              tmp25 = isGroupDMResult1;
            }
            obj.disabled = tmp25;
            result = renderHeaderTextButton(obj);
          } else {
            const obj1 = {};
            const renderHeaderTextButton1 = getRenderHeaderTextButton(string(t.CumH4u), stateFromStores(function*() {
              yield outer1_14();
              return arg1;
            }));
            const merged1 = Object.assign(arg0);
            obj1.disabled = outer1_13;
            result = renderHeaderTextButton1(obj1);
            const stringResult1 = string(t.CumH4u);
          }
          const tmp6 = stringResult(locationPage[23]);
        }
        return result;
      }
    };
    options.setOptions(obj);
  }, items5);
  const callback1 = obj3.useCallback((arg0) => {
    let closure_0 = arg0;
    callback((arr) => {
      const index = arr.indexOf(id.id);
      const items = [...arr];
      if (-1 === index) {
        items.push(id.id);
      } else {
        items.splice(index, 1);
      }
      return items;
    });
  }, []);
  [c15, c16] = callback(obj3.useState(false), 2);
  obj = { style: tmp.container, children: null };
  let isGroupDMResult;
  const tmp15 = stateFromStores;
  const tmp5 = callback;
  const tmp5Result = callback(obj3.useState(false), 2);
  if (stateFromStores != null) {
    isGroupDMResult = stateFromStores.isGroupDM();
  }
  if (isGroupDMResult) {
    isGroupDMResult = null != stateFromStores1;
  }
  if (isGroupDMResult) {
    isGroupDMResult = sum < tmp12(tmp3[19])(stateFromStores);
  }
  if (isGroupDMResult) {
    obj = { style: null, children: null };
    obj[0] = tmp.instantInviteView;
    let obj1 = { onItemPressed: null };
    _require = undefined;
    _require = tmp15((arg0) => {
      let closure_0 = arg0;
      let c3 = 0;
      let c4 = 0;
      return (function*(arg0) {
        if (c4 === 2) {
          c4 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "T", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_2 = tmp5;
                let closure_1 = tmp2;
                closure_1 = undefined;
                if (outer1_15) {
                  c4 = 3;
                } else {
                  outer1_16(true);
                  let obj1 = outer2_1(locationPage[26]);
                  c3 = 1;
                  c4 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = obj1.mobileCreateInvite(c4, constants.GROUP_DM);
                  return obj1;
                }
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              closure_1 = arg1;
              if (null != closure_1) {
                const obj2 = { channel: null, code: null, message: null, location: null };
                obj2[0] = c4;
                obj2[1] = closure_1;
                const intl = callback(locationPage[22]).intl;
                const obj3 = { username: null, link: null };
                obj3[0] = outer1_5.username;
                obj3[1] = outer2_1(locationPage[27])(closure_1);
                obj2[2] = intl.formatToPlainString(callback(locationPage[22]).t["+zWvOQ"], obj3);
                obj2[3] = constants.GROUP_DM;
                callback(obj2);
              }
              outer1_16(false);
            }
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } catch (tmp15) {
            c4 = tmp;
            throw tmp15;
          }
        }
      })();
    });
    obj1[0] = function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj[1] = callback3(tmp12(tmp3[25]), obj1);
    isGroupDMResult = callback3(tmp22, obj);
    const tmp12Result = tmp12(tmp3[25]);
  }
  const items6 = [isGroupDMResult, , ];
  let tmp26 = null;
  if (flag) {
    obj2 = { style: null, children: null };
    obj2[0] = tmp.nameInputContainer;
    obj3 = { style: null, value: null, onChangeText: null, placeholder: null };
    obj3[0] = tmp.nameInput;
    obj3[1] = first2;
    obj3[2] = tmp9[1];
    let intl = tmp2(tmp3[22]).intl;
    obj3[3] = intl.string(tmp2(tmp3[22]).t.KSVhrX);
    obj2[1] = callback3(tmp2(tmp3[28]).TextInput, obj3);
    tmp26 = callback3(tmp22, obj2);
  }
  items6[1] = tmp26;
  const tmp20 = importDefault(locationPage[24])();
  const tmp21 = closure_18;
  items6[2] = callback3(importDefault(locationPage[29]), { rowMode: UserRowModes.TOGGLE, onSelectUser: callback1, disabledUserIds: memo, selectedUserIds: first, withAffinitySuggestions: true, withAlphabeticalSections: false, disableGradient: true, disableStickySections: importDefault(locationPage[24])() });
  obj[1] = items6;
  return tmp21(closure_7, obj);
};