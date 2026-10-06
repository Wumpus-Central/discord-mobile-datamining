// === Module 13047: GiftCodeEmbed ===

// Module 13047 (GiftCodeEmbed)
import nativeDefault from "native" /* 587 */;
import intl17 from "intl" /* 1126 */;
import _modDef4467 from "module_4467" /* 4467 */;
import shared from "shared" /* 4735 */;
import react_native from "react-native" /* 7606 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 7615 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7616 */;
import _modDef10771 from "module_10771" /* 10771 */;
import AssetRegistryDefault from "AssetRegistry" /* 11431 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 11432 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13048 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13049 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13050 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13051 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13052 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 13053 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 13054 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 13055 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 13056 */;
import AssetRegistryDefault12 from "AssetRegistry" /* 13057 */;
import AssetRegistryDefault13 from "AssetRegistry" /* 13058 */;
import AssetRegistryDefault14 from "AssetRegistry" /* 13059 */;
import AssetRegistryDefault15 from "AssetRegistry" /* 13060 */;
import AssetRegistryDefault16 from "AssetRegistry" /* 13061 */;
import AssetRegistryDefault17 from "AssetRegistry" /* 13062 */;
import AssetRegistryDefault18 from "AssetRegistry" /* 13063 */;
import react_native2 from "react-native" /* 17 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GiftCodeStore from "GiftCodeStore" /* 11101 */;
import UserStore from "UserStore" /* 1377 */;
import SKUStore from "SKUStore" /* 5702 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, titleColor;

let c10;
let c3;
let c9;
let closure_12;
let closure_4;
let unpackModuleId;
function getGiftStyleUrl(giftStyle) {
  if (unpackModuleId.BOX === giftStyle) {
    return AssetRegistryDefault3;
  } else if (unpackModuleId.CUP === giftStyle) {
    return AssetRegistryDefault4;
  } else if (unpackModuleId.SNOWGLOBE === giftStyle) {
    return AssetRegistryDefault5;
  } else if (unpackModuleId.STANDARD_BOX === giftStyle) {
    return AssetRegistryDefault6;
  } else if (unpackModuleId.COFFEE === giftStyle) {
    return AssetRegistryDefault7;
  } else if (unpackModuleId.CAKE === giftStyle) {
    return AssetRegistryDefault8;
  } else if (unpackModuleId.CHEST === giftStyle) {
    return AssetRegistryDefault9;
  } else if (unpackModuleId.SEASONAL_STANDARD_BOX === giftStyle) {
    return AssetRegistryDefault10;
  } else if (unpackModuleId.SEASONAL_CAKE === giftStyle) {
    return AssetRegistryDefault11;
  } else if (unpackModuleId.SEASONAL_CHEST === giftStyle) {
    return AssetRegistryDefault12;
  } else if (unpackModuleId.SEASONAL_COFFEE === giftStyle) {
    return AssetRegistryDefault13;
  } else if (unpackModuleId.NITROWEEN_STANDARD === giftStyle) {
    const obj = { uri: _modDef10771 };
    return obj;
  } else {
    return AssetRegistryDefault6;
  }
}
({ Image: c3, processColor: closure_4 } = react_native2);
({ AbortCodes: c9, MessageTypes: c10 } = Constants);
({ PremiumGiftStyles: unpackModuleId, PremiumSubscriptionSKUs: closure_12 } = PremiumConstants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/GiftCodeEmbed.tsx");

export const createGiftCodeEmbed = function createGiftCodeEmbed(message, forcedTheme) {
  let backgroundColor;
  let bodyTextColor;
  let closure_10;
  let closure_11;
  let closure_3;
  let closure_4;
  let closure_9;
  let headerColor;
  let obj;
  let resolvingGradientEnd;
  let resolvingGradientStart;
  let thumbnailBackgroundColor;
  _require = message;
  importDefault = forcedTheme;
  if (null != message.author) {
    if (0 !== message.giftCodes.length) {
      const colors = getEmbedThemeColorsDefault(forcedTheme).colors;
      ({ headerColor: dependencyMap, titleColor: closure_3, subtitleColor: closure_4, bodyTextColor: AuthenticationStore, backgroundColor, resolvingGradientStart: GiftCodeStore, resolvingGradientEnd: UserStore, acceptLabelDisabledBackgroundColor: SKUStore, acceptLabelDisabledColor: closure_9, thumbnailBackgroundColor: closure_10, acceptLabelGreenColor: closure_11, acceptBlurpleLabelBackgroundColor: closure_12 } = colors);
      let obj2 = require("shared");
      const tmp3 = _require;
      if (obj2.isThemeDark(forcedTheme)) {
        const tmp3Result = tmp3(4702);
        const embedBackground = tmp3Result.getEmbedBackground();
        let tmp5Result = subtitleColor(embedBackground);
        if (tmp5Result == null) {
          tmp5Result = backgroundColor;
        }
      }
      const giftCodes = message.giftCodes;
      return giftCodes.map((giftCode) => {
        let expiresAt;
        let intl14;
        let str;
        let str8;
        let stringResult;
        let tmp121;
        const value = GiftCodeStore.get(giftCode);
        if (null != giftCode) {
          if (GiftCodeStore.getIsResolved(giftCode)) {
            let tmp13;
            const id = AuthenticationStore.getId();
            if (null != value) {
              tmp13 = id === value.userId;
            } else {
              tmp13 = id === message.author.id;
            }
            if (null == value) {
              let tmp117Result;
              let tmp119;
              const error = GiftCodeStore.getError(giftCode);
              let code;
              if (error != null) {
                code = error.code;
              }
              const INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED = constants.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED;
              titleColor = titleColor.resolveAssetSource;
              const obj19 = shared;
              if (obj19.isThemeDark(forcedTheme)) {
                tmp117Result = AssetRegistryDefault;
                tmp119 = importDefault;
              } else {
                tmp117Result = AssetRegistryDefault2;
                tmp119 = importDefault;
              }
              const obj2 = { thumbnailUrl: titleColor(tmp117Result).uri, headerText: str8.toUpperCase(), titleText: intl14.string(intl17.t.SdKbX2), titleColor: tmp121, headerColor: dependencyMap, thumbnailBackgroundColor, subtitle: stringResult, subtitleColor };
              const intl13 = intl17.intl;
              const string3 = intl13.string;
              const t3 = intl17.t;
              if (tmp13) {
                str8 = string3(t3.kzFKb6);
              } else {
                str8 = string3(t3.jwCLTM);
              }
              intl14 = intl17.intl;
              tmp121 = React3(tmp119(587).unsafe_rawColors.RED_400);
              if (tmp121 == null) {
                tmp121 = titleColor;
              }
              if (code === INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED) {
                const intl16 = intl17.intl;
                stringResult = intl16.string(intl17.t.QXgO5w);
              } else {
                const intl15 = intl17.intl;
                const string4 = intl15.string;
                const t4 = intl17.t;
                if (tmp13) {
                  stringResult = string4(t4.pBDXpb);
                } else {
                  stringResult = string4(t4.TPamyd);
                }
              }
              const merged = Object.assign(GiftCodeStore);
              return obj2;
            } else {
              let formatToPlainStringResult;
              let stringResult1;
              let processColorOrThrowResult;
              let processColorOrThrowResult1;
              let stringResult3;
              let assetUriForEmbed6;
              let tmp49;
              let tmp52;
              let assetUriForEmbed;
              let str6;
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
              }
              const tmp17 = tmp15 && null != value.expiresAt;
              if (tmp17) {
                const intl2 = intl17.intl;
                const formatToPlainString = intl2.formatToPlainString;
                const obj3 = { hours: expiresAt.diff(_modDef4467(), "h") };
                expiresAt = value.expiresAt;
                const nZBvUR = intl17.t.nZBvUR;
                formatToPlainStringResult = formatToPlainString(nZBvUR, obj3);
              }
              if (value.redeemed) {
                const intl5 = intl17.intl;
                stringResult1 = intl5.string(intl17.t["/cg57l"]);
              } else if (value.isClaimed) {
                const intl4 = intl17.intl;
                stringResult1 = intl4.string(intl17.t.ARWFQX);
              } else {
                let verified1;
                if (currentUser != null) {
                  verified1 = currentUser.verified;
                }
                if (!verified1) {
                  const intl3 = intl17.intl;
                  stringResult1 = intl3.string(intl17.t["j+KPkX"]);
                }
              }
              if (tmp15) {
                let stringResult2;
                const intl9 = intl17.intl;
                const string = intl9.string;
                const t = intl17.t;
                if (null != value.giftStyle || message.type === thumbnailBackgroundColor.CUSTOM_GIFT) {
                  stringResult2 = string(t.TiZFqX);
                } else {
                  stringResult2 = string(t.bUvv1f);
                }
                processColorOrThrowResult = closure_12;
                processColorOrThrowResult1 = constants3;
                stringResult3 = stringResult2;
              } else if (isAccepting) {
                const intl8 = intl17.intl;
                stringResult3 = intl8.string(intl17.t.rTeOBK);
                processColorOrThrowResult = SKUStore;
                processColorOrThrowResult1 = closure_9;
              } else {
                if (!value.redeemed) {
                  if (!value.isClaimed) {
                    let verified2;
                    if (currentUser != null) {
                      verified2 = currentUser.verified;
                    }
                    if (!verified2) {
                      const intl6 = intl17.intl;
                      stringResult3 = intl6.string(intl17.t.v740sh);
                      const obj4 = react_native;
                      processColorOrThrowResult = obj4.processColorOrThrow(nativeDefault.unsafe_rawColors.BRAND_500);
                      const obj5 = react_native;
                      processColorOrThrowResult1 = obj5.processColorOrThrow(nativeDefault.unsafe_rawColors.WHITE);
                    }
                  }
                }
                const intl7 = intl17.intl;
                stringResult3 = intl7.string(intl17.t.BTihou);
                processColorOrThrowResult = SKUStore;
                processColorOrThrowResult1 = closure_9;
              }
              const skuId = value.skuId;
              if (closure_12.TIER_0 === skuId) {
                let tmp84;
                let tmp89Result;
                let tmp91;
                const getAssetUriForEmbed5 = renderer_EmbedUtils.getAssetUriForEmbed;
                renderer_EmbedUtils;
                if (null != value.giftStyle || message.type === thumbnailBackgroundColor.CUSTOM_GIFT) {
                  tmp84 = getGiftStyleUrl(value.giftStyle);
                } else {
                  tmp84 = AssetRegistryDefault14;
                }
                const assetUriForEmbed5 = getAssetUriForEmbed5(tmp84);
                const getAssetUriForEmbed6 = renderer_EmbedUtils.getAssetUriForEmbed;
                renderer_EmbedUtils;
                const tmp80Result2 = shared;
                if (tmp80Result2.isThemeDark(forcedTheme)) {
                  tmp89Result = AssetRegistryDefault15;
                  tmp91 = importDefault;
                } else {
                  tmp89Result = AssetRegistryDefault16;
                  tmp91 = importDefault;
                }
                assetUriForEmbed6 = getAssetUriForEmbed6(tmp89Result);
                tmp49 = tmp91;
                tmp52 = require;
                assetUriForEmbed = assetUriForEmbed5;
              } else if (closure_12.TIER_1 === skuId) {
                let tmp72;
                let tmp77Result;
                let tmp79;
                const getAssetUriForEmbed3 = renderer_EmbedUtils.getAssetUriForEmbed;
                renderer_EmbedUtils;
                if (null != value.giftStyle || message.type === thumbnailBackgroundColor.CUSTOM_GIFT) {
                  tmp72 = getGiftStyleUrl(value.giftStyle);
                } else {
                  tmp72 = AssetRegistryDefault17;
                }
                const assetUriForEmbed3 = getAssetUriForEmbed3(tmp72);
                const getAssetUriForEmbed4 = renderer_EmbedUtils.getAssetUriForEmbed;
                renderer_EmbedUtils;
                const tmp68Result2 = shared;
                if (tmp68Result2.isThemeDark(forcedTheme)) {
                  tmp77Result = AssetRegistryDefault15;
                  tmp79 = importDefault;
                } else {
                  tmp77Result = AssetRegistryDefault16;
                  tmp79 = importDefault;
                }
                assetUriForEmbed6 = getAssetUriForEmbed4(tmp77Result);
                tmp49 = tmp79;
                tmp52 = require;
                assetUriForEmbed = assetUriForEmbed3;
              } else {
                let tmp59;
                let tmp64Result;
                let tmp66;
                if (closure_12.TIER_2 !== skuId) {
                  if (closure_12.LEGACY !== skuId) {
                    let tmp136Result;
                    const getAssetUriForEmbed7 = renderer_EmbedUtils.getAssetUriForEmbed;
                    renderer_EmbedUtils;
                    const obj22 = shared;
                    if (obj22.isThemeDark(forcedTheme)) {
                      tmp136Result = AssetRegistryDefault15;
                      tmp49 = importDefault;
                    } else {
                      tmp136Result = AssetRegistryDefault16;
                      tmp49 = importDefault;
                    }
                    const assetUriForEmbed7 = getAssetUriForEmbed7(tmp136Result);
                    tmp52 = require;
                    assetUriForEmbed6 = assetUriForEmbed7;
                    const tmp133Result = renderer_EmbedUtils;
                    assetUriForEmbed = tmp133Result.getAssetUriForEmbed(getGiftStyleUrl(value.giftStyle));
                  }
                }
                const getAssetUriForEmbed = renderer_EmbedUtils.getAssetUriForEmbed;
                renderer_EmbedUtils;
                if (null != value.giftStyle || message.type === thumbnailBackgroundColor.CUSTOM_GIFT) {
                  tmp59 = getGiftStyleUrl(value.giftStyle);
                } else {
                  tmp59 = AssetRegistryDefault18;
                }
                const assetUriForEmbed1 = getAssetUriForEmbed(tmp59);
                const getAssetUriForEmbed2 = renderer_EmbedUtils.getAssetUriForEmbed;
                renderer_EmbedUtils;
                const tmp55Result2 = shared;
                if (tmp55Result2.isThemeDark(forcedTheme)) {
                  tmp64Result = AssetRegistryDefault15;
                  tmp66 = importDefault;
                } else {
                  tmp64Result = AssetRegistryDefault16;
                  tmp66 = importDefault;
                }
                assetUriForEmbed6 = getAssetUriForEmbed2(tmp64Result);
                tmp49 = tmp66;
                tmp52 = require;
                assetUriForEmbed = assetUriForEmbed1;
              }
              let tmp93 = assetUriForEmbed;
              const tmp52Result = tmp52(6741);
              if (tmp52Result.isGameItemSKU(value2)) {
                const tmp52Result2 = tmp52(6741);
                const str3 = tmp52Result2.getGameItemThumbnailUrl(value2);
                let str1;
                if (str3 != null) {
                  str1 = str3.toString();
                }
                if (str1 == null) {
                  str1 = assetUriForEmbed;
                }
                tmp93 = str1;
              }
              const obj6 = {};
              const merged1 = Object.assign(GiftCodeStore);
              if (message.type === thumbnailBackgroundColor.CUSTOM_GIFT) {
                let formatted;
                if (!tmp13) {
                  const intl10 = tmp52(1126).intl;
                  const formatToPlainString2 = intl10.formatToPlainString;
                  const t1SOId = tmp52(1126).t.t1SOId;
                  const tmp49Result = tmp49(4728);
                  let str4 = tmp49Result.getName(currentUser);
                  if (str4 == null) {
                    str4 = "";
                  }
                  const obj7 = { recipientDisplayName: str4 };
                  const str5 = formatToPlainString2(t1SOId, obj7);
                  formatted = str5.toUpperCase();
                }
                obj6.headerText = formatted;
                let formatToPlainString3Result;
                if (null != value) {
                  if (message.type !== thumbnailBackgroundColor.CUSTOM_GIFT) {
                    let name;
                    if (null != value2) {
                      name = value2.name;
                    }
                    formatToPlainString3Result = name;
                  } else {
                    const user = UserStore.getUser(value.userId);
                    const intl12 = tmp52(1126).intl;
                    const formatToPlainString3 = intl12.formatToPlainString;
                    const DDO4Wz = tmp52(1126).t.DDO4Wz;
                    const tmp49Result4 = tmp49(4728);
                    let str7 = tmp49Result4.getName(user);
                    if (str7 == null) {
                      str7 = "";
                    }
                    const obj8 = { sender: str7 };
                    formatToPlainString3Result = formatToPlainString3(DDO4Wz, obj8);
                  }
                }
                obj6.titleText = formatToPlainString3Result;
                obj6.subtitle = formatToPlainStringResult;
                obj6.bodyText = stringResult1;
                obj6.headerColor = dependencyMap;
                obj6.titleColor = titleColor;
                obj6.subtitleColor = subtitleColor;
                obj6.bodyTextColor = AuthenticationStore;
                obj6.acceptLabelBackgroundColor = processColorOrThrowResult;
                obj6.acceptLabelColor = processColorOrThrowResult1;
                obj6.acceptLabelText = stringResult3;
                obj6.acceptLabelBorderColor = undefined;
                obj6.canBeAccepted = tmp15;
                obj6.embedCanBeTapped = true;
                obj6.giftCode = giftCode;
                let tmp108;
                if (null != tmp93) {
                  tmp108 = tmp93;
                }
                obj6.thumbnailUrl = tmp108;
                let tmp109;
                if (message.type !== thumbnailBackgroundColor.CUSTOM_GIFT) {
                  if (null != assetUriForEmbed6) {
                    tmp109 = assetUriForEmbed6;
                  }
                }
                obj6.splashUrl = tmp109;
                const tmp49Result5 = tmp49(4534);
                obj6.splashHasRadialGradient = !tmp49Result5.isPremiumSku(value.skuId);
                let num5 = 0.97;
                const tmp49Result6 = tmp49(4534);
                if (tmp49Result6.isPremiumSku(value.skuId)) {
                  num5 = 0.8;
                }
                obj6.splashOpacity = num5;
                return obj6;
              }
              const intl11 = tmp52(1126).intl;
              const string2 = intl11.string;
              const t2 = tmp52(1126).t;
              if (tmp13) {
                str6 = string2(t2.QLEMld);
              } else {
                str6 = string2(t2.W4DBcy);
              }
              formatted = str6.toUpperCase();
            }
          } else {
            const obj9 = { headerText: str.toUpperCase(), headerColor: dependencyMap, resolvingGradientStart: GiftCodeStore, resolvingGradientEnd: UserStore };
            const intl = intl17.intl;
            str = intl.string(intl17.t["E+va0m"]);
            const merged2 = Object.assign(GiftCodeStore);
            return obj9;
          }
        }
      });
    }
  }
};