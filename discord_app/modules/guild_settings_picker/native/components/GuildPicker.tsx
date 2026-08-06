// discord_app/modules/guild_settings_picker/native/components/GuildPicker.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const GuildPicker = "GuildPicker";
const result = require("useFilteredGuilds").fileFinishedImporting("modules/guild_settings_picker/native/components/GuildPicker.tsx");

export default function GuildPicker(isGuildIncluded) {
  let c2;
  let selectedGuild;
  const guildId = isGuildIncluded.guildId;
  const onChange = isGuildIncluded.onChange;
  let dependencyMap;
  ({ options: c2, selectedGuild } = onChange(13158)({ isGuildIncluded: isGuildIncluded.isGuildIncluded, selectedGuildId: guildId }));
  let name;
  const tmp2 = onChange(13158)({ isGuildIncluded: isGuildIncluded.isGuildIncluded, selectedGuildId: guildId });
  const tmp3 = jsx;
  if (selectedGuild != null) {
    name = selectedGuild.name;
  }
  let obj = {
    label: name,
    onPress() {
      let obj = onChange(_undefined[4]);
      obj = { title: null, items: null, onItemSelect: null, selectedItem: null, hasIcons: false };
      const intl = guildId(_undefined[7]).intl;
      obj[0] = intl.string(guildId(_undefined[7]).t.etZ9tX);
      obj[1] = _undefined;
      obj[2] = function onItemSelect(arg0) {
        if (null != arg0) {
          if (closure_1 != null) {
            tmp(arg0);
          }
        }
        setImmediate(() => {
          callback(table[4]).hideActionSheet(closure_4);
        });
      };
      obj[3] = guildId;
      obj.openLazy(guildId(_undefined[6])(_undefined[5], _undefined.paths), outer1_4, obj);
    },
    placeholder: null
  };
  let intl = guildId(1236).intl;
  obj[2] = intl.string(guildId(1236).t.etZ9tX);
  return tmp3(onChange(13159), obj);
};