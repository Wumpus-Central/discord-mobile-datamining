// discord_app/design/void/Form/native/FormSliderRow.tsx
import c from "../../../../../_runtime/00576_c.js";
import FormRowDefault from "FormRow.tsx";
import _modDef8380 from "../../../../../_runtime/metro/08380__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const Text_Text = Card(5086);
const Card2 = Card(6186);
const RedesignCompat = Card(6266);
require = fn;
let closure_3 = ["label", "trailing"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5090);
let closure_10 = createStyles.createStyles({
  labels: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  slider: { marginStart: -4, marginTop: 8 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/FormSliderRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FormSliderRow(arg0) {
      let Card = require;
      let tmp = dependencyMap;
      const cResult = c.c(24);
      if (cResult[0] !== arg0) {
        ({ label, trailing } = arg0);
        const tmp8 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = label;
        cResult[2] = tmp8;
        cResult[3] = trailing;
        let tmp5 = trailing;
        let tmp4 = tmp8;
        let tmp3 = label;
      } else {
        tmp3 = cResult[1];
        tmp4 = cResult[2];
        tmp5 = cResult[3];
      }
      const context = noop.useContext(RedesignCompat.RedesignCompatContext);
      const tmp10 = closure_10();
      if (context) {
        if (cResult[4] !== tmp3) {
          const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp3 };
          const tmp29 = React5(Text_Text.Text, obj2);
          cResult[4] = tmp3;
          cResult[5] = tmp29;
          let tmp27 = tmp29;
        } else {
          tmp27 = cResult[5];
        }
        if (cResult[6] === tmp10.labels) {
          if (cResult[7] === tmp27) {
            if (cResult[8] === tmp5) {
              let tmp30 = cResult[9];
            }
            if (cResult[10] === tmp4) {
              if (cResult[11] === tmp10.slider) {
                let tmp34 = cResult[12];
              }
              if (cResult[13] === tmp30) {
              }
              Card = Card2.Card;
              const obj3 = { children: null };
              const items = [tmp30, tmp34];
              obj3.children = items;
              tmp = closure_1_8(Card, obj3);
              cResult[13] = tmp30;
              cResult[14] = tmp34;
              cResult[15] = tmp;
            }
            const obj4 = {};
            const merged = Object.assign(tmp4);
            obj4.style = tmp10.slider;
            const tmp41 = React5(_modDef8380, obj4);
            cResult[10] = tmp4;
            cResult[11] = tmp10.slider;
            cResult[12] = tmp41;
            tmp34 = tmp41;
          }
        }
        const obj5 = { style: tmp10.labels, children: null };
        const items1 = [tmp27, tmp5];
        obj5.children = items1;
        const tmp33 = closure_1_8(View, obj5);
        cResult[6] = tmp10.labels;
        cResult[7] = tmp27;
        cResult[8] = tmp5;
        cResult[9] = tmp33;
        tmp30 = tmp33;
      } else {
        if (cResult[16] === tmp3) {
          if (cResult[17] === tmp5) {
            let tmp11 = cResult[18];
          }
          if (cResult[19] !== tmp4) {
            const obj6 = {};
            const merged1 = Object.assign(tmp4);
            const tmp22 = React5(_modDef8380, obj6);
            cResult[19] = tmp4;
            cResult[20] = tmp22;
            let tmp15 = tmp22;
          } else {
            tmp15 = cResult[20];
          }
          if (cResult[21] === tmp11) {
            if (cResult[22] === tmp15) {
              let tmp23 = cResult[23];
            }
            return tmp23;
          }
          const obj7 = { children: null };
          const items2 = [tmp11, tmp15];
          obj7.children = items2;
          const tmp26 = closure_1_8(options, obj7);
          cResult[21] = tmp11;
          cResult[22] = tmp15;
          cResult[23] = tmp26;
          tmp23 = tmp26;
        }
        const obj8 = { label: tmp3, trailing: tmp5 };
        const tmp14 = React5(FormRowDefault, obj8);
        cResult[16] = tmp3;
        cResult[17] = tmp5;
        cResult[18] = tmp14;
        tmp11 = tmp14;
      }
    }
  : function FormSliderRow(arg0) {
      ({ label, trailing } = arg0);
      const merged = Object.assign(arg0, Object.assign({ label: 0, trailing: 0 }));
      const context = noop.useContext(RedesignCompat.RedesignCompatContext);
      const tmp5 = closure_10();
      if (context) {
        const obj2 = { children: null };
        const obj3 = { style: tmp5.labels, children: null };
        const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: label };
        const items = [React5(Text_Text.Text, obj4), trailing];
        obj3.children = items;
        const items1 = [closure_1_8(View, obj3)];
        const obj5 = {};
        const merged1 = Object.assign(merged);
        obj5.style = tmp5.slider;
        items1[1] = React5(_modDef8380, obj5);
        obj2.children = items1;
        let tmp6Result = closure_1_8(Card2.Card, obj2);
      } else {
        const obj = { children: null };
        const obj6 = { label, trailing };
        const items2 = [React5(FormRowDefault, obj6)];
        const obj7 = {};
        const merged2 = Object.assign(merged);
        items2[1] = React5(_modDef8380, obj7);
        obj.children = items2;
        tmp6Result = closure_1_8(options, obj);
      }
      return tmp6Result;
    };
