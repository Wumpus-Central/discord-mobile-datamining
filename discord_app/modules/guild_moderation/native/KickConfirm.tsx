// === Module 11645: ? ===

// Module 11645
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "createGuildRecordFromRust" /* 1908 */;
import closure_9 from "mergeGuildAvatar" /* 1921 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
let c4 = importAllResult;
({ Image: c5, View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = jsxProd);
let obj = { container: null, iconLabelBlock: null, iconStyles: null, redText: null, blurb: null, errorText: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
obj[0] = obj;
createCacheKey = { marginTop: ThemesDefault.space.PX_16, backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.lg, paddingTop: ThemesDefault.space.PX_8, paddingBottom: ThemesDefault.space.PX_16, alignItems: "center" };
obj[1] = createCacheKey;
obj[2] = { height: 1.25 * ThemesDefault.space.PX_96 };
let obj2 = { height: 1.25 * ThemesDefault.space.PX_96 };
obj[3] = { marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_4, color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL };
let obj3 = { marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_4, color: ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj[4] = { marginVertical: ThemesDefault.space.PX_16 };
let obj4 = { marginVertical: ThemesDefault.space.PX_16 };
obj[5] = { marginBottom: ThemesDefault.space.PX_16 };
let closure_13 = createCacheKey.createStyles(obj);
let obj5 = { marginBottom: ThemesDefault.space.PX_16 };
const memoResult = importAllResult.memo(function KickConfirm(arg0) {
  ({ guildId: require, userId: importDefault, onKick } = arg0);
  let stateFromStores;
  let stateFromStores1;
  closure_5 = undefined;
  c6 = undefined;
  const tmp = callback3();
  const ref = stateFromStores1.useRef(null);
  const ref1 = stateFromStores1.useRef(null);
  const insets = importDefault(onKick[8])({ includeKeyboardHeight: true }).insets;
  const items = [{ ref: ref1, offset: { type: "toBottom" } }];
  importDefault(onKick[9])({ insets, inputs: items, scrollViewRef: ref });
  let obj = require(onKick[10]);
  const items1 = [closure_8];
  stateFromStores = obj.useStateFromStores(items1, () => closure_1_8.getGuild(closure_0));
  obj1 = require(onKick[10]);
  const items2 = [closure_9];
  stateFromStores1 = obj1.useStateFromStores(items2, () => closure_1_9.getUser(closure_1));
  closure_5 = stateFromStores1.useRef("");
  [tmp11, c6] = stateFromStores(stateFromStores1.useState(() => ({ kicking: false, kickError: false })), 2);
  const items3 = [stateFromStores, onKick, stateFromStores1];
  let tmp14Result = null;
  if (null != stateFromStores1) {
    tmp14Result = null;
    if (null != stateFromStores) {
      obj = { style: null, ref: null, contentContainerStyle: null, children: null };
      obj[0] = tmp.container;
      obj[1] = ref;
      obj = { paddingHorizontal: null, paddingBottom: null };
      obj[0] = tmp4(tmp5[7]).space.PX_24;
      obj[1] = insets.bottom;
      obj[2] = obj;
      obj1 = { style: null, children: null };
      obj1[0] = tmp.iconLabelBlock;
      const obj2 = { style: null, source: null, resizeMode: "contain" };
      obj2[0] = tmp.iconStyles;
      obj2[1] = tmp4(tmp5[12]);
      const items4 = [callback(closure_5, obj2), , ];
      const obj3 = { style: null, variant: "text-md/semibold", children: null };
      obj3[0] = tmp.redText;
      const intl = tmp7(tmp5[14]).intl;
      const obj4 = { user: null };
      let tmp4Result = tmp4(tmp5[15]);
      obj4[0] = tmp4Result.getName(stateFromStores1);
      obj3[2] = intl.formatToPlainString(tmp7(tmp5[14]).t["1Ie87p"], obj4);
      items4[1] = callback(tmp7(tmp5[13]).Text, obj3);
      const obj5 = { variant: "text-lg/bold", color: "text-feedback-warning", children: null };
      obj5[2] = stateFromStores.name;
      items4[2] = callback(tmp7(tmp5[13]).Text, obj5);
      obj1[1] = items4;
      const items5 = [callback2(c6, obj1), , , , ];
      const obj6 = { style: null, variant: "heading-md/normal", color: "text-feedback-warning", children: null };
      obj6[0] = tmp.blurb;
      const intl2 = tmp7(tmp5[14]).intl;
      const obj7 = { user: null };
      tmp4Result = tmp4(tmp5[15]);
      obj7[0] = tmp4Result.getName(stateFromStores1);
      obj6[3] = intl2.format(tmp7(tmp5[14]).t["/yH0UT"], obj7);
      items5[1] = callback(tmp7(tmp5[13]).Text, obj6);
      const obj8 = { ref: null, containerStyle: null, label: null, maxLength: 512, onChange: null };
      obj8[0] = ref1;
      const obj9 = { marginBottom: null };
      obj9[0] = tmp4(tmp5[7]).space.PX_16;
      obj8[1] = obj9;
      const intl3 = tmp7(tmp5[14]).intl;
      obj8[2] = intl3.string(tmp7(tmp5[14]).t["+2QEPt"]);
      obj8[4] = function onChange(current) {
        closure_5.current = current;
      };
      items5[2] = callback(tmp7(tmp5[16]).TextArea, obj8);
      const obj10 = { style: null, children: null };
      const obj11 = { marginBottom: null };
      obj11[0] = tmp4(tmp5[7]).space.PX_16;
      obj10[0] = obj11;
      const obj12 = { variant: "destructive", text: null, onPress: null, disabled: null };
      const intl4 = tmp7(tmp5[14]).intl;
      obj12[1] = intl4.string(tmp7(tmp5[14]).t["3glT6Z"]);
      obj12[2] = tmp12;
      obj12[3] = tmp11.kicking;
      obj10[1] = callback(tmp7(tmp5[17]).Button, obj12);
      items5[3] = callback(c6, obj10);
      tmp14Result = null;
      if (tmp11.kickError) {
        const obj13 = { style: null, variant: "text-md/semibold", color: "input-text-error-default", children: null };
        obj13[0] = tmp.errorText;
        const intl5 = tmp7(tmp5[14]).intl;
        const obj14 = { user: null };
        obj14[0] = tmp4(tmp5[15]).getName(stateFromStores1);
        obj13[3] = intl5.format(tmp7(tmp5[14]).t.UktD5J, obj14);
        tmp14Result = tmp14(tmp7(tmp5[13]).Text, obj13);
        const tmp4Result1 = tmp4(tmp5[15]);
      }
      const obj15 = { children: null };
      items5[4] = tmp14Result;
      obj15[0] = items5;
      obj[3] = callback2(closure_12, obj15);
      tmp14Result = tmp14(closure_7, obj);
      const tmp15 = closure_7;
      const tmp16 = callback2;
      const tmp17 = closure_12;
    }
  }
  return tmp14Result;
});
const result = require("set").fileFinishedImporting("modules/guild_moderation/native/KickConfirm.tsx");

export default memoResult;