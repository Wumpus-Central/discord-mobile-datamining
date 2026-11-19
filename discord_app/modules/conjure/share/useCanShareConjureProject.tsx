// discord_app/modules/conjure/share/useCanShareConjureProject.tsx
import ConjurePublishTypes from "../publish/ConjurePublishTypes.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";
import ConjurePublishStatusStore from "../publish/ConjurePublishStatusStore.tsx";

const require = globalThis.__r;

require = fn;
const isProjectOwner = fn(6500).isProjectOwner;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/share/useCanShareConjureProject.tsx");

export default function useCanShareConjureProject(arg0) {
  _require = arg0;
  items = [ConjureProjectStore, ConjurePublishStatusStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresObject(
    items,
    () => {
      const project = ConjureProjectStore.getProject(closure_0);
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(closure_0);
      let publishState;
      if (publishStatus != null) {
        publishState = publishStatus.publishState;
      }
      let tmp4 = null != project;
      if (tmp4) {
        tmp4 = isProjectOwner(project);
      }
      let tmp6 = null != project && null != publishState;
      if (!tmp6) {
        const obj2 = { canShare: tmp6, firstShare: null };
        if (tmp6) {
          tmp6 = tmp4;
        }
        if (tmp6) {
          tmp6 = "user" === project.install_scope;
        }
        obj2.firstShare = tmp6;
        return obj2;
      } else if (tmp4) {
        let isConjureLiveResult = "nothing_built" !== publishState;
      } else {
        isConjureLiveResult = ConjurePublishTypes.isConjureLive(publishState);
      }
    },
    items1,
  );
}
