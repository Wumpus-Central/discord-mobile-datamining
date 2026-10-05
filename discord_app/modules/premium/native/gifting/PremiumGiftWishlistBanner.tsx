// === Module 10525: PremiumGiftWishlistBanner ===

// Module 10525 (PremiumGiftWishlistBanner)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 7850 */;
import useWishlistHooks from "useWishlistHooks" /* 8430 */;
import WishlistBannerUtils from "WishlistBannerUtils" /* 10530 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
let constants = fn(6728).WishlistRecommendationReason;
const PremiumConstants = fn(1379);
({ GiftingOrigin: closure_8, PremiumSubscriptionSKUToPremiumType: closure_9 } = PremiumConstants);
const Constants = fn(1085);
({ AnalyticEvents: c10, SKUProductLines: closure_11 } = Constants);
let closure_12 = fn(1087).CollectiblesMobileShopScreen;
const UserProfileSections = fn(7854).UserProfileSections;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(4890);
let closure_18 = createStyles.createStyles((width, height) => {
  const obj = { title: { marginBottom: nativeDefault.space.PX_4, paddingHorizontal: PX_16 }, subtitle: null, placeholderRow: null, placeholder: null, wishlistItemShadow: null };
  const obj2 = { marginBottom: nativeDefault.space.PX_4, paddingHorizontal: PX_16 };
  obj.subtitle = { marginBottom: nativeDefault.space.PX_12, paddingHorizontal: PX_16 };
  obj.placeholderRow = { flexDirection: "row", gap: PX_16, paddingHorizontal: PX_16 };
  const size = { width, height, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT };
  obj.placeholder = size;
  const size1 = { width, height, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BG_SURFACE_RAISED };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
  obj.wishlistItemShadow = size1;
  return obj;
});
const ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftWishlistBanner.tsx");

export const PremiumGiftWishlistBanner = ReactCompilerGating.isReactCompilerEnabled() ? ((giftRecipient) => {
  let WISHLIST_IN_DM_LENGTH_MOBILE = skusToUserAndReason;
  const cResult = require("c").c(57);
  giftRecipient = giftRecipient.giftRecipient;
  _require = giftRecipient;
  let obj5 = globalThis;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const size1 = { width: tmp(WISHLIST_IN_DM_LENGTH_MOBILE[13]).COLLECTIBLES_SHOP_CARD_WIDTH, height: tmp(WISHLIST_IN_DM_LENGTH_MOBILE[13]).COLLECTIBLES_SHOP_CARD_WIDTH };
    cResult[0] = size1;
    let size = size1;
  } else {
    size = cResult[0];
  }
  if (cResult[1] !== giftRecipient.id) {
    let obj2 = { userId: giftRecipient.id, numItems: tmp(WISHLIST_IN_DM_LENGTH_MOBILE[14]).WISHLIST_IN_DM_LENGTH_MOBILE };
    cResult[1] = giftRecipient.id;
    cResult[2] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[2];
  }
  let obj = require("c");
  const wishlistRecommendationsForSingleUser = require("useWishlistRecommendations").useWishlistRecommendationsForSingleUser(tmp3);
  ({ wishlistAndRecommendations, skusToUserAndReason } = wishlistRecommendationsForSingleUser);
  const status = wishlistRecommendationsForSingleUser.status;
  ({ totalUnownedWishlistItemCount, defaultWishlistId } = wishlistRecommendationsForSingleUser);
  if (cResult[3] === giftRecipient.id) {
    if (cResult[4] === skusToUserAndReason) {
      if (cResult[5] === wishlistAndRecommendations) {
        const displayItems = cResult[6];
        if (cResult[11] === displayItems) {
          if (cResult[12] === totalUnownedWishlistItemCount) {
            let tmp8 = cResult[13];
          }
          let tmp10 = size;
          const analyticsLocations = size(WISHLIST_IN_DM_LENGTH_MOBILE[17])(size(WISHLIST_IN_DM_LENGTH_MOBILE[18]).WISHLIST_BANNER).analyticsLocations;
          constants = defaultWishlistId.useRef(false);
          if (cResult[14] === analyticsLocations) {
            if (cResult[15] === displayItems) {
              if (cResult[16] === giftRecipient.id) {
                if (cResult[17] === status) {
                  let tmp12 = cResult[18];
                  let tmp13 = cResult[19];
                }
                const effect = defaultWishlistId.useEffect(tmp12, tmp13);
                if (cResult[20] === analyticsLocations) {
                  if (cResult[21] === giftRecipient.id) {
                    let tmp15 = cResult[22];
                  }
                  tmp(WISHLIST_IN_DM_LENGTH_MOBILE[21]);
                  class F {
                    constructor() {
                      obj = { userId: closure_0.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
                      tmp = closure_1(closure_2[20])(obj);
                      return;
                    }
                  }
                  closure_8 = tmp17;
                  if (cResult[23] === defaultWishlistId) {
                    if (cResult[24] === giftRecipient) {
                      if (cResult[25] === tmp17) {
                        let tmp18 = cResult[26];
                      }
                      closure_10 = tmp18;
                      if (cResult[27] === tmp8) {
                        if (cResult[28] === giftRecipient) {
                          let name = cResult[29];
                          let tmp20 = cResult[30];
                          class F {
                            constructor() {
                              obj = { userId: closure_0.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
                              tmp = closure_1(closure_2[20])(obj);
                              return;
                            }
                          }
                        }
                        let wishlistItemShadow = closure_18(size.width, size.height);
                        class F {
                          constructor() {
                            obj = { userId: closure_0.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
                            tmp = closure_1(closure_2[20])(obj);
                            return;
                          }
                        }
                        if ("error" === status) {
                          return null;
                        } else {
                          let tmp25 = "loading" === status;
                          if (!tmp25) {
                            tmp25 = 0 === displayItems.length;
                          }
                          class F {
                            constructor() {
                              obj = { userId: closure_0.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
                              tmp = closure_1(closure_2[20])(obj);
                              return;
                            }
                          }
                          if (cResult[32] === displayItems) {
                            if (cResult[33] === tmp26) {
                              let arr4 = cResult[34];
                            }
                            class F {
                              constructor() {
                                obj = { userId: closure_0.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
                                tmp = closure_1(closure_2[20])(obj);
                                return;
                              }
                            }
                            c12 = tmp29;
                            const sum = totalUnownedWishlistItemCount - tmp(WISHLIST_IN_DM_LENGTH_MOBILE[14]).WISHLIST_IN_DM_LENGTH_MOBILE + 1;
                            if (cResult[35] === wishlistItemShadow.title) {
                              if (cResult[36] === tmp21) {
                                let tmp31 = cResult[37];
                              }
                              if (cResult[38] === wishlistItemShadow.subtitle) {
                                if (cResult[39] === tmp20) {
                                  let tmp34 = cResult[40];
                                }
                                if (cResult[41] === tmp18) {
                                  if (cResult[42] === tmp15) {
                                    if (cResult[43] === tmp26) {
                                      if (cResult[44] === tmp25) {
                                        if (cResult[45] === sum) {
                                          if (cResult[46] === tmp29) {
                                            if (cResult[47] === placeholderRow) {
                                              if (cResult[48] === wishlistItemShadow.placeholder) {
                                                if (cResult[49] === wishlistItemShadow.placeholderRow) {
                                                  if (cResult[50] === wishlistItemShadow.wishlistItemShadow) {
                                                    if (cResult[51] === arr4) {
                                                      if (cResult[53] === tmp31) {
                                                        if (cResult[54] === tmp34) {
                                                          if (cResult[55] === tmp38) {
                                                            let tmp51 = cResult[56];
                                                          }
                                                          return tmp51;
                                                        }
                                                      }
                                                      class F {
                                                        constructor() {
                                                          obj = { userId: closure_0.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
                                                          tmp = closure_1(closure_2[20])(obj);
                                                          return;
                                                        }
                                                      }
                                                      let obj3 = { children: null };
                                                      let items = [tmp31, tmp34, cResult[52]];
                                                      obj3.children = items;
                                                      const tmp53 = closure_15(analyticsLocations, obj3);
                                                      cResult[53] = tmp31;
                                                      cResult[54] = tmp34;
                                                      cResult[55] = cResult[52];
                                                      cResult[56] = tmp53;
                                                      tmp51 = tmp53;
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
                                }
                                if (tmp25) {
                                  let obj4 = { style: null, children: null };
                                  class F {
                                    constructor() {
                                      obj = { userId: closure_0.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
                                      tmp = closure_1(closure_2[20])(obj);
                                      return;
                                    }
                                  }
                                  let _Array = obj5.Array;
                                  obj5 = { length: null };
                                  WISHLIST_IN_DM_LENGTH_MOBILE = tmp(WISHLIST_IN_DM_LENGTH_MOBILE[14]).WISHLIST_IN_DM_LENGTH_MOBILE;
                                  obj5.length = WISHLIST_IN_DM_LENGTH_MOBILE;
                                  obj4.children = _Array.from(obj5, (arg0, arg1) => state(timestampProducer, { style: constants3.placeholder }, arg1));
                                  let tmp39Result = closure_14(analyticsLocations, obj4);
                                } else {
                                  let obj7 = { horizontal: true, showsHorizontalScrollIndicator: false, snapToInterval: null, snapToAlignment: "start", decelerationRate: "fast", nestedScrollEnabled: true, contentContainerStyle: null, children: null };
                                  class F {
                                    constructor() {
                                      obj = { userId: closure_0.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
                                      tmp = closure_1(closure_2[20])(obj);
                                      return;
                                    }
                                  }
                                  obj7.snapToInterval = tmp(WISHLIST_IN_DM_LENGTH_MOBILE[13]).COLLECTIBLES_SHOP_CARD_WIDTH + PX_16;
                                  const obj11 = { gap: PX_16, paddingHorizontal: PX_16, paddingVertical: tmp10(WISHLIST_IN_DM_LENGTH_MOBILE[9]).space.PX_8 };
                                  obj7.contentContainerStyle = obj11;
                                  let items1 = [
                                    arr4.map((sku) => {
                                                                      sku = sku.sku;
                                                                      const source = sku.source;
                                                                      const obj = {
                                                                        style: wishlistItemShadow.wishlistItemShadow,
                                                                        children: closure_1_14(size(skusToUserAndReason[30]), {
                                                                          sku,
                                                                          size: source,
                                                                          source,
                                                                          recipientName: name,
                                                                          onPress() {
                                                                            return closure_10(sku, source);
                                                                          }
                                                                        })
                                                                      };
                                                                      return closure_1_14(analyticsLocations, obj, sku.id);
                                                                    }),

                                  ];
                                  if (null == tmp29) {
                                    items1[1] = tmp42;
                                    obj7.children = items1;
                                    tmp39Result = closure_15(tmp40, obj7);
                                  } else {
                                    const obj12 = { style: wishlistItemShadow.wishlistItemShadow, children: null };
                                    class F {
                                      constructor() {
                                        obj = { userId: closure_0.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
                                        tmp = closure_1(closure_2[20])(obj);
                                        return;
                                      }
                                    }
                                    if (tmp26) {
                                      tmp10 = tmp10(WISHLIST_IN_DM_LENGTH_MOBILE[31]);
                                      const obj13 = { sku: tmp29.sku, size: null, recipientName: null, overflowCount: null, onPress: null };
                                      class F {
                                        constructor() {
                                          obj = { userId: closure_0.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
                                          tmp = closure_1(closure_2[20])(obj);
                                          return;
                                        }
                                      }
                                      obj13.recipientName = placeholderRow;
                                      obj13.overflowCount = sum;
                                      obj13.onPress = tmp15;
                                      obj12.children = closure_14(tmp10, obj13);
                                      let tmp45 = obj12;
                                    } else {
                                      let obj14 = { sku: tmp29.sku, size, source: null, recipientName: null, onPress: null };
                                      class F {
                                        constructor() {
                                          obj = { userId: closure_0.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
                                          tmp = closure_1(closure_2[20])(obj);
                                          return;
                                        }
                                      }
                                      obj14.recipientName = placeholderRow;
                                      obj14.onPress = function onPress() {
                                        return closure_10(_null.sku, _null.source);
                                      };
                                      obj12.children = closure_14(tmp10(WISHLIST_IN_DM_LENGTH_MOBILE[30]), obj14);
                                      tmp45 = obj12;
                                    }
                                    closure_14(tmp44, tmp45);
                                  }
                                  tmp40 = displayItems;
                                }
                                class F {
                                  constructor() {
                                    obj = { userId: closure_0.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
                                    tmp = closure_1(closure_2[20])(obj);
                                    return;
                                  }
                                }
                                cResult[41] = tmp18;
                                cResult[42] = tmp15;
                                cResult[43] = tmp26;
                                cResult[44] = tmp25;
                                cResult[45] = sum;
                                cResult[46] = tmp29;
                                cResult[47] = placeholderRow;
                                ({ placeholder: tmp2[48], placeholderRow } = wishlistItemShadow);
                                cResult[49] = placeholderRow;
                                wishlistItemShadow = wishlistItemShadow.wishlistItemShadow;
                                cResult[50] = wishlistItemShadow;
                                cResult[51] = arr4;
                                cResult[52] = tmp39Result;
                              }
                              class F {
                                constructor() {
                                  obj = { userId: closure_0.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
                                  tmp = closure_1(closure_2[20])(obj);
                                  return;
                                }
                              }
                              tmp36[0] = wishlistItemShadow.subtitle;
                              tmp36[3] = tmp20;
                              const tmp37 = closure_14(tmp(WISHLIST_IN_DM_LENGTH_MOBILE[29]).Text, tmp36);
                              cResult[38] = wishlistItemShadow.subtitle;
                              cResult[39] = tmp20;
                              cResult[40] = tmp37;
                              tmp34 = tmp37;
                            }
                            const obj15 = { style: wishlistItemShadow.title, variant: "text-lg/semibold", children: tmp21 };
                            const tmp33 = closure_14(tmp(WISHLIST_IN_DM_LENGTH_MOBILE[29]).Text, obj15);
                            cResult[35] = wishlistItemShadow.title;
                            cResult[36] = tmp21;
                            cResult[37] = tmp33;
                            tmp31 = tmp33;
                          }
                          if (tmp26) {
                            const slice = displayItems.slice;
                            class F {
                              constructor() {
                                obj = { userId: closure_0.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
                                tmp = closure_1(closure_2[20])(obj);
                                return;
                              }
                            }
                          }
                          cResult[32] = displayItems;
                          cResult[33] = tmp26;
                          cResult[34] = displayItems;
                          arr4 = tmp27;
                        }
                      }
                      class F {
                        constructor() {
                          obj = { userId: closure_0.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
                          tmp = closure_1(closure_2[20])(obj);
                          return;
                        }
                      }
                      name = obj9.getName(giftRecipient);
                      const obj10 = tmp(WISHLIST_IN_DM_LENGTH_MOBILE[16]).BANNER_CONFIG_MOBILE[tmp8];
                      const title = obj10.title;
                      const subtitle = obj10.getSubtitle(name);
                      cResult[27] = tmp8;
                      cResult[28] = giftRecipient;
                      cResult[29] = name;
                      cResult[30] = subtitle;
                      cResult[31] = title;
                      tmp20 = subtitle;
                      placeholderRow = name;
                    }
                  }
                  _require = status((lockedRecipientUser, arg1) => {
                    closure_1 = arg1;
                    c3 = 0;
                    c2 = 0;
                    return (function*(arg0, value) {
                      if (c2 === 2) {
                        c2 = 3;
                        throw new TypeError("Generator functions may not be called on executing generators");
                      } else if (tmp3 === 3) {
                        if (arg0 === 1) {
                          throw value;
                        } else if (arg0 === 2) {
                          const obj2 = { value, done: true };
                          return obj2;
                        } else {
                          return { value: "IconComponent", done: null };
                        }
                      } else {
                        try {
                          c2 = 2;
                          let openShopGiftModal = c3;
                          if (0 === c3) {
                            if (arg0 === 1) {
                              c2 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c2 = 3;
                              const obj3 = { value, done: true };
                              return obj3;
                            } else {
                              let id = lockedRecipientUser;
                              let items1 = skusToUserAndReason;
                              let prop;
                              const obj4 = { sku_id: lockedRecipientUser.id, item_source: null, wishlist_id: null, product_line: null };
                              openShopGiftModal = lockedRecipientUser;
                              let str = "shop";
                              if (closure_1 === lockedRecipientUser(skusToUserAndReason[14]).WishlistItemSource.WISHLIST) {
                                str = "wishlist";
                              }
                              obj4.item_source = str;
                              let num3 = null;
                              let tmp4 = null;
                              if (closure_1 === openShopGiftModal(items1[14]).WishlistItemSource.WISHLIST) {
                                tmp4 = defaultWishlistId;
                              }
                              obj4.wishlist_id = tmp4;
                              obj4.product_line = id.productLine;
                              size(skusToUserAndReason[19]).track(constants.GIFTING_ITEM_CLICKED, obj4);
                              if (id.productLine !== constants3.PREMIUM) {
                                if (id.productLine !== tmp6.SOCIAL_LAYER_GAME_ITEM) {
                                  const rootNavigationRef = openShopGiftModal(items1[23]).getRootNavigationRef();
                                  if (num3 != rootNavigationRef) {
                                    if (rootNavigationRef.isReady()) {
                                      const obj5 = { analyticsLocations: null, analyticsSource: null, screen: null };
                                      const items = [size(items1[18]).GIFT_SELECTION_MODAL_WISHLIST];
                                      obj5.analyticsLocations = items;
                                      obj5.analyticsSource = size(items1[18]).GIFT_SELECTION_MODAL_WISHLIST;
                                      obj5.screen = constants2.FEATURED_PAGE;
                                      const result = openShopGiftModal(items1[26]).openCollectiblesShopMobile(obj5);
                                      const openShopGiftModalResult1 = openShopGiftModal(items1[26]);
                                      openShopGiftModal = openShopGiftModal(items1[27]).openShopGiftModal;
                                      const obj6 = { skuId: null, analyticsLocations: null, lockedRecipientUser: null, giftingOrigin: null };
                                      id = id.id;
                                      obj6.skuId = id;
                                      prop = size(items1[18]).GIFT_SELECTION_MODAL_WISHLIST;
                                      items1 = [prop];
                                      obj6.analyticsLocations = items1;
                                      obj6.lockedRecipientUser = lockedRecipientUser;
                                      obj6.giftingOrigin = closure_8.DM_CHANNEL_WISHLIST;
                                      num3 = openShopGiftModal(obj6);
                                      const openShopGiftModalResult2 = openShopGiftModal(items1[27]);
                                    }
                                  }
                                  const openShopGiftModalResult = openShopGiftModal(items1[23]);
                                  const obj7 = { key: "WISHLIST_ITEM_PRESS_ERROR", content: null };
                                  const intl = openShopGiftModal(items1[25]).intl;
                                  obj7.content = intl.string(openShopGiftModal(items1[25]).t["rTU7/z"]);
                                  num3 = size(items1[24]).open(obj7);
                                  const tmp24Result = size(items1[24]);
                                } else {
                                  const obj8 = { skuId: id.id, analyticsLocations: null, lockedRecipientUser: null, giftingOrigin: null };
                                  const items2 = [size(items1[18]).GIFT_SELECTION_MODAL_WISHLIST];
                                  obj8.analyticsLocations = items2;
                                  obj8.lockedRecipientUser = lockedRecipientUser;
                                  obj8.giftingOrigin = closure_8.DM_CHANNEL_WISHLIST;
                                  const result1 = openShopGiftModal(items1[22]).openSocialLayerStorefrontGiftModal(obj8);
                                  const openShopGiftModalResult3 = openShopGiftModal(items1[22]);
                                }
                              } else {
                                c3 = 1;
                                c2 = 1;
                                const obj9 = { value: closure_1_8(name[id.id]), done: false };
                                return obj9;
                              }
                              const obj14 = size(skusToUserAndReason[19]);
                            }
                          } else {
                            num3 = 1;
                            if (arg0 === 1) {
                              c2 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c2 = 3;
                              const obj = { value, done: true };
                              return obj;
                            }
                          }
                          c2 = 3;
                        } catch (tmp18) {
                          c2 = tmp;
                          throw tmp18;
                        }
                      }
                    })();
                  });
                  const fn2 = function() {
                    const self = this;
                    const apply = closure_0.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  };
                  cResult[23] = defaultWishlistId;
                  cResult[24] = giftRecipient;
                  cResult[25] = tmp17;
                  cResult[26] = fn2;
                  tmp18 = fn2;
                }
                class F {
                  constructor() {
                    obj = { userId: closure_0.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
                    tmp = closure_1(closure_2[20])(obj);
                    return;
                  }
                }
                cResult[20] = analyticsLocations;
                cResult[21] = giftRecipient.id;
                cResult[22] = F;
                tmp15 = F;
              }
            }
          }
          const fn = function b() {
            const current = ref.current;
            let tmp2 = !current;
            if (!current) {
              tmp2 = "success" === status;
            }
            if (tmp2) {
              tmp2 = arr.length > 0;
            }
            if (tmp2) {
              const obj2 = { gift_recipient_id: user.id, sku_ids: arr.map((sku) => sku.sku.id), location_stack: analyticsLocations, product_lines: null };
              const _Array = Array;
              const _Set = Set;
              const set = new Set(arr.map((sku) => sku.sku.productLine));
              obj2.product_lines = Array.from(set);
              AnalyticsUtilsDefault.track(constants2.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, obj2);
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
          tmp13 = items2;
          tmp12 = fn;
          const tmp11 = size(WISHLIST_IN_DM_LENGTH_MOBILE[17]);
        }
        const obj16 = { totalUnownedWishlistItemCount, wishlistInDmLength: tmp(WISHLIST_IN_DM_LENGTH_MOBILE[14]).WISHLIST_IN_DM_LENGTH_MOBILE, displayItems };
        const bannerMode = obj6.getBannerMode(obj16);
        cResult[11] = displayItems;
        cResult[12] = totalUnownedWishlistItemCount;
        cResult[13] = bannerMode;
        tmp8 = bannerMode;
      }
    }
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(arg0) {
        tmp = closure_11;
        tmp2 = giftRecipient.productLine === closure_11.PREMIUM || giftRecipient.productLine === tmp.COLLECTIBLES || giftRecipient.productLine === tmp.SOCIAL_LAYER_GAME_ITEM;
        return tmp2;
      }
    }
    cResult[7] = C;
    class F {
      constructor() {
        obj = { userId: closure_0.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
        tmp = closure_1(closure_2[20])(obj);
        return;
      }
    }
  } else {
    class C {
      constructor(arg0) {
        tmp = closure_11;
        tmp2 = giftRecipient.productLine === closure_11.PREMIUM || giftRecipient.productLine === tmp.COLLECTIBLES || giftRecipient.productLine === tmp.SOCIAL_LAYER_GAME_ITEM;
        return tmp2;
      }
    }
  }
  if (cResult[8] === giftRecipient.id) {
    class C {
      constructor(arg0) {
        tmp = closure_11;
        tmp2 = giftRecipient.productLine === closure_11.PREMIUM || giftRecipient.productLine === tmp.COLLECTIBLES || giftRecipient.productLine === tmp.SOCIAL_LAYER_GAME_ITEM;
        return tmp2;
      }
    }
    const found = wishlistAndRecommendations.filter(tmp5);
    const mapped = found.map(A);
    class F {
      constructor() {
        obj = { userId: closure_0.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations };
        tmp = closure_1(closure_2[20])(obj);
        return;
      }
    }
    cResult[3] = tmp5;
    cResult[4] = skusToUserAndReason;
    cResult[5] = wishlistAndRecommendations;
    cResult[6] = mapped;
  }
  class A {
    constructor(arg0) {
      obj = { sku: giftRecipient, source: null };
      if (null != skusToUserAndReason[giftRecipient.id]) {
        tmp2 = closure_0;
        tmp3 = closure_7;
        if (tmp[giftRecipient.id][closure_0.id] === closure_7.WISHLIST) {
          tmp4 = closure_0;
          tmp5 = closure_2;
          POPULAR = closure_0(closure_2[14]).WishlistItemSource.WISHLIST;
        }
        obj.source = POPULAR;
        return obj;
      }
      POPULAR = closure_0(closure_2[14]).WishlistItemSource.POPULAR;
      return;
    }
  }
  cResult[8] = giftRecipient.id;
  cResult[9] = skusToUserAndReason;
  cResult[10] = A;
  const tmpResult = require("useWishlistRecommendations");
}) : ((giftRecipient) => {
  giftRecipient = giftRecipient.giftRecipient;
  _require = giftRecipient;
  let WISHLIST_IN_DM_LENGTH_MOBILE;
  let sku;
  const size = { width: require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_WIDTH, height: require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_WIDTH };
  let tmp19Result3 = WISHLIST_IN_DM_LENGTH_MOBILE;
  WISHLIST_IN_DM_LENGTH_MOBILE = require("useWishlistHooks").WISHLIST_IN_DM_LENGTH_MOBILE;
  const wishlistRecommendationsForSingleUser = require("useWishlistRecommendations").useWishlistRecommendationsForSingleUser({ userId: giftRecipient.id, numItems: WISHLIST_IN_DM_LENGTH_MOBILE });
  const wishlistAndRecommendations = wishlistRecommendationsForSingleUser.wishlistAndRecommendations;
  const skusToUserAndReason = wishlistRecommendationsForSingleUser.skusToUserAndReason;
  const status = wishlistRecommendationsForSingleUser.status;
  let totalUnownedWishlistItemCount = wishlistRecommendationsForSingleUser.totalUnownedWishlistItemCount;
  const defaultWishlistId = wishlistRecommendationsForSingleUser.defaultWishlistId;
  let items = [wishlistAndRecommendations, giftRecipient.id, skusToUserAndReason];
  const memo = skusToUserAndReason.useMemo(() => {
    const found = wishlistAndRecommendations.filter((productLine) => productLine.productLine === constants.PREMIUM || productLine.productLine === constants.COLLECTIBLES || productLine.productLine === constants.SOCIAL_LAYER_GAME_ITEM);
    return found.map((sku) => {
      const obj = { sku, source: null };
      if (null != skusToUserAndReason[sku.id]) {
        if (tmp[sku.id][user.id] === defaultWishlistId.WISHLIST) {
          let POPULAR = closure_0(WISHLIST_IN_DM_LENGTH_MOBILE[14]).WishlistItemSource.WISHLIST;
        }
        obj.source = POPULAR;
        return obj;
      }
      POPULAR = closure_0(WISHLIST_IN_DM_LENGTH_MOBILE[14]).WishlistItemSource.POPULAR;
    });
  }, items);
  let items1 = [totalUnownedWishlistItemCount, WISHLIST_IN_DM_LENGTH_MOBILE, memo];
  let tmp5 = size;
  const memo1 = skusToUserAndReason.useMemo(() => WishlistBannerUtils.getBannerMode({ totalUnownedWishlistItemCount, wishlistInDmLength: WISHLIST_IN_DM_LENGTH_MOBILE, displayItems: memo }), items1);
  let obj = require("useWishlistRecommendations");
  let obj2 = { userId: giftRecipient.id, numItems: WISHLIST_IN_DM_LENGTH_MOBILE };
  const analyticsLocations = size(WISHLIST_IN_DM_LENGTH_MOBILE[17])(size(WISHLIST_IN_DM_LENGTH_MOBILE[18]).WISHLIST_BANNER).analyticsLocations;
  skusToUserAndReason.useRef(false);
  let items2 = [status, memo, giftRecipient.id, analyticsLocations];
  const effect = skusToUserAndReason.useEffect(() => {
    const current = ref.current;
    let tmp2 = !current;
    if (!current) {
      tmp2 = "success" === status;
    }
    if (tmp2) {
      tmp2 = memo.length > 0;
    }
    if (tmp2) {
      const obj2 = { gift_recipient_id: user.id, sku_ids: memo.map((sku) => sku.sku.id), location_stack: analyticsLocations, product_lines: null };
      const _Array = Array;
      const _Set = Set;
      const set = new Set(memo.map((sku) => sku.sku.productLine));
      obj2.product_lines = Array.from(set);
      AnalyticsUtilsDefault.track(constants2.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, obj2);
      ref.current = true;
    }
  }, items2);
  const items3 = [giftRecipient.id, analyticsLocations];
  const callback = skusToUserAndReason.useCallback(() => {
    showUserProfileActionSheetDefault({ userId: user.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations });
  }, items3);
  const tmp6 = size(WISHLIST_IN_DM_LENGTH_MOBILE[17]);
  const selectPremiumGift = require("useSelectPremiumGift").useSelectPremiumGift("PremiumGiftWishlistBanner");
  _require = wishlistAndRecommendations((lockedRecipientUser, arg1) => {
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function*(arg0, value) {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          let openShopGiftModal = c3;
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let id = lockedRecipientUser;
              let items1 = WISHLIST_IN_DM_LENGTH_MOBILE;
              let prop;
              const obj4 = { sku_id: lockedRecipientUser.id, item_source: null, wishlist_id: null, product_line: null };
              openShopGiftModal = lockedRecipientUser;
              let str = "shop";
              if (closure_1 === lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[14]).WishlistItemSource.WISHLIST) {
                str = "wishlist";
              }
              obj4.item_source = str;
              let num3 = null;
              let tmp4 = null;
              if (closure_1 === openShopGiftModal(items1[14]).WishlistItemSource.WISHLIST) {
                tmp4 = defaultWishlistId;
              }
              obj4.wishlist_id = tmp4;
              obj4.product_line = id.productLine;
              size(WISHLIST_IN_DM_LENGTH_MOBILE[19]).track(constants.GIFTING_ITEM_CLICKED, obj4);
              if (id.productLine !== selectPremiumGift.PREMIUM) {
                if (id.productLine !== tmp6.SOCIAL_LAYER_GAME_ITEM) {
                  const rootNavigationRef = openShopGiftModal(items1[23]).getRootNavigationRef();
                  if (num3 != rootNavigationRef) {
                    if (rootNavigationRef.isReady()) {
                      const obj5 = { analyticsLocations: null, analyticsSource: null, screen: null };
                      const items = [size(items1[18]).GIFT_SELECTION_MODAL_WISHLIST];
                      obj5.analyticsLocations = items;
                      obj5.analyticsSource = size(items1[18]).GIFT_SELECTION_MODAL_WISHLIST;
                      obj5.screen = constants2.FEATURED_PAGE;
                      const result = openShopGiftModal(items1[26]).openCollectiblesShopMobile(obj5);
                      const openShopGiftModalResult1 = openShopGiftModal(items1[26]);
                      openShopGiftModal = openShopGiftModal(items1[27]).openShopGiftModal;
                      const obj6 = { skuId: null, analyticsLocations: null, lockedRecipientUser: null, giftingOrigin: null };
                      id = id.id;
                      obj6.skuId = id;
                      prop = size(items1[18]).GIFT_SELECTION_MODAL_WISHLIST;
                      items1 = [prop];
                      obj6.analyticsLocations = items1;
                      obj6.lockedRecipientUser = lockedRecipientUser;
                      obj6.giftingOrigin = memo.DM_CHANNEL_WISHLIST;
                      num3 = openShopGiftModal(obj6);
                      const openShopGiftModalResult2 = openShopGiftModal(items1[27]);
                    }
                  }
                  const openShopGiftModalResult = openShopGiftModal(items1[23]);
                  const obj7 = { key: "WISHLIST_ITEM_PRESS_ERROR", content: null };
                  const intl = openShopGiftModal(items1[25]).intl;
                  obj7.content = intl.string(openShopGiftModal(items1[25]).t["rTU7/z"]);
                  num3 = size(items1[24]).open(obj7);
                  const tmp24Result = size(items1[24]);
                } else {
                  const obj8 = { skuId: id.id, analyticsLocations: null, lockedRecipientUser: null, giftingOrigin: null };
                  const items2 = [size(items1[18]).GIFT_SELECTION_MODAL_WISHLIST];
                  obj8.analyticsLocations = items2;
                  obj8.lockedRecipientUser = lockedRecipientUser;
                  obj8.giftingOrigin = memo.DM_CHANNEL_WISHLIST;
                  const result1 = openShopGiftModal(items1[22]).openSocialLayerStorefrontGiftModal(obj8);
                  const openShopGiftModalResult3 = openShopGiftModal(items1[22]);
                }
              } else {
                c3 = 1;
                c2 = 1;
                const obj9 = { value: closure_1_11(analyticsLocations[id.id]), done: false };
                return obj9;
              }
              const obj14 = size(WISHLIST_IN_DM_LENGTH_MOBILE[19]);
            }
          } else {
            num3 = 1;
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
              return obj;
            }
          }
          c2 = 3;
        } catch (tmp18) {
          c2 = tmp;
          throw tmp18;
        }
      }
    })();
  });
  const items4 = [giftRecipient, defaultWishlistId, selectPremiumGift];
  closure_12 = skusToUserAndReason.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items4);
  let obj3 = require("useSelectPremiumGift");
  const name = size(WISHLIST_IN_DM_LENGTH_MOBILE[28]).getName(giftRecipient);
  let obj5 = require("WishlistBannerUtils").BANNER_CONFIG_MOBILE[memo1];
  const subtitle = obj5.getSubtitle(name);
  const tmp12 = closure_18(size.width, size.height);
  closure_14 = tmp12;
  if ("error" === status) {
    return null;
  } else {
    let tmp13 = "loading" === status;
    if (!tmp13) {
      tmp13 = 0 === memo.length;
    }
    let substr = memo;
    if (totalUnownedWishlistItemCount > WISHLIST_IN_DM_LENGTH_MOBILE) {
      substr = memo.slice(0, WISHLIST_IN_DM_LENGTH_MOBILE - 1);
    }
    sku = null;
    if (totalUnownedWishlistItemCount > WISHLIST_IN_DM_LENGTH_MOBILE) {
      sku = memo[WISHLIST_IN_DM_LENGTH_MOBILE - 1];
    }
    let obj6 = { style: tmp12.title, variant: "text-lg/semibold", children: obj5.title };
    const items5 = [closure_14(tmp(tmp19Result3[29]).Text, obj6), , ];
    let obj7 = { style: tmp12.subtitle, variant: "text-sm/medium", color: "text-muted", children: subtitle };
    items5[1] = closure_14(tmp(tmp19Result3[29]).Text, obj7);
    if (tmp13) {
      let obj8 = { style: tmp12.placeholderRow, children: null };
      let _Array = Array;
      let obj9 = { length: WISHLIST_IN_DM_LENGTH_MOBILE };
      obj8.children = Array.from(obj9, (arg0, arg1) => state(timestampProducer, { style: closure_14.placeholder }, arg1));
      let tmp17Result = tmp19(tmp18, obj8);
    } else {
      const obj10 = { horizontal: true, showsHorizontalScrollIndicator: false, snapToInterval: tmp(tmp19Result3[13]).COLLECTIBLES_SHOP_CARD_WIDTH + PX_16, snapToAlignment: "start", decelerationRate: "fast", nestedScrollEnabled: true, contentContainerStyle: null, children: null };
      const obj11 = { gap: PX_16, paddingHorizontal: PX_16, paddingVertical: tmp5(tmp19Result3[9]).space.PX_8 };
      obj10.contentContainerStyle = obj11;
      const items6 = [
        substr.map((sku) => {
              sku = sku.sku;
              const source = sku.source;
              const obj = {
                style: closure_14.wishlistItemShadow,
                children: closure_14(size(WISHLIST_IN_DM_LENGTH_MOBILE[30]), {
                  sku,
                  size: source,
                  source,
                  recipientName: name,
                  onPress() {
                    return closure_12(sku, source);
                  }
                })
              };
              return closure_14(totalUnownedWishlistItemCount, obj, sku.id);
            }),

      ];
      if (null == sku) {
        items6[1] = tmp23;
        obj10.children = items6;
        tmp17Result = tmp17(tmp20, obj10);
      } else {
        const obj12 = { style: tmp12.wishlistItemShadow, children: null };
        if (tmp14) {
          tmp5 = tmp5(tmp19Result3[31]);
          const obj13 = { sku: null, size: null, recipientName: null, overflowCount: null, onPress: null };
          sku = sku.sku;
          obj13.sku = sku;
          obj13.size = size;
          obj13.recipientName = name;
          totalUnownedWishlistItemCount = totalUnownedWishlistItemCount - WISHLIST_IN_DM_LENGTH_MOBILE;
          obj13.overflowCount = totalUnownedWishlistItemCount + 1;
          obj13.onPress = callback;
          tmp19Result3 = tmp19(tmp5, obj13);
          obj12.children = tmp19Result3;
          let tmp24 = obj12;
        } else {
          let obj14 = {
            sku: sku.sku,
            size,
            source: sku.source,
            recipientName: name,
            onPress() {
                      return closure_12(sku.sku, sku.source);
                    }
          };
          obj12.children = tmp19(tmp5(tmp19Result3[30]), obj14);
          tmp24 = obj12;
        }
        tmp19(tmp18, tmp24);
      }
      tmp20 = status;
    }
    const obj15 = { children: null };
    items5[2] = tmp17Result;
    obj15.children = items5;
    return sku(totalUnownedWishlistItemCount, obj15);
  }
  let obj4 = size(WISHLIST_IN_DM_LENGTH_MOBILE[28]);
});