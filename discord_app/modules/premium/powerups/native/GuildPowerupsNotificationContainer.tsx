// discord_app/modules/premium/powerups/native/GuildPowerupsNotificationContainer.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { useGuildPowerupExpiringNotificationsConfig } from "../hooks/useGuildPowerupExpiringNotificationsConfig.tsx";
import { useGuildPowerupTier3OverrideConfig } from "../hooks/useGuildPowerupTier3OverrideConfig.tsx";

let c4;
let c5;
function Tier3OverrideNotice(children) {
  return callback(View, { style: callback2().staffContainer, children: callback(Text /* Text */.Text, { variant: "text-sm/medium", children: children.text }) });
}
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { container: null, staffContainer: null };
obj = { gap: require("Themes").space.PX_12, margin: require("Themes").space.PX_16 };
obj[0] = obj;
obj[1] = { padding: require("Themes").space.PX_12, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("Themes").radii.md, borderWidth: 1, borderStyle: "solid", borderColor: require("Themes").colors.BORDER_SUBTLE };
let closure_6 = createCacheKey.createStyles(obj);
let obj1 = { padding: require("Themes").space.PX_12, backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("Themes").radii.md, borderWidth: 1, borderStyle: "solid", borderColor: require("Themes").colors.BORDER_SUBTLE };
const result = require("createCacheKey").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsNotificationContainer.tsx");

export default function GuildPowerupsNotificationContainer(guildId) {
  guildId = guildId.guildId;
  const tmp4 = useGuildPowerupTier3OverrideConfig(guildId);
  const tmp5 = useGuildPowerupExpiringNotificationsConfig(guildId);
  if (tmp4.shouldShow) {
    let obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { variant: "eyebrow", color: "text-subtle", children: null };
    const intl = getSystemLocale /* getSystemLocale */.intl;
    obj[2] = intl.string(tmp2(2317)["3FRirU"]);
    const items = [callback(Text /* Text */.Text, obj), , ];
    let shouldShow = tmp4.shouldShow;
    if (shouldShow) {
      obj = { text: null };
      obj[0] = tmp4.text;
      shouldShow = tmp9(Tier3OverrideNotice, obj);
    }
    items[1] = shouldShow;
    let shouldShow2 = tmp5.shouldShow;
    if (shouldShow2) {
      const obj1 = { guildId: null, powerupNames: null, warnings: null };
      obj1[0] = guildId;
      ({ expiringPowerupNames: obj4[1], warnings: obj4[2] } = tmp5);
      shouldShow2 = tmp9(tmp2(11831), obj1);
    }
    items[2] = shouldShow2;
    obj[1] = items;
    let tmp7Result = closure_5(View, obj);
    const tmp7 = closure_5;
    const tmp8 = View;
  } else {
    tmp7Result = null;
  }
  return tmp7Result;
};