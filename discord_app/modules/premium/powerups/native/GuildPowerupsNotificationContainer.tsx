// discord_app/modules/premium/powerups/native/GuildPowerupsNotificationContainer.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../GuildPowerups.messages.js";
import Text from "../../../../design/components/Text/native/Text.tsx";
import apexExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import useGuildPowerupTier3OverrideConfigDefault from "../hooks/useGuildPowerupTier3OverrideConfig.tsx";
import useGuildPowerupExpiringNotificationsConfigDefault from "../hooks/useGuildPowerupExpiringNotificationsConfig.tsx";
import GuildPowerupsWarningDefault from "GuildPowerupsWarning.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

function Tier3OverrideNotice(children) {
  const obj = { style: callback().staffContainer, children: null };
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("Tier3OverrideNotice");
  let str = "text-sm/medium";
  if (manaTypeConsolidationExperiment) {
    str = "experimental/body-sm/normal";
  }
  obj[1] = callback(Text.Text, { variant: str, children: children.text });
  return callback(View, obj);
}
const View = get_ActivityIndicator.View;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { gap: ThemesDefault.space.PX_12, margin: ThemesDefault.space.PX_16 };
obj[0] = obj;
obj[1] = { padding: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.md, borderWidth: 1, borderStyle: "solid", borderColor: ThemesDefault.colors.BORDER_SUBTLE };
let closure_6 = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsNotificationContainer.tsx");

export default function GuildPowerupsNotificationContainer(guildId) {
  guildId = guildId.guildId;
  const tmp4 = useGuildPowerupTier3OverrideConfigDefault(guildId);
  const tmp5 = useGuildPowerupExpiringNotificationsConfigDefault(guildId);
  let obj = apexExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsNotificationContainer");
  if (tmp4.shouldShow) {
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    let str = "text-subtle";
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
    const intl = getSystemLocale.intl;
    obj[2] = intl.string(messagesProxyDefault["3FRirU"]);
    const items = [callback(Text.Text, obj), , ];
    let shouldShow = tmp4.shouldShow;
    if (shouldShow) {
      obj1 = { text: null };
      obj1[0] = tmp4.text;
      shouldShow = callback(Tier3OverrideNotice, obj1);
    }
    items[1] = shouldShow;
    let shouldShow2 = tmp5.shouldShow;
    if (shouldShow2) {
      const obj2 = { guildId: null, powerupNames: null, warnings: null };
      obj2[0] = guildId;
      ({ expiringPowerupNames: obj5[1], warnings: obj5[2] } = tmp5);
      shouldShow2 = callback(GuildPowerupsWarningDefault, obj2);
    }
    items[2] = shouldShow2;
    obj[1] = items;
    let tmp9Result = callback2(View, obj);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
};