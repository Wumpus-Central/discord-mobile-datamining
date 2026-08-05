import { QRCode } from "../../_runtime/09021_QRCode.js";
import { registerAsset } from "../../_runtime/09035_registerAsset.js";
import { VisualEffectViewThemed } from "../modules/visual_effect_view/native/VisualEffectViewThemed.tsx";
// discord_app/components_native/QRCode.tsx
import _objectWithoutProperties from "_objectWithoutProperties";
import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
let closure_3 = ["style", "text", "blur", "accessibilityLabel"];
({ View: c5, Image: closure_6, StyleSheet: error } = get_ActivityIndicator);
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
createCacheKey = { qrCode: null, qrCodeContainer: null, qrCodeOverlay: null, "size-40": null, "size-60": null };
createCacheKey = { display: "flex", alignSelf: "flex-start", padding: require("Themes").space.PX_8, borderRadius: require("Themes").radii.xs };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", alignSelf: "flex-start", alignItems: "center", justifyContent: "center", position: "relative" };
createCacheKey[2] = { display: "flex", alignItems: "center", justifyContent: "center" };
createCacheKey[3] = { width: 40, height: 40 };
createCacheKey[4] = { width: 60, height: 60 };
createCacheKey = createCacheKey.createLegacyClassComponentStyles(createCacheKey);
let obj1 = { SIZE_40: "SIZE_40", SIZE_60: "SIZE_60" };
const frozen = Object.freeze({ [obj1.SIZE_40]: "size-40", [obj1.SIZE_60]: "size-60" });
const PureComponent = importAllResult.PureComponent;
class QRCode extends PureComponent {
}
QRCode.prototype["render"] = function render() {
  let blur;
  let style;
  let text;
  const props = this.props;
  const accessibilityLabel = props.accessibilityLabel;
  ({ style, text, blur } = props);
  const tmp2 = callback(props, closure_3);
  let obj = { accessible: null != accessibilityLabel, accessibilityRole: "image", accessibilityLabel, style: items, children: null };
  let tmp3Result = null;
  items = [createCacheKey(this.context).qrCode, { backgroundColor: tmp2.bgColor }, style];
  obj = { style: obj, children: null };
  obj = { position: "relative", width: tmp2.size, height: tmp2.size };
  const obj1 = { value: text, level: "M" };
  const tmp = createCacheKey(this.context);
  const tmp6 = closure_9;
  const tmp7 = importDefault;
  const merged = Object.assign(tmp2);
  const items1 = [callback2(QRCode, obj1), ];
  if (blur) {
    const obj2 = { style: null, blurTheme: "dark" };
    obj2[0] = closure_7.absoluteFill;
    tmp3Result = tmp3(tmp7(4685), obj2);
  }
  items1[1] = tmp3Result;
  obj[1] = items1;
  obj[4] = tmp6(closure_5, obj);
  return callback2(closure_5, obj);
};
QRCode.contextType = require("ManaContext").ThemeContext;
QRCode.defaultProps = { size: 128, bgColor: "#ffffff", fgColor: "#000000" };
const PureComponent2 = importAllResult.PureComponent;
class QRCodeWithOverlay extends PureComponent2 {
}
QRCodeWithOverlay.prototype["render"] = function render() {
  const tmp = createCacheKey(this.context);
  const props = this.props;
  let SIZE_40 = props.overlaySize;
  if (SIZE_40 == null) {
    SIZE_40 = obj1.SIZE_40;
  }
  let obj = { style: tmp.qrCodeContainer, children: null };
  obj = {};
  const merged = Object.assign(this.props);
  obj.blur = false;
  const items = [callback2(QRCode, obj), , ];
  obj = { style: items1, children: null };
  items1 = [tmp.qrCodeOverlay, closure_7.absoluteFill];
  obj1 = { style: tmp[frozen[SIZE_40]], source: registerAsset /* registerAsset */ };
  obj[1] = callback2(closure_6, obj1);
  items[1] = callback2(closure_5, obj);
  let tmp6Result = null;
  if (props.blur) {
    const obj2 = { style: null };
    obj2[0] = closure_7.absoluteFill;
    tmp6Result = callback2(VisualEffectViewThemed, obj2);
  }
  items[2] = tmp6Result;
  obj[1] = items;
  return closure_9(closure_5, obj);
};
QRCodeWithOverlay.contextType = require("ManaContext").ThemeContext;
QRCodeWithOverlay.defaultProps = { size: 144, bgColor: "#ffffff", fgColor: "#000000" };
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/QRCode.tsx");

export default QRCode;
export const QRCodeOverlaySizes = obj1;
export const QR_CODE_OVERLAY_SIZE_MAP = frozen;
export { QRCodeWithOverlay };