// === Module 14054: PX_8 ===

// Module 14054 (PX_8)
import ThemesDefault from "Themes" /* 712 */;
import useCollectibleListLayout from "useCollectibleListLayout" /* 8395 */;
import EditCollectibleListItem from "EditCollectibleListItem" /* 8396 */;
import useProfileFrameSections from "useProfileFrameSections" /* 14053 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { isProfileFrameRecord } from "fromServer" /* 5308 */;
import { PROFILE_FRAME_ASPECT_RATIO as closure_6 } from "PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO" /* 8965 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
let c3 = importAllResult;
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
const PX_8 = ThemesDefault.space.PX_8;
let obj = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("useCollectibleListLayout").GUTTER_SIZE };
obj[0] = obj;
const createCacheKey = { height: require("useCollectibleListLayout").GUTTER_SIZE };
obj[1] = createCacheKey;
obj[2] = { width: "100%", height: "100%", paddingVertical: PX_8, overflow: "hidden", alignItems: "center", justifyContent: "center" };
let closure_11 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  ({ items, selectedSkuId: require, setSelectedProfileFrame } = arg0);
  ({ guildId: dependencyMap, size: closure_3 } = arg0);
  const tmp = callback3();
  items = [setSelectedProfileFrame];
  closure_4 = importAllResult.useCallback(() => {
    setSelectedProfileFrame(null);
  }, items);
  let obj = { style: tmp.row, children: null };
  const items1 = [...items, null, null];
  const substr = items1.slice(0, useCollectibleListLayout.ROW_SIZE);
  obj[1] = substr.map((item, index) => {
    if (item === useProfileFrameSections.NONE_ITEM) {
      let obj = { size: null, onPress: null, isSelected: null, asDefault: null };
      obj[0] = closure_3;
      obj[1] = closure_4;
      obj[2] = null == closure_0;
      obj[3] = null != closure_2;
      return closure_1_7(EditCollectibleListItem.EditCollectiblesListItemNone, obj, "none");
    } else if (item === useProfileFrameSections.SHOP_ITEM) {
      obj = { size: null, analyticsSource: null };
      obj[0] = closure_3;
      obj[1] = setSelectedProfileFrame(dependencyMap[10]).EDIT_PROFILE_FRAME_SHEET;
      return closure_1_7(EditCollectibleListItem.EditCollectiblesListItemShop, obj, "shop");
    } else if (isProfileFrameRecord(item)) {
      obj1 = { profileFrame: null, isSelected: null, setSelectedProfileFrame: null, size: null };
      obj1[0] = item;
      obj1[1] = closure_0 === item.skuId;
      obj1[2] = setSelectedProfileFrame;
      obj1[3] = closure_3;
      return closure_1_7(memoResult1, obj1, item.skuId);
    } else {
      obj = { style: null };
      const obj2 = { height: null, width: null };
      obj2[0] = closure_3;
      obj2[1] = closure_3;
      obj[0] = obj2;
      return closure_1_7(closure_4, obj, index);
    }
  });
  const items2 = [callback(closure_4, obj), ];
  obj = { style: tmp.rowSpacer };
  items2[1] = callback(closure_4, obj);
  obj[0] = items2;
  return callback2(closure_8, obj);
});
memoResult.displayName = "EditProfileFrameRow";
const memoResult1 = importAllResult.memo((isSelected) => {
  const profileFrame = isSelected.profileFrame;
  const setSelectedProfileFrame = isSelected.setSelectedProfileFrame;
  const size = isSelected.size;
  const items = [setSelectedProfileFrame, profileFrame];
  const callback = importAllResult.useCallback(() => {
    setSelectedProfileFrame({ skuId: profileFrame.skuId, type: profileFrame.type });
  }, items);
  { style: callback3().previewContainer, children: null };
  const obj = { profileFrame, previewWidth: size * closure_6, previewHeight: size - 2 * PX_8, profileBackgroundColor: null };
  const tmp = callback3();
  obj[3] = setSelectedProfileFrame(712).colors.BACKGROUND_BASE_LOW;
  obj[1] = callback(setSelectedProfileFrame(9225), obj);
  obj[5] = callback(View, obj);
  return callback(profileFrame(8396).EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditProfileFrameItem";
const result = require("obj132").fileFinishedImporting("modules/collectibles/profile_frames/native/EditProfileFrameSection.tsx");

export const EditProfileFrameRow = memoResult;