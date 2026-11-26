// === Module 19329: useNativeThemeUpdater ===

// Module 19329 (useNativeThemeUpdater)
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1191 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/themes/native/useNativeThemeUpdater.tsx");

export default function useNativeThemeUpdater() {
  closure_0 = noop.useRef(ThemeStore.theme);
  const layoutEffect = noop.useLayoutEffect(() => {
    closure_0(19330).updateVisualRefresh(true);
  }, []);
  const layoutEffect1 = noop.useLayoutEffect(() => {
    function handleThemeUpdate() {
      const theme = ThemeStore.theme;
      if (theme !== handleThemeUpdate.current) {
        handleThemeUpdate.current = theme;
        handleThemeUpdate(19331).updateTheme(theme);
        const obj = handleThemeUpdate(19331);
      }
    }
    handleThemeUpdate(19331).updateTheme(ThemeStore.theme);
    ThemeStore.addChangeListener(handleThemeUpdate);
    return () => {
      ThemeStore.removeChangeListener(handleThemeUpdate);
    };
  }, []);
};