// discord_app/modules/application_commands/native/ApplicationSectionHeader.tsx
import "noop";
import { View } from "get ActivityIndicator";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { applicationHeaderWrapper: null, applicationIcon: null };
createCacheKey = { flexDirection: "row", alignItems: "center", height: 32, backgroundColor: require("Themes").colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND, paddingHorizontal: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: 16, height: 16, borderRadius: require("Themes").radii.sm, marginRight: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { width: 16, height: 16, borderRadius: require("Themes").radii.sm, marginRight: 8 };
const result = require("trackCommunicationDisabled").fileFinishedImporting("modules/application_commands/native/ApplicationSectionHeader.tsx");

export default function ApplicationSectionHeader(section) {
  section = section.section;
  const guildId = section.guildId;
  const tmp = createCacheKey();
  let obj = section(589);
  const items = [trackCommunicationDisabled];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (null != guildId) {
      let botId;
      if (section != null) {
        botId = tmp2.botId;
      }
      if (null != botId) {
        return outer1_4.getMember(tmp, tmp2.botId);
      }
    }
  });
  const applicationCommandsIconSource = section(11486).getApplicationCommandsIconSource(section, stateFromStores);
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
  const intl = tmp2(1236).intl;
  obj[1] = intl.formatToPlainString(section(1236).t["Ocw/sM"], { applicationName: name });
  let tmp9 = null != applicationCommandsIconSource;
  if (tmp9) {
    obj = { style: null, source: null };
    obj[0] = tmp.applicationIcon;
    obj[1] = applicationCommandsIconSource;
    tmp9 = callback(guildId(5221), obj);
  }
  const items1 = [tmp9, callback(section(4251).Text, { variant: "eyebrow", color: "interactive-text-default", children: name })];
  obj[2] = items1;
  return closure_6(View, obj);
};
export const APPLICATION_SECTION_HEADER_HEIGHT = 32;