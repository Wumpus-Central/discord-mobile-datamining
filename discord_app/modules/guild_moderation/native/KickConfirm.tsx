// === Module 14044: KickConfirm ===

// Module 14044 (KickConfirm)
import nativeDefault from "native" /* 575 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6854 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 5114 */;
import UserStore from "UserStore" /* 1385 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: closure_6 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5243);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, iconLabelBlock: null, iconStyles: null, redText: null, conjureTitle: null, conjureServerName: null, blurb: null, conjureRemove: null, errorText: null, actions: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.iconLabelBlock = { marginTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
let obj4 = { marginTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
obj.iconStyles = { height: 1.25 * nativeDefault.space.PX_96 };
let obj5 = { height: 1.25 * nativeDefault.space.PX_96 };
obj.redText = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let obj6 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj.conjureTitle = { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, textAlign: "center" };
let obj7 = { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, textAlign: "center" };
obj.conjureServerName = { marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16, textAlign: "center" };
let obj8 = { marginTop: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_16, textAlign: "center" };
obj.blurb = { marginVertical: nativeDefault.space.PX_16 };
let obj9 = { marginVertical: nativeDefault.space.PX_16 };
obj.conjureRemove = { marginVertical: nativeDefault.space.PX_16 };
let obj10 = { marginVertical: nativeDefault.space.PX_16 };
obj.errorText = { marginBottom: nativeDefault.space.PX_16 };
let obj11 = { marginBottom: nativeDefault.space.PX_16 };
obj.actions = { marginBottom: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj);
let obj12 = { marginBottom: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_moderation/native/KickConfirm.tsx");

export default noop.memo(function KickConfirm(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const onKick = guildId.onKick;
  let stateFromStores1;
  c6 = undefined;
  const tmp = closure_12();
  let ref = stateFromStores1.useRef(null);
  const ref1 = stateFromStores1.useRef(null);
  const insets = userId(onKick[8])({ includeKeyboardHeight: true }).insets;
  const obj2 = { insets, inputs: null, scrollViewRef: ref };
  items = [{ ref: ref1, offset: { type: "toBottom" } }];
  obj2.inputs = items;
  userId(onKick[9])(obj2);
  const items1 = [GuildStore];
  const stateFromStores = guildId(onKick[10]).useStateFromStores(items1, () => GuildStore.getGuild(guildId));
  const obj3 = guildId(onKick[10]);
  const items2 = [UserStore];
  stateFromStores1 = guildId(onKick[10]).useStateFromStores(items2, () => UserStore.getUser(userId));
  const obj4 = guildId(onKick[10]);
  let bot;
  if (stateFromStores1 != null) {
    bot = stateFromStores1.bot;
  }
  let result = null;
  if (true === bot) {
    result = tmp7(tmp5[11]).conjureApplicationIdForBot(userId);
    const tmp7Result = tmp7(tmp5[11]);
  }
  const conjureServerApp = guildId(onKick[11]).useConjureServerApp(guildId, result);
  ref = obj.useRef("");
  const obj5 = guildId(onKick[11]);
  const tmp13 = null != conjureServerApp && !conjureServerApp.targetIsPreview;
  [tmp15, c6] = stateFromStores(stateFromStores1.useState(() => ({ kicking: false, kickError: false })), 2);
  const items3 = [stateFromStores, onKick, stateFromStores1];
  let tmp18Result6 = null;
  if (null != stateFromStores1) {
    tmp18Result6 = null;
    if (null != stateFromStores) {
      const obj6 = { style: tmp.container, ref, contentContainerStyle: null, children: null };
      const obj7 = { paddingHorizontal: tmp4(tmp5[7]).space.PX_24, paddingBottom: insets.bottom };
      obj6.contentContainerStyle = obj7;
      const obj8 = { style: tmp.iconLabelBlock, children: null };
      const obj9 = { style: tmp.iconStyles, source: tmp4(tmp5[14]), resizeMode: "contain" };
      const items4 = [closure_9(tmp4(tmp5[13]), obj9), ];
      if (null == conjureServerApp) {
        const obj10 = { children: null };
        const obj11 = { style: tmp.redText, variant: "body-md/semibold", children: null };
        const intl = tmp7(tmp5[16]).intl;
        const obj12 = { user: tmp4(tmp5[17]).getName(stateFromStores1) };
        obj11.children = intl.formatToPlainString(tmp7(tmp5[16]).t["1Ie87p"], obj12);
        const items5 = [closure_9(tmp7(tmp5[15]).Text, obj11), ];
        const obj13 = { variant: "body-lg/semibold", color: "text-feedback-warning", children: stateFromStores.name };
        items5[1] = closure_9(tmp7(tmp5[15]).Text, obj13);
        obj10.children = items5;
        let obj14 = obj10;
        const tmp4Result5 = tmp4(tmp5[17]);
      } else {
        obj14 = { children: null };
        const obj15 = { style: tmp.conjureTitle, variant: "body-lg/semibold", color: "mobile-text-heading-primary", children: tmp7(tmp5[18]).formatWithAppTag(tmp4(tmp5[19]).x6FvsZ, conjureServerApp.targetAppName) };
        const items6 = [closure_9(tmp7(tmp5[15]).Text, obj15), ];
        const obj16 = { style: tmp.conjureServerName, variant: "body-md/semibold", color: "text-muted", children: stateFromStores.name };
        items6[1] = closure_9(tmp7(tmp5[15]).Text, obj16);
        obj14.children = items6;
        const tmp7Result3 = tmp7(tmp5[18]);
      }
      items4[1] = closure_11(closure_10, obj14);
      obj8.children = items4;
      const items7 = [closure_11(ref, obj8), , ];
      if (tmp13) {
        const obj17 = { style: tmp.conjureRemove, children: null };
        const obj18 = { target: null, onRemoved: null };
        const tmp4Result6 = tmp4(tmp5[20]);
        obj18.target = tmp7(tmp5[21]).conjureRemoveTargetFromServerApp(conjureServerApp);
        obj18.onRemoved = onKick;
        obj17.children = closure_9(tmp4Result6, obj18);
        let tmp20Result = closure_9(tmp22, obj17);
        const tmp7Result4 = tmp7(tmp5[21]);
      } else {
        const obj19 = { style: tmp.blurb, variant: "heading-sm/medium", color: "text-feedback-warning", children: null };
        if (null == conjureServerApp) {
          const intl3 = tmp7(tmp5[16]).intl;
          const obj20 = { user: tmp4(tmp5[17]).getName(stateFromStores1) };
          let formatResult = intl3.format(tmp7(tmp5[16]).t["/yH0UT"], obj20);
          const tmp4Result7 = tmp4(tmp5[17]);
        } else {
          const intl2 = tmp7(tmp5[16]).intl;
          const obj21 = { server: stateFromStores.name };
          formatResult = intl2.formatToPlainString(tmp4(tmp5[19]).f22PGK, obj21);
        }
        obj19.children = formatResult;
        const items8 = [closure_9(tmp7(tmp5[15]).Text, obj19), , ];
        let tmp18Result4 = null;
        if (null == conjureServerApp) {
          const obj22 = { ref: ref1, containerStyle: null, label: null, maxLength: 512, onChange: null };
          const obj23 = { marginBottom: tmp4(tmp5[7]).space.PX_16 };
          obj22.containerStyle = obj23;
          const intl4 = tmp7(tmp5[16]).intl;
          obj22.label = intl4.string(tmp7(tmp5[16]).t["+2QEPt"]);
          obj22.onChange = function onChange(current) {
            closure_5.current = current;
          };
          tmp18Result4 = closure_9(tmp7(tmp5[22]).TextArea, obj22);
        }
        items8[1] = tmp18Result4;
        const obj24 = { style: tmp.actions, children: null };
        const intl5 = tmp7(tmp5[16]).intl;
        if (null == conjureServerApp) {
          let BGF8VT = tmp7(tmp5[16]).t["3glT6Z"];
        } else {
          BGF8VT = tmp4(tmp5[19]).BGF8VT;
        }
        const obj25 = { children: null };
        const obj26 = { variant: "destructive", text: intl5.string(BGF8VT), onPress: tmp16, disabled: tmp15.kicking };
        obj24.children = closure_9(tmp7(tmp5[23]).Button, obj26);
        items8[2] = closure_9(tmp22, obj24);
        obj25.children = items8;
        tmp20Result = closure_11(closure_10, obj25);
      }
      items7[1] = tmp20Result;
      let tmp18Result5 = null;
      if (tmp15.kickError) {
        const obj27 = { style: tmp.errorText, variant: "body-md/semibold", color: "input-text-error-default", children: null };
        const intl6 = tmp7(tmp5[16]).intl;
        const obj28 = { user: tmp4(tmp5[17]).getName(stateFromStores1) };
        obj27.children = intl6.format(tmp7(tmp5[16]).t.UktD5J, obj28);
        tmp18Result5 = closure_9(tmp7(tmp5[15]).Text, obj27);
        const tmp4Result8 = tmp4(tmp5[17]);
      }
      const obj29 = { children: null };
      items7[2] = tmp18Result5;
      obj29.children = items7;
      obj6.children = closure_11(closure_10, obj29);
      tmp18Result6 = closure_9(c6, obj6);
      const tmp4Result = tmp4(tmp5[13]);
    }
  }
  return tmp18Result6;
});