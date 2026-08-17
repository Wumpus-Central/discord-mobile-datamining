// discord_app/modules/guild_member_verification/MemberVerificationActionCreators.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../impersonate/ImpersonateStore.tsx";
import closure_5 from "../../stores/GuildMemberStore.tsx";
import closure_6 from "../../stores/InviteStore.tsx";
import closure_7 from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";

const require = arg1;
function _fetchVerificationForm() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c7 = 0;
    c8 = 0;
    c6 = 0;
    return (function*(arg0, arg1) {
      closure_4 = tmp3;
      closure_3 = tmp5;
      let body = lib;
      if (lib == null) {
        body = inviteKeyForGuildId.getInviteKeyForGuildId(tmp63);
      }
      if (currentUser != null) {
        const id = currentUser.id;
      }
      inviteKeyForGuildId = 1;
      const HTTP = callback(closure_1_2[6]).HTTP;
      obj1 = { url: null, query: null, oldFormErrors: true, rejectWithError: null };
      obj1[0] = closure_1_9.GUILD_MEMBER_VERIFICATION(callback);
      const obj2 = { with_guild: null, invite_code: null };
      obj2[0] = !closure_1_5.isMember(callback, id);
      if (null != body) {
        let obj7 = callback(closure_1_2[7]);
        const result = obj7.parseInviteCodeFromInviteKey(tmp27);
      }
      obj2[1] = result;
      obj1[1] = obj2;
      const obj8 = callback(closure_1_2[6]);
      obj1[3] = obj8.rejectWithMigratedError();
      yield HTTP.get(obj1);
      inviteKeyForGuildId = 0;
      const obj3 = lib(body[8]);
      const obj4 = { type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL", guildId: null };
      obj4[1] = callback;
      obj3.dispatch(obj4);
      lib = yield "HermesInternal";
      if (null == lib.body) {
        throw lib;
      }
      body = lib.body;
      const obj6 = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId: null, form: null };
      obj6[1] = callback;
      obj7 = { version: null, description: null, formFields: null, guild: null, profile: null };
      obj7[0] = body.version;
      obj7[1] = body.description;
      obj7[2] = body.form_fields;
      obj7[3] = body.guild;
      let guildProfileFromServer = null;
      if (null != body.profile) {
        const obj = callback(body[9]);
        guildProfileFromServer = obj.buildGuildProfileFromServer(body.profile);
      }
      obj7[4] = guildProfileFromServer;
      obj6[2] = obj7;
      lib(body[8]).dispatch(obj6);
      inviteKeyForGuildId = 0;
      return body;
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateVerificationForm() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c6 = 0;
    c7 = 0;
    return (function*(arg0, body) {
      if (c7 === 2) {
        c7 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw body;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_5 = tmp2;
              closure_4 = tmp5;
              body = undefined;
              const HTTP = callback(530).HTTP;
              obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
              obj1[0] = closure_1_9.GUILD_MEMBER_VERIFICATION(callback);
              const obj2 = { form_fields: null, enabled: null, bulk_action: null };
              obj2[0] = body;
              obj2[1] = dependencyMap;
              obj2[2] = closure_3;
              obj1[1] = obj2;
              obj1[3] = callback(530).rejectWithMigratedError();
              c6 = 1;
              c7 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.patch(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw body;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          } else {
            body = body.body;
            let obj4 = body(709);
            obj4 = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId: null, form: null };
            obj4[1] = callback;
            const obj5 = { version: null, description: null, formFields: null };
            obj5[0] = body.version;
            obj5[1] = body.description;
            obj5[2] = body.form_fields;
            obj4[2] = obj5;
            obj4.dispatch(obj4);
            c7 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp6) {
          c7 = tmp;
          throw tmp6;
        }
      }
    })();
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateVerificationFormDescription() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, body) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw body;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_3 = tmp2;
              const table = tmp5;
              body = undefined;
              const HTTP = callback(closure_1_2[6]).HTTP;
              obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
              obj1[0] = closure_1_9.GUILD_MEMBER_VERIFICATION(callback);
              const obj2 = { description: null };
              obj2[0] = body;
              obj1[1] = obj2;
              obj1[3] = callback(closure_1_2[6]).rejectWithMigratedError();
              c4 = 1;
              c5 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.patch(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw body;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          } else {
            body = body.body;
            let obj4 = body(table[8]);
            obj4 = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId: null, form: null };
            obj4[1] = callback;
            const obj5 = { version: null, description: null, formFields: null };
            obj5[0] = body.version;
            obj5[1] = body.description;
            obj5[2] = body.form_fields;
            obj4[2] = obj5;
            obj4.dispatch(obj4);
            c5 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp6) {
          c5 = tmp;
          throw tmp6;
        }
      }
    })();
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _enableVerificationForm() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function*(arg0, arg1) {
      if (dependencyMap === 2) {
        dependencyMap = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          dependencyMap = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              dependencyMap = 3;
              throw arg1;
            } else if (arg0 === 2) {
              dependencyMap = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const HTTP = callback(530).HTTP;
              obj1 = { url: null, body: null, oldFormErrors: true, rejectWithError: null };
              obj1[0] = closure_1_9.GUILD_MEMBER_VERIFICATION(callback);
              const obj2 = { enabled: null };
              obj2[0] = closure_1;
              obj1[1] = obj2;
              obj1[3] = callback(530).rejectWithMigratedError();
              c3 = 1;
              dependencyMap = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.patch(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            dependencyMap = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp5) {
          dependencyMap = tmp;
          throw tmp5;
        }
      }
    })();
  });
  closure_13 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _submitVerificationForm() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c8 = 0;
    c9 = 0;
    c7 = 0;
    const iter = (function*(arg0, body) {
      if (c9 === 2) {
        c9 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c9 = 2;
          if (0 === anyErrorMessage) {
            if (arg0 === 1) {
              c9 = 3;
              throw body;
            } else if (arg0 === 2) {
              c9 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_5 = tmp3;
              let fullServerPreview = tmp7;
              let num9;
              if (num9 === undefined) {
                num9 = 200;
              }
              body = undefined;
              anyErrorMessage = 1;
              c9 = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp7) {
            if (arg0 === 1) {
              c9 = 3;
              throw body;
            } else if (arg0 === 2) {
              c9 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = body;
              return obj1;
            } else {
              anyErrorMessage = fullServerPreview;
              anyErrorMessage = closure_5;
              anyErrorMessage = fullServerPreview;
              anyErrorMessage = callback;
              anyErrorMessage = fullServerPreview;
              anyErrorMessage = closure_5;
              if (fullServerPreview.isFullServerPreview(callback)) {
                let obj11 = callback(num9[10]);
                const obj2 = { memberOptions: null };
                obj2[0] = { isPending: false };
                const result = obj11.updateImpersonatedData(callback, obj2);
                c9 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              } else {
                c7 = 1;
                const HTTP = callback(num9[6]).HTTP;
                let obj3 = { url: null, body: null, rejectWithError: null };
                obj3[0] = c9.GUILD_MEMBER_REQUEST_TO_JOIN(callback);
                let obj4 = { version: null, form_fields: null };
                obj4[0] = lib.version;
                obj4[1] = lib.formFields;
                obj3[1] = obj4;
                let obj9 = callback(num9[6]);
                obj3[2] = obj9.rejectWithMigratedError();
                anyErrorMessage = 3;
                c9 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = HTTP.put(obj3);
                return obj5;
              }
            }
          } else if (2 === tmp7) {
            c7 = 0;
            fullServerPreview = closure_6;
            const status = fullServerPreview.status;
            if (429 === status) {
              obj3 = callback(num9[12]);
              obj3.closeContextMenu();
              obj4 = lib(num9[13]);
              const obj6 = { title: null, body: null, confirmText: null };
              const intl3 = callback(num9[14]).intl;
              obj6[0] = intl3.string(callback(num9[14]).t.MmIrpf);
              const intl4 = callback(num9[14]).intl;
              obj6[1] = intl4.string(callback(num9[14]).t.yjpDQ3);
              const intl5 = callback(num9[14]).intl;
              obj6[2] = intl5.string(callback(num9[14]).t.XNGT1O);
              obj4.show(obj6);
              const obj7 = {};
              const merged = Object.assign(fullServerPreview);
              const intl6 = callback(num9[14]).intl;
              obj7.message = intl6.string(callback(num9[14]).t.yjpDQ3);
              throw obj7;
            } else if (403 === status) {
              const obj8 = {};
              const merged1 = Object.assign(fullServerPreview);
              const intl2 = callback(num9[14]).intl;
              obj8.message = intl2.string(callback(num9[14]).t["8T1rxN"]);
              throw obj8;
            } else {
              obj9 = {};
              const merged2 = Object.assign(fullServerPreview);
              anyErrorMessage = callback;
              anyErrorMessage = num9;
              anyErrorMessage = fullServerPreview;
              anyErrorMessage = new.target;
              anyErrorMessage = new.target;
              const aPIError = new callback(num9[15]).APIError(fullServerPreview);
              anyErrorMessage = aPIError;
              anyErrorMessage = aPIError.getAnyErrorMessage();
              body = anyErrorMessage;
              if (anyErrorMessage == null) {
                const intl = callback(num9[14]).intl;
                body = intl.string(callback(num9[14]).t.R0RpRX);
              }
              obj9.message = body;
              throw obj9;
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw body;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            const obj10 = { value: null, done: true };
            obj10[0] = body;
            return obj10;
          } else {
            body = body.body;
            obj11 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: null, request: null };
            obj11[1] = callback;
            obj11[2] = body;
            lib(num9[8]).dispatch(obj11);
            const obj17 = lib(num9[8]);
            let hasNonTermsFormFieldResult = callback(num9[11]).hasNonTermsFormField(lib.formFields);
            if (hasNonTermsFormFieldResult) {
              hasNonTermsFormFieldResult = -1 !== num9;
            }
            if (hasNonTermsFormFieldResult) {
              const _setTimeout = setTimeout;
              const timerId = setTimeout(() => {
                let obj = callback(num9[8]);
                obj = { type: "USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW", guildId: closure_0 };
                obj.dispatch(obj);
              }, num9);
            }
            c7 = 0;
            c9 = 3;
            obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          }
        } catch (tmp75) {
          closure_6 = tmp75;
          if (tmp4 === c7) {
            c9 = tmp2;
            throw tmp75;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: closure_8, Endpoints: c9 } = ME);
let result = require("set").fileFinishedImporting("modules/guild_member_verification/MemberVerificationActionCreators.tsx");

export default {
  fetchVerificationForm(guildId, inviteKeyForGuildId) {
    const self = this;
    const apply = _fetchVerificationForm.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  updateVerificationForm() {
    const self = this;
    const apply = _updateVerificationForm.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  updateVerificationFormFieldsLocal(guildId, formFields) {
    let obj = dispatcherDefault;
    obj = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId, form: obj, isLocalUpdate: true };
    obj = { formFields };
    obj.dispatch(obj);
  },
  updateVerificationFormDescription() {
    const self = this;
    const apply = _updateVerificationFormDescription.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  updateVerificationFormDescriptionLocal(guildId, description) {
    let obj = dispatcherDefault;
    obj = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId, form: obj, isLocalUpdate: true };
    obj = { description };
    obj.dispatch(obj);
  },
  enableVerificationForm() {
    const self = this;
    const apply = _enableVerificationForm.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  submitVerificationForm(guildId, arg1) {
    const self = this;
    const apply = _submitVerificationForm.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  clearCoachmark() {
    dispatcherDefault.dispatch({ type: "USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR" });
  },
  reportApplication(arg0) {
    ({ guild, guildJoinRequest, guildJoinRequestUser, reason, reasonOther, responses } = arg0);
    let obj = expandEventPropertiesDefault;
    obj = { application_id: guildJoinRequest.joinRequestId, applicant_id: guildJoinRequestUser.id, guild_id: guild.id, reason, reason_other: reasonOther, responses };
    obj.track(constants.GUILD_MEMBER_APPLICATION_REPORTED, obj);
  }
};
export const DISABLE_JOIN_REQUEST_COACHMARK = -1;
export const showCoachmark = function showCoachmark(guildId) {
  let obj = dispatcherDefault;
  obj = { type: "USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW", guildId };
  obj.dispatch(obj);
};