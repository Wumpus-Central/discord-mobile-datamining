// discord_app/modules/user_settings/profiles/native/useHasFinishedPresenting.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let navigation;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_2;
      let first;
      const obj = react2;
      const cResult = obj.c(4);
      const obj2 = useNavigation;
      navigation = obj2.useNavigation();
      [first, closure_2] = react.useState(false);
      if (cResult[0] === first) {
        let tmp5;
        let tmp6;
        if (cResult[1] === navigation) {
          tmp5 = cResult[2];
          tmp6 = cResult[3];
        }
        const effect = react.useEffect(tmp5, tmp6);
        return first;
      }
      const fn = function s() {
        let closure_1;
        let timeout;
        const tmp = timeout;
        if (!tmp) {
          const parent = navigation.getParent();
          let addListenerResult;
          if (parent != null) {
            addListenerResult = parent.addListener("transitionEnd", (data) => {
              if (!data.data.closing) {
                closure_1_2(true);
              }
            });
          }
          navigation = addListenerResult;
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => closure_1_2(true), 500);
          return () => {
            if (navigation != null) {
              tmp();
            }
            clearTimeout(closure_1);
          };
        }
      };
      const items = [navigation, first];
      cResult[0] = first;
      cResult[1] = navigation;
      cResult[2] = fn;
      cResult[3] = items;
      tmp6 = items;
      tmp5 = fn;
    }
  : () => {
      let closure_2;
      let first;
      const obj = useNavigation;
      navigation = obj.useNavigation();
      [first, closure_2] = react.useState(false);
      const items = [navigation, first];
      const effect = react.useEffect(() => {
        let closure_1;
        let timeout;
        const tmp = timeout;
        if (!tmp) {
          const parent = navigation.getParent();
          let addListenerResult;
          if (parent != null) {
            addListenerResult = parent.addListener("transitionEnd", (data) => {
              if (!data.data.closing) {
                closure_1_2(true);
              }
            });
          }
          navigation = addListenerResult;
          const _setTimeout = setTimeout;
          timeout = setTimeout(() => closure_1_2(true), 500);
          return () => {
            if (navigation != null) {
              tmp();
            }
            clearTimeout(closure_1);
          };
        }
      }, items);
      return first;
    };
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/useHasFinishedPresenting.tsx");

export default tmp2;
