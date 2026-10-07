// === Module 16858: GuildTextChannelRow ===

// Module 16858 (GuildTextChannelRow)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import c from "c" /* 576 */;
import SearchUtils from "SearchUtils" /* 11987 */;
import guild_channels_ChannelSubtitle from "guild_channels/ChannelSubtitle" /* 16846 */;
import GuildChannelRowDefault from "GuildChannelRow" /* 16849 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["channel", "trailing", "lastMessageId", "onPress"];
const layout = fn(7524).CHANNEL_LIST_SEARCH_LAYOUT;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/search/native/components/list/rows/GuildTextChannelRow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((channel) => {
  const cResult = c.c(21);
  if (cResult[0] !== channel) {
    channel = channel.channel;
    id = channel;
    ({ trailing, lastMessageId, onPress } = channel);
    closure_1 = onPress;
    const tmp11 = _objectWithoutProperties(channel, closure_3);
    cResult[0] = channel;
    cResult[1] = channel;
    cResult[2] = lastMessageId;
    cResult[3] = onPress;
    cResult[4] = tmp11;
    cResult[5] = trailing;
    let tmp8 = trailing;
    let tmp7 = tmp11;
    let tmp5 = lastMessageId;
  } else {
    id = cResult[1];
    tmp5 = cResult[2];
    closure_1 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  ({ id, guild_id } = tmp4);
  if (cResult[6] !== tmp5) {
    let extractTimestampResult = null;
    if (null != tmp5) {
      extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(tmp5);
    }
    cResult[6] = tmp5;
    cResult[7] = extractTimestampResult;
    let tmp12 = extractTimestampResult;
  } else {
    tmp12 = cResult[7];
  }
  if (cResult[8] === id) {
    if (cResult[9] === guild_id) {
      if (cResult[10] === tmp12) {
        let tmp15 = cResult[11];
      }
      if (cResult[12] === tmp4.id) {
        if (cResult[13] === onPress) {
          let tmp18 = cResult[14];
        }
        if (cResult[15] === tmp4) {
          if (cResult[16] === tmp18) {
            if (cResult[17] === tmp7) {
              if (cResult[18] === tmp15) {
                if (cResult[19] === tmp8) {
                  let tmp19 = cResult[20];
                }
                return tmp19;
              }
            }
          }
        }
        const obj3 = {};
        const merged = Object.assign(tmp7);
        obj3.subtitle = tmp15;
        obj3.channel = tmp4;
        obj3.trailing = tmp8;
        obj3.onPress = tmp18;
        const tmp26 = jsx(GuildChannelRowDefault, {});
        cResult[15] = tmp4;
        cResult[16] = tmp18;
        cResult[17] = tmp7;
        cResult[18] = tmp15;
        cResult[19] = tmp8;
        cResult[20] = tmp26;
        tmp19 = tmp26;
      }
      const fn = function f() {
        closure_1(id.id);
      };
      cResult[12] = tmp4.id;
      cResult[13] = onPress;
      cResult[14] = fn;
      tmp18 = fn;
    }
  }
  let channelActiveAgoTimestamp = null;
  if (null != tmp12) {
    channelActiveAgoTimestamp = SearchUtils.getChannelActiveAgoTimestamp(tmp12);
    const tmpResult2 = SearchUtils;
  }
  const result = guild_channels_ChannelSubtitle.renderChannelSubtitle({ subtitle: channelActiveAgoTimestamp, layout, channelId: id, guildId: guild_id });
  cResult[8] = id;
  cResult[9] = guild_id;
  cResult[10] = tmp12;
  cResult[11] = result;
  tmp15 = result;
  const obj4 = { subtitle: channelActiveAgoTimestamp, layout, channelId: id, guildId: guild_id };
  const tmpResult = guild_channels_ChannelSubtitle;
}) : ((channel) => {
  channel = channel.channel;
  ({ lastMessageId, onPress } = channel);
  let extractTimestampResult = null;
  const merged = Object.assign(channel, Object.assign({ channel: 0, trailing: 0, lastMessageId: 0, onPress: 0 }));
  c4 = undefined;
  const id = channel.id;
  const guild_id = channel.guild_id;
  if (null != lastMessageId) {
    extractTimestampResult = onPress(id[6]).extractTimestamp(lastMessageId);
    const obj = onPress(id[6]);
  }
  c4 = extractTimestampResult;
  const items = [id, guild_id, extractTimestampResult];
  const items1 = [channel.id, onPress];
  const memo = noop.useMemo(() => {
    let channelActiveAgoTimestamp = null;
    if (null != c4) {
      channelActiveAgoTimestamp = SearchUtils.getChannelActiveAgoTimestamp(tmp3);
      const tmpResult = SearchUtils;
    }
    return guild_channels_ChannelSubtitle.renderChannelSubtitle({ subtitle: channelActiveAgoTimestamp, layout, channelId: id, guildId: guild_id });
  }, items);
  const callback = noop.useCallback(() => {
    onPress(channel.id);
  }, items1);
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.subtitle = memo;
  obj2.channel = channel;
  obj2.trailing = channel.trailing;
  obj2.onPress = callback;
  return jsx(onPress(id[9]), {});
}));