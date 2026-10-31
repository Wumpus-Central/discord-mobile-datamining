// discord_app/modules/guild_settings_picker/native/GuildSettingsPickerBottomSheet.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import GuildSettingsActionCreatorsDefault from "../../guild_settings/GuildSettingsActionCreators.tsx";
import GuildPickerDefault from "components/GuildPicker.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5014);
let obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 } };
const timestampProducer = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_settings_picker/native/GuildSettingsPickerBottomSheet.tsx");
class GuildSettingsPickerBottomSheet {
  constructor(arg0) {
    feature = global.feature;
    ({ section, subsection, guildId } = global);
    tmp = closure_6();
    obj = feature(subsection[5]);
    guildSettingsPickerFeature = obj.useGuildSettingsPickerFeature(feature);
    ({ selectGuildCta, title, description, isGuildSupported } = guildSettingsPickerFeature);
    obj1 = {
      startExpanded: true,
      header: jsx(feature(subsection[7]).BottomSheetTitleHeader, { title, subtitle: description }),
      children: null,
    };
    obj6 = { style: tmp.content, children: null };
    obj7 = {
      guildId,
      onChange: function handleGuildSelected(guildId) {
        ActionSheetActionCreatorsDefault.openLazy(
          () => Promise.resolve(closure_1_7),
          "GuildSettingsPickerBottomSheet",
          { feature, section, subsection, guildId },
        );
      },
      isGuildIncluded: isGuildSupported,
    };
    items = [,];
    items[0] = jsx(section(subsection[8]), obj7);
    obj8 = {
      grow: true,
      text: selectGuildCta,
      disabled: null == guildId,
      onPress: function handleOpenSelected() {
        _modDef38(null != guildId, "Guild ID must not be null on click");
        GuildSettingsActionCreatorsDefault.open(guildId, section, undefined, subsection);
        ActionSheetActionCreatorsDefault.hideActionSheet();
      },
    };
    items[1] = jsx(feature(subsection[10]).Button, obj8);
    obj6.children = items;
    obj1.children = jsxs(guildId, obj6);
    return jsx(feature(subsection[6]).BottomSheet, obj1);
  }
}

export default GuildSettingsPickerBottomSheet;
