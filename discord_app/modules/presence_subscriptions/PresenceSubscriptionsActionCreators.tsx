// discord_app/modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import dispatcherDefault from "../../Dispatcher.tsx";

const result = obj132.fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx");

export const subscribe = function subscribe(subscription) {
  const obj = { type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription };
  obj.dispatch(obj);
};