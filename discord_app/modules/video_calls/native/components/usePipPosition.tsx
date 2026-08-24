// discord_app/modules/video_calls/native/components/usePipPosition.tsx
import closure_2 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../../../_runtime/00019_noop.js";

const require = arg1;
const CameraPreviewPosition = "CameraPreviewPosition";
let result = require("set").fileFinishedImporting("modules/video_calls/native/components/usePipPosition.tsx");

export default function usePipPosition() {
  const tmp = callback(React.useState(() => {
    const Storage = callback(595).Storage;
    return Storage.get(closure_4, callback(8722).DEFAULT_PIP_POSITION);
  }), 2);
  closure_0 = tmp[1];
  const items = [
    tmp[0],
    React.useCallback((arg0) => {
      const Storage = callback(closure_1_1[2]).Storage;
      const result = Storage.set(closure_1_4, arg0);
      callback(arg0);
    }, [])
  ];
  return items;
};