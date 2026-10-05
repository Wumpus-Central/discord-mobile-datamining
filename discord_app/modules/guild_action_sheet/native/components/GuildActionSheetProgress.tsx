// === Module 13790: GuildActionSheetProgress ===

// Module 13790 (GuildActionSheetProgress)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import GuildProgressUtils from "GuildProgressUtils" /* 12130 */;
import GuildProgressOverviewDefault from "GuildProgressOverview" /* 13791 */;
import noop from "module_19" /* 19 */;

const Card2 = Card(5995);
require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { title: { color: nativeDefault.colors.TEXT_DEFAULT }, cardStyle: { padding: 0 } };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { color: nativeDefault.colors.TEXT_DEFAULT };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetProgress.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guild) => {
  let Card = require;
  let tmp = dependencyMap;
  const cResult = c.c(6);
  guild = guild.guild;
  let cardStyle = closure_4();
  const iOSCompletionStates = GuildProgressUtils.useIOSCompletionStates(guild);
  ({ completed, dismissed } = iOSCompletionStates);
  let tmp4 = null;
  if (obj3.useIsEligibleForGuildProgress(guild)) {
    tmp4 = null;
    if (!completed) {
      tmp4 = null;
      if (dismissed) {
        if (cResult[0] === guild) {
          if (cResult[1] === cardStyle.title) {
            let tmp5 = cResult[2];
          }
          if (cResult[3] === cardStyle.cardStyle) {
          }
          Card = Card2.Card;
          const obj4 = { style: cardStyle.cardStyle, children: tmp5 };
          tmp = <Card style={cardStyle.cardStyle}>{tmp5}</Card>;
          cardStyle = cardStyle.cardStyle;
          cResult[3] = cardStyle;
          cResult[4] = tmp5;
          cResult[5] = tmp;
        }
        const obj5 = { guild, titleStyle: cardStyle.title, longPressDisabled: true, resume: true };
        const tmp8 = jsx(GuildProgressOverviewDefault, { guild, titleStyle: cardStyle.title, longPressDisabled: true, resume: true });
        cResult[0] = guild;
        cResult[1] = cardStyle.title;
        cResult[2] = tmp8;
        tmp5 = tmp8;
      }
    }
  }
  return tmp4;
}) : ((guild) => {
  guild = guild.guild;
  const tmp = closure_4();
  const iOSCompletionStates = GuildProgressUtils.useIOSCompletionStates(guild);
  ({ completed, dismissed } = iOSCompletionStates);
  let tmp5 = null;
  if (obj2.useIsEligibleForGuildProgress(guild)) {
    tmp5 = null;
    if (!completed) {
      tmp5 = null;
      if (dismissed) {
        const obj3 = { style: tmp.cardStyle, children: null };
        const obj4 = { guild, titleStyle: tmp.title, longPressDisabled: true, resume: true };
        obj3.children = jsx(GuildProgressOverviewDefault, { guild, titleStyle: tmp.title, longPressDisabled: true, resume: true });
        tmp5 = jsx(Card2.Card, { style: tmp.cardStyle, children: null });
      }
    }
  }
  return tmp5;
});