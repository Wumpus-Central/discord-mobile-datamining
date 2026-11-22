// === Module 15178: GameOrganizationInviteActionSheet ===

// Module 15178 (GameOrganizationInviteActionSheet)
import nativeDefault from "native" /* 575 */;
import _modDef2639 from "module_2639" /* 2639 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 8065 */;
import useGameOrganizationInviteSuggestionsDefault from "useGameOrganizationInviteSuggestions" /* 15179 */;
import useLinkedGameOrganizationInviteSenderDefault from "useLinkedGameOrganizationInviteSender" /* 15180 */;
import GameOrganizationInviteNoFriendsDefault from "GameOrganizationInviteNoFriends" /* 15181 */;
import GameOrganizationInviteListDefault from "GameOrganizationInviteList" /* 15182 */;
import noop from "module_19" /* 19 */;
import GameOrganizationStore from "GameOrganizationStore" /* 15123 */;

const require = fn;
function Loading() {
  const children = [];
  let num = 0;
  do {
    let obj = { row: num };
    let arr = children.push(hasOwnProperty(UserPlaceholderRowDefault, obj, num));
    num = num + 1;
  } while (num < 10);
  return hasOwnProperty(View, { children });
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(4913);
const obj2 = { header: { paddingTop: nativeDefault.space.PX_16 }, centeredText: { textAlign: "center" } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInviteActionSheet.tsx");

export default function GameOrganizationInviteActionSheet(guildId) {
  guildId = guildId.guildId;
  const tmp = closure_7();
  ({ users, isLoading, hasNoFriends, search } = useGameOrganizationInviteSuggestionsDefault());
  const tmp4 = useGameOrganizationInviteSuggestionsDefault();
  ({ getSendState, handleInvite } = useLinkedGameOrganizationInviteSenderDefault(guildId));
  const tmp5 = useLinkedGameOrganizationInviteSenderDefault(guildId);
  const data = guildId(15176).useLinkedGameOrganization(guildId).data;
  const obj = guildId(15176);
  items = [GameOrganizationStore];
  const items1 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GameOrganizationStore.getDisplayNounByGuildId(guildId), items1);
  if (null != data) {
    const intl2 = tmp6(1112).intl;
    const obj3 = { orgName: data.name, displayNoun: null };
    let str2 = stateFromStores;
    if (stateFromStores == null) {
      str2 = "other";
    }
    obj3.displayNoun = str2;
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef2639.VGOQ4v, obj3);
  } else {
    const intl = tmp6(1112).intl;
    let str = stateFromStores;
    if (stateFromStores == null) {
      str = "other";
    }
    const obj4 = { displayNoun: str };
    formatToPlainStringResult = intl.formatToPlainString(_modDef2639.BBk7Qw, obj4);
  }
  const obj5 = { scrollable: true, startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null };
  const intl3 = tmp6(1112).intl;
  obj5.dismissAccessibilityLabel = intl3.string(guildId(1112).t.cpT0Cq);
  const obj6 = { spacing: nativeDefault.space.PX_16, style: tmp.header, children: null };
  const obj7 = { spacing: nativeDefault.space.PX_4, children: null };
  const obj8 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centeredText, children: null };
  const intl4 = tmp6(1112).intl;
  let str3 = stateFromStores;
  if (stateFromStores == null) {
    str3 = "other";
  }
  obj8.children = intl4.formatToPlainString(_modDef2639.EnTIIr, { displayNoun: str3 });
  const items2 = [closure_5(guildId(5504).Heading, obj8), closure_5(guildId(5504).Text, { variant: "body-sm/medium", color: "text-muted", style: tmp.centeredText, children: formatToPlainStringResult })];
  obj7.children = items2;
  const items3 = [closure_6(guildId(5929).Stack, obj7), ];
  const obj10 = { size: "md", round: true, onChange: search, placeholder: null };
  const intl5 = tmp6(1112).intl;
  let str4 = stateFromStores;
  if (stateFromStores == null) {
    str4 = "other";
  }
  obj10.placeholder = intl5.formatToPlainString(_modDef2639.cRK6SQ, { displayNoun: str4 });
  items3[1] = closure_5(guildId(7427).SearchBar, obj10);
  obj6.children = items3;
  obj5.header = closure_6(guildId(5929).Stack, obj6);
  if (isLoading) {
    let tmp9Result = closure_5(Loading, {});
  } else if (hasNoFriends) {
    const obj11 = { displayNoun: stateFromStores };
    tmp9Result = closure_5(GameOrganizationInviteNoFriendsDefault, obj11);
  } else {
    const obj12 = { users, getSendState, onInvite: handleInvite };
    tmp9Result = closure_5(GameOrganizationInviteListDefault, obj12);
  }
  obj5.children = tmp9Result;
  return closure_5(guildId(7553).ActionSheet, obj5);
};