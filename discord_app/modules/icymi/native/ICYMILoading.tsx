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
  const obj = { children: null };
  const obj2 = { style: tmp.container, children: null };
  const obj3 = { style: tmp.avatarRow, children: null };
  ({ avatarTitle, title, subtitle } = memo);
  const obj4 = { style: null };
  const items = [, ,];
  ({ backgroundColor: arr[0], avatar: arr[1] } = tmp);
  items[2] = tmp2;
  obj4.style = items;
  const items1 = [hasOwnProperty(ReanimatedRexportDefault.View, obj4)];
  const obj5 = { style: null };
  const items2 = [, , ,];
  ({ backgroundColor: arr3[0], avatarTitle: arr3[1] } = tmp);
  items2[2] = tmp2;
  const obj6 = { width: null };
  const result = 100 * Math.sin(avatarTitle);
  obj6.width = "" + (result - Math.floor(result)) * 30 + 30 + "%";
  items2[3] = obj6;
  obj5.style = items2;
  items1[1] = hasOwnProperty(ReanimatedRexportDefault.View, obj5);
  obj3.children = items1;
  const items3 = [timestampProducer(View, obj3), , ,];
  const obj7 = { style: null };
  const items4 = [, , ,];
  ({ backgroundColor: arr5[0], title: arr5[1] } = tmp);
  items4[2] = tmp2;
  const obj8 = { width: null };
  const result1 = 100 * Math.sin(title);
  obj8.width = "" + (result1 - Math.floor(result1)) * 25 + 75 + "%";
  items4[3] = obj8;
  obj7.style = items4;
  items3[1] = hasOwnProperty(ReanimatedRexportDefault.View, obj7);
  const obj9 = { style: null };
  const items5 = [, , ,];
  ({ backgroundColor: arr6[0], subtitle: arr6[1] } = tmp);
  items5[2] = tmp2;
  const obj10 = { width: null };
  const result2 = 100 * Math.sin(subtitle);
  obj10.width = "" + (result2 - Math.floor(result2)) * 25 + 75 + "%";
  items5[3] = obj10;
  obj9.style = items5;
  items3[2] = hasOwnProperty(ReanimatedRexportDefault.View, obj9);
  const obj11 = { style: null };
  const items6 = [, ,];
  ({ backgroundColor: arr7[0], image: arr7[1] } = tmp);
  items6[2] = tmp2;
  obj11.style = items6;
  items3[3] = hasOwnProperty(ReanimatedRexportDefault.View, obj11);
  obj2.children = items3;
  const items7 = [timestampProducer(View, obj2), hasOwnProperty(ICYMIShared.Separator, {})];
  obj.children = items7;
  return timestampProducer(React5, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createICYMIStyles = fn(16785);
let closure_8 = createICYMIStyles.createICYMIStyles((marginBottom) => {
  const obj = {
    backgroundColor: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE },
    container: { padding: marginBottom.margin },
    avatarRow: { flexDirection: "row", alignItems: "center", marginBottom: marginBottom.margin },
    avatar: null,
    avatarTitle: null,
    title: null,
    subtitle: null,
    image: null,
    separator: null,
  };
  const size = { width: 40, height: 40, borderRadius: nativeDefault.radii.md, marginRight: nativeDefault.space.PX_12 };
  obj.avatar = size;
  obj.avatarTitle = { height: 18, borderRadius: 10, flexShrink: 1 };
  const obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
  obj.title = {
    height: nativeDefault.space.PX_16,
    marginBottom: nativeDefault.space.PX_12,
    borderRadius: 10,
    flexShrink: 1,
  };
  const obj3 = {
    height: nativeDefault.space.PX_16,
    marginBottom: nativeDefault.space.PX_12,
    borderRadius: 10,
    flexShrink: 1,
  };
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
