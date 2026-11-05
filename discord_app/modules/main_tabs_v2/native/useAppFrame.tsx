// === Module 18336: useAppFrame ===

// Module 18336 (useAppFrame)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import useChatLayoutDefault from "useChatLayout" /* 5327 */;
import createStyles from "createStyles" /* 5143 */;
import size from "module_2" /* 2 */;

const StyleSheet = _mod17.StyleSheet;
let closure_3 = createStyles.createStyles((marginTop) => {
  const obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, paddingTop: null };
  let num = 0;
  if (marginTop <= 0) {
    num = nativeDefault.space.PX_16;
  }
  const obj2 = { container: obj, content: { marginTop, borderTopRightRadius: nativeDefault.radii.md, overflow: "hidden" }, body: { marginTop: -marginTop }, border: null, topBorder: null };
  obj.paddingTop = num;
  const obj4 = {};
  const merged = Object.assign(StyleSheet.absoluteFillObject);
  obj4.borderTopRightRadius = nativeDefault.radii.md;
  obj4.borderTopWidth = nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj4.borderRightWidth = nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH;
  obj4.borderColor = nativeDefault.colors.APP_FRAME_BORDER;
  obj2.border = obj4;
  const obj3 = { marginTop, borderTopRightRadius: nativeDefault.radii.md, overflow: "hidden" };
  obj2.topBorder = { borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: nativeDefault.colors.APP_FRAME_BORDER };
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
  closure_3(rect.top);
  const obj2 = { insets: rect, styles: null };
  if (flag) {
    if (useChatLayoutDefault().isChatLockedOpen) {
      if (rect.right > 0) {
        const obj3 = { container: tmp2, content: tmp3, body: tmp4, border: tmp5, topBorder: tmp6 };
      }
      obj2.styles = {};
      return obj2;
    }
  }
};