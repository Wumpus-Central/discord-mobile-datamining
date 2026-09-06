// discord_app/modules/collectibles/native/CollectiblesShopEntryButton.tsx
import YouScreenNavIconDefault from "../../main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx";
import MobileShopButtonCoachmarkDefault from "MobileShopButtonCoachmark.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesMarketingsStore from "../CollectiblesMarketingsStore.tsx";

const require = fn;
function CoachmarkVariant(shopButtonRef) {
  ({ marketing, navigateToShop } = shopButtonRef);
  shopButtonRef = shopButtonRef.shopButtonRef;
  let obj = navigateToShop(7388);
  const tmp = _slicedToArray(
    obj.useSelectedVersionedDismissibleContent(
      navigateToShop(1943).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING,
      marketing.version,
      undefined,
      true,
    ),
    2,
  );
  importDefault = tmp2;
  const tmp3 = tmp[0] === navigateToShop(1943).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  dependencyMap = tmp3;
  obj = { children: null };
  obj = {
    ref: shopButtonRef,
    IconComponent: navigateToShop(12138).ShopIcon,
    accessibilityLabel: null,
    onPress: null,
    showRedDot: null,
  };
  const intl = navigateToShop(1114).intl;
  obj.accessibilityLabel = intl.string(navigateToShop(1114).t.pWG4ze);
  obj.onPress = function onPress() {
    if (closure_2) {
      closure_1(ContentDismissActionType.TAKE_ACTION);
    }
    navigateToShop();
  };
  obj.showRedDot = tmp3;
  const items = [
    closure_6(YouScreenNavIconDefault, obj),
    closure_6(MobileShopButtonCoachmarkDefault, {
      marketing,
      shopButtonRef,
      navigateToShop,
      visible: tmp3,
      onDismiss: tmp[1],
    }),
  ];
  obj.children = items;
  return closure_8(closure_7, obj);
}
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopEntryButton.tsx");

export default function CollectiblesShopEntryButton(navigateToShop) {
  navigateToShop = navigateToShop.navigateToShop;
  const shopButtonRef = navigateToShop.shopButtonRef;
  let obj = navigateToShop(563);
  const items = [CollectiblesMarketingsStore];
  const stateFromStores = obj.useStateFromStores(items, () =>
    marketingBySurface.getMarketingBySurface(navigateToShop(13986).CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON),
  );
  let tmp4 = null != stateFromStores;
  if (tmp4) {
    tmp4 = "dismissibleContent" in stateFromStores;
  }
  if (tmp4) {
    tmp4 = stateFromStores.dismissibleContent === tmp(1943).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  }
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  if (type === navigateToShop(7566).CollectiblesMarketingType.COACHMARK) {
    obj = { marketing: stateFromStores, navigateToShop, shopButtonRef };
    return closure_6(CoachmarkVariant, obj);
  } else {
    function content(visibleContent) {
      visibleContent = visibleContent.visibleContent;
      const markAsDismissed = visibleContent.markAsDismissed;
      const obj = {
        ref: markAsDismissed,
        IconComponent: navigateToShop(12138).ShopIcon,
        accessibilityLabel: null,
        onPress: null,
        showRedDot: null,
      };
      const intl = navigateToShop(1114).intl;
      obj.accessibilityLabel = intl.string(navigateToShop(1114).t.pWG4ze);
      obj.onPress = function onPress() {
        navigateToShop();
        if (null != visibleContent) {
          markAsDismissed(ContentDismissActionType.PRIMARY);
        }
      };
      obj.showRedDot = null != visibleContent;
      return closure_1_6(shopButtonRef(16794), obj);
    }
    if (tmp4) {
      let type1;
      if (stateFromStores != null) {
        type1 = stateFromStores.type;
      }
      let prop = null;
      if (type1 === tmp(7566).CollectiblesMarketingType.BADGE) {
        prop = tmp(1943).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
      }
      obj = { contentType: prop, latestVersion: null, children: null };
      let num;
      if (stateFromStores != null) {
        num = stateFromStores.version;
      }
      if (num == null) {
        num = 0;
      }
      obj.latestVersion = num;
      obj.children = content;
      let tmp15Result = closure_6(tmp(10625).SelectedVersionedDismissibleContent, obj);
    } else {
      let type2;
      if (stateFromStores != null) {
        type2 = stateFromStores.type;
      }
      if (type2 === tmp(7566).CollectiblesMarketingType.BADGE) {
        let dismissibleContent;
        if (stateFromStores != null) {
          dismissibleContent = stateFromStores.dismissibleContent;
        }
        if (null != dismissibleContent) {
          const items1 = [stateFromStores.dismissibleContent];
          let items2 = items1;
        }
        const obj1 = { contentTypes: items2, children: content };
        tmp15Result = closure_6(tmp7, obj1);
      }
      items2 = [];
      tmp7 = shopButtonRef(10625);
    }
    return tmp15Result;
  }
}
