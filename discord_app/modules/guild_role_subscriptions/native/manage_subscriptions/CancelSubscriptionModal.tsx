// === Module 16549: CancelSubscriptionModal ===

// Module 16549 (CancelSubscriptionModal)
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import noop from "module_19" /* 19 */;

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
    obj = {
      render(arg0) {
        let obj = { style: null, children: null };
        obj = { paddingBottom, flex: 1 };
        obj.style = obj;
        obj = {};
        const merged = Object.assign(arg0);
        obj.onClose = onClose;
        obj.children = jsx(closure_1(bottom[5]), {});
        return <View />;
      },
      title: "Subscriptions",
      headerLeft: NavigatorHeader.getHeaderCloseButton(onClose)
    };
    obj[constants.CANCEL_SUBSCRIPTION] = obj;
    obj = { screens: obj, initialStack: null };
    const items = [{ name: constants.CANCEL_SUBSCRIPTION, params }];
    obj.initialStack = items;
    return obj;
  }));
  return jsx(onClose(bottom[7]).Navigator, { screens, initialRouteStack });
};