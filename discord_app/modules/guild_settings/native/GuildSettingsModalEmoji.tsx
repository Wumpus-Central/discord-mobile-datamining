// discord_app/modules/guild_settings/native/GuildSettingsModalEmoji.tsx
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_7 from "createGuildRecordFromRust" /* 1910 */;
import closure_8 from "initialize" /* 16783 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importDefaultResult from "apply" /* 12 */;
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { getGuildTierFromGuild } from "../../../utils/GuildBoostingUtils.tsx";

require = arg1;
function computeEmojiItem(id) {
  return { type: "EMOJI", key: id.id, emoji: id };
}
class ManageEmojisModal {
  constructor(arg0) {
    flag = global.disabled;
    ({ computeEmojiItems, contentContainerStyle } = global);
    if (flag === undefined) {
      flag = false;
    }
    c0 = flag;
    guild = global.guild;
    headerDescription = global.headerDescription;
    onSelectRolesForEmoji = global.onSelectRolesForEmoji;
    emojis = undefined;
    revision = undefined;
    canManageGuildExpression = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    closure_9 = undefined;
    tmp = c0;
    tmp2 = headerDescription;
    obj = require("initialize");
    items = [];
    items[0] = closure_8;
    stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ emojis: store.getEmojis(guild.id), revision: store.getEmojiRevision(guild.id) }));
    emojis = stateFromStoresObject.emojis;
    revision = stateFromStoresObject.revision;
    obj2 = require("canManageResource");
    canManageGuildExpression = obj2.useManageResourcePermissions(guild).canManageGuildExpression;
    items1 = emojis;
    if (emojis == null) {
      items1 = [];
    }
    emojiItems = computeEmojiItems(items1, guild);
    closure_7 = emojiItems;
    tmp5 = closure_13();
    closure_8 = tmp5;
    obj3 = emojis;
    closure_9 = emojis.useRef(revision);
    items2 = [];
    items2[0] = guild.id;
    effect = emojis.useEffect(() => {
      closure_1_12(guild.id);
    }, items2);
    items3 = [, ];
    items3[0] = guild.id;
    items3[1] = revision;
    effect1 = emojis.useEffect(() => {
      if (ref.current < revision) {
        closure_1_12(guild.id);
      }
      ref.current = revision;
    }, items3);
    items4 = [, , , , , ];
    items4[0] = guild.id;
    items4[1] = flag;
    items4[2] = emojiItems;
    items4[3] = tmp5;
    items4[4] = onSelectRolesForEmoji;
    items4[5] = canManageGuildExpression;
    items5 = [, , , , ];
    items5[0] = guild;
    length = undefined;
    callback = emojis.useCallback((arg0) => {
      ({ item, index } = arg0);
      let type = item.type;
      if ("SECTION" === type) {
        let obj = { style: null, variant: "text-xs/bold", color: "text-default", children: null };
        obj[0] = store.section;
        obj[3] = item.section;
        return ref(flag(headerDescription[15]).Text, obj);
      } else if ("EMOJI" === type) {
        type = undefined;
        if (emojiItems[index - 1] != null) {
          type = tmp2.type;
        }
        let type1;
        if (emojiItems[index + 1] != null) {
          type1 = tmp5.type;
        }
        obj = { emoji: null, guildId: null, disabled: null, onSelectRolesForEmoji: null, start: null, end: null };
        obj[0] = item.emoji;
        obj[1] = guild.id;
        let tmp12 = flag;
        if (!flag) {
          tmp12 = !item.emoji.available;
        }
        if (!tmp12) {
          tmp12 = !canManageGuildExpression(item.emoji);
        }
        obj[2] = tmp12;
        obj[3] = onSelectRolesForEmoji;
        obj[4] = "SECTION" === type;
        obj[5] = "SECTION" === type1 || index === emojiItems.length - 1;
        return ref(flag(headerDescription[16]).EmojiRow, obj);
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
    items6 = [];
    items6[0] = tmp5;
    callback1 = emojis.useCallback(() => {
      const obj = { guild, emojisLength: null, description: null, onSelectRolesForEmoji: null, uploadDisabled: null };
      let num;
      if (emojis != null) {
        num = emojis.length;
      }
      if (num == null) {
        num = 0;
      }
      obj[1] = num;
      obj[2] = headerDescription;
      obj[3] = onSelectRolesForEmoji;
      obj[4] = flag;
      return closure_9(flag(headerDescription[17]).ConnectedHeaderRow, obj);
    }, items5);
    callback2 = obj3.useCallback(() => {
      const obj = { Illustration: flag(headerDescription[19]).EmptyServerSettingsEmoji, style: store.emptyState, title: null, body: null };
      const intl = flag(headerDescription[10]).intl;
      obj[2] = intl.string(flag(headerDescription[10]).t.lxsmBd);
      const intl2 = flag(headerDescription[10]).intl;
      obj[3] = intl2.string(flag(headerDescription[10]).t.RBbtMy);
      return ref(flag(headerDescription[18]).EmptyState, obj);
    }, items6);
    if (null == emojis) {
      tmp16 = jsxs;
      tmp17 = revision;
      obj = { style: null, children: null };
      obj[0] = tmp5.loadingContainer;
      tmp18 = closure_9;
      items7 = [, ];
      items7[0] = closure_9(require("ActivityIndicator").ActivityIndicator, {});
      items7[1] = closure_9(require("NavScrim").NavScrim, {});
      obj[1] = items7;
      tmp15 = jsxs(revision, obj);
    } else {
      tmp13 = closure_9;
      tmp14 = canManageGuildExpression;
      obj1 = { initialNumToRender: 12, ListHeaderComponent: null, ListEmptyComponent: null, windowSize: 4, data: null, keyExtractor: null, renderItem: null, contentContainerStyle: null };
      obj1[1] = callback1;
      obj1[2] = callback2;
      obj1[4] = emojiItems;
      obj1[5] = tmp12;
      obj1[6] = callback;
      items8 = [, ];
      items8[0] = contentContainerStyle;
      items8[1] = tmp5.list;
      obj1[7] = items8;
      tmp15 = closure_9(canManageGuildExpression, obj1);
    }
    return tmp15;
  }
}
({ View: c5, FlatList: closure_6 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
let closure_12 = importDefaultResult.throttle(require("_updateEmoji").fetchEmoji, 1000);
let obj = { loadingContainer: { flex: 1, paddingTop: 40 }, emptyState: { paddingTop: 30 }, list: null, section: null, titleContainer: null };
obj = { paddingHorizontal: ThemesDefault.space.PX_12 };
obj[2] = obj;
createCacheKey = { paddingVertical: ThemesDefault.space.PX_16 };
obj[3] = createCacheKey;
obj[4] = { paddingLeft: 16, paddingRight: 16 };
let closure_13 = createCacheKey.createStyles(obj);
let closure_15 = importDefaultResult.memoize((arr, stateFromStores) => {
  const _require = stateFromStores;
  const found = arr.filter((roles) => !stateFromStores(closure_1_2[11]).isRoleSubscriptionEmoji(roles, stateFromStores.id));
  const mapped = found.map(computeEmojiItem);
  const reversed = mapped.reverse();
  const maxEmojiSlots = _getGuildTierFromGuild.getMaxEmojiSlots(stateFromStores);
  const obj2 = _getGuildTierFromGuild;
  const obj3 = importDefaultResult;
  [arr2, arr3] = callback(importDefaultResult.partition(reversed, (emoji) => !emoji.emoji.animated), 2);
  const intl = _getSystemLocale.intl;
  const tmp3 = callback(importDefaultResult.partition(reversed, (emoji) => !emoji.emoji.animated), 2);
  const bound = Math.max(maxEmojiSlots - arr2.length, 0);
  const intl2 = _getSystemLocale.intl;
  const stringResult = intl.string(_getSystemLocale.t.sMOuuS);
  const formatted = "" + intl.string(_getSystemLocale.t.sMOuuS) + " - " + intl2.formatToPlainString(_getSystemLocale.t.sgL8sI, { count: bound }).toUpperCase();
  const intl3 = _getSystemLocale.intl;
  const str = "" + intl.string(_getSystemLocale.t.sMOuuS) + " - " + intl2.formatToPlainString(_getSystemLocale.t.sgL8sI, { count: bound });
  const bound1 = Math.max(maxEmojiSlots - arr3.length, 0);
  const intl4 = _getSystemLocale.intl;
  const stringResult1 = intl3.string(_getSystemLocale.t.wWjQye);
  const formatted1 = "" + intl3.string(_getSystemLocale.t.wWjQye) + " - " + intl4.formatToPlainString(_getSystemLocale.t.sgL8sI, { count: bound1 }).toUpperCase();
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
const importDefaultResult1 = importDefaultResult;
const result = require("set").fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji.tsx");

export default function GuildSettingsModalEmoji(contentContainerStyle) {
  ({ guildId: require, isLandingScreen } = contentContainerStyle);
  let stateFromStores;
  let navigation;
  let React;
  let obj = require(stateFromStores[13]);
  const items = [closure_7];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_7.getGuild(closure_0));
  obj1 = require(stateFromStores[22]);
  navigation = obj1.useNavigation();
  const tmp5 = callback4();
  React = tmp5;
  const items1 = [navigation, stateFromStores, isLandingScreen, tmp5];
  const layoutEffect = React.useLayoutEffect(() => {
    let tmp = isLandingScreen;
    if (isLandingScreen) {
      tmp = undefined !== stateFromStores;
    }
    if (tmp) {
      let obj = { headerTitle: null };
      obj[0] = function headerTitle() {
        obj = { style: titleContainer.titleContainer, children: closure_1_9(closure_1_0(closure_1_2[23]).NavigatorHeader, obj) };
        obj = { title: name.name };
        return closure_1_9(closure_1_5, obj);
      };
      navigation.setOptions(obj);
    }
  }, items1);
  if (null == stateFromStores) {
    return null;
  } else {
    const maxEmojiSlots = tmp(tmp2[12]).getMaxEmojiSlots(stateFromStores);
    const intl = tmp(tmp2[10]).intl;
    obj = { count: null };
    obj[0] = maxEmojiSlots;
    obj = { children: null };
    obj1 = { guild: null, headerDescription: null, computeEmojiItems: null, contentContainerStyle: null };
    obj1[0] = stateFromStores;
    obj1[1] = intl.formatToPlainString(tmp(tmp2[10]).t.TA1BR0, obj);
    obj1[2] = closure_15;
    obj1[3] = contentContainerStyle.contentContainerStyle;
    const items2 = [callback2(ManageEmojisModal, obj1), callback2(tmp(tmp2[21]).NavScrim, {})];
    obj[0] = items2;
    return callback3(closure_11, obj);
  }
};
export const computeSectionItem = function computeSectionItem(intl, length, arg2) {
  const bound = Math.max(arg2 - length, 0);
  intl = getSystemLocale.intl;
  const key = "" + intl + " - " + intl.formatToPlainString(getSystemLocale.t.sgL8sI, { count: bound }).toUpperCase();
  return { type: "SECTION", key, section: key };
};
export { computeEmojiItem };
export { ManageEmojisModal };