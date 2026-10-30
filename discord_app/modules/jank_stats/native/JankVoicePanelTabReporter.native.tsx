// === Module 19269: JankVoicePanelTabReporter ===

// Module 19269 (JankVoicePanelTabReporter)
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import getJankSurfaceName from "getJankSurfaceName" /* 18011 */;
import noop from "module_19" /* 19 */;

require = fn;
const VoicePanelModes = fn(11204).VoicePanelModes;
const VoicePanelControlsModes = fn(11202).VoicePanelControlsModes;
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
const __initData2 = { code: "function JankVoicePanelTabReporterNativeTsx3([isShown,isPanel],previous){const{runOnJS,handleDrawerChange}=this.__closure;if(previous==null||isShown!==previous[0]||isPanel!==previous[1]){runOnJS(handleDrawerChange)(isShown,isPanel);}}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/jank_stats/native/JankVoicePanelTabReporter.native.tsx");

export default noop.memo(function JankVoicePanelTabReporter(channelId) {
  channelId = channelId.channelId;
  const tab = channelId.tab;
  const wrapperSpecs = channelId.wrapperSpecs;
  const mode = channelId.mode;
  wrapperSpecs.useRef(tab);
  let items = [channelId, tab];
  const layoutEffect = wrapperSpecs.useLayoutEffect(() => {
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
  const handleDrawerChange = wrapperSpecs.useCallback((isShown, isPanel) => {
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
  const fn = function f() {
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
  fn.__closure = { isDrawerShown, wrapperSpecs, mode, VoicePanelModes: mode };
  fn.__workletHash = 16004116027159;
  fn.__initData = __initData;
  const fn2 = function _(arg0, arg1) {
    [tmp, tmp2] = arg0;
    if (!tmp3) {
      ReanimatedRexport.runOnJS(callback)(tmp, tmp2);
    }
    tmp3 = null != arg1 && tmp === arg1[0] && tmp2 === arg1[1];
  };
  let obj = channelId(tab[4]);
  let obj2 = { isDrawerShown, wrapperSpecs, mode, VoicePanelModes: mode };
  fn2.__closure = { runOnJS: channelId(tab[4]).runOnJS, handleDrawerChange };
  fn2.__workletHash = 16116209487687;
  fn2.__initData = __initData2;
  const animatedReaction = obj.useAnimatedReaction(fn, fn2);
  const items2 = [channelId];
  const layoutEffect1 = wrapperSpecs.useLayoutEffect(() => () => {
    callback.delete(closure_1_0);
    channelId(tab[3]).setJankVoicePanelTab(closure_1_0, null);
  }, items2);
  return null;
});
export function reportJankVoicePanelTabRequest(disableControlsUpdate, disableControlsUpdate, arg2) {
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
}