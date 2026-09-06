// discord_app/modules/main_tabs_v2/native/friends/screens/NewGroupDMScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import ToastUtils from "../../../../toast/native/ToastUtils.tsx";
import ChannelActionCreatorsDefault from "../../../../../actions/ChannelActionCreators.tsx";
import HeaderShared from "../../shared_components/HeaderShared.tsx";
import openGroupDMNitroCapLimitSheetDefault from "../../../../group_dm/native/openGroupDMNitroCapLimitSheet.tsx";
import GroupDMRecipientLimitTitleDefault from "../../../../group_dm/native/GroupDMRecipientLimitTitle.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import PrivateChannelRecipientsInviteStore from "../../../../../stores/PrivateChannelRecipientsInviteStore.tsx";
import RTCConnectionStore from "../../../../../stores/RTCConnectionStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";

require = fn;
function handleOneRecipientInDM() {
  const self = this;
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_21 = async function _handleOneRecipientInDM(arg0) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    closure_2 = tmp2;
    closure_130_0 = closure_0;
    await ChannelActionCreatorsDefault.openPrivateChannel({
      recipientIds: [],
      location: "New Group DM",
      onBeforeTransition,
    });
    closure_130_1 = value;
    ChannelActionCreatorsDefault;
    await closure_131_1(closure_131_2[13]).addRecipients(closure_130_1, closure_130_0, undefined);
    closure_130_1 = value;
    return value;
  })();
};
let closure_22 = async function _handleInviteUsers(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp2;
          closure_3 = tmp5;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_0 = id;
          let arr = length;
          if (length === undefined) {
            const _Array = Array;
            arr = Array.from(selectedUsers.getSelectedUsers());
          }
          closure_131_1 = arr;
          closure_131_2 = closure_2;
          closure_131_3 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "PX_16", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            let obj1 = { value, done: true };
            return obj1;
          } else {
            if (null != closure_131_0) {
              if (closure_132_10.getChannelId() !== closure_131_0.id) {
                if (closure_131_0.isDM()) {
                  if (1 === closure_131_1.length) {
                    c5 = 3;
                    c6 = 1;
                    let obj2 = { value: closure_132_20(closure_131_1, closure_131_2), done: false };
                    return obj2;
                  }
                }
                const obj13 = closure_132_1(closure_132_2[13]);
                c5 = 2;
                c6 = 1;
                let obj3 = {
                  value: obj13.addRecipients(closure_131_0.id, closure_131_1, undefined, closure_131_2),
                  done: false,
                };
                return obj3;
              }
            }
            if (null != closure_131_0) {
              if (closure_132_10.getChannelId() === closure_131_0.id) {
                if (closure_131_0.isDM()) {
                  let obj10 = closure_132_0(closure_132_2[14]);
                  obj10.showGuardCallAlert(
                    closure_132_4(async () => {
                      if (dependencyMap === 2) {
                        dependencyMap = 3;
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp3 === 3) {
                        if (arg0 === 1) {
                          throw value;
                        } else if (arg0 === 2) {
                          let obj = { value, done: true };
                          return obj;
                        } else {
                          return { value: "HermesInternal", done: null };
                        }
                      } else {
                        try {
                          dependencyMap = 2;
                          if (0 === v3) {
                            if (arg0 === 1) {
                              dependencyMap = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              dependencyMap = 3;
                              obj = { value, done: true };
                              return obj;
                            } else {
                              id = tmp4;
                              if (1 === length.length) {
                                v3 = 2;
                                dependencyMap = 1;
                                const obj1 = { value: closure_1_20(length, closure_2_2), done: false };
                                return obj1;
                              } else {
                                let obj5 = v3(4573);
                                v3 = 1;
                                dependencyMap = 1;
                                let obj2 = {
                                  value: obj5.addRecipients(id.id, length, undefined, closure_2_2),
                                  done: false,
                                };
                                return obj2;
                              }
                            }
                          } else {
                            if (1 === tmp4) {
                              if (arg0 === 1) {
                                dependencyMap = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                dependencyMap = 3;
                                const obj3 = { value, done: true };
                                return obj3;
                              }
                            } else if (2 === tmp4) {
                              if (arg0 === 1) {
                                dependencyMap = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                dependencyMap = 3;
                                const obj4 = { value, done: true };
                                return obj4;
                              }
                            } else if (arg0 === 1) {
                              dependencyMap = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              dependencyMap = 3;
                              obj = { value, done: true };
                              return obj;
                            } else {
                              const tmp8 = v3(9182);
                              const call = tmp8.call;
                              if (typeof call === "unknown") {
                                tmp8(false, true);
                              } else {
                                call(tmp9, false, true);
                              }
                              v3(9536)(closure_128_3);
                              dependencyMap = 3;
                              tmp9 = closure_128_3;
                            }
                            closure_128_3 = value;
                            obj2 = id(4767);
                            v3 = 3;
                            dependencyMap = 1;
                            obj5 = { value: obj2.monkeyPatchCall(), done: false };
                            return obj5;
                          }
                        } catch (tmp26) {
                          dependencyMap = tmp;
                          throw tmp26;
                        }
                      }
                    }),
                  );
                } else if (closure_131_0.isGroupDM()) {
                  let obj8 = closure_132_1(closure_132_2[13]);
                  c5 = 5;
                  c6 = 1;
                  let obj4 = {
                    value: obj8.addRecipients(closure_131_0.id, closure_131_1, undefined, closure_131_2),
                    done: false,
                  };
                  return obj4;
                }
              }
            }
            let obj5 = closure_132_1(closure_132_2[13]);
            obj5 = { recipientIds: closure_131_1, location: "New Group DM", onBeforeTransition: closure_131_2 };
            c5 = 4;
            c6 = 1;
            const obj6 = { value: obj5.openPrivateChannel(obj5), done: false };
            return obj6;
          }
        } else {
          if (2 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj7 = { value, done: true };
              return obj7;
            }
          } else {
            if (3 === tmp5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                obj8 = { value, done: true };
                return obj8;
              }
            } else if (4 === tmp5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj9 = { value, done: true };
                return obj9;
              } else {
                closure_131_3 = value;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_131_3 = value;
              obj = closure_132_1(closure_132_2[15]);
              obj.ring(closure_131_3, closure_131_1, "gdm_invite");
            }
            c6 = 3;
            obj10 = { value, done: true };
            return obj10;
          }
          closure_131_3 = value;
        }
        closure_132_1(closure_132_2[17]).hideActionSheet(closure_132_16);
        c6 = 3;
        const obj12 = closure_132_1(closure_132_2[17]);
      }
    } catch (tmp77) {
      c6 = tmp;
      throw tmp77;
    }
  }
};
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7 } = get_ActivityIndicator);
const UserRowModes = fn(10860).UserRowModes;
const Constants = fn(1074);
({
  InstantInviteSources: map1,
  AnalyticEvents: closure_14,
  AnalyticsSections: closure_15,
  NEW_GROUP_DM_POPOUT_ID: closure_16,
} = Constants);
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
fn(4560);
let createStyles = {
  button: null,
  container: null,
  instantInviteView: null,
  nameInputContainer: null,
  nameInput: null,
};
createStyles = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
createStyles.button = createStyles;
createStyles.container = { height: "100%", display: "flex" };
createStyles.instantInviteView = { flexShrink: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj1 = { flexShrink: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles.nameInputContainer = { paddingHorizontal: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, marginBottom: 8, height: 40, width: "100%" };
createStyles.nameInput = size;
let closure_19 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/NewGroupDMScreen.tsx");

export default function NewGroupDMScreen(navigation) {
  navigation = navigation.navigation;
  _require = navigation;
  const params = navigation.route.params;
  ({ channelId: importDefault, locationPage } = params);
  let flag = params.allowNameEdit;
  if (flag === undefined) {
    flag = false;
  }
  let ref;
  let currentUser;
  c13 = undefined;
  closure_19 = undefined;
  let callback1;
  c24 = undefined;
  c25 = undefined;
  let callback3;
  const tmp = closure_19();
  _slicedToArray = tmp;
  let obj = require("initialize");
  let items = [ref];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(importDefault));
  let obj2 = require("initialize");
  const items1 = [currentUser];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let obj3 = stateFromStores1;
  let tmp6 = _slicedToArray(stateFromStores1.useState([]), 2);
  const selectedUserIds = tmp6[0];
  closure_7 = tmp6[1];
  ref = stateFromStores1.useRef([]);
  const callback = stateFromStores1.useCallback((current) => {
    closure_8.current = current;
    closure_7(current);
  }, []);
  const tmp9 = _slicedToArray(stateFromStores1.useState(false), 2);
  const first1 = tmp9[0];
  currentUser = tmp9[1];
  const tmp11 = _slicedToArray(stateFromStores1.useState(""), 2);
  const first2 = tmp11[0];
  [tmp15, tmp16] = _slicedToArray(stateFromStores1.useState(require("native").space.PX_12), 2);
  let tmp14 = _slicedToArray(stateFromStores1.useState(require("native").space.PX_12), 2);
  let tmp5 = _slicedToArray;
  [tmp18, c13] = _slicedToArray(stateFromStores1.useState(false), 2);
  stateFromStores1.useRef(false);
  closure_15 = stateFromStores1.useRef({ offsetY: 0 });
  const items2 = [stateFromStores];
  const memo = stateFromStores1.useMemo(() => {
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
  const tmp17 = _slicedToArray(stateFromStores1.useState(false), 2);
  let sum = new Set(items3).size + 1;
  c17 = sum;
  const tmp22 = require("getGroupDMRecipientLimit")({ useNitroCapExperiment: true });
  const maxMemberLimit = tmp22;
  closure_19 = tmp23;
  let obj4 = require("GroupDMNitroCapExperiment");
  const config = obj4.useConfig({ location: "NewGroupDMScreen" });
  const set = new Set(items3);
  let result = require("GroupDMNitroUpsellModel").shouldUseGroupDMParticipantLimitUI(config.enabled, tmp22);
  c20 = result;
  closure_21 = tmp26;
  require("GroupDMNitroUpsellModel");
  let enabled = config.enabled;
  if (enabled) {
    enabled = tmp2(locationPage[21]).isGroupDMNitroUpsellAudience(tmp28);
    const tmp2Result = tmp2(locationPage[21]);
  }
  const items4 = [locationPage];
  const effect = obj3.useEffect(() => {
    let obj = { type: constants2.DM_INVITE, location: null };
    obj = { page: locationPage };
    obj.location = obj;
    obj.track(constants.OPEN_POPOUT, obj);
  }, items4);
  const items5 = [stateFromStores, navigation, memo, selectedUserIds, first2];
  callback1 = obj3.useCallback(
    stateFromStores(function* () {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
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
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let parent = tmp8;
              closure_128_0 = undefined;
              currentUser(true);
              c3 = 2;
              const items = [];
              HermesBuiltin.arraySpread(memo, HermesBuiltin.arraySpread(first, 0));
              c4 = 3;
              c5 = 1;
              let obj1 = {
                value: (function handleInviteUsers() {
                  const self = this;
                  const apply = closure_1_22.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(stateFromStores, items, () => {
                  parent = parent.getParent();
                  return parent.goBack();
                }),
                done: false,
              };
              return obj1;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_129_11(false);
            throw tmp50;
          } else {
            if (2 === tmp8) {
              c3 = 1;
              let obj4 = tmp4(tmp50[23]);
              const obj2 = { key: "GROUP_DM_ADD_ERROR", content: null };
              const intl = parent(tmp50[24]).intl;
              obj2.content = intl.string(parent(tmp50[24]).t["N/9OFy"]);
              obj4.open(obj2);
            } else {
              if (3 === tmp8) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  closure_129_11(false);
                  c5 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_128_0 = value;
                  let tmp14 = null == closure_129_4;
                  if (tmp14) {
                    tmp14 = null != closure_128_0;
                  }
                  if (tmp14) {
                    tmp14 = "" !== closure_129_12;
                  }
                  obj1 = tmp4(tmp50[13]);
                  c4 = 4;
                  c5 = 1;
                  obj4 = { value: obj1.setName(closure_128_0, closure_129_12), done: false };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_11(false);
                c5 = 3;
                obj = { value, done: true };
                return obj;
              }
              c3 = 1;
            }
            c3 = 0;
            closure_129_11(false);
            c5 = 3;
          }
        } catch (tmp50) {
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
    selectedUserIds,
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
    obj = { numMembers, maxMemberLimit };
    let formatToPlainStringResult = intl2.formatToPlainString(options(locationPage[24]).t["9EQix0"], obj);
    if (!c20) {
      const intl3 = options(locationPage[24]).intl;
      obj = { numMembers, maxMemberLimit };
      formatToPlainStringResult = intl3.formatToPlainString(options(locationPage[24]).t.YUhnoy, obj);
    }
    closure_1 = formatToPlainStringResult;
    closure_2 = c20 ? closure_21 : disabled;
    options.setOptions({
      title: "" + stringResult + " (" + formatToPlainStringResult + ")",
      headerTitle: c20
        ? () => closure_3_17(GroupDMRecipientLimitTitleDefault, { title: stringResult, memberCount, recipientLimit })
        : (arg0) => {
            if (arg0 == null) {
              throw new TypeError("Cannot destructure 'undefined' or 'null'.");
            } else {
              const merged = Object.assign(arg0, undefined);
              const obj = {};
              const merged1 = Object.assign(merged);
              obj.title = stringResult;
              obj.subtitle = formatToPlainStringResult;
              let str = "mobile-text-heading-primary";
              if (closure_2) {
                str = "text-feedback-critical";
              }
              obj.color = str;
              return closure_3_17(HeaderShared.GenericHeaderTitle, obj);
            }
          },
      headerRight(arg0) {
        if (first1) {
          let obj = { color: button.button.color, size: "small" };
          let result = closure_3_17(timestampProducer, obj);
        } else {
          obj = stateFromStores;
          let isGroupDMResult;
          if (stateFromStores != null) {
            isGroupDMResult = obj.isGroupDM();
          }
          const getRenderHeaderTextButton = HeaderShared.getRenderHeaderTextButton;
          const intl = util.intl;
          const string = intl.string;
          const t = util.t;
          if (isGroupDMResult) {
            obj = {};
            const renderHeaderTextButton = getRenderHeaderTextButton(
              string(t.OYkgVk),
              asyncGeneratorStep(async () => {
                await closure_1_23();
                return value;
              }),
            );
            const merged = Object.assign(arg0);
            let tmp25 = disabled;
            if (!disabled) {
              let isGroupDMResult1;
              if (obj != null) {
                isGroupDMResult1 = obj.isGroupDM();
              }
              if (isGroupDMResult1) {
                isGroupDMResult1 = first.length <= 0;
              }
              tmp25 = isGroupDMResult1;
            }
            obj.disabled = tmp25;
            result = renderHeaderTextButton(obj);
            stringResult = string(t.OYkgVk);
          } else {
            const obj1 = {};
            const renderHeaderTextButton1 = getRenderHeaderTextButton(
              string(t.CumH4u),
              asyncGeneratorStep(async () => {
                await closure_1_23();
                return value;
              }),
            );
            const merged1 = Object.assign(arg0);
            obj1.disabled = disabled;
            result = renderHeaderTextButton1(obj1);
            const stringResult1 = string(t.CumH4u);
          }
        }
        return result;
      },
    });
    let obj1 = {
      title: "" + stringResult + " (" + formatToPlainStringResult + ")",
      headerTitle: c20
        ? () => closure_3_17(GroupDMRecipientLimitTitleDefault, { title: stringResult, memberCount, recipientLimit })
        : (arg0) => {
            if (arg0 == null) {
              throw new TypeError("Cannot destructure 'undefined' or 'null'.");
            } else {
              const merged = Object.assign(arg0, undefined);
              const obj = {};
              const merged1 = Object.assign(merged);
              obj.title = stringResult;
              obj.subtitle = formatToPlainStringResult;
              let str = "mobile-text-heading-primary";
              if (closure_2) {
                str = "text-feedback-critical";
              }
              obj.color = str;
              return closure_3_17(HeaderShared.GenericHeaderTitle, obj);
            }
          },
      headerRight(arg0) {
        if (first1) {
          let obj = { color: button.button.color, size: "small" };
          let result = closure_3_17(timestampProducer, obj);
        } else {
          obj = stateFromStores;
          let isGroupDMResult;
          if (stateFromStores != null) {
            isGroupDMResult = obj.isGroupDM();
          }
          const getRenderHeaderTextButton = HeaderShared.getRenderHeaderTextButton;
          const intl = util.intl;
          const string = intl.string;
          const t = util.t;
          if (isGroupDMResult) {
            obj = {};
            const renderHeaderTextButton = getRenderHeaderTextButton(
              string(t.OYkgVk),
              asyncGeneratorStep(async () => {
                await closure_1_23();
                return value;
              }),
            );
            const merged = Object.assign(arg0);
            let tmp25 = disabled;
            if (!disabled) {
              let isGroupDMResult1;
              if (obj != null) {
                isGroupDMResult1 = obj.isGroupDM();
              }
              if (isGroupDMResult1) {
                isGroupDMResult1 = first.length <= 0;
              }
              tmp25 = isGroupDMResult1;
            }
            obj.disabled = tmp25;
            result = renderHeaderTextButton(obj);
            stringResult = string(t.OYkgVk);
          } else {
            const obj1 = {};
            const renderHeaderTextButton1 = getRenderHeaderTextButton(
              string(t.CumH4u),
              asyncGeneratorStep(async () => {
                await closure_1_23();
                return value;
              }),
            );
            const merged1 = Object.assign(arg0);
            obj1.disabled = disabled;
            result = renderHeaderTextButton1(obj1);
            const stringResult1 = string(t.CumH4u);
          }
        }
        return result;
      },
    };
  }, items6);
  const items7 = [memo, tmp22, result, enabled, callback];
  const callback2 = obj3.useCallback((id) => {
    const current = ref.current;
    const hasItem = current.includes(id.id);
    const items = [...current];
    new Set(items);
    if (!hasItem) {
      if (c20) {
        if (tmp3 >= closure_18) {
          if (enabled) {
            openGroupDMNitroCapLimitSheetDefault("NewGroupDMScreen");
          } else {
            ToastUtils.showMaxGroupMembers();
          }
        }
      }
    }
    if (hasItem) {
      let found = current.filter((item) => item !== id.id);
    } else {
      found = [];
      found[HermesBuiltin.arraySpread(current, 0)] = id.id;
    }
    callback(found);
  }, items7);
  const obj6 = require("GroupDMNitroUpsellModel");
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
  const callback4 = obj3.useCallback((contentLength) => {
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
    obj = { style: tmp.instantInviteView, children: null };
    let obj1 = { onItemPressed: null };
    _require = tmp30(function* (arg0) {
      if (channel === 2) {
        channel = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          channel = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              channel = 3;
              throw value;
            } else if (arg0 === 2) {
              channel = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp5;
              closure_1 = tmp2;
              closure_129_0 = options;
              closure_129_1 = undefined;
              if (closure_1_24) {
                channel = 3;
              } else {
                _undefined(true);
                let obj1 = require("InstantInviteActionCreators");
                c3 = 1;
                channel = 1;
                obj1 = { value: null, done: false };
                obj1.value = obj1.mobileCreateInvite(channel, constants.GROUP_DM);
                return obj1;
              }
            }
          } else if (arg0 === 1) {
            channel = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_129_1 = value;
            if (null != closure_129_1) {
              const obj2 = { channel, code: closure_129_1, message: null, location: null };
              const intl = options(locationPage[24]).intl;
              const obj3 = { username: user.username, link: require("getInviteURL")(closure_129_1) };
              obj2.message = intl.formatToPlainString(options(locationPage[24]).t["+zWvOQ"], obj3);
              obj2.location = constants.GROUP_DM;
              closure_129_0(obj2);
            }
            _undefined(false);
          }
          channel = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp15) {
          channel = tmp;
          throw tmp15;
        }
      }
    });
    obj1.onItemPressed = function () {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj.children = c17(require("InstantInviteShareApps"), obj1);
    isGroupDMResult = c17(tmp41, obj);
    const tmp13Result = require("InstantInviteShareApps");
  }
  const items11 = [isGroupDMResult, , ,];
  let tmp45 = null;
  if (flag) {
    obj2 = { style: tmp.nameInputContainer, children: null };
    obj3 = { style: tmp.nameInput, value: first2, onChangeText: tmp11[1], placeholder: null };
    let intl = tmp2(locationPage[24]).intl;
    obj3.placeholder = intl.string(tmp2(locationPage[24]).t.KSVhrX);
    obj2.children = c17(tmp2(locationPage[33]).TextInput, obj3);
    tmp45 = c17(tmp41, obj2);
  }
  items11[1] = tmp45;
  obj4 = {
    rowMode: first2.TOGGLE,
    onSelectUser: callback2,
    disabledUserIds: memo,
    selectedUserIds,
    focusOnAdd: false,
    withAffinitySuggestions: true,
    withAlphabeticalSections: false,
    insetEnd: tmp15,
    onContentLengthChange: callback4,
    onLayout: callback5,
    onScroll: callback6,
    disableGradient: true,
    disableStickySections: require("useIsUsingClientTheme")(),
  };
  items11[2] = c17(require("SearchableUserList"), obj4);
  items11[3] = c17(require("GroupDMNitroUpsellBanner"), {
    location: "NewGroupDMScreen",
    memberCount: sum,
    recipientLimit: tmp22,
    floating: true,
    hideFloatingGradient: tmp18,
    onFloatingListInsetChange: tmp16,
  });
  obj.children = items11;
  return maxMemberLimit(closure_7, obj);
}
