// === Module 17810: JankVoicePanelTabReporter ===

// Module 17810 (JankVoicePanelTabReporter)
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import getJankSurfaceName from "getJankSurfaceName" /* 16357 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
let VoicePanelModes = fn(11926).VoicePanelModes;
const VoicePanelControlsModes = fn(11924).VoicePanelControlsModes;
const map = new Map();
function isDrawerShown(drawerMode, arg1) {
  let tmp = drawerMode.drawerMode && !drawerMode.hidden;
  if (tmp) {
    tmp = arg1 === VoicePanelModes.PANEL;
  }
  return tmp;
}
isDrawerShown.__closure = { VoicePanelModes };
isDrawerShown.__workletHash = 4659073724332;
isDrawerShown.__initData = { code: "function isDrawerShown_JankVoicePanelTabReporterNativeTsx1(wrapperSpecs,panelMode){const{VoicePanelModes}=this.__closure;return wrapperSpecs.drawerMode&&!wrapperSpecs.hidden&&panelMode===VoicePanelModes.PANEL;}" };
const __initData = { code: "function JankVoicePanelTabReporterNativeTsx2(){const{isDrawerShown,wrapperSpecs,mode,VoicePanelModes}=this.__closure;return[isDrawerShown(wrapperSpecs.get(),mode.get()),mode.get()===VoicePanelModes.PANEL];}" };
const __initData2 = { code: "function JankVoicePanelTabReporterNativeTsx3(t3,previous){const{runOnJS,handleDrawerChange}=this.__closure;const[isShown_0,isPanel_0]=t3;if(previous==null||isShown_0!==previous[0]||isPanel_0!==previous[1]){runOnJS(handleDrawerChange)(isShown_0,isPanel_0);}}" };
const __initData3 = { code: "function JankVoicePanelTabReporterNativeTsx4(){const{isDrawerShown,wrapperSpecs,mode,VoicePanelModes}=this.__closure;return[isDrawerShown(wrapperSpecs.get(),mode.get()),mode.get()===VoicePanelModes.PANEL];}" };
const __initData4 = { code: "function JankVoicePanelTabReporterNativeTsx5([isShown_0,isPanel_0],previous){const{runOnJS,handleDrawerChange}=this.__closure;if(previous==null||isShown_0!==previous[0]||isPanel_0!==previous[1]){runOnJS(handleDrawerChange)(isShown_0,isPanel_0);}}" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/jank_stats/native/JankVoicePanelTabReporter.native.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function JankVoicePanelTabReporter(channelId) {
  const cResult = channelId(tab[6]).c(7);
  channelId = channelId.channelId;
  tab = channelId.tab;
  const wrapperSpecs = channelId.wrapperSpecs;
  const mode = channelId.mode;
  VoicePanelModes = mode.useRef(tab);
  if (cResult[0] === channelId) {
    if (cResult[1] === tab) {
      let tmp4 = cResult[2];
      let tmp5 = cResult[3];
    }
    const layoutEffect = obj2.useLayoutEffect(tmp4, tmp5);
    function handleDrawerChange(isShown, isPanel) {
      value = map.get(channelId);
      let flag;
      if (value != null) {
        flag = value.isShown;
      }
      if (flag == null) {
        flag = false;
      }
      const result = map.set(channelId, { isShown, isPanel });
      if (isShown !== flag) {
        if (!isShown) {
          obj3.setJankVoicePanelTab(channelId, null);
        } else {
          const current = ref.current;
          if ("chat" === current) {
            let str3 = "chat";
          } else if ("app_launcher" !== current) {
            str3 = "settings";
          }
          str3 = "app-launcher";
        }
        obj3 = getJankSurfaceName;
      }
      const obj2 = { isShown, isPanel };
    }
    const fn2 = function k() {
      value = wrapperSpecs.get();
      if (typeof isDrawerShown === "function") {
        let tmp3 = value.drawerMode && !value.hidden;
        if (tmp3) {
          tmp3 = tmp2 === VoicePanelModes.PANEL;
        }
        const items = [tmp3, mode.get() === VoicePanelModes.PANEL];
        return items;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    let obj3 = { isDrawerShown, wrapperSpecs, mode, VoicePanelModes };
    fn2.__closure = obj3;
    fn2.__workletHash = 16004116027159;
    fn2.__initData = __initData;
    const fn3 = function f(arg0, arg1) {
      [tmp2, tmp3] = arg0;
      if (!tmp4) {
        ReanimatedRexport.runOnJS(handleDrawerChange)(tmp2, tmp3);
      }
      const tmp = _slicedToArray(arg0, 2);
      tmp4 = null != arg1 && tmp2 === arg1[0] && tmp3 === arg1[1];
    };
    const obj4 = { runOnJS: tmp(tmp2[7]).runOnJS, handleDrawerChange };
    fn3.__closure = obj4;
    fn3.__workletHash = 630578837540;
    fn3.__initData = __initData2;
    const animatedReaction = tmp(tmp2[7]).useAnimatedReaction(fn2, fn3);
    if (cResult[4] !== channelId) {
      const fn4 = function v() {
        return () => {
          set.delete(closure_1_0);
          channelId(tab[4]).setJankVoicePanelTab(closure_1_0, null);
        };
      };
      let items = [channelId];
      cResult[4] = channelId;
      cResult[5] = fn4;
      cResult[6] = items;
      let tmp13 = items;
      let tmp12 = fn4;
    } else {
      tmp12 = cResult[5];
      tmp13 = cResult[6];
    }
    const layoutEffect1 = obj2.useLayoutEffect(tmp12, tmp13);
    return null;
  }
  const fn = function c() {
    closure_4.current = tab;
    value = map.get(channelId);
    let isShown;
    if (value != null) {
      isShown = value.isShown;
    }
    if (true === isShown) {
      getJankSurfaceName;
      if ("chat" === tab) {
        tmp8(channelId, `chat`);
      }
    }
  };
  const items1 = [channelId, tab];
  cResult[0] = channelId;
  cResult[1] = tab;
  cResult[2] = fn;
  cResult[3] = items1;
  tmp5 = items1;
  tmp4 = fn;
  let obj = channelId(tab[6]);
}) : (function JankVoicePanelTabReporter(channelId) {
  channelId = channelId.channelId;
  const tab = channelId.tab;
  const wrapperSpecs = channelId.wrapperSpecs;
  const mode = channelId.mode;
  VoicePanelModes = mode.useRef(tab);
  let items = [channelId, tab];
  const layoutEffect = mode.useLayoutEffect(() => {
    closure_4.current = tab;
    value = map.get(channelId);
    let isShown;
    if (value != null) {
      isShown = value.isShown;
    }
    if (true === isShown) {
      getJankSurfaceName;
      if ("chat" === tab) {
        tmp8(channelId, `chat`);
      }
    }
  }, items);
  const items1 = [channelId];
  const handleDrawerChange = mode.useCallback((isShown, isPanel) => {
    value = map.get(channelId);
    let flag;
    if (value != null) {
      flag = value.isShown;
    }
    if (flag == null) {
      flag = false;
    }
    const result = map.set(channelId, { isShown, isPanel });
    if (isShown !== flag) {
      if (!isShown) {
        obj3.setJankVoicePanelTab(channelId, null);
      } else {
        const current = ref.current;
        if ("chat" === current) {
          let str3 = "chat";
        } else if ("app_launcher" !== current) {
          str3 = "settings";
        }
        str3 = "app-launcher";
      }
      obj3 = getJankSurfaceName;
    }
    const obj2 = { isShown, isPanel };
  }, items1);
  class S {
    constructor() {
      value = wrapperSpecs.get();
      obj = mode;
      if (typeof isDrawerShown === "function") {
        tmp3 = value.drawerMode && !value.hidden;
        if (tmp3) {
          tmp4 = VoicePanelModes;
          tmp3 = tmp2 === VoicePanelModes.PANEL;
        }
        items = [, ];
        items[0] = tmp3;
        tmp5 = VoicePanelModes;
        items[1] = obj.get() === VoicePanelModes.PANEL;
        return items;
      } else {
        str = "Trying to call a non-function";
        throw new TypeError("Trying to call a non-function");
      }
    }
  }
  S.__closure = { isDrawerShown, wrapperSpecs, mode, VoicePanelModes };
  S.__workletHash = 7821203254481;
  S.__initData = __initData3;
  class P {
    constructor(arg0, arg1) {
      [tmp, tmp2] = channelId;
      tmp3 = null != arg1 && tmp === arg1[0] && tmp2 === arg1[1];
      if (!tmp3) {
        tmp4 = closure_0;
        tmp5 = closure_1;
        obj = closure_0(closure_1[7]);
        tmp6 = closure_5;
        tmp7 = obj.runOnJS(closure_5)(tmp, tmp2);
      }
      return;
    }
  }
  let obj = channelId(tab[7]);
  let obj2 = { isDrawerShown, wrapperSpecs, mode, VoicePanelModes };
  P.__closure = { runOnJS: channelId(tab[7]).runOnJS, handleDrawerChange };
  P.__workletHash = 409263002593;
  P.__initData = __initData4;
  const animatedReaction = obj.useAnimatedReaction(S, P);
  const items2 = [channelId];
  const layoutEffect1 = mode.useLayoutEffect(() => () => {
    set.delete(closure_1_0);
    channelId(tab[4]).setJankVoicePanelTab(closure_1_0, null);
  }, items2);
  return null;
}));
export const reportJankVoicePanelTabRequest = function reportJankVoicePanelTabRequest(disableControlsUpdate, disableControlsUpdate, arg2) {
  ({ tab, controlsProps } = disableControlsUpdate);
  value = map.get(disableControlsUpdate);
  let tmp2 = null != value;
  if (tmp2) {
    let isShown = true !== disableControlsUpdate.disableControlsUpdate;
    if (isShown) {
      let debounce;
      if (controlsProps != null) {
        debounce = controlsProps.debounce;
      }
      isShown = true !== debounce;
    }
    if (isShown) {
      let mode;
      if (controlsProps != null) {
        mode = controlsProps.mode;
      }
      if (mode == null) {
        mode = VoicePanelControlsModes.DRAWER;
      }
      isShown = mode === VoicePanelControlsModes.DRAWER;
    }
    if (isShown) {
      isShown = arg2;
    }
    if (isShown) {
      isShown = value.isPanel;
    }
    if (!isShown) {
      isShown = value.isShown;
    }
    tmp2 = isShown;
  }
  if (tmp2) {
    getJankSurfaceName;
    if ("chat" === tab) {
      tmp10(disableControlsUpdate, `chat`);
    }
  }
};