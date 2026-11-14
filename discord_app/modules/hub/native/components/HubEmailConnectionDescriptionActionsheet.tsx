// discord_app/modules/hub/native/components/HubEmailConnectionDescriptionActionsheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import BottomSheetTitleHeader from "../../../../design/components/Sheet/native/BottomSheetTitleHeader.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(5306);
let obj2 = {
  content: {
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingBottom: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_16,
  },
};
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionDescriptionActionsheet.tsx");

export default function HubEmailConnectionDescriptionActionsheet() {
  const obj = { header: null, children: null };
  const obj2 = { title: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["48kg+O"]);
  obj.header = React3(BottomSheetTitleHeader.BottomSheetTitleHeader, obj2);
  const obj3 = { style: closure_5().content, children: null };
  const obj4 = { variant: "body-md/normal", color: "text-default", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.O1k9XX);
  items = [React3(Text_Text.Text, obj4)];
  const obj5 = { variant: "body-md/normal", color: "text-default", children: null };
  const intl3 = util.intl;
  obj5.children = intl3.string(util.t.FV5dvh);
  items[1] = React3(Text_Text.Text, obj5);
  obj3.children = items;
  obj.children = React4(View, obj3);
  return React3(Sheet_BottomSheet.BottomSheet, obj);
}
