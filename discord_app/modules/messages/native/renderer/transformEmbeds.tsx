// discord_app/modules/messages/native/renderer/transformEmbeds.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import Constants from "../../../../Constants.tsx";
import utils_ColorUtils from "../../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import util from "../../../../intl/index.native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import DateUtils from "../../../../utils/DateUtils.tsx";
import MediaFormatTesters from "../../MediaFormatTesters.tsx";
import EmbedUtils from "../../../../utils/EmbedUtils.tsx";
import AgeVerificationUtils from "../../../age_assurance/AgeVerificationUtils.tsx";
import ObscuredMediaUtils from "../../../explicit_media_redaction/ObscuredMediaUtils.tsx";
import ExplicitMediaRedactionModels from "../../../explicit_media_redaction/ExplicitMediaRedactionModels.tsx";
import renderer_EmbedUtils from "EmbedUtils.tsx";
import RowGeneratorUtilsDefault from "RowGeneratorUtils.tsx";
import sanitizeMediaDimension from "sanitizeMediaDimension.tsx";
import MarkupParsers from "MarkupParsers.tsx";
import utils from "../../../interaction_components/content_inventory_entry/utils.tsx";
import isConjureProjectLinkEmbedDefault from "../../../conjure/share/isConjureProjectLinkEmbed.tsx";
import NativeChatCapabilities from "../../../chat/native/NativeChatCapabilities.tsx";
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
                if (tmp3Result15.isSocialLayerStorefrontArticleEmbed(type)) {
                  return [];
                } else {
                  if (tmp3Result16.isUserProfileArticleEmbed(type)) {
                    return [];
                  } else {
                    let obj4 = importDefault;
                    if (isConjureProjectLinkEmbedDefault(type)) {
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
                          const tmp3Result17 = sanitizeMediaDimension;
                          obj2.height = sanitizeMediaDimension.sanitizeMediaDimension(height);
                          let imageSrc = proxyURL;
                          if (null != proxyURL) {
                            const obj4Result = obj4(8707);
                            imageSrc = obj4Result.getImageSrc(proxyURL, width, height, !closure_1_1);
                          }
                          obj2.proxyURL = imageSrc;
                          const obj4Result3 = obj4(8707);
                          if (proxyURL == null) {
                            proxyURL = thumbnail.url;
                          }
                          obj2.url = obj4Result3.getImageSrc(proxyURL, width, height, !closure_1_1);
                          tmp8 = obj2;
                          const tmp3Result18 = sanitizeMediaDimension;
                        }
                      }
                      let tmp23 = null;
                      if (closure_1_4) {
                        tmp23 = null;
                        if (null != type.image) {
                          tmp23 = renderEmbedMedia(type.image);
                        }
                      }
                      if (closure_1_4) {
                        if (null != type.images) {
                          const images = type.images;
                          let mapped = images.map(renderEmbedMedia);
                        }
                        let tmp29 = tmp8;
                        if (null != tmp8) {
                          tmp29 = tmp8;
                          if (null != type.video) {
                            let isWebviewVideoResult =
                              type.type === MessageEmbedTypes.VIDEO ||
                              type.type === MessageEmbedTypes.RICH ||
                              type.type === MessageEmbedTypes.ARTICLE;
                            if (type.type !== MessageEmbedTypes.GIFV) {
                              if (isWebviewVideoResult) {
                                let tmp41 = tmp32;
                                if (!tmp40) {
                                  let obj3 = {};
                                  const merged1 = Object.assign(tmp32);
                                  ({ proxyURL: proxyURL3, url: url2 } = type.video);
                                  let tmp45 = url2;
                                  if (null != proxyURL3) {
                                    tmp45 = url2;
                                    if ("" !== proxyURL3) {
                                      tmp45 = proxyURL3;
                                    }
                                  }
                                  obj3.gifvUrlForPortal = tmp45;
                                  tmp41 = obj3;
                                }
                                ({ proxyURL: proxyURL4, url: url3 } = type.video);
                                let tmp46 = url3;
                                if (null != proxyURL4) {
                                  tmp46 = url3;
                                  if ("" !== proxyURL4) {
                                    tmp46 = proxyURL4;
                                  }
                                }
                                tmp29 = tmp41;
                                if (tmp3Result19.isWebPlayerVideoUrl(tmp46)) {
                                  const obj5 = {};
                                  const merged2 = Object.assign(tmp41);
                                  obj5.inlinePlaybackDisabled = true;
                                  tmp29 = obj5;
                                }
                                tmp3Result19 = MediaFormatTesters;
                                tmp40 = type.type !== MessageEmbedTypes.GIFV || closure_1_1;
                              }
                              if (isWebviewVideoResult) {
                                isWebviewVideoResult = renderer_EmbedUtils.isWebviewVideo(type);
                                const tmp3Result20 = renderer_EmbedUtils;
                              }
                              tmp32 = tmp8;
                              if (isWebviewVideoResult) {
                                const obj6 = {};
                                const merged3 = Object.assign(tmp8);
                                obj6.showPlayButton = true;
                                tmp32 = obj6;
                              }
                            }
                            const obj7 = {};
                            const merged4 = Object.assign(tmp8);
                            obj7.gifv = type.type === MessageEmbedTypes.GIFV;
                            ({ proxyURL: proxyURL2, url } = type.video);
                            let tmp39 = url;
                            if (null != proxyURL2) {
                              tmp39 = url;
                              if ("" !== proxyURL2) {
                                tmp39 = proxyURL2;
                              }
                            }
                            obj7.videoUrl = tmp39;
                            tmp32 = obj7;
                          }
                        }
                        let tmp51 = tmp29;
                        if (tmp50) {
                          const obj8 = {};
                          const merged5 = Object.assign(tmp29);
                          const intl = util.intl;
                          obj8.role = intl.string(util.t.OBp3V3);
                          const intl2 = util.intl;
                          obj8.hint = intl2.string(util.t.IPzNKE);
                          tmp51 = obj8;
                        }
                        embedBorderLeftColor = embedBorderLeftColor.embedBorderLeftColor;
                        if (null != type.color) {
                          embedBorderLeftColor = processColor(utils_ColorUtils.int2hsl(type.color));
                          const tmp3Result21 = utils_ColorUtils;
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
                                      const tmp3Result22 = MarkupParsers;
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
                                result = channelId(14242).parseEmbedTitleMarkup(rawName.rawName, channelId);
                                const obj = channelId(14242);
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
                                result1 = channelId(14242).parseEmbedDescriptionMarkup(obj3);
                                const obj2 = channelId(14242);
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
                              const tmp3Result23 = DateUtils;
                            }
                            if (null != type.footer) {
                              const text = type.footer.text;
                              let combined = text;
                              if (null != calendarFormatResult) {
                                const _HermesInternal = HermesInternal;
                                combined = "" + text + " | " + calendarFormatResult;
                              }
                              const obj10 = {};
                              const merged6 = Object.assign(type.footer);
                              obj10.content = combined;
                              if (null != type.footer.iconProxyURL) {
                                if ("" !== type.footer.iconProxyURL) {
                                  let iconURL = type.footer.iconProxyURL;
                                }
                                let tmp64 = obj10;
                                if (null != iconURL) {
                                  const obj4Result4 = obj4(8707);
                                  obj10.iconURL = obj4Result4.getImageSrc(iconURL, 16, 16, !closure_1_1);
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
                                const obj12 = {
                                  type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed,
                                  media: type,
                                };
                                let isMediaScanPendingResult = !closure_1_10;
                                const mediaObscuredReasonFromBitmask =
                                  ObscuredMediaUtils.getMediaObscuredReasonFromBitmask(obj12, closure_1_9);
                                if (!closure_1_10) {
                                  const obj13 = {
                                    type: ExplicitMediaRedactionModels.ObscuredMediaTypes.Embed,
                                    media: type,
                                  };
                                  isMediaScanPendingResult = ObscuredMediaUtils.isMediaScanPending(obj13, closure_1_9);
                                  const tmp3Result25 = ObscuredMediaUtils;
                                }
                                let isVerifiedTeenResult = tmp86;
                                if (mediaObscuredReasonFromBitmask.length > 0) {
                                  isVerifiedTeenResult = AgeVerificationUtils.isVerifiedTeen();
                                  const tmp3Result26 = AgeVerificationUtils;
                                }
                                let tmp88 = type.type === MessageEmbedTypes.AUDIO;
                                if (tmp88) {
                                  tmp88 = !NativeChatCapabilities.nativeChatSupportsAudioEmbeds();
                                  const tmp3Result27 = NativeChatCapabilities;
                                }
                                let str9 = type.id;
                                if (str9 == null) {
                                  str9 = "";
                                }
                                const obj14 = {
                                  id: str9,
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
                                  audio: null,
                                  borderLeftColor: null,
                                  providerColor: null,
                                  headerTextColor: null,
                                  bodyTextColor: null,
                                  referenceId: null,
                                  backgroundColor: null,
                                };
                                if (tmp88) {
                                  const RICH = MessageEmbedTypes.RICH;
                                }
                                obj14.type = RICH;
                                let str10 = "";
                                let str11 = "";
                                if (dependencyMap) {
                                  const intl3 = util.intl;
                                  str11 = intl3.string(util.t["F+x38C"]).toUpperCase();
                                  const str12 = intl3.string(util.t["F+x38C"]);
                                }
                                obj14.spoiler = str11;
                                let stringResult = str10;
                                if (mediaObscuredReasonFromBitmask.length > 0) {
                                  const intl4 = util.intl;
                                  stringResult = intl4.string(util.t.SpxcUR);
                                }
                                obj14.obscure = stringResult;
                                if (isMediaScanPendingResult) {
                                  const intl5 = util.intl;
                                  str10 = intl5.string(util.t.MRdR7z);
                                }
                                obj14.obscureAwaitingScan = str10;
                                let tmp91 = tmp86;
                                if (mediaObscuredReasonFromBitmask.length > 0) {
                                  tmp91 = closure_1_12;
                                }
                                obj14.verifyAge = tmp91;
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
                                obj14.thumbnail = tmp51;
                                obj14.image = tmp23;
                                obj14.images = mapped;
                                obj14.fields = mapped1;
                                obj14.components = tmp78;
                                obj14.footer = tmp64;
                                const video = type.video;
                                obj14.video = video;
                                let audio;
                                if (!tmp88) {
                                  audio = type.audio;
                                }
                                obj14.audio = audio;
                                obj14.borderLeftColor = embedBorderLeftColor;
                                ({
                                  embedProviderColor: obj32.providerColor,
                                  embedHeaderTextColor: obj32.headerTextColor,
                                  embedBodyTextColor: obj32.bodyTextColor,
                                } = tmp55);
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
                                  const merged7 = Object.assign(type.author);
                                  obj4 = obj4(8707);
                                  obj15.iconURL = obj4.getImageSrc(iconURL2, 16, 16, !closure_1_1);
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
                        tmp50 = null != tmp29 && type.type === MessageEmbedTypes.GIFV;
                        tmp55 = embedBorderLeftColor;
                      }
                      let tmp25 = null == tmp23;
                      if (!tmp25) {
                        tmp25 = !PlatformUtils.isIOS();
                        const tmp3Result28 = PlatformUtils;
                      }
                      let tmp26 = !tmp25;
                      if (!tmp25) {
                        tmp26 = null == type.thumbnail;
                      }
                      mapped = null;
                      if (tmp26) {
                        mapped = null;
                        if (null != tmp23) {
                          items = [tmp23];
                          mapped = items;
                        }
                      }
                    }
                  }
                  tmp3Result16 = EmbedUtils;
                }
                tmp3Result15 = EmbedUtils;
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
