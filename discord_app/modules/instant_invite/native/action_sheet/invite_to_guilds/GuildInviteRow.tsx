// === Module 12814: GuildInviteRow ===

// Module 12814 (GuildInviteRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 7239 */;
import GuildInviteUtils from "GuildInviteUtils" /* 12809 */;
import GuildInviteSendStateStore from "GuildInviteSendStateStore" /* 12810 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let source;

const View = react_native.View;
const useGuildInviteSendStates = GuildInviteSendStateStore.useGuildInviteSendStates;
const InviteSendStates = Constants.InviteSendStates;
const jsx = Fragment.jsx;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((source) => {
  let end;
  let guild;
  let recipientId;
  let row;
  let start;
  let tmp2 = guild;
  let obj = recipientId(guild[6]);
  const cResult = obj.c(28);
  ({ row, recipientId } = source);
  source = source.source;
  ({ start, end } = source);
  guild = row.guild;
  if (cResult[0] === guild.id) {
    let tmp4;
    if (cResult[1] === recipientId) {
      tmp4 = cResult[2];
    }
    const tmp6 = useGuildInviteSendStates(tmp4);
    if (cResult[3] === guild.id) {
      if (cResult[4] === recipientId) {
        let tmp7;
        if (cResult[5] === source) {
          tmp7 = cResult[6];
        }
        if (cResult[7] === tmp7) {
          let tmp8;
          let tmp12;
          let tmp18;
          let tmp20;
          let tmp24;
          if (cResult[8] === tmp6) {
            tmp8 = cResult[9];
          }
          if (cResult[10] !== guild) {
            ({ guild, size: recipientId(tmp2[9]).GuildIconSizes.SMALL });
            source(tmp2[9]);
            const tmp17 = <View importantForAccessibility="no-hide-descendants" accessibilityElementsHidden>{null}</View>;
            cResult[10] = guild;
            cResult[11] = tmp17;
            tmp12 = tmp17;
          } else {
            tmp12 = cResult[11];
          }
          if (cResult[12] !== row.memberCount) {
            const intl = recipientId(tmp2[10]).intl;
            const obj4 = { count: row.memberCount };
            const formatResult = intl.format(recipientId(tmp2[10]).t.zRl6XR, obj4);
            cResult[12] = row.memberCount;
            cResult[13] = formatResult;
            tmp18 = formatResult;
          } else {
            tmp18 = cResult[13];
          }
          if (cResult[14] !== tmp18) {
            const tmp22 = jsx(recipientId(tmp2[11]).Text, { variant: "text-xs/medium", color: "text-default", children: tmp18 });
            cResult[14] = tmp18;
            cResult[15] = tmp22;
            tmp20 = tmp22;
          } else {
            tmp20 = cResult[15];
          }
          if (cResult[16] !== (tmp6 === InviteSendStates.SENDING || tmp6 === InviteSendStates.SENT)) {
            const obj6 = { disabled: tmp6 === InviteSendStates.SENDING || tmp6 === InviteSendStates.SENT };
            cResult[16] = tmp6 === InviteSendStates.SENDING || tmp6 === InviteSendStates.SENT;
            cResult[17] = obj6;
            tmp24 = obj6;
          } else {
            tmp24 = cResult[17];
          }
          if (cResult[18] === (tmp6 === InviteSendStates.SENDING || tmp6 === InviteSendStates.SENT)) {
            if (cResult[19] === end) {
              if (cResult[20] === guild.name) {
                if (cResult[21] === tmp7) {
                  if (cResult[22] === tmp12) {
                    if (cResult[23] === start) {
                      if (cResult[24] === tmp20) {
                        if (cResult[25] === tmp24) {
                          let tmp25;
                          if (cResult[26] === tmp8) {
                            tmp25 = cResult[27];
                          }
                          return tmp25;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          const tmp27 = jsx(recipientId(tmp2[12]).TableRow, { icon: tmp12, label: guild.name, trailing: tmp8, subLabel: tmp20, onPress: tmp7, disabled: tmp6 === InviteSendStates.SENDING || tmp6 === InviteSendStates.SENT, accessibilityState: tmp24, start, end });
          cResult[18] = tmp6 === InviteSendStates.SENDING || tmp6 === InviteSendStates.SENT;
          cResult[19] = end;
          cResult[20] = guild.name;
          cResult[21] = tmp7;
          cResult[22] = tmp12;
          cResult[23] = start;
          cResult[24] = tmp20;
          cResult[25] = tmp24;
          cResult[26] = tmp8;
          cResult[27] = tmp27;
          tmp25 = tmp27;
        }
        const tmp11 = jsx(source(tmp2[8]), { sendState: tmp6, onPressSend: tmp7 });
        cResult[7] = tmp7;
        cResult[8] = tmp6;
        cResult[9] = tmp11;
        tmp8 = tmp11;
      }
    }
    const fn2 = function x() {
      const obj = GuildInviteUtils;
      obj.sendGuildInvite(recipientId, guild.id, source);
    };
    cResult[3] = guild.id;
    cResult[4] = recipientId;
    cResult[5] = source;
    cResult[6] = fn2;
    tmp7 = fn2;
  }
  const fn = function c(arg0) {
    let tmp2;
    if (arg0[recipientId] != null) {
      tmp2 = tmp[guild.id];
    }
    return tmp2;
  };
  cResult[0] = guild.id;
  cResult[1] = recipientId;
  cResult[2] = fn;
  tmp4 = fn;
}) : ((arg0) => {
  let end;
  let row;
  let start;
  ({ row, recipientId: require, source: importDefault } = arg0);
  function handlePress() {
    const obj = GuildInviteUtils;
    obj.sendGuildInvite(require, guild.id, importDefault);
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
  ({ guild, size: require("GuildIcon").GuildIconSizes.SMALL });
  const tmp4 = jsx(require("InviteButton"), { sendState: tmp, onPressSend: handlePress });
  require("GuildIcon");
  const tmp7 = <View importantForAccessibility="no-hide-descendants" accessibilityElementsHidden>{null}</View>;
  const Text = require("Text/Text").Text;
  const intl = require("intl").intl;
  let tmp9 = tmp === InviteSendStates.SENDING;
  const obj4 = { count: row.memberCount };
  const tmp3 = guild;
  const tmp8 = <Text variant="text-xs/medium" color="text-default">{intl.format(require("intl").t.zRl6XR, obj4)}</Text>;
  if (!tmp9) {
    tmp9 = tmp === InviteSendStates.SENT;
  }
  return jsx(require("TableRow").TableRow, { icon: tmp7, label: guild.name, trailing: tmp4, subLabel: tmp8, onPress: handlePress, disabled: tmp9, accessibilityState: { disabled: tmp9 }, start, end });
}));
const result = size.fileFinishedImporting("modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteRow.tsx");

export default memoResult;