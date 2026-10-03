// === Module 11134: PresenceSubscriptionsActionCreators ===

// Module 11134 (PresenceSubscriptionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx");

export const subscribe = function subscribe(subscription) {
  DispatcherDefault.dispatch({ type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription });
};