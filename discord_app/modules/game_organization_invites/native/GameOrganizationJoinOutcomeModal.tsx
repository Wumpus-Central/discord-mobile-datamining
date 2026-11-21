// discord_app/modules/game_organization_invites/native/GameOrganizationJoinOutcomeModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import Stack_Stack from "../../../design/components/Stack/native/Stack.native.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import ModalScreen from "../../../design/components/Modal/native/ModalScreen.native.tsx";
import ModalContent from "../../../design/components/Modal/native/ModalContent.native.tsx";
import ModalFooter from "../../../design/components/Modal/native/ModalFooter.native.tsx";
import useGameOrganizationJoinOutcomeDefault from "../useGameOrganizationJoinOutcome.tsx";
import HighFiveSpotIllustration from "../../../design/components/mana-assets/native/generated/HighFiveSpotIllustration.native.tsx";
import GameOrganizationJoinOutcomeChecklistDefault from "GameOrganizationJoinOutcomeChecklist.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
  items = [
    hasOwnProperty(View, {
      style: tmp.graphic,
      accessibilityElementsHidden: true,
      importantForAccessibility: "no-hide-descendants",
      children: hasOwnProperty(HighFiveSpotIllustration.HighFiveSpotIllustration, { height: 140 }),
    }),
  ];
  const obj3 = { spacing: nativeDefault.space.PX_24, children: null };
  const items1 = [
    hasOwnProperty(Text_Text.Text, {
      variant: "heading-xl/semibold",
      style: tmp.text,
      accessibilityRole: "header",
      children: tmp4.title,
    }),
  ];
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
  const items2 = [hasOwnProperty(ModalContent.ModalContent, obj7)];
  const obj8 = {
    children: hasOwnProperty(components_Button_Button.Button, {
      text: cta.text,
      size: "lg",
      onPress: cta.action,
      disabled: isWaitingForGuild,
      loading: isWaitingForGuild,
    }),
  };
  items2[1] = hasOwnProperty(ModalFooter.ModalFooter, obj8);
  obj6.children = items2;
  return timestampProducer(ModalScreen.ModalScreen, obj6);
}
const View = fn(17).View;
let closure_4 = fn(11896).GAME_ORGANIZATION_JOIN_OUTCOME_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const constants = { OUTCOME: "OUTCOME" };
const createStyles = fn(4913);
let closure_8 = createStyles.createStyles({ graphic: { alignItems: "center" }, text: { textAlign: "center" } });
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationJoinOutcomeModal.tsx",
);

export default function GameOrganizationJoinOutcomeModal(code) {
  code = code.code;
  const result = code.result;
  importDefault = result;
  items = [code, result];
  const navigatorScreens = code(7092).useNavigatorScreens(() => {
    const obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(closeGameOrganizationJoinOutcomeModal),
      headerTitle() {
        return null;
      },
      render() {
        return closure_2_5(GameOrganizationJoinOutcomeScreen, { code, result });
      },
    };
    obj[constants.OUTCOME] = obj2;
    return obj;
  }, items);
  return closure_5(code(12043).Modal, {
    screens: navigatorScreens,
    initialRouteName: constants.OUTCOME,
    gradientColor: "purple",
  });
}
