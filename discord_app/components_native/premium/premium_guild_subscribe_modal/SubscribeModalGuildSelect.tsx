// === Module 5092: SubscribeModalGuildSelect ===

// Module 5092 (SubscribeModalGuildSelect)
import _slicedToArray from "_slicedToArray";
import Button from "Button";
import { ScrollView } from "PressableBase";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import { PremiumGuildSubscribeModalScenes as closure_9 } from "PremiumGuildSubscribeModalScenes";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c10;
let unpackModuleId;
const require = arg1;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { safeArea: null, guildList: null, guildOption: null, guildName: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, flexGrow: 1, flexShrink: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: 16 };
createCacheKey[2] = { flexDirection: "row", alignItems: "center", paddingVertical: 10 };
createCacheKey[3] = { marginLeft: 32, fontSize: 16, lineHeight: 20, color: require("result").DARK_WHITE_500_LIGHT_PRIMARY_660 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginLeft: 32, fontSize: 16, lineHeight: 20, color: require("result").DARK_WHITE_500_LIGHT_PRIMARY_660 };
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalGuildSelect.tsx");

export default function SubscribeModalGuildSelect(guildBoostSlots) {
  let importAll;
  let importDefault;
  guildBoostSlots = guildBoostSlots.guildBoostSlots;
  ({ intent: importDefault, onResult: importAll } = guildBoostSlots);
  let dependencyMap;
  let callback;
  let first;
  let memo;
  const tmp = createCacheKey();
  dependencyMap = tmp;
  let obj = guildBoostSlots(1480);
  callback = obj.useNavigation();
  const tmp2 = callback(first.useState(""), 2);
  first = tmp2[0];
  let items = [guildBoostSlots];
  memo = first.useMemo(() => {
    if (null == guildBoostSlots) {
      const _Set2 = Set;
      let set = new Set();
    } else {
      const _Set = Set;
      const found = guildBoostSlots.filter((premiumGuildSubscription) => {
        premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
        let guildId;
        if (premiumGuildSubscription != null) {
          guildId = premiumGuildSubscription.guildId;
        }
        return null != guildId;
      });
      set = new Set(found.map((premiumGuildSubscription) => {
        premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
        let guildId;
        if (premiumGuildSubscription != null) {
          guildId = premiumGuildSubscription.guildId;
        }
        return guildId;
      }));
    }
    return set;
  }, items);
  let obj1 = guildBoostSlots(589);
  const items1 = [createGuildRecordFromRust, insertUnsortedGuilds];
  const items2 = [first, memo];
  const stateFromStoresArray = obj1.useStateFromStoresArray(items1, () => {
    if (0 === first.length) {
      const flattenedGuildIds = outer1_8.getFlattenedGuildIds();
      const _Array2 = Array;
      let array = new Array();
      let reduced = flattenedGuildIds.reduce((arr) => {
        const guild = outer1_7.getGuild(arg1);
        let hasItem = null == guild;
        if (!hasItem) {
          hasItem = set.has(guild.id);
        }
        if (!hasItem) {
          arr.push(guild);
        }
        return arr;
      }, array);
    } else {
      let obj = outer1_1(_undefined[12]);
      obj = { query: null };
      obj[0] = tmp;
      const _Array = Array;
      array = new Array();
      reduced = obj.queryGuilds(obj).reduce((arr, record) => {
        record = record.record;
        if (!set.has(record.id)) {
          arr.push(record);
        }
        return arr;
      }, array);
      const queryGuildsResult = obj.queryGuilds(obj);
    }
    return reduced;
  }, items2);
  obj = { top: true, style: tmp.safeArea, children: null };
  obj = { placeholder: null, onChange: null, onClose: null };
  const intl = guildBoostSlots(1236).intl;
  obj[0] = intl.string(guildBoostSlots(1236).t.vf3ZTa);
  obj[1] = tmp2[1];
  obj[2] = importAll(5089).closeApplyBoostModal;
  const items3 = [callback2(importDefault(5890), obj), ];
  obj1 = { style: tmp.guildList, keyboardShouldPersistTaps: "always", children: null };
  const obj2 = { bottom: true, children: null };
  obj2[1] = stateFromStoresArray.map((children) => {
    let closure_0 = children;
    let obj = {
      accessibilityRole: "button",
      style: _undefined.guildOption,
      onPress() {
        const replaced = outer1_4.replace(outer2_9.CONFIRMATION, { guildId: id.id, guildBoostSlots: id, intent: outer1_1, onResult: outer1_2 });
      },
      children: null
    };
    obj = { guild: children, size: null, selected: false };
    obj[1] = guildBoostSlots(_undefined[18]).GuildIconSizes.SMALL;
    const items = [outer1_10(outer1_1(_undefined[18]), obj), ];
    obj = { style: _undefined.guildName, children: children.name };
    items[1] = outer1_10(guildBoostSlots(_undefined[19]).LegacyText, obj);
    obj[3] = items;
    return outer1_11(guildBoostSlots(_undefined[17]).PressableOpacity, obj, children.id);
  });
  obj1[2] = callback2(guildBoostSlots(5243).SafeAreaPaddingView, obj2);
  items3[1] = callback2(memo, obj1);
  obj[2] = items3;
  return callback3(guildBoostSlots(5243).SafeAreaPaddingView, obj);
};