import { 00038__ } from "../../../../_runtime/metro/00038__.js";
import { useWindowDimensions } from "../../screen/useWindowDimensions.native.tsx";
// discord_app/modules/media_viewer/native/MediaViewerDimensionsContext.tsx
import importAllResult from "noop";
import { jsx } from "jsxProd";

let context = importAllResult.createContext(null);
const result = require("useWindowDimensions").fileFinishedImporting("modules/media_viewer/native/MediaViewerDimensionsContext.tsx");

export const MediaViewerDimensionsProvider = function MediaViewerDimensionsProvider(children) {
  return <redux.Provider value={useWindowDimensions({ ignoreKeyboard: true })}>{arg0.children}</redux.Provider>;
};
export const useMediaViewerDimensions = function useMediaViewerDimensions() {
  const context = importAllResult.useContext(closure_4);
  00038__(null != context, "useMediaViewerDimensions must be used inside MediaViewerDimensionsProvider");
  return context;
};