// discord_app/modules/collectibles/profile_frames/native/EditProfileFrameSection.tsx
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import { isProfileFrameRecord } from "fromServer";
import { PROFILE_FRAME_ASPECT_RATIO as closure_6 } from "PROFILE_FRAME_RESPONSIVE_RAIL_MIN_ASPECT_RATIO";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { useCollectibleListLayout } from "../../native/useCollectibleListLayout.tsx";

let c9;
let error;
let metroImportAll;
const require = arg1;
let c3 = importAllResult;
({ jsx: error, Fragment: metroImportAll, jsxs: c9 } = jsxProd);
const PX_8 = require("Themes").space.PX_8;
let obj = { row: null, rowSpacer: null, previewContainer: null };
obj = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: require("useCollectibleListLayout").GUTTER_SIZE };
obj[0] = obj;
createCacheKey = { height: require("useCollectibleListLayout").GUTTER_SIZE };
obj[1] = createCacheKey;
obj[2] = { width: "100%", height: "100%", paddingVertical: PX_8, overflow: "hidden", alignItems: "center", justifyContent: "center" };
let closure_11 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((arg0) => {
  let closure_3;
  let dependencyMap;
  let items;
  let require;
  let setSelectedProfileFrame;
  ({ items, selectedSkuId: require, setSelectedProfileFrame } = arg0);
  ({ guildId: dependencyMap, size: closure_3 } = arg0);
  let closure_4;
  const tmp = callback3();
  items = [setSelectedProfileFrame];
  closure_4 = importAllResult.useCallback(() => {
    setSelectedProfileFrame(null);
  }, items);
  let obj = { children: null };
  obj = { style: tmp.row, children: null };
  const items1 = [...items, null, null];
  const substr = items1.slice(0, useCollectibleListLayout.ROW_SIZE);
  obj[1] = substr.map((skuId) => {
    if (skuId === outer1_0(outer1_2[8]).NONE_ITEM) {
      let obj = { size: null, onPress: null, isSelected: null, asDefault: null };
      obj[0] = closure_3;
      obj[1] = closure_4;
      obj[2] = null == closure_0;
      obj[3] = null != closure_2;
      return outer1_7(tmp(tmp2[9]).EditCollectiblesListItemNone, obj, "none");
    } else if (skuId === tmp(tmp2[8]).SHOP_ITEM) {
      obj = { size: null, analyticsSource: null };
      obj[0] = closure_3;
      obj[1] = setSelectedProfileFrame(tmp2[10]).EDIT_PROFILE_FRAME_SHEET;
      return outer1_7(tmp(tmp2[9]).EditCollectiblesListItemShop, obj, "shop");
    } else if (outer1_5(skuId)) {
      const obj1 = { profileFrame: null, isSelected: null, setSelectedProfileFrame: null, size: null };
      obj1[0] = skuId;
      obj1[1] = closure_0 === skuId.skuId;
      obj1[2] = setSelectedProfileFrame;
      obj1[3] = closure_3;
      return outer1_7(outer1_12, obj1, skuId.skuId);
    } else {
      obj = { style: null };
      const obj2 = { height: null, width: null };
      obj2[0] = closure_3;
      obj2[1] = closure_3;
      obj[0] = obj2;
      return outer1_7(closure_4, obj, arg1);
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
  let obj = { skuId: profileFrame.skuId, isSelected: isSelected.isSelected, onPress: callback, size, accessibilityLabel: profileFrame.label, children: null };
  obj = { style: callback3().previewContainer, children: null };
  obj = { profileFrame, previewWidth: size * closure_6, previewHeight: size - 2 * PX_8, profileBackgroundColor: null };
  const tmp = callback3();
  obj[3] = setSelectedProfileFrame(712).colors.BACKGROUND_BASE_LOW;
  obj[1] = callback(setSelectedProfileFrame(9225), obj);
  obj[5] = callback(View, obj);
  return callback(profileFrame(8396).EditCollectiblesListItemProduct, obj);
});
memoResult1.displayName = "EditProfileFrameItem";
const result = require("fromServer").fileFinishedImporting("modules/collectibles/profile_frames/native/EditProfileFrameSection.tsx");

export const EditProfileFrameRow = memoResult;