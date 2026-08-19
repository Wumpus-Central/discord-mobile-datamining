// discord_app/modules/video_calls/native/components/usePipPosition.tsx
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../../_runtime/00019_noop.js";

const require = fn;
const CameraPreviewPosition = "CameraPreviewPosition";
let result = require("obj132").fileFinishedImporting("modules/video_calls/native/components/usePipPosition.tsx");

export default function usePipPosition() {
  const tmp = callback(React.useState(() => {
    const Storage = callback(595).Storage;
    return Storage.get(closure_4, callback(8685).DEFAULT_PIP_POSITION);
  }), 2);
  closure_0 = tmp[1];
  const items = [
    tmp[0],
    React.useCallback((arg0) => {
      const Storage = callback(dependencyMap[2]).Storage;
      const result = Storage.set(CameraPreviewPosition, arg0);
      callback(arg0);
    }, [])
  ];
  return items;
};