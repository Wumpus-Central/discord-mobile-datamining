// === Module 16656: ConjureConnectToolSheet ===

// Module 16656 (ConjureConnectToolSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl10 from "intl" /* 1126 */;
import _modDef3753 from "module_3753" /* 3753 */;
import ToastUtils from "ToastUtils" /* 4573 */;
import AlertModal from "AlertModal" /* 5720 */;
import ClipboardUtils from "ClipboardUtils" /* 6695 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 12923 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let projectId;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
const formatMcpConnectionExpiry = ConjureConnectionStore.formatMcpConnectionExpiry;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, section: obj3, actions: obj4, action: { flex: 1 }, failedRow: obj5, failedText: { flexShrink: 1 } };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12 };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let Button;
  let Button2;
  let EQ8k1i;
  let Text5;
  let connection;
  let failed;
  let format;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl8;
  let intl9;
  let items;
  let items1;
  let items2;
  let items3;
  let loading;
  let mint;
  let obj14;
  let obj17;
  let obj19;
  let obj21;
  let obj6;
  let obj9;
  let tmp12;
  let tmp17;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp = connection;
  let obj = connection(576);
  const cResult = obj.c(24);
  projectId = projectId.projectId;
  const tmp4 = closure_8();
  let obj2 = connection(16657);
  const mcpConnectionPanel = obj2.useMcpConnectionPanel(projectId);
  connection = mcpConnectionPanel.connection;
  ({ loading, failed, mint } = mcpConnectionPanel);
  if (cResult[0] !== connection) {
    const fn = function o() {
      if (null != connection) {
        const obj = ClipboardUtils;
        obj.copy(tmp.url);
        const obj2 = ToastUtils;
        obj2.presentLinkCopied();
      }
    };
    cResult[0] = connection;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== mint) {
    const fn2 = function b() {
      let intl;
      let intl2;
      let intl3;
      const tmp = AlertModal;
      const showConfirmModal = tmp.showConfirmModal;
      const obj = {
        key: "VibegrationsConnectToolRegenerate",
        title: intl.string(_modDef3753.avUWNd),
        content: intl2.string(_modDef3753.YSh8bL),
        confirmText: intl3.string(_modDef3753.Ise9RO),
        onConfirm() {
          mint(true);
        }
      };
      intl = intl10.intl;
      intl2 = intl10.intl;
      intl3 = intl10.intl;
      showConfirmModal(obj);
    };
    cResult[2] = mint;
    cResult[3] = fn2;
    tmp7 = fn2;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { title: intl.string(mint(3753)["7937yd"]) };
    const BottomSheetTitleHeader = tmp(6651).BottomSheetTitleHeader;
    intl = tmp(1126).intl;
    const tmp11 = closure_6(BottomSheetTitleHeader, obj3);
    cResult[4] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(mint(3753).WltAg2) };
    const Text = tmp(4892).Text;
    intl2 = tmp(1126).intl;
    const tmp15 = closure_6(Text, obj4);
    cResult[5] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] === connection) {
    if (cResult[7] === tmp6) {
      if (cResult[8] === tmp7) {
        if (cResult[9] === loading) {
          if (cResult[10] === tmp4.action) {
            if (cResult[11] === tmp4.actions) {
              let tmp16;
              if (cResult[12] === tmp4.section) {
                tmp16 = cResult[13];
              }
              if (cResult[14] === failed) {
                if (cResult[15] === loading) {
                  if (cResult[16] === mint) {
                    if (cResult[17] === tmp4.failedRow) {
                      let tmp25;
                      if (cResult[18] === tmp4.failedText) {
                        tmp25 = cResult[19];
                      }
                      if (cResult[20] === tmp4.content) {
                        if (cResult[21] === tmp16) {
                          let tmp31;
                          if (cResult[22] === tmp25) {
                            tmp31 = cResult[23];
                          }
                          return tmp31;
                        }
                      }
                      const obj5 = { header: tmp8, children: closure_7(View, obj6) };
                      obj6 = { style: tmp4.content, children: items };
                      items = [tmp12, tmp16, tmp25];
                      const ActionSheet = tmp(6708).ActionSheet;
                      const tmp35 = closure_6(ActionSheet, obj5);
                      cResult[20] = tmp4.content;
                      cResult[21] = tmp16;
                      cResult[22] = tmp25;
                      cResult[23] = tmp35;
                      tmp31 = tmp35;
                    }
                  }
                }
              }
              let tmp26 = null;
              if (failed) {
                const obj7 = { style: tmp4.failedRow, accessibilityRole: "alert", children: items1 };
                const obj8 = { style: tmp4.failedText, children: closure_6(Text5, obj9) };
                obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl8.string(mint(3753).IAF2eN) };
                Text5 = tmp(4892).Text;
                intl8 = tmp(1126).intl;
                items1 = [closure_6(View, obj8), ];
                const obj10 = {
                  variant: "secondary",
                  size: "sm",
                  text: intl9.string(mint(3753)["eHMX/v"]),
                  loading,
                  onPress() {
                                  mint(false);
                                }
                };
                const Button3 = tmp(5601).Button;
                intl9 = tmp(1126).intl;
                items1[1] = closure_6(Button3, obj10);
                tmp26 = closure_7(View, obj7);
              }
              cResult[14] = failed;
              cResult[15] = loading;
              cResult[16] = mint;
              cResult[17] = tmp4.failedRow;
              cResult[18] = tmp4.failedText;
              cResult[19] = tmp26;
              tmp25 = tmp26;
            }
          }
        }
      }
    }
  }
  if (null != connection) {
    const obj11 = { style: tmp4.section, children: items2 };
    const obj12 = { variant: "text-xs/semibold", color: "text-muted", children: intl4.string(mint(3753).UCwV3L) };
    const Text3 = tmp(4892).Text;
    intl4 = tmp(1126).intl;
    items2 = [closure_6(Text3, obj12), , , ];
    const obj13 = { variant: "primary", children: closure_6(tmp(4892).Text, obj14) };
    const Card = tmp(6002).Card;
    obj14 = { variant: "text-sm/normal", color: "text-default", selectable: true, children: connection.url };
    items2[1] = closure_6(Card, obj13);
    const obj15 = { style: tmp4.actions, children: items3 };
    const obj16 = { style: tmp4.action, children: closure_6(Button, obj17) };
    obj17 = { variant: "primary", size: "md", text: intl5.string(tmp(1126).t.OpuAlK), onPress: tmp6 };
    Button = tmp(5601).Button;
    intl5 = tmp(1126).intl;
    items3 = [closure_6(View, obj16), ];
    const obj18 = { style: tmp4.action, children: closure_6(Button2, obj19) };
    obj19 = { variant: "secondary", size: "md", text: intl6.string(mint(3753).FBKOBq), loading, onPress: tmp7 };
    Button2 = tmp(5601).Button;
    intl6 = tmp(1126).intl;
    items3[1] = closure_6(View, obj18);
    items2[2] = closure_7(View, obj15);
    const obj20 = { variant: "text-xs/normal", color: "text-muted", children: format(EQ8k1i, obj21) };
    const Text4 = tmp(4892).Text;
    const intl7 = tmp(1126).intl;
    format = intl7.format;
    obj21 = { time: formatMcpConnectionExpiry(connection) };
    EQ8k1i = mint(3753).EQ8k1i;
    items2[3] = closure_6(Text4, obj20);
    tmp17 = closure_7(View, obj11);
  } else {
    tmp17 = null;
    if (loading) {
      const obj22 = { variant: "text-sm/normal", color: "text-muted", children: intl3.string(mint(3753).Q6xQTM) };
      const Text2 = tmp(4892).Text;
      intl3 = tmp(1126).intl;
      tmp17 = closure_6(Text2, obj22);
    }
  }
  cResult[6] = connection;
  cResult[7] = tmp6;
  cResult[8] = tmp7;
  cResult[9] = loading;
  cResult[10] = tmp4.action;
  cResult[11] = tmp4.actions;
  cResult[12] = tmp4.section;
  cResult[13] = tmp17;
  tmp16 = tmp17;
}) : ((projectId) => {
  let BottomSheetTitleHeader;
  let Button;
  let Button2;
  let EQ8k1i;
  let Text5;
  let format;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl8;
  let intl9;
  let items2;
  let items3;
  let items4;
  let items5;
  let loading;
  let mint;
  let obj12;
  let obj14;
  let obj16;
  let obj20;
  let obj3;
  let obj4;
  let obj9;
  let tmp7Result;
  let connection;
  mint = undefined;
  projectId = projectId.projectId;
  let tmp = closure_8();
  let obj = connection(16657);
  const mcpConnectionPanel = obj.useMcpConnectionPanel(projectId);
  connection = mcpConnectionPanel.connection;
  ({ loading, mint } = mcpConnectionPanel);
  const items = [connection];
  const failed = mcpConnectionPanel.failed;
  const items1 = [mint];
  const callback = react.useCallback(() => {
    if (null != connection) {
      const obj = ClipboardUtils;
      obj.copy(tmp.url);
      const obj2 = ToastUtils;
      obj2.presentLinkCopied();
    }
  }, items);
  const callback1 = react.useCallback(() => {
    let intl;
    let intl2;
    let intl3;
    const tmp = AlertModal;
    const showConfirmModal = tmp.showConfirmModal;
    const obj = {
      key: "VibegrationsConnectToolRegenerate",
      title: intl.string(_modDef3753.avUWNd),
      content: intl2.string(_modDef3753.YSh8bL),
      confirmText: intl3.string(_modDef3753.Ise9RO),
      onConfirm() {
        mint(true);
      }
    };
    intl = intl10.intl;
    intl2 = intl10.intl;
    intl3 = intl10.intl;
    showConfirmModal(obj);
  }, items1);
  let obj2 = { header: closure_6(BottomSheetTitleHeader, obj3), children: closure_7(View, obj4) };
  const ActionSheet = connection(6708).ActionSheet;
  obj3 = { title: intl.string(mint(3753)["7937yd"]) };
  BottomSheetTitleHeader = connection(6651).BottomSheetTitleHeader;
  intl = connection(1126).intl;
  obj4 = { style: tmp.content, children: items2 };
  const obj5 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(mint(3753).WltAg2) };
  const Text = connection(4892).Text;
  intl2 = connection(1126).intl;
  items2 = [closure_6(Text, obj5), , ];
  if (null != connection) {
    const obj6 = { style: tmp.section, children: items3 };
    const obj7 = { variant: "text-xs/semibold", color: "text-muted", children: intl4.string(mint(3753).UCwV3L) };
    const Text3 = tmp2(4892).Text;
    intl4 = tmp2(1126).intl;
    items3 = [closure_6(Text3, obj7), , , ];
    const obj8 = { variant: "primary", children: closure_6(connection(4892).Text, obj9) };
    const Card = tmp2(6002).Card;
    obj9 = { variant: "text-sm/normal", color: "text-default", selectable: true, children: connection.url };
    items3[1] = closure_6(Card, obj8);
    const obj10 = { style: tmp.actions, children: items4 };
    const obj11 = { style: tmp.action, children: closure_6(Button, obj12) };
    obj12 = { variant: "primary", size: "md", text: intl5.string(connection(1126).t.OpuAlK), onPress: callback };
    Button = tmp2(5601).Button;
    intl5 = tmp2(1126).intl;
    items4 = [closure_6(View, obj11), ];
    const obj13 = { style: tmp.action, children: closure_6(Button2, obj14) };
    obj14 = { variant: "secondary", size: "md", text: intl6.string(mint(3753).FBKOBq), loading, onPress: callback1 };
    Button2 = tmp2(5601).Button;
    intl6 = tmp2(1126).intl;
    items4[1] = closure_6(View, obj13);
    items3[2] = closure_7(View, obj10);
    const obj15 = { variant: "text-xs/normal", color: "text-muted", children: format(EQ8k1i, obj16) };
    const Text4 = tmp2(4892).Text;
    const intl7 = tmp2(1126).intl;
    format = intl7.format;
    obj16 = { time: formatMcpConnectionExpiry(connection) };
    EQ8k1i = tmp8(3753).EQ8k1i;
    items3[3] = closure_6(Text4, obj15);
    tmp7Result = closure_7(View, obj6);
  } else {
    tmp7Result = null;
    if (loading) {
      const obj17 = { variant: "text-sm/normal", color: "text-muted", children: intl3.string(mint(3753).Q6xQTM) };
      const Text2 = tmp2(4892).Text;
      intl3 = tmp2(1126).intl;
      tmp7Result = closure_6(Text2, obj17);
    }
  }
  items2[1] = tmp7Result;
  let tmp9Result2 = null;
  if (failed) {
    const obj18 = { style: tmp.failedRow, accessibilityRole: "alert", children: items5 };
    const obj19 = { style: tmp.failedText, children: closure_6(Text5, obj20) };
    obj20 = { variant: "text-xs/normal", color: "text-feedback-critical", children: intl8.string(mint(3753).IAF2eN) };
    Text5 = tmp2(4892).Text;
    intl8 = tmp2(1126).intl;
    items5 = [closure_6(View, obj19), ];
    const obj21 = {
      variant: "secondary",
      size: "sm",
      text: intl9.string(mint(3753)["eHMX/v"]),
      loading,
      onPress() {
          mint(false);
        }
    };
    const Button3 = tmp2(5601).Button;
    intl9 = tmp2(1126).intl;
    items5[1] = closure_6(Button3, obj21);
    tmp9Result2 = closure_7(View, obj18);
  }
  items2[2] = tmp9Result2;
  return closure_6(ActionSheet, obj2);
});
const result = size.fileFinishedImporting("modules/conjure/external_connections/native/ConjureConnectToolSheet.tsx");

export default tmp4;
export const CONJURE_CONNECT_TOOL_SHEET_KEY = "ConjureConnectToolSheet";