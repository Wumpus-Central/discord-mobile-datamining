// discord_app/modules/pinot/native/PinotChannelLabel.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3563 from "../Pinot.messages.js";
import PinotChannelLabelAnchor from "PinotChannelLabelAnchor.tsx";
import useAttachPinotMemberCoachmark from "useAttachPinotMemberCoachmark.tsx";
import ChannelHeaderShared from "../../main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5043);
let closure_6 = createStyles.createStyles((marginStart) => {
  const obj = { label: { marginStart } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/native/PinotChannelLabel.tsx");

export function getPinotChannelLabelText() {
  const intl = util.intl;
  return intl.string(_modDef3563.uneDIi);
}
export function PinotChannelLabel(arg0) {
  ({ channel, insetStart } = arg0);
  if (insetStart === undefined) {
    insetStart = 0;
  }
  const tmp = closure_6(insetStart);
  const pinotChannelLabelAnchor = PinotChannelLabelAnchor.usePinotChannelLabelAnchor(channel.id);
  const ref = pinotChannelLabelAnchor.ref;
  const ref1 = noop.useRef(null);
  const attachPinotMemberCoachmark = useAttachPinotMemberCoachmark.useAttachPinotMemberCoachmark(
    ref1,
    channel,
    "bottom",
  );
  items = [ref];
  const obj3 = {
    ref: noop.useCallback((current) => {
      ref1.current = current;
      ref(current);
    }, items),
    onLayout: pinotChannelLabelAnchor.onLayout,
    collapsable: false,
    style: tmp.label,
    children: null,
  };
  const obj4 = { children: null };
  const intl = util.intl;
  obj4.children = intl.string(_modDef3563.uneDIi);
  obj3.children = jsx(ChannelHeaderShared.SubtitleText, { children: null });
  return (
    <View
      ref={noop.useCallback((current) => {
        ref1.current = current;
        ref(current);
      }, items)}
      onLayout={pinotChannelLabelAnchor.onLayout}
      collapsable={false}
      style={tmp.label}
    >
      {null}
    </View>
  );
}
