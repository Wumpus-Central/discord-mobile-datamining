// discord_app/modules/icymi/native/ICYMILoading.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexportDefault from "../../reanimated/ReanimatedRexport.tsx";
import useChatPlaceholderAnimatedStylesDefault from "../../chat/native/placeholder/useChatPlaceholderAnimatedStyles.tsx";
import ICYMIShared from "ICYMIShared.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function ICYMILoadingItem() {
  const tmp = closure_8();
  const tmp2 = useChatPlaceholderAnimatedStylesDefault({ visible: true, animated: true });
  const memo = noop.useMemo(
    () => ({
      avatarTitle: Math.floor(10 * Math.random()),
      title: Math.floor(10 * Math.random()),
      subtitle: Math.floor(10 * Math.random()),
    }),
    [],
  );
  let obj = { children: null };
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.avatarRow, children: null };
  ({ avatarTitle, title, subtitle } = memo);
  const obj1 = { style: null };
  const items = [, ,];
  ({ backgroundColor: arr[0], avatar: arr[1] } = tmp);
  items[2] = tmp2;
  obj1.style = items;
  const items1 = [hasOwnProperty(ReanimatedRexportDefault.View, obj1)];
  const obj2 = { style: null };
  const items2 = [, , ,];
  ({ backgroundColor: arr3[0], avatarTitle: arr3[1] } = tmp);
  items2[2] = tmp2;
  const obj3 = { width: null };
  const result = 100 * Math.sin(avatarTitle);
  obj3.width = "" + (result - Math.floor(result)) * 30 + 30 + "%";
  items2[3] = obj3;
  obj2.style = items2;
  items1[1] = hasOwnProperty(ReanimatedRexportDefault.View, obj2);
  obj.children = items1;
  const items3 = [timestampProducer(View, obj), , ,];
  const obj4 = { style: null };
  const items4 = [, , ,];
  ({ backgroundColor: arr5[0], title: arr5[1] } = tmp);
  items4[2] = tmp2;
  const obj5 = { width: null };
  const result1 = 100 * Math.sin(title);
  obj5.width = "" + (result1 - Math.floor(result1)) * 25 + 75 + "%";
  items4[3] = obj5;
  obj4.style = items4;
  items3[1] = hasOwnProperty(ReanimatedRexportDefault.View, obj4);
  const obj6 = { style: null };
  const items5 = [, , ,];
  ({ backgroundColor: arr6[0], subtitle: arr6[1] } = tmp);
  items5[2] = tmp2;
  const obj7 = { width: null };
  const result2 = 100 * Math.sin(subtitle);
  obj7.width = "" + (result2 - Math.floor(result2)) * 25 + 75 + "%";
  items5[3] = obj7;
  obj6.style = items5;
  items3[2] = hasOwnProperty(ReanimatedRexportDefault.View, obj6);
  const obj8 = { style: null };
  const items6 = [, ,];
  ({ backgroundColor: arr7[0], image: arr7[1] } = tmp);
  items6[2] = tmp2;
  obj8.style = items6;
  items3[3] = hasOwnProperty(ReanimatedRexportDefault.View, obj8);
  obj.children = items3;
  const items7 = [timestampProducer(View, obj), hasOwnProperty(ICYMIShared.Separator, {})];
  obj.children = items7;
  return timestampProducer(React5, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createICYMIStyles = fn(16452);
let closure_8 = createICYMIStyles.createICYMIStyles((marginBottom) => {
  let obj = {
    backgroundColor: null,
    container: null,
    avatarRow: null,
    avatar: null,
    avatarTitle: null,
    title: null,
    subtitle: null,
    image: null,
    separator: null,
  };
  obj = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  obj.backgroundColor = obj;
  obj.container = { padding: marginBottom.margin };
  obj.avatarRow = { flexDirection: "row", alignItems: "center", marginBottom: marginBottom.margin };
  const size = { width: 40, height: 40, borderRadius: nativeDefault.radii.md, marginRight: nativeDefault.space.PX_12 };
  obj.avatar = size;
  obj.avatarTitle = { height: 18, borderRadius: 10, flexShrink: 1 };
  obj = { height: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_12, borderRadius: 10, flexShrink: 1 };
  obj.title = obj;
  obj.subtitle = {
    height: nativeDefault.space.PX_16,
    marginBottom: marginBottom.margin,
    borderRadius: 10,
    flexShrink: 1,
  };
  const size1 = { width: "100%", height: 240, borderRadius: nativeDefault.radii.lg };
  obj.image = size1;
  obj.separator = {};
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/icymi/native/ICYMILoading.tsx");

export const ICYMILoading = function ICYMILoading() {
  const obj = { children: null };
  const items = [hasOwnProperty(ICYMILoadingItem, {}), hasOwnProperty(ICYMILoadingItem, {})];
  obj.children = items;
  return timestampProducer(React5, obj);
};
