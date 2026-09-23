// discord_app/design/void/Form/native/Form.tsx
import RedesignCompat from "../../../components/RedesignCompat/native/RedesignCompat.native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const ScrollView = fn(17).ScrollView;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let closure_6 = createStyles.createStyles({ form: { flex: 1 }, redesign: { paddingTop: 16 } });
const context = noop.createContext({ isForm: false });
const size = fn(2);
const result = size.fileFinishedImporting("design/void/Form/native/Form.tsx");

export default noop.forwardRef((keyboardShouldPersistTaps, ref) => {
  let str = keyboardShouldPersistTaps.keyboardShouldPersistTaps;
  ({ style, children } = keyboardShouldPersistTaps);
  if (str === undefined) {
    str = "never";
  }
  let flag = keyboardShouldPersistTaps.alwaysBounceVertical;
  if (flag === undefined) {
    flag = true;
  }
  ({ contentContainerStyle, onScroll, scrollsToTop, onLayout } = keyboardShouldPersistTaps);
  const tmp = closure_6();
  let redesign = noop.useContext(RedesignCompat.RedesignCompatContext);
  const obj = { value: { isForm: true }, children: null };
  const obj2 = {
    ref,
    onLayout,
    scrollsToTop,
    style: null,
    contentContainerStyle: null,
    contentInset: null,
    automaticallyAdjustContentInsets: false,
    keyboardShouldPersistTaps: null,
    alwaysBounceVertical: null,
    onScroll: null,
    children: null,
  };
  const items = [tmp.form, style];
  if (redesign) {
    redesign = tmp.redesign;
  }
  items[2] = redesign;
  obj2.style = items;
  const items1 = [{ paddingBottom: 38 + useSafeAreaInsetsKeyboardAwareDefault().insets.bottom }, contentContainerStyle];
  obj2.contentContainerStyle = items1;
  obj2.contentInset = { top: 0 };
  obj2.keyboardShouldPersistTaps = str;
  obj2.alwaysBounceVertical = flag;
  obj2.onScroll = onScroll;
  obj2.children = children;
  obj.children = (
    <ScrollView
      ref={ref}
      onLayout={onLayout}
      scrollsToTop={scrollsToTop}
      style={null}
      contentContainerStyle={null}
      contentInset={null}
      automaticallyAdjustContentInsets={false}
      keyboardShouldPersistTaps={null}
      alwaysBounceVertical={null}
      onScroll={null}
    >
      {null}
    </ScrollView>
  );
  return <context.Provider value={{ isForm: true }}>{null}</context.Provider>;
});
export const FormContext = context;
