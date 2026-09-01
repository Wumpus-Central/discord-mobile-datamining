// === Module 8602: VideoComponent ===

// Module 8602 (VideoComponent)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_2 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
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
        closure_0 = closure_1_7.addEventListener("change", (arg0) => {
          callback("active" === arg0);
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
    obj[5] = flag;
    obj[6] = str;
    obj[7] = str2;
    obj[9] = flag3;
    obj[12] = onLoadStart;
    obj[13] = onLoad;
    obj[14] = onError;
    obj[15] = onEnd;
    obj[16] = disableFocus;
    obj[17] = ariaHidden;
    obj[18] = mixWithOthers;
    obj[19] = flag4;
    obj[20] = global.httpEngine;
    props = undefined;
    if (controls != null) {
      props = controls.props;
    }
    merged = Object.assign(props);
    return tmp3(require("_isNativeReflectConstruct").default, obj);
  }
}
let c3 = importAllResult;
({ TouchableWithoutFeedback: c4, View: c5, Image: closure_6, AppState: error } = get_ActivityIndicator);
createCacheKey = { container: null, video: null };
createCacheKey = { flex: 1, shadowColor: ThemesDefault.unsafe_rawColors.BLACK, shadowOpacity: 0.5, shadowOffset: { height: 1, width: 0 }, shadowRadius: 16, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
let closure_9 = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
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
        let obj = applyArgumentsResult(closure_1_1[8]);
        obj = { initialSources: null, originViewOrOriginLayout: null };
        obj = {};
        const merged = Object.assign(src);
        obj.width = width;
        obj.height = height;
        const items = [obj];
        obj[0] = items;
        obj[1] = current;
        obj.openMediaModal(obj);
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = Video.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  const self = this;
  this._renderTask = self(6046).runAfterInteractions(() => {
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
        obj = { width: null, height: null };
        obj[0] = tmp3;
        obj[1] = tmp4;
        items[1] = obj;
        items[2] = tmp7;
        obj[0] = items;
        obj = { uri: null };
        obj[0] = videoURI;
        obj[1] = obj;
        obj[2] = tmp2;
        obj[3] = tmp5;
        obj[4] = tmp6;
        obj[5] = resizeMode;
        obj[6] = resizeMode;
        obj[7] = tmp8;
        obj[8] = tmp9;
        obj[9] = tmp10;
        tmp13 = <VideoComponent uri={null} />;
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
      obj = { uri: null };
      obj[0] = src.uri;
      obj[0] = obj;
      obj = { width: null, height: null };
      obj[0] = tmp;
      obj[1] = tmp2;
      obj[1] = obj;
      obj[2] = tmp3;
      return <closure_6 width={null} height={null} />;
    }
  }
};
prototype["render"] = function render() {
  const self = this;
  const props = this.props;
  let accessibilityLabel = props.accessibilityLabel;
  let obj = { ref: this.ref, style: null, accessible: null, accessibilityLabel: null, children: null };
  const items = [callback2(this.context).container, { width: props.width, height: props.height }, props.style];
  obj[1] = items;
  obj[2] = null != accessibilityLabel;
  obj[3] = accessibilityLabel;
  if (this.state.postponeRender) {
    if (false !== tmp2) {
      obj[4] = null;
      let tmp3Result = tmp3(tmp4, obj);
      if (tmp) {
        if (accessibilityLabel == null) {
          const intl = getSystemLocale.intl;
          accessibilityLabel = intl.string(getSystemLocale.t.OIDkcp);
        }
        obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        obj[1] = accessibilityLabel;
        obj[2] = self.handleOpenFullScreen;
        obj[3] = tmp3Result;
        tmp3Result = tmp3(closure_4, obj);
        const tmp9 = closure_4;
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
Video.contextType = require("ManaContext").ThemeContext;
const obj1 = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BRAND };
const result = require("set").fileFinishedImporting("components_native/common/Video.tsx");

export default Video;
export const createVideoControls = function createVideoControls(NOOP) {
  closure_0 = NOOP;
  const ref = importAllResult.createRef();
  c5 = 0;
  c6 = 0;
  c7 = 0;
  c8 = false;
  obj = {
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
      const layoutEffect = closure_1_3.useLayoutEffect(() => {
        if (closure_1 != null) {
          tmp(closure_5, closure_6);
        }
        if (closure_2 != null) {
          tmp5(closure_8);
        }
        if (closure_3 != null) {
          tmp8(closure_7);
        }
      }, []);
    },
    props: obj
  };
  obj = {
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
  };
  return obj;
};
export { VideoComponent };