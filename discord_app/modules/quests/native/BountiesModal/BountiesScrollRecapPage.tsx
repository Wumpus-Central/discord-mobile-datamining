// === Module 15049: BountiesRecapOrbsBackground ===

// Module 15049 (BountiesRecapOrbsBackground)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 504 */;
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import set from "set" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import Text from "Text" /* 4556 */;
import Button from "Button" /* 4975 */;
import VideoComponent from "VideoComponent" /* 8307 */;
import OrbsIcon from "OrbsIcon" /* 8837 */;
import metadataDefault from "metadata" /* 15050 */;
import metadataDefault2 from "metadata" /* 15051 */;
import metadataDefault3 from "metadata" /* 15052 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4552 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
function BountiesRecapOrbsBackground(arg0) {
  ({ style, reducedMotion } = arg0);
  let obj = set;
  if (obj.isAndroid()) {
    obj = { style: null, needsOffscreenAlphaCompositing: true, renderToHardwareTextureAndroid: true, pointerEvents: "none", children: null };
    obj[0] = style;
    obj = { url: null, style: null, autoplay: null };
    obj[0] = metadataDefault;
    obj[1] = closure_3.absoluteFillObject;
    obj[2] = !reducedMotion;
    obj[4] = tmp3(tmp(8808).APNGPlayer, obj);
    let tmp3Result = tmp3(closure_4, obj);
  } else {
    obj1 = { source: null, style: null, resizeMode: "contain", paused: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
    const obj2 = { uri: null };
    obj2[0] = metadataDefault2;
    obj1[0] = obj2;
    obj1[1] = style;
    obj1[3] = reducedMotion;
    tmp3Result = tmp3(tmp(8307).VideoComponent, obj1);
  }
  return tmp3Result;
}
noopAll;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error } = jsxProd);
const lg = ThemesDefault.radii.lg;
let closure_9 = createCacheKey.createStyles(() => {
  let obj = { root: null, content: null, centeredCopy: null, orbsBackground: null, headerLabel: null, titleRow: null, actions: null, orbAmount: null };
  obj = { overflow: "hidden", borderRadius: lg, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
  obj[0] = obj;
  obj = { flex: 1, paddingHorizontal: ThemesDefault.space.PX_24, justifyContent: "center", alignItems: "center" };
  obj[1] = obj;
  obj[2] = { alignItems: "center", width: "100%" };
  obj[3] = { position: "absolute", top: 0, left: 0, right: 0, height: "40%", zIndex: 1 };
  obj[4] = { paddingBottom: ThemesDefault.space.PX_4, textTransform: "uppercase" };
  obj1 = { paddingBottom: ThemesDefault.space.PX_4, textTransform: "uppercase" };
  obj[5] = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: ThemesDefault.space.PX_24, gap: ThemesDefault.space.PX_8 };
  const obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "center", paddingBottom: ThemesDefault.space.PX_24, gap: ThemesDefault.space.PX_8 };
  obj[6] = { position: "absolute", left: ThemesDefault.space.PX_24, right: ThemesDefault.space.PX_24, gap: ThemesDefault.space.PX_12 };
  const obj3 = { position: "absolute", left: ThemesDefault.space.PX_24, right: ThemesDefault.space.PX_24, gap: ThemesDefault.space.PX_12 };
  let num = 0;
  if (obj7.isIOS()) {
    num = 6;
  }
  obj[7] = { marginTop: num, lineHeight: 46 };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollRecapPage.tsx");

export const BountiesScrollRecapPage = function BountiesScrollRecapPage(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  ({ onClose, style } = orbAmount);
  const tmp = callback3();
  let obj = initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  obj = { style: items1, pointerEvents: "box-none", children: null };
  items1 = [tmp.root, style];
  obj = { style: closure_3.absoluteFillObject, pointerEvents: "none", children: null };
  obj1 = { source: null, style: null, resizeMode: "cover", paused: null, disableFocus: true, preventsDisplaySleepDuringVideoPlayback: false, importantForAccessibility: "no-hide-descendants" };
  const tmp2 = useSafeAreaInsetsDefault();
  obj1[0] = { uri: metadataDefault3 };
  obj1[1] = closure_3.absoluteFillObject;
  obj1[3] = stateFromStores;
  const items2 = [callback(VideoComponent.VideoComponent, obj1), callback(BountiesRecapOrbsBackground, { style: tmp.orbsBackground, reducedMotion: stateFromStores })];
  obj[2] = items2;
  const items3 = [callback2(closure_4, obj), ];
  const obj4 = { style: tmp.content, pointerEvents: "box-none", children: null };
  const obj5 = { style: tmp.centeredCopy, pointerEvents: "none", children: null };
  const obj6 = { variant: "text-xs/bold", color: "text-brand", style: tmp.headerLabel, children: null };
  const intl = getSystemLocale.intl;
  obj6[3] = intl.string(getSystemLocale.t.d6Rrn6);
  const items4 = [callback(Text.Text, obj6), , ];
  const obj7 = { accessible: true, accessibilityRole: "text", accessibilityLabel: "+" + orbAmount, children: null };
  const obj8 = { style: tmp.titleRow, children: null };
  const items5 = [callback(OrbsIcon.OrbsIcon, { size: "lg", color: "icon-strong", accessible: false }), ];
  const obj2 = { uri: metadataDefault3 };
  const obj3 = { style: tmp.orbsBackground, reducedMotion: stateFromStores };
  items5[1] = callback(Text.Text, { variant: "display-lg", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount });
  obj8[1] = items5;
  obj7[3] = callback2(closure_4, obj8);
  items4[1] = callback(closure_4, obj7);
  const obj10 = { variant: "text-md/medium", color: "text-muted", style: { textAlign: "center" }, children: null };
  const intl2 = getSystemLocale.intl;
  obj10[3] = intl2.string(getSystemLocale.t.x0Ffz3);
  items4[2] = callback(Text.Text, obj10);
  obj5[2] = items4;
  const items6 = [callback2(closure_4, obj5), ];
  const obj11 = { style: null, children: null };
  const items7 = [tmp.actions, ];
  const obj9 = { variant: "display-lg", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount };
  items7[1] = { bottom: tmp2.bottom + ThemesDefault.space.PX_8 };
  obj11[0] = items7;
  const obj13 = { grow: true, variant: "primary", text: null, size: "lg", onPress: null };
  const intl3 = getSystemLocale.intl;
  obj13[2] = intl3.string(getSystemLocale.t.i4jeWR);
  obj13[4] = onClose;
  obj11[1] = callback(Button.Button, obj13);
  items6[1] = callback(closure_4, obj11);
  obj4[2] = items6;
  items3[1] = callback2(closure_4, obj4);
  obj[2] = items3;
  return callback2(closure_4, obj);
};