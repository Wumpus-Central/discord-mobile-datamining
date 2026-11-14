// === Module 19021: WaterwheelsDiscoverStatus ===

// Module 19021 (WaterwheelsDiscoverStatus)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2569 from "module_2569" /* 2569 */;
import Text_Text from "Text/Text" /* 5929 */;
import components_Button_Button from "components/Button/Button" /* 5936 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5306);
let obj2 = { container: { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 }, copy: null, centered: null, banner: null, bannerText: null };
let obj3 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 };
obj2.copy = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.centered = { textAlign: "center" };
let obj4 = { alignItems: "center", gap: nativeDefault.space.PX_4 };
obj2.banner = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_8 };
obj2.bannerText = { flex: 1 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/discover/native/WaterwheelsDiscoverStatus.tsx");

export default function WaterwheelsDiscoverStatus(onRetry) {
  ({ status, retryAfterAt } = onRetry);
  const tmp = closure_7();
  items = [retryAfterAt];
  [][0] = retryAfterAt;
  const callback = noop.useCallback(() => {
    let tmp2 = null != retryAfterAt;
    if (tmp2) {
      tmp2 = retryAfterAt > 0;
    }
    if (tmp2) {
      const _Date = Date;
      tmp2 = retryAfterAt > Date.now();
    }
    return tmp2;
  }, items);
  if ("loading" === status) {
    const obj2 = { style: tmp.container, accessibilityLiveRegion: "polite", children: null };
    const obj3 = { variant: "body-md/medium", color: "text-subtle", style: tmp.centered, children: null };
    const intl3 = util.intl;
    obj3.children = intl3.string(_modDef2569["71GnER"]);
    obj2.children = hasOwnProperty(Text_Text.Text, obj3);
    let tmp12Result = hasOwnProperty(View, obj2);
  } else {
    const obj4 = { style: tmp.container, accessibilityLiveRegion: "polite", children: null };
    const obj5 = { style: tmp.copy, children: null };
    const obj6 = { variant: "heading-sm/semibold", color: "text-strong", style: tmp.centered, children: null };
    const intl4 = util.intl;
    const tmp19 = _modDef2569;
    if ("empty" === status) {
      let vtx6nV = tmp19.gv4HTM;
      let tmp4 = importDefault;
    } else {
      vtx6nV = tmp19.vtx6nV;
      tmp4 = importDefault;
    }
    obj6.children = intl4.string(vtx6nV);
    const items1 = [hasOwnProperty(Text_Text.Heading, obj6), ];
    let tmp14Result = null;
    if ("empty" === status) {
      const obj = { variant: "body-sm/normal", color: "text-subtle", style: tmp.centered, children: null };
      const intl = util.intl;
      obj.children = intl.string(tmp4(2569)["9KIqrW"]);
      tmp14Result = hasOwnProperty(Text_Text.Text, obj);
    }
    items1[1] = tmp14Result;
    obj5.children = items1;
    const items2 = [timestampProducer(View, obj5), ];
    const obj7 = { size: "sm", variant: "secondary", text: null, onPress: null, disabled: null };
    const intl2 = util.intl;
    obj7.text = intl2.string(tmp4(2569).DClDU4);
    obj7.onPress = onRetry.onRetry;
    obj7.disabled = tmp3;
    items2[1] = hasOwnProperty(components_Button_Button.Button, obj7);
    obj4.children = items2;
    tmp12Result = timestampProducer(View, obj4);
  }
  return tmp12Result;
};
export function WaterwheelsDiscoverRefreshError(retryAfterAt) {
  retryAfterAt = retryAfterAt.retryAfterAt;
  const tmp = closure_7();
  items = [retryAfterAt];
  const items1 = [retryAfterAt];
  const callback = noop.useCallback(() => {
    let tmp2 = null != retryAfterAt;
    if (tmp2) {
      tmp2 = retryAfterAt > 0;
    }
    if (tmp2) {
      const _Date = Date;
      tmp2 = retryAfterAt > Date.now();
    }
    return tmp2;
  }, items);
  const obj = { style: tmp.banner, accessibilityLiveRegion: "polite", children: null };
  const syncExternalStore = noop.useSyncExternalStore(noop.useCallback((fn) => {
    closure_0 = fn;
    function checkDeadline() {
      let num = retryAfterAt;
      if (retryAfterAt == null) {
        num = 0;
      }
      const diff = num - Date.now();
      if (diff > 0) {
        const _setTimeout = setTimeout;
        const _Math = Math;
        const timeout = setTimeout(checkDeadline, Math.min(diff, 2147483647));
      } else {
        closure_0();
      }
    }
    let num = closure_0;
    if (closure_0 == null) {
      num = 0;
    }
    let diff = num - Date.now();
    if (diff > 0) {
      let _setTimeout = setTimeout;
      let _Math = Math;
      let timeout = setTimeout(checkDeadline, Math.min(diff, 2147483647));
    } else {
      fn();
    }
    return () => clearTimeout(closure_1);
  }, items1), callback);
  const obj2 = { variant: "body-sm/medium", color: "text-subtle", style: tmp.bannerText, children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef2569["4O8kV0"]);
  const items2 = [hasOwnProperty(Text_Text.Text, obj2), ];
  const obj3 = { size: "sm", variant: "secondary", text: null, onPress: null, disabled: null };
  const intl2 = util.intl;
  obj3.text = intl2.string(_modDef2569.DClDU4);
  obj3.onPress = retryAfterAt.onRetry;
  obj3.disabled = syncExternalStore;
  items2[1] = hasOwnProperty(components_Button_Button.Button, obj3);
  obj.children = items2;
  return timestampProducer(View, obj);
}