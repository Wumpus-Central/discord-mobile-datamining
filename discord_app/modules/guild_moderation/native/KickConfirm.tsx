// === Module 11461: KickConfirm ===

// Module 11461 (KickConfirm)
import nativeDefault from "native" /* 587 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5705 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: hasOwnProperty, View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11, Fragment: closure_12 } = jsxProd);
const createStyles = fn(4890);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, iconLabelBlock: null, iconStyles: null, redText: null, blurb: null, errorText: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj.iconLabelBlock = { marginTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
let obj4 = { marginTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
obj.iconStyles = { height: 1.25 * nativeDefault.space.PX_96 };
let obj5 = { height: 1.25 * nativeDefault.space.PX_96 };
obj.redText = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let obj6 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj.blurb = { marginVertical: nativeDefault.space.PX_16 };
let obj7 = { marginVertical: nativeDefault.space.PX_16 };
obj.errorText = { marginBottom: nativeDefault.space.PX_16 };
let closure_13 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj8 = { marginBottom: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_moderation/native/KickConfirm.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(onKick[9]).c(22);
  guildId = guildId.guildId;
  const userId = guildId.userId;
  onKick = guildId.onKick;
  closure_13();
  ref = stateFromStores1.useRef(null);
  let obj = guildId(onKick[9]);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  const insets = userId(tmp2[10])(first).insets;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { ref: ref1, offset: { type: "toBottom" } };
    const items = [obj4];
    cResult[1] = items;
    let tmp9 = items;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== insets) {
    const obj5 = { insets, inputs: tmp9, scrollViewRef: ref };
    cResult[2] = insets;
    cResult[3] = obj5;
    let tmp10 = obj5;
  } else {
    tmp10 = cResult[3];
  }
  userId(onKick[11])(tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[4] = items1;
    let tmp12 = items1;
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
  ref1 = stateFromStores1.useRef(null);
  const stateFromStores = guildId(onKick[12]).useStateFromStores(tmp12, R);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        return closure_8.getGuild(guildId);
      }
    }
    const items2 = [UserStore];
    cResult[7] = items2;
    const tmp16 = items2;
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
  const tmpResult = guildId(onKick[12]);
  stateFromStores1 = guildId(onKick[12]).useStateFromStores(tmp16, tmp18);
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
  const tmpResult2 = guildId(onKick[12]);
  [r10100, closure_6] = stateFromStores(stateFromStores1.useState(F), 2);
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
        obj = closure_1(closure_2[13]);
        id = undefined;
        if (tmp != null) {
          id = tmp.id;
        }
        id1 = undefined;
        if (closure_4 != null) {
          id1 = closure_4.id;
        }
        tmp10 = closure_5;
        kickUserResult = obj.kickUser(id, id1, closure_5.current);
        tmp11 = onKick;
        nextPromise = kickUserResult.then(onKick);
        catchPromise = nextPromise.catch(() => { ... });
      }
      return;
    }
  }
  cResult[11] = stateFromStores;
  cResult[12] = onKick;
  cResult[13] = stateFromStores1;
  cResult[14] = N;
  const tmp21 = stateFromStores(stateFromStores1.useState(F), 2);
}) : ((arg0) => {
  ({ guildId: require, userId: importDefault, onKick } = arg0);
  let stateFromStores1;
  c6 = undefined;
  const tmp = closure_13();
  ref = stateFromStores1.useRef(null);
  const ref1 = stateFromStores1.useRef(null);
  const insets = require("useSafeAreaInsetsKeyboardAware")({ includeKeyboardHeight: true }).insets;
  let obj = { insets, inputs: null, scrollViewRef: ref };
  const items = [{ ref: ref1, offset: { type: "toBottom" } }];
  obj.inputs = items;
  require("useSafeAreaAvoidingInputs")(obj);
  const items1 = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items1, () => GuildStore.getGuild(require));
  const obj2 = require("initialize");
  const items2 = [UserStore];
  stateFromStores1 = require("initialize").useStateFromStores(items2, () => UserStore.getUser(importDefault));
  ref = stateFromStores1.useRef("");
  const obj3 = require("initialize");
  [tmp11, c6] = stateFromStores(stateFromStores1.useState(() => ({ kicking: false, kickError: false })), 2);
  const items3 = [stateFromStores, onKick, stateFromStores1];
  let tmp14Result2 = null;
  if (null != stateFromStores1) {
    tmp14Result2 = null;
    if (null != stateFromStores) {
      const obj4 = { style: tmp.container, ref, contentContainerStyle: null, children: null };
      const obj5 = { paddingHorizontal: require("native").space.PX_24, paddingBottom: insets.bottom };
      obj4.contentContainerStyle = obj5;
      const obj6 = { style: tmp.iconLabelBlock, children: null };
      const obj7 = { style: tmp.iconStyles, source: require("module_11462"), resizeMode: "contain" };
      const items4 = [closure_10(ref, obj7), , ];
      const obj8 = { style: tmp.redText, variant: "text-md/semibold", children: null };
      const intl = require("util").intl;
      const obj9 = { user: require("UserUtils").getName(stateFromStores1) };
      obj8.children = intl.formatToPlainString(require("util").t["1Ie87p"], obj9);
      items4[1] = closure_10(require("Text/Text").Text, obj8);
      const obj10 = { variant: "text-lg/bold", color: "text-feedback-warning", children: stateFromStores.name };
      items4[2] = closure_10(require("Text/Text").Text, obj10);
      obj6.children = items4;
      const items5 = [closure_11(c6, obj6), , , , ];
      const obj11 = { style: tmp.blurb, variant: "heading-md/normal", color: "text-feedback-warning", children: null };
      const intl2 = require("util").intl;
      const obj12 = { user: null };
      const tmp4Result = require("UserUtils");
      obj12.user = require("UserUtils").getName(stateFromStores1);
      obj11.children = intl2.format(require("util").t["/yH0UT"], obj12);
      items5[1] = closure_10(require("Text/Text").Text, obj11);
      const obj13 = { ref: ref1, containerStyle: null, label: null, maxLength: 512, onChange: null };
      const obj14 = { marginBottom: require("native").space.PX_16 };
      obj13.containerStyle = obj14;
      const intl3 = require("util").intl;
      obj13.label = intl3.string(require("util").t["+2QEPt"]);
      obj13.onChange = function onChange(current) {
        closure_5.current = current;
      };
      items5[2] = closure_10(require("TextArea").TextArea, obj13);
      const obj15 = { style: null, children: null };
      const obj16 = { marginBottom: require("native").space.PX_16 };
      obj15.style = obj16;
      const obj17 = { variant: "destructive", text: null, onPress: null, disabled: null };
      const intl4 = require("util").intl;
      obj17.text = intl4.string(require("util").t["3glT6Z"]);
      obj17.onPress = tmp12;
      obj17.disabled = tmp11.kicking;
      obj15.children = closure_10(require("components/Button/Button").Button, obj17);
      items5[3] = closure_10(c6, obj15);
      let tmp14Result = null;
      if (tmp11.kickError) {
        const obj18 = { style: tmp.errorText, variant: "text-md/semibold", color: "input-text-error-default", children: null };
        const intl5 = require("util").intl;
        const obj19 = { user: require("UserUtils").getName(stateFromStores1) };
        obj18.children = intl5.format(require("util").t.UktD5J, obj19);
        tmp14Result = closure_10(require("Text/Text").Text, obj18);
        const tmp4Result4 = require("UserUtils");
      }
      const obj20 = { children: null };
      items5[4] = tmp14Result;
      obj20.children = items5;
      obj4.children = closure_11(closure_12, obj20);
      tmp14Result2 = closure_10(closure_7, obj4);
      const tmp4Result3 = require("UserUtils");
    }
  }
  return tmp14Result2;
}));