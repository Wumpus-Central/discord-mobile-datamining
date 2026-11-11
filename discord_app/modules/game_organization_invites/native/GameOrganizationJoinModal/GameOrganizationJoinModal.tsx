// === Module 13973: GameOrganizationJoinModal ===

// Module 13973 (GameOrganizationJoinModal)
import NavigatorHeader from "NavigatorHeader" /* 7427 */;
import noop from "module_19" /* 19 */;

require = fn;
const GameOrganizationJoinModalConstants = fn(13974);
const GameOrganizationJoinScenes = GameOrganizationJoinModalConstants.GameOrganizationJoinScenes;
let closure_3 = GameOrganizationJoinModalConstants.closeGameOrganizationJoinModal;
const jsx = fn(21).jsx;
let items = [, , ];
({ VIEW: arr[0], ACCEPT: arr[1], OUTCOME: arr[2] } = GameOrganizationJoinScenes);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModal.tsx");

export default function GameOrganizationJoinModal(code) {
  code = code.code;
  items = [code];
  const navigatorScreens = code(7424).useNavigatorScreens(() => {
    let obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(closure_3),
      render() {
        return jsx(code(13975).ViewStep, { code });
      }
    };
    obj[GameOrganizationJoinScenes.VIEW] = obj2;
    const obj4 = { headerLeft: null, render: null };
    obj4.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj4.render = function render(character) {
      const obj = { code, character: null };
      character = undefined;
      if (character != null) {
        character = character.character;
      }
      obj.character = character;
      return jsx(code(13980).AcceptStep, { code, character: null });
    };
    obj[GameOrganizationJoinScenes.ACCEPT] = obj4;
    const obj6 = { headerLeft: null, gestureEnabled: false, render: null };
    obj6.headerLeft = NavigatorHeader.getHeaderCloseButton(closure_3);
    obj6.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(code(13984).OutcomeStep, { code });
    };
    obj[GameOrganizationJoinScenes.OUTCOME] = obj6;
    return obj;
  }, items);
  let obj2 = { screens: navigatorScreens, initialRouteName: GameOrganizationJoinScenes.VIEW, steps: items, headerBackTitle: null, gradientColor: "purple" };
  const intl = code(1113).intl;
  obj2.headerBackTitle = intl.string(code(1113).t["13/7kX"]);
  return jsx(code(13995).StepModal, { screens: navigatorScreens, initialRouteName: GameOrganizationJoinScenes.VIEW, steps: items, headerBackTitle: null, gradientColor: "purple" });
};