// discord_app/modules/guilds_bar/native/GuildsBarSeparator.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../design/tokens/native/useToken.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import NativeViewDefault from "../../core/native/NativeView.tsx";
import ReanimatedNativeViewDefault from "../../core/native/ReanimatedNativeView.tsx";
import useHomeDrawerGesture from "../../home_drawer/native/useHomeDrawerGesture.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let closure_4 = createStyles.createStyles((width) => {
  const obj = { separator: null };
  const size = {
    height: 1,
    width,
    marginTop: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN,
    marginBottom: nativeDefault.modules.mobile.GUILD_BAR_ITEM_MARGIN,
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
    transformOrigin: "0% 50%",
  };
  obj.separator = size;
  return obj;
});
const __initData = {
  code: "function GuildsBarSeparatorTsx1(){const{panelTranslateX,guildItemSize}=this.__closure;return{transform:[{scaleX:Math.max(1,(panelTranslateX.get()+guildItemSize)/guildItemSize)}]};}",
};
const __initData2 = {
  code: "function GuildsBarSeparatorTsx2(){const{panelTranslateX,guildItemSize}=this.__closure;return{transform:[{scaleX:Math.max(1,(panelTranslateX.get()+guildItemSize)/guildItemSize)}]};}",
};
let ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildItemSize) => {
      const cResult = c.c(3);
      guildItemSize = guildItemSize.guildItemSize;
      const tmp3 = closure_4(guildItemSize);
      const panelTranslateX = useHomeDrawerGesture.useHomeDrawerState().panelTranslateX;
      const fn = function o() {
        const obj = { transform: null };
        const items = [{ scaleX: Math.max(1, (panelTranslateX.get() + guildItemSize) / guildItemSize) }];
        obj.transform = items;
        return obj;
      };
      fn.__closure = { panelTranslateX, guildItemSize };
      fn.__workletHash = 7666765056610;
      fn.__initData = __initData;
      const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
      if (cResult[0] === animatedStyle) {
        if (cResult[1] === tmp3.separator) {
          let tmp5 = cResult[2];
        }
        return tmp5;
      }
      const obj4 = { style: null };
      let items = [tmp3.separator, animatedStyle];
      obj4.style = items;
      const tmp6 = jsx(ReanimatedNativeViewDefault, { style: null });
      cResult[0] = animatedStyle;
      cResult[1] = tmp3.separator;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (guildItemSize) => {
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
      fn.__workletHash = 14827442386657;
      fn.__initData = __initData2;
      const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
      const obj3 = { style: null };
      let items = [tmp.separator, animatedStyle];
      obj3.style = items;
      return jsx(ReanimatedNativeViewDefault, { style: null });
    };
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/guilds_bar/native/GuildsBarSeparator.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = c.c(4);
        const token = useToken.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
        const tmp5 = closure_4(token);
        if (obj3.useIsHomeDrawerEnabled()) {
          if (cResult[2] !== token) {
            const obj4 = { guildItemSize: token };
            const tmp12 = <closure_7 guildItemSize={token} />;
            cResult[2] = token;
            cResult[3] = tmp12;
          }
        } else {
          if (cResult[0] !== tmp5.separator) {
            const obj5 = { style: tmp5.separator };
            const tmp8 = jsx(NativeViewDefault, { style: tmp5.separator });
            cResult[0] = tmp5.separator;
            cResult[1] = tmp8;
            let tmp6 = tmp8;
          } else {
            tmp6 = cResult[1];
          }
          return tmp6;
        }
        obj3 = useHomeDrawerGesture;
      }
    : () => {
        const token = useToken.useToken(nativeDefault.modules.mobile.GUILD_BAR_ITEM_SIZE);
        const tmp4 = closure_4(token);
        if (obj2.useIsHomeDrawerEnabled()) {
          const obj3 = { guildItemSize: token };
          let tmp5Result = <closure_7 guildItemSize={token} />;
        } else {
          const obj4 = { style: tmp4.separator };
          tmp5Result = jsx(NativeViewDefault, { style: tmp4.separator });
        }
        return tmp5Result;
      },
);
