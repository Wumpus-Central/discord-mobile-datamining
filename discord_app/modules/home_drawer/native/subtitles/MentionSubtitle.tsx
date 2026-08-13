// discord_app/modules/home_drawer/native/subtitles/MentionSubtitle.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { styles } from "useSubtitleStyles.tsx";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/home_drawer/native/subtitles/MentionSubtitle.tsx");

export default function MentionSubtitle(channel) {
  let channelName;
  let count;
  let guild;
  channel = channel.channel;
  ({ guild, channelName, count } = channel);
  let obj = styles;
  const subtitleStyles = obj.useSubtitleStyles();
  let channelIconComponentWithGuild;
  if (null != channel) {
    channelIconComponentWithGuild = tmp(4805).getChannelIconComponentWithGuild(channel, guild);
    const tmpResult = tmp(4805);
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = tmp(4850).TextIcon;
  }
  obj = { style: subtitleStyles.subtitleRow, children: null };
  obj = { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon };
  const items = [callback(channelIconComponentWithGuild, obj), ];
  const obj1 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children: null };
  const intl = tmp(1236).intl;
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