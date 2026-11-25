// discord_app/modules/interaction_components/InteractionComponentUtils.tsx
import LoggerDefault from "../debug/Logger.tsx";
import util from "../../intl/index.native.tsx";
import v1 from "../../../_runtime/01268_v1.js";
import AvatarUtilsDefault from "../../utils/AvatarUtils.tsx";
import Server from "../../flow/Server.tsx";
import CheckpointConstants from "../checkpoint/CheckpointConstants.tsx";
import interactionCallbackErrorReason from "../interactions/interactionCallbackErrorReason.tsx";
import InteractionTypes from "../../../discord_common/js/shared/shared-constants/InteractionTypes.tsx";
import interactions_InteractionTypes from "../interactions/InteractionTypes.tsx";
import MediaTypes from "../media/MediaTypes.tsx";
import InteractionComponentTypes from "InteractionComponentTypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

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
    items = [];
    items[HermesBuiltin.arraySpread(nextResult.components, 0)] = nextResult.accessory;
    return items;
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
function transformComponent(type, join) {
  _require = join;
  type = type.type;
  let tmp = _require;
  let flag = true;
  if (require("Server").ComponentType.ACTION_ROW !== type) {
    flag = true;
    if (tmp(2117).ComponentType.BUTTON !== type) {
      flag = true;
      if (tmp(2117).ComponentType.STRING_SELECT !== type) {
        flag = true;
        if (tmp(2117).ComponentType.TEXT_INPUT !== type) {
          flag = true;
          if (tmp(2117).ComponentType.USER_SELECT !== type) {
            flag = true;
            if (tmp(2117).ComponentType.ROLE_SELECT !== type) {
              flag = true;
              if (tmp(2117).ComponentType.MENTIONABLE_SELECT !== type) {
                flag = true;
                if (tmp(2117).ComponentType.CHANNEL_SELECT !== type) {
                  flag = true;
                  if (tmp(2117).ComponentType.SECTION !== type) {
                    flag = true;
                    if (tmp(2117).ComponentType.TEXT_DISPLAY !== type) {
                      flag = true;
                      if (tmp(2117).ComponentType.THUMBNAIL !== type) {
                        flag = true;
                        if (tmp(2117).ComponentType.MEDIA_GALLERY !== type) {
                          flag = true;
                          if (tmp(2117).ComponentType.FILE !== type) {
                            flag = true;
                            if (tmp(2117).ComponentType.SEPARATOR !== type) {
                              flag = true;
                              if (tmp(2117).ComponentType.CONTAINER !== type) {
                                flag = true;
                                if (tmp(2117).ComponentType.LABEL !== type) {
                                  flag = true;
                                  if (tmp(2117).ComponentType.FILE_UPLOAD !== type) {
                                    flag = true;
                                    if (tmp(2117).ComponentType.CHECKPOINT_CARD !== type) {
                                      flag = true;
                                      if (tmp(2117).ComponentType.RADIO_GROUP !== type) {
                                        flag = true;
                                        if (tmp(2117).ComponentType.CHECKBOX_GROUP !== type) {
                                          flag = true;
                                          if (tmp(2117).ComponentType.CHECKBOX !== type) {
                                            flag = true;
                                            if (tmp(2117).ComponentType.CONTENT_INVENTORY_ENTRY !== type) {
                                              flag = true;
                                              if (tmp(2117).ComponentType.OVERFLOW_MENU !== type) {
                                                flag = true;
                                                if (tmp(2117).ComponentType.MENU_ACTION_ITEM !== type) {
                                                  const UNKNOWN = tmp(2117).ComponentType.UNKNOWN;
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
    if (tmp(2117).ComponentType.ACTION_ROW === type2) {
      let components = type.components;
      let mapped = components.map((item, index) => {
        const tmp = transformComponent(item, join.concat(index));
        let tmp2 = null;
        if (null != tmp) {
          tmp2 = tmp;
        }
        return tmp2;
      });
      const obj2 = { type: null, id: null, components: null };
      const found = mapped.filter(tmp(1254).isNotNullish);
      obj2.type = tmp(2117).ComponentType.ACTION_ROW;
      obj2.id = tmp(6374).asComponentId(join.join(","));
      obj2.components = found;
      return obj2;
    } else if (tmp(2117).ComponentType.BUTTON === type2) {
      let tmp40;
      if (null != type.emoji) {
        const emoji2 = type.emoji;
        if (typeof getEmoji === "function") {
          let obj6 = { id: null, name: null, animated: null, src: null };
          ({ id: obj53.id, name: obj53.name, animated: obj53.animated } = emoji2);
          let emojiURL;
          if (null != emoji2.id) {
            let obj7 = { id: null, animated: null, size: 48 };
            ({ id: obj55.id, animated: animated2 } = emoji2);
            if (!animated2) {
              animated2 = false;
            }
            obj7.animated = animated2;
            emojiURL = AvatarUtilsDefault.getEmojiURL(obj7);
          }
          obj6.src = emojiURL;
          tmp40 = obj6;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const obj9 = {
        type: tmp(2117).ComponentType.BUTTON,
        id: tmp(6374).asComponentId(join.join(",")),
        customId: null,
        style: null,
        disabled: null,
        url: null,
        label: null,
        emoji: null,
        skuId: null,
      };
      ({
        custom_id: obj56.customId,
        style: obj56.style,
        disabled: obj56.disabled,
        url: obj56.url,
        label: obj56.label,
      } = type);
      obj9.emoji = tmp40;
      obj9.skuId = type.sku_id;
      return obj9;
    } else if (tmp(2117).ComponentType.STRING_SELECT === type2) {
      const obj11 = {
        type: tmp(2117).ComponentType.STRING_SELECT,
        id: tmp(6374).asComponentId(join.join(",")),
        customId: null,
        disabled: null,
        required: null,
        options: null,
        placeholder: null,
        minValues: null,
        maxValues: null,
      };
      ({ custom_id: obj51.customId, disabled: obj51.disabled, required: required9 } = type);
      if (required9 == null) {
        required9 = false;
      }
      obj11.required = required9;
      const options = type.options;
      obj11.options = options.map((label) => {
        const obj = {
          type: InteractionComponentTypes.SelectOptionType.STRING,
          label: label.label,
          value: label.value,
          default: label.default,
          description: label.description,
          emoji: null,
        };
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
      ({ placeholder: obj51.placeholder, min_values: obj51.minValues, max_values: obj51.maxValues } = type);
      return obj11;
    } else if (tmp(2117).ComponentType.TEXT_INPUT === type2) {
      const obj13 = {
        type: type.type,
        id: tmp(6374).asComponentId(join.join(",")),
        style: null,
        customId: null,
        label: null,
        value: null,
        placeholder: null,
        disabled: null,
        required: null,
        minLength: null,
        maxLength: null,
      };
      ({
        style: obj49.style,
        custom_id: obj49.customId,
        label: obj49.label,
        value: obj49.value,
        placeholder: obj49.placeholder,
        disabled: obj49.disabled,
        required: required8,
      } = type);
      if (required8 == null) {
        required8 = false;
      }
      obj13.required = required8;
      ({ min_length: obj49.minLength, max_length: obj49.maxLength } = type);
      return obj13;
    } else if (tmp(2117).ComponentType.USER_SELECT === type2) {
      const obj14 = {
        type: tmp(2117).ComponentType.USER_SELECT,
        id: tmp(6374).asComponentId(join.join(",")),
        customId: null,
        disabled: null,
        required: null,
        placeholder: null,
        minValues: null,
        maxValues: null,
        defaultValues: null,
      };
      ({ custom_id: obj47.customId, disabled: obj47.disabled, required: required7 } = type);
      if (required7 == null) {
        required7 = false;
      }
      obj14.required = required7;
      ({
        placeholder: obj47.placeholder,
        min_values: obj47.minValues,
        max_values: obj47.maxValues,
        default_values: obj47.defaultValues,
      } = type);
      return obj14;
    } else if (tmp(2117).ComponentType.ROLE_SELECT === type2) {
      const obj15 = {
        type: tmp(2117).ComponentType.ROLE_SELECT,
        id: tmp(6374).asComponentId(join.join(",")),
        customId: null,
        disabled: null,
        required: null,
        placeholder: null,
        minValues: null,
        maxValues: null,
        defaultValues: null,
      };
      ({ custom_id: obj45.customId, disabled: obj45.disabled, required: required6 } = type);
      if (required6 == null) {
        required6 = false;
      }
      obj15.required = required6;
      ({
        placeholder: obj45.placeholder,
        min_values: obj45.minValues,
        max_values: obj45.maxValues,
        default_values: obj45.defaultValues,
      } = type);
      return obj15;
    } else if (tmp(2117).ComponentType.MENTIONABLE_SELECT === type2) {
      const obj16 = {
        type: tmp(2117).ComponentType.MENTIONABLE_SELECT,
        id: tmp(6374).asComponentId(join.join(",")),
        customId: null,
        disabled: null,
        required: null,
        placeholder: null,
        minValues: null,
        maxValues: null,
        defaultValues: null,
      };
      ({ custom_id: obj43.customId, disabled: obj43.disabled, required: required5 } = type);
      if (required5 == null) {
        required5 = false;
      }
      obj16.required = required5;
      ({
        placeholder: obj43.placeholder,
        min_values: obj43.minValues,
        max_values: obj43.maxValues,
        default_values: obj43.defaultValues,
      } = type);
      return obj16;
    } else if (tmp(2117).ComponentType.CHANNEL_SELECT === type2) {
      const obj17 = {
        type: tmp(2117).ComponentType.CHANNEL_SELECT,
        id: tmp(6374).asComponentId(join.join(",")),
        customId: null,
        disabled: null,
        required: null,
        placeholder: null,
        minValues: null,
        maxValues: null,
        channelTypes: null,
        defaultValues: null,
      };
      ({ custom_id: obj41.customId, disabled: obj41.disabled, required: required4 } = type);
      if (required4 == null) {
        required4 = false;
      }
      obj17.required = required4;
      ({
        placeholder: obj41.placeholder,
        min_values: obj41.minValues,
        max_values: obj41.maxValues,
        channel_types: obj41.channelTypes,
        default_values: obj41.defaultValues,
      } = type);
      return obj17;
    } else if (tmp(2117).ComponentType.SECTION === type2) {
      const components1 = type.components;
      const mapped1 = components1.map((item, index) => {
        const tmp = transformComponent(item, join.concat(index));
        let tmp2 = null;
        if (null != tmp) {
          tmp2 = tmp;
        }
        return tmp2;
      });
      const found1 = mapped1.filter(tmp(1254).isNotNullish);
      const tmp29 = transformComponent(type.accessory, join.concat(found1.length));
      let tmp31 = null;
      if (null != tmp29) {
        tmp31 = tmp29;
      }
      let tmp32 = null;
      if (0 !== found1.length) {
        tmp32 = null;
        if (null != tmp31) {
          const obj18 = {
            type: tmp(2117).ComponentType.SECTION,
            id: tmp(6374).asComponentId(join.join(",")),
            components: found1,
            accessory: tmp31,
          };
          tmp32 = obj18;
          const tmpResult36 = tmp(6374);
        }
      }
      return tmp32;
    } else if (tmp(2117).ComponentType.TEXT_DISPLAY === type2) {
      const obj20 = {
        type: tmp(2117).ComponentType.TEXT_DISPLAY,
        id: tmp(6374).asComponentId(join.join(",")),
        content: type.content,
      };
      return obj20;
    } else if (tmp(2117).ComponentType.THUMBNAIL === type2) {
      const obj22 = {
        type: tmp(2117).ComponentType.THUMBNAIL,
        id: tmp(6374).asComponentId(join.join(",")),
        media: null,
        description: null,
        spoiler: null,
      };
      const tmpResult38 = tmp(6374);
      obj22.media = tmp(6371).toUnfurledMediaItem(type.media);
      ({ description: obj34.description, spoiler: obj34.spoiler } = type);
      return obj22;
    } else if (tmp(2117).ComponentType.MEDIA_GALLERY === type2) {
      const obj24 = {
        type: tmp(2117).ComponentType.MEDIA_GALLERY,
        id: tmp(6374).asComponentId(join.join(",")),
        items: null,
      };
      items = type.items;
      obj24.items = items.map((media) => {
        const obj = { media: join(6371).toUnfurledMediaItem(media.media), description: null, spoiler: null };
        ({ description: obj.description, spoiler: obj.spoiler } = media);
        return obj;
      });
      return obj24;
    } else if (tmp(2117).ComponentType.FILE === type2) {
      const obj25 = {
        type: tmp(2117).ComponentType.FILE,
        id: tmp(6374).asComponentId(join.join(",")),
        file: null,
        name: null,
        size: null,
        spoiler: null,
      };
      const tmpResult41 = tmp(6374);
      obj25.file = tmp(6371).toUnfurledMediaItem(type.file);
      ({ name: obj29.name, size: obj29.size, spoiler: obj29.spoiler } = type);
      return obj25;
    } else if (tmp(2117).ComponentType.SEPARATOR === type2) {
      const obj26 = {
        type: tmp(2117).ComponentType.SEPARATOR,
        id: tmp(6374).asComponentId(join.join(",")),
        divider: null,
        spacing: null,
      };
      let flag2 = type.divider;
      if (flag2 == null) {
        flag2 = true;
      }
      obj26.divider = flag2;
      let SMALL = type.spacing;
      if (SMALL == null) {
        SMALL = tmp(2117).SeparatorSpacingSize.SMALL;
      }
      obj26.spacing = SMALL;
      return obj26;
    } else if (tmp(2117).ComponentType.CONTENT_INVENTORY_ENTRY === type2) {
      let tmp26 = null;
      if (null != type.content_inventory_entry) {
        const obj27 = {
          type: tmp(2117).ComponentType.CONTENT_INVENTORY_ENTRY,
          id: tmp(6374).asComponentId(join.join(",")),
          contentInventoryEntry: type.content_inventory_entry,
        };
        tmp26 = obj27;
        const tmpResult44 = tmp(6374);
      }
      return tmp26;
    } else if (tmp(2117).ComponentType.CONTAINER === type2) {
      const components2 = type.components;
      const mapped2 = components2.map((item, index) => {
        const tmp = transformComponent(item, join.concat(index));
        let tmp2 = null;
        if (null != tmp) {
          tmp2 = tmp;
        }
        return tmp2;
      });
      const obj28 = { type: null, id: null, accentColor: null, spoiler: null, components: null };
      const found2 = mapped2.filter(tmp(1254).isNotNullish);
      obj28.type = tmp(2117).ComponentType.CONTAINER;
      obj28.id = tmp(6374).asComponentId(join.join(","));
      ({ accent_color: obj23.accentColor, spoiler: obj23.spoiler } = type);
      obj28.components = found2;
      return obj28;
    } else if (tmp(2117).ComponentType.LABEL === type2) {
      const tmp21 = transformComponent(type.component, join.concat(0));
      let tmp23 = null;
      if (null != tmp21) {
        tmp23 = tmp21;
      }
      let tmp24 = null;
      if (null != tmp23) {
        const obj30 = {
          type: tmp(2117).ComponentType.LABEL,
          id: tmp(6374).asComponentId(join.join(",")),
          label: null,
          description: null,
          component: null,
        };
        ({ label: obj21.label, description: obj21.description } = type);
        obj30.component = tmp23;
        tmp24 = obj30;
        const tmpResult46 = tmp(6374);
      }
      return tmp24;
    } else if (tmp(2117).ComponentType.FILE_UPLOAD === type2) {
      const obj31 = {
        type: type.type,
        id: tmp(6374).asComponentId(join.join(",")),
        customId: null,
        disabled: null,
        required: null,
        minValues: null,
        maxValues: null,
        fileTypes: null,
      };
      ({ custom_id: obj19.customId, disabled: obj19.disabled, required: required3 } = type);
      if (required3 == null) {
        required3 = false;
      }
      obj31.required = required3;
      ({ min_values: obj19.minValues, max_values: obj19.maxValues, file_types: obj19.fileTypes } = type);
      return obj31;
    } else if (tmp(2117).ComponentType.CHECKPOINT_CARD === type2) {
      const checkpoint_data = type.checkpoint_data;
      const version = checkpoint_data.version;
      if (CheckpointVersions.V2025 === version) {
        const obj32 = { type: type.type, id: tmp(6374).asComponentId(join.join(",")), checkpointData: null };
        const tmpResult48 = tmp(6374);
        obj32.checkpointData = tmp(6375).transformCheckpoint2025CardComponent(checkpoint_data);
        let tmp17 = obj32;
        const tmpResult49 = tmp(6375);
      } else {
        tmp17 = null;
        if (tmp15.V2026 === version) {
          const result = tmp(6388).transformCheckpoint2026CardComponent(checkpoint_data);
          let tmp18 = null;
          if (null != result) {
            const obj33 = { type: type.type, id: tmp(6374).asComponentId(join.join(",")), checkpointData: result };
            tmp18 = obj33;
            const tmpResult51 = tmp(6374);
          }
          tmp17 = tmp18;
          const tmpResult50 = tmp(6388);
        }
      }
      return tmp17;
    } else if (tmp(2117).ComponentType.RADIO_GROUP === type2) {
      const obj35 = {
        type: type.type,
        id: tmp(6374).asComponentId(join.join(",")),
        customId: null,
        options: null,
        required: null,
      };
      ({ custom_id: obj12.customId, options: obj12.options, required: required2 } = type);
      if (required2 == null) {
        required2 = false;
      }
      obj35.required = required2;
      return obj35;
    } else if (tmp(2117).ComponentType.CHECKBOX_GROUP === type2) {
      const obj36 = {
        type: type.type,
        id: tmp(6374).asComponentId(join.join(",")),
        customId: null,
        options: null,
        minValues: null,
        maxValues: null,
        required: null,
      };
      ({
        custom_id: obj10.customId,
        options: obj10.options,
        min_values: obj10.minValues,
        max_values: obj10.maxValues,
        required,
      } = type);
      if (required == null) {
        required = false;
      }
      obj36.required = required;
      return obj36;
    } else if (tmp(2117).ComponentType.CHECKBOX === type2) {
      const obj37 = { type: type.type, id: tmp(6374).asComponentId(join.join(",")), customId: null, default: null };
      ({ custom_id: obj8.customId, default: obj8.default } = type);
      return obj37;
    } else if (tmp(2117).ComponentType.OVERFLOW_MENU === type2) {
      const groups = type.groups;
      const mapped3 = groups.map((label, index) => {
        join = index;
        const obj = { label: label.label, components: null };
        const components = label.components;
        const mapped = components.map((item, index) => {
          items = [index, index];
          const tmp = closure_1_10(item, index.concat(items));
          let tmp2 = null;
          if (null != tmp) {
            tmp2 = tmp;
          }
          return tmp2;
        });
        obj.components = mapped.filter(join(1254).isNotNullish);
        return obj;
      });
      const found3 = mapped3.filter((components) => components.components.length > 0);
      let tmp12 = null;
      if (0 !== found3.length) {
        const obj38 = {
          type: tmp(2117).ComponentType.OVERFLOW_MENU,
          id: tmp(6374).asComponentId(join.join(",")),
          groups: found3,
        };
        tmp12 = obj38;
        const tmpResult55 = tmp(6374);
      }
      return tmp12;
    } else if (tmp(2117).ComponentType.MENU_ACTION_ITEM === type2) {
      let obj = {
        type: tmp(2117).ComponentType.MENU_ACTION_ITEM,
        id: tmp(6374).asComponentId(join.join(",")),
        customId: null,
        disabled: null,
        label: null,
        style: null,
        description: null,
        url: null,
        emoji: null,
      };
      ({
        custom_id: obj.customId,
        disabled: obj.disabled,
        label: obj.label,
        style: obj.style,
        description: obj.description,
        url: obj.url,
      } = type);
      let tmp8;
      if (null != type.emoji) {
        let emoji = type.emoji;
        if (typeof getEmoji === "function") {
          const obj39 = { id: null, name: null, animated: null, src: null };
          ({ id: obj3.id, name: obj3.name, animated: obj3.animated } = emoji);
          let emojiURL1;
          if (null != emoji.id) {
            const obj40 = { id: null, animated: null, size: 48 };
            ({ id: obj5.id, animated } = emoji);
            if (!animated) {
              animated = false;
            }
            obj40.animated = animated;
            emojiURL1 = AvatarUtilsDefault.getEmojiURL(obj40);
          }
          obj39.src = emojiURL1;
          tmp8 = obj39;
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
function getEmoji(arg0, arg1) {}
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
          stringResult = interactionCallbackErrorReason.interactionCallbackErrorReason(
            interaction.reasonCode,
            interaction.data.applicationId,
          );
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
  const found = Array.from(flattenComponents(components).values()).filter(
    (type) => type.type === require("Server").ComponentType.TEXT_DISPLAY,
  );
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
  const mapped = arr.map((item, index) => {
    items = [index];
    return transformComponent(item, items);
  });
  return mapped.filter((item) => null != item);
}
export function getOverflowMenuComponentActionSheetKey(messageId, id) {
  return "OverflowMenuComponentActionSheet:" + messageId + ":" + id;
}
