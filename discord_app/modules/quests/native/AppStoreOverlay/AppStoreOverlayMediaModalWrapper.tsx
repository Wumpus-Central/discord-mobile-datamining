// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaModalWrapper.tsx
import noop from "noop";
import { jsx } from "jsxProd";
import { MediaModalSheetWrapper } from "../../../media_viewer/native/components/MediaModalSheetWrapper.tsx";

const require = arg1;
let result = require("useMediaModalFooterActionStore").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayMediaModalWrapper.tsx");

export default function AppStoreOverlayMediaModalWrapper(arg0) {
  const effect = React.useEffect(() => () => {
    const result = callback(table[2]).clearMediaModalFooterAction();
  }, []);
  const merged = Object.assign(arg0);
  return jsx(MediaModalSheetWrapper, {});
};