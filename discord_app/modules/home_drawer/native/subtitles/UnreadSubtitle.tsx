// discord_app/modules/home_drawer/native/subtitles/UnreadSubtitle.tsx
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/subtitles/UnreadSubtitle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = subtitleStyles(576).c(16);
      ({ guild, channel, channelName, count } = arg0);
      const obj = subtitleStyles(576);
      subtitleStyles = subtitleStyles(16305).useSubtitleStyles();
      if (cResult[0] === channel) {
        if (cResult[1] === guild) {
          let tmp5 = cResult[2];
        }
        dependencyMap = tmp5;
        const diff = count - 1;
        if (cResult[3] === channelName) {
          if (cResult[4] === diff) {
            let tmp8 = cResult[5];
          }
          if (cResult[6] === tmp5) {
            if (cResult[7] === channelName) {
              if (cResult[8] === subtitleStyles.subtitleText) {
                if (cResult[9] === subtitleStyles.unreadChannelIcon) {
                  if (cResult[10] === diff) {
                    let tmp11 = cResult[11];
                  }
                  if (cResult[12] === tmp8) {
                    if (cResult[13] === subtitleStyles.subtitleRow) {
                      if (cResult[14] === tmp11) {
                        let tmp13 = cResult[15];
                      }
                      return tmp13;
                    }
                  }
                  const obj3 = { style: tmp10, accessible: true, accessibilityLabel: tmp8, children: tmp11 };
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
                subtitleStyles(4892).Text,
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
              return jsx(subtitleStyles(4892).Text, { variant: "text-xs/medium", color: "text-muted", children }, id);
            },
          };
          const formatResult = intl2.format(tmp(1126).t.OqlmU6, obj4);
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
        const formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.gxD5I6, obj5);
        cResult[3] = channelName;
        cResult[4] = diff;
        cResult[5] = formatToPlainStringResult;
        tmp8 = formatToPlainStringResult;
      }
      let channelIconComponentWithGuild;
      if (null != channel) {
        channelIconComponentWithGuild = tmp(5819).getChannelIconComponentWithGuild(channel, guild);
        const tmpResult = tmp(5819);
      }
      if (channelIconComponentWithGuild == null) {
        channelIconComponentWithGuild = tmp(5871).TextIcon;
      }
      cResult[0] = channel;
      cResult[1] = guild;
      cResult[2] = channelIconComponentWithGuild;
      tmp5 = channelIconComponentWithGuild;
      const obj2 = subtitleStyles(16305);
    }
  : (arg0) => {
      ({ channel, channelName } = arg0);
      let subtitleStyles;
      let channelIconComponentWithGuild;
      ({ guild, count } = arg0);
      subtitleStyles = subtitleStyles(channelIconComponentWithGuild[5]).useSubtitleStyles();
      channelIconComponentWithGuild = undefined;
      if (null != channel) {
        channelIconComponentWithGuild = tmp(tmp2[6]).getChannelIconComponentWithGuild(channel, guild);
        const tmpResult = tmp(tmp2[6]);
      }
      if (channelIconComponentWithGuild == null) {
        channelIconComponentWithGuild = tmp(tmp2[7]).TextIcon;
      }
      const diff = count - 1;
      const intl = tmp(tmp2[8]).intl;
      const obj2 = {
        style: subtitleStyles.subtitleRow,
        accessible: true,
        accessibilityLabel: intl.formatToPlainString(subtitleStyles(channelIconComponentWithGuild[8]).t.gxD5I6, {
          channelName,
          count: diff,
        }),
        children: null,
      };
      const intl2 = tmp(tmp2[8]).intl;
      obj2.children = intl2.format(subtitleStyles(channelIconComponentWithGuild[8]).t.OqlmU6, {
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
      });
      return (
        <View
          style={subtitleStyles.subtitleRow}
          accessible
          accessibilityLabel={intl.formatToPlainString(subtitleStyles(channelIconComponentWithGuild[8]).t.gxD5I6, {
            channelName,
            count: diff,
          })}
        >
          {null}
        </View>
      );
    };
