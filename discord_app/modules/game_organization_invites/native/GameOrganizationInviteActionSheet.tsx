// discord_app/modules/game_organization_invites/native/GameOrganizationInviteActionSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import InstantInviteUtils from "../../../utils/InstantInviteUtils.tsx";
import UserPlaceholderRowDefault from "../../main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx";
import InviteSuggestionsActionCreators from "../../../actions/InviteSuggestionsActionCreators.tsx";
import sendGameOrganizationInviteDefault from "../sendGameOrganizationInvite.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import InviteSuggestionsStore from "../../../stores/InviteSuggestionsStore.tsx";

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
function showTooManyInvitesToast() {
  const obj2 = { text: null };
  const intl = util.intl;
  obj2.text = intl.string(util.t.fEptJP);
  ToastActionCreatorsDefault.open("GAME_ORGANIZATION_INVITE_TOO_MANY_INVITES", obj2);
}
const View = fn(17).View;
let closure_6 = fn(8763).useInstantInviteSendStates;
const NOOP_NULL = fn(1096).NOOP_NULL;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { header: { paddingTop: nativeDefault.space.PX_16 }, centeredText: { textAlign: "center" } };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Loading() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        let num3 = 0;
        do {
          let obj2 = { row: num3 };
          let arr = items.push(collapsed(UserPlaceholderRowDefault, obj2, num3));
          num3 = num3 + 1;
        } while (num3 < 10);
        const obj3 = { children: items };
        const tmp3Result = collapsed(View, obj3);
        cResult[0] = tmp3Result;
        let first = tmp3Result;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function Loading() {
      const children = [];
      let num = 0;
      do {
        let obj = { row: num };
        let arr = children.push(collapsed(UserPlaceholderRowDefault, obj, num));
        num = num + 1;
      } while (num < 10);
      return collapsed(View, { children });
    };
ReactCompilerGating = fn(558);
let obj3 = { paddingTop: nativeDefault.space.PX_16 };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationInviteActionSheet.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GameOrganizationInviteActionSheet(guildId) {
      let formatToPlainString = guildId;
      const cResult = guildId(576).c(55);
      guildId = guildId.guildId;
      let str = closure_12();
      const combined = "game-organization-invite:" + guildId;
      if (cResult[0] !== combined) {
        const fn = function u(arg0) {
          return arg0[combined];
        };
        cResult[0] = combined;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      const tmp5 = closure_6(tmp4);
      dependencyMap = tmp5;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[2] = items;
        let tmp6 = items;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== guildId) {
        const fn2 = function b() {
          guild = GuildStore.getGuild(guildId);
          let prop;
          if (guild != null) {
            prop = guild.linkedGameOrganization;
          }
          if (prop == null) {
            prop = null;
          }
          return prop;
        };
        cResult[3] = guildId;
        cResult[4] = fn2;
        let tmp8 = fn2;
      } else {
        tmp8 = cResult[4];
      }
      let obj = guildId(576);
      const stateFromStores = formatToPlainString(504).useStateFromStores(tmp6, tmp8);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [InviteSuggestionsStore];
        class A {
          constructor() {
            inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
            found = inviteSuggestionRows.filter(closure_1_13);
            return found.map((item) => item.item);
          }
        }
        cResult[5] = items1;
        cResult[6] = A;
        let tmp11 = A;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[5];
        tmp11 = cResult[6];
      }
      const formatToPlainStringResult = formatToPlainString(504);
      const stateFromStoresArray = formatToPlainString(504).useStateFromStoresArray(tmp10, tmp11);
      const formatToPlainStringResult1 = formatToPlainString(504);
      [r10064, noop] = stateFromStores(noop.useState(true), 2);
      closure_5 = noop.useRef("");
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor(arg0) {
            closure_5.current = guildId;
            obj = closure_0(closure_2[17]);
            result = obj.searchInviteSuggestions(guildId);
            return;
          }
        }
        cResult[7] = P;
        class A {
          constructor() {
            inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
            found = inviteSuggestionRows.filter(closure_1_13);
            return found.map((item) => item.item);
          }
        }
      } else {
        class P {
          constructor(arg0) {
            closure_5.current = guildId;
            obj = closure_0(closure_2[17]);
            result = obj.searchInviteSuggestions(guildId);
            return;
          }
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class M {
          constructor() {
            obj = closure_0(closure_2[17]);
            obj1 = { omitUserIds: null };
            set = new Set();
            obj1.omitUserIds = set;
            inviteSuggestions = obj.loadInviteSuggestions(obj1);
            nextPromise = inviteSuggestions.then(() => {
              if ("" !== ref.current) {
                const result = guildId(dependencyMap[17]).searchInviteSuggestions(tmp.current);
                const obj = guildId(dependencyMap[17]);
              }
            });
            catchPromise = nextPromise.catch(NOOP_NULL);
            cleanupPromise = catchPromise.finally(() => closure_1_4(false));
            return;
          }
        }
        const items2 = [];
        class A {
          constructor() {
            inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
            found = inviteSuggestionRows.filter(closure_1_13);
            return found.map((item) => item.item);
          }
        }
        cResult[9] = items2;
        let tmp17 = items2;
      } else {
        class M {
          constructor() {
            obj = closure_0(closure_2[17]);
            obj1 = { omitUserIds: null };
            set = new Set();
            obj1.omitUserIds = set;
            inviteSuggestions = obj.loadInviteSuggestions(obj1);
            nextPromise = inviteSuggestions.then(() => {
              if ("" !== ref.current) {
                const result = guildId(dependencyMap[17]).searchInviteSuggestions(tmp.current);
                const obj = guildId(dependencyMap[17]);
              }
            });
            catchPromise = nextPromise.catch(NOOP_NULL);
            cleanupPromise = catchPromise.finally(() => closure_1_4(false));
            return;
          }
        }
        tmp17 = cResult[9];
      }
      const effect = noop.useEffect(M, tmp17);
      if (cResult[10] !== tmp5) {
        class N {
          constructor(arg0) {
            tmp2 = undefined;
            if (closure_2 != null) {
              tmp3 = guildId;
              tmp2 = tmp[guildId];
            }
            if (tmp2 == null) {
              tmp2 = null;
            }
            return tmp2;
          }
        }
        cResult[10] = tmp5;
        class A {
          constructor() {
            inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
            found = inviteSuggestionRows.filter(closure_1_13);
            return found.map((item) => item.item);
          }
        }
        cResult[11] = N;
      } else {
        class N {
          constructor(arg0) {
            tmp2 = undefined;
            if (closure_2 != null) {
              tmp3 = guildId;
              tmp2 = tmp[guildId];
            }
            if (tmp2 == null) {
              tmp2 = null;
            }
            return tmp2;
          }
        }
      }
      if (cResult[12] === stateFromStores) {
        class N {
          constructor(arg0) {
            tmp2 = undefined;
            if (closure_2 != null) {
              tmp3 = guildId;
              tmp2 = tmp[guildId];
            }
            if (tmp2 == null) {
              tmp2 = null;
            }
            return tmp2;
          }
        }
        if (cResult[15] === str.centeredText) {
          class N {
            constructor(arg0) {
              tmp2 = undefined;
              if (closure_2 != null) {
                tmp3 = guildId;
                tmp2 = tmp[guildId];
              }
              if (tmp2 == null) {
                tmp2 = null;
              }
              return tmp2;
            }
          }
        }
        const intl = formatToPlainString(1126).intl;
        class A {
          constructor() {
            inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
            found = inviteSuggestionRows.filter(closure_1_13);
            return found.map((item) => item.item);
          }
        }
        const stringResult = intl.string(combined(2438).nVMqjA);
        const ActionSheet = formatToPlainString(6898).ActionSheet;
        const _Symbol = Symbol;
        if (cResult[30] === Symbol.for("react.memo_cache_sentinel")) {
          class N {
            constructor(arg0) {
              tmp2 = undefined;
              if (closure_2 != null) {
                tmp3 = guildId;
                tmp2 = tmp[guildId];
              }
              if (tmp2 == null) {
                tmp2 = null;
              }
              return tmp2;
            }
          }
          const stringResult1 = obj5.string(formatToPlainString(1126).t.cpT0Cq);
          class A {
            constructor() {
              inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
              found = inviteSuggestionRows.filter(closure_1_13);
              return found.map((item) => item.item);
            }
          }
          cResult[30] = stringResult1;
        } else {
          class N {
            constructor(arg0) {
              tmp2 = undefined;
              if (closure_2 != null) {
                tmp3 = guildId;
                tmp2 = tmp[guildId];
              }
              if (tmp2 == null) {
                tmp2 = null;
              }
              return tmp2;
            }
          }
        }
        const Stack = formatToPlainString(5377).Stack;
        const PX_16 = centeredText(587).space.PX_16;
        const header = str.header;
        let obj2 = { spacing: centeredText(587).space.PX_4, children: null };
        const obj3 = {
          variant: "heading-lg/bold",
          color: "mobile-text-heading-primary",
          style: str.centeredText,
          children: null,
        };
        const intl2 = formatToPlainString(1126).intl;
        const obj6 = { noun: stringResult };
        obj3.children = intl2.formatToPlainString(centeredText(2438).EnTIIr, obj6);
        const items3 = [closure_10(formatToPlainString(5088).Heading, obj3)];
        const obj7 = { variant: "text-sm/medium", color: "text-muted", style: str.centeredText, children: null };
        const intl3 = formatToPlainString(1126).intl;
        const obj8 = { noun: stringResult };
        obj7.children = intl3.formatToPlainString(centeredText(2438).BBk7Qw, obj8);
        items3[1] = closure_10(formatToPlainString(5088).Text, obj7);
        obj2.children = items3;
        const tmp25 = closure_11(formatToPlainString(5377).Stack, obj2);
        const intl4 = formatToPlainString(1126).intl;
        formatToPlainString = intl4.formatToPlainString;
        const obj9 = { noun: stringResult };
        const formatToPlainStringResult2 = formatToPlainString(centeredText(2438).cRK6SQ, obj9);
        centeredText = str.centeredText;
        cResult[15] = centeredText;
        cResult[16] = str.header;
        class U {
          constructor(arg0) {
            tmp = closure_3;
            if (null != closure_3) {
              tmp2 = guildId;
              tmp3 = closure_1;
              tmp4 = closure_2;
              tmp5 = closure_1;
              tmp6 = showTooManyInvitesToast;
              tmp7 = tmp;
              tmp8 = closure_1(closure_2[18])(closure_1, tmp, guildId, showTooManyInvitesToast);
            }
            return;
          }
        }
        cResult[18] = Stack;
        cResult[19] = ActionSheet;
        str = "md";
        cResult[20] = "md";
        cResult[21] = true;
        cResult[22] = tmp15;
        cResult[23] = formatToPlainStringResult2;
        cResult[24] = PX_16;
        cResult[25] = header;
        cResult[26] = tmp25;
        cResult[27] = true;
        cResult[28] = true;
        cResult[29] = tmp21;
        const SearchField = formatToPlainString(6738).SearchField;
      }
      class U {
        constructor(arg0) {
          tmp = closure_3;
          if (null != closure_3) {
            tmp2 = guildId;
            tmp3 = closure_1;
            tmp4 = closure_2;
            tmp5 = closure_1;
            tmp6 = showTooManyInvitesToast;
            tmp7 = tmp;
            tmp8 = closure_1(closure_2[18])(closure_1, tmp, guildId, showTooManyInvitesToast);
          }
          return;
        }
      }
      cResult[12] = stateFromStores;
      cResult[13] = combined;
      cResult[14] = U;
      const tmp14 = stateFromStores(noop.useState(true), 2);
    }
  : function GameOrganizationInviteActionSheet(guildId) {
      guildId = guildId.guildId;
      noop = undefined;
      const tmp = closure_12();
      const combined = "game-organization-invite:" + guildId;
      const tmp3 = closure_6((arg0) => arg0[combined]);
      dependencyMap = tmp3;
      const items = [GuildStore];
      const stateFromStores = guildId(504).useStateFromStores(items, () => {
        guild = GuildStore.getGuild(guildId);
        let prop;
        if (guild != null) {
          prop = guild.linkedGameOrganization;
        }
        if (prop == null) {
          prop = null;
        }
        return prop;
      });
      let obj = guildId(504);
      const items1 = [InviteSuggestionsStore];
      const stateFromStoresArray = guildId(504).useStateFromStoresArray(items1, () => {
        inviteSuggestionRows = inviteSuggestionRows.getInviteSuggestionRows();
        const found = inviteSuggestionRows.filter(isInvitableUserRow);
        return found.map((item) => item.item);
      });
      const tmp7 = stateFromStores(noop.useState(true), 2);
      noop = tmp7[1];
      closure_5 = noop.useRef("");
      const callback = noop.useCallback((current) => {
        closure_5.current = current;
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
            const result = guildId(dependencyMap[17]).searchInviteSuggestions(tmp.current);
            const obj = guildId(dependencyMap[17]);
          }
        });
        inviteSuggestions
          .then(() => {
            if ("" !== ref.current) {
              const result = guildId(dependencyMap[17]).searchInviteSuggestions(tmp.current);
              const obj = guildId(dependencyMap[17]);
            }
          })
          .catch(NOOP_NULL)
          .finally(() => closure_1_4(false));
      }, []);
      const items2 = [tmp3];
      const items3 = [combined, stateFromStores];
      const callback1 = noop.useCallback((arg0) => {
        let tmp2;
        if (closure_2 != null) {
          tmp2 = tmp[arg0];
        }
        if (tmp2 == null) {
          tmp2 = null;
        }
        return tmp2;
      }, items2);
      const callback2 = noop.useCallback((arg0) => {
        if (null != stateFromStores) {
          sendGameOrganizationInviteDefault(combined, stateFromStores, arg0, showTooManyInvitesToast);
        }
      }, items3);
      const intl = guildId(1126).intl;
      const stringResult = intl.string(combined(2438).nVMqjA);
      const obj3 = {
        scrollable: true,
        startExpanded: true,
        dismissAccessibilityLabel: null,
        header: null,
        children: null,
      };
      const intl2 = guildId(1126).intl;
      obj3.dismissAccessibilityLabel = intl2.string(guildId(1126).t.cpT0Cq);
      const obj4 = { spacing: combined(587).space.PX_16, style: tmp.header, children: null };
      const obj5 = { spacing: combined(587).space.PX_4, children: null };
      const obj6 = {
        variant: "heading-lg/bold",
        color: "mobile-text-heading-primary",
        style: tmp.centeredText,
        children: null,
      };
      const intl3 = guildId(1126).intl;
      obj6.children = intl3.formatToPlainString(combined(2438).EnTIIr, { noun: stringResult });
      const items4 = [closure_10(guildId(5088).Heading, obj6)];
      const obj7 = { variant: "text-sm/medium", color: "text-muted", style: tmp.centeredText, children: null };
      const intl4 = guildId(1126).intl;
      obj7.children = intl4.formatToPlainString(combined(2438).BBk7Qw, { noun: stringResult });
      items4[1] = closure_10(guildId(5088).Text, obj7);
      obj5.children = items4;
      const items5 = [closure_11(guildId(5377).Stack, obj5)];
      const obj8 = { size: "md", round: true, onChange: callback, placeholder: null };
      const intl5 = guildId(1126).intl;
      obj8.placeholder = intl5.formatToPlainString(combined(2438).cRK6SQ, { noun: stringResult });
      items5[1] = closure_10(guildId(6738).SearchField, obj8);
      obj4.children = items5;
      obj3.header = closure_11(guildId(5377).Stack, obj4);
      if (tmp7[0]) {
        let tmp14Result = closure_10(closure_15, {});
      } else {
        const obj9 = { users: stateFromStoresArray, getSendState: callback1, onInvite: callback2 };
        tmp14Result = closure_10(combined(14171), obj9);
      }
      obj3.children = tmp14Result;
      return closure_10(guildId(6898).ActionSheet, obj3);
    };
