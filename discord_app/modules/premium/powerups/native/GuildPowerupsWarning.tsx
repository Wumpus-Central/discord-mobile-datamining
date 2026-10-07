// === Module 12234: GuildPowerupsWarning ===

// Module 12234 (GuildPowerupsWarning)
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4892 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4896);
let obj2 = { container: { flexDirection: "row", alignItems: "flex-start", padding: nativeDefault.space.PX_24, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderWidth: 1, borderColor: nativeDefault.colors.STATUS_WARNING, borderRadius: nativeDefault.radii.lg, gap: nativeDefault.space.PX_8, overflow: "hidden" }, contentContainer: null, warningText: null, text: null };
let obj3 = { flexDirection: "row", alignItems: "flex-start", padding: nativeDefault.space.PX_24, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, borderWidth: 1, borderColor: nativeDefault.colors.STATUS_WARNING, borderRadius: nativeDefault.radii.lg, gap: nativeDefault.space.PX_8, overflow: "hidden" };
obj2.contentContainer = { flex: 1, gap: nativeDefault.space.PX_4, alignItems: "center" };
let obj4 = { flex: 1, gap: nativeDefault.space.PX_4, alignItems: "center" };
obj2.warningText = { marginTop: nativeDefault.space.PX_4 };
obj2.text = { textAlign: "center" };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { marginTop: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsWarning.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((warnings) => {
  const cResult = require("c").c(21);
  warnings = warnings.warnings;
  ({ guildId, powerupNames } = warnings);
  const tmp4 = closure_6();
  _require = tmp4;
  let obj = require("c");
  const manaTypeConsolidationExperiment = require("ManaTypeConsolidationExperiment").useManaTypeConsolidationExperiment("GuildPowerupsWarning");
  const tmp7 = manaTypeConsolidationExperiment(12235)(guildId, powerupNames);
  ({ title, description } = tmp7);
  if (tmp7.shouldShow) {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { color: tmp6(587).colors.TEXT_FEEDBACK_WARNING, size: "md" };
      const tmp12 = closure_4(tmp(4806).CircleErrorIcon, obj3);
      cResult[0] = tmp12;
      let first = tmp12;
    } else {
      first = cResult[0];
    }
    if (cResult[1] === tmp4.text) {
      if (cResult[2] === title) {
        let tmp13 = cResult[3];
      }
      let str2 = "text-sm/medium";
      if (manaTypeConsolidationExperiment) {
        str2 = "experimental/body-sm/normal";
      }
      if (cResult[4] === description) {
        if (cResult[5] === tmp4.text) {
          if (cResult[6] === str2) {
            let tmp16 = cResult[7];
          }
          if (cResult[8] === manaTypeConsolidationExperiment) {
            if (cResult[9] === tmp4.text) {
              if (cResult[10] === tmp4.warningText) {
                if (cResult[11] === warnings) {
                  let tmp19 = cResult[12];
                }
                if (cResult[13] === tmp4.contentContainer) {
                  if (cResult[14] === tmp13) {
                    if (cResult[15] === tmp16) {
                      if (cResult[16] === tmp19) {
                        let tmp22 = cResult[17];
                      }
                      if (cResult[18] === tmp4.container) {
                        if (cResult[19] === tmp22) {
                          let tmp26 = cResult[20];
                        }
                        return tmp26;
                      }
                      const obj4 = { style: tmp4.container, children: tmp22 };
                      const tmp29 = closure_4(View, obj4);
                      cResult[18] = tmp4.container;
                      cResult[19] = tmp22;
                      cResult[20] = tmp29;
                      tmp26 = tmp29;
                    }
                  }
                }
                const obj5 = { style: tmp4.contentContainer, children: null };
                let items = [first, tmp13, tmp16, tmp19];
                obj5.children = items;
                const tmp25 = closure_5(View, obj5);
                cResult[13] = tmp4.contentContainer;
                cResult[14] = tmp13;
                cResult[15] = tmp16;
                cResult[16] = tmp19;
                cResult[17] = tmp25;
                tmp22 = tmp25;
              }
            }
          }
          let mapped;
          if (warnings != null) {
            mapped = warnings.map((children, index) => {
              let str = "text-sm/medium";
              if (manaTypeConsolidationExperiment) {
                str = "experimental/body-sm/normal";
              }
              const obj = { variant: str, color: "text-feedback-warning", style: null, children };
              const items = [, ];
              ({ warningText: arr[0], text: arr[1] } = closure_0);
              obj.style = items;
              return React4(Text_Text.Text, obj, "warning-" + index);
            });
          }
          cResult[8] = manaTypeConsolidationExperiment;
          cResult[9] = tmp4.text;
          cResult[10] = tmp4.warningText;
          cResult[11] = warnings;
          cResult[12] = mapped;
          tmp19 = mapped;
        }
      }
      const obj6 = { variant: str2, style: tmp4.text, children: description };
      const tmp18 = closure_4(tmp(4892).Text, obj6);
      cResult[4] = description;
      cResult[5] = tmp4.text;
      cResult[6] = str2;
      cResult[7] = tmp18;
      tmp16 = tmp18;
    }
    const obj7 = { variant: "text-md/semibold", color: "text-feedback-warning", style: tmp4.text, children: title };
    const tmp15 = closure_4(tmp(4892).Text, obj7);
    cResult[1] = tmp4.text;
    cResult[2] = title;
    cResult[3] = tmp15;
    tmp13 = tmp15;
  } else {
    return null;
  }
  const obj2 = require("ManaTypeConsolidationExperiment");
  tmp6 = manaTypeConsolidationExperiment;
}) : ((warnings) => {
  warnings = warnings.warnings;
  ({ guildId, powerupNames } = warnings);
  const tmp = closure_6();
  _require = tmp;
  const manaTypeConsolidationExperiment = require("ManaTypeConsolidationExperiment").useManaTypeConsolidationExperiment("GuildPowerupsWarning");
  let obj = require("ManaTypeConsolidationExperiment");
  const tmp5 = manaTypeConsolidationExperiment;
  let tmp10Result = null;
  if (tmp6.shouldShow) {
    const obj2 = { style: tmp.container, children: null };
    const obj3 = { style: tmp.contentContainer, children: null };
    const obj4 = { color: tmp5(587).colors.TEXT_FEEDBACK_WARNING, size: "md" };
    let items = [closure_4(tmp2(4806).CircleErrorIcon, obj4), , , ];
    const obj5 = { variant: "text-md/semibold", color: "text-feedback-warning", style: tmp.text, children: tmp7 };
    items[1] = closure_4(tmp2(4892).Text, obj5);
    let str = "text-sm/medium";
    if (manaTypeConsolidationExperiment) {
      str = "experimental/body-sm/normal";
    }
    const obj6 = { variant: str, style: tmp.text, children: tmp8 };
    items[2] = closure_4(tmp2(4892).Text, obj6);
    let mapped;
    if (warnings != null) {
      mapped = warnings.map((children, index) => {
        let str = "text-sm/medium";
        if (manaTypeConsolidationExperiment) {
          str = "experimental/body-sm/normal";
        }
        const obj = { variant: str, color: "text-feedback-warning", style: null, children };
        const items = [, ];
        ({ warningText: arr[0], text: arr[1] } = closure_0);
        obj.style = items;
        return React4(Text_Text.Text, obj, "warning-" + index);
      });
    }
    items[3] = mapped;
    obj3.children = items;
    obj2.children = closure_5(View, obj3);
    tmp10Result = closure_4(View, obj2);
  }
  return tmp10Result;
});