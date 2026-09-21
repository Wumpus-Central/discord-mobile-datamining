// === Module 16898: CancelSubscriptionModal ===

// Module 16898 (CancelSubscriptionModal)
import NavigatorHeader from "NavigatorHeader" /* 5841 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
let closure_5 = { CANCEL_SUBSCRIPTION: "CANCEL_SUBSCRIPTION" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/CancelSubscriptionModal.tsx");

export default function CancelSubscriptionModal(onClose) {
  onClose = onClose.onClose;
  importDefault = Object.assign(onClose, Object.assign({ onClose: 0 }));
  let bottom;
  bottom = require("useSafeAreaInsets")().bottom;
  ({ screens, initialStack } = require("useInitialValue")(() => {
    let obj = {};
    const obj2 = {
      render(arg0) {
        const obj = { style: { paddingBottom, flex: 1 }, children: null };
        const obj3 = {};
        const merged = Object.assign(arg0);
        obj3.onClose = onClose;
        obj.children = jsx(closure_1(bottom[5]), {});
        return <View style={{ paddingBottom, flex: 1 }}>{null}</View>;
      },
      title: "Subscriptions",
      headerLeft: NavigatorHeader.getHeaderCloseButton(onClose)
    };
    obj[constants.CANCEL_SUBSCRIPTION] = obj2;
    const obj4 = { screens: obj, initialStack: null };
    const items = [{ name: constants.CANCEL_SUBSCRIPTION, params }];
    obj4.initialStack = items;
    return obj4;
  }));
  return jsx(onClose(bottom[7]).Navigator, { screens, initialRouteStack });
};