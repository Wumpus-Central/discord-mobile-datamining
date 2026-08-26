// discord_app/actions/HubActionCreators.tsx
import encodeProperties from "../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import sendRequest from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef4665 from "../utils/TrackedHTTPUtils.tsx";
import closure_3 from "../../_runtime/00005_asyncGeneratorStep.js";
import { Endpoints } from "../Constants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("actions/HubActionCreators.tsx");

export default {
  signup(email, school) {
    let obj = _modDef4665;
    obj = { url: Endpoints.HUB_WAITLIST_SIGNUP, body: obj, trackedActionData: null, rejectWithError: null };
    obj = { email, school };
    obj[2] = {
      event: encodeProperties.NetworkActionNames.HUB_WAITLIST_SIGNUP,
      properties(body) {
        let email_domain;
        if (body != null) {
          body = body.body;
          if (body != null) {
            email_domain = body.email_domain;
          }
        }
        let is_edu_email = false;
        if (null != email_domain) {
          const parts = email_domain.split(".");
          is_edu_email = -1 !== parts.indexOf("edu");
        }
        return callback(table[4]).exact({ is_edu_email });
      }
    };
    obj1 = {
      event: encodeProperties.NetworkActionNames.HUB_WAITLIST_SIGNUP,
      properties(body) {
        let email_domain;
        if (body != null) {
          body = body.body;
          if (body != null) {
            email_domain = body.email_domain;
          }
        }
        let is_edu_email = false;
        if (null != email_domain) {
          const parts = email_domain.split(".");
          is_edu_email = -1 !== parts.indexOf("edu");
        }
        return callback(table[4]).exact({ is_edu_email });
      }
    };
    obj[3] = sendRequest.rejectWithMigratedError();
    return obj.post(obj);
  },
  sendVerificationEmail(closure_3, arg1, closure_0) {
    closure_0 = closure_3;
    closure_1 = arg1;
    closure_2 = closure_0;
    return callback(function*() {
      const obj5 = v02(closure_1_2[2]);
      obj1 = { url: null, body: null, trackedActionData: null, rejectWithError: null };
      obj1[0] = closure_1_4.HUB_EMAIL_VERIFY_SEND;
      const obj2 = { email: null, guild_id: null, allow_multiple_guilds: null, use_verification_code: true };
      obj2[0] = v0;
      obj2[1] = closure_1_2;
      obj2[2] = v02;
      obj1[1] = obj2;
      const obj3 = { event: null, properties: null };
      obj3[0] = v0(closure_1_2[3]).NetworkActionNames.HUB_EMAIL_VERIFY_SEND;
      obj3[1] = function properties(body) {
        let has_matching_guild;
        if (body != null) {
          body = body.body;
          if (body != null) {
            has_matching_guild = body.has_matching_guild;
          }
        }
        return v3(table[4]).exact({ has_matching_guild });
      };
      obj1[2] = obj3;
      obj1[3] = v0(closure_1_2[5]).rejectWithMigratedError();
      yield obj5.post(obj1);
      return arg1.body;
    })();
  },
  verify(arg0) {
    closure_0 = arg0;
    return callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let id = tmp3;
              let body = tmp7;
              body = undefined;
              id = undefined;
              if (null != closure_1_0) {
                c3 = 1;
                let obj5 = closure_1_1(closure_1_2[2]);
                obj1 = { url: null, body: null, trackedActionData: null, rejectWithError: null };
                obj1[0] = constants.HUB_EMAIL_VERIFY;
                const obj2 = { token: null };
                obj2[0] = tmp40;
                obj1[1] = obj2;
                let obj3 = { event: null };
                obj3[0] = closure_1_0(closure_1_2[3]).NetworkActionNames.HUB_EMAIL_VERIFY;
                obj1[2] = obj3;
                obj1[3] = closure_1_0(closure_1_2[5]).rejectWithMigratedError();
                constants = 2;
                c5 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = obj5.post(obj1);
                return obj4;
              }
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              obj3 = closure_1_1(closure_1_2[6]);
              obj5 = { type: "HUB_VERIFY_EMAIL_FAILURE", errors: null };
              obj5[1] = body2.body;
              obj3.dispatch(obj5);
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              body = arg1;
              const guild = body.body.guild;
              id = undefined;
              if (guild != null) {
                id = guild.id;
              }
              obj = closure_1_1(closure_1_2[6]);
              const obj6 = { type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: null };
              obj6[1] = id;
              obj.dispatch(obj6);
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            const obj7 = { value: null, done: true };
            obj7[0] = arg1;
            return obj7;
          }
          c5 = 3;
        } catch (tmp31) {
          body2 = tmp31;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp31;
          } else {
            constants = tmp;
          }
        }
      }
    })();
  },
  verifyCode(closure_0, closure_1_1, closure_02) {
    closure_1 = closure_1_1;
    closure_2 = closure_02;
    return callback(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let id = tmp3;
              closure_0 = tmp7;
              closure_0 = undefined;
              id = undefined;
              if (null != closure_1_0) {
                c3 = 1;
                let obj6 = closure_1_1(closure_1_2[2]);
                obj1 = { url: null, body: null, trackedActionData: null, rejectWithError: null };
                obj1[0] = constants.HUB_EMAIL_VERIFY_CODE;
                const obj2 = { code: null, guild_id: null, email: null };
                obj2[0] = tmp44;
                obj2[1] = closure_1_1;
                obj2[2] = closure_1_2;
                obj1[1] = obj2;
                const obj3 = { event: null };
                obj3[0] = closure_1_0(closure_1_2[3]).NetworkActionNames.HUB_EMAIL_VERIFY;
                obj1[2] = obj3;
                obj1[3] = closure_1_0(closure_1_2[5]).rejectWithMigratedError();
                constants = 2;
                c5 = 1;
                let obj4 = { value: null, done: false };
                obj4[0] = obj6.post(obj1);
                return obj4;
              } else {
                c5 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          } else if (1 === tmp7) {
            c3 = 0;
            obj4 = closure_1_1(closure_1_2[6]);
            const obj5 = { type: "HUB_VERIFY_EMAIL_FAILURE", errors: null };
            obj5[1] = body.body;
            obj4.dispatch(obj5);
            throw body;
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            closure_0 = arg1;
            const guild = closure_0.body.guild;
            id = undefined;
            if (guild != null) {
              id = guild.id;
            }
            obj = closure_1_1(closure_1_2[6]);
            const obj7 = { type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: null };
            obj7[1] = id;
            obj.dispatch(obj7);
            c3 = 0;
            c5 = 3;
            const obj8 = { value: null, done: true };
            obj8[0] = closure_0.body;
            return obj8;
          }
        } catch (tmp33) {
          body = tmp33;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp33;
          } else {
            constants = tmp;
          }
        }
      }
    })();
  }
};