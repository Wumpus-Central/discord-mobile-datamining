// === Module 14311: GiftCodeEmbed ===

// Module 14311 (GiftCodeEmbed)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef2168 from "module_2168" /* 2168 */;
import _modDef2888 from "module_2888" /* 2888 */;
import shared from "shared" /* 4924 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 8086 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8680 */;
import _modDef11439 from "module_11439" /* 11439 */;
import GiftSubscriptionCodeUtils from "GiftSubscriptionCodeUtils" /* 11786 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 12236 */;
import _modDef12237 from "module_12237" /* 12237 */;
import _modDef12238 from "module_12238" /* 12238 */;
import _modDef13858 from "module_13858" /* 13858 */;
import _modDef13862 from "module_13862" /* 13862 */;
import _modDef13863 from "module_13863" /* 13863 */;
import _modDef13864 from "module_13864" /* 13864 */;
import _modDef13865 from "module_13865" /* 13865 */;
import _modDef13866 from "module_13866" /* 13866 */;
import _modDef13867 from "module_13867" /* 13867 */;
import _modDef13868 from "module_13868" /* 13868 */;
import _modDef13869 from "module_13869" /* 13869 */;
import _modDef13870 from "module_13870" /* 13870 */;
import _modDef13871 from "module_13871" /* 13871 */;
import _modDef14312 from "module_14312" /* 14312 */;
import _modDef14313 from "module_14313" /* 14313 */;
import _modDef14314 from "module_14314" /* 14314 */;
import _modDef14315 from "module_14315" /* 14315 */;
import _modDef14316 from "module_14316" /* 14316 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GiftCodeStore from "GiftCodeStore" /* 11780 */;
import UserStore from "UserStore" /* 1386 */;
import SKUStore from "SKUStore" /* 6234 */;
import Constants from "Constants" /* 1071 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

function getGiftStyleUrl(giftStyle) {
  if (constants3.BOX === giftStyle) {
    return _modDef14312;
  } else if (constants3.CUP === giftStyle) {
    return _modDef14313;
  } else if (constants3.SNOWGLOBE === giftStyle) {
    return _modDef14314;
  } else if (constants3.STANDARD_BOX === giftStyle) {
    return _modDef13862;
  } else if (constants3.COFFEE === giftStyle) {
    return _modDef13865;
  } else if (constants3.CAKE === giftStyle) {
    return _modDef13863;
  } else if (constants3.CHEST === giftStyle) {
    return _modDef13864;
  } else if (constants3.SEASONAL_STANDARD_BOX === giftStyle) {
    return _modDef13866;
  } else if (constants3.SEASONAL_CAKE === giftStyle) {
    return _modDef13867;
  } else if (constants3.SEASONAL_CHEST === giftStyle) {
    return _modDef13868;
  } else if (constants3.SEASONAL_COFFEE === giftStyle) {
    return _modDef13869;
  } else if (constants3.NITROWEEN_STANDARD === giftStyle) {
    const obj = { uri: _modDef11439 };
    return obj;
  } else {
    return _modDef13862;
  }
}
({ Image: c3, processColor: closure_4 } = get_ActivityIndicator);
({ AbortCodes: closure_9, MessageTypes: closure_10 } = Constants);
({ PremiumGiftStyles: closure_11, PremiumSubscriptionSKUs: closure_12 } = PremiumConstants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/GiftCodeEmbed.tsx");

export function createGiftCodeEmbed(message, forcedTheme) {
  _require = message;
  importDefault = forcedTheme;
  if (null != message.author) {
    if (0 !== message.giftCodes.length) {
      colors = getEmbedThemeColorsDefault(forcedTheme).colors;
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
              if (obj27.isThemeDark(closure_1)) {
                let tmp120Result = _modDef12237;
                let tmp122 = importDefault;
              } else {
                tmp120Result = _modDef12238;
                tmp122 = importDefault;
              }
              const obj2 = { thumbnailUrl: React3.resolveAssetSource(tmp120Result).uri, headerText: null, titleText: null, titleColor: null, headerColor: null, thumbnailBackgroundColor: null, subtitle: null, subtitleColor: null };
              const intl14 = util.intl;
              const string3 = intl14.string;
              const t = util.t;
              if (tmp13) {
                let str8 = string3(t.kzFKb6);
              } else {
                str8 = string3(t.jwCLTM);
              }
              obj2.headerText = str8.toUpperCase();
              const intl15 = util.intl;
              obj2.titleText = intl15.string(util.t.SdKbX2);
              let tmp124 = React4(tmp122(575).unsafe_rawColors.RED_400);
              if (tmp124 == null) {
                tmp124 = titleColor;
              }
              obj2.titleColor = tmp124;
              obj2.headerColor = headerColor;
              obj2.thumbnailBackgroundColor = thumbnailBackgroundColor;
              if (code === constants.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED) {
                const intl17 = util.intl;
                let stringResult = intl17.string(util.t.QXgO5w);
              } else {
                const intl16 = util.intl;
                const string4 = intl16.string;
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
              const value2 = SKUStore.get(value.skuId);
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
              if (tmp15) {
                if (null != value.expiresAt) {
                  const expiresAt = value.expiresAt;
                  const diffResult = expiresAt.diff(_modDef2168(), "h");
                  if (tmp13) {
                    if (obj3.isPendingGiftSubscriptionCode(value)) {
                      const intl3 = util.intl;
                      const obj4 = { hours: diffResult };
                      let formatToPlainStringResult = intl3.formatToPlainString(_modDef2888.P9ZU7b, obj4);
                    }
                    obj3 = GiftSubscriptionCodeUtils;
                  }
                  const intl2 = util.intl;
                  const obj5 = { hours: diffResult };
                  const formatToPlainStringResult1 = intl2.formatToPlainString(util.t.nZBvUR, obj5);
                }
              }
              if (value.redeemed) {
                const intl6 = util.intl;
                formatToPlainStringResult = intl6.string(util.t["/cg57l"]);
              } else if (value.isClaimed) {
                const intl5 = util.intl;
                formatToPlainStringResult = intl5.string(util.t.ARWFQX);
              } else {
                let verified1;
                if (currentUser != null) {
                  verified1 = currentUser.verified;
                }
                if (!verified1) {
                  const intl4 = util.intl;
                  formatToPlainStringResult = intl4.string(util.t["j+KPkX"]);
                }
              }
              let tmp31 = null != value.giftStyle;
              if (!tmp31) {
                tmp31 = message.type === constants2.CUSTOM_GIFT;
              }
              if (tmp15) {
                const intl10 = util.intl;
                const string = intl10.string;
                let TiZFqX = util.t;
                if (tmp31) {
                  TiZFqX = TiZFqX.TiZFqX;
                  let stringResult1 = string(TiZFqX);
                } else {
                  stringResult1 = string(TiZFqX.bUvv1f);
                }
              } else {
                if (isAccepting) {
                  const intl9 = util.intl;
                  let stringResult2 = intl9.string(util.t.rTeOBK);
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
                        const intl7 = util.intl;
                        stringResult2 = intl7.string(util.t.v740sh);
                        processColorOrThrowResult = RowGeneratorStyleSheet.processColorOrThrow(nativeDefault.unsafe_rawColors.BRAND_500);
                        processColorOrThrowResult1 = RowGeneratorStyleSheet.processColorOrThrow(nativeDefault.unsafe_rawColors.WHITE);
                      }
                    }
                  }
                  const intl8 = util.intl;
                  stringResult2 = intl8.string(util.t.BTihou);
                  processColorOrThrowResult = closure_1_8;
                  processColorOrThrowResult1 = closure_1_9;
                }
                const skuId = value.skuId;
                if (TIER_0.TIER_0 === skuId) {
                  if (tmp31) {
                    let tmp83 = getGiftStyleUrl(value.giftStyle);
                  } else {
                    tmp83 = _modDef13870;
                  }
                  const assetUriForEmbed = renderer_EmbedUtils.getAssetUriForEmbed(tmp83);
                  const tmp80Result = renderer_EmbedUtils;
                  if (tmp80Result2.isThemeDark(closure_1)) {
                    let tmp87Result = _modDef14315;
                  } else {
                    tmp87Result = _modDef14316;
                  }
                  const assetUriForEmbed1 = tmp80Result.getAssetUriForEmbed(tmp87Result);
                  tmp80Result2 = shared;
                } else {
                  if (TIER_0.TIER_1 === skuId) {
                    if (tmp31) {
                      let tmp73 = getGiftStyleUrl(value.giftStyle);
                    } else {
                      tmp73 = _modDef13871;
                    }
                    const assetUriForEmbed2 = renderer_EmbedUtils.getAssetUriForEmbed(tmp73);
                    const tmp70Result = renderer_EmbedUtils;
                    if (tmp70Result2.isThemeDark(closure_1)) {
                      let tmp77Result = _modDef14315;
                      let tmp79 = importDefault;
                    } else {
                      tmp77Result = _modDef14316;
                      tmp79 = importDefault;
                    }
                    let assetUriForEmbed3 = tmp70Result.getAssetUriForEmbed(tmp77Result);
                    let tmp53 = tmp79;
                    let tmp56 = require;
                    let assetUriForEmbed5 = assetUriForEmbed2;
                    tmp70Result2 = shared;
                  } else {
                    if (TIER_0.TIER_2 !== skuId) {
                      if (TIER_0.LEGACY !== skuId) {
                        const obj30 = renderer_EmbedUtils;
                        if (obj31.isThemeDark(closure_1)) {
                          let tmp138Result = _modDef14315;
                          tmp53 = importDefault;
                        } else {
                          tmp138Result = _modDef14316;
                          tmp53 = importDefault;
                        }
                        const assetUriForEmbed4 = obj30.getAssetUriForEmbed(tmp138Result);
                        obj31 = shared;
                        tmp56 = require;
                        assetUriForEmbed3 = assetUriForEmbed4;
                        assetUriForEmbed5 = renderer_EmbedUtils.getAssetUriForEmbed(getGiftStyleUrl(value.giftStyle));
                        const tmp136Result = renderer_EmbedUtils;
                      }
                    }
                    if (tmp31) {
                      let tmp62 = getGiftStyleUrl(value.giftStyle);
                    } else {
                      tmp62 = _modDef13858;
                    }
                    const assetUriForEmbed6 = renderer_EmbedUtils.getAssetUriForEmbed(tmp62);
                    const tmp59Result = renderer_EmbedUtils;
                    if (tmp59Result2.isThemeDark(closure_1)) {
                      let tmp66Result = _modDef14315;
                      let tmp68 = importDefault;
                    } else {
                      tmp66Result = _modDef14316;
                      tmp68 = importDefault;
                    }
                    assetUriForEmbed3 = tmp59Result.getAssetUriForEmbed(tmp66Result);
                    tmp53 = tmp68;
                    tmp56 = require;
                    assetUriForEmbed5 = assetUriForEmbed6;
                    tmp59Result2 = shared;
                  }
                  let tmp96 = assetUriForEmbed5;
                  if (tmp56Result.isGameItemSKU(value2)) {
                    const str3 = tmp56(7462).getGameItemThumbnailUrl(value2);
                    let str1;
                    if (str3 != null) {
                      str1 = str3.toString();
                    }
                    if (str1 == null) {
                      str1 = assetUriForEmbed5;
                    }
                    tmp96 = str1;
                    const tmp56Result2 = tmp56(7462);
                  }
                  const obj8 = {};
                  const merged1 = Object.assign(GiftCodeStore);
                  if (message.type === constants2.CUSTOM_GIFT) {
                    if (!tmp13) {
                      const intl11 = tmp56(1112).intl;
                      let str4 = tmp53(4973).getName(currentUser);
                      if (str4 == null) {
                        str4 = "";
                      }
                      const obj10 = { recipientDisplayName: str4 };
                      const tmp53Result = tmp53(4973);
                      obj8.headerText = intl11.formatToPlainString(tmp56(1112).t.t1SOId, obj10).toUpperCase();
                      let formatToPlainStringResult2;
                      if (null != value) {
                        if (message.type !== constants2.CUSTOM_GIFT) {
                          let name;
                          if (null != value2) {
                            name = value2.name;
                          }
                          formatToPlainStringResult2 = name;
                        } else {
                          const user = UserStore.getUser(value.userId);
                          const intl13 = tmp56(1112).intl;
                          let str7 = tmp53(4973).getName(user);
                          if (str7 == null) {
                            str7 = "";
                          }
                          const obj11 = { sender: str7 };
                          formatToPlainStringResult2 = intl13.formatToPlainString(tmp56(1112).t.DDO4Wz, obj11);
                          const tmp53Result4 = tmp53(4973);
                        }
                      }
                      obj8.titleText = formatToPlainStringResult2;
                      obj8.subtitle = formatToPlainStringResult1;
                      obj8.bodyText = formatToPlainStringResult;
                      obj8.headerColor = headerColor;
                      obj8.titleColor = titleColor;
                      obj8.subtitleColor = subtitleColor;
                      obj8.bodyTextColor = bodyTextColor;
                      obj8.acceptLabelBackgroundColor = processColorOrThrowResult;
                      obj8.acceptLabelColor = processColorOrThrowResult1;
                      obj8.acceptLabelText = stringResult2;
                      obj8.acceptLabelBorderColor = undefined;
                      obj8.canBeAccepted = tmp15;
                      obj8.embedCanBeTapped = true;
                      obj8.giftCode = giftCode;
                      let tmp111;
                      if (null != tmp96) {
                        tmp111 = tmp96;
                      }
                      obj8.thumbnailUrl = tmp111;
                      let tmp112;
                      if (message.type !== constants2.CUSTOM_GIFT) {
                        if (null != assetUriForEmbed3) {
                          tmp112 = assetUriForEmbed3;
                        }
                      }
                      obj8.splashUrl = tmp112;
                      const str5 = intl11.formatToPlainString(tmp56(1112).t.t1SOId, obj10);
                      obj8.splashHasRadialGradient = !tmp53(2173).isPremiumSku(value.skuId);
                      const tmp53Result5 = tmp53(2173);
                      let num5 = 0.97;
                      if (tmp53Result6.isPremiumSku(value.skuId)) {
                        num5 = 0.8;
                      }
                      obj8.splashOpacity = num5;
                      return obj8;
                    }
                  }
                  const intl12 = tmp56(1112).intl;
                  const string2 = intl12.string;
                  let toUpperCase = tmp56(1112).t;
                  if (tmp13) {
                    let str6 = string2(toUpperCase.QLEMld);
                  } else {
                    str6 = string2(toUpperCase.W4DBcy);
                  }
                  toUpperCase = str6.toUpperCase;
                  const formatted = toUpperCase();
                  tmp56Result = tmp56(7462);
                }
              }
            }
          } else {
            const obj13 = { headerText: null, headerColor: null, resolvingGradientStart: null, resolvingGradientEnd: null };
            const intl = util.intl;
            obj13.headerText = intl.string(util.t["E+va0m"]).toUpperCase();
            obj13.headerColor = headerColor;
            obj13.resolvingGradientStart = resolvingGradientStart;
            obj13.resolvingGradientEnd = resolvingGradientEnd;
            const merged2 = Object.assign(GiftCodeStore);
            return obj13;
          }
        }
      });
    }
  }
}