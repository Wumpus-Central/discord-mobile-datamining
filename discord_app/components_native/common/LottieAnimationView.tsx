// discord_app/components_native/common/LottieAnimationView.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import { PureComponent } from "noop";
import importAllResult from "noop";
import { _isNativeReflectConstruct } from "../../../_runtime/05760__isNativeReflectConstruct.js";

let closure_2 = ["source", "style", "collapsable"];
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
  obj = { style: items, collapsable: props.collapsable, children: null };
  items = [tmp4, style];
  obj = { ref: this.setRef, source, style: items1 };
  items1 = [tmp4, style];
  const tmp = callback(props, closure_2);
  const merged = Object.assign(tmp);
  obj[2] = jsx(_isNativeReflectConstruct, { ref: this.setRef, source, style: items1 });
  return <View ref={this.setRef} source={source} style={items1} />;
};
LottieAnimationView.defaultProps = { autoPlay: true, loop: true, collapsable: false };
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/common/LottieAnimationView.tsx");

export default LottieAnimationView;