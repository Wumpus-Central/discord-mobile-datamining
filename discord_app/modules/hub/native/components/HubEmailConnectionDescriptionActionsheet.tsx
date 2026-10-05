// discord_app/modules/hub/native/components/HubEmailConnectionDescriptionActionsheet.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import intl4 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import BottomSheetTitleHeader2 from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let BottomSheet;

let c2;
let c3;
({ jsx: c2, jsxs: c3 } = Fragment);
let closure_4 = createStyles.createStyles({ description: { marginBottom: 8 } });
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let items;
      let tmp10;
      let tmp13;
      let tmp15;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(10);
      const tmp4 = closure_4();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: intl.string(intl4.t["48kg+O"]) };
        const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
        intl = intl4.intl;
        const tmp7 = React2(BottomSheetTitleHeader, obj2);
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      const description = tmp4.description;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = intl4.intl;
        const stringResult = intl2.string(intl4.t.O1k9XX);
        cResult[1] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== tmp4.description) {
        const obj3 = { style: description, variant: "text-sm/medium", color: "text-default", children: tmp8 };
        const tmp12 = React2(Text_Text.Text, obj3);
        cResult[2] = tmp4.description;
        cResult[3] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      const description2 = tmp4.description;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = intl4.intl;
        const stringResult1 = intl3.string(intl4.t.FV5dvh);
        cResult[4] = stringResult1;
        tmp13 = stringResult1;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] !== tmp4.description) {
        const obj4 = { style: description2, variant: "text-sm/medium", color: "text-default", children: tmp13 };
        const tmp17 = React2(Text_Text.Text, obj4);
        cResult[5] = tmp4.description;
        cResult[6] = tmp17;
        tmp15 = tmp17;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] === tmp10) {
        let tmp18;
        if (cResult[8] === tmp15) {
          tmp18 = cResult[9];
        }
        return tmp18;
      }
      const obj5 = { children: items };
      items = [first, tmp10, tmp15];
      const tmp19 = _false(Sheet_BottomSheet.BottomSheet, obj5);
      cResult[7] = tmp10;
      cResult[8] = tmp15;
      cResult[9] = tmp19;
      tmp18 = tmp19;
    }
  : () => {
      let intl;
      let intl2;
      let intl3;
      let items;
      const tmp = closure_4();
      const obj = { children: items };
      BottomSheet = Sheet_BottomSheet.BottomSheet;
      const obj2 = { title: intl.string(intl4.t["48kg+O"]) };
      const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
      intl = intl4.intl;
      items = [React2(BottomSheetTitleHeader, obj2), ,];
      const obj3 = {
        style: tmp.description,
        variant: "text-sm/medium",
        color: "text-default",
        children: intl2.string(intl4.t.O1k9XX),
      };
      const Text = Text_Text.Text;
      intl2 = intl4.intl;
      items[1] = React2(Text, obj3);
      const obj4 = {
        style: tmp.description,
        variant: "text-sm/medium",
        color: "text-default",
        children: intl3.string(intl4.t.FV5dvh),
      };
      const Text2 = Text_Text.Text;
      intl3 = intl4.intl;
      items[2] = React2(Text2, obj4);
      return _false(BottomSheet, obj);
    };
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionDescriptionActionsheet.tsx");

export default tmp4;
