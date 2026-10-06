// === Module 14481: EditNameplateActionSheet ===

// Module 14481 (EditNameplateActionSheet)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import NameplateRecord from "NameplateRecord" /* 1978 */;
import LinearGradientDefault from "LinearGradient" /* 5612 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 7846 */;
import useShopProductItems from "useShopProductItems" /* 7853 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 7855 */;
import NameplateDummyUserPreview from "NameplateDummyUserPreview" /* 8506 */;
import NameplatePreview from "NameplatePreview" /* 11012 */;
import EditNameplateSection from "EditNameplateSection" /* 14483 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CollectiblesPurchaseStore from "CollectiblesPurchaseStore" /* 7081 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require;

let c10;
let closure_12;
let obj2;
let obj3;
let size;
let unpackModuleId;
const View = react_native.View;
const isNameplateRecord = NameplateRecord.isNameplateRecord;
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, bounceOffset: { position: "absolute", top: -250, height: 250, right: 0, left: 0 }, title: obj3, nameplatePreviewContainer: { width: "80%", alignSelf: "center", justifyContent: "center", alignItems: "center" }, nameplateGradientContainer: { width: "100%" }, nameplatePreviewGradient: size };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { alignSelf: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, margin: 25 };
size = { position: "absolute", width: "100%", height: "100%", color: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_13 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let currentNameplate;
  let first;
  let first1;
  let guildId;
  let items;
  let items1;
  let tmp7;
  let user;
  let obj = guildId(576);
  const cResult = obj.c(31);
  ({ user, currentNameplate, guildId } = arg0);
  const tmp4 = closure_13();
  let obj2 = guildId(7852);
  const bottomSheetRef = obj2.useBottomSheetRef().bottomSheetRef;
  [first, tmp7] = react.useState(undefined);
  let tmp8 = currentNameplate;
  if (undefined !== first) {
    tmp8 = first;
  }
  const tmp10 = first(6664);
  const analyticsLocations = tmp10(first(6688).EDIT_NAMEPLATE_SHEET).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o() {
      const obj = first(dependencyMap[15]);
      const obj2 = { type: first(dependencyMap[14]).EDIT_NAMEPLATE_SHEET, is_fullscreen: true };
      obj.track(constants.OPEN_POPOUT, obj2);
    };
    cResult[0] = fn;
    first1 = fn;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] === guildId) {
    let tmp12;
    let tmp13;
    let tmp17;
    let tmp19;
    if (cResult[2] === first) {
      tmp12 = cResult[3];
    }
    const container = tmp4.container;
    if (cResult[4] !== tmp4.bounceOffset) {
      const obj3 = { style: tmp4.bounceOffset };
      const tmp16 = closure_10(View, obj3);
      cResult[4] = tmp4.bounceOffset;
      cResult[5] = tmp16;
      tmp13 = tmp16;
    } else {
      tmp13 = cResult[5];
    }
    const _Symbol = Symbol;
    const title = tmp4.title;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = guildId(1126).intl;
      const stringResult = intl.string(guildId(1126).t.BwdeM1);
      cResult[6] = stringResult;
      tmp17 = stringResult;
    } else {
      tmp17 = cResult[6];
    }
    if (cResult[7] !== tmp4.title) {
      const obj4 = { variant: "redesign/heading-18/bold", style: title, accessibilityRole: "header", children: tmp17 };
      const tmp21 = closure_10(guildId(4892).Text, obj4);
      cResult[7] = tmp4.title;
      cResult[8] = tmp21;
      tmp19 = tmp21;
    } else {
      tmp19 = cResult[8];
    }
    if (cResult[9] === guildId) {
      if (cResult[10] === tmp8) {
        let tmp22;
        if (cResult[11] === user) {
          tmp22 = cResult[12];
        }
        if (cResult[13] === tmp4.container) {
          if (cResult[14] === tmp13) {
            if (cResult[15] === tmp19) {
              let tmp26;
              if (cResult[16] === tmp22) {
                tmp26 = cResult[17];
              }
              let skuId;
              if (currentNameplate != null) {
                skuId = currentNameplate.skuId;
              }
              let skuId1;
              if (tmp8 != null) {
                skuId1 = tmp8.skuId;
              }
              if (cResult[18] === analyticsLocations) {
                if (cResult[19] === tmp12) {
                  if (cResult[20] === skuId) {
                    if (cResult[21] === skuId1) {
                      let tmp33;
                      if (cResult[22] === user) {
                        tmp33 = cResult[23];
                      }
                      if (cResult[24] === bottomSheetRef) {
                        if (cResult[25] === tmp33) {
                          let tmp37;
                          if (cResult[26] === tmp26) {
                            tmp37 = cResult[27];
                          }
                          if (cResult[28] === analyticsLocations) {
                            let tmp40;
                            if (cResult[29] === tmp37) {
                              tmp40 = cResult[30];
                            }
                            return tmp40;
                          }
                          const obj5 = { value: analyticsLocations, children: tmp37 };
                          const tmp42 = closure_10(guildId(6664).AnalyticsLocationProvider, obj5);
                          cResult[28] = analyticsLocations;
                          cResult[29] = tmp37;
                          cResult[30] = tmp42;
                          tmp40 = tmp42;
                        }
                      }
                      const obj6 = { scrollable: true, ref: bottomSheetRef, onExpand: first1, startExpanded: true, children: items };
                      items = [tmp26, tmp33];
                      const tmp39 = closure_11(guildId(6652).BottomSheet, obj6);
                      cResult[24] = bottomSheetRef;
                      cResult[25] = tmp33;
                      cResult[26] = tmp26;
                      cResult[27] = tmp39;
                      tmp37 = tmp39;
                    }
                  }
                }
              }
              const obj7 = { user, currentSkuId: skuId, selectedSkuId: skuId1, onApply: tmp12, analyticsLocations, analyticsSource: first(6688).EDIT_NAMEPLATE_SHEET };
              const tmp9Result = first(7854);
              const tmp36 = closure_10(tmp9Result, obj7);
              cResult[18] = analyticsLocations;
              cResult[19] = tmp12;
              cResult[20] = skuId;
              cResult[21] = skuId1;
              cResult[22] = user;
              cResult[23] = tmp36;
              tmp33 = tmp36;
            }
          }
        }
        const obj8 = { style: container, children: items1 };
        items1 = [tmp13, tmp19, tmp22];
        const tmp29 = closure_11(View, obj8);
        cResult[13] = tmp4.container;
        cResult[14] = tmp13;
        cResult[15] = tmp19;
        cResult[16] = tmp22;
        cResult[17] = tmp29;
        tmp26 = tmp29;
      }
    }
    const obj9 = { user, selectedNameplate: tmp8, setSelectedNameplate: tmp7, guildId };
    const tmp25 = closure_10(closure_14, obj9);
    cResult[9] = guildId;
    cResult[10] = tmp8;
    cResult[11] = user;
    cResult[12] = tmp25;
    tmp22 = tmp25;
  }
  const fn2 = function k(arg0) {
    let purchasedItem;
    const obj = { guildId, nameplate: purchasedItem };
    const setPendingChanges = UserProfileSettingsActionCreators.setPendingChanges;
    UserProfileSettingsActionCreators;
    const obj2 = useShopProductItems;
    purchasedItem = obj2.getPurchasedItem(arg0, "firstNameplate");
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    setPendingChanges(obj);
  };
  cResult[1] = guildId;
  cResult[2] = first;
  cResult[3] = fn2;
  tmp12 = fn2;
}) : ((arg0) => {
  let currentNameplate;
  let first;
  let guildId;
  let intl;
  let items1;
  let items2;
  let obj4;
  let skuId;
  let skuId1;
  let tmp6;
  let tmp8;
  let user;
  ({ user, currentNameplate, guildId } = arg0);
  first = undefined;
  const tmp = closure_13();
  let obj = guildId(7852);
  const bottomSheetRef = obj.useBottomSheetRef().bottomSheetRef;
  [first, tmp6] = react.useState(undefined);
  let tmp7 = currentNameplate;
  if (undefined !== first) {
    tmp7 = first;
  }
  const tmp9 = first(6664);
  const analyticsLocations = tmp9(first(6688).EDIT_NAMEPLATE_SHEET).analyticsLocations;
  const items = [first, guildId];
  const callback = react.useCallback(() => {
    const obj = first(dependencyMap[15]);
    const obj2 = { type: first(dependencyMap[14]).EDIT_NAMEPLATE_SHEET, is_fullscreen: true };
    obj.track(constants.OPEN_POPOUT, obj2);
  }, []);
  const callback1 = react.useCallback((arg0) => {
    let purchasedItem;
    const obj = { guildId, nameplate: purchasedItem };
    const setPendingChanges = UserProfileSettingsActionCreators.setPendingChanges;
    UserProfileSettingsActionCreators;
    const obj2 = useShopProductItems;
    purchasedItem = obj2.getPurchasedItem(arg0, "firstNameplate");
    if (purchasedItem == null) {
      purchasedItem = first;
    }
    if (purchasedItem == null) {
      purchasedItem = null;
    }
    setPendingChanges(obj);
  }, items);
  const obj3 = { value: analyticsLocations, children: closure_11(BottomSheet, obj4) };
  const AnalyticsLocationProvider = guildId(6664).AnalyticsLocationProvider;
  obj4 = { scrollable: true, ref: bottomSheetRef, onExpand: callback, startExpanded: true, children: items2 };
  const obj5 = { style: tmp.container, children: items1 };
  const obj6 = { style: tmp.bounceOffset };
  BottomSheet = guildId(6652).BottomSheet;
  items1 = [closure_10(View, obj6), , ];
  const obj7 = { variant: "redesign/heading-18/bold", style: tmp.title, accessibilityRole: "header", children: intl.string(guildId(1126).t.BwdeM1) };
  const Text = guildId(4892).Text;
  intl = guildId(1126).intl;
  items1[1] = closure_10(Text, obj7);
  items1[2] = closure_10(closure_14, { user, selectedNameplate: tmp7, setSelectedNameplate: tmp6, guildId });
  items2 = [closure_11(View, obj5), ];
  const obj8 = { user, currentSkuId: skuId, selectedSkuId: skuId1, onApply: callback1, analyticsLocations, analyticsSource: tmp8(6688).EDIT_NAMEPLATE_SHEET };
  skuId = undefined;
  const tmp14 = first(7854);
  tmp8 = first;
  if (currentNameplate != null) {
    skuId = currentNameplate.skuId;
  }
  skuId1 = undefined;
  if (tmp7 != null) {
    skuId1 = tmp7.skuId;
  }
  items2[1] = closure_10(tmp14, obj8);
  return closure_10(AnalyticsLocationProvider, obj3);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((user) => {
  let guildId;
  let isFetching;
  let items2;
  let selectedNameplate;
  let setSelectedNameplate;
  let tmp11;
  let tmp5;
  let tmp6;
  const tmp = user;
  let obj = user(guildId[11]);
  const cResult = obj.c(32);
  user = user.user;
  ({ selectedNameplate, setSelectedNameplate } = user);
  guildId = user.guildId;
  const obj2 = user(guildId[22]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj2.useGetOrFetchCollectiblesCategoriesAndPurchases();
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
  const tmpResult = tmp(guildId[23]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmp10 = setSelectedNameplate(guildId[24])();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildMemberStore];
    cResult[2] = items1;
    tmp11 = items1;
  } else {
    tmp11 = cResult[2];
  }
  if (cResult[3] === guildId) {
    let tmp13;
    if (cResult[4] === user) {
      tmp13 = cResult[5];
    }
    const tmpResult3 = tmp(guildId[23]);
    const stateFromStores1 = tmpResult3.useStateFromStores(tmp11, tmp13);
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
          let tmp18;
          if (cResult[9] === nameplate1) {
            tmp18 = cResult[10];
          }
          if (cResult[11] === guildId) {
            let tmp20;
            if (cResult[12] === setSelectedNameplate) {
              tmp20 = cResult[13];
            }
            let skuId;
            if (tmp18 != null) {
              skuId = tmp18.skuId;
            }
            if (cResult[14] === guildId) {
              if (cResult[15] === skuId) {
                let tmp22;
                let tmp28;
                let tmp27;
                if (cResult[16] === user) {
                  tmp22 = cResult[17];
                }
                let skuId1;
                if (tmp18 != null) {
                  skuId1 = tmp18.skuId;
                }
                const _Symbol = Symbol;
                if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = tmp(tmp2[18]).intl;
                  const stringResult = intl.string(tmp(guildId[18]).t["V+IE93"]);
                  const intl2 = tmp(tmp2[18]).intl;
                  const stringResult1 = intl2.string(tmp(guildId[18]).t.a6SrkR);
                  cResult[18] = stringResult;
                  cResult[19] = stringResult1;
                  tmp28 = stringResult1;
                  tmp27 = stringResult;
                } else {
                  tmp27 = cResult[18];
                  tmp28 = cResult[19];
                }
                if (cResult[20] === skuId1) {
                  let tmp31;
                  if (cResult[21] === user) {
                    tmp31 = cResult[22];
                  }
                  let skuId2;
                  if (selectedNameplate != null) {
                    skuId2 = selectedNameplate.skuId;
                  }
                  if (cResult[23] === stateFromStores) {
                    if (cResult[24] === tmp20) {
                      if (cResult[25] === tmp10) {
                        let tmp35;
                        if (cResult[26] === skuId2) {
                          tmp35 = cResult[27];
                        }
                        if (cResult[28] === tmp22) {
                          if (cResult[29] === tmp31) {
                            let tmp38;
                            if (cResult[30] === tmp35) {
                              tmp38 = cResult[31];
                            }
                            return tmp38;
                          }
                        }
                        const obj3 = { children: items2 };
                        items2 = [tmp22, tmp31, tmp35];
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
                  const tmp37 = closure_10(tmp(guildId[28]).EditCollectiblesPickerList, obj4);
                  cResult[23] = stateFromStores;
                  cResult[24] = tmp20;
                  cResult[25] = tmp10;
                  cResult[26] = skuId2;
                  cResult[27] = tmp37;
                  tmp35 = tmp37;
                }
                const obj5 = { user, previewSkuId: skuId1, nitroJoinCTA: tmp27, nitroUpgradeCTA: tmp28 };
                const tmp33 = closure_10(setSelectedNameplate(guildId[27]), obj5);
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
            let items;
            let selectedSkuId;
            ({ items, size, selectedSkuId } = arg0);
            const obj = { items, size, selectedSkuId, setSelectedNameplate, guildId };
            return authStore(EditNameplateSection.EditNameplateRow, obj);
          };
          cResult[11] = guildId;
          cResult[12] = setSelectedNameplate;
          cResult[13] = fn2;
          tmp20 = fn2;
        }
      }
    }
    const obj7 = { pendingValue: selectedNameplate, userValue: nameplate, guildValue: nameplate1, guildId };
    const tmpResult4 = tmp(guildId[25]);
    const profilePreviewValue = tmpResult4.getProfilePreviewValue(obj7);
    cResult[6] = guildId;
    cResult[7] = selectedNameplate;
    cResult[8] = nameplate;
    cResult[9] = nameplate1;
    cResult[10] = profilePreviewValue;
    tmp18 = profilePreviewValue;
  }
  class E {
    constructor() {
      let member = null;
      if (null != guildId) {
        member = GuildMemberStore.getMember(tmp, user.id);
      }
      return member;
    }
  }
  cResult[3] = guildId;
  cResult[4] = user;
  cResult[5] = E;
  tmp13 = E;
}) : ((user) => {
  let intl;
  let intl2;
  let isFetching;
  let nameplate;
  let nameplate1;
  let selectedNameplate;
  let setSelectedNameplate;
  let skuId1;
  let skuId2;
  user = user.user;
  ({ selectedNameplate, setSelectedNameplate } = user);
  const guildId = user.guildId;
  const tmp = user;
  let obj = user(guildId[22]);
  const getOrFetchCollectiblesCategoriesAndPurchases = obj.useGetOrFetchCollectiblesCategoriesAndPurchases();
  const items = [CollectiblesPurchaseStore];
  const obj2 = user(guildId[23]);
  const stateFromStores = obj2.useStateFromStores(items, () => isFetching.isFetching);
  const items1 = [GuildMemberStore];
  const tmp6 = setSelectedNameplate(guildId[24])();
  const obj3 = user(guildId[23]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = GuildMemberStore.getMember(tmp, user.id);
    }
    return member;
  });
  const obj4 = { pendingValue: selectedNameplate, userValue: nameplate, guildValue: nameplate1, guildId };
  nameplate = undefined;
  const getProfilePreviewValue = user(guildId[25]).getProfilePreviewValue;
  user(guildId[25]);
  if (user != null) {
    const collectibles = user.collectibles;
    if (collectibles != null) {
      nameplate = collectibles.nameplate;
    }
  }
  nameplate1 = undefined;
  if (stateFromStores1 != null) {
    const collectibles2 = stateFromStores1.collectibles;
    if (collectibles2 != null) {
      nameplate1 = collectibles2.nameplate;
    }
  }
  const profilePreviewValue = getProfilePreviewValue(obj4);
  const items2 = [setSelectedNameplate, guildId];
  let skuId;
  const callback = react.useCallback((arg0) => {
    let items;
    let selectedSkuId;
    ({ items, size, selectedSkuId } = arg0);
    const obj = { items, size, selectedSkuId, setSelectedNameplate, guildId };
    return authStore(EditNameplateSection.EditNameplateRow, obj);
  }, items2);
  if (profilePreviewValue != null) {
    skuId = profilePreviewValue.skuId;
  }
  const items3 = [closure_10(closure_15, { previewSkuId: skuId, user, guildId }), , ];
  const obj5 = { user, previewSkuId: skuId1, nitroJoinCTA: intl.string(tmp(guildId[18]).t["V+IE93"]), nitroUpgradeCTA: intl2.string(tmp(guildId[18]).t.a6SrkR) };
  skuId1 = undefined;
  const tmp5Result = setSelectedNameplate(guildId[27]);
  if (profilePreviewValue != null) {
    skuId1 = profilePreviewValue.skuId;
  }
  intl = tmp(tmp2[18]).intl;
  intl2 = tmp(tmp2[18]).intl;
  items3[1] = closure_10(tmp5Result, obj5);
  const obj6 = { sections: tmp6, selectedSkuId: skuId2, renderRow: callback, isFetching: stateFromStores };
  skuId2 = undefined;
  const EditCollectiblesPickerList = tmp(tmp2[28]).EditCollectiblesPickerList;
  if (selectedNameplate != null) {
    skuId2 = selectedNameplate.skuId;
  }
  const obj7 = { children: items3 };
  items3[2] = closure_10(EditCollectiblesPickerList, obj6);
  return closure_11(closure_12, obj7);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((previewSkuId) => {
  let guildId;
  let items;
  let items1;
  let items3;
  let product;
  let purchase;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp17;
  let tmp18;
  let user;
  const obj = react2;
  const cResult = obj.c(38);
  ({ user, guildId } = previewSkuId);
  previewSkuId = previewSkuId.previewSkuId;
  const tmp4 = closure_13();
  ({ product, purchase } = useCollectiblesDataDefault(previewSkuId));
  let first;
  useCollectiblesDataDefault(previewSkuId);
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
    let formatToPlainStringResult;
    if (null != tmp9) {
      const intl2 = intl3.intl;
      const obj2 = { a11y_text: tmp9.label };
      formatToPlainStringResult = intl2.formatToPlainString(intl3.t.YJig7C, obj2);
    } else {
      const intl = intl3.intl;
      formatToPlainStringResult = intl.string(intl3.t.aqlsGS);
    }
    cResult[0] = tmp9;
    cResult[1] = formatToPlainStringResult;
    tmp10 = formatToPlainStringResult;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp15 = authStore(NameplateDummyUserPreview.NameplateDummyUserPreview, { width: 100 });
    const tmp16 = authStore(NameplateDummyUserPreview.NameplateDummyUserPreview, { width: 140 });
    cResult[2] = tmp15;
    cResult[3] = tmp16;
    tmp13 = tmp16;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[2];
    tmp13 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const point = { x: 0, y: 0.1 };
    const point1 = { x: 0, y: 0.8 };
    cResult[4] = point;
    cResult[5] = point1;
    tmp18 = point1;
    tmp17 = point;
  } else {
    tmp17 = cResult[4];
    tmp18 = cResult[5];
  }
  const combined = "" + tmp4.nameplatePreviewGradient.color + "00";
  if (cResult[6] === tmp4.nameplatePreviewGradient.color) {
    let tmp20;
    if (cResult[7] === combined) {
      tmp20 = cResult[8];
    }
    if (cResult[9] === tmp4.nameplatePreviewGradient) {
      let tmp21;
      if (cResult[10] === tmp20) {
        tmp21 = cResult[11];
      }
      if (cResult[12] === tmp4.nameplateGradientContainer) {
        let tmp24;
        if (cResult[13] === tmp21) {
          tmp24 = cResult[14];
        }
        if (cResult[15] === guildId) {
          if (cResult[16] === tmp9) {
            let tmp28;
            let tmp32;
            let tmp31;
            let tmp37;
            let tmp36;
            if (cResult[17] === user) {
              tmp28 = cResult[18];
            }
            const _Symbol = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp34 = authStore(NameplateDummyUserPreview.NameplateDummyUserPreview, { width: 140 });
              const tmp35 = authStore(NameplateDummyUserPreview.NameplateDummyUserPreview, { width: 100 });
              cResult[19] = tmp34;
              cResult[20] = tmp35;
              tmp32 = tmp35;
              tmp31 = tmp34;
            } else {
              tmp31 = cResult[19];
              tmp32 = cResult[20];
            }
            const _Symbol2 = Symbol;
            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
              const point2 = { x: 0, y: 0.2 };
              const point3 = { x: 0, y: 0.9 };
              cResult[21] = point2;
              cResult[22] = point3;
              tmp37 = point3;
              tmp36 = point2;
            } else {
              tmp36 = cResult[21];
              tmp37 = cResult[22];
            }
            const _HermesInternal = HermesInternal;
            const combined1 = "" + tmp4.nameplatePreviewGradient.color + "00";
            if (cResult[23] === tmp4.nameplatePreviewGradient.color) {
              let tmp39;
              if (cResult[24] === combined1) {
                tmp39 = cResult[25];
              }
              if (cResult[26] === tmp4.nameplatePreviewGradient) {
                let tmp40;
                if (cResult[27] === tmp39) {
                  tmp40 = cResult[28];
                }
                if (cResult[29] === tmp4.nameplateGradientContainer) {
                  let tmp43;
                  if (cResult[30] === tmp40) {
                    tmp43 = cResult[31];
                  }
                  if (cResult[32] === tmp4.nameplatePreviewContainer) {
                    if (cResult[33] === tmp24) {
                      if (cResult[34] === tmp28) {
                        if (cResult[35] === tmp43) {
                          let tmp47;
                          if (cResult[36] === tmp10) {
                            tmp47 = cResult[37];
                          }
                          return tmp47;
                        }
                      }
                    }
                  }
                  const obj3 = { style: tmp4.nameplatePreviewContainer, accessibilityLabel: tmp10, accessibilityRole: "image", accessible: true, children: items };
                  items = [tmp24, tmp28, tmp43];
                  const tmp50 = unpackModuleId(View, obj3);
                  cResult[32] = tmp4.nameplatePreviewContainer;
                  cResult[33] = tmp24;
                  cResult[34] = tmp28;
                  cResult[35] = tmp43;
                  cResult[36] = tmp10;
                  cResult[37] = tmp50;
                  tmp47 = tmp50;
                }
                const obj4 = { style: tmp4.nameplateGradientContainer, children: items1 };
                items1 = [tmp31, tmp32, tmp40];
                const tmp46 = unpackModuleId(View, obj4);
                cResult[29] = tmp4.nameplateGradientContainer;
                cResult[30] = tmp40;
                cResult[31] = tmp46;
                tmp43 = tmp46;
              }
              const obj5 = { style: tmp4.nameplatePreviewGradient, start: tmp36, end: tmp37, colors: tmp39 };
              const tmp42 = authStore(LinearGradientDefault, obj5);
              cResult[26] = tmp4.nameplatePreviewGradient;
              cResult[27] = tmp39;
              cResult[28] = tmp42;
              tmp40 = tmp42;
            }
            const items2 = [combined1, tmp4.nameplatePreviewGradient.color];
            cResult[23] = tmp4.nameplatePreviewGradient.color;
            cResult[24] = combined1;
            cResult[25] = items2;
            tmp39 = items2;
          }
        }
        const obj6 = { nameplate: tmp9, user, guildId, animate: true, "aria-hidden": true };
        const tmp30 = authStore(NameplatePreview.NameplatePreview, obj6);
        cResult[15] = guildId;
        cResult[16] = tmp9;
        cResult[17] = user;
        cResult[18] = tmp30;
        tmp28 = tmp30;
      }
      const obj7 = { style: tmp4.nameplateGradientContainer, children: items3 };
      items3 = [tmp12, tmp13, tmp21];
      const tmp27 = unpackModuleId(View, obj7);
      cResult[12] = tmp4.nameplateGradientContainer;
      cResult[13] = tmp21;
      cResult[14] = tmp27;
      tmp24 = tmp27;
    }
    const obj8 = { style: tmp4.nameplatePreviewGradient, start: tmp17, end: tmp18, colors: tmp20 };
    const tmp23 = authStore(LinearGradientDefault, obj8);
    cResult[9] = tmp4.nameplatePreviewGradient;
    cResult[10] = tmp20;
    cResult[11] = tmp23;
    tmp21 = tmp23;
  }
  const items4 = [tmp4.nameplatePreviewGradient.color, combined];
  cResult[6] = tmp4.nameplatePreviewGradient.color;
  cResult[7] = combined;
  cResult[8] = items4;
  tmp20 = items4;
}) : ((arg0) => {
  let _undefined;
  let formatToPlainStringResult;
  let guildId;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let previewSkuId;
  let tmp10;
  let user;
  let purchase;
  ({ previewSkuId, user, guildId } = arg0);
  const tmp = closure_13();
  const tmp4 = purchase(7855)(previewSkuId);
  const product = tmp4.product;
  _require = product;
  purchase = tmp4.purchase;
  const items = [purchase, product];
  const memo = react.useMemo(() => {
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
  const obj = { style: tmp.nameplatePreviewContainer, accessibilityLabel: formatToPlainStringResult, accessibilityRole: "image", accessible: true, children: items3 };
  if (null != memo) {
    const intl2 = require("intl").intl;
    const obj2 = { a11y_text: memo.label };
    formatToPlainStringResult = intl2.formatToPlainString(require("intl").t.YJig7C, obj2);
    tmp10 = _require;
  } else {
    const intl = require("intl").intl;
    formatToPlainStringResult = intl.string(require("intl").t.aqlsGS);
    tmp10 = _require;
  }
  const obj3 = { style: tmp.nameplateGradientContainer, children: items1 };
  items1 = [closure_10(tmp10(8506).NameplateDummyUserPreview, { width: 100 }), closure_10(tmp10(8506).NameplateDummyUserPreview, { width: 140 }), ];
  const obj4 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.1 }, end: { x: 0, y: 0.8 }, colors: items2 };
  items2 = [tmp.nameplatePreviewGradient.color, ];
  const tmp2Result = purchase(5612);
  items2[1] = "" + tmp.nameplatePreviewGradient.color + "00";
  items1[2] = closure_10(tmp2Result, obj4);
  items3 = [closure_11(View, obj3), closure_10(tmp10(11012).NameplatePreview, { nameplate: memo, user, guildId, animate: true, "aria-hidden": true }), ];
  const obj5 = { style: tmp.nameplateGradientContainer, children: items4 };
  items4 = [closure_10(tmp10(8506).NameplateDummyUserPreview, { width: 140 }), closure_10(tmp10(8506).NameplateDummyUserPreview, { width: 100 }), ];
  const obj6 = { style: tmp.nameplatePreviewGradient, start: { x: 0, y: 0.2 }, end: { x: 0, y: 0.9 }, colors: items5 };
  items5 = [, ];
  const tmp2Result2 = purchase(5612);
  items5[0] = "" + tmp.nameplatePreviewGradient.color + "00";
  items5[1] = tmp.nameplatePreviewGradient.color;
  items4[2] = closure_10(tmp2Result2, obj6);
  items3[2] = closure_11(View, obj5);
  return closure_11(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/EditNameplateActionSheet.tsx");

export default tmp4;