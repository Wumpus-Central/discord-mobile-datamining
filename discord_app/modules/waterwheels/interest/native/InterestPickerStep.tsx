// === Module 19481: InterestPickerStep ===

// Module 19481 (InterestPickerStep)
import SentryUtilsDefault from "SentryUtils" /* 1241 */;
import noop from "module_19" /* 19 */;

const require = fn;
let jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestPickerStep.tsx");

export default function InterestPickerStep(navigation) {
  navigation = navigation.navigation;
  let onComplete = navigation.route.params.onComplete;
  const interestPickerGameList = navigation(17703).useInterestPickerGameList("InterestPickerStep");
  const tmp4 = onComplete(19482)("InterestPickerStep");
  dependencyMap = tmp4;
  let obj = navigation(17703);
  const tmp3 = onComplete;
  const setPicks = navigation(19479).useInterestPickerPicks().setPicks;
  jsx = setPicks.useRef(false);
  items = [navigation, onComplete, setPicks];
  onComplete = setPicks.useCallback((arg0, arg1) => {
    if (!ref.current) {
      tmp.current = true;
      setPicks(arg0);
      if (null == onComplete) {
        const obj2 = { tags: { reason: "missing_on_complete" } };
        SentryUtilsDefault.captureMessage("waterwheels picker step missing completion callback", obj2);
        navigation.goBack();
      } else {
        tmp5(arg1);
      }
    }
  }, items);
  const items1 = [tmp4, onComplete];
  const effect = setPicks.useEffect(() => {
    if (null == closure_2) {
      callback([], true);
    }
  }, items1);
  let tmp7 = null;
  if (null != tmp4) {
    tmp7 = null;
    if (null != interestPickerGameList) {
      const obj3 = { arm: interestPickerGameList, catalog: tmp4, onComplete };
      tmp7 = jsx(tmp3(19483), { arm: interestPickerGameList, catalog: tmp4, onComplete });
    }
  }
  return tmp7;
};