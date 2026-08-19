// === Module 12740: getGiftStyleUrl ===

// Module 12740 (getGiftStyleUrl)
import obj132 from "obj132" /* 2 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8169 */;
import metadataDefault from "metadata" /* 11979 */;
import registerAssetDefault from "registerAsset" /* 12741 */;
import registerAssetDefault2 from "registerAsset" /* 12742 */;
import registerAssetDefault3 from "registerAsset" /* 12743 */;
import registerAssetDefault4 from "registerAsset" /* 12744 */;
import registerAssetDefault5 from "registerAsset" /* 12745 */;
import registerAssetDefault6 from "registerAsset" /* 12746 */;
import registerAssetDefault7 from "registerAsset" /* 12747 */;
import registerAssetDefault8 from "registerAsset" /* 12748 */;
import registerAssetDefault9 from "registerAsset" /* 12749 */;
import registerAssetDefault10 from "registerAsset" /* 12750 */;
import registerAssetDefault11 from "registerAsset" /* 12751 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import updateGiftCode from "updateGiftCode" /* 10641 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import addSku from "addSku" /* 4521 */;
import ME from "ME" /* 676 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;

function getGiftStyleUrl(arg0) {
  if (constants.BOX === arg0) {
    return registerAssetDefault;
  } else if (constants.CUP === arg0) {
    return registerAssetDefault2;
  } else if (constants.SNOWGLOBE === arg0) {
    return registerAssetDefault3;
  } else if (constants.STANDARD_BOX === arg0) {
    return registerAssetDefault4;
  } else if (constants.COFFEE === arg0) {
    return registerAssetDefault5;
  } else if (constants.CAKE === arg0) {
    return registerAssetDefault6;
  } else if (constants.CHEST === arg0) {
    return registerAssetDefault7;
  } else if (constants.SEASONAL_STANDARD_BOX === arg0) {
    return registerAssetDefault8;
  } else if (constants.SEASONAL_CAKE === arg0) {
    return registerAssetDefault9;
  } else if (constants.SEASONAL_CHEST === arg0) {
    return registerAssetDefault10;
  } else if (constants.SEASONAL_COFFEE === arg0) {
    return registerAssetDefault11;
  } else if (constants.NITROWEEN_STANDARD === arg0) {
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
const result = obj132.fileFinishedImporting("modules/messages/native/renderer/row_data/embeds/GiftCodeEmbed.tsx");

export const createGiftCodeEmbed = function createGiftCodeEmbed(message, forcedTheme) {
  const _require = message;
  importDefault = forcedTheme;
  if (null != message.author) {
    if (0 !== message.giftCodes.length) {
      const colors = getEmbedThemeColorsDefault(forcedTheme).colors;
      ({ headerColor: dependencyMap, titleColor: closure_3, subtitleColor: closure_4, bodyTextColor: closure_5, backgroundColor, resolvingGradientStart: closure_6, resolvingGradientEnd: closure_7, acceptLabelDisabledBackgroundColor: closure_8, acceptLabelDisabledColor: closure_9, thumbnailBackgroundColor: closure_10, acceptLabelGreenColor: closure_11, acceptBlurpleLabelBackgroundColor: closure_12 } = colors);
      let obj = { borderColor: null, backgroundColor: null, thumbnailCornerRadius: 3 };
      obj[0] = colors.borderColor;
      let tmp4 = backgroundColor;
      if (obj2.isThemeDark(forcedTheme)) {
        const embedBackground = _require(4194).getEmbedBackground();
        let tmp5Result = callback(embedBackground);
        if (tmp5Result == null) {
          tmp5Result = backgroundColor;
        }
        tmp4 = tmp5Result;
        const tmp3Result = _require(4194);
      }
      obj[1] = tmp4;
      const giftCodes = message.giftCodes;
      return giftCodes.map((item, index) => {
        obj = closure_1_6;
        let value = closure_1_6.get(item);
        if (null != item) {
          if (obj.getIsResolved(item)) {
            const id = closure_1_5.getId();
            if (null != value) {
              let tmp13 = id === value.userId;
            } else {
              tmp13 = id === message.author.id;
            }
            if (null == value) {
              error = obj.getError(item);
              let code;
              if (error != null) {
                code = error.code;
              }
              if (obj25.isThemeDark(callback)) {
                let tmp119Result = callback(dependencyMap[24]);
                let tmp121 = callback;
              } else {
                tmp119Result = callback(dependencyMap[25]);
                tmp121 = callback;
              }
              obj = { thumbnailUrl: null, headerText: null, titleText: null, titleColor: null, headerColor: null, thumbnailBackgroundColor: null, subtitle: null, subtitleColor: null };
              obj[0] = closure_1_3.resolveAssetSource(tmp119Result).uri;
              const intl13 = message(dependencyMap[23]).intl;
              const string3 = intl13.string;
              const t = message(dependencyMap[23]).t;
              if (tmp13) {
                let str8 = string3(t.kzFKb6);
              } else {
                str8 = string3(t.jwCLTM);
              }
              obj[1] = str8.toUpperCase();
              const intl14 = message(dependencyMap[23]).intl;
              obj[2] = intl14.string(message(dependencyMap[23]).t.SdKbX2);
              let tmp123 = closure_1_4(tmp121(dependencyMap[26]).unsafe_rawColors.RED_400);
              if (tmp123 == null) {
                tmp123 = closure_3;
              }
              obj[3] = tmp123;
              obj[4] = closure_2;
              obj[5] = closure_10;
              if (code === closure_1_9.INVALID_GIFT_REDEMPTION_CLIENT_UPDATE_REQUIRED) {
                const intl16 = message(dependencyMap[23]).intl;
                let stringResult = intl16.string(message(dependencyMap[23]).t.QXgO5w);
              } else {
                const intl15 = message(dependencyMap[23]).intl;
                const string4 = intl15.string;
                const t2 = message(dependencyMap[23]).t;
                if (tmp13) {
                  stringResult = string4(t2.pBDXpb);
                } else {
                  stringResult = string4(t2.TPamyd);
                }
              }
              obj[6] = stringResult;
              obj[7] = closure_4;
              const merged = Object.assign(obj);
              return obj;
            } else {
              value = closure_1_8.get(value.skuId);
              const isAccepting = obj.getIsAccepting(item);
              const currentUser = closure_1_7.getCurrentUser();
              let verified;
              if (currentUser != null) {
                verified = currentUser.verified;
              }
              let tmp15 = verified;
              if (tmp15) {
                tmp15 = !(value.redeemed || value.isClaimed);
              }
              let tmp17 = tmp15;
              if (tmp15) {
                tmp17 = null != value.expiresAt;
              }
              if (tmp17) {
                const intl2 = message(dependencyMap[23]).intl;
                obj = { hours: null };
                const expiresAt = value.expiresAt;
                obj[0] = expiresAt.diff(callback(dependencyMap[27])(), "h");
                const formatToPlainStringResult = intl2.formatToPlainString(message(dependencyMap[23]).t.nZBvUR, obj);
              }
              if (value.redeemed) {
                const intl5 = message(dependencyMap[23]).intl;
                let stringResult1 = intl5.string(message(dependencyMap[23]).t["/cg57l"]);
              } else if (value.isClaimed) {
                const intl4 = message(dependencyMap[23]).intl;
                stringResult1 = intl4.string(message(dependencyMap[23]).t.ARWFQX);
              } else {
                let verified1;
                if (currentUser != null) {
                  verified1 = currentUser.verified;
                }
                if (!verified1) {
                  const intl3 = message(dependencyMap[23]).intl;
                  stringResult1 = intl3.string(message(dependencyMap[23]).t["j+KPkX"]);
                }
              }
              let tmp30 = null != value.giftStyle;
              if (!tmp30) {
                tmp30 = message.type === closure_1_10.CUSTOM_GIFT;
              }
              if (tmp15) {
                const intl9 = message(dependencyMap[23]).intl;
                const string = intl9.string;
                let TiZFqX = message(dependencyMap[23]).t;
                if (tmp30) {
                  TiZFqX = TiZFqX.TiZFqX;
                  let stringResult2 = string(TiZFqX);
                } else {
                  stringResult2 = string(TiZFqX.bUvv1f);
                }
              } else {
                if (isAccepting) {
                  const intl8 = message(dependencyMap[23]).intl;
                  let stringResult3 = intl8.string(message(dependencyMap[23]).t.rTeOBK);
                  let processColorOrThrowResult = closure_8;
                  let processColorOrThrowResult1 = closure_9;
                } else {
                  if (!value.redeemed) {
                    if (!value.isClaimed) {
                      let verified2;
                      if (currentUser != null) {
                        verified2 = currentUser.verified;
                      }
                      if (!verified2) {
                        const intl6 = message(dependencyMap[23]).intl;
                        stringResult3 = intl6.string(message(dependencyMap[23]).t.v740sh);
                        let obj3 = message(dependencyMap[28]);
                        processColorOrThrowResult = obj3.processColorOrThrow(callback(dependencyMap[26]).unsafe_rawColors.BRAND_500);
                        let obj4 = message(dependencyMap[28]);
                        processColorOrThrowResult1 = obj4.processColorOrThrow(callback(dependencyMap[26]).unsafe_rawColors.WHITE);
                      }
                    }
                  }
                  const intl7 = message(dependencyMap[23]).intl;
                  stringResult3 = intl7.string(message(dependencyMap[23]).t.BTihou);
                  processColorOrThrowResult = closure_8;
                  processColorOrThrowResult1 = closure_9;
                }
                const skuId = value.skuId;
                if (closure_1_12.TIER_0 === skuId) {
                  if (tmp30) {
                    let tmp82 = obj(value.giftStyle);
                  } else {
                    tmp82 = callback(dependencyMap[30]);
                  }
                  const assetUriForEmbed = message(dependencyMap[29]).getAssetUriForEmbed(tmp82);
                  message(dependencyMap[29]);
                  const tmp79Result = message(dependencyMap[21]);
                  if (tmp79Result.isThemeDark(callback)) {
                    let tmp86Result = callback(dependencyMap[31]);
                  } else {
                    tmp86Result = callback(dependencyMap[32]);
                  }
                  const assetUriForEmbed1 = tmp79Result.getAssetUriForEmbed(tmp86Result);
                  const obj13 = message(dependencyMap[29]);
                } else {
                  if (closure_1_12.TIER_1 === skuId) {
                    if (tmp30) {
                      let tmp72 = obj(value.giftStyle);
                    } else {
                      tmp72 = callback(dependencyMap[33]);
                    }
                    const assetUriForEmbed2 = message(dependencyMap[29]).getAssetUriForEmbed(tmp72);
                    message(dependencyMap[29]);
                    const tmp69Result = message(dependencyMap[21]);
                    if (tmp69Result.isThemeDark(callback)) {
                      let tmp76Result = callback(dependencyMap[31]);
                      let tmp78 = callback;
                    } else {
                      tmp76Result = callback(dependencyMap[32]);
                      tmp78 = callback;
                    }
                    let assetUriForEmbed3 = tmp69Result.getAssetUriForEmbed(tmp76Result);
                    let tmp52 = tmp78;
                    let tmp68 = dependencyMap;
                    let tmp55 = message;
                    let assetUriForEmbed5 = assetUriForEmbed2;
                    const obj10 = message(dependencyMap[29]);
                  } else {
                    if (closure_1_12.TIER_2 !== skuId) {
                      if (closure_1_12.LEGACY !== skuId) {
                        tmp68 = dependencyMap;
                        const obj28 = message(dependencyMap[29]);
                        if (obj29.isThemeDark(callback)) {
                          let tmp137Result = callback(tmp68[31]);
                          tmp52 = callback;
                        } else {
                          tmp137Result = callback(tmp68[32]);
                          tmp52 = callback;
                        }
                        const assetUriForEmbed4 = obj28.getAssetUriForEmbed(tmp137Result);
                        obj29 = message(dependencyMap[21]);
                        tmp55 = message;
                        assetUriForEmbed3 = assetUriForEmbed4;
                        assetUriForEmbed5 = message(tmp68[29]).getAssetUriForEmbed(obj(value.giftStyle));
                        const tmp135Result = message(tmp68[29]);
                      }
                    }
                    if (tmp30) {
                      let tmp61 = obj(value.giftStyle);
                    } else {
                      tmp61 = callback(dependencyMap[34]);
                    }
                    const assetUriForEmbed6 = message(dependencyMap[29]).getAssetUriForEmbed(tmp61);
                    message(dependencyMap[29]);
                    const tmp58Result = message(dependencyMap[21]);
                    if (tmp58Result.isThemeDark(callback)) {
                      let tmp65Result = callback(dependencyMap[31]);
                      let tmp67 = callback;
                    } else {
                      tmp65Result = callback(dependencyMap[32]);
                      tmp67 = callback;
                    }
                    assetUriForEmbed3 = tmp58Result.getAssetUriForEmbed(tmp65Result);
                    tmp52 = tmp67;
                    tmp68 = dependencyMap;
                    tmp55 = message;
                    assetUriForEmbed5 = assetUriForEmbed6;
                    const obj7 = message(dependencyMap[29]);
                  }
                  let tmp55Result = tmp55(tmp68[35]);
                  let tmp95 = assetUriForEmbed5;
                  if (tmp55Result.isGameItemSKU(value)) {
                    tmp55Result = tmp55(tmp68[35]);
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
                  obj1 = {};
                  const merged1 = Object.assign(obj);
                  if (message.type === closure_1_10.CUSTOM_GIFT) {
                    if (!tmp13) {
                      const intl10 = tmp55(tmp68[23]).intl;
                      let tmp52Result = tmp52(tmp68[19]);
                      let str4 = tmp52Result.getName(currentUser);
                      if (str4 == null) {
                        str4 = "";
                      }
                      const obj2 = { recipientDisplayName: null };
                      obj2[0] = str4;
                      obj1.headerText = intl10.formatToPlainString(tmp55(tmp68[23]).t.t1SOId, obj2).toUpperCase();
                      let formatToPlainStringResult1;
                      if (null != value) {
                        if (message.type !== closure_1_10.CUSTOM_GIFT) {
                          let name;
                          if (null != value) {
                            name = value.name;
                          }
                          formatToPlainStringResult1 = name;
                        } else {
                          const user = closure_1_7.getUser(value.userId);
                          const intl12 = tmp55(tmp68[23]).intl;
                          tmp52Result = tmp52(tmp68[19]);
                          let str7 = tmp52Result.getName(user);
                          if (str7 == null) {
                            str7 = "";
                          }
                          obj3 = { sender: null };
                          obj3[0] = str7;
                          formatToPlainStringResult1 = intl12.formatToPlainString(tmp55(tmp68[23]).t.DDO4Wz, obj3);
                        }
                      }
                      obj1.titleText = formatToPlainStringResult1;
                      obj1.subtitle = formatToPlainStringResult;
                      obj1.bodyText = stringResult1;
                      obj1.headerColor = closure_2;
                      obj1.titleColor = closure_3;
                      obj1.subtitleColor = closure_4;
                      obj1.bodyTextColor = closure_5;
                      obj1.acceptLabelBackgroundColor = processColorOrThrowResult;
                      obj1.acceptLabelColor = processColorOrThrowResult1;
                      obj1.acceptLabelText = stringResult3;
                      obj1.acceptLabelBorderColor = undefined;
                      obj1.canBeAccepted = tmp15;
                      obj1.embedCanBeTapped = true;
                      obj1.giftCode = item;
                      let tmp110;
                      if (null != tmp95) {
                        tmp110 = tmp95;
                      }
                      obj1.thumbnailUrl = tmp110;
                      let tmp111;
                      if (message.type !== closure_1_10.CUSTOM_GIFT) {
                        if (null != assetUriForEmbed3) {
                          tmp111 = assetUriForEmbed3;
                        }
                      }
                      obj1.splashUrl = tmp111;
                      const str5 = intl10.formatToPlainString(tmp55(tmp68[23]).t.t1SOId, obj2);
                      obj1.splashHasRadialGradient = !tmp52(tmp68[36]).isPremiumSku(value.skuId);
                      const tmp52Result1 = tmp52(tmp68[36]);
                      let num5 = 0.97;
                      if (tmp52Result2.isPremiumSku(value.skuId)) {
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
                  const formatted = toUpperCase();
                }
              }
            }
          } else {
            obj4 = { headerText: null, headerColor: null, resolvingGradientStart: null, resolvingGradientEnd: null };
            const intl = message(dependencyMap[23]).intl;
            str = intl.string(message(dependencyMap[23]).t["E+va0m"]);
            obj4[0] = str.toUpperCase();
            obj4[1] = closure_2;
            obj4[2] = closure_6;
            obj4[3] = closure_7;
            const merged2 = Object.assign(obj);
            return obj4;
          }
        }
      });
    }
  }
};