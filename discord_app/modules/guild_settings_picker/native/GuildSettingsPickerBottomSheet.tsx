// === Module 13434: GuildSettingsPickerBottomSheet ===

// Module 13434 (GuildSettingsPickerBottomSheet)
import _modDef38 from "module_38" /* 38 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9048 */;
import GuildPickerDefault from "GuildPicker" /* 13439 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4836);
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
    obj1 = { startExpanded: true, children: null };
    items = [, , , , , ];
    items[0] = jsx(feature(subsection[6]).BottomSheetTitleHeader, { title });
    obj7 = { style: tmp.content, children: jsx(feature(subsection[7]).Text, { variant: "text-md/medium", children: description }) };
    items[1] = jsx(guildId, obj7);
    items[2] = jsx(feature(subsection[8]).Spacer, { size: 16 });
    obj8 = {
      guildId,
      onChange(guildId) {
            ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(closure_1_7), "GuildSettingsPickerBottomSheet", { feature, section, subsection, guildId });
          },
      isGuildIncluded: isGuildSupported
    };
    items[3] = jsx(section(subsection[9]), obj8);
    items[4] = jsx(feature(subsection[8]).Spacer, { size: 16 });
    obj9 = { style: tmp.content, children: null };
    obj10 = {
      grow: true,
      text: selectGuildCta,
      disabled: null == guildId,
      onPress() {
            _modDef38(null != guildId, "Guild ID must not be null on click");
            GuildSettingsActionCreatorsDefault.open(guildId, section, undefined, subsection);
            ActionSheetActionCreatorsDefault.hideActionSheet();
          }
    };
    obj9.children = jsx(feature(subsection[11]).Button, obj10);
    items[5] = jsx(guildId, obj9);
    obj1.children = items;
    return jsxs(feature(subsection[5]).BottomSheet, obj1);
  }
}

export default GuildSettingsPickerBottomSheet;