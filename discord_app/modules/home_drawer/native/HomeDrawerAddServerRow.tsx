// === Module 16451: HomeDrawerAddServerRow ===

// Module 16451 (HomeDrawerAddServerRow)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4632 */;
import HomeDrawerShared from "HomeDrawerShared" /* 16403 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerAddServerRow.tsx");

export const HomeDrawerAddServerRowExpandedChildren = function HomeDrawerAddServerRowExpandedChildren() {
  const obj = { title: null, subtitle: null };
  const obj2 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.l5WIbf);
  obj.title = jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: null });
  return jsx(HomeDrawerShared.HomeDrawerSharedItem, { title: null, subtitle: null });
};