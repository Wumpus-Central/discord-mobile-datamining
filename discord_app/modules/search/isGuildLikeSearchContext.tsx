// discord_app/modules/search/isGuildLikeSearchContext.tsx
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const SearchTypes = Constants.SearchTypes;
const result = size.fileFinishedImporting("modules/search/isGuildLikeSearchContext.tsx");

export const isGuildLikeSearchContext = function isGuildLikeSearchContext(searchContext) {
  return (
    searchContext.type === SearchTypes.GUILD ||
    searchContext.type === SearchTypes.GUILD_CHANNEL ||
    searchContext.type === SearchTypes.THREAD
  );
};
