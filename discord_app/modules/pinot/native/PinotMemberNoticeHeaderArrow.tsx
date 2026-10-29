// === Module 11083: PinotMemberNoticeHeaderArrow ===

// Module 11083 (PinotMemberNoticeHeaderArrow)
import nativeDefault from "native" /* 587 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4857 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const result = 8 * Math.SQRT2;
const createStyles = fn(5005);
let obj2 = { anchor: { position: "absolute", top: 0, right: 0, bottom: 0, left: 0, zIndex: 1, overflow: "visible" }, arrow: { position: "absolute", bottom: -1, width: 16, height: 9, overflow: "hidden" }, diamond: null, diamondFill: null };
let size = { position: "absolute", top: 9 - result / 2, left: (16 - result) / 2, width: result, height: result, transform: null, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_FEEDBACK_INFO, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
let items = [{ rotate: "45deg" }];
size.transform = items;
obj2.diamond = size;
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_FEEDBACK_INFO;
obj2.diamondFill = obj3;
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result1 = size.fileFinishedImporting("modules/pinot/native/PinotMemberNoticeHeaderArrow.tsx");

export const PinotMemberNoticeHeaderArrow = ReactCompilerGating.isReactCompilerEnabled() ? (function PinotMemberNoticeHeaderArrow(channelId) {
  const cResult = channelId(576).c(13);
  channelId = channelId.channelId;
  let anchor = closure_6();
  let anchor2 = noop.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function h() {
      return ChannelStore.getChannel(channelId);
    };
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = channelId(576);
  const stateFromStores = channelId(504).useStateFromStores(first, tmp6, tmp7);
  const tmpResult = channelId(504);
  const isForumChannelSearchActive = channelId(11084).useIsForumChannelSearchActive(channelId);
  const tmpResult4 = channelId(11084);
  const tmpResult5 = channelId(11074);
  const pinotChannelLabelCenter = channelId(11078).usePinotChannelLabelCenter(channelId, anchor2);
  ({ center, onContainerLayout } = pinotChannelLabelCenter);
  let tmp12 = null;
  if (tmpResult5.usePinotMemberNotice(stateFromStores, "mobile_channel_header").visible) {
    tmp12 = null;
    if (!isForumChannelSearchActive) {
      tmp12 = null;
      if (tmp11) {
        if (cResult[4] === center) {
          if (cResult[5] === anchor.arrow) {
            if (cResult[6] === anchor.diamond) {
              if (cResult[7] === anchor.diamondFill) {
                let tmp13 = cResult[8];
              }
              if (cResult[9] === onContainerLayout) {
                if (cResult[10] === anchor.anchor) {
                }
              }
              const obj2 = { ref: anchor2, collapsable: false, style: null, pointerEvents: "none", onLayout: null, children: null };
              anchor2 = anchor.anchor;
              obj2.style = anchor2;
              obj2.onLayout = onContainerLayout;
              obj2.children = tmp13;
              const tmp20 = <closure_3 ref={anchor2} collapsable={false} style={null} pointerEvents="none" onLayout={null}>{null}</closure_3>;
              cResult[9] = onContainerLayout;
              anchor = anchor.anchor;
              cResult[10] = anchor;
              cResult[11] = tmp13;
              cResult[12] = tmp20;
            }
          }
        }
        let tmp14 = null;
        if (null != center) {
          const obj3 = { style: null, children: null };
          const items2 = [anchor.arrow, ];
          const obj4 = { left: center - 8 };
          items2[1] = obj4;
          obj3.style = items2;
          const obj5 = { style: anchor.diamond, children: null };
          const obj6 = { style: anchor.diamondFill };
          obj5.children = <closure_3 style={anchor.diamondFill} />;
          obj3.children = <closure_3 style={anchor.diamond}>{null}</closure_3>;
          tmp14 = <closure_3 style={null}>{null}</closure_3>;
        }
        cResult[4] = center;
        cResult[5] = anchor.arrow;
        cResult[6] = anchor.diamond;
        cResult[7] = anchor.diamondFill;
        cResult[8] = tmp14;
        tmp13 = tmp14;
      }
    }
  }
  return tmp12;
}) : (function PinotMemberNoticeHeaderArrow(channelId) {
  channelId = channelId.channelId;
  const tmp = closure_6();
  const ref = noop.useRef(null);
  const items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj = channelId(504);
  const isForumChannelSearchActive = channelId(11084).useIsForumChannelSearchActive(channelId);
  const obj2 = channelId(11084);
  const obj3 = channelId(11074);
  const pinotChannelLabelCenter = channelId(11078).usePinotChannelLabelCenter(channelId, ref);
  const center = pinotChannelLabelCenter.center;
  let tmp9Result2 = null;
  if (obj3.usePinotMemberNotice(stateFromStores, "mobile_channel_header").visible) {
    tmp9Result2 = null;
    if (!isForumChannelSearchActive) {
      tmp9Result2 = null;
      if (tmp6) {
        const obj5 = { ref, collapsable: false, style: tmp.anchor, pointerEvents: "none", onLayout: tmp7, children: null };
        let tmp9Result = null;
        if (null != center) {
          const obj6 = { style: null, children: null };
          const items2 = [tmp.arrow, ];
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
        tmp9Result2 = <closure_3 ref={ref} collapsable={false} style={tmp.anchor} pointerEvents="none" onLayout={tmp7}>{null}</closure_3>;
      }
    }
  }
  return tmp9Result2;
});