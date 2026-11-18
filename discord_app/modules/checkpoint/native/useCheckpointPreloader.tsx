// discord_app/modules/checkpoint/native/useCheckpointPreloader.tsx
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef4961 from "../../../../discord_assets/assets/mana/rive/native/CheckpointFriends.riv.js";
import _modDef4965 from "../../../../discord_assets/assets/mana/rive/native/CheckpointKnickKnacks.riv.js";
import _modDef4967 from "../../../../discord_assets/assets/mana/rive/native/CheckpointNumbers.riv.js";
import _modDef5902 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-purple.png.js";
import _modDef5905 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-cyan.png.js";
import _modDef5906 from "../../../../discord_assets/assets/checkpoint/2026/clyde_small.png.js";
import _modDef5907 from "../../../../discord_assets/assets/checkpoint/2026/clyde_small_static.png.js";
import _modDef5908 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-pink.png.js";
import _modDef5911 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-green.png.js";
import _modDef5914 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-red.png.js";
import _modDef5917 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-yellow.png.js";
import _modDef12427 from "../../../../discord_assets/assets/checkpoint/2026/checkpoint-bgm.mp3.js";
import _modDef12432 from "../../../../discord_assets/assets/checkpoint/mobile_background_texture.png.js";
import _modDef12465 from "../../../../discord_assets/assets/checkpoint/2026/sfx/mobile-appear.mp3.js";
import _modDef12650 from "../../../../discord_assets/assets/checkpoint/voice-globe.png.js";
import _modDef12651 from "../../../../discord_assets/assets/checkpoint/voice-globe-static.png.js";
import _modDef12657 from "../../../../discord_assets/assets/checkpoint/2026/sfx/next.mp3.js";
import _modDef12660 from "../../../../discord_assets/assets/checkpoint/2026/sfx/back.mp3.js";
import _modDef12665 from "../../../../discord_assets/assets/checkpoint/2026/sfx/save.mp3.js";
import _modDef12672 from "../../../../discord_assets/assets/checkpoint/2026/voice_bg_400w.png.js";
import _modDef12673 from "../../../../discord_assets/assets/checkpoint/2026/voice_bg_halfres_static.png.js";
import _modDef12679 from "../../../../discord_assets/assets/checkpoint/2026/messages_loop_400w.png.js";
import _modDef12680 from "../../../../discord_assets/assets/checkpoint/2026/messages_loop_static.png.js";
import _modDef12689 from "../../../../discord_assets/assets/checkpoint/2026/sfx/selected.mp3.js";
import _modDef12696 from "../../../../discord_assets/assets/checkpoint/2026/gaming_loop_400w.png.js";
import _modDef12697 from "../../../../discord_assets/assets/checkpoint/2026/gaming_loop_static.png.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../CheckpointStore.tsx";

const require = globalThis.__r;

require = fn;
const CheckpointFetchStates = fn(12417).CheckpointFetchStates;
let items = [
  _modDef4961,
  _modDef4965,
  _modDef4967,
  _modDef12432,
  _modDef5902,
  _modDef5905,
  _modDef5908,
  _modDef5911,
  _modDef5914,
  _modDef5917,
  _modDef12427,
  _modDef12660,
  _modDef12465,
  _modDef12657,
  _modDef12665,
  _modDef12689,
  ...fn(12456).CHECKPOINT_ROUTE_SOUNDS,
];
const items1 = [_modDef5906, _modDef12679, _modDef12672, _modDef12650, _modDef12696];
const items2 = [_modDef5907, _modDef12680, _modDef12673, _modDef12651, _modDef12697];
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
