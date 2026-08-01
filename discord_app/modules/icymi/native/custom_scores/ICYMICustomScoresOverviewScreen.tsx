// === Module 15348: ICYMICustomScoresOverviewScreen ===

// Module 15348 (ICYMICustomScoresOverviewScreen)
import noop from "noop";
import { ScrollView } from "get ActivityIndicator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import filterStaffGuild from "filterStaffGuild";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, paddingHorizontal: require("Themes").space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createGuildRecordFromRust").fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresOverviewScreen.tsx");

export default function ICYMICustomScoresOverviewScreen(navigation) {
  navigation = navigation.navigation;
  let stateFromStores;
  let stateFromStores1;
  let React;
  let closure_4;
  let obj = navigation(stateFromStores1[8]);
  const items = [createGuildRecordFromRust];
  stateFromStores = obj.useStateFromStores(items, () => guilds.getGuilds());
  let obj1 = navigation(stateFromStores1[8]);
  const items1 = [insertUnsortedGuilds];
  stateFromStores1 = obj1.useStateFromStores(items1, () => flattenedGuildIds.getFlattenedGuildIds());
  const items2 = [filterStaffGuild];
  React = navigation(stateFromStores1[8]).useStateFromStores(items2, () => customGuildScores.getCustomGuildScores());
  const items3 = [stateFromStores1, stateFromStores];
  const memo = React.useMemo(() => stateFromStores1.map((arg0) => table[arg0]), items3);
  const obj3 = navigation(stateFromStores1[8]);
  const items4 = [navigation];
  closure_4 = React.useCallback((guildId) => navigation.navigate("guild", { guildId }), items4);
  obj = { showsVerticalScrollIndicator: false, style: createCacheKey().container, contentInset: null, children: null };
  obj = { bottom: stateFromStores(stateFromStores1[9])().bottom, top: stateFromStores(stateFromStores1[7]).space.PX_12 };
  obj[2] = obj;
  obj1 = { hasIcons: true, children: null };
  obj1[1] = memo.map((guild) => {
    let closure_0 = guild;
    let obj = {
      onPress() {
        return outer1_4(guild.id);
      },
      icon: null,
      label: null,
      trailing: null,
      arrow: true
    };
    obj = { guild };
    obj[1] = outer1_8(stateFromStores(stateFromStores1[12]), obj);
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
    return outer1_8(navigation(stateFromStores1[11]).TableRow, obj, guild.id);
  });
  obj[3] = jsx(navigation(stateFromStores1[10]).TableRowGroup, { hasIcons: true, children: null });
  return <closure_4 bottom={stateFromStores(stateFromStores1[9])().bottom} top={stateFromStores(stateFromStores1[7]).space.PX_12} />;
};