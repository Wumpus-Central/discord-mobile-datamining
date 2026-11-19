// === Module 12175: GameOrganizationInviteSummary ===

// Module 12175 (GameOrganizationInviteSummary)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2557 from "module_2557" /* 2557 */;
import Text_Text from "Text/Text" /* 5383 */;
import Stack_Stack from "Stack/Stack" /* 5808 */;
import GroupIcon from "GroupIcon" /* 6919 */;
import GameOrganizationIconDefault from "GameOrganizationIcon" /* 12024 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4792);
let closure_5 = createStyles.createStyles({ text: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationInviteSummary.tsx");

export default function GameOrganizationInviteSummary(invite) {
  invite = invite.invite;
  ({ displayNoun, organization } = invite);
  ({ memberCount, maxMembers } = organization);
  const obj = { spacing: nativeDefault.space.PX_16, align: "center", children: null };
  items = [React3(GameOrganizationIconDefault, { iconUrl: organization.iconUrl, size: 64, fallback: "guild" }), ];
  const obj3 = { spacing: nativeDefault.space.PX_8, align: "center", children: null };
  const intl = util.intl;
  let str = displayNoun;
  if (displayNoun == null) {
    str = "other";
  }
  const obj2 = { iconUrl: organization.iconUrl, size: 64, fallback: "guild" };
  const tmp = closure_5();
  const items1 = [React3(Text_Text.Text, { variant: "body-md/medium", color: "text-subtle", children: intl.formatToPlainString(_modDef2557["jKi+kc"], { displayNoun: str }) }), , ];
  const obj5 = { variant: "heading-xl/semibold", color: "text-subtle", style: tmp.text, children: null };
  const intl2 = util.intl;
  if (displayNoun == null) {
    displayNoun = "other";
  }
  obj5.children = intl2.format(_modDef2557.gptW7Y, {
    displayNoun,
    orgName: organization.name,
    gameName: invite.application.name,
    orgNameHook(children, arg1) {
      return closure_1_3(Text_Text.Text, { variant: "heading-xl/semibold", color: "text-strong", children }, arg1);
    }
  });
  items1[1] = React3(Text_Text.Heading, obj5);
  let tmp2Result = null != memberCount && null != maxMembers;
  if (tmp2Result) {
    const obj7 = { spacing: nativeDefault.space.PX_4, direction: "horizontal", align: "center", justify: "center", children: null };
    const obj8 = { size: "xs", color: nativeDefault.colors.ICON_MUTED };
    const items2 = [React3(GroupIcon.GroupIcon, obj8), ];
    const obj9 = { variant: "heading-sm/medium", color: "text-subtle", children: null };
    const intl3 = util.intl;
    const obj10 = { count: memberCount, max: maxMembers };
    obj9.children = intl3.formatToPlainString(_modDef2557.VuENGl, obj10);
    items2[1] = React3(Text_Text.Text, obj9);
    obj7.children = items2;
    tmp2Result = React4(Stack_Stack.Stack, obj7);
  }
  items1[2] = tmp2Result;
  obj3.children = items1;
  items[1] = React4(Stack_Stack.Stack, obj3);
  obj.children = items;
  return React4(Stack_Stack.Stack, obj);
};