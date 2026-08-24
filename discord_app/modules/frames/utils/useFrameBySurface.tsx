// discord_app/modules/frames/utils/useFrameBySurface.tsx
import closure_2 from "../FramesStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/frames/utils/useFrameBySurface.tsx");

export default function useFrameBySurface(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_2];
  const items1 = [arg0, arg1];
  return require("../../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => {
    if (null != closure_0) {
      return closure_1_2.getFrameBySurface(tmp, closure_1);
    }
  }, items1);
};