// discord_app/modules/premium/powerups/native/GuildPowerupsNotificationContainer.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ManaTypeConsolidationExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import useGuildPowerupTier3OverrideConfigDefault from "../hooks/useGuildPowerupTier3OverrideConfig.tsx";
import useGuildPowerupExpiringNotificationsConfigDefault from "../hooks/useGuildPowerupExpiringNotificationsConfig.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
obj.staffContainer = {
  padding: nativeDefault.space.PX_12,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
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
    const intl = tmp6(1114).intl;
    obj.children = intl.string(tmp2(2428)["3FRirU"]);
    const items = [React4(tmp6(4556).Text, obj), ,];
    let shouldShow = tmp4.shouldShow;
    if (shouldShow) {
      const obj1 = { text: tmp4.text };
      shouldShow = tmp11(Tier3OverrideNotice, obj1);
    }
    items[1] = shouldShow;
    let shouldShow2 = tmp5.shouldShow;
    if (shouldShow2) {
      const obj2 = { guildId, powerupNames: null, warnings: null };
      ({ expiringPowerupNames: obj5.powerupNames, warnings: obj5.warnings } = tmp5);
      shouldShow2 = tmp11(tmp2(12560), obj2);
    }
    items[2] = shouldShow2;
    obj.children = items;
    let tmp9Result = hasOwnProperty(View, obj);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
}
