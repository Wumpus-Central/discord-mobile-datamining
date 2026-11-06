// === Module 13910: useCheckpointPreloader ===

// Module 13910 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _modDef5306 from "module_5306" /* 5306 */;
import _modDef5310 from "module_5310" /* 5310 */;
import _modDef5312 from "module_5312" /* 5312 */;
import _modDef6249 from "module_6249" /* 6249 */;
import _modDef6252 from "module_6252" /* 6252 */;
import _modDef6253 from "module_6253" /* 6253 */;
import _modDef6255 from "module_6255" /* 6255 */;
import _modDef6258 from "module_6258" /* 6258 */;
import _modDef6261 from "module_6261" /* 6261 */;
import _modDef6264 from "module_6264" /* 6264 */;
import _modDef13668 from "module_13668" /* 13668 */;
import _modDef13670 from "module_13670" /* 13670 */;
import _modDef13848 from "module_13848" /* 13848 */;
import _modDef13859 from "module_13859" /* 13859 */;
import _modDef13863 from "module_13863" /* 13863 */;
import _modDef13869 from "module_13869" /* 13869 */;
import _modDef13885 from "module_13885" /* 13885 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const useEffect = fn(19).useEffect;
const CheckpointFetchStates = fn(13643).CheckpointFetchStates;
const items = [_modDef5306, _modDef5310, _modDef5312, _modDef13848, _modDef6253, _modDef13869, _modDef13863, _modDef13859, _modDef13885, _modDef6249, _modDef6252, _modDef6255, _modDef6258, _modDef6261, _modDef6264, _modDef13670, _modDef13668];
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