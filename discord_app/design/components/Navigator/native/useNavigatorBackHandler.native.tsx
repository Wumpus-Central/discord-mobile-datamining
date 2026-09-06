// === Module 10922: useNavigatorBackHandler ===

// Module 10922 (useNavigatorBackHandler)
import noop from "module_19" /* 19 */;

const require = fn;
let closure_3 = {};
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Navigator/native/useNavigatorBackHandler.native.tsx");

export default function useNavigatorBackHandler() {
  let tmp = arg0;
  if (arg0 === undefined) {
    tmp = closure_3;
  }
  const onBeforeGoBack = tmp.onBeforeGoBack;
  let navigation;
  noop = undefined;
  navigation = onBeforeGoBack(navigation[1]).useNavigation();
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
  const effect = noop.useEffect(() => navigation.addListener("beforeRemove", (data) => {
    if (ref.current) {
      let isIOSResult = "POP" === data.data.action.type;
      if (isIOSResult) {
        let obj = onBeforeGoBack(navigation[2]);
        isIOSResult = obj.isIOS();
      }
      if (data != null) {
        if (isIOSResult) {
          obj = { preventable: false };
        } else {
          obj = {
            preventable: true,
            preventDefault() {
                    return data.preventDefault();
                  },
            goBack() {
                    return navigation.goBack();
                  }
          };
        }
        tmp4(obj);
      }
    }
  }), items1);
  return { onGoBack };
};