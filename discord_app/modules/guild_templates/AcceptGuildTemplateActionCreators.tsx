// discord_app/modules/guild_templates/AcceptGuildTemplateActionCreators.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import _handleConnectionOpen from "../gateway/GatewayConnectionStore.tsx";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import { Endpoints } from "../../Constants.tsx";

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/guild_templates/AcceptGuildTemplateActionCreators.tsx");

export default {
  acceptGuildTemplate(code, arg1, first1) {
    closure_0 = code;
    importDefault = arg1;
    dependencyMap = first1;
    let obj = { type: "GUILD_TEMPLATE_ACCEPT", code };
    obj.dispatch(obj);
    return new Promise((closure_0) => {
      code = closure_0;
      closure_1 = arg1;
      const HTTP = code(530).HTTP;
      { url: Endpoints.UNRESOLVED_GUILD_TEMPLATE(code), body: obj, oldFormErrors: true, rejectWithError: null };
      obj = { name: closure_1, icon: dependencyMap };
      obj[3] = code(530).rejectWithMigratedError();
      let obj3 = code(530);
      HTTP.post(obj).then((result) => {
        const body = result.body;
        callback2(709);
        const obj = { type: "GUILD_TEMPLATE_ACCEPT_SUCCESS", code: callback, guild: body };
        obj.dispatch(obj);
        if (closure_2_3.isConnected()) {
          result = closure_2_4.addConditionalChangeListener(() => {
            if (null != closure_3_4.getGuild(body.id)) {
              body(table[5]).transitionToGuild(body.id);
              body(body);
              return false;
            }
          });
        } else {
          callback(7302).transitionToGuild(body.id);
          body(body);
          const obj3 = callback(7302);
        }
      }, (body) => {
        callback2(709);
        const obj = { type: "GUILD_TEMPLATE_ACCEPT_FAILURE", code: closure_0 };
        obj.dispatch(obj);
        callback2(body.body);
      });
    });
  }
};