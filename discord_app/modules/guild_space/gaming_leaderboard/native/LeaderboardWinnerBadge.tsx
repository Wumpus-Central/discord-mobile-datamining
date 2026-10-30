// discord_app/modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx
import useActiveLeaderboardWinnerData from "../useActiveLeaderboardWinnerData.tsx";
import GuildLeaderboardUtils from "../GuildLeaderboardUtils.tsx";
import MedalFirstBadge from "../../../../design/components/mana-assets/native/generated/MedalFirstBadge.native.tsx";
import StreakTrophyBadge from "../../../../design/components/mana-assets/native/generated/StreakTrophyBadge.native.tsx";
import WinnerTrophyBadge2 from "../../../../design/components/mana-assets/native/generated/WinnerTrophyBadge.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const useActiveLeaderboardWinnerDataDefault = useActiveLeaderboardWinnerData;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let closure_5 = createStyles.createStyles({ container: { marginLeft: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx");

export default function LeaderboardWinnerBadge(arg0) {
  ({ guildId, userId } = arg0);
  const tmp = closure_5();
  const tmp3 = useActiveLeaderboardWinnerDataDefault(guildId, userId);
  const activeLeaderboardLeaderData = useActiveLeaderboardWinnerData.useActiveLeaderboardLeaderData(guildId, userId);
  if (null == tmp3) {
    let tmp8 = null;
    if (null != activeLeaderboardLeaderData) {
      const obj2 = {
        style: tmp.container,
        accessible: true,
        accessibilityLabel: GuildLeaderboardUtils.getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData),
        children: jsx(MedalFirstBadge.MedalFirstBadge, { width: 16, height: 16 }),
      };
      tmp8 = (
        <View
          style={tmp.container}
          accessible
          accessibilityLabel={GuildLeaderboardUtils.getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData)}
        >
          {jsx(MedalFirstBadge.MedalFirstBadge, { width: 16, height: 16 })}
        </View>
      );
      const tmp4Result = GuildLeaderboardUtils;
    }
    return tmp8;
  } else {
    let num = tmp3.winningStreak;
    if (num == null) {
      num = 0;
    }
    if (num > 1) {
      let WinnerTrophyBadge = StreakTrophyBadge.StreakTrophyBadge;
    } else {
      WinnerTrophyBadge = WinnerTrophyBadge2.WinnerTrophyBadge;
    }
    const obj3 = {
      style: tmp.container,
      accessible: true,
      accessibilityLabel: GuildLeaderboardUtils.getLeaderboardWinnerBadgeText(tmp3),
      children: <WinnerTrophyBadge width={16} height={16} />,
    };
    return (
      <View
        style={tmp.container}
        accessible
        accessibilityLabel={GuildLeaderboardUtils.getLeaderboardWinnerBadgeText(tmp3)}
      >
        <WinnerTrophyBadge width={16} height={16} />
      </View>
    );
  }
}
