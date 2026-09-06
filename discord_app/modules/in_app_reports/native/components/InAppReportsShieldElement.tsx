// === Module 8648: InAppReportsShieldElement ===

// Module 8648 (InAppReportsShieldElement)
import native from "native" /* 5692 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({ container: { flex: 0, alignSelf: "center", marginBottom: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShieldElement.tsx");

export default function ShieldElement(element) {
  element = element.element;
  let tmp2 = null;
  if (null != element) {
    tmp2 = null;
    if ("success" === element.type) {
      const obj = { style: tmp.container, children: jsx(native.ShieldSpotIllustration, { width: 100, height: 100 }) };
      tmp2 = <View style={tmp.container}>{jsx(native.ShieldSpotIllustration, { width: 100, height: 100 })}</View>;
    }
  }
  return tmp2;
};