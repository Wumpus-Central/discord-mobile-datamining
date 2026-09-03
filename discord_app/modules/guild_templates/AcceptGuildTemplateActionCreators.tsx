// === Module 11606: ? ===

// Module 11606
import dispatcherDefault from "dispatcher" /* 706 */;
import closure_3 from "_handleConnectionOpen" /* 5230 */;
import closure_4 from "createGuildRecordFromRust" /* 1908 */;
import { Endpoints } from "ME" /* 673 */;

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
      const HTTP = code(527).HTTP;
      obj = { url: closure_1_5.UNRESOLVED_GUILD_TEMPLATE(code), body: obj, oldFormErrors: true, rejectWithError: null };
      obj = { name: closure_1, icon: dependencyMap };
      obj[3] = code(527).rejectWithMigratedError();
      let obj3 = code(527);
      HTTP.post(obj).then((body) => {
        body = body.body;
        let obj = callback2(706);
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
          callback(6196).transitionToGuild(body.id);
          body(body);
          const obj3 = callback(6196);
        }
      }, (body) => {
        let obj = callback2(706);
        obj = { type: "GUILD_TEMPLATE_ACCEPT_FAILURE", code: closure_0 };
        obj.dispatch(obj);
        callback2(body.body);
      });
    });
  }
};