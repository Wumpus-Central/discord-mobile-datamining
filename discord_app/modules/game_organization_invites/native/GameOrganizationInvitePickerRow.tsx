// === Module 12074: GameOrganizationInvitePickerRow ===

// Module 12074 (GameOrganizationInvitePickerRow)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef2650 from "module_2650" /* 2650 */;
import useToken from "useToken" /* 5576 */;
import Text_Text from "Text/Text" /* 5603 */;
import Stack_Stack from "Stack/Stack" /* 6084 */;
import TableRow from "TableRow" /* 6113 */;
import GroupIcon from "GroupIcon" /* 7124 */;
import InviteButtonDefault from "InviteButton" /* 10453 */;
import getGameOrganizationInviteSendStateKey from "getGameOrganizationInviteSendStateKey" /* 12075 */;
import GameOrganizationIconDefault from "GameOrganizationIcon" /* 12076 */;
import noop from "module_19" /* 19 */;

const getGameOrganizationInviteSendStateKeyDefault = getGameOrganizationInviteSendStateKey;

require = fn;
let closure_4 = fn(10451).useInstantInviteSendStates;
const InviteSendStates = fn(5745).InviteSendStates;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInvitePickerRow.tsx");

export default noop.memo(function GameOrganizationInvitePickerRow(organization) {
  organization = organization.organization;
  ({ userId: importDefault, onInvite } = organization);
  const tmp3 = getGameOrganizationInviteSendStateKeyDefault;
  closure_3 = tmp3(getGameOrganizationInviteSendStateKey.toLinkedGameOrganization(organization));
  const tmp5 = closure_4((arg0) => {
    let tmp2;
    if (arg0[closure_3] != null) {
      tmp2 = tmp[importDefault];
    }
    if (tmp2 == null) {
      tmp2 = null;
    }
    return tmp2;
  });
  items = [onInvite, organization];
  const callback = noop.useCallback(() => onInvite(organization), items);
  ({ memberCount, maxMembers } = organization);
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_ICON_SIZE);
  const obj3 = { icon: null, label: null, subLabel: null, trailing: null, onPress: null, disabled: null };
  const obj4 = { iconUrl: organization.iconUrl, size: token, borderRadius: null, fallback: "guild" };
  obj4.borderRadius = nativeDefault.radii.md;
  obj3.icon = timestampProducer(GameOrganizationIconDefault, obj4);
  obj3.label = organization.name;
  let tmp10;
  if (null != memberCount) {
    if (null != maxMembers) {
      const obj5 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: null };
      const obj6 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
      const items1 = [timestampProducer(GroupIcon.GroupIcon, obj6), ];
      const obj7 = { variant: "body-xs/medium", color: "text-muted", children: null };
      const intl = util.intl;
      const obj8 = { count: memberCount, max: maxMembers };
      obj7.children = intl.formatToPlainString(_modDef2650.VuENGl, obj8);
      items1[1] = timestampProducer(Text_Text.Text, obj7);
      obj5.children = items1;
      tmp10 = metroImportDefault(Stack_Stack.Stack, obj5);
    }
  }
  obj3.subLabel = tmp10;
  obj3.trailing = timestampProducer(InviteButtonDefault, { sendState: tmp5, onPressSend: callback });
  obj3.onPress = callback;
  obj3.disabled = tmp5 === InviteSendStates.SENDING || tmp5 === InviteSendStates.SENT;
  return timestampProducer(TableRow.TableRow, obj3);
});