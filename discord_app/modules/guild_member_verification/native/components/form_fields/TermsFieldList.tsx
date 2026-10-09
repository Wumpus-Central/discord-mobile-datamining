// === Module 6180: TermsFieldList ===

// Module 6180 (TermsFieldList)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import MarkupUtilsDefault from "MarkupUtils" /* 5078 */;
import Text_Text from "Text/Text" /* 5087 */;
import TableRowDivider from "TableRowDivider" /* 6181 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { termsContainer: { padding: 16, flexDirection: "column", justifyContent: "space-between", backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT }, firstItem: null, lastItem: null, termsRow: null, termsRowContent: null, termsRowNumber: null, title: null };
let obj3 = { padding: 16, flexDirection: "column", justifyContent: "space-between", backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT };
obj2.firstItem = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
let obj4 = { borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm };
obj2.lastItem = { borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm, marginBottom: 12 };
obj2.termsRow = { flexDirection: "row" };
obj2.termsRowContent = { flex: 1, lineHeight: 20 };
obj2.termsRowNumber = { paddingRight: 8, width: 20, height: 20 };
obj2.title = { marginBottom: 16 };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function TermsFieldListItem(arg0) {
  const cResult = c.c(17);
  ({ rowNumber, rowCount, rule, rulesChannelId } = arg0);
  const tmp4 = closure_8();
  if (cResult[0] === rowCount) {
    if (cResult[1] === rowNumber) {
      let tmp7 = cResult[2];
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + rowNumber + ".";
    if (cResult[3] === tmp4.termsRowNumber) {
      if (cResult[4] === tmp7) {
        if (cResult[5] === combined) {
          let tmp11 = cResult[6];
        }
        if (cResult[7] === rule) {
          if (cResult[8] === rulesChannelId) {
            let tmp15 = cResult[9];
          }
          if (cResult[10] === tmp4.termsRowContent) {
            if (cResult[11] === tmp15) {
              let tmp18 = cResult[12];
            }
            if (cResult[13] === tmp4.termsRow) {
              if (cResult[14] === tmp11) {
                if (cResult[15] === tmp18) {
                  let tmp21 = cResult[16];
                }
                return tmp21;
              }
            }
            const obj2 = { style: tmp5, children: null };
            const items = [tmp11, tmp18];
            obj2.children = items;
            const tmp24 = timestampProducer(View, obj2);
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
        const result = MarkupUtilsDefault.parseGuildVerificationFormRule(rule, true, obj5);
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
  const intl = util.intl;
  const formatToPlainStringResult = intl.formatToPlainString(util.t.XpgzeO, { number: rowNumber, total: rowCount });
  cResult[0] = rowCount;
  cResult[1] = rowNumber;
  cResult[2] = formatToPlainStringResult;
  tmp7 = formatToPlainStringResult;
}) : (function TermsFieldListItem(rowNumber) {
  rowNumber = rowNumber.rowNumber;
  ({ rowCount, rule, rulesChannelId } = rowNumber);
  const tmp = closure_8();
  const obj = { style: tmp.termsRow, children: null };
  const obj2 = { style: tmp.termsRowNumber, variant: "text-sm/medium", color: "text-muted", accessibilityLabel: null, children: null };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.formatToPlainString(util.t.XpgzeO, { number: rowNumber, total: rowCount });
  obj2.children = "" + rowNumber + ".";
  const items = [hasOwnProperty(Text_Text.Text, obj2), ];
  const obj3 = { style: tmp.termsRowContent, variant: "text-md/medium", children: MarkupUtilsDefault.parseGuildVerificationFormRule(rule, true, { channelId: rulesChannelId }) };
  items[1] = hasOwnProperty(Text_Text.Text, obj3);
  obj.children = items;
  return timestampProducer(View, obj);
});
ReactCompilerGating = fn(558);
let obj5 = { borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm, marginBottom: 12 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/TermsFieldList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function TermsFieldList(rules) {
  const cResult = rules(termsContainer[6]).c(20);
  rules = rules.rules;
  lastItem = rules.rulesChannelId;
  termsContainer = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[7]).intl;
    const stringResult = intl.string(tmp(tmp2[7]).t.prJqwT);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== termsContainer.title) {
    const obj2 = { style: termsContainer.title, accessibilityRole: "header", variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: first };
    const tmp8 = closure_5(tmp(tmp2[8]).Text, obj2);
    cResult[1] = termsContainer.title;
    cResult[2] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === rules) {
    if (cResult[4] === lastItem) {
      if (cResult[5] === termsContainer.firstItem) {
        if (cResult[6] === termsContainer.lastItem) {
          if (cResult[7] === termsContainer.termsContainer) {
            if (cResult[15] !== cResult[8]) {
              const obj3 = { accessibilityRole: "list", children: tmp9 };
              const tmp16 = closure_5(View, obj3);
              cResult[15] = tmp9;
              cResult[16] = tmp16;
              let tmp13 = tmp16;
            } else {
              tmp13 = cResult[16];
            }
            if (cResult[17] === tmp6) {
              if (cResult[18] === tmp13) {
                let tmp17 = cResult[19];
              }
              return tmp17;
            }
            const obj4 = { children: null };
            let items = [tmp6, tmp13];
            obj4.children = items;
            const tmp20 = closure_6(closure_7, obj4);
            cResult[17] = tmp6;
            cResult[18] = tmp13;
            cResult[19] = tmp20;
            tmp17 = tmp20;
          }
        }
      }
    }
  }
  if (cResult[9] === rules.length) {
    if (cResult[10] === lastItem) {
      if (cResult[11] === termsContainer.firstItem) {
        if (cResult[12] === termsContainer.lastItem) {
          if (cResult[13] === termsContainer.termsContainer) {
            let tmp10 = cResult[14];
          }
          const mapped = rules.map(tmp10);
          cResult[3] = rules;
          cResult[4] = lastItem;
          ({ firstItem: tmp3[5], lastItem } = termsContainer);
          cResult[6] = lastItem;
          termsContainer = termsContainer.termsContainer;
          cResult[7] = termsContainer;
          cResult[8] = mapped;
        }
      }
    }
  }
  const fn = function f(rule, arg1) {
    const items = [termsContainer.termsContainer, , ];
    let firstItem = null;
    if (0 === arg1) {
      firstItem = termsContainer.firstItem;
    }
    items[1] = firstItem;
    lastItem = null;
    if (arg1 === rules.length - 1) {
      lastItem = termsContainer.lastItem;
    }
    const obj = { style: items, children: hasOwnProperty(closure_9, { rule, rowNumber: arg1 + 1, rowCount: rules.length, rulesChannelId: lastItem }) };
    items[2] = lastItem;
    const children = [hasOwnProperty(View, obj), ];
    let tmp2Result = null;
    if (arg1 !== rules.length - 1) {
      tmp2Result = hasOwnProperty(TableRowDivider.TableRowDivider, {});
    }
    children[1] = tmp2Result;
    return timestampProducer(noop.Fragment, { children }, "term-" + rule + "-" + arg1);
  };
  cResult[9] = rules.length;
  cResult[10] = lastItem;
  cResult[11] = termsContainer.firstItem;
  cResult[12] = termsContainer.lastItem;
  cResult[13] = termsContainer.termsContainer;
  cResult[14] = fn;
  tmp10 = fn;
  let obj = rules(termsContainer[6]);
}) : (function TermsFieldList(rules) {
  rules = rules.rules;
  const rulesChannelId = rules.rulesChannelId;
  const tmp = closure_8();
  dependencyMap = tmp;
  let obj = { children: null };
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = rules(1126).intl;
  obj2.children = intl.string(rules(1126).t.prJqwT);
  let items = [
    closure_5(rules(5087).Text, obj2),
    closure_5(View, {
      accessibilityRole: "list",
      children: rules.map((rule, index) => {
        const items = [termsContainer.termsContainer, , ];
        let firstItem = null;
        if (0 === index) {
          firstItem = termsContainer.firstItem;
        }
        items[1] = firstItem;
        let lastItem = null;
        if (index === rules.length - 1) {
          lastItem = termsContainer.lastItem;
        }
        const obj = { style: items, children: hasOwnProperty(closure_9, { rule, rowNumber: index + 1, rowCount: rules.length, rulesChannelId }) };
        items[2] = lastItem;
        const children = [hasOwnProperty(View, obj), ];
        let tmp2Result = null;
        if (index !== rules.length - 1) {
          tmp2Result = hasOwnProperty(TableRowDivider.TableRowDivider, {});
        }
        children[1] = tmp2Result;
        return timestampProducer(noop.Fragment, { children }, "term-" + rule + "-" + index);
      })
    })
  ];
  obj.children = items;
  return closure_6(closure_7, obj);
});