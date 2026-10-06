// discord_app/design/void/Form/native/FormSliderRow.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Text_Text from "../../../components/Text/native/Text.tsx";
import Card_Card from "../../../components/Card/native/Card.native.tsx";
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import FormRowDefault from "FormRow.tsx";
import _modDef7963 from "../../../../../_runtime/metro/07963__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c9;
let metroImportAll;
let metroImportDefault;
let closure_3 = ["label", "trailing"];
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let closure_10 = createStyles.createStyles({
  labels: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  slider: { marginStart: -4, marginTop: 8 },
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let items1;
      let items2;
      let label;
      let tmp24;
      let tmp4;
      let tmp5;
      let tmp6;
      let trailing;
      const obj = react2;
      const cResult = obj.c(24);
      if (cResult[0] !== arg0) {
        ({ label, trailing } = arg0);
        const tmp9 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = label;
        cResult[2] = tmp9;
        cResult[3] = trailing;
        tmp6 = trailing;
        tmp5 = tmp9;
        tmp4 = label;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
      }
      const context = react.useContext(RedesignCompat.RedesignCompatContext);
      const tmp11 = closure_10();
      if (context) {
        let tmp28;
        if (cResult[4] !== tmp4) {
          const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp4 };
          const tmp30 = metroImportDefault(Text_Text.Text, obj2);
          cResult[4] = tmp4;
          cResult[5] = tmp30;
          tmp28 = tmp30;
        } else {
          tmp28 = cResult[5];
        }
        if (cResult[6] === tmp11.labels) {
          if (cResult[7] === tmp28) {
            let tmp31;
            if (cResult[8] === tmp6) {
              tmp31 = cResult[9];
            }
            if (cResult[10] === tmp5) {
              let tmp35;
              if (cResult[11] === tmp11.slider) {
                tmp35 = cResult[12];
              }
              if (cResult[13] === tmp31) {
                let tmp43;
                if (cResult[14] === tmp35) {
                  tmp43 = cResult[15];
                }
                tmp24 = tmp43;
              }
              const obj3 = { children: items };
              items = [tmp31, tmp35];
              const tmp45 = metroImportAll(Card_Card.Card, obj3);
              cResult[13] = tmp31;
              cResult[14] = tmp35;
              cResult[15] = tmp45;
              tmp43 = tmp45;
            }
            const obj4 = { style: tmp11.slider };
            const tmp38 = _modDef7963;
            const merged = Object.assign(tmp5);
            const tmp42 = metroImportDefault(tmp38, obj4);
            cResult[10] = tmp5;
            cResult[11] = tmp11.slider;
            cResult[12] = tmp42;
            tmp35 = tmp42;
          }
        }
        const obj5 = { style: tmp11.labels, children: items1 };
        items1 = [tmp28, tmp6];
        const tmp34 = metroImportAll(View, obj5);
        cResult[6] = tmp11.labels;
        cResult[7] = tmp28;
        cResult[8] = tmp6;
        cResult[9] = tmp34;
        tmp31 = tmp34;
      } else {
        if (cResult[16] === tmp4) {
          let tmp12;
          let tmp16;
          if (cResult[17] === tmp6) {
            tmp12 = cResult[18];
          }
          if (cResult[19] !== tmp5) {
            const obj6 = {};
            const tmp19 = _modDef7963;
            const merged1 = Object.assign(tmp5);
            const tmp23 = metroImportDefault(tmp19, obj6);
            cResult[19] = tmp5;
            cResult[20] = tmp23;
            tmp16 = tmp23;
          } else {
            tmp16 = cResult[20];
          }
          if (cResult[21] === tmp12) {
            if (cResult[22] === tmp16) {
              tmp24 = cResult[23];
            }
          }
          const obj7 = { children: items2 };
          items2 = [tmp12, tmp16];
          const tmp27 = metroImportAll(React4, obj7);
          cResult[21] = tmp12;
          cResult[22] = tmp16;
          cResult[23] = tmp27;
          tmp24 = tmp27;
        }
        const obj8 = { label: tmp4, trailing: tmp6 };
        const tmp15 = metroImportDefault(FormRowDefault, obj8);
        cResult[16] = tmp4;
        cResult[17] = tmp6;
        cResult[18] = tmp15;
        tmp12 = tmp15;
      }
      return tmp24;
    }
  : (arg0) => {
      let items;
      let items1;
      let items2;
      let label;
      let tmp6Result;
      let trailing;
      ({ label, trailing } = arg0);
      const merged = Object.assign(arg0, Object.assign({ label: 0, trailing: 0 }));
      const context = react.useContext(RedesignCompat.RedesignCompatContext);
      const tmp5 = closure_10();
      if (context) {
        const obj2 = { children: items1 };
        const obj3 = { style: tmp5.labels, children: items };
        const Card = Card_Card.Card;
        const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: label };
        items = [metroImportDefault(Text_Text.Text, obj4), trailing];
        items1 = [metroImportAll(View, obj3)];
        const obj5 = { style: tmp5.slider };
        const tmp18 = _modDef7963;
        const merged1 = Object.assign(merged);
        items1[1] = metroImportDefault(tmp18, obj5);
        tmp6Result = metroImportAll(Card, obj2);
      } else {
        const obj = { children: items2 };
        const obj6 = { label, trailing };
        items2 = [metroImportDefault(FormRowDefault, obj6)];
        const obj7 = {};
        const tmp10 = _modDef7963;
        const merged2 = Object.assign(merged);
        items2[1] = metroImportDefault(tmp10, obj7);
        tmp6Result = metroImportAll(React4, obj);
      }
      return tmp6Result;
    };
const result = size.fileFinishedImporting("design/void/Form/native/FormSliderRow.tsx");

export default tmp3;
