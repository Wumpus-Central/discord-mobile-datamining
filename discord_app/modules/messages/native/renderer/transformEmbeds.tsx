// === Module 7789: transformEmbeds ===

// Module 7789 (transformEmbeds)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import intl6 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import DateUtils from "DateUtils" /* 4552 */;
import MediaFormatTesters from "MediaFormatTesters" /* 5040 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5102 */;
import EmbedUtils from "EmbedUtils" /* 5426 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 6795 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 6800 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7605 */;
import MarkupParsers from "MarkupParsers" /* 7761 */;
import sanitizeMediaDimension from "sanitizeMediaDimension" /* 7790 */;
import RowGeneratorUtilsDefault from "RowGeneratorUtils" /* 7791 */;
import utils from "utils" /* 7792 */;
import size from "module_2" /* 2 */;

let borderLeftColor, type;

const processColor = react_native.processColor;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
let result = size.fileFinishedImporting("modules/messages/native/renderer/transformEmbeds.tsx");

export default function transformEmbeds(arg0) {
  let backgroundColor;
  let channelId;
  let closure_10;
  let closure_11;
  let closure_13;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let embeds;
  let ignoreCache;
  let showListsAndHeaders;
  let showMaskedLinks;
  ({ embeds, channelId: require, gifAutoPlay: importDefault, hasSpoilerEmbeds: dependencyMap, ignoreEmbedDescriptionCache: processColor, shouldInlineEmbedMedia: MessageEmbedTypes, colors: closure_5, showListsAndHeaders: closure_6, showMaskedLinks: closure_7, themedBackgroundColor: closure_8, enabledContentHarmTypeFlags: closure_9, authorIsBot: closure_10, showContentInventoryEntryFallbackEmbed: closure_11, shouldAgeVerify: closure_12, transformComponents: closure_13 } = arg0);
  function renderEmbedMedia(image) {
    let getImageSrc;
    let height;
    let imageSrc;
    let obj2;
    let obj3;
    let proxyURL;
    let width;
    ({ proxyURL, width, height } = image);
    const url = image.url;
    const obj = { width: obj2.sanitizeMediaDimension(width), height: obj3.sanitizeMediaDimension(height), proxyURL: imageSrc, url: getImageSrc(proxyURL, width, height, !importDefault) };
    const merged = Object.assign(image);
    obj2 = sanitizeMediaDimension;
    imageSrc = proxyURL;
    obj3 = sanitizeMediaDimension;
    if (null != proxyURL) {
      const obj4 = RowGeneratorUtilsDefault;
      imageSrc = obj4.getImageSrc(proxyURL, width, height, !importDefault);
    }
    getImageSrc = RowGeneratorUtilsDefault.getImageSrc;
    RowGeneratorUtilsDefault;
    if (proxyURL == null) {
      proxyURL = url;
    }
    return obj;
  }
  return embeds.flatMap((type) => {
    let getImageSrc;
    let height;
    let imageSrc;
    let intl;
    let intl2;
    let obj21;
    let provider;
    let proxyURL;
    let proxyURL2;
    let proxyURL3;
    let proxyURL4;
    let referenceId;
    let str11;
    let str12;
    let stringResult;
    let tmp35;
    let tmp3Result14;
    let tmp3Result15;
    let tmp44;
    let tmp50;
    let type2;
    let url2;
    let url3;
    let url4;
    let url5;
    let video;
    let width;
    if (type.type !== MessageEmbedTypes.POST_PREVIEW) {
      if (type.type !== MessageEmbedTypes.GIFT) {
        if (type.type !== MessageEmbedTypes.SAFETY_POLICY_NOTICE) {
          if (type.type !== MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION) {
            if (type.type !== MessageEmbedTypes.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
              if (type.type === MessageEmbedTypes.COMPONENTS) {
                return [];
              }
              let obj = EmbedUtils;
              if (obj.isServerShopArticleEmbed(type)) {
                return [];
              } else if (type.type === MessageEmbedTypes.VOICE_CHANNEL) {
                return [];
              } else {
                const tmp3Result = utils;
                if (tmp3Result.isContentInventoryFallbackEmbed(type)) {
                  if (!closure_11) {
                    return [];
                  }
                }
                const tmp3Result13 = EmbedUtils;
                if (tmp3Result13.isSocialLayerStorefrontArticleEmbed(type)) {
                  return [];
                } else {
                  let mapped;
                  let tmp8 = null;
                  if (MessageEmbedTypes) {
                    tmp8 = null;
                    if (null != type.thumbnail) {
                      const thumbnail = type.thumbnail;
                      ({ proxyURL, width, height } = thumbnail);
                      let obj2 = { width: tmp3Result14.sanitizeMediaDimension(width), height: tmp3Result15.sanitizeMediaDimension(height), proxyURL: imageSrc, url: getImageSrc(proxyURL, width, height, !importDefault) };
                      const url = thumbnail.url;
                      let merged = Object.assign(thumbnail);
                      tmp3Result14 = sanitizeMediaDimension;
                      imageSrc = proxyURL;
                      tmp3Result15 = sanitizeMediaDimension;
                      if (null != proxyURL) {
                        const obj6 = RowGeneratorUtilsDefault;
                        imageSrc = obj6.getImageSrc(proxyURL, width, height, !importDefault);
                      }
                      getImageSrc = RowGeneratorUtilsDefault.getImageSrc;
                      if (proxyURL == null) {
                        proxyURL = url;
                      }
                      tmp8 = obj2;
                    }
                  }
                  let tmp26 = null;
                  if (MessageEmbedTypes) {
                    tmp26 = null;
                    if (null != type.image) {
                      tmp26 = renderEmbedMedia(type.image);
                    }
                  }
                  if (MessageEmbedTypes) {
                    if (null != type.images) {
                      const images = type.images;
                      mapped = images.map(renderEmbedMedia);
                    }
                    let tmp32 = tmp8;
                    if (null != tmp8) {
                      tmp32 = tmp8;
                      if (null != type.video) {
                        if (type.type !== MessageEmbedTypes.GIFV) {
                          if (type.type === MessageEmbedTypes.VIDEO || type.type === MessageEmbedTypes.RICH || type.type === MessageEmbedTypes.ARTICLE) {
                            let tmp46 = tmp35;
                            const tmp45 = type.type !== MessageEmbedTypes.GIFV || importDefault;
                            if (!tmp45) {
                              let obj3 = { gifvUrlForPortal: tmp50 };
                              const merged1 = Object.assign(tmp35);
                              ({ proxyURL: proxyURL3, url: url3 } = type.video);
                              tmp50 = url3;
                              if (null != proxyURL3) {
                                tmp50 = url3;
                                if ("" !== proxyURL3) {
                                  tmp50 = proxyURL3;
                                }
                              }
                              tmp46 = obj3;
                            }
                            ({ proxyURL: proxyURL4, url: url4 } = type.video);
                            let tmp52 = url4;
                            const isWebPlayerVideoUrl = MediaFormatTesters.isWebPlayerVideoUrl;
                            MediaFormatTesters;
                            if (null != proxyURL4) {
                              tmp52 = url4;
                              if ("" !== proxyURL4) {
                                tmp52 = proxyURL4;
                              }
                            }
                            tmp32 = tmp46;
                            if (isWebPlayerVideoUrl(tmp52)) {
                              let obj4 = { inlinePlaybackDisabled: true };
                              const merged2 = Object.assign(tmp46);
                              tmp32 = obj4;
                            }
                          }
                          tmp35 = tmp8;
                          if (type.type === MessageEmbedTypes.VIDEO || type.type === MessageEmbedTypes.RICH || type.type === MessageEmbedTypes.ARTICLE) {
                            tmp35 = tmp8;
                            if (null == type.video.proxyURL) {
                              const provider2 = type.provider;
                              let name;
                              const getEffectiveVideoProvider = EmbedUtils.getEffectiveVideoProvider;
                              EmbedUtils;
                              if (provider2 != null) {
                                name = provider2.name;
                              }
                              const effectiveVideoProvider = getEffectiveVideoProvider(name, type.video.url);
                              tmp35 = tmp8;
                              const tmp3Result18 = renderer_EmbedUtils;
                              if (tmp3Result18.shouldPlayVideoInline(effectiveVideoProvider)) {
                                const obj5 = { showPlayButton: true };
                                const merged3 = Object.assign(tmp8);
                                tmp35 = obj5;
                              }
                            }
                          }
                        }
                        const obj7 = { gifv: type.type === MessageEmbedTypes.GIFV, videoUrl: tmp44 };
                        const merged4 = Object.assign(tmp8);
                        ({ proxyURL: proxyURL2, url: url2 } = type.video);
                        tmp44 = url2;
                        if (null != proxyURL2) {
                          tmp44 = url2;
                          if ("" !== proxyURL2) {
                            tmp44 = proxyURL2;
                          }
                        }
                        tmp35 = obj7;
                      }
                    }
                    let tmp57 = tmp32;
                    const tmp56 = null != tmp32 && type.type === MessageEmbedTypes.GIFV;
                    if (tmp56) {
                      const obj8 = { role: intl.string(intl6.t.OBp3V3), hint: intl2.string(intl6.t.IPzNKE) };
                      const merged5 = Object.assign(tmp32);
                      intl = intl6.intl;
                      intl2 = intl6.intl;
                      tmp57 = obj8;
                    }
                    const tmp61 = borderLeftColor;
                    borderLeftColor = borderLeftColor.embedBorderLeftColor;
                    const tmp62 = null != type.color && "" !== type.color;
                    if (tmp62) {
                      borderLeftColor = processColor(type.color);
                    }
                    if (null != type.url) {
                      let parseEmbedTitleMarkup;
                      if ("" !== type.url) {
                        parseEmbedTitleMarkup = MarkupParsers.parseEmbedTitleMarkupWithoutLinks;
                      }
                      if (type.type === MessageEmbedTypes.RICH) {
                        let rawTitle;
                        let tmp72;
                        if (null != type.rawTitle) {
                          rawTitle = parseEmbedTitleMarkup(type.rawTitle, require);
                        }
                        type = type.type;
                        let result;
                        if (MessageEmbedTypes.IMAGE !== type) {
                          if (MessageEmbedTypes.VIDEO !== type) {
                            if (MessageEmbedTypes.GIFV !== type) {
                              if (MessageEmbedTypes.RICH === type) {
                                if (null != type.rawDescription) {
                                  const obj9 = { description: type.rawDescription, channelId: require, isField: false, ignoreCache: processColor, showListsAndHeaders, showMaskedLinks };
                                  const tmp3Result19 = MarkupParsers;
                                  result = tmp3Result19.parseEmbedDescriptionMarkup(obj9);
                                }
                              } else {
                                result = type.rawDescription;
                              }
                            }
                          }
                        }
                        let fields = type.fields;
                        if (fields == null) {
                          fields = [];
                        }
                        const mapped1 = fields.map((rawName) => {
                          let result = null;
                          if (null != rawName.rawName) {
                            const obj = MarkupParsers;
                            result = obj.parseEmbedTitleMarkup(rawName.rawName, require);
                          }
                          let result1 = null;
                          if (null != rawName.rawValue) {
                            const obj3 = { description: rawName.rawValue, channelId: require, isField: true, ignoreCache, replaceMap: { "\t": "" }, showListsAndHeaders, showMaskedLinks };
                            const obj2 = MarkupParsers;
                            result1 = obj2.parseEmbedDescriptionMarkup(obj3);
                          }
                          const obj4 = { name: result, value: result1 };
                          const merged = Object.assign(rawName);
                          return obj4;
                        });
                        let calendarFormatResult = null;
                        if (null != type.timestamp) {
                          const tmp3Result20 = DateUtils;
                          calendarFormatResult = tmp3Result20.calendarFormat(type.timestamp);
                        }
                        if (null != type.footer) {
                          const text = type.footer.text;
                          let combined = text;
                          if (null != calendarFormatResult) {
                            const _HermesInternal = HermesInternal;
                            combined = "" + text + " | " + calendarFormatResult;
                          }
                          const obj10 = { content: combined };
                          const merged6 = Object.assign(type.footer);
                          if (null != type.footer.iconProxyURL) {
                            let iconURL;
                            if ("" !== type.footer.iconProxyURL) {
                              iconURL = type.footer.iconProxyURL;
                            }
                            tmp72 = obj10;
                            if (null != iconURL) {
                              const obj19 = RowGeneratorUtilsDefault;
                              obj10.iconURL = obj19.getImageSrc(iconURL, 16, 16, !importDefault);
                              tmp72 = obj10;
                            }
                          }
                          iconURL = type.footer.iconURL;
                        } else if (null != calendarFormatResult) {
                          tmp72 = { content: calendarFormatResult, text: "" };
                          const obj11 = { content: calendarFormatResult, text: "" };
                        }
                        let tmp81;
                        if (null != type.author) {
                          if (null != type.author.iconProxyURL) {
                            let iconURL2;
                            let author;
                            if ("" !== type.author.iconProxyURL) {
                              iconURL2 = type.author.iconProxyURL;
                            }
                            if (null != iconURL2) {
                              const obj12 = { iconURL: obj21.getImageSrc(iconURL2, 16, 16, !importDefault) };
                              const merged7 = Object.assign(type.author);
                              author = obj12;
                              obj21 = RowGeneratorUtilsDefault;
                            } else {
                              author = type.author;
                            }
                            tmp81 = author;
                          }
                          iconURL2 = type.author.iconURL;
                        }
                        let tmp88;
                        if (type.type === MessageEmbedTypes.COMPONENTS) {
                          let mapped2;
                          const components = type.components;
                          if (dependencyMap) {
                            mapped2 = components.map((item) => {
                              const obj = { spoiler: true };
                              const merged = Object.assign(item);
                              return obj;
                            });
                          } else {
                            mapped2 = components;
                          }
                          tmp88 = closure_13(mapped2);
                        }
                        const obj13 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: type };
                        const getMediaObscuredReasonFromBitmask = ObscuredMediaUtils.getMediaObscuredReasonFromBitmask;
                        ObscuredMediaUtils;
                        let isMediaScanPendingResult = !closure_10;
                        const mediaObscuredReasonFromBitmask = getMediaObscuredReasonFromBitmask(obj13, closure_9);
                        if (!closure_10) {
                          const obj14 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: type };
                          const isMediaScanPending = ObscuredMediaUtils.isMediaScanPending;
                          ObscuredMediaUtils;
                          isMediaScanPendingResult = isMediaScanPending(obj14, closure_9);
                        }
                        let isVerifiedTeenResult = tmp97;
                        if (isVerifiedTeenResult) {
                          const tmp3Result23 = AgeVerificationUtils;
                          isVerifiedTeenResult = tmp3Result23.isVerifiedTeen();
                        }
                        let str10 = type.id;
                        if (str10 == null) {
                          str10 = "";
                        }
                        const obj15 = { id: str10, type: type2, spoiler: str12, obscure: stringResult, obscureAwaitingScan: str11, verifyAge: mediaObscuredReasonFromBitmask.length > 0 && closure_12, obscureHideControls: isVerifiedTeenResult, obscureIsOpaque: mediaObscuredReasonFromBitmask.length > 0, provider, author: tmp81, rawTitle: type.rawTitle, title: rawTitle, url: url5, rawDescription: type.rawDescription, description: result, thumbnail: tmp57, image: tmp26, images: mapped, fields: mapped1, components: tmp88, footer: tmp72, video, borderLeftColor, providerColor: null, headerTextColor: null, bodyTextColor: null, referenceId, backgroundColor };
                        type2 = type.type;
                        str11 = "";
                        str12 = "";
                        if (dependencyMap) {
                          const intl3 = intl6.intl;
                          const str13 = intl3.string(intl6.t["F+x38C"]);
                          str12 = str13.toUpperCase();
                        }
                        stringResult = str11;
                        if (mediaObscuredReasonFromBitmask.length > 0) {
                          const intl4 = intl6.intl;
                          stringResult = intl4.string(intl6.t.SpxcUR);
                        }
                        if (isMediaScanPendingResult) {
                          const intl5 = intl6.intl;
                          str11 = intl5.string(intl6.t.MRdR7z);
                        }
                        provider = type.provider;
                        url5 = type.url;
                        video = type.video;
                        ({ embedProviderColor: obj25.providerColor, embedHeaderTextColor: obj25.headerTextColor, embedBodyTextColor: obj25.bodyTextColor } = tmp61);
                        referenceId = type.referenceId;
                        return obj15;
                      }
                      rawTitle = type.rawTitle;
                    }
                    parseEmbedTitleMarkup = MarkupParsers.parseEmbedTitleMarkup;
                  }
                  let tmp28 = null == tmp26;
                  if (!tmp28) {
                    const tmp3Result24 = PlatformUtils;
                    tmp28 = !tmp3Result24.isIOS();
                  }
                  mapped = null;
                  const tmp29 = !tmp28 && null == type.thumbnail;
                  if (tmp29) {
                    mapped = null;
                    if (null != tmp26) {
                      const items = [tmp26];
                      mapped = items;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return [];
  });
};