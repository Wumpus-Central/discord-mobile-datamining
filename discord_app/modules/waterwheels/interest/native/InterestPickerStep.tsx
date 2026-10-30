// discord_app/modules/waterwheels/interest/native/InterestPickerStep.tsx
import SentryUtilsDefault from "../../../../utils/SentryUtils.native.tsx";
import InterestPickerCatalogs from "InterestPickerCatalogs.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestPickerStep.tsx");

export default function InterestPickerStep(navigation) {
  navigation = navigation.navigation;
  let interestPickerGameList;
  const onComplete = navigation.route.params.onComplete;
  interestPickerGameList = navigation(interestPickerGameList[2]).useInterestPickerGameList("InterestPickerStep");
  let obj = navigation(interestPickerGameList[2]);
  const setPicks = navigation(interestPickerGameList[3]).useInterestPickerPicks().setPicks;
  const items = [interestPickerGameList];
  const memo = setPicks.useMemo(() => {
    let interestPickerCatalog = null;
    if (null != interestPickerGameList) {
      interestPickerCatalog = InterestPickerCatalogs.getInterestPickerCatalog(tmp);
    }
    return interestPickerCatalog;
  }, items);
  setPicks.useRef(false);
  const items1 = [navigation, onComplete, setPicks];
  const callback = setPicks.useCallback((arg0, arg1) => {
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
  }, items1);
  const items2 = [memo, callback];
  const effect = setPicks.useEffect(() => {
    if (null == memo) {
      callback([], true);
    }
  }, items2);
  const items3 = [callback];
  [][0] = callback;
  const callback1 = setPicks.useCallback((arg0) => callback(arg0, false), items3);
  let tmp9 = null;
  if (null != memo) {
    const obj3 = { catalog: memo, title: null, subtitle: null, minSelection: 1, onContinue: null, onSkip: null };
    const intl = tmp(tmp2[7]).intl;
    obj3.title = intl.string(onComplete(tmp2[8])["5MUKTF"]);
    const intl2 = tmp(tmp2[7]).intl;
    obj3.subtitle = intl2.string(onComplete(tmp2[8])["z/57xV"]);
    obj3.onContinue = callback1;
    obj3.onSkip = tmp8;
    tmp9 = memo(onComplete(tmp2[6]), obj3);
    const tmp12 = onComplete(tmp2[6]);
  }
  return tmp9;
}
