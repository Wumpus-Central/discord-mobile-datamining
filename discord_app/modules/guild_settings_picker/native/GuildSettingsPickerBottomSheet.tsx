// discord_app/modules/guild_settings_picker/native/GuildSettingsPickerBottomSheet.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef8874 from "../../guild_settings/GuildSettingsActionCreators.tsx";
import GuildPickerDefault from "components/GuildPicker.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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