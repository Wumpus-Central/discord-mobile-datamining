// === Module 7546: CollectiblesItemRecord ===

// Module 7546 (CollectiblesItemRecord)
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import AvatarDecorationRecord from "AvatarDecorationRecord" /* 7547 */;
import NameplateRecord from "NameplateRecord" /* 1887 */;
import ProfileEffectRecord from "ProfileEffectRecord" /* 7548 */;
import ProfileFrameRecord from "ProfileFrameRecord" /* 7549 */;
import UnknownCollectiblesItemRecord from "UnknownCollectiblesItemRecord" /* 7550 */;

require = fn;
const Constants = fn(1074);
({ SKUProductLines: closure_7, SKUTypes: closure_8 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/records/CollectiblesItemRecord.tsx");
function transformSKUToCollectiblesItem(productLine) {
  if (productLine.productLine === constants.COLLECTIBLES) {
    if (productLine.type === constants2.BUNDLE) {
      const items = [];
      let bundledSkus = productLine.bundledSkus;
      if (bundledSkus == null) {
        bundledSkus = [];
      }
      const tmp32 = bundledSkus[Symbol.iterator]();
      while (tmp32 !== undefined) {
        let tmp37 = transformSKUToCollectiblesItem(tmp34);
        let type;
        let tmp38 = tmp37;
        if (tmp37 != null) {
          type = tmp37.type;
        }
        if ("single" === type) {
          let arr = items.push(tmp38.item);
        }
        continue;
      }
      if (0 !== items.length) {
        let obj = { type: "bundle", items, previewAssets: null };
        const previewAssetPaths = productLine.previewAssetPaths;
        obj.previewAssets = previewAssetPaths;
        return obj;
      }
    } else {
      const tenantMetadata = productLine.tenantMetadata;
      let collectibles;
      if (tenantMetadata != null) {
        collectibles = tenantMetadata.collectibles;
      }
      let item;
      if (collectibles != null) {
        item = collectibles.item;
      }
      if (null != item) {
        type = item.type;
        if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
          obj = { type: "single", item: null };
          const obj1 = { skuId: productLine.id, type: null, asset: null, label: null };
          ({ type: obj8.type, asset: obj8.asset, label: obj8.label } = item);
          const tmp28 = new AvatarDecorationRecord(obj1);
          obj.item = tmp28;
          return obj;
        } else if (tmp4(1889).CollectiblesItemType.NAMEPLATE === type) {
          const obj2 = { type: "single", item: null };
          const obj3 = { skuId: productLine.id, type: null, asset: null, label: null, palette: null };
          ({ type: obj6.type, asset: obj6.asset, label: obj6.label, palette: obj6.palette } = item);
          const tmp22 = new NameplateRecord(obj3);
          obj2.item = tmp22;
          return obj2;
        } else if (tmp4(1889).CollectiblesItemType.PROFILE_EFFECT === type) {
          const obj4 = { skuId: productLine.id, type: null, title: null, description: null, thumbnailPreviewSrc: null, reducedMotionSrc: null, effects: null, accessibilityLabel: null, animationType: null, staticFrameSrc: null };
          ({ type: obj3.type, title: obj3.title, description: obj3.description, thumbnailPreviewSrc: obj3.thumbnailPreviewSrc, reducedMotionSrc: obj3.reducedMotionSrc, effects } = item);
          let tmp12 = ProfileEffectRecord;
          if (effects == null) {
            effects = [];
          }
          const obj5 = { type: "single", item: null };
          obj4.effects = effects;
          ({ accessibilityLabel: obj3.accessibilityLabel, animationType: obj3.animationType, staticFrameSrc: obj3.staticFrameSrc } = item);
          tmp12 = new tmp12(obj4);
          obj5.item = tmp12;
          return obj5;
        } else if (tmp4(1889).CollectiblesItemType.PROFILE_FRAME === type) {
          obj = { type: "single", item: null };
          const obj6 = { skuId: productLine.id, type: null, label: null, layers: null, innerWidth: null, overflowTop: null, overflowBottom: null, overflowHorizontal: null };
          ({ type: obj2.type, label: obj2.label, layers: obj2.layers, innerWidth: obj2.innerWidth, overflowTop: obj2.overflowTop, overflowBottom: obj2.overflowBottom, overflowHorizontal: obj2.overflowHorizontal } = item);
          const tmp10 = new ProfileFrameRecord(obj6);
          obj.item = tmp10;
          return obj;
        }
      }
    }
  }
}

export const createCollectiblesItemsFromServerResponse = function createCollectiblesItemsFromServerResponse(arr) {
  if (null == arr) {
    let items = [];
  } else {
    items = arr.reduce((arr, type) => {
      type = type.type;
      if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
        arr.push(AvatarDecorationRecord.fromServer(type));
      } else if (tmp(tmp2[6]).CollectiblesItemType.NAMEPLATE === type) {
        arr.push(NameplateRecord.fromServer(type));
      } else if (tmp(tmp2[6]).CollectiblesItemType.PROFILE_EFFECT === type) {
        arr.push(ProfileEffectRecord.fromServer(type));
      } else if (tmp(tmp2[6]).CollectiblesItemType.PROFILE_FRAME === type) {
        arr.push(ProfileFrameRecord.fromServer(type));
      } else {
        arr.push(UnknownCollectiblesItemRecord.fromServer(type));
      }
      return arr;
    }, []);
  }
  return items;
};
export { transformSKUToCollectiblesItem };