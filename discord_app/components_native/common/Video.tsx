// discord_app/components_native/common/Video.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../intl/index.native.tsx";
import FastImageDefault from "FastImage.tsx";
import RunAfterInteractionsUtils from "../../utils/native/RunAfterInteractionsUtils.tsx";
import openMediaModal from "../../modules/media_viewer/native/components/openMediaModal.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableWithoutFeedback: hasOwnProperty, View: metroRequire, AppState: closure_7 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let obj2 = { container: { flex: 1, shadowColor: nativeDefault.unsafe_rawColors.BLACK, shadowOpacity: 0.5, shadowOffset: { height: 1, width: 0 }, shadowRadius: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND }, video: null };
let obj3 = { flex: 1, shadowColor: nativeDefault.unsafe_rawColors.BLACK, shadowOpacity: 0.5, shadowOffset: { height: 1, width: 0 }, shadowRadius: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj2.video = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_9 = createStyles.createLegacyClassComponentStyles(obj2);
const ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function VideoComponent(arg0) {
  const cResult = require("c").c(25);
  ({ style, source, poster, onLoadStart, onLoad, onReadyForDisplay, onError, onEnd, paused, muted, posterResizeMode, resizeMode, disableFocus, controls, ariaHidden, mixWithOthers, importantForAccessibility, pauseWhileAppInactive, playInBackground, preventsDisplaySleepDuringVideoPlayback, httpEngine } = arg0);
  let tmp4 = undefined !== paused && paused;
  let str = "contain";
  let str2 = "contain";
  if (undefined !== posterResizeMode) {
    str2 = posterResizeMode;
  }
  if (undefined !== resizeMode) {
    str = resizeMode;
  }
  _require = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = tmp(8402);
    cResult[0] = tmpResult;
    let first = tmpResult;
  } else {
    first = cResult[0];
  }
  const obj = require("c");
  tmp = _require;
  [r10058, importDefault] = noop.useState("active" === closure_7.currentState);
  if (cResult[1] !== (undefined === pauseWhileAppInactive || pauseWhileAppInactive)) {
    class N {
      constructor() {
        if (closure_0) {
          tmp = closure_1_7;
          str = "change";
          closure_0 = closure_1_7.addEventListener("change", () => { ... });
          return () => { ... };
        } else {
          return;
        }
      }
    }
    const items = [tmp6];
    cResult[1] = tmp6;
    cResult[2] = items;
    cResult[3] = N;
    let tmp13 = N;
    const tmp12 = items;
  } else {
    class N {
      constructor() {
        if (closure_0) {
          tmp = closure_1_7;
          str = "change";
          closure_0 = closure_1_7.addEventListener("change", () => { ... });
          return () => { ... };
        } else {
          return;
        }
      }
    }
    tmp13 = cResult[3];
  }
  const effect = noop.useEffect(tmp13, tmp12);
  if (!tmp4) {
    class N {
      constructor() {
        if (closure_0) {
          tmp = closure_1_7;
          str = "change";
          closure_0 = closure_1_7.addEventListener("change", () => { ... });
          return () => { ... };
        } else {
          return;
        }
      }
    }
    tmp4 = tmp6;
  }
  if (controls != null) {
    class N {
      constructor() {
        if (closure_0) {
          tmp = closure_1_7;
          str = "change";
          closure_0 = closure_1_7.addEventListener("change", () => { ... });
          return () => { ... };
        } else {
          return;
        }
      }
    }
  }
  if (cResult[4] === ariaHidden) {
    class N {
      constructor() {
        if (closure_0) {
          tmp = closure_1_7;
          str = "change";
          closure_0 = closure_1_7.addEventListener("change", () => { ... });
          return () => { ... };
        } else {
          return;
        }
      }
    }
  }
  const merged = Object.assign(tmp15);
  const obj3 = { style, source, importantForAccessibility, poster, muted: undefined === muted || muted, paused: tmp4, posterResizeMode: str2, resizeMode: str, repeat: true, playInBackground: undefined !== playInBackground && playInBackground, pictureInPicture: false, playWhenInactive: false, onLoadStart, onLoad, onReadyForDisplay, onError, onEnd, disableFocus, "aria-hidden": ariaHidden, mixWithOthers, preventsDisplaySleepDuringVideoPlayback: undefined === preventsDisplaySleepDuringVideoPlayback || preventsDisplaySleepDuringVideoPlayback, httpEngine };
  const tmp11 = _slicedToArray(noop.useState("active" === closure_7.currentState), 2);
  cResult[4] = ariaHidden;
  cResult[5] = disableFocus;
  cResult[6] = httpEngine;
  cResult[7] = importantForAccessibility;
  cResult[8] = mixWithOthers;
  cResult[9] = undefined === muted || muted;
  cResult[10] = onEnd;
  cResult[11] = onError;
  cResult[12] = onLoad;
  cResult[13] = onLoadStart;
  cResult[14] = onReadyForDisplay;
  cResult[15] = undefined !== playInBackground && playInBackground;
  cResult[16] = poster;
  cResult[17] = str2;
  cResult[18] = undefined === preventsDisplaySleepDuringVideoPlayback || preventsDisplaySleepDuringVideoPlayback;
  cResult[19] = str;
  cResult[20] = source;
  cResult[21] = style;
  cResult[22] = tmp4;
  cResult[23] = undefined;
  cResult[24] = <first.default style={style} source={source} importantForAccessibility={importantForAccessibility} poster={poster} muted={undefined === muted || muted} paused={tmp4} posterResizeMode={str2} resizeMode={str} repeat playInBackground={undefined !== playInBackground && playInBackground} pictureInPicture={false} playWhenInactive={false} onLoadStart={onLoadStart} onLoad={onLoad} onReadyForDisplay={onReadyForDisplay} onError={onError} onEnd={onEnd} disableFocus={disableFocus} aria-hidden={ariaHidden} mixWithOthers={mixWithOthers} preventsDisplaySleepDuringVideoPlayback={undefined === preventsDisplaySleepDuringVideoPlayback || preventsDisplaySleepDuringVideoPlayback} httpEngine={httpEngine} />;
  const tmp17 = <first.default style={style} source={source} importantForAccessibility={importantForAccessibility} poster={poster} muted={undefined === muted || muted} paused={tmp4} posterResizeMode={str2} resizeMode={str} repeat playInBackground={undefined !== playInBackground && playInBackground} pictureInPicture={false} playWhenInactive={false} onLoadStart={onLoadStart} onLoad={onLoad} onReadyForDisplay={onReadyForDisplay} onError={onError} onEnd={onEnd} disableFocus={disableFocus} aria-hidden={ariaHidden} mixWithOthers={mixWithOthers} preventsDisplaySleepDuringVideoPlayback={undefined === preventsDisplaySleepDuringVideoPlayback || preventsDisplaySleepDuringVideoPlayback} httpEngine={httpEngine} />;
}) : (function VideoComponent(paused) {
  let flag = paused.paused;
  ({ style, source, poster, onLoadStart, onLoad, onReadyForDisplay, onError, onEnd } = paused);
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = paused.muted;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let str = paused.posterResizeMode;
  if (str === undefined) {
    str = "contain";
  }
  let str2 = paused.resizeMode;
  if (str2 === undefined) {
    str2 = "contain";
  }
  ({ controls, pauseWhileAppInactive, disableFocus, ariaHidden, mixWithOthers, importantForAccessibility } = paused);
  if (pauseWhileAppInactive === undefined) {
    pauseWhileAppInactive = true;
  }
  let flag3 = paused.playInBackground;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = paused.preventsDisplaySleepDuringVideoPlayback;
  if (flag4 === undefined) {
    flag4 = true;
  }
  const tmp = _slicedToArray(noop.useState("active" === closure_7.currentState), 2);
  closure_1 = tmp[1];
  const items = [pauseWhileAppInactive];
  const effect = noop.useEffect(() => {
    if (closure_0) {
      closure_0 = closure_1_7.addEventListener("change", (event) => {
        closure_1_1("active" === event);
      });
      return () => {
        closure_0.remove();
      };
    }
  }, items);
  const obj = { style, source, importantForAccessibility, poster, muted: flag2, paused: null, posterResizeMode: null, resizeMode: null, repeat: true, playInBackground: null, pictureInPicture: false, playWhenInactive: false, onLoadStart: null, onLoad: null, onReadyForDisplay: null, onError: null, onEnd: null, disableFocus: null, "aria-hidden": null, mixWithOthers: null, preventsDisplaySleepDuringVideoPlayback: null, httpEngine: null };
  if (!flag) {
    if (pauseWhileAppInactive) {
      pauseWhileAppInactive = !tmp[0];
    }
    flag = pauseWhileAppInactive;
  }
  obj.paused = flag;
  obj.posterResizeMode = str;
  obj.resizeMode = str2;
  obj.playInBackground = flag3;
  obj.onLoadStart = onLoadStart;
  obj.onLoad = onLoad;
  obj.onReadyForDisplay = onReadyForDisplay;
  obj.onError = onError;
  obj.onEnd = onEnd;
  obj.disableFocus = disableFocus;
  obj["aria-hidden"] = ariaHidden;
  obj.mixWithOthers = mixWithOthers;
  obj.preventsDisplaySleepDuringVideoPlayback = flag4;
  obj.httpEngine = paused.httpEngine;
  let props;
  if (controls != null) {
    props = controls.props;
  }
  const merged = Object.assign(props);
  return jsx(pauseWhileAppInactive(8402).default, { style, source, importantForAccessibility, poster, muted: flag2, paused: null, posterResizeMode: null, resizeMode: null, repeat: true, playInBackground: null, pictureInPicture: false, playWhenInactive: false, onLoadStart: null, onLoad: null, onReadyForDisplay: null, onError: null, onEnd: null, disableFocus: null, "aria-hidden": null, mixWithOthers: null, preventsDisplaySleepDuringVideoPlayback: null, httpEngine: null });
});
let closure_10 = tmp4;
const PureComponent = noop.PureComponent;
class Video extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { postponeRender: true };
    applyArgumentsResult.ref = closure_4.createRef();
    applyArgumentsResult.isVideo = function isVideo() {
      const src = applyArgumentsResult.props.src;
      let tmp = null != src;
      if (tmp) {
        tmp = "videoURI" in src;
      }
      if (tmp) {
        tmp = null != src.videoURI;
      }
      return tmp;
    };
    applyArgumentsResult.handleOpenFullScreen = function handleOpenFullScreen() {
      const props = applyArgumentsResult.props;
      ({ src, onPress } = props);
      ({ width, height } = props);
      if (null != onPress) {
        onPress();
      }
      const current = applyArgumentsResult.ref.current;
      if (null != current) {
        const obj2 = { initialSources: null, originViewOrOriginLayout: null };
        const obj3 = {};
        const merged = Object.assign(src);
        obj3.width = width;
        obj3.height = height;
        const items = [obj3];
        obj2.initialSources = items;
        obj2.originViewOrOriginLayout = current;
        openMediaModal.openMediaModal(obj2);
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = Video.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  this._renderTask = RunAfterInteractionsUtils.runAfterInteractions(() => {
    self.setState({ postponeRender: false });
  });
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  if (null != this._renderTask) {
    const _renderTask = this._renderTask;
    _renderTask.cancel();
  }
};
prototype["renderVideo"] = function renderVideo() {
  ({ src, resizeMode } = this.props);
  if ("videoURI" in src) {
    if ("" !== src.videoURI) {
      const videoURI = src.videoURI;
      let tmp13;
      if (null != videoURI) {
        const obj = { style: null, source: null, poster: null, muted: null, paused: null, resizeMode: null, posterResizeMode: null, ariaHidden: null, disableFocus: null, httpEngine: null };
        const items = [tmp.video, , ];
        const size = { width: tmp3, height: tmp4 };
        items[1] = size;
        items[2] = tmp7;
        obj.style = items;
        const obj2 = { uri: videoURI };
        obj.source = obj2;
        obj.poster = tmp2;
        obj.muted = tmp5;
        obj.paused = tmp6;
        obj.resizeMode = resizeMode;
        obj.posterResizeMode = resizeMode;
        obj.ariaHidden = tmp8;
        obj.disableFocus = tmp9;
        obj.httpEngine = tmp10;
        tmp13 = <closure_10 style={null} source={null} poster={null} muted={null} paused={null} resizeMode={null} posterResizeMode={null} ariaHidden={null} disableFocus={null} httpEngine={null} />;
      }
      return tmp13;
    }
  }
  return null;
};
prototype["renderImage"] = function renderImage() {
  ({ src, ariaHidden } = this.props);
  if ("uri" in src) {
    if ("" !== src.uri) {
      const obj = { source: null, style: null, accessible: null, accessibilityElementsHidden: null, importantForAccessibility: null };
      const obj2 = { uri: src.uri };
      obj.source = obj2;
      const size = { width: tmp, height: tmp2 };
      obj.style = size;
      obj.accessible = true !== ariaHidden;
      obj.accessibilityElementsHidden = ariaHidden;
      let str2;
      if (true === ariaHidden) {
        str2 = "no-hide-descendants";
      }
      obj.importantForAccessibility = str2;
      return jsx(FastImageDefault, { source: null, style: null, accessible: null, accessibilityElementsHidden: null, importantForAccessibility: null });
    }
  }
};
prototype["render"] = function render() {
  const self = this;
  const props = this.props;
  let accessibilityLabel = props.accessibilityLabel;
  const obj = { ref: this.ref, style: null, accessible: null, accessibilityLabel: null, children: null };
  const items = [closure_9(this.context).container, { width: props.width, height: props.height }, props.style];
  obj.style = items;
  obj.accessible = null != accessibilityLabel;
  obj.accessibilityLabel = accessibilityLabel;
  if (this.state.postponeRender) {
    if (false !== tmp2) {
      obj.children = null;
      const tmp3Result = <tmp4 {...obj} />;
      let tmp3Result2 = tmp3Result;
      if (tmp) {
        if (accessibilityLabel == null) {
          const intl = util.intl;
          accessibilityLabel = intl.string(util.t.OIDkcp);
        }
        const obj2 = { accessibilityRole: "button", accessibilityLabel, onPress: self.handleOpenFullScreen, children: tmp3Result };
        tmp3Result2 = <hasOwnProperty accessibilityRole="button" accessibilityLabel={accessibilityLabel} onPress={self.handleOpenFullScreen}>{tmp3Result}</hasOwnProperty>;
      }
      return tmp3Result2;
    }
  }
  if (self.isVideo()) {
    self.renderVideo();
  } else {
    self.renderImage();
  }
};
Video.contextType = fn(4787).ThemeContext;
let size = fn(2);
const result = size.fileFinishedImporting("components_native/common/Video.tsx");

export default Video;
export const createVideoControls = function createVideoControls(NOOP) {
  ref = ref.createRef();
  c5 = 0;
  c6 = 0;
  let progressPercent = 0;
  closure_8 = false;
  return {
    seek(arg0) {
      const current = ref.current;
      if (current != null) {
        const seek = current.seek;
        if (seek != null) {
          seek(arg0);
        }
      }
    },
    pause(arg0) {
      NOOP(arg0);
      if (closure_8 !== arg0) {
        closure_8 = arg0;
        if (closure_2 != null) {
          tmp2(closure_8);
        }
      }
    },
    useSubscribe(arg0, arg1, arg2) {
      closure_1 = arg0;
      closure_2 = arg1;
      closure_3 = arg2;
      const layoutEffect = noop.useLayoutEffect(() => {
        if (NOOP != null) {
          tmp(closure_1_5, closure_1_6);
        }
        if (closure_1_2 != null) {
          tmp5(closure_1_8);
        }
        if (closure_1_3 != null) {
          tmp8(progressPercent);
        }
      }, []);
    },
    props: {
      ref,
      onPlaybackRateChange(nativeEvent) {
        if (closure_8 !== 0 === nativeEvent.playbackRate) {
          closure_8 = tmp;
          if (closure_2 != null) {
            tmp2(closure_8);
          }
        }
      },
      onProgress(arg0) {
        ({ currentTime: c5, seekableDuration: c6 } = arg0);
        if (closure_1 != null) {
          tmp(c5, c6);
        }
      },
      onDownloadProgress(progressPercent) {
        progressPercent = progressPercent.progressPercent;
        if (closure_3 != null) {
          tmp(progressPercent);
        }
      }
    }
  };
};
export const VideoComponent = tmp4;