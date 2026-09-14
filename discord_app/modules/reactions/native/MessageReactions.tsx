// discord_app/modules/reactions/native/MessageReactions.tsx
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import MessageStore from "../../../stores/MessageStore.tsx";

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
  let merged = Object.assign(
    emoji,
    Object.assign({ channelId: 0, messageId: 0, emoji: 0, reactions: 0, isSelectedBurst: 0 }),
  );
  let items3;
  closure_129_0 = channelId;
  closure_129_1 = messageId;
  const tmp3 = useAnalyticsLocationsDefault;
  const items = [MessageStore];
  const items1 = [channelId, messageId];
  const stateFromStores = items3(504).useStateFromStores(
    items,
    () => {
      const message = MessageStore.getMessage(items3, importDefault);
      return null != message ? message.reactions : closure_6;
    },
    items1,
  );
  closure_129_2 = stateFromStores;
  const items2 = [stateFromStores];
  const memo = noop.useMemo(
    () =>
      dependencyMap.filter((count_details) => {
        count_details = count_details.count_details;
        let vote;
        if (count_details != null) {
          vote = count_details.vote;
        }
        return null == vote;
      }),
    items2,
  );
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
        const obj2 = {};
        const merged = Object.assign(burst_count);
        obj2.count = 0;
        items3.push(obj2);
        const obj3 = {};
        const merged1 = Object.assign(burst_count);
        obj3.burst_count = 0;
        items3.push(obj3);
      }
    }
    const merged2 = Object.assign(burst_count);
    items3.push({});
    const obj = {};
  });
  const sorted = items3.sort(
    (burst_count, burst_count2) =>
      (burst_count2.burst_count > 0 ? burst_count2.burst_count : burst_count2.count) -
      (burst_count.burst_count > 0 ? burst_count.burst_count : burst_count.count),
  );
  let obj2 = { value: tmp3(AnalyticsLocationDefault.MESSAGE_REACTIONS).analyticsLocations, children: null };
  if (items3.length > 0) {
    let obj3 = { channelId, messageId, emoji: emoji.emoji, reactions: items3, isSelectedBurst };
    let merged1 = Object.assign(merged);
    let tmp9Result = jsx(tmp4(11390).MessageReactionsContent, {
      channelId,
      messageId,
      emoji: emoji.emoji,
      reactions: items3,
      isSelectedBurst,
    });
  } else {
    tmp9Result = jsx(tmp4(11390).MessageReactionsEmpty, {});
  }
  obj2.children = tmp9Result;
  return jsx(items3(7265).AnalyticsLocationProvider, {
    value: tmp3(AnalyticsLocationDefault.MESSAGE_REACTIONS).analyticsLocations,
    children: null,
  });
}
