// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceChannelList.tsx
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { ReanimatedRexport } from "../../../../reanimated/ReanimatedRexport.tsx";
import { SettingsAppearanceChannelListPreviewNitroUpsellComponent } from "SettingsAppearanceChannelListPreviewNitroUpsell.tsx";

let StyleSheet;
let c4;
let c5;
let closure_6;
const require = arg1;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { channelPreviewGradient: null, channelPreviewCardContainer: null };
createCacheKey = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
createCacheKey.borderRadius = require("Themes").radii.xl;
createCacheKey.overflow = "hidden";
createCacheKey[0] = createCacheKey;
let obj1 = { flex: 1, marginTop: require("Themes").space.PX_8, borderRadius: require("Themes").radii.xl, width: "100%", borderWidth: 1 };
let merged1 = Object.assign(require("Themes").shadows.SHADOW_HIGH);
obj1.shadowColor = "#000000";
createCacheKey[1] = obj1;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelList.tsx");

export default function ChannelListPreview(useGradientBackground) {
  let animatedStyles;
  let data;
  let isNitroLocked;
  let themeIndex;
  let themes;
  ({ themes, themeIndex, animatedStyles } = useGradientBackground);
  useGradientBackground = useGradientBackground.useGradientBackground;
  ({ data, isNitroLocked } = useGradientBackground);
  const tmp = createCacheKey();
  const items = [animatedStyles];
  const callback = React.useCallback((item) => {
    item = item.item;
    const kind = item.kind;
    if ("channel-row" === kind) {
      let obj = {};
      const merged = Object.assign(item);
      obj.animatedStyles = animatedStyles;
      return outer1_5(outer1_1(outer1_2[5]), obj);
    } else if ("messages-header" === kind) {
      obj = {};
      const merged1 = Object.assign(item);
      obj.animatedStyles = animatedStyles;
      return outer1_5(outer1_1(outer1_2[6]), obj);
    } else if ("activity-cards" === kind) {
      obj = {};
      const merged2 = Object.assign(item);
      obj.animatedStyles = animatedStyles;
      return outer1_5(outer1_1(outer1_2[7]), obj);
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
    obj[1] = callback(tmp4(14434), obj);
    tmp7 = callback(closure_4, obj);
    const tmp4Result = tmp4(14434);
  }
  const items2 = [tmp7, , ];
  const obj1 = { contentContainerStyle: null, data: null, renderItem: null, keyExtractor: null, showsVerticalScrollIndicator: false, importantForAccessibility: "no-hide-descendants" };
  const obj2 = { paddingVertical: null };
  obj2[0] = Themes.space.PX_16;
  obj1[0] = obj2;
  obj1[1] = data;
  obj1[2] = callback;
  obj1[3] = function keyExtractor(id) {
    return id.id;
  };
  items2[1] = callback(animatedStyles(7666).FlashList, obj1);
  items2[2] = callback(SettingsAppearanceChannelListPreviewNitroUpsellComponent, { visible: isNitroLocked, theme: themes[themeIndex] });
  obj[4] = items2;
  return closure_6(ReanimatedRexport.View, obj);
};