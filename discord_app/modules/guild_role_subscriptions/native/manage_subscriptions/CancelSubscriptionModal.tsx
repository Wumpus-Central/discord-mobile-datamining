// === Module 16501: CancelSubscriptionModal ===

// Module 16501 (CancelSubscriptionModal)
import NavigatorHeader from "NavigatorHeader" /* 6010 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["onClose"];
const View = fn(17).View;
const jsx = fn(21).jsx;
const constants = { CANCEL_SUBSCRIPTION: "CANCEL_SUBSCRIPTION" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/CancelSubscriptionModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((onClose) => {
  const cResult = require("c").c(10);
  if (cResult[0] !== onClose) {
    onClose = onClose.onClose;
    _require = onClose;
    const tmp8 = _objectWithoutProperties(onClose, closure_3);
    importDefault = tmp8;
    cResult[0] = onClose;
    cResult[1] = onClose;
    cResult[2] = tmp8;
    class N {
      constructor() {
        obj = { screens: null, initialStack: null };
        obj1 = {};
        obj6 = { render() { ... }, title: "Subscriptions", headerLeft: null };
        obj4 = closure_0(closure_2[8]);
        obj6.headerLeft = obj4.getHeaderCloseButton(closure_0);
        obj1[closure_7.CANCEL_SUBSCRIPTION] = obj6;
        obj.screens = obj1;
        obj7 = { name: closure_7.CANCEL_SUBSCRIPTION, params: closure_1 };
        items = [];
        items[0] = obj7;
        obj.initialStack = items;
        return obj;
      }
    }
  } else {
    _require = cResult[1];
    importDefault = cResult[2];
  }
  bottom = require("useSafeAreaInsets")().bottom;
  if (cResult[3] === bottom) {
    if (cResult[4] === tmp4) {
      if (cResult[5] === tmp5) {
        let tmp10 = cResult[6];
      }
      ({ screens, initialStack } = tmp9(tmp2[9])(tmp10));
      if (cResult[7] === initialStack) {
        if (cResult[8] === screens) {
          let tmp12 = cResult[9];
        }
        return tmp12;
      }
      let obj2 = { screens, initialRouteStack: initialStack };
      const tmp14 = jsx(tmp(tmp2[10]).Navigator, { screens, initialRouteStack: initialStack });
      cResult[7] = initialStack;
      class N {
        constructor() {
          obj = { screens: null, initialStack: null };
          obj1 = {};
          obj6 = { render() { ... }, title: "Subscriptions", headerLeft: null };
          obj4 = closure_0(closure_2[8]);
          obj6.headerLeft = obj4.getHeaderCloseButton(closure_0);
          obj1[closure_7.CANCEL_SUBSCRIPTION] = obj6;
          obj.screens = obj1;
          obj7 = { name: closure_7.CANCEL_SUBSCRIPTION, params: closure_1 };
          items = [];
          items[0] = obj7;
          obj.initialStack = items;
          return obj;
        }
      }
      cResult[8] = screens;
      cResult[9] = tmp14;
      tmp12 = tmp14;
      const tmp11 = tmp9(tmp2[9])(tmp10);
    }
  }
  class N {
    constructor() {
      obj = { screens: null, initialStack: null };
      obj1 = {};
      obj6 = { render() { ... }, title: "Subscriptions", headerLeft: null };
      obj4 = closure_0(closure_2[8]);
      obj6.headerLeft = obj4.getHeaderCloseButton(closure_0);
      obj1[closure_7.CANCEL_SUBSCRIPTION] = obj6;
      obj.screens = obj1;
      obj7 = { name: closure_7.CANCEL_SUBSCRIPTION, params: closure_1 };
      items = [];
      items[0] = obj7;
      obj.initialStack = items;
      return obj;
    }
  }
  cResult[3] = bottom;
  cResult[4] = tmp4;
  cResult[5] = tmp5;
  cResult[6] = N;
  tmp10 = N;
  let obj = require("c");
  tmp = _require;
  tmp9 = importDefault;
}) : ((onClose) => {
  onClose = onClose.onClose;
  importDefault = Object.assign(onClose, Object.assign({ onClose: 0 }));
  let bottom;
  bottom = require("useSafeAreaInsets")().bottom;
  ({ screens, initialStack } = require("useInitialValue")(() => {
    let obj = { screens: null, initialStack: null };
    const obj2 = {};
    let obj3 = {
      render(arg0) {
        const obj = { style: { paddingBottom, flex: 1 }, children: null };
        const obj3 = {};
        const merged = Object.assign(arg0);
        obj3.onClose = onClose;
        obj.children = jsx(closure_1(bottom[7]), {});
        return <View style={{ paddingBottom, flex: 1 }}>{null}</View>;
      },
      title: "Subscriptions",
      headerLeft: NavigatorHeader.getHeaderCloseButton(onClose)
    };
    obj2[constants.CANCEL_SUBSCRIPTION] = obj3;
    obj.screens = obj2;
    const items = [{ name: constants.CANCEL_SUBSCRIPTION, params }];
    obj.initialStack = items;
    return obj;
  }));
  return jsx(onClose(bottom[10]).Navigator, { screens, initialRouteStack });
});