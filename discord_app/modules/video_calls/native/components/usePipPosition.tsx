// discord_app/modules/video_calls/native/components/usePipPosition.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";

const require = arg1;
const CameraPreviewPosition = "CameraPreviewPosition";
let result = require("Storage").fileFinishedImporting("modules/video_calls/native/components/usePipPosition.tsx");

export default function usePipPosition() {
  const tmp = callback(React.useState(() => {
    const Storage = callback(595).Storage;
    return Storage.get(closure_4, callback(10665).DEFAULT_PIP_POSITION);
  }), 2);
  let closure_0 = tmp[1];
  const items = [
    tmp[0],
    React.useCallback((arg0) => {
      const Storage = callback(outer1_1[2]).Storage;
      const result = Storage.set(outer1_4, arg0);
      callback(arg0);
    }, [])
  ];
  return items;
};