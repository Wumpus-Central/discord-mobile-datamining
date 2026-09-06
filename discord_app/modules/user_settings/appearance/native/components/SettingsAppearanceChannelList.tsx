// discord_app/modules/user_settings/appearance/native/components/SettingsAppearanceChannelList.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../../../reanimated/ReanimatedRexport.tsx";
import SettingsAppearanceChannelRowItemDefault from "SettingsAppearanceChannelRowItem.tsx";
import SettingsAppearanceMessagesHeaderItemDefault from "SettingsAppearanceMessagesHeaderItem.tsx";
import SettingsAppearanceActivityCardsItemDefault from "SettingsAppearanceActivityCardsItem.tsx";
import SettingsAppearanceGradientBackgroundDefault from "SettingsAppearanceGradientBackground.tsx";
import SettingsAppearanceChannelListPreviewNitroUpsellDefault from "SettingsAppearanceChannelListPreviewNitroUpsell.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { channelPreviewGradient: null, channelPreviewCardContainer: null };
createStyles = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
createStyles.borderRadius = nativeDefault.radii.xl;
createStyles.overflow = "hidden";
createStyles.channelPreviewGradient = createStyles;
let obj1 = {
  flex: 1,
  marginTop: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.xl,
  width: "100%",
  borderWidth: 1,
};
let merged1 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj1.shadowColor = "#000000";
createStyles.channelPreviewCardContainer = obj1;
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/appearance/native/components/SettingsAppearanceChannelList.tsx",
);

export default function ChannelListPreview(useGradientBackground) {
  ({ themes, themeIndex, animatedStyles } = useGradientBackground);
  useGradientBackground = useGradientBackground.useGradientBackground;
  ({ data, isNitroLocked } = useGradientBackground);
  const tmp = closure_7();
  const items = [animatedStyles];
  const callback = noop.useCallback((item) => {
    item = item.item;
    const kind = item.kind;
    if ("channel-row" === kind) {
      let obj = {};
      const merged = Object.assign(item);
      obj.animatedStyles = animatedStyles;
      return hasOwnProperty(SettingsAppearanceChannelRowItemDefault, obj);
    } else if ("messages-header" === kind) {
      obj = {};
      const merged1 = Object.assign(item);
      obj.animatedStyles = animatedStyles;
      return hasOwnProperty(SettingsAppearanceMessagesHeaderItemDefault, obj);
    } else if ("activity-cards" === kind) {
      obj = {};
      const merged2 = Object.assign(item);
      obj.animatedStyles = animatedStyles;
      return hasOwnProperty(SettingsAppearanceActivityCardsItemDefault, obj);
    } else {
      return null;
    }
  }, items);
  const items1 = [tmp.channelPreviewCardContainer, animatedStyles.borderNormal];
  let bgSurfaceHigh = !useGradientBackground;
  if (!useGradientBackground) {
    bgSurfaceHigh = animatedStyles.bgSurfaceHigh;
  }
  let obj = { style: items1, accessible: true, accessibilityRole: "image", accessibilityLabel: null, children: null };
  items1[2] = bgSurfaceHigh;
  const intl = animatedStyles(1114).intl;
  obj.accessibilityLabel = intl.string(animatedStyles(1114).t.iGxm3x);
  let tmp7 = null;
  if (useGradientBackground) {
    obj = { style: tmp.channelPreviewGradient, children: null };
    obj = { themes, themeIndex, isDimmed: false, backgroundToken: nativeDefault.colors.BACKGROUND_BASE_LOW };
    obj.children = closure_5(SettingsAppearanceGradientBackgroundDefault, obj);
    tmp7 = closure_5(closure_4, obj);
    const tmp4Result = SettingsAppearanceGradientBackgroundDefault;
  }
  const items2 = [tmp7, ,];
  const obj1 = {
    contentContainerStyle: { paddingVertical: nativeDefault.space.PX_16 },
    data,
    renderItem: callback,
    keyExtractor(id) {
      return id.id;
    },
    showsVerticalScrollIndicator: false,
    importantForAccessibility: "no-hide-descendants",
  };
  items2[1] = closure_5(animatedStyles(8874).FlashList, obj1);
  items2[2] = closure_5(SettingsAppearanceChannelListPreviewNitroUpsellDefault, {
    visible: isNitroLocked,
    theme: themes[themeIndex],
  });
  obj.children = items2;
  return closure_6(ReanimatedRexportDefault.View, obj);
}
