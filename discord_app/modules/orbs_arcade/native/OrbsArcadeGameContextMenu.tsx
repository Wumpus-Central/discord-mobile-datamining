// discord_app/modules/orbs_arcade/native/OrbsArcadeGameContextMenu.tsx
import util from "../../../intl/index.native.tsx";
import _modDef9188 from "../../../../_runtime/metro/09188__.js";
import RefreshIcon from "../../../design/components/Icon/native/redesign/generated/RefreshIcon.tsx";
import CircleQuestionIcon from "../../../design/components/Icon/native/redesign/generated/CircleQuestionIcon.tsx";
import OrbsArcadeActionCreators from "../OrbsArcadeActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
let closure_7 = async function _handleResetGame(arg0) {
  closure_1 = tmp3;
  await OrbsArcadeActionCreators.resetOrbsArcadeGame(closure_0);
  if (1 === tmp7) {
    c3 = 0;
    const obj7 = { text: null, variant: "critical" };
    const intl = closure_129_0(closure_129_2[6]).intl;
    obj7.text = intl.string(closure_129_0(closure_129_2[6]).t.CKsXk3);
    closure_129_1(closure_129_2[5]).open("ORBS_ARCADE_RESET_GAME_ERROR", obj7);
    c4 = 3;
    closure_129_1(closure_129_2[5]);
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 !== 2) {
    c3 = 0;
  }
  return value;
};
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeGameContextMenu.tsx");

export default function OrbsArcadeGameContextMenu(game) {
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
      return game(16971).openOrbsArcadeInfoSheet(id.id);
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
      return (function handleResetGame() {
        const self = this;
        const apply = closure_1_7.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(id.id);
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
  return jsx(game(9853).ContextMenu, {
    items: items4,
    triggerOnTap: true,
    children(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj.variant = "secondary-overlay";
      obj.icon = _modDef9188;
      const intl = game(1114).intl;
      obj.accessibilityLabel = intl.string(game(1114).t.reWgFH);
      const intl2 = game(1114).intl;
      obj.accessibilityHint = intl2.string(game(1114).t.hd0b7t);
      return jsx(game(8020).IconButton, { ref: ref.ref });
    },
  });
}
