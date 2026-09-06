// === Module 13103: GuildInviteRow ===

// Module 13103 (GuildInviteRow)
import GuildInviteUtils from "GuildInviteUtils" /* 13098 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const useGuildInviteSendStates = fn(13099).useGuildInviteSendStates;
const InviteSendStates = fn(7736).InviteSendStates;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteRow.tsx");

export default noop.memo(function GuildInviteRow(arg0) {
  ({ row, recipientId: require, source: importDefault } = arg0);
  function handlePress() {
    GuildInviteUtils.sendGuildInvite(closure_1_0, guild.id, importDefault);
  }
  const guild = row.guild;
  ({ start, end } = arg0);
  const tmp = useGuildInviteSendStates((arg0) => {
    let tmp2;
    if (arg0[require] != null) {
      tmp2 = tmp[guild.id];
    }
    return tmp2;
  });
  let obj = { importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: null };
  obj = { guild, size: null };
  const tmp3 = guild;
  const tmp4 = jsx(require("InviteButton"), { sendState: tmp, onPressSend: handlePress });
  obj.size = require("GuildIcon").GuildIconSizes.SMALL;
  obj.children = jsx(require("GuildIcon"), { guild, size: null });
  const tmp5 = require("GuildIcon");
  obj = { variant: "text-xs/medium", color: "text-default", children: null };
  const intl = require("util").intl;
  obj.children = intl.format(require("util").t.zRl6XR, { count: row.memberCount });
  let tmp9 = tmp === InviteSendStates.SENDING;
  const obj1 = { count: row.memberCount };
  const tmp7 = <View variant="text-xs/medium" color="text-default">{null}</View>;
  if (!tmp9) {
    tmp9 = tmp === InviteSendStates.SENT;
  }
  const tmp8 = jsx(require("Text/Text").Text, { variant: "text-xs/medium", color: "text-default", children: null });
  return jsx(require("TableRow").TableRow, { icon: tmp7, label: guild.name, trailing: tmp4, subLabel: jsx(require("Text/Text").Text, { variant: "text-xs/medium", color: "text-default", children: null }), onPress: handlePress, disabled: tmp9, accessibilityState: { disabled: tmp9 }, start, end });
});