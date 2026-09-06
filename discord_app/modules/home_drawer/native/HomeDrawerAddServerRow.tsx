// === Module 16353: HomeDrawerAddServerRow ===

// Module 16353 (HomeDrawerAddServerRow)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import HomeDrawerShared from "HomeDrawerShared" /* 16305 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerAddServerRow.tsx");

export const HomeDrawerAddServerRowExpandedChildren = function HomeDrawerAddServerRowExpandedChildren() {
  let obj = { title: null, subtitle: null };
  obj = { variant: "text-md/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.l5WIbf);
  obj.title = jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: null });
  return jsx(HomeDrawerShared.HomeDrawerSharedItem, { variant: "text-md/medium", color: "text-default", children: null });
};