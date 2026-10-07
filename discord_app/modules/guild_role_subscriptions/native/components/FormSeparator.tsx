// discord_app/modules/guild_role_subscriptions/native/components/FormSeparator.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = { container: { alignSelf: "stretch" }, margins: { marginTop: 16 }, separator: null };
let size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.separator = size;
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormSeparator.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (style) => {
      const cResult = c.c(9);
      style = style.style;
      const tmp2 = closure_4();
      let margins;
      if (!style.withoutMargins) {
        margins = tmp2.margins;
      }
      if (cResult[0] === style) {
        if (cResult[1] === tmp2.container) {
          if (cResult[2] === margins) {
            let tmp4 = cResult[3];
          }
          if (cResult[4] !== tmp2.separator) {
            const obj2 = { style: tmp2.separator };
            const tmp8 = <View style={tmp2.separator} />;
            cResult[4] = tmp2.separator;
            cResult[5] = tmp8;
            let tmp5 = tmp8;
          } else {
            tmp5 = cResult[5];
          }
          if (cResult[6] === tmp4) {
            if (cResult[7] === tmp5) {
              let tmp9 = cResult[8];
            }
            return tmp9;
          }
          const obj3 = { style: tmp4, children: tmp5 };
          const tmp12 = <View style={tmp4}>{tmp5}</View>;
          cResult[6] = tmp4;
          cResult[7] = tmp5;
          cResult[8] = tmp12;
          tmp9 = tmp12;
        }
      }
      const items = [tmp2.container, margins, style];
      cResult[0] = style;
      cResult[1] = tmp2.container;
      cResult[2] = margins;
      cResult[3] = items;
      tmp4 = items;
    }
  : (arg0) => {
      ({ style, withoutMargins } = arg0);
      const tmp = closure_4();
      const items = [tmp.container, ,];
      let margins;
      if (!withoutMargins) {
        margins = tmp.margins;
      }
      const obj = { style: items, children: <View style={tmp.separator} /> };
      items[1] = margins;
      items[2] = style;
      return (
        <View style={items}>
          <View style={tmp.separator} />
        </View>
      );
    };
