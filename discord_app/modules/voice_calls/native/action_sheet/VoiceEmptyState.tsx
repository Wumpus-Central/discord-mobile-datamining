// discord_app/modules/voice_calls/native/action_sheet/VoiceEmptyState.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef13431 from "../../../../../_runtime/metro/13431__.js";
import JoinVoiceChannelButtonDefault from "JoinVoiceChannelButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import TextStyles_mod from "../../../rebrand/native/TextStyles.tsx";

require = fn;
const View = fn(17).View;
const Fonts = fn(1085).Fonts;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { justifyContent: "center" },
  button: { paddingHorizontal: 12, paddingTop: 16 },
  emptyTitle: null,
  emptyBody: null,
};
let obj3 = {};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
obj3.textTransform = "none";
obj3.lineHeight = 24;
obj2.emptyTitle = obj3;
let obj4 = {};
let TextStyles = TextStyles_mod;
const merged1 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.TEXT_SUBTLE, 16));
obj4.lineHeight = 20;
obj4.fontWeight = "600";
obj2.emptyBody = obj4;
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceEmptyState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function VoiceEmptyState(channel) {
      const cResult = c.c(18);
      channel = channel.channel;
      const tmp4 = closure_6();
      const bottom = useSafeAreaInsetsDefault().bottom;
      if (cResult[0] !== bottom) {
        const obj2 = { paddingBottom: bottom };
        cResult[0] = bottom;
        cResult[1] = obj2;
        let tmp6 = obj2;
      } else {
        tmp6 = cResult[1];
      }
      if (cResult[2] === tmp4.container) {
        if (cResult[3] === tmp6) {
          let tmp7 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = util.intl;
          const stringResult = intl.string(util.t["/HABZo"]);
          const intl2 = util.intl;
          const stringResult1 = intl2.string(util.t["5Jy2FY"]);
          cResult[5] = stringResult;
          cResult[6] = stringResult1;
          let tmp10 = stringResult1;
          let tmp9 = stringResult;
        } else {
          tmp9 = cResult[5];
          tmp10 = cResult[6];
        }
        const _Symbol2 = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { marginBottom: 16, marginTop: 20 };
          cResult[7] = obj3;
          let tmp13 = obj3;
        } else {
          tmp13 = cResult[7];
        }
        if (cResult[8] === tmp4.emptyBody) {
          if (cResult[9] === tmp4.emptyTitle) {
            let tmp14 = cResult[10];
          }
          if (cResult[11] === channel) {
            if (cResult[12] === tmp4.button) {
              let tmp17 = cResult[13];
            }
            if (cResult[14] === tmp7) {
              if (cResult[15] === tmp14) {
                if (cResult[16] === tmp17) {
                  let tmp20 = cResult[17];
                }
                return tmp20;
              }
            }
            const obj5 = { style: tmp7, children: null };
            const items = [tmp14, tmp17];
            obj5.children = items;
            const tmp23 = hasOwnProperty(View, obj5);
            cResult[14] = tmp7;
            cResult[15] = tmp14;
            cResult[16] = tmp17;
            cResult[17] = tmp23;
            tmp20 = tmp23;
          }
          const obj6 = { channel, style: tmp4.button };
          const tmp19 = React4(JoinVoiceChannelButtonDefault, obj6);
          cResult[11] = channel;
          cResult[12] = tmp4.button;
          cResult[13] = tmp19;
          tmp17 = tmp19;
        }
        const obj11 = {
          title: tmp9,
          body: tmp10,
          lightSource: _modDef13431,
          darkSource: _modDef13431,
          titleStyle: null,
          bodyStyle: null,
          imageStyle: null,
        };
        ({ emptyTitle: obj4.titleStyle, emptyBody: obj4.bodyStyle } = tmp4);
        obj11.imageStyle = tmp13;
        const tmp16 = React4(native.ThemedEmptyState, obj11);
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
  : function VoiceEmptyState(channel) {
      const tmp = closure_6();
      const obj = { style: null, children: null };
      const items = [tmp.container, { paddingBottom: useSafeAreaInsetsDefault().bottom }];
      obj.style = items;
      const obj4 = {
        title: null,
        body: null,
        lightSource: null,
        darkSource: null,
        titleStyle: null,
        bodyStyle: null,
        imageStyle: null,
      };
      const intl = util.intl;
      obj4.title = intl.string(util.t["/HABZo"]);
      const intl2 = util.intl;
      obj4.body = intl2.string(util.t["5Jy2FY"]);
      obj4.lightSource = _modDef13431;
      obj4.darkSource = _modDef13431;
      ({ emptyTitle: obj3.titleStyle, emptyBody: obj3.bodyStyle } = tmp);
      obj4.imageStyle = { marginBottom: 16, marginTop: 20 };
      const items1 = [
        React4(native.ThemedEmptyState, obj4),
        React4(JoinVoiceChannelButtonDefault, { channel: channel.channel, style: tmp.button }),
      ];
      obj.children = items1;
      return hasOwnProperty(View, obj);
    };
