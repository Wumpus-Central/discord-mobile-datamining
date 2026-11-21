// === Module 16403: HexagonCampaignSheet ===

// Module 16403 (HexagonCampaignSheet)
import nativeDefault from "native" /* 575 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1192 */;
import UserStore from "UserStore" /* 1386 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 15636 */;

const require = globalThis.__r;

const require = fn;
function ScaledPreview(arg0) {
  c0 = undefined;
  ({ children, overlay } = arg0);
  const tmp = closure_20();
  [tmp3, c0] = noop.useState(null);
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  if (null != tmp3) {
    const _Math = Math;
    let PX_12 = Math.max((274 - 0.8 * tmp3) / 2, 0);
  } else {
    PX_12 = nativeDefault.space.PX_12;
  }
  obj = { style: null, children: null };
  items = [tmp.scaledPreviewContainer, { marginTop: PX_12 }];
  obj.style = items;
  const items1 = [colors(timestampProducer, { style: tmp.scaledPreview, onLayout: callback, children }), overlay];
  obj.children = items1;
  return closure_1_16(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ Platform, View: closure_6, StyleSheet } = get_ActivityIndicator);
const HexagonCampaignConstants = fn(4938);
const HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT = HexagonCampaignConstants.HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
({ HexagonCampaignPerk: closure_11, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
let closure_13 = fn(5142).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const HEXAGON_GRADIENT_PRESET = fn(1239).HEXAGON_GRADIENT_PRESET;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
let size = Math.round(66.3);
let obj = { fontId: fn(1396).DisplayNameFont.DEFAULT, effectId: fn(1397).DisplayNameEffect.SOLID, colors: [] };
let PRIMARY_SEMIBOLD = fn(9456).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT];
if (PRIMARY_SEMIBOLD == null) {
  PRIMARY_SEMIBOLD = fn(1082).Fonts.PRIMARY_SEMIBOLD;
}
const createStyles = fn(4913);
let obj3 = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, card: null, cardShade: null, previewArea: null, scaledPreviewContainer: null, scaledPreview: null, previewAppIcon: null, rows: null, rowIcon: null, fontRowIcon: null, fontRowIconText: null, badgeRow: null, footer: null, legal: null };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj3.card = { borderRadius: nativeDefault.radii.xl, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let obj6 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj6.backgroundColor = nativeDefault.unsafe_rawColors.OPACITY_BLACK_52;
obj3.cardShade = obj6;
let obj5 = { borderRadius: nativeDefault.radii.xl, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj3.previewArea = { height: 274, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center" };
obj3.scaledPreviewContainer = { width: 288 };
const rect = { position: "absolute", top: 0, left: 0, width: 360, transform: null, transformOrigin: "top left" };
let items = [{ scale: 0.8 }];
rect.transform = items;
obj3.scaledPreview = rect;
const rect1 = { position: "absolute", left: Math.round(214.20000000000002), top: Math.round(59), borderRadius: 0.65 * nativeDefault.radii.xl, borderCurve: "continuous", borderWidth: 0, transform: null };
let items1 = [{ rotate: "15deg" }];
rect1.transform = items1;
obj3.previewAppIcon = rect1;
let obj7 = { height: 274, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center" };
obj3.rows = { paddingTop: nativeDefault.space.PX_16 };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 0 };
obj3.rowIcon = size;
let obj8 = { paddingTop: nativeDefault.space.PX_16 };
obj3.fontRowIcon = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj3.fontRowIconText = { fontFamily: PRIMARY_SEMIBOLD };
let obj9 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj3.badgeRow = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
let obj10 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj3.footer = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let obj11 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj3.legal = { paddingHorizontal: nativeDefault.space.PX_24, paddingTop: nativeDefault.space.PX_16 };
let closure_20 = createStyles.createStyles(obj3);
size = fn(2);
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignSheet.tsx");

export default function HexagonCampaignSheet() {
  closure_13 = async function _handleSave() {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj5 = { value, done: true };
            return obj5;
          } else {
            stateFromStores = tmp7;
            let didApply;
            if (null != stateFromStores) {
              if (!ref.current) {
                ref.current = true;
                SelectivelySyncedUserSettingsStore(true);
                didApply = false;
                dependencyMap = 1;
                const obj7 = { selection, displayNameStyles, premiumType: tmp67.premiumType, isThemeSynced, analyticsLocations };
                const result = stateFromStores(16404).applyHexagonCampaignPerks(obj7);
                HexagonCampaignPersistedStore.current = result;
                c3 = 2;
                c4 = 1;
                const obj9 = { value: result, done: false };
                return obj9;
              }
            }
            c4 = 3;
          }
        } else {
          if (1 === tmp7) {
            dependencyMap = 0;
            didApply = false;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            didApply = value.didApply;
            dependencyMap = 0;
          }
          closure_129_8.current = false;
          closure_129_7(false);
          if (!didApply) {
            const obj11 = { text: null };
            const intl = stateFromStores(1112).intl;
            obj11.text = intl.string(stateFromStores(1112).t.F8FvUy);
            tmp3(5595).open("HEXAGON_CAMPAIGN_APPLY_ERROR", obj11);
            const obj2 = tmp3(5595);
          }
        }
        obj12 = { perks: null, content: null, sourceQuestContent: null };
        const _Object = Object;
        const values = Object.values(result2);
        obj12.perks = values.filter((item) => closure_1_5[item]);
        obj12.content = stateFromStores(6561).QuestContent.AD_PERK_MODAL;
        obj12.sourceQuestContent = stateFromStores(6561).QuestContent.QUEST_HOME_MOBILE;
        const result1 = stateFromStores(15854).trackHexagonCampaignPerkAction(obj12);
        const obj4 = stateFromStores(15854);
        tmp3(5127).hideActionSheet(stateFromStores(16402).HEXAGON_CAMPAIGN_SHEET_KEY);
        const _Object2 = Object;
        const values2 = Object.values(closure_129_5);
        const _Boolean = Boolean;
        if (values2.some(Boolean)) {
          const obj13 = { text: null, variant: "success" };
          const intl2 = stateFromStores(1112).intl;
          obj13.text = intl2.string(tmp3(4597).fX2UkH);
          tmp3(5595).open("HEXAGON_CAMPAIGN_THEME_EQUIPPED", obj13);
          const obj8 = tmp3(5595);
        }
        const obj6 = tmp3(5127);
      } catch (tmp59) {
        if (tmp4 === dependencyMap) {
          c4 = tmp2;
          throw tmp59;
        } else {
          c3 = tmp;
        }
      }
    }
  };
  const tmp = closure_20();
  obj = stateFromStores(analyticsLocations[18]);
  const displayNameFontsAvailable = obj.useDisplayNameFontsAvailable();
  items = [currentUser];
  stateFromStores = stateFromStores(analyticsLocations[19]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = stateFromStores(analyticsLocations[19]);
  const items1 = [closure_7];
  importDefault = stateFromStores(analyticsLocations[19]).useStateFromStores(items1, () => closure_7.shouldSync("appearance"));
  let obj3 = stateFromStores(analyticsLocations[19]);
  analyticsLocations = require("useAnalyticsLocations")(require("AnalyticsLocation").QUEST_HOME_PAGE).analyticsLocations;
  const tmp7 = require("useAnalyticsLocations");
  const currentAppIcon = stateFromStores(analyticsLocations[22]).useCurrentAppIcon();
  let obj5 = {};
  ({ CLIENT_THEME, CLIENT_THEME: CLIENT_THEME2 } = result2);
  let obj4 = stateFromStores(analyticsLocations[22]);
  obj5[CLIENT_THEME] = stateFromStores(analyticsLocations[17]).useHexagonCampaignPerkAvailability(CLIENT_THEME2, "HexagonCampaignSheet") === memo.SELECTABLE;
  ({ DISPLAY_NAME_STYLE, DISPLAY_NAME_STYLE: DISPLAY_NAME_STYLE2 } = result2);
  let obj6 = stateFromStores(analyticsLocations[17]);
  obj5[DISPLAY_NAME_STYLE] = stateFromStores(analyticsLocations[17]).useHexagonCampaignPerkAvailability(DISPLAY_NAME_STYLE2, "HexagonCampaignSheet") === memo.SELECTABLE;
  ({ APP_ICON, APP_ICON: APP_ICON2 } = result2);
  let obj7 = stateFromStores(analyticsLocations[17]);
  obj5[APP_ICON] = stateFromStores(analyticsLocations[17]).useHexagonCampaignPerkAvailability(APP_ICON2, "HexagonCampaignSheet") === memo.SELECTABLE;
  let obj8 = stateFromStores(analyticsLocations[17]);
  const items2 = [closure_9];
  const stateFromStores1 = stateFromStores(analyticsLocations[19]).useStateFromStores(items2, () => closure_9.hasAppliedPerk);
  let obj9 = stateFromStores(analyticsLocations[19]);
  const items3 = [closure_9];
  const stateFromStores2 = stateFromStores(analyticsLocations[19]).useStateFromStores(items3, () => closure_9.previousPerkValues);
  const obj10 = stateFromStores(analyticsLocations[19]);
  let displayNameStyles;
  if (stateFromStores != null) {
    displayNameStyles = stateFromStores.displayNameStyles;
  }
  let result = stateFromStores(analyticsLocations[23]).hasHexagonCampaignDisplayNameFont(displayNameStyles);
  let obj11 = stateFromStores(analyticsLocations[23]);
  let result1 = stateFromStores(analyticsLocations[23]).isHexagonCampaignAppIcon(currentAppIcon);
  const tmp2Result = stateFromStores(analyticsLocations[23]);
  [tmp16, _slicedToArray] = obj12.useState({});
  obj12 = {};
  let merged = Object.assign(obj5);
  let merged1 = Object.assign(tmp16);
  [disabled, closure_7] = obj12.useState(false);
  currentUser = obj12.useRef(false);
  closure_9 = obj12.useRef(null);
  const tmp21 = require("useMeasuredLayout")();
  const height = tmp21.height;
  let num = 0;
  ({ ref, onLayout } = tmp21);
  if (undefined !== height) {
    num = height;
  }
  const sum = Math.max(tmp6(tmp3[25])().bottom, closure_13) + 4;
  let displayNameStyles1;
  if (stateFromStores != null) {
    displayNameStyles1 = stateFromStores.displayNameStyles;
  }
  if (displayNameStyles1 == null) {
    displayNameStyles1 = obj;
  }
  const tmp15 = _slicedToArray(obj12.useState({}), 2);
  result2 = require("PremiumUtils").canUsePremiumProfileCustomization(stateFromStores);
  let tmp25 = displayNameStyles1;
  if (result) {
    let displayNameStyles2;
    if (stateFromStores != null) {
      displayNameStyles2 = stateFromStores.displayNameStyles;
    }
    const obj14 = { currentDisplayNameStyles: displayNameStyles2, previousDisplayNameStyles: stateFromStores2.displayNameStyles, canUsePremiumProfileCustomization: result2 };
    let hexagonCampaignRestoredDisplayNameStyles = tmp2(tmp3[23]).getHexagonCampaignRestoredDisplayNameStyles(obj14);
    if (hexagonCampaignRestoredDisplayNameStyles == null) {
      hexagonCampaignRestoredDisplayNameStyles = obj;
    }
    tmp25 = hexagonCampaignRestoredDisplayNameStyles;
    const tmp2Result3 = tmp2(tmp3[23]);
  }
  const items4 = [result2, displayNameStyles1];
  memo = obj13.useMemo(() => {
    obj = {};
    if (result2) {
      const merged = Object.assign(displayNameStyles1);
      obj.fontId = HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
      let tmp5 = obj;
    } else {
      const merged1 = Object.assign(obj);
      obj.fontId = HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
      tmp5 = obj;
    }
    return tmp5;
  }, items4);
  if (obj12[result2.DISPLAY_NAME_STYLE]) {
    tmp25 = memo;
  }
  let HEXAGON = currentAppIcon;
  if (result1) {
    let DEFAULT = stateFromStores2.appIconId;
    if (DEFAULT == null) {
      DEFAULT = tmp2(tmp3[27]).FreemiumAppIconIds.DEFAULT;
    }
    HEXAGON = DEFAULT;
  }
  if (obj12[result2.APP_ICON]) {
    HEXAGON = tmp2(tmp3[27]).LimitedTimeAppIconIds.HEXAGON;
  }
  const effect = obj13.useEffect(() => {
    obj = stateFromStores(analyticsLocations[28]);
    const result = obj.trackHexagonCampaignContentViewed({ content: stateFromStores(analyticsLocations[29]).QuestContent.AD_PERK_MODAL, sourceQuestContent: stateFromStores(analyticsLocations[29]).QuestContent.QUEST_HOME_MOBILE });
  }, []);
  const tmp6Result = require("PremiumUtils");
  const unmountEffect = stateFromStores(analyticsLocations[36]).useUnmountEffect(obj5(function*() {
    yield ref.current;
    if (1 === tmp5) {
      if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        return { value, done: true };
      } else {
        closure_128_0 = value;
        let didApply = null != closure_128_0;
        if (didApply) {
          didApply = closure_128_0.didApply;
        }
        if (didApply) {
          didApply = null != closure_128_0.updateAppIcon;
        }
        if (didApply) {
          dependencyMap = 2;
          c3 = 1;
          return { value: closure_128_0.updateAppIcon(), done: false };
        } else {
          c3 = 3;
        }
      }
    } else if (arg0 === 1) {
      c3 = 3;
      throw value;
    } else if (arg0 !== 2) {
      if (!value) {
        const obj7 = { text: null };
        const intl = tmp2(1112).intl;
        obj7.text = intl.string(tmp2(1112).t.F8FvUy);
        closure_1(5595).open("HEXAGON_CAMPAIGN_APPLY_ERROR", obj7);
        closure_1(5595);
      }
    }
    return value;
  }));
  if (null == stateFromStores) {
    return null;
  } else {
    const obj15 = { perk: tmp9.CLIENT_THEME, label: null, icon: null };
    const intl5 = tmp2(tmp3[32]).intl;
    obj15.label = intl5.string(tmp6(tmp3[35]).TTUKuI);
    const obj16 = { style: tmp.rowIcon, children: null };
    const obj17 = { gradient: HEXAGON_GRADIENT_PRESET, absolute: true };
    obj16.children = closure_15(tmp2(tmp3[37]).Gradient, obj17);
    obj15.icon = closure_15(disabled, obj16);
    const items5 = [obj15, , ];
    const obj18 = { perk: tmp9.DISPLAY_NAME_STYLE, label: null, icon: null };
    const intl6 = tmp2(tmp3[32]).intl;
    obj18.label = intl6.string(tmp2(tmp3[32]).t.NEzEws);
    const obj19 = { style: null, children: null };
    const items6 = [, ];
    ({ rowIcon: arr13[0], fontRowIcon: arr13[1] } = tmp);
    obj19.style = items6;
    let fontRowIconText;
    if (displayNameFontsAvailable) {
      fontRowIconText = tmp.fontRowIconText;
    }
    const obj20 = { variant: "body-sm/semibold", color: "text-overlay-light", style: fontRowIconText, children: "Gg" };
    obj19.children = closure_15(tmp2(tmp3[38]).Text, obj20);
    obj18.icon = closure_15(disabled, obj19);
    items5[1] = obj18;
    const obj21 = { perk: tmp9.APP_ICON, label: null, icon: null };
    let intl = tmp2(tmp3[32]).intl;
    obj21.label = intl.string(tmp2(tmp3[32]).t.RPh2ou);
    const obj22 = { id: tmp2(tmp3[27]).LimitedTimeAppIconIds.HEXAGON, size: 32, style: tmp.rowIcon };
    obj21.icon = closure_15(tmp6(tmp3[39]), obj22);
    items5[2] = obj21;
    const obj23 = { header: null, footer: null, startExpanded: true, children: null };
    const obj24 = { children: null };
    const obj25 = { title: null };
    let intl2 = tmp2(tmp3[32]).intl;
    obj25.title = intl2.string(tmp6(tmp3[35]).rZmLDm);
    const items7 = [closure_15(tmp2(tmp3[41]).BottomSheetTitleHeader, obj25), ];
    const obj26 = { style: tmp.badgeRow, children: closure_15(tmp6(tmp3[42]), {}) };
    items7[1] = closure_15(disabled, obj26);
    obj24.children = items7;
    obj23.header = closure_16(disabled, obj24);
    const obj27 = { style: null, ref: null, onLayout: null, children: null };
    const items8 = [tmp.footer, ];
    const obj28 = { paddingBottom: sum };
    items8[1] = obj28;
    obj27.style = items8;
    obj27.ref = ref;
    obj27.onLayout = onLayout;
    const intl3 = tmp2(tmp3[32]).intl;
    const t = tmp2(tmp3[32]).t;
    const obj29 = {
      size: "lg",
      grow: true,
      text: intl3.string(_slicedToArray(obj12.useState(stateFromStores1), 1)[0] ? t["R3BPH+"] : t["1Qm822"]),
      onPress: function handleSave() {
          const self = this;
          const apply = closure_13.apply;
          if (typeof apply === "unknown") {
            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
          } else {
            applyArgumentsResult = apply(self, arguments);
          }
          return applyArgumentsResult;
        },
      loading: disabled,
      disabled
    };
    obj27.children = closure_15(tmp2(tmp3[43]).Button, obj29);
    obj23.footer = closure_15(disabled, obj27);
    const obj30 = { style: null, children: null };
    const obj31 = { paddingBottom: null };
    const _Math = Math;
    obj31.paddingBottom = Math.max(num - sum, 0);
    obj30.style = obj31;
    const obj32 = { style: tmp.content, children: null };
    const obj33 = { style: tmp.card, children: null };
    let tmp33Result = obj12[tmp9.CLIENT_THEME];
    if (tmp33Result) {
      const obj34 = { children: null };
      const obj35 = { gradient: HEXAGON_GRADIENT_PRESET, absolute: true, angleOverride: 143.48 };
      const items9 = [closure_15(tmp2(tmp3[37]).Gradient, obj35), ];
      const obj36 = { style: tmp.cardShade };
      items9[1] = closure_15(tmp40, obj36);
      obj34.children = items9;
      tmp33Result = closure_16(closure_17, obj34);
    }
    const items10 = [tmp33Result, ];
    const obj37 = { style: tmp.previewArea, children: null };
    const obj38 = { overlay: null, children: null };
    const obj40 = { id: HEXAGON, size, style: tmp.previewAppIcon };
    obj38.overlay = closure_15(tmp6(tmp3[39]), obj40);
    const obj41 = { user: stateFromStores, displayName: null, selectedFontId: null, selectedEffectId: null, selectedColors: null, hideNameplate: true, hideBadges: true, hidePronouns: true, hideGuildTag: true, tilted: true, chatMessage: null };
    let username = stateFromStores.globalName;
    const tmp6Result3 = tmp6(tmp3[39]);
    if (username == null) {
      username = stateFromStores.username;
    }
    obj41.displayName = username;
    ({ fontId: obj39.selectedFontId, effectId: obj39.selectedEffectId, colors: obj39.selectedColors } = tmp25);
    const intl4 = tmp2(tmp3[32]).intl;
    obj41.chatMessage = intl4.string(tmp6(tmp3[35])["U/irIt"]);
    obj38.children = closure_15(tmp6(tmp3[44]), obj41);
    obj37.children = closure_15(ScaledPreview, obj38);
    items10[1] = closure_15(disabled, obj37);
    obj33.children = items10;
    const items11 = [closure_16(disabled, obj33), ];
    const obj42 = { style: tmp.rows, children: null };
    const obj43 = {
      hasIcons: true,
      children: items5.map((perk) => {
          perk = perk.perk;
          ({ label, icon } = perk);
          obj = { icon, label, value: obj12[perk], disabled: null, onValueChange: null };
          let tmp2 = first;
          if (!first) {
            tmp2 = !obj5[perk];
          }
          obj.disabled = tmp2;
          obj.onValueChange = function onValueChange(arg0) {
            closure_0 = arg0;
            return closure_1_4((arg0) => {
              obj = {};
              const merged = Object.assign(arg0);
              obj[perk] = closure_0;
              return obj;
            });
          };
          return closure_1_15(stateFromStores(analyticsLocations[46]).TableSwitchRow, obj, perk);
        })
    };
    obj42.children = closure_15(tmp2(tmp3[45]).TableRowGroup, obj43);
    items11[1] = closure_15(disabled, obj42);
    obj32.children = items11;
    const items12 = [closure_16(disabled, obj32), ];
    const obj44 = { style: tmp.legal, children: closure_15(tmp6(tmp3[47]), { showLogo: true }) };
    items12[1] = closure_15(disabled, obj44);
    obj30.children = items12;
    obj23.children = closure_16(disabled, obj30);
    return closure_15(tmp2(tmp3[40]).BottomSheet, obj23);
  }
  const tmp2Result4 = stateFromStores(analyticsLocations[36]);
};