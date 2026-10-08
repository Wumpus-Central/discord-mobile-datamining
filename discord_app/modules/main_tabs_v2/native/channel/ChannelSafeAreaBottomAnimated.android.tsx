// discord_app/modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx
import c from "../../../../../_runtime/00576_c.js";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import useChannelSafeAreaHeightSharedValueDefault from "useChannelSafeAreaHeightSharedValue.android.tsx";
import useChannelSafeAreaBottomStylesDefault from "useChannelSafeAreaBottomStyles.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const __initData = {
  code: "function ChannelSafeAreaBottomAnimatedAndroidTsx1(){const{heightSharedValue}=this.__closure;return{height:heightSharedValue.get()};}",
};
const __initData2 = {
  code: "function ChannelSafeAreaBottomAnimatedAndroidTsx2(){const{heightSharedValue}=this.__closure;return{height:heightSharedValue.get()};}",
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/main_tabs_v2/native/channel/ChannelSafeAreaBottomAnimated.android.tsx",
);

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function ChannelSafeAreaBottom(channelId) {
        const cResult = c.c(5);
        const tmp4 = useChannelSafeAreaHeightSharedValueDefault();
        closure_0 = tmp4;
        const tmp5 = useChannelSafeAreaBottomStylesDefault(channelId.channelId);
        const fn = function n() {
          return { height: closure_0.get() };
        };
        fn.__closure = { heightSharedValue: tmp4 };
        fn.__workletHash = 6491350126069;
        fn.__initData = __initData;
        const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
        if (cResult[0] !== tmp5) {
          const obj3 = { style: null };
          const items = [React3.absoluteFill, tmp5];
          obj3.style = items;
          const tmp11 = <React4 style={null} />;
          cResult[0] = tmp5;
          cResult[1] = tmp11;
          let tmp7 = tmp11;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[2] === animatedStyle) {
          if (cResult[3] === tmp7) {
            let tmp12 = cResult[4];
          }
          return tmp12;
        }
        const tmp13 = jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: tmp7 });
        cResult[2] = animatedStyle;
        cResult[3] = tmp7;
        cResult[4] = tmp13;
        tmp12 = tmp13;
      }
    : function ChannelSafeAreaBottom(channelId) {
        const tmp = useChannelSafeAreaHeightSharedValueDefault();
        closure_0 = tmp;
        const tmp2 = useChannelSafeAreaBottomStylesDefault(channelId.channelId);
        const fn = function n() {
          return { height: closure_0.get() };
        };
        fn.__closure = { heightSharedValue: tmp };
        fn.__workletHash = 15913264108790;
        fn.__initData = __initData2;
        const animatedStyle = ReanimatedRexport.useAnimatedStyle(fn);
        const obj2 = { style: animatedStyle, children: null };
        const obj3 = { style: null };
        const items = [React3.absoluteFill, tmp2];
        obj3.style = items;
        obj2.children = <React4 style={null} />;
        return jsx(ReanimatedRexportDefault.View, { style: animatedStyle, children: null });
      },
);
