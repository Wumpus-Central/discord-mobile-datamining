// === Module 12855: useFriendsAnimationState ===

// Module 12855 (useFriendsAnimationState)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

let require = fn;
const FriendsAnimationState = { HIDDEN: 0, [0]: "HIDDEN", SQUAD: 1, [1]: "SQUAD", SQUAD_TO_SIDEKICK: 2, [2]: "SQUAD_TO_SIDEKICK", SIDEKICK: 3, [3]: "SIDEKICK", SIDEKICK_EXIT: 4, [4]: "SIDEKICK_EXIT", SQUAD_EXIT: 5, [5]: "SQUAD_EXIT" };
let obj2 = { TO_SIDEKICK: 0, [0]: "TO_SIDEKICK", TO_SQUAD: 1, [1]: "TO_SQUAD" };
let closure_6 = { [obj2.TO_SIDEKICK]: 1100, [obj2.TO_SQUAD]: 1000 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useFriendsAnimationState.tsx");

export { FriendsAnimationState };
export function useFriendsAnimationState(route, stateFromStores2) {
  obj2 = { route, hasShownSquad: route === require("CheckpointNavigation").CheckpointRoute.SQUAD, transition: null };
  [tmp4, tmp5] = noop.useState(obj2);
  require = tmp5;
  if (tmp4.route !== route) {
    const obj3 = { route, hasShownSquad: tmp4.hasShownSquad || route === tmp(tmp2[2]).CheckpointRoute.SQUAD, transition: null };
    route = tmp4.route;
    if (stateFromStores2) {
      obj3.transition = null;
      tmp5(obj3);
    } else {
      if (route !== tmp(tmp2[2]).CheckpointRoute.SQUAD) {
        let TO_SQUAD = null;
        if (route === tmp(tmp2[2]).CheckpointRoute.SIDEKICK) {
          TO_SQUAD = null;
          if (route === tmp(tmp2[2]).CheckpointRoute.SQUAD) {
            TO_SQUAD = obj2.TO_SQUAD;
          }
        }
      }
      TO_SQUAD = obj2.TO_SIDEKICK;
    }
    const tmp6 = tmp4.hasShownSquad || route === tmp(tmp2[2]).CheckpointRoute.SQUAD;
  }
  transition = tmp4.transition;
  items = [transition];
  const effect = noop.useEffect(() => {
    if (null != transition) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_0((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.transition = null;
        return obj;
      }), closure_1_6[tmp]);
      return () => clearTimeout(closure_0);
    }
  }, items);
  const tmp3 = _slicedToArray(noop.useState(obj2), 2);
  if (require("CheckpointNavigation").CheckpointRoute.SQUAD_TRANSITION !== route) {
    if (tmp(tmp2[2]).CheckpointRoute.SQUAD === route) {
      let HIDDEN = noop.SQUAD;
    } else if (tmp(tmp2[2]).CheckpointRoute.SIDEKICK === route) {
      if (transition === obj2.TO_SIDEKICK) {
        let SIDEKICK = noop.SQUAD_TO_SIDEKICK;
      } else {
        SIDEKICK = noop.SIDEKICK;
      }
      HIDDEN = SIDEKICK;
    } else if (tmp(tmp2[2]).CheckpointRoute.SIDEKICK_LEAVE === route) {
      HIDDEN = stateFromStores2 ? noop.SIDEKICK : noop.SIDEKICK_EXIT;
    } else {
      HIDDEN = noop.HIDDEN;
    }
    const obj4 = { animationState: HIDDEN, isTransitioning: null != transition, showsSidekickPair: null };
    if (tmp14) {
      let tmp25 = transition !== tmp24.TO_SIDEKICK;
    } else {
      tmp25 = transition === tmp24.TO_SQUAD;
    }
    obj4.showsSidekickPair = tmp25;
    return obj4;
  }
  tmp14 = route === require("CheckpointNavigation").CheckpointRoute.SIDEKICK || route === require("CheckpointNavigation").CheckpointRoute.SIDEKICK_LEAVE;
}