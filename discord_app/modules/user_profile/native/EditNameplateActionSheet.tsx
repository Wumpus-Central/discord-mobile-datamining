// === Module 14711: EditNameplateActionSheet ===

// Module 14711 (EditNameplateActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import LinearGradientDefault from "LinearGradient" /* 5387 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8264 */;
import useShopProductItems from "useShopProductItems" /* 8271 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8273 */;
import NameplateDummyUserPreview from "NameplateDummyUserPreview" /* 8990 */;
import NameplatePreview from "NameplatePreview" /* 11187 */;
import EditNameplateSection from "EditNameplateSection" /* 14713 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7267 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;

require = fn;
const View = fn(17).View;
const isNameplateRecord = fn(1990).isNameplateRecord;
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, bounceOffset: { position: "absolute", top: -250, height: 250, right: 0, left: 0 }, title: null, nameplatePreviewContainer: null, nameplateGradientContainer: null, nameplatePreviewGradient: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.title = { alignSelf: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
obj2.nameplatePreviewContainer = { width: "80%", alignSelf: "center", justifyContent: "center", alignItems: "center" };
obj2.nameplateGradientContainer = { width: "100%" };
let size = { position: "absolute", width: "100%", height: "100%", color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj2.nameplatePreviewGradient = size;
let closure_13 = createStyles.createStyles(obj2);
fn(558);
let obj4 = { alignSelf: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function EditNameplateInner(user) {
  const cResult = user(guildId[11]).c(32);
  user = user.user;
  ({ selectedNameplate, setSelectedNameplate } = user);
  guildId = user.guildId;
  const obj = user(guildId[11]);
  const getOrFetchCollectiblesCategoriesAndPurchases = user(guildId[22]).useGetOrFetchCollectiblesCategoriesAndPurchases();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesPurchaseStore];
    const fn = function n() {
      return isFetching.isFetching;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const obj2 = user(guildId[22]);
  const stateFromStores = user(guildId[23]).useStateFromStores(tmp5, tmp6);
  const tmp10 = setSelectedNameplate(guildId[24])();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildMemberStore];
    cResult[2] = items1;
    let tmp11 = items1;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === guildId) {
    if (cResult[4] === user) {
      let tmp13 = cResult[5];
    }
    const stateFromStores1 = tmp(tmp2[23]).useStateFromStores(tmp11, tmp13);
    let nameplate;
    if (user != null) {
      const collectibles = user.collectibles;
      if (collectibles != null) {
        nameplate = collectibles.nameplate;
      }
    }
    let nameplate1;
    if (stateFromStores1 != null) {
      const collectibles2 = stateFromStores1.collectibles;
      if (collectibles2 != null) {
        nameplate1 = collectibles2.nameplate;
      }
    }
    if (cResult[6] === guildId) {
      if (cResult[7] === selectedNameplate) {
        if (cResult[8] === nameplate) {
          if (cResult[9] === nameplate1) {
            let tmp18 = cResult[10];
          }
          if (cResult[11] === guildId) {
            if (cResult[12] === setSelectedNameplate) {
              let tmp20 = cResult[13];
            }
            let skuId;
            if (tmp18 != null) {
              skuId = tmp18.skuId;
            }
            if (cResult[14] === guildId) {
              if (cResult[15] === skuId) {
                if (cResult[16] === user) {
                  let tmp22 = cResult[17];
                }
                let skuId1;
                if (tmp18 != null) {
                  skuId1 = tmp18.skuId;
                }
                const _Symbol = Symbol;
                if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = tmp(tmp2[18]).intl;
                  const stringResult = intl.string(tmp(tmp2[18]).t["V+IE93"]);
                  const intl2 = tmp(tmp2[18]).intl;
                  const stringResult1 = intl2.string(tmp(tmp2[18]).t.a6SrkR);
                  cResult[18] = stringResult;
                  cResult[19] = stringResult1;
                  let tmp28 = stringResult1;
                  let tmp27 = stringResult;
                } else {
                  tmp27 = cResult[18];
                  tmp28 = cResult[19];
                }
                if (cResult[20] === skuId1) {
                  if (cResult[21] === user) {
                    let tmp31 = cResult[22];
                  }
                  let skuId2;
                  if (selectedNameplate != null) {
                    skuId2 = selectedNameplate.skuId;
                  }
                  if (cResult[23] === stateFromStores) {
                    if (cResult[24] === tmp20) {
                      if (cResult[25] === tmp10) {
                        if (cResult[26] === skuId2) {
                          let tmp35 = cResult[27];
                        }
                        if (cResult[28] === tmp22) {
                          if (cResult[29] === tmp31) {
                            if (cResult[30] === tmp35) {
                              let tmp38 = cResult[31];
                            }
                            return tmp38;
                          }
                        }
                        const obj3 = { children: null };
                        const items2 = [tmp22, tmp31, tmp35];
                        obj3.children = items2;
                        const tmp41 = closure_11(closure_12, obj3);
                        cResult[28] = tmp22;
                        cResult[29] = tmp31;
                        cResult[30] = tmp35;
                        cResult[31] = tmp41;
                        tmp38 = tmp41;
                      }
                    }
                  }
                  const obj4 = { sections: tmp10, selectedSkuId: skuId2, renderRow: tmp20, isFetching: stateFromStores };
                  const tmp37 = closure_10(tmp(tmp2[28]).EditCollectiblesPickerList, obj4);
                  cResult[23] = stateFromStores;
                  cResult[24] = tmp20;
                  cResult[25] = tmp10;
                  cResult[26] = skuId2;
                  cResult[27] = tmp37;
                  tmp35 = tmp37;
                }
                const obj5 = { user, previewSkuId: skuId1, nitroJoinCTA: tmp27, nitroUpgradeCTA: tmp28 };
                const tmp33 = closure_10(setSelectedNameplate(tmp2[27]), obj5);
                cResult[20] = skuId1;
                cResult[21] = user;
                cResult[22] = tmp33;
                tmp31 = tmp33;
              }
            }
            const obj6 = { previewSkuId: skuId, user, guildId };
            const tmp25 = closure_10(closure_15, obj6);
            cResult[14] = guildId;
            cResult[15] = skuId;
            cResult[16] = user;
            cResult[17] = tmp25;
            tmp22 = tmp25;
          }
          const fn2 = function k(arg0) {
            ({ items, size, selectedSkuId } = arg0);
            return collapsed(EditNameplateSection.EditNameplateRow, { items, size, selectedSkuId, setSelectedNameplate, guildId });
          };
          cResult[11] = guildId;
          cResult[12] = setSelectedNameplate;
          cResult[13] = fn2;
          tmp20 = fn2;
        }
      }
    }
    const tmpResult3 = tmp(tmp2[23]);
    const obj7 = { pendingValue: selectedNameplate, userValue: nameplate, guildValue: nameplate1, guildId };
    const profilePreviewValue = tmp(tmp2[25]).getProfilePreviewValue(obj7);
    cResult[6] = guildId;
    cResult[7] = selectedNameplate;
    cResult[8] = nameplate;
    cResult[9] = nameplate1;
    cResult[10] = profilePreviewValue;
    tmp18 = profilePreviewValue;
    const tmpResult4 = tmp(tmp2[25]);
  }
  class E {
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
  cResult[5] = E;
  tmp13 = E;
  const tmpResult = user(guildId[23]);
}) : (function EditNameplateInner(user) {
  user = user.user;
  ({ selectedNameplate, setSelectedNameplate } = user);
  const guildId = user.guildId;
  const getOrFetchCollectiblesCategoriesAndPurchases = user(guildId[22]).useGetOrFetchCollectiblesCategoriesAndPurchases();
  const obj = user(guildId[22]);
  const items = [CollectiblesPurchaseStore];
  const stateFromStores = user(guildId[23]).useStateFromStores(items, () => isFetching.isFetching);
  const obj2 = user(guildId[23]);
  const tmp6 = setSelectedNameplate(guildId[24])();
  const items1 = [GuildMemberStore];
  const stateFromStores1 = user(guildId[23]).useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  const obj3 = user(guildId[23]);
  const obj5 = { pendingValue: selectedNameplate, userValue: null, guildValue: null, guildId: null };
  let nameplate;
  if (user != null) {
    const collectibles = user.collectibles;
    if (collectibles != null) {
      nameplate = collectibles.nameplate;
    }
  }
  obj5.userValue = nameplate;
  let nameplate1;
  if (stateFromStores1 != null) {
    const collectibles2 = stateFromStores1.collectibles;
    if (collectibles2 != null) {
      nameplate1 = collectibles2.nameplate;
    }
  }
  obj5.guildValue = nameplate1;
  obj5.guildId = guildId;
  const profilePreviewValue = user(guildId[25]).getProfilePreviewValue(obj5);
  const items2 = [setSelectedNameplate, guildId];
  let skuId;
  const callback = noop.useCallback((arg0) => {
    ({ items, size, selectedSkuId } = arg0);
    return collapsed(EditNameplateSection.EditNameplateRow, { items, size, selectedSkuId, setSelectedNameplate, guildId });
  }, items2);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_10(closure_15, { previewSkuId: skuId, user, guildId }), , ];
  const obj6 = { user, previewSkuId: null, nitroJoinCTA: null, nitroUpgradeCTA: null };
  let skuId1;
  const obj4 = user(guildId[25]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  obj6.previewSkuId = skuId1;
  const intl = tmp(tmp2[18]).intl;
  obj6.nitroJoinCTA = intl.string(user(guildId[18]).t["V+IE93"]);
  const intl2 = tmp(tmp2[18]).intl;
  obj6.nitroUpgradeCTA = intl2.string(user(guildId[18]).t.a6SrkR);
  items3[1] = closure_10(setSelectedNameplate(guildId[27]), obj6);
  const obj7 = { sections: tmp6, selectedSkuId: null, renderRow: null, isFetching: null };
  let skuId2;
  if (selectedNameplate != null) {
    skuId2 = selectedNameplate.skuId;
  }
  const obj8 = { children: null };
  obj7.selectedSkuId = skuId2;
  obj7.renderRow = callback;
  obj7.isFetching = stateFromStores;
  items3[2] = closure_10(user(guildId[28]).EditCollectiblesPickerList, obj7);
  obj8.children = items3;
  return closure_11(closure_12, obj8);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function NameplateActionSheetPreview(previewSkuId) {
  const cResult = c.c(38);
  ({ user, guildId } = previewSkuId);
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
  if (isNameplateRecord(first)) {
    tmp9 = first;
  }
  if (cResult[0] !== tmp9) {
    if (null != tmp9) {
      const intl2 = util.intl;
      const obj2 = { a11y_text: tmp9.label };
      let formatToPlainStringResult = intl2.formatToPlainString(util.t.YJig7C, obj2);
    } else {
      const intl = util.intl;
      formatToPlainStringResult = intl.string(util.t.aqlsGS);
    }
    cResult[0] = tmp9;
    cResult[1] = formatToPlainStringResult;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp17 = collapsed(NameplateDummyUserPreview.NameplateDummyUserPreview, { width: 100 });
      const tmp18 = collapsed(NameplateDummyUserPreview.NameplateDummyUserPreview, { width: 140 });
      cResult[2] = tmp17;
      cResult[3] = tmp18;
      let tmp15 = tmp18;
      let tmp14 = tmp17;
    } else {
      tmp14 = cResult[2];
      tmp15 = cResult[3];
    }
    const _Symbol2 = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const point = { x: 0, y: 0.1 };
      const point1 = { x: 0, y: 0.8 };
      cResult[4] = point;
      cResult[5] = point1;
      let tmp20 = point1;
      let tmp19 = point;
    } else {
      tmp19 = cResult[4];
      tmp20 = cResult[5];
    }
    const _HermesInternal = HermesInternal;
    const combined = "" + tmp4.nameplatePreviewGradient.color + "00";
    if (cResult[6] === tmp4.nameplatePreviewGradient.color) {
      if (cResult[7] === combined) {
        let tmp22 = cResult[8];
      }
      if (cResult[9] === tmp4.nameplatePreviewGradient) {
        if (cResult[10] === tmp22) {
          let tmp23 = cResult[11];
        }
        if (cResult[12] === tmp4.nameplateGradientContainer) {
          if (cResult[13] === tmp23) {
            let tmp26 = cResult[14];
          }
          if (cResult[15] === guildId) {
            if (cResult[16] === tmp9) {
              if (cResult[17] === user) {
                let tmp30 = cResult[18];
              }
              const _Symbol3 = Symbol;
              if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp36 = collapsed(NameplateDummyUserPreview.NameplateDummyUserPreview, { width: 140 });
                const tmp37 = collapsed(NameplateDummyUserPreview.NameplateDummyUserPreview, { width: 100 });
                cResult[19] = tmp36;
                cResult[20] = tmp37;
                let tmp34 = tmp37;
                let tmp33 = tmp36;
              } else {
                tmp33 = cResult[19];
                tmp34 = cResult[20];
              }
              const _Symbol4 = Symbol;
              if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                const point2 = { x: 0, y: 0.2 };
                const point3 = { x: 0, y: 0.9 };
                cResult[21] = point2;
                cResult[22] = point3;
                let tmp39 = point3;
                let tmp38 = point2;
              } else {
                tmp38 = cResult[21];
                tmp39 = cResult[22];
              }
              const _HermesInternal2 = HermesInternal;
              const combined1 = "" + tmp4.nameplatePreviewGradient.color + "00";
              if (cResult[23] === tmp4.nameplatePreviewGradient.color) {
                if (cResult[24] === combined1) {
                  let tmp41 = cResult[25];
                }
                if (cResult[26] === tmp4.nameplatePreviewGradient) {
                  if (cResult[27] === tmp41) {
                    let tmp42 = cResult[28];
                  }
                  if (cResult[29] === tmp4.nameplateGradientContainer) {
                    if (cResult[30] === tmp42) {
                      let tmp45 = cResult[31];
                    }
                    if (cResult[32] === tmp4.nameplatePreviewContainer) {
                      if (cResult[33] === tmp26) {
                        if (cResult[34] === tmp30) {
                          if (cResult[35] === tmp45) {
                            if (cResult[36] === tmp10) {
                              let tmp49 = cResult[37];
                            }
                            return tmp49;
                          }
                        }
                      }
                    }
                    const obj3 = { style: tmp4.nameplatePreviewContainer, accessibilityLabel: tmp10, accessibilityRole: "image", accessible: true, children: null };
                    const items = [tmp26, tmp30, tmp45];
                    obj3.children = items;
                    const tmp52 = closure_1_11(View, obj3);
                    cResult[32] = tmp4.nameplatePreviewContainer;
                    cResult[33] = tmp26;
                    cResult[34] = tmp30;
                    cResult[35] = tmp45;
                    cResult[36] = tmp10;
                    cResult[37] = tmp52;
                    tmp49 = tmp52;
                  }
                  const obj4 = { style: tmp4.nameplateGradientContainer, children: null };
                  const items1 = [tmp33, tmp34, tmp42];
                  obj4.children = items1;
                  const tmp48 = closure_1_11(View, obj4);
                  cResult[29] = tmp4.nameplateGradientContainer;
                  cResult[30] = tmp42;
                  cResult[31] = tmp48;
                  tmp45 = tmp48;
                }
                const obj5 = { style: tmp4.nameplatePreviewGradient, start: tmp38, end: tmp39, colors: tmp41 };
                const tmp44 = collapsed(LinearGradientDefault, obj5);
                cResult[26] = tmp4.nameplatePreviewGradient;
                cResult[27] = tmp41;
                cResult[28] = tmp44;
                tmp42 = tmp44;
              }
              const items2 = [combined1, tmp4.nameplatePreviewGradient.color];
              cResult[23] = tmp4.nameplatePreviewGradient.color;
              cResult[24] = combined1;
              cResult[25] = items2;
              tmp41 = items2;
            }
          }
          const obj6 = { nameplate: tmp9, user, guildId, animate: true, "aria-hidden": true };
          const tmp32 = collapsed(NameplatePreview.NameplatePreview, obj6);
          cResult[15] = guildId;
          cResult[16] = tmp9;
          cResult[17] = user;
          cResult[18] = tmp32;
          tmp30 = tmp32;
        }
        const obj7 = { style: tmp4.nameplateGradientContainer, children: null };
        const items3 = [tmp14, tmp15, tmp23];
        obj7.children = items3;
        const tmp29 = closure_1_11(View, obj7);
        cResult[12] = tmp4.nameplateGradientContainer;
        cResult[13] = tmp23;
        cResult[14] = tmp29;
        tmp26 = tmp29;
      }
      const obj8 = { style: tmp4.nameplatePreviewGradient, start: tmp19, end: tmp20, colors: tmp22 };
      const tmp25 = collapsed(LinearGradientDefault, obj8);
      cResult[9] = tmp4.nameplatePreviewGradient;
      cResult[10] = tmp22;
      cResult[11] = tmp25;
      tmp23 = tmp25;
    }
    const items4 = [tmp4.nameplatePreviewGradient.color, combined];
    cResult[6] = tmp4.nameplatePreviewGradient.color;
    cResult[7] = combined;
    cResult[8] = items4;
    tmp22 = items4;
  }
  const tmp6 = useCollectiblesDataDefault(previewSkuId.previewSkuId);
}) : (function NameplateActionSheetPreview(arg0) {
  let purchase;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = closure_13();
  const tmp4 = purchase(8273)(previewSkuId);
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
    if (isNameplateRecord(first)) {
      tmp3 = first;
    }
    return tmp3;
  }, items);
  const obj = { style: tmp.nameplatePreviewContainer, accessibilityLabel: null, accessibilityRole: "image", accessible: true, children: null };
  if (null != memo) {
    const intl2 = require("util").intl;
    const obj2 = { a11y_text: memo.label };
    let formatToPlainStringResult = intl2.formatToPlainString(require("util").t.YJig7C, obj2);
    let tmp10 = _require;
  } else {
    const intl = require("util").intl;
    formatToPlainStringResult = intl.string(require("util").t.aqlsGS);
    tmp10 = _require;
  }
  obj.accessibilityLabel = formatToPlainStringResult;
  const obj3 = { style: tmp.nameplateGradientContainer, children: null };
  const items1 = [closure_10(tmp10(8990).NameplateDummyUserPreview, { width: 100 }), closure_10(tmp10(8990).NameplateDummyUserPreview, { width: 140 }), ];
  const obj4 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.1 }, end: { x: 0, y: 0.8 }, colors: null };
  const items2 = [tmp.nameplatePreviewGradient.color, "" + tmp.nameplatePreviewGradient.color + "00"];
  obj4.colors = items2;
  items1[2] = closure_10(purchase(5387), obj4);
  obj3.children = items1;
  const items3 = [closure_11(View, obj3), closure_10(tmp10(11187).NameplatePreview, { nameplate: memo, user, guildId, animate: true, "aria-hidden": true }), ];
  const obj5 = { style: tmp.nameplateGradientContainer, children: null };
  const items4 = [closure_10(tmp10(8990).NameplateDummyUserPreview, { width: 140 }), closure_10(tmp10(8990).NameplateDummyUserPreview, { width: 100 }), ];
  const obj6 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.2 }, end: { x: 0, y: 0.9 }, colors: null };
  const tmp2Result = purchase(5387);
  const items5 = ["" + tmp.nameplatePreviewGradient.color + "00", tmp.nameplatePreviewGradient.color];
  obj6.colors = items5;
  items4[2] = closure_10(purchase(5387), obj6);
  obj5.children = items4;
  items3[2] = closure_11(View, obj5);
  obj.children = items3;
  return closure_11(View, obj);
});
size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/EditNameplateActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function EditNameplateActionSheet(arg0) {
  const cResult = guildId(576).c(31);
  ({ user, currentNameplate, guildId } = arg0);
  const tmp4 = closure_13();
  let obj = guildId(576);
  const bottomSheetRef = guildId(8270).useBottomSheetRef().bottomSheetRef;
  const tmp5 = _slicedToArray(noop.useState(undefined), 2);
  const first = tmp5[0];
  let tmp7 = currentNameplate;
  if (undefined !== first) {
    tmp7 = first;
  }
  let obj2 = guildId(8270);
  const analyticsLocations = first(6841)(first(6865).EDIT_NAMEPLATE_SHEET).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const obj = first(1264);
      obj.track(constants.OPEN_POPOUT, { type: first(6865).EDIT_NAMEPLATE_SHEET, is_fullscreen: true });
    };
    cResult[0] = fn;
    let first1 = fn;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === guildId) {
    if (cResult[2] === first) {
      let tmp11 = cResult[3];
    }
    if (cResult[4] !== tmp4.bounceOffset) {
      const obj3 = { style: tmp4.bounceOffset };
      const tmp15 = closure_10(View, obj3);
      cResult[4] = tmp4.bounceOffset;
      cResult[5] = tmp15;
      let tmp12 = tmp15;
    } else {
      tmp12 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = guildId(1126).intl;
      const stringResult = intl.string(guildId(1126).t.BwdeM1);
      cResult[6] = stringResult;
      let tmp16 = stringResult;
    } else {
      tmp16 = cResult[6];
    }
    if (cResult[7] !== tmp4.title) {
      const obj4 = { variant: "redesign/heading-18/bold", style: tmp4.title, accessibilityRole: "header", children: tmp16 };
      const tmp20 = closure_10(guildId(5086).Text, obj4);
      cResult[7] = tmp4.title;
      cResult[8] = tmp20;
      let tmp18 = tmp20;
    } else {
      tmp18 = cResult[8];
    }
    if (cResult[9] === guildId) {
      if (cResult[10] === tmp7) {
        if (cResult[11] === user) {
          let tmp21 = cResult[12];
        }
        if (cResult[13] === tmp4.container) {
          if (cResult[14] === tmp12) {
            if (cResult[15] === tmp18) {
              if (cResult[16] === tmp21) {
                let tmp25 = cResult[17];
              }
              let skuId;
              if (currentNameplate != null) {
                skuId = currentNameplate.skuId;
              }
              let skuId1;
              if (tmp7 != null) {
                skuId1 = tmp7.skuId;
              }
              if (cResult[18] === analyticsLocations) {
                if (cResult[19] === tmp11) {
                  if (cResult[20] === skuId) {
                    if (cResult[21] === skuId1) {
                      if (cResult[22] === user) {
                        let tmp32 = cResult[23];
                      }
                      if (cResult[24] === bottomSheetRef) {
                        if (cResult[25] === tmp32) {
                          if (cResult[26] === tmp25) {
                            let tmp36 = cResult[27];
                          }
                          if (cResult[28] === analyticsLocations) {
                            if (cResult[29] === tmp36) {
                              let tmp39 = cResult[30];
                            }
                            return tmp39;
                          }
                          const obj5 = { value: analyticsLocations, children: tmp36 };
                          const tmp41 = closure_10(guildId(6841).AnalyticsLocationProvider, obj5);
                          cResult[28] = analyticsLocations;
                          cResult[29] = tmp36;
                          cResult[30] = tmp41;
                          tmp39 = tmp41;
                        }
                      }
                      const obj6 = { scrollable: true, ref: bottomSheetRef, onExpand: first1, startExpanded: true, children: null };
                      const items = [tmp25, tmp32];
                      obj6.children = items;
                      const tmp38 = closure_11(guildId(6829).BottomSheet, obj6);
                      cResult[24] = bottomSheetRef;
                      cResult[25] = tmp32;
                      cResult[26] = tmp25;
                      cResult[27] = tmp38;
                      tmp36 = tmp38;
                    }
                  }
                }
              }
              const obj7 = { user, currentSkuId: skuId, selectedSkuId: skuId1, onApply: tmp11, analyticsLocations, analyticsSource: tmp8(6865).EDIT_NAMEPLATE_SHEET };
              const tmp35 = closure_10(tmp8(8272), obj7);
              cResult[18] = analyticsLocations;
              cResult[19] = tmp11;
              cResult[20] = skuId;
              cResult[21] = skuId1;
              cResult[22] = user;
              cResult[23] = tmp35;
              tmp32 = tmp35;
              const tmp8Result = tmp8(8272);
            }
          }
        }
        const obj8 = { style: tmp4.container, children: null };
        const items1 = [tmp12, tmp18, tmp21];
        obj8.children = items1;
        const tmp28 = closure_11(View, obj8);
        cResult[13] = tmp4.container;
        cResult[14] = tmp12;
        cResult[15] = tmp18;
        cResult[16] = tmp21;
        cResult[17] = tmp28;
        tmp25 = tmp28;
      }
    }
    const obj9 = { user, selectedNameplate: tmp7, setSelectedNameplate: tmp5[1], guildId };
    const tmp24 = closure_10(closure_14, obj9);
    cResult[9] = guildId;
    cResult[10] = tmp7;
    cResult[11] = user;
    cResult[12] = tmp24;
    tmp21 = tmp24;
  }
  const fn2 = function k(arg0) {
    const obj2 = { guildId, nameplate: null };
    const obj = UserProfileSettingsActionCreators;
    let purchasedItem = useShopProductItems.getPurchasedItem(arg0, "firstNameplate");
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    obj2.nameplate = purchasedItem;
    obj.setPendingChanges(obj2);
  };
  cResult[1] = guildId;
  cResult[2] = first;
  cResult[3] = fn2;
  tmp11 = fn2;
  const tmp9 = first(6841);
}) : (function EditNameplateActionSheet(arg0) {
  ({ user, currentNameplate, guildId } = arg0);
  const tmp = closure_13();
  const tmp4 = _slicedToArray(noop.useState(undefined), 2);
  const first = tmp4[0];
  let tmp6 = currentNameplate;
  if (undefined !== first) {
    tmp6 = first;
  }
  let obj = guildId(8270);
  const tmp7 = first;
  const analyticsLocations = first(6841)(first(6865).EDIT_NAMEPLATE_SHEET).analyticsLocations;
  const items = [first, guildId];
  const callback = noop.useCallback(() => {
    const obj = first(1264);
    obj.track(constants.OPEN_POPOUT, { type: first(6865).EDIT_NAMEPLATE_SHEET, is_fullscreen: true });
  }, []);
  const callback1 = noop.useCallback((arg0) => {
    const obj2 = { guildId, nameplate: null };
    const obj = UserProfileSettingsActionCreators;
    let purchasedItem = useShopProductItems.getPurchasedItem(arg0, "firstNameplate");
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    obj2.nameplate = purchasedItem;
    obj.setPendingChanges(obj2);
  }, items);
  const obj3 = { value: analyticsLocations, children: null };
  const obj4 = { scrollable: true, ref: obj.useBottomSheetRef().bottomSheetRef, onExpand: callback, startExpanded: true, children: null };
  const obj5 = { style: tmp.container, children: null };
  const items1 = [closure_10(View, { style: tmp.bounceOffset }), , ];
  const obj7 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header", children: null };
  const intl = guildId(1126).intl;
  obj7.children = intl.string(guildId(1126).t.BwdeM1);
  items1[1] = closure_10(guildId(5086).Text, obj7);
  items1[2] = closure_10(closure_14, { user, selectedNameplate: tmp6, setSelectedNameplate: tmp4[1], guildId });
  obj5.children = items1;
  const items2 = [closure_11(View, obj5), ];
  const obj8 = { user, currentSkuId: null, selectedSkuId: null, onApply: null, analyticsLocations: null, analyticsSource: null };
  let skuId;
  const obj6 = { style: tmp.bounceOffset };
  const tmp8 = first(6841);
  if (currentNameplate != null) {
    skuId = currentNameplate.skuId;
  }
  obj8.currentSkuId = skuId;
  let skuId1;
  if (tmp6 != null) {
    skuId1 = tmp6.skuId;
  }
  obj8.selectedSkuId = skuId1;
  obj8.onApply = callback1;
  obj8.analyticsLocations = analyticsLocations;
  obj8.analyticsSource = tmp7(6865).EDIT_NAMEPLATE_SHEET;
  items2[1] = closure_10(first(8272), obj8);
  obj4.children = items2;
  obj3.children = closure_11(guildId(6829).BottomSheet, obj4);
  return closure_10(guildId(6841).AnalyticsLocationProvider, obj3);
});