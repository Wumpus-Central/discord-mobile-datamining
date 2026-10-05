// discord_app/modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx
import _modDef12 from "../../../../_runtime/metro/00012__.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import VerifiedKeyStore from "../VerifiedKeyStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      let tmp = _require;
      const obj = require("react");
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [VerifiedKeyStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function n() {
          let tmp = _modDef12;
          const tmpResult = tmp(VerifiedKeyStore.getUserVerifiedKeys(closure_0));
          const entries = tmpResult.entries();
          const mapped = entries.map((item) => {
            const tmp = closure_1_3(item, 2);
            return { verifiedKey: tmp[0], timestamp: tmp[1] };
          });
          const iter = mapped.sortBy((timestamp) => -1 * timestamp.timestamp);
          return iter.value();
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      let tmpResult = tmp(504);
      return tmpResult.useStateFromStoresArray(first, tmp6);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [VerifiedKeyStore];
      const obj = require("get initialized");
      return obj.useStateFromStoresArray(items, () => {
        const tmp = _modDef12;
        const tmpResult = tmp(VerifiedKeyStore.getUserVerifiedKeys(closure_0));
        const entries = tmpResult.entries();
        const mapped = entries.map((item) => {
          let tmp;
          let tmp2;
          [tmp, tmp2] = item;
          return { verifiedKey, timestamp };
        });
        const iter = mapped.sortBy((timestamp) => -1 * timestamp.timestamp);
        return iter.value();
      });
    };
const result = size.fileFinishedImporting("modules/rtc/hooks/useSecureFramesUserVerifiedKeys.tsx");

export const useSecureFramesUserVerifiedKeys = tmp2;
