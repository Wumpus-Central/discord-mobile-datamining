// === Module 11207: SuspiciousDownloadActionSheet ===

// Module 11207 (SuspiciousDownloadActionSheet)
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import openURLDefault from "openURL" /* 4559 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let BottomSheet, href;

let c3;
let closure_4;
let obj2;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let obj = { container: obj2, title: { textAlign: "center" }, body: { textAlign: "center" } };
obj2 = { padding: nativeDefault.space.PX_12 };
let closure_5 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((href) => {
  let intl3;
  let items;
  let items1;
  let items2;
  let obj9;
  let tmp5;
  let tmp6;
  let obj = href(576);
  const cResult = obj.c(25);
  href = href.href;
  const tmp4 = closure_5();
  if (cResult[0] !== href) {
    const fn = function l() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      openURLDefault(href, true);
    };
    cResult[0] = href;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[2] !== bottom) {
    const obj2 = { paddingBottom: bottom };
    cResult[2] = bottom;
    cResult[3] = obj2;
    tmp6 = obj2;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === tmp4.container) {
    let tmp7;
    let tmp9;
    let tmp12;
    let tmp14;
    let tmp17;
    let tmp19;
    if (cResult[5] === tmp6) {
      tmp7 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp11 = closure_3(href(6078).TrafficConeSpotIllustration, {});
      cResult[7] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[7];
    }
    const _Symbol2 = Symbol;
    const title = tmp4.title;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(href(1126).t.XtDo9Z);
      cResult[8] = stringResult;
      tmp12 = stringResult;
    } else {
      tmp12 = cResult[8];
    }
    if (cResult[9] !== tmp4.title) {
      const obj3 = { style: title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp12 };
      const tmp16 = closure_3(href(4886).Text, obj3);
      cResult[9] = tmp4.title;
      cResult[10] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[10];
    }
    const _Symbol3 = Symbol;
    const body = tmp4.body;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(href(1126).t.L9yFko);
      cResult[11] = stringResult1;
      tmp17 = stringResult1;
    } else {
      tmp17 = cResult[11];
    }
    if (cResult[12] !== tmp4.body) {
      const obj4 = { style: body, variant: "text-md/medium", children: tmp17 };
      const tmp21 = closure_3(href(4886).Text, obj4);
      cResult[12] = tmp4.body;
      cResult[13] = tmp21;
      tmp19 = tmp21;
    } else {
      tmp19 = cResult[13];
    }
    if (cResult[14] === tmp19) {
      let tmp22;
      let tmp25;
      let tmp28;
      let tmp30;
      if (cResult[15] === tmp14) {
        tmp22 = cResult[16];
      }
      const _Symbol4 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = {
          text: intl3.string(href(1126).t.j7Vi2i),
          onPress() {
                  const obj = ActionSheetActionCreatorsDefault;
                  return obj.hideActionSheet();
                }
        };
        const Button = tmp(5594).Button;
        intl3 = tmp(1126).intl;
        const tmp27 = closure_3(Button, obj5);
        cResult[17] = tmp27;
        tmp25 = tmp27;
      } else {
        tmp25 = cResult[17];
      }
      const _Symbol5 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(1126).intl;
        const stringResult2 = intl4.string(href(1126).t["/bHu89"]);
        cResult[18] = stringResult2;
        tmp28 = stringResult2;
      } else {
        tmp28 = cResult[18];
      }
      if (cResult[19] !== tmp5) {
        const obj6 = { spacing: 8, children: items };
        items = [tmp25, ];
        const Stack = tmp(5593).Stack;
        const obj7 = { text: tmp28, onPress: tmp5, variant: "secondary" };
        items[1] = closure_3(href(5594).Button, obj7);
        const tmp33 = closure_4(Stack, obj6);
        cResult[19] = tmp5;
        cResult[20] = tmp33;
        tmp30 = tmp33;
      } else {
        tmp30 = cResult[20];
      }
      if (cResult[21] === tmp22) {
        if (cResult[22] === tmp30) {
          let tmp34;
          if (cResult[23] === tmp7) {
            tmp34 = cResult[24];
          }
          return tmp34;
        }
      }
      const obj8 = { startExpanded: true, children: closure_4(href(5593).Stack, obj9) };
      BottomSheet = tmp(6645).BottomSheet;
      obj9 = { spacing: 16, justify: "center", align: "center", style: tmp7, children: items1 };
      items1 = [tmp22, tmp30];
      const tmp37 = closure_3(BottomSheet, obj8);
      cResult[21] = tmp22;
      cResult[22] = tmp30;
      cResult[23] = tmp7;
      cResult[24] = tmp37;
      tmp34 = tmp37;
    }
    const obj10 = { spacing: 8, justify: "center", align: "center", children: items2 };
    items2 = [tmp9, tmp14, tmp19];
    const tmp24 = closure_4(href(5593).Stack, obj10);
    cResult[14] = tmp19;
    cResult[15] = tmp14;
    cResult[16] = tmp24;
    tmp22 = tmp24;
  }
  const items3 = [tmp4.container, tmp6];
  cResult[4] = tmp4.container;
  cResult[5] = tmp6;
  cResult[6] = items3;
  tmp7 = items3;
}) : ((href) => {
  let Stack;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let items3;
  let obj2;
  href = href.href;
  const tmp = closure_5();
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = { startExpanded: true, children: closure_4(Stack, obj2) };
  BottomSheet = href(6645).BottomSheet;
  obj2 = { spacing: 16, justify: "center", align: "center", style: items, children: items2 };
  items = [tmp.container, { paddingBottom: bottom }];
  Stack = href(5593).Stack;
  const obj3 = { spacing: 8, justify: "center", align: "center", children: items1 };
  const Stack2 = href(5593).Stack;
  items1 = [closure_3(href(6078).TrafficConeSpotIllustration, {}), , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(href(1126).t.XtDo9Z) };
  const Text = href(4886).Text;
  intl = href(1126).intl;
  items1[1] = closure_3(Text, obj4);
  const obj5 = { style: tmp.body, variant: "text-md/medium", children: intl2.string(href(1126).t.L9yFko) };
  const Text2 = href(4886).Text;
  intl2 = href(1126).intl;
  items1[2] = closure_3(Text2, obj5);
  items2 = [closure_4(Stack2, obj3), ];
  const obj6 = { spacing: 8, children: items3 };
  const Stack3 = href(5593).Stack;
  const obj7 = {
    text: intl3.string(href(1126).t.j7Vi2i),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      return obj.hideActionSheet();
    }
  };
  const Button = href(5594).Button;
  intl3 = href(1126).intl;
  items3 = [closure_3(Button, obj7), ];
  const obj8 = {
    text: intl4.string(href(1126).t["/bHu89"]),
    onPress() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      openURLDefault(href, true);
    },
    variant: "secondary"
  };
  const Button2 = href(5594).Button;
  intl4 = href(1126).intl;
  items3[1] = closure_3(Button2, obj8);
  items2[1] = closure_4(Stack3, obj6);
  return closure_3(BottomSheet, obj);
});
const result = size.fileFinishedImporting("modules/suspicious_downloads/native/SuspiciousDownloadActionSheet.tsx");

export default tmp4;