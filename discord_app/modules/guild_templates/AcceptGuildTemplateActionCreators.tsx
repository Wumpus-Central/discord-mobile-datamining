// discord_app/modules/guild_templates/AcceptGuildTemplateActionCreators.tsx
import _handleConnectionOpen from "_handleConnectionOpen";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { Endpoints } from "ME";
import { dispatcher } from "../../Dispatcher.tsx";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/guild_templates/AcceptGuildTemplateActionCreators.tsx");

export default {
  acceptGuildTemplate(code, first, first1) {
    let closure_0 = code;
    const importDefault = first;
    const dependencyMap = first1;
    let obj = dispatcher;
    obj = { type: "GUILD_TEMPLATE_ACCEPT", code };
    obj.dispatch(obj);
    return new Promise((closure_0) => {
      const code = closure_0;
      let closure_1 = arg1;
      const HTTP = code(530).HTTP;
      obj = { url: outer1_5.UNRESOLVED_GUILD_TEMPLATE(code), body: obj, oldFormErrors: true, rejectWithError: null };
      obj = { name: closure_1, icon: dependencyMap };
      obj[3] = code(530).rejectWithMigratedError();
      let obj3 = code(530);
      HTTP.post(obj).then((body) => {
        body = body.body;
        let obj = callback2(709);
        obj = { type: "GUILD_TEMPLATE_ACCEPT_SUCCESS", code: callback, guild: body };
        obj.dispatch(obj);
        if (outer2_3.isConnected()) {
          const result = outer2_4.addConditionalChangeListener(() => {
            if (null != outer3_4.getGuild(body.id)) {
              body(table[5]).transitionToGuild(tmp.id);
              body(tmp);
              return false;
            }
          });
        } else {
          callback(6021).transitionToGuild(body.id);
          body(body);
          const obj3 = callback(6021);
        }
      }, (body) => {
        let obj = callback2(709);
        obj = { type: "GUILD_TEMPLATE_ACCEPT_FAILURE", code: closure_0 };
        obj.dispatch(obj);
        callback2(body.body);
      });
    });
  }
};