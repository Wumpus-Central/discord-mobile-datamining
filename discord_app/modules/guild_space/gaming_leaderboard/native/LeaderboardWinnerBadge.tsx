// discord_app/modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx
import canUseGuildSpace from "../../canUseGuildSpace.tsx";
import useActiveLeaderboardWinnerDataDefault from "../useActiveLeaderboardWinnerData.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5043);
let closure_6 = createStyles.createStyles({ container: { marginLeft: 4 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx");

export default function LeaderboardWinnerBadge(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const tmp = closure_6();
  items = [GuildStore];
  const items1 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(
    items,
    () => {
      guild = GuildStore.getGuild(guildId);
      let result = null != guild;
      if (result) {
        result = canUseGuildSpace.isGuildSpaceVisibleToMembers(guild);
      }
      return result;
    },
    items1,
  );
  const tmp5 = useActiveLeaderboardWinnerDataDefault(guildId, userId);
  let obj = guildId(504);
  const activeLeaderboardLeaderData = guildId(11389).useActiveLeaderboardLeaderData(guildId, userId);
  if (stateFromStores) {
    if (null == tmp5) {
      let tmp9 = null;
      if (null != activeLeaderboardLeaderData) {
        const obj3 = {
          style: tmp.container,
          accessible: true,
          accessibilityLabel: tmp2(11390).getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData),
          children: jsx(tmp2(11392).MedalFirstBadge, { width: 16, height: 16 }),
        };
        tmp9 = (
          <View
            style={tmp.container}
            accessible
            accessibilityLabel={tmp2(11390).getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData)}
          >
            {jsx(tmp2(11392).MedalFirstBadge, { width: 16, height: 16 })}
          </View>
        );
        const tmp2Result = tmp2(11390);
      }
      return tmp9;
    } else {
      let num = tmp5.winningStreak;
      if (num == null) {
        num = 0;
      }
      if (num > 1) {
        let WinnerTrophyBadge = tmp2(11396).StreakTrophyBadge;
      } else {
        WinnerTrophyBadge = tmp2(11400).WinnerTrophyBadge;
      }
      const obj4 = {
        style: tmp.container,
        accessible: true,
        accessibilityLabel: tmp2(11390).getLeaderboardWinnerBadgeText(tmp5),
        children: <WinnerTrophyBadge width={16} height={16} />,
      };
      return (
        <View style={tmp.container} accessible accessibilityLabel={tmp2(11390).getLeaderboardWinnerBadgeText(tmp5)}>
          <WinnerTrophyBadge width={16} height={16} />
        </View>
      );
    }
  } else {
    return null;
  }
  const obj2 = guildId(11389);
}
