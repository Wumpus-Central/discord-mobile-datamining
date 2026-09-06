// discord_app/modules/chat/native/ChatTTITracker.tsx
import TTITrackerDefault from "../../tti_analytics/TTITracker.tsx";
import TTIMeasurementView from "../../tti_analytics/native/TTIMeasurementView.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import size from "../../../../_runtime/metro/00002__.js";

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
      },
    };
    tmp3 = React3(TTIMeasurementView.TTIMeasurementView, obj, "cached_messages_tti");
  }
  const children = [tmp3];
  if (messages.hasFetched) {
    obj = {
      nativeID: "latest_messages_tti",
      onMeasurement(nativeEvent) {
        const displayLatestMessages = TTITrackerDefault.displayLatestMessages;
        displayLatestMessages.record(nativeEvent.nativeEvent.timestamp);
      },
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
