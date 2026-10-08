// === Module 17217: ChannelDetailsMoreButton ===

// Module 17217 (ChannelDetailsMoreButton)
import _modDef8646 from "module_8646" /* 8646 */;
import PressableNavigatorButtonWrapperDefault from "PressableNavigatorButtonWrapper" /* 9238 */;
import openChannelLongPressActionSheet from "openChannelLongPressActionSheet" /* 10264 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsMoreButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MoreButton(channel) {
  let HeaderIconButton = channel;
  let tmp = dependencyMap;
  const cResult = channel(576).c(5);
  channel = channel.channel;
  if (cResult[0] !== channel) {
    const fn = function l() {
      let tmp = null != channel;
      if (tmp) {
        tmp = channel.isDM() || channel.isMultiUserDM();
        const tmp2 = channel.isDM() || channel.isMultiUserDM();
      }
      if (tmp) {
        const result = openChannelLongPressActionSheet.openChannelLongPressActionSheet(channel.id);
      }
    };
    cResult[0] = channel;
    cResult[1] = fn;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  let tmp4 = null;
  if (null != channel) {
    if (!channel.isDM()) {
      tmp4 = null;
    }
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = HeaderIconButton(1126).intl;
      const stringResult = intl.string(HeaderIconButton(1126).t["UKOtz+"]);
      cResult[2] = stringResult;
      let tmp6 = stringResult;
    } else {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== tmp3) {
      let obj2 = { children: null };
      HeaderIconButton = HeaderIconButton(9232).HeaderIconButton;
      const obj3 = { accessibilityLabel: tmp6, source: null, onPress: null };
      tmp = _modDef8646;
      obj3.source = tmp;
      obj3.onPress = tmp3;
      obj2.children = <HeaderIconButton accessibilityLabel={tmp6} source={null} onPress={null} />;
      const tmp12 = jsx(PressableNavigatorButtonWrapperDefault, { children: null });
      cResult[3] = tmp3;
      cResult[4] = tmp12;
    }
  }
  return tmp4;
}) : (function MoreButton(channel) {
  channel = channel.channel;
  [][0] = channel;
  let tmp2 = null;
  if (null != channel) {
    if (channel.isDM()) {
      const obj = { children: null };
      let obj2 = { accessibilityLabel: null, source: null, onPress: null };
      const intl = channel(1126).intl;
      obj2.accessibilityLabel = intl.string(channel(1126).t["UKOtz+"]);
      obj2.source = _modDef8646;
      obj2.onPress = tmp;
      obj.children = jsx(channel(9232).HeaderIconButton, { accessibilityLabel: null, source: null, onPress: null });
      tmp2 = jsx(PressableNavigatorButtonWrapperDefault, { children: null });
    } else {
      tmp2 = null;
    }
  }
  return tmp2;
});