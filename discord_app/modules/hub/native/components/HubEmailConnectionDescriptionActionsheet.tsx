// === Module 12986: HubEmailConnectionDescriptionActionsheet ===

// Module 12986 (HubEmailConnectionDescriptionActionsheet)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7394 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7395 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const createStyles = fn(4756);
let closure_4 = createStyles.createStyles({ description: { marginBottom: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionDescriptionActionsheet.tsx");

export default function HubEmailConnectionDescriptionActionsheet() {
  const tmp = closure_4();
  const obj = { children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["48kg+O"]);
  const items = [React2(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2), , ];
  const obj3 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj3.children = intl2.string(util.t.O1k9XX);
  items[1] = React2(Text_Text.Text, obj3);
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = util.intl;
  obj4.children = intl3.string(util.t.FV5dvh);
  items[2] = React2(Text_Text.Text, obj4);
  obj.children = items;
  return React3(Sheet_BottomSheet.BottomSheet, obj);
};