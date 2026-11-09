// === Module 19432: useNativeThemeUpdater ===

// Module 19432 (useNativeThemeUpdater)
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1192 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/themes/native/useNativeThemeUpdater.tsx");

export default function useNativeThemeUpdater() {
  closure_0 = noop.useRef(ThemeStore.theme);
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_0(19433).updateVisualRefresh(true);
  }, []);
  const layoutEffect1 = noop.useLayoutEffect(() => {
    function handleThemeUpdate() {
      const theme = ThemeStore.theme;
      if (theme !== handleThemeUpdate.current) {
        handleThemeUpdate.current = theme;
        handleThemeUpdate(19434).updateTheme(theme);
        const obj = handleThemeUpdate(19434);
      }
    }
    handleThemeUpdate(19434).updateTheme(ThemeStore.theme);
    ThemeStore.addChangeListener(handleThemeUpdate);
    return () => {
      ThemeStore.removeChangeListener(handleThemeUpdate);
    };
  }, []);
};