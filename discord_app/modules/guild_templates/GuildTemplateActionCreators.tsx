// === Module 7324: GuildTemplateActionCreators ===

// Module 7324 (GuildTemplateActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ Endpoints: c3, AnalyticEvents: closure_4 } = Constants);
const map = new Map();
let result = size.fileFinishedImporting("modules/guild_templates/GuildTemplateActionCreators.tsx");

export default {
  resolveGuildTemplate(code) {
    _require = code;
    let obj = DispatcherDefault;
    if (obj.isDispatching()) {
      const resolved = Promise.resolve();
      return resolved.then(() => {
        closure_0 = closure_1_0;
        let obj = closure_2_1(closure_2_2[1]);
        if (obj.isDispatching()) {
          let resolved = Promise.resolve();
          let nextPromise = resolved.then(() => {
            closure_0 = closure_1_0;
            let obj = closure_2_1(closure_2_2[1]);
            if (obj.isDispatching()) {
              let resolved = Promise.resolve();
              let nextPromise = resolved.then(() => {
                closure_0 = closure_1_0;
                let obj = closure_2_1(closure_2_2[1]);
                if (obj.isDispatching()) {
                  let resolved = Promise.resolve();
                  let nextPromise = resolved.then(() => {
                    closure_0 = closure_1_0;
                    let obj = closure_2_1(closure_2_2[1]);
                    if (obj.isDispatching()) {
                      let resolved = Promise.resolve();
                      let nextPromise = resolved.then(() => { ... });
                    } else {
                      nextPromise = closure_2_5.get(tmp);
                      if (null == nextPromise) {
                        obj = { type: "GUILD_TEMPLATE_RESOLVE", code: tmp };
                        closure_2_1(tmp3[1]).dispatch(obj);
                        let HTTP = closure_2_0(tmp3[2]).HTTP;
                        obj = { url: closure_2_3.UNRESOLVED_GUILD_TEMPLATE(tmp), oldFormErrors: true, rejectWithError: true };
                        let value = HTTP.get(obj);
                        let tmp2Result = closure_2_1(tmp3[1]);
                        let cleanupPromise = value.then(() => { ... }, () => { ... }).finally(() => { ... });
                        let result = obj2.set(tmp, cleanupPromise);
                        nextPromise = cleanupPromise;
                        let nextPromise1 = value.then(() => { ... }, () => { ... });
                      }
                      obj2 = closure_2_5;
                    }
                    return nextPromise;
                  });
                } else {
                  nextPromise = closure_2_5.get(tmp);
                  if (null == nextPromise) {
                    obj = { type: "GUILD_TEMPLATE_RESOLVE", code: tmp };
                    closure_2_1(tmp3[1]).dispatch(obj);
                    let HTTP = closure_2_0(tmp3[2]).HTTP;
                    obj = { url: closure_2_3.UNRESOLVED_GUILD_TEMPLATE(tmp), oldFormErrors: true, rejectWithError: true };
                    let value = HTTP.get(obj);
                    let tmp2Result = closure_2_1(tmp3[1]);
                    let cleanupPromise = value.then((body) => {
                      body = body.body;
                      closure_2_1(closure_2_2[3]);
                      let obj = { resolved: true, guild_template_code: code, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
                      obj.track(closure_2_4.GUILD_TEMPLATE_RESOLVED, obj);
                      obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code };
                      closure_2_1(closure_2_2[1]).dispatch(obj);
                      const obj3 = closure_2_1(closure_2_2[1]);
                      return { guildTemplate: closure_2_1(closure_2_2[4])(body), code };
                    }, () => {
                      closure_2_1(closure_2_2[3]);
                      let obj = { resolved: false, guild_template_code: code };
                      obj.track(closure_2_4.GUILD_TEMPLATE_RESOLVED, obj);
                      obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code };
                      closure_2_1(closure_2_2[1]).dispatch(obj);
                      return { guildTemplate: null, code };
                    }).finally(() => {
                      closure_2_5.delete(closure_0);
                    });
                    let result = obj2.set(tmp, cleanupPromise);
                    nextPromise = cleanupPromise;
                    let nextPromise1 = value.then((body) => {
                      body = body.body;
                      closure_2_1(closure_2_2[3]);
                      let obj = { resolved: true, guild_template_code: code, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
                      obj.track(closure_2_4.GUILD_TEMPLATE_RESOLVED, obj);
                      obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code };
                      closure_2_1(closure_2_2[1]).dispatch(obj);
                      const obj3 = closure_2_1(closure_2_2[1]);
                      return { guildTemplate: closure_2_1(closure_2_2[4])(body), code };
                    }, () => {
                      closure_2_1(closure_2_2[3]);
                      let obj = { resolved: false, guild_template_code: code };
                      obj.track(closure_2_4.GUILD_TEMPLATE_RESOLVED, obj);
                      obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code };
                      closure_2_1(closure_2_2[1]).dispatch(obj);
                      return { guildTemplate: null, code };
                    });
                  }
                  obj2 = closure_2_5;
                }
                return nextPromise;
              });
            } else {
              nextPromise = closure_2_5.get(tmp);
              if (null == nextPromise) {
                obj = { type: "GUILD_TEMPLATE_RESOLVE", code: tmp };
                closure_2_1(tmp3[1]).dispatch(obj);
                let HTTP = closure_2_0(tmp3[2]).HTTP;
                obj = { url: closure_2_3.UNRESOLVED_GUILD_TEMPLATE(tmp), oldFormErrors: true, rejectWithError: true };
                let value = HTTP.get(obj);
                let tmp2Result = closure_2_1(tmp3[1]);
                let cleanupPromise = value.then((body) => {
                  body = body.body;
                  closure_2_1(closure_2_2[3]);
                  let obj = { resolved: true, guild_template_code: code, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
                  obj.track(closure_2_4.GUILD_TEMPLATE_RESOLVED, obj);
                  obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code };
                  closure_2_1(closure_2_2[1]).dispatch(obj);
                  const obj3 = closure_2_1(closure_2_2[1]);
                  return { guildTemplate: closure_2_1(closure_2_2[4])(body), code };
                }, () => {
                  closure_2_1(closure_2_2[3]);
                  let obj = { resolved: false, guild_template_code: code };
                  obj.track(closure_2_4.GUILD_TEMPLATE_RESOLVED, obj);
                  obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code };
                  closure_2_1(closure_2_2[1]).dispatch(obj);
                  return { guildTemplate: null, code };
                }).finally(() => {
                  closure_2_5.delete(closure_0);
                });
                let result = obj2.set(tmp, cleanupPromise);
                nextPromise = cleanupPromise;
                let nextPromise1 = value.then((body) => {
                  body = body.body;
                  closure_2_1(closure_2_2[3]);
                  let obj = { resolved: true, guild_template_code: code, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
                  obj.track(closure_2_4.GUILD_TEMPLATE_RESOLVED, obj);
                  obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code };
                  closure_2_1(closure_2_2[1]).dispatch(obj);
                  const obj3 = closure_2_1(closure_2_2[1]);
                  return { guildTemplate: closure_2_1(closure_2_2[4])(body), code };
                }, () => {
                  closure_2_1(closure_2_2[3]);
                  let obj = { resolved: false, guild_template_code: code };
                  obj.track(closure_2_4.GUILD_TEMPLATE_RESOLVED, obj);
                  obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code };
                  closure_2_1(closure_2_2[1]).dispatch(obj);
                  return { guildTemplate: null, code };
                });
              }
              obj2 = closure_2_5;
            }
            return nextPromise;
          });
        } else {
          nextPromise = closure_2_5.get(tmp);
          if (null == nextPromise) {
            obj = { type: "GUILD_TEMPLATE_RESOLVE", code: tmp };
            closure_2_1(tmp3[1]).dispatch(obj);
            let HTTP = closure_2_0(tmp3[2]).HTTP;
            obj = { url: closure_2_3.UNRESOLVED_GUILD_TEMPLATE(tmp), oldFormErrors: true, rejectWithError: true };
            let value = HTTP.get(obj);
            let tmp2Result = closure_2_1(tmp3[1]);
            let cleanupPromise = value.then((body) => {
              body = body.body;
              closure_2_1(closure_2_2[3]);
              let obj = { resolved: true, guild_template_code: code, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
              obj.track(closure_2_4.GUILD_TEMPLATE_RESOLVED, obj);
              obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code };
              closure_2_1(closure_2_2[1]).dispatch(obj);
              const obj3 = closure_2_1(closure_2_2[1]);
              return { guildTemplate: closure_2_1(closure_2_2[4])(body), code };
            }, () => {
              closure_2_1(closure_2_2[3]);
              let obj = { resolved: false, guild_template_code: code };
              obj.track(closure_2_4.GUILD_TEMPLATE_RESOLVED, obj);
              obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code };
              closure_2_1(closure_2_2[1]).dispatch(obj);
              return { guildTemplate: null, code };
            }).finally(() => {
              closure_2_5.delete(closure_0);
            });
            let result = obj2.set(tmp, cleanupPromise);
            nextPromise = cleanupPromise;
            let nextPromise1 = value.then((body) => {
              body = body.body;
              closure_2_1(closure_2_2[3]);
              let obj = { resolved: true, guild_template_code: code, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
              obj.track(closure_2_4.GUILD_TEMPLATE_RESOLVED, obj);
              obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code };
              closure_2_1(closure_2_2[1]).dispatch(obj);
              const obj3 = closure_2_1(closure_2_2[1]);
              return { guildTemplate: closure_2_1(closure_2_2[4])(body), code };
            }, () => {
              closure_2_1(closure_2_2[3]);
              let obj = { resolved: false, guild_template_code: code };
              obj.track(closure_2_4.GUILD_TEMPLATE_RESOLVED, obj);
              obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code };
              closure_2_1(closure_2_2[1]).dispatch(obj);
              return { guildTemplate: null, code };
            });
          }
          obj2 = closure_2_5;
        }
        return nextPromise;
      });
    } else {
      value = map.get(code);
      if (null != value) {
        return value;
      } else {
        obj = { type: "GUILD_TEMPLATE_RESOLVE", code };
        DispatcherDefault.dispatch(obj);
        const HTTP = require("HTTPUtils").HTTP;
        obj = { url: closure_3.UNRESOLVED_GUILD_TEMPLATE(code), oldFormErrors: true, rejectWithError: true };
        value = HTTP.get(obj);
        const tmpResult = DispatcherDefault;
        const cleanupPromise = value.then((body) => {
          body = body.body;
          closure_2_1(closure_2_2[3]);
          let obj = { resolved: true, guild_template_code: code, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
          obj.track(closure_2_4.GUILD_TEMPLATE_RESOLVED, obj);
          obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code };
          closure_2_1(closure_2_2[1]).dispatch(obj);
          const obj3 = closure_2_1(closure_2_2[1]);
          return { guildTemplate: closure_2_1(closure_2_2[4])(body), code };
        }, () => {
          closure_2_1(closure_2_2[3]);
          let obj = { resolved: false, guild_template_code: code };
          obj.track(closure_2_4.GUILD_TEMPLATE_RESOLVED, obj);
          obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code };
          closure_2_1(closure_2_2[1]).dispatch(obj);
          return { guildTemplate: null, code };
        }).finally(() => {
          closure_2_5.delete(closure_0);
        });
        const result = obj2.set(code, cleanupPromise);
        return cleanupPromise;
      }
      obj2 = map;
    }
  },
  loadTemplatesForGuild(arg0) {
    const HTTP = HTTPUtils.HTTP;
    let obj = { url: React3.GUILD_TEMPLATES(arg0), oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    value = HTTP.get(obj);
    return value.then((body) => {
      const obj = { type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS", guildTemplates: body.body };
      obj.dispatch(obj);
      return body;
    });
  },
  createGuildTemplate(arg0, name, description) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: React3.GUILD_TEMPLATES(arg0), body: { name, description }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    let obj = { name, description };
    return HTTP.post(request).then((body) => {
      const obj = { type: "GUILD_TEMPLATE_CREATE_SUCCESS", guildTemplate: body.body, code: body.body.code };
      obj.dispatch(obj);
    });
  },
  syncGuildTemplate(arg0, code) {
    _require = code;
    const HTTP = require("HTTPUtils").HTTP;
    let obj = { url: closure_3.GUILD_TEMPLATE(arg0, code), oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    const obj2 = require("HTTPUtils");
    return HTTP.put(obj).then((body) => {
      const obj = { type: "GUILD_TEMPLATE_SYNC_SUCCESS", guildTemplate: body.body, code };
      obj.dispatch(obj);
    });
  },
  updateGuildTemplate(arg0, code, name, description) {
    _require = code;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_3.GUILD_TEMPLATE(arg0, code), body: { name, description }, oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    let obj = { name, description };
    const obj3 = require("HTTPUtils");
    return HTTP.patch(request).then((body) => {
      const obj = { type: "GUILD_TEMPLATE_SYNC_SUCCESS", guildTemplate: body.body, code };
      obj.dispatch(obj);
    });
  },
  deleteGuildTemplate(guildId, code) {
    _require = guildId;
    const HTTP = require("HTTPUtils").HTTP;
    let obj = { url: closure_3.GUILD_TEMPLATE(guildId, code), oldFormErrors: true, rejectWithError: require("HTTPUtils").rejectWithMigratedError() };
    const obj2 = require("HTTPUtils");
    return HTTP.del(obj).then(() => {
      const obj = { type: "GUILD_TEMPLATE_DELETE_SUCCESS", guildId, code };
      obj.dispatch(obj);
    });
  }
};