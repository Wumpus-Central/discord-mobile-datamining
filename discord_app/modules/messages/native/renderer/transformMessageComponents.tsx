import _objectWithoutProperties from "_objectWithoutProperties";
import { processColor } from "set";
import { CheckpointVersions } from "CheckpointPersonas";
import { TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS as closure_7 } from "TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS";
import importDefaultResult from "priv";

const require = arg1;
function transformToRowGeneratedComponent(message, accessory) {
  let colors;
  let contentType;
  let guildId;
  let height;
  let interaction;
  let isSpoiler;
  let isSpoiler2;
  let markdownConfigs;
  let obscureAwaitingScan;
  let obscureAwaitingScan2;
  let obscureDescription;
  let obscureDescription2;
  let processColor;
  let shouldAgeVerify;
  let shouldDisableInteractiveComponents;
  let shouldObscureSpoiler;
  let spoiler;
  let spoiler2;
  let spoilerDescription;
  let spoilerDescription2;
  let width;
  const _require = message;
  const importDefault = accessory;
  message = message.message;
  ({ interaction, guildId, shouldDisableInteractiveComponents, shouldObscureSpoiler } = message);
  const enabledContentHarmTypeFlags = message.enabledContentHarmTypeFlags;
  ({ shouldShowMosaicMediaDescriptions: processColor, shouldAgeVerify } = message);
  const type = accessory.type;
  let tmp = _require;
  let tmp2 = message;
  ({ colors, markdownConfigs } = message);
  if (_require(message[6]).ComponentType.ACTION_ROW === type) {
    const components = accessory.components;
    const mapped = components.map((arg0) => {
      const tmp = outer1_8(closure_0, arg0);
      let tmp2 = null;
      if (null != tmp) {
        tmp2 = tmp;
      }
      return tmp2;
    });
    let obj = {};
    const found = mapped.filter(tmp(tmp2[5]).isNotNullish);
    let merged = Object.assign(accessory);
    obj.components = found;
    let tmpResult = tmp(tmp2[7]);
    obj.errorText = tmpResult.getLayoutComponentErrorText(interaction, message, accessory);
    return obj;
  } else if (tmp(tmp2[6]).ComponentType.BUTTON === type) {
    if (accessory.style === tmp(tmp2[6]).ButtonStyle.PREMIUM) {
      const intl9 = tmp(tmp2[8]).intl;
      let label = intl9.string(tmp(tmp2[8]).t.CHa0vN);
    } else {
      label = accessory.label;
    }
    obj = {};
    const merged1 = Object.assign(accessory);
    tmpResult = tmp(tmp2[9]);
    obj.state = tmpResult.getActionComponentState(interaction, accessory, shouldDisableInteractiveComponents);
    obj.label = label;
    return obj;
  } else if (tmp(tmp2[6]).ComponentType.STRING_SELECT === type) {
    const initialStringSelectOptions = tmp(tmp2[10]).getInitialStringSelectOptions(accessory, message.id);
    const mapped1 = initialStringSelectOptions.map((arg0) => {
      let closure_0 = arg0;
      const options = accessory.options;
      return options.findIndex((value) => value.value === closure_0);
    });
    const found1 = mapped1.filter((arg0) => -1 !== arg0);
    const obj1 = {};
    const merged2 = Object.assign(accessory);
    const tmpResult1 = tmp(tmp2[10]);
    obj1.state = tmp(tmp2[9]).getActionComponentState(interaction, accessory, shouldDisableInteractiveComponents);
    obj1.selectedOptions = found1;
    const tmpResult2 = tmp(tmp2[9]);
    obj1.placeholder = tmp(tmp2[7]).getSelectPlaceholder(accessory);
    const tmpResult3 = tmp(tmp2[7]);
    if (tmpResult4.shouldSkipAccessibilityLabels()) {
      let selectPlaceholder = tmp(tmp2[7]).getSelectPlaceholder(accessory);
      const tmpResult5 = tmp(tmp2[7]);
    } else {
      if (null != found1) {
        if (0 !== found1.length) {
          const mapped2 = found1.map((arg0) => accessory.options[arg0].label);
          const intl7 = tmp(tmp2[8]).intl;
          const obj2 = { selections: null };
          obj2[0] = mapped2.join(",");
          selectPlaceholder = intl7.formatToPlainString(tmp(tmp2[8]).t["I/ROH+"], obj2);
        }
      }
      const selectPlaceholder1 = tmp(tmp2[7]).getSelectPlaceholder(accessory);
      const intl8 = tmp(tmp2[8]).intl;
      const obj3 = { placeholder: null };
      obj3[0] = selectPlaceholder1;
      selectPlaceholder = intl8.formatToPlainString(tmp(tmp2[8]).t["3aednA"], obj3);
      const tmpResult6 = tmp(tmp2[7]);
    }
    obj1.accessibilityLabel = selectPlaceholder;
    return obj1;
  } else {
    if (tmp(tmp2[6]).ComponentType.USER_SELECT !== type) {
      if (tmp(tmp2[6]).ComponentType.ROLE_SELECT !== type) {
        if (tmp(tmp2[6]).ComponentType.MENTIONABLE_SELECT !== type) {
          if (tmp(tmp2[6]).ComponentType.CHANNEL_SELECT !== type) {
            if (tmp(tmp2[6]).ComponentType.SECTION === type) {
              const tmp70 = transformToRowGeneratedComponent(message, accessory.accessory);
              let tmp72 = null;
              if (null != tmp70) {
                tmp72 = tmp70;
              }
              let tmp73 = null;
              if (null != tmp72) {
                const obj4 = {};
                const merged3 = Object.assign(accessory);
                const components1 = accessory.components;
                const mapped3 = components1.map((arg0) => {
                  const tmp = outer1_8(closure_0, arg0);
                  let tmp2 = null;
                  if (null != tmp) {
                    tmp2 = tmp;
                  }
                  return tmp2;
                });
                obj4.components = mapped3.filter(tmp(tmp2[5]).isNotNullish);
                obj4.accessory = tmp72;
                obj4.errorText = tmp(tmp2[7]).getLayoutComponentErrorText(interaction, message, accessory);
                tmp73 = obj4;
                const tmpResult7 = tmp(tmp2[7]);
              }
              return tmp73;
            } else if (tmp(tmp2[6]).ComponentType.TEXT_DISPLAY === type) {
              const obj5 = {};
              const merged4 = Object.assign(accessory);
              const textDisplayComponent = markdownConfigs.textDisplayComponent;
              const content = accessory.content;
              let _HermesInternal = HermesInternal;
              let combined = "" + textDisplayComponent.type + "-" + message.id + "-" + content;
              let value = importDefaultResult.get(combined);
              if (null == value) {
                let obj6 = {};
                const merged5 = Object.assign(textDisplayComponent.parserState);
                const parseToASTResult = importDefault(tmp2[28]).parseToAST(content, true, obj6);
                let result = importDefaultResult.set(combined, parseToASTResult);
                value = parseToASTResult;
                const obj31 = importDefault(tmp2[28]);
              }
              obj5.content = value;
              return obj5;
            } else if (tmp(tmp2[6]).ComponentType.THUMBNAIL === type) {
              ({ width, height, contentType } = accessory.media);
              if (null != width) {
                if (width > 0) {
                  if (null != height) {
                    if (height > 0) {
                      if (tmpResult8.isImageContentType(contentType)) {
                        let VISUAL_PLACEHOLDER = tmp(tmp2[14]).MediaGalleryItemType.IMAGE;
                      } else {
                        if (tmpResult9.isVideoContentType(contentType)) {
                          VISUAL_PLACEHOLDER = tmp(tmp2[14]).MediaGalleryItemType.VIDEO;
                        }
                        tmpResult9 = tmp(tmp2[20]);
                      }
                      tmpResult8 = tmp(tmp2[20]);
                    }
                    let str2 = "generic";
                    if (VISUAL_PLACEHOLDER === tmp(tmp2[14]).MediaGalleryItemType.IMAGE) {
                      str2 = "image";
                    }
                    const obj7 = { type: null, mediaItem: null, isSpoilered: null, isAuthorBot: null, shouldObscureSpoiler: null, shouldAgeVerify: null, enabledContentHarmTypeFlags: null };
                    obj7[0] = str2;
                    ({ media: obj25[1], spoiler: spoiler2 } = accessory);
                    if (spoiler2 == null) {
                      spoiler2 = false;
                    }
                    obj7[2] = spoiler2;
                    obj7[3] = message.author.bot;
                    obj7[4] = shouldObscureSpoiler;
                    obj7[5] = shouldAgeVerify;
                    obj7[6] = enabledContentHarmTypeFlags;
                    let unfurledMediaItemObscurityProps = tmp(tmp2[13]).getUnfurledMediaItemObscurityProps(obj7);
                    const isObscured2 = unfurledMediaItemObscurityProps.isObscured;
                    let isVerifiedTeenResult = isObscured2;
                    ({ isSpoiler: isSpoiler2, spoilerDescription: spoilerDescription2, obscureDescription: obscureDescription2, obscureAwaitingScan: obscureAwaitingScan2 } = unfurledMediaItemObscurityProps);
                    if (isObscured2) {
                      isVerifiedTeenResult = tmp(tmp2[15]).isVerifiedTeen();
                      const tmpResult11 = tmp(tmp2[15]);
                    }
                    const obj8 = {};
                    const merged6 = Object.assign(accessory);
                    obj8.media = transformUnfurledMediaItem(accessory.media, message);
                    obj8.isSpoiler = isSpoiler2;
                    obj8.spoilerDescription = spoilerDescription2;
                    obj8.isObscure = isObscured2;
                    obj8.isObscureAwaitingScan = obscureAwaitingScan2;
                    obj8.obscureDescription = obscureDescription2;
                    let tmp55 = isObscured2;
                    if (isObscured2) {
                      tmp55 = shouldAgeVerify;
                    }
                    obj8.verifyAge = tmp55;
                    obj8.obscureHideControls = isVerifiedTeenResult;
                    obj8.obscureIsOpaque = isObscured2;
                    let intl3 = tmp(tmp2[8]).intl;
                    obj8.descriptionHint = intl3.string(tmp(tmp2[8]).t.IPzNKE);
                    let intl4 = tmp(tmp2[8]).intl;
                    obj8.accessibilityRole = intl4.string(tmp(tmp2[8]).t.fKyfca);
                    return obj8;
                  }
                }
              }
              VISUAL_PLACEHOLDER = tmp(tmp2[14]).MediaGalleryItemType.VISUAL_PLACEHOLDER;
            } else if (tmp(tmp2[6]).ComponentType.MEDIA_GALLERY === type) {
              const items = accessory.items;
              const mapped4 = items.map((media) => {
                let contentType;
                let height;
                let isSpoiler;
                let obscureAwaitingScan;
                let obscureDescription;
                let spoiler;
                let spoilerDescription;
                let width;
                ({ width, height, contentType } = media.media);
                if (null != width) {
                  if (width > 0) {
                    if (null != height) {
                      if (height > 0) {
                        let obj = message(message[20]);
                        if (obj.isImageContentType(contentType)) {
                          let VISUAL_PLACEHOLDER = tmp(tmp2[14]).MediaGalleryItemType.IMAGE;
                          let tmp3 = tmp2;
                          let tmp4 = tmp;
                        } else {
                          if (tmpResult.isVideoContentType(contentType)) {
                            VISUAL_PLACEHOLDER = tmp(tmp2[14]).MediaGalleryItemType.VIDEO;
                            tmp3 = tmp2;
                            tmp4 = tmp;
                          }
                          tmpResult = tmp(tmp2[20]);
                        }
                      }
                      let tmp4Result = tmp4(tmp3[13]);
                      let str = "image";
                      if (VISUAL_PLACEHOLDER !== tmp4(tmp3[14]).MediaGalleryItemType.IMAGE) {
                        let str2 = "generic";
                        if (VISUAL_PLACEHOLDER === tmp4(tmp3[14]).MediaGalleryItemType.VIDEO) {
                          str2 = "video";
                        }
                        str = str2;
                      }
                      obj = { type: null, mediaItem: null, isSpoilered: null, isAuthorBot: null, shouldObscureSpoiler: null, enabledContentHarmTypeFlags: null, shouldAgeVerify: null };
                      obj[0] = str;
                      ({ media: obj4[1], spoiler } = media);
                      if (spoiler == null) {
                        spoiler = false;
                      }
                      obj[2] = spoiler;
                      obj[3] = message.author.bot;
                      obj[4] = shouldObscureSpoiler;
                      obj[5] = enabledContentHarmTypeFlags;
                      obj[6] = shouldAgeVerify;
                      const unfurledMediaItemObscurityProps = tmp4Result.getUnfurledMediaItemObscurityProps(obj);
                      const isObscured = unfurledMediaItemObscurityProps.isObscured;
                      let isVerifiedTeenResult = isObscured;
                      ({ isSpoiler, spoilerDescription, obscureDescription, obscureAwaitingScan } = unfurledMediaItemObscurityProps);
                      if (isObscured) {
                        tmp4Result = tmp4(tmp3[15]);
                        isVerifiedTeenResult = tmp4Result.isVerifiedTeen();
                      }
                      if (VISUAL_PLACEHOLDER !== tmp4(tmp3[14]).MediaGalleryItemType.VIDEO) {
                        obj = {};
                        const merged = Object.assign(media);
                        obj.media = outer1_9(media.media, message);
                        obj.mediaType = VISUAL_PLACEHOLDER;
                        obj.videoPreviewUrl = tmp12;
                        obj.isSpoiler = isSpoiler;
                        obj.spoilerDescription = spoilerDescription;
                        obj.isObscure = isObscured;
                        obj.isObscureAwaitingScan = obscureAwaitingScan;
                        obj.obscureDescription = obscureDescription;
                        let tmp22 = isObscured;
                        if (isObscured) {
                          tmp22 = shouldAgeVerify;
                        }
                        obj.verifyAge = tmp22;
                        obj.obscureHideControls = isVerifiedTeenResult;
                        obj.obscureIsOpaque = isObscured;
                        obj.showDescription = closure_5;
                        if (VISUAL_PLACEHOLDER === tmp4(tmp3[14]).MediaGalleryItemType.VIDEO) {
                          const intl2 = tmp4(tmp3[8]).intl;
                          let stringResult = intl2.string(tmp4(tmp3[8]).t["BEWw/7"]);
                        } else {
                          const intl = tmp4(tmp3[8]).intl;
                          stringResult = intl.string(tmp4(tmp3[8]).t.IPzNKE);
                        }
                        obj.descriptionHint = stringResult;
                        if (VISUAL_PLACEHOLDER === tmp4(tmp3[14]).MediaGalleryItemType.VIDEO) {
                          const intl4 = tmp4(tmp3[8]).intl;
                          let stringResult1 = intl4.string(tmp4(tmp3[8]).t["/SCpvi"]);
                        } else {
                          const intl3 = tmp4(tmp3[8]).intl;
                          stringResult1 = intl3.string(tmp4(tmp3[8]).t.fKyfca);
                        }
                        obj.accessibilityRole = stringResult1;
                        let combined = null;
                        if (VISUAL_PLACEHOLDER === tmp4(tmp3[14]).MediaGalleryItemType.VIDEO) {
                          const _HermesInternal = HermesInternal;
                          combined = "" + message.id + "_MediaGallery(" + accessory.id + ")_" + arg1;
                        }
                        obj.portalId = combined;
                        let tmp16 = obj;
                      } else {
                        const str3 = accessory(tmp3[25]).toURLSafe(media.media.proxyUrl);
                        str = null;
                        if (null != str3) {
                          const searchParams = str3.searchParams;
                          const result = searchParams.set("format", "webp");
                          str = str3.toString();
                        }
                        tmp16 = null;
                        const obj6 = accessory(tmp3[25]);
                        tmp12 = str;
                      }
                      return tmp16;
                    }
                  }
                }
                tmp3 = message;
                VISUAL_PLACEHOLDER = message(message[14]).MediaGalleryItemType.VISUAL_PLACEHOLDER;
                tmp4 = message;
              });
              const found2 = mapped4.filter(tmp(tmp2[5]).isNotNullish);
              let tmp44 = null;
              if (0 !== found2.length) {
                let obj9 = {};
                const merged7 = Object.assign(accessory);
                obj9.items = found2;
                tmp44 = obj9;
              }
              return tmp44;
            } else if (tmp(tmp2[6]).ComponentType.FILE === type) {
              const obj10 = { type: "file", mediaItem: null, isSpoilered: null, isAuthorBot: null, shouldObscureSpoiler: null, shouldAgeVerify: null, enabledContentHarmTypeFlags: null };
              ({ file: obj16[1], spoiler } = accessory);
              if (spoiler == null) {
                spoiler = false;
              }
              obj10[2] = spoiler;
              obj10[3] = message.author.bot;
              obj10[4] = shouldObscureSpoiler;
              obj10[5] = shouldAgeVerify;
              obj10[6] = enabledContentHarmTypeFlags;
              const unfurledMediaItemObscurityProps1 = tmp(tmp2[13]).getUnfurledMediaItemObscurityProps(obj10);
              let isObscured = unfurledMediaItemObscurityProps1.isObscured;
              let isVerifiedTeenResult1 = isObscured;
              ({ isSpoiler, spoilerDescription, obscureDescription, obscureAwaitingScan } = unfurledMediaItemObscurityProps1);
              if (isObscured) {
                isVerifiedTeenResult1 = tmp(tmp2[15]).isVerifiedTeen();
                const tmpResult13 = tmp(tmp2[15]);
              }
              const obj11 = {};
              const merged8 = Object.assign(accessory);
              obj11.file = transformUnfurledMediaItem(accessory.file, message);
              let name = accessory.name;
              if (name == null) {
                let intl2 = tmp(tmp2[8]).intl;
                name = intl2.string(tmp(tmp2[8]).t.GnuJ5u);
              }
              obj11.name = name;
              let obj18 = importDefault(tmp2[16]);
              let num5 = accessory.size;
              if (num5 == null) {
                num5 = 0;
              }
              obj11.size = obj18.filesize(num5);
              const tmpResult12 = tmp(tmp2[13]);
              obj11.isSuspiciousDownload = null != tmp(tmp2[17]).isSuspiciousDownload(accessory.file.url);
              obj11.isSpoiler = isSpoiler;
              obj11.spoilerDescription = spoilerDescription;
              obj11.isObscure = isObscured;
              obj11.isObscureAwaitingScan = obscureAwaitingScan;
              obj11.obscureDescription = obscureDescription;
              let tmp43 = isObscured;
              if (isObscured) {
                tmp43 = shouldAgeVerify;
              }
              obj11.verifyAge = tmp43;
              obj11.obscureHideControls = isVerifiedTeenResult1;
              obj11.obscureIsOpaque = isObscured;
              return obj11;
            } else if (tmp(tmp2[6]).ComponentType.SEPARATOR === type) {
              return accessory;
            } else if (tmp(tmp2[6]).ComponentType.TEXT_INPUT === type) {
              return null;
            } else if (tmp(tmp2[6]).ComponentType.CONTENT_INVENTORY_ENTRY === type) {
              const obj12 = { type: null, id: null, contentInventoryEntry: null };
              ({ type: obj12[0], id: obj12[1] } = accessory);
              const obj13 = { component: null, message: null };
              obj13[0] = accessory;
              obj13[1] = message;
              obj12[2] = tmp(tmp2[18]).transformToRowGeneratedContentInventoryEntryComponent(obj13);
              return obj12;
            } else if (tmp(tmp2[6]).ComponentType.CONTAINER === type) {
              const obj14 = {};
              const merged9 = Object.assign(accessory);
              const components2 = accessory.components;
              const mapped5 = components2.map((arg0) => {
                const tmp = outer1_8(closure_0, arg0);
                let tmp2 = null;
                if (null != tmp) {
                  tmp2 = tmp;
                }
                return tmp2;
              });
              obj14.components = mapped5.filter(tmp(tmp2[5]).isNotNullish);
              let tmp30 = null;
              if (null != accessory.accentColor) {
                tmp30 = processColor(accessory.accentColor);
              }
              obj14.accentColor = tmp30;
              obj14.isSpoiler = accessory.spoiler;
              let stringResult = null;
              if (accessory.spoiler) {
                let intl = tmp(tmp2[8]).intl;
                stringResult = intl.string(tmp(tmp2[8]).t.C8ci33);
              }
              obj14.spoilerDescription = stringResult;
              let embedBackgroundColor = colors.embedBackgroundColor;
              if (embedBackgroundColor == null) {
                embedBackgroundColor = null;
              }
              obj14.themedBackgroundColor = embedBackgroundColor;
              return obj14;
            } else {
              if (tmp(tmp2[6]).ComponentType.LABEL !== type) {
                if (tmp(tmp2[6]).ComponentType.FILE_UPLOAD !== type) {
                  if (tmp(tmp2[6]).ComponentType.CHECKPOINT_CARD === type) {
                    const checkpointData = accessory.checkpointData;
                    const tmp6 = enabledContentHarmTypeFlags(accessory, shouldObscureSpoiler);
                    if (checkpointData.version === shouldAgeVerify.V2025) {
                      const _Intl = Intl;
                      const numberFormat = new Intl.NumberFormat(tmp(tmp2[8]).intl.currentLocale, { notation: "compact", compactDisplay: "short" });
                      const obj15 = {};
                      const merged10 = Object.assign(tmp6);
                      const obj16 = {};
                      const merged11 = Object.assign(checkpointData);
                      obj16.cardId = checkpointData.cardId.toString();
                      obj16.cardAssetUrl = tmp(tmp2[29]).getCardAssetUrl(checkpointData.cardId);
                      obj16.authorId = message.author.id;
                      let num = checkpointData.powerLevel;
                      if (num == null) {
                        num = 0;
                      }
                      obj16.powerLevel = numberFormat.format(num);
                      let str = checkpointData.cardId;
                      const tmpResult16 = tmp(tmp2[29]);
                      let num2 = checkpointData.powerLevelPercentile;
                      if (num2 == null) {
                        num2 = 0;
                      }
                      const checkpointPowerBarUnits = tmp(tmp2[29]).getCheckpointPowerBarUnits(num2);
                      const tmpResult17 = tmp(tmp2[29]);
                      let num3 = 10;
                      if (tmpResult18.isIOS()) {
                        num3 = 9;
                      }
                      obj16.powerLevelUnits = Math.min(checkpointPowerBarUnits, num3);
                      tmpResult18 = tmp(tmp2[30]);
                      obj16.voiceString = tmp(tmp2[29]).getVoiceDurationString(checkpointData.totalVoiceMinutes);
                      const numEmojisSent = checkpointData.numEmojisSent;
                      obj16.reactionString = numEmojisSent.toLocaleString(tmp(tmp2[8]).intl.currentLocale);
                      const numMessagesSent = checkpointData.numMessagesSent;
                      obj16.messagesString = numMessagesSent.toLocaleString(tmp(tmp2[8]).intl.currentLocale);
                      let tmp20;
                      if (null != checkpointData.topEmoji) {
                        const obj17 = {};
                        const merged12 = Object.assign(checkpointData.topEmoji);
                        let result1;
                        if (null == checkpointData.topEmoji.emojiId) {
                          obj9 = importDefault(tmp2[31]);
                          result1 = obj9.convertSurrogateToName(checkpointData.topEmoji.emojiName);
                        }
                        obj17.emojiSurrogateName = result1;
                        tmp20 = obj17;
                      }
                      obj16.topEmoji = tmp20;
                      obj16.clickable = undefined;
                      obj15.checkpointData = obj16;
                      obj = obj15;
                      const tmpResult19 = tmp(tmp2[29]);
                    } else {
                      obj = { type: null, id: null };
                      obj[0] = tmp(tmp2[6]).ComponentType.UNKNOWN;
                      obj[1] = accessory.id;
                    }
                    return obj;
                  } else {
                    if (tmp(tmp2[6]).ComponentType.RADIO_GROUP !== type) {
                      if (tmp(tmp2[6]).ComponentType.CHECKBOX_GROUP !== type) {
                        const CHECKBOX = tmp(tmp2[6]).ComponentType.CHECKBOX;
                      }
                    }
                    return null;
                  }
                }
              }
              return null;
            }
          }
        }
      }
    }
    const initialSnowflakeSelectOptions = tmp(tmp2[11]).getInitialSnowflakeSelectOptions(accessory, message.id, guildId);
    obj18 = {};
    const merged13 = Object.assign(accessory);
    const tmpResult20 = tmp(tmp2[11]);
    obj18.state = tmp(tmp2[9]).getActionComponentState(interaction, accessory, shouldDisableInteractiveComponents);
    const tmpResult21 = tmp(tmp2[9]);
    obj18.selectedOptions = tmp(tmp2[12]).transformSearchableSelectOptions(initialSnowflakeSelectOptions, guildId);
    const tmpResult22 = tmp(tmp2[12]);
    obj18.placeholder = tmp(tmp2[7]).getSelectPlaceholder(accessory);
    const tmpResult23 = tmp(tmp2[7]);
    if (tmpResult24.shouldSkipAccessibilityLabels()) {
      let selectPlaceholder2 = tmp(tmp2[7]).getSelectPlaceholder(accessory);
      const tmpResult25 = tmp(tmp2[7]);
    } else {
      if (null != initialSnowflakeSelectOptions) {
        if (0 !== initialSnowflakeSelectOptions.length) {
          const mapped6 = initialSnowflakeSelectOptions.map((label) => label.label);
          const intl5 = tmp(tmp2[8]).intl;
          const obj19 = { selections: null };
          obj19[0] = mapped6.join(",");
          selectPlaceholder2 = intl5.formatToPlainString(tmp(tmp2[8]).t["I/ROH+"], obj19);
        }
      }
      const selectPlaceholder3 = tmp(tmp2[7]).getSelectPlaceholder(accessory);
      const intl6 = tmp(tmp2[8]).intl;
      const obj20 = { placeholder: null };
      obj20[0] = selectPlaceholder3;
      selectPlaceholder2 = intl6.formatToPlainString(tmp(tmp2[8]).t["3aednA"], obj20);
      const tmpResult26 = tmp(tmp2[7]);
    }
    obj18.accessibilityLabel = selectPlaceholder2;
    return obj18;
  }
}
function transformUnfurledMediaItem(file, shouldShowMedia) {
  let contentType;
  let height;
  let proxyUrl;
  let width;
  let width2;
  ({ width, height, contentType } = file);
  if (null != width) {
    if (width > 0) {
      if (null != height) {
        if (height > 0) {
          if (obj.isImageContentType(contentType)) {
            let VISUAL_PLACEHOLDER = tmp(8040).MediaGalleryItemType.IMAGE;
            let tmp4 = tmp;
          } else {
            if (tmpResult.isVideoContentType(contentType)) {
              VISUAL_PLACEHOLDER = tmp(8040).MediaGalleryItemType.VIDEO;
              tmp4 = tmp;
            }
            tmpResult = tmp(4472);
          }
          obj = require(4472) /* urlMatchesFileExtension */;
        }
        const size = {};
        const merged = Object.assign(file);
        let tmp4Result = tmp4(1384);
        size.srcIsAnimated = tmp4Result.hasFlag(file.flags, tmp4(4511).UnfurledMediaItemFlags.IS_ANIMATED);
        if (!shouldShowMedia.shouldShowMedia) {
          size.height = 0;
          size.width = 0;
        }
        if (VISUAL_PLACEHOLDER === tmp4(8040).MediaGalleryItemType.IMAGE) {
          const obj4 = importDefault(8021);
          ({ proxyUrl, width: width2 } = size);
          if (width2 == null) {
            width2 = 0;
          }
          let num3 = size.height;
          if (num3 == null) {
            num3 = 0;
          }
          size.proxyUrl = obj4.getImageSrc(proxyUrl, width2, num3, !shouldShowMedia.shouldAutoPlayGifs);
        }
        tmp4Result = tmp4(8020);
        size.width = tmp4Result.sanitizeMediaDimension(size.width);
        size.height = tmp4(8020).sanitizeMediaDimension(size.height);
        return size;
      }
    }
  }
  VISUAL_PLACEHOLDER = require(8040) /* MediaGalleryItemType */.MediaGalleryItemType.VISUAL_PLACEHOLDER;
  tmp4 = require;
}
let closure_3 = ["checkpointData"];
let obj = { max: Infinity, maxAge: null, updateAgeOnGet: true };
obj[1] = 15 * require("set").Millis.MINUTE;
importDefaultResult = new importDefaultResult(obj);
let c10 = importDefaultResult;
let result = require("CheckpointPersonas").fileFinishedImporting("modules/messages/native/renderer/transformMessageComponents.tsx");

export default function transformMessageComponents(message, arr) {
  let obj = { type: "textDisplayComponent", parserState: null };
  obj[1] = obj(8011).getInitialParserStateFromMessage(message.message, closure_7);
  obj = {};
  const merged = Object.assign(message);
  obj.markdownConfigs = { textDisplayComponent: obj };
  const mapped = arr.map((arg0) => outer1_8(obj, arg0));
  return mapped.filter(obj(1351).isNotNullish);
};
export const getUnfurledMediaItemType = function getUnfurledMediaItemType(arg0) {
  let contentType;
  let height;
  let width;
  ({ width, height, contentType } = arg0);
  if (null != width) {
    if (width > 0) {
      if (null != height) {
        if (height > 0) {
          if (obj.isImageContentType(contentType)) {
            return tmp(8040).MediaGalleryItemType.IMAGE;
          } else {
            if (tmpResult.isVideoContentType(contentType)) {
              return tmp(8040).MediaGalleryItemType.VIDEO;
            }
            tmpResult = tmp(4472);
          }
          obj = require(4472) /* urlMatchesFileExtension */;
        }
      }
    }
  }
  return require(8040) /* MediaGalleryItemType */.MediaGalleryItemType.VISUAL_PLACEHOLDER;
};