// === Module 14614: UserProfileDisplayNameStylesEditButton ===

// Module 14614 (UserProfileDisplayNameStylesEditButton)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10899 */;
import _modDef13172 from "module_13172" /* 13172 */;
import getDisplayNameStylesFontNameDefault from "getDisplayNameStylesFontName" /* 14615 */;
import DisplayNameStylesColorSwatchDefault from "DisplayNameStylesColorSwatch" /* 14616 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const noop = fn(19);
({ useCallback: closure_4, useMemo: hasOwnProperty } = noop);
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8 } = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { ggContainer: null, noneIcon: null };
let size = { height: 48, width: 48, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center", paddingBottom: 4 };
createStyles.ggContainer = size;
createStyles = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
createStyles.noneIcon = createStyles;
let closure_11 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx");

export default function UserProfileDisplayNameStylesEditButton(user) {
  user = user.user;
  const guildId = user.guildId;
  const isTryItOut = user.isTryItOut;
  closure_5 = undefined;
  closure_6 = undefined;
  let displayNameStylesEffectConfig;
  const tmp = closure_11();
  _slicedToArray = tmp;
  let obj = user(isTryItOut[8]);
  const nativeStackNavigation = obj.useNativeStackNavigation();
  let obj1 = user(isTryItOut[9]);
  const isDisplayNameStylesFlywheelSettersEnabled = obj1.useIsDisplayNameStylesFlywheelSettersEnabled("UserProfileDisplayNameStylesEditButton");
  if (isDisplayNameStylesFlywheelSettersEnabled) {
    const items = [tmp2(tmp3[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE];
    let items1 = items;
  } else {
    items1 = [];
  }
  let tmp6 = _slicedToArray(user(isTryItOut[10]).useSelectedDismissibleContent(items1, undefined, true), 2);
  closure_5 = tmp7;
  let tmp2Result = tmp2(tmp3[12]);
  const guildMemberOrUserPendingDisplayNameStyles = tmp2Result.useGuildMemberOrUserPendingDisplayNameStyles(user, guildId);
  ({ pendingDisplayNameStyles, tryItOutDisplayNameStyles } = guildMemberOrUserPendingDisplayNameStyles);
  obj = { userId: user.id, guildId, pendingDisplayNameStyles: null, ignoreDisabledStylesSetting: true };
  const obj3 = user(isTryItOut[10]);
  const tmp9 = guildId;
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  obj.pendingDisplayNameStyles = pendingDisplayNameStyles;
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
  const tmp15 = closure_5(() => {
    if (null == closure_6) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.PoWNfe);
    } else {
      const intl = util.intl;
      const _HermesInternal = HermesInternal;
      stringResult = "" + intl.string(getDisplayNameStylesFontNameDefault(tmp.fontId)) + " + " + displayNameStylesEffectConfig.name;
    }
    return stringResult;
  }, items3);
  const items4 = [tmp10Result, guildId, user.id, tmp];
  const items5 = [tmp10Result];
  const tmp14 = nativeStackNavigation(() => {
    let obj = AnalyticsUtilsDefault;
    obj.track(constants.DISPLAY_NAME_STYLES_FROM_SETTINGS);
    obj = { guildId, isTryItOut };
    nativeStackNavigation.navigate(constants2.DISPLAY_NAME_STYLES, obj);
    closure_5(ContentDismissActionType.TAKE_ACTION);
  }, items2);
  const tmp16 = nativeStackNavigation(() => {
    if (null == closure_6) {
      let obj = { source: _modDef13172, style: closure_3.noneIcon };
      let tmp10 = jsx(native.Icon, { source: _modDef13172, style: closure_3.noneIcon });
    } else {
      obj = { style: closure_3.ggContainer, children: null };
      obj = { userId: user.id, guildId, userName: "Gg", pendingDisplayNameStyles: tmp, ignoreDisabledStylesSetting: true, variant: "heading-xl/semibold" };
      obj.children = jsx(UsernameWithEffectsDefault, { userId: user.id, guildId, userName: "Gg", pendingDisplayNameStyles: tmp, ignoreDisabledStylesSetting: true, variant: "heading-xl/semibold" });
      tmp10 = <View userId={user.id} guildId={guildId} userName="Gg" pendingDisplayNameStyles={tmp} ignoreDisabledStylesSetting variant="heading-xl/semibold" />;
    }
    return tmp10;
  }, items4);
  obj = { label: null, labelTrailing: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null, trailing: null };
  let intl = tmp2(tmp3[17]).intl;
  obj.label = intl.string(tmp9(isTryItOut[24])["86GtGH"]);
  obj1 = { showPremiumIcon: true, showNewBadge: tmp6[0] === tmp2(tmp3[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE };
  obj.labelTrailing = jsx(user(isTryItOut[23]).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: tmp6[0] === tmp2(tmp3[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE });
  obj.buttonText = tmp15;
  obj.accessibilityValue = { text: tmp15 };
  obj.onPress = tmp14;
  obj.leading = tmp16();
  obj.trailing = nativeStackNavigation(() => {
    let tmp3Result = null;
    if (null != closure_6) {
      let colors;
      if (tmp != null) {
        colors = tmp.colors;
      }
      if (colors == null) {
        colors = [];
      }
      const obj = { colors, effectId: null };
      let effectId;
      if (tmp != null) {
        effectId = tmp.effectId;
      }
      obj.effectId = effectId;
      tmp3Result = jsx(DisplayNameStylesColorSwatchDefault, { colors, effectId: null });
    }
    return tmp3Result;
  }, items5)();
  return jsx(user(isTryItOut[23]).UserProfileEditFormButton, { label: null, labelTrailing: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null, trailing: null });
};