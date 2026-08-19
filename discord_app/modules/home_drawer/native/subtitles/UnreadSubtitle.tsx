// discord_app/modules/home_drawer/native/subtitles/UnreadSubtitle.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/home_drawer/native/subtitles/UnreadSubtitle.tsx");

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
  const intl = tmp(tmp2[6]).intl;
  obj = {
    channelName,
    count: count - 1,
    labelHook(children) {
      return callback(subtitleStyles(channelIconComponentWithGuild[7]).Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children }, arg1);
    },
    iconHook(arg0, arg1) {
      return <channelIconComponentWithGuild key={arg1} size="xxs" color="icon-muted" style={subtitleStyles.unreadChannelIcon} />;
    },
    channelHook(children) {
      return jsx(subtitleStyles(channelIconComponentWithGuild[7]).Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children }, arg1);
    },
    overflowHook(children) {
      return callback(subtitleStyles(channelIconComponentWithGuild[7]).Text, { variant: "text-xs/medium", color: "text-muted", children }, arg1);
    }
  };
  obj[1] = intl.format(subtitleStyles(channelIconComponentWithGuild[6]).t.OqlmU6, obj);
  return <View channelName={channelName} count={count - 1} labelHook={function labelHook(children) {
    return callback(subtitleStyles(channelIconComponentWithGuild[7]).Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children }, arg1);
  }} iconHook={function iconHook(arg0, arg1) {
    return <channelIconComponentWithGuild key={arg1} size="xxs" color="icon-muted" style={subtitleStyles.unreadChannelIcon} />;
  }} channelHook={function channelHook(children) {
    return jsx(subtitleStyles(channelIconComponentWithGuild[7]).Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children }, arg1);
  }} overflowHook={function overflowHook(children) {
    return callback(subtitleStyles(channelIconComponentWithGuild[7]).Text, { variant: "text-xs/medium", color: "text-muted", children }, arg1);
  }} />;
};