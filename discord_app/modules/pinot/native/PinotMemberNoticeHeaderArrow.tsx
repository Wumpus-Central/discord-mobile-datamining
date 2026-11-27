// discord_app/modules/pinot/native/PinotMemberNoticeHeaderArrow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import PinotMemberNoticeCaret from "../PinotMemberNoticeCaret.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ PixelRatio: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = 10 + fn(11905).PINOT_MEMBER_NOTICE_BORDER_WIDTH / 2;
const createStyles = fn(5043);
let closure_11 = createStyles.createStyles((height) => {
  const obj = {
    anchor: { position: "absolute", top: 0, right: 0, bottom: 0, left: 0, zIndex: 1, overflow: "visible" },
    dividerUnderlay: null,
    outline: null,
  };
  const rect = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: PinotMemberNoticeCaret.PINOT_MEMBER_NOTICE_BORDER_WIDTH,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER,
  };
  obj.dividerUnderlay = rect;
  const rect1 = { position: "absolute", bottom: 0, left: 0, right: 0, height, overflow: "hidden" };
  obj.outline = rect1;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/native/PinotMemberNoticeHeaderArrow.tsx");

export function PinotMemberNoticeHeaderArrow(channelId) {
  channelId = channelId.channelId;
  importDefault = undefined;
  onContainerLayout = undefined;
  const roundToNearestPixelResult = closure_5.roundToNearestPixel(
    10 + channelId(onContainerLayout[5]).PINOT_MEMBER_NOTICE_BORDER_WIDTH,
  );
  const tmp4 = closure_11(roundToNearestPixelResult);
  const token = channelId(onContainerLayout[8]).useToken(require("native").colors.BACKGROUND_BASE_LOWER);
  const obj2 = channelId(onContainerLayout[8]);
  const tmp5 = importDefault;
  const token1 = channelId(onContainerLayout[8]).useToken(require("native").colors.BACKGROUND_FEEDBACK_MOD_INFO);
  const obj3 = channelId(onContainerLayout[8]);
  const token2 = channelId(onContainerLayout[8]).useToken(require("native").colors.INLINENOTICE_BORDER_INFO);
  const ref = noop.useRef(null);
  const obj4 = channelId(onContainerLayout[8]);
  [tmp11, c1] = noop.useState(0);
  const tmp10 = _slicedToArray(noop.useState(0), 2);
  items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(onContainerLayout[9]).useStateFromStores(
    items,
    () => ChannelStore.getChannel(channelId),
    items1,
  );
  const obj5 = channelId(onContainerLayout[9]);
  const isForumChannelSearchActive = channelId(onContainerLayout[10]).useIsForumChannelSearchActive(channelId);
  const obj6 = channelId(onContainerLayout[10]);
  const obj7 = channelId(onContainerLayout[11]);
  const pinotChannelLabelCenter = channelId(onContainerLayout[12]).usePinotChannelLabelCenter(channelId, ref);
  ({ center, onContainerLayout } = pinotChannelLabelCenter);
  [][0] = onContainerLayout;
  if (obj7.usePinotMemberNotice(stateFromStores, "mobile_channel_header").visible) {
    if (!isForumChannelSearchActive) {
      let num = 0;
      if (null != center) {
        num = closure_5.roundToNearestPixel(center - 8);
      }
      if (null != center) {
        const _HermesInternal2 = HermesInternal;
        let combined =
          "M" + tmp18 + " 10" + tmp(tmp2[5]).PINOT_MEMBER_NOTICE_CARET_BORDER.replace(/^M/, "L") + "H" + tmp11 - num;
        const str2 = tmp(tmp2[5]).PINOT_MEMBER_NOTICE_CARET_BORDER;
      } else {
        const _HermesInternal = HermesInternal;
        combined = "M0 10H" + tmp11;
      }
      const _HermesInternal3 = HermesInternal;
      const combined1 = "" + combined + "V" + closure_10 + "H" + -num + "Z";
      const obj9 = {
        ref,
        collapsable: false,
        style: tmp4.anchor,
        pointerEvents: "none",
        onLayout: tmp15,
        children: null,
      };
      const obj10 = { style: tmp4.dividerUnderlay };
      const items2 = [closure_8(closure_6, obj10)];
      const obj11 = { style: tmp4.outline, children: null };
      const size = { width: tmp11, height: roundToNearestPixelResult, fill: "none", accessible: false, children: null };
      const obj12 = { translateX: num, translateY: roundToNearestPixelResult - closure_10, children: null };
      const obj13 = { d: combined1, fill: token };
      const items3 = [closure_8(tmp(tmp2[13]).Path, obj13), ,];
      const obj14 = { d: combined1, fill: token1 };
      items3[1] = closure_8(tmp(tmp2[13]).Path, obj14);
      const obj15 = {
        d: combined,
        fill: "none",
        stroke: token2,
        strokeWidth: tmp(tmp2[5]).PINOT_MEMBER_NOTICE_BORDER_WIDTH,
      };
      items3[2] = closure_8(tmp(tmp2[13]).Path, obj15);
      obj12.children = items3;
      size.children = closure_9(tmp(tmp2[13]).G, obj12);
      obj11.children = closure_8(tmp5(tmp2[13]), size);
      items2[1] = closure_8(closure_6, obj11);
      obj9.children = items2;
      return closure_9(closure_6, obj9);
    }
  }
  return null;
}
