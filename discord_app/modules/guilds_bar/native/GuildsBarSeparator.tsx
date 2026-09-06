// === Module 16344: GuildsBarSeparator ===

// Module 16344 (GuildsBarSeparator)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4262 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import NativeViewDefault from "NativeView" /* 5589 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 7073 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 16022 */;
import noop from "module_19" /* 19 */;

require = fn;
function GuildsBarHomeDrawerSeparator(guildItemSize) {
  guildItemSize = guildItemSize.guildItemSize;
  let obj = useHomeDrawerGesture;
  const panelTranslateX = obj.useHomeDrawerState().panelTranslateX;
  const tmp = closure_4(guildItemSize);
  const fn = function n() {
    let obj = { transform: null };
    obj = { scaleX: Math.max(1, (panelTranslateX.get() + guildItemSize) / guildItemSize) };
    const items = [obj];
    obj.transform = items;
    return obj;
  };
  fn.__closure = { panelTranslateX, guildItemSize };
  fn.__workletHash = 7666765056610;
  fn.__initData = __initData;
  const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
  obj = { style: null };
  let items = [tmp.separator, animatedStyle];
  obj.style = items;
  return jsx(ReanimatedNativeViewDefault, { style: null });
}
const jsx = fn(21).jsx;
const createStyles = fn(4560);
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
  let obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp4 = closure_4(token);
  if (obj2.useIsHomeDrawerEnabled()) {
    obj = { guildItemSize: token };
    let tmp5Result = <GuildsBarHomeDrawerSeparator guildItemSize={token} />;
  } else {
    obj = { style: tmp4.separator };
    tmp5Result = jsx(NativeViewDefault, { style: tmp4.separator });
  }
  return tmp5Result;
});