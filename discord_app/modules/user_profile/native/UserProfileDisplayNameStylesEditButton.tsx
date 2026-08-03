import _slicedToArray from "_slicedToArray";
import noop from "Button";
import { View } from "getSystemLocale";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "AVERAGE_FONT_WIDTH_RATIO";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let error;
let metroImportAll;
const require = arg1;
({ useCallback: c4, useMemo: c5 } = noop);
({ AnalyticEvents: error, UserSettingsSections: metroImportAll } = ME);
createCacheKey = { ggContainer: null, noneIcon: null, newBadge: null };
createCacheKey = { height: 48, width: 48, borderRadius: require("Themes").radii.xs, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center", paddingBottom: 4 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { tintColor: require("Themes").colors.TEXT_SUBTLE };
let obj1 = { tintColor: require("Themes").colors.TEXT_SUBTLE };
createCacheKey[2] = { paddingTop: 0, marginLeft: require("Themes").space.PX_4 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { paddingTop: 0, marginLeft: require("Themes").space.PX_4 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx");

export default function UserProfileDisplayNameStylesEditButton(user) {
  let pendingDisplayNameStyles;
  let tryItOutDisplayNameStyles;
  user = user.user;
  const guildId = user.guildId;
  const isTryItOut = user.isTryItOut;
  let callback;
  let nativeStackNavigation;
  let callback2;
  let c6;
  let displayNameStylesEffectConfig;
  const tmp = createCacheKey();
  callback = tmp;
  let obj = user(isTryItOut[8]);
  nativeStackNavigation = obj.useNativeStackNavigation();
  let obj1 = user(isTryItOut[9]);
  const isDisplayNameStylesFlywheelSettersEnabled = obj1.useIsDisplayNameStylesFlywheelSettersEnabled("UserProfileDisplayNameStylesEditButton");
  let obj2 = user(isTryItOut[10]);
  if (isDisplayNameStylesFlywheelSettersEnabled) {
    const items = [tmp2(tmp3[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE];
    let items1 = items;
  } else {
    items1 = [];
  }
  let tmp6 = callback(obj2.useSelectedDismissibleContent(items1, undefined, true), 2);
  callback2 = tmp7;
  let tmp2Result = tmp2(tmp3[12]);
  const guildMemberOrUserPendingDisplayNameStyles = tmp2Result.useGuildMemberOrUserPendingDisplayNameStyles(user, guildId);
  ({ pendingDisplayNameStyles, tryItOutDisplayNameStyles } = guildMemberOrUserPendingDisplayNameStyles);
  obj = { userId: user.id, guildId, pendingDisplayNameStyles: null, ignoreDisabledStylesSetting: true };
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  obj[2] = pendingDisplayNameStyles;
  const tmp10Result = guildId(isTryItOut[13])(obj);
  c6 = tmp10Result;
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
  const tmp9 = guildId;
  const tmp15 = callback2(() => {
    if (null == c6) {
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
    nativeStackNavigation.navigate(outer1_8.DISPLAY_NAME_STYLES, obj);
    _undefined2(outer1_9.TAKE_ACTION);
  }, items2);
  const tmp16 = nativeStackNavigation(() => {
    if (null == c6) {
      let obj = { source: null, style: null };
      obj[0] = guildId(isTryItOut[20]);
      obj[1] = _undefined.noneIcon;
      let tmp10 = outer1_10(user(isTryItOut[19]).Icon, obj);
    } else {
      obj = { style: null, children: null };
      obj[0] = _undefined.ggContainer;
      obj = { userId: null, guildId: null, userName: "Gg", pendingDisplayNameStyles: null, ignoreDisabledStylesSetting: true, variant: "heading-xl/semibold" };
      obj[0] = user.id;
      obj[1] = guildId;
      obj[3] = tmp;
      obj[1] = outer1_10(guildId(isTryItOut[21]), obj);
      tmp10 = outer1_10(c6, obj);
    }
    return tmp10;
  }, items4);
  obj = { label: null, labelTrailing: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null, trailing: null };
  let intl = tmp2(tmp3[17]).intl;
  obj[0] = intl.string(tmp9(isTryItOut[24])["86GtGH"]);
  let tmp18Result;
  if (tmp6[0] === user(isTryItOut[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE) {
    obj1 = { "aria-hidden": true, children: null };
    obj2 = { text: null, style: null };
    let intl2 = tmp2(tmp3[17]).intl;
    obj2[0] = intl2.string(tmp2(tmp3[17]).t.y2b7CA);
    obj2[1] = tmp.newBadge;
    obj1[1] = tmp18(tmp2(tmp3[19]).TextBadge, obj2);
    tmp18Result = tmp18(c6, obj1);
  }
  obj[1] = tmp18Result;
  obj[2] = tmp15;
  obj[3] = { text: tmp15 };
  obj[4] = tmp14;
  obj[5] = tmp16();
  obj[6] = nativeStackNavigation(() => {
    let tmp3Result = null;
    if (null != c6) {
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
      tmp3Result = outer1_10(guildId(isTryItOut[22]), obj);
      const tmp3 = outer1_10;
      const tmp6 = guildId(isTryItOut[22]);
    }
    return tmp3Result;
  }, items5)();
  return jsx(user(isTryItOut[23]).UserProfileEditFormButton, { label: null, labelTrailing: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null, trailing: null });
};