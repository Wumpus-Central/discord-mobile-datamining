// === Module 9061: StatusBarManager ===

// Module 9061 (StatusBarManager)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import react_nativeDefault from "react-native" /* 1630 */;
import size from "module_2" /* 2 */;

const StatusBar = react_native.StatusBar;
class StatusBarManager {
  constructor() {
    const merged = Object.assign({ propsStack: null, updateImmediate: null });
    merged[0] = [];
    return merged;
  }
  pushStackEntry(hidden) {
    const obj = { hidden: hidden.hidden, barStyle: hidden.barStyle };
    const propsStack = this.propsStack;
    propsStack.push(obj);
    this.updatePropsStack();
    return obj;
  }
  popStackEntry(arg0) {
    const self = this;
    let num = -1;
    if (null != arg0) {
      const propsStack = self.propsStack;
      num = propsStack.indexOf(arg0);
    }
    if (-1 !== num) {
      const propsStack1 = self.propsStack;
      propsStack1.splice(num, 1);
      self.updatePropsStack();
    }
  }
  replaceStackEntry(arg0, hidden) {
    const self = this;
    const obj = { hidden: hidden.hidden, barStyle: hidden.barStyle };
    let num = -1;
    if (null != arg0) {
      const propsStack = self.propsStack;
      num = propsStack.indexOf(arg0);
    }
    if (-1 !== num) {
      self.propsStack[num] = obj;
    }
    self.updatePropsStack();
    return obj;
  }
  updatePropsStack() {
    const self = this;
    clearImmediate(this.updateImmediate);
    this.updateImmediate = setImmediate(() => {
      const items = [{ hidden: false, barStyle: "default" }, ...self.propsStack];
      const tmp = _modDef12;
      const applyResult = tmp.merge.apply(items);
      const hidden = applyResult.hidden;
      StatusBar.setBarStyle(applyResult.barStyle);
      const obj = react_nativeDefault;
      obj.setStatusBarVisible(!hidden);
    });
  }
}
const prototype = StatusBarManager.prototype;
let merged = Object.assign({ propsStack: null, updateImmediate: null });
merged[0] = [];
const result = size.fileFinishedImporting("modules/status_bar/native/components/StatusBarManager.android.tsx");

export default merged;