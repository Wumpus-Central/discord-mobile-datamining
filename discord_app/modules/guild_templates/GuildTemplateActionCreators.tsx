// === Module 6827: GuildTemplateActionCreators ===

// Module 6827 (GuildTemplateActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
({ Endpoints: c3, AnalyticEvents: closure_4 } = Constants);
const map = new Map();
let obj = {
  resolveGuildTemplate(code) {
    const f93381 = () => {
      let nextPromise;
      let obj = DispatcherDefault;
      if (obj.isDispatching()) {
        const resolved = Promise.resolve();
        nextPromise = resolved.then(f93381);
      } else {
        nextPromise = map.get(code);
        if (null == nextPromise) {
          let obj3 = { type: "GUILD_TEMPLATE_RESOLVE", code };
          const tmp2Result = DispatcherDefault;
          tmp2Result.dispatch(obj3);
          const HTTP = HTTPUtils.HTTP;
          let obj4 = { url: _false.UNRESOLVED_GUILD_TEMPLATE(code), oldFormErrors: true, rejectWithError: true };
          const get = HTTP.get;
          const value = get(obj4);
          const nextPromise1 = value.then(f93382, f93383);
          const cleanupPromise = nextPromise1.finally(f93384);
          const result = map.set(code, cleanupPromise);
          nextPromise = cleanupPromise;
        }
      }
      return nextPromise;
    };
    const f93382 = (body) => {
      body = body.body;
      const obj = closure_2_1(closure_2_2[3]);
      const obj2 = { resolved: true, guild_template_code: code, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
      obj.track(constants.GUILD_TEMPLATE_RESOLVED, obj2);
      const obj3 = closure_2_1(closure_2_2[1]);
      const obj4 = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code };
      obj3.dispatch(obj4);
      const obj5 = { guildTemplate: closure_2_1(closure_2_2[4])(body), code };
      return obj5;
    };
    const f93383 = () => {
      const obj = closure_2_1(closure_2_2[3]);
      const obj2 = { resolved: false, guild_template_code: code };
      obj.track(constants.GUILD_TEMPLATE_RESOLVED, obj2);
      const obj3 = closure_2_1(closure_2_2[1]);
      const obj4 = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code };
      obj3.dispatch(obj4);
      return { guildTemplate: null, code };
    };
    const f93384 = () => {
      set.delete(closure_0);
    };
    _require = code;
    let obj = DispatcherDefault;
    if (obj.isDispatching()) {
      let resolved = Promise.resolve();
      return resolved.then(f93381);
    } else {
      let value = map.get(code);
      if (null != value) {
        return value;
      } else {
        let obj3 = { type: "GUILD_TEMPLATE_RESOLVE", code };
        const tmpResult = DispatcherDefault;
        const dispatchResult = tmpResult.dispatch(obj3);
        let HTTP = require("HTTPUtils").HTTP;
        let obj4 = { url: closure_3.UNRESOLVED_GUILD_TEMPLATE(code), oldFormErrors: true, rejectWithError: true };
        let get = HTTP.get;
        const value2 = get(obj4);
        let nextPromise = value2.then(f93382, f93383);
        let cleanupPromise = nextPromise.finally(f93384);
        let result = map.set(code, cleanupPromise);
        return cleanupPromise;
      }
    }
  },
  loadTemplatesForGuild(guildId) {
    let obj2;
    const HTTP = HTTPUtils.HTTP;
    let obj = { url: _false.GUILD_TEMPLATES(guildId), oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    const get = HTTP.get;
    obj2 = HTTPUtils;
    const value = get(obj);
    return value.then((body) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS", guildTemplates: body.body };
      obj.dispatch(obj2);
      return body;
    });
  },
  createGuildTemplate(guildId, name, description) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: _false.GUILD_TEMPLATES(guildId), body: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    const post = HTTP.post;
    obj = { name, description };
    obj3 = HTTPUtils;
    const postResult = post(request);
    return postResult.then((body) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "GUILD_TEMPLATE_CREATE_SUCCESS", guildTemplate: body.body, code: body.body.code };
      obj.dispatch(obj2);
    });
  },
  syncGuildTemplate(arg0, code) {
    let obj2;
    _require = code;
    const HTTP = require("HTTPUtils").HTTP;
    let obj = { url: closure_3.GUILD_TEMPLATE(arg0, code), oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    const put = HTTP.put;
    obj2 = require("HTTPUtils");
    const putResult = put(obj);
    return putResult.then((body) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "GUILD_TEMPLATE_SYNC_SUCCESS", guildTemplate: body.body, code };
      obj.dispatch(obj2);
    });
  },
  updateGuildTemplate(arg0, code, name, description) {
    let obj;
    let obj3;
    _require = code;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_3.GUILD_TEMPLATE(arg0, code), body: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj = { name, description };
    obj3 = require("HTTPUtils");
    const patchResult = patch(request);
    return patchResult.then((body) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "GUILD_TEMPLATE_SYNC_SUCCESS", guildTemplate: body.body, code };
      obj.dispatch(obj2);
    });
  },
  deleteGuildTemplate(guildId, code) {
    let obj2;
    _require = guildId;
    const HTTP = require("HTTPUtils").HTTP;
    let obj = { url: closure_3.GUILD_TEMPLATE(guildId, code), oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    const del = HTTP.del;
    obj2 = require("HTTPUtils");
    const delResult = del(obj);
    return delResult.then(() => {
      const obj = DispatcherDefault;
      const obj2 = { type: "GUILD_TEMPLATE_DELETE_SUCCESS", guildId, code };
      obj.dispatch(obj2);
    });
  }
};
let result = size.fileFinishedImporting("modules/guild_templates/GuildTemplateActionCreators.tsx");

export default obj;