// discord_common/js/shared/shared-constants/GuildProfileVisibility.tsx
import size from "../../../../_runtime/metro/00002__.js";

const obj = { VISIBLE: new Set([1, 3]) };
const result = size.fileFinishedImporting("../discord_common/js/shared/shared-constants/GuildProfileVisibility.tsx");

export const GuildProfileVisibility = {
  NOT_SPECIFIED: 0,
  [0]: "NOT_SPECIFIED",
  PUBLIC: 1,
  [1]: "PUBLIC",
  RESTRICTED: 2,
  [2]: "RESTRICTED",
  PUBLIC_WITH_RECRUITMENT: 3,
  [3]: "PUBLIC_WITH_RECRUITMENT",
};
export const GuildProfileVisibilitySets = obj;
