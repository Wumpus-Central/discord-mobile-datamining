// discord_app/modules/guild_moderation/native/BanConfirm.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import DurationsDefault from "../../../utils/Durations.tsx";
import util from "../../../intl/index.native.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
let items = [
  {
    value: 0,
    getLabel() {
      const intl = util.intl;
      return intl.string(util.t["4obaMS"]);
    },
  },
  {
    value: DurationsDefault.Seconds.HOUR,
    getLabel() {
      const intl = util.intl;
      return intl.string(util.t.RKpitY);
    },
  },
  ,
  ,
  ,
  ,
];
let obj = {
  value: 0,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t["4obaMS"]);
  },
};
let obj2 = {
  value: DurationsDefault.Seconds.HOUR,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.RKpitY);
  },
};
items[2] = {
  value: 6 * DurationsDefault.Seconds.HOUR,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t["8WfJZ8"]);
  },
};
let obj3 = {
  value: 6 * DurationsDefault.Seconds.HOUR,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t["8WfJZ8"]);
  },
};
items[3] = {
  value: 12 * DurationsDefault.Seconds.HOUR,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.p1up7u);
  },
};
let obj4 = {
  value: 12 * DurationsDefault.Seconds.HOUR,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.p1up7u);
  },
};
items[4] = {
  value: DurationsDefault.Seconds.DAY,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.XuVkkD);
  },
};
let obj5 = {
  value: DurationsDefault.Seconds.DAY,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.XuVkkD);
  },
};
items[5] = {
  value: 3 * DurationsDefault.Seconds.DAY,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t["gMcDS+"]);
  },
};
let obj6 = {
  value: 3 * DurationsDefault.Seconds.DAY,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t["gMcDS+"]);
  },
};
items[6] = {
  value: 7 * DurationsDefault.Seconds.DAY,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.FA7IUk);
  },
};
const createStyles = fn(4836);
let obj8 = { container: null, iconLabelBlock: null, iconStyles: null, blurb: null, redText: null, errorText: null };
let obj7 = {
  value: 7 * DurationsDefault.Seconds.DAY,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.FA7IUk);
  },
};
obj8.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj8.iconLabelBlock = {
  marginTop: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_16,
  alignItems: "center",
};
let obj11 = {
  marginTop: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_16,
  alignItems: "center",
};
obj8.iconStyles = { height: 1.25 * nativeDefault.space.PX_96 };
let obj12 = { height: 1.25 * nativeDefault.space.PX_96 };
obj8.blurb = { marginVertical: nativeDefault.space.PX_16 };
let obj13 = { marginVertical: nativeDefault.space.PX_16 };
obj8.redText = {
  marginTop: nativeDefault.space.PX_12,
  marginBottom: nativeDefault.space.PX_4,
  color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL,
};
let obj14 = {
  marginTop: nativeDefault.space.PX_12,
  marginBottom: nativeDefault.space.PX_4,
  color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL,
};
obj8.errorText = { marginBottom: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj8);
let obj15 = { marginBottom: nativeDefault.space.PX_16 };
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
  const items1 = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => GuildStore.getGuild(require));
  const obj2 = require("initialize");
  const items2 = [UserStore];
  stateFromStores1 = require("initialize").useStateFromStores(items2, () => UserStore.getUser(importDefault));
  ref = stateFromStores1.useRef(0);
  const ref2 = stateFromStores1.useRef("");
  const obj3 = require("initialize");
  [tmp11, c7] = stateFromStores(
    stateFromStores1.useState(() => ({ banning: false, banError: false })),
    2,
  );
  const items3 = [stateFromStores, stateFromStores1, onBan];
  let tmp14Result2 = null;
  if (null != stateFromStores1) {
    tmp14Result2 = null;
    if (null != stateFromStores) {
      const obj4 = { style: tmp.container, ref, contentContainerStyle: null, children: null };
      const obj5 = { paddingHorizontal: require("native").space.PX_24, paddingBottom: insets.bottom };
      obj4.contentContainerStyle = obj5;
      const obj6 = { style: tmp.iconLabelBlock, children: null };
      const obj7 = {
        style: tmp.iconStyles,
        source: require("../../../../_runtime/metro/11331__.js"),
        resizeMode: "contain",
      };
      const items4 = [closure_10(ref, obj7), ,];
      const obj8 = { style: tmp.redText, variant: "text-md/semibold", children: null };
      const intl = require("util").intl;
      const obj9 = { username: require("UserUtils").getName(stateFromStores1) };
      obj8.children = intl.format(require("util").t.Qd6w7T, obj9);
      items4[1] = closure_10(require("Text/Text").Text, obj8);
      const obj10 = { variant: "text-lg/bold", color: "text-feedback-warning", children: stateFromStores.name };
      items4[2] = closure_10(require("Text/Text").Text, obj10);
      obj6.children = items4;
      const items5 = [closure_11(ref2, obj6), , , , ,];
      const obj11 = { style: tmp.blurb, variant: "heading-md/normal", color: "text-feedback-warning", children: null };
      const intl2 = require("util").intl;
      const obj12 = { user: null };
      const tmp15 = c7;
      const tmp4Result = require("UserUtils");
      obj12.user = require("UserUtils").getName(stateFromStores1);
      obj11.children = intl2.format(require("util").t["8jV9fx"], obj12);
      items5[1] = closure_10(require("Text/Text").Text, obj11);
      const obj13 = { title: null, defaultValue: null, onChange: null, hasIcons: false, children: null };
      const intl3 = require("util").intl;
      obj13.title = intl3.string(require("util").t["8l3W0y"]);
      obj13.defaultValue = items[0].value;
      obj13.onChange = function onChange(current) {
        closure_5.current = current;
      };
      obj13.children = items.map((getLabel, value) =>
        closure_1_10(require("TableRadioRow").TableRadioRow, { value, label: getLabel.getLabel() }, value),
      );
      items5[2] = closure_10(require("TableRadioGroup").TableRadioGroup, obj13);
      const obj14 = { ref: ref1, containerStyle: null, label: null, maxLength: 512, onChange: null };
      const obj15 = { marginVertical: require("native").space.PX_16 };
      obj14.containerStyle = obj15;
      const intl4 = require("util").intl;
      obj14.label = intl4.string(require("util").t.w4Ivys);
      obj14.onChange = function onChange(current) {
        closure_6.current = current;
      };
      items5[3] = closure_10(require("TextArea").TextArea, obj14);
      const obj16 = { style: null, children: null };
      const obj17 = { marginBottom: require("native").space.PX_16 };
      obj16.style = obj17;
      const obj18 = { variant: "destructive", text: null, onPress: null, disabled: null };
      const intl5 = require("util").intl;
      obj18.text = intl5.string(require("util").t["5MBJ5M"]);
      obj18.onPress = tmp12;
      obj18.disabled = tmp11.banning;
      obj16.children = closure_10(require("components/Button/Button").Button, obj18);
      items5[4] = closure_10(ref2, obj16);
      let tmp14Result = null;
      if (tmp11.banError) {
        const obj19 = {
          style: tmp.errorText,
          variant: "text-md/semibold",
          color: "input-text-error-default",
          children: null,
        };
        const intl6 = require("util").intl;
        const obj20 = { user: require("UserUtils").getName(stateFromStores1) };
        obj19.children = intl6.format(require("util").t["/K6eer"], obj20);
        tmp14Result = closure_10(require("Text/Text").Text, obj19);
        const tmp4Result4 = require("UserUtils");
      }
      const obj21 = { children: null };
      items5[5] = tmp14Result;
      obj21.children = items5;
      obj4.children = closure_11(closure_12, obj21);
      tmp14Result2 = closure_10(tmp15, obj4);
      const tmp4Result3 = require("UserUtils");
    }
  }
  return tmp14Result2;
});
