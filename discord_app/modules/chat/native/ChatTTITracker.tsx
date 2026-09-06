// === Module 11957: ChatTTITracker ===

// Module 11957 (ChatTTITracker)
import TTITrackerDefault from "TTITracker" /* 9 */;
import TTIMeasurementView from "TTIMeasurementView" /* 11897 */;
import jsxProd from "jsxProd" /* 21 */;
import size from "module_2" /* 2 */;

({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const result = size.fileFinishedImporting("modules/chat/native/ChatTTITracker.tsx");

export const ChatTTITracker = function ChatTTITracker(messages) {
  messages = messages.messages;
  let tmp3 = null;
  if (messages.length > 0) {
    let obj = {
      nativeID: "cached_messages_tti",
      onMeasurement(nativeEvent) {
          const displayMessagesWithCache = TTITrackerDefault.displayMessagesWithCache;
          displayMessagesWithCache.record(nativeEvent.nativeEvent.timestamp);
        }
    };
    tmp3 = React3(TTIMeasurementView.TTIMeasurementView, obj, "cached_messages_tti");
  }
  const children = [tmp3, ];
  if (messages.hasFetched) {
    obj = {
      nativeID: "latest_messages_tti",
      onMeasurement(nativeEvent) {
          const displayLatestMessages = TTITrackerDefault.displayLatestMessages;
          displayLatestMessages.record(nativeEvent.nativeEvent.timestamp);
        }
    };
    let tmp7 = React3(TTIMeasurementView.TTIMeasurementView, obj, "latest_messages_tti");
  } else {
    tmp7 = null;
    if (messages.ready) {
      tmp7 = null;
    }
  }
  children[1] = tmp7;
  return hasOwnProperty(React4, { children });
};