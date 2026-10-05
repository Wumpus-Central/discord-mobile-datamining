// discord_app/modules/voice_panel/native/controls/activities/ActivityShelfItemSummary.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import ReanimatedRexportDefault from "../../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import ButtonPill from "../../../../../design/components/Button/native/ButtonPill.native.tsx";
import ButtonEllipsis from "../../../../../design/components/Button/native/ButtonEllipsis.native.tsx";
import UserSummaryItemDefault from "../../../../../components_native/common/UserSummaryItem.tsx";
import useActivityUsersDefault from "../../../../activities/useActivityUsers.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ColorUtils_mod from "../../../../../utils/ColorUtils.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let ColorUtils;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  ongoingActivityContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  overlayActivityName: obj2,
  overlayActivityNameText: obj3,
  loadingTextColor: { color: "transparent" },
  ellipsis: { flex: 1, flexShrink: 1, flexGrow: 0, justifyContent: "center", alignItems: "center", top: -12 },
};
obj2 = {
  paddingHorizontal: 12,
  paddingVertical: 4,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.64),
  marginBottom: 8,
};
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let applicationId;
      let channelId;
      let tmp6;
      let tmp7;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(4);
      ({ applicationId, channelId } = arg0);
      const tmp5 = useActivityUsersDefault(applicationId, channelId);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { marginBottom: 8 };
        const obj3 = { inset: -8 };
        cResult[0] = obj2;
        cResult[1] = obj3;
        tmp6 = obj2;
        tmp7 = obj3;
      } else {
        [tmp6, tmp7] = cResult;
      }
      if (cResult[2] !== tmp5) {
        const obj4 = {
          users: tmp5,
          max: 5,
          avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32,
          withPlusCount: true,
          style: tmp6,
          cutout: tmp7,
        };
        const tmp4Result = UserSummaryItemDefault;
        const tmp11 = hasOwnProperty(tmp4Result, obj4);
        cResult[2] = tmp5;
        cResult[3] = tmp11;
        tmp8 = tmp11;
      } else {
        tmp8 = cResult[3];
      }
      return tmp8;
    }
  : (arg0) => {
      let applicationId;
      let channelId;
      ({ applicationId, channelId } = arg0);
      const obj = {
        users: useActivityUsersDefault(applicationId, channelId),
        max: 5,
        avatarSize: native.AvatarSizes.REFRESH_MEDIUM_32,
        withPlusCount: true,
        style: { marginBottom: 8 },
        cutout: { inset: -8 },
      };
      const tmp2 = UserSummaryItemDefault;
      return hasOwnProperty(tmp2, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let applicationId;
      let applicationName;
      let channelId;
      let items;
      let items1;
      let submitting;
      const obj = react2;
      const cResult = obj.c(22);
      ({ channelId, applicationId, applicationName, submitting } = arg0);
      const tmp5 = closure_7();
      const tmpResult = ButtonPill;
      const tmp6 = _slicedToArray(tmpResult.useLoadingStyles(undefined !== submitting && submitting, "md"), 2)[1];
      const tmp7 = undefined !== submitting && submitting ? tmp5.loadingTextColor : tmp5.overlayActivityNameText;
      if (cResult[0] === applicationName) {
        let tmp8;
        if (cResult[1] === tmp7) {
          tmp8 = cResult[2];
        }
        if (cResult[3] === tmp6) {
          let tmp10;
          let tmp11;
          if (cResult[4] === tmp5.ellipsis) {
            tmp10 = cResult[5];
          }
          if (cResult[6] !== (undefined !== submitting && submitting)) {
            const tmp12 = tmp4 && hasOwnProperty(ButtonEllipsis.Ellipsis, { variant: "active", size: "md" });
            cResult[6] = undefined !== submitting && submitting;
            cResult[7] = tmp12;
            tmp11 = tmp12;
          } else {
            tmp11 = cResult[7];
          }
          if (cResult[8] === tmp10) {
            let tmp14;
            if (cResult[9] === tmp11) {
              tmp14 = cResult[10];
            }
            if (cResult[11] === tmp5.overlayActivityName) {
              if (cResult[12] === tmp8) {
                let tmp18;
                if (cResult[13] === tmp14) {
                  tmp18 = cResult[14];
                }
                if (cResult[15] === applicationId) {
                  let tmp22;
                  if (cResult[16] === channelId) {
                    tmp22 = cResult[17];
                  }
                  if (cResult[18] === tmp5.ongoingActivityContainer) {
                    if (cResult[19] === tmp18) {
                      let tmp26;
                      if (cResult[20] === tmp22) {
                        tmp26 = cResult[21];
                      }
                      return tmp26;
                    }
                  }
                  const obj2 = { style: tmp5.ongoingActivityContainer, children: items };
                  items = [tmp18, tmp22];
                  const tmp29 = metroRequire(View, obj2);
                  cResult[18] = tmp5.ongoingActivityContainer;
                  cResult[19] = tmp18;
                  cResult[20] = tmp22;
                  cResult[21] = tmp29;
                  tmp26 = tmp29;
                }
                const obj3 = { channelId, applicationId };
                const tmp25 = hasOwnProperty(closure_8, obj3);
                cResult[15] = applicationId;
                cResult[16] = channelId;
                cResult[17] = tmp25;
                tmp22 = tmp25;
              }
            }
            const obj4 = { style: tmp5.overlayActivityName, children: items1 };
            items1 = [tmp8, tmp14];
            const tmp21 = metroRequire(View, obj4);
            cResult[11] = tmp5.overlayActivityName;
            cResult[12] = tmp8;
            cResult[13] = tmp14;
            cResult[14] = tmp21;
            tmp18 = tmp21;
          }
          const obj5 = { style: tmp10, children: tmp11 };
          const tmp17 = hasOwnProperty(ReanimatedRexportDefault.View, obj5);
          cResult[8] = tmp10;
          cResult[9] = tmp11;
          cResult[10] = tmp17;
          tmp14 = tmp17;
        }
        const items2 = [tmp5.ellipsis, tmp6];
        cResult[3] = tmp6;
        cResult[4] = tmp5.ellipsis;
        cResult[5] = items2;
        tmp10 = items2;
      }
      const tmp9 = hasOwnProperty(Text_Text.Text, {
        variant: "text-md/semibold",
        style: tmp7,
        lineClamp: 2,
        children: applicationName,
      });
      cResult[0] = applicationName;
      cResult[1] = tmp7;
      cResult[2] = tmp9;
      tmp8 = tmp9;
    }
  : (submitting) => {
      let applicationId;
      let applicationName;
      let channelId;
      let items;
      let items1;
      let items2;
      let flag = submitting.submitting;
      ({ channelId, applicationId, applicationName } = submitting);
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_7();
      let tmp8Result = flag;
      const obj3 = { style: tmp.overlayActivityName, children: items };
      items = [,];
      const obj = ButtonPill;
      const obj2 = { style: tmp.ongoingActivityContainer, children: items2 };
      const obj4 = {
        variant: "text-md/semibold",
        style: flag ? tmp.loadingTextColor : tmp.overlayActivityNameText,
        lineClamp: 2,
        children: applicationName,
      };
      const tmp5 = _slicedToArray(obj.useLoadingStyles(flag, "md"), 2)[1];
      items[0] = hasOwnProperty(Text_Text.Text, obj4);
      const obj5 = { style: items1, children: tmp8Result };
      items1 = [tmp.ellipsis, tmp5];
      View = ReanimatedRexportDefault.View;
      if (tmp8Result) {
        tmp8Result = hasOwnProperty(ButtonEllipsis.Ellipsis, { variant: "active", size: "md" });
      }
      items[1] = hasOwnProperty(View, obj5);
      items2 = [metroRequire(View, obj3), hasOwnProperty(closure_8, { channelId, applicationId })];
      return metroRequire(View, obj2);
    };
const result = size.fileFinishedImporting(
  "modules/voice_panel/native/controls/activities/ActivityShelfItemSummary.tsx",
);

export default tmp5;
