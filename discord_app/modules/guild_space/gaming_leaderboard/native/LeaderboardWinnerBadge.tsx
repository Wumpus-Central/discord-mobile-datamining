// === Module 11242: LeaderboardWinnerBadge ===

// Module 11242 (LeaderboardWinnerBadge)
import canUseGuildSpace from "canUseGuildSpace" /* 7459 */;
import useActiveLeaderboardWinnerDataDefault from "useActiveLeaderboardWinnerData" /* 11243 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4788 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4917);
let closure_6 = createStyles.createStyles({ container: { marginLeft: 4 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx");

export default function LeaderboardWinnerBadge(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const tmp = closure_6();
  items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(items, () => {
    guild = GuildStore.getGuild(guildId);
    let result = null != guild;
    if (result) {
      result = canUseGuildSpace.isGuildSpaceVisibleToMembers(guild);
    }
    return result;
  }, items1);
  const tmp5 = useActiveLeaderboardWinnerDataDefault(guildId, userId);
  let obj = guildId(504);
  const activeLeaderboardLeaderData = guildId(11243).useActiveLeaderboardLeaderData(guildId, userId);
  if (stateFromStores) {
    if (null == tmp5) {
      let tmp9 = null;
      if (null != activeLeaderboardLeaderData) {
        const obj3 = { style: tmp.container, accessible: true, accessibilityLabel: tmp2(11244).getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData), children: jsx(tmp2(11246).MedalFirstBadge, { width: 16, height: 16 }) };
        tmp9 = <View style={tmp.container} accessible accessibilityLabel={tmp2(11244).getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData)}>{jsx(tmp2(11246).MedalFirstBadge, { width: 16, height: 16 })}</View>;
        const tmp2Result = tmp2(11244);
      }
      return tmp9;
    } else {
      let num = tmp5.winningStreak;
      if (num == null) {
        num = 0;
      }
      if (num > 1) {
        let WinnerTrophyBadge = tmp2(11250).StreakTrophyBadge;
      } else {
        WinnerTrophyBadge = tmp2(11254).WinnerTrophyBadge;
      }
      const obj4 = { style: tmp.container, accessible: true, accessibilityLabel: tmp2(11244).getLeaderboardWinnerBadgeText(tmp5), children: <WinnerTrophyBadge width={16} height={16} /> };
      return <View style={tmp.container} accessible accessibilityLabel={tmp2(11244).getLeaderboardWinnerBadgeText(tmp5)}><WinnerTrophyBadge width={16} height={16} /></View>;
    }
  } else {
    return null;
  }
  const obj2 = guildId(11243);
};