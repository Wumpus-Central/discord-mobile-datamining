// discord_app/modules/guild_templates/AcceptGuildTemplateActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import transitionToGuild from "../routing/transitionToGuild.native.tsx";
import GatewayConnectionStore from "../gateway/GatewayConnectionStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";

require = fn;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_templates/AcceptGuildTemplateActionCreators.tsx");

export default {
  acceptGuildTemplate(code, name, first1) {
    importDefault = name;
    dependencyMap = first1;
    let obj = { type: "GUILD_TEMPLATE_ACCEPT", code };
    obj.dispatch(obj);
    return new Promise((code, arg1) => {
      name = arg1;
      const HTTP = code(icon[4]).HTTP;
      const request = {
        url: Endpoints.UNRESOLVED_GUILD_TEMPLATE(code),
        body: { name, icon },
        oldFormErrors: true,
        rejectWithError: code(icon[4]).rejectWithMigratedError(),
      };
      let obj = { name, icon };
      let obj3 = code(icon[4]);
      HTTP.post(request).then(
        (body) => {
          body = body.body;
          closure_1(dependencyMap[3]);
          const obj = { type: "GUILD_TEMPLATE_ACCEPT_SUCCESS", code, guild: body };
          obj.dispatch(obj);
          if (connected.isConnected()) {
            const result = GuildStore.addConditionalChangeListener(() => {
              if (null != GuildStore.getGuild(body.id)) {
                transitionToGuild.transitionToGuild(tmp.id);
                body(tmp);
                return false;
              }
            });
          } else {
            code(dependencyMap[5]).transitionToGuild(body.id);
            body(body);
            const obj3 = code(dependencyMap[5]);
          }
        },
        (body) => {
          const obj = { type: "GUILD_TEMPLATE_ACCEPT_FAILURE", code };
          obj.dispatch(obj);
          closure_1(body.body);
        },
      );
    });
  },
};
