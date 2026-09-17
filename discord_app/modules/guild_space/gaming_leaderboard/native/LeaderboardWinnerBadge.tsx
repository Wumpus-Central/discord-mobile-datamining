// discord_app/modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../../stores/GuildMemberStore.tsx";

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let closure_6 = createStyles.createStyles({ container: { marginLeft: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_space/gaming_leaderboard/native/LeaderboardWinnerBadge.tsx");

export default function LeaderboardWinnerBadge(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const tmp = closure_6();
  const items = [GuildMemberStore];
  const items1 = [guildId, userId];
  const stateFromStores = guildId(504).useStateFromStores(
    items,
    () => {
      const member = GuildMemberStore.getMember(guildId, userId);
      let prop;
      if (member != null) {
        prop = member.gamingLeaderboardData;
      }
      return prop;
    },
    items1,
  );
  let tmp5 = null;
  if (null != stateFromStores) {
    const obj2 = {
      style: tmp.container,
      accessible: true,
      accessibilityLabel: tmp2(11063).getLeaderboardWinnerBadgeText(stateFromStores),
      children: null,
    };
    const obj3 = { size: "xs", color: userId(576).colors.TEXT_FEEDBACK_WARNING };
    obj2.children = jsx(tmp2(8867).TrophyIcon, { size: "xs", color: userId(576).colors.TEXT_FEEDBACK_WARNING });
    tmp5 = (
      <View
        style={tmp.container}
        accessible
        accessibilityLabel={tmp2(11063).getLeaderboardWinnerBadgeText(stateFromStores)}
      >
        {null}
      </View>
    );
    const tmp2Result = tmp2(11063);
  }
  return tmp5;
}
