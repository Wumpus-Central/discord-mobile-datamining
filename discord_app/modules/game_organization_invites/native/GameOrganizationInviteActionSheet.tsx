// discord_app/modules/game_organization_invites/native/GameOrganizationInviteActionSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import InstantInviteUtils from "../../../utils/InstantInviteUtils.tsx";
import UserPlaceholderRowDefault from "../../main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx";
import InviteSuggestionsActionCreators from "../../../actions/InviteSuggestionsActionCreators.tsx";
import getGameOrganizationInviteSendStateKeyDefault from "../getGameOrganizationInviteSendStateKey.tsx";
import sendGameOrganizationInviteDefault from "../sendGameOrganizationInvite.tsx";
import showGameOrganizationInviteErrorToastDefault from "showGameOrganizationInviteErrorToast.tsx";
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
const View = fn(17).View;
let closure_6 = fn(9167).useInstantInviteSendStates;
const NOOP_NULL = fn(1095).NOOP_NULL;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5005);
let obj2 = { header: { paddingTop: nativeDefault.space.PX_16 }, centeredText: { textAlign: "center" } };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Loading() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        let num3 = 0;
        do {
          let obj2 = { row: num3 };
          let arr = items.push(v65535(UserPlaceholderRowDefault, obj2, num3));
          num3 = num3 + 1;
        } while (num3 < 10);
        const obj3 = { children: items };
        const tmp3Result = v65535(View, obj3);
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
        let arr = children.push(v65535(UserPlaceholderRowDefault, obj, num));
        num = num + 1;
      } while (num < 10);
      return v65535(View, { children });
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
      const cResult = guildId(576).c(56);
      guildId = guildId.guildId;
      let str = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guildId) {
        const fn = function p() {
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
        cResult[1] = guildId;
        cResult[2] = fn;
        let tmp5 = fn;
      } else {
        tmp5 = cResult[2];
      }
      let obj = guildId(576);
      const stateFromStores = formatToPlainString(504).useStateFromStores(first, tmp5);
      if (cResult[3] !== stateFromStores) {
        let tmp8 = null;
        if (null != stateFromStores) {
          tmp8 = stateFromStores(11411)(stateFromStores);
        }
        cResult[3] = stateFromStores;
        cResult[4] = tmp8;
        let tmp7 = tmp8;
      } else {
        tmp7 = cResult[4];
      }
      dependencyMap = tmp7;
      if (cResult[5] !== tmp7) {
        const fn2 = function x(arg0) {
          let tmp2;
          if (null != closure_2) {
            tmp2 = arg0[tmp];
          }
          return tmp2;
        };
        cResult[5] = tmp7;
        cResult[6] = fn2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[6];
      }
      const tmp11 = closure_6(tmp10);
      _slicedToArray = tmp11;
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [InviteSuggestionsStore];
        class P {
          constructor() {
            inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
            found = inviteSuggestionRows.filter(closure_1_13);
            return found.map((item) => item.item);
          }
        }
        cResult[7] = items1;
        cResult[8] = P;
        let tmp13 = P;
        let tmp12 = items1;
      } else {
        tmp12 = cResult[7];
        tmp13 = cResult[8];
      }
      const formatToPlainStringResult = formatToPlainString(504);
      const stateFromStoresArray = formatToPlainString(504).useStateFromStoresArray(tmp12, tmp13);
      const formatToPlainStringResult1 = formatToPlainString(504);
      [r10069, noop] = noop.useState(true);
      closure_5 = noop.useRef("");
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        const fn3 = function k(current) {
          closure_5.current = current;
          const result = InviteSuggestionsActionCreators.searchInviteSuggestions(current);
        };
        cResult[9] = fn3;
        class P {
          constructor() {
            inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
            found = inviteSuggestionRows.filter(closure_1_13);
            return found.map((item) => item.item);
          }
        }
      } else {
        const tmp17 = cResult[9];
      }
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            obj = closure_0(closure_2[16]);
            obj1 = { omitUserIds: null };
            set = new Set();
            obj1.omitUserIds = set;
            inviteSuggestions = obj.loadInviteSuggestions(obj1);
            nextPromise = inviteSuggestions.then(() => {
              if ("" !== ref.current) {
                const result = guildId(dependencyMap[16]).searchInviteSuggestions(tmp.current);
                const obj = guildId(dependencyMap[16]);
              }
            });
            catchPromise = nextPromise.catch(NOOP_NULL);
            cleanupPromise = catchPromise.finally(() => closure_1_4(false));
            return;
          }
        }
        const items2 = [];
        class P {
          constructor() {
            inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
            found = inviteSuggestionRows.filter(closure_1_13);
            return found.map((item) => item.item);
          }
        }
        cResult[11] = items2;
        let tmp19 = items2;
      } else {
        class F {
          constructor() {
            obj = closure_0(closure_2[16]);
            obj1 = { omitUserIds: null };
            set = new Set();
            obj1.omitUserIds = set;
            inviteSuggestions = obj.loadInviteSuggestions(obj1);
            nextPromise = inviteSuggestions.then(() => {
              if ("" !== ref.current) {
                const result = guildId(dependencyMap[16]).searchInviteSuggestions(tmp.current);
                const obj = guildId(dependencyMap[16]);
              }
            });
            catchPromise = nextPromise.catch(NOOP_NULL);
            cleanupPromise = catchPromise.finally(() => closure_1_4(false));
            return;
          }
        }
        tmp19 = cResult[11];
      }
      const effect = noop.useEffect(F, tmp19);
      if (cResult[12] !== tmp11) {
        class U {
          constructor(arg0) {
            tmp2 = undefined;
            if (closure_3 != null) {
              tmp3 = guildId;
              tmp2 = tmp[guildId];
            }
            if (tmp2 == null) {
              tmp2 = null;
            }
            return tmp2;
          }
        }
        cResult[12] = tmp11;
        class P {
          constructor() {
            inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
            found = inviteSuggestionRows.filter(closure_1_13);
            return found.map((item) => item.item);
          }
        }
        cResult[13] = U;
      } else {
        class U {
          constructor(arg0) {
            tmp2 = undefined;
            if (closure_3 != null) {
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
      if (cResult[14] !== stateFromStores) {
        class X {
          constructor(arg0) {
            tmp = closure_1;
            if (null != closure_1) {
              tmp2 = guildId;
              tmp3 = closure_1;
              tmp4 = closure_2;
              tmp5 = closure_1(closure_2[17]);
              tmp6 = closure_1(closure_2[15])(tmp);
              tmp7 = tmp6;
              tmp8 = tmp;
              tmp5Result = tmp5(tmp6, tmp, guildId, closure_1(closure_2[18]));
            }
            return;
          }
        }
        cResult[14] = stateFromStores;
        class P {
          constructor() {
            inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
            found = inviteSuggestionRows.filter(closure_1_13);
            return found.map((item) => item.item);
          }
        }
        cResult[15] = X;
      } else {
        class X {
          constructor(arg0) {
            tmp = closure_1;
            if (null != closure_1) {
              tmp2 = guildId;
              tmp3 = closure_1;
              tmp4 = closure_2;
              tmp5 = closure_1(closure_2[17]);
              tmp6 = closure_1(closure_2[15])(tmp);
              tmp7 = tmp6;
              tmp8 = tmp;
              tmp5Result = tmp5(tmp6, tmp, guildId, closure_1(closure_2[18]));
            }
            return;
          }
        }
      }
      if (cResult[16] === str.centeredText) {
        class X {
          constructor(arg0) {
            tmp = closure_1;
            if (null != closure_1) {
              tmp2 = guildId;
              tmp3 = closure_1;
              tmp4 = closure_2;
              tmp5 = closure_1(closure_2[17]);
              tmp6 = closure_1(closure_2[15])(tmp);
              tmp7 = tmp6;
              tmp8 = tmp;
              tmp5Result = tmp5(tmp6, tmp, guildId, closure_1(closure_2[18]));
            }
            return;
          }
        }
      }
      const intl = formatToPlainString(1125).intl;
      let centeredText = stateFromStores;
      const stringResult = intl.string(stateFromStores(2404).nVMqjA);
      if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
        class X {
          constructor(arg0) {
            tmp = closure_1;
            if (null != closure_1) {
              tmp2 = guildId;
              tmp3 = closure_1;
              tmp4 = closure_2;
              tmp5 = closure_1(closure_2[17]);
              tmp6 = closure_1(closure_2[15])(tmp);
              tmp7 = tmp6;
              tmp8 = tmp;
              tmp5Result = tmp5(tmp6, tmp, guildId, closure_1(closure_2[18]));
            }
            return;
          }
        }
        const stringResult1 = obj5.string(formatToPlainString(1125).t.cpT0Cq);
        class P {
          constructor() {
            inviteSuggestionRows = closure_1_8.getInviteSuggestionRows();
            found = inviteSuggestionRows.filter(closure_1_13);
            return found.map((item) => item.item);
          }
        }
        cResult[31] = stringResult1;
        const tmp24 = stringResult1;
      } else {
        class X {
          constructor(arg0) {
            tmp = closure_1;
            if (null != closure_1) {
              tmp2 = guildId;
              tmp3 = closure_1;
              tmp4 = closure_2;
              tmp5 = closure_1(closure_2[17]);
              tmp6 = closure_1(closure_2[15])(tmp);
              tmp7 = tmp6;
              tmp8 = tmp;
              tmp5Result = tmp5(tmp6, tmp, guildId, closure_1(closure_2[18]));
            }
            return;
          }
        }
      }
      let obj2 = { spacing: centeredText(587).space.PX_4, children: null };
      const obj3 = {
        variant: "heading-lg/bold",
        color: "mobile-text-heading-primary",
        style: str.centeredText,
        children: null,
      };
      const intl2 = formatToPlainString(1125).intl;
      obj3.children = intl2.formatToPlainString(centeredText(2404).EnTIIr, { noun: stringResult });
      const items3 = [closure_10(formatToPlainString(5271).Heading, obj3)];
      const obj6 = { variant: "text-sm/medium", color: "text-muted", style: str.centeredText, children: null };
      const intl3 = formatToPlainString(1125).intl;
      obj6.children = intl3.formatToPlainString(centeredText(2404).BBk7Qw, { noun: stringResult });
      items3[1] = closure_10(formatToPlainString(5271).Text, obj6);
      obj2.children = items3;
      const tmp16 = _slicedToArray(noop.useState(true), 2);
      const intl4 = formatToPlainString(1125).intl;
      formatToPlainString = intl4.formatToPlainString;
      const tmp26 = closure_11(formatToPlainString(6015).Stack, obj2);
      centeredText = str.centeredText;
      cResult[16] = centeredText;
      cResult[17] = str.header;
      cResult[18] = formatToPlainString(7205).SearchBar;
      cResult[19] = formatToPlainString(6015).Stack;
      cResult[20] = formatToPlainString(7358).ActionSheet;
      str = "md";
      cResult[21] = "md";
      cResult[22] = true;
      cResult[23] = tmp17;
      cResult[24] = formatToPlainString(centeredText(2404).cRK6SQ, { noun: stringResult });
      cResult[25] = centeredText(587).space.PX_16;
      cResult[26] = str.header;
      cResult[27] = tmp26;
      cResult[28] = true;
      cResult[29] = true;
      cResult[30] = tmp24;
      const formatToPlainStringResult2 = formatToPlainString(centeredText(2404).cRK6SQ, { noun: stringResult });
    }
  : function GameOrganizationInviteActionSheet(guildId) {
      guildId = guildId.guildId;
      dependencyMap = undefined;
      _slicedToArray = undefined;
      noop = undefined;
      closure_5 = undefined;
      const tmp = closure_12();
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
      let tmp5 = null;
      if (null != stateFromStores) {
        tmp5 = stateFromStores(11411)(stateFromStores);
      }
      dependencyMap = tmp5;
      const tmp7 = closure_6((arg0) => {
        let tmp2;
        if (null != closure_2) {
          tmp2 = arg0[tmp];
        }
        return tmp2;
      });
      _slicedToArray = tmp7;
      let obj = guildId(504);
      const items1 = [InviteSuggestionsStore];
      const stateFromStoresArray = guildId(504).useStateFromStoresArray(items1, () => {
        inviteSuggestionRows = inviteSuggestionRows.getInviteSuggestionRows();
        const found = inviteSuggestionRows.filter(isInvitableUserRow);
        return found.map((item) => item.item);
      });
      const tmp9 = _slicedToArray(noop.useState(true), 2);
      noop = tmp9[1];
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
            const result = guildId(dependencyMap[16]).searchInviteSuggestions(tmp.current);
            const obj = guildId(dependencyMap[16]);
          }
        });
        inviteSuggestions
          .then(() => {
            if ("" !== ref.current) {
              const result = guildId(dependencyMap[16]).searchInviteSuggestions(tmp.current);
              const obj = guildId(dependencyMap[16]);
            }
          })
          .catch(NOOP_NULL)
          .finally(() => closure_1_4(false));
      }, []);
      const items2 = [tmp7];
      const items3 = [stateFromStores];
      const callback1 = noop.useCallback((arg0) => {
        let tmp2;
        if (closure_3 != null) {
          tmp2 = tmp[arg0];
        }
        if (tmp2 == null) {
          tmp2 = null;
        }
        return tmp2;
      }, items2);
      const callback2 = noop.useCallback((stateFromStores2) => {
        if (null != stateFromStores) {
          const tmp6 = getGameOrganizationInviteSendStateKeyDefault(stateFromStores);
          sendGameOrganizationInviteDefault(
            tmp6,
            stateFromStores,
            stateFromStores2,
            showGameOrganizationInviteErrorToastDefault,
          );
        }
      }, items3);
      const intl = tmp2(1125).intl;
      const stringResult = intl.string(stateFromStores(2404).nVMqjA);
      let obj2 = {
        scrollable: true,
        startExpanded: true,
        dismissAccessibilityLabel: null,
        header: null,
        children: null,
      };
      const intl2 = tmp2(1125).intl;
      obj2.dismissAccessibilityLabel = intl2.string(guildId(1125).t.cpT0Cq);
      const obj3 = { spacing: stateFromStores(587).space.PX_16, style: tmp.header, children: null };
      const obj4 = { spacing: stateFromStores(587).space.PX_4, children: null };
      const obj5 = {
        variant: "heading-lg/bold",
        color: "mobile-text-heading-primary",
        style: tmp.centeredText,
        children: null,
      };
      const intl3 = tmp2(1125).intl;
      obj5.children = intl3.formatToPlainString(stateFromStores(2404).EnTIIr, { noun: stringResult });
      const items4 = [closure_10(guildId(5271).Heading, obj5)];
      const obj6 = { variant: "text-sm/medium", color: "text-muted", style: tmp.centeredText, children: null };
      const intl4 = tmp2(1125).intl;
      obj6.children = intl4.formatToPlainString(stateFromStores(2404).BBk7Qw, { noun: stringResult });
      items4[1] = closure_10(guildId(5271).Text, obj6);
      obj4.children = items4;
      const items5 = [closure_11(guildId(6015).Stack, obj4)];
      const obj7 = { size: "md", round: true, onChange: callback, placeholder: null };
      const intl5 = tmp2(1125).intl;
      obj7.placeholder = intl5.formatToPlainString(stateFromStores(2404).cRK6SQ, { noun: stringResult });
      items5[1] = closure_10(guildId(7205).SearchBar, obj7);
      obj3.children = items5;
      obj2.header = closure_11(guildId(6015).Stack, obj3);
      if (tmp9[0]) {
        let tmp16Result = closure_10(closure_14, {});
      } else {
        const obj8 = { users: stateFromStoresArray, getSendState: callback1, onInvite: callback2 };
        tmp16Result = closure_10(stateFromStores(15707), obj8);
      }
      obj2.children = tmp16Result;
      return closure_10(guildId(7358).ActionSheet, obj2);
    };
