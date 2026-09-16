// === Module 5615: LottieAnimationView ===

// Module 5615 (LottieAnimationView)
import _modDef5616 from "module_5616" /* 5616 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

let closure_2 = ["source", "style", "collapsable"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const PureComponent = noop.PureComponent;
class LottieAnimationView extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.animation = null;
    applyArgumentsResult.setRef = function setRef(animation) {
      applyArgumentsResult.animation = animation;
    };
    return applyArgumentsResult;
  }
}
const prototype = LottieAnimationView.prototype;
prototype["play"] = function play() {
  if (null != this.animation) {
    const animation = this.animation;
    animation.play();
  }
};
prototype["reset"] = function reset() {
  if (null != this.animation) {
    const animation = this.animation;
    animation.reset();
  }
};
prototype["pause"] = function pause() {
  if (null != this.animation) {
    const animation = this.animation;
    animation.pause();
  }
};
prototype["resume"] = function resume() {
  if (null != this.animation) {
    const animation = this.animation;
    animation.resume();
  }
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
    const obj = { aspectRatio: source.w / source.h };
    tmp4 = obj;
  }
  const obj2 = { style: null, collapsable: props.collapsable, children: null };
  const items = [tmp4, style];
  obj2.style = items;
  const obj3 = { ref: this.setRef, source, style: null };
  const items1 = [tmp4, style];
  obj3.style = items1;
  const tmp = _objectWithoutProperties(props, closure_2);
  const merged = Object.assign(tmp);
  obj2.children = jsx(_modDef5616, { ref: this.setRef, source, style: null });
  return <View style={null} collapsable={props.collapsable}>{null}</View>;
};
LottieAnimationView.defaultProps = { autoPlay: true, loop: true, collapsable: false };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/common/LottieAnimationView.tsx");

export default LottieAnimationView;