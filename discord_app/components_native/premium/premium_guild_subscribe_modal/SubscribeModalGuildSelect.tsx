// discord_app/components_native/premium/premium_guild_subscribe_modal/SubscribeModalGuildSelect.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import BoostingActionCreatorsAll from "../../../actions/native/BoostingActionCreators.tsx";
import PremiumGuildSubscribeConstants from "PremiumGuildSubscribeConstants.tsx";
import LegacyTokens from "../../../design/migrations/native/LegacyTokens.tsx";
import AutocompleteUtilsDefault from "../../../utils/AutocompleteUtils.tsx";
import SearchBarNavDefault from "../../../modules/main_tabs_v2/native/shared_components/SearchBarNav.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import SortedGuildStore from "../../../stores/SortedGuildStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let arr,
  array1,
  dependencyMap,
  guild,
  importAll,
  navigation,
  obj1,
  premiumGuildSubscription,
  queryGuildsResult,
  set,
  tmp2,
  tmp3,
  tmp9;

let c10;
let obj2;
let obj3;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
const ScrollView = react_native.ScrollView;
const constants = PremiumGuildSubscribeConstants.PremiumGuildSubscribeModalScenes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  safeArea: obj2,
  guildList: { padding: 16 },
  guildOption: { flexDirection: "row", alignItems: "center", paddingVertical: 10 },
  guildName: obj3,
};
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexGrow: 1, flexShrink: 1 };
createStyles = createStyles.createStyles;
obj3 = { marginLeft: 32, fontSize: 16, lineHeight: 20, color: LegacyTokens.DARK_WHITE_500_LIGHT_PRIMARY_660 };
let closure_12 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function (guildBoostSlots) {
      let closure_3;
      let first;
      let items1;
      let tmp17;
      let tmp8;
      let tmp = guildBoostSlots;
      let obj = guildBoostSlots(576);
      const cResult = obj.c(33);
      guildBoostSlots = guildBoostSlots.guildBoostSlots;
      const intent = guildBoostSlots.intent;
      importAll = onResult;
      dependencyMap = closure_12();
      const tmp4 = closure_12();
      let obj2 = guildBoostSlots(1490);
      navigation = obj2.useNavigation();
      const tmp6 = navigation(first.useState(""), 2);
      first = tmp6[0];
      if (null != guildBoostSlots) {
        let tmp11;
        if (cResult[1] !== guildBoostSlots) {
          const _Symbol2 = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            class P {
              constructor(arg0) {
                premiumGuildSubscription = guildBoostSlots.premiumGuildSubscription;
                guildId = undefined;
                if (premiumGuildSubscription != null) {
                  guildId = premiumGuildSubscription.guildId;
                }
                return null != guildId;
              }
            }
            cResult[3] = P;
          } else {
            class P {
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
            class R {
              constructor(arg0) {
                premiumGuildSubscription = guildBoostSlots.premiumGuildSubscription;
                guildId = undefined;
                if (premiumGuildSubscription != null) {
                  guildId = premiumGuildSubscription.guildId;
                }
                return guildId;
              }
            }
            cResult[4] = R;
          } else {
            class R {
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
          const _Set = Set;
          const found = guildBoostSlots.filter(P);
          let self3 = this;
          let self4 = this;
          set = new Set(found.map(R));
          cResult[1] = guildBoostSlots;
          cResult[2] = set;
          tmp11 = set;
        } else {
          class R {
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
        tmp8 = tmp11;
      } else {
        class R {
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
          class R {
            constructor(arg0) {
              premiumGuildSubscription = guildBoostSlots.premiumGuildSubscription;
              guildId = undefined;
              if (premiumGuildSubscription != null) {
                guildId = premiumGuildSubscription.guildId;
              }
              return guildId;
            }
          }
          let self = this;
          let self2 = this;
          let set1 = new Set();
          cResult[0] = set1;
          tmp8 = set1;
        } else {
          class R {
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
      }
      set1 = tmp8;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
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
        tmp17 = items;
      } else {
        class R {
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
        class R {
          constructor(arg0) {
            premiumGuildSubscription = guildBoostSlots.premiumGuildSubscription;
            guildId = undefined;
            if (premiumGuildSubscription != null) {
              guildId = premiumGuildSubscription.guildId;
            }
            return guildId;
          }
        }
        const tmpResult = tmp(504);
        const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp17, C, items1);
        if (cResult[10] === guildBoostSlots) {
          class R {
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
        class F {
          constructor(arg0) {
            obj = { guildId: guildBoostSlots.id, guildBoostSlots, intent, onResult };
            replaced = closure_4.replace(closure_9.CONFIRMATION, obj);
            return;
          }
        }
        cResult[10] = guildBoostSlots;
        cResult[11] = intent;
        cResult[12] = navigation;
        cResult[13] = guildBoostSlots.onResult;
        cResult[14] = F;
      }
      class C {
        constructor() {
          if (0 === closure_5.length) {
            tmp8 = closure_8;
            flattenedGuildIds = closure_8.getFlattenedGuildIds();
            tmp9 = globalThis;
            _Array2 = Array;
            self3 = this;
            self4 = this;
            reduce2 = flattenedGuildIds.reduce;
            array = new Array();
            tmp11 = array;
            reduce2Result = reduce2(() => {
              /* body not rendered: F137057 */
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
            self = this;
            self2 = this;
            reduce = queryGuildsResult.reduce;
            array1 = new Array();
            tmp6 = array1;
            reduce2Result = reduce(() => {
              /* body not rendered: F137058 */
            }, array1);
          }
          return reduce2Result;
        }
      }
      items1 = [first, tmp8];
      cResult[6] = tmp8;
      cResult[7] = first;
      cResult[8] = C;
      cResult[9] = items1;
    }
  : (guildBoostSlots) => {
      let SafeAreaPaddingView2;
      let closure_3;
      let closure_4;
      let first;
      let intent;
      let intl;
      let items3;
      let obj6;
      let onResult;
      let tmp4;
      guildBoostSlots = guildBoostSlots.guildBoostSlots;
      ({ intent: importDefault, onResult: importAll } = guildBoostSlots);
      first = undefined;
      let tmp = closure_12();
      dependencyMap = tmp;
      let obj = guildBoostSlots(1490);
      _slicedToArray = obj.useNavigation();
      [first, tmp4] = first.useState("");
      let items = [guildBoostSlots];
      const memo = first.useMemo(function () {
        if (null == guildBoostSlots) {
          const _Set2 = Set;
          const self3 = this;
          const self4 = this;
          set = new Set();
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
          const self = this;
          const self2 = this;
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
      let obj2 = guildBoostSlots(504);
      const items1 = [GuildStore, SortedGuildStore];
      const items2 = [first, memo];
      const stateFromStoresArray = obj2.useStateFromStoresArray(
        items1,
        function () {
          let reduce2Result;
          if (0 === first.length) {
            const flattenedGuildIds = SortedGuildStore.getFlattenedGuildIds();
            const _Array2 = Array;
            const self3 = this;
            const self4 = this;
            const reduce2 = flattenedGuildIds.reduce;
            const array = new Array();
            reduce2Result = reduce2((arr, arg1) => {
              guild = guild.getGuild(arg1);
              const hasItem = null == guild || set.has(guild.id);
              if (!hasItem) {
                arr = arr.push(guild);
              }
              return arr;
            }, array);
          } else {
            const obj2 = { query: tmp };
            const obj = AutocompleteUtilsDefault;
            const _Array = Array;
            const self = this;
            const self2 = this;
            const reduce = obj.queryGuilds(obj2).reduce;
            obj.queryGuilds(obj2);
            const array2 = new Array();
            reduce2Result = reduce((arr, record) => {
              record = record.record;
              if (!set.has(record.id)) {
                arr = arr.push(record);
              }
              return arr;
            }, array2);
          }
          return reduce2Result;
        },
        items2,
      );
      let obj3 = { top: true, style: tmp.safeArea, children: items3 };
      const SafeAreaPaddingView = guildBoostSlots(6626).SafeAreaPaddingView;
      const obj4 = {
        placeholder: intl.string(guildBoostSlots(1126).t.vf3ZTa),
        onChange: tmp4,
        onClose: BoostingActionCreatorsAll.closeApplyBoostModal,
      };
      const tmp6 = SearchBarNavDefault;
      intl = guildBoostSlots(1126).intl;
      items3 = [closure_10(tmp6, obj4)];
      const obj5 = {
        style: tmp.guildList,
        keyboardShouldPersistTaps: "always",
        children: closure_10(SafeAreaPaddingView2, obj6),
      };
      obj6 = {
        bottom: true,
        children: stateFromStoresArray.map((guild) => {
          let items;
          let obj = {
            accessibilityRole: "button",
            style: closure_3.guildOption,
            onPress() {
              const obj = { guildId: guild.id, guildBoostSlots, intent: importDefault, onResult: importAll };
              const replaced = closure_4.replace(constants.CONFIRMATION, obj);
            },
            children: items,
          };
          const PressableOpacity = guildBoostSlots(closure_3[18]).PressableOpacity;
          const obj2 = { guild, size: guildBoostSlots(closure_3[19]).GuildIconSizes.SMALL, selected: false };
          const tmp = require("GuildIcon");
          items = [closure_1_10(tmp, obj2)];
          const obj3 = { style: closure_3.guildName, children: guild.name };
          items[1] = closure_1_10(guildBoostSlots(closure_3[20]).LegacyText, obj3);
          return closure_1_11(PressableOpacity, obj, guild.id);
        }),
      };
      SafeAreaPaddingView2 = guildBoostSlots(6626).SafeAreaPaddingView;
      items3[1] = closure_10(memo, obj5);
      return closure_11(SafeAreaPaddingView, obj3);
    };
const result = size.fileFinishedImporting(
  "components_native/premium/premium_guild_subscribe_modal/SubscribeModalGuildSelect.tsx",
);

export default tmp4;
