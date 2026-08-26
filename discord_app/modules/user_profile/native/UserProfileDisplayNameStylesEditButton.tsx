// === Module 14205: UserProfileDisplayNameStylesEditButton ===

// Module 14205 (UserProfileDisplayNameStylesEditButton)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

const require = arg1;
({ useCallback: c4, useMemo: c5 } = noop);
({ AnalyticEvents: error, UserSettingsSections: closure_8 } = ME);
createCacheKey = { ggContainer: null, noneIcon: null };
createCacheKey = { height: 48, width: 48, borderRadius: ThemesDefault.radii.xs, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center", paddingBottom: 4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { tintColor: ThemesDefault.colors.TEXT_SUBTLE };
let closure_11 = createCacheKey.createStyles(createCacheKey);
let obj1 = { tintColor: ThemesDefault.colors.TEXT_SUBTLE };
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx");

export default function UserProfileDisplayNameStylesEditButton(user) {
  user = user.user;
  const guildId = user.guildId;
  const isTryItOut = user.isTryItOut;
  let callback;
  let nativeStackNavigation;
  let callback2;
  closure_6 = undefined;
  let displayNameStylesEffectConfig;
  const tmp = callback3();
  callback = tmp;
  let obj = user(isTryItOut[8]);
  nativeStackNavigation = obj.useNativeStackNavigation();
  obj1 = user(isTryItOut[9]);
  const isDisplayNameStylesFlywheelSettersEnabled = obj1.useIsDisplayNameStylesFlywheelSettersEnabled("UserProfileDisplayNameStylesEditButton");
  if (isDisplayNameStylesFlywheelSettersEnabled) {
    const items = [tmp2(tmp3[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE];
    let items1 = items;
  } else {
    items1 = [];
  }
  let tmp6 = callback(user(isTryItOut[10]).useSelectedDismissibleContent(items1, undefined, true), 2);
  callback2 = tmp7;
  let tmp2Result = tmp2(tmp3[12]);
  const guildMemberOrUserPendingDisplayNameStyles = tmp2Result.useGuildMemberOrUserPendingDisplayNameStyles(user, guildId);
  ({ pendingDisplayNameStyles, tryItOutDisplayNameStyles } = guildMemberOrUserPendingDisplayNameStyles);
  obj = { userId: user.id, guildId, pendingDisplayNameStyles: null, ignoreDisabledStylesSetting: true };
  const obj3 = user(isTryItOut[10]);
  const tmp9 = guildId;
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  obj[2] = pendingDisplayNameStyles;
  const tmp10Result = guildId(isTryItOut[13])(obj);
  closure_6 = tmp10Result;
  tmp2Result = tmp2(tmp3[14]);
  let effectId;
  if (tmp10Result != null) {
    effectId = tmp10Result.effectId;
  }
  if (effectId == null) {
    effectId = tmp2(tmp3[15]).DisplayNameEffect.SOLID;
  }
  displayNameStylesEffectConfig = tmp2Result.useDisplayNameStylesEffectConfig(effectId);
  const items2 = [guildId, isTryItOut, nativeStackNavigation, tmp6[1]];
  const items3 = [displayNameStylesEffectConfig, tmp10Result];
  let tmp10 = guildId(isTryItOut[13]);
  const tmp15 = callback2(() => {
    if (null == closure_6) {
      const intl2 = user(isTryItOut[17]).intl;
      let stringResult = intl2.string(user(isTryItOut[17]).t.PoWNfe);
    } else {
      const intl = user(isTryItOut[17]).intl;
      const _HermesInternal = HermesInternal;
      stringResult = "" + intl.string(guildId(isTryItOut[18])(tmp.fontId)) + " + " + displayNameStylesEffectConfig.name;
    }
    return stringResult;
  }, items3);
  const items4 = [tmp10Result, guildId, user.id, tmp];
  const items5 = [tmp10Result];
  const tmp14 = nativeStackNavigation(() => {
    let obj = guildId(isTryItOut[16]);
    obj.track(displayNameStylesEffectConfig.DISPLAY_NAME_STYLES_FROM_SETTINGS);
    obj = { guildId, isTryItOut };
    nativeStackNavigation.navigate(closure_1_8.DISPLAY_NAME_STYLES, obj);
    callback(closure_1_9.TAKE_ACTION);
  }, items2);
  const tmp16 = nativeStackNavigation(() => {
    if (null == closure_6) {
      let obj = { source: null, style: null };
      obj[0] = guildId(isTryItOut[20]);
      obj[1] = closure_3.noneIcon;
      let tmp10 = closure_1_10(user(isTryItOut[19]).Icon, obj);
    } else {
      obj = { style: null, children: null };
      obj[0] = closure_3.ggContainer;
      obj = { userId: null, guildId: null, userName: "Gg", pendingDisplayNameStyles: null, ignoreDisabledStylesSetting: true, variant: "heading-xl/semibold" };
      obj[0] = user.id;
      obj[1] = guildId;
      obj[3] = tmp;
      obj[1] = closure_1_10(guildId(isTryItOut[21]), obj);
      tmp10 = closure_1_10(closure_6, obj);
    }
    return tmp10;
  }, items4);
  obj = { label: null, labelTrailing: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null, trailing: null };
  let intl = tmp2(tmp3[17]).intl;
  obj[0] = intl.string(tmp9(isTryItOut[24])["86GtGH"]);
  obj1 = { showPremiumIcon: true, showNewBadge: tmp6[0] === tmp2(tmp3[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE };
  obj[1] = jsx(user(isTryItOut[23]).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: tmp6[0] === tmp2(tmp3[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE });
  obj[2] = tmp15;
  obj[3] = { text: tmp15 };
  obj[4] = tmp14;
  obj[5] = tmp16();
  obj[6] = nativeStackNavigation(() => {
    let tmp3Result = null;
    if (null != closure_6) {
      let colors;
      if (tmp != null) {
        colors = tmp.colors;
      }
      if (colors == null) {
        colors = [];
      }
      const obj = { colors: null, effectId: null };
      obj[0] = colors;
      let effectId;
      if (tmp != null) {
        effectId = tmp.effectId;
      }
      obj[1] = effectId;
      tmp3Result = closure_1_10(guildId(isTryItOut[22]), obj);
      const tmp3 = closure_1_10;
      const tmp6 = guildId(isTryItOut[22]);
    }
    return tmp3Result;
  }, items5)();
  return jsx(user(isTryItOut[23]).UserProfileEditFormButton, { label: null, labelTrailing: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null, trailing: null });
};