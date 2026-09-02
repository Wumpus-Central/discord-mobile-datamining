// discord_app/modules/messages/native/renderer/row_data/embeds/GiftCodeEmbed.tsx
import set from "../../../../../../../_runtime/00002_set.js";
import getEmbedThemeColorsDefault from "getEmbedThemeColors.tsx";
import metadataDefault from "../../../../../../../discord_assets/assets/premium/gifting/halloween-card-small.png.js";
import registerAssetDefault from "../../../../../../../_runtime/13078_registerAsset.js";
import registerAssetDefault2 from "../../../../../../../_runtime/13079_registerAsset.js";
import registerAssetDefault3 from "../../../../../../../_runtime/13080_registerAsset.js";
import registerAssetDefault4 from "../../../../../../../_runtime/13081_registerAsset.js";
import registerAssetDefault5 from "../../../../../../../_runtime/13082_registerAsset.js";
import registerAssetDefault6 from "../../../../../../../_runtime/13083_registerAsset.js";
import registerAssetDefault7 from "../../../../../../../_runtime/13084_registerAsset.js";
import registerAssetDefault8 from "../../../../../../../_runtime/13085_registerAsset.js";
import registerAssetDefault9 from "../../../../../../../_runtime/13086_registerAsset.js";
import registerAssetDefault10 from "../../../../../../../_runtime/13087_registerAsset.js";
import registerAssetDefault11 from "../../../../../../../_runtime/13088_registerAsset.js";
import get_ActivityIndicator from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../../../stores/AuthenticationStore.tsx";
import closure_6 from "../../../../../../stores/GiftCodeStore.tsx";
import closure_7 from "../../../../../../stores/UserStore.tsx";
import closure_8 from "../../../../../../stores/game_store/SKUStore.tsx";
import ME from "../../../../../../Constants.tsx";
import GuildFeatures from "../../../../../premium/PremiumConstants.tsx";
import { getGradientColorByPercentage } from "../../../../../client_themes/native/ClientThemesUtils.tsx";

function getGiftStyleUrl(arg0) {
  if (constants.BOX === arg0) {
    return registerAssetDefault;
  } else if (tmp.CUP === arg0) {
    return registerAssetDefault2;
  } else if (tmp.SNOWGLOBE === arg0) {
    return registerAssetDefault3;
  } else if (tmp.STANDARD_BOX === arg0) {
    return registerAssetDefault4;
  } else if (tmp.COFFEE === arg0) {
    return registerAssetDefault5;
  } else if (tmp.CAKE === arg0) {
    return registerAssetDefault6;
  } else if (tmp.CHEST === arg0) {
    return registerAssetDefault7;
  } else if (tmp.SEASONAL_STANDARD_BOX === arg0) {
    return registerAssetDefault8;
  } else if (tmp.SEASONAL_CAKE === arg0) {
    return registerAssetDefault9;
  } else if (tmp.SEASONAL_CHEST === arg0) {
    return registerAssetDefault10;
  } else if (tmp.SEASONAL_COFFEE === arg0) {
    return registerAssetDefault11;
  } else if (tmp.NITROWEEN_STANDARD === arg0) {
    const obj = { uri: null };
    obj[0] = metadataDefault;
    return obj;
  } else {
    return registerAssetDefault4;
  }
}
({ Image: c3, processColor: c4 } = get_ActivityIndicator);
({ AbortCodes: c9, MessageTypes: c10 } = ME);
({ PremiumGiftStyles: unpackModuleId, PremiumSubscriptionSKUs: closure_12 } = GuildFeatures);
const result = set.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/GiftCodeEmbed.tsx");

export const createGiftCodeEmbed = function createGiftCodeEmbed(message, forcedTheme) {
  const _require = message;
  importDefault = forcedTheme;
  if (null != message.author) {
    if (0 !== message.giftCodes.length) {
      const colors = getEmbedThemeColorsDefault(forcedTheme).colors;
      ({
        headerColor: dependencyMap,
        titleColor: closure_3,
        subtitleColor: closure_4,
        bodyTextColor: closure_5,
        backgroundColor,
        resolvingGradientStart: closure_6,
        resolvingGradientEnd: closure_7,
        acceptLabelDisabledBackgroundColor: closure_8,
        acceptLabelDisabledColor: closure_9,
        thumbnailBackgroundColor: closure_10,
        acceptLabelGreenColor: closure_11,
        acceptBlurpleLabelBackgroundColor: closure_12,
      } = colors);
      let obj = { borderColor: null, backgroundColor: null, thumbnailCornerRadius: 3 };
      obj[0] = colors.borderColor;
      let tmp4 = backgroundColor;
      if (obj2.isThemeDark(forcedTheme)) {
        const embedBackground =
          require("../../../../../client_themes/native/ClientThemesUtils.tsx").getEmbedBackground();
        let tmp5Result = closure_4(embedBackground);
        if (tmp5Result == null) {
          tmp5Result = backgroundColor;
        }
        tmp4 = tmp5Result;
        const tmp3Result = getGradientColorByPercentage;
        const tmp5 = closure_4;
      }
      obj[1] = tmp4;
      const giftCodes = message.giftCodes;
      return giftCodes.map((giftCode) => {
        obj = closure_1_6;
        error = closure_1_6.get(giftCode);
        if (null != giftCode) {
          if (obj.getIsResolved(giftCode)) {
            const id = closure_1_5.getId();
            if (null != error) {
              let tmp13 = id === error.userId;
            } else {
              tmp13 = id === message.author.id;
            }
            if (null == error) {
              error = obj.getError(giftCode);
              error = undefined;
              if (error != null) {
                error = error.code;
              }
              error = closure_1_9;
              error = message;
              error = closure_1_2;
              error = closure_1_3;
              error = callback;
              error = callback;
              if (obj25.isThemeDark(callback)) {
                error = error(error[24]);
              } else {
                error = error(error[25]);
              }
              obj = {
                thumbnailUrl: null,
                headerText: null,
                titleText: null,
                titleColor: null,
                headerColor: null,
                thumbnailBackgroundColor: null,
                subtitle: null,
                subtitleColor: null,
              };
              obj[0] = closure_1_3.resolveAssetSource(error).uri;
              const intl13 = error(error[23]).intl;
              const string3 = intl13.string;
              const t = error(error[23]).t;
              if (tmp13) {
                let str8 = string3(t.kzFKb6);
              } else {
                str8 = string3(t.jwCLTM);
              }
              obj[1] = str8.toUpperCase();
              const intl14 = error(error[23]).intl;
              obj[2] = intl14.string(error(error[23]).t.SdKbX2);
              error = closure_1_4;
              error = closure_1_4(error(error[26]).unsafe_rawColors.RED_400);
              if (error == null) {
                error = closure_3;
              }
              obj[3] = error;
              error = closure_2;
              obj[4] = closure_2;
              error = closure_10;
              obj[5] = closure_10;
              if (error === closure_1_9.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED) {
                const intl16 = error(error[23]).intl;
                error = intl16.string(error(error[23]).t.QXgO5w);
              } else {
                const intl15 = error(error[23]).intl;
                const string4 = intl15.string;
                const t2 = error(error[23]).t;
                if (tmp13) {
                  error = string4(t2.pBDXpb);
                } else {
                  error = string4(t2.TPamyd);
                }
              }
              obj[6] = error;
              error = closure_4;
              obj[7] = closure_4;
              error = obj;
              error = obj;
              error = Object.assign(obj);
              return obj;
            } else {
              error = closure_1_8;
              error = closure_1_8.get(error.skuId);
              error = obj.getIsAccepting(giftCode);
              error = closure_1_7.getCurrentUser();
              let verified;
              if (error != null) {
                verified = error.verified;
              }
              let tmp15 = verified;
              if (tmp15) {
                tmp15 = !(error.redeemed || error.isClaimed);
                const tmp16 = error.redeemed || error.isClaimed;
              }
              let tmp17 = tmp15;
              if (tmp15) {
                tmp17 = null != error.expiresAt;
              }
              if (tmp17) {
                const intl2 = message(closure_1_2[23]).intl;
                obj = { hours: null };
                const expiresAt = error.expiresAt;
                obj[0] = expiresAt.diff(callback(closure_1_2[27])(), "h");
                const formatToPlainStringResult = intl2.formatToPlainString(message(closure_1_2[23]).t.nZBvUR, obj);
              }
              if (error.redeemed) {
                const intl5 = message(closure_1_2[23]).intl;
                let stringResult = intl5.string(message(closure_1_2[23]).t["/cg57l"]);
              } else if (error.isClaimed) {
                const intl4 = message(closure_1_2[23]).intl;
                stringResult = intl4.string(message(closure_1_2[23]).t.ARWFQX);
              } else {
                let verified1;
                if (error != null) {
                  verified1 = error.verified;
                }
                if (!verified1) {
                  const intl3 = message(closure_1_2[23]).intl;
                  stringResult = intl3.string(message(closure_1_2[23]).t["j+KPkX"]);
                }
              }
              let tmp30 = null != error.giftStyle;
              if (!tmp30) {
                tmp30 = message.type === closure_1_10.CUSTOM_GIFT;
              }
              if (tmp15) {
                const intl9 = message(closure_1_2[23]).intl;
                const string = intl9.string;
                let TiZFqX = message(closure_1_2[23]).t;
                if (tmp30) {
                  TiZFqX = TiZFqX.TiZFqX;
                  let stringResult1 = string(TiZFqX);
                } else {
                  stringResult1 = string(TiZFqX.bUvv1f);
                }
              } else {
                if (error) {
                  const intl8 = message(closure_1_2[23]).intl;
                  let stringResult2 = intl8.string(message(closure_1_2[23]).t.rTeOBK);
                  let processColorOrThrowResult = closure_8;
                  let processColorOrThrowResult1 = closure_9;
                } else {
                  if (!error.redeemed) {
                    if (!error.isClaimed) {
                      let verified2;
                      if (error != null) {
                        verified2 = error.verified;
                      }
                      if (!verified2) {
                        const intl6 = message(closure_1_2[23]).intl;
                        stringResult2 = intl6.string(message(closure_1_2[23]).t.v740sh);
                        let obj3 = message(closure_1_2[28]);
                        processColorOrThrowResult = obj3.processColorOrThrow(
                          callback(closure_1_2[26]).unsafe_rawColors.BRAND_500,
                        );
                        let obj4 = message(closure_1_2[28]);
                        processColorOrThrowResult1 = obj4.processColorOrThrow(
                          callback(closure_1_2[26]).unsafe_rawColors.WHITE,
                        );
                      }
                    }
                  }
                  const intl7 = message(closure_1_2[23]).intl;
                  stringResult2 = intl7.string(message(closure_1_2[23]).t.BTihou);
                  processColorOrThrowResult = closure_8;
                  processColorOrThrowResult1 = closure_9;
                }
                const skuId = error.skuId;
                if (closure_1_12.TIER_0 === skuId) {
                  if (tmp30) {
                    let tmp82 = obj(error.giftStyle);
                  } else {
                    tmp82 = callback(tmp80[30]);
                  }
                  const assetUriForEmbed = message(closure_1_2[29]).getAssetUriForEmbed(tmp82);
                  let tmp79Result = tmp79(tmp80[29]);
                  tmp79Result = tmp79(tmp80[21]);
                  if (tmp79Result.isThemeDark(callback)) {
                    let tmp86Result = tmp86(tmp80[31]);
                    let tmp88 = tmp86;
                  } else {
                    tmp86Result = tmp86(tmp80[32]);
                    tmp88 = tmp86;
                  }
                  const assetUriForEmbed1 = tmp79Result.getAssetUriForEmbed(tmp86Result);
                  const obj13 = message(closure_1_2[29]);
                } else {
                  if (tmp50.TIER_1 === skuId) {
                    if (tmp30) {
                      let tmp72 = obj(error.giftStyle);
                    } else {
                      tmp72 = callback(tmp70[33]);
                    }
                    const assetUriForEmbed2 = message(closure_1_2[29]).getAssetUriForEmbed(tmp72);
                    let tmp69Result = tmp69(tmp70[29]);
                    tmp69Result = tmp69(tmp70[21]);
                    if (tmp69Result.isThemeDark(callback)) {
                      let tmp76Result = tmp76(tmp70[31]);
                      let tmp78 = tmp76;
                    } else {
                      tmp76Result = tmp76(tmp70[32]);
                      tmp78 = tmp76;
                    }
                    let assetUriForEmbed3 = tmp69Result.getAssetUriForEmbed(tmp76Result);
                    let tmp52 = tmp78;
                    let tmp68 = tmp70;
                    let tmp55 = tmp69;
                    let assetUriForEmbed5 = assetUriForEmbed2;
                    const obj10 = message(closure_1_2[29]);
                  } else {
                    if (tmp50.TIER_2 !== skuId) {
                      if (tmp50.LEGACY !== skuId) {
                        error = message;
                        tmp68 = closure_1_2;
                        const obj28 = message(closure_1_2[29]);
                        error = callback;
                        error = callback;
                        if (obj29.isThemeDark(callback)) {
                          let valueResult = error(tmp68[31]);
                          tmp52 = error;
                        } else {
                          valueResult = error(tmp68[32]);
                          tmp52 = error;
                        }
                        const assetUriForEmbed4 = obj28.getAssetUriForEmbed(valueResult);
                        obj29 = message(closure_1_2[21]);
                        tmp55 = error;
                        assetUriForEmbed3 = assetUriForEmbed4;
                        assetUriForEmbed5 = error(tmp68[29]).getAssetUriForEmbed(obj(error.giftStyle));
                        const valueResult1 = error(tmp68[29]);
                      }
                    }
                    if (tmp30) {
                      let tmp61 = obj(error.giftStyle);
                    } else {
                      tmp61 = callback(tmp59[34]);
                    }
                    const assetUriForEmbed6 = message(closure_1_2[29]).getAssetUriForEmbed(tmp61);
                    let tmp58Result = tmp58(tmp59[29]);
                    tmp58Result = tmp58(tmp59[21]);
                    if (tmp58Result.isThemeDark(callback)) {
                      let tmp65Result = tmp65(tmp59[31]);
                      let tmp67 = tmp65;
                    } else {
                      tmp65Result = tmp65(tmp59[32]);
                      tmp67 = tmp65;
                    }
                    assetUriForEmbed3 = tmp58Result.getAssetUriForEmbed(tmp65Result);
                    tmp52 = tmp67;
                    tmp68 = tmp59;
                    tmp55 = tmp58;
                    assetUriForEmbed5 = assetUriForEmbed6;
                    const obj7 = message(closure_1_2[29]);
                  }
                  let tmp55Result = tmp55(tmp68[35]);
                  let tmp95 = assetUriForEmbed5;
                  if (tmp55Result.isGameItemSKU(error)) {
                    tmp55Result = tmp55(tmp68[35]);
                    const str3 = tmp55Result.getGameItemThumbnailUrl(error);
                    let str;
                    if (str3 != null) {
                      str = str3.toString();
                    }
                    if (str == null) {
                      str = assetUriForEmbed5;
                    }
                    tmp95 = str;
                  }
                  obj1 = {};
                  const merged = Object.assign(obj);
                  error = message;
                  error = closure_1_10;
                  if (message.type === closure_1_10.CUSTOM_GIFT) {
                    if (!tmp13) {
                      const intl10 = tmp55(tmp68[23]).intl;
                      let tmp52Result = tmp52(tmp68[19]);
                      let str4 = tmp52Result.getName(error);
                      if (str4 == null) {
                        str4 = "";
                      }
                      const obj2 = { recipientDisplayName: null };
                      obj2[0] = str4;
                      obj1.headerText = intl10.formatToPlainString(tmp55(tmp68[23]).t.t1SOId, obj2).toUpperCase();
                      error = undefined;
                      if (null != error) {
                        if (error.type !== error.CUSTOM_GIFT) {
                          error = undefined;
                          if (null != error) {
                            error = error.name;
                          }
                        } else {
                          error = obj27.getUser(error.userId);
                          const intl12 = tmp55(tmp68[23]).intl;
                          tmp52Result = tmp52(tmp68[19]);
                          let str7 = tmp52Result.getName(error);
                          if (str7 == null) {
                            str7 = "";
                          }
                          obj3 = { sender: null };
                          obj3[0] = str7;
                          error = intl12.formatToPlainString(tmp55(tmp68[23]).t.DDO4Wz, obj3);
                        }
                      }
                      obj1.titleText = error;
                      obj1.subtitle = formatToPlainStringResult;
                      obj1.bodyText = stringResult;
                      error = closure_2;
                      obj1.headerColor = closure_2;
                      error = closure_3;
                      obj1.titleColor = closure_3;
                      error = closure_4;
                      obj1.subtitleColor = closure_4;
                      error = closure_5;
                      obj1.bodyTextColor = closure_5;
                      obj1.acceptLabelBackgroundColor = processColorOrThrowResult;
                      obj1.acceptLabelColor = processColorOrThrowResult1;
                      obj1.acceptLabelText = stringResult2;
                      obj1.acceptLabelBorderColor = undefined;
                      obj1.canBeAccepted = tmp15;
                      obj1.embedCanBeTapped = true;
                      obj1.giftCode = giftCode;
                      error = undefined;
                      if (null != tmp95) {
                        error = tmp95;
                      }
                      obj1.thumbnailUrl = error;
                      error = undefined;
                      if (error.type !== error.CUSTOM_GIFT) {
                        if (null != assetUriForEmbed3) {
                          error = assetUriForEmbed3;
                        }
                      }
                      obj1.splashUrl = error;
                      const str5 = intl10.formatToPlainString(tmp55(tmp68[23]).t.t1SOId, obj2);
                      obj1.splashHasRadialGradient = !tmp52(tmp68[36]).isPremiumSku(error.skuId);
                      const tmp52Result1 = tmp52(tmp68[36]);
                      let num5 = 0.97;
                      if (tmp52Result2.isPremiumSku(error.skuId)) {
                        num5 = 0.8;
                      }
                      obj1.splashOpacity = num5;
                      return obj1;
                    }
                  }
                  const intl11 = tmp55(tmp68[23]).intl;
                  const string2 = intl11.string;
                  let toUpperCase = tmp55(tmp68[23]).t;
                  if (tmp13) {
                    let str6 = string2(toUpperCase.QLEMld);
                  } else {
                    str6 = string2(toUpperCase.W4DBcy);
                  }
                  toUpperCase = str6.toUpperCase;
                  error = toUpperCase();
                }
              }
              obj27 = closure_1_7;
            }
          } else {
            obj4 = { headerText: null, headerColor: null, resolvingGradientStart: null, resolvingGradientEnd: null };
            const intl = message(closure_1_2[23]).intl;
            str = intl.string(message(closure_1_2[23]).t["E+va0m"]);
            obj4[0] = str.toUpperCase();
            obj4[1] = closure_2;
            obj4[2] = closure_6;
            obj4[3] = closure_7;
            const merged1 = Object.assign(obj);
            return obj4;
          }
        }
      });
    }
  }
};
