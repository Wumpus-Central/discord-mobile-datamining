// discord_app/modules/checkpoint/native/useCheckpointPreloader.tsx
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef5149 from "../../../../discord_assets/assets/mana/rive/native/CheckpointFriends.riv.js";
import _modDef5153 from "../../../../discord_assets/assets/mana/rive/native/CheckpointKnickKnacks.riv.js";
import _modDef5155 from "../../../../discord_assets/assets/mana/rive/native/CheckpointNumbers.riv.js";
import _modDef6080 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-purple.png.js";
import _modDef6083 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-cyan.png.js";
import _modDef6084 from "../../../../discord_assets/assets/checkpoint/2026/clyde_small.png.js";
import _modDef6086 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-pink.png.js";
import _modDef6089 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-green.png.js";
import _modDef6092 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-red.png.js";
import _modDef6095 from "../../../../discord_assets/assets/checkpoint/2026/recap-card-background-yellow.png.js";
import _modDef13254 from "../../../../discord_assets/assets/checkpoint/click-next.mp3.js";
import _modDef13256 from "../../../../discord_assets/assets/checkpoint/checkpoint-bgm.mp3.js";
import _modDef13432 from "../../../../discord_assets/assets/checkpoint/mobile_background_texture.png.js";
import _modDef13443 from "../../../../discord_assets/assets/checkpoint/voice-globe.png.js";
import _modDef13447 from "../../../../discord_assets/assets/checkpoint/2026/voice_bg_halfres.png.js";
import _modDef13453 from "../../../../discord_assets/assets/checkpoint/2026/messages_loop.png.js";
import _modDef13480 from "../../../../discord_assets/assets/checkpoint/2026/gaming_loop.png.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const useEffect = fn(19).useEffect;
const CheckpointFetchStates = fn(13236).CheckpointFetchStates;
let items = [
  _modDef5149,
  _modDef5153,
  _modDef5155,
  _modDef13432,
  _modDef6084,
  _modDef13453,
  _modDef13447,
  _modDef13443,
  _modDef13480,
  _modDef6080,
  _modDef6083,
  _modDef6086,
  _modDef6089,
  _modDef6092,
  _modDef6095,
  _modDef13256,
  _modDef13254,
];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointPreloader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useCheckpointPreloader() {
      const cResult = require("c").c(4);
      _require = noop.useRef(0);
      dependencyMap = noop.useRef(true);
      const obj = require("c");
      const maybeFetchCheckpointData = require("useMaybeFetchCheckpointData").useMaybeFetchCheckpointData();
      const obj3 = require("useMaybeFetchCheckpointData");
      const tmp3 =
        maybeFetchCheckpointData === CheckpointFetchStates.SUCCESS ||
        maybeFetchCheckpointData === CheckpointFetchStates.ERROR;
      [tmp5, _slicedToArray] = noop.useState(false);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l() {
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
        };
        items = [];
        cResult[0] = fn;
        cResult[1] = items;
        tmp6 = fn;
        tmp7 = items;
      } else {
        [tmp6, tmp7] = cResult;
      }
      useEffect(tmp6, tmp7);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function s() {
          return () => {
            closure_1_1.current = false;
          };
        };
        const items1 = [];
        cResult[2] = fn2;
        cResult[3] = items1;
        let tmp11 = items1;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      useEffect(tmp10, tmp11);
      return tmp5;
    }
  : function useCheckpointPreloader() {
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
    };
