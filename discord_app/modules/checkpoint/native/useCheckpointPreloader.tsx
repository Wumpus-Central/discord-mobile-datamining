// === Module 13703: useCheckpointPreloader ===

// Module 13703 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _modDef5160 from "module_5160" /* 5160 */;
import _modDef5164 from "module_5164" /* 5164 */;
import _modDef5166 from "module_5166" /* 5166 */;
import _modDef6092 from "module_6092" /* 6092 */;
import _modDef6095 from "module_6095" /* 6095 */;
import _modDef6096 from "module_6096" /* 6096 */;
import _modDef6098 from "module_6098" /* 6098 */;
import _modDef6101 from "module_6101" /* 6101 */;
import _modDef6104 from "module_6104" /* 6104 */;
import _modDef6107 from "module_6107" /* 6107 */;
import _modDef13456 from "module_13456" /* 13456 */;
import _modDef13458 from "module_13458" /* 13458 */;
import _modDef13634 from "module_13634" /* 13634 */;
import _modDef13645 from "module_13645" /* 13645 */;
import _modDef13649 from "module_13649" /* 13649 */;
import _modDef13655 from "module_13655" /* 13655 */;
import _modDef13680 from "module_13680" /* 13680 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const useEffect = fn(19).useEffect;
const CheckpointFetchStates = fn(13436).CheckpointFetchStates;
const items = [_modDef5160, _modDef5164, _modDef5166, _modDef13634, _modDef6096, _modDef13655, _modDef13649, _modDef13645, _modDef13680, _modDef6092, _modDef6095, _modDef6098, _modDef6101, _modDef6104, _modDef6107, _modDef13458, _modDef13456];
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