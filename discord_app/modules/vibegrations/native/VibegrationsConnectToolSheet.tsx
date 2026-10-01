// discord_app/modules/vibegrations/native/VibegrationsConnectToolSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3714 from "../intl/VibegrationsUntranslated.messages.js";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import AlertModal from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const formatMcpConnectionExpiry = fn(12851).formatMcpConnectionExpiry;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4845);
let obj2 = {
  content: { gap: nativeDefault.space.PX_16 },
  section: null,
  actions: null,
  action: null,
  failedRow: null,
  failedText: null,
};
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.section = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.actions = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.action = { flex: 1 };
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.failedRow = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: nativeDefault.space.PX_12,
};
obj2.failedText = { flexShrink: 1 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsConnectToolSheet.tsx");

export default function VibegrationsConnectToolSheet(projectId) {
  let connection;
  mint = undefined;
  const tmp = closure_8();
  const mcpConnectionPanel = connection(16537).useMcpConnectionPanel(projectId.projectId);
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
    const obj2 = {
      key: "VibegrationsConnectToolRegenerate",
      title: null,
      content: null,
      confirmText: null,
      onConfirm: null,
    };
    const intl = util.intl;
    obj2.title = intl.string(_modDef3714.jKNAzJ);
    const intl2 = util.intl;
    obj2.content = intl2.string(_modDef3714.oWzC0r);
    const intl3 = util.intl;
    obj2.confirmText = intl3.string(_modDef3714.dZxnCn);
    obj2.onConfirm = function onConfirm() {
      mint(true);
    };
    AlertModal.showConfirmModal(obj2);
  }, items1);
  let obj2 = { header: null, children: null };
  const obj3 = { title: null };
  let intl = connection(1115).intl;
  obj3.title = intl.string(mint(3714)["xMOS+Z"]);
  obj2.header = closure_6(connection(6756).BottomSheetTitleHeader, obj3);
  const obj4 = { style: tmp.content, children: null };
  const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
  let intl2 = connection(1115).intl;
  obj5.children = intl2.string(mint(3714)["1Ew5/j"]);
  const items2 = [closure_6(connection(4841).Text, obj5), ,];
  if (null != connection) {
    const obj6 = { style: tmp.section, children: null };
    const obj7 = { variant: "text-xs/semibold", color: "text-muted", children: null };
    const intl4 = tmp2(1115).intl;
    obj7.children = intl4.string(tmp8(3714).DRgXyU);
    const items3 = [closure_6(tmp2(4841).Text, obj7), , ,];
    const obj8 = { variant: "primary", children: null };
    const obj9 = { variant: "text-sm/normal", color: "text-default", selectable: true, children: connection.url };
    obj8.children = closure_6(tmp2(4841).Text, obj9);
    items3[1] = closure_6(tmp2(6105).Card, obj8);
    const obj10 = { style: tmp.actions, children: null };
    const obj11 = { style: tmp.action, children: null };
    const obj12 = { variant: "primary", size: "md", text: null, onPress: null };
    const intl5 = tmp2(1115).intl;
    obj12.text = intl5.string(tmp2(1115).t.OpuAlK);
    obj12.onPress = callback;
    obj11.children = closure_6(tmp2(5465).Button, obj12);
    const items4 = [closure_6(View, obj11)];
    const obj13 = { style: tmp.action, children: null };
    const obj14 = { variant: "secondary", size: "md", text: null, loading: null, onPress: null };
    const intl6 = tmp2(1115).intl;
    obj14.text = intl6.string(tmp8(3714).bsDgiq);
    obj14.loading = loading;
    obj14.onPress = callback1;
    obj13.children = closure_6(tmp2(5465).Button, obj14);
    items4[1] = closure_6(View, obj13);
    obj10.children = items4;
    items3[2] = closure_7(View, obj10);
    const obj15 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl7 = tmp2(1115).intl;
    const obj16 = { time: formatMcpConnectionExpiry(connection) };
    obj15.children = intl7.format(tmp8(3714).lTtxBT, obj16);
    items3[3] = closure_6(tmp2(4841).Text, obj15);
    obj6.children = items3;
    let tmp7Result = closure_7(View, obj6);
  } else {
    tmp7Result = null;
    if (loading) {
      const obj17 = { variant: "text-sm/normal", color: "text-muted", children: null };
      let intl3 = tmp2(1115).intl;
      obj17.children = intl3.string(tmp8(3714).c3R8Tx);
      tmp7Result = closure_6(tmp2(4841).Text, obj17);
    }
  }
  items2[1] = tmp7Result;
  let tmp9Result2 = null;
  if (mcpConnectionPanel.failed) {
    const obj18 = { style: tmp.failedRow, accessibilityRole: "alert", children: null };
    const obj19 = { style: tmp.failedText, children: null };
    const obj20 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl8 = tmp2(1115).intl;
    obj20.children = intl8.string(tmp8(3714).QJKw6N);
    obj19.children = closure_6(tmp2(4841).Text, obj20);
    const items5 = [closure_6(View, obj19)];
    const obj21 = { variant: "secondary", size: "sm", text: null, loading: null, onPress: null };
    const intl9 = tmp2(1115).intl;
    obj21.text = intl9.string(tmp8(3714)["7xdKYd"]);
    obj21.loading = loading;
    obj21.onPress = function onPress() {
      mint(false);
    };
    items5[1] = closure_6(tmp2(5465).Button, obj21);
    obj18.children = items5;
    tmp9Result2 = closure_7(View, obj18);
  }
  items2[2] = tmp9Result2;
  obj4.children = items2;
  obj2.children = closure_7(View, obj4);
  return closure_6(connection(6804).ActionSheet, obj2);
}
export const VIBEGRATIONS_CONNECT_TOOL_SHEET_KEY = "VibegrationsConnectToolSheet";
