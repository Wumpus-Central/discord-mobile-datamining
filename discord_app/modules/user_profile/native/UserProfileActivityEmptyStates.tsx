// === Module 13217: UserProfileActivityEmptyStates ===

// Module 13217 (UserProfileActivityEmptyStates)
import _mod12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Text_Text from "Text/Text" /* 5086 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 7001 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const UserSettingsSections = fn(1085).UserSettingsSections;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let items = [
  () => {
    const intl = util.intl;
    return intl.string(util.t.AyMGXA);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.aAFW7V);
  },
  (name) => {
    const intl = util.intl;
    return intl.formatToPlainString(util.t.h2g0cM, { name });
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.rrYh58);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t["HX3K+F"]);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t["/yW3aY"]);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t["PmL/v0"]);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.IALa3h);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.HRcTFL);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.NuCqPt);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t["M1tw+4"]);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.UBm1y2);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.Cu95PQ);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t["R/wFuh"]);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.HQPAVT);
  },
  () => {
    const intl = util.intl;
    return intl.string(util.t.YolGh4);
  }
];
const createStyles = fn(5090);
let obj = { container: { alignItems: "center", paddingVertical: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_16 }, text: null, centeredText: null, buttons: null };
let obj3 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_16 };
obj.text = { gap: nativeDefault.space.PX_8, alignItems: "center" };
obj.centeredText = { textAlign: "center" };
let obj4 = { gap: nativeDefault.space.PX_8, alignItems: "center" };
obj.buttons = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? (function EmptyState(arg0) {
  const cResult = c.c(14);
  ({ heading, bodyText, children } = arg0);
  const tmp4 = closure_10();
  if (cResult[0] === heading) {
    if (cResult[1] === tmp4.centeredText) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === bodyText) {
      if (cResult[4] === tmp4.centeredText) {
        let tmp7 = cResult[5];
      }
      if (cResult[6] === tmp4.text) {
        if (cResult[7] === tmp5) {
          if (cResult[8] === tmp7) {
            let tmp10 = cResult[9];
          }
          if (cResult[10] === children) {
            if (cResult[11] === tmp4.container) {
              if (cResult[12] === tmp10) {
                let tmp14 = cResult[13];
              }
              return tmp14;
            }
          }
          const obj2 = { style: tmp4.container, children: null };
          items = [tmp10, children];
          obj2.children = items;
          const tmp17 = closure_1_8(View, obj2);
          cResult[10] = children;
          cResult[11] = tmp4.container;
          cResult[12] = tmp10;
          cResult[13] = tmp17;
          tmp14 = tmp17;
        }
      }
      const obj3 = { style: tmp4.text, children: null };
      const items1 = [tmp5, tmp7];
      obj3.children = items1;
      const tmp13 = closure_1_8(View, obj3);
      cResult[6] = tmp4.text;
      cResult[7] = tmp5;
      cResult[8] = tmp7;
      cResult[9] = tmp13;
      tmp10 = tmp13;
    }
    const obj4 = { variant: "text-sm/normal", style: tmp4.centeredText, children: bodyText };
    const tmp9 = React5(Text_Text.Text, obj4);
    cResult[3] = bodyText;
    cResult[4] = tmp4.centeredText;
    cResult[5] = tmp9;
    tmp7 = tmp9;
  }
  const tmp6 = React5(Text_Text.Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", style: tmp4.centeredText, children: heading });
  cResult[0] = heading;
  cResult[1] = tmp4.centeredText;
  cResult[2] = tmp6;
  tmp5 = tmp6;
  const obj5 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", style: tmp4.centeredText, children: heading };
}) : (function EmptyState(arg0) {
  ({ heading, bodyText, children } = arg0);
  const tmp = closure_10();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.text, children: null };
  items = [React5(Text_Text.Text, { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", style: tmp.centeredText, children: heading }), React5(Text_Text.Text, { variant: "text-sm/normal", style: tmp.centeredText, children: bodyText })];
  obj2.children = items;
  const items1 = [closure_1_8(View, obj2), children];
  obj.children = items1;
  return closure_1_8(View, obj);
});
fn(558);
let obj5 = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: nativeDefault.space.PX_8 };
ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileActivityEmptyOtherUser(user) {
  const cResult = name(576).c(19);
  user = user.user;
  ({ guildId, channelId } = user);
  const tmp4 = closure_10();
  if (cResult[0] === channelId) {
    if (cResult[1] === guildId) {
      if (cResult[2] === user) {
        name = cResult[3];
        let tmp6 = cResult[4];
      }
      if (cResult[5] !== tmp5) {
        class T {
          constructor() {
            obj = closure_0(closure_2[12]);
            tmp = closure_9;
            sampleResult = obj.sample(closure_9);
            if (sampleResult == null) {
              sampleResult = tmp[0];
            }
            return sampleResult(closure_0);
          }
        }
        cResult[5] = tmp5;
        cResult[6] = T;
      } else {
        class T {
          constructor() {
            obj = closure_0(closure_2[12]);
            tmp = closure_9;
            sampleResult = obj.sample(closure_9);
            if (sampleResult == null) {
              sampleResult = tmp[0];
            }
            return sampleResult(closure_0);
          }
        }
      }
      const first = _slicedToArray(noop.useState(T), 1)[0];
      if (cResult[7] !== user.id) {
        class A {
          constructor() {
            obj = closure_1(closure_2[13]);
            obj1 = { recipientIds: user.id };
            openPrivateChannelResult = obj.openPrivateChannel(obj1);
            obj3 = closure_1(closure_2[14]);
            hideAllActionSheetsResult = obj3.hideAllActionSheets();
            return;
          }
        }
        cResult[7] = user.id;
        cResult[8] = A;
      } else {
        class A {
          constructor() {
            obj = closure_1(closure_2[13]);
            obj1 = { recipientIds: user.id };
            openPrivateChannelResult = obj.openPrivateChannel(obj1);
            obj3 = closure_1(closure_2[14]);
            hideAllActionSheetsResult = obj3.hideAllActionSheets();
            return;
          }
        }
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class A {
          constructor() {
            obj = closure_1(closure_2[13]);
            obj1 = { recipientIds: user.id };
            openPrivateChannelResult = obj.openPrivateChannel(obj1);
            obj3 = closure_1(closure_2[14]);
            hideAllActionSheetsResult = obj3.hideAllActionSheets();
            return;
          }
        }
        const stringResult = obj3.string(tmp(1126).t["g33r/P"]);
        cResult[9] = stringResult;
        const tmp15 = stringResult;
      } else {
        class A {
          constructor() {
            obj = closure_1(closure_2[13]);
            obj1 = { recipientIds: user.id };
            openPrivateChannelResult = obj.openPrivateChannel(obj1);
            obj3 = closure_1(closure_2[14]);
            hideAllActionSheetsResult = obj3.hideAllActionSheets();
            return;
          }
        }
      }
      if (cResult[10] !== A) {
        class A {
          constructor() {
            obj = closure_1(closure_2[13]);
            obj1 = { recipientIds: user.id };
            openPrivateChannelResult = obj.openPrivateChannel(obj1);
            obj3 = closure_1(closure_2[14]);
            hideAllActionSheetsResult = obj3.hideAllActionSheets();
            return;
          }
        }
        const obj4 = { size: "sm", variant: "secondary", text: tmp15, onPress: A };
        const tmp18 = closure_7(tmp(5375).Button, obj4);
        cResult[10] = A;
        cResult[11] = tmp18;
      } else {
        class A {
          constructor() {
            obj = closure_1(closure_2[13]);
            obj1 = { recipientIds: user.id };
            openPrivateChannelResult = obj.openPrivateChannel(obj1);
            obj3 = closure_1(closure_2[14]);
            hideAllActionSheetsResult = obj3.hideAllActionSheets();
            return;
          }
        }
      }
      if (cResult[12] === tmp4.buttons) {
        class A {
          constructor() {
            obj = closure_1(closure_2[13]);
            obj1 = { recipientIds: user.id };
            openPrivateChannelResult = obj.openPrivateChannel(obj1);
            obj3 = closure_1(closure_2[14]);
            hideAllActionSheetsResult = obj3.hideAllActionSheets();
            return;
          }
        }
        if (cResult[15] === first) {
          class A {
            constructor() {
              obj = closure_1(closure_2[13]);
              obj1 = { recipientIds: user.id };
              openPrivateChannelResult = obj.openPrivateChannel(obj1);
              obj3 = closure_1(closure_2[14]);
              hideAllActionSheetsResult = obj3.hideAllActionSheets();
              return;
            }
          }
        }
        const obj5 = { heading: tmp6, bodyText: first, children: tmp19 };
        const tmp26 = closure_7(closure_11, obj5);
        cResult[15] = first;
        cResult[16] = tmp6;
        cResult[17] = tmp19;
        cResult[18] = tmp26;
      }
      const obj6 = { style: tmp4.buttons, children: tmp17 };
      const tmp22 = closure_7(View, obj6);
      cResult[12] = tmp4.buttons;
      cResult[13] = tmp17;
      cResult[14] = tmp22;
    }
  }
  let obj = name(576);
  name = user(5405).getName(guildId, channelId, user);
  const intl = tmp(1126).intl;
  const formatToPlainStringResult = intl.formatToPlainString(name(1126).t.sjSitP, { name });
  cResult[0] = channelId;
  cResult[1] = guildId;
  cResult[2] = user;
  cResult[3] = name;
  cResult[4] = formatToPlainStringResult;
  tmp6 = formatToPlainStringResult;
  let obj2 = user(5405);
}) : (function UserProfileActivityEmptyOtherUser(user) {
  user = user.user;
  let name;
  ({ guildId, channelId } = user);
  const tmp = closure_10();
  name = name(5405).getName(guildId, channelId, user);
  const intl = user(1126).intl;
  let obj = name(5405);
  items = [user.id];
  let obj2 = {
    heading: intl.formatToPlainString(user(1126).t.sjSitP, { name }),
    bodyText: _slicedToArray(noop.useState(() => {
      let sampleResult = _mod12.sample(items);
      if (sampleResult == null) {
        sampleResult = items[0];
      }
      return sampleResult(name);
    }), 1)[0],
    children: null
  };
  const obj3 = { style: tmp.buttons, children: null };
  const callback = noop.useCallback(() => {
    ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: user.id });
    const obj2 = { recipientIds: user.id };
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
  }, items);
  const obj4 = { size: "sm", variant: "secondary", text: null, onPress: null };
  const intl2 = user(1126).intl;
  obj4.text = intl2.string(user(1126).t["g33r/P"]);
  obj4.onPress = callback;
  obj3.children = closure_7(user(5375).Button, obj4);
  obj2.children = closure_7(View, obj3);
  return closure_7(closure_11, obj2);
}));
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityEmptyStates.tsx");

export const UserProfileActivityEmptyOtherUser = memoResult;
export const UserProfileActivityEmptyCurrentUser = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileActivityEmptyCurrentUser() {
  const cResult = c.c(6);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t() {
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      require("openUserSettings").openUserSettings({ screen: constants.CONNECTIONS });
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.VB6LWY);
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.KpjsU9);
    cResult[1] = stringResult;
    cResult[2] = stringResult1;
    let tmp7 = stringResult1;
    let tmp6 = stringResult;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { size: "sm", variant: "secondary", text: null, onPress: null };
    const intl3 = util.intl;
    obj2.text = intl3.string(util.t["/Hl24U"]);
    obj2.onPress = first;
    const tmp12 = React5(components_Button_Button.Button, obj2);
    cResult[3] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] !== tmp4.buttons) {
    const obj3 = { heading: tmp6, bodyText: tmp7, children: null };
    const obj4 = { style: tmp4.buttons, children: tmp10 };
    obj3.children = React5(View, obj4);
    const tmp17 = React5(closure_11, obj3);
    cResult[4] = tmp4.buttons;
    cResult[5] = tmp17;
    let tmp13 = tmp17;
  } else {
    tmp13 = cResult[5];
  }
  return tmp13;
}) : (function UserProfileActivityEmptyCurrentUser() {
  let obj = { heading: null, bodyText: null, children: null };
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    require("openUserSettings").openUserSettings({ screen: constants.CONNECTIONS });
  }, []);
  const intl = util.intl;
  obj.heading = intl.string(util.t.VB6LWY);
  const intl2 = util.intl;
  obj.bodyText = intl2.string(util.t.KpjsU9);
  const obj2 = { style: closure_10().buttons, children: null };
  const obj3 = { size: "sm", variant: "secondary", text: null, onPress: null };
  const intl3 = util.intl;
  obj3.text = intl3.string(util.t["/Hl24U"]);
  obj3.onPress = callback;
  obj2.children = React5(components_Button_Button.Button, obj3);
  obj.children = React5(View, obj2);
  return React5(closure_11, obj);
}));