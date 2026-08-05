// discord_app/modules/guild_role_subscriptions/native/feature_education/GenericUpsellActionSheet.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { image: { width: "100%" }, content: null, description: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, marginBottom: require("Themes").space.PX_16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginBottom: require("Themes").space.PX_16, flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginBottom: require("Themes").space.PX_16, flex: 1 };
const result = require("ContentDismissActionType").fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/GenericUpsellActionSheet.tsx");

export default function GenericUpsellActionSheet(markAsDismissed) {
  let body;
  let bottomSheetClose;
  let bottomSheetRef;
  let cta;
  let header;
  let imageSource;
  let onCTAPress;
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ imageSource, header, body, onCTAPress, cta } = markAsDismissed);
  const tmp = createCacheKey();
  let obj = markAsDismissed(7325);
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  obj = {
    ref: bottomSheetRef,
    startExpanded: true,
    onDismiss() {
      return markAsDismissed(outer1_4.UNKNOWN);
    },
    handleDisabled: true,
    header: null,
    children: null
  };
  obj = { children: null };
  const items = [callback(importDefault(5236), { source: imageSource, style: tmp.image }), callback(markAsDismissed(5594).ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose })];
  obj[0] = items;
  obj[4] = callback2(View, obj);
  const obj2 = { style: tmp.content, children: null };
  const items1 = [callback(markAsDismissed(4281).Text, { accessibilityRole: "header", variant: "heading-xl/medium", color: "mobile-text-heading-primary", children: header }), callback(markAsDismissed(1297).Spacer, { size: 12 }), callback(markAsDismissed(4281).Text, { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: body }), callback(markAsDismissed(4695).Button, { variant: "primary", grow: true, onPress: onCTAPress, text: cta })];
  obj2[1] = items1;
  obj[5] = callback2(View, obj2);
  return callback(markAsDismissed(5338).BottomSheet, obj);
};