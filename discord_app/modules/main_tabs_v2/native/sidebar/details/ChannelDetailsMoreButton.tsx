// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import PressableNavigatorButtonWrapperDefault from "../../shared_components/navigator/PressableNavigatorButtonWrapper.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/09290_AssetRegistry.js";
import openChannelLongPressActionSheet from "../../../../channel/native/openChannelLongPressActionSheet.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let channel;

const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let tmp4;
      let tmp = channel;
      const obj = channel(576);
      const cResult = obj.c(5);
      channel = channel.channel;
      if (cResult[0] !== channel) {
        const fn = function l() {
          let tmp = null != channel;
          if (tmp) {
            tmp = channel.isDM() || channel.isMultiUserDM();
            channel.isDM() || channel.isMultiUserDM();
          }
          if (tmp) {
            const obj2 = openChannelLongPressActionSheet;
            const result = obj2.openChannelLongPressActionSheet(channel.id);
          }
        };
        cResult[0] = channel;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      let tmp5 = null;
      if (null != channel) {
        if (channel.isDM()) {
          let tmp7;
          let tmp9;
          const _Symbol = Symbol;
          if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = tmp(1126).intl;
            const stringResult = intl.string(tmp(1126).t["UKOtz+"]);
            cResult[2] = stringResult;
            tmp7 = stringResult;
          } else {
            tmp7 = cResult[2];
          }
          if (cResult[3] !== tmp4) {
            ({ accessibilityLabel: tmp7, source: AssetRegistryDefault, onPress: tmp4 });
            PressableNavigatorButtonWrapperDefault;
            const HeaderIconButton = tmp(7498).HeaderIconButton;
            const tmp13 = <tmp12>{null}</tmp12>;
            cResult[3] = tmp4;
            cResult[4] = tmp13;
            tmp9 = tmp13;
          } else {
            tmp9 = cResult[4];
          }
          tmp5 = tmp9;
        } else {
          tmp5 = null;
        }
      }
      return tmp5;
    }
  : (channel) => {
      let intl;
      let tmp;
      channel = channel.channel;
      [][0] = channel;
      let tmp2 = null;
      if (null != channel) {
        if (channel.isDM()) {
          let obj2 = {
            accessibilityLabel: intl.string(channel(1126).t["UKOtz+"]),
            source: AssetRegistryDefault,
            onPress: tmp,
          };
          PressableNavigatorButtonWrapperDefault;
          const HeaderIconButton = channel(7498).HeaderIconButton;
          intl = channel(1126).intl;
          tmp2 = <tmp6>{null}</tmp6>;
        } else {
          tmp2 = null;
        }
      }
      return tmp2;
    };
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx");

export default tmp2;
