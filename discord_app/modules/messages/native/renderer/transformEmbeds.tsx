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
              let obj = EmbedUtils;
              if (obj.isServerShopArticleEmbed(type)) {
                return [];
              } else if (type.type === MessageEmbedTypes.VOICE_CHANNEL) {
                return [];
              } else {
                let tmp3Result = utils;
                if (tmp3Result.isContentInventoryFallbackEmbed(type)) {
                  if (!closure_1_11) {
                    return [];
                  }
                }
                tmp3Result = EmbedUtils;
                if (tmp3Result.isSocialLayerStorefrontArticleEmbed(type)) {
                  return [];
                } else {
                  let tmp8 = null;
                  if (closure_1_4) {
                    tmp8 = null;
                    if (null != type.thumbnail) {
                      const thumbnail = type.thumbnail;
                      ({ proxyURL, width, height } = thumbnail);
                      obj = {};
                      let merged = Object.assign(thumbnail);
                      obj.width = sanitizeMediaDimension.sanitizeMediaDimension(width);
                      const tmp3Result1 = sanitizeMediaDimension;
                      obj.height = sanitizeMediaDimension.sanitizeMediaDimension(height);
                      let imageSrc = proxyURL;
                      if (null != proxyURL) {
                        let obj5 = RowGeneratorUtilsDefault;
                        imageSrc = obj5.getImageSrc(proxyURL, width, height, !closure_1_1);
                      }
                      obj.proxyURL = imageSrc;
                      let obj6 = RowGeneratorUtilsDefault;
                      if (proxyURL == null) {
                        proxyURL = thumbnail.url;
                      }
                      obj.url = obj6.getImageSrc(proxyURL, width, height, !closure_1_1);
                      tmp8 = obj;
                      const tmp3Result2 = sanitizeMediaDimension;
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
                              obj = {};
                              const merged1 = Object.assign(tmp34);
                              ({ proxyURL: proxyURL3, url: url2 } = type.video);
                              let tmp49 = url2;
                              if (null != proxyURL3) {
                                tmp49 = url2;
                                if ("" !== proxyURL3) {
                                  tmp49 = proxyURL3;
                                }
                              }
                              obj.gifvUrlForPortal = tmp49;
                              tmp45 = obj;
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
                            if (tmp3Result3.isWebPlayerVideoUrl(tmp50)) {
                              const obj1 = {};
                              const merged2 = Object.assign(tmp45);
                              obj1.inlinePlaybackDisabled = true;
                              tmp31 = obj1;
                            }
                            tmp3Result3 = MediaFormatTesters;
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
                              const tmp3Result4 = EmbedUtils;
                              tmp34 = tmp8;
                              if (tmp3Result5.shouldPlayVideoInline(effectiveVideoProvider)) {
                                let obj2 = {};
                                const merged3 = Object.assign(tmp8);
                                obj2.showPlayButton = true;
                                tmp34 = obj2;
                              }
                              tmp3Result5 = renderer_EmbedUtils;
                            }
                          }
                        }
                        const obj3 = {};
                        const merged4 = Object.assign(tmp8);
                        obj3.gifv = type.type === MessageEmbedTypes.GIFV;
                        ({ proxyURL: proxyURL2, url } = type.video);
                        let tmp43 = url;
                        if (null != proxyURL2) {
                          tmp43 = url;
                          if ("" !== proxyURL2) {
                            tmp43 = proxyURL2;
                          }
                        }
                        obj3.videoUrl = tmp43;
                        tmp34 = obj3;
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
                                  const obj4 = {
                                    description: type.rawDescription,
                                    channelId,
                                    isField: false,
                                    ignoreCache,
                                    showListsAndHeaders,
                                    showMaskedLinks,
                                  };
                                  let rawDescription = MarkupParsers.parseEmbedDescriptionMarkup(obj4);
                                  const tmp3Result6 = MarkupParsers;
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
                            let obj = channelId(8089);
                            result = obj.parseEmbedTitleMarkup(rawName.rawName, channelId);
                          }
                          let result1 = null;
                          if (null != rawName.rawValue) {
                            obj = {
                              description: rawName.rawValue,
                              channelId,
                              isField: true,
                              ignoreCache,
                              replaceMap: { "\t": "" },
                              showListsAndHeaders,
                              showMaskedLinks,
                            };
                            result1 = channelId(8089).parseEmbedDescriptionMarkup(obj);
                            const obj2 = channelId(8089);
                          }
                          obj = {};
                          const merged = Object.assign(rawName);
                          obj.name = result;
                          obj.value = result1;
                          return obj;
                        });
                        let calendarFormatResult = null;
                        if (null != type.timestamp) {
                          calendarFormatResult = DateUtils.calendarFormat(type.timestamp);
                          const tmp3Result7 = DateUtils;
                        }
                        if (null != type.footer) {
                          const text = type.footer.text;
                          let combined = text;
                          if (null != calendarFormatResult) {
                            const _HermesInternal = HermesInternal;
                            combined = "" + text + " | " + calendarFormatResult;
                          }
                          obj5 = {};
                          const merged5 = Object.assign(type.footer);
                          obj5.content = combined;
                          if (null != type.footer.iconProxyURL) {
                            if ("" !== type.footer.iconProxyURL) {
                              let iconURL = type.footer.iconProxyURL;
                            }
                            let tmp64 = obj5;
                            if (null != iconURL) {
                              const obj20 = RowGeneratorUtilsDefault;
                              obj5.iconURL = obj20.getImageSrc(iconURL, 16, 16, !closure_1_1);
                              tmp64 = obj5;
                            }
                          }
                          iconURL = type.footer.iconURL;
                        } else if (null != calendarFormatResult) {
                          obj6 = { content: calendarFormatResult, text: "" };
                          tmp64 = obj6;
                        }
                        if (null == type.author) {
                          if (type.type !== MessageEmbedTypes.COMPONENTS) {
                            const obj7 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: type };
                            let isMediaScanPendingResult = !closure_1_10;
                            const mediaObscuredReasonFromBitmask = ObscuredMediaUtils.getMediaObscuredReasonFromBitmask(
                              obj7,
                              closure_1_9,
                            );
                            if (!closure_1_10) {
                              const obj8 = { type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed, media: type };
                              isMediaScanPendingResult = ObscuredMediaUtils.isMediaScanPending(obj8, closure_1_9);
                              const tmp3Result9 = ObscuredMediaUtils;
                            }
                            let isVerifiedTeenResult = tmp88;
                            if (mediaObscuredReasonFromBitmask.length > 0) {
                              isVerifiedTeenResult = AgeVerificationUtils.isVerifiedTeen();
                              const tmp3Result10 = AgeVerificationUtils;
                            }
                            let str10 = type.id;
                            if (str10 == null) {
                              str10 = "";
                            }
                            const obj9 = {
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
                            obj9.type = type2;
                            let str11 = "";
                            let str12 = "";
                            if (dependencyMap) {
                              const intl = util.intl;
                              str12 = intl.string(util.t["F+x38C"]).toUpperCase();
                              const str13 = intl.string(util.t["F+x38C"]);
                            }
                            obj9.spoiler = str12;
                            let stringResult = str11;
                            if (mediaObscuredReasonFromBitmask.length > 0) {
                              const intl2 = util.intl;
                              stringResult = intl2.string(util.t.SpxcUR);
                            }
                            obj9.obscure = stringResult;
                            if (isMediaScanPendingResult) {
                              const intl3 = util.intl;
                              str11 = intl3.string(util.t.MRdR7z);
                            }
                            obj9.obscureAwaitingScan = str11;
                            let tmp92 = tmp88;
                            if (mediaObscuredReasonFromBitmask.length > 0) {
                              tmp92 = closure_1_12;
                            }
                            obj9.verifyAge = tmp92;
                            obj9.obscureHideControls = isVerifiedTeenResult;
                            obj9.obscureIsOpaque = mediaObscuredReasonFromBitmask.length > 0;
                            const provider = type.provider;
                            obj9.provider = provider;
                            obj9.author = undefined;
                            obj9.rawTitle = type.rawTitle;
                            obj9.title = rawTitle;
                            const url4 = type.url;
                            obj9.url = url4;
                            obj9.rawDescription = type.rawDescription;
                            obj9.description = rawDescription;
                            obj9.thumbnail = tmp31;
                            obj9.image = tmp25;
                            obj9.images = mapped;
                            obj9.fields = mapped1;
                            obj9.components = tmp80;
                            obj9.footer = tmp64;
                            const video = type.video;
                            obj9.video = video;
                            obj9.borderLeftColor = embedBorderLeftColor;
                            ({
                              embedProviderColor: obj28.providerColor,
                              embedHeaderTextColor: obj28.headerTextColor,
                              embedBodyTextColor: obj28.bodyTextColor,
                            } = tmp54);
                            const referenceId = type.referenceId;
                            obj9.referenceId = referenceId;
                            obj9.backgroundColor = backgroundColor;
                            return obj9;
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
                              const obj10 = {};
                              const merged6 = Object.assign(type.author);
                              const obj22 = RowGeneratorUtilsDefault;
                              obj10.iconURL = obj22.getImageSrc(iconURL2, 16, 16, !closure_1_1);
                              let author = obj10;
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
                    const tmp3Result11 = PlatformUtils;
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
              }
            }
          }
        }
      }
    }
    return [];
  });
}
