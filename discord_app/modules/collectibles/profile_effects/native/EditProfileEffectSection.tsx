// discord_app/modules/collectibles/profile_effects/native/EditProfileEffectSection.tsx
import c from "../../../../../_runtime/00576_c.js";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import AnalyticsLocationDefault from "../../../app_analytics/AnalyticsLocation.tsx";
import useProfileEffectDefault from "../useProfileEffect.tsx";
import ProfileEffectDefault from "ProfileEffect.tsx";
import _modDef8479 from "../../../../../discord_assets/assets/collectibles/previews/sample_profile_small-2x.png.js";
import useCollectibleListLayout from "../../native/useCollectibleListLayout.tsx";
import CollectiblesEditUserProfileListItems from "../../native/CollectiblesEditUserProfileListItems.tsx";
import useProfileEffectSections from "../useProfileEffectSections.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const isProfileEffectRecord = fn(7059).isProfileEffectRecord;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj = {
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: fn(13009).GUTTER_SIZE,
  },
  rowSpacer: null,
  profileEffect: null,
  sampleProfile: null,
};
let obj3 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: fn(13009).GUTTER_SIZE,
};
obj.rowSpacer = { height: fn(13009).GUTTER_SIZE };
obj.profileEffect = { overflow: "hidden", width: "100%", height: "100%" };
obj.sampleProfile = { aspectRatio: fn(8454).SAMPLE_PROFILE_ASPECT_RATIO, width: "100%" };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
const memoResult = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (setSelectedProfileEffect) => {
        const cResult = selectedSkuId(guildId[8]).c(19);
        ({ items, selectedSkuId } = setSelectedProfileEffect);
        setSelectedProfileEffect = setSelectedProfileEffect.setSelectedProfileEffect;
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
                    if (cResult[8] === setSelectedProfileEffect) {
                      if (cResult[9] === size) {
                        let tmp9 = cResult[10];
                      }
                      if (cResult[11] === tmp5.row) {
                        if (cResult[12] === tmp9) {
                          let tmp11 = cResult[13];
                        }
                        if (cResult[14] !== tmp5.rowSpacer) {
                          let obj2 = { style: tmp5.rowSpacer };
                          const tmp18 = isSelected(isTryItOut, obj2);
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
        const substr = items2.slice(0, selectedSkuId(guildId[6]).ROW_SIZE);
        const mapped = substr.map((item, index) => {
          if (item === useProfileEffectSections.NONE_ITEM) {
            const obj2 = { size, onPress, isSelected, asDefault: null != guildId };
            return timestampProducer(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
          } else if (item === useProfileEffectSections.SHOP_ITEM) {
            const obj3 = { size, analyticsSource: AnalyticsLocationDefault.EDIT_PROFILE_EFFECT_SHEET };
            return timestampProducer(CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop, obj3, "shop");
          } else if (isProfileEffectRecord(item)) {
            const obj4 = { item, isSelected: selectedSkuId === item.skuId, setSelectedProfileEffect, isTryItOut, size };
            return timestampProducer(memoResult1, obj4, item.skuId);
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
        cResult[4] = undefined !== isTryItOut && isTryItOut;
        cResult[5] = items;
        cResult[6] = tmp6;
        cResult[7] = selectedSkuId;
        cResult[8] = setSelectedProfileEffect;
        cResult[9] = size;
        cResult[10] = mapped;
        tmp9 = mapped;
        let obj = selectedSkuId(guildId[8]);
      }
    : (size) => {
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
        let obj = { children: null };
        let obj2 = { style: tmp.row, children: null };
        const items2 = [...items, null, null];
        const substr = items2.slice(0, useCollectibleListLayout.ROW_SIZE);
        obj2.children = substr.map((item, index) => {
          if (item === useProfileEffectSections.NONE_ITEM) {
            const obj2 = { size, onPress, isSelected: null == closure_1_0, asDefault: null != dependencyMap };
            return timestampProducer(CollectiblesEditUserProfileListItems.EditCollectiblesListItemNone, obj2, "none");
          } else if (item === useProfileEffectSections.SHOP_ITEM) {
            const obj3 = { size, analyticsSource: AnalyticsLocationDefault.EDIT_PROFILE_EFFECT_SHEET };
            return timestampProducer(CollectiblesEditUserProfileListItems.EditCollectiblesListItemShop, obj3, "shop");
          } else if (isProfileEffectRecord(item)) {
            const obj4 = { item, isSelected: closure_1_0 === item.skuId, setSelectedProfileEffect, isTryItOut, size };
            return timestampProducer(memoResult1, obj4, item.skuId);
          } else {
            const obj = { style: null };
            size = { height: null, width: null };
            size.height = size;
            size.width = size;
            obj.style = size;
            return timestampProducer(View, obj, index);
          }
        });
        const items3 = [closure_6(size, obj2), closure_6(size, { style: tmp.rowSpacer })];
        obj.children = items3;
        return closure_8(closure_7, obj);
      },
);
memoResult.displayName = "EditProfileEffectRow";
ReactCompilerGating = fn(558);
const memoResult1 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (item) => {
        const cResult = c.c(24);
        item = item.item;
        ({ isSelected, setSelectedProfileEffect } = item);
        ({ isTryItOut, size } = item);
        const tmp5 = closure_9();
        const tmp7 = useProfileEffectDefault(item.skuId);
        if (cResult[0] === item) {
          if (cResult[1] === setSelectedProfileEffect) {
            let tmp8 = cResult[2];
          }
          let thumbnailPreviewSrc1;
          if (tmp7 != null) {
            thumbnailPreviewSrc1 = tmp7.thumbnailPreviewSrc;
          }
          if (null != thumbnailPreviewSrc1) {
            const _HermesInternal = HermesInternal;
            let thumbnailPreviewSrc = "" + tmp7.thumbnailPreviewSrc + "?width=100&height=195";
          } else if (tmp7 != null) {
            thumbnailPreviewSrc = tmp7.thumbnailPreviewSrc;
          }
          if (tmp7 != null) {
            const accessibilityLabel = tmp7.accessibilityLabel;
          }
          const _Symbol = Symbol;
          if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
            const obj2 = { borderRadius: 6 };
            cResult[3] = obj2;
            let tmp13 = obj2;
          } else {
            tmp13 = cResult[3];
          }
          if (cResult[4] !== tmp5.profileEffect) {
            const items = [tmp5.profileEffect, tmp13];
            cResult[4] = tmp5.profileEffect;
            cResult[5] = items;
            let tmp14 = items;
          } else {
            tmp14 = cResult[5];
          }
          const _Symbol2 = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { uri: _modDef8479 };
            cResult[6] = obj3;
            let tmp15 = obj3;
          } else {
            tmp15 = cResult[6];
          }
          if (cResult[7] !== tmp5.sampleProfile) {
            const obj4 = { source: tmp15, style: tmp5.sampleProfile, resizeMode: "cover" };
            const tmp18 = timestampProducer(FastImageDefault, obj4);
            cResult[7] = tmp5.sampleProfile;
            cResult[8] = tmp18;
            let tmp16 = tmp18;
          } else {
            tmp16 = cResult[8];
          }
          if (cResult[9] === item.skuId) {
            if (cResult[10] === thumbnailPreviewSrc) {
              let tmp19 = cResult[11];
            }
            if (cResult[12] === tmp14) {
              if (cResult[13] === tmp16) {
                if (cResult[14] === tmp19) {
                  let tmp22 = cResult[15];
                }
                if (cResult[16] === isSelected) {
                  if (cResult[17] === tmp4) {
                    if (cResult[18] === item.skuId) {
                      if (cResult[19] === tmp8) {
                        if (cResult[20] === size) {
                          if (cResult[21] === tmp22) {
                            if (cResult[22] === accessibilityLabel) {
                              let tmp26 = cResult[23];
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
                  isTryItOut: tmp4,
                  size,
                  accessibilityLabel,
                  children: tmp22,
                };
                const tmp28 = timestampProducer(
                  CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct,
                  obj5,
                );
                cResult[16] = isSelected;
                cResult[17] = tmp4;
                cResult[18] = item.skuId;
                cResult[19] = tmp8;
                cResult[20] = size;
                cResult[21] = tmp22;
                cResult[22] = accessibilityLabel;
                cResult[23] = tmp28;
                tmp26 = tmp28;
              }
            }
            const obj6 = { style: tmp14, accessible: false, importantForAccessibility: "no", children: null };
            const items1 = [tmp16, tmp19];
            obj6.children = items1;
            const tmp25 = closure_1_8(View, obj6);
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
          const tmp21 = timestampProducer(ProfileEffectDefault, obj7);
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
    : (isSelected) => {
        const item = isSelected.item;
        const setSelectedProfileEffect = isSelected.setSelectedProfileEffect;
        let flag = isSelected.isTryItOut;
        if (flag === undefined) {
          flag = false;
        }
        const tmp = closure_9();
        const tmp4 = useProfileEffectDefault(item.skuId);
        closure_2 = tmp4;
        const items = [setSelectedProfileEffect, item];
        let thumbnailPreviewSrc;
        const callback = noop.useCallback(() => {
          setSelectedProfileEffect(item);
        }, items);
        if (tmp4 != null) {
          thumbnailPreviewSrc = tmp4.thumbnailPreviewSrc;
        }
        const items1 = [thumbnailPreviewSrc];
        const memo = noop.useMemo(() => {
          let thumbnailPreviewSrc;
          if (closure_2 != null) {
            thumbnailPreviewSrc = closure_2.thumbnailPreviewSrc;
          }
          if (null == thumbnailPreviewSrc) {
            let thumbnailPreviewSrc1;
            if (closure_2 != null) {
              thumbnailPreviewSrc1 = closure_2.thumbnailPreviewSrc;
            }
            let combined = thumbnailPreviewSrc1;
          } else {
            const _HermesInternal = HermesInternal;
            combined = "" + closure_2.thumbnailPreviewSrc + "?width=100&height=195";
          }
          return combined;
        }, items1);
        const obj = {
          skuId: item.skuId,
          isSelected: isSelected.isSelected,
          onPress: callback,
          isTryItOut: flag,
          size: isSelected.size,
          accessibilityLabel: null,
          children: null,
        };
        let accessibilityLabel;
        if (tmp4 != null) {
          accessibilityLabel = tmp4.accessibilityLabel;
        }
        obj.accessibilityLabel = accessibilityLabel;
        const obj2 = { style: null, accessible: false, importantForAccessibility: "no", children: null };
        const items2 = [tmp.profileEffect, { borderRadius: 6 }];
        obj2.style = items2;
        const obj3 = { source: null, style: null, resizeMode: "cover" };
        const obj4 = { uri: _modDef8479 };
        obj3.source = obj4;
        obj3.style = tmp.sampleProfile;
        const items3 = [
          timestampProducer(FastImageDefault, obj3),
          timestampProducer(ProfileEffectDefault, {
            skuId: item.skuId,
            bannerAdjustment: 0,
            useThumbnail: true,
            thumbnailUrlOverride: memo,
          }),
        ];
        obj2.children = items3;
        obj.children = closure_1_8(View, obj2);
        return timestampProducer(CollectiblesEditUserProfileListItems.EditCollectiblesListItemProduct, obj);
      },
);
memoResult1.displayName = "EditProfileEffectItem";
let size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/profile_effects/native/EditProfileEffectSection.tsx");

export const EditProfileEffectRow = memoResult;
