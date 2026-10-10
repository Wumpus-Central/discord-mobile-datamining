// discord_app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSeparator.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: c2 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(5092);
let obj = { container: { height: PX_12 }, separator: null };
let obj3 = { backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: StyleSheet.hairlineWidth };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.top = undefined;
obj.separator = obj3;
let closure_4 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemSeparator.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function MessagesItemSeperator() {
        const cResult = c.c(5);
        const tmp2 = closure_4();
        if (cResult[0] !== tmp2.separator) {
          const obj2 = { style: tmp2.separator };
          const tmp6 = <React2 style={tmp2.separator} />;
          cResult[0] = tmp2.separator;
          cResult[1] = tmp6;
          let tmp3 = tmp6;
        } else {
          tmp3 = cResult[1];
        }
        if (cResult[2] === tmp2.container) {
          if (cResult[3] === tmp3) {
            let tmp7 = cResult[4];
          }
          return tmp7;
        }
        const tmp8 = (
          <React2 style={tmp2.container} collapsable={false}>
            {tmp3}
          </React2>
        );
        cResult[2] = tmp2.container;
        cResult[3] = tmp3;
        cResult[4] = tmp8;
        tmp7 = tmp8;
        const obj3 = { style: tmp2.container, collapsable: false, children: tmp3 };
      }
    : function MessagesItemSeperator() {
        const tmp = closure_4();
        const obj = { style: tmp.container, collapsable: false, children: <React2 style={tmp.separator} /> };
        return (
          <React2 style={tmp.container} collapsable={false}>
            <React2 style={tmp.separator} />
          </React2>
        );
      },
);
export const MESSAGES_ITEM_SEPERATOR_HEIGHT = PX_12;
