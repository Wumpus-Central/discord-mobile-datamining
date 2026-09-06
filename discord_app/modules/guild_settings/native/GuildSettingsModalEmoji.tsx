// discord_app/modules/guild_settings/native/GuildSettingsModalEmoji.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import RoleSubscriptionEmojiUtils from "../../guild_role_subscriptions/RoleSubscriptionEmojiUtils.tsx";
import GuildSettingsModalEmoji_EmojiRow from "GuildSettingsModalEmoji/EmojiRow.tsx";
import HeaderRow from "GuildSettingsModalEmoji/HeaderRow.tsx";
import EmptyServerSettingsEmoji from "../../../design/components/Illustration/native/redesign/generated/EmptyServerSettingsEmoji.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import GuildSettingsEmojiStore from "../GuildSettingsEmojiStore.tsx";
import apply from "../../../../_runtime/metro/00012__.js";

require = fn;
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
    obj = c0(headerDescription[13]);
    items = [];
    items[0] = closure_8;
    stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({
      emojis: GuildSettingsEmojiStore.getEmojis(guild.id),
      revision: GuildSettingsEmojiStore.getEmojiRevision(guild.id),
    }));
    emojis = stateFromStoresObject.emojis;
    revision = stateFromStoresObject.revision;
    obj2 = c0(headerDescription[14]);
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
      closure_12(guild.id);
    }, items2);
    items3 = [,];
    items3[0] = guild.id;
    items3[1] = revision;
    effect1 = emojis.useEffect(() => {
      if (ref.current < revision) {
        closure_12(guild.id);
      }
      ref.current = revision;
    }, items3);
    items4 = [, , , , ,];
    items4[0] = guild.id;
    items4[1] = flag;
    items4[2] = emojiItems;
    items4[3] = tmp5;
    items4[4] = onSelectRolesForEmoji;
    items4[5] = canManageGuildExpression;
    items5 = [, , , ,];
    items5[0] = guild;
    length = undefined;
    callback = emojis.useCallback((arg0) => {
      ({ item, index } = arg0);
      let type = item.type;
      if ("SECTION" === type) {
        let obj = { style: closure_8.section, variant: "text-xs/bold", color: "text-default", children: item.section };
        return React7(Text_Text.Text, obj);
      } else if ("EMOJI" === type) {
        type = undefined;
        if (emojiItems[index - 1] != null) {
          type = tmp2.type;
        }
        let type1;
        if (emojiItems[index + 1] != null) {
          type1 = tmp5.type;
        }
        obj = {
          emoji: item.emoji,
          guildId: guild.id,
          disabled: null,
          onSelectRolesForEmoji: null,
          start: null,
          end: null,
        };
        let tmp12 = flag;
        if (!flag) {
          tmp12 = !item.emoji.available;
        }
        if (!tmp12) {
          tmp12 = !canManageGuildExpression(item.emoji);
        }
        obj.disabled = tmp12;
        obj.onSelectRolesForEmoji = onSelectRolesForEmoji;
        obj.start = "SECTION" === type;
        obj.end = "SECTION" === type1 || index === emojiItems.length - 1;
        return React7(GuildSettingsModalEmoji_EmojiRow.EmojiRow, obj);
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
      obj.emojisLength = num;
      obj.description = headerDescription;
      obj.onSelectRolesForEmoji = onSelectRolesForEmoji;
      obj.uploadDisabled = flag;
      return React7(HeaderRow.ConnectedHeaderRow, obj);
    }, items5);
    callback2 = obj3.useCallback(() => {
      const obj = {
        Illustration: EmptyServerSettingsEmoji.EmptyServerSettingsEmoji,
        style: closure_8.emptyState,
        title: null,
        body: null,
      };
      const intl = util.intl;
      obj.title = intl.string(util.t.lxsmBd);
      const intl2 = util.intl;
      obj.body = intl2.string(util.t.RBbtMy);
      return React7(native.EmptyState, obj);
    }, items6);
    if (null == emojis) {
      tmp16 = jsxs;
      tmp17 = revision;
      obj = { style: null, children: null };
      obj.style = tmp5.loadingContainer;
      tmp18 = closure_9;
      items7 = [,];
      items7[0] = closure_9(tmp(tmp2[20]).ActivityIndicator, {});
      items7[1] = closure_9(tmp(tmp2[21]).NavScrim, {});
      obj.children = items7;
      tmp15 = jsxs(revision, obj);
    } else {
      tmp13 = closure_9;
      tmp14 = canManageGuildExpression;
      obj1 = {
        initialNumToRender: 12,
        ListHeaderComponent: null,
        ListEmptyComponent: null,
        windowSize: 4,
        data: null,
        keyExtractor: null,
        renderItem: null,
        contentContainerStyle: null,
      };
      obj1.ListHeaderComponent = callback1;
      obj1.ListEmptyComponent = callback2;
      obj1.data = emojiItems;
      obj1.keyExtractor = tmp12;
      obj1.renderItem = callback;
      items8 = [,];
      items8[0] = contentContainerStyle;
      items8[1] = tmp5.list;
      obj1.contentContainerStyle = items8;
      tmp15 = closure_9(canManageGuildExpression, obj1);
    }
    return tmp15;
  }
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, FlatList: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let closure_12 = apply.throttle(fn(10336).fetchEmoji, 1000);
fn(4560);
let obj = {
  loadingContainer: { flex: 1, paddingTop: 40 },
  emptyState: { paddingTop: 30 },
  list: null,
  section: null,
  titleContainer: null,
};
obj = { paddingHorizontal: nativeDefault.space.PX_12 };
obj.list = obj;
const createStyles = { paddingVertical: nativeDefault.space.PX_16 };
obj.section = createStyles;
obj.titleContainer = { paddingLeft: 16, paddingRight: 16 };
createStyles.createStyles(obj);
const computeEmojiItems = apply.memoize((arr, stateFromStores) => {
  _require = stateFromStores;
  const found = arr.filter((item) => !RoleSubscriptionEmojiUtils.isRoleSubscriptionEmoji(item, stateFromStores.id));
  const mapped = found.map(computeEmojiItem);
  const reversed = mapped.reverse();
  const maxEmojiSlots = require("GuildBoostingUtils").getMaxEmojiSlots(stateFromStores);
  const obj2 = require("GuildBoostingUtils");
  [arr2, arr3] = _slicedToArray(
    apply.partition(reversed, (emoji) => !emoji.emoji.animated),
    2,
  );
  const intl = require("util").intl;
  const tmp3 = _slicedToArray(
    apply.partition(reversed, (emoji) => !emoji.emoji.animated),
    2,
  );
  const bound = Math.max(maxEmojiSlots - arr2.length, 0);
  const intl2 = require("util").intl;
  const stringResult = intl.string(require("util").t.sMOuuS);
  const formatted =
    "" +
    intl.string(require("util").t.sMOuuS) +
    " - " +
    intl2.formatToPlainString(require("util").t.sgL8sI, { count: bound }).toUpperCase();
  const intl3 = require("util").intl;
  const str =
    "" +
    intl.string(require("util").t.sMOuuS) +
    " - " +
    intl2.formatToPlainString(require("util").t.sgL8sI, { count: bound });
  const bound1 = Math.max(maxEmojiSlots - arr3.length, 0);
  const intl4 = require("util").intl;
  const stringResult1 = intl3.string(require("util").t.wWjQye);
  const formatted1 =
    "" +
    intl3.string(require("util").t.wWjQye) +
    " - " +
    intl4.formatToPlainString(require("util").t.sgL8sI, { count: bound1 }).toUpperCase();
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalEmoji.tsx");

export default function GuildSettingsModalEmoji(contentContainerStyle) {
  ({ guildId: require, isLandingScreen } = contentContainerStyle);
  let stateFromStores;
  let obj = require("initialize");
  const items = [GuildStore];
  stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(_require));
  let obj1 = require("useNavigation");
  const navigation = obj1.useNavigation();
  const tmp5 = closure_13();
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
          let obj = { style: titleContainer.titleContainer, children: null };
          obj = { title: name.name };
          obj.children = closure_2_9(require("NavigatorHeader").NavigatorHeader, obj);
          return closure_2_9(closure_2_5, obj);
        },
      };
      navigation.setOptions(obj);
    }
  }, items1);
  if (null == stateFromStores) {
    return null;
  } else {
    const maxEmojiSlots = tmp(tmp2[12]).getMaxEmojiSlots(stateFromStores);
    const intl = tmp(tmp2[10]).intl;
    obj = { count: maxEmojiSlots };
    obj = { children: null };
    obj1 = {
      guild: stateFromStores,
      headerDescription: intl.formatToPlainString(tmp(tmp2[10]).t.TA1BR0, obj),
      computeEmojiItems,
      contentContainerStyle: contentContainerStyle.contentContainerStyle,
    };
    const items2 = [closure_9(ManageEmojisModal, obj1), closure_9(tmp(tmp2[21]).NavScrim, {})];
    obj.children = items2;
    return closure_10(closure_11, obj);
  }
}
export const computeSectionItem = function computeSectionItem(intl, length, arg2) {
  const bound = Math.max(arg2 - length, 0);
  intl = util.intl;
  const key = "" + intl + " - " + intl.formatToPlainString(util.t.sgL8sI, { count: bound }).toUpperCase();
  return { type: "SECTION", key, section: key };
};
export { computeEmojiItem };
export { ManageEmojisModal };
