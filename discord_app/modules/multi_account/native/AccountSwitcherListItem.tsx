// discord_app/modules/multi_account/native/AccountSwitcherListItem.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl4 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import react_native from "../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import CircleCheckIcon2 from "../../../design/components/Icon/native/redesign/generated/CircleCheckIcon.tsx";
import CircleInformationIcon2 from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import MultiAccountStore from "../MultiAccountStore.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native2 from "../../../../_runtime/00017_react-native.js";
import UserRecord from "../../../records/UserRecord.tsx";
import StreamerModeStore from "../../../stores/StreamerModeStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c10;
let c3;
let c9;
let closure_4;
({ Pressable: c3, View: closure_4 } = react_native2);
const MultiAccountTokenStatus = MultiAccountStore.MultiAccountTokenStatus;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({
  accountListTag: { marginLeft: 12, flex: 1 },
  tagContainer: { display: "flex", flexDirection: "row" },
  accountSwitcherListItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  username: { flexShrink: 1 },
  accountInfo: { flex: 1, minWidth: "30%", display: "flex", flexDirection: "row", alignItems: "center" },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (user) => {
      let currentUser;
      let tmp13;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(4);
      user = user.user;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function s() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      let id1;
      const id = user.id;
      if (stateFromStores != null) {
        id1 = stateFromStores.id;
      }
      if (id === id1) {
        let tmp14;
        const _Symbol2 = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { color: nativeDefault.colors.TEXT_BRAND };
          const CircleCheckIcon = CircleCheckIcon2.CircleCheckIcon;
          const tmp17 = React4(CircleCheckIcon, obj2);
          cResult[2] = tmp17;
          tmp14 = tmp17;
        } else {
          tmp14 = cResult[2];
        }
        tmp13 = tmp14;
      } else {
        tmp13 = null;
        if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
          let tmp9;
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
            const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
            const tmp12 = React4(CircleInformationIcon, obj3);
            cResult[3] = tmp12;
            tmp9 = tmp12;
          } else {
            tmp9 = cResult[3];
          }
          tmp13 = tmp9;
        }
      }
      return tmp13;
    }
  : (user) => {
      let currentUser;
      let tmp6;
      user = user.user;
      const items = [UserStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      let id1;
      const id = user.id;
      if (stateFromStores != null) {
        id1 = stateFromStores.id;
      }
      if (id === id1) {
        const obj2 = { color: nativeDefault.colors.TEXT_BRAND };
        const CircleCheckIcon = CircleCheckIcon2.CircleCheckIcon;
        tmp6 = React4(CircleCheckIcon, obj2);
      } else {
        tmp6 = null;
        if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
          const obj3 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
          const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
          tmp6 = React4(CircleInformationIcon, obj3);
        }
      }
      return tmp6;
    };
let closure_12 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (arg0) {
      let accessibilityRole;
      let accessibilityState;
      let accountInfo;
      let accountSwitcherListItem;
      let currentUser;
      let delayLongPress;
      let items3;
      let items4;
      let items5;
      let leading;
      let obj4;
      let onPressUser;
      let showActiveAccountLabel;
      let sortHandlers;
      let tmp10;
      let tmp11;
      let tmp6;
      let tmp7;
      let trailing;
      let user;
      const obj = react2;
      const cResult = obj.c(51);
      ({ user, onPressUser, showActiveAccountLabel, sortHandlers, delayLongPress, leading, trailing } = arg0);
      const tmp4 = undefined !== showActiveAccountLabel && showActiveAccountLabel;
      const tmp5 = closure_11();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [StreamerModeStore];
        const fn = function b() {
          return StreamerModeStore.hidePersonalInformation;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserStore];
        class U {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        cResult[2] = items1;
        cResult[3] = U;
        tmp11 = U;
        tmp10 = items1;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      const tmpResult2 = get_initialized;
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp10, tmp11);
      let id1;
      const id = user.id;
      if (stateFromStores1 != null) {
        id1 = stateFromStores1.id;
      }
      if (cResult[4] !== user) {
        const self = this;
        const self2 = this;
        class U {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        const tmp16 = new UserRecord(user);
        cResult[4] = user;
        cResult[5] = tmp16;
        obj4 = tmp16;
      } else {
        obj4 = cResult[5];
      }
      if (id === id1) {
        let PressableOpacity;
        let tmp26;
        let tmp28;
        let tmp30;
        if (tmp4) {
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { variant: "text-sm/semibold", color: "text-brand", children: obj8.string(intl4.t.seV8yt) };
            const Text2 = Text_Text.Text;
            class U {
              constructor() {
                return currentUser.getCurrentUser();
              }
            }
            cResult[6] = React4(Text2, obj2);
            const tmp25 = React4(Text2, obj2);
          }
          class U {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
        }
        if (null == onPressUser) {
          PressableOpacity = _false;
        } else {
          PressableOpacity = Pressables.PressableOpacity;
        }
        if (cResult[8] !== (id === id1)) {
          const obj3 = { selected: id === id1 };
          class U {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
          cResult[9] = obj3;
          tmp26 = obj3;
        } else {
          tmp26 = cResult[9];
        }
        class U {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        const radioA11yNative = obj10.useRadioA11yNative(tmp26);
        ({ accessibilityRole, accessibilityState } = radioA11yNative);
        const id2 = user.id;
        if (cResult[10] !== (id === id1)) {
          let stringResult;
          if (id !== id1) {
            const intl = intl4.intl;
            stringResult = intl.string(intl4.t.wY4y0R);
          }
          class U {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
          cResult[11] = stringResult;
          tmp28 = stringResult;
        } else {
          tmp28 = cResult[11];
        }
        ({ accountSwitcherListItem, accountInfo } = tmp5);
        if (cResult[12] !== obj4) {
          class U {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
          cResult[12] = obj4;
          cResult[13] = tmp32;
          tmp30 = tmp32;
        } else {
          tmp30 = cResult[13];
        }
        if (cResult[14] === stateFromStores) {
          let tmp36;
          if (cResult[15] === obj4) {
            tmp36 = cResult[16];
          }
          if (cResult[17] === tmp5.username) {
            let tmp40;
            if (cResult[18] === tmp36) {
              tmp40 = cResult[19];
            }
            if (cResult[20] === stateFromStores) {
              let tmp44;
              if (cResult[21] === obj4) {
                tmp44 = cResult[22];
              }
              if (cResult[23] === tmp5.tagContainer) {
                if (cResult[24] === tmp40) {
                  let tmp46;
                  if (cResult[25] === tmp44) {
                    tmp46 = cResult[26];
                  }
                  if (cResult[27] === tmp19) {
                    if (cResult[28] === tmp5.accountListTag) {
                      let tmp49;
                      if (cResult[29] === tmp46) {
                        tmp49 = cResult[30];
                      }
                      if (cResult[31] === tmp5.accountInfo) {
                        if (cResult[32] === tmp30) {
                          let tmp52;
                          if (cResult[33] === tmp49) {
                            tmp52 = cResult[34];
                          }
                          if (cResult[35] === trailing) {
                            let tmp55;
                            if (cResult[36] === user) {
                              tmp55 = cResult[37];
                            }
                            if (cResult[38] === PressableOpacity) {
                              if (cResult[39] === accessibilityRole) {
                                if (cResult[40] === accessibilityState) {
                                  if (cResult[41] === delayLongPress) {
                                    if (cResult[42] === leading) {
                                      if (cResult[43] === onPressUser) {
                                        if (cResult[44] === sortHandlers) {
                                          if (cResult[45] === tmp5.accountSwitcherListItem) {
                                            if (cResult[46] === tmp52) {
                                              if (cResult[47] === tmp55) {
                                                if (cResult[48] === tmp28) {
                                                  let tmp57;
                                                  if (cResult[49] === user.id) {
                                                    tmp57 = cResult[50];
                                                  }
                                                  return tmp57;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            class U {
                              constructor() {
                                return currentUser.getCurrentUser();
                              }
                            }
                            tmp59[0] = accessibilityRole;
                            tmp59[1] = accessibilityState;
                            tmp59[2] = tmp28;
                            tmp59[3] = accountSwitcherListItem;
                            tmp59[4] = delayLongPress;
                            tmp59[5] = onPressUser;
                            const merged = Object.assign(sortHandlers);
                            const items2 = [leading, tmp52, tmp55];
                            tmp59.children = items2;
                            const tmp63 = authStore(PressableOpacity, tmp59, id2);
                            cResult[38] = PressableOpacity;
                            cResult[39] = accessibilityRole;
                            cResult[40] = accessibilityState;
                            cResult[41] = delayLongPress;
                            cResult[42] = leading;
                            cResult[43] = onPressUser;
                            cResult[44] = sortHandlers;
                            cResult[45] = tmp5.accountSwitcherListItem;
                            cResult[46] = tmp52;
                            cResult[47] = tmp55;
                            cResult[48] = tmp28;
                            cResult[49] = user.id;
                            cResult[50] = tmp63;
                            tmp57 = tmp63;
                          }
                          class U {
                            constructor() {
                              return currentUser.getCurrentUser();
                            }
                          }
                          cResult[35] = trailing;
                          cResult[36] = user;
                          cResult[37] = trailing;
                          tmp55 = trailing;
                        }
                      }
                      class U {
                        constructor() {
                          return currentUser.getCurrentUser();
                        }
                      }
                      const obj7 = { style: accountInfo, children: items3 };
                      items3 = [tmp30, tmp49];
                      const tmp54 = authStore(React3, obj7);
                      cResult[31] = tmp5.accountInfo;
                      cResult[32] = tmp30;
                      cResult[33] = tmp49;
                      cResult[34] = tmp54;
                      tmp52 = tmp54;
                    }
                  }
                  class U {
                    constructor() {
                      return currentUser.getCurrentUser();
                    }
                  }
                  const obj9 = { style: tmp33, children: items4 };
                  items4 = [tmp46, tmp19];
                  const tmp51 = authStore(React3, obj9);
                  cResult[27] = tmp19;
                  cResult[28] = tmp5.accountListTag;
                  cResult[29] = tmp46;
                  cResult[30] = tmp51;
                  tmp49 = tmp51;
                }
              }
              class U {
                constructor() {
                  return currentUser.getCurrentUser();
                }
              }
              const obj11 = { style: tmp34, children: items5 };
              items5 = [tmp40, tmp44];
              const tmp48 = authStore(React3, obj11);
              cResult[23] = tmp5.tagContainer;
              cResult[24] = tmp40;
              cResult[25] = tmp44;
              cResult[26] = tmp48;
              tmp46 = tmp48;
            }
            const tmp45 = !stateFromStores && !obj4.hasUniqueUsername();
            class U {
              constructor() {
                return currentUser.getCurrentUser();
              }
            }
            cResult[20] = stateFromStores;
            cResult[21] = obj4;
            cResult[22] = tmp45;
            tmp44 = tmp45;
          }
          class U {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
          tmp42[2] = tmp35;
          tmp42[4] = tmp36;
          const tmp43 = React4(Text_Text.Text, tmp42);
          cResult[17] = tmp5.username;
          cResult[18] = tmp36;
          cResult[19] = tmp43;
          tmp40 = tmp43;
        }
        let str = "always";
        const getUserTag = UserUtilsDefault.getUserTag;
        UserUtilsDefault;
        if (stateFromStores) {
          str = "never";
        }
        const obj12 = { mode: "username", identifiable: str };
        const userTag = getUserTag(obj4, obj12);
        cResult[14] = stateFromStores;
        cResult[15] = obj4;
        cResult[16] = userTag;
        tmp36 = userTag;
      }
      if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const obj13 = {
            variant: "text-sm/semibold",
            color: "text-feedback-critical",
            children: obj6.string(intl4.t.tYX2ps),
          };
          const Text = Text_Text.Text;
          class U {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
          cResult[7] = React4(Text, obj13);
          const tmp22 = React4(Text, obj13);
        }
        class U {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
      }
    }
  : (arg0) => {
      let currentUser;
      let delayLongPress;
      let getUserTag;
      let intl;
      let intl3;
      let items2;
      let items3;
      let items4;
      let items5;
      let leading;
      let obj13;
      let onPressUser;
      let showActiveAccountLabel;
      let sortHandlers;
      let stringResult;
      let tmp8;
      let trailing;
      let user;
      ({ user, onPressUser, showActiveAccountLabel } = arg0);
      if (showActiveAccountLabel === undefined) {
        showActiveAccountLabel = false;
      }
      ({ sortHandlers, trailing } = arg0);
      ({ delayLongPress, leading } = arg0);
      const tmp = closure_11();
      const items = [StreamerModeStore];
      const obj = get_initialized;
      const stateFromStores = obj.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation);
      const items1 = [UserStore];
      const obj2 = get_initialized;
      const stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
      let id1;
      const id = user.id;
      if (stateFromStores1 != null) {
        id1 = stateFromStores1.id;
      }
      const obj3 = new UserRecord(user);
      if (id === id1) {
        let PressableOpacity;
        if (showActiveAccountLabel) {
          const obj4 = { variant: "text-sm/semibold", color: "text-brand", children: intl.string(intl4.t.seV8yt) };
          const Text = Text_Text.Text;
          intl = intl4.intl;
          tmp8 = React4(Text, obj4);
        }
        if (null == onPressUser) {
          PressableOpacity = _false;
        } else {
          PressableOpacity = Pressables.PressableOpacity;
        }
        const obj5 = { selected: id === id1 };
        const tmp2Result = react_native;
        const radioA11yNative = tmp2Result.useRadioA11yNative(obj5);
        const obj6 = {
          accessibilityRole: null,
          accessibilityState: null,
          accessibilityHint: stringResult,
          style: tmp.accountSwitcherListItem,
          delayLongPress,
          onPress: onPressUser,
          children: items2,
        };
        ({ accessibilityRole: obj7.accessibilityRole, accessibilityState: obj7.accessibilityState } = radioA11yNative);
        stringResult = undefined;
        if (id !== id1) {
          const intl2 = intl4.intl;
          stringResult = intl2.string(intl4.t.wY4y0R);
        }
        const merged = Object.assign(sortHandlers);
        items2 = [leading, ,];
        const obj8 = { style: tmp.accountInfo, children: items3 };
        const obj9 = { user: obj3, guildId: "Array" };
        items3 = [React4(native.Avatar, obj9)];
        const obj10 = { style: tmp.accountListTag, children: items5 };
        const obj11 = { style: tmp.tagContainer, children: items4 };
        const obj12 = {
          variant: "text-md/semibold",
          color: "text-default",
          style: tmp.username,
          lineClamp: 1,
          children: getUserTag(obj3, obj13),
        };
        const Text2 = Text_Text.Text;
        let str = "always";
        getUserTag = UserUtilsDefault.getUserTag;
        UserUtilsDefault;
        if (stateFromStores) {
          str = "never";
        }
        obj13 = { mode: "username", identifiable: str };
        items4 = [React4(Text2, obj12)];
        let tmp18Result = !stateFromStores && !obj3.hasUniqueUsername();
        if (tmp18Result) {
          const _HermesInternal = HermesInternal;
          const obj14 = { variant: "text-md/normal", color: "text-muted", children: "#" + obj3.discriminator };
          const Text3 = Text_Text.Text;
          tmp18Result = React4(Text3, obj14);
        }
        items4[1] = tmp18Result;
        items5 = [authStore(React3, obj11), tmp8];
        items3[1] = authStore(React3, obj10);
        items2[1] = authStore(React3, obj8);
        if (undefined === trailing) {
          const obj15 = { user };
          trailing = React4(closure_12, obj15);
        }
        items2[2] = trailing;
        return authStore(PressableOpacity, obj6, user.id);
      }
      tmp8 = null;
      if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
        const obj16 = {
          variant: "text-sm/semibold",
          color: "text-feedback-critical",
          children: intl3.string(intl4.t.tYX2ps),
        };
        const Text4 = Text_Text.Text;
        intl3 = intl4.intl;
        tmp8 = React4(Text4, obj16);
      }
    };
const result = size.fileFinishedImporting("modules/multi_account/native/AccountSwitcherListItem.tsx");

export default tmp6;
export const AccountStatusIcon = tmp5;
