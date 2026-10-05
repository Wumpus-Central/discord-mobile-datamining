// discord_app/modules/toast/native/AppToastContainer.tsx
import react2 from "../../../../_runtime/00576_react.js";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import Toast_ToastContainer from "../../../design/mana/components/Toast/ToastContainer.native.tsx";
import QuestHooks from "../../quests/native/QuestHooks.native.tsx";
import useYouBarTotalHeight from "../../main_tabs_v2/native/you_bar/hooks/useYouBarTotalHeight.tsx";
import ToastContainerDefault from "ToastContainer.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let appChrome, bottomInset;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (bottomInset) => {
      const obj = react2;
      const cResult = obj.c(5);
      bottomInset = bottomInset.bottomInset;
      const top = useSafeAreaInsetsDefault().top;
      if (cResult[0] === bottomInset) {
        let tmp4;
        let tmp5;
        if (cResult[1] === top) {
          tmp4 = cResult[2];
        }
        if (cResult[3] !== tmp4) {
          const obj2 = { overlay: true, offset: tmp4 };
          const tmp7 = React3(Toast_ToastContainer.ToastContainer, obj2);
          cResult[3] = tmp4;
          cResult[4] = tmp7;
          tmp5 = tmp7;
        } else {
          tmp5 = cResult[4];
        }
        return tmp5;
      }
      const rect = { top, bottom: bottomInset };
      cResult[0] = bottomInset;
      cResult[1] = top;
      cResult[2] = rect;
      tmp4 = rect;
    }
  : (bottomInset) => {
      bottomInset = bottomInset.bottomInset;
      const top = useSafeAreaInsetsDefault().top;
      const items = [top, bottomInset];
      const offset = react.useMemo(() => {
        const rect = { top, bottom: bottomInset };
        return rect;
      }, items);
      return React3(Toast_ToastContainer.ToastContainer, { overlay: true, offset });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp4;
      const obj = react2;
      const cResult = obj.c(2);
      const obj2 = QuestHooks;
      const mobileQuestDockHeight = obj2.useMobileQuestDockHeight();
      const obj3 = useYouBarTotalHeight;
      const sum = mobileQuestDockHeight + obj3.useYouBarTotalHeight();
      if (cResult[0] !== sum) {
        const obj4 = { bottomInset: sum };
        const tmp7 = React3(closure_7, obj4);
        cResult[0] = sum;
        cResult[1] = tmp7;
        tmp4 = tmp7;
      } else {
        tmp4 = cResult[1];
      }
      return tmp4;
    }
  : () => {
      const obj = QuestHooks;
      const mobileQuestDockHeight = obj.useMobileQuestDockHeight();
      const obj2 = useYouBarTotalHeight;
      const obj3 = { bottomInset: mobileQuestDockHeight + obj2.useYouBarTotalHeight() };
      return React3(closure_7, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (appChrome) => {
      let first;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(3);
      appChrome = appChrome.appChrome;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = React3(ToastContainerDefault, {});
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== (undefined === appChrome || appChrome)) {
        let tmp11Result;
        const items = [first];
        if (undefined === appChrome || appChrome) {
          tmp11Result = React3(closure_8, {});
        } else {
          tmp11Result = React3(closure_7, { bottomInset: 0 });
        }
        const obj2 = { children: items };
        items[1] = tmp11Result;
        const tmp9Result = metroRequire(hasOwnProperty, obj2);
        cResult[1] = undefined === appChrome || appChrome;
        cResult[2] = tmp9Result;
        tmp8 = tmp9Result;
      } else {
        tmp8 = cResult[2];
      }
      return tmp8;
    }
  : (appChrome) => {
      let tmp3Result;
      let flag = appChrome.appChrome;
      if (flag === undefined) {
        flag = true;
      }
      const children = [React3(ToastContainerDefault, {})];
      if (flag) {
        tmp3Result = React3(closure_8, {});
      } else {
        tmp3Result = React3(closure_7, { bottomInset: 0 });
      }
      children[1] = tmp3Result;
      return metroRequire(hasOwnProperty, { children });
    };
const result = size.fileFinishedImporting("modules/toast/native/AppToastContainer.tsx");

export default tmp3;
