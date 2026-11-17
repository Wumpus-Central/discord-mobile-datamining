// discord_app/modules/checkpoint/native/useCheckpointPreloader.tsx
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef5448 from "../../../../discord_assets/assets/mana/rive/native/CheckpointFriends.riv.js";
import _modDef5452 from "../../../../discord_assets/assets/mana/rive/native/CheckpointKnickKnacks.riv.js";
import _modDef5454 from "../../../../discord_assets/assets/mana/rive/native/CheckpointNumbers.riv.js";
import _modDef6400 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-purple.png.js";
import _modDef6403 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-cyan.png.js";
import _modDef6404 from "../../../../discord_assets/assets/checkpoint/2026/clyde_small.png.js";
import _modDef6405 from "../../../../discord_assets/assets/checkpoint/2026/clyde_small_static.png.js";
import _modDef6406 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-pink.png.js";
import _modDef6409 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-green.png.js";
import _modDef6412 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-red.png.js";
import _modDef6415 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-yellow.png.js";
import _modDef13129 from "../../../../discord_assets/assets/checkpoint/2026/checkpoint-bgm.mp3.js";
import _modDef13134 from "../../../../discord_assets/assets/checkpoint/mobile_background_texture.png.js";
import _modDef13346 from "../../../../discord_assets/assets/checkpoint/voice-globe.png.js";
import _modDef13347 from "../../../../discord_assets/assets/checkpoint/voice-globe-static.png.js";
import _modDef13354 from "../../../../discord_assets/assets/checkpoint/2026/sfx/next.mp3.js";
import _modDef13357 from "../../../../discord_assets/assets/checkpoint/2026/sfx/back.mp3.js";
import _modDef13362 from "../../../../discord_assets/assets/checkpoint/2026/sfx/save.mp3.js";
import _modDef13369 from "../../../../discord_assets/assets/checkpoint/2026/voice_bg_400w.png.js";
import _modDef13370 from "../../../../discord_assets/assets/checkpoint/2026/voice_bg_halfres_static.png.js";
import _modDef13376 from "../../../../discord_assets/assets/checkpoint/2026/messages_loop_400w.png.js";
import _modDef13377 from "../../../../discord_assets/assets/checkpoint/2026/messages_loop_static.png.js";
import _modDef13386 from "../../../../discord_assets/assets/checkpoint/2026/sfx/selected.mp3.js";
import _modDef13393 from "../../../../discord_assets/assets/checkpoint/2026/gaming_loop_400w.png.js";
import _modDef13394 from "../../../../discord_assets/assets/checkpoint/2026/gaming_loop_static.png.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../CheckpointStore.tsx";

const require = globalThis.__r;

require = fn;
const CheckpointFetchStates = fn(13119).CheckpointFetchStates;
let items = [
  _modDef5448,
  _modDef5452,
  _modDef5454,
  _modDef13134,
  _modDef6400,
  _modDef6403,
  _modDef6406,
  _modDef6409,
  _modDef6412,
  _modDef6415,
  _modDef13129,
  _modDef13357,
  _modDef13354,
  _modDef13362,
  _modDef13386,
  ...fn(13157).CHECKPOINT_ROUTE_SOUNDS,
];
const items1 = [_modDef6404, _modDef13376, _modDef13369, _modDef13346, _modDef13393];
const items2 = [_modDef6405, _modDef13377, _modDef13370, _modDef13347, _modDef13394];
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
