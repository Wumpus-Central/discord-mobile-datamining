// discord_app/modules/conjure/changelog/native/ConjureChangelogSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef3723 from "../../intl/ConjureUntranslated.messages.js";
import _modDef4461 from "../../../../../_runtime/metro/04461__.js";
import DateUtils from "../../../../utils/DateUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4890);
let obj2 = { entries: { gap: nativeDefault.space.PX_12 }, entry: null };
let obj3 = { gap: nativeDefault.space.PX_12 };
obj2.entry = { gap: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/changelog/native/ConjureChangelogSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = entry(576).c(30);
      entry = closure_6();
      let entries = useSafeAreaInsetsDefault().bottom;
      if (cResult[0] === entries) {
        if (cResult[1] === entry.entries) {
          if (cResult[2] === entry.entry) {
            if (cResult[20] === cResult[3]) {
              if (cResult[21] === tmp7) {
                if (cResult[22] === tmp8) {
                  if (cResult[23] === tmp9) {
                    let tmp27 = cResult[24];
                  }
                  if (cResult[25] === tmp6) {
                    if (cResult[26] === tmp10) {
                      if (cResult[27] === tmp11) {
                        if (cResult[28] === tmp27) {
                          let tmp30 = cResult[29];
                        }
                        return tmp30;
                      }
                    }
                  }
                  let obj2 = { scrollable: tmp10, header: tmp11, children: tmp27 };
                  const tmp32 = closure_4(tmp6, obj2);
                  cResult[25] = tmp6;
                  cResult[26] = tmp10;
                  cResult[27] = tmp11;
                  cResult[28] = tmp27;
                  cResult[29] = tmp32;
                  tmp30 = tmp32;
                }
              }
            }
            const obj3 = { contentContainerStyle: cResult[5], scrollIndicatorInsets: cResult[6], children: cResult[7] };
            const tmp29 = closure_4(cResult[3], obj3);
            cResult[20] = cResult[3];
            cResult[21] = cResult[5];
            cResult[22] = cResult[6];
            cResult[23] = cResult[7];
            cResult[24] = tmp29;
            tmp27 = tmp29;
          }
        }
      }
      let obj = entry(576);
      const tmpResult = entry(16579);
      const ActionSheet = tmp(6701).ActionSheet;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { title: null };
        let intl = tmp(1126).intl;
        obj4.title = intl.string(_modDef3723.bTBUeX);
        const tmp14 = closure_4(tmp(6644).BottomSheetTitleHeader, obj4);
        cResult[10] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[10];
      }
      const BottomSheetScrollView = tmp(6112).BottomSheetScrollView;
      const sum = nativeDefault.space.PX_16 + entries;
      if (cResult[11] !== sum) {
        const obj5 = { paddingBottom: sum };
        cResult[11] = sum;
        cResult[12] = obj5;
        let tmp16 = obj5;
      } else {
        tmp16 = cResult[12];
      }
      if (cResult[13] === entry.entries) {
        if (cResult[14] === tmp16) {
          let tmp17 = cResult[15];
        }
        if (cResult[16] !== entries) {
          const obj6 = { bottom: entries };
          cResult[16] = entries;
          cResult[17] = obj6;
          let tmp18 = obj6;
        } else {
          tmp18 = cResult[17];
        }
        if (cResult[18] !== entry.entry) {
          class T {
            constructor(arg0) {
              tmp = jsxs;
              obj = { style: closure_0.entry, children: null };
              tmp3 = closure_0;
              tmp4 = closure_2;
              tmp2 = View;
              obj2 = closure_0(closure_2[15]);
              tmp5 = closure_1;
              items = [,];
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
              items1 = [,];
              items1[0] = tmp(closure_0(closure_2[14]).Text, {
                variant: "text-xs/bold",
                color: "text-muted",
                children: items,
              });
              obj1 = { variant: "text-sm/normal", color: "text-subtle", children: arg0.summary };
              items1[1] = jsx(tmp3(tmp4[14]).Text, obj1);
              obj.children = items1;
              return tmp(tmp2, obj, "" + arg0.date + "-" + arg0.summary);
            }
          }
          cResult[18] = entry.entry;
          cResult[19] = T;
        } else {
          class T {
            constructor(arg0) {
              tmp = jsxs;
              obj = { style: closure_0.entry, children: null };
              tmp3 = closure_0;
              tmp4 = closure_2;
              tmp2 = View;
              obj2 = closure_0(closure_2[15]);
              tmp5 = closure_1;
              items = [,];
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
              items1 = [,];
              items1[0] = tmp(closure_0(closure_2[14]).Text, {
                variant: "text-xs/bold",
                color: "text-muted",
                children: items,
              });
              obj1 = { variant: "text-sm/normal", color: "text-subtle", children: arg0.summary };
              items1[1] = jsx(tmp3(tmp4[14]).Text, obj1);
              obj.children = items1;
              return tmp(tmp2, obj, "" + arg0.date + "-" + arg0.summary);
            }
          }
        }
        const mapped = allConjureChangelogResult.map(T);
        cResult[0] = entries;
        entries = entry.entries;
        cResult[1] = entries;
        entry = entry.entry;
        cResult[2] = entry;
        cResult[3] = BottomSheetScrollView;
        cResult[4] = ActionSheet;
        cResult[5] = tmp17;
        cResult[6] = tmp18;
        cResult[7] = mapped;
        cResult[8] = true;
        cResult[9] = tmp12;
      }
      let items = [entry.entries, tmp16];
      cResult[13] = entry.entries;
      cResult[14] = tmp16;
      cResult[15] = items;
      tmp17 = items;
      allConjureChangelogResult = entry(16579).allConjureChangelog("mobile");
    }
  : () => {
      const tmp = closure_6();
      _require = tmp;
      const bottom = useSafeAreaInsetsDefault().bottom;
      let obj = require("ConjureChangelog");
      let obj2 = { scrollable: true, header: null, children: null };
      const obj3 = { title: null };
      let intl = require("util").intl;
      obj3.title = intl.string(_modDef3723.bTBUeX);
      obj2.header = closure_4(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj3);
      const obj4 = { contentContainerStyle: null, scrollIndicatorInsets: null, children: null };
      let items = [tmp.entries];
      const allConjureChangelogResult = require("ConjureChangelog").allConjureChangelog("mobile");
      items[1] = { paddingBottom: nativeDefault.space.PX_16 + bottom };
      obj4.contentContainerStyle = items;
      obj4.scrollIndicatorInsets = { bottom };
      obj4.children = allConjureChangelogResult.map((children) => {
        const obj = { style: entry.entry, children: null };
        const items = [DateUtils.dateFormat(_modDef4461(children.date, "YYYY-MM-DD"), "LL")];
        let combined = null;
        if (obj3.isConjureChangelogEntryExclusive(children)) {
          const intl = util.intl;
          const _HermesInternal = HermesInternal;
          combined = " \u00B7 " + intl.string(_modDef3723.ybCVge);
        }
        items[1] = combined;
        const items1 = [
          hasOwnProperty(Text_Text.Text, { variant: "text-xs/bold", color: "text-muted", children: items }),
          React4(Text_Text.Text, { variant: "text-sm/normal", color: "text-subtle", children: children.summary }),
        ];
        obj.children = items1;
        return hasOwnProperty(View, obj, "" + children.date + "-" + children.summary);
      });
      obj2.children = closure_4(require("BottomSheetModal").BottomSheetScrollView, obj4);
      return closure_4(require("ActionSheet").ActionSheet, obj2);
    };
export const CONJURE_CHANGELOG_SHEET_KEY = "ConjureChangelogSheet";
