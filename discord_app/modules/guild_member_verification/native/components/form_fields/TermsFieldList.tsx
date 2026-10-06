// === Module 5994: TermsFieldList ===

// Module 5994 (TermsFieldList)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4883 */;
import Text_Text from "Text/Text" /* 4892 */;
import TableRowDivider from "TableRowDivider" /* 5995 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, rules;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
let Fragment = Fragment_mod;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { termsContainer: obj2, firstItem: obj3, lastItem: obj4, termsRow: { flexDirection: "row" }, termsRowContent: { flex: 1, lineHeight: 20 }, termsRowNumber: { paddingRight: 8, width: 20, height: 20 }, title: { marginBottom: 16 } };
obj2 = { padding: 16, flexDirection: "column", justifyContent: "space-between", backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj4 = { borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm, marginBottom: 12 };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let rowCount;
  let rowNumber;
  let rule;
  let rulesChannelId;
  const obj = react2;
  const cResult = obj.c(17);
  ({ rowNumber, rowCount, rule, rulesChannelId } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === rowCount) {
    let tmp7;
    if (cResult[1] === rowNumber) {
      tmp7 = cResult[2];
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + rowNumber + ".";
    if (cResult[3] === tmp4.termsRowNumber) {
      if (cResult[4] === tmp7) {
        let tmp11;
        if (cResult[5] === combined) {
          tmp11 = cResult[6];
        }
        if (cResult[7] === rule) {
          let tmp15;
          if (cResult[8] === rulesChannelId) {
            tmp15 = cResult[9];
          }
          if (cResult[10] === tmp4.termsRowContent) {
            let tmp18;
            if (cResult[11] === tmp15) {
              tmp18 = cResult[12];
            }
            if (cResult[13] === tmp4.termsRow) {
              if (cResult[14] === tmp11) {
                let tmp21;
                if (cResult[15] === tmp18) {
                  tmp21 = cResult[16];
                }
                return tmp21;
              }
            }
            const obj2 = { style: tmp5, children: items };
            items = [tmp11, tmp18];
            const tmp24 = metroRequire(View, obj2);
            cResult[13] = tmp4.termsRow;
            cResult[14] = tmp11;
            cResult[15] = tmp18;
            cResult[16] = tmp24;
            tmp21 = tmp24;
          }
          const obj4 = { style: tmp14, variant: "text-md/medium", children: tmp15 };
          const tmp20 = hasOwnProperty(Text_Text.Text, obj4);
          cResult[10] = tmp4.termsRowContent;
          cResult[11] = tmp15;
          cResult[12] = tmp20;
          tmp18 = tmp20;
        }
        const obj5 = { channelId: rulesChannelId };
        const obj3 = MarkupUtilsDefault;
        const result = obj3.parseGuildVerificationFormRule(rule, true, obj5);
        cResult[7] = rule;
        cResult[8] = rulesChannelId;
        cResult[9] = result;
        tmp15 = result;
      }
    }
    const obj6 = { style: tmp6, variant: "text-sm/medium", color: "text-muted", accessibilityLabel: tmp7, children: combined };
    const tmp13 = hasOwnProperty(Text_Text.Text, obj6);
    cResult[3] = tmp4.termsRowNumber;
    cResult[4] = tmp7;
    cResult[5] = combined;
    cResult[6] = tmp13;
    tmp11 = tmp13;
  }
  const intl = intl2.intl;
  const formatToPlainStringResult = intl.formatToPlainString(intl2.t.XpgzeO, { number: rowNumber, total: rowCount });
  cResult[0] = rowCount;
  cResult[1] = rowNumber;
  cResult[2] = formatToPlainStringResult;
  tmp7 = formatToPlainStringResult;
}) : ((rowNumber) => {
  let intl;
  let items;
  let obj4;
  let rowCount;
  let rule;
  let rulesChannelId;
  rowNumber = rowNumber.rowNumber;
  ({ rowCount, rule, rulesChannelId } = rowNumber);
  const tmp = closure_8();
  const obj = { style: tmp.termsRow, children: items };
  const obj2 = { style: tmp.termsRowNumber, variant: "text-sm/medium", color: "text-muted", accessibilityLabel: intl.formatToPlainString(intl2.t.XpgzeO, { number: rowNumber, total: rowCount }), children: "" + rowNumber + "." };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items = [hasOwnProperty(Text, obj2), ];
  const obj3 = { style: tmp.termsRowContent, variant: "text-md/medium", children: obj4.parseGuildVerificationFormRule(rule, true, { channelId: rulesChannelId }) };
  const Text2 = Text_Text.Text;
  obj4 = MarkupUtilsDefault;
  items[1] = hasOwnProperty(Text2, obj3);
  return metroRequire(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((rules) => {
  let first;
  let items;
  let termsContainer;
  let tmp10;
  let tmp7;
  let obj = rules(576);
  const cResult = obj.c(20);
  rules = rules.rules;
  const rulesChannelId = rules.rulesChannelId;
  const tmp4 = closure_8();
  dependencyMap = tmp4;
  const title = tmp4.title;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(rules(1126).t.prJqwT);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.title) {
    let obj2 = { style: title, accessibilityRole: "header", variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: first };
    const tmp9 = closure_5(rules(4892).Text, obj2);
    cResult[1] = tmp4.title;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === rules) {
    if (cResult[4] === rulesChannelId) {
      if (cResult[5] === tmp4.firstItem) {
        if (cResult[6] === tmp4.lastItem) {
          let tmp13;
          if (cResult[7] === tmp4.termsContainer) {
            tmp10 = cResult[8];
          }
          if (cResult[15] !== tmp10) {
            const obj3 = { accessibilityRole: "list", children: tmp10 };
            const tmp16 = closure_5(View, obj3);
            cResult[15] = tmp10;
            cResult[16] = tmp16;
            tmp13 = tmp16;
          } else {
            tmp13 = cResult[16];
          }
          if (cResult[17] === tmp7) {
            let tmp17;
            if (cResult[18] === tmp13) {
              tmp17 = cResult[19];
            }
            return tmp17;
          }
          const obj4 = { children: items };
          items = [tmp7, tmp13];
          const tmp20 = closure_6(closure_7, obj4);
          cResult[17] = tmp7;
          cResult[18] = tmp13;
          cResult[19] = tmp20;
          tmp17 = tmp20;
        }
      }
    }
  }
  if (cResult[9] === rules.length) {
    if (cResult[10] === rulesChannelId) {
      if (cResult[11] === tmp4.firstItem) {
        if (cResult[12] === tmp4.lastItem) {
          let tmp11;
          if (cResult[13] === tmp4.termsContainer) {
            tmp11 = cResult[14];
          }
          const mapped = rules.map(tmp11);
          cResult[3] = rules;
          cResult[4] = rulesChannelId;
          cResult[5] = tmp4.firstItem;
          cResult[6] = tmp4.lastItem;
          cResult[7] = tmp4.termsContainer;
          cResult[8] = mapped;
          tmp10 = mapped;
        }
      }
    }
  }
  const fn = function f(rule, arg1) {
    let obj2;
    const items = [termsContainer.termsContainer, , ];
    let firstItem = null;
    const Fragment = react.Fragment;
    if (0 === arg1) {
      firstItem = termsContainer.firstItem;
    }
    items[1] = firstItem;
    let lastItem = null;
    if (arg1 === rules.length - 1) {
      lastItem = termsContainer.lastItem;
    }
    items[2] = lastItem;
    const obj = { style: items, children: hasOwnProperty(closure_9, obj2) };
    obj2 = { rule, rowNumber: arg1 + 1, rowCount: rules.length, rulesChannelId };
    const children = [hasOwnProperty(View, obj), ];
    let tmp2Result = null;
    if (arg1 !== rules.length - 1) {
      tmp2Result = hasOwnProperty(TableRowDivider.TableRowDivider, {});
    }
    children[1] = tmp2Result;
    return metroRequire(Fragment, { children }, "term-" + rule + "-" + arg1);
  };
  cResult[9] = rules.length;
  cResult[10] = rulesChannelId;
  cResult[11] = tmp4.firstItem;
  cResult[12] = tmp4.lastItem;
  cResult[13] = tmp4.termsContainer;
  cResult[14] = fn;
  tmp11 = fn;
}) : ((rules) => {
  let intl;
  let items;
  let termsContainer;
  rules = rules.rules;
  const rulesChannelId = rules.rulesChannelId;
  const tmp = closure_8();
  dependencyMap = tmp;
  let obj = { children: items };
  let obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: intl.string(rules(1126).t.prJqwT) };
  const Text = rules(4892).Text;
  intl = rules(1126).intl;
  items = [closure_5(Text, obj2), ];
  const obj3 = {
    accessibilityRole: "list",
    children: rules.map((rule, index) => {
      let obj2;
      const items = [termsContainer.termsContainer, , ];
      let firstItem = null;
      const Fragment = react.Fragment;
      if (0 === index) {
        firstItem = termsContainer.firstItem;
      }
      items[1] = firstItem;
      let lastItem = null;
      if (index === rules.length - 1) {
        lastItem = termsContainer.lastItem;
      }
      items[2] = lastItem;
      const obj = { style: items, children: hasOwnProperty(closure_9, obj2) };
      obj2 = { rule, rowNumber: index + 1, rowCount: rules.length, rulesChannelId };
      const children = [hasOwnProperty(View, obj), ];
      let tmp2Result = null;
      if (index !== rules.length - 1) {
        tmp2Result = hasOwnProperty(TableRowDivider.TableRowDivider, {});
      }
      children[1] = tmp2Result;
      return metroRequire(Fragment, { children }, "term-" + rule + "-" + index);
    })
  };
  items[1] = closure_5(View, obj3);
  return closure_6(closure_7, obj);
});
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TermsFieldList.tsx");

export default tmp4;