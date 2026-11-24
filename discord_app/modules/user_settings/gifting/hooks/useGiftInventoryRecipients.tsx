// discord_app/modules/user_settings/gifting/hooks/useGiftInventoryRecipients.tsx
import UserActionCreators from "../../../../actions/UserActionCreators.tsx";
import GiftedSubscriptionUtils from "../../../premium/gifting/GiftedSubscriptionUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
function fetchRecipient() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_6 = async function _fetchRecipient(arg0) {
  await UserActionCreators.getUser(closure_0);
  if (1 === tmp6) {
    c3 = 0;
    c1 = 3;
  } else if (arg0 === 1) {
    c1 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c3 = 0;
  }
  return value;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/gifting/hooks/useGiftInventoryRecipients.tsx");

export default function useGiftInventoryRecipients(arg0) {
  dependencyMap = arg0;
  noop.useRef(new Set());
  items = [arg0];
  const effect = noop.useEffect(() => {
    while (tmp2 !== undefined) {
      let obj = GiftedSubscriptionUtils;
      let giftedSubscriptionRowState = obj.getGiftedSubscriptionRowState(tmp3);
      let tmp7 = giftedSubscriptionRowState;
      if ("pending" !== giftedSubscriptionRowState.kind) {
        if (null != tmp7.recipientUserId) {
          let recipientUserId = tmp7.recipientUserId;
          let tmp10 = recipientUserId;
          let hasItem = null != UserStore.getUser(recipientUserId);
          if (!hasItem) {
            let current = ref.current;
            hasItem = current.has(tmp10);
          }
          if (!hasItem) {
            let current2 = ref.current;
            let addResult = current2.add(tmp10);
            let tmp19 = fetchRecipient(tmp10);
          }
        }
      }
      continue;
    }
    tmp2 = dependencyMap[Symbol.iterator]();
  }, items);
}
