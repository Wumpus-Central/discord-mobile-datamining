// discord_app/components_native/common/SequencedLottieAnimationView.tsx
import _modDef5530 from "../../../_runtime/metro/05530__.js";
import _objectWithoutProperties from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../_runtime/metro/00019__.js";

let closure_2 = ["source", "style"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const PureComponent = noop.PureComponent;
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
      applyArgumentsResult.animationRef = animationRef;
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
    let obj = { aspectRatio: source.w / source.h };
    tmp4 = obj;
  }
  obj = { style: null, children: null };
  const items = [tmp4, style];
  obj.style = items;
  obj = { source, style: null };
  const items1 = [tmp4, style];
  obj.style = items1;
  const tmp = _objectWithoutProperties(props, closure_2);
  const merged = Object.assign(tmp);
  ({ handleSetRef: obj3.ref, handleComplete: obj3.onAnimationFinish } = this);
  obj.children = jsx(_modDef5530, { source, style: null });
  return <View source={source} style={null} />;
};
SequencedLottieAnimationView.defaultProps = { autoPlay: true };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/SequencedLottieAnimationView.tsx");

export default SequencedLottieAnimationView;
