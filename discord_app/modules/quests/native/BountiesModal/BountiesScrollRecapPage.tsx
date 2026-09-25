// === Module 14560: BountiesScrollRecapPage ===

// Module 14560 (BountiesScrollRecapPage)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1612 */;
import Text_Text from "Text/Text" /* 4825 */;
import components_Button_Button from "components/Button/Button" /* 5274 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6395 */;
import common_Video from "common/Video" /* 7747 */;
import APNGPlayer from "APNGPlayer" /* 8263 */;
import OrbsIcon from "OrbsIcon" /* 8290 */;
import _modDef14561 from "module_14561" /* 14561 */;
import _modDef14562 from "module_14562" /* 14562 */;
import _modDef14563 from "module_14563" /* 14563 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4821 */;

require = fn;
function BountiesRecapOrbsBackground(arg0) {
  ({ style, reducedMotion } = arg0);
  if (obj.isAndroid()) {
    const obj2 = { style, needsOffscreenAlphaCompositing: true, renderToHardwareTextureAndroid: true, pointerEvents: "none", children: null };
    const obj3 = { url: _modDef14561, style: React3.absoluteFillObject, autoplay: !reducedMotion };
    obj2.children = timestampProducer(APNGPlayer.APNGPlayer, obj3);
    let tmp3Result = timestampProducer(React4, obj2);
  } else {
    const obj4 = { source: null, style: null, resizeMode: "contain", paused: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
    const obj5 = { uri: _modDef14562 };
    obj4.source = obj5;
    obj4.style = style;
    obj4.paused = reducedMotion;
    tmp3Result = timestampProducer(common_Video.VideoComponent, obj4);
  }
  return tmp3Result;
}
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const lg = nativeDefault.radii.lg;
const createStyles = fn(4829);
let closure_9 = createStyles.createStyles(() => {
  const obj = { root: { overflow: "hidden", borderRadius: lg, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, content: null, centeredCopy: null, orbsBackground: null, headerLabel: null, titleRow: null, actions: null, orbAmount: null };
  const obj2 = { overflow: "hidden", borderRadius: lg, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
  obj.content = { flex: 1, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center", alignItems: "center" };
  obj.centeredCopy = { alignItems: "center", width: "100%" };
  obj.orbsBackground = { position: "absolute", top: 0, left: 0, right: 0, height: "40%", zIndex: 1 };
  const obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center", alignItems: "center" };
  obj.headerLabel = { paddingBottom: nativeDefault.space.PX_4, textTransform: "uppercase" };
  const obj4 = { paddingBottom: nativeDefault.space.PX_4, textTransform: "uppercase" };
  obj.titleRow = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_8 };
  const rect = { position: "absolute", left: nativeDefault.space.PX_24, right: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_12 };
  obj.actions = rect;
  const obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: nativeDefault.space.PX_24, gap: nativeDefault.space.PX_8 };
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
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("BountiesScrollRecapPage", "text-xs/bold");
  const tmp3 = useSafeAreaInsetsDefault();
  const items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj3 = { style: null, pointerEvents: "box-none", children: null };
  const items1 = [tmp.root, style];
  obj3.style = items1;
  const obj4 = { style: React3.absoluteFillObject, pointerEvents: "none", children: null };
  const obj5 = { source: null, style: null, resizeMode: "cover", paused: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
  obj5.source = { uri: _modDef14563 };
  obj5.style = React3.absoluteFillObject;
  obj5.paused = stateFromStores;
  const items2 = [timestampProducer(common_Video.VideoComponent, obj5), timestampProducer(BountiesRecapOrbsBackground, { style: tmp.orbsBackground, reducedMotion: stateFromStores })];
  obj4.children = items2;
  const items3 = [React5(React4, obj4), ];
  const obj8 = { style: tmp.content, pointerEvents: "box-none", children: null };
  const obj9 = { style: tmp.centeredCopy, pointerEvents: "none", children: null };
  const obj10 = { variant: typeConsolidationEyebrow.variant, color: "text-brand", style: null, children: null };
  const items4 = [tmp.headerLabel, typeConsolidationEyebrow.style];
  obj10.style = items4;
  const intl = util.intl;
  obj10.children = intl.string(util.t.d6Rrn6);
  const items5 = [timestampProducer(Text_Text.Text, obj10), , ];
  const obj11 = { accessible: true, accessibilityRole: "text", accessibilityLabel: "+" + orbAmount, children: null };
  const obj12 = { style: tmp.titleRow, children: null };
  const items6 = [timestampProducer(OrbsIcon.OrbsIcon, { size: "lg", color: "icon-strong", accessible: false }), ];
  const obj6 = { uri: _modDef14563 };
  const obj7 = { style: tmp.orbsBackground, reducedMotion: stateFromStores };
  items6[1] = timestampProducer(Text_Text.Text, { variant: "display-lg", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount });
  obj12.children = items6;
  obj11.children = React5(React4, obj12);
  items5[1] = timestampProducer(React4, obj11);
  const obj14 = { variant: "text-md/medium", color: "text-muted", style: { textAlign: "center" }, children: null };
  const intl2 = util.intl;
  obj14.children = intl2.string(util.t.x0Ffz3);
  items5[2] = timestampProducer(Text_Text.Text, obj14);
  obj9.children = items5;
  const items7 = [React5(React4, obj9), ];
  const obj15 = { style: null, children: null };
  const items8 = [tmp.actions, ];
  const obj13 = { variant: "display-lg", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount };
  items8[1] = { bottom: tmp3.bottom + nativeDefault.space.PX_8 };
  obj15.style = items8;
  const obj17 = { grow: true, variant: "primary", text: null, size: "lg", onPress: null };
  const intl3 = util.intl;
  obj17.text = intl3.string(util.t.i4jeWR);
  obj17.onPress = onClose;
  obj15.children = timestampProducer(components_Button_Button.Button, obj17);
  items7[1] = timestampProducer(React4, obj15);
  obj8.children = items7;
  items3[1] = React5(React4, obj8);
  obj3.children = items3;
  return React5(React4, obj3);
};