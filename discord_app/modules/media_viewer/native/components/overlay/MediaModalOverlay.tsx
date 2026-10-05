// === Module 12759: MediaModalOverlay ===

// Module 12759 (MediaModalOverlay)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
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
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const useVideoControlsDefault = useVideoControls;
let importDefault, onIndexChange;

let c10;
let c9;
let obj2;
let obj3;
let rect;
let unpackModuleId;
let closure_3 = ["onIndexChange"];
const StyleSheet = react_native.StyleSheet;
let View = react_native.View;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { portraitFooterButtons: obj2, invisibleFooter: obj3, overlayIcons: rect, overlayButtonIcon: { width: 20, height: 20 }, overlayButton: { width: 32, height: 32, backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: 16 } };
obj2 = { top: undefined, backgroundColor: "transparent" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { paddingBottom: nativeDefault.space.PX_8 };
rect = { position: "absolute", top: -40, right: 8, display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_4 };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((onToggleMute) => {
  let first;
  let obj2;
  let tmp7Result2;
  const obj = react2;
  const cResult = obj.c(6);
  onToggleMute = onToggleMute.onToggleMute;
  const isMuted = onToggleMute.isMuted;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.w4m945);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  const tmp7Result = importDefault(isMuted ? 12760 : 9694);
  if (cResult[1] === onToggleMute) {
    if (cResult[2] === tmp4.overlayButton) {
      if (cResult[3] === tmp4.overlayButtonIcon) {
        let tmp9;
        if (cResult[4] === tmp7Result) {
          tmp9 = cResult[5];
        }
        return tmp9;
      }
    }
  }
  const rect = { left: true, right: true, children: React4(tmp7Result2, obj2) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj2 = { accessibilityRole: "button", accessibilityLabel: first, source: tmp7Result, color: nativeDefault.unsafe_rawColors.WHITE, onPress: onToggleMute, style: null, iconStyle: null };
  ({ overlayButton: obj3.style, overlayButtonIcon: obj3.iconStyle } = tmp4);
  tmp7Result2 = TouchableHitBoxDefault;
  const tmp11 = React4(SafeAreaPaddingView, rect);
  cResult[1] = onToggleMute;
  cResult[2] = tmp4.overlayButton;
  cResult[3] = tmp4.overlayButtonIcon;
  cResult[4] = tmp7Result;
  cResult[5] = tmp11;
  tmp9 = tmp11;
}) : ((arg0) => {
  let intl;
  let isMuted;
  let onToggleMute;
  ({ isMuted, onToggleMute } = arg0);
  const tmp = closure_12();
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  const obj = { accessibilityRole: "button", accessibilityLabel: intl.string(intl2.t.w4m945), source: importDefault(isMuted ? 12760 : 9694), color: nativeDefault.unsafe_rawColors.WHITE, onPress: onToggleMute, style: null, iconStyle: null };
  const tmp5 = TouchableHitBoxDefault;
  intl = intl2.intl;
  const rect = { left: true, right: true, children: React4(tmp5, obj) };
  ({ overlayButton: obj.style, overlayButtonIcon: obj.iconStyle } = tmp);
  return React4(SafeAreaPaddingView, rect);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((onToggleObscure) => {
  let first;
  let obj2;
  let tmp7Result2;
  const obj = react2;
  const cResult = obj.c(6);
  onToggleObscure = onToggleObscure.onToggleObscure;
  const spoilerActive = onToggleObscure.spoilerActive;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl2.intl;
    const stringResult = intl.string(intl2.t.UIsxUw);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  const tmp7Result = importDefault(spoilerActive ? 12761 : 12762);
  if (cResult[1] === onToggleObscure) {
    if (cResult[2] === tmp4.overlayButton) {
      if (cResult[3] === tmp4.overlayButtonIcon) {
        let tmp9;
        if (cResult[4] === tmp7Result) {
          tmp9 = cResult[5];
        }
        return tmp9;
      }
    }
  }
  const rect = { left: true, right: true, children: React4(tmp7Result2, obj2) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj2 = { accessibilityRole: "button", accessibilityLabel: first, source: tmp7Result, color: nativeDefault.unsafe_rawColors.WHITE, onPress: onToggleObscure, style: null, iconStyle: null };
  ({ overlayButton: obj3.style, overlayButtonIcon: obj3.iconStyle } = tmp4);
  tmp7Result2 = TouchableHitBoxDefault;
  const tmp11 = React4(SafeAreaPaddingView, rect);
  cResult[1] = onToggleObscure;
  cResult[2] = tmp4.overlayButton;
  cResult[3] = tmp4.overlayButtonIcon;
  cResult[4] = tmp7Result;
  cResult[5] = tmp11;
  tmp9 = tmp11;
}) : ((arg0) => {
  let intl;
  let onToggleObscure;
  let spoilerActive;
  ({ spoilerActive, onToggleObscure } = arg0);
  const tmp = closure_12();
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  const obj = { accessibilityRole: "button", accessibilityLabel: intl.string(intl2.t.UIsxUw), source: importDefault(spoilerActive ? 12761 : 12762), color: nativeDefault.unsafe_rawColors.WHITE, onPress: onToggleObscure, style: null, iconStyle: null };
  const tmp5 = TouchableHitBoxDefault;
  intl = intl2.intl;
  const rect = { left: true, right: true, children: React4(tmp5, obj) };
  ({ overlayButton: obj.style, overlayButtonIcon: obj.iconStyle } = tmp);
  return React4(SafeAreaPaddingView, rect);
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let contextIcon;
  let contextName;
  let disableDownload;
  let disableMediaOverlayButton;
  let disableMediaOverlayFooter;
  let first;
  let items;
  let obscure;
  let onClose;
  let overlayEnabled;
  let shareable;
  let slider;
  let source;
  let spoilerActive;
  let syncer;
  let tmp13Result;
  let toggleObscure;
  const obj = react2;
  const cResult = obj.c(49);
  ({ slider, onClose, overlayEnabled, syncer, disableDownload, disableMediaOverlayButton, disableMediaOverlayFooter, shareable, contextName, contextIcon, source, obscure, spoilerActive, toggleObscure } = arg0);
  closure_12();
  const obj2 = useOverlayLayoutDriver;
  const overlayLayoutDriver = obj2.useOverlayLayoutDriver();
  const obj3 = useOverlayLayoutDriver;
  const footerLayoutAnimation = obj3.useFooterLayoutAnimation(overlayLayoutDriver);
  _slicedToArray(react.useState(false), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(isMuted) {
      return isMuted.isMuted;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = MediaPlayerMuteManager;
  const mediaPlayerMutedStore = tmpResult.useMediaPlayerMutedStore(first);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor(footerAction) {
        return footerAction.footerAction;
      }
    }
    cResult[1] = N;
  } else {
    class N {
      constructor(footerAction) {
        return footerAction.footerAction;
      }
    }
  }
  const tmpResult4 = useMediaModalFooterAction;
  const mediaModalFooterActionStore = tmpResult4.useMediaModalFooterActionStore(N);
  if (cResult[2] === slider) {
    class N {
      constructor(footerAction) {
        return footerAction.footerAction;
      }
    }
    const tmpResult5 = MediaViewerDimensionsContext;
    tmpResult5.useMediaViewerDimensions().height < 600;
    if (cResult[5] === overlayLayoutDriver) {
      class N {
        constructor(footerAction) {
          return footerAction.footerAction;
        }
      }
    }
    const obj4 = { animationDriver: overlayLayoutDriver, disableDownload, disableMediaOverlayButton, source, shareable, contextName, contextIcon, onClose, channelId: source.channelId };
    cResult[5] = overlayLayoutDriver;
    cResult[6] = contextIcon;
    cResult[7] = contextName;
    cResult[8] = disableDownload;
    cResult[9] = disableMediaOverlayButton;
    cResult[10] = onClose;
    cResult[11] = shareable;
    cResult[12] = source;
    cResult[13] = React4(MediaModalOverlayHeader.MediaModalOverlayHeader, obj4);
    const tmp22 = React4(MediaModalOverlayHeader.MediaModalOverlayHeader, obj4);
  }
  if (null != slider) {
    class N {
      constructor(footerAction) {
        return footerAction.footerAction;
      }
    }
    const rect = { bottom: true, left: true, right: true, style: { paddingTop: 8 }, children: items };
    const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
    const tmpResult6 = PlatformUtils;
    let isIOSResult = tmpResult6.isIOS();
    if (isIOSResult) {
      class N {
        constructor(footerAction) {
          return footerAction.footerAction;
        }
      }
      const obj5 = { blurTheme: "dark", style: StyleSheet.absoluteFill };
      isIOSResult = React4(VisualEffectViewDefault, obj5);
    }
    items = [isIOSResult, slider, ];
    let tmp17 = null;
    if (syncer.sources.length > 1) {
      class N {
        constructor(footerAction) {
          return footerAction.footerAction;
        }
      }
      const obj6 = { syncer };
      tmp17 = React4(MediaViewerThumbnailsDefault, obj6);
    }
    items[2] = tmp17;
    tmp13Result = tmp13(SafeAreaPaddingView, rect);
  } else {
    class N {
      constructor(footerAction) {
        return footerAction.footerAction;
      }
    }
    tmp13Result = null;
  }
  cResult[2] = slider;
  cResult[3] = syncer;
  cResult[4] = tmp13Result;
}) : ((arg0) => {
  let contextIcon;
  let contextName;
  let disableDownload;
  let disableMediaOverlayButton;
  let disableMediaOverlayFooter;
  let items;
  let items2;
  let items3;
  let items4;
  let obscure;
  let onClose;
  let overlayEnabled;
  let shareable;
  let slider;
  let source;
  let spoilerActive;
  let syncer;
  let tmp20Result;
  let tmp22Result5;
  let tmp7;
  let tmp8;
  let toggleObscure;
  ({ slider, onClose, syncer, source, obscure } = arg0);
  ({ overlayEnabled, disableDownload, disableMediaOverlayButton, disableMediaOverlayFooter, shareable, contextName, contextIcon, spoilerActive, toggleObscure } = arg0);
  const tmp = closure_12();
  const obj = useOverlayLayoutDriver;
  const overlayLayoutDriver = obj.useOverlayLayoutDriver();
  const obj2 = useOverlayLayoutDriver;
  const footerLayoutAnimation = obj2.useFooterLayoutAnimation(overlayLayoutDriver);
  [tmp7, tmp8] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const obj3 = MediaPlayerMuteManager;
  const mediaPlayerMutedStore = obj3.useMediaPlayerMutedStore((isMuted) => isMuted.isMuted);
  const obj4 = useMediaModalFooterAction;
  const mediaModalFooterActionStore = obj4.useMediaModalFooterActionStore((footerAction) => footerAction.footerAction);
  if (null != slider) {
    const rect = { bottom: true, left: true, right: true, style: { paddingTop: 8 }, children: items };
    const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
    const tmp2Result = PlatformUtils;
    let isIOSResult = tmp2Result.isIOS();
    if (isIOSResult) {
      const obj5 = { blurTheme: "dark", style: StyleSheet.absoluteFill };
      isIOSResult = React4(VisualEffectViewDefault, obj5);
    }
    items = [isIOSResult, slider, ];
    let tmp17 = null;
    if (syncer.sources.length > 1) {
      const obj6 = { syncer };
      tmp17 = React4(MediaViewerThumbnailsDefault, obj6);
    }
    items[2] = tmp17;
    tmp22Result5 = authStore(SafeAreaPaddingView, rect);
  } else {
    tmp22Result5 = null;
  }
  const tmp2Result2 = MediaViewerDimensionsContext;
  const height = tmp2Result2.useMediaViewerDimensions().height;
  const items1 = [, ];
  const obj7 = { animationDriver: overlayLayoutDriver, disableDownload, disableMediaOverlayButton, source, shareable, contextName, contextIcon, onClose, channelId: source.channelId };
  items1[0] = React4(MediaModalOverlayHeader.MediaModalOverlayHeader, obj7);
  const obj8 = { style: items2, children: items3 };
  items2 = [tmp.portraitFooterButtons, footerLayoutAnimation];
  let tmp22Result = !tmp7;
  View = ReanimatedRexportDefault.View;
  if (!tmp7) {
    const obj9 = { description: source.description };
    tmp22Result = React4(MediaModalOverlayAltTextDefault, obj9);
  }
  items3 = [tmp22Result, , ];
  if (null != slider) {
    let tmp22Result3 = null != slider;
    const obj10 = { style: tmp.overlayIcons, children: items4 };
    const tmp26 = View;
    if (tmp22Result3) {
      const obj11 = { isMuted: mediaPlayerMutedStore, onToggleMute: useVideoControls.toggleMuted };
      tmp22Result3 = React4(closure_13, obj11);
    }
    items4 = [tmp22Result3, ];
    let tmp22Result4 = null;
    if (obscure) {
      const obj12 = { spoilerActive, onToggleObscure: toggleObscure };
      tmp22Result4 = React4(closure_14, obj12);
    }
    items4[1] = tmp22Result4;
    tmp20Result = authStore(tmp26, obj10);
  } else {
    tmp20Result = null;
  }
  items3[1] = tmp20Result;
  if (null != mediaModalFooterActionStore) {
    const obj13 = { footerAction: mediaModalFooterActionStore, sliderElement: slider, syncer };
    tmp22Result5 = React4(MediaModalOverlayFooterAction.MediaModalOverlayFooterAction, obj13);
  } else if (disableMediaOverlayFooter) {
    const obj14 = { bottom: true, style: tmp.invisibleFooter };
    tmp22Result5 = React4(common_SafeAreaView.SafeAreaPaddingView, obj14);
  } else if (height >= 600) {
    const obj15 = { sliderElement: slider, syncer, guildId: null, channelId: null, messageId: null, onClose, onFullViewToggled: tmp8, overlayEnabled };
    ({ guildId: obj16.guildId, channelId: obj16.channelId, messageId: obj16.messageId } = source);
    tmp22Result5 = React4(MediaModalOverlayFooter.MediaModalOverlayFooter, obj15);
  }
  const obj17 = { children: items1 };
  items3[2] = tmp22Result5;
  items1[1] = authStore(View, obj8);
  return authStore(unpackModuleId, obj17);
}));
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_1;
  let getVideoControls;
  let index;
  let source;
  let obj = index(576);
  const cResult = obj.c(16);
  ({ getVideoControls, source, index } = arg0);
  if (cResult[0] === getVideoControls) {
    if (cResult[1] === index) {
      let tmp4;
      let tmp11;
      let tmp13;
      if (cResult[2] === source) {
        tmp4 = cResult[3];
      }
      importDefault = tmp4;
      const tmp7 = useVideoControlsDefault(index, source, tmp4);
      const tmpResult = index(12765);
      const first = _slicedToArray(tmpResult.useMediaItemSpoilerState(index), 1)[0];
      if (cResult[4] !== index) {
        const fn = function b() {
          const obj = useMediaViewerSources;
          return obj.toggleSpoiler(index);
        };
        cResult[4] = index;
        cResult[5] = fn;
        tmp11 = fn;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== tmp4) {
        class S {
          constructor() {
            const obj = useVideoControls;
            const result = obj.setVideoStateControls(closure_1);
          }
        }
        const items = [tmp4];
        cResult[6] = tmp4;
        cResult[7] = S;
        cResult[8] = items;
        tmp13 = items;
      } else {
        class S {
          constructor() {
            const obj = useVideoControls;
            const result = obj.setVideoStateControls(closure_1);
          }
        }
        tmp13 = cResult[8];
      }
      const effect = react.useEffect(S, tmp13);
      const obscure = source.obscure;
      if (obscure == null) {
        class S {
          constructor() {
            const obj = useVideoControls;
            const result = obj.setVideoStateControls(closure_1);
          }
        }
      }
      if (cResult[9] === arg0) {
        class S {
          constructor() {
            const obj = useVideoControls;
            const result = obj.setVideoStateControls(closure_1);
          }
        }
      }
      const obj2 = { slider: tmp7, source, obscure, spoilerActive: first, toggleObscure: tmp11 };
      const merged = Object.assign(arg0);
      cResult[9] = arg0;
      cResult[10] = tmp7;
      cResult[11] = source;
      cResult[12] = first;
      cResult[13] = obscure;
      cResult[14] = tmp11;
      cResult[15] = closure_9(closure_15, obj2);
      const tmp23 = closure_9(closure_15, obj2);
    }
  }
  const videoControls = getVideoControls(index, source);
  cResult[0] = getVideoControls;
  cResult[1] = index;
  cResult[2] = source;
  cResult[3] = videoControls;
  tmp4 = videoControls;
}) : ((getVideoControls) => {
  let flag;
  let index;
  let source;
  ({ source, index } = getVideoControls);
  const videoControls = getVideoControls.getVideoControls(index, source);
  const tmp2 = videoControls(7936)(index, source, videoControls);
  let obj = index(12765);
  const items = [index];
  const first = _slicedToArray(obj.useMediaItemSpoilerState(index), 1)[0];
  const items1 = [videoControls];
  const callback = react.useCallback(() => {
    const obj = useMediaViewerSources;
    return obj.toggleSpoiler(index);
  }, items);
  const effect = react.useEffect(() => {
    const obj = useVideoControls;
    const result = obj.setVideoStateControls(videoControls);
  }, items1);
  const obj2 = { slider: tmp2, source, obscure: flag, spoilerActive: first, toggleObscure: callback };
  const merged = Object.assign(getVideoControls);
  flag = source.obscure;
  if (flag == null) {
    flag = false;
  }
  return closure_9(closure_15, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((onIndexChange) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(11);
  if (cResult[0] !== onIndexChange) {
    onIndexChange = onIndexChange.onIndexChange;
    let closure_0 = onIndexChange;
    const tmp8 = _objectWithoutProperties(onIndexChange, closure_3);
    cResult[0] = onIndexChange;
    cResult[1] = onIndexChange;
    cResult[2] = tmp8;
    tmp5 = tmp8;
  } else {
    closure_0 = cResult[1];
    tmp5 = cResult[2];
  }
  const syncer = tmp5.syncer;
  const tmpResult = MediaSourceUtil;
  const tmp9 = _slicedToArray(tmpResult.useSelectedMediaSource(syncer), 2);
  const first = tmp9[0];
  if (cResult[3] === first) {
    let tmp12;
    let tmp13;
    if (cResult[4] === tmp4) {
      tmp12 = cResult[5];
      tmp13 = cResult[6];
    }
    const effect = react.useEffect(tmp12, tmp13);
    let tmp16 = null;
    if (null != tmp9[1]) {
      if (cResult[7] === first) {
        if (cResult[8] === tmp5) {
          let tmp17;
          if (cResult[9] === tmp9[1]) {
            tmp17 = cResult[10];
          }
          tmp16 = tmp17;
        }
      }
      const obj2 = { source: tmp9[1], index: first };
      const merged = Object.assign(tmp5);
      const tmp23 = React4(closure_16, obj2);
      cResult[7] = first;
      cResult[8] = tmp5;
      cResult[9] = tmp9[1];
      cResult[10] = tmp23;
      tmp17 = tmp23;
    }
    return tmp16;
  }
  const fn = function b() {
    if (closure_0 != null) {
      tmp(first);
    }
  };
  const items = [first, tmp4];
  cResult[3] = first;
  cResult[4] = tmp4;
  cResult[5] = fn;
  cResult[6] = items;
  tmp13 = items;
  tmp12 = fn;
}) : ((onIndexChange) => {
  onIndexChange = onIndexChange.onIndexChange;
  let tmp = null;
  const merged = Object.assign(onIndexChange, Object.assign({ onIndexChange: 0 }));
  const syncer = merged.syncer;
  const obj = MediaSourceUtil;
  const tmp3 = _slicedToArray(obj.useSelectedMediaSource(syncer), 2);
  const first = tmp3[0];
  const items = [first, onIndexChange];
  const effect = react.useEffect(() => {
    if (onIndexChange != null) {
      tmp(first);
    }
  }, items);
  if (null != tmp3[1]) {
    const obj2 = { source: tmp3[1], index: first };
    const merged1 = Object.assign(merged);
    tmp = React4(closure_16, obj2);
  }
  return tmp;
});
let result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlay.tsx");

export default tmp7;