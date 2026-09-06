// === Module 14650: GuildSelectComponentActionSheet ===

// Module 14650 (GuildSelectComponentActionSheet)
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4712 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 4792 */;
import SelectComponentActionSheetDefault from "SelectComponentActionSheet" /* 11822 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import SortedGuildStore from "SortedGuildStore" /* 5438 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ guildIdentity: { flexDirection: "row", alignItems: "center" }, iconContainer: { marginRight: 16 }, avatar: { marginRight: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/interaction_components/native/components/GuildSelectComponentActionSheet.tsx");

export default function GuildSelectComponentActionSheet(arg0) {
  ({ selectedGuild, onSelectGuild: require, user: importDefault } = arg0);
  let first;
  let first1;
  let callback;
  const tmp = closure_10();
  dependencyMap = tmp;
  const tmp2 = first(first1.useState(""), 2);
  first = tmp2[0];
  let obj = { type: InteractionComponentTypes.SelectOptionType.GUILD, value: selectedGuild.id, label: selectedGuild.name, guild: selectedGuild };
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
    return require("ActionSheetActionCreators").hideActionSheet();
  }
  const intl = util.intl;
  obj.placeholder = intl.string(util.t["ZImm/x"]);
  callback = obj.useCallback((query) => {
    if (0 === query.length) {
      flattenedGuildIds = flattenedGuildIds.getFlattenedGuildIds();
      const _Array = Array;
      const array = new Array();
      let reduced = flattenedGuildIds.reduce((arr, item) => {
        guild = guild.getGuild(item);
        if (null != guild) {
          const obj = { type: closure_1_0(4792).SelectOptionType.GUILD, value: null, label: null, guild: null };
          ({ id: obj.value, name: obj.label } = guild);
          obj.guild = guild;
          arr = arr.push(obj);
        }
        return arr;
      }, array);
    } else {
      require("AutocompleteUtils");
      let obj = { query };
      reduced = obj.queryGuilds(obj).map((record) => {
        record = record.record;
        return { type: closure_1_0(4792).SelectOptionType.GUILD, value: record.id, label: record.name, guild: record };
      });
      const queryGuildsResult = obj.queryGuilds(obj);
    }
    return reduced;
  }, []);
  const items2 = [first, callback];
  const memo = obj.useMemo(() => callback(first), items2);
  return closure_8(SelectComponentActionSheetDefault, {
    onPressOptionItem(arg0, guild) {
      require(guild.guild);
      closure_5(guild);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    onRemoveOptionItem() {
      closure_5(null);
    },
    renderIcon(guild) {
      return closure_1_8(require("GuildIcon"), { guild: guild.guild });
    },
    renderHeaderIcon(guild) {
      const obj = { size: require("GuildIcon").GuildIconSizes.XSMALL, guild: guild.guild };
      return closure_1_8(require("GuildIcon"), obj);
    },
    iconContainerStyle: tmp.iconContainer,
    renderDescription(guild) {
      const hasAvatarForGuildResult = user.hasAvatarForGuild(guild.guild.id);
      let obj = NicknameUtilsDefault;
      let username = obj.getNickname(guild.guild.id, undefined, user);
      obj = { style: guildIdentity.guildIdentity, children: null };
      let tmp8 = hasAvatarForGuildResult;
      if (hasAvatarForGuildResult) {
        obj = { size: native.AvatarSizes.SIZE_16, style: tmp7.avatar, user, guildId: guild.guild.id, animate: true };
        tmp8 = React6(native.Avatar, obj);
      }
      const items = [tmp8, ];
      if (username == null) {
        username = user.username;
      }
      items[1] = React6(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: username });
      obj.children = items;
      return React7(View, obj);
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