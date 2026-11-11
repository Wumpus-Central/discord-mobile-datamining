// discord_app/modules/checkpoint/character/useCheckpointCharacterReferencedAssets.tsx
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils.tsx";
import CheckpointCharacterTextureAssets from "CheckpointCharacterTextureAssets.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
let set = new Set([1]);
const keys = Object.keys(fn(14200).CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET);
let closure_4 = keys.map((name) => {
  const obj = { name, role: CheckpointCharacterTextureUtils.getCheckpointCharacterTextureRole(name), swapKey: null };
  let combined = name;
  if (obj3.isIOS()) {
    const _HermesInternal = HermesInternal;
    combined =
      "" + name + "-" + CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET[name].riveId;
  }
  obj.swapKey = combined;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/character/useCheckpointCharacterReferencedAssets.tsx");

export function useCheckpointCharacterReferencedAssets(arg0) {
  ({ visibleDataBinding, requestedDataBinding, textureScale } = arg0);
  let checkpointCharacterLoadedTextureNames;
  const faceID = visibleDataBinding.faceID;
  closure_129_0 = faceID;
  const headwearID = visibleDataBinding.headwearID;
  closure_129_1 = headwearID;
  const shoesID = visibleDataBinding.shoesID;
  closure_129_2 = shoesID;
  const wearableID = visibleDataBinding.wearableID;
  closure_129_3 = wearableID;
  const chapterID = visibleDataBinding.chapterID;
  closure_129_4 = chapterID;
  const device = visibleDataBinding.device;
  closure_129_5 = device;
  items = [faceID, headwearID, shoesID, wearableID, chapterID, device];
  const faceID2 = requestedDataBinding.faceID;
  closure_130_0 = faceID2;
  const headwearID2 = requestedDataBinding.headwearID;
  closure_130_1 = headwearID2;
  const shoesID2 = requestedDataBinding.shoesID;
  closure_130_2 = shoesID2;
  const wearableID2 = requestedDataBinding.wearableID;
  closure_130_3 = wearableID2;
  const chapterID2 = requestedDataBinding.chapterID;
  closure_130_4 = chapterID2;
  const device2 = requestedDataBinding.device;
  closure_130_5 = device2;
  const items1 = [faceID2, headwearID2, shoesID2, wearableID2, chapterID2, device2];
  const memo = noop.useMemo(() => {
    const obj = { faceID: textureScale, headwearID: checkpointCharacterLoadedTextureNames, shoesID, wearableID };
    closure_1 = closure_1_4;
    closure_2 = closure_1_5;
    set = new Set();
    const item = closure_4.forEach((item) => {
      ({ name, role } = item);
      const type = role.type;
      if (textureScale(checkpointCharacterLoadedTextureNames[3]).CheckpointCharacterTextureType.SLOT !== type) {
        if (textureScale(checkpointCharacterLoadedTextureNames[3]).CheckpointCharacterTextureType.TRAIT === type) {
          if (obj[role.path] === role.riveId) {
            set.add(name);
          }
        } else if (
          textureScale(checkpointCharacterLoadedTextureNames[3]).CheckpointCharacterTextureType.LAYOUT === type
        ) {
          const layouts = role.layouts;
          if (layouts.includes(closure_2)) {
            set.add(name);
          }
        } else if (
          textureScale(checkpointCharacterLoadedTextureNames[3]).CheckpointCharacterTextureType.ALWAYS === type
        ) {
          let hasItem = "tex_wireframe_spritesheet" !== name;
          if (!hasItem) {
            hasItem = wearableID.has(closure_1);
          }
          if (hasItem) {
            set.add(name);
          }
        }
      }
    });
    return set;
  }, items);
  const memo1 = noop.useMemo(() => {
    const obj = { faceID: textureScale, headwearID: checkpointCharacterLoadedTextureNames, shoesID, wearableID };
    closure_1 = closure_1_4;
    closure_2 = closure_1_5;
    set = new Set();
    const item = closure_4.forEach((item) => {
      ({ name, role } = item);
      const type = role.type;
      if (textureScale(checkpointCharacterLoadedTextureNames[3]).CheckpointCharacterTextureType.SLOT !== type) {
        if (textureScale(checkpointCharacterLoadedTextureNames[3]).CheckpointCharacterTextureType.TRAIT === type) {
          if (obj[role.path] === role.riveId) {
            set.add(name);
          }
        } else if (
          textureScale(checkpointCharacterLoadedTextureNames[3]).CheckpointCharacterTextureType.LAYOUT === type
        ) {
          const layouts = role.layouts;
          if (layouts.includes(closure_2)) {
            set.add(name);
          }
        } else if (
          textureScale(checkpointCharacterLoadedTextureNames[3]).CheckpointCharacterTextureType.ALWAYS === type
        ) {
          let hasItem = "tex_wireframe_spritesheet" !== name;
          if (!hasItem) {
            hasItem = wearableID.has(closure_1);
          }
          if (hasItem) {
            set.add(name);
          }
        }
      }
    });
    return set;
  }, items1);
  checkpointCharacterLoadedTextureNames = textureScale(
    checkpointCharacterLoadedTextureNames[5],
  ).useCheckpointCharacterLoadedTextureNames({ visibleTextureNames: memo, requestedTextureNames: memo1 });
  const items2 = [checkpointCharacterLoadedTextureNames, textureScale];
  return noop.useMemo(() => {
    closure_1 = textureScale;
    const item = closure_4.forEach((name) => {
      name = name.name;
      if (set.has(name)) {
        let url = textureScale(checkpointCharacterLoadedTextureNames[3]).getCheckpointCharacterTextureUrl(
          name,
          closure_1,
        );
        const tmpResult = textureScale(checkpointCharacterLoadedTextureNames[3]);
      } else {
        url = textureScale(checkpointCharacterLoadedTextureNames[4]).CHECKPOINT_CHARACTER_BLANK_TEXTURE.url;
      }
      obj = { source: { uri: url } };
      obj[name.swapKey] = obj;
    });
    return {};
  }, items2);
}
