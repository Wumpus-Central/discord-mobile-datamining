// _runtime/metro/05929__.js
import Fragment from "../react/00021_Fragment.js";
import _mod5930 from "05930__.js";
import react_native from "../05931_react-native.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import metroRequire from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import react from "../00019_react.js";
import react_native2 from "../00017_react-native.js";

const _modDef5930 = _mod5930;

let c9;
let metroImportAll;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
let closure_3 = [
  "style",
  "source",
  "autoPlay",
  "duration",
  "textFiltersAndroid",
  "textFiltersIOS",
  "resizeMode",
  "containerStyle",
];
({ View: metroImportAll, processColor: c9 } = react_native2);
const jsx = Fragment.jsx;
let obj = {
  source: "emoji",
  progress: null,
  speed: true,
  loop: false,
  autoPlay: false,
  enableMergePathsAndroidForKitKatAndAbove: false,
  enableSafeModeAndroid: true,
  cacheComposition: false,
  useNativeLooping: "contain",
  resizeMode: null,
  colorFilters: [],
  textFiltersAndroid: [],
  textFiltersIOS: [],
};
class LottieView {
  constructor(arg0) {
    let constructResult;
    const self = this;
    _classCallCheck(this, LottieView);
    const items = [arg0];
    const obj = _getPrototypeOf(LottieView);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = metroRequire(self, constructResult);
    let closure_0 = tmp3Result;
    tmp3Result.onAnimationFinish = (nativeEvent) => {
      const props = closure_0.props;
      const onAnimationFinish = props.onAnimationFinish;
      if (onAnimationFinish != null) {
        onAnimationFinish(nativeEvent.nativeEvent.isCancelled);
      }
    };
    tmp3Result.onAnimationFailure = (nativeEvent) => {
      const props = closure_0.props;
      const onAnimationFailure = props.onAnimationFailure;
      if (onAnimationFailure != null) {
        onAnimationFailure(nativeEvent.nativeEvent.error);
      }
    };
    tmp3Result.onAnimationLoaded = () => {
      const props = closure_0.props;
      const onAnimationLoaded = props.onAnimationLoaded;
      if (onAnimationLoaded != null) {
        onAnimationLoaded();
      }
    };
    const play = tmp3Result.play;
    tmp3Result.play = play.bind(tmp3Result);
    const reset = tmp3Result.reset;
    tmp3Result.reset = reset.bind(tmp3Result);
    const pause = tmp3Result.pause;
    tmp3Result.pause = pause.bind(tmp3Result);
    const resume = tmp3Result.resume;
    tmp3Result.resume = resume.bind(tmp3Result);
    let onAnimationFinish = tmp3Result.onAnimationFinish;
    tmp3Result.onAnimationFinish = onAnimationFinish.bind(tmp3Result);
    const captureRef = tmp3Result.captureRef;
    tmp3Result.captureRef = captureRef.bind(tmp3Result);
    return tmp3Result;
  }
}
_inherits(LottieView, react.PureComponent);
const entry = {
  key: "play",
  value: function play(arg0, arg1) {
    let num = arg0;
    const Commands = _mod5930.Commands;
    const play = Commands.play;
    const lottieAnimationViewRef = this.lottieAnimationViewRef;
    if (arg0 == null) {
      num = -1;
    }
    let num2 = arg1;
    if (arg1 == null) {
      num2 = -1;
    }
    play(lottieAnimationViewRef, num, num2);
  },
};
let items = [
  entry,
  {
    key: "reset",
    value: function reset() {
      const Commands = _mod5930.Commands;
      Commands.reset(this.lottieAnimationViewRef);
    },
  },
  {
    key: "pause",
    value: function pause() {
      const Commands = _mod5930.Commands;
      Commands.pause(this.lottieAnimationViewRef);
    },
  },
  {
    key: "resume",
    value: function resume() {
      const Commands = _mod5930.Commands;
      Commands.resume(this.lottieAnimationViewRef);
    },
  },
  {
    key: "captureRef",
    value: function captureRef(lottieAnimationViewRef) {
      if (null !== lottieAnimationViewRef) {
        const self = this;
        this.lottieAnimationViewRef = lottieAnimationViewRef;
        if (true === this.props.autoPlay) {
          self.play();
        }
      }
    },
  },
  {
    key: "renderLottieView",
    value: function renderLottieView() {
      let autoPlay;
      let containerStyle;
      let duration;
      let resizeMode;
      let source;
      let style;
      let textFiltersAndroid;
      let textFiltersIOS;
      const self = this;
      const props = this.props;
      ({ source, duration, containerStyle } = props);
      ({ style, autoPlay, textFiltersAndroid, textFiltersIOS, resizeMode } = props);
      const tmp = _objectWithoutProperties(props, closure_3);
      let obj = react_native;
      const parsePossibleSourcesResult = obj.parsePossibleSources(source);
      if (duration) {
        if (parsePossibleSourcesResult.sourceJson) {
          let speed;
          if (source.fr) {
            const _Math = Math;
            speed = Math.round(((source.op / source.fr) * 1000) / duration);
          }
          const colorFilters = self.props.colorFilters;
          let mapped;
          if (colorFilters != null) {
            mapped = colorFilters.map((color) => {
              const obj = { color: closure_1_9(color.color) };
              const merged = Object.assign(color);
              return obj;
            });
          }
          _modDef5930;
          let merged = Object.assign(tmp);
          ({
            onAnimationFinish: obj2.onAnimationFinish,
            onAnimationFailure: obj2.onAnimationFailure,
            onAnimationLoaded: obj2.onAnimationLoaded,
          } = self);
          const merged1 = Object.assign(parsePossibleSourcesResult);
          return (
            <tmp9
              ref={self.captureRef}
              colorFilters={mapped}
              textFiltersAndroid={textFiltersAndroid}
              textFiltersIOS={textFiltersIOS}
              speed={speed}
              style={style}
              autoPlay={autoPlay}
              resizeMode={resizeMode}
            />
          );
        }
      }
      speed = self.props.speed;
    },
  },
  {
    key: "render",
    value: function render() {
      let containerStyle;
      let renderLottieViewResult;
      let source;
      const self = this;
      ({ source, containerStyle } = this.props);
      if (null == source) {
        const _console = console;
        console.warn("LottieView needs `source` parameter, provided value for source:", source);
        renderLottieViewResult = null;
      } else if (containerStyle) {
        renderLottieViewResult = (
          <metroImportAll style={containerStyle} collapsable={false}>
            {self.renderLottieView()}
          </metroImportAll>
        );
      } else {
        renderLottieViewResult = self.renderLottieView();
      }
      return renderLottieViewResult;
    },
  },
];
const importDefaultResultResult = _createClass(LottieView, items);
importDefaultResultResult.defaultProps = obj;
const LottieView_export = importDefaultResultResult;

export { LottieView_export as LottieView };
