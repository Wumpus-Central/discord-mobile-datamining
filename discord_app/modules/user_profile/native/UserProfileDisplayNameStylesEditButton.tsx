// discord_app/modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import UsernameWithEffectsDefault from "../../display_name_styles/native/UsernameWithEffects.tsx";
import _modDef13566 from "../../../../_runtime/metro/13566__.js";
import getDisplayNameStylesFontNameDefault from "../../display_name_styles/getDisplayNameStylesFontName.tsx";
import DisplayNameStylesColorSwatchDefault from "../../display_name_styles/native/DisplayNameStylesColorSwatch.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
const noop = fn(19);
({ useCallback: closure_4, useMemo: hasOwnProperty } = noop);
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8 } = Constants);
const ContentDismissActionType = fn(2039).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let obj2 = { ggContainer: null, noneIcon: null };
let size = {
  height: 48,
  width: 48,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  alignItems: "center",
  justifyContent: "center",
  paddingBottom: 4,
};
obj2.ggContainer = size;
obj2.noneIcon = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_11 = createStyles.createStyles(obj2);
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
  const nativeStackNavigation = user(isTryItOut[8]).useNativeStackNavigation();
  let obj = user(isTryItOut[8]);
  const isDisplayNameStylesFlywheelSettersEnabled = user(isTryItOut[9]).useIsDisplayNameStylesFlywheelSettersEnabled(
    "UserProfileDisplayNameStylesEditButton",
  );
  let obj2 = user(isTryItOut[9]);
  if (isDisplayNameStylesFlywheelSettersEnabled) {
    const items = [tmp2(tmp3[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE];
    let items1 = items;
  } else {
    items1 = [];
  }
  let tmp6 = _slicedToArray(user(isTryItOut[10]).useSelectedDismissibleContent(items1, undefined, true), 2);
  closure_5 = tmp7;
  let obj3 = user(isTryItOut[10]);
  const guildMemberOrUserPendingDisplayNameStyles = user(isTryItOut[12]).useGuildMemberOrUserPendingDisplayNameStyles(
    user,
    guildId,
  );
  ({ pendingDisplayNameStyles, tryItOutDisplayNameStyles } = guildMemberOrUserPendingDisplayNameStyles);
  const obj4 = { userId: user.id, guildId, pendingDisplayNameStyles: null, ignoreDisabledStylesSetting: true };
  const tmp2Result = user(isTryItOut[12]);
  const tmp9 = guildId;
  if (isTryItOut) {
    pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  }
  obj4.pendingDisplayNameStyles = pendingDisplayNameStyles;
  const tmp10Result = guildId(isTryItOut[13])(obj4);
  closure_6 = tmp10Result;
  let tmp10 = guildId(isTryItOut[13]);
  let effectId;
  if (tmp10Result != null) {
    effectId = tmp10Result.effectId;
  }
  if (effectId == null) {
    effectId = tmp2(tmp3[15]).DisplayNameEffect.SOLID;
  }
  displayNameStylesEffectConfig = user(isTryItOut[14]).useDisplayNameStylesEffectConfig(effectId);
  const items2 = [guildId, isTryItOut, nativeStackNavigation, tmp6[1]];
  const items3 = [displayNameStylesEffectConfig, tmp10Result];
  const tmp2Result2 = user(isTryItOut[14]);
  const tmp15 = closure_5(() => {
    if (null == closure_6) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.PoWNfe);
    } else {
      const intl = util.intl;
      const _HermesInternal = HermesInternal;
      stringResult =
        "" + intl.string(getDisplayNameStylesFontNameDefault(tmp.fontId)) + " + " + displayNameStylesEffectConfig.name;
    }
    return stringResult;
  }, items3);
  const items4 = [tmp10Result, guildId, user.id, tmp];
  const items5 = [tmp10Result];
  const tmp14 = nativeStackNavigation(() => {
    AnalyticsUtilsDefault.track(constants.DISPLAY_NAME_STYLES_FROM_SETTINGS);
    nativeStackNavigation.navigate(constants2.DISPLAY_NAME_STYLES, { guildId, isTryItOut });
    closure_5(ContentDismissActionType.TAKE_ACTION);
  }, items2);
  const tmp16 = nativeStackNavigation(() => {
    if (null == closure_6) {
      const obj2 = { source: _modDef13566, style: closure_3.noneIcon };
      let tmp10 = jsx(native.Icon, { source: _modDef13566, style: closure_3.noneIcon });
    } else {
      const obj = { style: closure_3.ggContainer, children: null };
      const obj3 = {
        userId: user.id,
        guildId,
        userName: "Gg",
        pendingDisplayNameStyles: tmp,
        ignoreDisabledStylesSetting: true,
        variant: "heading-xl/semibold",
      };
      obj.children = jsx(UsernameWithEffectsDefault, {
        userId: user.id,
        guildId,
        userName: "Gg",
        pendingDisplayNameStyles: tmp,
        ignoreDisabledStylesSetting: true,
        variant: "heading-xl/semibold",
      });
      tmp10 = <View style={closure_3.ggContainer}>{null}</View>;
    }
    return tmp10;
  }, items4);
  const obj5 = {
    label: null,
    labelTrailing: null,
    buttonText: null,
    accessibilityValue: null,
    onPress: null,
    leading: null,
    trailing: null,
  };
  let intl = tmp2(tmp3[17]).intl;
  obj5.label = intl.string(tmp9(isTryItOut[24])["86GtGH"]);
  const tmp17 = nativeStackNavigation(() => {
    let tmp3Result = null;
    if (null != closure_6) {
      let colors;
      if (closure_6 != null) {
        colors = closure_6.colors;
      }
      if (colors == null) {
        colors = [];
      }
      const obj = { colors, effectId: null };
      let effectId;
      if (closure_6 != null) {
        effectId = closure_6.effectId;
      }
      obj.effectId = effectId;
      tmp3Result = jsx(DisplayNameStylesColorSwatchDefault, { colors, effectId: null });
    }
    return tmp3Result;
  }, items5);
  obj5.labelTrailing = jsx(user(isTryItOut[23]).UserProfileEditFormLabelBadges, {
    showPremiumIcon: true,
    showNewBadge:
      tmp6[0] === user(isTryItOut[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE,
  });
  obj5.buttonText = tmp15;
  obj5.accessibilityValue = { text: tmp15 };
  obj5.onPress = tmp14;
  obj5.leading = tmp16();
  obj5.trailing = tmp17();
  return jsx(user(isTryItOut[23]).UserProfileEditFormButton, {
    label: null,
    labelTrailing: null,
    buttonText: null,
    accessibilityValue: null,
    onPress: null,
    leading: null,
    trailing: null,
  });
}
