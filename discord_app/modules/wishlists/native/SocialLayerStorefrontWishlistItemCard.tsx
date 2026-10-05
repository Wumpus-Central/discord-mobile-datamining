// discord_app/modules/wishlists/native/SocialLayerStorefrontWishlistItemCard.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import SlayerStorefrontItemCardDefault from "../../slayer_storefront/native/SlayerStorefrontItemCard.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import SentGiftsStore from "../SentGiftsStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap, importDefault, obj1, sku, tmp6;

let c10;
let c9;
let metroImportAll;
let obj2;
let size;
let closure_3 = ["sku", "isOwned", "source", "wishlistOwnerId", "size"];
({ jsx: metroImportAll, Fragment: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { applicationIcon: size, nestedCard: obj2 };
size = {
  position: "absolute",
  top: nativeDefault.space.PX_8,
  left: nativeDefault.space.PX_8,
  width: 24,
  height: 24,
  borderRadius: nativeDefault.radii.sm,
  zIndex: 1,
};
createStyles = createStyles.createStyles;
obj2 = {
  shadowColor: "Array",
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0,
  shadowRadius: 0,
  elevation: "visible",
  overflow: null,
  borderRadius: nativeDefault.radii.none,
};
let closure_11 = createStyles(obj);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (sku) => {
      let _require;
      let applicationId;
      let closure_2;
      let iconSource;
      let isOwned;
      let nestedCard;
      let source;
      let tmp13;
      let tmp5;
      let wishlistOwnerId;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(31);
      if (cResult[0] !== sku) {
        sku = sku.sku;
        importDefault = sku;
        ({ isOwned, source, wishlistOwnerId } = sku);
        dependencyMap = wishlistOwnerId;
        size = sku.size;
        _require = size;
        cResult[0] = sku;
        cResult[1] = iconSource(sku, applicationId);
        const tmp12 = iconSource(sku, applicationId);
        class C {
          constructor() {
            hasSentGiftResult = null != closure_2;
            if (hasSentGiftResult) {
              tmp3 = closure_7;
              tmp4 = closure_1;
              hasSentGiftResult = closure_7.hasSentGift(closure_1.id, tmp);
            }
            return hasSentGiftResult;
          }
        }
        cResult[2] = size;
        cResult[3] = sku;
        cResult[4] = source;
        cResult[5] = isOwned;
        cResult[6] = wishlistOwnerId;
        let tmp7 = source;
        tmp5 = size;
      } else {
        _require = cResult[2];
        importDefault = cResult[3];
        tmp7 = cResult[4];
        dependencyMap = cResult[6];
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SentGiftsStore];
        cResult[7] = items;
        tmp13 = items;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp6.id) {
        let tmp15;
        let tmp16;
        let tmp18;
        let tmp21;
        if (cResult[9] === wishlistOwnerId) {
          tmp15 = cResult[10];
          tmp16 = cResult[11];
        }
        applicationId = tmp6.applicationId;
        const _Symbol = Symbol;
        const tmpResult = tmp(504);
        const stateFromStores = tmpResult.useStateFromStores(tmp13, tmp15, tmp16);
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [ApplicationStore];
          cResult[12] = items1;
          tmp18 = items1;
        } else {
          tmp18 = cResult[12];
        }
        if (cResult[13] !== applicationId) {
          class F {
            constructor() {
              application = null;
              if (null != applicationId) {
                tmp3 = closure_6;
                application = closure_6.getApplication(tmp);
              }
              return application;
            }
          }
          const items2 = [applicationId];
          cResult[13] = applicationId;
          cResult[14] = F;
          cResult[15] = items2;
          tmp21 = items2;
        } else {
          class F {
            constructor() {
              application = null;
              if (null != applicationId) {
                tmp3 = closure_6;
                application = closure_6.getApplication(tmp);
              }
              return application;
            }
          }
          tmp21 = cResult[15];
        }
        const tmpResult2 = tmp(504);
        const stateFromStores1 = tmpResult2.useStateFromStores(tmp18, F, tmp21);
        if (cResult[16] !== stateFromStores1) {
          class F {
            constructor() {
              application = null;
              if (null != applicationId) {
                tmp3 = closure_6;
                application = closure_6.getApplication(tmp);
              }
              return application;
            }
          }
          iconSource = undefined;
          if (stateFromStores1 != null) {
            class F {
              constructor() {
                application = null;
                if (null != applicationId) {
                  tmp3 = closure_6;
                  application = closure_6.getApplication(tmp);
                }
                return application;
              }
            }
            iconSource = stateFromStores1.getIconSource(24);
          }
          cResult[16] = stateFromStores1;
          cResult[17] = iconSource;
        } else {
          class F {
            constructor() {
              application = null;
              if (null != applicationId) {
                tmp3 = closure_6;
                application = closure_6.getApplication(tmp);
              }
              return application;
            }
          }
        }
        iconSource = tmp22;
        const tmp25 = closure_11();
        class C {
          constructor() {
            hasSentGiftResult = null != closure_2;
            if (hasSentGiftResult) {
              tmp3 = closure_7;
              tmp4 = closure_1;
              hasSentGiftResult = closure_7.hasSentGift(closure_1.id, tmp);
            }
            return hasSentGiftResult;
          }
        }
        if (cResult[18] === tmp22) {
          class F {
            constructor() {
              application = null;
              if (null != applicationId) {
                tmp3 = closure_6;
                application = closure_6.getApplication(tmp);
              }
              return application;
            }
          }
        }
        class E {
          constructor() {
            tmp = jsxs;
            tmp2 = Fragment;
            tmp3 = jsx;
            tmp4 = closure_1;
            tmp5 = closure_2;
            obj = { sku: closure_1, size: closure_0, containerStyle: closure_5.nestedCard };
            tmp6 = closure_5;
            items = [,];
            items[0] = jsx(closure_1(closure_2[10]), obj);
            tmp3Result = null != closure_4;
            if (tmp3Result) {
              obj1 = { source: null, style: null };
              obj1.source = tmp7;
              obj1.style = tmp6.applicationIcon;
              tmp3Result = tmp3(tmp4(tmp5[11]), obj1);
            }
            items[1] = tmp3Result;
            return tmp(tmp2, { children: items });
          }
        }
        cResult[18] = tmp22;
        cResult[19] = tmp5;
        cResult[20] = tmp6;
        cResult[21] = tmp25.applicationIcon;
        cResult[22] = tmp25.nestedCard;
        cResult[23] = E;
      }
      class C {
        constructor() {
          hasSentGiftResult = null != closure_2;
          if (hasSentGiftResult) {
            tmp3 = closure_7;
            tmp4 = closure_1;
            hasSentGiftResult = closure_7.hasSentGift(closure_1.id, tmp);
          }
          return hasSentGiftResult;
        }
      }
      const items3 = [, wishlistOwnerId];
      cResult[8] = tmp6.id;
      cResult[9] = wishlistOwnerId;
      cResult[10] = C;
      cResult[11] = items3;
      tmp16 = items3;
      tmp15 = C;
    }
  : (sku) => {
      sku = sku.sku;
      let flag = sku.isOwned;
      if (flag === undefined) {
        flag = false;
      }
      const wishlistOwnerId = sku.wishlistOwnerId;
      size = sku.size;
      const source = sku.source;
      const merged = Object.assign(sku, Object.assign({ sku: 0, isOwned: 0, source: 0, wishlistOwnerId: 0, size: 0 }));
      let memo;
      let nestedCard;
      let obj = sku(size[9]);
      const items = [SentGiftsStore];
      const items1 = [sku.id, wishlistOwnerId];
      const applicationId = sku.applicationId;
      const stateFromStores = obj.useStateFromStores(
        items,
        () => {
          const hasSentGiftResult = null != wishlistOwnerId && SentGiftsStore.hasSentGift(sku.id, tmp);
          return hasSentGiftResult;
        },
        items1,
      );
      let obj2 = sku(size[9]);
      const items2 = [nestedCard];
      const items3 = [applicationId];
      const stateFromStores1 = obj2.useStateFromStores(
        items2,
        () => {
          let application = null;
          if (null != applicationId) {
            application = ApplicationStore.getApplication(tmp);
          }
          return application;
        },
        items3,
      );
      const items4 = [stateFromStores1];
      memo = memo.useMemo(() => {
        let iconSource;
        if (stateFromStores1 != null) {
          iconSource = stateFromStores1.getIconSource(24);
        }
        return iconSource;
      }, items4);
      const tmp7 = closure_11();
      nestedCard = tmp7;
      const items5 = [sku, size, memo, ,];
      ({ applicationIcon: arr6[3], nestedCard: arr6[4] } = tmp7);
      const callback = memo.useCallback(() => {
        const children = [,];
        const obj = { sku, size, containerStyle: nestedCard.nestedCard };
        children[0] = metroImportAll(SlayerStorefrontItemCardDefault, obj);
        let tmp3Result = null != memo;
        if (tmp3Result) {
          const obj2 = { source: tmp7, style: nestedCard.applicationIcon };
          tmp3Result = metroImportAll(FastImageDefault, obj2);
        }
        children[1] = tmp3Result;
        return authStore(React4, { children });
      }, items5);
      const obj3 = { accessibilityLabel: sku.name, renderPreview: callback, source, size };
      const tmp10 = wishlistOwnerId(size[12]);
      const merged1 = Object.assign(merged);
      const tmp2 = sku;
      const tmp3 = size;
      if (!flag) {
        let OWNED;
        if (!stateFromStores) {
          OWNED = merged.overlay;
        }
        obj3.overlay = OWNED;
        return closure_8(tmp10, obj3);
      }
      OWNED = tmp2(tmp3[12]).WishlistItemCardOverlay.OWNED;
    };
size = size_mod;
const result = size.fileFinishedImporting("modules/wishlists/native/SocialLayerStorefrontWishlistItemCard.tsx");

export default tmp4;
