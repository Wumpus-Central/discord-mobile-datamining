// discord_app/modules/main_tabs_v2/native/useAppFrame.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import DeviceUtils from "../../../utils/native/DeviceUtils.tsx";
import useChatLayoutDefault from "../../chat/native/useChatLayout.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const StyleSheet = _mod17.StyleSheet;
let closure_4 = createStyles.createStyles((marginTop) => {
  const obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingTop: null };
  let num = 0;
  if (marginTop <= 0) {
    num = nativeDefault.space.PX_16;
  }
  const obj2 = {
    container: obj,
    content: { marginTop, borderTopRightRadius: nativeDefault.radii.md, overflow: "hidden" },
    body: { marginTop: -marginTop },
    border: null,
    topBorder: null,
  };
  obj.paddingTop = num;
  const obj4 = {};
  const merged = Object.assign(StyleSheet.absoluteFillObject);
  obj4.borderTopRightRadius = nativeDefault.radii.md;
  obj4.borderTopWidth = nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj4.borderRightWidth = nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj4.borderColor = nativeDefault.colors.APP_FRAME_BORDER;
  obj2.border = obj4;
  const obj3 = { marginTop, borderTopRightRadius: nativeDefault.radii.md, overflow: "hidden" };
  obj2.topBorder = {
    borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH,
    borderTopColor: nativeDefault.colors.APP_FRAME_BORDER,
  };
  return obj2;
});
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/useAppFrame.tsx");

export default function useAppFrame() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let flag = obj.enabled;
  if (flag === undefined) {
    flag = true;
  }
  const rect = useSafeAreaInsetsDefault();
  let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  ({ container, content, body, border, topBorder } = closure_4(rect.top));
  if (flag) {
    if (!isChatLockedOpen) {
      isChatLockedOpen = DeviceUtils.isDuo();
    }
    flag = isChatLockedOpen;
  }
  if (flag) {
    flag = rect.right > 0;
  }
  const obj3 = { insets: rect, hasFrame: flag, styles: null };
  if (flag) {
    const obj4 = { container, content, body, border, topBorder };
    let obj5 = obj4;
  } else {
    obj5 = {};
  }
  obj3.styles = obj5;
  return obj3;
}
