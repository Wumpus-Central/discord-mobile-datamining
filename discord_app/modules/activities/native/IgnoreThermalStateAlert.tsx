// discord_app/modules/activities/native/IgnoreThermalStateAlert.tsx
import AlertDefault from "../../../components_native/common/Alert.tsx";
import EmbeddedActivitiesActionCreators from "../EmbeddedActivitiesActionCreators.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, onConfirm;

let hasOwnProperty;
let metroRequire;
let closure_3 = ["onConfirm"];
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles({
  text: { marginTop: 16, lineHeight: 20, textAlign: "center" },
  header: { textAlign: "center" },
});
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (onConfirm) => {
      let closure_0;
      let items;
      let tmp10;
      let tmp12;
      let tmp13;
      let tmp15;
      let tmp17;
      let tmp20;
      let tmp22;
      let tmp5;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(18);
      if (cResult[0] !== onConfirm) {
        onConfirm = onConfirm.onConfirm;
        _require = onConfirm;
        const tmp8 = _objectWithoutProperties(onConfirm, closure_3);
        cResult[0] = onConfirm;
        cResult[1] = onConfirm;
        cResult[2] = tmp8;
        tmp5 = tmp8;
      } else {
        _require = cResult[1];
        tmp5 = cResult[2];
      }
      const tmp9 = closure_7();
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["1fRDnT"]);
        cResult[3] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== tmp4) {
        const fn = function v() {
          if (closure_0 != null) {
            tmp();
          }
          const obj = EmbeddedActivitiesActionCreators;
          const result = obj.disregardSeriousThermalState();
        };
        cResult[4] = tmp4;
        cResult[5] = fn;
        tmp12 = fn;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult1 = intl2.string(tmp(1126).t.oEAioF);
        cResult[6] = stringResult1;
        tmp13 = stringResult1;
      } else {
        tmp13 = cResult[6];
      }
      const header = tmp9.header;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = tmp(1126).intl;
        const stringResult2 = intl3.string(tmp(1126).t.v5X4fZ);
        cResult[7] = stringResult2;
        tmp15 = stringResult2;
      } else {
        tmp15 = cResult[7];
      }
      if (cResult[8] !== tmp9.header) {
        const obj2 = {
          style: header,
          variant: "heading-lg/extrabold",
          color: "mobile-text-heading-primary",
          children: tmp15,
        };
        const tmp19 = closure_5(tmp(4892).Text, obj2);
        cResult[8] = tmp9.header;
        cResult[9] = tmp19;
        tmp17 = tmp19;
      } else {
        tmp17 = cResult[9];
      }
      const text = tmp9.text;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(1126).intl;
        const stringResult3 = intl4.string(tmp(1126).t.VOgTjy);
        cResult[10] = stringResult3;
        tmp20 = stringResult3;
      } else {
        tmp20 = cResult[10];
      }
      if (cResult[11] !== tmp9.text) {
        const obj3 = { style: text, variant: "text-md/medium", children: tmp20 };
        const tmp24 = closure_5(tmp(4892).Text, obj3);
        cResult[11] = tmp9.text;
        cResult[12] = tmp24;
        tmp22 = tmp24;
      } else {
        tmp22 = cResult[12];
      }
      if (cResult[13] === tmp5) {
        if (cResult[14] === tmp12) {
          if (cResult[15] === tmp17) {
            let tmp25;
            if (cResult[16] === tmp22) {
              tmp25 = cResult[17];
            }
            return tmp25;
          }
        }
      }
      const obj4 = { cancelText: tmp10, onCancel: tmp12, confirmText: tmp13, children: items };
      const tmp26 = AlertDefault;
      const merged = Object.assign(tmp5);
      items = [tmp17, tmp22];
      const tmp28 = closure_6(tmp26, obj4);
      cResult[13] = tmp5;
      cResult[14] = tmp12;
      cResult[15] = tmp17;
      cResult[16] = tmp22;
      cResult[17] = tmp28;
      tmp25 = tmp28;
    }
  : (onConfirm) => {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items;
      onConfirm = onConfirm.onConfirm;
      const merged = Object.assign(onConfirm, Object.assign({ onConfirm: 0 }));
      const tmp2 = closure_7();
      let obj = {
        cancelText: intl.string(onConfirm(1126).t["1fRDnT"]),
        onCancel() {
          if (onConfirm != null) {
            tmp();
          }
          const obj = EmbeddedActivitiesActionCreators;
          const result = obj.disregardSeriousThermalState();
        },
        confirmText: intl2.string(onConfirm(1126).t.oEAioF),
        children: items,
      };
      const tmp3 = AlertDefault;
      const merged1 = Object.assign(merged);
      intl = onConfirm(1126).intl;
      intl2 = onConfirm(1126).intl;
      const obj2 = {
        style: tmp2.header,
        variant: "heading-lg/extrabold",
        color: "mobile-text-heading-primary",
        children: intl3.string(onConfirm(1126).t.v5X4fZ),
      };
      const Text = onConfirm(4892).Text;
      intl3 = onConfirm(1126).intl;
      items = [closure_5(Text, obj2)];
      const obj3 = { style: tmp2.text, variant: "text-md/medium", children: intl4.string(onConfirm(1126).t.VOgTjy) };
      const Text2 = onConfirm(4892).Text;
      intl4 = onConfirm(1126).intl;
      items[1] = closure_5(Text2, obj3);
      return closure_6(tmp3, obj);
    };
let result = size.fileFinishedImporting("modules/activities/native/IgnoreThermalStateAlert.tsx");

export const IgnoreThermalStateAlert = tmp4;
