// === Module 9163: UserProfileApplicationWidgetBottomCollectionLayout ===

// Module 9163 (UserProfileApplicationWidgetBottomCollectionLayout)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4634 */;
import resolvedValuesFromUserApplicationIdentityProfile from "resolvedValuesFromUserApplicationIdentityProfile" /* 9069 */;
import UserProfileApplicationWidgetSkeletons from "UserProfileApplicationWidgetSkeletons" /* 9157 */;
import noop from "module_19" /* 19 */;

require = fn;
function CollectionItem(arg0) {
  ({ componentConfig, resolveFieldValue } = arg0);
  const tmp = closure_6();
  let image;
  if (componentConfig != null) {
    image = componentConfig.fields.image;
  }
  const items = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  const singleStringOrSkeleton = resolvedValuesFromUserApplicationIdentityProfile.resolveSingleStringOrSkeleton(componentConfig, "name", resolveFieldValue);
  const singleStringOrSkeleton1 = resolvedValuesFromUserApplicationIdentityProfile.resolveSingleStringOrSkeleton(componentConfig, "description", resolveFieldValue);
  const obj3 = { style: tmp.item, children: null };
  if (null != fieldValue) {
    const obj4 = { source: null, style: null, resizeMode: "contain" };
    const obj5 = { uri: fieldValue.media.url };
    obj4.source = obj5;
    obj4.style = tmp.itemImage;
    let tmp11 = React4(React2, obj4);
    let tmp12 = React4;
  } else {
    const obj6 = { style: tmp.itemImage };
    tmp11 = React4(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj6);
    tmp12 = React4;
  }
  const items1 = [tmp11, ];
  const obj7 = { style: tmp.itemContent, children: null };
  if ("value" === singleStringOrSkeleton.status) {
    const obj8 = { variant: "text-xs/medium", lineClamp: 2, children: singleStringOrSkeleton.text };
    let tmp12Result = tmp12(Text_Text.Text, obj8);
  } else {
    tmp12Result = tmp12(UserProfileApplicationWidgetSkeletons.TextSkeleton, { variant: "text-xs/medium", widthChars: 6 });
  }
  const items2 = [tmp12Result, ];
  if ("value" === singleStringOrSkeleton1.status) {
    const obj9 = { variant: "text-xxs/medium", color: "text-subtle", lineClamp: 2, children: singleStringOrSkeleton1.text };
    let tmp12Result2 = tmp12(Text_Text.Text, obj9);
  } else {
    tmp12Result2 = tmp12(UserProfileApplicationWidgetSkeletons.TextSkeleton, { variant: "text-xxs/medium", widthChars: 10 });
  }
  items2[1] = tmp12Result2;
  obj7.children = items2;
  items1[1] = hasOwnProperty(React3, obj7);
  obj3.children = items1;
  return hasOwnProperty(React3, obj3);
}
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4638);
const obj2 = { grid: { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_16, columnGap: nativeDefault.space.PX_16 }, item: null, itemImage: null, itemContent: null };
let obj3 = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_16, columnGap: nativeDefault.space.PX_16 };
obj2.item = { width: "47%", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.itemImage = size;
let obj4 = { width: "47%", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
obj2.itemContent = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetBottomCollectionLayout.tsx");

export default function UserProfileApplicationWidgetBottomCollectionLayout(arg0) {
  ({ bottomConfig, resolveFieldValue } = arg0);
  const obj = { style: closure_6().grid, children: null };
  const items = [React4(CollectionItem, { componentConfig: bottomConfig.components.item_1, resolveFieldValue }), React4(CollectionItem, { componentConfig: bottomConfig.components.item_2, resolveFieldValue }), React4(CollectionItem, { componentConfig: bottomConfig.components.item_3, resolveFieldValue }), React4(CollectionItem, { componentConfig: bottomConfig.components.item_4, resolveFieldValue })];
  obj.children = items;
  return hasOwnProperty(React3, obj);
};