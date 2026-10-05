// discord_app/modules/guild_instant_invites/native/InstantInviteSelfMeasurer.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import InstantInvite from "InstantInvite.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const InstantInviteDefault = InstantInvite;
let type;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { position: "absolute", opacity: 0 } });
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (type) => {
        let containerStyle;
        let item;
        let onMeasured;
        const obj = react2;
        const cResult = obj.c(13);
        ({ containerStyle, item, onMeasured } = type);
        type = type.type;
        let str = "height";
        if (undefined !== type) {
          str = type;
        }
        const tmp4 = closure_6();
        if (cResult[0] === onMeasured) {
          let tmp5;
          if (cResult[1] === str) {
            tmp5 = cResult[2];
          }
          if (cResult[3] === containerStyle) {
            let tmp6;
            let tmp9;
            if (cResult[4] === tmp4.container) {
              tmp6 = cResult[5];
            }
            if (cResult[6] === item.data) {
              let tmp7;
              if (cResult[7] === item.type) {
                tmp7 = cResult[8];
              }
              if (cResult[9] === tmp5) {
                if (cResult[10] === tmp6) {
                  let tmp12;
                  if (cResult[11] === tmp7) {
                    tmp12 = cResult[12];
                  }
                  return tmp12;
                }
              }
              const tmp15 = (
                <View
                  style={tmp6}
                  onLayout={tmp5}
                  pointerEvents="none"
                  importantForAccessibility="no-hide-descendants"
                  accessibilityElementsHidden
                  accessible={false}
                >
                  {tmp7}
                </View>
              );
              cResult[9] = tmp5;
              cResult[10] = tmp6;
              cResult[11] = tmp7;
              cResult[12] = tmp15;
              tmp12 = tmp15;
            }
            if ("invite" === item.type) {
              tmp9 = jsx(InstantInviteDefault, { invite: item.data });
            } else {
              tmp9 = jsx(InstantInvite.LinkedChannelInvite, { channel: item.data });
            }
            cResult[6] = item.data;
            cResult[7] = item.type;
            cResult[8] = tmp9;
            tmp7 = tmp9;
          }
          const items = [containerStyle, tmp4.container];
          cResult[3] = containerStyle;
          cResult[4] = tmp4.container;
          cResult[5] = items;
          tmp6 = items;
        }
        const fn = function c(nativeEvent) {
          const layout = nativeEvent.nativeEvent.layout;
          onMeasured("height" === str ? layout.height : layout.width);
        };
        cResult[0] = onMeasured;
        cResult[1] = str;
        cResult[2] = fn;
        tmp5 = fn;
      }
    : (type) => {
        let item;
        let onMeasured;
        let tmp2Result;
        ({ item, onMeasured } = type);
        let str = type.type;
        const containerStyle = type.containerStyle;
        if (str === undefined) {
          str = "height";
        }
        const items = [onMeasured, str];
        const items1 = [containerStyle, closure_6().container];
        const tmp = closure_6();
        if ("invite" === item.type) {
          tmp2Result = jsx(InstantInviteDefault, { invite: item.data });
        } else {
          tmp2Result = jsx(InstantInvite.LinkedChannelInvite, { channel: item.data });
        }
        return (
          <View
            style={items1}
            onLayout={react.useCallback((nativeEvent) => {
              const layout = nativeEvent.nativeEvent.layout;
              onMeasured("height" === str ? layout.height : layout.width);
            }, items)}
            pointerEvents="none"
            importantForAccessibility="no-hide-descendants"
            accessibilityElementsHidden
            accessible={false}
          >
            {tmp2Result}
          </View>
        );
      },
);
const result = size.fileFinishedImporting("modules/guild_instant_invites/native/InstantInviteSelfMeasurer.tsx");

export default memoResult;
