// discord_app/modules/collectibles/avatar_decorations/native/EditAvatarDecorationSection.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import AvatarDecorationConstants from "../AvatarDecorationConstants.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import AvatarDecorationRecord from "../../records/AvatarDecorationRecord.tsx";
import CutoutableAvatarDecorationDefault from "../../native/components/CutoutableAvatarDecoration.tsx";
import useAvatarDecorationSections from "../useAvatarDecorationSections.tsx";
import useCollectibleListLayout from "../../native/useCollectibleListLayout.tsx";
import CollectiblesEditUserProfileListItems from "../../native/CollectiblesEditUserProfileListItems.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let avatarDecoration;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
const View = react_native.View;
const isAvatarDecorationRecord = AvatarDecorationRecord.isAvatarDecorationRecord;
const AVATAR_DECORATION_SIZE = AvatarDecorationConstants.AVATAR_DECORATION_SIZE;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, rowSpacer: obj3 };
obj2 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: useCollectibleListLayout.GUTTER_SIZE,
};
createStyles = createStyles.createStyles;
obj3 = { height: useCollectibleListLayout.GUTTER_SIZE };
let closure_10 = createStyles(obj);
const memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (setSelectedAvatarDecoration) => {
        let guildId;
        let isTryItOut;
        let items;
        let items1;
        let selectedSkuId;
        let tmp6;
        let obj = selectedSkuId(guildId[8]);
        const cResult = obj.c(19);
        ({ items, selectedSkuId } = setSelectedAvatarDecoration);
        setSelectedAvatarDecoration = setSelectedAvatarDecoration.setSelectedAvatarDecoration;
        const tmp2 = guildId;
        guildId = setSelectedAvatarDecoration.guildId;
        ({ isTryItOut, size } = setSelectedAvatarDecoration);
        isTryItOut = tmp4;
        const tmp5 = closure_10();
        if (cResult[0] !== setSelectedAvatarDecoration) {
          const fn = function o() {
            setSelectedAvatarDecoration(null);
          };
          cResult[0] = setSelectedAvatarDecoration;
          cResult[1] = fn;
          tmp6 = fn;
        } else {
          tmp6 = cResult[1];
        }
        const onPress = tmp6;
        const isSelected = tmp7;
        if (cResult[2] === guildId) {
          if ((cResult[3] === null) == selectedSkuId) {
            if (cResult[4] === (undefined !== isTryItOut && isTryItOut)) {
              if (cResult[5] === items) {
                if (cResult[6] === tmp6) {
                  if (cResult[7] === selectedSkuId) {
                    if (cResult[8] === setSelectedAvatarDecoration) {
                      let tmp9;
                      if (cResult[9] === size) {
                        tmp9 = cResult[10];
                      }
                      if (cResult[11] === tmp5.row) {
                        let tmp11;
                        let tmp15;
                        if (cResult[12] === tmp9) {
                          tmp11 = cResult[13];
                        }
                        if (cResult[14] !== tmp5.rowSpacer) {
                          let obj2 = { style: tmp5.rowSpacer };
                          const tmp18 = closure_7(isTryItOut, obj2);
                          cResult[14] = tmp5.rowSpacer;
                          cResult[15] = tmp18;
                          tmp15 = tmp18;
                        } else {
                          tmp15 = cResult[15];
                        }
                        if (cResult[16] === tmp11) {
                          let tmp19;
                          if (cResult[17] === tmp15) {
                            tmp19 = cResult[18];
                          }
                          return tmp19;
                        }
                        let obj3 = { children: items1 };
                        items1 = [tmp11, tmp15];
                        const tmp22 = closure_9(closure_8, obj3);
                        cResult[16] = tmp11;
                        cResult[17] = tmp15;
                        cResult[18] = tmp22;
                        tmp19 = tmp22;
                      }
                      let obj4 = { style: tmp8, children: tmp9 };
                      const tmp14 = closure_7(isTryItOut, obj4);
                      cResult[11] = tmp5.row;
                      cResult[12] = tmp9;
                      cResult[13] = tmp14;
                      tmp11 = tmp14;
                    }
                  }
                }
              }
            }
          }
        }
        const items2 = [...items, null, null];
        const substr = items2.slice(0, selectedSkuId(tmp2[6]).ROW_SIZE);
        const mapped = substr.map((avatarDecoration, index) => {
          if (avatarDecoration === useAvatarDecorationSections.NONE_ITEM) {
            const obj2 = { size, onPress, isSelected, asDefault: null != guildId };
            return metroImportDefault(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
          } else if (avatarDecoration === useAvatarDecorationSections.SHOP_ITEM) {
            const obj3 = { size, analyticsSource: AnalyticsLocationDefault.EDIT_AVATAR_DECORATION_SHEET };
            const EditCollectiblesListItemShop = CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop;
            return metroImportDefault(EditCollectiblesListItemShop, obj3, "shop");
          } else if (isAvatarDecorationRecord(avatarDecoration)) {
            const obj4 = {
              avatarDecoration,
              isSelected: selectedSkuId === avatarDecoration.skuId,
              setSelectedAvatarDecoration,
              isTryItOut,
              size,
            };
            return metroImportDefault(unpackModuleId, obj4, avatarDecoration.skuId);
          } else {
            const obj = { style: size };
            size = { height: size, width: size };
            return metroImportDefault(View, obj, index);
          }
        });
        cResult[2] = guildId;
        cResult[3] = null == selectedSkuId;
        cResult[4] = undefined !== isTryItOut && isTryItOut;
        cResult[5] = items;
        cResult[6] = tmp6;
        cResult[7] = selectedSkuId;
        cResult[8] = setSelectedAvatarDecoration;
        cResult[9] = size;
        cResult[10] = mapped;
        tmp9 = mapped;
      }
    : (size) => {
        let isTryItOut;
        let items;
        let items3;
        let setSelectedAvatarDecoration;
        let substr;
        ({ items, selectedSkuId: require, setSelectedAvatarDecoration } = size);
        ({ guildId: dependencyMap, isTryItOut } = size);
        if (isTryItOut === undefined) {
          isTryItOut = false;
        }
        size = size.size;
        const tmp = closure_10();
        const items1 = [setSelectedAvatarDecoration];
        const onPress = isTryItOut.useCallback(() => {
          setSelectedAvatarDecoration(null);
        }, items1);
        let obj = { children: items3 };
        let obj2 = {
          style: tmp.row,
          children: substr.map((avatarDecoration, index) => {
            if (avatarDecoration === useAvatarDecorationSections.NONE_ITEM) {
              const obj2 = { size, onPress, isSelected: null == require, asDefault: null != dependencyMap };
              return metroImportDefault(
                CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone,
                obj2,
                "none",
              );
            } else if (avatarDecoration === useAvatarDecorationSections.SHOP_ITEM) {
              const obj3 = { size, analyticsSource: AnalyticsLocationDefault.EDIT_AVATAR_DECORATION_SHEET };
              const EditCollectiblesListItemShop = CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop;
              return metroImportDefault(EditCollectiblesListItemShop, obj3, "shop");
            } else if (isAvatarDecorationRecord(avatarDecoration)) {
              const obj4 = {
                avatarDecoration,
                isSelected: require === avatarDecoration.skuId,
                setSelectedAvatarDecoration,
                isTryItOut,
                size,
              };
              return metroImportDefault(unpackModuleId, obj4, avatarDecoration.skuId);
            } else {
              const obj = { style: size };
              size = { height: size, width: size };
              return metroImportDefault(View, obj, index);
            }
          }),
        };
        const items2 = [...items, null, null];
        substr = items2.slice(0, useCollectibleListLayout.ROW_SIZE);
        items3 = [closure_7(size, obj2)];
        let obj3 = { style: tmp.rowSpacer };
        items3[1] = closure_7(size, obj3);
        return closure_9(closure_8, obj);
      },
);
memoResult.displayName = "EditAvatarDecorationRow";
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (avatarDecoration) => {
        let isSelected;
        let isTryItOut;
        let setSelectedAvatarDecoration;
        const obj = react2;
        const cResult = obj.c(14);
        avatarDecoration = avatarDecoration.avatarDecoration;
        ({ isSelected, setSelectedAvatarDecoration } = avatarDecoration);
        ({ isTryItOut, size } = avatarDecoration);
        if (cResult[0] === avatarDecoration) {
          let tmp5;
          if (cResult[1] === setSelectedAvatarDecoration) {
            tmp5 = cResult[2];
          }
          if (cResult[3] === avatarDecoration) {
            let tmp6;
            if (cResult[4] === isSelected) {
              tmp6 = cResult[5];
            }
            if (cResult[6] === avatarDecoration.label) {
              if (cResult[7] === avatarDecoration.skuId) {
                if (cResult[8] === isSelected) {
                  if (cResult[9] === (undefined !== isTryItOut && isTryItOut)) {
                    if (cResult[10] === tmp5) {
                      if (cResult[11] === size) {
                        let tmp11;
                        if (cResult[12] === tmp6) {
                          tmp11 = cResult[13];
                        }
                        return tmp11;
                      }
                    }
                  }
                }
              }
            }
            const obj2 = {
              skuId: avatarDecoration.skuId,
              isSelected,
              onPress: tmp5,
              size,
              isTryItOut: undefined !== isTryItOut && isTryItOut,
              accessibilityLabel: avatarDecoration.label,
              children: tmp6,
            };
            const tmp13 = metroImportDefault(
              CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct,
              obj2,
            );
            cResult[6] = avatarDecoration.label;
            cResult[7] = avatarDecoration.skuId;
            cResult[8] = isSelected;
            cResult[9] = undefined !== isTryItOut && isTryItOut;
            cResult[10] = tmp5;
            cResult[11] = size;
            cResult[12] = tmp6;
            cResult[13] = tmp13;
            tmp11 = tmp13;
          }
          const obj3 = { avatarDecoration, size: AVATAR_DECORATION_SIZE, animate: isSelected };
          const tmp10 = metroImportDefault(CutoutableAvatarDecorationDefault, obj3);
          cResult[3] = avatarDecoration;
          cResult[4] = isSelected;
          cResult[5] = tmp10;
          tmp6 = tmp10;
        }
        const fn = function s() {
          setSelectedAvatarDecoration(avatarDecoration);
        };
        cResult[0] = avatarDecoration;
        cResult[1] = setSelectedAvatarDecoration;
        cResult[2] = fn;
        tmp5 = fn;
      }
    : (avatarDecoration) => {
        let isSelected;
        let obj2;
        let setSelectedAvatarDecoration;
        avatarDecoration = avatarDecoration.avatarDecoration;
        ({ isSelected, setSelectedAvatarDecoration } = avatarDecoration);
        let flag = avatarDecoration.isTryItOut;
        if (flag === undefined) {
          flag = false;
        }
        const items = [setSelectedAvatarDecoration, avatarDecoration];
        size = avatarDecoration.size;
        const callback = react.useCallback(() => {
          setSelectedAvatarDecoration(avatarDecoration);
        }, items);
        const obj = {
          skuId: avatarDecoration.skuId,
          isSelected,
          onPress: callback,
          size,
          isTryItOut: flag,
          accessibilityLabel: avatarDecoration.label,
          children: metroImportDefault(CutoutableAvatarDecorationDefault, obj2),
        };
        const EditCollectiblesListItemProduct = CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct;
        obj2 = { avatarDecoration, size: AVATAR_DECORATION_SIZE, animate: isSelected };
        return metroImportDefault(EditCollectiblesListItemProduct, obj);
      },
);
const unpackModuleId = memo2Result;
memo2Result.displayName = "EditAvatarDecorationItem";
let size = size_mod;
const result = size.fileFinishedImporting(
  "modules/collectibles/avatar_decorations/native/EditAvatarDecorationSection.tsx",
);

export const EditAvatarDecorationRow = memoResult;
