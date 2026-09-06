// === Module 12732: HubActionCreators ===

// Module 12732 (HubActionCreators)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import HTTPUtils from "HTTPUtils" /* 1272 */;
import TypeUtils from "TypeUtils" /* 1969 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4753 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("actions/HubActionCreators.tsx");

export default {
  signup(email, school) {
    const request = { url: Endpoints.HUB_WAITLIST_SIGNUP, body: null, trackedActionData: null, rejectWithError: null };
    let obj = { email, school };
    request.body = obj;
    obj = {
      event: discord_common_AnalyticsUtils.NetworkActionNames.HUB_WAITLIST_SIGNUP,
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
        return TypeUtils.exact({ is_edu_email });
      }
    };
    request.trackedActionData = obj;
    request.rejectWithError = HTTPUtils.rejectWithMigratedError();
    return obj.post(request);
  },
  sendVerificationEmail(email, arg1, id) {
    closure_0 = email;
    closure_1 = arg1;
    closure_2 = id;
    return (async () => {
      const request = {
        url: constants.HUB_EMAIL_VERIFY_SEND,
        body: { email, guild_id, allow_multiple_guilds, use_verification_code: true },
        trackedActionData: {
          event: email(guild_id[3]).NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
          properties(body) {
            let has_matching_guild;
            if (body != null) {
              body = body.body;
              if (body != null) {
                has_matching_guild = body.has_matching_guild;
              }
            }
            return email(guild_id[4]).exact({ has_matching_guild });
          }
        },
        rejectWithError: null
      };
      {
        event: email(guild_id[3]).NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
        properties(body) {
          let has_matching_guild;
          if (body != null) {
            body = body.body;
            if (body != null) {
              has_matching_guild = body.has_matching_guild;
            }
          }
          return email(guild_id[4]).exact({ has_matching_guild });
        }
      };
      request.rejectWithError = email(guild_id[5]).rejectWithMigratedError();
      await allow_multiple_guilds(guild_id[2]).post(request);
      return value.body;
    })();
  },
  verify(arg0) {
    closure_0 = arg0;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_0 = tmp7;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              if (null != closure_0) {
                c3 = 1;
                let obj5 = tmp3(tmp31[2]);
                const request = { url: constants.HUB_EMAIL_VERIFY, body: null, trackedActionData: null, rejectWithError: null };
                const obj1 = { token: tmp39 };
                request.body = obj1;
                const obj2 = { event: closure_0(tmp31[3]).NetworkActionNames.HUB_EMAIL_VERIFY };
                request.trackedActionData = obj2;
                request.rejectWithError = closure_0(tmp31[5]).rejectWithMigratedError();
                constants = 2;
                c5 = 1;
                let obj3 = { value: obj5.post(request), done: false };
                return obj3;
              }
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_2 = tmp31;
              obj3 = tmp3(tmp31[6]);
              const obj4 = { type: "HUB_VERIFY_EMAIL_FAILURE", errors: closure_128_2.body };
              obj3.dispatch(obj4);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_128_0 = value;
              const guild = closure_128_0.body.guild;
              let id;
              if (guild != null) {
                id = guild.id;
              }
              closure_128_1 = id;
              obj = tmp3(tmp31[6]);
              obj5 = { type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: closure_128_1 };
              obj.dispatch(obj5);
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          }
          c5 = 3;
        } catch (tmp31) {
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
  verifyCode(arg0, arg1, email) {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = email;
    return (async () => {
      if (c5 === 2) {
        c5 = 3;
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
          c5 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const guild_id = tmp3;
              closure_0 = tmp7;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              if (null != closure_0) {
                c3 = 1;
                let obj6 = guild_id(email[2]);
                const request = { url: constants.HUB_EMAIL_VERIFY_CODE, body: null, trackedActionData: null, rejectWithError: null };
                const obj1 = { code: tmp43, guild_id, email };
                request.body = obj1;
                const obj2 = { event: closure_0(email[3]).NetworkActionNames.HUB_EMAIL_VERIFY };
                request.trackedActionData = obj2;
                request.rejectWithError = closure_0(email[5]).rejectWithMigratedError();
                constants = 2;
                c5 = 1;
                const obj3 = { value: obj6.post(request), done: false };
                return obj3;
              } else {
                c5 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_2 = email;
            let obj4 = guild_id(email[6]);
            obj4 = { type: "HUB_VERIFY_EMAIL_FAILURE", errors: closure_128_2.body };
            obj4.dispatch(obj4);
            throw closure_128_2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_128_0 = value;
            const guild = closure_128_0.body.guild;
            let id;
            if (guild != null) {
              id = guild.id;
            }
            closure_128_1 = id;
            obj = guild_id(email[6]);
            obj6 = { type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: closure_128_1 };
            obj.dispatch(obj6);
            c3 = 0;
            c5 = 3;
            const obj7 = { value: closure_128_0.body, done: true };
            return obj7;
          }
        } catch (tmp33) {
          email = tmp33;
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