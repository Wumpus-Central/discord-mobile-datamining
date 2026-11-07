// discord_app/modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModal.tsx
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const GameOrganizationJoinModalConstants = fn(13445);
const GameOrganizationJoinScenes = GameOrganizationJoinModalConstants.GameOrganizationJoinScenes;
let closure_4 = GameOrganizationJoinModalConstants.closeGameOrganizationJoinModal;
const jsx = fn(21).jsx;
let items = [, ,];
({ VIEW: arr[0], ACCEPT: arr[1], OUTCOME: arr[2] } = GameOrganizationJoinScenes);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModal.tsx",
);

export default function GameOrganizationJoinModal(code) {
  code = code.code;
  let top;
  top = top(1627)().top;
  items = [code, top];
  const navigatorScreens = code(7231).useNavigatorScreens(() => {
    let obj = { fullscreen: true, headerStyle: { height: NavigatorConstants.NAV_BAR_HEIGHT + top } };
    const obj3 = {};
    const obj4 = {};
    let merged = Object.assign(obj);
    obj4.headerTitle = function headerTitle() {
      return null;
    };
    const obj2 = { height: NavigatorConstants.NAV_BAR_HEIGHT + top };
    obj4.headerLeft = NavigatorHeader.getHeaderCloseButton(closure_4);
    obj4.render = function render() {
      return jsx(code(13446).ViewStep, { code });
    };
    obj3[GameOrganizationJoinScenes.VIEW] = obj4;
    const obj6 = {};
    const merged1 = Object.assign(obj);
    obj6.headerTitle = function headerTitle() {
      return null;
    };
    obj6.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj6.headerRight = NavigatorHeader.getHeaderCloseButton(closure_4);
    obj6.render = function render(character) {
      const obj = { code, character: null };
      character = undefined;
      if (character != null) {
        character = character.character;
      }
      obj.character = character;
      return jsx(code(13452).AcceptStep, { code, character: null });
    };
    obj3[GameOrganizationJoinScenes.ACCEPT] = obj6;
    const obj9 = {};
    const merged2 = Object.assign(obj);
    obj9.headerTitle = function headerTitle() {
      return null;
    };
    obj9.headerLeft = NavigatorHeader.getHeaderCloseButton(closure_4);
    obj9.gestureEnabled = false;
    obj9.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(code(13456).OutcomeStep, { code });
    };
    obj3[GameOrganizationJoinScenes.OUTCOME] = obj9;
    return obj3;
  }, items);
  let obj2 = {
    screens: navigatorScreens,
    initialRouteName: GameOrganizationJoinScenes.VIEW,
    steps: items,
    headerBackTitle: null,
  };
  const intl = code(1113).intl;
  obj2.headerBackTitle = intl.string(code(1113).t["13/7kX"]);
  return jsx(code(13457).StepModal, {
    screens: navigatorScreens,
    initialRouteName: GameOrganizationJoinScenes.VIEW,
    steps: items,
    headerBackTitle: null,
  });
}
