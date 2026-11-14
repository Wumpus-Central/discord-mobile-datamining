// === Module 16404: GameOrganizationInviteActionSheet ===

// Module 16404 (GameOrganizationInviteActionSheet)
import nativeDefault from "native" /* 575 */;
import _modDef2565 from "module_2565" /* 2565 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 8474 */;
import getGameOrganizationDisplayNounDefault from "getGameOrganizationDisplayNoun" /* 12539 */;
import useGameOrganizationInviteSuggestionsDefault from "useGameOrganizationInviteSuggestions" /* 16405 */;
import useLinkedGameOrganizationInviteSenderDefault from "useLinkedGameOrganizationInviteSender" /* 16406 */;
import GameOrganizationInviteNoFriendsDefault from "GameOrganizationInviteNoFriends" /* 16407 */;
import GameOrganizationInviteListDefault from "GameOrganizationInviteList" /* 16408 */;
import noop from "module_19" /* 19 */;
import GameOrganizationStore from "GameOrganizationStore" /* 16349 */;

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
const createStyles = fn(5306);
let obj2 = { header: { paddingTop: nativeDefault.space.PX_16 }, centeredText: { textAlign: "center" } };
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
  const data = guildId(16402).useLinkedGameOrganization(guildId).data;
  const obj = guildId(16402);
  items = [GameOrganizationStore];
  const items1 = [guildId];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GameOrganizationStore.getDisplayNounByGuildId(guildId), items1);
  const obj2 = guildId(504);
  const tmp9 = getGameOrganizationDisplayNounDefault({ displayNoun: stateFromStores, lowercase: true });
  if (null != data) {
    const intl2 = tmp6(1113).intl;
    const obj3 = { orgName: data.name, noun: tmp9 };
    let formatToPlainStringResult = intl2.formatToPlainString(_modDef2565.VGOQ4v, obj3);
  } else {
    const intl = tmp6(1113).intl;
    const obj4 = { noun: tmp9 };
    formatToPlainStringResult = intl.formatToPlainString(_modDef2565.BBk7Qw, obj4);
  }
  const obj5 = { scrollable: true, startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null };
  const intl3 = tmp6(1113).intl;
  obj5.dismissAccessibilityLabel = intl3.string(guildId(1113).t.cpT0Cq);
  const obj6 = { spacing: nativeDefault.space.PX_16, style: tmp.header, children: null };
  const obj7 = { spacing: nativeDefault.space.PX_4, children: null };
  const obj8 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centeredText, children: null };
  const intl4 = tmp6(1113).intl;
  obj8.children = intl4.formatToPlainString(_modDef2565.EnTIIr, { noun: getGameOrganizationDisplayNounDefault({ displayNoun: stateFromStores }) });
  const items2 = [closure_5(guildId(5929).Heading, obj8), closure_5(guildId(5929).Text, { variant: "body-sm/medium", color: "text-muted", style: tmp.centeredText, children: formatToPlainStringResult })];
  obj7.children = items2;
  const items3 = [closure_6(guildId(6337).Stack, obj7), ];
  const obj10 = { size: "md", round: true, onChange: search, placeholder: null };
  const intl5 = tmp6(1113).intl;
  obj10.placeholder = intl5.formatToPlainString(_modDef2565.cRK6SQ, { noun: tmp9 });
  items3[1] = closure_5(guildId(7825).SearchBar, obj10);
  obj6.children = items3;
  obj5.header = closure_6(guildId(6337).Stack, obj6);
  if (isLoading) {
    let tmp11Result = closure_5(Loading, {});
  } else if (hasNoFriends) {
    const obj11 = { noun: tmp9 };
    tmp11Result = closure_5(GameOrganizationInviteNoFriendsDefault, obj11);
  } else {
    const obj12 = { users, getSendState, onInvite: handleInvite };
    tmp11Result = closure_5(GameOrganizationInviteListDefault, obj12);
  }
  obj5.children = tmp11Result;
  return closure_5(guildId(7951).ActionSheet, obj5);
};