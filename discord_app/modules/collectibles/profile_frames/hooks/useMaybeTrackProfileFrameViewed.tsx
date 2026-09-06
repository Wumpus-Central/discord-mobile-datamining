// discord_app/modules/collectibles/profile_frames/hooks/useMaybeTrackProfileFrameViewed.tsx
import UserProfileAnalyticsUtils from "../../../user_profile/UserProfileAnalyticsUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import CollectiblesCategoryStore from "../../CollectiblesCategoryStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

({ useEffect: c2, useRef: c3 } = noop);
let result = size.fileFinishedImporting(
  "modules/collectibles/profile_frames/hooks/useMaybeTrackProfileFrameViewed.tsx",
);

export default function useMaybeTrackProfileFrameViewed(skuId) {
  skuId = skuId.skuId;
  const openedAt = skuId.openedAt;
  ({ context: closure_2, analyticsLocations: closure_3 } = skuId);
  let stateFromStores;
  const items = [stateFromStores];
  stateFromStores = skuId(openedAt[2]).useStateFromStores(items, () =>
    CollectiblesCategoryStore.getProductFetch(skuId),
  );
  analyticsLocations(undefined);
  analyticsLocations(undefined);
  analyticsLocations(undefined);
  analyticsLocations(false);
  const items1 = [skuId, openedAt, stateFromStores];
  closure_2(() => {
    if (null != skuId) {
      if (null != openedAt) {
        let tmp3 = ref2.current === skuId;
        if (tmp3) {
          tmp3 = ref3.current === openedAt;
        }
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
        let current = "success" !== state;
        if (!current) {
          current = ref4.current;
        }
        if (!current) {
          ref4.current = true;
          const obj = {
            profileUi: "PROFILE_FRAME",
            timeToInteractiveMs: ref.current,
            timeToLoadMs: timestamp - openedAt,
            timeToFetchMs: null,
            viewStartedAt: null,
            fetchStartedAt: null,
            analyticsLocations: null,
          };
          let diff;
          if (null != stateFromStores.startedAt) {
            if (null != stateFromStores.endedAt) {
              diff = stateFromStores.endedAt - stateFromStores.startedAt;
            }
          }
          obj.timeToFetchMs = diff;
          obj.viewStartedAt = openedAt;
          obj.fetchStartedAt = stateFromStores.startedAt;
          obj.analyticsLocations = analyticsLocations;
          const merged = Object.assign(closure_1_2);
          const result = obj.maybeTrackUserProfileUiViewed(obj);
        }
      }
    }
  }, items1);
}
