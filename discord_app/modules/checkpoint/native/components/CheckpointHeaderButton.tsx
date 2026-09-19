// discord_app/modules/checkpoint/native/components/CheckpointHeaderButton.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import CheckpointConstants from "../../CheckpointConstants.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const Pressable = _mod17.Pressable;
const jsx = jsxProd.jsx;
let closure_4 = createStyles.createStyles({
  button: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: CheckpointConstants.CHECKPOINT_PRIMARY,
  },
});
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointHeaderButton.tsx");

export default function CheckpointHeaderButton(arg0) {
  ({ accessibilityLabel, children, onPress } = arg0);
  return (
    <Pressable
      style={closure_4().button}
      hitSlop={nativeDefault.space.PX_8}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
    >
      {children}
    </Pressable>
  );
}
