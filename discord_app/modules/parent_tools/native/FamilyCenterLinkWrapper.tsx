// discord_app/modules/parent_tools/native/FamilyCenterLinkWrapper.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 14,
    paddingBottom: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_12,
  },
};
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj3 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingTop: 14,
  paddingBottom: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_12,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkWrapper.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterLinkRowWrapper(userId) {
      const cResult = userId(576).c(7);
      userId = userId.userId;
      const children = userId.children;
      const tmp4 = closure_4();
      analyticsLocations = analyticsLocations(6851)().analyticsLocations;
      if (undefined === userId) {
        return null;
      } else {
        if (cResult[0] === analyticsLocations) {
          if (cResult[1] === userId) {
            let tmp5 = cResult[2];
          }
          if (cResult[3] === children) {
            if (cResult[4] === tmp5) {
              if (cResult[5] === tmp4.container) {
                let tmp6 = cResult[6];
              }
              return tmp6;
            }
          }
          const obj2 = { style: tmp4.container, onPress: tmp5, children };
          const tmp8 = jsx(tmp(6184).PressableOpacity, { style: tmp4.container, onPress: tmp5, children });
          cResult[3] = children;
          cResult[4] = tmp5;
          cResult[5] = tmp4.container;
          cResult[6] = tmp8;
          tmp6 = tmp8;
        }
        function handlePress() {
          showUserProfileActionSheetDefault({
            userId,
            disableCalls: true,
            disableMessage: true,
            sourceAnalyticsLocations: analyticsLocations,
          });
        }
        cResult[0] = analyticsLocations;
        cResult[1] = userId;
        cResult[2] = handlePress;
        tmp5 = handlePress;
      }
      const obj = userId(576);
      tmp = userId;
    }
  : function FamilyCenterLinkRowWrapper(userId) {
      userId = userId.userId;
      let analyticsLocations;
      analyticsLocations = analyticsLocations(6851)().analyticsLocations;
      let tmp3 = null;
      if (undefined !== userId) {
        const obj = {
          style: tmp.container,
          onPress: function handlePress() {
            showUserProfileActionSheetDefault({
              userId,
              disableCalls: true,
              disableMessage: true,
              sourceAnalyticsLocations: analyticsLocations,
            });
          },
          children: userId.children,
        };
        tmp3 = jsx(userId(6184).PressableOpacity, {
          style: tmp.container,
          onPress: function handlePress() {
            showUserProfileActionSheetDefault({
              userId,
              disableCalls: true,
              disableMessage: true,
              sourceAnalyticsLocations: analyticsLocations,
            });
          },
          children: userId.children,
        });
      }
      return tmp3;
    };
