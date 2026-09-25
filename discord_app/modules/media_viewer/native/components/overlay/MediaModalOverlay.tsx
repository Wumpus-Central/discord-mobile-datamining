// discord_app/modules/media_viewer/native/components/overlay/MediaModalOverlay.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../../utils/PlatformUtils.tsx";
import ReanimatedRexportDefault from "../../../../reanimated/ReanimatedRexport.tsx";
import VisualEffectViewDefault from "../../../../visual_effect_view/native/VisualEffectView.tsx";
import common_SafeAreaView from "../../../../../components_native/common/SafeAreaView.tsx";
import useMediaViewerSources from "../../useMediaViewerSources.tsx";
import useVideoControls from "../../useVideoControls.tsx";
import MediaPlayerMuteManager from "../../MediaPlayerMuteManager.tsx";
import MediaSourceUtil from "../../MediaSourceUtil.tsx";
import TouchableHitBoxDefault from "../../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import useMediaModalFooterAction from "../../useMediaModalFooterAction.tsx";
import useOverlayLayoutDriver from "../../useOverlayLayoutDriver.tsx";
import MediaViewerThumbnailsDefault from "../MediaViewerThumbnails.tsx";
import MediaModalOverlayHeader from "MediaModalOverlayHeader.tsx";
import MediaModalOverlayAltTextDefault from "MediaModalOverlayAltText.tsx";
import MediaModalOverlayFooterAction from "MediaModalOverlayFooterAction.tsx";
import MediaModalOverlayFooter from "MediaModalOverlayFooter.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function OverlayMuteButton(arg0) {
  ({ isMuted, onToggleMute } = arg0);
  const obj = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    source: null,
    color: null,
    onPress: null,
    style: null,
    iconStyle: null,
  };
  const tmp = closure_10();
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.w4m945);
  const rect = { left: true, right: true, children: null };
  obj.source = importDefault(isMuted ? 12498 : 9460);
  obj.color = nativeDefault.unsafe_rawColors.WHITE;
  obj.onPress = onToggleMute;
  ({ overlayButton: obj.style, overlayButtonIcon: obj.iconStyle } = tmp);
  rect.children = React5(TouchableHitBoxDefault, obj);
  return React5(common_SafeAreaView.SafeAreaPaddingView, rect);
}
function OverlayObscureToggleButton(arg0) {
  ({ spoilerActive, onToggleObscure } = arg0);
  const obj = {
    accessibilityRole: "button",
    accessibilityLabel: null,
    source: null,
    color: null,
    onPress: null,
    style: null,
    iconStyle: null,
  };
  const tmp = closure_10();
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.UIsxUw);
  const rect = { left: true, right: true, children: null };
  obj.source = importDefault(spoilerActive ? 12499 : 12500);
  obj.color = nativeDefault.unsafe_rawColors.WHITE;
  obj.onPress = onToggleObscure;
  ({ overlayButton: obj.style, overlayButtonIcon: obj.iconStyle } = tmp);
  rect.children = React5(TouchableHitBoxDefault, obj);
  return React5(common_SafeAreaView.SafeAreaPaddingView, rect);
}
function MediaModalOverlay(getVideoControls) {
  ({ source, index } = getVideoControls);
  const videoControls = getVideoControls.getVideoControls(index, source);
  const tmp2 = videoControls(7702)(index, source, videoControls);
  const items = [index];
  const items1 = [videoControls];
  const callback = noop.useCallback(() => useMediaViewerSources.toggleSpoiler(index), items);
  const effect = noop.useEffect(() => {
    const result = useVideoControls.setVideoStateControls(videoControls);
  }, items1);
  const obj2 = {};
  const merged = Object.assign(getVideoControls);
  obj2.slider = tmp2;
  obj2.source = source;
  let flag = source.obscure;
  if (flag == null) {
    flag = false;
  }
  obj2.obscure = flag;
  obj2.spoilerActive = _slicedToArray(index(12503).useMediaItemSpoilerState(index), 1)[0];
  obj2.toggleObscure = callback;
  return closure_7(closure_13, obj2);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4829);
let obj = {
  portraitFooterButtons: null,
  invisibleFooter: null,
  overlayIcons: null,
  overlayButtonIcon: null,
  overlayButton: null,
};
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.top = undefined;
obj3.backgroundColor = "transparent";
obj.portraitFooterButtons = obj3;
obj.invisibleFooter = { paddingBottom: nativeDefault.space.PX_8 };
let rect = {
  position: "absolute",
  top: -40,
  right: 8,
  display: "flex",
  flexDirection: "row",
  gap: nativeDefault.space.PX_4,
};
obj.overlayIcons = rect;
obj.overlayButtonIcon = { width: 20, height: 20 };
obj.overlayButton = { width: 32, height: 32, backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: 16 };
let closure_10 = createStyles.createStyles(obj);
let closure_13 = noop.memo((arg0) => {
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
  const tmp = closure_10();
  const overlayLayoutDriver = useOverlayLayoutDriver.useOverlayLayoutDriver();
  const footerLayoutAnimation = useOverlayLayoutDriver.useFooterLayoutAnimation(overlayLayoutDriver);
  [tmp7, tmp8] = noop.useState(false);
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  const mediaPlayerMutedStore = MediaPlayerMuteManager.useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const mediaModalFooterActionStore = useMediaModalFooterAction.useMediaModalFooterActionStore(
    (footerAction) => footerAction.footerAction,
  );
  if (null != slider) {
    const rect = { bottom: true, left: true, right: true, style: { paddingTop: 8 }, children: null };
    let isIOSResult = PlatformUtils.isIOS();
    if (isIOSResult) {
      const obj5 = { blurTheme: "dark", style: StyleSheet.absoluteFill };
      isIOSResult = React5(VisualEffectViewDefault, obj5);
    }
    const items = [isIOSResult, slider];
    let tmp17 = null;
    if (syncer.sources.length > 1) {
      const obj6 = { syncer };
      tmp17 = React5(MediaViewerThumbnailsDefault, obj6);
    }
    items[2] = tmp17;
    rect.children = items;
    let tmp22Result5 = React6(common_SafeAreaView.SafeAreaPaddingView, rect);
    const tmp2Result = PlatformUtils;
  } else {
    tmp22Result5 = null;
  }
  const items1 = [
    React5(MediaModalOverlayHeader.MediaModalOverlayHeader, {
      animationDriver: overlayLayoutDriver,
      disableDownload,
      disableMediaOverlayButton,
      source,
      shareable,
      contextName,
      contextIcon,
      onClose,
      channelId: source.channelId,
    }),
  ];
  const obj8 = { style: null, children: null };
  const items2 = [tmp.portraitFooterButtons, footerLayoutAnimation];
  obj8.style = items2;
  let tmp22Result = !tmp7;
  if (!tmp7) {
    const obj9 = { description: source.description };
    tmp22Result = React5(MediaModalOverlayAltTextDefault, obj9);
  }
  const items3 = [tmp22Result, ,];
  if (null != slider) {
    const obj10 = { style: tmp.overlayIcons, children: null };
    let tmp22Result3 = null != slider;
    if (tmp22Result3) {
      const obj11 = { isMuted: mediaPlayerMutedStore, onToggleMute: useVideoControls.toggleMuted };
      tmp22Result3 = React5(OverlayMuteButton, obj11);
    }
    const items4 = [tmp22Result3];
    let tmp22Result4 = null;
    if (obscure) {
      const obj12 = { spoilerActive, onToggleObscure: toggleObscure };
      tmp22Result4 = React5(OverlayObscureToggleButton, obj12);
    }
    items4[1] = tmp22Result4;
    obj10.children = items4;
    let tmp20Result = React6(View, obj10);
  } else {
    tmp20Result = null;
  }
  items3[1] = tmp20Result;
  if (null != mediaModalFooterActionStore) {
    const obj13 = { footerAction: mediaModalFooterActionStore, sliderElement: slider, syncer };
    tmp22Result5 = React5(MediaModalOverlayFooterAction.MediaModalOverlayFooterAction, obj13);
  } else if (disableMediaOverlayFooter) {
    const obj14 = { bottom: true, style: tmp.invisibleFooter };
    tmp22Result5 = React5(common_SafeAreaView.SafeAreaPaddingView, obj14);
  } else if (tmp2Result2.useMediaViewerDimensions().height >= 600) {
    const obj15 = {
      sliderElement: slider,
      syncer,
      guildId: null,
      channelId: null,
      messageId: null,
      onClose: null,
      onFullViewToggled: null,
      overlayEnabled: null,
    };
    ({ guildId: obj16.guildId, channelId: obj16.channelId, messageId: obj16.messageId } = source);
    obj15.onClose = onClose;
    obj15.onFullViewToggled = tmp8;
    obj15.overlayEnabled = overlayEnabled;
    tmp22Result5 = React5(MediaModalOverlayFooter.MediaModalOverlayFooter, obj15);
  }
  const obj17 = { children: null };
  items3[2] = tmp22Result5;
  obj8.children = items3;
  items1[1] = React6(ReanimatedRexportDefault.View, obj8);
  obj17.children = items1;
  return React6(React7, obj17);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlay.tsx");

export default function MediaModalOverlayGuard(onIndexChange) {
  onIndexChange = onIndexChange.onIndexChange;
  let tmp = null;
  const merged = Object.assign(onIndexChange, Object.assign({ onIndexChange: 0 }));
  const tmp3 = _slicedToArray(MediaSourceUtil.useSelectedMediaSource(merged.syncer), 2);
  const index = tmp3[0];
  const items = [index, onIndexChange];
  const effect = noop.useEffect(() => {
    if (onIndexChange != null) {
      tmp(first);
    }
  }, items);
  if (null != tmp3[1]) {
    const obj2 = {};
    const merged1 = Object.assign(merged);
    obj2.source = tmp5;
    obj2.index = index;
    tmp = React5(MediaModalOverlay, obj2);
  }
  return tmp;
}
