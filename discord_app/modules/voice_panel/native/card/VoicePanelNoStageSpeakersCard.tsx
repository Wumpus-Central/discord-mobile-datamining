// === Module 19647: VoicePanelNoStageSpeakersCard ===

// Module 19647 (VoicePanelNoStageSpeakersCard)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef4156 from "module_4156" /* 4156 */;
import Text_Text from "Text/Text" /* 5751 */;
import NativeViewDefault from "NativeView" /* 7023 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5140);
let obj = { container: null, label: null };
let size = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj.container = size;
obj.label = { textAlign: "center" };
let closure_4 = createStyles.createStyles(obj);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelNoStageSpeakersCard.tsx");

export default noop.memo(function VoicePanelNoStageSpeakersCard() {
  const tmp = closure_4();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.label, variant: "heading-sm/semibold", color: "text-overlay-light", children: null };
  const intl = util.intl;
  obj2.children = intl.string(_modDef4156["P63Z/o"]);
  obj.children = jsx(Text_Text.Heading, { style: tmp.label, variant: "heading-sm/semibold", color: "text-overlay-light", children: null });
  return jsx(NativeViewDefault, { style: tmp.container, children: null });
});