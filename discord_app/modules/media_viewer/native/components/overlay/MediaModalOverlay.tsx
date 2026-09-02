// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlay.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../../intl/index.native.tsx";
import _modDef4217 from "../../../../reanimated/ReanimatedRexport.tsx";
import isBlurDisabledDefault from "../../../../visual_effect_view/native/VisualEffectView.tsx";
import SafeAreaPaddingView from "../../../../../components_native/common/SafeAreaView.tsx";
import nativeEventEmitter from "../../MediaPlayerMuteManager.tsx";
import renderDefault from "../../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import useMediaModalFooterActionStore from "../../useMediaModalFooterAction.tsx";
import useOverlayLayoutDriver from "../../useOverlayLayoutDriver.tsx";
import ObscuredViewDefault from "../MediaViewerThumbnails.tsx";
import MediaModalOverlayHeader from "MediaModalOverlayHeader.tsx";
import _modDef13054 from "MediaModalOverlayAltText.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function OverlayMuteButton(arg0) {
  ({ isMuted, onToggleMute } = arg0);
  let obj = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    source: null,
    color: null,
    onPress: null,
    style: null,
    iconStyle: null,
  };
  const tmp = callback3();
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.w4m945);
  obj = { left: true, right: true, children: tmp4(isMuted ? 13044 : 10116) };
  obj[3] = ThemesDefault.unsafe_rawColors.WHITE;
  obj[4] = onToggleMute;
  ({ overlayButton: obj[5], overlayButtonIcon: obj[6] } = tmp);
  obj[2] = closure_7(renderDefault, obj);
  return closure_7(SafeAreaPaddingView.SafeAreaPaddingView, obj);
}
function OverlayObscureToggleButton(arg0) {
  ({ spoilerActive, onToggleObscure } = arg0);
  let obj = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    source: null,
    color: null,
    onPress: null,
    style: null,
    iconStyle: null,
  };
  const tmp = callback3();
  const intl = getSystemLocale.intl;
  obj[1] = intl.string(getSystemLocale.t.UIsxUw);
  obj = { left: true, right: true, children: tmp4(spoilerActive ? 13045 : 13046) };
  obj[3] = ThemesDefault.unsafe_rawColors.WHITE;
  obj[4] = onToggleObscure;
  ({ overlayButton: obj[5], overlayButtonIcon: obj[6] } = tmp);
  obj[2] = closure_7(renderDefault, obj);
  return closure_7(SafeAreaPaddingView.SafeAreaPaddingView, obj);
}
function MediaModalOverlay(getVideoControls) {
  ({ source, index } = getVideoControls);
  const videoControls = getVideoControls.getVideoControls(index, source);
  let obj = index(13049);
  const items = [index];
  const items1 = [videoControls];
  const callback = importAllResult.useCallback(() => index(closure_1_2[27]).toggleSpoiler(index), items);
  const effect = importAllResult.useEffect(() => {
    const result = index(closure_1_2[23]).setVideoStateControls(videoControls);
  }, items1);
  obj = {};
  const merged = Object.assign(getVideoControls);
  obj.slider = videoControls(8589)(index, source, videoControls);
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
let obj = {
  portraitFooterButtons: null,
  invisibleFooter: null,
  overlayIcons: null,
  overlayButtonIcon: null,
  overlayButton: null,
};
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.top = undefined;
obj.backgroundColor = "transparent";
obj[0] = obj;
createCacheKey = { paddingBottom: ThemesDefault.space.PX_8 };
obj[1] = createCacheKey;
obj[2] = {
  position: "absolute",
  top: -40,
  right: 8,
  display: "flex",
  flexDirection: "row",
  gap: ThemesDefault.space.PX_4,
};
obj[3] = { width: 20, height: 20 };
obj[4] = { width: 32, height: 32, backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: 16 };
let closure_10 = createCacheKey.createStyles(obj);
let closure_13 = importAllResult.memo((arg0) => {
  ({ slider, onClose, syncer, source, obscure } = arg0);
  ({
    overlayEnabled,
    disableDownload,
    disableMediaOverlayButton,
    disableMediaOverlayFooter,
    shareable,
    contextName,
    contextIcon,
    spoilerActive,
    toggleObscure,
  } = arg0);
  const tmp = callback3();
  let obj = useOverlayLayoutDriver;
  const overlayLayoutDriver = obj.useOverlayLayoutDriver();
  obj1 = useOverlayLayoutDriver;
  const footerLayoutAnimation = obj1.useFooterLayoutAnimation(overlayLayoutDriver);
  [tmp7, tmp8] = callback(importAllResult.useState(false), 2);
  let obj2 = nativeEventEmitter;
  const mediaPlayerMutedStore = obj2.useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  let obj3 = useMediaModalFooterActionStore;
  const mediaModalFooterActionStore = obj3.useMediaModalFooterActionStore((footerAction) => footerAction.footerAction);
  if (null != slider) {
    obj = { bottom: true, left: true, right: true, style: null, children: null };
    obj[3] = { paddingTop: 8 };
    let tmp2Result = tmp2(1234);
    let isIOSResult = tmp2Result.isIOS();
    if (isIOSResult) {
      obj = { blurTheme: "dark", style: null };
      obj[1] = StyleSheet.absoluteFill;
      isIOSResult = callback2(isBlurDisabledDefault, obj);
    }
    const items = [isIOSResult, slider];
    let tmp17 = null;
    if (syncer.sources.length > 1) {
      obj1 = { syncer: null };
      obj1[0] = syncer;
      tmp17 = callback2(ObscuredViewDefault, obj1);
    }
    items[2] = tmp17;
    obj[4] = items;
    let tmp22Result2 = closure_8(tmp2(5561).SafeAreaPaddingView, obj);
    const tmp12 = closure_8;
  } else {
    tmp22Result2 = null;
  }
  tmp2Result = tmp2(8603);
  obj2 = {
    animationDriver: overlayLayoutDriver,
    disableDownload,
    disableMediaOverlayButton,
    source,
    shareable,
    contextName,
    contextIcon,
    onClose,
    channelId: source.channelId,
  };
  const items1 = [callback2(MediaModalOverlayHeader.MediaModalOverlayHeader, obj2)];
  obj3 = { style: items2, children: null };
  items2 = [tmp.portraitFooterButtons, footerLayoutAnimation];
  let tmp22Result = !tmp7;
  if (!tmp7) {
    const obj4 = { description: null };
    obj4[0] = source.description;
    tmp22Result = tmp22(_modDef13054, obj4);
  }
  const items3 = [tmp22Result, ,];
  if (null != slider) {
    const obj5 = { style: null, children: null };
    obj5[0] = tmp.overlayIcons;
    tmp22Result = null != slider;
    if (tmp22Result) {
      const obj6 = { isMuted: null, onToggleMute: null };
      obj6[0] = mediaPlayerMutedStore;
      obj6[1] = tmp2(8589).toggleMuted;
      tmp22Result = tmp22(OverlayMuteButton, obj6);
    }
    const items4 = [tmp22Result];
    let tmp22Result1 = null;
    if (obscure) {
      const obj7 = { spoilerActive: null, onToggleObscure: null };
      obj7[0] = spoilerActive;
      obj7[1] = toggleObscure;
      tmp22Result1 = tmp22(OverlayObscureToggleButton, obj7);
    }
    items4[1] = tmp22Result1;
    obj5[1] = items4;
    let tmp20Result = tmp20(View, obj5);
    const tmp26 = View;
  } else {
    tmp20Result = null;
  }
  items3[1] = tmp20Result;
  if (null != mediaModalFooterActionStore) {
    const obj8 = { footerAction: null, sliderElement: null, syncer: null };
    obj8[0] = mediaModalFooterActionStore;
    obj8[1] = slider;
    obj8[2] = syncer;
    tmp22Result2 = tmp22(tmp2(13055).MediaModalOverlayFooterAction, obj8);
  } else if (disableMediaOverlayFooter) {
    const obj9 = { bottom: true, style: null };
    obj9[1] = tmp.invisibleFooter;
    tmp22Result2 = tmp22(tmp2(5561).SafeAreaPaddingView, obj9);
  } else if (tmp2Result.useMediaViewerDimensions().height >= 600) {
    const obj10 = {
      sliderElement: null,
      syncer: null,
      guildId: null,
      channelId: null,
      messageId: null,
      onClose: null,
      onFullViewToggled: null,
      overlayEnabled: null,
    };
    obj10[0] = slider;
    obj10[1] = syncer;
    ({ guildId: obj16[2], channelId: obj16[3], messageId: obj16[4] } = source);
    obj10[5] = onClose;
    obj10[6] = tmp8;
    obj10[7] = overlayEnabled;
    tmp22Result2 = tmp22(tmp2(13056).MediaModalOverlayFooter, obj10);
  }
  const obj11 = { children: null };
  items3[2] = tmp22Result2;
  obj3[1] = items3;
  items1[1] = closure_8(_modDef4217.View, obj3);
  obj11[0] = items1;
  return closure_8(closure_9, obj11);
});
let obj2 = {
  position: "absolute",
  top: -40,
  right: 8,
  display: "flex",
  flexDirection: "row",
  gap: ThemesDefault.space.PX_4,
};
let result = require("set").fileFinishedImporting(
  "modules/media_viewer/native/components/overlay/MediaModalOverlay.tsx",
);

export default function MediaModalOverlayGuard(onIndexChange) {
  onIndexChange = onIndexChange.onIndexChange;
  let tmp = null;
  const merged = Object.assign(onIndexChange, Object.create(null));
  let first;
  let obj = onIndexChange(8583);
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
}
