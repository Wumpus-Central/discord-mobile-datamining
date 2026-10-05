// discord_app/modules/action_sheet/native/components/PublishModal.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import LegacyTokens from "../../../../design/migrations/native/LegacyTokens.tsx";
import useChannelFollowerStatsDefault from "../../../channel_following/useChannelFollowerStats.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let channelId;

let closure_4;
let hasOwnProperty;
let obj2;
({ View: closure_4, ActivityIndicator: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let obj = {
  alertContainer: { paddingTop: 16 },
  alertLoading: { paddingTop: 62, paddingBottom: 46 },
  alertBodyText: obj2,
};
obj2 = { marginBottom: 16, fontSize: 16, lineHeight: 24, color: LegacyTokens.DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
let closure_7 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channelId) => {
      const obj = react2;
      const cResult = obj.c(10);
      channelId = channelId.channelId;
      const tmp4 = closure_7();
      const tmp5 = _slicedToArray(useChannelFollowerStatsDefault(channelId), 2);
      const first = tmp5[0];
      if (tmp5[1]) {
        let first1;
        let tmp27;
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp26 = <hasOwnProperty animating />;
          cResult[0] = tmp26;
          first1 = tmp26;
        } else {
          first1 = cResult[0];
        }
        if (cResult[1] !== tmp4.alertLoading) {
          const tmp30 = <React3 style={tmp4.alertLoading}>{first1}</React3>;
          cResult[1] = tmp4.alertLoading;
          cResult[2] = tmp30;
          tmp27 = tmp30;
        } else {
          tmp27 = cResult[2];
        }
        return tmp27;
      } else {
        let tmp15;
        let guildsFollowing;
        if (first != null) {
          guildsFollowing = first.guildsFollowing;
        }
        let tmp9 = null != guildsFollowing;
        if (tmp9) {
          let guildsFollowing1;
          if (first != null) {
            guildsFollowing1 = first.guildsFollowing;
          }
          tmp9 = guildsFollowing1 > 0;
        }
        let guildsFollowing2;
        const tmp11 = cResult[3];
        if (first != null) {
          guildsFollowing2 = first.guildsFollowing;
        }
        if (tmp11 === guildsFollowing2) {
          if (cResult[4] === tmp9) {
            let tmp13;
            if (cResult[5] === tmp4.alertBodyText) {
              tmp13 = cResult[6];
            }
            if (cResult[7] === tmp4.alertContainer) {
              let tmp18;
              if (cResult[8] === tmp13) {
                tmp18 = cResult[9];
              }
              return tmp18;
            }
            const tmp21 = <React3 style={tmp4.alertContainer}>{tmp13}</React3>;
            cResult[7] = tmp4.alertContainer;
            cResult[8] = tmp13;
            cResult[9] = tmp21;
            tmp18 = tmp21;
          }
        }
        const obj4 = { style: tmp4.alertBodyText, children: null };
        const LegacyText = native.LegacyText;
        const intl = intl2.intl;
        if (tmp9) {
          const format = intl.format;
          let num2;
          const GCGrNP = intl2.t.GCGrNP;
          if (first != null) {
            num2 = first.guildsFollowing;
          }
          if (num2 == null) {
            num2 = 0;
          }
          const obj5 = { numGuildsFollowing: num2 };
          obj4.children = format(GCGrNP, obj5);
          tmp15 = obj4;
        } else {
          obj4.children = intl.string(intl2.t["8FpqOs"]);
          tmp15 = obj4;
        }
        const tmp14Result = <LegacyText {...tmp15} />;
        let guildsFollowing3;
        if (first != null) {
          guildsFollowing3 = first.guildsFollowing;
        }
        cResult[3] = guildsFollowing3;
        cResult[4] = tmp9;
        cResult[5] = tmp4.alertBodyText;
        cResult[6] = tmp14Result;
        tmp13 = tmp14Result;
      }
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const tmp = closure_7();
      const tmp3 = _slicedToArray(useChannelFollowerStatsDefault(channelId), 2);
      const first = tmp3[0];
      if (tmp3[1]) {
        return (
          <React3 style={tmp.alertLoading}>
            <hasOwnProperty animating />
          </React3>
        );
      } else {
        let guildsFollowing;
        if (first != null) {
          guildsFollowing = first.guildsFollowing;
        }
        let tmp7 = null != guildsFollowing;
        if (tmp7) {
          let guildsFollowing1;
          if (first != null) {
            guildsFollowing1 = first.guildsFollowing;
          }
          tmp7 = guildsFollowing1 > 0;
        }
        const obj3 = { style: tmp.alertBodyText, children: null };
        const LegacyText = native.LegacyText;
        const intl = intl2.intl;
        if (tmp7) {
          const format = intl.format;
          let num2;
          const GCGrNP = intl2.t.GCGrNP;
          if (first != null) {
            num2 = first.guildsFollowing;
          }
          if (num2 == null) {
            num2 = 0;
          }
          const obj4 = { numGuildsFollowing: num2 };
          obj3.children = format(GCGrNP, obj4);
        } else {
          obj3.children = intl.string(intl2.t["8FpqOs"]);
        }
        return <React3 style={tmp.alertContainer}>{null}</React3>;
      }
    };
const result = size.fileFinishedImporting("modules/action_sheet/native/components/PublishModal.tsx");

export default tmp4;
