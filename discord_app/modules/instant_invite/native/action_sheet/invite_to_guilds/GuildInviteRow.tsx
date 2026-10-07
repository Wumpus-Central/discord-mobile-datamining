// discord_app/modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteRow.tsx
import GuildInviteUtils from "../../GuildInviteUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const useGuildInviteSendStates = fn(12810).useGuildInviteSendStates;
const InviteSendStates = fn(7239).InviteSendStates;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/instant_invite/native/action_sheet/invite_to_guilds/GuildInviteRow.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (source) => {
        const cResult = recipientId(guild[6]).c(28);
        ({ row, recipientId } = source);
        source = source.source;
        ({ start, end } = source);
        guild = row.guild;
        if (cResult[0] === guild.id) {
          if (cResult[1] === recipientId) {
            let tmp4 = cResult[2];
          }
          const tmp6 = useGuildInviteSendStates(tmp4);
          if (cResult[3] === guild.id) {
            if (cResult[4] === recipientId) {
              if (cResult[5] === source) {
                let tmp7 = cResult[6];
              }
              if (cResult[7] === tmp7) {
                if (cResult[8] === tmp6) {
                  let tmp8 = cResult[9];
                }
                if (cResult[10] !== guild) {
                  const obj2 = {
                    importantForAccessibility: "no-hide-descendants",
                    accessibilityElementsHidden: true,
                    children: null,
                  };
                  const obj3 = { guild, size: recipientId(tmp2[9]).GuildIconSizes.SMALL };
                  obj2.children = jsx(source(tmp2[9]), { guild, size: recipientId(tmp2[9]).GuildIconSizes.SMALL });
                  const tmp17 = (
                    <View importantForAccessibility="no-hide-descendants" accessibilityElementsHidden>
                      {null}
                    </View>
                  );
                  cResult[10] = guild;
                  cResult[11] = tmp17;
                  let tmp12 = tmp17;
                  const tmp16 = source(tmp2[9]);
                } else {
                  tmp12 = cResult[11];
                }
                if (cResult[12] !== row.memberCount) {
                  const intl = recipientId(tmp2[10]).intl;
                  const obj4 = { count: row.memberCount };
                  const formatResult = intl.format(recipientId(tmp2[10]).t.zRl6XR, obj4);
                  cResult[12] = row.memberCount;
                  cResult[13] = formatResult;
                  let tmp18 = formatResult;
                } else {
                  tmp18 = cResult[13];
                }
                if (cResult[14] !== tmp18) {
                  const obj5 = { variant: "text-xs/medium", color: "text-default", children: tmp18 };
                  const tmp22 = jsx(recipientId(tmp2[11]).Text, {
                    variant: "text-xs/medium",
                    color: "text-default",
                    children: tmp18,
                  });
                  cResult[14] = tmp18;
                  cResult[15] = tmp22;
                  let tmp20 = tmp22;
                } else {
                  tmp20 = cResult[15];
                }
                if (cResult[16] !== (tmp6 === InviteSendStates.SENDING || tmp6 === InviteSendStates.SENT)) {
                  const obj6 = { disabled: tmp23 };
                  cResult[16] = tmp23;
                  cResult[17] = obj6;
                  let tmp24 = obj6;
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
                                if (cResult[26] === tmp8) {
                                  let tmp25 = cResult[27];
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
                const obj7 = {
                  icon: tmp12,
                  label: guild.name,
                  trailing: tmp8,
                  subLabel: tmp20,
                  onPress: tmp7,
                  disabled: tmp6 === InviteSendStates.SENDING || tmp6 === InviteSendStates.SENT,
                  accessibilityState: tmp24,
                  start,
                  end,
                };
                const tmp27 = jsx(recipientId(tmp2[12]).TableRow, {
                  icon: tmp12,
                  label: guild.name,
                  trailing: tmp8,
                  subLabel: tmp20,
                  onPress: tmp7,
                  disabled: tmp6 === InviteSendStates.SENDING || tmp6 === InviteSendStates.SENT,
                  accessibilityState: tmp24,
                  start,
                  end,
                });
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
              const obj8 = { sendState: tmp6, onPressSend: tmp7 };
              const tmp11 = jsx(source(tmp2[8]), { sendState: tmp6, onPressSend: tmp7 });
              cResult[7] = tmp7;
              cResult[8] = tmp6;
              cResult[9] = tmp11;
              tmp8 = tmp11;
            }
          }
          const fn2 = function x() {
            GuildInviteUtils.sendGuildInvite(recipientId, guild.id, source);
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
        const obj = recipientId(guild[6]);
      }
    : (arg0) => {
        ({ row, recipientId: require, source: importDefault } = arg0);
        function handlePress() {
          GuildInviteUtils.sendGuildInvite(closure_1_0, guild.id, importDefault);
        }
        guild = row.guild;
        ({ start, end } = arg0);
        const tmp = useGuildInviteSendStates((arg0) => {
          let tmp2;
          if (arg0[require] != null) {
            tmp2 = tmp[guild.id];
          }
          return tmp2;
        });
        const obj = {
          importantForAccessibility: "no-hide-descendants",
          accessibilityElementsHidden: true,
          children: null,
        };
        const obj2 = { guild, size: null };
        const tmp3 = guild;
        const tmp4 = jsx(require("InviteButton"), { sendState: tmp, onPressSend: handlePress });
        obj2.size = require("GuildIcon").GuildIconSizes.SMALL;
        obj.children = jsx(require("GuildIcon"), { guild, size: null });
        const tmp5 = require("GuildIcon");
        const obj3 = { variant: "text-xs/medium", color: "text-default", children: null };
        const intl = require("util").intl;
        obj3.children = intl.format(require("util").t.zRl6XR, { count: row.memberCount });
        let tmp9 = tmp === InviteSendStates.SENDING;
        const obj4 = { count: row.memberCount };
        const tmp7 = (
          <View importantForAccessibility="no-hide-descendants" accessibilityElementsHidden>
            {null}
          </View>
        );
        if (!tmp9) {
          tmp9 = tmp === InviteSendStates.SENT;
        }
        const tmp8 = jsx(require("Text/Text").Text, {
          variant: "text-xs/medium",
          color: "text-default",
          children: null,
        });
        return jsx(require("TableRow").TableRow, {
          icon: tmp7,
          label: guild.name,
          trailing: tmp4,
          subLabel: jsx(require("Text/Text").Text, {
            variant: "text-xs/medium",
            color: "text-default",
            children: null,
          }),
          onPress: handlePress,
          disabled: tmp9,
          accessibilityState: { disabled: tmp9 },
          start,
          end,
        });
      },
);
