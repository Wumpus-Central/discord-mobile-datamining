// discord_app/modules/settings/native/renderer/hooks/useAutoScrollToSetting.tsx
import noop from "../../../../../../_runtime/metro/00019__.js";
import UserSettingSearchStore from "../../../../user_settings/UserSettingSearchStore.tsx";

const require = fn;
const NodeType = fn(11469).NodeType;
const size = fn(2);
const result = size.fileFinishedImporting("modules/settings/native/renderer/hooks/useAutoScrollToSetting.tsx");

export const useAutoScrollToSearchResultSetting = function useAutoScrollToSearchResultSetting(ref, memo, scrollTarget) {
  _require = ref;
  dependencyMap = memo;
  let current = ref.useField("selected");
  const navigation = require("useNavigation").useNavigation();
  ref = navigation.useRef(scrollTarget);
  if (current == null) {
    current = ref.current;
  }
  let flag = false;
  if (null != current) {
    flag = false;
    if (tmp(14584).SETTING_RENDERER_CONFIG[current].type !== current.ROUTE) {
      let initialScrollIndex = tmp(14693).getInitialScrollIndex(current, memo);
      let tmp7 = 0 !== initialScrollIndex;
      if (tmp7) {
        tmp7 = 1 !== initialScrollIndex;
      }
      flag = tmp7;
      const tmpResult = tmp(14693);
    }
  }
  const items = [memo, flag, ref, navigation, current];
  const effect = navigation.useEffect(() => {
    navigation.addListener("transitionEnd", () => {
      if (flag) {
        let obj = ref(closure_1[4]);
        const initialScrollIndex = obj.getInitialScrollIndex(closure_1_4, memo);
        if (null != initialScrollIndex) {
          if (ref != null) {
            current = ref.current;
            if (current != null) {
              obj = { index: initialScrollIndex, animated: false, viewOffset: 300 };
              current.scrollToIndex(obj);
            }
          }
        }
      }
      closure_1_3.current = undefined;
    });
    return () => {
      ref();
      UserSettingSearchStore.setState({ selected: null });
      ref.current = undefined;
    };
  }, items);
};
