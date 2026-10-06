// discord_app/modules/game_organization_invites/native/GameOrganizationInviteActionSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../discord_common/js/shared/Constants.tsx";
import _modDef2391 from "../GameOrganizationInvitesUntranslated.messages.js";
import Constants2 from "../../instant_invite/Constants.tsx";
import InstantInviteUtils from "../../../utils/InstantInviteUtils.tsx";
import UserPlaceholderRowDefault from "../../main_tabs_v2/native/shared_components/user_list/UserPlaceholderRow.tsx";
import InviteSuggestionsActionCreators from "../../../actions/InviteSuggestionsActionCreators.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import InstantInviteSendStateStore from "../../instant_invite/InstantInviteSendStateStore.tsx";
import InviteSuggestionsStore from "../../../stores/InviteSuggestionsStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap, guildId, importDefault, inviteSuggestionRows;

let closure_12;
let metroImportDefault;
let metroRequire;
let obj2;
let tmp12;
let unpackModuleId;
const GameOrganizationInviteListDefault = tmp12(13794);
function isInvitableUserRow(type) {
  const tmp3 =
    (type.type === InstantInviteUtils.RowTypes.FRIEND || type.type === InstantInviteUtils.RowTypes.DM) &&
    !type.item.bot;
  return tmp3;
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ setSendState: metroRequire, useInstantInviteSendStates: metroImportDefault } = InstantInviteSendStateStore);
const InviteSendStates = Constants2.InviteSendStates;
const NOOP_NULL = Constants.NOOP_NULL;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = { header: obj2, centeredText: { textAlign: "center" } };
obj2 = { paddingTop: nativeDefault.space.PX_16 };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        let num3 = 0;
        do {
          let obj2 = { row: num3 };
          let arr = items.push(unpackModuleId(UserPlaceholderRowDefault, obj2, num3));
          num3 = num3 + 1;
        } while (num3 < 10);
        const obj3 = { children: items };
        const tmp3Result = unpackModuleId(View, obj3);
        cResult[0] = tmp3Result;
        first = tmp3Result;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      const children = [];
      let num = 0;
      do {
        let obj = { row: num };
        let arr = children.push(unpackModuleId(UserPlaceholderRowDefault, obj, num));
        num = num + 1;
      } while (num < 10);
      return unpackModuleId(View, { children });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let closure_1;
      let closure_3;
      let combined;
      let intl2;
      let intl3;
      let items2;
      let tmp15;
      let tmp25;
      let tmp6;
      let tmp8;
      let tmp9;
      let tmp = combined;
      let obj = combined(576);
      const cResult = obj.c(51);
      guildId = guildId.guildId;
      const tmp4 = closure_13();
      combined = "game-organization-invite:" + guildId;
      if (cResult[0] !== combined) {
        const fn = function s(arg0) {
          return arg0[combined];
        };
        cResult[0] = combined;
        cResult[1] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[1];
      }
      const tmp7 = closure_7(tmp6);
      importDefault = tmp7;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [InviteSuggestionsStore];
        const fn2 = function x() {
          inviteSuggestionRows = inviteSuggestionRows.getInviteSuggestionRows();
          const found = inviteSuggestionRows.filter(isInvitableUserRow);
          return found.map((item) => item.item);
        };
        cResult[2] = items;
        cResult[3] = fn2;
        tmp9 = fn2;
        tmp8 = items;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(tmp8, tmp9);
      [r10047, dependencyMap] = react.useState(true);
      _slicedToArray(react.useState(true), 2);
      _slicedToArray = react.useRef("");
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        class R {
          constructor(current) {
            closure_3.current = current;
            const obj = InviteSuggestionsActionCreators;
            const result = obj.searchInviteSuggestions(current);
          }
        }
        cResult[4] = R;
      } else {
        class R {
          constructor(current) {
            closure_3.current = current;
            const obj = InviteSuggestionsActionCreators;
            const result = obj.searchInviteSuggestions(current);
          }
        }
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class F {
          constructor() {
            let ref;
            const tmp = InviteSuggestionsActionCreators;
            let obj = { omitUserIds: new Set() };
            const loadInviteSuggestions = tmp.loadInviteSuggestions;
            new Set();
            const inviteSuggestions = loadInviteSuggestions(obj);
            const nextPromise = inviteSuggestions.then(() => {
              if ("" !== ref.current) {
                const obj = combined(dependencyMap[15]);
                const result = obj.searchInviteSuggestions(tmp.current);
              }
            });
            const catchPromise = nextPromise.catch(NOOP_NULL);
            catchPromise.finally(() => closure_1_2(false));
          }
        }
        const items1 = [];
        cResult[5] = F;
        cResult[6] = items1;
        tmp15 = items1;
      } else {
        class F {
          constructor() {
            let ref;
            const tmp = InviteSuggestionsActionCreators;
            let obj = { omitUserIds: new Set() };
            const loadInviteSuggestions = tmp.loadInviteSuggestions;
            new Set();
            const inviteSuggestions = loadInviteSuggestions(obj);
            const nextPromise = inviteSuggestions.then(() => {
              if ("" !== ref.current) {
                const obj = combined(dependencyMap[15]);
                const result = obj.searchInviteSuggestions(tmp.current);
              }
            });
            const catchPromise = nextPromise.catch(NOOP_NULL);
            catchPromise.finally(() => closure_1_2(false));
          }
        }
        tmp15 = cResult[6];
      }
      const effect = react.useEffect(F, tmp15);
      if (cResult[7] !== tmp7) {
        class F {
          constructor() {
            let ref;
            const tmp = InviteSuggestionsActionCreators;
            let obj = { omitUserIds: new Set() };
            const loadInviteSuggestions = tmp.loadInviteSuggestions;
            new Set();
            const inviteSuggestions = loadInviteSuggestions(obj);
            const nextPromise = inviteSuggestions.then(() => {
              if ("" !== ref.current) {
                const obj = combined(dependencyMap[15]);
                const result = obj.searchInviteSuggestions(tmp.current);
              }
            });
            const catchPromise = nextPromise.catch(NOOP_NULL);
            catchPromise.finally(() => closure_1_2(false));
          }
        }
        cResult[7] = tmp7;
        cResult[8] = tmp18;
      } else {
        class F {
          constructor() {
            let ref;
            const tmp = InviteSuggestionsActionCreators;
            let obj = { omitUserIds: new Set() };
            const loadInviteSuggestions = tmp.loadInviteSuggestions;
            new Set();
            const inviteSuggestions = loadInviteSuggestions(obj);
            const nextPromise = inviteSuggestions.then(() => {
              if ("" !== ref.current) {
                const obj = combined(dependencyMap[15]);
                const result = obj.searchInviteSuggestions(tmp.current);
              }
            });
            const catchPromise = nextPromise.catch(NOOP_NULL);
            catchPromise.finally(() => closure_1_2(false));
          }
        }
      }
      if (cResult[9] !== combined) {
        class X {
          constructor(id) {
            metroRequire(combined, id.id, InviteSendStates.SENT);
          }
        }
        cResult[9] = combined;
        cResult[10] = X;
      } else {
        class X {
          constructor(id) {
            metroRequire(combined, id.id, InviteSendStates.SENT);
          }
        }
      }
      if (cResult[11] === tmp4.centeredText) {
        class X {
          constructor(id) {
            metroRequire(combined, id.id, InviteSendStates.SENT);
          }
        }
        if (cResult[27] === tmp20) {
          class X {
            constructor(id) {
              metroRequire(combined, id.id, InviteSendStates.SENT);
            }
          }
        }
        const obj2 = { size: str, round: flag, onChange: R, placeholder: tmp22 };
        cResult[27] = tmp20;
        cResult[28] = flag;
        cResult[29] = R;
        cResult[30] = tmp22;
        cResult[31] = str;
        cResult[32] = closure_11(tmp20, obj2);
        const tmp31 = closure_11(tmp20, obj2);
      }
      const intl = tmp(1126).intl;
      const stringResult = intl.string(_modDef2391.nVMqjA);
      const ActionSheet = tmp(6708).ActionSheet;
      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
        class X {
          constructor(id) {
            metroRequire(combined, id.id, InviteSendStates.SENT);
          }
        }
        const stringResult1 = obj4.string(tmp(1126).t.cpT0Cq);
        cResult[26] = stringResult1;
        tmp25 = stringResult1;
      } else {
        class X {
          constructor(id) {
            metroRequire(combined, id.id, InviteSendStates.SENT);
          }
        }
      }
      const Stack = tmp(5600).Stack;
      const PX_16 = tmp23(587).space.PX_16;
      const header = tmp4.header;
      const obj5 = { spacing: nativeDefault.space.PX_4, children: items2 };
      const Stack2 = tmp(5600).Stack;
      const obj6 = {
        variant: "heading-lg/bold",
        color: "mobile-text-heading-primary",
        style: tmp4.centeredText,
        children: intl2.formatToPlainString(_modDef2391.EnTIIr, { noun: stringResult }),
      };
      const Heading = tmp(4892).Heading;
      intl2 = tmp(1126).intl;
      items2 = [closure_11(Heading, obj6)];
      const obj7 = {
        variant: "text-sm/medium",
        color: "text-muted",
        style: tmp4.centeredText,
        children: intl3.formatToPlainString(_modDef2391.BBk7Qw, { noun: stringResult }),
      };
      const Text = tmp(4892).Text;
      intl3 = tmp(1126).intl;
      items2[1] = closure_11(Text, obj7);
      const tmp27 = closure_12(Stack2, obj5);
      const SearchField = tmp(6554).SearchField;
      const intl4 = tmp(1126).intl;
      cResult[11] = tmp4.centeredText;
      cResult[12] = tmp4.header;
      cResult[13] = SearchField;
      cResult[14] = Stack;
      cResult[15] = ActionSheet;
      cResult[16] = true;
      cResult[17] = R;
      cResult[18] = intl4.formatToPlainString(_modDef2391.cRK6SQ, { noun: stringResult });
      cResult[19] = PX_16;
      cResult[20] = header;
      cResult[21] = tmp27;
      cResult[22] = true;
      cResult[23] = true;
      cResult[24] = tmp25;
      cResult[25] = "md";
      const formatToPlainStringResult = intl4.formatToPlainString(_modDef2391.cRK6SQ, { noun: stringResult });
    }
  : (guildId) => {
      let Stack;
      let closure_1;
      let closure_2;
      let closure_3;
      let first;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let items3;
      let items4;
      let obj3;
      let tmp14Result;
      dependencyMap = undefined;
      guildId = guildId.guildId;
      let tmp = closure_13();
      const combined = "game-organization-invite:" + guildId;
      const tmp3 = closure_7((arg0) => arg0[combined]);
      importDefault = tmp3;
      let obj = combined(504);
      const items = [InviteSuggestionsStore];
      const stateFromStoresArray = obj.useStateFromStoresArray(items, () => {
        inviteSuggestionRows = inviteSuggestionRows.getInviteSuggestionRows();
        const found = inviteSuggestionRows.filter(isInvitableUserRow);
        return found.map((item) => item.item);
      });
      [first, dependencyMap] = react.useState(true);
      _slicedToArray = react.useRef("");
      const callback = react.useCallback((current) => {
        closure_3.current = current;
        const obj = InviteSuggestionsActionCreators;
        const result = obj.searchInviteSuggestions(current);
      }, []);
      const effect = react.useEffect(() => {
        let ref;
        const tmp = InviteSuggestionsActionCreators;
        let obj = { omitUserIds: new Set() };
        const loadInviteSuggestions = tmp.loadInviteSuggestions;
        new Set();
        const inviteSuggestions = loadInviteSuggestions(obj);
        const nextPromise = inviteSuggestions.then(() => {
          if ("" !== ref.current) {
            const obj = combined(closure_2[15]);
            const result = obj.searchInviteSuggestions(tmp.current);
          }
        });
        const catchPromise = nextPromise.catch(NOOP_NULL);
        catchPromise.finally(() => closure_1_2(false));
      }, []);
      const items1 = [tmp3];
      const items2 = [combined];
      const callback1 = react.useCallback((arg0) => {
        let tmp2;
        if (closure_1 != null) {
          tmp2 = tmp[arg0];
        }
        if (tmp2 == null) {
          tmp2 = null;
        }
        return tmp2;
      }, items1);
      const callback2 = react.useCallback((id) => {
        metroRequire(combined, id.id, InviteSendStates.SENT);
      }, items2);
      const intl = combined(1126).intl;
      const stringResult = intl.string(_modDef2391.nVMqjA);
      const obj2 = {
        scrollable: true,
        startExpanded: true,
        dismissAccessibilityLabel: intl2.string(combined(1126).t.cpT0Cq),
        header: closure_12(Stack, obj3),
        children: tmp14Result,
      };
      const ActionSheet = combined(6708).ActionSheet;
      intl2 = combined(1126).intl;
      obj3 = { spacing: nativeDefault.space.PX_16, style: tmp.header, children: items4 };
      Stack = combined(5600).Stack;
      const obj4 = { spacing: nativeDefault.space.PX_4, children: items3 };
      const Stack2 = combined(5600).Stack;
      const obj5 = {
        variant: "heading-lg/bold",
        color: "mobile-text-heading-primary",
        style: tmp.centeredText,
        children: intl3.formatToPlainString(_modDef2391.EnTIIr, { noun: stringResult }),
      };
      const Heading = combined(4892).Heading;
      intl3 = combined(1126).intl;
      items3 = [closure_11(Heading, obj5)];
      const obj6 = {
        variant: "text-sm/medium",
        color: "text-muted",
        style: tmp.centeredText,
        children: intl4.formatToPlainString(_modDef2391.BBk7Qw, { noun: stringResult }),
      };
      const Text = combined(4892).Text;
      intl4 = combined(1126).intl;
      items3[1] = closure_11(Text, obj6);
      items4 = [closure_12(Stack2, obj4)];
      const obj7 = {
        size: "md",
        round: true,
        onChange: callback,
        placeholder: intl5.formatToPlainString(_modDef2391.cRK6SQ, { noun: stringResult }),
      };
      const SearchField = combined(6554).SearchField;
      intl5 = combined(1126).intl;
      items4[1] = closure_11(SearchField, obj7);
      if (first) {
        tmp14Result = closure_11(closure_15, {});
      } else {
        const obj8 = { users: stateFromStoresArray, getSendState: callback1, onInvite: callback2 };
        tmp14Result = closure_11(GameOrganizationInviteListDefault, obj8);
      }
      return closure_11(ActionSheet, obj2);
    };
let result = size.fileFinishedImporting(
  "modules/game_organization_invites/native/GameOrganizationInviteActionSheet.tsx",
);

export default tmp4;
