// discord_app/modules/home_drawer/native/HomeDrawerFavoritesRow.tsx
import "noop";
import { jsx } from "jsxProd";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { HomeDrawerSharedItem } from "HomeDrawerShared.tsx";

const require = arg1;
const result = require("HomeDrawerSharedItem").fileFinishedImporting("modules/home_drawer/native/HomeDrawerFavoritesRow.tsx");

export const HomeDrawerFavoritesRowExpandedChildren = function HomeDrawerFavoritesRowExpandedChildren() {
  let obj = { title: null, subtitle: null };
  obj = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[3] = intl.string(getSystemLocale /* getSystemLocale */.t.wMWyci);
  obj[0] = jsx(Text /* Text */.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null });
  return jsx(HomeDrawerSharedItem /* HomeDrawerSharedItem */.HomeDrawerSharedItem, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null });
};