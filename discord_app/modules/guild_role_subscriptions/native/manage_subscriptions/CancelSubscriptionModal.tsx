// === Module 16800: CancelSubscriptionModal ===

// Module 16800 (CancelSubscriptionModal)
import NavigatorHeader from "NavigatorHeader" /* 6203 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
let closure_3 = ["onClose"];
const View = fn(17).View;
const jsx = fn(21).jsx;
let closure_7 = { CANCEL_SUBSCRIPTION: "CANCEL_SUBSCRIPTION" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/CancelSubscriptionModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CancelSubscriptionModal(onClose) {
  const cResult = require("c").c(10);
  if (cResult[0] !== onClose) {
    onClose = onClose.onClose;
    _require = onClose;
    const tmp8 = _objectWithoutProperties(onClose, closure_3);
    importDefault = tmp8;
    cResult[0] = onClose;
    cResult[1] = onClose;
    cResult[2] = tmp8;
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
      cResult[8] = screens;
      cResult[9] = tmp14;
      tmp12 = tmp14;
      const tmp11 = tmp9(tmp2[9])(tmp10);
    }
  }
  const fn = function p() {
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
  };
  cResult[3] = bottom;
  cResult[4] = tmp4;
  cResult[5] = tmp5;
  cResult[6] = fn;
  tmp10 = fn;
  let obj = require("c");
  tmp = _require;
  tmp9 = importDefault;
}) : (function CancelSubscriptionModal(onClose) {
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