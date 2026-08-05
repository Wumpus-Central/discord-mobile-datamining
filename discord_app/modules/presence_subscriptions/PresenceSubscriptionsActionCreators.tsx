// discord_app/modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx
const result = require("set").fileFinishedImporting("modules/presence_subscriptions/PresenceSubscriptionsActionCreators.tsx");

export const subscribe = function subscribe(subscription) {
  let obj = require("../../Dispatcher.tsx");
  obj = { type: "PRESENCE_SUBSCRIPTIONS_ADD", subscription };
  obj.dispatch(obj);
};