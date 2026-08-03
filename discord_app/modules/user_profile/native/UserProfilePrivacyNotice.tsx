import _slicedToArray from "_slicedToArray";
import XSmallIcon from "XSmallIcon";
import { View } from "CircleInformationIcon";
import { UserSettingsSections } from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null, icon: null, text: null, closeButton: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_FEEDBACK_INFO, borderWidth: 1, borderColor: require("Themes").colors.ICON_FEEDBACK_INFO, borderRadius: require("Themes").radii.sm, padding: require("Themes").space.PX_12, flexDirection: "row", alignItems: "flex-start", gap: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexShrink: 0, marginTop: 2 };
createCacheKey[2] = { flex: 1 };
createCacheKey[3] = { flexShrink: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfilePrivacyNotice.tsx");

export default function UserProfilePrivacyNotice() {
  let isInPrivateProfilesExperiment;
  let tmp9;
  const tmp = createCacheKey();
  isInPrivateProfilesExperiment = undefined;
  let userIsTeen;
  let setting;
  let obj = isInPrivateProfilesExperiment(userIsTeen[10]);
  isInPrivateProfilesExperiment = obj.useIsInPrivateProfilesExperiment("UserProfilePrivacyNotice");
  let obj1 = isInPrivateProfilesExperiment(userIsTeen[11]);
  userIsTeen = obj1.useUserIsTeen();
  const ProfileVisibility = isInPrivateProfilesExperiment(userIsTeen[12]).ProfileVisibility;
  setting = ProfileVisibility.useSetting();
  const items = [isInPrivateProfilesExperiment, userIsTeen, setting];
  const memo = React.useMemo(() => {
    if (isInPrivateProfilesExperiment) {
      if (userIsTeen) {
        if (setting !== isInPrivateProfilesExperiment(userIsTeen[8]).ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
          const items = [isInPrivateProfilesExperiment(userIsTeen[13]).DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE];
        }
        return [];
      }
    }
  }, items);
  let obj2 = isInPrivateProfilesExperiment(userIsTeen[14]);
  [tmp9, isInPrivateProfilesExperiment] = setting(obj2.useSelectedDismissibleContent(memo), 2);
  const ProfileVisibility2 = isInPrivateProfilesExperiment(userIsTeen[12]).ProfileVisibility;
  const setting1 = ProfileVisibility2.useSetting();
  const callback = React.useCallback((children) => callback(isInPrivateProfilesExperiment(userIsTeen[15]).Text, {
    variant: "text-sm/normal",
    color: "text-link",
    onPress() {
      let obj = callback(table[16]);
      obj = { screen: constants.DATA_AND_PRIVACY };
      return obj.openUserSettings(obj);
    },
    children
  }, arg1), []);
  if (tmp9 !== isInPrivateProfilesExperiment(userIsTeen[13]).DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE) {
    return null;
  } else {
    if (tmp2(tmp3[8]).ProfileVisibility.FRIENDS_ONLY === setting1) {
      let dqQ7AN = tmp2(tmp3[9]).t["0UBDvq"];
    } else if (tmp2(tmp3[8]).ProfileVisibility.FRIENDS_AND_SMALL_GUILDS === setting1) {
      dqQ7AN = tmp2(tmp3[9]).t["9AvQO/"];
    } else {
      const FRIENDS_AND_ALL_GUILDS = tmp2(tmp3[8]).ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
      dqQ7AN = tmp2(tmp3[9]).t.dqQ7AN;
    }
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj[0] = tmp.icon;
    obj[1] = callback(tmp2(tmp3[17]).CircleInformationIcon, { size: "xs", color: "icon-feedback-info" });
    const items1 = [callback(View, obj), , ];
    obj1 = { style: null, variant: "text-sm/normal", color: "text-default", children: null };
    obj1[0] = tmp.text;
    const intl = tmp2(tmp3[9]).intl;
    obj2 = { privacySettingsLink: null };
    obj2[0] = callback;
    obj1[3] = intl.format(dqQ7AN, obj2);
    items1[1] = callback(tmp2(tmp3[15]).Text, obj1);
    const obj3 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, style: null, children: null };
    const intl2 = tmp2(tmp3[9]).intl;
    obj3[1] = intl2.string(tmp2(tmp3[9]).t.WAI6xu);
    obj3[2] = function onPress() {
      return isInPrivateProfilesExperiment(outer1_6.USER_DISMISS);
    };
    obj3[3] = tmp.closeButton;
    obj3[4] = callback(tmp2(tmp3[19]).XSmallIcon, { size: "xs", color: "icon-feedback-info" });
    items1[2] = callback(tmp2(tmp3[18]).PressableOpacity, obj3);
    obj[1] = items1;
    return callback2(View, obj);
  }
  const tmp8 = setting(obj2.useSelectedDismissibleContent(memo), 2);
};
export const useIsPrivacyNoticeVisible = function useIsPrivacyNoticeVisible() {
  isInPrivateProfilesExperiment = isInPrivateProfilesExperiment(userIsTeen[10]).useIsInPrivateProfilesExperiment("UserProfilePrivacyNotice");
  const obj = isInPrivateProfilesExperiment(userIsTeen[10]);
  userIsTeen = isInPrivateProfilesExperiment(userIsTeen[11]).useUserIsTeen();
  const ProfileVisibility = isInPrivateProfilesExperiment(userIsTeen[12]).ProfileVisibility;
  const setting = ProfileVisibility.useSetting();
  let items = [isInPrivateProfilesExperiment, userIsTeen, setting];
  const memo = React.useMemo(() => {
    if (isInPrivateProfilesExperiment) {
      if (userIsTeen) {
        if (setting !== isInPrivateProfilesExperiment(userIsTeen[8]).ProfileVisibility.FRIENDS_AND_ALL_GUILDS) {
          const items = [isInPrivateProfilesExperiment(userIsTeen[13]).DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE];
        }
        return [];
      }
    }
  }, items);
  const obj2 = isInPrivateProfilesExperiment(userIsTeen[11]);
  return setting(isInPrivateProfilesExperiment(userIsTeen[14]).useSelectedDismissibleContent(memo), 1)[0] === isInPrivateProfilesExperiment(userIsTeen[13]).DismissibleContent.PRIVATE_PROFILE_INLINE_NOTICE;
};