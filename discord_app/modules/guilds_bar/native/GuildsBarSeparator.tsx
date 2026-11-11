// === Module 18969: GuildsBarSeparator ===

// Module 18969 (GuildsBarSeparator)
import nativeDefault from "native" /* 575 */;
import _mod1652 from "module_1652" /* 1652 */;
import useToken from "useToken" /* 5839 */;
import NativeViewDefault from "NativeView" /* 7656 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 18618 */;
import noop from "module_19" /* 19 */;

const _modDef1652 = _mod1652;

require = fn;
function GuildsBarHomeDrawerSeparator(guildItemSize) {
  guildItemSize = guildItemSize.guildItemSize;
  const tmp = closure_4(guildItemSize);
  const token = useToken.useToken(nativeDefault.colors.BORDER_SUBTLE);
  const obj2 = useHomeDrawerGesture;
  items = [closure_5, token, obj2.useHomeDrawerState().panelTranslateX, guildItemSize];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  [tmp5, tmp6, tmp7, tmp8] = items;
  class GuildsBarSeparatorTsx1 {
    constructor() {
      obj = { backgroundColor: closure_0, transform: null };
      obj1 = { scaleX: Math.max(1, (closure_1.get() + closure_2) / closure_2) };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  const items1 = [tmp6, tmp7, tmp8];
  GuildsBarSeparatorTsx1.__closure = items1;
  GuildsBarSeparatorTsx1.__workletHash = 17321522248050;
  GuildsBarSeparatorTsx1.__initData = tmp5;
  const animatedStyle = _mod1652.useAnimatedStyle(GuildsBarSeparatorTsx1);
  const obj4 = { style: null };
  const items2 = [tmp.separator, animatedStyle];
  obj4.style = items2;
  return jsx(_modDef1652.View, { style: null });
}
const jsx = fn(21).jsx;
const createStyles = fn(5243);
let closure_4 = createStyles.createStyles((width) => {
  const obj = { separator: null };
  const size = { height: 1, width, marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, marginBottom: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, marginLeft: 12, marginRight: 12, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, transformOrigin: "0% 50%" };
  obj.separator = size;
  return obj;
});
let closure_5 = { code: "(function GuildsBarSeparatorTsx1(){let[separatorColor,panelTranslateX,guildItemSize]=this.__closure;return{backgroundColor:separatorColor,transform:[{scaleX:Math.max(1,(panelTranslateX.get()+guildItemSize)/guildItemSize)}]};})" };
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