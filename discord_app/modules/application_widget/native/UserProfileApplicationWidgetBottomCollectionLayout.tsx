// discord_app/modules/application_widget/native/UserProfileApplicationWidgetBottomCollectionLayout.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import resolvedValuesFromUserApplicationIdentityProfile from "resolvedValuesFromUserApplicationIdentityProfile" /* 12190 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = arg1;
function CollectionItem(arg0) {
  ({ componentConfig, resolveFieldValue } = arg0);
  const tmp = callback3();
  let image;
  if (componentConfig != null) {
    image = componentConfig.fields.image;
  }
  const items = [resolvedValuesFromUserApplicationIdentityProfile.ResolvedValueType.MEDIA];
  const fieldValue = resolveFieldValue(image, items);
  let obj = resolvedValuesFromUserApplicationIdentityProfile;
  const singleStringOrSkeleton = obj.resolveSingleStringOrSkeleton(componentConfig, "name", resolveFieldValue);
  obj1 = resolvedValuesFromUserApplicationIdentityProfile;
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
    tmp11 = callback(tmp3(12278).ImageSkeleton, obj2);
    tmp12 = callback;
  }
  const items1 = [tmp11, ];
  const obj3 = { style: tmp.itemContent, children: null };
  if ("value" === singleStringOrSkeleton.status) {
    const obj4 = { variant: "text-xs/medium", lineClamp: 2, children: null };
    obj4[2] = singleStringOrSkeleton.text;
    let tmp12Result = tmp12(tmp3(4734).Text, obj4);
  } else {
    tmp12Result = tmp12(tmp3(12278).TextSkeleton, { variant: "text-xs/medium", widthChars: 6 });
  }
  const items2 = [tmp12Result, ];
  if ("value" === singleStringOrSkeleton1.status) {
    const obj5 = { variant: "text-xxs/medium", color: "text-subtle", lineClamp: 2, children: null };
    obj5[3] = singleStringOrSkeleton1.text;
    tmp12Result = tmp12(tmp3(4734).Text, obj5);
  } else {
    tmp12Result = tmp12(tmp3(12278).TextSkeleton, { variant: "text-xxs/medium", widthChars: 10 });
  }
  items2[1] = tmp12Result;
  obj3[1] = items2;
  items1[1] = closure_5(closure_3, obj3);
  obj[1] = items1;
  return closure_5(closure_3, obj);
}
noopAll;
({ Image: obj1, View: c3 } = get_ActivityIndicator);
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { grid: null, item: null, itemImage: null, itemContent: null };
createCacheKey = { flexDirection: "row", flexWrap: "wrap", rowGap: ThemesDefault.space.PX_16, columnGap: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: "47%", flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_12 };
obj1 = { width: "47%", flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_12 };
createCacheKey[2] = { width: 48, height: 48, borderRadius: ThemesDefault.radii.sm, overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj2 = { width: 48, height: 48, borderRadius: ThemesDefault.radii.sm, overflow: "hidden", backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE };
createCacheKey[3] = { flex: 1, gap: ThemesDefault.space.PX_4, minWidth: 0 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
let obj3 = { flex: 1, gap: ThemesDefault.space.PX_4, minWidth: 0 };
const result = require("set").fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetBottomCollectionLayout.tsx");

export default function UserProfileApplicationWidgetBottomCollectionLayout(arg0) {
  ({ bottomConfig, resolveFieldValue } = arg0);
  let obj = { style: callback3().grid, children: null };
  obj = { componentConfig: bottomConfig.components.item_1, resolveFieldValue };
  const items = [callback(CollectionItem, obj), , , ];
  obj = { componentConfig: bottomConfig.components.item_2, resolveFieldValue };
  items[1] = callback(CollectionItem, obj);
  items[2] = callback(CollectionItem, { componentConfig: bottomConfig.components.item_3, resolveFieldValue });
  items[3] = callback(CollectionItem, { componentConfig: bottomConfig.components.item_4, resolveFieldValue });
  obj[1] = items;
  return callback2(closure_3, obj);
};