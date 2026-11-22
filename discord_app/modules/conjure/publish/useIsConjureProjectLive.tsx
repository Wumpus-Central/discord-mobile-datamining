// === Module 18280: useIsConjureProjectLive ===

// Module 18280 (useIsConjureProjectLive)
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 6980 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useIsConjureProjectLive.tsx");

export default function useIsConjureProjectLive(id) {
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  items = [ConjurePublishStatusStore];
  const items1 = [id];
  const stateFromStores = id(504).useStateFromStores(items, () => {
    let tmp2 = null;
    if (null != id) {
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(tmp);
      let publishState;
      if (publishStatus != null) {
        publishState = publishStatus.publishState;
      }
      if (publishState == null) {
        publishState = null;
      }
      tmp2 = publishState;
    }
    return tmp2;
  }, items1);
  if (null != stateFromStores) {
    let isConjureLiveResult = id(12319).isConjureLive(stateFromStores);
    const tmp2Result = id(12319);
  } else {
    let num;
    if (id != null) {
      const supported_surfaces = id.supported_surfaces;
      if (supported_surfaces != null) {
        num = supported_surfaces.length;
      }
    }
    if (num == null) {
      num = 0;
    }
    isConjureLiveResult = num > 0;
  }
  return isConjureLiveResult;
};