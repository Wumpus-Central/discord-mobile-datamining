// discord_app/modules/status_bar/native/components/StatusBarManager.android.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import NativeSafeAreaInsetsModuleDefault from "../../../../../discord_common/js/packages/rtn-codegen/js/NativeSafeAreaInsetsModule.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const StatusBar = _mod17.StatusBar;
class StatusBarManager {
  constructor() {
    merged = Object.assign({ propsStack: null, updateImmediate: null });
    merged[0] = [];
    return merged;
  }
}
const prototype = StatusBarManager.prototype;
prototype["pushStackEntry"] = function pushStackEntry(hidden) {
  const obj = { hidden: hidden.hidden, barStyle: hidden.barStyle };
  const propsStack = this.propsStack;
  propsStack.push(obj);
  this.updatePropsStack();
  return obj;
};
prototype["popStackEntry"] = function popStackEntry(arg0) {
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
};
prototype["replaceStackEntry"] = function replaceStackEntry(arg0, hidden) {
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
};
prototype["updatePropsStack"] = function updatePropsStack() {
  const self = this;
  clearImmediate(this.updateImmediate);
  this.updateImmediate = setImmediate(() => {
    const items = [{ hidden: false, barStyle: "default" }, ...self.propsStack];
    const applyResult = _modDef12.merge.apply(items);
    StatusBar.setBarStyle(applyResult.barStyle);
    NativeSafeAreaInsetsModuleDefault.setStatusBarVisible(!applyResult.hidden);
  });
};
let merged = Object.assign({ propsStack: null, updateImmediate: null });
merged[0] = [];
const result = size.fileFinishedImporting("modules/status_bar/native/components/StatusBarManager.android.tsx");

export default merged;
