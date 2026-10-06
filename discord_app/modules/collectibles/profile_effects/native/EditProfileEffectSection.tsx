// discord_app/modules/collectibles/profile_effects/native/EditProfileEffectSection.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import ProfileEffectRecord from "../../records/ProfileEffectRecord.tsx";
import useProfileEffectDefault from "../useProfileEffect.tsx";
import CollectiblesPreviewConstants from "../../native/CollectiblesPreviewConstants.tsx";
import ProfileEffectDefault from "ProfileEffect.tsx";
import _modDef8512 from "../../../../../discord_assets/assets/collectibles/previews/sample_profile_small-2x.png.js";
import useCollectibleListLayout from "../../native/useCollectibleListLayout.tsx";
import CollectiblesEditUserProfileListItems from "../../native/CollectiblesEditUserProfileListItems.tsx";
import useProfileEffectSections from "../useProfileEffectSections.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let item;

let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const isProfileEffectRecord = ProfileEffectRecord.isProfileEffectRecord;
const SAMPLE_PROFILE_ASPECT_RATIO = CollectiblesPreviewConstants.SAMPLE_PROFILE_ASPECT_RATIO;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  row: obj2,
  rowSpacer: obj3,
  profileEffect: { overflow: "hidden", width: "100%", height: "100%" },
  sampleProfile: { aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" },
};
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
    ? (setSelectedProfileEffect) => {
        let guildId;
        let isTryItOut;
        let items;
        let items1;
        let selectedSkuId;
        let tmp6;
        let obj = selectedSkuId(guildId[8]);
        const cResult = obj.c(19);
        ({ items, selectedSkuId } = setSelectedProfileEffect);
        setSelectedProfileEffect = setSelectedProfileEffect.setSelectedProfileEffect;
        const tmp2 = guildId;
        guildId = setSelectedProfileEffect.guildId;
        ({ isTryItOut, size } = setSelectedProfileEffect);
        isTryItOut = tmp4;
        const tmp5 = closure_9();
        if (cResult[0] !== setSelectedProfileEffect) {
          const fn = function c() {
            setSelectedProfileEffect(null);
          };
          cResult[0] = setSelectedProfileEffect;
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
                    if (cResult[8] === setSelectedProfileEffect) {
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
                          const tmp18 = isSelected(isTryItOut, obj2);
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
                        const tmp22 = closure_8(closure_7, obj3);
                        cResult[16] = tmp11;
                        cResult[17] = tmp15;
                        cResult[18] = tmp22;
                        tmp19 = tmp22;
                      }
                      let obj4 = { style: tmp8, children: tmp9 };
                      const tmp14 = isSelected(isTryItOut, obj4);
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
        const mapped = substr.map((item, index) => {
          if (item === useProfileEffectSections.NONE_ITEM) {
            const obj2 = { size, onPress, isSelected, asDefault: null != guildId };
            return metroRequire(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
          } else if (item === useProfileEffectSections.SHOP_ITEM) {
            const obj3 = { size, analyticsSource: AnalyticsLocationDefault.EDIT_PROFILE_EFFECT_SHEET };
            const EditCollectiblesListItemShop = CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop;
            return metroRequire(EditCollectiblesListItemShop, obj3, "shop");
          } else if (isProfileEffectRecord(item)) {
            const obj4 = { item, isSelected: selectedSkuId === item.skuId, setSelectedProfileEffect, isTryItOut, size };
            return metroRequire(c10, obj4, item.skuId);
          } else {
            const obj = { style: size };
            size = { height: size, width: size };
            return metroRequire(View, obj, index);
          }
        });
        cResult[2] = guildId;
        cResult[3] = null == selectedSkuId;
        cResult[4] = undefined !== isTryItOut && isTryItOut;
        cResult[5] = items;
        cResult[6] = tmp6;
        cResult[7] = selectedSkuId;
        cResult[8] = setSelectedProfileEffect;
        cResult[9] = size;
        cResult[10] = mapped;
        tmp9 = mapped;
      }
    : (size) => {
        let isTryItOut;
        let items;
        let items3;
        let setSelectedProfileEffect;
        let substr;
        ({ items, selectedSkuId: require, setSelectedProfileEffect } = size);
        ({ guildId: dependencyMap, isTryItOut } = size);
        if (isTryItOut === undefined) {
          isTryItOut = false;
        }
        size = size.size;
        const tmp = closure_9();
        const items1 = [setSelectedProfileEffect];
        const onPress = isTryItOut.useCallback(() => {
          setSelectedProfileEffect(null);
        }, items1);
        let obj = { children: items3 };
        let obj2 = {
          style: tmp.row,
          children: substr.map((item, index) => {
            if (item === useProfileEffectSections.NONE_ITEM) {
              const obj2 = { size, onPress, isSelected: null == require, asDefault: null != dependencyMap };
              return metroRequire(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
            } else if (item === useProfileEffectSections.SHOP_ITEM) {
              const obj3 = { size, analyticsSource: AnalyticsLocationDefault.EDIT_PROFILE_EFFECT_SHEET };
              const EditCollectiblesListItemShop = CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop;
              return metroRequire(EditCollectiblesListItemShop, obj3, "shop");
            } else if (isProfileEffectRecord(item)) {
              const obj4 = { item, isSelected: require === item.skuId, setSelectedProfileEffect, isTryItOut, size };
              return metroRequire(c10, obj4, item.skuId);
            } else {
              const obj = { style: size };
              size = { height: size, width: size };
              return metroRequire(View, obj, index);
            }
          }),
        };
        const items2 = [...items, null, null];
        substr = items2.slice(0, useCollectibleListLayout.ROW_SIZE);
        items3 = [closure_6(size, obj2)];
        let obj3 = { style: tmp.rowSpacer };
        items3[1] = closure_6(size, obj3);
        return closure_8(closure_7, obj);
      },
);
memoResult.displayName = "EditProfileEffectRow";
const memo2 = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (item) => {
        let isSelected;
        let isTryItOut;
        let items1;
        let setSelectedProfileEffect;
        const obj = react2;
        const cResult = obj.c(24);
        item = item.item;
        ({ isSelected, setSelectedProfileEffect } = item);
        ({ isTryItOut, size } = item);
        const tmp5 = closure_9();
        const tmp7 = useProfileEffectDefault(item.skuId);
        if (cResult[0] === item) {
          let tmp8;
          let thumbnailPreviewSrc;
          let accessibilityLabel;
          let tmp13;
          let tmp14;
          let tmp15;
          let tmp16;
          if (cResult[1] === setSelectedProfileEffect) {
            tmp8 = cResult[2];
          }
          let thumbnailPreviewSrc1;
          if (tmp7 != null) {
            thumbnailPreviewSrc1 = tmp7.thumbnailPreviewSrc;
          }
          if (null != thumbnailPreviewSrc1) {
            const _HermesInternal = HermesInternal;
            thumbnailPreviewSrc = "" + tmp7.thumbnailPreviewSrc + "?width=100&height=195";
          } else if (tmp7 != null) {
            thumbnailPreviewSrc = tmp7.thumbnailPreviewSrc;
          }
          if (tmp7 != null) {
            accessibilityLabel = tmp7.accessibilityLabel;
          }
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { borderRadius: 6 };
            cResult[3] = obj2;
            tmp13 = obj2;
          } else {
            tmp13 = cResult[3];
          }
          if (cResult[4] !== tmp5.profileEffect) {
            const items = [tmp5.profileEffect, tmp13];
            cResult[4] = tmp5.profileEffect;
            cResult[5] = items;
            tmp14 = items;
          } else {
            tmp14 = cResult[5];
          }
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { uri: _modDef8512 };
            cResult[6] = obj3;
            tmp15 = obj3;
          } else {
            tmp15 = cResult[6];
          }
          if (cResult[7] !== tmp5.sampleProfile) {
            const obj4 = { source: tmp15, style: tmp5.sampleProfile, resizeMode: "cover" };
            const tmp18 = metroRequire(FastImageDefault, obj4);
            cResult[7] = tmp5.sampleProfile;
            cResult[8] = tmp18;
            tmp16 = tmp18;
          } else {
            tmp16 = cResult[8];
          }
          if (cResult[9] === item.skuId) {
            let tmp19;
            if (cResult[10] === thumbnailPreviewSrc) {
              tmp19 = cResult[11];
            }
            if (cResult[12] === tmp14) {
              if (cResult[13] === tmp16) {
                let tmp22;
                if (cResult[14] === tmp19) {
                  tmp22 = cResult[15];
                }
                if (cResult[16] === isSelected) {
                  if (cResult[17] === (undefined !== isTryItOut && isTryItOut)) {
                    if (cResult[18] === item.skuId) {
                      if (cResult[19] === tmp8) {
                        if (cResult[20] === size) {
                          if (cResult[21] === tmp22) {
                            let tmp26;
                            if (cResult[22] === accessibilityLabel) {
                              tmp26 = cResult[23];
                            }
                            return tmp26;
                          }
                        }
                      }
                    }
                  }
                }
                const obj5 = {
                  skuId: item.skuId,
                  isSelected,
                  onPress: tmp8,
                  isTryItOut: undefined !== isTryItOut && isTryItOut,
                  size,
                  accessibilityLabel,
                  children: tmp22,
                };
                const tmp28 = metroRequire(CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct, obj5);
                cResult[16] = isSelected;
                cResult[17] = undefined !== isTryItOut && isTryItOut;
                cResult[18] = item.skuId;
                cResult[19] = tmp8;
                cResult[20] = size;
                cResult[21] = tmp22;
                cResult[22] = accessibilityLabel;
                cResult[23] = tmp28;
                tmp26 = tmp28;
              }
            }
            const obj6 = { style: tmp14, accessible: false, importantForAccessibility: "no", children: items1 };
            items1 = [tmp16, tmp19];
            const tmp25 = metroImportAll(View, obj6);
            cResult[12] = tmp14;
            cResult[13] = tmp16;
            cResult[14] = tmp19;
            cResult[15] = tmp25;
            tmp22 = tmp25;
          }
          const obj7 = {
            skuId: item.skuId,
            bannerAdjustment: 0,
            useThumbnail: true,
            thumbnailUrlOverride: thumbnailPreviewSrc,
          };
          const tmp21 = metroRequire(ProfileEffectDefault, obj7);
          cResult[9] = item.skuId;
          cResult[10] = thumbnailPreviewSrc;
          cResult[11] = tmp21;
          tmp19 = tmp21;
        }
        const fn = function s() {
          setSelectedProfileEffect(item);
        };
        cResult[0] = item;
        cResult[1] = setSelectedProfileEffect;
        cResult[2] = fn;
        tmp8 = fn;
      }
    : (item) => {
        let accessibilityLabel;
        let items2;
        let items3;
        let obj2;
        let obj4;
        item = item.item;
        const setSelectedProfileEffect = item.setSelectedProfileEffect;
        let flag = item.isTryItOut;
        const isSelected = item.isSelected;
        if (flag === undefined) {
          flag = false;
        }
        size = item.size;
        const tmp = closure_9();
        const tmp4 = useProfileEffectDefault(item.skuId);
        let closure_2 = tmp4;
        const items = [setSelectedProfileEffect, item];
        let thumbnailPreviewSrc;
        const callback = react.useCallback(() => {
          setSelectedProfileEffect(item);
        }, items);
        const useMemo = react.useMemo;
        if (tmp4 != null) {
          thumbnailPreviewSrc = tmp4.thumbnailPreviewSrc;
        }
        const items1 = [thumbnailPreviewSrc];
        const memo = useMemo(() => {
          let combined;
          let thumbnailPreviewSrc;
          if (closure_2 != null) {
            thumbnailPreviewSrc = closure_2.thumbnailPreviewSrc;
          }
          if (null == thumbnailPreviewSrc) {
            let thumbnailPreviewSrc1;
            if (closure_2 != null) {
              thumbnailPreviewSrc1 = closure_2.thumbnailPreviewSrc;
            }
            combined = thumbnailPreviewSrc1;
          } else {
            const _HermesInternal = HermesInternal;
            combined = "" + closure_2.thumbnailPreviewSrc + "?width=100&height=195";
          }
          return combined;
        }, items1);
        const obj = {
          skuId: item.skuId,
          isSelected,
          onPress: callback,
          isTryItOut: flag,
          size,
          accessibilityLabel,
          children: metroImportAll(View, obj2),
        };
        accessibilityLabel = undefined;
        const EditCollectiblesListItemProduct = CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct;
        if (tmp4 != null) {
          accessibilityLabel = tmp4.accessibilityLabel;
        }
        obj2 = { style: items2, accessible: false, importantForAccessibility: "no", children: items3 };
        items2 = [tmp.profileEffect, { borderRadius: 6 }];
        const obj3 = { source: obj4, style: tmp.sampleProfile, resizeMode: "cover" };
        obj4 = { uri: _modDef8512 };
        const tmp2Result = FastImageDefault;
        items3 = [metroRequire(tmp2Result, obj3)];
        const obj5 = { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true, thumbnailUrlOverride: memo };
        items3[1] = metroRequire(ProfileEffectDefault, obj5);
        return metroRequire(EditCollectiblesListItemProduct, obj);
      },
);
let c10 = memo2Result;
memo2Result.displayName = "EditProfileEffectItem";
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/EditProfileEffectSection.tsx");

export const EditProfileEffectRow = memoResult;
