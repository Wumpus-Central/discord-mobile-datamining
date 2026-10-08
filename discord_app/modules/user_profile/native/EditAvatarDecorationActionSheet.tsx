// === Module 8258: EditAvatarDecorationActionSheet ===

// Module 8258 (EditAvatarDecorationActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import useShopProductItems from "useShopProductItems" /* 8271 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8273 */;
import HeaderAvatarDefault from "HeaderAvatar" /* 8358 */;
import EditAvatarDecorationSection from "EditAvatarDecorationSection" /* 13305 */;
import AvatarGridDefault from "AvatarGrid" /* 13312 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7267 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;

require = fn;
const View = fn(17).View;
const isAvatarDecorationRecord = fn(7257).isAvatarDecorationRecord;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, bounceOffset: { position: "absolute", top: -250, height: 250, right: 0, left: 0 }, title: null, avatarDisplayContainer: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.title = { alignSelf: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
obj2.avatarDisplayContainer = { flexDirection: "row", width: "100%", justifyContent: "center", alignItems: "center", paddingVertical: 16 };
let closure_13 = createStyles.createStyles(obj2);
fn(558);
let obj4 = { alignSelf: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditAvatarDecorationInner(guildId) {
  const cResult = user(guildId[11]).c(34);
  ({ pendingAvatarSrc, user } = guildId);
  ({ selectedAvatarDecoration, setSelectedAvatarDecoration } = guildId);
  guildId = guildId.guildId;
  const isTryItOut = tmp4;
  const obj = user(guildId[11]);
  const getOrFetchCollectiblesCategoriesAndPurchases = user(guildId[24]).useGetOrFetchCollectiblesCategoriesAndPurchases();
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
  const tmpResult = user(guildId[24]);
  const stateFromStores = user(guildId[25]).useStateFromStores(tmp6, tmp7);
  const tmp11 = setSelectedAvatarDecoration(guildId[26])();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildMemberStore];
    cResult[2] = items1;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] === guildId) {
    if (cResult[4] === user) {
      let tmp14 = cResult[5];
    }
    const stateFromStores1 = user(tmp2[25]).useStateFromStores(tmp12, tmp14);
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
                let tmp21 = cResult[14];
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
                  if (cResult[17] === tmp22) {
                    if (cResult[18] === user) {
                      let tmp23 = cResult[19];
                    }
                    class V {
                      constructor(arg0) {
                        ({ items, size, selectedSkuId } = guildId);
                        obj = { items, size, selectedSkuId, setSelectedAvatarDecoration: closure_1, guildId, isTryItOut };
                        return jsx(closure_0(closure_2[28]).EditAvatarDecorationRow, obj);
                      }
                    }
                    const _Symbol = Symbol;
                    if (cResult[20] === Symbol.for("react.memo_cache_sentinel")) {
                      const string = user(tmp2[19]).intl.string;
                      class V {
                        constructor(arg0) {
                          ({ items, size, selectedSkuId } = guildId);
                          obj = { items, size, selectedSkuId, setSelectedAvatarDecoration: closure_1, guildId, isTryItOut };
                          return jsx(closure_0(closure_2[28]).EditAvatarDecorationRow, obj);
                        }
                      }
                      const intl = user(tmp2[19]).intl;
                      const stringResult = intl.string(user(tmp2[19]).t.e1UiOa);
                      cResult[20] = tmp30;
                      cResult[21] = stringResult;
                      let tmp29 = stringResult;
                      let tmp28 = tmp30;
                    } else {
                      tmp28 = cResult[20];
                      tmp29 = cResult[21];
                    }
                    if (cResult[22] === undefined) {
                      if (cResult[23] === user) {
                        let tmp32 = cResult[24];
                      }
                      class V {
                        constructor(arg0) {
                          ({ items, size, selectedSkuId } = guildId);
                          obj = { items, size, selectedSkuId, setSelectedAvatarDecoration: closure_1, guildId, isTryItOut };
                          return jsx(closure_0(closure_2[28]).EditAvatarDecorationRow, obj);
                        }
                      }
                      if (cResult[25] === stateFromStores) {
                        if (cResult[26] === tmp21) {
                          if (cResult[27] === tmp11) {
                            if (cResult[28] === tmp35) {
                              let tmp36 = cResult[29];
                            }
                            if (cResult[30] === tmp23) {
                              if (cResult[31] === tmp32) {
                                if (cResult[32] === tmp36) {
                                  let tmp39 = cResult[33];
                                }
                                return tmp39;
                              }
                            }
                            class V {
                              constructor(arg0) {
                                ({ items, size, selectedSkuId } = guildId);
                                obj = { items, size, selectedSkuId, setSelectedAvatarDecoration: closure_1, guildId, isTryItOut };
                                return jsx(closure_0(closure_2[28]).EditAvatarDecorationRow, obj);
                              }
                            }
                            const obj2 = { children: null };
                            const items2 = [tmp23, tmp32, tmp36];
                            obj2.children = items2;
                            const tmp41 = closure_11(closure_12, obj2);
                            cResult[30] = tmp23;
                            cResult[31] = tmp32;
                            cResult[32] = tmp36;
                            cResult[33] = tmp41;
                            tmp39 = tmp41;
                          }
                        }
                      }
                      const obj3 = { sections: tmp11, selectedSkuId: undefined, renderRow: tmp21, isFetching: stateFromStores };
                      const tmp38 = closure_10(user(tmp2[30]).EditCollectiblesPickerList, obj3);
                      cResult[25] = stateFromStores;
                      cResult[26] = tmp21;
                      cResult[27] = tmp11;
                      cResult[28] = undefined;
                      cResult[29] = tmp38;
                      tmp36 = tmp38;
                    }
                    const obj4 = { user, previewSkuId: undefined, nitroJoinCTA: tmp28, nitroUpgradeCTA: tmp29 };
                    const tmp34 = closure_10(setSelectedAvatarDecoration(tmp2[29]), obj4);
                    cResult[22] = undefined;
                    cResult[23] = user;
                    cResult[24] = tmp34;
                    tmp32 = tmp34;
                  }
                }
              }
              const obj5 = { previewSkuId: undefined, user, guildId, pendingAvatarSrc };
              const tmp26 = closure_10(closure_15, obj5);
              cResult[15] = guildId;
              cResult[16] = pendingAvatarSrc;
              cResult[17] = undefined;
              cResult[18] = user;
              cResult[19] = tmp26;
              tmp23 = tmp26;
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
          tmp21 = V;
        }
      }
    }
    const tmpResult5 = user(tmp2[25]);
    const obj6 = { pendingValue: selectedAvatarDecoration, userValue: avatarDecoration, guildValue: avatarDecoration1, guildId };
    const profilePreviewValue = user(tmp2[27]).getProfilePreviewValue(obj6);
    cResult[6] = guildId;
    cResult[7] = selectedAvatarDecoration;
    cResult[8] = avatarDecoration;
    cResult[9] = avatarDecoration1;
    cResult[10] = profilePreviewValue;
    const tmpResult6 = user(tmp2[27]);
  }
  const fn2 = function _() {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  };
  cResult[3] = guildId;
  cResult[4] = user;
  cResult[5] = fn2;
  tmp14 = fn2;
  const tmpResult4 = user(guildId[25]);
}) : (function EditAvatarDecorationInner(pendingAvatarSrc) {
  const user = pendingAvatarSrc.user;
  ({ selectedAvatarDecoration, setSelectedAvatarDecoration } = pendingAvatarSrc);
  const guildId = pendingAvatarSrc.guildId;
  let flag = pendingAvatarSrc.isTryItOut;
  if (flag === undefined) {
    flag = false;
  }
  const getOrFetchCollectiblesCategoriesAndPurchases = user(guildId[24]).useGetOrFetchCollectiblesCategoriesAndPurchases();
  const obj = user(guildId[24]);
  const items = [CollectiblesPurchaseStore];
  const stateFromStores = user(guildId[25]).useStateFromStores(items, () => isFetching.isFetching);
  const obj2 = user(guildId[25]);
  const tmp6 = setSelectedAvatarDecoration(guildId[26])();
  const items1 = [GuildMemberStore];
  const stateFromStores1 = user(guildId[25]).useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  const obj3 = user(guildId[25]);
  const obj5 = { pendingValue: selectedAvatarDecoration, userValue: null, guildValue: null, guildId: null };
  let avatarDecoration;
  if (user != null) {
    avatarDecoration = user.avatarDecoration;
  }
  obj5.userValue = avatarDecoration;
  let avatarDecoration1;
  if (stateFromStores1 != null) {
    avatarDecoration1 = stateFromStores1.avatarDecoration;
  }
  obj5.guildValue = avatarDecoration1;
  obj5.guildId = guildId;
  const profilePreviewValue = user(guildId[27]).getProfilePreviewValue(obj5);
  const items2 = [setSelectedAvatarDecoration, guildId, flag];
  let skuId;
  const callback = noop.useCallback((arg0) => {
    ({ items, size, selectedSkuId } = arg0);
    return collapsed(EditAvatarDecorationSection.EditAvatarDecorationRow, { items, size, selectedSkuId, setSelectedAvatarDecoration, guildId, isTryItOut: flag });
  }, items2);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_10(closure_15, { previewSkuId: skuId, user, guildId, pendingAvatarSrc: pendingAvatarSrc.pendingAvatarSrc }), , ];
  const obj6 = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
  let skuId1;
  const obj4 = user(guildId[27]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj6.previewSkuId = skuId1;
  const intl = tmp(tmp2[19]).intl;
  obj6.nitroJoinCTA = intl.string(user(guildId[19]).t.FyBDiY);
  const intl2 = tmp(tmp2[19]).intl;
  obj6.nitroUpgradeCTA = intl2.string(user(guildId[19]).t.e1UiOa);
  items3[1] = closure_10(setSelectedAvatarDecoration(guildId[29]), obj6);
  const obj7 = { sections: tmp6, selectedSkuId: null, renderRow: null, isFetching: null };
  let skuId2;
  if (selectedAvatarDecoration != null) {
    skuId2 = selectedAvatarDecoration.skuId;
  }
  const obj8 = { children: null };
  obj7.selectedSkuId = skuId2;
  obj7.renderRow = callback;
  obj7.isFetching = stateFromStores;
  items3[2] = closure_10(user(guildId[30]).EditCollectiblesPickerList, obj7);
  obj8.children = items3;
  return closure_11(closure_12, obj8);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function AvatarDecorationSectionPreview(previewSkuId) {
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
          const obj3 = { style: tmp4.avatarDisplayContainer, accessibilityLabel: tmp10, accessibilityRole: "image", accessible: true, children: null };
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
    const obj4 = { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: tmp9, size: native.AvatarSizes.EDIT_AVATAR_DECORATION };
    const tmp17 = collapsed(HeaderAvatarDefault, obj4);
    const obj5 = { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: tmp9 };
    const tmp18 = collapsed(AvatarGridDefault, obj5);
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
}) : (function AvatarDecorationSectionPreview(previewSkuId) {
  ({ user, guildId, pendingAvatarSrc } = previewSkuId);
  let purchase;
  const tmp4 = purchase(8273)(previewSkuId.previewSkuId);
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
  const obj = { style: closure_13().avatarDisplayContainer, accessibilityLabel: null, accessibilityRole: "image", accessible: true, children: null };
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
  obj3.size = tmp10(1200).AvatarSizes.EDIT_AVATAR_DECORATION;
  const items1 = [closure_10(purchase(8358), obj3), closure_10(purchase(13312), { user, guildId, pendingAvatarSrc, pendingAvatarDecoration: memo })];
  obj.children = items1;
  return closure_11(View, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/EditAvatarDecorationActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EditAvatarDecorationActionSheet(arg0) {
  const cResult = setPendingAvatarDecoration(576).c(43);
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  const tmp4 = closure_13();
  if (cResult[0] === analyticsLocations) {
    if (cResult[1] === guildId) {
      if (cResult[2] === isTryItOut) {
        let tmp5 = cResult[3];
      }
      ({ pendingAvatar, setPendingAvatarDecoration } = selectedAvatarDecoration(8259)(tmp5));
      if (cResult[4] === pendingAvatar) {
        if (cResult[5] === user.id) {
          let tmp8 = cResult[6];
        }
        const tmp12 = _slicedToArray(noop.useState(currentAvatarDecoration), 2);
        selectedAvatarDecoration = tmp12[0];
        const bottomSheetRef = setPendingAvatarDecoration(8270).useBottomSheetRef().bottomSheetRef;
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
        const tmpResult = setPendingAvatarDecoration(8270);
        const analyticsLocations2 = tmp6(6841)(tmp14, tmp6(6865).EDIT_AVATAR_DECORATION_SHEET).analyticsLocations;
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor() {
              obj = closure_1(closure_1_2[17]);
              obj1 = { type: closure_1(closure_1_2[16]).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
              trackResult = obj.track(closure_1_9.OPEN_POPOUT, obj1);
              return;
            }
          }
          cResult[9] = L;
        } else {
          class L {
            constructor() {
              obj = closure_1(closure_1_2[17]);
              obj1 = { type: closure_1(closure_1_2[16]).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
              trackResult = obj.track(closure_1_9.OPEN_POPOUT, obj1);
              return;
            }
          }
        }
        if (cResult[10] === selectedAvatarDecoration) {
          class L {
            constructor() {
              obj = closure_1(closure_1_2[17]);
              obj1 = { type: closure_1(closure_1_2[16]).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
              trackResult = obj.track(closure_1_9.OPEN_POPOUT, obj1);
              return;
            }
          }
          const container = tmp4.container;
          if (cResult[13] !== tmp4.bounceOffset) {
            class L {
              constructor() {
                obj = closure_1(closure_1_2[17]);
                obj1 = { type: closure_1(closure_1_2[16]).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
                trackResult = obj.track(closure_1_9.OPEN_POPOUT, obj1);
                return;
              }
            }
            const obj2 = { style: tmp4.bounceOffset };
            const tmp22 = closure_10(View, obj2);
            cResult[13] = tmp4.bounceOffset;
            cResult[14] = tmp22;
          } else {
            class L {
              constructor() {
                obj = closure_1(closure_1_2[17]);
                obj1 = { type: closure_1(closure_1_2[16]).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
                trackResult = obj.track(closure_1_9.OPEN_POPOUT, obj1);
                return;
              }
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
            class L {
              constructor() {
                obj = closure_1(closure_1_2[17]);
                obj1 = { type: closure_1(closure_1_2[16]).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
                trackResult = obj.track(closure_1_9.OPEN_POPOUT, obj1);
                return;
              }
            }
            const stringResult = obj7.string(setPendingAvatarDecoration(1126).t.HykynS);
            cResult[15] = stringResult;
            const tmp23 = stringResult;
          } else {
            class L {
              constructor() {
                obj = closure_1(closure_1_2[17]);
                obj1 = { type: closure_1(closure_1_2[16]).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
                trackResult = obj.track(closure_1_9.OPEN_POPOUT, obj1);
                return;
              }
            }
          }
          if (cResult[16] !== tmp4.title) {
            class L {
              constructor() {
                obj = closure_1(closure_1_2[17]);
                obj1 = { type: closure_1(closure_1_2[16]).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
                trackResult = obj.track(closure_1_9.OPEN_POPOUT, obj1);
                return;
              }
            }
            const obj3 = { variant: "redesign/heading-18/bold", style: tmp4.title, accessibilityRole: "header", children: tmp23 };
            const tmp26 = closure_10(setPendingAvatarDecoration(5086).Text, obj3);
            cResult[16] = tmp4.title;
            cResult[17] = tmp26;
          } else {
            class L {
              constructor() {
                obj = closure_1(closure_1_2[17]);
                obj1 = { type: closure_1(closure_1_2[16]).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
                trackResult = obj.track(closure_1_9.OPEN_POPOUT, obj1);
                return;
              }
            }
          }
          if (cResult[18] === guildId) {
            class L {
              constructor() {
                obj = closure_1(closure_1_2[17]);
                obj1 = { type: closure_1(closure_1_2[16]).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true };
                trackResult = obj.track(closure_1_9.OPEN_POPOUT, obj1);
                return;
              }
            }
          }
          const obj4 = { user, guildId, pendingAvatarSrc: tmp8, selectedAvatarDecoration, setSelectedAvatarDecoration: tmp12[1], isTryItOut };
          const tmp30 = closure_10(closure_14, obj4);
          class N {
            constructor(arg0) {
              tmp = closure_0;
              obj = closure_0(closure_2[18]);
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
          cResult[18] = guildId;
          cResult[19] = isTryItOut;
          cResult[20] = tmp8;
          cResult[21] = selectedAvatarDecoration;
          cResult[22] = user;
          cResult[23] = tmp30;
        }
        class N {
          constructor(arg0) {
            tmp = closure_0;
            obj = closure_0(closure_2[18]);
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
        cResult[12] = N;
        const tmp6Result = tmp6(6841);
      }
      const tmp7 = selectedAvatarDecoration(8259)(tmp5);
      const obj5 = { userId: user.id, image: pendingAvatar };
      const pendingAvatarSrc = setPendingAvatarDecoration(8269).getPendingAvatarSrc(obj5);
      cResult[4] = pendingAvatar;
      cResult[5] = user.id;
      cResult[6] = pendingAvatarSrc;
      tmp8 = pendingAvatarSrc;
      const tmpResult2 = setPendingAvatarDecoration(8269);
    }
  }
  const obj6 = { analyticsLocations, isTryItOut, guildId };
  cResult[0] = analyticsLocations;
  cResult[1] = guildId;
  cResult[2] = isTryItOut;
  cResult[3] = obj6;
  tmp5 = obj6;
  let obj = setPendingAvatarDecoration(576);
}) : (function EditAvatarDecorationActionSheet(arg0) {
  ({ user, guildId, currentAvatarDecoration, isTryItOut, analyticsLocations } = arg0);
  let selectedAvatarDecoration;
  const tmp = closure_13();
  const tmp4 = selectedAvatarDecoration(8259)({ analyticsLocations, isTryItOut, guildId });
  const setPendingAvatarDecoration = tmp4.setPendingAvatarDecoration;
  const pendingAvatarSrc = setPendingAvatarDecoration(8269).getPendingAvatarSrc({ userId: user.id, image: tmp4.pendingAvatar });
  const tmp7 = _slicedToArray(noop.useState(currentAvatarDecoration), 2);
  selectedAvatarDecoration = tmp7[0];
  let obj = setPendingAvatarDecoration(8269);
  const obj2 = { userId: user.id, image: tmp4.pendingAvatar };
  const obj4 = setPendingAvatarDecoration(8270);
  if (analyticsLocations == null) {
    analyticsLocations = [];
  }
  const analyticsLocations2 = selectedAvatarDecoration(6841)(analyticsLocations, tmp2(6865).EDIT_AVATAR_DECORATION_SHEET).analyticsLocations;
  const items = [selectedAvatarDecoration, setPendingAvatarDecoration];
  const callback = noop.useCallback(() => {
    const obj = first(1264);
    obj.track(constants.OPEN_POPOUT, { type: first(6865).EDIT_AVATAR_DECORATION_SHEET, is_fullscreen: true });
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
  const obj6 = { scrollable: true, ref: obj4.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true, children: null };
  const obj7 = { style: tmp.container, children: null };
  const items1 = [closure_10(View, { style: tmp.bounceOffset }), , ];
  const obj9 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header", children: null };
  const intl = tmp5(1126).intl;
  obj9.children = intl.string(setPendingAvatarDecoration(1126).t.HykynS);
  items1[1] = closure_10(setPendingAvatarDecoration(5086).Text, obj9);
  items1[2] = closure_10(closure_14, { user, guildId, pendingAvatarSrc, selectedAvatarDecoration, setSelectedAvatarDecoration: tmp7[1], isTryItOut });
  obj7.children = items1;
  const items2 = [closure_11(View, obj7), ];
  const obj10 = { user, currentSkuId: null, selectedSkuId: null, isTryItOut: null, onApply: null, analyticsLocations: null, analyticsSource: null };
  let skuId;
  const obj8 = { style: tmp.bounceOffset };
  const tmp9 = selectedAvatarDecoration(6841);
  if (currentAvatarDecoration != null) {
    skuId = currentAvatarDecoration.skuId;
  }
  obj10.currentSkuId = skuId;
  let skuId1;
  if (selectedAvatarDecoration != null) {
    skuId1 = selectedAvatarDecoration.skuId;
  }
  const obj11 = { children: null };
  obj10.selectedSkuId = skuId1;
  obj10.isTryItOut = isTryItOut;
  obj10.onApply = callback1;
  obj10.analyticsLocations = analyticsLocations2;
  obj10.analyticsSource = selectedAvatarDecoration(6865).EDIT_AVATAR_DECORATION_SHEET;
  items2[1] = closure_10(selectedAvatarDecoration(8272), obj10);
  obj6.children = items2;
  obj5.children = closure_11(setPendingAvatarDecoration(6829).BottomSheet, obj6);
  obj11.children = closure_10(setPendingAvatarDecoration(6841).AnalyticsLocationProvider, obj5);
  return closure_10(setPendingAvatarDecoration(4787).ThemeContextProvider, obj11);
});