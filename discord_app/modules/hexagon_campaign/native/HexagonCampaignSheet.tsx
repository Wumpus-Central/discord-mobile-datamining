// === Module 17627: HexagonCampaignSheet ===

// Module 17627 (HexagonCampaignSheet)
import nativeDefault from "native" /* 575 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1193 */;
import UserStore from "UserStore" /* 1388 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16845 */;

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
const HexagonCampaignConstants = fn(5331);
const HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT = HexagonCampaignConstants.HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
({ HexagonCampaignPerk: closure_11, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
let closure_13 = fn(5567).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const HEXAGON_GRADIENT_PRESET = fn(1240).HEXAGON_GRADIENT_PRESET;
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16, Fragment: closure_17 } = jsxProd);
let size = Math.round(66.3);
let obj = { fontId: fn(1398).DisplayNameFont.DEFAULT, effectId: fn(1399).DisplayNameEffect.SOLID, colors: [] };
let PRIMARY_SEMIBOLD = fn(10066).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT];
if (PRIMARY_SEMIBOLD == null) {
  PRIMARY_SEMIBOLD = fn(1083).Fonts.PRIMARY_SEMIBOLD;
}
const createStyles = fn(5306);
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
            const obj5 = { value, done: true };
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
                const result = stateFromStores(17628).applyHexagonCampaignPerks(obj7);
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
            obj11 = { text: null };
            const intl = stateFromStores(1113).intl;
            obj11.text = intl.string(stateFromStores(1113).t.F8FvUy);
            tmp3(6015).open("HEXAGON_CAMPAIGN_APPLY_ERROR", obj11);
            const obj2 = tmp3(6015);
          }
        }
        const obj12 = { perks: null, content: null, sourceQuestContent: null };
        const _Object = Object;
        const values = Object.values(result2);
        obj12.perks = values.filter((item) => closure_1_5[item]);
        obj12.content = stateFromStores(5341).QuestContent.AD_PERK_MODAL;
        obj12.sourceQuestContent = stateFromStores(5341).QuestContent.QUEST_HOME_MOBILE;
        const result1 = stateFromStores(17085).trackHexagonCampaignPerkAction(obj12);
        obj4 = stateFromStores(17085);
        tmp3(5552).hideActionSheet(stateFromStores(17626).HEXAGON_CAMPAIGN_SHEET_KEY);
        const _Object2 = Object;
        const values2 = Object.values(closure_129_5);
        const _Boolean = Boolean;
        if (values2.some(Boolean)) {
          const obj13 = { text: null, variant: "success" };
          const intl2 = stateFromStores(1113).intl;
          obj13.text = intl2.string(tmp3(4516).fX2UkH);
          tmp3(6015).open("HEXAGON_CAMPAIGN_THEME_EQUIPPED", obj13);
          const obj8 = tmp3(6015);
        }
        const obj6 = tmp3(5552);
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
  items = [currentUser];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [closure_7];
  importDefault = stateFromStores(analyticsLocations[18]).useStateFromStores(items1, () => closure_7.shouldSync("appearance"));
  let obj2 = stateFromStores(analyticsLocations[18]);
  analyticsLocations = require("useAnalyticsLocations")(require("AnalyticsLocation").QUEST_HOME_PAGE).analyticsLocations;
  const tmp6 = require("useAnalyticsLocations");
  const currentAppIcon = stateFromStores(analyticsLocations[21]).useCurrentAppIcon();
  let obj4 = {};
  ({ CLIENT_THEME, CLIENT_THEME: CLIENT_THEME2 } = result2);
  let obj3 = stateFromStores(analyticsLocations[21]);
  obj4[CLIENT_THEME] = stateFromStores(analyticsLocations[17]).useHexagonCampaignPerkAvailability(CLIENT_THEME2, "HexagonCampaignSheet") === memo.SELECTABLE;
  ({ DISPLAY_NAME_STYLE, DISPLAY_NAME_STYLE: DISPLAY_NAME_STYLE2 } = result2);
  let obj5 = stateFromStores(analyticsLocations[17]);
  obj4[DISPLAY_NAME_STYLE] = stateFromStores(analyticsLocations[17]).useHexagonCampaignPerkAvailability(DISPLAY_NAME_STYLE2, "HexagonCampaignSheet") === memo.SELECTABLE;
  ({ APP_ICON, APP_ICON: APP_ICON2 } = result2);
  let obj6 = stateFromStores(analyticsLocations[17]);
  obj4[APP_ICON] = stateFromStores(analyticsLocations[17]).useHexagonCampaignPerkAvailability(APP_ICON2, "HexagonCampaignSheet") === memo.SELECTABLE;
  let obj7 = stateFromStores(analyticsLocations[17]);
  const items2 = [closure_9];
  const stateFromStores1 = stateFromStores(analyticsLocations[18]).useStateFromStores(items2, () => closure_9.hasAppliedPerk);
  let obj8 = stateFromStores(analyticsLocations[18]);
  const items3 = [closure_9];
  const stateFromStores2 = stateFromStores(analyticsLocations[18]).useStateFromStores(items3, () => closure_9.previousPerkValues);
  let obj9 = stateFromStores(analyticsLocations[18]);
  let displayNameStyles;
  if (stateFromStores != null) {
    displayNameStyles = stateFromStores.displayNameStyles;
  }
  let result = stateFromStores(analyticsLocations[22]).hasHexagonCampaignDisplayNameFont(displayNameStyles);
  const obj10 = stateFromStores(analyticsLocations[22]);
  let result1 = stateFromStores(analyticsLocations[22]).isHexagonCampaignAppIcon(currentAppIcon);
  const tmp2Result = stateFromStores(analyticsLocations[22]);
  [tmp15, _slicedToArray] = obj11.useState({});
  obj11 = {};
  let merged = Object.assign(obj4);
  let merged1 = Object.assign(tmp15);
  [disabled, closure_7] = obj11.useState(false);
  currentUser = obj11.useRef(false);
  closure_9 = obj11.useRef(null);
  const tmp20 = require("useMeasuredLayout")();
  const height = tmp20.height;
  let num = 0;
  ({ ref, onLayout } = tmp20);
  if (undefined !== height) {
    num = height;
  }
  const sum = Math.max(tmp5(tmp3[24])().bottom, closure_13) + 4;
  let displayNameStyles1;
  if (stateFromStores != null) {
    displayNameStyles1 = stateFromStores.displayNameStyles;
  }
  if (displayNameStyles1 == null) {
    displayNameStyles1 = obj;
  }
  const tmp14 = _slicedToArray(obj11.useState({}), 2);
  result2 = require("PremiumUtils").canUsePremiumProfileCustomization(stateFromStores);
  let tmp24 = displayNameStyles1;
  if (result) {
    let displayNameStyles2;
    if (stateFromStores != null) {
      displayNameStyles2 = stateFromStores.displayNameStyles;
    }
    let obj13 = { currentDisplayNameStyles: displayNameStyles2, previousDisplayNameStyles: stateFromStores2.displayNameStyles, canUsePremiumProfileCustomization: result2 };
    let hexagonCampaignRestoredDisplayNameStyles = tmp2(tmp3[22]).getHexagonCampaignRestoredDisplayNameStyles(obj13);
    if (hexagonCampaignRestoredDisplayNameStyles == null) {
      hexagonCampaignRestoredDisplayNameStyles = obj;
    }
    tmp24 = hexagonCampaignRestoredDisplayNameStyles;
    const tmp2Result3 = tmp2(tmp3[22]);
  }
  const items4 = [result2, displayNameStyles1];
  memo = obj12.useMemo(() => {
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
  if (obj11[result2.DISPLAY_NAME_STYLE]) {
    tmp24 = memo;
  }
  let HEXAGON = currentAppIcon;
  if (result1) {
    let DEFAULT = stateFromStores2.appIconId;
    if (DEFAULT == null) {
      DEFAULT = tmp2(tmp3[26]).FreemiumAppIconIds.DEFAULT;
    }
    HEXAGON = DEFAULT;
  }
  if (obj11[result2.APP_ICON]) {
    HEXAGON = tmp2(tmp3[26]).LimitedTimeAppIconIds.HEXAGON;
  }
  const effect = obj12.useEffect(() => {
    obj = stateFromStores(analyticsLocations[27]);
    const result = obj.trackHexagonCampaignContentViewed({ content: stateFromStores(analyticsLocations[28]).QuestContent.AD_PERK_MODAL, sourceQuestContent: stateFromStores(analyticsLocations[28]).QuestContent.QUEST_HOME_MOBILE });
  }, []);
  const tmp5Result = require("PremiumUtils");
  const unmountEffect = stateFromStores(analyticsLocations[35]).useUnmountEffect(obj4(function*() {
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
        const intl = tmp2(1113).intl;
        obj7.text = intl.string(tmp2(1113).t.F8FvUy);
        closure_1(6015).open("HEXAGON_CAMPAIGN_APPLY_ERROR", obj7);
        closure_1(6015);
      }
    }
    return value;
  }));
  if (null == stateFromStores) {
    return null;
  } else {
    const obj14 = { perk: tmp8.CLIENT_THEME, label: null, icon: null };
    let intl2 = tmp2(tmp3[31]).intl;
    obj14.label = intl2.string(tmp5(tmp3[34]).TTUKuI);
    const obj15 = { style: tmp.rowIcon, children: null };
    const obj16 = { gradient: HEXAGON_GRADIENT_PRESET, absolute: true };
    obj15.children = closure_15(tmp2(tmp3[36]).Gradient, obj16);
    obj14.icon = closure_15(disabled, obj15);
    const items5 = [obj14, , ];
    const obj17 = { perk: tmp8.DISPLAY_NAME_STYLE, label: null, icon: null };
    const intl3 = tmp2(tmp3[31]).intl;
    obj17.label = intl3.string(tmp2(tmp3[31]).t.NEzEws);
    const obj18 = { style: null, children: null };
    const items6 = [, ];
    ({ rowIcon: arr11[0], fontRowIcon: arr11[1] } = tmp);
    obj18.style = items6;
    const obj19 = { variant: "body-sm/semibold", color: "text-overlay-light", style: tmp.fontRowIconText, children: "Gg" };
    obj18.children = closure_15(tmp2(tmp3[37]).Text, obj19);
    obj17.icon = closure_15(disabled, obj18);
    items5[1] = obj17;
    const obj20 = { perk: tmp8.APP_ICON, label: null, icon: null };
    const intl4 = tmp2(tmp3[31]).intl;
    obj20.label = intl4.string(tmp2(tmp3[31]).t.RPh2ou);
    const obj21 = { id: tmp2(tmp3[26]).LimitedTimeAppIconIds.HEXAGON, size: 32, style: tmp.rowIcon };
    obj20.icon = closure_15(tmp5(tmp3[38]), obj21);
    items5[2] = obj20;
    const obj22 = { header: null, footer: null, startExpanded: true, children: null };
    const obj23 = { children: null };
    const obj24 = { title: null };
    const intl5 = tmp2(tmp3[31]).intl;
    obj24.title = intl5.string(tmp5(tmp3[34]).rZmLDm);
    const items7 = [closure_15(tmp2(tmp3[40]).BottomSheetTitleHeader, obj24), ];
    const obj25 = { style: tmp.badgeRow, children: closure_15(tmp5(tmp3[41]), {}) };
    items7[1] = closure_15(disabled, obj25);
    obj23.children = items7;
    obj22.header = closure_16(disabled, obj23);
    const obj26 = { style: null, ref: null, onLayout: null, children: null };
    const items8 = [tmp.footer, ];
    const obj27 = { paddingBottom: sum };
    items8[1] = obj27;
    obj26.style = items8;
    obj26.ref = ref;
    obj26.onLayout = onLayout;
    const intl6 = tmp2(tmp3[31]).intl;
    const t = tmp2(tmp3[31]).t;
    const obj28 = {
      size: "lg",
      grow: true,
      text: intl6.string(_slicedToArray(obj11.useState(stateFromStores1), 1)[0] ? t["R3BPH+"] : t["1Qm822"]),
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
    obj26.children = closure_15(tmp2(tmp3[42]).Button, obj28);
    obj22.footer = closure_15(disabled, obj26);
    const obj30 = { style: null, children: null };
    const obj31 = { paddingBottom: null };
    const _Math = Math;
    obj31.paddingBottom = Math.max(num - sum, 0);
    obj30.style = obj31;
    const obj32 = { style: tmp.content, children: null };
    const obj33 = { style: tmp.card, children: null };
    let tmp39Result = obj11[tmp8.CLIENT_THEME];
    if (tmp39Result) {
      const obj34 = { children: null };
      const obj35 = { gradient: HEXAGON_GRADIENT_PRESET, absolute: true, angleOverride: 143.48 };
      const items9 = [closure_15(tmp2(tmp3[36]).Gradient, obj35), ];
      const obj36 = { style: tmp.cardShade };
      items9[1] = closure_15(tmp36, obj36);
      obj34.children = items9;
      tmp39Result = closure_16(closure_17, obj34);
    }
    const items10 = [tmp39Result, ];
    const obj37 = { style: tmp.previewArea, children: null };
    const obj38 = { overlay: null, children: null };
    const obj39 = { id: HEXAGON, size, style: tmp.previewAppIcon };
    obj38.overlay = closure_15(tmp5(tmp3[38]), obj39);
    const obj40 = { user: stateFromStores, displayName: null, selectedFontId: null, selectedEffectId: null, selectedColors: null, hideNameplate: true, hideBadges: true, hidePronouns: true, hideGuildTag: true, tilted: true, chatMessage: null };
    let username = stateFromStores.globalName;
    const tmp5Result3 = tmp5(tmp3[38]);
    if (username == null) {
      username = stateFromStores.username;
    }
    obj40.displayName = username;
    ({ fontId: obj29.selectedFontId, effectId: obj29.selectedEffectId, colors: obj29.selectedColors } = tmp24);
    let intl = tmp2(tmp3[31]).intl;
    obj40.chatMessage = intl.string(tmp5(tmp3[34])["U/irIt"]);
    obj38.children = closure_15(tmp5(tmp3[43]), obj40);
    obj37.children = closure_15(ScaledPreview, obj38);
    items10[1] = closure_15(disabled, obj37);
    obj33.children = items10;
    const items11 = [closure_16(disabled, obj33), ];
    const obj41 = { style: tmp.rows, children: null };
    const obj42 = {
      hasIcons: true,
      children: items5.map((perk) => {
          perk = perk.perk;
          ({ label, icon } = perk);
          obj = { icon, label, value: obj11[perk], disabled: null, onValueChange: null };
          let tmp2 = first;
          if (!first) {
            tmp2 = !obj4[perk];
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
          return closure_1_15(stateFromStores(analyticsLocations[45]).TableSwitchRow, obj, perk);
        })
    };
    obj41.children = closure_15(tmp2(tmp3[44]).TableRowGroup, obj42);
    items11[1] = closure_15(disabled, obj41);
    obj32.children = items11;
    const items12 = [closure_16(disabled, obj32), ];
    const obj43 = { style: tmp.legal, children: closure_15(tmp5(tmp3[46]), { showLogo: true }) };
    items12[1] = closure_15(disabled, obj43);
    obj30.children = items12;
    obj22.children = closure_16(disabled, obj30);
    return closure_15(tmp2(tmp3[39]).BottomSheet, obj22);
  }
  const tmp2Result4 = stateFromStores(analyticsLocations[35]);
};