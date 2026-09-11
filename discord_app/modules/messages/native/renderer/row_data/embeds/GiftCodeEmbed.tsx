// === Module 13286: GiftCodeEmbed ===

// Module 13286 (GiftCodeEmbed)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import _modDef4198 from "module_4198" /* 4198 */;
import shared from "shared" /* 4458 */;
import RowGeneratorStyleSheet from "RowGeneratorStyleSheet" /* 8010 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8019 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8020 */;
import _modDef11117 from "module_11117" /* 11117 */;
import _modDef11902 from "module_11902" /* 11902 */;
import _modDef11903 from "module_11903" /* 11903 */;
import _modDef13287 from "module_13287" /* 13287 */;
import _modDef13288 from "module_13288" /* 13288 */;
import _modDef13289 from "module_13289" /* 13289 */;
import _modDef13290 from "module_13290" /* 13290 */;
import _modDef13291 from "module_13291" /* 13291 */;
import _modDef13292 from "module_13292" /* 13292 */;
import _modDef13293 from "module_13293" /* 13293 */;
import _modDef13294 from "module_13294" /* 13294 */;
import _modDef13295 from "module_13295" /* 13295 */;
import _modDef13296 from "module_13296" /* 13296 */;
import _modDef13297 from "module_13297" /* 13297 */;
import _modDef13298 from "module_13298" /* 13298 */;
import _modDef13299 from "module_13299" /* 13299 */;
import _modDef13300 from "module_13300" /* 13300 */;
import _modDef13301 from "module_13301" /* 13301 */;
import _modDef13302 from "module_13302" /* 13302 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GiftCodeStore from "GiftCodeStore" /* 11523 */;
import UserStore from "UserStore" /* 1371 */;
import SKUStore from "SKUStore" /* 5561 */;
import Constants from "Constants" /* 1074 */;
import PremiumConstants from "PremiumConstants" /* 1373 */;
import size from "module_2" /* 2 */;

function getGiftStyleUrl(giftStyle) {
  if (constants3.BOX === giftStyle) {
    return _modDef13287;
  } else if (constants3.CUP === giftStyle) {
    return _modDef13288;
  } else if (constants3.SNOWGLOBE === giftStyle) {
    return _modDef13289;
  } else if (constants3.STANDARD_BOX === giftStyle) {
    return _modDef13290;
  } else if (constants3.COFFEE === giftStyle) {
    return _modDef13291;
  } else if (constants3.CAKE === giftStyle) {
    return _modDef13292;
  } else if (constants3.CHEST === giftStyle) {
    return _modDef13293;
  } else if (constants3.SEASONAL_STANDARD_BOX === giftStyle) {
    return _modDef13294;
  } else if (constants3.SEASONAL_CAKE === giftStyle) {
    return _modDef13295;
  } else if (constants3.SEASONAL_CHEST === giftStyle) {
    return _modDef13296;
  } else if (constants3.SEASONAL_COFFEE === giftStyle) {
    return _modDef13297;
  } else if (constants3.NITROWEEN_STANDARD === giftStyle) {
    const obj = { uri: _modDef11117 };
    return obj;
  } else {
    return _modDef13290;
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
      let obj = { borderColor: colors.borderColor, backgroundColor: null, thumbnailCornerRadius: 3 };
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
        obj = GiftCodeStore;
        value = GiftCodeStore.get(giftCode);
        if (null != giftCode) {
          if (obj.getIsResolved(giftCode)) {
            const id = AuthenticationStore.getId();
            if (null != value) {
              let tmp13 = id === value.userId;
            } else {
              tmp13 = id === message.author.id;
            }
            if (null == value) {
              const error = obj.getError(giftCode);
              let code;
              if (error != null) {
                code = error.code;
              }
              if (obj25.isThemeDark(closure_1)) {
                let tmp119Result = _modDef11902;
                let tmp121 = importDefault;
              } else {
                tmp119Result = _modDef11903;
                tmp121 = importDefault;
              }
              obj = { thumbnailUrl: React3.resolveAssetSource(tmp119Result).uri, headerText: null, titleText: null, titleColor: null, headerColor: null, thumbnailBackgroundColor: null, subtitle: null, subtitleColor: null };
              const intl13 = util.intl;
              const string3 = intl13.string;
              const t = util.t;
              if (tmp13) {
                let str8 = string3(t.kzFKb6);
              } else {
                str8 = string3(t.jwCLTM);
              }
              obj.headerText = str8.toUpperCase();
              const intl14 = util.intl;
              obj.titleText = intl14.string(util.t.SdKbX2);
              let tmp123 = React4(tmp121(576).unsafe_rawColors.RED_400);
              if (tmp123 == null) {
                tmp123 = titleColor;
              }
              obj.titleColor = tmp123;
              obj.headerColor = headerColor;
              obj.thumbnailBackgroundColor = thumbnailBackgroundColor;
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
              obj.subtitle = stringResult;
              obj.subtitleColor = subtitleColor;
              const merged = Object.assign(obj);
              return obj;
            } else {
              value = SKUStore.get(value.skuId);
              const isAccepting = obj.getIsAccepting(giftCode);
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
                obj = { hours: null };
                const expiresAt = value.expiresAt;
                obj.hours = expiresAt.diff(_modDef4198(), "h");
                const formatToPlainStringResult = intl2.formatToPlainString(util.t.nZBvUR, obj);
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
                        let obj3 = RowGeneratorStyleSheet;
                        processColorOrThrowResult = obj3.processColorOrThrow(nativeDefault.unsafe_rawColors.BRAND_500);
                        let obj4 = RowGeneratorStyleSheet;
                        processColorOrThrowResult1 = obj4.processColorOrThrow(nativeDefault.unsafe_rawColors.WHITE);
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
                    tmp82 = _modDef13298;
                  }
                  const assetUriForEmbed = renderer_EmbedUtils.getAssetUriForEmbed(tmp82);
                  const tmp79Result = shared;
                  if (tmp79Result.isThemeDark(closure_1)) {
                    let tmp86Result = _modDef13299;
                  } else {
                    tmp86Result = _modDef13300;
                  }
                  const assetUriForEmbed1 = tmp79Result.getAssetUriForEmbed(tmp86Result);
                } else {
                  if (TIER_0.TIER_1 === skuId) {
                    if (tmp30) {
                      let tmp72 = getGiftStyleUrl(value.giftStyle);
                    } else {
                      tmp72 = _modDef13301;
                    }
                    const assetUriForEmbed2 = renderer_EmbedUtils.getAssetUriForEmbed(tmp72);
                    const tmp69Result = shared;
                    if (tmp69Result.isThemeDark(closure_1)) {
                      let tmp76Result = _modDef13299;
                      let tmp78 = importDefault;
                    } else {
                      tmp76Result = _modDef13300;
                      tmp78 = importDefault;
                    }
                    let assetUriForEmbed3 = tmp69Result.getAssetUriForEmbed(tmp76Result);
                    let tmp52 = tmp78;
                    let tmp55 = require;
                    let assetUriForEmbed5 = assetUriForEmbed2;
                  } else {
                    if (TIER_0.TIER_2 !== skuId) {
                      if (TIER_0.LEGACY !== skuId) {
                        const obj28 = renderer_EmbedUtils;
                        if (obj29.isThemeDark(closure_1)) {
                          let tmp137Result = _modDef13299;
                          tmp52 = importDefault;
                        } else {
                          tmp137Result = _modDef13300;
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
                      tmp61 = _modDef13302;
                    }
                    const assetUriForEmbed6 = renderer_EmbedUtils.getAssetUriForEmbed(tmp61);
                    const tmp58Result = shared;
                    if (tmp58Result.isThemeDark(closure_1)) {
                      let tmp65Result = _modDef13299;
                      let tmp67 = importDefault;
                    } else {
                      tmp65Result = _modDef13300;
                      tmp67 = importDefault;
                    }
                    assetUriForEmbed3 = tmp58Result.getAssetUriForEmbed(tmp65Result);
                    tmp52 = tmp67;
                    tmp55 = require;
                    assetUriForEmbed5 = assetUriForEmbed6;
                  }
                  let tmp55Result = tmp55(7299);
                  let tmp95 = assetUriForEmbed5;
                  if (tmp55Result.isGameItemSKU(value)) {
                    tmp55Result = tmp55(7299);
                    const str3 = tmp55Result.getGameItemThumbnailUrl(value);
                    let str;
                    if (str3 != null) {
                      str = str3.toString();
                    }
                    if (str == null) {
                      str = assetUriForEmbed5;
                    }
                    tmp95 = str;
                  }
                  const obj1 = {};
                  const merged1 = Object.assign(obj);
                  if (message.type === constants2.CUSTOM_GIFT) {
                    if (!tmp13) {
                      const intl10 = tmp55(1114).intl;
                      let tmp52Result = tmp52(4451);
                      let str4 = tmp52Result.getName(currentUser);
                      if (str4 == null) {
                        str4 = "";
                      }
                      const obj2 = { recipientDisplayName: str4 };
                      obj1.headerText = intl10.formatToPlainString(tmp55(1114).t.t1SOId, obj2).toUpperCase();
                      let formatToPlainStringResult1;
                      if (null != value) {
                        if (message.type !== constants2.CUSTOM_GIFT) {
                          let name;
                          if (null != value) {
                            name = value.name;
                          }
                          formatToPlainStringResult1 = name;
                        } else {
                          const user = UserStore.getUser(value.userId);
                          const intl12 = tmp55(1114).intl;
                          tmp52Result = tmp52(4451);
                          let str7 = tmp52Result.getName(user);
                          if (str7 == null) {
                            str7 = "";
                          }
                          obj3 = { sender: str7 };
                          formatToPlainStringResult1 = intl12.formatToPlainString(tmp55(1114).t.DDO4Wz, obj3);
                        }
                      }
                      obj1.titleText = formatToPlainStringResult1;
                      obj1.subtitle = formatToPlainStringResult;
                      obj1.bodyText = stringResult1;
                      obj1.headerColor = headerColor;
                      obj1.titleColor = titleColor;
                      obj1.subtitleColor = subtitleColor;
                      obj1.bodyTextColor = bodyTextColor;
                      obj1.acceptLabelBackgroundColor = processColorOrThrowResult;
                      obj1.acceptLabelColor = processColorOrThrowResult1;
                      obj1.acceptLabelText = stringResult3;
                      obj1.acceptLabelBorderColor = undefined;
                      obj1.canBeAccepted = tmp15;
                      obj1.embedCanBeTapped = true;
                      obj1.giftCode = giftCode;
                      let tmp110;
                      if (null != tmp95) {
                        tmp110 = tmp95;
                      }
                      obj1.thumbnailUrl = tmp110;
                      let tmp111;
                      if (message.type !== constants2.CUSTOM_GIFT) {
                        if (null != assetUriForEmbed3) {
                          tmp111 = assetUriForEmbed3;
                        }
                      }
                      obj1.splashUrl = tmp111;
                      const str5 = intl10.formatToPlainString(tmp55(1114).t.t1SOId, obj2);
                      obj1.splashHasRadialGradient = !tmp52(4264).isPremiumSku(value.skuId);
                      const tmp52Result1 = tmp52(4264);
                      let num5 = 0.97;
                      if (tmp52Result2.isPremiumSku(value.skuId)) {
                        num5 = 0.8;
                      }
                      obj1.splashOpacity = num5;
                      return obj1;
                    }
                  }
                  const intl11 = tmp55(1114).intl;
                  const string2 = intl11.string;
                  let toUpperCase = tmp55(1114).t;
                  if (tmp13) {
                    let str6 = string2(toUpperCase.QLEMld);
                  } else {
                    str6 = string2(toUpperCase.W4DBcy);
                  }
                  toUpperCase = str6.toUpperCase;
                  const formatted = toUpperCase();
                }
              }
            }
          } else {
            obj4 = { headerText: null, headerColor: null, resolvingGradientStart: null, resolvingGradientEnd: null };
            const intl = util.intl;
            str = intl.string(util.t["E+va0m"]);
            obj4.headerText = str.toUpperCase();
            obj4.headerColor = headerColor;
            obj4.resolvingGradientStart = resolvingGradientStart;
            obj4.resolvingGradientEnd = resolvingGradientEnd;
            const merged2 = Object.assign(obj);
            return obj4;
          }
        }
      });
    }
  }
};