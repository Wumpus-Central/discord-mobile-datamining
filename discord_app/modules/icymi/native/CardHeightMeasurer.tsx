// discord_app/modules/icymi/native/CardHeightMeasurer.tsx
import ICYMIActionCreatorsDefault from "../ICYMIActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/CardHeightMeasurer.tsx");

export const CardHeightMeasurer = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? function CardHeightMeasurer(itemId) {
        const cResult = itemId(576).c(8);
        itemId = itemId.itemId;
        const children = itemId.children;
        const width = noop.useContext(itemId(16891).ICYMIContext).width;
        if (cResult[0] !== itemId) {
          const fn = function l(nativeEvent) {
            ICYMIActionCreatorsDefault.setCardHeight(itemId, nativeEvent.nativeEvent.layout.height);
          };
          cResult[0] = itemId;
          cResult[1] = fn;
          let tmp2 = fn;
        } else {
          tmp2 = cResult[1];
        }
        if (cResult[2] !== width) {
          const obj2 = { width, alignSelf: "center" };
          cResult[2] = width;
          cResult[3] = obj2;
          let tmp3 = obj2;
        } else {
          tmp3 = cResult[3];
        }
        if (cResult[4] === children) {
          if (cResult[5] === tmp2) {
            if (cResult[6] === tmp3) {
              let tmp4 = cResult[7];
            }
            return tmp4;
          }
        }
        const tmp5 = (
          <View onLayout={tmp2} pointerEvents="box-none" style={tmp3}>
            {children}
          </View>
        );
        cResult[4] = children;
        cResult[5] = tmp2;
        cResult[6] = tmp3;
        cResult[7] = tmp5;
        tmp4 = tmp5;
      }
    : function CardHeightMeasurer(children) {
        const itemId = children.itemId;
        const items = [itemId];
        return (
          <View
            onLayout={noop.useCallback((nativeEvent) => {
              ICYMIActionCreatorsDefault.setCardHeight(itemId, nativeEvent.nativeEvent.layout.height);
            }, items)}
            pointerEvents="box-none"
            style={{ width: noop.useContext(itemId(16891).ICYMIContext).width, alignSelf: "center" }}
          >
            {children.children}
          </View>
        );
      },
);
