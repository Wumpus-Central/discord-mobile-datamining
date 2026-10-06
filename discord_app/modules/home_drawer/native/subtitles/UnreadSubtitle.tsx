// discord_app/modules/home_drawer/native/subtitles/UnreadSubtitle.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap;

const View = react_native.View;
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channel;
      let channelName;
      let closure_1;
      let count;
      let guild;
      let subtitleStyles;
      const obj = subtitleStyles(576);
      const cResult = obj.c(16);
      ({ guild, channel, channelName, count } = arg0);
      const obj2 = subtitleStyles(16305);
      subtitleStyles = obj2.useSubtitleStyles();
      if (cResult[0] === channel) {
        let tmp5;
        if (cResult[1] === guild) {
          tmp5 = cResult[2];
        }
        dependencyMap = tmp5;
        const diff = count - 1;
        if (cResult[3] === channelName) {
          let tmp8;
          if (cResult[4] === diff) {
            tmp8 = cResult[5];
          }
          if (cResult[6] === tmp5) {
            if (cResult[7] === channelName) {
              if (cResult[8] === subtitleStyles.subtitleText) {
                if (cResult[9] === subtitleStyles.unreadChannelIcon) {
                  let tmp11;
                  if (cResult[10] === diff) {
                    tmp11 = cResult[11];
                  }
                  if (cResult[12] === tmp8) {
                    if (cResult[13] === subtitleStyles.subtitleRow) {
                      let tmp13;
                      if (cResult[14] === tmp11) {
                        tmp13 = cResult[15];
                      }
                      return tmp13;
                    }
                  }
                  const tmp16 = (
                    <View style={tmp10} accessible accessibilityLabel={tmp8}>
                      {tmp11}
                    </View>
                  );
                  cResult[12] = tmp8;
                  cResult[13] = subtitleStyles.subtitleRow;
                  cResult[14] = tmp11;
                  cResult[15] = tmp16;
                  tmp13 = tmp16;
                }
              }
            }
          }
          const intl2 = tmp(1126).intl;
          const obj4 = {
            channelName,
            count: diff,
            labelHook(children, id) {
              return jsx(
                subtitleStyles(closure_1[9]).Text,
                { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children },
                id,
              );
            },
            iconHook(arg0, key) {
              return <closure_1 key={key} size="xxs" color="icon-muted" style={subtitleStyles.unreadChannelIcon} />;
            },
            channelHook(children, key) {
              return jsx(
                Text_Text.Text,
                {
                  variant: "text-xs/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  style: subtitleStyles.subtitleText,
                  children,
                },
                key,
              );
            },
            overflowHook(children, id) {
              return jsx(
                subtitleStyles(closure_1[9]).Text,
                { variant: "text-xs/medium", color: "text-muted", children },
                id,
              );
            },
          };
          const formatResult = intl2.format(subtitleStyles(1126).t.OqlmU6, obj4);
          cResult[6] = tmp5;
          cResult[7] = channelName;
          cResult[8] = subtitleStyles.subtitleText;
          cResult[9] = subtitleStyles.unreadChannelIcon;
          cResult[10] = diff;
          cResult[11] = formatResult;
          tmp11 = formatResult;
        }
        const intl = tmp(1126).intl;
        const obj5 = { channelName, count: diff };
        const formatToPlainStringResult = intl.formatToPlainString(subtitleStyles(1126).t.gxD5I6, obj5);
        cResult[3] = channelName;
        cResult[4] = diff;
        cResult[5] = formatToPlainStringResult;
        tmp8 = formatToPlainStringResult;
      }
      let channelIconComponentWithGuild;
      if (null != channel) {
        const tmpResult = subtitleStyles(5819);
        channelIconComponentWithGuild = tmpResult.getChannelIconComponentWithGuild(channel, guild);
      }
      if (channelIconComponentWithGuild == null) {
        channelIconComponentWithGuild = tmp(5871).TextIcon;
      }
      cResult[0] = channel;
      cResult[1] = guild;
      cResult[2] = channelIconComponentWithGuild;
      tmp5 = channelIconComponentWithGuild;
    }
  : (arg0) => {
      let channel;
      let channelName;
      let count;
      let guild;
      ({ channel, channelName } = arg0);
      let subtitleStyles;
      let channelIconComponentWithGuild;
      ({ guild, count } = arg0);
      const obj = subtitleStyles(channelIconComponentWithGuild[5]);
      subtitleStyles = obj.useSubtitleStyles();
      channelIconComponentWithGuild = undefined;
      if (null != channel) {
        const tmpResult = subtitleStyles(channelIconComponentWithGuild[6]);
        channelIconComponentWithGuild = tmpResult.getChannelIconComponentWithGuild(channel, guild);
      }
      if (channelIconComponentWithGuild == null) {
        channelIconComponentWithGuild = tmp(tmp2[7]).TextIcon;
      }
      const diff = count - 1;
      const intl = tmp(tmp2[8]).intl;
      const intl2 = tmp(tmp2[8]).intl;
      const obj3 = {
        channelName,
        count: diff,
        labelHook(children, id) {
          return jsx(
            subtitleStyles(channelIconComponentWithGuild[9]).Text,
            { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children },
            id,
          );
        },
        iconHook(arg0, key) {
          return (
            <channelIconComponentWithGuild
              key={key}
              size="xxs"
              color="icon-muted"
              style={subtitleStyles.unreadChannelIcon}
            />
          );
        },
        channelHook(children, key) {
          return jsx(
            Text_Text.Text,
            {
              variant: "text-xs/medium",
              color: "text-muted",
              lineClamp: 1,
              style: subtitleStyles.subtitleText,
              children,
            },
            key,
          );
        },
        overflowHook(children, id) {
          return jsx(
            subtitleStyles(channelIconComponentWithGuild[9]).Text,
            { variant: "text-xs/medium", color: "text-muted", children },
            id,
          );
        },
      };
      return (
        <View
          style={subtitleStyles.subtitleRow}
          accessible
          accessibilityLabel={intl.formatToPlainString(subtitleStyles(channelIconComponentWithGuild[8]).t.gxD5I6, {
            channelName,
            count: diff,
          })}
        >
          {intl2.format(subtitleStyles(channelIconComponentWithGuild[8]).t.OqlmU6, obj3)}
        </View>
      );
    };
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/UnreadSubtitle.tsx");

export default tmp3;
