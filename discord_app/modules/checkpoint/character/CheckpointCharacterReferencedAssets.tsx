// discord_app/modules/checkpoint/character/CheckpointCharacterReferencedAssets.tsx
import CheckpointCharacterTextureAssets from "CheckpointCharacterTextureAssets.tsx";
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils.tsx";
import CheckpointCharacterRiveTraits from "CheckpointCharacterRiveTraits.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let set = new Set([1]);
const keys = Object.keys(CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET);
let closure_3 = keys.map((name) => {
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
const result = size.fileFinishedImporting("modules/checkpoint/character/CheckpointCharacterReferencedAssets.tsx");

export function getCheckpointCharacterVisibleTextureNames(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  set = new Set();
  const item = set.forEach((item) => {
    ({ name, role } = item);
    const type = role.type;
    if (CheckpointCharacterTextureUtils.CheckpointCharacterTextureType.SLOT !== type) {
      if (CheckpointCharacterTextureUtils.CheckpointCharacterTextureType.TRAIT === type) {
        if (closure_0[role.path] === role.riveId) {
          set.add(name);
        }
      } else if (CheckpointCharacterTextureUtils.CheckpointCharacterTextureType.LAYOUT === type) {
        const layouts = role.layouts;
        if (layouts.includes(closure_2)) {
          set.add(name);
        }
      } else if (CheckpointCharacterTextureUtils.CheckpointCharacterTextureType.ALWAYS === type) {
        let hasItem = "tex_wireframe_spritesheet" !== name;
        if (!hasItem) {
          hasItem = set.has(closure_1);
        }
        if (hasItem) {
          set.add(name);
        }
      }
    }
  });
  return set;
}
export function getCheckpointCharacterReferencedAssets(checkpointCharacterLoadedTextureNames, arg1) {
  closure_1 = arg1;
  let obj = {};
  const item = closure_3.forEach((name) => {
    name = name.name;
    if (set.has(name)) {
      let url = CheckpointCharacterTextureUtils.getCheckpointCharacterTextureUrl(name, closure_1);
      const tmpResult = CheckpointCharacterTextureUtils;
    } else {
      url = CheckpointCharacterRiveTraits.CHECKPOINT_CHARACTER_BLANK_TEXTURE.url;
    }
    obj = { source: { uri: url } };
    obj[name.swapKey] = obj;
  });
  return obj;
}
