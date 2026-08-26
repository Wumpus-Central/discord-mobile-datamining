// === Module 15793: HomeDrawerAddServerRowExpandedChildren ===

// Module 15793 (HomeDrawerAddServerRowExpandedChildren)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4440 */;
import HomeDrawerSharedItem from "HomeDrawerSharedItem" /* 15745 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/home_drawer/native/HomeDrawerAddServerRow.tsx");

export const HomeDrawerAddServerRowExpandedChildren = function HomeDrawerAddServerRowExpandedChildren() {
  let obj = { title: null, subtitle: null };
  obj = { variant: "text-md/medium", color: "text-default", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.l5WIbf);
  obj[0] = jsx(Text.Text, { variant: "text-md/medium", color: "text-default", children: null });
  return jsx(HomeDrawerSharedItem.HomeDrawerSharedItem, { variant: "text-md/medium", color: "text-default", children: null });
};