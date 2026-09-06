// === Module 8255: GifTag ===

// Module 8255 (GifTag)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import createStyles from "createStyles" /* 4560 */;
import n from "module_672" /* 672 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { gifTag: null, gifTagText: null };
obj = { paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: 2, borderRadius: nativeDefault.radii.xs, backgroundColor: null };
const importDefaultResultResult = n(nativeDefault.unsafe_rawColors.WHITE);
obj.backgroundColor = n(nativeDefault.unsafe_rawColors.WHITE).alpha(0.9).css();
obj.gifTag = obj;
const alphaResult = n(nativeDefault.unsafe_rawColors.WHITE).alpha(0.9);
obj.gifTagText = { color: nativeDefault.unsafe_rawColors.PRIMARY_800 };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/GifTag.tsx");

export default function GifTag(style) {
  const tmp = closure_4();
  let obj = { style: null, pointerEvents: "none", children: null };
  const items = [tmp.gifTag, style.style];
  obj.style = items;
  obj = { variant: "text-sm/bold", color: "none", style: tmp.gifTagText, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.I5gL2H);
  obj.children = jsx(Text_Text.Text, { variant: "text-sm/bold", color: "none", style: tmp.gifTagText, children: null });
  return <View variant="text-sm/bold" color="none" style={tmp.gifTagText}>{null}</View>;
};