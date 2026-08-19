// discord_app/modules/guild_role_subscriptions/native/feature_education/GenericUpsellActionSheet.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import preloadDefault from "../../../../components_native/common/FastImage.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { ContentDismissActionType } from "../../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
const createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginBottom: ThemesDefault.space.PX_16, flex: 1 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/GenericUpsellActionSheet.tsx");

export default function GenericUpsellActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ imageSource, header, body, onCTAPress, cta } = markAsDismissed);
  const tmp = callback3();
  let obj = markAsDismissed(7688);
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  obj = { children: null };
  const items = [callback(preloadDefault, { source: imageSource, style: tmp.image }), callback(markAsDismissed(7124).ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose })];
  obj[0] = items;
  obj[4] = callback2(View, obj);
  const obj2 = { style: tmp.content, children: null };
  const items1 = [callback(markAsDismissed(4734).Text, { accessibilityRole: "header", variant: "heading-xl/medium", color: "mobile-text-heading-primary", children: header }), callback(markAsDismissed(1297).Spacer, { size: 12 }), callback(markAsDismissed(4734).Text, { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: body }), callback(markAsDismissed(4745).Button, { variant: "primary", grow: true, onPress: onCTAPress, text: cta })];
  obj2[1] = items1;
  obj[5] = callback2(View, obj2);
  return callback(markAsDismissed(6950).BottomSheet, obj);
};