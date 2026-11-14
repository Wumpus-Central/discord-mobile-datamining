// === Module 14852: VoicePanelDockRim ===

// Module 14852 (VoicePanelDockRim)
import nativeDefault from "native" /* 575 */;
import _modDef1655 from "module_1655" /* 1655 */;
import LinearGradientDefault from "LinearGradient" /* 5893 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const StyleSheet = fn(17).StyleSheet;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
let closure_6 = createStyles.createStyles({ rim: { position: "absolute", left: 0, right: 0, height: 1 } });
let closure_7 = { code: "(function VoicePanelDockRimTsx1(){let[voicePanelDockRimOpacity]=this.__closure;return{opacity:voicePanelDockRimOpacity.get()};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/VoicePanelDockRim.tsx");

export default noop.memo(function VoicePanelDockRim(style) {
  _require = undefined;
  const tmp = closure_6();
  const tmp2 = _require;
  const token = require("useToken").useToken(nativeDefault.colors.ICON_VOICE_SPEAKING);
  _require = token;
  items = [token];
  const memo = noop.useMemo(() => {
    items = [0, 0.15, 0.85, 1, 1, 0.85, 0.15, 0];
    return items.map((item) => c0(dependencyMap[6]).hexWithOpacity(_undefined, item));
  }, items);
  const obj = require("useToken");
  const items1 = [closure_7, require("VoicePanelDockRimLight").voicePanelDockRimOpacity];
  _require = undefined;
  [tmp7, tmp8] = items1;
  class VoicePanelDockRimTsx1 {
    constructor() {
      obj = { opacity: closure_0.get() };
      return obj;
    }
  }
  const items2 = [tmp8];
  VoicePanelDockRimTsx1.__closure = items2;
  VoicePanelDockRimTsx1.__workletHash = 16403229704209;
  VoicePanelDockRimTsx1.__initData = tmp7;
  const animatedStyle = require("module_1655").useAnimatedStyle(VoicePanelDockRimTsx1);
  const obj3 = { style: null, pointerEvents: "none", children: null };
  const items3 = [tmp.rim, style.style, animatedStyle];
  obj3.style = items3;
  const obj4 = { style: StyleSheet.absoluteFill, children: jsx(LinearGradientDefault, { style: StyleSheet.absoluteFill, colors: memo, locations: [0.08, 0.14, 0.27, 0.33, 0.67, 0.73, 0.86, 0.92], start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 } }) };
  obj3.children = jsx(tmp2(14853).VoicePanelDockRimLevel, { style: StyleSheet.absoluteFill, children: jsx(LinearGradientDefault, { style: StyleSheet.absoluteFill, colors: memo, locations: [0.08, 0.14, 0.27, 0.33, 0.67, 0.73, 0.86, 0.92], start: { x: 0, y: 0.5 }, end: { x: 1, y: 0.5 } }) });
  return jsx(_modDef1655.View, { style: null, pointerEvents: "none", children: null });
});