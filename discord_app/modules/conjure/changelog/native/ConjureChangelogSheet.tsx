// === Module 16580: ConjureChangelogSheet ===

// Module 16580 (ConjureChangelogSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import _modDef3723 from "module_3723" /* 3723 */;
import _modDef4461 from "module_4461" /* 4461 */;
import DateUtils from "DateUtils" /* 4552 */;
import Text_Text from "Text/Text" /* 4886 */;
import ConjureChangelog from "ConjureChangelog" /* 16579 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, obj1, str, tmp2, tmp3;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { entries: obj2, entry: obj3 };
obj2 = { gap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let entry;
  let flag;
  let intl;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp16;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let obj = require("react");
  const cResult = obj.c(30);
  const tmp4 = closure_6();
  _require = tmp4;
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[0] === bottom) {
    if (cResult[1] === tmp4.entries) {
      if (cResult[2] === tmp4.entry) {
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
        tmp9 = cResult[6];
        tmp10 = cResult[7];
        flag = cResult[8];
        tmp11 = cResult[9];
      }
      if (cResult[20] === tmp6) {
        if (cResult[21] === tmp8) {
          if (cResult[22] === tmp9) {
            let tmp21;
            if (cResult[23] === tmp10) {
              tmp21 = cResult[24];
            }
            if (cResult[25] === tmp7) {
              if (cResult[26] === flag) {
                if (cResult[27] === tmp11) {
                  let tmp24;
                  if (cResult[28] === tmp21) {
                    tmp24 = cResult[29];
                  }
                  return tmp24;
                }
              }
            }
            let obj2 = { scrollable: flag, header: tmp11, children: tmp21 };
            const tmp26 = closure_4(tmp7, obj2);
            cResult[25] = tmp7;
            cResult[26] = flag;
            cResult[27] = tmp11;
            cResult[28] = tmp21;
            cResult[29] = tmp26;
            tmp24 = tmp26;
          }
        }
      }
      let obj3 = { contentContainerStyle: tmp8, scrollIndicatorInsets: tmp9, children: tmp10 };
      const tmp23 = closure_4(tmp6, obj3);
      cResult[20] = tmp6;
      cResult[21] = tmp8;
      cResult[22] = tmp9;
      cResult[23] = tmp10;
      cResult[24] = tmp23;
      tmp21 = tmp23;
    }
  }
  const tmpResult = require("ConjureChangelog");
  const allConjureChangelogResult = tmpResult.allConjureChangelog("mobile");
  const ActionSheet = tmp(6701).ActionSheet;
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = { title: intl.string(_modDef3723.bTBUeX) };
    const BottomSheetTitleHeader = tmp(6644).BottomSheetTitleHeader;
    intl = tmp(1126).intl;
    const tmp14 = closure_4(BottomSheetTitleHeader, obj4);
    cResult[10] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[10];
  }
  const BottomSheetScrollView = tmp(6112).BottomSheetScrollView;
  const sum = nativeDefault.space.PX_16 + bottom;
  if (cResult[11] !== sum) {
    const obj5 = { paddingBottom: sum };
    cResult[11] = sum;
    cResult[12] = obj5;
    tmp16 = obj5;
  } else {
    tmp16 = cResult[12];
  }
  if (cResult[13] === tmp4.entries) {
    let tmp17;
    let tmp18;
    if (cResult[14] === tmp16) {
      tmp17 = cResult[15];
    }
    if (cResult[16] !== bottom) {
      const obj6 = { bottom };
      cResult[16] = bottom;
      cResult[17] = obj6;
      tmp18 = obj6;
    } else {
      tmp18 = cResult[17];
    }
    if (cResult[18] !== tmp4.entry) {
      class T {
        constructor(arg0) {
          tmp = jsxs;
          obj = { style: closure_0.entry, children: null };
          tmp3 = closure_0;
          tmp4 = closure_2;
          tmp2 = View;
          Text = closure_0(closure_2[14]).Text;
          obj2 = closure_0(closure_2[15]);
          tmp5 = closure_1;
          items = [, ];
          items[0] = obj2.dateFormat(closure_1(closure_2[16])(arg0.date, "YYYY-MM-DD"), "LL");
          obj3 = closure_0(closure_2[8]);
          combined = null;
          if (obj3.isConjureChangelogEntryExclusive(arg0)) {
            intl = tmp3(tmp4[11]).intl;
            tmp7 = globalThis;
            _HermesInternal = HermesInternal;
            str = " \u00B7 ";
            combined = " \u00B7 " + intl.string(tmp5(tmp4[12]).ybCVge);
          }
          items[1] = combined;
          items1 = [, ];
          items1[0] = tmp(Text, { variant: "text-xs/bold", color: "text-muted", children: items });
          obj1 = { variant: "text-sm/normal", color: "text-subtle", children: arg0.summary };
          items1[1] = jsx(tmp3(tmp4[14]).Text, obj1);
          obj.children = items1;
          return tmp(tmp2, obj, "" + arg0.date + "-" + arg0.summary);
        }
      }
      cResult[18] = tmp4.entry;
      cResult[19] = T;
    } else {
      class T {
        constructor(arg0) {
          tmp = jsxs;
          obj = { style: closure_0.entry, children: null };
          tmp3 = closure_0;
          tmp4 = closure_2;
          tmp2 = View;
          Text = closure_0(closure_2[14]).Text;
          obj2 = closure_0(closure_2[15]);
          tmp5 = closure_1;
          items = [, ];
          items[0] = obj2.dateFormat(closure_1(closure_2[16])(arg0.date, "YYYY-MM-DD"), "LL");
          obj3 = closure_0(closure_2[8]);
          combined = null;
          if (obj3.isConjureChangelogEntryExclusive(arg0)) {
            intl = tmp3(tmp4[11]).intl;
            tmp7 = globalThis;
            _HermesInternal = HermesInternal;
            str = " \u00B7 ";
            combined = " \u00B7 " + intl.string(tmp5(tmp4[12]).ybCVge);
          }
          items[1] = combined;
          items1 = [, ];
          items1[0] = tmp(Text, { variant: "text-xs/bold", color: "text-muted", children: items });
          obj1 = { variant: "text-sm/normal", color: "text-subtle", children: arg0.summary };
          items1[1] = jsx(tmp3(tmp4[14]).Text, obj1);
          obj.children = items1;
          return tmp(tmp2, obj, "" + arg0.date + "-" + arg0.summary);
        }
      }
    }
    const mapped = allConjureChangelogResult.map(T);
    cResult[0] = bottom;
    cResult[1] = tmp4.entries;
    cResult[2] = tmp4.entry;
    cResult[3] = BottomSheetScrollView;
    cResult[4] = ActionSheet;
    cResult[5] = tmp17;
    cResult[6] = tmp18;
    cResult[7] = mapped;
    cResult[8] = true;
    cResult[9] = tmp12;
    tmp11 = tmp12;
    flag = true;
    tmp10 = mapped;
    tmp9 = tmp18;
    tmp8 = tmp17;
    tmp7 = ActionSheet;
    tmp6 = BottomSheetScrollView;
  }
  let items = [tmp4.entries, tmp16];
  cResult[13] = tmp4.entries;
  cResult[14] = tmp16;
  cResult[15] = items;
  tmp17 = items;
}) : (() => {
  let BottomSheetScrollView;
  let BottomSheetTitleHeader;
  let entry;
  let intl;
  let items;
  let obj3;
  let obj4;
  const tmp = closure_6();
  _require = tmp;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = require("ConjureChangelog");
  let obj2 = { scrollable: true, header: closure_4(BottomSheetTitleHeader, obj3), children: closure_4(BottomSheetScrollView, obj4) };
  const allConjureChangelogResult = obj.allConjureChangelog("mobile");
  const ActionSheet = require("ActionSheet").ActionSheet;
  obj3 = { title: intl.string(_modDef3723.bTBUeX) };
  BottomSheetTitleHeader = require("BottomSheetTitleHeader").BottomSheetTitleHeader;
  intl = require("intl").intl;
  obj4 = {
    contentContainerStyle: items,
    scrollIndicatorInsets: { bottom },
    children: allConjureChangelogResult.map((children) => {
      let items1;
      const obj = { style: entry.entry, children: items1 };
      const Text = Text_Text.Text;
      const items = [, ];
      const obj2 = DateUtils;
      items[0] = obj2.dateFormat(_modDef4461(children.date, "YYYY-MM-DD"), "LL");
      let combined = null;
      const obj3 = ConjureChangelog;
      if (obj3.isConjureChangelogEntryExclusive(children)) {
        const intl = intl2.intl;
        const _HermesInternal = HermesInternal;
        combined = " \u00B7 " + intl.string(_modDef3723.ybCVge);
      }
      items[1] = combined;
      items1 = [hasOwnProperty(Text, { variant: "text-xs/bold", color: "text-muted", children: items }), ];
      const obj4 = { variant: "text-sm/normal", color: "text-subtle", children: children.summary };
      items1[1] = React3(Text_Text.Text, obj4);
      return hasOwnProperty(View, obj, "" + children.date + "-" + children.summary);
    })
  };
  items = [tmp.entries, ];
  const obj5 = { paddingBottom: nativeDefault.space.PX_16 + bottom };
  BottomSheetScrollView = require("BottomSheetModal").BottomSheetScrollView;
  items[1] = obj5;
  return closure_4(ActionSheet, obj2);
});
const result = size.fileFinishedImporting("modules/conjure/changelog/native/ConjureChangelogSheet.tsx");

export default tmp5;
export const CONJURE_CHANGELOG_SHEET_KEY = "ConjureChangelogSheet";