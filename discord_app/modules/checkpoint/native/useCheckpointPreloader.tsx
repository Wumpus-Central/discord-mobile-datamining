// === Module 13934: useCheckpointPreloader ===

// Module 13934 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _modDef5286 from "module_5286" /* 5286 */;
import _modDef5290 from "module_5290" /* 5290 */;
import _modDef5292 from "module_5292" /* 5292 */;
import _modDef6229 from "module_6229" /* 6229 */;
import _modDef6232 from "module_6232" /* 6232 */;
import _modDef6233 from "module_6233" /* 6233 */;
import _modDef6235 from "module_6235" /* 6235 */;
import _modDef6238 from "module_6238" /* 6238 */;
import _modDef6241 from "module_6241" /* 6241 */;
import _modDef6244 from "module_6244" /* 6244 */;
import _modDef13693 from "module_13693" /* 13693 */;
import _modDef13695 from "module_13695" /* 13695 */;
import _modDef13873 from "module_13873" /* 13873 */;
import _modDef13884 from "module_13884" /* 13884 */;
import _modDef13888 from "module_13888" /* 13888 */;
import _modDef13894 from "module_13894" /* 13894 */;
import _modDef13909 from "module_13909" /* 13909 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const useEffect = fn(19).useEffect;
const CheckpointFetchStates = fn(13668).CheckpointFetchStates;
const items = [_modDef5286, _modDef5290, _modDef5292, _modDef13873, _modDef6233, _modDef13894, _modDef13888, _modDef13884, _modDef13909, _modDef6229, _modDef6232, _modDef6235, _modDef6238, _modDef6241, _modDef6244, _modDef13695, _modDef13693];
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