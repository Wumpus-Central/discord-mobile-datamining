// discord_app/components_native/QRCode.tsx
import nativeDefault from "../../discord_common/js/packages/tokens/native.tsx";
import native from "../../discord_common/js/packages/design/native.tsx";
import VisualEffectViewDefault from "../modules/visual_effect_view/native/VisualEffectView.tsx";
import VisualEffectViewThemedDefault from "../modules/visual_effect_view/native/VisualEffectViewThemed.tsx";
import QRCodeDefault from "../../_runtime/09526_QRCode.js";
import AssetRegistry from "../../_runtime/09540_AssetRegistry.js";
import _objectWithoutProperties from "../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../_runtime/00019_react.js";
import react_native from "../../_runtime/00017_react-native.js";
import Fragment from "../../_runtime/react/00021_Fragment.js";
import createStyles from "../design/components/Styles/native/createStyles.tsx";
import size from "../../_runtime/metro/00002__.js";

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let closure_3 = ["style", "text", "blur", "accessibilityLabel"];
({ View: hasOwnProperty, Image: metroRequire, StyleSheet: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = {
  qrCode: obj2,
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
obj2 = {
  display: "flex",
  alignSelf: "flex-start",
  padding: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.radii.xs,
};
const authStore = createStyles.createLegacyClassComponentStyles(obj);
let obj3 = { SIZE_40: "SIZE_40", SIZE_60: "SIZE_60" };
const frozen = Object.freeze({ [obj3.SIZE_40]: "size-40", [obj3.SIZE_60]: "size-60" });
const PureComponent = react.PureComponent;
class QRCode extends PureComponent {
  render() {
    let blur;
    let items;
    let items1;
    let obj2;
    let style;
    let text;
    const props = this.props;
    const accessibilityLabel = props.accessibilityLabel;
    ({ style, text, blur } = props);
    const tmp = closure_10(this.context);
    const tmp2 = _objectWithoutProperties(props, closure_3);
    let tmp3Result = null;
    const obj = {
      accessible: null != accessibilityLabel,
      accessibilityRole: "image",
      accessibilityLabel,
      style: items,
      children: React4(hasOwnProperty, obj2),
    };
    items = [tmp.qrCode, { backgroundColor: tmp2.bgColor }, style];
    obj2 = { style: { position: "relative", width: tmp2.size, height: tmp2.size }, children: items1 };
    obj3 = { value: text, level: "M" };
    const tmp9 = QRCodeDefault;
    const merged = Object.assign(tmp2);
    items1 = [metroImportAll(tmp9, obj3)];
    if (blur) {
      const obj4 = { style: metroImportDefault.absoluteFill, blurTheme: "dark" };
      tmp3Result = metroImportAll(VisualEffectViewDefault, obj4);
    }
    items1[1] = tmp3Result;
    return metroImportAll(hasOwnProperty, obj);
  }
}
const prototype = QRCode.prototype;
QRCode.contextType = native.ThemeContext;
QRCode.defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
const PureComponent2 = react.PureComponent;
class QRCodeWithOverlay extends PureComponent2 {
  render() {
    let items;
    let items1;
    let obj4;
    const tmp = closure_10(this.context);
    const props = this.props;
    let SIZE_40 = props.overlaySize;
    const blur = props.blur;
    if (SIZE_40 == null) {
      SIZE_40 = obj3.SIZE_40;
    }
    const obj = { style: tmp.qrCodeContainer, children: items };
    const obj2 = { blur: false };
    const tmp4 = frozen[SIZE_40];
    const merged = Object.assign(this.props);
    items = [metroImportAll(QRCode, obj2), ,];
    obj3 = { style: items1, children: metroImportAll(metroRequire, obj4) };
    items1 = [tmp.qrCodeOverlay, metroImportDefault.absoluteFill];
    obj4 = { style: tmp[tmp4], source: AssetRegistry };
    items[1] = metroImportAll(hasOwnProperty, obj3);
    let tmp7Result = null;
    if (blur) {
      const obj5 = { style: metroImportDefault.absoluteFill };
      tmp7Result = metroImportAll(VisualEffectViewThemedDefault, obj5);
    }
    items[2] = tmp7Result;
    return React4(hasOwnProperty, obj);
  }
}
const prototype2 = QRCodeWithOverlay.prototype;
QRCodeWithOverlay.contextType = native.ThemeContext;
QRCodeWithOverlay.defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
const result = size.fileFinishedImporting("components_native/QRCode.tsx");

export default QRCode;
export const QRCodeOverlaySizes = obj3;
export const QR_CODE_OVERLAY_SIZE_MAP = frozen;
export { QRCodeWithOverlay };
