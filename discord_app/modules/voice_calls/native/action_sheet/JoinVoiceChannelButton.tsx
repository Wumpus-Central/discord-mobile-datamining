// discord_app/modules/voice_calls/native/action_sheet/JoinVoiceChannelButton.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import SelectedChannelActionCreatorsDefault from "../../../../actions/SelectedChannelActionCreators.tsx";
import useIsVoiceChannelFullDefault from "../../useIsVoiceChannelFull.tsx";
import react from "../../../../../_runtime/00019_react.js";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let channel;

const View = react_native.View;
const Permissions = Constants.Permissions;
const jsx = Fragment.jsx;
let closure_9 = createStyles.createStyles({ container: { flexDirection: "row" } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let first;
      let flag;
      let tmp10;
      let tmp16;
      let tmp8;
      let obj = channel(576);
      const cResult = obj.c(18);
      channel = channel.channel;
      const style = channel.style;
      const tmp4 = closure_9();
      const tmp5 = useIsVoiceChannelFullDefault(channel);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== channel) {
        const fn = function _() {
          return !PermissionStore.can(Permissions.CONNECT, channel);
        };
        cResult[1] = channel;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = channel(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(channel(1126).t.eIi3Om);
        cResult[3] = stringResult;
        tmp10 = stringResult;
      } else {
        tmp10 = cResult[3];
      }
      if (tmp5) {
        let tmp14;
        const _Symbol2 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult1 = intl3.string(channel(1126).t.rZfiNq);
          cResult[4] = stringResult1;
          tmp14 = stringResult1;
        } else {
          tmp14 = cResult[4];
        }
        flag = true;
        tmp10 = tmp14;
      } else {
        flag = false;
        if (stateFromStores) {
          let tmp12;
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = tmp(1126).intl;
            const stringResult2 = intl2.string(channel(1126).t.TVBCKZ);
            cResult[5] = stringResult2;
            tmp12 = stringResult2;
          } else {
            tmp12 = cResult[5];
          }
          flag = true;
          tmp10 = tmp12;
        }
      }
      if (cResult[6] !== channel.id) {
        const fn2 = function x() {
          const obj = KeyboardManagerUtilsAll;
          const result = obj.dismissGlobalKeyboard();
          const obj2 = SelectedChannelActionCreatorsDefault;
          const voiceChannel = obj2.selectVoiceChannel(channel.id);
        };
        cResult[6] = channel.id;
        cResult[7] = fn2;
        tmp16 = fn2;
      } else {
        tmp16 = cResult[7];
      }
      if (cResult[8] === style) {
        let tmp17;
        if (cResult[9] === tmp4.container) {
          tmp17 = cResult[10];
        }
        if (cResult[11] === tmp10) {
          if (cResult[12] === flag) {
            let tmp18;
            if (cResult[13] === tmp16) {
              tmp18 = cResult[14];
            }
            if (cResult[15] === tmp17) {
              let tmp21;
              if (cResult[16] === tmp18) {
                tmp21 = cResult[17];
              }
              return tmp21;
            }
            const tmp24 = <View style={tmp17}>{tmp18}</View>;
            cResult[15] = tmp17;
            cResult[16] = tmp18;
            cResult[17] = tmp24;
            tmp21 = tmp24;
          }
        }
        const tmp20 = jsx(channel(5601).Button, { disabled: flag, text: tmp10, onPress: tmp16 });
        cResult[11] = tmp10;
        cResult[12] = flag;
        cResult[13] = tmp16;
        cResult[14] = tmp20;
        tmp18 = tmp20;
      }
      const items1 = [tmp4.container, style];
      cResult[8] = style;
      cResult[9] = tmp4.container;
      cResult[10] = items1;
      tmp17 = items1;
    }
  : (channel) => {
      channel = channel.channel;
      const style = channel.style;
      const tmp = closure_9();
      const tmp3 = useIsVoiceChannelFullDefault(channel);
      let obj = channel(504);
      const items = [PermissionStore];
      const stateFromStores = obj.useStateFromStores(items, () => !PermissionStore.can(Permissions.CONNECT, channel));
      const intl = channel(1126).intl;
      intl.string(channel(1126).t.eIi3Om);
      if (tmp3) {
        const intl3 = tmp4(1126).intl;
        intl3.string(tmp4(1126).t.rZfiNq);
      } else if (stateFromStores) {
        const intl2 = tmp4(1126).intl;
        intl2.string(tmp4(1126).t.TVBCKZ);
      }
      const items1 = [channel.id];
      const items2 = [tmp.container, style];
      const callback = react.useCallback(() => {
        const obj = KeyboardManagerUtilsAll;
        const result = obj.dismissGlobalKeyboard();
        const obj2 = SelectedChannelActionCreatorsDefault;
        const voiceChannel = obj2.selectVoiceChannel(channel.id);
      }, items1);
      return <View style={items2}>{null}</View>;
    };
let result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/JoinVoiceChannelButton.tsx");

export default tmp2;
