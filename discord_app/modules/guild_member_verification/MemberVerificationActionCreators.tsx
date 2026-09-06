// === Module 5547: MemberVerificationActionCreators ===

// Module 5547 (MemberVerificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import InviteCodeUtils from "InviteCodeUtils" /* 4545 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ImpersonateStore from "ImpersonateStore" /* 2014 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import InviteStore from "InviteStore" /* 4544 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
let closure_10 = async function _fetchVerificationForm() {
  closure_4 = tmp3;
  closure_3 = tmp5;
  closure_131_0 = closure_0;
  let inviteKeyForGuildId2 = closure_1;
  if (closure_1 == null) {
    inviteKeyForGuildId2 = inviteKeyForGuildId.getInviteKeyForGuildId(tmp62);
  }
  currentUser = currentUser.getCurrentUser();
  if (currentUser != null) {
    const id = currentUser.id;
  }
  const HTTP = HTTPUtils.HTTP;
  const request = { url: React7.GUILD_MEMBER_VERIFICATION(closure_0), query: null, oldFormErrors: true, rejectWithError: null };
  const obj1 = { with_guild: !member.isMember(closure_0, id), invite_code: null };
  if (null != inviteKeyForGuildId2) {
    const result = InviteCodeUtils.parseInviteCodeFromInviteKey(tmp27);
    InviteCodeUtils;
  }
  obj1.invite_code = result;
  request.query = obj1;
  !member.isMember(closure_0, id);
  request.rejectWithError = HTTPUtils.rejectWithMigratedError();
  await HTTP.get(request);
  closure_132_1(closure_132_2[8]);
  const obj3 = { type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL", guildId: closure_131_0 };
  obj3.dispatch(obj3);
  closure_131_1 = await "HermesInternal";
  if (null == closure_131_1.body) {
    throw closure_131_1;
  }
  const body = closure_131_1.body;
  const obj5 = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId: closure_131_0, form: null };
  const obj6 = { version: body.version, description: body.description, formFields: body.form_fields, guild: body.guild, profile: null };
  let guildProfileFromServer = null;
  if (null != body.profile) {
    guildProfileFromServer = closure_132_0(closure_132_2[9]).buildGuildProfileFromServer(body.profile);
    closure_132_0(closure_132_2[9]);
  }
  obj6.profile = guildProfileFromServer;
  obj5.form = obj6;
  closure_132_1(closure_132_2[8]).dispatch(obj5);
  return body;
};
let closure_11 = async function _updateVerificationForm(arg0, form_fields, enabled, bulk_action) {
  closure_0 = arg0;
  c6 = 0;
  c7 = 0;
  return (async (arg0, value, arg2, arg3) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_5 = tmp2;
            closure_4 = tmp5;
            closure_132_0 = closure_0;
            let body;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: closure_2_9.GUILD_MEMBER_VERIFICATION(closure_0), body: null, oldFormErrors: true, rejectWithError: null };
            const obj1 = { form_fields, enabled, bulk_action };
            request.body = obj1;
            request.rejectWithError = HTTPUtils.rejectWithMigratedError();
            c6 = 1;
            c7 = 1;
            const obj2 = { value: HTTP.patch(request), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          body = value.body;
          let obj4 = closure_133_1(closure_133_2[8]);
          const obj3 = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId: closure_132_0, form: null };
          obj4 = { version: body.version, description: body.description, formFields: body.form_fields };
          obj3.form = obj4;
          obj4.dispatch(obj3);
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp6) {
        c7 = tmp;
        throw tmp6;
      }
    }
  })();
};
let closure_12 = async function _updateVerificationFormDescription(arg0, description) {
  closure_0 = arg0;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp2;
            closure_2 = tmp5;
            closure_130_0 = closure_0;
            let body;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: closure_2_9.GUILD_MEMBER_VERIFICATION(closure_0), body: null, oldFormErrors: true, rejectWithError: null };
            const obj1 = { description };
            request.body = obj1;
            request.rejectWithError = HTTPUtils.rejectWithMigratedError();
            c4 = 1;
            c5 = 1;
            const obj2 = { value: HTTP.patch(request), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          body = value.body;
          let obj4 = closure_131_1(closure_131_2[8]);
          const obj3 = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId: closure_130_0, form: null };
          obj4 = { version: body.version, description: body.description, formFields: body.form_fields };
          obj3.form = obj4;
          obj4.dispatch(obj3);
          c5 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp6) {
        c5 = tmp;
        throw tmp6;
      }
    }
  })();
};
let closure_13 = async function _enableVerificationForm(arg0, enabled) {
  closure_0 = arg0;
  c3 = 0;
  c2 = 0;
  return (async (arg0, value) => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const HTTP = HTTPUtils.HTTP;
            const request = { url: closure_2_9.GUILD_MEMBER_VERIFICATION(closure_0), body: null, oldFormErrors: true, rejectWithError: null };
            const obj1 = { enabled };
            request.body = obj1;
            request.rejectWithError = HTTPUtils.rejectWithMigratedError();
            c3 = 1;
            c2 = 1;
            const obj2 = { value: HTTP.patch(request), done: false };
            return obj2;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp5) {
        c2 = tmp;
        throw tmp5;
      }
    }
  })();
};
let closure_14 = async function _submitVerificationForm(arg0, value) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = tmp3;
          closure_4 = tmp7;
          closure_132_2 = undefined;
          closure_132_0 = guildId;
          closure_132_1 = closure_1;
          let num9 = closure_2;
          if (closure_2 === undefined) {
            num9 = 200;
          }
          closure_132_2 = num9;
          let body;
          c8 = 1;
          c9 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else if (closure_133_4.isFullServerPreview(closure_132_0)) {
          const obj2 = { memberOptions: { isPending: false } };
          const result = closure_133_0(closure_133_2[10]).updateImpersonatedData(closure_132_0, obj2);
          c9 = 3;
          return { value: "HermesInternal", done: null };
        } else {
          c7 = 1;
          const HTTP = closure_133_0(closure_133_2[6]).HTTP;
          const request = { url: closure_133_9.GUILD_MEMBER_REQUEST_TO_JOIN(closure_132_0), body: null, rejectWithError: null };
          let obj3 = { version: closure_132_1.version, form_fields: closure_132_1.formFields };
          request.body = obj3;
          let obj9 = closure_133_0(closure_133_2[6]);
          request.rejectWithError = obj9.rejectWithMigratedError();
          c8 = 3;
          c9 = 1;
          let obj4 = { value: HTTP.put(request), done: false };
          return obj4;
        }
      } else if (2 === tmp7) {
        c7 = 0;
        closure_132_4 = closure_6;
        const status = closure_132_4.status;
        if (429 === status) {
          obj3 = closure_133_0(closure_133_2[12]);
          obj3.closeContextMenu();
          obj4 = closure_133_1(closure_133_2[13]);
          const obj5 = { title: null, body: null, confirmText: null };
          const intl3 = closure_133_0(closure_133_2[14]).intl;
          obj5.title = intl3.string(closure_133_0(closure_133_2[14]).t.MmIrpf);
          const intl4 = closure_133_0(closure_133_2[14]).intl;
          obj5.body = intl4.string(closure_133_0(closure_133_2[14]).t.yjpDQ3);
          const intl5 = closure_133_0(closure_133_2[14]).intl;
          obj5.confirmText = intl5.string(closure_133_0(closure_133_2[14]).t.XNGT1O);
          obj4.show(obj5);
          const obj6 = {};
          const merged = Object.assign(closure_132_4);
          const intl6 = closure_133_0(closure_133_2[14]).intl;
          obj6.message = intl6.string(closure_133_0(closure_133_2[14]).t.yjpDQ3);
          throw obj6;
        } else if (403 === status) {
          const obj7 = {};
          const merged1 = Object.assign(closure_132_4);
          const intl2 = closure_133_0(closure_133_2[14]).intl;
          obj7.message = intl2.string(closure_133_0(closure_133_2[14]).t["8T1rxN"]);
          throw obj7;
        } else {
          const obj8 = {};
          const merged2 = Object.assign(closure_132_4);
          const aPIError = new closure_133_0(closure_133_2[15]).APIError(closure_132_4);
          const anyErrorMessage = aPIError.getAnyErrorMessage();
          let message = anyErrorMessage;
          if (anyErrorMessage == null) {
            const intl = closure_133_0(closure_133_2[14]).intl;
            message = intl.string(closure_133_0(closure_133_2[14]).t.R0RpRX);
          }
          obj8.message = message;
          throw obj8;
        }
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 0;
        c9 = 3;
        obj9 = { value, done: true };
        return obj9;
      } else {
        body = value.body;
        const obj10 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: closure_132_0, request: body };
        closure_133_1(closure_133_2[8]).dispatch(obj10);
        const obj17 = closure_133_1(closure_133_2[8]);
        let hasNonTermsFormFieldResult = closure_133_0(closure_133_2[11]).hasNonTermsFormField(closure_132_1.formFields);
        if (hasNonTermsFormFieldResult) {
          hasNonTermsFormFieldResult = -1 !== closure_132_2;
        }
        if (hasNonTermsFormFieldResult) {
          const _setTimeout = setTimeout;
          const timerId = setTimeout(() => {
            closure_1(closure_2[8]);
            const obj = { type: "USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW", guildId };
            obj.dispatch(obj);
          }, closure_132_2);
        }
        c7 = 0;
        c9 = 3;
        obj = { value: body, done: true };
        return obj;
      }
    } catch (tmp75) {
      closure_6 = tmp75;
      if (tmp4 === c7) {
        c9 = tmp2;
        throw tmp75;
      } else {
        c8 = tmp;
      }
    }
  }
};
const Constants = fn(1074);
({ AnalyticEvents: closure_8, Endpoints: closure_9 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/MemberVerificationActionCreators.tsx");

export default {
  fetchVerificationForm() {
    const self = this;
    const apply = closure_10.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  updateVerificationForm() {
    const self = this;
    const apply = closure_11.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  updateVerificationFormFieldsLocal(guildId, formFields) {
    let obj = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId, form: null, isLocalUpdate: true };
    obj = { formFields };
    obj.form = obj;
    obj.dispatch(obj);
  },
  updateVerificationFormDescription() {
    const self = this;
    const apply = closure_12.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  updateVerificationFormDescriptionLocal(guildId, description) {
    let obj = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId, form: null, isLocalUpdate: true };
    obj = { description };
    obj.form = obj;
    obj.dispatch(obj);
  },
  enableVerificationForm() {
    const self = this;
    const apply = closure_13.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  submitVerificationForm() {
    const self = this;
    const apply = closure_14.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  clearCoachmark() {
    DispatcherDefault.dispatch({ type: "USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR" });
  },
  reportApplication(arg0) {
    ({ guild, guildJoinRequest, guildJoinRequestUser, reason, reasonOther, responses } = arg0);
    const obj = { application_id: guildJoinRequest.joinRequestId, applicant_id: guildJoinRequestUser.id, guild_id: guild.id, reason, reason_other: reasonOther, responses };
    obj.track(constants.GUILD_MEMBER_APPLICATION_REPORTED, obj);
  }
};
export const DISABLE_JOIN_REQUEST_COACHMARK = -1;
export const showCoachmark = function showCoachmark(guildId) {
  const obj = { type: "USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW", guildId };
  obj.dispatch(obj);
};