import registerAsset from "registerAsset";
import get_ActivityIndicator from "registerAsset";

let c4;
let c5;
const require = arg1;
function loadJsonAsset(arg0) {
  const self = this;
  const apply = _loadJsonAsset.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _loadJsonAsset() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c4 = 0;
    let c5 = 0;
    const iter = (function*(arg0) {
      if (DCDFileManager === 2) {
        DCDFileManager = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          DCDFileManager = 2;
          if (0 === closure_4) {
            if (arg0 === 1) {
              DCDFileManager = 3;
              throw arg1;
            } else if (arg0 === 2) {
              DCDFileManager = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let asset1 = 0;
              let uri = tmp2;
              let flag;
              if (flag === undefined) {
                flag = true;
              }
              uri = undefined;
              asset1 = undefined;
              closure_4 = undefined;
              DCDFileManager = undefined;
              closure_4 = 1;
              DCDFileManager = 1;
              return { value: "ct", done: "Array" };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              DCDFileManager = 3;
              throw arg1;
            } else if (arg0 === 2) {
              DCDFileManager = 3;
              const obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              if (null != dependencyMap[callback]) {
                if (flag) {
                  DCDFileManager = 3;
                  const obj2 = { value: null, done: true };
                  obj2[0] = dependencyMap[callback];
                  return obj2;
                }
              }
              uri = closure_4.resolveAssetSource(callback).uri;
              let obj3 = callback(uri[32]);
              if (obj3.isAndroid()) {
                let obj4 = flag(uri[33]);
                let asset;
                if (obj4 != null) {
                  asset = obj4.readAsset(uri, "utf8");
                }
                asset1 = asset;
              } else {
                DCDFileManager = DCDFileManager.DCDFileManager;
                asset1 = DCDFileManager.readAsset(uri, "utf8");
              }
              if (null == asset1) {
                const _Error = Error;
                const error = new Error("RTNFileManager doesn't exist?");
                throw error;
              } else {
                closure_4 = 2;
                DCDFileManager = 1;
                obj3 = { value: null, done: false };
                obj3[0] = asset1;
                return obj3;
              }
            }
          } else if (arg0 === 1) {
            DCDFileManager = 3;
            throw arg1;
          } else if (arg0 === 2) {
            DCDFileManager = 3;
            obj4 = { value: null, done: true };
            obj4[0] = arg1;
            return obj4;
          } else {
            closure_4 = arg1;
            if (null == closure_4) {
              DCDFileManager = 3;
              return { value: null, done: true };
            } else {
              if (null != dependencyMap[callback]) {
                if (flag) {
                  DCDFileManager = 3;
                  const obj5 = { value: null, done: true };
                  obj5[0] = dependencyMap[callback];
                  return obj5;
                }
              }
              const _JSON = JSON;
              DCDFileManager = JSON.parse(closure_4);
              dependencyMap[callback] = DCDFileManager;
              DCDFileManager = 3;
              obj = { value: null, done: true };
              obj[0] = DCDFileManager;
              return obj;
            }
          }
        } catch (tmp49) {
          DCDFileManager = tmp;
          throw tmp49;
        }
      }
    })();
    iter.next();
    return iter;
  });
  const _loadJsonAsset = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ Image: c4, NativeModules: c5 } = get_ActivityIndicator);
let closure_6 = {};
const result = require("registerAsset").fileFinishedImporting("modules/asset_json/native/AssetJsonUtils.tsx");

export const jsonAssets = {
  i18n_bg() {
    return loadJsonAsset(require(1240) /* registerAsset */);
  },
  i18n_cs() {
    return loadJsonAsset(require(1242) /* registerAsset */);
  },
  i18n_da() {
    return loadJsonAsset(require(1243) /* registerAsset */);
  },
  i18n_de() {
    return loadJsonAsset(require(1244) /* registerAsset */);
  },
  i18n_el() {
    return loadJsonAsset(require(1245) /* registerAsset */);
  },
  i18n_enGB() {
    return loadJsonAsset(require(1246) /* registerAsset */);
  },
  i18n_esES() {
    return loadJsonAsset(require(1247) /* registerAsset */);
  },
  i18n_es419() {
    return loadJsonAsset(require(1248) /* registerAsset */);
  },
  i18n_fi() {
    return loadJsonAsset(require(1249) /* registerAsset */);
  },
  i18n_fr() {
    return loadJsonAsset(require(1250) /* registerAsset */);
  },
  i18n_hr() {
    return loadJsonAsset(require(1251) /* registerAsset */);
  },
  i18n_hu() {
    return loadJsonAsset(require(1252) /* registerAsset */);
  },
  i18n_it() {
    return loadJsonAsset(require(1253) /* registerAsset */);
  },
  i18n_ja() {
    return loadJsonAsset(require(1254) /* registerAsset */);
  },
  i18n_ko() {
    return loadJsonAsset(require(1255) /* registerAsset */);
  },
  i18n_lt() {
    return loadJsonAsset(require(1256) /* registerAsset */);
  },
  i18n_nl() {
    return loadJsonAsset(require(1257) /* registerAsset */);
  },
  i18n_no() {
    return loadJsonAsset(require(1258) /* registerAsset */);
  },
  i18n_pl() {
    return loadJsonAsset(require(1259) /* registerAsset */);
  },
  i18n_ptBR() {
    return loadJsonAsset(require(1260) /* registerAsset */);
  },
  i18n_ro() {
    return loadJsonAsset(require(1261) /* registerAsset */);
  },
  i18n_ru() {
    return loadJsonAsset(require(1262) /* registerAsset */);
  },
  i18n_svSE() {
    return loadJsonAsset(require(1263) /* registerAsset */);
  },
  i18n_th() {
    return loadJsonAsset(require(1264) /* registerAsset */);
  },
  i18n_tr() {
    return loadJsonAsset(require(1265) /* registerAsset */);
  },
  i18n_uk() {
    return loadJsonAsset(require(1266) /* registerAsset */);
  },
  i18n_vi() {
    return loadJsonAsset(require(1267) /* registerAsset */);
  },
  i18n_zhCN() {
    return loadJsonAsset(require(1268) /* registerAsset */);
  },
  i18n_zhTW() {
    return loadJsonAsset(require(1269) /* registerAsset */);
  },
  i18n_hi() {
    return loadJsonAsset(require(1270) /* registerAsset */);
  }
};
export { loadJsonAsset };