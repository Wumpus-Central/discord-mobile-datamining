// === Module 12120: ChannelFollowSuccessAlert ===

// Module 12120 (ChannelFollowSuccessAlert)
import _modDef12 from "module_12" /* 12 */;
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1126 */;
import useThemeDefault from "useTheme" /* 4797 */;
import AlertDefault from "Alert" /* 5790 */;
import AssetRegistry from "AssetRegistry" /* 12121 */;
import AssetRegistry2 from "AssetRegistry" /* 12122 */;
import AssetRegistry3 from "AssetRegistry" /* 12123 */;
import AssetRegistry4 from "AssetRegistry" /* 12124 */;
import AssetRegistry5 from "AssetRegistry" /* 12125 */;
import AssetRegistry6 from "AssetRegistry" /* 12126 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
const Image = react_native.Image;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let items = [AssetRegistry, AssetRegistry2, AssetRegistry3];
let items1 = [AssetRegistry4, AssetRegistry5, AssetRegistry6];
let items2 = [
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t["w2o/60"]);
  },
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t.FiAvKg);
  },
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t.vKUFek);
  },
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t.veQl5T);
  },
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t.Pxb7BR);
  },
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t["W03w++"]);
  },
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t["95HTb5"]);
  },
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t["+XFelz"]);
  },
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t.hedHel);
  },
  () => {
    const intl = intl3.intl;
    return intl.string(intl3.t.jgC65t);
  }
];
let closure_9 = createStyles.createStyles({ text: { marginTop: 16, lineHeight: 20, textAlign: "center" }, header: { textAlign: "center" }, image: { alignSelf: "center", marginTop: -72, marginBottom: 16, width: "100%", resizeMode: "contain" } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp12;
  let tmp14;
  let tmp8;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(22);
  const tmp4 = closure_9();
  const tmp6 = useThemeDefault();
  const obj2 = require("shared");
  const tmp7 = obj2.isThemeDark(tmp6) ? items1 : items;
  _require = tmp7;
  if (cResult[0] !== tmp7) {
    const fn = function u() {
      const obj = _modDef12;
      return obj.sample(closure_0);
    };
    items = [tmp7];
    cResult[0] = tmp7;
    cResult[1] = fn;
    cResult[2] = items;
    tmp9 = items;
    tmp8 = fn;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const tmpResult = require("module_6962");
  const stableMemo = tmpResult.useStableMemo(tmp8, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        const obj = _modDef12;
        return obj.sample(items2);
      }
    }
    items1 = [];
    cResult[3] = S;
    cResult[4] = items1;
    tmp12 = items1;
  } else {
    class S {
      constructor() {
        const obj = _modDef12;
        return obj.sample(items2);
      }
    }
    tmp12 = cResult[4];
  }
  const tmpResult2 = require("module_6962");
  const stableMemo1 = tmpResult2.useStableMemo(S, tmp12);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        const obj = _modDef12;
        return obj.sample(items2);
      }
    }
    const stringResult = obj5.string(require("intl").t["+IrDzN"]);
    cResult[5] = stringResult;
    tmp14 = stringResult;
  } else {
    class S {
      constructor() {
        const obj = _modDef12;
        return obj.sample(items2);
      }
    }
  }
  if (cResult[6] === tmp4.image) {
    class S {
      constructor() {
        const obj = _modDef12;
        return obj.sample(items2);
      }
    }
    const header = tmp4.header;
    if (cResult[9] !== stableMemo1) {
      class S {
        constructor() {
          const obj = _modDef12;
          return obj.sample(items2);
        }
      }
      cResult[9] = stableMemo1;
      cResult[10] = tmp19;
    } else {
      class S {
        constructor() {
          const obj = _modDef12;
          return obj.sample(items2);
        }
      }
    }
    if (cResult[11] === tmp4.header) {
      let tmp23;
      class S {
        constructor() {
          const obj = _modDef12;
          return obj.sample(items2);
        }
      }
      const _Symbol = Symbol;
      const text = tmp4.text;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            const obj = _modDef12;
            return obj.sample(items2);
          }
        }
        const stringResult1 = obj8.string(require("intl").t["2QbSea"]);
        cResult[14] = stringResult1;
        tmp23 = stringResult1;
      } else {
        class S {
          constructor() {
            const obj = _modDef12;
            return obj.sample(items2);
          }
        }
      }
      if (cResult[15] !== tmp4.text) {
        class S {
          constructor() {
            const obj = _modDef12;
            return obj.sample(items2);
          }
        }
        const obj3 = { style: text, variant: "text-md/medium", color: "text-muted", children: tmp23 };
        cResult[15] = tmp4.text;
        cResult[16] = closure_4(require("Text/Text").Text, obj3);
        const tmp26 = closure_4(require("Text/Text").Text, obj3);
      } else {
        class S {
          constructor() {
            const obj = _modDef12;
            return obj.sample(items2);
          }
        }
      }
      if (cResult[17] === arg0) {
        class S {
          constructor() {
            const obj = _modDef12;
            return obj.sample(items2);
          }
        }
      }
      const obj4 = { confirmText: tmp14, children: items2 };
      const tmp5Result = AlertDefault;
      const merged = Object.assign(arg0);
      items2 = [tmp16, tmp20, tmp25];
      cResult[17] = arg0;
      cResult[18] = tmp25;
      cResult[19] = tmp16;
      cResult[20] = tmp20;
      cResult[21] = closure_5(tmp5Result, obj4);
      const tmp34 = closure_5(tmp5Result, obj4);
    }
    const obj6 = { style: header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp19 };
    cResult[11] = tmp4.header;
    cResult[12] = tmp19;
    cResult[13] = closure_4(require("Text/Text").Text, obj6);
    const tmp22 = closure_4(require("Text/Text").Text, obj6);
  }
  const obj7 = { source: stableMemo, style: tmp4.image };
  cResult[6] = tmp4.image;
  cResult[7] = stableMemo;
  cResult[8] = closure_4(Image, obj7);
  const tmp17 = closure_4(Image, obj7);
}) : ((arg0) => {
  let closure_0;
  let intl;
  let intl2;
  const tmp = closure_9();
  const tmp4 = useThemeDefault();
  let obj = require("shared");
  const tmp6 = obj.isThemeDark(tmp4) ? items1 : items;
  _require = tmp6;
  items = [tmp6];
  const tmp5Result = require("module_6962");
  const stableMemo = tmp5Result.useStableMemo(() => {
    const obj = _modDef12;
    return obj.sample(closure_0);
  }, items);
  const tmp5Result2 = require("module_6962");
  const stableMemo1 = tmp5Result2.useStableMemo(() => {
    const obj = _modDef12;
    return obj.sample(items2);
  }, []);
  const obj2 = { confirmText: intl.string(require("intl").t["+IrDzN"]), children: items1 };
  const tmp2Result = AlertDefault;
  const merged = Object.assign(arg0);
  intl = tmp5(1126).intl;
  items1 = [, , ];
  const obj3 = { source: stableMemo, style: tmp.image };
  items1[0] = closure_4(Image, obj3);
  const obj4 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stableMemo1() };
  const Text = tmp5(4892).Text;
  items1[1] = closure_4(Text, obj4);
  const obj5 = { style: tmp.text, variant: "text-md/medium", color: "text-muted", children: intl2.string(require("intl").t["2QbSea"]) };
  const Text2 = tmp5(4892).Text;
  intl2 = tmp5(1126).intl;
  items1[2] = closure_4(Text2, obj5);
  return closure_5(tmp2Result, obj2);
});
const result = size.fileFinishedImporting("modules/channel_following/native/components/ChannelFollowSuccessAlert.tsx");

export default tmp4;