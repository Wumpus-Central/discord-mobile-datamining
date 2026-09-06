// === Module 16456: ICYMICustomScoresOverviewScreen ===

// Module 16456 (ICYMICustomScoresOverviewScreen)
import nativeDefault from "native" /* 576 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;
import ICYMIStore from "ICYMIStore" /* 8335 */;

const require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_12 };
createStyles.container = createStyles;
let closure_9 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresOverviewScreen.tsx");

export default function ICYMICustomScoresOverviewScreen(navigation) {
  navigation = navigation.navigation;
  let stateFromStores1;
  let obj = navigation(stateFromStores1[8]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => guilds.getGuilds());
  const items1 = [SortedGuildStore];
  stateFromStores1 = navigation(stateFromStores1[8]).useStateFromStores(items1, () => flattenedGuildIds.getFlattenedGuildIds());
  const obj2 = navigation(stateFromStores1[8]);
  const items2 = [ICYMIStore];
  noop = navigation(stateFromStores1[8]).useStateFromStores(items2, () => customGuildScores.getCustomGuildScores());
  const items3 = [stateFromStores1, stateFromStores];
  const memo = noop.useMemo(() => stateFromStores1.map((item) => stateFromStores[item]), items3);
  const obj3 = navigation(stateFromStores1[8]);
  const items4 = [navigation];
  closure_4 = noop.useCallback((guildId) => navigation.navigate("guild", { guildId }), items4);
  obj = { showsVerticalScrollIndicator: false, style: closure_9().container, contentInset: null, children: null };
  const rect = { bottom: stateFromStores(stateFromStores1[9])().bottom, top: stateFromStores(stateFromStores1[7]).space.PX_12 };
  obj.contentInset = rect;
  obj = {
    hasIcons: true,
    children: memo.map((guild) => {
      let obj = {
        onPress() {
          return closure_4(guild.id);
        },
        icon: null,
        label: null,
        trailing: null,
        arrow: true
      };
      obj = { guild };
      obj.icon = jsx(stateFromStores(stateFromStores1[12]), { guild });
      obj.label = guild.name;
      let tmpResult;
      if (null != closure_3[guild.id]) {
        const tmp2Result = navigation(stateFromStores1[13]);
        if (numberToCustomScoreResult === navigation(stateFromStores1[13]).ICYMICustomScore.MUTED) {
          obj = { text: null };
          const intl = navigation(stateFromStores1[14]).intl;
          obj.text = intl.string(navigation(stateFromStores1[14]).t.lhPHmz);
          tmpResult = jsx(navigation(stateFromStores1[11]).TableRow.TrailingText, { text: null });
        }
        numberToCustomScoreResult = navigation(stateFromStores1[13]).numberToCustomScore(tmp4[guild.id]);
      }
      obj.trailing = tmpResult;
      return jsx(navigation(stateFromStores1[11]).TableRow, { guild }, guild.id);
    })
  };
  obj.children = jsx(navigation(stateFromStores1[10]).TableRowGroup, {
    hasIcons: true,
    children: memo.map((guild) => {
      let obj = {
        onPress() {
          return closure_4(guild.id);
        },
        icon: null,
        label: null,
        trailing: null,
        arrow: true
      };
      obj = { guild };
      obj.icon = jsx(stateFromStores(stateFromStores1[12]), { guild });
      obj.label = guild.name;
      let tmpResult;
      if (null != closure_3[guild.id]) {
        const tmp2Result = navigation(stateFromStores1[13]);
        if (numberToCustomScoreResult === navigation(stateFromStores1[13]).ICYMICustomScore.MUTED) {
          obj = { text: null };
          const intl = navigation(stateFromStores1[14]).intl;
          obj.text = intl.string(navigation(stateFromStores1[14]).t.lhPHmz);
          tmpResult = jsx(navigation(stateFromStores1[11]).TableRow.TrailingText, { text: null });
        }
        numberToCustomScoreResult = navigation(stateFromStores1[13]).numberToCustomScore(tmp4[guild.id]);
      }
      obj.trailing = tmpResult;
      return jsx(navigation(stateFromStores1[11]).TableRow, { guild }, guild.id);
    })
  });
  return <closure_4 hasIcons>{memo.map((guild) => {
    let obj = {
      onPress() {
        return closure_4(guild.id);
      },
      icon: null,
      label: null,
      trailing: null,
      arrow: true
    };
    obj = { guild };
    obj.icon = jsx(stateFromStores(stateFromStores1[12]), { guild });
    obj.label = guild.name;
    let tmpResult;
    if (null != closure_3[guild.id]) {
      const tmp2Result = navigation(stateFromStores1[13]);
      if (numberToCustomScoreResult === navigation(stateFromStores1[13]).ICYMICustomScore.MUTED) {
        obj = { text: null };
        const intl = navigation(stateFromStores1[14]).intl;
        obj.text = intl.string(navigation(stateFromStores1[14]).t.lhPHmz);
        tmpResult = jsx(navigation(stateFromStores1[11]).TableRow.TrailingText, { text: null });
      }
      numberToCustomScoreResult = navigation(stateFromStores1[13]).numberToCustomScore(tmp4[guild.id]);
    }
    obj.trailing = tmpResult;
    return jsx(navigation(stateFromStores1[11]).TableRow, { guild }, guild.id);
  })}</closure_4>;
};