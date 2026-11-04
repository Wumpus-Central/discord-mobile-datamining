// === Module 17206: BountiesScrollRecapPage ===

// Module 17206 (BountiesScrollRecapPage)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import Text_Text from "Text/Text" /* 5761 */;
import components_Button_Button from "components/Button/Button" /* 5768 */;
import common_Video from "common/Video" /* 9014 */;
import APNGPlayer from "APNGPlayer" /* 9651 */;
import OrbsIcon from "OrbsIcon" /* 9679 */;
import _modDef17207 from "module_17207" /* 17207 */;
import _modDef17208 from "module_17208" /* 17208 */;
import _modDef17209 from "module_17209" /* 17209 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;

require = fn;
function BountiesRecapOrbsBackground(arg0) {
  ({ style, reducedMotion } = arg0);
  if (obj.isAndroid()) {
    const obj2 = { style, needsOffscreenAlphaCompositing: true, renderToHardwareTextureAndroid: true, pointerEvents: "none", children: null };
    const obj3 = { url: _modDef17207, style: React3.absoluteFillObject, autoplay: !reducedMotion };
    obj2.children = timestampProducer(APNGPlayer.APNGPlayer, obj3);
    let tmp3Result = timestampProducer(React4, obj2);
  } else {
    const obj4 = { source: null, style: null, resizeMode: "contain", paused: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
    const obj5 = { uri: _modDef17208 };
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
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const lg = nativeDefault.radii.lg;
const createStyles = fn(5141);
let closure_9 = createStyles.createStyles(() => {
  const obj = { root: { overflow: "hidden", borderRadius: lg, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, content: null, centeredCopy: null, orbsBackground: null, headerLabel: null, titleRow: null, actions: null, orbAmount: null };
  const obj2 = { overflow: "hidden", borderRadius: lg, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
  obj.content = { flex: 1, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center", alignItems: "center" };
  obj.centeredCopy = { alignItems: "center", width: "100%" };
  obj.orbsBackground = { position: "absolute", top: 0, left: 0, right: 0, height: "40%", zIndex: 1 };
  const obj3 = { flex: 1, paddingHorizontal: nativeDefault.space.PX_24, justifyContent: "center", alignItems: "center" };
  obj.headerLabel = { paddingBottom: nativeDefault.space.PX_4 };
  const obj4 = { paddingBottom: nativeDefault.space.PX_4 };
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

export function BountiesScrollRecapPage(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  ({ onClose, style } = orbAmount);
  const tmp = closure_9();
  const tmp2 = useSafeAreaInsetsDefault();
  items = [AccessibilityStore];
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = { style: null, pointerEvents: "box-none", children: null };
  const items1 = [tmp.root, style];
  obj2.style = items1;
  const obj3 = { style: React3.absoluteFillObject, pointerEvents: "none", children: null };
  const obj4 = { source: null, style: null, resizeMode: "cover", paused: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
  obj4.source = { uri: _modDef17209 };
  obj4.style = React3.absoluteFillObject;
  obj4.paused = stateFromStores;
  const items2 = [timestampProducer(common_Video.VideoComponent, obj4), timestampProducer(BountiesRecapOrbsBackground, { style: tmp.orbsBackground, reducedMotion: stateFromStores })];
  obj3.children = items2;
  const items3 = [metroImportDefault(React4, obj3), ];
  const obj7 = { style: tmp.content, pointerEvents: "box-none", children: null };
  const obj8 = { style: tmp.centeredCopy, pointerEvents: "none", children: null };
  const obj9 = { variant: "body-sm/medium", color: "text-brand", style: tmp.headerLabel, children: null };
  const intl = util.intl;
  obj9.children = intl.string(util.t.d6Rrn6);
  const items4 = [timestampProducer(Text_Text.Text, obj9), , ];
  const obj10 = { accessible: true, accessibilityRole: "text", accessibilityLabel: "+" + orbAmount, children: null };
  const obj11 = { style: tmp.titleRow, children: null };
  const items5 = [timestampProducer(OrbsIcon.OrbsIcon, { size: "lg", color: "icon-strong", accessible: false }), ];
  const obj5 = { uri: _modDef17209 };
  const obj6 = { style: tmp.orbsBackground, reducedMotion: stateFromStores };
  items5[1] = timestampProducer(Text_Text.Text, { variant: "display-lg", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount });
  obj11.children = items5;
  obj10.children = metroImportDefault(React4, obj11);
  items4[1] = timestampProducer(React4, obj10);
  const obj13 = { variant: "body-md/medium", color: "text-muted", style: { textAlign: "center" }, children: null };
  const intl2 = util.intl;
  obj13.children = intl2.string(util.t.x0Ffz3);
  items4[2] = timestampProducer(Text_Text.Text, obj13);
  obj8.children = items4;
  const items6 = [metroImportDefault(React4, obj8), ];
  const obj14 = { style: null, children: null };
  const items7 = [tmp.actions, ];
  const obj12 = { variant: "display-lg", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount };
  items7[1] = { bottom: tmp2.bottom + nativeDefault.space.PX_8 };
  obj14.style = items7;
  const obj16 = { grow: true, variant: "primary", text: null, size: "lg", onPress: null };
  const intl3 = util.intl;
  obj16.text = intl3.string(util.t.i4jeWR);
  obj16.onPress = onClose;
  obj14.children = timestampProducer(components_Button_Button.Button, obj16);
  items6[1] = timestampProducer(React4, obj14);
  obj7.children = items6;
  items3[1] = metroImportDefault(React4, obj7);
  obj2.children = items3;
  return metroImportDefault(React4, obj2);
}