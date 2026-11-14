// discord_app/modules/checkpoint/native/useCheckpointPreloader.tsx
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef5454 from "../../../../discord_assets/assets/mana/rive/native/CheckpointFriends.riv.js";
import _modDef5458 from "../../../../discord_assets/assets/mana/rive/native/CheckpointKnickKnacks.riv.js";
import _modDef5460 from "../../../../discord_assets/assets/mana/rive/native/CheckpointNumbers.riv.js";
import _modDef6402 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-purple.png.js";
import _modDef6405 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-cyan.png.js";
import _modDef6406 from "../../../../discord_assets/assets/checkpoint/2026/clyde_small.png.js";
import _modDef6407 from "../../../../discord_assets/assets/checkpoint/2026/clyde_small_static.png.js";
import _modDef6408 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-pink.png.js";
import _modDef6411 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-green.png.js";
import _modDef6414 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-red.png.js";
import _modDef6417 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-yellow.png.js";
import _modDef14263 from "../../../../discord_assets/assets/checkpoint/2026/checkpoint-bgm.mp3.js";
import _modDef14268 from "../../../../discord_assets/assets/checkpoint/mobile_background_texture.png.js";
import _modDef14481 from "../../../../discord_assets/assets/checkpoint/voice-globe.png.js";
import _modDef14482 from "../../../../discord_assets/assets/checkpoint/voice-globe-static.png.js";
import _modDef14489 from "../../../../discord_assets/assets/checkpoint/2026/sfx/next.mp3.js";
import _modDef14492 from "../../../../discord_assets/assets/checkpoint/2026/sfx/back.mp3.js";
import _modDef14495 from "../../../../discord_assets/assets/checkpoint/2026/sfx/save.mp3.js";
import _modDef14502 from "../../../../discord_assets/assets/checkpoint/2026/voice_bg_400w.png.js";
import _modDef14503 from "../../../../discord_assets/assets/checkpoint/2026/voice_bg_halfres_static.png.js";
import _modDef14509 from "../../../../discord_assets/assets/checkpoint/2026/messages_loop_400w.png.js";
import _modDef14510 from "../../../../discord_assets/assets/checkpoint/2026/messages_loop_static.png.js";
import _modDef14518 from "../../../../discord_assets/assets/checkpoint/2026/sfx/selected.mp3.js";
import _modDef14525 from "../../../../discord_assets/assets/checkpoint/2026/gaming_loop_400w.png.js";
import _modDef14526 from "../../../../discord_assets/assets/checkpoint/2026/gaming_loop_static.png.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../CheckpointStore.tsx";

const require = globalThis.__r;

require = fn;
const CheckpointFetchStates = fn(14253).CheckpointFetchStates;
let items = [
  _modDef5454,
  _modDef5458,
  _modDef5460,
  _modDef14268,
  _modDef6402,
  _modDef6405,
  _modDef6408,
  _modDef6411,
  _modDef6414,
  _modDef6417,
  _modDef14263,
  _modDef14492,
  _modDef14489,
  _modDef14495,
  _modDef14518,
  ...fn(14292).CHECKPOINT_ROUTE_SOUNDS,
];
const items1 = [_modDef6406, _modDef14509, _modDef14502, _modDef14481, _modDef14525];
const items2 = [_modDef6407, _modDef14510, _modDef14503, _modDef14482, _modDef14526];
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
