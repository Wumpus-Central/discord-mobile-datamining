// discord_app/modules/display_name_styles/hooks/useDisplayNameStyles.tsx
import react from "../../../../_runtime/00019_react.js";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const useContext = react.useContext;
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStyles.tsx");

export default function useDisplayNameStyles() {
  let guildId;
  let ignoreDisabledStylesSetting;
  let pendingDisplayNameStyles;
  let tmp7;
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  ({ userId: require, guildId } = obj);
  ({ pendingDisplayNameStyles, ignoreDisabledStylesSetting } = obj);
  if (ignoreDisabledStylesSetting === undefined) {
    ignoreDisabledStylesSetting = false;
  }
  let stateFromStores;
  const obj2 = require("useDisplayNameStylesEnabled");
  const displayNameStylesEnabled = obj2.useDisplayNameStylesEnabled({ location: "useDisplayNameStyles" });
  const items = [UserStore];
  const obj3 = require("get initialized");
  const tmp2 = stateFromStores;
  stateFromStores = obj3.useStateFromStores(items, () => {
    let user;
    if (null != require) {
      user = UserStore.getUser(tmp);
    } else {
      user = UserStore.getCurrentUser();
    }
    return user;
  });
  const tmp5 = useContext(guildId(stateFromStores[5]));
  if (null == guildId) {
    guildId = tmp5;
  }
  const items1 = [GuildMemberStore];
  const tmpResult = require("get initialized");
  const stateFromStores1 = tmpResult.useStateFromStores(items1, () => {
    let member = null;
    if (null != guildId) {
      member = null;
      if (null != stateFromStores) {
        member = GuildMemberStore.getMember(tmp, tmp3.id);
      }
    }
    return member;
  });
  if (displayNameStylesEnabled) {
    let displayNameStyles1;
    if (undefined !== pendingDisplayNameStyles) {
      let tmp10 = pendingDisplayNameStyles;
      if (null === pendingDisplayNameStyles) {
        tmp10 = pendingDisplayNameStyles;
        if (null != guildId) {
          let displayNameStyles;
          if (stateFromStores != null) {
            displayNameStyles = stateFromStores.displayNameStyles;
          }
          tmp10 = displayNameStyles;
        }
      }
      displayNameStyles1 = tmp10;
    } else {
      displayNameStyles1 = undefined;
      if (stateFromStores1 != null) {
        displayNameStyles1 = stateFromStores1.displayNameStyles;
      }
      if (displayNameStyles1 == null) {
        let displayNameStyles2;
        if (stateFromStores != null) {
          displayNameStyles2 = stateFromStores.displayNameStyles;
        }
        displayNameStyles1 = displayNameStyles2;
      }
    }
    tmp7 = displayNameStyles1;
  } else {
    tmp7 = null;
  }
  return tmp7;
}
