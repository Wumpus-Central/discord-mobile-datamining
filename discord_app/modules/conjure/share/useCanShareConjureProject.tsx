// discord_app/modules/conjure/share/useCanShareConjureProject.tsx
import ConjurePublishTypes from "../publish/ConjurePublishTypes.tsx";
import ConjurePublishStatusStore from "../publish/ConjurePublishStatusStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/useCanShareConjureProject.tsx");

export default function useCanShareConjureProject(arg0) {
  _require = arg0;
  items = [ConjurePublishStatusStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(closure_0);
      let publishState;
      if (publishStatus != null) {
        publishState = publishStatus.publishState;
      }
      let isConjureLiveResult = null != publishState;
      if (isConjureLiveResult) {
        isConjureLiveResult = ConjurePublishTypes.isConjureLive(publishState);
      }
      return isConjureLiveResult;
    },
    items1,
  );
}
