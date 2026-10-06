// discord_app/modules/user_profile/native/UserProfileContactButtons.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import RelationshipActionCreatorsDefault from "../../../actions/RelationshipActionCreators.tsx";
import navigateToLastChannelDefault from "../../main_tabs_v2/native/navigateToLastChannel.tsx";
import UserProfileAlertUtils from "UserProfileAlertUtils.tsx";
import ConfirmStartCall from "../../voice_calls/native/ConfirmStartCall.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let addRelationshipResult, dependencyMap, obj1, tmp2, tmp9, user, userDisplayName;

let c9;
let metroImportAll;
let obj2;
let obj3;
let closure_3 = ["icon", "label", "hasCustomProfileTheme", "isPending"];
const View = react_native.View;
const RelationshipTypes = Constants.RelationshipTypes;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { threeButtonLayout: obj2, flexGrow: { flex: 1 }, iconButtonGroup: obj3 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_12 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const ButtonComponent = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let CONTROL_SECONDARY_TEXT_DEFAULT;
      let hasCustomProfileTheme;
      let icon;
      let isPending;
      let label;
      let str;
      let tmp4;
      let tmp6;
      let tmp7;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(14);
      if (cResult[0] !== arg0) {
        ({ icon, label, hasCustomProfileTheme, isPending } = arg0);
        const tmp11 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = icon;
        cResult[2] = hasCustomProfileTheme;
        cResult[3] = isPending;
        cResult[4] = label;
        cResult[5] = tmp11;
        tmp8 = tmp11;
        tmp7 = label;
        tmp6 = isPending;
        tmp4 = icon;
      } else {
        tmp4 = cResult[1];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
      }
      if (false === tmp6) {
        str = "primary";
      } else {
        str = "secondary";
      }
      if ("primary" === str) {
        CONTROL_SECONDARY_TEXT_DEFAULT = nativeDefault.colors.WHITE;
      } else {
        CONTROL_SECONDARY_TEXT_DEFAULT = nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT;
      }
      if (cResult[6] === tmp4) {
        let tmp14;
        if (cResult[7] === CONTROL_SECONDARY_TEXT_DEFAULT) {
          tmp14 = cResult[8];
        }
        if (cResult[9] === tmp7) {
          if (cResult[10] === tmp8) {
            if (cResult[11] === tmp14) {
              let tmp16;
              if (cResult[12] === str) {
                tmp16 = cResult[13];
              }
              return tmp16;
            }
          }
        }
        const obj2 = { text: tmp7, icon: tmp14, accessibilityLabel: tmp7, variant: str, size: "md", grow: true };
        const Button = components_Button_Button.Button;
        const merged = Object.assign(tmp8);
        const tmp21 = metroImportAll(Button, obj2);
        cResult[9] = tmp7;
        cResult[10] = tmp8;
        cResult[11] = tmp14;
        cResult[12] = str;
        cResult[13] = tmp21;
        tmp16 = tmp21;
      }
      const tmp15 = metroImportAll(tmp4, { color: CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs" });
      cResult[6] = tmp4;
      cResult[7] = CONTROL_SECONDARY_TEXT_DEFAULT;
      cResult[8] = tmp15;
      tmp14 = tmp15;
    }
  : (label) => {
      let CONTROL_SECONDARY_TEXT_DEFAULT;
      let hasCustomProfileTheme;
      let icon;
      let isPending;
      let str;
      label = label.label;
      ({ icon, hasCustomProfileTheme, isPending } = label);
      const merged = Object.assign(label, Object.assign({ icon: 0, label: 0, hasCustomProfileTheme: 0, isPending: 0 }));
      if (false === isPending) {
        str = "primary";
      } else {
        str = "secondary";
      }
      if ("primary" === str) {
        CONTROL_SECONDARY_TEXT_DEFAULT = nativeDefault.colors.WHITE;
      } else {
        CONTROL_SECONDARY_TEXT_DEFAULT = nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT;
      }
      const obj = {
        text: label,
        icon: metroImportAll(icon, { color: CONTROL_SECONDARY_TEXT_DEFAULT, size: "xs" }),
        accessibilityLabel: label,
        variant: str,
        size: "md",
        grow: true,
      };
      const Button = components_Button_Button.Button;
      const merged1 = Object.assign(merged);
      return metroImportAll(Button, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let _location;
      let context;
      let hasCustomProfileTheme;
      let tmp5;
      let tmp6;
      let tmp8;
      let trackUserProfileAction;
      let obj = user(576);
      const cResult = obj.c(23);
      user = user.user;
      ({ hasCustomProfileTheme, location: _location, ButtonComponent } = user);
      const newestAnalyticsLocation = trackUserProfileAction(6664)().newestAnalyticsLocation;
      let obj2 = user(7872);
      const tmp4 = trackUserProfileAction;
      trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
      if (_location == null) {
        _location = newestAnalyticsLocation;
      }
      if (cResult[0] !== _location) {
        let obj3 = { location: _location };
        cResult[0] = _location;
        cResult[1] = obj3;
        tmp5 = obj3;
      } else {
        tmp5 = cResult[1];
      }
      dependencyMap = tmp5;
      const tmpResult = user(12903);
      const gameFriendsForUser = tmpResult.useGameFriendsForUser(user.id);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RelationshipStore];
        cResult[2] = items;
        tmp6 = items;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== user.id) {
        const fn = function _() {
          return RelationshipStore.getRelationshipType(user.id);
        };
        cResult[3] = user.id;
        cResult[4] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[4];
      }
      const tmpResult2 = user(504);
      const stateFromStores = tmpResult2.useStateFromStores(tmp6, tmp8);
      const tmp4Result = tmp4(4728);
      const name = tmp4Result.useName(user);
      if (stateFromStores !== RelationshipTypes.FRIEND) {
        if (stateFromStores !== RelationshipTypes.BLOCKED) {
          if (gameFriendsForUser.length > 0) {
            return null;
          } else if (stateFromStores === RelationshipTypes.PENDING_INCOMING) {
            return null;
          } else {
            let UserPlusIcon;
            let tmp12;
            let tmp14;
            if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
              UserPlusIcon = tmp(12976).UserClockIcon;
            } else {
              UserPlusIcon = tmp(4839).UserPlusIcon;
            }
            if (cResult[5] !== (stateFromStores === RelationshipTypes.PENDING_OUTGOING)) {
              let stringResult;
              const intl = tmp(1126).intl;
              const string = intl.string;
              const t = tmp(1126).t;
              if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
                stringResult = string(t["fMm5q/"]);
              } else {
                stringResult = string(t["7815ae"]);
              }
              class F {
                constructor() {
                  if (closure_3 === RelationshipTypes.PENDING_OUTGOING) {
                    tmp8 = closure_0;
                    tmp9 = closure_2;
                    obj3 = closure_0(closure_2[19]);
                    obj1 = { userDisplayName: null, onConfirm: null };
                    tmp10 = closure_4;
                    obj1.userDisplayName = closure_4;
                    obj1.onConfirm = function onConfirm() {
                      closure_1_1({ action: "CANCEL_FRIEND_REQUEST" });
                      const obj = trackUserProfileAction(closure_2[20]);
                      obj.cancelFriendRequest(id.id, closure_1_2);
                    };
                    result = obj3.confirmCancelFriendRequest(obj1);
                  } else {
                    tmp = trackUserProfileAction;
                    tmp2 = trackUserProfileAction({ action: "SEND_FRIEND_REQUEST" });
                    tmp3 = closure_1;
                    tmp4 = closure_2;
                    obj = closure_1(closure_2[20]);
                    obj5 = { userId: null, context: null };
                    tmp5 = user;
                    obj5.userId = user.id;
                    tmp6 = closure_2;
                    obj5.context = closure_2;
                    addRelationshipResult = obj.addRelationship(obj5);
                  }
                  return;
                }
              }
              cResult[6] = stringResult;
              tmp12 = stringResult;
            } else {
              tmp12 = cResult[6];
            }
            if (cResult[7] !== (stateFromStores === RelationshipTypes.PENDING_OUTGOING)) {
              let string2Result;
              const intl2 = tmp(1126).intl;
              const string2 = intl2.string;
              const t2 = tmp(1126).t;
              if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
                string2Result = string2(t2.H0Ql7N);
              } else {
                string2Result = string2(t2.gc9aSx);
              }
              class F {
                constructor() {
                  if (closure_3 === RelationshipTypes.PENDING_OUTGOING) {
                    tmp8 = closure_0;
                    tmp9 = closure_2;
                    obj3 = closure_0(closure_2[19]);
                    obj1 = { userDisplayName: null, onConfirm: null };
                    tmp10 = closure_4;
                    obj1.userDisplayName = closure_4;
                    obj1.onConfirm = function onConfirm() {
                      closure_1_1({ action: "CANCEL_FRIEND_REQUEST" });
                      const obj = trackUserProfileAction(closure_2[20]);
                      obj.cancelFriendRequest(id.id, closure_1_2);
                    };
                    result = obj3.confirmCancelFriendRequest(obj1);
                  } else {
                    tmp = trackUserProfileAction;
                    tmp2 = trackUserProfileAction({ action: "SEND_FRIEND_REQUEST" });
                    tmp3 = closure_1;
                    tmp4 = closure_2;
                    obj = closure_1(closure_2[20]);
                    obj5 = { userId: null, context: null };
                    tmp5 = user;
                    obj5.userId = user.id;
                    tmp6 = closure_2;
                    obj5.context = closure_2;
                    addRelationshipResult = obj.addRelationship(obj5);
                  }
                  return;
                }
              }
              cResult[8] = string2Result;
              tmp14 = string2Result;
            } else {
              tmp14 = cResult[8];
            }
            if (cResult[9] === tmp5) {
              if (cResult[10] === name) {
                if (cResult[11] === stateFromStores) {
                  if (cResult[12] === trackUserProfileAction) {
                    let tmp16;
                    if (cResult[13] === user.id) {
                      tmp16 = cResult[14];
                    }
                    if (cResult[15] === ButtonComponent) {
                      if (cResult[16] === tmp14) {
                        if (cResult[17] === hasCustomProfileTheme) {
                          if (cResult[18] === UserPlusIcon) {
                            if ((cResult[19] === stateFromStores) === RelationshipTypes.PENDING_OUTGOING) {
                              if (cResult[20] === tmp12) {
                                let tmp17;
                                if (cResult[21] === tmp16) {
                                  tmp17 = cResult[22];
                                }
                                return tmp17;
                              }
                            }
                          }
                        }
                      }
                    }
                    let obj4 = {
                      icon: UserPlusIcon,
                      label: null,
                      accessibilityHint: tmp14,
                      onPress: tmp16,
                      hasCustomProfileTheme,
                      isPending: stateFromStores === RelationshipTypes.PENDING_OUTGOING,
                    };
                    class F {
                      constructor() {
                        if (closure_3 === RelationshipTypes.PENDING_OUTGOING) {
                          tmp8 = closure_0;
                          tmp9 = closure_2;
                          obj3 = closure_0(closure_2[19]);
                          obj1 = { userDisplayName: null, onConfirm: null };
                          tmp10 = closure_4;
                          obj1.userDisplayName = closure_4;
                          obj1.onConfirm = function onConfirm() {
                            closure_1_1({ action: "CANCEL_FRIEND_REQUEST" });
                            const obj = trackUserProfileAction(closure_2[20]);
                            obj.cancelFriendRequest(id.id, closure_1_2);
                          };
                          result = obj3.confirmCancelFriendRequest(obj1);
                        } else {
                          tmp = trackUserProfileAction;
                          tmp2 = trackUserProfileAction({ action: "SEND_FRIEND_REQUEST" });
                          tmp3 = closure_1;
                          tmp4 = closure_2;
                          obj = closure_1(closure_2[20]);
                          obj5 = { userId: null, context: null };
                          tmp5 = user;
                          obj5.userId = user.id;
                          tmp6 = closure_2;
                          obj5.context = closure_2;
                          addRelationshipResult = obj.addRelationship(obj5);
                        }
                        return;
                      }
                    }
                    const tmp19 = closure_8(ButtonComponent, obj4);
                    cResult[15] = ButtonComponent;
                    cResult[16] = tmp14;
                    cResult[17] = hasCustomProfileTheme;
                    cResult[18] = UserPlusIcon;
                    cResult[19] = stateFromStores === RelationshipTypes.PENDING_OUTGOING;
                    cResult[20] = tmp12;
                    cResult[21] = tmp16;
                    cResult[22] = tmp19;
                    tmp17 = tmp19;
                  }
                }
              }
            }
            class F {
              constructor() {
                if (closure_3 === RelationshipTypes.PENDING_OUTGOING) {
                  tmp8 = closure_0;
                  tmp9 = closure_2;
                  obj3 = closure_0(closure_2[19]);
                  obj1 = { userDisplayName: null, onConfirm: null };
                  tmp10 = closure_4;
                  obj1.userDisplayName = closure_4;
                  obj1.onConfirm = function onConfirm() {
                    closure_1_1({ action: "CANCEL_FRIEND_REQUEST" });
                    const obj = trackUserProfileAction(closure_2[20]);
                    obj.cancelFriendRequest(id.id, closure_1_2);
                  };
                  result = obj3.confirmCancelFriendRequest(obj1);
                } else {
                  tmp = trackUserProfileAction;
                  tmp2 = trackUserProfileAction({ action: "SEND_FRIEND_REQUEST" });
                  tmp3 = closure_1;
                  tmp4 = closure_2;
                  obj = closure_1(closure_2[20]);
                  obj5 = { userId: null, context: null };
                  tmp5 = user;
                  obj5.userId = user.id;
                  tmp6 = closure_2;
                  obj5.context = closure_2;
                  addRelationshipResult = obj.addRelationship(obj5);
                }
                return;
              }
            }
            cResult[9] = tmp5;
            cResult[10] = name;
            cResult[11] = stateFromStores;
            cResult[12] = trackUserProfileAction;
            cResult[13] = user.id;
            cResult[14] = F;
            tmp16 = F;
          }
        }
      }
      return null;
    }
  : (user) => {
      let context;
      let hasCustomProfileTheme;
      user = user.user;
      let _location = user.location;
      let trackUserProfileAction;
      dependencyMap = undefined;
      let stateFromStores;
      userDisplayName = undefined;
      ({ hasCustomProfileTheme, ButtonComponent } = user);
      const newestAnalyticsLocation = trackUserProfileAction(6664)().newestAnalyticsLocation;
      let obj = user(7872);
      const tmp = trackUserProfileAction;
      trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
      if (_location == null) {
        _location = newestAnalyticsLocation;
      }
      dependencyMap = { location: _location };
      const tmp3Result = user(12903);
      const gameFriendsForUser = tmp3Result.useGameFriendsForUser(user.id);
      const items = [RelationshipStore];
      const tmp3Result2 = user(504);
      stateFromStores = tmp3Result2.useStateFromStores(items, () => RelationshipStore.getRelationshipType(user.id));
      const tmpResult = tmp(4728);
      userDisplayName = tmpResult.useName(user);
      if (stateFromStores !== RelationshipTypes.FRIEND) {
        if (stateFromStores !== RelationshipTypes.BLOCKED) {
          if (gameFriendsForUser.length > 0) {
            return null;
          } else if (stateFromStores === RelationshipTypes.PENDING_INCOMING) {
            return null;
          } else {
            let UserPlusIcon;
            let stringResult;
            let string2Result;
            if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
              UserPlusIcon = tmp3(12976).UserClockIcon;
            } else {
              UserPlusIcon = tmp3(4839).UserPlusIcon;
            }
            const intl = tmp3(1126).intl;
            const string = intl.string;
            const t = tmp3(1126).t;
            if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
              stringResult = string(t["fMm5q/"]);
            } else {
              stringResult = string(t["7815ae"]);
            }
            const intl2 = tmp3(1126).intl;
            const string2 = intl2.string;
            const t2 = tmp3(1126).t;
            if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
              string2Result = string2(t2.H0Ql7N);
            } else {
              string2Result = string2(t2.gc9aSx);
            }
            let obj2 = {
              icon: UserPlusIcon,
              label: stringResult,
              accessibilityHint: string2Result,
              onPress() {
                let id;
                if (stateFromStores === RelationshipTypes.PENDING_OUTGOING) {
                  const obj2 = {
                    userDisplayName,
                    onConfirm() {
                      closure_1_1({ action: "CANCEL_FRIEND_REQUEST" });
                      const obj = trackUserProfileAction(closure_2[20]);
                      obj.cancelFriendRequest(id.id, closure_1_2);
                    },
                  };
                  const obj3 = UserProfileAlertUtils;
                  const result = obj3.confirmCancelFriendRequest(obj2);
                } else {
                  trackUserProfileAction({ action: "SEND_FRIEND_REQUEST" });
                  let obj = RelationshipActionCreatorsDefault;
                  const obj4 = { userId: user.id, context };
                  obj.addRelationship(obj4);
                }
              },
              hasCustomProfileTheme,
              isPending: stateFromStores === RelationshipTypes.PENDING_OUTGOING,
            };
            return closure_8(ButtonComponent, obj2);
          }
        }
      }
      return null;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let _location;
      let accessibilityHint;
      let closure_2;
      let disableCalls;
      let disableMessage;
      let first;
      let hasCustomProfileTheme;
      let inCall;
      let style;
      let text;
      let tmp10;
      let tmp13Result;
      let tmp7;
      let obj = user(576);
      const cResult = obj.c(88);
      user = user.user;
      ({ disableMessage, disableCalls, location: _location, hasCustomProfileTheme, style } = user);
      let obj2 = user(7872);
      const trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
      closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RelationshipStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== user.id) {
        const fn = function c() {
          return RelationshipStore.getRelationshipType(user.id);
        };
        cResult[1] = user.id;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = user(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      const tmpResult2 = user(12903);
      const gameFriendsForUser = tmpResult2.useGameFriendsForUser(user.id);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function x() {
          trackUserProfileAction(closure_2[21])();
          const obj = trackUserProfileAction(closure_2[22]);
          obj.hideAllActionSheets();
          const obj2 = trackUserProfileAction(closure_2[23]);
          obj2.popAll();
        };
        cResult[3] = fn2;
        tmp10 = fn2;
      } else {
        tmp10 = cResult[3];
      }
      dependencyMap = tmp10;
      if (cResult[4] === trackUserProfileAction) {
        let tmp11;
        let tmp23;
        let tmp27;
        if (cResult[5] === user.id) {
          tmp11 = cResult[6];
        }
        if (cResult[7] !== trackUserProfileAction) {
          class O {
            constructor() {
              trackUserProfileAction({ action: "VOICE_CALL" });
              closure_2();
            }
          }
          cResult[7] = trackUserProfileAction;
          cResult[8] = O;
        } else {
          class O {
            constructor() {
              trackUserProfileAction({ action: "VOICE_CALL" });
              closure_2();
            }
          }
        }
        const tmp14 = trackUserProfileAction(12978)(user.id, false, O);
        const handlePress = tmp14.handlePress;
        ({ text, inCall, accessibilityHint } = tmp14);
        if (hasCustomProfileTheme) {
          class O {
            constructor() {
              trackUserProfileAction({ action: "VOICE_CALL" });
              closure_2();
            }
          }
        }
        const colors = tmp13(587).colors;
        const tmp15 = hasCustomProfileTheme ? colors.WHITE : colors.CONTROL_SECONDARY_TEXT_DEFAULT;
        if (stateFromStores !== RelationshipTypes.FRIEND) {
          class O {
            constructor() {
              trackUserProfileAction({ action: "VOICE_CALL" });
              closure_2();
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[52] === Symbol.for("react.memo_cache_sentinel")) {
          class O {
            constructor() {
              trackUserProfileAction({ action: "VOICE_CALL" });
              closure_2();
            }
          }
          tmp18[1] = trackUserProfileAction(587).space.PX_12;
          cResult[52] = tmp18;
        } else {
          class O {
            constructor() {
              trackUserProfileAction({ action: "VOICE_CALL" });
              closure_2();
            }
          }
        }
        if (cResult[53] !== style) {
          class O {
            constructor() {
              trackUserProfileAction({ action: "VOICE_CALL" });
              closure_2();
            }
          }
          tmp20[0] = tmp18;
          tmp20[1] = style;
          cResult[53] = style;
          cResult[54] = tmp20;
        } else {
          class O {
            constructor() {
              trackUserProfileAction({ action: "VOICE_CALL" });
              closure_2();
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[55] === Symbol.for("react.memo_cache_sentinel")) {
          class O {
            constructor() {
              trackUserProfileAction({ action: "VOICE_CALL" });
              closure_2();
            }
          }
          cResult[55] = tmp22;
        } else {
          class O {
            constructor() {
              trackUserProfileAction({ action: "VOICE_CALL" });
              closure_2();
            }
          }
        }
        const _Symbol3 = Symbol;
        if (cResult[56] === Symbol.for("react.memo_cache_sentinel")) {
          class O {
            constructor() {
              trackUserProfileAction({ action: "VOICE_CALL" });
              closure_2();
            }
          }
          const stringResult = obj5.string(user(1126).t.zROXEV);
          cResult[56] = stringResult;
          tmp23 = stringResult;
        } else {
          class O {
            constructor() {
              trackUserProfileAction({ action: "VOICE_CALL" });
              closure_2();
            }
          }
        }
        if (cResult[57] !== tmp15) {
          class O {
            constructor() {
              trackUserProfileAction({ action: "VOICE_CALL" });
              closure_2();
            }
          }
          const obj3 = { color: tmp15, size: "xs" };
          cResult[57] = tmp15;
          cResult[58] = closure_8(user(5862).ChatIcon, obj3);
          const tmp26 = closure_8(user(5862).ChatIcon, obj3);
        } else {
          class O {
            constructor() {
              trackUserProfileAction({ action: "VOICE_CALL" });
              closure_2();
            }
          }
        }
        const _Symbol4 = Symbol;
        if (cResult[59] === Symbol.for("react.memo_cache_sentinel")) {
          class O {
            constructor() {
              trackUserProfileAction({ action: "VOICE_CALL" });
              closure_2();
            }
          }
          const stringResult1 = obj7.string(user(1126).t.zROXEV);
          cResult[59] = stringResult1;
          tmp27 = stringResult1;
        } else {
          class O {
            constructor() {
              trackUserProfileAction({ action: "VOICE_CALL" });
              closure_2();
            }
          }
        }
        if (cResult[60] !== user) {
          class O {
            constructor() {
              trackUserProfileAction({ action: "VOICE_CALL" });
              closure_2();
            }
          }
          const formatToPlainString = tmp30.formatToPlainString;
          const obj4 = { name: tmp13Result.getName(user) };
          const zFfSFQ = tmp(1126).t.zFfSFQ;
          tmp13Result = trackUserProfileAction(4728);
          cResult[60] = user;
          cResult[61] = formatToPlainString(zFfSFQ, obj4);
          const formatToPlainStringResult = formatToPlainString(zFfSFQ, obj4);
        } else {
          class O {
            constructor() {
              trackUserProfileAction({ action: "VOICE_CALL" });
              closure_2();
            }
          }
        }
        if (cResult[62] === disableMessage) {
          class O {
            constructor() {
              trackUserProfileAction({ action: "VOICE_CALL" });
              closure_2();
            }
          }
        }
        class D {
          constructor() {
            trackUserProfileAction({ action: "SEND_MESSAGE" });
            closure_2();
            const obj = ChannelActionCreatorsDefault;
            const obj2 = { recipientIds: user.id };
            obj.openPrivateChannel(obj2);
          }
        }
        tmp35[0] = tmp22;
        const obj6 = {
          text: tmp23,
          icon: tmp25,
          accessibilityLabel: tmp27,
          accessibilityHint: tmp29,
          variant: "secondary",
          size: "md",
          grow: true,
          onPress: tmp11,
          disabled: disableMessage,
        };
        tmp35[1] = closure_8(user(5601).Button, obj6);
        cResult[62] = disableMessage;
        cResult[63] = tmp11;
        cResult[64] = tmp25;
        cResult[65] = tmp29;
        cResult[66] = "secondary";
        cResult[67] = closure_8(View, tmp35);
        const tmp36 = closure_8(View, tmp35);
      }
      class D {
        constructor() {
          trackUserProfileAction({ action: "SEND_MESSAGE" });
          closure_2();
          const obj = ChannelActionCreatorsDefault;
          const obj2 = { recipientIds: user.id };
          obj.openPrivateChannel(obj2);
        }
      }
      cResult[4] = trackUserProfileAction;
      cResult[5] = user.id;
      cResult[6] = D;
      tmp11 = D;
    }
  : (user) => {
      let Button;
      let Button2;
      let accessibilityHint;
      let disableCalls;
      let disableMessage;
      let fn2;
      let formatToPlainString;
      let formatToPlainString2;
      let hasCustomProfileTheme;
      let inCall;
      let intl;
      let intl2;
      let intl4;
      let intl5;
      let intl7;
      let intl9;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let obj10;
      let obj12;
      let obj16;
      let obj17;
      let obj19;
      let obj6;
      let obj9;
      let stringResult;
      let style;
      let text;
      let tmp5Result;
      let tmp5Result2;
      let zFfSFQ;
      let zFfSFQ2;
      user = user.user;
      ({ disableMessage, disableCalls, hasCustomProfileTheme, style } = user);
      let onPress;
      const _location = user.location;
      let obj = user(onPress[12]);
      const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
      const tmp3 = closure_10();
      let obj2 = user(onPress[14]);
      const items = [RelationshipStore];
      const stateFromStores = obj2.useStateFromStores(items, () => RelationshipStore.getRelationshipType(user.id));
      let obj3 = user(onPress[13]);
      const gameFriendsForUser = obj3.useGameFriendsForUser(user.id);
      const tmp6 = trackUserProfileAction(onPress[25])(user.id, false, () => {
        trackUserProfileAction({ action: "VOICE_CALL" });
        navigateToLastChannelDefault();
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideAllActionSheets();
        const obj2 = ModalActionCreatorsDefault;
        obj2.popAll();
      });
      onPress = tmp6.handlePress;
      ({ text, inCall, accessibilityHint } = tmp6);
      let str = "secondary";
      if (hasCustomProfileTheme) {
        str = "primary";
      }
      const colors = tmp5(tmp2[7]).colors;
      const tmp7 = hasCustomProfileTheme ? colors.WHITE : colors.CONTROL_SECONDARY_TEXT_DEFAULT;
      function handleMessage() {
        trackUserProfileAction({ action: "SEND_MESSAGE" });
        navigateToLastChannelDefault();
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideAllActionSheets();
        const obj2 = ModalActionCreatorsDefault;
        obj2.popAll();
        const obj3 = ChannelActionCreatorsDefault;
        const obj4 = { recipientIds: user.id };
        obj3.openPrivateChannel(obj4);
      }
      if (stateFromStores !== RelationshipTypes.FRIEND) {
        if (stateFromStores !== RelationshipTypes.BLOCKED) {
          if (stateFromStores !== RelationshipTypes.PENDING_INCOMING) {
            let tmp9Result;
            if (0 === gameFriendsForUser.length) {
              let obj4 = { style: items1, children: items2 };
              items1 = [tmp3.threeButtonLayout, style];
              const obj5 = { style: tmp3.flexGrow, children: closure_8(closure_12, obj6) };
              obj6 = { user, location: _location, hasCustomProfileTheme, ButtonComponent };
              items2 = [closure_8(View, obj5)];
              const obj7 = { style: tmp3.iconButtonGroup, children: items3 };
              const obj8 = {
                icon: closure_8(user(onPress[26]).ChatIcon, obj9),
                accessibilityLabel: intl7.string(user(onPress[18]).t.zROXEV),
                accessibilityHint: formatToPlainString2(zFfSFQ2, obj10),
                variant: str,
                size: "md",
                onPress: handleMessage,
                disabled: disableMessage,
              };
              const IconButton = tmp(tmp2[27]).IconButton;
              obj9 = { color: tmp7, size: "xs" };
              intl7 = tmp(tmp2[18]).intl;
              const intl8 = tmp(tmp2[18]).intl;
              formatToPlainString2 = intl8.formatToPlainString;
              obj10 = { name: tmp5Result.getName(user) };
              zFfSFQ2 = tmp(tmp2[18]).t.zFfSFQ;
              tmp5Result = trackUserProfileAction(onPress[15]);
              items3 = [closure_8(IconButton, obj8)];
              const obj11 = {
                icon: closure_8(user(onPress[28]).PhoneCallIcon, obj12),
                accessibilityLabel: intl9.string(user(onPress[18]).t.JJogjm),
                accessibilityHint,
                variant: str,
                size: "md",
                onPress,
                disabled: disableCalls,
              };
              const IconButton2 = tmp(tmp2[27]).IconButton;
              obj12 = { color: tmp7, size: "xs" };
              intl9 = tmp(tmp2[18]).intl;
              if (accessibilityHint == null) {
                const intl10 = tmp(tmp2[18]).intl;
                accessibilityHint = intl10.string(tmp(tmp2[18]).t.focH1t);
              }
              if (!inCall) {
                onPress = () => {
                  const obj = ConfirmStartCall;
                  return obj.confirmStartCall(fn);
                };
              }
              if (!disableCalls) {
                disableCalls = null == text;
              }
              items3[1] = closure_8(IconButton2, obj11);
              items2[1] = closure_9(View, obj7);
              tmp9Result = closure_9(View, obj4, "three-button-group");
            }
            return tmp9Result;
          }
        }
      }
      const obj13 = { style: items4, children: items5 };
      items4 = [{ flexDirection: "row", gap: trackUserProfileAction(tmp2[7]).space.PX_12 }, style];
      const obj15 = { style: { flex: 1 }, children: closure_8(Button, obj16) };
      obj16 = {
        text: intl.string(user(onPress[18]).t.zROXEV),
        icon: closure_8(user(onPress[26]).ChatIcon, { color: tmp7, size: "xs" }),
        accessibilityLabel: intl2.string(user(onPress[18]).t.zROXEV),
        accessibilityHint: formatToPlainString(zFfSFQ, obj17),
        variant: str,
        size: "md",
        grow: true,
        onPress: handleMessage,
        disabled: disableMessage,
      };
      ({ flexDirection: "row", gap: trackUserProfileAction(onPress[7]).space.PX_12 });
      Button = tmp(tmp2[10]).Button;
      intl = tmp(tmp2[18]).intl;
      intl2 = tmp(tmp2[18]).intl;
      const intl3 = tmp(tmp2[18]).intl;
      formatToPlainString = intl3.formatToPlainString;
      obj17 = { name: tmp5Result2.getName(user) };
      zFfSFQ = tmp(tmp2[18]).t.zFfSFQ;
      tmp5Result2 = trackUserProfileAction(onPress[15]);
      items5 = [closure_8(View, obj15)];
      const obj18 = { style: { flex: 1 }, children: closure_8(Button2, obj19) };
      obj19 = {
        text: intl4.string(user(onPress[18]).t.JJogjm),
        icon: closure_8(user(onPress[28]).PhoneCallIcon, { color: tmp7, size: "xs" }),
        accessibilityLabel: intl5.string(user(onPress[18]).t.JJogjm),
        accessibilityHint: stringResult,
        variant: str,
        size: "md",
        grow: true,
        onPress: fn2,
        disabled: disableCalls || null == text,
      };
      Button2 = tmp(tmp2[10]).Button;
      intl4 = tmp(tmp2[18]).intl;
      intl5 = tmp(tmp2[18]).intl;
      stringResult = accessibilityHint;
      if (accessibilityHint == null) {
        const intl6 = tmp(tmp2[18]).intl;
        stringResult = intl6.string(tmp(tmp2[18]).t.focH1t);
      }
      fn2 = onPress;
      if (!inCall) {
        fn2 = () => {
          const obj = ConfirmStartCall;
          return obj.confirmStartCall(fn);
        };
      }
      items5[1] = closure_8(View, obj18);
      tmp9Result = closure_9(View, obj13, "two-button-group");
    };
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileContactButtons.tsx");

export default tmp5;
