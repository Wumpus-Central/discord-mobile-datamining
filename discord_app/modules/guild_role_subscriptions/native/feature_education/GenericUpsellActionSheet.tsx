// === Module 16342: GenericUpsellActionSheet ===

// Module 16342 (GenericUpsellActionSheet)
import nativeDefault from "native" /* 576 */;
import FastImageDefault from "FastImage" /* 5668 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4636);
let obj2 = { image: { width: "100%" }, content: { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 }, description: null };
let obj3 = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
obj2.description = { marginBottom: nativeDefault.space.PX_16, flex: 1 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/GenericUpsellActionSheet.tsx");

export default function GenericUpsellActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ imageSource, header, body, onCTAPress, cta } = markAsDismissed);
  const tmp = closure_7();
  const bottomSheetRef1 = markAsDismissed(8287).useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const obj2 = {
    ref: bottomSheetRef,
    startExpanded: true,
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    handleDisabled: true,
    header: null,
    children: null
  };
  const obj3 = { children: null };
  const items = [closure_5(FastImageDefault, { source: imageSource, style: tmp.image }), closure_5(markAsDismissed(7257).ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose })];
  obj3.children = items;
  obj2.header = closure_6(View, obj3);
  const obj5 = { style: tmp.content, children: null };
  const items1 = [closure_5(markAsDismissed(4632).Text, { accessibilityRole: "header", variant: "heading-xl/medium", color: "mobile-text-heading-primary", children: header }), closure_5(markAsDismissed(1176).Spacer, { size: 12 }), closure_5(markAsDismissed(4632).Text, { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: body }), closure_5(markAsDismissed(5056).Button, { variant: "primary", grow: true, onPress: onCTAPress, text: cta })];
  obj5.children = items1;
  obj2.children = closure_6(View, obj5);
  return closure_5(markAsDismissed(7253).BottomSheet, obj2);
};