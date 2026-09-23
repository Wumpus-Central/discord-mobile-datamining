// === Module 13583: GiftCodeEmbed ===

// Module 13583 (GiftCodeEmbed)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import _modDef4414 from "module_4414" /* 4414 */;
import shared from "shared" /* 4678 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 8280 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8289 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8290 */;
import _modDef11373 from "module_11373" /* 11373 */;
import _modDef12143 from "module_12143" /* 12143 */;
import _modDef12144 from "module_12144" /* 12144 */;
import _modDef13584 from "module_13584" /* 13584 */;
import _modDef13585 from "module_13585" /* 13585 */;
import _modDef13586 from "module_13586" /* 13586 */;
import _modDef13587 from "module_13587" /* 13587 */;
import _modDef13588 from "module_13588" /* 13588 */;
import _modDef13589 from "module_13589" /* 13589 */;
import _modDef13590 from "module_13590" /* 13590 */;
import _modDef13591 from "module_13591" /* 13591 */;
import _modDef13592 from "module_13592" /* 13592 */;
import _modDef13593 from "module_13593" /* 13593 */;
import _modDef13594 from "module_13594" /* 13594 */;
import _modDef13595 from "module_13595" /* 13595 */;
import _modDef13596 from "module_13596" /* 13596 */;
import _modDef13597 from "module_13597" /* 13597 */;
import _modDef13598 from "module_13598" /* 13598 */;
import _modDef13599 from "module_13599" /* 13599 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GiftCodeStore from "GiftCodeStore" /* 11772 */;
import UserStore from "UserStore" /* 1372 */;
import SKUStore from "SKUStore" /* 5813 */;
import Constants from "Constants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function getGiftStyleUrl(giftStyle) {
  if (constants3.BOX === giftStyle) {
    return _modDef13584;
  } else if (constants3.CUP === giftStyle) {
    return _modDef13585;
  } else if (constants3.SNOWGLOBE === giftStyle) {
    return _modDef13586;
  } else if (constants3.STANDARD_BOX === giftStyle) {
    return _modDef13587;
  } else if (constants3.COFFEE === giftStyle) {
    return _modDef13588;
  } else if (constants3.CAKE === giftStyle) {
    return _modDef13589;
  } else if (constants3.CHEST === giftStyle) {
    return _modDef13590;
  } else if (constants3.SEASONAL_STANDARD_BOX === giftStyle) {
    return _modDef13591;
  } else if (constants3.SEASONAL_CAKE === giftStyle) {
    return _modDef13592;
  } else if (constants3.SEASONAL_CHEST === giftStyle) {
    return _modDef13593;
  } else if (constants3.SEASONAL_COFFEE === giftStyle) {
    return _modDef13594;
  } else if (constants3.NITROWEEN_STANDARD === giftStyle) {
    const obj = { uri: _modDef11373 };
    return obj;
  } else {
    return _modDef13587;
  }
}
({ Image: c3, processColor: closure_4 } = get_ActivityIndicator);
({ AbortCodes: closure_9, MessageTypes: c10 } = Constants);
({ PremiumGiftStyles: closure_11, PremiumSubscriptionSKUs: closure_12 } = PremiumConstants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/GiftCodeEmbed.tsx");

export const createGiftCodeEmbed = function createGiftCodeEmbed(message, forcedTheme) {
  _require = message;
  importDefault = forcedTheme;
  if (null != message.author) {
    if (0 !== message.giftCodes.length) {
      const colors = getEmbedThemeColorsDefault(forcedTheme).colors;
      ({ headerColor: dependencyMap, titleColor: closure_3, subtitleColor: closure_4, bodyTextColor: AuthenticationStore, backgroundColor, resolvingGradientStart: GiftCodeStore, resolvingGradientEnd: UserStore, acceptLabelDisabledBackgroundColor: SKUStore, acceptLabelDisabledColor: closure_9, thumbnailBackgroundColor: closure_10, acceptLabelGreenColor: closure_11, acceptBlurpleLabelBackgroundColor: closure_12 } = colors);
      const obj = { borderColor: colors.borderColor, backgroundColor: null, thumbnailCornerRadius: 3 };
      let tmp4 = backgroundColor;
      if (obj2.isThemeDark(forcedTheme)) {
        const embedBackground = require("client_themes/ClientThemesUtils").getEmbedBackground();
        let tmp5Result = subtitleColor(embedBackground);
        if (tmp5Result == null) {
          tmp5Result = backgroundColor;
        }
        tmp4 = tmp5Result;
        const tmp3Result = require("client_themes/ClientThemesUtils");
      }
      obj.backgroundColor = tmp4;
      const giftCodes = message.giftCodes;
      return giftCodes.map((giftCode) => {
        value = GiftCodeStore.get(giftCode);
        if (null != giftCode) {
          if (GiftCodeStore.getIsResolved(giftCode)) {
            const id = AuthenticationStore.getId();
            if (null != value) {
              let tmp13 = id === value.userId;
            } else {
              tmp13 = id === message.author.id;
            }
            if (null == value) {
              const error = GiftCodeStore.getError(giftCode);
              let code;
              if (error != null) {
                code = error.code;
              }
              if (obj25.isThemeDark(closure_1)) {
                let tmp119Result = _modDef12143;
                let tmp121 = importDefault;
              } else {
                tmp119Result = _modDef12144;
                tmp121 = importDefault;
              }
              const obj2 = { thumbnailUrl: React3.resolveAssetSource(tmp119Result).uri, headerText: null, titleText: null, titleColor: null, headerColor: null, thumbnailBackgroundColor: null, subtitle: null, subtitleColor: null };
              const intl13 = util.intl;
              const string3 = intl13.string;
              const t = util.t;
              if (tmp13) {
                let str8 = string3(t.kzFKb6);
              } else {
                str8 = string3(t.jwCLTM);
              }
              obj2.headerText = str8.toUpperCase();
              const intl14 = util.intl;
              obj2.titleText = intl14.string(util.t.SdKbX2);
              let tmp123 = React4(tmp121(576).unsafe_rawColors.RED_400);
              if (tmp123 == null) {
                tmp123 = titleColor;
              }
              obj2.titleColor = tmp123;
              obj2.headerColor = headerColor;
              obj2.thumbnailBackgroundColor = thumbnailBackgroundColor;
              if (code === constants.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED) {
                const intl16 = util.intl;
                let stringResult = intl16.string(util.t.QXgO5w);
              } else {
                const intl15 = util.intl;
                const string4 = intl15.string;
                const t2 = util.t;
                if (tmp13) {
                  stringResult = string4(t2.pBDXpb);
                } else {
                  stringResult = string4(t2.TPamyd);
                }
              }
              obj2.subtitle = stringResult;
              obj2.subtitleColor = subtitleColor;
              const merged = Object.assign(GiftCodeStore);
              return obj2;
            } else {
              value2 = SKUStore.get(value.skuId);
              const isAccepting = GiftCodeStore.getIsAccepting(giftCode);
              const currentUser = UserStore.getCurrentUser();
              let verified;
              if (currentUser != null) {
                verified = currentUser.verified;
              }
              let tmp15 = verified;
              if (tmp15) {
                tmp15 = !(value.redeemed || value.isClaimed);
                const tmp16 = value.redeemed || value.isClaimed;
              }
              let tmp17 = tmp15;
              if (tmp15) {
                tmp17 = null != value.expiresAt;
              }
              if (tmp17) {
                const intl2 = util.intl;
                const obj3 = { hours: null };
                const expiresAt = value.expiresAt;
                obj3.hours = expiresAt.diff(_modDef4414(), "h");
                const formatToPlainStringResult = intl2.formatToPlainString(util.t.nZBvUR, obj3);
              }
              if (value.redeemed) {
                const intl5 = util.intl;
                let stringResult1 = intl5.string(util.t["/cg57l"]);
              } else if (value.isClaimed) {
                const intl4 = util.intl;
                stringResult1 = intl4.string(util.t.ARWFQX);
              } else {
                let verified1;
                if (currentUser != null) {
                  verified1 = currentUser.verified;
                }
                if (!verified1) {
                  const intl3 = util.intl;
                  stringResult1 = intl3.string(util.t["j+KPkX"]);
                }
              }
              let tmp30 = null != value.giftStyle;
              if (!tmp30) {
                tmp30 = message.type === constants2.CUSTOM_GIFT;
              }
              if (tmp15) {
                const intl9 = util.intl;
                const string = intl9.string;
                let TiZFqX = util.t;
                if (tmp30) {
                  TiZFqX = TiZFqX.TiZFqX;
                  let stringResult2 = string(TiZFqX);
                } else {
                  stringResult2 = string(TiZFqX.bUvv1f);
                }
              } else {
                if (isAccepting) {
                  const intl8 = util.intl;
                  let stringResult3 = intl8.string(util.t.rTeOBK);
                  let processColorOrThrowResult = closure_1_8;
                  let processColorOrThrowResult1 = closure_1_9;
                } else {
                  if (!value.redeemed) {
                    if (!value.isClaimed) {
                      let verified2;
                      if (currentUser != null) {
                        verified2 = currentUser.verified;
                      }
                      if (!verified2) {
                        const intl6 = util.intl;
                        stringResult3 = intl6.string(util.t.v740sh);
                        processColorOrThrowResult = RowGeneratorStyleSheet.processColorOrThrow(nativeDefault.unsafe_rawColors.BRAND_500);
                        processColorOrThrowResult1 = RowGeneratorStyleSheet.processColorOrThrow(nativeDefault.unsafe_rawColors.WHITE);
                      }
                    }
                  }
                  const intl7 = util.intl;
                  stringResult3 = intl7.string(util.t.BTihou);
                  processColorOrThrowResult = closure_1_8;
                  processColorOrThrowResult1 = closure_1_9;
                }
                const skuId = value.skuId;
                if (TIER_0.TIER_0 === skuId) {
                  if (tmp30) {
                    let tmp82 = getGiftStyleUrl(value.giftStyle);
                  } else {
                    tmp82 = _modDef13595;
                  }
                  const assetUriForEmbed = renderer_EmbedUtils.getAssetUriForEmbed(tmp82);
                  const tmp79Result = renderer_EmbedUtils;
                  if (tmp79Result2.isThemeDark(closure_1)) {
                    let tmp86Result = _modDef13596;
                  } else {
                    tmp86Result = _modDef13597;
                  }
                  const assetUriForEmbed1 = tmp79Result.getAssetUriForEmbed(tmp86Result);
                  tmp79Result2 = shared;
                } else {
                  if (TIER_0.TIER_1 === skuId) {
                    if (tmp30) {
                      let tmp72 = getGiftStyleUrl(value.giftStyle);
                    } else {
                      tmp72 = _modDef13598;
                    }
                    const assetUriForEmbed2 = renderer_EmbedUtils.getAssetUriForEmbed(tmp72);
                    const tmp69Result = renderer_EmbedUtils;
                    if (tmp69Result2.isThemeDark(closure_1)) {
                      let tmp76Result = _modDef13596;
                      let tmp78 = importDefault;
                    } else {
                      tmp76Result = _modDef13597;
                      tmp78 = importDefault;
                    }
                    let assetUriForEmbed3 = tmp69Result.getAssetUriForEmbed(tmp76Result);
                    let tmp52 = tmp78;
                    let tmp55 = require;
                    let assetUriForEmbed5 = assetUriForEmbed2;
                    tmp69Result2 = shared;
                  } else {
                    if (TIER_0.TIER_2 !== skuId) {
                      if (TIER_0.LEGACY !== skuId) {
                        const obj28 = renderer_EmbedUtils;
                        if (obj29.isThemeDark(closure_1)) {
                          let tmp137Result = _modDef13596;
                          tmp52 = importDefault;
                        } else {
                          tmp137Result = _modDef13597;
                          tmp52 = importDefault;
                        }
                        const assetUriForEmbed4 = obj28.getAssetUriForEmbed(tmp137Result);
                        obj29 = shared;
                        tmp55 = require;
                        assetUriForEmbed3 = assetUriForEmbed4;
                        assetUriForEmbed5 = renderer_EmbedUtils.getAssetUriForEmbed(getGiftStyleUrl(value.giftStyle));
                        const tmp135Result = renderer_EmbedUtils;
                      }
                    }
                    if (tmp30) {
                      let tmp61 = getGiftStyleUrl(value.giftStyle);
                    } else {
                      tmp61 = _modDef13599;
                    }
                    const assetUriForEmbed6 = renderer_EmbedUtils.getAssetUriForEmbed(tmp61);
                    const tmp58Result = renderer_EmbedUtils;
                    if (tmp58Result2.isThemeDark(closure_1)) {
                      let tmp65Result = _modDef13596;
                      let tmp67 = importDefault;
                    } else {
                      tmp65Result = _modDef13597;
                      tmp67 = importDefault;
                    }
                    assetUriForEmbed3 = tmp58Result.getAssetUriForEmbed(tmp65Result);
                    tmp52 = tmp67;
                    tmp55 = require;
                    assetUriForEmbed5 = assetUriForEmbed6;
                    tmp58Result2 = shared;
                  }
                  let tmp95 = assetUriForEmbed5;
                  if (tmp55Result.isGameItemSKU(value2)) {
                    const str3 = tmp55(7557).getGameItemThumbnailUrl(value2);
                    let str1;
                    if (str3 != null) {
                      str1 = str3.toString();
                    }
                    if (str1 == null) {
                      str1 = assetUriForEmbed5;
                    }
                    tmp95 = str1;
                    const tmp55Result2 = tmp55(7557);
                  }
                  const obj6 = {};
                  const merged1 = Object.assign(GiftCodeStore);
                  if (message.type === constants2.CUSTOM_GIFT) {
                    if (!tmp13) {
                      const intl10 = tmp55(1115).intl;
                      let str4 = tmp52(4671).getName(currentUser);
                      if (str4 == null) {
                        str4 = "";
                      }
                      const obj8 = { recipientDisplayName: str4 };
                      const tmp52Result = tmp52(4671);
                      obj6.headerText = intl10.formatToPlainString(tmp55(1115).t.t1SOId, obj8).toUpperCase();
                      let formatToPlainStringResult1;
                      if (null != value) {
                        if (message.type !== constants2.CUSTOM_GIFT) {
                          let name;
                          if (null != value2) {
                            name = value2.name;
                          }
                          formatToPlainStringResult1 = name;
                        } else {
                          const user = UserStore.getUser(value.userId);
                          const intl12 = tmp55(1115).intl;
                          let str7 = tmp52(4671).getName(user);
                          if (str7 == null) {
                            str7 = "";
                          }
                          const obj9 = { sender: str7 };
                          formatToPlainStringResult1 = intl12.formatToPlainString(tmp55(1115).t.DDO4Wz, obj9);
                          const tmp52Result4 = tmp52(4671);
                        }
                      }
                      obj6.titleText = formatToPlainStringResult1;
                      obj6.subtitle = formatToPlainStringResult;
                      obj6.bodyText = stringResult1;
                      obj6.headerColor = headerColor;
                      obj6.titleColor = titleColor;
                      obj6.subtitleColor = subtitleColor;
                      obj6.bodyTextColor = bodyTextColor;
                      obj6.acceptLabelBackgroundColor = processColorOrThrowResult;
                      obj6.acceptLabelColor = processColorOrThrowResult1;
                      obj6.acceptLabelText = stringResult3;
                      obj6.acceptLabelBorderColor = undefined;
                      obj6.canBeAccepted = tmp15;
                      obj6.embedCanBeTapped = true;
                      obj6.giftCode = giftCode;
                      let tmp110;
                      if (null != tmp95) {
                        tmp110 = tmp95;
                      }
                      obj6.thumbnailUrl = tmp110;
                      let tmp111;
                      if (message.type !== constants2.CUSTOM_GIFT) {
                        if (null != assetUriForEmbed3) {
                          tmp111 = assetUriForEmbed3;
                        }
                      }
                      obj6.splashUrl = tmp111;
                      const str5 = intl10.formatToPlainString(tmp55(1115).t.t1SOId, obj8);
                      obj6.splashHasRadialGradient = !tmp52(4481).isPremiumSku(value.skuId);
                      const tmp52Result5 = tmp52(4481);
                      let num5 = 0.97;
                      if (tmp52Result6.isPremiumSku(value.skuId)) {
                        num5 = 0.8;
                      }
                      obj6.splashOpacity = num5;
                      return obj6;
                    }
                  }
                  const intl11 = tmp55(1115).intl;
                  const string2 = intl11.string;
                  let toUpperCase = tmp55(1115).t;
                  if (tmp13) {
                    let str6 = string2(toUpperCase.QLEMld);
                  } else {
                    str6 = string2(toUpperCase.W4DBcy);
                  }
                  toUpperCase = str6.toUpperCase;
                  const formatted = toUpperCase();
                  tmp55Result = tmp55(7557);
                }
              }
            }
          } else {
            const obj11 = { headerText: null, headerColor: null, resolvingGradientStart: null, resolvingGradientEnd: null };
            const intl = util.intl;
            obj11.headerText = intl.string(util.t["E+va0m"]).toUpperCase();
            obj11.headerColor = headerColor;
            obj11.resolvingGradientStart = resolvingGradientStart;
            obj11.resolvingGradientEnd = resolvingGradientEnd;
            const merged2 = Object.assign(GiftCodeStore);
            return obj11;
          }
        }
      });
    }
  }
};