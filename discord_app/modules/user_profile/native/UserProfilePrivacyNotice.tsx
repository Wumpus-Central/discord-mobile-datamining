// === Module 12931: UserProfilePrivacyNotice ===

// Module 12931 (UserProfilePrivacyNotice)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import UserSettings from "UserSettings" /* 2028 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4812 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import XSmallIcon from "XSmallIcon" /* 6017 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 6891 */;
import useUserIsTeen from "useUserIsTeen" /* 8294 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const preloaded_user_settings = PRIVATE_PROFILE_INLINE_NOTICE(1197);
const dismissible_content = PRIVATE_PROFILE_INLINE_NOTICE(2036);
require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1085).UserSettingsSections;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, borderWidth: 1, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 }, icon: { flexShrink: 0, marginTop: 2 }, text: { flex: 1 }, closeButton: { flexShrink: 0 } };
let closure_9 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let PRIVATE_PROFILE_INLINE_NOTICE = require;
  let items = dependencyMap;
  const cResult = c.c(2);
  const userIsTeen = useUserIsTeen.useUserIsTeen();
  const ProfileVisibility = UserSettings.ProfileVisibility;
  if (userIsTeen) {
    if (tmp3 !== preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
      const _Symbol = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        PRIVATE_PROFILE_INLINE_NOTICE = dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE;
        items = [PRIVATE_PROFILE_INLINE_NOTICE];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
    }
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [];
    cResult[1] = items1;
    let tmp4 = items1;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : (() => {
  userIsTeen = userIsTeen(setting[12]).useUserIsTeen();
  const ProfileVisibility = userIsTeen(setting[13]).ProfileVisibility;
  setting = ProfileVisibility.useSetting();
  let items = [userIsTeen, setting];
  return noop.useMemo(() => {
    if (userIsTeen) {
      if (setting !== preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
        const items = [dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE];
      }
      return [];
    }
  }, items);
});
fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, borderWidth: 1, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 };
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const tmp = closure_10();
  return _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(tmp), 1)[0] === dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE;
}) : (() => {
  const tmp = closure_10();
  return _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(tmp), 1)[0] === dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrivacyNotice.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = require("c").c(35);
  const tmp4 = closure_9();
  const obj = require("c");
  const tmp5 = closure_10();
  let num = 2;
  const tmp6 = _slicedToArray(require("useSelectedDismissibleContent").useSelectedDismissibleContent(tmp5), 2);
  _require = tmp7;
  const ProfileVisibility = require("UserSettings").ProfileVisibility;
  let str = ProfileVisibility.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n(children, arg1) {
      return closure_1_7(closure_0(dependencyMap[16]).Text, {
        variant: "text-sm/normal",
        color: "text-link",
        onPress() {
          return closure_1_0(closure_1_1[17]).openUserSettings({ screen: constants.DATA_AND_PRIVACY });
        },
        children
      }, arg1);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (tmp6[0] !== require("dismissible_content").DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE) {
    return null;
  } else {
    if (cResult[1] === str) {
      if (cResult[2] === tmp4.container) {
        if (cResult[3] === tmp4.icon) {
          if (cResult[4] === tmp4.text) {
            if (cResult[16] === cResult[5]) {
              if (cResult[17] === tmp11) {
                if (cResult[18] === tmp12) {
                  if (cResult[19] === tmp13) {
                    if (cResult[20] === tmp14) {
                      let tmp30 = cResult[21];
                    }
                    const _Symbol2 = Symbol;
                    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl2 = tmp(1126).intl;
                      const stringResult = intl2.string(tmp(1126).t.WAI6xu);
                      cResult[22] = stringResult;
                      let tmp33 = stringResult;
                    } else {
                      tmp33 = cResult[22];
                    }
                    if (cResult[23] !== tmp7) {
                      const fn2 = function p() {
                        return closure_0(ContentDismissActionType.USER_DISMISS);
                      };
                      cResult[23] = tmp7;
                      cResult[24] = fn2;
                      let tmp35 = fn2;
                    } else {
                      tmp35 = cResult[24];
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp38 = closure_7(tmp(6017).XSmallIcon, { size: "xs", color: "icon-feedback-info" });
                      cResult[25] = tmp38;
                      let tmp36 = tmp38;
                    } else {
                      tmp36 = cResult[25];
                    }
                    if (cResult[26] === tmp4.closeButton) {
                      if (cResult[27] === tmp35) {
                        let tmp39 = cResult[28];
                      }
                      if (cResult[29] === tmp10) {
                        if (cResult[30] === tmp39) {
                          if (cResult[31] === tmp15) {
                            if (cResult[32] === tmp16) {
                              if (cResult[33] === tmp30) {
                                let tmp42 = cResult[34];
                              }
                              return tmp42;
                            }
                          }
                        }
                      }
                      const obj3 = { style: tmp15, children: null };
                      const items = [tmp16, tmp30, tmp39];
                      obj3.children = items;
                      const tmp44 = closure_8(tmp10, obj3);
                      cResult[29] = tmp10;
                      cResult[30] = tmp39;
                      cResult[31] = tmp15;
                      cResult[32] = tmp16;
                      cResult[33] = tmp30;
                      cResult[34] = tmp44;
                      tmp42 = tmp44;
                    }
                    const obj4 = { accessibilityRole: "button", accessibilityLabel: tmp33, onPress: tmp35, style: tmp4.closeButton, children: tmp36 };
                    const tmp41 = closure_7(tmp(5909).PressableOpacity, obj4);
                    cResult[26] = tmp4.closeButton;
                    cResult[27] = tmp35;
                    cResult[28] = tmp41;
                    tmp39 = tmp41;
                  }
                }
              }
            }
            const obj5 = { style: cResult[7], variant: cResult[8], color: cResult[9], children: cResult[10] };
            const tmp32 = closure_7(cResult[5], obj5);
            cResult[16] = cResult[5];
            cResult[17] = cResult[7];
            cResult[18] = cResult[8];
            cResult[19] = cResult[9];
            cResult[20] = cResult[10];
            cResult[21] = tmp32;
            tmp30 = tmp32;
          }
        }
      }
    }
    if (tmp(1197).ProfileVisibility.FRIENDS_ONLY === str) {
      let dqQ7AN = tmp(1126).t["0UBDvq"];
    } else if (tmp(1197).ProfileVisibility.FRIENDS_AND_SMALL_GUILDS === str) {
      dqQ7AN = tmp(1126).t["9AvQO/"];
    } else {
      const FRIENDS_AND_ALL_GUILDS = tmp(1197).ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
      dqQ7AN = tmp(1126).t.dqQ7AN;
    }
    const container = tmp4.container;
    const _Symbol = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp19 = closure_7(tmp(4812).CircleInformationIcon, { size: "xs", color: "icon-feedback-info" });
      cResult[13] = tmp19;
      let str2 = tmp19;
    } else {
      str2 = cResult[13];
    }
    if (cResult[14] !== tmp4.icon) {
      const obj6 = { style: tmp4.icon, children: str2 };
      const tmp22 = closure_7(View, obj6);
      cResult[14] = tmp4.icon;
      cResult[15] = tmp22;
      let tmp20 = tmp22;
    } else {
      tmp20 = cResult[15];
    }
    const Text = tmp(4886).Text;
    const text = tmp4.text;
    const intl = tmp(1126).intl;
    const obj7 = { privacySettingsLink: first };
    const formatResult = intl.format(dqQ7AN, obj7);
    cResult[1] = str;
    cResult[num] = tmp4.container;
    cResult[3] = tmp4.icon;
    cResult[4] = tmp4.text;
    cResult[5] = Text;
    cResult[6] = View;
    cResult[7] = text;
    str = "text-sm/normal";
    cResult[8] = "text-sm/normal";
    str2 = "text-default";
    cResult[9] = "text-default";
    cResult[10] = formatResult;
    cResult[11] = container;
    num = 12;
    cResult[12] = tmp20;
  }
  const obj2 = require("useSelectedDismissibleContent");
}) : (() => {
  const tmp = closure_9();
  const tmp2 = closure_10();
  [tmp6, require] = useSelectedDismissibleContent.useSelectedDismissibleContent(tmp2);
  const ProfileVisibility = UserSettings.ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  const callback = noop.useCallback((children, arg1) => closure_1_7(require("Text/Text").Text, {
    variant: "text-sm/normal",
    color: "text-link",
    onPress() {
      return closure_1_0(closure_1_1[17]).openUserSettings({ screen: constants.DATA_AND_PRIVACY });
    },
    children
  }, arg1), []);
  if (tmp6 !== dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE) {
    return null;
  } else {
    if (preloaded_user_settings.ProfileVisibility.FRIENDS_ONLY === setting) {
      let dqQ7AN = util.t["0UBDvq"];
    } else if (preloaded_user_settings.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS === setting) {
      dqQ7AN = util.t["9AvQO/"];
    } else {
      const FRIENDS_AND_ALL_GUILDS = preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
      dqQ7AN = util.t.dqQ7AN;
    }
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { style: tmp.icon, children: closure_7(CircleInformationIcon.CircleInformationIcon, { size: "xs", color: "icon-feedback-info" }) };
    const items = [closure_7(View, obj3), , ];
    const obj4 = { style: tmp.text, variant: "text-sm/normal", color: "text-default", children: null };
    const intl = util.intl;
    const obj5 = { privacySettingsLink: callback };
    obj4.children = intl.format(dqQ7AN, obj5);
    items[1] = closure_7(Text_Text.Text, obj4);
    const obj6 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const intl2 = util.intl;
    obj6.accessibilityLabel = intl2.string(util.t.WAI6xu);
    obj6.onPress = function onPress() {
      return _require(ContentDismissActionType.USER_DISMISS);
    };
    obj6.style = tmp.closeButton;
    obj6.children = closure_7(XSmallIcon.XSmallIcon, { size: "xs", color: "icon-feedback-info" });
    items[2] = closure_7(Pressables.PressableOpacity, obj6);
    obj2.children = items;
    return closure_8(View, obj2);
  }
  const tmp5 = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(tmp2), 2);
});
export const useIsPrivacyNoticeVisible = tmp3;