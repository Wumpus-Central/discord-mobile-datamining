// discord_app/components_native/QRCode.tsx
import nativeDefault from "../../discord_common/js/packages/tokens/native.tsx";
import VisualEffectViewDefault from "../modules/visual_effect_view/native/VisualEffectView.tsx";
import VisualEffectViewThemedDefault from "../modules/visual_effect_view/native/VisualEffectViewThemed.tsx";
import QRCodeDefault from "../../_runtime/09865_QRCode.js";
import _mod9879 from "../../_runtime/metro/09879__.js";
import _objectWithoutProperties from "../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["style", "text", "blur", "accessibilityLabel"];
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Image: metroRequire, StyleSheet: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { qrCode: null, qrCodeContainer: null, qrCodeOverlay: null, "size-40": null, "size-60": null };
createStyles = {
  display: "flex",
  alignSelf: "flex-start",
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.xs,
};
createStyles.qrCode = createStyles;
createStyles.qrCodeContainer = {
  display: "flex",
  alignSelf: "flex-start",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
};
createStyles.qrCodeOverlay = { display: "flex", alignItems: "center", justifyContent: "center" };
createStyles["size-40"] = { width: 40, height: 40 };
createStyles["size-60"] = { width: 60, height: 60 };
let closure_10 = createStyles.createLegacyClassComponentStyles(createStyles);
let obj1 = { SIZE_40: "SIZE_40", SIZE_60: "SIZE_60" };
const frozen = Object.freeze({ [obj1.SIZE_40]: "size-40", [obj1.SIZE_60]: "size-60" });
const PureComponent = noop.PureComponent;
class QRCode extends PureComponent {}
QRCode.prototype["render"] = function render() {
  const props = this.props;
  const accessibilityLabel = props.accessibilityLabel;
  ({ style, text, blur } = props);
  const tmp2 = _objectWithoutProperties(props, closure_3);
  let obj = {
    accessible: null != accessibilityLabel,
    accessibilityRole: "image",
    accessibilityLabel,
    style: null,
    children: null,
  };
  let tmp3Result = null;
  const items = [closure_10(this.context).qrCode, { backgroundColor: tmp2.bgColor }, style];
  obj.style = items;
  obj = { style: { position: "relative", width: tmp2.size, height: tmp2.size }, children: null };
  obj = { value: text, level: "M" };
  const tmp = closure_10(this.context);
  const merged = Object.assign(tmp2);
  const items1 = [React6(QRCodeDefault, obj)];
  if (blur) {
    obj1 = { style: React5.absoluteFill, blurTheme: "dark" };
    tmp3Result = React6(VisualEffectViewDefault, obj1);
  }
  items1[1] = tmp3Result;
  obj.children = items1;
  obj.children = React7(hasOwnProperty, obj);
  return React6(hasOwnProperty, obj);
};
QRCode.contextType = fn(4271).ThemeContext;
QRCode.defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
const PureComponent2 = noop.PureComponent;
class QRCodeWithOverlay extends PureComponent2 {}
QRCodeWithOverlay.prototype["render"] = function render() {
  const tmp = closure_10(this.context);
  const props = this.props;
  let SIZE_40 = props.overlaySize;
  if (SIZE_40 == null) {
    SIZE_40 = obj1.SIZE_40;
  }
  let obj = { style: tmp.qrCodeContainer, children: null };
  obj = {};
  const merged = Object.assign(this.props);
  obj.blur = false;
  const items = [React6(QRCode, obj), ,];
  obj = { style: null, children: null };
  const items1 = [tmp.qrCodeOverlay, React5.absoluteFill];
  obj.style = items1;
  obj1 = { style: tmp[frozen[SIZE_40]], source: _mod9879 };
  obj.children = React6(timestampProducer, obj1);
  items[1] = React6(hasOwnProperty, obj);
  let tmp6Result = null;
  if (props.blur) {
    const obj2 = { style: React5.absoluteFill };
    tmp6Result = React6(VisualEffectViewThemedDefault, obj2);
  }
  items[2] = tmp6Result;
  obj.children = items;
  return React7(hasOwnProperty, obj);
};
QRCodeWithOverlay.contextType = fn(4271).ThemeContext;
QRCodeWithOverlay.defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/QRCode.tsx");

export default QRCode;
export const QRCodeOverlaySizes = obj1;
export const QR_CODE_OVERLAY_SIZE_MAP = frozen;
export { QRCodeWithOverlay };
