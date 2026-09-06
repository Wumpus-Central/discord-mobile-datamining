// discord_app/modules/user_profile/native/GifTag.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import n from "../../../../_runtime/metro/00672__.js";
import size from "../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { gifTag: null, gifTagText: null };
obj = {
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: 2,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: null,
};
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
  return (
    <View variant="text-sm/bold" color="none" style={tmp.gifTagText}>
      {null}
    </View>
  );
}
