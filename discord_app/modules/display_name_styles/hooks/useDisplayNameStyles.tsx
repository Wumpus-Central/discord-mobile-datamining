// discord_app/modules/display_name_styles/hooks/useDisplayNameStyles.tsx
import set from "../../../../_runtime/00002_set.js";
import noop from "../../../../_runtime/00019_noop.js";
import closure_4 from "../../../stores/GuildMemberStore.tsx";
import closure_5 from "../../../stores/UserStore.tsx";

const useContext = noop.useContext;
const result = set.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStyles.tsx");

export default function useDisplayNameStyles() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ userId: require, guildId } = obj);
  importDefault = guildId;
  ({ pendingDisplayNameStyles, ignoreDisabledStylesSetting } = obj);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  let stateFromStores;
  const displayNameStylesEnabled = require(stateFromStores[3]).useDisplayNameStylesEnabled({
    location: "useDisplayNameStyles",
  });
  const obj2 = require(stateFromStores[3]);
  const tmp = require;
  const tmp2 = stateFromStores;
  const items = [closure_5];
  stateFromStores = require(stateFromStores[4]).useStateFromStores(items, () => {
    if (null != closure_0) {
      let user = closure_1_5.getUser(tmp);
    } else {
      user = closure_1_5.getCurrentUser();
    }
    return user;
  });
  const tmp5 = useContext(importDefault(stateFromStores[5]));
  let tmp6 = null;
  if (null == guildId) {
    importDefault = tmp5;
    guildId = tmp5;
  }
  const obj3 = require(stateFromStores[4]);
  const items1 = [closure_4];
  const stateFromStores1 = tmp(tmp2[4]).useStateFromStores(items1, () => {
    let member = null;
    if (null != closure_1) {
      member = null;
      if (null != stateFromStores) {
        member = closure_1_4.getMember(tmp, tmp3.id);
      }
    }
    return member;
  });
  if (!displayNameStylesEnabled) {
    if (!ignoreDisabledStylesSetting) {
      return null;
    }
  }
  if (undefined !== pendingDisplayNameStyles) {
    let tmp11 = pendingDisplayNameStyles;
    if (tmp6 === pendingDisplayNameStyles) {
      tmp11 = pendingDisplayNameStyles;
      if (tmp6 != guildId) {
        tmp6 = stateFromStores == tmp6;
        guildId = undefined;
        if (!tmp6) {
          guildId = stateFromStores.displayNameStyles;
        }
        tmp11 = guildId;
      }
    }
    let displayNameStyles = tmp11;
  } else {
    displayNameStyles = undefined;
    if (stateFromStores1 != tmp6) {
      displayNameStyles = stateFromStores1.displayNameStyles;
    }
    if (displayNameStyles == tmp6) {
      let displayNameStyles1;
      if (stateFromStores != tmp6) {
        displayNameStyles1 = stateFromStores.displayNameStyles;
      }
      displayNameStyles = displayNameStyles1;
    }
  }
}
