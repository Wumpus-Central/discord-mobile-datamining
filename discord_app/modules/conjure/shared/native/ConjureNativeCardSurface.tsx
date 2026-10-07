// discord_app/modules/conjure/shared/native/ConjureNativeCardSurface.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
const obj2 = {
  surface: {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    borderRadius: nativeDefault.radii.md,
    padding: nativeDefault.space.PX_12,
  },
};
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.md,
  padding: nativeDefault.space.PX_12,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/shared/native/ConjureNativeCardSurface.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const cResult = c.c(3);
      children = children.children;
      const tmp2 = closure_4();
      if (cResult[0] === children) {
        if (cResult[1] === tmp2.surface) {
          let tmp3 = cResult[2];
        }
        return tmp3;
      }
      const tmp4 = <View style={tmp2.surface}>{children}</View>;
      cResult[0] = children;
      cResult[1] = tmp2.surface;
      cResult[2] = tmp4;
      tmp3 = tmp4;
    }
  : (children) => <View style={closure_4().surface}>{children.children}</View>;
