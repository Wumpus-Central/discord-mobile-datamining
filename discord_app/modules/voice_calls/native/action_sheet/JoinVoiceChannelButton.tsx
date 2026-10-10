// discord_app/modules/voice_calls/native/action_sheet/JoinVoiceChannelButton.tsx
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import SelectedChannelActionCreatorsDefault from "../../../../actions/SelectedChannelActionCreators.tsx";
import useIsVoiceChannelFullDefault from "../../useIsVoiceChannelFull.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import PermissionStore from "../../../../stores/PermissionStore.tsx";

const require = fn;
const View = fn(17).View;
const Permissions = fn(1085).Permissions;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_9 = createStyles.createStyles({ container: { flexDirection: "row" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/JoinVoiceChannelButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function JoinVoiceChannelButton(channel) {
      const cResult = channel(576).c(18);
      channel = channel.channel;
      const style = channel.style;
      const tmp4 = closure_9();
      let obj = channel(576);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function h() {
          return !PermissionStore.can(Permissions.CONNECT, channel);
        };
        cResult[1] = channel;
        cResult[2] = fn;
        let tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmp5 = useIsVoiceChannelFullDefault(channel);
      const stateFromStores = channel(504).useStateFromStores(first, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t.eIi3Om);
        cResult[3] = stringResult;
        let tmp10 = stringResult;
      } else {
        tmp10 = cResult[3];
      }
      if (tmp5) {
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult1 = intl3.string(tmp(1126).t.rZfiNq);
          cResult[4] = stringResult1;
        }
      } else {
        let flag = false;
        if (stateFromStores) {
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult2 = intl2.string(tmp(1126).t.TVBCKZ);
            cResult[5] = stringResult2;
            let tmp12 = stringResult2;
          } else {
            tmp12 = cResult[5];
          }
          flag = true;
          tmp10 = tmp12;
        }
        if (cResult[6] !== channel.id) {
          class N {
            constructor() {
              obj = closure_2(closure_3[11]);
              result = obj.dismissGlobalKeyboard();
              obj2 = closure_1(closure_3[12]);
              voiceChannel = obj2.selectVoiceChannel(channel.id);
              return;
            }
          }
          cResult[6] = channel.id;
          cResult[7] = N;
        } else {
          class N {
            constructor() {
              obj = closure_2(closure_3[11]);
              result = obj.dismissGlobalKeyboard();
              obj2 = closure_1(closure_3[12]);
              voiceChannel = obj2.selectVoiceChannel(channel.id);
              return;
            }
          }
        }
        if (cResult[8] === style) {
          class N {
            constructor() {
              obj = closure_2(closure_3[11]);
              result = obj.dismissGlobalKeyboard();
              obj2 = closure_1(closure_3[12]);
              voiceChannel = obj2.selectVoiceChannel(channel.id);
              return;
            }
          }
          if (cResult[11] === tmp10) {
            class N {
              constructor() {
                obj = closure_2(closure_3[11]);
                result = obj.dismissGlobalKeyboard();
                obj2 = closure_1(closure_3[12]);
                voiceChannel = obj2.selectVoiceChannel(channel.id);
                return;
              }
            }
          }
          const obj2 = { disabled: flag, text: tmp10, onPress: N };
          const tmp21 = jsx(tmp(5379).Button, { disabled: flag, text: tmp10, onPress: N });
          cResult[11] = tmp10;
          cResult[12] = flag;
          cResult[13] = N;
          cResult[14] = tmp21;
        }
        const items1 = [tmp4.container, style];
        cResult[8] = style;
        cResult[9] = tmp4.container;
        cResult[10] = items1;
      }
      const tmpResult = channel(504);
    }
  : function JoinVoiceChannelButton(channel) {
      channel = channel.channel;
      const tmp = closure_9();
      const tmp3 = useIsVoiceChannelFullDefault(channel);
      const items = [PermissionStore];
      const stateFromStores = channel(504).useStateFromStores(
        items,
        () => !PermissionStore.can(Permissions.CONNECT, channel),
      );
      const intl = channel(1126).intl;
      let stringResult = intl.string(channel(1126).t.eIi3Om);
      if (tmp3) {
        const intl3 = tmp4(1126).intl;
        stringResult = intl3.string(tmp4(1126).t.rZfiNq);
        let flag = true;
      } else {
        flag = false;
        if (stateFromStores) {
          const intl2 = tmp4(1126).intl;
          stringResult = intl2.string(tmp4(1126).t.TVBCKZ);
          flag = true;
        }
      }
      const items1 = [channel.id];
      const obj2 = { style: null, children: null };
      const items2 = [tmp.container, channel.style];
      obj2.style = items2;
      const callback = noop.useCallback(() => {
        const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
        const voiceChannel = SelectedChannelActionCreatorsDefault.selectVoiceChannel(channel.id);
      }, items1);
      obj2.children = jsx(channel(5379).Button, { disabled: flag, text: stringResult, onPress: callback });
      return <View style={null}>{null}</View>;
    };
