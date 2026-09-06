// discord_app/modules/guild_moderation/native/KickConfirm.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import GuildActionCreatorsDefault from "../../../actions/GuildActionCreators.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
fn(4560);
let obj = { container: null, iconLabelBlock: null, iconStyles: null, redText: null, blurb: null, errorText: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const createStyles = {
  marginTop: nativeDefault.space.PX_16,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.lg,
  paddingTop: nativeDefault.space.PX_8,
  paddingBottom: nativeDefault.space.PX_16,
  alignItems: "center",
};
obj.iconLabelBlock = createStyles;
obj.iconStyles = { height: 1.25 * nativeDefault.space.PX_96 };
let obj2 = { height: 1.25 * nativeDefault.space.PX_96 };
obj.redText = {
  marginTop: nativeDefault.space.PX_12,
  marginBottom: nativeDefault.space.PX_4,
  color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL,
};
let obj3 = {
  marginTop: nativeDefault.space.PX_12,
  marginBottom: nativeDefault.space.PX_4,
  color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL,
};
obj.blurb = { marginVertical: nativeDefault.space.PX_16 };
let obj4 = { marginVertical: nativeDefault.space.PX_16 };
obj.errorText = { marginBottom: nativeDefault.space.PX_16 };
let closure_13 = createStyles.createStyles(obj);
let obj5 = { marginBottom: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_moderation/native/KickConfirm.tsx");

export default noop.memo(function KickConfirm(arg0) {
  ({ guildId: require, userId: importDefault, onKick } = arg0);
  let stateFromStores1;
  c6 = undefined;
  const tmp = closure_13();
  let ref = stateFromStores1.useRef(null);
  const ref1 = stateFromStores1.useRef(null);
  const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  let obj = { insets, inputs: null, scrollViewRef: ref };
  const items = [{ ref: ref1, offset: { type: "toBottom" } }];
  obj.inputs = items;
  require("useSafeAreaAvoidingInputs")(obj);
  let obj1 = require("initialize");
  const items1 = [GuildStore];
  const stateFromStores = obj1.useStateFromStores(items1, () => GuildStore.getGuild(require));
  let obj2 = require("initialize");
  const items2 = [UserStore];
  stateFromStores1 = obj2.useStateFromStores(items2, () => UserStore.getUser(importDefault));
  ref = stateFromStores1.useRef("");
  [tmp11, c6] = stateFromStores(
    stateFromStores1.useState(() => ({ kicking: false, kickError: false })),
    2,
  );
  const items3 = [stateFromStores, onKick, stateFromStores1];
  let tmp14Result = null;
  if (null != stateFromStores1) {
    tmp14Result = null;
    if (null != stateFromStores) {
      obj = { style: tmp.container, ref, contentContainerStyle: null, children: null };
      obj = { paddingHorizontal: require("native").space.PX_24, paddingBottom: insets.bottom };
      obj.contentContainerStyle = obj;
      obj1 = { style: tmp.iconLabelBlock, children: null };
      obj2 = { style: tmp.iconStyles, source: require("../../../../_runtime/metro/11850__.js"), resizeMode: "contain" };
      const items4 = [closure_10(ref, obj2), ,];
      const obj3 = { style: tmp.redText, variant: "text-md/semibold", children: null };
      const intl = require("util").intl;
      const obj4 = { user: null };
      let tmp4Result = require("UserUtils");
      obj4.user = tmp4Result.getName(stateFromStores1);
      obj3.children = intl.formatToPlainString(require("util").t["1Ie87p"], obj4);
      items4[1] = closure_10(require("Text/Text").Text, obj3);
      const obj5 = { variant: "text-lg/bold", color: "text-feedback-warning", children: stateFromStores.name };
      items4[2] = closure_10(require("Text/Text").Text, obj5);
      obj1.children = items4;
      const items5 = [closure_11(c6, obj1), , , ,];
      const obj6 = { style: tmp.blurb, variant: "heading-md/normal", color: "text-feedback-warning", children: null };
      const intl2 = require("util").intl;
      const obj7 = { user: null };
      tmp4Result = require("UserUtils");
      obj7.user = tmp4Result.getName(stateFromStores1);
      obj6.children = intl2.format(require("util").t["/yH0UT"], obj7);
      items5[1] = closure_10(require("Text/Text").Text, obj6);
      const obj8 = { ref: ref1, containerStyle: null, label: null, maxLength: 512, onChange: null };
      const obj9 = { marginBottom: require("native").space.PX_16 };
      obj8.containerStyle = obj9;
      const intl3 = require("util").intl;
      obj8.label = intl3.string(require("util").t["+2QEPt"]);
      obj8.onChange = function onChange(current) {
        closure_5.current = current;
      };
      items5[2] = closure_10(require("TextArea").TextArea, obj8);
      const obj10 = { style: null, children: null };
      const obj11 = { marginBottom: require("native").space.PX_16 };
      obj10.style = obj11;
      const obj12 = { variant: "destructive", text: null, onPress: null, disabled: null };
      const intl4 = require("util").intl;
      obj12.text = intl4.string(require("util").t["3glT6Z"]);
      obj12.onPress = tmp12;
      obj12.disabled = tmp11.kicking;
      obj10.children = closure_10(require("components/Button/Button").Button, obj12);
      items5[3] = closure_10(c6, obj10);
      tmp14Result = null;
      if (tmp11.kickError) {
        const obj13 = {
          style: tmp.errorText,
          variant: "text-md/semibold",
          color: "input-text-error-default",
          children: null,
        };
        const intl5 = require("util").intl;
        const obj14 = { user: require("UserUtils").getName(stateFromStores1) };
        obj13.children = intl5.format(require("util").t.UktD5J, obj14);
        tmp14Result = closure_10(require("Text/Text").Text, obj13);
        const tmp4Result1 = require("UserUtils");
      }
      const obj15 = { children: null };
      items5[4] = tmp14Result;
      obj15.children = items5;
      obj.children = closure_11(closure_12, obj15);
      tmp14Result = closure_10(closure_7, obj);
    }
  }
  return tmp14Result;
});
