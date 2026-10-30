// === Module 16418: UserProfileDisplayNameStylesEditButton ===

// Module 16418 (UserProfileDisplayNameStylesEditButton)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import native from "native" /* 1188 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10752 */;
import _modDef15035 from "module_15035" /* 15035 */;
import getDisplayNameStylesFontNameDefault from "getDisplayNameStylesFontName" /* 16422 */;
import DisplayNameStylesColorSwatchDefault from "DisplayNameStylesColorSwatch" /* 16423 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const noop = fn(19);
({ useCallback: closure_4, useMemo: hasOwnProperty } = noop);
const View = fn(17).View;
const Constants = fn(1072);
({ AnalyticEvents: closure_7, UserSettingsSections: closure_8 } = Constants);
const ContentDismissActionType = fn(4855).ContentDismissActionType;
const HexagonCampaignConstants = fn(5034);
({ HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT: c10, HexagonCampaignPerk: closure_11, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj2 = { ggContainer: null, noneIcon: null };
let size = { height: 48, width: 48, borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center", paddingBottom: 4 };
obj2.ggContainer = size;
obj2.noneIcon = { tintColor: nativeDefault.colors.TEXT_SUBTLE };
let closure_14 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileDisplayNameStylesEditButton.tsx");

export default function UserProfileDisplayNameStylesEditButton(user) {
  user = user.user;
  const guildId = user.guildId;
  const isTryItOut = user.isTryItOut;
  closure_6 = undefined;
  let displayNameStylesEffectConfig;
  const tmp = closure_14();
  _slicedToArray = tmp;
  const nativeStackNavigation = user(isTryItOut[9]).useNativeStackNavigation();
  let obj = user(isTryItOut[9]);
  const items = [user(isTryItOut[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE];
  const tmp5 = _slicedToArray(user(isTryItOut[10]).useSelectedDismissibleContent(items, { bypassAutoDismiss: true }), 2);
  closure_5 = tmp6;
  let obj2 = user(isTryItOut[10]);
  const guildMemberOrUserPendingDisplayNameStyles = user(isTryItOut[12]).useGuildMemberOrUserPendingDisplayNameStyles(user, guildId);
  let tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.pendingDisplayNameStyles;
  const obj4 = { userId: user.id, guildId, pendingDisplayNameStyles: null, ignoreDisabledStylesSetting: true };
  let obj3 = user(isTryItOut[12]);
  if (isTryItOut) {
    tryItOutDisplayNameStyles = guildMemberOrUserPendingDisplayNameStyles.tryItOutDisplayNameStyles;
  }
  obj4.pendingDisplayNameStyles = tryItOutDisplayNameStyles;
  const tmp9Result = guildId(isTryItOut[13])(obj4);
  closure_6 = tmp9Result;
  const tmp9 = guildId(isTryItOut[13]);
  let effectId;
  if (tmp9Result != null) {
    effectId = tmp9Result.effectId;
  }
  if (effectId == null) {
    effectId = tmp2(tmp3[15]).DisplayNameEffect.SOLID;
  }
  displayNameStylesEffectConfig = user(isTryItOut[14]).useDisplayNameStylesEffectConfig(effectId);
  const tmp2Result = user(isTryItOut[14]);
  let tmp13 = user(isTryItOut[16]).useHexagonCampaignPerkAvailability(constants3.DISPLAY_NAME_STYLE, "UserProfileDisplayNameStylesEditButton") === constants4.SELECTABLE;
  if (tmp13) {
    tmp13 = true !== isTryItOut;
  }
  if (tmp13) {
    let fontId;
    if (tmp9Result != null) {
      fontId = tmp9Result.fontId;
    }
    tmp13 = fontId !== closure_10;
  }
  const tmp2Result4 = user(isTryItOut[16]);
  const trackHexagonCampaignContentViewed = user(isTryItOut[17]).useTrackHexagonCampaignContentViewed(tmp2(tmp3[18]).QuestContent.DISPLAY_NAME_STYLES_SETTINGS, tmp2(tmp3[17]).HexagonCampaignContentSurface.PROFILE_ROW_PROMO, tmp13);
  const tmp2Result5 = user(isTryItOut[17]);
  const items1 = [guildId, isTryItOut, nativeStackNavigation, tmp5[1]];
  const hexagonCampaignHasVisitedDisplayNameStyles = user(isTryItOut[19]).useHexagonCampaignHasVisitedDisplayNameStyles();
  const items2 = [displayNameStylesEffectConfig, tmp9Result];
  const tmp2Result6 = user(isTryItOut[19]);
  const tmp19 = closure_5(() => {
    if (null == closure_6) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.PoWNfe);
    } else {
      const intl = util.intl;
      const _HermesInternal = HermesInternal;
      stringResult = "" + intl.string(getDisplayNameStylesFontNameDefault(tmp.fontId)) + " + " + displayNameStylesEffectConfig.name;
    }
    return stringResult;
  }, items2);
  const items3 = [tmp9Result, guildId, user.id, tmp];
  const items4 = [tmp9Result];
  const tmp18 = nativeStackNavigation(() => {
    AnalyticsUtilsDefault.track(constants.DISPLAY_NAME_STYLES_FROM_SETTINGS);
    nativeStackNavigation.navigate(constants2.DISPLAY_NAME_STYLES, { guildId, isTryItOut });
    closure_5(ContentDismissActionType.TAKE_ACTION);
  }, items1);
  const tmp20 = nativeStackNavigation(() => {
    if (null == closure_6) {
      const obj2 = { source: _modDef15035, style: closure_3.noneIcon };
      let tmp10 = jsx(native.Icon, { source: _modDef15035, style: closure_3.noneIcon });
    } else {
      const obj = { style: closure_3.ggContainer, children: null };
      const obj3 = { userId: user.id, guildId, userName: "Gg", pendingDisplayNameStyles: tmp, ignoreDisabledStylesSetting: true, variant: "heading-xl/semibold" };
      obj.children = jsx(UsernameWithEffectsDefault, { userId: user.id, guildId, userName: "Gg", pendingDisplayNameStyles: tmp, ignoreDisabledStylesSetting: true, variant: "heading-xl/semibold" });
      tmp10 = <View style={closure_3.ggContainer}>{null}</View>;
    }
    return tmp10;
  }, items3);
  const obj5 = { label: null, labelTrailing: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null, trailing: null, footer: null };
  let intl = tmp2(tmp3[21]).intl;
  obj5.label = intl.string(guildId(isTryItOut[28])["86GtGH"]);
  let tmp23 = tmp13;
  if (tmp13) {
    tmp23 = !hexagonCampaignHasVisitedDisplayNameStyles;
  }
  if (!tmp23) {
    tmp23 = tmp5[0] === tmp2(tmp3[11]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_NEW_BADGE_PROFILE_PAGE;
  }
  obj5.labelTrailing = jsx(user(isTryItOut[27]).UserProfileEditFormLabelBadges, { showPremiumIcon: true, showNewBadge: tmp23 });
  obj5.buttonText = tmp19;
  obj5.accessibilityValue = { text: tmp19 };
  obj5.onPress = tmp18;
  obj5.leading = tmp20();
  obj5.trailing = nativeStackNavigation(() => {
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
  }, items4)();
  let tmp22Result;
  if (tmp13) {
    tmp22Result = jsx(tmp8(tmp3[29]), {});
  }
  obj5.footer = tmp22Result;
  return jsx(user(isTryItOut[27]).UserProfileEditFormButton, { label: null, labelTrailing: null, buttonText: null, accessibilityValue: null, onPress: null, leading: null, trailing: null, footer: null });
};