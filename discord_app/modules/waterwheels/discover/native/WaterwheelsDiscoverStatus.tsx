// === Module 18886: WaterwheelsDiscoverStatus ===

// Module 18886 (WaterwheelsDiscoverStatus)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2553 from "module_2553" /* 2553 */;
import Text_Text from "Text/Text" /* 5866 */;
import components_Button_Button from "components/Button/Button" /* 5873 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5243);
let obj2 = { container: { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 }, copy: null, centered: null, banner: null, bannerText: null };
let obj3 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 };
obj2.copy = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.centered = { textAlign: "center" };
let obj4 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.banner = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
obj2.bannerText = { flex: 1 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverStatus.tsx");

export default function WaterwheelsDiscoverStatus(status) {
  status = status.status;
  const tmp = closure_6();
  if ("loading" === status) {
    const obj2 = { style: tmp.container, accessibilityLiveRegion: "polite", children: null };
    const obj3 = { variant: "body-md/medium", color: "text-subtle", style: tmp.centered, children: null };
    const intl3 = util.intl;
    obj3.children = intl3.string(_modDef2553["71GnER"]);
    obj2.children = React4(Text_Text.Text, obj3);
    let tmp10Result = React4(View, obj2);
  } else {
    const obj4 = { style: tmp.container, accessibilityLiveRegion: "polite", children: null };
    const obj5 = { style: tmp.copy, children: null };
    const obj6 = { variant: "heading-sm/semibold", color: "text-strong", style: tmp.centered, children: null };
    const intl4 = util.intl;
    const tmp17 = _modDef2553;
    if ("empty" === status) {
      let vtx6nV = tmp17.gv4HTM;
      let tmp2 = importDefault;
    } else {
      vtx6nV = tmp17.vtx6nV;
      tmp2 = importDefault;
    }
    obj6.children = intl4.string(vtx6nV);
    items = [React4(Text_Text.Heading, obj6), ];
    let tmp12Result = null;
    if ("empty" === status) {
      const obj = { variant: "body-sm/normal", color: "text-subtle", style: tmp.centered, children: null };
      const intl = util.intl;
      obj.children = intl.string(tmp2(2553)["9KIqrW"]);
      tmp12Result = React4(Text_Text.Text, obj);
    }
    items[1] = tmp12Result;
    obj5.children = items;
    const items1 = [hasOwnProperty(View, obj5), ];
    const obj7 = { size: "sm", variant: "secondary", text: null, onPress: null };
    const intl2 = util.intl;
    obj7.text = intl2.string(tmp2(2553).DClDU4);
    obj7.onPress = status.onRetry;
    items1[1] = React4(components_Button_Button.Button, obj7);
    obj4.children = items1;
    tmp10Result = hasOwnProperty(View, obj4);
  }
  return tmp10Result;
};
export function WaterwheelsDiscoverRefreshError(onRetry) {
  const tmp = closure_6();
  const obj = { style: tmp.banner, accessibilityLiveRegion: "polite", children: null };
  const obj2 = { variant: "body-sm/medium", color: "text-subtle", style: tmp.bannerText, children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef2553["4O8kV0"]);
  items = [React4(Text_Text.Text, obj2), ];
  const obj3 = { size: "sm", variant: "secondary", text: null, onPress: null };
  const intl2 = util.intl;
  obj3.text = intl2.string(_modDef2553.DClDU4);
  obj3.onPress = onRetry.onRetry;
  items[1] = React4(components_Button_Button.Button, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
}