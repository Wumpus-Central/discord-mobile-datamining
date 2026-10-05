// === Module 11461: KickConfirm ===

// Module 11461 (KickConfirm)
import nativeDefault from "native" /* 587 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5705 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let catchPromise, guildId, id, id1, kickUser, kickUserResult, nextPromise, ref, tmp3, tmp4, tmp5, tmp6, tmp7;

let c10;
let closure_12;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let unpackModuleId;
({ Image: hasOwnProperty, View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, iconLabelBlock: obj3, iconStyles: obj4, redText: obj5, blurb: obj6, errorText: obj7 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
obj4 = { height: 1.25 * nativeDefault.space.PX_96 };
obj5 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj6 = { marginVertical: nativeDefault.space.PX_16 };
obj7 = { marginBottom: nativeDefault.space.PX_16 };
let closure_13 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let closure_6;
  let first;
  let onKick;
  let stateFromStores1;
  let tmp10;
  let tmp12;
  let tmp16;
  let tmp9;
  let tmp2 = onKick;
  const obj = guildId(onKick[9]);
  const cResult = obj.c(22);
  guildId = guildId.guildId;
  const userId = guildId.userId;
  onKick = guildId.onKick;
  closure_13();
  ref = stateFromStores1.useRef(null);
  const ref1 = stateFromStores1.useRef(null);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  const tmp8 = userId;
  const insets = userId(tmp2[10])(first).insets;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [{ ref: ref1, offset: { type: "toBottom" } }];
    const obj4 = { ref: ref1, offset: { type: "toBottom" } };
    cResult[1] = items;
    tmp9 = items;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== insets) {
    const obj5 = { insets, inputs: tmp9, scrollViewRef: ref };
    cResult[2] = insets;
    cResult[3] = obj5;
    tmp10 = obj5;
  } else {
    tmp10 = cResult[3];
  }
  tmp8(tmp2[11])(tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[4] = items1;
    tmp12 = items1;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== guildId) {
    class R {
      constructor() {
        return closure_8.getGuild(guildId);
      }
    }
    cResult[5] = guildId;
    cResult[6] = R;
  } else {
    class R {
      constructor() {
        return closure_8.getGuild(guildId);
      }
    }
  }
  const tmpResult = guildId(tmp2[12]);
  const stateFromStores = tmpResult.useStateFromStores(tmp12, R);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return closure_8.getGuild(guildId);
      }
    }
    const items2 = [UserStore];
    cResult[7] = items2;
    tmp16 = items2;
  } else {
    class R {
      constructor() {
        return closure_8.getGuild(guildId);
      }
    }
  }
  if (cResult[8] !== userId) {
    class R {
      constructor() {
        return closure_8.getGuild(guildId);
      }
    }
    cResult[8] = userId;
    cResult[9] = tmp18;
  } else {
    class R {
      constructor() {
        return closure_8.getGuild(guildId);
      }
    }
  }
  const tmpResult2 = guildId(tmp2[12]);
  stateFromStores1 = tmpResult2.useStateFromStores(tmp16, tmp18);
  ref = obj2.useRef("");
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        return { kicking: false, kickError: false };
      }
    }
    cResult[10] = F;
  } else {
    class F {
      constructor() {
        return { kicking: false, kickError: false };
      }
    }
  }
  [r10100, closure_6] = stateFromStores(stateFromStores1.useState(F), 2);
  stateFromStores(stateFromStores1.useState(F), 2);
  if (cResult[11] === stateFromStores) {
    class F {
      constructor() {
        return { kicking: false, kickError: false };
      }
    }
  }
  class N {
    constructor() {
      tmp = closure_3;
      tmp2 = null != closure_3;
      if (tmp2) {
        tmp3 = closure_4;
        tmp2 = null != closure_4;
      }
      if (tmp2) {
        tmp4 = closure_6;
        tmp5 = closure_6({ kicking: true, kickError: false });
        tmp6 = closure_1;
        tmp7 = closure_2;
        tmp8 = closure_1(closure_2[13]);
        id = undefined;
        kickUser = tmp8.kickUser;
        if (tmp != null) {
          id = tmp.id;
        }
        id1 = undefined;
        if (closure_4 != null) {
          id1 = closure_4.id;
        }
        tmp11 = closure_5;
        kickUserResult = kickUser(id, id1, closure_5.current);
        tmp12 = onKick;
        nextPromise = kickUserResult.then(onKick);
        catchPromise = nextPromise.catch(() => { /* body not rendered: F141393 */ });
      }
      return;
    }
  }
  cResult[11] = stateFromStores;
  cResult[12] = onKick;
  cResult[13] = stateFromStores1;
  cResult[14] = N;
}) : ((arg0) => {
  let Button;
  let UktD5J;
  let _undefined;
  let c6;
  let format;
  let format2;
  let formatToPlainString;
  let intl3;
  let intl4;
  let items;
  let items4;
  let obj12;
  let obj14;
  let obj16;
  let obj17;
  let obj19;
  let obj20;
  let obj5;
  let obj9;
  let onKick;
  let prop;
  let tmp11;
  let tmp4Result;
  let tmp4Result3;
  let tmp4Result4;
  let v1Ie87p;
  const f107869 = () => ({ kicking: false, kickError: false });
  ({ guildId: require, userId: importDefault, onKick } = arg0);
  let stateFromStores1;
  c6 = undefined;
  const tmp = closure_13();
  ref = stateFromStores1.useRef(null);
  const ref1 = stateFromStores1.useRef(null);
  const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  const obj = { insets, inputs: items, scrollViewRef: ref };
  items = [{ ref: ref1, offset: { type: "toBottom" } }];
  require("useSafeAreaAvoidingInputs")(obj);
  const items1 = [GuildStore];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items1, () => GuildStore.getGuild(require));
  const items2 = [UserStore];
  const obj3 = require("get initialized");
  stateFromStores1 = obj3.useStateFromStores(items2, () => UserStore.getUser(importDefault));
  ref = stateFromStores1.useRef("");
  [tmp11, c6] = stateFromStores(stateFromStores1.useState(f107869), 2);
  const items3 = [stateFromStores, onKick, stateFromStores1];
  let tmp14Result2 = null;
  stateFromStores(stateFromStores1.useState(f107869), 2);
  if (null != stateFromStores1) {
    tmp14Result2 = null;
    if (null != stateFromStores) {
      const obj4 = { style: tmp.container, ref, contentContainerStyle: obj5, children: closure_11(closure_12, obj20) };
      obj5 = { paddingHorizontal: require("native").space.PX_24, paddingBottom: insets.bottom };
      const obj6 = { style: tmp.iconLabelBlock, children: items4 };
      const obj7 = { style: tmp.iconStyles, source: require("AssetRegistry"), resizeMode: "contain" };
      items4 = [closure_10(ref, obj7), , ];
      const obj8 = { style: tmp.redText, variant: "text-md/semibold", children: formatToPlainString(v1Ie87p, obj9) };
      const Text = require("Text/Text").Text;
      const intl = require("intl").intl;
      formatToPlainString = intl.formatToPlainString;
      obj9 = { user: tmp4Result.getName(stateFromStores1) };
      v1Ie87p = require("intl").t["1Ie87p"];
      tmp4Result = require("UserUtils");
      items4[1] = closure_10(Text, obj8);
      const obj10 = { variant: "text-lg/bold", color: "text-feedback-warning", children: stateFromStores.name };
      items4[2] = closure_10(require("Text/Text").Text, obj10);
      const items5 = [closure_11(c6, obj6), , , , ];
      const obj11 = { style: tmp.blurb, variant: "heading-md/normal", color: "text-feedback-warning", children: format(prop, obj12) };
      const Text2 = require("Text/Text").Text;
      const intl2 = require("intl").intl;
      format = intl2.format;
      obj12 = { user: tmp4Result3.getName(stateFromStores1) };
      prop = require("intl").t["/yH0UT"];
      tmp4Result3 = require("UserUtils");
      items5[1] = closure_10(Text2, obj11);
      const obj13 = {
        ref: ref1,
        containerStyle: obj14,
        label: intl3.string(require("intl").t["+2QEPt"]),
        maxLength: 512,
        onChange(current) {
              ref.current = current;
            }
      };
      obj14 = { marginBottom: require("native").space.PX_16 };
      const TextArea = require("TextArea").TextArea;
      intl3 = require("intl").intl;
      items5[2] = closure_10(TextArea, obj13);
      const obj15 = { style: obj16, children: closure_10(Button, obj17) };
      obj16 = { marginBottom: require("native").space.PX_16 };
      obj17 = { variant: "destructive", text: intl4.string(require("intl").t["3glT6Z"]), onPress: tmp12, disabled: tmp11.kicking };
      Button = require("components/Button/Button").Button;
      intl4 = require("intl").intl;
      items5[3] = closure_10(c6, obj15);
      let tmp14Result = null;
      if (tmp11.kickError) {
        const obj18 = { style: tmp.errorText, variant: "text-md/semibold", color: "input-text-error-default", children: format2(UktD5J, obj19) };
        const Text3 = require("Text/Text").Text;
        const intl5 = require("intl").intl;
        format2 = intl5.format;
        obj19 = { user: tmp4Result4.getName(stateFromStores1) };
        UktD5J = require("intl").t.UktD5J;
        tmp4Result4 = require("UserUtils");
        tmp14Result = closure_10(Text3, obj18);
      }
      obj20 = { children: items5 };
      items5[4] = tmp14Result;
      tmp14Result2 = closure_10(closure_7, obj4);
    }
  }
  return tmp14Result2;
}));
const result = size.fileFinishedImporting("modules/guild_moderation/native/KickConfirm.tsx");

export default memoResult;