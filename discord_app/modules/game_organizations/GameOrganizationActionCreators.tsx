// discord_app/modules/game_organizations/GameOrganizationActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationRecord from "../../records/ApplicationRecord.tsx";

require = fn;
let closure_6 = async function _fetchGameOrganization() {
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
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
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp7;
            closure_130_0 = guildId;
            let body;
            let game_organization;
            let application;
            let application_config;
            closure_130_5 = undefined;
            closure_130_6 = undefined;
            closure_130_7 = undefined;
            if (null != guildId) {
              const obj6 = { type: "GAME_ORGANIZATION_FETCH_START", guildId };
              DispatcherDefault.dispatch(obj6);
              c5 = 1;
              const HTTP = HTTPUtils.HTTP;
              const obj7 = { url: Endpoints.GAME_ORGANIZATION(guildId), rejectWithError: true };
              c6 = 2;
              c7 = 1;
              const obj8 = { value: HTTP.get(obj7), done: false };
              return obj8;
            } else {
              c7 = 3;
            }
          }
        } else if (1 === tmp7) {
          c5 = 0;
          closure_130_8 = closure_4;
          const aPIError = new closure_131_0(closure_131_2[6]).APIError(closure_130_8);
          closure_130_7 = aPIError;
          const obj9 = { type: "GAME_ORGANIZATION_FETCH_FAILURE", guildId: closure_130_0, error: closure_130_7 };
          closure_131_1(closure_131_2[3]).dispatch(obj9);
          throw closure_130_8;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          body = value.body;
          game_organization = body.game_organization;
          application = body.application;
          application_config = body.application_config;
          closure_130_5 = closure_131_0(closure_131_2[5]).gameOrganizationFromServer(game_organization);
          closure_130_6 = closure_131_4.createFromServer(application);
          const obj10 = closure_131_0(closure_131_2[5]);
          const obj12 = {
            type: "GAME_ORGANIZATION_FETCH_SUCCESS",
            gameOrganization: closure_130_5,
            application: closure_130_6,
            displayNoun: null,
          };
          let display_noun;
          if (application_config != null) {
            display_noun = application_config.display_noun;
          }
          displayNoun = display_noun;
          if (display_noun == null) {
            displayNoun = null;
          }
          obj12.displayNoun = displayNoun;
          closure_131_1(closure_131_2[3]).dispatch(obj12);
          c5 = 0;
          const obj11 = closure_131_1(closure_131_2[3]);
        }
        c5 = 0;
        c7 = 3;
        const obj = { value, done: true };
        return obj;
      } catch (tmp34) {
        closure_4 = tmp34;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp34;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
let closure_7 = async function _fetchLinkableGameOrganizations(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj4 = { url: Endpoints.LINKABLE_GAME_ORGANIZATIONS(closure_0), rejectWithError: true };
          c5 = 2;
          c6 = 1;
          const obj5 = { value: HTTP.get(obj4), done: false };
          return obj5;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_0 = closure_3;
        const aPIError = new closure_130_0(closure_130_2[6]).APIError(closure_129_0);
        throw aPIError;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        const game_organizations = value.body.game_organizations;
        c4 = 0;
        c6 = 3;
        const obj = {
          value: game_organizations.map(closure_130_0(closure_130_2[5]).linkableGameOrganizationFromServer),
          done: true,
        };
        return obj;
      }
    } catch (tmp26) {
      closure_3 = tmp26;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp26;
      } else {
        c5 = tmp;
      }
    }
  }
};
const Endpoints = fn(1072).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_organizations/GameOrganizationActionCreators.tsx");

export function fetchGameOrganization() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function fetchLinkableGameOrganizations() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
