// === Module 11613: GameOrganizationInvitePickerRow ===

// Module 11613 (GameOrganizationInvitePickerRow)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import _modDef2405 from "module_2405" /* 2405 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import TableRow from "TableRow" /* 6969 */;
import _modDef7332 from "module_7332" /* 7332 */;
import GroupIcon from "GroupIcon" /* 8653 */;
import InviteButtonDefault from "InviteButton" /* 9185 */;
import getGameOrganizationInviteSendStateKey from "getGameOrganizationInviteSendStateKey" /* 11614 */;
import noop from "module_19" /* 19 */;

const getGameOrganizationInviteSendStateKeyDefault = getGameOrganizationInviteSendStateKey;

require = fn;
let closure_4 = fn(9180).useInstantInviteSendStates;
const InviteSendStates = fn(7872).InviteSendStates;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5009);
let obj = { icon: null };
let size = { width: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, height: nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE, borderRadius: nativeDefault.radii.md };
obj.icon = size;
let closure_8 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInvitePickerRow.tsx");

export default noop.memo(function GameOrganizationInvitePickerRow(organization) {
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
    tmp2Result = _modDef7332;
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
      obj7.children = intl.formatToPlainString(_modDef2405.VuENGl, obj8);
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
});