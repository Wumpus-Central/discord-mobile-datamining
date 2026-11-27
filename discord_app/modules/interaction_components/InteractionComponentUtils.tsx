// === Module 6395: InteractionComponentUtils ===

// Module 6395 (InteractionComponentUtils)
import LoggerDefault from "Logger" /* 3 */;
import util from "util" /* 1112 */;
import GlobalUtils from "GlobalUtils" /* 1255 */;
import v1 from "v1" /* 1269 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1413 */;
import Server from "Server" /* 2118 */;
import CheckpointConstants from "CheckpointConstants" /* 6396 */;
import interactionCallbackErrorReason from "interactionCallbackErrorReason" /* 6398 */;
import InteractionTypes from "InteractionTypes" /* 6400 */;
import interactions_InteractionTypes from "interactions/InteractionTypes" /* 6401 */;
import MediaTypes from "MediaTypes" /* 6402 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 6405 */;
import size from "module_2" /* 2 */;

function flattenComponents(components) {
  const map = new Map();
  while (tmp2 !== undefined) {
    let tmp5 = flattenComponent(map, tmp3);
    continue;
  }
  return map;
}
function flattenComponent(map, item10012) {
  const result = map.set(item10012.id, item10012);
  for (const item10012 of tmp2) {
    let tmp4 = flattenComponent(arg0, item10012);
    continue;
  }
  const tmp2 = getComponentChildren(item10012);
}
function findChildComponent(accessory, componentId) {
  const iter = getComponentChildren(accessory)[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    if (nextResult.id === componentId) {
      iter.return();
      return nextResult;
    } else {
      let tmp6 = findChildComponent(tmp3, componentId);
      if (null != tmp6) {
        iter.return();
        return tmp6;
      }
    }
  }
  return null;
}
function getComponentChildren(nextResult) {
  const type = nextResult.type;
  if (Server.ComponentType.ACTION_ROW === type) {
    return nextResult.components;
  } else if (Server.ComponentType.SECTION === type) {
    if (null != nextResult.accessory) {
      items = [];
      items[HermesBuiltin.arraySpread(nextResult.components, 0)] = nextResult.accessory;
      let components = items;
    } else {
      components = nextResult.components;
    }
    return components;
  } else if (Server.ComponentType.CONTAINER === type) {
    return nextResult.components;
  } else if (Server.ComponentType.LABEL === type) {
    const items1 = [nextResult.component];
    return items1;
  } else if (Server.ComponentType.OVERFLOW_MENU === type) {
    const groups = nextResult.groups;
    return groups.flatMap((components) => components.components);
  } else {
    if (Server.ComponentType.MENU_ACTION_ITEM !== type) {
      if (Server.ComponentType.BUTTON !== type) {
        if (Server.ComponentType.STRING_SELECT !== type) {
          if (Server.ComponentType.TEXT_INPUT !== type) {
            if (Server.ComponentType.USER_SELECT !== type) {
              if (Server.ComponentType.ROLE_SELECT !== type) {
                if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
                  if (Server.ComponentType.CHANNEL_SELECT !== type) {
                    if (Server.ComponentType.TEXT_DISPLAY !== type) {
                      if (Server.ComponentType.THUMBNAIL !== type) {
                        if (Server.ComponentType.MEDIA_GALLERY !== type) {
                          if (Server.ComponentType.FILE !== type) {
                            if (Server.ComponentType.SEPARATOR !== type) {
                              if (Server.ComponentType.CONTENT_INVENTORY_ENTRY !== type) {
                                if (Server.ComponentType.FILE_UPLOAD !== type) {
                                  if (Server.ComponentType.CHECKPOINT_CARD !== type) {
                                    if (Server.ComponentType.RADIO_GROUP !== type) {
                                      if (Server.ComponentType.CHECKBOX_GROUP !== type) {
                                        if (Server.ComponentType.CHECKBOX !== type) {
                                          logger.warn("getComponentChildren: Unknown component type", nextResult.type);
                                          return [];
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
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
  }
}
function transformComponent(type) {
  function getChildComponent(dependencyMap) {
    const tmp = transformComponent(dependencyMap);
    let tmp2 = null;
    if (null != tmp) {
      tmp2 = tmp;
    }
    return tmp2;
  }
  type = type.type;
  let tmp = getChildComponent;
  let flag = true;
  if (getChildComponent(2118).ComponentType.ACTION_ROW !== type) {
    flag = true;
    if (tmp(2118).ComponentType.BUTTON !== type) {
      flag = true;
      if (tmp(2118).ComponentType.STRING_SELECT !== type) {
        flag = true;
        if (tmp(2118).ComponentType.TEXT_INPUT !== type) {
          flag = true;
          if (tmp(2118).ComponentType.USER_SELECT !== type) {
            flag = true;
            if (tmp(2118).ComponentType.ROLE_SELECT !== type) {
              flag = true;
              if (tmp(2118).ComponentType.MENTIONABLE_SELECT !== type) {
                flag = true;
                if (tmp(2118).ComponentType.CHANNEL_SELECT !== type) {
                  flag = true;
                  if (tmp(2118).ComponentType.SECTION !== type) {
                    flag = true;
                    if (tmp(2118).ComponentType.TEXT_DISPLAY !== type) {
                      flag = true;
                      if (tmp(2118).ComponentType.THUMBNAIL !== type) {
                        flag = true;
                        if (tmp(2118).ComponentType.MEDIA_GALLERY !== type) {
                          flag = true;
                          if (tmp(2118).ComponentType.FILE !== type) {
                            flag = true;
                            if (tmp(2118).ComponentType.SEPARATOR !== type) {
                              flag = true;
                              if (tmp(2118).ComponentType.CONTAINER !== type) {
                                flag = true;
                                if (tmp(2118).ComponentType.LABEL !== type) {
                                  flag = true;
                                  if (tmp(2118).ComponentType.FILE_UPLOAD !== type) {
                                    flag = true;
                                    if (tmp(2118).ComponentType.CHECKPOINT_CARD !== type) {
                                      flag = true;
                                      if (tmp(2118).ComponentType.RADIO_GROUP !== type) {
                                        flag = true;
                                        if (tmp(2118).ComponentType.CHECKBOX_GROUP !== type) {
                                          flag = true;
                                          if (tmp(2118).ComponentType.CHECKBOX !== type) {
                                            flag = true;
                                            if (tmp(2118).ComponentType.CONTENT_INVENTORY_ENTRY !== type) {
                                              flag = true;
                                              if (tmp(2118).ComponentType.OVERFLOW_MENU !== type) {
                                                flag = true;
                                                if (tmp(2118).ComponentType.MENU_ACTION_ITEM !== type) {
                                                  const UNKNOWN = tmp(2118).ComponentType.UNKNOWN;
                                                  flag = false;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (flag) {
    importDefault = true;
    const type2 = type.type;
    if (tmp(2118).ComponentType.ACTION_ROW === type2) {
      let components = type.components;
      let mapped = components.map(getChildComponent);
      const obj5 = { type: null, id: null, components: null };
      const found = mapped.filter(tmp(1255).isNotNullish);
      obj5.type = tmp(2118).ComponentType.ACTION_ROW;
      obj5.id = type.id;
      obj5.components = found;
      return obj5;
    } else if (tmp(2118).ComponentType.BUTTON === type2) {
      let tmp42;
      if (null != type.emoji) {
        const emoji2 = type.emoji;
        if (typeof getEmoji === "function") {
          const obj9 = { id: null, name: null, animated: null, src: null };
          ({ id: obj31.id, name: obj31.name, animated: obj31.animated } = emoji2);
          let emojiURL;
          if (null != emoji2.id) {
            const obj12 = { id: null, animated: null, size: 48 };
            ({ id: obj33.id, animated: animated2 } = emoji2);
            if (!animated2) {
              animated2 = false;
            }
            obj12.animated = animated2;
            emojiURL = AvatarUtilsDefault.getEmojiURL(obj12);
          }
          obj9.src = emojiURL;
          tmp42 = obj9;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const obj19 = { type: tmp(2118).ComponentType.BUTTON, id: null, customId: null, style: null, disabled: null, url: null, label: null, emoji: null, skuId: null };
      ({ id: obj34.id, custom_id: obj34.customId, style: obj34.style, disabled: obj34.disabled, url: obj34.url, label: obj34.label } = type);
      obj19.emoji = tmp42;
      obj19.skuId = type.sku_id;
      return obj19;
    } else if (tmp(2118).ComponentType.STRING_SELECT === type2) {
      const obj22 = { type: tmp(2118).ComponentType.STRING_SELECT, id: null, customId: null, disabled: null, required: null, options: null, placeholder: null, minValues: null, maxValues: null };
      ({ id: obj30.id, custom_id: obj30.customId, disabled: obj30.disabled, required: required9 } = type);
      if (required9 == null) {
        required9 = false;
      }
      obj22.required = required9;
      const options = type.options;
      obj22.options = options.map((label) => {
        const obj = { type: InteractionComponentTypes.SelectOptionType.STRING, label: label.label, value: label.value, default: label.default, description: label.description, emoji: null };
        let tmp2;
        if (null != label.emoji) {
          const emoji = label.emoji;
          if (typeof getEmoji === "function") {
            const obj6 = { id: null, name: null, animated: null, src: null };
            ({ id: obj2.id, name: obj2.name, animated: obj2.animated } = emoji);
            let emojiURL;
            if (tmp4) {
              if (null != emoji.id) {
                const obj7 = { id: null, animated: null, size: 48 };
                ({ id: obj4.id, animated } = emoji);
                if (!animated) {
                  animated = false;
                }
                obj7.animated = animated;
                emojiURL = AvatarUtilsDefault.getEmojiURL(obj7);
              }
            }
            obj6.src = emojiURL;
            tmp2 = obj6;
          } else {
            throw new TypeError("Trying to call a non-function");
          }
        }
        obj.emoji = tmp2;
        return obj;
      });
      ({ placeholder: obj30.placeholder, min_values: obj30.minValues, max_values: obj30.maxValues } = type);
      return obj22;
    } else if (tmp(2118).ComponentType.TEXT_INPUT === type2) {
      const obj24 = { type: null, id: null, style: null, customId: null, label: null, value: null, placeholder: null, disabled: null, required: null, minLength: null, maxLength: null };
      ({ type: obj29.type, id: obj29.id, style: obj29.style, custom_id: obj29.customId, label: obj29.label, value: obj29.value, placeholder: obj29.placeholder, disabled: obj29.disabled, required: required8 } = type);
      if (required8 == null) {
        required8 = false;
      }
      obj24.required = required8;
      ({ min_length: obj29.minLength, max_length: obj29.maxLength } = type);
      return obj24;
    } else if (tmp(2118).ComponentType.USER_SELECT === type2) {
      const obj35 = { type: tmp(2118).ComponentType.USER_SELECT, id: null, customId: null, disabled: null, required: null, placeholder: null, minValues: null, maxValues: null, defaultValues: null };
      ({ id: obj28.id, custom_id: obj28.customId, disabled: obj28.disabled, required: required7 } = type);
      if (required7 == null) {
        required7 = false;
      }
      obj35.required = required7;
      ({ placeholder: obj28.placeholder, min_values: obj28.minValues, max_values: obj28.maxValues, default_values: obj28.defaultValues } = type);
      return obj35;
    } else if (tmp(2118).ComponentType.ROLE_SELECT === type2) {
      const obj63 = { type: tmp(2118).ComponentType.ROLE_SELECT, id: null, customId: null, disabled: null, required: null, placeholder: null, minValues: null, maxValues: null, defaultValues: null };
      ({ id: obj27.id, custom_id: obj27.customId, disabled: obj27.disabled, required: required6 } = type);
      if (required6 == null) {
        required6 = false;
      }
      obj63.required = required6;
      ({ placeholder: obj27.placeholder, min_values: obj27.minValues, max_values: obj27.maxValues, default_values: obj27.defaultValues } = type);
      return obj63;
    } else if (tmp(2118).ComponentType.MENTIONABLE_SELECT === type2) {
      const obj64 = { type: tmp(2118).ComponentType.MENTIONABLE_SELECT, id: null, customId: null, disabled: null, required: null, placeholder: null, minValues: null, maxValues: null, defaultValues: null };
      ({ id: obj26.id, custom_id: obj26.customId, disabled: obj26.disabled, required: required5 } = type);
      if (required5 == null) {
        required5 = false;
      }
      obj64.required = required5;
      ({ placeholder: obj26.placeholder, min_values: obj26.minValues, max_values: obj26.maxValues, default_values: obj26.defaultValues } = type);
      return obj64;
    } else if (tmp(2118).ComponentType.CHANNEL_SELECT === type2) {
      const obj65 = { type: tmp(2118).ComponentType.CHANNEL_SELECT, id: null, customId: null, disabled: null, required: null, placeholder: null, minValues: null, maxValues: null, channelTypes: null, defaultValues: null };
      ({ id: obj25.id, custom_id: obj25.customId, disabled: obj25.disabled, required: required4 } = type);
      if (required4 == null) {
        required4 = false;
      }
      obj65.required = required4;
      ({ placeholder: obj25.placeholder, min_values: obj25.minValues, max_values: obj25.maxValues, channel_types: obj25.channelTypes, default_values: obj25.defaultValues } = type);
      return obj65;
    } else if (tmp(2118).ComponentType.SECTION === type2) {
      const components1 = type.components;
      const mapped1 = components1.map(getChildComponent);
      const found1 = mapped1.filter(tmp(1255).isNotNullish);
      if (0 === found1.length) {
        return null;
      } else {
        let tmp30 = null;
        if (null != type.accessory) {
          const tmp32 = transformComponent(type.accessory);
          let tmp33 = null;
          if (null != tmp32) {
            tmp33 = tmp32;
          }
          tmp30 = tmp33;
        }
        const obj66 = { type: tmp(2118).ComponentType.SECTION, id: type.id, components: found1, accessory: tmp30 };
        return obj66;
      }
    } else if (tmp(2118).ComponentType.TEXT_DISPLAY === type2) {
      const obj67 = { type: tmp(2118).ComponentType.TEXT_DISPLAY, id: null, content: null };
      ({ id: obj23.id, content: obj23.content } = type);
      return obj67;
    } else if (tmp(2118).ComponentType.THUMBNAIL === type2) {
      const obj68 = { type: tmp(2118).ComponentType.THUMBNAIL, id: type.id, media: tmp(6402).toUnfurledMediaItem(type.media), description: null, spoiler: null };
      ({ description: obj21.description, spoiler: obj21.spoiler } = type);
      return obj68;
    } else if (tmp(2118).ComponentType.MEDIA_GALLERY === type2) {
      const obj69 = { type: tmp(2118).ComponentType.MEDIA_GALLERY, id: null, items: null };
      ({ id: obj20.id, items } = type);
      obj69.items = items.map((media) => {
        const obj = { media: getChildComponent(dependencyMap[8]).toUnfurledMediaItem(media.media), description: null, spoiler: null };
        ({ description: obj.description, spoiler: obj.spoiler } = media);
        return obj;
      });
      return obj69;
    } else if (tmp(2118).ComponentType.FILE === type2) {
      const obj70 = { type: tmp(2118).ComponentType.FILE, id: type.id, file: tmp(6402).toUnfurledMediaItem(type.file), name: null, size: null, spoiler: null };
      ({ name: obj18.name, size: obj18.size, spoiler: obj18.spoiler } = type);
      return obj70;
    } else if (tmp(2118).ComponentType.SEPARATOR === type2) {
      const obj71 = { type: tmp(2118).ComponentType.SEPARATOR, id: null, divider: null, spacing: null };
      ({ id: obj17.id, divider } = type);
      if (divider == null) {
        divider = true;
      }
      obj71.divider = divider;
      let SMALL = type.spacing;
      if (SMALL == null) {
        SMALL = tmp(2118).SeparatorSpacingSize.SMALL;
      }
      obj71.spacing = SMALL;
      return obj71;
    } else if (tmp(2118).ComponentType.CONTENT_INVENTORY_ENTRY === type2) {
      let tmp27 = null;
      if (null != type.content_inventory_entry) {
        const obj72 = { type: tmp(2118).ComponentType.CONTENT_INVENTORY_ENTRY, id: null, contentInventoryEntry: null };
        ({ id: obj16.id, content_inventory_entry: obj16.contentInventoryEntry } = type);
        tmp27 = obj72;
      }
      return tmp27;
    } else if (tmp(2118).ComponentType.CONTAINER === type2) {
      const components2 = type.components;
      const mapped2 = components2.map(getChildComponent);
      const obj73 = { type: null, id: null, accentColor: null, spoiler: null, components: null };
      const found2 = mapped2.filter(tmp(1255).isNotNullish);
      obj73.type = tmp(2118).ComponentType.CONTAINER;
      ({ id: obj15.id, accent_color: obj15.accentColor, spoiler: obj15.spoiler } = type);
      obj73.components = found2;
      return obj73;
    } else if (tmp(2118).ComponentType.LABEL === type2) {
      const tmp22 = transformComponent(type.component);
      let tmp24 = null;
      if (null != tmp22) {
        tmp24 = tmp22;
      }
      let tmp25 = null;
      if (null != tmp24) {
        const obj74 = { type: tmp(2118).ComponentType.LABEL, id: null, label: null, description: null, component: null };
        ({ id: obj14.id, label: obj14.label, description: obj14.description } = type);
        obj74.component = tmp24;
        tmp25 = obj74;
      }
      return tmp25;
    } else if (tmp(2118).ComponentType.FILE_UPLOAD === type2) {
      const obj75 = { type: null, id: null, customId: null, disabled: null, required: null, minValues: null, maxValues: null, fileTypes: null };
      ({ type: obj13.type, id: obj13.id, custom_id: obj13.customId, disabled: obj13.disabled, required: required3 } = type);
      if (required3 == null) {
        required3 = false;
      }
      obj75.required = required3;
      ({ min_values: obj13.minValues, max_values: obj13.maxValues, file_types: obj13.fileTypes } = type);
      return obj75;
    } else if (tmp(2118).ComponentType.CHECKPOINT_CARD === type2) {
      const checkpoint_data = type.checkpoint_data;
      const version = checkpoint_data.version;
      if (CheckpointVersions.V2025 === version) {
        const obj76 = { type: null, id: null, checkpointData: null };
        ({ type: obj11.type, id: obj11.id } = type);
        obj76.checkpointData = tmp(6406).transformCheckpoint2025CardComponent(checkpoint_data);
        let tmp17 = obj76;
        const tmpResult5 = tmp(6406);
      } else {
        tmp17 = null;
        if (tmp15.V2026 === version) {
          const result = tmp(6419).transformCheckpoint2026CardComponent(checkpoint_data);
          let tmp19 = null;
          if (null != result) {
            const obj77 = { type: null, id: null, checkpointData: null };
            ({ type: obj10.type, id: obj10.id } = type);
            obj77.checkpointData = result;
            tmp19 = obj77;
          }
          tmp17 = tmp19;
          const tmpResult6 = tmp(6419);
        }
      }
      return tmp17;
    } else if (tmp(2118).ComponentType.RADIO_GROUP === type2) {
      const obj78 = { type: null, id: null, customId: null, options: null, required: null };
      ({ type: obj8.type, id: obj8.id, custom_id: obj8.customId, options: obj8.options, required: required2 } = type);
      if (required2 == null) {
        required2 = false;
      }
      obj78.required = required2;
      return obj78;
    } else if (tmp(2118).ComponentType.CHECKBOX_GROUP === type2) {
      const obj79 = { type: null, id: null, customId: null, options: null, minValues: null, maxValues: null, required: null };
      ({ type: obj7.type, id: obj7.id, custom_id: obj7.customId, options: obj7.options, min_values: obj7.minValues, max_values: obj7.maxValues, required } = type);
      if (required == null) {
        required = false;
      }
      obj79.required = required;
      return obj79;
    } else if (tmp(2118).ComponentType.CHECKBOX === type2) {
      ({ type: obj6.type, id: obj6.id, custom_id: obj6.customId, default: obj6.default } = type);
      return { type: null, id: null, customId: null, default: null };
    } else if (tmp(2118).ComponentType.OVERFLOW_MENU === type2) {
      const groups = type.groups;
      const mapped3 = groups.map((label) => {
        const obj = { label: label.label, components: null };
        const components = label.components;
        const mapped = components.map(getChildComponent);
        obj.components = mapped.filter(GlobalUtils.isNotNullish);
        return obj;
      });
      const found3 = mapped3.filter((components) => components.components.length > 0);
      let tmp12 = null;
      if (0 !== found3.length) {
        const obj81 = { type: tmp(2118).ComponentType.OVERFLOW_MENU, id: type.id, groups: found3 };
        tmp12 = obj81;
      }
      return tmp12;
    } else if (tmp(2118).ComponentType.MENU_ACTION_ITEM === type2) {
      let obj = { type: tmp(2118).ComponentType.MENU_ACTION_ITEM, id: null, customId: null, disabled: null, label: null, style: null, description: null, url: null, emoji: null };
      ({ id: obj.id, custom_id: obj.customId, disabled: obj.disabled, label: obj.label, style: obj.style, description: obj.description, url: obj.url } = type);
      let tmp8;
      if (null != type.emoji) {
        let emoji = type.emoji;
        if (typeof getEmoji === "function") {
          const obj82 = { id: null, name: null, animated: null, src: null };
          ({ id: obj2.id, name: obj2.name, animated: obj2.animated } = emoji);
          let emojiURL1;
          if (null != emoji.id) {
            const obj83 = { id: null, animated: null, size: 48 };
            ({ id: obj4.id, animated } = emoji);
            if (!animated) {
              animated = false;
            }
            obj83.animated = animated;
            emojiURL1 = AvatarUtilsDefault.getEmojiURL(obj83);
          }
          obj82.src = emojiURL1;
          tmp8 = obj82;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      obj.emoji = tmp8;
      return obj;
    } else {
      logger.warn("transformComponent: Unknown component type", type.type);
      return null;
    }
  } else {
    return null;
  }
}
const CheckpointVersions = CheckpointConstants.CheckpointVersions;
const logger = new LoggerDefault("InteractionComponentUtils");
function getEmoji(arg0, arg1) {

}
let result = size.fileFinishedImporting("modules/interaction_components/InteractionComponentUtils.tsx");

export function getLayoutComponentErrorText(interaction, message, accessory) {
  let interactionType;
  if (interaction != null) {
    interactionType = interaction.data.interactionType;
  }
  let fitPBS = dependencyMap;
  let componentId = null;
  if (interactionType === InteractionTypes.InteractionTypes.MESSAGE_COMPONENT) {
    state = undefined;
    if (interaction != null) {
      state = interaction.state;
    }
    componentId = null;
    if (state === interactions_InteractionTypes.InteractionState.FAILED) {
      componentId = interaction.data.componentId;
    }
  }
  let tmp5 = null;
  if (null != componentId) {
    tmp5 = findChildComponent(accessory, componentId);
  }
  if (null != tmp5) {
    let interactionError;
    if (message != null) {
      interactionError = message.interactionError;
    }
    if (interactionError != null) {
      return interactionError;
    } else {
      let errorCode;
      if (interaction != null) {
        errorCode = interaction.errorCode;
      }
      if (429 === errorCode) {
        const intl2 = util.intl;
        fitPBS = util.t.fitPBS;
        let stringResult = intl2.string(fitPBS);
      } else {
        let reasonCode;
        if (interaction != null) {
          reasonCode = interaction.reasonCode;
        }
        if (null == reasonCode) {
          const intl = util.intl;
          stringResult = intl.string(util.t.VCsUJu);
        } else {
          stringResult = interactionCallbackErrorReason.interactionCallbackErrorReason(interaction.reasonCode, interaction.data.applicationId);
          const tmp2Result = interactionCallbackErrorReason;
        }
      }
    }
  }
}
export function getSelectPlaceholder(placeholder) {
  placeholder = placeholder.placeholder;
  if (placeholder == null) {
    const intl = util.intl;
    placeholder = intl.string(util.t.Otr6W2);
  }
  return placeholder;
}
export function canSelectBeEmpty(value, modal) {
  if ("modal" === modal) {
    let tmp2 = !value.required;
  } else {
    tmp2 = 0 === tmp;
  }
  return tmp2;
}
export { flattenComponents };
export { findChildComponent };
export function getAllTextDisplayContent(components) {
  const obj = flattenComponents(components);
  const found = Array.from(flattenComponents(components).values()).filter((type) => type.type === Server.ComponentType.TEXT_DISPLAY);
  const mapped = found.map((content) => content.content);
  const joined = mapped.join("\n");
  let tmp2 = null;
  if ("" !== joined) {
    tmp2 = joined;
  }
  return tmp2;
}
export function getFirstInteractionComponentMedia(components) {
  const values = flattenComponents(components).values();
  const iter = values[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if (nextResult.type === Server.ComponentType.MEDIA_GALLERY) {
      let first = tmp3.items[0];
      let tmp14 = first;
      if (null == first) {
        continue;
      } else {
        let tmp4Result = MediaTypes;
        let unfurledMediaItemType = tmp4Result.getUnfurledMediaItemType(tmp14.media);
        if ("INVALID" !== unfurledMediaItemType) {
          let obj2 = {};
          let merged = Object.assign(tmp14.media);
          obj2.type = tmp17;
          obj2.alt = tmp14.description;
          iter.return();
          return obj2;
        }
      }
    } else if (tmp3.type === Server.ComponentType.THUMBNAIL) {
      let tmp4Result2 = MediaTypes;
      let unfurledMediaItemType1 = tmp4Result2.getUnfurledMediaItemType(tmp3.media);
      if ("INVALID" !== unfurledMediaItemType1) {
        let obj3 = {};
        let merged1 = Object.assign(tmp3.media);
        obj3.type = tmp25;
        obj3.alt = tmp3.description;
        iter.return();
        return obj3;
      }
    }
    continue;
  }
  return null;
}
export function getParents(components, value) {
  closure_0 = value;
  function search(components) {
    items = arg1;
    if (arg1 === undefined) {
      items = [];
    }
    const iter = components[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let obj = getComponentChildren(nextResult);
      let tmp4 = obj;
      if (obj.some((id) => id.id === id.id)) {
        let items1 = [tmp2];
        let arraySpreadResult = HermesBuiltin.arraySpread(items, 1);
        iter.return();
        return items1;
      } else {
        let items2 = [tmp2];
        let arraySpreadResult2 = HermesBuiltin.arraySpread(items, 1);
        let tmp11 = search(tmp4, items2);
        if (null != tmp11) {
          iter.return();
          return tmp11;
        }
      }
    }
    return null;
  }
  return search(components);
}
export function isActionComponent(type) {
  type = type.type;
  if (Server.ComponentType.BUTTON !== type) {
    if (Server.ComponentType.STRING_SELECT !== type) {
      if (Server.ComponentType.TEXT_INPUT !== type) {
        if (Server.ComponentType.USER_SELECT !== type) {
          if (Server.ComponentType.ROLE_SELECT !== type) {
            if (Server.ComponentType.MENTIONABLE_SELECT !== type) {
              if (Server.ComponentType.CHANNEL_SELECT !== type) {
                if (Server.ComponentType.FILE_UPLOAD !== type) {
                  if (Server.ComponentType.RADIO_GROUP !== type) {
                    if (Server.ComponentType.CHECKBOX_GROUP !== type) {
                      if (Server.ComponentType.CHECKBOX !== type) {
                        if (Server.ComponentType.MENU_ACTION_ITEM !== type) {
                          if (Server.ComponentType.ACTION_ROW !== type) {
                            if (Server.ComponentType.SECTION !== type) {
                              if (Server.ComponentType.CONTAINER !== type) {
                                if (Server.ComponentType.LABEL !== type) {
                                  if (Server.ComponentType.OVERFLOW_MENU !== type) {
                                    if (Server.ComponentType.TEXT_DISPLAY !== type) {
                                      if (Server.ComponentType.THUMBNAIL !== type) {
                                        if (Server.ComponentType.MEDIA_GALLERY !== type) {
                                          if (Server.ComponentType.FILE !== type) {
                                            if (Server.ComponentType.SEPARATOR !== type) {
                                              if (Server.ComponentType.CONTENT_INVENTORY_ENTRY !== type) {
                                                const CHECKPOINT_CARD = Server.ComponentType.CHECKPOINT_CARD;
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          return false;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return true;
}
export function makeComponentUploadId(containerId) {
  const obj = { type: "component-upload", containerId, uniqueId: null };
  let randomUUIDResult;
  if (randomUUID != null) {
    randomUUIDResult = randomUUID();
  }
  if (randomUUIDResult == null) {
    randomUUIDResult = v1.v4();
  }
  obj.uniqueId = randomUUIDResult;
  return JSON.stringify(obj);
}
export function deserializeComponentUploadId(id) {
  try {
    const _JSON = JSON;
    const parsed = JSON.parse(id);
    let type;
    if (parsed != null) {
      type = parsed.type;
    }
    let tmp7 = null;
    if ("component-upload" === type) {
      tmp7 = null;
      if (typeof tmp4.containerId === "string") {
        tmp7 = null;
        if (typeof tmp4.uniqueId === "string") {
          tmp7 = parsed;
        }
      }
    }
    return tmp7;
  } catch (err) {
    return null;
  }
}
export function getFileUploadComponentSubtitle(minValues, maxValues, types, formatSizeResult) {
  if (null != types) {
    if (minValues <= 1) {
      const intl4 = util.intl;
      const obj2 = { maxValues, types, maxSize: formatSizeResult };
      intl4.format(util.t.QLrHJG, obj2);
    }
    if (minValues === maxValues) {
      const intl6 = util.intl;
      const obj3 = { minValues, types, maxSize: formatSizeResult };
      let formatResult1 = intl6.format(util.t.Xp4xMV, obj3);
    } else {
      const intl5 = util.intl;
      const obj4 = { minValues, maxValues, types, maxSize: formatSizeResult };
      formatResult1 = intl5.format(util.t["05AyNA"], obj4);
    }
  } else if (minValues > 1) {
    if (minValues === maxValues) {
      const intl3 = util.intl;
      const obj5 = { minValues, maxSize: formatSizeResult };
      let formatResult2 = intl3.format(util.t.SAr31z, obj5);
    } else {
      const intl2 = util.intl;
      const obj6 = { minValues, maxValues, maxSize: formatSizeResult };
      formatResult2 = intl2.format(util.t["ZG+3Ck"], obj6);
    }
  } else {
    const intl = util.intl;
    const obj = { maxValues, maxSize: formatSizeResult };
    return intl.format(util.t.tyxwW1, obj);
  }
}
export function transformComponents(arr) {
  const mapped = arr.map(transformComponent);
  return mapped.filter((item) => null != item);
}
export function getOverflowMenuComponentActionSheetKey(messageId, id) {
  return "OverflowMenuComponentActionSheet:" + messageId + ":" + id;
}