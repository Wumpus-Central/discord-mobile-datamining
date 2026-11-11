// discord_app/modules/pinot/native/PinotMemberNoticeHeaderArrow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import inlineStylesDefault from "../../../../_runtime/08197_inlineStyles.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5243);
let closure_8 = createStyles.createStyles({
  anchor: { position: "absolute", top: 0, right: 0, bottom: 0, left: 0, zIndex: 1, overflow: "visible" },
  arrow: { position: "absolute", bottom: -1, width: 16, height: 10, overflow: "hidden" },
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/pinot/native/PinotMemberNoticeHeaderArrow.tsx");

export function PinotMemberNoticeHeaderArrow(channelId) {
  channelId = channelId.channelId;
  const tmp = closure_8();
  const token = channelId(5839).useToken(nativeDefault.colors.BACKGROUND_BASE_LOWER);
  const obj = channelId(5839);
  const token1 = channelId(5839).useToken(nativeDefault.colors.BACKGROUND_FEEDBACK_MOD_INFO);
  const obj2 = channelId(5839);
  const token2 = channelId(5839).useToken(nativeDefault.colors.BORDER_SUBTLE);
  const ref = noop.useRef(null);
  const obj3 = channelId(5839);
  items = [ChannelStore];
  const items1 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items, () => ChannelStore.getChannel(channelId), items1);
  const obj4 = channelId(504);
  const isForumChannelSearchActive = channelId(12262).useIsForumChannelSearchActive(channelId);
  const obj5 = channelId(12262);
  const obj6 = channelId(12242);
  const pinotChannelLabelCenter = channelId(12251).usePinotChannelLabelCenter(channelId, ref);
  const center = pinotChannelLabelCenter.center;
  let tmp15Result2 = null;
  if (obj6.usePinotMemberNotice(stateFromStores, "mobile_channel_header").visible) {
    tmp15Result2 = null;
    if (!isForumChannelSearchActive) {
      tmp15Result2 = null;
      if (tmp12) {
        const obj8 = {
          ref,
          collapsable: false,
          style: tmp.anchor,
          pointerEvents: "none",
          onLayout: tmp13,
          children: null,
        };
        let tmp15Result = null;
        if (null != center) {
          const obj9 = { style: null, children: null };
          const items2 = [tmp.arrow];
          const obj10 = { left: center - 8 };
          items2[1] = obj10;
          obj9.style = items2;
          const size = { width: 16, height: 10, viewBox: "0 0 16 10", fill: "none", accessible: false, children: null };
          const obj11 = { d: tmp2(12264).PINOT_MEMBER_NOTICE_CARET_FILL, fill: token };
          const items3 = [closure_6(tmp2(8197).Path, obj11), ,];
          const obj12 = { d: tmp2(12264).PINOT_MEMBER_NOTICE_CARET_FILL, fill: token1 };
          items3[1] = closure_6(tmp2(8197).Path, obj12);
          const obj13 = { d: tmp2(12264).PINOT_MEMBER_NOTICE_CARET_BORDER, fill: "none", stroke: token2 };
          items3[2] = closure_6(tmp2(8197).Path, obj13);
          size.children = items3;
          obj9.children = closure_7(inlineStylesDefault, size);
          tmp15Result = closure_6(View, obj9);
          const tmp4Result = inlineStylesDefault;
        }
        obj8.children = tmp15Result;
        tmp15Result2 = closure_6(View, obj8);
      }
    }
  }
  return tmp15Result2;
}
