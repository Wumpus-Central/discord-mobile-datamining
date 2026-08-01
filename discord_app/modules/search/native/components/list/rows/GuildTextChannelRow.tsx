// === Module 15523: ? ===

// Module 15523
import importAllResult from "noop";
import { CHANNEL_LIST_SEARCH_LAYOUT as closure_4 } from "MessageEmbedTypes";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
const memoResult = importAllResult.memo(function GuildTextChannelRow(channel) {
  let lastMessageId;
  let onPress;
  channel = channel.channel;
  ({ lastMessageId, onPress } = channel);
  let extractTimestampResult = null;
  const merged = Object.assign(channel, Object.create(null));
  let id;
  let guild_id;
  let c4;
  id = channel.id;
  guild_id = channel.guild_id;
  if (null != lastMessageId) {
    let obj = onPress(id[3]);
    extractTimestampResult = obj.extractTimestamp(lastMessageId);
  }
  c4 = extractTimestampResult;
  const items = [id, guild_id, extractTimestampResult];
  const items1 = [channel.id, onPress];
  const memo = guild_id.useMemo(() => {
    let obj = channel(id[4]);
    let channelActiveAgoTimestamp = null;
    if (null != c4) {
      channelActiveAgoTimestamp = channel(id[5]).getChannelActiveAgoTimestamp(tmp3);
      const tmpResult = channel(id[5]);
    }
    obj = { subtitle: channelActiveAgoTimestamp, layout: c4, channelId: id, guildId: guild_id };
    return obj.renderChannelSubtitle(obj);
  }, items);
  const callback = guild_id.useCallback(() => {
    onPress(channel.id);
  }, items1);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.subtitle = memo;
  obj.channel = channel;
  obj.trailing = channel.trailing;
  obj.onPress = callback;
  return jsx(onPress(id[6]), {});
});
const result = require("jsxProd").fileFinishedImporting("modules/search/native/components/list/rows/GuildTextChannelRow.tsx");

export default memoResult;