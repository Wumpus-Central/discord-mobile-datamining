// === Module 11570: ChatTTITracker ===

// Module 11570 (ChatTTITracker)
import TTITrackerDefault from "TTITracker" /* 9 */;
import react from "react" /* 576 */;
import TTIMeasurementView from "TTIMeasurementView" /* 11508 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let messages;

let c3;
let closure_4;
let hasOwnProperty;
({ jsx: c3, Fragment: closure_4, jsxs: hasOwnProperty } = Fragment);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((messages) => {
  let first;
  let items;
  let tmp10;
  let tmp5;
  let tmp6;
  const obj = react;
  const cResult = obj.c(11);
  messages = messages.messages;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function h(nativeEvent) {
      const displayLatestMessages = TTITrackerDefault.displayLatestMessages;
      displayLatestMessages.record(nativeEvent.nativeEvent.timestamp);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function u(nativeEvent) {
      const displayMessagesWithCache = TTITrackerDefault.displayMessagesWithCache;
      displayMessagesWithCache.record(nativeEvent.nativeEvent.timestamp);
    };
    cResult[1] = fn2;
    tmp5 = fn2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== messages.length) {
    let tmp7 = null;
    if (messages.length > 0) {
      const obj2 = { nativeID: "cached_messages_tti", onMeasurement: tmp5 };
      tmp7 = _false(TTIMeasurementView.TTIMeasurementView, obj2, "cached_messages_tti");
    }
    cResult[2] = messages.length;
    cResult[3] = tmp7;
    tmp6 = tmp7;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === messages.cached) {
    if (cResult[5] === messages.hasFetched) {
      let tmp9;
      if (cResult[6] === messages.ready) {
        tmp9 = cResult[7];
      }
      if (cResult[8] === tmp6) {
        let tmp12;
        if (cResult[9] === tmp9) {
          tmp12 = cResult[10];
        }
        return tmp12;
      }
      const obj3 = { children: items };
      items = [tmp6, tmp9];
      const tmp15 = hasOwnProperty(React3, obj3);
      cResult[8] = tmp6;
      cResult[9] = tmp9;
      cResult[10] = tmp15;
      tmp12 = tmp15;
    }
  }
  if (messages.hasFetched) {
    const obj4 = { nativeID: "latest_messages_tti", onMeasurement: first };
    tmp10 = _false(TTIMeasurementView.TTIMeasurementView, obj4, "latest_messages_tti");
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
}) : ((messages) => {
  let tmp7;
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
    tmp3 = _false(TTIMeasurementView.TTIMeasurementView, obj, "cached_messages_tti");
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
    tmp7 = _false(TTIMeasurementView.TTIMeasurementView, obj2, "latest_messages_tti");
  } else {
    tmp7 = null;
    if (messages.ready) {
      tmp7 = null;
    }
  }
  children[1] = tmp7;
  return hasOwnProperty(React3, { children });
});
const result = size.fileFinishedImporting("modules/chat/native/ChatTTITracker.tsx");

export const ChatTTITracker = tmp3;