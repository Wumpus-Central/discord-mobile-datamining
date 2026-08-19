// === Module 15588: MentionSubtitle ===

// Module 15588 (MentionSubtitle)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import getChannelIcon from "getChannelIcon" /* 6832 */;
import TextIcon from "TextIcon" /* 6876 */;
import styles from "styles" /* 15589 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

require = fn;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("obj132").fileFinishedImporting("modules/home_drawer/native/subtitles/MentionSubtitle.tsx");

export default function MentionSubtitle(channel) {
  channel = channel.channel;
  ({ guild, channelName, count } = channel);
  let obj = styles;
  const subtitleStyles = obj.useSubtitleStyles();
  let channelIconComponentWithGuild;
  if (null != channel) {
    channelIconComponentWithGuild = getChannelIcon.getChannelIconComponentWithGuild(channel, guild);
    const tmpResult = getChannelIcon;
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = TextIcon.TextIcon;
  }
  obj = { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon };
  const items = [callback(channelIconComponentWithGuild, obj), ];
  obj1 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children: null };
  const intl = getSystemLocale.intl;
  obj1[4] = intl.format(getSystemLocale.t.L9YdGH, {
    channelName,
    count: count - 1,
    channelHook(children) {
      return callback2(callback(table[6]).Text, { variant: "text-xs/medium", children }, arg1);
    }
  });
  items[1] = callback(Text.Text, obj1);
  obj[1] = items;
  return callback2(View, obj);
};