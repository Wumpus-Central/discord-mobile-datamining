// === Module 9178: ClearAllIncomingRequestsConfirmation ===

// Module 9178 (ClearAllIncomingRequestsConfirmation)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ToastUtils from "ToastUtils" /* 4334 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4839 */;
import RelationshipActionCreatorsDefault from "RelationshipActionCreators" /* 9171 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4636);
let obj2 = { root: { display: "flex", flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%", paddingTop: nativeDefault.space.PX_24 }, closeButton: { marginRight: 8, alignSelf: "flex-end" }, content: null, container: null, footer: null, header: null, headerText: null, body: null, noticeHeader: null, buttonWrapper: null };
let obj3 = { display: "flex", flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, height: "100%", paddingTop: nativeDefault.space.PX_24 };
obj2.content = { flexGrow: 1, padding: nativeDefault.space.PX_16 };
let obj4 = { flexGrow: 1, padding: nativeDefault.space.PX_16 };
obj2.container = { display: "flex", flexDirection: "column", height: "100%", marginTop: nativeDefault.space.PX_24 };
let obj5 = { display: "flex", flexDirection: "column", height: "100%", marginTop: nativeDefault.space.PX_24 };
obj2.footer = { flexGrow: 0, flexShrink: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
let obj6 = { flexGrow: 0, flexShrink: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, paddingVertical: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.header = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
let obj7 = { display: "flex", alignItems: "center", justifyContent: "center", marginBottom: nativeDefault.space.PX_16 };
obj2.headerText = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
let obj8 = { marginTop: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_4 };
obj2.body = { padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj9 = { padding: nativeDefault.space.PX_24, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.noticeHeader = { marginBottom: nativeDefault.space.PX_4 };
let obj10 = { marginBottom: nativeDefault.space.PX_4 };
obj2.buttonWrapper = { marginBottom: nativeDefault.space.PX_4 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/people/native/ClearAllIncomingRequestsConfirmation.tsx");

export default function ClearAllIncomingRequestsConfirmationModal(incomingRequestCount) {
  _require = undefined;
  const tmp = closure_10();
  [tmp3, c0] = noop.useState(false);
  const callback = noop.useCallback(() => {
    _undefined(false);
    ModalActionCreatorsDefault.pop();
  }, []);
  const callback1 = noop.useCallback(() => {
    _undefined(false);
    const intl = util.intl;
    ToastUtils.presentFailedToast(intl.string(util.t.R0RpRX));
  }, []);
  const items = [callback, callback1];
  const callback2 = noop.useCallback(() => {
    _undefined(true);
    const result = RelationshipActionCreatorsDefault.clearPendingRelationships();
    result.then(callback).catch(callback1);
  }, items);
  let obj = { top: true, children: null };
  const obj2 = { style: tmp.root, children: null };
  const obj3 = { accessibilityRole: "button", accessibilityLabel: null, source: null, style: null, onPress: null };
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  let intl = require("util").intl;
  obj3.accessibilityLabel = intl.string(require("util").t.cpT0Cq);
  obj3.source = callback(callback1[12]);
  const items1 = [tmp.closeButton];
  obj3.style = items1;
  obj3.onPress = function onPress() {
    return callback(callback1[6]).pop();
  };
  const items2 = [closure_7(callback(callback1[11]), obj3), ];
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.content, children: null };
  const obj6 = { children: null };
  const obj7 = { style: tmp.header, children: null };
  const obj8 = { style: tmp.headerText, variant: "text-lg/bold", children: null };
  const intl2 = require("util").intl;
  obj8.children = intl2.string(require("util").t.eVjfAu);
  obj7.children = closure_7(require("Text/Text").Text, obj8);
  const items3 = [closure_7(closure_5, obj7), ];
  const obj9 = { style: tmp.body, children: null };
  const obj10 = { style: tmp.noticeHeader, variant: "text-xs/normal", color: "mobile-text-heading-primary", children: null };
  const intl3 = require("util").intl;
  obj10.children = intl3.format(require("util").t.jaXsA3, { incomingRequestCount: incomingRequestCount.incomingPendingRequestCount });
  obj9.children = closure_7(require("Text/Text").Text, obj10);
  items3[1] = closure_7(closure_5, obj9);
  obj6.children = items3;
  obj5.children = closure_9(closure_8, obj6);
  const items4 = [closure_7(closure_6, obj5), ];
  const obj11 = { style: tmp.footer, children: null };
  const obj12 = { bottom: true, children: null };
  const obj13 = { children: null };
  const obj14 = { style: tmp.buttonWrapper, children: null };
  const obj15 = { disabled: tmp3, loading: tmp3, variant: "destructive", size: "md", text: null, onPress: null, grow: true };
  const intl4 = require("util").intl;
  obj15.text = intl4.string(require("util").t.Eq9seb);
  obj15.onPress = callback2;
  obj14.children = closure_7(require("components/Button/Button").Button, obj15);
  const items5 = [closure_7(closure_5, obj14), ];
  const obj16 = { style: tmp.buttonWrapper, children: null };
  const obj17 = { variant: "secondary", size: "md", text: null, onPress: null, grow: true };
  const intl5 = require("util").intl;
  obj17.text = intl5.string(require("util").t["ETE/oC"]);
  obj17.onPress = callback(callback1[6]).pop;
  obj16.children = closure_7(require("components/Button/Button").Button, obj17);
  items5[1] = closure_7(closure_5, obj16);
  obj13.children = items5;
  obj12.children = closure_9(closure_8, obj13);
  obj11.children = closure_7(require("common/SafeAreaView").SafeAreaPaddingView, obj12);
  items4[1] = closure_7(closure_5, obj11);
  obj4.children = items4;
  items2[1] = closure_9(closure_5, obj4);
  obj2.children = items2;
  obj.children = closure_9(closure_5, obj2);
  return closure_7(require("common/SafeAreaView").SafeAreaPaddingView, obj);
};