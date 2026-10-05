// === Module 10660: useNavigatorBackHandler ===

// Module 10660 (useNavigatorBackHandler)
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let react = react_mod;
let closure_3 = {};
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_2;
  let onBeforeGoBack;
  let tmp6;
  let tmp = arg0;
  let obj = onBeforeGoBack(navigation[2]);
  const cResult = obj.c(8);
  const tmp2 = onBeforeGoBack;
  const tmp3 = navigation;
  if (undefined === arg0) {
    tmp = closure_3;
  }
  onBeforeGoBack = tmp.onBeforeGoBack;
  const tmp2Result = tmp2(tmp3[3]);
  navigation = tmp2Result.useNavigation();
  const obj3 = react;
  react = react.useRef(true);
  if (cResult[0] !== navigation) {
    const fn = function o(arg0) {
      const tmp = undefined !== arg0 && arg0;
      closure_2.current = tmp;
      navigation.goBack();
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === navigation) {
    let tmp7;
    let tmp8;
    let tmp10;
    if (cResult[3] === onBeforeGoBack) {
      tmp7 = cResult[4];
      tmp8 = cResult[5];
    }
    const effect = obj3.useEffect(tmp7, tmp8);
    if (cResult[6] !== tmp6) {
      let obj2 = { onGoBack: tmp6 };
      cResult[6] = tmp6;
      cResult[7] = obj2;
      tmp10 = obj2;
    } else {
      tmp10 = cResult[7];
    }
    return tmp10;
  }
  const fn2 = function s() {
    let ref;
    return navigation.addListener("beforeRemove", (data) => {
      if (ref.current) {
        let isIOSResult = "POP" === data.data.action.type;
        if (isIOSResult) {
          const obj = onBeforeGoBack(navigation[4]);
          isIOSResult = obj.isIOS();
        }
        if (data != null) {
          let obj2;
          if (isIOSResult) {
            obj2 = { preventable: false };
          } else {
            obj2 = {
              preventable: true,
              preventDefault() {
                      return data.preventDefault();
                    },
              goBack() {
                      return navigation.goBack();
                    }
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
}) : (() => {
  let closure_2;
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_3;
  }
  const onBeforeGoBack = tmp.onBeforeGoBack;
  navigation = undefined;
  react = undefined;
  let obj = onBeforeGoBack(navigation[3]);
  navigation = obj.useNavigation();
  react = react.useRef(true);
  const items = [navigation];
  const items1 = [navigation, onBeforeGoBack];
  const onGoBack = react.useCallback(() => {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    closure_2.current = flag;
    navigation.goBack();
  }, items);
  const effect = react.useEffect(() => {
    let ref;
    return navigation.addListener("beforeRemove", (data) => {
      if (ref.current) {
        let isIOSResult = "POP" === data.data.action.type;
        if (isIOSResult) {
          const obj = onBeforeGoBack(navigation[4]);
          isIOSResult = obj.isIOS();
        }
        if (data != null) {
          let obj2;
          if (isIOSResult) {
            obj2 = { preventable: false };
          } else {
            obj2 = {
              preventable: true,
              preventDefault() {
                      return data.preventDefault();
                    },
              goBack() {
                      return navigation.goBack();
                    }
            };
          }
          tmp4(obj2);
        }
      }
    });
  }, items1);
  return { onGoBack };
});
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigatorBackHandler.native.tsx");

export default tmp2;