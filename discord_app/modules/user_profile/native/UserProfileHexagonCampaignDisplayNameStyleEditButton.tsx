// === Module 17105: UserProfileHexagonCampaignDisplayNameStyleEditButton ===

// Module 17105 (UserProfileHexagonCampaignDisplayNameStyleEditButton)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 6015 */;
import openPremiumModalDefault from "openPremiumModal" /* 9579 */;
import PremiumFeaturesCards from "PremiumFeaturesCards" /* 10954 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function showEnrollmentError() {
  const obj2 = { text: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.F8FvUy);
  ToastActionCreatorsDefault.open("HEXAGON_CAMPAIGN_ENROLLMENT_ERROR", obj2);
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1072);
({ AnalyticsObjects: closure_6, AnalyticsPages: metroImportDefault, AnalyticsSections: closure_8, HorizontalGradient: closure_9 } = Constants);
const HexagonCampaignConstants = fn(5331);
({ HEXAGON_CAMPAIGN_DISPLAY_NAME_STYLES: closure_10, HexagonCampaignPerk: closure_11, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const colors = ["black", "black"];
const colors2 = ["black", "transparent"];
const createStyles = fn(5306);
let obj2 = { card: { flexGrow: 1, flexShrink: 1, borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: nativeDefault.radii.md, overflow: "hidden" }, row: null, name: null, nameMask: null, nameMaskOpaque: null, nameMaskFade: null, nameMeasure: null, nameMeasureText: null, labelBadge: null };
let obj3 = { flexGrow: 1, flexShrink: 1, borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: nativeDefault.radii.md, overflow: "hidden" };
obj2.row = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_16 };
obj2.name = { flex: 1 };
let obj5 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.flexDirection = "row";
obj2.nameMask = obj5;
obj2.nameMaskOpaque = { flex: 1 };
const obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_16 };
obj2.nameMaskFade = { width: nativeDefault.space.PX_32 };
obj2.nameMeasure = { position: "absolute", top: 0, left: 0, width: 10000, opacity: 0 };
obj2.nameMeasureText = { alignSelf: "flex-start" };
let obj6 = { width: nativeDefault.space.PX_32 };
obj2.labelBadge = { marginLeft: nativeDefault.space.PX_8 };
let closure_17 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileHexagonCampaignDisplayNameStyleEditButton.tsx");

export default function UserProfileHexagonCampaignDisplayNameStyleEditButton(availability) {
  ({ user, disabled } = availability);
  if (disabled === undefined) {
    disabled = false;
  }
  let isApplied;
  applyCampaignDisplayNameStyle = undefined;
  noop = undefined;
  c5 = undefined;
  let callback2;
  let analyticsLocations;
  let callback3;
  const tmp = closure_17();
  _require = tmp2;
  const displayNameStylesPendingName = require("useDisplayNameStylesPendingName").useDisplayNameStylesPendingName(user);
  const intl = require("util").intl;
  const stringResult = intl.string(isApplied(applyCampaignDisplayNameStyle[11])["86GtGH"]);
  let obj = require("useDisplayNameStylesPendingName");
  const trackHexagonCampaignContentViewed = require("HexagonCampaignAnalytics").useTrackHexagonCampaignContentViewed(require("QuestTypes").QuestContent.DISPLAY_NAME_STYLES_SETTINGS, require("HexagonCampaignAnalytics").HexagonCampaignContentSurface.NON_NITRO_CARD, true);
  const obj2 = require("HexagonCampaignAnalytics");
  const hexagonCampaignDisplayNameStyleToggle = require("useHexagonCampaignDisplayNameStyleToggle").useHexagonCampaignDisplayNameStyleToggle(user, showEnrollmentError);
  isApplied = hexagonCampaignDisplayNameStyleToggle.isApplied;
  ({ isEnrolling, applyCampaignDisplayNameStyle } = hexagonCampaignDisplayNameStyleToggle);
  const removeCampaignDisplayNameStyle = hexagonCampaignDisplayNameStyleToggle.removeCampaignDisplayNameStyle;
  const obj3 = require("useHexagonCampaignDisplayNameStyleToggle");
  [tmp11, c4] = removeCampaignDisplayNameStyle(noop.useState(0), 2);
  const tmp10 = removeCampaignDisplayNameStyle(noop.useState(0), 2);
  [tmp13, c5] = removeCampaignDisplayNameStyle(noop.useState(0), 2);
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const callback1 = noop.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp18 = closure_13(isApplied(applyCampaignDisplayNameStyle[15]), { userId: user.id, userName: displayNameStylesPendingName, pendingDisplayNameStyles, ignoreDisabledStylesSetting: true, variant: "heading-xxl/semibold", lineClamp: 1, ellipsizeMode: "clip" });
  if (!disabled) {
    disabled = isEnrolling;
  }
  items = [applyCampaignDisplayNameStyle, removeCampaignDisplayNameStyle];
  callback2 = obj4.useCallback((arg0) => {
    if (arg0) {
      applyCampaignDisplayNameStyle();
    } else {
      removeCampaignDisplayNameStyle();
    }
  }, items);
  const obj5 = { userId: user.id, userName: displayNameStylesPendingName, pendingDisplayNameStyles, ignoreDisabledStylesSetting: true, variant: "heading-xxl/semibold", lineClamp: 1, ellipsizeMode: "clip" };
  const tmp12 = removeCampaignDisplayNameStyle(noop.useState(0), 2);
  analyticsLocations = isApplied(applyCampaignDisplayNameStyle[16])(tmp6(tmp4[17]).EDIT_DISPLAY_NAME_STYLES_MODAL).analyticsLocations;
  const items1 = [analyticsLocations];
  callback3 = obj4.useCallback(() => {
    const obj = { analyticsLocation: { page: constants2.USER_SETTINGS, section: constants3.SETTINGS_DISPLAY_NAME_STYLES, object: constants.PREMIUM_UPSELL_BUTTON }, analyticsLocations, premiumFeatureCardOrder: PremiumFeaturesCards.PremiumFeatureCardOrder.TIER_2_LEADING };
    openPremiumModalDefault(obj);
  }, items1);
  const items2 = [availability.availability === constants5.LOCKED, isApplied, callback3, callback2];
  const callback4 = obj4.useCallback(() => {
    if (closure_0) {
      callback3();
    } else {
      callback2(!isApplied);
    }
  }, items2);
  const obj6 = { label: stringResult, labelTrailing: null, children: null };
  let tmp16Result;
  if (availability.availability !== constants5.LOCKED) {
    const obj7 = { style: tmp.labelBadge, children: null };
    const obj8 = { perk: constants4.DISPLAY_NAME_STYLE };
    obj7.children = closure_13(tmp6(tmp4[21]), obj8);
    tmp16Result = closure_13(c5, obj7);
  }
  obj6.labelTrailing = tmp16Result;
  const obj9 = { style: tmp.card, children: null };
  const obj10 = { onPress: callback4, style: tmp.row, disabled, accessibilityRole: null, accessibilityLabel: null, accessibilityState: null, children: null };
  let str = "switch";
  if (availability.availability === constants5.LOCKED) {
    str = "button";
  }
  obj10.accessibilityRole = str;
  obj10.accessibilityLabel = stringResult;
  let tmp28;
  if (availability.availability !== constants5.LOCKED) {
    const obj11 = { checked: isApplied, busy: isEnrolling };
    tmp28 = obj11;
  }
  obj10.accessibilityState = tmp28;
  const obj12 = { style: tmp.name, onLayout: callback, children: null };
  let tmp16Result3 = tmp18;
  if (tmp11 > 0) {
    tmp16Result3 = tmp18;
    if (tmp13 > tmp11) {
      const obj13 = { maskElement: null, children: null };
      const obj14 = { style: tmp.nameMask, children: null };
      const obj15 = { colors, style: tmp.nameMaskOpaque };
      const items3 = [closure_13(tmp6(tmp4[24]), obj15), ];
      const obj16 = { colors: colors2, start: null, end: null, style: null };
      ({ START: obj20.start, END: obj20.end } = closure_9);
      obj16.style = tmp.nameMaskFade;
      items3[1] = closure_13(tmp6(tmp4[24]), obj16);
      obj14.children = items3;
      obj13.maskElement = closure_14(tmp27, obj14);
      obj13.children = tmp18;
      tmp16Result3 = closure_13(tmp6(tmp4[23]), obj13);
      const tmp6Result2 = tmp6(tmp4[23]);
    }
  }
  const items4 = [tmp16Result3, ];
  const obj17 = { style: tmp.nameMeasure, pointerEvents: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: null };
  const obj18 = { style: tmp.nameMeasureText, onLayout: callback1, children: closure_13(isApplied(applyCampaignDisplayNameStyle[15]), { userId: user.id, userName: displayNameStylesPendingName, pendingDisplayNameStyles, ignoreDisabledStylesSetting: true, variant: "heading-xxl/semibold", lineClamp: 1 }) };
  obj17.children = closure_13(c5, obj18);
  items4[1] = closure_13(c5, obj17);
  obj12.children = items4;
  const items5 = [closure_14(c5, obj12), ];
  if (availability.availability === constants5.LOCKED) {
    let tmp16Result4 = closure_13(tmp3(tmp4[25]).TableRowArrow, {});
  } else {
    const obj36 = { "aria-hidden": true, value: isApplied, onValueChange: callback2, disabled };
    tmp16Result4 = closure_13(tmp3(tmp4[26]).FormSwitch, obj36);
  }
  items5[1] = tmp16Result4;
  obj10.children = items5;
  const items6 = [closure_14(require("Pressables").PressableHighlight, obj10), closure_13(isApplied(applyCampaignDisplayNameStyle[27]), { showLearnMore: true })];
  obj9.children = items6;
  obj6.children = closure_14(c5, obj9);
  return closure_13(require("Input").Input, obj6);
};