// === Module 11861: PinotChannelLabel ===

// Module 11861 (PinotChannelLabel)
import util from "util" /* 1112 */;
import _modDef3508 from "module_3508" /* 3508 */;
import PinotChannelLabelAnchor from "PinotChannelLabelAnchor" /* 11862 */;
import useAttachPinotMemberCoachmark from "useAttachPinotMemberCoachmark" /* 11863 */;
import ChannelHeaderShared from "ChannelHeaderShared" /* 11868 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/native/PinotChannelLabel.tsx");

export function getPinotChannelLabelText() {
  const intl = util.intl;
  return intl.string(_modDef3508.uneDIi);
}
export function PinotChannelLabel(channel) {
  channel = channel.channel;
  const pinotChannelLabelAnchor = PinotChannelLabelAnchor.usePinotChannelLabelAnchor(channel.id);
  const ref = pinotChannelLabelAnchor.ref;
  const ref1 = noop.useRef(null);
  const attachPinotMemberCoachmark = useAttachPinotMemberCoachmark.useAttachPinotMemberCoachmark(ref1, channel, "bottom");
  items = [ref];
  const obj3 = {
    ref: noop.useCallback((current) => {
      ref1.current = current;
      ref(current);
    }, items),
    onLayout: pinotChannelLabelAnchor.onLayout,
    collapsable: false,
    children: null
  };
  const obj4 = { children: null };
  const intl = util.intl;
  obj4.children = intl.string(_modDef3508.uneDIi);
  obj3.children = jsx(ChannelHeaderShared.SubtitleText, { children: null });
  return <View ref={noop.useCallback((current) => {
    ref1.current = current;
    ref(current);
  }, items)} onLayout={pinotChannelLabelAnchor.onLayout} collapsable={false}>{null}</View>;
}