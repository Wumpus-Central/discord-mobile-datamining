// _runtime/metro/05531__.js
import _modDef5532 from "05532__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import metroRequire from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

const LottieView = fn;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
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
get_ActivityIndicator = fn(17);
({ View: closure_8, processColor: closure_9 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let obj = {
  source: "disabled",
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
    self = this;
    tmp = hasOwnProperty(this, LottieView);
    items = [];
    items[0] = global;
    tmp2 = closure_7;
    obj = closure_7(LottieView);
    tmp3 = metroRequire;
    if (closure_11()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
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
    play = tmp3Result.play;
    tmp3Result.play = play.bind(tmp3Result);
    reset = tmp3Result.reset;
    tmp3Result.reset = reset.bind(tmp3Result);
    pause = tmp3Result.pause;
    tmp3Result.pause = pause.bind(tmp3Result);
    resume = tmp3Result.resume;
    tmp3Result.resume = resume.bind(tmp3Result);
    onAnimationFinish = tmp3Result.onAnimationFinish;
    tmp3Result.onAnimationFinish = onAnimationFinish.bind(tmp3Result);
    captureRef = tmp3Result.captureRef;
    tmp3Result.captureRef = captureRef.bind(tmp3Result);
    return tmp3Result;
  }
}
_inherits(LottieView, noop.PureComponent);
const entry = {
  key: "play",
  value: function play(arg0, arg1) {
    let num = arg0;
    const Commands = LottieView(5532).Commands;
    if (arg0 == null) {
      num = -1;
    }
    let num2 = arg1;
    if (arg1 == null) {
      num2 = -1;
    }
    Commands.play(this.lottieAnimationViewRef, num, num2);
  },
};
let items = [
  entry,
  {
    key: "reset",
    value: function reset() {
      const Commands = LottieView(5532).Commands;
      Commands.reset(this.lottieAnimationViewRef);
    },
  },
  {
    key: "pause",
    value: function pause() {
      const Commands = LottieView(5532).Commands;
      Commands.pause(this.lottieAnimationViewRef);
    },
  },
  {
    key: "resume",
    value: function resume() {
      const Commands = LottieView(5532).Commands;
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
      const self = this;
      const props = this.props;
      ({ source, duration, containerStyle } = props);
      ({ style, autoPlay, textFiltersAndroid, textFiltersIOS, resizeMode } = props);
      const tmp = _objectWithoutProperties(props, closure_3);
      let obj = LottieView(5533);
      const parsePossibleSourcesResult = obj.parsePossibleSources(source);
      if (duration) {
        if (parsePossibleSourcesResult.sourceJson) {
          if (source.fr) {
            const _Math = Math;
            let speed = Math.round(((source.op / source.fr) * 1000) / duration);
          }
          const colorFilters = self.props.colorFilters;
          let mapped;
          if (colorFilters != null) {
            mapped = colorFilters.map((color) => {
              const obj = {};
              const merged = Object.assign(color);
              obj.color = closure_1_9(color.color);
              return obj;
            });
          }
          obj = { ref: self.captureRef };
          let merged = Object.assign(tmp);
          obj.colorFilters = mapped;
          obj.textFiltersAndroid = textFiltersAndroid;
          obj.textFiltersIOS = textFiltersIOS;
          obj.speed = speed;
          obj.style = style;
          ({
            onAnimationFinish: obj2.onAnimationFinish,
            onAnimationFailure: obj2.onAnimationFailure,
            onAnimationLoaded: obj2.onAnimationLoaded,
          } = self);
          obj.autoPlay = autoPlay;
          obj.resizeMode = resizeMode;
          const merged1 = Object.assign(parsePossibleSourcesResult);
          return jsx(_modDef5532, { ref: self.captureRef });
        }
      }
      speed = self.props.speed;
    },
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      ({ source, containerStyle } = this.props);
      if (null == source) {
        const _console = console;
        console.warn("LottieView needs `source` parameter, provided value for source:", source);
        let renderLottieViewResult = null;
      } else if (containerStyle) {
        const obj = { style: containerStyle, collapsable: false, children: self.renderLottieView() };
        renderLottieViewResult = (
          <React6 style={containerStyle} collapsable={false}>
            {self.renderLottieView()}
          </React6>
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

export const LottieView = importDefaultResultResult;
