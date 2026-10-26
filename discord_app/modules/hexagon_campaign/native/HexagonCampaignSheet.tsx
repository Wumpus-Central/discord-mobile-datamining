// discord_app/modules/hexagon_campaign/native/HexagonCampaignSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SelectivelySyncedUserSettingsStore from "../../user_settings/SelectivelySyncedUserSettingsStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import HexagonCampaignPersistedStore from "../HexagonCampaignPersistedStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Platform, View: metroRequire, StyleSheet } = get_ActivityIndicator);
const HexagonCampaignConstants = fn(4996);
const HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT = HexagonCampaignConstants.HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT;
({ HexagonCampaignPerk: closure_11, HexagonCampaignPerkAvailability: closure_12 } = HexagonCampaignConstants);
let closure_13 = fn(5266).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const isHexagonCampaignAppIcon = fn(9865).isHexagonCampaignAppIcon;
const HEXAGON_GRADIENT_PRESET = fn(1255).HEXAGON_GRADIENT_PRESET;
const jsxProd = fn(21);
({ jsx: closure_16, jsxs: closure_17, Fragment: closure_18 } = jsxProd);
const HexagonCampaignSheet = "HexagonCampaignSheet";
let c20 = 143.48;
let obj = { fontId: fn(1412).DisplayNameFont.DEFAULT, effectId: fn(1411).DisplayNameEffect.SOLID, colors: [] };
let PRIMARY_SEMIBOLD = fn(9221).DISPLAY_NAME_STYLES_FONT_FAMILY_MAP[HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT];
if (PRIMARY_SEMIBOLD == null) {
  PRIMARY_SEMIBOLD = fn(1098).Fonts.PRIMARY_SEMIBOLD;
}
const createStyles = fn(4971);
let obj3 = {
  content: { paddingHorizontal: nativeDefault.space.PX_16 },
  card: null,
  cardShade: null,
  previewArea: null,
  scaledPreviewContainer: null,
  scaledPreview: null,
  rows: null,
  rowIcon: null,
  fontRowIcon: null,
  fontRowIconText: null,
  badgeRow: null,
  footer: null,
  legal: null,
};
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj3.card = {
  borderRadius: nativeDefault.radii.xl,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
let obj6 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj6.backgroundColor = nativeDefault.unsafe_rawColors.OPACITY_BLACK_52;
obj3.cardShade = obj6;
let obj5 = {
  borderRadius: nativeDefault.radii.xl,
  overflow: "hidden",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
};
obj3.previewArea = { height: 274, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center" };
obj3.scaledPreviewContainer = { width: 288 };
const rect = { position: "absolute", top: 0, left: 0, width: 360, transform: null, transformOrigin: "top left" };
let items = [{ scale: 0.8 }];
rect.transform = items;
obj3.scaledPreview = rect;
let obj7 = { height: 274, paddingHorizontal: nativeDefault.space.PX_16, alignItems: "center" };
obj3.rows = { paddingTop: nativeDefault.space.PX_16 };
let size = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm, overflow: "hidden", borderWidth: 0 };
obj3.rowIcon = size;
let obj8 = { paddingTop: nativeDefault.space.PX_16 };
obj3.fontRowIcon = {
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
obj3.fontRowIconText = { fontFamily: PRIMARY_SEMIBOLD };
let obj9 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj3.badgeRow = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
let obj10 = { alignItems: "center", paddingTop: nativeDefault.space.PX_8 };
obj3.footer = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
let obj11 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
obj3.legal = { paddingHorizontal: nativeDefault.space.PX_24, paddingTop: nativeDefault.space.PX_16 };
let closure_22 = createStyles.createStyles(obj3);
let ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ScaledPreview(children) {
      const cResult = c.c(12);
      children = children.children;
      const tmp3 = closure_22();
      [tmp5, require] = noop.useState(null);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l(nativeEvent) {
          require(nativeEvent.nativeEvent.layout.height);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (null != tmp5) {
        const _Math = Math;
        let PX_12 = Math.max((274 - 0.8 * tmp5) / 2, 0);
      } else {
        PX_12 = nativeDefault.space.PX_12;
      }
      if (cResult[1] !== PX_12) {
        const obj2 = { marginTop: PX_12 };
        cResult[1] = PX_12;
        cResult[2] = obj2;
        let tmp8 = obj2;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === tmp3.scaledPreviewContainer) {
        if (cResult[4] === tmp8) {
          let tmp9 = cResult[5];
        }
        if (cResult[6] === children) {
          if (cResult[7] === tmp3.scaledPreview) {
            let tmp10 = cResult[8];
          }
          if (cResult[9] === tmp9) {
            if (cResult[10] === tmp10) {
              let tmp14 = cResult[11];
            }
            return tmp14;
          }
          const obj3 = { style: tmp9, children: tmp10 };
          const tmp17 = value3(timestampProducer, obj3);
          cResult[9] = tmp9;
          cResult[10] = tmp10;
          cResult[11] = tmp17;
          tmp14 = tmp17;
        }
        const obj4 = { style: tmp3.scaledPreview, onLayout: first, children };
        const tmp13 = value3(timestampProducer, obj4);
        cResult[6] = children;
        cResult[7] = tmp3.scaledPreview;
        cResult[8] = tmp13;
        tmp10 = tmp13;
      }
      const items = [tmp3.scaledPreviewContainer, tmp8];
      cResult[3] = tmp3.scaledPreviewContainer;
      cResult[4] = tmp8;
      cResult[5] = items;
      tmp9 = items;
      const tmp4 = _slicedToArray(noop.useState(null), 2);
    }
  : function ScaledPreview(children) {
      c0 = undefined;
      const tmp = closure_22();
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
      obj = {
        style: null,
        children: value3(timestampProducer, {
          style: tmp.scaledPreview,
          onLayout: callback,
          children: children.children,
        }),
      };
      const items = [tmp.scaledPreviewContainer, { marginTop: PX_12 }];
      obj.style = items;
      return value3(timestampProducer, obj);
    };
ReactCompilerGating = fn(558);
ReactCompilerGating.isReactCompilerEnabled();
function usePerkSelectable(arg0) {}
ReactCompilerGating = fn(558);
let obj12 = { paddingHorizontal: nativeDefault.space.PX_24, paddingTop: nativeDefault.space.PX_16 };
size = fn(2);
let result1 = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function HexagonCampaignSheet() {
      const cResult = stateFromStores(analyticsLocations[19]).c(117);
      closure_22();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function s() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      obj = stateFromStores(analyticsLocations[19]);
      stateFromStores = stateFromStores(analyticsLocations[21]).useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [SelectivelySyncedUserSettingsStore];
        class C {
          constructor() {
            return closure_7.shouldSync("appearance");
          }
        }
        cResult[2] = items1;
        cResult[3] = C;
        let tmp10 = C;
        let tmp9 = items1;
      } else {
        tmp9 = cResult[2];
        tmp10 = cResult[3];
      }
      const tmpResult = stateFromStores(analyticsLocations[21]);
      const stateFromStores1 = stateFromStores(analyticsLocations[21]).useStateFromStores(tmp9, tmp10);
      const tmpResult4 = stateFromStores(analyticsLocations[21]);
      analyticsLocations = stateFromStores1(analyticsLocations[22])(
        stateFromStores1(tmp2[23]).QUEST_HOME_PAGE,
      ).analyticsLocations;
      const tmp13 = stateFromStores1(analyticsLocations[22]);
      const currentAppIcon = stateFromStores(analyticsLocations[24]).useCurrentAppIcon();
      if (typeof usePerkSelectable === "function") {
        tmp(tmp2[20]);
        class C {
          constructor() {
            return closure_7.shouldSync("appearance");
          }
        }
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      const tmpResult5 = stateFromStores(analyticsLocations[24]);
    }
  : function HexagonCampaignSheet() {
      closure_13 = async function _handleSave2() {
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
            return { value: "IconComponent", done: "+352" };
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
                closure_128_0 = undefined;
                if (null != stateFromStores) {
                  if (!ref.current) {
                    ref.current = true;
                    SelectivelySyncedUserSettingsStore(true);
                    closure_128_0 = false;
                    dependencyMap = 1;
                    const obj7 = {
                      selection,
                      displayNameStyles,
                      premiumType: tmp65.premiumType,
                      isThemeSynced,
                      analyticsLocations,
                    };
                    c3 = 2;
                    c4 = 1;
                    const obj9 = { value: stateFromStores(16378).applyHexagonCampaignPerks(obj7), done: false };
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
                const intl = stateFromStores(1128).intl;
                obj11.text = intl.string(stateFromStores(1128).t.F8FvUy);
                tmp3(5663).open("HEXAGON_CAMPAIGN_APPLY_ERROR", obj11);
                const obj2 = tmp3(5663);
              }
            }
            const obj12 = { perks: null, content: null, sourceQuestContent: null };
            const _Object = Object;
            const values = Object.values(result1);
            obj12.perks = values.filter((item) => closure_1_5[item]);
            obj12.content = stateFromStores(6713).QuestContent.AD_PERK_MODAL;
            obj12.sourceQuestContent = stateFromStores(6713).QuestContent.QUEST_HOME_MOBILE;
            const result = stateFromStores(15856).trackHexagonCampaignPerkAction(obj12);
            obj4 = stateFromStores(15856);
            tmp3(5210).hideActionSheet(stateFromStores(16376).HEXAGON_CAMPAIGN_SHEET_KEY);
            const _Object2 = Object;
            const values2 = Object.values(closure_129_5);
            const _Boolean = Boolean;
            if (values2.some(Boolean)) {
              const obj13 = { text: null, variant: "success" };
              const intl2 = stateFromStores(1128).intl;
              obj13.text = intl2.string(tmp3(4247).fX2UkH);
              tmp3(5663).open("HEXAGON_CAMPAIGN_THEME_EQUIPPED", obj13);
              const obj8 = tmp3(5663);
            }
            const obj6 = tmp3(5210);
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
      const tmp = closure_22();
      obj = stateFromStores(analyticsLocations[21]);
      const items = [currentUser];
      stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      const items1 = [closure_7];
      importDefault = stateFromStores(analyticsLocations[21]).useStateFromStores(items1, () =>
        closure_7.shouldSync("appearance"),
      );
      let obj2 = stateFromStores(analyticsLocations[21]);
      analyticsLocations = require("useAnalyticsLocations")(
        require("AnalyticsLocation").QUEST_HOME_PAGE,
      ).analyticsLocations;
      const tmp6 = require("useAnalyticsLocations");
      const currentAppIcon = stateFromStores(analyticsLocations[24]).useCurrentAppIcon();
      if (typeof usePerkSelectable === "function") {
        let obj4 = {};
        obj4[tmp9] = tmp2(tmp3[20]).useHexagonCampaignPerkAvailability(tmp11, HexagonCampaignSheet) === memo.SELECTABLE;
        if (typeof usePerkSelectable === "function") {
          obj4[tmp14] =
            tmp2(tmp3[20]).useHexagonCampaignPerkAvailability(tmp15, HexagonCampaignSheet) === tmp13.SELECTABLE;
          if (typeof usePerkSelectable === "function") {
            obj4[tmp16] =
              tmp2(tmp3[20]).useHexagonCampaignPerkAvailability(tmp17, HexagonCampaignSheet) === tmp13.SELECTABLE;
            const tmp2Result8 = tmp2(tmp3[20]);
            const items2 = [HexagonCampaignPersistedStore];
            const stateFromStores1 = tmp2(tmp3[21]).useStateFromStores(
              items2,
              () => HexagonCampaignPersistedStore.hasAppliedPerk,
            );
            const tmp2Result9 = tmp2(tmp3[21]);
            const items3 = [HexagonCampaignPersistedStore];
            const stateFromStores2 = tmp2(tmp3[21]).useStateFromStores(
              items3,
              () => HexagonCampaignPersistedStore.previousPerkValues,
            );
            const tmp2Result10 = tmp2(tmp3[21]);
            let displayNameStyles;
            if (stateFromStores != null) {
              displayNameStyles = stateFromStores.displayNameStyles;
            }
            let result = tmp2(tmp3[25]).hasHexagonCampaignDisplayNameFont(displayNameStyles);
            const tmp2Result11 = tmp2(tmp3[25]);
            const tmp25 = isHexagonCampaignAppIcon(currentAppIcon);
            [tmp28, _slicedToArray] = obj5.useState({});
            obj5 = {};
            let merged = Object.assign(obj4);
            let merged1 = Object.assign(tmp28);
            [disabled, closure_7] = obj5.useState(false);
            currentUser = obj5.useRef(false);
            const tmp27 = _slicedToArray(obj5.useState({}), 2);
            [tmp38, HexagonCampaignPersistedStore] = obj5.useState(0);
            const _Math = Math;
            const sum = Math.max(tmp5(tmp3[26])().bottom, closure_13) + 4;
            let displayNameStyles1;
            if (stateFromStores != null) {
              displayNameStyles1 = stateFromStores.displayNameStyles;
            }
            if (displayNameStyles1 == null) {
              displayNameStyles1 = obj;
            }
            const tmp37 = _slicedToArray(obj5.useState(0), 2);
            const result1 = tmp5(tmp3[27]).canUsePremiumProfileCustomization(stateFromStores);
            let tmp44 = displayNameStyles1;
            if (result) {
              let displayNameStyles2;
              if (stateFromStores != null) {
                displayNameStyles2 = stateFromStores.displayNameStyles;
              }
              let obj6 = {
                currentDisplayNameStyles: displayNameStyles2,
                previousDisplayNameStyles: stateFromStores2.displayNameStyles,
                canUsePremiumProfileCustomization: result1,
              };
              let hexagonCampaignRestoredDisplayNameStyles = tmp2(tmp3[25]).getHexagonCampaignRestoredDisplayNameStyles(
                obj6,
              );
              if (hexagonCampaignRestoredDisplayNameStyles == null) {
                hexagonCampaignRestoredDisplayNameStyles = obj;
              }
              tmp44 = hexagonCampaignRestoredDisplayNameStyles;
              const tmp2Result12 = tmp2(tmp3[25]);
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
            if (obj5[tmp8.DISPLAY_NAME_STYLE]) {
              tmp44 = memo;
            }
            let HEXAGON = currentAppIcon;
            if (tmp25) {
              let DEFAULT = stateFromStores2.appIconId;
              if (DEFAULT == null) {
                DEFAULT = tmp2(tmp3[28]).FreemiumAppIconIds.DEFAULT;
              }
              HEXAGON = DEFAULT;
            }
            if (obj5[tmp8.APP_ICON]) {
              HEXAGON = tmp2(tmp3[28]).LimitedTimeAppIconIds.HEXAGON;
            }
            const effect = obj11.useEffect(() => {
              obj = stateFromStores(analyticsLocations[29]);
              const result = obj.trackHexagonCampaignContentViewed({
                content: stateFromStores(analyticsLocations[30]).QuestContent.AD_PERK_MODAL,
                sourceQuestContent: stateFromStores(analyticsLocations[30]).QuestContent.QUEST_HOME_MOBILE,
              });
            }, []);
            if (null == stateFromStores) {
              return null;
            } else {
              let obj7 = { perk: tmp8.CLIENT_THEME, label: null, icon: null };
              let intl = tmp2(tmp3[33]).intl;
              obj7.label = intl.string(tmp5(tmp3[36]).TTUKuI);
              let obj8 = { style: tmp.rowIcon, children: null };
              let obj9 = { gradient: HEXAGON_GRADIENT_PRESET, absolute: true };
              obj8.children = closure_16(tmp2(tmp3[37]).Gradient, obj9);
              obj7.icon = closure_16(disabled, obj8);
              const items5 = [obj7, ,];
              const obj10 = { perk: tmp8.DISPLAY_NAME_STYLE, label: null, icon: null };
              let intl2 = tmp2(tmp3[33]).intl;
              obj10.label = intl2.string(tmp5(tmp3[36]).fobter);
              let obj12 = { style: null, children: null };
              const items6 = [,];
              ({ rowIcon: arr11[0], fontRowIcon: arr11[1] } = tmp);
              obj12.style = items6;
              let obj13 = {
                variant: "text-sm/semibold",
                color: "text-overlay-light",
                style: tmp.fontRowIconText,
                children: "Gg",
              };
              obj12.children = closure_16(tmp2(tmp3[38]).Text, obj13);
              obj10.icon = closure_16(disabled, obj12);
              items5[1] = obj10;
              const obj14 = { perk: tmp8.APP_ICON, label: null, icon: null };
              const intl3 = tmp2(tmp3[33]).intl;
              obj14.label = intl3.string(tmp5(tmp3[36]).DTv8Yq);
              const obj15 = { id: tmp2(tmp3[28]).LimitedTimeAppIconIds.HEXAGON, size: 32, style: tmp.rowIcon };
              obj14.icon = closure_16(tmp5(tmp3[39]), obj15);
              items5[2] = obj14;
              const obj16 = { header: null, footer: null, startExpanded: true, children: null };
              const obj17 = { children: null };
              const obj18 = { title: null };
              const intl4 = tmp2(tmp3[33]).intl;
              obj18.title = intl4.string(tmp5(tmp3[36]).rZmLDm);
              const items7 = [closure_16(tmp2(tmp3[40]).BottomSheetTitleHeader, obj18)];
              const obj19 = { style: tmp.badgeRow, children: closure_16(tmp5(tmp3[41]), {}) };
              items7[1] = closure_16(disabled, obj19);
              obj17.children = items7;
              obj16.header = closure_17(disabled, obj17);
              const obj20 = { style: null, onLayout: null, children: null };
              const items8 = [tmp.footer];
              const obj21 = { paddingBottom: sum };
              items8[1] = obj21;
              obj20.style = items8;
              obj20.onLayout = tmp49;
              const intl5 = tmp2(tmp3[33]).intl;
              const t = tmp2(tmp3[33]).t;
              const obj22 = {
                size: "lg",
                grow: true,
                text: intl5.string(_slicedToArray(obj5.useState(stateFromStores1), 1)[0] ? t["R3BPH+"] : t["1Qm822"]),
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
                disabled,
              };
              obj20.children = closure_16(tmp2(tmp3[42]).Button, obj22);
              obj16.footer = closure_16(disabled, obj20);
              const obj23 = { style: null, children: null };
              const obj24 = { paddingBottom: null };
              const _Math2 = Math;
              obj24.paddingBottom = Math.max(tmp38 - sum, 0);
              obj23.style = obj24;
              const obj26 = { style: tmp.content, children: null };
              const obj27 = { style: tmp.card, children: null };
              let tmp59Result = obj5[tmp8.CLIENT_THEME];
              if (tmp59Result) {
                const obj28 = { children: null };
                const obj29 = { gradient: HEXAGON_GRADIENT_PRESET, absolute: true, angleOverride };
                const items9 = [closure_16(tmp2(tmp3[37]).Gradient, obj29)];
                const obj30 = { style: tmp.cardShade };
                items9[1] = closure_16(tmp56, obj30);
                obj28.children = items9;
                tmp59Result = closure_17(closure_18, obj28);
              }
              const items10 = [tmp59Result];
              const obj31 = { style: tmp.previewArea, children: null };
              const obj32 = {
                user: stateFromStores,
                displayName: null,
                selectedFontId: null,
                selectedEffectId: null,
                selectedColors: null,
                appIconId: null,
                appIconScale: 0.8125,
                hideNameplate: true,
                hideBadges: true,
                hidePronouns: true,
                hideGuildTag: true,
                tilted: true,
              };
              let username = stateFromStores.globalName;
              const tmp5Result3 = tmp5(tmp3[39]);
              if (username == null) {
                username = stateFromStores.username;
              }
              const obj33 = { children: null };
              obj32.displayName = username;
              ({
                fontId: obj25.selectedFontId,
                effectId: obj25.selectedEffectId,
                colors: obj25.selectedColors,
              } = tmp44);
              obj32.appIconId = HEXAGON;
              obj33.children = closure_16(tmp5(tmp3[43]), obj32);
              obj31.children = closure_16(closure_23, obj33);
              items10[1] = closure_16(disabled, obj31);
              obj27.children = items10;
              const items11 = [closure_17(disabled, obj27)];
              const obj34 = { style: tmp.rows, children: null };
              const obj35 = {
                hasIcons: true,
                children: items5.map((perk) => {
                  perk = perk.perk;
                  ({ label, icon } = perk);
                  obj = { icon, label, value: obj5[perk], disabled: null, onValueChange: null };
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
                  return closure_1_16(stateFromStores(analyticsLocations[45]).TableSwitchRow, obj, perk);
                }),
              };
              obj34.children = closure_16(tmp2(tmp3[44]).TableRowGroup, obj35);
              items11[1] = closure_16(disabled, obj34);
              obj26.children = items11;
              const items12 = [closure_17(disabled, obj26)];
              const obj36 = { style: tmp.legal, children: closure_16(tmp5(tmp3[46]), { showLogo: true }) };
              items12[1] = closure_16(disabled, obj36);
              obj23.children = items12;
              obj16.children = closure_17(disabled, obj23);
              return closure_16(tmp2(tmp3[47]).BottomSheet, obj16);
            }
            const tmp5Result = tmp5(tmp3[27]);
          } else {
            throw new TypeError("Trying to call a non-function");
          }
          const tmp2Result7 = tmp2(tmp3[20]);
        } else {
          throw new TypeError("Trying to call a non-function");
        }
        const tmp2Result = tmp2(tmp3[20]);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
      let obj3 = stateFromStores(analyticsLocations[24]);
    };
