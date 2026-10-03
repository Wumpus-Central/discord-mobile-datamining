// discord_app/modules/hub/native/components/HubEmailConnectionDescriptionActionsheet.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const createStyles = fn(4890);
let closure_4 = createStyles.createStyles({ description: { marginBottom: 8 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionDescriptionActionsheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(10);
      const tmp4 = closure_4();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: null };
        const intl = util.intl;
        obj2.title = intl.string(util.t["48kg+O"]);
        const tmp7 = React2(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult = intl2.string(util.t.O1k9XX);
        cResult[1] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== tmp4.description) {
        const obj3 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: tmp8 };
        const tmp12 = React2(Text_Text.Text, obj3);
        cResult[2] = tmp4.description;
        cResult[3] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const stringResult1 = intl3.string(util.t.FV5dvh);
        cResult[4] = stringResult1;
        let tmp13 = stringResult1;
      } else {
        tmp13 = cResult[4];
      }
      if (cResult[5] !== tmp4.description) {
        const obj4 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: tmp13 };
        const tmp17 = React2(Text_Text.Text, obj4);
        cResult[5] = tmp4.description;
        cResult[6] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[6];
      }
      if (cResult[7] === tmp10) {
        if (cResult[8] === tmp15) {
          let tmp18 = cResult[9];
        }
        return tmp18;
      }
      const obj5 = { children: null };
      const items = [first, tmp10, tmp15];
      obj5.children = items;
      const tmp19 = React3(Sheet_BottomSheet.BottomSheet, obj5);
      cResult[7] = tmp10;
      cResult[8] = tmp15;
      cResult[9] = tmp19;
      tmp18 = tmp19;
    }
  : () => {
      const tmp = closure_4();
      const obj = { children: null };
      const obj2 = { title: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t["48kg+O"]);
      const items = [React2(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2), ,];
      const obj3 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
      const intl2 = util.intl;
      obj3.children = intl2.string(util.t.O1k9XX);
      items[1] = React2(Text_Text.Text, obj3);
      const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
      const intl3 = util.intl;
      obj4.children = intl3.string(util.t.FV5dvh);
      items[2] = React2(Text_Text.Text, obj4);
      obj.children = items;
      return React3(Sheet_BottomSheet.BottomSheet, obj);
    };
