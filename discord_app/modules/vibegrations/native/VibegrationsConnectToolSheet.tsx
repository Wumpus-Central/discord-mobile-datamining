// === Module 16911: VibegrationsConnectToolSheet ===

// Module 16911 (VibegrationsConnectToolSheet)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef3676 from "module_3676" /* 3676 */;
import ToastUtils from "ToastUtils" /* 4419 */;
import AlertModal from "AlertModal" /* 5072 */;
import ClipboardUtils from "ClipboardUtils" /* 7385 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const fetchProjectMcpConnection = fn(16849).fetchProjectMcpConnection;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4722);
let obj2 = { content: { gap: nativeDefault.space.PX_16 }, section: null, actions: null, action: null, failedRow: null, failedText: null };
let obj3 = { gap: nativeDefault.space.PX_16 };
obj2.section = { gap: nativeDefault.space.PX_8 };
let obj4 = { gap: nativeDefault.space.PX_8 };
obj2.actions = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.action = { flex: 1 };
let obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj2.failedRow = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_12 };
obj2.failedText = { flexShrink: 1 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsConnectToolSheet.tsx");

export default function VibegrationsConnectToolSheet(projectId) {
  projectId = projectId.projectId;
  first = undefined;
  dependencyMap = undefined;
  asyncGeneratorStep = undefined;
  _slicedToArray = undefined;
  let callback;
  const tmp = closure_10();
  [first, dependencyMap] = callback.useState(null);
  [tmp5, c3] = callback.useState(true);
  const tmp6 = _slicedToArray(callback.useState(false), 2);
  _slicedToArray = tmp6[1];
  _require = asyncGeneratorStep(async (regenerate) => {
    c6 = 0;
    c7 = 0;
    c4 = 0;
    return (async (arg0) => {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp8;
              closure_130_0 = regenerate;
              tmp4(true);
              v0(false);
              v0 = 2;
              closure_1 = closure_2;
              const obj4 = { regenerate };
              c6 = 3;
              c7 = 1;
              const obj5 = { value: fetchProjectMcpConnection(regenerate, obj4), done: false };
              return obj5;
            }
          } else if (1 === tmp8) {
            v0 = 0;
            tmp4(false);
            throw closure_5;
          } else {
            if (2 === tmp8) {
              v0 = 1;
              if (closure_130_0) {
                closure_2(null);
              }
              v0(true);
              v0 = 0;
              tmp4(false);
              c7 = 3;
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_1(value);
              v0 = 1;
            }
            v0 = 0;
            tmp4(false);
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp38) {
          closure_5 = tmp38;
          if (tmp5 === v0) {
            c7 = tmp3;
            throw tmp38;
          } else if (tmp2 === tmp40) {
            c6 = tmp2;
          } else {
            c6 = tmp;
          }
        }
      }
    })();
  });
  const items = [projectId];
  callback = callback.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items);
  const items1 = [callback];
  const effect = callback.useEffect(() => {
    callback(false).catch(() => {

    });
  }, items1);
  const items2 = [first];
  const items3 = [callback];
  const callback1 = callback.useCallback(() => {
    if (null != first) {
      ClipboardUtils.copy(tmp.url);
      ToastUtils.presentLinkCopied();
    }
  }, items2);
  const callback2 = callback.useCallback(() => {
    const obj2 = { key: "VibegrationsConnectToolRegenerate", title: null, content: null, confirmText: null, onConfirm: null };
    const intl = util.intl;
    obj2.title = intl.string(_modDef3676.jKNAzJ);
    const intl2 = util.intl;
    obj2.content = intl2.string(_modDef3676.oWzC0r);
    const intl3 = util.intl;
    obj2.confirmText = intl3.string(_modDef3676.dZxnCn);
    obj2.onConfirm = function onConfirm() {
      callback(true).catch(() => {

      });
    };
    AlertModal.showConfirmModal(obj2);
  }, items3);
  let obj = { header: null, children: null };
  let obj2 = { title: null };
  let intl = require("util").intl;
  obj2.title = intl.string(first(3676)["xMOS+Z"]);
  obj.header = closure_8(require("BottomSheetTitleHeader").BottomSheetTitleHeader, obj2);
  let obj3 = { style: tmp.content, children: null };
  let obj4 = { variant: "text-sm/normal", color: "text-muted", children: null };
  let intl2 = require("util").intl;
  obj4.children = intl2.string(first(3676)["1Ew5/j"]);
  const items4 = [closure_8(require("Text/Text").Text, obj4), , ];
  if (null != first) {
    let obj5 = { style: tmp.section, children: null };
    const obj6 = { variant: "text-xs/semibold", color: "text-muted", children: null };
    const intl4 = tmp12(1115).intl;
    obj6.children = intl4.string(tmp14(3676).DRgXyU);
    const items5 = [closure_8(tmp12(4718).Text, obj6), , , ];
    const obj7 = { variant: "primary", children: null };
    const obj8 = { variant: "text-sm/normal", color: "text-default", selectable: true, children: first.url };
    obj7.children = closure_8(tmp12(4718).Text, obj8);
    items5[1] = closure_8(tmp12(5777).Card, obj7);
    const obj9 = { style: tmp.actions, children: null };
    const obj10 = { style: tmp.action, children: null };
    const obj11 = { variant: "primary", size: "md", text: null, onPress: null };
    const intl5 = tmp12(1115).intl;
    obj11.text = intl5.string(tmp12(1115).t.OpuAlK);
    obj11.onPress = callback1;
    obj10.children = closure_8(tmp12(5144).Button, obj11);
    const items6 = [closure_8(View, obj10), ];
    const obj12 = { style: tmp.action, children: null };
    const obj13 = { variant: "secondary", size: "md", text: null, loading: null, onPress: null };
    const intl6 = tmp12(1115).intl;
    obj13.text = intl6.string(tmp14(3676).bsDgiq);
    obj13.loading = tmp5;
    obj13.onPress = callback2;
    obj12.children = closure_8(tmp12(5144).Button, obj13);
    items6[1] = closure_8(View, obj12);
    obj9.children = items6;
    items5[2] = closure_9(View, obj9);
    const obj14 = { variant: "text-xs/normal", color: "text-muted", children: null };
    const intl7 = tmp12(1115).intl;
    obj14.children = intl7.string(tmp14(3676).lTtxBT);
    items5[3] = closure_8(tmp12(4718).Text, obj14);
    obj5.children = items5;
    let tmp11Result = closure_9(View, obj5);
  } else {
    tmp11Result = null;
    if (tmp5) {
      const obj15 = { variant: "text-sm/normal", color: "text-muted", children: null };
      let intl3 = tmp12(1115).intl;
      obj15.children = intl3.string(tmp14(3676).c3R8Tx);
      tmp11Result = closure_8(tmp12(4718).Text, obj15);
    }
  }
  items4[1] = tmp11Result;
  let tmp15Result2 = null;
  if (tmp6[0]) {
    const obj16 = { style: tmp.failedRow, accessibilityRole: "alert", children: null };
    const obj17 = { style: tmp.failedText, children: null };
    const obj18 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const intl8 = tmp12(1115).intl;
    obj18.children = intl8.string(tmp14(3676).QJKw6N);
    obj17.children = closure_8(tmp12(4718).Text, obj18);
    const items7 = [closure_8(View, obj17), ];
    const obj19 = { variant: "secondary", size: "sm", text: null, loading: null, onPress: null };
    const intl9 = tmp12(1115).intl;
    obj19.text = intl9.string(tmp14(3676)["7xdKYd"]);
    obj19.loading = tmp5;
    obj19.onPress = function onPress() {
      callback(false).catch(() => {

      });
    };
    items7[1] = closure_8(tmp12(5144).Button, obj19);
    obj16.children = items7;
    tmp15Result2 = closure_9(View, obj16);
  }
  items4[2] = tmp15Result2;
  obj3.children = items4;
  obj.children = closure_9(View, obj3);
  return closure_8(require("ActionSheet").ActionSheet, obj);
};
export const VIBEGRATIONS_CONNECT_TOOL_SHEET_KEY = "VibegrationsConnectToolSheet";