// === Module 13668: useFriendsAnimationState ===

// Module 13668 (useFriendsAnimationState)
import CheckpointNavigation from "CheckpointNavigation" /* 6435 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const FriendsAnimationState = { START: 0, [0]: "START", INTRO: 1, [1]: "INTRO", TRANSITION: 2, [2]: "TRANSITION", BEST: 3, [3]: "BEST", LEAVE: 4, [4]: "LEAVE", END: 5, [5]: "END" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useFriendsAnimationState.tsx");

export { FriendsAnimationState };
export function useFriendsAnimationState(route, stateFromStores3) {
  [first] = noop.useState({ route, hasShownSquad: route === CheckpointNavigation.CheckpointRoute.SQUAD, isTransitioning: false });
  closure_1 = tmp5;
  if (first.route !== route) {
    const obj3 = { route, hasShownSquad: first.hasShownSquad || route === CheckpointNavigation.CheckpointRoute.SQUAD, isTransitioning: null };
    let tmp7 = !stateFromStores3;
    if (!stateFromStores3) {
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
    return stateFromStores3 ? noop.BEST : noop.LEAVE;
  } else {
    return noop.START;
  }
  const obj2 = { route, hasShownSquad: route === CheckpointNavigation.CheckpointRoute.SQUAD, isTransitioning: false };
}