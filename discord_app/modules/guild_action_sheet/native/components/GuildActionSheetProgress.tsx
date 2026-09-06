// === Module 13974: GuildActionSheetProgress ===

// Module 13974 (GuildActionSheetProgress)
import nativeDefault from "native" /* 576 */;
import Card from "Card" /* 5607 */;
import GuildProgressUtils from "GuildProgressUtils" /* 12474 */;
import GuildProgressOverviewDefault from "GuildProgressOverview" /* 13975 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { title: null, cardStyle: null };
createStyles = { color: nativeDefault.colors.TEXT_DEFAULT };
createStyles.title = createStyles;
createStyles.cardStyle = { marginHorizontal: nativeDefault.space.PX_16, padding: 0, marginBottom: nativeDefault.space.PX_24 };
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetProgress.tsx");

export default function GuildActionSheetProgress(guild) {
  guild = guild.guild;
  const tmp = closure_4();
  let obj = GuildProgressUtils;
  const iOSCompletionStates = obj.useIOSCompletionStates(guild);
  ({ completed, dismissed } = iOSCompletionStates);
  let tmp5 = null;
  if (obj2.useIsEligibleForGuildProgress(guild)) {
    tmp5 = null;
    if (!completed) {
      tmp5 = null;
      if (dismissed) {
        obj = { style: tmp.cardStyle, children: null };
        obj = { guild, titleStyle: tmp.title, longPressDisabled: true, resume: true };
        obj.children = jsx(GuildProgressOverviewDefault, { guild, titleStyle: tmp.title, longPressDisabled: true, resume: true });
        tmp5 = jsx(Card.Card, { guild, titleStyle: tmp.title, longPressDisabled: true, resume: true });
      }
    }
  }
  return tmp5;
};