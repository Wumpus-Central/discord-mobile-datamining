// === Module 14462: EditProfileFrameSection ===

// Module 14462 (EditProfileFrameSection)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import ProfileFrameRecord from "ProfileFrameRecord" /* 7060 */;
import ProfileFrameConstants from "ProfileFrameConstants" /* 7893 */;
import ProfileFrameSamplePreviewDefault from "ProfileFrameSamplePreview" /* 8478 */;
import useCollectibleListLayout from "useCollectibleListLayout" /* 13009 */;
import CollectiblesEditUserProfileListItems from "CollectiblesEditUserProfileListItems" /* 13010 */;
import useProfileFrameSections from "useProfileFrameSections" /* 14461 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let profileFrame;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
const isProfileFrameRecord = ProfileFrameRecord.isProfileFrameRecord;
let closure_6 = ProfileFrameConstants.PROFILE_FRAME_ASPECT_RATIO;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
const PX_8 = nativeDefault.space.PX_8;
let createStyles = createStyles_mod;
let obj = { row: obj2, rowSpacer: obj3, previewContainer: { width: "100%", height: "100%", paddingVertical: PX_8, overflow: "hidden", alignItems: "center", justifyContent: "center" } };
obj2 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: useCollectibleListLayout.GUTTER_SIZE };
createStyles = createStyles.createStyles;
obj3 = { height: useCollectibleListLayout.GUTTER_SIZE };
let closure_11 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((setSelectedProfileFrame) => {
  let guildId;
  let items;
  let items1;
  let selectedSkuId;
  let tmp5;
  let obj = selectedSkuId(guildId[9]);
  const cResult = obj.c(18);
  ({ items, selectedSkuId } = setSelectedProfileFrame);
  setSelectedProfileFrame = setSelectedProfileFrame.setSelectedProfileFrame;
  const tmp2 = guildId;
  guildId = setSelectedProfileFrame.guildId;
  size = setSelectedProfileFrame.size;
  const tmp4 = closure_11();
  if (cResult[0] !== setSelectedProfileFrame) {
    const fn = function o() {
      setSelectedProfileFrame(null);
    };
    cResult[0] = setSelectedProfileFrame;
    cResult[1] = fn;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  const onPress = tmp5;
  const isSelected = tmp6;
  if (cResult[2] === guildId) {
    if (cResult[3] === null == selectedSkuId) {
      if (cResult[4] === items) {
        if (cResult[5] === tmp5) {
          if (cResult[6] === selectedSkuId) {
            if (cResult[7] === setSelectedProfileFrame) {
              let tmp8;
              if (cResult[8] === size) {
                tmp8 = cResult[9];
              }
              if (cResult[10] === tmp4.row) {
                let tmp10;
                let tmp14;
                if (cResult[11] === tmp8) {
                  tmp10 = cResult[12];
                }
                if (cResult[13] !== tmp4.rowSpacer) {
                  let obj2 = { style: tmp4.rowSpacer };
                  const tmp17 = closure_7(onPress, obj2);
                  cResult[13] = tmp4.rowSpacer;
                  cResult[14] = tmp17;
                  tmp14 = tmp17;
                } else {
                  tmp14 = cResult[14];
                }
                if (cResult[15] === tmp10) {
                  let tmp18;
                  if (cResult[16] === tmp14) {
                    tmp18 = cResult[17];
                  }
                  return tmp18;
                }
                let obj3 = { children: items1 };
                items1 = [tmp10, tmp14];
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
  const substr = items2.slice(0, selectedSkuId(tmp2[7]).ROW_SIZE);
  const mapped = substr.map((profileFrame, index) => {
    if (profileFrame === useProfileFrameSections.NONE_ITEM) {
      const obj2 = { size, onPress, isSelected, asDefault: null != guildId };
      return metroImportDefault(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
    } else if (profileFrame === useProfileFrameSections.SHOP_ITEM) {
      const obj3 = { size, analyticsSource: AnalyticsLocationDefault.EDIT_PROFILE_FRAME_SHEET };
      const EditCollectiblesListItemShop = CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop;
      return metroImportDefault(EditCollectiblesListItemShop, obj3, "shop");
    } else if (isProfileFrameRecord(profileFrame)) {
      const obj4 = { profileFrame, isSelected: selectedSkuId === profileFrame.skuId, setSelectedProfileFrame, size };
      return metroImportDefault(memo2Result, obj4, profileFrame.skuId);
    } else {
      const obj = { style: size };
      size = { height: size, width: size };
      return metroImportDefault(View, obj, index);
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
}) : ((arg0) => {
  let items;
  let items3;
  let setSelectedProfileFrame;
  let substr;
  ({ items, selectedSkuId: require, setSelectedProfileFrame } = arg0);
  ({ guildId: dependencyMap, size: react } = arg0);
  const tmp = closure_11();
  const items1 = [setSelectedProfileFrame];
  const onPress = react.useCallback(() => {
    setSelectedProfileFrame(null);
  }, items1);
  let obj = { children: items3 };
  let obj2 = {
    style: tmp.row,
    children: substr.map((profileFrame, index) => {
      if (profileFrame === useProfileFrameSections.NONE_ITEM) {
        const obj2 = { size: width, onPress, isSelected: null == require, asDefault: null != dependencyMap };
        return metroImportDefault(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
      } else if (profileFrame === useProfileFrameSections.SHOP_ITEM) {
        const obj3 = { size: width, analyticsSource: AnalyticsLocationDefault.EDIT_PROFILE_FRAME_SHEET };
        const EditCollectiblesListItemShop = CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop;
        return metroImportDefault(EditCollectiblesListItemShop, obj3, "shop");
      } else if (isProfileFrameRecord(profileFrame)) {
        const obj4 = { profileFrame, isSelected: require === profileFrame.skuId, setSelectedProfileFrame, size: width };
        return metroImportDefault(memo2Result, obj4, profileFrame.skuId);
      } else {
        const obj = { style: size };
        size = { height: width, width };
        return metroImportDefault(View, obj, index);
      }
    })
  };
  const items2 = [...items, null, null];
  substr = items2.slice(0, useCollectibleListLayout.ROW_SIZE);
  items3 = [closure_7(onPress, obj2), ];
  let obj3 = { style: tmp.rowSpacer };
  items3[1] = closure_7(onPress, obj3);
  return closure_9(closure_8, obj);
}));
memoResult.displayName = "EditProfileFrameRow";
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(ReactCompilerGating.isReactCompilerEnabled() ? ((profileFrame) => {
  let isSelected;
  let setSelectedProfileFrame;
  let obj = react2;
  const cResult = obj.c(18);
  profileFrame = profileFrame.profileFrame;
  ({ isSelected, setSelectedProfileFrame } = profileFrame);
  size = profileFrame.size;
  const tmp4 = closure_11();
  if (cResult[0] === profileFrame.skuId) {
    if (cResult[1] === profileFrame.type) {
      let tmp5;
      if (cResult[2] === setSelectedProfileFrame) {
        tmp5 = cResult[3];
      }
      const skuId = profileFrame.skuId;
      const result = size * closure_6;
      const diff = size - 2 * PX_8;
      if (cResult[4] === profileFrame) {
        if (cResult[5] === result) {
          let tmp10;
          if (cResult[6] === diff) {
            tmp10 = cResult[7];
          }
          if (cResult[8] === tmp4.previewContainer) {
            let tmp15;
            if (cResult[9] === tmp10) {
              tmp15 = cResult[10];
            }
            if (cResult[11] === isSelected) {
              if (cResult[12] === tmp5) {
                if (cResult[13] === profileFrame.label) {
                  if (cResult[14] === size) {
                    if (cResult[15] === skuId) {
                      let tmp19;
                      if (cResult[16] === tmp15) {
                        tmp19 = cResult[17];
                      }
                      return tmp19;
                    }
                  }
                }
              }
            }
            const obj2 = { skuId, isSelected, onPress: tmp5, size, accessibilityLabel: profileFrame.label, children: tmp15 };
            const tmp21 = metroImportDefault(CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct, obj2);
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
          const tmp18 = metroImportDefault(View, obj3);
          cResult[8] = tmp4.previewContainer;
          cResult[9] = tmp10;
          cResult[10] = tmp18;
          tmp15 = tmp18;
        }
      }
      const obj4 = { profileFrame, previewWidth: result, previewHeight: diff, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
      const tmp13 = ProfileFrameSamplePreviewDefault;
      const tmp14 = metroImportDefault(tmp13, obj4);
      cResult[4] = profileFrame;
      cResult[5] = result;
      cResult[6] = diff;
      cResult[7] = tmp14;
      tmp10 = tmp14;
    }
  }
  const fn = function s() {
    const obj = { skuId: profileFrame.skuId, type: profileFrame.type };
    setSelectedProfileFrame(obj);
  };
  cResult[0] = profileFrame.skuId;
  cResult[1] = profileFrame.type;
  cResult[2] = setSelectedProfileFrame;
  cResult[3] = fn;
  tmp5 = fn;
}) : ((profileFrame) => {
  let obj2;
  let obj3;
  let tmp3;
  profileFrame = profileFrame.profileFrame;
  const setSelectedProfileFrame = profileFrame.setSelectedProfileFrame;
  size = profileFrame.size;
  const isSelected = profileFrame.isSelected;
  const items = [setSelectedProfileFrame, profileFrame];
  const tmp = closure_11();
  const callback = react.useCallback(() => {
    const obj = { skuId: profileFrame.skuId, type: profileFrame.type };
    setSelectedProfileFrame(obj);
  }, items);
  let obj = { skuId: profileFrame.skuId, isSelected, onPress: callback, size, accessibilityLabel: profileFrame.label, children: metroImportDefault(View, obj2) };
  obj2 = { style: tmp.previewContainer, children: metroImportDefault(tmp3, obj3) };
  const EditCollectiblesListItemProduct = CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct;
  obj3 = { profileFrame, previewWidth: size * closure_6, previewHeight: size - 2 * PX_8, profileBackgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  tmp3 = ProfileFrameSamplePreviewDefault;
  return metroImportDefault(EditCollectiblesListItemProduct, obj);
}));
memo2Result.displayName = "EditProfileFrameItem";
let size = size_mod;
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/EditProfileFrameSection.tsx");

export const EditProfileFrameRow = memoResult;