// === Module 12866: UserProfilePrivacyNotice ===

// Module 12866 (UserProfilePrivacyNotice)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import UserSettings from "UserSettings" /* 2021 */;
import dismissible_content from "dismissible_content" /* 2029 */;
import CircleInformationIcon from "CircleInformationIcon" /* 4817 */;
import Text_Text from "Text/Text" /* 4862 */;
import Pressables from "Pressables" /* 5632 */;
import XSmallIcon from "XSmallIcon" /* 6188 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7002 */;
import useUserIsTeen from "useUserIsTeen" /* 8300 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1074).UserSettingsSections;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4866);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, borderWidth: 1, borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO, borderRadius: nativeDefault.radii.sm, padding: nativeDefault.space.PX_12, flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8 }, icon: { flexShrink: 0, marginTop: 2 }, text: { flex: 1 }, closeButton: { flexShrink: 0 } };
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrivacyNotice.tsx");

export default function UserProfilePrivacyNotice() {
  const tmp = closure_9();
  const userIsTeen = useUserIsTeen.useUserIsTeen();
  closure_129_0 = userIsTeen;
  const ProfileVisibility = UserSettings.ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  closure_129_1 = setting;
  const items = [userIsTeen, setting];
  const memo = noop.useMemo(() => {
    if (userIsTeen) {
      if (setting !== preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
        const items = [dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE];
      }
      return [];
    }
  }, items);
  [tmp8, require] = useSelectedDismissibleContent.useSelectedDismissibleContent(memo);
  const ProfileVisibility2 = UserSettings.ProfileVisibility;
  const setting1 = ProfileVisibility2.useSetting();
  const callback = noop.useCallback((children, arg1) => closure_1_7(Text_Text.Text, {
    variant: "text-sm/normal",
    color: "text-link",
    onPress() {
      return closure_1_0(closure_1_1[15]).openUserSettings({ screen: constants.DATA_AND_PRIVACY });
    },
    children
  }, arg1), []);
  if (tmp8 !== dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE) {
    return null;
  } else {
    if (preloaded_user_settings.ProfileVisibility.FRIENDS_ONLY === setting1) {
      let dqQ7AN = util.t["0UBDvq"];
    } else if (preloaded_user_settings.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS === setting1) {
      dqQ7AN = util.t["9AvQO/"];
    } else {
      const FRIENDS_AND_ALL_GUILDS = preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
      dqQ7AN = util.t.dqQ7AN;
    }
    const obj3 = { style: tmp.container, children: null };
    const obj4 = { style: tmp.icon, children: closure_7(CircleInformationIcon.CircleInformationIcon, { size: "xs", color: "icon-feedback-info" }) };
    const items1 = [closure_7(View, obj4), , ];
    const obj5 = { style: tmp.text, variant: "text-sm/normal", color: "text-default", children: null };
    const intl = util.intl;
    const obj6 = { privacySettingsLink: callback };
    obj5.children = intl.format(dqQ7AN, obj6);
    items1[1] = closure_7(Text_Text.Text, obj5);
    const obj7 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const intl2 = util.intl;
    obj7.accessibilityLabel = intl2.string(util.t.WAI6xu);
    obj7.onPress = function onPress() {
      return require(ContentDismissActionType.USER_DISMISS);
    };
    obj7.style = tmp.closeButton;
    obj7.children = closure_7(XSmallIcon.XSmallIcon, { size: "xs", color: "icon-feedback-info" });
    items1[2] = closure_7(Pressables.PressableOpacity, obj7);
    obj3.children = items1;
    return closure_8(View, obj3);
  }
  const tmp7 = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(memo), 2);
};
export const useIsPrivacyNoticeVisible = function useIsPrivacyNoticeVisible() {
  userIsTeen = userIsTeen(setting[10]).useUserIsTeen();
  const ProfileVisibility = userIsTeen(setting[11]).ProfileVisibility;
  setting = ProfileVisibility.useSetting();
  let items = [userIsTeen, setting];
  const memo = noop.useMemo(() => {
    if (userIsTeen) {
      if (setting !== preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
        const items = [dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE];
      }
      return [];
    }
  }, items);
  const obj = userIsTeen(setting[10]);
  return _slicedToArray(userIsTeen(setting[13]).useSelectedDismissibleContent(memo), 1)[0] === userIsTeen(setting[12]).DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE;
};