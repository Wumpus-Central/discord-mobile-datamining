// === Module 13431: SequencedLottieAnimationView ===

// Module 13431 (SequencedLottieAnimationView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import LottieViewDefault from "LottieView" /* 5921 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_2 = ["source", "style"];
const View = react_native.View;
const jsx = Fragment.jsx;
const PureComponent = react.PureComponent;
class SequencedLottieAnimationView extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
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
  componentDidMount() {
    this.playScene(this.props.nextScene);
  }
  componentDidUpdate() {
    const self = this;
    const nextScene = this.props.nextScene;
    if (nextScene !== this.currentScene) {
      self.playScene(nextScene);
    }
  }
  playScene(nextScene) {
    const self = this;
    const sceneSegments = this.props.sceneSegments;
    let tmp3 = null == this.animationRef;
    if (!tmp3) {
      tmp3 = nextScene !== self.currentScene && sceneSegments[nextScene].BEG === sceneSegments[this.currentScene].BEG && sceneSegments[nextScene].END === sceneSegments[this.currentScene].END;
    }
    if (!tmp3) {
      const animationRef = self.animationRef;
      animationRef.play(sceneSegments[nextScene].BEG, sceneSegments[nextScene].END);
    }
    self.currentScene = nextScene;
  }
  render() {
    let source;
    let style;
    const props = this.props;
    ({ source, style } = props);
    let json;
    const tmp = _objectWithoutProperties(props, closure_2);
    if (typeof source === "object") {
      if (!source.uri) {
        const _JSON = JSON;
        json = JSON.stringify(source);
      }
    }
    let tmp4;
    if (undefined !== json) {
      tmp4 = { aspectRatio: source.w / source.h };
      const obj = { aspectRatio: source.w / source.h };
    }
    const items = [tmp4, style];
    const items1 = [tmp4, style];
    LottieViewDefault;
    const merged = Object.assign(tmp);
    ({ handleSetRef: obj3.ref, handleComplete: obj3.onAnimationFinish } = this);
    return <View style={items}>{null}</View>;
  }
}
const prototype = SequencedLottieAnimationView.prototype;
SequencedLottieAnimationView.defaultProps = { autoPlay: true };
const result = size.fileFinishedImporting("components_native/common/SequencedLottieAnimationView.tsx");

export default SequencedLottieAnimationView;