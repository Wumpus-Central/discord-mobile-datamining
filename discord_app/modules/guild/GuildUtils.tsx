// discord_app/modules/guild/GuildUtils.tsx
import GuildActionCreatorsDefault from "../../actions/GuildActionCreators.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let result = size.fileFinishedImporting("modules/guild/GuildUtils.tsx");

export function handleJoinGuild(id) {
  _require = id;
  if (null != id) {
    const joinGuildResult = GuildActionCreatorsDefault.joinGuild(id);
    GuildActionCreatorsDefault.joinGuild(id)
      .then(() => {
        const result = GuildActionCreatorsDefault.transitionToGuildSync(closure_0);
      })
      .catch(require("JoinGuildRefusedError").ignoreJoinGuildRefused);
    const nextPromise = GuildActionCreatorsDefault.joinGuild(id).then(() => {
      const result = GuildActionCreatorsDefault.transitionToGuildSync(closure_0);
    });
  }
}
