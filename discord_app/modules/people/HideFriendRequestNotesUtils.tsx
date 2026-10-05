// discord_app/modules/people/HideFriendRequestNotesUtils.tsx
import UserSettings from "../user_settings/UserSettings.tsx";
import useUserIsTeen from "../self_mod/hooks/useUserIsTeen.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const HideFriendRequestNotes = UserSettings.HideFriendRequestNotes;
      const setting = HideFriendRequestNotes.useSetting();
      const obj = useUserIsTeen;
      let userIsTeen = obj.useUserIsTeen();
      if (null != setting) {
        userIsTeen = setting;
      }
      return userIsTeen;
    }
  : () => {
      const HideFriendRequestNotes = UserSettings.HideFriendRequestNotes;
      const setting = HideFriendRequestNotes.useSetting();
      const obj = useUserIsTeen;
      let userIsTeen = obj.useUserIsTeen();
      if (null != setting) {
        userIsTeen = setting;
      }
      return userIsTeen;
    };
let closure_3 = tmp2;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp7;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      const tmp4 = closure_3();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RelationshipStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          return RelationshipStore.getNote(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
      let tmp9 = null;
      if (!tmp4) {
        tmp9 = null;
        if (null != stateFromStores) {
          tmp9 = null;
          if ("" !== stateFromStores) {
            tmp9 = stateFromStores;
          }
        }
      }
      return tmp9;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [RelationshipStore];
      const tmp = closure_3();
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.getNote(closure_0));
      let tmp3 = null;
      if (!tmp) {
        tmp3 = null;
        if (null != stateFromStores) {
          tmp3 = null;
          if ("" !== stateFromStores) {
            tmp3 = stateFromStores;
          }
        }
      }
      return tmp3;
    };
const result = size.fileFinishedImporting("modules/people/HideFriendRequestNotesUtils.tsx");

export const useHideFriendRequestNotes = tmp2;
export const useFriendRequestNote = tmp3;
