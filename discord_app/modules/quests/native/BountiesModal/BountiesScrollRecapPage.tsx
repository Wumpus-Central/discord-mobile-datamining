// discord_app/modules/quests/native/BountiesModal/BountiesScrollRecapPage.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import common_Video from "../../../../components_native/common/Video.tsx";
import APNGPlayer from "../../../image/native/APNGPlayer.android.tsx";
import OrbsIcon from "../../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import _modDef15050 from "../../../../../discord_assets/assets/quests/bounties/_3d_orbs.png.js";
import _modDef15051 from "../../../../../discord_assets/assets/quests/bounties/_3d_orbs.mov.js";
import _modDef15052 from "../../../../../discord_assets/assets/quests/bounties/starfield_bg.mp4.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
function BountiesRecapOrbsBackground(arg0) {
  ({ style, reducedMotion } = arg0);
  let obj = PlatformUtils;
  if (obj.isAndroid()) {
    obj = {
      style,
      needsOffscreenAlphaCompositing: true,
      renderToHardwareTextureAndroid: true,
      pointerEvents: "none",
      children: null,
    };
    obj = { url: _modDef15050, style: React3.absoluteFillObject, autoplay: !reducedMotion };
    obj.children = timestampProducer(APNGPlayer.APNGPlayer, obj);
    let tmp3Result = timestampProducer(React4, obj);
  } else {
    const obj1 = {
      source: null,
      style: null,
      resizeMode: "contain",
      paused: null,
      disableFocus: true,
      preventsDisplaySleepDuringVideoPlayback: false,
      importantForAccessibility: "no-hide-descendants",
    };
    const obj2 = { uri: _modDef15051 };
    obj1.source = obj2;
    obj1.style = style;
    obj1.paused = reducedMotion;
    tmp3Result = timestampProducer(common_Video.VideoComponent, obj1);
  }
  return tmp3Result;
}
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const lg = nativeDefault.radii.lg;
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles(() => {
  let obj = {
    root: null,
    content: null,
    centeredCopy: null,
    orbsBackground: null,
    headerLabel: null,
    titleRow: null,
    actions: null,
    orbAmount: null,
  };
  obj = { overflow: "hidden", borderRadius: lg, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
  obj.root = obj;
  obj = { flex: 1, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center", alignItems: "center" };
  obj.content = obj;
  obj.centeredCopy = { alignItems: "center", width: "100%" };
  obj.orbsBackground = { position: "absolute", top: 0, left: 0, right: 0, height: "40%", zIndex: 1 };
  obj.headerLabel = { paddingBottom: nativeDefault.space.PX_4, textTransform: "uppercase" };
  const obj1 = { paddingBottom: nativeDefault.space.PX_4, textTransform: "uppercase" };
  obj.titleRow = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: nativeDefault.space.PX_24,
    gap: nativeDefault.space.PX_8,
  };
  const rect = {
    position: "absolute",
    left: nativeDefault.space.PX_24,
    right: nativeDefault.space.PX_24,
    gap: nativeDefault.space.PX_12,
  };
  obj.actions = rect;
  const obj2 = {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: nativeDefault.space.PX_24,
    gap: nativeDefault.space.PX_8,
  };
  let num = 0;
  if (obj7.isIOS()) {
    num = 6;
  }
  obj.orbAmount = { marginTop: num, lineHeight: 46 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollRecapPage.tsx");

export const BountiesScrollRecapPage = function BountiesScrollRecapPage(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  ({ onClose, style } = orbAmount);
  const tmp = closure_9();
  let obj = initialize;
  const items = [AccessibilityStore];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { style: null, pointerEvents: "box-none", children: null };
  const items1 = [tmp.root, style];
  obj.style = items1;
  obj = { style: React3.absoluteFillObject, pointerEvents: "none", children: null };
  const obj1 = {
    source: null,
    style: null,
    resizeMode: "cover",
    paused: null,
    disableFocus: true,
    preventsDisplaySleepDuringVideoPlayback: false,
    importantForAccessibility: "no-hide-descendants",
  };
  const tmp2 = useSafeAreaInsetsDefault();
  obj1.source = { uri: _modDef15052 };
  obj1.style = React3.absoluteFillObject;
  obj1.paused = stateFromStores;
  const items2 = [
    timestampProducer(common_Video.VideoComponent, obj1),
    timestampProducer(BountiesRecapOrbsBackground, { style: tmp.orbsBackground, reducedMotion: stateFromStores }),
  ];
  obj.children = items2;
  const items3 = [React5(React4, obj)];
  const obj4 = { style: tmp.content, pointerEvents: "box-none", children: null };
  const obj5 = { style: tmp.centeredCopy, pointerEvents: "none", children: null };
  const obj6 = { variant: "text-xs/bold", color: "text-brand", style: tmp.headerLabel, children: null };
  const intl = util.intl;
  obj6.children = intl.string(util.t.d6Rrn6);
  const items4 = [timestampProducer(Text_Text.Text, obj6), ,];
  const obj7 = { accessible: true, accessibilityRole: "text", accessibilityLabel: "+" + orbAmount, children: null };
  const obj8 = { style: tmp.titleRow, children: null };
  const items5 = [timestampProducer(OrbsIcon.OrbsIcon, { size: "lg", color: "icon-strong", accessible: false })];
  const obj2 = { uri: _modDef15052 };
  const obj3 = { style: tmp.orbsBackground, reducedMotion: stateFromStores };
  items5[1] = timestampProducer(Text_Text.Text, {
    variant: "display-lg",
    color: "text-strong",
    accessible: false,
    style: tmp.orbAmount,
    children: "+" + orbAmount,
  });
  obj8.children = items5;
  obj7.children = React5(React4, obj8);
  items4[1] = timestampProducer(React4, obj7);
  const obj10 = { variant: "text-md/medium", color: "text-muted", style: { textAlign: "center" }, children: null };
  const intl2 = util.intl;
  obj10.children = intl2.string(util.t.x0Ffz3);
  items4[2] = timestampProducer(Text_Text.Text, obj10);
  obj5.children = items4;
  const items6 = [React5(React4, obj5)];
  const obj11 = { style: null, children: null };
  const items7 = [tmp.actions];
  const obj9 = {
    variant: "display-lg",
    color: "text-strong",
    accessible: false,
    style: tmp.orbAmount,
    children: "+" + orbAmount,
  };
  items7[1] = { bottom: tmp2.bottom + nativeDefault.space.PX_8 };
  obj11.style = items7;
  const obj13 = { grow: true, variant: "primary", text: null, size: "lg", onPress: null };
  const intl3 = util.intl;
  obj13.text = intl3.string(util.t.i4jeWR);
  obj13.onPress = onClose;
  obj11.children = timestampProducer(components_Button_Button.Button, obj13);
  items6[1] = timestampProducer(React4, obj11);
  obj4.children = items6;
  items3[1] = React5(React4, obj4);
  obj.children = items3;
  return React5(React4, obj);
};
