// === Module 16660: UnreadSubtitle ===

// Module 16660 (UnreadSubtitle)
import Text_Text from "Text/Text" /* 4752 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/UnreadSubtitle.tsx");

export default function UnreadSubtitle(arg0) {
  ({ channel, channelName } = arg0);
  let subtitleStyles;
  let channelIconComponentWithGuild;
  ({ guild, count } = arg0);
  subtitleStyles = subtitleStyles(channelIconComponentWithGuild[3]).useSubtitleStyles();
  channelIconComponentWithGuild = undefined;
  if (null != channel) {
    channelIconComponentWithGuild = tmp(tmp2[4]).getChannelIconComponentWithGuild(channel, guild);
    const tmpResult = tmp(tmp2[4]);
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = tmp(tmp2[5]).TextIcon;
  }
  const diff = count - 1;
  const intl = tmp(tmp2[6]).intl;
  const obj2 = { style: subtitleStyles.subtitleRow, accessible: true, accessibilityLabel: intl.formatToPlainString(subtitleStyles(channelIconComponentWithGuild[6]).t.gxD5I6, { channelName, count: diff }), children: null };
  const intl2 = tmp(tmp2[6]).intl;
  obj2.children = intl2.format(subtitleStyles(channelIconComponentWithGuild[6]).t.OqlmU6, {
    channelName,
    count: diff,
    labelHook(children, key) {
      return jsx(subtitleStyles(channelIconComponentWithGuild[7]).Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children }, key);
    },
    iconHook(arg0, key) {
      return <channelIconComponentWithGuild key={key} size="xxs" color="icon-muted" style={subtitleStyles.unreadChannelIcon} />;
    },
    channelHook(children, key) {
      return jsx(Text_Text.Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children }, key);
    },
    overflowHook(children, key) {
      return jsx(subtitleStyles(channelIconComponentWithGuild[7]).Text, { variant: "text-xs/medium", color: "text-muted", children }, key);
    }
  });
  return <View style={subtitleStyles.subtitleRow} accessible accessibilityLabel={intl.formatToPlainString(subtitleStyles(channelIconComponentWithGuild[6]).t.gxD5I6, { channelName, count: diff })}>{null}</View>;
};