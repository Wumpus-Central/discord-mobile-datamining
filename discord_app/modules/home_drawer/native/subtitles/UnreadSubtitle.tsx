// discord_app/modules/home_drawer/native/subtitles/UnreadSubtitle.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/UnreadSubtitle.tsx");

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
    labelHook(children, arg1) {
      return jsx(
        subtitleStyles(channelIconComponentWithGuild[7]).Text,
        { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children },
        arg1,
      );
    },
    iconHook(arg0, arg1) {
      return (
        <channelIconComponentWithGuild
          key={arg1}
          size="xxs"
          color="icon-muted"
          style={subtitleStyles.unreadChannelIcon}
        />
      );
    },
    channelHook(children, arg1) {
      return jsx(
        Text_Text.Text,
        { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children },
        arg1,
      );
    },
    overflowHook(children, arg1) {
      return jsx(
        subtitleStyles(channelIconComponentWithGuild[7]).Text,
        { variant: "text-xs/medium", color: "text-muted", children },
        arg1,
      );
    },
  };
  obj.children = intl.format(subtitleStyles(channelIconComponentWithGuild[6]).t.OqlmU6, obj);
  return (
    <View
      channelName={channelName}
      count={count - 1}
      labelHook={function labelHook(children, arg1) {
        return jsx(
          subtitleStyles(channelIconComponentWithGuild[7]).Text,
          { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children },
          arg1,
        );
      }}
      iconHook={function iconHook(arg0, arg1) {
        return (
          <channelIconComponentWithGuild
            key={arg1}
            size="xxs"
            color="icon-muted"
            style={subtitleStyles.unreadChannelIcon}
          />
        );
      }}
      channelHook={function channelHook(children, arg1) {
        return jsx(
          Text_Text.Text,
          {
            variant: "text-xs/medium",
            color: "text-muted",
            lineClamp: 1,
            style: subtitleStyles.subtitleText,
            children,
          },
          arg1,
        );
      }}
      overflowHook={function overflowHook(children, arg1) {
        return jsx(
          subtitleStyles(channelIconComponentWithGuild[7]).Text,
          { variant: "text-xs/medium", color: "text-muted", children },
          arg1,
        );
      }}
    />
  );
}
