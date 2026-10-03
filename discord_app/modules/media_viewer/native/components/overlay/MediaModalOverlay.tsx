// === Module 12759: MediaModalOverlay ===

// Module 12759 (MediaModalOverlay)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4612 */;
import VisualEffectViewDefault from "VisualEffectView" /* 5773 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6619 */;
import useMediaViewerSources from "useMediaViewerSources" /* 7934 */;
import useVideoControls from "useVideoControls" /* 7936 */;
import MediaPlayerMuteManager from "MediaPlayerMuteManager" /* 7937 */;
import MediaSourceUtil from "MediaSourceUtil" /* 7939 */;
import MediaViewerDimensionsContext from "MediaViewerDimensionsContext" /* 7968 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9442 */;
import useMediaModalFooterAction from "useMediaModalFooterAction" /* 10931 */;
import useOverlayLayoutDriver from "useOverlayLayoutDriver" /* 12763 */;
import MediaViewerThumbnailsDefault from "MediaViewerThumbnails" /* 12764 */;
import MediaModalOverlayHeader from "MediaModalOverlayHeader" /* 12766 */;
import MediaModalOverlayAltTextDefault from "MediaModalOverlayAltText" /* 12770 */;
import MediaModalOverlayFooterAction from "MediaModalOverlayFooterAction" /* 12771 */;
import MediaModalOverlayFooter from "MediaModalOverlayFooter" /* 12772 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const useVideoControlsDefault = useVideoControls;

require = fn;
let closure_3 = ["onIndexChange"];
get_ActivityIndicator = fn(17);
const StyleSheet = get_ActivityIndicator.StyleSheet;
const View = get_ActivityIndicator.View;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4890);
let obj = { portraitFooterButtons: null, invisibleFooter: null, overlayIcons: null, overlayButtonIcon: null, overlayButton: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.top = undefined;
obj3.backgroundColor = "transparent";
obj.portraitFooterButtons = obj3;
obj.invisibleFooter = { paddingBottom: nativeDefault.space.PX_8 };
let rect = { position: "absolute", top: -40, right: 8, display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_4 };
obj.overlayIcons = rect;
obj.overlayButtonIcon = { width: 20, height: 20 };
obj.overlayButton = { width: 32, height: 32, backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: 16 };
let closure_12 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((onToggleMute) => {
  const cResult = c.c(6);
  onToggleMute = onToggleMute.onToggleMute;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.w4m945);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  const tmp7Result = importDefault(onToggleMute.isMuted ? 12760 : 9694);
  if (cResult[1] === onToggleMute) {
    if (cResult[2] === tmp4.overlayButton) {
      if (cResult[3] === tmp4.overlayButtonIcon) {
        if (cResult[4] === tmp7Result) {
          let tmp9 = cResult[5];
        }
        return tmp9;
      }
    }
  }
  const rect = { left: true, right: true, children: null };
  const obj2 = { accessibilityRole: "button", accessibilityLabel: first, source: tmp7Result, color: null, onPress: null, style: null, iconStyle: null };
  obj2.color = nativeDefault.unsafe_rawColors.WHITE;
  obj2.onPress = onToggleMute;
  ({ overlayButton: obj3.style, overlayButtonIcon: obj3.iconStyle } = tmp4);
  rect.children = options(TouchableHitBoxDefault, obj2);
  const tmp11 = options(common_SafeAreaView.SafeAreaPaddingView, rect);
  cResult[1] = onToggleMute;
  cResult[2] = tmp4.overlayButton;
  cResult[3] = tmp4.overlayButtonIcon;
  cResult[4] = tmp7Result;
  cResult[5] = tmp11;
  tmp9 = tmp11;
  const tmp7Result2 = TouchableHitBoxDefault;
}) : ((arg0) => {
  ({ isMuted, onToggleMute } = arg0);
  const obj = { accessibilityRole: "button", accessibilityLabel: null, source: null, color: null, onPress: null, style: null, iconStyle: null };
  const tmp = closure_12();
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.w4m945);
  const rect = { left: true, right: true, children: null };
  obj.source = importDefault(isMuted ? 12760 : 9694);
  obj.color = nativeDefault.unsafe_rawColors.WHITE;
  obj.onPress = onToggleMute;
  ({ overlayButton: obj.style, overlayButtonIcon: obj.iconStyle } = tmp);
  rect.children = options(TouchableHitBoxDefault, obj);
  return options(common_SafeAreaView.SafeAreaPaddingView, rect);
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((onToggleObscure) => {
  const cResult = c.c(6);
  onToggleObscure = onToggleObscure.onToggleObscure;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.UIsxUw);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  const tmp7Result = importDefault(onToggleObscure.spoilerActive ? 12761 : 12762);
  if (cResult[1] === onToggleObscure) {
    if (cResult[2] === tmp4.overlayButton) {
      if (cResult[3] === tmp4.overlayButtonIcon) {
        if (cResult[4] === tmp7Result) {
          let tmp9 = cResult[5];
        }
        return tmp9;
      }
    }
  }
  const rect = { left: true, right: true, children: null };
  const obj2 = { accessibilityRole: "button", accessibilityLabel: first, source: tmp7Result, color: null, onPress: null, style: null, iconStyle: null };
  obj2.color = nativeDefault.unsafe_rawColors.WHITE;
  obj2.onPress = onToggleObscure;
  ({ overlayButton: obj3.style, overlayButtonIcon: obj3.iconStyle } = tmp4);
  rect.children = options(TouchableHitBoxDefault, obj2);
  const tmp11 = options(common_SafeAreaView.SafeAreaPaddingView, rect);
  cResult[1] = onToggleObscure;
  cResult[2] = tmp4.overlayButton;
  cResult[3] = tmp4.overlayButtonIcon;
  cResult[4] = tmp7Result;
  cResult[5] = tmp11;
  tmp9 = tmp11;
  const tmp7Result2 = TouchableHitBoxDefault;
}) : ((arg0) => {
  ({ spoilerActive, onToggleObscure } = arg0);
  const obj = { accessibilityRole: "button", accessibilityLabel: null, source: null, color: null, onPress: null, style: null, iconStyle: null };
  const tmp = closure_12();
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.UIsxUw);
  const rect = { left: true, right: true, children: null };
  obj.source = importDefault(spoilerActive ? 12761 : 12762);
  obj.color = nativeDefault.unsafe_rawColors.WHITE;
  obj.onPress = onToggleObscure;
  ({ overlayButton: obj.style, overlayButtonIcon: obj.iconStyle } = tmp);
  rect.children = options(TouchableHitBoxDefault, obj);
  return options(common_SafeAreaView.SafeAreaPaddingView, rect);
});
ReactCompilerGating = fn(558);
let closure_15 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(49);
  ({ slider, onClose, overlayEnabled, syncer, disableDownload, disableMediaOverlayButton, disableMediaOverlayFooter, shareable, contextName, contextIcon, source, obscure, spoilerActive, toggleObscure } = arg0);
  closure_12();
  const overlayLayoutDriver = useOverlayLayoutDriver.useOverlayLayoutDriver();
  const footerLayoutAnimation = useOverlayLayoutDriver.useFooterLayoutAnimation(overlayLayoutDriver);
  _slicedToArray(noop.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(isMuted) {
      return isMuted.isMuted;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  const mediaPlayerMutedStore = MediaPlayerMuteManager.useMediaPlayerMutedStore(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor(arg0) {
        return arg0.footerAction;
      }
    }
    cResult[1] = N;
  } else {
    class N {
      constructor(arg0) {
        return arg0.footerAction;
      }
    }
  }
  const tmpResult = MediaPlayerMuteManager;
  const mediaModalFooterActionStore = useMediaModalFooterAction.useMediaModalFooterActionStore(N);
  if (cResult[2] === slider) {
    class N {
      constructor(arg0) {
        return arg0.footerAction;
      }
    }
    MediaViewerDimensionsContext.useMediaViewerDimensions().height < 600;
    if (cResult[5] === overlayLayoutDriver) {
      class N {
        constructor(arg0) {
          return arg0.footerAction;
        }
      }
    }
    const obj4 = { animationDriver: overlayLayoutDriver, disableDownload, disableMediaOverlayButton, source, shareable, contextName, contextIcon, onClose, channelId: source.channelId };
    const tmp22 = options(MediaModalOverlayHeader.MediaModalOverlayHeader, obj4);
    cResult[5] = overlayLayoutDriver;
    cResult[6] = contextIcon;
    cResult[7] = contextName;
    cResult[8] = disableDownload;
    cResult[9] = disableMediaOverlayButton;
    cResult[10] = onClose;
    cResult[11] = shareable;
    cResult[12] = source;
    cResult[13] = tmp22;
    const tmpResult5 = MediaViewerDimensionsContext;
  }
  if (null != slider) {
    class N {
      constructor(arg0) {
        return arg0.footerAction;
      }
    }
    const rect = { bottom: true, left: true, right: true, style: { paddingTop: 8 }, children: null };
    let isIOSResult = PlatformUtils.isIOS();
    if (isIOSResult) {
      class N {
        constructor(arg0) {
          return arg0.footerAction;
        }
      }
      const obj5 = { blurTheme: "dark", style: StyleSheet.absoluteFill };
      isIOSResult = options(VisualEffectViewDefault, obj5);
    }
    const items = [isIOSResult, slider, ];
    let tmp17 = null;
    if (syncer.sources.length > 1) {
      class N {
        constructor(arg0) {
          return arg0.footerAction;
        }
      }
      const obj6 = { syncer };
      tmp17 = options(MediaViewerThumbnailsDefault, obj6);
    }
    items[2] = tmp17;
    rect.children = items;
    let tmp13Result = tmp13(common_SafeAreaView.SafeAreaPaddingView, rect);
    const tmpResult6 = PlatformUtils;
  } else {
    class N {
      constructor(arg0) {
        return arg0.footerAction;
      }
    }
    tmp13Result = null;
  }
  cResult[2] = slider;
  cResult[3] = syncer;
  cResult[4] = tmp13Result;
  const tmpResult4 = useMediaModalFooterAction;
}) : ((arg0) => {
  ({ slider, onClose, syncer, source, obscure } = arg0);
  ({ overlayEnabled, disableDownload, disableMediaOverlayButton, disableMediaOverlayFooter, shareable, contextName, contextIcon, spoilerActive, toggleObscure } = arg0);
  const tmp = closure_12();
  const overlayLayoutDriver = useOverlayLayoutDriver.useOverlayLayoutDriver();
  const footerLayoutAnimation = useOverlayLayoutDriver.useFooterLayoutAnimation(overlayLayoutDriver);
  [tmp7, tmp8] = noop.useState(false);
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  const mediaPlayerMutedStore = MediaPlayerMuteManager.useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const mediaModalFooterActionStore = useMediaModalFooterAction.useMediaModalFooterActionStore((footerAction) => footerAction.footerAction);
  if (null != slider) {
    const rect = { bottom: true, left: true, right: true, style: { paddingTop: 8 }, children: null };
    let isIOSResult = PlatformUtils.isIOS();
    if (isIOSResult) {
      const obj5 = { blurTheme: "dark", style: StyleSheet.absoluteFill };
      isIOSResult = options(VisualEffectViewDefault, obj5);
    }
    const items = [isIOSResult, slider, ];
    let tmp17 = null;
    if (syncer.sources.length > 1) {
      const obj6 = { syncer };
      tmp17 = options(MediaViewerThumbnailsDefault, obj6);
    }
    items[2] = tmp17;
    rect.children = items;
    let tmp22Result5 = v65535(common_SafeAreaView.SafeAreaPaddingView, rect);
    const tmp2Result = PlatformUtils;
  } else {
    tmp22Result5 = null;
  }
  const items1 = [options(MediaModalOverlayHeader.MediaModalOverlayHeader, { animationDriver: overlayLayoutDriver, disableDownload, disableMediaOverlayButton, source, shareable, contextName, contextIcon, onClose, channelId: source.channelId }), ];
  const obj8 = { style: null, children: null };
  const items2 = [tmp.portraitFooterButtons, footerLayoutAnimation];
  obj8.style = items2;
  let tmp22Result = !tmp7;
  if (!tmp7) {
    const obj9 = { description: source.description };
    tmp22Result = options(MediaModalOverlayAltTextDefault, obj9);
  }
  const items3 = [tmp22Result, , ];
  if (null != slider) {
    const obj10 = { style: tmp.overlayIcons, children: null };
    let tmp22Result3 = null != slider;
    if (tmp22Result3) {
      const obj11 = { isMuted: mediaPlayerMutedStore, onToggleMute: useVideoControls.toggleMuted };
      tmp22Result3 = options(closure_13, obj11);
    }
    const items4 = [tmp22Result3, ];
    let tmp22Result4 = null;
    if (obscure) {
      const obj12 = { spoilerActive, onToggleObscure: toggleObscure };
      tmp22Result4 = options(closure_14, obj12);
    }
    items4[1] = tmp22Result4;
    obj10.children = items4;
    let tmp20Result = v65535(View, obj10);
  } else {
    tmp20Result = null;
  }
  items3[1] = tmp20Result;
  if (null != mediaModalFooterActionStore) {
    const obj13 = { footerAction: mediaModalFooterActionStore, sliderElement: slider, syncer };
    tmp22Result5 = options(MediaModalOverlayFooterAction.MediaModalOverlayFooterAction, obj13);
  } else if (disableMediaOverlayFooter) {
    const obj14 = { bottom: true, style: tmp.invisibleFooter };
    tmp22Result5 = options(common_SafeAreaView.SafeAreaPaddingView, obj14);
  } else if (tmp2Result2.useMediaViewerDimensions().height >= 600) {
    const obj15 = { sliderElement: slider, syncer, guildId: null, channelId: null, messageId: null, onClose: null, onFullViewToggled: null, overlayEnabled: null };
    ({ guildId: obj16.guildId, channelId: obj16.channelId, messageId: obj16.messageId } = source);
    obj15.onClose = onClose;
    obj15.onFullViewToggled = tmp8;
    obj15.overlayEnabled = overlayEnabled;
    tmp22Result5 = options(MediaModalOverlayFooter.MediaModalOverlayFooter, obj15);
  }
  const obj17 = { children: null };
  items3[2] = tmp22Result5;
  obj8.children = items3;
  items1[1] = v65535(ReanimatedRexportDefault.View, obj8);
  obj17.children = items1;
  return v65535(closure_1_11, obj17);
}));
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = index(576).c(16);
  ({ getVideoControls, source, index } = arg0);
  if (cResult[0] === getVideoControls) {
    if (cResult[1] === index) {
      if (cResult[2] === source) {
        let tmp4 = cResult[3];
      }
      importDefault = tmp4;
      const tmp7 = useVideoControlsDefault(index, source, tmp4);
      const first = _slicedToArray(index(12765).useMediaItemSpoilerState(index), 1)[0];
      if (cResult[4] !== index) {
        const fn = function b() {
          return useMediaViewerSources.toggleSpoiler(index);
        };
        cResult[4] = index;
        cResult[5] = fn;
        let tmp11 = fn;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== tmp4) {
        class S {
          constructor() {
            obj = closure_0(closure_2[25]);
            result = obj.setVideoStateControls(closure_1);
            return;
          }
        }
        const items = [tmp4];
        cResult[6] = tmp4;
        cResult[7] = S;
        cResult[8] = items;
        let tmp13 = items;
      } else {
        class S {
          constructor() {
            obj = closure_0(closure_2[25]);
            result = obj.setVideoStateControls(closure_1);
            return;
          }
        }
        tmp13 = cResult[8];
      }
      const effect = noop.useEffect(S, tmp13);
      const obscure = source.obscure;
      if (obscure == null) {
        class S {
          constructor() {
            obj = closure_0(closure_2[25]);
            result = obj.setVideoStateControls(closure_1);
            return;
          }
        }
      }
      if (cResult[9] === arg0) {
        class S {
          constructor() {
            obj = closure_0(closure_2[25]);
            result = obj.setVideoStateControls(closure_1);
            return;
          }
        }
      }
      const obj2 = {};
      const merged = Object.assign(arg0);
      obj2.slider = tmp7;
      obj2.source = source;
      obj2.obscure = obscure;
      obj2.spoilerActive = first;
      obj2.toggleObscure = tmp11;
      const tmp23 = closure_9(closure_15, obj2);
      cResult[9] = arg0;
      cResult[10] = tmp7;
      cResult[11] = source;
      cResult[12] = first;
      cResult[13] = obscure;
      cResult[14] = tmp11;
      cResult[15] = tmp23;
      const tmpResult = index(12765);
    }
  }
  const videoControls = getVideoControls(index, source);
  cResult[0] = getVideoControls;
  cResult[1] = index;
  cResult[2] = source;
  cResult[3] = videoControls;
  tmp4 = videoControls;
  const obj = index(576);
}) : ((getVideoControls) => {
  ({ source, index } = getVideoControls);
  const videoControls = getVideoControls.getVideoControls(index, source);
  const tmp2 = videoControls(7936)(index, source, videoControls);
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
  obj2.spoilerActive = _slicedToArray(index(12765).useMediaItemSpoilerState(index), 1)[0];
  obj2.toggleObscure = callback;
  return closure_9(closure_15, obj2);
});
ReactCompilerGating = fn(558);
let obj4 = { paddingBottom: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onIndexChange) => {
  const cResult = c.c(11);
  if (cResult[0] !== onIndexChange) {
    onIndexChange = onIndexChange.onIndexChange;
    closure_0 = onIndexChange;
    const tmp8 = _objectWithoutProperties(onIndexChange, closure_3);
    cResult[0] = onIndexChange;
    cResult[1] = onIndexChange;
    cResult[2] = tmp8;
    let tmp5 = tmp8;
  } else {
    closure_0 = cResult[1];
    tmp5 = cResult[2];
  }
  [index] = MediaSourceUtil.useSelectedMediaSource(tmp5.syncer);
  if (cResult[3] === index) {
    if (cResult[4] === tmp4) {
      let tmp12 = cResult[5];
      let tmp13 = cResult[6];
    }
    const effect = noop.useEffect(tmp12, tmp13);
    if (null == tmp11) {
      return null;
    } else {
      if (cResult[7] === index) {
        if (cResult[8] === tmp5) {
        }
      }
      const obj2 = {};
      const merged = Object.assign(tmp5);
      obj2.source = tmp11;
      obj2.index = index;
      const tmp23 = options(closure_16, obj2);
      cResult[7] = index;
      cResult[8] = tmp5;
      cResult[9] = tmp11;
      cResult[10] = tmp23;
    }
  }
  const fn = function b() {
    if (closure_0 != null) {
      tmp(first);
    }
  };
  const items = [index, tmp4];
  cResult[3] = index;
  cResult[4] = tmp4;
  cResult[5] = fn;
  cResult[6] = items;
  tmp13 = items;
  tmp12 = fn;
  const tmpResult = MediaSourceUtil;
}) : ((onIndexChange) => {
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
    tmp = options(closure_16, obj2);
  }
  return tmp;
});