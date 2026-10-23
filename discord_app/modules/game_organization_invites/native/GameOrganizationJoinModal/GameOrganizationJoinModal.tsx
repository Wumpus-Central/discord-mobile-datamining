// === Module 12661: GameOrganizationJoinModal ===

// Module 12661 (GameOrganizationJoinModal)
import c from "c" /* 576 */;
import util from "util" /* 1128 */;
import NavigatorHeader from "NavigatorHeader" /* 6909 */;
import StepModal from "StepModal" /* 12670 */;
import noop from "module_19" /* 19 */;

require = fn;
const GameOrganizationJoinModalConstants = fn(12662);
const GameOrganizationJoinScenes = GameOrganizationJoinModalConstants.GameOrganizationJoinScenes;
let closure_3 = GameOrganizationJoinModalConstants.closeGameOrganizationJoinModal;
const jsx = fn(21).jsx;
let items = [, ];
({ VIEW: arr[0], ACCEPT: arr[1] } = GameOrganizationJoinScenes);
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function useScreens(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] !== arg0) {
    const fn = function c() {
      const obj = {};
      const obj2 = {
        headerTitle() {
          return null;
        },
        headerLeft: NavigatorHeader.getHeaderCloseButton(closure_3),
        render() {
          return jsx(code(12663).ViewStep, { code });
        }
      };
      obj[GameOrganizationJoinScenes.VIEW] = obj2;
      const obj4 = {
        headerTitle() {
          return null;
        },
        headerLeft: null,
        headerRight: null,
        render: null
      };
      obj4.headerLeft = NavigatorHeader.getHeaderBackButton();
      obj4.headerRight = NavigatorHeader.getHeaderCloseButton(closure_3);
      obj4.render = function render() {
        return jsx(code(12668).AcceptStep, { code });
      };
      obj[GameOrganizationJoinScenes.ACCEPT] = obj4;
      return obj;
    };
    items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp5 = items;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  let obj = require("c");
  return require("Navigator").useNavigatorScreens(tmp4, tmp5);
}) : (function useScreens(arg0) {
  _require = arg0;
  items = [arg0];
  return require("Navigator").useNavigatorScreens(() => {
    const obj = {};
    const obj2 = {
      headerTitle() {
        return null;
      },
      headerLeft: NavigatorHeader.getHeaderCloseButton(closure_3),
      render() {
        return jsx(code(12663).ViewStep, { code });
      }
    };
    obj[GameOrganizationJoinScenes.VIEW] = obj2;
    const obj4 = {
      headerTitle() {
        return null;
      },
      headerLeft: null,
      headerRight: null,
      render: null
    };
    obj4.headerLeft = NavigatorHeader.getHeaderBackButton();
    obj4.headerRight = NavigatorHeader.getHeaderCloseButton(closure_3);
    obj4.render = function render() {
      return jsx(code(12668).AcceptStep, { code });
    };
    obj[GameOrganizationJoinScenes.ACCEPT] = obj4;
    return obj;
  }, items);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationJoinModal/GameOrganizationJoinModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameOrganizationJoinModal(code) {
  const cResult = c.c(3);
  const tmp4 = closure_6(code.code);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t["13/7kX"]);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4) {
    const obj2 = { screens: tmp4, initialRouteName: GameOrganizationJoinScenes.VIEW, steps: items, headerBackTitle: first };
    const tmp11 = jsx(StepModal.StepModal, { screens: tmp4, initialRouteName: GameOrganizationJoinScenes.VIEW, steps: items, headerBackTitle: first });
    cResult[1] = tmp4;
    cResult[2] = tmp11;
    let tmp7 = tmp11;
  } else {
    tmp7 = cResult[2];
  }
  return tmp7;
}) : (function GameOrganizationJoinModal(code) {
  const obj = { screens: closure_6(code.code), initialRouteName: GameOrganizationJoinScenes.VIEW, steps: items, headerBackTitle: null };
  const intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  return jsx(StepModal.StepModal, { screens: closure_6(code.code), initialRouteName: GameOrganizationJoinScenes.VIEW, steps: items, headerBackTitle: null });
});