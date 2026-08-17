// discord_app/modules/chat/native/ChatTTITracker.tsx
import set from "../../../../_runtime/00002_set.js";
import TTIMeasurementView from "../../tti_analytics/native/TTIMeasurementView.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

({ jsx: c3, Fragment: c4, jsxs: c5 } = jsxProd);
const result = set.fileFinishedImporting("modules/chat/native/ChatTTITracker.tsx");

export const ChatTTITracker = function ChatTTITracker(messages) {
  messages = messages.messages;
  let tmp3 = null;
  if (messages.length > 0) {
    let obj = { nativeID: "cached_messages_tti", onMeasurement: null };
    obj[1] = function onMeasurement(nativeEvent) {
      const displayMessagesWithCache = callback(9).displayMessagesWithCache;
      displayMessagesWithCache.record(nativeEvent.nativeEvent.timestamp);
    };
    tmp3 = callback(TTIMeasurementView.TTIMeasurementView, obj, "cached_messages_tti");
  }
  const children = [tmp3, ];
  if (messages.hasFetched) {
    obj = { nativeID: "latest_messages_tti", onMeasurement: null };
    obj[1] = function onMeasurement(nativeEvent) {
      const displayLatestMessages = callback(9).displayLatestMessages;
      displayLatestMessages.record(nativeEvent.nativeEvent.timestamp);
    };
    let tmp7 = callback(TTIMeasurementView.TTIMeasurementView, obj, "latest_messages_tti");
  } else {
    tmp7 = null;
    if (messages.ready) {
      tmp7 = null;
    }
  }
  children[1] = tmp7;
  return closure_5(closure_4, { children });
};