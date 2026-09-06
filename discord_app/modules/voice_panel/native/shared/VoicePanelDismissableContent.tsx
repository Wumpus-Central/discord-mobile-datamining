// discord_app/modules/voice_panel/native/shared/VoicePanelDismissableContent.tsx
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";

require = fn;
function VoiceControlsNuxActionSheetImporter() {
  return asyncRequireImpl(17099, dependencyMap.paths);
}
const VoicePanelModes = fn(12273).VoicePanelModes;
const isActivityParticipant = fn(4581).isActivityParticipant;
const jsx = fn(21).jsx;
const __initData = {
  code: "function VoicePanelDismissableContentTsx1(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}",
};
const __initData2 = {
  code: "function VoicePanelDismissableContentTsx2(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelDismissableContent.tsx");

export default noop.memo(function VoicePanelDismissibleContent() {
  const context = handleFocusChange.useContext(focused(mode[8]));
  const channelId = context.channelId;
  focused = context.focused;
  mode = context.mode;
  const tmp4 = _slicedToArray(handleFocusChange.useState(false), 2);
  _slicedToArray = tmp4[1];
  const items = [channelId];
  handleFocusChange = handleFocusChange.useCallback((arg0) => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = isActivityParticipant(ChannelRTCStore.getParticipant(channelId, arg0));
    }
    closure_3(tmp);
  }, items);
  channelId(mode[9]);
  const fn = function h() {
    let tmp;
    if (mode.get() === VoicePanelModes.PANEL) {
      value = focused.get();
      let id;
      if (value != null) {
        id = value.id;
      }
      tmp = id;
    }
    return tmp;
  };
  let obj = { mode, VoicePanelModes, focused };
  fn.__closure = obj;
  fn.__workletHash = 11330064461661;
  fn.__initData = __initData;
  const fn2 = function f(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(callback)(arg0);
    }
  };
  obj = { runOnJS: channelId(mode[9]).runOnJS, handleFocusChange };
  fn2.__closure = obj;
  fn2.__workletHash = 15579591345007;
  fn2.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  if (tmp4[0]) {
    const items1 = [channelId(tmp2[10]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX];
    let items2 = items1;
  } else {
    items2 = [];
  }
  return jsx(focused(mode[11]), {
    contentTypes: items2,
    children(arg0) {
      ({ visibleContent, markAsDismissed } = arg0);
      let tmp3 = null;
      if (visibleContent === channelId(mode[10]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX) {
        const obj = { markAsDismissed, importer, actionSheetKey: "VoiceControlToggleNuxActionSheet" };
        tmp3 = jsx(channelId(mode[12]).DismissibleActionSheet, {
          markAsDismissed,
          importer,
          actionSheetKey: "VoiceControlToggleNuxActionSheet",
        });
      }
      return tmp3;
    },
  });
});
