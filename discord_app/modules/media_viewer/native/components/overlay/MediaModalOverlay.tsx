// === Module 12958: MediaModalOverlay ===

// Module 12958 (MediaModalOverlay)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4296 */;
import VisualEffectViewDefault from "VisualEffectView" /* 4965 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import useMediaViewerSources from "useMediaViewerSources" /* 8262 */;
import MediaSourceUtil from "MediaSourceUtil" /* 8263 */;
import useVideoControls from "useVideoControls" /* 8270 */;
import MediaPlayerMuteManager from "MediaPlayerMuteManager" /* 8271 */;
import MediaViewerDimensionsContext from "MediaViewerDimensionsContext" /* 8293 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9050 */;
import useMediaModalFooterAction from "useMediaModalFooterAction" /* 11509 */;
import useOverlayLayoutDriver from "useOverlayLayoutDriver" /* 12962 */;
import MediaViewerThumbnailsDefault from "MediaViewerThumbnails" /* 12963 */;
import MediaModalOverlayHeader from "MediaModalOverlayHeader" /* 12965 */;
import MediaModalOverlayAltTextDefault from "MediaModalOverlayAltText" /* 12969 */;
import MediaModalOverlayFooterAction from "MediaModalOverlayFooterAction" /* 12970 */;
import MediaModalOverlayFooter from "MediaModalOverlayFooter" /* 12971 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function OverlayMuteButton(arg0) {
  ({ isMuted, onToggleMute } = arg0);
  const obj = { accessibilityRole: "button", accessibilityLabel: null, source: null, color: null, onPress: null, style: null, iconStyle: null };
  const tmp = closure_10();
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.w4m945);
  const rect = { left: true, right: true, children: null };
  obj.source = importDefault(isMuted ? 12959 : 10011);
  obj.color = nativeDefault.unsafe_rawColors.WHITE;
  obj.onPress = onToggleMute;
  ({ overlayButton: obj.style, overlayButtonIcon: obj.iconStyle } = tmp);
  rect.children = React5(TouchableHitBoxDefault, obj);
  return React5(common_SafeAreaView.SafeAreaPaddingView, rect);
}
function OverlayObscureToggleButton(arg0) {
  ({ spoilerActive, onToggleObscure } = arg0);
  const obj = { accessibilityRole: "button", accessibilityLabel: null, source: null, color: null, onPress: null, style: null, iconStyle: null };
  const tmp = closure_10();
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.UIsxUw);
  const rect = { left: true, right: true, children: null };
  obj.source = importDefault(spoilerActive ? 12960 : 12961);
  obj.color = nativeDefault.unsafe_rawColors.WHITE;
  obj.onPress = onToggleObscure;
  ({ overlayButton: obj.style, overlayButtonIcon: obj.iconStyle } = tmp);
  rect.children = React5(TouchableHitBoxDefault, obj);
  return React5(common_SafeAreaView.SafeAreaPaddingView, rect);
}
function MediaModalOverlay(getVideoControls) {
  ({ source, index } = getVideoControls);
  const videoControls = getVideoControls.getVideoControls(index, source);
  index(12964);
  const items = [index];
  const items1 = [videoControls];
  const callback = noop.useCallback(() => useMediaViewerSources.toggleSpoiler(index), items);
  const effect = noop.useEffect(() => {
    const result = useVideoControls.setVideoStateControls(videoControls);
  }, items1);
  const obj = {};
  const merged = Object.assign(getVideoControls);
  obj.slider = videoControls(8270)(index, source, videoControls);
  obj.source = source;
  let flag = source.obscure;
  if (flag == null) {
    flag = false;
  }
  obj.obscure = flag;
  obj.spoilerActive = _slicedToArray(obj.useMediaItemSpoilerState(index), 1)[0];
  obj.toggleObscure = callback;
  return closure_7(closure_13, obj);
}
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
fn(4560);
let obj = { portraitFooterButtons: null, invisibleFooter: null, overlayIcons: null, overlayButtonIcon: null, overlayButton: null };
obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.top = undefined;
obj.backgroundColor = "transparent";
obj.portraitFooterButtons = obj;
const createStyles = { paddingBottom: nativeDefault.space.PX_8 };
obj.invisibleFooter = createStyles;
let rect = { position: "absolute", top: -40, right: 8, display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_4 };
obj.overlayIcons = rect;
obj.overlayButtonIcon = { width: 20, height: 20 };
obj.overlayButton = { width: 32, height: 32, backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: 16 };
let closure_10 = createStyles.createStyles(obj);
let closure_13 = noop.memo((arg0) => {
  ({ slider, onClose, syncer, source, obscure } = arg0);
  ({ overlayEnabled, disableDownload, disableMediaOverlayButton, disableMediaOverlayFooter, shareable, contextName, contextIcon, spoilerActive, toggleObscure } = arg0);
  const tmp = closure_10();
  let obj = useOverlayLayoutDriver;
  const overlayLayoutDriver = obj.useOverlayLayoutDriver();
  let obj1 = useOverlayLayoutDriver;
  const footerLayoutAnimation = obj1.useFooterLayoutAnimation(overlayLayoutDriver);
  [tmp7, tmp8] = _slicedToArray(noop.useState(false), 2);
  let obj2 = MediaPlayerMuteManager;
  const mediaPlayerMutedStore = obj2.useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  let obj3 = useMediaModalFooterAction;
  const mediaModalFooterActionStore = obj3.useMediaModalFooterActionStore((footerAction) => footerAction.footerAction);
  if (null != slider) {
    const rect = { bottom: true, left: true, right: true, style: { paddingTop: 8 }, children: null };
    let tmp2Result = PlatformUtils;
    let isIOSResult = tmp2Result.isIOS();
    if (isIOSResult) {
      obj = { blurTheme: "dark", style: StyleSheet.absoluteFill };
      isIOSResult = React5(VisualEffectViewDefault, obj);
    }
    const items = [isIOSResult, slider, ];
    let tmp17 = null;
    if (syncer.sources.length > 1) {
      obj = { syncer };
      tmp17 = React5(MediaViewerThumbnailsDefault, obj);
    }
    items[2] = tmp17;
    rect.children = items;
    let tmp22Result2 = React6(common_SafeAreaView.SafeAreaPaddingView, rect);
  } else {
    tmp22Result2 = null;
  }
  tmp2Result = MediaViewerDimensionsContext;
  obj1 = { animationDriver: overlayLayoutDriver, disableDownload, disableMediaOverlayButton, source, shareable, contextName, contextIcon, onClose, channelId: source.channelId };
  const items1 = [React5(MediaModalOverlayHeader.MediaModalOverlayHeader, obj1), ];
  obj2 = { style: null, children: null };
  const items2 = [tmp.portraitFooterButtons, footerLayoutAnimation];
  obj2.style = items2;
  let tmp22Result = !tmp7;
  if (!tmp7) {
    obj3 = { description: source.description };
    tmp22Result = React5(MediaModalOverlayAltTextDefault, obj3);
  }
  const items3 = [tmp22Result, , ];
  if (null != slider) {
    const obj4 = { style: tmp.overlayIcons, children: null };
    tmp22Result = null != slider;
    if (tmp22Result) {
      const obj5 = { isMuted: mediaPlayerMutedStore, onToggleMute: useVideoControls.toggleMuted };
      tmp22Result = React5(OverlayMuteButton, obj5);
    }
    const items4 = [tmp22Result, ];
    let tmp22Result1 = null;
    if (obscure) {
      const obj6 = { spoilerActive, onToggleObscure: toggleObscure };
      tmp22Result1 = React5(OverlayObscureToggleButton, obj6);
    }
    items4[1] = tmp22Result1;
    obj4.children = items4;
    let tmp20Result = React6(View, obj4);
  } else {
    tmp20Result = null;
  }
  items3[1] = tmp20Result;
  if (null != mediaModalFooterActionStore) {
    const obj7 = { footerAction: mediaModalFooterActionStore, sliderElement: slider, syncer };
    tmp22Result2 = React5(MediaModalOverlayFooterAction.MediaModalOverlayFooterAction, obj7);
  } else if (disableMediaOverlayFooter) {
    const obj8 = { bottom: true, style: tmp.invisibleFooter };
    tmp22Result2 = React5(common_SafeAreaView.SafeAreaPaddingView, obj8);
  } else if (tmp2Result.useMediaViewerDimensions().height >= 600) {
    const obj9 = { sliderElement: slider, syncer, guildId: null, channelId: null, messageId: null, onClose: null, onFullViewToggled: null, overlayEnabled: null };
    ({ guildId: obj16.guildId, channelId: obj16.channelId, messageId: obj16.messageId } = source);
    obj9.onClose = onClose;
    obj9.onFullViewToggled = tmp8;
    obj9.overlayEnabled = overlayEnabled;
    tmp22Result2 = React5(MediaModalOverlayFooter.MediaModalOverlayFooter, obj9);
  }
  const obj10 = { children: null };
  items3[2] = tmp22Result2;
  obj2.children = items3;
  items1[1] = React6(ReanimatedRexportDefault.View, obj2);
  obj10.children = items1;
  return React6(React7, obj10);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlay.tsx");

export default function MediaModalOverlayGuard(onIndexChange) {
  onIndexChange = onIndexChange.onIndexChange;
  let tmp = null;
  const merged = Object.assign(onIndexChange, Object.assign({ onIndexChange: 0 }));
  let obj = MediaSourceUtil;
  const tmp3 = _slicedToArray(obj.useSelectedMediaSource(merged.syncer), 2);
  const index = tmp3[0];
  const items = [index, onIndexChange];
  const effect = noop.useEffect(() => {
    if (onIndexChange != null) {
      tmp(first);
    }
  }, items);
  if (null != tmp3[1]) {
    obj = {};
    const merged1 = Object.assign(merged);
    obj.source = tmp5;
    obj.index = index;
    tmp = React5(MediaModalOverlay, obj);
  }
  return tmp;
};