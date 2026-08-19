// discord_app/modules/messages/native/renderer/transformEmbeds.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import obj1322 from "../../../../utils/PlatformUtils.tsx";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import resetCache from "../../../../utils/DateUtils.tsx";
import urlMatchesFileExtension from "../../MediaFormatTesters.tsx";
import getEffectiveVideoProvider from "../../../../utils/EmbedUtils.tsx";
import useAgeVerificationRunner from "../../../age_assurance/AgeVerificationUtils.tsx";
import getEligibleHarmTypesConfigsForContext from "../../../explicit_media_redaction/ObscuredMediaUtils.tsx";
import ContentHarmTypeChannel from "../../../explicit_media_redaction/ExplicitMediaRedactionModels.tsx";
import frozen from "EmbedUtils.tsx";
import parseEmbedTitleMarkup2 from "MarkupParsers.tsx";
import sanitizeMediaDimension from "sanitizeMediaDimension.tsx";
import nativeStylePropertiesDefault from "RowGeneratorUtils.tsx";
import isContentInventoryFallbackEmbed from "../../../interaction_components/content_inventory_entry/utils.tsx";
import apexExperiment from "../../../slayer_storefront/experiments/SocialLayerStorefrontMobilePurchasingExperiment.tsx";

const processColor = get_ActivityIndicator.processColor;
const MessageEmbedTypes = ME.MessageEmbedTypes;
let result = obj132.fileFinishedImporting("modules/messages/native/renderer/transformEmbeds.tsx");

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
      const obj4 = nativeStylePropertiesDefault;
      imageSrc = obj4.getImageSrc(proxyURL, width, height, !closure_1);
    }
    obj.proxyURL = imageSrc;
    if (proxyURL == null) {
      proxyURL = image.url;
    }
    obj.url = nativeStylePropertiesDefault.getImageSrc(proxyURL, width, height, !closure_1);
    return obj;
  }
  return embeds.flatMap((item, index) => {
    if (item.type !== MessageEmbedTypes.POST_PREVIEW) {
      if (item.type !== MessageEmbedTypes.GIFT) {
        if (item.type !== MessageEmbedTypes.SAFETY_POLICY_NOTICE) {
          if (item.type !== MessageEmbedTypes.SAFETY_SYSTEM_NOTIFICATION) {
            if (item.type !== MessageEmbedTypes.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
              if (item.type === MessageEmbedTypes.COMPONENTS) {
                return [];
              }
              let obj = getEffectiveVideoProvider;
              if (obj.isServerShopArticleEmbed(item)) {
                return [];
              } else if (item.type === MessageEmbedTypes.VOICE_CHANNEL) {
                return [];
              } else {
                let tmp3Result = isContentInventoryFallbackEmbed;
                if (tmp3Result.isContentInventoryFallbackEmbed(item)) {
                  if (!closure_11) {
                    return [];
                  }
                }
                tmp3Result = getEffectiveVideoProvider;
                if (tmp3Result.isSocialLayerStorefrontArticleEmbed(item)) {
                  if (tmp3Result1.getIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "transformEmbeds" })) {
                    return [];
                  }
                  tmp3Result1 = apexExperiment;
                }
                let tmp8 = null;
                if (closure_4) {
                  tmp8 = null;
                  if (null != item.thumbnail) {
                    const thumbnail = item.thumbnail;
                    ({ proxyURL, width, height } = thumbnail);
                    obj = {};
                    let merged = Object.assign(thumbnail);
                    obj.width = sanitizeMediaDimension.sanitizeMediaDimension(width);
                    const tmp3Result2 = sanitizeMediaDimension;
                    obj.height = sanitizeMediaDimension.sanitizeMediaDimension(height);
                    let imageSrc = proxyURL;
                    if (null != proxyURL) {
                      let obj6 = nativeStylePropertiesDefault;
                      imageSrc = obj6.getImageSrc(proxyURL, width, height, !closure_1);
                    }
                    obj.proxyURL = imageSrc;
                    let obj7 = nativeStylePropertiesDefault;
                    if (proxyURL == null) {
                      proxyURL = thumbnail.url;
                    }
                    obj.url = obj7.getImageSrc(proxyURL, width, height, !closure_1);
                    tmp8 = obj;
                    const tmp3Result3 = sanitizeMediaDimension;
                  }
                }
                let tmp25 = null;
                if (closure_4) {
                  tmp25 = null;
                  if (null != item.image) {
                    tmp25 = renderEmbedMedia(item.image);
                  }
                }
                if (closure_4) {
                  if (null != item.images) {
                    const images = item.images;
                    let mapped = images.map(renderEmbedMedia);
                  }
                  let tmp31 = tmp8;
                  if (null != tmp8) {
                    tmp31 = tmp8;
                    if (null != item.video) {
                      if (item.type !== MessageEmbedTypes.GIFV) {
                        if (tmp32) {
                          let tmp45 = tmp34;
                          if (!tmp44) {
                            obj = {};
                            const merged1 = Object.assign(tmp34);
                            ({ proxyURL: proxyURL3, url: url2 } = item.video);
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
                          ({ proxyURL: proxyURL4, url: url3 } = item.video);
                          let tmp50 = url3;
                          if (null != proxyURL4) {
                            tmp50 = url3;
                            if ("" !== proxyURL4) {
                              tmp50 = proxyURL4;
                            }
                          }
                          tmp31 = tmp45;
                          if (tmp3Result4.isWebPlayerVideoUrl(tmp50)) {
                            obj1 = {};
                            const merged2 = Object.assign(tmp45);
                            obj1.inlinePlaybackDisabled = true;
                            tmp31 = obj1;
                          }
                          tmp3Result4 = urlMatchesFileExtension;
                          tmp44 = item.type !== MessageEmbedTypes.GIFV || closure_1;
                        }
                        tmp34 = tmp8;
                        if (tmp32) {
                          tmp34 = tmp8;
                          if (null == item.video.proxyURL) {
                            const provider2 = item.provider;
                            let name;
                            if (provider2 != null) {
                              name = provider2.name;
                            }
                            const effectiveVideoProvider = getEffectiveVideoProvider.getEffectiveVideoProvider(name, item.video.url);
                            const tmp3Result5 = getEffectiveVideoProvider;
                            tmp34 = tmp8;
                            if (tmp3Result6.shouldPlayVideoInline(effectiveVideoProvider)) {
                              let obj2 = {};
                              const merged3 = Object.assign(tmp8);
                              obj2.showPlayButton = true;
                              tmp34 = obj2;
                            }
                            tmp3Result6 = frozen;
                          }
                        }
                      }
                      const obj3 = {};
                      const merged4 = Object.assign(tmp8);
                      obj3.gifv = item.type === MessageEmbedTypes.GIFV;
                      ({ proxyURL: proxyURL2, url } = item.video);
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
                  let tmp55 = null != item.color;
                  if (tmp55) {
                    tmp55 = "" !== item.color;
                  }
                  if (tmp55) {
                    embedBorderLeftColor = processColor(item.color);
                  }
                  if (null != item.url) {
                    if ("" !== item.url) {
                      let parseEmbedTitleMarkup = parseEmbedTitleMarkup2.parseEmbedTitleMarkupWithoutLinks;
                    }
                    if (item.type === MessageEmbedTypes.RICH) {
                      if (null != item.rawTitle) {
                        let rawTitle = parseEmbedTitleMarkup(item.rawTitle, closure_0);
                      }
                      const type = item.type;
                      if (MessageEmbedTypes.IMAGE !== type) {
                        if (MessageEmbedTypes.VIDEO !== type) {
                          if (MessageEmbedTypes.GIFV !== type) {
                            if (MessageEmbedTypes.RICH === type) {
                              if (null != item.rawDescription) {
                                const obj4 = { description: null, channelId: null, isField: false, ignoreCache: null, showListsAndHeaders: null, showMaskedLinks: null };
                                obj4[0] = item.rawDescription;
                                obj4[1] = closure_0;
                                obj4[3] = closure_3;
                                obj4[4] = closure_6;
                                obj4[5] = closure_7;
                                let rawDescription = parseEmbedTitleMarkup2.parseEmbedDescriptionMarkup(obj4);
                                const tmp3Result7 = parseEmbedTitleMarkup2;
                              }
                            } else {
                              rawDescription = item.rawDescription;
                            }
                          }
                        }
                      }
                      let fields = item.fields;
                      if (fields == null) {
                        fields = [];
                      }
                      const mapped1 = fields.map((item, index) => {
                        let result = null;
                        if (null != item.rawName) {
                          let obj = closure_1_0(closure_1_2[10]);
                          result = obj.parseEmbedTitleMarkup(item.rawName, closure_0);
                        }
                        let result1 = null;
                        if (null != item.rawValue) {
                          obj = { description: null, channelId: null, isField: true, ignoreCache: null, replaceMap: null, showListsAndHeaders: null, showMaskedLinks: null };
                          obj[0] = item.rawValue;
                          obj[1] = closure_0;
                          obj[3] = closure_3;
                          obj[4] = { "\t": "" };
                          obj[5] = closure_6;
                          obj[6] = closure_7;
                          result1 = closure_1_0(closure_1_2[10]).parseEmbedDescriptionMarkup(obj);
                          const obj2 = closure_1_0(closure_1_2[10]);
                        }
                        obj = {};
                        const merged = Object.assign(item);
                        obj.name = result;
                        obj.value = result1;
                        return obj;
                      });
                      let calendarFormatResult = null;
                      if (null != item.timestamp) {
                        calendarFormatResult = resetCache.calendarFormat(item.timestamp);
                        const tmp3Result8 = resetCache;
                      }
                      if (null != item.footer) {
                        const text = item.footer.text;
                        let combined = text;
                        if (null != calendarFormatResult) {
                          const _HermesInternal = HermesInternal;
                          combined = "" + text + " | " + calendarFormatResult;
                        }
                        const obj5 = {};
                        const merged5 = Object.assign(item.footer);
                        obj5.content = combined;
                        if (null != item.footer.iconProxyURL) {
                          if ("" !== item.footer.iconProxyURL) {
                            let iconURL = item.footer.iconProxyURL;
                          }
                          let tmp64 = obj5;
                          if (null != iconURL) {
                            const obj21 = nativeStylePropertiesDefault;
                            obj5.iconURL = obj21.getImageSrc(iconURL, 16, 16, !closure_1);
                            tmp64 = obj5;
                          }
                        }
                        iconURL = item.footer.iconURL;
                      } else if (null != calendarFormatResult) {
                        obj6 = { content: null, text: "" };
                        obj6[0] = calendarFormatResult;
                        tmp64 = obj6;
                      }
                      if (null == item.author) {
                        if (item.type !== MessageEmbedTypes.COMPONENTS) {
                          obj7 = { type: null, media: null };
                          obj7[0] = ContentHarmTypeChannel.ObscuredMediaTypes.Embed;
                          obj7[1] = item;
                          let isMediaScanPendingResult = !closure_10;
                          const mediaObscuredReasonFromBitmask = getEligibleHarmTypesConfigsForContext.getMediaObscuredReasonFromBitmask(obj7, closure_9);
                          if (!closure_10) {
                            const obj8 = { type: null, media: null };
                            obj8[0] = ContentHarmTypeChannel.ObscuredMediaTypes.Embed;
                            obj8[1] = item;
                            isMediaScanPendingResult = getEligibleHarmTypesConfigsForContext.isMediaScanPending(obj8, closure_9);
                            const tmp3Result10 = getEligibleHarmTypesConfigsForContext;
                          }
                          let isVerifiedTeenResult = tmp88;
                          if (mediaObscuredReasonFromBitmask.length > 0) {
                            isVerifiedTeenResult = useAgeVerificationRunner.isVerifiedTeen();
                            const tmp3Result11 = useAgeVerificationRunner;
                          }
                          let str10 = item.id;
                          if (str10 == null) {
                            str10 = "";
                          }
                          const obj9 = { id: null, type: null, spoiler: null, obscure: null, obscureAwaitingScan: null, verifyAge: null, obscureHideControls: null, obscureIsOpaque: null, provider: null, author: null, rawTitle: null, title: null, url: null, rawDescription: null, description: null, thumbnail: null, image: null, images: null, fields: null, components: null, footer: null, video: null, borderLeftColor: null, providerColor: null, headerTextColor: null, bodyTextColor: null, referenceId: null, backgroundColor: null };
                          obj9[0] = str10;
                          const type2 = item.type;
                          obj9[1] = type2;
                          let str11 = "";
                          let str12 = "";
                          if (closure_2) {
                            const intl = getSystemLocale.intl;
                            str12 = intl.string(getSystemLocale.t["F+x38C"]).toUpperCase();
                            const str13 = intl.string(getSystemLocale.t["F+x38C"]);
                          }
                          obj9[2] = str12;
                          let stringResult = str11;
                          if (mediaObscuredReasonFromBitmask.length > 0) {
                            const intl2 = getSystemLocale.intl;
                            stringResult = intl2.string(getSystemLocale.t.SpxcUR);
                          }
                          obj9[3] = stringResult;
                          if (isMediaScanPendingResult) {
                            const intl3 = getSystemLocale.intl;
                            str11 = intl3.string(getSystemLocale.t.MRdR7z);
                          }
                          obj9[4] = str11;
                          let tmp92 = tmp88;
                          if (mediaObscuredReasonFromBitmask.length > 0) {
                            tmp92 = closure_12;
                          }
                          obj9[5] = tmp92;
                          obj9[6] = isVerifiedTeenResult;
                          obj9[7] = mediaObscuredReasonFromBitmask.length > 0;
                          const provider = item.provider;
                          obj9[8] = provider;
                          obj9[9] = undefined;
                          obj9[10] = item.rawTitle;
                          obj9[11] = rawTitle;
                          const url4 = item.url;
                          obj9[12] = url4;
                          obj9[13] = item.rawDescription;
                          obj9[14] = rawDescription;
                          obj9[15] = tmp31;
                          obj9[16] = tmp25;
                          obj9[17] = mapped;
                          obj9[18] = mapped1;
                          obj9[19] = tmp80;
                          obj9[20] = tmp64;
                          const video = item.video;
                          obj9[21] = video;
                          obj9[22] = embedBorderLeftColor;
                          ({ embedProviderColor: obj29[23], embedHeaderTextColor: obj29[24], embedBodyTextColor: obj29[25] } = tmp54);
                          const referenceId = item.referenceId;
                          obj9[26] = referenceId;
                          obj9[27] = closure_8;
                          return obj9;
                        } else {
                          const components = item.components;
                          if (closure_2) {
                            let mapped2 = components.map((item, index) => {
                              const obj = {};
                              const merged = Object.assign(item);
                              obj.spoiler = true;
                              return obj;
                            });
                          } else {
                            mapped2 = components;
                          }
                          callback(mapped2);
                        }
                      } else {
                        if (null != item.author.iconProxyURL) {
                          if ("" !== item.author.iconProxyURL) {
                            let iconURL2 = item.author.iconProxyURL;
                          }
                          if (null != iconURL2) {
                            const obj10 = {};
                            const merged6 = Object.assign(item.author);
                            const obj23 = nativeStylePropertiesDefault;
                            obj10.iconURL = obj23.getImageSrc(iconURL2, 16, 16, !closure_1);
                            let author = obj10;
                          } else {
                            author = item.author;
                          }
                        }
                        iconURL2 = item.author.iconURL;
                      }
                    }
                    rawTitle = item.rawTitle;
                  }
                  parseEmbedTitleMarkup = parseEmbedTitleMarkup2.parseEmbedTitleMarkup;
                  tmp54 = embedBorderLeftColor;
                }
                let tmp27 = null == tmp25;
                if (!tmp27) {
                  tmp27 = !obj1322.isIOS();
                  const tmp3Result12 = obj1322;
                }
                let tmp28 = !tmp27;
                if (!tmp27) {
                  tmp28 = null == item.thumbnail;
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
    return [];
  });
};