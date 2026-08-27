// === Module 12735: OverlayMuteButton ===

// Module 12735 (OverlayMuteButton)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import _modDef4185 from "module_4185" /* 4185 */;
import isBlurDisabledDefault from "isBlurDisabled" /* 4870 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 5505 */;
import nativeEventEmitter from "nativeEventEmitter" /* 8507 */;
import renderDefault from "render" /* 8988 */;
import useOverlayLayoutDriver from "useOverlayLayoutDriver" /* 12739 */;
import ObscuredViewDefault from "ObscuredView" /* 12740 */;
import MediaModalOverlayHeader from "MediaModalOverlayHeader" /* 12742 */;
import _modDef12746 from "module_12746" /* 12746 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

require = arg1;
function OverlayMuteButton(arg0) {
  ({ isMuted, onToggleMute } = arg0);
  let obj = { accessibilityRole: "button", accessibilityLabel: null, source: null, color: null, onPress: null, style: null, iconStyle: null };
  const tmp = callback3();
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.w4m945);
  obj = { left: true, right: true, children: tmp4(isMuted ? 12736 : 10014) };
  obj[3] = ThemesDefault.unsafe_rawColors.WHITE;
  obj[4] = onToggleMute;
  ({ overlayButton: obj[5], overlayButtonIcon: obj[6] } = tmp);
  obj[2] = closure_7(renderDefault, obj);
  return closure_7(SafeAreaPaddingView.SafeAreaPaddingView, obj);
}
function OverlayObscureToggleButton(arg0) {
  ({ spoilerActive, onToggleObscure } = arg0);
  let obj = { accessibilityRole: "button", accessibilityLabel: null, source: null, color: null, onPress: null, style: null, iconStyle: null };
  const tmp = callback3();
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.UIsxUw);
  obj = { left: true, right: true, children: tmp4(spoilerActive ? 12737 : 12738) };
  obj[3] = ThemesDefault.unsafe_rawColors.WHITE;
  obj[4] = onToggleObscure;
  ({ overlayButton: obj[5], overlayButtonIcon: obj[6] } = tmp);
  obj[2] = closure_7(renderDefault, obj);
  return closure_7(SafeAreaPaddingView.SafeAreaPaddingView, obj);
}
function MediaModalOverlay(getVideoControls) {
  ({ source, index } = getVideoControls);
  const videoControls = getVideoControls.getVideoControls(index, source);
  let obj = index(12741);
  const items = [index];
  const items1 = [videoControls];
  const callback = importAllResult.useCallback(() => index(closure_1_2[25]).toggleSpoiler(index), items);
  const effect = importAllResult.useEffect(() => {
    const result = index(closure_1_2[22]).setVideoStateControls(videoControls);
  }, items1);
  obj = {};
  const merged = Object.assign(getVideoControls);
  obj.slider = videoControls(8506)(index, source, videoControls);
  obj.source = source;
  let flag = source.obscure;
  if (flag == null) {
    flag = false;
  }
  obj.obscure = flag;
  obj.spoilerActive = callback(obj.useMediaItemSpoilerState(index), 1)[0];
  obj.toggleObscure = callback;
  return closure_7(closure_13, obj);
}
let c4 = importAllResult;
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
let obj = { portraitFooterButtons: null, invisibleFooter: null, overlayIcons: null, overlayButtonIcon: null, overlayButton: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.top = undefined;
obj.backgroundColor = "transparent";
obj[0] = obj;
createCacheKey = { paddingBottom: ThemesDefault.space.PX_8 };
obj[1] = createCacheKey;
obj[2] = { position: "absolute", top: -40, right: 8, display: "flex", flexDirection: "row", gap: ThemesDefault.space.PX_4 };
obj[3] = { width: 20, height: 20 };
obj[4] = { width: 32, height: 32, backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: 16 };
let closure_10 = createCacheKey.createStyles(obj);
let closure_13 = importAllResult.memo((arg0) => {
  ({ slider, onClose, syncer, source, obscure } = arg0);
  ({ overlayEnabled, disableDownload, disableMediaOverlayButton, disableMediaOverlayFooter, shareable, contextName, contextIcon, spoilerActive, toggleObscure } = arg0);
  const tmp = callback3();
  let obj = useOverlayLayoutDriver;
  const overlayLayoutDriver = obj.useOverlayLayoutDriver();
  obj1 = useOverlayLayoutDriver;
  const footerLayoutAnimation = obj1.useFooterLayoutAnimation(overlayLayoutDriver);
  [tmp7, tmp8] = callback(importAllResult.useState(false), 2);
  let obj2 = nativeEventEmitter;
  const mediaPlayerMutedStore = obj2.useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  if (null != slider) {
    obj = { bottom: true, left: true, right: true, style: null, children: null };
    obj[3] = { paddingTop: 8 };
    let tmp2Result = tmp2(500);
    let isIOSResult = tmp2Result.isIOS();
    if (isIOSResult) {
      obj = { blurTheme: "dark", style: null };
      obj[1] = StyleSheet.absoluteFill;
      isIOSResult = callback2(isBlurDisabledDefault, obj);
    }
    const items = [isIOSResult, slider, ];
    let tmp16 = null;
    if (syncer.sources.length > 1) {
      obj1 = { syncer: null };
      obj1[0] = syncer;
      tmp16 = callback2(ObscuredViewDefault, obj1);
    }
    items[2] = tmp16;
    obj[4] = items;
    let tmp21Result2 = closure_8(tmp2(5505).SafeAreaPaddingView, obj);
    const tmp11 = closure_8;
  } else {
    tmp21Result2 = null;
  }
  tmp2Result = tmp2(8520);
  obj2 = { animationDriver: overlayLayoutDriver, disableDownload, disableMediaOverlayButton, source, shareable, contextName, contextIcon, onClose, channelId: source.channelId };
  const items1 = [callback2(MediaModalOverlayHeader.MediaModalOverlayHeader, obj2), ];
  const obj3 = { style: items2, children: null };
  items2 = [tmp.portraitFooterButtons, footerLayoutAnimation];
  let tmp21Result = !tmp7;
  if (!tmp7) {
    const obj4 = { description: null };
    obj4[0] = source.description;
    tmp21Result = tmp21(_modDef12746, obj4);
  }
  const items3 = [tmp21Result, , ];
  if (null != slider) {
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.overlayIcons;
    tmp21Result = null != slider;
    if (tmp21Result) {
      const obj6 = { isMuted: null, onToggleMute: null };
      obj6[0] = mediaPlayerMutedStore;
      obj6[1] = tmp2(8506).toggleMuted;
      tmp21Result = tmp21(OverlayMuteButton, obj6);
    }
    const items4 = [tmp21Result, ];
    let tmp21Result1 = null;
    if (obscure) {
      const obj7 = { spoilerActive: null, onToggleObscure: null };
      obj7[0] = spoilerActive;
      obj7[1] = toggleObscure;
      tmp21Result1 = tmp21(OverlayObscureToggleButton, obj7);
    }
    items4[1] = tmp21Result1;
    obj5[1] = items4;
    let tmp19Result = tmp19(View, obj5);
    const tmp25 = View;
  } else {
    tmp19Result = null;
  }
  items3[1] = tmp19Result;
  if (disableMediaOverlayFooter) {
    const obj8 = { bottom: true, style: null };
    obj8[1] = tmp.invisibleFooter;
    tmp21Result2 = tmp21(tmp2(5505).SafeAreaPaddingView, obj8);
  } else if (tmp2Result.useMediaViewerDimensions().height >= 600) {
    const obj9 = { sliderElement: null, syncer: null, guildId: null, channelId: null, messageId: null, onClose: null, onFullViewToggled: null, overlayEnabled: null };
    obj9[0] = slider;
    obj9[1] = syncer;
    ({ guildId: obj15[2], channelId: obj15[3], messageId: obj15[4] } = source);
    obj9[5] = onClose;
    obj9[6] = tmp8;
    obj9[7] = overlayEnabled;
    tmp21Result2 = tmp21(tmp2(12747).MediaModalOverlayFooter, obj9);
  }
  const obj10 = { children: null };
  items3[2] = tmp21Result2;
  obj3[1] = items3;
  items1[1] = closure_8(_modDef4185.View, obj3);
  obj10[0] = items1;
  return closure_8(closure_9, obj10);
});
let obj2 = { position: "absolute", top: -40, right: 8, display: "flex", flexDirection: "row", gap: ThemesDefault.space.PX_4 };
let result = require("set").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlay.tsx");

export default function MediaModalOverlayGuard(onIndexChange) {
  onIndexChange = onIndexChange.onIndexChange;
  let tmp = null;
  const merged = Object.assign(onIndexChange, Object.create(null));
  let first;
  let obj = onIndexChange(8500);
  const tmp3 = callback(obj.useSelectedMediaSource(merged.syncer), 2);
  first = tmp3[0];
  const items = [first, onIndexChange];
  const effect = importAllResult.useEffect(() => {
    if (onIndexChange != null) {
      tmp(first);
    }
  }, items);
  if (null != tmp3[1]) {
    obj = {};
    const merged1 = Object.assign(merged);
    obj.source = tmp5;
    obj.index = first;
    tmp = callback2(MediaModalOverlay, obj);
  }
  return tmp;
};