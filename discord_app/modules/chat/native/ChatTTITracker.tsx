// discord_app/modules/chat/native/ChatTTITracker.tsx
import jsxProd from "jsxProd";
import { TTIMeasurementView } from "../../tti_analytics/native/TTIMeasurementView.tsx";

let c3;
let c4;
let c5;
({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
const result = require("serialize").fileFinishedImporting("modules/chat/native/ChatTTITracker.tsx");

export const ChatTTITracker = function ChatTTITracker(messages) {
  messages = messages.messages;
  let tmp3 = null;
  if (messages.length > 0) {
    let obj = { nativeID: "cached_messages_tti", onMeasurement: null };
    obj[1] = function onMeasurement(nativeEvent) {
      const displayMessagesWithCache = callback(9).displayMessagesWithCache;
      displayMessagesWithCache.record(nativeEvent.nativeEvent.timestamp);
    };
    tmp3 = callback(TTIMeasurementView /* TTIMeasurementView */.TTIMeasurementView, obj, "cached_messages_tti");
  }
  const children = [tmp3, ];
  if (messages.hasFetched) {
    obj = { nativeID: "latest_messages_tti", onMeasurement: null };
    obj[1] = function onMeasurement(nativeEvent) {
      const displayLatestMessages = callback(9).displayLatestMessages;
      displayLatestMessages.record(nativeEvent.nativeEvent.timestamp);
    };
    let tmp7 = callback(TTIMeasurementView /* TTIMeasurementView */.TTIMeasurementView, obj, "latest_messages_tti");
  } else {
    tmp7 = null;
    if (messages.ready) {
      tmp7 = null;
    }
  }
  children[1] = tmp7;
  return closure_5(closure_4, { children });
};