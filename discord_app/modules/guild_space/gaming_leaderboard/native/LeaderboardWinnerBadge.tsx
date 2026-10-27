// discord_app/modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx
import c from "../../../../../_runtime/00576_c.js";
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
let c5 = 16;
const createStyles = fn(4972);
let closure_6 = createStyles.createStyles({ container: { marginLeft: 4 } });
const ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function LeaderboardWinnerBadge(arg0) {
      const cResult = c.c(14);
      ({ guildId, userId } = arg0);
      const tmp4 = closure_6();
      const tmp5 = useActiveLeaderboardWinnerDataDefault(guildId, userId);
      const activeLeaderboardLeaderData = useActiveLeaderboardWinnerData.useActiveLeaderboardLeaderData(
        guildId,
        userId,
      );
      if (null == tmp5) {
        if (null == activeLeaderboardLeaderData) {
          return null;
        } else {
          if (cResult[0] !== activeLeaderboardLeaderData) {
            const leaderboardLeaderBadgeText =
              GuildLeaderboardUtils.getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData);
            cResult[0] = activeLeaderboardLeaderData;
            cResult[1] = leaderboardLeaderBadgeText;
            let tmp17 = leaderboardLeaderBadgeText;
            const tmpResult = GuildLeaderboardUtils;
          } else {
            tmp17 = cResult[1];
          }
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const size = { width: v16, height: v16 };
            const tmp23 = jsx(MedalFirstBadge.MedalFirstBadge, { width: v16, height: v16 });
            cResult[2] = tmp23;
            let tmp20 = tmp23;
          } else {
            tmp20 = cResult[2];
          }
          if (cResult[3] === tmp4.container) {
            if (cResult[4] === tmp17) {
              let tmp24 = cResult[5];
            }
            return tmp24;
          }
          const obj3 = { style: tmp4.container, accessible: true, accessibilityLabel: tmp17, children: tmp20 };
          const tmp27 = (
            <View style={tmp4.container} accessible accessibilityLabel={tmp17}>
              {tmp20}
            </View>
          );
          cResult[3] = tmp4.container;
          cResult[4] = tmp17;
          cResult[5] = tmp27;
          tmp24 = tmp27;
        }
      } else {
        let num = tmp5.winningStreak;
        if (num == null) {
          num = 0;
        }
        if (num > 1) {
          let WinnerTrophyBadge = StreakTrophyBadge.StreakTrophyBadge;
        } else {
          WinnerTrophyBadge = WinnerTrophyBadge2.WinnerTrophyBadge;
        }
        if (cResult[6] !== tmp5) {
          const leaderboardWinnerBadgeText = GuildLeaderboardUtils.getLeaderboardWinnerBadgeText(tmp5);
          cResult[6] = tmp5;
          cResult[7] = leaderboardWinnerBadgeText;
          let tmp7 = leaderboardWinnerBadgeText;
          const tmpResult2 = GuildLeaderboardUtils;
        } else {
          tmp7 = cResult[7];
        }
        if (cResult[8] !== WinnerTrophyBadge) {
          const size1 = { width: v16, height: v16 };
          const tmp12 = <WinnerTrophyBadge width={v16} height={v16} />;
          cResult[8] = WinnerTrophyBadge;
          cResult[9] = tmp12;
          let tmp9 = tmp12;
        } else {
          tmp9 = cResult[9];
        }
        if (cResult[10] === tmp4.container) {
          if (cResult[11] === tmp7) {
            if (cResult[12] === tmp9) {
              let tmp13 = cResult[13];
            }
            return tmp13;
          }
        }
        const obj4 = { style: tmp4.container, accessible: true, accessibilityLabel: tmp7, children: tmp9 };
        const tmp16 = (
          <View style={tmp4.container} accessible accessibilityLabel={tmp7}>
            {tmp9}
          </View>
        );
        cResult[10] = tmp4.container;
        cResult[11] = tmp7;
        cResult[12] = tmp9;
        cResult[13] = tmp16;
        tmp13 = tmp16;
      }
    }
  : function LeaderboardWinnerBadge(arg0) {
      ({ guildId, userId } = arg0);
      const tmp = closure_6();
      const tmp3 = useActiveLeaderboardWinnerDataDefault(guildId, userId);
      const activeLeaderboardLeaderData = useActiveLeaderboardWinnerData.useActiveLeaderboardLeaderData(
        guildId,
        userId,
      );
      if (null == tmp3) {
        let tmp9 = null;
        if (null != activeLeaderboardLeaderData) {
          const obj2 = {
            style: tmp.container,
            accessible: true,
            accessibilityLabel: GuildLeaderboardUtils.getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData),
            children: null,
          };
          const size = { width: v16, height: v16 };
          obj2.children = jsx(MedalFirstBadge.MedalFirstBadge, { width: v16, height: v16 });
          tmp9 = (
            <View
              style={tmp.container}
              accessible
              accessibilityLabel={GuildLeaderboardUtils.getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData)}
            >
              {null}
            </View>
          );
          const tmp4Result = GuildLeaderboardUtils;
        }
        return tmp9;
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
          children: null,
        };
        const size1 = { width: v16, height: v16 };
        obj3.children = <WinnerTrophyBadge width={v16} height={v16} />;
        return (
          <View
            style={tmp.container}
            accessible
            accessibilityLabel={GuildLeaderboardUtils.getLeaderboardWinnerBadgeText(tmp3)}
          >
            {null}
          </View>
        );
      }
    };
