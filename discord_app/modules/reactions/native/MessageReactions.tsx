// === Module 9973: MessageReactions ===

// Module 9973 (MessageReactions)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6657 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import MessageReactionsContent2 from "MessageReactionsContent" /* 9974 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import MessageStore from "MessageStore" /* 5110 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const useAnalyticsLocationsDefault = useAnalyticsLocations;
let _require;

let closure_3 = ["channelId", "messageId", "emoji", "reactions", "isSelectedBurst"];
const jsx = Fragment.jsx;
let closure_8 = [];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let first;
  _require = arg0;
  let closure_1 = arg1;
  const obj = require("react");
  const cResult = obj.c(8);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    let tmp6;
    let tmp7;
    let tmp8;
    if (cResult[2] === arg1) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
    if (cResult[5] !== stateFromStores) {
      let tmp9;
      const _Symbol = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function h(count_details) {
          count_details = count_details.count_details;
          let vote;
          if (count_details != null) {
            vote = count_details.vote;
          }
          return null == vote;
        };
        cResult[7] = fn2;
        tmp9 = fn2;
      } else {
        tmp9 = cResult[7];
      }
      const found = stateFromStores.filter(tmp9);
      cResult[5] = stateFromStores;
      cResult[6] = found;
      tmp8 = found;
    } else {
      tmp8 = cResult[6];
    }
    return tmp8;
  }
  const fn = function c() {
    const message = MessageStore.getMessage(closure_0, closure_1);
    return null != message ? message.reactions : closure_8;
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  let closure_1 = arg1;
  const items = [MessageStore];
  const items1 = [arg0, arg1];
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items, () => {
    const message = MessageStore.getMessage(closure_0, closure_1);
    return null != message ? message.reactions : closure_8;
  }, items1);
  const items2 = [stateFromStores];
  return react.useMemo(() => stateFromStores.filter((count_details) => {
    count_details = count_details.count_details;
    let vote;
    if (count_details != null) {
      vote = count_details.vote;
    }
    return null == vote;
  }), items2);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let arr;
  let channelId;
  let emoji;
  let isSelectedBurst;
  let messageId;
  let reactions;
  let tmp21;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let obj = react2;
  const cResult = obj.c(20);
  if (cResult[0] !== arg0) {
    ({ channelId, messageId, emoji, reactions, isSelectedBurst } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = channelId;
    cResult[2] = tmp11;
    cResult[3] = emoji;
    cResult[4] = messageId;
    cResult[5] = reactions;
    cResult[6] = isSelectedBurst;
    tmp8 = isSelectedBurst;
    arr = reactions;
    tmp7 = messageId;
    tmp6 = emoji;
    tmp5 = tmp11;
    tmp4 = channelId;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    arr = cResult[5];
    tmp8 = cResult[6];
  }
  const tmp13 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp13(AnalyticsLocationDefault.MESSAGE_REACTIONS).analyticsLocations;
  const tmp14 = closure_9(tmp4, tmp7);
  let arr2 = tmp14;
  if (null != arr) {
    arr2 = tmp14;
    if (arr.length > 0) {
      arr2 = arr;
    }
  }
  if (cResult[7] !== arr2) {
    let tmp17;
    const items = [];
    let closure_0 = items;
    const item = arr2.forEach((burst_count) => {
      if (burst_count.burst_count > 0) {
        if (burst_count.count > 0) {
          const push2 = closure_0.push;
          const obj2 = { count: 0 };
          const merged = Object.assign(burst_count);
          push2(obj2);
          const push3 = closure_0.push;
          const obj3 = { burst_count: 0 };
          const merged1 = Object.assign(burst_count);
          push3(obj3);
        }
      }
      const push = closure_0.push;
      const obj = {};
      const merged2 = Object.assign(burst_count);
      push(obj);
    });
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function f(burst_count, burst_count2) {
        return (burst_count2.burst_count > 0 ? burst_count2.burst_count : burst_count2.count) - (burst_count.burst_count > 0 ? burst_count.burst_count : burst_count.count);
      };
      cResult[9] = fn;
      tmp17 = fn;
    } else {
      tmp17 = cResult[9];
    }
    const sorted = items.sort(tmp17);
    cResult[7] = arr2;
    cResult[8] = items;
  } else {
    closure_0 = cResult[8];
  }
  if (cResult[10] === tmp4) {
    if (cResult[11] === tmp5) {
      if (cResult[12] === tmp6) {
        if (cResult[13] === (undefined !== tmp8 && tmp8)) {
          if (cResult[14] === tmp7) {
            let tmp19;
            if (cResult[15] === arr3) {
              tmp19 = cResult[16];
            }
            if (cResult[17] === analyticsLocations) {
              let tmp26;
              if (cResult[18] === tmp19) {
                tmp26 = cResult[19];
              }
              return tmp26;
            }
            const tmp28 = jsx(useAnalyticsLocations.AnalyticsLocationProvider, { value: analyticsLocations, children: tmp19 });
            cResult[17] = analyticsLocations;
            cResult[18] = tmp19;
            cResult[19] = tmp28;
            tmp26 = tmp28;
          }
        }
      }
    }
  }
  if (arr3.length > 0) {
    const MessageReactionsContent = MessageReactionsContent2.MessageReactionsContent;
    let merged = Object.assign(tmp5);
    tmp21 = <MessageReactionsContent channelId={tmp4} messageId={tmp7} emoji={tmp6} reactions={arr3} isSelectedBurst={undefined !== tmp8 && tmp8} />;
  } else {
    tmp21 = jsx(MessageReactionsContent2.MessageReactionsEmpty, {});
  }
  cResult[10] = tmp4;
  cResult[11] = tmp5;
  cResult[12] = tmp6;
  cResult[13] = undefined !== tmp8 && tmp8;
  cResult[14] = tmp7;
  cResult[15] = arr3;
  cResult[16] = tmp21;
  tmp19 = tmp21;
}) : ((emoji) => {
  let channelId;
  let isSelectedBurst;
  let messageId;
  let reactions;
  let tmp7Result;
  ({ channelId, messageId, reactions, isSelectedBurst } = emoji);
  emoji = emoji.emoji;
  if (isSelectedBurst === undefined) {
    isSelectedBurst = false;
  }
  let merged = Object.assign(emoji, Object.assign({ channelId: 0, messageId: 0, emoji: 0, reactions: 0, isSelectedBurst: 0 }));
  let items;
  const tmp3 = useAnalyticsLocationsDefault;
  const analyticsLocations = tmp3(AnalyticsLocationDefault.MESSAGE_REACTIONS).analyticsLocations;
  const tmp4 = closure_9(channelId, messageId);
  let arr = tmp4;
  if (null != reactions) {
    arr = tmp4;
    if (reactions.length > 0) {
      arr = reactions;
    }
  }
  items = [];
  const item = arr.forEach((burst_count) => {
    if (burst_count.burst_count > 0) {
      if (burst_count.count > 0) {
        const push2 = items.push;
        const obj2 = { count: 0 };
        const merged = Object.assign(burst_count);
        push2(obj2);
        const push3 = items.push;
        const obj3 = { burst_count: 0 };
        const merged1 = Object.assign(burst_count);
        push3(obj3);
      }
    }
    const push = items.push;
    const obj = {};
    const merged2 = Object.assign(burst_count);
    push(obj);
  });
  const sorted = items.sort((burst_count, burst_count2) => (burst_count2.burst_count > 0 ? burst_count2.burst_count : burst_count2.count) - (burst_count.burst_count > 0 ? burst_count.burst_count : burst_count.count));
  const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
  if (items.length > 0) {
    const MessageReactionsContent = MessageReactionsContent2.MessageReactionsContent;
    let merged1 = Object.assign(merged);
    tmp7Result = <MessageReactionsContent channelId={channelId} messageId={messageId} emoji={emoji} reactions={items} isSelectedBurst={isSelectedBurst} />;
  } else {
    tmp7Result = jsx(MessageReactionsContent2.MessageReactionsEmpty, {});
  }
  return <AnalyticsLocationProvider value={analyticsLocations}>{tmp7Result}</AnalyticsLocationProvider>;
});
const result = size.fileFinishedImporting("modules/reactions/native/MessageReactions.tsx");

export default tmp2;