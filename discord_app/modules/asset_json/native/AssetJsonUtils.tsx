// discord_app/modules/asset_json/native/AssetJsonUtils.tsx
import registerAsset from "../../../../_runtime/01121_registerAsset.js";
import registerAsset2 from "../../../../_runtime/01123_registerAsset.js";
import registerAsset3 from "../../../../_runtime/01124_registerAsset.js";
import registerAsset4 from "../../../../_runtime/01125_registerAsset.js";
import registerAsset5 from "../../../../_runtime/01126_registerAsset.js";
import registerAsset6 from "../../../../_runtime/01127_registerAsset.js";
import registerAsset7 from "../../../../_runtime/01128_registerAsset.js";
import registerAsset8 from "../../../../_runtime/01129_registerAsset.js";
import registerAsset9 from "../../../../_runtime/01130_registerAsset.js";
import registerAsset10 from "../../../../_runtime/01131_registerAsset.js";
import registerAsset11 from "../../../../_runtime/01132_registerAsset.js";
import registerAsset12 from "../../../../_runtime/01133_registerAsset.js";
import registerAsset13 from "../../../../_runtime/01134_registerAsset.js";
import registerAsset14 from "../../../../_runtime/01135_registerAsset.js";
import registerAsset15 from "../../../../_runtime/01136_registerAsset.js";
import registerAsset16 from "../../../../_runtime/01137_registerAsset.js";
import registerAsset17 from "../../../../_runtime/01138_registerAsset.js";
import registerAsset18 from "../../../../_runtime/01139_registerAsset.js";
import registerAsset19 from "../../../../_runtime/01140_registerAsset.js";
import registerAsset20 from "../../../../_runtime/01141_registerAsset.js";
import registerAsset21 from "../../../../_runtime/01142_registerAsset.js";
import registerAsset22 from "../../../../_runtime/01143_registerAsset.js";
import registerAsset23 from "../../../../_runtime/01144_registerAsset.js";
import registerAsset24 from "../../../../_runtime/01145_registerAsset.js";
import registerAsset25 from "../../../../_runtime/01146_registerAsset.js";
import registerAsset26 from "../../../../_runtime/01147_registerAsset.js";
import registerAsset27 from "../../../../_runtime/01148_registerAsset.js";
import registerAsset28 from "../../../../_runtime/01149_registerAsset.js";
import registerAsset29 from "../../../../_runtime/01150_registerAsset.js";
import registerAsset30 from "../../../../_runtime/01151_registerAsset.js";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";

require = arg1;
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
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    const iter = (function* (arg0) {
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
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              DCDFileManager = 3;
              throw arg1;
            } else if (arg0 === 2) {
              DCDFileManager = 3;
              obj1 = { value: null, done: true };
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
                error = new Error("RTNFileManager doesn't exist?");
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
  closure_8 = tmp;
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
const result = require("set").fileFinishedImporting("modules/asset_json/native/AssetJsonUtils.tsx");

export const jsonAssets = {
  i18n_bg() {
    return loadJsonAsset(registerAsset);
  },
  i18n_cs() {
    return loadJsonAsset(registerAsset2);
  },
  i18n_da() {
    return loadJsonAsset(registerAsset3);
  },
  i18n_de() {
    return loadJsonAsset(registerAsset4);
  },
  i18n_el() {
    return loadJsonAsset(registerAsset5);
  },
  i18n_enGB() {
    return loadJsonAsset(registerAsset6);
  },
  i18n_esES() {
    return loadJsonAsset(registerAsset7);
  },
  i18n_es419() {
    return loadJsonAsset(registerAsset8);
  },
  i18n_fi() {
    return loadJsonAsset(registerAsset9);
  },
  i18n_fr() {
    return loadJsonAsset(registerAsset10);
  },
  i18n_hr() {
    return loadJsonAsset(registerAsset11);
  },
  i18n_hu() {
    return loadJsonAsset(registerAsset12);
  },
  i18n_it() {
    return loadJsonAsset(registerAsset13);
  },
  i18n_ja() {
    return loadJsonAsset(registerAsset14);
  },
  i18n_ko() {
    return loadJsonAsset(registerAsset15);
  },
  i18n_lt() {
    return loadJsonAsset(registerAsset16);
  },
  i18n_nl() {
    return loadJsonAsset(registerAsset17);
  },
  i18n_no() {
    return loadJsonAsset(registerAsset18);
  },
  i18n_pl() {
    return loadJsonAsset(registerAsset19);
  },
  i18n_ptBR() {
    return loadJsonAsset(registerAsset20);
  },
  i18n_ro() {
    return loadJsonAsset(registerAsset21);
  },
  i18n_ru() {
    return loadJsonAsset(registerAsset22);
  },
  i18n_svSE() {
    return loadJsonAsset(registerAsset23);
  },
  i18n_th() {
    return loadJsonAsset(registerAsset24);
  },
  i18n_tr() {
    return loadJsonAsset(registerAsset25);
  },
  i18n_uk() {
    return loadJsonAsset(registerAsset26);
  },
  i18n_vi() {
    return loadJsonAsset(registerAsset27);
  },
  i18n_zhCN() {
    return loadJsonAsset(registerAsset28);
  },
  i18n_zhTW() {
    return loadJsonAsset(registerAsset29);
  },
  i18n_hi() {
    return loadJsonAsset(registerAsset30);
  },
};
export { loadJsonAsset };
