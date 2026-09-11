// === Module 13162: UserProfileActivityEmptyStates ===

// Module 13162 (UserProfileActivityEmptyStates)
import _mod12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import Text_Text from "Text/Text" /* 4602 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4619 */;
import components_Button_Button from "components/Button/Button" /* 5026 */;
import openUserSettings from "openUserSettings" /* 7455 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function EmptyState(arg0) {
  ({ heading, bodyText, children } = arg0);
  const tmp = closure_10();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.text, children: null };
  obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", style: tmp.centeredText, children: heading };
  items = [React5(Text_Text.Text, obj), React5(Text_Text.Text, { variant: "text-sm/normal", style: tmp.centeredText, children: bodyText })];
  obj.children = items;
  const items1 = [React6(View, obj), children];
  obj.children = items1;
  return React6(View, obj);
}
const View = fn(17).View;
const UserSettingsSections = fn(1074).UserSettingsSections;
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
fn(4606);
let obj = { container: null, text: null, centeredText: null, buttons: null };
obj = { alignItems: "center", paddingVertical: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_16 };
obj.container = obj;
const createStyles = { gap: nativeDefault.space.PX_8, alignItems: "center" };
obj.text = createStyles;
obj.centeredText = { textAlign: "center" };
obj.buttons = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj);
const obj2 = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: nativeDefault.space.PX_8 };
const memoResult = noop.memo((user) => {
  user = user.user;
  let name;
  ({ guildId, channelId } = user);
  let obj = name(4758);
  name = obj.getName(guildId, channelId, user);
  const intl = user(1114).intl;
  const tmp = closure_10();
  items = [user.id];
  obj = {
    heading: intl.formatToPlainString(user(1114).t.sjSitP, { name }),
    bodyText: _slicedToArray(noop.useState(() => {
      let sampleResult = _mod12.sample(items);
      if (sampleResult == null) {
        sampleResult = items[0];
      }
      return sampleResult(name);
    }), 1)[0],
    children: null
  };
  obj = { style: tmp.buttons, children: null };
  const callback = noop.useCallback(() => {
    const obj = { recipientIds: user.id };
    obj.openPrivateChannel(obj);
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
  }, items);
  const obj1 = { size: "sm", variant: "secondary", text: null, onPress: null };
  const intl2 = user(1114).intl;
  obj1.text = intl2.string(user(1114).t["g33r/P"]);
  obj1.onPress = callback;
  obj.children = closure_7(user(5026).Button, obj1);
  obj.children = closure_7(View, obj);
  return closure_7(EmptyState, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityEmptyStates.tsx");

export const UserProfileActivityEmptyOtherUser = memoResult;
export const UserProfileActivityEmptyCurrentUser = noop.memo(() => {
  let obj = { heading: null, bodyText: null, children: null };
  const callback = noop.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    obj.hideAllActionSheets();
    obj = { screen: constants.CONNECTIONS };
    openUserSettings.openUserSettings(obj);
  }, []);
  const intl = util.intl;
  obj.heading = intl.string(util.t.VB6LWY);
  const intl2 = util.intl;
  obj.bodyText = intl2.string(util.t.KpjsU9);
  obj = { style: closure_10().buttons, children: null };
  obj = { size: "sm", variant: "secondary", text: null, onPress: null };
  const intl3 = util.intl;
  obj.text = intl3.string(util.t["/Hl24U"]);
  obj.onPress = callback;
  obj.children = React5(components_Button_Button.Button, obj);
  obj.children = React5(View, obj);
  return React5(EmptyState, obj);
});