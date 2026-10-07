// discord_app/modules/collectibles/nameplates/native/EditNameplateSection.tsx
import c from "../../../../../_runtime/00576_c.js";
import utils from "../utils.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import NameplateDefault from "Nameplate.tsx";
import useCollectibleListLayout from "../../native/useCollectibleListLayout.tsx";
import CollectiblesEditUserProfileListItems from "../../native/CollectiblesEditUserProfileListItems.tsx";
import useNameplateSections from "../useNameplateSections.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const isNameplateRecord = fn(1978).isNameplateRecord;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4896);
let obj = {
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: fn(13028).GUTTER_SIZE,
  },
  rowSpacer: null,
  nameplate: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: fn(13028).GUTTER_SIZE,
};
obj.rowSpacer = { height: fn(13028).GUTTER_SIZE };
obj.nameplate = { overflow: "hidden" };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (setSelectedNameplate) => {
        const cResult = selectedSkuId(guildId[7]).c(18);
        ({ items, selectedSkuId } = setSelectedNameplate);
        setSelectedNameplate = setSelectedNameplate.setSelectedNameplate;
        guildId = setSelectedNameplate.guildId;
        let size = setSelectedNameplate.size;
        const tmp4 = closure_9();
        if (cResult[0] !== setSelectedNameplate) {
          const fn = function n() {
            setSelectedNameplate(null);
          };
          cResult[0] = setSelectedNameplate;
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
                  if (cResult[7] === setSelectedNameplate) {
                    if (cResult[8] === size) {
                      let tmp8 = cResult[9];
                    }
                    if (cResult[10] === tmp4.row) {
                      if (cResult[11] === tmp8) {
                        let tmp10 = cResult[12];
                      }
                      if (cResult[13] !== tmp4.rowSpacer) {
                        let obj2 = { style: tmp4.rowSpacer };
                        const tmp17 = closure_6(onPress, obj2);
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
        const substr = items2.slice(0, selectedSkuId(guildId[5]).ROW_SIZE);
        const mapped = substr.map((nameplate, index) => {
          if (nameplate === useNameplateSections.NONE_ITEM) {
            const obj2 = { size, onPress, isSelected, asDefault: null != guildId };
            return timestampProducer(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
          } else if (nameplate === useNameplateSections.SHOP_ITEM) {
            const obj3 = { size, analyticsSource: AnalyticsLocationDefault.EDIT_NAMEPLATE_SHEET };
            return timestampProducer(CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop, obj3, "shop");
          } else if (isNameplateRecord(nameplate)) {
            const obj4 = { nameplate, isSelected: selectedSkuId === nameplate.skuId, setSelectedNameplate, size };
            return timestampProducer(memoResult1, obj4, nameplate.skuId);
          } else {
            const obj = { style: null };
            size = { height: null, width: null };
            size.height = size;
            size.width = size;
            obj.style = size;
            return timestampProducer(View, obj, index);
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
        let obj = selectedSkuId(guildId[7]);
      }
    : (arg0) => {
        ({ items, selectedSkuId: require, setSelectedNameplate } = arg0);
        ({ guildId: dependencyMap, size: noop } = arg0);
        const tmp = closure_9();
        const items1 = [setSelectedNameplate];
        const onPress = noop.useCallback(() => {
          setSelectedNameplate(null);
        }, items1);
        let obj = { children: null };
        let obj2 = { style: tmp.row, children: null };
        const items2 = [...items, null, null];
        const substr = items2.slice(0, useCollectibleListLayout.ROW_SIZE);
        obj2.children = substr.map((nameplate, index) => {
          if (nameplate === useNameplateSections.NONE_ITEM) {
            const obj2 = { size: width, onPress, isSelected: null == closure_1_0, asDefault: null != dependencyMap };
            return timestampProducer(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
          } else if (nameplate === useNameplateSections.SHOP_ITEM) {
            const obj3 = { size: width, analyticsSource: AnalyticsLocationDefault.EDIT_NAMEPLATE_SHEET };
            return timestampProducer(CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop, obj3, "shop");
          } else if (isNameplateRecord(nameplate)) {
            const obj4 = { nameplate, isSelected: closure_1_0 === nameplate.skuId, setSelectedNameplate, size: width };
            return timestampProducer(memoResult1, obj4, nameplate.skuId);
          } else {
            const obj = { style: null };
            const size = { height: width, width };
            obj.style = size;
            return timestampProducer(View, obj, index);
          }
        });
        const items3 = [closure_6(onPress, obj2), closure_6(onPress, { style: tmp.rowSpacer })];
        obj.children = items3;
        return closure_8(closure_7, obj);
      },
);
memoResult.displayName = "EditNameplateRow";
ReactCompilerGating = fn(558);
const memoResult1 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (nameplate) => {
        const cResult = c.c(18);
        nameplate = nameplate.nameplate;
        ({ isSelected, setSelectedNameplate } = nameplate);
        const size = nameplate.size;
        const tmp4 = closure_9();
        if (cResult[0] !== nameplate) {
          const nameplateData = utils.getNameplateData(nameplate);
          cResult[0] = nameplate;
          cResult[1] = nameplateData;
          let tmp5 = nameplateData;
          const tmpResult = utils;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === nameplate) {
          if (cResult[3] === setSelectedNameplate) {
            let tmp7 = cResult[4];
          }
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { borderRadius: 6 };
            cResult[5] = obj2;
            let tmp9 = obj2;
          } else {
            tmp9 = cResult[5];
          }
          if (cResult[6] !== tmp4.nameplate) {
            const items = [tmp4.nameplate, tmp9];
            cResult[6] = tmp4.nameplate;
            cResult[7] = items;
            let tmp10 = items;
          } else {
            tmp10 = cResult[7];
          }
          if (cResult[8] === tmp5) {
            if (cResult[9] === tmp10) {
              let tmp11 = cResult[10];
            }
            if (cResult[11] === isSelected) {
              if (cResult[12] === nameplate.label) {
                if (cResult[13] === nameplate.skuId) {
                  if (cResult[14] === tmp7) {
                    if (cResult[15] === size) {
                      if (cResult[16] === tmp11) {
                        let tmp15 = cResult[17];
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
            const tmp17 = timestampProducer(CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct, obj3);
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
          const tmp14 = timestampProducer(NameplateDefault, obj4);
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
        nameplate = nameplate.nameplate;
        const setSelectedNameplate = nameplate.setSelectedNameplate;
        ({ isSelected, size } = nameplate);
        const items = [nameplate];
        const items1 = [setSelectedNameplate, nameplate];
        const memo = noop.useMemo(() => utils.getNameplateData(nameplate), items);
        const callback = noop.useCallback(() => {
          setSelectedNameplate(nameplate);
        }, items1);
        const obj = {
          skuId: nameplate.skuId,
          isSelected,
          onPress: callback,
          size,
          accessibilityLabel: nameplate.label,
          children: null,
        };
        const obj2 = { nameplate: memo, fullOpacity: true, isSquarePreview: true, style: null };
        const items2 = [closure_9().nameplate, { borderRadius: 6 }];
        obj2.style = items2;
        obj.children = closure_6(setSelectedNameplate(8507), obj2);
        return closure_6(nameplate(13029).EditCollectiblesListItemProduct, obj);
      },
);
memoResult1.displayName = "EditNameplateItem";
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/nameplates/native/EditNameplateSection.tsx");

export const EditNameplateRow = memoResult;
