// === Module 14360: GuildPowerupsNotificationContainer ===

// Module 14360 (GuildPowerupsNotificationContainer)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2699 from "module_2699" /* 2699 */;
import Text_Text from "Text/Text" /* 5763 */;
import useGuildPowerupTier3OverrideConfigDefault from "useGuildPowerupTier3OverrideConfig" /* 14361 */;
import useGuildPowerupExpiringNotificationsConfigDefault from "useGuildPowerupExpiringNotificationsConfig" /* 14362 */;
import GuildPowerupsWarningDefault from "GuildPowerupsWarning" /* 14365 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

function Tier3OverrideNotice(children) {
  return React4(View, { style: closure_6().staffContainer, children: React4(Text_Text.Text, { variant: "body-sm/normal", children: children.text }) });
}
const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { container: { gap: nativeDefault.space.PX_12, margin: nativeDefault.space.PX_16 }, staffContainer: null };
let obj2 = { gap: nativeDefault.space.PX_12, margin: nativeDefault.space.PX_16 };
obj.staffContainer = { padding: nativeDefault.space.PX_12, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderRadius: nativeDefault.radii.md, borderWidth: 1, borderStyle: "solid", borderColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsNotificationContainer.tsx");

export default function GuildPowerupsNotificationContainer(guildId) {
  guildId = guildId.guildId;
  const tmp4 = useGuildPowerupTier3OverrideConfigDefault(guildId);
  const tmp5 = useGuildPowerupExpiringNotificationsConfigDefault(guildId);
  if (tmp4.shouldShow) {
    const obj = { style: tmp.container, children: null };
    const obj2 = { color: "text-strong", variant: "heading-lg/semibold", children: null };
    const intl = util.intl;
    obj2.children = intl.string(_modDef2699["3FRirU"]);
    items = [React4(Text_Text.Text, obj2), , ];
    let shouldShow = tmp4.shouldShow;
    if (shouldShow) {
      const obj3 = { text: tmp4.text };
      shouldShow = React4(Tier3OverrideNotice, obj3);
    }
    items[1] = shouldShow;
    let shouldShow2 = tmp5.shouldShow;
    if (shouldShow2) {
      const obj7 = { guildId, powerupNames: null, warnings: null };
      ({ expiringPowerupNames: obj4.powerupNames, warnings: obj4.warnings } = tmp5);
      shouldShow2 = React4(GuildPowerupsWarningDefault, obj7);
    }
    items[2] = shouldShow2;
    obj.children = items;
    let tmp7Result = hasOwnProperty(View, obj);
  } else {
    tmp7Result = null;
  }
  return tmp7Result;
};