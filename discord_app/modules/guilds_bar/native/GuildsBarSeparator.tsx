// === Module 16602: GuildsBarSeparator ===

// Module 16602 (GuildsBarSeparator)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4423 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4458 */;
import NativeViewDefault from "NativeView" /* 5759 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7269 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 16279 */;
import noop from "module_19" /* 19 */;

require = fn;
function GuildsBarHomeDrawerSeparator(guildItemSize) {
  guildItemSize = guildItemSize.guildItemSize;
  const tmp = closure_4(guildItemSize);
  const panelTranslateX = useHomeDrawerGesture.useHomeDrawerState().panelTranslateX;
  const fn = function n() {
    const obj = { transform: null };
    const items = [{ scaleX: Math.max(1, (panelTranslateX.get() + guildItemSize) / guildItemSize) }];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { panelTranslateX, guildItemSize };
  fn.__workletHash = 7666765056610;
  fn.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  const obj3 = { style: null };
  let items = [tmp.separator, animatedStyle];
  obj3.style = items;
  return jsx(ReanimatedNativeViewDefault, { style: null });
}
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let closure_4 = createStyles.createStyles((width) => {
  const obj = { separator: null };
  const size = { height: 1, width, marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, marginBottom: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, marginLeft: 12, marginRight: 12, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, transformOrigin: "0% 50%" };
  obj.separator = size;
  return obj;
});
const __initData = { code: "function GuildsBarSeparatorTsx1(){const{panelTranslateX,guildItemSize}=this.__closure;return{transform:[{scaleX:Math.max(1,(panelTranslateX.get()+guildItemSize)/guildItemSize)}]};}" };
let size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarSeparator.tsx");

export default noop.memo(function GuildsBarSeparator() {
  const token = useToken.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp4 = closure_4(token);
  if (obj2.useIsHomeDrawerEnabled()) {
    const obj3 = { guildItemSize: token };
    let tmp5Result = <GuildsBarHomeDrawerSeparator guildItemSize={token} />;
  } else {
    const obj4 = { style: tmp4.separator };
    tmp5Result = jsx(NativeViewDefault, { style: tmp4.separator });
  }
  return tmp5Result;
});