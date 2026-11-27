// === Module 12340: GameOrganizationJoinModal ===

// Module 12340 (GameOrganizationJoinModal)
import NavigatorHeader from "NavigatorHeader" /* 7191 */;
import useResolvedGameOrganizationInviteDefault from "useResolvedGameOrganizationInvite" /* 12339 */;
import noop from "module_19" /* 19 */;

require = fn;
function SingleCharacterJoinModal(code) {
  code = code.code;
  items = [code];
  const navigatorScreens = code(7355).useNavigatorScreens(() => {
    const obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(closure_5),
      headerTitle() {
        return null;
      },
      render() {
        return jsx(code(dependencyMap[7]).AcceptStep, { code });
      }
    };
    obj[GameOrganizationJoinScenes.ACCEPT] = obj2;
    return obj;
  }, items);
  return jsx(code(11626).Modal, { screens: navigatorScreens, initialRouteName: GameOrganizationJoinScenes.ACCEPT, gradientColor: "purple" });
}
function MultiCharacterJoinModal(code) {
  code = code.code;
  items = [code];
  const navigatorScreens = code(7355).useNavigatorScreens(() => {
    let obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(closure_5),
      render() {
        return jsx(code(12342).ViewStep, { code });
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
      return jsx(code(12346).AcceptStep, { code, character: null });
    };
    obj[GameOrganizationJoinScenes.ACCEPT] = obj4;
    return obj;
  }, items);
  let obj2 = { screens: navigatorScreens, initialRouteName: GameOrganizationJoinScenes.VIEW, steps: items, headerBackTitle: null, gradientColor: "purple" };
  const intl = code(1112).intl;
  obj2.headerBackTitle = intl.string(code(1112).t["13/7kX"]);
  return jsx(code(12373).StepModal, { screens: navigatorScreens, initialRouteName: GameOrganizationJoinScenes.VIEW, steps: items, headerBackTitle: null, gradientColor: "purple" });
}
const constants = fn(11925).GameOrganizationCharacterMode;
const GameOrganizationJoinModalConstants = fn(12341);
const GameOrganizationJoinScenes = GameOrganizationJoinModalConstants.GameOrganizationJoinScenes;
let closure_5 = GameOrganizationJoinModalConstants.closeGameOrganizationJoinModal;
const jsx = fn(21).jsx;
let items = [, ];
({ VIEW: arr[0], ACCEPT: arr[1] } = GameOrganizationJoinScenes);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModal.tsx");

export default function GameOrganizationJoinModal(code) {
  code = code.code;
  const tmp = useResolvedGameOrganizationInviteDefault(code);
  if (null == tmp) {
    return null;
  } else if (tmp.characterMode === constants.MULTI) {
    const obj2 = { code };
    let tmp5 = <MultiCharacterJoinModal code={code} />;
  } else {
    const obj = { code };
    tmp5 = <SingleCharacterJoinModal code={code} />;
  }
};