// discord_app/modules/home_drawer/native/HomeDrawerAddServerRow.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("HomeDrawerSharedItem").fileFinishedImporting("modules/home_drawer/native/HomeDrawerAddServerRow.tsx");

export const HomeDrawerAddServerRowExpandedChildren = function HomeDrawerAddServerRowExpandedChildren() {
  let obj = { title: null, subtitle: null };
  obj = { variant: "text-md/medium", color: "text-default", children: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.l5WIbf);
  obj[0] = jsx(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, { variant: "text-md/medium", color: "text-default", children: null });
  return jsx(require("HomeDrawerShared.tsx") /* HomeDrawerSharedItem */.HomeDrawerSharedItem, { variant: "text-md/medium", color: "text-default", children: null });
};