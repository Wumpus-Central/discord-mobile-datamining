// === Module 19844: InterestPickerFlow ===

// Module 19844 (InterestPickerFlow)
import util from "util" /* 1113 */;
import _modDef2537 from "module_2537" /* 2537 */;
import useNavigatorBackPressHandler from "useNavigatorBackPressHandler" /* 7145 */;
import InterestGamePickerDefault from "InterestGamePicker" /* 18684 */;
import InterestPickerPicksContext from "InterestPickerPicksContext" /* 19841 */;
import InterestGuildsAPI from "InterestGuildsAPI" /* 19845 */;
import useInterestGuildJoinsDefault from "useInterestGuildJoins" /* 19847 */;
import InterestGuildRecommendationsDefault from "InterestGuildRecommendations" /* 19849 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestPickerFlow.tsx");

export default function InterestPickerFlow(onComplete) {
  onComplete = onComplete.onComplete;
  first = undefined;
  closure_4 = undefined;
  const interestPickerPicks = InterestPickerPicksContext.useInterestPickerPicks();
  const getPicks = interestPickerPicks.getPicks;
  const setPicks = interestPickerPicks.setPicks;
  [first, closure_4] = noop.useState("picker");
  const first1 = _slicedToArray(noop.useState(InterestGuildsAPI.createInterestGuildsResource), 1)[0];
  noop.useRef(false);
  items = [first1];
  const effect = noop.useEffect(() => () => first1.dispose(), items);
  const tmp8 = useInterestGuildJoinsDefault();
  useNavigatorBackPressHandler.useNavigatorBackPressHandler(() => {
    let flag = "guilds" === first;
    if (flag) {
      closure_4("picker");
      flag = true;
    }
    return flag;
  });
  if ("guilds" === first) {
    const obj3 = {
      gameIds: getPicks(),
      resource: first1,
      joins: tmp8,
      onBack() {
          return closure_4("picker");
        },
      onComplete() {
          const tmp = getPicks();
          if (!ref.current) {
            tmp2.current = true;
            setPicks(tmp);
            first1.dispose();
            onComplete(tmp, false);
          }
        }
    };
    let tmp13 = jsx(InterestGuildRecommendationsDefault, {
      gameIds: getPicks(),
      resource: first1,
      joins: tmp8,
      onBack() {
          return closure_4("picker");
        },
      onComplete() {
          const tmp = getPicks();
          if (!ref.current) {
            tmp2.current = true;
            setPicks(tmp);
            first1.dispose();
            onComplete(tmp, false);
          }
        }
    });
    const tmp7Result = InterestGuildRecommendationsDefault;
  } else {
    const obj4 = { catalog: onComplete.catalog, title: null, subtitle: null, minSelection: 1, initialSelection: null, onContinue: null, onSkip: null };
    const intl = util.intl;
    obj4.title = intl.string(_modDef2537["5MUKTF"]);
    const intl2 = util.intl;
    obj4.subtitle = intl2.string(_modDef2537["z/57xV"]);
    obj4.initialSelection = getPicks();
    obj4.onContinue = function onContinue(arg0) {
      setPicks(arg0);
      first1.setPicks(arg0);
      closure_4("guilds");
    };
    obj4.onSkip = function onSkip(arg0) {
      if (!ref.current) {
        tmp.current = true;
        setPicks(arg0);
        first1.dispose();
        onComplete(arg0, true);
      }
    };
    tmp13 = jsx(InterestGamePickerDefault, { catalog: onComplete.catalog, title: null, subtitle: null, minSelection: 1, initialSelection: null, onContinue: null, onSkip: null });
    const tmp7Result2 = InterestGamePickerDefault;
  }
  return tmp13;
};