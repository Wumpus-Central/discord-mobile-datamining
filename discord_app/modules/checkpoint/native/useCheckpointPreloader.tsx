// discord_app/modules/checkpoint/native/useCheckpointPreloader.tsx
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef5391 from "../../../../discord_assets/assets/mana/rive/native/CheckpointFriends.riv.js";
import _modDef5395 from "../../../../discord_assets/assets/mana/rive/native/CheckpointKnickKnacks.riv.js";
import _modDef5397 from "../../../../discord_assets/assets/mana/rive/native/CheckpointNumbers.riv.js";
import _modDef6339 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-purple.png.js";
import _modDef6342 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-cyan.png.js";
import _modDef6343 from "../../../../discord_assets/assets/checkpoint/2026/clyde_small.png.js";
import _modDef6344 from "../../../../discord_assets/assets/checkpoint/2026/clyde_small_static.png.js";
import _modDef6345 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-pink.png.js";
import _modDef6348 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-green.png.js";
import _modDef6351 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-red.png.js";
import _modDef6354 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-yellow.png.js";
import _modDef14154 from "../../../../discord_assets/assets/checkpoint/2026/checkpoint-bgm.mp3.js";
import _modDef14158 from "../../../../discord_assets/assets/checkpoint/mobile_background_texture.png.js";
import _modDef14375 from "../../../../discord_assets/assets/checkpoint/voice-globe.png.js";
import _modDef14376 from "../../../../discord_assets/assets/checkpoint/voice-globe-static.png.js";
import _modDef14379 from "../../../../discord_assets/assets/checkpoint/2026/voice_bg_400w.png.js";
import _modDef14380 from "../../../../discord_assets/assets/checkpoint/2026/voice_bg_halfres_static.png.js";
import _modDef14386 from "../../../../discord_assets/assets/checkpoint/2026/messages_loop_400w.png.js";
import _modDef14387 from "../../../../discord_assets/assets/checkpoint/2026/messages_loop_static.png.js";
import _modDef14396 from "../../../../discord_assets/assets/checkpoint/2026/sfx/selected.mp3.js";
import _modDef14404 from "../../../../discord_assets/assets/checkpoint/2026/gaming_loop_400w.png.js";
import _modDef14405 from "../../../../discord_assets/assets/checkpoint/2026/gaming_loop_static.png.js";
import _modDef14429 from "../../../../discord_assets/assets/checkpoint/2026/sfx/next.mp3.js";
import _modDef14431 from "../../../../discord_assets/assets/checkpoint/2026/sfx/back.mp3.js";
import _modDef14434 from "../../../../discord_assets/assets/checkpoint/2026/sfx/save.mp3.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../CheckpointStore.tsx";

const require = globalThis.__r;

require = fn;
const CheckpointFetchStates = fn(14146).CheckpointFetchStates;
let items = [
  _modDef5391,
  _modDef5395,
  _modDef5397,
  _modDef14158,
  _modDef6339,
  _modDef6342,
  _modDef6345,
  _modDef6348,
  _modDef6351,
  _modDef6354,
  _modDef14154,
  _modDef14431,
  _modDef14429,
  _modDef14434,
  _modDef14396,
  ...fn(14185).CHECKPOINT_ROUTE_SOUNDS,
];
const items1 = [_modDef6343, _modDef14386, _modDef14379, _modDef14375, _modDef14404];
const items2 = [_modDef6344, _modDef14387, _modDef14380, _modDef14376, _modDef14405];
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
