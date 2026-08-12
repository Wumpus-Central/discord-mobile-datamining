// discord_app/modules/premium/powerups/native/GuildPowerupsNotificationContainer.tsx
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { apexExperiment } from "../../../design/ManaTypeConsolidationExperiment.tsx";
import { useGuildPowerupExpiringNotificationsConfig } from "../hooks/useGuildPowerupExpiringNotificationsConfig.tsx";
import { useGuildPowerupTier3OverrideConfig } from "../hooks/useGuildPowerupTier3OverrideConfig.tsx";

let c4;
let c5;
function Tier3OverrideNotice(children) {
  let obj = apexExperiment;
  obj = { style: callback().staffContainer, children: null };
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("Tier3OverrideNotice");
  let str = "text-sm/medium";
  if (manaTypeConsolidationExperiment) {
    str = "experimental/body-sm/normal";
  }
  obj[1] = closure_4(Text.Text, { variant: str, children: children.text });
  return closure_4(View, obj);
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
  let obj = apexExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsNotificationContainer");
  if (tmp4.shouldShow) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    let str;
    if (manaTypeConsolidationExperiment) {
      str = "text-strong";
    }
    obj = { color: null, variant: null, children: null };
    obj[0] = str;
    let str2 = "eyebrow";
    if (manaTypeConsolidationExperiment) {
      str2 = "experimental/heading-lg/semibold";
    }
    obj[1] = str2;
    const intl = tmp6(1236).intl;
    obj[2] = intl.string(tmp2(2335)["3FRirU"]);
    const items = [closure_4(tmp6(4340).Text, obj), , ];
    let shouldShow = tmp4.shouldShow;
    if (shouldShow) {
      const obj1 = { text: null };
      obj1[0] = tmp4.text;
      shouldShow = tmp11(Tier3OverrideNotice, obj1);
    }
    items[1] = shouldShow;
    let shouldShow2 = tmp5.shouldShow;
    if (shouldShow2) {
      const obj2 = { guildId: null, powerupNames: null, warnings: null };
      obj2[0] = guildId;
      ({ expiringPowerupNames: obj5[1], warnings: obj5[2] } = tmp5);
      shouldShow2 = tmp11(tmp2(11979), obj2);
    }
    items[2] = shouldShow2;
    obj[1] = items;
    let tmp9Result = closure_5(View, obj);
    const tmp10 = View;
    const tmp9 = closure_5;
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
};