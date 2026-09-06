// === Module 8307: common/Video ===

// Module 8307 (common/Video)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 7038 */;
import openMediaModal from "openMediaModal" /* 8261 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
class VideoComponent {
  constructor(arg0) {
    flag = global.paused;
    ({ style, source, poster, onLoadStart, onLoad, onError, onEnd } = global);
    if (flag === undefined) {
      flag = false;
    }
    flag2 = global.muted;
    if (flag2 === undefined) {
      flag2 = true;
    }
    str = global.posterResizeMode;
    if (str === undefined) {
      str = "contain";
    }
    str2 = global.resizeMode;
    if (str2 === undefined) {
      str2 = "contain";
    }
    ({ controls, pauseWhileAppInactive, disableFocus, ariaHidden, mixWithOthers, importantForAccessibility } = global);
    if (pauseWhileAppInactive === undefined) {
      pauseWhileAppInactive = true;
    }
    c0 = pauseWhileAppInactive;
    flag3 = global.playInBackground;
    if (flag3 === undefined) {
      flag3 = false;
    }
    flag4 = global.preventsDisplaySleepDuringVideoPlayback;
    if (flag4 === undefined) {
      flag4 = true;
    }
    closure_1 = undefined;
    tmp = closure_2(closure_3.useState("active" === AppState.currentState), 2);
    closure_1 = tmp[1];
    items = [];
    items[0] = pauseWhileAppInactive;
    effect = closure_3.useEffect(() => {
      if (closure_0) {
        closure_0 = currentState.addEventListener("change", (event) => {
          closure_1_1("active" === event);
        });
        return () => {
          closure_0.remove();
        };
      }
    }, items);
    obj = { style, source, importantForAccessibility, poster, muted: flag2, paused: null, posterResizeMode: null, resizeMode: null, repeat: true, playInBackground: null, pictureInPicture: false, playWhenInactive: false, onLoadStart: null, onLoad: null, onError: null, onEnd: null, disableFocus: null, "aria-hidden": null, mixWithOthers: null, preventsDisplaySleepDuringVideoPlayback: null, httpEngine: null };
    tmp3 = jsx;
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
    obj.onError = onError;
    obj.onEnd = onEnd;
    obj.disableFocus = disableFocus;
    obj["aria-hidden"] = ariaHidden;
    obj.mixWithOthers = mixWithOthers;
    obj.preventsDisplaySleepDuringVideoPlayback = flag4;
    obj.httpEngine = global.httpEngine;
    props = undefined;
    if (controls != null) {
      props = controls.props;
    }
    merged = Object.assign(props);
    return tmp3(c0(closure_1[6]).default, obj);
  }
}
get_ActivityIndicator = fn(17);
({ TouchableWithoutFeedback: closure_4, View: hasOwnProperty, Image: metroRequire, AppState: closure_7 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, video: null };
createStyles = { flex: 1, shadowColor: nativeDefault.unsafe_rawColors.BLACK, shadowOpacity: 0.5, shadowOffset: { height: 1, width: 0 }, shadowRadius: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles.container = createStyles;
createStyles.video = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
let closure_9 = createStyles.createLegacyClassComponentStyles(createStyles);
const PureComponent = noop.PureComponent;
class Video extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = { postponeRender: true };
    applyArgumentsResult.ref = closure_3.createRef();
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
        let obj = { initialSources: null, originViewOrOriginLayout: null };
        obj = {};
        const merged = Object.assign(src);
        obj.width = width;
        obj.height = height;
        const items = [obj];
        obj.initialSources = items;
        obj.originViewOrOriginLayout = current;
        obj.openMediaModal(obj);
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
        let obj = { style: null, source: null, poster: null, muted: null, paused: null, resizeMode: null, posterResizeMode: null, ariaHidden: null, disableFocus: null, httpEngine: null };
        const items = [tmp.video, , ];
        const size = { width: tmp3, height: tmp4 };
        items[1] = size;
        items[2] = tmp7;
        obj.style = items;
        obj = { uri: videoURI };
        obj.source = obj;
        obj.poster = tmp2;
        obj.muted = tmp5;
        obj.paused = tmp6;
        obj.resizeMode = resizeMode;
        obj.posterResizeMode = resizeMode;
        obj.ariaHidden = tmp8;
        obj.disableFocus = tmp9;
        obj.httpEngine = tmp10;
        tmp13 = <VideoComponent uri={videoURI} />;
      }
      return tmp13;
    }
  }
  return null;
};
prototype["renderImage"] = function renderImage() {
  const src = this.props.src;
  if ("uri" in src) {
    if ("" !== src.uri) {
      let obj = { source: null, style: null, "aria-hidden": null };
      obj = { uri: src.uri };
      obj.source = obj;
      const size = { width: tmp, height: tmp2 };
      obj.style = size;
      obj["aria-hidden"] = tmp3;
      return <timestampProducer uri={src.uri} />;
    }
  }
};
prototype["render"] = function render() {
  const self = this;
  const props = this.props;
  let accessibilityLabel = props.accessibilityLabel;
  let obj = { ref: this.ref, style: null, accessible: null, accessibilityLabel: null, children: null };
  const items = [closure_9(this.context).container, { width: props.width, height: props.height }, props.style];
  obj.style = items;
  obj.accessible = null != accessibilityLabel;
  obj.accessibilityLabel = accessibilityLabel;
  if (this.state.postponeRender) {
    if (false !== tmp2) {
      obj.children = null;
      let tmp3Result = <tmp4 {...obj} />;
      if (tmp) {
        if (accessibilityLabel == null) {
          const intl = util.intl;
          accessibilityLabel = intl.string(util.t.OIDkcp);
        }
        obj = { accessibilityRole: "button", accessibilityLabel, onPress: self.handleOpenFullScreen, children: tmp3Result };
        tmp3Result = <React4 accessibilityRole="button" accessibilityLabel={accessibilityLabel} onPress={self.handleOpenFullScreen}>{tmp3Result}</React4>;
      }
      return tmp3Result;
    }
  }
  if (self.isVideo()) {
    self.renderVideo();
  } else {
    self.renderImage();
  }
};
Video.contextType = fn(4271).ThemeContext;
let size = fn(2);
const result = size.fileFinishedImporting("components_native/common/Video.tsx");

export default Video;
export const createVideoControls = function createVideoControls(NOOP) {
  const ref = noop.createRef();
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
export { VideoComponent };