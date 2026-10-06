// discord_app/modules/conversations/components/native/ConversationPreviewSkeleton.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import ConversationConstants from "../../ConversationConstants.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, set;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let size1;
let View = react_native.View;
let closure_5 = ConversationConstants.MOBILE_PREVIEW_MESSAGE_COUNT;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, rowSpacing: obj3, avatar: size, lines: obj4, lineName: size1, lineText: obj5 };
obj2 = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_4,
};
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_26 };
size = {
  width: 24,
  height: 24,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
obj4 = { flex: 1, gap: nativeDefault.space.PX_4 };
size1 = {
  height: 10,
  width: "35%",
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
obj5 = {
  height: 10,
  borderRadius: nativeDefault.radii.xs,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
};
let closure_8 = createStyles(obj);
const __initData = {
  code: "function ConversationPreviewSkeletonTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
const __initData2 = {
  code: "function ConversationPreviewSkeletonTsx2(){const{opacity}=this.__closure;return{opacity:opacity.get()};}",
};
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let row;
      let tmp10;
      let tmp6;
      let tmp7;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(8);
      let tmp4 = closure_8();
      _require = tmp4;
      let obj2 = require("ReanimatedRexport");
      const sharedValue = obj2.useSharedValue(0.4);
      if (cResult[0] !== sharedValue) {
        const fn = function s() {
          set = sharedValue.set;
          const withRepeat = ReanimatedRexport.withRepeat;
          ReanimatedRexport;
          const obj = timing;
          const result = set(withRepeat(obj.withTiming(1, { duration: 700 }), -1, true));
        };
        let items = [sharedValue];
        cResult[0] = sharedValue;
        cResult[1] = fn;
        cResult[2] = items;
        tmp7 = items;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
      }
      const effect = react.useEffect(tmp6, tmp7);
      const fn2 = function v() {
        const obj = { opacity: sharedValue.get() };
        return obj;
      };
      fn2.__closure = { opacity: sharedValue };
      fn2.__workletHash = 11432452203963;
      fn2.__initData = __initData;
      const tmpResult = tmp(4618);
      const animatedStyle = tmpResult.useAnimatedStyle(fn2);
      if (cResult[3] !== tmp4) {
        const _Array = Array;
        let obj3 = { length: closure_5 };
        const arr = Array.from(obj3, (arg0, id) => {
          let items1;
          let items2;
          const items = [row.row];
          const obj = { style: items, children: items1 };
          const tmp4 = id > 0 && row.rowSpacing;
          items[1] = tmp4;
          items1 = [,];
          const obj2 = { style: row.avatar };
          items1[0] = metroRequire(View, obj2);
          const obj3 = { style: row.lines, children: items2 };
          items2 = [,];
          const obj4 = { style: row.lineName };
          items2[0] = metroRequire(View, obj4);
          const obj5 = { style: row.lineText };
          items2[1] = metroRequire(View, obj5);
          items1[1] = metroImportDefault(View, obj3);
          return metroImportDefault(View, obj, id);
        });
        cResult[3] = tmp4;
        cResult[4] = arr;
        tmp10 = arr;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] === animatedStyle) {
        let tmp14;
        if (cResult[6] === tmp10) {
          tmp14 = cResult[7];
        }
        return tmp14;
      }
      const tmp15 = closure_6(sharedValue(4618).View, { style: animatedStyle, "aria-hidden": true, children: tmp10 });
      cResult[5] = animatedStyle;
      cResult[6] = tmp10;
      cResult[7] = tmp15;
      tmp14 = tmp15;
    }
  : () => {
      let obj4;
      let row;
      _require = closure_8();
      let obj = require("ReanimatedRexport");
      const sharedValue = obj.useSharedValue(0.4);
      let items = [sharedValue];
      const effect = react.useEffect(() => {
        set = sharedValue.set;
        const withRepeat = ReanimatedRexport.withRepeat;
        ReanimatedRexport;
        const obj = timing;
        const result = set(withRepeat(obj.withTiming(1, { duration: 700 }), -1, true));
      }, items);
      let obj2 = require("ReanimatedRexport");
      const fn = function y() {
        const obj = { opacity: sharedValue.get() };
        return obj;
      };
      fn.__closure = { opacity: sharedValue };
      fn.__workletHash = 8310335020248;
      fn.__initData = __initData2;
      const animatedStyle = obj2.useAnimatedStyle(fn);
      let obj3 = {
        style: animatedStyle,
        "aria-hidden": true,
        children: Array.from(obj4, (arg0, id) => {
          let items1;
          let items2;
          const items = [row.row];
          const obj = { style: items, children: items1 };
          const tmp4 = id > 0 && row.rowSpacing;
          items[1] = tmp4;
          items1 = [,];
          const obj2 = { style: row.avatar };
          items1[0] = metroRequire(View, obj2);
          const obj3 = { style: row.lines, children: items2 };
          items2 = [,];
          const obj4 = { style: row.lineName };
          items2[0] = metroRequire(View, obj4);
          const obj5 = { style: row.lineText };
          items2[1] = metroRequire(View, obj5);
          items1[1] = metroImportDefault(View, obj3);
          return metroImportDefault(View, obj, id);
        }),
      };
      obj4 = { length: closure_5 };
      View = sharedValue(4618).View;
      return closure_6(View, obj3);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/conversations/components/native/ConversationPreviewSkeleton.tsx");

export default tmp4;
