// === Module 16988: CollectiblesShopEntryButton ===

// Module 16988 (CollectiblesShopEntryButton)
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 16986 */;
import MobileShopButtonCoachmarkDefault from "MobileShopButtonCoachmark" /* 16989 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import CollectiblesMarketingsStore from "CollectiblesMarketingsStore" /* 7107 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, tmp2;

let metroImportAll;
let metroImportDefault;
let metroRequire;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((shopButtonRef) => {
  let closure_1;
  let closure_2;
  let first;
  let items;
  let marketing;
  let navigateToShop;
  const obj = navigateToShop(576);
  const cResult = obj.c(18);
  ({ marketing, navigateToShop } = shopButtonRef);
  shopButtonRef = shopButtonRef.shopButtonRef;
  const obj2 = navigateToShop(6901);
  const tmp4 = _slicedToArray(obj2.useSelectedVersionedDismissibleContent(navigateToShop(2036).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING, marketing.version, undefined, true), 2);
  importDefault = tmp5;
  const tmp6 = tmp4[0] === navigateToShop(2036).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  dependencyMap = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = navigateToShop(1126).intl;
    const stringResult = intl.string(navigateToShop(1126).t.pWG4ze);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp4[1]) {
    if (cResult[2] === tmp6) {
      let tmp9;
      if (cResult[3] === navigateToShop) {
        tmp9 = cResult[4];
      }
      if (cResult[5] === tmp6) {
        if (cResult[6] === shopButtonRef) {
          let tmp10;
          if (cResult[7] === tmp9) {
            tmp10 = cResult[8];
          }
          if (cResult[9] === tmp4[1]) {
            if (cResult[10] === tmp6) {
              if (cResult[11] === marketing) {
                if (cResult[12] === navigateToShop) {
                  let tmp15;
                  if (cResult[13] === shopButtonRef) {
                    tmp15 = cResult[14];
                  }
                  if (cResult[15] === tmp10) {
                    let tmp19;
                    if (cResult[16] === tmp15) {
                      tmp19 = cResult[17];
                    }
                    return tmp19;
                  }
                  const obj3 = { children: items };
                  items = [tmp10, tmp15];
                  const tmp22 = closure_8(closure_7, obj3);
                  cResult[15] = tmp10;
                  cResult[16] = tmp15;
                  cResult[17] = tmp22;
                  tmp19 = tmp22;
                }
              }
            }
          }
          const obj4 = { marketing, shopButtonRef, navigateToShop, visible: tmp6, onDismiss: tmp4[1] };
          const tmp18 = closure_6(MobileShopButtonCoachmarkDefault, obj4);
          cResult[9] = tmp4[1];
          cResult[10] = tmp6;
          cResult[11] = marketing;
          cResult[12] = navigateToShop;
          cResult[13] = shopButtonRef;
          cResult[14] = tmp18;
          tmp15 = tmp18;
        }
      }
      const obj5 = { ref: shopButtonRef, IconComponent: navigateToShop(11776).ShopIcon, accessibilityLabel: first, onPress: tmp9, showRedDot: tmp6 };
      const tmp13 = YouScreenNavIconDefault;
      const tmp14 = closure_6(tmp13, obj5);
      cResult[5] = tmp6;
      cResult[6] = shopButtonRef;
      cResult[7] = tmp9;
      cResult[8] = tmp14;
      tmp10 = tmp14;
    }
  }
  class T {
    constructor() {
      tmp = closure_2;
      if (tmp) {
        tmp2 = closure_1;
        tmp3 = ContentDismissActionType;
        tmp4 = closure_1(ContentDismissActionType.TAKE_ACTION);
      }
      tmp5 = navigateToShop();
      return;
    }
  }
  cResult[1] = tmp4[1];
  cResult[2] = tmp6;
  cResult[3] = navigateToShop;
  cResult[4] = T;
  tmp9 = T;
}) : ((shopButtonRef) => {
  let closure_1;
  let closure_2;
  let intl;
  let items;
  let marketing;
  let navigateToShop;
  ({ marketing, navigateToShop } = shopButtonRef);
  shopButtonRef = shopButtonRef.shopButtonRef;
  const obj = navigateToShop(6901);
  const tmp = _slicedToArray(obj.useSelectedVersionedDismissibleContent(navigateToShop(2036).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING, marketing.version, undefined, true), 2);
  importDefault = tmp2;
  const tmp3 = tmp[0] === navigateToShop(2036).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  dependencyMap = tmp3;
  const obj2 = { children: items };
  const obj3 = {
    ref: shopButtonRef,
    IconComponent: navigateToShop(11776).ShopIcon,
    accessibilityLabel: intl.string(navigateToShop(1126).t.pWG4ze),
    onPress() {
      if (closure_2) {
        closure_1(ContentDismissActionType.TAKE_ACTION);
      }
      navigateToShop();
    },
    showRedDot: tmp3
  };
  const tmp4 = YouScreenNavIconDefault;
  intl = navigateToShop(1126).intl;
  items = [closure_6(tmp4, obj3), closure_6(MobileShopButtonCoachmarkDefault, { marketing, shopButtonRef, navigateToShop, visible: tmp3, onDismiss: tmp[1] })];
  return closure_8(closure_7, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((navigateToShop) => {
  let marketingBySurface;
  let num6;
  let tmp4;
  let tmp5;
  let tmp = navigateToShop;
  let obj = navigateToShop(576);
  const cResult = obj.c(13);
  navigateToShop = navigateToShop.navigateToShop;
  const shopButtonRef = navigateToShop.shopButtonRef;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesMarketingsStore];
    const fn = function c() {
      return marketingBySurface.getMarketingBySurface(navigateToShop(dependencyMap[13]).CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const tmp8 = null != stateFromStores && "dismissibleContent" in stateFromStores && stateFromStores.dismissibleContent === tmp(2036).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  let type1;
  if (stateFromStores != null) {
    type1 = stateFromStores.type;
  }
  if (type1 === tmp(7089).CollectiblesMarketingType.COACHMARK) {
    if (cResult[2] === navigateToShop) {
      if (cResult[3] === stateFromStores) {
        let tmp20;
        if (cResult[4] === shopButtonRef) {
          tmp20 = cResult[5];
        }
        return tmp20;
      }
    }
    const obj2 = { marketing: stateFromStores, navigateToShop, shopButtonRef };
    const tmp23 = closure_6(closure_9, obj2);
    cResult[2] = navigateToShop;
    cResult[3] = stateFromStores;
    cResult[4] = shopButtonRef;
    cResult[5] = tmp23;
    tmp20 = tmp23;
  } else {
    if (cResult[6] === navigateToShop) {
      let tmp10;
      let tmp12Result;
      if (cResult[7] === shopButtonRef) {
        tmp10 = cResult[8];
      }
      class S {
        constructor(arg0) {
          visibleContent = navigateToShop.visibleContent;
          markAsDismissed = navigateToShop.markAsDismissed;
          obj = { ref: markAsDismissed, IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
          tmp = shopButtonRef(closure_1_2[10]);
          obj.IconComponent = navigateToShop(closure_1_2[11]).ShopIcon;
          intl = navigateToShop(closure_1_2[9]).intl;
          obj.accessibilityLabel = intl.string(navigateToShop(closure_1_2[9]).t.pWG4ze);
          obj.onPress = function onPress() {
            navigateToShop();
            if (null != visibleContent) {
              markAsDismissed(ContentDismissActionType.PRIMARY);
            }
          };
          obj.showRedDot = null != visibleContent;
          return closure_1_6(tmp, obj);
        }
      }
      if (tmp8) {
        let type2;
        class S {
          constructor(arg0) {
            visibleContent = navigateToShop.visibleContent;
            markAsDismissed = navigateToShop.markAsDismissed;
            obj = { ref: markAsDismissed, IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
            tmp = shopButtonRef(closure_1_2[10]);
            obj.IconComponent = navigateToShop(closure_1_2[11]).ShopIcon;
            intl = navigateToShop(closure_1_2[9]).intl;
            obj.accessibilityLabel = intl.string(navigateToShop(closure_1_2[9]).t.pWG4ze);
            obj.onPress = function onPress() {
              navigateToShop();
              if (null != visibleContent) {
                markAsDismissed(ContentDismissActionType.PRIMARY);
              }
            };
            obj.showRedDot = null != visibleContent;
            return closure_1_6(tmp, obj);
          }
        }
        if (stateFromStores != null) {
          type2 = stateFromStores.type;
        }
        let prop = null;
        if (type2 === tmp(7089).CollectiblesMarketingType.BADGE) {
          prop = tmp(2036).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
        }
        const obj3 = { contentType: prop, latestVersion: num6, children: tmp10 };
        num6 = undefined;
        if (stateFromStores != null) {
          num6 = stateFromStores.version;
        }
        if (num6 == null) {
          num6 = 0;
        }
        tmp12Result = closure_6(tmp17, obj3);
      } else {
        let type;
        class S {
          constructor(arg0) {
            visibleContent = navigateToShop.visibleContent;
            markAsDismissed = navigateToShop.markAsDismissed;
            obj = { ref: markAsDismissed, IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
            tmp = shopButtonRef(closure_1_2[10]);
            obj.IconComponent = navigateToShop(closure_1_2[11]).ShopIcon;
            intl = navigateToShop(closure_1_2[9]).intl;
            obj.accessibilityLabel = intl.string(navigateToShop(closure_1_2[9]).t.pWG4ze);
            obj.onPress = function onPress() {
              navigateToShop();
              if (null != visibleContent) {
                markAsDismissed(ContentDismissActionType.PRIMARY);
              }
            };
            obj.showRedDot = null != visibleContent;
            return closure_1_6(tmp, obj);
          }
        }
        const tmp14 = shopButtonRef(10367);
        if (stateFromStores != null) {
          type = stateFromStores.type;
        }
        if (type === tmp(7089).CollectiblesMarketingType.BADGE) {
          let items2;
          class S {
            constructor(arg0) {
              visibleContent = navigateToShop.visibleContent;
              markAsDismissed = navigateToShop.markAsDismissed;
              obj = { ref: markAsDismissed, IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
              tmp = shopButtonRef(closure_1_2[10]);
              obj.IconComponent = navigateToShop(closure_1_2[11]).ShopIcon;
              intl = navigateToShop(closure_1_2[9]).intl;
              obj.accessibilityLabel = intl.string(navigateToShop(closure_1_2[9]).t.pWG4ze);
              obj.onPress = function onPress() {
                navigateToShop();
                if (null != visibleContent) {
                  markAsDismissed(ContentDismissActionType.PRIMARY);
                }
              };
              obj.showRedDot = null != visibleContent;
              return closure_1_6(tmp, obj);
            }
          }
          if (null != undefined) {
            const items1 = [];
            class S {
              constructor(arg0) {
                visibleContent = navigateToShop.visibleContent;
                markAsDismissed = navigateToShop.markAsDismissed;
                obj = { ref: markAsDismissed, IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
                tmp = shopButtonRef(closure_1_2[10]);
                obj.IconComponent = navigateToShop(closure_1_2[11]).ShopIcon;
                intl = navigateToShop(closure_1_2[9]).intl;
                obj.accessibilityLabel = intl.string(navigateToShop(closure_1_2[9]).t.pWG4ze);
                obj.onPress = function onPress() {
                  navigateToShop();
                  if (null != visibleContent) {
                    markAsDismissed(ContentDismissActionType.PRIMARY);
                  }
                };
                obj.showRedDot = null != visibleContent;
                return closure_1_6(tmp, obj);
              }
            }
            items2 = items1;
          }
          const obj4 = { contentTypes: items2, children: tmp10 };
          tmp12Result = closure_6(tmp14, obj4);
        }
        items2 = [];
      }
      cResult[9] = tmp10;
      cResult[10] = tmp8;
      cResult[11] = stateFromStores;
      cResult[12] = tmp12Result;
    }
    class S {
      constructor(arg0) {
        visibleContent = navigateToShop.visibleContent;
        markAsDismissed = navigateToShop.markAsDismissed;
        obj = { ref: markAsDismissed, IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
        tmp = shopButtonRef(closure_1_2[10]);
        obj.IconComponent = navigateToShop(closure_1_2[11]).ShopIcon;
        intl = navigateToShop(closure_1_2[9]).intl;
        obj.accessibilityLabel = intl.string(navigateToShop(closure_1_2[9]).t.pWG4ze);
        obj.onPress = function onPress() {
          navigateToShop();
          if (null != visibleContent) {
            markAsDismissed(ContentDismissActionType.PRIMARY);
          }
        };
        obj.showRedDot = null != visibleContent;
        return closure_1_6(tmp, obj);
      }
    }
    cResult[6] = navigateToShop;
    cResult[7] = shopButtonRef;
    cResult[8] = S;
    tmp10 = S;
  }
}) : ((navigateToShop) => {
  let marketingBySurface;
  let num;
  navigateToShop = navigateToShop.navigateToShop;
  const shopButtonRef = navigateToShop.shopButtonRef;
  let tmp = navigateToShop;
  let obj = navigateToShop(573);
  const items = [CollectiblesMarketingsStore];
  const stateFromStores = obj.useStateFromStores(items, () => marketingBySurface.getMarketingBySurface(navigateToShop(dependencyMap[13]).CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON));
  let type;
  const tmp4 = null != stateFromStores && "dismissibleContent" in stateFromStores && stateFromStores.dismissibleContent === tmp(2036).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  if (type === tmp(7089).CollectiblesMarketingType.COACHMARK) {
    const obj2 = { marketing: stateFromStores, navigateToShop, shopButtonRef };
    return closure_6(closure_9, obj2);
  } else {
    let tmp15Result;
    function content(visibleContent) {
      let intl;
      visibleContent = visibleContent.visibleContent;
      const markAsDismissed = visibleContent.markAsDismissed;
      const obj = {
        ref: markAsDismissed,
        IconComponent: navigateToShop(dependencyMap[11]).ShopIcon,
        accessibilityLabel: intl.string(navigateToShop(dependencyMap[9]).t.pWG4ze),
        onPress() {
          navigateToShop();
          if (null != visibleContent) {
            markAsDismissed(ContentDismissActionType.PRIMARY);
          }
        },
        showRedDot: null != visibleContent
      };
      const tmp = shopButtonRef(dependencyMap[10]);
      intl = navigateToShop(dependencyMap[9]).intl;
      return closure_1_6(tmp, obj);
    }
    if (tmp4) {
      let type1;
      const SelectedVersionedDismissibleContent = tmp(10367).SelectedVersionedDismissibleContent;
      if (stateFromStores != null) {
        type1 = stateFromStores.type;
      }
      let prop = null;
      if (type1 === tmp(7089).CollectiblesMarketingType.BADGE) {
        prop = tmp(2036).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
      }
      const obj3 = { contentType: prop, latestVersion: num, children: content };
      num = undefined;
      if (stateFromStores != null) {
        num = stateFromStores.version;
      }
      if (num == null) {
        num = 0;
      }
      tmp15Result = closure_6(SelectedVersionedDismissibleContent, obj3);
    } else {
      let type2;
      const tmp7 = shopButtonRef(10367);
      if (stateFromStores != null) {
        type2 = stateFromStores.type;
      }
      if (type2 === tmp(7089).CollectiblesMarketingType.BADGE) {
        let items2;
        let dismissibleContent;
        if (stateFromStores != null) {
          dismissibleContent = stateFromStores.dismissibleContent;
        }
        if (null != dismissibleContent) {
          const items1 = [stateFromStores.dismissibleContent];
          items2 = items1;
        }
        const obj4 = { contentTypes: items2, children: content };
        tmp15Result = closure_6(tmp7, obj4);
      }
      items2 = [];
    }
    return tmp15Result;
  }
});
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopEntryButton.tsx");

export default tmp4;