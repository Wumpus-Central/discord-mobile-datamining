// === Module 5120: InteractionComponentUtils ===

// Module 5120 (InteractionComponentUtils)
import LoggerDefault from "Logger" /* 3 */;
import intl7 from "intl" /* 1126 */;
import v1 from "v1" /* 1266 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import Server from "Server" /* 1985 */;
import CheckpointConstants from "CheckpointConstants" /* 5121 */;
import interactionCallbackErrorReason from "interactionCallbackErrorReason" /* 5123 */;
import InteractionTypes from "InteractionTypes" /* 5126 */;
import interactions_InteractionTypes from "interactions/InteractionTypes" /* 5127 */;
import MediaTypes from "MediaTypes" /* 5128 */;
import InteractionComponentTypes from "InteractionComponentTypes" /* 5129 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

function flattenComponents(components) {
  map = new Map();
  const tmp2 = components[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = flattenComponent(map, tmp3);
    continue;
  }
  return map;
}
function flattenComponent(map, accessory) {
  const f90326 = (id) => {
    const result = closure_0.set(id.id, id);
    const type = id.type;
    if (closure_2_0(closure_2_2[7]).ComponentType.ACTION_ROW === type) {
      const components = id.components;
      const item = components.forEach(f90326);
    } else if (closure_2_0(closure_2_2[7]).ComponentType.SECTION === type) {
      const components1 = id.components;
      const item1 = components1.forEach(f90327);
      const accessory = id.accessory;
      const result1 = closure_0.set(accessory.id, accessory);
      const type2 = accessory.type;
      if (closure_2_0(closure_2_2[7]).ComponentType.ACTION_ROW === type2) {
        const components2 = accessory.components;
        const item2 = components2.forEach(f90326);
      } else if (closure_2_0(closure_2_2[7]).ComponentType.SECTION === type2) {
        const components3 = accessory.components;
        const item3 = components3.forEach(f90327);
        closure_2_7(closure_0, accessory.accessory);
      } else if (closure_2_0(closure_2_2[7]).ComponentType.CONTAINER === type2) {
        const components4 = accessory.components;
        const item4 = components4.forEach(f90328);
      }
    } else if (closure_2_0(closure_2_2[7]).ComponentType.CONTAINER === type) {
      const components5 = id.components;
      const item5 = components5.forEach(f90328);
    }
  };
  const f90327 = (id) => {
    let closure_0 = obj;
    let result = obj.set(id.id, id);
    let type = id.type;
    if (closure_2_0(closure_2_2[7]).ComponentType.ACTION_ROW === type) {
      let components = id.components;
      let item = components.forEach(f90326);
    } else if (closure_2_0(closure_2_2[7]).ComponentType.SECTION === type) {
      let components1 = id.components;
      let item1 = components1.forEach(f90327);
      let accessory = id.accessory;
      let result1 = obj.set(accessory.id, accessory);
      let type2 = accessory.type;
      if (closure_2_0(closure_2_2[7]).ComponentType.ACTION_ROW === type2) {
        let components2 = accessory.components;
        let item2 = components2.forEach(f90326);
      } else if (closure_2_0(closure_2_2[7]).ComponentType.SECTION === type2) {
        let components3 = accessory.components;
        let item3 = components3.forEach(f90327);
        let num = 0;
        let tmp9 = closure_2_7(obj, accessory.accessory);
      } else if (closure_2_0(closure_2_2[7]).ComponentType.CONTAINER === type2) {
        let components4 = accessory.components;
        let item4 = components4.forEach(f90328);
      }
    } else if (closure_2_0(closure_2_2[7]).ComponentType.CONTAINER === type) {
      let components5 = id.components;
      let item5 = components5.forEach(f90328);
    }
  };
  const f90328 = (id) => {
    let closure_0 = obj;
    let result = obj.set(id.id, id);
    let type = id.type;
    if (obj(closure_2_2[7]).ComponentType.ACTION_ROW === type) {
      let components = id.components;
      let item = components.forEach(f90326);
    } else if (obj(closure_2_2[7]).ComponentType.SECTION === type) {
      let components1 = id.components;
      let item1 = components1.forEach(f90327);
      let accessory = id.accessory;
      let result1 = obj.set(accessory.id, accessory);
      let type2 = accessory.type;
      if (obj(closure_2_2[7]).ComponentType.ACTION_ROW === type2) {
        let components2 = accessory.components;
        let item2 = components2.forEach(f90326);
      } else if (obj(closure_2_2[7]).ComponentType.SECTION === type2) {
        let components3 = accessory.components;
        let item3 = components3.forEach(f90327);
        let num = 0;
        let tmp9 = closure_2_7(obj, accessory.accessory);
      } else if (obj(closure_2_2[7]).ComponentType.CONTAINER === type2) {
        let components4 = accessory.components;
        let item4 = components4.forEach(f90328);
      }
    } else if (obj(closure_2_2[7]).ComponentType.CONTAINER === type) {
      let components5 = id.components;
      let item5 = components5.forEach(f90328);
    }
  };
  _require = map;
  const result = map.set(accessory.id, accessory);
  const type = accessory.type;
  if (require("Server").ComponentType.ACTION_ROW === type) {
    const components = accessory.components;
    const item = components.forEach(f90326);
  } else if (require("Server").ComponentType.SECTION === type) {
    const components1 = accessory.components;
    const item1 = components1.forEach(f90327);
    flattenComponent(map, accessory.accessory);
  } else if (require("Server").ComponentType.CONTAINER === type) {
    const components2 = accessory.components;
    const item2 = components2.forEach(f90328);
  }
}
function findChildComponent(type, componentId) {
  let closure_0 = componentId;
  type = type.type;
  if (Server.ComponentType.ACTION_ROW === type) {
    const components = type.components;
    let found = components.find((id) => id.id === closure_0);
    if (found == null) {
      found = null;
    }
    return found;
  } else if (Server.ComponentType.SECTION === type) {
    let accessory;
    if (type.accessory.id === componentId) {
      accessory = type.accessory;
    } else {
      const components1 = type.components;
      accessory = components1.find((id) => id.id === closure_0);
      if (accessory == null) {
        accessory = null;
      }
    }
    return accessory;
  } else if (Server.ComponentType.CONTAINER === type) {
    const components2 = type.components;
    let found1 = components2.find((id) => id.id === closure_0);
    if (found1 == null) {
      found1 = null;
    }
    return found1;
  }
}
function getComponentChildren(nextResult) {
  const type = nextResult.type;
  if (Server.ComponentType.ACTION_ROW === type) {
    return nextResult.components;
  } else if (Server.ComponentType.SECTION === type) {
    const items = [];
    items[HermesBuiltin.arraySpread(items, nextResult.components, 0)] = nextResult.accessory;
    return items;
  } else if (Server.ComponentType.CONTAINER === type) {
    return nextResult.components;
  } else if (Server.ComponentType.LABEL === type) {
    const items1 = [nextResult.component];
    return items1;
  } else {
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
    return [];
  }
}
function transformComponent(accessory, items) {
  let SMALL;
  let animated;
  let c1;
  let emojiURL;
  let flag3;
  let found;
  let found2;
  let int2hslResult;
  let items1;
  let options;
  let required;
  let required2;
  let required3;
  let required4;
  let required5;
  let required6;
  let required7;
  let required8;
  let required9;
  let tmp2Result;
  let tmp2Result28;
  let tmp2Result29;
  let tmp2Result30;
  let tmp2Result31;
  let tmp2Result32;
  let tmp2Result33;
  let tmp2Result34;
  let tmp2Result35;
  let tmp2Result36;
  let tmp2Result37;
  let tmp2Result38;
  let tmp2Result39;
  let tmp2Result40;
  let tmp2Result41;
  let tmp2Result42;
  let tmp2Result43;
  let tmp2Result44;
  let tmp2Result46;
  let tmp2Result47;
  let tmp2Result48;
  let tmp2Result49;
  let tmp2Result51;
  let tmp2Result52;
  let tmp2Result53;
  let tmp2Result54;
  _require = items;
  const type = accessory.type;
  let tmp2 = _require;
  let flag = true;
  if (require("Server").ComponentType.ACTION_ROW !== type) {
    flag = true;
    if (tmp2(1985).ComponentType.BUTTON !== type) {
      flag = true;
      if (tmp2(1985).ComponentType.STRING_SELECT !== type) {
        flag = true;
        if (tmp2(1985).ComponentType.TEXT_INPUT !== type) {
          flag = true;
          if (tmp2(1985).ComponentType.USER_SELECT !== type) {
            flag = true;
            if (tmp2(1985).ComponentType.ROLE_SELECT !== type) {
              flag = true;
              if (tmp2(1985).ComponentType.MENTIONABLE_SELECT !== type) {
                flag = true;
                if (tmp2(1985).ComponentType.CHANNEL_SELECT !== type) {
                  flag = true;
                  if (tmp2(1985).ComponentType.SECTION !== type) {
                    flag = true;
                    if (tmp2(1985).ComponentType.TEXT_DISPLAY !== type) {
                      flag = true;
                      if (tmp2(1985).ComponentType.THUMBNAIL !== type) {
                        flag = true;
                        if (tmp2(1985).ComponentType.MEDIA_GALLERY !== type) {
                          flag = true;
                          if (tmp2(1985).ComponentType.FILE !== type) {
                            flag = true;
                            if (tmp2(1985).ComponentType.SEPARATOR !== type) {
                              flag = true;
                              if (tmp2(1985).ComponentType.CONTAINER !== type) {
                                flag = true;
                                if (tmp2(1985).ComponentType.LABEL !== type) {
                                  flag = true;
                                  if (tmp2(1985).ComponentType.FILE_UPLOAD !== type) {
                                    flag = true;
                                    if (tmp2(1985).ComponentType.CHECKPOINT_CARD !== type) {
                                      flag = true;
                                      if (tmp2(1985).ComponentType.RADIO_GROUP !== type) {
                                        flag = true;
                                        if (tmp2(1985).ComponentType.CHECKBOX_GROUP !== type) {
                                          flag = true;
                                          if (tmp2(1985).ComponentType.CHECKBOX !== type) {
                                            flag = true;
                                            if (tmp2(1985).ComponentType.CONTENT_INVENTORY_ENTRY !== type) {
                                              const UNKNOWN = tmp2(1985).ComponentType.UNKNOWN;
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
  if (flag) {
    importDefault = true;
    const type2 = accessory.type;
    if (tmp2(1985).ComponentType.ACTION_ROW === type2) {
      const components = accessory.components;
      const mapped = components.map((item, index) => {
        items = [];
        items[HermesBuiltin.arraySpread(items, closure_0, 0)] = index;
        const tmp2 = transformComponent(item, items);
        let tmp3 = null;
        if (null != tmp2) {
          tmp3 = tmp2;
        }
        return tmp3;
      });
      let obj2 = { type: tmp2(1985).ComponentType.ACTION_ROW, id: tmp2Result.asComponentId(items.join(",")), components: found };
      found = mapped.filter(tmp2(1375).isNotNullish);
      tmp2Result = tmp2(5129);
      return obj2;
    } else if (tmp2(1985).ComponentType.BUTTON === type2) {
      let tmp41;
      if (null != accessory.emoji) {
        let emoji = accessory.emoji;
        if (typeof getEmoji === "function") {
          const obj4 = { id: null, name: null, animated: null, src: emojiURL };
          ({ id: obj47.id, name: obj47.name, animated: obj47.animated } = emoji);
          emojiURL = undefined;
          if (null != emoji.id) {
            let obj6 = { id: null, animated, size: 48 };
            ({ id: obj48.id, animated } = emoji);
            let getEmojiURL = AvatarUtilsDefault.getEmojiURL;
            AvatarUtilsDefault;
            if (!animated) {
              animated = false;
            }
            emojiURL = getEmojiURL(obj6);
          }
          tmp41 = obj4;
        } else {
          throw new TypeError("Trying to call a non-function");
        }
      }
      const obj7 = { type: tmp2(1985).ComponentType.BUTTON, id: tmp2Result28.asComponentId(items.join(",")), customId: null, style: null, disabled: null, url: null, label: null, emoji: tmp41, skuId: accessory.sku_id };
      ({ custom_id: obj49.customId, style: obj49.style, disabled: obj49.disabled, url: obj49.url, label: obj49.label } = accessory);
      tmp2Result28 = tmp2(5129);
      return obj7;
    } else if (tmp2(1985).ComponentType.STRING_SELECT === type2) {
      const obj8 = {
        type: tmp2(1985).ComponentType.STRING_SELECT,
        id: tmp2Result29.asComponentId(items.join(",")),
        customId: null,
        disabled: null,
        required: required9,
        options: options.map((label) => {
              let animated;
              let emojiURL;
              let tmp2;
              const obj = { type: InteractionComponentTypes.SelectOptionType.STRING, label: label.label, value: label.value, default: label.default, description: label.description, emoji: tmp2 };
              tmp2 = undefined;
              if (null != label.emoji) {
                const emoji = label.emoji;
                if (typeof getEmoji === "function") {
                  const obj5 = { id: null, name: null, animated: null, src: emojiURL };
                  ({ id: obj2.id, name: obj2.name, animated: obj2.animated } = emoji);
                  emojiURL = undefined;
                  if (tmp4) {
                    if (null != emoji.id) {
                      const obj6 = { id: null, animated, size: 48 };
                      ({ id: obj3.id, animated } = emoji);
                      const getEmojiURL = AvatarUtilsDefault.getEmojiURL;
                      AvatarUtilsDefault;
                      if (!animated) {
                        animated = false;
                      }
                      emojiURL = getEmojiURL(obj6);
                    }
                  }
                  tmp2 = obj5;
                } else {
                  throw new TypeError("Trying to call a non-function");
                }
              }
              return obj;
            }),
        placeholder: null,
        minValues: null,
        maxValues: null
      };
      ({ custom_id: obj45.customId, disabled: obj45.disabled, required: required9 } = accessory);
      tmp2Result29 = tmp2(5129);
      if (required9 == null) {
        required9 = false;
      }
      options = accessory.options;
      ({ placeholder: obj45.placeholder, min_values: obj45.minValues, max_values: obj45.maxValues } = accessory);
      return obj8;
    } else if (tmp2(1985).ComponentType.TEXT_INPUT === type2) {
      const obj9 = { type: accessory.type, id: tmp2Result30.asComponentId(items.join(",")), style: null, customId: null, label: null, value: null, placeholder: null, disabled: null, required: required8, minLength: null, maxLength: null };
      ({ style: obj43.style, custom_id: obj43.customId, label: obj43.label, value: obj43.value, placeholder: obj43.placeholder, disabled: obj43.disabled, required: required8 } = accessory);
      tmp2Result30 = tmp2(5129);
      if (required8 == null) {
        required8 = false;
      }
      ({ min_length: obj43.minLength, max_length: obj43.maxLength } = accessory);
      return obj9;
    } else if (tmp2(1985).ComponentType.USER_SELECT === type2) {
      const obj10 = { type: tmp2(1985).ComponentType.USER_SELECT, id: tmp2Result31.asComponentId(items.join(",")), customId: null, disabled: null, required: required7, placeholder: null, minValues: null, maxValues: null, defaultValues: null };
      ({ custom_id: obj41.customId, disabled: obj41.disabled, required: required7 } = accessory);
      tmp2Result31 = tmp2(5129);
      if (required7 == null) {
        required7 = false;
      }
      ({ placeholder: obj41.placeholder, min_values: obj41.minValues, max_values: obj41.maxValues, default_values: obj41.defaultValues } = accessory);
      return obj10;
    } else if (tmp2(1985).ComponentType.ROLE_SELECT === type2) {
      const obj11 = { type: tmp2(1985).ComponentType.ROLE_SELECT, id: tmp2Result32.asComponentId(items.join(",")), customId: null, disabled: null, required: required6, placeholder: null, minValues: null, maxValues: null, defaultValues: null };
      ({ custom_id: obj39.customId, disabled: obj39.disabled, required: required6 } = accessory);
      tmp2Result32 = tmp2(5129);
      if (required6 == null) {
        required6 = false;
      }
      ({ placeholder: obj39.placeholder, min_values: obj39.minValues, max_values: obj39.maxValues, default_values: obj39.defaultValues } = accessory);
      return obj11;
    } else if (tmp2(1985).ComponentType.MENTIONABLE_SELECT === type2) {
      const obj13 = { type: tmp2(1985).ComponentType.MENTIONABLE_SELECT, id: tmp2Result33.asComponentId(items.join(",")), customId: null, disabled: null, required: required5, placeholder: null, minValues: null, maxValues: null, defaultValues: null };
      ({ custom_id: obj37.customId, disabled: obj37.disabled, required: required5 } = accessory);
      tmp2Result33 = tmp2(5129);
      if (required5 == null) {
        required5 = false;
      }
      ({ placeholder: obj37.placeholder, min_values: obj37.minValues, max_values: obj37.maxValues, default_values: obj37.defaultValues } = accessory);
      return obj13;
    } else if (tmp2(1985).ComponentType.CHANNEL_SELECT === type2) {
      const obj15 = { type: tmp2(1985).ComponentType.CHANNEL_SELECT, id: tmp2Result34.asComponentId(items.join(",")), customId: null, disabled: null, required: required4, placeholder: null, minValues: null, maxValues: null, channelTypes: null, defaultValues: null };
      ({ custom_id: obj35.customId, disabled: obj35.disabled, required: required4 } = accessory);
      tmp2Result34 = tmp2(5129);
      if (required4 == null) {
        required4 = false;
      }
      ({ placeholder: obj35.placeholder, min_values: obj35.minValues, max_values: obj35.maxValues, channel_types: obj35.channelTypes, default_values: obj35.defaultValues } = accessory);
      return obj15;
    } else if (tmp2(1985).ComponentType.SECTION === type2) {
      const components1 = accessory.components;
      const mapped1 = components1.map((item, index) => {
        items = [];
        items[HermesBuiltin.arraySpread(items, closure_0, 0)] = index;
        const tmp2 = transformComponent(item, items);
        let tmp3 = null;
        if (null != tmp2) {
          tmp3 = tmp2;
        }
        return tmp3;
      });
      const found1 = mapped1.filter(tmp2(1375).isNotNullish);
      items = [];
      items[HermesBuiltin.arraySpread(items, items, 0)] = found1.length;
      const tmp30 = transformComponent(accessory.accessory, items);
      let tmp32 = null;
      if (null != tmp30) {
        tmp32 = tmp30;
      }
      let tmp33 = null;
      if (0 !== found1.length) {
        tmp33 = null;
        if (null != tmp32) {
          const obj16 = { type: tmp2(1985).ComponentType.SECTION, id: tmp2Result35.asComponentId(items.join(",")), components: found1, accessory: tmp32 };
          tmp33 = obj16;
          tmp2Result35 = tmp2(5129);
        }
      }
      return tmp33;
    } else if (tmp2(1985).ComponentType.TEXT_DISPLAY === type2) {
      const obj17 = { type: tmp2(1985).ComponentType.TEXT_DISPLAY, id: tmp2Result36.asComponentId(items.join(",")), content: accessory.content };
      tmp2Result36 = tmp2(5129);
      return obj17;
    } else if (tmp2(1985).ComponentType.THUMBNAIL === type2) {
      const obj18 = { type: tmp2(1985).ComponentType.THUMBNAIL, id: tmp2Result37.asComponentId(items.join(",")), media: tmp2Result38.toUnfurledMediaItem(accessory.media), description: null, spoiler: null };
      tmp2Result37 = tmp2(5129);
      ({ description: obj28.description, spoiler: obj28.spoiler } = accessory);
      tmp2Result38 = tmp2(5128);
      return obj18;
    } else if (tmp2(1985).ComponentType.MEDIA_GALLERY === type2) {
      const obj19 = {
        type: tmp2(1985).ComponentType.MEDIA_GALLERY,
        id: tmp2Result39.asComponentId(items.join(",")),
        items: items1.map((media) => {
              let obj2;
              const obj = { media: obj2.toUnfurledMediaItem(media.media), description: null, spoiler: null };
              ({ description: obj.description, spoiler: obj.spoiler } = media);
              obj2 = items(dependencyMap[8]);
              return obj;
            })
      };
      items1 = accessory.items;
      tmp2Result39 = tmp2(5129);
      return obj19;
    } else if (tmp2(1985).ComponentType.FILE === type2) {
      const obj20 = { type: tmp2(1985).ComponentType.FILE, id: tmp2Result40.asComponentId(items.join(",")), file: tmp2Result41.toUnfurledMediaItem(accessory.file), name: null, size: null, spoiler: null };
      tmp2Result40 = tmp2(5129);
      ({ name: obj23.name, size: obj23.size, spoiler: obj23.spoiler } = accessory);
      tmp2Result41 = tmp2(5128);
      return obj20;
    } else if (tmp2(1985).ComponentType.SEPARATOR === type2) {
      const obj21 = { type: tmp2(1985).ComponentType.SEPARATOR, id: tmp2Result42.asComponentId(items.join(",")), divider: flag3, spacing: SMALL };
      flag3 = accessory.divider;
      tmp2Result42 = tmp2(5129);
      if (flag3 == null) {
        flag3 = true;
      }
      SMALL = accessory.spacing;
      if (SMALL == null) {
        SMALL = tmp2(1985).SeparatorSpacingSize.SMALL;
      }
      return obj21;
    } else if (tmp2(1985).ComponentType.CONTENT_INVENTORY_ENTRY === type2) {
      let tmp25 = null;
      if (null != accessory.content_inventory_entry) {
        const obj22 = { type: tmp2(1985).ComponentType.CONTENT_INVENTORY_ENTRY, id: tmp2Result43.asComponentId(items.join(",")), contentInventoryEntry: accessory.content_inventory_entry };
        tmp25 = obj22;
        tmp2Result43 = tmp2(5129);
      }
      return tmp25;
    } else if (tmp2(1985).ComponentType.CONTAINER === type2) {
      const components2 = accessory.components;
      const mapped2 = components2.map((item, index) => {
        items = [];
        items[HermesBuiltin.arraySpread(items, closure_0, 0)] = index;
        const tmp2 = transformComponent(item, items);
        let tmp3 = null;
        if (null != tmp2) {
          tmp3 = tmp2;
        }
        return tmp3;
      });
      const obj24 = { type: tmp2(1985).ComponentType.CONTAINER, id: tmp2Result44.asComponentId(items.join(",")), accentColor: int2hslResult, spoiler: accessory.spoiler, components: found2 };
      found2 = mapped2.filter(tmp2(1375).isNotNullish);
      int2hslResult = undefined;
      tmp2Result44 = tmp2(5129);
      if (null != accessory.accent_color) {
        const tmp2Result45 = tmp2(1103);
        int2hslResult = tmp2Result45.int2hsl(accessory.accent_color, false);
      }
      return obj24;
    } else if (tmp2(1985).ComponentType.LABEL === type2) {
      const items2 = [];
      items2[HermesBuiltin.arraySpread(items2, items, 0)] = 0;
      const tmp18 = transformComponent(accessory.component, items2);
      let tmp20 = null;
      if (null != tmp18) {
        tmp20 = tmp18;
      }
      let tmp21 = null;
      if (null != tmp20) {
        const obj25 = { type: tmp2(1985).ComponentType.LABEL, id: tmp2Result46.asComponentId(items.join(",")), label: null, description: null, component: tmp20 };
        ({ label: obj14.label, description: obj14.description } = accessory);
        tmp21 = obj25;
        tmp2Result46 = tmp2(5129);
      }
      return tmp21;
    } else if (tmp2(1985).ComponentType.FILE_UPLOAD === type2) {
      const obj26 = { type: accessory.type, id: tmp2Result47.asComponentId(items.join(",")), customId: null, disabled: null, required: required3, minValues: null, maxValues: null, fileTypes: null };
      ({ custom_id: obj12.customId, disabled: obj12.disabled, required: required3 } = accessory);
      tmp2Result47 = tmp2(5129);
      if (required3 == null) {
        required3 = false;
      }
      ({ min_values: obj12.minValues, max_values: obj12.maxValues, file_types: obj12.fileTypes } = accessory);
      return obj26;
    } else if (tmp2(1985).ComponentType.CHECKPOINT_CARD === type2) {
      let tmp12;
      const checkpoint_data = accessory.checkpoint_data;
      const version = checkpoint_data.version;
      if (CheckpointVersions.V2025 === version) {
        const obj27 = { type: accessory.type, id: tmp2Result48.asComponentId(items.join(",")), checkpointData: tmp2Result49.transformCheckpoint2025CardComponent(checkpoint_data) };
        tmp2Result48 = tmp2(5129);
        tmp12 = obj27;
        tmp2Result49 = tmp2(5130);
      } else {
        tmp12 = null;
        if (tmp10.V2026 === version) {
          const tmp2Result50 = tmp2(5143);
          const result = tmp2Result50.transformCheckpoint2026CardComponent(checkpoint_data);
          let tmp13 = null;
          if (null != result) {
            const obj29 = { type: accessory.type, id: tmp2Result51.asComponentId(items.join(",")), checkpointData: result };
            tmp13 = obj29;
            tmp2Result51 = tmp2(5129);
          }
          tmp12 = tmp13;
        }
      }
      return tmp12;
    } else if (tmp2(1985).ComponentType.RADIO_GROUP === type2) {
      const obj30 = { type: accessory.type, id: tmp2Result52.asComponentId(items.join(",")), customId: null, options: null, required: required2 };
      ({ custom_id: obj5.customId, options: obj5.options, required: required2 } = accessory);
      tmp2Result52 = tmp2(5129);
      if (required2 == null) {
        required2 = false;
      }
      return obj30;
    } else if (tmp2(1985).ComponentType.CHECKBOX_GROUP === type2) {
      const obj31 = { type: accessory.type, id: tmp2Result53.asComponentId(items.join(",")), customId: null, options: null, minValues: null, maxValues: null, required };
      ({ custom_id: obj3.customId, options: obj3.options, min_values: obj3.minValues, max_values: obj3.maxValues, required } = accessory);
      tmp2Result53 = tmp2(5129);
      if (required == null) {
        required = false;
      }
      return obj31;
    } else if (tmp2(1985).ComponentType.CHECKBOX === type2) {
      let obj = { type: accessory.type, id: tmp2Result54.asComponentId(items.join(",")), customId: null, default: null };
      ({ custom_id: obj.customId, default: obj.default } = accessory);
      tmp2Result54 = tmp2(5129);
      return obj;
    } else {
      logger.warn("transformComponent: Unknown component type", accessory.type);
      return null;
    }
  } else {
    const tmp4 = null;
    return null;
  }
}
const CheckpointVersions = CheckpointConstants.CheckpointVersions;
let tmp2 = new LoggerDefault("InteractionComponentUtils");
const logger = tmp2;
function getEmoji(arg0, arg1) {

}
let result = size.fileFinishedImporting("modules/interaction_components/InteractionComponentUtils.tsx");

export const getLayoutComponentErrorText = function getLayoutComponentErrorText(interaction, message, accessory) {
  let interactionType;
  if (interaction != null) {
    interactionType = interaction.data.interactionType;
  }
  let componentId = null;
  if (interactionType === InteractionTypes.InteractionTypes.MESSAGE_COMPONENT) {
    let state;
    if (interaction != null) {
      state = interaction.state;
    }
    componentId = null;
    if (state === interactions_InteractionTypes.InteractionState.FAILED) {
      componentId = interaction.data.componentId;
    }
  }
  let tmp6 = null;
  if (null != componentId) {
    tmp6 = findChildComponent(accessory, componentId);
  }
  if (null != tmp6) {
    let interactionError;
    if (message != null) {
      interactionError = message.interactionError;
    }
    if (interactionError == null) {
      let stringResult;
      let errorCode;
      if (interaction != null) {
        errorCode = interaction.errorCode;
      }
      if (429 === errorCode) {
        const intl2 = intl7.intl;
        stringResult = intl2.string(intl7.t.fitPBS);
      } else {
        let reasonCode;
        if (interaction != null) {
          reasonCode = interaction.reasonCode;
        }
        if (null == reasonCode) {
          const intl = intl7.intl;
          stringResult = intl.string(intl7.t.VCsUJu);
        } else {
          const tmp2Result = interactionCallbackErrorReason;
          stringResult = tmp2Result.interactionCallbackErrorReason(interaction.reasonCode, interaction.data.applicationId);
        }
      }
      interactionError = stringResult;
    }
    return interactionError;
  }
};
export const getSelectPlaceholder = function getSelectPlaceholder(placeholder) {
  placeholder = placeholder.placeholder;
  if (placeholder == null) {
    const intl = intl7.intl;
    placeholder = intl.string(intl7.t.Otr6W2);
  }
  return placeholder;
};
export const canSelectBeEmpty = function canSelectBeEmpty(value, modal) {
  let tmp2;
  if ("modal" === modal) {
    tmp2 = !value.required;
  } else {
    tmp2 = 0 === tmp;
  }
  return tmp2;
};
export { flattenComponents };
export { findChildComponent };
export const getAllTextDisplayContent = function getAllTextDisplayContent(components) {
  const obj = flattenComponents(components);
  const arr = Array.from(obj.values());
  const found = arr.filter((type) => type.type === require("Server").ComponentType.TEXT_DISPLAY);
  const mapped = found.map((content) => content.content);
  const joined = mapped.join("\n");
  let tmp2 = null;
  if ("" !== joined) {
    tmp2 = joined;
  }
  return tmp2;
};
export const getFirstInteractionComponentMedia = function getFirstInteractionComponentMedia(components) {
  const obj = flattenComponents(components);
  const values = obj.values();
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
          let obj2 = { type: tmp17, alt: tmp14.description };
          let merged = Object.assign(tmp14.media);
          iter.return();
          return obj2;
        }
      }
    } else if (tmp3.type === Server.ComponentType.THUMBNAIL) {
      let tmp4Result2 = MediaTypes;
      let unfurledMediaItemType1 = tmp4Result2.getUnfurledMediaItemType(tmp3.media);
      if ("INVALID" !== unfurledMediaItemType1) {
        let obj3 = { type: tmp25, alt: tmp3.description };
        let merged1 = Object.assign(tmp3.media);
        iter.return();
        return obj3;
      }
    }
    continue;
  }
  return null;
};
export const getParents = function getParents(components, value) {
  let closure_0 = value;
  function search(components) {
    let id;
    let items = arg1;
    if (arg1 === undefined) {
      items = [];
    }
    const iter = components[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let obj = getComponentChildren(nextResult);
      let tmp5 = obj;
      if (obj.some((id) => id.id === id.id)) {
        let items1 = [tmp3];
        let arraySpreadResult = HermesBuiltin.arraySpread(items1, items, 1);
        iter.return();
        return items1;
      } else {
        let items2 = [tmp3];
        let arraySpreadResult2 = HermesBuiltin.arraySpread(items2, items, 1);
        let tmp12 = search(tmp5, items2);
        if (null != tmp12) {
          iter.return();
          return tmp12;
        }
      }
    }
    return null;
  }
  return search(components);
};
export const makeComponentUploadId = function makeComponentUploadId(containerId) {
  let randomUUIDResult;
  const obj = { type: "component-upload", containerId, uniqueId: randomUUIDResult };
  randomUUIDResult = undefined;
  if (randomUUID != null) {
    randomUUIDResult = randomUUID();
  }
  if (randomUUIDResult == null) {
    const obj2 = v1;
    randomUUIDResult = obj2.v4();
  }
  return JSON.stringify(obj);
};
export const deserializeComponentUploadId = function deserializeComponentUploadId(id) {
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
      if (typeof parsed.containerId === "string") {
        tmp7 = null;
        if (typeof parsed.uniqueId === "string") {
          tmp7 = parsed;
        }
      }
    }
    return tmp7;
  } catch (err) {
    return null;
  }
};
export const getFileUploadComponentSubtitle = function getFileUploadComponentSubtitle(minValues, maxValues, types, formatSizeResult) {
  let formatResult3;
  if (null != types) {
    let formatResult1;
    if (minValues > 1) {
      let formatResult;
      if (minValues === maxValues) {
        const intl6 = intl7.intl;
        const obj2 = { minValues, types, maxSize: formatSizeResult };
        formatResult = intl6.format(intl7.t.Xp4xMV, obj2);
      } else {
        const intl5 = intl7.intl;
        const obj3 = { minValues, maxValues, types, maxSize: formatSizeResult };
        formatResult = intl5.format(intl7.t["05AyNA"], obj3);
      }
      formatResult1 = formatResult;
    } else {
      const intl4 = intl7.intl;
      const obj4 = { maxValues, types, maxSize: formatSizeResult };
      formatResult1 = intl4.format(intl7.t.QLrHJG, obj4);
    }
    formatResult3 = formatResult1;
  } else if (minValues > 1) {
    let formatResult2;
    if (minValues === maxValues) {
      const intl3 = intl7.intl;
      const obj5 = { minValues, maxSize: formatSizeResult };
      formatResult2 = intl3.format(intl7.t.SAr31z, obj5);
    } else {
      const intl2 = intl7.intl;
      const obj6 = { minValues, maxValues, maxSize: formatSizeResult };
      formatResult2 = intl2.format(intl7.t["ZG+3Ck"], obj6);
    }
    formatResult3 = formatResult2;
  } else {
    const intl = intl7.intl;
    const obj = { maxValues, maxSize: formatSizeResult };
    formatResult3 = intl.format(intl7.t.tyxwW1, obj);
  }
  return formatResult3;
};
export const transformComponents = function transformComponents(arr) {
  const mapped = arr.map((item, index) => {
    const items = [index];
    return transformComponent(item, items);
  });
  return mapped.filter((item) => null != item);
};