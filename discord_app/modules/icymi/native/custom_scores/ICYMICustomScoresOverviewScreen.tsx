// === Module 16044: ICYMICustomScoresOverviewScreen ===

// Module 16044 (ICYMICustomScoresOverviewScreen)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import closure_5 from "createGuildRecordFromRust" /* 1909 */;
import closure_6 from "insertUnsortedGuilds" /* 5381 */;
import closure_7 from "filterStaffGuild" /* 8606 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresOverviewScreen.tsx");

export default function ICYMICustomScoresOverviewScreen(navigation) {
  navigation = navigation.navigation;
  let stateFromStores;
  let stateFromStores1;
  let React;
  closure_4 = undefined;
  let obj = navigation(stateFromStores1[8]);
  const items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => guilds.getGuilds());
  obj1 = navigation(stateFromStores1[8]);
  const items1 = [closure_6];
  stateFromStores1 = obj1.useStateFromStores(items1, () => flattenedGuildIds.getFlattenedGuildIds());
  const items2 = [closure_7];
  React = navigation(stateFromStores1[8]).useStateFromStores(items2, () => customGuildScores.getCustomGuildScores());
  const items3 = [stateFromStores1, stateFromStores];
  const memo = React.useMemo(() => stateFromStores1.map((arg0) => table[arg0]), items3);
  const obj3 = navigation(stateFromStores1[8]);
  const items4 = [navigation];
  closure_4 = React.useCallback((guildId) => navigation.navigate("guild", { guildId }), items4);
  obj = { showsVerticalScrollIndicator: false, style: callback().container, contentInset: null, children: null };
  obj = { bottom: stateFromStores(stateFromStores1[9])().bottom, top: stateFromStores(stateFromStores1[7]).space.PX_12 };
  obj[2] = obj;
  obj1 = {
    hasIcons: true,
    children: memo.map((guild) => {
      closure_0 = guild;
      let obj = {
        onPress() {
          return closure_1_4(guild.id);
        },
        icon: null,
        label: null,
        trailing: null,
        arrow: true
      };
      obj = { guild };
      obj[1] = closure_1_8(stateFromStores(stateFromStores1[12]), obj);
      obj[2] = guild.name;
      let tmpResult;
      if (null != table[guild.id]) {
        const tmp2Result = tmp2(tmp3[13]);
        if (numberToCustomScoreResult === tmp2(tmp3[13]).ICYMICustomScore.MUTED) {
          obj = { text: null };
          const intl = tmp2(tmp3[14]).intl;
          obj[0] = intl.string(tmp2(tmp3[14]).t.lhPHmz);
          tmpResult = tmp(tmp2(tmp3[11]).TableRow.TrailingText, obj);
        }
        numberToCustomScoreResult = tmp2(tmp3[13]).numberToCustomScore(tmp4[guild.id]);
      }
      obj[3] = tmpResult;
      return closure_1_8(navigation(stateFromStores1[11]).TableRow, obj, guild.id);
    })
  };
  obj[3] = jsx(navigation(stateFromStores1[10]).TableRowGroup, {
    hasIcons: true,
    children: memo.map((guild) => {
      closure_0 = guild;
      let obj = {
        onPress() {
          return closure_1_4(guild.id);
        },
        icon: null,
        label: null,
        trailing: null,
        arrow: true
      };
      obj = { guild };
      obj[1] = closure_1_8(stateFromStores(stateFromStores1[12]), obj);
      obj[2] = guild.name;
      let tmpResult;
      if (null != table[guild.id]) {
        const tmp2Result = tmp2(tmp3[13]);
        if (numberToCustomScoreResult === tmp2(tmp3[13]).ICYMICustomScore.MUTED) {
          obj = { text: null };
          const intl = tmp2(tmp3[14]).intl;
          obj[0] = intl.string(tmp2(tmp3[14]).t.lhPHmz);
          tmpResult = tmp(tmp2(tmp3[11]).TableRow.TrailingText, obj);
        }
        numberToCustomScoreResult = tmp2(tmp3[13]).numberToCustomScore(tmp4[guild.id]);
      }
      obj[3] = tmpResult;
      return closure_1_8(navigation(stateFromStores1[11]).TableRow, obj, guild.id);
    })
  });
  return <closure_4 bottom={stateFromStores(stateFromStores1[9])().bottom} top={stateFromStores(stateFromStores1[7]).space.PX_12} />;
};