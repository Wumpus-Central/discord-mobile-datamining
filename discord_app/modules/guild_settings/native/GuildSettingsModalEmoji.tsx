// discord_app/modules/guild_settings/native/GuildSettingsModalEmoji.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import RoleSubscriptionEmojiUtils from "../../guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx";
import EmojiActionCreators from "../../../actions/EmojiActionCreators.tsx";
import GuildSettingsModalEmoji_EmojiRow from "GuildSettingsModalEmoji/EmojiRow.tsx";
import HeaderRow from "GuildSettingsModalEmoji/HeaderRow.tsx";
import EmptyServerSettingsEmoji from "../../../design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import GuildStore_mod from "../../../stores/GuildStore.tsx";
import GuildSettingsEmojiStore_mod from "../GuildSettingsEmojiStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import module_12_mod from "../../../../_runtime/metro/00012__.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, guildId, navigation, setOptionsResult, tmp3;

let c10;
let c9;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
function computeEmojiItem(id) {
  return { type: "EMOJI", key: id.id, emoji: id };
}
let react = react_mod;
({ View: hasOwnProperty, FlatList: metroRequire } = react_native);
let GuildStore = GuildStore_mod;
let GuildSettingsEmojiStore = GuildSettingsEmojiStore_mod;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let module_12 = module_12_mod;
let closure_12 = module_12.throttle(EmojiActionCreators.fetchEmoji, 1000);
let createStyles = createStyles_mod;
let obj = {
  loadingContainer: { flex: 1, paddingTop: 40 },
  emptyState: { paddingTop: 30 },
  list: obj2,
  section: obj3,
  titleContainer: { paddingLeft: 16, paddingRight: 16 },
};
obj2 = { paddingHorizontal: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_16 };
let closure_13 = createStyles(obj);
module_12 = module_12_mod;
const computeEmojiItems = module_12.memoize((arr, stateFromStores) => {
  let arr2;
  let arr3;
  let items1;
  let items4;
  const f132019 = (emoji) => !emoji.emoji.animated;
  _require = stateFromStores;
  const found = arr.filter((item) => {
    const obj = RoleSubscriptionEmojiUtils;
    return !obj.isRoleSubscriptionEmoji(item, stateFromStores.id);
  });
  const mapped = found.map(computeEmojiItem);
  const reversed = mapped.reverse();
  const obj2 = require("GuildBoostingUtils");
  const maxEmojiSlots = obj2.getMaxEmojiSlots(stateFromStores);
  const obj3 = module_12;
  [arr2, arr3] = obj3.partition(reversed, f132019);
  _slicedToArray(obj3.partition(reversed, f132019), 2);
  const intl = require("intl").intl;
  const stringResult = intl.string(require("intl").t.sMOuuS);
  const bound = Math.max(maxEmojiSlots - arr2.length, 0);
  const intl2 = require("intl").intl;
  const str = "" + stringResult + " - " + intl2.formatToPlainString(require("intl").t.sgL8sI, { count: bound });
  const formatted = str.toUpperCase();
  const intl3 = require("intl").intl;
  const stringResult1 = intl3.string(require("intl").t.wWjQye);
  const bound1 = Math.max(maxEmojiSlots - arr3.length, 0);
  const intl4 = require("intl").intl;
  const str2 = "" + stringResult1 + " - " + intl4.formatToPlainString(require("intl").t.sgL8sI, { count: bound1 });
  const formatted1 = str2.toUpperCase();
  if (arr2.length > 0) {
    const items = [{ type: "SECTION", key: formatted, section: formatted }];
    HermesBuiltin.arraySpread(items, arr2, 1);
    items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1];
  if (arr3.length > 0) {
    const items3 = [{ type: "SECTION", key: formatted1, section: formatted1 }];
    HermesBuiltin.arraySpread(items3, arr3, 1);
    items4 = items3;
  } else {
    items4 = [];
  }
  HermesBuiltin.arraySpread(items2, items4, tmp14);
  return items2;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (headerDescription) => {
      let closure_8;
      let contentContainerStyle;
      let disabled;
      let first;
      let guild;
      let length;
      let onSelectRolesForEmoji;
      let tmp18;
      let tmp19;
      let tmp7;
      let tmp9;
      const tmp2 = onSelectRolesForEmoji;
      let obj = guild(onSelectRolesForEmoji[14]);
      const cResult = obj.c(45);
      ({ computeEmojiItems, contentContainerStyle, disabled, guild } = headerDescription);
      headerDescription = headerDescription.headerDescription;
      onSelectRolesForEmoji = headerDescription.onSelectRolesForEmoji;
      const uploadDisabled = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildSettingsEmojiStore];
        let num = 0;
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild.id) {
        const fn = function c() {
          const obj = {
            emojis: GuildSettingsEmojiStore.getEmojis(guild.id),
            revision: GuildSettingsEmojiStore.getEmojiRevision(guild.id),
          };
          return obj;
        };
        cResult[1] = guild.id;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = guild(tmp2[15]);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7);
      const emojis = stateFromStoresObject.emojis;
      const revision = stateFromStoresObject.revision;
      const tmpResult2 = guild(tmp2[16]);
      const canManageGuildExpression = tmpResult2.useManageResourcePermissions(guild).canManageGuildExpression;
      if (cResult[3] !== emojis) {
        let items1 = emojis;
        if (emojis == null) {
          items1 = [];
        }
        cResult[3] = emojis;
        cResult[4] = items1;
        tmp9 = items1;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] === computeEmojiItems) {
        if (cResult[6] === guild) {
          let tmp11;
          let tmp16;
          if (cResult[7] === tmp9) {
            tmp11 = cResult[8];
          }
          GuildStore = tmp11;
          const tmp14 = closure_13();
          GuildSettingsEmojiStore = tmp14;
          const ref = emojis.useRef(revision);
          if (cResult[9] !== guild.id) {
            class F {
              constructor() {
                closure_12(guild.id);
              }
            }
            const items2 = [guild.id];
            cResult[9] = guild.id;
            cResult[10] = F;
            cResult[11] = items2;
            tmp16 = items2;
          } else {
            class F {
              constructor() {
                closure_12(guild.id);
              }
            }
            tmp16 = cResult[11];
          }
          const effect = obj4.useEffect(F, tmp16);
          if (cResult[12] === guild.id) {
            class F {
              constructor() {
                closure_12(guild.id);
              }
            }
            const effect1 = obj4.useEffect(tmp18, tmp19);
            if (cResult[16] === canManageGuildExpression) {
              class F {
                constructor() {
                  closure_12(guild.id);
                }
              }
            }
            class P {
              constructor(arg0) {
                let index;
                let item;
                let tmp12;
                let tmp7;
                ({ item, index } = arg0);
                const type = item.type;
                if ("SECTION" === type) {
                  const obj2 = {
                    style: closure_8.section,
                    variant: "text-xs/bold",
                    color: "text-default",
                    children: item.section,
                  };
                  return React4(Text_Text.Text, obj2);
                } else if ("EMOJI" === type) {
                  let type1;
                  if (length[index - 1] != null) {
                    type1 = tmp2.type;
                  }
                  let type2;
                  if (length[index + 1] != null) {
                    type2 = tmp5.type;
                  }
                  const obj = {
                    emoji: item.emoji,
                    guildId: guild.id,
                    disabled: tmp12,
                    onSelectRolesForEmoji,
                    start: "SECTION" === type1,
                    end: tmp7,
                  };
                  tmp12 = uploadDisabled;
                  tmp7 = "SECTION" === type2 || index === length.length - 1;
                  const EmojiRow = GuildSettingsModalEmoji_EmojiRow.EmojiRow;
                  if (!uploadDisabled) {
                    tmp12 = !item.emoji.available;
                  }
                  if (!tmp12) {
                    tmp12 = !canManageGuildExpression(item.emoji);
                  }
                  return React4(EmojiRow, obj);
                } else {
                  return null;
                }
              }
            }
            cResult[16] = canManageGuildExpression;
            cResult[17] = undefined !== disabled && disabled;
            cResult[18] = guild.id;
            cResult[19] = tmp11;
            cResult[20] = onSelectRolesForEmoji;
            cResult[21] = tmp14.section;
            cResult[22] = P;
          }
          const fn2 = function w() {
            if (ref.current < revision) {
              closure_12(guild.id);
            }
            ref.current = revision;
          };
          const items3 = [guild.id, revision];
          cResult[12] = guild.id;
          cResult[13] = revision;
          cResult[14] = fn2;
          cResult[15] = items3;
          tmp18 = fn2;
          tmp19 = items3;
        }
      }
      const emojiItems = computeEmojiItems(tmp9, guild);
      cResult[5] = computeEmojiItems;
      cResult[6] = guild;
      cResult[7] = tmp9;
      cResult[8] = emojiItems;
      tmp11 = emojiItems;
    }
  : (disabled) => {
      let contentContainerStyle;
      let items7;
      let items8;
      let tmp12;
      let tmp15;
      let flag = disabled.disabled;
      ({ computeEmojiItems, contentContainerStyle } = disabled);
      if (flag === undefined) {
        flag = false;
      }
      const guild = disabled.guild;
      const headerDescription = disabled.headerDescription;
      const onSelectRolesForEmoji = disabled.onSelectRolesForEmoji;
      let emojiItems;
      let closure_8;
      let ref;
      const tmp2 = headerDescription;
      let obj = flag(headerDescription[15]);
      const items = [closure_8];
      const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
        const obj = {
          emojis: GuildSettingsEmojiStore.getEmojis(guild.id),
          revision: GuildSettingsEmojiStore.getEmojiRevision(guild.id),
        };
        return obj;
      });
      const emojis = stateFromStoresObject.emojis;
      const revision = stateFromStoresObject.revision;
      let obj2 = flag(headerDescription[16]);
      const canManageGuildExpression = obj2.useManageResourcePermissions(guild).canManageGuildExpression;
      let items1 = emojis;
      if (emojis == null) {
        items1 = [];
      }
      emojiItems = computeEmojiItems(items1, guild);
      const tmp5 = closure_13();
      closure_8 = tmp5;
      ref = emojis.useRef(revision);
      const items2 = [guild.id];
      const effect = emojis.useEffect(() => {
        closure_12(guild.id);
      }, items2);
      const items3 = [guild.id, revision];
      const effect1 = emojis.useEffect(() => {
        if (ref.current < revision) {
          closure_12(guild.id);
        }
        ref.current = revision;
      }, items3);
      const items4 = [guild.id, flag, emojiItems, tmp5, onSelectRolesForEmoji, canManageGuildExpression];
      const items5 = [guild, , , ,];
      let length;
      const callback = emojis.useCallback((arg0) => {
        let index;
        let item;
        let tmp12;
        let tmp7;
        ({ item, index } = arg0);
        const type = item.type;
        if ("SECTION" === type) {
          const obj2 = {
            style: closure_8.section,
            variant: "text-xs/bold",
            color: "text-default",
            children: item.section,
          };
          return React4(Text_Text.Text, obj2);
        } else if ("EMOJI" === type) {
          let type1;
          if (emojiItems[index - 1] != null) {
            type1 = tmp2.type;
          }
          let type2;
          if (emojiItems[index + 1] != null) {
            type2 = tmp5.type;
          }
          const obj = {
            emoji: item.emoji,
            guildId: guild.id,
            disabled: tmp12,
            onSelectRolesForEmoji,
            start: "SECTION" === type1,
            end: tmp7,
          };
          tmp12 = flag;
          tmp7 = "SECTION" === type2 || index === emojiItems.length - 1;
          const EmojiRow = GuildSettingsModalEmoji_EmojiRow.EmojiRow;
          if (!flag) {
            tmp12 = !item.emoji.available;
          }
          if (!tmp12) {
            tmp12 = !canManageGuildExpression(item.emoji);
          }
          return React4(EmojiRow, obj);
        } else {
          return null;
        }
      }, items4);
      const obj3 = emojis;
      const useCallback = emojis.useCallback;
      if (emojis != null) {
        length = emojis.length;
      }
      items5[1] = length;
      items5[2] = headerDescription;
      items5[3] = onSelectRolesForEmoji;
      items5[4] = flag;
      const items6 = [tmp5];
      const callback1 = useCallback(() => {
        let num;
        const obj = {
          guild,
          emojisLength: num,
          description: headerDescription,
          onSelectRolesForEmoji,
          uploadDisabled: flag,
        };
        num = undefined;
        const ConnectedHeaderRow = HeaderRow.ConnectedHeaderRow;
        if (emojis != null) {
          num = emojis.length;
        }
        if (num == null) {
          num = 0;
        }
        return React4(ConnectedHeaderRow, obj);
      }, items5);
      const callback2 = obj3.useCallback(() => {
        let intl;
        let intl2;
        const obj = {
          Illustration: EmptyServerSettingsEmoji.EmptyServerSettingsEmoji,
          style: closure_8.emptyState,
          title: intl.string(intl5.t.lxsmBd),
          body: intl2.string(intl5.t.RBbtMy),
        };
        const EmptyState = native.EmptyState;
        intl = intl5.intl;
        intl2 = intl5.intl;
        return React4(EmptyState, obj);
      }, items6);
      if (null == emojis) {
        const obj4 = { style: tmp5.loadingContainer, children: items7 };
        items7 = [ref(tmp(tmp2[22]).ActivityIndicator, {}), ref(tmp(tmp2[23]).NavScrim, {})];
        tmp15 = closure_10(revision, obj4);
      } else {
        const obj5 = {
          initialNumToRender: 12,
          ListHeaderComponent: callback1,
          ListEmptyComponent: callback2,
          windowSize: 4,
          data: emojiItems,
          keyExtractor: tmp12,
          renderItem: callback,
          contentContainerStyle: items8,
        };
        items8 = [contentContainerStyle, tmp5.list];
        tmp15 = ref(canManageGuildExpression, obj5);
      }
      return tmp15;
    };
let closure_16 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let closure_4;
      let contentContainerStyle;
      let first;
      let isLandingScreen;
      let items1;
      let stateFromStores;
      let tmp6;
      let tmp = guildId;
      let obj = guildId(stateFromStores[14]);
      const cResult = obj.c(18);
      guildId = guildId.guildId;
      ({ contentContainerStyle, isLandingScreen } = guildId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function s() {
          return GuildStore.getGuild(guildId);
        };
        cResult[1] = guildId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(stateFromStores[15]);
      stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      const tmpResult3 = tmp(stateFromStores[24]);
      navigation = tmpResult3.useNavigation();
      const tmp9 = closure_13();
      react = tmp9;
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === isLandingScreen) {
          if (cResult[5] === navigation) {
            let tmp10;
            let tmp11;
            if (cResult[6] === tmp9) {
              tmp10 = cResult[7];
              tmp11 = cResult[8];
            }
            const layoutEffect = react.useLayoutEffect(tmp10, tmp11);
            if (null == stateFromStores) {
              return null;
            } else {
              let tmp15;
              if (cResult[9] !== stateFromStores) {
                const tmpResult4 = tmp(stateFromStores[12]);
                const maxEmojiSlots = tmpResult4.getMaxEmojiSlots(stateFromStores);
                const intl = tmp(tmp2[10]).intl;
                let obj2 = { count: maxEmojiSlots };
                const formatToPlainStringResult = intl.formatToPlainString(tmp(stateFromStores[10]).t.TA1BR0, obj2);
                cResult[9] = stateFromStores;
                cResult[10] = formatToPlainStringResult;
                tmp15 = formatToPlainStringResult;
              } else {
                tmp15 = cResult[10];
              }
              if (cResult[11] === contentContainerStyle) {
                if (cResult[12] === stateFromStores) {
                  let tmp18;
                  let tmp23;
                  let tmp26;
                  if (cResult[13] === tmp15) {
                    tmp18 = cResult[14];
                  }
                  const _Symbol = Symbol;
                  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                    const tmp25 = closure_9(tmp(stateFromStores[23]).NavScrim, {});
                    cResult[15] = tmp25;
                    tmp23 = tmp25;
                  } else {
                    tmp23 = cResult[15];
                  }
                  if (cResult[16] !== tmp18) {
                    const obj3 = { children: items1 };
                    items1 = [tmp18, tmp23];
                    const tmp29 = closure_10(closure_11, obj3);
                    cResult[16] = tmp18;
                    cResult[17] = tmp29;
                    tmp26 = tmp29;
                  } else {
                    tmp26 = cResult[17];
                  }
                  return tmp26;
                }
              }
              const obj4 = {
                guild: stateFromStores,
                headerDescription: tmp15,
                computeEmojiItems,
                contentContainerStyle,
              };
              const tmp22 = closure_9(closure_16, obj4);
              cResult[11] = contentContainerStyle;
              cResult[12] = stateFromStores;
              cResult[13] = tmp15;
              cResult[14] = tmp22;
              tmp18 = tmp22;
            }
          }
        }
      }
      class I {
        constructor() {
          tmp = isLandingScreen;
          if (tmp) {
            tmp2 = closure_2;
            tmp = undefined !== closure_2;
          }
          if (tmp) {
            tmp3 = closure_3;
            obj = { headerTitle: null };
            obj.headerTitle = function headerTitle() {
              let obj2;
              const obj = {
                style: titleContainer.titleContainer,
                children: closure_2_9(guildId(stateFromStores[25]).NavigatorHeader, obj2),
              };
              obj2 = { title: name.name };
              return closure_2_9(closure_2_5, obj);
            };
            setOptionsResult = closure_3.setOptions(obj);
          }
          return;
        }
      }
      const items2 = [navigation, stateFromStores, isLandingScreen, tmp9];
      cResult[3] = stateFromStores;
      cResult[4] = isLandingScreen;
      cResult[5] = navigation;
      cResult[6] = tmp9;
      cResult[7] = I;
      cResult[8] = items2;
      tmp11 = items2;
      tmp10 = I;
    }
  : (contentContainerStyle) => {
      let closure_4;
      let isLandingScreen;
      let items2;
      let require;
      ({ guildId: require, isLandingScreen } = contentContainerStyle);
      let stateFromStores;
      contentContainerStyle = contentContainerStyle.contentContainerStyle;
      let obj = require("get initialized");
      const items = [GuildStore];
      stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(_require));
      let obj2 = require("useNavigation");
      navigation = obj2.useNavigation();
      const tmp5 = closure_13();
      react = tmp5;
      const items1 = [navigation, stateFromStores, isLandingScreen, tmp5];
      const layoutEffect = react.useLayoutEffect(() => {
        let name;
        let titleContainer;
        const tmp = isLandingScreen && undefined !== stateFromStores;
        if (tmp) {
          let obj = {
            headerTitle() {
              let obj2;
              const obj = {
                style: titleContainer.titleContainer,
                children: closure_2_9(require("NavigatorHeader").NavigatorHeader, obj2),
              };
              obj2 = { title: name.name };
              return closure_2_9(closure_2_5, obj);
            },
          };
          navigation.setOptions(obj);
        }
      }, items1);
      if (null == stateFromStores) {
        return null;
      } else {
        const tmpResult = require("GuildBoostingUtils");
        const maxEmojiSlots = tmpResult.getMaxEmojiSlots(stateFromStores);
        const intl = require("intl").intl;
        const obj3 = { count: maxEmojiSlots };
        const obj4 = { children: items2 };
        const obj5 = {
          guild: stateFromStores,
          headerDescription: intl.formatToPlainString(require("intl").t.TA1BR0, obj3),
          computeEmojiItems,
          contentContainerStyle,
        };
        items2 = [closure_9(closure_16, obj5), closure_9(require("NavScrim").NavScrim, {})];
        return closure_10(closure_11, obj4);
      }
    };
function computeSectionItem(intl, length, arg2) {
  const bound = Math.max(arg2 - length, 0);
  intl = intl5.intl;
  const str = "" + intl + " - " + intl.formatToPlainString(intl5.t.sgL8sI, { count: bound });
  const key = str.toUpperCase();
  return { type: "SECTION", key, section: key };
}
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji.tsx");

export default tmp6;
export { computeSectionItem };
export { computeEmojiItem };
export const ManageEmojisModal = tmp5;
