// discord_app/modules/frames/utils/useFrameBySurface.tsx
import FramesStore from "../FramesStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/utils/useFrameBySurface.tsx");

export default function useFrameBySurface(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [FramesStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(
    items,
    () => {
      if (null != closure_0) {
        return FramesStore.getFrameBySurface(tmp, closure_1);
      }
    },
    items1,
  );
}
