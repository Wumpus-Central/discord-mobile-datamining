// discord_app/components_native/common/SequencedLottieAnimationView.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { PureComponent } from "noop";
import importAllResult from "noop";
import { _isNativeReflectConstruct } from "../../../_runtime/05660__isNativeReflectConstruct.js";

let closure_2 = ["source", "style"];
class SequencedLottieAnimationView extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.animationRef = null;
    applyArgumentsResult.currentScene = applyArgumentsResult.props.nextScene;
    applyArgumentsResult.isUnmounted = false;
    applyArgumentsResult.handleComplete = function handleComplete() {
      const onSceneComplete = applyArgumentsResult.props.onSceneComplete;
      if (null != onSceneComplete) {
        onSceneComplete(applyArgumentsResult.currentScene);
      }
    };
    applyArgumentsResult.handleSetRef = function handleSetRef(animationRef) {
      closure_0.animationRef = animationRef;
    };
    return applyArgumentsResult;
  }
}
const prototype = SequencedLottieAnimationView.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this.playScene(this.props.nextScene);
};
prototype["componentDidUpdate"] = function componentDidUpdate() {
  const self = this;
  const nextScene = this.props.nextScene;
  if (nextScene !== this.currentScene) {
    self.playScene(nextScene);
  }
};
prototype["playScene"] = function playScene(nextScene) {
  const self = this;
  const sceneSegments = this.props.sceneSegments;
  let tmp3 = null == this.animationRef;
  if (!tmp3) {
    tmp3 = nextScene !== self.currentScene && tmp.BEG === tmp2.BEG && tmp.END === tmp2.END;
    const tmp4 = nextScene !== self.currentScene && tmp.BEG === tmp2.BEG && tmp.END === tmp2.END;
  }
  if (!tmp3) {
    const animationRef = self.animationRef;
    animationRef.play(tmp.BEG, tmp.END);
  }
  self.currentScene = nextScene;
};
prototype["render"] = function render() {
  let source;
  let style;
  const props = this.props;
  ({ source, style } = props);
  let json;
  if (typeof source === "object") {
    if (!source.uri) {
      const _JSON = JSON;
      json = JSON.stringify(source);
    }
  }
  let tmp4;
  if (undefined !== json) {
    let obj = { aspectRatio: null };
    obj[0] = source.w / source.h;
    tmp4 = obj;
  }
  obj = { style: items, children: null };
  items = [tmp4, style];
  obj = { source, style: items1 };
  items1 = [tmp4, style];
  const tmp = callback(props, closure_2);
  const merged = Object.assign(tmp);
  ({ handleSetRef: obj3.ref, handleComplete: obj3.onAnimationFinish } = this);
  obj[1] = jsx(_isNativeReflectConstruct, { source, style: items1 });
  return <View source={source} style={items1} />;
};
SequencedLottieAnimationView.defaultProps = { autoPlay: true };
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/common/SequencedLottieAnimationView.tsx");

export default SequencedLottieAnimationView;