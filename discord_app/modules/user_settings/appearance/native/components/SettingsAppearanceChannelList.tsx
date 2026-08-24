// === Module 14703: ChannelListPreview ===

// Module 14703 (ChannelListPreview)
import ThemesDefault from "Themes" /* 712 */;
import _modDef4119 from "module_4119" /* 4119 */;
import SettingsAppearanceChannelListPreviewNitroUpsellComponentDefault from "SettingsAppearanceChannelListPreviewNitroUpsellComponent" /* 14715 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { channelPreviewGradient: null, channelPreviewCardContainer: null };
createCacheKey = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.borderRadius = ThemesDefault.radii.xl;
createCacheKey.overflow = "hidden";
createCacheKey[0] = createCacheKey;
let obj1 = { flex: 1, marginTop: ThemesDefault.space.PX_8, borderRadius: ThemesDefault.radii.xl, width: "100%", borderWidth: 1 };
let merged1 = Object.assign(ThemesDefault.shadows.SHADOW_HIGH);
obj1.shadowColor = "#000000";
createCacheKey[1] = obj1;
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelList.tsx");

export default function ChannelListPreview(useGradientBackground) {
  ({ themes, themeIndex, animatedStyles } = useGradientBackground);
  useGradientBackground = useGradientBackground.useGradientBackground;
  ({ data, isNitroLocked } = useGradientBackground);
  const tmp = callback2();
  const items = [animatedStyles];
  const callback = React.useCallback((item) => {
    item = item.item;
    const kind = item.kind;
    if ("channel-row" === kind) {
      let obj = {};
      const merged = Object.assign(item);
      obj.animatedStyles = animatedStyles;
      return closure_1_5(closure_1_1(closure_1_2[5]), obj);
    } else if ("messages-header" === kind) {
      obj = {};
      const merged1 = Object.assign(item);
      obj.animatedStyles = animatedStyles;
      return closure_1_5(closure_1_1(closure_1_2[6]), obj);
    } else if ("activity-cards" === kind) {
      obj = {};
      const merged2 = Object.assign(item);
      obj.animatedStyles = animatedStyles;
      return closure_1_5(closure_1_1(closure_1_2[7]), obj);
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
  const intl = animatedStyles(1236).intl;
  obj[3] = intl.string(animatedStyles(1236).t.iGxm3x);
  let tmp7 = null;
  if (useGradientBackground) {
    obj = { style: null, children: null };
    obj[0] = tmp.channelPreviewGradient;
    obj = { themes: null, themeIndex: null, isDimmed: false, backgroundToken: null };
    obj[0] = themes;
    obj[1] = themeIndex;
    obj[3] = tmp4(712).colors.BACKGROUND_BASE_LOW;
    obj[1] = callback(tmp4(14712), obj);
    tmp7 = callback(closure_4, obj);
    const tmp4Result = tmp4(14712);
  }
  const items2 = [tmp7, , ];
  obj1 = {
    contentContainerStyle: { paddingVertical: ThemesDefault.space.PX_16 },
    data,
    renderItem: callback,
    keyExtractor(id) {
      return id.id;
    },
    showsVerticalScrollIndicator: false,
    importantForAccessibility: "no-hide-descendants"
  };
  items2[1] = callback(animatedStyles(8068).FlashList, obj1);
  items2[2] = callback(SettingsAppearanceChannelListPreviewNitroUpsellComponentDefault, { visible: isNitroLocked, theme: themes[themeIndex] });
  obj[4] = items2;
  return closure_6(_modDef4119.View, obj);
};