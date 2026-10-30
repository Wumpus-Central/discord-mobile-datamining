// discord_app/modules/user_settings/premium/native/useScrollToSection.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/premium/native/useScrollToSection.tsx");

export default function useScrollToSection(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  closure_2 = noop.useRef(false);
  let obj = { createSectionLayoutHandler: null };
  const items = [arg1, arg0];
  obj.createSectionLayoutHandler = noop.useCallback(
    (arg0) => (nativeEvent) => {
      let current = ref !== closure_1;
      if (!current) {
        current = ref2.current;
      }
      if (!current) {
        ref2.current = true;
        const current2 = ref.current;
        if (current2 != null) {
          const obj = { y: nativeEvent.nativeEvent.layout.y, animated: true };
          current2.scrollTo(obj);
        }
      }
    },
    items,
  );
  return obj;
}
