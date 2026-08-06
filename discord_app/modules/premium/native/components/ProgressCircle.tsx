// discord_app/modules/premium/native/components/ProgressCircle.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Component } from "noop";
import importAllResult from "noop";
import { inlineStyles } from "../../../../../_runtime/07758_inlineStyles.js";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createLegacyClassComponentStyles({ progressCircle: { alignItems: "center", justifyContent: "center" }, circle: { position: "absolute", width: "100%", height: "100%" }, circleOverlay: { position: "relative", display: "flex", justifyContent: "center", alignItems: "center" } });
class ProgressCircle extends Component {
}
const prototype = ProgressCircle.prototype;
prototype["renderCircle"] = function renderCircle() {
  let size;
  let strokeWidth;
  const props = this.props;
  ({ size, strokeWidth } = props);
  const result = (size - strokeWidth) / 2;
  const result1 = result * Math.PI * 2;
  const bound = Math.min(Math.max(props.percent, 0), 100);
  let obj = { viewBox: null, style: null, children: null };
  const tmp = callback2(this.context);
  obj[0] = "0 0 " + size + " " + size;
  obj[1] = tmp.circle;
  obj = { fill: "none", cx: size / 2, cy: size / 2, r: result, strokeWidth, strokeLinecap: "round", transform: null, stroke: null, style: null };
  obj[6] = "rotate(-90 " + size / 2 + " " + size / 2 + ")";
  obj[7] = props.color;
  obj = { strokeDasharray: result1, strokeDashoffset: (1 - bound / 100) * result1 };
  obj[8] = obj;
  obj[2] = callback(inlineStyles.Circle, obj);
  return callback(inlineStyles, obj);
};
prototype["render"] = function render() {
  const tmp = callback2(this.context);
  const props = this.props;
  const children = props.children;
  let obj = { style: items, children: null };
  items = [tmp.progressCircle, props.style];
  const items1 = [this.renderCircle(), ];
  let tmp4 = null;
  if (null != children) {
    obj = { style: null, children: null };
    obj[0] = tmp.circleOverlay;
    obj[1] = children;
    tmp4 = callback(tmp3, obj);
  }
  items1[1] = tmp4;
  obj[1] = items1;
  return closure_5(View, obj);
};
ProgressCircle.contextType = require("ManaContext").ThemeContext;
createCacheKey = { size: 20, strokeWidth: 0.9, color: require("Themes").unsafe_rawColors.GUILD_BOOSTING_PINK };
ProgressCircle.defaultProps = createCacheKey;
let result = require("jsxProd").fileFinishedImporting("modules/premium/native/components/ProgressCircle.tsx");

export default ProgressCircle;