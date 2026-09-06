// === Module 16957: useNativeThemeUpdater ===

// Module 16957 (useNativeThemeUpdater)
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1183 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/themes/native/useNativeThemeUpdater.tsx");

export default function useNativeThemeUpdater() {
  closure_0 = noop.useRef(ThemeStore.theme);
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_0(16958).updateVisualRefresh(true);
  }, []);
  const layoutEffect1 = noop.useLayoutEffect(() => {
    function handleThemeUpdate() {
      const theme = ThemeStore.theme;
      if (theme !== handleThemeUpdate.current) {
        handleThemeUpdate.current = theme;
        handleThemeUpdate(16959).updateTheme(theme);
        const obj = handleThemeUpdate(16959);
      }
    }
    handleThemeUpdate(16959).updateTheme(ThemeStore.theme);
    ThemeStore.addChangeListener(handleThemeUpdate);
    return () => {
      ThemeStore.removeChangeListener(handleThemeUpdate);
    };
  }, []);
};