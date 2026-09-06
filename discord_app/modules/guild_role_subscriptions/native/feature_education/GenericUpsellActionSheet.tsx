// === Module 16245: GenericUpsellActionSheet ===

// Module 16245 (GenericUpsellActionSheet)
import nativeDefault from "native" /* 576 */;
import FastImageDefault from "FastImage" /* 5587 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { image: { width: "100%" }, content: null, description: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
createStyles.content = createStyles;
createStyles.description = { marginBottom: nativeDefault.space.PX_16, flex: 1 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/GenericUpsellActionSheet.tsx");

export default function GenericUpsellActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ imageSource, header, body, onCTAPress, cta } = markAsDismissed);
  const tmp = closure_7();
  let obj = markAsDismissed(8170);
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  obj = {
    ref: bottomSheetRef,
    startExpanded: true,
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    handleDisabled: true,
    header: null,
    children: null
  };
  obj = { children: null };
  const items = [closure_5(FastImageDefault, { source: imageSource, style: tmp.image }), closure_5(markAsDismissed(7154).ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose })];
  obj.children = items;
  obj.header = closure_6(View, obj);
  const obj2 = { style: tmp.content, children: null };
  const items1 = [closure_5(markAsDismissed(4556).Text, { accessibilityRole: "header", variant: "heading-xl/medium", color: "mobile-text-heading-primary", children: header }), closure_5(markAsDismissed(1178).Spacer, { size: 12 }), closure_5(markAsDismissed(4556).Text, { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: body }), closure_5(markAsDismissed(4975).Button, { variant: "primary", grow: true, onPress: onCTAPress, text: cta })];
  obj2.children = items1;
  obj.children = closure_6(View, obj2);
  return closure_5(markAsDismissed(7150).BottomSheet, obj);
};