// === Module 7895: useMaybeTrackProfileFrameViewed ===

// Module 7895 (useMaybeTrackProfileFrameViewed)
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 7873 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7066 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ useEffect: c2, useRef: c3 } = react);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useMaybeTrackProfileFrameViewed.tsx");

export default function useMaybeTrackProfileFrameViewed(skuId) {
  let closure_2;
  let closure_3;
  skuId = skuId.skuId;
  const openedAt = skuId.openedAt;
  ({ context: closure_2, analyticsLocations: closure_3 } = skuId);
  let stateFromStores;
  let obj = skuId(openedAt[2]);
  const items = [stateFromStores];
  stateFromStores = obj.useStateFromStores(items, () => CollectiblesCategoryStore.getProductFetch(skuId));
  const ref = analyticsLocations(undefined);
  const ref2 = analyticsLocations(undefined);
  const ref3 = analyticsLocations(undefined);
  const ref4 = analyticsLocations(false);
  const items1 = [skuId, openedAt, stateFromStores];
  closure_2(() => {
    let diff;
    if (null != skuId) {
      if (null != openedAt) {
        const tmp3 = ref2.current === skuId && ref3.current === openedAt;
        if (!tmp3) {
          ref2.current = skuId;
          ref3.current = openedAt;
          ref4.current = false;
          ref.current = undefined;
        }
        const _Date = Date;
        const timestamp = Date.now();
        if (ref.current == null) {
          ref.current = timestamp - openedAt;
        }
        let state;
        if (stateFromStores != null) {
          state = stateFromStores.state;
        }
        const current = "success" !== state || ref4.current;
        if (!current) {
          ref4.current = true;
          const obj = { profileUi: "PROFILE_FRAME", timeToInteractiveMs: ref.current, timeToLoadMs: timestamp - openedAt, timeToFetchMs: diff, viewStartedAt: openedAt, fetchStartedAt: stateFromStores.startedAt, analyticsLocations };
          diff = undefined;
          const maybeTrackUserProfileUiViewed = UserProfileAnalyticsUtils.maybeTrackUserProfileUiViewed;
          UserProfileAnalyticsUtils;
          if (null != stateFromStores.startedAt) {
            if (null != stateFromStores.endedAt) {
              diff = stateFromStores.endedAt - stateFromStores.startedAt;
            }
          }
          const merged = Object.assign(closure_2);
          const result = maybeTrackUserProfileUiViewed(obj);
        }
      }
    }
  }, items1);
};