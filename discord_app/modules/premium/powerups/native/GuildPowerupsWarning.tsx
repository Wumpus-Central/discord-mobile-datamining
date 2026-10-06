// discord_app/modules/premium/powerups/native/GuildPowerupsWarning.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, warnings;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, contentContainer: obj3, warningText: obj4, text: { textAlign: "center" } };
obj2 = {
  flexDirection: "row",
  alignItems: "flex-start",
  padding: nativeDefault.space.PX_24,
  backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING,
  borderWidth: 1,
  borderColor: nativeDefault.colors.STATUS_WARNING,
  borderRadius: nativeDefault.radii.lg,
  gap: nativeDefault.space.PX_8,
  overflow: "hidden",
};
createStyles = createStyles.createStyles;
obj3 = { flex: 1, gap: nativeDefault.space.PX_4, alignItems: "center" };
obj4 = { marginTop: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (warnings) => {
      let closure_0;
      let description;
      let guildId;
      let items;
      let powerupNames;
      let title;
      let obj = require("react");
      const cResult = obj.c(21);
      warnings = warnings.warnings;
      ({ guildId, powerupNames } = warnings);
      const tmp4 = closure_6();
      _require = tmp4;
      const obj2 = require("ManaTypeConsolidationExperiment");
      const manaTypeConsolidationExperiment = obj2.useManaTypeConsolidationExperiment("GuildPowerupsWarning");
      const tmp7 = manaTypeConsolidationExperiment(12235)(guildId, powerupNames);
      ({ title, description } = tmp7);
      const tmp6 = manaTypeConsolidationExperiment;
      if (tmp7.shouldShow) {
        let first;
        const _Symbol = Symbol;
        let str = "react.memo_cache_sentinel";
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { color: tmp6(587).colors.TEXT_FEEDBACK_WARNING, size: "md" };
          const CircleErrorIcon = tmp(4806).CircleErrorIcon;
          const tmp12 = closure_4(CircleErrorIcon, obj3);
          cResult[0] = tmp12;
          first = tmp12;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === tmp4.text) {
          let tmp13;
          if (cResult[2] === title) {
            tmp13 = cResult[3];
          }
          let str2 = "text-sm/medium";
          if (manaTypeConsolidationExperiment) {
            str2 = "experimental/body-sm/normal";
          }
          if (cResult[4] === description) {
            if (cResult[5] === tmp4.text) {
              let tmp16;
              if (cResult[6] === str2) {
                tmp16 = cResult[7];
              }
              if (cResult[8] === manaTypeConsolidationExperiment) {
                if (cResult[9] === tmp4.text) {
                  if (cResult[10] === tmp4.warningText) {
                    let tmp19;
                    if (cResult[11] === warnings) {
                      tmp19 = cResult[12];
                    }
                    if (cResult[13] === tmp4.contentContainer) {
                      if (cResult[14] === tmp13) {
                        if (cResult[15] === tmp16) {
                          let tmp22;
                          if (cResult[16] === tmp19) {
                            tmp22 = cResult[17];
                          }
                          if (cResult[18] === tmp4.container) {
                            let tmp26;
                            if (cResult[19] === tmp22) {
                              tmp26 = cResult[20];
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
                    const obj5 = { style: tmp4.contentContainer, children: items };
                    items = [first, tmp13, tmp16, tmp19];
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
                  let items;
                  let str = "text-sm/medium";
                  const Text = Text_Text.Text;
                  if (manaTypeConsolidationExperiment) {
                    str = "experimental/body-sm/normal";
                  }
                  const obj = { variant: str, color: "text-feedback-warning", style: items, children };
                  items = [,];
                  ({ warningText: arr[0], text: arr[1] } = closure_0);
                  return React3(Text, obj, "warning-" + index);
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
          const tmp18 = closure_4(require("Text/Text").Text, obj6);
          cResult[4] = description;
          cResult[5] = tmp4.text;
          cResult[6] = str2;
          cResult[7] = tmp18;
          tmp16 = tmp18;
        }
        const obj7 = { variant: "text-md/semibold", color: "text-feedback-warning", style: tmp4.text, children: title };
        const tmp15 = closure_4(require("Text/Text").Text, obj7);
        cResult[1] = tmp4.text;
        cResult[2] = title;
        cResult[3] = tmp15;
        tmp13 = tmp15;
      } else {
        return null;
      }
    }
  : (warnings) => {
      let closure_0;
      let guildId;
      let items;
      let obj3;
      let powerupNames;
      warnings = warnings.warnings;
      ({ guildId, powerupNames } = warnings);
      const tmp = closure_6();
      _require = tmp;
      let obj = require("ManaTypeConsolidationExperiment");
      const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsWarning");
      let tmp10Result = null;
      const tmp5 = manaTypeConsolidationExperiment;
      const tmp6 = manaTypeConsolidationExperiment(12235)(guildId, powerupNames);
      if (tmp6.shouldShow) {
        const obj2 = { style: tmp.container, children: closure_5(View, obj3) };
        obj3 = { style: tmp.contentContainer, children: items };
        const obj4 = { color: tmp5(587).colors.TEXT_FEEDBACK_WARNING, size: "md" };
        const CircleErrorIcon = tmp2(4806).CircleErrorIcon;
        items = [closure_4(CircleErrorIcon, obj4), , ,];
        const obj5 = { variant: "text-md/semibold", color: "text-feedback-warning", style: tmp.text, children: tmp7 };
        items[1] = closure_4(require("Text/Text").Text, obj5);
        let str = "text-sm/medium";
        let Text = tmp2(4892).Text;
        if (manaTypeConsolidationExperiment) {
          str = "experimental/body-sm/normal";
        }
        const obj6 = { variant: str, style: tmp.text, children: tmp8 };
        items[2] = closure_4(Text, obj6);
        let mapped;
        if (warnings != null) {
          mapped = warnings.map((children, index) => {
            let items;
            let str = "text-sm/medium";
            const Text = Text_Text.Text;
            if (manaTypeConsolidationExperiment) {
              str = "experimental/body-sm/normal";
            }
            const obj = { variant: str, color: "text-feedback-warning", style: items, children };
            items = [,];
            ({ warningText: arr[0], text: arr[1] } = closure_0);
            return React3(Text, obj, "warning-" + index);
          });
        }
        items[3] = mapped;
        tmp10Result = closure_4(View, obj2);
      }
      return tmp10Result;
    };
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsWarning.tsx");

export default tmp5;
