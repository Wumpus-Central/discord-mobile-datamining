// discord_app/modules/voice_calls/native/action_sheet/VoiceEmptyState.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import AssetRegistryDefault from "../../../../../_runtime/13593_AssetRegistry.js";
import JoinVoiceChannelButtonDefault from "JoinVoiceChannelButton.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import TextStyles_mod from "../../../rebrand/native/TextStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let channel;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { justifyContent: "center" },
  button: { paddingHorizontal: 12, paddingTop: 16 },
  emptyTitle: obj2,
  emptyBody: obj3,
};
obj2 = { textTransform: "none", lineHeight: 24 };
createStyles = createStyles.createStyles;
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj3 = { lineHeight: 20, fontWeight: "600" };
TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 16));
let closure_6 = createStyles(obj);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let items;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(18);
      channel = channel.channel;
      const tmp4 = closure_6();
      const bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[0] !== bottom) {
        const obj2 = { paddingBottom: bottom };
        cResult[0] = bottom;
        cResult[1] = obj2;
        tmp6 = obj2;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === tmp4.container) {
        let tmp7;
        let tmp10;
        let tmp9;
        let tmp13;
        if (cResult[3] === tmp6) {
          tmp7 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl3.intl;
          const stringResult = intl.string(intl3.t["/HABZo"]);
          const intl2 = intl3.intl;
          const stringResult1 = intl2.string(intl3.t["5Jy2FY"]);
          cResult[5] = stringResult;
          cResult[6] = stringResult1;
          tmp10 = stringResult1;
          tmp9 = stringResult;
        } else {
          tmp9 = cResult[5];
          tmp10 = cResult[6];
        }
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { marginBottom: 16, marginTop: 20 };
          cResult[7] = obj3;
          tmp13 = obj3;
        } else {
          tmp13 = cResult[7];
        }
        if (cResult[8] === tmp4.emptyBody) {
          let tmp14;
          if (cResult[9] === tmp4.emptyTitle) {
            tmp14 = cResult[10];
          }
          if (cResult[11] === channel) {
            let tmp17;
            if (cResult[12] === tmp4.button) {
              tmp17 = cResult[13];
            }
            if (cResult[14] === tmp7) {
              if (cResult[15] === tmp14) {
                let tmp20;
                if (cResult[16] === tmp17) {
                  tmp20 = cResult[17];
                }
                return tmp20;
              }
            }
            const obj5 = { style: tmp7, children: items };
            items = [tmp14, tmp17];
            const tmp23 = hasOwnProperty(View, obj5);
            cResult[14] = tmp7;
            cResult[15] = tmp14;
            cResult[16] = tmp17;
            cResult[17] = tmp23;
            tmp20 = tmp23;
          }
          const obj6 = { channel, style: tmp4.button };
          const tmp19 = React3(JoinVoiceChannelButtonDefault, obj6);
          cResult[11] = channel;
          cResult[12] = tmp4.button;
          cResult[13] = tmp19;
          tmp17 = tmp19;
        }
        const obj11 = {
          title: tmp9,
          body: tmp10,
          lightSource: AssetRegistryDefault,
          darkSource: AssetRegistryDefault,
          titleStyle: null,
          bodyStyle: null,
          imageStyle: tmp13,
        };
        const ThemedEmptyState = native.ThemedEmptyState;
        ({ emptyTitle: obj4.titleStyle, emptyBody: obj4.bodyStyle } = tmp4);
        const tmp16 = React3(ThemedEmptyState, obj11);
        cResult[8] = tmp4.emptyBody;
        cResult[9] = tmp4.emptyTitle;
        cResult[10] = tmp16;
        tmp14 = tmp16;
      }
      const items1 = [tmp4.container, tmp6];
      cResult[2] = tmp4.container;
      cResult[3] = tmp6;
      cResult[4] = items1;
      tmp7 = items1;
    }
  : (channel) => {
      let intl;
      let intl2;
      let items;
      let items1;
      channel = channel.channel;
      const tmp = closure_6();
      const obj = { style: items, children: items1 };
      items = [tmp.container, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
      const obj4 = {
        title: intl.string(intl3.t["/HABZo"]),
        body: intl2.string(intl3.t["5Jy2FY"]),
        lightSource: AssetRegistryDefault,
        darkSource: AssetRegistryDefault,
        titleStyle: null,
        bodyStyle: null,
        imageStyle: { marginBottom: 16, marginTop: 20 },
      };
      ({ paddingBottom: useSafeAreaInsetsDefault().bottom });
      const ThemedEmptyState = native.ThemedEmptyState;
      intl = intl3.intl;
      intl2 = intl3.intl;
      ({ emptyTitle: obj3.titleStyle, emptyBody: obj3.bodyStyle } = tmp);
      items1 = [React3(ThemedEmptyState, obj4)];
      const obj7 = { channel, style: tmp.button };
      items1[1] = React3(JoinVoiceChannelButtonDefault, obj7);
      return hasOwnProperty(View, obj);
    };
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceEmptyState.tsx");

export default tmp9;
