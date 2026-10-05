// === Module 16266: TypingSubtitle ===

// Module 16266 (TypingSubtitle)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import Text_Text from "Text/Text" /* 4886 */;
import utils_ChannelUtils from "utils/ChannelUtils" /* 5812 */;
import TextIcon from "TextIcon" /* 5864 */;
import useSubtitleStyles from "useSubtitleStyles" /* 16265 */;
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
  let guild;
  let items;
  let items1;
  let items2;
  let text;
  const obj = react2;
  const cResult = obj.c(17);
  ({ guild, channel, channelName, text } = arg0);
  const obj2 = useSubtitleStyles;
  const subtitleStyles = obj2.useSubtitleStyles();
  if (cResult[0] === channel) {
    let tmp5;
    if (cResult[1] === guild) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp5) {
      if (cResult[4] === channelName) {
        let tmp7;
        let tmp10;
        if (cResult[5] === subtitleStyles.channelIcon) {
          tmp7 = cResult[6];
        }
        if (cResult[7] !== channelName) {
          let tmp11 = null;
          if (null != channelName) {
            const obj3 = { variant: "text-xs/medium", children: items };
            items = [channelName, "  \u00B7  "];
            tmp11 = React3(Text_Text.Text, obj3);
          }
          cResult[7] = channelName;
          cResult[8] = tmp11;
          tmp10 = tmp11;
        } else {
          tmp10 = cResult[8];
        }
        if (cResult[9] === subtitleStyles.subtitleText) {
          if (cResult[10] === tmp10) {
            let tmp13;
            if (cResult[11] === text) {
              tmp13 = cResult[12];
            }
            if (cResult[13] === subtitleStyles.subtitleRow) {
              if (cResult[14] === tmp7) {
                let tmp16;
                if (cResult[15] === tmp13) {
                  tmp16 = cResult[16];
                }
                return tmp16;
              }
            }
            const obj4 = { style: subtitleStyles.subtitleRow, children: items1 };
            items1 = [tmp7, tmp13];
            const tmp19 = React3(View, obj4);
            cResult[13] = subtitleStyles.subtitleRow;
            cResult[14] = tmp7;
            cResult[15] = tmp13;
            cResult[16] = tmp19;
            tmp16 = tmp19;
          }
        }
        const obj5 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children: items2 };
        items2 = [tmp10, text];
        const tmp15 = React3(Text_Text.Text, obj5);
        cResult[9] = subtitleStyles.subtitleText;
        cResult[10] = tmp10;
        cResult[11] = text;
        cResult[12] = tmp15;
        tmp13 = tmp15;
      }
    }
    let tmp8 = null;
    if (null != channelName) {
      const obj6 = { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon };
      tmp8 = _false(tmp5, obj6);
    }
    cResult[3] = tmp5;
    cResult[4] = channelName;
    cResult[5] = subtitleStyles.channelIcon;
    cResult[6] = tmp8;
    tmp7 = tmp8;
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
}) : ((arg0) => {
  let channel;
  let channelName;
  let guild;
  let items;
  let items1;
  let items2;
  let text;
  ({ channel, channelName } = arg0);
  ({ guild, text } = arg0);
  const obj = useSubtitleStyles;
  const subtitleStyles = obj.useSubtitleStyles();
  let channelIconComponentWithGuild;
  if (null != channel) {
    const tmpResult = utils_ChannelUtils;
    channelIconComponentWithGuild = tmpResult.getChannelIconComponentWithGuild(channel, guild);
  }
  if (channelIconComponentWithGuild == null) {
    channelIconComponentWithGuild = TextIcon.TextIcon;
  }
  let tmp7 = null;
  const obj2 = { style: subtitleStyles.subtitleRow, children: items };
  if (null != channelName) {
    const obj3 = { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon };
    tmp7 = _false(channelIconComponentWithGuild, obj3);
  }
  items = [tmp7, ];
  let tmp5Result = null;
  const obj4 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, style: subtitleStyles.subtitleText, children: items2 };
  const Text = Text_Text.Text;
  if (null != channelName) {
    const obj5 = { variant: "text-xs/medium", children: items1 };
    items1 = [channelName, "  \u00B7  "];
    tmp5Result = React3(Text_Text.Text, obj5);
  }
  items2 = [tmp5Result, text];
  items[1] = React3(Text, obj4);
  return React3(View, obj2);
});
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/TypingSubtitle.tsx");

export default tmp4;