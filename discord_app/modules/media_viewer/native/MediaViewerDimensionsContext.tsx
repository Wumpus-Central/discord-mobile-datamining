// discord_app/modules/media_viewer/native/MediaViewerDimensionsContext.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import importAllResult from "../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

let context = importAllResult.createContext(null);
const result = require("set").fileFinishedImporting("modules/media_viewer/native/MediaViewerDimensionsContext.tsx");

export const MediaViewerDimensionsProvider = function MediaViewerDimensionsProvider(children) {
  return <redux.Provider value={useWindowDimensionsDefault({ ignoreKeyboard: true })}>{arg0.children}</redux.Provider>;
};
export const useMediaViewerDimensions = function useMediaViewerDimensions() {
  const context = importAllResult.useContext(closure_4);
  _modDef38(null != context, "useMediaViewerDimensions must be used inside MediaViewerDimensionsProvider");
  return context;
};