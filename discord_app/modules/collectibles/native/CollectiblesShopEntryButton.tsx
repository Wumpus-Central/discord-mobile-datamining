// === Module 16988: CollectiblesShopEntryButton ===

// Module 16988 (CollectiblesShopEntryButton)
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 16986 */;
import MobileShopButtonCoachmarkDefault from "MobileShopButtonCoachmark" /* 16989 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CollectiblesMarketingsStore from "CollectiblesMarketingsStore" /* 7107 */;

const require = fn;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((shopButtonRef) => {
  const cResult = navigateToShop(576).c(18);
  ({ marketing, navigateToShop } = shopButtonRef);
  shopButtonRef = shopButtonRef.shopButtonRef;
  const obj = navigateToShop(576);
  const tmp4 = _slicedToArray(navigateToShop(6901).useSelectedVersionedDismissibleContent(navigateToShop(2036).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING, marketing.version, undefined, true), 2);
  importDefault = tmp5;
  const tmp6 = tmp4[0] === navigateToShop(2036).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  dependencyMap = tmp6;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = navigateToShop(1126).intl;
    const stringResult = intl.string(navigateToShop(1126).t.pWG4ze);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === tmp4[1]) {
    if (cResult[2] === tmp6) {
      if (cResult[3] === navigateToShop) {
        let tmp9 = cResult[4];
      }
      if (cResult[5] === tmp6) {
        if (cResult[6] === shopButtonRef) {
          if (cResult[7] === tmp9) {
            let tmp10 = cResult[8];
          }
          if (cResult[9] === tmp5) {
            if (cResult[10] === tmp6) {
              if (cResult[11] === marketing) {
                if (cResult[12] === navigateToShop) {
                  if (cResult[13] === shopButtonRef) {
                    let tmp15 = cResult[14];
                  }
                  if (cResult[15] === tmp10) {
                    if (cResult[16] === tmp15) {
                      let tmp19 = cResult[17];
                    }
                    return tmp19;
                  }
                  const obj3 = { children: null };
                  const items = [tmp10, tmp15];
                  obj3.children = items;
                  const tmp22 = closure_8(closure_7, obj3);
                  cResult[15] = tmp10;
                  cResult[16] = tmp15;
                  cResult[17] = tmp22;
                  tmp19 = tmp22;
                }
              }
            }
          }
          const obj4 = { marketing, shopButtonRef, navigateToShop, visible: tmp6, onDismiss: tmp5 };
          const tmp18 = closure_6(MobileShopButtonCoachmarkDefault, obj4);
          cResult[9] = tmp5;
          cResult[10] = tmp6;
          cResult[11] = marketing;
          cResult[12] = navigateToShop;
          cResult[13] = shopButtonRef;
          cResult[14] = tmp18;
          tmp15 = tmp18;
        }
      }
      const obj5 = { ref: shopButtonRef, IconComponent: navigateToShop(11776).ShopIcon, accessibilityLabel: first, onPress: tmp9, showRedDot: tmp6 };
      const tmp14 = closure_6(YouScreenNavIconDefault, obj5);
      cResult[5] = tmp6;
      cResult[6] = shopButtonRef;
      cResult[7] = tmp9;
      cResult[8] = tmp14;
      tmp10 = tmp14;
    }
  }
  class T {
    constructor() {
      if (closure_2) {
        tmp = closure_1;
        tmp2 = ContentDismissActionType;
        tmp3 = closure_1(ContentDismissActionType.TAKE_ACTION);
      }
      tmp4 = navigateToShop();
      return;
    }
  }
  cResult[1] = tmp4[1];
  cResult[2] = tmp6;
  cResult[3] = navigateToShop;
  cResult[4] = T;
  tmp9 = T;
  const obj2 = navigateToShop(6901);
}) : ((shopButtonRef) => {
  ({ marketing, navigateToShop } = shopButtonRef);
  shopButtonRef = shopButtonRef.shopButtonRef;
  const tmp = _slicedToArray(navigateToShop(6901).useSelectedVersionedDismissibleContent(navigateToShop(2036).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING, marketing.version, undefined, true), 2);
  importDefault = tmp2;
  const tmp3 = tmp[0] === navigateToShop(2036).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  dependencyMap = tmp3;
  const obj2 = { children: null };
  const obj3 = { ref: shopButtonRef, IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
  const obj = navigateToShop(6901);
  obj3.IconComponent = navigateToShop(11776).ShopIcon;
  const intl = navigateToShop(1126).intl;
  obj3.accessibilityLabel = intl.string(navigateToShop(1126).t.pWG4ze);
  obj3.onPress = function onPress() {
    if (closure_2) {
      closure_1(ContentDismissActionType.TAKE_ACTION);
    }
    navigateToShop();
  };
  obj3.showRedDot = tmp3;
  const items = [closure_6(YouScreenNavIconDefault, obj3), closure_6(MobileShopButtonCoachmarkDefault, { marketing, shopButtonRef, navigateToShop, visible: tmp3, onDismiss: tmp[1] })];
  obj2.children = items;
  return closure_8(closure_7, obj2);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopEntryButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((navigateToShop) => {
  let obj = dependencyMap;
  const cResult = navigateToShop(576).c(13);
  navigateToShop = navigateToShop.navigateToShop;
  const shopButtonRef = navigateToShop.shopButtonRef;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CollectiblesMarketingsStore];
    const fn = function c() {
      return marketingBySurface.getMarketingBySurface(navigateToShop(13821).CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp3 = items;
    tmp4 = fn;
  } else {
    [tmp3, tmp4] = cResult;
  }
  const obj2 = navigateToShop(576);
  const stateFromStores = navigateToShop(573).useStateFromStores(tmp3, tmp4);
  let tmp7 = null != stateFromStores;
  if (tmp7) {
    tmp7 = "dismissibleContent" in stateFromStores;
  }
  if (tmp7) {
    tmp7 = stateFromStores.dismissibleContent === tmp(2036).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  }
  let type1;
  if (stateFromStores != null) {
    type1 = stateFromStores.type;
  }
  if (type1 === navigateToShop(7089).CollectiblesMarketingType.COACHMARK) {
    if (cResult[2] === navigateToShop) {
      if (cResult[3] === stateFromStores) {
        if (cResult[4] === shopButtonRef) {
          let tmp19 = cResult[5];
        }
        return tmp19;
      }
    }
    const obj3 = { marketing: stateFromStores, navigateToShop, shopButtonRef };
    const tmp22 = closure_6(closure_9, obj3);
    cResult[2] = navigateToShop;
    cResult[3] = stateFromStores;
    cResult[4] = shopButtonRef;
    cResult[5] = tmp22;
    tmp19 = tmp22;
  } else {
    if (cResult[6] === navigateToShop) {
      if (cResult[7] === shopButtonRef) {
        let tmp9 = cResult[8];
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
      if (tmp7) {
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
        obj = { contentType: prop, latestVersion: null, children: null };
        let num6;
        if (stateFromStores != null) {
          num6 = stateFromStores.version;
        }
        if (num6 == null) {
          num6 = 0;
        }
        obj.latestVersion = num6;
        obj.children = tmp9;
        let tmp10Result = closure_6(tmp15, obj);
      } else {
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
          const type = stateFromStores.type;
        }
        if (type === tmp(7089).CollectiblesMarketingType.BADGE) {
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
            let items2 = items1;
          }
          const obj4 = { contentTypes: items2, children: tmp9 };
          tmp10Result = closure_6(tmp12, obj4);
        }
        items2 = [];
        tmp12 = shopButtonRef(10367);
      }
      cResult[9] = tmp9;
      cResult[10] = tmp7;
      cResult[11] = stateFromStores;
      cResult[12] = tmp10Result;
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
    tmp9 = S;
  }
  const tmpResult = navigateToShop(573);
}) : ((navigateToShop) => {
  navigateToShop = navigateToShop.navigateToShop;
  const shopButtonRef = navigateToShop.shopButtonRef;
  const items = [CollectiblesMarketingsStore];
  const stateFromStores = navigateToShop(573).useStateFromStores(items, () => marketingBySurface.getMarketingBySurface(navigateToShop(13821).CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON));
  let tmp4 = null != stateFromStores;
  if (tmp4) {
    tmp4 = "dismissibleContent" in stateFromStores;
  }
  if (tmp4) {
    tmp4 = stateFromStores.dismissibleContent === tmp(2036).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  }
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  if (type === navigateToShop(7089).CollectiblesMarketingType.COACHMARK) {
    const obj2 = { marketing: stateFromStores, navigateToShop, shopButtonRef };
    return closure_6(closure_9, obj2);
  } else {
    function content(visibleContent) {
      visibleContent = visibleContent.visibleContent;
      const markAsDismissed = visibleContent.markAsDismissed;
      const obj = { ref: markAsDismissed, IconComponent: navigateToShop(11776).ShopIcon, accessibilityLabel: null, onPress: null, showRedDot: null };
      const intl = navigateToShop(1126).intl;
      obj.accessibilityLabel = intl.string(navigateToShop(1126).t.pWG4ze);
      obj.onPress = function onPress() {
        navigateToShop();
        if (null != visibleContent) {
          markAsDismissed(ContentDismissActionType.PRIMARY);
        }
      };
      obj.showRedDot = null != visibleContent;
      return closure_1_6(shopButtonRef(16986), obj);
    }
    if (tmp4) {
      let type1;
      if (stateFromStores != null) {
        type1 = stateFromStores.type;
      }
      let prop = null;
      if (type1 === tmp(7089).CollectiblesMarketingType.BADGE) {
        prop = tmp(2036).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
      }
      const obj3 = { contentType: prop, latestVersion: null, children: null };
      let num;
      if (stateFromStores != null) {
        num = stateFromStores.version;
      }
      if (num == null) {
        num = 0;
      }
      obj3.latestVersion = num;
      obj3.children = content;
      let tmp15Result = closure_6(tmp(10367).SelectedVersionedDismissibleContent, obj3);
    } else {
      let type2;
      if (stateFromStores != null) {
        type2 = stateFromStores.type;
      }
      if (type2 === tmp(7089).CollectiblesMarketingType.BADGE) {
        let dismissibleContent;
        if (stateFromStores != null) {
          dismissibleContent = stateFromStores.dismissibleContent;
        }
        if (null != dismissibleContent) {
          const items1 = [stateFromStores.dismissibleContent];
          let items2 = items1;
        }
        const obj4 = { contentTypes: items2, children: content };
        tmp15Result = closure_6(tmp7, obj4);
      }
      items2 = [];
      tmp7 = shopButtonRef(10367);
    }
    return tmp15Result;
  }
  let obj = navigateToShop(573);
});