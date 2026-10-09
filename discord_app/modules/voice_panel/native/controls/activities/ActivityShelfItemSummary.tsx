// discord_app/modules/voice_panel/native/controls/activities/ActivityShelfItemSummary.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import ReanimatedRexportDefault from "../../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import ButtonPill from "../../../../../design/components/Button/native/ButtonPill.native.tsx";
import ButtonEllipsis from "../../../../../design/components/Button/native/ButtonEllipsis.native.tsx";
import UserSummaryItemDefault from "../../../../../components_native/common/UserSummaryItem.tsx";
import useActivityUsersDefault from "../../../../activities/useActivityUsers.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  ongoingActivityContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  overlayActivityName: null,
  overlayActivityNameText: null,
  loadingTextColor: null,
  ellipsis: null,
};
let obj3 = {
  paddingHorizontal: 12,
  paddingVertical: 4,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: null,
  marginBottom: 8,
};
const ColorUtils = fn(4928);
obj3.backgroundColor = ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.64);
obj2.overlayActivityName = obj3;
obj2.overlayActivityNameText = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.loadingTextColor = { color: "transparent" };
obj2.ellipsis = { flex: 1, flexShrink: 1, flexGrow: 0, justifyContent: "center", alignItems: "center", top: -12 };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ParticipantsSummary(arg0) {
      const cResult = c.c(4);
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
        const tmp11 = hasOwnProperty(UserSummaryItemDefault, obj4);
        cResult[2] = tmp5;
        cResult[3] = tmp11;
        let tmp8 = tmp11;
        const tmp4Result = UserSummaryItemDefault;
      } else {
        tmp8 = cResult[3];
      }
      return tmp8;
    }
  : function ParticipantsSummary(arg0) {
      ({ applicationId, channelId } = arg0);
      const obj = {
        users: useActivityUsersDefault(applicationId, channelId),
        max: 5,
        avatarSize: null,
        withPlusCount: true,
        style: null,
        cutout: null,
      };
      const tmp = useActivityUsersDefault(applicationId, channelId);
      obj.avatarSize = native.AvatarSizes.REFRESH_MEDIUM_32;
      obj.style = { marginBottom: 8 };
      obj.cutout = { inset: -8 };
      return hasOwnProperty(UserSummaryItemDefault, obj);
    };
ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/voice_panel/native/controls/activities/ActivityShelfItemSummary.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ActivityShelfItemSummary(arg0) {
      const cResult = c.c(22);
      ({ channelId, applicationId, applicationName, submitting } = arg0);
      const tmp5 = closure_7();
      const tmp6 = _slicedToArray(ButtonPill.useLoadingStyles(undefined !== submitting && submitting, "md"), 2)[1];
      const tmp7 = undefined !== submitting && submitting ? tmp5.loadingTextColor : tmp5.overlayActivityNameText;
      if (cResult[0] === applicationName) {
        if (cResult[1] === tmp7) {
          let tmp8 = cResult[2];
        }
        if (cResult[3] === tmp6) {
          if (cResult[4] === tmp5.ellipsis) {
            let tmp10 = cResult[5];
          }
          if (cResult[6] !== tmp4) {
            let tmp12 = tmp4;
            if (tmp4) {
              tmp12 = hasOwnProperty(ButtonEllipsis.Ellipsis, { variant: "active", size: "md" });
            }
            cResult[6] = tmp4;
            cResult[7] = tmp12;
            let tmp11 = tmp12;
          } else {
            tmp11 = cResult[7];
          }
          if (cResult[8] === tmp10) {
            if (cResult[9] === tmp11) {
              let tmp14 = cResult[10];
            }
            if (cResult[11] === tmp5.overlayActivityName) {
              if (cResult[12] === tmp8) {
                if (cResult[13] === tmp14) {
                  let tmp18 = cResult[14];
                }
                if (cResult[15] === applicationId) {
                  if (cResult[16] === channelId) {
                    let tmp22 = cResult[17];
                  }
                  if (cResult[18] === tmp5.ongoingActivityContainer) {
                    if (cResult[19] === tmp18) {
                      if (cResult[20] === tmp22) {
                        let tmp26 = cResult[21];
                      }
                      return tmp26;
                    }
                  }
                  const obj2 = { style: tmp5.ongoingActivityContainer, children: null };
                  const items = [tmp18, tmp22];
                  obj2.children = items;
                  const tmp29 = timestampProducer(View, obj2);
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
            const obj4 = { style: tmp5.overlayActivityName, children: null };
            const items1 = [tmp8, tmp14];
            obj4.children = items1;
            const tmp21 = timestampProducer(View, obj4);
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
      const tmpResult = ButtonPill;
    }
  : function ActivityShelfItemSummary(submitting) {
      let flag = submitting.submitting;
      ({ channelId, applicationId, applicationName } = submitting);
      if (flag === undefined) {
        flag = false;
      }
      const tmp = closure_7();
      const obj2 = { style: tmp.ongoingActivityContainer, children: null };
      const obj3 = { style: tmp.overlayActivityName, children: null };
      let tmp7Result = flag;
      const items = [
        hasOwnProperty(Text_Text.Text, {
          variant: "text-md/semibold",
          style: flag ? tmp.loadingTextColor : tmp.overlayActivityNameText,
          lineClamp: 2,
          children: applicationName,
        }),
      ];
      const obj5 = { style: null, children: null };
      const items1 = [tmp.ellipsis, _slicedToArray(ButtonPill.useLoadingStyles(flag, "md"), 2)[1]];
      obj5.style = items1;
      if (tmp7Result) {
        tmp7Result = hasOwnProperty(ButtonEllipsis.Ellipsis, { variant: "active", size: "md" });
      }
      obj5.children = tmp7Result;
      items[1] = hasOwnProperty(ReanimatedRexportDefault.View, obj5);
      obj3.children = items;
      const items2 = [timestampProducer(View, obj3), hasOwnProperty(closure_8, { channelId, applicationId })];
      obj2.children = items2;
      return timestampProducer(View, obj2);
    };
