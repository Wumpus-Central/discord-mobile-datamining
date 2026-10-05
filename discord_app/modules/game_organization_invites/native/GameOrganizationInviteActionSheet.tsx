// === Module 13775: GameOrganizationInviteActionSheet ===

// Module 13775 (GameOrganizationInviteActionSheet)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import _modDef2391 from "module_2391" /* 2391 */;
import InstantInviteUtils from "InstantInviteUtils" /* 9483 */;
import UserPlaceholderRowDefault from "UserPlaceholderRow" /* 9490 */;
import InviteSuggestionsActionCreators from "InviteSuggestionsActionCreators" /* 9508 */;
import GameOrganizationInviteListDefault from "GameOrganizationInviteList" /* 13776 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9494 */;

require = fn;
function isInvitableUserRow(type) {
  let tmp3 = type.type === InstantInviteUtils.RowTypes.FRIEND;
  if (!tmp3) {
    tmp3 = type.type === InstantInviteUtils.RowTypes.DM;
  }
  if (tmp3) {
    tmp3 = !type.item.bot;
  }
  return tmp3;
}
const View = fn(17).View;
const InstantInviteSendStateStore = fn(9554);
({ setSendState: metroRequire, useInstantInviteSendStates: closure_7 } = InstantInviteSendStateStore);
const InviteSendStates = fn(7226).InviteSendStates;
const NOOP_NULL = fn(1096).NOOP_NULL;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { header: { paddingTop: nativeDefault.space.PX_16 }, centeredText: { textAlign: "center" } };
let closure_13 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [];
    let num3 = 0;
    do {
      let obj2 = { row: num3 };
      let arr = items.push(closure_1_11(UserPlaceholderRowDefault, obj2, num3));
      num3 = num3 + 1;
    } while (num3 < 10);
    const obj3 = { children: items };
    const tmp3Result = closure_1_11(View, obj3);
    cResult[0] = tmp3Result;
    let first = tmp3Result;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => {
  const children = [];
  let num = 0;
  do {
    let obj = { row: num };
    let arr = children.push(closure_1_11(UserPlaceholderRowDefault, obj, num));
    num = num + 1;
  } while (num < 10);
  return closure_1_11(View, { children });
});
ReactCompilerGating = fn(558);
let obj3 = { paddingTop: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_organization_invites/native/GameOrganizationInviteActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let formatToPlainString = combined;
  const cResult = combined(576).c(51);
  let str = closure_13();
  combined = "game-organization-invite:" + guildId.guildId;
  if (cResult[0] !== combined) {
    const fn = function s(arg0) {
      return arg0[combined];
    };
    cResult[0] = combined;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const tmp5 = closure_7(tmp4);
  importDefault = tmp5;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [InviteSuggestionsStore];
    const fn2 = function x() {
      inviteSuggestionRows = inviteSuggestionRows.getInviteSuggestionRows();
      const found = inviteSuggestionRows.filter(isInvitableUserRow);
      return found.map((item) => item.item);
    };
    cResult[2] = items;
    cResult[3] = fn2;
    let tmp7 = fn2;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = combined(576);
  const stateFromStoresArray = formatToPlainString(504).useStateFromStoresArray(tmp6, tmp7);
  const formatToPlainStringResult = formatToPlainString(504);
  [r10047, dependencyMap] = noop.useState(true);
  _slicedToArray = noop.useRef("");
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor(arg0) {
        closure_3.current = guildId;
        obj = closure_0(closure_2[15]);
        result = obj.searchInviteSuggestions(guildId);
        return;
      }
    }
    cResult[4] = R;
  } else {
    class R {
      constructor(arg0) {
        closure_3.current = guildId;
        obj = closure_0(closure_2[15]);
        result = obj.searchInviteSuggestions(guildId);
        return;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        obj = closure_0(closure_2[15]);
        obj1 = { omitUserIds: null };
        set = new Set();
        obj1.omitUserIds = set;
        inviteSuggestions = obj.loadInviteSuggestions(obj1);
        nextPromise = inviteSuggestions.then(() => {
          if ("" !== ref.current) {
            const result = combined(dependencyMap[15]).searchInviteSuggestions(tmp.current);
            const obj = combined(dependencyMap[15]);
          }
        });
        catchPromise = nextPromise.catch(NOOP_NULL);
        cleanupPromise = catchPromise.finally(() => closure_1_2(false));
        return;
      }
    }
    const items1 = [];
    cResult[5] = F;
    cResult[6] = items1;
    let tmp13 = items1;
  } else {
    class F {
      constructor() {
        obj = closure_0(closure_2[15]);
        obj1 = { omitUserIds: null };
        set = new Set();
        obj1.omitUserIds = set;
        inviteSuggestions = obj.loadInviteSuggestions(obj1);
        nextPromise = inviteSuggestions.then(() => {
          if ("" !== ref.current) {
            const result = combined(dependencyMap[15]).searchInviteSuggestions(tmp.current);
            const obj = combined(dependencyMap[15]);
          }
        });
        catchPromise = nextPromise.catch(NOOP_NULL);
        cleanupPromise = catchPromise.finally(() => closure_1_2(false));
        return;
      }
    }
    tmp13 = cResult[6];
  }
  const effect = noop.useEffect(F, tmp13);
  if (cResult[7] !== tmp5) {
    class F {
      constructor() {
        obj = closure_0(closure_2[15]);
        obj1 = { omitUserIds: null };
        set = new Set();
        obj1.omitUserIds = set;
        inviteSuggestions = obj.loadInviteSuggestions(obj1);
        nextPromise = inviteSuggestions.then(() => {
          if ("" !== ref.current) {
            const result = combined(dependencyMap[15]).searchInviteSuggestions(tmp.current);
            const obj = combined(dependencyMap[15]);
          }
        });
        catchPromise = nextPromise.catch(NOOP_NULL);
        cleanupPromise = catchPromise.finally(() => closure_1_2(false));
        return;
      }
    }
    cResult[7] = tmp5;
    cResult[8] = tmp16;
  } else {
    class F {
      constructor() {
        obj = closure_0(closure_2[15]);
        obj1 = { omitUserIds: null };
        set = new Set();
        obj1.omitUserIds = set;
        inviteSuggestions = obj.loadInviteSuggestions(obj1);
        nextPromise = inviteSuggestions.then(() => {
          if ("" !== ref.current) {
            const result = combined(dependencyMap[15]).searchInviteSuggestions(tmp.current);
            const obj = combined(dependencyMap[15]);
          }
        });
        catchPromise = nextPromise.catch(NOOP_NULL);
        cleanupPromise = catchPromise.finally(() => closure_1_2(false));
        return;
      }
    }
  }
  if (cResult[9] !== combined) {
    class X {
      constructor(arg0) {
        tmp = setSendState(closure_0, guildId.id, InviteSendStates.SENT);
        return;
      }
    }
    cResult[9] = combined;
    cResult[10] = X;
  } else {
    class X {
      constructor(arg0) {
        tmp = setSendState(closure_0, guildId.id, InviteSendStates.SENT);
        return;
      }
    }
  }
  if (cResult[11] === str.centeredText) {
    class X {
      constructor(arg0) {
        tmp = setSendState(closure_0, guildId.id, InviteSendStates.SENT);
        return;
      }
    }
  }
  const intl = formatToPlainString(1126).intl;
  let centeredText = importDefault;
  const stringResult = intl.string(_modDef2391.nVMqjA);
  if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
    class X {
      constructor(arg0) {
        tmp = setSendState(closure_0, guildId.id, InviteSendStates.SENT);
        return;
      }
    }
    const stringResult1 = obj4.string(formatToPlainString(1126).t.cpT0Cq);
    cResult[26] = stringResult1;
    const tmp19 = stringResult1;
  } else {
    class X {
      constructor(arg0) {
        tmp = setSendState(closure_0, guildId.id, InviteSendStates.SENT);
        return;
      }
    }
  }
  let obj2 = { spacing: nativeDefault.space.PX_4, children: null };
  const obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: str.centeredText, children: null };
  const intl2 = formatToPlainString(1126).intl;
  obj5.children = intl2.formatToPlainString(_modDef2391.EnTIIr, { noun: stringResult });
  const items2 = [closure_11(formatToPlainString(4886).Heading, obj5), ];
  const obj6 = { variant: "text-sm/medium", color: "text-muted", style: str.centeredText, children: null };
  const intl3 = formatToPlainString(1126).intl;
  obj6.children = intl3.formatToPlainString(_modDef2391.BBk7Qw, { noun: stringResult });
  items2[1] = closure_11(formatToPlainString(4886).Text, obj6);
  obj2.children = items2;
  const tmp10 = _slicedToArray(noop.useState(true), 2);
  const intl4 = formatToPlainString(1126).intl;
  formatToPlainString = intl4.formatToPlainString;
  const tmp21 = closure_12(formatToPlainString(5593).Stack, obj2);
  centeredText = str.centeredText;
  cResult[11] = centeredText;
  cResult[12] = str.header;
  cResult[13] = formatToPlainString(6547).SearchField;
  cResult[14] = formatToPlainString(5593).Stack;
  cResult[15] = formatToPlainString(6701).ActionSheet;
  cResult[16] = true;
  cResult[17] = R;
  cResult[18] = formatToPlainString(_modDef2391.cRK6SQ, { noun: stringResult });
  cResult[19] = nativeDefault.space.PX_16;
  cResult[20] = str.header;
  cResult[21] = tmp21;
  cResult[22] = true;
  cResult[23] = true;
  cResult[24] = tmp19;
  str = "md";
  cResult[25] = "md";
  const formatToPlainStringResult1 = formatToPlainString(_modDef2391.cRK6SQ, { noun: stringResult });
}) : ((guildId) => {
  _slicedToArray = undefined;
  const tmp = closure_13();
  const combined = "game-organization-invite:" + guildId.guildId;
  const tmp3 = closure_7((arg0) => arg0[combined]);
  importDefault = tmp3;
  const items = [InviteSuggestionsStore];
  const stateFromStoresArray = combined(504).useStateFromStoresArray(items, () => {
    inviteSuggestionRows = inviteSuggestionRows.getInviteSuggestionRows();
    const found = inviteSuggestionRows.filter(isInvitableUserRow);
    return found.map((item) => item.item);
  });
  const tmp6 = _slicedToArray(noop.useState(true), 2);
  dependencyMap = tmp6[1];
  _slicedToArray = noop.useRef("");
  const callback = noop.useCallback((current) => {
    closure_3.current = current;
    const result = InviteSuggestionsActionCreators.searchInviteSuggestions(current);
  }, []);
  const effect = noop.useEffect(() => {
    const obj2 = { omitUserIds: null };
    let obj = InviteSuggestionsActionCreators;
    obj2.omitUserIds = new Set();
    const inviteSuggestions = obj.loadInviteSuggestions(obj2);
    const set = new Set();
    const nextPromise = inviteSuggestions.then(() => {
      if ("" !== ref.current) {
        const result = combined(9508).searchInviteSuggestions(tmp.current);
        const obj = combined(9508);
      }
    });
    inviteSuggestions.then(() => {
      if ("" !== ref.current) {
        const result = combined(9508).searchInviteSuggestions(tmp.current);
        const obj = combined(9508);
      }
    }).catch(NOOP_NULL).finally(() => dependencyMap(false));
  }, []);
  const items1 = [tmp3];
  const items2 = [combined];
  const callback1 = noop.useCallback((arg0) => {
    let tmp2;
    if (closure_1 != null) {
      tmp2 = tmp[arg0];
    }
    if (tmp2 == null) {
      tmp2 = null;
    }
    return tmp2;
  }, items1);
  const callback2 = noop.useCallback((id) => {
    timestampProducer(combined, id.id, InviteSendStates.SENT);
  }, items2);
  const intl = combined(1126).intl;
  const stringResult = intl.string(_modDef2391.nVMqjA);
  let obj2 = { scrollable: true, startExpanded: true, dismissAccessibilityLabel: null, header: null, children: null };
  const intl2 = combined(1126).intl;
  obj2.dismissAccessibilityLabel = intl2.string(combined(1126).t.cpT0Cq);
  const obj3 = { spacing: nativeDefault.space.PX_16, style: tmp.header, children: null };
  const obj4 = { spacing: nativeDefault.space.PX_4, children: null };
  const obj5 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.centeredText, children: null };
  const intl3 = combined(1126).intl;
  obj5.children = intl3.formatToPlainString(_modDef2391.EnTIIr, { noun: stringResult });
  const items3 = [closure_11(combined(4886).Heading, obj5), ];
  const obj6 = { variant: "text-sm/medium", color: "text-muted", style: tmp.centeredText, children: null };
  const intl4 = combined(1126).intl;
  obj6.children = intl4.formatToPlainString(_modDef2391.BBk7Qw, { noun: stringResult });
  items3[1] = closure_11(combined(4886).Text, obj6);
  obj4.children = items3;
  const items4 = [closure_12(combined(5593).Stack, obj4), ];
  const obj7 = { size: "md", round: true, onChange: callback, placeholder: null };
  const intl5 = combined(1126).intl;
  obj7.placeholder = intl5.formatToPlainString(_modDef2391.cRK6SQ, { noun: stringResult });
  items4[1] = closure_11(combined(6547).SearchField, obj7);
  obj3.children = items4;
  obj2.header = closure_12(combined(5593).Stack, obj3);
  if (tmp6[0]) {
    let tmp13Result = closure_11(closure_15, {});
  } else {
    const obj8 = { users: stateFromStoresArray, getSendState: callback1, onInvite: callback2 };
    tmp13Result = closure_11(GameOrganizationInviteListDefault, obj8);
  }
  obj2.children = tmp13Result;
  return closure_11(combined(6701).ActionSheet, obj2);
});