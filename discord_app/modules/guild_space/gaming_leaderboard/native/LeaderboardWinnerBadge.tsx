// === Module 10271: LeaderboardWinnerBadge ===

// Module 10271 (LeaderboardWinnerBadge)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import TrophyIcon from "TrophyIcon" /* 8925 */;
import useActiveLeaderboardWinnerData from "useActiveLeaderboardWinnerData" /* 10272 */;
import GuildLeaderboardUtils from "GuildLeaderboardUtils" /* 10273 */;
import MedalIcon from "MedalIcon" /* 10275 */;
import noop from "module_19" /* 19 */;

const useActiveLeaderboardWinnerDataDefault = useActiveLeaderboardWinnerData;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_5 = createStyles.createStyles({ container: { marginLeft: 4 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function LeaderboardWinnerBadge(arg0) {
  const cResult = c.c(12);
  ({ guildId, userId } = arg0);
  const tmp4 = closure_5();
  const tmp6 = useActiveLeaderboardWinnerDataDefault(guildId, userId);
  const activeLeaderboardLeaderData = useActiveLeaderboardWinnerData.useActiveLeaderboardLeaderData(guildId, userId);
  if (null == tmp6) {
    if (null == activeLeaderboardLeaderData) {
      return null;
    } else {
      if (cResult[0] !== activeLeaderboardLeaderData) {
        const leaderboardLeaderBadgeText = GuildLeaderboardUtils.getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData);
        cResult[0] = activeLeaderboardLeaderData;
        cResult[1] = leaderboardLeaderBadgeText;
        let tmp18 = leaderboardLeaderBadgeText;
        const tmpResult = GuildLeaderboardUtils;
      } else {
        tmp18 = cResult[1];
      }
      const _Symbol2 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
        const tmp23 = jsx(MedalIcon.MedalIcon, { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING });
        cResult[2] = tmp23;
        let tmp21 = tmp23;
      } else {
        tmp21 = cResult[2];
      }
      if (cResult[3] === tmp4.container) {
        if (cResult[4] === tmp18) {
          let tmp24 = cResult[5];
        }
        return tmp24;
      }
      const obj4 = { style: tmp4.container, accessible: true, accessibilityLabel: tmp18, children: tmp21 };
      const tmp27 = <View style={tmp4.container} accessible accessibilityLabel={tmp18}>{tmp21}</View>;
      cResult[3] = tmp4.container;
      cResult[4] = tmp18;
      cResult[5] = tmp27;
      tmp24 = tmp27;
    }
  } else {
    if (cResult[6] !== tmp6) {
      const leaderboardWinnerBadgeText = GuildLeaderboardUtils.getLeaderboardWinnerBadgeText(tmp6);
      cResult[6] = tmp6;
      cResult[7] = leaderboardWinnerBadgeText;
      let tmp8 = leaderboardWinnerBadgeText;
      const tmpResult2 = GuildLeaderboardUtils;
    } else {
      tmp8 = cResult[7];
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const obj5 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
      const tmp13 = jsx(TrophyIcon.TrophyIcon, { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING });
      cResult[8] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[8];
    }
    if (cResult[9] === tmp4.container) {
      if (cResult[10] === tmp8) {
        let tmp14 = cResult[11];
      }
      return tmp14;
    }
    const obj6 = { style: tmp4.container, accessible: true, accessibilityLabel: tmp8, children: tmp11 };
    const tmp17 = <View style={tmp4.container} accessible accessibilityLabel={tmp8}>{tmp11}</View>;
    cResult[9] = tmp4.container;
    cResult[10] = tmp8;
    cResult[11] = tmp17;
    tmp14 = tmp17;
  }
}) : (function LeaderboardWinnerBadge(arg0) {
  ({ guildId, userId } = arg0);
  const tmp = closure_5();
  const tmp4 = useActiveLeaderboardWinnerDataDefault(guildId, userId);
  const activeLeaderboardLeaderData = useActiveLeaderboardWinnerData.useActiveLeaderboardLeaderData(guildId, userId);
  if (null == tmp4) {
    let tmp7 = null;
    if (null != activeLeaderboardLeaderData) {
      const obj2 = { style: tmp.container, accessible: true, accessibilityLabel: GuildLeaderboardUtils.getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData), children: null };
      const obj3 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
      obj2.children = jsx(MedalIcon.MedalIcon, { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING });
      tmp7 = <View style={tmp.container} accessible accessibilityLabel={GuildLeaderboardUtils.getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData)}>{null}</View>;
      const tmp5Result = GuildLeaderboardUtils;
    }
    let tmp10 = tmp7;
  } else {
    const obj4 = { style: tmp.container, accessible: true, accessibilityLabel: GuildLeaderboardUtils.getLeaderboardWinnerBadgeText(tmp4), children: null };
    const obj5 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
    obj4.children = jsx(TrophyIcon.TrophyIcon, { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING });
    tmp10 = <View style={tmp.container} accessible accessibilityLabel={GuildLeaderboardUtils.getLeaderboardWinnerBadgeText(tmp4)}>{null}</View>;
    const tmp5Result2 = GuildLeaderboardUtils;
  }
  return tmp10;
});