// === Module 16278: usePreloadedGuildAsset ===

// Module 16278 (usePreloadedGuildAsset)
import react_nativeDefault from "react-native" /* 1886 */;
import useRefValueDefault from "useRefValue" /* 5973 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let _slicedToArray = _slicedToArray_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, icon, asset) => {
  let closure_3;
  let first;
  let ref;
  _require = guildId;
  importDefault = icon;
  dependencyMap = asset;
  let obj = require("react");
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {};
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp4 = _slicedToArray(ref.useState(first), 2)[1];
  _slicedToArray = tmp4;
  if (cResult[1] === guildId) {
    if (cResult[2] === icon) {
      let tmp5;
      let tmp8;
      let tmp7;
      if (cResult[3] === asset) {
        tmp5 = cResult[4];
      }
      ref = obj3.useRef(tmp5);
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function v() {
          return () => {
            ref.current.guildId = undefined;
          };
        };
        const items = [];
        cResult[5] = fn;
        cResult[6] = items;
        tmp8 = items;
        tmp7 = fn;
      } else {
        tmp7 = cResult[5];
        tmp8 = cResult[6];
      }
      const effect = obj3.useEffect(tmp7, tmp8);
      const tmp11 = useRefValueDefault(ref);
      if (guildId === tmp11.guildId) {
        asset = tmp11.asset;
      }
      if (cResult[7] === tmp4) {
        if (cResult[8] === guildId) {
          if (cResult[9] === icon) {
            let tmp12;
            if (cResult[10] === asset) {
              tmp12 = cResult[11];
            }
            const effect1 = obj3.useEffect(tmp12);
            return asset;
          }
        }
      }
      const fn2 = function b() {
        if (guildId === ref.current.guildId) {
          if (null != icon) {
            const tmp3 = icon !== ref.current.icon && icon !== ref.current.preloading;
            if (tmp3) {
              ref.current.preloading = icon;
              const obj2 = { uri: icon };
              const obj = react_nativeDefault;
              const preloadResult = obj.preload(obj2);
              preloadResult.then(() => {
                const tmp2 = ref.current.guildId === guildId && ref.current.preloading === icon;
                if (tmp2) {
                  ref.current.icon = icon;
                  ref.current.asset = asset;
                  closure_1_3({});
                }
              });
            }
          }
        }
        ref.current.guildId = guildId;
        ref.current.icon = icon;
        ref.current.preloading = icon;
        ref.current.asset = asset;
      };
      cResult[7] = tmp4;
      cResult[8] = guildId;
      cResult[9] = icon;
      cResult[10] = asset;
      cResult[11] = fn2;
      tmp12 = fn2;
    }
  }
  const obj4 = { guildId, asset, icon, preloading: icon };
  cResult[1] = guildId;
  cResult[2] = icon;
  cResult[3] = asset;
  cResult[4] = obj4;
  tmp5 = obj4;
}) : ((guildId, icon, asset) => {
  let closure_3;
  let ref;
  importDefault = icon;
  dependencyMap = asset;
  let obj = ref;
  _slicedToArray = _slicedToArray(ref.useState({}), 2)[1];
  let obj2 = { guildId, asset, icon, preloading: icon };
  ref = ref.useRef(obj2);
  const effect = ref.useEffect(() => () => {
    ref.current.guildId = undefined;
  }, []);
  let tmp3 = useRefValueDefault(ref);
  if (guildId === tmp3.guildId) {
    asset = tmp3.asset;
  }
  const effect1 = obj.useEffect(() => {
    if (guildId === ref.current.guildId) {
      if (null != icon) {
        const tmp3 = icon !== ref.current.icon && icon !== ref.current.preloading;
        if (tmp3) {
          ref.current.preloading = icon;
          const obj2 = { uri: icon };
          const obj = react_nativeDefault;
          const preloadResult = obj.preload(obj2);
          preloadResult.then(() => {
            const tmp2 = ref.current.guildId === guildId && ref.current.preloading === icon;
            if (tmp2) {
              ref.current.icon = icon;
              ref.current.asset = asset;
              closure_1_3({});
            }
          });
        }
      }
    }
    ref.current.guildId = guildId;
    ref.current.icon = icon;
    ref.current.preloading = icon;
    ref.current.asset = asset;
  });
  return asset;
});
const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx");

export default tmp2;