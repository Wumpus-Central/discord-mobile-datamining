// discord_app/design/components/Modal/native/ModalFooter.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../modules/safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5306);
const obj2 = {
  footer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    overflow: "hidden",
    paddingTop: nativeDefault.space.PX_24,
    paddingHorizontal: nativeDefault.space.PX_16,
    borderTopWidth: 1,
    borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  },
  wrapper: { width: "100%", flexDirection: "column", justifyContent: "flex-end" },
};
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalFooter.native.tsx");

export function ModalFooter(children) {
  const tmp = closure_4();
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  const obj = { style: null, children: null };
  items = [
    tmp.footer,
    { marginBottom: -insets.bottom, paddingBottom: Math.max(insets.bottom, nativeDefault.space.PX_16) },
  ];
  obj.style = items;
  obj.children = <View style={tmp.wrapper}>{children.children}</View>;
  return <View style={null}>{null}</View>;
}
