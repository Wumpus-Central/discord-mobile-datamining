// discord_app/modules/collectibles/nameplates/native/EditNameplateSection.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import utils from "../utils.tsx";
import NameplateRecord from "../../records/NameplateRecord.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import NameplateDefault from "Nameplate.tsx";
import useCollectibleListLayout from "../../native/useCollectibleListLayout.tsx";
import CollectiblesEditUserProfileListItems from "../../native/CollectiblesEditUserProfileListItems.tsx";
import useNameplateSections from "../useNameplateSections.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let nameplate;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const isNameplateRecord = NameplateRecord.isNameplateRecord;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, rowSpacer: obj3, nameplate: { overflow: "hidden" } };
obj2 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: useCollectibleListLayout.GUTTER_SIZE,
};
createStyles = createStyles.createStyles;
obj3 = { height: useCollectibleListLayout.GUTTER_SIZE };
let closure_9 = createStyles(obj);
let memo = react.memo;
let ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (setSelectedNameplate) => {
        let guildId;
        let items;
        let items1;
        let selectedSkuId;
        let tmp5;
        let obj = selectedSkuId(guildId[7]);
        const cResult = obj.c(18);
        ({ items, selectedSkuId } = setSelectedNameplate);
        setSelectedNameplate = setSelectedNameplate.setSelectedNameplate;
        const tmp2 = guildId;
        guildId = setSelectedNameplate.guildId;
        size = setSelectedNameplate.size;
        const tmp4 = closure_9();
        if (cResult[0] !== setSelectedNameplate) {
          const fn = function n() {
            setSelectedNameplate(null);
          };
          cResult[0] = setSelectedNameplate;
          cResult[1] = fn;
          tmp5 = fn;
        } else {
          tmp5 = cResult[1];
        }
        const onPress = tmp5;
        const isSelected = tmp6;
        if (cResult[2] === guildId) {
          if ((cResult[3] === null) == selectedSkuId) {
            if (cResult[4] === items) {
              if (cResult[5] === tmp5) {
                if (cResult[6] === selectedSkuId) {
                  if (cResult[7] === setSelectedNameplate) {
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
                        const tmp17 = closure_6(onPress, obj2);
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
                      const tmp21 = closure_8(closure_7, obj3);
                      cResult[15] = tmp10;
                      cResult[16] = tmp14;
                      cResult[17] = tmp21;
                      tmp18 = tmp21;
                    }
                    let obj4 = { style: tmp7, children: tmp8 };
                    const tmp13 = closure_6(onPress, obj4);
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
        const substr = items2.slice(0, selectedSkuId(tmp2[5]).ROW_SIZE);
        const mapped = substr.map((nameplate, index) => {
          if (nameplate === useNameplateSections.NONE_ITEM) {
            const obj2 = { size, onPress, isSelected, asDefault: null != guildId };
            return metroRequire(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
          } else if (nameplate === useNameplateSections.SHOP_ITEM) {
            const obj3 = { size, analyticsSource: AnalyticsLocationDefault.EDIT_NAMEPLATE_SHEET };
            const EditCollectiblesListItemShop = CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop;
            return metroRequire(EditCollectiblesListItemShop, obj3, "shop");
          } else if (isNameplateRecord(nameplate)) {
            const obj4 = { nameplate, isSelected: selectedSkuId === nameplate.skuId, setSelectedNameplate, size };
            return metroRequire(c10, obj4, nameplate.skuId);
          } else {
            const obj = { style: size };
            size = { height: size, width: size };
            return metroRequire(View, obj, index);
          }
        });
        cResult[2] = guildId;
        cResult[3] = null == selectedSkuId;
        cResult[4] = items;
        cResult[5] = tmp5;
        cResult[6] = selectedSkuId;
        cResult[7] = setSelectedNameplate;
        cResult[8] = size;
        cResult[9] = mapped;
        tmp8 = mapped;
      }
    : (arg0) => {
        let items;
        let items3;
        let setSelectedNameplate;
        let substr;
        ({ items, selectedSkuId: require, setSelectedNameplate } = arg0);
        ({ guildId: dependencyMap, size: react } = arg0);
        const tmp = closure_9();
        const items1 = [setSelectedNameplate];
        const onPress = react.useCallback(() => {
          setSelectedNameplate(null);
        }, items1);
        let obj = { children: items3 };
        let obj2 = {
          style: tmp.row,
          children: substr.map((nameplate, index) => {
            if (nameplate === useNameplateSections.NONE_ITEM) {
              const obj2 = { size: width, onPress, isSelected: null == require, asDefault: null != dependencyMap };
              return metroRequire(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
            } else if (nameplate === useNameplateSections.SHOP_ITEM) {
              const obj3 = { size: width, analyticsSource: AnalyticsLocationDefault.EDIT_NAMEPLATE_SHEET };
              const EditCollectiblesListItemShop = CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop;
              return metroRequire(EditCollectiblesListItemShop, obj3, "shop");
            } else if (isNameplateRecord(nameplate)) {
              const obj4 = { nameplate, isSelected: require === nameplate.skuId, setSelectedNameplate, size: width };
              return metroRequire(c10, obj4, nameplate.skuId);
            } else {
              const obj = { style: size };
              size = { height: width, width };
              return metroRequire(View, obj, index);
            }
          }),
        };
        const items2 = [...items, null, null];
        substr = items2.slice(0, useCollectibleListLayout.ROW_SIZE);
        items3 = [closure_6(onPress, obj2)];
        let obj3 = { style: tmp.rowSpacer };
        items3[1] = closure_6(onPress, obj3);
        return closure_8(closure_7, obj);
      },
);
memoResult.displayName = "EditNameplateRow";
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (nameplate) => {
        let isSelected;
        let setSelectedNameplate;
        let tmp5;
        const obj = react2;
        const cResult = obj.c(18);
        nameplate = nameplate.nameplate;
        ({ isSelected, setSelectedNameplate } = nameplate);
        size = nameplate.size;
        const tmp4 = closure_9();
        if (cResult[0] !== nameplate) {
          const tmpResult = utils;
          const nameplateData = tmpResult.getNameplateData(nameplate);
          cResult[0] = nameplate;
          cResult[1] = nameplateData;
          tmp5 = nameplateData;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === nameplate) {
          let tmp7;
          let tmp9;
          let tmp10;
          if (cResult[3] === setSelectedNameplate) {
            tmp7 = cResult[4];
          }
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { borderRadius: 6 };
            cResult[5] = obj2;
            tmp9 = obj2;
          } else {
            tmp9 = cResult[5];
          }
          if (cResult[6] !== tmp4.nameplate) {
            const items = [tmp4.nameplate, tmp9];
            cResult[6] = tmp4.nameplate;
            cResult[7] = items;
            tmp10 = items;
          } else {
            tmp10 = cResult[7];
          }
          if (cResult[8] === tmp5) {
            let tmp11;
            if (cResult[9] === tmp10) {
              tmp11 = cResult[10];
            }
            if (cResult[11] === isSelected) {
              if (cResult[12] === nameplate.label) {
                if (cResult[13] === nameplate.skuId) {
                  if (cResult[14] === tmp7) {
                    if (cResult[15] === size) {
                      let tmp15;
                      if (cResult[16] === tmp11) {
                        tmp15 = cResult[17];
                      }
                      return tmp15;
                    }
                  }
                }
              }
            }
            const obj3 = {
              skuId: nameplate.skuId,
              isSelected,
              onPress: tmp7,
              size,
              accessibilityLabel: nameplate.label,
              children: tmp11,
            };
            const tmp17 = metroRequire(CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct, obj3);
            cResult[11] = isSelected;
            cResult[12] = nameplate.label;
            cResult[13] = nameplate.skuId;
            class I {
              constructor() {
                tmp = setSelectedNameplate(nameplate);
                return;
              }
            }
            cResult[14] = tmp7;
            cResult[15] = size;
            cResult[16] = tmp11;
            cResult[17] = tmp17;
            tmp15 = tmp17;
          }
          const obj4 = { nameplate: tmp5, fullOpacity: true, isSquarePreview: true, style: tmp10 };
          const tmp14 = metroRequire(NameplateDefault, obj4);
          cResult[8] = tmp5;
          class I {
            constructor() {
              tmp = setSelectedNameplate(nameplate);
              return;
            }
          }
          cResult[10] = tmp14;
          tmp11 = tmp14;
        }
        class I {
          constructor() {
            tmp = setSelectedNameplate(nameplate);
            return;
          }
        }
        cResult[2] = nameplate;
        cResult[3] = setSelectedNameplate;
        cResult[4] = I;
        tmp7 = I;
      }
    : (nameplate) => {
        let isSelected;
        let items2;
        let obj2;
        nameplate = nameplate.nameplate;
        const setSelectedNameplate = nameplate.setSelectedNameplate;
        ({ isSelected, size } = nameplate);
        const items = [nameplate];
        const items1 = [setSelectedNameplate, nameplate];
        const tmp = closure_9();
        const memo = react.useMemo(() => {
          const obj = utils;
          return obj.getNameplateData(nameplate);
        }, items);
        const callback = react.useCallback(() => {
          setSelectedNameplate(nameplate);
        }, items1);
        let obj = {
          skuId: nameplate.skuId,
          isSelected,
          onPress: callback,
          size,
          accessibilityLabel: nameplate.label,
          children: closure_6(setSelectedNameplate(8474), obj2),
        };
        const EditCollectiblesListItemProduct = nameplate(13010).EditCollectiblesListItemProduct;
        obj2 = { nameplate: memo, fullOpacity: true, isSquarePreview: true, style: items2 };
        items2 = [tmp.nameplate, { borderRadius: 6 }];
        return closure_6(EditCollectiblesListItemProduct, obj);
      },
);
let c10 = memo2Result;
memo2Result.displayName = "EditNameplateItem";
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/EditNameplateSection.tsx");

export const EditNameplateRow = memoResult;
