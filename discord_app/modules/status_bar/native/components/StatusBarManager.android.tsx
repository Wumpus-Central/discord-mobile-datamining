import { StatusBar } from "get ActivityIndicator";

class StatusBarManager {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[0] = [];
    return obj;
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
    const applyResult = self(outer1_1[1]).merge.apply(items);
    outer1_2.setBarStyle(applyResult.barStyle);
    const tmp = self(outer1_1[1]);
    self(outer1_1[2]).setStatusBarVisible(!applyResult.hidden);
  });
};
let obj = Object.create(StatusBarManager.prototype);
obj[0] = [];
const result = require("enforcing").fileFinishedImporting("modules/status_bar/native/components/StatusBarManager.android.tsx");

export default obj;