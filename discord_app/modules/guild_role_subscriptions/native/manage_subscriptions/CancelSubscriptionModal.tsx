// === Module 16387: CancelSubscriptionModal ===

// Module 16387 (CancelSubscriptionModal)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
let closure_5 = { CANCEL_SUBSCRIPTION: "CANCEL_SUBSCRIPTION" };
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/CancelSubscriptionModal.tsx");

export default function CancelSubscriptionModal(onClose) {
  onClose = onClose.onClose;
  importDefault = Object.assign(onClose, Object.create(null));
  let bottom;
  bottom = importDefault(bottom[3])().bottom;
  ({ screens, initialStack } = importDefault(bottom[4])(() => {
    const screens = {};
    let obj = {
      render(arg0) {
        obj = { style: obj, children: null };
        obj = { paddingBottom: closure_2, flex: 1 };
        obj = {};
        const merged = Object.assign(arg0);
        obj.onClose = closure_0;
        obj[1] = closure_1_4(closure_1_1(closure_1_2[5]), obj);
        return closure_1_4(closure_1_3, obj);
      },
      title: "Subscriptions",
      headerLeft: onClose(bottom[6]).getHeaderCloseButton(onClose)
    };
    screens[closure_1_5.CANCEL_SUBSCRIPTION] = obj;
    obj = { name: closure_1_5.CANCEL_SUBSCRIPTION, params: closure_1 };
    const initialStack = [obj];
    return { screens, initialStack };
  }));
  return jsx(onClose(bottom[7]).Navigator, { screens, initialRouteStack });
};