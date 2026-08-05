import { sendRequest } from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import { dispatcher } from "../../Dispatcher.tsx";
// discord_app/modules/guild_templates/GuildTemplateActionCreators.tsx
import ME from "ME";

let c3;
let c4;
({ Endpoints: c3, AnalyticEvents: c4 } = ME);
const map = new Map();
let result = require("sendRequest").fileFinishedImporting("modules/guild_templates/GuildTemplateActionCreators.tsx");

export default {
  resolveGuildTemplate(code) {
    const _require = code;
    let obj = dispatcher;
    if (obj.isDispatching()) {
      const resolved = Promise.resolve();
      return resolved.then(() => {
        let obj = outer1_1(outer1_2[1]);
        if (obj.isDispatching()) {
          let resolved = Promise.resolve();
          let nextPromise = resolved.then(() => {
            let obj = outer1_1(outer1_2[1]);
            if (obj.isDispatching()) {
              let resolved = Promise.resolve();
              let nextPromise = resolved.then(() => {
                let obj = outer1_1(outer1_2[1]);
                if (obj.isDispatching()) {
                  let resolved = Promise.resolve();
                  let nextPromise = resolved.then(() => {
                    let obj = outer1_1(outer1_2[1]);
                    if (obj.isDispatching()) {
                      let resolved = Promise.resolve();
                      let nextPromise = resolved.then(() => { ... });
                    } else {
                      nextPromise = outer1_5.get(tmp);
                      if (null == nextPromise) {
                        obj = { type: "GUILD_TEMPLATE_RESOLVE", code: null };
                        obj[1] = tmp;
                        outer1_1(tmp3[1]).dispatch(obj);
                        let HTTP = outer1_0(tmp3[2]).HTTP;
                        obj = { url: null, oldFormErrors: true, rejectWithError: true };
                        obj[0] = outer1_3.UNRESOLVED_GUILD_TEMPLATE(tmp);
                        let value = HTTP.get(obj);
                        let tmp2Result = outer1_1(tmp3[1]);
                        let cleanupPromise = value.then(() => { ... }, () => { ... }).finally(() => { ... });
                        let result = obj2.set(tmp, cleanupPromise);
                        nextPromise = cleanupPromise;
                        let nextPromise1 = value.then(() => { ... }, () => { ... });
                      }
                      obj2 = outer1_5;
                    }
                    return nextPromise;
                  });
                } else {
                  nextPromise = outer1_5.get(tmp);
                  if (null == nextPromise) {
                    obj = { type: "GUILD_TEMPLATE_RESOLVE", code: null };
                    obj[1] = tmp;
                    outer1_1(tmp3[1]).dispatch(obj);
                    let HTTP = outer1_0(tmp3[2]).HTTP;
                    obj = { url: null, oldFormErrors: true, rejectWithError: true };
                    obj[0] = outer1_3.UNRESOLVED_GUILD_TEMPLATE(tmp);
                    let value = HTTP.get(obj);
                    let tmp2Result = outer1_1(tmp3[1]);
                    let cleanupPromise = value.then((body) => {
                      body = body.body;
                      let obj = outer1_1(outer1_2[3]);
                      obj = { resolved: true, guild_template_code: closure_0, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
                      obj.track(outer1_4.GUILD_TEMPLATE_RESOLVED, obj);
                      obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code: closure_0 };
                      outer1_1(outer1_2[1]).dispatch(obj);
                      const obj3 = outer1_1(outer1_2[1]);
                      return { guildTemplate: outer1_1(outer1_2[4])(body), code: closure_0 };
                    }, () => {
                      let obj = outer1_1(outer1_2[3]);
                      obj = { resolved: false, guild_template_code: closure_0 };
                      obj.track(outer1_4.GUILD_TEMPLATE_RESOLVED, obj);
                      obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code: closure_0 };
                      outer1_1(outer1_2[1]).dispatch(obj);
                      return { guildTemplate: null, code: closure_0 };
                    }).finally(() => {
                      outer1_5.delete(closure_0);
                    });
                    let result = obj2.set(tmp, cleanupPromise);
                    nextPromise = cleanupPromise;
                    let nextPromise1 = value.then((body) => {
                      body = body.body;
                      let obj = outer1_1(outer1_2[3]);
                      obj = { resolved: true, guild_template_code: closure_0, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
                      obj.track(outer1_4.GUILD_TEMPLATE_RESOLVED, obj);
                      obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code: closure_0 };
                      outer1_1(outer1_2[1]).dispatch(obj);
                      const obj3 = outer1_1(outer1_2[1]);
                      return { guildTemplate: outer1_1(outer1_2[4])(body), code: closure_0 };
                    }, () => {
                      let obj = outer1_1(outer1_2[3]);
                      obj = { resolved: false, guild_template_code: closure_0 };
                      obj.track(outer1_4.GUILD_TEMPLATE_RESOLVED, obj);
                      obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code: closure_0 };
                      outer1_1(outer1_2[1]).dispatch(obj);
                      return { guildTemplate: null, code: closure_0 };
                    });
                  }
                  obj2 = outer1_5;
                }
                return nextPromise;
              });
            } else {
              nextPromise = outer1_5.get(tmp);
              if (null == nextPromise) {
                obj = { type: "GUILD_TEMPLATE_RESOLVE", code: null };
                obj[1] = tmp;
                outer1_1(tmp3[1]).dispatch(obj);
                let HTTP = outer1_0(tmp3[2]).HTTP;
                obj = { url: null, oldFormErrors: true, rejectWithError: true };
                obj[0] = outer1_3.UNRESOLVED_GUILD_TEMPLATE(tmp);
                let value = HTTP.get(obj);
                let tmp2Result = outer1_1(tmp3[1]);
                let cleanupPromise = value.then((body) => {
                  body = body.body;
                  let obj = outer1_1(outer1_2[3]);
                  obj = { resolved: true, guild_template_code: closure_0, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
                  obj.track(outer1_4.GUILD_TEMPLATE_RESOLVED, obj);
                  obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code: closure_0 };
                  outer1_1(outer1_2[1]).dispatch(obj);
                  const obj3 = outer1_1(outer1_2[1]);
                  return { guildTemplate: outer1_1(outer1_2[4])(body), code: closure_0 };
                }, () => {
                  let obj = outer1_1(outer1_2[3]);
                  obj = { resolved: false, guild_template_code: closure_0 };
                  obj.track(outer1_4.GUILD_TEMPLATE_RESOLVED, obj);
                  obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code: closure_0 };
                  outer1_1(outer1_2[1]).dispatch(obj);
                  return { guildTemplate: null, code: closure_0 };
                }).finally(() => {
                  outer1_5.delete(closure_0);
                });
                let result = obj2.set(tmp, cleanupPromise);
                nextPromise = cleanupPromise;
                let nextPromise1 = value.then((body) => {
                  body = body.body;
                  let obj = outer1_1(outer1_2[3]);
                  obj = { resolved: true, guild_template_code: closure_0, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
                  obj.track(outer1_4.GUILD_TEMPLATE_RESOLVED, obj);
                  obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code: closure_0 };
                  outer1_1(outer1_2[1]).dispatch(obj);
                  const obj3 = outer1_1(outer1_2[1]);
                  return { guildTemplate: outer1_1(outer1_2[4])(body), code: closure_0 };
                }, () => {
                  let obj = outer1_1(outer1_2[3]);
                  obj = { resolved: false, guild_template_code: closure_0 };
                  obj.track(outer1_4.GUILD_TEMPLATE_RESOLVED, obj);
                  obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code: closure_0 };
                  outer1_1(outer1_2[1]).dispatch(obj);
                  return { guildTemplate: null, code: closure_0 };
                });
              }
              obj2 = outer1_5;
            }
            return nextPromise;
          });
        } else {
          nextPromise = outer1_5.get(tmp);
          if (null == nextPromise) {
            obj = { type: "GUILD_TEMPLATE_RESOLVE", code: null };
            obj[1] = tmp;
            outer1_1(tmp3[1]).dispatch(obj);
            let HTTP = outer1_0(tmp3[2]).HTTP;
            obj = { url: null, oldFormErrors: true, rejectWithError: true };
            obj[0] = outer1_3.UNRESOLVED_GUILD_TEMPLATE(tmp);
            let value = HTTP.get(obj);
            let tmp2Result = outer1_1(tmp3[1]);
            let cleanupPromise = value.then((body) => {
              body = body.body;
              let obj = outer1_1(outer1_2[3]);
              obj = { resolved: true, guild_template_code: closure_0, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
              obj.track(outer1_4.GUILD_TEMPLATE_RESOLVED, obj);
              obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code: closure_0 };
              outer1_1(outer1_2[1]).dispatch(obj);
              const obj3 = outer1_1(outer1_2[1]);
              return { guildTemplate: outer1_1(outer1_2[4])(body), code: closure_0 };
            }, () => {
              let obj = outer1_1(outer1_2[3]);
              obj = { resolved: false, guild_template_code: closure_0 };
              obj.track(outer1_4.GUILD_TEMPLATE_RESOLVED, obj);
              obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code: closure_0 };
              outer1_1(outer1_2[1]).dispatch(obj);
              return { guildTemplate: null, code: closure_0 };
            }).finally(() => {
              outer1_5.delete(closure_0);
            });
            let result = obj2.set(tmp, cleanupPromise);
            nextPromise = cleanupPromise;
            let nextPromise1 = value.then((body) => {
              body = body.body;
              let obj = outer1_1(outer1_2[3]);
              obj = { resolved: true, guild_template_code: closure_0, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
              obj.track(outer1_4.GUILD_TEMPLATE_RESOLVED, obj);
              obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code: closure_0 };
              outer1_1(outer1_2[1]).dispatch(obj);
              const obj3 = outer1_1(outer1_2[1]);
              return { guildTemplate: outer1_1(outer1_2[4])(body), code: closure_0 };
            }, () => {
              let obj = outer1_1(outer1_2[3]);
              obj = { resolved: false, guild_template_code: closure_0 };
              obj.track(outer1_4.GUILD_TEMPLATE_RESOLVED, obj);
              obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code: closure_0 };
              outer1_1(outer1_2[1]).dispatch(obj);
              return { guildTemplate: null, code: closure_0 };
            });
          }
          obj2 = outer1_5;
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
        tmp(709).dispatch(obj);
        const HTTP = _sendRequest.HTTP;
        obj = { url: null, oldFormErrors: true, rejectWithError: true };
        obj[0] = closure_3.UNRESOLVED_GUILD_TEMPLATE(code);
        value = HTTP.get(obj);
        const tmpResult = tmp(709);
        const cleanupPromise = value.then((body) => {
          body = body.body;
          let obj = outer1_1(outer1_2[3]);
          obj = { resolved: true, guild_template_code: closure_0, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
          obj.track(outer1_4.GUILD_TEMPLATE_RESOLVED, obj);
          obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code: closure_0 };
          outer1_1(outer1_2[1]).dispatch(obj);
          const obj3 = outer1_1(outer1_2[1]);
          return { guildTemplate: outer1_1(outer1_2[4])(body), code: closure_0 };
        }, () => {
          let obj = outer1_1(outer1_2[3]);
          obj = { resolved: false, guild_template_code: closure_0 };
          obj.track(outer1_4.GUILD_TEMPLATE_RESOLVED, obj);
          obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code: closure_0 };
          outer1_1(outer1_2[1]).dispatch(obj);
          return { guildTemplate: null, code: closure_0 };
        }).finally(() => {
          outer1_5.delete(closure_0);
        });
        const result = obj2.set(code, cleanupPromise);
        return cleanupPromise;
      }
      obj2 = map;
    }
    tmp = importDefault;
  },
  loadTemplatesForGuild(arg0) {
    const HTTP = sendRequest /* sendRequest */.HTTP;
    let obj = { url: closure_3.GUILD_TEMPLATES(arg0), oldFormErrors: true, rejectWithError: null };
    obj[2] = sendRequest /* sendRequest */.rejectWithMigratedError();
    const value = HTTP.get(obj);
    return value.then((body) => {
      let obj = callback(table[1]);
      obj = { type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS", guildTemplates: body.body };
      obj.dispatch(obj);
      return body;
    });
  },
  createGuildTemplate(arg0, name, description) {
    const HTTP = sendRequest /* sendRequest */.HTTP;
    obj = { url: closure_3.GUILD_TEMPLATES(arg0), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { name, description };
    obj[3] = sendRequest /* sendRequest */.rejectWithMigratedError();
    const obj3 = sendRequest /* sendRequest */;
    return HTTP.post(obj).then((body) => {
      let obj = callback(table[1]);
      obj = { type: "GUILD_TEMPLATE_CREATE_SUCCESS", guildTemplate: body.body, code: body.body.code };
      obj.dispatch(obj);
    });
  },
  syncGuildTemplate(arg0, arg1) {
    const _require = arg1;
    const HTTP = _sendRequest.HTTP;
    let obj = { url: closure_3.GUILD_TEMPLATE(arg0, arg1), oldFormErrors: true, rejectWithError: null };
    obj[2] = _sendRequest.rejectWithMigratedError();
    const obj2 = _sendRequest;
    return HTTP.put(obj).then((body) => {
      let obj = outer1_1(outer1_2[1]);
      obj = { type: "GUILD_TEMPLATE_SYNC_SUCCESS", guildTemplate: body.body, code: closure_0 };
      obj.dispatch(obj);
    });
  },
  updateGuildTemplate(arg0, arg1, name, description) {
    const _require = arg1;
    const HTTP = _sendRequest.HTTP;
    obj = { url: closure_3.GUILD_TEMPLATE(arg0, arg1), body: obj, oldFormErrors: true, rejectWithError: null };
    obj = { name, description };
    obj[3] = _sendRequest.rejectWithMigratedError();
    const obj3 = _sendRequest;
    return HTTP.patch(obj).then((body) => {
      let obj = outer1_1(outer1_2[1]);
      obj = { type: "GUILD_TEMPLATE_SYNC_SUCCESS", guildTemplate: body.body, code: closure_0 };
      obj.dispatch(obj);
    });
  },
  deleteGuildTemplate(arg0, arg1) {
    const _require = arg0;
    let closure_1 = arg1;
    const HTTP = _sendRequest.HTTP;
    let obj = { url: closure_3.GUILD_TEMPLATE(arg0, arg1), oldFormErrors: true, rejectWithError: null };
    obj[2] = _sendRequest.rejectWithMigratedError();
    const obj2 = _sendRequest;
    return HTTP.del(obj).then(() => {
      let obj = callback(outer1_2[1]);
      obj = { type: "GUILD_TEMPLATE_DELETE_SUCCESS", guildId: closure_0, code: callback };
      obj.dispatch(obj);
    });
  }
};