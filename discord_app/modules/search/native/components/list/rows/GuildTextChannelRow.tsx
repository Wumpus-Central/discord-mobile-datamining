// === Module 17127: GuildTextChannelRow ===

// Module 17127 (GuildTextChannelRow)
import SearchUtils from "SearchUtils" /* 12592 */;
import guild_channels_ChannelSubtitle from "guild_channels/ChannelSubtitle" /* 17115 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_4 = fn(8121).CHANNEL_LIST_SEARCH_LAYOUT;
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
    extractTimestampResult = onPress(id[3]).extractTimestamp(lastMessageId);
    const obj = onPress(id[3]);
  }
  c4 = extractTimestampResult;
  const items = [id, guild_id, extractTimestampResult];
  const items1 = [channel.id, onPress];
  const memo = guild_id.useMemo(() => {
    let channelActiveAgoTimestamp = null;
    if (null != c4) {
      channelActiveAgoTimestamp = SearchUtils.getChannelActiveAgoTimestamp(tmp3);
      const tmpResult = SearchUtils;
    }
    return guild_channels_ChannelSubtitle.renderChannelSubtitle({ subtitle: channelActiveAgoTimestamp, layout, channelId: id, guildId: guild_id });
  }, items);
  const callback = guild_id.useCallback(() => {
    onPress(channel.id);
  }, items1);
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.subtitle = memo;
  obj2.channel = channel;
  obj2.trailing = channel.trailing;
  obj2.onPress = callback;
  return jsx(onPress(id[6]), {});
});