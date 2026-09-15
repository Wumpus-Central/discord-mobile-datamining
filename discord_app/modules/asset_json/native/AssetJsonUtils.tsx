// discord_app/modules/asset_json/native/AssetJsonUtils.tsx
import _mod1120 from "../../../../_runtime/metro/01120__.js";
import _mod1122 from "../../../../_runtime/metro/01122__.js";
import _mod1123 from "../../../../_runtime/metro/01123__.js";
import _mod1124 from "../../../../_runtime/metro/01124__.js";
import _mod1125 from "../../../../_runtime/metro/01125__.js";
import _mod1126 from "../../../../_runtime/metro/01126__.js";
import _mod1127 from "../../../../_runtime/metro/01127__.js";
import _mod1128 from "../../../../_runtime/metro/01128__.js";
import _mod1129 from "../../../../_runtime/metro/01129__.js";
import _mod1130 from "../../../../_runtime/metro/01130__.js";
import _mod1131 from "../../../../_runtime/metro/01131__.js";
import _mod1132 from "../../../../_runtime/metro/01132__.js";
import _mod1133 from "../../../../_runtime/metro/01133__.js";
import _mod1134 from "../../../../_runtime/metro/01134__.js";
import _mod1135 from "../../../../_runtime/metro/01135__.js";
import _mod1136 from "../../../../_runtime/metro/01136__.js";
import _mod1137 from "../../../../_runtime/metro/01137__.js";
import _mod1138 from "../../../../_runtime/metro/01138__.js";
import _mod1139 from "../../../../_runtime/metro/01139__.js";
import _mod1140 from "../../../../_runtime/metro/01140__.js";
import _mod1141 from "../../../../_runtime/metro/01141__.js";
import _mod1142 from "../../../../_runtime/metro/01142__.js";
import _mod1143 from "../../../../_runtime/metro/01143__.js";
import _mod1144 from "../../../../_runtime/metro/01144__.js";
import _mod1145 from "../../../../_runtime/metro/01145__.js";
import _mod1146 from "../../../../_runtime/metro/01146__.js";
import _mod1147 from "../../../../_runtime/metro/01147__.js";
import _mod1148 from "../../../../_runtime/metro/01148__.js";
import _mod1149 from "../../../../_runtime/metro/01149__.js";
import _mod1150 from "../../../../_runtime/metro/01150__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function loadJsonAsset() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _loadJsonAsset(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
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
          c3 = 0;
          closure_2 = tmp2;
          closure_130_1 = undefined;
          closure_130_0 = closure_0;
          let flag = closure_1;
          if (closure_1 === undefined) {
            flag = true;
          }
          closure_130_1 = flag;
          let uri;
          closure_130_3 = undefined;
          closure_130_4 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          if (null != closure_131_5[closure_130_0]) {
            if (closure_130_1) {
              c5 = 3;
              const obj6 = { value: closure_131_5[closure_130_0], done: true };
              return obj6;
            }
          }
          uri = closure_131_4.resolveAssetSource(closure_130_0).uri;
          c4 = 2;
          c5 = 1;
          const obj7 = { value: closure_131_1(closure_131_2[32]).readAsset(uri, "utf8"), done: false };
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
        closure_130_3 = value;
        if (null == closure_130_3) {
          c5 = 3;
          return { value: null, done: true };
        } else {
          if (null != closure_131_5[closure_130_0]) {
            if (closure_130_1) {
              c5 = 3;
              const obj9 = { value: closure_131_5[closure_130_0], done: true };
              return obj9;
            }
          }
          const _JSON = JSON;
          closure_130_4 = JSON.parse(closure_130_3);
          closure_131_5[closure_130_0] = closure_130_4;
          c5 = 3;
          const obj = { value: closure_130_4, done: true };
          return obj;
        }
      }
    } catch (tmp31) {
      c5 = tmp;
      throw tmp31;
    }
  }
};
const Image = fn(17).Image;
let closure_5 = {};
const size = fn(2);
const result = size.fileFinishedImporting("modules/asset_json/native/AssetJsonUtils.tsx");

export const jsonAssets = {
  i18n_bg() {
    return loadJsonAsset(_mod1120);
  },
  i18n_cs() {
    return loadJsonAsset(_mod1122);
  },
  i18n_da() {
    return loadJsonAsset(_mod1123);
  },
  i18n_de() {
    return loadJsonAsset(_mod1124);
  },
  i18n_el() {
    return loadJsonAsset(_mod1125);
  },
  i18n_enGB() {
    return loadJsonAsset(_mod1126);
  },
  i18n_esES() {
    return loadJsonAsset(_mod1127);
  },
  i18n_es419() {
    return loadJsonAsset(_mod1128);
  },
  i18n_fi() {
    return loadJsonAsset(_mod1129);
  },
  i18n_fr() {
    return loadJsonAsset(_mod1130);
  },
  i18n_hr() {
    return loadJsonAsset(_mod1131);
  },
  i18n_hu() {
    return loadJsonAsset(_mod1132);
  },
  i18n_it() {
    return loadJsonAsset(_mod1133);
  },
  i18n_ja() {
    return loadJsonAsset(_mod1134);
  },
  i18n_ko() {
    return loadJsonAsset(_mod1135);
  },
  i18n_lt() {
    return loadJsonAsset(_mod1136);
  },
  i18n_nl() {
    return loadJsonAsset(_mod1137);
  },
  i18n_no() {
    return loadJsonAsset(_mod1138);
  },
  i18n_pl() {
    return loadJsonAsset(_mod1139);
  },
  i18n_ptBR() {
    return loadJsonAsset(_mod1140);
  },
  i18n_ro() {
    return loadJsonAsset(_mod1141);
  },
  i18n_ru() {
    return loadJsonAsset(_mod1142);
  },
  i18n_svSE() {
    return loadJsonAsset(_mod1143);
  },
  i18n_th() {
    return loadJsonAsset(_mod1144);
  },
  i18n_tr() {
    return loadJsonAsset(_mod1145);
  },
  i18n_uk() {
    return loadJsonAsset(_mod1146);
  },
  i18n_vi() {
    return loadJsonAsset(_mod1147);
  },
  i18n_zhCN() {
    return loadJsonAsset(_mod1148);
  },
  i18n_zhTW() {
    return loadJsonAsset(_mod1149);
  },
  i18n_hi() {
    return loadJsonAsset(_mod1150);
  },
};
export { loadJsonAsset };
