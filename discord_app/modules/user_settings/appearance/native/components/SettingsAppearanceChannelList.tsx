// === Module 15499: SettingsAppearanceChannelList ===

// Module 15499 (SettingsAppearanceChannelList)
import nativeDefault from "native" /* 587 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4811 */;
import SettingsAppearanceChannelRowItemDefault from "SettingsAppearanceChannelRowItem" /* 15500 */;
import SettingsAppearanceMessagesHeaderItemDefault from "SettingsAppearanceMessagesHeaderItem" /* 15501 */;
import SettingsAppearanceActivityCardsItemDefault from "SettingsAppearanceActivityCardsItem" /* 15502 */;
import SettingsAppearanceGradientBackgroundDefault from "SettingsAppearanceGradientBackground" /* 15508 */;
import SettingsAppearanceChannelListPreviewNitroUpsellDefault from "SettingsAppearanceChannelListPreviewNitroUpsell" /* 15511 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = { channelPreviewGradient: null, channelPreviewCardContainer: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.borderRadius = nativeDefault.radii.xl;
obj3.overflow = "hidden";
obj2.channelPreviewGradient = obj3;
let obj4 = { flex: 1, marginTop: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xl, width: "100%", borderWidth: 1 };
let merged1 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj4.shadowColor = "#000000";
obj2.channelPreviewCardContainer = obj4;
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelListPreview(arg0) {
  const cResult = animatedStyles(576).c(25);
  ({ themes, themeIndex, animatedStyles } = arg0);
  ({ data, useGradientBackground, isNitroLocked } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== animatedStyles) {
    const fn = function n(item) {
      item = item.item;
      const kind = item.kind;
      if ("channel-row" === kind) {
        const obj2 = {};
        const merged = Object.assign(item);
        obj2.animatedStyles = animatedStyles;
        return hasOwnProperty(SettingsAppearanceChannelRowItemDefault, obj2);
      } else if ("messages-header" === kind) {
        const obj3 = {};
        const merged1 = Object.assign(item);
        obj3.animatedStyles = animatedStyles;
        return hasOwnProperty(SettingsAppearanceMessagesHeaderItemDefault, obj3);
      } else if ("activity-cards" === kind) {
        const obj = {};
        const merged2 = Object.assign(item);
        obj.animatedStyles = animatedStyles;
        return hasOwnProperty(SettingsAppearanceActivityCardsItemDefault, obj);
      } else {
        return null;
      }
    };
    cResult[0] = animatedStyles;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  let bgSurfaceHigh = !useGradientBackground;
  if (!useGradientBackground) {
    bgSurfaceHigh = animatedStyles.bgSurfaceHigh;
  }
  if (cResult[2] === animatedStyles.borderNormal) {
    if (cResult[3] === tmp4.channelPreviewCardContainer) {
      if (cResult[4] === bgSurfaceHigh) {
        let tmp6 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = animatedStyles(1126).intl;
        const stringResult = intl.string(animatedStyles(1126).t.iGxm3x);
        cResult[6] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[6];
      }
      if (cResult[7] === tmp4.channelPreviewGradient) {
        if (cResult[8] === themeIndex) {
          if (cResult[9] === themes) {
            if (cResult[10] === useGradientBackground) {
              let tmp10 = cResult[11];
            }
            const _Symbol2 = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              let obj2 = { paddingVertical: nativeDefault.space.PX_16 };
              cResult[12] = obj2;
              let tmp16 = obj2;
            } else {
              tmp16 = cResult[12];
            }
            const _Symbol3 = Symbol;
            if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
              const fn2 = function f(id) {
                return id.id;
              };
              cResult[13] = fn2;
              let tmp18 = fn2;
            } else {
              tmp18 = cResult[13];
            }
            if (cResult[14] === data) {
              if (cResult[15] === tmp5) {
                let tmp19 = cResult[16];
              }
              if (cResult[17] === isNitroLocked) {
                if (cResult[18] === tmp22) {
                  let tmp23 = cResult[19];
                }
                if (cResult[20] === tmp23) {
                  if (cResult[21] === tmp6) {
                    if (cResult[22] === tmp10) {
                      if (cResult[23] === tmp19) {
                        let tmp27 = cResult[24];
                      }
                      return tmp27;
                    }
                  }
                }
                let obj3 = { style: tmp6, accessible: true, accessibilityRole: "image", accessibilityLabel: tmp8, children: null };
                const items = [tmp10, tmp19, tmp23];
                obj3.children = items;
                const tmp30 = closure_6(ReanimatedRexportDefault.View, obj3);
                cResult[20] = tmp23;
                cResult[21] = tmp6;
                cResult[22] = tmp10;
                cResult[23] = tmp19;
                cResult[24] = tmp30;
                tmp27 = tmp30;
              }
              const obj4 = { visible: isNitroLocked, theme: themes[themeIndex] };
              const tmp26 = closure_5(SettingsAppearanceChannelListPreviewNitroUpsellDefault, obj4);
              cResult[17] = isNitroLocked;
              cResult[18] = themes[themeIndex];
              cResult[19] = tmp26;
              tmp23 = tmp26;
            }
            const obj5 = { contentContainerStyle: tmp16, data, renderItem: tmp5, keyExtractor: tmp18, showsVerticalScrollIndicator: false, importantForAccessibility: "no-hide-descendants" };
            const tmp21 = closure_5(animatedStyles(8608).FlashList, obj5);
            cResult[14] = data;
            cResult[15] = tmp5;
            cResult[16] = tmp21;
            tmp19 = tmp21;
          }
        }
      }
      let tmp11 = null;
      if (useGradientBackground) {
        const obj6 = { style: tmp4.channelPreviewGradient, children: null };
        const obj7 = { themes, themeIndex, isDimmed: false, backgroundToken: nativeDefault.colors.BACKGROUND_BASE_LOW };
        obj6.children = closure_5(SettingsAppearanceGradientBackgroundDefault, obj7);
        tmp11 = closure_5(closure_4, obj6);
      }
      cResult[7] = tmp4.channelPreviewGradient;
      cResult[8] = themeIndex;
      cResult[9] = themes;
      cResult[10] = useGradientBackground;
      cResult[11] = tmp11;
      tmp10 = tmp11;
    }
  }
  const items1 = [tmp4.channelPreviewCardContainer, animatedStyles.borderNormal, bgSurfaceHigh];
  cResult[2] = animatedStyles.borderNormal;
  cResult[3] = tmp4.channelPreviewCardContainer;
  cResult[4] = bgSurfaceHigh;
  cResult[5] = items1;
  tmp6 = items1;
  let obj = animatedStyles(576);
}) : (function ChannelListPreview(useGradientBackground) {
  ({ themes, themeIndex, animatedStyles } = useGradientBackground);
  useGradientBackground = useGradientBackground.useGradientBackground;
  ({ data, isNitroLocked } = useGradientBackground);
  const tmp = closure_7();
  const items = [animatedStyles];
  const callback = noop.useCallback((item) => {
    item = item.item;
    const kind = item.kind;
    if ("channel-row" === kind) {
      const obj2 = {};
      const merged = Object.assign(item);
      obj2.animatedStyles = animatedStyles;
      return hasOwnProperty(SettingsAppearanceChannelRowItemDefault, obj2);
    } else if ("messages-header" === kind) {
      const obj3 = {};
      const merged1 = Object.assign(item);
      obj3.animatedStyles = animatedStyles;
      return hasOwnProperty(SettingsAppearanceMessagesHeaderItemDefault, obj3);
    } else if ("activity-cards" === kind) {
      const obj = {};
      const merged2 = Object.assign(item);
      obj.animatedStyles = animatedStyles;
      return hasOwnProperty(SettingsAppearanceActivityCardsItemDefault, obj);
    } else {
      return null;
    }
  }, items);
  const items1 = [tmp.channelPreviewCardContainer, animatedStyles.borderNormal, ];
  let bgSurfaceHigh = !useGradientBackground;
  if (!useGradientBackground) {
    bgSurfaceHigh = animatedStyles.bgSurfaceHigh;
  }
  let obj = { style: items1, accessible: true, accessibilityRole: "image", accessibilityLabel: null, children: null };
  items1[2] = bgSurfaceHigh;
  const intl = animatedStyles(1126).intl;
  obj.accessibilityLabel = intl.string(animatedStyles(1126).t.iGxm3x);
  let tmp7 = null;
  if (useGradientBackground) {
    let obj2 = { style: tmp.channelPreviewGradient, children: null };
    let obj3 = { themes, themeIndex, isDimmed: false, backgroundToken: nativeDefault.colors.BACKGROUND_BASE_LOW };
    obj2.children = closure_5(SettingsAppearanceGradientBackgroundDefault, obj3);
    tmp7 = closure_5(closure_4, obj2);
    const tmp4Result = SettingsAppearanceGradientBackgroundDefault;
  }
  const items2 = [tmp7, , ];
  const obj4 = {
    contentContainerStyle: { paddingVertical: nativeDefault.space.PX_16 },
    data,
    renderItem: callback,
    keyExtractor(id) {
      return id.id;
    },
    showsVerticalScrollIndicator: false,
    importantForAccessibility: "no-hide-descendants"
  };
  items2[1] = closure_5(animatedStyles(8608).FlashList, obj4);
  items2[2] = closure_5(SettingsAppearanceChannelListPreviewNitroUpsellDefault, { visible: isNitroLocked, theme: themes[themeIndex] });
  obj.children = items2;
  return closure_6(ReanimatedRexportDefault.View, obj);
});