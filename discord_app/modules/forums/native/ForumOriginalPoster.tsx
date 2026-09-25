// discord_app/modules/forums/native/ForumOriginalPoster.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
class ForumOriginalPoster {
  constructor() {
    tmp = closure_5();
    obj = { style: tmp.container, children: null };
    obj1 = { style: null, children: null };
    items = [,];
    ({ opIcon: arr[0], opIconBackground: arr[1] } = tmp);
    obj1.style = items;
    obj5 = { variant: "text-xs/semibold", color: "text-brand", children: null };
    intl = closure_0(closure_1[7]).intl;
    obj5.children = intl.string(closure_0(closure_1[7]).t.fyE8sH);
    obj1.children = jsx(closure_0(closure_1[6]).Text, obj5);
    items1 = [,];
    items1[0] = jsx(View, obj1);
    obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    intl2 = closure_0(closure_1[7]).intl;
    obj6.children = intl2.string(closure_0(closure_1[7]).t.uN6Emt);
    items1[1] = jsx(closure_0(closure_1[6]).Text, obj6);
    obj.children = items1;
    return jsxs(View, obj);
  }
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  container: { flexDirection: "row", alignItems: "center", justifyContent: "center" },
  opIcon: { borderRadius: nativeDefault.radii.sm, marginEnd: 8, paddingHorizontal: 4 },
  opIconBackground: null,
};
let obj3 = { borderRadius: nativeDefault.radii.sm, marginEnd: 8, paddingHorizontal: 4 };
obj2.opIconBackground = { backgroundColor: fn(5748).DARK_BRAND_260_LIGHT_BRAND_200 };
const hasOwnProperty = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/ForumOriginalPoster.tsx");

export default ForumOriginalPoster;
export const getForumOriginalPoster = function getForumOriginalPoster() {
  return React3(ForumOriginalPoster, {});
};
