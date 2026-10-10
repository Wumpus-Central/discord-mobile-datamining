// discord_app/components_native/QRCode.tsx
import nativeDefault from "../../discord_common/js/packages/tokens/native.tsx";
import VisualEffectViewDefault from "../modules/visual_effect_view/native/VisualEffectView.tsx";
import FastImageDefault from "common/FastImage.tsx";
import VisualEffectViewThemedDefault from "../modules/visual_effect_view/native/VisualEffectViewThemed.tsx";
import QRCodeDefault from "../../_runtime/08734_QRCode.js";
import _mod8748 from "../../_runtime/metro/08748__.js";
import _objectWithoutProperties from "../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = ["style", "text", "blur", "accessibilityLabel"];
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  qrCode: {
    display: "flex",
    alignSelf: "flex-start",
    padding: nativeDefault.space.PX_8,
    borderRadius: nativeDefault.radii.xs,
  },
  qrCodeContainer: {
    display: "flex",
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  qrCodeOverlay: { display: "flex", alignItems: "center", justifyContent: "center" },
  "size-40": { width: 40, height: 40 },
  "size-60": { width: 60, height: 60 },
};
let closure_9 = createStyles.createLegacyClassComponentStyles(obj2);
let obj4 = { SIZE_40: "SIZE_40", SIZE_60: "SIZE_60" };
const frozen = Object.freeze({ [obj4.SIZE_40]: "size-40", [obj4.SIZE_60]: "size-60" });
const PureComponent = noop.PureComponent;
class QRCode extends PureComponent {}
QRCode.prototype["render"] = function render() {
  const props = this.props;
  const accessibilityLabel = props.accessibilityLabel;
  ({ style, text, blur } = props);
  const tmp2 = _objectWithoutProperties(props, closure_3);
  const obj = {
    accessible: null != accessibilityLabel,
    accessibilityRole: "image",
    accessibilityLabel,
    style: null,
    children: null,
  };
  let tmp3Result = null;
  const items = [closure_9(this.context).qrCode, { backgroundColor: tmp2.bgColor }, style];
  obj.style = items;
  const obj2 = { style: { position: "relative", width: tmp2.size, height: tmp2.size }, children: null };
  const obj3 = { value: text, level: "M" };
  const tmp = closure_9(this.context);
  const merged = Object.assign(tmp2);
  const items1 = [React5(QRCodeDefault, obj3)];
  if (blur) {
    obj4 = { style: timestampProducer.absoluteFill, blurTheme: "dark" };
    tmp3Result = React5(VisualEffectViewDefault, obj4);
  }
  items1[1] = tmp3Result;
  obj2.children = items1;
  obj.children = closure_1_8(hasOwnProperty, obj2);
  return React5(hasOwnProperty, obj);
};
QRCode.contextType = fn(4827).ThemeContext;
QRCode.defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
const PureComponent2 = noop.PureComponent;
class QRCodeWithOverlay extends PureComponent2 {}
QRCodeWithOverlay.prototype["render"] = function render() {
  const tmp = closure_9(this.context);
  const props = this.props;
  let SIZE_40 = props.overlaySize;
  if (SIZE_40 == null) {
    SIZE_40 = obj4.SIZE_40;
  }
  const obj = { style: tmp.qrCodeContainer, children: null };
  const obj2 = {};
  const merged = Object.assign(this.props);
  obj2.blur = false;
  const items = [React5(QRCode, obj2), ,];
  const obj3 = { style: null, children: null };
  const items1 = [tmp.qrCodeOverlay, timestampProducer.absoluteFill];
  obj3.style = items1;
  obj4 = { style: tmp[frozen[SIZE_40]], source: _mod8748 };
  obj3.children = React5(FastImageDefault, obj4);
  items[1] = React5(hasOwnProperty, obj3);
  let tmp6Result = null;
  if (props.blur) {
    const obj5 = { style: timestampProducer.absoluteFill };
    tmp6Result = React5(VisualEffectViewThemedDefault, obj5);
  }
  items[2] = tmp6Result;
  obj.children = items;
  return closure_1_8(hasOwnProperty, obj);
};
QRCodeWithOverlay.contextType = fn(4827).ThemeContext;
QRCodeWithOverlay.defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/QRCode.tsx");

export default QRCode;
export const QRCodeOverlaySizes = obj4;
export const QR_CODE_OVERLAY_SIZE_MAP = frozen;
export { QRCodeWithOverlay };
