// === Module 12343: Tier3OverrideNotice ===

// Module 12343 (Tier3OverrideNotice)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ThemesDefault from "Themes" /* 709 */;
import Text from "Text" /* 4474 */;
import apexExperiment from "apexExperiment" /* 8013 */;
import useGuildPowerupTier3OverrideConfigDefault from "useGuildPowerupTier3OverrideConfig" /* 12344 */;
import useGuildPowerupExpiringNotificationsConfigDefault from "useGuildPowerupExpiringNotificationsConfig" /* 12345 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

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
const View = get_ActivityIndicator.View;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { container: null, staffContainer: null };
obj = { gap: ThemesDefault.space.PX_12, margin: ThemesDefault.space.PX_16 };
obj[0] = obj;
obj[1] = { padding: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.md, borderWidth: 1, borderStyle: "solid", borderColor: ThemesDefault.colors.BORDER_SUBTLE };
let closure_6 = createCacheKey.createStyles(obj);
let obj1 = { padding: ThemesDefault.space.PX_12, backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: ThemesDefault.radii.md, borderWidth: 1, borderStyle: "solid", borderColor: ThemesDefault.colors.BORDER_SUBTLE };
const result = set.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsNotificationContainer.tsx");

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
    const intl = tmp6(1233).intl;
    obj[2] = intl.string(tmp2(2400)["3FRirU"]);
    const items = [closure_4(tmp6(4474).Text, obj), , ];
    let shouldShow = tmp4.shouldShow;
    if (shouldShow) {
      obj1 = { text: null };
      obj1[0] = tmp4.text;
      shouldShow = tmp11(Tier3OverrideNotice, obj1);
    }
    items[1] = shouldShow;
    let shouldShow2 = tmp5.shouldShow;
    if (shouldShow2) {
      const obj2 = { guildId: null, powerupNames: null, warnings: null };
      obj2[0] = guildId;
      ({ expiringPowerupNames: obj5[1], warnings: obj5[2] } = tmp5);
      shouldShow2 = tmp11(tmp2(12348), obj2);
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