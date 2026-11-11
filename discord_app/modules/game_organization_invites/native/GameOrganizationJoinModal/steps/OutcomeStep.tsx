// === Module 13984: OutcomeStep ===

// Module 13984 (OutcomeStep)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5866 */;
import components_Button_Button from "components/Button/Button" /* 5873 */;
import Stack_Stack from "Stack/Stack" /* 6274 */;
import ModalScreen from "ModalScreen" /* 8142 */;
import ModalContent from "ModalContent" /* 8144 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 13971 */;
import ModalFooter from "ModalFooter" /* 13979 */;
import useGameOrganizationJoinOutcomeDefault from "useGameOrganizationJoinOutcome" /* 13985 */;
import GameOrganizationJoinSuccessGraphicDefault from "GameOrganizationJoinSuccessGraphic" /* 13986 */;
import noop from "module_19" /* 19 */;

require = fn;
const constants = fn(12280).GameOrganizationInviteAcceptStatus;
let closure_4 = fn(13974).closeGameOrganizationJoinModal;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5243);
let closure_7 = createStyles.createStyles({ text: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/steps/OutcomeStep.tsx");

export function OutcomeStep(code) {
  code = code.code;
  const merged = Object.assign(code, Object.assign({ code: 0 }));
  const tmp2 = closure_7();
  const tmp5 = useResolvedGameOrganizationInviteDefault(code);
  const tmp6 = useGameOrganizationJoinOutcomeDefault(code, merged, closure_4);
  ({ subtitle, cta } = tmp6);
  let tmp11Result = null != tmp5;
  ({ title, isWaitingForGuild } = tmp6);
  if (tmp11Result) {
    tmp11Result = merged.joinStatus === constants.JOINED;
  }
  const obj = { spacing: nativeDefault.space.PX_48, children: null };
  if (tmp11Result) {
    const obj2 = { character: merged.character, organizationIconUrl: tmp5.organization.iconUrl };
    tmp11Result = hasOwnProperty(GameOrganizationJoinSuccessGraphicDefault, obj2);
  }
  items = [tmp11Result, ];
  const obj3 = { spacing: nativeDefault.space.PX_8, children: null };
  const items1 = [hasOwnProperty(Text_Text.Text, { variant: "heading-xl/semibold", style: tmp2.text, accessibilityRole: "header", children: title }), ];
  let tmp11Result2 = null != subtitle;
  if (tmp11Result2) {
    const obj5 = { variant: "body-md/normal", color: "text-muted", style: tmp2.text, children: subtitle };
    tmp11Result2 = hasOwnProperty(Text_Text.Text, obj5);
  }
  const obj6 = { children: null };
  const obj7 = { children: null };
  items1[1] = tmp11Result2;
  obj3.children = items1;
  items[1] = timestampProducer(Stack_Stack.Stack, obj3);
  obj.children = items;
  obj7.children = timestampProducer(Stack_Stack.Stack, obj);
  const items2 = [hasOwnProperty(ModalContent.ModalContent, obj7), ];
  const obj8 = { children: hasOwnProperty(components_Button_Button.Button, { text: cta.text, size: "lg", onPress: cta.action, disabled: isWaitingForGuild }) };
  items2[1] = hasOwnProperty(ModalFooter.ModalFooter, obj8);
  obj6.children = items2;
  return timestampProducer(ModalScreen.ModalScreen, obj6);
}