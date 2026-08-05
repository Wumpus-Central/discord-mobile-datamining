// discord_app/modules/guild_member/GuildMemberActionCreators.tsx
import initialize from "initialize";
import { Endpoints } from "ME";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../../Dispatcher.tsx";
import { updateImpersonating } from "../impersonate/ImpersonateActionCreators.tsx";

const require = arg1;
let result = require("updateImpersonating").fileFinishedImporting("modules/guild_member/GuildMemberActionCreators.tsx");

export const updateGuildSelfMember = function updateGuildSelfMember(outer1_0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (fullServerPreview.isFullServerPreview(outer1_0)) {
    let obj = { memberOptions: null };
    obj[0] = arg1;
    const result = updateImpersonating.updateImpersonatedData(outer1_0, obj);
  } else {
    obj = dispatcher;
    obj = { type: "GUILD_MEMBER_UPDATE_LOCAL", guildId: null, roles: null, flags: null };
    obj[1] = outer1_0;
    ({ roles: obj2[2], flags: obj2[3] } = arg1);
    obj.dispatch(obj);
    const HTTP = sendRequest.HTTP;
    const obj1 = { url: null, body: null, oldFormErrors: null, rejectWithError: false };
    obj1[0] = Endpoints.SET_GUILD_MEMBER(outer1_0);
    obj1[1] = arg1;
    obj1[2] = flag || undefined;
    return HTTP.patch(obj1);
  }
};