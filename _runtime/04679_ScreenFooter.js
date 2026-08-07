// _runtime/04679_ScreenFooter.js
import "noop";
import { jsx } from "jsxProd";

class ScreenFooter {
  constructor(arg0) {
    obj = {};
    tmp = require("__INTERNAL_VIEW_CONFIG");
    merged = Object.assign(global);
    return jsx(tmp, obj);
  }
}

export default ScreenFooter;
export const FooterComponent = function FooterComponent(children) {
  return <ScreenFooter collapsable={false}>{arg0.children}</ScreenFooter>;
};