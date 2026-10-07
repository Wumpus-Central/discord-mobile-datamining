// discord_app/modules/collectibles/avatar_decorations/native/EditAvatarDecorationSection.tsx
import c from "../../../../../_runtime/00576_c.js";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import CutoutableAvatarDecorationDefault from "../../native/components/CutoutableAvatarDecoration.tsx";
import useAvatarDecorationSections from "../useAvatarDecorationSections.tsx";
import useCollectibleListLayout from "../../native/useCollectibleListLayout.tsx";
import CollectiblesEditUserProfileListItems from "../../native/CollectiblesEditUserProfileListItems.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const isAvatarDecorationRecord = fn(7071).isAvatarDecorationRecord;
const AVATAR_DECORATION_SIZE = fn(1403).AVATAR_DECORATION_SIZE;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4896);
let obj = {
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: fn(13028).GUTTER_SIZE,
  },
  rowSpacer: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: fn(13028).GUTTER_SIZE,
};
obj.rowSpacer = { height: fn(13028).GUTTER_SIZE };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (setSelectedAvatarDecoration) => {
        const cResult = selectedSkuId(guildId[8]).c(19);
        ({ items, selectedSkuId } = setSelectedAvatarDecoration);
        setSelectedAvatarDecoration = setSelectedAvatarDecoration.setSelectedAvatarDecoration;
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
          let tmp6 = fn;
        } else {
          tmp6 = cResult[1];
        }
        const onPress = tmp6;
        const isSelected = tmp7;
        if (cResult[2] === guildId) {
          if (cResult[3] === tmp7) {
            if (cResult[4] === tmp4) {
              if (cResult[5] === items) {
                if (cResult[6] === tmp6) {
                  if (cResult[7] === selectedSkuId) {
                    if (cResult[8] === setSelectedAvatarDecoration) {
                      if (cResult[9] === size) {
                        let tmp9 = cResult[10];
                      }
                      if (cResult[11] === tmp5.row) {
                        if (cResult[12] === tmp9) {
                          let tmp11 = cResult[13];
                        }
                        if (cResult[14] !== tmp5.rowSpacer) {
                          let obj2 = { style: tmp5.rowSpacer };
                          const tmp18 = closure_7(isTryItOut, obj2);
                          cResult[14] = tmp5.rowSpacer;
                          cResult[15] = tmp18;
                          let tmp15 = tmp18;
                        } else {
                          tmp15 = cResult[15];
                        }
                        if (cResult[16] === tmp11) {
                          if (cResult[17] === tmp15) {
                            let tmp19 = cResult[18];
                          }
                          return tmp19;
                        }
                        let obj3 = { children: null };
                        const items1 = [tmp11, tmp15];
                        obj3.children = items1;
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
        const substr = items2.slice(0, selectedSkuId(guildId[6]).ROW_SIZE);
        const mapped = substr.map((avatarDecoration, index) => {
          if (avatarDecoration === useAvatarDecorationSections.NONE_ITEM) {
            const obj2 = { size, onPress, isSelected, asDefault: null != guildId };
            return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
          } else if (avatarDecoration === useAvatarDecorationSections.SHOP_ITEM) {
            const obj3 = { size, analyticsSource: AnalyticsLocationDefault.EDIT_AVATAR_DECORATION_SHEET };
            return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop, obj3, "shop");
          } else if (isAvatarDecorationRecord(avatarDecoration)) {
            const obj4 = {
              avatarDecoration,
              isSelected: selectedSkuId === avatarDecoration.skuId,
              setSelectedAvatarDecoration,
              isTryItOut,
              size,
            };
            return React5(memoResult1, obj4, avatarDecoration.skuId);
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
        cResult[4] = undefined !== isTryItOut && isTryItOut;
        cResult[5] = items;
        cResult[6] = tmp6;
        cResult[7] = selectedSkuId;
        cResult[8] = setSelectedAvatarDecoration;
        cResult[9] = size;
        cResult[10] = mapped;
        tmp9 = mapped;
        let obj = selectedSkuId(guildId[8]);
      }
    : (size) => {
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
        let obj = { children: null };
        let obj2 = { style: tmp.row, children: null };
        const items2 = [...items, null, null];
        const substr = items2.slice(0, useCollectibleListLayout.ROW_SIZE);
        obj2.children = substr.map((avatarDecoration, index) => {
          if (avatarDecoration === useAvatarDecorationSections.NONE_ITEM) {
            const obj2 = { size, onPress, isSelected: null == closure_1_0, asDefault: null != dependencyMap };
            return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
          } else if (avatarDecoration === useAvatarDecorationSections.SHOP_ITEM) {
            const obj3 = { size, analyticsSource: AnalyticsLocationDefault.EDIT_AVATAR_DECORATION_SHEET };
            return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop, obj3, "shop");
          } else if (isAvatarDecorationRecord(avatarDecoration)) {
            const obj4 = {
              avatarDecoration,
              isSelected: closure_1_0 === avatarDecoration.skuId,
              setSelectedAvatarDecoration,
              isTryItOut,
              size,
            };
            return React5(memoResult1, obj4, avatarDecoration.skuId);
          } else {
            const obj = { style: null };
            size = { height: null, width: null };
            size.height = size;
            size.width = size;
            obj.style = size;
            return React5(View, obj, index);
          }
        });
        const items3 = [closure_7(size, obj2), closure_7(size, { style: tmp.rowSpacer })];
        obj.children = items3;
        return closure_9(closure_8, obj);
      },
);
memoResult.displayName = "EditAvatarDecorationRow";
ReactCompilerGating = fn(558);
const memoResult1 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (avatarDecoration) => {
        const cResult = c.c(14);
        avatarDecoration = avatarDecoration.avatarDecoration;
        ({ isSelected, setSelectedAvatarDecoration } = avatarDecoration);
        ({ isTryItOut, size } = avatarDecoration);
        if (cResult[0] === avatarDecoration) {
          if (cResult[1] === setSelectedAvatarDecoration) {
            let tmp5 = cResult[2];
          }
          if (cResult[3] === avatarDecoration) {
            if (cResult[4] === isSelected) {
              let tmp6 = cResult[5];
            }
            if (cResult[6] === avatarDecoration.label) {
              if (cResult[7] === avatarDecoration.skuId) {
                if (cResult[8] === isSelected) {
                  if (cResult[9] === tmp4) {
                    if (cResult[10] === tmp5) {
                      if (cResult[11] === size) {
                        if (cResult[12] === tmp6) {
                          let tmp11 = cResult[13];
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
              isTryItOut: tmp4,
              accessibilityLabel: avatarDecoration.label,
              children: tmp6,
            };
            const tmp13 = React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct, obj2);
            cResult[6] = avatarDecoration.label;
            cResult[7] = avatarDecoration.skuId;
            cResult[8] = isSelected;
            cResult[9] = tmp4;
            cResult[10] = tmp5;
            cResult[11] = size;
            cResult[12] = tmp6;
            cResult[13] = tmp13;
            tmp11 = tmp13;
          }
          const obj3 = { avatarDecoration, size: AVATAR_DECORATION_SIZE, animate: isSelected };
          const tmp10 = React5(CutoutableAvatarDecorationDefault, obj3);
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
        avatarDecoration = avatarDecoration.avatarDecoration;
        ({ isSelected, setSelectedAvatarDecoration } = avatarDecoration);
        let flag = avatarDecoration.isTryItOut;
        if (flag === undefined) {
          flag = false;
        }
        const items = [setSelectedAvatarDecoration, avatarDecoration];
        const callback = noop.useCallback(() => {
          setSelectedAvatarDecoration(avatarDecoration);
        }, items);
        const obj = {
          skuId: avatarDecoration.skuId,
          isSelected,
          onPress: callback,
          size: avatarDecoration.size,
          isTryItOut: flag,
          accessibilityLabel: avatarDecoration.label,
          children: React5(CutoutableAvatarDecorationDefault, {
            avatarDecoration,
            size: AVATAR_DECORATION_SIZE,
            animate: isSelected,
          }),
        };
        return React5(CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct, obj);
      },
);
memoResult1.displayName = "EditAvatarDecorationItem";
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/collectibles/avatar_decorations/native/EditAvatarDecorationSection.tsx",
);

export const EditAvatarDecorationRow = memoResult;
