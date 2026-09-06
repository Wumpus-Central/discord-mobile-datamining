// discord_app/design/components/Modal/native/ModalFooter.native.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_2 = createStyles.createStyles({
  footer: { flexDirection: "column", paddingVertical: 16, paddingHorizontal: 24 },
});
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalFooter.native.tsx");

export const ModalFooter = function ModalFooter(children) {
  return <View style={closure_2().footer}>{children.children}</View>;
};
