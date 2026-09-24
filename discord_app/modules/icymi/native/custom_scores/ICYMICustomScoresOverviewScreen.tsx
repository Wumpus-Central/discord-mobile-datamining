// discord_app/modules/icymi/native/custom_scores/ICYMICustomScoresOverviewScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";
import SortedGuildStore from "../../../../stores/SortedGuildStore.tsx";
import ICYMIStore from "../../ICYMIStore.tsx";

const require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let obj2 = {
  container: {
    flex: 1,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    paddingHorizontal: nativeDefault.space.PX_12,
  },
};
let closure_9 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresOverviewScreen.tsx");

export default function ICYMICustomScoresOverviewScreen(navigation) {
  navigation = navigation.navigation;
  let stateFromStores1;
  const items = [GuildStore];
  const stateFromStores = navigation(stateFromStores1[8]).useStateFromStores(items, () => guilds.getGuilds());
  let obj = navigation(stateFromStores1[8]);
  const items1 = [SortedGuildStore];
  stateFromStores1 = navigation(stateFromStores1[8]).useStateFromStores(items1, () =>
    flattenedGuildIds.getFlattenedGuildIds(),
  );
  const obj2 = navigation(stateFromStores1[8]);
  const items2 = [ICYMIStore];
  noop = navigation(stateFromStores1[8]).useStateFromStores(items2, () => customGuildScores.getCustomGuildScores());
  const items3 = [stateFromStores1, stateFromStores];
  const memo = noop.useMemo(() => stateFromStores1.map((item) => stateFromStores[item]), items3);
  let obj3 = navigation(stateFromStores1[8]);
  const items4 = [navigation];
  closure_4 = noop.useCallback((guildId) => navigation.navigate("guild", { guildId }), items4);
  const obj4 = {
    showsVerticalScrollIndicator: false,
    style: closure_9().container,
    contentInset: null,
    children: null,
  };
  const rect = {
    bottom: stateFromStores(stateFromStores1[9])().bottom,
    top: stateFromStores(stateFromStores1[7]).space.PX_12,
  };
  obj4.contentInset = rect;
  const tmp3 = closure_9();
  obj4.children = jsx(navigation(stateFromStores1[10]).TableRowGroup, {
    hasIcons: true,
    children: memo.map((guild) => {
      const obj = {
        onPress() {
          return closure_4(guild.id);
        },
        icon: jsx(stateFromStores(stateFromStores1[12]), { guild }),
        label: guild.name,
        trailing: null,
        arrow: true,
      };
      let tmpResult;
      if (null != closure_3[guild.id]) {
        const tmp2Result = navigation(stateFromStores1[13]);
        if (numberToCustomScoreResult === navigation(stateFromStores1[13]).ICYMICustomScore.MUTED) {
          const obj3 = { text: null };
          const intl = navigation(stateFromStores1[14]).intl;
          obj3.text = intl.string(navigation(stateFromStores1[14]).t.lhPHmz);
          tmpResult = jsx(navigation(stateFromStores1[11]).TableRow.TrailingText, { text: null });
        }
        numberToCustomScoreResult = navigation(stateFromStores1[13]).numberToCustomScore(tmp4[guild.id]);
      }
      obj.trailing = tmpResult;
      return jsx(
        navigation(stateFromStores1[11]).TableRow,
        {
          onPress() {
            return closure_4(guild.id);
          },
          icon: jsx(stateFromStores(stateFromStores1[12]), { guild }),
          label: guild.name,
          trailing: null,
          arrow: true,
        },
        guild.id,
      );
    }),
  });
  return (
    <closure_4 showsVerticalScrollIndicator={false} style={closure_9().container} contentInset={null}>
      {null}
    </closure_4>
  );
}
