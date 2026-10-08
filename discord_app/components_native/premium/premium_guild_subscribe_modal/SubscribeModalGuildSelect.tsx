// === Module 5967: SubscribeModalGuildSelect ===

// Module 5967 (SubscribeModalGuildSelect)
import nativeDefault from "native" /* 587 */;
import BoostingActionCreatorsAll from "BoostingActionCreators" /* 5964 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5975 */;
import SearchBarNavDefault from "SearchBarNav" /* 7078 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import SortedGuildStore from "SortedGuildStore" /* 5968 */;

const require = fn;
const ScrollView = fn(17).ScrollView;
let closure_9 = fn(5966).PremiumGuildSubscribeModalScenes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { safeArea: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexGrow: 1, flexShrink: 1 }, guildList: { padding: 16 }, guildOption: { flexDirection: "row", alignItems: "center", paddingVertical: 10 }, guildName: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexGrow: 1, flexShrink: 1 };
obj2.guildName = { marginLeft: 32, fontSize: 16, lineHeight: 20, color: fn(5974).DARK_WHITE_500_LIGHT_PRIMARY_660 };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { marginLeft: 32, fontSize: 16, lineHeight: 20, color: fn(5974).DARK_WHITE_500_LIGHT_PRIMARY_660 };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalGuildSelect.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function SubscribeModalGuildSelect(guildBoostSlots) {
  const cResult = guildBoostSlots(576).c(33);
  guildBoostSlots = guildBoostSlots.guildBoostSlots;
  const intent = guildBoostSlots.intent;
  importAll = guildBoostSlots.onResult;
  let obj = guildBoostSlots(576);
  const tmp = guildBoostSlots;
  dependencyMap = closure_12();
  const tmp4 = closure_12();
  const navigation = guildBoostSlots(1502).useNavigation();
  let obj2 = guildBoostSlots(1502);
  first = navigation(first.useState(""), 2)[0];
  if (null != guildBoostSlots) {
    let tmp13 = globalThis;
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class M {
        constructor(arg0) {
          premiumGuildSubscription = guildBoostSlots.premiumGuildSubscription;
          guildId = undefined;
          if (premiumGuildSubscription != null) {
            guildId = premiumGuildSubscription.guildId;
          }
          return null != guildId;
        }
      }
      cResult[3] = M;
      let tmp14 = M;
    } else {
      class M {
        constructor(arg0) {
          premiumGuildSubscription = guildBoostSlots.premiumGuildSubscription;
          guildId = undefined;
          if (premiumGuildSubscription != null) {
            guildId = premiumGuildSubscription.guildId;
          }
          return null != guildId;
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor(arg0) {
          premiumGuildSubscription = guildBoostSlots.premiumGuildSubscription;
          guildId = undefined;
          if (premiumGuildSubscription != null) {
            guildId = premiumGuildSubscription.guildId;
          }
          return guildId;
        }
      }
      cResult[4] = P;
    } else {
      class P {
        constructor(arg0) {
          premiumGuildSubscription = guildBoostSlots.premiumGuildSubscription;
          guildId = undefined;
          if (premiumGuildSubscription != null) {
            guildId = premiumGuildSubscription.guildId;
          }
          return guildId;
        }
      }
    }
    const found = guildBoostSlots.filter(tmp14);
    tmp14 = new.target;
    const set = new tmp13.Set(found.map(P));
    tmp13 = set;
    cResult[1] = guildBoostSlots;
    cResult[2] = set;
  } else {
    class P {
      constructor(arg0) {
        premiumGuildSubscription = guildBoostSlots.premiumGuildSubscription;
        guildId = undefined;
        if (premiumGuildSubscription != null) {
          guildId = premiumGuildSubscription.guildId;
        }
        return guildId;
      }
    }
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor(arg0) {
          premiumGuildSubscription = guildBoostSlots.premiumGuildSubscription;
          guildId = undefined;
          if (premiumGuildSubscription != null) {
            guildId = premiumGuildSubscription.guildId;
          }
          return guildId;
        }
      }
      let set1 = new Set();
      cResult[0] = set1;
    } else {
      class P {
        constructor(arg0) {
          premiumGuildSubscription = guildBoostSlots.premiumGuildSubscription;
          guildId = undefined;
          if (premiumGuildSubscription != null) {
            guildId = premiumGuildSubscription.guildId;
          }
          return guildId;
        }
      }
    }
    set1 = tmp8;
    const _Symbol4 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor(arg0) {
          premiumGuildSubscription = guildBoostSlots.premiumGuildSubscription;
          guildId = undefined;
          if (premiumGuildSubscription != null) {
            guildId = premiumGuildSubscription.guildId;
          }
          return guildId;
        }
      }
      let items = [GuildStore, SortedGuildStore];
      cResult[5] = items;
      const tmp21 = items;
    } else {
      class P {
        constructor(arg0) {
          premiumGuildSubscription = guildBoostSlots.premiumGuildSubscription;
          guildId = undefined;
          if (premiumGuildSubscription != null) {
            guildId = premiumGuildSubscription.guildId;
          }
          return guildId;
        }
      }
    }
    if (cResult[6] === tmp8) {
      class P {
        constructor(arg0) {
          premiumGuildSubscription = guildBoostSlots.premiumGuildSubscription;
          guildId = undefined;
          if (premiumGuildSubscription != null) {
            guildId = premiumGuildSubscription.guildId;
          }
          return guildId;
        }
      }
      const stateFromStoresArray = tmp(504).useStateFromStoresArray(tmp21, C, tmp24);
      if (cResult[10] === guildBoostSlots) {
        class P {
          constructor(arg0) {
            premiumGuildSubscription = guildBoostSlots.premiumGuildSubscription;
            guildId = undefined;
            if (premiumGuildSubscription != null) {
              guildId = premiumGuildSubscription.guildId;
            }
            return guildId;
          }
        }
      }
      function handleGuildSelect(guildId) {
        const replaced = navigation.replace(constants.CONFIRMATION, { guildId: guildId.id, guildBoostSlots, intent, onResult });
      }
      cResult[10] = guildBoostSlots;
      cResult[11] = intent;
      cResult[12] = navigation;
      class C {
        constructor() {
          if (0 === closure_5.length) {
            tmp10 = closure_8;
            flattenedGuildIds = closure_8.getFlattenedGuildIds();
            tmp11 = globalThis;
            _Array2 = Array;
            tmp12 = new.target;
            tmp13 = new.target;
            array = new Array();
            tmp15 = array;
            reduced = flattenedGuildIds.reduce((arr, item) => {
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
            tmp2 = closure_1;
            tmp3 = closure_3;
            obj = closure_1(closure_3[13]);
            obj1 = { query: null };
            obj1.query = tmp;
            queryGuildsResult = obj.queryGuilds(obj1);
            tmp4 = globalThis;
            _Array = Array;
            tmp5 = new.target;
            tmp6 = new.target;
            array1 = new Array();
            tmp8 = array1;
            reduced = queryGuildsResult.reduce((arr, record) => {
              record = record.record;
              if (!set.has(record.id)) {
                arr = arr.push(record);
              }
              return arr;
            }, array1);
          }
          return reduced;
        }
      }
      cResult[14] = handleGuildSelect;
      const tmpResult = tmp(504);
    }
    class C {
      constructor() {
        if (0 === closure_5.length) {
          tmp10 = closure_8;
          flattenedGuildIds = closure_8.getFlattenedGuildIds();
          tmp11 = globalThis;
          _Array2 = Array;
          tmp12 = new.target;
          tmp13 = new.target;
          array = new Array();
          tmp15 = array;
          reduced = flattenedGuildIds.reduce((arr, item) => {
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
          tmp2 = closure_1;
          tmp3 = closure_3;
          obj = closure_1(closure_3[13]);
          obj1 = { query: null };
          obj1.query = tmp;
          queryGuildsResult = obj.queryGuilds(obj1);
          tmp4 = globalThis;
          _Array = Array;
          tmp5 = new.target;
          tmp6 = new.target;
          array1 = new Array();
          tmp8 = array1;
          reduced = queryGuildsResult.reduce((arr, record) => {
            record = record.record;
            if (!set.has(record.id)) {
              arr = arr.push(record);
            }
            return arr;
          }, array1);
        }
        return reduced;
      }
    }
    const items1 = [first, tmp8];
    cResult[6] = tmp8;
    cResult[7] = first;
    cResult[8] = C;
    cResult[9] = items1;
    tmp24 = items1;
  }
  const tmp6 = navigation(first.useState(""), 2);
}) : (function SubscribeModalGuildSelect(guildBoostSlots) {
  guildBoostSlots = guildBoostSlots.guildBoostSlots;
  ({ intent: importDefault, onResult: importAll } = guildBoostSlots);
  first = undefined;
  const tmp = closure_12();
  dependencyMap = tmp;
  _slicedToArray = guildBoostSlots(1502).useNavigation();
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
  let obj = guildBoostSlots(1502);
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
  const intl = guildBoostSlots(1126).intl;
  obj4.placeholder = intl.string(guildBoostSlots(1126).t.vf3ZTa);
  obj4.onClose = BoostingActionCreatorsAll.closeApplyBoostModal;
  const items3 = [closure_10(SearchBarNavDefault, obj4), ];
  const obj5 = { style: tmp.guildList, keyboardShouldPersistTaps: "always", children: null };
  obj5.children = closure_10(guildBoostSlots(6803).SafeAreaPaddingView, {
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
      const obj2 = { guild, size: guildBoostSlots(closure_3[19]).GuildIconSizes.SMALL, selected: false };
      const items = [closure_1_10(intent(closure_3[19]), obj2), closure_1_10(guildBoostSlots(closure_3[20]).LegacyText, { style: closure_3.guildName, children: guild.name })];
      obj.children = items;
      return closure_1_11(guildBoostSlots(closure_3[18]).PressableOpacity, obj, guild.id);
    })
  });
  items3[1] = closure_10(memo, obj5);
  obj3.children = items3;
  return closure_11(guildBoostSlots(6803).SafeAreaPaddingView, obj3);
});