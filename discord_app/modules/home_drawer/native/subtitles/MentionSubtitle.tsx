// discord_app/modules/home_drawer/native/subtitles/MentionSubtitle.tsx
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import utils_ChannelUtils from "../../../../utils/native/ChannelUtils.tsx";
import TextIcon from "../../../../design/components/Icon/native/redesign/generated/TextIcon.tsx";
import useSubtitleStyles from "useSubtitleStyles.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/MentionSubtitle.tsx");

export default function MentionSubtitle(channel) {
  channel = channel.channel;
  ({ guild, channelName, count } = channel);
  let obj = useSubtitleStyles;
  const subtitleStyles = obj.useSubtitleStyles();
  let channelIconComponentWithGuild;
  if (null != channel) {
    channelIconComponentWithGuild = utils_ChannelUtils.getChannelIconComponentWithGuild(channel, guild);
    const tmpResult = utils_ChannelUtils;
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = TextIcon.TextIcon;
  }
  obj = { style: subtitleStyles.subtitleRow, children: null };
  obj = { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon };
  const items = [React3(channelIconComponentWithGuild, obj)];
  const obj1 = {
    variant: "text-xs/medium",
    color: "text-muted",
    lineClamp: 1,
    style: subtitleStyles.subtitleText,
    children: null,
  };
  const intl = util.intl;
  obj1.children = intl.format(util.t.L9YdGH, {
    channelName,
    count: count - 1,
    channelHook(children, arg1) {
      return closure_1_3(Text_Text.Text, { variant: "text-xs/medium", children }, arg1);
    },
  });
  items[1] = React3(Text_Text.Text, obj1);
  obj.children = items;
  return React4(View, obj);
}
