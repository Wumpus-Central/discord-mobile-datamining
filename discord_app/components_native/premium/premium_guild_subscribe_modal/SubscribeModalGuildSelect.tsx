// === Module 6713: SubscribeModalGuildSelect ===

// Module 6713 (SubscribeModalGuildSelect)
import ThemesDefault from "Themes" /* 712 */;
import openApplyBoostModalAll from "openApplyBoostModal" /* 6710 */;
import _modDef7336 from "module_7336" /* 7336 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { ScrollView } from "get ActivityIndicator" /* 17 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import insertUnsortedGuilds from "insertUnsortedGuilds" /* 5078 */;
import { PremiumGuildSubscribeModalScenes as closure_9 } from "PremiumGuildSubscribeModalScenes" /* 6712 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flexGrow: 1, flexShrink: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: 16 };
createCacheKey[2] = { flexDirection: "row", alignItems: "center", paddingVertical: 10 };
createCacheKey[3] = { marginLeft: 32, fontSize: 16, lineHeight: 20, color: require("result").DARK_WHITE_500_LIGHT_PRIMARY_660 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginLeft: 32, fontSize: 16, lineHeight: 20, color: require("result").DARK_WHITE_500_LIGHT_PRIMARY_660 };
const result = require("obj132").fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalGuildSelect.tsx");

export default function SubscribeModalGuildSelect(guildBoostSlots) {
  guildBoostSlots = guildBoostSlots.guildBoostSlots;
  ({ intent: importDefault, onResult: importAll } = guildBoostSlots);
  let first;
  const tmp = callback4();
  dependencyMap = tmp;
  let obj = guildBoostSlots(1500);
  const callback = obj.useNavigation();
  const tmp2 = callback(first.useState(""), 2);
  first = tmp2[0];
  let items = [guildBoostSlots];
  const memo = first.useMemo(() => {
    if (null == guildBoostSlots) {
      const _Set2 = Set;
      let set = new Set();
    } else {
      const _Set = Set;
      const found = guildBoostSlots.filter((item, index) => {
        const premiumGuildSubscription = item.premiumGuildSubscription;
        let guildId;
        if (premiumGuildSubscription != null) {
          guildId = premiumGuildSubscription.guildId;
        }
        return null != guildId;
      });
      set = new Set(found.map((item, index) => {
        const premiumGuildSubscription = item.premiumGuildSubscription;
        let guildId;
        if (premiumGuildSubscription != null) {
          guildId = premiumGuildSubscription.guildId;
        }
        return guildId;
      }));
    }
    return set;
  }, items);
  obj1 = guildBoostSlots(589);
  const items1 = [closure_7, closure_8];
  const items2 = [first, memo];
  const stateFromStoresArray = obj1.useStateFromStoresArray(items1, () => {
    if (0 === first.length) {
      const flattenedGuildIds = closure_1_8.getFlattenedGuildIds();
      const _Array2 = Array;
      let array = new Array();
      let reduced = flattenedGuildIds.reduce((acc, item, index) => {
        const guild = closure_1_7.getGuild(item);
        let hasItem = null == guild;
        if (!hasItem) {
          hasItem = set.has(guild.id);
        }
        if (!hasItem) {
          acc.push(guild);
        }
        return acc;
      }, array);
    } else {
      importDefault(closure_3[12]);
      const obj = { query: null };
      obj[0] = tmp;
      const _Array = Array;
      array = new Array();
      reduced = obj.queryGuilds(obj).reduce((acc, item, index) => {
        const record = item.record;
        if (!set.has(record.id)) {
          acc.push(record);
        }
        return acc;
      }, array);
      const queryGuildsResult = obj.queryGuilds(obj);
    }
    return reduced;
  }, items2);
  obj = { placeholder: null, onChange: null, onClose: null };
  const intl = guildBoostSlots(1236).intl;
  obj[0] = intl.string(guildBoostSlots(1236).t.vf3ZTa);
  obj[1] = tmp2[1];
  obj[2] = openApplyBoostModalAll.closeApplyBoostModal;
  const items3 = [callback2(_modDef7336, obj), ];
  obj1 = { style: tmp.guildList, keyboardShouldPersistTaps: "always", children: null };
  obj1[2] = callback2(guildBoostSlots(6803).SafeAreaPaddingView, {
    bottom: true,
    children: stateFromStoresArray.map((item, index) => {
      closure_0 = item;
      let obj = { guild: item, size: guildBoostSlots(closure_3[18]).GuildIconSizes.SMALL, selected: false };
      const items = [closure_1_10(importDefault(closure_3[18]), obj), ];
      obj = { style: closure_3.guildName, children: item.name };
      items[1] = closure_1_10(guildBoostSlots(closure_3[19]).LegacyText, obj);
      obj[3] = items;
      return closure_1_11(guildBoostSlots(closure_3[17]).PressableOpacity, obj, item.id);
    })
  });
  items3[1] = callback2(memo, obj1);
  obj[2] = items3;
  return callback3(guildBoostSlots(6803).SafeAreaPaddingView, obj);
};