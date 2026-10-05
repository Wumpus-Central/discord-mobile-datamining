// discord_app/modules/guild_settings_picker/native/components/GuildPicker.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import intl2 from "../../../../intl/index.native.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import size from "../../../../../_runtime/metro/00002__.js";

let dependencyMap;

const jsx = Fragment.jsx;
const GuildPicker_str = "GuildPicker";
const result = size.fileFinishedImporting("modules/guild_settings_picker/native/components/GuildPicker.tsx");

export default function GuildPicker(isGuildIncluded) {
  let c2;
  let items;
  let selectedGuild;
  const guildId = isGuildIncluded.guildId;
  const onChange = isGuildIncluded.onChange;
  dependencyMap = undefined;
  let tmp = dependencyMap;
  let tmp2 = onChange(13707)({ isGuildIncluded: isGuildIncluded.isGuildIncluded, selectedGuildId: guildId });
  ({ options: c2, selectedGuild } = tmp2);
  let name;
  onChange(13708);
  if (selectedGuild != null) {
    name = selectedGuild.name;
  }
  let intl = guildId(1126).intl;
  return (
    <tmp4
      label={name}
      onPress={function onPress() {
        let intl;
        const tmp = ActionSheetActionCreatorsDefault;
        const openLazy = tmp.openLazy;
        let obj = {
          title: intl.string(intl2.t.etZ9tX),
          items,
          onItemSelect(arg0) {
            if (null != arg0) {
              if (onChange != null) {
                tmp(arg0);
              }
            }
            setImmediate(() => {
              const obj = closure_1_1(closure_1_2[4]);
              obj.hideActionSheet(closure_1_4);
            });
          },
          selectedItem: guildId,
          hasIcons: false,
        };
        const tmp2 = asyncRequire(8949, dependencyMap.paths);
        intl = intl2.intl;
        openLazy(tmp2, GuildPicker_str, obj);
      }}
      placeholder={intl.string(guildId(1126).t.etZ9tX)}
    />
  );
}
