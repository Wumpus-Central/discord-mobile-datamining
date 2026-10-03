// === Module 16274: usePreloadedGuildAsset ===

// Module 16274 (usePreloadedGuildAsset)
import NativeImageManagerModuleDefault from "NativeImageManagerModule" /* 1886 */;
import useRefValueDefault from "useRefValue" /* 5973 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/usePreloadedGuildAsset.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId, icon, asset) => {
  _require = guildId;
  importDefault = icon;
  dependencyMap = asset;
  const cResult = require("c").c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = {};
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp4 = _slicedToArray(ref.useState(first), 2)[1];
  _slicedToArray = tmp4;
  if (cResult[1] === guildId) {
    if (cResult[2] === icon) {
      if (cResult[3] === asset) {
        let tmp5 = cResult[4];
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
        let tmp8 = items;
        let tmp7 = fn;
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
            if (cResult[10] === asset) {
              let tmp12 = cResult[11];
            }
            const effect1 = obj3.useEffect(tmp12);
            return asset;
          }
        }
      }
      const fn2 = function b() {
        if (guildId === ref.current.guildId) {
          if (null != icon) {
            if (tmp3) {
              ref.current.preloading = icon;
              const obj2 = { uri: icon };
              NativeImageManagerModuleDefault.preload(obj2).then(() => {
                let tmp2 = ref.current.guildId === guildId;
                if (tmp2) {
                  tmp2 = ref.current.preloading === icon;
                }
                if (tmp2) {
                  ref.current.icon = icon;
                  ref.current.asset = asset;
                  closure_1_3({});
                }
              });
              const preloadResult = NativeImageManagerModuleDefault.preload(obj2);
            }
            tmp3 = icon !== ref.current.icon && icon !== ref.current.preloading;
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
  importDefault = icon;
  dependencyMap = asset;
  _slicedToArray = _slicedToArray(ref.useState({}), 2)[1];
  ref = ref.useRef({ guildId, asset, icon, preloading: icon });
  const effect = ref.useEffect(() => () => {
    ref.current.guildId = undefined;
  }, []);
  let tmp3 = useRefValueDefault(ref);
  if (guildId === tmp3.guildId) {
    asset = tmp3.asset;
  }
  const effect1 = ref.useEffect(() => {
    if (guildId === ref.current.guildId) {
      if (null != icon) {
        if (tmp3) {
          ref.current.preloading = icon;
          const obj2 = { uri: icon };
          NativeImageManagerModuleDefault.preload(obj2).then(() => {
            let tmp2 = ref.current.guildId === guildId;
            if (tmp2) {
              tmp2 = ref.current.preloading === icon;
            }
            if (tmp2) {
              ref.current.icon = icon;
              ref.current.asset = asset;
              closure_1_3({});
            }
          });
          const preloadResult = NativeImageManagerModuleDefault.preload(obj2);
        }
        tmp3 = icon !== ref.current.icon && icon !== ref.current.preloading;
      }
    }
    ref.current.guildId = guildId;
    ref.current.icon = icon;
    ref.current.preloading = icon;
    ref.current.asset = asset;
  });
  return asset;
});