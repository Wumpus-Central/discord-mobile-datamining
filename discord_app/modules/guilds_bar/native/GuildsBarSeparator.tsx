// === Module 16286: GuildsBarSeparator ===

// Module 16286 (GuildsBarSeparator)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useToken from "useToken" /* 4580 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import NativeViewDefault from "NativeView" /* 5976 */;
import ReanimatedNativeViewDefault from "ReanimatedNativeView" /* 6570 */;
import useHomeDrawerGesture from "useHomeDrawerGesture" /* 15949 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles((width) => {
  const obj = { separator: size };
  size = { height: 1, width, marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, marginBottom: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN, marginLeft: 12, marginRight: 12, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, transformOrigin: "0% 50%" };
  return obj;
});
const __initData = { code: "function GuildsBarSeparatorTsx1(){const{panelTranslateX,guildItemSize}=this.__closure;return{transform:[{scaleX:Math.max(1,(panelTranslateX.get()+guildItemSize)/guildItemSize)}]};}" };
const __initData2 = { code: "function GuildsBarSeparatorTsx2(){const{panelTranslateX,guildItemSize}=this.__closure;return{transform:[{scaleX:Math.max(1,(panelTranslateX.get()+guildItemSize)/guildItemSize)}]};}" };
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildItemSize) => {
  let obj = react2;
  const cResult = obj.c(3);
  guildItemSize = guildItemSize.guildItemSize;
  const tmp3 = closure_4(guildItemSize);
  const obj2 = useHomeDrawerGesture;
  const panelTranslateX = obj2.useHomeDrawerState().panelTranslateX;
  const fn = function o() {
    let items;
    const obj = { transform: items };
    items = [{ scaleX: Math.max(1, (panelTranslateX.get() + guildItemSize) / guildItemSize) }];
    ({ scaleX: Math.max(1, (panelTranslateX.get() + guildItemSize) / guildItemSize) });
    return obj;
  };
  fn.__closure = { panelTranslateX, guildItemSize };
  fn.__workletHash = 7666765056610;
  fn.__initData = __initData;
  const obj3 = ReanimatedRexport;
  const animatedStyle = obj3.useAnimatedStyle(fn);
  if (cResult[0] === animatedStyle) {
    let tmp5;
    if (cResult[1] === tmp3.separator) {
      tmp5 = cResult[2];
    }
    return tmp5;
  }
  let items = [tmp3.separator, animatedStyle];
  const tmp6 = jsx(ReanimatedNativeViewDefault, { style: items });
  cResult[0] = animatedStyle;
  cResult[1] = tmp3.separator;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : ((guildItemSize) => {
  guildItemSize = guildItemSize.guildItemSize;
  const tmp = closure_4(guildItemSize);
  let obj = useHomeDrawerGesture;
  const panelTranslateX = obj.useHomeDrawerState().panelTranslateX;
  const obj2 = ReanimatedRexport;
  const fn = function n() {
    let items;
    const obj = { transform: items };
    items = [{ scaleX: Math.max(1, (panelTranslateX.get() + guildItemSize) / guildItemSize) }];
    ({ scaleX: Math.max(1, (panelTranslateX.get() + guildItemSize) / guildItemSize) });
    return obj;
  };
  fn.__closure = { panelTranslateX, guildItemSize };
  fn.__workletHash = 14827442386657;
  fn.__initData = __initData2;
  const animatedStyle = obj2.useAnimatedStyle(fn);
  let items = [tmp.separator, animatedStyle];
  return jsx(ReanimatedNativeViewDefault, { style: items });
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp6;
  const obj = react2;
  const cResult = obj.c(4);
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp5 = closure_4(token);
  const obj3 = useHomeDrawerGesture;
  if (obj3.useIsHomeDrawerEnabled()) {
    let tmp9;
    if (cResult[2] !== token) {
      const tmp12 = <closure_7 guildItemSize={token} />;
      cResult[2] = token;
      cResult[3] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[3];
    }
    tmp6 = tmp9;
  } else if (cResult[0] !== tmp5.separator) {
    const tmp8 = jsx(NativeViewDefault, { style: tmp5.separator });
    cResult[0] = tmp5.separator;
    cResult[1] = tmp8;
    tmp6 = tmp8;
  } else {
    tmp6 = cResult[1];
  }
  return tmp6;
}) : (() => {
  let tmp5Result;
  const obj = useToken;
  const token = obj.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
  const tmp4 = closure_4(token);
  const obj2 = useHomeDrawerGesture;
  if (obj2.useIsHomeDrawerEnabled()) {
    tmp5Result = <closure_7 guildItemSize={token} />;
  } else {
    tmp5Result = jsx(NativeViewDefault, { style: tmp4.separator });
  }
  return tmp5Result;
}));
let size = size_mod;
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarSeparator.tsx");

export default memoResult;