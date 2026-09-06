// discord_app/modules/display_name_styles/hooks/useDisplayNameStyles.tsx
import _mod19 from "../../../../_runtime/metro/00019__.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const useContext = _mod19.useContext;
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStyles.tsx");

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
  const displayNameStylesEnabled = require("useDisplayNameStylesEnabled").useDisplayNameStylesEnabled({
    location: "useDisplayNameStyles",
  });
  const obj2 = require("useDisplayNameStylesEnabled");
  const tmp = require;
  const tmp2 = stateFromStores;
  const items = [UserStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => {
    if (null != require) {
      let user = UserStore.getUser(tmp);
    } else {
      user = UserStore.getCurrentUser();
    }
    return user;
  });
  const tmp5 = useContext(require("GuildIDContext"));
  let tmp6 = null;
  if (null == guildId) {
    importDefault = tmp5;
    guildId = tmp5;
  }
  const obj3 = require("initialize");
  const items1 = [GuildMemberStore];
  const stateFromStores1 = tmp(tmp2[4]).useStateFromStores(items1, () => {
    let member = null;
    if (null != closure_1) {
      member = null;
      if (null != stateFromStores) {
        member = GuildMemberStore.getMember(tmp, tmp3.id);
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
