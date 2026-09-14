// discord_app/modules/collectibles/records/CollectiblesItemRecord.tsx
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import AvatarDecorationRecord from "AvatarDecorationRecord.tsx";
import NameplateRecord from "NameplateRecord.tsx";
import ProfileEffectRecord from "ProfileEffectRecord.tsx";
import ProfileFrameRecord from "ProfileFrameRecord.tsx";
import UnknownCollectiblesItemRecord from "UnknownCollectiblesItemRecord.tsx";

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
        let type1;
        let tmp38 = tmp37;
        if (tmp37 != null) {
          type1 = tmp37.type;
        }
        if ("single" === type1) {
          let arr = items.push(tmp38.item);
        }
        continue;
      }
      if (0 !== items.length) {
        const obj4 = { type: "bundle", items, previewAssets: null };
        const previewAssetPaths = productLine.previewAssetPaths;
        obj4.previewAssets = previewAssetPaths;
        return obj4;
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
        const type = item.type;
        if (CollectiblesItemType.CollectiblesItemType.AVATAR_DECORATION === type) {
          const obj5 = { type: "single", item: null };
          const obj7 = { skuId: productLine.id, type: null, asset: null, label: null };
          ({ type: obj8.type, asset: obj8.asset, label: obj8.label } = item);
          const tmp28 = new AvatarDecorationRecord(obj7);
          obj5.item = tmp28;
          return obj5;
        } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
          const obj9 = { type: "single", item: null };
          const obj17 = { skuId: productLine.id, type: null, asset: null, label: null, palette: null };
          ({ type: obj6.type, asset: obj6.asset, label: obj6.label, palette: obj6.palette } = item);
          const tmp22 = new NameplateRecord(obj17);
          obj9.item = tmp22;
          return obj9;
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
          const obj18 = {
            skuId: productLine.id,
            type: null,
            title: null,
            description: null,
            thumbnailPreviewSrc: null,
            reducedMotionSrc: null,
            effects: null,
            accessibilityLabel: null,
            animationType: null,
            staticFrameSrc: null,
          };
          ({
            type: obj3.type,
            title: obj3.title,
            description: obj3.description,
            thumbnailPreviewSrc: obj3.thumbnailPreviewSrc,
            reducedMotionSrc: obj3.reducedMotionSrc,
            effects,
          } = item);
          if (effects == null) {
            effects = [];
          }
          const obj19 = { type: "single", item: null };
          obj18.effects = effects;
          ({
            accessibilityLabel: obj3.accessibilityLabel,
            animationType: obj3.animationType,
            staticFrameSrc: obj3.staticFrameSrc,
          } = item);
          const tmp122 = new ProfileEffectRecord(obj18);
          obj19.item = tmp122;
          return obj19;
        } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
          const obj = { type: "single", item: null };
          const obj20 = {
            skuId: productLine.id,
            type: null,
            label: null,
            layers: null,
            innerWidth: null,
            overflowTop: null,
            overflowBottom: null,
            overflowHorizontal: null,
          };
          ({
            type: obj2.type,
            label: obj2.label,
            layers: obj2.layers,
            innerWidth: obj2.innerWidth,
            overflowTop: obj2.overflowTop,
            overflowBottom: obj2.overflowBottom,
            overflowHorizontal: obj2.overflowHorizontal,
          } = item);
          const tmp10 = new ProfileFrameRecord(obj20);
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
        arr = arr.push(AvatarDecorationRecord.fromServer(type));
      } else if (CollectiblesItemType.CollectiblesItemType.NAMEPLATE === type) {
        arr.push(NameplateRecord.fromServer(type));
      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_EFFECT === type) {
        arr.push(ProfileEffectRecord.fromServer(type));
      } else if (CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME === type) {
        arr.push(ProfileFrameRecord.fromServer(type));
      } else {
        arr.push(UnknownCollectiblesItemRecord.fromServer(type));
      }
      return arr;
    }, []);
  }
  return items;
};
export const transformProductToCollectiblesItem = function transformProductToCollectiblesItem(type) {
  if (null != type) {
    if (0 !== type.items.length) {
      if (type.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
        ({ items: obj2.items, previewAssets: obj2.previewAssets } = type);
        let obj = { type: "bundle", items: null, previewAssets: null };
        const obj3 = { type: "bundle", items: null, previewAssets: null };
      } else {
        obj = { type: "single", item: type.items[0] };
      }
      return obj;
    }
  }
};
export { transformSKUToCollectiblesItem };
