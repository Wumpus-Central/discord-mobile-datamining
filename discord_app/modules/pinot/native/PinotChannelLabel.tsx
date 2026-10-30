// discord_app/modules/pinot/native/PinotChannelLabel.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3157 from "../Pinot.messages.js";
import PinotChannelLabelAnchor from "PinotChannelLabelAnchor.tsx";
import ChannelHeaderShared from "../../main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/native/PinotChannelLabel.tsx");

export function getPinotChannelLabelText() {
  const intl = util.intl;
  return intl.string(_modDef3157.uneDIi);
}
export function PinotChannelLabel(channelId) {
  const pinotChannelLabelAnchor = PinotChannelLabelAnchor.usePinotChannelLabelAnchor(channelId.channelId);
  const obj2 = {
    ref: pinotChannelLabelAnchor.ref,
    onLayout: pinotChannelLabelAnchor.onLayout,
    collapsable: false,
    children: null,
  };
  const obj3 = { children: null };
  const intl = util.intl;
  obj3.children = intl.string(_modDef3157.uneDIi);
  obj2.children = jsx(ChannelHeaderShared.SubtitleText, { children: null });
  return (
    <View ref={pinotChannelLabelAnchor.ref} onLayout={pinotChannelLabelAnchor.onLayout} collapsable={false}>
      {null}
    </View>
  );
}
