// discord_app/modules/guild_settings_picker/native/components/GuildPicker.tsx
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01994_asyncRequireImpl.js";
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
  ({ options: c2, selectedGuild } = onChange(15719)({
    isGuildIncluded: isGuildIncluded.isGuildIncluded,
    selectedGuildId: guildId,
  }));
  let tmp4Result;
  const tmp = onChange;
  const tmp3 = onChange(15719)({ isGuildIncluded: isGuildIncluded.isGuildIncluded, selectedGuildId: guildId });
  if (null != selectedGuild) {
    let obj = { guild: selectedGuild, size: guildId(6957).GuildIconSizes.XSMALL };
    tmp4Result = jsx(tmp(6957), { guild: selectedGuild, size: guildId(6957).GuildIconSizes.XSMALL });
    const tmpResult = tmp(6957);
  }
  let obj2 = { leading: tmp4Result, label: null, onPress: null, placeholder: null };
  let name;
  if (selectedGuild != null) {
    name = selectedGuild.name;
  }
  obj2.label = name;
  obj2.onPress = function handleSelectGuild() {
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
        closure_1_1(closure_1_2[5]).hideActionSheet(closure_1_4);
      });
    };
    obj2.selectedItem = guildId;
    obj.openLazy(asyncRequireImpl(9002, dependencyMap.paths), GuildPicker, obj2);
  };
  let intl = guildId(1113).intl;
  obj2.placeholder = intl.string(guildId(1113).t.etZ9tX);
  return jsx(onChange(15720), { leading: tmp4Result, label: null, onPress: null, placeholder: null });
}
