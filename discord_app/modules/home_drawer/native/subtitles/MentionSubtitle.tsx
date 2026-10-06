// === Module 16304: MentionSubtitle ===

// Module 16304 (MentionSubtitle)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5819 */;
import TextIcon from "TextIcon" /* 5871 */;
import useSubtitleStyles from "useSubtitleStyles" /* 16305 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let channelName;
  let count;
  let guild;
  let items;
  let obj = react2;
  const cResult = obj.c(16);
  ({ guild, channel, channelName, count } = arg0);
  const obj2 = useSubtitleStyles;
  const subtitleStyles = obj2.useSubtitleStyles();
  if (cResult[0] === channel) {
    let tmp5;
    if (cResult[1] === guild) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      let tmp8;
      if (cResult[4] === subtitleStyles.channelIcon) {
        tmp8 = cResult[5];
      }
      if (cResult[6] === channelName) {
        let tmp12;
        if (cResult[7] === count) {
          tmp12 = cResult[8];
        }
        if (cResult[9] === subtitleStyles.subtitleText) {
          let tmp14;
          if (cResult[10] === tmp12) {
            tmp14 = cResult[11];
          }
          if (cResult[12] === subtitleStyles.subtitleRow) {
            if (cResult[13] === tmp8) {
              let tmp17;
              if (cResult[14] === tmp14) {
                tmp17 = cResult[15];
              }
              return tmp17;
            }
          }
          const obj3 = { style: tmp7, children: items };
          items = [tmp8, tmp14];
          const tmp20 = React3(View, obj3);
          cResult[12] = subtitleStyles.subtitleRow;
          cResult[13] = tmp8;
          cResult[14] = tmp14;
          cResult[15] = tmp20;
          tmp17 = tmp20;
        }
        const obj4 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: tmp11, children: tmp12 };
        const tmp16 = _false(Text_Text.Text, obj4);
        cResult[9] = subtitleStyles.subtitleText;
        cResult[10] = tmp12;
        cResult[11] = tmp16;
        tmp14 = tmp16;
      }
      const intl = intl2.intl;
      const obj5 = {
        channelName,
        count: count - 1,
        channelHook(children, arg1) {
              const obj = { variant: "text-xs/medium", children };
              return closure_1_3(Text_Text.Text, obj, arg1);
            }
      };
      const formatResult = intl.format(intl2.t.L9YdGH, obj5);
      cResult[6] = channelName;
      cResult[7] = count;
      cResult[8] = formatResult;
      tmp12 = formatResult;
    }
    const obj6 = { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon };
    const tmp10 = _false(tmp5, obj6);
    cResult[3] = tmp5;
    cResult[4] = subtitleStyles.channelIcon;
    cResult[5] = tmp10;
    tmp8 = tmp10;
  }
  let channelIconComponentWithGuild;
  if (null != channel) {
    const tmpResult = utils_ChannelUtils;
    channelIconComponentWithGuild = tmpResult.getChannelIconComponentWithGuild(channel, guild);
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = TextIcon.TextIcon;
  }
  cResult[0] = channel;
  cResult[1] = guild;
  cResult[2] = channelIconComponentWithGuild;
  tmp5 = channelIconComponentWithGuild;
}) : ((channel) => {
  let channelName;
  let count;
  let guild;
  let intl;
  let items;
  let obj5;
  channel = channel.channel;
  ({ guild, channelName, count } = channel);
  let obj = useSubtitleStyles;
  const subtitleStyles = obj.useSubtitleStyles();
  let channelIconComponentWithGuild;
  if (null != channel) {
    const tmpResult = utils_ChannelUtils;
    channelIconComponentWithGuild = tmpResult.getChannelIconComponentWithGuild(channel, guild);
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = TextIcon.TextIcon;
  }
  const obj2 = { style: subtitleStyles.subtitleRow, children: items };
  items = [, ];
  const obj3 = { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon };
  items[0] = _false(channelIconComponentWithGuild, obj3);
  const obj4 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children: intl.format(intl2.t.L9YdGH, obj5) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  obj5 = {
    channelName,
    count: count - 1,
    channelHook(children, arg1) {
      const obj = { variant: "text-xs/medium", children };
      return closure_1_3(Text_Text.Text, obj, arg1);
    }
  };
  items[1] = _false(Text, obj4);
  return React3(View, obj2);
});
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/MentionSubtitle.tsx");

export default tmp4;