// === Module 11207: SuspiciousDownloadActionSheet ===

// Module 11207 (SuspiciousDownloadActionSheet)
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import openURLDefault from "openURL" /* 4559 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import noop from "module_19" /* 19 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { padding: nativeDefault.space.PX_12 }, title: { textAlign: "center" }, body: { textAlign: "center" } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { padding: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/suspicious_downloads/native/SuspiciousDownloadActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((href) => {
  const cResult = href(576).c(25);
  href = href.href;
  const tmp4 = closure_5();
  if (cResult[0] !== href) {
    const fn = function l() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      openURLDefault(href, true);
    };
    cResult[0] = href;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const bottom = useSafeAreaInsetsDefault().bottom;
  if (cResult[2] !== bottom) {
    const obj2 = { paddingBottom: bottom };
    cResult[2] = bottom;
    cResult[3] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === tmp4.container) {
    if (cResult[5] === tmp6) {
      let tmp7 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp11 = closure_3(tmp(6078).TrafficConeSpotIllustration, {});
      cResult[7] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[7];
    }
    const _Symbol2 = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.XtDo9Z);
      cResult[8] = stringResult;
      let tmp12 = stringResult;
    } else {
      tmp12 = cResult[8];
    }
    if (cResult[9] !== tmp4.title) {
      const obj3 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: tmp12 };
      const tmp16 = closure_3(tmp(4886).Text, obj3);
      cResult[9] = tmp4.title;
      cResult[10] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[10];
    }
    const _Symbol3 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(tmp(1126).t.L9yFko);
      cResult[11] = stringResult1;
      let tmp17 = stringResult1;
    } else {
      tmp17 = cResult[11];
    }
    if (cResult[12] !== tmp4.body) {
      const obj4 = { style: tmp4.body, variant: "text-md/medium", children: tmp17 };
      const tmp21 = closure_3(tmp(4886).Text, obj4);
      cResult[12] = tmp4.body;
      cResult[13] = tmp21;
      let tmp19 = tmp21;
    } else {
      tmp19 = cResult[13];
    }
    if (cResult[14] === tmp19) {
      if (cResult[15] === tmp14) {
        let tmp22 = cResult[16];
      }
      const _Symbol4 = Symbol;
      if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { text: null, onPress: null };
        const intl3 = tmp(1126).intl;
        obj5.text = intl3.string(tmp(1126).t.j7Vi2i);
        obj5.onPress = function onPress() {
          return ActionSheetActionCreatorsDefault.hideActionSheet();
        };
        const tmp27 = closure_3(tmp(5594).Button, obj5);
        cResult[17] = tmp27;
        let tmp25 = tmp27;
      } else {
        tmp25 = cResult[17];
      }
      const _Symbol5 = Symbol;
      if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = tmp(1126).intl;
        const stringResult2 = intl4.string(tmp(1126).t["/bHu89"]);
        cResult[18] = stringResult2;
        let tmp28 = stringResult2;
      } else {
        tmp28 = cResult[18];
      }
      if (cResult[19] !== tmp5) {
        const obj6 = { spacing: 8, children: null };
        const items = [tmp25, ];
        const obj7 = { text: tmp28, onPress: tmp5, variant: "secondary" };
        items[1] = closure_3(tmp(5594).Button, obj7);
        obj6.children = items;
        const tmp33 = closure_4(tmp(5593).Stack, obj6);
        cResult[19] = tmp5;
        cResult[20] = tmp33;
        let tmp30 = tmp33;
      } else {
        tmp30 = cResult[20];
      }
      if (cResult[21] === tmp22) {
        if (cResult[22] === tmp30) {
          if (cResult[23] === tmp7) {
            let tmp34 = cResult[24];
          }
          return tmp34;
        }
      }
      const obj8 = { startExpanded: true, children: null };
      const obj9 = { spacing: 16, justify: "center", align: "center", style: tmp7, children: null };
      const items1 = [tmp22, tmp30];
      obj9.children = items1;
      obj8.children = closure_4(tmp(5593).Stack, obj9);
      const tmp37 = closure_3(tmp(6645).BottomSheet, obj8);
      cResult[21] = tmp22;
      cResult[22] = tmp30;
      cResult[23] = tmp7;
      cResult[24] = tmp37;
      tmp34 = tmp37;
    }
    const obj10 = { spacing: 8, justify: "center", align: "center", children: null };
    const items2 = [tmp9, tmp14, tmp19];
    obj10.children = items2;
    const tmp24 = closure_4(tmp(5593).Stack, obj10);
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
  const obj = href(576);
}) : ((href) => {
  href = href.href;
  const tmp = closure_5();
  const obj = { startExpanded: true, children: null };
  const obj2 = { spacing: 16, justify: "center", align: "center", style: null, children: null };
  const items = [tmp.container, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
  obj2.style = items;
  const obj3 = { spacing: 8, justify: "center", align: "center", children: null };
  const items1 = [closure_3(href(6078).TrafficConeSpotIllustration, {}), , ];
  const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = href(1126).intl;
  obj4.children = intl.string(href(1126).t.XtDo9Z);
  items1[1] = closure_3(href(4886).Text, obj4);
  const obj5 = { style: tmp.body, variant: "text-md/medium", children: null };
  const intl2 = href(1126).intl;
  obj5.children = intl2.string(href(1126).t.L9yFko);
  items1[2] = closure_3(href(4886).Text, obj5);
  obj3.children = items1;
  const items2 = [closure_4(href(5593).Stack, obj3), ];
  const obj6 = { spacing: 8, children: null };
  const obj7 = { text: null, onPress: null };
  const intl3 = href(1126).intl;
  obj7.text = intl3.string(href(1126).t.j7Vi2i);
  obj7.onPress = function onPress() {
    return ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  const items3 = [closure_3(href(5594).Button, obj7), ];
  const obj8 = { text: null, onPress: null, variant: "secondary" };
  const intl4 = href(1126).intl;
  obj8.text = intl4.string(href(1126).t["/bHu89"]);
  obj8.onPress = function onPress() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    openURLDefault(href, true);
  };
  items3[1] = closure_3(href(5594).Button, obj8);
  obj6.children = items3;
  items2[1] = closure_4(href(5593).Stack, obj6);
  obj2.children = items2;
  obj.children = closure_4(href(5593).Stack, obj2);
  return closure_3(href(6645).BottomSheet, obj);
});