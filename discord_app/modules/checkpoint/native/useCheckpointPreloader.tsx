// === Module 13270: useCheckpointPreloader ===

// Module 13270 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1294 */;
import _modDef5148 from "module_5148" /* 5148 */;
import _modDef5152 from "module_5152" /* 5152 */;
import _modDef5154 from "module_5154" /* 5154 */;
import _modDef8662 from "module_8662" /* 8662 */;
import _modDef8665 from "module_8665" /* 8665 */;
import _modDef8666 from "module_8666" /* 8666 */;
import _modDef8668 from "module_8668" /* 8668 */;
import _modDef8671 from "module_8671" /* 8671 */;
import _modDef8674 from "module_8674" /* 8674 */;
import _modDef8677 from "module_8677" /* 8677 */;
import _modDef13023 from "module_13023" /* 13023 */;
import _modDef13025 from "module_13025" /* 13025 */;
import _modDef13200 from "module_13200" /* 13200 */;
import _modDef13210 from "module_13210" /* 13210 */;
import _modDef13215 from "module_13215" /* 13215 */;
import _modDef13219 from "module_13219" /* 13219 */;
import _modDef13246 from "module_13246" /* 13246 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const useEffect = fn(19).useEffect;
const CheckpointFetchStates = fn(13015).CheckpointFetchStates;
let items = [_modDef5148, _modDef5152, _modDef5154, _modDef13200, _modDef8666, _modDef13219, _modDef13210, _modDef13215, _modDef13246, _modDef8662, _modDef8665, _modDef8668, _modDef8671, _modDef8674, _modDef8677, _modDef13025, _modDef13023];
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