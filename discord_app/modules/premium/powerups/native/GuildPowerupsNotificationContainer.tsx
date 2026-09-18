// discord_app/modules/premium/powerups/native/GuildPowerupsNotificationContainer.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef2512 from "../GuildPowerups.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ManaTypeConsolidationExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import useGuildPowerupTier3OverrideConfigDefault from "../hooks/useGuildPowerupTier3OverrideConfig.tsx";
import useGuildPowerupExpiringNotificationsConfigDefault from "../hooks/useGuildPowerupExpiringNotificationsConfig.tsx";
import GuildPowerupsWarningDefault from "GuildPowerupsWarning.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function Tier3OverrideNotice(children) {
  const tmp = closure_6();
  const obj2 = { style: tmp.staffContainer, children: null };
  const manaTypeConsolidationExperiment =
    ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("Tier3OverrideNotice");
  let str = "text-sm/medium";
  if (manaTypeConsolidationExperiment) {
    str = "experimental/body-sm/normal";
  }
  obj2.children = React4(Text_Text.Text, { variant: str, children: children.text });
  return React4(View, obj2);
}
const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const obj = { container: { gap: nativeDefault.space.PX_12, margin: nativeDefault.space.PX_16 }, staffContainer: null };
let obj2 = { gap: nativeDefault.space.PX_12, margin: nativeDefault.space.PX_16 };
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
  const tmp = closure_6();
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment(
    "GuildPowerupsNotificationContainer",
  );
  if (tmp4.shouldShow) {
    const obj2 = { style: tmp.container, children: null };
    let str = "text-subtle";
    if (manaTypeConsolidationExperiment) {
      str = "text-strong";
    }
    const obj3 = { color: str, variant: null, children: null };
    let str2 = "eyebrow";
    if (manaTypeConsolidationExperiment) {
      str2 = "experimental/heading-lg/semibold";
    }
    obj3.variant = str2;
    const intl = util.intl;
    obj3.children = intl.string(_modDef2512["3FRirU"]);
    const items = [React4(Text_Text.Text, obj3), ,];
    let shouldShow = tmp4.shouldShow;
    if (shouldShow) {
      const obj4 = { text: tmp4.text };
      shouldShow = React4(Tier3OverrideNotice, obj4);
    }
    items[1] = shouldShow;
    let shouldShow2 = tmp5.shouldShow;
    if (shouldShow2) {
      const obj9 = { guildId, powerupNames: null, warnings: null };
      ({ expiringPowerupNames: obj5.powerupNames, warnings: obj5.warnings } = tmp5);
      shouldShow2 = React4(GuildPowerupsWarningDefault, obj9);
    }
    items[2] = shouldShow2;
    obj2.children = items;
    let tmp9Result = hasOwnProperty(View, obj2);
  } else {
    tmp9Result = null;
  }
  return tmp9Result;
}
