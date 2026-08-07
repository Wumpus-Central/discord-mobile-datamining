// discord_app/modules/home_drawer/native/subtitles/TypingSubtitle.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { styles } from "useSubtitleStyles.tsx";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
const result = require("jsxProd").fileFinishedImporting("modules/home_drawer/native/subtitles/TypingSubtitle.tsx");

export default function TypingSubtitle(arg0) {
  let channel;
  let channelName;
  let guild;
  let text;
  ({ channel, channelName } = arg0);
  ({ guild, text } = arg0);
  let obj = styles;
  const subtitleStyles = obj.useSubtitleStyles();
  let channelIconComponentWithGuild;
  if (null != channel) {
    channelIconComponentWithGuild = tmp(4762).getChannelIconComponentWithGuild(channel, guild);
    const tmpResult = tmp(4762);
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = tmp(4807).TextIcon;
  }
  obj = { style: subtitleStyles.subtitleRow, children: null };
  let tmp7 = null;
  if (null != channelName) {
    obj = { size: "xxs", color: "icon-muted", style: null };
    obj[2] = subtitleStyles.channelIcon;
    tmp7 = callback(channelIconComponentWithGuild, obj);
  }
  const items = [tmp7, ];
  const obj1 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children: null };
  let tmp5Result = null;
  if (null != channelName) {
    const obj2 = { variant: "text-xs/medium", children: null };
    const items1 = [channelName, "  \u00B7  "];
    obj2[1] = items1;
    tmp5Result = tmp5(tmp(4298).Text, obj2);
  }
  const items2 = [tmp5Result, text];
  obj1[4] = items2;
  items[1] = closure_4(Text.Text, obj1);
  obj[1] = items;
  return closure_4(View, obj);
};