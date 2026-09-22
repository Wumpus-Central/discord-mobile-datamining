// === Module 16663: HomeDrawerFavoritesRow ===

// Module 16663 (HomeDrawerFavoritesRow)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4753 */;
import HomeDrawerShared from "HomeDrawerShared" /* 16656 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerFavoritesRow.tsx");

export const HomeDrawerFavoritesRowExpandedChildren = function HomeDrawerFavoritesRowExpandedChildren() {
  const obj = { title: null, subtitle: null };
  const obj2 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.wMWyci);
  obj.title = jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null });
  return jsx(HomeDrawerShared.HomeDrawerSharedItem, { title: null, subtitle: null });
};