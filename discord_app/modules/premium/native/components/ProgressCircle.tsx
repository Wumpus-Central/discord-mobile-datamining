// discord_app/modules/premium/native/components/ProgressCircle.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import inlineStyles from "../../../../../_runtime/08453_inlineStyles.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const inlineStylesDefault = inlineStyles;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let createStyles = fn(4560);
let closure_6 = createStyles.createLegacyClassComponentStyles({
  progressCircle: { alignItems: "center", justifyContent: "center" },
  circle: { position: "absolute", width: "100%", height: "100%" },
  circleOverlay: { position: "relative", display: "flex", justifyContent: "center", alignItems: "center" },
});
const Component = noop.Component;
class ProgressCircle extends Component {}
const prototype = ProgressCircle.prototype;
prototype["renderCircle"] = function renderCircle() {
  const props = this.props;
  ({ size, strokeWidth } = props);
  const result = (size - strokeWidth) / 2;
  const result1 = result * Math.PI * 2;
  const bound = Math.min(Math.max(props.percent, 0), 100);
  let obj = { viewBox: null, style: null, children: null };
  const tmp = closure_6(this.context);
  obj.viewBox = "0 0 " + size + " " + size;
  obj.style = tmp.circle;
  obj = {
    fill: "none",
    cx: size / 2,
    cy: size / 2,
    r: result,
    strokeWidth,
    strokeLinecap: "round",
    transform: "rotate(-90 " + size / 2 + " " + size / 2 + ")",
    stroke: props.color,
    style: null,
  };
  obj = { strokeDasharray: result1, strokeDashoffset: (1 - bound / 100) * result1 };
  obj.style = obj;
  obj.children = React4(inlineStyles.Circle, obj);
  return React4(inlineStylesDefault, obj);
};
prototype["render"] = function render() {
  const tmp = closure_6(this.context);
  const props = this.props;
  const children = props.children;
  let obj = { style: null, children: null };
  const items = [tmp.progressCircle, props.style];
  obj.style = items;
  const items1 = [this.renderCircle()];
  let tmp4 = null;
  if (null != children) {
    obj = { style: tmp.circleOverlay, children };
    tmp4 = React4(View, obj);
  }
  items1[1] = tmp4;
  obj.children = items1;
  return hasOwnProperty(View, obj);
};
ProgressCircle.contextType = fn(4271).ThemeContext;
createStyles = { size: 20, strokeWidth: 0.9, color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
ProgressCircle.defaultProps = createStyles;
const size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/components/ProgressCircle.tsx");

export default ProgressCircle;
