// === Module 12120: ChannelFollowSuccessAlert ===

// Module 12120 (ChannelFollowSuccessAlert)
import _modDef12 from "module_12" /* 12 */;
import util from "util" /* 1126 */;
import useThemeDefault from "useTheme" /* 4797 */;
import common_AlertDefault from "common/Alert" /* 5790 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let items = [fn(12121), fn(12122), fn(12123)];
let items1 = [fn(12124), fn(12125), fn(12126)];
let items2 = [
  () => {
    const intl = util.intl;
    return intl.string(util.t["w2o/60"]);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.FiAvKg);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.vKUFek);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.veQl5T);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.Pxb7BR);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t["W03w++"]);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t["95HTb5"]);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t["+XFelz"]);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.hedHel);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.jgC65t);
  }
];
const createStyles = fn(4896);
let closure_9 = createStyles.createStyles({ text: { marginTop: 16, lineHeight: 20, textAlign: "center" }, header: { textAlign: "center" }, image: { alignSelf: "center", marginTop: -72, marginBottom: 16, width: "100%", resizeMode: "contain" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_following/native/components/ChannelFollowSuccessAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(22);
  const tmp4 = closure_9();
  const obj = require("c");
  const tmp6 = useThemeDefault();
  const tmp7 = require("shared").isThemeDark(tmp6) ? items1 : items;
  _require = tmp7;
  if (cResult[0] !== tmp7) {
    const fn = function u() {
      return _modDef12.sample(closure_0);
    };
    items = [tmp7];
    cResult[0] = tmp7;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp9 = items;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const obj2 = require("shared");
  const stableMemo = require("areHookInputsEqual").useStableMemo(tmp8, tmp9);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        obj = closure_1_1(closure_1_2[15]);
        return obj.sample(closure_1_8);
      }
    }
    items1 = [];
    cResult[3] = S;
    cResult[4] = items1;
    let tmp12 = items1;
  } else {
    class S {
      constructor() {
        obj = closure_1_1(closure_1_2[15]);
        return obj.sample(closure_1_8);
      }
    }
    tmp12 = cResult[4];
  }
  const tmpResult = require("areHookInputsEqual");
  const stableMemo1 = require("areHookInputsEqual").useStableMemo(S, tmp12);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        obj = closure_1_1(closure_1_2[15]);
        return obj.sample(closure_1_8);
      }
    }
    const stringResult = obj5.string(tmp(1126).t["+IrDzN"]);
    cResult[5] = stringResult;
    const tmp14 = stringResult;
  } else {
    class S {
      constructor() {
        obj = closure_1_1(closure_1_2[15]);
        return obj.sample(closure_1_8);
      }
    }
  }
  if (cResult[6] === tmp4.image) {
    class S {
      constructor() {
        obj = closure_1_1(closure_1_2[15]);
        return obj.sample(closure_1_8);
      }
    }
    if (cResult[9] !== stableMemo1) {
      class S {
        constructor() {
          obj = closure_1_1(closure_1_2[15]);
          return obj.sample(closure_1_8);
        }
      }
      cResult[9] = stableMemo1;
      cResult[10] = tmp19;
    } else {
      class S {
        constructor() {
          obj = closure_1_1(closure_1_2[15]);
          return obj.sample(closure_1_8);
        }
      }
    }
    if (cResult[11] === tmp4.header) {
      class S {
        constructor() {
          obj = closure_1_1(closure_1_2[15]);
          return obj.sample(closure_1_8);
        }
      }
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor() {
            obj = closure_1_1(closure_1_2[15]);
            return obj.sample(closure_1_8);
          }
        }
        const stringResult1 = obj8.string(tmp(1126).t["2QbSea"]);
        cResult[14] = stringResult1;
        const tmp23 = stringResult1;
      } else {
        class S {
          constructor() {
            obj = closure_1_1(closure_1_2[15]);
            return obj.sample(closure_1_8);
          }
        }
      }
      if (cResult[15] !== tmp4.text) {
        class S {
          constructor() {
            obj = closure_1_1(closure_1_2[15]);
            return obj.sample(closure_1_8);
          }
        }
        const obj3 = { style: tmp4.text, variant: "text-md/medium", color: "text-muted", children: tmp23 };
        const tmp26 = closure_4(tmp(4892).Text, obj3);
        cResult[15] = tmp4.text;
        cResult[16] = tmp26;
      } else {
        class S {
          constructor() {
            obj = closure_1_1(closure_1_2[15]);
            return obj.sample(closure_1_8);
          }
        }
      }
      if (cResult[17] === arg0) {
        class S {
          constructor() {
            obj = closure_1_1(closure_1_2[15]);
            return obj.sample(closure_1_8);
          }
        }
      }
      const obj4 = {};
      const merged = Object.assign(arg0);
      obj4.confirmText = tmp14;
      items2 = [tmp16, tmp20, tmp25];
      obj4.children = items2;
      const tmp34 = closure_5(common_AlertDefault, obj4);
      cResult[17] = arg0;
      cResult[18] = tmp25;
      cResult[19] = tmp16;
      cResult[20] = tmp20;
      cResult[21] = tmp34;
      const tmp5Result = common_AlertDefault;
    }
    const obj6 = { style: tmp4.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp19 };
    const tmp22 = closure_4(tmp(4892).Text, obj6);
    cResult[11] = tmp4.header;
    cResult[12] = tmp19;
    cResult[13] = tmp22;
  }
  const tmp17 = closure_4(Image, { source: stableMemo, style: tmp4.image });
  cResult[6] = tmp4.image;
  cResult[7] = stableMemo;
  cResult[8] = tmp17;
  const obj7 = { source: stableMemo, style: tmp4.image };
  const tmpResult2 = require("areHookInputsEqual");
}) : ((arg0) => {
  const tmp = closure_9();
  const tmp4 = useThemeDefault();
  const tmp6 = require("shared").isThemeDark(tmp4) ? items1 : items;
  _require = tmp6;
  const obj = require("shared");
  items = [tmp6];
  const stableMemo = require("areHookInputsEqual").useStableMemo(() => _modDef12.sample(closure_0), items);
  const tmp5Result = require("areHookInputsEqual");
  const stableMemo1 = require("areHookInputsEqual").useStableMemo(() => _modDef12.sample(items2), []);
  const obj2 = {};
  const tmp5Result2 = require("areHookInputsEqual");
  const merged = Object.assign(arg0);
  const intl = tmp5(1126).intl;
  obj2.confirmText = intl.string(require("util").t["+IrDzN"]);
  items1 = [closure_4(Image, { source: stableMemo, style: tmp.image }), , ];
  const obj3 = { source: stableMemo, style: tmp.image };
  const tmp2Result = common_AlertDefault;
  items1[1] = closure_4(require("Text/Text").Text, { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stableMemo1() });
  const obj5 = { style: tmp.text, variant: "text-md/medium", color: "text-muted", children: null };
  const intl2 = tmp5(1126).intl;
  obj5.children = intl2.string(require("util").t["2QbSea"]);
  items1[2] = closure_4(require("Text/Text").Text, obj5);
  obj2.children = items1;
  return closure_5(tmp2Result, obj2);
});