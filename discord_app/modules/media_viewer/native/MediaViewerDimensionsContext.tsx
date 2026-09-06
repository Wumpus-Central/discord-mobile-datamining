// discord_app/modules/media_viewer/native/MediaViewerDimensionsContext.tsx
import _modDef38 from "../../../../_runtime/metro/00038__.js";
import useWindowDimensionsDefault from "../../screen/useWindowDimensions.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
const redux = noop.createContext(null);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/MediaViewerDimensionsContext.tsx");

export const MediaViewerDimensionsProvider = function MediaViewerDimensionsProvider(children) {
  return (
    <redux.Provider value={useWindowDimensionsDefault({ ignoreKeyboard: true })}>{children.children}</redux.Provider>
  );
};
export const useMediaViewerDimensions = function useMediaViewerDimensions() {
  const context = noop.useContext(closure_4);
  _modDef38(null != context, "useMediaViewerDimensions must be used inside MediaViewerDimensionsProvider");
  return context;
};
