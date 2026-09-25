// === Module 5250: ScreenFooter ===

// Module 5250 (ScreenFooter)
import _modDef5251 from "module_5251" /* 5251 */;
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