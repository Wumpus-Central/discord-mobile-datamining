// discord_app/modules/messages/native/renderer/transformMessageComponents.tsx
import DurationsDefault from "../../../../utils/Durations.tsx";
import URLUtilsDefault from "../../../../utils/URLUtils.tsx";
import MediaFormatTesters from "../../MediaFormatTesters.tsx";
import InteractionComponentUtils from "../../../interaction_components/InteractionComponentUtils.tsx";
import RowGeneratorUtilsDefault from "RowGeneratorUtils.tsx";
import RowGeneratorTypes from "RowGeneratorTypes.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import priv from "../../../../../_runtime/01438_priv.js";

const util = tmp4(1115);
const FlagUtils = tmp4(1385);
const AgeVerificationUtils = tmp4(4935);
const MediaTypes = tmp4(4953);
const sanitizeMediaDimension = tmp4(8337);
const ExplicitMediaUtils = tmp4(8355);
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
    let obj2 = {};
    const found = mapped.filter(tmp(tmp2[5]).isNotNullish);
    let merged = Object.assign(accessory);
    obj2.components = found;
    obj2.errorText = tmp(tmp2[7]).getLayoutComponentErrorText(interaction, message, accessory);
    return obj2;
  } else if (tmp(tmp2[6]).ComponentType.BUTTON === type) {
    if (accessory.style === tmp(tmp2[6]).ButtonStyle.PREMIUM) {
      const intl5 = tmp(tmp2[8]).intl;
      let label = intl5.string(tmp(tmp2[8]).t.CHa0vN);
    } else {
      label = accessory.label;
    }
    let obj3 = {};
    const merged1 = Object.assign(accessory);
    obj3.state = tmp(tmp2[9]).getActionComponentState(interaction, accessory, shouldDisableInteractiveComponents);
    obj3.label = label;
    return obj3;
  } else if (tmp(tmp2[6]).ComponentType.STRING_SELECT === type) {
    const initialStringSelectOptions = tmp(tmp2[10]).getInitialStringSelectOptions(accessory, message.id);
    const mapped1 = initialStringSelectOptions.map((item) => {
      closure_0 = item;
      const options = accessory.options;
      return options.findIndex((value) => value.value === closure_0);
    });
    const found1 = mapped1.filter((item) => -1 !== item);
    const obj4 = {};
    const merged2 = Object.assign(accessory);
    const tmpResult27 = tmp(tmp2[10]);
    obj4.state = tmp(tmp2[9]).getActionComponentState(interaction, accessory, shouldDisableInteractiveComponents);
    obj4.selectedOptions = found1;
    const tmpResult28 = tmp(tmp2[9]);
    obj4.placeholder = tmp(tmp2[7]).getSelectPlaceholder(accessory);
    closure_130_0 = accessory;
    closure_130_1 = found1;
    closure_130_2 = (arg0) => accessory.options[arg0].label;
    const tmpResult29 = tmp(tmp2[7]);
    const obj5 = {
      expensive() {
        if (null != accessory) {
          if (0 !== accessory.length) {
            const mapped = accessory.map(message);
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
    const tmpResult30 = tmp(tmp2[19]);
    obj5.cheap = tmp(tmp2[7]).getSelectPlaceholder(accessory);
    obj4.accessibilityLabel = tmpResult30.getAccessibilityLabelOrCheapFallbackUnsafe(obj5);
    return obj4;
  } else {
    if (tmp(tmp2[6]).ComponentType.USER_SELECT !== type) {
      if (tmp(tmp2[6]).ComponentType.ROLE_SELECT !== type) {
        if (tmp(tmp2[6]).ComponentType.MENTIONABLE_SELECT !== type) {
          if (tmp(tmp2[6]).ComponentType.CHANNEL_SELECT !== type) {
            if (tmp(tmp2[6]).ComponentType.SECTION === type) {
              const tmp71 = transformToRowGeneratedComponent(message, accessory.accessory);
              let tmp73 = null;
              if (null != tmp71) {
                tmp73 = tmp71;
              }
              let tmp74 = null;
              if (null != tmp73) {
                let obj6 = {};
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
                obj6.components = mapped2.filter(tmp(tmp2[5]).isNotNullish);
                obj6.accessory = tmp73;
                obj6.errorText = tmp(tmp2[7]).getLayoutComponentErrorText(interaction, message, accessory);
                tmp74 = obj6;
                const tmpResult32 = tmp(tmp2[7]);
              }
              return tmp74;
            } else if (tmp(tmp2[6]).ComponentType.TEXT_DISPLAY === type) {
              const obj7 = {};
              const merged4 = Object.assign(accessory);
              const textDisplayComponent = markdownConfigs.textDisplayComponent;
              const content = accessory.content;
              let _HermesInternal = HermesInternal;
              let combined = "" + textDisplayComponent.type + "-" + message.id + "-" + content;
              value = importDefaultResult1.get(combined);
              if (null == value) {
                const obj8 = {};
                const merged5 = Object.assign(textDisplayComponent.parserState);
                const parseToASTResult = require("MarkupUtils").parseToAST(content, true, obj8);
                let result = importDefaultResult1.set(combined, parseToASTResult);
                value = parseToASTResult;
                const obj31 = require("MarkupUtils");
              }
              obj7.content = value;
              return obj7;
            } else if (tmp(tmp2[6]).ComponentType.THUMBNAIL === type) {
              ({ width, height, contentType } = accessory.media);
              if (null != width) {
                if (width > 0) {
                  if (null != height) {
                    if (height > 0) {
                      if (tmpResult33.isImageContentType(contentType)) {
                        let VISUAL_PLACEHOLDER = tmp(tmp2[14]).MediaGalleryItemType.IMAGE;
                      } else {
                        if (tmpResult34.isVideoContentType(contentType)) {
                          VISUAL_PLACEHOLDER = tmp(tmp2[14]).MediaGalleryItemType.VIDEO;
                        }
                        tmpResult34 = tmp(tmp2[20]);
                      }
                      tmpResult33 = tmp(tmp2[20]);
                    }
                    let str2 = "generic";
                    if (VISUAL_PLACEHOLDER === tmp(tmp2[14]).MediaGalleryItemType.IMAGE) {
                      str2 = "image";
                    }
                    const obj9 = {
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
                    obj9.isSpoilered = spoiler2;
                    obj9.isAuthorBot = message.author.bot;
                    obj9.shouldObscureSpoiler = shouldObscureSpoiler;
                    obj9.shouldAgeVerify = shouldAgeVerify;
                    obj9.enabledContentHarmTypeFlags = enabledContentHarmTypeFlags;
                    let unfurledMediaItemObscurityProps = tmp(tmp2[13]).getUnfurledMediaItemObscurityProps(obj9);
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
                      const tmpResult36 = tmp(tmp2[15]);
                    }
                    const obj11 = {};
                    const merged6 = Object.assign(accessory);
                    obj11.media = transformUnfurledMediaItem(accessory.media, message);
                    obj11.isSpoiler = isSpoiler2;
                    obj11.spoilerDescription = spoilerDescription2;
                    obj11.isObscure = isObscured2;
                    obj11.isObscureAwaitingScan = obscureAwaitingScan2;
                    obj11.obscureDescription = obscureDescription2;
                    let tmp56 = isObscured2;
                    if (isObscured2) {
                      tmp56 = shouldAgeVerify;
                    }
                    obj11.verifyAge = tmp56;
                    obj11.obscureHideControls = isVerifiedTeenResult;
                    obj11.obscureIsOpaque = isObscured2;
                    let intl3 = tmp(tmp2[8]).intl;
                    obj11.descriptionHint = intl3.string(tmp(tmp2[8]).t.IPzNKE);
                    let intl4 = tmp(tmp2[8]).intl;
                    obj11.accessibilityRole = intl4.string(tmp(tmp2[8]).t.fKyfca);
                    return obj11;
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
                        if (obj.isImageContentType(contentType)) {
                          let VISUAL_PLACEHOLDER = RowGeneratorTypes.MediaGalleryItemType.IMAGE;
                        } else {
                          if (tmpResult.isVideoContentType(contentType)) {
                            VISUAL_PLACEHOLDER = RowGeneratorTypes.MediaGalleryItemType.VIDEO;
                          }
                          tmpResult = MediaFormatTesters;
                        }
                        obj = MediaFormatTesters;
                      }
                      let str = "image";
                      if (VISUAL_PLACEHOLDER !== RowGeneratorTypes.MediaGalleryItemType.IMAGE) {
                        let str2 = "generic";
                        if (VISUAL_PLACEHOLDER === RowGeneratorTypes.MediaGalleryItemType.VIDEO) {
                          str2 = "video";
                        }
                        str = str2;
                      }
                      const obj2 = {
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
                      obj2.isSpoilered = spoiler;
                      obj2.isAuthorBot = message.author.bot;
                      obj2.shouldObscureSpoiler = shouldObscureSpoiler;
                      obj2.enabledContentHarmTypeFlags = enabledContentHarmTypeFlags;
                      obj2.shouldAgeVerify = shouldAgeVerify;
                      const unfurledMediaItemObscurityProps =
                        ExplicitMediaUtils.getUnfurledMediaItemObscurityProps(obj2);
                      const isObscured = unfurledMediaItemObscurityProps.isObscured;
                      let isVerifiedTeenResult = isObscured;
                      ({ isSpoiler, spoilerDescription, obscureDescription, obscureAwaitingScan } =
                        unfurledMediaItemObscurityProps);
                      if (isObscured) {
                        isVerifiedTeenResult = AgeVerificationUtils.isVerifiedTeen();
                        const tmp4Result2 = AgeVerificationUtils;
                      }
                      if (VISUAL_PLACEHOLDER !== RowGeneratorTypes.MediaGalleryItemType.VIDEO) {
                        const obj3 = {};
                        const merged = Object.assign(media);
                        obj3.media = transformUnfurledMediaItem(media.media, closure_0);
                        obj3.mediaType = VISUAL_PLACEHOLDER;
                        obj3.videoPreviewUrl = tmp12;
                        obj3.isSpoiler = isSpoiler;
                        obj3.spoilerDescription = spoilerDescription;
                        obj3.isObscure = isObscured;
                        obj3.isObscureAwaitingScan = obscureAwaitingScan;
                        obj3.obscureDescription = obscureDescription;
                        let tmp22 = isObscured;
                        if (isObscured) {
                          tmp22 = shouldAgeVerify;
                        }
                        obj3.verifyAge = tmp22;
                        obj3.obscureHideControls = isVerifiedTeenResult;
                        obj3.obscureIsOpaque = isObscured;
                        obj3.showDescription = showDescription;
                        if (VISUAL_PLACEHOLDER === RowGeneratorTypes.MediaGalleryItemType.VIDEO) {
                          const intl2 = util.intl;
                          let stringResult = intl2.string(util.t["BEWw/7"]);
                        } else {
                          const intl = util.intl;
                          stringResult = intl.string(util.t.IPzNKE);
                        }
                        obj3.descriptionHint = stringResult;
                        if (VISUAL_PLACEHOLDER === RowGeneratorTypes.MediaGalleryItemType.VIDEO) {
                          const intl4 = util.intl;
                          let stringResult1 = intl4.string(util.t["/SCpvi"]);
                        } else {
                          const intl3 = util.intl;
                          stringResult1 = intl3.string(util.t.fKyfca);
                        }
                        obj3.accessibilityRole = stringResult1;
                        let combined = null;
                        if (VISUAL_PLACEHOLDER === RowGeneratorTypes.MediaGalleryItemType.VIDEO) {
                          const _HermesInternal = HermesInternal;
                          combined = "" + message.id + "_MediaGallery(" + accessory.id + ")_" + index;
                        }
                        obj3.portalId = combined;
                        let tmp16 = obj3;
                      } else {
                        const str3 = URLUtilsDefault.toURLSafe(media.media.proxyUrl);
                        let str1 = null;
                        if (null != str3) {
                          const searchParams = str3.searchParams;
                          const result = searchParams.set("format", "webp");
                          str1 = str3.toString();
                        }
                        tmp16 = null;
                        tmp12 = str1;
                      }
                      return tmp16;
                    }
                  }
                }
                VISUAL_PLACEHOLDER = RowGeneratorTypes.MediaGalleryItemType.VISUAL_PLACEHOLDER;
              });
              const found2 = mapped3.filter(tmp(tmp2[5]).isNotNullish);
              let tmp45 = null;
              if (0 !== found2.length) {
                const obj13 = {};
                const merged7 = Object.assign(accessory);
                obj13.items = found2;
                tmp45 = obj13;
              }
              return tmp45;
            } else if (tmp(tmp2[6]).ComponentType.FILE === type) {
              const obj14 = {
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
              obj14.isSpoilered = spoiler;
              obj14.isAuthorBot = message.author.bot;
              obj14.shouldObscureSpoiler = shouldObscureSpoiler;
              obj14.shouldAgeVerify = shouldAgeVerify;
              obj14.enabledContentHarmTypeFlags = enabledContentHarmTypeFlags;
              const unfurledMediaItemObscurityProps1 = tmp(tmp2[13]).getUnfurledMediaItemObscurityProps(obj14);
              let isObscured = unfurledMediaItemObscurityProps1.isObscured;
              let isVerifiedTeenResult1 = isObscured;
              ({ isSpoiler, spoilerDescription, obscureDescription, obscureAwaitingScan } =
                unfurledMediaItemObscurityProps1);
              if (isObscured) {
                isVerifiedTeenResult1 = tmp(tmp2[15]).isVerifiedTeen();
                const tmpResult38 = tmp(tmp2[15]);
              }
              const obj15 = {};
              const merged8 = Object.assign(accessory);
              obj15.file = transformUnfurledMediaItem(accessory.file, message);
              let name = accessory.name;
              if (name == null) {
                let intl2 = tmp(tmp2[8]).intl;
                name = intl2.string(tmp(tmp2[8]).t.GnuJ5u);
              }
              obj15.name = name;
              const tmpResult37 = tmp(tmp2[13]);
              let num5 = accessory.size;
              if (num5 == null) {
                num5 = 0;
              }
              obj15.size = require("noConflict").filesize(num5);
              const obj19 = require("noConflict");
              obj15.isSuspiciousDownload = null != tmp(tmp2[17]).isSuspiciousDownload(accessory.file.url);
              obj15.isSpoiler = isSpoiler;
              obj15.spoilerDescription = spoilerDescription;
              obj15.isObscure = isObscured;
              obj15.isObscureAwaitingScan = obscureAwaitingScan;
              obj15.obscureDescription = obscureDescription;
              let tmp44 = isObscured;
              if (isObscured) {
                tmp44 = shouldAgeVerify;
              }
              obj15.verifyAge = tmp44;
              obj15.obscureHideControls = isVerifiedTeenResult1;
              obj15.obscureIsOpaque = isObscured;
              return obj15;
            } else if (tmp(tmp2[6]).ComponentType.SEPARATOR === type) {
              return accessory;
            } else if (tmp(tmp2[6]).ComponentType.TEXT_INPUT === type) {
              return null;
            } else if (tmp(tmp2[6]).ComponentType.CONTENT_INVENTORY_ENTRY === type) {
              const obj17 = { type: null, id: null, contentInventoryEntry: null };
              ({ type: obj12.type, id: obj12.id } = accessory);
              const obj18 = { component: accessory, message };
              obj17.contentInventoryEntry = tmp(tmp2[18]).transformToRowGeneratedContentInventoryEntryComponent(obj18);
              return obj17;
            } else if (tmp(tmp2[6]).ComponentType.CONTAINER === type) {
              const obj20 = {};
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
              obj20.components = mapped4.filter(tmp(tmp2[5]).isNotNullish);
              let tmp31 = null;
              if (null != accessory.accentColor) {
                tmp31 = processColor(accessory.accentColor);
              }
              obj20.accentColor = tmp31;
              obj20.isSpoiler = accessory.spoiler && shouldObscureSpoiler;
              let stringResult = null;
              if (accessory.spoiler && shouldObscureSpoiler) {
                let intl = tmp(tmp2[8]).intl;
                stringResult = intl.string(tmp(tmp2[8]).t.C8ci33);
              }
              obj20.spoilerDescription = stringResult;
              let embedBackgroundColor = colors.embedBackgroundColor;
              if (embedBackgroundColor == null) {
                embedBackgroundColor = null;
              }
              obj20.themedBackgroundColor = embedBackgroundColor;
              return obj20;
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
                      const obj21 = {};
                      const merged10 = Object.assign(tmp6);
                      const obj22 = {};
                      const merged11 = Object.assign(checkpointData);
                      obj22.cardId = checkpointData.cardId.toString();
                      obj22.cardAssetUrl = tmp(tmp2[29]).getCardAssetUrl(checkpointData.cardId);
                      obj22.authorId = message.author.id;
                      let num = checkpointData.powerLevel;
                      if (num == null) {
                        num = 0;
                      }
                      obj22.powerLevel = numberFormat.format(num);
                      const tmpResult41 = tmp(tmp2[29]);
                      let num2 = checkpointData.powerLevelPercentile;
                      if (num2 == null) {
                        num2 = 0;
                      }
                      const checkpointPowerBarUnits = tmp(tmp2[29]).getCheckpointPowerBarUnits(num2);
                      const tmpResult42 = tmp(tmp2[29]);
                      let num3 = 10;
                      if (tmpResult43.isIOS()) {
                        num3 = 9;
                      }
                      obj22.powerLevelUnits = Math.min(checkpointPowerBarUnits, num3);
                      tmpResult43 = tmp(tmp2[30]);
                      obj22.voiceString = tmp(tmp2[29]).getVoiceDurationString(checkpointData.totalVoiceMinutes);
                      const numEmojisSent = checkpointData.numEmojisSent;
                      obj22.reactionString = numEmojisSent.toLocaleString(tmp(tmp2[8]).intl.currentLocale);
                      const numMessagesSent = checkpointData.numMessagesSent;
                      obj22.messagesString = numMessagesSent.toLocaleString(tmp(tmp2[8]).intl.currentLocale);
                      let tmp20;
                      if (null != checkpointData.topEmoji) {
                        const obj23 = {};
                        const merged12 = Object.assign(checkpointData.topEmoji);
                        let result1;
                        if (null == checkpointData.topEmoji.emojiId) {
                          result1 = require("UnicodeEmojis").convertSurrogateToName(checkpointData.topEmoji.emojiName);
                          const obj10 = require("UnicodeEmojis");
                        }
                        obj23.emojiSurrogateName = result1;
                        tmp20 = obj23;
                      }
                      obj22.topEmoji = tmp20;
                      obj22.clickable = undefined;
                      obj21.checkpointData = obj22;
                      let obj = obj21;
                      const tmpResult44 = tmp(tmp2[29]);
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
    const obj24 = {};
    const merged13 = Object.assign(accessory);
    const tmpResult45 = tmp(tmp2[11]);
    obj24.state = tmp(tmp2[9]).getActionComponentState(interaction, accessory, shouldDisableInteractiveComponents);
    const tmpResult46 = tmp(tmp2[9]);
    obj24.selectedOptions = tmp(tmp2[12]).transformSearchableSelectOptions(initialSnowflakeSelectOptions, guildId);
    const tmpResult47 = tmp(tmp2[12]);
    obj24.placeholder = tmp(tmp2[7]).getSelectPlaceholder(accessory);
    closure_129_0 = accessory;
    closure_129_1 = initialSnowflakeSelectOptions;
    closure_129_2 = (label) => label.label;
    const tmpResult48 = tmp(tmp2[7]);
    const obj26 = {
      expensive() {
        if (null != accessory) {
          if (0 !== accessory.length) {
            const mapped = accessory.map(message);
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
    const tmpResult49 = tmp(tmp2[19]);
    obj26.cheap = tmp(tmp2[7]).getSelectPlaceholder(accessory);
    obj24.accessibilityLabel = tmpResult49.getAccessibilityLabelOrCheapFallbackUnsafe(obj26);
    return obj24;
  }
}
function transformUnfurledMediaItem(media, shouldShowMedia) {
  ({ width, height, contentType } = media);
  if (null != width) {
    if (width > 0) {
      if (null != height) {
        if (height > 0) {
          if (obj.isImageContentType(contentType)) {
            let VISUAL_PLACEHOLDER = RowGeneratorTypes.MediaGalleryItemType.IMAGE;
          } else {
            if (tmpResult.isVideoContentType(contentType)) {
              VISUAL_PLACEHOLDER = RowGeneratorTypes.MediaGalleryItemType.VIDEO;
            }
            tmpResult = MediaFormatTesters;
          }
          obj = MediaFormatTesters;
        }
        const size = {};
        const merged = Object.assign(media);
        size.srcIsAnimated = FlagUtils.hasFlag(media.flags, MediaTypes.UnfurledMediaItemFlags.IS_ANIMATED);
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
        const tmp4Result = FlagUtils;
        size.width = sanitizeMediaDimension.sanitizeMediaDimension(size.width);
        const tmp4Result3 = sanitizeMediaDimension;
        size.height = sanitizeMediaDimension.sanitizeMediaDimension(size.height);
        return size;
      }
    }
  }
  VISUAL_PLACEHOLDER = RowGeneratorTypes.MediaGalleryItemType.VISUAL_PLACEHOLDER;
}
let closure_3 = ["checkpointData"];
const processColor = fn(17).processColor;
const CheckpointVersions = fn(4948).CheckpointVersions;
let closure_7 = fn(8341).TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS;
let obj = { max: Infinity, maxAge: null, updateAgeOnGet: true };
obj.maxAge = 15 * DurationsDefault.Millis.MINUTE;
const importDefaultResult1 = new priv(obj);
let size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/transformMessageComponents.tsx");

export default function transformMessageComponents(message, arr) {
  const obj = {
    type: "textDisplayComponent",
    parserState: obj3(8093).getInitialParserStateFromMessage(message.message, closure_7),
  };
  obj3 = {};
  const merged = Object.assign(message);
  obj3.markdownConfigs = { textDisplayComponent: obj };
  const mapped = arr.map((item) => transformToRowGeneratedComponent(obj3, item));
  return mapped.filter(obj3(1370).isNotNullish);
}
export const getUnfurledMediaItemType = function getUnfurledMediaItemType(media) {
  ({ width, height, contentType } = media);
  if (null != width) {
    if (width > 0) {
      if (null != height) {
        if (height > 0) {
          if (obj.isImageContentType(contentType)) {
            return RowGeneratorTypes.MediaGalleryItemType.IMAGE;
          } else {
            if (tmpResult.isVideoContentType(contentType)) {
              return RowGeneratorTypes.MediaGalleryItemType.VIDEO;
            }
            tmpResult = MediaFormatTesters;
          }
          obj = MediaFormatTesters;
        }
      }
    }
  }
  return RowGeneratorTypes.MediaGalleryItemType.VISUAL_PLACEHOLDER;
};
