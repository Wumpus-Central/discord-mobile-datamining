// discord_app/modules/waterwheels/interest/native/InterestPickerStep.tsx
import SentryUtilsDefault from "../../../../utils/SentryUtils.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
let jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestPickerStep.tsx");

export default function InterestPickerStep(navigation) {
  navigation = navigation.navigation;
  let onComplete = navigation.route.params.onComplete;
  const tmp3 = onComplete(18666)("InterestPickerStep");
  dependencyMap = tmp3;
  const setPicks = navigation(19827).useInterestPickerPicks().setPicks;
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
  const items1 = [tmp3, onComplete];
  const effect = setPicks.useEffect(() => {
    if (null == closure_2) {
      callback([], true);
    }
  }, items1);
  let tmp6 = null;
  if (null != tmp3) {
    let obj2 = { catalog: tmp3, onComplete };
    tmp6 = jsx(onComplete(19830), { catalog: tmp3, onComplete });
  }
  return tmp6;
}
