// === Module 14082: GameOrganizationJoinOutcomeModal ===

// Module 14082 (GameOrganizationJoinOutcomeModal)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5929 */;
import components_Button_Button from "components/Button/Button" /* 5936 */;
import Stack_Stack from "Stack/Stack" /* 6337 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import NavigatorHeader from "NavigatorHeader" /* 7493 */;
import ModalScreen from "ModalScreen" /* 8208 */;
import ModalContent from "ModalContent" /* 8210 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 14072 */;
import ModalFooter from "ModalFooter" /* 14079 */;
import useGameOrganizationJoinOutcomeDefault from "useGameOrganizationJoinOutcome" /* 14083 */;
import GameOrganizationJoinSuccessGraphicDefault from "GameOrganizationJoinSuccessGraphic" /* 14084 */;
import noop from "module_19" /* 19 */;

require = fn;
function closeGameOrganizationJoinOutcomeModal() {
  ModalActionCreatorsDefault.popWithKey(closure_3);
}
function GameOrganizationJoinOutcomeScreen(arg0) {
  ({ code, result } = arg0);
  const tmp = closure_7();
  const tmp4 = useResolvedGameOrganizationInviteDefault(code);
  ({ subtitle, cta } = useGameOrganizationJoinOutcomeDefault(code, result, closeGameOrganizationJoinOutcomeModal));
  let tmp9Result = null;
  if (null != tmp4) {
    const obj = { spacing: nativeDefault.space.PX_48, children: null };
    const obj2 = { character: result.character, organizationIconUrl: tmp4.organization.iconUrl };
    items = [React4(GameOrganizationJoinSuccessGraphicDefault, obj2), ];
    const obj3 = { spacing: nativeDefault.space.PX_8, children: null };
    const obj4 = { variant: "heading-xl/semibold", style: tmp.text, accessibilityRole: "header", children: tmp6 };
    const items1 = [React4(Text_Text.Text, obj4), ];
    let tmp11Result = null != subtitle;
    if (tmp11Result) {
      const obj5 = { variant: "body-md/normal", color: "text-muted", style: tmp.text, children: subtitle };
      tmp11Result = React4(Text_Text.Text, obj5);
    }
    const obj6 = { children: null };
    const obj7 = { children: null };
    items1[1] = tmp11Result;
    obj3.children = items1;
    items[1] = hasOwnProperty(Stack_Stack.Stack, obj3);
    obj.children = items;
    obj7.children = hasOwnProperty(Stack_Stack.Stack, obj);
    const items2 = [React4(ModalContent.ModalContent, obj7), ];
    const obj8 = { children: null };
    const obj17 = { text: null, size: "lg", onPress: null, disabled: null };
    ({ text: obj9.text, action: obj9.onPress } = cta);
    obj17.disabled = tmp7;
    obj8.children = React4(components_Button_Button.Button, obj17);
    items2[1] = React4(ModalFooter.ModalFooter, obj8);
    obj6.children = items2;
    tmp9Result = hasOwnProperty(ModalScreen.ModalScreen, obj6);
  }
  return tmp9Result;
}
let closure_3 = fn(12369).GAME_ORGANIZATION_JOIN_OUTCOME_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const constants = { OUTCOME: "OUTCOME" };
const createStyles = fn(5306);
let closure_7 = createStyles.createStyles({ text: { textAlign: "center" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinOutcomeModal.tsx");

export default function GameOrganizationJoinOutcomeModal(code) {
  code = code.code;
  const result = code.result;
  importDefault = result;
  items = [code, result];
  const navigatorScreens = code(7490).useNavigatorScreens(() => {
    const obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(closeGameOrganizationJoinOutcomeModal),
      headerTitle() {
        return null;
      },
      render() {
        return closure_2_4(GameOrganizationJoinOutcomeScreen, { code, result });
      }
    };
    obj[constants.OUTCOME] = obj2;
    return obj;
  }, items);
  return closure_4(code(12523).Modal, { screens: navigatorScreens, initialRouteName: constants.OUTCOME, gradientColor: "purple" });
};