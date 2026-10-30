// discord_app/design/components/AccessibilityView/AccessibilityView.native.tsx
import useAccessibilityViewIsModalToggleDefault from "useAccessibilityViewIsModalToggle.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ReanimatedRexport from "../../../modules/reanimated/ReanimatedRexport.tsx";

class AccessibilityView {
  constructor(arg0) {
    flag = global.accessibilityViewIsModal;
    if (flag === undefined) {
      flag = false;
    }
    ({ nativeID, onAccessibilityEscape } = global);
    ({ collapsable, ref } = global);
    merged = Object.assign(
      global,
      Object.assign({ accessibilityViewIsModal: 0, nativeID: 0, collapsable: 0, onAccessibilityEscape: 0, ref: 0 }),
    );
    if (flag) {
      if (null == onAccessibilityEscape) {
        tmp7 = globalThis;
        _Error = Error;
        tmp8 = new.target;
        str = "Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.";
        tmp9 = new.target;
        error = new Error("Must have a onAccessibilityEscape callback when accessibilityViewIsModal is enabled.");
        tmp11 = error;
        throw error;
      }
    }
    tmp2 = closure_0(closure_1[3])({ accessibilityViewIsModal: flag, nativeID });
    obj = { ref, nativeID, collapsable: null, onAccessibilityEscape: null, accessibilityViewIsModal: null };
    tmp5 = null == nativeID;
    tmp3 = jsx;
    tmp4 = View;
    if (tmp5) {
      tmp5 = collapsable;
    }
    obj.collapsable = tmp5;
    obj.onAccessibilityEscape = onAccessibilityEscape;
    obj.accessibilityViewIsModal = flag;
    merged1 = Object.assign(merged);
    return tmp3(tmp4, obj);
  }
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const animatedComponent = ReanimatedRexport.createAnimatedComponent(AccessibilityView);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/AccessibilityView/AccessibilityView.native.tsx");

export { AccessibilityView };
export const AccessibilityViewAnimated = animatedComponent;
