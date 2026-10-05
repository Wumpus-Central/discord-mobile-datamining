// discord_app/modules/multi_account/native/AccountSwitcherListItem.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import useA11yRolesNative from "../../../../discord_common/js/packages/design/hooks/useA11yRolesNative.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserRecord from "../../../records/UserRecord.tsx";
import StreamerModeStore from "../../../stores/StreamerModeStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const initialize = CircleCheckIcon(504);
const CircleCheckIcon2 = CircleCheckIcon(4792);
const CircleInformationIcon = CircleCheckIcon(4812);
require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const MultiAccountTokenStatus = fn(12056).MultiAccountTokenStatus;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let closure_11 = createStyles.createStyles({ accountListTag: { marginLeft: 12, flex: 1 }, tagContainer: { display: "flex", flexDirection: "row" }, accountSwitcherListItem: { display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingVertical: 8, paddingHorizontal: 16 }, username: { flexShrink: 1 }, accountInfo: { flex: 1, minWidth: "30%", display: "flex", flexDirection: "row", alignItems: "center" } });
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let CircleCheckIcon = require;
  let TEXT_BRAND = dependencyMap;
  const cResult = c.c(4);
  user = user.user;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function s() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp2 = items;
    tmp3 = fn;
  } else {
    [tmp2, tmp3] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp2, tmp3);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (user.id === id) {
    const _Symbol2 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      CircleCheckIcon = CircleCheckIcon2.CircleCheckIcon;
      const obj2 = { color: null };
      TEXT_BRAND = nativeDefault.colors.TEXT_BRAND;
      obj2.color = TEXT_BRAND;
      const tmp15 = options(CircleCheckIcon, obj2);
      cResult[2] = tmp15;
    }
  } else if (user.tokenStatus !== MultiAccountTokenStatus.INVALID) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
      const tmp10 = options(CircleInformationIcon.CircleInformationIcon, obj3);
      cResult[3] = tmp10;
    }
  }
  const CircleCheckIconResult = initialize;
}) : ((user) => {
  user = user.user;
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (user.id === id) {
    const obj2 = { color: nativeDefault.colors.TEXT_BRAND };
    let tmp6 = options(CircleCheckIcon2.CircleCheckIcon, obj2);
  } else {
    tmp6 = null;
    if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
      const obj3 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
      tmp6 = options(CircleInformationIcon.CircleInformationIcon, obj3);
    }
  }
  return tmp6;
});
let closure_12 = tmp5;
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/multi_account/native/AccountSwitcherListItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(51);
  ({ user, onPressUser, showActiveAccountLabel, sortHandlers, delayLongPress, leading, trailing } = arg0);
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
  const tmp4 = undefined !== showActiveAccountLabel && showActiveAccountLabel;
  const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    class U {
      constructor() {
        return closure_1_7.getCurrentUser();
      }
    }
    cResult[2] = items1;
    cResult[3] = U;
    let tmp11 = U;
    let tmp10 = items1;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  const tmpResult = initialize;
  const stateFromStores1 = initialize.useStateFromStores(tmp10, tmp11);
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  if (cResult[4] !== user) {
    class U {
      constructor() {
        return closure_1_7.getCurrentUser();
      }
    }
    const tmp19 = new UserRecord(user);
    cResult[4] = user;
    cResult[5] = tmp19;
    let tmp15 = tmp19;
  } else {
    tmp15 = cResult[5];
  }
  if (user.id === id) {
    if (tmp4) {
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { variant: "text-sm/semibold", color: "text-brand", children: null };
        class U {
          constructor() {
            return closure_1_7.getCurrentUser();
          }
        }
        obj2.children = obj7.string(util.t.seV8yt);
        const tmp28 = options(Text_Text.Text, obj2);
        cResult[6] = tmp28;
      }
      class U {
        constructor() {
          return closure_1_7.getCurrentUser();
        }
      }
    }
  }
  if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: null };
      class U {
        constructor() {
          return closure_1_7.getCurrentUser();
        }
      }
      obj3.children = obj5.string(util.t.tYX2ps);
      const tmp25 = options(Text_Text.Text, obj3);
      cResult[7] = tmp25;
    }
    class U {
      constructor() {
        return closure_1_7.getCurrentUser();
      }
    }
  }
  if (null == onPressUser) {
    let PressableOpacity = React3;
  } else {
    PressableOpacity = Pressables.PressableOpacity;
  }
  if (cResult[8] !== (user.id === id)) {
    const obj4 = { selected: tmp21 };
    class U {
      constructor() {
        return closure_1_7.getCurrentUser();
      }
    }
    cResult[9] = obj4;
    let tmp29 = obj4;
  } else {
    tmp29 = cResult[9];
  }
  const tmpResult3 = initialize;
  const radioA11yNative = useA11yRolesNative.useRadioA11yNative(tmp29);
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  if (cResult[10] !== (user.id === id)) {
    let stringResult;
    if (!tmp21) {
      const intl = util.intl;
      stringResult = intl.string(util.t.wY4y0R);
    }
    class U {
      constructor() {
        return closure_1_7.getCurrentUser();
      }
    }
    cResult[11] = stringResult;
    let tmp31 = stringResult;
  } else {
    tmp31 = cResult[11];
  }
  ({ accountSwitcherListItem, accountInfo } = tmp5);
  if (cResult[12] !== tmp15) {
    { user: null, guildId: "r" }.user = tmp15;
    class U {
      constructor() {
        return closure_1_7.getCurrentUser();
      }
    }
    cResult[12] = tmp15;
    cResult[13] = tmp35;
    let tmp33 = tmp35;
    const obj6 = { user: null, guildId: "r" };
  } else {
    tmp33 = cResult[13];
  }
  if (cResult[14] === stateFromStores) {
    if (cResult[15] === tmp15) {
      let tmp39 = cResult[16];
    }
    if (cResult[17] === tmp5.username) {
      if (cResult[18] === tmp39) {
        let tmp41 = cResult[19];
      }
      if (cResult[20] === stateFromStores) {
        if (cResult[21] === tmp15) {
          let tmp45 = cResult[22];
        }
        if (cResult[23] === tmp5.tagContainer) {
          if (cResult[24] === tmp41) {
            if (cResult[25] === tmp45) {
              let tmp48 = cResult[26];
            }
            if (cResult[27] === tmp22) {
              if (cResult[28] === tmp5.accountListTag) {
                if (cResult[29] === tmp48) {
                  let tmp51 = cResult[30];
                }
                if (cResult[31] === tmp5.accountInfo) {
                  if (cResult[32] === tmp33) {
                    if (cResult[33] === tmp51) {
                      let tmp54 = cResult[34];
                    }
                    if (cResult[35] === trailing) {
                      if (cResult[36] === user) {
                        let tmp57 = cResult[37];
                      }
                      if (cResult[38] === PressableOpacity) {
                        if (cResult[39] === accessibilityRole) {
                          if (cResult[40] === accessibilityState) {
                            if (cResult[41] === delayLongPress) {
                              if (cResult[42] === leading) {
                                if (cResult[43] === onPressUser) {
                                  if (cResult[44] === sortHandlers) {
                                    if (cResult[45] === tmp5.accountSwitcherListItem) {
                                      if (cResult[46] === tmp54) {
                                        if (cResult[47] === tmp57) {
                                          if (cResult[48] === tmp31) {
                                            if (cResult[49] === user.id) {
                                              let tmp59 = cResult[50];
                                            }
                                            return tmp59;
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
                          return closure_1_7.getCurrentUser();
                        }
                      }
                      tmp61[0] = accessibilityRole;
                      tmp61[1] = accessibilityState;
                      tmp61[2] = tmp31;
                      tmp61[3] = accountSwitcherListItem;
                      tmp61[4] = delayLongPress;
                      tmp61[5] = onPressUser;
                      const merged = Object.assign(sortHandlers);
                      const items2 = [leading, tmp54, tmp57];
                      tmp61.children = items2;
                      const tmp65 = v65535(PressableOpacity, tmp61, user.id);
                      cResult[38] = PressableOpacity;
                      cResult[39] = accessibilityRole;
                      cResult[40] = accessibilityState;
                      cResult[41] = delayLongPress;
                      cResult[42] = leading;
                      cResult[43] = onPressUser;
                      cResult[44] = sortHandlers;
                      cResult[45] = tmp5.accountSwitcherListItem;
                      cResult[46] = tmp54;
                      cResult[47] = tmp57;
                      cResult[48] = tmp31;
                      cResult[49] = user.id;
                      cResult[50] = tmp65;
                      tmp59 = tmp65;
                    }
                    class U {
                      constructor() {
                        return closure_1_7.getCurrentUser();
                      }
                    }
                    cResult[35] = trailing;
                    cResult[36] = user;
                    cResult[37] = trailing;
                    tmp57 = trailing;
                  }
                }
                class U {
                  constructor() {
                    return closure_1_7.getCurrentUser();
                  }
                }
                const obj8 = { style: accountInfo, children: null };
                const items3 = [tmp33, tmp51];
                obj8.children = items3;
                const tmp56 = v65535(React4, obj8);
                cResult[31] = tmp5.accountInfo;
                cResult[32] = tmp33;
                cResult[33] = tmp51;
                cResult[34] = tmp56;
                tmp54 = tmp56;
              }
            }
            class U {
              constructor() {
                return closure_1_7.getCurrentUser();
              }
            }
            const obj9 = { style: tmp36, children: null };
            const items4 = [tmp48, tmp22];
            obj9.children = items4;
            const tmp53 = v65535(React4, obj9);
            cResult[27] = tmp22;
            cResult[28] = tmp5.accountListTag;
            cResult[29] = tmp48;
            cResult[30] = tmp53;
            tmp51 = tmp53;
          }
        }
        class U {
          constructor() {
            return closure_1_7.getCurrentUser();
          }
        }
        const obj10 = { style: tmp37, children: null };
        const items5 = [tmp41, tmp45];
        obj10.children = items5;
        const tmp50 = v65535(React4, obj10);
        cResult[23] = tmp5.tagContainer;
        cResult[24] = tmp41;
        cResult[25] = tmp45;
        cResult[26] = tmp50;
        tmp48 = tmp50;
      }
      let tmp46 = !stateFromStores;
      class U {
        constructor() {
          return closure_1_7.getCurrentUser();
        }
      }
      if (tmp46) {
        const obj12 = { variant: "text-md/normal", color: "text-muted", children: null };
        const _HermesInternal = HermesInternal;
        class U {
          constructor() {
            return closure_1_7.getCurrentUser();
          }
        }
        obj12.children = "#" + tmp15.discriminator;
        tmp46 = options(Text_Text.Text, obj12);
      }
      cResult[20] = stateFromStores;
      cResult[21] = tmp15;
      cResult[22] = tmp46;
      tmp45 = tmp46;
    }
    class U {
      constructor() {
        return closure_1_7.getCurrentUser();
      }
    }
    tmp43[2] = tmp38;
    tmp43[4] = tmp39;
    const tmp44 = options(Text_Text.Text, tmp43);
    cResult[17] = tmp5.username;
    cResult[18] = tmp39;
    cResult[19] = tmp44;
    tmp41 = tmp44;
  }
  const tmpResult4 = useA11yRolesNative;
  let str = "always";
  if (stateFromStores) {
    str = "never";
  }
  const userTag = UserUtilsDefault.getUserTag(tmp15, { mode: "username", identifiable: str });
  cResult[14] = stateFromStores;
  cResult[15] = tmp15;
  cResult[16] = userTag;
  tmp39 = userTag;
}) : ((arg0) => {
  ({ user, onPressUser, showActiveAccountLabel } = arg0);
  if (showActiveAccountLabel === undefined) {
    showActiveAccountLabel = false;
  }
  ({ sortHandlers, trailing } = arg0);
  ({ delayLongPress, leading } = arg0);
  const tmp = closure_11();
  const items = [StreamerModeStore];
  const stateFromStores = initialize.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation);
  const items1 = [UserStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  const obj3 = new UserRecord(user);
  if (user.id === id) {
    if (showActiveAccountLabel) {
      const obj4 = { variant: "text-sm/semibold", color: "text-brand", children: null };
      const intl = util.intl;
      obj4.children = intl.string(util.t.seV8yt);
      let tmp8 = options(Text_Text.Text, obj4);
    }
    if (null == onPressUser) {
      let PressableOpacity = React3;
    } else {
      PressableOpacity = Pressables.PressableOpacity;
    }
    const obj5 = { selected: tmp7 };
    const radioA11yNative = useA11yRolesNative.useRadioA11yNative(obj5);
    const obj6 = { accessibilityRole: null, accessibilityState: null, accessibilityHint: null, style: null, delayLongPress: null, onPress: null };
    ({ accessibilityRole: obj7.accessibilityRole, accessibilityState: obj7.accessibilityState } = radioA11yNative);
    let stringResult;
    if (!tmp7) {
      const intl2 = util.intl;
      stringResult = intl2.string(util.t.wY4y0R);
    }
    obj6.accessibilityHint = stringResult;
    obj6.style = tmp.accountSwitcherListItem;
    obj6.delayLongPress = delayLongPress;
    obj6.onPress = onPressUser;
    const merged = Object.assign(sortHandlers);
    const items2 = [leading, , ];
    const obj8 = { style: tmp.accountInfo, children: null };
    const obj9 = { user: obj3, guildId: "r" };
    const items3 = [options(native.Avatar, obj9), ];
    const obj10 = { style: tmp.accountListTag, children: null };
    const obj11 = { style: tmp.tagContainer, children: null };
    const obj12 = { variant: "text-md/semibold", color: "text-default", style: tmp.username, lineClamp: 1, children: null };
    const tmp2Result = useA11yRolesNative;
    let str = "always";
    if (stateFromStores) {
      str = "never";
    }
    const obj14 = { mode: "username", identifiable: str };
    obj12.children = UserUtilsDefault.getUserTag(obj3, obj14);
    const items4 = [options(Text_Text.Text, obj12), ];
    let tmp18Result = !stateFromStores;
    if (!stateFromStores) {
      tmp18Result = !obj3.hasUniqueUsername();
    }
    if (tmp18Result) {
      const obj15 = { variant: "text-md/normal", color: "text-muted", children: null };
      const _HermesInternal = HermesInternal;
      obj15.children = "#" + obj3.discriminator;
      tmp18Result = options(Text_Text.Text, obj15);
    }
    items4[1] = tmp18Result;
    obj11.children = items4;
    const items5 = [v65535(React4, obj11), tmp8];
    obj10.children = items5;
    items3[1] = v65535(React4, obj10);
    obj8.children = items3;
    items2[1] = v65535(React4, obj8);
    if (undefined === trailing) {
      const obj16 = { user };
      trailing = options(closure_12, obj16);
    }
    items2[2] = trailing;
    obj6.children = items2;
    return v65535(PressableOpacity, obj6, user.id);
  }
  tmp8 = null;
  if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
    const obj17 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: null };
    const intl3 = util.intl;
    obj17.children = intl3.string(util.t.tYX2ps);
    tmp8 = options(Text_Text.Text, obj17);
  }
});
export const AccountStatusIcon = tmp5;