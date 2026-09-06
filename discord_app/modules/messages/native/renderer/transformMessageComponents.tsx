// discord_app/modules/messages/native/renderer/transformMessageComponents.tsx
import DurationsDefault from "../../../../utils/Durations.tsx";
import URLUtilsDefault from "../../../../utils/URLUtils.tsx";
import MediaFormatTesters from "../../MediaFormatTesters.tsx";
import InteractionComponentUtils from "../../../interaction_components/InteractionComponentUtils.tsx";
import RowGeneratorUtilsDefault from "RowGeneratorUtils.tsx";
import RowGeneratorTypes from "RowGeneratorTypes.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import priv from "../../../../../_runtime/01437_priv.js";

const util = tmp4(1114);
const FlagUtils = tmp4(1384);
const AgeVerificationUtils = tmp4(4773);
const MediaTypes = tmp4(4791);
const sanitizeMediaDimension = tmp4(8107);
const ExplicitMediaUtils = tmp4(8125);
require = fn;
function transformToRowGeneratedComponent(message, accessory) {
  _require = message;
  importDefault = accessory;
  message = message.message;
  ({ interaction, guildId, shouldDisableInteractiveComponents, shouldObscureSpoiler } = message);
  const enabledContentHarmTypeFlags = message.enabledContentHarmTypeFlags;
  ({ shouldShowMosaicMediaDescriptions: processColor, shouldAgeVerify } = message);
  const type = accessory.type;
  let tmp = _require;
  let tmp2 = message;
  ({ colors, markdownConfigs } = message);
  if (require("Server").ComponentType.ACTION_ROW === type) {
    const components = accessory.components;
    let mapped = components.map((item) => {
      const tmp = transformToRowGeneratedComponent(closure_0, item);
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
      const intl5 = tmp(tmp2[8]).intl;
      let label = intl5.string(tmp(tmp2[8]).t.CHa0vN);
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
    const mapped1 = initialStringSelectOptions.map((item) => {
      closure_0 = item;
      const options = accessory.options;
      return options.findIndex((value) => value.value === closure_0);
    });
    const found1 = mapped1.filter((item) => -1 !== item);
    const obj1 = {};
    const merged2 = Object.assign(accessory);
    const tmpResult1 = tmp(tmp2[10]);
    obj1.state = tmp(tmp2[9]).getActionComponentState(interaction, accessory, shouldDisableInteractiveComponents);
    obj1.selectedOptions = found1;
    const tmpResult2 = tmp(tmp2[9]);
    obj1.placeholder = tmp(tmp2[7]).getSelectPlaceholder(accessory);
    closure_130_0 = accessory;
    closure_130_1 = found1;
    closure_130_2 = (arg0) => accessory.options[arg0].label;
    const tmpResult3 = tmp(tmp2[7]);
    const obj2 = {
      expensive() {
        if (null != closure_1) {
          if (0 !== arr.length) {
            const mapped = arr.map(message);
            const intl = util.intl;
            const obj = { selections: mapped.join(",") };
            return intl.formatToPlainString(util.t["I/ROH+"], obj);
          }
        }
        const placeholder = InteractionComponentUtils.getSelectPlaceholder(closure_0);
        const intl2 = util.intl;
        return intl2.formatToPlainString(util.t["3aednA"], { placeholder });
      },
      cheap: null,
    };
    const tmpResult4 = tmp(tmp2[19]);
    obj2.cheap = tmp(tmp2[7]).getSelectPlaceholder(accessory);
    obj1.accessibilityLabel = tmpResult4.getAccessibilityLabelOrCheapFallbackUnsafe(obj2);
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
                const obj3 = {};
                const merged3 = Object.assign(accessory);
                const components1 = accessory.components;
                const mapped2 = components1.map((item) => {
                  const tmp = transformToRowGeneratedComponent(closure_0, item);
                  let tmp2 = null;
                  if (null != tmp) {
                    tmp2 = tmp;
                  }
                  return tmp2;
                });
                obj3.components = mapped2.filter(tmp(tmp2[5]).isNotNullish);
                obj3.accessory = tmp72;
                obj3.errorText = tmp(tmp2[7]).getLayoutComponentErrorText(interaction, message, accessory);
                tmp73 = obj3;
                const tmpResult6 = tmp(tmp2[7]);
              }
              return tmp73;
            } else if (tmp(tmp2[6]).ComponentType.TEXT_DISPLAY === type) {
              const obj4 = {};
              const merged4 = Object.assign(accessory);
              const textDisplayComponent = markdownConfigs.textDisplayComponent;
              const content = accessory.content;
              let _HermesInternal = HermesInternal;
              let combined = "" + textDisplayComponent.type + "-" + message.id + "-" + content;
              value = priv.get(combined);
              if (null == value) {
                const obj5 = {};
                const merged5 = Object.assign(textDisplayComponent.parserState);
                const parseToASTResult = require("MarkupUtils").parseToAST(content, true, obj5);
                let result = priv.set(combined, parseToASTResult);
                value = parseToASTResult;
                const obj31 = require("MarkupUtils");
              }
              obj4.content = value;
              return obj4;
            } else if (tmp(tmp2[6]).ComponentType.THUMBNAIL === type) {
              ({ width, height, contentType } = accessory.media);
              if (null != width) {
                if (width > 0) {
                  if (null != height) {
                    if (height > 0) {
                      if (tmpResult7.isImageContentType(contentType)) {
                        let VISUAL_PLACEHOLDER = tmp(tmp2[14]).MediaGalleryItemType.IMAGE;
                      } else {
                        if (tmpResult8.isVideoContentType(contentType)) {
                          VISUAL_PLACEHOLDER = tmp(tmp2[14]).MediaGalleryItemType.VIDEO;
                        }
                        tmpResult8 = tmp(tmp2[20]);
                      }
                      tmpResult7 = tmp(tmp2[20]);
                    }
                    let str2 = "generic";
                    if (VISUAL_PLACEHOLDER === tmp(tmp2[14]).MediaGalleryItemType.IMAGE) {
                      str2 = "image";
                    }
                    let obj6 = {
                      type: str2,
                      mediaItem: null,
                      isSpoilered: null,
                      isAuthorBot: null,
                      shouldObscureSpoiler: null,
                      shouldAgeVerify: null,
                      enabledContentHarmTypeFlags: null,
                    };
                    ({ media: obj25.mediaItem, spoiler: spoiler2 } = accessory);
                    if (spoiler2 == null) {
                      spoiler2 = false;
                    }
                    obj6.isSpoilered = spoiler2;
                    obj6.isAuthorBot = message.author.bot;
                    obj6.shouldObscureSpoiler = shouldObscureSpoiler;
                    obj6.shouldAgeVerify = shouldAgeVerify;
                    obj6.enabledContentHarmTypeFlags = enabledContentHarmTypeFlags;
                    let unfurledMediaItemObscurityProps = tmp(tmp2[13]).getUnfurledMediaItemObscurityProps(obj6);
                    const isObscured2 = unfurledMediaItemObscurityProps.isObscured;
                    let isVerifiedTeenResult = isObscured2;
                    ({
                      isSpoiler: isSpoiler2,
                      spoilerDescription: spoilerDescription2,
                      obscureDescription: obscureDescription2,
                      obscureAwaitingScan: obscureAwaitingScan2,
                    } = unfurledMediaItemObscurityProps);
                    if (isObscured2) {
                      isVerifiedTeenResult = tmp(tmp2[15]).isVerifiedTeen();
                      const tmpResult10 = tmp(tmp2[15]);
                    }
                    const obj7 = {};
                    const merged6 = Object.assign(accessory);
                    obj7.media = transformUnfurledMediaItem(accessory.media, message);
                    obj7.isSpoiler = isSpoiler2;
                    obj7.spoilerDescription = spoilerDescription2;
                    obj7.isObscure = isObscured2;
                    obj7.isObscureAwaitingScan = obscureAwaitingScan2;
                    obj7.obscureDescription = obscureDescription2;
                    let tmp55 = isObscured2;
                    if (isObscured2) {
                      tmp55 = shouldAgeVerify;
                    }
                    obj7.verifyAge = tmp55;
                    obj7.obscureHideControls = isVerifiedTeenResult;
                    obj7.obscureIsOpaque = isObscured2;
                    let intl3 = tmp(tmp2[8]).intl;
                    obj7.descriptionHint = intl3.string(tmp(tmp2[8]).t.IPzNKE);
                    let intl4 = tmp(tmp2[8]).intl;
                    obj7.accessibilityRole = intl4.string(tmp(tmp2[8]).t.fKyfca);
                    return obj7;
                  }
                }
              }
              VISUAL_PLACEHOLDER = tmp(tmp2[14]).MediaGalleryItemType.VISUAL_PLACEHOLDER;
            } else if (tmp(tmp2[6]).ComponentType.MEDIA_GALLERY === type) {
              const items = accessory.items;
              const mapped3 = items.map((media, index) => {
                ({ width, height, contentType } = media.media);
                if (null != width) {
                  if (width > 0) {
                    if (null != height) {
                      if (height > 0) {
                        let obj = MediaFormatTesters;
                        if (obj.isImageContentType(contentType)) {
                          let VISUAL_PLACEHOLDER = tmp(8126).MediaGalleryItemType.IMAGE;
                        } else {
                          if (tmpResult.isVideoContentType(contentType)) {
                            VISUAL_PLACEHOLDER = tmp(8126).MediaGalleryItemType.VIDEO;
                          }
                          tmpResult = tmp(4710);
                        }
                      }
                      let tmp4Result = ExplicitMediaUtils;
                      let str = "image";
                      if (VISUAL_PLACEHOLDER !== RowGeneratorTypes.MediaGalleryItemType.IMAGE) {
                        let str2 = "generic";
                        if (VISUAL_PLACEHOLDER === RowGeneratorTypes.MediaGalleryItemType.VIDEO) {
                          str2 = "video";
                        }
                        str = str2;
                      }
                      obj = {
                        type: str,
                        mediaItem: null,
                        isSpoilered: null,
                        isAuthorBot: null,
                        shouldObscureSpoiler: null,
                        enabledContentHarmTypeFlags: null,
                        shouldAgeVerify: null,
                      };
                      ({ media: obj4.mediaItem, spoiler } = media);
                      if (spoiler == null) {
                        spoiler = false;
                      }
                      obj.isSpoilered = spoiler;
                      obj.isAuthorBot = message.author.bot;
                      obj.shouldObscureSpoiler = shouldObscureSpoiler;
                      obj.enabledContentHarmTypeFlags = enabledContentHarmTypeFlags;
                      obj.shouldAgeVerify = shouldAgeVerify;
                      const unfurledMediaItemObscurityProps = tmp4Result.getUnfurledMediaItemObscurityProps(obj);
                      const isObscured = unfurledMediaItemObscurityProps.isObscured;
                      let isVerifiedTeenResult = isObscured;
                      ({ isSpoiler, spoilerDescription, obscureDescription, obscureAwaitingScan } =
                        unfurledMediaItemObscurityProps);
                      if (isObscured) {
                        tmp4Result = AgeVerificationUtils;
                        isVerifiedTeenResult = tmp4Result.isVerifiedTeen();
                      }
                      if (VISUAL_PLACEHOLDER !== RowGeneratorTypes.MediaGalleryItemType.VIDEO) {
                        obj = {};
                        const merged = Object.assign(media);
                        obj.media = transformUnfurledMediaItem(media.media, closure_0);
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
                        obj.showDescription = showDescription;
                        if (VISUAL_PLACEHOLDER === RowGeneratorTypes.MediaGalleryItemType.VIDEO) {
                          const intl2 = util.intl;
                          let stringResult = intl2.string(util.t["BEWw/7"]);
                        } else {
                          const intl = util.intl;
                          stringResult = intl.string(util.t.IPzNKE);
                        }
                        obj.descriptionHint = stringResult;
                        if (VISUAL_PLACEHOLDER === RowGeneratorTypes.MediaGalleryItemType.VIDEO) {
                          const intl4 = util.intl;
                          let stringResult1 = intl4.string(util.t["/SCpvi"]);
                        } else {
                          const intl3 = util.intl;
                          stringResult1 = intl3.string(util.t.fKyfca);
                        }
                        obj.accessibilityRole = stringResult1;
                        let combined = null;
                        if (VISUAL_PLACEHOLDER === RowGeneratorTypes.MediaGalleryItemType.VIDEO) {
                          const _HermesInternal = HermesInternal;
                          combined = "" + message.id + "_MediaGallery(" + accessory.id + ")_" + index;
                        }
                        obj.portalId = combined;
                        let tmp16 = obj;
                      } else {
                        const str3 = URLUtilsDefault.toURLSafe(media.media.proxyUrl);
                        str = null;
                        if (null != str3) {
                          const searchParams = str3.searchParams;
                          const result = searchParams.set("format", "webp");
                          str = str3.toString();
                        }
                        tmp16 = null;
                        tmp12 = str;
                      }
                      return tmp16;
                    }
                  }
                }
                VISUAL_PLACEHOLDER = RowGeneratorTypes.MediaGalleryItemType.VISUAL_PLACEHOLDER;
              });
              const found2 = mapped3.filter(tmp(tmp2[5]).isNotNullish);
              let tmp44 = null;
              if (0 !== found2.length) {
                const obj8 = {};
                const merged7 = Object.assign(accessory);
                obj8.items = found2;
                tmp44 = obj8;
              }
              return tmp44;
            } else if (tmp(tmp2[6]).ComponentType.FILE === type) {
              let obj9 = {
                type: "file",
                mediaItem: null,
                isSpoilered: null,
                isAuthorBot: null,
                shouldObscureSpoiler: null,
                shouldAgeVerify: null,
                enabledContentHarmTypeFlags: null,
              };
              ({ file: obj16.mediaItem, spoiler } = accessory);
              if (spoiler == null) {
                spoiler = false;
              }
              obj9.isSpoilered = spoiler;
              obj9.isAuthorBot = message.author.bot;
              obj9.shouldObscureSpoiler = shouldObscureSpoiler;
              obj9.shouldAgeVerify = shouldAgeVerify;
              obj9.enabledContentHarmTypeFlags = enabledContentHarmTypeFlags;
              const unfurledMediaItemObscurityProps1 = tmp(tmp2[13]).getUnfurledMediaItemObscurityProps(obj9);
              let isObscured = unfurledMediaItemObscurityProps1.isObscured;
              let isVerifiedTeenResult1 = isObscured;
              ({ isSpoiler, spoilerDescription, obscureDescription, obscureAwaitingScan } =
                unfurledMediaItemObscurityProps1);
              if (isObscured) {
                isVerifiedTeenResult1 = tmp(tmp2[15]).isVerifiedTeen();
                const tmpResult12 = tmp(tmp2[15]);
              }
              const obj10 = {};
              const merged8 = Object.assign(accessory);
              obj10.file = transformUnfurledMediaItem(accessory.file, message);
              let name = accessory.name;
              if (name == null) {
                let intl2 = tmp(tmp2[8]).intl;
                name = intl2.string(tmp(tmp2[8]).t.GnuJ5u);
              }
              obj10.name = name;
              let obj18 = require("noConflict");
              let num5 = accessory.size;
              if (num5 == null) {
                num5 = 0;
              }
              obj10.size = obj18.filesize(num5);
              const tmpResult11 = tmp(tmp2[13]);
              obj10.isSuspiciousDownload = null != tmp(tmp2[17]).isSuspiciousDownload(accessory.file.url);
              obj10.isSpoiler = isSpoiler;
              obj10.spoilerDescription = spoilerDescription;
              obj10.isObscure = isObscured;
              obj10.isObscureAwaitingScan = obscureAwaitingScan;
              obj10.obscureDescription = obscureDescription;
              let tmp43 = isObscured;
              if (isObscured) {
                tmp43 = shouldAgeVerify;
              }
              obj10.verifyAge = tmp43;
              obj10.obscureHideControls = isVerifiedTeenResult1;
              obj10.obscureIsOpaque = isObscured;
              return obj10;
            } else if (tmp(tmp2[6]).ComponentType.SEPARATOR === type) {
              return accessory;
            } else if (tmp(tmp2[6]).ComponentType.TEXT_INPUT === type) {
              return null;
            } else if (tmp(tmp2[6]).ComponentType.CONTENT_INVENTORY_ENTRY === type) {
              const obj11 = { type: null, id: null, contentInventoryEntry: null };
              ({ type: obj12.type, id: obj12.id } = accessory);
              const obj12 = { component: accessory, message };
              obj11.contentInventoryEntry = tmp(tmp2[18]).transformToRowGeneratedContentInventoryEntryComponent(obj12);
              return obj11;
            } else if (tmp(tmp2[6]).ComponentType.CONTAINER === type) {
              const obj13 = {};
              const merged9 = Object.assign(accessory);
              const components2 = accessory.components;
              const mapped4 = components2.map((item) => {
                const tmp = transformToRowGeneratedComponent(closure_0, item);
                let tmp2 = null;
                if (null != tmp) {
                  tmp2 = tmp;
                }
                return tmp2;
              });
              obj13.components = mapped4.filter(tmp(tmp2[5]).isNotNullish);
              let tmp30 = null;
              if (null != accessory.accentColor) {
                tmp30 = processColor(accessory.accentColor);
              }
              obj13.accentColor = tmp30;
              obj13.isSpoiler = accessory.spoiler;
              let stringResult = null;
              if (accessory.spoiler) {
                let intl = tmp(tmp2[8]).intl;
                stringResult = intl.string(tmp(tmp2[8]).t.C8ci33);
              }
              obj13.spoilerDescription = stringResult;
              let embedBackgroundColor = colors.embedBackgroundColor;
              if (embedBackgroundColor == null) {
                embedBackgroundColor = null;
              }
              obj13.themedBackgroundColor = embedBackgroundColor;
              return obj13;
            } else {
              if (tmp(tmp2[6]).ComponentType.LABEL !== type) {
                if (tmp(tmp2[6]).ComponentType.FILE_UPLOAD !== type) {
                  if (tmp(tmp2[6]).ComponentType.CHECKPOINT_CARD === type) {
                    const checkpointData = accessory.checkpointData;
                    const tmp6 = enabledContentHarmTypeFlags(accessory, shouldObscureSpoiler);
                    if (checkpointData.version === shouldAgeVerify.V2025) {
                      const _Intl = Intl;
                      const numberFormat = new Intl.NumberFormat(tmp(tmp2[8]).intl.currentLocale, {
                        notation: "compact",
                        compactDisplay: "short",
                      });
                      const obj14 = {};
                      const merged10 = Object.assign(tmp6);
                      const obj15 = {};
                      const merged11 = Object.assign(checkpointData);
                      obj15.cardId = checkpointData.cardId.toString();
                      obj15.cardAssetUrl = tmp(tmp2[29]).getCardAssetUrl(checkpointData.cardId);
                      obj15.authorId = message.author.id;
                      let num = checkpointData.powerLevel;
                      if (num == null) {
                        num = 0;
                      }
                      obj15.powerLevel = numberFormat.format(num);
                      const tmpResult15 = tmp(tmp2[29]);
                      let num2 = checkpointData.powerLevelPercentile;
                      if (num2 == null) {
                        num2 = 0;
                      }
                      const checkpointPowerBarUnits = tmp(tmp2[29]).getCheckpointPowerBarUnits(num2);
                      const tmpResult16 = tmp(tmp2[29]);
                      let num3 = 10;
                      if (tmpResult17.isIOS()) {
                        num3 = 9;
                      }
                      obj15.powerLevelUnits = Math.min(checkpointPowerBarUnits, num3);
                      tmpResult17 = tmp(tmp2[30]);
                      obj15.voiceString = tmp(tmp2[29]).getVoiceDurationString(checkpointData.totalVoiceMinutes);
                      const numEmojisSent = checkpointData.numEmojisSent;
                      obj15.reactionString = numEmojisSent.toLocaleString(tmp(tmp2[8]).intl.currentLocale);
                      const numMessagesSent = checkpointData.numMessagesSent;
                      obj15.messagesString = numMessagesSent.toLocaleString(tmp(tmp2[8]).intl.currentLocale);
                      let tmp20;
                      if (null != checkpointData.topEmoji) {
                        const obj16 = {};
                        const merged12 = Object.assign(checkpointData.topEmoji);
                        let result1;
                        if (null == checkpointData.topEmoji.emojiId) {
                          obj9 = require("UnicodeEmojis");
                          result1 = obj9.convertSurrogateToName(checkpointData.topEmoji.emojiName);
                        }
                        obj16.emojiSurrogateName = result1;
                        tmp20 = obj16;
                      }
                      obj15.topEmoji = tmp20;
                      obj15.clickable = undefined;
                      obj14.checkpointData = obj15;
                      obj = obj14;
                      const tmpResult18 = tmp(tmp2[29]);
                    } else {
                      obj = { type: tmp(tmp2[6]).ComponentType.UNKNOWN, id: accessory.id };
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
    const initialSnowflakeSelectOptions = tmp(tmp2[11]).getInitialSnowflakeSelectOptions(
      accessory,
      message.id,
      guildId,
    );
    const obj17 = {};
    const merged13 = Object.assign(accessory);
    const tmpResult19 = tmp(tmp2[11]);
    obj17.state = tmp(tmp2[9]).getActionComponentState(interaction, accessory, shouldDisableInteractiveComponents);
    const tmpResult20 = tmp(tmp2[9]);
    obj17.selectedOptions = tmp(tmp2[12]).transformSearchableSelectOptions(initialSnowflakeSelectOptions, guildId);
    const tmpResult21 = tmp(tmp2[12]);
    obj17.placeholder = tmp(tmp2[7]).getSelectPlaceholder(accessory);
    closure_129_0 = accessory;
    closure_129_1 = initialSnowflakeSelectOptions;
    closure_129_2 = (label) => label.label;
    const tmpResult22 = tmp(tmp2[7]);
    obj18 = {
      expensive() {
        if (null != closure_1) {
          if (0 !== arr.length) {
            const mapped = arr.map(message);
            const intl = util.intl;
            const obj = { selections: mapped.join(",") };
            return intl.formatToPlainString(util.t["I/ROH+"], obj);
          }
        }
        const placeholder = InteractionComponentUtils.getSelectPlaceholder(closure_0);
        const intl2 = util.intl;
        return intl2.formatToPlainString(util.t["3aednA"], { placeholder });
      },
      cheap: null,
    };
    const tmpResult23 = tmp(tmp2[19]);
    obj18.cheap = tmp(tmp2[7]).getSelectPlaceholder(accessory);
    obj17.accessibilityLabel = tmpResult23.getAccessibilityLabelOrCheapFallbackUnsafe(obj18);
    return obj17;
  }
}
function transformUnfurledMediaItem(media, shouldShowMedia) {
  ({ width, height, contentType } = media);
  if (null != width) {
    if (width > 0) {
      if (null != height) {
        if (height > 0) {
          if (obj.isImageContentType(contentType)) {
            let VISUAL_PLACEHOLDER = tmp(8126).MediaGalleryItemType.IMAGE;
          } else {
            if (tmpResult.isVideoContentType(contentType)) {
              VISUAL_PLACEHOLDER = tmp(8126).MediaGalleryItemType.VIDEO;
            }
            tmpResult = tmp(4710);
          }
          obj = MediaFormatTesters;
        }
        const size = {};
        const merged = Object.assign(media);
        let tmp4Result = FlagUtils;
        size.srcIsAnimated = tmp4Result.hasFlag(media.flags, MediaTypes.UnfurledMediaItemFlags.IS_ANIMATED);
        if (!shouldShowMedia.shouldShowMedia) {
          size.height = 0;
          size.width = 0;
        }
        if (VISUAL_PLACEHOLDER === RowGeneratorTypes.MediaGalleryItemType.IMAGE) {
          const obj4 = RowGeneratorUtilsDefault;
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
        tmp4Result = sanitizeMediaDimension;
        size.width = tmp4Result.sanitizeMediaDimension(size.width);
        size.height = sanitizeMediaDimension.sanitizeMediaDimension(size.height);
        return size;
      }
    }
  }
  VISUAL_PLACEHOLDER = RowGeneratorTypes.MediaGalleryItemType.VISUAL_PLACEHOLDER;
}
let closure_3 = ["checkpointData"];
const processColor = fn(17).processColor;
const CheckpointVersions = fn(4786).CheckpointVersions;
let closure_7 = fn(8111).TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS;
let obj = { max: Infinity, maxAge: null, updateAgeOnGet: true };
obj.maxAge = 15 * DurationsDefault.Millis.MINUTE;
priv = new priv(obj);
let size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/transformMessageComponents.tsx");

export default function transformMessageComponents(message, arr) {
  textDisplayComponent = {
    type: "textDisplayComponent",
    parserState: textDisplayComponent(7888).getInitialParserStateFromMessage(message.message, closure_7),
  };
  textDisplayComponent = {};
  const merged = Object.assign(message);
  textDisplayComponent.markdownConfigs = { textDisplayComponent };
  const mapped = arr.map((item) => transformToRowGeneratedComponent(obj, item));
  return mapped.filter(textDisplayComponent(1369).isNotNullish);
}
export const getUnfurledMediaItemType = function getUnfurledMediaItemType(arg0) {
  ({ width, height, contentType } = arg0);
  if (null != width) {
    if (width > 0) {
      if (null != height) {
        if (height > 0) {
          if (obj.isImageContentType(contentType)) {
            return tmp(8126).MediaGalleryItemType.IMAGE;
          } else {
            if (tmpResult.isVideoContentType(contentType)) {
              return tmp(8126).MediaGalleryItemType.VIDEO;
            }
            tmpResult = tmp(4710);
          }
          obj = MediaFormatTesters;
        }
      }
    }
  }
  return RowGeneratorTypes.MediaGalleryItemType.VISUAL_PLACEHOLDER;
};
