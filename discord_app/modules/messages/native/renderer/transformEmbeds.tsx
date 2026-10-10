// === Module 8243: transformEmbeds ===

// Module 8243 (transformEmbeds)
import _mod17 from "module_17" /* 17 */;
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import DateUtils from "DateUtils" /* 4793 */;
import MediaFormatTesters from "MediaFormatTesters" /* 5419 */;
import EmbedUtils from "EmbedUtils" /* 5747 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5909 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 6989 */;
import ExplicitMediaRedactionModels from "ExplicitMediaRedactionModels" /* 6995 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 7890 */;
import MarkupParsers from "MarkupParsers" /* 8119 */;
import sanitizeMediaDimension from "sanitizeMediaDimension" /* 8244 */;
import RowGeneratorUtilsDefault from "RowGeneratorUtils" /* 8245 */;
import utils from "utils" /* 8246 */;
import size from "module_2" /* 2 */;

const processColor = _mod17.processColor;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
let result = size.fileFinishedImporting("modules/messages/native/renderer/transformEmbeds.tsx");

export default function transformEmbeds(arg0) {
  ({ embeds, channelId: require, gifAutoPlay: importDefault, hasSpoilerEmbeds: dependencyMap, ignoreEmbedDescriptionCache: processColor, shouldInlineEmbedMedia: MessageEmbedTypes, colors: closure_5, showListsAndHeaders: closure_6, showMaskedLinks: closure_7, themedBackgroundColor: closure_8, enabledContentHarmTypeFlags: closure_9, authorIsBot: closure_10, showContentInventoryEntryFallbackEmbed: closure_11, shouldAgeVerify: closure_12, transformComponents: closure_13 } = arg0);
  function renderEmbedMedia(image) {
    ({ proxyURL, width, height } = image);
    const obj = {};
    const merged = Object.assign(image);
    obj.width = sanitizeMediaDimension.sanitizeMediaDimension(width);
    obj.height = sanitizeMediaDimension.sanitizeMediaDimension(height);
    let imageSrc = proxyURL;
    if (null != proxyURL) {
      const obj4 = RowGeneratorUtilsDefault;
      imageSrc = obj4.getImageSrc(proxyURL, width, height, !closure_1_1);
    }
    obj.proxyURL = imageSrc;
    if (proxyURL == null) {
      proxyURL = image.url;
    }
    obj.url = RowGeneratorUtilsDefault.getImageSrc(proxyURL, width, height, !closure_1_1);
    return obj;
  }
  return embeds.flatMap((type) => {
    if (type.type !== MessageEmbedTypes.POST_PREVIEW) {
      if (type.type !== MessageEmbedTypes.GIFT) {
        if (type.type !== MessageEmbedTypes.SAFETY_POLICY_NOTICE) {
          if (type.type !== MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION) {
            if (type.type !== MessageEmbedTypes.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
              if (type.type === MessageEmbedTypes.COMPONENTS) {
                return [];
              }
              if (obj.isServerShopArticleEmbed(type)) {
                return [];
              } else if (type.type === MessageEmbedTypes.VOICE_CHANNEL) {
                return [];
              } else {
                if (tmp3Result.isContentInventoryFallbackEmbed(type)) {
                  if (!closure_1_11) {
                    return [];
                  }
                }
                tmp3Result = utils;
                if (tmp3Result14.isSocialLayerStorefrontArticleEmbed(type)) {
                  return [];
                } else {
                  if (tmp3Result15.isUserProfileArticleEmbed(type)) {
                    return [];
                  } else {
                    let tmp8 = null;
                    if (closure_1_4) {
                      tmp8 = null;
                      if (null != type.thumbnail) {
                        const thumbnail = type.thumbnail;
                        ({ proxyURL, width, height } = thumbnail);
                        let obj2 = {};
                        let merged = Object.assign(thumbnail);
                        obj2.width = sanitizeMediaDimension.sanitizeMediaDimension(width);
                        const tmp3Result16 = sanitizeMediaDimension;
                        obj2.height = sanitizeMediaDimension.sanitizeMediaDimension(height);
                        let imageSrc = proxyURL;
                        if (null != proxyURL) {
                          const obj7 = RowGeneratorUtilsDefault;
                          imageSrc = obj7.getImageSrc(proxyURL, width, height, !closure_1_1);
                        }
                        obj2.proxyURL = imageSrc;
                        const obj8 = RowGeneratorUtilsDefault;
                        if (proxyURL == null) {
                          proxyURL = thumbnail.url;
                        }
                        obj2.url = obj8.getImageSrc(proxyURL, width, height, !closure_1_1);
                        tmp8 = obj2;
                        const tmp3Result17 = sanitizeMediaDimension;
                      }
                    }
                    let tmp25 = null;
                    if (closure_1_4) {
                      tmp25 = null;
                      if (null != type.image) {
                        tmp25 = renderEmbedMedia(type.image);
                      }
                    }
                    if (closure_1_4) {
                      if (null != type.images) {
                        const images = type.images;
                        let mapped = images.map(renderEmbedMedia);
                      }
                      let tmp31 = tmp8;
                      if (null != tmp8) {
                        tmp31 = tmp8;
                        if (null != type.video) {
                          if (type.type !== MessageEmbedTypes.GIFV) {
                            if (tmp32) {
                              let tmp45 = tmp34;
                              if (!tmp44) {
                                let obj3 = {};
                                const merged1 = Object.assign(tmp34);
                                ({ proxyURL: proxyURL3, url: url2 } = type.video);
                                let tmp49 = url2;
                                if (null != proxyURL3) {
                                  tmp49 = url2;
                                  if ("" !== proxyURL3) {
                                    tmp49 = proxyURL3;
                                  }
                                }
                                obj3.gifvUrlForPortal = tmp49;
                                tmp45 = obj3;
                              }
                              ({ proxyURL: proxyURL4, url: url3 } = type.video);
                              let tmp50 = url3;
                              if (null != proxyURL4) {
                                tmp50 = url3;
                                if ("" !== proxyURL4) {
                                  tmp50 = proxyURL4;
                                }
                              }
                              tmp31 = tmp45;
                              if (tmp3Result18.isWebPlayerVideoUrl(tmp50)) {
                                let obj4 = {};
                                const merged2 = Object.assign(tmp45);
                                obj4.inlinePlaybackDisabled = true;
                                tmp31 = obj4;
                              }
                              tmp3Result18 = MediaFormatTesters;
                              tmp44 = type.type !== MessageEmbedTypes.GIFV || closure_1_1;
                            }
                            tmp34 = tmp8;
                            if (tmp32) {
                              tmp34 = tmp8;
                              if (null == type.video.proxyURL) {
                                const provider2 = type.provider;
                                let name;
                                if (provider2 != null) {
                                  name = provider2.name;
                                }
                                const effectiveVideoProvider = EmbedUtils.getEffectiveVideoProvider(name, type.video.url);
                                const tmp3Result19 = EmbedUtils;
                                tmp34 = tmp8;
                                if (tmp3Result20.shouldPlayVideoInline(effectiveVideoProvider)) {
                                  const obj5 = {};
                                  const merged3 = Object.assign(tmp8);
                                  obj5.showPlayButton = true;
                                  tmp34 = obj5;
                                }
                                tmp3Result20 = renderer_EmbedUtils;
                              }
                            }
                          }
                          const obj6 = {};
                          const merged4 = Object.assign(tmp8);
                          obj6.gifv = type.type === MessageEmbedTypes.GIFV;
                          ({ proxyURL: proxyURL2, url } = type.video);
                          let tmp43 = url;
                          if (null != proxyURL2) {
                            tmp43 = url;
                            if ("" !== proxyURL2) {
                              tmp43 = proxyURL2;
                            }
                          }
                          obj6.videoUrl = tmp43;
                          tmp34 = obj6;
                        }
                      }
                      let tmp55 = tmp31;
                      if (tmp54) {
                        const obj9 = {};
                        const merged5 = Object.assign(tmp31);
                        const intl = util.intl;
                        obj9.role = intl.string(util.t.OBp3V3);
                        const intl2 = util.intl;
                        obj9.hint = intl2.string(util.t.IPzNKE);
                        tmp55 = obj9;
                      }
                      embedBorderLeftColor = embedBorderLeftColor.embedBorderLeftColor;
                      let tmp60 = null != type.color;
                      if (tmp60) {
                        tmp60 = "" !== type.color;
                      }
                      if (tmp60) {
                        embedBorderLeftColor = processColor(type.color);
                      }
                      if (null != type.url) {
                        if ("" !== type.url) {
                          let parseEmbedTitleMarkup = MarkupParsers.parseEmbedTitleMarkupWithoutLinks;
                        }
                        if (type.type === MessageEmbedTypes.RICH) {
                          if (null != type.rawTitle) {
                            let rawTitle = parseEmbedTitleMarkup(type.rawTitle, channelId);
                          }
                          type = type.type;
                          if (MessageEmbedTypes.IMAGE !== type) {
                            if (MessageEmbedTypes.VIDEO !== type) {
                              if (MessageEmbedTypes.GIFV !== type) {
                                if (MessageEmbedTypes.RICH === type) {
                                  if (null != type.rawDescription) {
                                    const obj10 = { description: type.rawDescription, channelId, isField: false, ignoreCache, showListsAndHeaders, showMaskedLinks };
                                    let rawDescription = MarkupParsers.parseEmbedDescriptionMarkup(obj10);
                                    const tmp3Result21 = MarkupParsers;
                                  }
                                } else {
                                  rawDescription = type.rawDescription;
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
                              result = channelId(8119).parseEmbedTitleMarkup(rawName.rawName, channelId);
                              const obj = channelId(8119);
                            }
                            let result1 = null;
                            if (null != rawName.rawValue) {
                              const obj3 = { description: rawName.rawValue, channelId, isField: true, ignoreCache, replaceMap: { "\t": "" }, showListsAndHeaders, showMaskedLinks };
                              result1 = channelId(8119).parseEmbedDescriptionMarkup(obj3);
                              const obj2 = channelId(8119);
                            }
                            const obj4 = {};
                            const merged = Object.assign(rawName);
                            obj4.name = result;
                            obj4.value = result1;
                            return obj4;
                          });
                          let calendarFormatResult = null;
                          if (null != type.timestamp) {
                            calendarFormatResult = DateUtils.calendarFormat(type.timestamp);
                            const tmp3Result22 = DateUtils;
                          }
                          if (null != type.footer) {
                            const text = type.footer.text;
                            let combined = text;
                            if (null != calendarFormatResult) {
                              const _HermesInternal = HermesInternal;
                              combined = "" + text + " | " + calendarFormatResult;
                            }
                            const obj11 = {};
                            const merged6 = Object.assign(type.footer);
                            obj11.content = combined;
                            if (null != type.footer.iconProxyURL) {
                              if ("" !== type.footer.iconProxyURL) {
                                let iconURL = type.footer.iconProxyURL;
                              }
                              let tmp69 = obj11;
                              if (null != iconURL) {
                                const obj22 = RowGeneratorUtilsDefault;
                                obj11.iconURL = obj22.getImageSrc(iconURL, 16, 16, !closure_1_1);
                                tmp69 = obj11;
                              }
                            }
                            iconURL = type.footer.iconURL;
                          } else if (null != calendarFormatResult) {
                            const obj12 = { content: calendarFormatResult, text: "" };
                            tmp69 = obj12;
                          }
                          if (null == type.author) {
                            if (type.type !== MessageEmbedTypes.COMPONENTS) {
                              const obj13 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: type };
                              let isMediaScanPendingResult = !closure_1_10;
                              const mediaObscuredReasonFromBitmask = ObscuredMediaUtils.getMediaObscuredReasonFromBitmask(obj13, closure_1_9);
                              if (!closure_1_10) {
                                const obj14 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: type };
                                isMediaScanPendingResult = ObscuredMediaUtils.isMediaScanPending(obj14, closure_1_9);
                                const tmp3Result24 = ObscuredMediaUtils;
                              }
                              let isVerifiedTeenResult = tmp93;
                              if (mediaObscuredReasonFromBitmask.length > 0) {
                                isVerifiedTeenResult = AgeVerificationUtils.isVerifiedTeen();
                                const tmp3Result25 = AgeVerificationUtils;
                              }
                              let str10 = type.id;
                              if (str10 == null) {
                                str10 = "";
                              }
                              const obj15 = { id: str10, type: null, spoiler: null, obscure: null, obscureAwaitingScan: null, verifyAge: null, obscureHideControls: null, obscureIsOpaque: null, provider: null, author: null, rawTitle: null, title: null, url: null, rawDescription: null, description: null, thumbnail: null, image: null, images: null, fields: null, components: null, footer: null, video: null, borderLeftColor: null, providerColor: null, headerTextColor: null, bodyTextColor: null, referenceId: null, backgroundColor: null };
                              const type2 = type.type;
                              obj15.type = type2;
                              let str11 = "";
                              let str12 = "";
                              if (dependencyMap) {
                                const intl3 = util.intl;
                                str12 = intl3.string(util.t["F+x38C"]).toUpperCase();
                                const str13 = intl3.string(util.t["F+x38C"]);
                              }
                              obj15.spoiler = str12;
                              let stringResult = str11;
                              if (mediaObscuredReasonFromBitmask.length > 0) {
                                const intl4 = util.intl;
                                stringResult = intl4.string(util.t.SpxcUR);
                              }
                              obj15.obscure = stringResult;
                              if (isMediaScanPendingResult) {
                                const intl5 = util.intl;
                                str11 = intl5.string(util.t.MRdR7z);
                              }
                              obj15.obscureAwaitingScan = str11;
                              let tmp97 = tmp93;
                              if (mediaObscuredReasonFromBitmask.length > 0) {
                                tmp97 = closure_1_12;
                              }
                              obj15.verifyAge = tmp97;
                              obj15.obscureHideControls = isVerifiedTeenResult;
                              obj15.obscureIsOpaque = mediaObscuredReasonFromBitmask.length > 0;
                              const provider = type.provider;
                              obj15.provider = provider;
                              obj15.author = undefined;
                              obj15.rawTitle = type.rawTitle;
                              obj15.title = rawTitle;
                              const url4 = type.url;
                              obj15.url = url4;
                              obj15.rawDescription = type.rawDescription;
                              obj15.description = rawDescription;
                              obj15.thumbnail = tmp55;
                              obj15.image = tmp25;
                              obj15.images = mapped;
                              obj15.fields = mapped1;
                              obj15.components = tmp85;
                              obj15.footer = tmp69;
                              const video = type.video;
                              obj15.video = video;
                              obj15.borderLeftColor = embedBorderLeftColor;
                              ({ embedProviderColor: obj30.providerColor, embedHeaderTextColor: obj30.headerTextColor, embedBodyTextColor: obj30.bodyTextColor } = tmp59);
                              const referenceId = type.referenceId;
                              obj15.referenceId = referenceId;
                              obj15.backgroundColor = backgroundColor;
                              return obj15;
                            } else {
                              const components = type.components;
                              if (dependencyMap) {
                                let mapped2 = components.map((item) => {
                                  const obj = {};
                                  const merged = Object.assign(item);
                                  obj.spoiler = true;
                                  return obj;
                                });
                              } else {
                                mapped2 = components;
                              }
                              closure_1_13(mapped2);
                            }
                          } else {
                            if (null != type.author.iconProxyURL) {
                              if ("" !== type.author.iconProxyURL) {
                                let iconURL2 = type.author.iconProxyURL;
                              }
                              if (null != iconURL2) {
                                const obj16 = {};
                                const merged7 = Object.assign(type.author);
                                const obj24 = RowGeneratorUtilsDefault;
                                obj16.iconURL = obj24.getImageSrc(iconURL2, 16, 16, !closure_1_1);
                                let author = obj16;
                              } else {
                                author = type.author;
                              }
                            }
                            iconURL2 = type.author.iconURL;
                          }
                        }
                        rawTitle = type.rawTitle;
                      }
                      parseEmbedTitleMarkup = MarkupParsers.parseEmbedTitleMarkup;
                      tmp54 = null != tmp31 && type.type === MessageEmbedTypes.GIFV;
                      tmp59 = embedBorderLeftColor;
                    }
                    let tmp27 = null == tmp25;
                    if (!tmp27) {
                      tmp27 = !PlatformUtils.isIOS();
                      const tmp3Result26 = PlatformUtils;
                    }
                    let tmp28 = !tmp27;
                    if (!tmp27) {
                      tmp28 = null == type.thumbnail;
                    }
                    mapped = null;
                    if (tmp28) {
                      mapped = null;
                      if (null != tmp25) {
                        const items = [tmp25];
                        mapped = items;
                      }
                    }
                  }
                  tmp3Result15 = EmbedUtils;
                }
                tmp3Result14 = EmbedUtils;
              }
              obj = EmbedUtils;
            }
          }
        }
      }
    }
    return [];
  });
};