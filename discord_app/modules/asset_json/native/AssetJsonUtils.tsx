// === Module 1120: loadJsonAsset ===

// Module 1120 (loadJsonAsset)
import registerAsset from "registerAsset" /* 1121 */;
import registerAsset2 from "registerAsset" /* 1123 */;
import registerAsset3 from "registerAsset" /* 1124 */;
import registerAsset4 from "registerAsset" /* 1125 */;
import registerAsset5 from "registerAsset" /* 1126 */;
import registerAsset6 from "registerAsset" /* 1127 */;
import registerAsset7 from "registerAsset" /* 1128 */;
import registerAsset8 from "registerAsset" /* 1129 */;
import registerAsset9 from "registerAsset" /* 1130 */;
import registerAsset10 from "registerAsset" /* 1131 */;
import registerAsset11 from "registerAsset" /* 1132 */;
import registerAsset12 from "registerAsset" /* 1133 */;
import registerAsset13 from "registerAsset" /* 1134 */;
import registerAsset14 from "registerAsset" /* 1135 */;
import registerAsset15 from "registerAsset" /* 1136 */;
import registerAsset16 from "registerAsset" /* 1137 */;
import registerAsset17 from "registerAsset" /* 1138 */;
import registerAsset18 from "registerAsset" /* 1139 */;
import registerAsset19 from "registerAsset" /* 1140 */;
import registerAsset20 from "registerAsset" /* 1141 */;
import registerAsset21 from "registerAsset" /* 1142 */;
import registerAsset22 from "registerAsset" /* 1143 */;
import registerAsset23 from "registerAsset" /* 1144 */;
import registerAsset24 from "registerAsset" /* 1145 */;
import registerAsset25 from "registerAsset" /* 1146 */;
import registerAsset26 from "registerAsset" /* 1147 */;
import registerAsset27 from "registerAsset" /* 1148 */;
import registerAsset28 from "registerAsset" /* 1149 */;
import registerAsset29 from "registerAsset" /* 1150 */;
import registerAsset30 from "registerAsset" /* 1151 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

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
  }
};
export { loadJsonAsset };