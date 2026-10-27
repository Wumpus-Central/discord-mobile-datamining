// === Module 13032: useFriendsAnimationState ===

// Module 13032 (useFriendsAnimationState)
import c from "c" /* 576 */;
import CheckpointNavigation from "CheckpointNavigation" /* 6365 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const FriendsAnimationState = { START: 0, [0]: "START", INTRO: 1, [1]: "INTRO", TRANSITION: 2, [2]: "TRANSITION", BEST: 3, [3]: "BEST", LEAVE: 4, [4]: "LEAVE", END: 5, [5]: "END" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useFriendsAnimationState.tsx");

export { FriendsAnimationState };
export const useFriendsAnimationState = ReactCompilerGating.isReactCompilerEnabled() ? (function useFriendsAnimationState(route, arg1) {
  let obj = c;
  const cResult = obj.c(6);
  const tmp4 = route === CheckpointNavigation.CheckpointRoute.SQUAD;
  if (cResult[0] === route) {
    if (cResult[1] === tmp4) {
      let tmp5 = cResult[2];
    }
    [first] = noop.useState(tmp5);
    closure_1 = tmp10;
    if (first.route !== route) {
      const obj2 = { route, hasShownSquad: first.hasShownSquad || route === CheckpointNavigation.CheckpointRoute.SQUAD, isTransitioning: null };
      let tmp12 = !arg1;
      if (!arg1) {
        tmp12 = first.route === CheckpointNavigation.CheckpointRoute.SQUAD;
      }
      if (tmp12) {
        tmp12 = route === CheckpointNavigation.CheckpointRoute.SIDEKICK;
      }
      obj2.isTransitioning = tmp12;
      tmp10(obj2);
      const tmp11 = first.hasShownSquad || route === CheckpointNavigation.CheckpointRoute.SQUAD;
    }
    if (cResult[3] !== first.isTransitioning) {
      const fn = function h() {
        if (isTransitioning.isTransitioning) {
          const _setTimeout = setTimeout;
          isTransitioning = setTimeout(() => closure_1_1((arg0) => {
            const obj = {};
            const merged = Object.assign(arg0);
            obj.isTransitioning = false;
            return obj;
          }), 1500);
          return () => clearTimeout(closure_0);
        }
      };
      const items = [first.isTransitioning];
      cResult[3] = first.isTransitioning;
      cResult[4] = fn;
      cResult[5] = items;
      let tmp15 = items;
      let tmp14 = fn;
    } else {
      tmp14 = cResult[4];
      tmp15 = cResult[5];
    }
    const effect = noop.useEffect(tmp14, tmp15);
    if (CheckpointNavigation.CheckpointRoute.SQUAD_TRANSITION === route) {
      return first.hasShownSquad ? obj.END : obj.START;
    } else if (CheckpointNavigation.CheckpointRoute.SQUAD === route) {
      return obj.INTRO;
    } else if (CheckpointNavigation.CheckpointRoute.SIDEKICK === route) {
      return first.isTransitioning ? obj.TRANSITION : obj.BEST;
    } else if (CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE === route) {
      return arg1 ? obj.BEST : obj.LEAVE;
    } else {
      return obj.START;
    }
  }
  const obj4 = { route, hasShownSquad: tmp4, isTransitioning: false };
  cResult[0] = route;
  cResult[1] = tmp4;
  cResult[2] = obj4;
  tmp5 = obj4;
}) : (function useFriendsAnimationState(route, arg1) {
  [first] = noop.useState({ route, hasShownSquad: route === CheckpointNavigation.CheckpointRoute.SQUAD, isTransitioning: false });
  closure_1 = tmp5;
  if (first.route !== route) {
    const obj3 = { route, hasShownSquad: first.hasShownSquad || route === CheckpointNavigation.CheckpointRoute.SQUAD, isTransitioning: null };
    let tmp7 = !arg1;
    if (!arg1) {
      tmp7 = first.route === CheckpointNavigation.CheckpointRoute.SQUAD;
    }
    if (tmp7) {
      tmp7 = route === CheckpointNavigation.CheckpointRoute.SIDEKICK;
    }
    obj3.isTransitioning = tmp7;
    tmp5(obj3);
    const tmp6 = first.hasShownSquad || route === CheckpointNavigation.CheckpointRoute.SQUAD;
  }
  const items = [first.isTransitioning];
  const effect = noop.useEffect(() => {
    if (isTransitioning.isTransitioning) {
      const _setTimeout = setTimeout;
      isTransitioning = setTimeout(() => closure_1_1((arg0) => {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.isTransitioning = false;
        return obj;
      }), 1500);
      return () => clearTimeout(closure_0);
    }
  }, items);
  if (CheckpointNavigation.CheckpointRoute.SQUAD_TRANSITION === route) {
    return first.hasShownSquad ? noop.END : noop.START;
  } else if (CheckpointNavigation.CheckpointRoute.SQUAD === route) {
    return noop.INTRO;
  } else if (CheckpointNavigation.CheckpointRoute.SIDEKICK === route) {
    return first.isTransitioning ? noop.TRANSITION : noop.BEST;
  } else if (CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE === route) {
    return arg1 ? noop.BEST : noop.LEAVE;
  } else {
    return noop.START;
  }
  const obj2 = { route, hasShownSquad: route === CheckpointNavigation.CheckpointRoute.SQUAD, isTransitioning: false };
});