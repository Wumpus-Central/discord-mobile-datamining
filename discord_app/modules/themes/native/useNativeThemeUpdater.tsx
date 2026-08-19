// === Module 16175: useNativeThemeUpdater ===

// Module 16175 (useNativeThemeUpdater)
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import noop from "noop" /* 19 */;
import handleThemeChange from "handleThemeChange" /* 1302 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/themes/native/useNativeThemeUpdater.tsx");

export default function useNativeThemeUpdater() {
  const tmp = useIsMobileVisualRefreshExperimentEnabledDefault("useNativeThemeUpdater");
  closure_0 = tmp;
  importDefault = React.useRef(theme.theme);
  const items = [tmp];
  const layoutEffect = React.useLayoutEffect(() => {
    callback(dependencyMap[3]).updateVisualRefresh(callback);
  }, items);
  const layoutEffect1 = React.useLayoutEffect(() => {
    function handleThemeUpdate(closure_1_2) {
      const theme = closure_1_4.theme;
      if (theme !== ref.current) {
        ref.current = theme;
        handleThemeUpdate(closure_1_2[4]).updateTheme(theme);
        const obj = handleThemeUpdate(closure_1_2[4]);
      }
    }
    callback(dependencyMap[4]).updateTheme(closure_1_4.theme);
    closure_1_4.addChangeListener(handleThemeUpdate);
    return () => {
      closure_2_4.removeChangeListener(handleThemeUpdate);
    };
  }, []);
};