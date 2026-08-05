// discord_app/modules/home_drawer/native/HomeDrawerFavoritesRow.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("HomeDrawerSharedItem").fileFinishedImporting("modules/home_drawer/native/HomeDrawerFavoritesRow.tsx");

export const HomeDrawerFavoritesRowExpandedChildren = function HomeDrawerFavoritesRowExpandedChildren() {
  let obj = { title: null, subtitle: null };
  obj = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[3] = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.wMWyci);
  obj[0] = jsx(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null });
  return jsx(require("HomeDrawerShared.tsx") /* HomeDrawerSharedItem */.HomeDrawerSharedItem, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null });
};