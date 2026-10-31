// === Module 16993: HexagonCampaignSheet ===

// Module 16993 (HexagonCampaignSheet)
import nativeDefault from "native" /* 575 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelectivelySyncedUserSettingsStore from "SelectivelySyncedUserSettingsStore" /* 1193 */;
import UserStore from "UserStore" /* 1383 */;
import HexagonCampaignPersistedStore from "HexagonCampaignPersistedStore" /* 16222 */;

const require = globalThis.__r;

const require = fn;
function ScaledPreview(arg0) {
  c0 = undefined;
  ({ children, overlay } = arg0);
  const tmp = closure_21();
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
  const items = [tmp.scaledPreviewContainer, { marginTop: PX_12 }];
  obj.style = items;
  const items1 = [__initData2(timestampProducer, { style: tmp.scaledPreview, onLayout: callback, children }), overlay];
  obj.children = items1;
  return closure_1_17(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ Platform, View: metroRequire, StyleSheet } = get_ActivityIndicator);
const HexagonCampaignConstants = fn(5039);
const HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT = HexagonCampaignConstants.HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
({ HexagonCampaignPerk: closure_11, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
let closure_13 = fn(5273).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const isHexagonCampaignAppIcon = fn(9979).isHexagonCampaignAppIcon;
const HEXAGON_GRADIENT_PRESET = fn(1240).HEXAGON_GRADIENT_PRESET;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
let size = Math.round(66.3);
let obj = { fontId: fn(1403).DisplayNameFont.DEFAULT, effectId: fn(1402).DisplayNameEffect.SOLID, colors: [] };
let PRIMARY_SEMIBOLD = fn(9290).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT];
if (PRIMARY_SEMIBOLD == null) {
  PRIMARY_SEMIBOLD = fn(1083).Fonts.PRIMARY_SEMIBOLD;
}
const createStyles = fn(5014);
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
let closure_21 = createStyles.createStyles(obj3);
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            closure_128_0 = undefined;
            if (null != stateFromStores) {
              if (!ref.current) {
                ref.current = true;
                SelectivelySyncedUserSettingsStore(true);
                closure_128_0 = false;
                dependencyMap = 1;
                const obj7 = { selection, displayNameStyles, premiumType: tmp65.premiumType, isThemeSynced, analyticsLocations };
                c3 = 2;
                c4 = 1;
                const obj9 = { value: stateFromStores(16994).applyHexagonCampaignPerks(obj7), done: false };
                return obj9;
              }
            }
            c4 = 3;
          }
        } else {
          if (1 === tmp7) {
            dependencyMap = 0;
            closure_128_0 = false;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            dependencyMap = 0;
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_128_0 = value;
            dependencyMap = 0;
          }
          closure_129_8.current = false;
          closure_129_7(false);
          if (!closure_128_0) {
            const obj11 = { text: null };
            const intl = stateFromStores(1113).intl;
            obj11.text = intl.string(stateFromStores(1113).t.F8FvUy);
            tmp3(5712).open("HEXAGON_CAMPAIGN_APPLY_ERROR", obj11);
            const obj2 = tmp3(5712);
          }
        }
        obj12 = { perks: null, content: null, sourceQuestContent: null };
        const _Object = Object;
        const values = Object.values(result1);
        obj12.perks = values.filter((item) => closure_1_5[item]);
        obj12.content = stateFromStores(6784).QuestContent.AD_PERK_MODAL;
        obj12.sourceQuestContent = stateFromStores(6784).QuestContent.QUEST_HOME_MOBILE;
        const result = stateFromStores(16453).trackHexagonCampaignPerkAction(obj12);
        obj4 = stateFromStores(16453);
        tmp3(5258).hideActionSheet(stateFromStores(16992).HEXAGON_CAMPAIGN_SHEET_KEY);
        const _Object2 = Object;
        const values2 = Object.values(closure_129_5);
        const _Boolean = Boolean;
        if (values2.some(Boolean)) {
          const obj13 = { text: null, variant: "success" };
          const intl2 = stateFromStores(1113).intl;
          obj13.text = intl2.string(tmp3(4285).fX2UkH);
          tmp3(5712).open("HEXAGON_CAMPAIGN_THEME_EQUIPPED", obj13);
          const obj8 = tmp3(5712);
        }
        const obj6 = tmp3(5258);
      } catch (tmp57) {
        if (tmp4 === dependencyMap) {
          c4 = tmp2;
          throw tmp57;
        } else {
          c3 = tmp;
        }
      }
    }
  };
  const tmp = closure_21();
  obj = stateFromStores(analyticsLocations[19]);
  const items = [currentUser];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [closure_7];
  importDefault = stateFromStores(analyticsLocations[19]).useStateFromStores(items1, () => closure_7.shouldSync("appearance"));
  let obj2 = stateFromStores(analyticsLocations[19]);
  analyticsLocations = require("useAnalyticsLocations")(require("AnalyticsLocation").QUEST_HOME_PAGE).analyticsLocations;
  const tmp6 = require("useAnalyticsLocations");
  const currentAppIcon = stateFromStores(analyticsLocations[22]).useCurrentAppIcon();
  let obj4 = {};
  ({ CLIENT_THEME, CLIENT_THEME: CLIENT_THEME2 } = result1);
  let obj3 = stateFromStores(analyticsLocations[22]);
  obj4[CLIENT_THEME] = stateFromStores(analyticsLocations[18]).useHexagonCampaignPerkAvailability(CLIENT_THEME2, "HexagonCampaignSheet") === memo.SELECTABLE;
  ({ DISPLAY_NAME_STYLE, DISPLAY_NAME_STYLE: DISPLAY_NAME_STYLE2 } = result1);
  let obj5 = stateFromStores(analyticsLocations[18]);
  obj4[DISPLAY_NAME_STYLE] = stateFromStores(analyticsLocations[18]).useHexagonCampaignPerkAvailability(DISPLAY_NAME_STYLE2, "HexagonCampaignSheet") === memo.SELECTABLE;
  ({ APP_ICON, APP_ICON: APP_ICON2 } = result1);
  let obj6 = stateFromStores(analyticsLocations[18]);
  obj4[APP_ICON] = stateFromStores(analyticsLocations[18]).useHexagonCampaignPerkAvailability(APP_ICON2, "HexagonCampaignSheet") === memo.SELECTABLE;
  let obj7 = stateFromStores(analyticsLocations[18]);
  const items2 = [HexagonCampaignPersistedStore];
  const stateFromStores1 = stateFromStores(analyticsLocations[19]).useStateFromStores(items2, () => HexagonCampaignPersistedStore.hasAppliedPerk);
  let obj8 = stateFromStores(analyticsLocations[19]);
  const items3 = [HexagonCampaignPersistedStore];
  const stateFromStores2 = stateFromStores(analyticsLocations[19]).useStateFromStores(items3, () => HexagonCampaignPersistedStore.previousPerkValues);
  let obj9 = stateFromStores(analyticsLocations[19]);
  let displayNameStyles;
  if (stateFromStores != null) {
    displayNameStyles = stateFromStores.displayNameStyles;
  }
  let result = stateFromStores(analyticsLocations[23]).hasHexagonCampaignDisplayNameFont(displayNameStyles);
  const obj10 = stateFromStores(analyticsLocations[23]);
  const tmp13 = isHexagonCampaignAppIcon(currentAppIcon);
  [tmp15, _slicedToArray] = obj12.useState({});
  obj12 = {};
  let merged = Object.assign(obj4);
  let merged1 = Object.assign(tmp15);
  [disabled, closure_7] = obj12.useState(false);
  currentUser = obj12.useRef(false);
  const tmp14 = _slicedToArray(obj12.useState({}), 2);
  [tmp21, HexagonCampaignPersistedStore] = obj12.useState(0);
  const sum = Math.max(tmp5(tmp3[24])().bottom, closure_13) + 4;
  let displayNameStyles1;
  if (stateFromStores != null) {
    displayNameStyles1 = stateFromStores.displayNameStyles;
  }
  if (displayNameStyles1 == null) {
    displayNameStyles1 = obj;
  }
  const tmp20 = _slicedToArray(obj12.useState(0), 2);
  result1 = require("PremiumUtils").canUsePremiumProfileCustomization(stateFromStores);
  let tmp25 = displayNameStyles1;
  if (result) {
    let displayNameStyles2;
    if (stateFromStores != null) {
      displayNameStyles2 = stateFromStores.displayNameStyles;
    }
    let obj13 = { currentDisplayNameStyles: displayNameStyles2, previousDisplayNameStyles: stateFromStores2.displayNameStyles, canUsePremiumProfileCustomization: result1 };
    let hexagonCampaignRestoredDisplayNameStyles = tmp2(tmp3[23]).getHexagonCampaignRestoredDisplayNameStyles(obj13);
    if (hexagonCampaignRestoredDisplayNameStyles == null) {
      hexagonCampaignRestoredDisplayNameStyles = obj;
    }
    tmp25 = hexagonCampaignRestoredDisplayNameStyles;
    const tmp2Result = tmp2(tmp3[23]);
  }
  const items4 = [result1, displayNameStyles1];
  memo = obj11.useMemo(() => {
    obj = {};
    if (result1) {
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
  if (obj12[result1.DISPLAY_NAME_STYLE]) {
    tmp25 = memo;
  }
  let HEXAGON = currentAppIcon;
  if (tmp13) {
    let DEFAULT = stateFromStores2.appIconId;
    if (DEFAULT == null) {
      DEFAULT = tmp2(tmp3[26]).FreemiumAppIconIds.DEFAULT;
    }
    HEXAGON = DEFAULT;
  }
  if (obj12[result1.APP_ICON]) {
    HEXAGON = tmp2(tmp3[26]).LimitedTimeAppIconIds.HEXAGON;
  }
  const effect = obj11.useEffect(() => {
    obj = stateFromStores(analyticsLocations[27]);
    const result = obj.trackHexagonCampaignContentViewed({ content: stateFromStores(analyticsLocations[28]).QuestContent.AD_PERK_MODAL, sourceQuestContent: stateFromStores(analyticsLocations[28]).QuestContent.QUEST_HOME_MOBILE });
  }, []);
  if (null == stateFromStores) {
    return null;
  } else {
    const obj14 = { perk: tmp8.CLIENT_THEME, label: null, icon: null };
    let intl2 = tmp2(tmp3[31]).intl;
    obj14.label = intl2.string(tmp5(tmp3[34]).TTUKuI);
    const obj15 = { style: tmp.rowIcon, children: null };
    const obj16 = { gradient: HEXAGON_GRADIENT_PRESET, absolute: true };
    obj15.children = closure_16(tmp2(tmp3[35]).Gradient, obj16);
    obj14.icon = closure_16(disabled, obj15);
    const items5 = [obj14, , ];
    const obj17 = { perk: tmp8.DISPLAY_NAME_STYLE, label: null, icon: null };
    const intl3 = tmp2(tmp3[31]).intl;
    obj17.label = intl3.string(tmp5(tmp3[34]).fobter);
    const obj18 = { style: null, children: null };
    const items6 = [, ];
    ({ rowIcon: arr11[0], fontRowIcon: arr11[1] } = tmp);
    obj18.style = items6;
    const obj19 = { variant: "text-sm/semibold", color: "text-overlay-light", style: tmp.fontRowIconText, children: "Gg" };
    obj18.children = closure_16(tmp2(tmp3[36]).Text, obj19);
    obj17.icon = closure_16(disabled, obj18);
    items5[1] = obj17;
    const obj20 = { perk: tmp8.APP_ICON, label: null, icon: null };
    const intl4 = tmp2(tmp3[31]).intl;
    obj20.label = intl4.string(tmp5(tmp3[34]).DTv8Yq);
    const obj21 = { id: tmp2(tmp3[26]).LimitedTimeAppIconIds.HEXAGON, size: 32, style: tmp.rowIcon };
    obj20.icon = closure_16(tmp5(tmp3[37]), obj21);
    items5[2] = obj20;
    const obj22 = { header: null, footer: null, startExpanded: true, children: null };
    const obj23 = { children: null };
    const obj24 = { title: null };
    const intl5 = tmp2(tmp3[31]).intl;
    obj24.title = intl5.string(tmp5(tmp3[34]).rZmLDm);
    const items7 = [closure_16(tmp2(tmp3[39]).BottomSheetTitleHeader, obj24), ];
    const obj25 = { style: tmp.badgeRow, children: closure_16(tmp5(tmp3[40]), {}) };
    items7[1] = closure_16(disabled, obj25);
    obj23.children = items7;
    obj22.header = closure_17(disabled, obj23);
    const obj26 = { style: null, onLayout: null, children: null };
    const items8 = [tmp.footer, ];
    const obj28 = { paddingBottom: sum };
    items8[1] = obj28;
    obj26.style = items8;
    obj26.onLayout = tmp30;
    const intl6 = tmp2(tmp3[31]).intl;
    const t = tmp2(tmp3[31]).t;
    const obj29 = {
      size: "lg",
      grow: true,
      text: intl6.string(_slicedToArray(obj12.useState(stateFromStores1), 1)[0] ? t["R3BPH+"] : t["1Qm822"]),
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
    obj26.children = closure_16(tmp2(tmp3[41]).Button, obj29);
    obj22.footer = closure_16(disabled, obj26);
    const obj30 = { style: null, children: null };
    const obj31 = { paddingBottom: null };
    const _Math = Math;
    obj31.paddingBottom = Math.max(tmp21 - sum, 0);
    obj30.style = obj31;
    const obj32 = { style: tmp.content, children: null };
    const obj33 = { style: tmp.card, children: null };
    let tmp40Result = obj12[tmp8.CLIENT_THEME];
    if (tmp40Result) {
      const obj34 = { children: null };
      const obj35 = { gradient: HEXAGON_GRADIENT_PRESET, absolute: true, angleOverride: 143.48 };
      const items9 = [closure_16(tmp2(tmp3[35]).Gradient, obj35), ];
      const obj36 = { style: tmp.cardShade };
      items9[1] = closure_16(tmp37, obj36);
      obj34.children = items9;
      tmp40Result = closure_17(closure_18, obj34);
    }
    const items10 = [tmp40Result, ];
    const obj37 = { style: tmp.previewArea, children: null };
    const obj38 = { overlay: null, children: null };
    const obj39 = { id: HEXAGON, size, style: tmp.previewAppIcon };
    obj38.overlay = closure_16(tmp5(tmp3[37]), obj39);
    const obj40 = { user: stateFromStores, displayName: null, selectedFontId: null, selectedEffectId: null, selectedColors: null, hideNameplate: true, hideBadges: true, hidePronouns: true, hideGuildTag: true, tilted: true, chatMessage: null };
    let username = stateFromStores.globalName;
    const tmp5Result3 = tmp5(tmp3[37]);
    if (username == null) {
      username = stateFromStores.username;
    }
    obj40.displayName = username;
    ({ fontId: obj27.selectedFontId, effectId: obj27.selectedEffectId, colors: obj27.selectedColors } = tmp25);
    let intl = tmp2(tmp3[31]).intl;
    obj40.chatMessage = intl.string(tmp5(tmp3[34])["U/irIt"]);
    obj38.children = closure_16(tmp5(tmp3[42]), obj40);
    obj37.children = closure_16(ScaledPreview, obj38);
    items10[1] = closure_16(disabled, obj37);
    obj33.children = items10;
    const items11 = [closure_17(disabled, obj33), ];
    const obj41 = { style: tmp.rows, children: null };
    const obj42 = {
      hasIcons: true,
      children: items5.map((perk) => {
          perk = perk.perk;
          ({ label, icon } = perk);
          obj = { icon, label, value: obj12[perk], disabled: null, onValueChange: null };
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
          return closure_1_16(stateFromStores(analyticsLocations[44]).TableSwitchRow, obj, perk);
        })
    };
    obj41.children = closure_16(tmp2(tmp3[43]).TableRowGroup, obj42);
    items11[1] = closure_16(disabled, obj41);
    obj32.children = items11;
    const items12 = [closure_17(disabled, obj32), ];
    const obj43 = { style: tmp.legal, children: closure_16(tmp5(tmp3[45]), { showLogo: true }) };
    items12[1] = closure_16(disabled, obj43);
    obj30.children = items12;
    obj22.children = closure_17(disabled, obj30);
    return closure_16(tmp2(tmp3[38]).BottomSheet, obj22);
  }
  const tmp5Result = require("PremiumUtils");
};