// === Module 16997: VibegrationsSelectModeIcon ===

// Module 16997 (VibegrationsSelectModeIcon)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4457 */;
import inlineStyles from "inlineStyles" /* 8728 */;
import noop from "module_19" /* 19 */;

require = fn;
class VibegrationsSelectModeIcon {
  constructor(arg0) {
    INTERACTIVE_ICON_DEFAULT = global.color;
    if (INTERACTIVE_ICON_DEFAULT === undefined) {
      tmp = closure_1;
      tmp2 = closure_2;
      INTERACTIVE_ICON_DEFAULT = closure_1(closure_2[2]).colors.INTERACTIVE_ICON_DEFAULT;
    }
    obj = closure_0(closure_2[3]);
    token = obj.useToken(INTERACTIVE_ICON_DEFAULT);
    size = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", accessible: false, children: null };
    tmp4 = closure_1(closure_2[4]);
    obj1 = { children: null };
    obj6 = { id: c5, children: jsx(closure_0(closure_2[4]).Rect, { width: 24, height: 24, rx: 8 }) };
    obj1.children = jsx(closure_0(closure_2[4]).ClipPath, obj6);
    items = [, ];
    items[0] = jsx(closure_0(closure_2[4]).Defs, obj1);
    obj7 = { clipPath: "url(#" + c5 + ")", children: jsx(closure_0(closure_2[4]).Path, { d: "M20.6996 10.7515L15.1195 12.6108C15.1195 12.6108 13.9587 12.9065 13.4323 13.4325C12.9055 13.959 12.6105 15.1198 12.6105 15.1198L10.7513 20.6999C10.3493 21.9063 8.6428 21.906 8.24046 20.6995L2.84448 4.51832C2.49948 3.48376 3.48352 2.49972 4.51808 2.84472L20.6992 8.2407C21.9057 8.64305 21.906 10.3495 20.6996 10.7515Z", fill: token }) };
    items[1] = jsx(closure_0(closure_2[4]).G, obj7);
    size.children = items;
    return jsxs(tmp4, size);
  }
}
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const hasOwnProperty = "vibegrations-select-mode-clip";
let size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSelectModeIcon.tsx");

export default VibegrationsSelectModeIcon;
export const VibegrationsSelectModeActiveIcon = function VibegrationsSelectModeActiveIcon() {
  return React3(VibegrationsSelectModeIcon, { color: nativeDefault.colors.TEXT_BRAND });
};