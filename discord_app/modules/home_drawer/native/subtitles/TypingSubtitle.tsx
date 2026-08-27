// === Module 15829: TypingSubtitle ===

// Module 15829 (TypingSubtitle)
import noopAll from "noop" /* 19 */;
import Text from "Text" /* 4441 */;
import styles from "styles" /* 15828 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/home_drawer/native/subtitles/TypingSubtitle.tsx");

export default function TypingSubtitle(arg0) {
  ({ channel, channelName } = arg0);
  ({ guild, text } = arg0);
  let obj = styles;
  const subtitleStyles = obj.useSubtitleStyles();
  let channelIconComponentWithGuild;
  if (null != channel) {
    channelIconComponentWithGuild = tmp(4933).getChannelIconComponentWithGuild(channel, guild);
    const tmpResult = tmp(4933);
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = tmp(4981).TextIcon;
  }
  obj = { style: subtitleStyles.subtitleRow, children: null };
  let tmp7 = null;
  if (null != channelName) {
    obj = { size: "xxs", color: "icon-muted", style: null };
    obj[2] = subtitleStyles.channelIcon;
    tmp7 = callback(channelIconComponentWithGuild, obj);
  }
  const items = [tmp7, ];
  obj1 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children: null };
  let tmp5Result = null;
  if (null != channelName) {
    const obj2 = { variant: "text-xs/medium", children: null };
    const items1 = [channelName, "  \u00B7  "];
    obj2[1] = items1;
    tmp5Result = tmp5(tmp(4441).Text, obj2);
  }
  const items2 = [tmp5Result, text];
  obj1[4] = items2;
  items[1] = closure_4(Text.Text, obj1);
  obj[1] = items;
  return closure_4(View, obj);
};