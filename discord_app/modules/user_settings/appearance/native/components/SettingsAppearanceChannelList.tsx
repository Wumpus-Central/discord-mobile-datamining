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
const createStyles = fn(4829);
let obj2 = { channelPreviewGradient: null, channelPreviewCardContainer: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.borderRadius = nativeDefault.radii.xl;
obj3.overflow = "hidden";
obj2.channelPreviewGradient = obj3;
let obj4 = {
  flex: 1,
  marginTop: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.xl,
  width: "100%",
  borderWidth: 1,
};
let merged1 = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj4.shadowColor = "#000000";
obj2.channelPreviewCardContainer = obj4;
let closure_7 = createStyles.createStyles(obj2);
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
  const items1 = [tmp.channelPreviewCardContainer, animatedStyles.borderNormal];
  let bgSurfaceHigh = !useGradientBackground;
  if (!useGradientBackground) {
    bgSurfaceHigh = animatedStyles.bgSurfaceHigh;
  }
  let obj = { style: items1, accessible: true, accessibilityRole: "image", accessibilityLabel: null, children: null };
  items1[2] = bgSurfaceHigh;
  const intl = animatedStyles(1115).intl;
  obj.accessibilityLabel = intl.string(animatedStyles(1115).t.iGxm3x);
  let tmp7 = null;
  if (useGradientBackground) {
    let obj2 = { style: tmp.channelPreviewGradient, children: null };
    let obj3 = { themes, themeIndex, isDimmed: false, backgroundToken: nativeDefault.colors.BACKGROUND_BASE_LOW };
    obj2.children = closure_5(SettingsAppearanceGradientBackgroundDefault, obj3);
    tmp7 = closure_5(closure_4, obj2);
    const tmp4Result = SettingsAppearanceGradientBackgroundDefault;
  }
  const items2 = [tmp7, ,];
  const obj4 = {
    contentContainerStyle: { paddingVertical: nativeDefault.space.PX_16 },
    data,
    renderItem: callback,
    keyExtractor(id) {
      return id.id;
    },
    showsVerticalScrollIndicator: false,
    importantForAccessibility: "no-hide-descendants",
  };
  items2[1] = closure_5(animatedStyles(8171).FlashList, obj4);
  items2[2] = closure_5(SettingsAppearanceChannelListPreviewNitroUpsellDefault, {
    visible: isNitroLocked,
    theme: themes[themeIndex],
  });
  obj.children = items2;
  return closure_6(ReanimatedRexportDefault.View, obj);
}
