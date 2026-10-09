// === Module 10240: LeaderboardWinnerBadge ===

// Module 10240 (LeaderboardWinnerBadge)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import TrophyIcon from "TrophyIcon" /* 8906 */;
import useActiveLeaderboardWinnerDataDefault from "useActiveLeaderboardWinnerData" /* 10241 */;
import GuildLeaderboardUtils from "GuildLeaderboardUtils" /* 10242 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let closure_5 = createStyles.createStyles({ container: { marginLeft: 4 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function LeaderboardWinnerBadge(arg0) {
  const cResult = c.c(6);
  ({ guildId, userId } = arg0);
  const tmp4 = closure_5();
  const tmp6 = useActiveLeaderboardWinnerDataDefault(guildId, userId);
  if (null == tmp6) {
    return null;
  } else {
    if (cResult[0] !== tmp6) {
      const leaderboardWinnerBadgeText = GuildLeaderboardUtils.getLeaderboardWinnerBadgeText(tmp6);
      cResult[0] = tmp6;
      cResult[1] = leaderboardWinnerBadgeText;
      let tmp7 = leaderboardWinnerBadgeText;
      const tmpResult = GuildLeaderboardUtils;
    } else {
      tmp7 = cResult[1];
    }
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
      const tmp12 = jsx(TrophyIcon.TrophyIcon, { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING });
      cResult[2] = tmp12;
      let tmp10 = tmp12;
    } else {
      tmp10 = cResult[2];
    }
    if (cResult[3] === tmp4.container) {
      if (cResult[4] === tmp7) {
        let tmp13 = cResult[5];
      }
      return tmp13;
    }
    const obj3 = { style: tmp4.container, accessible: true, accessibilityLabel: tmp7, children: tmp10 };
    const tmp16 = <View style={tmp4.container} accessible accessibilityLabel={tmp7}>{tmp10}</View>;
    cResult[3] = tmp4.container;
    cResult[4] = tmp7;
    cResult[5] = tmp16;
    tmp13 = tmp16;
  }
}) : (function LeaderboardWinnerBadge(arg0) {
  ({ guildId, userId } = arg0);
  const tmp4 = useActiveLeaderboardWinnerDataDefault(guildId, userId);
  let tmp5 = null;
  if (null != tmp4) {
    const obj = { style: tmp.container, accessible: true, accessibilityLabel: GuildLeaderboardUtils.getLeaderboardWinnerBadgeText(tmp4), children: null };
    const obj3 = { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING };
    obj.children = jsx(TrophyIcon.TrophyIcon, { size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING });
    tmp5 = <View style={tmp.container} accessible accessibilityLabel={GuildLeaderboardUtils.getLeaderboardWinnerBadgeText(tmp4)}>{null}</View>;
  }
  return tmp5;
});