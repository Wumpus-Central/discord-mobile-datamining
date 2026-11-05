// discord_app/modules/game_organization_invites/native/GameOrganizationInviteActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2533 from "../GameOrganizationInvitesUntranslated.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import Search_SearchBar from "../../../design/components/Search/native/SearchBar.native.tsx";
import ActionSheet from "../../../design/components/Sheet/native/ActionSheet.native.tsx";
import UserPlaceholderRowDefault from "../../main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx";
import useGameOrganizationInviteSuggestionsDefault from "../useGameOrganizationInviteSuggestions.tsx";
import useLinkedGameOrganizationInviteSenderDefault from "../useLinkedGameOrganizationInviteSender.tsx";
import GameOrganizationInviteNoFriendsDefault from "GameOrganizationInviteNoFriends.tsx";
import GameOrganizationInviteListDefault from "GameOrganizationInviteList.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function Loading() {
  const children = [];
  let num = 0;
  do {
    let obj = { row: num };
    let arr = children.push(React4(UserPlaceholderRowDefault, obj, num));
    num = num + 1;
  } while (num < 10);
  return React4(View, { children });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5143);
let obj2 = { header: { paddingTop: nativeDefault.space.PX_16 }, centeredText: { textAlign: "center" } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationInviteActionSheet.tsx",
);

export default function GameOrganizationInviteActionSheet(guildId) {
  const tmp = closure_6();
  ({ users, isLoading, hasNoFriends, search } = useGameOrganizationInviteSuggestionsDefault());
  const tmp4 = useGameOrganizationInviteSuggestionsDefault();
  ({ getSendState, handleInvite } = useLinkedGameOrganizationInviteSenderDefault(guildId.guildId));
  const intl = util.intl;
  const stringResult = intl.string(_modDef2533.nVMqjA);
  const obj = { scrollable: true, startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null };
  const intl2 = util.intl;
  obj.dismissAccessibilityLabel = intl2.string(util.t.cpT0Cq);
  const obj2 = { spacing: nativeDefault.space.PX_16, style: tmp.header, children: null };
  const obj3 = { spacing: nativeDefault.space.PX_4, children: null };
  const obj4 = {
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    style: tmp.centeredText,
    children: null,
  };
  const intl3 = util.intl;
  obj4.children = intl3.formatToPlainString(_modDef2533.EnTIIr, { noun: stringResult });
  items = [React4(Text_Text.Heading, obj4)];
  const obj5 = { variant: "body-sm/medium", color: "text-muted", style: tmp.centeredText, children: null };
  const intl4 = util.intl;
  obj5.children = intl4.formatToPlainString(_modDef2533.BBk7Qw, { noun: stringResult });
  items[1] = React4(Text_Text.Text, obj5);
  obj3.children = items;
  const items1 = [hasOwnProperty(Stack_Stack.Stack, obj3)];
  const obj6 = { size: "md", round: true, onChange: search, placeholder: null };
  const intl5 = util.intl;
  obj6.placeholder = intl5.formatToPlainString(_modDef2533.cRK6SQ, { noun: stringResult });
  items1[1] = React4(Search_SearchBar.SearchBar, obj6);
  obj2.children = items1;
  obj.header = hasOwnProperty(Stack_Stack.Stack, obj2);
  if (isLoading) {
    let tmp7Result = React4(Loading, {});
  } else if (hasNoFriends) {
    tmp7Result = React4(GameOrganizationInviteNoFriendsDefault, {});
  } else {
    const obj7 = { users, getSendState, onInvite: handleInvite };
    tmp7Result = React4(GameOrganizationInviteListDefault, obj7);
  }
  obj.children = tmp7Result;
  return React4(ActionSheet.ActionSheet, obj);
}
