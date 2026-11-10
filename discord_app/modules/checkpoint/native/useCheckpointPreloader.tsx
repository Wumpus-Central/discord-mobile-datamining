// discord_app/modules/checkpoint/native/useCheckpointPreloader.tsx
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef5278 from "../../../../discord_assets/assets/mana/rive/native/CheckpointFriends.riv.js";
import _modDef5282 from "../../../../discord_assets/assets/mana/rive/native/CheckpointKnickKnacks.riv.js";
import _modDef5284 from "../../../../discord_assets/assets/mana/rive/native/CheckpointNumbers.riv.js";
import _modDef6226 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-purple.png.js";
import _modDef6229 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-cyan.png.js";
import _modDef6230 from "../../../../discord_assets/assets/checkpoint/2026/clyde_small.png.js";
import _modDef6231 from "../../../../discord_assets/assets/checkpoint/2026/clyde_small_static.png.js";
import _modDef6232 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-pink.png.js";
import _modDef6235 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-green.png.js";
import _modDef6238 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-red.png.js";
import _modDef6241 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-yellow.png.js";
import _modDef13714 from "../../../../discord_assets/assets/checkpoint/2026/checkpoint-bgm.mp3.js";
import _modDef13892 from "../../../../discord_assets/assets/checkpoint/mobile_background_texture.png.js";
import _modDef13903 from "../../../../discord_assets/assets/checkpoint/voice-globe.png.js";
import _modDef13904 from "../../../../discord_assets/assets/checkpoint/voice-globe-static.png.js";
import _modDef13907 from "../../../../discord_assets/assets/checkpoint/2026/voice_bg_400w.png.js";
import _modDef13908 from "../../../../discord_assets/assets/checkpoint/2026/voice_bg_halfres_static.png.js";
import _modDef13913 from "../../../../discord_assets/assets/checkpoint/2026/messages_loop_400w.png.js";
import _modDef13914 from "../../../../discord_assets/assets/checkpoint/2026/messages_loop_static.png.js";
import _modDef13923 from "../../../../discord_assets/assets/checkpoint/2026/sfx/selected.mp3.js";
import _modDef13931 from "../../../../discord_assets/assets/checkpoint/2026/gaming_loop_400w.png.js";
import _modDef13932 from "../../../../discord_assets/assets/checkpoint/2026/gaming_loop_static.png.js";
import _modDef13956 from "../../../../discord_assets/assets/checkpoint/2026/sfx/save.mp3.js";
import _modDef13957 from "../../../../discord_assets/assets/checkpoint/2026/sfx/next.mp3.js";
import _modDef13958 from "../../../../discord_assets/assets/checkpoint/2026/sfx/back.mp3.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../CheckpointStore.tsx";

const require = globalThis.__r;

require = fn;
const CheckpointFetchStates = fn(13681).CheckpointFetchStates;
let items = [
  _modDef5278,
  _modDef5282,
  _modDef5284,
  _modDef13892,
  _modDef6226,
  _modDef6229,
  _modDef6232,
  _modDef6235,
  _modDef6238,
  _modDef6241,
  _modDef13714,
  _modDef13958,
  _modDef13957,
  _modDef13956,
  _modDef13923,
  ...fn(13707).CHECKPOINT_ROUTE_SOUNDS,
];
const items1 = [_modDef6230, _modDef13913, _modDef13907, _modDef13903, _modDef13931];
const items2 = [_modDef6231, _modDef13914, _modDef13908, _modDef13904, _modDef13932];
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointPreloader.tsx");

export default function useCheckpointPreloader() {
  _require = noop.useRef(0);
  dependencyMap = noop.useRef(true);
  const maybeFetchCheckpointData = require("useMaybeFetchCheckpointData").useMaybeFetchCheckpointData();
  _slicedToArray = tmp2;
  const obj2 = require("useMaybeFetchCheckpointData");
  [tmp4, noop] = noop.useState(false);
  items = [
    maybeFetchCheckpointData === CheckpointFetchStates.SUCCESS ||
      maybeFetchCheckpointData === CheckpointFetchStates.ERROR,
  ];
  const effect = noop.useEffect(() => {
    function handleSettled() {
      if (handleSettled.current) {
        items.current = items.current + 1;
        if (items.current === items.length) {
          noop(true);
        }
      }
    }
    if (closure_2) {
      const tmp2 = compactAssets.compactAssets ? items2 : items1;
      items = [];
      HermesBuiltin.arraySpread(tmp2, HermesBuiltin.arraySpread(closure_1_6, 0));
      const item = items.forEach((url) => {
        const HTTP = HTTPUtils.HTTP;
        value = HTTP.get({ url, binary: true, rejectWithError: true });
        return value.then(handleSettled, handleSettled);
      });
    }
  }, items);
  const effect1 = noop.useEffect(
    () => () => {
      closure_1_1.current = false;
    },
    [],
  );
  return tmp4;
}
