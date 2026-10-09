// === Module 10431: MutedUntilText ===

// Module 10431 (MutedUntilText)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5087 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const MuteSettingType = { SERVER: 0, [0]: "SERVER", CHANNEL: 1, [1]: "CHANNEL", DM: 2, [2]: "DM", CATEGORY: 3, [3]: "CATEGORY" };
const createStyles = fn(5091);
let closure_4 = createStyles.createStyles({ formHintText: { lineHeight: 18, marginBottom: 8, marginTop: 8, paddingHorizontal: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/MutedUntilText.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MutedUntilText(arg0) {
  const obj = c;
  const cResult = obj.c(13);
  ({ muteConfig, type } = arg0);
  const tmp4 = closure_4();
  if (null != muteConfig) {
    if (null != muteConfig.end_time) {
      if (obj.SERVER === type) {
        let N2NXMd = util.t.MQfdK9;
      } else if (tmp22.CHANNEL === type) {
        N2NXMd = util.t["N/kd49"];
      } else if (tmp22.DM === type) {
        N2NXMd = util.t.c4aY0P;
      } else if (tmp22.CATEGORY === type) {
        N2NXMd = util.t.N2NXMd;
      } else {
        return null;
      }
      if (cResult[0] === muteConfig.end_time) {
        if (cResult[1] === N2NXMd) {
          let tmp24 = cResult[2];
        }
        if (cResult[3] === tmp4.formHintText) {
          if (cResult[4] === tmp24) {
            let tmp30 = cResult[5];
          }
          return tmp30;
        }
        const obj2 = { style: tmp23, variant: "text-sm/medium", color: "text-muted", children: tmp24 };
        const tmp32 = jsx(Text_Text.Text, { style: tmp23, variant: "text-sm/medium", color: "text-muted", children: tmp24 });
        cResult[3] = tmp4.formHintText;
        cResult[4] = tmp24;
        cResult[5] = tmp32;
        tmp30 = tmp32;
      }
      const intl5 = util.intl;
      const obj3 = { endTime: null, endTimeHook: null };
      const _Date = Date;
      const date = new Date(muteConfig.end_time);
      obj3.endTime = date.toLocaleString(util.intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
      obj3.endTimeHook = function endTimeHook(children) {
        return jsx(Text_Text.Text, { variant: "text-sm/medium", color: "control-brand-foreground", children }, "muted");
      };
      const formatResult = intl5.format(N2NXMd, obj3);
      cResult[0] = muteConfig.end_time;
      cResult[1] = N2NXMd;
      cResult[2] = formatResult;
      tmp24 = formatResult;
    }
  }
  if (obj.SERVER === type) {
    const _Symbol4 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = util.intl;
      const stringResult = intl4.string(util.t["/b/DU7"]);
      cResult[6] = stringResult;
    }
  } else {
    if (tmp5.CHANNEL === type) {
      const _Symbol3 = Symbol;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const stringResult1 = intl3.string(util.t.utURT8);
        cResult[7] = stringResult1;
        let tmp13 = stringResult1;
      } else {
        tmp13 = cResult[7];
      }
      let tmp7 = tmp13;
    } else if (tmp5.DM === type) {
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult2 = intl2.string(util.t.jxF9er);
        cResult[8] = stringResult2;
        let tmp10 = stringResult2;
      } else {
        tmp10 = cResult[8];
      }
      tmp7 = tmp10;
    } else if (tmp5.CATEGORY === type) {
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult3 = intl.string(util.t["6+wqqt"]);
        cResult[9] = stringResult3;
        tmp7 = stringResult3;
      } else {
        tmp7 = cResult[9];
      }
    } else {
      return null;
    }
    if (cResult[10] === tmp4.formHintText) {
      if (cResult[11] === tmp7) {
        let tmp19 = cResult[12];
      }
      return tmp19;
    }
    const obj4 = { style: tmp4.formHintText, variant: "text-sm/medium", color: "text-muted", children: tmp7 };
    const tmp21 = jsx(Text_Text.Text, { style: tmp4.formHintText, variant: "text-sm/medium", color: "text-muted", children: tmp7 });
    cResult[10] = tmp4.formHintText;
    cResult[11] = tmp7;
    cResult[12] = tmp21;
    tmp19 = tmp21;
  }
}) : (function MutedUntilText(arg0) {
  ({ muteConfig, type } = arg0);
  const tmp = closure_4();
  if (null != muteConfig) {
    if (null != muteConfig.end_time) {
      if (obj.SERVER === type) {
        let N2NXMd = util.t.MQfdK9;
        let tmp15 = require;
      } else if (tmp12.CHANNEL === type) {
        N2NXMd = util.t["N/kd49"];
        tmp15 = require;
      } else if (tmp12.DM === type) {
        N2NXMd = util.t.c4aY0P;
        tmp15 = require;
      } else if (tmp12.CATEGORY === type) {
        N2NXMd = util.t.N2NXMd;
        tmp15 = require;
      } else {
        return null;
      }
      const obj2 = { style: tmp.formHintText, variant: "text-sm/medium", color: "text-muted", children: null };
      const intl5 = tmp15(1126).intl;
      const obj3 = { endTime: null, endTimeHook: null };
      const _Date = Date;
      const date = new Date(muteConfig.end_time);
      obj3.endTime = date.toLocaleString(tmp15(1126).intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
      obj3.endTimeHook = function endTimeHook(children) {
        return jsx(Text_Text.Text, { variant: "text-sm/medium", color: "control-brand-foreground", children }, "muted");
      };
      obj2.children = intl5.format(N2NXMd, obj3);
      return jsx(tmp15(5087).Text, { style: tmp.formHintText, variant: "text-sm/medium", color: "text-muted", children: null });
    }
  }
  if (obj.SERVER === type) {
    const intl4 = util.intl;
    let stringResult = intl4.string(util.t["/b/DU7"]);
    let tmp3 = require;
  } else if (tmp2.CHANNEL === type) {
    const intl3 = util.intl;
    stringResult = intl3.string(util.t.utURT8);
    tmp3 = require;
  } else if (tmp2.DM === type) {
    const intl2 = util.intl;
    stringResult = intl2.string(util.t.jxF9er);
    tmp3 = require;
  } else if (tmp2.CATEGORY === type) {
    tmp3 = require;
    const intl = util.intl;
    stringResult = intl.string(util.t["6+wqqt"]);
  } else {
    return null;
  }
  obj = { style: tmp.formHintText, variant: "text-sm/medium", color: "text-muted", children: stringResult };
  return jsx(tmp3(5087).Text, { style: tmp.formHintText, variant: "text-sm/medium", color: "text-muted", children: stringResult });
});
export { MuteSettingType };