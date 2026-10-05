// === Module 14462: EditProfileFrameSection ===

// Module 14462 (EditProfileFrameSection)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 8478 */;
import useCollectibleListLayout from "useCollectibleListLayout" /* 13009 */;
import CollectiblesEditUserProfileListItems from "CollectiblesEditUserProfileListItems" /* 13010 */;
import useProfileFrameSections from "useProfileFrameSections" /* 14461 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isProfileFrameRecord = fn(7060).isProfileFrameRecord;
let closure_6 = fn(7893).PROFILE_FRAME_ASPECT_RATIO;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(4890);
let obj = { row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: fn(13009).GUTTER_SIZE }, rowSpacer: null, previewContainer: null };
let obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: fn(13009).GUTTER_SIZE };
obj.rowSpacer = { height: fn(13009).GUTTER_SIZE };
obj.previewContainer = { width: "100%", height: "100%", paddingVertical: PX_8, overflow: "hidden", alignItems: "center", justifyContent: "center" };
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((setSelectedProfileFrame) => {
  const cResult = selectedSkuId(guildId[9]).c(18);
  ({ items, selectedSkuId } = setSelectedProfileFrame);
  setSelectedProfileFrame = setSelectedProfileFrame.setSelectedProfileFrame;
  guildId = setSelectedProfileFrame.guildId;
  let size = setSelectedProfileFrame.size;
  const tmp4 = closure_11();
  if (cResult[0] !== setSelectedProfileFrame) {
    const fn = function o() {
      setSelectedProfileFrame(null);
    };
    cResult[0] = setSelectedProfileFrame;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const onPress = tmp5;
  const isSelected = tmp6;
  if (cResult[2] === guildId) {
    if (cResult[3] === tmp6) {
      if (cResult[4] === items) {
        if (cResult[5] === tmp5) {
          if (cResult[6] === selectedSkuId) {
            if (cResult[7] === setSelectedProfileFrame) {
              if (cResult[8] === size) {
                let tmp8 = cResult[9];
              }
              if (cResult[10] === tmp4.row) {
                if (cResult[11] === tmp8) {
                  let tmp10 = cResult[12];
                }
                if (cResult[13] !== tmp4.rowSpacer) {
                  let obj2 = { style: tmp4.rowSpacer };
                  const tmp17 = closure_7(onPress, obj2);
                  cResult[13] = tmp4.rowSpacer;
                  cResult[14] = tmp17;
                  let tmp14 = tmp17;
                } else {
                  tmp14 = cResult[14];
                }
                if (cResult[15] === tmp10) {
                  if (cResult[16] === tmp14) {
                    let tmp18 = cResult[17];
                  }
                  return tmp18;
                }
                let obj3 = { children: null };
                const items1 = [tmp10, tmp14];
                obj3.children = items1;
                const tmp21 = closure_9(closure_8, obj3);
                cResult[15] = tmp10;
                cResult[16] = tmp14;
                cResult[17] = tmp21;
                tmp18 = tmp21;
              }
              let obj4 = { style: tmp7, children: tmp8 };
              const tmp13 = closure_7(onPress, obj4);
              cResult[10] = tmp4.row;
              cResult[11] = tmp8;
              cResult[12] = tmp13;
              tmp10 = tmp13;
            }
          }
        }
      }
    }
  }
  const items2 = [...items, null, null];
  const substr = items2.slice(0, selectedSkuId(guildId[7]).ROW_SIZE);
  const mapped = substr.map((profileFrame, index) => {
    if (profileFrame === useProfileFrameSections.NONE_ITEM) {
      const obj2 = { size, onPress, isSelected, asDefault: null != guildId };
      return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
    } else if (profileFrame === useProfileFrameSections.SHOP_ITEM) {
      const obj3 = { size, analyticsSource: AnalyticsLocationDefault.EDIT_PROFILE_FRAME_SHEET };
      return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop, obj3, "shop");
    } else if (isProfileFrameRecord(profileFrame)) {
      const obj4 = { profileFrame, isSelected: selectedSkuId === profileFrame.skuId, setSelectedProfileFrame, size };
      return React5(memoResult1, obj4, profileFrame.skuId);
    } else {
      const obj = { style: null };
      size = { height: null, width: null };
      size.height = size;
      size.width = size;
      obj.style = size;
      return React5(View, obj, index);
    }
  });
  cResult[2] = guildId;
  cResult[3] = null == selectedSkuId;
  cResult[4] = items;
  cResult[5] = tmp5;
  cResult[6] = selectedSkuId;
  cResult[7] = setSelectedProfileFrame;
  cResult[8] = size;
  cResult[9] = mapped;
  tmp8 = mapped;
  let obj = selectedSkuId(guildId[9]);
}) : ((arg0) => {
  ({ items, selectedSkuId: require, setSelectedProfileFrame } = arg0);
  ({ guildId: dependencyMap, size: noop } = arg0);
  const tmp = closure_11();
  const items1 = [setSelectedProfileFrame];
  const onPress = noop.useCallback(() => {
    setSelectedProfileFrame(null);
  }, items1);
  let obj = { children: null };
  let obj2 = { style: tmp.row, children: null };
  const items2 = [...items, null, null];
  const substr = items2.slice(0, useCollectibleListLayout.ROW_SIZE);
  obj2.children = substr.map((profileFrame, index) => {
    if (profileFrame === useProfileFrameSections.NONE_ITEM) {
      const obj2 = { size: width, onPress, isSelected: null == closure_1_0, asDefault: null != dependencyMap };
      return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
    } else if (profileFrame === useProfileFrameSections.SHOP_ITEM) {
      const obj3 = { size: width, analyticsSource: AnalyticsLocationDefault.EDIT_PROFILE_FRAME_SHEET };
      return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop, obj3, "shop");
    } else if (isProfileFrameRecord(profileFrame)) {
      const obj4 = { profileFrame, isSelected: closure_1_0 === profileFrame.skuId, setSelectedProfileFrame, size: width };
      return React5(memoResult1, obj4, profileFrame.skuId);
    } else {
      const obj = { style: null };
      const size = { height: width, width };
      obj.style = size;
      return React5(View, obj, index);
    }
  });
  const items3 = [closure_7(onPress, obj2), closure_7(onPress, { style: tmp.rowSpacer })];
  obj.children = items3;
  return closure_9(closure_8, obj);
}));
memoResult.displayName = "EditProfileFrameRow";
ReactCompilerGating = fn(558);
const memoResult1 = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((profileFrame) => {
  const cResult = c.c(18);
  profileFrame = profileFrame.profileFrame;
  ({ isSelected, setSelectedProfileFrame } = profileFrame);
  const size = profileFrame.size;
  const tmp4 = closure_11();
  if (cResult[0] === profileFrame.skuId) {
    if (cResult[1] === profileFrame.type) {
      if (cResult[2] === setSelectedProfileFrame) {
        let tmp5 = cResult[3];
      }
      const skuId = profileFrame.skuId;
      const result = size * closure_6;
      const diff = size - 2 * PX_8;
      if (cResult[4] === profileFrame) {
        if (cResult[5] === result) {
          if (cResult[6] === diff) {
            let tmp10 = cResult[7];
          }
          if (cResult[8] === tmp4.previewContainer) {
            if (cResult[9] === tmp10) {
              let tmp15 = cResult[10];
            }
            if (cResult[11] === isSelected) {
              if (cResult[12] === tmp5) {
                if (cResult[13] === profileFrame.label) {
                  if (cResult[14] === size) {
                    if (cResult[15] === skuId) {
                      if (cResult[16] === tmp15) {
                        let tmp19 = cResult[17];
                      }
                      return tmp19;
                    }
                  }
                }
              }
            }
            const obj2 = { skuId, isSelected, onPress: tmp5, size, accessibilityLabel: profileFrame.label, children: tmp15 };
            const tmp21 = React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct, obj2);
            cResult[11] = isSelected;
            cResult[12] = tmp5;
            cResult[13] = profileFrame.label;
            cResult[14] = size;
            cResult[15] = skuId;
            cResult[16] = tmp15;
            cResult[17] = tmp21;
            tmp19 = tmp21;
          }
          const obj3 = { style: tmp4.previewContainer, children: tmp10 };
          const tmp18 = React5(View, obj3);
          cResult[8] = tmp4.previewContainer;
          cResult[9] = tmp10;
          cResult[10] = tmp18;
          tmp15 = tmp18;
        }
      }
      const obj4 = { profileFrame, previewWidth: result, previewHeight: diff, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
      const tmp14 = React5(ProfileFrameSamplePreviewDefault, obj4);
      cResult[4] = profileFrame;
      cResult[5] = result;
      cResult[6] = diff;
      cResult[7] = tmp14;
      tmp10 = tmp14;
    }
  }
  const fn = function s() {
    setSelectedProfileFrame({ skuId: profileFrame.skuId, type: profileFrame.type });
  };
  cResult[0] = profileFrame.skuId;
  cResult[1] = profileFrame.type;
  cResult[2] = setSelectedProfileFrame;
  cResult[3] = fn;
  tmp5 = fn;
}) : ((isSelected) => {
  const profileFrame = isSelected.profileFrame;
  const setSelectedProfileFrame = isSelected.setSelectedProfileFrame;
  const size = isSelected.size;
  const items = [setSelectedProfileFrame, profileFrame];
  const callback = noop.useCallback(() => {
    setSelectedProfileFrame({ skuId: profileFrame.skuId, type: profileFrame.type });
  }, items);
  const obj = { skuId: profileFrame.skuId, isSelected: isSelected.isSelected, onPress: callback, size, accessibilityLabel: profileFrame.label, children: null };
  const obj2 = { style: closure_11().previewContainer, children: null };
  const obj3 = { profileFrame, previewWidth: size * closure_6, previewHeight: size - 2 * PX_8, profileBackgroundColor: null };
  const tmp = closure_11();
  obj3.profileBackgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOW;
  obj2.children = React5(ProfileFrameSamplePreviewDefault, obj3);
  obj.children = React5(View, obj2);
  return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct, obj);
}));
memoResult1.displayName = "EditProfileFrameItem";
let size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/EditProfileFrameSection.tsx");

export const EditProfileFrameRow = memoResult;