// discord_app/modules/checkpoint/native/useCheckpointPreloader.tsx
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef5276 from "../../../../discord_assets/assets/mana/rive/native/CheckpointFriends.riv.js";
import _modDef5280 from "../../../../discord_assets/assets/mana/rive/native/CheckpointKnickKnacks.riv.js";
import _modDef5282 from "../../../../discord_assets/assets/mana/rive/native/CheckpointNumbers.riv.js";
import _modDef6224 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-purple.png.js";
import _modDef6227 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-cyan.png.js";
import _modDef6228 from "../../../../discord_assets/assets/checkpoint/2026/clyde_small.png.js";
import _modDef6230 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-pink.png.js";
import _modDef6233 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-green.png.js";
import _modDef6236 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-red.png.js";
import _modDef6239 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-yellow.png.js";
import _modDef13692 from "../../../../discord_assets/assets/checkpoint/click-next.mp3.js";
import _modDef13694 from "../../../../discord_assets/assets/checkpoint/2026/checkpoint-bgm.mp3.js";
import _modDef13872 from "../../../../discord_assets/assets/checkpoint/mobile_background_texture.png.js";
import _modDef13883 from "../../../../discord_assets/assets/checkpoint/voice-globe.png.js";
import _modDef13887 from "../../../../discord_assets/assets/checkpoint/2026/voice_bg_400w.png.js";
import _modDef13893 from "../../../../discord_assets/assets/checkpoint/2026/messages_loop_400w.png.js";
import _modDef13909 from "../../../../discord_assets/assets/checkpoint/2026/gaming_loop_400w.png.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const useEffect = fn(19).useEffect;
const CheckpointFetchStates = fn(13667).CheckpointFetchStates;
const items = [
  _modDef5276,
  _modDef5280,
  _modDef5282,
  _modDef13872,
  _modDef6228,
  _modDef13893,
  _modDef13887,
  _modDef13883,
  _modDef13909,
  _modDef6224,
  _modDef6227,
  _modDef6230,
  _modDef6233,
  _modDef6236,
  _modDef6239,
  _modDef13694,
  _modDef13692,
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
