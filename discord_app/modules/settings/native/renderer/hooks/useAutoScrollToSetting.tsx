// discord_app/modules/settings/native/renderer/hooks/useAutoScrollToSetting.tsx
import noop from "noop";
import zustandStore from "zustandStore";
import { NodeType } from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import { useNavigation } from "../../../../../design/components/Navigator/native/useNavigation.native.tsx";

const require = arg1;
const result = require("GUILD_SELECT_ALL_SERVERS_OPTION_ID").fileFinishedImporting("modules/settings/native/renderer/hooks/useAutoScrollToSetting.tsx");

export const useAutoScrollToSearchResultSetting = function useAutoScrollToSearchResultSetting(ref, memo, scrollTarget) {
  const _require = ref;
  const dependencyMap = memo;
  let current = ref.useField("selected");
  const navigation = _useNavigation.useNavigation();
  ref = navigation.useRef(scrollTarget);
  if (current == null) {
    current = ref.current;
  }
  let flag = false;
  if (null != current) {
    flag = false;
    if (tmp(13954).SETTING_RENDERER_CONFIG[current].type !== current.ROUTE) {
      let initialScrollIndex = tmp(13952).getInitialScrollIndex(current, memo);
      let tmp7 = 0 !== initialScrollIndex;
      if (tmp7) {
        tmp7 = 1 !== initialScrollIndex;
      }
      flag = tmp7;
      const tmpResult = tmp(13952);
    }
  }
  const items = [memo, flag, ref, navigation, current];
  const effect = navigation.useEffect(() => {
    let closure_0 = navigation.addListener("transitionEnd", () => {
      if (closure_5) {
        let obj = ref(outer1_1[4]);
        const initialScrollIndex = obj.getInitialScrollIndex(closure_4, closure_1);
        if (null != initialScrollIndex) {
          if (ref != null) {
            const current = ref.current;
            if (current != null) {
              obj = { index: null, animated: false, viewOffset: 300 };
              obj[0] = initialScrollIndex;
              current.scrollToIndex(obj);
            }
          }
        }
      }
      zustandStore.current = undefined;
    });
    return () => {
      ref();
      ref.setState({ selected: null });
      outer1_3.current = undefined;
    };
  }, items);
};