// === Module 5574: _isNativeReflectConstruct ===

// Module 5574 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import _classCallCheck from "_classCallCheck";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import importDefaultResult from "_createClass";
import importDefaultResult1 from "_inherits";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";

let c9;
let metroImportAll;
let LottieView = arg1;
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
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
let closure_3 = ["style", "source", "autoPlay", "duration", "textFiltersAndroid", "textFiltersIOS", "resizeMode", "containerStyle"];
({ View: metroImportAll, processColor: c9 } = get_ActivityIndicator);
let obj = { source: "delete", progress: null, speed: true, loop: false, autoPlay: false, enableMergePathsAndroidForKitKatAndAbove: false, enableSafeModeAndroid: true, cacheComposition: false, useNativeLooping: "contain", resizeMode: null, colorFilters: [], textFiltersAndroid: [], textFiltersIOS: true };
obj[12] = [];
class LottieView {
  constructor(arg0) {
    self = this;
    tmp = _isNativeReflectConstruct(this, apply);
    items = [];
    items[0] = global;
    tmp2 = _isNativeReflectConstruct;
    obj = _isNativeReflectConstruct(apply);
    tmp3 = _isNativeReflectConstruct;
    if (_isNativeReflectConstruct()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    apply = tmp3Result;
    tmp3Result.onAnimationFinish = (nativeEvent) => {
      const props = tmp3Result.props;
      const onAnimationFinish = props.onAnimationFinish;
      if (onAnimationFinish != null) {
        onAnimationFinish(nativeEvent.nativeEvent.isCancelled);
      }
    };
    tmp3Result.onAnimationFailure = (nativeEvent) => {
      const props = tmp3Result.props;
      const onAnimationFailure = props.onAnimationFailure;
      if (onAnimationFailure != null) {
        onAnimationFailure(nativeEvent.nativeEvent.error);
      }
    };
    tmp3Result.onAnimationLoaded = () => {
      const props = tmp3Result.props;
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
importDefaultResult1(LottieView, require("noop").PureComponent);
obj = {
  key: "play",
  value: function play(arg0, arg1) {
    let num = arg0;
    const Commands = LottieView(5575).Commands;
    if (arg0 == null) {
      num = -1;
    }
    let num2 = arg1;
    if (arg1 == null) {
      num2 = -1;
    }
    Commands.play(this.lottieAnimationViewRef, num, num2);
  }
};
let items = [
  obj,
  {
    key: "reset",
    value: function reset() {
      const Commands = LottieView(5575).Commands;
      Commands.reset(this.lottieAnimationViewRef);
    }
  },
  {
    key: "pause",
    value: function pause() {
      const Commands = LottieView(5575).Commands;
      Commands.pause(this.lottieAnimationViewRef);
    }
  },
  {
    key: "resume",
    value: function resume() {
      const Commands = LottieView(5575).Commands;
      Commands.resume(this.lottieAnimationViewRef);
    }
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
    }
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
      const tmp = callback(props, closure_3);
      let obj = LottieView(5576);
      const parsePossibleSourcesResult = obj.parsePossibleSources(source);
      if (duration) {
        if (parsePossibleSourcesResult.sourceJson) {
          if (source.fr) {
            const _Math = Math;
            let speed = Math.round(source.op / source.fr * 1000 / duration);
          }
          const colorFilters = self.props.colorFilters;
          let mapped;
          if (colorFilters != null) {
            mapped = colorFilters.map((color) => {
              const obj = {};
              const merged = Object.assign(color);
              obj.color = callback(color.color);
              return obj;
            });
          }
          obj = { ref: null };
          obj[0] = self.captureRef;
          let merged = Object.assign(tmp);
          obj.colorFilters = mapped;
          obj.textFiltersAndroid = textFiltersAndroid;
          obj.textFiltersIOS = textFiltersIOS;
          obj.speed = speed;
          obj.style = style;
          ({ onAnimationFinish: obj2.onAnimationFinish, onAnimationFailure: obj2.onAnimationFailure, onAnimationLoaded: obj2.onAnimationLoaded } = self);
          obj.autoPlay = autoPlay;
          obj.resizeMode = resizeMode;
          const merged1 = Object.assign(parsePossibleSourcesResult);
          return jsx(importDefault(5575), { ref: null });
        }
      }
      speed = self.props.speed;
    }
  },
  {
    key: "render",
    value: function render() {
      let containerStyle;
      let source;
      const self = this;
      ({ source, containerStyle } = this.props);
      if (null == source) {
        const _console = console;
        console.warn("LottieView needs `source` parameter, provided value for source:", source);
        let renderLottieViewResult = null;
      } else if (containerStyle) {
        const obj = { style: null, collapsable: false, children: null };
        obj[0] = containerStyle;
        obj[2] = self.renderLottieView();
        renderLottieViewResult = <closure_8 style={null} collapsable={false}>{null}</closure_8>;
      } else {
        renderLottieViewResult = self.renderLottieView();
      }
      return renderLottieViewResult;
    }
  }
];
const importDefaultResultResult = importDefaultResult(LottieView, items);
importDefaultResultResult.defaultProps = obj;

export const LottieView = importDefaultResultResult;