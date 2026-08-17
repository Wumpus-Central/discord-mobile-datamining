// discord_app/modules/reactions/native/MessageReactions.tsx
import closure_3 from "noop" /* 19 */;
import closure_4 from "reinjectEphemerals" /* 4994 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
let closure_6 = [];
const result = require("set").fileFinishedImporting("modules/reactions/native/MessageReactions.tsx");

export default function MessageReactions(emoji) {
  ({ channelId, messageId, reactions, isSelectedBurst } = emoji);
  if (isSelectedBurst === undefined) {
    isSelectedBurst = false;
  }
  let merged = Object.assign(emoji, Object.create(null));
  let items3;
  items3 = channelId;
  let stateFromStores;
  let obj = items3(stateFromStores[3]);
  const items = [closure_4];
  const items1 = [channelId, messageId];
  stateFromStores = obj.useStateFromStores(items, () => {
    const message = closure_1_4.getMessage(items3, messageId);
    return null != message ? message.reactions : closure_1_6;
  }, items1);
  const items2 = [stateFromStores];
  const memo = React.useMemo(() => stateFromStores.filter((count_details) => {
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
  obj = { value: messageId(stateFromStores[4])(messageId(stateFromStores[5]).MESSAGE_REACTIONS).analyticsLocations, children: null };
  if (items3.length > 0) {
    obj = { channelId: null, messageId: null, emoji: null, reactions: null, isSelectedBurst: null };
    obj[0] = channelId;
    obj[1] = messageId;
    obj[2] = emoji.emoji;
    obj[3] = items3;
    obj[4] = isSelectedBurst;
    let merged1 = Object.assign(merged);
    let tmp9Result = tmp9(tmp4(tmp2[6]).MessageReactionsContent, obj);
  } else {
    tmp9Result = tmp9(tmp4(tmp2[6]).MessageReactionsEmpty, {});
  }
  obj[1] = tmp9Result;
  return jsx(items3(stateFromStores[4]).AnalyticsLocationProvider, { value: messageId(stateFromStores[4])(messageId(stateFromStores[5]).MESSAGE_REACTIONS).analyticsLocations, children: null });
};