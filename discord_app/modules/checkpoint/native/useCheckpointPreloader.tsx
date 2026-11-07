// === Module 13934: useCheckpointPreloader ===

// Module 13934 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _modDef5276 from "module_5276" /* 5276 */;
import _modDef5280 from "module_5280" /* 5280 */;
import _modDef5282 from "module_5282" /* 5282 */;
import _modDef6224 from "module_6224" /* 6224 */;
import _modDef6227 from "module_6227" /* 6227 */;
import _modDef6228 from "module_6228" /* 6228 */;
import _modDef6230 from "module_6230" /* 6230 */;
import _modDef6233 from "module_6233" /* 6233 */;
import _modDef6236 from "module_6236" /* 6236 */;
import _modDef6239 from "module_6239" /* 6239 */;
import _modDef13692 from "module_13692" /* 13692 */;
import _modDef13694 from "module_13694" /* 13694 */;
import _modDef13872 from "module_13872" /* 13872 */;
import _modDef13883 from "module_13883" /* 13883 */;
import _modDef13887 from "module_13887" /* 13887 */;
import _modDef13893 from "module_13893" /* 13893 */;
import _modDef13909 from "module_13909" /* 13909 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const useEffect = fn(19).useEffect;
const CheckpointFetchStates = fn(13667).CheckpointFetchStates;
const items = [_modDef5276, _modDef5280, _modDef5282, _modDef13872, _modDef6228, _modDef13893, _modDef13887, _modDef13883, _modDef13909, _modDef6224, _modDef6227, _modDef6230, _modDef6233, _modDef6236, _modDef6239, _modDef13694, _modDef13692];
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