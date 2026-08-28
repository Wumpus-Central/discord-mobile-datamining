// === Module 5911: _isNativeReflectConstruct ===

// Module 5911 (_isNativeReflectConstruct)
import noopDefault from "noop" /* 19 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 5912 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import closure_5 from "_classCallCheck" /* 41 */;
import closure_6 from "_possibleConstructorReturn" /* 93 */;
import closure_7 from "_getPrototypeOf" /* 95 */;
import importDefaultResult from "_createClass" /* 42 */;
import importDefaultResult1 from "_inherits" /* 98 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const LottieView = arg1;
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
  } catch (err) {
  }
}
let closure_3 = ["style", "source", "autoPlay", "duration", "textFiltersAndroid", "textFiltersIOS", "resizeMode", "containerStyle"];
({ View: closure_8, processColor: c9 } = get_ActivityIndicator);
let obj = { source: "sa", progress: null, speed: true, loop: false, autoPlay: false, enableMergePathsAndroidForKitKatAndAbove: false, enableSafeModeAndroid: true, cacheComposition: false, useNativeLooping: "contain", resizeMode: null, colorFilters: [], textFiltersAndroid: [], textFiltersIOS: true };
obj[12] = [];
class LottieView {
  constructor(arg0) {
    self = this;
    tmp = closure_5(this, closure_0);
    items = [];
    items[0] = global;
    tmp2 = closure_7;
    obj = closure_7(closure_0);
    tmp3 = closure_6;
    if (_isNativeReflectConstruct()) {
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
importDefaultResult1(LottieView, noopDefault.PureComponent);
obj = {
  key: "play",
  value: function play(arg0, arg1) {
    let num = arg0;
    const Commands = LottieView(5912).Commands;
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
      const Commands = LottieView(5912).Commands;
      Commands.reset(this.lottieAnimationViewRef);
    }
  },
  {
    key: "pause",
    value: function pause() {
      const Commands = LottieView(5912).Commands;
      Commands.pause(this.lottieAnimationViewRef);
    }
  },
  {
    key: "resume",
    value: function resume() {
      const Commands = LottieView(5912).Commands;
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
      const self = this;
      const props = this.props;
      ({ source, duration, containerStyle } = props);
      ({ style, autoPlay, textFiltersAndroid, textFiltersIOS, resizeMode } = props);
      const tmp = callback(props, closure_3);
      let obj = LottieView(5913);
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
          return jsx(__INTERNAL_VIEW_CONFIGDefault, { ref: null });
        }
      }
      speed = self.props.speed;
    }
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