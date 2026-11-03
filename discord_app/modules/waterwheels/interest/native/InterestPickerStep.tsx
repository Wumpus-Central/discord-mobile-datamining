// === Module 19724: InterestPickerStep ===

// Module 19724 (InterestPickerStep)
import SentryUtilsDefault from "SentryUtils" /* 1242 */;
import noop from "module_19" /* 19 */;

const require = fn;
let jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestPickerStep.tsx");

export default function InterestPickerStep(navigation) {
  navigation = navigation.navigation;
  const onComplete = navigation.route.params.onComplete;
  const tmp3 = onComplete(18571)("InterestPickerStep");
  dependencyMap = tmp3;
  const setPicks = navigation(19722).useInterestPickerPicks().setPicks;
  jsx = setPicks.useRef(false);
  items = [navigation, onComplete, setPicks];
  const callback = setPicks.useCallback((gameIds, arg1) => {
    if (!ref.current) {
      tmp.current = true;
      setPicks(gameIds);
      if (null == onComplete) {
        const obj2 = { tags: { reason: "missing_on_complete" } };
        SentryUtilsDefault.captureMessage("waterwheels picker step missing completion callback", obj2);
        navigation.goBack();
      } else {
        tmp5(arg1);
      }
    }
  }, items);
  const items1 = [tmp3, callback];
  const effect = setPicks.useEffect(() => {
    if (null == closure_2) {
      callback([], true);
    }
  }, items1);
  const items2 = [callback];
  [][0] = callback;
  const callback1 = setPicks.useCallback((arg0) => callback(arg0, false), items2);
  let tmp9 = null;
  if (null != tmp3) {
    let obj2 = { catalog: tmp3, title: null, subtitle: null, minSelection: 1, onContinue: null, onSkip: null };
    const intl = tmp4(1113).intl;
    obj2.title = intl.string(tmp(2537)["5MUKTF"]);
    const intl2 = tmp4(1113).intl;
    obj2.subtitle = intl2.string(tmp(2537)["z/57xV"]);
    obj2.onContinue = callback1;
    obj2.onSkip = tmp8;
    tmp9 = jsx(tmp(18575), { catalog: tmp3, title: null, subtitle: null, minSelection: 1, onContinue: null, onSkip: null });
    const tmpResult = tmp(18575);
  }
  return tmp9;
};