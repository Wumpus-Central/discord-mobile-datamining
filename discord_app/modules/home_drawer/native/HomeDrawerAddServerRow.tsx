// discord_app/modules/home_drawer/native/HomeDrawerAddServerRow.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import HomeDrawerSharedItem from "HomeDrawerShared.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

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