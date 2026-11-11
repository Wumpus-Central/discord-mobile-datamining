// discord_app/modules/voice_panel/native/card/VoicePanelNoStageSpeakersCard.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef4209 from "../../../stage_channels/StageChannel.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5243);
let obj = { container: null, label: null };
let size = {
  width: "100%",
  height: "100%",
  alignItems: "center",
  justifyContent: "center",
  padding: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND,
};
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
  obj2.children = intl.string(_modDef4209["P63Z/o"]);
  obj.children = jsx(Text_Text.Heading, {
    style: tmp.label,
    variant: "heading-sm/semibold",
    color: "text-overlay-light",
    children: null,
  });
  return jsx(NativeViewDefault, { style: tmp.container, children: null });
});
