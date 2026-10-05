// discord_app/modules/guild_action_sheet/native/components/GuildActionSheetProgress.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Card_Card from "../../../../design/components/Card/native/Card.native.tsx";
import GuildProgressUtils from "../../../guild_progress/native/GuildProgressUtils.tsx";
import GuildProgressOverviewDefault from "../../../guild_progress/native/components/GuildProgressOverview.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let guild;

let obj2;
const jsx = Fragment.jsx;
let obj = { title: obj2, cardStyle: { padding: 0 } };
obj2 = { color: nativeDefault.colors.TEXT_DEFAULT };
let closure_4 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guild) => {
      let completed;
      let dismissed;
      const obj = react2;
      const cResult = obj.c(6);
      guild = guild.guild;
      const tmp4 = closure_4();
      const obj2 = GuildProgressUtils;
      const iOSCompletionStates = obj2.useIOSCompletionStates(guild);
      ({ completed, dismissed } = iOSCompletionStates);
      let tmp6 = null;
      const obj3 = GuildProgressUtils;
      if (obj3.useIsEligibleForGuildProgress(guild)) {
        tmp6 = null;
        if (!completed) {
          tmp6 = null;
          if (dismissed) {
            if (cResult[0] === guild) {
              let tmp7;
              if (cResult[1] === tmp4.title) {
                tmp7 = cResult[2];
              }
              if (cResult[3] === tmp4.cardStyle) {
                let tmp11;
                if (cResult[4] === tmp7) {
                  tmp11 = cResult[5];
                }
                tmp6 = tmp11;
              }
              const tmp13 = jsx(Card_Card.Card, { style: tmp4.cardStyle, children: tmp7 });
              cResult[3] = tmp4.cardStyle;
              cResult[4] = tmp7;
              cResult[5] = tmp13;
              tmp11 = tmp13;
            }
            const tmp10 = jsx(GuildProgressOverviewDefault, {
              guild,
              titleStyle: tmp4.title,
              longPressDisabled: true,
              resume: true,
            });
            cResult[0] = guild;
            cResult[1] = tmp4.title;
            cResult[2] = tmp10;
            tmp7 = tmp10;
          }
        }
      }
      return tmp6;
    }
  : (guild) => {
      let completed;
      let dismissed;
      guild = guild.guild;
      const tmp = closure_4();
      const obj = GuildProgressUtils;
      const iOSCompletionStates = obj.useIOSCompletionStates(guild);
      ({ completed, dismissed } = iOSCompletionStates);
      let tmp5 = null;
      const obj2 = GuildProgressUtils;
      if (obj2.useIsEligibleForGuildProgress(guild)) {
        tmp5 = null;
        if (!completed) {
          tmp5 = null;
          if (dismissed) {
            const Card = Card_Card.Card;
            tmp5 = <Card style={tmp.cardStyle}>{null}</Card>;
          }
        }
      }
      return tmp5;
    };
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetProgress.tsx");

export default tmp3;
