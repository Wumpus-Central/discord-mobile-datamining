// discord_app/modules/interaction_components/native/components/GuildSelectComponentActionSheet.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import insertUnsortedGuilds from "insertUnsortedGuilds";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { ActionComponentState } from "../../InteractionComponentTypes.tsx";
import { SelectionHeader } from "SelectComponentActionSheet.tsx";

let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ guildIdentity: { flexDirection: "row", alignItems: "center" }, iconContainer: { marginRight: 16 }, avatar: { marginRight: 4 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/interaction_components/native/components/GuildSelectComponentActionSheet.tsx");

export default function GuildSelectComponentActionSheet(arg0) {
  let importDefault;
  let require;
  let selectedGuild;
  ({ selectedGuild, onSelectGuild: require, user: importDefault } = arg0);
  let dependencyMap;
  let first;
  let first1;
  let closure_5;
  let callback;
  const tmp = callback2();
  dependencyMap = tmp;
  let obj = first1;
  const tmp2 = first(first1.useState(""), 2);
  first = tmp2[0];
  obj = { type: ActionComponentState.SelectOptionType.GUILD, value: selectedGuild.id, label: selectedGuild.name, guild: selectedGuild };
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
    return lib(_undefined[9]).hideActionSheet();
  }
  const intl = tmp4(1236).intl;
  obj[2] = intl.string(getSystemLocale.t["ZImm/x"]);
  callback = obj.useCallback((arg0) => {
    if (0 === arg0.length) {
      flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
      const _Array = Array;
      const array = new Array();
      let reduced = flattenedGuildIds.reduce((arr) => {
        guild = guild.getGuild(arg1);
        if (null != guild) {
          const obj = { type: null, value: null, label: null, guild: null };
          obj[0] = callback(4572).SelectOptionType.GUILD;
          ({ id: obj[1], name: obj[2] } = guild);
          obj[3] = guild;
          arr.push(obj);
        }
        return arr;
      }, array);
    } else {
      let obj = lib(_undefined[15]);
      obj = { query: null };
      obj[0] = arg0;
      reduced = obj.queryGuilds(obj).map((record) => {
        record = record.record;
        return { type: callback(4572).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
      });
      const queryGuildsResult = obj.queryGuilds(obj);
    }
    return reduced;
  }, []);
  const items2 = [first, callback];
  const memo = obj.useMemo(() => callback(first), items2);
  return callback(SelectionHeader, {
    onPressOptionItem(arg0, guild) {
      callback(guild.guild);
      callback2(guild);
      outer1_1(_undefined[9]).hideActionSheet();
    },
    onRemoveOptionItem() {
      callback2(null);
    },
    renderIcon(guild) {
      return callback3(lib(_undefined[11]), { guild: guild.guild });
    },
    renderHeaderIcon(guild) {
      const obj = { size: null, guild: null };
      obj[0] = callback(_undefined[11]).GuildIconSizes.XSMALL;
      obj[1] = guild.guild;
      return callback3(lib(_undefined[11]), obj);
    },
    iconContainerStyle: tmp.iconContainer,
    renderDescription(guild) {
      const hasAvatarForGuildResult = lib.hasAvatarForGuild(guild.guild.id);
      let obj = outer1_1(_undefined[12]);
      let username = obj.getNickname(guild.guild.id, undefined, lib);
      obj = { style: _undefined.guildIdentity, children: null };
      let tmp8 = hasAvatarForGuildResult;
      if (hasAvatarForGuildResult) {
        obj = { size: null, style: null, user: null, guildId: null, animate: true };
        obj[0] = outer1_0(tmp3[13]).AvatarSizes.SIZE_16;
        obj[1] = tmp7.avatar;
        obj[2] = tmp;
        obj[3] = guild.guild.id;
        tmp8 = outer1_8(outer1_0(tmp3[13]).Avatar, obj);
      }
      const items = [tmp8, ];
      if (username == null) {
        username = tmp.username;
      }
      items[1] = outer1_8(outer1_0(_undefined[14]).Text, { variant: "text-sm/medium", color: "text-default", children: username });
      obj[1] = items;
      return outer1_9(closure_5, obj);
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