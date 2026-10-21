// === Module 18248: ReferralProgramEntryPointActionSheet ===

// Module 18248 (ReferralProgramEntryPointActionSheet)
import nativeDefault from "native" /* 587 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5192 */;
import FastImageDefault from "FastImage" /* 5651 */;
import _modDef8401 from "module_8401" /* 8401 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(4818).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4966);
let obj2 = { container: { display: "flex", flexDirection: "column", alignItems: "center", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_20, borderRadius: nativeDefault.radii.lg }, buttonContainer: null, header: null, body: null, image: null };
let size = { marginTop: nativeDefault.space.PX_24, width: 335, height: 48 };
obj2.buttonContainer = size;
let obj3 = { display: "flex", flexDirection: "column", alignItems: "center", paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_20, borderRadius: nativeDefault.radii.lg };
obj2.header = { marginBottom: nativeDefault.space.PX_8, textAlign: "center" };
obj2.body = { textAlign: "center" };
const size1 = { height: 188, width: 335, borderRadius: nativeDefault.radii.md, marginBottom: nativeDefault.space.PX_24 };
obj2.image = size1;
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/referral_program/native/ReferralProgramEntryPointActionSheet.tsx");

export default function ReferralProgramEntryPointActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = closure_8();
  const items = [markAsDismissed];
  const items1 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    markAsDismissed(ContentDismissActionType.PRIMARY);
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14640, dependencyMap.paths), "referral-program-share-action-sheet");
  }, items);
  const callback1 = noop.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items1);
  const obj = { onDismiss: callback1, children: null };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { source: null, style: null };
  const obj4 = { uri: _modDef8401 };
  obj3.source = obj4;
  obj3.style = tmp.image;
  const items2 = [closure_6(FastImageDefault, obj3), , , ];
  const obj5 = { style: tmp.header, color: "mobile-text-heading-primary", variant: "heading-lg/extrabold", children: null };
  const intl = markAsDismissed(1128).intl;
  obj5.children = intl.string(markAsDismissed(1128).t.u1CFbS);
  items2[1] = closure_6(markAsDismissed(5216).Text, obj5);
  const obj6 = { style: tmp.body, color: "text-default", variant: "text-sm/normal", children: null };
  const intl2 = markAsDismissed(1128).intl;
  obj6.children = intl2.string(markAsDismissed(1128).t.k2ibMz);
  items2[2] = closure_6(markAsDismissed(5216).Text, obj6);
  const obj7 = { style: tmp.buttonContainer, children: null };
  const obj8 = { text: null, size: "lg", onPress: null, variant: "primary" };
  const intl3 = markAsDismissed(1128).intl;
  obj8.text = intl3.string(markAsDismissed(1128).t.TI8qgg);
  obj8.onPress = callback;
  obj7.children = closure_6(markAsDismissed(5226).Button, obj8);
  items2[3] = closure_6(View, obj7);
  obj2.children = items2;
  obj.children = closure_7(View, obj2);
  return closure_6(markAsDismissed(5247).BottomSheet, obj);
};