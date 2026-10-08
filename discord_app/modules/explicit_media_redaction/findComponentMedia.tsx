// === Module 6987: findComponentMedia ===

// Module 6987 (findComponentMedia)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/findComponentMedia.tsx");
function findComponentMedia(arg0) {
  let obj = arg0;
  if (!Array.isArray(arg0)) {
    const items = [arg0];
    obj = items;
  }
  return obj.flatMap((type) => {
    type = type.type;
    if (closure_1_0(closure_1_1[0]).ComponentType.MEDIA_GALLERY === type) {
      let items = type.items;
      return items.map((media) => media.media);
    } else if (closure_1_0(closure_1_1[0]).ComponentType.THUMBNAIL === type) {
      return type.media;
    } else if (closure_1_0(closure_1_1[0]).ComponentType.FILE === type) {
      return type.file;
    } else if (closure_1_0(closure_1_1[0]).ComponentType.SECTION === type) {
      let components2 = type.components;
      let items1 = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(components2.flatMap(closure_1_2), 0);
      let accessory = type.accessory;
      let _Array = Array;
      let obj = accessory;
      if (!Array.isArray(accessory)) {
        let items2 = [accessory];
        obj = items2;
      }
      HermesBuiltin.arraySpread(obj.flatMap((type) => {
        type = type.type;
        if (closure_1_0(closure_1_1[0]).ComponentType.MEDIA_GALLERY === type) {
          let items = type.items;
          return items.map((media) => media.media);
        } else if (closure_1_0(closure_1_1[0]).ComponentType.THUMBNAIL === type) {
          return type.media;
        } else if (closure_1_0(closure_1_1[0]).ComponentType.FILE === type) {
          return type.file;
        } else if (closure_1_0(closure_1_1[0]).ComponentType.SECTION === type) {
          let components2 = type.components;
          let items1 = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(components2.flatMap(closure_1_2), 0);
          let accessory = type.accessory;
          let _Array = Array;
          let obj = accessory;
          if (!Array.isArray(accessory)) {
            let items2 = [accessory];
            obj = items2;
          }
          HermesBuiltin.arraySpread(obj.flatMap((type) => {
            type = type.type;
            if (closure_1_0(closure_1_1[0]).ComponentType.MEDIA_GALLERY === type) {
              let items = type.items;
              return items.map((media) => media.media);
            } else if (closure_1_0(closure_1_1[0]).ComponentType.THUMBNAIL === type) {
              return type.media;
            } else if (closure_1_0(closure_1_1[0]).ComponentType.FILE === type) {
              return type.file;
            } else if (closure_1_0(closure_1_1[0]).ComponentType.SECTION === type) {
              let components2 = type.components;
              let items1 = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(components2.flatMap(closure_1_2), 0);
              let accessory = type.accessory;
              let _Array = Array;
              let obj = accessory;
              if (!Array.isArray(accessory)) {
                let items2 = [accessory];
                obj = items2;
              }
              HermesBuiltin.arraySpread(obj.flatMap((type) => {
                type = type.type;
                if (closure_1_0(closure_1_1[0]).ComponentType.MEDIA_GALLERY === type) {
                  let items = type.items;
                  return items.map(() => { ... });
                } else if (closure_1_0(closure_1_1[0]).ComponentType.THUMBNAIL === type) {
                  return type.media;
                } else if (closure_1_0(closure_1_1[0]).ComponentType.FILE === type) {
                  return type.file;
                } else if (closure_1_0(closure_1_1[0]).ComponentType.SECTION === type) {
                  let components2 = type.components;
                  let items1 = [];
                  let arraySpreadResult = HermesBuiltin.arraySpread(components2.flatMap(closure_1_2), 0);
                  let accessory = type.accessory;
                  let _Array = Array;
                  let obj = accessory;
                  if (!Array.isArray(accessory)) {
                    let items2 = [accessory];
                    obj = items2;
                  }
                  HermesBuiltin.arraySpread(obj.flatMap(() => { ... }).map(() => { ... }), arraySpreadResult);
                  return items1;
                } else {
                  if (closure_1_0(closure_1_1[0]).ComponentType.ACTION_ROW !== type) {
                    if (closure_1_0(closure_1_1[0]).ComponentType.CONTAINER !== type) {
                      return [];
                    }
                  }
                  let components = type.components;
                  return components.flatMap(closure_1_2);
                }
              }).map((item) => {
                let toUnfurledMediaItemResult = item;
                if ("proxy_url" in item) {
                  toUnfurledMediaItemResult = closure_1_0(dependencyMap[1]).toUnfurledMediaItem(item);
                  const obj = closure_1_0(dependencyMap[1]);
                }
                return toUnfurledMediaItemResult;
              }), arraySpreadResult);
              return items1;
            } else {
              if (closure_1_0(closure_1_1[0]).ComponentType.ACTION_ROW !== type) {
                if (closure_1_0(closure_1_1[0]).ComponentType.CONTAINER !== type) {
                  return [];
                }
              }
              let components = type.components;
              return components.flatMap(closure_1_2);
            }
          }).map((item) => {
            let toUnfurledMediaItemResult = item;
            if ("proxy_url" in item) {
              toUnfurledMediaItemResult = closure_1_0(dependencyMap[1]).toUnfurledMediaItem(item);
              const obj = closure_1_0(dependencyMap[1]);
            }
            return toUnfurledMediaItemResult;
          }), arraySpreadResult);
          return items1;
        } else {
          if (closure_1_0(closure_1_1[0]).ComponentType.ACTION_ROW !== type) {
            if (closure_1_0(closure_1_1[0]).ComponentType.CONTAINER !== type) {
              return [];
            }
          }
          let components = type.components;
          return components.flatMap(closure_1_2);
        }
      }).map((item) => {
        let toUnfurledMediaItemResult = item;
        if ("proxy_url" in item) {
          toUnfurledMediaItemResult = closure_1_0(dependencyMap[1]).toUnfurledMediaItem(item);
          const obj = closure_1_0(dependencyMap[1]);
        }
        return toUnfurledMediaItemResult;
      }), arraySpreadResult);
      return items1;
    } else {
      if (closure_1_0(closure_1_1[0]).ComponentType.ACTION_ROW !== type) {
        if (closure_1_0(closure_1_1[0]).ComponentType.CONTAINER !== type) {
          return [];
        }
      }
      let components = type.components;
      return components.flatMap(closure_1_2);
    }
  }).map((item) => {
    let toUnfurledMediaItemResult = item;
    if ("proxy_url" in item) {
      toUnfurledMediaItemResult = closure_1_0(dependencyMap[1]).toUnfurledMediaItem(item);
      const obj = closure_1_0(dependencyMap[1]);
    }
    return toUnfurledMediaItemResult;
  });
}

export default findComponentMedia;