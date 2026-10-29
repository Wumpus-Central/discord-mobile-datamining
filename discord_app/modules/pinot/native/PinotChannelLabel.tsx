// discord_app/modules/pinot/native/PinotChannelLabel.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import _modDef3156 from "../Pinot.messages.js";
import PinotChannelLabelAnchor from "PinotChannelLabelAnchor.tsx";
import ChannelHeaderShared from "../../main_tabs_v2/native/channel/header/ChannelHeaderShared.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
function getPinotChannelLabelText() {
  const intl = util.intl;
  return intl.string(_modDef3156.uneDIi);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/native/PinotChannelLabel.tsx");

export { getPinotChannelLabelText };
export const PinotChannelLabel = ReactCompilerGating.isReactCompilerEnabled()
  ? function PinotChannelLabel(channelId) {
      const cResult = c.c(4);
      const pinotChannelLabelAnchor = PinotChannelLabelAnchor.usePinotChannelLabelAnchor(channelId.channelId);
      ({ ref, onLayout } = pinotChannelLabelAnchor);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { children: null };
        const intl = util.intl;
        obj3.children = intl.string(_modDef3156.uneDIi);
        const tmp8 = jsx(ChannelHeaderShared.SubtitleText, { children: null });
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === onLayout) {
        if (cResult[2] === ref) {
          let tmp9 = cResult[3];
        }
        return tmp9;
      }
      const tmp10 = (
        <View ref={ref} onLayout={onLayout} collapsable={false}>
          {first}
        </View>
      );
      cResult[1] = onLayout;
      cResult[2] = ref;
      cResult[3] = tmp10;
      tmp9 = tmp10;
    }
  : function PinotChannelLabel(channelId) {
      const pinotChannelLabelAnchor = PinotChannelLabelAnchor.usePinotChannelLabelAnchor(channelId.channelId);
      const obj2 = {
        ref: pinotChannelLabelAnchor.ref,
        onLayout: pinotChannelLabelAnchor.onLayout,
        collapsable: false,
        children: null,
      };
      const obj3 = { children: null };
      const intl = util.intl;
      obj3.children = intl.string(_modDef3156.uneDIi);
      obj2.children = jsx(ChannelHeaderShared.SubtitleText, { children: null });
      return (
        <View ref={pinotChannelLabelAnchor.ref} onLayout={pinotChannelLabelAnchor.onLayout} collapsable={false}>
          {null}
        </View>
      );
    };
