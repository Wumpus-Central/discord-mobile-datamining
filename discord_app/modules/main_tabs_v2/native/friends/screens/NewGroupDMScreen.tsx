// discord_app/modules/main_tabs_v2/native/friends/screens/NewGroupDMScreen.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import ToastUtils from "../../../../toast/native/ToastUtils.tsx";
import ChannelActionCreatorsDefault from "../../../../../actions/ChannelActionCreators.tsx";
import HeaderShared from "../../shared_components/HeaderShared.tsx";
import UserRowConstants from "../../shared_components/user_list/UserRowConstants.tsx";
import openGroupDMNitroCapLimitSheetDefault from "../../../../group_dm/native/openGroupDMNitroCapLimitSheet.tsx";
import GroupDMRecipientLimitTitleDefault from "../../../../group_dm/native/GroupDMRecipientLimitTitle.tsx";
import _slicedToArray_mod from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import ChannelStore from "../../../../../stores/ChannelStore.tsx";
import PrivateChannelRecipientsInviteStore from "../../../../../stores/PrivateChannelRecipientsInviteStore.tsx";
import RTCConnectionStore from "../../../../../stores/RTCConnectionStore.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import Constants from "../../../../../Constants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let c2, c6, nativeEvent, set;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let size;
function handleOneRecipientInDM() {
  return obj(...arguments);
}
let obj = function _handleOneRecipientInDM() {
  obj = _asyncToGenerator(async (arg0, onBeforeTransition) => {
    let closure_0 = arg0;
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj3;
      let obj6;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              closure_2 = tmp;
              onBeforeTransition = undefined;
              c4 = 1;
              c5 = 1;
              const obj5 = { recipientIds: [], location: "New Group DM", onBeforeTransition };
              const obj7 = { value: obj6.openPrivateChannel(obj5), done: false };
              obj6 = ChannelActionCreatorsDefault;
              return obj7;
            }
          } else if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              onBeforeTransition = value;
              c4 = 2;
              c5 = 1;
              const obj9 = { value: obj3.addRecipients(onBeforeTransition, closure_0, undefined), done: false };
              obj3 = closure_131_1(closure_131_2[13]);
              return obj9;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            onBeforeTransition = value;
            c5 = 3;
            return { value, done: true };
          }
        } catch (tmp16) {
          c5 = 3;
          throw tmp16;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _handleInviteUsers() {
  let selectedUsers;
  obj = _asyncToGenerator(async (arg0) => {
    let closure_0;
    let closure_1;
    let id;
    let value;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let onBeforeTransition;
        let arr;
        c6 = 2;
        const tmp4 = c5;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp;
            value = tmp4;
            onBeforeTransition = undefined;
            arr = length;
            if (length === undefined) {
              const _Array = Array;
              arr = Array.from(selectedUsers.getSelectedUsers());
            }
            value = undefined;
            c5 = 1;
            c6 = 1;
            return { value: "Reflect", done: true };
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              if (null != id) {
                if (closure_132_10.getChannelId() !== id.id) {
                  if (id.isDM()) {
                    if (1 === arr.length) {
                      c5 = 3;
                      c6 = 1;
                      let obj5 = { value: closure_132_20(arr, onBeforeTransition), done: false };
                      return obj5;
                    }
                  }
                  const obj14 = closure_132_1(closure_132_2[13]);
                  c5 = 2;
                  c6 = 1;
                  let obj7 = { value: obj14.addRecipients(id.id, arr, undefined, onBeforeTransition), done: false };
                  return obj7;
                }
              }
              if (null != id) {
                if (closure_132_10.getChannelId() === id.id) {
                  if (id.isDM()) {
                    let obj11 = closure_132_0(closure_132_2[14]);
                    obj11.showGuardCallAlert(
                      closure_132_4(async () => {
                        let v3;
                        if (c2 === 2) {
                          c2 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp2 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            const obj2 = { value, done: true };
                            return obj2;
                          } else {
                            return { value: "IconComponent", done: null };
                          }
                        } else {
                          try {
                            c2 = 2;
                            if (0 === v3) {
                              if (arg0 === 1) {
                                c2 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c2 = 3;
                                const obj3 = { value, done: true };
                                return obj3;
                              } else {
                                id = tmp3;
                                if (1 === length.length) {
                                  v3 = 2;
                                  c2 = 1;
                                  const obj5 = { value: closure_1_20(length, onBeforeTransition), done: false };
                                  return obj5;
                                } else {
                                  const obj7 = v3(c2[13]);
                                  v3 = 1;
                                  c2 = 1;
                                  const obj6 = {
                                    value: obj7.addRecipients(id.id, length, undefined, onBeforeTransition),
                                    done: false,
                                  };
                                  return obj6;
                                }
                              }
                            } else {
                              if (1 === v3) {
                                if (arg0 === 1) {
                                  c2 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c2 = 3;
                                  const obj8 = { value, done: true };
                                  return obj8;
                                }
                              } else if (2 === v3) {
                                if (arg0 === 1) {
                                  c2 = 3;
                                  throw value;
                                } else if (arg0 === 2) {
                                  c2 = 3;
                                  const obj9 = { value, done: true };
                                  return obj9;
                                }
                              } else if (arg0 === 1) {
                                c2 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c2 = 3;
                                const obj10 = { value, done: true };
                                return obj10;
                              } else {
                                obj = v3(c2[15]);
                                obj.call(closure_3, false, true);
                                v3(c2[16])(closure_3);
                                c2 = 3;
                                return { value: "IconComponent", done: null };
                              }
                              closure_3 = value;
                              v3 = 3;
                              const obj4 = id(c2[14]);
                              c2 = 1;
                              const obj11 = { value: obj4.monkeyPatchCall(), done: false };
                              return obj11;
                            }
                          } catch (tmp22) {
                            c2 = 3;
                            throw tmp22;
                          }
                        }
                      }),
                    );
                  } else if (id.isGroupDM()) {
                    let obj9 = closure_132_1(closure_132_2[13]);
                    c5 = 5;
                    c6 = 1;
                    let obj8 = { value: obj9.addRecipients(id.id, arr, undefined, onBeforeTransition), done: false };
                    return obj8;
                  }
                }
              }
              let obj6 = closure_132_1(closure_132_2[13]);
              let obj10 = { recipientIds: arr, location: "New Group DM", onBeforeTransition };
              c5 = 4;
              c6 = 1;
              const obj13 = { value: obj6.openPrivateChannel(obj10), done: false };
              return obj13;
            }
          } else if (2 === tmp4) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj15 = { value, done: true };
              return obj15;
            }
          } else if (3 === tmp4) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj16 = { value, done: true };
              return obj16;
            }
          } else if (4 === tmp4) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj17 = { value, done: true };
              return obj17;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj18 = { value, done: true };
            return obj18;
          } else {
            obj = closure_132_1(closure_132_2[15]);
            const str = "gdm_invite";
            obj.ring(value, arr, "gdm_invite");
          }
          const obj12 = closure_132_1(closure_132_2[17]);
          obj12.hideActionSheet(closure_132_16);
          c6 = 3;
          const obj19 = { value, done: true };
          return obj19;
        }
      } catch (tmp75) {
        c6 = 3;
        throw tmp75;
      }
    }
  });
  return obj(...arguments);
};
let _slicedToArray = _slicedToArray_mod;
({ ActivityIndicator: metroRequire, View: metroImportDefault } = react_native);
const UserRowModes = UserRowConstants.UserRowModes;
({
  InstantInviteSources: map1,
  AnalyticEvents: closure_14,
  AnalyticsSections: closure_15,
  NEW_GROUP_DM_POPOUT_ID: closure_16,
} = Constants);
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let createStyles = createStyles_mod;
obj = {
  button: obj2,
  container: { height: "100%", display: "flex" },
  instantInviteView: obj3,
  nameInputContainer: obj4,
  nameInput: size,
};
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE };
createStyles = createStyles.createStyles;
obj3 = { flexShrink: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj4 = { paddingHorizontal: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, marginBottom: 8, height: 40, width: "100%" };
let closure_19 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/NewGroupDMScreen.tsx");

export default function NewGroupDMScreen(navigation) {
  let TextInput;
  let _undefined;
  let c13;
  let c24;
  let c25;
  let closure_3;
  let closure_7;
  let currentUser;
  let first1;
  let first2;
  let intl;
  let items11;
  let locationPage;
  let numMembers;
  let obj10;
  let obj8;
  let selectedUserIds;
  let tmp13;
  let tmp14Result;
  let tmp16;
  let tmp17;
  let tmp19;
  navigation = navigation.navigation;
  const params = navigation.route.params;
  ({ channelId: importDefault, locationPage } = params);
  let flag = params.allowNameEdit;
  if (flag === undefined) {
    flag = false;
  }
  selectedUserIds = undefined;
  closure_7 = undefined;
  let ref;
  first1 = undefined;
  currentUser = undefined;
  first2 = undefined;
  c13 = undefined;
  closure_19 = undefined;
  let callback1;
  c24 = undefined;
  c25 = undefined;
  let callback3;
  let tmp = closure_19();
  _slicedToArray = tmp;
  let tmp2 = navigation;
  obj = navigation(locationPage[18]);
  let items = [ref];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(importDefault));
  let obj3 = navigation(locationPage[18]);
  const items1 = [currentUser];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let obj4 = stateFromStores1;
  let tmp5 = _slicedToArray;
  [selectedUserIds, closure_7] = stateFromStores1.useState([]);
  ref = stateFromStores1.useRef([]);
  const callback = stateFromStores1.useCallback((current) => {
    ref.current = current;
    closure_7(current);
  }, []);
  [first1, currentUser] = stateFromStores1.useState(false);
  [first2, tmp13] = stateFromStores1.useState("");
  [tmp16, tmp17] = _slicedToArray(stateFromStores1.useState(require("native").space.PX_12), 2);
  const tmp15 = _slicedToArray(stateFromStores1.useState(require("native").space.PX_12), 2);
  [tmp19, c13] = _slicedToArray(stateFromStores1.useState(false), 2);
  const tmp18 = _slicedToArray(stateFromStores1.useState(false), 2);
  const ref2 = stateFromStores1.useRef(false);
  let closure_15 = stateFromStores1.useRef({ offsetY: 0 });
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
  let sum = new Set(items3).size + 1;
  let c17 = sum;
  set = new Set(items3);
  const tmp23 = require("getGroupDMRecipientLimit")({ useNitroCapExperiment: true });
  const maxMemberLimit = tmp23;
  closure_19 = tmp24;
  let obj5 = require("GroupDMNitroCapExperiment");
  const config = obj5.useConfig({ location: "NewGroupDMScreen" });
  let obj6 = navigation(locationPage[21]);
  let result = obj6.shouldUseGroupDMParticipantLimitUI(config.enabled, tmp23);
  let c20 = result;
  let tmp27 = sum >= tmp23;
  let closure_21 = tmp27;
  navigation(locationPage[21]);
  let enabled = config.enabled;
  if (enabled) {
    const tmp2Result = tmp2(locationPage[21]);
    enabled = tmp2Result.isGroupDMNitroUpsellAudience(tmp29);
  }
  const items4 = [locationPage];
  const effect = obj4.useEffect(() => {
    let obj3;
    const obj2 = { type: closure_15.DM_INVITE, location: obj3 };
    obj3 = { page: locationPage };
    obj = AnalyticsUtilsDefault;
    obj.track(ref2.OPEN_POPOUT, obj2);
  }, items4);
  const items5 = [stateFromStores, navigation, memo, selectedUserIds, first2];
  callback1 = obj4.useCallback(
    stateFromStores(function* () {
      let closure_0;
      let closure_1;
      let closure_2;
      let intl;
      let obj2;
      let tmp;
      function handleInviteUsers() {
        return closure_1_22(...arguments);
      }
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let parent;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              parent = undefined;
              currentUser(true);
              c3 = 2;
              const items = [];
              HermesBuiltin.arraySpread(items, memo, HermesBuiltin.arraySpread(items, first, 0));
              c4 = 3;
              c5 = 1;
              const obj5 = {
                value: handleInviteUsers(stateFromStores, items, () => {
                  const tmp = parent;
                  parent = parent.getParent();
                  if (parent == null) {
                    parent = tmp;
                  }
                  return parent.goBack();
                }),
                done: false,
              };
              return obj5;
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_11(false);
            throw locationPage;
          } else {
            if (2 === c4) {
              c3 = 1;
              const obj6 = { key: "GROUP_DM_ADD_ERROR", content: intl.string(parent(locationPage[24]).t["N/9OFy"]) };
              const open = tmp(locationPage[23]).open;
              const tmp27 = tmp(locationPage[23]);
              intl = parent(locationPage[24]).intl;
              open(obj6);
            } else {
              if (3 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  closure_129_11(false);
                  c5 = 3;
                  const obj7 = { value, done: true };
                  return obj7;
                } else {
                  parent = value;
                  const tmp11 = null == closure_129_4 && null != parent && "" !== closure_129_12;
                  if (tmp11) {
                    c4 = 4;
                    c5 = 1;
                    const obj8 = { value: obj2.setName(parent, closure_129_12), done: false };
                    obj2 = tmp(locationPage[13]);
                    return obj8;
                  }
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp48) {
          locationPage = tmp48;
          if (0 === c3) {
            c5 = 3;
            throw tmp48;
          } else if (1 === tmp50) {
            c4 = 1;
          } else {
            c4 = 2;
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
    tmp23,
    tmp24,
    memo,
    selectedUserIds,
    result,
    tmp27,
    callback1,
    tmp,
  ];
  const layoutEffect = obj4.useLayoutEffect(() => {
    let button;
    let memberCount;
    let recipientLimit;
    let stringResult;
    let isGroupDMResult;
    if (stateFromStores != null) {
      isGroupDMResult = stateFromStores.isGroupDM();
    }
    let intl = navigation(locationPage[24]).intl;
    let string = intl.string;
    let t = navigation(locationPage[24]).t;
    if (isGroupDMResult) {
      stringResult = string(t["LR+Ptf"]);
    } else {
      stringResult = string(t["3hF1W4"]);
    }
    navigation = stringResult;
    const intl2 = navigation(locationPage[24]).intl;
    let obj2 = { numMembers, maxMemberLimit };
    let formatToPlainStringResult = intl2.formatToPlainString(navigation(locationPage[24]).t["9EQix0"], obj2);
    if (!c20) {
      let tmp7 = navigation;
      const intl3 = navigation(locationPage[24]).intl;
      let obj3 = { numMembers, maxMemberLimit };
      formatToPlainStringResult = intl3.formatToPlainString(navigation(locationPage[24]).t.YUhnoy, obj3);
    }
    const subtitle = formatToPlainStringResult;
    let closure_2 = c20 ? closure_21 : disabled;
    let obj4 = {
      title: "" + stringResult + " (" + formatToPlainStringResult + ")",
      headerTitle: c20
        ? () => {
            obj = { title: stringResult, memberCount, recipientLimit };
            return memberCount(GroupDMRecipientLimitTitleDefault, obj);
          }
        : (arg0) => {
            let str;
            if (arg0 == null) {
              throw new TypeError("Cannot destructure 'undefined' or 'null'.");
            } else {
              const merged = Object.assign(arg0, undefined);
              obj = { title: stringResult, subtitle, color: str };
              const GenericHeaderTitle = HeaderShared.GenericHeaderTitle;
              const merged1 = Object.assign(merged);
              str = "mobile-text-heading-primary";
              if (closure_2) {
                str = "text-feedback-critical";
              }
              return memberCount(GenericHeaderTitle, obj);
            }
          },
      headerRight(arg0) {
        let result;
        let tmp26;
        if (first1) {
          const obj2 = { color: button.button.color, size: "small" };
          result = memberCount(metroRequire, obj2);
        } else {
          let isGroupDMResult;
          if (stateFromStores != null) {
            isGroupDMResult = stateFromStores.isGroupDM();
          }
          const getRenderHeaderTextButton = HeaderShared.getRenderHeaderTextButton;
          const intl = intl4.intl;
          const string = intl.string;
          const t = intl4.t;
          if (isGroupDMResult) {
            const obj3 = { disabled: tmp26 };
            stringResult = string(t.OYkgVk);
            const renderHeaderTextButton = getRenderHeaderTextButton(
              stringResult,
              _asyncToGenerator(async () => {
                let c0;
                let c1;
                await closure_1_23();
                return value;
              }),
            );
            const merged = Object.assign(arg0);
            tmp26 = disabled;
            if (!tmp26) {
              let isGroupDMResult1;
              if (stateFromStores != null) {
                isGroupDMResult1 = stateFromStores.isGroupDM();
              }
              if (isGroupDMResult1) {
                isGroupDMResult1 = first.length <= 0;
              }
              tmp26 = isGroupDMResult1;
            }
            result = renderHeaderTextButton(obj3);
          } else {
            const obj4 = { disabled };
            const stringResult1 = string(t.CumH4u);
            const renderHeaderTextButton1 = getRenderHeaderTextButton(
              stringResult1,
              _asyncToGenerator(async () => {
                let c0;
                let c1;
                await closure_1_23();
                return value;
              }),
            );
            const merged1 = Object.assign(arg0);
            result = renderHeaderTextButton1(obj4);
          }
        }
        return result;
      },
    };
    navigation.setOptions(obj4);
  }, items6);
  const items7 = [memo, tmp23, result, enabled, callback];
  const callback2 = obj4.useCallback((id) => {
    let found;
    let closure_0 = id;
    const current = ref.current;
    const hasItem = current.includes(id.id);
    const items = [...current];
    new Set(items);
    if (!hasItem) {
      if (c20) {
        if (tmp3 >= maxMemberLimit) {
          if (enabled) {
            openGroupDMNitroCapLimitSheetDefault("NewGroupDMScreen");
          } else {
            obj = ToastUtils;
            obj.showMaxGroupMembers();
          }
        }
      }
    }
    if (hasItem) {
      found = current.filter((item) => item !== id.id);
    } else {
      found = [];
      found[HermesBuiltin.arraySpread(found, current, 0)] = id.id;
    }
    callback(found);
  }, items7);
  [c24, c25] = tmp5(obj4.useState(false), 2);
  tmp5(obj4.useState(false), 2);
  const tmp36 = require("useIsUsingClientTheme")();
  callback3 = obj4.useCallback(() => {
    let contentLength;
    let layoutHeight;
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
  const callback4 = obj4.useCallback((contentLength) => {
    closure_15.current.contentLength = contentLength;
    callback3();
  }, items8);
  const items10 = [callback3];
  const callback5 = obj4.useCallback((nativeEvent) => {
    closure_15.current.layoutHeight = nativeEvent.nativeEvent.layout.height;
    callback3();
  }, items9);
  let obj2 = { style: tmp.container, children: items11 };
  let isGroupDMResult;
  const callback6 = obj4.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    closure_15.current.layoutHeight = nativeEvent.layoutMeasurement.height;
    closure_15.current.offsetY = nativeEvent.contentOffset.y;
    callback3();
  }, items10);
  const tmp31 = stateFromStores;
  const tmp41 = maxMemberLimit;
  if (stateFromStores != null) {
    isGroupDMResult = stateFromStores.isGroupDM();
  }
  if (isGroupDMResult) {
    isGroupDMResult = null != stateFromStores1;
  }
  if (isGroupDMResult) {
    isGroupDMResult = !tmp24;
  }
  if (isGroupDMResult) {
    let obj7 = { style: tmp.instantInviteView, children: c17(tmp14Result, obj8) };
    obj8 = {
      onItemPressed: function () {
        return closure_0(...arguments);
      },
    };
    tmp14Result = require("InstantInviteShareApps");
    let closure_0 = tmp31(function* (arg0) {
      let channel;
      let formatToPlainString;
      let obj2;
      let obj7;
      let prop;
      closure_0 = arg0;
      if (channel === 2) {
        channel = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let code;
          channel = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              channel = 3;
              throw value;
            } else if (arg0 === 2) {
              channel = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_2 = tmp4;
              code = undefined;
              if (!closure_1_24) {
                closure_1_25(true);
                c3 = 1;
                channel = 1;
                const obj5 = { value: obj2.mobileCreateInvite(channel, constants.GROUP_DM), done: false };
                obj2 = require("InstantInviteActionCreators");
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            channel = 3;
            throw value;
          } else if (arg0 === 2) {
            channel = 3;
            obj = { value, done: true };
            return obj;
          } else {
            code = value;
            if (null != code) {
              const obj6 = { channel, code, message: formatToPlainString(prop, obj7), location: constants.GROUP_DM };
              const intl = closure_0(locationPage[24]).intl;
              formatToPlainString = intl.formatToPlainString;
              obj7 = { username: user.username, link: require("getInviteURL")(code) };
              prop = closure_0(locationPage[24]).t["+zWvOQ"];
              closure_0(obj6);
            }
            closure_1_25(false);
          }
          channel = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp14) {
          channel = 3;
          throw tmp14;
        }
      }
    });
    isGroupDMResult = c17(tmp42, obj7);
  }
  items11 = [isGroupDMResult, , ,];
  let tmp46 = null;
  if (flag) {
    const obj9 = { style: tmp.nameInputContainer, children: c17(TextInput, obj10) };
    obj10 = {
      style: tmp.nameInput,
      value: first2,
      onChangeText: tmp13,
      placeholder: intl.string(tmp2(locationPage[24]).t.KSVhrX),
    };
    TextInput = tmp2(locationPage[33]).TextInput;
    intl = tmp2(locationPage[24]).intl;
    tmp46 = c17(tmp42, obj9);
  }
  items11[1] = tmp46;
  const obj11 = {
    rowMode: first2.TOGGLE,
    onSelectUser: callback2,
    disabledUserIds: memo,
    selectedUserIds,
    focusOnAdd: false,
    withAffinitySuggestions: true,
    withAlphabeticalSections: false,
    insetEnd: tmp16,
    onContentLengthChange: callback4,
    onLayout: callback5,
    onScroll: callback6,
    disableGradient: true,
    disableStickySections: tmp36,
  };
  items11[2] = c17(require("SearchableUserList"), obj11);
  items11[3] = c17(require("GroupDMNitroUpsellBanner"), {
    location: "NewGroupDMScreen",
    memberCount: sum,
    recipientLimit: tmp23,
    floating: true,
    hideFloatingGradient: tmp19,
    onFloatingListInsetChange: tmp17,
  });
  return tmp41(closure_7, obj2);
}
