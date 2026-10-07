// === Module 9986: MessageReactions ===

// Module 9986 (MessageReactions)
import c from "c" /* 576 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6664 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6688 */;
import MessageReactionsContent from "MessageReactionsContent" /* 9987 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import MessageStore from "MessageStore" /* 5116 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
let closure_3 = ["channelId", "messageId", "emoji", "reactions", "isSelectedBurst"];
const jsx = fn(21).jsx;
let closure_8 = [];
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    const stateFromStores = tmp(504).useStateFromStores(first, tmp6, tmp7);
    if (cResult[5] !== stateFromStores) {
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
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[7];
      }
      const found = stateFromStores.filter(tmp8);
      cResult[5] = stateFromStores;
      cResult[6] = found;
    } else {
      return cResult[6];
    }
    const tmpResult = tmp(504);
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
  const obj = require("c");
  tmp = _require;
}) : ((arg0, arg1) => {
  _require = arg0;
  closure_1 = arg1;
  const items = [MessageStore];
  const items1 = [arg0, arg1];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    const message = MessageStore.getMessage(closure_0, closure_1);
    return null != message ? message.reactions : closure_8;
  }, items1);
  const items2 = [stateFromStores];
  return noop.useMemo(() => stateFromStores.filter((count_details) => {
    count_details = count_details.count_details;
    let vote;
    if (count_details != null) {
      vote = count_details.vote;
    }
    return null == vote;
  }), items2);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/MessageReactions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(20);
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
    let arr = reactions;
    let tmp7 = messageId;
    let tmp6 = emoji;
    let tmp5 = tmp11;
    let tmp4 = channelId;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    arr = cResult[5];
  }
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.MESSAGE_REACTIONS).analyticsLocations;
  const tmp14 = closure_9(tmp4, tmp7);
  let arr2 = tmp14;
  if (null != arr) {
    arr2 = tmp14;
    if (arr.length > 0) {
      arr2 = arr;
    }
  }
  if (cResult[7] !== arr2) {
    const items = [];
    let arr3 = items;
    const item = arr2.forEach((burst_count) => {
      if (burst_count.burst_count > 0) {
        if (burst_count.count > 0) {
          const obj2 = {};
          const merged = Object.assign(burst_count);
          obj2.count = 0;
          arr3.push(obj2);
          const obj3 = {};
          const merged1 = Object.assign(burst_count);
          obj3.burst_count = 0;
          arr3 = arr3.push(obj3);
        }
      }
      const merged2 = Object.assign(burst_count);
      arr3.push({});
    });
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function f(burst_count, burst_count2) {
        return (burst_count2.burst_count > 0 ? burst_count2.burst_count : burst_count2.count) - (burst_count.burst_count > 0 ? burst_count.burst_count : burst_count.count);
      };
      cResult[9] = fn;
      let tmp17 = fn;
    } else {
      tmp17 = cResult[9];
    }
    const sorted = items.sort(tmp17);
    cResult[7] = arr2;
    cResult[8] = items;
  } else {
    arr3 = cResult[8];
    if (cResult[10] === tmp4) {
      if (cResult[11] === tmp5) {
        if (cResult[12] === tmp6) {
          if (cResult[13] === tmp12) {
            if (cResult[14] === tmp7) {
              if (cResult[15] === arr3) {
                if (cResult[17] === analyticsLocations) {
                  if (cResult[18] === tmp20) {
                    let tmp28 = cResult[19];
                  }
                  return tmp28;
                }
                let obj2 = { value: analyticsLocations, children: cResult[16] };
                const tmp30 = jsx(useAnalyticsLocations.AnalyticsLocationProvider, { value: analyticsLocations, children: cResult[16] });
                cResult[17] = analyticsLocations;
                cResult[18] = cResult[16];
                cResult[19] = tmp30;
                tmp28 = tmp30;
              }
            }
          }
        }
      }
    }
    if (arr3.length > 0) {
      let obj3 = { channelId: tmp4, messageId: tmp7, emoji: tmp6, reactions: arr3, isSelectedBurst: tmp12 };
      let merged = Object.assign(tmp5);
      let tmp22 = jsx(MessageReactionsContent.MessageReactionsContent, { channelId: tmp4, messageId: tmp7, emoji: tmp6, reactions: arr3, isSelectedBurst: tmp12 });
    } else {
      tmp22 = jsx(MessageReactionsContent.MessageReactionsEmpty, {});
    }
    cResult[10] = tmp4;
    cResult[11] = tmp5;
    cResult[12] = tmp6;
    cResult[13] = tmp12;
    cResult[14] = tmp7;
    cResult[15] = arr3;
    cResult[16] = tmp22;
  }
}) : ((emoji) => {
  ({ channelId, messageId, reactions, isSelectedBurst } = emoji);
  if (isSelectedBurst === undefined) {
    isSelectedBurst = false;
  }
  let merged = Object.assign(emoji, Object.assign({ channelId: 0, messageId: 0, emoji: 0, reactions: 0, isSelectedBurst: 0 }));
  let items;
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
        const obj2 = {};
        const merged = Object.assign(burst_count);
        obj2.count = 0;
        items.push(obj2);
        const obj3 = {};
        const merged1 = Object.assign(burst_count);
        obj3.burst_count = 0;
        items.push(obj3);
      }
    }
    const merged2 = Object.assign(burst_count);
    items.push({});
    const obj = {};
  });
  const sorted = items.sort((burst_count, burst_count2) => (burst_count2.burst_count > 0 ? burst_count2.burst_count : burst_count2.count) - (burst_count.burst_count > 0 ? burst_count.burst_count : burst_count.count));
  let obj = { value: useAnalyticsLocationsDefault(AnalyticsLocationDefault.MESSAGE_REACTIONS).analyticsLocations, children: null };
  if (items.length > 0) {
    let obj2 = { channelId, messageId, emoji: emoji.emoji, reactions: items, isSelectedBurst };
    let merged1 = Object.assign(merged);
    let tmp7Result = jsx(MessageReactionsContent.MessageReactionsContent, { channelId, messageId, emoji: emoji.emoji, reactions: items, isSelectedBurst });
  } else {
    tmp7Result = jsx(MessageReactionsContent.MessageReactionsEmpty, {});
  }
  obj.children = tmp7Result;
  return jsx(useAnalyticsLocations.AnalyticsLocationProvider, { value: useAnalyticsLocationsDefault(AnalyticsLocationDefault.MESSAGE_REACTIONS).analyticsLocations, children: null });
});