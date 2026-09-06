// === Module 12555: GuildPowerupsNotificationContainer ===

// Module 12555 (GuildPowerupsNotificationContainer)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef2428 from "module_2428" /* 2428 */;
import Text_Text from "Text/Text" /* 4556 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 8095 */;
import useGuildPowerupTier3OverrideConfigDefault from "useGuildPowerupTier3OverrideConfig" /* 12556 */;
import useGuildPowerupExpiringNotificationsConfigDefault from "useGuildPowerupExpiringNotificationsConfig" /* 12557 */;
import GuildPowerupsWarningDefault from "GuildPowerupsWarning" /* 12560 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

function Tier3OverrideNotice(children) {
  const obj = { style: closure_6().staffContainer, children: null };
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("Tier3OverrideNotice");
  let str = "text-sm/medium";
  if (manaTypeConsolidationExperiment) {
    str = "experimental/body-sm/normal";
  }
  obj.children = React4(Text_Text.Text, { variant: str, children: children.text });
  return React4(View, obj);
}
const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { container: null, staffContainer: null };
obj = { gap: nativeDefault.space.PX_12, margin: nativeDefault.space.PX_16 };
obj.container = obj;
obj.staffContainer = { padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsNotificationContainer.tsx");

export default function GuildPowerupsNotificationContainer(guildId) {
  guildId = guildId.guildId;
  const tmp4 = useGuildPowerupTier3OverrideConfigDefault(guildId);
  const tmp5 = useGuildPowerupExpiringNotificationsConfigDefault(guildId);
  let obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsNotificationContainer");
  if (tmp4.shouldShow) {
    obj = { style: tmp.container, children: null };
    let str = "text-subtle";
    if (manaTypeConsolidationExperiment) {
      str = "text-strong";
    }
    obj = { color: str, variant: null, children: null };
    let str2 = "eyebrow";
    if (manaTypeConsolidationExperiment) {
      str2 = "experimental/heading-lg/semibold";
    }
    obj.variant = str2;
    const intl = util.intl;
    obj.children = intl.string(_modDef2428["3FRirU"]);
    const items = [React4(Text_Text.Text, obj), , ];
    let shouldShow = tmp4.shouldShow;
    if (shouldShow) {
      const obj1 = { text: tmp4.text };
      shouldShow = React4(Tier3OverrideNotice, obj1);
    }
    items[1] = shouldShow;
    let shouldShow2 = tmp5.shouldShow;
    if (shouldShow2) {
      const obj2 = { guildId, powerupNames: null, warnings: null };
      ({ expiringPowerupNames: obj5.powerupNames, warnings: obj5.warnings } = tmp5);
      shouldShow2 = React4(GuildPowerupsWarningDefault, obj2);
    }
    items[2] = shouldShow2;
    obj.children = items;
    let tmp9Result = hasOwnProperty(View, obj);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
};