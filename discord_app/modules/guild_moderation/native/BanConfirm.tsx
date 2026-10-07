// === Module 11476: BanConfirm ===

// Module 11476 (BanConfirm)
import nativeDefault from "native" /* 587 */;
import DurationsDefault from "Durations" /* 1102 */;
import util from "util" /* 1126 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;

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
    }
  },
  {
    value: DurationsDefault.Seconds.HOUR,
    getLabel() {
      const intl = util.intl;
      return intl.string(util.t.RKpitY);
    }
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
  }
};
let obj2 = {
  value: DurationsDefault.Seconds.HOUR,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.RKpitY);
  }
};
items[2] = {
  value: 6 * DurationsDefault.Seconds.HOUR,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t["8WfJZ8"]);
  }
};
let obj3 = {
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
let obj4 = {
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
let obj5 = {
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
let obj6 = {
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
const createStyles = fn(4896);
let obj8 = { container: null, iconLabelBlock: null, iconStyles: null, blurb: null, redText: null, errorText: null };
let obj7 = {
  value: 7 * DurationsDefault.Seconds.DAY,
  getLabel() {
    const intl = util.intl;
    return intl.string(util.t.FA7IUk);
  }
};
obj8.container = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj10 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj8.iconLabelBlock = { marginTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
let obj11 = { marginTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_16, alignItems: "center" };
obj8.iconStyles = { height: 1.25 * nativeDefault.space.PX_96 };
let obj12 = { height: 1.25 * nativeDefault.space.PX_96 };
obj8.blurb = { marginVertical: nativeDefault.space.PX_16 };
let obj13 = { marginVertical: nativeDefault.space.PX_16 };
obj8.redText = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
let obj14 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_4, color: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL };
obj8.errorText = { marginBottom: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj8);
const ReactCompilerGating = fn(558);
let obj15 = { marginBottom: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_moderation/native/BanConfirm.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(onBan[11]).c(22);
  guildId = guildId.guildId;
  const userId = guildId.userId;
  onBan = guildId.onBan;
  closure_14();
  ref = stateFromStores1.useRef(null);
  let obj = guildId(onBan[11]);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  const insets = userId(tmp2[12])(first).insets;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { ref: ref1, offset: { type: "toBottom" } };
    items = [obj4];
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
  userId(onBan[13])(tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildStore];
    cResult[4] = items1;
    let tmp12 = items1;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== guildId) {
    class I {
      constructor() {
        return closure_8.getGuild(guildId);
      }
    }
    cResult[5] = guildId;
    cResult[6] = I;
  } else {
    class I {
      constructor() {
        return closure_8.getGuild(guildId);
      }
    }
  }
  ref1 = stateFromStores1.useRef(null);
  const stateFromStores = guildId(onBan[14]).useStateFromStores(tmp12, I);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        return closure_8.getGuild(guildId);
      }
    }
    const items2 = [UserStore];
    cResult[7] = items2;
    const tmp16 = items2;
  } else {
    class I {
      constructor() {
        return closure_8.getGuild(guildId);
      }
    }
  }
  if (cResult[8] !== userId) {
    class I {
      constructor() {
        return closure_8.getGuild(guildId);
      }
    }
    cResult[8] = userId;
    cResult[9] = tmp18;
  } else {
    class I {
      constructor() {
        return closure_8.getGuild(guildId);
      }
    }
  }
  const tmpResult = guildId(onBan[14]);
  stateFromStores1 = guildId(onBan[14]).useStateFromStores(tmp16, tmp18);
  ref = obj2.useRef(0);
  stateFromStores1.useRef("");
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor() {
        return { banning: false, banError: false };
      }
    }
    cResult[10] = V;
  } else {
    class V {
      constructor() {
        return { banning: false, banError: false };
      }
    }
  }
  const tmpResult2 = guildId(onBan[14]);
  [r10103, closure_7] = stateFromStores(stateFromStores1.useState(V), 2);
  if (cResult[11] === stateFromStores) {
    class V {
      constructor() {
        return { banning: false, banError: false };
      }
    }
  }
  class M {
    constructor() {
      tmp2 = null != closure_3;
      tmp = closure_3;
      if (tmp2) {
        tmp3 = closure_4;
        tmp2 = null != closure_4;
      }
      if (tmp2) {
        tmp4 = closure_7;
        tmp5 = closure_7({ banning: true, banError: false });
        tmp6 = closure_1;
        tmp7 = closure_2;
        obj = closure_1(closure_2[15]);
        tmp8 = closure_4;
        tmp9 = closure_13;
        tmp10 = closure_5;
        tmp11 = closure_6;
        tmp12 = obj;
        banUserResult = obj.banUser(tmp.id, closure_4.id, closure_13[closure_5.current].value, closure_6.current);
        tmp13 = onBan;
        nextPromise = banUserResult.then(onBan);
        catchPromise = nextPromise.catch(() => { ... });
      }
      return;
    }
  }
  cResult[11] = stateFromStores;
  cResult[12] = onBan;
  cResult[13] = stateFromStores1;
  cResult[14] = M;
  const tmp21 = stateFromStores(stateFromStores1.useState(V), 2);
}) : ((arg0) => {
  ({ guildId: require, userId: importDefault, onBan } = arg0);
  let stateFromStores1;
  c7 = undefined;
  const tmp = closure_14();
  ref = stateFromStores1.useRef(null);
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
  ref2 = stateFromStores1.useRef("");
  const obj3 = require("initialize");
  [tmp11, c7] = stateFromStores(stateFromStores1.useState(() => ({ banning: false, banError: false })), 2);
  const items3 = [stateFromStores, stateFromStores1, onBan];
  let tmp14Result2 = null;
  if (null != stateFromStores1) {
    tmp14Result2 = null;
    if (null != stateFromStores) {
      const obj4 = { style: tmp.container, ref, contentContainerStyle: null, children: null };
      const obj5 = { paddingHorizontal: require("native").space.PX_24, paddingBottom: insets.bottom };
      obj4.contentContainerStyle = obj5;
      const obj6 = { style: tmp.iconLabelBlock, children: null };
      const obj7 = { style: tmp.iconStyles, source: require("module_11477"), resizeMode: "contain" };
      const items4 = [closure_10(ref, obj7), , ];
      const obj8 = { style: tmp.redText, variant: "text-md/semibold", children: null };
      const intl = require("util").intl;
      const obj9 = { username: require("UserUtils").getName(stateFromStores1) };
      obj8.children = intl.format(require("util").t.Qd6w7T, obj9);
      items4[1] = closure_10(require("Text/Text").Text, obj8);
      const obj10 = { variant: "text-lg/bold", color: "text-feedback-warning", children: stateFromStores.name };
      items4[2] = closure_10(require("Text/Text").Text, obj10);
      obj6.children = items4;
      const items5 = [closure_11(ref2, obj6), , , , , ];
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
      obj13.children = items.map((getLabel, value) => closure_1_10(require("TableRadioRow").TableRadioRow, { value, label: getLabel.getLabel() }, value));
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
        const obj19 = { style: tmp.errorText, variant: "text-md/semibold", color: "input-text-error-default", children: null };
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
}));