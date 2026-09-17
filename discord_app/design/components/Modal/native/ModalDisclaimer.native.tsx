// discord_app/design/components/Modal/native/ModalDisclaimer.native.tsx
import Text_Text from "../../Text/native/Text.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let closure_4 = createStyles.createStyles({
  container: { flexDirection: "column", alignItems: "center" },
  disclaimer: { marginBottom: 12 },
});
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Modal/native/ModalDisclaimer.native.tsx");

export const ModalDisclaimer = function ModalDisclaimer(children) {
  const tmp = closure_4();
  const obj = {
    style: tmp.container,
    children: jsx(Text_Text.Text, {
      variant: "text-xs/medium",
      color: "text-muted",
      style: tmp.disclaimer,
      children: children.children,
    }),
  };
  return (
    <View style={tmp.container}>
      {jsx(Text_Text.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        style: tmp.disclaimer,
        children: children.children,
      })}
    </View>
  );
};
