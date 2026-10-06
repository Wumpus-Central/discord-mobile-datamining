// discord_app/modules/voice_panel/native/VoicePanelContainer.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import _slicedToArray from "../../../../_runtime/metro/04498__slicedToArray.js";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import VoicePanelUIDefault from "VoicePanelUI.tsx";
import VoicePanelControllerDefault from "VoicePanelController.tsx";
import react from "../../../../_runtime/00019_react.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import VoicePanelStore from "../VoicePanelStore.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

function getChannelKey(arg0) {
  return arg0;
}
function renderVoicePanel(arg0, channelId, transitionState, transitionCleanUp) {
  return (
    <closure_7
      key={channelId}
      channelId={channelId}
      transitionState={transitionState}
      transitionCleanUp={transitionCleanUp}
    />
  );
}
const jsx = Fragment.jsx;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      let first;
      let tmp6;
      let tmp8;
      _require = channelId;
      const obj = require("react");
      const cResult = obj.c(7);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channelId.channelId) {
        const fn = function c() {
          const channel = ChannelStore.getChannel(channelId.channelId);
          let guild_id;
          if (channel != null) {
            guild_id = channel.guild_id;
          }
          return guild_id;
        };
        cResult[1] = channelId.channelId;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp11 = jsx(VoicePanelUIDefault, {});
        cResult[3] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] === stateFromStores) {
        let tmp12;
        if (cResult[5] === channelId) {
          tmp12 = cResult[6];
        }
        return tmp12;
      }
      VoicePanelControllerDefault;
      const merged = Object.assign(channelId);
      const tmp15 = <tmp13 guildId={stateFromStores}>{tmp8}</tmp13>;
      cResult[4] = stateFromStores;
      cResult[5] = channelId;
      cResult[6] = tmp15;
      tmp12 = tmp15;
    }
  : (arg0) => {
      let channelId;
      _require = arg0;
      const items = [ChannelStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => {
        const channel = ChannelStore.getChannel(channelId.channelId);
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        return guild_id;
      });
      VoicePanelControllerDefault;
      const merged = Object.assign(arg0);
      return <tmp2 guildId={stateFromStores}>{react.useMemo(() => jsx(VoicePanelUIDefault, {}), [])}</tmp2>;
    };
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        let tmp6;
        const obj = react2;
        const cResult = obj.c(3);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function n(channels) {
            return Array.from(channels.channels);
          };
          cResult[0] = fn;
          first = fn;
        } else {
          first = cResult[0];
        }
        const tmp5 = VoicePanelStore(first, _slicedToArray.shallow);
        if (cResult[1] !== tmp5) {
          const tmp10 = jsx(native.TransitionGroup, {
            items: tmp5,
            getItemKey: getChannelKey,
            renderItem: renderVoicePanel,
          });
          cResult[1] = tmp5;
          cResult[2] = tmp10;
          tmp6 = tmp10;
        } else {
          tmp6 = cResult[2];
        }
        return tmp6;
      }
    : () =>
        jsx(native.TransitionGroup, {
          items: VoicePanelStore((channels) => Array.from(channels.channels), _slicedToArray.shallow),
          getItemKey: getChannelKey,
          renderItem: renderVoicePanel,
        }),
);
const result = size.fileFinishedImporting("modules/voice_panel/native/VoicePanelContainer.tsx");

export default memoResult;
