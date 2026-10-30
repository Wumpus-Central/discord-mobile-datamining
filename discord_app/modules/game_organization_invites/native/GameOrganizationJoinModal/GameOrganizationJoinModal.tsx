// discord_app/modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModal.tsx
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const GameOrganizationJoinModalConstants = fn(13151);
const GameOrganizationJoinScenes = GameOrganizationJoinModalConstants.GameOrganizationJoinScenes;
let closure_3 = GameOrganizationJoinModalConstants.closeGameOrganizationJoinModal;
const jsx = fn(21).jsx;
let items = [, ,];
({ VIEW: arr[0], ACCEPT: arr[1], OUTCOME: arr[2] } = GameOrganizationJoinScenes);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModal.tsx",
);

export default function GameOrganizationJoinModal(code) {
  code = code.code;
  items = [code];
  const navigatorScreens = code(7163).useNavigatorScreens(() => {
    let obj = {};
    const obj2 = {
      headerTitle() {
        return null;
      },
      headerLeft: NavigatorHeader.getHeaderCloseButton(closure_3),
      render() {
        return jsx(code(13152).ViewStep, { code });
      },
    };
    obj[GameOrganizationJoinScenes.VIEW] = obj2;
    const obj4 = {
      headerTitle() {
        return null;
      },
      headerLeft: null,
      headerRight: null,
      render: null,
    };
    obj4.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj4.headerRight = NavigatorHeader.getHeaderCloseButton(closure_3);
    obj4.render = function render(character) {
      const obj = { code, character: null };
      character = undefined;
      if (character != null) {
        character = character.character;
      }
      obj.character = character;
      return jsx(code(13159).AcceptStep, { code, character: null });
    };
    obj[GameOrganizationJoinScenes.ACCEPT] = obj4;
    const obj7 = {
      headerTitle() {
        return null;
      },
      headerLeft: null,
      gestureEnabled: false,
      render: null,
    };
    obj7.headerLeft = NavigatorHeader.getHeaderCloseButton(closure_3);
    obj7.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(code(13162).OutcomeStep, { code });
    };
    obj[GameOrganizationJoinScenes.OUTCOME] = obj7;
    return obj;
  }, items);
  let obj2 = {
    screens: navigatorScreens,
    initialRouteName: GameOrganizationJoinScenes.VIEW,
    steps: items,
    headerBackTitle: null,
  };
  const intl = code(1114).intl;
  obj2.headerBackTitle = intl.string(code(1114).t["13/7kX"]);
  return jsx(code(13163).StepModal, {
    screens: navigatorScreens,
    initialRouteName: GameOrganizationJoinScenes.VIEW,
    steps: items,
    headerBackTitle: null,
  });
}
