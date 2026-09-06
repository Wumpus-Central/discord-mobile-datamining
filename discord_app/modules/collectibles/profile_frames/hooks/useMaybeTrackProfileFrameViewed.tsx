// === Module 8214: useMaybeTrackProfileFrameViewed ===

// Module 8214 (useMaybeTrackProfileFrameViewed)
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8191 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7542 */;
import size from "module_2" /* 2 */;

({ useEffect: c2, useRef: c3 } = noop);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useMaybeTrackProfileFrameViewed.tsx");

export default function useMaybeTrackProfileFrameViewed(skuId) {
  skuId = skuId.skuId;
  const openedAt = skuId.openedAt;
  ({ context: closure_2, analyticsLocations: closure_3 } = skuId);
  let stateFromStores;
  const items = [stateFromStores];
  stateFromStores = skuId(openedAt[2]).useStateFromStores(items, () => CollectiblesCategoryStore.getProductFetch(skuId));
  analyticsLocations(undefined);
  analyticsLocations(undefined);
  analyticsLocations(undefined);
  analyticsLocations(false);
  const items1 = [skuId, openedAt, stateFromStores];
  closure_2(() => {
    if (null != skuId) {
      if (null != openedAt) {
        let tmp3 = ref2.current === tmp;
        if (tmp3) {
          tmp3 = ref3.current === tmp22;
        }
        if (!tmp3) {
          tmp23.current = tmp;
          ref3.current = tmp22;
          ref4.current = false;
          ref.current = undefined;
        }
        const _Date = Date;
        const timestamp = Date.now();
        if (ref.current == null) {
          tmp9.current = timestamp - tmp22;
        }
        let state;
        if (stateFromStores != null) {
          state = tmp10.state;
        }
        let current = "success" !== state;
        if (!current) {
          current = ref4.current;
        }
        if (!current) {
          ref4.current = true;
          const obj = { profileUi: "PROFILE_FRAME", timeToInteractiveMs: tmp9.current, timeToLoadMs: timestamp - tmp22, timeToFetchMs: null, viewStartedAt: null, fetchStartedAt: null, analyticsLocations: null };
          let diff;
          if (null != tmp10.startedAt) {
            if (null != tmp10.endedAt) {
              diff = tmp10.endedAt - tmp10.startedAt;
            }
          }
          obj.timeToFetchMs = diff;
          obj.viewStartedAt = tmp22;
          obj.fetchStartedAt = tmp10.startedAt;
          obj.analyticsLocations = analyticsLocations;
          const merged = Object.assign(closure_1_2);
          const result = obj.maybeTrackUserProfileUiViewed(obj);
        }
        tmp23 = ref2;
      }
    }
  }, items1);
};