// === Module 12201: GameOrganizationJoinOutcomeModal ===

// Module 12201 (GameOrganizationJoinOutcomeModal)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5414 */;
import components_Button_Button from "components/Button/Button" /* 5421 */;
import Stack_Stack from "Stack/Stack" /* 5837 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6337 */;
import NavigatorHeader from "NavigatorHeader" /* 7006 */;
import ModalScreen from "ModalScreen" /* 7722 */;
import ModalContent from "ModalContent" /* 7724 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 12192 */;
import ModalFooter from "ModalFooter" /* 12198 */;
import useGameOrganizationJoinOutcomeDefault from "useGameOrganizationJoinOutcome" /* 12202 */;
import GameOrganizationJoinSuccessGraphicDefault from "GameOrganizationJoinSuccessGraphic" /* 12203 */;
import GameOrganizationJoinOutcomeChecklistDefault from "GameOrganizationJoinOutcomeChecklist" /* 12204 */;
import noop from "module_19" /* 19 */;

require = fn;
function closeGameOrganizationJoinOutcomeModal() {
  ModalActionCreatorsDefault.popWithKey(closure_3);
}
function GameOrganizationJoinOutcomeScreen(arg0) {
  ({ code, result } = arg0);
  const tmp4 = useResolvedGameOrganizationInviteDefault(code);
  const tmp = closure_7();
  ({ rows, cta, isWaitingForGuild } = useGameOrganizationJoinOutcomeDefault(code, result, closeGameOrganizationJoinOutcomeModal));
  let tmp8Result = null;
  if (null != tmp4) {
    const obj = { spacing: nativeDefault.space.PX_48, children: null };
    const obj2 = { character: result.character, organizationIconUrl: tmp4.organization.iconUrl };
    items = [React4(GameOrganizationJoinSuccessGraphicDefault, obj2), ];
    const obj3 = { spacing: nativeDefault.space.PX_24, children: null };
    const obj4 = { variant: "heading-xl/semibold", style: tmp.text, accessibilityRole: "header", children: tmp6 };
    const items1 = [React4(Text_Text.Text, obj4), ];
    let tmp10Result = null;
    if (null != rows) {
      const obj5 = { rows };
      tmp10Result = React4(GameOrganizationJoinOutcomeChecklistDefault, obj5);
    }
    const obj6 = { children: null };
    const obj7 = { children: null };
    items1[1] = tmp10Result;
    obj3.children = items1;
    items[1] = hasOwnProperty(Stack_Stack.Stack, obj3);
    obj.children = items;
    obj7.children = hasOwnProperty(Stack_Stack.Stack, obj);
    const items2 = [React4(ModalContent.ModalContent, obj7), ];
    const obj8 = { children: null };
    const obj17 = { text: null, size: "lg", onPress: null, disabled: null, loading: null };
    ({ text: obj9.text, action: obj9.onPress } = cta);
    obj17.disabled = isWaitingForGuild;
    obj17.loading = isWaitingForGuild;
    obj8.children = React4(components_Button_Button.Button, obj17);
    items2[1] = React4(ModalFooter.ModalFooter, obj8);
    obj6.children = items2;
    tmp8Result = hasOwnProperty(ModalScreen.ModalScreen, obj6);
  }
  return tmp8Result;
}
let closure_3 = fn(11856).GAME_ORGANIZATION_JOIN_OUTCOME_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const constants = { OUTCOME: "OUTCOME" };
const createStyles = fn(4823);
let closure_7 = createStyles.createStyles({ text: { textAlign: "center" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinOutcomeModal.tsx");

export default function GameOrganizationJoinOutcomeModal(code) {
  code = code.code;
  const result = code.result;
  importDefault = result;
  items = [code, result];
  const navigatorScreens = code(7003).useNavigatorScreens(() => {
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
  return closure_4(code(12003).Modal, { screens: navigatorScreens, initialRouteName: constants.OUTCOME, gradientColor: "purple" });
};