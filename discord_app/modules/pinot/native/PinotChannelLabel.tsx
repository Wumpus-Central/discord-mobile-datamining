// === Module 11303: PinotChannelLabel ===

// Module 11303 (PinotChannelLabel)
import util from "util" /* 1114 */;
import _modDef3157 from "module_3157" /* 3157 */;
import PinotChannelLabelAnchor from "PinotChannelLabelAnchor" /* 11304 */;
import ChannelHeaderShared from "ChannelHeaderShared" /* 11305 */;
import noop from "module_19" /* 19 */;

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
  const obj2 = { ref: pinotChannelLabelAnchor.ref, onLayout: pinotChannelLabelAnchor.onLayout, collapsable: false, children: null };
  const obj3 = { children: null };
  const intl = util.intl;
  obj3.children = intl.string(_modDef3157.uneDIi);
  obj2.children = jsx(ChannelHeaderShared.SubtitleText, { children: null });
  return <View ref={pinotChannelLabelAnchor.ref} onLayout={pinotChannelLabelAnchor.onLayout} collapsable={false}>{null}</View>;
}