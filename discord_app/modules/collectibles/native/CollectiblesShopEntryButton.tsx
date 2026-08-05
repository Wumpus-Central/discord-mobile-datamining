// discord_app/modules/collectibles/native/CollectiblesShopEntryButton.tsx
import _slicedToArray from "_slicedToArray";
import "noop";
import getMarketingBySurface from "getMarketingBySurface";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
function CoachmarkVariant(shopButtonRef) {
  let marketing;
  let navigateToShop;
  ({ marketing, navigateToShop } = shopButtonRef);
  shopButtonRef = shopButtonRef.shopButtonRef;
  let importDefault;
  let dependencyMap;
  let obj = navigateToShop(5931);
  const tmp = callback(obj.useSelectedVersionedDismissibleContent(navigateToShop(1358).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING, marketing.version, undefined, true), 2);
  importDefault = tmp2;
  const tmp3 = tmp[0] === navigateToShop(1358).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  dependencyMap = tmp3;
  obj = { children: null };
  obj = { ref: shopButtonRef, IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
  obj[1] = navigateToShop(11438).ShopIcon;
  const intl = navigateToShop(1236).intl;
  obj[2] = intl.string(navigateToShop(1236).t.pWG4ze);
  obj[3] = function onPress() {
    if (c2) {
      _undefined(outer1_5.TAKE_ACTION);
    }
    navigateToShop();
  };
  obj[4] = tmp3;
  const items = [callback2(importDefault(15742), obj), callback2(importDefault(15744), { marketing, shopButtonRef, navigateToShop, visible: tmp3, onDismiss: tmp[1] })];
  obj[0] = items;
  return callback3(closure_7, obj);
}
({ jsx: closure_6, Fragment: error, jsxs: metroImportAll } = jsxProd);
const result = require("getMarketingBySurface").fileFinishedImporting("modules/collectibles/native/CollectiblesShopEntryButton.tsx");

export default function CollectiblesShopEntryButton(navigateToShop) {
  navigateToShop = navigateToShop.navigateToShop;
  const shopButtonRef = navigateToShop.shopButtonRef;
  let obj = navigateToShop(647);
  const items = [getMarketingBySurface];
  const stateFromStores = obj.useStateFromStores(items, () => marketingBySurface.getMarketingBySurface(navigateToShop(table[12]).CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON));
  let tmp4 = null != stateFromStores;
  if (tmp4) {
    tmp4 = "dismissibleContent" in stateFromStores;
  }
  if (tmp4) {
    tmp4 = stateFromStores.dismissibleContent === tmp(1358).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  }
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  if (type === navigateToShop(6934).CollectiblesMarketingType.COACHMARK) {
    obj = { marketing: null, navigateToShop: null, shopButtonRef: null };
    obj[0] = stateFromStores;
    obj[1] = navigateToShop;
    obj[2] = shopButtonRef;
    return callback2(CoachmarkVariant, obj);
  } else {
    function content(visibleContent) {
      visibleContent = visibleContent.visibleContent;
      const markAsDismissed = visibleContent.markAsDismissed;
      const obj = { ref: markAsDismissed, IconComponent: null, accessibilityLabel: null, onPress: null, showRedDot: null };
      obj[1] = navigateToShop(outer1_2[8]).ShopIcon;
      const intl = navigateToShop(outer1_2[9]).intl;
      obj[2] = intl.string(navigateToShop(outer1_2[9]).t.pWG4ze);
      obj[3] = function onPress() {
        visibleContent();
        if (null != visibleContent) {
          markAsDismissed(outer2_5.PRIMARY);
        }
      };
      obj[4] = null != visibleContent;
      return outer1_6(shopButtonRef(outer1_2[7]), obj);
    }
    if (tmp4) {
      let type1;
      if (stateFromStores != null) {
        type1 = stateFromStores.type;
      }
      let prop = null;
      if (type1 === tmp(6934).CollectiblesMarketingType.BADGE) {
        prop = tmp(1358).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
      }
      obj = { contentType: null, latestVersion: null, children: null };
      obj[0] = prop;
      let num;
      if (stateFromStores != null) {
        num = stateFromStores.version;
      }
      if (num == null) {
        num = 0;
      }
      obj[1] = num;
      obj[2] = content;
      let tmp15Result = tmp15(tmp(9916).SelectedVersionedDismissibleContent, obj);
    } else {
      let type2;
      if (stateFromStores != null) {
        type2 = stateFromStores.type;
      }
      if (type2 === tmp(6934).CollectiblesMarketingType.BADGE) {
        let dismissibleContent;
        if (stateFromStores != null) {
          dismissibleContent = stateFromStores.dismissibleContent;
        }
        if (null != dismissibleContent) {
          const items1 = [stateFromStores.dismissibleContent];
          let items2 = items1;
        }
        const obj1 = { contentTypes: null, children: null };
        obj1[0] = items2;
        obj1[1] = content;
        tmp15Result = tmp15(tmp7, obj1);
      }
      items2 = [];
      tmp7 = shopButtonRef(9916);
    }
    return tmp15Result;
  }
};