// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaModalWrapper.tsx
import MediaModalSheetWrapperDefault from "../../../media_viewer/native/components/MediaModalSheetWrapper.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaModalWrapper.tsx");

export default function AppStoreOverlayMediaModalWrapper(arg0) {
  const effect = React.useEffect(() => () => {
    const result = callback(table[2]).clearMediaModalFooterAction();
  }, []);
  const merged = Object.assign(arg0);
  return jsx(MediaModalSheetWrapperDefault, {});
};