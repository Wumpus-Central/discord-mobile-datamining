// === Module 8432: transformEmbeds ===

// Module 8432 (transformEmbeds)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ME from "ME" /* 676 */;

const processColor = get_ActivityIndicator.processColor;
const MessageEmbedTypes = ME.MessageEmbedTypes;
let result = set.fileFinishedImporting("modules/messages/native/renderer/transformEmbeds.tsx");

export default function transformEmbeds(arg0) {
  ({ embeds, channelId: require, gifAutoPlay: importDefault, hasSpoilerEmbeds: dependencyMap, ignoreEmbedDescriptionCache: processColor, shouldInlineEmbedMedia: MessageEmbedTypes, colors: closure_5, showListsAndHeaders: closure_6, showMaskedLinks: closure_7, themedBackgroundColor: closure_8, enabledContentHarmTypeFlags: closure_9, authorIsBot: closure_10, showContentInventoryEntryFallbackEmbed: closure_11, shouldAgeVerify: closure_12, transformComponents: closure_13 } = arg0);
  function renderEmbedMedia(image) {
    ({ proxyURL, width, height } = image);
    const obj = {};
    const merged = Object.assign(image);
    obj.width = closure_1_0(closure_1_2[2]).sanitizeMediaDimension(width);
    const obj2 = closure_1_0(closure_1_2[2]);
    obj.height = closure_1_0(closure_1_2[2]).sanitizeMediaDimension(height);
    let imageSrc = proxyURL;
    if (null != proxyURL) {
      const obj4 = closure_1_1(tmp2[3]);
      imageSrc = obj4.getImageSrc(proxyURL, width, height, !closure_1);
    }
    obj.proxyURL = imageSrc;
    const obj3 = closure_1_0(closure_1_2[2]);
    if (proxyURL == null) {
      proxyURL = image.url;
    }
    obj.url = closure_1_1(closure_1_2[3]).getImageSrc(proxyURL, width, height, !closure_1);
    return obj;
  }
  return embeds.flatMap((type) => {
    if (type.type !== closure_1_4.POST_PREVIEW) {
      if (type.type !== tmp.GIFT) {
        if (type.type !== tmp.SAFETY_POLICY_NOTICE) {
          if (type.type !== tmp.SAFETY_SYSTEM_NOTIFICATION) {
            if (type.type !== tmp.AGE_VERIFICATION_SYSTEM_NOTIFICATION) {
              if (type.type === tmp.COMPONENTS) {
                return [];
              }
              let obj = closure_1_0(closure_1_2[4]);
              if (obj.isServerShopArticleEmbed(type)) {
                return [];
              } else if (type.type === tmp.VOICE_CHANNEL) {
                return [];
              } else {
                let tmp3Result = tmp3(tmp4[5]);
                if (tmp3Result.isContentInventoryFallbackEmbed(type)) {
                  if (!closure_11) {
                    return [];
                  }
                }
                tmp3Result = tmp3(tmp4[4]);
                if (tmp3Result.isSocialLayerStorefrontArticleEmbed(type)) {
                  return [];
                } else {
                  let tmp8 = null;
                  if (closure_4) {
                    tmp8 = null;
                    if (null != type.thumbnail) {
                      const thumbnail = type.thumbnail;
                      ({ proxyURL, width, height } = thumbnail);
                      obj = {};
                      let merged = Object.assign(thumbnail);
                      obj.width = tmp3(tmp4[2]).sanitizeMediaDimension(width);
                      const tmp3Result1 = tmp3(tmp4[2]);
                      obj.height = tmp3(tmp4[2]).sanitizeMediaDimension(height);
                      let imageSrc = proxyURL;
                      if (null != proxyURL) {
                        let obj5 = closure_1_1(tmp4[3]);
                        imageSrc = obj5.getImageSrc(proxyURL, width, height, !closure_1);
                      }
                      obj.proxyURL = imageSrc;
                      let obj6 = closure_1_1(tmp4[3]);
                      if (proxyURL == null) {
                        proxyURL = thumbnail.url;
                      }
                      obj.url = obj6.getImageSrc(proxyURL, width, height, !closure_1);
                      tmp8 = obj;
                      const tmp3Result2 = tmp3(tmp4[2]);
                    }
                  }
                  let tmp25 = null;
                  if (closure_4) {
                    tmp25 = null;
                    if (null != type.image) {
                      tmp25 = renderEmbedMedia(type.image);
                    }
                  }
                  if (closure_4) {
                    if (null != type.images) {
                      const images = type.images;
                      let mapped = images.map(renderEmbedMedia);
                    }
                    let tmp31 = tmp8;
                    if (null != tmp8) {
                      tmp31 = tmp8;
                      if (null != type.video) {
                        if (type.type !== tmp.GIFV) {
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
                              obj1 = {};
                              const merged2 = Object.assign(tmp45);
                              obj1.inlinePlaybackDisabled = true;
                              tmp31 = obj1;
                            }
                            tmp3Result3 = tmp3(tmp4[8]);
                            tmp44 = type.type !== tmp.GIFV || closure_1;
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
                              const effectiveVideoProvider = tmp3(tmp4[4]).getEffectiveVideoProvider(name, type.video.url);
                              const tmp3Result4 = tmp3(tmp4[4]);
                              tmp34 = tmp8;
                              if (tmp3Result5.shouldPlayVideoInline(effectiveVideoProvider)) {
                                let obj2 = {};
                                const merged3 = Object.assign(tmp8);
                                obj2.showPlayButton = true;
                                tmp34 = obj2;
                              }
                              tmp3Result5 = tmp3(tmp4[7]);
                            }
                          }
                        }
                        const obj3 = {};
                        const merged4 = Object.assign(tmp8);
                        obj3.gifv = type.type === tmp.GIFV;
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
                      embedBorderLeftColor = closure_1_3(type.color);
                    }
                    if (null != type.url) {
                      if ("" !== type.url) {
                        let parseEmbedTitleMarkup = tmp3(tmp4[9]).parseEmbedTitleMarkupWithoutLinks;
                      }
                      if (type.type === tmp.RICH) {
                        if (null != type.rawTitle) {
                          let rawTitle = parseEmbedTitleMarkup(type.rawTitle, closure_0);
                        }
                        type = type.type;
                        if (tmp.IMAGE !== type) {
                          if (tmp.VIDEO !== type) {
                            if (tmp.GIFV !== type) {
                              if (tmp.RICH === type) {
                                if (null != type.rawDescription) {
                                  const obj4 = { description: null, channelId: null, isField: false, ignoreCache: null, showListsAndHeaders: null, showMaskedLinks: null };
                                  obj4[0] = type.rawDescription;
                                  obj4[1] = closure_0;
                                  obj4[3] = closure_3;
                                  obj4[4] = closure_6;
                                  obj4[5] = closure_7;
                                  let rawDescription = tmp3(tmp4[9]).parseEmbedDescriptionMarkup(obj4);
                                  const tmp3Result6 = tmp3(tmp4[9]);
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
                            let obj = closure_1_0(closure_1_2[9]);
                            result = obj.parseEmbedTitleMarkup(rawName.rawName, closure_0);
                          }
                          let result1 = null;
                          if (null != rawName.rawValue) {
                            obj = { description: null, channelId: null, isField: true, ignoreCache: null, replaceMap: null, showListsAndHeaders: null, showMaskedLinks: null };
                            obj[0] = rawName.rawValue;
                            obj[1] = closure_0;
                            obj[3] = closure_3;
                            obj[4] = { "\t": "" };
                            obj[5] = closure_6;
                            obj[6] = closure_7;
                            result1 = closure_1_0(closure_1_2[9]).parseEmbedDescriptionMarkup(obj);
                            const obj2 = closure_1_0(closure_1_2[9]);
                          }
                          obj = {};
                          const merged = Object.assign(rawName);
                          obj.name = result;
                          obj.value = result1;
                          return obj;
                        });
                        let calendarFormatResult = null;
                        if (null != type.timestamp) {
                          calendarFormatResult = tmp3(tmp4[10]).calendarFormat(type.timestamp);
                          const tmp3Result7 = tmp3(tmp4[10]);
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
                              const obj20 = closure_1_1(tmp4[3]);
                              obj5.iconURL = obj20.getImageSrc(iconURL, 16, 16, !closure_1);
                              tmp64 = obj5;
                            }
                          }
                          iconURL = type.footer.iconURL;
                        } else if (null != calendarFormatResult) {
                          obj6 = { content: null, text: "" };
                          obj6[0] = calendarFormatResult;
                          tmp64 = obj6;
                        }
                        if (null == type.author) {
                          if (type.type !== tmp.COMPONENTS) {
                            const obj7 = { type: null, media: null };
                            obj7[0] = tmp3(tmp4[12]).ObscuredMediaTypes.Embed;
                            obj7[1] = type;
                            let isMediaScanPendingResult = !closure_10;
                            const mediaObscuredReasonFromBitmask = tmp3(tmp4[11]).getMediaObscuredReasonFromBitmask(obj7, closure_9);
                            if (!closure_10) {
                              const obj8 = { type: null, media: null };
                              obj8[0] = tmp3(tmp4[12]).ObscuredMediaTypes.Embed;
                              obj8[1] = type;
                              isMediaScanPendingResult = tmp3(tmp4[11]).isMediaScanPending(obj8, closure_9);
                              const tmp3Result9 = tmp3(tmp4[11]);
                            }
                            let isVerifiedTeenResult = tmp88;
                            if (mediaObscuredReasonFromBitmask.length > 0) {
                              isVerifiedTeenResult = tmp3(tmp4[13]).isVerifiedTeen();
                              const tmp3Result10 = tmp3(tmp4[13]);
                            }
                            let str10 = type.id;
                            if (str10 == null) {
                              str10 = "";
                            }
                            const obj9 = { id: null, type: null, spoiler: null, obscure: null, obscureAwaitingScan: null, verifyAge: null, obscureHideControls: null, obscureIsOpaque: null, provider: null, author: null, rawTitle: null, title: null, url: null, rawDescription: null, description: null, thumbnail: null, image: null, images: null, fields: null, components: null, footer: null, video: null, borderLeftColor: null, providerColor: null, headerTextColor: null, bodyTextColor: null, referenceId: null, backgroundColor: null };
                            obj9[0] = str10;
                            const type2 = type.type;
                            obj9[1] = type2;
                            let str11 = "";
                            let str12 = "";
                            if (closure_2) {
                              const intl = tmp3(tmp4[14]).intl;
                              str12 = intl.string(tmp3(tmp4[14]).t["F+x38C"]).toUpperCase();
                              const str13 = intl.string(tmp3(tmp4[14]).t["F+x38C"]);
                            }
                            obj9[2] = str12;
                            let stringResult = str11;
                            if (mediaObscuredReasonFromBitmask.length > 0) {
                              const intl2 = tmp3(tmp4[14]).intl;
                              stringResult = intl2.string(tmp3(tmp4[14]).t.SpxcUR);
                            }
                            obj9[3] = stringResult;
                            if (isMediaScanPendingResult) {
                              const intl3 = tmp3(tmp4[14]).intl;
                              str11 = intl3.string(tmp3(tmp4[14]).t.MRdR7z);
                            }
                            obj9[4] = str11;
                            let tmp92 = tmp88;
                            if (mediaObscuredReasonFromBitmask.length > 0) {
                              tmp92 = closure_12;
                            }
                            obj9[5] = tmp92;
                            obj9[6] = isVerifiedTeenResult;
                            obj9[7] = mediaObscuredReasonFromBitmask.length > 0;
                            const provider = type.provider;
                            obj9[8] = provider;
                            obj9[9] = undefined;
                            obj9[10] = type.rawTitle;
                            obj9[11] = rawTitle;
                            const url4 = type.url;
                            obj9[12] = url4;
                            obj9[13] = type.rawDescription;
                            obj9[14] = rawDescription;
                            obj9[15] = tmp31;
                            obj9[16] = tmp25;
                            obj9[17] = mapped;
                            obj9[18] = mapped1;
                            obj9[19] = tmp80;
                            obj9[20] = tmp64;
                            const video = type.video;
                            obj9[21] = video;
                            obj9[22] = embedBorderLeftColor;
                            ({ embedProviderColor: obj28[23], embedHeaderTextColor: obj28[24], embedBodyTextColor: obj28[25] } = tmp54);
                            const referenceId = type.referenceId;
                            obj9[26] = referenceId;
                            obj9[27] = closure_8;
                            return obj9;
                          } else {
                            const components = type.components;
                            if (closure_2) {
                              let mapped2 = components.map((arg0) => {
                                const obj = {};
                                const merged = Object.assign(arg0);
                                obj.spoiler = true;
                                return obj;
                              });
                            } else {
                              mapped2 = components;
                            }
                            callback(mapped2);
                          }
                        } else {
                          if (null != type.author.iconProxyURL) {
                            if ("" !== type.author.iconProxyURL) {
                              let iconURL2 = type.author.iconProxyURL;
                            }
                            if (null != iconURL2) {
                              const obj10 = {};
                              const merged6 = Object.assign(type.author);
                              const obj22 = closure_1_1(tmp4[3]);
                              obj10.iconURL = obj22.getImageSrc(iconURL2, 16, 16, !closure_1);
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
                    parseEmbedTitleMarkup = tmp3(tmp4[9]).parseEmbedTitleMarkup;
                    tmp54 = embedBorderLeftColor;
                  }
                  let tmp27 = null == tmp25;
                  if (!tmp27) {
                    tmp27 = !tmp3(tmp4[6]).isIOS();
                    const tmp3Result11 = tmp3(tmp4[6]);
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
};