// === Module 14071: GuildSelectComponentActionSheet ===

// Module 14071 (GuildSelectComponentActionSheet)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ActionComponentState from "ActionComponentState" /* 4813 */;
import SelectionHeaderDefault from "SelectionHeader" /* 11001 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import insertUnsortedGuilds from "insertUnsortedGuilds" /* 5078 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ guildIdentity: { flexDirection: "row", alignItems: "center" }, iconContainer: { marginRight: 16 }, avatar: { marginRight: 4 } });
const result = require("obj132").fileFinishedImporting("modules/interaction_components/native/components/GuildSelectComponentActionSheet.tsx");

export default function GuildSelectComponentActionSheet(arg0) {
  ({ selectedGuild, onSelectGuild: require, user: importDefault } = arg0);
  let first;
  let first1;
  let callback;
  const tmp = callback2();
  dependencyMap = tmp;
  const tmp2 = first(first1.useState(""), 2);
  first = tmp2[0];
  let obj = { type: ActionComponentState.SelectOptionType.GUILD, value: selectedGuild.id, label: selectedGuild.name, guild: selectedGuild };
  const tmp6 = first(first1.useState(obj), 2);
  first1 = tmp6[0];
  closure_5 = tmp6[1];
  if (null != first1) {
    let items = [first1];
    let items1 = items;
  } else {
    items1 = [];
  }
  obj = { maxValues: 1, minValues: 1, placeholder: null };
  function submitSelection() {
    return lib(guildIdentity[9]).hideActionSheet();
  }
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["ZImm/x"]);
  callback = obj.useCallback((arg0) => {
    if (0 === arg0.length) {
      flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
      const _Array = Array;
      const array = new Array();
      let reduced = flattenedGuildIds.reduce((acc, item, index) => {
        guild = guild.getGuild(item);
        if (null != guild) {
          const obj = { type: null, value: null, label: null, guild: null };
          obj[0] = callback(4813).SelectOptionType.GUILD;
          ({ id: obj[1], name: obj[2] } = guild);
          obj[3] = guild;
          acc.push(obj);
        }
        return acc;
      }, array);
    } else {
      lib(guildIdentity[15]);
      let obj = { query: null };
      obj[0] = arg0;
      reduced = obj.queryGuilds(obj).map((item, index) => {
        const record = item.record;
        return { type: callback(4813).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
      });
      const queryGuildsResult = obj.queryGuilds(obj);
    }
    return reduced;
  }, []);
  const items2 = [first, callback];
  const memo = obj.useMemo(() => callback(first), items2);
  return callback(SelectionHeaderDefault, {
    onPressOptionItem(arg0, guild) {
      callback(guild.guild);
      callback2(guild);
      importDefault(guildIdentity[9]).hideActionSheet();
    },
    onRemoveOptionItem() {
      callback2(null);
    },
    renderIcon(guild) {
      return callback3(lib(guildIdentity[11]), { guild: guild.guild });
    },
    renderHeaderIcon(guild) {
      const obj = { size: callback(guildIdentity[11]).GuildIconSizes.XSMALL, guild: guild.guild };
      return callback3(lib(guildIdentity[11]), obj);
    },
    iconContainerStyle: tmp.iconContainer,
    renderDescription(guild) {
      const hasAvatarForGuildResult = lib.hasAvatarForGuild(guild.guild.id);
      let obj = importDefault(guildIdentity[12]);
      let username = obj.getNickname(guild.guild.id, undefined, lib);
      obj = { style: guildIdentity.guildIdentity, children: null };
      let tmp8 = hasAvatarForGuildResult;
      if (hasAvatarForGuildResult) {
        obj = { size: null, style: null, user: null, guildId: null, animate: true };
        obj[0] = require(guildIdentity[13]).AvatarSizes.SIZE_16;
        obj[1] = tmp7.avatar;
        obj[2] = lib;
        obj[3] = guild.guild.id;
        tmp8 = closure_1_8(require(guildIdentity[13]).Avatar, obj);
      }
      const items = [tmp8, ];
      if (username == null) {
        username = lib.username;
      }
      items[1] = closure_1_8(require(guildIdentity[14]).Text, { variant: "text-sm/medium", color: "text-default", children: username });
      obj[1] = items;
      return closure_1_9(closure_5, obj);
    },
    selectionActionComponent: obj,
    options: memo,
    selectedCount: items1.length,
    selectedOptions: items1,
    isSelected(value) {
      value = undefined;
      if (first1 != null) {
        value = first1.value;
      }
      return value.value === value;
    },
    submitSelection,
    onQueryChange: tmp2[1],
    itemAccessibilityLabel(label) {
      return label.label;
    },
    allowEmpty: false,
    expanded: true
  });
};