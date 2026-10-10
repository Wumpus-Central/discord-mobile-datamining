// discord_app/modules/channel_following/native/components/ChannelFollowSuccessAlert.tsx
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import util from "../../../../intl/index.native.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let items = [fn(12183), fn(12184), fn(12185)];
let items1 = [fn(12186), fn(12187), fn(12188)];
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
  },
];
const createStyles = fn(5092);
let closure_8 = createStyles.createStyles({
  text: { marginTop: 16, lineHeight: 20, textAlign: "center" },
  header: { textAlign: "center" },
  image: { alignSelf: "center", marginTop: -72, marginBottom: 16, width: "100%", resizeMode: "contain" },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_following/native/components/ChannelFollowSuccessAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ChannelFollowSuccessAlert(arg0) {
      const cResult = require("c").c(22);
      const tmp4 = closure_8();
      const obj = require("c");
      const tmp6 = useThemeDefault();
      const tmp7 = require("shared").isThemeDark(tmp6) ? items1 : items;
      _require = tmp7;
      if (cResult[0] !== tmp7) {
        const fn = function x() {
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
        const fn2 = function y() {
          return _modDef12.sample(items2);
        };
        items1 = [];
        cResult[3] = fn2;
        cResult[4] = items1;
        let tmp12 = items1;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[3];
        tmp12 = cResult[4];
      }
      const tmpResult = require("areHookInputsEqual");
      const stableMemo1 = require("areHookInputsEqual").useStableMemo(tmp11, tmp12);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["+IrDzN"]);
        cResult[5] = stringResult;
        let tmp14 = stringResult;
      } else {
        tmp14 = cResult[5];
      }
      if (cResult[6] === tmp4.image) {
        if (cResult[7] === stableMemo) {
          let tmp16 = cResult[8];
        }
        if (cResult[9] !== stableMemo1) {
          const stableMemo1Result = stableMemo1();
          cResult[9] = stableMemo1;
          cResult[10] = stableMemo1Result;
          let tmp18 = stableMemo1Result;
        } else {
          tmp18 = cResult[10];
        }
        if (cResult[11] === tmp4.header) {
          if (cResult[12] === tmp18) {
            let tmp20 = cResult[13];
          }
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult1 = intl2.string(tmp(1126).t["2QbSea"]);
            cResult[14] = stringResult1;
            let tmp23 = stringResult1;
          } else {
            tmp23 = cResult[14];
          }
          if (cResult[15] !== tmp4.text) {
            const obj3 = { style: tmp4.text, variant: "text-md/medium", color: "text-muted", children: tmp23 };
            const tmp27 = closure_3(tmp(5088).Text, obj3);
            cResult[15] = tmp4.text;
            cResult[16] = tmp27;
            let tmp25 = tmp27;
          } else {
            tmp25 = cResult[16];
          }
          if (cResult[17] === arg0) {
            if (cResult[18] === tmp25) {
              if (cResult[19] === tmp16) {
                if (cResult[20] === tmp20) {
                  let tmp29 = cResult[21];
                }
                return tmp29;
              }
            }
          }
          const obj4 = {};
          const merged = Object.assign(arg0);
          obj4.confirmText = tmp14;
          items2 = [tmp16, tmp20, tmp25];
          obj4.children = items2;
          const tmp35 = closure_4(common_AlertDefault, obj4);
          cResult[17] = arg0;
          cResult[18] = tmp25;
          cResult[19] = tmp16;
          cResult[20] = tmp20;
          cResult[21] = tmp35;
          tmp29 = tmp35;
          const tmp5Result = common_AlertDefault;
        }
        const obj5 = {
          style: tmp4.header,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: tmp18,
        };
        const tmp22 = closure_3(tmp(5088).Text, obj5);
        cResult[11] = tmp4.header;
        cResult[12] = tmp18;
        cResult[13] = tmp22;
        tmp20 = tmp22;
      }
      const tmp17 = closure_3(FastImageDefault, { source: stableMemo, style: tmp4.image });
      cResult[6] = tmp4.image;
      cResult[7] = stableMemo;
      cResult[8] = tmp17;
      tmp16 = tmp17;
      const obj6 = { source: stableMemo, style: tmp4.image };
      const tmpResult2 = require("areHookInputsEqual");
    }
  : function ChannelFollowSuccessAlert(arg0) {
      const tmp = closure_8();
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
      items1 = [closure_3(FastImageDefault, { source: stableMemo, style: tmp.image }), ,];
      const obj3 = { source: stableMemo, style: tmp.image };
      const tmp2Result = common_AlertDefault;
      items1[1] = closure_3(require("Text/Text").Text, {
        style: tmp.header,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: stableMemo1(),
      });
      const obj5 = { style: tmp.text, variant: "text-md/medium", color: "text-muted", children: null };
      const intl2 = tmp5(1126).intl;
      obj5.children = intl2.string(require("util").t["2QbSea"]);
      items1[2] = closure_3(require("Text/Text").Text, obj5);
      obj2.children = items1;
      return closure_4(tmp2Result, obj2);
    };
