// discord_app/design/components/Modal/native/ModalScreen.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
const obj2 = {
  container: { flex: 1, flexDirection: "column", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
};
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalScreen.native.tsx");

export const ModalScreen = function ModalScreen(children) {
  let backgroundColor = children.backgroundColor;
  const tmp = closure_4();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const style = [tmp.container];
  if (backgroundColor == null) {
    backgroundColor = tmp.container.backgroundColor;
  }
  style[1] = { backgroundColor, paddingLeft: insets.left, paddingRight: insets.right, paddingBottom: insets.bottom };
  return <View style={style}>{children.children}</View>;
};
