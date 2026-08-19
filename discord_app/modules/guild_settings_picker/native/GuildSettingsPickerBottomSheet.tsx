// === Module 13349: GuildSettingsPickerBottomSheet ===

// Module 13349 (GuildSettingsPickerBottomSheet)
import noopAll from "noop" /* 19 */;
import _modDef38 from "module_38" /* 38 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import _modDef8874 from "module_8874" /* 8874 */;
import GuildPickerDefault from "GuildPicker" /* 13354 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ content: { paddingHorizontal: 16 } });
const result = require("obj132").fileFinishedImporting("modules/guild_settings_picker/native/GuildSettingsPickerBottomSheet.tsx");
class GuildSettingsPickerBottomSheet {
  constructor(arg0) {
    feature = global.feature;
    ({ section, subsection, guildId } = global);
    tmp = closure_6();
    obj = require("useGuildSettingsPickerFeature");
    guildSettingsPickerFeature = obj.useGuildSettingsPickerFeature(feature);
    ({ selectGuildCta, title, description, isGuildSupported } = guildSettingsPickerFeature);
    obj = { startExpanded: true, children: null };
    items = [, , , , , ];
    items[0] = jsx(require("RedesignBottomSheetTitleHeaderBase").BottomSheetTitleHeader, { title });
    obj1 = { style: tmp.content, children: jsx(require("Text").Text, { variant: "text-md/medium", children: description }) };
    items[1] = jsx(guildId, obj1);
    items[2] = jsx(require("Button").Spacer, { size: 16 });
    obj2 = {
      guildId,
      onChange(guildId) {
            const obj = { feature, section: closure_1, subsection: closure_2, guildId };
            obj.openLazy(() => Promise.resolve(closure_7), "GuildSettingsPickerBottomSheet", obj);
          },
      isGuildIncluded: isGuildSupported
    };
    items[3] = jsx(require("GuildPicker"), obj2);
    items[4] = jsx(require("Button").Spacer, { size: 16 });
    obj3 = { style: tmp.content, children: jsx(require("Button").Button, obj4) };
    obj4 = {
      grow: true,
      text: selectGuildCta,
      disabled: null == guildId,
      onPress() {
            _modDef38(null != guildId, "Guild ID must not be null on click");
            _modDef8874.open(guildId, closure_1, undefined, closure_2);
            ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet();
          }
    };
    items[5] = jsx(guildId, obj3);
    obj[1] = items;
    return jsxs(require("Background").BottomSheet, obj);
  }
}

export default GuildSettingsPickerBottomSheet;