// discord_app/modules/game_organization_invites/native/GameOrganizationInviteNoFriends.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2530 from "../GameOrganizationInvitesUntranslated.messages.js";
import RootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function handleAddFriends() {
  ActionSheetActionCreatorsDefault.hideActionSheet();
  const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
  if (rootNavigationRef != null) {
    const obj3 = { screen: "add-friends", params: { sourcePage: "Game Organization Invite Empty State" } };
    rootNavigationRef.navigate("friends", obj3);
  }
}
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5170);
let obj2 = {
  container: { alignItems: "center", padding: nativeDefault.space.PX_48 },
  centeredText: { textAlign: "center" },
};
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationInviteNoFriends.tsx",
);

export default function GameOrganizationInviteNoFriends() {
  const tmp = closure_5();
  const intl = util.intl;
  const obj = { spacing: nativeDefault.space.PX_16, style: tmp.container, children: null };
  const obj2 = { spacing: nativeDefault.space.PX_8, children: null };
  const obj3 = {
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    style: tmp.centeredText,
    children: null,
  };
  const intl2 = util.intl;
  obj3.children = intl2.string(_modDef2530["3qrm/9"]);
  items = [React3(Text_Text.Heading, obj3)];
  const obj4 = { variant: "body-md/medium", color: "text-muted", style: tmp.centeredText, children: null };
  const intl3 = util.intl;
  obj4.children = intl3.formatToPlainString(_modDef2530["NyR+6P"], { noun: intl.string(_modDef2530.xXXGsq) });
  items[1] = React3(Text_Text.Text, obj4);
  obj2.children = items;
  const items1 = [React4(Stack_Stack.Stack, obj2)];
  const obj5 = { text: null, onPress: null };
  const intl4 = util.intl;
  obj5.text = intl4.string(_modDef2530.kdLF2T);
  obj5.onPress = handleAddFriends;
  items1[1] = React3(components_Button_Button.Button, obj5);
  obj.children = items1;
  return React4(Stack_Stack.Stack, obj);
}
