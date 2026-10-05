// === Module 16619: ConjureConnectToolSheet ===

// Module 16619 (ConjureConnectToolSheet)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import AlertModal from "AlertModal" /* 5713 */;
import ClipboardUtils from "ClipboardUtils" /* 6688 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const formatMcpConnectionExpiry = fn(12904).formatMcpConnectionExpiry;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { content: { gap: nativeDefault.space.PX_16 }, section: null, actions: null, action: null, failedRow: null, failedText: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.section = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.actions = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.action = { flex: 1 };
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.failedRow = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12 };
obj2.failedText = { flexShrink: 1 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj6 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/external_connections/native/ConjureConnectToolSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  const cResult = connection(576).c(24);
  const tmp4 = closure_8();
  let obj = connection(576);
  const mcpConnectionPanel = connection(16620).useMcpConnectionPanel(projectId.projectId);
  connection = mcpConnectionPanel.connection;
  ({ loading, failed, mint } = mcpConnectionPanel);
  if (cResult[0] !== connection) {
    const fn = function o() {
      if (null != connection) {
        ClipboardUtils.copy(tmp.url);
        ToastUtils.presentLinkCopied();
      }
    };
    cResult[0] = connection;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== mint) {
    const fn2 = function b() {
      const obj2 = { key: "VibegrationsConnectToolRegenerate", title: null, content: null, confirmText: null, onConfirm: null };
      const intl = util.intl;
      obj2.title = intl.string(_modDef3723.avUWNd);
      const intl2 = util.intl;
      obj2.content = intl2.string(_modDef3723.YSh8bL);
      const intl3 = util.intl;
      obj2.confirmText = intl3.string(_modDef3723.Ise9RO);
      obj2.onConfirm = function onConfirm() {
        mint(true);
      };
      AlertModal.showConfirmModal(obj2);
    };
    cResult[2] = mint;
    cResult[3] = fn2;
    section = fn2;
  } else {
    section = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { title: null };
    let intl = tmp(1126).intl;
    obj3.title = intl.string(mint(3723)["7937yd"]);
    const tmp10 = closure_6(tmp(6644).BottomSheetTitleHeader, obj3);
    cResult[4] = tmp10;
    let tmp7 = tmp10;
  } else {
    tmp7 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
    let intl2 = tmp(1126).intl;
    obj4.children = intl2.string(mint(3723).WltAg2);
    const tmp14 = closure_6(tmp(4886).Text, obj4);
    cResult[5] = tmp14;
    let tmp11 = tmp14;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] === connection) {
    if (cResult[7] === tmp6) {
      if (cResult[8] === section) {
        if (cResult[9] === loading) {
          if (cResult[10] === tmp4.action) {
            if (cResult[11] === tmp4.actions) {
              if (cResult[12] === tmp4.section) {
                if (cResult[14] === failed) {
                  if (cResult[15] === loading) {
                    if (cResult[16] === mint) {
                      if (cResult[17] === tmp4.failedRow) {
                        if (cResult[18] === tmp4.failedText) {
                          let tmp24 = cResult[19];
                        }
                        if (cResult[20] === tmp4.content) {
                          if (cResult[21] === tmp15) {
                            if (cResult[22] === tmp24) {
                              let tmp30 = cResult[23];
                            }
                            return tmp30;
                          }
                        }
                        const obj5 = { header: tmp7, children: null };
                        const obj6 = { style: tmp4.content, children: null };
                        const items = [tmp11, tmp15, tmp24];
                        obj6.children = items;
                        obj5.children = closure_7(View, obj6);
                        const tmp34 = closure_6(tmp(6701).ActionSheet, obj5);
                        cResult[20] = tmp4.content;
                        cResult[21] = tmp15;
                        cResult[22] = tmp24;
                        cResult[23] = tmp34;
                        tmp30 = tmp34;
                      }
                    }
                  }
                }
                let tmp25 = null;
                if (failed) {
                  const obj7 = { style: tmp4.failedRow, accessibilityRole: "alert", children: null };
                  const obj8 = { style: tmp4.failedText, children: null };
                  const obj9 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
                  const intl8 = tmp(1126).intl;
                  obj9.children = intl8.string(mint(3723).IAF2eN);
                  obj8.children = closure_6(tmp(4886).Text, obj9);
                  const items1 = [closure_6(View, obj8), ];
                  const obj10 = { variant: "secondary", size: "sm", text: null, loading: null, onPress: null };
                  const intl9 = tmp(1126).intl;
                  obj10.text = intl9.string(mint(3723)["eHMX/v"]);
                  obj10.loading = loading;
                  obj10.onPress = function onPress() {
                    mint(false);
                  };
                  items1[1] = closure_6(tmp(5594).Button, obj10);
                  obj7.children = items1;
                  tmp25 = closure_7(View, obj7);
                }
                cResult[14] = failed;
                cResult[15] = loading;
                cResult[16] = mint;
                cResult[17] = tmp4.failedRow;
                cResult[18] = tmp4.failedText;
                cResult[19] = tmp25;
                tmp24 = tmp25;
              }
            }
          }
        }
      }
    }
  }
  if (null != connection) {
    const obj11 = { style: tmp4.section, children: null };
    const obj12 = { variant: "text-xs/semibold", color: "text-muted", children: null };
    const intl4 = tmp(1126).intl;
    obj12.children = intl4.string(mint(3723).UCwV3L);
    const items2 = [closure_6(tmp(4886).Text, obj12), , , ];
    const obj13 = { variant: "primary", children: null };
    const obj14 = { variant: "text-sm/normal", color: "text-default", selectable: true, children: connection.url };
    obj13.children = closure_6(tmp(4886).Text, obj14);
    items2[1] = closure_6(tmp(5995).Card, obj13);
    const obj15 = { style: tmp4.actions, children: null };
    const obj16 = { style: tmp4.action, children: null };
    const obj17 = { variant: "primary", size: "md", text: null, onPress: null };
    const intl5 = tmp(1126).intl;
    obj17.text = intl5.string(tmp(1126).t.OpuAlK);
    obj17.onPress = tmp6;
    obj16.children = closure_6(tmp(5594).Button, obj17);
    const items3 = [closure_6(View, obj16), ];
    const obj18 = { style: tmp4.action, children: null };
    const obj19 = { variant: "secondary", size: "md", text: null, loading: null, onPress: null };
    const intl6 = tmp(1126).intl;
    obj19.text = intl6.string(mint(3723).FBKOBq);
    obj19.loading = loading;
    obj19.onPress = section;
    obj18.children = closure_6(tmp(5594).Button, obj19);
    items3[1] = closure_6(View, obj18);
    obj15.children = items3;
    items2[2] = closure_7(View, obj15);
    const obj20 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl7 = tmp(1126).intl;
    const obj21 = { time: formatMcpConnectionExpiry(connection) };
    obj20.children = intl7.format(mint(3723).EQ8k1i, obj21);
    items2[3] = closure_6(tmp(4886).Text, obj20);
    obj11.children = items2;
    let tmp16 = closure_7(View, obj11);
  } else {
    tmp16 = null;
    if (loading) {
      const obj22 = { variant: "text-sm/normal", color: "text-muted", children: null };
      let intl3 = tmp(1126).intl;
      obj22.children = intl3.string(mint(3723).Q6xQTM);
      tmp16 = closure_6(tmp(4886).Text, obj22);
    }
  }
  cResult[6] = connection;
  cResult[7] = tmp6;
  cResult[8] = section;
  cResult[9] = loading;
  cResult[10] = tmp4.action;
  ({ actions: tmp3[11], section } = tmp4);
  cResult[12] = section;
  cResult[13] = tmp16;
  let obj2 = connection(16620);
}) : ((projectId) => {
  let connection;
  mint = undefined;
  const tmp = closure_8();
  const mcpConnectionPanel = connection(16620).useMcpConnectionPanel(projectId.projectId);
  connection = mcpConnectionPanel.connection;
  ({ loading, mint } = mcpConnectionPanel);
  const items = [connection];
  const items1 = [mint];
  const callback = noop.useCallback(() => {
    if (null != connection) {
      ClipboardUtils.copy(tmp.url);
      ToastUtils.presentLinkCopied();
    }
  }, items);
  const callback1 = noop.useCallback(() => {
    const obj2 = { key: "VibegrationsConnectToolRegenerate", title: null, content: null, confirmText: null, onConfirm: null };
    const intl = util.intl;
    obj2.title = intl.string(_modDef3723.avUWNd);
    const intl2 = util.intl;
    obj2.content = intl2.string(_modDef3723.YSh8bL);
    const intl3 = util.intl;
    obj2.confirmText = intl3.string(_modDef3723.Ise9RO);
    obj2.onConfirm = function onConfirm() {
      mint(true);
    };
    AlertModal.showConfirmModal(obj2);
  }, items1);
  let obj2 = { header: null, children: null };
  const obj3 = { title: null };
  let intl = connection(1126).intl;
  obj3.title = intl.string(mint(3723)["7937yd"]);
  obj2.header = closure_6(connection(6644).BottomSheetTitleHeader, obj3);
  const obj4 = { style: tmp.content, children: null };
  const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
  let intl2 = connection(1126).intl;
  obj5.children = intl2.string(mint(3723).WltAg2);
  const items2 = [closure_6(connection(4886).Text, obj5), , ];
  if (null != connection) {
    const obj6 = { style: tmp.section, children: null };
    const obj7 = { variant: "text-xs/semibold", color: "text-muted", children: null };
    const intl4 = tmp2(1126).intl;
    obj7.children = intl4.string(tmp8(3723).UCwV3L);
    const items3 = [closure_6(tmp2(4886).Text, obj7), , , ];
    const obj8 = { variant: "primary", children: null };
    const obj9 = { variant: "text-sm/normal", color: "text-default", selectable: true, children: connection.url };
    obj8.children = closure_6(tmp2(4886).Text, obj9);
    items3[1] = closure_6(tmp2(5995).Card, obj8);
    const obj10 = { style: tmp.actions, children: null };
    const obj11 = { style: tmp.action, children: null };
    const obj12 = { variant: "primary", size: "md", text: null, onPress: null };
    const intl5 = tmp2(1126).intl;
    obj12.text = intl5.string(tmp2(1126).t.OpuAlK);
    obj12.onPress = callback;
    obj11.children = closure_6(tmp2(5594).Button, obj12);
    const items4 = [closure_6(View, obj11), ];
    const obj13 = { style: tmp.action, children: null };
    const obj14 = { variant: "secondary", size: "md", text: null, loading: null, onPress: null };
    const intl6 = tmp2(1126).intl;
    obj14.text = intl6.string(tmp8(3723).FBKOBq);
    obj14.loading = loading;
    obj14.onPress = callback1;
    obj13.children = closure_6(tmp2(5594).Button, obj14);
    items4[1] = closure_6(View, obj13);
    obj10.children = items4;
    items3[2] = closure_7(View, obj10);
    const obj15 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl7 = tmp2(1126).intl;
    const obj16 = { time: formatMcpConnectionExpiry(connection) };
    obj15.children = intl7.format(tmp8(3723).EQ8k1i, obj16);
    items3[3] = closure_6(tmp2(4886).Text, obj15);
    obj6.children = items3;
    let tmp7Result = closure_7(View, obj6);
  } else {
    tmp7Result = null;
    if (loading) {
      const obj17 = { variant: "text-sm/normal", color: "text-muted", children: null };
      let intl3 = tmp2(1126).intl;
      obj17.children = intl3.string(tmp8(3723).Q6xQTM);
      tmp7Result = closure_6(tmp2(4886).Text, obj17);
    }
  }
  items2[1] = tmp7Result;
  let tmp9Result2 = null;
  if (mcpConnectionPanel.failed) {
    const obj18 = { style: tmp.failedRow, accessibilityRole: "alert", children: null };
    const obj19 = { style: tmp.failedText, children: null };
    const obj20 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl8 = tmp2(1126).intl;
    obj20.children = intl8.string(tmp8(3723).IAF2eN);
    obj19.children = closure_6(tmp2(4886).Text, obj20);
    const items5 = [closure_6(View, obj19), ];
    const obj21 = { variant: "secondary", size: "sm", text: null, loading: null, onPress: null };
    const intl9 = tmp2(1126).intl;
    obj21.text = intl9.string(tmp8(3723)["eHMX/v"]);
    obj21.loading = loading;
    obj21.onPress = function onPress() {
      mint(false);
    };
    items5[1] = closure_6(tmp2(5594).Button, obj21);
    obj18.children = items5;
    tmp9Result2 = closure_7(View, obj18);
  }
  items2[2] = tmp9Result2;
  obj4.children = items2;
  obj2.children = closure_7(View, obj4);
  return closure_6(connection(6701).ActionSheet, obj2);
});
export const CONJURE_CONNECT_TOOL_SHEET_KEY = "ConjureConnectToolSheet";