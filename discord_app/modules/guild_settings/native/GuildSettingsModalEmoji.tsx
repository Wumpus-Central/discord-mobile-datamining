// === Module 19055: GuildSettingsModalEmoji ===

// Module 19055 (GuildSettingsModalEmoji)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import native from "native" /* 1202 */;
import RoleSubscriptionEmojiUtils from "RoleSubscriptionEmojiUtils" /* 4925 */;
import Text_Text from "Text/Text" /* 5234 */;
import GuildSettingsModalEmoji_EmojiRow from "GuildSettingsModalEmoji/EmojiRow" /* 19058 */;
import HeaderRow from "HeaderRow" /* 19062 */;
import EmptyServerSettingsEmoji from "EmptyServerSettingsEmoji" /* 19063 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 4845 */;
import GuildSettingsEmojiStore from "GuildSettingsEmojiStore" /* 19056 */;
import apply_mod from "module_12" /* 12 */;

const require = globalThis.__r;

require = fn;
function computeEmojiItem(id) {
  return { type: "EMOJI", key: id.id, emoji: id };
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
let apply = apply_mod;
let closure_11 = apply.throttle(fn(9943).fetchEmoji, 1000);
const createStyles = fn(4971);
let obj = { loadingContainer: { flex: 1, paddingTop: 40 }, emptyState: { paddingTop: 30 }, list: { paddingHorizontal: nativeDefault.space.PX_12 }, section: null, titleContainer: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.section = { paddingVertical: nativeDefault.space.PX_16 };
obj.titleContainer = { paddingLeft: 16, paddingRight: 16 };
let closure_12 = createStyles.createStyles(obj);
let apply = apply_mod;
const computeEmojiItems = apply.memoize((arr, stateFromStores) => {
  _require = stateFromStores;
  const found = arr.filter((item) => !RoleSubscriptionEmojiUtils.isRoleSubscriptionEmoji(item, stateFromStores.id));
  const mapped = found.map(computeEmojiItem);
  const reversed = mapped.reverse();
  const maxEmojiSlots = require("GuildBoostingUtils").getMaxEmojiSlots(stateFromStores);
  const obj2 = require("GuildBoostingUtils");
  [arr2, arr3] = apply.partition(reversed, (emoji) => !emoji.emoji.animated);
  const intl = require("util").intl;
  const tmp3 = _slicedToArray(apply.partition(reversed, (emoji) => !emoji.emoji.animated), 2);
  const bound = Math.max(maxEmojiSlots - arr2.length, 0);
  const intl2 = require("util").intl;
  const stringResult = intl.string(require("util").t.sMOuuS);
  const formatted = "" + intl.string(require("util").t.sMOuuS) + " - " + intl2.formatToPlainString(require("util").t.sgL8sI, { count: bound }).toUpperCase();
  const intl3 = require("util").intl;
  const str = "" + intl.string(require("util").t.sMOuuS) + " - " + intl2.formatToPlainString(require("util").t.sgL8sI, { count: bound });
  const bound1 = Math.max(maxEmojiSlots - arr3.length, 0);
  const intl4 = require("util").intl;
  const stringResult1 = intl3.string(require("util").t.wWjQye);
  const formatted1 = "" + intl3.string(require("util").t.wWjQye) + " - " + intl4.formatToPlainString(require("util").t.sgL8sI, { count: bound1 }).toUpperCase();
  if (arr2.length > 0) {
    const items = [{ type: "SECTION", key: formatted, section: formatted }];
    HermesBuiltin.arraySpread(arr2, 1);
    let items1 = items;
  } else {
    items1 = [];
  }
  const items2 = [...items1];
  if (arr3.length > 0) {
    const items3 = [{ type: "SECTION", key: formatted1, section: formatted1 }];
    HermesBuiltin.arraySpread(arr3, 1);
    let items4 = items3;
  } else {
    items4 = [];
  }
  HermesBuiltin.arraySpread(items4, tmp13);
  return items2;
});
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ManageEmojisModal(headerDescription) {
  const cResult = guild(onSelectRolesForEmoji[14]).c(47);
  ({ computeEmojiItems, contentContainerStyle, disabled, guild } = headerDescription);
  headerDescription = headerDescription.headerDescription;
  onSelectRolesForEmoji = headerDescription.onSelectRolesForEmoji;
  const uploadDisabled = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildSettingsEmojiStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guild.id) {
    const fn = function c() {
      return { emojis: GuildSettingsEmojiStore.getEmojis(guild.id), revision: GuildSettingsEmojiStore.getEmojiRevision(guild.id) };
    };
    cResult[1] = guild.id;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = guild(onSelectRolesForEmoji[14]);
  const stateFromStoresObject = guild(onSelectRolesForEmoji[15]).useStateFromStoresObject(first, tmp7);
  const emojis = stateFromStoresObject.emojis;
  const revision = stateFromStoresObject.revision;
  const tmpResult = guild(onSelectRolesForEmoji[15]);
  const canManageGuildExpression = guild(onSelectRolesForEmoji[16]).useManageResourcePermissions(guild).canManageGuildExpression;
  if (cResult[3] !== emojis) {
    let items1 = emojis;
    if (emojis == null) {
      items1 = [];
    }
    cResult[3] = emojis;
    cResult[4] = items1;
    let tmp9 = items1;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === computeEmojiItems) {
    if (cResult[6] === guild) {
      if (cResult[7] === tmp9) {
        let tmp11 = cResult[8];
      }
      GuildSettingsEmojiStore = tmp11;
      const tmp14 = closure_12();
      closure_8 = tmp14;
      emojis.useRef(revision);
      if (cResult[9] !== guild.id) {
        class N {
          constructor() {
            tmp = closure_11(guild.id);
            return;
          }
        }
        const items2 = [guild.id];
        cResult[9] = guild.id;
        cResult[10] = N;
        cResult[11] = items2;
        let tmp16 = items2;
        class L {
          constructor() {
            tmp = closure_9;
            tmp2 = revision;
            if (closure_9.current < revision) {
              tmp3 = closure_11;
              tmp4 = guild;
              tmp5 = closure_11(guild.id);
            }
            tmp.current = tmp2;
            return;
          }
        }
      } else {
        class N {
          constructor() {
            tmp = closure_11(guild.id);
            return;
          }
        }
        tmp16 = cResult[11];
      }
      const effect = obj4.useEffect(tmp15, tmp16);
      if (cResult[12] === guild.id) {
        class N {
          constructor() {
            tmp = closure_11(guild.id);
            return;
          }
        }
        const effect1 = obj4.useEffect(L, tmp19);
        if (cResult[16] === canManageGuildExpression) {
          class N {
            constructor() {
              tmp = closure_11(guild.id);
              return;
            }
          }
        }
        class P {
          constructor(arg0) {
            ({ item, index } = headerDescription);
            type = item.type;
            if ("SECTION" === type) {
              tmp15 = jsx;
              tmp16 = closure_0;
              tmp17 = closure_2;
              obj1 = { style: null, variant: "text-xs/bold", color: "text-default", children: null };
              tmp18 = closure_8;
              obj1.style = closure_8.section;
              obj1.children = item.section;
              return jsx(closure_0(closure_2[17]).Text, obj1);
            } else {
              str = "EMOJI";
              if ("EMOJI" === type) {
                arr = closure_7;
                num = 1;
                tmp2 = closure_7[index - 1];
                tmp3 = null;
                type1 = undefined;
                if (tmp2 != null) {
                  type1 = tmp2.type;
                }
                tmp5 = arr[index + 1];
                type2 = undefined;
                if (tmp5 != null) {
                  type2 = tmp5.type;
                }
                tmp7 = "SECTION" === type2 || index === arr.length - 1;
                tmp9 = closure_0;
                tmp10 = closure_2;
                tmp8 = jsx;
                obj = { emoji: null, guildId: null, disabled: null, onSelectRolesForEmoji: null, start: null, end: null };
                obj.emoji = item.emoji;
                tmp11 = guild;
                obj.guildId = guild.id;
                tmp12 = disabled;
                if (!disabled) {
                  tmp12 = !item.emoji.available;
                }
                if (!tmp12) {
                  tmp13 = canManageGuildExpression;
                  tmp12 = !canManageGuildExpression(item.emoji);
                }
                obj.disabled = tmp12;
                tmp14 = onSelectRolesForEmoji;
                obj.onSelectRolesForEmoji = onSelectRolesForEmoji;
                obj.start = "SECTION" === type1;
                obj.end = tmp7;
                return tmp8(closure_0(closure_2[18]).EmojiRow, obj);
              } else {
                tmp = null;
                return null;
              }
            }
          }
        }
        cResult[16] = canManageGuildExpression;
        cResult[17] = tmp4;
        cResult[18] = guild.id;
        class L {
          constructor() {
            tmp = closure_9;
            tmp2 = revision;
            if (closure_9.current < revision) {
              tmp3 = closure_11;
              tmp4 = guild;
              tmp5 = closure_11(guild.id);
            }
            tmp.current = tmp2;
            return;
          }
        }
        cResult[19] = tmp11;
        cResult[20] = onSelectRolesForEmoji;
        cResult[21] = tmp14.section;
        cResult[22] = P;
      }
      class L {
        constructor() {
          tmp = closure_9;
          tmp2 = revision;
          if (closure_9.current < revision) {
            tmp3 = closure_11;
            tmp4 = guild;
            tmp5 = closure_11(guild.id);
          }
          tmp.current = tmp2;
          return;
        }
      }
      const items3 = [guild.id, revision];
      cResult[12] = guild.id;
      cResult[13] = revision;
      cResult[14] = L;
      cResult[15] = items3;
      tmp19 = items3;
    }
  }
  const emojiItems = computeEmojiItems(tmp9, guild);
  cResult[5] = computeEmojiItems;
  cResult[6] = guild;
  cResult[7] = tmp9;
  cResult[8] = emojiItems;
  tmp11 = emojiItems;
  const tmpResult2 = guild(onSelectRolesForEmoji[16]);
}) : (function ManageEmojisModal(disabled) {
  let flag = disabled.disabled;
  ({ computeEmojiItems, contentContainerStyle } = disabled);
  if (flag === undefined) {
    flag = false;
  }
  guild = disabled.guild;
  const headerDescription = disabled.headerDescription;
  const onSelectRolesForEmoji = disabled.onSelectRolesForEmoji;
  let emojiItems;
  closure_8 = undefined;
  ref = undefined;
  const items = [emojiItems];
  const stateFromStoresObject = flag(headerDescription[15]).useStateFromStoresObject(items, () => ({ emojis: GuildSettingsEmojiStore.getEmojis(guild.id), revision: GuildSettingsEmojiStore.getEmojiRevision(guild.id) }));
  const emojis = stateFromStoresObject.emojis;
  const revision = stateFromStoresObject.revision;
  let obj = flag(headerDescription[15]);
  const canManageGuildExpression = flag(headerDescription[16]).useManageResourcePermissions(guild).canManageGuildExpression;
  let items1 = emojis;
  if (emojis == null) {
    items1 = [];
  }
  emojiItems = computeEmojiItems(items1, guild);
  const tmp5 = closure_12();
  closure_8 = tmp5;
  ref = emojis.useRef(revision);
  const items2 = [guild.id];
  const effect = emojis.useEffect(() => {
    closure_11(guild.id);
  }, items2);
  const items3 = [guild.id, revision];
  const effect1 = emojis.useEffect(() => {
    if (ref.current < revision) {
      closure_11(guild.id);
    }
    ref.current = revision;
  }, items3);
  const items4 = [guild.id, flag, emojiItems, tmp5, onSelectRolesForEmoji, canManageGuildExpression];
  const items5 = [guild, , , , ];
  let length;
  const callback = emojis.useCallback((arg0) => {
    ({ item, index } = arg0);
    const type = item.type;
    if ("SECTION" === type) {
      const obj2 = { style: closure_8.section, variant: "text-xs/bold", color: "text-default", children: item.section };
      return closure_2_8(Text_Text.Text, obj2);
    } else if ("EMOJI" === type) {
      let type1;
      if (emojiItems[index - 1] != null) {
        type1 = tmp2.type;
      }
      let type2;
      if (emojiItems[index + 1] != null) {
        type2 = tmp5.type;
      }
      const obj = { emoji: item.emoji, guildId: guild.id, disabled: null, onSelectRolesForEmoji: null, start: null, end: null };
      let tmp12 = flag;
      if (!flag) {
        tmp12 = !item.emoji.available;
      }
      if (!tmp12) {
        tmp12 = !canManageGuildExpression(item.emoji);
      }
      obj.disabled = tmp12;
      obj.onSelectRolesForEmoji = onSelectRolesForEmoji;
      obj.start = "SECTION" === type1;
      obj.end = "SECTION" === type2 || index === emojiItems.length - 1;
      return closure_2_8(GuildSettingsModalEmoji_EmojiRow.EmojiRow, obj);
    } else {
      return null;
    }
  }, items4);
  if (emojis != null) {
    length = emojis.length;
  }
  items5[1] = length;
  items5[2] = headerDescription;
  items5[3] = onSelectRolesForEmoji;
  items5[4] = flag;
  const items6 = [tmp5];
  const callback1 = emojis.useCallback(() => {
    const obj = { guild, emojisLength: null, description: null, onSelectRolesForEmoji: null, uploadDisabled: null };
    let num;
    if (emojis != null) {
      num = emojis.length;
    }
    if (num == null) {
      num = 0;
    }
    obj.emojisLength = num;
    obj.description = headerDescription;
    obj.onSelectRolesForEmoji = onSelectRolesForEmoji;
    obj.uploadDisabled = flag;
    return closure_2_8(HeaderRow.ConnectedHeaderRow, obj);
  }, items5);
  const callback2 = emojis.useCallback(() => {
    const obj = { Illustration: EmptyServerSettingsEmoji.EmptyServerSettingsEmoji, style: closure_8.emptyState, title: null, body: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.lxsmBd);
    const intl2 = util.intl;
    obj.body = intl2.string(util.t.RBbtMy);
    return closure_2_8(native.EmptyState, obj);
  }, items6);
  if (null == emojis) {
    const obj4 = { style: tmp5.loadingContainer, children: null };
    const items7 = [closure_8(tmp(tmp2[22]).ActivityIndicator, {}), closure_8(tmp(tmp2[23]).NavScrim, {})];
    obj4.children = items7;
    let tmp14 = ref(revision, obj4);
  } else {
    const obj5 = {
      ListHeaderComponent: callback1,
      ListEmptyComponent: callback2,
      data: emojiItems,
      keyExtractor: tmp12,
      getItemType(type) {
          return type.type;
        },
      renderItem: callback,
      maintainVisibleContentPosition: { disabled: true },
      contentContainerStyle: null
    };
    const items8 = [contentContainerStyle, tmp5.list];
    obj5.contentContainerStyle = items8;
    tmp14 = closure_8(tmp(tmp2[24]).FlashList, obj5);
  }
  return tmp14;
});
let closure_15 = tmp3;
ReactCompilerGating = fn(558);
let obj4 = { paddingVertical: nativeDefault.space.PX_16 };
function computeSectionItem(intl, length, arg2) {
  const bound = Math.max(arg2 - length, 0);
  intl = util.intl;
  const key = "" + intl + " - " + intl.formatToPlainString(util.t.sgL8sI, { count: bound }).toUpperCase();
  return { type: "SECTION", key, section: key };
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsModalEmoji(guildId) {
  const cResult = guildId(stateFromStores[14]).c(18);
  guildId = guildId.guildId;
  ({ contentContainerStyle, isLandingScreen } = guildId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function c() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = guildId(stateFromStores[14]);
  stateFromStores = guildId(stateFromStores[15]).useStateFromStores(first, tmp6);
  const tmpResult = guildId(stateFromStores[15]);
  const navigation = guildId(stateFromStores[25]).useNavigation();
  const tmp9 = closure_12();
  noop = tmp9;
  if (cResult[3] === stateFromStores) {
    if (cResult[4] === isLandingScreen) {
      if (cResult[5] === navigation) {
        if (cResult[6] === tmp9) {
          let tmp10 = cResult[7];
          let tmp11 = cResult[8];
        }
        const layoutEffect = noop.useLayoutEffect(tmp10, tmp11);
        if (null == stateFromStores) {
          return null;
        } else {
          if (cResult[9] !== stateFromStores) {
            const maxEmojiSlots = tmp(tmp2[12]).getMaxEmojiSlots(stateFromStores);
            const intl = tmp(tmp2[10]).intl;
            const obj2 = { count: maxEmojiSlots };
            const formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[10]).t.TA1BR0, obj2);
            cResult[9] = stateFromStores;
            cResult[10] = formatToPlainStringResult;
            let tmp15 = formatToPlainStringResult;
            const tmpResult4 = tmp(tmp2[12]);
          } else {
            tmp15 = cResult[10];
          }
          if (cResult[11] === contentContainerStyle) {
            if (cResult[12] === stateFromStores) {
              if (cResult[13] === tmp15) {
                let tmp18 = cResult[14];
              }
              const _Symbol = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp25 = closure_8(tmp(tmp2[23]).NavScrim, {});
                cResult[15] = tmp25;
                let tmp23 = tmp25;
              } else {
                tmp23 = cResult[15];
              }
              if (cResult[16] !== tmp18) {
                const obj3 = { children: null };
                const items1 = [tmp18, tmp23];
                obj3.children = items1;
                const tmp29 = ref(closure_10, obj3);
                cResult[16] = tmp18;
                cResult[17] = tmp29;
                let tmp26 = tmp29;
              } else {
                tmp26 = cResult[17];
              }
              return tmp26;
            }
          }
          const obj4 = { guild: stateFromStores, headerDescription: tmp15, computeEmojiItems, contentContainerStyle };
          const tmp22 = closure_8(closure_15, obj4);
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
      if (isLandingScreen) {
        tmp2 = closure_2;
        tmp = undefined !== closure_2;
      }
      if (tmp) {
        tmp3 = closure_3;
        obj = { headerTitle: null };
        obj.headerTitle = function headerTitle() {
          const obj = { style: titleContainer.titleContainer, children: closure_2_8(guildId(stateFromStores[26]).NavigatorHeader, { title: name.name }) };
          return closure_2_8(View, obj);
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
  const tmpResult3 = guildId(stateFromStores[25]);
}) : (function GuildSettingsModalEmoji(contentContainerStyle) {
  ({ guildId: require, isLandingScreen } = contentContainerStyle);
  let stateFromStores;
  const items = [GuildStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(_require));
  let obj = require("initialize");
  const navigation = require("useNavigation").useNavigation();
  const tmp5 = closure_12();
  noop = tmp5;
  const items1 = [navigation, stateFromStores, isLandingScreen, tmp5];
  const layoutEffect = noop.useLayoutEffect(() => {
    let tmp = isLandingScreen;
    if (isLandingScreen) {
      tmp = undefined !== stateFromStores;
    }
    if (tmp) {
      let obj = {
        headerTitle() {
            const obj = { style: titleContainer.titleContainer, children: closure_2_8(require("NavigatorHeader").NavigatorHeader, { title: name.name }) };
            return closure_2_8(View, obj);
          }
      };
      navigation.setOptions(obj);
    }
  }, items1);
  if (null == stateFromStores) {
    return null;
  } else {
    const maxEmojiSlots = require("GuildBoostingUtils").getMaxEmojiSlots(stateFromStores);
    const intl = require("util").intl;
    const obj3 = { count: maxEmojiSlots };
    const obj4 = { children: null };
    const obj5 = { guild: stateFromStores, headerDescription: intl.formatToPlainString(require("util").t.TA1BR0, obj3), computeEmojiItems, contentContainerStyle: contentContainerStyle.contentContainerStyle };
    const items2 = [closure_8(closure_15, obj5), closure_8(require("NavScrim").NavScrim, {})];
    obj4.children = items2;
    return ref(closure_10, obj4);
  }
  const obj2 = require("useNavigation");
});
export { computeSectionItem };
export { computeEmojiItem };
export const ManageEmojisModal = tmp3;