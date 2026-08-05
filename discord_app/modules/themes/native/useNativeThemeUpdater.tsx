import { useIsMobileVisualRefreshExperimentEnabled } from "../experiments/MobileVisualRefreshExperiment.tsx";
// discord_app/modules/themes/native/useNativeThemeUpdater.tsx
import noop from "noop";
import handleThemeChange from "handleThemeChange";

let require = arg1;
const result = require("useIsMobileVisualRefreshExperimentEnabled").fileFinishedImporting("modules/themes/native/useNativeThemeUpdater.tsx");

export default function useNativeThemeUpdater() {
  const tmp = useIsMobileVisualRefreshExperimentEnabled("useNativeThemeUpdater");
  const require = tmp;
  importDefault = React.useRef(theme.theme);
  const items = [tmp];
  const layoutEffect = React.useLayoutEffect(() => {
    tmp(outer1_2[3]).updateVisualRefresh(tmp);
  }, items);
  const layoutEffect1 = React.useLayoutEffect(() => {
    function handleThemeUpdate(arg0) {
      const theme = outer1_4.theme;
      if (theme !== ref.current) {
        ref.current = theme;
        handleThemeUpdate(outer1_2[4]).updateTheme(theme);
        const obj = handleThemeUpdate(outer1_2[4]);
      }
    }
    tmp(outer1_2[4]).updateTheme(outer1_4.theme);
    outer1_4.addChangeListener(handleThemeUpdate);
    return () => {
      outer2_4.removeChangeListener(handleThemeUpdate);
    };
  }, []);
};