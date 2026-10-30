// discord_app/modules/checkpoint/native/useCheckpointPreloader.tsx
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef5155 from "../../../../discord_assets/assets/mana/rive/native/CheckpointFriends.riv.js";
import _modDef5159 from "../../../../discord_assets/assets/mana/rive/native/CheckpointKnickKnacks.riv.js";
import _modDef5161 from "../../../../discord_assets/assets/mana/rive/native/CheckpointNumbers.riv.js";
import _modDef6087 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-purple.png.js";
import _modDef6090 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-cyan.png.js";
import _modDef6091 from "../../../../discord_assets/assets/checkpoint/2026/clyde_small.png.js";
import _modDef6093 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-pink.png.js";
import _modDef6096 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-green.png.js";
import _modDef6099 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-red.png.js";
import _modDef6102 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-yellow.png.js";
import _modDef13404 from "../../../../discord_assets/assets/checkpoint/click-next.mp3.js";
import _modDef13406 from "../../../../discord_assets/assets/checkpoint/checkpoint-bgm.mp3.js";
import _modDef13582 from "../../../../discord_assets/assets/checkpoint/mobile_background_texture.png.js";
import _modDef13593 from "../../../../discord_assets/assets/checkpoint/voice-globe.png.js";
import _modDef13597 from "../../../../discord_assets/assets/checkpoint/2026/voice_bg_halfres.png.js";
import _modDef13603 from "../../../../discord_assets/assets/checkpoint/2026/messages_loop.png.js";
import _modDef13630 from "../../../../discord_assets/assets/checkpoint/2026/gaming_loop.png.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const useEffect = fn(19).useEffect;
const CheckpointFetchStates = fn(13386).CheckpointFetchStates;
const items = [
  _modDef5155,
  _modDef5159,
  _modDef5161,
  _modDef13582,
  _modDef6091,
  _modDef13603,
  _modDef13597,
  _modDef13593,
  _modDef13630,
  _modDef6087,
  _modDef6090,
  _modDef6093,
  _modDef6096,
  _modDef6099,
  _modDef6102,
  _modDef13406,
  _modDef13404,
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
