// === Module 14008: GuildPicker ===

// Module 14008 (GuildPicker)
import util from "util" /* 1115 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1897 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const GuildPicker = "GuildPicker";
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings_picker/native/components/GuildPicker.tsx");

export default function GuildPicker(isGuildIncluded) {
  const guildId = isGuildIncluded.guildId;
  const onChange = isGuildIncluded.onChange;
  dependencyMap = undefined;
  ({ options: c2, selectedGuild } = onChange(14009)({ isGuildIncluded: isGuildIncluded.isGuildIncluded, selectedGuildId: guildId }));
  let name;
  const tmp2 = onChange(14009)({ isGuildIncluded: isGuildIncluded.isGuildIncluded, selectedGuildId: guildId });
  if (selectedGuild != null) {
    name = selectedGuild.name;
  }
  let obj = {
    label: name,
    onPress() {
      const obj2 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const obj = ActionSheetActionCreatorsDefault;
      const intl = util.intl;
      obj2.title = intl.string(util.t.etZ9tX);
      obj2.items = items;
      obj2.onItemSelect = function onItemSelect(arg0) {
        if (null != arg0) {
          if (onChange != null) {
            tmp(arg0);
          }
        }
        setImmediate(() => {
          closure_1_1(closure_1_2[4]).hideActionSheet(closure_1_4);
        });
      };
      obj2.selectedItem = guildId;
      obj.openLazy(asyncRequireImpl(9580, dependencyMap.paths), GuildPicker, obj2);
    },
    placeholder: null
  };
  let intl = guildId(1115).intl;
  obj.placeholder = intl.string(guildId(1115).t.etZ9tX);
  return jsx(onChange(14010), {
    label: name,
    onPress() {
      const obj2 = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const obj = ActionSheetActionCreatorsDefault;
      const intl = util.intl;
      obj2.title = intl.string(util.t.etZ9tX);
      obj2.items = items;
      obj2.onItemSelect = function onItemSelect(arg0) {
        if (null != arg0) {
          if (onChange != null) {
            tmp(arg0);
          }
        }
        setImmediate(() => {
          closure_1_1(closure_1_2[4]).hideActionSheet(closure_1_4);
        });
      };
      obj2.selectedItem = guildId;
      obj.openLazy(asyncRequireImpl(9580, dependencyMap.paths), GuildPicker, obj2);
    },
    placeholder: null
  });
};