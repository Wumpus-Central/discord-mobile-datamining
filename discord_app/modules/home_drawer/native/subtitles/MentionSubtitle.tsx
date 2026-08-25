// discord_app/modules/home_drawer/native/subtitles/MentionSubtitle.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import styles from "useSubtitleStyles.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/home_drawer/native/subtitles/MentionSubtitle.tsx");

export default function MentionSubtitle(channel) {
  channel = channel.channel;
  ({ guild, channelName, count } = channel);
  let obj = styles;
  const subtitleStyles = obj.useSubtitleStyles();
  let channelIconComponentWithGuild;
  if (null != channel) {
    channelIconComponentWithGuild = tmp(4866).getChannelIconComponentWithGuild(channel, guild);
    const tmpResult = tmp(4866);
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = tmp(4911).TextIcon;
  }
  obj = { style: subtitleStyles.subtitleRow, children: null };
  obj = { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon };
  const items = [callback(channelIconComponentWithGuild, obj), ];
  obj1 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children: null };
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