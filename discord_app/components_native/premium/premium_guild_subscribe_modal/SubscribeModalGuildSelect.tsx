// discord_app/components_native/premium/premium_guild_subscribe_modal/SubscribeModalGuildSelect.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import actions_BoostingActionCreatorsAll from "../../../actions/native/BoostingActionCreators.tsx";
import AutocompleteUtilsDefault from "../../../utils/AutocompleteUtils.tsx";
import SearchBarNavDefault from "../../../modules/main_tabs_v2/native/shared_components/SearchBarNav.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import SortedGuildStore from "../../../stores/SortedGuildStore.tsx";

const require = fn;
const ScrollView = fn(17).ScrollView;
let closure_9 = fn(5436).PremiumGuildSubscribeModalScenes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { safeArea: null, guildList: null, guildOption: null, guildName: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexGrow: 1, flexShrink: 1 };
createStyles.safeArea = createStyles;
createStyles.guildList = { padding: 16 };
createStyles.guildOption = { flexDirection: "row", alignItems: "center", paddingVertical: 10 };
createStyles.guildName = {
  marginLeft: 32,
  fontSize: 16,
  lineHeight: 20,
  color: fn(5441).DARK_WHITE_500_LIGHT_PRIMARY_660,
};
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "components_native/premium/premium_guild_subscribe_modal/SubscribeModalGuildSelect.tsx",
);

export default function SubscribeModalGuildSelect(guildBoostSlots) {
  guildBoostSlots = guildBoostSlots.guildBoostSlots;
  ({ intent: importDefault, onResult: importAll } = guildBoostSlots);
  let first;
  const tmp = closure_12();
  dependencyMap = tmp;
  let obj = guildBoostSlots(1483);
  _slicedToArray = obj.useNavigation();
  const tmp2 = _slicedToArray(first.useState(""), 2);
  first = tmp2[0];
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
      set = new Set(
        found.map((premiumGuildSubscription) => {
          premiumGuildSubscription = premiumGuildSubscription.premiumGuildSubscription;
          let guildId;
          if (premiumGuildSubscription != null) {
            guildId = premiumGuildSubscription.guildId;
          }
          return guildId;
        }),
      );
    }
    return set;
  }, items);
  let obj1 = guildBoostSlots(504);
  const items1 = [GuildStore, SortedGuildStore];
  const items2 = [first, memo];
  const stateFromStoresArray = obj1.useStateFromStoresArray(
    items1,
    () => {
      if (0 === first.length) {
        const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
        const _Array2 = Array;
        let array = new Array();
        let reduced = flattenedGuildIds.reduce((arr, item) => {
          guild = guild.getGuild(item);
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
        const obj = { query: tmp };
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
    },
    items2,
  );
  obj = { top: true, style: tmp.safeArea, children: null };
  obj = { placeholder: null, onChange: null, onClose: null };
  const intl = guildBoostSlots(1114).intl;
  obj.placeholder = intl.string(guildBoostSlots(1114).t.vf3ZTa);
  obj.onChange = tmp2[1];
  obj.onClose = actions_BoostingActionCreatorsAll.closeApplyBoostModal;
  const items3 = [closure_10(SearchBarNavDefault, obj)];
  obj1 = { style: tmp.guildList, keyboardShouldPersistTaps: "always", children: null };
  obj1.children = closure_10(guildBoostSlots(7123).SafeAreaPaddingView, {
    bottom: true,
    children: stateFromStoresArray.map((guild) => {
      let obj = {
        accessibilityRole: "button",
        style: closure_3.guildOption,
        onPress() {
          const replaced = closure_4.replace(constants.CONFIRMATION, {
            guildId: guild.id,
            guildBoostSlots,
            intent,
            onResult,
          });
        },
        children: null,
      };
      obj = { guild, size: guildBoostSlots(closure_3[18]).GuildIconSizes.SMALL, selected: false };
      const items = [closure_1_10(intent(closure_3[18]), obj)];
      obj = { style: closure_3.guildName, children: guild.name };
      items[1] = closure_1_10(guildBoostSlots(closure_3[19]).LegacyText, obj);
      obj.children = items;
      return closure_1_11(guildBoostSlots(closure_3[17]).PressableOpacity, obj, guild.id);
    }),
  });
  items3[1] = closure_10(memo, obj1);
  obj.children = items3;
  return closure_11(guildBoostSlots(7123).SafeAreaPaddingView, obj);
}
