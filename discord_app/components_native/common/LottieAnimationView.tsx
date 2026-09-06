// discord_app/components_native/common/LottieAnimationView.tsx
import _isNativeReflectConstructDefault from "../../../_runtime/05530__isNativeReflectConstruct.js";
import closure_3 from "../../../_runtime/metro/00109__objectWithoutProperties.js";
import { View } from "../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../_runtime/00019_noop.js";

let closure_2 = ["source", "style", "collapsable"];
const PureComponent = importAllResult.PureComponent;
class LottieAnimationView extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.animation = null;
    applyArgumentsResult.setRef = function setRef(animation) {
      closure_0.animation = animation;
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
    let obj = { aspectRatio: null };
    obj[0] = source.w / source.h;
    tmp4 = obj;
  }
  obj = { style: items, collapsable: props.collapsable, children: null };
  items = [tmp4, style];
  obj = { ref: this.setRef, source, style: items1 };
  items1 = [tmp4, style];
  const tmp = callback(props, closure_2);
  const merged = Object.assign(tmp);
  obj[2] = jsx(_isNativeReflectConstructDefault, { ref: this.setRef, source, style: items1 });
  return <View ref={this.setRef} source={source} style={items1} />;
};
LottieAnimationView.defaultProps = { autoPlay: true, loop: true, collapsable: false };
const result = require("set").fileFinishedImporting("components_native/common/LottieAnimationView.tsx");

export default LottieAnimationView;
