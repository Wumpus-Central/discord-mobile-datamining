// discord_app/modules/guild_member/GuildMemberActionCreators.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import updateImpersonating from "../impersonate/ImpersonateActionCreators.tsx";
import closure_3 from "../impersonate/ImpersonateStore.tsx";
import { Endpoints } from "../../Constants.tsx";

require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_member/GuildMemberActionCreators.tsx");

export const updateGuildSelfMember = function updateGuildSelfMember(closure_1_0, arg1) {
  let flag = arg2;
  if (arg2 === undefined) {
    flag = false;
  }
  if (fullServerPreview.isFullServerPreview(closure_1_0)) {
    let obj = { memberOptions: null };
    obj[0] = arg1;
    const result = updateImpersonating.updateImpersonatedData(closure_1_0, obj);
  } else {
    obj = dispatcherDefault;
    obj = { type: "GUILD_MEMBER_UPDATE_LOCAL", guildId: null, roles: null, flags: null };
    obj[1] = closure_1_0;
    ({ roles: obj2[2], flags: obj2[3] } = arg1);
    obj.dispatch(obj);
    const HTTP = sendRequest.HTTP;
    obj1 = { url: null, body: null, oldFormErrors: null, rejectWithError: false };
    obj1[0] = Endpoints.SET_GUILD_MEMBER(closure_1_0);
    obj1[1] = arg1;
    obj1[2] = flag || undefined;
    return HTTP.patch(obj1);
  }
};
