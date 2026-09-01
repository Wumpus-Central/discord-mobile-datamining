// === Module 1239: loadJsonAsset ===

// Module 1239 (loadJsonAsset)
import registerAsset from "registerAsset" /* 1240 */;
import registerAsset2 from "registerAsset" /* 1242 */;
import registerAsset3 from "registerAsset" /* 1243 */;
import registerAsset4 from "registerAsset" /* 1244 */;
import registerAsset5 from "registerAsset" /* 1245 */;
import registerAsset6 from "registerAsset" /* 1246 */;
import registerAsset7 from "registerAsset" /* 1247 */;
import registerAsset8 from "registerAsset" /* 1248 */;
import registerAsset9 from "registerAsset" /* 1249 */;
import registerAsset10 from "registerAsset" /* 1250 */;
import registerAsset11 from "registerAsset" /* 1251 */;
import registerAsset12 from "registerAsset" /* 1252 */;
import registerAsset13 from "registerAsset" /* 1253 */;
import registerAsset14 from "registerAsset" /* 1254 */;
import registerAsset15 from "registerAsset" /* 1255 */;
import registerAsset16 from "registerAsset" /* 1256 */;
import registerAsset17 from "registerAsset" /* 1257 */;
import registerAsset18 from "registerAsset" /* 1258 */;
import registerAsset19 from "registerAsset" /* 1259 */;
import registerAsset20 from "registerAsset" /* 1260 */;
import registerAsset21 from "registerAsset" /* 1261 */;
import registerAsset22 from "registerAsset" /* 1262 */;
import registerAsset23 from "registerAsset" /* 1263 */;
import registerAsset24 from "registerAsset" /* 1264 */;
import registerAsset25 from "registerAsset" /* 1265 */;
import registerAsset26 from "registerAsset" /* 1266 */;
import registerAsset27 from "registerAsset" /* 1267 */;
import registerAsset28 from "registerAsset" /* 1268 */;
import registerAsset29 from "registerAsset" /* 1269 */;
import registerAsset30 from "registerAsset" /* 1270 */;
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
      let asset1 = 0;
      let uri = tmp2;
      if (flag === undefined) {
        flag = true;
      }
      yield "PX_16";
      if (null != dependencyMap[callback]) {
        if (flag) {
          let DCDFileManager = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = dependencyMap[callback];
          return obj2;
        }
      }
      uri = closure_4.resolveAssetSource(callback).uri;
      const obj3 = callback(uri[32]);
      if (obj3.isAndroid()) {
        const obj4 = flag(uri[33]);
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
      }
      closure_4 = yield asset1;
      if (null == closure_4) {
        return null;
      }
      if (null != dependencyMap[callback]) {
        if (flag) {
          DCDFileManager = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = dependencyMap[callback];
          return obj5;
        }
      }
      const _JSON = JSON;
      dependencyMap[callback] = DCDFileManager;
      return DCDFileManager;
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