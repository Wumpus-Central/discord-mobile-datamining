// discord_app/modules/main_tabs_v2/native/friends/screens/NewGroupDMScreen.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_5 from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_8 from "../../../../../stores/ChannelStore.tsx";
import closure_9 from "../../../../../stores/PrivateChannelRecipientsInviteStore.tsx";
import closure_10 from "../../../../../stores/RTCConnectionStore.tsx";
import closure_11 from "../../../../../stores/UserStore.tsx";
import { UserRowModes } from "../../shared_components/user_list/UserRowConstants.tsx";
import ME from "../../../../../Constants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

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
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function* (arg0, arg1) {
      const table = tmp2;
      const obj5 = callback(closure_1_2[13]);
      obj1 = { recipientIds: null, location: "New Group DM", onBeforeTransition: null };
      obj1[0] = [];
      obj1[2] = callback;
      callback = yield obj5.openPrivateChannel(obj1);
      const obj2 = callback(table[13]);
      callback = yield obj2.addRecipients(callback, closure_0, undefined);
      return arg1;
    })();
  });
  closure_21 = tmp;
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
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    const iter = (function* (arg0) {
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
          return { value: "HermesInternal", done: null };
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
              closure_3 = tmp5;
              let arr;
              dependencyMap = undefined;
              if (arr === undefined) {
                const _Array = Array;
                arr = Array.from(closure_1_9.getSelectedUsers());
              }
              closure_3 = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "PX_16", done: true };
            }
          } else {
            if (1 === tmp5) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c6 = 3;
                obj1 = { value: null, done: true };
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
                    const obj13 = arr(4573);
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
                      let obj10 = lib(4767);
                      obj10.showGuardCallAlert(
                        callback(function* () {
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
                              return { value: "HermesInternal", done: null };
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
                                  closure_0 = tmp4;
                                  if (1 === v0.length) {
                                    v0 = 2;
                                    dependencyMap = 1;
                                    obj1 = { value: null, done: false };
                                    obj1[0] = closure_1_20(tmp33, dependencyMap);
                                    return obj1;
                                  } else {
                                    let obj5 = v0(4573);
                                    v0 = 1;
                                    dependencyMap = 1;
                                    let obj2 = { value: null, done: false };
                                    obj2[0] = obj5.addRecipients(closure_1_0.id, tmp33, undefined, dependencyMap);
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
                                  const tmp8 = v0(9182);
                                  const call = tmp8.call;
                                  if (typeof call === "unknown") {
                                    tmp8(false, true);
                                  } else {
                                    call(tmp9, false, true);
                                  }
                                  v0(9536)(closure_3);
                                  dependencyMap = 3;
                                  tmp9 = closure_3;
                                }
                                closure_3 = arg1;
                                obj2 = closure_1_0(4767);
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
                        }),
                      );
                    } else if (lib.isGroupDM()) {
                      let obj8 = arr(4573);
                      c5 = 5;
                      c6 = 1;
                      let obj4 = { value: null, done: false };
                      obj4[0] = obj8.addRecipients(lib.id, arr, undefined, dependencyMap);
                      return obj4;
                    }
                  }
                }
                let obj5 = arr(4573);
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
                    closure_3 = arg1;
                  }
                } else if (arg0 === 1) {
                  c6 = 3;
                  throw arg1;
                } else if (arg0 !== 2) {
                  closure_3 = arg1;
                  obj = arr(9182);
                  obj.ring(closure_3, arr, "gdm_invite");
                }
                c6 = 3;
                obj10 = { value: null, done: true };
                obj10[0] = arg1;
                return obj10;
              }
              closure_3 = arg1;
            }
            arr(4527).hideActionSheet(closure_16);
            c6 = 3;
            const obj12 = arr(4527);
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
  closure_22 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ ActivityIndicator: closure_6, View: error } = get_ActivityIndicator);
({
  InstantInviteSources: map1,
  AnalyticEvents: closure_14,
  AnalyticsSections: closure_15,
  NEW_GROUP_DM_POPOUT_ID: closure_16,
} = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
createCacheKey = { button: null, container: null, instantInviteView: null, nameInputContainer: null, nameInput: null };
createCacheKey = { color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: "100%", display: "flex" };
createCacheKey[2] = { flexShrink: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj1 = { flexShrink: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[3] = { paddingHorizontal: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
let obj2 = { paddingHorizontal: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[4] = {
  backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER,
  marginBottom: 8,
  height: 40,
  width: "100%",
};
let closure_19 = createCacheKey.createStyles(createCacheKey);
let obj3 = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER, marginBottom: 8, height: 40, width: "100%" };
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/NewGroupDMScreen.tsx");

export default function NewGroupDMScreen(navigation) {
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
  closure_7 = undefined;
  closure_8 = undefined;
  callback = undefined;
  let first1;
  closure_11 = undefined;
  let first2;
  c13 = undefined;
  closure_14 = undefined;
  closure_15 = undefined;
  let memo;
  let callback3;
  closure_18 = undefined;
  let callback4;
  c20 = undefined;
  closure_21 = undefined;
  let enabled;
  let callback1;
  c24 = undefined;
  c25 = undefined;
  callback3 = undefined;
  const tmp = callback4();
  callback = tmp;
  let obj = _require(locationPage[18]);
  let items = [closure_8];
  stateFromStores = obj.useStateFromStores(items, () => ref.getChannel(closure_1));
  let obj2 = _require(locationPage[18]);
  const items1 = [closure_11];
  stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let obj3 = stateFromStores1;
  let tmp6 = callback(stateFromStores1.useState([]), 2);
  first = tmp6[0];
  closure_7 = tmp6[1];
  closure_8 = stateFromStores1.useRef([]);
  callback = stateFromStores1.useCallback((current) => {
    closure_8.current = current;
    callback(current);
  }, []);
  const tmp9 = callback(stateFromStores1.useState(false), 2);
  first1 = tmp9[0];
  closure_11 = tmp9[1];
  const tmp11 = callback(stateFromStores1.useState(""), 2);
  first2 = tmp11[0];
  [tmp15, tmp16] = callback(stateFromStores1.useState(importDefault(locationPage[12]).space.PX_12), 2);
  let tmp14 = callback(stateFromStores1.useState(importDefault(locationPage[12]).space.PX_12), 2);
  let tmp5 = callback;
  [tmp18, c13] = callback(stateFromStores1.useState(false), 2);
  closure_14 = stateFromStores1.useRef(false);
  closure_15 = stateFromStores1.useRef({ offsetY: 0 });
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
  const items3 = [...first];
  const tmp17 = callback(stateFromStores1.useState(false), 2);
  let sum = new Set(items3).size + 1;
  callback3 = sum;
  const tmp22 = importDefault(locationPage[19])({ useNitroCapExperiment: true });
  closure_18 = tmp22;
  callback4 = tmp23;
  let obj4 = importDefault(locationPage[20]);
  const config = obj4.useConfig({ location: "NewGroupDMScreen" });
  const set = new Set(items3);
  let result = _require(locationPage[21]).shouldUseGroupDMParticipantLimitUI(config.enabled, tmp22);
  c20 = result;
  closure_21 = tmp26;
  _require(locationPage[21]);
  enabled = config.enabled;
  if (enabled) {
    enabled = tmp2(tmp3[21]).isGroupDMNitroUpsellAudience(tmp28);
    const tmp2Result = tmp2(tmp3[21]);
  }
  const items4 = [locationPage];
  const effect = obj3.useEffect(() => {
    let obj = closure_1_1(locationPage[22]);
    obj = { type: closure_15.DM_INVITE, location: obj };
    obj = { page: locationPage };
    obj.track(ref2.OPEN_POPOUT, obj);
  }, items4);
  const items5 = [stateFromStores, navigation, memo, first, first2];
  callback1 = obj3.useCallback(
    stateFromStores(function* () {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              closure_1 = tmp4;
              closure_0 = tmp8;
              closure_0 = undefined;
              closure_1_11(true);
              c3 = 2;
              const items = [];
              HermesBuiltin.arraySpread(closure_1_16, HermesBuiltin.arraySpread(closure_1_6, 0));
              c4 = 3;
              c5 = 1;
              obj1 = { value: null, done: false };
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
          } else if (1 === tmp8) {
            c3 = 0;
            callback(false);
            throw closure_2;
          } else {
            if (2 === tmp8) {
              c3 = 1;
              let obj4 = closure_1_1(closure_1_2[23]);
              const obj2 = { key: "GROUP_DM_ADD_ERROR", content: null };
              const intl = closure_1_0(closure_1_2[24]).intl;
              obj2[1] = intl.string(closure_1_0(closure_1_2[24]).t["N/9OFy"]);
              obj4.open(obj2);
            } else {
              if (3 === tmp8) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c3 = 0;
                  callback(false);
                  c5 = 3;
                  const obj3 = { value: null, done: true };
                  obj3[0] = arg1;
                  return obj3;
                } else {
                  closure_0 = arg1;
                  let tmp14 = null == c4;
                  if (tmp14) {
                    tmp14 = null != closure_0;
                  }
                  if (tmp14) {
                    tmp14 = "" !== closure_12;
                  }
                  obj1 = closure_1_1(closure_1_2[13]);
                  c4 = 4;
                  c5 = 1;
                  obj4 = { value: null, done: false };
                  obj4[0] = obj1.setName(closure_0, closure_12);
                  return obj4;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                callback(false);
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              }
              c3 = 1;
            }
            c3 = 0;
            callback(false);
            c5 = 3;
          }
        } catch (tmp50) {
          closure_2 = tmp50;
          if (tmp5 === c3) {
            c5 = tmp3;
            throw tmp50;
          } else if (tmp2 === tmp52) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    }),
    items5,
  );
  const items6 = [
    stateFromStores,
    first1,
    navigation,
    sum,
    tmp22,
    sum > tmp22,
    memo,
    first,
    result,
    sum >= tmp22,
    callback1,
    tmp,
  ];
  const layoutEffect = obj3.useLayoutEffect(() => {
    let obj = stateFromStores;
    let isGroupDMResult;
    if (stateFromStores != null) {
      isGroupDMResult = obj.isGroupDM();
    }
    let intl = options(locationPage[24]).intl;
    let string = intl.string;
    let t = options(locationPage[24]).t;
    if (isGroupDMResult) {
      let stringResult = string(t["LR+Ptf"]);
    } else {
      stringResult = string(t["3hF1W4"]);
    }
    options = stringResult;
    const intl2 = options(locationPage[24]).intl;
    obj = { numMembers: c17, maxMemberLimit: closure_18 };
    let formatToPlainStringResult = intl2.formatToPlainString(options(locationPage[24]).t["9EQix0"], obj);
    if (!c20) {
      const intl3 = options(locationPage[24]).intl;
      obj = { numMembers: null, maxMemberLimit: null };
      obj[0] = c17;
      obj[1] = closure_18;
      formatToPlainStringResult = intl3.formatToPlainString(options(locationPage[24]).t.YUhnoy, obj);
    }
    closure_1 = formatToPlainStringResult;
    closure_2 = tmp6 ? closure_21 : closure_19;
    options.setOptions({
      title: "" + stringResult + " (" + formatToPlainStringResult + ")",
      headerTitle: c20
        ? () =>
            callback(closure_2_1(locationPage[25]), {
              title: closure_0,
              memberCount: closure_1_17,
              recipientLimit: closure_1_18,
            })
        : (arg0) => {
            if (arg0 == null) {
              HermesBuiltin.throwTypeError();
            } else {
              const merged = Object.assign(arg0, undefined);
              const obj = {};
              const merged1 = Object.assign(merged);
              obj.title = stringResult;
              obj.subtitle = closure_1;
              let str = "mobile-text-heading-primary";
              if (closure_2) {
                str = "text-feedback-critical";
              }
              obj.color = str;
              return c17(stringResult(locationPage[26]).GenericHeaderTitle, obj);
            }
          },
      headerRight(arg0) {
        if (closure_1_10) {
          let obj = { color: null, size: "small" };
          obj[0] = closure_1_3.button.color;
          let result = callback(first, obj);
        } else {
          obj = closure_1_4;
          let isGroupDMResult;
          if (closure_1_4 != null) {
            isGroupDMResult = obj.isGroupDM();
          }
          const getRenderHeaderTextButton = stringResult(locationPage[26]).getRenderHeaderTextButton;
          const intl = stringResult(locationPage[24]).intl;
          const string = intl.string;
          const t = stringResult(locationPage[24]).t;
          if (isGroupDMResult) {
            stringResult = string(t.OYkgVk);
            obj = {};
            const renderHeaderTextButton = getRenderHeaderTextButton(
              stringResult,
              stateFromStores(function* () {
                yield closure_1_23();
                return arg1;
              }),
            );
            const merged = Object.assign(arg0);
            let tmp25 = closure_1_19;
            if (!closure_1_19) {
              let isGroupDMResult1;
              if (obj != null) {
                isGroupDMResult1 = obj.isGroupDM();
              }
              if (isGroupDMResult1) {
                isGroupDMResult1 = closure_1_6.length <= 0;
              }
              tmp25 = isGroupDMResult1;
            }
            obj.disabled = tmp25;
            result = renderHeaderTextButton(obj);
          } else {
            obj1 = {};
            const renderHeaderTextButton1 = getRenderHeaderTextButton(
              string(t.CumH4u),
              stateFromStores(function* () {
                yield closure_1_23();
                return arg1;
              }),
            );
            const merged1 = Object.assign(arg0);
            obj1.disabled = closure_1_19;
            result = renderHeaderTextButton1(obj1);
            const stringResult1 = string(t.CumH4u);
          }
          const tmp6 = stringResult(locationPage[26]);
        }
        return result;
      },
    });
  }, items6);
  const items7 = [memo, tmp22, result, enabled, callback];
  const callback2 = obj3.useCallback((id) => {
    const options = id;
    const current = ref.current;
    const hasItem = current.includes(id.id);
    const items = [...current];
    new Set(items);
    if (!hasItem) {
      if (c20) {
        if (tmp3 >= closure_18) {
          if (enabled) {
            closure_1_1(locationPage[27])("NewGroupDMScreen");
          } else {
            options(locationPage[28]).showMaxGroupMembers();
            const obj = options(locationPage[28]);
          }
        }
      }
    }
    if (hasItem) {
      let found = current.filter((arg0) => arg0 !== id.id);
    } else {
      found = [];
      found[HermesBuiltin.arraySpread(current, 0)] = id.id;
    }
    callback(found);
  }, items7);
  const obj6 = _require(locationPage[21]);
  const tmp30 = stateFromStores;
  [c24, c25] = tmp5(obj3.useState(false), 2);
  const tmp5Result = tmp5(obj3.useState(false), 2);
  callback3 = obj3.useCallback(() => {
    ({ contentLength, layoutHeight } = closure_15.current);
    if (null != contentLength) {
      if (null != layoutHeight) {
        const _Math = Math;
        const _Math2 = Math;
        const rounded = Math.ceil(layoutHeight);
        const _Math3 = Math;
        const sum = rounded + Math.ceil(tmp);
        const tmp5 = sum >= Math.floor(contentLength);
        if (ref2.current !== tmp5) {
          ref2.current = tmp5;
          _undefined(tmp5);
        }
      }
    }
  }, []);
  const items8 = [callback3];
  const items9 = [callback3];
  callback4 = obj3.useCallback((contentLength) => {
    closure_15.current.contentLength = contentLength;
    callback3();
  }, items8);
  const items10 = [callback3];
  const callback5 = obj3.useCallback((nativeEvent) => {
    closure_15.current.layoutHeight = nativeEvent.nativeEvent.layout.height;
    callback3();
  }, items9);
  obj = { style: tmp.container, children: null };
  let isGroupDMResult;
  const callback6 = obj3.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    closure_15.current.layoutHeight = nativeEvent.layoutMeasurement.height;
    closure_15.current.offsetY = nativeEvent.contentOffset.y;
    callback3();
  }, items10);
  if (stateFromStores != null) {
    isGroupDMResult = stateFromStores.isGroupDM();
  }
  if (isGroupDMResult) {
    isGroupDMResult = null != stateFromStores1;
  }
  if (isGroupDMResult) {
    isGroupDMResult = !tmp23;
  }
  if (isGroupDMResult) {
    obj = { style: null, children: null };
    obj[0] = tmp.instantInviteView;
    obj1 = { onItemPressed: null };
    _require = undefined;
    _require = tmp30((arg0) => {
      closure_0 = arg0;
      c3 = 0;
      c4 = 0;
      return (function* (arg0) {
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
            return { value: "HermesInternal", done: null };
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
                closure_2 = tmp5;
                closure_1 = tmp2;
                closure_1 = undefined;
                if (closure_1_24) {
                  c4 = 3;
                } else {
                  closure_1_25(true);
                  obj1 = closure_2_1(locationPage[31]);
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
                const intl = callback(locationPage[24]).intl;
                const obj3 = { username: null, link: null };
                obj3[0] = closure_1_5.username;
                obj3[1] = closure_2_1(locationPage[32])(closure_1);
                obj2[2] = intl.formatToPlainString(callback(locationPage[24]).t["+zWvOQ"], obj3);
                obj2[3] = constants.GROUP_DM;
                callback(obj2);
              }
              closure_1_25(false);
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
    obj1[0] = function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj[1] = callback3(tmp13(tmp3[30]), obj1);
    isGroupDMResult = callback3(tmp41, obj);
    const tmp13Result = tmp13(tmp3[30]);
  }
  const items11 = [isGroupDMResult, , ,];
  let tmp45 = null;
  if (flag) {
    obj2 = { style: null, children: null };
    obj2[0] = tmp.nameInputContainer;
    obj3 = { style: null, value: null, onChangeText: null, placeholder: null };
    obj3[0] = tmp.nameInput;
    obj3[1] = first2;
    obj3[2] = tmp11[1];
    let intl = tmp2(tmp3[24]).intl;
    obj3[3] = intl.string(tmp2(tmp3[24]).t.KSVhrX);
    obj2[1] = callback3(tmp2(tmp3[33]).TextInput, obj3);
    tmp45 = callback3(tmp41, obj2);
  }
  items11[1] = tmp45;
  obj4 = {
    rowMode: first2.TOGGLE,
    onSelectUser: callback2,
    disabledUserIds: memo,
    selectedUserIds: first,
    focusOnAdd: false,
    withAffinitySuggestions: true,
    withAlphabeticalSections: false,
    insetEnd: tmp15,
    onContentLengthChange: callback4,
    onLayout: callback5,
    onScroll: callback6,
    disableGradient: true,
    disableStickySections: importDefault(locationPage[29])(),
  };
  items11[2] = callback3(importDefault(locationPage[34]), obj4);
  items11[3] = callback3(importDefault(locationPage[35]), {
    location: "NewGroupDMScreen",
    memberCount: sum,
    recipientLimit: tmp22,
    floating: true,
    hideFloatingGradient: tmp18,
    onFloatingListInsetChange: tmp16,
  });
  obj[1] = items11;
  return closure_18(closure_7, obj);
}
