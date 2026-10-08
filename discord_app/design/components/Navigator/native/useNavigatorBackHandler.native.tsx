// discord_app/design/components/Navigator/native/useNavigatorBackHandler.native.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
let closure_3 = {};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigatorBackHandler.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useNavigatorBackHandler(arg0) {
      let tmp = arg0;
      const cResult = onBeforeGoBack(navigation[2]).c(8);
      if (undefined === arg0) {
        tmp = closure_3;
      }
      onBeforeGoBack = tmp.onBeforeGoBack;
      let obj = onBeforeGoBack(navigation[2]);
      navigation = onBeforeGoBack(navigation[3]).useNavigation();
      noop = noop.useRef(true);
      if (cResult[0] !== navigation) {
        const fn = function o(arg0) {
          closure_2.current = undefined !== arg0 && arg0;
          navigation.goBack();
        };
        cResult[0] = navigation;
        cResult[1] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === navigation) {
        if (cResult[3] === onBeforeGoBack) {
          let tmp7 = cResult[4];
          let tmp8 = cResult[5];
        }
        const effect = noop.useEffect(tmp7, tmp8);
        if (cResult[6] !== tmp6) {
          let obj2 = { onGoBack: tmp6 };
          cResult[6] = tmp6;
          cResult[7] = obj2;
          let tmp10 = obj2;
        } else {
          tmp10 = cResult[7];
        }
        return tmp10;
      }
      const fn2 = function s() {
        return navigation.addListener("beforeRemove", (data) => {
          if (ref.current) {
            let isIOSResult = "POP" === data.data.action.type;
            if (isIOSResult) {
              isIOSResult = onBeforeGoBack(navigation[4]).isIOS();
              const obj = onBeforeGoBack(navigation[4]);
            }
            if (data != null) {
              if (isIOSResult) {
                let obj2 = { preventable: false };
              } else {
                obj2 = {
                  preventable: true,
                  preventDefault() {
                    return data.preventDefault();
                  },
                  goBack() {
                    return navigation.goBack();
                  },
                };
              }
              tmp4(obj2);
            }
          }
        });
      };
      const items = [navigation, onBeforeGoBack];
      cResult[2] = navigation;
      cResult[3] = onBeforeGoBack;
      cResult[4] = fn2;
      cResult[5] = items;
      tmp8 = items;
      tmp7 = fn2;
    }
  : function useNavigatorBackHandler() {
      let tmp = arg0;
      if (arg0 === undefined) {
        tmp = closure_3;
      }
      const onBeforeGoBack = tmp.onBeforeGoBack;
      let navigation;
      noop = undefined;
      navigation = onBeforeGoBack(navigation[3]).useNavigation();
      noop = noop.useRef(true);
      const items = [navigation];
      const items1 = [navigation, onBeforeGoBack];
      const onGoBack = noop.useCallback(() => {
        let flag = arg0;
        if (arg0 === undefined) {
          flag = false;
        }
        closure_2.current = flag;
        navigation.goBack();
      }, items);
      const effect = noop.useEffect(
        () =>
          navigation.addListener("beforeRemove", (data) => {
            if (ref.current) {
              let isIOSResult = "POP" === data.data.action.type;
              if (isIOSResult) {
                isIOSResult = onBeforeGoBack(navigation[4]).isIOS();
                const obj = onBeforeGoBack(navigation[4]);
              }
              if (data != null) {
                if (isIOSResult) {
                  let obj2 = { preventable: false };
                } else {
                  obj2 = {
                    preventable: true,
                    preventDefault() {
                      return data.preventDefault();
                    },
                    goBack() {
                      return navigation.goBack();
                    },
                  };
                }
                tmp4(obj2);
              }
            }
          }),
        items1,
      );
      return { onGoBack };
    };
