// === Module 13921: useCheckpointPreloader ===

// Module 13921 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _modDef5284 from "module_5284" /* 5284 */;
import _modDef5288 from "module_5288" /* 5288 */;
import _modDef5290 from "module_5290" /* 5290 */;
import _modDef6227 from "module_6227" /* 6227 */;
import _modDef6230 from "module_6230" /* 6230 */;
import _modDef6231 from "module_6231" /* 6231 */;
import _modDef6233 from "module_6233" /* 6233 */;
import _modDef6236 from "module_6236" /* 6236 */;
import _modDef6239 from "module_6239" /* 6239 */;
import _modDef6242 from "module_6242" /* 6242 */;
import _modDef13682 from "module_13682" /* 13682 */;
import _modDef13684 from "module_13684" /* 13684 */;
import _modDef13861 from "module_13861" /* 13861 */;
import _modDef13872 from "module_13872" /* 13872 */;
import _modDef13876 from "module_13876" /* 13876 */;
import _modDef13882 from "module_13882" /* 13882 */;
import _modDef13897 from "module_13897" /* 13897 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const useEffect = fn(19).useEffect;
const CheckpointFetchStates = fn(13657).CheckpointFetchStates;
const items = [_modDef5284, _modDef5288, _modDef5290, _modDef13861, _modDef6231, _modDef13882, _modDef13876, _modDef13872, _modDef13897, _modDef6227, _modDef6230, _modDef6233, _modDef6236, _modDef6239, _modDef6242, _modDef13684, _modDef13682];
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointPreloader.tsx");

export default function useCheckpointPreloader() {
  _require = noop.useRef(0);
  dependencyMap = noop.useRef(true);
  const maybeFetchCheckpointData = require("useMaybeFetchCheckpointData").useMaybeFetchCheckpointData();
  const obj2 = require("useMaybeFetchCheckpointData");
  const tmp2 = maybeFetchCheckpointData === CheckpointFetchStates.SUCCESS || maybeFetchCheckpointData === CheckpointFetchStates.ERROR;
  [tmp4, _slicedToArray] = noop.useState(false);
  useEffect(() => {
    function handleSettled() {
      if (ref.current) {
        handleSettled.current = handleSettled.current + 1;
        if (handleSettled.current === items.length) {
          closure_1_2(true);
        }
      }
    }
    const item = items.forEach((url) => {
      const HTTP = HTTPUtils.HTTP;
      value = HTTP.get({ url, binary: true, rejectWithError: true });
      return value.then(handleSettled, handleSettled);
    });
  }, []);
  useEffect(() => () => {
    closure_1_1.current = false;
  }, []);
  return tmp4;
};