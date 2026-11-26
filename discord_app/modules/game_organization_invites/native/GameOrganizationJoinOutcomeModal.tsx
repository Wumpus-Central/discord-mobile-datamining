// === Module 12340: GameOrganizationJoinOutcomeModal ===

// Module 12340 (GameOrganizationJoinOutcomeModal)
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5634 */;
import components_Button_Button from "components/Button/Button" /* 5641 */;
import Stack_Stack from "Stack/Stack" /* 6115 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import NavigatorHeader from "NavigatorHeader" /* 7191 */;
import ModalScreen from "ModalScreen" /* 7888 */;
import ModalContent from "ModalContent" /* 7890 */;
import ModalFooter from "ModalFooter" /* 11615 */;
import useGameOrganizationJoinOutcomeDefault from "useGameOrganizationJoinOutcome" /* 12341 */;
import HighFiveSpotIllustration from "HighFiveSpotIllustration" /* 12342 */;
import GameOrganizationJoinOutcomeChecklistDefault from "GameOrganizationJoinOutcomeChecklist" /* 12346 */;
import noop from "module_19" /* 19 */;

require = fn;
function closeGameOrganizationJoinOutcomeModal() {
  ModalActionCreatorsDefault.popWithKey(closure_4);
}
function GameOrganizationJoinOutcomeScreen(arg0) {
  ({ code, result } = arg0);
  const tmp = closure_8();
  const tmp4 = useGameOrganizationJoinOutcomeDefault(code, result, closeGameOrganizationJoinOutcomeModal);
  ({ rows, cta, isWaitingForGuild } = tmp4);
  const obj = { spacing: nativeDefault.space.PX_48, children: null };
  items = [hasOwnProperty(View, { style: tmp.graphic, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", children: hasOwnProperty(HighFiveSpotIllustration.HighFiveSpotIllustration, { height: 140 }) }), ];
  const obj3 = { spacing: nativeDefault.space.PX_24, children: null };
  const items1 = [hasOwnProperty(Text_Text.Text, { variant: "heading-xl/semibold", style: tmp.text, accessibilityRole: "header", children: tmp4.title }), ];
  let tmp7Result = null;
  if (null != rows) {
    const obj5 = { rows };
    tmp7Result = hasOwnProperty(GameOrganizationJoinOutcomeChecklistDefault, obj5);
  }
  const obj6 = { children: null };
  const obj7 = { children: null };
  items1[1] = tmp7Result;
  obj3.children = items1;
  items[1] = timestampProducer(Stack_Stack.Stack, obj3);
  obj.children = items;
  obj7.children = timestampProducer(Stack_Stack.Stack, obj);
  const items2 = [hasOwnProperty(ModalContent.ModalContent, obj7), ];
  const obj8 = { children: hasOwnProperty(components_Button_Button.Button, { text: cta.text, size: "lg", onPress: cta.action, disabled: isWaitingForGuild, loading: isWaitingForGuild }) };
  items2[1] = hasOwnProperty(ModalFooter.ModalFooter, obj8);
  obj6.children = items2;
  return timestampProducer(ModalScreen.ModalScreen, obj6);
}
const View = fn(17).View;
let closure_4 = fn(11917).GAME_ORGANIZATION_JOIN_OUTCOME_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const constants = { OUTCOME: "OUTCOME" };
const createStyles = fn(5043);
let closure_8 = createStyles.createStyles({ graphic: { alignItems: "center" }, text: { textAlign: "center" } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinOutcomeModal.tsx");

export default function GameOrganizationJoinOutcomeModal(code) {
  code = code.code;
  const result = code.result;
  importDefault = result;
  items = [code, result];
  const navigatorScreens = code(7355).useNavigatorScreens(() => {
    const obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(closeGameOrganizationJoinOutcomeModal),
      headerTitle() {
        return null;
      },
      render() {
        return closure_2_5(GameOrganizationJoinOutcomeScreen, { code, result });
      }
    };
    obj[constants.OUTCOME] = obj2;
    return obj;
  }, items);
  return closure_5(code(11618).Modal, { screens: navigatorScreens, initialRouteName: constants.OUTCOME, gradientColor: "purple" });
};