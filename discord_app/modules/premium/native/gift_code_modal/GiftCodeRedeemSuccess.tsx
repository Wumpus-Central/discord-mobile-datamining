// === Module 11243: GiftCodeRedeemSuccess ===

// Module 11243 (GiftCodeRedeemSuccess)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1992 */;
import Text_Text from "Text/Text" /* 5086 */;
import GiftCodeUtils from "GiftCodeUtils" /* 5629 */;
import _mod5741 from "module_5741" /* 5741 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import GameIcon from "GameIcon" /* 6851 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 6917 */;
import BundleSampleV2Default from "BundleSampleV2" /* 8970 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 8998 */;
import ProfileEffectUserPreviewDefault from "ProfileEffectUserPreview" /* 10486 */;
import ProfileFrameUserPreviewDefault from "ProfileFrameUserPreview" /* 11186 */;
import NameplatePreview from "NameplatePreview" /* 11187 */;
import GiftBoxAnimationDefault from "GiftBoxAnimation" /* 11237 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SKUStore from "SKUStore" /* 6092 */;

const GameIconDefault = GameIcon;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, body: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 28, paddingBottom: 12, paddingHorizontal: 32 }, nameplateContainer: null, bundleContainer: null, bundlePreview: null, header: null, message: null, footer: null, gameItemCard: null };
let obj3 = { flex: 1, justifyContent: "space-between", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.nameplateContainer = { width: "100%", paddingTop: nativeDefault.space.PX_24 };
let obj4 = { width: "100%", paddingTop: nativeDefault.space.PX_24 };
obj2.bundleContainer = { width: "100%", alignItems: "center", paddingTop: nativeDefault.space.PX_24 };
obj2.bundlePreview = { alignSelf: "stretch", minHeight: 250, alignItems: "center", justifyContent: "center" };
obj2.header = { marginTop: 32, textAlign: "center" };
obj2.message = { marginTop: 8, textAlign: "center" };
obj2.footer = { paddingHorizontal: 24 };
obj2.gameItemCard = { marginTop: 20 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { width: "100%", alignItems: "center", paddingTop: nativeDefault.space.PX_24 };
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/gift_code_modal/GiftCodeRedeemSuccess.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GiftCodeRedeemSuccess(giftCode) {
  const cResult = giftCode(576).c(65);
  giftCode = giftCode.giftCode;
  const user = giftCode.user;
  const tmp4 = firstProfileEffect();
  dependencyMap = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [first1];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== giftCode.skuId) {
    const fn = function y() {
      return SKUStore.get(giftCode.skuId);
    };
    cResult[1] = giftCode.skuId;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  let obj = giftCode(576);
  const stateFromStores = giftCode(504).useStateFromStores(first, tmp7);
  let tmpResult = giftCode(504);
  const getOrFetchSubscriptionPlan = giftCode(10478).useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  const tmpResult7 = giftCode(10478);
  const getOrFetchApplication = giftCode(6847).useGetOrFetchApplication(giftCode.applicationId);
  const tmpResult8 = giftCode(6847);
  const tmpResult9 = giftCode(10482);
  let skuId = null;
  if (tmpResult10.isCollectiblesGiftCode(giftCode)) {
    skuId = giftCode.skuId;
  }
  const product = tmpResult9.useFetchCollectiblesProduct(skuId, true).product;
  closure_6 = product;
  first1 = undefined;
  if (product != null) {
    first1 = product.items[0];
  }
  let type;
  if (product != null) {
    type = product.type;
  }
  const tmp14 = type === giftCode(1992).CollectiblesItemType.BUNDLE;
  closure_8 = tmp14;
  if (cResult[3] !== product) {
    let tmp16 = product;
    if (product == null) {
      let obj2 = { items: [] };
      tmp16 = obj2;
    }
    cResult[3] = product;
    cResult[4] = tmp16;
    let tmp15 = tmp16;
  } else {
    tmp15 = cResult[4];
  }
  tmpResult10 = giftCode(7264);
  const shopProductItems = giftCode(8271).useShopProductItems(tmp15);
  const firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  firstProfileEffect = shopProductItems.firstProfileEffect;
  const firstNameplate = shopProductItems.firstNameplate;
  if (cResult[5] !== product) {
    let tmp19 = product;
    if (product == null) {
      let obj3 = { skuId: "", type: tmp(1992).CollectiblesItemType.BUNDLE, items: [] };
      tmp19 = obj3;
    }
    cResult[5] = product;
    cResult[6] = tmp19;
    let tmp18 = tmp19;
  } else {
    tmp18 = cResult[6];
  }
  if (cResult[7] !== tmp18) {
    let obj4 = { product: tmp18 };
    cResult[7] = tmp18;
    cResult[8] = obj4;
    let tmp20 = obj4;
  } else {
    tmp20 = cResult[8];
  }
  const tmpResult11 = giftCode(8271);
  const handleUseNow1 = giftCode(11181).useHandleUseNow(tmp20);
  const handleUseNow = handleUseNow1.handleUseNow;
  const canUseNow = handleUseNow1.canUseNow;
  const isApplying = handleUseNow1.isApplying;
  const tmp22 = stateFromStores(getOrFetchSubscriptionPlan.useState(), 2);
  const first2 = tmp22[0];
  closure_16 = tmp22[1];
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function k(nativeEvent) {
      ({ width: giftCode, height: user } = nativeEvent.nativeEvent.layout);
      closure_16((arg0) => {
        let size = arg0;
        if (null != arg0) {
          return size;
        }
        const size1 = { width, height };
        size = size1;
      });
    };
    cResult[9] = fn2;
    let tmp24 = fn2;
  } else {
    tmp24 = cResult[9];
  }
  const onLayout = tmp24;
  if (cResult[10] === getOrFetchApplication) {
    if (cResult[11] === first2) {
      if (cResult[12] === firstAvatarDecoration) {
        if (cResult[13] === firstNameplate) {
          if (cResult[14] === firstProfileEffect) {
            if (cResult[15] === giftCode.giftStyle) {
              if (cResult[16] === giftCode.skuId) {
                if (cResult[17] === tmp14) {
                  if (cResult[18] === first1) {
                    if (cResult[19] === product) {
                      if (cResult[20] === stateFromStores) {
                        if (cResult[21] === tmp4.bundleContainer) {
                          if (cResult[22] === tmp4.bundlePreview) {
                            if (cResult[23] === tmp4.gameItemCard) {
                              if (cResult[24] === tmp4.nameplateContainer) {
                                if (cResult[25] === user) {
                                  let tmp25 = cResult[26];
                                }
                                if (cResult[27] === giftCode.isSubscription) {
                                  if (cResult[28] === first1) {
                                    if (cResult[29] === stateFromStores) {
                                      if (cResult[30] === tmp4.header) {
                                        if (cResult[31] === getOrFetchSubscriptionPlan) {
                                          let tmp26 = cResult[32];
                                        }
                                        if (cResult[33] === getOrFetchApplication) {
                                          if (cResult[34] === giftCode.isSubscription) {
                                            if (cResult[35] === first1) {
                                              if (cResult[36] === stateFromStores) {
                                                if (cResult[37] === tmp4.message) {
                                                  if (cResult[38] === getOrFetchSubscriptionPlan) {
                                                    let tmp27 = cResult[39];
                                                  }
                                                  if (cResult[40] === canUseNow) {
                                                    if (cResult[41] === handleUseNow) {
                                                      if (cResult[42] === isApplying) {
                                                        if (cResult[43] === first1) {
                                                          let tmp28 = cResult[44];
                                                        }
                                                        ({ container, body } = tmp4);
                                                        if (cResult[45] !== tmp25) {
                                                          const tmp25Result = tmp25();
                                                          cResult[45] = tmp25;
                                                          cResult[46] = tmp25Result;
                                                          let tmp29 = tmp25Result;
                                                        } else {
                                                          tmp29 = cResult[46];
                                                        }
                                                        if (cResult[47] !== tmp26) {
                                                          const tmp26Result = tmp26();
                                                          cResult[47] = tmp26;
                                                          cResult[48] = tmp26Result;
                                                          let tmp31 = tmp26Result;
                                                        } else {
                                                          tmp31 = cResult[48];
                                                        }
                                                        if (cResult[49] !== tmp27) {
                                                          const tmp27Result = tmp27();
                                                          cResult[49] = tmp27;
                                                          cResult[50] = tmp27Result;
                                                          let tmp33 = tmp27Result;
                                                        } else {
                                                          tmp33 = cResult[50];
                                                        }
                                                        if (cResult[51] === tmp4.body) {
                                                          if (cResult[52] === tmp29) {
                                                            if (cResult[53] === tmp31) {
                                                              if (cResult[54] === tmp33) {
                                                                let tmp35 = cResult[55];
                                                              }
                                                              if (cResult[56] !== tmp28) {
                                                                const tmp28Result = tmp28();
                                                                cResult[56] = tmp28;
                                                                cResult[57] = tmp28Result;
                                                                let tmp39 = tmp28Result;
                                                              } else {
                                                                tmp39 = cResult[57];
                                                              }
                                                              if (cResult[58] === tmp4.footer) {
                                                                if (cResult[59] === tmp39) {
                                                                  let tmp41 = cResult[60];
                                                                }
                                                                if (cResult[61] === tmp4.container) {
                                                                  if (cResult[62] === tmp35) {
                                                                    if (cResult[63] === tmp41) {
                                                                      let tmp45 = cResult[64];
                                                                    }
                                                                    return tmp45;
                                                                  }
                                                                }
                                                                let obj5 = { bottom: true, style: container, children: null };
                                                                const items1 = [tmp35, tmp41];
                                                                obj5.children = items1;
                                                                const tmp47 = firstAvatarDecoration(tmp(6803).SafeAreaPaddingView, obj5);
                                                                cResult[61] = tmp4.container;
                                                                cResult[62] = tmp35;
                                                                cResult[63] = tmp41;
                                                                cResult[64] = tmp47;
                                                                tmp45 = tmp47;
                                                              }
                                                              let obj6 = { style: tmp4.footer, children: tmp39 };
                                                              const tmp44 = closure_8(getOrFetchApplication, obj6);
                                                              cResult[58] = tmp4.footer;
                                                              cResult[59] = tmp39;
                                                              cResult[60] = tmp44;
                                                              tmp41 = tmp44;
                                                            }
                                                          }
                                                        }
                                                        let obj7 = { contentContainerStyle: body, alwaysBounceVertical: false, children: null };
                                                        const items2 = [tmp29, tmp31, tmp33];
                                                        obj7.children = items2;
                                                        const tmp38 = firstAvatarDecoration(closure_6, obj7);
                                                        cResult[51] = tmp4.body;
                                                        cResult[52] = tmp29;
                                                        cResult[53] = tmp31;
                                                        cResult[54] = tmp33;
                                                        cResult[55] = tmp38;
                                                        tmp35 = tmp38;
                                                      }
                                                    }
                                                  }
                                                  function renderButton() {
                                                    if (null != first1) {
                                                      if (canUseNow) {
                                                        const obj2 = { text: null, size: "md", loading: null, disabled: null, onPress: null };
                                                        const intl2 = util.intl;
                                                        obj2.text = intl2.string(util.t.MAS7uK);
                                                        obj2.loading = isApplying;
                                                        obj2.disabled = isApplying;
                                                        obj2.onPress = handleUseNow;
                                                        let obj = obj2;
                                                      }
                                                      return closure_2_8(tmp4, obj);
                                                    }
                                                    obj = { text: null, size: "md", onPress: null };
                                                    const intl = util.intl;
                                                    obj.text = intl.string(util.t["NX+WJN"]);
                                                    obj.onPress = ModalActionCreatorsDefault.pop;
                                                  }
                                                  cResult[40] = canUseNow;
                                                  cResult[41] = handleUseNow;
                                                  cResult[42] = isApplying;
                                                  cResult[43] = first1;
                                                  cResult[44] = renderButton;
                                                  tmp28 = renderButton;
                                                }
                                              }
                                            }
                                          }
                                        }
                                        function renderMessage() {
                                          if (obj.isGameItemSKU(stateFromStores)) {
                                            if (null != getOrFetchApplication) {
                                              const obj2 = { variant: "text-md/medium", style: closure_2.message, children: null };
                                              const intl3 = util.intl;
                                              let str;
                                              if (stateFromStores != null) {
                                                str = stateFromStores.name;
                                              }
                                              if (str == null) {
                                                str = "";
                                              }
                                              const obj3 = { skuName: str, applicationName: tmp4.name };
                                              obj2.children = intl3.formatToPlainString(util.t.W2znvX, obj3);
                                              let tmp8Result = closure_2_8(Text_Text.Text, obj2);
                                            }
                                            return tmp8Result;
                                          }
                                          if (giftCode.isSubscription) {
                                            if (null != getOrFetchSubscriptionPlan) {
                                              const obj4 = { variant: "text-md/medium", style: closure_2.message, children: GiftCodeUtils.getSubscriptionGiftSuccessText(tmp6) };
                                              tmp8Result = closure_2_8(Text_Text.Text, obj4);
                                              const tmpResult = GiftCodeUtils;
                                            }
                                          }
                                          const obj5 = { variant: "text-md/medium", style: closure_2.message, children: null };
                                          if (null != first1) {
                                            let name;
                                            if (stateFromStores != null) {
                                              name = stateFromStores.name;
                                            }
                                            if (null != name) {
                                              const intl2 = util.intl;
                                              const obj6 = { itemName: stateFromStores.name };
                                              let formatToPlainStringResult = intl2.formatToPlainString(util.t["4kp0AB"], obj6);
                                            }
                                            obj5.children = formatToPlainStringResult;
                                            tmp8Result = closure_2_8(tmp9, obj5);
                                          }
                                          const intl = util.intl;
                                          formatToPlainStringResult = intl.string(util.t["5ayf7w"]);
                                          obj = SlayerStorefrontUtils;
                                        }
                                        cResult[33] = getOrFetchApplication;
                                        cResult[34] = giftCode.isSubscription;
                                        cResult[35] = first1;
                                        cResult[36] = stateFromStores;
                                        cResult[37] = tmp4.message;
                                        cResult[38] = getOrFetchSubscriptionPlan;
                                        cResult[39] = renderMessage;
                                        tmp27 = renderMessage;
                                      }
                                    }
                                  }
                                }
                                function renderHeader() {
                                  if (null == stateFromStores) {
                                    const obj2 = { variant: "heading-xl/bold", style: closure_2.header, accessibilityRole: "header", children: null };
                                    const intl4 = util.intl;
                                    obj2.children = intl4.string(util.t["+BNMcF"]);
                                    let tmp5 = closure_2_8(Text_Text.Text, obj2);
                                  } else {
                                    if (obj6.isGameItemSKU(stateFromStores)) {
                                      const obj3 = { variant: "heading-xl/bold", style: closure_2.header, accessibilityRole: "header", children: null };
                                      const intl3 = util.intl;
                                      obj3.children = intl3.string(util.t["5glWta"]);
                                      tmp5 = closure_2_8(Text_Text.Text, obj3);
                                    } else {
                                      if (giftCode.isSubscription) {
                                        if (null != getOrFetchSubscriptionPlan) {
                                          const obj4 = { variant: "heading-xl/bold", style: closure_2.header, accessibilityRole: "header", children: null };
                                          const intl2 = util.intl;
                                          const obj5 = { skuName: stateFromStores.name };
                                          obj4.children = intl2.format(util.t["1C2BG/"], obj5);
                                          tmp5 = closure_2_8(Text_Text.Text, obj4);
                                        }
                                      }
                                      if (null != first1) {
                                        const obj = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: closure_2.header, accessibilityRole: "header", children: null };
                                        const intl = util.intl;
                                        obj.children = intl.string(util.t.IMffmm);
                                        tmp5 = closure_2_8(Text_Text.Text, obj);
                                      }
                                    }
                                    obj6 = SlayerStorefrontUtils;
                                  }
                                  return tmp5;
                                }
                                cResult[27] = giftCode.isSubscription;
                                cResult[28] = first1;
                                cResult[29] = stateFromStores;
                                cResult[30] = tmp4.header;
                                cResult[31] = getOrFetchSubscriptionPlan;
                                cResult[32] = renderHeader;
                                tmp26 = renderHeader;
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
        }
      }
    }
  }
  function renderImage() {
    if (null == first1) {
      if (null != getOrFetchApplication) {
        if (obj13.isGameItemSKU(stateFromStores)) {
          let obj = { style: nameplateContainer.gameItemCard, children: null };
          const obj2 = { sku: stateFromStores };
          obj.children = closure_2_8(SlayerStorefrontItemCardDefault, obj2);
          let tmp22Result = closure_2_8(hasOwnProperty, obj);
        } else {
          const obj3 = { game: tmp2, size: GameIcon.GameIconSizes.LARGE, skuId: giftCode.skuId };
          tmp22Result = closure_2_8(GameIconDefault, obj3);
        }
        obj13 = SlayerStorefrontUtils;
      }
    }
    if (closure_8) {
      if (null != product) {
        const obj4 = { style: nameplateContainer.bundleContainer, children: null };
        const obj5 = { style: nameplateContainer.bundlePreview, onLayout, children: null };
        let tmp12 = null != first2;
        if (tmp12) {
          const obj6 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, previewAssets: tmp3.previewAssets, disableStaticBackground: true, size: "large", targetSize: tmp11 };
          tmp12 = closure_2_8(BundleSampleV2Default, obj6);
        }
        obj5.children = tmp12;
        obj4.children = closure_2_8(hasOwnProperty, obj5);
        let otherwiseResult = closure_2_8(hasOwnProperty, obj4);
      }
      return otherwiseResult;
    }
    const match = _mod5741.match(first1);
    const obj7 = { type: CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION };
    const withResult = match.with({ type: CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION }, (avatarDecoration) => {
      let avatarSource;
      if (user != null) {
        avatarSource = user.getAvatarSource(null, true, giftCode(nameplateContainer[22]).AVATAR_SIZE_MAP[giftCode(undefined, nameplateContainer[22]).AvatarSizes.GIFT_SUCCESS]);
      }
      return closure_8(giftCode(nameplateContainer[22]).Avatar, { source: avatarSource, avatarDecoration, size: giftCode(nameplateContainer[22]).AvatarSizes.GIFT_SUCCESS, animate: true });
    });
    const obj8 = { type: CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT };
    const withResult1 = withResult.with({ type: CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT }, (profileEffect) => closure_8(user(nameplateContainer[23]), { user, profileEffect }));
    const obj9 = { type: CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME };
    const withResult2 = withResult1.with({ type: CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME }, (profileFrame) => closure_8(user(nameplateContainer[24]), { user, profileFrame }));
    const obj10 = { type: CollectiblesItemType.CollectiblesItemType.NAMEPLATE };
    otherwiseResult = withResult2.with({ type: CollectiblesItemType.CollectiblesItemType.NAMEPLATE }, (nameplate) => {
      const obj = { style: nameplateContainer.nameplateContainer, children: closure_8(giftCode(nameplateContainer[25]).NameplatePreview, { user, nameplate }) };
      return closure_8(getOrFetchApplication, obj);
    }).otherwise(() => closure_8(user(nameplateContainer[26]), { giftStyle: giftStyle.giftStyle }));
    const withResult3 = withResult2.with({ type: CollectiblesItemType.CollectiblesItemType.NAMEPLATE }, (nameplate) => {
      const obj = { style: nameplateContainer.nameplateContainer, children: closure_8(giftCode(nameplateContainer[25]).NameplatePreview, { user, nameplate }) };
      return closure_8(getOrFetchApplication, obj);
    });
  }
  cResult[10] = getOrFetchApplication;
  cResult[11] = first2;
  cResult[12] = firstAvatarDecoration;
  cResult[13] = firstNameplate;
  cResult[14] = firstProfileEffect;
  cResult[15] = giftCode.giftStyle;
  cResult[16] = giftCode.skuId;
  cResult[17] = tmp14;
  cResult[18] = first1;
  cResult[19] = product;
  cResult[20] = stateFromStores;
  cResult[21] = tmp4.bundleContainer;
  cResult[22] = tmp4.bundlePreview;
  cResult[23] = tmp4.gameItemCard;
  cResult[24] = tmp4.nameplateContainer;
  cResult[25] = user;
  cResult[26] = renderImage;
  tmp25 = renderImage;
}) : (function GiftCodeRedeemSuccess(giftCode) {
  giftCode = giftCode.giftCode;
  const user = giftCode.user;
  _slicedToArray = undefined;
  const tmp = closure_10();
  dependencyMap = tmp;
  const items = [SKUStore];
  const stateFromStores = giftCode(504).useStateFromStores(items, () => SKUStore.get(giftCode.skuId));
  let obj = giftCode(504);
  const getOrFetchSubscriptionPlan = giftCode(10478).useGetOrFetchSubscriptionPlan(giftCode.subscriptionPlanId);
  const obj2 = giftCode(10478);
  const getOrFetchApplication = giftCode(6847).useGetOrFetchApplication(giftCode.applicationId);
  const obj3 = giftCode(6847);
  const obj4 = giftCode(10482);
  let skuId = null;
  if (obj5.isCollectiblesGiftCode(giftCode)) {
    skuId = giftCode.skuId;
  }
  const product = obj4.useFetchCollectiblesProduct(skuId, true).product;
  let first;
  if (product != null) {
    first = product.items[0];
  }
  let type;
  if (product != null) {
    type = product.type;
  }
  obj5 = giftCode(7264);
  let tmp10 = product;
  if (product == null) {
    const obj6 = { items: [] };
    tmp10 = obj6;
  }
  const shopProductItems = giftCode(8271).useShopProductItems(tmp10);
  ({ firstAvatarDecoration, firstProfileEffect, firstNameplate } = shopProductItems);
  const tmp2Result = giftCode(8271);
  let tmp12 = product;
  if (product == null) {
    const obj7 = { skuId: "", type: tmp2(1992).CollectiblesItemType.BUNDLE, items: [] };
    tmp12 = obj7;
  }
  const handleUseNow1 = giftCode(11181).useHandleUseNow({ product: tmp12 });
  const isApplying = handleUseNow1.isApplying;
  ({ handleUseNow, canUseNow } = handleUseNow1);
  const tmp2Result6 = giftCode(11181);
  [tmp15, c3] = noop.useState();
  const callback = noop.useCallback((nativeEvent) => {
    ({ width: giftCode, height: user } = nativeEvent.nativeEvent.layout);
    _undefined((arg0) => {
      let size = arg0;
      if (null != arg0) {
        return size;
      }
      const size1 = { width, height };
      size = size1;
    });
  }, []);
  const obj8 = { bottom: true, style: tmp.container, children: null };
  const obj9 = { contentContainerStyle: tmp.body, alwaysBounceVertical: false, children: null };
  if (null == first) {
    if (null != getOrFetchApplication) {
      if (tmp2Result7.isGameItemSKU(stateFromStores)) {
        const obj10 = { style: tmp.gameItemCard, children: null };
        const obj11 = { sku: stateFromStores };
        obj10.children = closure_8(user(8998), obj11);
        let tmp24Result = closure_8(closure_5, obj10);
      } else {
        const obj12 = { game: getOrFetchApplication, size: tmp2(6851).GameIconSizes.LARGE, skuId: giftCode.skuId };
        tmp24Result = closure_8(user(6851), obj12);
        const tmp26 = user(6851);
      }
      tmp2Result7 = tmp2(6917);
    }
  }
  if (type === giftCode(1992).CollectiblesItemType.BUNDLE) {
    if (null != product) {
      const obj13 = { style: tmp.bundleContainer, children: null };
      const obj14 = { style: tmp.bundlePreview, onLayout: callback, children: null };
      let tmp20Result = null != tmp15;
      if (tmp20Result) {
        const obj15 = { deco: firstAvatarDecoration, pfx: firstProfileEffect, nameplate: firstNameplate, previewAssets: product.previewAssets, disableStaticBackground: true, size: "large", targetSize: tmp15 };
        tmp20Result = closure_8(user(8970), obj15);
      }
      obj14.children = tmp20Result;
      obj13.children = closure_8(closure_5, obj14);
      let tmp20Result2 = closure_8(closure_5, obj13);
    }
    const items1 = [tmp20Result2, , ];
    if (null == stateFromStores) {
      const obj16 = { variant: "heading-xl/bold", style: tmp.header, accessibilityRole: "header", children: null };
      const intl4 = tmp2(1126).intl;
      obj16.children = intl4.string(tmp2(1126).t["+BNMcF"]);
      let tmp31 = closure_8(tmp2(5086).Text, obj16);
    } else {
      if (tmp2Result8.isGameItemSKU(stateFromStores)) {
        const obj17 = { variant: "heading-xl/bold", style: tmp.header, accessibilityRole: "header", children: null };
        const intl3 = tmp2(1126).intl;
        obj17.children = intl3.string(tmp2(1126).t["5glWta"]);
        tmp31 = closure_8(tmp2(5086).Text, obj17);
      } else {
        if (giftCode.isSubscription) {
          if (null != getOrFetchSubscriptionPlan) {
            const obj18 = { variant: "heading-xl/bold", style: tmp.header, accessibilityRole: "header", children: null };
            const intl2 = tmp2(1126).intl;
            const obj19 = { skuName: stateFromStores.name };
            obj18.children = intl2.format(tmp2(1126).t["1C2BG/"], obj19);
            tmp31 = closure_8(tmp2(5086).Text, obj18);
          }
        }
        if (null != first) {
          const obj20 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.header, accessibilityRole: "header", children: null };
          const intl = tmp2(1126).intl;
          obj20.children = intl.string(tmp2(1126).t.IMffmm);
          tmp31 = closure_8(tmp2(5086).Text, obj20);
        }
      }
      tmp2Result8 = tmp2(6917);
    }
    items1[1] = tmp31;
    if (tmp2Result9.isGameItemSKU(stateFromStores)) {
      if (null != getOrFetchApplication) {
        const obj21 = { variant: "text-md/medium", style: tmp.message, children: null };
        const intl7 = tmp2(1126).intl;
        let str2;
        if (stateFromStores != null) {
          str2 = stateFromStores.name;
        }
        if (str2 == null) {
          str2 = "";
        }
        const obj22 = { skuName: str2, applicationName: getOrFetchApplication.name };
        obj21.children = intl7.formatToPlainString(tmp2(1126).t.W2znvX, obj22);
        let tmp36Result = closure_8(tmp2(5086).Text, obj21);
        let tmp36 = closure_8;
      }
      items1[2] = tmp36Result;
      obj9.children = items1;
      const items2 = [closure_9(closure_6, obj9), ];
      const obj23 = { style: tmp.footer, children: null };
      if (null != first) {
        if (canUseNow) {
          const obj24 = { text: null, size: "md", loading: null, disabled: null, onPress: null };
          const intl9 = tmp2(1126).intl;
          obj24.text = intl9.string(tmp2(1126).t.MAS7uK);
          obj24.loading = isApplying;
          obj24.disabled = isApplying;
          obj24.onPress = handleUseNow;
          let obj25 = obj24;
        }
        obj23.children = tmp36(tmp44, obj25);
        items2[1] = tmp36(closure_5, obj23);
        obj8.children = items2;
        return closure_9(tmp2(6803).SafeAreaPaddingView, obj8);
      }
      obj25 = { text: null, size: "md", onPress: null };
      const intl8 = tmp2(1126).intl;
      obj25.text = intl8.string(tmp2(1126).t["NX+WJN"]);
      obj25.onPress = user(5940).pop;
    }
    if (giftCode.isSubscription) {
      if (null != getOrFetchSubscriptionPlan) {
        const obj26 = { variant: "text-md/medium", style: tmp.message, children: tmp2(5629).getSubscriptionGiftSuccessText(getOrFetchSubscriptionPlan) };
        tmp36Result = closure_8(tmp2(5086).Text, obj26);
        tmp36 = closure_8;
        const tmp2Result10 = tmp2(5629);
      }
    }
    tmp36 = closure_8;
    const obj27 = { variant: "text-md/medium", style: tmp.message, children: null };
    if (null != first) {
      let name;
      if (stateFromStores != null) {
        name = stateFromStores.name;
      }
      if (null != name) {
        const intl6 = tmp2(1126).intl;
        const obj28 = { itemName: stateFromStores.name };
        let formatToPlainStringResult = intl6.formatToPlainString(tmp2(1126).t["4kp0AB"], obj28);
      }
      obj27.children = formatToPlainStringResult;
      tmp36Result = tmp36(tmp37, obj27);
    }
    const intl5 = tmp2(1126).intl;
    formatToPlainStringResult = intl5.string(tmp2(1126).t["5ayf7w"]);
    tmp2Result9 = tmp2(6917);
  }
  const tmp14 = _slicedToArray(noop.useState(), 2);
  const match = giftCode(5741).match(first);
  const str = giftCode(5741);
  const obj29 = { type: giftCode(1992).CollectiblesItemType.AVATAR_DECORATION };
  const withResult = match.with({ type: giftCode(1992).CollectiblesItemType.AVATAR_DECORATION }, (avatarDecoration) => {
    let avatarSource;
    if (user != null) {
      avatarSource = user.getAvatarSource(null, true, native.AVATAR_SIZE_MAP[native.AvatarSizes.GIFT_SUCCESS]);
    }
    return closure_2_8(native.Avatar, { source: avatarSource, avatarDecoration, size: native.AvatarSizes.GIFT_SUCCESS, animate: true });
  });
  const obj30 = { type: giftCode(1992).CollectiblesItemType.PROFILE_EFFECT };
  const withResult1 = withResult.with({ type: giftCode(1992).CollectiblesItemType.PROFILE_EFFECT }, (profileEffect) => closure_2_8(ProfileEffectUserPreviewDefault, { user, profileEffect }));
  const obj31 = { type: giftCode(1992).CollectiblesItemType.PROFILE_FRAME };
  const withResult2 = withResult1.with({ type: giftCode(1992).CollectiblesItemType.PROFILE_FRAME }, (profileFrame) => closure_2_8(ProfileFrameUserPreviewDefault, { user, profileFrame }));
  const obj32 = { type: giftCode(1992).CollectiblesItemType.NAMEPLATE };
  tmp20Result2 = withResult2.with({ type: giftCode(1992).CollectiblesItemType.NAMEPLATE }, (nameplate) => {
    const obj = { style: nameplateContainer.nameplateContainer, children: closure_2_8(NameplatePreview.NameplatePreview, { user, nameplate }) };
    return closure_2_8(hasOwnProperty, obj);
  }).otherwise(() => closure_2_8(GiftBoxAnimationDefault, { giftStyle: giftCode.giftStyle }));
  const withResult3 = withResult2.with({ type: giftCode(1992).CollectiblesItemType.NAMEPLATE }, (nameplate) => {
    const obj = { style: nameplateContainer.nameplateContainer, children: closure_2_8(NameplatePreview.NameplatePreview, { user, nameplate }) };
    return closure_2_8(hasOwnProperty, obj);
  });
});