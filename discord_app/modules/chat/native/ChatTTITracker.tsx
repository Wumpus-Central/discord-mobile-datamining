// discord_app/modules/chat/native/ChatTTITracker.tsx
import TTITrackerDefault from "../../tti_analytics/TTITracker.tsx";
import c from "../../../../_runtime/00576_c.js";
import TTIMeasurementView from "../../tti_analytics/native/TTIMeasurementView.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = jsxProd);
const result = size.fileFinishedImporting("modules/chat/native/ChatTTITracker.tsx");

export const ChatTTITracker = ReactCompilerGating.isReactCompilerEnabled()
  ? function ChatTTITracker(messages) {
      const cResult = c.c(11);
      messages = messages.messages;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        function handleLatestMessagesTTIMeasurement(nativeEvent) {
          const displayLatestMessages = TTITrackerDefault.displayLatestMessages;
          displayLatestMessages.record(nativeEvent.nativeEvent.timestamp);
        }
        cResult[0] = handleLatestMessagesTTIMeasurement;
        let first = handleLatestMessagesTTIMeasurement;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        function handleCachedMessagesTTIMeasurement(nativeEvent) {
          const displayMessagesWithCache = TTITrackerDefault.displayMessagesWithCache;
          displayMessagesWithCache.record(nativeEvent.nativeEvent.timestamp);
        }
        cResult[1] = handleCachedMessagesTTIMeasurement;
        let tmp5 = handleCachedMessagesTTIMeasurement;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== messages.length) {
        let tmp7 = null;
        if (messages.length > 0) {
          const obj2 = { nativeID: "cached_messages_tti", onMeasurement: tmp5 };
          tmp7 = React3(TTIMeasurementView.TTIMeasurementView, obj2, "cached_messages_tti");
        }
        cResult[2] = messages.length;
        cResult[3] = tmp7;
        let tmp6 = tmp7;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === messages.cached) {
        if (cResult[5] === messages.hasFetched) {
          if (cResult[6] === messages.ready) {
            let tmp9 = cResult[7];
          }
          if (cResult[8] === tmp6) {
            if (cResult[9] === tmp9) {
              let tmp12 = cResult[10];
            }
            return tmp12;
          }
          const obj3 = { children: null };
          const items = [tmp6, tmp9];
          obj3.children = items;
          const tmp15 = hasOwnProperty(React4, obj3);
          cResult[8] = tmp6;
          cResult[9] = tmp9;
          cResult[10] = tmp15;
          tmp12 = tmp15;
        }
      }
      if (messages.hasFetched) {
        const obj4 = { nativeID: "latest_messages_tti", onMeasurement: first };
        let tmp10 = React3(TTIMeasurementView.TTIMeasurementView, obj4, "latest_messages_tti");
      } else {
        tmp10 = null;
        if (messages.ready) {
          tmp10 = null;
        }
      }
      cResult[4] = messages.cached;
      cResult[5] = messages.hasFetched;
      cResult[6] = messages.ready;
      cResult[7] = tmp10;
      tmp9 = tmp10;
    }
  : function ChatTTITracker(messages) {
      messages = messages.messages;
      let tmp3 = null;
      if (messages.length > 0) {
        const obj = {
          nativeID: "cached_messages_tti",
          onMeasurement: function handleCachedMessagesTTIMeasurement(nativeEvent) {
            const displayMessagesWithCache = TTITrackerDefault.displayMessagesWithCache;
            displayMessagesWithCache.record(nativeEvent.nativeEvent.timestamp);
          },
        };
        tmp3 = React3(TTIMeasurementView.TTIMeasurementView, obj, "cached_messages_tti");
      }
      const children = [tmp3];
      if (messages.hasFetched) {
        const obj2 = {
          nativeID: "latest_messages_tti",
          onMeasurement: function handleLatestMessagesTTIMeasurement(nativeEvent) {
            const displayLatestMessages = TTITrackerDefault.displayLatestMessages;
            displayLatestMessages.record(nativeEvent.nativeEvent.timestamp);
          },
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
