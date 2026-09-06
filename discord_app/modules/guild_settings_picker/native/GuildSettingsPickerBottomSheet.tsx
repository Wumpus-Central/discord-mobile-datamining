// discord_app/modules/guild_settings_picker/native/GuildSettingsPickerBottomSheet.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../guild_settings/GuildSettingsActionCreators.tsx";
import GuildPickerDefault from "components/GuildPicker.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
const timestampProducer = createStyles.createStyles({ content: { paddingHorizontal: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings_picker/native/GuildSettingsPickerBottomSheet.tsx");
class GuildSettingsPickerBottomSheet {
  constructor(arg0) {
    feature = global.feature;
    ({ section, subsection, guildId } = global);
    tmp = closure_6();
    obj = feature(subsection[4]);
    guildSettingsPickerFeature = obj.useGuildSettingsPickerFeature(feature);
    ({ selectGuildCta, title, description, isGuildSupported } = guildSettingsPickerFeature);
    obj = { startExpanded: true, children: null };
    items = [, , , , ,];
    items[0] = jsx(feature(subsection[6]).BottomSheetTitleHeader, { title });
    obj1 = {
      style: tmp.content,
      children: jsx(feature(subsection[7]).Text, { variant: "text-md/medium", children: description }),
    };
    items[1] = jsx(guildId, obj1);
    items[2] = jsx(feature(subsection[8]).Spacer, { size: 16 });
    obj2 = {
      guildId,
      onChange(guildId) {
        const obj = { feature, section, subsection, guildId };
        obj.openLazy(() => Promise.resolve(closure_1_7), "GuildSettingsPickerBottomSheet", obj);
      },
      isGuildIncluded: isGuildSupported,
    };
    items[3] = jsx(section(subsection[9]), obj2);
    items[4] = jsx(feature(subsection[8]).Spacer, { size: 16 });
    obj3 = { style: tmp.content, children: null };
    obj4 = {
      grow: true,
      text: selectGuildCta,
      disabled: null == guildId,
      onPress() {
        _modDef38(null != guildId, "Guild ID must not be null on click");
        GuildSettingsActionCreatorsDefault.open(guildId, section, undefined, subsection);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      },
    };
    obj3.children = jsx(feature(subsection[11]).Button, obj4);
    items[5] = jsx(guildId, obj3);
    obj.children = items;
    return jsxs(feature(subsection[5]).BottomSheet, obj);
  }
}

export default GuildSettingsPickerBottomSheet;
