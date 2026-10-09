// === Module 7724: InAppReportsShieldElement ===

// Module 7724 (InAppReportsShieldElement)
import c from "c" /* 576 */;
import ShieldSpotIllustration from "ShieldSpotIllustration" /* 7513 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_4 = createStyles.createStyles({ container: { flex: 0, alignSelf: "center", marginBottom: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShieldElement.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ShieldElement(element) {
  const cResult = c.c(3);
  element = element.element;
  let container = closure_4();
  let tmp4 = null;
  if (null != element) {
    tmp4 = null;
    if ("success" === element.type) {
      const _Symbol = Symbol;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = jsx(ShieldSpotIllustration.ShieldSpotIllustration, { width: 100, height: 100 });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== container.container) {
        const obj2 = { style: container.container, children: first };
        const tmp11 = <View style={container.container}>{first}</View>;
        container = container.container;
        cResult[1] = container;
        cResult[2] = tmp11;
      }
    }
  }
  return tmp4;
}) : (function ShieldElement(element) {
  element = element.element;
  let tmp2 = null;
  if (null != element) {
    tmp2 = null;
    if ("success" === element.type) {
      const obj = { style: tmp.container, children: jsx(ShieldSpotIllustration.ShieldSpotIllustration, { width: 100, height: 100 }) };
      tmp2 = <View style={tmp.container}>{jsx(ShieldSpotIllustration.ShieldSpotIllustration, { width: 100, height: 100 })}</View>;
    }
  }
  return tmp2;
});