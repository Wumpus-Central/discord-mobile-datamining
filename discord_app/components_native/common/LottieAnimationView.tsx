// === Module 5920: LottieAnimationView ===

// Module 5920 (LottieAnimationView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import LottieViewDefault from "LottieView" /* 5921 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_2 = ["source", "style", "collapsable"];
const View = react_native.View;
const jsx = Fragment.jsx;
const PureComponent = react.PureComponent;
class LottieAnimationView extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.animation = null;
    applyArgumentsResult.setRef = function setRef(animation) {
      applyArgumentsResult.animation = animation;
    };
    return applyArgumentsResult;
  }
  play() {
    if (null != this.animation) {
      const animation = this.animation;
      animation.play();
    }
  }
  reset() {
    if (null != this.animation) {
      const animation = this.animation;
      animation.reset();
    }
  }
  pause() {
    if (null != this.animation) {
      const animation = this.animation;
      animation.pause();
    }
  }
  resume() {
    if (null != this.animation) {
      const animation = this.animation;
      animation.resume();
    }
  }
  render() {
    let source;
    let style;
    const props = this.props;
    ({ source, style } = props);
    const collapsable = props.collapsable;
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
    return <View style={items} collapsable={collapsable}>{null}</View>;
  }
}
const prototype = LottieAnimationView.prototype;
LottieAnimationView.defaultProps = { autoPlay: true, loop: true, collapsable: false };
const result = size.fileFinishedImporting("components_native/common/LottieAnimationView.tsx");

export default LottieAnimationView;