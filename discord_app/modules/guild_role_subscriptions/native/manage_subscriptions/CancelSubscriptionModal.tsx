// === Module 15508: CancelSubscriptionModal ===

// Module 15508 (CancelSubscriptionModal)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_5 = { CANCEL_SUBSCRIPTION: "CANCEL_SUBSCRIPTION" };
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/CancelSubscriptionModal.tsx");

export default function CancelSubscriptionModal(onClose) {
  let initialStack;
  let screens;
  onClose = onClose.onClose;
  const importDefault = Object.assign(onClose, Object.create(null));
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
        obj[1] = outer1_4(outer1_1(outer1_2[5]), obj);
        return outer1_4(outer1_3, obj);
      },
      title: "Subscriptions",
      headerLeft: null
    };
    obj[2] = onClose(bottom[6]).getHeaderCloseButton(onClose);
    screens[outer1_5.CANCEL_SUBSCRIPTION] = obj;
    obj = { name: outer1_5.CANCEL_SUBSCRIPTION, params: closure_1 };
    const initialStack = [obj];
    return { screens, initialStack };
  }));
  return jsx(onClose(bottom[7]).Navigator, { screens, initialRouteStack });
};