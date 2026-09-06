// discord_app/modules/user_profile/native/UserProfilePrivacyNotice.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../../user_settings/UserSettings.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import useSelectedDismissibleContent from "../../dismissible_content/hooks/useSelectedDismissibleContent.tsx";
import useUserIsTeen from "../../self_mod/hooks/useUserIsTeen.tsx";
import PrivateProfilesExperiment from "../PrivateProfilesExperiment.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1074).UserSettingsSections;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, icon: null, text: null, closeButton: null };
createStyles = {
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO,
  borderWidth: 1,
  borderColor: nativeDefault.colors.ICON_FEEDBACK_INFO,
  borderRadius: nativeDefault.radii.sm,
  padding: nativeDefault.space.PX_12,
  flexDirection: "row",
  alignItems: "flex-start",
  gap: nativeDefault.space.PX_8,
};
createStyles.container = createStyles;
createStyles.icon = { flexShrink: 0, marginTop: 2 };
createStyles.text = { flex: 1 };
createStyles.closeButton = { flexShrink: 0 };
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrivacyNotice.tsx");

export default function UserProfilePrivacyNotice() {
  const tmp = closure_9();
  let obj = PrivateProfilesExperiment;
  const isInPrivateProfilesExperiment = obj.useIsInPrivateProfilesExperiment("UserProfilePrivacyNotice");
  closure_129_0 = isInPrivateProfilesExperiment;
  let obj1 = useUserIsTeen;
  const userIsTeen = obj1.useUserIsTeen();
  closure_129_1 = userIsTeen;
  const ProfileVisibility = UserSettings.ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  closure_129_2 = setting;
  const items = [isInPrivateProfilesExperiment, userIsTeen, setting];
  const memo = noop.useMemo(() => {
    if (isInPrivateProfilesExperiment) {
      if (userIsTeen) {
        if (setting !== preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
          const items = [dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE];
        }
        return [];
      }
    }
  }, items);
  let obj2 = useSelectedDismissibleContent;
  [tmp9, require] = _slicedToArray(obj2.useSelectedDismissibleContent(memo), 2);
  const ProfileVisibility2 = UserSettings.ProfileVisibility;
  const setting1 = ProfileVisibility2.useSetting();
  const callback = noop.useCallback(
    (children, arg1) =>
      closure_1_7(
        Text_Text.Text,
        {
          variant: "text-sm/normal",
          color: "text-link",
          onPress() {
            closure_1_0(closure_1_1[16]);
            const obj = { screen: constants.DATA_AND_PRIVACY };
            return obj.openUserSettings(obj);
          },
          children,
        },
        arg1,
      ),
    [],
  );
  if (tmp9 !== dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE) {
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
    obj = { style: tmp.container, children: null };
    obj = {
      style: tmp.icon,
      children: closure_7(CircleInformationIcon.CircleInformationIcon, { size: "xs", color: "icon-feedback-info" }),
    };
    const items1 = [closure_7(View, obj), ,];
    obj1 = { style: tmp.text, variant: "text-sm/normal", color: "text-default", children: null };
    const intl = util.intl;
    obj2 = { privacySettingsLink: callback };
    obj1.children = intl.format(dqQ7AN, obj2);
    items1[1] = closure_7(Text_Text.Text, obj1);
    const obj3 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const intl2 = util.intl;
    obj3.accessibilityLabel = intl2.string(util.t.WAI6xu);
    obj3.onPress = function onPress() {
      return require(ContentDismissActionType.USER_DISMISS);
    };
    obj3.style = tmp.closeButton;
    obj3.children = closure_7(XSmallIcon.XSmallIcon, { size: "xs", color: "icon-feedback-info" });
    items1[2] = closure_7(Pressables.PressableOpacity, obj3);
    obj.children = items1;
    return closure_8(View, obj);
  }
  const tmp8 = _slicedToArray(obj2.useSelectedDismissibleContent(memo), 2);
}
export const useIsPrivacyNoticeVisible = function useIsPrivacyNoticeVisible() {
  isInPrivateProfilesExperiment = isInPrivateProfilesExperiment(userIsTeen[10]).useIsInPrivateProfilesExperiment(
    "UserProfilePrivacyNotice",
  );
  const obj = isInPrivateProfilesExperiment(userIsTeen[10]);
  userIsTeen = isInPrivateProfilesExperiment(userIsTeen[11]).useUserIsTeen();
  const ProfileVisibility = isInPrivateProfilesExperiment(userIsTeen[12]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  let items = [isInPrivateProfilesExperiment, userIsTeen, setting];
  const memo = noop.useMemo(() => {
    if (isInPrivateProfilesExperiment) {
      if (userIsTeen) {
        if (setting !== preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
          const items = [dismissible_content.DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE];
        }
        return [];
      }
    }
  }, items);
  const obj2 = isInPrivateProfilesExperiment(userIsTeen[11]);
  return (
    setting(isInPrivateProfilesExperiment(userIsTeen[14]).useSelectedDismissibleContent(memo), 1)[0] ===
    isInPrivateProfilesExperiment(userIsTeen[13]).DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE
  );
};
