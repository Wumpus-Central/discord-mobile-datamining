// === Module 16663: GuildTextChannelRow ===

// Module 16663 (GuildTextChannelRow)
import SearchUtils from "SearchUtils" /* 12340 */;
import guild_channels_ChannelSubtitle from "guild_channels/ChannelSubtitle" /* 16656 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = fn(7878).CHANNEL_LIST_SEARCH_LAYOUT;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildTextChannelRow.tsx");

export default noop.memo(function GuildTextChannelRow(channel) {
  channel = channel.channel;
  ({ lastMessageId, onPress } = channel);
  let extractTimestampResult = null;
  const merged = Object.assign(channel, Object.assign({ channel: 0, trailing: 0, lastMessageId: 0, onPress: 0 }));
  c4 = undefined;
  const id = channel.id;
  const guild_id = channel.guild_id;
  if (null != lastMessageId) {
    let obj = onPress(id[3]);
    extractTimestampResult = obj.extractTimestamp(lastMessageId);
  }
  c4 = extractTimestampResult;
  const items = [id, guild_id, extractTimestampResult];
  const items1 = [channel.id, onPress];
  const memo = guild_id.useMemo(() => {
    let obj = guild_channels_ChannelSubtitle;
    let channelActiveAgoTimestamp = null;
    if (null != c4) {
      channelActiveAgoTimestamp = SearchUtils.getChannelActiveAgoTimestamp(tmp3);
      const tmpResult = SearchUtils;
    }
    obj = { subtitle: channelActiveAgoTimestamp, layout, channelId: id, guildId: guild_id };
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