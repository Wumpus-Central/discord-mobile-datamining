// === Module 13032: useCheckpointPreloader ===

// Module 13032 (useCheckpointPreloader)
import HTTPUtils from "HTTPUtils" /* 1297 */;
import _modDef5112 from "module_5112" /* 5112 */;
import _modDef5116 from "module_5116" /* 5116 */;
import _modDef5118 from "module_5118" /* 5118 */;
import _modDef8625 from "module_8625" /* 8625 */;
import _modDef8628 from "module_8628" /* 8628 */;
import _modDef8629 from "module_8629" /* 8629 */;
import _modDef8631 from "module_8631" /* 8631 */;
import _modDef8634 from "module_8634" /* 8634 */;
import _modDef8637 from "module_8637" /* 8637 */;
import _modDef8640 from "module_8640" /* 8640 */;
import _modDef12957 from "module_12957" /* 12957 */;
import _modDef12959 from "module_12959" /* 12959 */;
import _modDef12963 from "module_12963" /* 12963 */;
import _modDef12973 from "module_12973" /* 12973 */;
import _modDef12978 from "module_12978" /* 12978 */;
import _modDef12982 from "module_12982" /* 12982 */;
import _modDef13009 from "module_13009" /* 13009 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const useEffect = fn(19).useEffect;
const CheckpointFetchStates = fn(12949).CheckpointFetchStates;
let items = [_modDef5112, _modDef5116, _modDef5118, _modDef12963, _modDef8629, _modDef12982, _modDef12973, _modDef12978, _modDef13009, _modDef8625, _modDef8628, _modDef8631, _modDef8634, _modDef8637, _modDef8640, _modDef12959, _modDef12957];
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