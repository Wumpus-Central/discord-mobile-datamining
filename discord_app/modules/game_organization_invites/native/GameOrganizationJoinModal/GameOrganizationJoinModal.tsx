// discord_app/modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModal.tsx
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const GameOrganizationJoinModalConstants = fn(14074);
const GameOrganizationJoinScenes = GameOrganizationJoinModalConstants.GameOrganizationJoinScenes;
let closure_3 = GameOrganizationJoinModalConstants.closeGameOrganizationJoinModal;
const jsx = fn(21).jsx;
let items = [,];
({ VIEW: arr[0], ACCEPT: arr[1] } = GameOrganizationJoinScenes);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModal.tsx",
);

export default function GameOrganizationJoinModal(code) {
  code = code.code;
  items = [code];
  const navigatorScreens = code(7490).useNavigatorScreens(() => {
    let obj = {};
    const obj2 = {
      headerLeft: NavigatorHeader.getHeaderCloseButton(closure_3),
      render() {
        return jsx(code(14075).ViewStep, { code });
      },
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
      return jsx(code(14080).AcceptStep, { code, character: null });
    };
    obj[GameOrganizationJoinScenes.ACCEPT] = obj4;
    return obj;
  }, items);
  let obj2 = {
    screens: navigatorScreens,
    initialRouteName: GameOrganizationJoinScenes.VIEW,
    steps: items,
    headerBackTitle: null,
    gradientColor: "purple",
  };
  const intl = code(1113).intl;
  obj2.headerBackTitle = intl.string(code(1113).t["13/7kX"]);
  return jsx(code(14098).StepModal, {
    screens: navigatorScreens,
    initialRouteName: GameOrganizationJoinScenes.VIEW,
    steps: items,
    headerBackTitle: null,
    gradientColor: "purple",
  });
}
