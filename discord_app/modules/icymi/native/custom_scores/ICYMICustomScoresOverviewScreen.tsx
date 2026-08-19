// discord_app/modules/icymi/native/custom_scores/ICYMICustomScoresOverviewScreen.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { ScrollView } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import createGuildRecordFromRust from "../../../../stores/GuildStore.tsx";
import insertUnsortedGuilds from "../../../../stores/SortedGuildStore.tsx";
import filterStaffGuild from "../../ICYMIStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: ThemesDefault.space.PX_12 };
createCacheKey[0] = createCacheKey;
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/icymi/native/custom_scores/ICYMICustomScoresOverviewScreen.tsx");

export default function ICYMICustomScoresOverviewScreen(navigation) {
  navigation = navigation.navigation;
  let stateFromStores1;
  let obj = navigation(stateFromStores1[8]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => guilds.getGuilds());
  obj1 = navigation(stateFromStores1[8]);
  const items1 = [closure_6];
  stateFromStores1 = obj1.useStateFromStores(items1, () => flattenedGuildIds.getFlattenedGuildIds());
  const items2 = [closure_7];
  const React = navigation(stateFromStores1[8]).useStateFromStores(items2, () => customGuildScores.getCustomGuildScores());
  const items3 = [stateFromStores1, stateFromStores];
  const memo = React.useMemo(() => stateFromStores1.map((item, index) => table[item]), items3);
  const obj3 = navigation(stateFromStores1[8]);
  const items4 = [navigation];
  closure_4 = React.useCallback((guildId) => navigation.navigate("guild", { guildId }), items4);
  { showsVerticalScrollIndicator: false, style: callback().container, contentInset: null, children: null };
  obj = { bottom: stateFromStores(stateFromStores1[9])().bottom, top: stateFromStores(stateFromStores1[7]).space.PX_12 };
  obj[2] = obj;
  obj1 = {
    hasIcons: true,
    children: memo.map((item, index) => {
      closure_0 = item;
      let obj = { guild: item };
      obj[1] = jsx(stateFromStores(stateFromStores1[12]), { guild: item });
      obj[2] = item.name;
      let tmpResult;
      if (null != table[item.id]) {
        const tmp2Result = navigation(stateFromStores1[13]);
        if (numberToCustomScoreResult === navigation(stateFromStores1[13]).ICYMICustomScore.MUTED) {
          obj = { text: null };
          const intl = navigation(stateFromStores1[14]).intl;
          obj[0] = intl.string(navigation(stateFromStores1[14]).t.lhPHmz);
          tmpResult = jsx(navigation(stateFromStores1[11]).TableRow.TrailingText, { text: null });
        }
        numberToCustomScoreResult = navigation(stateFromStores1[13]).numberToCustomScore(tmp4[item.id]);
      }
      obj[3] = tmpResult;
      return jsx(navigation(stateFromStores1[11]).TableRow, { guild: item }, item.id);
    })
  };
  obj[3] = jsx(navigation(stateFromStores1[10]).TableRowGroup, {
    hasIcons: true,
    children: memo.map((item, index) => {
      closure_0 = item;
      let obj = { guild: item };
      obj[1] = jsx(stateFromStores(stateFromStores1[12]), { guild: item });
      obj[2] = item.name;
      let tmpResult;
      if (null != table[item.id]) {
        const tmp2Result = navigation(stateFromStores1[13]);
        if (numberToCustomScoreResult === navigation(stateFromStores1[13]).ICYMICustomScore.MUTED) {
          obj = { text: null };
          const intl = navigation(stateFromStores1[14]).intl;
          obj[0] = intl.string(navigation(stateFromStores1[14]).t.lhPHmz);
          tmpResult = jsx(navigation(stateFromStores1[11]).TableRow.TrailingText, { text: null });
        }
        numberToCustomScoreResult = navigation(stateFromStores1[13]).numberToCustomScore(tmp4[item.id]);
      }
      obj[3] = tmpResult;
      return jsx(navigation(stateFromStores1[11]).TableRow, { guild: item }, item.id);
    })
  });
  return <closure_4 bottom={stateFromStores(stateFromStores1[9])().bottom} top={stateFromStores(stateFromStores1[7]).space.PX_12} />;
};