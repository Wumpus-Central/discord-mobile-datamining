// === Module 19644: JankVoicePanelTabReporter ===

// Module 19644 (JankVoicePanelTabReporter)
import getJankSurfaceName from "getJankSurfaceName" /* 18352 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const VoicePanelModes = fn(11419).VoicePanelModes;
const VoicePanelControlsModes = fn(11417).VoicePanelControlsModes;
const map = new Map();
let items = [{ code: "(function isDrawerShown_JankVoicePanelTabReporterNativeTsx1(wrapperSpecs,panelMode){let[VoicePanelModes]=this.__closure;return wrapperSpecs.drawerMode&&!wrapperSpecs.hidden&&panelMode===VoicePanelModes.PANEL;})" }, VoicePanelModes];
let closure_129_0;
[tmp3, tmp4] = items;
function isDrawerShown(drawerMode, arg1) {
  let tmp = drawerMode.drawerMode && !drawerMode.hidden;
  if (tmp) {
    tmp = arg1 === require.PANEL;
  }
  return tmp;
}
let items1 = [tmp4];
isDrawerShown.__closure = items1;
isDrawerShown.__workletHash = 17111317912789;
isDrawerShown.__initData = tmp3;
let closure_7 = { code: "(function JankVoicePanelTabReporterNativeTsx2(){let[isDrawerShown,wrapperSpecs,mode,VoicePanelModes]=this.__closure;return[isDrawerShown(wrapperSpecs.get(),mode.get()),mode.get()===VoicePanelModes.PANEL];})" };
let closure_8 = { code: "(function JankVoicePanelTabReporterNativeTsx3([isShown,isPanel],previous){let[scheduleOnRN,handleDrawerChange]=this.__closure;if(previous==null||isShown!==previous[0]||isPanel!==previous[1]){scheduleOnRN(handleDrawerChange,isShown,isPanel);}})" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/jank_stats/native/JankVoicePanelTabReporter.native.tsx");

export default noop.memo(function JankVoicePanelTabReporter(channelId) {
  channelId = channelId.channelId;
  const tab = channelId.tab;
  noop = undefined;
  ({ wrapperSpecs, mode } = channelId);
  noop = noop.useRef(tab);
  items = [channelId, tab];
  const layoutEffect = noop.useLayoutEffect(() => {
    c2.current = current;
    value = map.get(c0);
    let isShown;
    if (value != null) {
      isShown = value.isShown;
    }
    if (true === isShown) {
      getJankSurfaceName;
      if ("chat" === current) {
        tmp8(c0, `chat`);
      }
    }
  }, items);
  const items1 = [channelId];
  const callback = noop.useCallback((isShown, isPanel) => {
    value = map.get(c0);
    let flag;
    if (value != null) {
      flag = value.isShown;
    }
    if (flag == null) {
      flag = false;
    }
    const result = map.set(c0, { isShown, isPanel });
    if (isShown !== flag) {
      if (!isShown) {
        obj3.setJankVoicePanelTab(c0, null);
      } else {
        current = _undefined2.current;
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
  const items2 = [closure_7, isDrawerShown, wrapperSpecs, mode, c3];
  _require = undefined;
  dependencyMap = undefined;
  noop = undefined;
  c3 = undefined;
  [tmp5, tmp6, tmp7, tmp8, tmp9] = items2;
  class JankVoicePanelTabReporterNativeTsx2 {
    constructor() {
      value = closure_1.get();
      items = [, ];
      items[0] = closure_0(value, closure_2.get());
      items[1] = closure_2.get() === closure_3.PANEL;
      return items;
    }
  }
  const items3 = [tmp6, tmp7, tmp8, tmp9];
  JankVoicePanelTabReporterNativeTsx2.__closure = items3;
  JankVoicePanelTabReporterNativeTsx2.__workletHash = 2083564958222;
  JankVoicePanelTabReporterNativeTsx2.__initData = tmp5;
  const items4 = [closure_8, require("module_1705").scheduleOnRN, callback];
  _require = undefined;
  dependencyMap = undefined;
  [tmp10, tmp11, tmp12] = items4;
  class JankVoicePanelTabReporterNativeTsx3 {
    constructor(arg0, arg1) {
      [tmp, tmp2] = channelId;
      tmp3 = null != arg1 && tmp === arg1[0] && tmp2 === arg1[1];
      if (!tmp3) {
        tmp4 = closure_0;
        tmp5 = closure_1;
        tmp6 = closure_0(closure_1, tmp, tmp2);
      }
      return;
    }
  }
  const items5 = [tmp11, tmp12];
  JankVoicePanelTabReporterNativeTsx3.__closure = items5;
  JankVoicePanelTabReporterNativeTsx3.__workletHash = 4126589190035;
  JankVoicePanelTabReporterNativeTsx3.__initData = tmp10;
  const animatedReaction = require("module_1652").useAnimatedReaction(JankVoicePanelTabReporterNativeTsx2, JankVoicePanelTabReporterNativeTsx3);
  const items6 = [channelId];
  const layoutEffect1 = noop.useLayoutEffect(() => () => {
    set.delete(_undefined);
    c0(c1[3]).setJankVoicePanelTab(_undefined, null);
  }, items6);
  return null;
});
export function reportJankVoicePanelTabRequest(arg0, disableControlsUpdate, arg2) {
  ({ tab, controlsProps } = disableControlsUpdate);
  value = map.get(arg0);
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
      tmp10(arg0, `chat`);
    }
  }
}