// discord_app/modules/user_profile/native/EditAvatarDecorationActionSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import useShopProductItems from "../../collectibles/hooks/useShopProductItems.tsx";
import useCollectiblesDataDefault from "../../collectibles/hooks/useCollectiblesData.tsx";
import HeaderAvatarDefault from "../../profile_customization/native/HeaderAvatar.tsx";
import EditAvatarDecorationSection from "../../collectibles/avatar_decorations/native/EditAvatarDecorationSection.tsx";
import AvatarGridDefault from "../../collectibles/avatar_decorations/native/AvatarGrid.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesPurchaseStore from "../../collectibles/CollectiblesPurchaseStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";

require = fn;
const View = fn(17).View;
const isAvatarDecorationRecord = fn(7690).isAvatarDecorationRecord;
const AnalyticEvents = fn(1084).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5004);
let closure_13 = createStyles.createStyles({
  container: { flex: 1 },
  avatarDisplayContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },
});
fn(558);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EditAvatarDecorationInner(guildId) {
      const cResult = user(guildId[10]).c(37);
      ({ pendingAvatarSrc, user } = guildId);
      ({ selectedAvatarDecoration, setSelectedAvatarDecoration } = guildId);
      guildId = guildId.guildId;
      const isTryItOut = tmp4;
      const obj = user(guildId[10]);
      const getOrFetchCollectiblesCategoriesAndPurchases = user(
        guildId[23],
      ).useGetOrFetchCollectiblesCategoriesAndPurchases();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [CollectiblesPurchaseStore];
        const fn = function o() {
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
      const tmp11 = setSelectedAvatarDecoration(guildId[25])();
      const tmpResult5 = user(guildId[24]);
      const shouldPinCollectiblesEditPreview = user(guildId[26]).useShouldPinCollectiblesEditPreview();
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildMemberStore];
        cResult[2] = items1;
        let tmp13 = items1;
      } else {
        tmp13 = cResult[2];
      }
      if (cResult[3] === guildId) {
        if (cResult[4] === user) {
          let tmp15 = cResult[5];
        }
        const stateFromStores1 = user(tmp2[24]).useStateFromStores(tmp13, tmp15);
        let avatarDecoration;
        if (user != null) {
          avatarDecoration = user.avatarDecoration;
        }
        let avatarDecoration1;
        if (stateFromStores1 != null) {
          avatarDecoration1 = stateFromStores1.avatarDecoration;
        }
        if (cResult[6] === guildId) {
          if (cResult[7] === selectedAvatarDecoration) {
            if (cResult[8] === avatarDecoration) {
              if (cResult[11] === guildId) {
                if (cResult[12] === tmp4) {
                  if (cResult[13] === setSelectedAvatarDecoration) {
                    let tmp22 = cResult[14];
                  }
                  class V {
                    constructor(arg0) {
                      ({ items, size, selectedSkuId } = guildId);
                      obj = { items, size, selectedSkuId, setSelectedAvatarDecoration: closure_1, guildId, isTryItOut };
                      return jsx(closure_0(closure_2[28]).EditAvatarDecorationRow, obj);
                    }
                  }
                  if (cResult[15] === guildId) {
                    if (cResult[16] === pendingAvatarSrc) {
                      if (cResult[17] === tmp23) {
                        if (cResult[18] === user) {
                          let tmp24 = cResult[19];
                        }
                        class V {
                          constructor(arg0) {
                            ({ items, size, selectedSkuId } = guildId);
                            obj = {
                              items,
                              size,
                              selectedSkuId,
                              setSelectedAvatarDecoration: closure_1,
                              guildId,
                              isTryItOut,
                            };
                            return jsx(closure_0(closure_2[28]).EditAvatarDecorationRow, obj);
                          }
                        }
                        const _Symbol = Symbol;
                        if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                          const string = user(tmp2[19]).intl.string;
                          class V {
                            constructor(arg0) {
                              ({ items, size, selectedSkuId } = guildId);
                              obj = {
                                items,
                                size,
                                selectedSkuId,
                                setSelectedAvatarDecoration: closure_1,
                                guildId,
                                isTryItOut,
                              };
                              return jsx(closure_0(closure_2[28]).EditAvatarDecorationRow, obj);
                            }
                          }
                          const intl = user(tmp2[19]).intl;
                          const stringResult = intl.string(user(tmp2[19]).t.e1UiOa);
                          cResult[20] = tmp31;
                          cResult[21] = stringResult;
                          let tmp30 = stringResult;
                          let tmp29 = tmp31;
                        } else {
                          tmp29 = cResult[20];
                          tmp30 = cResult[21];
                        }
                        if (cResult[22] === undefined) {
                          if (cResult[23] === user) {
                            let tmp33 = cResult[24];
                          }
                          if (cResult[25] === tmp24) {
                            if (cResult[26] === tmp33) {
                              let tmp36 = cResult[27];
                            }
                            class V {
                              constructor(arg0) {
                                ({ items, size, selectedSkuId } = guildId);
                                obj = {
                                  items,
                                  size,
                                  selectedSkuId,
                                  setSelectedAvatarDecoration: closure_1,
                                  guildId,
                                  isTryItOut,
                                };
                                return jsx(closure_0(closure_2[28]).EditAvatarDecorationRow, obj);
                              }
                            }
                            let skuId;
                            if (selectedAvatarDecoration != null) {
                              skuId = selectedAvatarDecoration.skuId;
                            }
                            let tmp41 = null;
                            if (!shouldPinCollectiblesEditPreview) {
                              tmp41 = tmp36;
                            }
                            if (cResult[28] === stateFromStores) {
                              if (cResult[29] === tmp22) {
                                if (cResult[30] === tmp11) {
                                  if (cResult[31] === skuId) {
                                    if (cResult[32] === tmp41) {
                                      let tmp42 = cResult[33];
                                    }
                                    if (cResult[34] === tmp39) {
                                      if (cResult[35] === tmp42) {
                                        let tmp45 = cResult[36];
                                      }
                                      return tmp45;
                                    }
                                    class V {
                                      constructor(arg0) {
                                        ({ items, size, selectedSkuId } = guildId);
                                        obj = {
                                          items,
                                          size,
                                          selectedSkuId,
                                          setSelectedAvatarDecoration: closure_1,
                                          guildId,
                                          isTryItOut,
                                        };
                                        return jsx(closure_0(closure_2[28]).EditAvatarDecorationRow, obj);
                                      }
                                    }
                                    const obj2 = { children: null };
                                    const items2 = [tmp39, tmp42];
                                    obj2.children = items2;
                                    const tmp47 = closure_11(closure_12, obj2);
                                    cResult[34] = tmp39;
                                    cResult[35] = tmp42;
                                    cResult[36] = tmp47;
                                    tmp45 = tmp47;
                                  }
                                }
                              }
                            }
                            const obj3 = {
                              sections: tmp11,
                              selectedSkuId: skuId,
                              renderRow: tmp22,
                              isFetching: stateFromStores,
                              ListHeaderComponent: tmp41,
                            };
                            const tmp44 = closure_10(user(tmp2[30]).EditCollectiblesPickerList, obj3);
                            cResult[28] = stateFromStores;
                            cResult[29] = tmp22;
                            cResult[30] = tmp11;
                            cResult[31] = skuId;
                            cResult[32] = tmp41;
                            cResult[33] = tmp44;
                            tmp42 = tmp44;
                          }
                          class V {
                            constructor(arg0) {
                              ({ items, size, selectedSkuId } = guildId);
                              obj = {
                                items,
                                size,
                                selectedSkuId,
                                setSelectedAvatarDecoration: closure_1,
                                guildId,
                                isTryItOut,
                              };
                              return jsx(closure_0(closure_2[28]).EditAvatarDecorationRow, obj);
                            }
                          }
                          const obj4 = { children: null };
                          const items3 = [tmp24, tmp33];
                          obj4.children = items3;
                          const tmp38 = closure_11(closure_12, obj4);
                          cResult[25] = tmp24;
                          cResult[26] = tmp33;
                          cResult[27] = tmp38;
                          tmp36 = tmp38;
                        }
                        const obj5 = { user, previewSkuId: undefined, nitroJoinCTA: tmp29, nitroUpgradeCTA: tmp30 };
                        const tmp35 = closure_10(setSelectedAvatarDecoration(tmp2[29]), obj5);
                        cResult[22] = undefined;
                        cResult[23] = user;
                        cResult[24] = tmp35;
                        tmp33 = tmp35;
                      }
                    }
                  }
                  const obj6 = { previewSkuId: undefined, user, guildId, pendingAvatarSrc };
                  const tmp27 = closure_10(closure_15, obj6);
                  cResult[15] = guildId;
                  cResult[16] = pendingAvatarSrc;
                  cResult[17] = undefined;
                  cResult[18] = user;
                  cResult[19] = tmp27;
                  tmp24 = tmp27;
                }
              }
              class V {
                constructor(arg0) {
                  ({ items, size, selectedSkuId } = guildId);
                  obj = { items, size, selectedSkuId, setSelectedAvatarDecoration: closure_1, guildId, isTryItOut };
                  return jsx(closure_0(closure_2[28]).EditAvatarDecorationRow, obj);
                }
              }
              cResult[11] = guildId;
              cResult[12] = tmp4;
              cResult[13] = setSelectedAvatarDecoration;
              cResult[14] = V;
              tmp22 = V;
            }
          }
        }
        const tmpResult7 = user(tmp2[24]);
        const obj7 = {
          pendingValue: selectedAvatarDecoration,
          userValue: avatarDecoration,
          guildValue: avatarDecoration1,
          guildId,
        };
        const profilePreviewValue = user(tmp2[27]).getProfilePreviewValue(obj7);
        cResult[6] = guildId;
        cResult[7] = selectedAvatarDecoration;
        cResult[8] = avatarDecoration;
        cResult[9] = avatarDecoration1;
        cResult[10] = profilePreviewValue;
        const tmpResult8 = user(tmp2[27]);
      }
      class O {
        constructor() {
          member = null;
          if (null != guildId) {
            tmp3 = closure_8;
            tmp4 = user;
            member = closure_8.getMember(tmp, user.id);
          }
          return member;
        }
      }
      cResult[3] = guildId;
      cResult[4] = user;
      cResult[5] = O;
      tmp15 = O;
      const tmpResult6 = user(guildId[26]);
    }
  : function EditAvatarDecorationInner(pendingAvatarSrc) {
      const user = pendingAvatarSrc.user;
      ({ selectedAvatarDecoration, setSelectedAvatarDecoration } = pendingAvatarSrc);
      const guildId = pendingAvatarSrc.guildId;
      let flag = pendingAvatarSrc.isTryItOut;
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
      const tmp6 = setSelectedAvatarDecoration(guildId[25])();
      const shouldPinCollectiblesEditPreview = user(guildId[26]).useShouldPinCollectiblesEditPreview();
      const obj3 = user(guildId[26]);
      const items1 = [GuildMemberStore];
      const stateFromStores1 = user(guildId[24]).useStateFromStores(items1, () => {
        let member = null;
        if (null != guildId) {
          member = GuildMemberStore.getMember(tmp, user.id);
        }
        return member;
      });
      const obj4 = user(guildId[24]);
      const obj6 = { pendingValue: selectedAvatarDecoration, userValue: null, guildValue: null, guildId: null };
      let avatarDecoration;
      if (user != null) {
        avatarDecoration = user.avatarDecoration;
      }
      obj6.userValue = avatarDecoration;
      let avatarDecoration1;
      if (stateFromStores1 != null) {
        avatarDecoration1 = stateFromStores1.avatarDecoration;
      }
      obj6.guildValue = avatarDecoration1;
      obj6.guildId = guildId;
      const profilePreviewValue = user(guildId[27]).getProfilePreviewValue(obj6);
      const items2 = [setSelectedAvatarDecoration, guildId, flag];
      let skuId;
      const callback = noop.useCallback((arg0) => {
        ({ items, size, selectedSkuId } = arg0);
        return v65535(EditAvatarDecorationSection.EditAvatarDecorationRow, {
          items,
          size,
          selectedSkuId,
          setSelectedAvatarDecoration,
          guildId,
          isTryItOut: flag,
        });
      }, items2);
      if (profilePreviewValue != null) {
        skuId = profilePreviewValue.skuId;
      }
      const items3 = [
        closure_10(closure_15, {
          previewSkuId: skuId,
          user,
          guildId,
          pendingAvatarSrc: pendingAvatarSrc.pendingAvatarSrc,
        }),
      ];
      const obj7 = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
      let skuId1;
      const obj5 = user(guildId[27]);
      if (profilePreviewValue != null) {
        skuId1 = profilePreviewValue.skuId;
      }
      const obj8 = { children: null };
      obj7.previewSkuId = skuId1;
      const intl = tmp(tmp2[19]).intl;
      obj7.nitroJoinCTA = intl.string(user(guildId[19]).t.FyBDiY);
      const intl2 = tmp(tmp2[19]).intl;
      obj7.nitroUpgradeCTA = intl2.string(user(guildId[19]).t.e1UiOa);
      items3[1] = closure_10(setSelectedAvatarDecoration(guildId[29]), obj7);
      obj8.children = items3;
      const tmp13Result = closure_11(closure_12, obj8);
      let tmp21 = null;
      if (shouldPinCollectiblesEditPreview) {
        tmp21 = tmp13Result;
      }
      const items4 = [tmp21];
      const obj9 = {
        sections: tmp6,
        selectedSkuId: null,
        renderRow: null,
        isFetching: null,
        ListHeaderComponent: null,
      };
      let skuId2;
      if (selectedAvatarDecoration != null) {
        skuId2 = selectedAvatarDecoration.skuId;
      }
      obj9.selectedSkuId = skuId2;
      obj9.renderRow = callback;
      obj9.isFetching = stateFromStores;
      let tmp23 = null;
      if (!shouldPinCollectiblesEditPreview) {
        tmp23 = tmp13Result;
      }
      const obj10 = { children: null };
      obj9.ListHeaderComponent = tmp23;
      items4[1] = closure_10(user(guildId[30]).EditCollectiblesPickerList, obj9);
      obj10.children = items4;
      return closure_11(closure_12, obj10);
    };
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AvatarDecorationSectionPreview(previewSkuId) {
      const cResult = c.c(13);
      ({ user, guildId, pendingAvatarSrc } = previewSkuId);
      const tmp4 = closure_13();
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
      let tmp9 = null;
      if (isAvatarDecorationRecord(first)) {
        tmp9 = first;
      }
      if (cResult[0] !== tmp9) {
        if (null != tmp9) {
          const intl2 = util.intl;
          const obj2 = { a11y_text: tmp9.label };
          let formatToPlainStringResult = intl2.formatToPlainString(util.t.Do2lxE, obj2);
        } else {
          const intl = util.intl;
          formatToPlainStringResult = intl.string(util.t["7hRBmC"]);
        }
        cResult[0] = tmp9;
        cResult[1] = formatToPlainStringResult;
      } else {
        if (cResult[2] === guildId) {
          if (cResult[3] === pendingAvatarSrc) {
            if (cResult[4] === tmp9) {
              if (cResult[5] === user) {
                let tmp13 = cResult[6];
                let tmp14 = cResult[7];
              }
              if (cResult[8] === tmp4.avatarDisplayContainer) {
                if (cResult[9] === tmp10) {
                  if (cResult[10] === tmp13) {
                    if (cResult[11] === tmp14) {
                      let tmp19 = cResult[12];
                    }
                    return tmp19;
                  }
                }
              }
              const obj3 = {
                style: tmp4.avatarDisplayContainer,
                accessibilityLabel: tmp10,
                accessibilityRole: "image",
                accessible: true,
                children: null,
              };
              const items = [tmp13, tmp14];
              obj3.children = items;
              const tmp22 = closure_1_11(View, obj3);
              cResult[8] = tmp4.avatarDisplayContainer;
              cResult[9] = tmp10;
              cResult[10] = tmp13;
              cResult[11] = tmp14;
              cResult[12] = tmp22;
              tmp19 = tmp22;
            }
          }
        }
        const obj4 = {
          user,
          guildId,
          pendingAvatarSrc,
          pendingAvatarDecoration: tmp9,
          size: native.AvatarSizes.EDIT_AVATAR_DECORATION,
        };
        const tmp17 = v65535(HeaderAvatarDefault, obj4);
        const obj5 = { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: tmp9 };
        const tmp18 = v65535(AvatarGridDefault, obj5);
        cResult[2] = guildId;
        cResult[3] = pendingAvatarSrc;
        cResult[4] = tmp9;
        cResult[5] = user;
        cResult[6] = tmp17;
        cResult[7] = tmp18;
        tmp14 = tmp18;
        tmp13 = tmp17;
        const tmp5Result = HeaderAvatarDefault;
      }
      const tmp6 = useCollectiblesDataDefault(previewSkuId.previewSkuId);
    }
  : function AvatarDecorationSectionPreview(previewSkuId) {
      ({ user, guildId, pendingAvatarSrc } = previewSkuId);
      let purchase;
      const tmp4 = purchase(8699)(previewSkuId.previewSkuId);
      const product = tmp4.product;
      _require = product;
      purchase = tmp4.purchase;
      const items = [purchase, product];
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
        if (isAvatarDecorationRecord(first)) {
          tmp3 = first;
        }
        return tmp3;
      }, items);
      const obj = {
        style: closure_13().avatarDisplayContainer,
        accessibilityLabel: null,
        accessibilityRole: "image",
        accessible: true,
        children: null,
      };
      if (null != memo) {
        const intl2 = require("util").intl;
        const obj2 = { a11y_text: memo.label };
        let formatToPlainStringResult = intl2.formatToPlainString(require("util").t.Do2lxE, obj2);
        let tmp10 = _require;
      } else {
        const intl = require("util").intl;
        formatToPlainStringResult = intl.string(require("util").t["7hRBmC"]);
        tmp10 = _require;
      }
      obj.accessibilityLabel = formatToPlainStringResult;
      const obj3 = { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo, size: null };
      const tmp = closure_13();
      obj3.size = tmp10(1199).AvatarSizes.EDIT_AVATAR_DECORATION;
      const items1 = [
        closure_10(purchase(8784), obj3),
        closure_10(purchase(14760), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo }),
      ];
      obj.children = items1;
      return closure_11(View, obj);
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/EditAvatarDecorationActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function EditAvatarDecorationActionSheet(arg0) {
      const cResult = setPendingAvatarDecoration(576).c(37);
      ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
      const tmp4 = closure_13();
      if (cResult[0] === analyticsLocations) {
        if (cResult[1] === guildId) {
          if (cResult[2] === isTryItOut) {
            let tmp5 = cResult[3];
          }
          ({ pendingAvatar, setPendingAvatarDecoration } = selectedAvatarDecoration(8685)(tmp5));
          if (cResult[4] === pendingAvatar) {
            if (cResult[5] === user.id) {
              let tmp8 = cResult[6];
            }
            const tmp12 = _slicedToArray(noop.useState(currentAvatarDecoration), 2);
            selectedAvatarDecoration = tmp12[0];
            const bottomSheetRef = setPendingAvatarDecoration(8696).useBottomSheetRef().bottomSheetRef;
            if (cResult[7] !== analyticsLocations) {
              let items = analyticsLocations;
              if (analyticsLocations == null) {
                items = [];
              }
              cResult[7] = analyticsLocations;
              cResult[8] = items;
              let tmp14 = items;
            } else {
              tmp14 = cResult[8];
            }
            const tmpResult = setPendingAvatarDecoration(8696);
            const analyticsLocations2 = tmp6(7289)(tmp14, tmp6(7314).EDIT_AVATAR_DECORATION_SHEET).analyticsLocations;
            const _Symbol = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const fn = function x() {
                const obj = first(1264);
                obj.track(constants.OPEN_POPOUT, {
                  type: first(7314).EDIT_AVATAR_DECORATION_SHEET,
                  is_fullscreen: true,
                });
              };
              cResult[9] = fn;
              let tmp18 = fn;
            } else {
              tmp18 = cResult[9];
            }
            if (cResult[10] === selectedAvatarDecoration) {
              if (cResult[11] === setPendingAvatarDecoration) {
                let tmp19 = cResult[12];
              }
              const _Symbol2 = Symbol;
              if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                const obj2 = { title: null };
                const intl = setPendingAvatarDecoration(1125).intl;
                obj2.title = intl.string(setPendingAvatarDecoration(1125).t.HykynS);
                const tmp22 = closure_10(setPendingAvatarDecoration(7284).BottomSheetTitleHeader, obj2);
                cResult[13] = tmp22;
                let tmp20 = tmp22;
              } else {
                tmp20 = cResult[13];
              }
              if (cResult[14] === guildId) {
                if (cResult[15] === isTryItOut) {
                  if (cResult[16] === tmp8) {
                    if (cResult[17] === selectedAvatarDecoration) {
                      if (cResult[18] === user) {
                        let tmp23 = cResult[19];
                      }
                      if (cResult[20] === tmp4.container) {
                        if (cResult[21] === tmp23) {
                          let tmp27 = cResult[22];
                        }
                        let skuId;
                        if (currentAvatarDecoration != null) {
                          skuId = currentAvatarDecoration.skuId;
                        }
                        let skuId1;
                        if (selectedAvatarDecoration != null) {
                          skuId1 = selectedAvatarDecoration.skuId;
                        }
                        if (cResult[23] === analyticsLocations2) {
                          if (cResult[24] === isTryItOut) {
                            if (cResult[25] === tmp19) {
                              if (cResult[26] === skuId1) {
                                if (cResult[27] === skuId) {
                                  if (cResult[28] === user) {
                                    let tmp34 = cResult[29];
                                  }
                                  if (cResult[30] === bottomSheetRef) {
                                    if (cResult[31] === tmp34) {
                                      if (cResult[32] === tmp27) {
                                        let tmp38 = cResult[33];
                                      }
                                      if (cResult[34] === analyticsLocations2) {
                                        if (cResult[35] === tmp38) {
                                          let tmp41 = cResult[36];
                                        }
                                        return tmp41;
                                      }
                                      const obj3 = { children: null };
                                      const obj4 = { value: analyticsLocations2, children: tmp38 };
                                      obj3.children = closure_10(
                                        setPendingAvatarDecoration(7289).AnalyticsLocationProvider,
                                        obj4,
                                      );
                                      const tmp43 = closure_10(
                                        setPendingAvatarDecoration(5070).ThemeContextProvider,
                                        obj3,
                                      );
                                      cResult[34] = analyticsLocations2;
                                      cResult[35] = tmp38;
                                      cResult[36] = tmp43;
                                      tmp41 = tmp43;
                                    }
                                  }
                                  const obj5 = {
                                    scrollable: true,
                                    ref: bottomSheetRef,
                                    onExpand: tmp18,
                                    startExpanded: true,
                                    header: tmp20,
                                    children: null,
                                  };
                                  const items1 = [tmp27, tmp34];
                                  obj5.children = items1;
                                  cResult[30] = bottomSheetRef;
                                  cResult[31] = tmp34;
                                  cResult[32] = tmp27;
                                  class H {
                                    constructor(arg0) {
                                      tmp = closure_0;
                                      obj = closure_0(closure_2[17]);
                                      purchasedItem = obj.getPurchasedItem(arg0, "firstAvatarDecoration");
                                      if (purchasedItem == null) {
                                        purchasedItem = closure_1;
                                      }
                                      if (purchasedItem == null) {
                                        purchasedItem = null;
                                      }
                                      tmpResult = tmp(purchasedItem);
                                      return;
                                    }
                                  }
                                  tmp38 = closure_11(setPendingAvatarDecoration(5301).BottomSheet, obj5);
                                  const tmp40 = closure_11(setPendingAvatarDecoration(5301).BottomSheet, obj5);
                                }
                              }
                            }
                          }
                        }
                        const obj6 = {
                          user,
                          currentSkuId: skuId,
                          selectedSkuId: skuId1,
                          isTryItOut,
                          onApply: tmp19,
                          analyticsLocations: analyticsLocations2,
                          analyticsSource: tmp6(7314).EDIT_AVATAR_DECORATION_SHEET,
                        };
                        const tmp37 = closure_10(tmp6(8698), obj6);
                        class H {
                          constructor(arg0) {
                            tmp = closure_0;
                            obj = closure_0(closure_2[17]);
                            purchasedItem = obj.getPurchasedItem(arg0, "firstAvatarDecoration");
                            if (purchasedItem == null) {
                              purchasedItem = closure_1;
                            }
                            if (purchasedItem == null) {
                              purchasedItem = null;
                            }
                            tmpResult = tmp(purchasedItem);
                            return;
                          }
                        }
                        cResult[24] = isTryItOut;
                        cResult[25] = tmp19;
                        cResult[26] = skuId1;
                        cResult[27] = skuId;
                        cResult[28] = user;
                        cResult[29] = tmp37;
                        tmp34 = tmp37;
                        const tmp6Result2 = tmp6(8698);
                      }
                      const obj7 = { style: tmp4.container, children: tmp23 };
                      const tmp30 = closure_10(View, obj7);
                      cResult[20] = tmp4.container;
                      cResult[21] = tmp23;
                      cResult[22] = tmp30;
                      tmp27 = tmp30;
                    }
                  }
                }
              }
              const obj8 = {
                user,
                guildId,
                pendingAvatarSrc: tmp8,
                selectedAvatarDecoration,
                setSelectedAvatarDecoration: tmp12[1],
                isTryItOut,
              };
              const tmp26 = closure_10(closure_14, obj8);
              cResult[14] = guildId;
              cResult[15] = isTryItOut;
              class H {
                constructor(arg0) {
                  tmp = closure_0;
                  obj = closure_0(closure_2[17]);
                  purchasedItem = obj.getPurchasedItem(arg0, "firstAvatarDecoration");
                  if (purchasedItem == null) {
                    purchasedItem = closure_1;
                  }
                  if (purchasedItem == null) {
                    purchasedItem = null;
                  }
                  tmpResult = tmp(purchasedItem);
                  return;
                }
              }
              cResult[16] = tmp8;
              cResult[17] = selectedAvatarDecoration;
              cResult[18] = user;
              cResult[19] = tmp26;
              tmp23 = tmp26;
            }
            class H {
              constructor(arg0) {
                tmp = closure_0;
                obj = closure_0(closure_2[17]);
                purchasedItem = obj.getPurchasedItem(arg0, "firstAvatarDecoration");
                if (purchasedItem == null) {
                  purchasedItem = closure_1;
                }
                if (purchasedItem == null) {
                  purchasedItem = null;
                }
                tmpResult = tmp(purchasedItem);
                return;
              }
            }
            cResult[10] = selectedAvatarDecoration;
            cResult[11] = setPendingAvatarDecoration;
            cResult[12] = H;
            tmp19 = H;
            const tmp6Result = tmp6(7289);
          }
          const tmp7 = selectedAvatarDecoration(8685)(tmp5);
          const obj9 = { userId: user.id, image: pendingAvatar };
          const pendingAvatarSrc = setPendingAvatarDecoration(8695).getPendingAvatarSrc(obj9);
          cResult[4] = pendingAvatar;
          cResult[5] = user.id;
          cResult[6] = pendingAvatarSrc;
          tmp8 = pendingAvatarSrc;
          const tmpResult2 = setPendingAvatarDecoration(8695);
        }
      }
      const obj10 = { analyticsLocations, isTryItOut, guildId };
      cResult[0] = analyticsLocations;
      cResult[1] = guildId;
      cResult[2] = isTryItOut;
      cResult[3] = obj10;
      tmp5 = obj10;
      let obj = setPendingAvatarDecoration(576);
    }
  : function EditAvatarDecorationActionSheet(arg0) {
      ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
      let selectedAvatarDecoration;
      const tmp4 = selectedAvatarDecoration(8685)({ analyticsLocations, isTryItOut, guildId });
      const setPendingAvatarDecoration = tmp4.setPendingAvatarDecoration;
      const tmp = closure_13();
      const pendingAvatarSrc = setPendingAvatarDecoration(8695).getPendingAvatarSrc({
        userId: user.id,
        image: tmp4.pendingAvatar,
      });
      const tmp7 = _slicedToArray(noop.useState(currentAvatarDecoration), 2);
      selectedAvatarDecoration = tmp7[0];
      let obj = setPendingAvatarDecoration(8695);
      const obj2 = { userId: user.id, image: tmp4.pendingAvatar };
      const obj4 = setPendingAvatarDecoration(8696);
      if (analyticsLocations == null) {
        analyticsLocations = [];
      }
      const analyticsLocations2 = selectedAvatarDecoration(7289)(
        analyticsLocations,
        tmp2(7314).EDIT_AVATAR_DECORATION_SHEET,
      ).analyticsLocations;
      const items = [selectedAvatarDecoration, setPendingAvatarDecoration];
      const callback = noop.useCallback(() => {
        const obj = first(1264);
        obj.track(constants.OPEN_POPOUT, { type: first(7314).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true });
      }, []);
      const callback1 = noop.useCallback((arg0) => {
        let purchasedItem = useShopProductItems.getPurchasedItem(arg0, "firstAvatarDecoration");
        if (purchasedItem == null) {
          purchasedItem = first;
        }
        if (purchasedItem == null) {
          purchasedItem = null;
        }
        setPendingAvatarDecoration(purchasedItem);
      }, items);
      const obj5 = { value: analyticsLocations2, children: null };
      const obj6 = {
        scrollable: true,
        ref: obj4.useBottomSheetRef().bottomSheetRef,
        onExpand: callback,
        startExpanded: true,
        header: null,
        children: null,
      };
      const obj7 = { title: null };
      const intl = tmp5(1125).intl;
      obj7.title = intl.string(setPendingAvatarDecoration(1125).t.HykynS);
      obj6.header = closure_10(setPendingAvatarDecoration(7284).BottomSheetTitleHeader, obj7);
      const tmp9 = selectedAvatarDecoration(7289);
      const items1 = [
        closure_10(View, {
          style: tmp.container,
          children: closure_10(closure_14, {
            user,
            guildId,
            pendingAvatarSrc,
            selectedAvatarDecoration,
            setSelectedAvatarDecoration: tmp7[1],
            isTryItOut,
          }),
        }),
      ];
      const obj9 = {
        user,
        currentSkuId: null,
        selectedSkuId: null,
        isTryItOut: null,
        onApply: null,
        analyticsLocations: null,
        analyticsSource: null,
      };
      let skuId;
      const obj8 = {
        style: tmp.container,
        children: closure_10(closure_14, {
          user,
          guildId,
          pendingAvatarSrc,
          selectedAvatarDecoration,
          setSelectedAvatarDecoration: tmp7[1],
          isTryItOut,
        }),
      };
      if (currentAvatarDecoration != null) {
        skuId = currentAvatarDecoration.skuId;
      }
      obj9.currentSkuId = skuId;
      let skuId1;
      if (selectedAvatarDecoration != null) {
        skuId1 = selectedAvatarDecoration.skuId;
      }
      const obj10 = { children: null };
      obj9.selectedSkuId = skuId1;
      obj9.isTryItOut = isTryItOut;
      obj9.onApply = callback1;
      obj9.analyticsLocations = analyticsLocations2;
      obj9.analyticsSource = selectedAvatarDecoration(7314).EDIT_AVATAR_DECORATION_SHEET;
      items1[1] = closure_10(selectedAvatarDecoration(8698), obj9);
      obj6.children = items1;
      obj5.children = closure_11(setPendingAvatarDecoration(5301).BottomSheet, obj6);
      obj10.children = closure_10(setPendingAvatarDecoration(7289).AnalyticsLocationProvider, obj5);
      return closure_10(setPendingAvatarDecoration(5070).ThemeContextProvider, obj10);
    };
