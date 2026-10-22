// discord_app/modules/user_profile/native/EditProfileEffectActionSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import LinearGradientDefault from "../../../../_runtime/05244_LinearGradient.js";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import UserProfileSettingsActionCreators from "../UserProfileSettingsActionCreators.tsx";
import UserProfileActionCreators from "../UserProfileActionCreators.tsx";
import useShopProductItems from "../../collectibles/hooks/useShopProductItems.tsx";
import useCollectiblesDataDefault from "../../collectibles/hooks/useCollectiblesData.tsx";
import maybeFetchUserProfileDefault from "../maybeFetchUserProfile.tsx";
import ProfileEffectUserPreviewDefault from "../../collectibles/profile_effects/native/previews/ProfileEffectUserPreview.tsx";
import EditProfileEffectSection from "../../collectibles/profile_effects/native/EditProfileEffectSection.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesPurchaseStore from "../../collectibles/CollectiblesPurchaseStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet } = get_ActivityIndicator);
const isProfileEffectRecord = fn(7640).isProfileEffectRecord;
const AnalyticEvents = fn(1087).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4969);
let obj2 = {
  container: { flex: 1 },
  previewContainer: { overflow: "hidden", height: 300, alignItems: "center" },
  previewGradient: null,
};
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.bottom = -1;
obj3.color = nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND;
obj2.previewGradient = obj3;
let closure_12 = createStyles.createStyles(obj2);
fn(558);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EditProfileEffectInner(user) {
      const cResult = user(guildId[10]).c(35);
      user = user.user;
      ({ selectedProfileEffect, setSelectedProfileEffect } = user);
      guildId = user.guildId;
      const isTryItOut = tmp4;
      const obj = user(guildId[10]);
      const getOrFetchCollectiblesCategoriesAndPurchases = user(
        guildId[23],
      ).useGetOrFetchCollectiblesCategoriesAndPurchases();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CollectiblesPurchaseStore];
        const fn = function s() {
          return isFetching.isFetching;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const tmpResult = user(guildId[23]);
      const stateFromStores = user(guildId[24]).useStateFromStores(tmp6, tmp7);
      const tmp11 = setSelectedProfileEffect(guildId[25])();
      const tmpResult4 = user(guildId[24]);
      const shouldPinCollectiblesEditPreview = user(guildId[26]).useShouldPinCollectiblesEditPreview();
      const tmp13 = setSelectedProfileEffect(guildId[11])(user.id, guildId);
      let profileEffect;
      if (tmp13 != null) {
        const _userProfile = tmp13._userProfile;
        if (_userProfile != null) {
          profileEffect = _userProfile.profileEffect;
        }
      }
      let profileEffect1;
      if (tmp13 != null) {
        const _guildMemberProfile = tmp13._guildMemberProfile;
        if (_guildMemberProfile != null) {
          profileEffect1 = _guildMemberProfile.profileEffect;
        }
      }
      if (cResult[2] === guildId) {
        if (cResult[3] === selectedProfileEffect) {
          if (cResult[4] === profileEffect) {
            if (cResult[5] === profileEffect1) {
              let tmp16 = cResult[6];
            }
            if (cResult[7] !== user) {
              const fn2 = function b() {
                if (!tmp) {
                  maybeFetchUserProfileDefault(user.id, user.getAvatarURL(null, 80), { withMutualGuilds: true });
                }
                tmp = null == user || user.isNonUserBot();
              };
              const items1 = [user];
              cResult[7] = user;
              class L {
                constructor(arg0) {
                  ({ items, size, selectedSkuId } = user);
                  obj = { items, size, selectedSkuId, setSelectedProfileEffect, guildId, isTryItOut };
                  return jsx(closure_0(closure_2[29]).EditProfileEffectRow, obj);
                }
              }
              cResult[8] = fn2;
              cResult[9] = items1;
              let tmp19 = items1;
              let tmp18 = fn2;
            } else {
              tmp18 = cResult[8];
              tmp19 = cResult[9];
            }
            const effect = noop.useEffect(tmp18, tmp19);
            if (cResult[10] === guildId) {
              if (cResult[11] === tmp4) {
                if (cResult[12] === setSelectedProfileEffect) {
                  let tmp22 = cResult[13];
                }
                let skuId;
                if (tmp16 != null) {
                  skuId = tmp16.skuId;
                }
                if (cResult[14] === guildId) {
                  if (cResult[15] === skuId) {
                    if (cResult[16] === user) {
                      let tmp24 = cResult[17];
                    }
                    let skuId1;
                    if (tmp16 != null) {
                      skuId1 = tmp16.skuId;
                    }
                    const _Symbol = Symbol;
                    class L {
                      constructor(arg0) {
                        ({ items, size, selectedSkuId } = user);
                        obj = { items, size, selectedSkuId, setSelectedProfileEffect, guildId, isTryItOut };
                        return jsx(closure_0(closure_2[29]).EditProfileEffectRow, obj);
                      }
                    }
                    if (cResult[20] === skuId1) {
                      if (cResult[21] === user) {
                        let tmp31 = cResult[22];
                      }
                      if (cResult[23] === tmp24) {
                        if (cResult[24] === tmp31) {
                          let tmp34 = cResult[25];
                        }
                        let tmp39 = null;
                        if (shouldPinCollectiblesEditPreview) {
                          tmp39 = tmp34;
                        }
                        let skuId2;
                        if (selectedProfileEffect != null) {
                          skuId2 = selectedProfileEffect.skuId;
                        }
                        class L {
                          constructor(arg0) {
                            ({ items, size, selectedSkuId } = user);
                            obj = { items, size, selectedSkuId, setSelectedProfileEffect, guildId, isTryItOut };
                            return jsx(closure_0(closure_2[29]).EditProfileEffectRow, obj);
                          }
                        }
                        if (cResult[26] === stateFromStores) {
                          if (cResult[27] === tmp22) {
                            if (cResult[28] === tmp11) {
                              if (cResult[29] === skuId2) {
                                if (cResult[30] === tmp41) {
                                  let tmp42 = cResult[31];
                                }
                                if (cResult[32] === tmp39) {
                                  if (cResult[33] === tmp42) {
                                    let tmp45 = cResult[34];
                                  }
                                  return tmp45;
                                }
                                const obj2 = { children: null };
                                class L {
                                  constructor(arg0) {
                                    ({ items, size, selectedSkuId } = user);
                                    obj = { items, size, selectedSkuId, setSelectedProfileEffect, guildId, isTryItOut };
                                    return jsx(closure_0(closure_2[29]).EditProfileEffectRow, obj);
                                  }
                                }
                                tmp48[0] = tmp39;
                                tmp48[1] = tmp42;
                                obj2.children = tmp48;
                                const tmp49 = closure_10(closure_11, obj2);
                                cResult[32] = tmp39;
                                cResult[33] = tmp42;
                                cResult[34] = tmp49;
                                tmp45 = tmp49;
                              }
                            }
                          }
                        }
                        const obj3 = {
                          sections: tmp11,
                          selectedSkuId: skuId2,
                          renderRow: tmp22,
                          isFetching: stateFromStores,
                          ListHeaderComponent: tmp41,
                        };
                        const tmp44 = closure_9(tmp(tmp2[31]).EditCollectiblesPickerList, obj3);
                        cResult[26] = stateFromStores;
                        cResult[27] = tmp22;
                        cResult[28] = tmp11;
                        cResult[29] = skuId2;
                        cResult[30] = tmp41;
                        cResult[31] = tmp44;
                        tmp42 = tmp44;
                      }
                      const obj4 = { children: null };
                      class L {
                        constructor(arg0) {
                          ({ items, size, selectedSkuId } = user);
                          obj = { items, size, selectedSkuId, setSelectedProfileEffect, guildId, isTryItOut };
                          return jsx(closure_0(closure_2[29]).EditProfileEffectRow, obj);
                        }
                      }
                      tmp37[0] = tmp24;
                      tmp37[1] = tmp31;
                      obj4.children = tmp37;
                      const tmp38 = closure_10(closure_11, obj4);
                      cResult[23] = tmp24;
                      cResult[24] = tmp31;
                      cResult[25] = tmp38;
                      tmp34 = tmp38;
                    }
                    const obj5 = { user, previewSkuId: skuId1, nitroJoinCTA: tmp29, nitroUpgradeCTA: tmp30 };
                    const tmp33 = closure_9(setSelectedProfileEffect(tmp2[30]), obj5);
                    cResult[20] = skuId1;
                    cResult[21] = user;
                    cResult[22] = tmp33;
                    tmp31 = tmp33;
                  }
                }
                class L {
                  constructor(arg0) {
                    ({ items, size, selectedSkuId } = user);
                    obj = { items, size, selectedSkuId, setSelectedProfileEffect, guildId, isTryItOut };
                    return jsx(closure_0(closure_2[29]).EditProfileEffectRow, obj);
                  }
                }
                const obj6 = { previewSkuId: skuId, user, guildId };
                const tmp26 = closure_9(closure_14, obj6);
                cResult[14] = guildId;
                cResult[15] = skuId;
                cResult[16] = user;
                cResult[17] = tmp26;
                tmp24 = tmp26;
              }
            }
            class L {
              constructor(arg0) {
                ({ items, size, selectedSkuId } = user);
                obj = { items, size, selectedSkuId, setSelectedProfileEffect, guildId, isTryItOut };
                return jsx(closure_0(closure_2[29]).EditProfileEffectRow, obj);
              }
            }
            cResult[10] = guildId;
            cResult[11] = tmp4;
            cResult[12] = setSelectedProfileEffect;
            cResult[13] = L;
            tmp22 = L;
          }
        }
      }
      const tmpResult5 = user(guildId[26]);
      const profilePreviewValue = user(guildId[27]).getProfilePreviewValue({
        pendingValue: selectedProfileEffect,
        userValue: profileEffect,
        guildValue: profileEffect1,
        guildId,
      });
      cResult[2] = guildId;
      cResult[3] = selectedProfileEffect;
      cResult[4] = profileEffect;
      cResult[5] = profileEffect1;
      cResult[6] = profilePreviewValue;
      tmp16 = profilePreviewValue;
      const tmpResult6 = user(guildId[27]);
    }
  : function EditProfileEffectInner(user) {
      user = user.user;
      ({ selectedProfileEffect, setSelectedProfileEffect } = user);
      const guildId = user.guildId;
      let flag = user.isTryItOut;
      if (flag === undefined) {
        flag = false;
      }
      const getOrFetchCollectiblesCategoriesAndPurchases = user(
        guildId[23],
      ).useGetOrFetchCollectiblesCategoriesAndPurchases();
      const obj = user(guildId[23]);
      const items = [CollectiblesPurchaseStore];
      const stateFromStores = user(guildId[24]).useStateFromStores(items, () => isFetching.isFetching);
      const obj2 = user(guildId[24]);
      const tmp6 = setSelectedProfileEffect(guildId[25])();
      const shouldPinCollectiblesEditPreview = user(guildId[26]).useShouldPinCollectiblesEditPreview();
      const tmp8 = setSelectedProfileEffect(guildId[11])(user.id, guildId);
      const obj3 = user(guildId[26]);
      const obj5 = { pendingValue: selectedProfileEffect, userValue: null, guildValue: null, guildId: null };
      let profileEffect;
      if (tmp8 != null) {
        const _userProfile = tmp8._userProfile;
        if (_userProfile != null) {
          profileEffect = _userProfile.profileEffect;
        }
      }
      obj5.userValue = profileEffect;
      let profileEffect1;
      if (tmp8 != null) {
        const _guildMemberProfile = tmp8._guildMemberProfile;
        if (_guildMemberProfile != null) {
          profileEffect1 = _guildMemberProfile.profileEffect;
        }
      }
      obj5.guildValue = profileEffect1;
      obj5.guildId = guildId;
      const profilePreviewValue = user(guildId[27]).getProfilePreviewValue(obj5);
      const items1 = [user];
      const effect = noop.useEffect(() => {
        if (!tmp) {
          maybeFetchUserProfileDefault(user.id, user.getAvatarURL(null, 80), { withMutualGuilds: true });
        }
        tmp = null == user || user.isNonUserBot();
      }, items1);
      const items2 = [setSelectedProfileEffect, guildId, flag];
      let skuId;
      const callback = noop.useCallback((arg0) => {
        ({ items, size, selectedSkuId } = arg0);
        return React6(EditProfileEffectSection.EditProfileEffectRow, {
          items,
          size,
          selectedSkuId,
          setSelectedProfileEffect,
          guildId,
          isTryItOut: flag,
        });
      }, items2);
      if (profilePreviewValue != null) {
        skuId = profilePreviewValue.skuId;
      }
      const items3 = [closure_9(closure_14, { previewSkuId: skuId, user, guildId })];
      const obj6 = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
      let skuId1;
      const obj4 = user(guildId[27]);
      if (profilePreviewValue != null) {
        skuId1 = profilePreviewValue.skuId;
      }
      const obj7 = { children: null };
      obj6.previewSkuId = skuId1;
      const intl = tmp(tmp2[20]).intl;
      obj6.nitroJoinCTA = intl.string(user(guildId[20]).t.pertpd);
      const intl2 = tmp(tmp2[20]).intl;
      obj6.nitroUpgradeCTA = intl2.string(user(guildId[20]).t["5eotIZ"]);
      items3[1] = closure_9(setSelectedProfileEffect(guildId[30]), obj6);
      obj7.children = items3;
      const tmp14Result = closure_10(closure_11, obj7);
      let tmp22 = null;
      if (shouldPinCollectiblesEditPreview) {
        tmp22 = tmp14Result;
      }
      const items4 = [tmp22];
      const obj8 = {
        sections: tmp6,
        selectedSkuId: null,
        renderRow: null,
        isFetching: null,
        ListHeaderComponent: null,
      };
      let skuId2;
      if (selectedProfileEffect != null) {
        skuId2 = selectedProfileEffect.skuId;
      }
      obj8.selectedSkuId = skuId2;
      obj8.renderRow = callback;
      obj8.isFetching = stateFromStores;
      let tmp24 = null;
      if (!shouldPinCollectiblesEditPreview) {
        tmp24 = tmp14Result;
      }
      const obj9 = { children: null };
      obj8.ListHeaderComponent = tmp24;
      items4[1] = closure_9(user(guildId[31]).EditCollectiblesPickerList, obj8);
      obj9.children = items4;
      return closure_10(closure_11, obj9);
    };
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ProfileEffectSectionPreview(previewSkuId) {
      const cResult = c.c(16);
      ({ user, guildId } = previewSkuId);
      const tmp3 = closure_12();
      ({ product, purchase } = useCollectiblesDataDefault(previewSkuId.previewSkuId));
      let first;
      if (product != null) {
        first = product.items[0];
      }
      if (first == null) {
        let first1;
        if (purchase != null) {
          first1 = purchase.items[0];
        }
        first = first1;
      }
      let tmp8 = null;
      if (isProfileEffectRecord(first)) {
        tmp8 = first;
      }
      if (cResult[0] === guildId) {
        if (cResult[1] === tmp8) {
          if (cResult[2] === user) {
            let tmp9 = cResult[3];
          }
          const _Symbol = Symbol;
          if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
            const point = { x: 0, y: 0.6 };
            const point1 = { x: 0, y: 1 };
            cResult[4] = point;
            cResult[5] = point1;
            let tmp13 = point1;
            let tmp12 = point;
          } else {
            tmp12 = cResult[4];
            tmp13 = cResult[5];
          }
          const _HermesInternal = HermesInternal;
          const combined = "" + tmp3.previewGradient.color + "00";
          if (cResult[6] === tmp3.previewGradient.color) {
            if (cResult[7] === combined) {
              let tmp15 = cResult[8];
            }
            if (cResult[9] === tmp3.previewGradient) {
              if (cResult[10] === tmp15) {
                let tmp16 = cResult[11];
              }
              if (cResult[12] === tmp3.previewContainer) {
                if (cResult[13] === tmp9) {
                  if (cResult[14] === tmp16) {
                    let tmp19 = cResult[15];
                  }
                  return tmp19;
                }
              }
              const obj2 = { style: tmp3.previewContainer, children: null };
              const items = [tmp9, tmp16];
              obj2.children = items;
              const tmp22 = v65535(hasOwnProperty, obj2);
              cResult[12] = tmp3.previewContainer;
              cResult[13] = tmp9;
              cResult[14] = tmp16;
              cResult[15] = tmp22;
              tmp19 = tmp22;
            }
            const obj3 = { style: tmp3.previewGradient, start: tmp12, end: tmp13, colors: tmp15 };
            const tmp18 = React6(LinearGradientDefault, obj3);
            cResult[9] = tmp3.previewGradient;
            cResult[10] = tmp15;
            cResult[11] = tmp18;
            tmp16 = tmp18;
          }
          const items1 = [combined, tmp3.previewGradient.color];
          cResult[6] = tmp3.previewGradient.color;
          cResult[7] = combined;
          cResult[8] = items1;
          tmp15 = items1;
        }
      }
      const tmp10 = React6(ProfileEffectUserPreviewDefault, { user, guildId, profileEffect: tmp8, maxWidth: 250 });
      cResult[0] = guildId;
      cResult[1] = tmp8;
      cResult[2] = user;
      cResult[3] = tmp10;
      tmp9 = tmp10;
      const tmp5 = useCollectiblesDataDefault(previewSkuId.previewSkuId);
    }
  : function ProfileEffectSectionPreview(arg0) {
      let purchase;
      ({ previewSkuId, user, guildId } = arg0);
      const tmp = closure_12();
      const tmp2 = purchase(8635)(previewSkuId);
      const product = tmp2.product;
      c0 = product;
      purchase = tmp2.purchase;
      const items = [purchase, product];
      const obj = { style: tmp.previewContainer, children: null };
      const memo = noop.useMemo(() => {
        let first;
        if (_undefined != null) {
          first = _undefined.items[0];
        }
        if (first == null) {
          let first1;
          if (purchase != null) {
            first1 = purchase.items[0];
          }
          first = first1;
        }
        let tmp3 = null;
        if (isProfileEffectRecord(first)) {
          tmp3 = first;
        }
        return tmp3;
      }, items);
      const items1 = [closure_9(purchase(11019), { user, guildId, profileEffect: memo, maxWidth: 250 })];
      const obj2 = { style: tmp.previewGradient, start: { x: 0, y: 0.6 }, end: { x: 0, y: 1 }, colors: null };
      const items2 = ["" + tmp.previewGradient.color + "00", tmp.previewGradient.color];
      obj2.colors = items2;
      items1[1] = closure_9(purchase(5244), obj2);
      obj.children = items1;
      return closure_10(closure_5, obj);
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/EditProfileEffectActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function EditProfileEffectActionSheet(isTryItOut) {
      const cResult = guildId(first[10]).c(35);
      ({ user, currentProfileEffect, guildId } = isTryItOut);
      isTryItOut = isTryItOut.isTryItOut;
      closure_12();
      let str = user.id;
      let obj = guildId(first[10]);
      if (str == null) {
        str = "";
      }
      const tmp6Result = isTryItOut(first[11])(str);
      const tmp6 = isTryItOut(first[11]);
      first = _slicedToArray(noop.useState(currentProfileEffect), 2)[0];
      const tmp7 = _slicedToArray(noop.useState(currentProfileEffect), 2);
      const bottomSheetRef = guildId(first[12]).useBottomSheetRef().bottomSheetRef;
      let tmpResult = guildId(first[12]);
      const analyticsLocations = isTryItOut(first[13])(tmp5(tmp2[14]).EDIT_PROFILE_EFFECT_SHEET).analyticsLocations;
      if (cResult[0] !== tmp6Result) {
        let tmp11 = null != tmp6Result;
        if (tmp11) {
          let result;
          if (tmp6Result != null) {
            result = tmp6Result.hasPremiumCustomization();
          }
          tmp11 = result;
        }
        cResult[0] = tmp6Result;
        cResult[1] = tmp11;
        let tmp10 = tmp11;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] === guildId) {
        if (cResult[3] === tmp10) {
          let tmp13 = cResult[4];
        }
        _slicedToArray = tmp13;
        if (cResult[5] !== tmp13) {
          class R {
            constructor() {
              obj = closure_1(closure_2[15]);
              obj1 = {};
              merged = Object.assign(closure_3);
              obj1.is_fullscreen = true;
              trackResult = obj.track(AnalyticEvents.OPEN_POPOUT, obj1);
              return;
            }
          }
          cResult[5] = tmp13;
          class A {
            constructor(arg0) {
              tmp = closure_0;
              tmp2 = closure_2;
              obj = closure_0(closure_2[16]);
              purchasedItem = obj.getPurchasedItem(isTryItOut, "firstProfileEffect");
              if (purchasedItem == null) {
                purchasedItem = closure_2;
              }
              if (purchasedItem == null) {
                purchasedItem = null;
              }
              if (isTryItOut) {
                tmpResult = tmp(tmp2[17]);
                result = tmpResult.setTryItOutProfileEffect(purchasedItem);
              } else {
                tmpResult1 = tmp(tmp2[18]);
                obj1 = { guildId: null, profileEffect: null };
                tmp4 = guildId;
                obj1.guildId = guildId;
                obj1.profileEffect = purchasedItem;
                setPendingChangesResult = tmpResult1.setPendingChanges(obj1);
              }
              return;
            }
          }
        } else {
          class R {
            constructor() {
              obj = closure_1(closure_2[15]);
              obj1 = {};
              merged = Object.assign(closure_3);
              obj1.is_fullscreen = true;
              trackResult = obj.track(AnalyticEvents.OPEN_POPOUT, obj1);
              return;
            }
          }
        }
        if (cResult[7] === guildId) {
          class R {
            constructor() {
              obj = closure_1(closure_2[15]);
              obj1 = {};
              merged = Object.assign(closure_3);
              obj1.is_fullscreen = true;
              trackResult = obj.track(AnalyticEvents.OPEN_POPOUT, obj1);
              return;
            }
          }
        }
        class A {
          constructor(arg0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[16]);
            purchasedItem = obj.getPurchasedItem(isTryItOut, "firstProfileEffect");
            if (purchasedItem == null) {
              purchasedItem = closure_2;
            }
            if (purchasedItem == null) {
              purchasedItem = null;
            }
            if (isTryItOut) {
              tmpResult = tmp(tmp2[17]);
              result = tmpResult.setTryItOutProfileEffect(purchasedItem);
            } else {
              tmpResult1 = tmp(tmp2[18]);
              obj1 = { guildId: null, profileEffect: null };
              tmp4 = guildId;
              obj1.guildId = guildId;
              obj1.profileEffect = purchasedItem;
              setPendingChangesResult = tmpResult1.setPendingChanges(obj1);
            }
            return;
          }
        }
        cResult[7] = guildId;
        cResult[8] = isTryItOut;
        cResult[9] = first;
        cResult[10] = A;
      }
      let obj2 = {
        type: isTryItOut(first[14]).EDIT_PROFILE_EFFECT_SHEET,
        guild_id: guildId,
        profile_has_nitro_customization: tmp10,
      };
      cResult[2] = guildId;
      cResult[3] = tmp10;
      cResult[4] = obj2;
      tmp13 = obj2;
      const tmp5Result = isTryItOut(first[13]);
    }
  : function EditProfileEffectActionSheet(isTryItOut) {
      ({ user, currentProfileEffect, guildId } = isTryItOut);
      isTryItOut = isTryItOut.isTryItOut;
      dependencyMap = undefined;
      let selectedProfileEffect;
      let memo;
      let str = user.id;
      let tmp = closure_12();
      if (str == null) {
        str = "";
      }
      const tmp4Result = isTryItOut(8648)(str);
      dependencyMap = tmp4Result;
      const tmp6 = selectedProfileEffect(memo.useState(currentProfileEffect), 2);
      selectedProfileEffect = tmp6[0];
      const tmp4 = isTryItOut(8648);
      let obj = guildId(8632);
      const analyticsLocations = isTryItOut(7237)(tmp2(7262).EDIT_PROFILE_EFFECT_SHEET).analyticsLocations;
      const items = [guildId, tmp4Result];
      memo = memo.useMemo(() => {
        const obj = {
          type: AnalyticsLocationDefault.EDIT_PROFILE_EFFECT_SHEET,
          guild_id: guildId,
          profile_has_nitro_customization: null,
        };
        let tmp = null != closure_2;
        if (tmp) {
          let result;
          if (closure_2 != null) {
            result = closure_2.hasPremiumCustomization();
          }
          tmp = result;
        }
        obj.profile_has_nitro_customization = tmp;
        return obj;
      }, items);
      const items1 = [memo];
      const items2 = [selectedProfileEffect, guildId, isTryItOut];
      const callback = memo.useCallback(() => {
        const obj2 = {};
        const merged = Object.assign(memo);
        obj2.is_fullscreen = true;
        AnalyticsUtilsDefault.track(AnalyticEvents.OPEN_POPOUT, obj2);
      }, items1);
      const callback1 = memo.useCallback((arg0) => {
        let purchasedItem = useShopProductItems.getPurchasedItem(arg0, "firstProfileEffect");
        if (purchasedItem == null) {
          purchasedItem = first;
        }
        if (purchasedItem == null) {
          purchasedItem = null;
        }
        if (isTryItOut) {
          const result = UserProfileActionCreators.setTryItOutProfileEffect(purchasedItem);
          const tmpResult = UserProfileActionCreators;
        } else {
          const obj2 = { guildId, profileEffect: purchasedItem };
          UserProfileSettingsActionCreators.setPendingChanges(obj2);
          const tmpResult2 = UserProfileSettingsActionCreators;
        }
      }, items2);
      let obj2 = { value: analyticsLocations, children: null };
      const obj3 = {
        scrollable: true,
        ref: obj.useBottomSheetRef().bottomSheetRef,
        onExpand: callback,
        startExpanded: true,
        header: null,
        children: null,
      };
      const obj4 = { title: null };
      const intl = guildId(1128).intl;
      obj4.title = intl.string(guildId(1128).t["/6nv6N"]);
      obj3.header = closure_9(guildId(7232).BottomSheetTitleHeader, obj4);
      const tmp2Result = isTryItOut(7237);
      const items3 = [
        closure_9(closure_5, {
          style: tmp.container,
          children: closure_9(closure_13, {
            user,
            selectedProfileEffect,
            setSelectedProfileEffect: tmp6[1],
            guildId,
            isTryItOut,
          }),
        }),
      ];
      const obj6 = {
        user,
        currentSkuId: null,
        selectedSkuId: null,
        isTryItOut: null,
        onApply: null,
        analyticsLocations: null,
        analyticsSource: null,
      };
      let skuId;
      const obj5 = {
        style: tmp.container,
        children: closure_9(closure_13, {
          user,
          selectedProfileEffect,
          setSelectedProfileEffect: tmp6[1],
          guildId,
          isTryItOut,
        }),
      };
      if (currentProfileEffect != null) {
        skuId = currentProfileEffect.skuId;
      }
      obj6.currentSkuId = skuId;
      let skuId1;
      if (selectedProfileEffect != null) {
        skuId1 = selectedProfileEffect.skuId;
      }
      obj6.selectedSkuId = skuId1;
      obj6.isTryItOut = isTryItOut;
      obj6.onApply = callback1;
      obj6.analyticsLocations = analyticsLocations;
      obj6.analyticsSource = isTryItOut(7262).EDIT_PROFILE_EFFECT_SHEET;
      items3[1] = closure_9(isTryItOut(8634), obj6);
      obj3.children = items3;
      obj2.children = closure_10(guildId(5251).BottomSheet, obj3);
      return closure_9(guildId(7237).AnalyticsLocationProvider, obj2);
    };
