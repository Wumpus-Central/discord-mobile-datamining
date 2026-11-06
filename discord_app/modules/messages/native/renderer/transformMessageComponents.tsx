// === Module 8786: transformMessageComponents ===

// Module 8786 (transformMessageComponents)
import DurationsDefault from "Durations" /* 1089 */;
import URLUtilsDefault from "URLUtils" /* 1378 */;
import MediaFormatTesters from "MediaFormatTesters" /* 6209 */;
import InteractionComponentUtils from "InteractionComponentUtils" /* 6223 */;
import RowGeneratorUtilsDefault from "RowGeneratorUtils" /* 8782 */;
import RowGeneratorTypes from "RowGeneratorTypes" /* 8802 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import priv from "priv" /* 1453 */;

const util = tmp4(1113);
const FlagUtils = tmp4(1403);
const MediaTypes = tmp4(6230);
const AgeVerificationUtils = tmp4(6806);
const sanitizeMediaDimension = tmp4(8781);
const ExplicitMediaUtils = tmp4(8801);
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
    obj.errorText = tmp(tmp2[7]).getLayoutComponentErrorText(interaction, message, accessory);
    return obj;
  } else if (tmp(tmp2[6]).ComponentType.BUTTON === type) {
    if (accessory.style === tmp(tmp2[6]).ButtonStyle.PREMIUM) {
      const intl5 = tmp(tmp2[8]).intl;
      let label = intl5.string(tmp(tmp2[8]).t.CHa0vN);
    } else {
      label = accessory.label;
    }
    let obj2 = {};
    const merged1 = Object.assign(accessory);
    obj2.state = tmp(tmp2[9]).getActionComponentState(interaction, accessory, shouldDisableInteractiveComponents);
    obj2.label = label;
    return obj2;
  } else if (tmp(tmp2[6]).ComponentType.STRING_SELECT === type) {
    const initialStringSelectOptions = tmp(tmp2[10]).getInitialStringSelectOptions(accessory, message.id);
    const mapped1 = initialStringSelectOptions.map((item) => {
      closure_0 = item;
      const options = accessory.options;
      return options.findIndex((value) => value.value === closure_0);
    });
    const found1 = mapped1.filter((item) => -1 !== item);
    let obj3 = {};
    const merged2 = Object.assign(accessory);
    const tmpResult31 = tmp(tmp2[10]);
    obj3.state = tmp(tmp2[9]).getActionComponentState(interaction, accessory, shouldDisableInteractiveComponents);
    obj3.selectedOptions = found1;
    const tmpResult32 = tmp(tmp2[9]);
    obj3.placeholder = tmp(tmp2[7]).getSelectPlaceholder(accessory);
    closure_130_0 = accessory;
    closure_130_1 = found1;
    closure_130_2 = (arg0) => accessory.options[arg0].label;
    const tmpResult33 = tmp(tmp2[7]);
    const obj4 = {
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
      cheap: null
    };
    const tmpResult34 = tmp(tmp2[20]);
    obj4.cheap = tmp(tmp2[7]).getSelectPlaceholder(accessory);
    obj3.accessibilityLabel = tmpResult34.getAccessibilityLabelOrCheapFallbackUnsafe(obj4);
    return obj3;
  } else {
    if (tmp(tmp2[6]).ComponentType.USER_SELECT !== type) {
      if (tmp(tmp2[6]).ComponentType.ROLE_SELECT !== type) {
        if (tmp(tmp2[6]).ComponentType.MENTIONABLE_SELECT !== type) {
          if (tmp(tmp2[6]).ComponentType.CHANNEL_SELECT !== type) {
            if (tmp(tmp2[6]).ComponentType.SECTION === type) {
              const tmp64 = transformToRowGeneratedComponent(message, accessory.accessory);
              let tmp66 = null;
              if (null != tmp64) {
                tmp66 = tmp64;
              }
              let tmp67 = null;
              if (null != tmp66) {
                const obj5 = {};
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
                obj5.components = mapped2.filter(tmp(tmp2[5]).isNotNullish);
                obj5.accessory = tmp66;
                obj5.errorText = tmp(tmp2[7]).getLayoutComponentErrorText(interaction, message, accessory);
                tmp67 = obj5;
                const tmpResult36 = tmp(tmp2[7]);
              }
              return tmp67;
            } else if (tmp(tmp2[6]).ComponentType.TEXT_DISPLAY === type) {
              let obj6 = {};
              const merged4 = Object.assign(accessory);
              const textDisplayComponent = markdownConfigs.textDisplayComponent;
              const content = accessory.content;
              let _HermesInternal = HermesInternal;
              let combined = "" + textDisplayComponent.type + "-" + message.id + "-" + content;
              value = importDefaultResult1.get(combined);
              if (null == value) {
                const obj7 = {};
                const merged5 = Object.assign(textDisplayComponent.parserState);
                const parseToASTResult = require("MarkupUtils").parseToAST(content, true, obj7);
                let result = importDefaultResult1.set(combined, parseToASTResult);
                value = parseToASTResult;
                const obj33 = require("MarkupUtils");
              }
              obj6.content = value;
              return obj6;
            } else if (tmp(tmp2[6]).ComponentType.THUMBNAIL === type) {
              ({ width, height, contentType } = accessory.media);
              if (null != width) {
                if (width > 0) {
                  if (null != height) {
                    if (height > 0) {
                      if (tmpResult37.isImageContentType(contentType)) {
                        let VISUAL_PLACEHOLDER = tmp(tmp2[14]).MediaGalleryItemType.IMAGE;
                      } else {
                        if (tmpResult38.isVideoContentType(contentType)) {
                          VISUAL_PLACEHOLDER = tmp(tmp2[14]).MediaGalleryItemType.VIDEO;
                        }
                        tmpResult38 = tmp(tmp2[21]);
                      }
                      tmpResult37 = tmp(tmp2[21]);
                    }
                    let str2 = "generic";
                    if (VISUAL_PLACEHOLDER === tmp(tmp2[14]).MediaGalleryItemType.IMAGE) {
                      str2 = "image";
                    }
                    const obj8 = { type: str2, mediaItem: null, isSpoilered: null, isAuthorBot: null, shouldObscureSpoiler: null, shouldAgeVerify: null, enabledContentHarmTypeFlags: null };
                    ({ media: obj27.mediaItem, spoiler: spoiler2 } = accessory);
                    if (spoiler2 == null) {
                      spoiler2 = false;
                    }
                    obj8.isSpoilered = spoiler2;
                    obj8.isAuthorBot = message.author.bot;
                    obj8.shouldObscureSpoiler = shouldObscureSpoiler;
                    obj8.shouldAgeVerify = shouldAgeVerify;
                    obj8.enabledContentHarmTypeFlags = enabledContentHarmTypeFlags;
                    let unfurledMediaItemObscurityProps = tmp(tmp2[13]).getUnfurledMediaItemObscurityProps(obj8);
                    const isObscured2 = unfurledMediaItemObscurityProps.isObscured;
                    let isVerifiedTeenResult = isObscured2;
                    ({ isSpoiler: isSpoiler2, spoilerDescription: spoilerDescription2, obscureDescription: obscureDescription2, obscureAwaitingScan: obscureAwaitingScan2 } = unfurledMediaItemObscurityProps);
                    if (isObscured2) {
                      isVerifiedTeenResult = tmp(tmp2[15]).isVerifiedTeen();
                      const tmpResult40 = tmp(tmp2[15]);
                    }
                    const obj9 = {};
                    const merged6 = Object.assign(accessory);
                    obj9.media = transformUnfurledMediaItem(accessory.media, message);
                    obj9.isSpoiler = isSpoiler2;
                    obj9.spoilerDescription = spoilerDescription2;
                    obj9.isObscure = isObscured2;
                    obj9.isObscureAwaitingScan = obscureAwaitingScan2;
                    obj9.obscureDescription = obscureDescription2;
                    let tmp49 = isObscured2;
                    if (isObscured2) {
                      tmp49 = shouldAgeVerify;
                    }
                    obj9.verifyAge = tmp49;
                    obj9.obscureHideControls = isVerifiedTeenResult;
                    obj9.obscureIsOpaque = isObscured2;
                    let intl3 = tmp(tmp2[8]).intl;
                    obj9.descriptionHint = intl3.string(tmp(tmp2[8]).t.IPzNKE);
                    let intl4 = tmp(tmp2[8]).intl;
                    obj9.accessibilityRole = intl4.string(tmp(tmp2[8]).t.fKyfca);
                    return obj9;
                  }
                }
              }
              VISUAL_PLACEHOLDER = tmp(tmp2[14]).MediaGalleryItemType.VISUAL_PLACEHOLDER;
            } else if (tmp(tmp2[6]).ComponentType.MEDIA_GALLERY === type) {
              items = accessory.items;
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
                      const obj2 = { type: str, mediaItem: null, isSpoilered: null, isAuthorBot: null, shouldObscureSpoiler: null, enabledContentHarmTypeFlags: null, shouldAgeVerify: null };
                      ({ media: obj4.mediaItem, spoiler } = media);
                      if (spoiler == null) {
                        spoiler = false;
                      }
                      obj2.isSpoilered = spoiler;
                      obj2.isAuthorBot = message.author.bot;
                      obj2.shouldObscureSpoiler = shouldObscureSpoiler;
                      obj2.enabledContentHarmTypeFlags = enabledContentHarmTypeFlags;
                      obj2.shouldAgeVerify = shouldAgeVerify;
                      const unfurledMediaItemObscurityProps = ExplicitMediaUtils.getUnfurledMediaItemObscurityProps(obj2);
                      const isObscured = unfurledMediaItemObscurityProps.isObscured;
                      let isVerifiedTeenResult = isObscured;
                      ({ isSpoiler, spoilerDescription, obscureDescription, obscureAwaitingScan } = unfurledMediaItemObscurityProps);
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
              let tmp38 = null;
              if (0 !== found2.length) {
                const obj10 = {};
                const merged7 = Object.assign(accessory);
                obj10.items = found2;
                tmp38 = obj10;
              }
              return tmp38;
            } else if (tmp(tmp2[6]).ComponentType.FILE === type) {
              const obj11 = { type: "file", mediaItem: null, isSpoilered: null, isAuthorBot: null, shouldObscureSpoiler: null, shouldAgeVerify: null, enabledContentHarmTypeFlags: null };
              ({ file: obj18.mediaItem, spoiler } = accessory);
              if (spoiler == null) {
                spoiler = false;
              }
              obj11.isSpoilered = spoiler;
              obj11.isAuthorBot = message.author.bot;
              obj11.shouldObscureSpoiler = shouldObscureSpoiler;
              obj11.shouldAgeVerify = shouldAgeVerify;
              obj11.enabledContentHarmTypeFlags = enabledContentHarmTypeFlags;
              const unfurledMediaItemObscurityProps1 = tmp(tmp2[13]).getUnfurledMediaItemObscurityProps(obj11);
              let isObscured = unfurledMediaItemObscurityProps1.isObscured;
              let isVerifiedTeenResult1 = isObscured;
              ({ isSpoiler, spoilerDescription, obscureDescription, obscureAwaitingScan } = unfurledMediaItemObscurityProps1);
              if (isObscured) {
                isVerifiedTeenResult1 = tmp(tmp2[15]).isVerifiedTeen();
                const tmpResult42 = tmp(tmp2[15]);
              }
              const obj12 = {};
              const merged8 = Object.assign(accessory);
              obj12.file = transformUnfurledMediaItem(accessory.file, message);
              let name = accessory.name;
              if (name == null) {
                let intl2 = tmp(tmp2[8]).intl;
                name = intl2.string(tmp(tmp2[8]).t.GnuJ5u);
              }
              obj12.name = name;
              const tmpResult41 = tmp(tmp2[13]);
              let num2 = accessory.size;
              if (num2 == null) {
                num2 = 0;
              }
              obj12.size = require("noConflict").filesize(num2);
              const obj21 = require("noConflict");
              obj12.isSuspiciousDownload = null != tmp(tmp2[17]).isSuspiciousDownload(accessory.file.url);
              obj12.isSpoiler = isSpoiler;
              obj12.spoilerDescription = spoilerDescription;
              obj12.isObscure = isObscured;
              obj12.isObscureAwaitingScan = obscureAwaitingScan;
              obj12.obscureDescription = obscureDescription;
              let tmp37 = isObscured;
              if (isObscured) {
                tmp37 = shouldAgeVerify;
              }
              obj12.verifyAge = tmp37;
              obj12.obscureHideControls = isVerifiedTeenResult1;
              obj12.obscureIsOpaque = isObscured;
              return obj12;
            } else if (tmp(tmp2[6]).ComponentType.SEPARATOR === type) {
              return accessory;
            } else if (tmp(tmp2[6]).ComponentType.TEXT_INPUT === type) {
              return null;
            } else if (tmp(tmp2[6]).ComponentType.CONTENT_INVENTORY_ENTRY === type) {
              const obj13 = { type: null, id: null, contentInventoryEntry: null };
              ({ type: obj14.type, id: obj14.id } = accessory);
              const obj15 = { component: accessory, message };
              obj13.contentInventoryEntry = tmp(tmp2[18]).transformToRowGeneratedContentInventoryEntryComponent(obj15);
              return obj13;
            } else if (tmp(tmp2[6]).ComponentType.CONTAINER === type) {
              const obj16 = {};
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
              obj16.components = mapped4.filter(tmp(tmp2[5]).isNotNullish);
              let tmp24 = null;
              if (null != accessory.accentColor) {
                tmp24 = processColor(tmp(tmp2[19]).int2hsl(accessory.accentColor));
                const tmpResult45 = tmp(tmp2[19]);
              }
              obj16.accentColor = tmp24;
              obj16.isSpoiler = accessory.spoiler && shouldObscureSpoiler;
              let stringResult = null;
              if (accessory.spoiler && shouldObscureSpoiler) {
                let intl = tmp(tmp2[8]).intl;
                stringResult = intl.string(tmp(tmp2[8]).t.C8ci33);
              }
              obj16.spoilerDescription = stringResult;
              let embedBackgroundColor = colors.embedBackgroundColor;
              if (embedBackgroundColor == null) {
                embedBackgroundColor = null;
              }
              obj16.themedBackgroundColor = embedBackgroundColor;
              return obj16;
            } else {
              if (tmp(tmp2[6]).ComponentType.LABEL !== type) {
                if (tmp(tmp2[6]).ComponentType.FILE_UPLOAD !== type) {
                  if (tmp(tmp2[6]).ComponentType.CHECKPOINT_CARD === type) {
                    const checkpointData = accessory.checkpointData;
                    const tmp6 = enabledContentHarmTypeFlags(accessory, shouldObscureSpoiler);
                    const version = checkpointData.version;
                    if (shouldAgeVerify.V2025 === version) {
                      const obj17 = {};
                      const merged10 = Object.assign(tmp6);
                      obj17.checkpointData = tmp(tmp2[30]).transformCheckpoint2025CardToRowGeneratedComponent(checkpointData, message);
                      let obj22 = obj17;
                      const tmpResult46 = tmp(tmp2[30]);
                    } else {
                      if (tmp7.V2026 === version) {
                        if (tmpResult47.getIsCheckpointCardEnabled("transformCheckpointCardToRowGeneratedComponent")) {
                          const cardColors = tmp(tmp2[32]).getCardColors(checkpointData.cardColorPalette);
                          const tmpResult48 = tmp(tmp2[32]);
                          const tmpResult49 = tmp(tmp2[33]);
                          const processColorOrThrowResult = tmp(tmp2[33]).processColorOrThrow(cardColors.primaryBackgroundColor);
                          const tmpResult50 = tmp(tmp2[33]);
                          const processColorOrThrowResult1 = tmp(tmp2[33]).processColorOrThrow(cardColors.secondaryBackgroundColor);
                          const obj19 = {};
                          const tmpResult51 = tmp(tmp2[33]);
                          const merged11 = Object.assign(tmp6);
                          const processColorOrThrowResult2 = tmp(tmp2[33]).processColorOrThrow(cardColors.tertiaryBackgroundColor);
                          const obj20 = { checkpointData, message, primaryBackgroundColor: processColorOrThrowResult, secondaryBackgroundColor: processColorOrThrowResult1, tertiaryBackgroundColor: processColorOrThrowResult2 };
                          obj19.checkpointData = tmp(tmp2[34]).transformCheckpoint2026CardToRowGeneratedComponent(obj20);
                          obj22 = obj19;
                          const tmpResult52 = tmp(tmp2[34]);
                        }
                        tmpResult47 = tmp(tmp2[31]);
                      }
                      obj22 = { type: tmp(tmp2[6]).ComponentType.UNKNOWN, id: accessory.id };
                    }
                    return obj22;
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
    const obj23 = {};
    const merged12 = Object.assign(accessory);
    const tmpResult53 = tmp(tmp2[11]);
    obj23.state = tmp(tmp2[9]).getActionComponentState(interaction, accessory, shouldDisableInteractiveComponents);
    const tmpResult54 = tmp(tmp2[9]);
    obj23.selectedOptions = tmp(tmp2[12]).transformSearchableSelectOptions(initialSnowflakeSelectOptions, guildId);
    const tmpResult55 = tmp(tmp2[12]);
    obj23.placeholder = tmp(tmp2[7]).getSelectPlaceholder(accessory);
    closure_129_0 = accessory;
    closure_129_1 = initialSnowflakeSelectOptions;
    closure_129_2 = (label) => label.label;
    const tmpResult56 = tmp(tmp2[7]);
    const obj24 = {
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
      cheap: null
    };
    const tmpResult57 = tmp(tmp2[20]);
    obj24.cheap = tmp(tmp2[7]).getSelectPlaceholder(accessory);
    obj23.accessibilityLabel = tmpResult57.getAccessibilityLabelOrCheapFallbackUnsafe(obj24);
    return obj23;
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
const CheckpointVersions = fn(6224).CheckpointVersions;
let closure_7 = fn(8787).TEXT_DISPLAY_COMPONENT_MARKDOWN_RENDER_OPTIONS;
let obj = { max: Infinity, maxAge: null, updateAgeOnGet: true };
obj.maxAge = 15 * DurationsDefault.Millis.MINUTE;
const importDefaultResult1 = new priv(obj);
let size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/renderer/transformMessageComponents.tsx");

export default function transformMessageComponents(message, arr) {
  const obj = { type: "textDisplayComponent", parserState: obj3(8674).getInitialParserStateFromMessage(message.message, closure_7) };
  obj3 = {};
  const merged = Object.assign(message);
  obj3.markdownConfigs = { textDisplayComponent: obj };
  const mapped = arr.map((item) => transformToRowGeneratedComponent(obj3, item));
  return mapped.filter(obj3(1380).isNotNullish);
};
export function getUnfurledMediaItemType(media) {
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
}