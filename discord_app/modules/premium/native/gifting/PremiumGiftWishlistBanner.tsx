// discord_app/modules/premium/native/gifting/PremiumGiftWishlistBanner.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesShopConstants from "../../../collectibles/CollectiblesShopConstants.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import WishlistRecommendationRecord from "../../../wishlists/records/WishlistRecommendationRecord.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import Constants2 from "../../../user_profile/Constants.tsx";
import useWishlistHooks from "../../../wishlists/hooks/useWishlistHooks.tsx";
import WishlistBannerUtils from "../../gifting/utils/WishlistBannerUtils.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import PremiumConstants from "../../PremiumConstants.tsx";
import Constants from "../../../../Constants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

let _require, giftRecipient, set;

let c10;
let c9;
let closure_14;
let closure_15;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let unpackModuleId;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
let constants = WishlistRecommendationRecord.WishlistRecommendationReason;
({ GiftingOrigin: metroImportAll, PremiumSubscriptionSKUToPremiumType: c9 } = PremiumConstants);
({ AnalyticEvents: c10, SKUProductLines: unpackModuleId } = Constants);
let closure_12 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const UserProfileSections = Constants2.UserProfileSections;
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
let closure_18 = createStyles.createStyles((width, height) => {
  let obj4;
  let size1;
  const obj = {
    title: { marginBottom: nativeDefault.space.PX_4, paddingHorizontal: PX_16 },
    subtitle: { marginBottom: nativeDefault.space.PX_12, paddingHorizontal: PX_16 },
    placeholderRow: obj4,
    placeholder: size,
    wishlistItemShadow: size1,
  };
  ({ marginBottom: nativeDefault.space.PX_4, paddingHorizontal: PX_16 });
  obj4 = { flexDirection: "row", gap: PX_16, paddingHorizontal: PX_16 };
  ({ marginBottom: nativeDefault.space.PX_12, paddingHorizontal: PX_16 });
  size = {
    width,
    height,
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT,
  };
  size1 = {
    width,
    height,
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.BG_SURFACE_RAISED,
  };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
  return obj;
});
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (giftRecipient) => {
      let _null;
      let defaultWishlistId;
      let displayItems;
      let from;
      let items;
      let items1;
      let obj10;
      let obj5;
      let obj7;
      let ref;
      let skusToUserAndReason;
      let tmp23;
      let tmp4;
      let totalUnownedWishlistItemCount;
      let wishlistAndRecommendations;
      let wishlistItemShadow;
      const tmp = giftRecipient;
      let obj = giftRecipient(skusToUserAndReason[12]);
      const cResult = obj.c(57);
      giftRecipient = giftRecipient.giftRecipient;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const size1 = {
          width: tmp(skusToUserAndReason[13]).COLLECTIBLES_SHOP_CARD_WIDTH,
          height: tmp(skusToUserAndReason[13]).COLLECTIBLES_SHOP_CARD_WIDTH,
        };
        cResult[0] = size1;
        size = size1;
      } else {
        size = cResult[0];
      }
      if (cResult[1] !== giftRecipient.id) {
        let obj2 = { userId: giftRecipient.id, numItems: tmp(skusToUserAndReason[14]).WISHLIST_IN_DM_LENGTH_MOBILE };
        cResult[1] = giftRecipient.id;
        cResult[2] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[2];
      }
      const tmpResult = tmp(skusToUserAndReason[15]);
      const wishlistRecommendationsForSingleUser = tmpResult.useWishlistRecommendationsForSingleUser(tmp4);
      ({ wishlistAndRecommendations, skusToUserAndReason } = wishlistRecommendationsForSingleUser);
      const status = wishlistRecommendationsForSingleUser.status;
      ({ totalUnownedWishlistItemCount, defaultWishlistId } = wishlistRecommendationsForSingleUser);
      if (cResult[3] === giftRecipient.id) {
        if (cResult[4] === skusToUserAndReason) {
          if (cResult[5] === wishlistAndRecommendations) {
            displayItems = cResult[6];
          }
          if (cResult[11] === displayItems) {
            let tmp8;
            if (cResult[12] === totalUnownedWishlistItemCount) {
              tmp8 = cResult[13];
            }
            const tmp12 = size(skusToUserAndReason[17]);
            const analyticsLocations = tmp12(size(skusToUserAndReason[18]).WISHLIST_BANNER).analyticsLocations;
            constants = defaultWishlistId.useRef(false);
            if (cResult[14] === analyticsLocations) {
              if (cResult[15] === displayItems) {
                if (cResult[16] === giftRecipient.id) {
                  let tmp13;
                  let tmp14;
                  if (cResult[17] === status) {
                    tmp13 = cResult[18];
                    tmp14 = cResult[19];
                  }
                  const effect = defaultWishlistId.useEffect(tmp13, tmp14);
                  if (cResult[20] === analyticsLocations) {
                    let tmp16;
                    if (cResult[21] === giftRecipient.id) {
                      tmp16 = cResult[22];
                    }
                    tmp(skusToUserAndReason[21]);
                    let str = "PremiumGiftWishlistBanner";
                    class F {
                      constructor() {
                        const obj = {
                          userId: giftRecipient.id,
                          initialSection: UserProfileSections.WISHLIST,
                          sourceAnalyticsLocations: analyticsLocations,
                        };
                        showUserProfileActionSheetDefault(obj);
                      }
                    }
                    let closure_8 = tmp18;
                    if (cResult[23] === defaultWishlistId) {
                      if (cResult[24] === giftRecipient) {
                        let tmp19;
                        let name;
                        if (cResult[25] === tmp18) {
                          tmp19 = cResult[26];
                        }
                        let closure_10 = tmp19;
                        if (cResult[27] === tmp8) {
                          let tmp22;
                          if (cResult[28] === giftRecipient) {
                            name = cResult[29];
                            tmp22 = cResult[30];
                            class F {
                              constructor() {
                                const obj = {
                                  userId: giftRecipient.id,
                                  initialSection: UserProfileSections.WISHLIST,
                                  sourceAnalyticsLocations: analyticsLocations,
                                };
                                showUserProfileActionSheetDefault(obj);
                              }
                            }
                          }
                          const tmp27 = closure_18(size.width, size.height);
                          class F {
                            constructor() {
                              const obj = {
                                userId: giftRecipient.id,
                                initialSection: UserProfileSections.WISHLIST,
                                sourceAnalyticsLocations: analyticsLocations,
                              };
                              showUserProfileActionSheetDefault(obj);
                            }
                          }
                          if ("error" === status) {
                            return null;
                          } else {
                            class F {
                              constructor() {
                                const obj = {
                                  userId: giftRecipient.id,
                                  initialSection: UserProfileSections.WISHLIST,
                                  sourceAnalyticsLocations: analyticsLocations,
                                };
                                showUserProfileActionSheetDefault(obj);
                              }
                            }
                            if (cResult[32] === displayItems) {
                              let arr4;
                              if (cResult[33] === tmp29) {
                                arr4 = cResult[34];
                              }
                              class F {
                                constructor() {
                                  const obj = {
                                    userId: giftRecipient.id,
                                    initialSection: UserProfileSections.WISHLIST,
                                    sourceAnalyticsLocations: analyticsLocations,
                                  };
                                  showUserProfileActionSheetDefault(obj);
                                }
                              }
                              let c12 = tmp32;
                              const sum =
                                totalUnownedWishlistItemCount -
                                tmp(skusToUserAndReason[14]).WISHLIST_IN_DM_LENGTH_MOBILE +
                                1;
                              if (cResult[35] === tmp27.title) {
                                let tmp34;
                                if (cResult[36] === tmp23) {
                                  tmp34 = cResult[37];
                                }
                                if (cResult[38] === tmp27.subtitle) {
                                  let tmp37;
                                  let tmp42Result;
                                  if (cResult[39] === tmp22) {
                                    tmp37 = cResult[40];
                                  }
                                  if (cResult[41] === tmp19) {
                                    if (cResult[42] === tmp16) {
                                      if (cResult[43] === tmp29) {
                                        if (cResult[44] === ("loading" === status || 0 === displayItems.length)) {
                                          if (cResult[45] === sum) {
                                            if (cResult[46] === null) {
                                              if (cResult[47] === tmp21) {
                                                if (cResult[48] === tmp27.placeholder) {
                                                  if (cResult[49] === tmp27.placeholderRow) {
                                                    if (cResult[50] === tmp27.wishlistItemShadow) {
                                                      let tmp41;
                                                      if (cResult[51] === arr4) {
                                                        tmp41 = cResult[52];
                                                      }
                                                      if (cResult[53] === tmp34) {
                                                        if (cResult[54] === tmp37) {
                                                          let tmp52;
                                                          if (cResult[55] === tmp41) {
                                                            tmp52 = cResult[56];
                                                          }
                                                          return tmp52;
                                                        }
                                                      }
                                                      class F {
                                                        constructor() {
                                                          const obj = {
                                                            userId: giftRecipient.id,
                                                            initialSection: UserProfileSections.WISHLIST,
                                                            sourceAnalyticsLocations: analyticsLocations,
                                                          };
                                                          showUserProfileActionSheetDefault(obj);
                                                        }
                                                      }
                                                      const obj3 = { children: items };
                                                      items = [tmp34, tmp37, tmp41];
                                                      const tmp54 = closure_15(analyticsLocations, obj3);
                                                      cResult[53] = tmp34;
                                                      cResult[54] = tmp37;
                                                      cResult[55] = tmp41;
                                                      cResult[56] = tmp54;
                                                      tmp52 = tmp54;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  if ("loading" === status || 0 === displayItems.length) {
                                    let obj4 = {
                                      style: null,
                                      children: from(obj5, (arg0, arg1) => {
                                        const obj = { style: constants3.placeholder };
                                        return authStore2(metroRequire, obj, arg1);
                                      }),
                                    };
                                    class F {
                                      constructor() {
                                        const obj = {
                                          userId: giftRecipient.id,
                                          initialSection: UserProfileSections.WISHLIST,
                                          sourceAnalyticsLocations: analyticsLocations,
                                        };
                                        showUserProfileActionSheetDefault(obj);
                                      }
                                    }
                                    let _Array = Array;
                                    obj5 = { length: tmp(skusToUserAndReason[14]).WISHLIST_IN_DM_LENGTH_MOBILE };
                                    from = Array.from;
                                    tmp42Result = closure_14(analyticsLocations, obj4);
                                  } else {
                                    let obj9 = {
                                      horizontal: true,
                                      showsHorizontalScrollIndicator: false,
                                      snapToInterval: tmp(skusToUserAndReason[13]).COLLECTIBLES_SHOP_CARD_WIDTH + PX_16,
                                      snapToAlignment: "start",
                                      decelerationRate: "fast",
                                      nestedScrollEnabled: true,
                                      contentContainerStyle: obj10,
                                      children: items1,
                                    };
                                    const tmp43 = displayItems;
                                    class F {
                                      constructor() {
                                        const obj = {
                                          userId: giftRecipient.id,
                                          initialSection: UserProfileSections.WISHLIST,
                                          sourceAnalyticsLocations: analyticsLocations,
                                        };
                                        showUserProfileActionSheetDefault(obj);
                                      }
                                    }
                                    obj10 = {
                                      gap: PX_16,
                                      paddingHorizontal: PX_16,
                                      paddingVertical: size(skusToUserAndReason[9]).space.PX_8,
                                    };
                                    items1 = [
                                      arr4.map((sku) => {
                                        let obj2;
                                        sku = sku.sku;
                                        const source = sku.source;
                                        const obj = {
                                          style: wishlistItemShadow.wishlistItemShadow,
                                          children: closure_1_14(size(skusToUserAndReason[30]), obj2),
                                        };
                                        obj2 = {
                                          sku,
                                          size: source,
                                          source,
                                          recipientName: name,
                                          onPress() {
                                            return closure_10(sku, source);
                                          },
                                        };
                                        return closure_1_14(analyticsLocations, obj, sku.id);
                                      }),
                                    ];
                                    let tmp46Result = null != tmp32;
                                    if (tmp46Result) {
                                      let tmp48;
                                      const obj11 = { style: tmp27.wishlistItemShadow, children: null };
                                      class F {
                                        constructor() {
                                          const obj = {
                                            userId: giftRecipient.id,
                                            initialSection: UserProfileSections.WISHLIST,
                                            sourceAnalyticsLocations: analyticsLocations,
                                          };
                                          showUserProfileActionSheetDefault(obj);
                                        }
                                      }
                                      if (tmp29) {
                                        const obj12 = {
                                          sku: null.sku,
                                          size,
                                          recipientName: null,
                                          overflowCount: sum,
                                          onPress: tmp16,
                                        };
                                        class F {
                                          constructor() {
                                            const obj = {
                                              userId: giftRecipient.id,
                                              initialSection: UserProfileSections.WISHLIST,
                                              sourceAnalyticsLocations: analyticsLocations,
                                            };
                                            showUserProfileActionSheetDefault(obj);
                                          }
                                        }
                                        obj11.children = closure_14(size(skusToUserAndReason[31]), obj12);
                                        tmp48 = obj11;
                                      } else {
                                        const obj13 = {
                                          sku: null.sku,
                                          size,
                                          source: null,
                                          recipientName: tmp21,
                                          onPress() {
                                            return closure_10(_null.sku, _null.source);
                                          },
                                        };
                                        class F {
                                          constructor() {
                                            const obj = {
                                              userId: giftRecipient.id,
                                              initialSection: UserProfileSections.WISHLIST,
                                              sourceAnalyticsLocations: analyticsLocations,
                                            };
                                            showUserProfileActionSheetDefault(obj);
                                          }
                                        }
                                        obj11.children = closure_14(size(skusToUserAndReason[30]), obj13);
                                        tmp48 = obj11;
                                      }
                                      tmp46Result = closure_14(tmp47, tmp48);
                                    }
                                    items1[1] = tmp46Result;
                                    tmp42Result = closure_15(tmp43, obj9);
                                  }
                                  class F {
                                    constructor() {
                                      const obj = {
                                        userId: giftRecipient.id,
                                        initialSection: UserProfileSections.WISHLIST,
                                        sourceAnalyticsLocations: analyticsLocations,
                                      };
                                      showUserProfileActionSheetDefault(obj);
                                    }
                                  }
                                  cResult[41] = tmp19;
                                  cResult[42] = tmp16;
                                  cResult[43] = tmp29;
                                  cResult[44] = "loading" === status || 0 === displayItems.length;
                                  cResult[45] = sum;
                                  cResult[46] = null;
                                  cResult[47] = tmp21;
                                  cResult[48] = tmp27.placeholder;
                                  cResult[49] = tmp27.placeholderRow;
                                  cResult[50] = tmp27.wishlistItemShadow;
                                  cResult[51] = arr4;
                                  cResult[52] = tmp42Result;
                                  tmp41 = tmp42Result;
                                }
                                class F {
                                  constructor() {
                                    const obj = {
                                      userId: giftRecipient.id,
                                      initialSection: UserProfileSections.WISHLIST,
                                      sourceAnalyticsLocations: analyticsLocations,
                                    };
                                    showUserProfileActionSheetDefault(obj);
                                  }
                                }
                                tmp39[0] = tmp27.subtitle;
                                tmp39[3] = tmp22;
                                const tmp40 = closure_14(tmp(skusToUserAndReason[29]).Text, tmp39);
                                cResult[38] = tmp27.subtitle;
                                cResult[39] = tmp22;
                                cResult[40] = tmp40;
                                tmp37 = tmp40;
                              }
                              const obj14 = { style: tmp27.title, variant: "text-lg/semibold", children: tmp23 };
                              const tmp36 = closure_14(tmp(skusToUserAndReason[29]).Text, obj14);
                              cResult[35] = tmp27.title;
                              cResult[36] = tmp23;
                              cResult[37] = tmp36;
                              tmp34 = tmp36;
                            }
                            if (tmp29) {
                              const slice = displayItems.slice;
                              class F {
                                constructor() {
                                  const obj = {
                                    userId: giftRecipient.id,
                                    initialSection: UserProfileSections.WISHLIST,
                                    sourceAnalyticsLocations: analyticsLocations,
                                  };
                                  showUserProfileActionSheetDefault(obj);
                                }
                              }
                            }
                            cResult[32] = displayItems;
                            cResult[33] = tmp29;
                            cResult[34] = displayItems;
                            arr4 = tmp30;
                          }
                        }
                        class F {
                          constructor() {
                            const obj = {
                              userId: giftRecipient.id,
                              initialSection: UserProfileSections.WISHLIST,
                              sourceAnalyticsLocations: analyticsLocations,
                            };
                            showUserProfileActionSheetDefault(obj);
                          }
                        }
                        name = obj7.getName(giftRecipient);
                        let obj8 = tmp(skusToUserAndReason[16]).BANNER_CONFIG_MOBILE[tmp8];
                        const title = obj8.title;
                        const subtitle = obj8.getSubtitle(name);
                        cResult[27] = tmp8;
                        cResult[28] = giftRecipient;
                        cResult[29] = name;
                        cResult[30] = subtitle;
                        cResult[31] = title;
                        tmp23 = title;
                        tmp22 = subtitle;
                      }
                    }
                    _require = status((lockedRecipientUser, arg1) => {
                      let closure_1 = arg1;
                      let c3 = 0;
                      let c2 = 0;
                      return (function* (arg0, value) {
                        let intl;
                        let items;
                        let items1;
                        let items2;
                        let str;
                        let tmp5;
                        if (c2 === 2) {
                          c2 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp2 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            return { value, done: true };
                          } else {
                            return { value: "IconComponent", done: null };
                          }
                        } else {
                          try {
                            c2 = 2;
                            if (0 === c3) {
                              if (arg0 === 1) {
                                c2 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c2 = 3;
                                return { value, done: true };
                              } else {
                                const obj4 = {
                                  sku_id: lockedRecipientUser.id,
                                  item_source: str,
                                  wishlist_id: tmp5,
                                  product_line: lockedRecipientUser.productLine,
                                };
                                const track = size(skusToUserAndReason[19]).track;
                                const GIFTING_ITEM_CLICKED = constants2.GIFTING_ITEM_CLICKED;
                                str = "shop";
                                size(skusToUserAndReason[19]);
                                if (
                                  closure_1 === lockedRecipientUser(skusToUserAndReason[14]).WishlistItemSource.WISHLIST
                                ) {
                                  str = "wishlist";
                                }
                                tmp5 = null;
                                if (
                                  closure_1 === lockedRecipientUser(skusToUserAndReason[14]).WishlistItemSource.WISHLIST
                                ) {
                                  tmp5 = closure_1_4;
                                }
                                track(GIFTING_ITEM_CLICKED, obj4);
                                if (lockedRecipientUser.productLine !== constants3.PREMIUM) {
                                  if (lockedRecipientUser.productLine !== tmp7.SOCIAL_LAYER_GAME_ITEM) {
                                    const tmp33Result = lockedRecipientUser(skusToUserAndReason[23]);
                                    const rootNavigationRef = tmp33Result.getRootNavigationRef();
                                    if (null != rootNavigationRef) {
                                      if (rootNavigationRef.isReady()) {
                                        const obj5 = {
                                          analyticsLocations: items,
                                          analyticsSource: size(skusToUserAndReason[18]).GIFT_SELECTION_MODAL_WISHLIST,
                                          screen: constants4.FEATURED_PAGE,
                                        };
                                        const openCollectiblesShopMobile = lockedRecipientUser(
                                          skusToUserAndReason[26],
                                        ).openCollectiblesShopMobile;
                                        items = [];
                                        lockedRecipientUser(skusToUserAndReason[26]);
                                        items[0] = size(skusToUserAndReason[18]).GIFT_SELECTION_MODAL_WISHLIST;
                                        const result = openCollectiblesShopMobile(obj5);
                                        const obj6 = {
                                          skuId: lockedRecipientUser.id,
                                          analyticsLocations: items1,
                                          lockedRecipientUser,
                                          giftingOrigin: constants.DM_CHANNEL_WISHLIST,
                                        };
                                        const openShopGiftModal = lockedRecipientUser(
                                          skusToUserAndReason[27],
                                        ).openShopGiftModal;
                                        items1 = [];
                                        lockedRecipientUser(skusToUserAndReason[27]);
                                        items1[0] = size(skusToUserAndReason[18]).GIFT_SELECTION_MODAL_WISHLIST;
                                        openShopGiftModal(obj6);
                                      }
                                    }
                                    const obj7 = {
                                      key: "WISHLIST_ITEM_PRESS_ERROR",
                                      content: intl.string(lockedRecipientUser(skusToUserAndReason[25]).t["rTU7/z"]),
                                    };
                                    const open = size(skusToUserAndReason[24]).open;
                                    size(skusToUserAndReason[24]);
                                    intl = lockedRecipientUser(skusToUserAndReason[25]).intl;
                                    open(obj7);
                                  } else {
                                    const obj8 = {
                                      skuId: lockedRecipientUser.id,
                                      analyticsLocations: items2,
                                      lockedRecipientUser,
                                      giftingOrigin: constants.DM_CHANNEL_WISHLIST,
                                    };
                                    const openSocialLayerStorefrontGiftModal = lockedRecipientUser(
                                      skusToUserAndReason[22],
                                    ).openSocialLayerStorefrontGiftModal;
                                    items2 = [];
                                    lockedRecipientUser(skusToUserAndReason[22]);
                                    items2[0] = size(skusToUserAndReason[18]).GIFT_SELECTION_MODAL_WISHLIST;
                                    const result1 = openSocialLayerStorefrontGiftModal(obj8);
                                  }
                                } else {
                                  c3 = 1;
                                  c2 = 1;
                                  const obj9 = { value: closure_1_8(name[lockedRecipientUser.id]), done: false };
                                  return obj9;
                                }
                              }
                            } else if (arg0 === 1) {
                              c2 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c2 = 3;
                              return { value, done: true };
                            }
                            c2 = 3;
                            return { value: "IconComponent", done: null };
                          } catch (tmp23) {
                            c2 = 3;
                            throw tmp23;
                          }
                        }
                      })();
                    });
                    const fn2 = function () {
                      return closure_0(...arguments);
                    };
                    cResult[23] = defaultWishlistId;
                    cResult[24] = giftRecipient;
                    cResult[25] = tmp18;
                    cResult[26] = fn2;
                    tmp19 = fn2;
                  }
                  class F {
                    constructor() {
                      const obj = {
                        userId: giftRecipient.id,
                        initialSection: UserProfileSections.WISHLIST,
                        sourceAnalyticsLocations: analyticsLocations,
                      };
                      showUserProfileActionSheetDefault(obj);
                    }
                  }
                  cResult[20] = analyticsLocations;
                  cResult[21] = giftRecipient.id;
                  cResult[22] = F;
                  tmp16 = F;
                }
              }
            }
            const fn = function b() {
              let from;
              const current = ref.current;
              const tmp2 = !current && "success" === status && arr.length > 0;
              if (tmp2) {
                const obj = {
                  gift_recipient_id: giftRecipient.id,
                  sku_ids: arr.map((sku) => sku.sku.id),
                  location_stack: analyticsLocations,
                  product_lines: from(set),
                };
                const track = AnalyticsUtilsDefault.track;
                const IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED = c10.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED;
                AnalyticsUtilsDefault;
                const _Array = Array;
                const _Set = Set;
                from = Array.from;
                const self = this;
                const self2 = this;
                set = new Set(arr.map((sku) => sku.sku.productLine));
                track(IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, obj);
                ref.current = true;
              }
            };
            let items2 = [status, displayItems, giftRecipient.id, analyticsLocations];
            cResult[14] = analyticsLocations;
            cResult[15] = displayItems;
            cResult[16] = giftRecipient.id;
            cResult[17] = status;
            cResult[18] = fn;
            cResult[19] = items2;
            tmp14 = items2;
            tmp13 = fn;
          }
          const getBannerMode = tmp9.getBannerMode;
          const obj15 = {
            totalUnownedWishlistItemCount,
            wishlistInDmLength: tmp(skusToUserAndReason[14]).WISHLIST_IN_DM_LENGTH_MOBILE,
            displayItems,
          };
          const bannerMode = getBannerMode(obj15);
          cResult[11] = displayItems;
          cResult[12] = totalUnownedWishlistItemCount;
          cResult[13] = bannerMode;
          tmp8 = bannerMode;
        }
      }
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class C {
          constructor(productLine) {
            return (
              productLine.productLine === constants3.PREMIUM ||
              productLine.productLine === constants3.COLLECTIBLES ||
              productLine.productLine === constants3.SOCIAL_LAYER_GAME_ITEM
            );
          }
        }
        cResult[7] = C;
        class F {
          constructor() {
            const obj = {
              userId: giftRecipient.id,
              initialSection: UserProfileSections.WISHLIST,
              sourceAnalyticsLocations: analyticsLocations,
            };
            showUserProfileActionSheetDefault(obj);
          }
        }
      } else {
        class C {
          constructor(productLine) {
            return (
              productLine.productLine === constants3.PREMIUM ||
              productLine.productLine === constants3.COLLECTIBLES ||
              productLine.productLine === constants3.SOCIAL_LAYER_GAME_ITEM
            );
          }
        }
      }
      if (cResult[8] === giftRecipient.id) {
        class C {
          constructor(productLine) {
            return (
              productLine.productLine === constants3.PREMIUM ||
              productLine.productLine === constants3.COLLECTIBLES ||
              productLine.productLine === constants3.SOCIAL_LAYER_GAME_ITEM
            );
          }
        }
        const found = wishlistAndRecommendations.filter(tmp6);
        const mapped = found.map(A);
        class F {
          constructor() {
            const obj = {
              userId: giftRecipient.id,
              initialSection: UserProfileSections.WISHLIST,
              sourceAnalyticsLocations: analyticsLocations,
            };
            showUserProfileActionSheetDefault(obj);
          }
        }
        cResult[3] = giftRecipient.id;
        cResult[4] = skusToUserAndReason;
        cResult[5] = wishlistAndRecommendations;
        cResult[6] = mapped;
        displayItems = mapped;
      }
      class A {
        constructor(sku) {
          const obj = { sku, source: null };
          if (null != skusToUserAndReason[sku.id]) {
            let POPULAR;
            if (tmp[sku.id][giftRecipient.id] === ref.WISHLIST) {
              POPULAR = useWishlistHooks.WishlistItemSource.WISHLIST;
            }
            obj.source = POPULAR;
            return obj;
          }
          POPULAR = useWishlistHooks.WishlistItemSource.POPULAR;
        }
      }
      cResult[8] = giftRecipient.id;
      cResult[9] = skusToUserAndReason;
      cResult[10] = A;
    }
  : (giftRecipient) => {
      let items6;
      let obj11;
      let obj9;
      giftRecipient = giftRecipient.giftRecipient;
      let WISHLIST_IN_DM_LENGTH_MOBILE;
      let closure_15;
      size = {
        width: giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[13]).COLLECTIBLES_SHOP_CARD_WIDTH,
        height: giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[13]).COLLECTIBLES_SHOP_CARD_WIDTH,
      };
      const tmp = giftRecipient;
      let tmp2 = WISHLIST_IN_DM_LENGTH_MOBILE;
      WISHLIST_IN_DM_LENGTH_MOBILE = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[14]).WISHLIST_IN_DM_LENGTH_MOBILE;
      let obj = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[15]);
      let obj2 = { userId: giftRecipient.id, numItems: WISHLIST_IN_DM_LENGTH_MOBILE };
      const wishlistRecommendationsForSingleUser = obj.useWishlistRecommendationsForSingleUser(obj2);
      const wishlistAndRecommendations = wishlistRecommendationsForSingleUser.wishlistAndRecommendations;
      const skusToUserAndReason = wishlistRecommendationsForSingleUser.skusToUserAndReason;
      const status = wishlistRecommendationsForSingleUser.status;
      const totalUnownedWishlistItemCount = wishlistRecommendationsForSingleUser.totalUnownedWishlistItemCount;
      const defaultWishlistId = wishlistRecommendationsForSingleUser.defaultWishlistId;
      let items = [wishlistAndRecommendations, giftRecipient.id, skusToUserAndReason];
      const memo = skusToUserAndReason.useMemo(() => {
        let id;
        const found = wishlistAndRecommendations.filter(
          (productLine) =>
            productLine.productLine === constants.PREMIUM ||
            productLine.productLine === constants.COLLECTIBLES ||
            productLine.productLine === constants.SOCIAL_LAYER_GAME_ITEM,
        );
        return found.map((sku) => {
          const obj = { sku, source: null };
          if (null != skusToUserAndReason[sku.id]) {
            let POPULAR;
            if (tmp[sku.id][id.id] === defaultWishlistId.WISHLIST) {
              POPULAR = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[14]).WishlistItemSource.WISHLIST;
            }
            obj.source = POPULAR;
            return obj;
          }
          POPULAR = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[14]).WishlistItemSource.POPULAR;
        });
      }, items);
      let items1 = [totalUnownedWishlistItemCount, WISHLIST_IN_DM_LENGTH_MOBILE, memo];
      let tmp5 = size;
      const memo1 = skusToUserAndReason.useMemo(() => {
        const obj = WishlistBannerUtils;
        const obj2 = {
          totalUnownedWishlistItemCount,
          wishlistInDmLength: WISHLIST_IN_DM_LENGTH_MOBILE,
          displayItems: memo,
        };
        return obj.getBannerMode(obj2);
      }, items1);
      const tmp6 = size(WISHLIST_IN_DM_LENGTH_MOBILE[17]);
      const analyticsLocations = tmp6(size(WISHLIST_IN_DM_LENGTH_MOBILE[18]).WISHLIST_BANNER).analyticsLocations;
      const ref = skusToUserAndReason.useRef(false);
      let items2 = [status, memo, giftRecipient.id, analyticsLocations];
      const effect = skusToUserAndReason.useEffect(function () {
        let from;
        const current = ref.current;
        const tmp2 = !current && "success" === status && memo.length > 0;
        if (tmp2) {
          const obj = {
            gift_recipient_id: giftRecipient.id,
            sku_ids: memo.map((sku) => sku.sku.id),
            location_stack: analyticsLocations,
            product_lines: from(set),
          };
          const track = AnalyticsUtilsDefault.track;
          const IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED = ref.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED;
          AnalyticsUtilsDefault;
          const _Array = Array;
          const _Set = Set;
          from = Array.from;
          const self = this;
          const self2 = this;
          set = new Set(memo.map((sku) => sku.sku.productLine));
          track(IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, obj);
          ref.current = true;
        }
      }, items2);
      const items3 = [giftRecipient.id, analyticsLocations];
      const callback = skusToUserAndReason.useCallback(() => {
        const obj = {
          userId: giftRecipient.id,
          initialSection: UserProfileSections.WISHLIST,
          sourceAnalyticsLocations: analyticsLocations,
        };
        showUserProfileActionSheetDefault(obj);
      }, items3);
      const obj3 = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[21]);
      const selectPremiumGift = obj3.useSelectPremiumGift("PremiumGiftWishlistBanner");
      const useCallback = skusToUserAndReason.useCallback;
      let closure_0 = wishlistAndRecommendations((lockedRecipientUser, arg1) => {
        let closure_1 = arg1;
        let c3 = 0;
        let c2 = 0;
        return (function* (arg0, value) {
          let intl;
          let items;
          let items1;
          let items2;
          let str;
          let tmp5;
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            try {
              c2 = 2;
              if (0 === c3) {
                if (arg0 === 1) {
                  c2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 3;
                  return { value, done: true };
                } else {
                  const obj4 = {
                    sku_id: lockedRecipientUser.id,
                    item_source: str,
                    wishlist_id: tmp5,
                    product_line: lockedRecipientUser.productLine,
                  };
                  const track = size(WISHLIST_IN_DM_LENGTH_MOBILE[19]).track;
                  const GIFTING_ITEM_CLICKED = constants2.GIFTING_ITEM_CLICKED;
                  str = "shop";
                  size(WISHLIST_IN_DM_LENGTH_MOBILE[19]);
                  if (closure_1 === lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[14]).WishlistItemSource.WISHLIST) {
                    str = "wishlist";
                  }
                  tmp5 = null;
                  if (closure_1 === lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[14]).WishlistItemSource.WISHLIST) {
                    tmp5 = closure_1_7;
                  }
                  track(GIFTING_ITEM_CLICKED, obj4);
                  if (lockedRecipientUser.productLine !== constants3.PREMIUM) {
                    if (lockedRecipientUser.productLine !== tmp7.SOCIAL_LAYER_GAME_ITEM) {
                      const tmp33Result = lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[23]);
                      const rootNavigationRef = tmp33Result.getRootNavigationRef();
                      if (null != rootNavigationRef) {
                        if (rootNavigationRef.isReady()) {
                          const obj5 = {
                            analyticsLocations: items,
                            analyticsSource: size(WISHLIST_IN_DM_LENGTH_MOBILE[18]).GIFT_SELECTION_MODAL_WISHLIST,
                            screen: constants4.FEATURED_PAGE,
                          };
                          const openCollectiblesShopMobile = lockedRecipientUser(
                            WISHLIST_IN_DM_LENGTH_MOBILE[26],
                          ).openCollectiblesShopMobile;
                          items = [];
                          lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[26]);
                          items[0] = size(WISHLIST_IN_DM_LENGTH_MOBILE[18]).GIFT_SELECTION_MODAL_WISHLIST;
                          const result = openCollectiblesShopMobile(obj5);
                          const obj6 = {
                            skuId: lockedRecipientUser.id,
                            analyticsLocations: items1,
                            lockedRecipientUser,
                            giftingOrigin: constants.DM_CHANNEL_WISHLIST,
                          };
                          const openShopGiftModal = lockedRecipientUser(
                            WISHLIST_IN_DM_LENGTH_MOBILE[27],
                          ).openShopGiftModal;
                          items1 = [];
                          lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[27]);
                          items1[0] = size(WISHLIST_IN_DM_LENGTH_MOBILE[18]).GIFT_SELECTION_MODAL_WISHLIST;
                          openShopGiftModal(obj6);
                        }
                      }
                      const obj7 = {
                        key: "WISHLIST_ITEM_PRESS_ERROR",
                        content: intl.string(lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[25]).t["rTU7/z"]),
                      };
                      const open = size(WISHLIST_IN_DM_LENGTH_MOBILE[24]).open;
                      size(WISHLIST_IN_DM_LENGTH_MOBILE[24]);
                      intl = lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[25]).intl;
                      open(obj7);
                    } else {
                      const obj8 = {
                        skuId: lockedRecipientUser.id,
                        analyticsLocations: items2,
                        lockedRecipientUser,
                        giftingOrigin: constants.DM_CHANNEL_WISHLIST,
                      };
                      const openSocialLayerStorefrontGiftModal = lockedRecipientUser(
                        WISHLIST_IN_DM_LENGTH_MOBILE[22],
                      ).openSocialLayerStorefrontGiftModal;
                      items2 = [];
                      lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[22]);
                      items2[0] = size(WISHLIST_IN_DM_LENGTH_MOBILE[18]).GIFT_SELECTION_MODAL_WISHLIST;
                      const result1 = openSocialLayerStorefrontGiftModal(obj8);
                    }
                  } else {
                    c3 = 1;
                    c2 = 1;
                    const obj9 = { value: closure_1_11(analyticsLocations[lockedRecipientUser.id]), done: false };
                    return obj9;
                  }
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                return { value, done: true };
              }
              c2 = 3;
              return { value: "IconComponent", done: null };
            } catch (tmp23) {
              c2 = 3;
              throw tmp23;
            }
          }
        })();
      });
      const items4 = [giftRecipient, defaultWishlistId, selectPremiumGift];
      closure_12 = useCallback(function () {
        return closure_0(...arguments);
      }, items4);
      let obj4 = size(WISHLIST_IN_DM_LENGTH_MOBILE[28]);
      const name = obj4.getName(giftRecipient);
      let obj5 = giftRecipient(WISHLIST_IN_DM_LENGTH_MOBILE[16]).BANNER_CONFIG_MOBILE[memo1];
      const title = obj5.title;
      const subtitle = obj5.getSubtitle(name);
      const tmp12 = closure_18(size.width, size.height);
      let closure_14 = tmp12;
      if ("error" === status) {
        return null;
      } else {
        let tmp17Result;
        let str = "loading";
        let tmp13 = "loading" === status;
        if (!tmp13) {
          tmp13 = 0 === memo.length;
        }
        let substr = memo;
        if (totalUnownedWishlistItemCount > WISHLIST_IN_DM_LENGTH_MOBILE) {
          substr = memo.slice(0, WISHLIST_IN_DM_LENGTH_MOBILE - 1);
        }
        let tmp16 = null;
        if (totalUnownedWishlistItemCount > WISHLIST_IN_DM_LENGTH_MOBILE) {
          tmp16 = memo[WISHLIST_IN_DM_LENGTH_MOBILE - 1];
        }
        closure_15 = tmp16;
        let obj6 = { style: tmp12.title, variant: "text-lg/semibold", children: title };
        const items5 = [closure_14(tmp(tmp2[29]).Text, obj6), ,];
        let obj7 = { style: tmp12.subtitle, variant: "text-sm/medium", color: "text-muted", children: subtitle };
        items5[1] = closure_14(tmp(tmp2[29]).Text, obj7);
        if (tmp13) {
          let obj8 = {
            style: tmp12.placeholderRow,
            children: Array.from(obj9, (arg0, arg1) => {
              const obj = { style: closure_14.placeholder };
              return authStore2(metroRequire, obj, arg1);
            }),
          };
          let _Array = Array;
          obj9 = { length: WISHLIST_IN_DM_LENGTH_MOBILE };
          tmp17Result = tmp19(tmp18, obj8);
        } else {
          const obj10 = {
            horizontal: true,
            showsHorizontalScrollIndicator: false,
            snapToInterval: tmp(tmp2[13]).COLLECTIBLES_SHOP_CARD_WIDTH + PX_16,
            snapToAlignment: "start",
            decelerationRate: "fast",
            nestedScrollEnabled: true,
            contentContainerStyle: obj11,
            children: items6,
          };
          obj11 = { gap: PX_16, paddingHorizontal: PX_16, paddingVertical: tmp5(tmp2[9]).space.PX_8 };
          items6 = [
            substr.map((sku) => {
              let obj2;
              sku = sku.sku;
              const source = sku.source;
              const obj = {
                style: closure_14.wishlistItemShadow,
                children: closure_14(size(WISHLIST_IN_DM_LENGTH_MOBILE[30]), obj2),
              };
              obj2 = {
                sku,
                size: source,
                source,
                recipientName: name,
                onPress() {
                  return closure_12(sku, source);
                },
              };
              return closure_14(totalUnownedWishlistItemCount, obj, sku.id);
            }),
          ];
          let tmp19Result2 = null != tmp16;
          const tmp20 = status;
          if (tmp19Result2) {
            let tmp24;
            const obj12 = { style: tmp12.wishlistItemShadow, children: null };
            if (totalUnownedWishlistItemCount > WISHLIST_IN_DM_LENGTH_MOBILE) {
              const obj13 = {
                sku: tmp16.sku,
                size,
                recipientName: name,
                overflowCount: totalUnownedWishlistItemCount - WISHLIST_IN_DM_LENGTH_MOBILE + 1,
                onPress: callback,
              };
              obj12.children = closure_14(tmp5(tmp2[31]), obj13);
              tmp24 = obj12;
            } else {
              const obj14 = {
                sku: tmp16.sku,
                size,
                source: tmp16.source,
                recipientName: name,
                onPress() {
                  return closure_12(closure_15.sku, closure_15.source);
                },
              };
              obj12.children = closure_14(tmp5(tmp2[30]), obj14);
              tmp24 = obj12;
            }
            tmp19Result2 = tmp19(tmp18, tmp24);
          }
          items6[1] = tmp19Result2;
          tmp17Result = tmp17(tmp20, obj10);
        }
        const obj15 = { children: items5 };
        items5[2] = tmp17Result;
        return closure_15(totalUnownedWishlistItemCount, obj15);
      }
    };
let size = size_mod;
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftWishlistBanner.tsx");

export const PremiumGiftWishlistBanner = tmp6;
