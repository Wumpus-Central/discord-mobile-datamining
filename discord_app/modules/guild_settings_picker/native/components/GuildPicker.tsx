// discord_app/modules/guild_settings_picker/native/components/GuildPicker.tsx
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const GuildPicker = "GuildPicker";
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings_picker/native/components/GuildPicker.tsx");

export default function GuildPicker(isGuildIncluded) {
  const guildId = isGuildIncluded.guildId;
  const onChange = isGuildIncluded.onChange;
  dependencyMap = undefined;
  ({ options: c2, selectedGuild } = onChange(13895)({
    isGuildIncluded: isGuildIncluded.isGuildIncluded,
    selectedGuildId: guildId,
  }));
  let name;
  const tmp2 = onChange(13895)({ isGuildIncluded: isGuildIncluded.isGuildIncluded, selectedGuildId: guildId });
  const tmp3 = jsx;
  if (selectedGuild != null) {
    name = selectedGuild.name;
  }
  let obj = {
    label: name,
    onPress() {
      const obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const intl = util.intl;
      obj.title = intl.string(util.t.etZ9tX);
      obj.items = items;
      obj.onItemSelect = function onItemSelect(arg0) {
        if (null != arg0) {
          if (onChange != null) {
            tmp(arg0);
          }
        }
        setImmediate(() => {
          closure_1_1(closure_1_2[4]).hideActionSheet(closure_1_4);
        });
      };
      obj.selectedItem = guildId;
      obj.openLazy(asyncRequireImpl(9426, dependencyMap.paths), GuildPicker, obj);
    },
    placeholder: null,
  };
  let intl = guildId(1114).intl;
  obj.placeholder = intl.string(guildId(1114).t.etZ9tX);
  return tmp3(onChange(13896), obj);
}
