// discord_app/modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import TrophyIcon2 from "../../../../design/components/Icon/native/redesign/generated/TrophyIcon.tsx";
import useActiveLeaderboardWinnerDataDefault from "../useActiveLeaderboardWinnerData.tsx";
import GuildLeaderboardUtils from "../GuildLeaderboardUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ container: { marginLeft: 4 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let guildId;
      let userId;
      const obj = react2;
      const cResult = obj.c(6);
      ({ guildId, userId } = arg0);
      const tmp4 = closure_5();
      const tmp6 = useActiveLeaderboardWinnerDataDefault(guildId, userId);
      if (null == tmp6) {
        return null;
      } else {
        let tmp7;
        let tmp10;
        const container = tmp4.container;
        if (cResult[0] !== tmp6) {
          const tmpResult = GuildLeaderboardUtils;
          const leaderboardWinnerBadgeText = tmpResult.getLeaderboardWinnerBadgeText(tmp6);
          cResult[0] = tmp6;
          cResult[1] = leaderboardWinnerBadgeText;
          tmp7 = leaderboardWinnerBadgeText;
        } else {
          tmp7 = cResult[1];
        }
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const TrophyIcon = TrophyIcon2.TrophyIcon;
          const tmp12 = <TrophyIcon size="xs" color={nativeDefault.colors.TEXT_FEEDBACK_WARNING} />;
          cResult[2] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[2];
        }
        if (cResult[3] === tmp4.container) {
          let tmp13;
          if (cResult[4] === tmp7) {
            tmp13 = cResult[5];
          }
          return tmp13;
        }
        const tmp16 = (
          <View style={container} accessible accessibilityLabel={tmp7}>
            {tmp10}
          </View>
        );
        cResult[3] = tmp4.container;
        cResult[4] = tmp7;
        cResult[5] = tmp16;
        tmp13 = tmp16;
      }
    }
  : (arg0) => {
      let guildId;
      let userId;
      ({ guildId, userId } = arg0);
      const tmp = closure_5();
      const tmp4 = useActiveLeaderboardWinnerDataDefault(guildId, userId);
      let tmp5 = null;
      if (null != tmp4) {
        const obj2 = GuildLeaderboardUtils;
        ({ size: "xs", color: nativeDefault.colors.TEXT_FEEDBACK_WARNING });
        const TrophyIcon = TrophyIcon2.TrophyIcon;
        tmp5 = (
          <View style={tmp.container} accessible accessibilityLabel={obj2.getLeaderboardWinnerBadgeText(tmp4)}>
            {null}
          </View>
        );
      }
      return tmp5;
    };
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx");

export default tmp3;
