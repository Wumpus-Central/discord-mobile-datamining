// discord_app/modules/orbs_arcade/native/OrbsArcadeGameContextMenu.tsx
import util from "../../../intl/index.native.tsx";
import _modDef9139 from "../../../../_runtime/metro/09139__.js";
import RefreshIcon from "../../../design/components/Icon/native/redesign/generated/RefreshIcon.tsx";
import CircleQuestionIcon from "../../../design/components/Icon/native/redesign/generated/CircleQuestionIcon.tsx";
import OrbsArcadeActionCreators from "../OrbsArcadeActionCreators.tsx";
import openOrbsArcadeSheets from "openOrbsArcadeSheets.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function handleResetGame() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _handleResetGame(arg0) {
  closure_1 = tmp3;
  await OrbsArcadeActionCreators.resetOrbsArcadeGame(closure_0);
  if (1 === tmp7) {
    c3 = 0;
    const obj7 = { text: null, variant: "critical" };
    const intl = closure_129_0(closure_129_2[7]).intl;
    obj7.text = intl.string(closure_129_0(closure_129_2[7]).t.CKsXk3);
    closure_129_1(closure_129_2[6]).open("ORBS_ARCADE_RESET_GAME_ERROR", obj7);
    c4 = 3;
    closure_129_1(closure_129_2[6]);
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c3 = 0;
  }
  return value;
};
let closure_3 = ["ref"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameContextMenu.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function OrbsArcadeGameContextMenu(game) {
      const cResult = game(576).c(15);
      game = game.game;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function u() {
          currentUser = currentUser.getCurrentUser();
          let flag;
          if (currentUser != null) {
            flag = currentUser.isStaff();
          }
          if (flag == null) {
            flag = false;
          }
          return flag;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      let obj = game(576);
      const stateFromStores = game(504).useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1128).intl;
        const stringResult = intl.string(tmp(1128).t["3AT3DL"]);
        cResult[2] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== game.id) {
        const obj2 = {
          label: tmp8,
          IconComponent: tmp(13963).CircleQuestionIcon,
          action() {
            return openOrbsArcadeSheets.openOrbsArcadeInfoSheet(game.id);
          },
        };
        const items1 = [obj2];
        cResult[3] = game.id;
        cResult[4] = items1;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        let intl2 = tmp(1128).intl;
        const stringResult1 = intl2.string(tmp(1128).t.oeBTVF);
        cResult[5] = stringResult1;
        let tmp11 = stringResult1;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== game.id) {
        const obj3 = {
          label: tmp11,
          IconComponent: tmp(11788).RefreshIcon,
          variant: "destructive",
          action() {
            return handleResetGame(game.id);
          },
        };
        const items2 = [obj3];
        cResult[6] = game.id;
        cResult[7] = items2;
        let tmp13 = items2;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === stateFromStores) {
        if (cResult[9] === tmp10) {
          if (cResult[10] === tmp13) {
            const _Symbol = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              class S {
                constructor(arg0) {
                  tmp = closure_1_4(game, closure_1_3);
                  obj = { ref: game.ref };
                  merged = Object.assign(tmp);
                  obj.variant = "secondary-overlay";
                  obj.icon = closure_1_1(closure_1_2[15]);
                  intl = game(closure_1_2[7]).intl;
                  obj.accessibilityLabel = intl.string(game(closure_1_2[7]).t.reWgFH);
                  intl2 = game(closure_1_2[7]).intl;
                  obj.accessibilityHint = intl2.string(game(closure_1_2[7]).t.hd0b7t);
                  return closure_1_8(game(closure_1_2[14]).IconButton, obj);
                }
              }
              cResult[12] = S;
            } else {
              class S {
                constructor(arg0) {
                  tmp = closure_1_4(game, closure_1_3);
                  obj = { ref: game.ref };
                  merged = Object.assign(tmp);
                  obj.variant = "secondary-overlay";
                  obj.icon = closure_1_1(closure_1_2[15]);
                  intl = game(closure_1_2[7]).intl;
                  obj.accessibilityLabel = intl.string(game(closure_1_2[7]).t.reWgFH);
                  intl2 = game(closure_1_2[7]).intl;
                  obj.accessibilityHint = intl2.string(game(closure_1_2[7]).t.hd0b7t);
                  return closure_1_8(game(closure_1_2[14]).IconButton, obj);
                }
              }
            }
            if (cResult[13] !== cResult[11]) {
              class S {
                constructor(arg0) {
                  tmp = closure_1_4(game, closure_1_3);
                  obj = { ref: game.ref };
                  merged = Object.assign(tmp);
                  obj.variant = "secondary-overlay";
                  obj.icon = closure_1_1(closure_1_2[15]);
                  intl = game(closure_1_2[7]).intl;
                  obj.accessibilityLabel = intl.string(game(closure_1_2[7]).t.reWgFH);
                  intl2 = game(closure_1_2[7]).intl;
                  obj.accessibilityHint = intl2.string(game(closure_1_2[7]).t.hd0b7t);
                  return closure_1_8(game(closure_1_2[14]).IconButton, obj);
                }
              }
              const obj4 = { items: tmp14, triggerOnTap: true, children: S };
              const tmp19 = jsx(tmp(9761).ContextMenu, { items: tmp14, triggerOnTap: true, children: S });
              cResult[13] = tmp14;
              cResult[14] = tmp19;
              const tmp18 = tmp19;
            } else {
              class S {
                constructor(arg0) {
                  tmp = closure_1_4(game, closure_1_3);
                  obj = { ref: game.ref };
                  merged = Object.assign(tmp);
                  obj.variant = "secondary-overlay";
                  obj.icon = closure_1_1(closure_1_2[15]);
                  intl = game(closure_1_2[7]).intl;
                  obj.accessibilityLabel = intl.string(game(closure_1_2[7]).t.reWgFH);
                  intl2 = game(closure_1_2[7]).intl;
                  obj.accessibilityHint = intl2.string(game(closure_1_2[7]).t.hd0b7t);
                  return closure_1_8(game(closure_1_2[14]).IconButton, obj);
                }
              }
            }
            return tmp18;
          }
        }
      }
      if (stateFromStores) {
        class S {
          constructor(arg0) {
            tmp = closure_1_4(game, closure_1_3);
            obj = { ref: game.ref };
            merged = Object.assign(tmp);
            obj.variant = "secondary-overlay";
            obj.icon = closure_1_1(closure_1_2[15]);
            intl = game(closure_1_2[7]).intl;
            obj.accessibilityLabel = intl.string(game(closure_1_2[7]).t.reWgFH);
            intl2 = game(closure_1_2[7]).intl;
            obj.accessibilityHint = intl2.string(game(closure_1_2[7]).t.hd0b7t);
            return closure_1_8(game(closure_1_2[14]).IconButton, obj);
          }
        }
        tmp16[0] = tmp10;
        tmp16[1] = tmp13;
      } else {
        class S {
          constructor(arg0) {
            tmp = closure_1_4(game, closure_1_3);
            obj = { ref: game.ref };
            merged = Object.assign(tmp);
            obj.variant = "secondary-overlay";
            obj.icon = closure_1_1(closure_1_2[15]);
            intl = game(closure_1_2[7]).intl;
            obj.accessibilityLabel = intl.string(game(closure_1_2[7]).t.reWgFH);
            intl2 = game(closure_1_2[7]).intl;
            obj.accessibilityHint = intl2.string(game(closure_1_2[7]).t.hd0b7t);
            return closure_1_8(game(closure_1_2[14]).IconButton, obj);
          }
        }
        tmp16[0] = tmp10;
      }
      cResult[8] = stateFromStores;
      cResult[9] = tmp10;
      cResult[10] = tmp13;
      cResult[11] = tmp16;
      const tmpResult = game(504);
    }
  : function OrbsArcadeGameContextMenu(game) {
      game = game.game;
      let items = [UserStore];
      const items1 = [game.id];
      const stateFromStores = game(504).useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        let flag;
        if (currentUser != null) {
          flag = currentUser.isStaff();
        }
        if (flag == null) {
          flag = false;
        }
        return flag;
      });
      const memo = noop.useMemo(() => {
        const obj = { label: null, IconComponent: null, action: null };
        const intl = util.intl;
        obj.label = intl.string(util.t["3AT3DL"]);
        obj.IconComponent = CircleQuestionIcon.CircleQuestionIcon;
        obj.action = function action() {
          return game(16410).openOrbsArcadeInfoSheet(id.id);
        };
        const items = [obj];
        return items;
      }, items1);
      const items2 = [game.id];
      const memo1 = noop.useMemo(() => {
        const obj = { label: null, IconComponent: null, variant: "destructive", action: null };
        const intl = util.intl;
        obj.label = intl.string(util.t.oeBTVF);
        obj.IconComponent = RefreshIcon.RefreshIcon;
        obj.action = function action() {
          return handleResetGame(id.id);
        };
        const items = [obj];
        return items;
      }, items2);
      if (stateFromStores) {
        const items3 = [memo, memo1];
        let items4 = items3;
      } else {
        items4 = [memo];
      }
      return jsx(game(9761).ContextMenu, {
        items: items4,
        triggerOnTap: true,
        children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref };
          const merged1 = Object.assign(merged);
          obj.variant = "secondary-overlay";
          obj.icon = _modDef9139;
          const intl = game(1128).intl;
          obj.accessibilityLabel = intl.string(game(1128).t.reWgFH);
          const intl2 = game(1128).intl;
          obj.accessibilityHint = intl2.string(game(1128).t.hd0b7t);
          return jsx(game(7959).IconButton, { ref: ref.ref });
        },
      });
    };
