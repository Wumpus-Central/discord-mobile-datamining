// discord_app/modules/guild_templates/AcceptGuildTemplateActionCreators.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_3 from "../gateway/GatewayConnectionStore.tsx";
import closure_4 from "../../stores/GuildStore.tsx";
import { Endpoints } from "../../Constants.tsx";

const require = arg1;
let result = require("set").fileFinishedImporting("modules/guild_templates/AcceptGuildTemplateActionCreators.tsx");

export default {
  acceptGuildTemplate(code, first, first1) {
    closure_0 = code;
    importDefault = first;
    dependencyMap = first1;
    let obj = dispatcherDefault;
    obj = { type: "GUILD_TEMPLATE_ACCEPT", code };
    obj.dispatch(obj);
    return new Promise((closure_0) => {
      code = closure_0;
      closure_1 = arg1;
      const HTTP = code(530).HTTP;
      obj = { url: closure_1_5.UNRESOLVED_GUILD_TEMPLATE(code), body: obj, oldFormErrors: true, rejectWithError: null };
      obj = { name: closure_1, icon: dependencyMap };
      obj[3] = code(530).rejectWithMigratedError();
      let obj3 = code(530);
      HTTP.post(obj).then(
        (body) => {
          body = body.body;
          let obj = callback2(709);
          obj = { type: "GUILD_TEMPLATE_ACCEPT_SUCCESS", code: callback, guild: body };
          obj.dispatch(obj);
          if (closure_2_3.isConnected()) {
            const result = closure_2_4.addConditionalChangeListener(() => {
              if (null != closure_3_4.getGuild(body.id)) {
                body(table[5]).transitionToGuild(tmp.id);
                body(tmp);
                return false;
              }
            });
          } else {
            callback(6186).transitionToGuild(body.id);
            body(body);
            const obj3 = callback(6186);
          }
        },
        (body) => {
          let obj = callback2(709);
          obj = { type: "GUILD_TEMPLATE_ACCEPT_FAILURE", code: closure_0 };
          obj.dispatch(obj);
          callback2(body.body);
        },
      );
    });
  },
};
