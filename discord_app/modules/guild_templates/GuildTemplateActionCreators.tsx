// discord_app/modules/guild_templates/GuildTemplateActionCreators.tsx
import set from "../../../_runtime/00002_set.js";
import sendRequest from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import ME from "../../Constants.tsx";
import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";

({ Endpoints: c3, AnalyticEvents: c4 } = ME);
const map = new Map();
let result = set.fileFinishedImporting("modules/guild_templates/GuildTemplateActionCreators.tsx");

export default {
  resolveGuildTemplate(code) {
    const _require = code;
    let obj = dispatcherDefault;
    if (obj.isDispatching()) {
      const resolved = Promise.resolve();
      return resolved.then(() => {
        let obj = closure_1_1(closure_1_2[1]);
        if (obj.isDispatching()) {
          let resolved = Promise.resolve();
          let nextPromise = resolved.then(() => {
            let obj = closure_1_1(closure_1_2[1]);
            if (obj.isDispatching()) {
              let resolved = Promise.resolve();
              let nextPromise = resolved.then(() => {
                let obj = closure_1_1(closure_1_2[1]);
                if (obj.isDispatching()) {
                  let resolved = Promise.resolve();
                  let nextPromise = resolved.then(() => {
                    let obj = closure_1_1(closure_1_2[1]);
                    if (obj.isDispatching()) {
                      let resolved = Promise.resolve();
                      let nextPromise = resolved.then(() => { ... });
                    } else {
                      nextPromise = closure_1_5.get(tmp);
                      if (null == nextPromise) {
                        obj = { type: "GUILD_TEMPLATE_RESOLVE", code: null };
                        obj[1] = tmp;
                        closure_1_1(tmp3[1]).dispatch(obj);
                        let HTTP = closure_1_0(tmp3[2]).HTTP;
                        obj = { url: null, oldFormErrors: true, rejectWithError: true };
                        obj[0] = closure_1_3.UNRESOLVED_GUILD_TEMPLATE(tmp);
                        let value = HTTP.get(obj);
                        let tmp2Result = closure_1_1(tmp3[1]);
                        let cleanupPromise = value.then(() => { ... }, () => { ... }).finally(() => { ... });
                        let result = obj2.set(tmp, cleanupPromise);
                        nextPromise = cleanupPromise;
                        let nextPromise1 = value.then(() => { ... }, () => { ... });
                      }
                      obj2 = closure_1_5;
                    }
                    return nextPromise;
                  });
                } else {
                  nextPromise = closure_1_5.get(tmp);
                  if (null == nextPromise) {
                    obj = { type: "GUILD_TEMPLATE_RESOLVE", code: null };
                    obj[1] = tmp;
                    closure_1_1(tmp3[1]).dispatch(obj);
                    let HTTP = closure_1_0(tmp3[2]).HTTP;
                    obj = { url: null, oldFormErrors: true, rejectWithError: true };
                    obj[0] = closure_1_3.UNRESOLVED_GUILD_TEMPLATE(tmp);
                    let value = HTTP.get(obj);
                    let tmp2Result = closure_1_1(tmp3[1]);
                    let cleanupPromise = value.then((body) => {
                      body = body.body;
                      let obj = closure_1_1(closure_1_2[3]);
                      obj = { resolved: true, guild_template_code: closure_0, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
                      obj.track(closure_1_4.GUILD_TEMPLATE_RESOLVED, obj);
                      obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code: closure_0 };
                      closure_1_1(closure_1_2[1]).dispatch(obj);
                      const obj3 = closure_1_1(closure_1_2[1]);
                      return { guildTemplate: closure_1_1(closure_1_2[4])(body), code: closure_0 };
                    }, () => {
                      let obj = closure_1_1(closure_1_2[3]);
                      obj = { resolved: false, guild_template_code: closure_0 };
                      obj.track(closure_1_4.GUILD_TEMPLATE_RESOLVED, obj);
                      obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code: closure_0 };
                      closure_1_1(closure_1_2[1]).dispatch(obj);
                      return { guildTemplate: null, code: closure_0 };
                    }).finally(() => {
                      closure_1_5.delete(closure_0);
                    });
                    let result = obj2.set(tmp, cleanupPromise);
                    nextPromise = cleanupPromise;
                    let nextPromise1 = value.then((body) => {
                      body = body.body;
                      let obj = closure_1_1(closure_1_2[3]);
                      obj = { resolved: true, guild_template_code: closure_0, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
                      obj.track(closure_1_4.GUILD_TEMPLATE_RESOLVED, obj);
                      obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code: closure_0 };
                      closure_1_1(closure_1_2[1]).dispatch(obj);
                      const obj3 = closure_1_1(closure_1_2[1]);
                      return { guildTemplate: closure_1_1(closure_1_2[4])(body), code: closure_0 };
                    }, () => {
                      let obj = closure_1_1(closure_1_2[3]);
                      obj = { resolved: false, guild_template_code: closure_0 };
                      obj.track(closure_1_4.GUILD_TEMPLATE_RESOLVED, obj);
                      obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code: closure_0 };
                      closure_1_1(closure_1_2[1]).dispatch(obj);
                      return { guildTemplate: null, code: closure_0 };
                    });
                  }
                  obj2 = closure_1_5;
                }
                return nextPromise;
              });
            } else {
              nextPromise = closure_1_5.get(tmp);
              if (null == nextPromise) {
                obj = { type: "GUILD_TEMPLATE_RESOLVE", code: null };
                obj[1] = tmp;
                closure_1_1(tmp3[1]).dispatch(obj);
                let HTTP = closure_1_0(tmp3[2]).HTTP;
                obj = { url: null, oldFormErrors: true, rejectWithError: true };
                obj[0] = closure_1_3.UNRESOLVED_GUILD_TEMPLATE(tmp);
                let value = HTTP.get(obj);
                let tmp2Result = closure_1_1(tmp3[1]);
                let cleanupPromise = value.then((body) => {
                  body = body.body;
                  let obj = closure_1_1(closure_1_2[3]);
                  obj = { resolved: true, guild_template_code: closure_0, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
                  obj.track(closure_1_4.GUILD_TEMPLATE_RESOLVED, obj);
                  obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code: closure_0 };
                  closure_1_1(closure_1_2[1]).dispatch(obj);
                  const obj3 = closure_1_1(closure_1_2[1]);
                  return { guildTemplate: closure_1_1(closure_1_2[4])(body), code: closure_0 };
                }, () => {
                  let obj = closure_1_1(closure_1_2[3]);
                  obj = { resolved: false, guild_template_code: closure_0 };
                  obj.track(closure_1_4.GUILD_TEMPLATE_RESOLVED, obj);
                  obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code: closure_0 };
                  closure_1_1(closure_1_2[1]).dispatch(obj);
                  return { guildTemplate: null, code: closure_0 };
                }).finally(() => {
                  closure_1_5.delete(closure_0);
                });
                let result = obj2.set(tmp, cleanupPromise);
                nextPromise = cleanupPromise;
                let nextPromise1 = value.then((body) => {
                  body = body.body;
                  let obj = closure_1_1(closure_1_2[3]);
                  obj = { resolved: true, guild_template_code: closure_0, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
                  obj.track(closure_1_4.GUILD_TEMPLATE_RESOLVED, obj);
                  obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code: closure_0 };
                  closure_1_1(closure_1_2[1]).dispatch(obj);
                  const obj3 = closure_1_1(closure_1_2[1]);
                  return { guildTemplate: closure_1_1(closure_1_2[4])(body), code: closure_0 };
                }, () => {
                  let obj = closure_1_1(closure_1_2[3]);
                  obj = { resolved: false, guild_template_code: closure_0 };
                  obj.track(closure_1_4.GUILD_TEMPLATE_RESOLVED, obj);
                  obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code: closure_0 };
                  closure_1_1(closure_1_2[1]).dispatch(obj);
                  return { guildTemplate: null, code: closure_0 };
                });
              }
              obj2 = closure_1_5;
            }
            return nextPromise;
          });
        } else {
          nextPromise = closure_1_5.get(tmp);
          if (null == nextPromise) {
            obj = { type: "GUILD_TEMPLATE_RESOLVE", code: null };
            obj[1] = tmp;
            closure_1_1(tmp3[1]).dispatch(obj);
            let HTTP = closure_1_0(tmp3[2]).HTTP;
            obj = { url: null, oldFormErrors: true, rejectWithError: true };
            obj[0] = closure_1_3.UNRESOLVED_GUILD_TEMPLATE(tmp);
            let value = HTTP.get(obj);
            let tmp2Result = closure_1_1(tmp3[1]);
            let cleanupPromise = value.then((body) => {
              body = body.body;
              let obj = closure_1_1(closure_1_2[3]);
              obj = { resolved: true, guild_template_code: closure_0, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
              obj.track(closure_1_4.GUILD_TEMPLATE_RESOLVED, obj);
              obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code: closure_0 };
              closure_1_1(closure_1_2[1]).dispatch(obj);
              const obj3 = closure_1_1(closure_1_2[1]);
              return { guildTemplate: closure_1_1(closure_1_2[4])(body), code: closure_0 };
            }, () => {
              let obj = closure_1_1(closure_1_2[3]);
              obj = { resolved: false, guild_template_code: closure_0 };
              obj.track(closure_1_4.GUILD_TEMPLATE_RESOLVED, obj);
              obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code: closure_0 };
              closure_1_1(closure_1_2[1]).dispatch(obj);
              return { guildTemplate: null, code: closure_0 };
            }).finally(() => {
              closure_1_5.delete(closure_0);
            });
            let result = obj2.set(tmp, cleanupPromise);
            nextPromise = cleanupPromise;
            let nextPromise1 = value.then((body) => {
              body = body.body;
              let obj = closure_1_1(closure_1_2[3]);
              obj = { resolved: true, guild_template_code: closure_0, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
              obj.track(closure_1_4.GUILD_TEMPLATE_RESOLVED, obj);
              obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code: closure_0 };
              closure_1_1(closure_1_2[1]).dispatch(obj);
              const obj3 = closure_1_1(closure_1_2[1]);
              return { guildTemplate: closure_1_1(closure_1_2[4])(body), code: closure_0 };
            }, () => {
              let obj = closure_1_1(closure_1_2[3]);
              obj = { resolved: false, guild_template_code: closure_0 };
              obj.track(closure_1_4.GUILD_TEMPLATE_RESOLVED, obj);
              obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code: closure_0 };
              closure_1_1(closure_1_2[1]).dispatch(obj);
              return { guildTemplate: null, code: closure_0 };
            });
          }
          obj2 = closure_1_5;
        }
        return nextPromise;
      });
    } else {
      let value = map.get(code);
      if (null != value) {
        return value;
      } else {
        obj = { type: "GUILD_TEMPLATE_RESOLVE", code: null };
        obj[1] = code;
        dispatcherDefault.dispatch(obj);
        const HTTP = require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
        obj = { url: null, oldFormErrors: true, rejectWithError: true };
        obj[0] = closure_3.UNRESOLVED_GUILD_TEMPLATE(code);
        value = HTTP.get(obj);
        const tmpResult = dispatcherDefault;
        const cleanupPromise = value.then((body) => {
          body = body.body;
          let obj = closure_1_1(closure_1_2[3]);
          obj = { resolved: true, guild_template_code: closure_0, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
          obj.track(closure_1_4.GUILD_TEMPLATE_RESOLVED, obj);
          obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code: closure_0 };
          closure_1_1(closure_1_2[1]).dispatch(obj);
          const obj3 = closure_1_1(closure_1_2[1]);
          return { guildTemplate: closure_1_1(closure_1_2[4])(body), code: closure_0 };
        }, () => {
          let obj = closure_1_1(closure_1_2[3]);
          obj = { resolved: false, guild_template_code: closure_0 };
          obj.track(closure_1_4.GUILD_TEMPLATE_RESOLVED, obj);
          obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code: closure_0 };
          closure_1_1(closure_1_2[1]).dispatch(obj);
          return { guildTemplate: null, code: closure_0 };
        }).finally(() => {
          closure_1_5.delete(closure_0);
        });
        const result = obj2.set(code, cleanupPromise);
        return cleanupPromise;
      }
      obj2 = map;
    }
    const tmp = importDefault;
  },
  loadTemplatesForGuild(arg0) {
    const HTTP = sendRequest.HTTP;
    let obj = { url: closure_3.GUILD_TEMPLATES(arg0), oldFormErrors: true, rejectWithError: sendRequest.rejectWithMigratedError() };
    const value = HTTP.get(obj);
    return value.then((body) => {
      let obj = callback(table[1]);
      obj = { type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS", guildTemplates: body.body };
      obj.dispatch(obj);
      return body;
    });
  },
  createGuildTemplate(arg0, name, description) {
    const HTTP = sendRequest.HTTP;
    obj = { url: closure_3.GUILD_TEMPLATES(arg0), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { name, description };
    obj[3] = sendRequest.rejectWithMigratedError();
    const obj3 = sendRequest;
    return HTTP.post(obj).then((body) => {
      let obj = callback(table[1]);
      obj = { type: "GUILD_TEMPLATE_CREATE_SUCCESS", guildTemplate: body.body, code: body.body.code };
      obj.dispatch(obj);
    });
  },
  syncGuildTemplate(arg0, arg1) {
    const _require = arg1;
    const HTTP = require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    let obj = { url: closure_3.GUILD_TEMPLATE(arg0, arg1), oldFormErrors: true, rejectWithError: require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError() };
    const obj2 = sendRequest;
    return HTTP.put(obj).then((body) => {
      let obj = closure_1_1(closure_1_2[1]);
      obj = { type: "GUILD_TEMPLATE_SYNC_SUCCESS", guildTemplate: body.body, code: closure_0 };
      obj.dispatch(obj);
    });
  },
  updateGuildTemplate(arg0, arg1, name, description) {
    const _require = arg1;
    const HTTP = require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    obj = { url: closure_3.GUILD_TEMPLATE(arg0, arg1), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { name, description };
    obj[3] = require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError();
    const obj3 = sendRequest;
    return HTTP.patch(obj).then((body) => {
      let obj = closure_1_1(closure_1_2[1]);
      obj = { type: "GUILD_TEMPLATE_SYNC_SUCCESS", guildTemplate: body.body, code: closure_0 };
      obj.dispatch(obj);
    });
  },
  deleteGuildTemplate(arg0, arg1) {
    const _require = arg0;
    closure_1 = arg1;
    const HTTP = require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").HTTP;
    let obj = { url: closure_3.GUILD_TEMPLATE(arg0, arg1), oldFormErrors: true, rejectWithError: require("../../../discord_common/js/packages/http-utils/HTTPUtils.tsx").rejectWithMigratedError() };
    const obj2 = sendRequest;
    return HTTP.del(obj).then(() => {
      let obj = callback(closure_1_2[1]);
      obj = { type: "GUILD_TEMPLATE_DELETE_SUCCESS", guildId: closure_0, code: callback };
      obj.dispatch(obj);
    });
  }
};