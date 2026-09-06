// discord_app/modules/errors/hooks/useCameraEncodeError.tsx
import AVError from "../av_errors/AVError.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import AVErrorStore from "../av_errors/AVErrorStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/hooks/useCameraEncodeError.tsx");

export default function useCameraEncodeError(arg0) {
  _require = arg0;
  const items = [AVErrorStore, AuthenticationStore];
  return require("initialize").useStateFromStores(items, () => {
    if (AuthenticationStore.getId() === closure_0) {
      const first = AVErrorStore.getActiveErrorsOfType(AVError.AVError.CAMERA_SEND_LOW_FPS)[0];
      let type;
      if (first != null) {
        type = first.type;
      }
      return type;
    }
  });
}
