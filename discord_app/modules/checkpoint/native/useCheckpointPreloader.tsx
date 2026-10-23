// === Module 12972: useCheckpointPreloader ===

// Module 12972 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1297 */;
import _modDef5098 from "module_5098" /* 5098 */;
import _modDef5102 from "module_5102" /* 5102 */;
import _modDef5104 from "module_5104" /* 5104 */;
import _modDef8611 from "module_8611" /* 8611 */;
import _modDef8613 from "module_8613" /* 8613 */;
import _modDef8614 from "module_8614" /* 8614 */;
import _modDef8615 from "module_8615" /* 8615 */;
import _modDef8617 from "module_8617" /* 8617 */;
import _modDef8619 from "module_8619" /* 8619 */;
import _modDef8621 from "module_8621" /* 8621 */;
import _modDef12901 from "module_12901" /* 12901 */;
import _modDef12903 from "module_12903" /* 12903 */;
import _modDef12907 from "module_12907" /* 12907 */;
import _modDef12917 from "module_12917" /* 12917 */;
import _modDef12921 from "module_12921" /* 12921 */;
import _modDef12924 from "module_12924" /* 12924 */;
import _modDef12950 from "module_12950" /* 12950 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const useEffect = fn(19).useEffect;
const CheckpointFetchStates = fn(12893).CheckpointFetchStates;
let items = [_modDef5098, _modDef5102, _modDef5104, _modDef12907, _modDef8614, _modDef12924, _modDef12917, _modDef12921, _modDef12950, _modDef8611, _modDef8613, _modDef8615, _modDef8617, _modDef8619, _modDef8621, _modDef12903, _modDef12901];
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