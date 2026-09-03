// === Module 10885: useNavigatorBackHandler ===

// Module 10885 (useNavigatorBackHandler)
import closure_2 from "noop" /* 19 */;

const require = arg1;
let closure_3 = {};
const result = require("set").fileFinishedImporting("design/components/Navigator/native/useNavigatorBackHandler.native.tsx");

export default function useNavigatorBackHandler() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_3;
  }
  const onBeforeGoBack = tmp.onBeforeGoBack;
  let navigation;
  let React;
  navigation = onBeforeGoBack(navigation[1]).useNavigation();
  React = React.useRef(true);
  const items = [navigation];
  const items1 = [navigation, onBeforeGoBack];
  const onGoBack = React.useCallback(() => {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    closure_2.current = flag;
    navigation.goBack();
  }, items);
  const effect = React.useEffect(() => navigation.addListener("beforeRemove", (data) => {
    closure_0 = data;
    if (ref.current) {
      let isIOSResult = "POP" === data.data.action.type;
      if (isIOSResult) {
        let obj = closure_1_0(closure_1_1[2]);
        isIOSResult = obj.isIOS();
      }
      if (closure_0 != null) {
        if (isIOSResult) {
          obj = { preventable: false };
        } else {
          obj = { preventable: true, preventDefault: null, goBack: null };
          obj[1] = function preventDefault() {
            return data.preventDefault();
          };
          obj[2] = function goBack() {
            return navigation.goBack();
          };
        }
        tmp4(obj);
      }
    }
  }), items1);
  return { onGoBack };
};