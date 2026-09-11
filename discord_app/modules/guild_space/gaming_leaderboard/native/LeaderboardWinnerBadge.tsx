// === Module 10997: LeaderboardWinnerBadge ===

// Module 10997 (LeaderboardWinnerBadge)
import noop from "module_19" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4606);
let closure_6 = createStyles.createStyles({ container: { marginLeft: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx");

export default function LeaderboardWinnerBadge(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  let obj = guildId(504);
  const items = [GuildMemberStore];
  const items1 = [guildId, userId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const member = GuildMemberStore.getMember(guildId, userId);
    let prop;
    if (member != null) {
      prop = member.gamingLeaderboardData;
    }
    return prop;
  }, items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    obj = { style: tmp.container, accessible: true, accessibilityLabel: tmp2(10998).getLeaderboardWinnerBadgeText(stateFromStores), children: null };
    obj = { size: "xs", color: userId(576).colors.TEXT_FEEDBACK_WARNING };
    obj.children = jsx(tmp2(8808).TrophyIcon, { size: "xs", color: userId(576).colors.TEXT_FEEDBACK_WARNING });
    tmp5 = <View size="xs" color={userId(576).colors.TEXT_FEEDBACK_WARNING} />;
    const tmp2Result = tmp2(10998);
  }
  return tmp5;
};