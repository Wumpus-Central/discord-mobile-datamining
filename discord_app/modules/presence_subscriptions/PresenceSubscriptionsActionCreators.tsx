// === Module 11510: PresenceSubscriptionsActionCreators ===

// Module 11510 (PresenceSubscriptionsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx");

export function subscribe(subscription) {
  DispatcherDefault.dispatch({ type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription });
}