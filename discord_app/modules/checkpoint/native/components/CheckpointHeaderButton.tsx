// discord_app/modules/checkpoint/native/components/CheckpointHeaderButton.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const Pressable = fn(17).Pressable;
const CHECKPOINT_PRIMARY = fn(6015).CHECKPOINT_PRIMARY;
const jsx = fn(21).jsx;
const createStyles = fn(4971);
let closure_7 = createStyles.createStyles({
  button: { width: 32, height: 32, alignItems: "center", justifyContent: "center", borderWidth: 1 },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/CheckpointHeaderButton.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function CheckpointHeaderButton(arg0) {
      const cResult = c.c(10);
      ({ accessibilityLabel, children, onPress, color } = arg0);
      if (undefined === color) {
        color = CHECKPOINT_PRIMARY;
      }
      const tmp3 = closure_7();
      if (cResult[0] !== color) {
        const obj2 = { borderColor: color };
        cResult[0] = color;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === tmp4) {
        if (cResult[3] === tmp3.button) {
          let tmp5 = cResult[4];
        }
        if (cResult[5] === accessibilityLabel) {
          if (cResult[6] === children) {
            if (cResult[7] === onPress) {
              if (cResult[8] === tmp5) {
                let tmp6 = cResult[9];
              }
              return tmp6;
            }
          }
        }
        const obj3 = {
          style: tmp5,
          hitSlop: nativeDefault.space.PX_8,
          onPress,
          accessibilityRole: "button",
          accessibilityLabel,
          children,
        };
        const tmp10 = (
          <Pressable
            style={tmp5}
            hitSlop={nativeDefault.space.PX_8}
            onPress={onPress}
            accessibilityRole="button"
            accessibilityLabel={accessibilityLabel}
          >
            {children}
          </Pressable>
        );
        cResult[5] = accessibilityLabel;
        cResult[6] = children;
        cResult[7] = onPress;
        cResult[8] = tmp5;
        cResult[9] = tmp10;
        tmp6 = tmp10;
      }
      const items = [tmp3.button, tmp4];
      cResult[2] = tmp4;
      cResult[3] = tmp3.button;
      cResult[4] = items;
      tmp5 = items;
    }
  : function CheckpointHeaderButton(color) {
      color = color.color;
      ({ accessibilityLabel, children, onPress } = color);
      if (color === undefined) {
        color = CHECKPOINT_PRIMARY;
      }
      const items = [color];
      const obj = {
        style: null,
        hitSlop: null,
        onPress: null,
        accessibilityRole: "button",
        accessibilityLabel: null,
        children: null,
      };
      const items1 = [closure_7().button, noop.useMemo(() => ({ borderColor: color }), items)];
      obj.style = items1;
      obj.hitSlop = nativeDefault.space.PX_8;
      obj.onPress = onPress;
      obj.accessibilityLabel = accessibilityLabel;
      obj.children = children;
      return (
        <Pressable style={null} hitSlop={null} onPress={null} accessibilityRole="button" accessibilityLabel={null}>
          {null}
        </Pressable>
      );
    };
