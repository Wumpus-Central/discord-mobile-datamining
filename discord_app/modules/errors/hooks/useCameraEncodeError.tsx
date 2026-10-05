// discord_app/modules/errors/hooks/useCameraEncodeError.tsx
import AVError from "../av_errors/AVError.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import AVErrorStore from "../av_errors/AVErrorStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AVErrorStore, AuthenticationStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          if (AuthenticationStore.getId() === closure_0) {
            const first = AVErrorStore.getActiveErrorsOfType(AVError.AVError.CAMERA_SEND_LOW_FPS)[0];
            let type;
            if (first != null) {
              type = first.type;
            }
            return type;
          }
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp7);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [AVErrorStore, AuthenticationStore];
      const obj = require("get initialized");
      return obj.useStateFromStores(items, () => {
        if (AuthenticationStore.getId() === closure_0) {
          const first = AVErrorStore.getActiveErrorsOfType(AVError.AVError.CAMERA_SEND_LOW_FPS)[0];
          let type;
          if (first != null) {
            type = first.type;
          }
          return type;
        }
      });
    };
const result = size.fileFinishedImporting("modules/errors/hooks/useCameraEncodeError.tsx");

export default tmp2;
