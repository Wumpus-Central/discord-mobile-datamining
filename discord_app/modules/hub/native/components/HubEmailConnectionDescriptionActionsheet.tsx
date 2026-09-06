// discord_app/modules/hub/native/components/HubEmailConnectionDescriptionActionsheet.tsx
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({ description: { marginBottom: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionDescriptionActionsheet.tsx");

export default function HubEmailConnectionDescriptionActionsheet() {
  const tmp = closure_4();
  let obj = { children: null };
  obj = { title: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["48kg+O"]);
  const items = [React2(BottomSheetTitleHeader.BottomSheetTitleHeader, obj), ,];
  obj = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj.children = intl2.string(util.t.O1k9XX);
  items[1] = React2(Text_Text.Text, obj);
  const obj1 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl3 = util.intl;
  obj1.children = intl3.string(util.t.FV5dvh);
  items[2] = React2(Text_Text.Text, obj1);
  obj.children = items;
  return React3(Sheet_BottomSheet.BottomSheet, obj);
}
