// === Module 15062: useAutoScrollToSearchResultSetting ===

// Module 15062 (useAutoScrollToSearchResultSetting)
import closure_2 from "noop" /* 19 */;
import closure_3 from "zustandStore" /* 13993 */;
import { NodeType } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID" /* 10670 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/settings/native/renderer/hooks/useAutoScrollToSetting.tsx");

export const useAutoScrollToSearchResultSetting = function useAutoScrollToSearchResultSetting(ref, memo, scrollTarget) {
  const _require = ref;
  dependencyMap = memo;
  let current = ref.useField("selected");
  const navigation = _require(1500).useNavigation();
  ref = navigation.useRef(scrollTarget);
  if (current == null) {
    current = ref.current;
  }
  let flag = false;
  if (null != current) {
    flag = false;
    if (tmp(13998).SETTING_RENDERER_CONFIG[current].type !== current.ROUTE) {
      let initialScrollIndex = tmp(13996).getInitialScrollIndex(current, memo);
      let tmp7 = 0 !== initialScrollIndex;
      if (tmp7) {
        tmp7 = 1 !== initialScrollIndex;
      }
      flag = tmp7;
      const tmpResult = tmp(13996);
    }
  }
  const items = [memo, flag, ref, navigation, current];
  const effect = navigation.useEffect(() => {
    closure_0 = navigation.addListener("transitionEnd", () => {
      if (closure_5) {
        let obj = ref(closure_1_1[4]);
        const initialScrollIndex = obj.getInitialScrollIndex(closure_4, closure_1);
        if (null != initialScrollIndex) {
          if (ref != null) {
            current = ref.current;
            if (current != null) {
              obj = { index: null, animated: false, viewOffset: 300 };
              obj[0] = initialScrollIndex;
              current.scrollToIndex(obj);
            }
          }
        }
      }
      closure_3.current = undefined;
    });
    return () => {
      ref();
      ref.setState({ selected: null });
      closure_1_3.current = undefined;
    };
  }, items);
};