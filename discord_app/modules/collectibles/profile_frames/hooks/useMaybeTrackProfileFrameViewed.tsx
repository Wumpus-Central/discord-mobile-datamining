// discord_app/modules/collectibles/profile_frames/hooks/useMaybeTrackProfileFrameViewed.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import noop from "../../../../../_runtime/00019_noop.js";
import updateCategoriesAndProducts from "../../CollectiblesCategoryStore.tsx";

({ useEffect: obj1, useRef: c3 } = noop);
let result = obj132.fileFinishedImporting("modules/collectibles/profile_frames/hooks/useMaybeTrackProfileFrameViewed.tsx");

export default function useMaybeTrackProfileFrameViewed(skuId) {
  skuId = skuId.skuId;
  const openedAt = skuId.openedAt;
  ({ context: closure_2, analyticsLocations: closure_3 } = skuId);
  let stateFromStores;
  const items = [stateFromStores];
  stateFromStores = skuId(openedAt[2]).useStateFromStores(items, () => stateFromStores.getProductFetch(skuId));
  closure_5 = callback2(undefined);
  closure_6 = callback2(undefined);
  closure_7 = callback2(undefined);
  closure_8 = callback2(false);
  const items1 = [skuId, openedAt, stateFromStores];
  callback(() => {
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
          skuId(openedAt[3]);
          const obj = { profileUi: "PROFILE_FRAME", timeToInteractiveMs: null, timeToLoadMs: null, timeToFetchMs: null, viewStartedAt: null, fetchStartedAt: null, analyticsLocations: null };
          obj[1] = ref.current;
          obj[2] = timestamp - openedAt;
          let diff;
          if (null != stateFromStores.startedAt) {
            if (null != stateFromStores.endedAt) {
              diff = stateFromStores.endedAt - stateFromStores.startedAt;
            }
          }
          obj[3] = diff;
          obj[4] = openedAt;
          obj[5] = stateFromStores.startedAt;
          obj[6] = closure_3;
          const merged = Object.assign(closure_2);
          const result = obj.maybeTrackUserProfileUiViewed(obj);
        }
      }
    }
  }, items1);
};