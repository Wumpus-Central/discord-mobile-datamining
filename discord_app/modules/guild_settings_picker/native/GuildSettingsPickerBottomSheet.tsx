// === Module 13561: GuildSettingsPickerBottomSheet ===

// Module 13561 (GuildSettingsPickerBottomSheet)
import noopAll from "noop" /* 19 */;
import GuildPickerDefault from "GuildPicker" /* 13566 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

const require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ content: { paddingHorizontal: 16 } });
const result = require("set").fileFinishedImporting("modules/guild_settings_picker/native/GuildSettingsPickerBottomSheet.tsx");
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
            let obj = closure_1_1(closure_1_2[10]);
            obj = { feature, section: closure_1, subsection: closure_2, guildId };
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
            closure_1_1(closure_1_2[12])(null != guildId, "Guild ID must not be null on click");
            closure_1_1(closure_1_2[13]).open(guildId, closure_1, undefined, closure_2);
            const obj = closure_1_1(closure_1_2[13]);
            closure_1_1(closure_1_2[10]).hideActionSheet();
          }
    };
    items[5] = jsx(guildId, obj3);
    obj[1] = items;
    return jsxs(require("Background").BottomSheet, obj);
  }
}

export default GuildSettingsPickerBottomSheet;