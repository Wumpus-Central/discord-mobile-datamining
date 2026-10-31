// discord_app/modules/checkpoint/native/useCheckpointPreloader.tsx
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef5160 from "../../../../discord_assets/assets/mana/rive/native/CheckpointFriends.riv.js";
import _modDef5164 from "../../../../discord_assets/assets/mana/rive/native/CheckpointKnickKnacks.riv.js";
import _modDef5166 from "../../../../discord_assets/assets/mana/rive/native/CheckpointNumbers.riv.js";
import _modDef6092 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-purple.png.js";
import _modDef6095 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-cyan.png.js";
import _modDef6096 from "../../../../discord_assets/assets/checkpoint/2026/clyde_small.png.js";
import _modDef6098 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-pink.png.js";
import _modDef6101 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-green.png.js";
import _modDef6104 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-red.png.js";
import _modDef6107 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-yellow.png.js";
import _modDef13441 from "../../../../discord_assets/assets/checkpoint/click-next.mp3.js";
import _modDef13443 from "../../../../discord_assets/assets/checkpoint/checkpoint-bgm.mp3.js";
import _modDef13619 from "../../../../discord_assets/assets/checkpoint/mobile_background_texture.png.js";
import _modDef13630 from "../../../../discord_assets/assets/checkpoint/voice-globe.png.js";
import _modDef13634 from "../../../../discord_assets/assets/checkpoint/2026/voice_bg_halfres.png.js";
import _modDef13640 from "../../../../discord_assets/assets/checkpoint/2026/messages_loop.png.js";
import _modDef13665 from "../../../../discord_assets/assets/checkpoint/2026/gaming_loop.png.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const useEffect = fn(19).useEffect;
const CheckpointFetchStates = fn(13421).CheckpointFetchStates;
const items = [
  _modDef5160,
  _modDef5164,
  _modDef5166,
  _modDef13619,
  _modDef6096,
  _modDef13640,
  _modDef13634,
  _modDef13630,
  _modDef13665,
  _modDef6092,
  _modDef6095,
  _modDef6098,
  _modDef6101,
  _modDef6104,
  _modDef6107,
  _modDef13443,
  _modDef13441,
];
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointPreloader.tsx");

export default function useCheckpointPreloader() {
  _require = noop.useRef(0);
  dependencyMap = noop.useRef(true);
  const maybeFetchCheckpointData = require("useMaybeFetchCheckpointData").useMaybeFetchCheckpointData();
  const obj2 = require("useMaybeFetchCheckpointData");
  const tmp2 =
    maybeFetchCheckpointData === CheckpointFetchStates.SUCCESS ||
    maybeFetchCheckpointData === CheckpointFetchStates.ERROR;
  [tmp4, _slicedToArray] = noop.useState(false);
  useEffect(() => {
    function handleSettled() {
      if (ref.current) {
        handleSettled.current = handleSettled.current + 1;
        if (handleSettled.current === items.length) {
          closure_1_2(true);
        }
      }
    }
    const item = items.forEach((url) => {
      const HTTP = HTTPUtils.HTTP;
      value = HTTP.get({ url, binary: true, rejectWithError: true });
      return value.then(handleSettled, handleSettled);
    });
  }, []);
  useEffect(
    () => () => {
      closure_1_1.current = false;
    },
    [],
  );
  return tmp4;
}
