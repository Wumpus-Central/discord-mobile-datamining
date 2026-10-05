// === Module 1130: AssetJsonUtils ===

// Module 1130 (AssetJsonUtils)
import react_native from "react-native" /* 17 */;
import AssetRegistry from "AssetRegistry" /* 1131 */;
import AssetRegistry2 from "AssetRegistry" /* 1133 */;
import AssetRegistry3 from "AssetRegistry" /* 1134 */;
import AssetRegistry4 from "AssetRegistry" /* 1135 */;
import AssetRegistry5 from "AssetRegistry" /* 1136 */;
import AssetRegistry6 from "AssetRegistry" /* 1137 */;
import AssetRegistry7 from "AssetRegistry" /* 1138 */;
import AssetRegistry8 from "AssetRegistry" /* 1139 */;
import AssetRegistry9 from "AssetRegistry" /* 1140 */;
import AssetRegistry10 from "AssetRegistry" /* 1141 */;
import AssetRegistry11 from "AssetRegistry" /* 1142 */;
import AssetRegistry12 from "AssetRegistry" /* 1143 */;
import AssetRegistry13 from "AssetRegistry" /* 1144 */;
import AssetRegistry14 from "AssetRegistry" /* 1145 */;
import AssetRegistry15 from "AssetRegistry" /* 1146 */;
import AssetRegistry16 from "AssetRegistry" /* 1147 */;
import AssetRegistry17 from "AssetRegistry" /* 1148 */;
import AssetRegistry18 from "AssetRegistry" /* 1149 */;
import AssetRegistry19 from "AssetRegistry" /* 1150 */;
import AssetRegistry20 from "AssetRegistry" /* 1151 */;
import AssetRegistry21 from "AssetRegistry" /* 1152 */;
import AssetRegistry22 from "AssetRegistry" /* 1153 */;
import AssetRegistry23 from "AssetRegistry" /* 1154 */;
import AssetRegistry24 from "AssetRegistry" /* 1155 */;
import AssetRegistry25 from "AssetRegistry" /* 1156 */;
import AssetRegistry26 from "AssetRegistry" /* 1157 */;
import AssetRegistry27 from "AssetRegistry" /* 1158 */;
import AssetRegistry28 from "AssetRegistry" /* 1159 */;
import AssetRegistry29 from "AssetRegistry" /* 1160 */;
import AssetRegistry30 from "AssetRegistry" /* 1161 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c4, c5;

function loadJsonAsset() {
  return obj(...arguments);
}
let jsonAssets = function _loadJsonAsset() {
  let obj = _asyncToGenerator(async (arg0) => {
    let obj4;
    let value;
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let flag;
        let uri;
        let closure_3;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let c3 = 0;
            let closure_2 = tmp;
            flag = closure_1;
            if (closure_1 === undefined) {
              flag = true;
            }
            uri = undefined;
            closure_3 = undefined;
            value = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            if (null != closure_131_5[closure_0]) {
              const tmp18 = flag;
              if (tmp18) {
                c5 = 3;
                const obj6 = { value: closure_131_5[closure_0], done: true };
                return obj6;
              }
            }
            uri = closure_131_4.resolveAssetSource(closure_0).uri;
            c4 = 2;
            c5 = 1;
            const obj7 = { value: obj4.readAsset(uri, "utf8"), done: false };
            obj4 = closure_131_1(closure_131_2[32]);
            return obj7;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_3 = value;
          if (null == closure_3) {
            c5 = 3;
            return { value: null, done: true };
          } else {
            if (null != closure_131_5[closure_0]) {
              const tmp6 = flag;
              if (tmp6) {
                c5 = 3;
                const obj9 = { value: closure_131_5[closure_0], done: true };
                return obj9;
              }
            }
            const _JSON = JSON;
            value = JSON.parse(closure_3);
            closure_131_5[closure_0] = value;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          }
        }
      } catch (tmp30) {
        c5 = 3;
        throw tmp30;
      }
    }
  });
  return obj(...arguments);
};
const Image = react_native.Image;
jsonAssets = {
  i18n_bg() {
    return loadJsonAsset(AssetRegistry);
  },
  i18n_cs() {
    return loadJsonAsset(AssetRegistry2);
  },
  i18n_da() {
    return loadJsonAsset(AssetRegistry3);
  },
  i18n_de() {
    return loadJsonAsset(AssetRegistry4);
  },
  i18n_el() {
    return loadJsonAsset(AssetRegistry5);
  },
  i18n_enGB() {
    return loadJsonAsset(AssetRegistry6);
  },
  i18n_esES() {
    return loadJsonAsset(AssetRegistry7);
  },
  i18n_es419() {
    return loadJsonAsset(AssetRegistry8);
  },
  i18n_fi() {
    return loadJsonAsset(AssetRegistry9);
  },
  i18n_fr() {
    return loadJsonAsset(AssetRegistry10);
  },
  i18n_hr() {
    return loadJsonAsset(AssetRegistry11);
  },
  i18n_hu() {
    return loadJsonAsset(AssetRegistry12);
  },
  i18n_it() {
    return loadJsonAsset(AssetRegistry13);
  },
  i18n_ja() {
    return loadJsonAsset(AssetRegistry14);
  },
  i18n_ko() {
    return loadJsonAsset(AssetRegistry15);
  },
  i18n_lt() {
    return loadJsonAsset(AssetRegistry16);
  },
  i18n_nl() {
    return loadJsonAsset(AssetRegistry17);
  },
  i18n_no() {
    return loadJsonAsset(AssetRegistry18);
  },
  i18n_pl() {
    return loadJsonAsset(AssetRegistry19);
  },
  i18n_ptBR() {
    return loadJsonAsset(AssetRegistry20);
  },
  i18n_ro() {
    return loadJsonAsset(AssetRegistry21);
  },
  i18n_ru() {
    return loadJsonAsset(AssetRegistry22);
  },
  i18n_svSE() {
    return loadJsonAsset(AssetRegistry23);
  },
  i18n_th() {
    return loadJsonAsset(AssetRegistry24);
  },
  i18n_tr() {
    return loadJsonAsset(AssetRegistry25);
  },
  i18n_uk() {
    return loadJsonAsset(AssetRegistry26);
  },
  i18n_vi() {
    return loadJsonAsset(AssetRegistry27);
  },
  i18n_zhCN() {
    return loadJsonAsset(AssetRegistry28);
  },
  i18n_zhTW() {
    return loadJsonAsset(AssetRegistry29);
  },
  i18n_hi() {
    return loadJsonAsset(AssetRegistry30);
  }
};
let closure_5 = {};
const result = size.fileFinishedImporting("modules/asset_json/native/AssetJsonUtils.tsx");

export { jsonAssets };
export { loadJsonAsset };