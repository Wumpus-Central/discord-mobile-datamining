// discord_app/modules/app_launcher/native/AppLauncherButtonIcon.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import KeyboardTypes from "../../keyboard/native/KeyboardTypes.tsx";
import useKeyboardTypeDefault from "../../keyboard/native/useKeyboardType.tsx";
import AppsIcon2 from "../../../design/components/Icon/native/redesign/generated/AppsIcon.tsx";
import PlusLargeIcon2 from "../../../design/components/Icon/native/redesign/generated/PlusLargeIcon.tsx";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let style;

let closure_3 = ["style"];
const View = react_native.View;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (style) => {
      let items1;
      let tmp10;
      let tmp12Result;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(8);
      if (cResult[0] !== style) {
        style = style.style;
        const tmp8 = _objectWithoutProperties(style, closure_3);
        cResult[0] = style;
        cResult[1] = tmp8;
        cResult[2] = style;
        tmp5 = style;
        tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const tmp9 = useKeyboardTypeDefault();
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { overflow: "hidden" };
        cResult[3] = obj2;
        tmp10 = obj2;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === tmp9) {
        if (cResult[5] === tmp4) {
          let tmp11;
          if (cResult[6] === tmp5) {
            tmp11 = cResult[7];
          }
          return tmp11;
        }
      }
      if (tmp9 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER) {
        const PlusLargeIcon = PlusLargeIcon2.PlusLargeIcon;
        const merged = Object.assign(tmp4);
        const items = [tmp5];
        const obj5 = { transform: items1 };
        items1 = [{ rotate: "45deg" }];
        items[1] = obj5;
        tmp12Result = <PlusLargeIcon style={items} />;
      } else {
        const AppsIcon = AppsIcon2.AppsIcon;
        const merged1 = Object.assign(tmp4);
        tmp12Result = <AppsIcon style={tmp5} />;
      }
      const tmp12Result2 = <View style={tmp10}>{tmp12Result}</View>;
      cResult[4] = tmp9;
      cResult[5] = tmp4;
      cResult[6] = tmp5;
      cResult[7] = tmp12Result2;
      tmp11 = tmp12Result2;
    }
  : (style) => {
      let items1;
      let tmp4Result;
      style = style.style;
      const merged = Object.assign(style, Object.assign({ style: 0 }));
      const tmp3 = useKeyboardTypeDefault();
      if (tmp3 === KeyboardTypes.KeyboardTypes.APP_LAUNCHER) {
        const PlusLargeIcon = PlusLargeIcon2.PlusLargeIcon;
        const merged1 = Object.assign(merged);
        const items = [style];
        const obj3 = { transform: items1 };
        items1 = [{ rotate: "45deg" }];
        items[1] = obj3;
        tmp4Result = <PlusLargeIcon style={items} />;
      } else {
        const AppsIcon = AppsIcon2.AppsIcon;
        const merged2 = Object.assign(merged);
        tmp4Result = <AppsIcon style={style} />;
      }
      return <View style={{ overflow: "hidden" }}>{tmp4Result}</View>;
    };
const result = size.fileFinishedImporting("modules/app_launcher/native/AppLauncherButtonIcon.tsx");

export const AppLauncherButtonIcon = tmp3;
