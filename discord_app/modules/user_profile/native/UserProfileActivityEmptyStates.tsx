// discord_app/modules/user_profile/native/UserProfileActivityEmptyStates.tsx
import _mod12 from "../../../../_runtime/metro/00012__.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import intl4 from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let user;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let items = [
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.AyMGXA);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.aAFW7V);
  },
  (name) => {
    const intl = intl4.intl;
    const obj = { name };
    return intl.formatToPlainString(intl4.t.h2g0cM, obj);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.rrYh58);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t["HX3K+F"]);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t["/yW3aY"]);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t["PmL/v0"]);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.IALa3h);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.HRcTFL);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.NuCqPt);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t["M1tw+4"]);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.UBm1y2);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.Cu95PQ);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t["R/wFuh"]);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.HQPAVT);
  },
  () => {
    const intl = intl4.intl;
    return intl.string(intl4.t.YolGh4);
  },
];
let createStyles = createStyles_mod;
let obj = { container: obj2, text: obj3, centeredText: { textAlign: "center" }, buttons: obj4 };
obj2 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_8, alignItems: "center" };
obj4 = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let bodyText;
      let children;
      let heading;
      let items1;
      const obj = react2;
      const cResult = obj.c(14);
      ({ heading, bodyText, children } = arg0);
      const tmp4 = closure_10();
      if (cResult[0] === heading) {
        let tmp5;
        if (cResult[1] === tmp4.centeredText) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === bodyText) {
          let tmp7;
          if (cResult[4] === tmp4.centeredText) {
            tmp7 = cResult[5];
          }
          if (cResult[6] === tmp4.text) {
            if (cResult[7] === tmp5) {
              let tmp10;
              if (cResult[8] === tmp7) {
                tmp10 = cResult[9];
              }
              if (cResult[10] === children) {
                if (cResult[11] === tmp4.container) {
                  let tmp14;
                  if (cResult[12] === tmp10) {
                    tmp14 = cResult[13];
                  }
                  return tmp14;
                }
              }
              const obj2 = { style: tmp4.container, children: items };
              items = [tmp10, children];
              const tmp17 = metroImportAll(View, obj2);
              cResult[10] = children;
              cResult[11] = tmp4.container;
              cResult[12] = tmp10;
              cResult[13] = tmp17;
              tmp14 = tmp17;
            }
          }
          const obj3 = { style: tmp4.text, children: items1 };
          items1 = [tmp5, tmp7];
          const tmp13 = metroImportAll(View, obj3);
          cResult[6] = tmp4.text;
          cResult[7] = tmp5;
          cResult[8] = tmp7;
          cResult[9] = tmp13;
          tmp10 = tmp13;
        }
        const obj4 = { variant: "text-sm/normal", style: tmp4.centeredText, children: bodyText };
        const tmp9 = metroImportDefault(Text_Text.Text, obj4);
        cResult[3] = bodyText;
        cResult[4] = tmp4.centeredText;
        cResult[5] = tmp9;
        tmp7 = tmp9;
      }
      const obj5 = {
        variant: "redesign/heading-18/bold",
        color: "mobile-text-heading-primary",
        accessibilityRole: "header",
        style: tmp4.centeredText,
        children: heading,
      };
      const tmp6 = metroImportDefault(Text_Text.Text, obj5);
      cResult[0] = heading;
      cResult[1] = tmp4.centeredText;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (arg0) => {
      let bodyText;
      let children;
      let heading;
      let items1;
      ({ heading, bodyText, children } = arg0);
      const tmp = closure_10();
      const obj2 = { style: tmp.text, children: items };
      items = [,];
      const obj = { style: tmp.container, children: items1 };
      const obj3 = {
        variant: "redesign/heading-18/bold",
        color: "mobile-text-heading-primary",
        accessibilityRole: "header",
        style: tmp.centeredText,
        children: heading,
      };
      items[0] = metroImportDefault(Text_Text.Text, obj3);
      const obj4 = { variant: "text-sm/normal", style: tmp.centeredText, children: bodyText };
      items[1] = metroImportDefault(Text_Text.Text, obj4);
      items1 = [metroImportAll(View, obj2), children];
      return metroImportAll(View, obj);
    };
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2 = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (user) => {
        let channelId;
        let guildId;
        let name;
        let obj3;
        let obj = name(576);
        const cResult = obj.c(19);
        user = user.user;
        ({ guildId, channelId } = user);
        const tmp4 = closure_10();
        if (cResult[0] === channelId) {
          if (cResult[1] === guildId) {
            let tmp6;
            let tmp9;
            let tmp15;
            if (cResult[2] === user) {
              name = cResult[3];
              tmp6 = cResult[4];
            }
            if (cResult[5] !== tmp5) {
              const fn = function f() {
                const obj = _mod12;
                let sampleResult = obj.sample(items);
                if (sampleResult == null) {
                  sampleResult = items[0];
                }
                return sampleResult(name);
              };
              cResult[5] = tmp5;
              cResult[6] = fn;
              tmp9 = fn;
            } else {
              tmp9 = cResult[6];
            }
            const first = _slicedToArray(react.useState(tmp9), 1)[0];
            if (cResult[7] !== user.id) {
              class A {
                constructor() {
                  const obj = ChannelActionCreatorsDefault;
                  const obj2 = { recipientIds: user.id };
                  obj.openPrivateChannel(obj2);
                  const obj3 = ActionSheetActionCreatorsDefault;
                  obj3.hideAllActionSheets();
                }
              }
              cResult[7] = user.id;
              cResult[8] = A;
            } else {
              class A {
                constructor() {
                  const obj = ChannelActionCreatorsDefault;
                  const obj2 = { recipientIds: user.id };
                  obj.openPrivateChannel(obj2);
                  const obj3 = ActionSheetActionCreatorsDefault;
                  obj3.hideAllActionSheets();
                }
              }
            }
            const _Symbol = Symbol;
            const buttons = tmp4.buttons;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              class A {
                constructor() {
                  const obj = ChannelActionCreatorsDefault;
                  const obj2 = { recipientIds: user.id };
                  obj.openPrivateChannel(obj2);
                  const obj3 = ActionSheetActionCreatorsDefault;
                  obj3.hideAllActionSheets();
                }
              }
              const stringResult = obj3.string(name(1126).t["g33r/P"]);
              cResult[9] = stringResult;
              tmp15 = stringResult;
            } else {
              class A {
                constructor() {
                  const obj = ChannelActionCreatorsDefault;
                  const obj2 = { recipientIds: user.id };
                  obj.openPrivateChannel(obj2);
                  const obj3 = ActionSheetActionCreatorsDefault;
                  obj3.hideAllActionSheets();
                }
              }
            }
            if (cResult[10] !== A) {
              class A {
                constructor() {
                  const obj = ChannelActionCreatorsDefault;
                  const obj2 = { recipientIds: user.id };
                  obj.openPrivateChannel(obj2);
                  const obj3 = ActionSheetActionCreatorsDefault;
                  obj3.hideAllActionSheets();
                }
              }
              const obj4 = { size: "sm", variant: "secondary", text: tmp15, onPress: A };
              cResult[10] = A;
              cResult[11] = closure_7(name(5601).Button, obj4);
              const tmp18 = closure_7(name(5601).Button, obj4);
            } else {
              class A {
                constructor() {
                  const obj = ChannelActionCreatorsDefault;
                  const obj2 = { recipientIds: user.id };
                  obj.openPrivateChannel(obj2);
                  const obj3 = ActionSheetActionCreatorsDefault;
                  obj3.hideAllActionSheets();
                }
              }
            }
            if (cResult[12] === tmp4.buttons) {
              class A {
                constructor() {
                  const obj = ChannelActionCreatorsDefault;
                  const obj2 = { recipientIds: user.id };
                  obj.openPrivateChannel(obj2);
                  const obj3 = ActionSheetActionCreatorsDefault;
                  obj3.hideAllActionSheets();
                }
              }
              if (cResult[15] === first) {
                class A {
                  constructor() {
                    const obj = ChannelActionCreatorsDefault;
                    const obj2 = { recipientIds: user.id };
                    obj.openPrivateChannel(obj2);
                    const obj3 = ActionSheetActionCreatorsDefault;
                    obj3.hideAllActionSheets();
                  }
                }
              }
              const obj5 = { heading: tmp6, bodyText: first, children: tmp19 };
              cResult[15] = first;
              cResult[16] = tmp6;
              cResult[17] = tmp19;
              cResult[18] = closure_7(closure_11, obj5);
              const tmp26 = closure_7(closure_11, obj5);
            }
            const obj6 = { style: buttons, children: tmp17 };
            cResult[12] = tmp4.buttons;
            cResult[13] = tmp17;
            cResult[14] = closure_7(View, obj6);
            const tmp22 = closure_7(View, obj6);
          }
        }
        let obj2 = user(5048);
        name = obj2.getName(guildId, channelId, user);
        const intl = tmp(1126).intl;
        const formatToPlainStringResult = intl.formatToPlainString(name(1126).t.sjSitP, { name });
        cResult[0] = channelId;
        cResult[1] = guildId;
        cResult[2] = user;
        cResult[3] = name;
        cResult[4] = formatToPlainStringResult;
        tmp6 = formatToPlainStringResult;
      }
    : (user) => {
        let Button;
        let channelId;
        let guildId;
        let intl2;
        let obj3;
        let obj4;
        user = user.user;
        let name;
        ({ guildId, channelId } = user);
        const tmp = closure_10();
        let obj = name(5048);
        name = obj.getName(guildId, channelId, user);
        const intl = user(1126).intl;
        items = [user.id];
        const formatToPlainStringResult = intl.formatToPlainString(user(1126).t.sjSitP, { name });
        let obj2 = {
          heading: formatToPlainStringResult,
          bodyText: _slicedToArray(
            react.useState(() => {
              const obj = _mod12;
              let sampleResult = obj.sample(items);
              if (sampleResult == null) {
                sampleResult = items[0];
              }
              return sampleResult(name);
            }),
            1,
          )[0],
          children: closure_7(View, obj3),
        };
        obj3 = { style: tmp.buttons, children: closure_7(Button, obj4) };
        const callback = react.useCallback(() => {
          const obj = ChannelActionCreatorsDefault;
          const obj2 = { recipientIds: user.id };
          obj.openPrivateChannel(obj2);
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideAllActionSheets();
        }, items);
        obj4 = { size: "sm", variant: "secondary", text: intl2.string(user(1126).t["g33r/P"]), onPress: callback };
        Button = user(5601).Button;
        intl2 = user(1126).intl;
        return closure_7(closure_11, obj2);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let first;
        let intl3;
        let obj4;
        let tmp10;
        let tmp13;
        let tmp6;
        let tmp7;
        let obj = react2;
        const cResult = obj.c(6);
        const tmp4 = closure_10();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function t() {
            const obj = ActionSheetActionCreatorsDefault;
            obj.hideAllActionSheets();
            const obj2 = openUserSettings;
            const obj3 = { screen: constants.CONNECTIONS };
            obj2.openUserSettings(obj3);
          };
          cResult[0] = fn;
          first = fn;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl4.intl;
          const stringResult = intl.string(intl4.t.VB6LWY);
          const intl2 = intl4.intl;
          const stringResult1 = intl2.string(intl4.t.KpjsU9);
          cResult[1] = stringResult;
          cResult[2] = stringResult1;
          tmp7 = stringResult1;
          tmp6 = stringResult;
        } else {
          tmp6 = cResult[1];
          tmp7 = cResult[2];
        }
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          let obj2 = { size: "sm", variant: "secondary", text: intl3.string(intl4.t["/Hl24U"]), onPress: first };
          const Button = components_Button_Button.Button;
          intl3 = intl4.intl;
          const tmp12 = metroImportDefault(Button, obj2);
          cResult[3] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[3];
        }
        if (cResult[4] !== tmp4.buttons) {
          let obj3 = { heading: tmp6, bodyText: tmp7, children: metroImportDefault(View, obj4) };
          obj4 = { style: tmp4.buttons, children: tmp10 };
          const tmp17 = metroImportDefault(closure_11, obj3);
          cResult[4] = tmp4.buttons;
          cResult[5] = tmp17;
          tmp13 = tmp17;
        } else {
          tmp13 = cResult[5];
        }
        return tmp13;
      }
    : () => {
        let Button;
        let intl;
        let intl2;
        let intl3;
        let obj2;
        let obj3;
        let obj = {
          heading: intl.string(intl4.t.VB6LWY),
          bodyText: intl2.string(intl4.t.KpjsU9),
          children: metroImportDefault(View, obj2),
        };
        const tmp = closure_10();
        const callback = react.useCallback(() => {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideAllActionSheets();
          const obj2 = openUserSettings;
          const obj3 = { screen: constants.CONNECTIONS };
          obj2.openUserSettings(obj3);
        }, []);
        intl = intl4.intl;
        intl2 = intl4.intl;
        obj2 = { style: tmp.buttons, children: metroImportDefault(Button, obj3) };
        obj3 = { size: "sm", variant: "secondary", text: intl3.string(intl4.t["/Hl24U"]), onPress: callback };
        Button = components_Button_Button.Button;
        intl3 = intl4.intl;
        return metroImportDefault(closure_11, obj);
      },
);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityEmptyStates.tsx");

export const UserProfileActivityEmptyOtherUser = memoResult;
export const UserProfileActivityEmptyCurrentUser = memo2Result;
