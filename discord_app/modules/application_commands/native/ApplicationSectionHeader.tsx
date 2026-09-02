// discord_app/modules/application_commands/native/ApplicationSectionHeader.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../stores/GuildMemberStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { applicationHeaderWrapper: null, applicationIcon: null };
createCacheKey = {
  flexDirection: "row",
  alignItems: "center",
  height: 32,
  backgroundColor: ThemesDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND,
  paddingHorizontal: 16,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 16, height: 16, borderRadius: ThemesDefault.radii.sm, marginRight: 8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const obj1 = { width: 16, height: 16, borderRadius: ThemesDefault.radii.sm, marginRight: 8 };
const result = require("set").fileFinishedImporting("modules/application_commands/native/ApplicationSectionHeader.tsx");

export default function ApplicationSectionHeader(section) {
  section = section.section;
  const guildId = section.guildId;
  const tmp = callback2();
  let obj = section(586);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null != guildId) {
      let botId;
      if (section != null) {
        botId = tmp2.botId;
      }
      if (null != botId) {
        return closure_1_4.getMember(tmp, tmp2.botId);
      }
    }
  });
  const applicationCommandsIconSource = section(12021).getApplicationCommandsIconSource(section, stateFromStores);
  let nick;
  if (stateFromStores != null) {
    nick = stateFromStores.nick;
  }
  if (null != nick) {
    let name = stateFromStores.nick;
  } else if (section != null) {
    name = section.name;
  }
  obj = { style: tmp.applicationHeaderWrapper, accessibilityLabel: null, children: null };
  const intl = tmp2(1233).intl;
  obj[1] = intl.formatToPlainString(section(1233).t["Ocw/sM"], { applicationName: name });
  let tmp9 = null != applicationCommandsIconSource;
  if (tmp9) {
    obj = { style: null, source: null };
    obj[0] = tmp.applicationIcon;
    obj[1] = applicationCommandsIconSource;
    tmp9 = callback(guildId(5501), obj);
  }
  const items1 = [
    tmp9,
    callback(section(4474).Text, { variant: "eyebrow", color: "interactive-text-default", children: name }),
  ];
  obj[2] = items1;
  return closure_6(View, obj);
}
export const APPLICATION_SECTION_HEADER_HEIGHT = 32;
