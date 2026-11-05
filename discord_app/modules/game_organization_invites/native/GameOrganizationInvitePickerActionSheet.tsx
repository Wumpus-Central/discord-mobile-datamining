// discord_app/modules/game_organization_invites/native/GameOrganizationInvitePickerActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import TableRowGroup from "../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import _modDef7477 from "../../../../_runtime/metro/07477__.js";
import GameOrganizationInvitePickerRowDefault from "GameOrganizationInvitePickerRow.tsx";
import useGameOrganizationInvitePickerDefault from "../useGameOrganizationInvitePicker.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function GameSection(arg0) {
  ({ group, userId: require, onInvite: importDefault } = arg0);
  const application = group.application;
  const obj = { spacing: nativeDefault.space.PX_8, children: null };
  const obj2 = { direction: "horizontal", spacing: nativeDefault.space.PX_4, align: "center", children: null };
  const tmp = closure_7();
  if (null != application.iconUrl) {
    const obj3 = { uri: application.iconUrl };
    let tmp5Result = obj3;
  } else {
    tmp5Result = _modDef7477;
  }
  items = [
    closure_5(FastImageDefault, { source: tmp5Result, style: tmp.gameIcon }),
    closure_5(Text_Text.Text, {
      accessibilityRole: "header",
      variant: "body-sm/medium",
      color: "text-muted",
      children: application.name,
    }),
  ];
  obj2.children = items;
  const items1 = [closure_6(Stack_Stack.Stack, obj2)];
  const obj6 = { hasIcons: true, children: null };
  const gameOrganizations = group.gameOrganizations;
  obj6.children = gameOrganizations.map((organization) => {
    organization = organization.organization;
    return hasOwnProperty(GameOrganizationInvitePickerRowDefault, { organization, userId, onInvite }, organization.id);
  });
  items1[1] = closure_5(TableRowGroup.TableRowGroup, obj6);
  obj.children = items1;
  return closure_6(Stack_Stack.Stack, obj);
}
const ActivityIndicator = fn(17).ActivityIndicator;
const days = fn(11560).GAME_ORGANIZATION_INVITE_EXPIRY_DAYS;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5143);
let obj2 = {
  header: { paddingTop: nativeDefault.space.PX_8 },
  centeredText: { textAlign: "center" },
  gameIcon: null,
  sections: null,
  status: null,
};
let size = {
  width: nativeDefault.space.PX_16,
  height: nativeDefault.space.PX_16,
  borderRadius: nativeDefault.radii.xs,
};
obj2.gameIcon = size;
let obj3 = { paddingTop: nativeDefault.space.PX_8 };
obj2.sections = { paddingTop: nativeDefault.space.PX_16 };
let obj4 = { paddingTop: nativeDefault.space.PX_16 };
obj2.status = { paddingVertical: nativeDefault.space.PX_24 };
let closure_7 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationInvitePickerActionSheet.tsx",
);

export default function GameOrganizationInvitePickerActionSheet(userId) {
  userId = userId.userId;
  importDefault = undefined;
  const tmp = closure_7();
  const tmp4 = useGameOrganizationInvitePickerDefault(userId);
  ({ groups, handleInvite: c1 } = tmp4);
  if (null == groups) {
    if (null != tmp4.error) {
      const obj2 = { variant: "body-sm/medium", color: "text-muted", style: null, children: null };
      items = [,];
      ({ centeredText: arr2[0], status: arr2[1] } = tmp);
      obj2.style = items;
      const intl2 = userId(1113).intl;
      obj2.children = intl2.string(userId(1113).t.fEptJP);
      let tmp13 = closure_5(userId(5763).Text, obj2);
    } else {
      const obj3 = { style: tmp.status };
      tmp13 = closure_5(ActivityIndicator, obj3);
    }
  } else {
    if (0 === groups.length) {
      const obj4 = { variant: "body-sm/medium", color: "text-muted", style: null, children: null };
      const items1 = [,];
      ({ centeredText: arr[0], status: arr[1] } = tmp);
      obj4.style = items1;
      const intl = userId(1113).intl;
      obj4.children = intl.string(tmp2(2533).v7A3HG);
      let tmp8 = closure_5(userId(5763).Text, obj4);
      let tmp6 = closure_5;
    } else {
      tmp6 = closure_5;
      const obj = {
        spacing: tmp2(575).space.PX_24,
        style: tmp.sections,
        children: groups.map((group) => hasOwnProperty(GameSection, { group, userId, onInvite }, group.application.id)),
      };
      tmp8 = closure_5(userId(6165).Stack, obj);
    }
    const obj5 = { scrollable: true, dismissAccessibilityLabel: null, header: null, children: null };
    const intl3 = userId(1113).intl;
    obj5.dismissAccessibilityLabel = intl3.string(userId(1113).t.cpT0Cq);
    const obj6 = { spacing: tmp2(575).space.PX_4, style: tmp.header, children: null };
    const obj7 = {
      variant: "heading-lg/semibold",
      color: "mobile-text-heading-primary",
      style: tmp.centeredText,
      children: null,
    };
    const intl4 = userId(1113).intl;
    obj7.children = intl4.string(tmp2(2533)["v5/qxX"]);
    const items2 = [tmp6(userId(5763).Heading, obj7)];
    const obj8 = { variant: "body-sm/medium", color: "text-muted", style: tmp.centeredText, children: null };
    const intl5 = userId(1113).intl;
    let str = tmp2(5197).getName(tmp5);
    if (str == null) {
      str = "";
    }
    const obj9 = { username: str, days };
    obj8.children = intl5.formatToPlainString(tmp2(2533).txHfjn, obj9);
    items2[1] = tmp6(userId(5763).Text, obj8);
    obj6.children = items2;
    obj5.header = closure_6(userId(6165).Stack, obj6);
    obj5.children = tmp8;
    return tmp6(userId(7504).ActionSheet, obj5);
  }
}
