// === Module 6322: ScreenFooter ===

// Module 6322 (ScreenFooter)
import _modDef6323 from "module_6323" /* 6323 */;
import noop from "module_19" /* 19 */;

class ScreenFooter {
  constructor(arg0) {
    obj = {};
    tmp = closure_0(closure_1[2]);
    merged = Object.assign(global);
    return jsx(tmp, obj);
  }
}
const jsx = fn(21).jsx;

export default ScreenFooter;
export function FooterComponent(children) {
  return <ScreenFooter collapsable={false}>{children.children}</ScreenFooter>;
}