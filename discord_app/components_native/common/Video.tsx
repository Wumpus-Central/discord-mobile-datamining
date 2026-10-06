// discord_app/components_native/common/Video.tsx
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../intl/index.native.tsx";
import native from "../../../discord_common/js/packages/design/native.tsx";
import RunAfterInteractionsUtils from "../../utils/native/RunAfterInteractionsUtils.tsx";
import openMediaModal2 from "../../modules/media_viewer/native/components/openMediaModal.tsx";
import _slicedToArray from "../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../_runtime/00019_react.js";
import react_native from "../../../_runtime/00017_react-native.js";
import createStyles from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../_runtime/metro/00002__.js";

let _require, closure_0, dependencyMap, tmp2;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
({
  TouchableWithoutFeedback: closure_4,
  View: hasOwnProperty,
  Image: metroRequire,
  AppState: metroImportDefault,
} = react_native);
const jsx = Fragment.jsx;
let obj = { container: obj2, video: obj3 };
obj2 = {
  flex: 1,
  shadowColor: nativeDefault.unsafe_rawColors.BLACK,
  shadowOpacity: 0.5,
  shadowOffset: { height: 1, width: 0 },
  shadowRadius: 16,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
const createLegacyClassComponentStyles = createStyles.createLegacyClassComponentStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
const React4 = createLegacyClassComponentStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let ariaHidden;
      let controls;
      let disableFocus;
      let httpEngine;
      let importantForAccessibility;
      let mixWithOthers;
      let muted;
      let onEnd;
      let onError;
      let onLoad;
      let onLoadStart;
      let onReadyForDisplay;
      let pauseWhileAppInactive;
      let paused;
      let playInBackground;
      let poster;
      let posterResizeMode;
      let preventsDisplaySleepDuringVideoPlayback;
      let resizeMode;
      let source;
      let style;
      let tmp12;
      let tmp13;
      let tmp = _require;
      const obj = require("react");
      const cResult = obj.c(25);
      ({
        style,
        source,
        poster,
        onLoadStart,
        onLoad,
        onReadyForDisplay,
        onError,
        onEnd,
        paused,
        muted,
        posterResizeMode,
        resizeMode,
        disableFocus,
        controls,
        ariaHidden,
        mixWithOthers,
        importantForAccessibility,
        pauseWhileAppInactive,
        playInBackground,
        preventsDisplaySleepDuringVideoPlayback,
        httpEngine,
      } = arg0);
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
        const tmpResult = tmp(7994);
        cResult[0] = tmpResult;
        let first = tmpResult;
      } else {
        first = cResult[0];
      }
      [r10058, dependencyMap] = react.useState("active" === closure_7.currentState);
      _slicedToArray(react.useState("active" === closure_7.currentState), 2);
      if (cResult[1] !== (undefined === pauseWhileAppInactive || pauseWhileAppInactive)) {
        class N {
          constructor() {
            tmp = closure_0;
            if (tmp) {
              tmp2 = closure_1_7;
              str = "change";
              closure_0 = closure_1_7.addEventListener("change", () => {
                /* body not rendered: F138699 */
              });
              return () => {
                /* body not rendered: F138700 */
              };
            } else {
              return;
            }
          }
        }
        const items = [undefined === pauseWhileAppInactive || pauseWhileAppInactive];
        cResult[1] = undefined === pauseWhileAppInactive || pauseWhileAppInactive;
        cResult[2] = items;
        cResult[3] = N;
        tmp13 = N;
        tmp12 = items;
      } else {
        class N {
          constructor() {
            tmp = closure_0;
            if (tmp) {
              tmp2 = closure_1_7;
              str = "change";
              closure_0 = closure_1_7.addEventListener("change", () => {
                /* body not rendered: F138699 */
              });
              return () => {
                /* body not rendered: F138700 */
              };
            } else {
              return;
            }
          }
        }
        tmp13 = cResult[3];
      }
      const effect = react.useEffect(tmp13, tmp12);
      if (!tmp4) {
        class N {
          constructor() {
            tmp = closure_0;
            if (tmp) {
              tmp2 = closure_1_7;
              str = "change";
              closure_0 = closure_1_7.addEventListener("change", () => {
                /* body not rendered: F138699 */
              });
              return () => {
                /* body not rendered: F138700 */
              };
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
            tmp = closure_0;
            if (tmp) {
              tmp2 = closure_1_7;
              str = "change";
              closure_0 = closure_1_7.addEventListener("change", () => {
                /* body not rendered: F138699 */
              });
              return () => {
                /* body not rendered: F138700 */
              };
            } else {
              return;
            }
          }
        }
      }
      if (cResult[4] === ariaHidden) {
        class N {
          constructor() {
            tmp = closure_0;
            if (tmp) {
              tmp2 = closure_1_7;
              str = "change";
              closure_0 = closure_1_7.addEventListener("change", () => {
                /* body not rendered: F138699 */
              });
              return () => {
                /* body not rendered: F138700 */
              };
            } else {
              return;
            }
          }
        }
      }
      const merged = Object.assign(tmp15);
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
      cResult[24] = (
        <_default
          style={style}
          source={source}
          importantForAccessibility={importantForAccessibility}
          poster={poster}
          muted={undefined === muted || muted}
          paused={tmp4}
          posterResizeMode={str2}
          resizeMode={str}
          repeat
          playInBackground={undefined !== playInBackground && playInBackground}
          pictureInPicture={false}
          playWhenInactive={false}
          onLoadStart={onLoadStart}
          onLoad={onLoad}
          onReadyForDisplay={onReadyForDisplay}
          onError={onError}
          onEnd={onEnd}
          disableFocus={disableFocus}
          aria-hidden={ariaHidden}
          mixWithOthers={mixWithOthers}
          preventsDisplaySleepDuringVideoPlayback={
            undefined === preventsDisplaySleepDuringVideoPlayback || preventsDisplaySleepDuringVideoPlayback
          }
          httpEngine={httpEngine}
        />
      );
    }
  : (paused) => {
      let ariaHidden;
      let closure_1;
      let controls;
      let disableFocus;
      let first;
      let importantForAccessibility;
      let mixWithOthers;
      let onEnd;
      let onError;
      let onLoad;
      let onLoadStart;
      let onReadyForDisplay;
      let pauseWhileAppInactive;
      let poster;
      let source;
      let style;
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
      ({ controls, pauseWhileAppInactive, disableFocus, ariaHidden, mixWithOthers, importantForAccessibility } =
        paused);
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
      dependencyMap = undefined;
      const httpEngine = paused.httpEngine;
      pauseWhileAppInactive(7994).default;
      [first, dependencyMap] = react.useState("active" === closure_7.currentState);
      const items = [pauseWhileAppInactive];
      const effect = react.useEffect(() => {
        const tmp = closure_0;
        if (tmp) {
          closure_0 = closure_1_7.addEventListener("change", (event) => {
            closure_1_1("active" === event);
          });
          return () => {
            closure_0.remove();
          };
        }
      }, items);
      if (!flag) {
        if (pauseWhileAppInactive) {
          pauseWhileAppInactive = !first;
        }
        flag = pauseWhileAppInactive;
      }
      let props;
      if (controls != null) {
        props = controls.props;
      }
      const merged = Object.assign(props);
      return (
        <_default
          style={style}
          source={source}
          importantForAccessibility={importantForAccessibility}
          poster={poster}
          muted={flag2}
          paused={flag}
          posterResizeMode={str}
          resizeMode={str2}
          repeat
          playInBackground={flag3}
          pictureInPicture={false}
          playWhenInactive={false}
          onLoadStart={onLoadStart}
          onLoad={onLoad}
          onReadyForDisplay={onReadyForDisplay}
          onError={onError}
          onEnd={onEnd}
          disableFocus={disableFocus}
          aria-hidden={ariaHidden}
          mixWithOthers={mixWithOthers}
          preventsDisplaySleepDuringVideoPlayback={flag4}
          httpEngine={httpEngine}
        />
      );
    };
let closure_10 = tmp5;
const PureComponent = react.PureComponent;
class Video extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const require = applyArgumentsResult;
    applyArgumentsResult.state = { postponeRender: true };
    applyArgumentsResult.ref = react.createRef();
    applyArgumentsResult.isVideo = function isVideo() {
      const src = require.props.src;
      return null != src && "videoURI" in src && null != src.videoURI;
    };
    applyArgumentsResult.handleOpenFullScreen = function handleOpenFullScreen() {
      let height;
      let items;
      let onPress;
      let src;
      let width;
      const props = require.props;
      ({ src, onPress } = props);
      ({ width, height } = props);
      if (null != onPress) {
        onPress();
      }
      const current = require.ref.current;
      if (null != current) {
        const obj = { initialSources: items, originViewOrOriginLayout: current };
        const obj2 = { width, height };
        const openMediaModal = openMediaModal2.openMediaModal;
        openMediaModal2;
        const merged = Object.assign(src);
        items = [obj2];
        openMediaModal(obj);
      }
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    const self = this;
    const obj = RunAfterInteractionsUtils;
    this._renderTask = obj.runAfterInteractions(() => {
      self.setState({ postponeRender: false });
    });
  }
  componentWillUnmount() {
    if (null != this._renderTask) {
      const _renderTask = this._renderTask;
      _renderTask.cancel();
    }
  }
  renderVideo() {
    let resizeMode;
    let src;
    ({ src, resizeMode } = this.props);
    if ("videoURI" in src) {
      if ("" !== src.videoURI) {
        const videoURI = src.videoURI;
        let tmp13;
        if (null != videoURI) {
          const items = [tmp.video, ,];
          size = { width: tmp3, height: tmp4 };
          items[1] = size;
          items[2] = tmp7;
          tmp13 = (
            <closure_10
              style={items}
              source={{ uri: videoURI }}
              poster={tmp2}
              muted={tmp5}
              paused={tmp6}
              resizeMode={resizeMode}
              posterResizeMode={resizeMode}
              ariaHidden={tmp8}
              disableFocus={tmp9}
              httpEngine={tmp10}
            />
          );
          const obj2 = { uri: videoURI };
        }
        return tmp13;
      }
    }
    return null;
  }
  renderImage() {
    const src = this.props.src;
    if ("uri" in src) {
      if ("" !== src.uri) {
        size = { width: tmp, height: tmp2 };
        return <metroRequire source={{ uri: src.uri }} style={size} aria-hidden={tmp3} />;
      }
    }
  }
  render() {
    let tmp4;
    const self = this;
    const props = this.props;
    let accessibilityLabel = props.accessibilityLabel;
    const items = [closure_9(this.context).container, { width: props.width, height: props.height }, props.style];
    const canOpenFullscreen = props.canOpenFullscreen;
    if (!this.state.postponeRender) {
      let renderVideoResult;
      if (self.isVideo()) {
        renderVideoResult = self.renderVideo();
      } else {
        renderVideoResult = self.renderImage();
      }
      tmp4 = renderVideoResult;
    } else {
      tmp4 = null;
    }
    const tmp2Result = (
      <hasOwnProperty
        ref={this.ref}
        style={items}
        accessible={null != accessibilityLabel}
        accessibilityLabel={accessibilityLabel}
      >
        {tmp4}
      </hasOwnProperty>
    );
    let tmp2Result2 = tmp2Result;
    if (canOpenFullscreen) {
      if (accessibilityLabel == null) {
        const intl = intl2.intl;
        accessibilityLabel = intl.string(intl2.t.OIDkcp);
      }
      tmp2Result2 = (
        <React3 accessibilityRole="button" accessibilityLabel={accessibilityLabel} onPress={self.handleOpenFullScreen}>
          {tmp2Result}
        </React3>
      );
    }
    return tmp2Result2;
  }
}
const prototype = Video.prototype;
Video.contextType = native.ThemeContext;
let size = size_mod;
const result = size.fileFinishedImporting("components_native/common/Video.tsx");

export default Video;
export const createVideoControls = function createVideoControls(NOOP) {
  const ref = react.createRef();
  let c5 = 0;
  let c6 = 0;
  let progressPercent = 0;
  let closure_8 = false;
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
        if (_slicedToArray != null) {
          tmp2(closure_8);
        }
      }
    },
    useSubscribe(arg0, arg1, arg2) {
      let closure_1_1 = arg0;
      let closure_1_2 = arg1;
      let closure_1_3 = arg2;
      const layoutEffect = react.useLayoutEffect(() => {
        if (closure_1_1 != null) {
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
        if ((closure_8 !== 0) === nativeEvent.playbackRate) {
          closure_8 = tmp;
          if (_slicedToArray != null) {
            tmp2(closure_8);
          }
        }
      },
      onProgress(arg0) {
        ({ currentTime: c5, seekableDuration: c6 } = arg0);
        if (dependencyMap != null) {
          tmp(c5, c6);
        }
      },
      onDownloadProgress(progressPercent) {
        progressPercent = progressPercent.progressPercent;
        if (react != null) {
          tmp(progressPercent);
        }
      },
    },
  };
};
export const VideoComponent = tmp5;
