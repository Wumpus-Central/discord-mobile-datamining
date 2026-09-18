// === Module 17174: CollectiblesShopEntryButton ===

// Module 17174 (CollectiblesShopEntryButton)
import YouScreenNavIconDefault from "YouScreenNavIcon" /* 17173 */;
import MobileShopButtonCoachmarkDefault from "MobileShopButtonCoachmark" /* 17175 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CollectiblesMarketingsStore from "CollectiblesMarketingsStore" /* 7780 */;

const require = fn;
function CoachmarkVariant(shopButtonRef) {
  ({ marketing, navigateToShop } = shopButtonRef);
  shopButtonRef = shopButtonRef.shopButtonRef;
  const tmp = _slicedToArray(navigateToShop(7584).useSelectedVersionedDismissibleContent(navigateToShop(1944).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING, marketing.version, undefined, true), 2);
  importDefault = tmp2;
  const tmp3 = tmp[0] === navigateToShop(1944).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  dependencyMap = tmp3;
  const obj2 = { children: null };
  const obj3 = { ref: shopButtonRef, IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
  const obj = navigateToShop(7584);
  obj3.IconComponent = navigateToShop(12380).ShopIcon;
  const intl = navigateToShop(1115).intl;
  obj3.accessibilityLabel = intl.string(navigateToShop(1115).t.pWG4ze);
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
}
const ContentDismissActionType = fn(1955).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopEntryButton.tsx");

export default function CollectiblesShopEntryButton(navigateToShop) {
  navigateToShop = navigateToShop.navigateToShop;
  const shopButtonRef = navigateToShop.shopButtonRef;
  const items = [CollectiblesMarketingsStore];
  const stateFromStores = navigateToShop(563).useStateFromStores(items, () => marketingBySurface.getMarketingBySurface(navigateToShop(14195).CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON));
  let tmp4 = null != stateFromStores;
  if (tmp4) {
    tmp4 = "dismissibleContent" in stateFromStores;
  }
  if (tmp4) {
    tmp4 = stateFromStores.dismissibleContent === tmp(1944).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  }
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  if (type === navigateToShop(7761).CollectiblesMarketingType.COACHMARK) {
    const obj2 = { marketing: stateFromStores, navigateToShop, shopButtonRef };
    return closure_6(CoachmarkVariant, obj2);
  } else {
    function content(visibleContent) {
      visibleContent = visibleContent.visibleContent;
      const markAsDismissed = visibleContent.markAsDismissed;
      const obj = { ref: markAsDismissed, IconComponent: navigateToShop(12380).ShopIcon, accessibilityLabel: null, onPress: null, showRedDot: null };
      const intl = navigateToShop(1115).intl;
      obj.accessibilityLabel = intl.string(navigateToShop(1115).t.pWG4ze);
      obj.onPress = function onPress() {
        navigateToShop();
        if (null != visibleContent) {
          markAsDismissed(ContentDismissActionType.PRIMARY);
        }
      };
      obj.showRedDot = null != visibleContent;
      return closure_1_6(shopButtonRef(17173), obj);
    }
    if (tmp4) {
      let type1;
      if (stateFromStores != null) {
        type1 = stateFromStores.type;
      }
      let prop = null;
      if (type1 === tmp(7761).CollectiblesMarketingType.BADGE) {
        prop = tmp(1944).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
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
      let tmp15Result = closure_6(tmp(10868).SelectedVersionedDismissibleContent, obj3);
    } else {
      let type2;
      if (stateFromStores != null) {
        type2 = stateFromStores.type;
      }
      if (type2 === tmp(7761).CollectiblesMarketingType.BADGE) {
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
      tmp7 = shopButtonRef(10868);
    }
    return tmp15Result;
  }
  let obj = navigateToShop(563);
};