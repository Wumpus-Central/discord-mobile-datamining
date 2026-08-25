// === Module 15687: UnreadSubtitle ===

// Module 15687 (UnreadSubtitle)
import noopAll from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/home_drawer/native/subtitles/UnreadSubtitle.tsx");

export default function UnreadSubtitle(channel) {
  channel = channel.channel;
  let subtitleStyles;
  let channelIconComponentWithGuild;
  ({ guild, channelName, count } = channel);
  let obj = subtitleStyles(channelIconComponentWithGuild[3]);
  subtitleStyles = obj.useSubtitleStyles();
  channelIconComponentWithGuild = undefined;
  if (null != channel) {
    channelIconComponentWithGuild = tmp(tmp2[4]).getChannelIconComponentWithGuild(channel, guild);
    const tmpResult = tmp(tmp2[4]);
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = tmp(tmp2[5]).TextIcon;
  }
  obj = { style: subtitleStyles.subtitleRow, children: null };
  const intl = tmp(tmp2[6]).intl;
  obj = {
    channelName,
    count: count - 1,
    labelHook(children) {
      return callback(subtitleStyles(channelIconComponentWithGuild[7]).Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children }, arg1);
    },
    iconHook(arg0, arg1) {
      return closure_1_3(channelIconComponentWithGuild, { size: "xxs", color: "icon-muted", style: subtitleStyles.unreadChannelIcon }, arg1);
    },
    channelHook(children) {
      return closure_1_3(subtitleStyles(channelIconComponentWithGuild[7]).Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children }, arg1);
    },
    overflowHook(children) {
      return callback(subtitleStyles(channelIconComponentWithGuild[7]).Text, { variant: "text-xs/medium", color: "text-muted", children }, arg1);
    }
  };
  obj[1] = intl.format(subtitleStyles(channelIconComponentWithGuild[6]).t.OqlmU6, obj);
  return <View channelName={channelName} count={count - 1} labelHook={function labelHook(children) {
    return callback(subtitleStyles(channelIconComponentWithGuild[7]).Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children }, arg1);
  }} iconHook={function iconHook(arg0, arg1) {
    return closure_1_3(channelIconComponentWithGuild, { size: "xxs", color: "icon-muted", style: subtitleStyles.unreadChannelIcon }, arg1);
  }} channelHook={function channelHook(children) {
    return closure_1_3(subtitleStyles(channelIconComponentWithGuild[7]).Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children }, arg1);
  }} overflowHook={function overflowHook(children) {
    return callback(subtitleStyles(channelIconComponentWithGuild[7]).Text, { variant: "text-xs/medium", color: "text-muted", children }, arg1);
  }} />;
};