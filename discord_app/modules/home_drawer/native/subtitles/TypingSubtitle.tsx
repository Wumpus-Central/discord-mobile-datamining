// discord_app/modules/home_drawer/native/subtitles/TypingSubtitle.tsx
import c from "../../../../../_runtime/00576_c.js";
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
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/TypingSubtitle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function TypingSubtitle(arg0) {
      const cResult = c.c(17);
      ({ guild, channel, channelName, text } = arg0);
      const subtitleStyles = useSubtitleStyles.useSubtitleStyles();
      if (cResult[0] === channel) {
        if (cResult[1] === guild) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === tmp5) {
          if (cResult[4] === channelName) {
            if (cResult[5] === subtitleStyles.channelIcon) {
              let tmp7 = cResult[6];
            }
            if (cResult[7] !== channelName) {
              let tmp11 = null;
              if (null != channelName) {
                const obj3 = { variant: "text-xs/medium", children: null };
                const items = [channelName, "  \u00B7  "];
                obj3.children = items;
                tmp11 = React4(Text_Text.Text, obj3);
              }
              cResult[7] = channelName;
              cResult[8] = tmp11;
              let tmp10 = tmp11;
            } else {
              tmp10 = cResult[8];
            }
            if (cResult[9] === subtitleStyles.subtitleText) {
              if (cResult[10] === tmp10) {
                if (cResult[11] === text) {
                  let tmp13 = cResult[12];
                }
                if (cResult[13] === subtitleStyles.subtitleRow) {
                  if (cResult[14] === tmp7) {
                    if (cResult[15] === tmp13) {
                      let tmp16 = cResult[16];
                    }
                    return tmp16;
                  }
                }
                const obj4 = { style: subtitleStyles.subtitleRow, children: null };
                const items1 = [tmp7, tmp13];
                obj4.children = items1;
                const tmp19 = React4(View, obj4);
                cResult[13] = subtitleStyles.subtitleRow;
                cResult[14] = tmp7;
                cResult[15] = tmp13;
                cResult[16] = tmp19;
                tmp16 = tmp19;
              }
            }
            const obj5 = {
              variant: "text-xs/medium",
              color: "text-muted",
              lineClamp: 1,
              style: subtitleStyles.subtitleText,
              children: null,
            };
            const items2 = [tmp10, text];
            obj5.children = items2;
            const tmp15 = React4(Text_Text.Text, obj5);
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
          tmp8 = React3(tmp5, obj6);
        }
        cResult[3] = tmp5;
        cResult[4] = channelName;
        cResult[5] = subtitleStyles.channelIcon;
        cResult[6] = tmp8;
        tmp7 = tmp8;
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
  : function TypingSubtitle(arg0) {
      ({ channel, channelName } = arg0);
      ({ guild, text } = arg0);
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
      let tmp7 = null;
      if (null != channelName) {
        const obj3 = { size: "xxs", color: "icon-muted", style: subtitleStyles.channelIcon };
        tmp7 = React3(channelIconComponentWithGuild, obj3);
      }
      const items = [tmp7];
      const obj4 = {
        variant: "text-xs/medium",
        color: "text-muted",
        lineClamp: 1,
        style: subtitleStyles.subtitleText,
        children: null,
      };
      let tmp5Result = null;
      if (null != channelName) {
        const obj5 = { variant: "text-xs/medium", children: null };
        const items1 = [channelName, "  \u00B7  "];
        obj5.children = items1;
        tmp5Result = React4(Text_Text.Text, obj5);
      }
      const items2 = [tmp5Result, text];
      obj4.children = items2;
      items[1] = React4(Text_Text.Text, obj4);
      obj2.children = items;
      return React4(View, obj2);
    };
