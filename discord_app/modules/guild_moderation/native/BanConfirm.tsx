// === Module 11851: BanConfirm ===

// Module 11851 (BanConfirm)
import nativeDefault from "native" /* 576 */;
import DurationsDefault from "Durations" /* 1090 */;
import util from "util" /* 1114 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5520 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 1979 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let obj = {
  value: 0,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t["4obaMS"]);
  }
};
let items = [obj, , , , , , ];
obj = {
  value: DurationsDefault.Seconds.HOUR,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.RKpitY);
  }
};
items[1] = obj;
items[2] = {
  value: 6 * DurationsDefault.Seconds.HOUR,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t["8WfJZ8"]);
  }
};
let obj1 = {
  value: 6 * DurationsDefault.Seconds.HOUR,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t["8WfJZ8"]);
  }
};
items[3] = {
  value: 12 * DurationsDefault.Seconds.HOUR,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.p1up7u);
  }
};
let obj2 = {
  value: 12 * DurationsDefault.Seconds.HOUR,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.p1up7u);
  }
};
items[4] = {
  value: DurationsDefault.Seconds.DAY,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.XuVkkD);
  }
};
let obj3 = {
  value: DurationsDefault.Seconds.DAY,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.XuVkkD);
  }
};
items[5] = {
  value: 3 * DurationsDefault.Seconds.DAY,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t["gMcDS+"]);
  }
};
let obj4 = {
  value: 3 * DurationsDefault.Seconds.DAY,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t["gMcDS+"]);
  }
};
items[6] = {
  value: 7 * DurationsDefault.Seconds.DAY,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.FA7IUk);
  }
};
fn(4560);
let obj6 = { container: null, iconLabelBlock: null, iconStyles: null, blurb: null, redText: null, errorText: null };
let obj5 = {
  value: 7 * DurationsDefault.Seconds.DAY,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.FA7IUk);
  }
};
obj6.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const createStyles = { marginTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
obj6.iconLabelBlock = createStyles;
let obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj6.iconStyles = { height: 1.25 * nativeDefault.space.PX_96 };
let obj9 = { height: 1.25 * nativeDefault.space.PX_96 };
obj6.blurb = { marginVertical: nativeDefault.space.PX_16 };
let obj10 = { marginVertical: nativeDefault.space.PX_16 };
obj6.redText = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let obj11 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj6.errorText = { marginBottom: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj6);
let obj12 = { marginBottom: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_moderation/native/BanConfirm.tsx");

export default noop.memo(function BanConfirm(arg0) {
  ({ guildId: require, userId: importDefault, onBan } = arg0);
  let stateFromStores1;
  c7 = undefined;
  const tmp = closure_14();
  let ref = stateFromStores1.useRef(null);
  const ref1 = stateFromStores1.useRef(null);
  const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  let obj = { insets, inputs: null, scrollViewRef: ref };
  items = [{ ref: ref1, offset: { type: "toBottom" } }];
  obj.inputs = items;
  require("useSafeAreaAvoidingInputs")(obj);
  let obj1 = require("initialize");
  const items1 = [GuildStore];
  const stateFromStores = obj1.useStateFromStores(items1, () => GuildStore.getGuild(require));
  let obj2 = require("initialize");
  const items2 = [UserStore];
  stateFromStores1 = obj2.useStateFromStores(items2, () => UserStore.getUser(importDefault));
  ref = stateFromStores1.useRef(0);
  const ref2 = stateFromStores1.useRef("");
  [tmp11, c7] = stateFromStores(stateFromStores1.useState(() => ({ banning: false, banError: false })), 2);
  const items3 = [stateFromStores, stateFromStores1, onBan];
  let tmp14Result = null;
  if (null != stateFromStores1) {
    tmp14Result = null;
    if (null != stateFromStores) {
      obj = { style: tmp.container, ref, contentContainerStyle: null, children: null };
      obj = { paddingHorizontal: tmp4(tmp5[9]).space.PX_24, paddingBottom: insets.bottom };
      obj.contentContainerStyle = obj;
      obj1 = { style: tmp.iconLabelBlock, children: null };
      obj2 = { style: tmp.iconStyles, source: tmp4(tmp5[14]), resizeMode: "contain" };
      const items4 = [closure_10(ref, obj2), , ];
      const obj3 = { style: tmp.redText, variant: "text-md/semibold", children: null };
      const intl = tmp7(tmp5[6]).intl;
      const obj4 = { username: null };
      let tmp4Result = tmp4(tmp5[16]);
      obj4.username = tmp4Result.getName(stateFromStores1);
      obj3.children = intl.format(tmp7(tmp5[6]).t.Qd6w7T, obj4);
      items4[1] = closure_10(tmp7(tmp5[15]).Text, obj3);
      const obj5 = { variant: "text-lg/bold", color: "text-feedback-warning", children: stateFromStores.name };
      items4[2] = closure_10(tmp7(tmp5[15]).Text, obj5);
      obj1.children = items4;
      const items5 = [closure_11(ref2, obj1), , , , , ];
      const obj6 = { style: tmp.blurb, variant: "heading-md/normal", color: "text-feedback-warning", children: null };
      const intl2 = tmp7(tmp5[6]).intl;
      const obj7 = { user: null };
      tmp4Result = tmp4(tmp5[16]);
      obj7.user = tmp4Result.getName(stateFromStores1);
      obj6.children = intl2.format(tmp7(tmp5[6]).t["8jV9fx"], obj7);
      items5[1] = closure_10(tmp7(tmp5[15]).Text, obj6);
      const obj8 = { title: null, defaultValue: null, onChange: null, hasIcons: false, children: null };
      const intl3 = tmp7(tmp5[6]).intl;
      obj8.title = intl3.string(tmp7(tmp5[6]).t["8l3W0y"]);
      obj8.defaultValue = items[0].value;
      obj8.onChange = function onChange(current) {
        closure_5.current = current;
      };
      obj8.children = items.map((getLabel, value) => closure_1_10(require("TableRadioRow").TableRadioRow, { value, label: getLabel.getLabel() }, value));
      items5[2] = closure_10(tmp7(tmp5[17]).TableRadioGroup, obj8);
      const obj9 = { ref: ref1, containerStyle: null, label: null, maxLength: 512, onChange: null };
      const obj10 = { marginVertical: tmp4(tmp5[9]).space.PX_16 };
      obj9.containerStyle = obj10;
      const intl4 = tmp7(tmp5[6]).intl;
      obj9.label = intl4.string(tmp7(tmp5[6]).t.w4Ivys);
      obj9.onChange = function onChange(current) {
        closure_6.current = current;
      };
      items5[3] = closure_10(tmp7(tmp5[19]).TextArea, obj9);
      const obj11 = { style: null, children: null };
      const obj12 = { marginBottom: tmp4(tmp5[9]).space.PX_16 };
      obj11.style = obj12;
      const obj13 = { variant: "destructive", text: null, onPress: null, disabled: null };
      const intl5 = tmp7(tmp5[6]).intl;
      obj13.text = intl5.string(tmp7(tmp5[6]).t["5MBJ5M"]);
      obj13.onPress = tmp12;
      obj13.disabled = tmp11.banning;
      obj11.children = closure_10(tmp7(tmp5[20]).Button, obj13);
      items5[4] = closure_10(ref2, obj11);
      tmp14Result = null;
      if (tmp11.banError) {
        const obj14 = { style: tmp.errorText, variant: "text-md/semibold", color: "input-text-error-default", children: null };
        const intl6 = tmp7(tmp5[6]).intl;
        const obj15 = { user: tmp4(tmp5[16]).getName(stateFromStores1) };
        obj14.children = intl6.format(tmp7(tmp5[6]).t["/K6eer"], obj15);
        tmp14Result = tmp14(tmp7(tmp5[15]).Text, obj14);
        const tmp4Result1 = tmp4(tmp5[16]);
      }
      const obj16 = { children: null };
      items5[5] = tmp14Result;
      obj16.children = items5;
      obj.children = closure_11(closure_12, obj16);
      tmp14Result = tmp14(c7, obj);
    }
  }
  return tmp14Result;
});