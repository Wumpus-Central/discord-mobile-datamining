// === Module 5937: MemberVerificationActionCreators ===

// Module 5937 (MemberVerificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import InviteCodeUtils from "InviteCodeUtils" /* 4872 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ImpersonateStore from "ImpersonateStore" /* 2105 */;
import GuildMemberStore from "GuildMemberStore" /* 2112 */;
import InviteStore from "InviteStore" /* 4871 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let closure_3, closure_6, currentUser, isMember;

let c9;
let metroImportAll;
let obj = function _fetchVerificationForm() {
  let inviteKeyForGuildId;
  obj = _asyncToGenerator(async (guildId, arg1) => {
    let closure_2;
    let closure_4;
    let closure_5;
    let closure_1 = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value) => {
      let guildProfileFromServer;
      let id;
      let obj10;
      let obj11;
      let obj4;
      let result;
      let inviteKeyForGuildId2 = closure_1;
      if (closure_1 == null) {
        isMember = inviteKeyForGuildId;
        inviteKeyForGuildId2 = inviteKeyForGuildId.getInviteKeyForGuildId(guildId);
      }
      currentUser = currentUser.getCurrentUser();
      isMember = isMember.isMember;
      if (currentUser != null) {
        id = currentUser.id;
      }
      const tmp27 = !isMember(guildId, id);
      const HTTP = HTTPUtils.HTTP;
      isMember = HTTP.get;
      const request = { url: closure_2_9.GUILD_MEMBER_VERIFICATION(guildId), query: obj4, oldFormErrors: true, rejectWithError: obj10.rejectWithMigratedError() };
      obj4 = { with_guild: tmp27, invite_code: result };
      if (null != inviteKeyForGuildId2) {
        const obj9 = InviteCodeUtils;
        result = obj9.parseInviteCodeFromInviteKey(tmp22);
      }
      obj10 = HTTPUtils;
      isMember = isMember(request);
      await isMember;
      const obj7 = { type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL", guildId };
      const obj5 = closure_132_1(closure_132_2[8]);
      obj5.dispatch(obj7);
      await "IconComponent";
      closure_1 = value;
      if (null == closure_1.body) {
        throw closure_1;
      }
      const body = closure_1.body;
      isMember = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId, form: obj11 };
      obj11 = { version: body.version, description: body.description, formFields: body.form_fields, guild: body.guild, profile: guildProfileFromServer };
      guildProfileFromServer = null;
      const dispatch = closure_132_1(closure_132_2[8]).dispatch;
      closure_132_1(closure_132_2[8]);
      if (null != body.profile) {
        obj = closure_132_0(closure_132_2[9]);
        guildProfileFromServer = obj.buildGuildProfileFromServer(body.profile);
      }
      dispatch(isMember);
      isMember = body;
      return isMember;
    })();
  });
  return obj(...arguments);
};
obj = function _updateVerificationForm() {
  obj = _asyncToGenerator(async (guildId, form_fields, enabled, bulk_action) => {
    let c6 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let obj10;
      let obj4;
      let obj8;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_4 = tmp4;
              body = undefined;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: closure_2_9.GUILD_MEMBER_VERIFICATION(guildId), body: obj4, oldFormErrors: true, rejectWithError: obj10.rejectWithMigratedError() };
              const patch = HTTP.patch;
              obj4 = { form_fields, enabled, bulk_action };
              c6 = 1;
              c7 = 1;
              obj10 = HTTPUtils;
              const obj6 = { value: patch(request), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            return { value, done: true };
          } else {
            body = value.body;
            const obj7 = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId, form: obj8 };
            obj8 = { version: body.version, description: body.description, formFields: body.form_fields };
            const obj5 = closure_133_1(closure_133_2[8]);
            obj5.dispatch(obj7);
            c7 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp5) {
          c7 = 3;
          throw tmp5;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _updateVerificationFormDescription() {
  obj = _asyncToGenerator(async (guildId, description) => {
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj10;
      let obj4;
      let obj8;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              body = undefined;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: closure_2_9.GUILD_MEMBER_VERIFICATION(guildId), body: obj4, oldFormErrors: true, rejectWithError: obj10.rejectWithMigratedError() };
              const patch = HTTP.patch;
              obj4 = { description };
              c4 = 1;
              c5 = 1;
              obj10 = HTTPUtils;
              const obj6 = { value: patch(request), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            body = value.body;
            const obj7 = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId, form: obj8 };
            obj8 = { version: body.version, description: body.description, formFields: body.form_fields };
            const obj5 = closure_131_1(closure_131_2[8]);
            obj5.dispatch(obj7);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp5) {
          c5 = 3;
          throw tmp5;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _enableVerificationForm() {
  obj = _asyncToGenerator(async (arg0, enabled) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c2 = 0;
    return (async (arg0, value) => {
      let obj4;
      let obj7;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              const HTTP = HTTPUtils.HTTP;
              const request = { url: closure_2_9.GUILD_MEMBER_VERIFICATION(closure_0), body: obj4, oldFormErrors: true, rejectWithError: obj7.rejectWithMigratedError() };
              const patch = HTTP.patch;
              obj4 = { enabled };
              c3 = 1;
              c2 = 1;
              obj7 = HTTPUtils;
              const obj5 = { value: patch(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            return { value, done: true };
          } else {
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp4) {
          c2 = 3;
          throw tmp4;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _submitVerificationForm() {
  obj = _asyncToGenerator(async function(guildId, arg1) {
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let message;
    let obj7;
    let obj9;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (guildId === 1) {
        throw value;
      } else if (guildId === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c7;
      try {
        let status;
        let num9;
        let body;
        c9 = 2;
        if (0 === c8) {
          if (guildId === 1) {
            c9 = 3;
            throw value;
          } else if (guildId === 2) {
            c9 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_5 = tmp;
            status = tmp4;
            num9 = closure_2;
            if (closure_2 === undefined) {
              num9 = 200;
            }
            body = undefined;
            c8 = 1;
            c9 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c8) {
          if (guildId === 1) {
            c9 = 3;
            throw value;
          } else if (guildId === 2) {
            c9 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (closure_133_4.isFullServerPreview(guildId)) {
            const obj6 = { memberOptions: { isPending: false } };
            const obj11 = closure_133_0(closure_133_2[10]);
            const result = obj11.updateImpersonatedData(guildId, obj6);
            c9 = 3;
            return { value: "IconComponent", done: null };
          } else {
            c7 = 1;
            const HTTP = closure_133_0(closure_133_2[6]).HTTP;
            const request = { url: closure_133_9.GUILD_MEMBER_REQUEST_TO_JOIN(guildId), body: obj7, rejectWithError: obj9.rejectWithMigratedError() };
            const put = HTTP.put;
            obj7 = { version: closure_1.version, form_fields: closure_1.formFields };
            obj9 = closure_133_0(closure_133_2[6]);
            c8 = 3;
            c9 = 1;
            const obj8 = { value: put(request), done: false };
            return obj8;
          }
        } else if (2 === c8) {
          c7 = 0;
          status = closure_6;
          status = status.status;
          if (429 === status) {
            const obj4 = closure_133_0(closure_133_2[12]);
            obj4.closeContextMenu();
            const obj10 = { title: intl3.string(closure_133_0(closure_133_2[14]).t.MmIrpf), body: intl4.string(closure_133_0(closure_133_2[14]).t.yjpDQ3), confirmText: intl5.string(closure_133_0(closure_133_2[14]).t.XNGT1O) };
            const show = closure_133_1(closure_133_2[13]).show;
            const tmp38 = closure_133_1(closure_133_2[13]);
            intl3 = closure_133_0(closure_133_2[14]).intl;
            intl4 = closure_133_0(closure_133_2[14]).intl;
            intl5 = closure_133_0(closure_133_2[14]).intl;
            show(obj10);
            const obj12 = { message: intl6.string(closure_133_0(closure_133_2[14]).t.yjpDQ3) };
            const merged = Object.assign(status);
            intl6 = closure_133_0(closure_133_2[14]).intl;
            throw obj12;
          } else if (403 === status) {
            const obj13 = { message: intl2.string(closure_133_0(closure_133_2[14]).t["8T1rxN"]) };
            const merged1 = Object.assign(status);
            intl2 = closure_133_0(closure_133_2[14]).intl;
            throw obj13;
          } else {
            const obj14 = { message };
            const merged2 = Object.assign(status);
            const self = this;
            const self2 = this;
            const aPIError = new closure_133_0(closure_133_2[15]).APIError(status);
            const anyErrorMessage = aPIError.getAnyErrorMessage();
            message = anyErrorMessage;
            if (anyErrorMessage == null) {
              const intl = closure_133_0(closure_133_2[14]).intl;
              message = intl.string(closure_133_0(closure_133_2[14]).t.R0RpRX);
            }
            throw obj14;
          }
        } else if (guildId === 1) {
          c9 = 3;
          throw value;
        } else if (guildId === 2) {
          c7 = 0;
          c9 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          body = value.body;
          const obj17 = { type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId, request: body };
          const obj16 = closure_133_1(closure_133_2[8]);
          const dispatchResult = obj16.dispatch(obj17);
          const obj18 = closure_133_0(closure_133_2[11]);
          const hasNonTermsFormFieldResult = obj18.hasNonTermsFormField(closure_1.formFields) && -1 !== num9;
          if (hasNonTermsFormFieldResult) {
            const _setTimeout = setTimeout;
            const timerId = setTimeout(() => {
              obj = closure_1(closure_2[8]);
              const obj2 = { type: "USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW", guildId };
              obj.dispatch(obj2);
            }, num9);
          }
          c7 = 0;
          c9 = 3;
          obj = { value: body, done: true };
          return obj;
        }
      } catch (tmp73) {
        closure_6 = tmp73;
        if (0 === c7) {
          c9 = 3;
          throw tmp73;
        } else {
          c8 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
({ AnalyticEvents: metroImportAll, Endpoints: c9 } = Constants);
obj = {
  fetchVerificationForm() {
    return obj(...arguments);
  },
  updateVerificationForm() {
    return obj(...arguments);
  },
  updateVerificationFormFieldsLocal(guildId, formFields) {
    let obj3;
    const obj2 = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId, form: obj3, isLocalUpdate: true };
    obj3 = { formFields };
    obj = DispatcherDefault;
    obj.dispatch(obj2);
  },
  updateVerificationFormDescription() {
    return obj(...arguments);
  },
  updateVerificationFormDescriptionLocal(guildId, description) {
    let obj3;
    const obj2 = { type: "MEMBER_VERIFICATION_FORM_UPDATE", guildId, form: obj3, isLocalUpdate: true };
    obj3 = { description };
    obj = DispatcherDefault;
    obj.dispatch(obj2);
  },
  enableVerificationForm() {
    return obj(...arguments);
  },
  submitVerificationForm() {
    return obj(...arguments);
  },
  clearCoachmark() {
    obj = DispatcherDefault;
    obj.dispatch({ type: "USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR" });
  },
  reportApplication(arg0) {
    let guild;
    let guildJoinRequest;
    let guildJoinRequestUser;
    let reason;
    let reasonOther;
    let responses;
    ({ guild, guildJoinRequest, guildJoinRequestUser, reason, reasonOther, responses } = arg0);
    obj = AnalyticsUtilsDefault;
    const obj2 = { application_id: guildJoinRequest.joinRequestId, applicant_id: guildJoinRequestUser.id, guild_id: guild.id, reason, reason_other: reasonOther, responses };
    obj.track(metroImportAll.GUILD_MEMBER_APPLICATION_REPORTED, obj2);
  }
};
let result = size.fileFinishedImporting("modules/guild_member_verification/MemberVerificationActionCreators.tsx");

export default obj;
export const DISABLE_JOIN_REQUEST_COACHMARK = -1;
export const showCoachmark = function showCoachmark(guildId) {
  obj = DispatcherDefault;
  const obj2 = { type: "USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW", guildId };
  obj.dispatch(obj2);
};