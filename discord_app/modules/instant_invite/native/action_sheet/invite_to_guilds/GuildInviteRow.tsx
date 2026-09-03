// === Module 12831: ? ===

// Module 12831
import { View } from "get ActivityIndicator" /* 17 */;
import { useGuildInviteSendStates } from "setSendState" /* 12827 */;
import { InviteSendStates } from "InviteSendStates" /* 7492 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
const memoResult = importAllResult.memo(function GuildInviteRow(arg0) {
  ({ row, recipientId: require, source: importDefault } = arg0);
  let guild;
  function handlePress() {
    closure_1_0(guild[5]).sendGuildInvite(closure_0, guild.id, closure_1);
  }
  guild = row.guild;
  ({ start, end } = arg0);
  const tmp = useGuildInviteSendStates((arg0) => {
    let tmp2;
    if (arg0[closure_0] != null) {
      tmp2 = tmp[guild.id];
    }
    return tmp2;
  });
  let obj = { importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: null };
  obj = { guild, size: null };
  let tmp2 = jsx;
  const tmp3 = guild;
  const tmp4 = jsx(importDefault(guild[6]), { sendState: tmp, onPressSend: handlePress });
  obj[1] = require(guild[7]).GuildIconSizes.SMALL;
  obj[2] = jsx(importDefault(guild[7]), { guild, size: null });
  const tmp5 = importDefault(guild[7]);
  const tmp6 = require;
  obj = { variant: "text-xs/medium", color: "text-default", children: null };
  const intl = require(guild[9]).intl;
  obj[2] = intl.format(require(guild[9]).t.zRl6XR, { count: row.memberCount });
  let tmp9 = tmp === InviteSendStates.SENDING;
  obj1 = { count: row.memberCount };
  const tmp7 = <View variant="text-xs/medium" color="text-default">{null}</View>;
  if (!tmp9) {
    tmp9 = tmp === InviteSendStates.SENT;
  }
  const tmp8 = jsx(require(guild[8]).Text, { variant: "text-xs/medium", color: "text-default", children: null });
  return tmp2(tmp6(tmp3[10]).TableRow, { icon: tmp7, label: guild.name, trailing: tmp4, subLabel: jsx(require(guild[8]).Text, { variant: "text-xs/medium", color: "text-default", children: null }), onPress: handlePress, disabled: tmp9, accessibilityState: { disabled: tmp9 }, start, end });
});
const result = require("set").fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteRow.tsx");

export default memoResult;