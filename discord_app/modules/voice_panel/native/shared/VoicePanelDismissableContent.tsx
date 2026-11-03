// discord_app/modules/voice_panel/native/shared/VoicePanelDismissableContent.tsx
import asyncRequireImpl from "../../../../../_runtime/02123_asyncRequireImpl.js";
import SelectedDismissibleContentDefault from "../../../dismissible_content/native/SelectedDismissibleContent.tsx";
import VoicePanelStateContextDefault from "../VoicePanelStateContext.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelRTCStore from "../../../calls/ChannelRTCStore.tsx";

const require = globalThis.__r;

require = fn;
function VoiceControlsNuxActionSheetImporter() {
  return asyncRequireImpl(19444, dependencyMap.paths);
}
const VoicePanelModes = fn(11360).VoicePanelModes;
const isActivityParticipant = fn(5801).isActivityParticipant;
const jsx = fn(21).jsx;
let closure_10 = {
  code: "(function VoicePanelDismissableContentTsx1(){let[mode,VoicePanelModes,focused]=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;})",
};
let closure_11 = {
  code: "(function VoicePanelDismissableContentTsx2(manualId,previousManualId){let[scheduleOnRN,handleFocusChange]=this.__closure;if(manualId!==previousManualId){scheduleOnRN(handleFocusChange,manualId);}})",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelDismissableContent.tsx");

export default noop.memo(function VoicePanelDismissibleContent() {
  const context = noop.useContext(VoicePanelStateContextDefault);
  const channelId = context.channelId;
  ({ focused, mode } = context);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  items = [channelId];
  const callback = noop.useCallback((arg0) => {
    let tmp = null != arg0;
    if (tmp) {
      tmp = isActivityParticipant(ChannelRTCStore.getParticipant(c0, arg0));
    }
    _undefined2(tmp);
  }, items);
  const items1 = [closure_10, mode, VoicePanelModes, focused];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp7, tmp8, tmp9, tmp10] = items1;
  class VoicePanelDismissableContentTsx1 {
    constructor() {
      tmp = undefined;
      if (closure_0.get() === closure_1.PANEL) {
        tmp2 = closure_2;
        value = closure_2.get();
        tmp4 = null;
        id = undefined;
        if (value != null) {
          id = value.id;
        }
        tmp = id;
      }
      return tmp;
    }
  }
  const items2 = [tmp8, tmp9, tmp10];
  VoicePanelDismissableContentTsx1.__closure = items2;
  VoicePanelDismissableContentTsx1.__workletHash = 2390811461540;
  VoicePanelDismissableContentTsx1.__initData = tmp7;
  const items3 = [closure_11, require("../../../../../_runtime/metro/01705__.js").scheduleOnRN, callback];
  _require = undefined;
  importDefault = undefined;
  [tmp11, tmp12, tmp13] = items3;
  class VoicePanelDismissableContentTsx2 {
    constructor(arg0, arg1) {
      if (arg0 !== arg1) {
        tmp = closure_0;
        tmp2 = closure_1;
        tmp3 = closure_0(closure_1, arg0);
      }
      return;
    }
  }
  const items4 = [tmp12, tmp13];
  VoicePanelDismissableContentTsx2.__closure = items4;
  VoicePanelDismissableContentTsx2.__workletHash = 15261631446843;
  VoicePanelDismissableContentTsx2.__initData = tmp11;
  const animatedReaction = require("../../../../../_runtime/metro/01652__.js").useAnimatedReaction(
    VoicePanelDismissableContentTsx1,
    VoicePanelDismissableContentTsx2,
  );
  if (tmp4[0]) {
    const items5 = [tmp6(4974).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX];
    let items6 = items5;
  } else {
    items6 = [];
  }
  return jsx(SelectedDismissibleContentDefault, {
    contentTypes: items6,
    children(arg0) {
      ({ visibleContent, markAsDismissed } = arg0);
      let tmp3 = null;
      if (visibleContent === _undefined(_undefined3[11]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX) {
        const obj = { markAsDismissed, importer, actionSheetKey: "VoiceControlToggleNuxActionSheet" };
        tmp3 = jsx(_undefined(_undefined3[13]).DismissibleActionSheet, {
          markAsDismissed,
          importer,
          actionSheetKey: "VoiceControlToggleNuxActionSheet",
        });
      }
      return tmp3;
    },
  });
});
