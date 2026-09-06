// === Module 9020: UserProfileApplicationWidgetBottomCollectionLayout ===

// Module 9020 (UserProfileApplicationWidgetBottomCollectionLayout)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import resolvedValuesFromUserApplicationIdentityProfile from "resolvedValuesFromUserApplicationIdentityProfile" /* 8926 */;
import UserProfileApplicationWidgetSkeletons from "UserProfileApplicationWidgetSkeletons" /* 9014 */;
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
  let obj = resolvedValuesFromUserApplicationIdentityProfile;
  const singleStringOrSkeleton = obj.resolveSingleStringOrSkeleton(componentConfig, "name", resolveFieldValue);
  let obj1 = resolvedValuesFromUserApplicationIdentityProfile;
  const singleStringOrSkeleton1 = obj1.resolveSingleStringOrSkeleton(componentConfig, "description", resolveFieldValue);
  obj = { style: tmp.item, children: null };
  if (null != fieldValue) {
    obj = { source: null, style: null, resizeMode: "contain" };
    obj1 = { uri: fieldValue.media.url };
    obj.source = obj1;
    obj.style = tmp.itemImage;
    let tmp11 = React4(React2, obj);
    let tmp12 = React4;
  } else {
    const obj2 = { style: tmp.itemImage };
    tmp11 = React4(UserProfileApplicationWidgetSkeletons.ImageSkeleton, obj2);
    tmp12 = React4;
  }
  const items1 = [tmp11, ];
  const obj3 = { style: tmp.itemContent, children: null };
  if ("value" === singleStringOrSkeleton.status) {
    const obj4 = { variant: "text-xs/medium", lineClamp: 2, children: singleStringOrSkeleton.text };
    let tmp12Result = tmp12(Text_Text.Text, obj4);
  } else {
    tmp12Result = tmp12(UserProfileApplicationWidgetSkeletons.TextSkeleton, { variant: "text-xs/medium", widthChars: 6 });
  }
  const items2 = [tmp12Result, ];
  if ("value" === singleStringOrSkeleton1.status) {
    const obj5 = { variant: "text-xxs/medium", color: "text-subtle", lineClamp: 2, children: singleStringOrSkeleton1.text };
    tmp12Result = tmp12(Text_Text.Text, obj5);
  } else {
    tmp12Result = tmp12(UserProfileApplicationWidgetSkeletons.TextSkeleton, { variant: "text-xxs/medium", widthChars: 10 });
  }
  items2[1] = tmp12Result;
  obj3.children = items2;
  items1[1] = hasOwnProperty(React3, obj3);
  obj.children = items1;
  return hasOwnProperty(React3, obj);
}
get_ActivityIndicator = fn(17);
({ Image: c2, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { grid: null, item: null, itemImage: null, itemContent: null };
createStyles = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_16, columnGap: nativeDefault.space.PX_16 };
createStyles.grid = createStyles;
createStyles.item = { width: "47%", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles.itemImage = size;
let obj1 = { width: "47%", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
createStyles.itemContent = { flex: 1, gap: nativeDefault.space.PX_4, minWidth: 0 };
let closure_6 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetBottomCollectionLayout.tsx");

export default function UserProfileApplicationWidgetBottomCollectionLayout(arg0) {
  ({ bottomConfig, resolveFieldValue } = arg0);
  let obj = { style: closure_6().grid, children: null };
  obj = { componentConfig: bottomConfig.components.item_1, resolveFieldValue };
  const items = [React4(CollectionItem, obj), , , ];
  obj = { componentConfig: bottomConfig.components.item_2, resolveFieldValue };
  items[1] = React4(CollectionItem, obj);
  items[2] = React4(CollectionItem, { componentConfig: bottomConfig.components.item_3, resolveFieldValue });
  items[3] = React4(CollectionItem, { componentConfig: bottomConfig.components.item_4, resolveFieldValue });
  obj.children = items;
  return hasOwnProperty(React3, obj);
};