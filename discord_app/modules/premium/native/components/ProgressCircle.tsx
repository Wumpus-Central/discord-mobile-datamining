// === Module 12251: ProgressCircle ===

// Module 12251 (ProgressCircle)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 4589 */;
import inlineStyles from "inlineStyles" /* 8136 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const metroRequire = createStyles.createLegacyClassComponentStyles({ progressCircle: { alignItems: "center", justifyContent: "center" }, circle: { position: "absolute", width: "100%", height: "100%" }, circleOverlay: { position: "relative", display: "flex", justifyContent: "center", alignItems: "center" } });
const Component = react.Component;
class ProgressCircle extends Component {
  renderCircle() {
    let Circle;
    let obj2;
    let obj3;
    let strokeWidth;
    const props = this.props;
    ({ size, strokeWidth } = props);
    const color = props.color;
    const result = (size - strokeWidth) / 2;
    const result1 = result * Math.PI * 2;
    const tmp = closure_6(this.context);
    const bound = Math.min(Math.max(props.percent, 0), 100);
    const obj = { viewBox: "0 0 " + size + " " + size, style: tmp.circle, children: React3(Circle, obj2) };
    const tmp5 = inlineStylesDefault;
    obj2 = { fill: "none", cx: size / 2, cy: size / 2, r: result, strokeWidth, strokeLinecap: "round", transform: "rotate(-90 " + size / 2 + " " + size / 2 + ")", stroke: color, style: obj3 };
    Circle = inlineStyles.Circle;
    obj3 = { strokeDasharray: result1, strokeDashoffset: (1 - bound / 100) * result1 };
    return React3(tmp5, obj);
  }
  render() {
    let items;
    let items1;
    const tmp = closure_6(this.context);
    const props = this.props;
    const children = props.children;
    const obj = { style: items, children: items1 };
    items = [tmp.progressCircle, props.style];
    items1 = [this.renderCircle(), ];
    let tmp4 = null;
    if (null != children) {
      const obj2 = { style: tmp.circleOverlay, children };
      tmp4 = React3(View, obj2);
    }
    items1[1] = tmp4;
    return hasOwnProperty(View, obj);
  }
}
const prototype = ProgressCircle.prototype;
ProgressCircle.contextType = native.ThemeContext;
let obj = { size: 20, strokeWidth: 0.9, color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
ProgressCircle.defaultProps = obj;
let result = size.fileFinishedImporting("modules/premium/native/components/ProgressCircle.tsx");

export default ProgressCircle;