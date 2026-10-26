// === Module 11316: GameOrganizationInvitePickerRow ===

// Module 11316 (GameOrganizationInvitePickerRow)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import _modDef2406 from "module_2406" /* 2406 */;
import Text_Text from "Text/Text" /* 5234 */;
import FastImageDefault from "FastImage" /* 5669 */;
import Stack_Stack from "Stack/Stack" /* 5977 */;
import TableRow from "TableRow" /* 6903 */;
import _modDef7265 from "module_7265" /* 7265 */;
import GroupIcon from "GroupIcon" /* 8560 */;
import InviteButtonDefault from "InviteButton" /* 9136 */;
import getGameOrganizationInviteSendStateKey from "getGameOrganizationInviteSendStateKey" /* 11317 */;
import noop from "module_19" /* 19 */;

const getGameOrganizationInviteSendStateKeyDefault = getGameOrganizationInviteSendStateKey;

require = fn;
let closure_4 = fn(9131).useInstantInviteSendStates;
const InviteSendStates = fn(7809).InviteSendStates;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4971);
let obj = { icon: null };
let size = { width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, height: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, borderRadius: nativeDefault.radii.md };
obj.icon = size;
let closure_8 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInvitePickerRow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationInvitePickerRow(organization) {
  const cResult = c.c(26);
  organization = organization.organization;
  const userId = organization.userId;
  const onInvite = organization.onInvite;
  const tmp4 = closure_8();
  if (cResult[0] !== organization) {
    const tmp7 = getGameOrganizationInviteSendStateKeyDefault;
    const tmp7Result = tmp7(getGameOrganizationInviteSendStateKey.toLinkedGameOrganization(organization));
    cResult[0] = organization;
    cResult[1] = tmp7Result;
    let tmp5 = tmp7Result;
    const tmpResult = getGameOrganizationInviteSendStateKey;
  } else {
    tmp5 = cResult[1];
  }
  closure_3 = tmp5;
  if (cResult[2] === tmp5) {
    if (cResult[3] === userId) {
      let tmp9 = cResult[4];
    }
    const tmp11 = closure_4(tmp9);
    if (cResult[5] === onInvite) {
      if (cResult[6] === organization) {
        let tmp12 = cResult[7];
      }
      ({ memberCount, maxMembers } = organization);
      if (cResult[8] !== organization.iconUrl) {
        if (null != organization.iconUrl) {
          const obj2 = { uri: organization.iconUrl };
          let tmp16 = obj2;
        } else {
          tmp16 = _modDef7265;
        }
        cResult[8] = organization.iconUrl;
        cResult[9] = tmp16;
      } else {
        if (cResult[10] === tmp4.icon) {
          if (cResult[11] === tmp13) {
            let tmp18 = cResult[12];
          }
          if (cResult[13] === maxMembers) {
            if (cResult[14] === memberCount) {
              let tmp22 = cResult[15];
            }
            if (cResult[16] === tmp12) {
              if (cResult[17] === tmp11) {
                let tmp28 = cResult[18];
              }
              if (cResult[19] === tmp12) {
                if (cResult[20] === organization.name) {
                  if (cResult[21] === tmp18) {
                    if (cResult[22] === tmp22) {
                      if (cResult[23] === tmp28) {
                        if (cResult[24] === tmp32) {
                          let tmp33 = cResult[25];
                        }
                        return tmp33;
                      }
                    }
                  }
                }
              }
              const obj3 = { icon: tmp18, label: organization.name, subLabel: tmp22, trailing: tmp28, onPress: tmp12, disabled: tmp11 === InviteSendStates.SENDING || tmp11 === InviteSendStates.SENT };
              const tmp35 = timestampProducer(TableRow.TableRow, obj3);
              cResult[19] = tmp12;
              cResult[20] = organization.name;
              cResult[21] = tmp18;
              cResult[22] = tmp22;
              cResult[23] = tmp28;
              cResult[24] = tmp11 === InviteSendStates.SENDING || tmp11 === InviteSendStates.SENT;
              cResult[25] = tmp35;
              tmp33 = tmp35;
            }
            const obj4 = { sendState: tmp11, onPressSend: tmp12 };
            const tmp31 = timestampProducer(InviteButtonDefault, obj4);
            cResult[16] = tmp12;
            cResult[17] = tmp11;
            cResult[18] = tmp31;
            tmp28 = tmp31;
          }
          let tmp24;
          if (null != memberCount) {
            if (null != maxMembers) {
              const obj5 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: null };
              const obj6 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
              const items = [timestampProducer(GroupIcon.GroupIcon, obj6), ];
              const obj7 = { variant: "text-xs/medium", color: "text-muted", children: null };
              const intl = util.intl;
              const obj8 = { count: memberCount, max: maxMembers };
              obj7.children = intl.formatToPlainString(_modDef2406.VuENGl, obj8);
              items[1] = timestampProducer(Text_Text.Text, obj7);
              obj5.children = items;
              tmp24 = React5(Stack_Stack.Stack, obj5);
            }
          }
          cResult[13] = maxMembers;
          cResult[14] = memberCount;
          cResult[15] = tmp24;
          tmp22 = tmp24;
        }
        const obj9 = { source: cResult[9], style: tmp4.icon };
        const tmp21 = timestampProducer(FastImageDefault, obj9);
        cResult[10] = tmp4.icon;
        cResult[11] = cResult[9];
        cResult[12] = tmp21;
        tmp18 = tmp21;
      }
    }
    const fn2 = function z() {
      return onInvite(organization);
    };
    cResult[5] = onInvite;
    cResult[6] = organization;
    cResult[7] = fn2;
    tmp12 = fn2;
  }
  const fn = function _(arg0) {
    let tmp2;
    if (arg0[closure_3] != null) {
      tmp2 = tmp[userId];
    }
    if (tmp2 == null) {
      tmp2 = null;
    }
    return tmp2;
  };
  cResult[2] = tmp5;
  cResult[3] = userId;
  cResult[4] = fn;
  tmp9 = fn;
}) : (function GameOrganizationInvitePickerRow(organization) {
  organization = organization.organization;
  ({ userId: importDefault, onInvite } = organization);
  const tmp = closure_8();
  const tmp4 = getGameOrganizationInviteSendStateKeyDefault;
  closure_3 = tmp4(getGameOrganizationInviteSendStateKey.toLinkedGameOrganization(organization));
  const tmp6 = closure_4((arg0) => {
    let tmp2;
    if (arg0[closure_3] != null) {
      tmp2 = tmp[importDefault];
    }
    if (tmp2 == null) {
      tmp2 = null;
    }
    return tmp2;
  });
  const items = [onInvite, organization];
  const callback = noop.useCallback(() => onInvite(organization), items);
  ({ memberCount, maxMembers } = organization);
  if (null != organization.iconUrl) {
    const obj2 = { uri: organization.iconUrl };
    let tmp2Result = obj2;
  } else {
    tmp2Result = _modDef7265;
  }
  const obj3 = { icon: timestampProducer(FastImageDefault, { source: tmp2Result, style: tmp.icon }), label: organization.name, subLabel: null, trailing: null, onPress: null, disabled: null };
  let tmp11;
  if (null != memberCount) {
    if (null != maxMembers) {
      const obj5 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: null };
      const obj6 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
      const items1 = [timestampProducer(GroupIcon.GroupIcon, obj6), ];
      const obj7 = { variant: "text-xs/medium", color: "text-muted", children: null };
      const intl = util.intl;
      const obj8 = { count: memberCount, max: maxMembers };
      obj7.children = intl.formatToPlainString(_modDef2406.VuENGl, obj8);
      items1[1] = timestampProducer(Text_Text.Text, obj7);
      obj5.children = items1;
      tmp11 = React5(Stack_Stack.Stack, obj5);
    }
  }
  obj3.subLabel = tmp11;
  obj3.trailing = timestampProducer(InviteButtonDefault, { sendState: tmp6, onPressSend: callback });
  obj3.onPress = callback;
  obj3.disabled = tmp6 === InviteSendStates.SENDING || tmp6 === InviteSendStates.SENT;
  return timestampProducer(TableRow.TableRow, obj3);
}));