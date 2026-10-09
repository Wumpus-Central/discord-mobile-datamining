// === Module 17674: VoicePanelDismissableContent ===

// Module 17674 (VoicePanelDismissableContent)
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6043 */;

const require = globalThis.__r;

require = fn;
function VoiceControlsNuxActionSheetImporter() {
  return asyncRequireImpl(17675, dependencyMap.paths);
}
const VoicePanelModes = fn(11926).VoicePanelModes;
const isActivityParticipant = fn(5114).isActivityParticipant;
const jsx = fn(21).jsx;
const VoiceControlToggleNuxActionSheet = "VoiceControlToggleNuxActionSheet";
const __initData = { code: "function VoicePanelDismissableContentTsx1(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}" };
const __initData2 = { code: "function VoicePanelDismissableContentTsx2(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
const __initData3 = { code: "function VoicePanelDismissableContentTsx3(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}" };
const __initData4 = { code: "function VoicePanelDismissableContentTsx4(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelDismissableContent.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelDismissibleContent() {
  let ACTIVITIES_MOBILE_PIP_FAB_NUX = require;
  const cResult = require("c").c(5);
  const context = handleFocusChange.useContext(focused(mode[10]));
  ({ channelId: require, focused } = context);
  mode = context.mode;
  let obj = require("c");
  [tmp6, _slicedToArray] = handleFocusChange.useState(false);
  handleFocusChange = function handleFocusChange(arg0) {
    let tmp = null != arg0;
    if (tmp) {
      tmp = isActivityParticipant(ChannelRTCStore.getParticipant(require, arg0));
    }
    _slicedToArray(tmp);
  };
  const tmp5 = _slicedToArray(handleFocusChange.useState(false), 2);
  class I {
    constructor() {
      tmp = undefined;
      if (mode.get() === VoicePanelModes.PANEL) {
        tmp2 = focused;
        value = focused.get();
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
  I.__closure = { mode, VoicePanelModes, focused };
  I.__workletHash = 11330064461661;
  I.__initData = __initData;
  const fn = function h(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(handleFocusChange)(arg0);
    }
  };
  const obj2 = require("ReanimatedRexport");
  const obj3 = { mode, VoicePanelModes, focused };
  fn.__closure = { runOnJS: require("ReanimatedRexport").runOnJS, handleFocusChange };
  fn.__workletHash = 15579591345007;
  fn.__initData = __initData2;
  const animatedReaction = obj2.useAnimatedReaction(I, fn);
  if (cResult[0] !== tmp6) {
    if (tmp6) {
      ACTIVITIES_MOBILE_PIP_FAB_NUX = ACTIVITIES_MOBILE_PIP_FAB_NUX(tmp[12]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX;
      const items = [ACTIVITIES_MOBILE_PIP_FAB_NUX];
      let items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = tmp6;
    cResult[1] = items1;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      class O {
        constructor(arg0) {
          ({ visibleContent, markAsDismissed } = arg0);
          tmp = channelId;
          tmp2 = mode;
          tmp3 = null;
          if (visibleContent === channelId(mode[12]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX) {
            tmp4 = closure_1_8;
            obj = { markAsDismissed: null, importer: null, actionSheetKey: null };
            obj.markAsDismissed = markAsDismissed;
            tmp5 = closure_1_10;
            obj.importer = closure_1_10;
            tmp6 = closure_1_9;
            obj.actionSheetKey = closure_1_9;
            tmp3 = closure_1_8(tmp(tmp2[13]).DismissibleActionSheet, obj);
          }
          return tmp3;
        }
      }
      cResult[2] = O;
    } else {
      class O {
        constructor(arg0) {
          ({ visibleContent, markAsDismissed } = arg0);
          tmp = channelId;
          tmp2 = mode;
          tmp3 = null;
          if (visibleContent === channelId(mode[12]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX) {
            tmp4 = closure_1_8;
            obj = { markAsDismissed: null, importer: null, actionSheetKey: null };
            obj.markAsDismissed = markAsDismissed;
            tmp5 = closure_1_10;
            obj.importer = closure_1_10;
            tmp6 = closure_1_9;
            obj.actionSheetKey = closure_1_9;
            tmp3 = closure_1_8(tmp(tmp2[13]).DismissibleActionSheet, obj);
          }
          return tmp3;
        }
      }
    }
    if (cResult[3] !== cResult[1]) {
      class O {
        constructor(arg0) {
          ({ visibleContent, markAsDismissed } = arg0);
          tmp = channelId;
          tmp2 = mode;
          tmp3 = null;
          if (visibleContent === channelId(mode[12]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX) {
            tmp4 = closure_1_8;
            obj = { markAsDismissed: null, importer: null, actionSheetKey: null };
            obj.markAsDismissed = markAsDismissed;
            tmp5 = closure_1_10;
            obj.importer = closure_1_10;
            tmp6 = closure_1_9;
            obj.actionSheetKey = closure_1_9;
            tmp3 = closure_1_8(tmp(tmp2[13]).DismissibleActionSheet, obj);
          }
          return tmp3;
        }
      }
      const obj5 = { contentTypes: tmp8, children: O };
      const tmp13 = jsx(focused(tmp[14]), { contentTypes: tmp8, children: O });
      cResult[3] = tmp8;
      cResult[4] = tmp13;
      const tmp12 = tmp13;
    } else {
      class O {
        constructor(arg0) {
          ({ visibleContent, markAsDismissed } = arg0);
          tmp = channelId;
          tmp2 = mode;
          tmp3 = null;
          if (visibleContent === channelId(mode[12]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX) {
            tmp4 = closure_1_8;
            obj = { markAsDismissed: null, importer: null, actionSheetKey: null };
            obj.markAsDismissed = markAsDismissed;
            tmp5 = closure_1_10;
            obj.importer = closure_1_10;
            tmp6 = closure_1_9;
            obj.actionSheetKey = closure_1_9;
            tmp3 = closure_1_8(tmp(tmp2[13]).DismissibleActionSheet, obj);
          }
          return tmp3;
        }
      }
    }
    return tmp12;
  }
  const obj4 = { runOnJS: require("ReanimatedRexport").runOnJS, handleFocusChange };
}) : (function VoicePanelDismissibleContent() {
  const context = handleFocusChange.useContext(focused(mode[10]));
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
  const fn = function f() {
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
  fn.__closure = { mode, VoicePanelModes, focused };
  fn.__workletHash = 6904572530271;
  fn.__initData = __initData3;
  const fn2 = function _(arg0, arg1) {
    if (arg0 !== arg1) {
      ReanimatedRexport.runOnJS(callback)(arg0);
    }
  };
  let obj = channelId(mode[11]);
  const obj2 = { mode, VoicePanelModes, focused };
  let tmp = focused;
  const tmp6 = channelId;
  fn2.__closure = { runOnJS: channelId(mode[11]).runOnJS, handleFocusChange };
  fn2.__workletHash = 1489576347241;
  fn2.__initData = __initData4;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  if (tmp4[0]) {
    const items1 = [tmp6(tmp2[12]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX];
    let items2 = items1;
  } else {
    items2 = [];
  }
  return jsx(tmp(mode[14]), {
    contentTypes: items2,
    children(arg0) {
      ({ visibleContent, markAsDismissed } = arg0);
      let tmp3 = null;
      if (visibleContent === channelId(mode[12]).DismissibleContent.ACTIVITIES_MOBILE_PIP_FAB_NUX) {
        const obj = { markAsDismissed, importer, actionSheetKey };
        tmp3 = jsx(channelId(mode[13]).DismissibleActionSheet, { markAsDismissed, importer, actionSheetKey });
      }
      return tmp3;
    }
  });
}));