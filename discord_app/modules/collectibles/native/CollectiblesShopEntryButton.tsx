// discord_app/modules/collectibles/native/CollectiblesShopEntryButton.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import itemsDefault from "../../main_tabs_v2/native/tabs/you/YouScreenNavIcon.tsx";
import MobileShopButtonCoachmarkDefault from "MobileShopButtonCoachmark.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../CollectiblesMarketingsStore.tsx";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
function CoachmarkVariant(shopButtonRef) {
  ({ marketing, navigateToShop } = shopButtonRef);
  shopButtonRef = shopButtonRef.shopButtonRef;
  importDefault = undefined;
  dependencyMap = undefined;
  let obj = navigateToShop(6216);
  const tmp = callback(obj.useSelectedVersionedDismissibleContent(navigateToShop(1377).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING, marketing.version, undefined, true), 2);
  importDefault = tmp2;
  const tmp3 = tmp[0] === navigateToShop(1377).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  dependencyMap = tmp3;
  obj = { children: null };
  obj = { ref: shopButtonRef, IconComponent: navigateToShop(11645).ShopIcon, accessibilityLabel: null, onPress: null, showRedDot: null };
  const intl = navigateToShop(1236).intl;
  obj[2] = intl.string(navigateToShop(1236).t.pWG4ze);
  obj[3] = function onPress() {
    if (closure_2) {
      callback(closure_1_5.TAKE_ACTION);
    }
    navigateToShop();
  };
  obj[4] = tmp3;
  const items = [callback2(itemsDefault, obj), callback2(MobileShopButtonCoachmarkDefault, { marketing, shopButtonRef, navigateToShop, visible: tmp3, onDismiss: tmp[1] })];
  obj[0] = items;
  return callback3(closure_7, obj);
}
noopAll;
({ jsx: closure_6, Fragment: error, jsxs: closure_8 } = jsxProd);
const result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesShopEntryButton.tsx");

export default function CollectiblesShopEntryButton(navigateToShop) {
  navigateToShop = navigateToShop.navigateToShop;
  const shopButtonRef = navigateToShop.shopButtonRef;
  let obj = navigateToShop(647);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => marketingBySurface.getMarketingBySurface(navigateToShop(table[12]).CollectiblesMarketingSurface.MOBILE_SHOP_BUTTON));
  let tmp4 = null != stateFromStores;
  if (tmp4) {
    tmp4 = "dismissibleContent" in stateFromStores;
  }
  if (tmp4) {
    tmp4 = stateFromStores.dismissibleContent === tmp(1377).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
  }
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  if (type === navigateToShop(7258).CollectiblesMarketingType.COACHMARK) {
    obj = { marketing: null, navigateToShop: null, shopButtonRef: null };
    obj[0] = stateFromStores;
    obj[1] = navigateToShop;
    obj[2] = shopButtonRef;
    return callback2(CoachmarkVariant, obj);
  } else {
    function content(visibleContent) {
      visibleContent = visibleContent.visibleContent;
      const markAsDismissed = visibleContent.markAsDismissed;
      const obj = { ref: markAsDismissed, IconComponent: navigateToShop(closure_1_2[8]).ShopIcon, accessibilityLabel: null, onPress: null, showRedDot: null };
      const intl = navigateToShop(closure_1_2[9]).intl;
      obj[2] = intl.string(navigateToShop(closure_1_2[9]).t.pWG4ze);
      obj[3] = function onPress() {
        visibleContent();
        if (null != visibleContent) {
          markAsDismissed(closure_2_5.PRIMARY);
        }
      };
      obj[4] = null != visibleContent;
      return closure_1_6(shopButtonRef(closure_1_2[7]), obj);
    }
    if (tmp4) {
      let type1;
      if (stateFromStores != null) {
        type1 = stateFromStores.type;
      }
      let prop = null;
      if (type1 === tmp(7258).CollectiblesMarketingType.BADGE) {
        prop = tmp(1377).DismissibleContent.COLLECTIBLES_SHOP_ENTRY_MARKETING;
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
      let tmp15Result = tmp15(tmp(10355).SelectedVersionedDismissibleContent, obj);
    } else {
      let type2;
      if (stateFromStores != null) {
        type2 = stateFromStores.type;
      }
      if (type2 === tmp(7258).CollectiblesMarketingType.BADGE) {
        let dismissibleContent;
        if (stateFromStores != null) {
          dismissibleContent = stateFromStores.dismissibleContent;
        }
        if (null != dismissibleContent) {
          const items1 = [stateFromStores.dismissibleContent];
          let items2 = items1;
        }
        obj1 = { contentTypes: null, children: null };
        obj1[0] = items2;
        obj1[1] = content;
        tmp15Result = tmp15(tmp7, obj1);
      }
      items2 = [];
      tmp7 = shopButtonRef(10355);
    }
    return tmp15Result;
  }
};