// discord_app/modules/home_drawer/native/subtitles/MentionSubtitle.tsx
import c from "../../../../../_runtime/00576_c.js";
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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/MentionSubtitle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(16);
      ({ guild, channel, channelName, count } = arg0);
      const subtitleStyles = useSubtitleStyles.useSubtitleStyles();
      if (cResult[0] === channel) {
        if (cResult[1] === guild) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === tmp5) {
          if (cResult[4] === subtitleStyles.channelIcon) {
            let tmp8 = cResult[5];
          }
          if (cResult[6] === channelName) {
            if (cResult[7] === count) {
              let tmp12 = cResult[8];
            }
            if (cResult[9] === subtitleStyles.subtitleText) {
              if (cResult[10] === tmp12) {
                let tmp14 = cResult[11];
              }
              if (cResult[12] === subtitleStyles.subtitleRow) {
                if (cResult[13] === tmp8) {
                  if (cResult[14] === tmp14) {
                    let tmp17 = cResult[15];
                  }
                  return tmp17;
                }
              }
              const obj3 = { style: tmp7, children: null };
              const items = [tmp8, tmp14];
              obj3.children = items;
              const tmp20 = React4(View, obj3);
              cResult[12] = subtitleStyles.subtitleRow;
              cResult[13] = tmp8;
              cResult[14] = tmp14;
              cResult[15] = tmp20;
              tmp17 = tmp20;
            }
            const obj4 = {
              variant: "text-xs/medium",
              color: "text-muted",
              lineClamp: 1,
              style: tmp11,
              children: tmp12,
            };
            const tmp16 = React3(Text_Text.Text, obj4);
            cResult[9] = subtitleStyles.subtitleText;
            cResult[10] = tmp12;
            cResult[11] = tmp16;
            tmp14 = tmp16;
          }
          const intl = util.intl;
          const obj5 = {
            channelName,
            count: count - 1,
            channelHook(children, arg1) {
              return closure_1_3(Text_Text.Text, { variant: "text-xs/medium", children }, arg1);
            },
          };
          const formatResult = intl.format(util.t.L9YdGH, obj5);
          cResult[6] = channelName;
          cResult[7] = count;
          cResult[8] = formatResult;
          tmp12 = formatResult;
        }
        const obj6 = { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon };
        const tmp10 = React3(tmp5, obj6);
        cResult[3] = tmp5;
        cResult[4] = subtitleStyles.channelIcon;
        cResult[5] = tmp10;
        tmp8 = tmp10;
      }
      let channelIconComponentWithGuild;
      if (null != channel) {
        channelIconComponentWithGuild = utils_ChannelUtils.getChannelIconComponentWithGuild(channel, guild);
        const tmpResult = utils_ChannelUtils;
      }
      if (channelIconComponentWithGuild == null) {
        channelIconComponentWithGuild = TextIcon.TextIcon;
      }
      cResult[0] = channel;
      cResult[1] = guild;
      cResult[2] = channelIconComponentWithGuild;
      tmp5 = channelIconComponentWithGuild;
    }
  : (channel) => {
      channel = channel.channel;
      ({ guild, channelName, count } = channel);
      const subtitleStyles = useSubtitleStyles.useSubtitleStyles();
      let channelIconComponentWithGuild;
      if (null != channel) {
        channelIconComponentWithGuild = utils_ChannelUtils.getChannelIconComponentWithGuild(channel, guild);
        const tmpResult = utils_ChannelUtils;
      }
      if (channelIconComponentWithGuild == null) {
        channelIconComponentWithGuild = TextIcon.TextIcon;
      }
      const obj2 = { style: subtitleStyles.subtitleRow, children: null };
      const items = [
        React3(channelIconComponentWithGuild, { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon }),
      ];
      const obj4 = {
        variant: "text-xs/medium",
        color: "text-muted",
        lineClamp: 1,
        style: subtitleStyles.subtitleText,
        children: null,
      };
      const intl = util.intl;
      obj4.children = intl.format(util.t.L9YdGH, {
        channelName,
        count: count - 1,
        channelHook(children, arg1) {
          return closure_1_3(Text_Text.Text, { variant: "text-xs/medium", children }, arg1);
        },
      });
      items[1] = React3(Text_Text.Text, obj4);
      obj2.children = items;
      return React4(View, obj2);
    };
