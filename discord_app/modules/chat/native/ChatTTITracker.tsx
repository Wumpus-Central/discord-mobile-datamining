// === Module 12091: ChatTTITracker ===

// Module 12091 (ChatTTITracker)
import TTITrackerDefault from "TTITracker" /* 9 */;
import TTIMeasurementView from "TTIMeasurementView" /* 12032 */;
import jsxProd from "jsxProd" /* 21 */;
import size from "module_2" /* 2 */;

({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const result = size.fileFinishedImporting("modules/chat/native/ChatTTITracker.tsx");

export const ChatTTITracker = function ChatTTITracker(messages) {
  messages = messages.messages;
  let tmp3 = null;
  if (messages.length > 0) {
    const obj = {
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
    const obj2 = {
      nativeID: "latest_messages_tti",
      onMeasurement(nativeEvent) {
          const displayLatestMessages = TTITrackerDefault.displayLatestMessages;
          displayLatestMessages.record(nativeEvent.nativeEvent.timestamp);
        }
    };
    let tmp7 = React3(TTIMeasurementView.TTIMeasurementView, obj2, "latest_messages_tti");
  } else {
    tmp7 = null;
    if (messages.ready) {
      tmp7 = null;
    }
  }
  children[1] = tmp7;
  return hasOwnProperty(React4, { children });
};