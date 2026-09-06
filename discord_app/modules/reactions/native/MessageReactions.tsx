// === Module 11255: MessageReactions ===

// Module 11255 (MessageReactions)
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import noop from "module_19" /* 19 */;
import MessageStore from "MessageStore" /* 4781 */;

const require = fn;
const jsx = fn(21).jsx;
let closure_6 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/MessageReactions.tsx");

export default function MessageReactions(emoji) {
  ({ channelId, messageId, reactions, isSelectedBurst } = emoji);
  if (isSelectedBurst === undefined) {
    isSelectedBurst = false;
  }
  let merged = Object.assign(emoji, Object.assign({ channelId: 0, messageId: 0, emoji: 0, reactions: 0, isSelectedBurst: 0 }));
  let items3;
  closure_129_0 = channelId;
  closure_129_1 = messageId;
  let obj = items3(504);
  const items = [MessageStore];
  const items1 = [channelId, messageId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const message = MessageStore.getMessage(items3, importDefault);
    return null != message ? message.reactions : closure_6;
  }, items1);
  closure_129_2 = stateFromStores;
  const items2 = [stateFromStores];
  const memo = noop.useMemo(() => dependencyMap.filter((count_details) => {
    count_details = count_details.count_details;
    let vote;
    if (count_details != null) {
      vote = count_details.vote;
    }
    return null == vote;
  }), items2);
  let arr4 = memo;
  if (null != reactions) {
    arr4 = memo;
    if (reactions.length > 0) {
      arr4 = reactions;
    }
  }
  items3 = [];
  const item = arr4.forEach((burst_count) => {
    if (burst_count.burst_count > 0) {
      if (burst_count.count > 0) {
        let obj = {};
        const merged = Object.assign(burst_count);
        obj.count = 0;
        items3.push(obj);
        obj = {};
        const merged1 = Object.assign(burst_count);
        obj.burst_count = 0;
        items3.push(obj);
      }
    }
    obj = {};
    const merged2 = Object.assign(burst_count);
    items3.push(obj);
  });
  const sorted = items3.sort((burst_count, burst_count2) => (burst_count2.burst_count > 0 ? burst_count2.burst_count : burst_count2.count) - (burst_count.burst_count > 0 ? burst_count.burst_count : burst_count.count));
  obj = { value: useAnalyticsLocationsDefault(AnalyticsLocationDefault.MESSAGE_REACTIONS).analyticsLocations, children: null };
  if (items3.length > 0) {
    obj = { channelId, messageId, emoji: emoji.emoji, reactions: items3, isSelectedBurst };
    let merged1 = Object.assign(merged);
    let tmp9Result = tmp9(tmp4(11256).MessageReactionsContent, obj);
  } else {
    tmp9Result = tmp9(tmp4(11256).MessageReactionsEmpty, {});
  }
  obj.children = tmp9Result;
  return jsx(items3(7162).AnalyticsLocationProvider, { value: useAnalyticsLocationsDefault(AnalyticsLocationDefault.MESSAGE_REACTIONS).analyticsLocations, children: null });
};