// discord_app/modules/hub/useIsHubRealNamePromptShowing.tsx
import GuildPromptsActionCreatorsDefault from "../guild/GuildPromptsActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import GuildPromptsStore from "../guild/GuildPromptsStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

const require = fn;
const GuildFeatures = fn(1085).GuildFeatures;
const GuildPrompts = fn(12446).GuildPrompts;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/hub/useIsHubRealNamePromptShowing.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildStore, GuildPromptsStore, UserStore, GuildMemberStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function _() {
          guild = GuildStore.getGuild(closure_0);
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
              let id;
              if (currentUser != null) {
                id = currentUser.id;
              }
              const member = GuildMemberStore.getMember(guild.id, id);
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
        let tmp9 = fn;
      } else {
        tmp9 = cResult[2];
      }
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp9);
      if (cResult[3] === arg0) {
        if (cResult[4] === stateFromStores) {
          let tmp11 = cResult[5];
          let tmp12 = cResult[6];
        }
        const effect = noop.useEffect(tmp11, tmp12);
        return true === stateFromStores;
      }
      class E {
        constructor() {
          tmp2 = null != closure_0;
          tmp = closure_0;
          if (tmp2) {
            tmp3 = closure_1;
            tmp2 = null != closure_1;
          }
          if (tmp2) {
            tmp4 = closure_1;
            if (!closure_1) {
              tmp5 = closure_1;
              tmp6 = closure_2;
              obj = closure_1(closure_2[10]);
              tmp7 = GuildPrompts;
              viewPromptResult = obj.viewPrompt(GuildPrompts.REAL_NAME_PROMPT, tmp);
            }
          }
          return;
        }
      }
      const items1 = [stateFromStores, arg0];
      cResult[3] = arg0;
      cResult[4] = stateFromStores;
      cResult[5] = E;
      cResult[6] = items1;
      tmp12 = items1;
      tmp11 = E;
      const tmpResult = require("initialize");
    }
  : (arg0) => {
      _require = arg0;
      const items = [GuildStore, GuildPromptsStore, UserStore, GuildMemberStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => {
        guild = GuildStore.getGuild(closure_0);
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
            let id;
            if (currentUser != null) {
              id = currentUser.id;
            }
            const member = GuildMemberStore.getMember(guild.id, id);
            let nick;
            if (member != null) {
              nick = member.nick;
            }
            return null == nick;
          }
        }
      });
      const items1 = [stateFromStores, arg0];
      const effect = noop.useEffect(() => {
        let tmp2 = null != closure_0;
        if (tmp2) {
          tmp2 = null != stateFromStores;
        }
        if (tmp2) {
          if (!stateFromStores) {
            GuildPromptsActionCreatorsDefault.viewPrompt(GuildPrompts.REAL_NAME_PROMPT, closure_0);
          }
        }
      }, items1);
      return true === stateFromStores;
    };
