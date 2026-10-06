// === Module 12459: useIsHubRealNamePromptShowing ===

// Module 12459 (useIsHubRealNamePromptShowing)
import Constants from "Constants" /* 1085 */;
import Constants2 from "Constants" /* 12461 */;
import GuildPromptsActionCreatorsDefault from "GuildPromptsActionCreators" /* 12462 */;
import react from "react" /* 19 */;
import GuildPromptsStore from "GuildPromptsStore" /* 12460 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import GuildStore from "GuildStore" /* 2074 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const GuildFeatures = Constants.GuildFeatures;
const GuildPrompts = Constants2.GuildPrompts;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp9;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(7);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore, GuildPromptsStore, UserStore, GuildMemberStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function _() {
      const guild = GuildStore.getGuild(closure_0);
      let hasItem;
      if (guild != null) {
        const features = guild.features;
        hasItem = features.has(GuildFeatures.HUB);
      }
      if (true !== hasItem) {
        return null;
      } else if (true === GuildPromptsStore.hasViewedPrompt(GuildPrompts.REAL_NAME_PROMPT, guild.id)) {
        return null;
      } else {
        const currentUser = UserStore.getCurrentUser();
        if (null == currentUser) {
          return null;
        } else {
          let id1;
          const getMember = GuildMemberStore.getMember;
          const id = guild.id;
          if (currentUser != null) {
            id1 = currentUser.id;
          }
          const member = getMember(id, id1);
          let nick;
          if (member != null) {
            nick = member.nick;
          }
          return null == nick;
        }
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9);
  if (cResult[3] === arg0) {
    let tmp11;
    let tmp12;
    if (cResult[4] === stateFromStores) {
      tmp11 = cResult[5];
      tmp12 = cResult[6];
    }
    const effect = react.useEffect(tmp11, tmp12);
    return true === stateFromStores;
  }
  class E {
    constructor() {
      const tmp2 = null != closure_0 && null != stateFromStores;
      if (tmp2) {
        if (!stateFromStores) {
          const obj = GuildPromptsActionCreatorsDefault;
          obj.viewPrompt(GuildPrompts.REAL_NAME_PROMPT, closure_0);
        }
      }
    }
  }
  const items1 = [stateFromStores, arg0];
  cResult[3] = arg0;
  cResult[4] = stateFromStores;
  cResult[5] = E;
  cResult[6] = items1;
  tmp12 = items1;
  tmp11 = E;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [GuildStore, GuildPromptsStore, UserStore, GuildMemberStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const guild = GuildStore.getGuild(closure_0);
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.HUB);
    }
    if (true !== hasItem) {
      return null;
    } else if (true === GuildPromptsStore.hasViewedPrompt(GuildPrompts.REAL_NAME_PROMPT, guild.id)) {
      return null;
    } else {
      const currentUser = UserStore.getCurrentUser();
      if (null == currentUser) {
        return null;
      } else {
        let id1;
        const getMember = GuildMemberStore.getMember;
        const id = guild.id;
        if (currentUser != null) {
          id1 = currentUser.id;
        }
        const member = getMember(id, id1);
        let nick;
        if (member != null) {
          nick = member.nick;
        }
        return null == nick;
      }
    }
  });
  const items1 = [stateFromStores, arg0];
  const effect = react.useEffect(() => {
    const tmp2 = null != closure_0 && null != stateFromStores;
    if (tmp2) {
      if (!stateFromStores) {
        const obj = GuildPromptsActionCreatorsDefault;
        obj.viewPrompt(GuildPrompts.REAL_NAME_PROMPT, closure_0);
      }
    }
  }, items1);
  return true === stateFromStores;
});
const result = size.fileFinishedImporting("modules/hub/useIsHubRealNamePromptShowing.tsx");

export default tmp2;