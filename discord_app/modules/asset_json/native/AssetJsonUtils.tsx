// discord_app/modules/asset_json/native/AssetJsonUtils.tsx
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
      let asset1 = 0;
      let uri = tmp2;
      if (flag === undefined) {
        flag = true;
      }
      yield "ct";
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
        const error = new Error("RTNFileManager doesn't exist?");
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