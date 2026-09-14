// === Module 5518: SubscribeModalGuildSelect ===

// Module 5518 (SubscribeModalGuildSelect)
import nativeDefault from "native" /* 576 */;
import actions_BoostingActionCreatorsAll from "actions/BoostingActionCreators" /* 5515 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5523 */;
import SearchBarNavDefault from "SearchBarNav" /* 7479 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import SortedGuildStore from "SortedGuildStore" /* 5519 */;

const require = fn;
const ScrollView = fn(17).ScrollView;
let closure_9 = fn(5517).PremiumGuildSubscribeModalScenes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { safeArea: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexGrow: 1, flexShrink: 1 }, guildList: { padding: 16 }, guildOption: { flexDirection: "row", alignItems: "center", paddingVertical: 10 }, guildName: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexGrow: 1, flexShrink: 1 };
obj2.guildName = { marginLeft: 32, fontSize: 16, lineHeight: 20, color: fn(5522).DARK_WHITE_500_LIGHT_PRIMARY_660 };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalGuildSelect.tsx");

export default function SubscribeModalGuildSelect(guildBoostSlots) {
  guildBoostSlots = guildBoostSlots.guildBoostSlots;
  ({ intent: importDefault, onResult: importAll } = guildBoostSlots);
  first = undefined;
  const tmp = closure_12();
  dependencyMap = tmp;
  _slicedToArray = guildBoostSlots(1483).useNavigation();
  [first, obj4.onChange] = first.useState("");
  let items = [guildBoostSlots];
  const memo = first.useMemo(() => {
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
  let obj = guildBoostSlots(1483);
  const items1 = [GuildStore, SortedGuildStore];
  const items2 = [first, memo];
  const stateFromStoresArray = guildBoostSlots(504).useStateFromStoresArray(items1, () => {
    if (0 === first.length) {
      const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
      const _Array2 = Array;
      const array = new Array();
      let reduced = flattenedGuildIds.reduce((arr, item) => {
        guild = guild.getGuild(item);
        let hasItem = null == guild;
        if (!hasItem) {
          hasItem = set.has(guild.id);
        }
        if (!hasItem) {
          arr = arr.push(guild);
        }
        return arr;
      }, array);
    } else {
      const obj2 = { query: tmp };
      const _Array = Array;
      const array2 = new Array();
      reduced = AutocompleteUtilsDefault.queryGuilds(obj2).reduce((arr, record) => {
        record = record.record;
        if (!set.has(record.id)) {
          arr = arr.push(record);
        }
        return arr;
      }, array2);
      const queryGuildsResult = AutocompleteUtilsDefault.queryGuilds(obj2);
    }
    return reduced;
  }, items2);
  const obj3 = { top: true, style: tmp.safeArea, children: null };
  const obj4 = { placeholder: null, onChange: null, onClose: null };
  let obj2 = guildBoostSlots(504);
  const intl = guildBoostSlots(1114).intl;
  obj4.placeholder = intl.string(guildBoostSlots(1114).t.vf3ZTa);
  obj4.onClose = actions_BoostingActionCreatorsAll.closeApplyBoostModal;
  const items3 = [closure_10(SearchBarNavDefault, obj4), ];
  const obj5 = { style: tmp.guildList, keyboardShouldPersistTaps: "always", children: null };
  obj5.children = closure_10(guildBoostSlots(7226).SafeAreaPaddingView, {
    bottom: true,
    children: stateFromStoresArray.map((guild) => {
      const obj = {
        accessibilityRole: "button",
        style: closure_3.guildOption,
        onPress() {
          const replaced = closure_4.replace(constants.CONFIRMATION, { guildId: guild.id, guildBoostSlots, intent, onResult });
        },
        children: null
      };
      const obj2 = { guild, size: guildBoostSlots(closure_3[18]).GuildIconSizes.SMALL, selected: false };
      const items = [closure_1_10(intent(closure_3[18]), obj2), closure_1_10(guildBoostSlots(closure_3[19]).LegacyText, { style: closure_3.guildName, children: guild.name })];
      obj.children = items;
      return closure_1_11(guildBoostSlots(closure_3[17]).PressableOpacity, obj, guild.id);
    })
  });
  items3[1] = closure_10(memo, obj5);
  obj3.children = items3;
  return closure_11(guildBoostSlots(7226).SafeAreaPaddingView, obj3);
};