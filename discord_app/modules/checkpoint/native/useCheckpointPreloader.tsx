// discord_app/modules/checkpoint/native/useCheckpointPreloader.tsx
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef5284 from "../../../../discord_assets/assets/mana/rive/native/CheckpointFriends.riv.js";
import _modDef5288 from "../../../../discord_assets/assets/mana/rive/native/CheckpointKnickKnacks.riv.js";
import _modDef5290 from "../../../../discord_assets/assets/mana/rive/native/CheckpointNumbers.riv.js";
import _modDef6227 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-purple.png.js";
import _modDef6230 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-cyan.png.js";
import _modDef6231 from "../../../../discord_assets/assets/checkpoint/2026/clyde_small.png.js";
import _modDef6233 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-pink.png.js";
import _modDef6236 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-green.png.js";
import _modDef6239 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-red.png.js";
import _modDef6242 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-yellow.png.js";
import _modDef13682 from "../../../../discord_assets/assets/checkpoint/click-next.mp3.js";
import _modDef13684 from "../../../../discord_assets/assets/checkpoint/2026/checkpoint-bgm.mp3.js";
import _modDef13861 from "../../../../discord_assets/assets/checkpoint/mobile_background_texture.png.js";
import _modDef13872 from "../../../../discord_assets/assets/checkpoint/voice-globe.png.js";
import _modDef13876 from "../../../../discord_assets/assets/checkpoint/2026/voice_bg_halfres.png.js";
import _modDef13882 from "../../../../discord_assets/assets/checkpoint/2026/messages_loop.png.js";
import _modDef13897 from "../../../../discord_assets/assets/checkpoint/2026/gaming_loop.png.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const useEffect = fn(19).useEffect;
const CheckpointFetchStates = fn(13657).CheckpointFetchStates;
const items = [
  _modDef5284,
  _modDef5288,
  _modDef5290,
  _modDef13861,
  _modDef6231,
  _modDef13882,
  _modDef13876,
  _modDef13872,
  _modDef13897,
  _modDef6227,
  _modDef6230,
  _modDef6233,
  _modDef6236,
  _modDef6239,
  _modDef6242,
  _modDef13684,
  _modDef13682,
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
