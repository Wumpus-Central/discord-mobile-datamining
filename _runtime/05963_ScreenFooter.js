// === Module 5963: ScreenFooter ===

// Module 5963 (ScreenFooter)
import _modDef5964 from "module_5964" /* 5964 */;
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
export const FooterComponent = function FooterComponent(children) {
  return <ScreenFooter collapsable={false}>{children.children}</ScreenFooter>;
};