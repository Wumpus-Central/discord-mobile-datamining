// discord_app/actions/HubActionCreators.tsx
import Constants from "../Constants.tsx";
import discord_common_AnalyticsUtils from "../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import TypeUtils from "../../discord_common/js/packages/type-utils/TypeUtils.tsx";
import TrackedHTTPUtilsDefault from "../utils/TrackedHTTPUtils.tsx";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../_runtime/metro/00002__.js";

let c5, constants;

const Endpoints = Constants.Endpoints;
let obj = {
  signup(email, school) {
    let obj;
    let obj4;
    function properties(body) {
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
      const obj = TypeUtils;
      return obj.exact({ is_edu_email });
    }
    const request = {
      url: Endpoints.HUB_WAITLIST_SIGNUP,
      body: obj,
      trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.HUB_WAITLIST_SIGNUP, properties },
      rejectWithError: obj4.rejectWithMigratedError(),
    };
    obj = { email, school };
    const post = TrackedHTTPUtilsDefault.post;
    ({ event: discord_common_AnalyticsUtils.NetworkActionNames.HUB_WAITLIST_SIGNUP, properties });
    obj4 = HTTPUtils;
    return post(request);
  },
  sendVerificationEmail(email, arg1, id) {
    let closure_0 = email;
    let closure_1 = arg1;
    let closure_2 = id;
    return (async () => {
      let obj4;
      let obj5;
      let obj9;
      const request = {
        url: constants.HUB_EMAIL_VERIFY_SEND,
        body: obj4,
        trackedActionData: obj5,
        rejectWithError: obj9.rejectWithMigratedError(),
      };
      obj4 = { email, guild_id, allow_multiple_guilds, use_verification_code: true };
      obj5 = {
        event: email(guild_id[3]).NetworkActionNames.HUB_EMAIL_VERIFY_SEND,
        properties(body) {
          let has_matching_guild;
          if (body != null) {
            body = body.body;
            if (body != null) {
              has_matching_guild = body.has_matching_guild;
            }
          }
          const obj = email(guild_id[4]);
          return obj.exact({ has_matching_guild });
        },
      };
      const post = allow_multiple_guilds(guild_id[2]).post;
      const tmp10 = allow_multiple_guilds(guild_id[2]);
      obj9 = email(guild_id[5]);
      await post(request);
      return value.body;
    })();
  },
  verify(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let body;
      let closure_1;
      let obj5;
      let obj6;
      let obj9;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let id;
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
              closure_0 = undefined;
              id = undefined;
              if (null != closure_0) {
                c3 = 1;
                const request = {
                  url: constants.HUB_EMAIL_VERIFY,
                  body: obj5,
                  trackedActionData: obj6,
                  rejectWithError: obj9.rejectWithMigratedError(),
                };
                obj5 = { token: tmp36 };
                obj6 = { event: closure_0(body[3]).NetworkActionNames.HUB_EMAIL_VERIFY };
                const post = tmp(body[2]).post;
                const tmp24 = tmp(body[2]);
                obj9 = closure_0(body[5]);
                constants = 2;
                c5 = 1;
                const obj7 = { value: post(request), done: false };
                return obj7;
              }
            }
          } else if (1 === constants) {
            c3 = 0;
            const obj8 = { type: "HUB_VERIFY_EMAIL_FAILURE", errors: body.body };
            const obj4 = tmp(body[6]);
            obj4.dispatch(obj8);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            closure_0 = value;
            const guild = closure_0.body.guild;
            id = undefined;
            if (guild != null) {
              id = guild.id;
            }
            const obj11 = { type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: id };
            const obj = tmp(body[6]);
            obj.dispatch(obj11);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp29) {
          body = tmp29;
          if (0 === c3) {
            c5 = 3;
            throw tmp29;
          } else {
            constants = 1;
          }
        }
      }
    })();
  },
  verifyCode(guild2, arg1, email) {
    let closure_1 = arg1;
    let closure_2 = email;
    return (async () => {
      let closure_0;
      let obj10;
      let obj4;
      let obj6;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let guild_id;
          let id;
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
              guild_id = tmp;
              guild2 = undefined;
              id = undefined;
              if (null != guild2) {
                c3 = 1;
                const request = {
                  url: constants.HUB_EMAIL_VERIFY_CODE,
                  body: obj4,
                  trackedActionData: obj6,
                  rejectWithError: obj10.rejectWithMigratedError(),
                };
                obj4 = { code: tmp40, guild_id, email };
                obj6 = { event: guild2(email[3]).NetworkActionNames.HUB_EMAIL_VERIFY };
                const post = guild_id(email[2]).post;
                const tmp24 = guild_id(email[2]);
                obj10 = guild2(email[5]);
                constants = 2;
                c5 = 1;
                const obj7 = { value: post(request), done: false };
                return obj7;
              } else {
                c5 = 3;
                return { value: "IconComponent", done: null };
              }
            }
          } else if (1 === constants) {
            c3 = 0;
            const obj8 = { type: "HUB_VERIFY_EMAIL_FAILURE", errors: email.body };
            const obj5 = guild_id(email[6]);
            obj5.dispatch(obj8);
            throw email;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            guild2 = value;
            const guild = guild2.body.guild;
            id = undefined;
            if (guild != null) {
              id = guild.id;
            }
            const obj11 = { type: "HUB_VERIFY_EMAIL_SUCCESS", guildId: id };
            const obj = guild_id(email[6]);
            obj.dispatch(obj11);
            c3 = 0;
            c5 = 3;
            const obj12 = { value: guild2.body, done: true };
            return obj12;
          }
        } catch (tmp31) {
          email = tmp31;
          if (0 === c3) {
            c5 = 3;
            throw tmp31;
          } else {
            constants = 1;
          }
        }
      }
    })();
  },
};
const result = size.fileFinishedImporting("actions/HubActionCreators.tsx");

export default obj;
