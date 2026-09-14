// discord_app/modules/user_profile/native/UserProfileActivityEmptyStates.tsx
import _mod12 from "../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ChannelActionCreatorsDefault from "../../../actions/ChannelActionCreators.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function EmptyState(arg0) {
  ({ heading, bodyText, children } = arg0);
  const tmp = closure_10();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.text, children: null };
  items = [
    React5(Text_Text.Text, {
      variant: "redesign/heading-18/bold",
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      style: tmp.centeredText,
      children: heading,
    }),
    React5(Text_Text.Text, { variant: "text-sm/normal", style: tmp.centeredText, children: bodyText }),
  ];
  obj2.children = items;
  const items1 = [React6(View, obj2), children];
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
  },
];
const createStyles = fn(4636);
let obj = {
  container: { alignItems: "center", paddingVertical: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_16 },
  text: null,
  centeredText: null,
  buttons: null,
};
let obj3 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_16 };
obj.text = { gap: nativeDefault.space.PX_8, alignItems: "center" };
obj.centeredText = { textAlign: "center" };
let obj4 = { gap: nativeDefault.space.PX_8, alignItems: "center" };
obj.buttons = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles.createStyles(obj);
const obj5 = { flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: nativeDefault.space.PX_8 };
const memoResult = noop.memo((user) => {
  user = user.user;
  let name;
  ({ guildId, channelId } = user);
  const tmp = closure_10();
  name = name(4788).getName(guildId, channelId, user);
  const intl = user(1114).intl;
  let obj = name(4788);
  items = [user.id];
  let obj2 = {
    heading: intl.formatToPlainString(user(1114).t.sjSitP, { name }),
    bodyText: _slicedToArray(
      noop.useState(() => {
        let sampleResult = _mod12.sample(items);
        if (sampleResult == null) {
          sampleResult = items[0];
        }
        return sampleResult(name);
      }),
      1,
    )[0],
    children: null,
  };
  const obj3 = { style: tmp.buttons, children: null };
  const callback = noop.useCallback(() => {
    ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: user.id });
    const obj2 = { recipientIds: user.id };
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
  }, items);
  const obj4 = { size: "sm", variant: "secondary", text: null, onPress: null };
  const intl2 = user(1114).intl;
  obj4.text = intl2.string(user(1114).t["g33r/P"]);
  obj4.onPress = callback;
  obj3.children = closure_7(user(5056).Button, obj4);
  obj2.children = closure_7(View, obj3);
  return closure_7(EmptyState, obj2);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityEmptyStates.tsx");

export const UserProfileActivityEmptyOtherUser = memoResult;
export const UserProfileActivityEmptyCurrentUser = noop.memo(() => {
  let obj = { heading: null, bodyText: null, children: null };
  const callback = noop.useCallback(() => {
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    openUserSettings.openUserSettings({ screen: constants.CONNECTIONS });
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
  return React5(EmptyState, obj);
});
