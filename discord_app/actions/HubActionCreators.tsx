// === Module 12875: HubActionCreators ===

// Module 12875 (HubActionCreators)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import TypeUtils from "TypeUtils" /* 1970 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4831 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("actions/HubActionCreators.tsx");

export default {
  signup(email, school) {
    const request = { url: Endpoints.HUB_WAITLIST_SIGNUP, body: { email, school }, trackedActionData: null, rejectWithError: null };
    const obj = TrackedHTTPUtilsDefault;
    const obj2 = { email, school };
    request.trackedActionData = {
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
    const obj3 = {
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
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_0 = tmp7;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              if (null != closure_0) {
                c3 = 1;
                const request = { url: constants.HUB_EMAIL_VERIFY, body: null, trackedActionData: null, rejectWithError: null };
                const obj5 = { token: tmp39 };
                request.body = obj5;
                const obj7 = { event: closure_0(tmp31[3]).NetworkActionNames.HUB_EMAIL_VERIFY };
                request.trackedActionData = obj7;
                const obj6 = tmp3(tmp31[2]);
                request.rejectWithError = closure_0(tmp31[5]).rejectWithMigratedError();
                constants = 2;
                c5 = 1;
                const obj8 = { value: obj6.post(request), done: false };
                return obj8;
              }
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_2 = tmp31;
              const obj9 = { type: "HUB_VERIFY_EMAIL_FAILURE", errors: closure_128_2.body };
              tmp3(tmp31[6]).dispatch(obj9);
              const obj4 = tmp3(tmp31[6]);
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
              const obj11 = { type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: closure_128_1 };
              tmp3(tmp31[6]).dispatch(obj11);
              c3 = 0;
              const obj = tmp3(tmp31[6]);
            }
            c3 = 0;
            c5 = 3;
            const obj12 = { value, done: true };
            return obj12;
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
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const guild_id = tmp3;
              closure_0 = tmp7;
              closure_128_0 = undefined;
              closure_128_1 = undefined;
              if (null != closure_0) {
                c3 = 1;
                const request = { url: constants.HUB_EMAIL_VERIFY_CODE, body: null, trackedActionData: null, rejectWithError: null };
                const obj4 = { code: tmp43, guild_id, email };
                request.body = obj4;
                const obj6 = { event: closure_0(email[3]).NetworkActionNames.HUB_EMAIL_VERIFY };
                request.trackedActionData = obj6;
                const obj7 = guild_id(email[2]);
                request.rejectWithError = closure_0(email[5]).rejectWithMigratedError();
                constants = 2;
                c5 = 1;
                const obj8 = { value: obj7.post(request), done: false };
                return obj8;
              } else {
                c5 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
          } else if (1 === tmp7) {
            c3 = 0;
            closure_128_2 = email;
            const obj9 = { type: "HUB_VERIFY_EMAIL_FAILURE", errors: closure_128_2.body };
            guild_id(email[6]).dispatch(obj9);
            throw closure_128_2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_128_0 = value;
            const guild = closure_128_0.body.guild;
            let id;
            if (guild != null) {
              id = guild.id;
            }
            closure_128_1 = id;
            const obj12 = { type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: closure_128_1 };
            guild_id(email[6]).dispatch(obj12);
            c3 = 0;
            c5 = 3;
            const obj13 = { value: closure_128_0.body, done: true };
            return obj13;
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