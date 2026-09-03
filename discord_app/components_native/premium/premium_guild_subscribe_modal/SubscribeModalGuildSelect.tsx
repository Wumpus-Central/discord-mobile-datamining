// discord_app/components_native/premium/premium_guild_subscribe_modal/SubscribeModalGuildSelect.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import openApplyBoostModalAll from "../../../actions/native/BoostingActionCreators.tsx";
import _modDef6230 from "../../../modules/main_tabs_v2/native/shared_components/SearchBarNav.tsx";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import { ScrollView } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../stores/GuildStore.tsx";
import closure_8 from "../../../stores/SortedGuildStore.tsx";
import { PremiumGuildSubscribeModalScenes as closure_9 } from "PremiumGuildSubscribeConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { safeArea: null, guildList: null, guildOption: null, guildName: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, flexGrow: 1, flexShrink: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { padding: 16 };
createCacheKey[2] = { flexDirection: "row", alignItems: "center", paddingVertical: 10 };
createCacheKey[3] = {
  marginLeft: 32,
  fontSize: 16,
  lineHeight: 20,
  color: require("result").DARK_WHITE_500_LIGHT_PRIMARY_660,
};
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj1 = { marginLeft: 32, fontSize: 16, lineHeight: 20, color: require("result").DARK_WHITE_500_LIGHT_PRIMARY_660 };
const result = require("set").fileFinishedImporting(
  "components_native/premium/premium_guild_subscribe_modal/SubscribeModalGuildSelect.tsx",
);

export default function SubscribeModalGuildSelect(guildBoostSlots) {
  guildBoostSlots = guildBoostSlots.guildBoostSlots;
  ({ intent: importDefault, onResult: importAll } = guildBoostSlots);
  dependencyMap = undefined;
  let callback;
  let first;
  let memo;
  const tmp = callback4();
  dependencyMap = tmp;
  let obj = guildBoostSlots(1498);
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
  obj1 = guildBoostSlots(586);
  const items1 = [closure_7, closure_8];
  const items2 = [first, memo];
  const stateFromStoresArray = obj1.useStateFromStoresArray(
    items1,
    () => {
      if (0 === first.length) {
        const flattenedGuildIds = closure_1_8.getFlattenedGuildIds();
        const _Array2 = Array;
        let array = new Array();
        let reduced = flattenedGuildIds.reduce((arr) => {
          const guild = closure_1_7.getGuild(arg1);
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
        let obj = closure_1_1(closure_3[12]);
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
    },
    items2,
  );
  obj = { top: true, style: tmp.safeArea, children: null };
  obj = { placeholder: null, onChange: null, onClose: null };
  const intl = guildBoostSlots(1233).intl;
  obj[0] = intl.string(guildBoostSlots(1233).t.vf3ZTa);
  obj[1] = tmp2[1];
  obj[2] = openApplyBoostModalAll.closeApplyBoostModal;
  const items3 = [callback2(_modDef6230, obj)];
  obj1 = { style: tmp.guildList, keyboardShouldPersistTaps: "always", children: null };
  const tmp5 = _modDef6230;
  obj1[2] = callback2(guildBoostSlots(5562).SafeAreaPaddingView, {
    bottom: true,
    children: stateFromStoresArray.map((children) => {
      closure_0 = children;
      let obj = {
        accessibilityRole: "button",
        style: closure_3.guildOption,
        onPress() {
          const replaced = closure_1_4.replace(closure_2_9.CONFIRMATION, {
            guildId: id.id,
            guildBoostSlots: id,
            intent: closure_1_1,
            onResult: closure_1_2,
          });
        },
        children: null,
      };
      obj = { guild: children, size: guildBoostSlots(closure_3[18]).GuildIconSizes.SMALL, selected: false };
      const items = [closure_1_10(closure_1_1(closure_3[18]), obj)];
      obj = { style: closure_3.guildName, children: children.name };
      items[1] = closure_1_10(guildBoostSlots(closure_3[19]).LegacyText, obj);
      obj[3] = items;
      return closure_1_11(guildBoostSlots(closure_3[17]).PressableOpacity, obj, children.id);
    }),
  });
  items3[1] = callback2(memo, obj1);
  obj[2] = items3;
  return callback3(guildBoostSlots(5562).SafeAreaPaddingView, obj);
}
