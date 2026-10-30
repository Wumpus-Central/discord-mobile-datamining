// === Module 11612: GameOrganizationInvitePickerActionSheet ===

// Module 11612 (GameOrganizationInvitePickerActionSheet)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import Stack_Stack from "Stack/Stack" /* 6022 */;
import TableRowGroup from "TableRowGroup" /* 7054 */;
import _modDef7332 from "module_7332" /* 7332 */;
import GameOrganizationInvitePickerRowDefault from "GameOrganizationInvitePickerRow" /* 11613 */;
import getGameOrganizationInviteSendStateKey from "getGameOrganizationInviteSendStateKey" /* 11614 */;
import groupInvitableGameOrganizationsByApplicationDefault from "groupInvitableGameOrganizationsByApplication" /* 11620 */;
import sendGameOrganizationInviteDefault from "sendGameOrganizationInvite" /* 11621 */;
import showGameOrganizationInviteErrorToastDefault from "showGameOrganizationInviteErrorToast" /* 11624 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1384 */;

const getGameOrganizationInviteSendStateKeyDefault = getGameOrganizationInviteSendStateKey;

require = fn;
function GameSection(arg0) {
  ({ group, userId: require, onInvite: importDefault } = arg0);
  const application = group.application;
  const obj = { spacing: nativeDefault.space.PX_8, children: null };
  const obj2 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: null };
  const tmp = closure_9();
  if (null != application.iconUrl) {
    const obj3 = { uri: application.iconUrl };
    let tmp5Result = obj3;
  } else {
    tmp5Result = _modDef7332;
  }
  const items = [closure_7(FastImageDefault, { source: tmp5Result, style: tmp.gameIcon }), closure_7(Text_Text.Text, { accessibilityRole: "header", variant: "text-sm/medium", color: "text-muted", children: application.name })];
  obj2.children = items;
  const items1 = [closure_8(Stack_Stack.Stack, obj2), ];
  const obj6 = { hasIcons: true, children: null };
  const gameOrganizations = group.gameOrganizations;
  obj6.children = gameOrganizations.map((organization) => {
    organization = organization.organization;
    return React5(GameOrganizationInvitePickerRowDefault, { organization, userId, onInvite }, organization.id);
  });
  items1[1] = closure_7(TableRowGroup.TableRowGroup, obj6);
  obj.children = items1;
  return closure_8(Stack_Stack.Stack, obj);
}
const ActivityIndicator = fn(17).ActivityIndicator;
const days = fn(11327).GAME_ORGANIZATION_INVITE_EXPIRY_DAYS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { header: { paddingTop: nativeDefault.space.PX_8 }, centeredText: { textAlign: "center" }, gameIcon: null, sections: null, status: null };
let size = { width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xs };
obj2.gameIcon = size;
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj2.sections = { paddingTop: nativeDefault.space.PX_16 };
let obj4 = { paddingTop: nativeDefault.space.PX_16 };
obj2.status = { paddingVertical: nativeDefault.space.PX_24 };
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInvitePickerActionSheet.tsx");

export default function GameOrganizationInvitePickerActionSheet(userId) {
  userId = userId.userId;
  let data;
  noop = undefined;
  const tmp = closure_9();
  const items = [UserStore];
  const stateFromStores = userId(data[13]).useStateFromStores(items, () => UserStore.getUser(userId));
  const tmp6 = stateFromStores(data[14])("game_organization_invite_picker");
  data = tmp6.data;
  const items1 = [data];
  const memo = noop.useMemo(() => {
    let tmp2 = null;
    if (null != data) {
      tmp2 = groupInvitableGameOrganizationsByApplicationDefault(tmp);
    }
    return tmp2;
  }, items1);
  const items2 = [stateFromStores];
  noop = noop.useCallback((organization) => {
    if (null != stateFromStores) {
      const result = getGameOrganizationInviteSendStateKey.toLinkedGameOrganization(organization);
      const tmp8 = getGameOrganizationInviteSendStateKeyDefault(result);
      sendGameOrganizationInviteDefault(tmp8, result, stateFromStores, showGameOrganizationInviteErrorToastDefault);
    }
  }, items2);
  if (null == memo) {
    if (null != tmp6.error) {
      const obj2 = { variant: "text-sm/medium", color: "text-muted", style: null, children: null };
      const items3 = [, ];
      ({ centeredText: arr6[0], status: arr6[1] } = tmp);
      obj2.style = items3;
      const intl2 = tmp2(tmp3[19]).intl;
      obj2.children = intl2.string(tmp2(tmp3[19]).t.fEptJP);
      let tmp12 = closure_7(tmp2(tmp3[10]).Text, obj2);
    } else {
      const obj3 = { style: tmp.status };
      tmp12 = closure_7(ActivityIndicator, obj3);
    }
  } else {
    if (0 === memo.length) {
      const obj4 = { variant: "text-sm/medium", color: "text-muted", style: null, children: null };
      const items4 = [, ];
      ({ centeredText: arr5[0], status: arr5[1] } = tmp);
      obj4.style = items4;
      const intl = tmp2(tmp3[19]).intl;
      obj4.children = intl.string(tmp5(tmp3[20]).v7A3HG);
      let tmp8 = closure_7(tmp2(tmp3[10]).Text, obj4);
      let tmp7 = closure_7;
    } else {
      tmp7 = closure_7;
      const obj5 = { spacing: tmp5(tmp3[6]).space.PX_24, style: tmp.sections, children: memo.map((group) => React5(GameSection, { group, userId, onInvite }, group.application.id)) };
      tmp8 = closure_7(tmp2(tmp3[7]).Stack, obj5);
    }
    const obj6 = { scrollable: true, dismissAccessibilityLabel: null, header: null, children: null };
    const intl3 = tmp2(tmp3[19]).intl;
    obj6.dismissAccessibilityLabel = intl3.string(tmp2(tmp3[19]).t.cpT0Cq);
    const obj7 = { spacing: tmp5(tmp3[6]).space.PX_4, style: tmp.header, children: null };
    const obj8 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.centeredText, children: null };
    const intl4 = tmp2(tmp3[19]).intl;
    obj8.children = intl4.string(tmp5(tmp3[20])["v5/qxX"]);
    const items5 = [tmp7(tmp2(tmp3[10]).Heading, obj8), ];
    const obj9 = { variant: "text-sm/medium", color: "text-muted", style: tmp.centeredText, children: null };
    const intl5 = tmp2(tmp3[19]).intl;
    let str = tmp5(tmp3[22]).getName(stateFromStores);
    if (str == null) {
      str = "";
    }
    const obj10 = { username: str, days };
    obj9.children = intl5.formatToPlainString(tmp5(tmp3[20]).txHfjn, obj10);
    items5[1] = tmp7(tmp2(tmp3[10]).Text, obj9);
    obj7.children = items5;
    obj6.header = closure_8(tmp2(tmp3[7]).Stack, obj7);
    obj6.children = tmp8;
    return tmp7(tmp2(tmp3[21]).ActionSheet, obj6);
  }
  let obj = userId(data[13]);
};