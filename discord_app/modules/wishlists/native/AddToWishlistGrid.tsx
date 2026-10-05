// discord_app/modules/wishlists/native/AddToWishlistGrid.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../user_profile/native/Constants.tsx";
import WishlistAnalyticsContext from "../WishlistAnalyticsContext.tsx";
import AddToWishlistItemCardDefault from "AddToWishlistItemCard.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const WISHLIST_SUGGESTION_CARD_GAP = Constants.WISHLIST_SUGGESTION_CARD_GAP;
const jsx = Fragment.jsx;
let obj = {
  itemsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: WISHLIST_SUGGESTION_CARD_GAP,
    justifyContent: "flex-start",
  },
};
let closure_5 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (analyticsLocations) => {
      let cardSize;
      let items;
      let tmp7;
      let wishlist;
      const obj = wishlist(cardSize[6]);
      const cResult = obj.c(12);
      ({ items, wishlist } = analyticsLocations);
      analyticsLocations = analyticsLocations.analyticsLocations;
      cardSize = analyticsLocations.cardSize;
      const tmp2 = closure_5();
      if (cResult[0] === analyticsLocations) {
        if (cResult[1] === cardSize) {
          if (cResult[2] === items) {
            let id;
            const tmp4 = cResult[3];
            if (wishlist != null) {
              id = wishlist.id;
            }
            if (tmp4 === id) {
              tmp7 = cResult[4];
            }
            if (cResult[9] === tmp2.itemsContainer) {
              let tmp16;
              if (cResult[10] === tmp7) {
                tmp16 = cResult[11];
              }
              return tmp16;
            }
            const tmp19 = <View style={tmp3}>{tmp7}</View>;
            cResult[9] = tmp2.itemsContainer;
            cResult[10] = tmp7;
            cResult[11] = tmp19;
            tmp16 = tmp19;
          }
        }
      }
      if (cResult[5] === analyticsLocations) {
        if (cResult[6] === cardSize) {
          let tmp11;
          let id1;
          const tmp8 = cResult[7];
          if (wishlist != null) {
            id1 = wishlist.id;
          }
          if (tmp8 === id1) {
            tmp11 = cResult[8];
          }
          const mapped = items.map(tmp11);
          cResult[0] = analyticsLocations;
          cResult[1] = cardSize;
          cResult[2] = items;
          let id2;
          if (wishlist != null) {
            id2 = wishlist.id;
          }
          cResult[3] = id2;
          cResult[4] = mapped;
          tmp7 = mapped;
        }
      }
      cResult[5] = analyticsLocations;
      cResult[6] = cardSize;
      let id3;
      if (wishlist != null) {
        id3 = wishlist.id;
      }
      const fn = function l(itemSource, positionInSection) {
        const sku = itemSource.sku;
        const obj2 = {
          positionInSection,
          skuId: sku.id,
          itemSource: itemSource.itemSource,
          productLine: sku.productLine,
        };
        const WishlistAnalyticsProvider = WishlistAnalyticsContext.WishlistAnalyticsProvider;
        let id;
        AddToWishlistItemCardDefault;
        if (wishlist != null) {
          id = wishlist.id;
        }
        return (
          <WishlistAnalyticsProvider key={sku.id} newValue={obj2}>
            {null}
          </WishlistAnalyticsProvider>
        );
      };
      cResult[7] = id3;
      cResult[8] = fn;
      tmp11 = fn;
    }
  : (arg0) => {
      let analyticsLocations;
      let id;
      let items;
      ({ items, wishlist: require, analyticsLocations: importDefault, cardSize: dependencyMap } = arg0);
      return (
        <View style={closure_5().itemsContainer}>
          {items.map((itemSource, positionInSection) => {
            const sku = itemSource.sku;
            const obj2 = {
              positionInSection,
              skuId: sku.id,
              itemSource: itemSource.itemSource,
              productLine: sku.productLine,
            };
            const WishlistAnalyticsProvider = WishlistAnalyticsContext.WishlistAnalyticsProvider;
            require = undefined;
            AddToWishlistItemCardDefault;
            if (require != null) {
              require = require.id;
            }
            return (
              <WishlistAnalyticsProvider key={sku.id} newValue={obj2}>
                {null}
              </WishlistAnalyticsProvider>
            );
          })}
        </View>
      );
    };
const result = size.fileFinishedImporting("modules/wishlists/native/AddToWishlistGrid.tsx");

export default tmp3;
