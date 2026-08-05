// discord_app/modules/badges/native/ReorderBadgesSheet.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Background").fileFinishedImporting("modules/badges/native/ReorderBadgesSheet.tsx");

export default function ReorderBadgesSheet() {
  let obj = { dismissAccessibilityLabel: null, header: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.opzPIQ);
  obj = { title: null };
  const intl2 = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl2.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.opzPIQ);
  obj[1] = jsx(require("../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx") /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, { title: null });
  return jsx(require("../../../design/components/Sheet/native/BottomSheet.native.tsx") /* Background */.BottomSheet, { title: null });
};