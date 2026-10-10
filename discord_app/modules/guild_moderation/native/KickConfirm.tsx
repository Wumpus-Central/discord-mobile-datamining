// === Module 11407: KickConfirm ===

// Module 11407 (KickConfirm)
import nativeDefault from "native" /* 587 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6097 */;
import removeConjureServerAppDefault from "removeConjureServerApp" /* 11410 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2087 */;
import UserStore from "UserStore" /* 1390 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5092);
let obj = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, iconLabelBlock: null, iconStyles: null, redText: null, conjureTitle: null, conjureServerName: null, blurb: null, removeEverything: null, errorText: null, actions: null };
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
obj.removeEverything = { marginBottom: nativeDefault.space.PX_16 };
let obj10 = { marginBottom: nativeDefault.space.PX_16 };
obj.errorText = { marginBottom: nativeDefault.space.PX_16 };
let obj11 = { marginBottom: nativeDefault.space.PX_16 };
obj.actions = { marginBottom: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj12 = { marginBottom: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_moderation/native/KickConfirm.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function KickConfirm(guildId) {
  const cResult = guildId(onKick[9]).c(37);
  guildId = guildId.guildId;
  const userId = guildId.userId;
  onKick = guildId.onKick;
  closure_12();
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
    class A {
      constructor() {
        return closure_7.getGuild(guildId);
      }
    }
    cResult[5] = guildId;
    cResult[6] = A;
  } else {
    class A {
      constructor() {
        return closure_7.getGuild(guildId);
      }
    }
  }
  ref1 = stateFromStores1.useRef(null);
  const stateFromStores = guildId(onKick[12]).useStateFromStores(tmp12, A);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        return closure_7.getGuild(guildId);
      }
    }
    const items2 = [UserStore];
    cResult[7] = items2;
    const tmp16 = items2;
  } else {
    class A {
      constructor() {
        return closure_7.getGuild(guildId);
      }
    }
  }
  if (cResult[8] !== userId) {
    class N {
      constructor() {
        return closure_8.getUser(userId);
      }
    }
    cResult[8] = userId;
    cResult[9] = N;
  } else {
    class N {
      constructor() {
        return closure_8.getUser(userId);
      }
    }
  }
  const tmpResult = guildId(onKick[12]);
  stateFromStores1 = guildId(onKick[12]).useStateFromStores(tmp16, N);
  if (stateFromStores1 != null) {
    class N {
      constructor() {
        return closure_8.getUser(userId);
      }
    }
  }
  if (cResult[10] === undefined) {
    class N {
      constructor() {
        return closure_8.getUser(userId);
      }
    }
    const conjureServerApp = tmp(tmp2[13]).useConjureServerApp(guildId, tmp19);
    if (cResult[13] !== conjureServerApp) {
      class N {
        constructor() {
          return closure_8.getUser(userId);
        }
      }
      if (conjureServerApp != null) {
        class N {
          constructor() {
            return closure_8.getUser(userId);
          }
        }
      }
      if (null == tmp23) {
        class N {
          constructor() {
            return closure_8.getUser(userId);
          }
        }
      } else {
        class N {
          constructor() {
            return closure_8.getUser(userId);
          }
        }
        const conjureKickAppItemsResult = obj10.conjureKickAppItems(conjureServerApp.rest);
      }
      cResult[13] = conjureServerApp;
      cResult[14] = conjureKickAppItemsResult;
    } else {
      class N {
        constructor() {
          return closure_8.getUser(userId);
        }
      }
      const tmp27 = stateFromStores(obj2.useState(true), 2);
      GuildStore = tmp27[0];
      [r10130, UserStore] = stateFromStores(obj2.useState(false), 2);
      ref = obj2.useRef("");
      const _Symbol = Symbol;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class U {
          constructor() {
            return { kicking: false, kickError: false };
          }
        }
        cResult[15] = U;
      } else {
        class U {
          constructor() {
            return { kicking: false, kickError: false };
          }
        }
      }
      const tmp29 = stateFromStores(obj2.useState(false), 2);
      [r10145, closure_10] = stateFromStores(obj2.useState(U), 2);
      if (cResult[16] === stateFromStores) {
        class U {
          constructor() {
            return { kicking: false, kickError: false };
          }
        }
      }
      class Q {
        constructor() {
          tmp = closure_3;
          tmp2 = null != closure_3;
          if (tmp2) {
            tmp3 = closure_4;
            tmp2 = null != closure_4;
          }
          if (tmp2) {
            tmp4 = closure_10;
            tmp5 = closure_10({ kicking: true, kickError: false });
            tmp6 = closure_1;
            tmp7 = closure_2;
            obj = closure_1(closure_2[14]);
            id = undefined;
            if (tmp != null) {
              id = tmp.id;
            }
            id1 = undefined;
            if (closure_4 != null) {
              id1 = closure_4.id;
            }
            tmp10 = closure_9;
            kickUserResult = obj.kickUser(id, id1, closure_9.current);
            tmp11 = onKick;
            nextPromise = kickUserResult.then(onKick);
            catchPromise = nextPromise.catch(() => { ... });
          }
          return;
        }
      }
      cResult[16] = stateFromStores;
      cResult[17] = onKick;
      cResult[18] = stateFromStores1;
      cResult[19] = Q;
      const tmp26Result = stateFromStores(obj2.useState(U), 2);
    }
    const tmpResult4 = tmp(tmp2[13]);
  }
  if (stateFromStores1 != null) {
    class U {
      constructor() {
        return { kicking: false, kickError: false };
      }
    }
  }
  let result = null;
  if (true === undefined) {
    class U {
      constructor() {
        return { kicking: false, kickError: false };
      }
    }
    result = obj8.conjureApplicationIdForBot(userId);
  }
  if (stateFromStores1 != null) {
    class U {
      constructor() {
        return { kicking: false, kickError: false };
      }
    }
  }
  cResult[10] = undefined;
  cResult[11] = userId;
  cResult[12] = result;
  tmp19 = result;
  const tmpResult3 = guildId(onKick[12]);
}) : (function KickConfirm(guildId) {
  guildId = guildId.guildId;
  const userId = guildId.userId;
  const onKick = guildId.onKick;
  let stateFromStores1;
  let conjureServerApp;
  let items3;
  let checked;
  closure_8 = undefined;
  c10 = undefined;
  closure_11 = undefined;
  const tmp = closure_12();
  ref = stateFromStores1.useRef(null);
  const ref1 = stateFromStores1.useRef(null);
  const insets = userId(onKick[10])({ includeKeyboardHeight: true }).insets;
  const obj2 = { insets, inputs: null, scrollViewRef: ref };
  const items = [{ ref: ref1, offset: { type: "toBottom" } }];
  obj2.inputs = items;
  userId(onKick[11])(obj2);
  const items1 = [checked];
  const stateFromStores = guildId(onKick[12]).useStateFromStores(items1, () => GuildStore.getGuild(guildId));
  const obj3 = guildId(onKick[12]);
  const items2 = [closure_8];
  stateFromStores1 = guildId(onKick[12]).useStateFromStores(items2, () => UserStore.getUser(userId));
  const obj4 = guildId(onKick[12]);
  let bot;
  if (stateFromStores1 != null) {
    bot = stateFromStores1.bot;
  }
  let result = null;
  if (true === bot) {
    result = tmp7(tmp5[13]).conjureApplicationIdForBot(userId);
    const tmp7Result = tmp7(tmp5[13]);
  }
  conjureServerApp = guildId(onKick[13]).useConjureServerApp(guildId, result);
  let rest;
  if (conjureServerApp != null) {
    rest = conjureServerApp.rest;
  }
  if (null == rest) {
    items3 = [];
  } else {
    items3 = tmp7(tmp5[13]).conjureKickAppItems(conjureServerApp.rest);
    const tmp7Result3 = tmp7(tmp5[13]);
  }
  const tmp14 = stateFromStores(stateFromStores1.useState(true), 2);
  checked = tmp14[0];
  const tmp16 = stateFromStores(stateFromStores1.useState(false), 2);
  closure_8 = tmp16[1];
  ref = obj.useRef("");
  const obj5 = guildId(onKick[13]);
  [tmp18, c10] = stateFromStores(stateFromStores1.useState(() => ({ kicking: false, kickError: false })), 2);
  const items4 = [stateFromStores, onKick, stateFromStores1];
  closure_11 = obj.useCallback(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = null != stateFromStores1;
    }
    if (tmp2) {
      _undefined({ kicking: true, kickError: false });
      let id;
      if (stateFromStores != null) {
        id = stateFromStores.id;
      }
      let id1;
      if (stateFromStores1 != null) {
        id1 = stateFromStores1.id;
      }
      const kickUserResult = GuildActionCreatorsDefault.kickUser(id, id1, ref.current);
      GuildActionCreatorsDefault.kickUser(id, id1, ref.current).then(onKick).catch(() => {
        _undefined({ kicking: false, kickError: true });
      });
      const nextPromise = GuildActionCreatorsDefault.kickUser(id, id1, ref.current).then(onKick);
    }
  }, items4);
  let tmp20Result6 = null;
  if (null != stateFromStores1) {
    tmp20Result6 = null;
    if (null != stateFromStores) {
      const obj6 = { style: tmp.container, ref, contentContainerStyle: null, children: null };
      const obj7 = { paddingHorizontal: tmp4(tmp5[7]).space.PX_24, paddingBottom: insets.bottom };
      obj6.contentContainerStyle = obj7;
      const obj8 = { style: tmp.iconLabelBlock, children: null };
      const obj9 = { style: tmp.iconStyles, source: tmp4(tmp5[17]), resizeMode: "contain" };
      const items5 = [ref(tmp4(tmp5[16]), obj9), ];
      if (null == conjureServerApp) {
        const obj10 = { children: null };
        const obj11 = { style: tmp.redText, variant: "text-md/semibold", children: null };
        const intl = tmp7(tmp5[19]).intl;
        const obj12 = { user: tmp4(tmp5[20]).getName(stateFromStores1) };
        obj11.children = intl.formatToPlainString(tmp7(tmp5[19]).t["1Ie87p"], obj12);
        const items6 = [tmp20(tmp7(tmp5[18]).Text, obj11), ];
        const obj13 = { variant: "text-lg/bold", color: "text-feedback-warning", children: stateFromStores.name };
        items6[1] = tmp20(tmp7(tmp5[18]).Text, obj13);
        obj10.children = items6;
        let obj14 = obj10;
        const tmp4Result4 = tmp4(tmp5[20]);
      } else {
        obj14 = { children: null };
        const obj15 = { style: tmp.conjureTitle, variant: "text-lg/bold", color: "mobile-text-heading-primary", children: tmp7(tmp5[21]).formatWithAppTag(tmp4(tmp5[22]).wVNCN7, conjureServerApp.targetAppName) };
        const items7 = [tmp20(tmp7(tmp5[18]).Text, obj15), ];
        const obj16 = { style: tmp.conjureServerName, variant: "text-md/semibold", color: "text-muted", children: stateFromStores.name };
        items7[1] = tmp20(tmp7(tmp5[18]).Text, obj16);
        obj14.children = items7;
        const tmp7Result4 = tmp7(tmp5[21]);
      }
      items5[1] = closure_11(c10, obj14);
      obj8.children = items5;
      const items8 = [closure_11(conjureServerApp, obj8), , , , , , ];
      const obj17 = { style: tmp.blurb, variant: "heading-md/normal", color: "text-feedback-warning", children: null };
      if (null == conjureServerApp) {
        const intl3 = tmp7(tmp5[19]).intl;
        const obj18 = { user: tmp4(tmp5[20]).getName(stateFromStores1) };
        let formatResult = intl3.format(tmp7(tmp5[19]).t["/yH0UT"], obj18);
        const tmp4Result5 = tmp4(tmp5[20]);
      } else {
        const intl2 = tmp7(tmp5[19]).intl;
        formatResult = intl2.string(tmp4(tmp5[22])["tw+iyx"]);
      }
      obj17.children = formatResult;
      items8[1] = ref(tmp7(tmp5[18]).Text, obj17);
      let tmp20Result = null;
      if (items3.length > 0) {
        const obj19 = { style: tmp.removeEverything, children: null };
        const obj20 = { checked, onChange: tmp14[1], items: items3 };
        obj19.children = tmp20(tmp7(tmp5[21]).ConjureRemoveEverythingField, obj20);
        tmp20Result = tmp20(tmp24, obj19);
      }
      items8[2] = tmp20Result;
      const obj21 = { ref: ref1, containerStyle: null, label: null, maxLength: 512, onChange: null };
      const obj22 = { marginBottom: tmp4(tmp5[7]).space.PX_16 };
      obj21.containerStyle = obj22;
      const intl4 = tmp7(tmp5[19]).intl;
      obj21.label = intl4.string(tmp7(tmp5[19]).t["+2QEPt"]);
      obj21.onChange = function onChange(current) {
        closure_9.current = current;
      };
      items8[3] = ref(tmp7(tmp5[23]).TextArea, obj21);
      const obj23 = { style: tmp.actions, children: null };
      const obj24 = { variant: "destructive", text: null, onPress: null, disabled: null };
      const intl5 = tmp7(tmp5[19]).intl;
      obj24.text = intl5.string(tmp7(tmp5[19]).t["3glT6Z"]);
      obj24.onPress = function handleConfirm() {
        if (null != conjureServerApp) {
          if (0 !== items3.length) {
            if (first) {
              _undefined({ kicking: true, kickError: false });
              closure_8(false);
              removeConjureServerAppDefault(tmp).then((result) => {
                if (result) {
                  onKick();
                } else {
                  _undefined({ kicking: false, kickError: false });
                  closure_1_8(true);
                }
              }, () => {

              });
              const promise = removeConjureServerAppDefault(tmp);
            }
          }
        }
        closure_11();
      };
      obj24.disabled = tmp18.kicking;
      obj23.children = ref(tmp7(tmp5[24]).Button, obj24);
      items8[4] = ref(conjureServerApp, obj23);
      let tmp20Result4 = null;
      if (tmp16[0]) {
        const obj25 = { style: tmp.errorText, variant: "text-md/semibold", color: "input-text-error-default", children: null };
        const intl6 = tmp7(tmp5[19]).intl;
        obj25.children = intl6.string(tmp4(tmp5[22]).PJ2Fkn);
        tmp20Result4 = tmp20(tmp7(tmp5[18]).Text, obj25);
      }
      items8[5] = tmp20Result4;
      let tmp20Result5 = null;
      if (tmp18.kickError) {
        const obj26 = { style: tmp.errorText, variant: "text-md/semibold", color: "input-text-error-default", children: null };
        const intl7 = tmp7(tmp5[19]).intl;
        const obj27 = { user: tmp4(tmp5[20]).getName(stateFromStores1) };
        obj26.children = intl7.format(tmp7(tmp5[19]).t.UktD5J, obj27);
        tmp20Result5 = tmp20(tmp7(tmp5[18]).Text, obj26);
        const tmp4Result6 = tmp4(tmp5[20]);
      }
      const obj28 = { children: null };
      items8[6] = tmp20Result5;
      obj28.children = items8;
      obj6.children = closure_11(c10, obj28);
      tmp20Result6 = tmp20(items3, obj6);
      const tmp4Result = tmp4(tmp5[16]);
    }
  }
  return tmp20Result6;
}));