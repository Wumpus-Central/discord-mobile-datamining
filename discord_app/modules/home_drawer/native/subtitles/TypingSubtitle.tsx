// discord_app/modules/home_drawer/native/subtitles/TypingSubtitle.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useSubtitleStyles from "useSubtitleStyles.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/TypingSubtitle.tsx");

export default function TypingSubtitle(arg0) {
  ({ channel, channelName } = arg0);
  ({ guild, text } = arg0);
  let obj = useSubtitleStyles;
  const subtitleStyles = obj.useSubtitleStyles();
  let channelIconComponentWithGuild;
  if (null != channel) {
    channelIconComponentWithGuild = tmp(5028).getChannelIconComponentWithGuild(channel, guild);
    const tmpResult = tmp(5028);
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = tmp(5080).TextIcon;
  }
  obj = { style: subtitleStyles.subtitleRow, children: null };
  let tmp7 = null;
  if (null != channelName) {
    obj = { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon };
    tmp7 = React3(channelIconComponentWithGuild, obj);
  }
  const items = [tmp7];
  const obj1 = {
    variant: "text-xs/medium",
    color: "text-muted",
    lineClamp: 1,
    style: subtitleStyles.subtitleText,
    children: null,
  };
  let tmp5Result = null;
  if (null != channelName) {
    const obj2 = { variant: "text-xs/medium", children: null };
    const items1 = [channelName, "  \u00B7  "];
    obj2.children = items1;
    tmp5Result = tmp5(tmp(4556).Text, obj2);
  }
  const items2 = [tmp5Result, text];
  obj1.children = items2;
  items[1] = React4(Text_Text.Text, obj1);
  obj.children = items;
  return React4(View, obj);
}
