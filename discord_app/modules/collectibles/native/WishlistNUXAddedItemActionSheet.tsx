// discord_app/modules/collectibles/native/WishlistNUXAddedItemActionSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import Constants from "../../user_profile/Constants.tsx";
import SKUPreview from "../../skus/native/SKUPreview.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let BottomSheet, product;

let c9;
let metroImportAll;
let obj2;
let obj3;
const View = react_native.View;
const UserProfileSections = Constants.UserProfileSections;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, textContainer: obj3, subtitle: { textAlign: "center" } };
obj2 = { alignItems: "center", padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (product) => {
      let currentUser;
      let intl;
      let intl2;
      let items2;
      let items3;
      let items4;
      let obj14;
      let obj4;
      let stateFromStores;
      let tmp10;
      let tmp22;
      let tmp24;
      let tmp5;
      let tmp6;
      let tmp7;
      const tmp = stateFromStores;
      let obj = stateFromStores(576);
      const cResult = obj.c(31);
      product = product.product;
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [UserStore];
        const fn = function b() {
          return currentUser.getCurrentUser();
        };
        const items1 = [];
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = items1;
        tmp5 = items;
        tmp6 = fn;
        tmp7 = items1;
      } else {
        [tmp5, tmp6, tmp7] = cResult;
      }
      let tmpResult = tmp(504);
      stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6, tmp7);
      if (product.type !== tmp(1980).CollectiblesItemType.BUNDLE) {
        let tmp13;
        const first = _slicedToArray(product.items, 1)[0];
        if (cResult[6] !== first) {
          let tmp15;
          if (null != first) {
            let obj2 = { type: "single", item: first };
            tmp15 = obj2;
          }
          cResult[6] = first;
          cResult[7] = tmp15;
          tmp13 = tmp15;
        } else {
          tmp13 = cResult[7];
        }
        tmp10 = tmp13;
      } else {
        if (cResult[3] === product.items) {
          if (cResult[4] === product.previewAssets) {
            tmp10 = cResult[5];
          }
        }
        obj4 = { type: "bundle", items: null, previewAssets: null };
        ({ items: obj3.items, previewAssets: obj3.previewAssets } = product);
        cResult[3] = product.items;
        cResult[4] = product.previewAssets;
        cResult[5] = obj4;
        tmp10 = obj4;
      }
      obj4 = tmp10;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            const obj = obj4(dependencyMap[12]);
            obj.hideActionSheet();
          }
        }
        cResult[8] = I;
      } else {
        class I {
          constructor() {
            const obj = obj4(dependencyMap[12]);
            obj.hideActionSheet();
          }
        }
      }
      if (cResult[9] !== stateFromStores) {
        class B {
          constructor() {
            let items;
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideAllActionSheets();
            if (null != stateFromStores) {
              const obj2 = {
                userId: tmp4.id,
                sourceAnalyticsLocations: items,
                initialSection: UserProfileSections.WISHLIST,
              };
              items = [];
              const tmpResult = showUserProfileActionSheetDefault;
              items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
              tmpResult(obj2);
            }
          }
        }
        cResult[9] = stateFromStores;
        cResult[10] = B;
      } else {
        class B {
          constructor() {
            let items;
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideAllActionSheets();
            if (null != stateFromStores) {
              const obj2 = {
                userId: tmp4.id,
                sourceAnalyticsLocations: items,
                initialSection: UserProfileSections.WISHLIST,
              };
              items = [];
              const tmpResult = showUserProfileActionSheetDefault;
              items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
              tmpResult(obj2);
            }
          }
        }
      }
      if (cResult[11] !== tmp10) {
        class L {
          constructor() {
            let tmp2 = null;
            if (null != obj4) {
              const obj = { collectiblesItemData: tmp };
              tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
        cResult[11] = tmp10;
        cResult[12] = L;
      } else {
        class L {
          constructor() {
            let tmp2 = null;
            if (null != obj4) {
              const obj = { collectiblesItemData: tmp };
              tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
      }
      const container = tmp4.container;
      if (cResult[13] !== L) {
        class L {
          constructor() {
            let tmp2 = null;
            if (null != obj4) {
              const obj = { collectiblesItemData: tmp };
              tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
        const obj5 = { renderPreview: L };
        cResult[13] = L;
        cResult[14] = closure_8(obj4(8460), obj5);
        const tmp21 = closure_8(obj4(8460), obj5);
      } else {
        class L {
          constructor() {
            let tmp2 = null;
            if (null != obj4) {
              const obj = { collectiblesItemData: tmp };
              tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
      }
      const textContainer = tmp4.textContainer;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            let tmp2 = null;
            if (null != obj4) {
              const obj = { collectiblesItemData: tmp };
              tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
        const obj6 = {
          variant: "heading-lg/extrabold",
          color: "text-strong",
          accessibilityRole: "header",
          children: intl.string(tmp(1126).t["3T2jbf"]),
        };
        const Text = tmp(4892).Text;
        intl = tmp(1126).intl;
        const tmp23 = closure_8(Text, obj6);
        cResult[15] = tmp23;
        tmp22 = tmp23;
      } else {
        class L {
          constructor() {
            let tmp2 = null;
            if (null != obj4) {
              const obj = { collectiblesItemData: tmp };
              tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
      }
      const subtitle = tmp4.subtitle;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            let tmp2 = null;
            if (null != obj4) {
              const obj = { collectiblesItemData: tmp };
              tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
        const stringResult = obj7.string(tmp(1126).t.SXb73A);
        cResult[16] = stringResult;
        tmp24 = stringResult;
      } else {
        class L {
          constructor() {
            let tmp2 = null;
            if (null != obj4) {
              const obj = { collectiblesItemData: tmp };
              tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
      }
      if (cResult[17] !== tmp4.subtitle) {
        class L {
          constructor() {
            let tmp2 = null;
            if (null != obj4) {
              const obj = { collectiblesItemData: tmp };
              tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
        const obj8 = { variant: "text-md/normal", color: "text-default", style: subtitle, children: tmp24 };
        cResult[17] = tmp4.subtitle;
        cResult[18] = closure_8(tmp(4892).Text, obj8);
        const tmp27 = closure_8(tmp(4892).Text, obj8);
      } else {
        class L {
          constructor() {
            let tmp2 = null;
            if (null != obj4) {
              const obj = { collectiblesItemData: tmp };
              tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
      }
      if (cResult[19] === tmp4.textContainer) {
        let tmp30;
        let tmp32;
        class L {
          constructor() {
            let tmp2 = null;
            if (null != obj4) {
              const obj = { collectiblesItemData: tmp };
              tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
            }
            return tmp2;
          }
        }
        const _Symbol = Symbol;
        if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor() {
              let tmp2 = null;
              if (null != obj4) {
                const obj = { collectiblesItemData: tmp };
                tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
              }
              return tmp2;
            }
          }
          const obj9 = {
            text: intl2.string(tmp(1126).t.tM4PUv),
            onPress: I,
            size: "lg",
            variant: "primary",
            grow: true,
          };
          const Button = tmp(5601).Button;
          intl2 = tmp(1126).intl;
          const tmp31 = closure_8(Button, obj9);
          cResult[22] = tmp31;
          tmp30 = tmp31;
        } else {
          class L {
            constructor() {
              let tmp2 = null;
              if (null != obj4) {
                const obj = { collectiblesItemData: tmp };
                tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
              }
              return tmp2;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[23] === Symbol.for("react.memo_cache_sentinel")) {
          class L {
            constructor() {
              let tmp2 = null;
              if (null != obj4) {
                const obj = { collectiblesItemData: tmp };
                tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
              }
              return tmp2;
            }
          }
          const stringResult1 = obj11.string(tmp(1126).t.TxBQzD);
          cResult[23] = stringResult1;
          tmp32 = stringResult1;
        } else {
          class L {
            constructor() {
              let tmp2 = null;
              if (null != obj4) {
                const obj = { collectiblesItemData: tmp };
                tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
              }
              return tmp2;
            }
          }
        }
        if (cResult[24] !== B) {
          class L {
            constructor() {
              let tmp2 = null;
              if (null != obj4) {
                const obj = { collectiblesItemData: tmp };
                tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
              }
              return tmp2;
            }
          }
          const obj10 = { direction: "horizontal", children: items2 };
          items2 = [tmp30];
          const ButtonGroup = tmp(5599).ButtonGroup;
          const obj12 = { text: tmp32, onPress: B, variant: "secondary", size: "lg", grow: true };
          items2[1] = closure_8(tmp(5601).Button, obj12);
          cResult[24] = B;
          cResult[25] = closure_9(ButtonGroup, obj10);
          const tmp36 = closure_9(ButtonGroup, obj10);
        } else {
          class L {
            constructor() {
              let tmp2 = null;
              if (null != obj4) {
                const obj = { collectiblesItemData: tmp };
                tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
              }
              return tmp2;
            }
          }
        }
        if (cResult[26] === tmp4.container) {
          class L {
            constructor() {
              let tmp2 = null;
              if (null != obj4) {
                const obj = { collectiblesItemData: tmp };
                tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
              }
              return tmp2;
            }
          }
        }
        const obj13 = { children: closure_9(View, obj14) };
        obj14 = { style: container, children: items3 };
        items3 = [tmp19, tmp28, tmp34];
        BottomSheet = tmp(6652).BottomSheet;
        cResult[26] = tmp4.container;
        cResult[27] = tmp28;
        cResult[28] = tmp34;
        cResult[29] = tmp19;
        cResult[30] = closure_8(BottomSheet, obj13);
        const tmp41 = closure_8(BottomSheet, obj13);
      }
      const obj15 = { style: textContainer, children: items4 };
      items4 = [tmp22, tmp26];
      cResult[19] = tmp4.textContainer;
      cResult[20] = tmp26;
      cResult[21] = closure_9(View, obj15);
      const tmp29 = closure_9(View, obj15);
    }
  : (product) => {
      let currentUser;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items4;
      let items5;
      let items6;
      let obj3;
      product = product.product;
      const require = product;
      let memo;
      const tmp = closure_10();
      let obj = require("get initialized");
      let items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser(), []);
      const items1 = [product];
      memo = react.useMemo(() => {
        if (require.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
          const obj3 = { type: "bundle", items: null, previewAssets: null };
          ({ items: obj2.items, previewAssets: obj2.previewAssets } = require);
          return obj3;
        } else {
          const first = _slicedToArray(require.items, 1)[0];
          let tmp5;
          if (null != first) {
            tmp5 = { type: "single", item: first };
            const obj = { type: "single", item: first };
          }
          return tmp5;
        }
      }, items1);
      const items2 = [stateFromStores];
      const callback = react.useCallback(() => {
        const obj = stateFromStores(memo[12]);
        obj.hideActionSheet();
      }, []);
      const items3 = [memo];
      const callback1 = react.useCallback(() => {
        let items;
        const obj = ActionSheetActionCreatorsDefault;
        obj.hideAllActionSheets();
        if (null != stateFromStores) {
          const obj2 = {
            userId: tmp4.id,
            sourceAnalyticsLocations: items,
            initialSection: UserProfileSections.WISHLIST,
          };
          items = [];
          const tmpResult = showUserProfileActionSheetDefault;
          items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
          tmpResult(obj2);
        }
      }, items2);
      const callback2 = react.useCallback(() => {
        let tmp2 = null;
        if (null != memo) {
          const obj = { collectiblesItemData: tmp };
          tmp2 = metroImportAll(SKUPreview.CollectiblesPreview, obj);
        }
        return tmp2;
      }, items3);
      let obj2 = { children: closure_9(View, obj3) };
      obj3 = { style: tmp.container, children: items4 };
      BottomSheet = require("Sheet/BottomSheet").BottomSheet;
      items4 = [closure_8(stateFromStores(memo[16]), { renderPreview: callback2 }), ,];
      const obj4 = { style: tmp.textContainer, children: items5 };
      const obj5 = {
        variant: "heading-lg/extrabold",
        color: "text-strong",
        accessibilityRole: "header",
        children: intl.string(require("intl").t["3T2jbf"]),
      };
      const Text = require("Text/Text").Text;
      intl = require("intl").intl;
      items5 = [closure_8(Text, obj5)];
      const obj6 = {
        variant: "text-md/normal",
        color: "text-default",
        style: tmp.subtitle,
        children: intl2.string(require("intl").t.SXb73A),
      };
      const Text2 = require("Text/Text").Text;
      intl2 = require("intl").intl;
      items5[1] = closure_8(Text2, obj6);
      items4[1] = closure_9(View, obj4);
      const obj7 = { direction: "horizontal", children: items6 };
      const ButtonGroup = require("ButtonGroup").ButtonGroup;
      const obj8 = {
        text: intl3.string(require("intl").t.tM4PUv),
        onPress: callback,
        size: "lg",
        variant: "primary",
        grow: true,
      };
      const Button = require("components/Button/Button").Button;
      intl3 = require("intl").intl;
      items6 = [closure_8(Button, obj8)];
      const obj9 = {
        text: intl4.string(require("intl").t.TxBQzD),
        onPress: callback1,
        variant: "secondary",
        size: "lg",
        grow: true,
      };
      const Button2 = require("components/Button/Button").Button;
      intl4 = require("intl").intl;
      items6[1] = closure_8(Button2, obj9);
      items4[2] = closure_9(ButtonGroup, obj7);
      return closure_8(BottomSheet, obj2);
    };
const result = size.fileFinishedImporting("modules/collectibles/native/WishlistNUXAddedItemActionSheet.tsx");

export default tmp4;
