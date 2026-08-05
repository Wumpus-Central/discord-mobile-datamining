// discord_app/modules/application_widget/native/UserProfileApplicationWidgetBottomCollectionLayout.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
let c5;
let obj1;
const require = arg1;
function CollectionItem(arg0) {
  let componentConfig;
  let resolveFieldValue;
  ({ componentConfig, resolveFieldValue } = arg0);
  const tmp = createCacheKey();
  let image;
  if (componentConfig != null) {
    image = componentConfig.fields.image;
  }
  const items = [require(12264) /* resolvedValuesFromUserApplicationIdentityProfile */.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  let obj = require(12264) /* resolvedValuesFromUserApplicationIdentityProfile */;
  const singleStringOrSkeleton = obj.resolveSingleStringOrSkeleton(componentConfig, "name", resolveFieldValue);
  let obj1 = require(12264) /* resolvedValuesFromUserApplicationIdentityProfile */;
  const singleStringOrSkeleton1 = obj1.resolveSingleStringOrSkeleton(componentConfig, "description", resolveFieldValue);
  obj = { style: tmp.item, children: null };
  if (null != fieldValue) {
    obj = { source: null, style: null, resizeMode: "contain" };
    obj1 = { uri: null };
    obj1[0] = fieldValue.media.url;
    obj[0] = obj1;
    obj[1] = tmp.itemImage;
    let tmp11 = callback(closure_2, obj);
    let tmp12 = callback;
  } else {
    const obj2 = { style: null };
    obj2[0] = tmp.itemImage;
    tmp11 = callback(tmp3(12352).ImageSkeleton, obj2);
    tmp12 = callback;
  }
  const items1 = [tmp11, ];
  const obj3 = { style: tmp.itemContent, children: null };
  if ("value" === singleStringOrSkeleton.status) {
    const obj4 = { variant: "text-xs/medium", lineClamp: 2, children: null };
    obj4[2] = singleStringOrSkeleton.text;
    let tmp12Result = tmp12(tmp3(4281).Text, obj4);
  } else {
    tmp12Result = tmp12(tmp3(12352).TextSkeleton, { variant: "text-xs/medium", widthChars: 6 });
  }
  const items2 = [tmp12Result, ];
  if ("value" === singleStringOrSkeleton1.status) {
    const obj5 = { variant: "text-xxs/medium", color: "text-subtle", lineClamp: 2, children: null };
    obj5[3] = singleStringOrSkeleton1.text;
    tmp12Result = tmp12(tmp3(4281).Text, obj5);
  } else {
    tmp12Result = tmp12(tmp3(12352).TextSkeleton, { variant: "text-xxs/medium", widthChars: 10 });
  }
  items2[1] = tmp12Result;
  obj3[1] = items2;
  items1[1] = closure_5(closure_3, obj3);
  obj[1] = items1;
  return closure_5(closure_3, obj);
}
({ Image: obj1, View: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { grid: null, item: null, itemImage: null, itemContent: null };
createCacheKey = { flexDirection: "row", flexWrap: "wrap", rowGap: require("Themes").space.PX_16, columnGap: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: "47%", flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
obj1 = { width: "47%", flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12 };
createCacheKey[2] = { width: 48, height: 48, borderRadius: require("Themes").radii.sm, overflow: "hidden", backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
let obj2 = { width: 48, height: 48, borderRadius: require("Themes").radii.sm, overflow: "hidden", backgroundColor: require("Themes").colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[3] = { flex: 1, gap: require("Themes").space.PX_4, minWidth: 0 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { flex: 1, gap: require("Themes").space.PX_4, minWidth: 0 };
const result = require("jsxProd").fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetBottomCollectionLayout.tsx");

export default function UserProfileApplicationWidgetBottomCollectionLayout(arg0) {
  let bottomConfig;
  let resolveFieldValue;
  ({ bottomConfig, resolveFieldValue } = arg0);
  let obj = { style: createCacheKey().grid, children: null };
  obj = { componentConfig: bottomConfig.components.item_1, resolveFieldValue };
  const items = [callback(CollectionItem, obj), , , ];
  obj = { componentConfig: bottomConfig.components.item_2, resolveFieldValue };
  items[1] = callback(CollectionItem, obj);
  items[2] = callback(CollectionItem, { componentConfig: bottomConfig.components.item_3, resolveFieldValue });
  items[3] = callback(CollectionItem, { componentConfig: bottomConfig.components.item_4, resolveFieldValue });
  obj[1] = items;
  return callback2(closure_3, obj);
};