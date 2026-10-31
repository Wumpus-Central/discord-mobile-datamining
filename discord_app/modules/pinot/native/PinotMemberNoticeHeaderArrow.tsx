// discord_app/modules/pinot/native/PinotMemberNoticeHeaderArrow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const result = 8 * Math.SQRT2;
const createStyles = fn(5014);
let obj2 = {
  anchor: { position: "absolute", top: 0, right: 0, bottom: 0, left: 0, zIndex: 1, overflow: "visible" },
  arrow: { position: "absolute", bottom: -1, width: 16, height: 9, overflow: "hidden" },
  diamond: null,
  diamondFill: null,
};
let size = {
  position: "absolute",
  top: 9 - result / 2,
  left: (16 - result) / 2,
  width: result,
  height: result,
  transform: null,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_FEEDBACK_INFO,
  backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND,
};
let items = [{ rotate: "45deg" }];
size.transform = items;
obj2.diamond = size;
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_FEEDBACK_INFO;
obj2.diamondFill = obj3;
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result1 = size.fileFinishedImporting("modules/pinot/native/PinotMemberNoticeHeaderArrow.tsx");

export function PinotMemberNoticeHeaderArrow(channelId) {
  channelId = channelId.channelId;
  const tmp = closure_6();
  const ref = noop.useRef(null);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj = channelId(504);
  const isForumChannelSearchActive = channelId(11346).useIsForumChannelSearchActive(channelId);
  const obj2 = channelId(11346);
  const obj3 = channelId(11322);
  const pinotChannelLabelCenter = channelId(11331).usePinotChannelLabelCenter(channelId, ref);
  const center = pinotChannelLabelCenter.center;
  let tmp9Result2 = null;
  if (obj3.usePinotMemberNotice(stateFromStores, "mobile_channel_header").visible) {
    tmp9Result2 = null;
    if (!isForumChannelSearchActive) {
      tmp9Result2 = null;
      if (tmp6) {
        const obj5 = {
          ref,
          collapsable: false,
          style: tmp.anchor,
          pointerEvents: "none",
          onLayout: tmp7,
          children: null,
        };
        let tmp9Result = null;
        if (null != center) {
          const obj6 = { style: null, children: null };
          const items2 = [tmp.arrow];
          const obj7 = { left: center - 8 };
          items2[1] = obj7;
          obj6.style = items2;
          const obj8 = { style: tmp.diamond, children: null };
          const obj9 = { style: tmp.diamondFill };
          obj8.children = <closure_3 style={tmp.diamondFill} />;
          obj6.children = <closure_3 style={tmp.diamond}>{null}</closure_3>;
          tmp9Result = <closure_3 style={null}>{null}</closure_3>;
        }
        obj5.children = tmp9Result;
        tmp9Result2 = (
          <closure_3 ref={ref} collapsable={false} style={tmp.anchor} pointerEvents="none" onLayout={tmp7}>
            {null}
          </closure_3>
        );
      }
    }
  }
  return tmp9Result2;
}
