// discord_app/modules/quests/native/AdvertiserCtaBanner.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _mod1655 from "../../../../_runtime/metro/01655__.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import ButtonHooks from "../../../design/components/Button/native/ButtonHooks.native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import BackgroundBlurView from "../../../design/components/experimental/BackgroundBlurView/native/BackgroundBlurView.native.tsx";
import AssetUtils from "../lib/AssetUtils.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../_runtime/metro/00019__.js";

const module_1655 = _mod1655;

require = fn;
let closure_3 = ["style"];
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6, Pressable } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8 } = jsxProd);
let closure_9 = module_1655.createAnimatedComponent(Pressable);
const createStyles = fn(5310);
let closure_10 = createStyles.createStyles(() => {
  const obj = {
    outerContainer: null,
    ctaPressable: null,
    cta: null,
    ctaLogoContainer: null,
    ctaLogo: null,
    ctaInfo: null,
  };
  const rect = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_16,
    alignItems: "center",
  };
  obj.outerContainer = rect;
  const obj2 = {};
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj2.alignSelf = "stretch";
  obj2.borderRadius = nativeDefault.radii.lg;
  obj.ctaPressable = obj2;
  obj.cta = {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: nativeDefault.space.PX_12,
    paddingRight: nativeDefault.space.PX_16,
    paddingVertical: nativeDefault.space.PX_12,
    gap: nativeDefault.space.PX_12,
    borderRadius: nativeDefault.radii.lg,
    overflow: "hidden",
  };
  const size = {
    width: 40,
    height: 40,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.md,
    overflow: "hidden",
  };
  obj.ctaLogoContainer = size;
  const merged1 = Object.assign(absoluteFillObject.absoluteFillObject);
  obj.ctaLogo = {};
  obj.ctaInfo = { flex: 1, justifyContent: "center" };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/AdvertiserCtaBanner.tsx");

export default function AdvertiserCtaBanner(ctaInfo) {
  ctaInfo = ctaInfo.ctaInfo;
  ({ style, onContainerPress, onButtonPress } = ctaInfo);
  const tmp = closure_10();
  let scaledImageUrl;
  if (null != ctaInfo.iconImageUri) {
    const size = { assetUrl: ctaInfo.iconImageUri, width: 40, height: 40 };
    scaledImageUrl = AssetUtils.getScaledImageUrl(size);
  }
  const sharedValue = _mod1655.useSharedValue(0);
  const buttonPressAnimationProps = ButtonHooks.useButtonPressAnimationProps(sharedValue);
  const obj2 = { style: null, children: null };
  items = [tmp.outerContainer, style];
  obj2.style = items;
  const obj5 = {};
  const merged = Object.assign(_objectWithoutProperties(buttonPressAnimationProps, closure_3));
  obj5.onPress = onContainerPress;
  obj5.accessibilityRole = "button";
  obj5.accessibilityLabel = ctaInfo.label;
  const items1 = [tmp.ctaPressable, buttonPressAnimationProps.style];
  obj5.style = items1;
  const obj6 = { blurTheme: "dark", style: tmp.cta, pressed: sharedValue, children: null };
  const obj7 = {
    style: tmp.ctaLogoContainer,
    children: metroImportDefault(FastImageDefault, {
      source: { uri: scaledImageUrl },
      style: tmp.ctaLogo,
      resizeMode: "cover",
    }),
  };
  const items2 = [metroImportDefault(timestampProducer, obj7), ,];
  const obj9 = {
    style: tmp.ctaInfo,
    children: metroImportDefault(Text_Text.Text, {
      lineClamp: 2,
      variant: "body-sm/semibold",
      color: "text-default",
      children: ctaInfo.label,
    }),
  };
  items2[1] = metroImportDefault(timestampProducer, obj9);
  const obj11 = {
    accessible: false,
    importantForAccessibility: "no-hide-descendants",
    children: metroImportDefault(components_Button_Button.Button, {
      variant: "primary-overlay",
      text: ctaInfo.buttonLabel,
      size: "sm",
      onPress: onButtonPress,
    }),
  };
  items2[2] = metroImportDefault(timestampProducer, obj11);
  obj6.children = items2;
  obj5.children = React5(BackgroundBlurView.BackgroundBlurView, obj6);
  obj2.children = metroImportDefault(closure_9, obj5);
  return metroImportDefault(module_1655.View, obj2);
}
