// discord_app/modules/settings/native/renderer/hooks/useAutoScrollToSetting.tsx
import closure_2 from "../../../../../../_runtime/00019_noop.js";
import closure_3 from "../../../../user_settings/UserSettingSearchStore.tsx";
import { NodeType } from "../SettingRendererConstants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/settings/native/renderer/hooks/useAutoScrollToSetting.tsx",
);

export const useAutoScrollToSearchResultSetting = function useAutoScrollToSearchResultSetting(ref, memo, scrollTarget) {
  const _require = ref;
  dependencyMap = memo;
  let current = ref.useField("selected");
  const navigation =
    require("../../../../../design/components/Navigator/native/useNavigation.native.tsx").useNavigation();
  ref = navigation.useRef(scrollTarget);
  if (current == null) {
    current = ref.current;
  }
  let flag = false;
  if (null != current) {
    flag = false;
    if (tmp(14238).SETTING_RENDERER_CONFIG[current].type !== current.ROUTE) {
      let initialScrollIndex = tmp(14344).getInitialScrollIndex(current, memo);
      let tmp7 = 0 !== initialScrollIndex;
      if (tmp7) {
        tmp7 = 1 !== initialScrollIndex;
      }
      flag = tmp7;
      const tmpResult = tmp(14344);
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
