// discord_app/modules/messages/native/renderer/transformEmbeds.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import Constants from "../../../../Constants.tsx";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import DateUtils from "../../../../utils/DateUtils.tsx";
import MediaFormatTesters from "../../MediaFormatTesters.tsx";
import AgeVerificationUtils from "../../../age_assurance/AgeVerificationUtils.tsx";
import EmbedUtils from "../../../../utils/EmbedUtils.tsx";
import ObscuredMediaUtils from "../../../explicit_media_redaction/ObscuredMediaUtils.tsx";
import ExplicitMediaRedactionModels from "../../../explicit_media_redaction/ExplicitMediaRedactionModels.tsx";
import renderer_EmbedUtils from "EmbedUtils.tsx";
import MarkupParsers from "MarkupParsers.tsx";
import sanitizeMediaDimension from "sanitizeMediaDimension.tsx";
import RowGeneratorUtilsDefault from "RowGeneratorUtils.tsx";
import utils from "../../../interaction_components/content_inventory_entry/utils.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const processColor = _mod17.processColor;
const MessageEmbedTypes = Constants.MessageEmbedTypes;
let result = size.fileFinishedImporting("modules/messages/native/renderer/transformEmbeds.tsx");

export default function transformEmbeds(arg0) {
  ({
    embeds,
    channelId: require,
    gifAutoPlay: importDefault,
    hasSpoilerEmbeds: dependencyMap,
    ignoreEmbedDescriptionCache: processColor,
    shouldInlineEmbedMedia: MessageEmbedTypes,
    colors: closure_5,
    showListsAndHeaders: closure_6,
    showMaskedLinks: closure_7,
    themedBackgroundColor: closure_8,
    enabledContentHarmTypeFlags: closure_9,
    authorIsBot: closure_10,
    showContentInventoryEntryFallbackEmbed: closure_11,
    shouldAgeVerify: closure_12,
    transformComponents: closure_13,
  } = arg0);
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
                if (tmp3Result13.isSocialLayerStorefrontArticleEmbed(type)) {
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
                      const tmp3Result14 = sanitizeMediaDimension;
                      obj2.height = sanitizeMediaDimension.sanitizeMediaDimension(height);
                      let imageSrc = proxyURL;
                      if (null != proxyURL) {
                        const obj6 = RowGeneratorUtilsDefault;
                        imageSrc = obj6.getImageSrc(proxyURL, width, height, !closure_1_1);
                      }
                      obj2.proxyURL = imageSrc;
                      const obj7 = RowGeneratorUtilsDefault;
                      if (proxyURL == null) {
                        proxyURL = thumbnail.url;
                      }
                      obj2.url = obj7.getImageSrc(proxyURL, width, height, !closure_1_1);
                      tmp8 = obj2;
                      const tmp3Result15 = sanitizeMediaDimension;
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
                            if (tmp3Result16.isWebPlayerVideoUrl(tmp50)) {
                              let obj4 = {};
                              const merged2 = Object.assign(tmp45);
                              obj4.inlinePlaybackDisabled = true;
                              tmp31 = obj4;
                            }
                            tmp3Result16 = MediaFormatTesters;
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
                              const tmp3Result17 = EmbedUtils;
                              tmp34 = tmp8;
                              if (tmp3Result18.shouldPlayVideoInline(effectiveVideoProvider)) {
                                const obj5 = {};
                                const merged3 = Object.assign(tmp8);
                                obj5.showPlayButton = true;
                                tmp34 = obj5;
                              }
                              tmp3Result18 = renderer_EmbedUtils;
                            }
                          }
                        }
                        const obj8 = {};
                        const merged4 = Object.assign(tmp8);
                        obj8.gifv = type.type === MessageEmbedTypes.GIFV;
                        ({ proxyURL: proxyURL2, url } = type.video);
                        let tmp43 = url;
                        if (null != proxyURL2) {
                          tmp43 = url;
                          if ("" !== proxyURL2) {
                            tmp43 = proxyURL2;
                          }
                        }
                        obj8.videoUrl = tmp43;
                        tmp34 = obj8;
                      }
                    }
                    embedBorderLeftColor = embedBorderLeftColor.embedBorderLeftColor;
                    let tmp55 = null != type.color;
                    if (tmp55) {
                      tmp55 = "" !== type.color;
                    }
                    if (tmp55) {
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
                                  const obj9 = {
                                    description: type.rawDescription,
                                    channelId,
                                    isField: false,
                                    ignoreCache,
                                    showListsAndHeaders,
                                    showMaskedLinks,
                                  };
                                  let rawDescription = MarkupParsers.parseEmbedDescriptionMarkup(obj9);
                                  const tmp3Result19 = MarkupParsers;
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
                            result = channelId(8308).parseEmbedTitleMarkup(rawName.rawName, channelId);
                            const obj = channelId(8308);
                          }
                          let result1 = null;
                          if (null != rawName.rawValue) {
                            const obj3 = {
                              description: rawName.rawValue,
                              channelId,
                              isField: true,
                              ignoreCache,
                              replaceMap: { "\t": "" },
                              showListsAndHeaders,
                              showMaskedLinks,
                            };
                            result1 = channelId(8308).parseEmbedDescriptionMarkup(obj3);
                            const obj2 = channelId(8308);
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
                          const tmp3Result20 = DateUtils;
                        }
                        if (null != type.footer) {
                          const text = type.footer.text;
                          let combined = text;
                          if (null != calendarFormatResult) {
                            const _HermesInternal = HermesInternal;
                            combined = "" + text + " | " + calendarFormatResult;
                          }
                          const obj10 = {};
                          const merged5 = Object.assign(type.footer);
                          obj10.content = combined;
                          if (null != type.footer.iconProxyURL) {
                            if ("" !== type.footer.iconProxyURL) {
                              let iconURL = type.footer.iconProxyURL;
                            }
                            let tmp64 = obj10;
                            if (null != iconURL) {
                              const obj20 = RowGeneratorUtilsDefault;
                              obj10.iconURL = obj20.getImageSrc(iconURL, 16, 16, !closure_1_1);
                              tmp64 = obj10;
                            }
                          }
                          iconURL = type.footer.iconURL;
                        } else if (null != calendarFormatResult) {
                          const obj11 = { content: calendarFormatResult, text: "" };
                          tmp64 = obj11;
                        }
                        if (null == type.author) {
                          if (type.type !== MessageEmbedTypes.COMPONENTS) {
                            const obj12 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: type };
                            let isMediaScanPendingResult = !closure_1_10;
                            const mediaObscuredReasonFromBitmask = ObscuredMediaUtils.getMediaObscuredReasonFromBitmask(
                              obj12,
                              closure_1_9,
                            );
                            if (!closure_1_10) {
                              const obj13 = {
                                type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed,
                                media: type,
                              };
                              isMediaScanPendingResult = ObscuredMediaUtils.isMediaScanPending(obj13, closure_1_9);
                              const tmp3Result22 = ObscuredMediaUtils;
                            }
                            let isVerifiedTeenResult = tmp88;
                            if (mediaObscuredReasonFromBitmask.length > 0) {
                              isVerifiedTeenResult = AgeVerificationUtils.isVerifiedTeen();
                              const tmp3Result23 = AgeVerificationUtils;
                            }
                            let str10 = type.id;
                            if (str10 == null) {
                              str10 = "";
                            }
                            const obj14 = {
                              id: str10,
                              type: null,
                              spoiler: null,
                              obscure: null,
                              obscureAwaitingScan: null,
                              verifyAge: null,
                              obscureHideControls: null,
                              obscureIsOpaque: null,
                              provider: null,
                              author: null,
                              rawTitle: null,
                              title: null,
                              url: null,
                              rawDescription: null,
                              description: null,
                              thumbnail: null,
                              image: null,
                              images: null,
                              fields: null,
                              components: null,
                              footer: null,
                              video: null,
                              borderLeftColor: null,
                              providerColor: null,
                              headerTextColor: null,
                              bodyTextColor: null,
                              referenceId: null,
                              backgroundColor: null,
                            };
                            const type2 = type.type;
                            obj14.type = type2;
                            let str11 = "";
                            let str12 = "";
                            if (dependencyMap) {
                              const intl = util.intl;
                              str12 = intl.string(util.t["F+x38C"]).toUpperCase();
                              const str13 = intl.string(util.t["F+x38C"]);
                            }
                            obj14.spoiler = str12;
                            let stringResult = str11;
                            if (mediaObscuredReasonFromBitmask.length > 0) {
                              const intl2 = util.intl;
                              stringResult = intl2.string(util.t.SpxcUR);
                            }
                            obj14.obscure = stringResult;
                            if (isMediaScanPendingResult) {
                              const intl3 = util.intl;
                              str11 = intl3.string(util.t.MRdR7z);
                            }
                            obj14.obscureAwaitingScan = str11;
                            let tmp92 = tmp88;
                            if (mediaObscuredReasonFromBitmask.length > 0) {
                              tmp92 = closure_1_12;
                            }
                            obj14.verifyAge = tmp92;
                            obj14.obscureHideControls = isVerifiedTeenResult;
                            obj14.obscureIsOpaque = mediaObscuredReasonFromBitmask.length > 0;
                            const provider = type.provider;
                            obj14.provider = provider;
                            obj14.author = undefined;
                            obj14.rawTitle = type.rawTitle;
                            obj14.title = rawTitle;
                            const url4 = type.url;
                            obj14.url = url4;
                            obj14.rawDescription = type.rawDescription;
                            obj14.description = rawDescription;
                            obj14.thumbnail = tmp31;
                            obj14.image = tmp25;
                            obj14.images = mapped;
                            obj14.fields = mapped1;
                            obj14.components = tmp80;
                            obj14.footer = tmp64;
                            const video = type.video;
                            obj14.video = video;
                            obj14.borderLeftColor = embedBorderLeftColor;
                            ({
                              embedProviderColor: obj28.providerColor,
                              embedHeaderTextColor: obj28.headerTextColor,
                              embedBodyTextColor: obj28.bodyTextColor,
                            } = tmp54);
                            const referenceId = type.referenceId;
                            obj14.referenceId = referenceId;
                            obj14.backgroundColor = backgroundColor;
                            return obj14;
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
                              const obj15 = {};
                              const merged6 = Object.assign(type.author);
                              const obj22 = RowGeneratorUtilsDefault;
                              obj15.iconURL = obj22.getImageSrc(iconURL2, 16, 16, !closure_1_1);
                              let author = obj15;
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
                    tmp54 = embedBorderLeftColor;
                  }
                  let tmp27 = null == tmp25;
                  if (!tmp27) {
                    tmp27 = !PlatformUtils.isIOS();
                    const tmp3Result24 = PlatformUtils;
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
                tmp3Result13 = EmbedUtils;
              }
              obj = EmbedUtils;
            }
          }
        }
      }
    }
    return [];
  });
}
