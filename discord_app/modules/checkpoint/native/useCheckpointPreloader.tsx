// === Module 13503: useCheckpointPreloader ===

// Module 13503 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1294 */;
import _modDef5149 from "module_5149" /* 5149 */;
import _modDef5153 from "module_5153" /* 5153 */;
import _modDef5155 from "module_5155" /* 5155 */;
import _modDef6080 from "module_6080" /* 6080 */;
import _modDef6083 from "module_6083" /* 6083 */;
import _modDef6084 from "module_6084" /* 6084 */;
import _modDef6086 from "module_6086" /* 6086 */;
import _modDef6089 from "module_6089" /* 6089 */;
import _modDef6092 from "module_6092" /* 6092 */;
import _modDef6095 from "module_6095" /* 6095 */;
import _modDef13254 from "module_13254" /* 13254 */;
import _modDef13256 from "module_13256" /* 13256 */;
import _modDef13432 from "module_13432" /* 13432 */;
import _modDef13443 from "module_13443" /* 13443 */;
import _modDef13447 from "module_13447" /* 13447 */;
import _modDef13453 from "module_13453" /* 13453 */;
import _modDef13480 from "module_13480" /* 13480 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const useEffect = fn(19).useEffect;
const CheckpointFetchStates = fn(13236).CheckpointFetchStates;
let items = [_modDef5149, _modDef5153, _modDef5155, _modDef13432, _modDef6084, _modDef13453, _modDef13447, _modDef13443, _modDef13480, _modDef6080, _modDef6083, _modDef6086, _modDef6089, _modDef6092, _modDef6095, _modDef13256, _modDef13254];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointPreloader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCheckpointPreloader() {
  const cResult = require("c").c(4);
  _require = noop.useRef(0);
  dependencyMap = noop.useRef(true);
  const obj = require("c");
  const maybeFetchCheckpointData = require("useMaybeFetchCheckpointData").useMaybeFetchCheckpointData();
  const obj3 = require("useMaybeFetchCheckpointData");
  const tmp3 = maybeFetchCheckpointData === CheckpointFetchStates.SUCCESS || maybeFetchCheckpointData === CheckpointFetchStates.ERROR;
  [tmp5, _slicedToArray] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function l() {
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
    };
    items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp6 = fn;
    tmp7 = items;
  } else {
    [tmp6, tmp7] = cResult;
  }
  useEffect(tmp6, tmp7);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function s() {
      return () => {
        closure_1_1.current = false;
      };
    };
    const items1 = [];
    cResult[2] = fn2;
    cResult[3] = items1;
    let tmp11 = items1;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  useEffect(tmp10, tmp11);
  return tmp5;
}) : (function useCheckpointPreloader() {
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
});